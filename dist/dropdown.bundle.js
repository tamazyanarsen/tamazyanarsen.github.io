/*! For license information please see dropdown.bundle.js.LICENSE.txt */
(()=>{var t={705:(t,e,i)=>{var s=i(639).Symbol;t.exports=s},239:(t,e,i)=>{var s=i(705),r=i(607),o=i(333),n=s?s.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":n&&n in Object(t)?r(t):o(t)}},561:(t,e,i)=>{var s=i(990),r=/^\s+/;t.exports=function(t){return t?t.slice(0,s(t)+1).replace(r,""):t}},957:(t,e,i)=>{var s="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=s},607:(t,e,i)=>{var s=i(705),r=Object.prototype,o=r.hasOwnProperty,n=r.toString,l=s?s.toStringTag:void 0;t.exports=function(t){var e=o.call(t,l),i=t[l];try{t[l]=void 0;var s=!0}catch(t){}var r=n.call(t);return s&&(e?t[l]=i:delete t[l]),r}},333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},639:(t,e,i)=>{var s=i(957),r="object"==typeof self&&self&&self.Object===Object&&self,o=s||r||Function("return this")();t.exports=o},990:t=>{var e=/\s/;t.exports=function(t){for(var i=t.length;i--&&e.test(t.charAt(i)););return i}},279:(t,e,i)=>{var s=i(218),r=i(771),o=i(841),n=Math.max,l=Math.min;t.exports=function(t,e,i){var a,c,h,d,u,p,v=0,b=!1,g=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var i=a,s=c;return a=c=void 0,v=e,d=t.apply(s,i)}function m(t){return v=t,u=setTimeout(_,e),b?y(t):d}function $(t){var i=t-p;return void 0===p||i>=e||i<0||g&&t-v>=h}function _(){var t=r();if($(t))return w(t);u=setTimeout(_,function(t){var i=e-(t-p);return g?l(i,h-(t-v)):i}(t))}function w(t){return u=void 0,f&&a?y(t):(a=c=void 0,d)}function A(){var t=r(),i=$(t);if(a=arguments,c=this,p=t,i){if(void 0===u)return m(p);if(g)return clearTimeout(u),u=setTimeout(_,e),y(p)}return void 0===u&&(u=setTimeout(_,e)),d}return e=o(e)||0,s(i)&&(b=!!i.leading,h=(g="maxWait"in i)?n(o(i.maxWait)||0,e):h,f="trailing"in i?!!i.trailing:f),A.cancel=function(){void 0!==u&&clearTimeout(u),v=0,a=p=c=u=void 0},A.flush=function(){return void 0===u?d:w(r())},A}},218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},5:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},448:(t,e,i)=>{var s=i(239),r=i(5);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==s(t)}},771:(t,e,i)=>{var s=i(639);t.exports=function(){return s.Date.now()}},841:(t,e,i)=>{var s=i(561),r=i(218),o=i(448),n=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=s(t);var i=l.test(t);return i||a.test(t)?c(t.slice(2),i?2:8):n.test(t)?NaN:+t}}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class r{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,e)},n=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",e))(i)})(t):t;var l;const a=window.trustedTypes,c=a?a.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(n(t))}else void 0!==t&&e.push(n(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,r;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:d.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,s,r;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==r?r:d.fromAttribute;this._$Ei=n,this[n]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var b;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:v}),(null!==(l=globalThis.reactiveElementVersions)&&void 0!==l?l:globalThis.reactiveElementVersions=[]).push("1.3.2");const g=globalThis.trustedTypes,f=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,m="?"+y,$=`<${m}>`,_=document,w=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,E=/-->/g,z=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,k=/"/g,H=/^(?:script|style|textarea|title)$/i,P=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),O=P(1),L=(P(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),M=new WeakMap,j=_.createTreeWalker(_,129,null,!1),R=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=S;for(let e=0;e<i;e++){const i=t[e];let l,a,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,a=n.exec(i),null!==a);)h=n.lastIndex,n===S?"!--"===a[1]?n=E:void 0!==a[1]?n=z:void 0!==a[2]?(H.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=C):void 0!==a[3]&&(n=C):n===C?">"===a[0]?(n=null!=r?r:S,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?C:'"'===a[3]?k:T):n===k||n===T?n=C:n===E||n===z?n=S:(n=C,r=void 0);const d=n===C&&t[e+1].startsWith("/>")?" ":"";o+=n===S?i+$:c>=0?(s.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+y+d):i+y+(-2===c?(s.push(void 0),e):d)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==f?f.createHTML(l):l,s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,l=this.parts,[a,c]=R(t,e);if(this.el=V.createElement(a,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(y)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(y),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?F:"?"===e[1]?q:"@"===e[1]?K:D})}else l.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(H.test(s.tagName)){const t=s.textContent.split(y),e=t.length-1;if(e>0){s.textContent=g?g.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),j.nextNode(),l.push({type:2,index:++r});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===m)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(y,t+1));)l.push({type:7,index:r}),t+=y.length-1}r++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function N(t,e,i=t,s){var r,o,n,l;if(e===L)return e;let a=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=N(t,a._$AS(t,e.values),a,s)),e}class I{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);j.currentNode=r;let o=j.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new B(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new X(o,this,t)),this.v.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(o=j.nextNode(),n++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,s){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),A(t)?t===U||null==t||""===t?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==L&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==U&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new I(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new V(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new B(this.M(w()),this.M(w()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=N(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const s=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=N(this,s[i+n],e,n),l===L&&(l=this._$AH[n]),o||(o=!A(l)||l!==this._$AH[n]),l===U?t=U:t!==U&&(t+=(null!=l?l:"")+r[n+1]),this._$AH[n]=l}o&&!s&&this.C(t)}C(t){t===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class F extends D{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===U?void 0:t}}const W=g?g.emptyScript:"";class q extends D{constructor(){super(...arguments),this.type=4}C(t){t&&t!==U?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class K extends D{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=N(this,t,e,0))&&void 0!==i?i:U)===L)return;const s=this._$AH,r=t===U&&s!==U||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Z=window.litHtmlPolyfillSupport;var J,G;null==Z||Z(V,B),(null!==(b=globalThis.litHtmlVersions)&&void 0!==b?b:globalThis.litHtmlVersions=[]).push("2.2.5");class Q extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new B(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return L}}Q.finalized=!0,Q._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Q});const Y=globalThis.litElementPolyfillSupport;null==Y||Y({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");const tt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function it(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):et(t,e)}function st(t){return it({...t,state:!0})}function rt(t,e){return(({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(o.finisher=function(e){t(e,s)}),o}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}})({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}var ot;null===(ot=window.HTMLSlotElement)||void 0===ot||ot.prototype.assignedElements;let nt=class extends Q{render(){return O`
            <div></div>
        `}};nt.styles=o`
        div {
            background-color: var(--grey-10);
            width: calc(var(--base-size) / 4);
            height: calc(var(--base-size) * 5);
        }
    `,nt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([tt("tsc-divider")],nt);const lt=t=>(...e)=>({_$litDirective$:t,values:e});class at{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const ct=lt(class extends at{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return L}});var ht=i(279),dt=i.n(ht);const ut=[o`
.border-radius-4 {
    border-radius: var(--border-radius-4);
}

.border-radius-6 {
    border-radius: var(--border-radius-4);
}
`,o`
.display-1 {
    font-size: calc(var(--base-font-size) * 24);
    line-height: calc(var(--base-line-height) * 24);
    font-weight: calc(var(--base-font-weight) * 7 / 5);
}

.display-2 {
    font-size: calc(var(--base-font-size) * 17);
    line-height: calc(var(--base-line-height) * 17);
    font-weight: calc(var(--base-font-weight) * 7 / 5);
}

.head-1 {
    font-size: calc(var(--base-font-size) * 14);
    line-height: calc(var(--base-line-height) * 35 / 3);
    font-weight: var(--base-font-weight);
}

.head-2 {
    font-size: calc(var(--base-font-size) * 12);
    line-height: calc(var(--base-line-height) * 10);
    font-weight: var(--base-font-weight);
}

.head-3 {
    font-size: calc(var(--base-font-size) * 9);
    line-height: calc(var(--base-line-height) * 23 / 3);
    font-weight: var(--base-font-weight);
}

.head-4 {
    font-size: calc(var(--base-font-size) * 8);
    line-height: calc(var(--base-line-height) * 20 / 3);
    font-weight: var(--base-font-weight);
}

.head-5 {
  font-size: calc(var(--base-font-size) * 7);
  line-height: calc(var(--base-line-height) * 5);
  font-weight: var(--base-font-weight);
}

.head-6 {
  font-size: calc(var(--base-font-size) * 6);
  line-height: calc(var(--base-line-height) * 5);
  font-weight: var(--base-font-weight);
}

.body-1 {
    font-size: calc(var(--base-font-size) * 9);
    line-height: calc(var(--base-line-height) * 23 / 3);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
}

.body-2 {
    font-size: calc(var(--base-font-size) * 8);
    line-height: calc(var(--base-line-height) * 20 / 3);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
}

.body-3 {
    font-size: calc(var(--base-font-size) * 7);
    line-height: calc(var(--base-line-height) * 6);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
}

.subtitle-2 {
    font-size: calc(var(--base-font-size) * 6);
    line-height: calc(var(--base-line-height) * 5);
    font-weight: calc(var(--base-font-weight) * 4 / 5);
}

.overline {
    font-size: calc(var(--base-font-size) * 6);
    line-height: calc(var(--base-line-height) * 5);
    font-weight: var(--base-font-weight);
}

.menu {
    font-size: calc(var(--base-font-size) * 11 / 2);
    line-height: calc(var(--base-line-height) * 14 / 3);
    font-weight: var(--base-font-weight);
}
`,o`
.level-1 {
    background: white;
    box-shadow: 0 calc(var(--base-size) / 4) var(--base-size) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-2 {
    background: white;
    box-shadow: 0 calc(var(--base-size) / 4) calc(var(--base-size) * 15 / 4) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-3 {
    background: white;
    box-shadow: 0 0 calc(var(--base-size) * 10) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-4 {
    background: white;
    box-shadow: 0 0 calc(var(--base-size) * 55 / 4) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}
`,o`
        * {
            box-sizing: border-box;
        }`],pt={bubbles:!0,composed:!0},vt=(t,e)=>new CustomEvent(t,{...pt,detail:e});var bt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let gt=class extends Q{constructor(){super(...arguments),this.items=[],this.itemHeight="10em",this.maxHeight="calc(var(--base-size) * 91)",this.scrollbarHeight=0}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.scrollbarHeight=(this.container?.clientHeight||0)/3,this.container?.style.setProperty("--scroll-height",`${this.scrollbarHeight}px`),this.container?.addEventListener("scroll",dt()(this.scrollContainer.bind(this),150))}),100)}scrollContainer(){if(this.container){const t=this.container?.scrollTop,e=this.container?.scrollHeight;t+this.scrollbarHeight>=.6*e&&this.dispatchEvent(vt("scrollPaginate"))}}render(){return O`
        <div class="container level-2" style=${ct({maxHeight:this.maxHeight})}>
            <slot></slot>
        </div>
        `}};gt.styles=[ut,o`
            .container {
                --scroll-height: calc(var(--base-size) * 20);
                overflow: auto;
                width: 100%;
            }

            .container::-webkit-scrollbar {
                background-color: white;
                width: calc(var(--base-size) * 3 / 2);
            }

            .container::-webkit-scrollbar-thumb {
                background: var(--grey-70);
                height: var(--scroll-height);
                border-radius: calc(var(--border-radius-4) * 4);
            }

            .container::-webkit-scrollbar-track {
                background: white;
            }
        `],bt([it({type:Array})],gt.prototype,"items",void 0),bt([it({type:String})],gt.prototype,"itemHeight",void 0),bt([it({type:String})],gt.prototype,"maxHeight",void 0),bt([rt(".container")],gt.prototype,"container",void 0),gt=bt([tt("tsc-scroll")],gt);const ft=new Array(200).fill(0).map(((t,e)=>({value:Math.random(),label:(e+1).toString()})));var yt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let mt=class extends Q{constructor(){super(...arguments),this._items=[],this.itemLimit=50,this.maxHeight="calc(var(--base-size) * 25)",this._visibleItems=[],this.offset=0}set items(t){console.log("get new items",t),this._items=t,this.offset=0,this.getNextItems()}get items(){return this._items}set visibleItems(t){const e=this.visibleItems.slice();this._visibleItems=t,this.offset+=t.length,this.requestUpdate("visibleItems",e)}get visibleItems(){return this._visibleItems}emitSelectedValue(t){this.dispatchEvent(vt("selectedValue",{value:t}))}getNextItems(){let t=this.items.slice(this.offset,this.itemLimit+this.offset);0===t.length&&this.paginateFunction&&(t=this.paginateFunction()),this.visibleItems=[...this.visibleItems,...t]}render(){return O`
        <tsc-scroll .maxHeight=${this.maxHeight} @scrollPaginate=${this.getNextItems}>
            <div class="list">
                ${this.visibleItems.map((t=>O`
                <div class="list-item body-2" @click=${()=>this.emitSelectedValue(t)}>
                    ${t.label}
                </div>
                `))}
            </div>
        </tsc-scroll>
        `}};mt.styles=o`
    * {
        box-sizing: border-box;
    }
    
    .list {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .list-item {
        padding-left: var(--space-16);
        padding-top: var(--space-16);
        padding-bottom: var(--space-16);
        height: calc(var(--base-size) * 13);
        cursor: pointer;
    }

    .list-item:hover {
        background: var(--grey-10);
    }
    `,yt([it({type:Number})],mt.prototype,"itemLimit",void 0),yt([it({type:String})],mt.prototype,"maxHeight",void 0),yt([it({type:Array})],mt.prototype,"items",null),yt([it({type:Function})],mt.prototype,"paginateFunction",void 0),yt([st()],mt.prototype,"visibleItems",null),mt=yt([tt("tsc-list")],mt);const $t=lt(class extends at{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const r=t.element.classList;this.et.forEach((t=>{t in e||(r.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.et.add(t)):(r.remove(t),this.et.delete(t)))}return L}});var _t;!function(t){t.M="M",t.L="L",t.S="S",t.XS="XS"}(_t||(_t={}));const wt=[ut,o`
        .input-wrapper {
            height: calc(var(--base-size) * 12);
            width: 22em;
            position: relative;
        }
        #input {
            width: 100%;
            height: 100%;
            padding-left: var(--space-12);
            padding-top: var(--space-16);
            padding-bottom: var(--space-16);
            border: none;
            border-bottom: calc(var(--base-size)/4) solid var(--grey-30);
            color: var(--grey-200);
            outline: none;
        }
        #input:hover {
            border-bottom: calc(var(--base-size)/4) solid var(--grey-100);
        }
        #input:focus {
            border-bottom: calc(var(--base-size)/4) solid var(--blue-120);
        }
        #input.disabled {
            color: var(--grey-130); 
            background-color: var(--grey-10);
            border-radius: var(--border-radius-4) var(--border-radius-4) 0 0;
            border-bottom: calc(var(--base-size)/4) solid var(--grey-30);
            cursor: not-allowed;
            pointer-events: none;
        }
        
        .input-placeholder {
            position: absolute;
            padding-left: var(--space-12);
            color: var(--grey-100);
        }

        .clear-button {
            display: none;
            position: absolute;
            top: var(--space-20);
            right: var(--space-20);
        }

        .input-wrapper:hover .clear-button {
            display: flex !important;
        }

        #input.outline {
            border: calc(var(--base-size)/4) solid var(--grey-30);
            outline: none;
        }
        #input:hover.outline {
            border: calc(var(--base-size)/4) solid var(--grey-100);
        }
        #input:focus.outline {
            border: calc(var(--base-size)/4) solid var(--blue-120);
        }
        #input.disabled.outline {
            border: calc(var(--base-size)/4) solid var(--grey-30);
        }

        .additional-text {
            color: var(--grey-100);
        }
        .additional-text.success {
            color: var(--green-100);
        }
        .additional-text.error {
            color: var(--red-100);
        }

        #input.success {
            border-color: var(--green-120);
        }

        #input.error {
            border-color: var(--red-120);
        }
