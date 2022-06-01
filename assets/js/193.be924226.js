(window.webpackJsonp=window.webpackJsonp||[]).push([[193],{825:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tcp-elk-日志收集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp-elk-日志收集"}},[s._v("#")]),s._v(" TCP + ELK 日志收集")]),s._v(" "),a("h2",{attrs:{id:"配置logstash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置logstash"}},[s._v("#")]),s._v(" 配置"),a("code",[s._v("Logstash")])]),s._v(" "),a("div",{staticClass:"language-yml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /usr/local/logstash-7.7.1/config/tcp2es.conf")]),s._v("\n\ninput "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  tcp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    type ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(' "tcp"\n    port ='),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" 6789\n    mode ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(' "server"\n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\noutput "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  elasticsearch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    hosts ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.1.6:9200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    index ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")]),s._v(' "tcp'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("+YYYY.MM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v('"    \n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("h2",{attrs:{id:"写入测试信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写入测试信息"}},[s._v("#")]),s._v(" 写入测试信息")]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("nc")]),s._v("命令向主机的"),a("code",[s._v("tcp:6789")]),s._v("端口发送测试信息:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"TEST TCP MESSAGES"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.6 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6789")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.6 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6789")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" /etc/rsyslog.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"启动相关服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动相关服务"}},[s._v("#")]),s._v(" 启动相关服务")]),s._v(" "),a("p",[s._v("启动"),a("code",[s._v("logstash")]),s._v("和"),a("code",[s._v("es")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# es")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master elasticsearch-7.7.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" esuser\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("esuser@master elasticsearch-7.7.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("$ bin/elasticsearch -d\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# logstash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master logstash-7.7.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# bin/logstash -f config/tcp2es.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"查看服务状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看服务状态"}},[s._v("#")]),s._v(" 查看服务状态")]),s._v(" "),a("h3",{attrs:{id:"es-状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es-状态"}},[s._v("#")]),s._v(" ES 状态")]),s._v(" "),a("p",[s._v("略.")]),s._v(" "),a("p",[s._v("参考之前文章查看"),a("code",[s._v("browser")]),s._v("方法.")]),s._v(" "),a("h3",{attrs:{id:"kibana-状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kibana-状态"}},[s._v("#")]),s._v(" Kibana 状态")]),s._v(" "),a("p",[s._v("略.")]),s._v(" "),a("p",[s._v("参考之前的文章添加索引, 在此不再赘述.")])])}),[],!1,null,null,null);t.default=e.exports}}]);