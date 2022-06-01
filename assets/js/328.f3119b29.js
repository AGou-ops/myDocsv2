(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{961:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"wireguard-vpn-for-ubuntu"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wireguard-vpn-for-ubuntu"}},[s._v("#")]),s._v(" WireGuard VPN for Ubuntu")]),s._v(" "),t("h2",{attrs:{id:"wireguard-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wireguard-简介"}},[s._v("#")]),s._v(" WireGuard 简介")]),s._v(" "),t("p",[s._v("​\t\tWireGuard是具有最新加密技术的现代VPN（虚拟专用网）技术。与IPsec和OpenVPN等其他类似解决方案相比，WireGuard更快，更易于配置且性能更高。它是一个跨平台，几乎可以在任何地方运行，包括Linux，Windows，Android和macOS。 Wireguard是对等VPN。它不使用客户端-服务器模型。根据其配置，对等方可以充当传统的服务器或客户端。 WireGuard通过在充当隧道的每个对等设备上创建网络接口来工作。对等体通过交换和验证公共密钥（类似于SSH模型）来相互认证。公钥与隧道中允许的IP地址列表进行映射。 VPN流量封装在UDP中。在本教程中，我们将在充当VPN服务器的Ubuntu 18.04计算机上设置WireGuard。我们还将向您展示如何将WireGuard配置为客户端。客户端的流量将通过Ubuntu 18.04服务器进行路由。此设置可用于防御中间人攻击，匿名浏览网络，绕过受地域限制的内容，或允许您的同事在远程工作时安全地连接到公司网络。")]),s._v(" "),t("h2",{attrs:{id:"wg安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wg安装"}},[s._v("#")]),s._v(" WG安装")]),s._v(" "),t("ol",[t("li",[s._v("更新软件包列表，并安装管理系统存储库所需的工具：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" software-properties-common\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("添加 WireGuard 仓库：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository ppa:wireguard/wireguard\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("出现提示时，按Enter键继续。 add-apt-repository也将自动更新软件包列表。")]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[s._v("安装WireGuard软件包：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" wireguard\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("WireGuard作为内核模块运行，该模块被编译为"),t("code",[s._v("DKMS")]),s._v("模块。成功完成后，您将看到以下输出：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("wireguard:\nRunning module version sanity check.\n - Original module\n   - No original module exists within this kernel\n - Installation\n   - Installing to /lib/modules/4.15.0-88-generic/updates/dkms/\n\ndepmod...\n\nDKMS: install completed.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("更新内核时，需要将针对新内核编译WireGuard模块。")]),s._v(" "),t("h2",{attrs:{id:"配置wg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置wg"}},[s._v("#")]),s._v(" 配置WG")]),s._v(" "),t("p",[s._v("WireGuard 程序包附带了两个名为"),t("code",[s._v("wg")]),s._v("和"),t("code",[s._v("wg-quick")]),s._v("的命令行工具，可用于配置和管理WireGuard接口。")]),s._v(" "),t("p",[s._v("运行以下命令以生成公钥和私钥：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("wg genkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/wireguard/privatekey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" wg pubkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/wireguard/publickey\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("ℹ️ 公私钥放置于"),t("code",[s._v("/etc/wireguard")]),s._v("目录,其中私钥绝对不能与任何人共享")]),s._v(" "),t("p",[s._v("生成密钥后，我们需要配置路由VPN的隧道设备")]),s._v(" "),t("p",[s._v("可以使用ip和wg从命令行设置设备，也可以使用文本编辑器创建配置文件。")]),s._v(" "),t("p",[s._v("创建一个名为"),t("code",[s._v("wg0.conf")]),s._v("(文件名可以随意)的新文件，并添加以下内容：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/wireguard/wg0.conf "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("EOF\n[Interface]\nAddress = 192.168.159.0/24\t\t# 填写网络地址段\nSaveConfig = true\t\t# 关闭时，接口的当前状态将保存到配置文件中\nListenPort = 51820\t\t\t# 监听端口\nPrivateKey = QNKQCtPo2E5saDnXORaIORhZH6NtcvIJPHqF9EdEL1o=\t# 私钥文件,即/etc/wireguard/privatekey\nPostUp = iptables -A FORWARD -i %i -j ACCEPT; iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE\t\t# 在启动之前执行的命令或脚本,使用iptables启用伪装,允许流量离开服务器，从而使VPN客户端可以访问Internet。\nPostDown = iptables -D FORWARD -i %i -j ACCEPT; iptables -t nat -D POSTROUTING -o ens33 -j MASQUERADE\t\t# 在启动之后执行的命令或脚本,接口关闭后，iptables规则将被删除\nEOF")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("修改"),t("code",[s._v("privatekey")]),s._v("和"),t("code",[s._v("wg0.conf")]),s._v("的权限, 保证其安全性：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),s._v(" /etc/wireguard/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("privatekey,wg0.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("完成后，使用配置文件中指定的属性启动"),t("code",[s._v("wg0")]),s._v("接口：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg-quick up wg0\n\n* 输出内容如下所示:\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#] ip link add wg0 type wireguard")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#] wg setconf wg0 /dev/fd/63")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#] ip -4 address add 192.168.159.0/24 dev wg0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#] ip link set mtu 1420 up dev wg0")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#] iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o ens33 -j MASQUERADE")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("运行"),t("code",[s._v("wg show wg0")]),s._v("检查接口状态和配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg show wg0\n\n* 输出内容如下所示:\ninterface: wg0\n  public key: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uD6Xex2eP5CEUVcVP3EZB5csh2JReWXthoVZMzURwCQ")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  private key: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  listening port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51820")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("也可以运行"),t("code",[s._v("ip a show wg0")]),s._v("来验证接口状态：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" a show wg0\n\n* 输出内容如下所示:\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(": wg0: "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("POINTOPOINT,NOARP,UP,LOWER_UP"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1420")]),s._v(" qdisc noqueue state UNKNOWN group default qlen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/none\n    inet "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".159.0/24 scope global wg0\n       valid_lft forever preferred_lft forever\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("设置wireguard 开机自启:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" wg-quick@wg0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"服务器网络和防火墙配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#服务器网络和防火墙配置"}},[s._v("#")]),s._v(" 服务器网络和防火墙配置")]),s._v(" "),t("p",[s._v("为了使"),t("code",[s._v("NAT")]),s._v("正常工作，我们需要启用IP转发，打开"),t("code",[s._v("/etc/sysctl.conf")]),s._v("文件，并添加或取消注释以下行：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnet.ipv4.ip_forward"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("修改完成之后, 执行"),t("code",[s._v("sudo sysctl -p")]),s._v("使配置永久生效")]),s._v(" "),t("p",[s._v("如果你使用"),t("code",[s._v("UFW")]),s._v("来管理防火墙，则需要在端口51820上打开UDP通信：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" ufw allow "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("51820")]),s._v("/udp\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("至此,WG SERVER 已完成配置")]),s._v(" "),t("h2",{attrs:{id:"客户端配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#客户端配置"}},[s._v("#")]),s._v(" 客户端配置")]),s._v(" "),t("h3",{attrs:{id:"linux-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-macos"}},[s._v("#")]),s._v(" Linux & macOS")]),s._v(" "),t("p",[s._v("去往官方下载站点(https://wireguard.com/install/), 查看如何安装WireGuard")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("macOS App Store: https://apps.apple.com/us/app/wireguard/id1441195209?ls=1")])]),s._v(" "),t("li",[t("h4",{attrs:{id:"ubuntu-≤-19-04-module-v1-0-20200413-tools-v1-0-20200319"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-≤-19-04-module-v1-0-20200413-tools-v1-0-20200319"}},[s._v("#")]),s._v(" Ubuntu ≤ 19.04 ["),t("a",{attrs:{href:"https://launchpad.net/~wireguard/+archive/ubuntu/wireguard",target:"_blank",rel:"noopener noreferrer"}},[s._v("module"),t("OutboundLink")],1),s._v(" – v1.0.20200413 & "),t("a",{attrs:{href:"https://launchpad.net/~wireguard/+archive/ubuntu/wireguard",target:"_blank",rel:"noopener noreferrer"}},[s._v("tools"),t("OutboundLink")],1),s._v(" – v1.0.20200319]")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("$ sudo add-apt-repository ppa:wireguard/wireguard\n$ sudo apt-get update\n$ sudo apt-get install wireguard\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])])])]),s._v(" "),t("p",[s._v("设置Linux和macOS客户端过程基本相同, 首先生成公钥与私钥")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("wg genkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/wireguard/privatekey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" wg pubkey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/wireguard/publickey\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建"),t("code",[s._v("/etc/wireguard/wg0.conf")]),s._v("并添加以下内容:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Interface"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPrivateKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" CLIENT_PRIVATE_KEY\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/wireguard/privatekey")]),s._v("\nAddress "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".43.0/24\n\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Peer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPublicKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SERVER_PUBLIC_KEY\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /etc/wireguard/publickey")]),s._v("\nEndpoint "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SERVER_IP_ADDRESS:51820\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对方wireguard server的ip和端口")]),s._v("\nAllowedIPs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" Windows")]),s._v(" "),t("p",[s._v("直接下载客户端工具: https://download.wireguard.com/windows-client/wireguard-amd64-0.1.0.msi")]),s._v(" "),t("p",[s._v("安装好软件之后, 点击左下角的"),t("code",[s._v("Add Tunnel")]),s._v(", 创建一个新的隧道"),t("code",[s._v("Create new tunnel")])]),s._v(" "),t("p",[t("code",[s._v("name")]),s._v("随便起喽, 内容如下:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Interface"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPrivateKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" MOeXEby5OG1xQBCP9AJEJEsxmxYDG1FHHzlcOgi/ClI"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\nAddress "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".43.0/24\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Peer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nPublicKey "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("uD6Xex2eP5CEUVcVP3EZB5csh2JReWXthoVZMzURwCQ")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\t\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器端公钥")]),s._v("\nEndpoint "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".159.132:51820\t\t"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务器ip以及端口")]),s._v("\nAllowedIPs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/JQBW4K.png",alt:"wg"}})]),s._v(" "),t("h2",{attrs:{id:"将客户端对等方添加到服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将客户端对等方添加到服务器"}},[s._v("#")]),s._v(" 将客户端对等方添加到服务器")]),s._v(" "),t("p",[s._v("最后一步是将客户端公钥和IP地址添加到服务器：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# sudo wg set wg0 peer CLIENT_PUBLIC_KEY allowed-ips 10.0.0.2")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" wg0 peer T5ZTibLaWh9/3EzA1ZfCdiojM0HfXvh99mfVlqHpaU0"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" allowed-ips "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".43.0/24\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" wg0 peer UqF/BDwShHFulAUN4yx0latMIiIW0Cbb+IuNHEYEBj0"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" allowed-ips "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".43.0/24\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("确保使用在客户端计算机上生成的公用密钥·（"),t("code",[s._v("sudo cat /etc/wireguard/publickey")]),s._v("）·更改"),t("code",[s._v("CLIENT_PUBLIC_KEY")]),s._v("并调整客户端IP地址（如果不同的话），Windows用户可以从WireGuard软件当中复制公钥")]),s._v(" "),t("h3",{attrs:{id:"linux-和-macos-客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-和-macos-客户端"}},[s._v("#")]),s._v(" Linux 和 macos 客户端")]),s._v(" "),t("p",[s._v("在Linux客户端上，运行以下命令以打开界面：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg-quick up wg0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("现在，应该已连接到Ubuntu服务器，并且来自客户端计算机的流量应通过该服务器进行路由，可以使用以下方法检查连接：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg\n\n* 输出内容如下所示：\ninterface: wg0\n  public key: sZThYo/0oECwzUsIKTa6LYXLhk+Jb/nqK4kCCP2pyFg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  private key: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hidden"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  listening port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("48052")]),s._v("\n  fwmark: 0xca6c\n\npeer: r3imyh3MCYggaZACmkx+CxlD6uAmICI8pe/PGq8+qCg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n  endpoint: XXX.XXX.XXX.XXX:51820\n  allowed ips: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0\n  latest handshake: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" minute, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" seconds ago\n  transfer: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("58.43")]),s._v(" KiB received, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70.82")]),s._v(" KiB sent\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[s._v("停止和关闭隧道：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" wg-quick down wg0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"windows-客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-客户端"}},[s._v("#")]),s._v(" Windows 客户端")]),s._v(" "),t("p",[s._v("点击软件上的"),t("code",[s._v("Activate")]),s._v(" 即可")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s1.ax1x.com/2020/04/20/JQBuAP.png",alt:"wg-2"}})]),s._v(" "),t("h2",{attrs:{id:"一键安装-wireguard"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一键安装-wireguard"}},[s._v("#")]),s._v(" 一键安装 wireguard")]),s._v(" "),t("ul",[t("li",[s._v("https://github.com/angristan/wireguard-install")]),s._v(" "),t("li",[s._v("https://github.com/l-n-s/wireguard-install")])]),s._v(" "),t("h2",{attrs:{id:"参考链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),t("ul",[t("li",[s._v("wireguard Quick Start : https://www.wireguard.com/quickstart/")]),s._v(" "),t("li",[s._v("wireguard Install : https://www.wireguard.com/install/")])])])}),[],!1,null,null,null);a.default=n.exports}}]);