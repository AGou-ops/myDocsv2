(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{704:function(s,e,a){"use strict";a.r(e);var t=a(6),n=Object(t.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubectl远程连接k8s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubectl远程连接k8s"}},[s._v("#")]),s._v(" kubectl远程连接k8s")]),s._v(" "),a("h2",{attrs:{id:"方案一-通过安全上下文访问本地网络k8s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案一-通过安全上下文访问本地网络k8s"}},[s._v("#")]),s._v(" 方案一：通过安全上下文访问本地网络k8s")]),s._v(" "),a("h3",{attrs:{id:"基本流程操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本流程操作"}},[s._v("#")]),s._v(" 基本流程操作")]),s._v(" "),a("p",[s._v("首先要确保k8s的"),a("code",[s._v("apiServer")]),s._v("可以被当前网络访问，确保网段在其监听的范围之内。（重要）")]),s._v(" "),a("p",[s._v("登录到"),a("code",[s._v("master")]),s._v("主机上：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl cluster-info\nKubernetes control plane is running at https://0.0.0.0:6443 \nCoreDNS is running at https://0.0.0.0:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy \n\nTo further debug and diagnose cluster problems, use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl cluster-info dump'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("⚠️极不推荐使用"),a("code",[s._v("0.0.0.0")]),s._v("，这里我只是图方便进行测试使用。")]),s._v(" "),a("p",[s._v("获取当前集群的配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.kube/config\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: LS0tLS1CRUdJTiB【此处省略。。。】"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n    server: https://0.0.0.0:6443\n  name: kind-my-cluster\ncontexts:\n- context:\n    cluster: kind-my-cluster\n    user: kind-my-cluster\n  name: kind-my-cluster\ncurrent-context: kind-my-cluster\nkind: Config\npreferences: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nusers:\n- name: kind-my-cluster\n  user:\n    client-certificate-data: LS0tLS1【此处省略。。。】"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n    client-key-data: LS0t【此处省略。。。】"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("配置文件中的"),a("code",[s._v("certificate-authority-data【服务器端CA】")]),s._v("、"),a("code",[s._v("client-certificate-data【客户端证书】")]),s._v("和"),a("code",[s._v("client-key-data【客户端私钥】")]),s._v("都是"),a("code",[s._v("base64")]),s._v("简单加密过的，所以在引入上下文之前先将其解密。")]),s._v(" "),a("ul",[a("li",[s._v("使用"),a("code",[s._v("base64")]),s._v("命令进行解密："),a("code",[s._v("echo <data> | base64 -d")])]),s._v(" "),a("li",[s._v("使用在线网站进行解密：https://www.base64decode.org/")])]),s._v(" "),a("p",[s._v("将解密之后的文件保存在当前主机的"),a("code",[s._v("~/.kube/")]),s._v("目录之下，分别命名为（名字随意，记住就好）：")]),s._v(" "),a("ul",[a("li",[s._v("my-cluster.ca")]),s._v(" "),a("li",[s._v("k8s.crt")]),s._v(" "),a("li",[s._v("k8s.key")])]),s._v(" "),a("blockquote",[a("p",[s._v("当前主机还没有"),a("code",[s._v("kubectl")]),s._v("？三条命令快速安装。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -LO "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://dl.k8s.io/release/'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -L -s https://dl.k8s.io/release/stable.txt"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('/bin/linux/amd64/kubectl"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -o root -g root -m 0755 kubectl /usr/local/bin/kubectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl version --client\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("p",[s._v("打开终端，确保"),a("code",[s._v("kubectl")]),s._v("已正确安装后运行以下几条命令来添加安全上下文：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加集群地址，并设置集群ca")]),s._v("\nkubectl config set-cluster my-k8s --server https://10.0.0.18:6443  --certificate-authority"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/agou-ops/.kube/my-cluster.ca\t\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 添加用户，以及设置客户端证书及私钥")]),s._v("\nkubectl config set-credentials kubernetes-admin     --client-certificate"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/agou-ops/.kube/k8s.crt     --client-key"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/home/agou-ops/.kube/k8s.key\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定上下文，set-context名称可随便取")]),s._v("\nkubectl config set-context ubuntu --cluster"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("my-k8s  --namespace"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("default --user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubernetes-admin \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 激活上下文")]),s._v("\nkubectl config use-context ubuntu \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("使用"),a("code",[s._v("kubectl config view")]),s._v("命令检查配置文件。")]),s._v(" "),a("p",[s._v("最后使用"),a("code",[s._v("kubectl cluster info")]),s._v("进行查看即可：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubectl --insecure-skip-tls-verify cluster-info\nKubernetes control plane is running at https://10.0.0.18:6443\nCoreDNS is running at https://10.0.0.18:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl cluster-info dump'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("Done. 😄")]),s._v(" "),a("h3",{attrs:{id:"问题及解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题及解决方案"}},[s._v("#")]),s._v(" 问题及解决方案")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("Unable to connect to the server: x509: certificate is valid for 10.96.0.1, 172.18.0.4, 0.0.0.0, not 10.0.0.18")])])]),s._v(" "),a("blockquote",[a("p",[s._v("One option is to tell "),a("code",[s._v("kubectl")]),s._v(" that you don't want the certificate to be validated. Obviously this brings up security issues but I guess you are only testing so here you go:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl --insecure-skip-tls-verify --context"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("employee-context get pods\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者将其写入配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config set-cluster my-k8s --insecure-skip-tls-verify"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("The better option is to fix the certificate. Easiest if you reinitialize the cluster by running "),a("code",[s._v("kubeadm reset")]),s._v(" on all nodes including the master and then do")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubeadm init --apiserver-cert-extra-sans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("114.215")]),s._v(".201.87\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("It's also possible to fix that certificate without wiping everything, but that's a bit more tricky. Execute something like this on the master as root:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" /etc/kubernetes/pki/apiserver.*\nkubeadm init phase certs all --apiserver-advertise-address"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 --apiserver-cert-extra-sans"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.161")]),s._v(".233.80,114.215.201.87\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -q -f "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name=k8s_kube-apiserver*'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\nsystemctl restart kubelet\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("来自：https://stackoverflow.com/a/46360852")])]),s._v(" "),a("h2",{attrs:{id:"方案二-修改证书域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方案二-修改证书域"}},[s._v("#")]),s._v(" 方案二：修改证书域")]),s._v(" "),a("h3",{attrs:{id:"查看-apiserver-证书包含哪些地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看-apiserver-证书包含哪些地址"}},[s._v("#")]),s._v(" 查看 Apiserver 证书包含哪些地址")]),s._v(" "),a("ol",[a("li",[s._v("进入证书目录")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/kubernetes/pki  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("查看证书")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl x509 -in apiserver.crt -noout -text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -A  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Alternative'")]),s._v("\n\nX509v3 Subject Alternative Name:  \n                DNS:1-1-1-1, DNS:kubernetes, DNS:kubernetes.default, DNS:kubernetes.default.svc, DNS:kubernetes.default.svc.cluster.local, DNS:lb-apiserver.kubernetes.local, DNS:localhost, IP Address:1.1.1.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("这里如果只允许通过 1.1.1.1 访问集群的 Apiserver。如果需要使用域名，"),a("code",[s._v("kubernetes、kubernetes.default、kubernetes.default.svc")]),s._v(" 等，则需要配置 hosts 将其指向 1.1.1.1 。")]),s._v(" "),a("h3",{attrs:{id:"添加新的域名或-ip-到证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加新的域名或-ip-到证书"}},[s._v("#")]),s._v(" 添加新的域名或 IP 到证书")]),s._v(" "),a("ol",[a("li",[s._v("备份证书")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/kubernetes/pki  \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" apiserver.crt apiserver.crt.bak  \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" apiserver.key apiserver.key.bak  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("修改 "),a("code",[s._v("/etc/kubernetes/kubeadm-config.yaml")])])]),s._v(" "),a("p",[s._v("在 ClusterConfiguration 的 apiServer 字段下，找到 certSANs。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeadm.k8s.io/v1beta2  \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterConfiguration  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certSANs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default.svc  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default.svc.cluster.local  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10.233.0.1  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("在 certSANs 中添加远程访问的域名或 IP 地址：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certSANs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" remote.doamin.com  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 1.2.3.4  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default.svc  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default.svc.cluster.local  \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10.233.0.1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("如果你在 "),a("code",[s._v("/etc/kubernetes/")]),s._v(" 目录中没有找到 kubeadm-config.yaml 文件，不要紧张，你可以使用下面的方式生成一个当前集群的配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubectl get cm kubeadm-config  -n kube-system -o yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /etc/kubernetes/kubeadm-config.yaml  \n或者  \n$ kubeadm config view "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" /etc/kubernetes/kubeadm-config.yaml  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("当然你的集群的配置文件中可能没有 "),a("code",[s._v("certSANs")]),s._v(" 配置段，你可以直接加在类似下面的位置处：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certSANs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" remote.doamin.com  \n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 1.2.3.4  \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes  \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default  \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default.svc  \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kubernetes.default.svc.cluster.local  \n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 10.233.0.1  \n         "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("extraArgs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n         "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("authorization-mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("RBAC  \n         "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeoutForControlPlane")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 4m0s  \n         "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeadm.k8s.io/v1beta2  \n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v(".  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("重新生成证书")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ kubeadm init phase certs apiserver --config /etc/kubernetes/kubeadm-config.yaml  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("再次查看证书")])]),s._v(" "),a("p",[s._v("检查输出的结果中，是否包含前面增加的公网 IP，如有则证明操作成功。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl x509 -in pki/apiserver.crt -noout -text "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".3.4  \n                IP Address:192.168.0.8, IP Address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2")]),s._v(".3.4  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[s._v("重启 kube-apiserver")])]),s._v(" "),a("ul",[a("li",[s._v("如果是高可用集群")])]),s._v(" "),a("p",[s._v("直接杀死当前节点的 kube-apiserver 进程，等待 kubelet 拉起 kube-apiserver 即可。需要在三个节点执行步骤 1 到步骤 4，逐一更新。")]),s._v(" "),a("ul",[a("li",[s._v("如果是非高可用集群")])]),s._v(" "),a("p",[s._v("杀死 kube-apiserver 可能会导致服务有中断，需要在业务低峰的时候操作。")]),s._v(" "),a("p",[s._v("进入 "),a("code",[s._v("/etc/kubernetes/manifests")]),s._v(" 目录下，移动 kube-apiserver.yaml 文件至其它位置，然后又移回来即可。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/kubernetes/manifests/kube-apiserver.yaml /root/  \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /root/kube-apiserver.yaml /etc/kubernetes/manifests  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[s._v("修改 kubeconfig 中的 server ip")])]),s._v(" "),a("p",[s._v("最后，你只需要将 "),a("code",[s._v("kubeconfig")]),s._v(" 文件中 "),a("code",[s._v("server")]),s._v(" 地址修改为 "),a("code",[s._v("1.2.3.4")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1  \n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clusters")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cluster")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("  \n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//1.2.3.4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6443")]),s._v("  \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("保存之后，就可以直接通过公网 IP 访问 Kubernetes 集群。")]),s._v(" "),a("p",[a("code",[s._v("$ kubectl get node")])]),s._v(" "),a("blockquote",[a("p",[s._v("该部分内容转载自：https://kubesphereio.com/post/add-public-ip-to-kubernetes-apiserver-operation-guide/")])]),s._v(" "),a("h2",{attrs:{id:"访问云端k8s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#访问云端k8s"}},[s._v("#")]),s._v(" 访问云端k8s")]),s._v(" "),a("h2",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),a("p",[s._v("未完。")])])}),[],!1,null,null,null);e.default=n.exports}}]);