`];var At=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};class xt extends Q{constructor(){super(...arguments),this.classSettings={M:{placeholder:"subtitle-2",inputText:"body-3",height:"calc(var(--base-size) * 12)"},L:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 14)"},S:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 10)"},XS:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 8)"}},this.outline=!1,this.size=_t.M,this.success=!1,this.error=!1,this.placeHolderVisible=!1,this.additionalText="",this.clearButtonVisible=!1,this.name=""}connectedCallback(){super.connectedCallback(),console.log("connectedCallback: ",this.input),setTimeout((()=>{console.log("this.input: ",this.input),this.input}),0)}focusInput(){this.placeHolderVisible=!0,this.clearButtonVisible=!0}blurInput(){this.placeHolderVisible=!!this.input?.value,this.clearButtonVisible=!1}editInput(){this.dispatchEvent(vt("input-value",{value:this.input?.value}))}clearInputValue(){this.input&&(this.input.value=""),this.input?.focus()}changeValue(){this.dispatchEvent(vt("input-change",{value:this.input?.value}))}}xt.styles=wt,At([it({type:Boolean})],xt.prototype,"outline",void 0),At([it()],xt.prototype,"size",void 0),At([it({type:Boolean})],xt.prototype,"success",void 0),At([it({type:Boolean})],xt.prototype,"error",void 0),At([st()],xt.prototype,"placeHolderVisible",void 0),At([it()],xt.prototype,"additionalText",void 0),At([rt("#input")],xt.prototype,"input",void 0),At([st()],xt.prototype,"clearButtonVisible",void 0),At([it({type:String})],xt.prototype,"name",void 0);const St=[ut,o`
        .input-wrapper {
            height: calc(var(--base-size) * 12);
            width: 22em;
            position: relative;
        }
        #input {
            width: 100%;
            height: 100%;
            padding-left: var(--space-12);
            padding-top: var(--space-16);
            padding-bottom: var(--space-16);
            border: none;
            border-bottom: calc(var(--base-size)/4) solid var(--grey-30);
            color: var(--grey-200);
            outline: none;
            pointer-events: none;
        }
        #input:hover {
            border-bottom: calc(var(--base-size)/4) solid var(--grey-100);
        }
        #input:focus {
            border-bottom: calc(var(--base-size)/4) solid var(--blue-120);
        }
        #input.disabled {
            color: var(--grey-130); 
            background-color: var(--grey-10);
            border-radius: var(--border-radius-4) var(--border-radius-4) 0 0;
            border-bottom: calc(var(--base-size)/4) solid var(--grey-30);
            cursor: not-allowed;
            pointer-events: none;
        }
        
        .input-placeholder {
            position: absolute;
            padding-left: var(--space-12);
            color: var(--grey-100);
        }

        .input-button {
            position: absolute;
            top: var(--space-20);
            right: var(--space-20);
            display: flex;
            grid-gap: calc(var(--base-size) * 3);
        }

        #input.outline {
            border: calc(var(--base-size)/4) solid var(--grey-30);
            outline: none;
        }
        #input:hover.outline {
            border: calc(var(--base-size)/4) solid var(--grey-100);
        }
        #input:focus.outline {
            border: calc(var(--base-size)/4) solid var(--blue-120);
        }
        #input.disabled.outline {
            border: calc(var(--base-size)/4) solid var(--grey-30);
        }

        .additional-text {
            color: var(--grey-100);
        }
        .additional-text.success {
            color: var(--green-100);
        }
        .additional-text.error {
            color: var(--red-100);
        }

        #input.success {
            border-color: var(--green-120);
        }

        #input.error {
            border-color: var(--red-120);
        }

        .clear-button {
            display: none;
        }

        .input-wrapper:hover .clear-button {
            display: flex !important;
            grid-gap: calc(var(--base-size) * 3);
        }

        .dropdown {
            display: flex;
            flex-direction: column;
            width: 22em;
            position: relative;
        }

        .rotate {
            transform: rotate(180deg);
        }

        .dropdown-list-icon {
            transition: transform 0.5s;
            cursor: pointer;
        }

        .dropdown-list {
            position: absolute;
            width: 100%;
            top: 3em;
            z-index: 100
        }
