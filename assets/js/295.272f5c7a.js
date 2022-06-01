(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{928:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tomcat-session-memcached"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat-session-memcached"}},[s._v("#")]),s._v(" Tomcat Session(memcached)")]),s._v(" "),a("h1",{attrs:{id:"nginx-tomcat-memcache-会话保持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-tomcat-memcache-会话保持"}},[s._v("#")]),s._v(" nginx + tomcat + memcache 会话保持")]),s._v(" "),a("p",[s._v("环境：")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("角色")]),s._v(" "),a("th",[s._v("IP")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("nginx、tomcat-1、memcached")]),s._v(" "),a("td",[s._v("172.16.1.128")])]),s._v(" "),a("tr",[a("td",[s._v("tomcat-2、memcached")]),s._v(" "),a("td",[s._v("172.16.1.136")])])])]),s._v(" "),a("h2",{attrs:{id:"配置-nginx-反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-反向代理"}},[s._v("#")]),s._v(" 配置 Nginx 反向代理")]),s._v(" "),a("p",[s._v("编辑 nginx 主配置文件"),a("code",[s._v("/etc/nginx/nginx.conf")]),s._v(" ：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("    upstream tomcat-server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".1.128:8080 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".1.136:8080 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("weight")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 并直接修改原来的 server 段内容")]),s._v("\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            server_name  localhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            root         /usr/share/nginx/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n            location ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".jsp$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                proxy_pass http://tomcat-server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                proxy_set_header Host "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n            location / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                index  index.html index.htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);