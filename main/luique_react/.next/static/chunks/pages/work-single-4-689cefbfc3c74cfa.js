(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{2501:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-single-4",function(){return t(8724)}])},4564:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){let{children:s}=e;return s},s.suspense=function(){let e=Error(l.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=l.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,t(2648).Z)(t(7294));var l=t(2983)},7645:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){let t=n.default,a={loading:e=>{let{error:s,isLoading:t,pastDelay:l}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a=l({},a,e)),a=l({},a,s);let i=a.loader,r=()=>i().then(c);if(a.loadableGenerated&&delete(a=l({},a,a.loadableGenerated,{loader:r})).loadableGenerated,"boolean"==typeof a.ssr){if(!a.ssr)return delete a.ssr,o(r,a);delete a.ssr}return t(a)},s.noSSR=o;var l=t(6495).Z,a=t(2648).Z,i=(0,t(1598).Z)(t(7294)),n=a(t(4588)),r=a(t(4564));function c(e){return{default:e.default||e}}function o(e,s){delete s.webpack,delete s.modules;let t=i.lazy(e),l=s.loading,a=i.default.createElement(l,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>i.default.createElement(i.Suspense,{fallback:a},i.default.createElement(r.default,null,i.default.createElement(t,Object.assign({},e))))}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},3644:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var l=(0,t(2648).Z)(t(7294));let a=l.default.createContext(null);s.LoadableContext=a},4588:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var l=t(6495).Z,a=(0,t(2648).Z)(t(7294)),i=t(3644);let n=[],r=[],c=!1;function o(e){let s=e(),t={loading:!0,loaded:null,error:null};return t.promise=s.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:s}=this;e.loading&&("number"==typeof s.delay&&(0===s.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},s.delay)),"number"==typeof s.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},s.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,s){this._loadFn=e,this._opts=s,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,s){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},s);t.lazy=a.default.lazy(t.loader);let l=null;function n(){if(!l){let s=new d(e,t);l={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return l.promise()}if(!c){let o=t.webpack?t.webpack():t.modules;o&&r.push(e=>{for(let s of o)if(-1!==e.indexOf(s))return n()})}function u(e){!function(){n();let e=a.default.useContext(i.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(s=>{e(s)})}();let s=a.default.createElement(t.loading,{isLoading:!0,pastDelay:!0,error:null});return a.default.createElement(a.default.Suspense,{fallback:s},a.default.createElement(t.lazy,e))}return u.preload=()=>n(),u.displayName="LoadableComponent",u}(o,e)}function m(e,s){let t=[];for(;e.length;){let l=e.pop();t.push(l(s))}return Promise.all(t).then(()=>{if(e.length)return m(e,s)})}u.preloadAll=()=>new Promise((e,s)=>{m(n).then(e,s)}),u.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(s=>{let t=()=>(c=!0,s());m(r,e).then(t,t)})},window.__NEXT_PRELOADREADY=u.preloadReady,s.default=u},8724:function(e,s,t){"use strict";t.r(s);var l=t(5893),a=t(5152),i=t.n(a),n=t(1664),r=t.n(n),c=t(7294),o=t(2935);i()(()=>t.e(645).then(t.t.bind(t,6645,23)),{loadableGenerated:{webpack:()=>[6645]},ssr:!1});let d=()=>{let[e,s]=(0,c.useState)(!1);return(0,l.jsxs)(o.Z,{pageClassName:"portfolio-template",children:[(0,l.jsxs)("section",{className:"section section-inner started-heading",children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"m-titles align-left",children:[(0,l.jsx)("h1",{className:"m-title splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,l.jsx)("span",{children:"oShop"})}),(0,l.jsx)("div",{className:"m-subtitle splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,l.jsx)("span",{children:"D\xe9veloppement web, Gestion de donn\xe9es"})})]})}),(0,l.jsx)("div",{className:"v-line v-line-right v-line-top",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"row",children:(0,l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-8 col-lg-8",children:(0,l.jsxs)("div",{className:"m-details",children:[(0,l.jsxs)("div",{className:"details-label",children:[(0,l.jsx)("span",{children:"Fait en :"}),(0,l.jsx)("strong",{children:(0,l.jsx)("span",{children:"2024"})})]}),(0,l.jsxs)("div",{className:"details-label",children:[(0,l.jsx)("span",{children:"Technologies :"}),(0,l.jsx)("strong",{children:(0,l.jsx)("span",{children:"HTML, CSS, JavaScript, PHP, SQL"})})]}),(0,l.jsxs)("div",{className:"details-label",children:[(0,l.jsx)("span",{children:"Categories:"}),(0,l.jsx)("strong",{children:(0,l.jsx)("span",{children:"D\xe9veloppement web, Gestion de donn\xe9es"})})]})]})})})})})]}),(0,l.jsx)("div",{className:"section section-inner",children:(0,l.jsx)("div",{className:"m-image-large",children:(0,l.jsx)("div",{className:"image",children:(0,l.jsx)("div",{className:"img js-parallax",style:{backgroundImage:"url(/assets/images/oshop.png)"}})})})}),(0,l.jsx)("section",{className:"section section-inner",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,l.jsx)("div",{className:"post-content",children:(0,l.jsx)("h4",{children:"Concept & fonctionnalit\xe9s"})})}),(0,l.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"post-content",children:(0,l.jsx)("p",{children:"oShop est une boutique en ligne de chaussures que j'ai d\xe9velopp\xe9e pour regrouper plusieurs marques ind\xe9pendantes fictives. L'objectif \xe9tait de permettre \xe0 ces marques de se connecter directement avec les clients sans d\xe9pendre de distributeurs tiers."})})}),(0,l.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"post-content",children:(0,l.jsx)("p",{children:"Le site comprend une page d'accueil avec des cat\xe9gories de produits, des pages d\xe9di\xe9es pour chaque cat\xe9gorie, type de produit et marque, et des fonctionnalit\xe9s de filtrage. J'ai \xe9galement mis en place un syst\xe8me de gestion du panier d'achat et un back-office pour les administrateurs, permettant une gestion efficace des commandes et du contenu."})})})]})})}),(0,l.jsx)("div",{className:"section section-inner",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"m-gallery",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"works-item",children:(0,l.jsx)("div",{className:"image scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,l.jsx)("div",{className:"img",children:(0,l.jsx)("a",{href:"assets/images/oshop-ex1.png",className:"has-popup-image",children:(0,l.jsx)("img",{decoding:"async",src:"assets/images/oshop-ex1.png",alt:"Item 1",loading:"lazy"})})})})})}),(0,l.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"works-item",children:(0,l.jsx)("div",{className:"image scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,l.jsx)("div",{className:"img",children:(0,l.jsx)("a",{href:"assets/images/oshop-ex2.png",className:"has-popup-image",children:(0,l.jsx)("img",{decoding:"async",src:"assets/images/oshop-ex2.png",alt:"Item 2",loading:"lazy"})})})})})})]})})})}),(0,l.jsx)("section",{className:"section section-inner",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,l.jsx)("div",{className:"post-content",children:(0,l.jsx)("h4",{children:"Conception & impact"})})}),(0,l.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"post-content",children:(0,l.jsx)("p",{children:"Pour d\xe9velopper oShop, j'ai utilis\xe9 la m\xe9thodologie Scrum, organisant le d\xe9veloppement en sprints it\xe9ratifs. J'ai utilis\xe9 des technologies modernes, assurant une navigation fluide et intuitive entre les diff\xe9rentes sections du site."})})}),(0,l.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"post-content",children:(0,l.jsx)("p",{children:"oShop offre une exp\xe9rience d'achat en ligne fluide et agr\xe9able, facilitant la navigation entre les produits et les marques. Ce projet a d\xe9montr\xe9 ma capacit\xe9 \xe0 d\xe9velopper des solutions e-commerce complexes et \xe0 g\xe9rer efficacement les donn\xe9es utilisateur. Il a \xe9galement mis en avant mes comp\xe9tences en gestion de projet et en d\xe9veloppement web, essentielles pour le succ\xe8s de tout site de vente en ligne."})})})]})})}),(0,l.jsx)("div",{className:"section section-inner m-page-navigation",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("div",{className:"h-titles h-navs",children:(0,l.jsx)(r(),{legacyBehavior:!0,href:"/work-single-5",children:(0,l.jsxs)("a",{children:[(0,l.jsx)("span",{className:"nav-arrow scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,l.jsx)("span",{children:"Projet suivant :"})}),(0,l.jsx)("span",{className:"h-title splitting-text-anim-2 scroll-animate","data-splitting":"chars","data-animate":"active",children:(0,l.jsx)("span",{children:"O'Blog"})})]})})})})})]})};s.default=d},5152:function(e,s,t){e.exports=t(7645)}},function(e){e.O(0,[239,935,774,888,179],function(){return e(e.s=2501)}),_N_E=e.O()}]);