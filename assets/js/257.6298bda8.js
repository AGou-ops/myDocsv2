(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{889:function(s,a,e){"use strict";e.r(a);var t=e(6),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"prometheus-alertmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-alertmanager"}},[s._v("#")]),s._v(" Prometheus + AlertManager")]),s._v(" "),e("h2",{attrs:{id:"alertmanager-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alertmanager-简介"}},[s._v("#")]),s._v(" AlertManager 简介")]),s._v(" "),e("p",[s._v("Alertmanager 主要用于接收 Prometheus 发送的告警信息，它支持丰富的告警通知渠道，例如邮件、微信、钉钉、Slack 等常用沟通工具，而且很容易做到告警信息进行去重，降噪，分组等，是一款很好用的告警通知系统。")]),s._v(" "),e("h2",{attrs:{id:"配置-node-exporter-和-prom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-node-exporter-和-prom"}},[s._v("#")]),s._v(" 配置 node-exporter 和 Prom")]),s._v(" "),e("h3",{attrs:{id:"配置-node-exporter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-node-exporter"}},[s._v("#")]),s._v(" 配置 node-exporter")]),s._v(" "),e("p",[e("code",[s._v("node-exporter")]),s._v("是最基本的节点监控客户端，负责监控机器的各个指标，包括节点存活、CPU、Mem、Network、IO 等等，方便后边演示 "),e("code",[s._v("Alertmanager")]),s._v("报警时的触发条件，例如配置节点存活检测，当机器 Down 时，触发报警控制，那么就可以通过停止 node-exporter 来模拟实现.")]),s._v(" "),e("p",[s._v("所以直接启动即可：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name node-exporter -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9100")]),s._v(":9100 prom/node-exporter\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("访问测试：http://localhost:9100")]),s._v(" "),e("h3",{attrs:{id:"配置-prom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-prom"}},[s._v("#")]),s._v(" 配置 Prom")]),s._v(" "),e("p",[s._v("编辑 Prometheus 配置文件"),e("code",[s._v("prometheus.yml")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("global:\n  scrape_interval:     15s \n  evaluation_interval: 15s  \n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# scrape_timeout is set to the global default (10s).")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -------------------------------------")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Alertmanager configuration")]),s._v("\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".1.132:9093\n\nrule_files:\n  - "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/prometheus/rules/*.rules"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -------------------------------------")]),s._v("\n\nscrape_configs:\n  - job_name: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'prometheus'")]),s._v("\n    static_configs:\n    - targets: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.16.1.132:9090'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      labels:\n        instance: prometheus\n        service: prometheus-service\n\n  - job_name: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'node-exporter'")]),s._v("\n    file_sd_configs:\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用该模块动态装载，而无需每次重启prom服务")]),s._v("\n      - files: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/etc/prometheus/nodes/*.json'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("p",[s._v("创建"),e("code",[s._v("node-exporter.json")]),s._v("，内容如下所示：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"targets"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.16.1.132:9100"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(",\n        "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"labels"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"instance"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vm-172.16.1.132"')]),s._v(",\n            "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"service"')]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-service"')]),s._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("启动 Prom 容器：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name prometheus -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ prom/prometheus\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看"),e("code",[s._v("node-exporter")]),s._v("和"),e("code",[s._v("prometheus")]),s._v("健康状况：http://localhost:9090/targets")]),s._v(" "),e("h2",{attrs:{id:"配置-alertmanager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-alertmanager"}},[s._v("#")]),s._v(" 配置 AlertManager")]),s._v(" "),e("p",[s._v("简单启动"),e("code",[s._v("AlertManager")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name alertmanager -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9093")]),s._v(":9093 prom/alertmanager\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("打开浏览器访问 http://lcoalhost:9093 进行测试，这里没有报警规则，所有没有内容呈现，")]),s._v(" "),e("p",[s._v("编辑 AlertManager 的配置文件"),e("code",[s._v("alertmanager.yml")]),s._v("：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("global:\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局设置")]),s._v("\n  resolve_timeout: 5m\n  smtp_from: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dai15628960878@163.com'")]),s._v("\n  smtp_smarthost: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp.163.com:465'")]),s._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 163邮箱的SMTP SSL端口为465/994，非SSL为25")]),s._v("\n  smtp_auth_username: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dai15628960878@163.com'")]),s._v("\n  smtp_auth_password: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxxxxxxxxxxxxxx'")]),s._v("\n  smtp_require_tls: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 是否需要tls验证")]),s._v("\n  smtp_hello: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'163.com'")]),s._v("\nroute:\n  group_by: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alertname'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  group_wait: 5s\n  group_interval: 5s\n  repeat_interval: 5m\n  receiver: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'email'")]),s._v("\nreceivers:\n- name: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'email'")]),s._v("\n  email_configs:\n  - to: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'agou-ops@foxmail.com'")]),s._v("\n    send_resolved: "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\ninhibit_rules:\n  - source_match:\n      severity: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'critical'")]),s._v("\n    target_match:\n      severity: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'warning'")]),s._v("\n    equal: "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'alertname'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dev'")]),s._v(", "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'instance'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br")])]),e("p",[s._v("启动容器：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name alertmanager -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9093")]),s._v(":9093 -v /home/prom/alertmanager.yml:/etc/alertmanager/alertmanager.yml -v /home/prom/rules/:/etc/prometheus/rules/ prom/alertmanager\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"配置-prom-的报警规则"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置-prom-的报警规则"}},[s._v("#")]),s._v(" 配置  Prom 的报警规则")]),s._v(" "),e("p",[s._v("在 Prometheus 配置 AlertManager 服务地址以及告警规则，新建报警规则文件"),e("code",[s._v("/home/prom/rules/ test_alert.rules")]),s._v(" 如下：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("groups:\n- name: node-up\n  rules:\n  - alert: node-up\n    expr: up"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("job"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node-exporter"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    for: 15s\n    labels:\n      severity: "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n      team: "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\n    annotations:\n      summary: "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"【【 '),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$labels")]),s._v('.instance 】】 已停止运行超过 15s！"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("然后，修改 "),e("code",[s._v("prometheus.yml")]),s._v(" 配置文件，添加 rules 规则文件，内容如下（上面已经修改过）：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Alertmanager configuration")]),s._v("\nalerting:\n  alertmanagers:\n  - static_configs:\n    - targets:\n      - "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.16")]),s._v(".1.132:9093\n\nrule_files:\n  - "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/prometheus/rules/*.rules"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("启动容器：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name prometheus -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9090")]),s._v(":9090 -v /home/prom/prometheus.yml:/etc/prometheus/prometheus.yml -v /home/prom/nodes/:/etc/prometheus/nodes/ -v           /home/prom/rules/:/etc/prometheus/rules/ prom/prometheus\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("查看报警规则"),e("code",[s._v("rules")]),s._v("：")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-1.png",alt:""}})]),s._v(" "),e("p",[s._v("这里说明一下 Prometheus Alert 告警状态有三种状态："),e("code",[s._v("Inactive")]),s._v("、"),e("code",[s._v("Pending")]),s._v("、"),e("code",[s._v("Firing")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("Inactive")]),s._v("：非活动状态，表示正在监控，但是还未有任何警报触发。")]),s._v(" "),e("li",[e("code",[s._v("Pending")]),s._v("：表示这个警报必须被触发。由于警报可以被分组、压抑/抑制或静默/静音，所以等待验证，一旦所有的验证都通过，则将转到 Firing 状态。")]),s._v(" "),e("li",[e("code",[s._v("Firing")]),s._v("：将警报发送到 AlertManager，它将按照配置将警报的发送给所有接收者。一旦警报解除，则将状态转到 Inactive，如此循环。")])]),s._v(" "),e("p",[s._v("手动停掉"),e("code",[s._v("node-exporter")]),s._v("容器，测试触发警告：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop node-exporter\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在 Prom web面板中查看：")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-2.png",alt:""}})]),s._v(" "),e("p",[s._v("在"),e("code",[s._v("alertmanager")]),s._v("web面板中查看：")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-3.png",alt:""}})]),s._v(" "),e("p",[s._v("已成功收到报警邮件：")]),s._v(" "),e("p",[e("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/prometheus%20%2B%20alertmanager/alertmanager-4.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),e("ul",[e("li",[s._v("alert configuration：https://prometheus.io/docs/alerting/configuration/")]),s._v(" "),e("li",[s._v("动态config文件：https://prometheus.io/docs/prometheus/latest/configuration/configuration/#scrape_config")])])])}),[],!1,null,null,null);a.default=n.exports}}]);