`];var Et=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};let zt=class extends xt{constructor(){super(...arguments),this.isListVisible=!1,this._inputLabel="",this._emitValue=!1,this.items=ft,this.listTemplate=O`
        <div class="dropdown-list">
            <tsc-list .items=${this.items}
                @selectedValue=${this.emitSelectedValue}
                .paginateFunction=${()=>[{label:"new label",value:"some value"}]}
            ></tsc-list>
        </div>
    `}get clearButtonHtml(){return O`
        <div class="clear-button" style=${ct({gridGap:"calc(var(--base-size) * 3)",display:this.clearButtonVisible?"flex":"none"})}>
            <svg @click=${this.clearInputValue} width="12" height = "12" viewBox = "0 0 12 12" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
                <path d="M10.714 1.28595L6 6M6 6L1.28595 10.714M6 6L10.714 10.714M6 6L1.28595 1.28595" stroke="#C0C8D0" stroke-width="2" />
            </svg>
            <tsc-divider></tsc-divider>
        </div>
    `}clearInputValue(){this.input&&(this.input.value=""),this._inputLabel=""}set initValue(t){console.log("get init value",t,this.items),this.items&&this.items.length&&(this._inputLabel=this.items.find((e=>e.value===t))?.label||""),console.log("new input label",this._inputLabel)}emitSelectedValue(t){console.log("get value:",t.detail.value),this.isListVisible=!1,this._inputLabel=this.items.find((e=>e.value===t.detail.value?.value))?.label||"",console.log("this._inputLabel: ",this._inputLabel),this._emitValue=!0}openList(){this._emitValue?this._emitValue=!1:this.isListVisible=!this.isListVisible}render(){return O`
        <div class="dropdown" @click=${this.openList}>
            <div class="input-wrapper"
            style=${ct({height:this.classSettings[this.size].height})}>
                ${this.placeHolderVisible?O`<div class="${$t({[this.classSettings[this.size].placeholder]:!0,"input-placeholder":!0})}">Название сделки</div>`:""}
                <input @focus="${this.focusInput}" @blur="${this.blurInput}"
                .name=${this.name}
                    @input=${this.editInput}
                    @change=${this.changeValue}
                id="input" class=${$t({[this.classSettings[this.size].inputText]:!0,outline:this.outline,success:this.success,error:this.error})} .placeholder=${this.placeHolderVisible?"":"Название сделки"}
                .value=${this._inputLabel}
                >
                <div class=${$t({"subtitle-2":!0,"additional-text":!0,success:this.success,error:this.error})}>
                    ${this.additionalText}
                </div>
                <div class="input-button">
                    ${this.clearButtonHtml}
                    <div
                        class=${$t({rotate:this.isListVisible,"dropdown-list-icon":!0})}
                    >
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 0.833344L9 8.33334L16.5 0.833344" stroke="#C0C8D0" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            </div>
            ${t=this.isListVisible,e=this.listTemplate,O`${function(t,i,s){return t?e:null==s?void 0:s()}(t,0,(()=>""))}`}
        </div>
`;var t,e}};zt.styles=St,Et([st()],zt.prototype,"isListVisible",void 0),Et([st()],zt.prototype,"_inputLabel",void 0),Et([it({type:String})],zt.prototype,"initValue",null),Et([it({type:Array})],zt.prototype,"items",void 0),zt=Et([tt("tsc-dropdown")],zt)})()})();