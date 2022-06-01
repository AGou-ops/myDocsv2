(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{832:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"ceph-cluster-移除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ceph-cluster-移除"}},[s._v("#")]),s._v(" Ceph Cluster 移除")]),s._v(" "),t("h2",{attrs:{id:"卸载-ceph-集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卸载-ceph-集群"}},[s._v("#")]),s._v(" 卸载 Ceph 集群")]),s._v(" "),t("ol",[t("li",[s._v("停止"),t("code",[s._v("ceph")]),s._v("相关服务：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ceph "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -9\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查是否成功停止服务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ceph\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("卸载"),t("code",[s._v("OSD")]),s._v("磁盘：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("umount")]),s._v(" /var/lib/ceph/osd/*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("删除相关配置项：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/osd/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/mon/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/mds/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/bootstrap-mds/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/bootstrap-osd/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/bootstrap-rgw/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/bootstrap-mgr/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/lib/ceph/tmp/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /etc/ceph/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /var/run/ceph/*\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("擦除磁盘数据：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy disk zap stor1:/dev/sdb stor2:/dev/sdb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("卸载相关软件包：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/ceph-cluster/\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除软件包")]),s._v("\nceph-deploy purge stor1 stor2 stor3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("清除数据：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy purgedata stor1 stor2 stor3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("清除"),t("code",[s._v("keys")]),s._v("：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy forgetkeys\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"8"}},[t("li",[s._v("删除相关"),t("code",[s._v("LV")]),s._v("、"),t("code",[s._v("VG")]),s._v("、"),t("code",[s._v("PV")]),s._v("：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("lvdisplay "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" /dev/ceph* "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" lvremove -f\nvgdisplay "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ceph "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $3}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" vgremove -f\npvremove /dev/sdb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ol",{attrs:{start:"9"}},[t("li",[s._v("删除初始化配置信息：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@stor1 ceph-cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/root/ceph-cluster\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@stor1 ceph-cluster"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("# "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f *\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"清除集群环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除集群环境"}},[s._v("#")]),s._v(" 清除集群环境")]),s._v(" "),t("ol",[t("li",[s._v("重复[卸载 Ceph 集群](#卸载 Ceph 集群)的第"),t("code",[s._v("1")]),s._v("、"),t("code",[s._v("2")]),s._v("、"),t("code",[s._v("3")]),s._v("、"),t("code",[s._v("9")]),s._v("步")]),s._v(" "),t("li",[s._v("在"),t("code",[s._v("mon")]),s._v("节点上，执行以下命令：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy new stor1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("在每个节点上执行以下命令（该步骤可省略，因为下一步会自动为每个节点安装以下程序包）：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ceph epel-release ceph-radosgw\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("在"),t("code",[s._v("mon")]),s._v("节点上执行：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" --release nautilus stor1 stor2 stor3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("初始化"),t("code",[s._v("mon")]),s._v("：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy mon create-initial\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("为每个节点传递"),t("code",[s._v("keys")]),s._v("：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy admin stor1 stor2 stor3\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("添加"),t("code",[s._v("mgr")]),s._v("：")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("ceph-deploy mgr create stor1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("添加"),t("code",[s._v("osd")]),s._v("参考[Ceph-deploy 集群快速部署](./Ceph-deploy 集群快速部署.md)")])])}),[],!1,null,null,null);a.default=r.exports}}]);