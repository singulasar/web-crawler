(function(t){function e(e){for(var a,i,s=e[0],u=e[1],c=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var r=a[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=a,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(r,a,function(e){return t[e]}.bind(null,a));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"4e76":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);var a=r("2b0e"),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],i=(r("034f"),r("2877")),s={},u=Object(i["a"])(s,n,o,!1,null,null,null),c=u.exports,l=r("8c4f"),d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",{staticClass:"home-header"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.url,expression:"url"}],attrs:{placeholder:"Enter url"},domProps:{value:t.url},on:{input:function(e){e.target.composing||(t.url=e.target.value)}}}),r("a",{attrs:{href:"#"},on:{click:t.submit}},[t._v("Fetch data")])]),r("div",{staticClass:"home-content"},[t.loading?r("p",[t._v("Loading..")]):t._e(),t.loading?t._e():r("DataDisplay",{attrs:{data:t.message}})],1)])},p=[],f=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"data-display"},[r("h1",[t._v(t._s(t.data.name))]),r("div",{staticClass:"data-display-image"},[t.data.imageUrl?r("a",{attrs:{href:t.data.imageUrl,target:"_blank"}},[r("img",{attrs:{src:t.data.imageUrl}})]):t._e(),r("p",[t._v(t._s(t.data.price)+" "+t._s(t.data.currency))])]),r("div",{staticClass:"data-display-links"},[t.data.url?r("a",{attrs:{href:t.data.url,target:"_blank"}},[t._v(t._s(t.data.url))]):t._e()])])},v=[],m={name:"home",props:{data:Object}},h=m,g=(r("f880"),r("7b0f"),Object(i["a"])(h,f,v,!1,null,"17182f6c",null)),b=g.exports;const _="/fetch-product-data?url=";var y={name:"Home",data(){return{error:"",message:{name:"Product",price:0,currency:"EUR",url:"",imageUrl:""},url:"",loading:!1}},components:{DataDisplay:b},methods:{submit(){this.loading=!0,fetch(_+this.url).then(t=>t.json()).then(t=>{this.message=t,this.loading=!1})}}},O=y,j=(r("cca3"),Object(i["a"])(O,d,p,!1,null,"3992080c",null)),w=j.exports;a["a"].use(l["a"]);const x=[{path:"/",name:"Home",component:w}],P=new l["a"]({routes:x});var k=P;a["a"].config.productionTip=!1,new a["a"]({router:k,render(t){return t(c)}}).$mount("#app")},"68e0":function(t,e,r){},"7b0f":function(t,e,r){"use strict";var a=r("4e76"),n=r.n(a);n.a},"85ec":function(t,e,r){},"9cfe":function(t,e,r){},cca3:function(t,e,r){"use strict";var a=r("9cfe"),n=r.n(a);n.a},f880:function(t,e,r){"use strict";var a=r("68e0"),n=r.n(a);n.a}});
//# sourceMappingURL=app.1a04fd24.js.map