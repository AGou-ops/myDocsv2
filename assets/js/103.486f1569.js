(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{736:function(e,t,s){"use strict";s.r(t);var n=s(6),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"description"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" Description")]),e._v(" "),s("p",[e._v("I add SSL to the Grafana web server to ensure all traffic is encrypted between the server and web browser.")]),e._v(" "),s("p",[e._v("I use LetsEncrypt by following the "),s("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Certbot"),s("OutboundLink")],1),e._v(" instructions.")]),e._v(" "),s("p",[e._v("For "),s("strong",[e._v("Web Server software")]),e._v(", I choose "),s("strong",[e._v("Nginx")])]),e._v(" "),s("p",[e._v("For "),s("strong",[e._v("Operating system")]),e._v(", I choose "),s("strong",[e._v("Ubuntu 20.04 LTS")])]),e._v(" "),s("p",[e._v("I then SSH onto my new Grafana server,")]),e._v(" "),s("p",[e._v("I enter these commands")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get update\nsudo apt-get install software-properties-common\nsudo add-apt-repository universe\nsudo apt-get update\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("then install Certbot with the Nginx option")]),e._v(" "),s("p",[e._v("Copied to clipboard")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo apt-get install certbot python3-certbot-nginx\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("then run")]),e._v(" "),s("p",[e._v("Copied to clipboard")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sudo certbot --nginx\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Follow the prompts, and enter the domain name you want to secure,")]),e._v(" "),s("p",[e._v("After completion, you should then be able to now visit your Grafana server using the url")]),e._v(" "),s("p",[e._v("https://"),s("strong",[e._v("YOUR-DOMAIN-NAME")])]),e._v(" "),s("p",[e._v("Note that after running Certbot, it has changed the settings of your Nginx configuration file you created earlier. You can see those changes by using the "),s("strong",[e._v("cat")]),e._v(" command.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cat /etc/nginx/sites-enabled/YOUR-DOMAIN-NAME\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);