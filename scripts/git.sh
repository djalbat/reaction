#!/usr/bin/env bash

if [[ "$2" != "" ]];then
VERSION="$1"
COMMIT_MESSAGE="$2"
else
VERSION="patch"
COMMIT_MESSAGE="$1"
fi

npm version $VERSION --no-git-tag-version

git add . --all
git commit -m "$COMMIT_MESSAGE"
git push

