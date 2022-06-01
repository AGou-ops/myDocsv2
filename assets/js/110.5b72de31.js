(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{743:function(s,t,a){"use strict";a.r(t);var n=a(6),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"pxe-centos"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pxe-centos"}},[s._v("#")]),s._v(" PXE CentOS")]),s._v(" "),a("h2",{attrs:{id:"pxe-无人值守安装centos-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pxe-无人值守安装centos-7"}},[s._v("#")]),s._v(" PXE 无人值守安装CentOS 7")]),s._v(" "),a("h3",{attrs:{id:"相关环境信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关环境信息"}},[s._v("#")]),s._v(" 相关环境信息")]),s._v(" "),a("p",[s._v("主机"),a("code",[s._v("iptables")]),s._v(","),a("code",[s._v("firewalld")]),s._v("和"),a("code",[s._v("SElinux")]),s._v("均为关闭状态")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("DHCP 服务器")]),s._v(" "),a("p",[s._v("为客户端提供必要的网络信息，如IP、netmask、gateway、dns等，并向客户端提供引导文件(pxelinux.0)的位置"),a("code",[s._v("(filename)")]),s._v("及TFTP服务器地址"),a("code",[s._v("(next-server)")]),s._v("等。")])]),s._v(" "),a("li",[a("p",[s._v("TFTP 服务器")]),s._v(" "),a("p",[s._v("主要为客户端提供内核文件和引导文件。")])]),s._v(" "),a("li",[a("p",[s._v("FTP 服务器(或者HTTP服务器都可)")]),s._v(" "),a("p",[s._v("为客户端提供 "),a("code",[s._v("kickstart")]),s._v(" 自动化响应安装文件和系统镜像文件(YUM仓库)。")])])]),s._v(" "),a("h3",{attrs:{id:"dhcp-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dhcp-服务器"}},[s._v("#")]),s._v(" DHCP 服务器")]),s._v(" "),a("p",[s._v("修改"),a("code",[s._v("/etc/dhcp/dhcpd.conf")]),s._v("配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/dhcp/dhcpd.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" EOF\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#DHCP configuration for PXE boot server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ddns-update-style interim"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ignore client-updates"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" authoritative"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" allow booting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" allow bootp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" allow unknown-clients"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" subnet "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.0\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" netmask "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" range "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.100 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.199"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" option domain-name-servers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" option domain-name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"itlab.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" option routers "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" option broadcast-address "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.255"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" default-lease-time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" max-lease-time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PXE boot server")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" next-server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".99.99"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" filename "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pxelinux.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" EOF\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("启动并添加dhcp服务:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start dhcpd.service "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" dhcpd.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"http-服务器-或者ftp服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-服务器-或者ftp服务器"}},[s._v("#")]),s._v(" HTTP 服务器(或者FTP服务器)")]),s._v(" "),a("ol",[a("li",[s._v("挂载本地光盘镜像,并挂载至http服务器的某个路径")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" -r /dev/cdrom /var/www/html/centos7\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 挂载")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master /"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /var/www/html/centos7\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看")]),s._v("\nCentOS_BuildTag  EULA  images    LiveOS    repodata              RPM-GPG-KEY-CentOS-Testing-7\nEFI              GPL   isolinux  Packages  RPM-GPG-KEY-CentOS-7  TRANS.TBL\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("添加并修改"),a("code",[s._v("kickstart")]),s._v("文件(放置于"),a("code",[s._v("/var/www/html/ks/centos7.cfg")]),s._v(")")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改部分内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nurl --url"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://192.168.99.99/centos7"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("ℹ️ 该文件可以使用"),a("code",[s._v("system-config-kickstart")]),s._v("图形化工具来生成.")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("启动 http 服务器,"),a("code",[s._v("systemctl start httpd")])])]),s._v(" "),a("h3",{attrs:{id:"tftp-服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tftp-服务器"}},[s._v("#")]),s._v(" TFTP 服务器")]),s._v(" "),a("ol",[a("li",[s._v("启动 TFTP SERVER (该服务默认监听在"),a("code",[s._v("udp")]),s._v("的"),a("code",[s._v("69")]),s._v("号端口)")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start tftp.socket\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("编辑"),a("code",[s._v("/etc/xinetd.d/tftp")]),s._v("文件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" tftp\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        socket_type             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" dgram\n        protocol                "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" udp\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wait")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n        user                    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root\n        server                  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /usr/sbin/in.tftpd\n        server_args             "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" -s /var/lib/tftpboot\n        disable                 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" no\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 改为no")]),s._v("\n        per_source              "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n        cps                     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n        flags                   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" IPv4\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[a("code",[s._v("systemctl restart xinetd.service")])]),s._v(" "),a("p",[s._v("或者:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start tftp.socket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" tftp.socket\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("安装"),a("code",[s._v("syslinux")]),s._v("程序包")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y syslinux\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("将所需文件放置在 tftp 根目录("),a("code",[s._v("/var/lib/tftpboot/")]),s._v(")")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/share/syslinux/pxelinux.0 /var/lib/tftpboot/\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制引导文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /usr/share/syslinux/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("chain.c32,menu.c32,mboot.c32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" /var/lib/tftpboot/\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用menu.c32界面")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /var/lib/tftpboot/networkboot/centos7\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /var/www/html/centos7/images/pxeboot/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("vmlinuz,initrd.img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" /var/lib/tftpboot/networkboot/centos7\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 复制驱动文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /var/lib/tftpboot/pxelinux.cfg\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp -rf /var/www/html/centos7/isolinux/* /var/lib/tftpboot/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以直接修改原版镜像当中的菜单界面")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv /var/lib/tftpboot/isolinux.cfg /var/lib/tftpboot/pxelinux.cfg/default")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[a("code",[s._v("/var/lib/tftpboot/pxelinux.cfg/default")]),s._v("文件内容如下所示:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@master ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /var/lib/tftpboot/pxelinux.cfg/default "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" EOF\ndefault menu.c32\nprompt "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n\nmenu title AGou's PXE Menu\nlabel Install CentOS "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\nkernel /networkboot/centos7/vmlinuz\nappend "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("initrd")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/networkboot/centos7/initrd.img inst.repo"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.99.99/centos7 inst.ks"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://192.168.99.99/ks/centos7.cfg\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"pxe-无人值守安装centos-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pxe-无人值守安装centos-6"}},[s._v("#")]),s._v(" PXE 无人值守安装CentOS 6")]),s._v(" "),a("p",[s._v("安装步骤大致与安装CentOS 7 相同,不同之处在于:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf /var/www/html/centos6/isolinux/* /var/lib/tftpboot/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);