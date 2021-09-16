#/bin/sh
set -x
cd ./docs/post
tree -H . > TMP_FILE
sed -i 's@\.\/@/myDocs/post/@g' TMP_FILE
sed -i 's#\.md#\.html#g' TMP_FILE
sed -i "s#\.html<#<#g" TMP_FILE
sleep 0.5
mv ./TMP_FILE ../guide/README.md
cd -

git add -A
git commit -m "rebuilding site $(date)"
git push origin HEAD:master
