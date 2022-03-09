#/bin/bash

cd ./docs/post
tree -H . > TMP_FILE

# sed -i在macos上使用方式和UNIX上的sed不一样.....
# sed -i 's@\.\/@/myDocsv2/post/@g' TMP_FILE
# sed -i 's#\.md#\.html#g' TMP_FILE
# sed -i "s#\.html<#<#g" TMP_FILE

# 后来发现ex也不好用，输入完命令终端直接卡死可还行？
# ex -sc '%s@\.\/@/myDocsv2/post/@|x' TMP_FILE
# ex -sc '%s/\.md/\.html/|x' TMP_FILE
# ex -sc '%s@\.html<@<@|x' TMP_FILE

# 还是用sed吧
sed -i '' -e 's@\.\/@/myDocsv2/post/@g' TMP_FILE
sed -i '' -e 's#\.md#\.html#g' TMP_FILE
sed -i '' -e 's#\.html<#<#g' TMP_FILE

sleep 0.5
mv ./TMP_FILE ../guide/README.md
cd -

git add -A
git commit -m "rebuilding site $(date)"
git push origin HEAD:master
