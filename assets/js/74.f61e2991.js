(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{708:function(t,s,e){"use strict";e.r(s);var a=e(6),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"kubernetes-cli-command-kubectl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-cli-command-kubectl"}},[t._v("#")]),t._v(" Kubernetes CLI command -- kubectl")]),t._v(" "),e("h2",{attrs:{id:"基础命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[t._v("#")]),t._v(" 基础命令")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("kubectl cluster-info")]),t._v(": 查看集群状态;")]),t._v(" "),e("li",[e("code",[t._v('kubectl get pods --selector="name=bad-frontend"')]),t._v(": 指定查看pod的"),e("code",[t._v("name")]),t._v("属性;")]),t._v(" "),e("li",[e("code",[t._v("kubectl expose deployment first-deployment --port=80 --type=NodePort")]),t._v(": 暴露指定端口, 以及指定类型;")]),t._v(" "),e("li",[e("code",[t._v("kubectl get svc first-deployment -o go-template='【【range.spec.ports】】【【if .nodePort】】【【.nodePort】】【【\"\\n\"】】【【end】】【【end】】'")]),t._v(": 获取"),e("code",[t._v("service")]),t._v("暴露的端口;\n"),e("ul",[e("li",[t._v("[使用"),e("code",[t._v("jsonpath")]),t._v("获取]: "),e("code",[t._v("kubectl get svc first-deployment -o jsonpath='{.spec..ports[0].nodePort}'")])])])]),t._v(" "),e("li",[t._v("【新版本已弃用】"),e("code",[t._v("kubectl run http --image=katacoda/docker-http-server:latest --replicas=1")]),t._v(": 手动运行一个"),e("code",[t._v("deployment")]),t._v("并指定其"),e("code",[t._v("pod")]),t._v("镜像;\n"),e("ul",[e("li",[e("code",[t._v('kubectl expose deployment http --external-ip="172.17.0.42" --port=8000 --target-port=80')]),t._v(": 暴露端口及访问地址;")]),t._v(" "),e("li",[t._v("或者直接使用: "),e("code",[t._v("kubectl run httpexposed --image=katacoda/docker-http-server:latest --replicas=1 --port=80 --hostport=8001")])])])]),t._v(" "),e("li",[e("code",[t._v("kubectl exec -it POD_NAME -c CONTAINTER_NAME -- bin/sh")]),t._v(": 进入一个含有多个容器的pod;")]),t._v(" "),e("li",[e("code",[t._v("kubectl scale --replicas=3 deployment http")]),t._v(": 扩容;")]),t._v(" "),e("li",[e("code",[t._v("kubectl set image deployment.v1.apps/nginx-deployment nginx=nginx:1.9.1 --record")]),t._v(": 更新镜像;")]),t._v(" "),e("li",[e("code",[t._v("kubectl set resources deployment nginx -c =nginx --limits =cpu=200m,memory =512Mi")]),t._v(": 更新资源使用;")]),t._v(" "),e("li",[e("code",[t._v('kubectl patch deployments myapp-deploy -p \'{ "spec": {"replicas":5}}\'')]),t._v(": 打补丁;")]),t._v(" "),e("li",[e("code",[t._v("kubectl rollout history deployment.v1.apps/nginx-deployment --revision=2")]),t._v("：查看历史修订的详细信息；")]),t._v(" "),e("li",[e("code",[t._v("kubectl rollout undo deployment myapp-deploy --to-revision=2")]),t._v(": 回滚至指定版本;")]),t._v(" "),e("li",[e("code",[t._v("kubectl rollout status deployments myapp-deploy")]),t._v(": 回滚操作状态信息;")]),t._v(" "),e("li",[e("code",[t._v("kubectl rollout pause deployment/myapp-deploy")]),t._v(": 暂停更新deployment(用于多次更新deployment);\n"),e("ul",[e("li",[e("code",[t._v("kubectl rollout resume deployment/myapp-deploy")]),t._v(": 恢复更新deployment;")])])]),t._v(" "),e("li",[e("code",[t._v("kubectl get pods -l 'environment in (production),tier in (frontend)'")]),t._v(": 过滤显示指定标签的pod;\n"),e("ul",[e("li",[e("code",[t._v("kubectl get pods -l environment=production,tier=frontend")])])])]),t._v(" "),e("li",[e("code",[t._v("kubectl apply-validate-f pod.yaml")]),t._v(": 检查yaml文件格式是否有错误之处;")]),t._v(" "),e("li",[e("code",[t._v("kubectl apply -R DIR/")]),t._v(": 递归应用目录中的配置清单文件;")]),t._v(" "),e("li",[e("code",[t._v("kubectl get componentstatuses")]),t._v(": 检查控制平台组件的状态；")]),t._v(" "),e("li",[e("code",[t._v("kubectl logs kube-scheduler-master01 -n kube-system")]),t._v("：获取调度器日志，包括调度记录，打分记录等；")])]),t._v(" "),e("h2",{attrs:{id:"cluster-快速部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-快速部署"}},[t._v("#")]),t._v(" cluster 快速部署")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用轻量级容器引擎crio, 需要提前安装")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# systemctl restart crio")]),t._v("\nkubeadm init --token"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("102952")]),t._v(".1a7dd4cc8d1f4cc5 --kubernetes-version "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubeadm version -o short"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化时调用crio引擎")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# kubeadm init --cri-socket=/var/run/crio/crio.sock --kubernetes-version $(kubeadm version -o short)")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化完毕之后, crio查看容器运行状态")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# crictl ps")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cp")]),t._v(" /etc/kubernetes/admin.conf "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -u"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" -g"),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/admin.conf\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("KUBECONFIG")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$HOME")]),t._v("/admin.conf\n\nkubectl apply -f /opt/weave-kube.yaml\n\nkubectl get pod -n kube-system\n\nkubeadm token list\n\nkubeadm "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" --discovery-token-unsafe-skip-ca-verification --token"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("102952")]),t._v(".1a7dd4cc8d1f4cc5 "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.17")]),t._v(".0.66:6443\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br")])]),e("p",[t._v("By default, the "),e("code",[t._v("crictl")]),t._v(" CLI is configured to communicate with the runtime by the config file at "),e("code",[t._v("cat /etc/crictl.yaml")])]),t._v(" "),e("p",[t._v("dashboard 账户认证(token):")]),t._v(" "),e("div",{staticClass:"language-yaml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[t._v("cat <<EOF "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" kubectl create "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("f "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" \n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServiceAccount\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rbac.authorization.k8s.io/v1beta1\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterRoleBinding\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("roleRef")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiGroup")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rbac.authorization.k8s.io\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ClusterRole\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cluster"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("admin\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subjects")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ServiceAccount\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" admin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("user\n  "),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" kube"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("system\nEOF\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br")])]),e("p",[t._v("获取token:")]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl -n kube-system describe secret "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl -n kube-system get secret "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" admin-user "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $1}'")]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"附录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附录"}},[t._v("#")]),t._v(" 附录")]),t._v(" "),e("h2",{attrs:{id:"参考链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),e("ul",[e("li",[t._v("kubectl commands offical documentation: https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands")])])])}),[],!1,null,null,null);s.default=n.exports}}]);