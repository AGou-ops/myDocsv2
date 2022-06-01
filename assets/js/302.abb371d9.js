(window.webpackJsonp=window.webpackJsonp||[]).push([[302],{935:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-uwsgi部署django项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-uwsgi部署django项目"}},[s._v("#")]),s._v(" Nginx+uWSGI部署Django项目")]),s._v(" "),t("h2",{attrs:{id:"django-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#django-简介"}},[s._v("#")]),s._v(" Django 简介")]),s._v(" "),t("p",[t("strong",[s._v("Django")]),s._v(" 是一个"),t("strong",[s._v("高级的Python 网络框架")]),s._v("，可以快速开发安全和可维护的网站。 由经验丰富的开发者构建，"),t("strong",[s._v("Django")]),s._v("负责处理网站开发中麻烦的部分，因此你可以专注于编写应用程序，而无需重新开发。 它是免费和开源的，有活跃繁荣的社区，丰富的文档，以及很多免费和付费的解决方案。")]),s._v(" "),t("h2",{attrs:{id:"部署流程-centos-7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署流程-centos-7"}},[s._v("#")]),s._v(" 部署流程(CentOS 7)")]),s._v(" "),t("h3",{attrs:{id:"安装-django"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-django"}},[s._v("#")]),s._v(" 安装 Django")]),s._v(" "),t("h4",{attrs:{id:"安装-python3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-python3"}},[s._v("#")]),s._v(" 安装 python3")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y python3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"创建一个虚拟环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个虚拟环境"}},[s._v("#")]),s._v(" 创建一个虚拟环境")]),s._v(" "),t("p",[s._v("首先创建"),t("code",[s._v("django")]),s._v("的工作目录：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" my_django_app\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" my_django_app\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("使用如下命令创建一个虚拟环境（"),t("code",[s._v("venv")]),s._v("目录，里面包含了python的二进制包，pip等工具）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ python3 -m venv venv\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("使用上面刚创建好的虚拟环境：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" venv/bin/activate\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"安装-django-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装-django-2"}},[s._v("#")]),s._v(" 安装 Django")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("pip")]),s._v("工具安装：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" django\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("验证是否安装成功：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ python -m django --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"创建一个-django-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-django-项目"}},[s._v("#")]),s._v(" 创建一个 Django 项目")]),s._v(" "),t("p",[s._v("创建一个名为"),t("code",[s._v("mydiangoapp")]),s._v("的项目：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ django-admin startproject mydjangoapp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("迁移数据库并创建一个管理用户：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mydjangoapp\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ python manage.py migrate\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ python manage.py createsuperuser\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接下来，会进入交互式命令，如下所示")]),s._v("\nUsername "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("leave blank to use "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'agou-ops'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": admin\nEmail address: suofeiyaxx@gamil.com\nPassword: \nPassword "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("again"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": \nSuperuser created successfully.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("默认情况下，Django使用的是"),t("code",[s._v("SQLite")]),s._v("数据库，如果用于生产环境，可以使用"),t("code",[s._v("PostgreSQL")]),s._v(" ,"),t("code",[s._v("MariaDB")]),s._v(", "),t("code",[s._v("Oracle")]),s._v("或者"),t("code",[s._v("MySQL")]),s._v(" 数据库.")]),s._v(" "),t("hr"),s._v(" "),t("p",[s._v("❓如果你是迁移的项目，运行以下步骤：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 首先，清除初始迁移和删除默认的sqlite数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -path "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*/migrations/*.py"')]),s._v(" -not -name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__init__.py"')]),s._v(" -delete\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -path "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*/migrations/*.pyc"')]),s._v("  -delete\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f db.sqlite3\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行如下命令同步迁移数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ python manage.py collectstatic\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ python manage.py makemigrations\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ python manage.py migrate\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h4",{attrs:{id:"测试-django-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试-django-服务"}},[s._v("#")]),s._v(" 测试 Django 服务")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ python manage.py runserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:8000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("服务默认监听在本地的"),t("code",[s._v("8000")]),s._v("端口，打开浏览器，访问 http://localhost:8000 检查服务状态即可。")]),s._v(" "),t("h4",{attrs:{id:"取消激活虚拟环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#取消激活虚拟环境"}},[s._v("#")]),s._v(" 取消激活虚拟环境")]),s._v(" "),t("p",[s._v("当所有任务都完成之后，如果想要返回到原来的终端，使用以下命令取消激活虚拟环境即可：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ deactivate\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"配置-nginx-和-uwsgi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nginx-和-uwsgi"}},[s._v("#")]),s._v(" 配置 nginx 和 uwsgi")]),s._v(" "),t("h4",{attrs:{id:"uwsgi-全局配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uwsgi-全局配置"}},[s._v("#")]),s._v(" uwsgi 全局配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" uwsgi\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/uwsgi/sites\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/uwsgi/sites\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" mydjangoapp.ini\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("配置文件"),t("code",[s._v("mydiangoapp.ini")]),s._v("中添加如下内容：")]),s._v(" "),t("div",{staticClass:"language-ini line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-ini"}},[t("code",[t("span",{pre:!0,attrs:{class:"token section"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token section-name selector"}},[s._v("uwsgi")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("project")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("<project_name>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("username")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("<user_name>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("base")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/home/%(username)")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("chdir")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("%(base)/%(project)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("home")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("%(base)/Env/env_1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("module")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("%(project).wsgi:application")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("master")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("processes")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("5")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("uid")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("%(username)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("socket")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/run/uwsgi/%(project).sock")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("chown-socket")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("%(username):nginx")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("chmod-socket")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("660")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("vacuum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("true")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("p",[s._v("创建一个"),t("code",[s._v("Unix socket")]),s._v("来使用"),t("code",[s._v("uWSGI")]),s._v("协议来辅助 Ngx 反代：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑uwsgi的服务配置文件")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/systemd/system/uwsgi.service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ------------------------------")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("uWSGI Emperor "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <user_name>为用户名称")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStartPre")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/bash -c "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'mkdir -p /run/uwsgi; chown <user_name>:nginx /run/uwsgi'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/uwsgi --emperor /etc/uwsgi/sites\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KillSignal")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SIGQUIT\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("notify\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NotifyAccess")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("all\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h4",{attrs:{id:"nginx-反代设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-反代设置"}},[s._v("#")]),s._v(" nginx 反代设置")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server_name")]),s._v(" localhost")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" = favicon.ico")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("access_log")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("log_not_found")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("off")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /static/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" /home/<user_name>/<project_name>")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" /")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" uwsgi_params")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token directive"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uwsgi_pass")]),s._v(" unix:/run/uwsgi/<project_name>.sock")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("hr"),s._v(" "),t("p",[s._v("增加权限及启动服务：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" nginx -t\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("usermod")]),s._v(" -a -G "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("710")]),s._v(" /home/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("user_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl start uwsgi\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" nginx\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" uwsgi\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("😄到此安装完成，打开浏览器访问 http://localhost:8000 测试即可。")]),s._v(" "),t("h2",{attrs:{id:"其他"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" 其他")]),s._v(" "),t("h3",{attrs:{id:"django-使用-mysql-数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#django-使用-mysql-数据库"}},[s._v("#")]),s._v(" Django 使用 MySQL 数据库")]),s._v(" "),t("p",[s._v("安装"),t("code",[s._v("mysql")]),s._v("客户端工具（服务器端在此不再赘述）：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("venv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y mysql-connector-python.x86_64 mysql-community-devel.x86_64 mysql-cluster-community-client.x86_64 mysql-shell.x86_64 mysql-router.x86_64 gcc\npip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysqlclient "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# inside the virtual environment")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("修改配置文件"),t("code",[s._v("settings.py")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在行尾添加如下内容")]),s._v("\nSTATIC_ROOT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("join"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BASE_DIR"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"static/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改默认的数据库配置")]),s._v("\nDATABASES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ENGINE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'django.db.backends.mysql'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'first_db'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 数据库提前自行创建")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'USER'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PASSWORD'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your-root-password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'HOST'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PORT'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改监听地址，默认为本地localhost")]),s._v("\nALLOWED_HOSTS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_ip_here'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("p",[s._v("如果有"),t("code",[s._v("firewalld")]),s._v("防火墙，还需要：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --add-service"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --permanent --add-port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),s._v("/tcp\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --complete-reload\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" firewall-cmd --list-all\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("Deploy Django: https://www.codingpaths.com/django/deploy-django/")])])])}),[],!1,null,null,null);a.default=e.exports}}]);