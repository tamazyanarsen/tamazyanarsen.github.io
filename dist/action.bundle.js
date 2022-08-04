/*! For license information please see action.bundle.js.LICENSE.txt */
(()=>{var t={705:(t,e,i)=>{var s=i(639).Symbol;t.exports=s},239:(t,e,i)=>{var s=i(705),r=i(607),n=i(333),o=s?s.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":o&&o in Object(t)?r(t):n(t)}},561:(t,e,i)=>{var s=i(990),r=/^\s+/;t.exports=function(t){return t?t.slice(0,s(t)+1).replace(r,""):t}},957:(t,e,i)=>{var s="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;t.exports=s},607:(t,e,i)=>{var s=i(705),r=Object.prototype,n=r.hasOwnProperty,o=r.toString,a=s?s.toStringTag:void 0;t.exports=function(t){var e=n.call(t,a),i=t[a];try{t[a]=void 0;var s=!0}catch(t){}var r=o.call(t);return s&&(e?t[a]=i:delete t[a]),r}},333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},639:(t,e,i)=>{var s=i(957),r="object"==typeof self&&self&&self.Object===Object&&self,n=s||r||Function("return this")();t.exports=n},990:t=>{var e=/\s/;t.exports=function(t){for(var i=t.length;i--&&e.test(t.charAt(i)););return i}},279:(t,e,i)=>{var s=i(218),r=i(771),n=i(841),o=Math.max,a=Math.min;t.exports=function(t,e,i){var l,c,h,d,u,p,v=0,f=!1,b=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function $(e){var i=l,s=c;return l=c=void 0,v=e,d=t.apply(s,i)}function m(t){return v=t,u=setTimeout(_,e),f?$(t):d}function y(t){var i=t-p;return void 0===p||i>=e||i<0||b&&t-v>=h}function _(){var t=r();if(y(t))return w(t);u=setTimeout(_,function(t){var i=e-(t-p);return b?a(i,h-(t-v)):i}(t))}function w(t){return u=void 0,g&&l?$(t):(l=c=void 0,d)}function A(){var t=r(),i=y(t);if(l=arguments,c=this,p=t,i){if(void 0===u)return m(p);if(b)return clearTimeout(u),u=setTimeout(_,e),$(p)}return void 0===u&&(u=setTimeout(_,e)),d}return e=n(e)||0,s(i)&&(f=!!i.leading,h=(b="maxWait"in i)?o(n(i.maxWait)||0,e):h,g="trailing"in i?!!i.trailing:g),A.cancel=function(){void 0!==u&&clearTimeout(u),v=0,l=p=c=u=void 0},A.flush=function(){return void 0===u?d:w(r())},A}},218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},5:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},448:(t,e,i)=>{var s=i(239),r=i(5);t.exports=function(t){return"symbol"==typeof t||r(t)&&"[object Symbol]"==s(t)}},771:(t,e,i)=>{var s=i(639);t.exports=function(){return s.Date.now()}},841:(t,e,i)=>{var s=i(561),r=i(218),n=i(448),o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(n(t))return NaN;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=s(t);var i=a.test(t);return i||l.test(t)?c(t.slice(2),i?2:8):o.test(t)?NaN:+t}}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),s=new Map;class r{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=s.get(this.cssText);return t&&void 0===e&&(s.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const s=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new r(s,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new r("string"==typeof t?t:t+"",e))(i)})(t):t;var a;const l=window.trustedTypes,c=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:u};class v extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:d.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),a=t.converter,l=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:d.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var f;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:v}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.3.2");const b=globalThis.trustedTypes,g=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$=`lit$${(Math.random()+"").slice(9)}$`,m="?"+$,y=`<${m}>`,_=document,w=(t="")=>_.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,C=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,k=/"/g,O=/^(?:script|style|textarea|title)$/i,U=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),P=U(1),M=U(2),N=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),R=new WeakMap,j=_.createTreeWalker(_,129,null,!1),B=(t,e)=>{const i=t.length-1,s=[];let r,n=2===e?"<svg>":"",o=E;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(o.lastIndex=h,l=o.exec(i),null!==l);)h=o.lastIndex,o===E?"!--"===l[1]?o=S:void 0!==l[1]?o=C:void 0!==l[2]?(O.test(l[2])&&(r=RegExp("</"+l[2],"g")),o=z):void 0!==l[3]&&(o=z):o===z?">"===l[0]?(o=null!=r?r:E,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?z:'"'===l[3]?k:T):o===k||o===T?o=z:o===S||o===C?o=E:(o=z,r=void 0);const d=o===z&&t[e+1].startsWith("/>")?" ":"";n+=o===E?i+y:c>=0?(s.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+$+d):i+$+(-2===c?(s.push(void 0),e):d)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(a):a,s]};class D{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const o=t.length-1,a=this.parts,[l,c]=B(t,e);if(this.el=D.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith($)){const i=c[n++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split($),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?K:"?"===e[1]?F:"@"===e[1]?G:V})}else a.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(O.test(s.tagName)){const t=s.textContent.split($),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),j.nextNode(),a.push({type:2,index:++r});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===m)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf($,t+1));)a.push({type:7,index:r}),t+=$.length-1}r++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function I(t,e,i=t,s){var r,n,o,a;if(e===N)return e;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=I(t,l._$AS(t,e.values),l,s)),e}class L{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:_).importNode(i,!0);j.currentNode=r;let n=j.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new W(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new J(n,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(n=j.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class W{constructor(t,e,i,s){var r;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),A(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==N&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return x(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==H&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(_.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=D.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new L(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new D(t)),e}S(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new W(this.M(w()),this.M(w()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class V{constructor(t,e,i,s,r){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=I(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==N,n&&(this._$AH=t);else{const s=t;let o,a;for(t=r[0],o=0;o<r.length-1;o++)a=I(this,s[i+o],e,o),a===N&&(a=this._$AH[o]),n||(n=!A(a)||a!==this._$AH[o]),a===H?t=H:t!==H&&(t+=(null!=a?a:"")+r[o+1]),this._$AH[o]=a}n&&!s&&this.C(t)}C(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class K extends V{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===H?void 0:t}}const q=b?b.emptyScript:"";class F extends V{constructor(){super(...arguments),this.type=4}C(t){t&&t!==H?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class G extends V{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=I(this,t,e,0))&&void 0!==i?i:H)===N)return;const s=this._$AH,r=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const X=window.litHtmlPolyfillSupport;var Z,Q;null==X||X(D,W),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.2.5");class Y extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new W(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return N}}Y.finalized=!0,Y._$litElement$=!0,null===(Z=globalThis.litElementHydrateSupport)||void 0===Z||Z.call(globalThis,{LitElement:Y});const tt=globalThis.litElementPolyfillSupport;null==tt||tt({LitElement:Y}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.0");const et=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function it(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):et(t,e)}var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements;const rt=Symbol.for(""),nt=t=>{var e,i;if((null===(e=t)||void 0===e?void 0:e.r)===rt)return null===(i=t)||void 0===i?void 0:i._$litStatic$},ot=new Map,at=t=>(e,...i)=>{const s=i.length;let r,n;const o=[],a=[];let l,c=0,h=!1;for(;c<s;){for(l=e[c];c<s&&void 0!==(n=i[c],r=nt(n));)l+=r+e[++c],h=!0;a.push(n),o.push(l),c++}if(c===s&&o.push(e[s]),h){const t=o.join("$$lit$$");void 0===(e=ot.get(t))&&(o.raw=o,ot.set(t,e=o)),i=a}return t(e,...i)},lt=at(P);at(M);var ct=i(279),ht=i.n(ct);const dt=t=>(...e)=>({_$litDirective$:t,values:e});class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const pt=dt(class extends ut{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const r=t.element.classList;this.et.forEach((t=>{t in e||(r.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.et.add(t)):(r.remove(t),this.et.delete(t)))}return N}}),vt={bubbles:!0,composed:!0};function ft(t,e){const i=t.target,s=(r=t.type,n={value:e,checked:i.checked},new CustomEvent(r,{...vt,detail:n}));var r,n;i.parentElement?.dispatchEvent(s)}const bt=dt(class extends ut{update(t,[e]){const i=t.element;return setTimeout((()=>{if(e&&i){i.style.position="absolute";const t=i.getBoundingClientRect();t.top<0&&(i.style.top=-t.top+"px"),t.bottom>(window.innerHeight||document.documentElement.clientHeight)&&(i.style.top=(window.innerHeight||document.documentElement.clientHeight)-t.bottom+"px"),t.right>(window.innerWidth||document.documentElement.clientWidth)&&(i.style.left="unset",i.style.right="100%")}}),0),this.render()}render(){return H}isElementInViewport(t){const e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}});var gt;!function(t){t.RADIO_BUTTON="RadioButton",t.CHECKBOX="Checkbox",t.BUTTON="Button",t.INPUT="Input",t.MENU="Menu",t.CALENDAR="Calendar"}(gt||(gt={}));const $t=P`
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.8335 17.5L13.3335 10L5.8335 2.5" stroke="#C0C8D0" stroke-width="1.66667" />
</svg>
`,mt=[[n`
.border-radius-4 {
    border-radius: var(--border-radius-4);
}

.border-radius-6 {
    border-radius: var(--border-radius-4);
}
`,n`
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
`,n`
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
`,n`
        * {
            box-sizing: border-box;
        }`],n`
    .container {
        position: relative;
    }

    input {
        display: flex;
        position: relative;
        width: calc(var(--base-size) * 4);
        height: calc(var(--base-size) * 4);
        --box-shadow-color: var(--blue-10);
        --before-background: var(--blue-120);
        --after-background: transparent;
        --before-border-color: var(--grey-80);
        --after-border-color: white;
        --label-color: var(--grey-200);
    }

    input::before {
        content: '';
        width: calc(var(--base-size) * 4);
        height: calc(var(--base-size) * 4);
        background-color: var(--before-background);
        border-radius: calc(var(--base-size) * 25);
        position: absolute;
        left: 0;
        box-sizing: border-box;
    }

    input::after {
        content: '';
        background-color: var(--after-background);
        position: absolute;
        left: calc(var(--base-size) / 2);
        top: calc(var(--base-size) / 2);
        width: calc(var(--base-size) * 2);
        height: calc(var(--base-size) * 2);
        border: calc(var(--base-size) / 2) solid var(--after-border-color);
        border-radius: 50%;
    }

    input:not(:checked)::after {
        display: none;
    }

    input:not(:checked)::before {
        background-color: var(--before-background);
        border: calc(var(--base-size) / 2) solid var(--before-border-color);
    }

    label {
        display: flex;
        grid-gap: calc(var(--base-size) * 3);
        color: var(--label-color);
    }

    input:checked {
        --box-shadow-color: var(--blue-10);
        --before-background: var(--blue-120);
        --after-background: transparent;
        --before-border-color: var(--grey-80);
        --after-border-color: white;
    }

    input:not(:checked) {
        --box-shadow-color: var(--grey-10);
        --before-background: white;
        --after-background: transparent;
        --before-border-color: var(--grey-80);
        --after-border-color: white;
    }

    input:hover::before {
        box-shadow: 0 0 var(--base-size) calc(var(--base-size) * 2) var(--box-shadow-color);
    }

    input:focus::before {
        border: calc(var(--base-size) / 2) solid var(--blue-180); // TODO доделать фокус для safari
    }

    .disabled {
        --before-background: var(--grey-50) !important;
        --before-border-color: var(--grey-50) !important;
        --after-background: var(--grey-50) !important;
        --label-color: var(--grey-80) !important;
        pointer-events: none;
    }
`,n` 
    .action-container {
        display: flex;
        flex-direction: column;
        padding: var(--space-16) 0;
        gap: var(--space-16);
        width: calc(var(--base-size) * 62)
    }

    .action-block {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
    }

    .action-header {
        margin: 0;
        letter-spacing: calc(var(--base-size) * 0.25);
        text-transform: uppercase;
        color: var(--grey-100);
        padding-left: var(--space-32);
    }

    .action-item {
        width: 100%;
        height: calc(var(--base-space) * 8);

        display: flex;
        flex-direction: row;
        align-items: center;
        padding-left: var(--space-24);
        gap: var(--space-8);

        position: relative;

        color: var(--grey-200);
        cursor: pointer;
    }

    .action-item:hover {
        background: var(--grey-10)
    }

    .action-item .container,
    .menu-container {
        display: flex;
        align-items: center;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
    }

    .action-item .container label {
        display: flex;
        width: 100%;
        align-items: center;
        padding-left: var(--space-24);
        cursor: pointer;
    }

    .action-separator {
        background-color: var(--grey-20);
        height: calc(var(--base-size) * 0.25);
        width: 100%;
    }

    .menu-item {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 0 var(--space-16) 0 var(--space-24);
    }

    .menu-item__icon {
        display: flex;
    }

    .menu-container:hover .sub-menu {
        display: block;
        position: absolute;
        left: 100%;
        top: 0;
    }

    .sub-menu {
        display: none;
        z-index: 1000;
    }

    .input-container {
        width: 100%;
        margin-right: var(--space-24);
    }

    .action-input {
        width: 100%
    }
    `];var yt=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};let _t=class extends Y{constructor(){super(...arguments),this._displayMenu=!1}render(){return lt`
      <div class="level-2 action-container border-radius-4">
        ${this.options?.map(((t,e)=>{const i=[],s=t.header?lt`<h1 class="action-header overline">${t.header}</h1>`:lt``;return i.push(lt`
            <div class="action-block">
                ${s}
                ${this.getActionItemsTemplate(t,e.toString())}
            </div>
            `),t.useBottomSeparator&&i.push(lt`<div class="action-separator"></div>`),lt`${i}`}))}
      </div>
    `}getActionItemsTemplate(t,e){const i=[];return lt`${Object.entries(t.items).map((([,t])=>{const e=t.imageSrc?lt`<img class="action-item__icon" .src=${t.imageSrc}>`:lt``,s=[];switch(t.type){case gt.BUTTON:s.push(e,this.buttonTemplate(t));break;case gt.MENU:s.push(e,this.menuTemplate(t));break;case gt.INPUT:s.push(e,this.inputTemplate(t));break;case gt.CHECKBOX:s.push(e,this.checkboxTemplate(t));break;case gt.RADIO_BUTTON:i.push(t);case gt.CALENDAR:}return s.length>0?lt`<div class="action-item body-3">${s}</div>`:lt``}))}
    ${this.radioGroupTemplate(i,t.header||e)} `}radioGroupTemplate(t,e){return t.length>0?lt`
            <div class="radio-group" @change=${t=>console.log("get event in radio group",t,t.detail)}
                >
                ${t.map((t=>lt`
                        <div class="action-item body-3">
                            ${(({name:t,value:e,text:i,emitValue:s=ft,disabled:r=!1})=>P`
        <div class="container">
            <label class=${pt({disabled:r})}>
                <input
                class=${pt({disabled:r})}
                type="radio" .name=${t} .value=${e}
                @change=${t=>{t.stopPropagation(),s(t,e)}}>
                <span class="body-3">${i}</span>
            </label>
        </div>
        `)({name:e,value:t.value.toString(),text:t.label})}
                        </div>
                        `))}
            </div>
            `:lt``}menuTemplate(t){const e=t.child?lt`
            <tsc-action ${bt()} class="sub-menu" .options=${t.child}></tsc-action>
            `:lt``;return lt`
        <div class="menu-container" @mouseover=${()=>{this._displayMenu=!0}} @mouseleave=${()=>{this._displayMenu=!1}}>
            <div class="menu-item">
                <div>${t.value}</div>
                <div class="menu-item__icon">${$t}</div>
            </div>

            ${i=this._displayMenu,s=e,P`${function(t,e,i){return t?s:null==i?void 0:i()}(i,0,(()=>""))}`}
        </div>
        `;var i,s}buttonTemplate(t){return lt` <div>${t.value}</div> `}inputTemplate(t){const e=ht()(console.log,500);return lt`
        <div class="input-container">
            <input class="action-input" type="text" value=${t.value} @input=${e} />
        </div>
        `}checkboxTemplate(t){return lt`
        <tsc-checkbox value=${t.value} text=${t.label}></tsc-checkbox>
        `}};_t.styles=mt,yt([it({type:Array})],_t.prototype,"options",void 0),yt([it({state:!0})],_t.prototype,"_displayMenu",void 0),_t=yt([t=>"function"==typeof t?((t,e)=>(window.customElements.define("tsc-action",e),e))(0,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(t){window.customElements.define("tsc-action",t)}}})(0,t)],_t)})()})();