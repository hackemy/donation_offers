(function(){"use strict";var e={5497:function(e,n,o){var t=o(9242),a=o(3396);function r(e,n){const o=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(o)}var i=o(89);const s={},c=(0,i.Z)(s,[["render",r]]);var l=c,d=o(2483);const u=e=>((0,a.dD)("data-v-65f85ee2"),e=e(),(0,a.Cn)(),e),p={id:"root"},f={class:"root"},v={class:"content"},g={action:"/",method:"post"},m={class:"infoSectionMain",style:{"background-image":'url("/static/images/default-background.png")'}},h=u((()=>(0,a._)("section",{class:"infoSection"},[(0,a._)("h2",{class:"heading"},"Select a nonprofit to receive the donation"),(0,a._)("p",{class:"formDescription"},[(0,a.Uk)("Please select the nonprofit below to which you would like a "),(0,a._)("strong",null,"$10.00 donation"),(0,a.Uk)(" to be made.")])],-1))),b={class:"container"};function _(e,n,o,t,r,i){const s=(0,a.up)("InfoSection"),c=(0,a.up)("nonprofit-info"),l=(0,a.up)("request-form");return(0,a.wg)(),(0,a.iD)("div",p,[(0,a._)("div",f,[(0,a._)("div",v,[(0,a._)("form",g,[(0,a._)("section",m,[(0,a.Wm)(s,{msg:e.myconfig.offer},null,8,["msg"])]),h,(0,a._)("section",null,[(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.myconfig.npos,(e=>((0,a.wg)(),(0,a.j4)(c,{key:e.npo_id,npo:e},null,8,["npo"])))),128))])]),(0,a.Wm)(l,{groups:e.myconfig.fields},null,8,["groups"])])])])])}var w=o(65);const y={class:"innerInfoSection"},k=(0,a.uE)('<img class="logo" data-v-1170dbe3><h1 class="title" data-v-1170dbe3>Hi!</h1><p style="white-space:pre-line;" data-v-1170dbe3> Lotta Lautsuo (Co-Founder, Head of Product, Givsly) is committed to giving back. To show our appreciation, Givsly is making a nonprofit donation. Simply select a nonprofit to receive a $10.00 donation and fill out the brief form below. Thanks for doing good business! </p><button class="root submit" data-v-1170dbe3>Select a nonprofit</button><p class="smallPrint" data-v-1170dbe3></p>',5),C=[k];function x(e,n,o,t,r,i){return(0,a.wg)(),(0,a.iD)("div",y,C)}var D=(0,a.aZ)({name:"InfoSection",props:{msg:String}});const O=(0,i.Z)(D,[["render",x],["__scopeId","data-v-1170dbe3"]]);var S=O,j=o(7139);const I=e=>((0,a.dD)("data-v-788d85fa"),e=e(),(0,a.Cn)(),e),P={class:"card"},z=["href"],q=I((()=>(0,a._)("svg",{width:"12",height:"12",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg"},[(0,a._)("g",{stroke:"#FAC51D","stroke-width":"1.5",fill:"none","fill-rule":"evenodd"},[(0,a._)("path",{d:"M8.75 8.25v3h-8v-8h3M6.25.75h5v5"}),(0,a._)("path",{"stroke-linecap":"square",d:"m10.25 1.75-5 5"})])],-1))),F=[q],T={class:"title"},Z={class:"subtitle"},A=["src","alt"],H=I((()=>(0,a._)("p",{class:"gray"},"An average Givsly connection equals",-1))),M={class:"black"},Y={class:"blackThin"},U=I((()=>(0,a._)("div",{class:"selectBox"},[(0,a._)("span",{class:"circle"}),(0,a._)("span",{class:"selectWord"},"Select")],-1)));function B(e,n,o,t,r,i){return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("a",{href:e.npo.npo_url,class:"npoLink",target:"_blank",rel:"noopener noreferrer"},F,8,z),(0,a._)("p",T,(0,j.zw)(e.npo.name),1),(0,a._)("p",Z,(0,j.zw)(e.npo.cat),1),(0,a._)("img",{class:"img",src:e.imageUrl,alt:e.npo.name},null,8,A),H,(0,a._)("p",M,(0,j.zw)(e.npo.impact),1),(0,a._)("p",Y,(0,j.zw)(e.npo.impact_desc),1),U])}var G=(0,a.aZ)({name:"Nonprofit-Info",props:{npo:{type:Object,required:!0}},data(){return{imageUrl:this.npo.img_url}}});const L=(0,i.Z)(G,[["render",B],["__scopeId","data-v-788d85fa"]]);var E=L;const R=e=>((0,a.dD)("data-v-db4eee9c"),e=e(),(0,a.Cn)(),e),W={class:"detailSection"},K=R((()=>(0,a._)("h2",{class:"heading"},"Your contact information",-1))),$=R((()=>(0,a._)("p",{class:"formDescription"},"Your information will be utilized by our nonprofit platform partner, Givsly, to confirm the nonprofit donation and to contact you about the impact of your connection. Your information will also be used in accordance with the privacy policy of the company that provided you this Donation Offer.",-1))),N=["for"],Q={key:0,class:"labelSuffix"},V=["id","type","name","placeholder"],J={class:"error"},X=(0,a.uE)('<span class="root" data-v-db4eee9c><input name="agreeTermsAndConditionsAndPrivacyPolicy" type="checkbox" id="agreeTermsAndConditionsAndPrivacyPolicy" class="input" value="Yes" data-v-db4eee9c><label for="agreeTermsAndConditionsAndPrivacyPolicy" class="label" data-v-db4eee9c><span class="checkboxWrapper" data-v-db4eee9c><svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" data-v-db4eee9c><g fill="none" fill-rule="evenodd" data-v-db4eee9c><g transform="translate(2 2)" data-v-db4eee9c><path class="checked" d="M9.9992985 1.5048549l-.0194517 6.9993137C9.977549 9.3309651 9.3066522 10 8.4798526 10H1.5001008c-.8284271 0-1.5-.6715729-1.5-1.5l-.000121-7c0-.8284271.6715728-1.5 1.5-1.5h.000121l6.9993246.0006862c.8284272.000067 1.4999458.671694 1.499879 1.5001211a1.5002208 1.5002208 0 0 1-.0000059.0040476z" data-v-db4eee9c></path><path class="FieldCheckbox_box__2mgUl" stroke-width="2" d="M10.9992947 1.507634l-.0194518 6.9993137C10.9760133 9.8849417 9.8578519 11 8.4798526 11H1.5001008c-1.3807119 0-2.5-1.1192881-2.5-2.4999827L-1.0000202 1.5c0-1.3807119 1.119288-2.5 2.500098-2.5l6.9994284.0006862c1.3807118.0001115 2.4999096 1.11949 2.4997981 2.5002019-.0000018.003373-.0000018.003373-.0000096.0067458z" data-v-db4eee9c></path></g><path class="FieldCheckbox_checkmark__3Q-fF" d="M5.636621 10.7824771L3.3573694 8.6447948c-.4764924-.4739011-.4764924-1.2418639 0-1.7181952.4777142-.473901 1.251098-.473901 1.7288122 0l1.260291 1.1254782 2.8256927-4.5462307c.3934117-.5431636 1.1545778-.6695372 1.7055985-.278265.5473554.3912721.6731983 1.150729.2797866 1.6951077l-3.6650524 5.709111c-.2199195.306213-.5803433.5067097-.9920816.5067097-.3225487 0-.6328797-.1263736-.8637952-.3560334z" data-v-db4eee9c></path></g></svg></span><span class="text textRoot" data-v-db4eee9c> I acknowledge the service <a href="/terms-of-service" class="" target="_blank" rel="noopener noreferrer" data-v-db4eee9c>terms and conditions</a> and <a href="/privacy-policy" class="" target="_blank" rel="noopener noreferrer" data-v-db4eee9c>privacy policy</a> by <a href="/?utm_source=donationoffer&amp;utm_medium=landingpage&amp;utm_campaign=poweredby" class="" target="_blank" rel="noopener noreferrer" data-v-db4eee9c>Givsly</a></span></label></span><button class="submit" disabled="false" data-v-db4eee9c>Submit</button>',2);function ee(e,n,o,t,r,i){return(0,a.wg)(),(0,a.iD)("section",W,[K,$,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.groups,((n,o)=>((0,a.wg)(),(0,a.iD)("div",{class:"name",key:o},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(n,(o=>((0,a.wg)(),(0,a.iD)("div",{class:"root",key:o.id,style:(0,j.j5)({flexBasis:e.getFlexBasis(n)})},[(0,a._)("label",{for:o.id},[(0,a.Uk)((0,j.zw)(o.name)+" ",1),o.optional?((0,a.wg)(),(0,a.iD)("span",Q," • optional")):(0,a.kq)("",!0)],8,N),(0,a._)("input",{class:"input inputError",id:o.id,type:o.type,name:o.id,placeholder:o.placeholder,value:""},null,8,V),(0,a._)("div",J,(0,j.zw)(o.error),1)],4)))),128))])))),128)),X])}var ne=(0,a.aZ)({name:"Request-Form",props:{groups:{type:Object,required:!0}},computed:{getFlexBasis(){return e=>{const n=e.length;return`calc(100% / ${n} - 12px)`}}}});const oe=(0,i.Z)(ne,[["render",ee],["__scopeId","data-v-db4eee9c"]]);var te=oe,ae=(0,a.aZ)({name:"HomeView",metaInfo:{title:"Outreach request"},components:{InfoSection:S,"nonprofit-info":E,"request-form":te},computed:{myconfig(){const e=(0,w.oR)();return e.getters.getConfig}},beforeCreate(){const e=(0,w.oR)();e.dispatch("loadConfig")},watch:{config(e,n){}}});const re=(0,i.Z)(ae,[["render",_],["__scopeId","data-v-65f85ee2"]]);var ie=re;const se=[{path:"/",name:"home",component:ie}],ce=(0,d.p7)({history:(0,d.r5)(),routes:se});var le=ce;const de={config:{donation_amount_cents:"",offer:"",npos:[],fields:{fields:[]}}},ue={async loadConfig({commit:e}){const n=await fetch("/data.json"),o=await n.json();e("setConfig",o)}},pe={setConfig(e,n){e.config=n}},fe={getConfig:e=>e.config};var ve=(0,w.MT)({state:de,getters:fe,mutations:pe,actions:ue,modules:{}});const ge=(0,t.ri)(l);ge.use(ve),ge.use(le),ge.mount("#app")}},n={};function o(t){var a=n[t];if(void 0!==a)return a.exports;var r=n[t]={exports:{}};return e[t](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(n,t,a,r){if(!t){var i=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,c=0;c<t.length;c++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](t[c])}))?t.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var l=a();void 0!==l&&(n=l)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[t,a,r]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};o.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,r,i=t[0],s=t[1],c=t[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(c)var d=c(o)}for(n&&n(t);l<i.length;l++)r=i[l],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(d)},t=self["webpackChunkdonation_offers_vue"]=self["webpackChunkdonation_offers_vue"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(5497)}));t=o.O(t)})();
//# sourceMappingURL=app.452300a7.js.map