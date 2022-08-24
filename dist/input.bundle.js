/*! For license information please see input.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={3623:(t,e,i)=>{i.d(e,{NH:()=>s});const s={changeEventName:"input-change",inputEventName:"input-value"}},8871:(t,e,i)=>{var s;i.d(e,{$:()=>s}),function(t){t.M="M",t.L="L",t.S="S",t.XS="XS"}(s||(s={}))},1038:(t,e,i)=>{i.d(e,{Y:()=>s});const s=i(5862).iv`
.border-radius-4 {
    border-radius: var(--border-radius-4);
}

.border-radius-6 {
    border-radius: var(--border-radius-4);
}
`},2897:(t,e,i)=>{i.d(e,{O:()=>l});var s=i(5862),r=i(1038),n=i(3902),o=i(2240);const l=[r.Y,n.r,o.X,s.iv`
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
`},1662:(t,e,i)=>{i.d(e,{U:()=>s});const s=t=>e=>(customElements.get(t)||customElements.define(t,e),e)},4357:(t,e,i)=>{i.d(e,{y:()=>r});const s={bubbles:!0,composed:!0},r=(t,e)=>new CustomEvent(t,{...s,...e?.eventOption,detail:e?.detail})},8701:(t,e,i)=>{i.d(e,{ec:()=>h,i1:()=>c,iv:()=>a});const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),n=new Map;class o{constructor(t,e){if(this._$cssResult$=!0,e!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=n.get(this.cssText);return s&&void 0===t&&(n.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const l=t=>new o("string"==typeof t?t:t+"",r),a=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,r)},h=(t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))},c=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return l(e)})(t):t},5674:(t,e,i)=>{i.d(e,{eZ:()=>s});const s=({finisher:t,descriptor:e})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,n=null!=e?{kind:"method",placement:"prototype",key:s,descriptor:e(i.key)}:{...i,key:s};return null!=t&&(n.finisher=function(e){t(e,s)}),n}{const r=i.constructor;void 0!==e&&Object.defineProperty(i,s,e(s)),null==t||t(r,s)}}},760:(t,e,i)=>{i.d(e,{C:()=>r});const s=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function r(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):s(t,e)}},7935:(t,e,i)=>{var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements},43:(t,e,i)=>{i(7935)},2669:(t,e,i)=>{i.d(e,{I:()=>r});var s=i(5674);function r(t,e){return(0,s.eZ)({descriptor:i=>{const s={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[e]&&(this[e]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==s?s:null),this[e]}}return s}})}},9158:(t,e,i)=>{i.d(e,{S:()=>r});var s=i(760);function r(t){return(0,s.C)({...t,state:!0})}},8732:(t,e,i)=>{i.d(e,{fl:()=>d,iv:()=>r.iv});var s,r=i(8701);const n=window.trustedTypes,o=n?n.emptyScript:"",l=window.reactiveElementPolyfillSupport,a={toAttribute(t,e){switch(e){case Boolean:t=t?o:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},h=(t,e)=>e!==t&&(e==e||t==t),c={attribute:!0,type:String,converter:a,reflect:!1,hasChanged:h};class d extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=c){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||c}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift((0,r.i1)(t))}else void 0!==t&&e.push((0,r.i1)(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return(0,r.ec)(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=c){var s,r;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const o=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:a.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null}}_$AK(t,e){var i,s,r;const n=this.constructor,o=n._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=n.getPropertyOptions(o),l=t.converter,h=null!==(r=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==r?r:a.fromAttribute;this._$Ei=o,this[o]=h(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||h)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==l||l({ReactiveElement:d}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.2")},8922:(t,e,i)=>{i.d(e,{dy:()=>o.dy,iv:()=>n.iv,oi:()=>l});var s,r,n=i(8732),o=i(3692);class l extends n.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=(0,o.sY)(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return o.Jb}}l.finalized=!0,l._$litElement$=!0,null===(s=globalThis.litElementHydrateSupport)||void 0===s||s.call(globalThis,{LitElement:l});const a=globalThis.litElementPolyfillSupport;null==a||a({LitElement:l}),(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.2.0")},875:(t,e,i)=>{i.d(e,{XM:()=>r,Xe:()=>n,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>(...e)=>({_$litDirective$:t,values:e});class n{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},7499:(t,e,i)=>{i.d(e,{$:()=>n});var s=i(3692),r=i(875);const n=(0,r.XM)(class extends r.Xe{constructor(t){var e;if(super(t),t.type!==r.pX.ATTRIBUTE||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const n=t.element.classList;this.et.forEach((t=>{t in e||(n.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(r=this.st)||void 0===r?void 0:r.has(t))||(i?(n.add(t),this.et.add(t)):(n.remove(t),this.et.delete(t)))}return s.Jb}})},7151:(t,e,i)=>{i.d(e,{V:()=>n});var s=i(3692),r=i(875);const n=(0,r.XM)(class extends r.Xe{constructor(t){var e;if(super(t),t.type!==r.pX.ATTRIBUTE||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const s=t[i];return null==s?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ct){this.ct=new Set;for(const t in e)this.ct.add(t);return this.render(e)}this.ct.forEach((t=>{null==e[t]&&(this.ct.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const s=e[t];null!=s&&(this.ct.add(t),t.includes("-")?i.setProperty(t,s):i[t]=s)}return s.Jb}})},3692:(t,e,i)=>{var s;i.d(e,{Jb:()=>A,dy:()=>m,sY:()=>S});const r=globalThis.trustedTypes,n=r?r.createPolicy("lit-html",{createHTML:t=>t}):void 0,o=`lit$${(Math.random()+"").slice(9)}$`,l="?"+o,a=`<${l}>`,h=document,c=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,b=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,f=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,_=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),m=_(1),A=(_(2),Symbol.for("lit-noChange")),w=Symbol.for("lit-nothing"),E=new WeakMap,S=(t,e,i)=>{var s,r;const n=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=n._$litPart$;if(void 0===o){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;n._$litPart$=o=new U(e.insertBefore(c(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},C=h.createTreeWalker(h,129,null,!1),z=(t,e)=>{const i=t.length-1,s=[];let r,l=2===e?"<svg>":"",h=p;for(let e=0;e<i;e++){const i=t[e];let n,c,d=-1,u=0;for(;u<i.length&&(h.lastIndex=u,c=h.exec(i),null!==c);)u=h.lastIndex,h===p?"!--"===c[1]?h=v:void 0!==c[1]?h=b:void 0!==c[2]?(y.test(c[2])&&(r=RegExp("</"+c[2],"g")),h=g):void 0!==c[3]&&(h=g):h===g?">"===c[0]?(h=null!=r?r:p,d=-1):void 0===c[1]?d=-2:(d=h.lastIndex-c[2].length,n=c[1],h=void 0===c[3]?g:'"'===c[3]?$:f):h===$||h===f?h=g:h===v||h===b?h=p:(h=g,r=void 0);const _=h===g&&t[e+1].startsWith("/>")?" ":"";l+=h===p?i+a:d>=0?(s.push(n),i.slice(0,d)+"$lit$"+i.slice(d)+o+_):i+o+(-2===d?(s.push(void 0),e):_)}const c=l+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==n?n.createHTML(c):c,s]};class x{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const h=t.length-1,d=this.parts,[u,p]=z(t,e);if(this.el=x.createElement(u,i),C.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=C.nextNode())&&d.length<h;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(o)){const i=p[a++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(o),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?k:"@"===e[1]?N:O})}else d.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(y.test(s.tagName)){const t=s.textContent.split(o),e=t.length-1;if(e>0){s.textContent=r?r.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],c()),C.nextNode(),d.push({type:2,index:++n});s.append(t[e],c())}}}else if(8===s.nodeType)if(s.data===l)d.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(o,t+1));)d.push({type:7,index:n}),t+=o.length-1}n++}}static createElement(t,e){const i=h.createElement("template");return i.innerHTML=t,i}}function T(t,e,i=t,s){var r,n,o,l;if(e===A)return e;let a=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const h=d(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(n=null==a?void 0:a._$AO)||void 0===n||n.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Cl)&&void 0!==o?o:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=T(t,a._$AS(t,e.values),a,s)),e}class P{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(i,!0);C.currentNode=r;let n=C.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new U(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new R(n,this,t)),this.v.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(n=C.nextNode(),o++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class U{constructor(t,e,i,s){var r;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),d(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==A&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return u(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==w&&d(this._$AH)?this._$AA.nextSibling.data=t:this.k(h.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=x.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new P(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=E.get(t.strings);return void 0===e&&E.set(t.strings,e=new x(t)),e}S(t){u(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new U(this.M(c()),this.M(c()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class O{constructor(t,e,i,s,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(void 0===r)t=T(this,t,e,0),n=!d(t)||t!==this._$AH&&t!==A,n&&(this._$AH=t);else{const s=t;let o,l;for(t=r[0],o=0;o<r.length-1;o++)l=T(this,s[i+o],e,o),l===A&&(l=this._$AH[o]),n||(n=!d(l)||l!==this._$AH[o]),l===w?t=w:t!==w&&(t+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}n&&!s&&this.C(t)}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends O{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===w?void 0:t}}const M=r?r.emptyScript:"";class k extends O{constructor(){super(...arguments),this.type=4}C(t){t&&t!==w?this.element.setAttribute(this.name,M):this.element.removeAttribute(this.name)}}class N extends O{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=T(this,t,e,0))&&void 0!==i?i:w)===A)return;const s=this._$AH,r=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class R{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const B=window.litHtmlPolyfillSupport;null==B||B(x,U),(null!==(s=globalThis.litHtmlVersions)&&void 0!==s?s:globalThis.litHtmlVersions=[]).push("2.2.5")},9662:(t,e,i)=>{i.d(e,{Cb:()=>s.C,IO:()=>n.I,SB:()=>r.S});var s=i(760),r=i(9158),n=i(2669);i(7935),i(43)},8810:(t,e,i)=>{i.d(e,{$:()=>s.$});var s=i(7499)},3196:(t,e,i)=>{i.d(e,{V:()=>s.V});var s=i(7151)},5862:(t,e,i)=>{i.d(e,{dy:()=>s.dy,iv:()=>s.iv,oi:()=>s.oi}),i(8732),i(3692);var s=i(8922)}},e={};function i(s){var r=e[s];if(void 0!==r)return r.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,i),n.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=i(5862),e=i(8810),s=i(3196),r=i(9662),n=i(4357),o=i(3623),l=i(8871);const a=[i(2897).O,t.iv`
        .input-wrapper {
            height: calc(var(--base-size) * 12);
            width: min(22em, 100%);
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
`];var h=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o};class c extends t.oi{constructor(){super(...arguments),this.classSettings={M:{placeholder:"subtitle-2",inputText:"body-3",height:"calc(var(--base-size) * 12)"},L:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 14)"},S:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 10)"},XS:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 8)"}},this.outline=!1,this.size=l.$.M,this.success=!1,this.error=!1,this.placeHolderVisible=!1,this.additionalText="",this.clearButtonVisible=!1,this.name=""}connectedCallback(){super.connectedCallback(),console.log("connectedCallback: ",this.input),setTimeout((()=>{console.log("this.input: ",this.input),this.input}),0)}focusInput(){this.placeHolderVisible=!0,this.clearButtonVisible=!0}blurInput(){this.placeHolderVisible=!!this.input?.value,this.clearButtonVisible=!1}editInput(){const t={value:this.input?.value};this.dispatchEvent((0,n.y)(o.NH.inputEventName,{detail:t}))}clearInputValue(){this.input&&(this.input.value=""),this.input?.focus()}changeValue(){const t={value:this.input?.value};this.dispatchEvent((0,n.y)(o.NH.changeEventName,{detail:t}))}}c.styles=a,h([(0,r.Cb)({type:Boolean})],c.prototype,"outline",void 0),h([(0,r.Cb)()],c.prototype,"size",void 0),h([(0,r.Cb)({type:Boolean})],c.prototype,"success",void 0),h([(0,r.Cb)({type:Boolean})],c.prototype,"error",void 0),h([(0,r.SB)()],c.prototype,"placeHolderVisible",void 0),h([(0,r.Cb)()],c.prototype,"additionalText",void 0),h([(0,r.IO)("#input")],c.prototype,"input",void 0),h([(0,r.SB)()],c.prototype,"clearButtonVisible",void 0),h([(0,r.Cb)({type:String})],c.prototype,"name",void 0);var d=i(1662);let u=class extends c{render(){return t.dy`
        <div class="input-wrapper"
        style=${(0,s.V)({height:this.classSettings[this.size].height})}
        >
            ${this.placeHolderVisible?t.dy`<div class="${(0,e.$)({[this.classSettings[this.size].placeholder]:!0,"input-placeholder":!0})}">Название сделки</div>`:""}
            <input @focus="${this.focusInput}" @blur="${this.blurInput}"
            .name=${this.name}
                @input=${this.editInput}
                @change=${this.changeValue}
             id="input" class=${(0,e.$)({[this.classSettings[this.size].inputText]:!0,outline:this.outline,success:this.success,error:this.error})} .placeholder=${this.placeHolderVisible?"":"Название сделки"}>
             <div class=${(0,e.$)({"subtitle-2":!0,"additional-text":!0,success:this.success,error:this.error})}>
                ${this.additionalText}
            </div>
        <div class="clear-button" @click=${this.clearInputValue}
                style=${(0,s.V)({display:this.clearButtonVisible?"flex":"none"})}>
            <svg width="12" height = "12" viewBox = "0 0 12 12" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
                <path d="M10.714 1.28595L6 6M6 6L1.28595 10.714M6 6L10.714 10.714M6 6L1.28595 1.28595" stroke="#C0C8D0" stroke-width="2" />
            </svg>
        </div>
        </div>
`}};u=function(t,e,i,s){var r,n=arguments.length,o=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(o=(n<3?r(o):n>3?r(e,i,o):r(e,i))||o);return n>3&&o&&Object.defineProperty(e,i,o),o}([(0,d.U)("tsc-input")],u)})()})();