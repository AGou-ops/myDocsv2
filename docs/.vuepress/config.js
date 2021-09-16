const path = require('path')
const nav = require('./config/nav/')
// const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {
  // dest: 'gb-pages',//打包目录
  base: '/myDocsv2/',
  title: "AGou's Docs-v2",
  description: '岂能尽如人意，但求无愧我心。',
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://infinitypro-img.infinitynewtab.com/custom-icon/8001de1jd3n68lbfnxxt564xvb0vl5.png?imageMogr2/thumbnail/240x/format/webp/blur/1x0/quality/100|imageslim'
    }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.staticfile.org/jquery/1.7.2/jquery.min.js"
    }],
  ],

  //主题配置
  theme: 'reco',
    plugins,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav,
    logo: '/favicon.png', //导航栏头像
    authorAvatar: '/favicon.png', //首页右侧头像
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    smoothScroll: true,
    sidebarDepth: 2,
    // blogConfig: {
    //   category: {
    //     location: 2, // 在导航栏菜单中所占的位置，默认2
    //     text: '分类' // 默认文案 “分类”
    //   },
    //   tag: {
    //     location: 3, // 在导航栏菜单中所占的位置，默认3
    //     text: '标签' // 默认文案 “标签”
    //   }
    // },
    // 最后更新时间
    lastUpdated: true,
    lastUpdated: '上次更新', // string | boolean
    // 作者
    author: 'AGou-ops',
    // 备案号
    // record: '京ICP备17067634号-1',
    // 项目开始时间
    // startYear: '2018',
    //git地址
    repo: 'AGou-ops/myDocsv2',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    //docsBranch: 'vuepress',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！',
    //评论
    valineConfig: {
      appId: 'pum3vMuPzR2zFajk4PWWiqgQ-gzGzoHsz',
      appKey: 'ceygFjG2jdwuxk8Kch0Azxgi',
      placeholder: '填写邮箱可以收到回复哦!',
      notify: true, // 邮件提醒
      verify: true, // 验证码
      recordIP: true
    },
    sidebar: {
                // Golang sidebar
                "/Golang/": [{
                    title: "Golang",
                    path: "/Golang/",
                    collapsable: true,
                    children: [
                        ["/Golang/Golang Basic", "Golang Basic"],
                        ["/Golang/Golang fmt占位符", "Golang fmt占位符"],
                        ["/Golang/String Operate", "String Operate"],
                        ["/Golang/Golang Pointer", "Golang Pointer"],
                        ["/Golang/Golang Errors&handler", "Golang Errors&handler"],
                        ["/Golang/Golang Interface", "Golang Interface"],
                        ["/Golang/Golang Package manage", "Golang Package manage"],
                        ["/Golang/Golang Pkgs", "Golang Pkgs"],
                        ["/Golang/Golang Testing", "Golang Testing"],
                    ]
                }, ],
                "/k8s/": [{
                    title: "k8s 快速手册",
                    path: "/k8s/",
                    collapsable: true,
                    children: [
                        ["/k8s/一 Kubernetes概述","一 Kubernetes概述"],
                        ["/k8s/二 核心组件及附件","二 核心组件及附件"],
                        ["/k8s/三 集群部署","三 集群部署"],
                        ["/k8s/四 入门命令","四 入门命令"],
                        ["/k8s/五 配置清单使用","五 配置清单使用"],
                        ["/k8s/六 POD 配置清单","六 POD 配置清单"],
                        ["/k8s/七 控制器配置清单","七 控制器配置清单"],
                        ["/k8s/八 Service 配置清单","八 Service 配置清单"],
                        ["/k8s/九 ingress 控制器","九 ingress 控制器"],
                        ["/k8s/十 POD 存储卷","十 POD 存储卷"],
                        ["/k8s/十一 配置信息容器化","十一 配置信息容器化"],
                        ["/k8s/十二 StatefulSet 控制器","十二 StatefulSet 控制器"],
                        ["/k8s/十三 用户认证系统","十三 用户认证系统"],
                        ["/k8s/十四 用户权限系统","十四 用户权限系统"],
                        ["/k8s/十五 dashboard","十五 dashboard"],
                        ["/k8s/十六 网络通信","十六 网络通信"],
                        ["/k8s/十七 调度策略","十七 调度策略"],
                        ["/k8s/十八 高级调度设置","十八 高级调度设置"],
                        ["/k8s/十九 容器资源限制","十九 容器资源限制"],
                    ]
                }, ],
                // ----------- other sidebar---------------
                "/guide/": getGuideSidebar(),
                "/post/Ansible/": getGuideSidebar(),
                "/post/CI&CD/": getGuideSidebar(),
                "/post/CI&CD/GitLab/": getGuideSidebar(),
                "/post/CI&CD/Jenkins/": getGuideSidebar(),
                "/post/CI&CD/Sonarqube/": getGuideSidebar(),
                "/post/Cloud Comptering/": getGuideSidebar(),
                "/post/DataBases/": getGuideSidebar(),
                "/post/DataBases/MongoDB/": getGuideSidebar(),
                "/post/DataBases/MySQL/": getGuideSidebar(),
                "/post/DataBases/Redis/": getGuideSidebar(),
                "/post/DataBases/压测工具/": getGuideSidebar(),
                "/post/DHCP & PXE & Cobbler/": getGuideSidebar(),
                "/post/Docker & Kubernetes & Micro Services/": getGuideSidebar(),
                "/post/Docker & Kubernetes & Micro Services/Docker/": getGuideSidebar(),
                "/post/Docker & Kubernetes & Micro Services/Kubernetes/": getGuideSidebar(),
                "/post/Docker & Kubernetes & Micro Services/Kubernetes/Helm/": getGuideSidebar(),
                "/post/Docker & Kubernetes & Micro Services/Kubernetes/Installation/": getGuideSidebar(),
                "/post/Docker & Kubernetes & Micro Services/Micro Services/": getGuideSidebar(),
                "/post/Dubbo/": getGuideSidebar(),
                "/post/ELK/": getGuideSidebar(),
                "/post/FileSystem/": getGuideSidebar(),
                "/post/FileSystem/Ceph/": getGuideSidebar(),
                "/post/FileSystem/GlusterFS/": getGuideSidebar(),
                "/post/HAProxy/": getGuideSidebar(),
                "/post/Kafka/": getGuideSidebar(),
                "/post/KVM/": getGuideSidebar(),
                "/post/Lua/": getGuideSidebar(),
                "/post/LVS/": getGuideSidebar(),
                "/post/Maven/": getGuideSidebar(),
                "/post/Nexus/": getGuideSidebar(),
                "/post/Nuster/": getGuideSidebar(),
                "/post/Prometheus & Consul/": getGuideSidebar(),
                "/post/RabbitMQ/": getGuideSidebar(),
                "/post/Shell/": getGuideSidebar(),
                "/post/Terraform/": getGuideSidebar(),
                "/post/Varnish/": getGuideSidebar(),
                "/post/Web Servers/": getGuideSidebar(),
                "/post/Web Servers/Apache/": getGuideSidebar(),
                "/post/Web Servers/Jvm & Tomcat/": getGuideSidebar(),
                "/post/Web Servers/Nginx/": getGuideSidebar(),
                "/post/Web Servers/Nginx/Others/": getGuideSidebar(),
                "/post/Web Servers/Nginx/Problems/": getGuideSidebar(),
                "/post/Web Servers/PHP/": getGuideSidebar(),
                "/post/Web Servers/Python Django/": getGuideSidebar(),
                "/post/Zabbix/": getGuideSidebar(),
                "/post/Zookeeper/": getGuideSidebar(),
                "/post/工作面试题/": getGuideSidebar(),

            }
  },


}


    // 获取导航侧边栏
