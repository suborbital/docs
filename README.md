# The Suborbital documentation

This repository contains the [documentation](https://suborbital.github.io/docs) for all projects under Suborbital.
We are so glad that you want to contribute!

## Using this repository

You can preview, use, and edit this repository locally using [Docusaurus](https://docusaurus.io/).
We use Docusaurus v2 and you would need the below listed prerequisites
installed locally to use the repository. Note: Docusaurus is automatically installed as a Nodejs module (see below).

## Prerequisites

To use this repository, please ensure you have the following installed
before you start

- [Git](https://git-scm.com/downloads)
- [Nodejs version 14 or greater](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/) (*optional, but good to have*)

Clone the git repository by using the below command

```bash
git clone https://github.com/suborbital/docs.git
```

## Running the website locally

Navigate to the docs/website folder and start up the website.

There are three ways of building and running the website:

### npm

```bash
cd docs/website
npm install
npm run build
npm run serve
```

### yarn

```bash
cd docs/website
yarn
yarn run start
```

### Docker

```bash
docker build . -t subo/docs
docker run -p 8080:80 subo/docs
```

After the second command, you won't see any output, but can open the docs at `localhost:8000`

## Spellcheck

In order to run spellcheck (the same way that CI runs it), you need to install the following:

macOS:
```
brew install aspell
pip3 install pyspelling pymdown-extensions
```

And then run 
```
make spellcheck
```
