(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{772:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"redis-单机部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-单机部署"}},[s._v("#")]),s._v(" Redis 单机部署")]),s._v(" "),a("h2",{attrs:{id:"通过仓库安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过仓库安装"}},[s._v("#")]),s._v(" 通过仓库安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis-server\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  ubuntu debian")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("p",[s._v("安装集群插件（新版本6.0似乎已经内置）：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# EPEL源安装ruby支持")]),s._v("\n$ yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ruby rubygems -y\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看gem源")]),s._v("\n$ gem sources -l\n*** CURRENT SOURCES ***\n\nhttp://rubygems.org/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加阿里云的gem源")]),s._v("\n$ gem sources -a http://mirrors.aliyun.com/rubygems/\nhttp://mirrors.aliyun.com/rubygems/ added to sources \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除国外gem源")]),s._v("\n$ gem sources  --remove https://rubygems.org/\nhttp://rubygems.org/ removed from sources\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次查看gem源")]),s._v("\n$ gem sources -l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用gem安装redis的ruby插件")]),s._v("\n$ gem "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis -v "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.3")]),s._v(".3\nSuccessfully installed redis-3.3.3\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" gem installed\nInstalling ri documentation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" redis-3.3.3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nInstalling RDoc documentation "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" redis-3.3.3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("编译安装：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-3.2.12.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf redis-3.2.12.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移动到指定目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" redis-3.2.12 /application/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 做软链接")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /application/redis-3.2.12 /application/redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入redis目录")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /application/redis\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编译")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加环境变量")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/profile.d/redis.sh\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/application/redis/src:'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v('"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);