/*! For license information please see button.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={1038:(t,e,i)=>{i.d(e,{Y:()=>s});const s=i(5862).iv`
.border-radius-4 {
    border-radius: var(--border-radius-4);
}

.border-radius-6 {
    border-radius: var(--border-radius-4);
}
`},2897:(t,e,i)=>{i.d(e,{O:()=>a});var s=i(5862),o=i(1038),r=i(3902),n=i(2240);const a=[o.Y,r.r,n.X,s.iv`
        * {
            box-sizing: border-box;
        }`]},3902:(t,e,i)=>{i.d(e,{r:()=>s});const s=i(5862).iv`
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
`},2240:(t,e,i)=>{i.d(e,{X:()=>s});const s=i(5862).iv`
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
`},1662:(t,e,i)=>{i.d(e,{U:()=>s});const s=t=>e=>(customElements.get(t)||customElements.define(t,e),e)},8701:(t,e,i)=>{i.d(e,{$m:()=>a,ec:()=>h,i1:()=>c,iv:()=>l});const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new Map;class n{constructor(t,e){if(this._$cssResult$=!0,e!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=r.get(this.cssText);return s&&void 0===t&&(r.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const a=t=>new n("string"==typeof t?t:t+"",o),l=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(i,o)},h=(t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return a(e)})(t):t},5674:(t,e,i)=>{i.d(e,{eZ:()=>s});const s=({finisher:t,descriptor:e})=>(i,s)=>{var o;if(void 0===s){const s=null!==(o=i.originalKey)&&void 0!==o?o:i.key,r=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(r.finisher=function(e){t(e,s)}),r}{const o=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(o,s)}}},760:(t,e,i)=>{i.d(e,{C:()=>o});const s=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function o(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):s(t,e)}},7935:(t,e,i)=>{var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements},43:(t,e,i)=>{i(7935)},2669:(t,e,i)=>{i.d(e,{I:()=>o});var s=i(5674);function o(t,e){return(0,s.eZ)({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}},9158:(t,e,i)=>{i.d(e,{S:()=>o});var s=i(760);function o(t){return(0,s.C)({...t,state:!0})}},8732:(t,e,i)=>{i.d(e,{$m:()=>o.$m,fl:()=>d,iv:()=>o.iv});var s,o=i(8701);const r=window.trustedTypes,n=r?r.emptyScript:"",a=window.reactiveElementPolyfillSupport,l={toAttribute(t,e){switch(e){case Boolean:t=t?n:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:h};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift((0,o.i1)(t))}else void 0!==t&&e.push((0,o.i1)(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,o.ec)(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=c){var s,o;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const n=(null!==(o=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==o?o:l.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(r):this.setAttribute(r,n),this._$Ei=null}}_$AK(t,e){var i,s,o;const r=this.constructor,n=r._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=r.getPropertyOptions(n),a=t.converter,h=null!==(o=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==o?o:l.fromAttribute;this._$Ei=n,this[n]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:d}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.2")},8922:(t,e,i)=>{i.d(e,{$m:()=>r.$m,dy:()=>n.dy,iv:()=>r.iv,oi:()=>a});var s,o,r=i(8732),n=i(3692);class a extends r.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=(0,n.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return n.Jb}}a.finalized=!0,a._$litElement$=!0,null===(s=globalThis.litElementHydrateSupport)||void 0===s||s.call(globalThis,{LitElement:a});const l=globalThis.litElementPolyfillSupport;null==l||l({LitElement:a}),(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.2.0")},875:(t,e,i)=>{i.d(e,{XM:()=>o,Xe:()=>r,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class r{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},7499:(t,e,i)=>{i.d(e,{$:()=>r});var s=i(3692),o=i(875);const r=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,o;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const r=t.element.classList;this.et.forEach((t=>{t in e||(r.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(r.add(t),this.et.add(t)):(r.remove(t),this.et.delete(t)))}return s.Jb}})},7151:(t,e,i)=>{i.d(e,{V:()=>r});var s=i(3692),o=i(875);const r=(0,o.XM)(class extends o.Xe{constructor(t){var e;if(super(t),t.type!==o.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return s.Jb}})},3692:(t,e,i)=>{var s;i.d(e,{Jb:()=>A,Ld:()=>w,dy:()=>_,sY:()=>E});const o=globalThis.trustedTypes,r=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,a="?"+n,l=`<${a}>`,h=document,c=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,b=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,m=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),_=m(1),A=(m(2),Symbol.for("lit-noChange")),w=Symbol.for("lit-nothing"),S=new WeakMap,E=(t,e,i)=>{var s,o;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=r._$litPart$;if(void 0===n){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;r._$litPart$=n=new O(e.insertBefore(c(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n},C=h.createTreeWalker(h,129,null,!1),z=(t,e)=>{const i=t.length-1,s=[];let o,a=2===e?"<svg>":"",h=p;for(let e=0;e<i;e++){const i=t[e];let r,c,d=-1,u=0;for(;u<i.length&&(h.lastIndex=u,c=h.exec(i),null!==c);)u=h.lastIndex,h===p?"!--"===c[1]?h=v:void 0!==c[1]?h=b:void 0!==c[2]?(y.test(c[2])&&(o=RegExp("</"+c[2],"g")),h=f):void 0!==c[3]&&(h=f):h===f?">"===c[0]?(h=null!=o?o:p,d=-1):void 0===c[1]?d=-2:(d=h.lastIndex-c[2].length,r=c[1],h=void 0===c[3]?f:'"'===c[3]?$:g):h===$||h===g?h=f:h===v||h===b?h=p:(h=f,o=void 0);const m=h===f&&t[e+1].startsWith("/>")?" ":"";a+=h===p?i+l:d>=0?(s.push(r),i.slice(0,d)+"$lit$"+i.slice(d)+n+m):i+n+(-2===d?(s.push(void 0),e):m)}const c=a+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==r?r.createHTML(c):c,s]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,l=0;const h=t.length-1,d=this.parts,[u,p]=z(t,e);if(this.el=T.createElement(u,i),C.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=C.nextNode())&&d.length<h;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(n)){const i=p[l++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(n),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?M:"?"===e[1]?k:"@"===e[1]?R:P})}else d.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(y.test(s.tagName)){const t=s.textContent.split(n),e=t.length-1;if(e>0){s.textContent=o?o.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],c()),C.nextNode(),d.push({type:2,index:++r});s.append(t[e],c())}}}else if(8===s.nodeType)if(s.data===a)d.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(n,t+1));)d.push({type:7,index:r}),t+=n.length-1}r++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function U(t,e,i=t,s){var o,r,n,a;if(e===A)return e;let l=void 0!==s?null===(o=i._$Cl)||void 0===o?void 0:o[s]:i._$Cu;const h=d(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=U(t,l._$AS(t,e.values),l,s)),e}class x{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,o=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);C.currentNode=o;let r=C.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let e;2===l.type?e=new O(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new L(r,this,t)),this.v.push(e),l=s[++a]}n!==(null==l?void 0:l.index)&&(r=C.nextNode(),n++)}return o}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class O{constructor(t,e,i,s){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(o=null==s?void 0:s.isConnected)||void 0===o||o}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=U(this,t,e),d(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==A&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return u(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==w&&d(this._$AH)?this._$AA.nextSibling.data=t:this.k(h.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,o="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=T.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===o)this._$AH.m(i);else{const t=new x(o,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=S.get(t.strings);return void 0===e&&S.set(t.strings,e=new T(t)),e}S(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new O(this.M(c()),this.M(c()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class P{constructor(t,e,i,s,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(void 0===o)t=U(this,t,e,0),r=!d(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const s=t;let n,a;for(t=o[0],n=0;n<o.length-1;n++)a=U(this,s[i+n],e,n),a===A&&(a=this._$AH[n]),r||(r=!d(a)||a!==this._$AH[n]),a===w?t=w:t!==w&&(t+=(null!=a?a:"")+o[n+1]),this._$AH[n]=a}r&&!s&&this.C(t)}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class M extends P{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===w?void 0:t}}const N=o?o.emptyScript:"";class k extends P{constructor(){super(...arguments),this.type=4}C(t){t&&t!==w?this.element.setAttribute(this.name,N):this.element.removeAttribute(this.name)}}class R extends P{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=U(this,t,e,0))&&void 0!==i?i:w)===A)return;const s=this._$AH,o=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==w&&(s===w||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}}const H=window.litHtmlPolyfillSupport;null==H||H(T,O),(null!==(s=globalThis.litHtmlVersions)&&void 0!==s?s:globalThis.litHtmlVersions=[]).push("2.2.5")},9662:(t,e,i)=>{i.d(e,{Cb:()=>s.C,IO:()=>r.I,SB:()=>o.S});var s=i(760),o=i(9158),r=i(2669);i(7935),i(43)},8810:(t,e,i)=>{i.d(e,{$:()=>s.$});var s=i(7499)},3196:(t,e,i)=>{i.d(e,{V:()=>s.V});var s=i(7151)},5862:(t,e,i)=>{i.d(e,{$m:()=>s.$m,dy:()=>s.dy,iv:()=>s.iv,oi:()=>s.oi}),i(8732),i(3692);var s=i(8922)}},e={};function i(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s](r,r.exports,i),r.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=i(5862),e=i(9662),s=i(1662),o=i(8810),r=i(3692);const n=t=>null!=t?t:r.Ld;var a,l,h=i(3196);t.dy`
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9L7.125 13.125L15 5.25" stroke="white" stroke-width="2" />
</svg>
`,function(t){t.M="M",t.L="L",t.S="S",t.XS="XS"}(a||(a={})),function(t){t.DEFAULT="Default",t.OUTLINE="Outline",t.FLAT="Flat"}(l||(l={}));const c={...l,ROUND:"Round"},d=[i(2897).O,t.iv`
        :host {
            --base-padding: 0
        }

        button {
            display: flex;
            justify-content: center;
            align-items: center;
            background: var(--blue-120);
            color: var(--common-white);
            border: none;
            outline: none;
            border-radius: var(--border-radius-4);
            cursor: pointer;
        }

        button:focus {
            box-shadow: 0 0 0 calc(var(--base-size)/2) var(--blue-190);
        }

        button[style-type=${(0,t.$m)(l.DEFAULT)}]:not(:disabled):hover {
            background: var(--blue-100);
        }

        button[style-type=${(0,t.$m)(l.DEFAULT)}]:not(:disabled):active {
            background: var(--blue-90);
        }

        button[style-type=${(0,t.$m)(l.DEFAULT)}]:disabled {
            background: var(--grey-20);
            color: var(--grey-100);
        }

        button[style-type=${(0,t.$m)(l.OUTLINE)}] {
            --border: calc(var(--space-4)/4);
            background: transparent;
            border: var(--border) solid var(--grey-30);
            padding: 0 calc(var(--base-padding) - var(--border));
            color: var(--blue-120)
        }

        button[style-type=${(0,t.$m)(l.OUTLINE)}]:hover {
            border-color: var(--blue-120);
        }

        button[style-type=${(0,t.$m)(l.OUTLINE)}]:not(:disabled):active {
            border-color: var(--blue-100);
        }

        button[style-type=${(0,t.$m)(l.OUTLINE)}]:not(:disabled):focus {
            border-color: var(--grey-30);
        }

        button[style-type=${(0,t.$m)(l.OUTLINE)}]:disabled {
            color: var(--grey-80);
            border-color: var(--grey-30);
        }

        button[style-type=${(0,t.$m)(l.FLAT)}] {
            background: transparent;
            color: var(--blue-120)
        }

        button[style-type=${(0,t.$m)(l.FLAT)}]:not(:disabled):hover,
        button[style-type=${(0,t.$m)(l.FLAT)}]:not(:disabled):active {
            background: var(--blue-10);
        }

        button[style-type=${(0,t.$m)(l.FLAT)}]:disabled {
            color: var(--grey-80);
        }
    `],u=[d,t.iv`
    :host {
        --content-gap: 0;
        --icon-size: 0;
    }

    .button__icon {
        height: var(--icon-size);
        width: var(--icon-size);
    }

    .button__content {
        display: flex;
        align-items: center;
        gap: var(--content-gap);
    }
    `];t.iv`
    button:focus {
        border-color: var(--blue-180); //TODO: другой цвет обводки в макете для Round
    }

    button[style-type=${(0,t.$m)(c.ROUND)}] {
        border-radius: 100%;
        background-color: var(--green-120);
        padding: var(--base-padding);
        height: fit-content;
    }

    button[style-type=${(0,t.$m)(c.ROUND)}]:hover {
        background-color: var(--green-100)
    }

    button[style-type=${(0,t.$m)(c.ROUND)}]:active {
        background-color: var(--green-100)
    }

    button[style-type=${(0,t.$m)(c.ROUND)}]:disabled {
        background-color: var(--grey-50)
    }
    `;var p=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};class v extends t.oi{constructor(){super(...arguments),this.size=a.M,this.styleType=l.DEFAULT,this.disabled=!1,this.autofocus=!1,this.formnovalidate=!1,this._classNameMap={},this._styleInfoMap={}}addClassName(t){this._classNameMap={...this._classNameMap,[t]:!0}}addStyleProperties(t){this._styleInfoMap={...this._styleInfoMap,...t}}focus(t){super.focus(t),this._buttonComponent?.focus(t)}basicRender(e){return this.addStyleProperties({"--base-padding":this.classSettings?this.classSettings[this.size].padding:""}),t.dy`
        <style>
            ${this._getSizeStyle()}
        </style>
        <button
            id="button"
            class=${(0,o.$)(this._classNameMap)}
            style=${(0,h.V)(this._styleInfoMap)}
            style-type=${this.styleType} 
            size=${this.size}
            form=${n(this.form)}
            name=${n(this.name)}
            type=${n(this.buttonType)}
            formaction=${n(this.formaction)}
            formenctype=${n(this.formenctype)}
            formmethod=${n(this.formmethod)}
            formtarget=${n(this.formtarget)}
            ?formnovalidate=${this.formnovalidate}
            ?disabled=${this.disabled}
            ?autofocus=${this.autofocus}
        >
            ${e}
        </button>
        `}_getSizeStyle(){if(this.classSettings){const{height:e}=this.classSettings[this.size];return t.iv`
            button[size="${(0,t.$m)(this.size)}"] {
                padding: 0 var(--base-padding);
                height: ${(0,t.$m)(e)};
            }
        `}return t.iv``}}v.styles=d,p([(0,e.Cb)()],v.prototype,"size",void 0),p([(0,e.Cb)({attribute:"style-type"})],v.prototype,"styleType",void 0),p([(0,e.Cb)({type:Boolean,reflect:!0})],v.prototype,"disabled",void 0),p([(0,e.Cb)({type:Boolean,reflect:!0})],v.prototype,"autofocus",void 0),p([(0,e.Cb)()],v.prototype,"form",void 0),p([(0,e.Cb)()],v.prototype,"formaction",void 0),p([(0,e.Cb)()],v.prototype,"formenctype",void 0),p([(0,e.Cb)()],v.prototype,"formmethod",void 0),p([(0,e.Cb)()],v.prototype,"formtarget",void 0),p([(0,e.Cb)()],v.prototype,"name",void 0),p([(0,e.Cb)()],v.prototype,"buttonType",void 0),p([(0,e.Cb)({type:Boolean})],v.prototype,"formnovalidate",void 0),p([(0,e.SB)()],v.prototype,"_classNameMap",void 0),p([(0,e.SB)()],v.prototype,"_styleInfoMap",void 0),p([(0,e.IO)("#button")],v.prototype,"_buttonComponent",void 0);var b=function(t,e,i,s){var o,r=arguments.length,n=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(n=(r<3?o(n):r>3?o(e,i,n):o(e,i))||n);return r>3&&n&&Object.defineProperty(e,i,n),n};let f=class extends v{constructor(){super(...arguments),this.classSettings={XS:{buttonTextSize:"head-5",height:"calc(var(--base-size) * 8)",padding:"var(--space-8)",squareIconSize:"calc(var(--base-space) * 5)",contentGap:"var(--space-8)"},S:{buttonTextSize:"head-5",height:"calc(var(--base-size) * 10)",padding:"var(--space-12)",squareIconSize:"calc(var(--base-space) * 6)",contentGap:"var(--space-8)"},M:{buttonTextSize:"head-4",height:"calc(var(--base-size) * 12)",padding:"var(--space-16)",squareIconSize:"calc(var(--base-space) * 6)",contentGap:"var(--space-8)"},L:{buttonTextSize:"head-3",height:"calc(var(--base-size) * 14)",padding:"var(--space-20)",squareIconSize:"calc(var(--base-space) * 6)",contentGap:"var(--space-8)"}},this.text="",this.iconUrl="",this.iconAlt=""}render(){this.addStyleProperties(this._initializeCssVariable()),this.addClassName(this.classSettings[this.size].buttonTextSize);const e=this.iconUrl?t.dy`<img class="button__icon" .src=${this.iconUrl} .alt=${this.iconAlt}>`:void 0;return this.basicRender(t.dy`
        <slot class="button__content" name="content" @click=${this.focus}>
            <slot name="image">
                ${e}
            </slot>
            <slot name="text">
                <span>${this.text}</span>
            </slot>
        </slot>
        `)}_initializeCssVariable(){return{"--content-gap":this.classSettings[this.size].contentGap,"--icon-size":this.classSettings[this.size].squareIconSize}}};f.styles=u,b([(0,e.Cb)()],f.prototype,"text",void 0),b([(0,e.Cb)()],f.prototype,"iconUrl",void 0),b([(0,e.Cb)()],f.prototype,"iconAlt",void 0),f=b([(0,s.U)("tsc-button")],f)})()})();