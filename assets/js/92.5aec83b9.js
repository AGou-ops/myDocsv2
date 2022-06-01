(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{725:function(s,n,a){"use strict";a.r(n);var t=a(6),e=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"gogs-basic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gogs-basic"}},[s._v("#")]),s._v(" Gogs Basic")]),s._v(" "),a("p",[s._v("Gogs（"),a("code",[s._v("/gɑgz/")]),s._v("）项目旨在打造一个以最简便的方式搭建简单、稳定和可扩展的自助 Git 服务。使用 Go 语言开发使得 Gogs 能够通过独立的二进制分发，并且支持 Go 语言支持的 "),a("strong",[s._v("所有平台")]),s._v("，包括 Linux、macOS、Windows 以及 ARM 平台。")]),s._v(" "),a("h2",{attrs:{id:"安装配置依赖环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装配置依赖环境"}},[s._v("#")]),s._v(" 安装配置依赖环境")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('APP_NAME="gogs"\nMYSQL_PASSWORD="change_me"\nHOSTNAME="example.com"\n\n# setup mysql\nyum install mysql-server -y\nservice mysql-server start\nchkconfig mysql-server\n\nmysqladmin -u root password "${MYSQL_PASSWORD}"\nmysqladmin -u root --password="${MYSQL_PASSWORD}" password "${MYSQL_PASSWORD}"\nmysql -u root -p${MYSQL_PASSWORD} -e "CREATE DATABASE IF NOT EXISTS ${APP_NAME}; use ${APP_NAME}; set global storage_engine=INNODB;"\n\n# install nginx\nrpm -Uhv http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm\n yum install -y nginx\n\ncat > /etc/nginx/conf.d/default.conf <<EOF\nserver {\n  listen          80;\n  server_name     ${HOSTNAME};\n  location / {\n    proxy_pass      http://localhost:6000;\n  }\n}\nEOF\n\nservice nginx start\nchkconfig nginx on\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("p",[s._v("Now, access "),a("code",[s._v("http://${HOSTNAME}")]),s._v(" and finish the installation process. Easy!")]),s._v(" "),a("h2",{attrs:{id:"安装gogs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装gogs"}},[s._v("#")]),s._v(" 安装"),a("code",[s._v("Gogs")])]),s._v(" "),a("p",[s._v("There are 6 ways to install Gogs:")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://gogs.io/docs/installation/install_from_binary.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install from binary"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://gogs.io/docs/installation/install_from_source.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install from source"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://gogs.io/docs/installation/install_from_packages.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install from packages"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/gogs/gogs/tree/master/docker",target:"_blank",rel:"noopener noreferrer"}},[s._v("Ship with Docker"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/geerlingguy/ansible-vagrant-examples/tree/master/gogs",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install with Vagrant"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/helm/charts/tree/master/incubator/gogs",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install with Kubernetes Using Helm Charts"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("这里为了方便起见, 我使用"),a("code",[s._v("packages")]),s._v("包进行安装:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/gogs.repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  https://dl.packager.io/srv/gogs/gogs/master/installer/el/7.repo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gogs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("当然通过"),a("code",[s._v("Docker")]),s._v("安装也十分简单快捷:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Pull image from Docker Hub.")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull gogs/gogs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Create local directory for volume.")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/gogs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use `docker run` for the first time.")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gogs -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10022")]),s._v(":22 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10080")]),s._v(":3000 -v /var/gogs:/data gogs/gogs\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Use `docker start` if you have stopped it.")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" start gogs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),a("ul",[a("li",[s._v("gogs installation: https://github.com/gogs/gogs#-installation")]),s._v(" "),a("li",[s._v("使用 Gogs 搭建自己的 Git 服务器: https://blog.mynook.info/post/host-your-own-git-server-using-gogs/")])])])}),[],!1,null,null,null);n.default=e.exports}}]);