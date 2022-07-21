const visit = require('unist-util-visit');
const { join, dirname } = require('path');
const CACHEDIR = join(__dirname, '../.cache');
const { mkdir } = require('fs');
const fetch = require('node-fetch')

const plugin = (options) => {
  const transformer = async (ast, vfile) => {
    //DEBUG:
    //if (vfile.path.includes('test.md')) console.log(ast)

    const cblocks = []
    const assets = []

    // Collect all (relevant) codeblocks
    visit(ast, 'code', async (node) => {
      // In this extension we repurpose the language hint for a source URL
      // Code blocks that need their URL cached & replaced with the correct imports:
      if (node.lang?.startsWith('http://') || node.lang?.startsWith('https://')) {
        cblocks.push(node)
      }
    });

    //DEBUG:
    //if (cblocks.length) console.log(cblocks)

    // We run the changes outside of the visitor because the visitor does not support callbacks
    for (const node of cblocks) {
      const url = node.lang;
      const lang = await detectLang(url);
      const file = await cachedFile(url);
      node.lang = lang
      assets.push(file.path)
      const assetId = assets.length-1

      // TODO: decide whether to use asset imports & external files or embedded content
      node.value = `/* ${url} {__externalCodeSnippet${assetId}} */\n` + file.contents;
    }

    //DEBUG:
    //if (cblocks.length) console.log(cblocks, assets)
  };
  return transformer;
};

module.exports = plugin;


async function detectLang(url) {
  //TODO:
  return 'rust'
}

async function cachedFile(url) {
  // Convert the URL into a cache path
  const path = cachePath(url);
  if (!path) {
    return `/* ERROR: could not cache file: ${url} */`
  }
  // TODO: maybe we want to have a whitelist for allowed paths?
  // E.g. limit to https://raw.githubusercontent.com/suborbital/**

  // <check if file is already cached at p>

  // TODO: handle request errors
  const contents = await fetch(url).then(r => r.text());

  // <ensure recursively mkdir(dirname(p))
  // <cache file contents at p>

  // Return both path and contents
  return { path, contents }
}

function cachePath(url) {
  const p = (/https?:\/\/(.*)/.exec(url) ?? [])[1];
  if (!p) {
    console.error('Cache path invalid!');
    return void 0;
  }

  return join(CACHEDIR, p);
}