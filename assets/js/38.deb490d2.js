(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{673:function(s,a,t){"use strict";t.r(a);var e=t(6),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"helm-go-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#helm-go-template"}},[s._v("#")]),s._v(" Helm/GO Template")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("【【 quote .Values.favorite.drink 】】")]),s._v(": 使用"),t("code",[s._v("quote")]),s._v("函数来为字符串添加双引号： 等价于"),t("code",[s._v("【【 .Values.favorite.drink | quote 】】")]),s._v(";")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("【【 .Values.foo | upper | quote 】】")]),s._v(": 使用"),t("code",[s._v("upper")]),s._v("函数将字符串全部大写并添加双引号.")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("【【- 】】")]),s._v("或者"),t("code",[s._v("【【 -】】")]),s._v("用于消除多余空格： "),t("code",[s._v("-")]),s._v("在左边即消除左边的空格： 在右边即消除右边的空格;")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("【【 .Values.foo | indent2 】】")]),s._v(": 使用"),t("code",[s._v("indent")]),s._v("函数来添加空格进行缩进;")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("【【 .Value.foo | title 】】")]),s._v(": 用于大写首字母;")])]),s._v(" "),t("li",[t("p",[t("code",[s._v('【【 .Value.foo | default "bar" 】】')]),s._v(": 用于给予变量默认值；")])]),s._v(" "),t("li"),s._v(" "),t("li",[t("p",[s._v("流程控制 ：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})])])]),s._v(" "),t("p",[s._v("【【 if PIPELINE 】】")]),s._v(" "),t("h1",{attrs:{id:"do-something"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-something"}},[s._v("#")]),s._v(" Do something")]),s._v(" "),t("p",[s._v("【【 else if OTHER PIPELINE 】】")]),s._v(" "),t("h1",{attrs:{id:"do-something-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#do-something-else"}},[s._v("#")]),s._v(" Do something else")]),s._v(" "),t("p",[s._v("【【 else 】】")]),s._v(" "),t("h1",{attrs:{id:"default-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-case"}},[s._v("#")]),s._v(" Default case")]),s._v(" "),t("p",[s._v("【【 end 】】")]),s._v(" "),t("h1",{attrs:{id:"使用范例-如果某个key对应的value与特定的value相等-则mug为true"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用范例-如果某个key对应的value与特定的value相等-则mug为true"}},[s._v("#")]),s._v(" 使用范例，如果某个key对应的value与特定的value相等，则mug为true")]),s._v(" "),t("p",[s._v('【【 if eq .Values.favorite.drink "coffee" 】】mug: true【【 end 】】')]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('\n- `with`:改变当前作用域(.)：\n\n```yaml\n# 使用with可以简化变量引用\n【【- with .Values.favorite 】】\ndrink: 【【 .drink | default "tea" | quote 】】\nfood: 【【 .food | upper | quote 】】\n【【- end 】】\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[t("p",[t("code",[s._v("range")]),s._v("用于循环遍历数组或是map：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 例如values.yaml文件中有如下信息：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("pizzaToppings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" mushrooms\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cheese\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" peppers\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" onions\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用【【 range】】...【【 end】】循环语句循环pizzaToppings数组：")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ConfigMap\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 【【 .Release.Name 】】"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("configmap\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("toppings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("\n    【【"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" range .Values.pizzaToppings 】】\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# title 函数用于大写首字母")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" 【【 . "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" title "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" quote 】】\n    【【"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" end 】】\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])])])]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("Helm 内置变量: https://helm.sh/docs/chart_template_guide/builtin_objects/")]),s._v(" "),t("li",[s._v("Helm 方法完整列表：https://helm.sh/docs/chart_template_guide/function_list/")]),s._v(" "),t("li",[s._v("Helm 快速入门：https://juejin.im/post/6844904199818313735")])])])}),[],!1,null,null,null);a.default=n.exports}}]);