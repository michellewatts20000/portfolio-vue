(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52fc60da"],{"079c":function(e,t,r){e.exports=r.p+"img/hearo.7a56d5cc.png"},"099c":function(e,t,r){e.exports=r.p+"img/pantry.c67897f0.jpg"},"16ca":function(e,t,r){e.exports=r.p+"img/unpaid-ot.ebec6d4e.jpg"},1771:function(e,t,r){var a={"./blogger.jpg":"4e3e","./code.jpg":"b209","./hearo.png":"079c","./logo.png":"cf05","./logo.svg":"9b19","./mwatts-min.jpg":"eb4f","./note.jpg":"26b0","./pantry.jpg":"099c","./profile-pic.jpeg":"3831","./unpaid-ot.jpg":"16ca","./weather.jpg":"5519"};function i(e){var t=s(e);return r(t)}function s(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=s,e.exports=i,i.id="1771"},"26b0":function(e,t,r){e.exports=r.p+"img/note.c5a99e89.jpg"},"297c":function(e,t,r){"use strict";var a=r("2b0e"),i=(r("6ece"),r("0789")),s=r("90a2"),n=r("a9ad"),o=r("fe6c"),l=r("a452"),c=r("7560"),d=r("80d2"),h=r("58df");const u=Object(h["a"])(n["a"],Object(o["b"])(["absolute","fixed","top","bottom"]),l["a"],c["a"]);var p=u.extend({name:"v-progress-linear",directives:{intersect:s["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(d["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(d["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:Object(d["g"])(this.normalizedValue,"%"),width:Object(d["g"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i["c"]:i["d"]},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(d["g"])(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=Object(d["p"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,r){this.isVisible=r},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(d["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),g=p;t["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(g,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"4e3e":function(e,t,r){e.exports=r.p+"img/blogger.d0d10a13.jpg"},5519:function(e,t,r){e.exports=r.p+"img/weather.16f93aba.jpg"},"615b":function(e,t,r){},"6ece":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"d",(function(){return l}));var a=r("b0af"),i=r("80d2");const s=Object(i["i"])("v-card__actions"),n=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),l=Object(i["i"])("v-card__title");a["a"]},"9b19":function(e,t,r){e.exports=r.p+"img/logo.63a7d78d.svg"},b0af:function(e,t,r){"use strict";r("615b");var a=r("10d2"),i=r("297c"),s=r("1c87"),n=r("58df");t["a"]=Object(n["a"])(i["a"],s["a"],a["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s["a"].options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...a["a"].options.computed.classes.call(this)}},styles(){const e={...a["a"].options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=i["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}})},b209:function(e,t,r){e.exports=r.p+"img/code.4c3af7cb.jpg"},c9e5:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"my-5",attrs:{"fill-height":""}},[a("v-row",e._l(e.cards,(function(t){return a("v-col",{key:t.name+"-header-link"},[a("v-card",{staticClass:"mx-auto my-4",staticStyle:{padding:"15px"},attrs:{"max-width":"300"}},[a("v-img",{attrs:{height:"200",src:r("1771")("./"+t.url)}}),a("v-card-title",{staticClass:"title"},[e._v(e._s(t.name))]),a("v-card-subtitle",[e._v(e._s(t.tech))]),a("v-card-text",{staticClass:"body-1"},[a("div",[e._v(" "+e._s(t.description)+" ")])]),a("v-card-actions",[a("v-btn",{staticClass:"primary body-2",attrs:{href:t.deployed}},[e._v(" Live Project ")]),a("v-spacer"),a("v-btn",{staticClass:"secondary body-2",attrs:{href:t.github}},[e._v(" GitHub ")])],1)],1)],1)})),1)],1)},i=[],s={name:"Portfolio",data(){return{show:!1,cards:[{name:"Promptopia",tech:"Next.js, MongoDB, Tailwind CSS",url:"note.jpg",description:"Create, edit and delete prompts for AI. Built with Next.js, MongoDB and Tailwind CSS.",deployed:"https://comforting-gumption-53ec62.netlify.app/",github:"https://github.com/michellewatts20000/promptopia"},{name:"Hearo",tech:"React, MongoDB, Express, Node.js",url:"hearo.png",description:"Find quiet places to socialise in Sydney. An app that lets you search for quiet places and review places for their loudness.",deployed:"https://still-bayou-61713.herokuapp.com",github:"https://github.com/michellewatts20000/hearo"},{name:"What's in my Pantry?",tech:"Typescript, React, Material UI, REST API",url:"pantry.jpg",description:"What's in my pantry is an easy to use, all-in-one recipe search app that will display recipes based on a list of food items that are currently in your pantry.",deployed:"https://voluble-blini-cd8074.netlify.app/",github:"https://github.com/michellewatts20000/react-pantry"},{name:"Overtime Calculator",tech:"HTML, CSS, JavaScript",url:"unpaid-ot.jpg",description:"A full-stack app that calculates the amount of unpaid hours and salary you have worked over one year. It's more then you think.",deployed:"https://nofreework.com.au/",github:"https://github.com/michellewatts20000/unpaid-overtime-calc"},{name:"Weather Dashboard",tech:"Vue3, Vuetify3, Typescript, REST APIs",url:"weather.jpg",description:"The weather dashboard is an app that gives you the current weather.",deployed:"https://transcendent-lily-437bc2.netlify.app",github:"https://github.com/michellewatts20000/vue-weather"},{name:"Tech Blog",tech:"Handlebars, MySQL, Express.js, Node.js",url:"blogger.jpg",description:"A full-stack app that lets you write and comment about tech related issues. Create an account, check out other peoples blogs.",deployed:"https://boiling-beach-99511.herokuapp.com/",github:"https://github.com/michellewatts20000/tech-blog"}]}},methods:{}},n=s,o=r("2877"),l=r("6544"),c=r.n(l),d=r("8336"),h=r("b0af"),u=r("99d9"),p=r("62ad"),g=r("a523"),m=r("adda"),b=r("0fd9"),v=r("2fa4"),f=Object(o["a"])(n,a,i,!1,null,null,null);t["default"]=f.exports;c()(f,{VBtn:d["a"],VCard:h["a"],VCardActions:u["a"],VCardSubtitle:u["b"],VCardText:u["c"],VCardTitle:u["d"],VCol:p["a"],VContainer:g["a"],VImg:m["a"],VRow:b["a"],VSpacer:v["a"]})},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},eb4f:function(e,t,r){e.exports=r.p+"img/mwatts-min.2bfebbc6.jpg"}}]);
//# sourceMappingURL=chunk-52fc60da.b21638f0.js.map