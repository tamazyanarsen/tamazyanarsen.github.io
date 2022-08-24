/*! For license information please see checkbox.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={8201:(t,e,i)=>{i.d(e,{p:()=>o});var s=i(5862),r=i(801);const o=(t,e,i)=>s.dy`${(0,r.g)(t,(()=>e),(()=>i||""))}`},1662:(t,e,i)=>{i.d(e,{U:()=>s});const s=t=>e=>(customElements.get(t)||customElements.define(t,e),e)},4357:(t,e,i)=>{i.d(e,{y:()=>r});const s={bubbles:!0,composed:!0},r=(t,e)=>new CustomEvent(t,{...s,...e?.eventOption,detail:e?.detail})},8701:(t,e,i)=>{i.d(e,{ec:()=>d,i1:()=>h,iv:()=>a});const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return s&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const l=t=>new n("string"==typeof t?t:t+"",r),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,r)},d=(t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},h=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t},760:(t,e,i)=>{i.d(e,{C:()=>r});const s=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function r(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):s(t,e)}},7935:(t,e,i)=>{var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements},43:(t,e,i)=>{i(7935)},8732:(t,e,i)=>{i.d(e,{fl:()=>c,iv:()=>r.iv});var s,r=i(8701);const o=window.trustedTypes,n=o?o.emptyScript:"",l=window.reactiveElementPolyfillSupport,a={toAttribute(t,e){switch(e){case Boolean:t=t?n:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,e)=>e!==t&&(e==e||t==t),h={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:d};class c extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=h){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||h}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift((0,r.i1)(t))}else void 0!==t&&e.push((0,r.i1)(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,r.ec)(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=h){var s,r;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:a.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,s,r;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,d=null!==(r=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==r?r:a.fromAttribute;this._$Ei=n,this[n]=d(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}c.finalized=!0,c.elementProperties=new Map,c.elementStyles=[],c.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:c}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.2")},8922:(t,e,i)=>{i.d(e,{dy:()=>n.dy,iv:()=>o.iv,oi:()=>l});var s,r,o=i(8732),n=i(3692);class l extends o.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=(0,n.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return n.Jb}}l.finalized=!0,l._$litElement$=!0,null===(s=globalThis.litElementHydrateSupport)||void 0===s||s.call(globalThis,{LitElement:l});const a=globalThis.litElementPolyfillSupport;null==a||a({LitElement:l}),(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.2.0")},875:(t,e,i)=>{i.d(e,{XM:()=>r,Xe:()=>o,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},7499:(t,e,i)=>{i.d(e,{$:()=>o});var s=i(3692),r=i(875);const o=(0,r.XM)(class extends r.Xe{constructor(t){var e;if(super(t),t.type!==r.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const o=t.element.classList;this.et.forEach((t=>{t in e||(o.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(i?(o.add(t),this.et.add(t)):(o.remove(t),this.et.delete(t)))}return s.Jb}})},801:(t,e,i)=>{function s(t,e,i){return t?e():null==i?void 0:i()}i.d(e,{g:()=>s})},3692:(t,e,i)=>{var s;i.d(e,{Jb:()=>m,dy:()=>A,sY:()=>S});const r=globalThis.trustedTypes,o=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,l="?"+n,a=`<${l}>`,d=document,h=(t="")=>d.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,b=/>/g,$=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,f=/'/g,g=/"/g,y=/^(?:script|style|textarea|title)$/i,_=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),A=_(1),m=(_(2),Symbol.for("lit-noChange")),w=Symbol.for("lit-nothing"),E=new WeakMap,S=(t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new P(e.insertBefore(h(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n},C=d.createTreeWalker(d,129,null,!1),x=(t,e)=>{const i=t.length-1,s=[];let r,l=2===e?"<svg>":"",d=p;for(let e=0;e<i;e++){const i=t[e];let o,h,c=-1,u=0;for(;u<i.length&&(d.lastIndex=u,h=d.exec(i),null!==h);)u=d.lastIndex,d===p?"!--"===h[1]?d=v:void 0!==h[1]?d=b:void 0!==h[2]?(y.test(h[2])&&(r=RegExp("</"+h[2],"g")),d=$):void 0!==h[3]&&(d=$):d===$?">"===h[0]?(d=null!=r?r:p,c=-1):void 0===h[1]?c=-2:(c=d.lastIndex-h[2].length,o=h[1],d=void 0===h[3]?$:'"'===h[3]?g:f):d===g||d===f?d=$:d===v||d===b?d=p:(d=$,r=void 0);const _=d===$&&t[e+1].startsWith("/>")?" ":"";l+=d===p?i+a:c>=0?(s.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+n+_):i+n+(-2===c?(s.push(void 0),e):_)}const h=l+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==o?o.createHTML(h):h,s]};class k{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,a=0;const d=t.length-1,c=this.parts,[u,p]=x(t,e);if(this.el=k.createElement(u,i),C.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=C.nextNode())&&c.length<d;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(n)){const i=p[a++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(n),e=/([.?@])?(.*)/.exec(i);c.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?O:"?"===e[1]?R:"@"===e[1]?M:z})}else c.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(y.test(s.tagName)){const t=s.textContent.split(n),e=t.length-1;if(e>0){s.textContent=r?r.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],h()),C.nextNode(),c.push({type:2,index:++o});s.append(t[e],h())}}}else if(8===s.nodeType)if(s.data===l)c.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(n,t+1));)c.push({type:7,index:o}),t+=n.length-1}o++}}static createElement(t,e){const i=d.createElement("template");return i.innerHTML=t,i}}function U(t,e,i=t,s){var r,o,n,l;if(e===m)return e;let a=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const d=c(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==d&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===d?a=void 0:(a=new d(t),a._$AT(t,i,s)),void 0!==s?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=U(t,a._$AS(t,e.values),a,s)),e}class T{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:d).importNode(i,!0);C.currentNode=r;let o=C.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new P(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new N(o,this,t)),this.v.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(o=C.nextNode(),n++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,s){var r;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),c(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==m&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return u(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==w&&c(this._$AH)?this._$AA.nextSibling.data=t:this.k(d.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=k.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new T(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new k(t)),e}S(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new P(this.M(h()),this.M(h()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class z{constructor(t,e,i,s,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=U(this,t,e,0),o=!c(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const s=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=U(this,s[i+n],e,n),l===m&&(l=this._$AH[n]),o||(o=!c(l)||l!==this._$AH[n]),l===w?t=w:t!==w&&(t+=(null!=l?l:"")+r[n+1]),this._$AH[n]=l}o&&!s&&this.C(t)}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class O extends z{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===w?void 0:t}}const H=r?r.emptyScript:"";class R extends z{constructor(){super(...arguments),this.type=4}C(t){t&&t!==w?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class M extends z{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=U(this,t,e,0))&&void 0!==i?i:w)===m)return;const s=this._$AH,r=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class N{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const L=window.litHtmlPolyfillSupport;null==L||L(k,P),(null!==(s=globalThis.litHtmlVersions)&&void 0!==s?s:globalThis.litHtmlVersions=[]).push("2.2.5")},9662:(t,e,i)=>{i.d(e,{Cb:()=>s.C});var s=i(760);i(7935),i(43)},8810:(t,e,i)=>{i.d(e,{$:()=>s.$});var s=i(7499)},5862:(t,e,i)=>{i.d(e,{dy:()=>s.dy,iv:()=>s.iv,oi:()=>s.oi}),i(8732),i(3692);var s=i(8922)}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=i(5862),e=i(8810),s=i(9662),r=i(4357);const o=t.iv`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .container {
        width: calc(var(--base-size) * 8);
        position: relative;
    }

    input {
        background-color: white;
        user-select: none;
        align-items: center;
        display: flex;
        width: calc(var(--base-size) * 8);
        margin-top: .1em;
        --not-checked-before-background: var(--grey-80);
    }

    input::before {
        content: '';
        position: relative;
        border-radius: calc(var(--border-radius-4) * 25);
        width: calc(var(--base-size) * 8);
        height: calc(var(--base-size) * 5);
    }

    input:focus::before {
        border: calc(var(--base-size) / 2) solid var(--blue-180)
    }

    input:checked::before {
        background-color: var(--blue-120);
    }

    input:not(:checked)::before {
        background-color: var(--not-checked-before-background);
    }

    input::after {
        content: '';
        background-color: white;
        position: absolute;
        border-radius: 50%;
        width: calc(var(--base-size) * 3);
        height: calc(var(--base-size) * 3);
    }

    input:hover::after {
        --shadow-color: var(--blue-10);
        box-shadow: 0 0 calc(var(--base-size) * 2) var(--base-size) var(--shadow-color);
        transition: box-shadow .5s;
    }

    input:not(:checked)::after {
        --shadow-color: var(--grey-10);
        left: var(--base-size);
    }

    input:checked::after {
        --shadow-color: var(--blue-10);
        right: var(--base-size);
    }

    .disabled {
        border: none;
        pointer-events: none;
        cursor: not-allowed;
        --disabled-checked-before-background: var(--blue-50);
        --disabled-not-checked-before-background: var(--grey-50);
        color: var(--grey-80);
    }

    .disabled::before {
        pointer-events: none;
        cursor: not-allowed;
    }

    .disabled::after {
        pointer-events: none;
        cursor: not-allowed;
    }

    .disabled:checked::before {
        background-color: var(--disabled-checked-before-background);
    }

    .disabled:not(:checked)::before {
        background-color: var(--disabled-not-checked-before-background);
    }

    label {
        color: var(--grey-200);
        display: flex;
        width: max-content;
    }

    label span {
        padding-left: calc(var(--base-size) * 3);
        box-sizing: border-box;
    }
    `;var n=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};class l extends t.oi{constructor(){super(...arguments),this.initCheckedState=!1,this.disabled=!1,this.text="",this.value="",this.name=""}emitChangeEvent(t){const e={value:t.target.value};this.dispatchEvent((0,r.y)("change",{detail:e}))}}l.styles=o,n([(0,s.Cb)({type:Boolean})],l.prototype,"initCheckedState",void 0),n([(0,s.Cb)({type:Boolean})],l.prototype,"disabled",void 0),n([(0,s.Cb)({type:String})],l.prototype,"text",void 0),n([(0,s.Cb)({type:String})],l.prototype,"value",void 0),n([(0,s.Cb)({type:String})],l.prototype,"name",void 0);var a=i(8201),d=i(1662);const h=t.iv`
    input {
        display: flex;
        align-items: center;
        width: calc(var(--base-size) * 4);
        height: calc(var(--base-size) * 4);
        /* justify-content: center; */
        --not-checked-before-background: white;
    }

    input::before {
        content: '';
        border-radius: calc(var(--border-radius-4) / 2);
        width: calc(var(--base-size) * 4);
        height: calc(var(--base-size) * 4);
        box-sizing: border-box;
        position: absolute;
    }

    input:not(:checked)::after { 
        display: none;
    }

    input:checked::after { 
        right: 0;
    }

    input:hover::before {
        --shadow-color: var(--blue-10);
        box-shadow: 0 0 calc(var(--base-size) * 2) var(--base-size) var(--shadow-color);
        transition: box-shadow .5s;
    }

    input::after {
        content: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3L3.75 5.75L9 0.5' stroke='white' stroke-width='1.2'/%3E%3C/svg%3E%0A");
        background-color: transparent;
        position: absolute;
        width: calc(var(--base-size) * 3);
        height: calc(var(--base-size) * 3);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        left: var(--base-size);
        top: calc(var(--base-size) / 2);
        right: 0;
        border: none;
        border-radius: 0;
    }

    input:hover::after {
        box-shadow: none;
    }

    input:not(:checked)::before {
        --shadow-color: var(--grey-10);
        border: calc(var(--base-size) / 2) solid var(--grey-80);
    }

    input:checked::before {
        --shadow-color: var(--blue-10);
    }

    input:focus::before {
        border: calc(var(--base-size) / 2) solid var(--cyan-180)
    }

    .disabled {
        --disabled-checked-before-background: var(--grey-50);
        --disabled-not-checked-before-background: white;
        border-radius: calc(var(--base-size) / 2);
    }

    .disabled:not(:checked)::before {
        border: calc(var(--base-size) / 2) solid var(--grey-50);
    }
`;let c=class extends l{render(){return t.dy`
            <div class="container">
                <label
                    class=${(0,e.$)({disabled:this.disabled})}
                >
                    <input
                        .name=${this.name}
                        tabindex="1"
                        class=${(0,e.$)({disabled:this.disabled})}
                        type="checkbox"
                        ?checked=${this.initCheckedState}
                        @change=${this.emitChangeEvent}
                        ?disabled=${this.disabled}
                        .value=${this.value}
                    />
                    <slot class="body-3">
                        ${(0,a.p)(!!this.text,t.dy`<span class="body-3">${this.text}</span>`)}
                    </slot>
                </label>
            </div>
        `}};c.styles=[l.styles,h],c=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([(0,d.U)("tsc-checkbox")],c)})()})();