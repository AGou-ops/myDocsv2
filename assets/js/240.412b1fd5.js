(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{872:function(s,a,t){"use strict";t.r(a);var n=t(6),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ipvsadm-参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipvsadm-参数"}},[s._v("#")]),s._v(" ipvsadm 参数")]),s._v(" "),t("h2",{attrs:{id:"ipvsadm简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipvsadm简介"}},[s._v("#")]),s._v(" ipvsadm简介")]),s._v(" "),t("p",[s._v("ipvsadm是linux下的LVS虚拟服务器的管理工具，LVS工作于内核空间，而ipvsadm则提供了用户空间的接口。")]),s._v(" "),t("h2",{attrs:{id:"ipvsadm相关文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ipvsadm相关文件"}},[s._v("#")]),s._v(" ipvsadm相关文件")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("服务名:         ipvsadm.service\n主程序：        /usr/sbin/ipvsadm\n规则保存工具：  /usr/sbin/ipvsadm-save\n规则重载工具：  /usr/sbin/ipvsadm-restore\n配置文件：      /etc/sysconfig/ipvsadm-config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("h3",{attrs:{id:"管理集群服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理集群服务"}},[s._v("#")]),s._v(" 管理集群服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ipvsadm -A"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("E -t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("f service-address:port "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s scheduler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n-A  创建一个LVS集群\n-E  修改一个LVS集群\n-C  清空LVS规则\n-R  重载LVS规则，重载规则时需要利用重定向"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("\n-S  保存\n-Z  清空计数器\n-L  查看LVS规则\n    -n：        以数字形式输出地址和端口号\n    --exact：   扩展信息，精确值\n    -c：        当前IPVS连接输出\n    --stats：   统计信息\n    --rate ：   输出速率信息\n\nipvsadm -D -t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("f service-address\n-D  删除\n\nservice-address：\n    -t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("f：创建LVS集群服务为tcp/udp/firewall mark服务\n    -t：TCP协议的端口，VIP:TCP端口\n    -u：UDP协议的端口，VIP:UDP端口\n    -f：firewall MARK，标记，一个数字\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-s scheduler"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：指定集群的调度算法，默认为wlc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("加权最少链路"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("h3",{attrs:{id:"管理集群服务上的realserver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理集群服务上的realserver"}},[s._v("#")]),s._v(" 管理集群服务上的RealServer")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ipvsadm -a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("e -t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("u"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("f service-address -r server-address "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-g"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-w weight"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nserver-address：\n格式：rip"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(":port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" 如省略port，不作端口映射\n\n-a  添加一个RealServer到集群中。\n-d  删除一个RealServer服务器\n-r  指定将要添加的Realserver的IP地址。\n-m  表示LVS集群的工作模式为LVS-NAT模式\n-g  表示LVS集群的工作模式为LVS-DR模式，默认\n-i  表示LVS集群的工作模式为LVS-TUN模式\n-w  权重\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("ol",[t("li",[s._v("管理虚拟服务")])]),s._v(" "),t("ul",[t("li",[s._v("添加一个虚拟服务192.168.1.100:80，使用轮询算法")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -A -t 192.168.1.100:80 -s rr")])]),s._v(" "),t("ul",[t("li",[s._v("修改虚拟服务的算法为加权轮询")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -E -t 192.168.1.100:80 -s wrr")])]),s._v(" "),t("ul",[t("li",[s._v("删除虚拟服务")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -D -t 192.168.1.100:80")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("管理真实服务")])]),s._v(" "),t("ul",[t("li",[s._v("添加一个真实服务器192.168.1.123，使用DR模式，权重2")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.123 -g -w 2")])]),s._v(" "),t("ul",[t("li",[s._v("修改真实服务器的权重")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -a -t 192.168.1.100:80 -r 192.168.1.123 -g -w 5")])]),s._v(" "),t("ul",[t("li",[s._v("删除真实服务器")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -d -t 192.168.1.100:80 -r 192.168.1.123")])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查看统计")])]),s._v(" "),t("ul",[t("li",[s._v("查看当前配置的虚拟服务和各个RS的权重")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -Ln")])]),s._v(" "),t("ul",[t("li",[s._v("查看当前ipvs模块中记录的连接（可用于观察转发情况）")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -lnc")])]),s._v(" "),t("ul",[t("li",[s._v("查看ipvs模块的转发情况统计")])]),s._v(" "),t("p",[t("code",[s._v("ipvsadm -Ln --stats | --rate")])])])}),[],!1,null,null,null);a.default=r.exports}}]);