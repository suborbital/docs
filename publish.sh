#!/bin/sh
set -e

INPUT_BRANCH=${INPUT_BRANCH:-gh-pages}
INPUT_DIRECTORY=${INPUT_DIRECTORY:-'website/build'}
OUTPUT_DIRECTORY=${OUTPUT_DIRECTORY:-'gh-pages'}
OUTPUT_SUBDIR=${OUTPUT_DIRECTORY}/${GITHUB_HEAD_REF}
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
mkdir -p "${OUTPUT_SUBDIR}"
rm -rf "${OUTPUT_SUBDIR}"
cp -r "${INPUT_DIRECTORY}" "${OUTPUT_SUBDIR}"

rm -rf "${OUTPUT_SUBDIR}/.git"
mv output.git "${OUTPUT_DIRECTORY}/.git"
cd "${OUTPUT_DIRECTORY}"
touch .nojekyll

git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"
git add .
git commit -m "Push to Github Pages"

git push "${remote_repo}" HEAD:${INPUT_BRANCH} --follow-tags --force
