#!/bin/bash
set -e

# cp -rnf  ./docs/* ../myDocs/docs/src/

# rsync YYDS!无敌
rsync -av --progress ./docs/* ../myDocs/docs/src/ --exclude ./docs/.vuepress/ --exclude ./docs/guide/

sed -i '' -e '110,$d' ../myDocs/docs/src/.vuepress/config.js && sed -i '' -e '85,$p' ./docs/.vuepress/config.js  >> ../myDocs/docs/src/.vuepress/config.js

echo -e "\n\n ========================= \n"

/bin/bash ./push.sh

echo  "缓一缓"
sleep 0.5

cd ../myDocs/docs

/usr/bin/bash ./push.sh
