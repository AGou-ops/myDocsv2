(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{957:function(s,a,t){"use strict";t.r(a);var n=t(6),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"django-basic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#django-basic"}},[s._v("#")]),s._v(" Django Basic")]),s._v(" "),t("h2",{attrs:{id:"django-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#django-简介"}},[s._v("#")]),s._v(" Django 简介")]),s._v(" "),t("blockquote",[t("p",[s._v("Django 最初被设计用于具有快速开发需求的新闻类站点，目的是要实现简单快捷的网站开发。以下内容简要介绍了如何使用 Django 实现一个数据库驱动的 Web 应用。")])]),s._v(" "),t("h2",{attrs:{id:"快速安装及运行项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速安装及运行项目"}},[s._v("#")]),s._v(" 快速安装及运行项目")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 准备虚拟环境")]),s._v("\n$ python3 -m venv test-env\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test-env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" $ python3 -m pip "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" Django\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test-env"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" $ python3 -m django --version\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ django-admin startproject mysite\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 结构大致如下所示")]),s._v("\n$ tree mysite/\nmysite/\n    manage.py\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个空文件，告诉 Python 这个目录应该被认为是一个 Python 包。")]),s._v("\n    mysite/\n        __init__.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一个空文件，告诉 Python 这个目录应该被认为是一个 Python 包。")]),s._v("\n        settings.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Django 项目的配置文件。")]),s._v("\n        urls.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Django 项目的配置文件。")]),s._v("\n        asgi.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作为你的项目的运行在 ASGI 兼容的 Web 服务器上的入口。")]),s._v("\n        wsgi.py "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 作为你的项目的运行在 WSGI 兼容的 Web 服务器上的入口。")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行服务")]),s._v("\n$ python manage.py runserver "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":8000"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nWatching "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" changes with StatReloader\nPerforming system checks"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\nSystem check identified no issues "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" silenced"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n\nYou have "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v(" unapplied migration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(". Your project may not work properly "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" you apply the migrations "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": admin, auth, contenttypes, sessions.\nRun "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'python manage.py migrate'")]),s._v(" to apply them.\nFebruary 04, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(":43:41\nDjango version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),s._v(".6, using settings "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'envMonitorSystem.settings'")]),s._v("\nStarting development server at http://127.0.0.1:8000/\nQuit the server with CONTROL-C.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("随后打开浏览器访问 http://127.0.0.1:8000 查看即可。")]),s._v(" "),t("h3",{attrs:{id:"为项目添加应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为项目添加应用"}},[s._v("#")]),s._v(" 为项目添加应用")]),s._v(" "),t("p",[s._v("一个项目可以包括多个应用，一个应用也可以存在于多个项目之中。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ python manage.py startapp test_app1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"创建视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建视图"}},[s._v("#")]),s._v(" 创建视图")]),s._v(" "),t("p",[s._v("https://docs.djangoproject.com/zh-hans/3.1/intro/tutorial01/#write-your-first-view")]),s._v(" "),t("h3",{attrs:{id:"添加管理页面"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加管理页面"}},[s._v("#")]),s._v(" 添加管理页面")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建管理员账号")]),s._v("\npython manage.py createsuperuser\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[s._v("djangoproject 中文教程：https://docs.djangoproject.com/zh-hans/3.1/")])])])}),[],!1,null,null,null);a.default=e.exports}}]);