(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[266],{4658:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work-single-6",function(){return t(6650)}])},4564:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){let{children:s}=e;return s},s.suspense=function(){let e=Error(a.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=a.NEXT_DYNAMIC_NO_SSR_CODE,e},(0,t(2648).Z)(t(7294));var a=t(2983)},7645:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,s){let t=n.default,l={loading:e=>{let{error:s,isLoading:t,pastDelay:a}=e;return null}};e instanceof Promise?l.loader=()=>e:"function"==typeof e?l.loader=e:"object"==typeof e&&(l=a({},l,e)),l=a({},l,s);let i=l.loader,r=()=>i().then(c);if(l.loadableGenerated&&delete(l=a({},l,l.loadableGenerated,{loader:r})).loadableGenerated,"boolean"==typeof l.ssr){if(!l.ssr)return delete l.ssr,o(r,l);delete l.ssr}return t(l)},s.noSSR=o;var a=t(6495).Z,l=t(2648).Z,i=(0,t(1598).Z)(t(7294)),n=l(t(4588)),r=l(t(4564));function c(e){return{default:e.default||e}}function o(e,s){delete s.webpack,delete s.modules;let t=i.lazy(e),a=s.loading,l=i.default.createElement(a,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1});return e=>i.default.createElement(i.Suspense,{fallback:l},i.default.createElement(r.default,null,i.default.createElement(t,Object.assign({},e))))}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),e.exports=s.default)},3644:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.LoadableContext=void 0;var a=(0,t(2648).Z)(t(7294));let l=a.default.createContext(null);s.LoadableContext=l},4588:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a=t(6495).Z,l=(0,t(2648).Z)(t(7294)),i=t(3644);let n=[],r=[],c=!1;function o(e){let s=e(),t={loading:!0,loaded:null,error:null};return t.promise=s.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:s}=this;e.loading&&("number"==typeof s.delay&&(0===s.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},s.delay)),"number"==typeof s.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},s.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,s){this._loadFn=e,this._opts=s,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function m(e){return function(e,s){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},s);t.lazy=l.default.lazy(t.loader);let a=null;function n(){if(!a){let s=new d(e,t);a={getCurrentValue:s.getCurrentValue.bind(s),subscribe:s.subscribe.bind(s),retry:s.retry.bind(s),promise:s.promise.bind(s)}}return a.promise()}if(!c){let o=t.webpack?t.webpack():t.modules;o&&r.push(e=>{for(let s of o)if(-1!==e.indexOf(s))return n()})}function m(e){!function(){n();let e=l.default.useContext(i.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(s=>{e(s)})}();let s=l.default.createElement(t.loading,{isLoading:!0,pastDelay:!0,error:null});return l.default.createElement(l.default.Suspense,{fallback:s},l.default.createElement(t.lazy,e))}return m.preload=()=>n(),m.displayName="LoadableComponent",m}(o,e)}function u(e,s){let t=[];for(;e.length;){let a=e.pop();t.push(a(s))}return Promise.all(t).then(()=>{if(e.length)return u(e,s)})}m.preloadAll=()=>new Promise((e,s)=>{u(n).then(e,s)}),m.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(s=>{let t=()=>(c=!0,s());u(r,e).then(t,t)})},window.__NEXT_PRELOADREADY=m.preloadReady,s.default=m},6650:function(e,s,t){"use strict";t.r(s);var a=t(5893),l=t(5152),i=t.n(l),n=t(1664),r=t.n(n),c=t(7294),o=t(2935);i()(()=>t.e(645).then(t.t.bind(t,6645,23)),{loadableGenerated:{webpack:()=>[6645]},ssr:!1});let d=()=>{let[e,s]=(0,c.useState)(!1);return(0,a.jsxs)(o.Z,{pageClassName:"portfolio-template",children:[(0,a.jsxs)("section",{className:"section section-inner started-heading",children:[(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"m-titles align-left",children:[(0,a.jsx)("h1",{className:"m-title splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,a.jsx)("span",{children:"oCaffe"})}),(0,a.jsx)("div",{className:"m-subtitle splitting-text-anim-1 scroll-animate","data-splitting":"words","data-animate":"active",children:(0,a.jsx)("span",{children:"D\xe9veloppement web"})})]})}),(0,a.jsx)("div",{className:"v-line v-line-right v-line-top",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-8 col-lg-8",children:(0,a.jsxs)("div",{className:"m-details",children:[(0,a.jsxs)("div",{className:"details-label",children:[(0,a.jsx)("span",{children:"Fait en :"}),(0,a.jsx)("strong",{children:(0,a.jsx)("span",{children:"2023"})})]}),(0,a.jsxs)("div",{className:"details-label",children:[(0,a.jsx)("span",{children:"Technologies :"}),(0,a.jsx)("strong",{children:(0,a.jsx)("span",{children:"HTML, CSS, PHP"})})]}),(0,a.jsxs)("div",{className:"details-label",children:[(0,a.jsx)("span",{children:"Cat\xe9gories :"}),(0,a.jsx)("strong",{children:(0,a.jsx)("span",{children:"D\xe9veloppement web"})})]})]})})})})})]}),(0,a.jsx)("div",{className:"section section-inner",children:(0,a.jsx)("div",{className:"m-image-large",children:(0,a.jsx)("div",{className:"image",children:(0,a.jsx)("div",{className:"img js-parallax",style:{backgroundImage:"url(/assets/images/ocaffe.png)"}})})})}),(0,a.jsx)("section",{className:"section section-inner",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,a.jsx)("div",{className:"post-content",children:(0,a.jsx)("h4",{children:"Concept & fonctionnalit\xe9s"})})}),(0,a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,a.jsx)("div",{className:"post-content",children:(0,a.jsx)("p",{children:"oCaffe est un site vitrine que j'ai con\xe7u pour un coffee shop, mettant en avant les produits artisanaux de qualit\xe9 et l'origine locale des ingr\xe9dients. L'objectif \xe9tait de cr\xe9er une plateforme attrayante qui attire les clients et met en valeur les offres uniques du coffee shop."})})}),(0,a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,a.jsx)("div",{className:"post-content",children:(0,a.jsx)("p",{children:"Le site pr\xe9sente les diff\xe9rents produits du coffee shop avec des descriptions d\xe9taill\xe9es et des photos attrayantes. Une section d\xe9di\xe9e informe les clients des horaires d'ouverture, et les utilisateurs peuvent laisser des avis et des commentaires sur les produits. J'ai \xe9galement inclus des informations sur l'origine des ingr\xe9dients et les m\xe9thodes de pr\xe9paration pour engager davantage les clients."})})})]})})}),(0,a.jsx)("div",{className:"section section-inner",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"m-gallery",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,a.jsx)("div",{className:"works-item",children:(0,a.jsx)("div",{className:"image scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("a",{href:"assets/images/ocaffe-ex1.png",className:"has-popup-image",children:(0,a.jsx)("img",{decoding:"async",src:"assets/images/ocaffe-ex1.png",alt:"Item 1",loading:"lazy"})})})})})}),(0,a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,a.jsx)("div",{className:"works-item",children:(0,a.jsx)("div",{className:"image scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("a",{href:"assets/images/ocaffe-ex2.png",className:"has-popup-image",children:(0,a.jsx)("img",{decoding:"async",src:"assets/images/ocaffe-ex2.png",alt:"Item 2",loading:"lazy"})})})})})}),(0,a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,a.jsx)("div",{className:"works-item",children:(0,a.jsx)("div",{className:"image scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,a.jsx)("div",{className:"img",children:(0,a.jsx)("a",{href:"assets/images/ocaffe-ex3.png",className:"has-popup-image",children:(0,a.jsx)("img",{decoding:"async",src:"assets/images/ocaffe-ex3.png",alt:"Item 3",loading:"lazy"})})})})})})]})})})}),(0,a.jsx)("section",{className:"section section-inner",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12",children:(0,a.jsx)("div",{className:"post-content",children:(0,a.jsx)("h4",{children:"Conception & impact"})})}),(0,a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,a.jsx)("div",{className:"post-content",children:(0,a.jsx)("p",{children:"J'ai utilis\xe9 des technologies front-end modernes pour cr\xe9er une interface utilisateur attrayante et intuitive. Le back-end g\xe8re les donn\xe9es des produits et des avis des utilisateurs. J'ai \xe9galement mis en place des fonctionnalit\xe9s de recherche pour aider les clients \xe0 trouver rapidement les informations dont ils ont besoin."})})}),(0,a.jsx)("div",{className:"col-xs-12 col-sm-6 col-md-6 col-lg-6",children:(0,a.jsx)("div",{className:"post-content",children:(0,a.jsx)("p",{children:"oCaffe offre une exp\xe9rience utilisateur agr\xe9able et engageante, mettant en avant les produits de mani\xe8re attrayante. Ce projet a d\xe9montr\xe9 ma capacit\xe9 \xe0 d\xe9velopper des sites vitrines efficaces qui non seulement attirent les clients mais les engagent \xe9galement. Il a \xe9galement mis en avant mes comp\xe9tences en d\xe9veloppement web et en gestion de contenu, essentielles pour le succ\xe8s de tout site vitrine."})})})]})})}),(0,a.jsx)("div",{className:"section section-inner m-page-navigation",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"h-titles h-navs",children:(0,a.jsx)(r(),{legacyBehavior:!0,href:"/work-single-7",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("span",{className:"nav-arrow scrolla-element-anim-1 scroll-animate","data-animate":"active",children:(0,a.jsx)("span",{children:"Projet suivant :"})}),(0,a.jsx)("span",{className:"h-title splitting-text-anim-2 scroll-animate","data-splitting":"chars","data-animate":"active",children:(0,a.jsx)("span",{children:"ToDo List"})})]})})})})})]})};s.default=d},5152:function(e,s,t){e.exports=t(7645)}},function(e){e.O(0,[239,935,774,888,179],function(){return e(e.s=4658)}),_N_E=e.O()}]);