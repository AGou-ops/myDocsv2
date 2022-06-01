(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{824:function(t,s,n){"use strict";n.r(s);var a=n(6),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"logstash-日志分流"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#logstash-日志分流"}},[t._v("#")]),t._v(" Logstash 日志分流")]),t._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[t._v("1.配置logstash\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@elkstack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1 ~"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# vim /data/elk/logstash/conf.d/nginx_tomcat.conf ")]),t._v("\ninput "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tfile "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tpath ="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "/var/log/test/nginx.log"\n\t\tadd_field ='),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n\t\t\t"app" ='),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "nginx"\t\t\t\t'),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#搜集nginx的日志，在日志中增加一个app=nginx的字段")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tfile "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tpath ="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "/var/log/test/tomcat.log"\n\t\tadd_field ='),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n\t\t\t"app" ='),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "tomcat"\n\t\t'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nfilter "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tif "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" in "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tengine"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#判断app的字段值为nginx或者tengine")]),t._v("\n\t\tmutate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义mutate")]),t._v("\n\t\t\tadd_field ="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#增加一个字段")]),t._v('\n\t\t\t\t"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@metadata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('" ='),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "nginx'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("+YYYY.MM.dd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\t\t'),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#声明字段是元数据，字段名为target_index，值为nginx日志存储的索引库名称")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\telse if "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(' == "tomcat" '),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#判断app的字段值为tomcat")]),t._v("\n\t\tmutate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义mutate")]),t._v("\n\t\t\tadd_field ="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#增加一个字段")]),t._v('\n\t\t\t\t"'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@metadata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('" ='),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "tomcat'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("+YYYY.MM.dd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\t\t'),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#声明字段是元数据，字段名为target_index，值为tomcat日志存储的索引库名称")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\n\telse "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\t\t\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果所有条件都不满足，那么就存储到下面的这个索引库")]),t._v("\n\t\tmutate "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            add_field ="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v('\n                "'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@metadata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v('" ='),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "unknown'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("+YYYY.MM.dd"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\t\t\t'),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#值为unknown")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\noutput "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\telasticsearch "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\thosts ="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.20.11:9200"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.20.12:9200"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.20.13:9200"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\tindex ="),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v('  "%'),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("@metadata"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("target_index"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"\t\t'),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#引用元数据target_index，将对应的日志存储到对应的索引库中")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n2.重启logstash\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@elkstack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("1 conf.d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl restart logstash")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br"),n("span",{staticClass:"line-number"},[t._v("38")]),n("br"),n("span",{staticClass:"line-number"},[t._v("39")]),n("br"),n("span",{staticClass:"line-number"},[t._v("40")]),n("br"),n("span",{staticClass:"line-number"},[t._v("41")]),n("br"),n("span",{staticClass:"line-number"},[t._v("42")]),n("br"),n("span",{staticClass:"line-number"},[t._v("43")]),n("br"),n("span",{staticClass:"line-number"},[t._v("44")]),n("br"),n("span",{staticClass:"line-number"},[t._v("45")]),n("br"),n("span",{staticClass:"line-number"},[t._v("46")]),n("br"),n("span",{staticClass:"line-number"},[t._v("47")]),n("br"),n("span",{staticClass:"line-number"},[t._v("48")]),n("br"),n("span",{staticClass:"line-number"},[t._v("49")]),n("br"),n("span",{staticClass:"line-number"},[t._v("50")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);