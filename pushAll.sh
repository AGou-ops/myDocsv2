#!/bin/sh
set -e

# cp -rnf  ./docs/* ../myDocs/docs/src/

# rsync YYDS!无敌
rsync -av --progress ./docs/* ../myDocs/docs/src/ --exclude ./docs/.vuepress/ --exclude ./docs/guide/

echo -e "\n\n ========================= \n"

git add -A
git commit -m "rebuilding site $(date)"
git push 

echo  "缓一缓"
sleep 1

cd ../myDocs/docs
git add -A
git commit -m "rebuilding site $(date)"
git push 
