(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a6da8c0e"],{"0c18":function(t,e,s){},1681:function(t,e,s){},afdd:function(t,e,s){"use strict";var i=s("8336");e["a"]=i["a"]},b8fa:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{attrs:{"fill-height":""}},[i("v-row",{attrs:{justify:"space-around"}},[i("v-col",{staticClass:"mb-5 text-md-left text-center",attrs:{order:"2",cols:"12",md:"8"}},[i("h1",{staticClass:"display-1 mb-3"},[t._v("Contact Me")]),i("v-form",{ref:"signUpForm",on:{submit:function(e){return e.preventDefault(),t.sendEmail.apply(null,arguments)}},model:{value:t.formValidity,callback:function(e){t.formValidity=e},expression:"formValidity"}},[i("v-text-field",{attrs:{label:"Name",type:"text",name:"name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),i("v-text-field",{attrs:{label:"Email",type:"email",name:"email",rules:t.emailRules,required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),i("v-textarea",{attrs:{name:"message",cols:"30",rows:"5",placeholder:"Message",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),i("v-btn",{staticClass:"mr-4 subtitle-2",attrs:{type:"submit",color:"primary",value:"Send",disabled:!t.formValidity}},[t._v("Submit")]),i("v-btn",{attrs:{color:"secondary white--text subtitle-2"},on:{click:t.resetForm}},[t._v("Reset")])],1),t.thanks?i("v-alert",{staticClass:"mt-5",attrs:{type:"success",dismissible:""}},[t._v(" Thanks for reaching out, I will reply to your email shortly.")]):t._e()],1),i("v-col",{attrs:{order:"1",lg:"3",md:"4",sm:"4",cols:"6"}},[i("v-img",{staticClass:"rounded-circle my-3",attrs:{src:s("3831"),contain:"",position:"center center",alt:"profile-picture"}})],1)],1)],1)},r=[];const a={_origin:"https://api.emailjs.com"},o=(t,e="https://api.emailjs.com")=>{a._userID=t,a._origin=e},n=(t,e,s)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class l{constructor(t){this.status=t.status,this.text=t.responseText}}const d=(t,e,s={})=>new Promise((i,r)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:t})=>{const e=new l(t);200===e.status||"OK"===e.text?i(e):r(e)}),o.addEventListener("error",({target:t})=>{r(new l(t))}),o.open("POST",a._origin+t,!0),Object.keys(s).forEach(t=>{o.setRequestHeader(t,s[t])}),o.send(e)}),c=(t,e,s,i)=>{const r=i||a._userID;n(r,t,e);const o={lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:s};return d("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},h=t=>{let e;if(e="string"===typeof t?document.querySelector(t):t,!e||"FORM"!==e.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},u=(t,e,s,i)=>{const r=i||a._userID,o=h(s);n(r,t,e);const l=new FormData(o);return l.append("lib_version","3.2.0"),l.append("service_id",t),l.append("template_id",e),l.append("user_id",r),d("/api/v1.0/email/send-form",l)};var m={init:o,send:c,sendForm:u},p={name:"Contact",data:()=>({name:"",email:"",message:"",thanks:!1,emailRules:[t=>!!t||"Email is required.",t=>0!==t.indexOf("@")||"Email should have a username.",t=>t.includes("@")||"Email should include an @ symbol.",t=>t.includes(".")||"Email should include a period symbol.",t=>t.indexOf(".")<=t.length-3||"Email should contain a valid domain extension."],formValidity:!1}),methods:{resetForm(){this.$refs.signUpForm.reset()},sendEmail(t){try{m.sendForm("service_zkbnhdj","template_8eoy6gi",t.target,"user_eRiVJQWlEW4YWr0jVhl9u",{name:this.name,email:this.email,message:this.message})}catch(e){console.log({error:e})}this.name="",this.email="",this.message="",this.$refs.signUpForm.reset(),this.thanks=!0}}},g=p,v=s("2877"),f=s("6544"),b=s.n(f),_=(s("0c18"),s("10d2")),y=s("afdd"),w=s("9d26"),x=s("f2e7"),B=s("7560"),$=s("2b0e"),C=$["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),I=s("58df"),V=s("d9bd"),E=Object(I["a"])(_["a"],x["a"],C).extend({name:"v-alert",props:{border:{type:String,validator(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let t={staticClass:"v-alert__border",class:{["v-alert__border--"+this.border]:!0}};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible(){if(!this.dismissible)return null;const t=this.iconColor;return this.$createElement(y["a"],{staticClass:"v-alert__dismissible",props:{color:t,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(w["a"],{props:{color:t}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(w["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const t={..._["a"].options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(t["v-alert--border-"+this.border]=!0),t},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$"+this.type)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||B["a"].options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&Object(V["a"])("outline","outlined",this)},methods:{genWrapper(){const t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(t){const e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),k=s("8336"),T=s("62ad"),j=s("a523"),S=s("7e2b"),O=s("3206"),H=Object(I["a"])(S["a"],Object(O["b"])("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",e=>{this.$set(this.errorBag,t._uid,e)},{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))}):s.valid=e(t),s},validate(){return 0===this.inputs.filter(t=>!t.validate(!0)).length},reset(){this.inputs.forEach(t=>t.reset()),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout(()=>{this.errorBag={}},0)},resetValidation(){this.inputs.forEach(t=>t.resetValidation()),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find(e=>e._uid===t._uid);if(!e)return;const s=this.watchers.find(t=>t._uid===e._uid);s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter(t=>t._uid!==e._uid),this.inputs=this.inputs.filter(t=>t._uid!==e._uid),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),F=s("adda"),D=s("0fd9"),R=s("8654");s("1681");const q=Object(I["a"])(R["a"]);var z=q.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...R["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=R["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){R["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),N=Object(v["a"])(g,i,r,!1,null,null,null);e["default"]=N.exports;b()(N,{VAlert:E,VBtn:k["a"],VCol:T["a"],VContainer:j["a"],VForm:H,VImg:F["a"],VRow:D["a"],VTextField:R["a"],VTextarea:z})}}]);
//# sourceMappingURL=chunk-a6da8c0e.786c20cc.js.map