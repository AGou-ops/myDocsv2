(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{773:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"redis-codis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-codis"}},[s._v("#")]),s._v(" Redis Codis")]),s._v(" "),e("p",[s._v("[TOC]")]),s._v(" "),e("h2",{attrs:{id:"codis-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codis-简介"}},[s._v("#")]),s._v(" Codis 简介")]),s._v(" "),e("p",[s._v("Codis 是一个分布式 Redis 解决方案, 对于上层的应用来说, 连接到 Codis Proxy 和连接原生的 Redis Server 没有显著区别 ("),e("a",{attrs:{href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/unsupported_cmds.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("不支持的命令列表"),e("OutboundLink")],1),s._v("), 上层应用可以像使用单机的 Redis 一样使用, Codis 底层会处理请求的转发, 不停机的数据迁移等工作, 所有后边的一切事情, 对于前面的客户端来说是透明的, 可以简单的认为后边连接的是一个内存无限大的 Redis 服务。")]),s._v(" "),e("p",[e("strong",[s._v("Codis 3.x 组成部分：")])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("Codis Server")]),s._v("：基于 redis-3.2.8 分支开发。增加了额外的数据结构，以支持 slot 有关的操作以及数据迁移指令。具体的修改可以参考文档 "),e("a",{attrs:{href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/redis_change_zh.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("redis 的修改"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("li",[e("strong",[s._v("Codis Proxy")]),s._v("：客户端连接的 Redis 代理服务, 实现了 Redis 协议。 除部分命令不支持以外("),e("a",{attrs:{href:"https://github.com/CodisLabs/codis/blob/release3.2/doc/unsupported_cmds.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("不支持的命令列表"),e("OutboundLink")],1),s._v(")，表现的和原生的 Redis 没有区别（就像 Twemproxy）。\n"),e("ul",[e("li",[s._v("对于同一个业务集群而言，可以同时部署多个 codis-proxy 实例；")]),s._v(" "),e("li",[s._v("不同 codis-proxy 之间由 codis-dashboard 保证状态同步。")])])]),s._v(" "),e("li",[e("strong",[s._v("Codis Dashboard")]),s._v("：集群管理工具，支持 codis-proxy、codis-server 的添加、删除，以及据迁移等操作。在集群状态发生改变时，codis-dashboard 维护集群下所有 codis-proxy 的状态的一致性。\n"),e("ul",[e("li",[s._v("对于同一个业务集群而言，同一个时刻 codis-dashboard 只能有 0个或者1个；")]),s._v(" "),e("li",[s._v("所有对集群的修改都必须通过 codis-dashboard 完成。")])])]),s._v(" "),e("li",[e("strong",[s._v("Codis Admin")]),s._v("：集群管理的命令行工具。\n"),e("ul",[e("li",[s._v("可用于控制 codis-proxy、codis-dashboard 状态以及访问外部存储。")])])]),s._v(" "),e("li",[e("strong",[s._v("Codis FE")]),s._v("：集群管理界面。\n"),e("ul",[e("li",[s._v("多个集群实例共享可以共享同一个前端展示页面；")]),s._v(" "),e("li",[s._v("通过配置文件管理后端 codis-dashboard 列表，配置文件可自动更新。")])])]),s._v(" "),e("li",[e("strong",[s._v("Storage")]),s._v("：为集群状态提供外部存储。\n"),e("ul",[e("li",[s._v("提供 Namespace 概念，不同集群的会按照不同 product name 进行组织；")]),s._v(" "),e("li",[s._v("目前仅提供了 Zookeeper、Etcd、Fs 三种实现，但是提供了抽象的 interface 可自行扩展。")])])])]),s._v(" "),e("p",[e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/163084/201807/163084-20180703212324845-1586187945.png",alt:"",title:"各节点之间关系"}})]),s._v(" "),e("p",[e("strong",[s._v("codis的优缺点：")])]),s._v(" "),e("ul",[e("li",[s._v("优点：实现高并发读写，数据一致性高。")]),s._v(" "),e("li",[s._v("缺点：性能有较大损耗，故障切换无法保证不丢key。无法进行读写分离。")])]),s._v(" "),e("p",[s._v("codis 有以下特点：")]),s._v(" "),e("ul",[e("li",[s._v("可以无缝迁移到codis，自带迁移工具")]),s._v(" "),e("li",[s._v("可以动态扩容和缩容")]),s._v(" "),e("li",[s._v("多业务完全透明，业务不知道运行的是codis")]),s._v(" "),e("li",[s._v("支持多核心CPU，twemproxy只能单核")]),s._v(" "),e("li",[s._v("codis是中心基于proxy的设计，是客户端像连接单机一样操作proxy")]),s._v(" "),e("li",[s._v("有部分命令不能支持，比如keys *等")]),s._v(" "),e("li",[s._v("支持group划分，组内可以设置一个主多个从，通过sentinel 监控redis主从，当主down了自动将从切换为主")]),s._v(" "),e("li",[s._v("设置的进程要最大等于CPU的核心，不能超过CPU的核心数")]),s._v(" "),e("li",[s._v("其依赖于zookeeper，里面保存的key是redis主机位置，因此zookeeper要做高可用")]),s._v(" "),e("li",[s._v("监控可以使用接口和dashboard")])]),s._v(" "),e("h2",{attrs:{id:"codis-编译安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#codis-编译安装"}},[s._v("#")]),s._v(" Codis 编译安装")]),s._v(" "),e("ol",[e("li",[s._v("安装 go 运行环境：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里为了方便起见，我直接使用仓库进行安装")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y golang\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("设置编译环境：")])]),s._v(" "),e("p",[e("strong",[s._v("注意 "),e("code",[s._v("$GOPATH")]),s._v(" 是本机所有第三方库 go 项目所在目录，Codis 仅是其中之一。")])]),s._v(" "),e("p",[s._v("添加 "),e("code",[s._v("$GOPATH/bin")]),s._v(" 到 "),e("code",[s._v("$PATH")]),s._v("，例如："),e("code",[s._v("PATH=$PATH:$GOPATH/bin")]),s._v("。")]),s._v(" "),e("p",[s._v("编辑"),e("code",[s._v(".profile")]),s._v("文件，在行尾添加以下内容")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GOPATH")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/codis/gopath\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("执行"),e("code",[s._v("source .profile")]),s._v("使其生效、")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ go "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v(" GOPATH\n/home/codis/gopath\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("从官方仓库下载 Codis 的源码包：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/CodisLabs\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$_")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/CodisLabs/codis.git -b release3.2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("编译安装：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/CodisLabs/codis\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("编译安装完成之后，会在"),e("code",[s._v("bin")]),s._v("目录下生成以下文件：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" bin/\nassets       codis-dashboard  codis-ha     codis-server     redis-cli       version\ncodis-admin  codis-fe         codis-proxy  redis-benchmark  redis-sentinel\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("ℹ️此外，可以直接从官方仓库下载对应的"),e("code",[s._v("release")]),s._v("包进行使用。")]),s._v(" "),e("h2",{attrs:{id:"redis-codis-集群手动搭建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-codis-集群手动搭建"}},[s._v("#")]),s._v(" redis-codis 集群手动搭建")]),s._v(" "),e("table",[e("thead",[e("tr",[e("th",[s._v("IP")]),s._v(" "),e("th",[s._v("服务")])])]),s._v(" "),e("tbody",[e("tr",[e("td",[s._v("172.16.1.128 & 172.16.1.134 & 172.16.1.138")]),s._v(" "),e("td",[s._v("codis-server(主从)【3台】，codis-dashboard【1台】，codis-proxy【3台】，codis-fe【1台】")])]),s._v(" "),e("tr",[e("td",[s._v("172.16.1.128 & 172.16.1.134 & 172.16.1.138")]),s._v(" "),e("td",[s._v("zookeeper")])])])]),s._v(" "),e("ol",[e("li",[s._v("编译安装 codis 参考上面的[Codis 编译安装](#Codis 编译安装)")]),s._v(" "),e("li",[s._v("编译安装 zk 参考 [zookeeper 部署安装](../../Zookeeper/Zookeeper Basic.md)")])]),s._v(" "),e("p",[s._v("编辑"),e("code",[s._v("zookeeper")]),s._v("的配置文件"),e("code",[s._v("zoo.conf")]),s._v("，添加以下内容：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataDir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/zookeeper\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataLogDir")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/log/zookeeper\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nserver.1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".1.128:2888:3888\nserver.2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".1.134:2888:3888\nserver.3"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".1.138:2888:3888\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("创建数据目录"),e("code",[s._v("mkdir -p /data/zookeeper")]),s._v("，"),e("code",[s._v("mkdir -p /var/log/zookeeper")])]),s._v(" "),e("p",[s._v("设置环境变量，在"),e("code",[s._v("/etc/profile")]),s._v("文件中添加以下内容：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ZOOKEEPER_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/zookeeper\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")])]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZOOKEEPER_HOME")]),s._v("/bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("使之生效，"),e("code",[s._v("source /etc/profile")])]),s._v(" "),e("p",[s._v("创建"),e("code",[s._v("myid")]),s._v("文件，设置zookeeper的id，和"),e("code",[s._v("server.ID")]),s._v("对应，在"),e("code",[s._v("dataDir")]),s._v("指定的目录下 (即 "),e("code",[s._v("/data/zookeeper")]),s._v("目录) 创建名为 myid 的文件， 文件内容和 "),e("code",[s._v("zoo.cfg")]),s._v("中当前机器的 id 一致：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在第1台zookeeper（172.16.1.128）上设置id=1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/data/zookeeper/myid\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在第2台zookeeper（172.16.1.134）上设置id=2 ")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/data/zookeeper/myid\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在第3台zookeeper（172.16.1.138）上设置id=3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/data/zookeeper/myid\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("分别启动三台"),e("code",[s._v("zk")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node02 conf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# zkServer.sh start\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/zoo.cfg\nStarting zookeeper "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(". STARTED\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("查看 zk 集群状态：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master zookeeper"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# zkServer.sh status\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/zoo.cfg\nClient port found: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v(". Client address: localhost.\nMode: follower\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node01 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# zkServer.sh status\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/zoo.cfg\nClient port found: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v(". Client address: localhost.\nMode: leader\n\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node02 ~"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# zkServer.sh status\n/usr/bin/java\nZooKeeper JMX enabled by default\nUsing config: /usr/local/zookeeper/bin/"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/conf/zoo.cfg\nClient port found: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2181")]),s._v(". Client address: localhost.\nMode: follower\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("...待续。。。")]),s._v(" "),e("h2",{attrs:{id:"通过-ansible-快速部署集群"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过-ansible-快速部署集群"}},[s._v("#")]),s._v(" 通过 ansible 快速部署集群")]),s._v(" "),e("p",[s._v("使用 ansible 可快速在单机、多机部署多套 codis 集群。 ansible 文件夹包含了部署 codis 集群的 playbook，根据自己部署环境修改 "),e("code",[s._v("groups_var/all")]),s._v(" 文件里参数，修改 hosts 文件添加部署的环境 IP 即可。 ansible 安装也及其简单，各部署机器无需安装任何额外的 agent，彼此之间通过 ssh 通信。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git clone https://github.com/ansible/ansible.git -b stable-2.3\ncd ./ansible\nsource ./hacking/env-setup\ncd $codis_dir/ansible\nansible-playbook -i hosts site.yml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"docker-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署"}},[s._v("#")]),s._v(" Docker 部署")]),s._v(" "),e("p",[s._v("Codis 3.x 起，开始正式支持 Docker 部署。这就需要 codis-dashboard 以及 codis-proxy 能够外部的 "),e("code",[s._v("listen")]),s._v(" 地址暴露出来并保存在外部存储中。")]),s._v(" "),e("ul",[e("li",[s._v("codis-proxy 增加了 "),e("code",[s._v("--host-admin")]),s._v(" 以及 "),e("code",[s._v("--host-proxy")]),s._v(" 参数；")]),s._v(" "),e("li",[s._v("codis-dashboard 增加了 "),e("code",[s._v("--host-admin")]),s._v(" 参数；")])]),s._v(" "),e("p",[s._v("以 codis-proxy 的 Docker 为例：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('$ docker run --name "Codis-Proxy" -d -p 29000:19000 -p 21080:11080 codis-image \\\n    codis-proxy -c proxy.toml --host-admin 100.0.1.100:29000 --host-proxy 100.0.1.100:21080\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("codis-proxy 在启动后，会使用 "),e("code",[s._v("--host-admin")]),s._v(" 和 "),e("code",[s._v("--host-proxy")]),s._v(" 参数所指定的实际地址替换 Docker 内监听的地址，向 codis-dashboard 注册。这样，例如使用 Jodis 的过程中，客户端就能够通过 "),e("code",[s._v("100.0.1.100:29000")]),s._v(" 来访问 proxy 实例。")]),s._v(" "),e("p",[s._v("codis-dashboard 也是相同的道理，会使用 "),e("code",[s._v("--host-admin")]),s._v(" 地址向外部存储注册，这样 codis-fe 也能通过该地址正确的对 codis-dashboard 进行操作。")]),s._v(" "),e("p",[s._v("具体样例可以参考 "),e("code",[s._v("scripts/docker.sh")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),e("ul",[e("li",[s._v("Codis 中文文档：https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md")]),s._v(" "),e("li",[s._v("Codis 3.x 组成部分：https://github.com/CodisLabs/codis/blob/release3.2/doc/tutorial_zh.md#codis-3x")]),s._v(" "),e("li",[s._v("Golang installation: https://golang.org/doc/install")]),s._v(" "),e("li",[s._v("Redis Codis 部署安装：https://www.cnblogs.com/ExMan/p/11351621.html")]),s._v(" "),e("li",[s._v("Redis——redis集群方案之codis集群的搭建部署：https://blog.csdn.net/bmengmeng/article/details/99693040")]),s._v(" "),e("li",[s._v("https://wsgzao.github.io/post/codis/")])])])}),[],!1,null,null,null);a.default=n.exports}}]);