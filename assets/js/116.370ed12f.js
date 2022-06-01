(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{749:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"mongodb-高可用分片集群"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-高可用分片集群"}},[s._v("#")]),s._v(" MongoDB 高可用分片集群")]),s._v(" "),n("h2",{attrs:{id:"一、分片机制"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、分片机制"}},[s._v("#")]),s._v(" 一、分片机制")]),s._v(" "),n("h3",{attrs:{id:"_1-1-核心组件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-核心组件"}},[s._v("#")]),s._v(" 1.1 核心组件")]),s._v(" "),n("p",[s._v("在单机环境下，高频率的查询会给服务器 CPU 和 I/O 带来巨大的负担，基于这个原因，MongoDB 提供了分片机制用于解决大数据集的分布式部署，从而提高系统的吞吐量。一个标准的 MongoDB 分片集群通常包含以下三类组件：")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("shard")]),s._v(" ：用于存储分片数据的 Mongod 服务器，为保证数据高可用，建议部署为副本集。")]),s._v(" "),n("li",[n("strong",[s._v("config servers")]),s._v(" ：配置服务器，它是整个集群的核心，用于存储集群的元数据和配置信息 (如分片服务器上存储了哪些数据块以及这些块的数据范围) 。从 MongoDB 3.4 开始，必须将配置服务器部署为副本集。")]),s._v(" "),n("li",[n("strong",[s._v("mongos")]),s._v(" ：查询服务的路由器，它是集群对外提供服务的门户。mongos 从配置服务器获取数据块的相关信息，并将客户端请求路由到对应的分片服务器上。")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/image001.png",alt:"MongoDB 分片集群的架构图"}})]),s._v(" "),n("h3",{attrs:{id:"_1-2-分片键"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分片键"}},[s._v("#")]),s._v(" 1.2 分片键")]),s._v(" "),n("p",[s._v("为了将集合中的不同文档分发到不同的数据块，MongoDB 需要用户指定分片键，之后基于选定的分片策略将数据拆分到不同的数据块。每个需要分片的集合只能有一个分片键：")]),s._v(" "),n("ul",[n("li",[s._v("对于非空集合进行分片时，分片键必须是该集合的索引或者前缀索引 (即索引必须以分片键开头)。")]),s._v(" "),n("li",[s._v("对于空集合，如果符合规则的索引不存在，则 MongoDB 将自动用分片键创建索引。")])]),s._v(" "),n("h3",{attrs:{id:"_1-3-分片策略"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-分片策略"}},[s._v("#")]),s._v(" 1.3 分片策略")]),s._v(" "),n("p",[s._v("当前 MongoDB 4.x 支持两种分片策略：分别是散列分片和范围分片。")]),s._v(" "),n("ul",[n("li",[s._v("散列分片：对分片键进额行哈希散列然后分配到某个数据块；")]),s._v(" "),n("li",[s._v("范围分片：对分片键按照范围分配到某个数据块上。")])]),s._v(" "),n("p",[s._v("散列分片有利于数据更加均匀的分布，但是在按照范围进行查询的场景下性能比较低 (如查询编号范围内的订单信息)，因为按照这种分片规则相邻的数据通常不在同一个数据块上，此时需要在整个集群范围内进行广播和查询。")]),s._v(" "),n("p",[s._v("范围查询则反之，在范围查询的场景下性能比较好，但是数据可能出现分布不均匀的情况。假设分片键恰好是单调递增的，此时数据可能长期驻留在最后一个数据段，所以范围分片更适合于那些分片键长期稳定在某个区间范围内的数据，如年龄等。")]),s._v(" "),n("p",[s._v("需要特别注意的是分片键在选定后就无法修改，所以在选择分片键的时候应该要进行全面的考量。")]),s._v(" "),n("h3",{attrs:{id:"_1-4-块拆分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-块拆分"}},[s._v("#")]),s._v(" 1.4 块拆分")]),s._v(" "),n("p",[s._v("无论采用何种分片策略，数据最终都被存储到对应范围的数据块 (chunk) 上，每个块默认的大小都是 64 M。由于数据源源不断的加入，当块超过指定大小时，就会进行块拆分。需要强调的是块拆分是一个轻量级的操作，因为在本质上并没有任何数据的移动，只是由 config servers 更新关于块的元数据信息。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/16f7f1e6ba99ea82",alt:"img"}})]),s._v(" "),n("p",[s._v("当某个分片服务器上的数据过多时候，此时为了避免单服务器上 CPU 和 IO 操作的性能问题，就会发生块迁移，将块从一个分片迁移到另外一个分片，同时 config servers 也会更新相关块的元数据信息。 块迁移是由在后台运行的平衡器 (balancer) 所负责的，它在后台进行持续监控，如果最大和最小分片之间的块数量差异超过迁移阈值，平衡器则开始在群集中迁移块以确保数据的均匀分布。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/16f7f1e60a5d77c2",alt:"img"}})]),s._v(" "),n("p",[s._v("块的大小是可以手动进行配置修改，但需要注意权衡利弊：")]),s._v(" "),n("ul",[n("li",[s._v("小块会导致频繁的数据拆分和迁移，从而致保证数据均匀的分布，但数据迁移会带来额外的网络开销，同时也会降低路由性能；")]),s._v(" "),n("li",[s._v("大块意味着更少的数据拆分和迁移，更少的网络开销，但会存在数据分布不均匀的风险。")])]),s._v(" "),n("h3",{attrs:{id:"_1-5-数据查询"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-数据查询"}},[s._v("#")]),s._v(" 1.5 数据查询")]),s._v(" "),n("p",[s._v("这里需要注意块的迁移不会对查询造成任何影响，MongoDB 集群和 Redis 集群的查询原理不同。对于 Redis Cluster 而言，数据的散列规则同时也是查询时的路由规则。但是对于 MongoDB 分片集群而言，查询需要先经过 mongos ，mongos 会从 config servers 上获取块的位置信息和数据范围，然后按照这些信息进行匹配后再路由到正确的分片上。因此，从本质上而言 MongoDB 的分片策略和路由规则没有任何关系，假设按照分片策略将某文档分发到 Shard A 的 Chunk01 上，之后 Chunk01 迁移到 Shard B , 由于配置服务器会更新 Chunk01 块的位置信息，所以仍然能够正确路由到。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/16f7f1f710ac5bb5",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_1-6-非分片集合"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-非分片集合"}},[s._v("#")]),s._v(" 1.6 非分片集合")]),s._v(" "),n("p",[s._v("以上的所有讲解都是针对分片集合的，而在实际开发中并非每个集合都需要进行分片，MongoDB 允许在同一数据库下混合使用分片和非分片集合。每个数据库都有自己的主分片，所有非分片集合同一存储在主分片上。需要特别说明的是主分片和复本集中的主节点没有任何关系，在新数据库创建时程序会自动选择当前集群中最少数据量的分片作为主分片。如下图所示： Shard A 为主分片，集合 Collection1 是分片集合，而集合 Collection2 是非分片集合。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/16f7f1e6bb49bbc3",alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"二、集群搭建"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、集群搭建"}},[s._v("#")]),s._v(" 二、集群搭建")]),s._v(" "),n("p",[s._v("这里我只有三台服务器，为保证高可用，三台服务器上均部署 mongod 服务（每个服务器上使用不同端口部署两个 mongod 服务），形成两个分片副本集；同时三台服务器上均部署 config servers 服务，形成一个配置副本集：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/16f7f1f667e22c75",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_2-1-分片副本集配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-分片副本集配置"}},[s._v("#")]),s._v(" 2.1 分片副本集配置")]),s._v(" "),n("p",[s._v("第一个分片副本集的配置 "),n("code",[s._v("mongod-27018.conf")]),s._v(" 如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("processManagement:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以后台进程的方式启动")]),s._v("\n    fork: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nsystemLog:\n    destination: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    path: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/mongodb/log-27018/mongod.log"')]),s._v("\n    logAppend: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstorage:\n    dbPath: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/mongodb/data-27018"')]),s._v("\nnet:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分片服务的默认端口号为 27018 ")]),s._v("\n    port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27018")]),s._v("\n    bindIp: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0    \nreplication:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 副本集的名称")]),s._v("\n    replSetName: rs0\nsharding:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在集群中的角色为分片")]),s._v("\n    clusterRole: shardsvr\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("第二个分片副本集的配置 "),n("code",[s._v("mongod-37018.conf")]),s._v(" 如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("processManagement:\n    fork: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nsystemLog:\n    destination: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    path: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/mongodb/log-37018/mongod.log"')]),s._v("\n    logAppend: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstorage:\n    dbPath: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/mongodb/data-37018"')]),s._v("\nnet:\n    port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("37018")]),s._v("\n    bindIp: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nreplication:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 副本集的名称")]),s._v("\n    replSetName: rs1\nsharding:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在集群中的角色为分片")]),s._v("\n    clusterRole: shardsvr\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"_2-2-配置副本集配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置副本集配置"}},[s._v("#")]),s._v(" 2.2 配置副本集配置")]),s._v(" "),n("p",[s._v("新建副本集配置文件 "),n("code",[s._v("mongo-config-server.conf")]),s._v(" ，内容如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("processManagement:\n    fork: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nsystemLog:\n    destination: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    path: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/mongodb/config-server-log/mongod.log"')]),s._v("\n    logAppend: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nstorage:\n    dbPath: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/mongodb/config-serve-data"')]),s._v("\nnet:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置服务的默认端口为27019")]),s._v("\n    port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27019")]),s._v("\n    bindIp: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nreplication:\n    replSetName: configReplSet\nsharding:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在集群中的角色为配置服务")]),s._v("\n    clusterRole: configsvr\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br")])]),n("h3",{attrs:{id:"_2-3-路由服务配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-路由服务配置"}},[s._v("#")]),s._v(" 2.3 路由服务配置")]),s._v(" "),n("p",[s._v("新建 mongos 路由服务配置文件 "),n("code",[s._v("mongos.conf")]),s._v(" ，内容如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("processManagement:\n    fork: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nsystemLog:\n    destination: "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n    path: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/mongodb/mongos-log/mongod.log"')]),s._v("\n    logAppend: "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\nnet:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mongos服务默认的端口号为27017")]),s._v("\n    port: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n    bindIp: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nsharding:\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 至少需要提供配置副本集中任意一个服务的地址")]),s._v("\n    configDB: configReplSet/hadoop001:27019,hadoop002:27019,hadoop003:27019\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h3",{attrs:{id:"_2-4-配置分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-配置分发"}},[s._v("#")]),s._v(" 2.4 配置分发")]),s._v(" "),n("p",[s._v("将以上所有配置分发到其他两台主机上：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" mongod-27018.conf mongod-37018.conf mongo-config-server.conf mongos.conf root@hadoop002:/etc/\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" mongod-27018.conf mongod-37018.conf mongo-config-server.conf mongos.conf root@hadoop003:/etc/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("配置文件中所有用到的文件夹需要预先创建，否则无法正常启动服务，三台主机均执行以下命令：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mongodb/log-27018\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mongodb/data-27018\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mongodb/log-37018\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mongodb/data-37018\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mongodb/config-server-log\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mongodb/config-serve-data\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /home/mongodb/mongos-log\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("h3",{attrs:{id:"_2-5-启动分片和配置服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-启动分片和配置服务"}},[s._v("#")]),s._v(" 2.5 启动分片和配置服务")]),s._v(" "),n("p",[s._v("分片在三台主机上执行以下命令，启动分片服务和配置服务：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mongod -f /etc/mongod-27018.conf\nmongod -f /etc/mongod-37018.conf\nmongod -f /etc/mongo-config-server.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-6-初始化所有副本集"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-初始化所有副本集"}},[s._v("#")]),s._v(" 2.6 初始化所有副本集")]),s._v(" "),n("p",[s._v("在任意一台主机上执行以下命令，初始化所有副本集：")]),s._v(" "),n("p",[s._v("初始化分片副本集"),n("code",[s._v("rs0")]),s._v("：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接到 ")]),s._v("\nmongo "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:27018\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化副本集rs01")]),s._v("\nrs.initiate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   _id "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rs0"')]),s._v(",\n   members: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop001:27018"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop002:27018"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop003:27018"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("初始化分片副本集"),n("code",[s._v("rs1")]),s._v("，步骤同上，命令如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("rs.initiate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   _id "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rs1"')]),s._v(",\n   members: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop001:37018"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop002:37018"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop003:37018"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("初始化配置副本集"),n("code",[s._v("configReplSet")]),s._v("，步骤同上，命令如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("rs.initiate"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   _id "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"configReplSet"')]),s._v(",\n   members: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop001:27019"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop002:27019"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" _id: "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", host: "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hadoop003:27019"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"_2-7-启动路由服务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-启动路由服务"}},[s._v("#")]),s._v(" 2.7 启动路由服务")]),s._v(" "),n("p",[s._v("在任意一台主机或多台主机上启动路由服务。mongos 是没有副本集的概念的，所以如果你想启动多个路由服务，只需要在多台服务器上分别启动即可，启动命令如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("mongos -f /etc/mongos.conf\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在 "),n("code",[s._v("mongos.conf")]),s._v(" 文件中已经通过配置参数 "),n("code",[s._v("sharding.configDB")]),s._v(" 配置了配置副本集的信息，所以路由服务已经能够感知到配置副本集，所以接下来只需要将分片副本集的信息传递给 mongos 即可，命令如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接到mongos服务 ")]),s._v("\nmongo "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1:27017\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到管理员角色")]),s._v("\nuse admin\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加分片副本集")]),s._v("\ndb.runCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" addshard "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rs0/hadoop001:27018,hadoop002:27018,hadoop003:27018"')]),s._v(",name:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shard0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndb.runCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" addshard "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"rs1/hadoop001:37018,hadoop002:37018,hadoop003:37018"')]),s._v(",name:"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"shard1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("务必注意，在添加分片副本集之前一定要切换到管理员角色，否则后面的添加操作会返回 "),n("code",[s._v('"ok" : 0')]),s._v(" 的失败状态码，同时会提示 "),n("code",[s._v("addShard may only be run against the admin database.")]),s._v(" 添加成功后，可以使用 "),n("code",[s._v("sh.status()")]),s._v(" 查看集群状态，此时输出如下，可以看到两个分片副本集已经被成功添加。")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/16f7f1eabea54aef",alt:"img"}})]),s._v(" "),n("h3",{attrs:{id:"_2-8-测试分片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-测试分片"}},[s._v("#")]),s._v(" 2.8 测试分片")]),s._v(" "),n("h4",{attrs:{id:"_1-开启分片功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启分片功能"}},[s._v("#")]),s._v(" 1. 开启分片功能")]),s._v(" "),n("p",[s._v("连接到 mongos ，对 testdb 数据库开启分片功能，同时设置集合 users 的分片键为用户 id，后面的 "),n("code",[s._v("1")]),s._v(" 表示范围分片，如果想要采用哈希分片，则对应的写法为： "),n("code",[s._v('{uid:"hashed"}')]),s._v(" 。")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("db.runCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" enablesharding "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testdb"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndb.runCommand"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" shardcollection "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testdb.users"')]),s._v(",key "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("uid:1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"_2-创建索引"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建索引"}},[s._v("#")]),s._v(" 2. 创建索引")]),s._v(" "),n("p",[s._v("切换到 testdb 数据库，为用户表创建索引，命令如下：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("use testdb\ndb.users.createIndex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" uid:1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h4",{attrs:{id:"_3-插入测试数据"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-插入测试数据"}},[s._v("#")]),s._v(" 3. 插入测试数据")]),s._v(" "),n("p",[s._v("使用以下命令插入部分数据，用于测试的数据量可以按自己服务器的性能进行修改：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("var "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arr")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nfor"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("var "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3000000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("i++"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  arr.push"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"uid"')]),s._v(":i,"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"user"')]),s._v("+i"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\ndb.users.insertMany"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("arr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h4",{attrs:{id:"_4-查看分片情况"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-查看分片情况"}},[s._v("#")]),s._v(" 4. 查看分片情况")]),s._v(" "),n("p",[s._v("插入数据完成后，执行 "),n("code",[s._v("sh.status()")]),s._v(" 命令可以查看分片情况，以及块的数据信息，部分输出如下：")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/AGou-ops/images/2020/16f7f1ecee5fc42f",alt:"img"}})]),s._v(" "),n("blockquote",[n("p",[s._v("以上文章内容转载自：https://juejin.im/post/6844904039985987592")])]),s._v(" "),n("h2",{attrs:{id:"三、使用分片"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、使用分片"}},[s._v("#")]),s._v(" 三、使用分片")]),s._v(" "),n("p",[s._v("参考：http://bak.agou-ops.top/docs/mongodb/shiyong.html")]),s._v(" "),n("h2",{attrs:{id:"参考链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),n("ul",[n("li",[s._v("MongoDB Sharding: https://docs.mongodb.com/v4.0/sharding/")]),s._v(" "),n("li",[s._v("MongoDB configuration-options: https://docs.mongodb.com/manual/reference/configuration-options/")]),s._v(" "),n("li",[s._v("bak.agou-ops.top MongoDB 分片集群: http://bak.agou-ops.top/docs/mongodb/sharding.html")]),s._v(" "),n("li",[s._v("IBM MongoDB Sharded-Cluster: https://developer.ibm.com/zh/technologies/databases/articles/os-mongodb-sharded-cluster/")])])])}),[],!1,null,null,null);a.default=e.exports}}]);