(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{887:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"powerdns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powerdns"}},[s._v("#")]),s._v(" PowerDNS")]),s._v(" "),t("h2",{attrs:{id:"powerdns-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powerdns-简介"}},[s._v("#")]),s._v(" PowerDNS 简介")]),s._v(" "),t("p",[s._v("PowerDNS 是一个跨平台的开源DNS服务组件，PowerDNS同时有Win32和Linux/Unix的版本。 PowerDNS在Win32下使用 Access的mdb文件记录DNS信息，而在Linux/Unix下则使用MySQL来记录DNS信息。无论是mdb亦或MySQL，备份是非常方便的 事情。")]),s._v(" "),t("h2",{attrs:{id:"powerdns-安装与简单使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powerdns-安装与简单使用"}},[s._v("#")]),s._v(" PowerDNS 安装与简单使用")]),s._v(" "),t("h3",{attrs:{id:"安装相关程序包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装相关程序包"}},[s._v("#")]),s._v(" 安装相关程序包")]),s._v(" "),t("p",[s._v("需要先安装 "),t("code",[s._v("pdns-server")]),s._v(" ，然后再安装 "),t("code",[s._v("pdns-backend-$backend")]),s._v(" 。Backend 是你可以自己选的，常用的有 "),t("code",[s._v("BIND")]),s._v(" 和 "),t("code",[s._v("Generic MySQL")]),s._v(" ，需要 GEODNS 可以用 "),t("code",[s._v("GEOIP")]),s._v(" ，所有列表"),t("a",{attrs:{href:"https://doc.powerdns.com/md/authoritative/",target:"_blank",rel:"noopener noreferrer"}},[s._v("见此"),t("OutboundLink")],1),s._v("。如果想做网页版控制后台，使用 MySQL 的可能比较方便。如果只是通过文件形式控制，那么 BIND 和 GEOIP 都可以。")]),s._v(" "),t("h4",{attrs:{id:"redhat-based-systems"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redhat-based-systems"}},[s._v("#")]),s._v(" Redhat-based Systems")]),s._v(" "),t("p",[s._v("在基于RedHat的系统上，有2个安装PowerDNS的选项，可以从"),t("code",[s._v("EPEL")]),s._v("，"),t("code",[s._v("Kees Monshouwer")]),s._v("或从"),t("code",[s._v("PowerDNS官方仓库")]),s._v("(https://repo.powerdns.com/)进行安装：")]),s._v(" "),t("p",[s._v("在这里我使用"),t("code",[s._v("EPEL")]),s._v("仓库进行安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pdns -y\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("选择所需要的后端数据库插件，在这里我选择"),t("code",[s._v("mysql")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" pdns-backend-mysql mariadb-server mariadb -y\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动mariadb服务")]),s._v("\nsystemctl start mariadb.service\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"配置-mysql-数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-mysql-数据库"}},[s._v("#")]),s._v(" 配置 mysql 数据库")]),s._v(" "),t("p",[s._v("为"),t("code",[s._v("PowerDNS")]),s._v("创建一个数据库：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("MariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" powerdns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GRANT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" powerdns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'powerdns'")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@'172.16.%.%'")]),s._v(" IDENTIFIED "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'powerdns'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("PRIVILEGES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("导入所需数据表：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("MariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" use powerdns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("powerdns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v("  /usr/share/doc/pdns-backend-mysql-4.1.11/schema.mysql.sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\nMariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("powerdns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show tables"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n+--------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" Tables_in_powerdns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" comments           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" cryptokeys         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" domainmetadata     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" domains            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" records            "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" supermasters       "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" tsigkeys           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+--------------------+\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" rows "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.00")]),s._v(" sec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h4",{attrs:{id:"配置-powerdns-连接-mysql-数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-powerdns-连接-mysql-数据库"}},[s._v("#")]),s._v(" 配置 PowerDNS ，连接 mysql 数据库")]),s._v(" "),t("p",[s._v("编辑配置文件"),t("code",[s._v("/etc/pdns/pdns.conf")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查找launch选项的相关内容 ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("launch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("gmysql\ngmysql-host"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("localhost\ngmysql-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\ngmysql-dbname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("powerdns\ngmysql-user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("powerdns\ngmysql-password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("powerdns\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("完成之后，保存退出，然后启动 PowerDNS：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start pdns\nsystemectl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" pdns\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看其启动状态")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# ss -tnulp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" pdns\nudp    UNCONN     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("         *:53                    *:*                   users:"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v('"pdns_server"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37370")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\nudp    UNCONN     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":53                 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":*                   users:"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v('"pdns_server"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37370")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\ntcp    LISTEN     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("       *:53                    *:*                   users:"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v('"pdns_server"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37370")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\ntcp    LISTEN     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":53                 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":*                   users:"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v('"pdns_server"'),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pid"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37370")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("fd"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"安装poweradmin来管理powerdns"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装poweradmin来管理powerdns"}},[s._v("#")]),s._v(" 安装PowerAdmin来管理PowerDNS")]),s._v(" "),t("p",[s._v("PowerAdmin，一个界面友好的PowerDNS服务器的 Web 管理器。我们需要配置其运行环境，在这里我使用"),t("code",[s._v("LAMP")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" httpd php php-devel php-gd php-mcrypt php-imap php-ldap php-mysql php-odbc php-pear php-xml php-xmlrpc php-mbstring php-mcrypt php-mhash gettext\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动 "),t("code",[s._v("httpd")]),s._v("并设置开机自启动："),t("code",[s._v("systemctl start httpd.service;systemctl enable httpd.service")])]),s._v(" "),t("p",[s._v("下载并将"),t("code",[s._v("PowerAdmin")]),s._v("包移动到 httpd 网站目录当中去：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://downloads.sourceforge.net/project/poweradmin/poweradmin-2.1.7.tgz\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xf poweradmin-2.1.7.tgz -C /var/www/html\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s poweradmin-2.1.7/ poweradmin\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" poweradmin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("此时，打开浏览器，访问 http://172.16.1.128/poweradmin/install/ 进行安装：")]),s._v(" "),t("p",[s._v("前两个步骤直接无脑下一步就可以了，3️⃣第三步需要配置连接数据库，详细信息如下所示")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-1.png",alt:""}})]),s._v(" "),t("p",[s._v("4️⃣第四步，为 Poweradmin 创建一个受限用户，详细信息如下所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-2.png",alt:""}})]),s._v(" "),t("p",[s._v("信息说明：")]),s._v(" "),t("ul",[t("li",[s._v("用户名（Username）：PowerAdmin用户名。")]),s._v(" "),t("li",[s._v("密码（Password）：上述用户的密码。")]),s._v(" "),t("li",[s._v("主机管理员（Hostmaster）：当创建SOA记录而你没有指定主机管理员时，该值会被用作默认值(可以不写)。这里我写的是部署机的主机名")]),s._v(" "),t("li",[s._v("主域名服务器：该值在创建新的DNS区域时会被用于作为主域名服务器。")]),s._v(" "),t("li",[s._v("辅域名服务器：该值在创建新的DNS区域时会被用于作为辅域名服务器。")])]),s._v(" "),t("p",[s._v("5️⃣ 第五步，Poweradmin会要求你在数据库表中创建一个新的受限数据库用户，它会提供你需要在MariaDB控制台输入的代码：")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-3.png",alt:""}})]),s._v(" "),t("p",[s._v("打开 mysql 客户端，输入以下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("MariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT SELECT, INSERT, UPDATE, DELETE\n    -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ON powerdns.*\n    -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" TO "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'poweradmin'")]),s._v("@"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v("\n    -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" IDENTIFIED BY "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'poweradmin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" flush privileges"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("6️⃣第六步，手动将安装页面上的配置信息填入到"),t("code",[s._v("/var/www/html/poweradmin/inc")]),s._v("中，这里我就不截图了：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/www/html/poweradmin/inc/config.inc.php\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加以下内容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("?php\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db_host")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db_user")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'poweradmin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db_pass")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'poweradmin'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db_name")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'powerdns'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db_type")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mysql'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$db_layer")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PDO'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$session_key")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pq~_!Y3v#D}Hdf)VgWDpe]HXOWJcNCyY&zLR=su(#ekol8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$iface_lang")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'en_EN'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dns_hostmaster")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pdns-server'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dns_ns1")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.16.1.128'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$dns_ns2")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'172.16.1.128'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("7️⃣点击下一步，这时已经提示安装完成，需要注意的一点是，安装完成之后需要删除文件夹中的"),t("code",[s._v("install")]),s._v("文件夹：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/www/html/poweradmin/install/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在，就可以直接通过浏览器访问 PowerAdmin 了，http://172.16.1.128/poweradmin/")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/powerdns/pdns-4.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[s._v("PowerDNS 官方安装指南：https://doc.powerdns.com/md/authoritative/installation/")])])])}),[],!1,null,null,null);a.default=e.exports}}]);