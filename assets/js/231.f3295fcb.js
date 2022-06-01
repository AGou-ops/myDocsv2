(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{863:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"kafka-basic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-basic"}},[s._v("#")]),s._v(" Kafka Basic")]),s._v(" "),e("h2",{attrs:{id:"kafka-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-简介"}},[s._v("#")]),s._v(" Kafka 简介")]),s._v(" "),e("p",[s._v("Kafka是最初由Linkedin公司开发，是一个分布式、分s区的、多副本的、多订阅者，基于zookeeper协调的分布式日志系统（也可以当做MQ系统），常见可以用于web/nginx日志、访问日志，消息服务等等，Linkedin于2010年贡献给了Apache基金会并成为顶级开源项目。")]),s._v(" "),e("p",[s._v("主要应用场景是："),e("strong",[s._v("日志收集系统和消息系统")]),s._v("。")]),s._v(" "),e("p",[s._v("Kafka主要设计目标如下：")]),s._v(" "),e("ul",[e("li",[s._v("以时间复杂度为O(1)的方式提供消息持久化能力，即使对TB级以上数据也能保证常数时间的访问性能。")]),s._v(" "),e("li",[s._v("高吞吐率。即使在非常廉价的商用机器上也能做到单机支持每秒100K条消息的传输。")]),s._v(" "),e("li",[s._v("支持Kafka Server间的消息分区，及分布式消费，同时保证每个partition内的消息顺序传输。")]),s._v(" "),e("li",[s._v("同时支持离线数据处理和实时数据处理。")]),s._v(" "),e("li",[s._v("支持在线水平扩展")])]),s._v(" "),e("p",[s._v("官方简介：http://kafka.apache.org/intro")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1385722/201808/1385722-20180804221732434-2116774825.png",alt:"",title:"zk Arch"}})]),s._v(" "),e("p",[s._v("存储机制：")]),s._v(" "),e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2020/1/17/16fb2cd4f11f1b55?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"",title:"存储机制"}})]),s._v(" "),e("h2",{attrs:{id:"kafka-安装与部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kafka-安装与部署"}},[s._v("#")]),s._v(" Kafka 安装与部署")]),s._v(" "),e("h3",{attrs:{id:"单机部署-single-broker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单机部署-single-broker"}},[s._v("#")]),s._v(" 单机部署（single broker）")]),s._v(" "),e("ol",[e("li",[s._v("首先从"),e("a",{attrs:{href:"http://kafka.apache.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方下载站点"),e("OutboundLink")],1),s._v("获取所需版本的二进制包并解压缩：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://apache.mirrors.hoobly.com/kafka/2.5.0/kafka_2.13-2.5.0.tgz\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf kafka_2.13-2.5.0.tgz\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kafka_2.13-2.5.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("启动服务：")])]),s._v(" "),e("p",[s._v("Kafka依赖于"),e("code",[s._v("ZooKeeper")]),s._v("服务器，可以使用 kafka 附带的脚本来启动单节点 ZooKeeper 实例：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/zookeeper-server-start.sh config/zookeeper.properties\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("现在，启动"),e("code",[s._v("Kafka")]),s._v("服务：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-server-start.sh config/server.properties\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("创建一个 "),e("code",[s._v("topic")]),s._v("：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个单节点，单分区名为test的topic")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --partitions "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --topic "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("查看当前运行的"),e("code",[s._v("topic")]),s._v("有哪些：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-topics.sh --list --bootstrap-server localhost:9092\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("发送一些信息：")])]),s._v(" "),e("p",[s._v("Kafka带有一个命令行客户端，它将从文件或标准输入中获取输入，并将其作为消息发送到 Kafka 集群。默认情况下，每行将作为单独的消息发送：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用以下命令将生产者的信息发往broker")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\nhello kafka\nkafka\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kafka-console-producer.sh --broker-list node01:9093,node01:9094,node01:9095 --topic wzxmt")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[s._v("启动一个消费者"),e("code",[s._v("consumer")]),s._v("：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" --from-beginning\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看到生产者发出的信息")]),s._v("\nhello kafka\nkafka\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kafka-console-consumer.sh --bootstrap-server node01:2181 --from-beginning --topic wzxmt")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"集群部署-mutil-broker"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群部署-mutil-broker"}},[s._v("#")]),s._v(" 集群部署（Mutil-broker）")]),s._v(" "),e("p",[s._v("因手头资源有限，故用单台主机模拟集群。")]),s._v(" "),e("ol",[e("li",[s._v("首先，为每一个"),e("code",[s._v("broker")]),s._v("创建一个配置文件：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" config/server.properties config/server-1.properties\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" config/server.properties config/server-2.properties\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" config/server.properties config/server-3.properties\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("分别修改这些文件的以下属性：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --------- config/server-1.properties --------------")]),s._v("\nbroker.id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listeners")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://:9091\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：早些版本的Kafka用的时 port 字段。。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 日志目录")]),s._v("\nlog.dirs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/kafka/logs-1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置zookeeper的连接，当zookeeper为集群时使用")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zookeeper.connect=node01:2181")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --------- config/server-2.properties --------------")]),s._v("\nbroker.id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listeners")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://:9092\nlog.dirs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/kafka/logs-2\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zookeeper.connect=node02:2181")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --------- config/server-3.properties --------------")]),s._v("\nbroker.id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listeners")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://:9093\nlog.dirs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/kafka/logs-3\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zookeeper.connect=node03:2181")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("为其创建日志文件夹，"),e("code",[s._v("mkdir -p /data/kafka/{logs-1,logs-2,logs-3}")])]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[s._v("分别启动这三个 broker：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-server-start.sh config/server-1.properties "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-server-start.sh config/server-2.properties "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-server-start.sh config/server-3.properties "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[s._v("创建"),e("code",[s._v("topic")]),s._v("（指定副本数量为3）：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-topics.sh --create --bootstrap-server  localhost:9092 --replication-factor "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" --partitions "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" --topic my-replicated-topic\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看所有的"),e("code",[s._v("topic")]),s._v("列表信息：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-topics.sh --list --bootstrap-server localhost:9092\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看特定 topic 的详细信息：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master kafka_2.13-2.5.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# bin/kafka-topics.sh --describe --bootstrap-server localhost:9092 --topic my-replicated-topic\nTopic: my-replicated-topic      PartitionCount: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       ReplicationFactor: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("    Configs: segment.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v("\n        Topic: my-replicated-topic      Partition: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    Leader: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("       Replicas: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,1")]),s._v(",3 Isr: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,1")]),s._v(",3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("发送一些信息到"),e("code",[s._v("topic")]),s._v("：")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-console-producer.sh --bootstrap-server localhost:9092 --topic my-replicated-topic\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nhello kafka\nkafka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("消费这些信息：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nhello kafka\nkafka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("ℹ️ 测试"),e("code",[s._v("leader")]),s._v("宕掉：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master kafka_2.13-2.5.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" server-2.properties\nroot      "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32410")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9.1")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.9")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4025076")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("353104")]),s._v(" pts/6  Sl   02:48   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":16 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9 "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("32410")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("code",[s._v("leader")]),s._v("节点已切换到"),e("code",[s._v("observer")]),s._v("之一，并且该节点不再位于同步副本集中：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master kafka_2.13-2.5.0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# bin/kafka-topics.sh --describe --bootstrap-server localhost:9091  --topic my-replicated-topic\nTopic: my-replicated-topic      PartitionCount: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       ReplicationFactor: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("    Configs: segment.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v("\n        Topic: my-replicated-topic      Partition: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    Leader: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("       Replicas: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2,3")]),s._v(",1 Isr: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3,1")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("但是此前发送的信息依然存在：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" bin/kafka-console-consumer.sh --bootstrap-server localhost:9091  --from-beginning --topic my-replicated-topic\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nhello kafka\nkafka\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"附-server-properties-参数说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附-server-properties-参数说明"}},[s._v("#")]),s._v(" 附："),e("code",[s._v("server.properties")]),s._v(" 参数说明")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#broker的全局唯一编号，不能重复，只能是数字")]),s._v("\nbroker.id"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#此处的host.name为本机IP(重要),如果不改,则客户端会抛出:Producerconnection to node01:9092 unsuccessful 错误!")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# host.name=10.0.0.11")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用来监听链接的端口，producer或consumer将在此端口建立连接")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# port=9092")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 监听")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("listeners")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://:9091\t\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#处理网络请求的线程数量")]),s._v("\nnum.network.threads"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用来处理磁盘IO的线程数量")]),s._v("\nnum.io.threads"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送套接字的缓冲区大小")]),s._v("\nsocket.send.buffer.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#接受套接字的缓冲区大小")]),s._v("\nsocket.receive.buffer.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("102400")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#请求套接字的缓冲区大小")]),s._v("\nsocket.request.max.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("104857600")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#kafka消息存放的路径(持久化到磁盘)")]),s._v("\nlog.dirs"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data/kafka/logs\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#topic在当前broker上的分片个数")]),s._v("\nnum.partitions"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用来恢复和清理data下数据的线程数量")]),s._v("\nnum.recovery.threads.per.data.dir"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#segment文件保留的最长时间，超时将被删除")]),s._v("\nlog.retention.hours"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#滚动生成新的segment文件的最大时间")]),s._v("\nlog.roll.hours"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志文件中每个segment的大小，默认为1G")]),s._v("\nlog.segment.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1073741824")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#周期性检查文件大小的时间")]),s._v("\nlog.retention.check.interval.ms"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("300000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#日志清理是否打开")]),s._v("\nlog.cleaner.enable"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#broker需要使用zookeeper保存meta数据")]),s._v("\nzookeeper.connect"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("node01:2181,node02:2181,node03:2181\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#zookeeper链接超时时间")]),s._v("\nzookeeper.connection.timeout.ms"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#partion buffer中，消息的条数达到阈值，将触发flush到磁盘")]),s._v("\nlog.flush.interval.messages"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消息buffer的时间，达到阈值，将触发flush到磁盘")]),s._v("\nlog.flush.interval.ms"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#删除topic需要server.properties中设置delete.topic.enable=true否则只是标记删除")]),s._v("\ndelete.topic.enable"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#延迟初始使用者重新平衡的时间（生产用3）")]),s._v("\ngroup.initial.rebalance.delay.ms"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#broker能接收消息的最大字节数")]),s._v("\nmessage.max.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000000000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#broker可复制的消息的最大字节数")]),s._v("\nreplica.fetch.max.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000000000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#消费者端的可读取的最大消息")]),s._v("\nfetch.message.max.bytes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2000000000")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br")])]),e("p",[s._v("不同节点之间只需要修改"),e("code",[s._v("server.properties")]),s._v("的"),e("code",[s._v("broker.id")]),s._v("即可。")]),s._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),e("ul",[e("li",[s._v("Kafka 架构原理：https://juejin.im/post/5e217c3fe51d450200787f23Kafka")]),s._v(" "),e("li",[s._v("QuickStart: http://kafka.apache.org/quickstart")]),s._v(" "),e("li",[s._v("http://kafka.apache.org/quickstart#quickstart_kafkaconnect")])])])}),[],!1,null,null,null);a.default=n.exports}}]);