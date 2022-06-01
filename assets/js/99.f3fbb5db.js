(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{732:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"sonarqube-basic"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube-basic"}},[s._v("#")]),s._v(" Sonarqube Basic")]),s._v(" "),n("h2",{attrs:{id:"sonarqube-简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube-简介"}},[s._v("#")]),s._v(" Sonarqube 简介")]),s._v(" "),n("p",[s._v("SonarQube®是一个自动代码审查工具来检测错误,漏洞,代码中的代码味道。它可以与现有的工作流集成使连续的代码检查在您的项目分支和拉请求。")]),s._v(" "),n("h2",{attrs:{id:"sonarqube-安装"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube-安装"}},[s._v("#")]),s._v(" Sonarqube 安装")]),s._v(" "),n("p",[s._v("1、基础准备")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Sonarqube")]),s._v("较新版本依赖于"),n("code",[s._v("jdk11")]),s._v(", 所以需要提前安装"),n("code",[s._v("jdk11")]),s._v(":")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("yum "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y jdk-11.0.7_linux-x64_bin.rpm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("调整系统参数")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("sysctl -w vm.max_map_count"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("262144")]),s._v("\nsysctl -w fs.file-max"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -n "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("ulimit")]),s._v(" -u "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("ul",[n("li",[s._v("创建专用账号"),n("code",[s._v("sonar")]),s._v("(⚠️ 重要: 如果不适用普通账户,"),n("code",[s._v("sonarqube")]),s._v("将无法正常启动!)")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建账号并授权")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" sonar\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sonar"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" --stdin sonar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("2、准备数据库及账号")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  进入mysql-shell")]),s._v("\nmysql -u root -p\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  新建用户")]),s._v("\nMariaDB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sonar'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sonar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE "),n("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sonar'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),s._v(" IDENTIFIED BY "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sonar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  新建数据库")]),s._v("\nMariaDB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CREATE DATABASE sonar"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  赋予数据库访问权限")]),s._v("\nMariaDB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT ALL PRIVILEGES ON sonar.* TO "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sonar'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMariaDB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GRANT ALL PRIVILEGES ON sonar.* TO "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sonar'")]),s._v("@"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  刷新权限")]),s._v("\nMariaDB "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH PRIVILEGES"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("blockquote",[n("p",[s._v("在较新的版本的"),n("code",[s._v("sonarqube")]),s._v("中, 已经不推荐使用"),n("code",[s._v("MySQL")]),s._v("数据库作为存储数据库, 官方推荐数据库是"),n("code",[s._v("MS SQL Server")]),s._v(", "),n("code",[s._v("Oracle")]),s._v("和"),n("code",[s._v("PostgreSQL")])])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CREATE database sonarqube;")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CREATE USER sonar WITH PASSWORD 'sonar';")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("postgres")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("3、下载")]),s._v(" "),n("ul",[n("li",[s._v("准备软件以及数据目录")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/sonar\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /sonar/data\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /sonar/temp\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("ul",[n("li",[s._v("下载")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载软件包")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://binaries.sonarsource.com/Distribution/sonarqube/sonarqube-8.4.1.35646.zip\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 解压")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" sonarqube-8.4.1.35646.zip -d /usr/sonar/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("授权")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  授予相关目录权限")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R sonar:sonar /usr/sonar\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R sonar:sonar /sonar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("4、配置环境变量")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改profile文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在文件末尾增加变量：SONAR_HOME")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SONAR_HOME")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/sonar/sonarqube-8.4.1\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使变量生效")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 测试")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SONAR_HOME")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("5、配置Sonar")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SONAR_HOME")]),s._v("/conf/sonar.properties\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在配置文件开头增加以下配置")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库配置")]),s._v("\nsonar.jdbc.username"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sonar\nsonar.jdbc.password"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sonar\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sonar.jdbc.url=jdbc:mysql://localhost:3306/sonar?useConfigs=maxPerformance&rewriteBatchedStatements=true&characterEncoding=utf8&useUnicode=true&serverTimezone=GMT%2B08:00")]),s._v("\nsonar.jdbc.url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jdbc:postgresql://localhost/sonarqube\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 文件配置")]),s._v("\nsonar.path.data"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/sonar/data\nsonar.path.temp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/sonar/temp\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Web配置")]),s._v("\nsonar.web.host"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0\nsonar.web.port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("\nsonar.web.context"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("⚠️ 这里要强调的是，"),n("code",[s._v("端口号需要>1000")]),s._v("，因为sonar启动是使用的非root账号，默认是不能使用1000以下的端口的，否则会启动失败.")]),s._v(" "),n("p",[s._v("6、开放端口")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --add-port"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v("/tcp --permanent\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --reload\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("7、启动Sonar")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换到sonar账号")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" sonar\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SONAR_HOME")]),s._v("/bin/linux-x86-64/sonar.sh start\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动完成会看到以下输出")]),s._v("\nStarting SonarQube"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nStarted SonarQube.\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果未完成启动可以使用console命令查看启动过程中的问题")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SONAR_HOME")]),s._v("/bin/linux-x86-64/sonar.sh console\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("blockquote",[n("p",[s._v("sonar支持的启动参数： console | start | stop | restart | status | dump")])]),s._v(" "),n("p",[s._v("如果启动完成，但是依然不能访问，可以通过以下命令查看启动日志")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$SONAR_HOME")]),s._v("/logs/web.log\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("成功启动后，可以访问 "),n("code",[s._v("http://localhost:9000")])]),s._v(" "),n("p",[n("img",{attrs:{src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-1.png",alt:""}})]),s._v(" "),n("p",[s._v("ℹ️默认账号密码均为"),n("code",[s._v("admin")]),s._v(".")]),s._v(" "),n("p",[s._v("启动完成之后, 发现网站下方有一条警告, 是因为我们没有配置好数据库, 配置好数据库重启"),n("code",[s._v("sonarqube")]),s._v("即可.")]),s._v(" "),n("h2",{attrs:{id:"从-docker-启动"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#从-docker-启动"}},[s._v("#")]),s._v(" 从 Docker 启动")]),s._v(" "),n("ol",[n("li",[s._v("PULL  And RUN "),n("code",[s._v("PostgreSQL")]),s._v("  Docker  image:")])]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动 PostgreSQL")]),s._v("\n$ docker run "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("it "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--name pgsql -p 5432:5432 -e POSTGRES_PASSWORD=sonar -d postgres")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接本地 PostgreSQL")]),s._v("\n$ docker "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("it pgsql psql "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("U postgres\npsql "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.3")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Debian "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12.3")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("pgdg100"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"help"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" help"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\npostgres"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CREATE database sonarqube;")]),s._v("\npostgres"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CREATE USER sonar WITH PASSWORD 'sonar';")]),s._v("\npostgres"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# GRANT ALL PRIVILEGES ON DATABASE sonarqube to sonar;")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("Find the Community Edition Docker image on "),n("a",{attrs:{href:"https://hub.docker.com/_/sonarqube/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),n("OutboundLink")],1),s._v(". THEN Start the server by running:")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d --name sonarqube "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),s._v(":9000 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -e sonar.jdbc.url"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jdbc:postgresql://localhost/sonarqube "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -e sonar.jdbc.username"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sonar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -e sonar.jdbc.password"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sonar "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v sonarqube_conf:/opt/sonarqube/conf "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v sonarqube_extensions:/opt/sonarqube/extensions "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v sonarqube_logs:/opt/sonarqube/logs "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -v sonarqube_data:/opt/sonarqube/data "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    sonarqube\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -d --name sonarqube -p 9000:9000 -e SONAR_JDBC_URL=jdbc:postgresql://39.99.144.153/sonarqube -e SONAR_JDBC_USERNAME=postgres -e SONAR_JDBC_PASSWORD=sonar -v /x/sonarqube_extensions:/opt/sonarqube/extensions sonarqube")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("Log in to "),n("a",{attrs:{href:"http://localhost:9000/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:9000"),n("OutboundLink")],1),s._v(" with System Administrator credentials (login=admin, password=admin).")])]),s._v(" "),n("h2",{attrs:{id:"sonarqube-手动扫描代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube-手动扫描代码"}},[s._v("#")]),s._v(" sonarqube 手动扫描代码")]),s._v(" "),n("p",[s._v("参考: https://my.oschina.net/u/4313515/blog/4187313")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-3.png",alt:""}})]),s._v(" "),n("h2",{attrs:{id:"sonarqube-汉化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonarqube-汉化"}},[s._v("#")]),s._v(" sonarqube 汉化")]),s._v(" "),n("p",[s._v("github 项目仓库地址: https://github.com/SonarQubeCommunity/sonar-l10n-zh")]),s._v(" "),n("p",[n("strong",[s._v("安装方法一:")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://github.com/SonarQubeCommunity/sonar-l10n-zh/releases/download/sonar-l10n-zh-plugin-8.4/sonar-l10n-zh-plugin-8.4.jar -O /home/sonar/sonarqube-8.4.1.35646/extensions\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("strong",[s._v("安装方法二:")])]),s._v(" "),n("p",[s._v("依次点击 "),n("code",[s._v("Administration --\x3e Marketplace")]),s._v(", 然后搜索"),n("code",[s._v("Chinese Pack")]),s._v("进行安装.")]),s._v(" "),n("p",[n("img",{attrs:{src:"https://agou-images.oss-cn-qingdao.aliyuncs.com/blog-images/CI%26CD/sonarqube-2.png",alt:""}})]),s._v(" "),n("p",[s._v("安装完成之后会提示你重启"),n("code",[s._v("sonarqube")]),s._v(", 按照提示重启即可.")]),s._v(" "),n("h2",{attrs:{id:"参考资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),n("ul",[n("li",[s._v("Sonarqube Documentation: https://docs.sonarqube.org/")])])])}),[],!1,null,null,null);a.default=e.exports}}]);