function getGuideSidebar() {
    return [{
            title: "Ansible",
            path: "/post/Ansible/",
            collapsable: true,
            children: [
                ["/post/Ansible/Ansible Ad-hoc Basic", "Ansible Ad-hoc Basic"],
                ["/post/Ansible/Ansible Basic", "Ansible Basic"],
                ["/post/Ansible/Ansible Best Practices", "Ansible Best Practices"],
                ["/post/Ansible/Ansible inventory", "Ansible inventory"],
                ["/post/Ansible/Ansible modules", "Ansible modules"],
                ["/post/Ansible/Ansible Playbook Basic", "Ansible Playbook Basic"],
                ["/post/Ansible/Ansible Tower", "Ansible Tower"],

            ]
        },
        {
            title: "CI&CD",
            path: "/post/CI&CD/",
            collapsable: true,
            children: [{
                    title: "GitLab",
                    path: "/post/CI&CD/GitLab/",
                    collapsable: true,
                    children: [
                        ["/post/CI&CD/GitLab/GitLab Backup & Move", "GitLab Backup & Move"],
                        ["/post/CI&CD/GitLab/GitLab Basic", "GitLab Basic"],
                        ["/post/CI&CD/GitLab/GitLab Reset_passwd", "GitLab Reset_passwd"],
                    ]
                },
                {
                    title: "Jenkins",
                    path: "/post/CI&CD/Jenkins/",
                    collapsable: true,
                    children: [
                        ["/post/CI&CD/Jenkins/Jenkins Basic", "Jenkins Basic"],
                        ["/post/CI&CD/Jenkins/Jenkinsfile", "Jenkinsfile"],
                        ["/post/CI&CD/Jenkins/Jenkins Plugins", "Jenkins Plugins"],
                    ]
                },
                {
                    title: "Sonarqube",
                    path: "/post/CI&CD/Sonarqube/",
                    collapsable: true,
                    children: [
                        ["/post/CI&CD/Sonarqube/Sonarqube Basic", "Sonarqube Basic"],
                        ["/post/CI&CD/Sonarqube/Sonarqube + Jenkins", "Sonarqube + Jenkins"],
                    ]
                },
                ["/post/CI&CD/Gogs Basic", "Gogs Basic"],
                ["/post/CI&CD/Jira Basic", "Jira Basic"],
                ["/post/CI&CD/发布方式", "发布方式"],
            ]
        },
        {
            title: "Cloud Comptering",
            path: "/post/Cloud Comptering/",
            collapsable: true,
            children: [
                ["/post/Cloud Comptering/Amazon Web Services", "Amazon Web Services"],
                ["/post/Cloud Comptering/Amazon EKS Basic", "Amazon EKS Basic"],
                ["/post/Cloud Comptering/Microsoft Azure", "Microsoft Azure"],
            ]
        },
        {
            title: "DataBases",
            path: "/post/DataBases/",
            collapsable: true,
            children: [{
                    title: "MongoDB",
                    path: "/post/DataBases/MongoDB/",
                    collapsable: true,
                    children: [
                        ["/post/DataBases/MongoDB/MongoDB Backup", "MongoDB Backup"],
                        ["/post/DataBases/MongoDB/MongoDB Basic", "MongoDB Basic"],
                        ["/post/DataBases/MongoDB/MongoDB Cluster", "MongoDB Cluster"],
                        ["/post/DataBases/MongoDB/MongoDB Installation", "MongoDB Installation"],
                        ["/post/DataBases/MongoDB/MongoDB Sharded-Cluster", "MongoDB Sharded-Cluster"],
                        ["/post/DataBases/MongoDB/MongoDB 异构数据平台迁移", "MongoDB 异构数据平台迁移"],
                        ["/post/DataBases/MongoDB/mongodump(restore) oplog高级备份", "mongodump(restore) oplog高级备份"],
                    ]
                }, {
                    title: "MySQL",
                    path: "/post/DataBases/MySQL/",
                    collapsable: true,
                    children: [
                        ["/post/DataBases/MySQL/MariaDB Log", "MariaDB Log"],
                        ["/post/DataBases/MySQL/MySQL Auth CLI", "MySQL Auth CLI"],
                        ["/post/DataBases/MySQL/MySQL BackUP & Client Tools", "MySQL BackUP & Client Tools"],
                        ["/post/DataBases/MySQL/MySQL Cluster", "MySQL Cluster"],
                        ["/post/DataBases/MySQL/MySQL Configuration", "MySQL Configuration"],
                        ["/post/DataBases/MySQL/MySQL Cursor", "MySQL Cursor"],
                        ["/post/DataBases/MySQL/MySQL Data_Type", "MySQL Data_Type"],
                        ["/post/DataBases/MySQL/MySQL Function", "MySQL Function"],
                        ["/post/DataBases/MySQL/MySQL Internal_function", "MySQL Internal_function"],
                        ["/post/DataBases/MySQL/MySQL Stored Procedure", "MySQL Stored Procedure"],
                        ["/post/DataBases/MySQL/MySQL Transaction", "MySQL Transaction"],
                        ["/post/DataBases/MySQL/MySQL 快速手册", "MySQL 快速手册"],
                        ["/post/DataBases/MySQL/MySQL 约束", "MySQL 约束"],
                    ]
                }, {
                    title: "Redis",
                    path: "/post/DataBases/Redis/",
                    collapsable: true,
                    children: [
                        ["/post/DataBases/Redis/Redis Backup", "Redis Backup"],
                        ["/post/DataBases/Redis/Redis Basic", "Redis Basic"],
                        ["/post/DataBases/Redis/Redis Cluster", "Redis Cluster"],
                        ["/post/DataBases/Redis/Redis Codis", "Redis Codis"],
                        ["/post/DataBases/Redis/Redis  HA", "Redis  HA"],
                        ["/post/DataBases/Redis/Redis Installation", "Redis Installation"],
                        ["/post/DataBases/Redis/Redis Sentinel", "Redis Sentinel"],
                        ["/post/DataBases/Redis/Redis 进阶", "Redis 进阶"],
                        ["/post/DataBases/Redis/缓存穿透、缓存击穿、缓存雪崩", "缓存穿透、缓存击穿、缓存雪崩"],
                    ]
                },
                ["/post/DataBases/压测工具/", "压测工具"]
            ]
        },
        {
            title: "DHCP & PXE & Cobbler",
            path: "/post/DHCP & PXE & Cobbler/",
            collapsable: true,
            children: [
                ["/post/DHCP & PXE & Cobbler/Cobbler CentOS", "Cobbler CentOS"],
                ["/post/DHCP & PXE & Cobbler/DHCP 简单使用", "DHCP 简单使用"],
                ["/post/DHCP & PXE & Cobbler/PXE CentOS", "PXE CentOS"],
            ]
        },
        {
            title: "Docker & Kubernetes & Micro Services",
            path: "/post/Docker & Kubernetes & Micro Services/",
            collapsable: true,
            children: [{
                    title: "Docker",
                    path: "/post/Docker & Kubernetes & Micro Services/Docker/",
                    collapsable: true,
                    children: [
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker Basic", "Docker Basic"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker Compose", "Docker Compose"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/DockerFile", "DockerFile"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker Network", "Docker Network"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker openvswitch", "Docker openvswitch"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker Portainer", "Docker Portainer"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker Private Registry", "Docker Private Registry"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker Remote Access", "Docker Remote Access"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker Volume", "Docker Volume"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/Docker 固定IP及跨主机互通", "Docker 固定IP及跨主机互通"],
                        ["/post/Docker & Kubernetes & Micro Services/Docker/SSH Docker container", "SSH Docker container"],
                    ]
                }, {
                    title: "Kubernetes",
                    path: "/post/Docker & Kubernetes & Micro Services/Kubernetes/",
                    collapsable: true,
                    children: [{
                            title: "Helm",
                            path: "/post/Docker & Kubernetes & Micro Services/Kubernetes/Helm/",
                            collapsable: true,
                            children: [
                                ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Helm/charts", "charts"],
                                ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Helm/Helm Basic", "Helm Basic"],
                                ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Helm/Helm(Go) template", "Helm(Go) template"],
                            ]
                        }, {
                            title: "K8s Installation",
                            path: "/post/Docker & Kubernetes & Micro Services/Kubernetes/Installation/",
                            collapsable: true,
                            children: [
                                ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Installation/Kubernetes 二进制安装", "Kubernetes 二进制安装"],
                                ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Installation/使用 Kubeadm 部署(单master)", "使用 Kubeadm 部署(单master)"],
                                ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Installation/使用 Kubespray 部署", "使用 Kubespray 部署"],
                                ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Installation/使用国内源及相关小工具", "使用国内源及相关小工具"],
                            ]
                        },
                        ["/post/Docker & Kubernetes & Micro Services/Kubernetes/k8s command", "k8s command"],
                        ["/post/Docker & Kubernetes & Micro Services/Kubernetes/kompose Basic", "kompose Basic"],
                        ["/post/Docker & Kubernetes & Micro Services/Kubernetes/kubenetes远程调试工具", "kubenetes远程调试工具"],
                        ["/post/Docker & Kubernetes & Micro Services/Kubernetes/Minikube Basic", "Minikube Basic"],
                    ]
                },
                {
                    title: "Micro Services",
                    path: "/post/Docker & Kubernetes & Micro Services/Micro Services/",
                    collapsable: true,
                    children: [
                        ["/post/Docker & Kubernetes & Micro Services/Micro Services/Grafana Loki Basic", "Grafana Loki Basic"],
                        ["/post/Docker & Kubernetes & Micro Services/Micro Services/Istio Basic", "Istio Basic"],
                    ]
                }
            ]
        },
        {
            title: "Dubbo",
            path: "/post/Dubbo/",
            collapsable: true,
            children: [
                ["/post/Dubbo/Dubbo Basic", "Dubbo Basic"],
            ]
        },
        {
            title: "ELK stack",
            path: "/post/ELK/",
            collapsable: true,
            children: [
                ["/post/ELK/[Elastic Stack].Beats", "[Elastic Stack].Beats"],
                ["/post/ELK/ELK basic", "ELK basic"],
                ["/post/ELK/ES 3rd part Plugins", "ES 3rd part Plugins"],
                ["/post/ELK/Filebeat basic", "Filebeat basic"],
                ["/post/ELK/Kafka+ELFK分布式日志收集", "Kafka+ELFK分布式日志收集"],
                ["/post/ELK/Kafka(Redis)+ELFK分布式日志收集", "Kafka(Redis)+ELFK分布式日志收集"],
                ["/post/ELK/Logstash Basic & Plugins", "Logstash Basic & Plugins"],
                ["/post/ELK/syslog+ELK日志收集", "syslog+ELK日志收集"],
                ["/post/ELK/TCP+ELK日志收集", "TCP+ELK日志收集"],
                ["/post/ELK/使用 docker-compose 部署 ELK", "使用 docker-compose 部署 ELK"],
                ["/post/ELK/收集Java、Tomcat日志", "收集Java、Tomcat日志"],
            ]
        },
        {
            title: "FileSystem",
            path: "/post/FileSystem/",
            collapsable: true,
            children: [{
                    title: "Ceph",
                    path: "/post/FileSystem/Ceph",
                    collapsable: true,
                    children: [
                        ["/post/FileSystem/Ceph/Cephadm 部署octopus", "Cephadm 部署octopus"],
                        ["/post/FileSystem/Ceph/Ceph Basic", "Ceph Basic"],
                        ["/post/FileSystem/Ceph/Ceph Cluster 移除", "Ceph Cluster 移除"],
                        ["/post/FileSystem/Ceph/Ceph-deploy 集群快速部署", "Ceph-deploy 集群快速部署"],
                        ["/post/FileSystem/Ceph/CephFS", "CephFS"],
                        ["/post/FileSystem/Ceph/Ceph Manager Dashboard", "Ceph Manager Dashboard"],
                        ["/post/FileSystem/Ceph/Ceph RGW", "Ceph RGW"],
                        ["/post/FileSystem/Ceph/ceph 部署问题汇总", "ceph 部署问题汇总"],
                    ]
                },
                {
                    title: "GlusterFS",
                    path: "/post/FileSystem/GlusterFS",
                    collapsable: true,
                    children: [
                        ["/post/FileSystem/GlusterFS/临时", "临时"],
                    ]
                },
                ["/post/FileSystem/NFS 基础及实战", "NFS 基础及实战"],
                ["/post/FileSystem/Samba 基础及实战", "Samba 基础及实战"],
                ["/post/FileSystem/SAMBA 基础及实战", "SAMBA 基础及实战"],
                ["/post/FileSystem/smb.conf详解", "smb.conf详解"],
                ["/post/FileSystem/TFTP", "TFTP"],
                ["/post/FileSystem/vsFTP 基础及实战", "vsFTP 基础及实战"],
            ]
        },
        // {
        //     title: "HAProxy",
        //     path: "/post/HAProxy/",
        //     collapsable: true,
        //     children: [
        //         ["/post/HAProxy/configuration.txt", "configuration.txt"],
        //         ["/post/HAProxy/HAProxy Basic", "HAProxy Basic"],
        //         ["/post/HAProxy/HAProxy + Docker", "HAProxy + Docker"],
        //         ["/post/HAProxy/HAProxy 参考示例", "HAProxy 参考示例"],
        //         ["/post/HAProxy/HAProxy 配置详解", "HAProxy 配置详解"],["/post/HAProxy/configuration.txt", "HAProxy configuration"],
        //     ]
        // },
        {
            title: "Kafka",
            path: "/post/Kafka/",
            collapsable: true,
            children: [
                ["/post/Kafka/CMAK", "CMAK"],
                ["/post/Kafka/Kafka Basic", "Kafka Basic"],
                ["/post/Kafka/使用 docker-compose 部署 Kafka", "使用 docker-compose 部署 Kafka"],
            ]
        },
        {
            title: "KVM",
            path: "/post/KVM/",
            collapsable: true,
            children: [
                ["/post/KVM/KVM 2 VMware Station", "KVM 2 VMware Station"],
                ["/post/KVM/KVM Basic", "KVM Basic"],
                ["/post/KVM/kvm_install.sh", "kvm_install.sh"],
            ]
        },
        {
            title: "Lua",
            path: "/post/Lua/",
            collapsable: true,
            children: [
                ["/post/Lua/Lua Baisc", "Lua Baisc"],
                ["/post/Lua/Lua continue Ex", "Lua continue Ex"],
            ]
        },
        {
            title: "Maven",
            path: "/post/Maven/",
            collapsable: true,
            children: [
                ["/post/Maven/×Maven Basic", "×Maven Basic"],
                ["/post/Maven/Nexus 私服搭建", "Nexus 私服搭建"],
            ]
        },
        {
            title: "Nexus",
            path: "/post/Nexus/",
            collapsable: true,
            children: [
                ["/post/Nexus/Nexus Basic + Maven 私服", "Nexus Basic + Maven 私服"],
                ["/post/Nexus/Nexus + yum 私服", "Nexus + yum 私服"],
                ["/post/Nexus/nexus 批量上传脚本", "nexus 批量上传脚本"],
            ]
        },
        {
            title: "Nuster",
            path: "/post/Nuster/",
            collapsable: true,
            children: [
                ["/post/Nuster/Nuster Basic", "Nuster Basic"],
            ]
        },
        {
            title: "Prometheus & Consul",
            path: "/post/Prometheus & Consul/",
            collapsable: true,
            children: [
                ["/post/Prometheus & Consul/Consul 入门", ":Consul 入门"],
                ["/post/Prometheus & Consul/Prometheus + AlertManager", ":Prometheus + AlertManager"],
                ["/post/Prometheus & Consul/Prometheus + Consul(服务发现)", ":Prometheus + Consul(服务发现)"],
                ["/post/Prometheus & Consul/Prometheus in Docker", ":Prometheus in Docker"],
                ["/post/Prometheus & Consul/Prometheus 安装与部署、Grafana", ":Prometheus 安装与部署、Grafana"],
                ["/post/Prometheus & Consul/Prometheus 进阶", ":Prometheus 进阶"],
            ]
        },
        {
            title: "RabbitMQ",
            path: "/post/RabbitMQ/",
            collapsable: true,
            children: [
                ["/post/RabbitMQ/RabbitMQ Basic", "RabbitMQ Basic"],
                ["/post/RabbitMQ/RabbitMQ Mirror Queue", "RabbitMQ Mirror Queue"],
            ]
        },
        {
            title: "Shell",
            path: "/post/Shell/",
            collapsable: true,
            children: [
                ["/post/Shell/command", "command"],
                ["/post/Shell/Linux Shell 实用命令及使用场景", "Linux Shell 实用命令及使用场景"],
                ["/post/Shell/Shell getopts 样例", "Shell getopts 样例"],
                ["/post/Shell/userful-shell", "userful-shell"],
            ]
        },
        {
            title: "Terraform",
            path: "/post/Terraform/",
            collapsable: true,
            children: [
                ["/post/Terraform/Terraform Basic", "Terraform Basic"],
                ["/post/Terraform/Terraform Examples", "Terraform Examples"],
                ["/post/Terraform/Terraform Variable", "Terraform Variable"],
            ]
        },
        {
            title: "Varnish",
            path: "/post/Varnish/",
            collapsable: true,
            children: [
                ["/post/Varnish/varnish Basic", "varnish Basic"],
                ["/post/Varnish/varnish 参考示例", "varnish 参考示例"],
                ["/post/Varnish/varnish 架构、工作原理及简单配置", "varnish 架构、工作原理及简单配置"],
            ]
        },
        {
            title: "Web Servers",
            path: "/post/Web Servers/",
            collapsable: true,
            children: [
                ["/post/Web Servers/Apache/", "Apache"],
                {
                    title: "Jvm & Tomcat",
                    path: "/post/Web Servers/Jvm & Tomcat/",
                    collapsable: true,
                    children: [
                        ["/post/Web Servers/Jvm & Tomcat/Jvm Monitor Tools", "Jvm Monitor Tools"],
                        ["/post/Web Servers/Jvm & Tomcat/Tomcat Basic", "Tomcat Basic"],
                        ["/post/Web Servers/Jvm & Tomcat/Tomcat Cluster(nginx)", "Tomcat Cluster(nginx)"],
                        ["/post/Web Servers/Jvm & Tomcat/Tomcat Session(memcached)", "Tomcat Session(memcached)"],
                        ["/post/Web Servers/Jvm & Tomcat/Tomcat Session(Redis with Nginx)", "Tomcat Session(Redis with Nginx)"],
                        ["/post/Web Servers/Jvm & Tomcat/Tomcat 常用设置及安全管理规范", "Tomcat 常用设置及安全管理规范"],
                        ["/post/Web Servers/Jvm & Tomcat/Tomcat 调优", "Tomcat 调优"],
                    ]
                },
                {
                    title: "Nginx",
                    path: "/post/Web Servers/Nginx/",
                    collapsable: true,
                    children: [
                        ["/post/Web Servers/Nginx/HTTPS  配置及优化", "HTTPS  配置及优化"],
                        ["/post/Web Servers/Nginx/Nginx Cache", "Nginx Cache"],
                        ["/post/Web Servers/Nginx/Nginx + keepalived", "Nginx + keepalived"],
                        ["/post/Web Servers/Nginx/Nginx Rewrite", "Nginx Rewrite"],
                        ["/post/Web Servers/Nginx/Nginx + uWSGI 部署Django", "Nginx + uWSGI 部署Django"],
                        ["/post/Web Servers/Nginx/Nginx 内置变量", "Nginx 内置变量"],
                        ["/post/Web Servers/Nginx/Nginx 反向代理", "Nginx 反向代理"],
                        ["/post/Web Servers/Nginx/Nginx 平滑升级与回滚", "Nginx 平滑升级与回滚"],
                        ["/post/Web Servers/Nginx/Nginx 快速配置手册", "Nginx 快速配置手册"],
                        ["/post/Web Servers/Nginx/Nginx 性能优化与安全", "Nginx 性能优化与安全"],
                        ["/post/Web Servers/Nginx/Nginx 爬虫限制", "Nginx 爬虫限制"],
                        ["/post/Web Servers/Nginx/Nginx 编译及制作包", "Nginx 编译及制作包"],
                        ["/post/Web Servers/Nginx/Nginx 负载均衡", "Nginx 负载均衡"],
                        ["/post/Web Servers/Nginx/Nginx 高级模块", "Nginx 高级模块"],
                        {
                            title: "Nginx Others",
                            path: "/post/Web Servers/Nginx/Others/",
                            collapsable: true,
                            children: [
                                ["/post/Web Servers/Nginx/Others/Node.js with ssl & nginx", "Node.js with ssl & nginx"],
                                ["/post/Web Servers/Nginx/Others/使用logrotate切割nginx日志", "使用logrotate切割nginx日志"],
                                ["/post/Web Servers/Nginx/Others/检查服务器是否支持gzip", "检查服务器是否支持gzip"],
                            ]
                        }, {
                            title: "Nginx Problems",
                            path: "/post/Web Servers/Nginx/Problems",
                            collapsable: true,
                            children: [
                                ["/post/Web Servers/Nginx/Problems/rewrite参数处理问题", "rewrite参数处理问题"],

                            ]
                        }
                    ]
                },
                {
                    title: "PHP",
                    path: "/post/Web Servers/PHP/",
                    collapsable: true,
                    children: [
                        ["/post/Web Servers/PHP/PHP 优化及安全配置", "PHP 优化及安全配置"],
                    ]

                },
                {

                    title: "Python Django",
                    path: "/post/Web Servers/Python Django/",
                    collapsable: true,
                    children: [
                        ["/post/Web Servers/Python Django/Access to Database", "Access to Database"],
                        ["/post/Web Servers/Python Django/Django Basic", "Django Basic"],
                    ]
                }

            ]
        },
        {
            title: "Zabbix",
            path: "/post/Zabbix/",
            collapsable: true,
            children: [
                ["/post/Zabbix/Zabbix Basic", "Zabbix Basic"],
                ["/post/Zabbix/Zabbix 详细介绍", "Zabbix 详细介绍"],
            ]
        },
        {
            title: "Zookeeper",
            path: "/post/Zookeeper/",
            collapsable: true,
            children: [
                ["/post/Zookeeper/Zookeeper Basic", "Zookeeper Basic"],

            ]
        },
        {
            title: "工作面试题",
            path: "/post/工作面试题/",
            collapsable: true,
            children: [
                ["/post/工作面试题/Redis", "Redis"],

            ]
        },
        { // Other here.
            title: "Others",
            // path: "/post/",
            collapsable: false,
            children: [
                ["/post/CertBot Nginx SSL", "CertBot Nginx SSL"],
                ["/post/dnsmasq", "dnsmasq"],
                ["/post/inotifywait 文件监控", "inotifywait 文件监控"],
                ["/post/JumpServer", "JumpServer"],
                ["/post/k3s & k3d Basic", "k3s & k3d Basic"],
                ["/post/keepalived", "keepalived"],
                ["/post/lsyncd", "lsyncd"],
                ["/post/lvm 讲解", "lvm 讲解"],
                ["/post/OpenVPN for CentOS", "OpenVPN for CentOS"],
                ["/post/PowerDNS", "PowerDNS"],
                ["/post/rsync + inotify(sersync)", "rsync + inotify(sersync)"],
                ["/post/Split & Logrotate", "Split & Logrotate"],
                ["/post/SQL review", "SQL review"],
                ["/post/SSH Tunnel", "SSH Tunnel"],
                ["/post/Useful Command", "Useful Command"],
                ["/post/Vagrant", "Vagrant"],
                ["/post/vim tricks", "vim tricks"],
                ["/post/WireGuard VPN for Ubuntu", "WireGuard VPN for Ubuntu"],
                ["/post/WireShark Filter", "WireShark Filter"],
            ]
        },
    ]
}