webpackJsonp([19],{"0F0d":function(t,e,n){"use strict";e.a={name:"no-ssr",props:["placeholder"],data:function(){return{canRender:!1}},mounted:function(){this.canRender=!0},render:function(t){return this.canRender?this.$slots.default&&this.$slots.default[0]:t("div",{class:["no-ssr-placeholder"]},this.$slots.placeholder||this.placeholder)}}},"8bcE":function(t,e){},F7kz:function(t,e,n){var r={"./animation.js":"Nskt","./vr.js":"WF89"};function a(t){return n(o(t))}function o(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="F7kz"},F88d:function(t,e,n){"use strict";var r=n("WSDL"),a=n("P+aQ"),o=!1;var i=function(t){o||n("lFGQ")},s=n("VU/8")(r.a,a.a,!1,i,null,null);s.options.__file=".nuxt/components/nuxt-loading.vue",e.a=s.exports},FOeY:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;-webkit-transition:width .2s,opacity .4s;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999}",""])},"HBB+":function(t,e,n){"use strict";e.a={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,o=e.data,i=e.props;o.nuxtChild=!0;for(var s=n,u=n.$nuxt.nuxt.transitions,c=n.$nuxt.nuxt.defaultTransition,f=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&f++,n=n.$parent;o.nuxtChildDepth=f;var l=u[f]||c,d={};r.forEach(function(t){void 0!==l[t]&&(d[t]=l[t])});var p={};a.forEach(function(t){"function"==typeof l[t]&&(p[t]=l[t].bind(s))});var h=p.beforeEnter;p.beforeEnter=function(t){if(window.$nuxt.$emit("triggerScroll"),h)return h.call(s,t)};var m=[t("router-view",o)];return void 0!==i.keepAlive&&(m=[t("keep-alive",m)]),t("transition",{props:d,on:p},m)}};var r=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],a=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"]},"Hot+":function(t,e,n){"use strict";var r=n("/5sW"),a=n("HBB+"),o=n("To1F"),i=n("YLfZ");e.a={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){r.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||Object(i.b)(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:a.a,NuxtError:o.a}}},J1QK:function(t,e,n){"use strict";var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};r._withStripped=!0;var a={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"wrapper",attrs:{id:"scene"}},[e("div",{staticClass:"astro-container",attrs:{"data-depth":"0.6"}},[e("img",{staticClass:"astro",attrs:{src:"/404/ayastronaut.svg"}})]),e("div",{staticClass:"block-text",attrs:{"data-depth":"0.3"}},[e("h1",{staticClass:"block-text__title"},[this._v("404")]),e("img",{staticClass:"block-text__img",attrs:{src:"/404/line.png"}}),e("p",{staticClass:"block-text__text"},[this._v("Désolé, vous avez été propulsé "),e("br"),this._v(" au mauvais endroit...")])])])])}]};e.a=a},J2Ti:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var r=n("woOf"),a=n.n(r),o=n("BO1k"),i=n.n(o),s=n("/5sW"),u=n("NYxO");s.default.use(u.default);var c=n("F7kz"),f=c.keys(),l={},d=void 0;if(f.forEach(function(t){-1!==t.indexOf("./index.")&&(d=t)}),d&&(l=_(d)),"function"!=typeof l){l.modules||(l.modules={});var p=!0,h=!1,m=void 0;try{for(var v,x=i()(f);!(p=(v=x.next()).done);p=!0){var b=v.value,g=b.replace(/^\.\//,"").replace(/\.(js)$/,"");if("index"!==g){var y=g.split(/\//);(t=k(l,y))[g=y.pop()]=_(b),t[g].namespaced=!0}}}catch(t){h=!0,m=t}finally{try{!p&&x.return&&x.return()}finally{if(h)throw m}}}var w=l instanceof Function?l:function(){return new u.default.Store(a()({strict:!1},l,{state:l.state instanceof Function?l.state():{}}))};function _(t){var e=c(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function k(t,e){if(1===e.length)return t.modules;var n=e.shift();return t.modules[n]=t.modules[n]||{},t.modules[n].namespaced=!0,t.modules[n].modules=t.modules[n].modules||{},k(t.modules[n],e)}},Kz7D:function(t,e,n){var r=n("wK1Z");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("aa5a8954",r,!1,{sourceMap:!1})},Nskt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return a});var r=function(){return{startAnimationSplash:!0}},a={disableSplashAnimation:function(t){t.startAnimationSplash=!1}}},"P+aQ":function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};r._withStripped=!0;var a={render:r,staticRenderFns:[]};e.a=a},T23V:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a,o,i=n("pFYg"),s=n.n(i),u=n("//Fk"),c=n.n(u),f=n("Xxa5"),l=n.n(f),d=n("mvHQ"),p=n.n(d),h=n("exGp"),m=n.n(h),v=n("fZjL"),x=n.n(v),b=n("woOf"),g=n.n(b),y=n("/5sW"),w=n("unZF"),_=n("qcny"),k=n("YLfZ"),C=(r=m()(l.a.mark(function t(e,n,r){var a,o,i=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!R.nuxt.err||n.path!==e.path,this._queryChanged=p()(e.query)!==p()(n.query),this._diffQuery=this._queryChanged?Object(k.g)(e.query,n.query):[],this._pathChanged&&this.$loading.start&&this.$loading.start(),t.prev=4,t.next=7,Object(k.k)(e);case 7:a=t.sent,!this._pathChanged&&this._queryChanged&&a.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},o=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:o,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])})),function(t,e,n){return r.apply(this,arguments)}),j=(a=m()(l.a.mark(function t(e,n,r){var a,o,i,s,u,f,d,p,h=this;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return a=!1,o=function(t){if(n.path===t.path&&h.$loading.finish&&h.$loading.finish(),n.path!==t.path&&h.$loading.pause&&h.$loading.pause(),!a){a=!0;var e=[];E=Object(k.e)(n,e).map(function(t,r){return Object(k.b)(n.matched[e[r]].path)(n.params)}),r(t)}},t.next=6,Object(k.m)(R,{route:e,from:n,next:o.bind(this)});case 6:if(this._dateLastError=R.nuxt.dateErr,this._hadError=!!R.nuxt.err,i=[],(s=Object(k.e)(e,i)).length){t.next=24;break}return t.next=13,D.call(this,s,R.context);case 13:if(!a){t.next=15;break}return t.abrupt("return");case 15:return t.next=17,this.loadLayout("function"==typeof _.a.layout?_.a.layout(R.context):_.a.layout);case 17:return u=t.sent,t.next=20,D.call(this,s,R.context,u);case 20:if(!a){t.next=22;break}return t.abrupt("return");case 22:return R.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 24:return s.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(F(s,e,n)),t.prev=26,t.next=29,D.call(this,s,R.context);case 29:if(!a){t.next=31;break}return t.abrupt("return");case 31:if(!R.context._errored){t.next=33;break}return t.abrupt("return",r());case 33:return"function"==typeof(f=s[0].options.layout)&&(f=f(R.context)),t.next=37,this.loadLayout(f);case 37:return f=t.sent,t.next=40,D.call(this,s,R.context,f);case 40:if(!a){t.next=42;break}return t.abrupt("return");case 42:if(!R.context._errored){t.next=44;break}return t.abrupt("return",r());case 44:if(d=!0,s.forEach(function(t){d&&"function"==typeof t.options.validate&&(d=t.options.validate({params:e.params||{},query:e.query||{},store:T}))}),d){t.next=49;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 49:return t.next=51,c.a.all(s.map(function(t,n){if(t._path=Object(k.b)(e.matched[i[n]].path)(e.params),t._dataRefresh=!1,h._pathChanged&&t._path!==E[n])t._dataRefresh=!0;else if(!h._pathChanged&&h._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return h._diffQuery[t]}))}if(!h._hadError&&h._isMounted&&!t._dataRefresh)return c.a.resolve();var a=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,s=!!t.options.fetch,u=o&&s?30:45;if(o){var f=Object(k.j)(t.options.asyncData,R.context).then(function(e){Object(k.a)(t,e),h.$loading.increase&&h.$loading.increase(u)});a.push(f)}if(s){var l=t.options.fetch(R.context);l&&(l instanceof c.a||"function"==typeof l.then)||(l=c.a.resolve(l)),l.then(function(t){h.$loading.increase&&h.$loading.increase(u)}),a.push(l)}return c.a.all(a)}));case 51:a||(this.$loading.finish&&this.$loading.finish(),E=s.map(function(t,n){return Object(k.b)(e.matched[i[n]].path)(e.params)}),r()),t.next=66;break;case 54:return t.prev=54,t.t0=t.catch(26),t.t0||(t.t0={}),E=[],t.t0.statusCode=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,"function"==typeof(p=_.a.layout)&&(p=p(R.context)),t.next=63,this.loadLayout(p);case 63:this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 66:case"end":return t.stop()}},t,this,[[26,54]])})),function(t,e,n){return a.apply(this,arguments)}),$=(o=m()(l.a.mark(function t(e){var n,r,a,o;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R=e.app,O=e.router,T=e.store,t.next=5,c.a.all(q(O));case 5:return n=t.sent,r=new y.default(R),a=A.layout||"default",t.next=10,r.loadLayout(a);case 10:if(r.setLayout(a),o=function(){r.$mount("#__nuxt"),y.default.nextTick(function(){B(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(F(n,O.currentRoute)),E=O.currentRoute.matched.map(function(t){return Object(k.b)(t.path)(O.currentRoute.params)})),r.$loading={},A.error&&r.error(A.error),O.beforeEach(C.bind(r)),O.beforeEach(j.bind(r)),O.afterEach(S),O.afterEach(W.bind(r)),!A.serverRendered){t.next=23;break}return o(),t.abrupt("return");case 23:j.call(r,O.currentRoute,O.currentRoute,function(t){if(!t)return S(O.currentRoute,O.currentRoute),U.call(r,O.currentRoute),void o();O.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 24:case"end":return t.stop()}},t,this)})),function(t){return o.apply(this,arguments)}),E=[],R=void 0,O=void 0,T=void 0,A=window.__NUXT__||{};function F(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,a=Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return n.apply(void 0,a)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=g()({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var a=r(n.matched[0].components.default);x()(a).filter(function(t){return a[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=a[t]})}return e})}function L(t,e){return A.serverRendered&&e&&Object(k.a)(t,e),t._Ctor=t,t}function q(t){var e,n=this,r=Object(k.d)(t.options.base,t.options.mode);return Object(k.c)(t.match(r),(e=m()(l.a.mark(function t(e,r,a,o,i){var s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return s=L(Object(k.l)(e),A.data?A.data[i]:null),a.components[o]=s,t.abrupt("return",s);case 7:case"end":return t.stop()}},t,n)})),function(t,n,r,a,o){return e.apply(this,arguments)}))}function D(t,e,n){var r=this,a=[],o=!1;if(void 0!==n&&(a=[],n.middleware&&(a=a.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(a=a.concat(t.options.middleware))})),a=a.map(function(t){return"function"==typeof t?t:("function"!=typeof w.a[t]&&(o=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),w.a[t])}),!o)return Object(k.i)(a,e)}function S(t,e){Object(k.c)(t,function(t,e,n,r){return"object"!==(void 0===t?"undefined":s()(t))||t.options||((t=y.default.extend(t))._Ctor=t,n.components[r]=t),t})}function U(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?_.a.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(R.context)),this.setLayout(e)}function W(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||y.default.nextTick(function(){var e=[];Object(k.f)(t,e).forEach(function(n,r){if(n&&-1!==t.matched[e[r]].path.indexOf(":")&&n.constructor._dataRefresh&&E[r]===n.constructor._path&&"function"==typeof n.constructor.options.data){var a=n.constructor.options.data.call(n);for(var o in a)y.default.set(n.$data,o,a[o])}}),U.call(n,t)})}function B(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),O.afterEach(function(e,n){y.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}Object(_.b)().then($).catch(function(t){"ERR_REDIRECT"!==t.message&&console.error("[nuxt] Error while initializing app",t)})},To1F:function(t,e,n){"use strict";var r=n("Waac"),a=n("J1QK"),o=!1;var i=function(t){o||n("Kz7D")},s=n("VU/8")(r.a,a.a,!1,i,"data-v-d5ea9138",null);s.options.__file="layouts/error.vue",e.a=s.exports},WF89:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"state",function(){return o}),n.d(e,"mutations",function(){return i});var r=n("ty/g"),a=n.n(r),o=function(){return{sceneLoaded:!1,legoLoaded:!1,planetLoaded:!1,ayaTeam:a.a}},i={loadScene:function(t){t.sceneLoaded=!0},loadLego:function(t){t.legoLoaded=!0},loadPlanet:function(t){t.planetLoaded=!0}}},WRRc:function(t,e,n){"use strict";e.a={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}}},WSDL:function(t,e,n){"use strict";var r=n("/5sW");e.a={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,duration:5e3,height:"2px",color:"#EBB815",failedColor:"red"}},methods:{start:function(){var t=this;return this.show=!0,this.canSuccess=!0,this._timer&&(clearInterval(this._timer),this.percent=0),this._cut=1e4/Math.floor(this.duration),this._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,setTimeout(function(){t.show=!1,r.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}}},Waac:function(t,e,n){"use strict";var r=n("BbWT"),a=n.n(r);e.a={mounted:function(){var t=document.getElementById("scene");new a.a(t)}}},Wq0Q:function(t,e){"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js",{scope:"/"}).then(function(t){window.$sw=t}).catch(function(t){console.error("Service worker registration failed:",t)}):console.warn("Service workers are not supported.")},"YE/a":function(t,e,n){"use strict";var r=n("/5sW"),a=n("I0MY"),o=n.n(a);r.default.use(o.a)},YLfZ:function(t,e,n){"use strict";e.a=function(t,e){var n=t.options.data||b;if(!e&&t.options.hasAsyncData)return;t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)},e.l=g,e.e=y,e.f=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))},e.c=w,e.k=_,n.d(e,"h",function(){return j}),n.d(e,"m",function(){return $}),e.i=function t(e,n){if(!e.length||n._redirected||n._errored)return d.a.resolve();return E(e[0],n).then(function(){return t(e.slice(1),n)})},e.j=E,e.d=function(t,e){var n=window.location.pathname;if("hash"===e)return window.location.hash.replace(/^#\//,"");t&&0===n.indexOf(t)&&(n=n.slice(t.length));return(n||"/")+window.location.search+window.location.hash},e.b=function(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===i()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",i=n||{},s=r||{},u=s.pretty?O:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l,d=i[f.name];if(null==d){if(f.optional){f.partial&&(o+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(d)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+a()(d)+"`");if(0===d.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var p=0;p<d.length;p++){if(l=u(d[p]),!e[c].test(l))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+a()(l)+"`");o+=(0===p?f.prefix:f.delimiter)+l}}else{if(l=f.asterisk?encodeURI(d).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):u(d),!e[c].test(l))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+l+'"');o+=f.prefix+l}}else o+=f}return o}}(function(t,e){var n,r=[],a=0,o=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=R.exec(t));){var u=n[0],c=n[1],f=n.index;if(i+=t.slice(o,f),o=f+u.length,c)i+=c[1];else{var l=t[o],d=n[2],p=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var b=null!=d&&null!=l&&l!==d,g="+"===v||"*"===v,y="?"===v||"*"===v,w=n[2]||s,_=h||m;r.push({name:p||a++,prefix:d||"",delimiter:w,optional:y,repeat:g,partial:b,asterisk:!!x,pattern:_?A(_):x?".*":"[^"+T(w)+"]+?"})}}o<t.length&&(i+=t.substr(o));i&&r.push(i);return r}(t,e))},e.g=function(t,e){var n={},r=v()({},t,e);for(var a in r)String(t[a])!==String(e[a])&&(n[a]=!0);return n};var r=n("mvHQ"),a=n.n(r),o=n("pFYg"),i=n.n(o),s=n("Xxa5"),u=n.n(s),c=n("exGp"),f=n.n(c),l=n("//Fk"),d=n.n(l),p=n("fZjL"),h=n.n(p),m=n("Dd8w"),v=n.n(m),x=n("/5sW"),b=function(){return{}};function g(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=x.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return[].concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return h()(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r,n)})}))}function _(t){var e,n=this;return d.a.all(w(t,(e=f()(u.a.mark(function t(e,r,a,o){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",a.components[o]=g(e));case 5:case"end":return t.stop()}},t,n)})),function(t,n,r,a){return e.apply(this,arguments)})))}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var k,C,j=(k=f()(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",v()({},e,{meta:y(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)})),function(t){return k.apply(this,arguments)}),$=(C=f()(u.a.mark(function t(e,n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context){t.next=14;break}t.t0=!0,t.t1=e,t.t2=e.store,t.t3=n.payload,t.t4=n.error,t.t5={baseUrl:"aya-experience.com"},e.context={get isServer(){return console.warn("context.isServer has been deprecated, please use process.server instead."),!1},get isClient(){return console.warn("context.isClient has been deprecated, please use process.client instead."),!0},isStatic:t.t0,isDev:!1,isHMR:!1,app:t.t1,store:t.t2,payload:t.t3,error:t.t4,base:"/",env:t.t5},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=void 0===n?"undefined":i()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},a=void 0===(n=t)?"undefined":i()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=F(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__;case 14:if(e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=22;break}return t.next=21,j(n.route);case 21:e.context.route=t.sent;case 22:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=28;break}return t.next=27,j(n.from);case 27:e.context.from=t.sent;case 28:case"end":return t.stop()}},t,this)})),function(t,e){return C.apply(this,arguments)});function E(t,e){var n=void 0;return(n=2===t.length?new d.a(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof d.a||"function"==typeof n.then)||(n=d.a.resolve(n)),n}var R=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function O(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function T(t){return t.replace(/([.+*?=^!:()[\]|\/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function F(t,e){var n=void 0,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o=t.split("/"),i=(n?n+"://":"//")+o.shift(),s=o.filter(Boolean).join("/"),u=void 0;return 2===(o=s.split("#")).length&&(s=o[0],u=o[1]),i+=s?"/"+s:"",e&&"{}"!==a()(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return h()(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=u?"#"+u:""}},lFGQ:function(t,e,n){var r=n("FOeY");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n("rjj0")("ae36e92c",r,!1,{sourceMap:!1})},mtxM:function(t,e,n){"use strict";e.a=function(){return new i.default({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:C,routes:[{path:"/work",component:s,name:"work"},{path:"/vision",component:u,name:"vision",children:[{path:"workflow",component:c,name:"vision-workflow"},{path:"tech",component:f,name:"vision-tech"},{path:"intent",component:l,name:"vision-intent"},{path:"creative",component:d,name:"vision-creative"},{path:"concept",component:p,name:"vision-concept"},{path:"craft",component:h,name:"vision-craft"},{path:"gui",component:m,name:"vision-gui"},{path:"intro",component:v,name:"vision-intro"},{path:"user",component:x,name:"vision-user"}]},{path:"/mentions",component:b,name:"mentions"},{path:"/contact",component:g,name:"contact"},{path:"/agence",component:y,name:"agence"},{path:"/team",component:w,name:"team"},{path:"/work/:slug",component:_,name:"work-slug"},{path:"/",component:k,name:"index"}],fallback:!1})};var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("/ocq");o.default.use(i.default);var s=function(){return n.e(4).then(n.bind(null,"SFCp")).then(function(t){return t.default||t})},u=function(){return n.e(3).then(n.bind(null,"gBum")).then(function(t){return t.default||t})},c=function(){return n.e(16).then(n.bind(null,"OSuj")).then(function(t){return t.default||t})},f=function(){return n.e(8).then(n.bind(null,"aJUO")).then(function(t){return t.default||t})},l=function(){return n.e(9).then(n.bind(null,"ZWnQ")).then(function(t){return t.default||t})},d=function(){return n.e(13).then(n.bind(null,"qxTT")).then(function(t){return t.default||t})},p=function(){return n.e(14).then(n.bind(null,"lZgE")).then(function(t){return t.default||t})},h=function(){return n.e(11).then(n.bind(null,"M7m8")).then(function(t){return t.default||t})},m=function(){return n.e(10).then(n.bind(null,"QAYC")).then(function(t){return t.default||t})},v=function(){return n.e(15).then(n.bind(null,"fXxB")).then(function(t){return t.default||t})},x=function(){return n.e(7).then(n.bind(null,"7fif")).then(function(t){return t.default||t})},b=function(){return n.e(12).then(n.bind(null,"kkBL")).then(function(t){return t.default||t})},g=function(){return n.e(0).then(n.bind(null,"fBFx")).then(function(t){return t.default||t})},y=function(){return n.e(2).then(n.bind(null,"H4x2")).then(function(t){return t.default||t})},w=function(){return n.e(6).then(n.bind(null,"FsCi")).then(function(t){return t.default||t})},_=function(){return n.e(5).then(n.bind(null,"HVoq")).then(function(t){return t.default||t})},k=function(){return n.e(1).then(n.bind(null,"/TYz")).then(function(t){return t.default||t})};window.history.scrollRestoration="manual";var C=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new a.a(function(e){window.$nuxt.$once("triggerScroll",function(){t.hash&&document.querySelector(t.hash)&&(r={selector:t.hash}),e(r)})})}},qcny:function(t,e,n){"use strict";n.d(e,"b",function(){return q});var r=n("Xxa5"),a=n.n(r),o=n("//Fk"),i=(n.n(o),n("C4MV")),s=n.n(i),u=n("woOf"),c=n.n(u),f=n("Dd8w"),l=n.n(f),d=n("exGp"),p=n.n(d),h=n("MU8w"),m=(n.n(h),n("/5sW")),v=n("p3jY"),x=n.n(v),b=n("mtxM"),g=n("0F0d"),y=n("HBB+"),w=n("WRRc"),_=n("To1F"),k=n("Hot+"),C=n("yTq1"),j=n("YLfZ"),$=n("J2Ti"),E=n("Wq0Q"),R=n.n(E),O=n("YE/a"),T=n("8bcE"),A=n.n(T),F=n("sgXw");n.d(e,"a",function(){return _.a});var L,q=(L=p()(a.a.mark(function t(e){var n,r,o,i,u,f,d;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(b.a)(),(r=Object($.a)()).$router=n,o=l()({router:n,store:r,nuxt:{defaultTransition:D,transitions:[D],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?c()({},D,{name:t}):c()({},D,t):D}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},C.a),r.app=o,i=e?e.next:function(t){return o.router.push(t)},u=void 0,e?u=n.resolve(e.url).route:(f=Object(j.d)(n.options.base),u=n.resolve(f).route),t.next=10,Object(j.m)(o,{route:u,next:i,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 10:if(d=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";m.default[n]||(m.default[n]=!0,m.default.use(function(){m.default.prototype.hasOwnProperty(t)||s()(m.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),"function"!=typeof R.a){t.next=16;break}return t.next=16,R()(o.context,d);case 16:if("function"!=typeof O.default){t.next=19;break}return t.next=19,Object(O.default)(o.context,d);case 19:if("function"!=typeof A.a){t.next=22;break}return t.next=22,A()(o.context,d);case 22:if("function"!=typeof F.default){t.next=25;break}return t.next=25,Object(F.default)(o.context,d);case 25:t.next=28;break;case 28:return t.abrupt("return",{app:o,router:n,store:r});case 29:case"end":return t.stop()}},t,this)})),function(t){return L.apply(this,arguments)});m.default.component(g.a.name,g.a),m.default.component(y.a.name,y.a),m.default.component(w.a.name,w.a),m.default.component(k.a.name,k.a),m.default.use(x.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var D={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"}},sgXw:function(t,e,n){"use strict";var r=n("/5sW"),a=n("mmUs"),o=n.n(a),i=n("BCUK"),s=n.n(i),u=n("SLdq"),c=n.n(u),f=n("DZXR"),l=n.n(f);r.default.use(o.a),r.default.use(s.a),r.default.use(c.a),r.default.use(l.a)},sq1o:function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="sq1o"},"ty/g":function(t,e){t.exports=[{name:"Marvin",role:"",img:"f4548e8d68fed397e7716cc60beb847a22c32899_marvin.jpg"},{name:"Matthieu Lux",role:"AYA Director",img:"4a6a58d0d03cf11311ce504815bd6163f46ba13a_matthieu.jpg"},{name:"Justine Gaudin",role:"Consultante UX/UI Design",img:"f6460ed72b1fa9f99306aa07a3a94f1dd5b622b3_justine.jpg"},{name:"Antoine Caron",role:"Web Dev / Teacher",img:"18a57d8a1c273127ecf45fbc890d80c791f3f634_antoine.jpg"},{name:"Laetitia Bonanni",role:"Consultante",img:"719fa832a5cf009bc3984c23f8d1297c6f8ceeb7_laetitia.jpg"},{name:"Jonathan Barthelemy",role:"Consultant",img:"b1143bad25f07dede68bdf613146fd9eab18b009_jon.jpg"},{name:"Nicolas Bardoux",role:"Web Dev",img:"3faca721b1fdc852cee2535586a7eaddbd465aed_nico.jpg"},{name:"Samy Benyoub",role:"Web Dev",img:"35938ce059b0b9ee6d5efd0ff10a6e7580cb394e_samy.jpg"},{name:"Lise Quesnel",role:"",img:"8ac0f3cb20931cbfba440beb03f42964f085a33b_lise.jpg"},{name:"Cyril Renault",role:"UI/UX Designer",img:"013def2711060ecf2962a4976898393ed6630260_cyril.jpg"},{name:"Cecile",role:"UI / UX designer",img:"14fff987b486841f703f33b7644464439af8b9b3_profil-cecile.png"},{name:"Clemence Piteau",role:"UX/UI designer",img:"efb1b499cd22c5362062c52769df3ce1a9abc436_clemence.jpg"},{name:"Julie Planque",role:"Developpeur",img:"5886358f0cc0b210ef8cc15e8fff8e2ae6a024c0_julie.jpg"},{name:"Florent Berthelot",role:"Lead Dev",img:"b4284e03eb2f010857a8d11a0efafa927d555d73_florent.jpg"},{name:"Isabelle Ferry",role:"UX/UI Designer",img:"ffa18d1d7089dcd191b26fb6c4b67604ab60d9eb_isa.jpeg"},{name:"Olivier Ghafari",role:"UX/UI Designer",img:"a238b6c73a789b8f11e7b9a78d0892d9398018ba_olivier.jpg"},{name:"Andres Perez Florez",role:"UX/UI Designer",img:"b948cc3269996f22c4d9345f46fcb14e78921088_andres.jpg"},{name:"Houbeb Ben Othmene",role:"Consultant",img:"0e9f0d78b225bfb8816e090165cceb247338aa9a_houbeb.jpg"}]},unZF:function(t,e,n){"use strict";var r=n("BO1k"),a=n.n(r),o=n("sq1o"),i=o.keys();function s(t){var e=o(t);return e.default?e.default:e}var u={},c=!0,f=!1,l=void 0;try{for(var d,p=a()(i);!(c=(d=p.next()).done);c=!0){var h=d.value;u[h.replace(/^\.\//,"").replace(/\.(js)$/,"")]=s(h)}}catch(t){f=!0,l=t}finally{try{!c&&p.return&&p.return()}finally{if(f)throw l}}e.a=u},wK1Z:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,'.container[data-v-d5ea9138]{position:fixed;height:100%;width:100%;background-image:url("/404/fond.png");background-color:#242021}.container[data-v-d5ea9138],.wrapper[data-v-d5ea9138]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.wrapper[data-v-d5ea9138]{height:80vh;width:80vw}.block-text[data-v-d5ea9138]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;position:relative!important;top:-100px!important;left:110px!important}@font-face{font-family:Press Start\\ 2P;font-style:normal;font-weight:1000;src:url(https://fonts.gstatic.com/s/pressstart2p/v6/e3t4euO8T-267oIAQAu6jDQyK3nVivNm4I81.woff2) format("woff2")}.block-text__title[data-v-d5ea9138]{font-family:Press Start\\ 2P;font-size:96px;font-size:6rem;margin-bottom:4px;margin-top:0}.block-text__text[data-v-d5ea9138]{font-family:Courier New,Courier,monospace;font-size:48px;font-size:3rem;margin-top:-45px;margin-bottom:0}.block-text__img[data-v-d5ea9138]{height:70px;width:auto;left:-110px;position:relative}.astro[data-v-d5ea9138]{height:45vh;width:auto}.astro-container[data-v-d5ea9138]{top:100px!important}@media (max-width:800px){.wrapper[data-v-d5ea9138]{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-ms-flex-pack:distribute;justify-content:space-around}.block-text[data-v-d5ea9138]{top:0!important;left:0!important}.block-text__img[data-v-d5ea9138]{display:none}.block-text__text[data-v-d5ea9138],.block-text__title[data-v-d5ea9138]{margin:auto}.astro-container[data-v-d5ea9138]{top:0!important}}',""])},yTq1:function(t,e,n){"use strict";var r=n("//Fk"),a=n.n(r),o=n("/5sW"),i=n("F88d"),s={_default:function(){return n.e(17).then(n.bind(null,"Ma2J")).then(function(t){return t.default||t})}},u={};e.a={head:{title:"AYA code & design",htmlAttrs:{lang:"fr"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"AYA code & design the digital agency by Zenika"},{name:"theme-color",content:"#ffffff"},{hid:"mobile-web-app-capable",name:"mobile-web-app-capable",content:"yes"},{hid:"apple-mobile-web-app-title",name:"apple-mobile-web-app-title",content:"aya-app"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"},{hid:"og:title",name:"og:title",property:"og:title",content:"aya-app"},{hid:"og:description",name:"og:description",property:"og:description",content:"AYA Website & App"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"manifest",href:"/manifest.json"},{rel:"mask-icon",href:"/safari-pinned-tab.svg",color:"#000000"},{rel:"prefetch",href:"/photos/mac.jpg"},{rel:"prefetch",href:"/photos/matrix.jpg"},{rel:"prefetch",href:"/photos/rails.jpg"},{rel:"prefetch",href:"/agence/nebuleuse1.png"},{rel:"prefetch",href:"/agence/nebuleuse2.png"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt");return t("div",{domProps:{id:"__nuxt"}},[n,t("transition",{props:{name:"layout",mode:"out-in"}},[t("div",{domProps:{id:"__layout"},key:this.layoutName},[r])])])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){o.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){o.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){t&&u["_"+t]||(t="default"),this.layoutName=t;var e="_"+t;return this.layout=u[e],this.layout},loadLayout:function(t){var e=this;t&&(s["_"+t]||u["_"+t])||(t="default");var n="_"+t;return u[n]?a.a.resolve(u[n]):s[n]().then(function(t){return u[n]=t,delete s[n],u[n]}).catch(function(t){if(e.$nuxt)return e.$nuxt.error({statusCode:500,message:t.message})})}},components:{NuxtLoading:i.a}}}},["T23V"]);