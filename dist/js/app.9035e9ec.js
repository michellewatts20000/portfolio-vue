(function(e){function t(t){for(var a,r,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"621f45e7","chunk-6c3f4378":"58b6bb9b","chunk-640c123b":"9f18997a","chunk-a6da8c0e":"127dc860","chunk-6f0ce7c7":"7e676efc","chunk-7079c980":"7fe44719"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-6c3f4378":1,"chunk-640c123b":1,"chunk-a6da8c0e":1,"chunk-6f0ce7c7":1,"chunk-7079c980":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0e5e97":"31d6cfe0","chunk-6c3f4378":"3fab3bdf","chunk-640c123b":"ac008607","chunk-a6da8c0e":"c2d09d30","chunk-6f0ce7c7":"2bc95379","chunk-7079c980":"900c069c"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/portfolio-vue/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0d9d":function(e,t,n){},3831:function(e,t,n){e.exports=n.p+"img/profile-pic.f27ccd16.jpeg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{color:"primary",dense:"",app:""}},[n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"hidden-md-and-up",attrs:{icon:""}},"v-btn",r,!1),a),[n("v-app-bar-nav-icon")],1)]}}])},[n("v-list",e._l(e.links,(function(t){return n("v-list-item",{key:t.url,attrs:{to:{name:t.label}}},[n("v-list-item-title",[e._v(e._s(t.label))])],1)})),1)],1),n("v-btn",{attrs:{text:"",rounded:"",to:"/"}},[n("v-icon",[e._v(e._s("mdi-home"))])],1),n("v-spacer"),e._l(e.links,(function(t){return n("v-btn",{key:t.label+"-header-link",staticClass:"hidden-sm-and-down",attrs:{text:"",to:{name:t.label}}},[e._v(" "+e._s(t.label)+" ")])})),n("v-btn",{attrs:{text:"",rounded:""},on:{click:e.toggleTheme}},[n("v-icon",{on:{click:function(t){e.show=!e.show}}},[e._v(e._s(e.show?"mdi-white-balance-sunny":"mdi-moon-waning-crescent"))])],1)],2),n("v-main",[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("router-view")],1)],1),n("v-footer",{attrs:{color:"primary lighten-1",padless:""}},[n("v-layout",{attrs:{"justify-center":"",wrap:""}},[e._l(e.links,(function(t){return n("v-btn",{key:t.label+"-footer-link",staticClass:"my-2",attrs:{color:"",text:"",rounded:"",to:{name:t.label}}},[e._v(" "+e._s(t.label)+" ")])})),n("v-flex",{attrs:{primary:"","lighten-2":"","py-4":"","text-center":"",xs12:""}},[e._v(" "+e._s((new Date).getFullYear())+" — "),n("strong",[e._v("Michelle Watts' Portfolio")])]),n("v-btn",{staticClass:"my-2",attrs:{href:"https://github.com/michellewatts20000",text:"",rounded:""}},[n("v-icon",[e._v(e._s("mdi-github"))])],1),n("v-btn",{staticClass:"my-2",attrs:{href:"https://www.linkedin.com/in/michelle-e-watts/",text:"",rounded:""}},[n("v-icon",[e._v(e._s("mdi-linkedin"))])],1)],2)],1)],1)},o=[],i=(n("18a5"),{name:"App",data:function(){return{drawer:null,show:!1,links:[{label:"Portfolio",url:"/portfolio"},{label:"Resume",url:"/resume"},{label:"Contact",url:"/contact"}]}},methods:{toggleTheme:function(){this.$vuetify.theme.themes.dark.anchor="",this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}}),c=i,s=n("2877"),u=n("6544"),l=n.n(u),d=n("7496"),f=n("40dc"),m=n("5bc1"),p=n("8336"),h=n("0789"),v=n("0e8f"),b=n("553a"),g=n("132d"),y=n("a722"),k=n("8860"),w=n("da13"),_=n("5d23"),x=n("f6c4"),C=n("e449"),j=n("2fa4"),T=Object(s["a"])(c,r,o,!1,null,null,null),V=T.exports;l()(T,{VApp:d["a"],VAppBar:f["a"],VAppBarNavIcon:m["a"],VBtn:p["a"],VFadeTransition:h["c"],VFlex:v["a"],VFooter:b["a"],VIcon:g["a"],VLayout:y["a"],VList:k["a"],VListItem:w["a"],VListItemTitle:_["b"],VMain:x["a"],VMenu:C["a"],VSpacer:j["a"]});n("d3b7"),n("3ca3"),n("ddb0");var E=n("8c4f"),S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Main")},A=[],M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"mt-3 mb-5",attrs:{"fill-height":""}},[a("v-row",{attrs:{justify:"space-around",align:"center"}},[a("v-col",{staticClass:"text-sm-center text-md-left text-center mb-5",attrs:{order:"2",cols:"12",md:"8"}},[a("vue-typed-js",{attrs:{strings:["Web Developer","Designer","Drummer","Web Developer"]}},[a("div",{staticClass:"display-2 mb-3"},[e._v(" Hi! My name is Michelle. I'm a "),a("span",{staticClass:"typing"})])]),a("div",{staticClass:"subtitle-1 mb-5"},[e._v(" I am a Frontend Developer at Argenti. I have a background in graphic/web design and audio engineering. Check out some of my work by clicking the portfolio link in the navigation. ")]),e._l(e.ctaBtn,(function(t){return a("v-btn",{key:t.id,class:"mr-2 "+t.textCol+"--text subtitle-2",attrs:{color:t.color,href:t.href}},[e._v(e._s(t.text)+" ")])}))],2),a("v-col",{attrs:{order:"1",lg:"3",md:"4",sm:"4",cols:"6"}},[a("v-img",{staticClass:"rounded-circle my-3",attrs:{src:n("3831"),contain:"",position:"center center",alt:"profile-picture"}})],1)],1)],1)},O=[],P={name:"Main",data:function(){return{ctaBtn:[{text:"LinkedIn",href:"https://www.linkedin.com/in/michelle-e-watts/",color:"primary",textCol:"white"},{text:"GitHub",href:"https://github.com/michellewatts20000",color:"secondary",textCol:"white"}]}}},L=P,B=(n("ae46"),n("62ad")),I=n("a523"),D=n("adda"),N=n("0fd9"),F=Object(s["a"])(L,M,O,!1,null,"2bf33f1e",null),$=F.exports;l()(F,{VBtn:p["a"],VCol:B["a"],VContainer:I["a"],VImg:D["a"],VRow:N["a"]});var H={name:"Home",components:{Main:$}},R=H,J=Object(s["a"])(R,S,A,!1,null,null,null),U=J.exports;a["a"].use(E["a"]);var W=[{path:"/",name:"Home",component:U},{path:"/portfolio",name:"Portfolio",component:function(){return n.e("chunk-6f0ce7c7").then(n.bind(null,"c9e5"))}},{path:"/resume",name:"Resume",component:function(){return n.e("chunk-7079c980").then(n.bind(null,"1ba2"))}},{path:"/contact",name:"Contact",component:function(){return Promise.all([n.e("chunk-6c3f4378"),n.e("chunk-a6da8c0e")]).then(n.bind(null,"b8fa"))}},{path:"/test",name:"Test",component:function(){return Promise.all([n.e("chunk-6c3f4378"),n.e("chunk-640c123b")]).then(n.bind(null,"78c1"))}},{path:"*",name:"NotFound",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}],q=new E["a"]({mode:"hash",base:"/portfolio-vue/",routes:W}),K=q,z=(n("a15b"),n("ac1f"),n("1276"),n("4de4"),n("466d"),n("fb6a"),n("2f62")),G=n("bc3a"),Y=n.n(G);a["a"].use(z["a"]);var Q=new z["a"].Store({strict:!0,state:{loading:!1,waveArray:[],count:0,todos:[{text:"Learn JavaScript"},{text:"Learn Vue"},{text:"Build something awesome"}],categories:["sustainability","nature","animal welfare","housing","education","food","community"],colors:["red","blue","green","black","yellow","purple","white"],objects:["domain","star","home","car"],sizes:["10","25","50","75","100"],posts:[],result:"",message:"",apiKey:"bcfe6b08dcmsh6ed06ffa591d054p14d4b0jsn565c23c38d4f"},getters:{doubleCount:function(e){return 2*e.count},shop:function(e){return"The shop number is "+e.shopNumber},loading:function(e){return e.loading},result:function(e){return e.result}},mutations:{increment:function(e){e.count++},updateMessage:function(e,t){e.message=t},decrement:function(e){e.count--},reverse:function(e){e.message=e.message.split("").reverse().join("")},dash:function(e){e.message=e.message.split("").join("-")},vowels:function(e){var t=/[aeiou]/gi,n=e.message.split(""),a=n.filter((function(e){return!e.match(t)}));e.message=a.join("")},wave:function(e){for(var t=0;t<e.message.length;t++){var n=e.message[t];" "!==n&&e.waveArray.push(e.message.slice(0,t)+n.toUpperCase()+e.message.slice(t+1))}return e.waveArray},clear:function(e){e.message="",e.waveArray=[]},timesTwo:function(e){e.count=2*e.count},vowel:function(e){var t=/[aeiou]/gi,n=e.message.split(""),a=n.filter((function(e){return!e.match(t)}));e.message=a.join("")},SET_RESULT:function(e,t){e.result=t},loading:function(e,t){e.loading=t}},actions:{increment:function(e){var t=e.commit;t("increment")},timesTwo:function(e){var t=e.commit;t("timesTwo")},getJoke:function(e){var t=e.commit;t("loading",!0),Y.a.get("https://funny-joke-dataset.p.rapidapi.com/users",{headers:{"x-rapidapi-host":"funny-joke-dataset.p.rapidapi.com","x-rapidapi-key":"bcfe6b08dcmsh6ed06ffa591d054p14d4b0jsn565c23c38d4f"}}).then((function(e){var n=e.data.users[Math.floor(1e3*Math.random())].body;console.log(n),t("loading",!1),t("SET_RESULT",n)}))}},modules:{}}),X=n("f309");a["a"].use(X["a"]);var Z=new X["a"]({icons:{iconfont:"mdi"},theme:{themes:{light:{primary:"#2EC4B6",info:"#00752c"},dark:{}}}}),ee=n("8cb8");a["a"].config.productionTip=!1,a["a"].use(ee["default"]),new a["a"]({router:K,store:Q,vuetify:Z,render:function(e){return e(V)}}).$mount("#app")},ae46:function(e,t,n){"use strict";n("0d9d")}});
//# sourceMappingURL=app.9035e9ec.js.map