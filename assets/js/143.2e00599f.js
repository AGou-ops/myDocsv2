(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{775:function(e,s,a){"use strict";a.r(s);var t=a(6),v=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"redis-进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-进阶"}},[e._v("#")]),e._v(" Redis 进阶")]),e._v(" "),a("h2",{attrs:{id:"redis-高级特性与性能调优"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-高级特性与性能调优"}},[e._v("#")]),e._v(" Redis 高级特性与性能调优")]),e._v(" "),a("h2",{attrs:{id:"数据持久化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化"}},[e._v("#")]),e._v(" 数据持久化")]),e._v(" "),a("h3",{attrs:{id:"rdb-redis-database"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rdb-redis-database"}},[e._v("#")]),e._v(" "),a("strong",[e._v("RDB")]),e._v("（Redis DataBase）")]),e._v(" "),a("p",[e._v("采用 RDB 持久方式，Redis 会定期保存数据快照至一个 RBD 文件中，并在启动时自动加载 RDB 文件，恢复之前保存的数据。\n可以在配置文件中配置 Redis 进行快照保存的时机：\n"),a("code",[e._v("save [seconds] [changes]")])]),e._v(" "),a("p",[e._v("意为在 [seconds] 秒内如果发生了 [changes] 次数据修改，则进行一次 RDB 快照保存，例如：\n"),a("code",[e._v("save 60 100")])]),e._v(" "),a("p",[e._v("会让 Redis 每 60 秒检查一次数据变更情况，如果发生了 100 次或以上的数据变更，则进行 RDB 快照保存。可以配置多条 Save 指令，让 Redis 执行多级的快照保存策略。\nRedis 默认开启 RDB 快照，默认的 RDB 策略如下：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("save "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("900")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\nsave "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("300")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),e._v("\nsave "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10000")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("也可以通过"),a("code",[e._v("BGSAVE")]),e._v("命令手工触发 RDB 快照保存。")]),e._v(" "),a("h3",{attrs:{id:"aof-append-only-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aof-append-only-file"}},[e._v("#")]),e._v(" "),a("strong",[e._v("AOF")]),e._v("（Append Only File）")]),e._v(" "),a("p",[e._v("采用 AOF 持久方式时，Redis 会把每一个写请求都记录在一个日志文件里。在 Redis 重启时，会把 AOF 文件中记录的所有写操作顺序执行一遍，确保数据恢复到最新。\n"),a("em",[e._v("AOF 默认是关闭的")]),e._v("，如要开启，进行如下配置：\n"),a("code",[e._v("appendonly yes")])]),e._v(" "),a("p",[e._v("AOF 提供了三种 Fsync 配置，"),a("code",[e._v("always/everysec/no")]),e._v("，通过配置项 "),a("code",[e._v("[appendfsync]")]),e._v("指定：")]),e._v(" "),a("ul",[a("li",[e._v("appendfsync no：不进行 Fsync，将 Flush 文件的时机交给 OS 决定，速度最快。")]),e._v(" "),a("li",[e._v("appendfsync always：每写入一条日志就进行一次 Fsync 操作，数据安全性最高，但速度最慢。")]),e._v(" "),a("li",[e._v("appendfsync everysec：折中的做法，交由后台线程每秒 Fsync 一次。")])]),e._v(" "),a("p",[e._v("随着 AOF 不断地记录写操作日志，必定会出现一些无用的日志，例如某个时间点执行了命令 "),a("code",[e._v("SET key1 “abc”")]),e._v("，在之后某个时间点又执行了"),a("code",[e._v("SET key1 “bcd”")]),e._v("，那么第一条命令很显然是没有用的。\n大量的无用日志会让 AOF 文件过大，也会让数据恢复的时间过长。所以 Redis 提供了"),a("code",[e._v("AOF Rewrite")]),e._v("功能，可以重写 AOF 文件，只保留能够把数据恢复到最新状态的最小写操作集。\n"),a("code",[e._v("AOF Rewrite")]),e._v(" 可以通过 "),a("code",[e._v("BGREWRITEAOF")]),e._v("命令触发，也可以配置 Redis 定期自动进行：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("auto-aof-rewrite-percentage "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("100")]),e._v("\nauto-aof-rewrite-min-size 64mb\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("上面两行配置的含义是，Redis 在每次 AOF Rewrite 时，会记录完成 Rewrite 后的 AOF 日志大小，当 AOF 日志大小在该基础上增长了 100% 后，自动进行 AOF Rewrite。\n同时如果增长的大小没有达到 64MB，则不会进行 Rewrite。")]),e._v(" "),a("h2",{attrs:{id:"内存管理与数据淘汰机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存管理与数据淘汰机制"}},[e._v("#")]),e._v(" 内存管理与数据淘汰机制")]),e._v(" "),a("h3",{attrs:{id:"最大内存设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最大内存设置"}},[e._v("#")]),e._v(" "),a("strong",[e._v("最大内存设置")])]),e._v(" "),a("p",[e._v("默认情况下，在 32 位 OS 中，Redis 最大使用 3GB 的内存，在 64 位 OS 中则没有限制。\n在使用 Redis 时，应该对数据占用的最大空间有一个基本准确的预估，并为 Redis 设定最大使用的内存。\n否则在 64 位 OS 中 Redis 会无限制地占用内存(当物理内存被占满后会使用 Swap 空间)，容易引发各种各样的问题。\n通过如下配置控制 Redis 使用的最大内存：\n"),a("code",[e._v("maxmemory 100mb")])]),e._v(" "),a("p",[e._v("在内存占用达到了 maxmemory 后，再向 Redis 写入数据时，Redis 会：")]),e._v(" "),a("ul",[a("li",[e._v("根据配置的数据淘汰策略尝试淘汰数据，释放空间。")]),e._v(" "),a("li",[e._v("如果没有数据可以淘汰，或者没有配置数据淘汰策略，那么 Redis 会对所有写请求返回错误，但读请求仍然可以正常执行。")])]),e._v(" "),a("p",[e._v("在为 Redis 设置 maxmemory 时，⚠️需要注意：如果采用了 Redis 的主从同步，主节点向从节点同步数据时，会占用掉一部分内存空间;"),a("em",[e._v("如果 maxmemory 过于接近主机的可用内存，导致数据同步时内存不足。")]),e._v(" "),a("em",[e._v("所以设置的 maxmemory 不要过于接近主机可用的内存，留出一部分预留用作主从同步。")])]),e._v(" "),a("h3",{attrs:{id:"数据淘汰机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据淘汰机制"}},[e._v("#")]),e._v(" "),a("strong",[e._v("数据淘汰机制")])]),e._v(" "),a("p",[e._v("Redis 提供了 5 种数据淘汰策略：")]),e._v(" "),a("ul",[a("li",[e._v("volatile-lru：使用 LRU 算法进行数据淘汰(淘汰上次使用时间最早的，且使用次数最少的 Key，只淘汰设定了有效期的 Key。")]),e._v(" "),a("li",[a("strong",[e._v("allkeys-lru：使用 LRU 算法进行数据淘汰，所有的 Key 都可以被淘汰。")])]),e._v(" "),a("li",[e._v("volatile-random：随机淘汰数据，只淘汰设定了有效期的 Key。")]),e._v(" "),a("li",[e._v("allkeys-random：随机淘汰数据，所有的 Key 都可以被淘汰。")]),e._v(" "),a("li",[e._v("volatile-ttl：淘汰剩余有效期最短的 Key。")])]),e._v(" "),a("p",[e._v("最好为 Redis 指定一种有效的数据淘汰策略以配合 maxmemory 设置，避免在内存使用满后发生写入失败的情况。\n一般来说，推荐使用的策略是 "),a("code",[e._v("volatile-lru")]),e._v("，并辨识 Redis 中保存的数据的重要性。\n对于那些重要的，绝对不能丢弃的数据(如配置类数据等)，应不设置有效期，这样 Redis 就永远不会淘汰这些数据。\n对于那些相对不是那么重要的，并且能够热加载的数据(比如缓存最近登录的用户信息，当在 Redis 中找不到时，程序会去 DB 中读取)，可以设置上有效期，这样在内存不够时 Redis 就会淘汰这部分数据。\n配置方法：\n"),a("code",[e._v("maxmemory-policy volatile-lru")]),e._v("# "),a("em",[e._v("默认是noeviction")]),e._v("，即不进行数据淘汰")]),e._v(" "),a("h2",{attrs:{id:"redis-性能调优"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redis-性能调优"}},[e._v("#")]),e._v(" Redis 性能调优")]),e._v(" "),a("p",[e._v("尽管 Redis 是一个非常快速的内存数据存储媒介，也并不代表 Redis 不会产生性能问题。\nRedis 采用单线程模型（Redis 6.0之前），所有的命令都是由一个线程串行执行的，所以当某个命令执行耗时较长时，会拖慢其后的所有命令，这使得 Redis 对每个任务的执行效率更加敏感。\n针对 Redis 的性能优化，主要从下面几个层面入手：")]),e._v(" "),a("ul",[a("li",[e._v("最初的也是最重要的，确保没有让 Redis 执行耗时长的命令。")]),e._v(" "),a("li",[e._v("使用 Pipelining 将连续执行的命令组合执行。")]),e._v(" "),a("li",[e._v("操作系统的 Transparent huge pages 功能必须关闭。")])]),e._v(" "),a("p",[a("code",[e._v("echo never > /sys/kernel/mm/transparent_hugepage/enabled")])]),e._v(" "),a("ul",[a("li",[e._v("如果在虚拟机中运行 Redis，可能天然就有虚拟机环境带来的固有延迟。可以通过 ./redis-cli –intrinsic-latency 100 命令查看固有延迟。")]),e._v(" "),a("li",[e._v("同时如果对 Redis 的性能有较高要求的话，应尽可能在物理机上直接部署 Redis。")]),e._v(" "),a("li",[e._v("检查数据持久化策略。")])]),e._v(" "),a("ul",[a("li",[e._v("考虑引入读写分离机制。")])]),e._v(" "),a("h3",{attrs:{id:"读写分离"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#读写分离"}},[e._v("#")]),e._v(" "),a("strong",[e._v("读写分离")])]),e._v(" "),a("p",[e._v("对于缓存而言，读的需求量是远大于写的需求量的，而读写分离的机制就是在主机上执行写操作，然后异步地将数据复制到从机上，而从机只负责读操作，假设一台从机具有2万QPS，当业务场景需要10万的QPS时，只需要横向扩展5台redis从机即可（可支持水平扩展的读高并发架构）.")]),e._v(" "),a("p",[e._v("Redis 的主从复制能力可以实现一主多从的多节点架构，在这一架构下，主节点接收所有写请求，并将数据同步给多个从节点。在这一基础上，我们可以让从节点提供对实时性要求不高的读请求服务，以减小主节点的压力。\n尤其是针对一些使用了长耗时命令的统计类任务，完全可以指定在一个或多个从节点上执行，避免这些长耗时命令影响其他请求的响应。")]),e._v(" "),a("h3",{attrs:{id:"主从复制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制"}},[e._v("#")]),e._v(" "),a("strong",[e._v("主从复制")])]),e._v(" "),a("p",[e._v("Redis 支持一主多从的主从复制架构。一个 Master 实例负责处理所有的写请求，Master 将写操作同步至所有 Slave。\n借助 Redis 的主从复制，可以实现读写分离和高可用：")]),e._v(" "),a("ul",[a("li",[e._v("实时性要求不是特别高的读请求，可以在 Slave 上完成，提升效率。特别是一些周期性执行的统计任务，这些任务可能需要执行一些长耗时的 Redis 命令，可以专门规划出 1 个或几个 Slave 用于服务这些统计任务。")]),e._v(" "),a("li",[e._v("借助 Redis Sentinel 可以实现高可用，当 Master Crash 后，Redis Sentinel 能够自动将一个 Slave 晋升为 Master，继续提供服务。")])]),e._v(" "),a("p",[e._v("启用主从复制非常简单，只需要配置多个 Redis 实例，在作为 Slave 的 Redis 实例中配置：\n"),a("code",[e._v("slaveof 192.168.1.1 6379")]),e._v("# 指定Master的IP和端口")]),e._v(" "),a("p",[e._v("当 Slave 启动后，会从 Master 进行一次冷启动数据同步，由 Master 触发 BGSAVE 生成 RDB 文件推送给 Slave 进行导入。\n导入完成后 Master 再将增量数据通过 Redis Protocol 同步给 Slave。之后主从之间的数据便一直以 Redis Protocol 进行同步。\n使用 Sentinel 做自动 Failover：Redis 的主从复制功能本身只是做数据同步，并不提供监控和自动 Failover 能力，"),a("strong",[e._v("要通过主从复制功能来实现 Redis 的高可用")]),e._v("，还需要引入一个组件："),a("code",[e._v("Redis Sentinel")]),e._v("。\nRedis Sentinel 是 Redis 官方开发的监控组件，可以监控 Redis 实例的状态，通过 Master 节点自动发现 Slave 节点，并在监测到 Master 节点失效时选举出一个新的 Master，并向所有 Redis 实例推送新的主从配置。\nRedis Sentinel 需要至少部署 3 个实例才能形成选举关系。关键配置：")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("sentinel monitor mymaster "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("127.0")]),e._v(".0.1 "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6379")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Master实例的IP、端口，以及选举需要的赞成票数")]),e._v("\nsentinel down-after-milliseconds mymaster "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("60000")]),e._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 多长时间没有响应视为Master失效")]),e._v("\nsentinel failover-timeout mymaster "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("180000")]),e._v(" \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 两次failover尝试间的间隔时长")]),e._v("\nsentinel parallel-syncs mymaster "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\t "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 如果有多个Slave，可以通过此配置指定同时从新Master进行数据同步的Slave数，避免所有Slave同时进行数据同步导致查询服务也不可用")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("另外需要注意的是，Redis Sentinel 实现的自动 Failover 不是在同一个 IP 和端口上完成的。\n也就是说自动 Failover 产生的新 Master 提供服务的 IP 和端口与之前的 Master 是不一样的。\n所以要实现 HA，还要求客户端必须支持 Sentinel，能够与 Sentinel 交互获得新 Master 的信息才行。")]),e._v(" "),a("h3",{attrs:{id:"集群分片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群分片"}},[e._v("#")]),e._v(" "),a("strong",[e._v("集群分片")])]),e._v(" "),a("p",[e._v("为何要做集群分片?原因如下：")]),e._v(" "),a("ul",[a("li",[e._v("Redis 中存储的数据量大，一台主机的物理内存已经无法容纳。")]),e._v(" "),a("li",[e._v("Redis 的写请求并发量大，一个 Redis 实例以无法承载。")])]),e._v(" "),a("p",[e._v("当上述两个问题出现时，就必须要对 Redis 进行分片了。Redis 的分片方案有很多种，例如很多 Redis 的客户端都自行实现了分片功能，也有向 Twemproxy 这样的以代理方式实现的 Redis 分片方案。")]),e._v(" "),a("p",[e._v("Redis Cluster 的能力：")]),e._v(" "),a("ul",[a("li",[e._v("能够自动将数据分散在多个节点上。")]),e._v(" "),a("li",[e._v("当访问的 Key 不在当前分片上时，能够自动将请求转发至正确的分片。")]),e._v(" "),a("li",[e._v("当集群中部分节点失效时仍能提供服务。")])]),e._v(" "),a("p",[e._v("其中第三点是基于主从复制来实现的，Redis Cluster 的每个数据分片都采用了主从复制的结构，原理和前文所述的主从复制完全一致。\n"),a("em",[e._v("唯一的区别是省去了 Redis Sentinel 这一额外的组件")]),e._v("，由 Redis Cluster 负责进行一个分片内部的节点监控和自动 Failover。\nRedis Cluster 分片原理：Redis Cluster 中共有 16384 个 hash slot，Redis 会计算每个 Key 的 CRC16，将结果与 16384 取模，来决定该 Key 存储在哪一个 hash slot 中。\n同时需要指定 Redis Cluster 中每个数据分片负责的 Slot 数。Slot 的分配在任何时间点都可以进行重新分配。")]),e._v(" "),a("h3",{attrs:{id:"主从复制-vs-集群分片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主从复制-vs-集群分片"}},[e._v("#")]),e._v(" "),a("strong",[e._v("主从复制 VS 集群分片")])]),e._v(" "),a("p",[e._v("在设计软件架构时，要如何在主从复制和集群分片两种部署方案中取舍呢?从各个方面看，Redis Cluster 都是优于主从复制的方案：")]),e._v(" "),a("ul",[a("li",[e._v("Redis Cluster 能够解决单节点上数据量过大的问题。")]),e._v(" "),a("li",[e._v("Redis Cluster 能够解决单节点访问压力过大的问题。")]),e._v(" "),a("li",[e._v("Redis Cluster 包含了主从复制的能力。")])]),e._v(" "),a("p",[e._v("那是不是代表 Redis Cluster 永远是优于主从复制的选择呢?并不是。软件架构永远不是越复杂越好，复杂的架构在带来显著好处的同时，一定也会带来相应的弊端。")]),e._v(" "),a("h2",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[e._v("#")]),e._v(" 参考链接")]),e._v(" "),a("ul",[a("li",[e._v("redis 中文教程: https://www.redis.com.cn/redis-keys")]),e._v(" "),a("li",[e._v("redis Documetation: https://redis.io/documentation")]),e._v(" "),a("li",[e._v("redis 高级特性与性能调优: https://zhuanlan.zhihu.com/p/61053939")])])])}),[],!1,null,null,null);s.default=v.exports}}]);