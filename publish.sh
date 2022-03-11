#!/bin/sh
set -e

INPUT_BRANCH=${INPUT_BRANCH:-gh-pages}
INPUT_DIRECTORY=${INPUT_DIRECTORY:-'website/build'}
OUTPUT_DIRECTORY=${OUTPUT_DIRECTORY:-'gh-pages'}
OUTPUT_SUBDIR=${OUTPUT_DIRECTORY}/${GITHUB_REF_NAME}
echo "Publishing INPUT_BRANCH=${INPUT_BRANCH} >> OUTPUT_SUBDIR=${OUTPUT_SUBDIR}";
echo "This is a test, stopping deployment."
exit 0;

echo "Push to branch $INPUT_BRANCH";
[ -z "${GITHUB_TOKEN}" ] && {
    echo 'Missing input "GITHUB_TOKEN=${{ secrets.GITHUB_TOKEN }}".';
    exit 1;
};

remote_repo="https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"

rm -rf "${OUTPUT_DIRECTORY}"
git clone --branch "${INPUT_BRANCH}" "${remote_repo}" "${OUTPUT_DIRECTORY}"
mv "${OUTPUT_DIRECTORY}/.git" output.git
rm -rf "${OUTPUT_DIRECTORY}"
cp -r "${INPUT_DIRECTORY}" "${OUTPUT_DIRECTORY}"

mv output.git "${OUTPUT_DIRECTORY}/.git"
cd "${OUTPUT_DIRECTORY}"
touch .nojekyll

git config --local user.email "action@github.com"
git config --local user.name "GitHub Action"
git add .
git commit -m "Push to Github Pages"

git push "${remote_repo}" HEAD:${INPUT_BRANCH} --follow-tags --force
