#!/bin/sh
set -e

INPUT_BRANCH=${INPUT_BRANCH:-gh-pages}
INPUT_DIRECTORY=${INPUT_DIRECTORY:-'website/build'}
OUTPUT_DIRECTORY=${OUTPUT_DIRECTORY:-'gh-pages'}
DEPLOY_TARGET=${GITHUB_HEAD_REF:-'preview'}
OUTPUT_SUBDIR=${OUTPUT_DIRECTORY}/${DEPLOY_TARGET}
echo "Publishing INPUT_BRANCH=${INPUT_BRANCH} >> OUTPUT_SUBDIR=${OUTPUT_SUBDIR}";

echo "Push to branch $INPUT_BRANCH";
[ -z "${GITHUB_TOKEN}" ] && {
    echo 'Missing input "GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }}".';
    exit 1;
};

remote_repo="https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

rm -rf "${OUTPUT_DIRECTORY}"
git clone --branch "${INPUT_BRANCH}" "${remote_repo}" "${OUTPUT_DIRECTORY}"
mv "${OUTPUT_DIRECTORY}/.git" output.git
rm -rf "${OUTPUT_SUBDIR}"
mkdir -p "$(dirname ${OUTPUT_SUBDIR})"
cp -r "${INPUT_DIRECTORY}" "${OUTPUT_SUBDIR}"

rm -rf "${OUTPUT_DIRECTORY}/.git"
mv output.git "${OUTPUT_DIRECTORY}/.git"
cd "${OUTPUT_DIRECTORY}"
touch .nojekyll
echo '<!DOCTYPE html><html><head><meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"><meta http-equiv="Refresh" content="0; url=/docs/preview/"></head><body><p>Redirecting to docs preview at <a href="/docs/preview/">suborbital.github.io/docs/preview/</a>.</p></body></html>' >> index.html

git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"
git add .
git commit -m "Publish ${DEPLOY_TARGET}"

git push "${remote_repo}" HEAD:${INPUT_BRANCH} --follow-tags --force
