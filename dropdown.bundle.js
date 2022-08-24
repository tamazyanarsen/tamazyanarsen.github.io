/*! For license information please see dropdown.bundle.js.LICENSE.txt */
(()=>{var e={2705:(e,t,i)=>{var s=i(5639).Symbol;e.exports=s},4239:(e,t,i)=>{var s=i(2705),r=i(9607),o=i(2333),n=s?s.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":n&&n in Object(e)?r(e):o(e)}},7561:(e,t,i)=>{var s=i(7990),r=/^\s+/;e.exports=function(e){return e?e.slice(0,s(e)+1).replace(r,""):e}},1957:(e,t,i)=>{var s="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;e.exports=s},9607:(e,t,i)=>{var s=i(2705),r=Object.prototype,o=r.hasOwnProperty,n=r.toString,a=s?s.toStringTag:void 0;e.exports=function(e){var t=o.call(e,a),i=e[a];try{e[a]=void 0;var s=!0}catch(e){}var r=n.call(e);return s&&(t?e[a]=i:delete e[a]),r}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,i)=>{var s=i(1957),r="object"==typeof self&&self&&self.Object===Object&&self,o=s||r||Function("return this")();e.exports=o},7990:e=>{var t=/\s/;e.exports=function(e){for(var i=e.length;i--&&t.test(e.charAt(i)););return i}},3279:(e,t,i)=>{var s=i(3218),r=i(7771),o=i(4841),n=Math.max,a=Math.min;e.exports=function(e,t,i){var l,c,d,h,u,p,v=0,b=!1,g=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var i=l,s=c;return l=c=void 0,v=t,h=e.apply(s,i)}function m(e){return v=e,u=setTimeout(w,t),b?y(e):h}function $(e){var i=e-p;return void 0===p||i>=t||i<0||g&&e-v>=d}function w(){var e=r();if($(e))return _(e);u=setTimeout(w,function(e){var i=t-(e-p);return g?a(i,d-(e-v)):i}(e))}function _(e){return u=void 0,f&&l?y(e):(l=c=void 0,h)}function x(){var e=r(),i=$(e);if(l=arguments,c=this,p=e,i){if(void 0===u)return m(p);if(g)return clearTimeout(u),u=setTimeout(w,t),y(p)}return void 0===u&&(u=setTimeout(w,t)),h}return t=o(t)||0,s(i)&&(b=!!i.leading,d=(g="maxWait"in i)?n(o(i.maxWait)||0,t):d,f="trailing"in i?!!i.trailing:f),x.cancel=function(){void 0!==u&&clearTimeout(u),v=0,l=p=c=u=void 0},x.flush=function(){return void 0===u?h:_(r())},x}},3218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,i)=>{var s=i(4239),r=i(7005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==s(e)}},7771:(e,t,i)=>{var s=i(5639);e.exports=function(){return s.Date.now()}},4841:(e,t,i)=>{var s=i(7561),r=i(3218),o=i(3448),n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var i=a.test(e);return i||l.test(e)?c(e.slice(2),i?2:8):n.test(e)?NaN:+e}},940:(e,t,i)=>{"use strict";var s=i(5862),r=i(8810),o=i(9662),n=i(4357);const a=s.iv`
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
    `;var l=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};class c extends s.oi{constructor(){super(...arguments),this.initCheckedState=!1,this.disabled=!1,this.text="",this.value="",this.name=""}emitChangeEvent(e){const t={value:e.target.value};this.dispatchEvent((0,n.y)("change",{detail:t}))}}c.styles=a,l([(0,o.Cb)({type:Boolean})],c.prototype,"initCheckedState",void 0),l([(0,o.Cb)({type:Boolean})],c.prototype,"disabled",void 0),l([(0,o.Cb)({type:String})],c.prototype,"text",void 0),l([(0,o.Cb)({type:String})],c.prototype,"value",void 0),l([(0,o.Cb)({type:String})],c.prototype,"name",void 0);var d=i(8201),h=i(1662);const u=s.iv`
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
`;let p=class extends c{render(){return s.dy`
            <div class="container">
                <label
                    class=${(0,r.$)({disabled:this.disabled})}
                >
                    <input
                        .name=${this.name}
                        tabindex="1"
                        class=${(0,r.$)({disabled:this.disabled})}
                        type="checkbox"
                        ?checked=${this.initCheckedState}
                        @change=${this.emitChangeEvent}
                        ?disabled=${this.disabled}
                        .value=${this.value}
                    />
                    <slot class="body-3">
                        ${(0,d.p)(!!this.text,s.dy`<span class="body-3">${this.text}</span>`)}
                    </slot>
                </label>
            </div>
        `}};p.styles=[c.styles,u],p=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,h.U)("tsc-checkbox")],p)},8201:(e,t,i)=>{"use strict";i.d(t,{p:()=>o});var s=i(5862),r=i(801);const o=(e,t,i)=>s.dy`${(0,r.g)(e,(()=>t),(()=>i||""))}`},1662:(e,t,i)=>{"use strict";i.d(t,{U:()=>s});const s=e=>t=>(customElements.get(e)||customElements.define(e,t),t)},4357:(e,t,i)=>{"use strict";i.d(t,{y:()=>r});const s={bubbles:!0,composed:!0},r=(e,t)=>new CustomEvent(e,{...s,...t?.eventOption,detail:t?.detail})},8701:(e,t,i)=>{"use strict";i.d(t,{ec:()=>c,i1:()=>d,iv:()=>l});const s=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),o=new Map;class n{constructor(e,t){if(this._$cssResult$=!0,t!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=o.get(this.cssText);return s&&void 0===e&&(o.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const a=e=>new n("string"==typeof e?e:e+"",r),l=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new n(i,r)},c=(e,t)=>{s?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))},d=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return a(t)})(e):e},5674:(e,t,i)=>{"use strict";i.d(t,{eZ:()=>s});const s=({finisher:e,descriptor:t})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:{...i,key:s};return null!=e&&(o.finisher=function(t){e(t,s)}),o}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,s,t(s)),null==e||e(r,s)}}},760:(e,t,i)=>{"use strict";i.d(t,{C:()=>r});const s=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function r(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):s(e,t)}},7935:(e,t,i)=>{"use strict";var s;null===(s=window.HTMLSlotElement)||void 0===s||s.prototype.assignedElements},43:(e,t,i)=>{"use strict";i(7935)},2669:(e,t,i)=>{"use strict";i.d(t,{I:()=>r});var s=i(5674);function r(e,t){return(0,s.eZ)({descriptor:i=>{const s={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[t]&&(this[t]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==s?s:null),this[t]}}return s}})}},9158:(e,t,i)=>{"use strict";i.d(t,{S:()=>r});var s=i(760);function r(e){return(0,s.C)({...e,state:!0})}},8732:(e,t,i)=>{"use strict";i.d(t,{fl:()=>h,iv:()=>r.iv});var s,r=i(8701);const o=window.trustedTypes,n=o?o.emptyScript:"",a=window.reactiveElementPolyfillSupport,l={toAttribute(e,t){switch(t){case Boolean:e=e?n:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},c=(e,t)=>t!==e&&(t==t||e==e),d={attribute:!0,type:String,converter:l,reflect:!1,hasChanged:c};class h extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Eh(i,t);void 0!==s&&(this._$Eu.set(s,i),e.push(s))})),e}static createProperty(e,t=d){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||d}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift((0,r.i1)(e))}else void 0!==e&&t.push((0,r.i1)(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return(0,r.ec)(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=d){var s,r;const o=this.constructor._$Eh(e,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:l.toAttribute)(t,i.type);this._$Ei=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(e,t){var i,s,r;const o=this.constructor,n=o._$Eu.get(e);if(void 0!==n&&this._$Ei!==n){const e=o.getPropertyOptions(n),a=e.converter,c=null!==(r=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==r?r:l.fromAttribute;this._$Ei=n,this[n]=c(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||c)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}h.finalized=!0,h.elementProperties=new Map,h.elementStyles=[],h.shadowRootOptions={mode:"open"},null==a||a({ReactiveElement:h}),(null!==(s=globalThis.reactiveElementVersions)&&void 0!==s?s:globalThis.reactiveElementVersions=[]).push("1.3.2")},8922:(e,t,i)=>{"use strict";i.d(t,{dy:()=>n.dy,iv:()=>o.iv,oi:()=>a});var s,r,o=i(8732),n=i(3692);class a extends o.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=(0,n.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return n.Jb}}a.finalized=!0,a._$litElement$=!0,null===(s=globalThis.litElementHydrateSupport)||void 0===s||s.call(globalThis,{LitElement:a});const l=globalThis.litElementPolyfillSupport;null==l||l({LitElement:a}),(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.2.0")},875:(e,t,i)=>{"use strict";i.d(t,{XM:()=>r,Xe:()=>o,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=e=>(...t)=>({_$litDirective$:e,values:t});class o{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},7499:(e,t,i)=>{"use strict";i.d(t,{$:()=>o});var s=i(3692),r=i(875);const o=(0,r.XM)(class extends r.Xe{constructor(e){var t;if(super(e),e.type!==r.pX.ATTRIBUTE||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,r;if(void 0===this.et){this.et=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.st)||void 0===i?void 0:i.has(e))&&this.et.add(e);return this.render(t)}const o=e.element.classList;this.et.forEach((e=>{e in t||(o.remove(e),this.et.delete(e))}));for(const e in t){const i=!!t[e];i===this.et.has(e)||(null===(r=this.st)||void 0===r?void 0:r.has(e))||(i?(o.add(e),this.et.add(e)):(o.remove(e),this.et.delete(e)))}return s.Jb}})},801:(e,t,i)=>{"use strict";function s(e,t,i){return e?t():null==i?void 0:i()}i.d(t,{g:()=>s})},3692:(e,t,i)=>{"use strict";var s;i.d(t,{Jb:()=>_,dy:()=>w,sY:()=>S});const r=globalThis.trustedTypes,o=r?r.createPolicy("lit-html",{createHTML:e=>e}):void 0,n=`lit$${(Math.random()+"").slice(9)}$`,a="?"+n,l=`<${a}>`,c=document,d=(e="")=>c.createComment(e),h=e=>null===e||"object"!=typeof e&&"function"!=typeof e,u=Array.isArray,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,b=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,f=/'/g,y=/"/g,m=/^(?:script|style|textarea|title)$/i,$=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),w=$(1),_=($(2),Symbol.for("lit-noChange")),x=Symbol.for("lit-nothing"),A=new WeakMap,S=(e,t,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let n=o._$litPart$;if(void 0===n){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new O(t.insertBefore(d(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n},z=c.createTreeWalker(c,129,null,!1),C=(e,t)=>{const i=e.length-1,s=[];let r,a=2===t?"<svg>":"",c=p;for(let t=0;t<i;t++){const i=e[t];let o,d,h=-1,u=0;for(;u<i.length&&(c.lastIndex=u,d=c.exec(i),null!==d);)u=c.lastIndex,c===p?"!--"===d[1]?c=v:void 0!==d[1]?c=b:void 0!==d[2]?(m.test(d[2])&&(r=RegExp("</"+d[2],"g")),c=g):void 0!==d[3]&&(c=g):c===g?">"===d[0]?(c=null!=r?r:p,h=-1):void 0===d[1]?h=-2:(h=c.lastIndex-d[2].length,o=d[1],c=void 0===d[3]?g:'"'===d[3]?y:f):c===y||c===f?c=g:c===v||c===b?c=p:(c=g,r=void 0);const $=c===g&&e[t+1].startsWith("/>")?" ":"";a+=c===p?i+l:h>=0?(s.push(o),i.slice(0,h)+"$lit$"+i.slice(h)+n+$):i+n+(-2===h?(s.push(void 0),t):$)}const d=a+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==o?o.createHTML(d):d,s]};class E{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,l=0;const c=e.length-1,h=this.parts,[u,p]=C(e,t);if(this.el=E.createElement(u,i),z.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=z.nextNode())&&h.length<c;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(n)){const i=p[l++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(n),t=/([.?@])?(.*)/.exec(i);h.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?H:"?"===t[1]?U:"@"===t[1]?R:P})}else h.push({type:6,index:o})}for(const t of e)s.removeAttribute(t)}if(m.test(s.tagName)){const e=s.textContent.split(n),t=e.length-1;if(t>0){s.textContent=r?r.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],d()),z.nextNode(),h.push({type:2,index:++o});s.append(e[t],d())}}}else if(8===s.nodeType)if(s.data===a)h.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(n,e+1));)h.push({type:7,index:o}),e+=n.length-1}o++}}static createElement(e,t){const i=c.createElement("template");return i.innerHTML=e,i}}function k(e,t,i=e,s){var r,o,n,a;if(t===_)return t;let l=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=h(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,s)),void 0!==s?(null!==(n=(a=i)._$Cl)&&void 0!==n?n:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(t=k(e,l._$AS(e,t.values),l,s)),t}class T{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:c).importNode(i,!0);z.currentNode=r;let o=z.nextNode(),n=0,a=0,l=s[0];for(;void 0!==l;){if(n===l.index){let t;2===l.type?t=new O(o,o.nextSibling,this,e):1===l.type?t=new l.ctor(o,l.name,l.strings,this,e):6===l.type&&(t=new j(o,this,e)),this.v.push(t),l=s[++a]}n!==(null==l?void 0:l.index)&&(o=z.nextNode(),n++)}return r}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class O{constructor(e,t,i,s){var r;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=k(this,e,t),h(e)?e===x||null==e||""===e?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==_&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return u(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==x&&h(this._$AH)?this._$AA.nextSibling.data=e:this.k(c.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,r="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=E.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.m(i);else{const e=new T(r,this),t=e.p(this.options);e.m(i),this.k(t),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new E(e)),t}S(e){u(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new O(this.M(d()),this.M(d()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class P{constructor(e,t,i,s,r){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=x}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(void 0===r)e=k(this,e,t,0),o=!h(e)||e!==this._$AH&&e!==_,o&&(this._$AH=e);else{const s=e;let n,a;for(e=r[0],n=0;n<r.length-1;n++)a=k(this,s[i+n],t,n),a===_&&(a=this._$AH[n]),o||(o=!h(a)||a!==this._$AH[n]),a===x?e=x:e!==x&&(e+=(null!=a?a:"")+r[n+1]),this._$AH[n]=a}o&&!s&&this.C(e)}C(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class H extends P{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===x?void 0:e}}const L=r?r.emptyScript:"";class U extends P{constructor(){super(...arguments),this.type=4}C(e){e&&e!==x?this.element.setAttribute(this.name,L):this.element.removeAttribute(this.name)}}class R extends P{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=k(this,e,t,0))&&void 0!==i?i:x)===_)return;const s=this._$AH,r=e===x&&s!==x||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class j{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){k(this,e)}}const I=window.litHtmlPolyfillSupport;null==I||I(E,O),(null!==(s=globalThis.litHtmlVersions)&&void 0!==s?s:globalThis.litHtmlVersions=[]).push("2.2.5")},9662:(e,t,i)=>{"use strict";i.d(t,{Cb:()=>s.C,IO:()=>o.I,SB:()=>r.S});var s=i(760),r=i(9158),o=i(2669);i(7935),i(43)},8810:(e,t,i)=>{"use strict";i.d(t,{$:()=>s.$});var s=i(7499)},5862:(e,t,i)=>{"use strict";i.d(t,{dy:()=>s.dy,iv:()=>s.iv,oi:()=>s.oi}),i(8732),i(3692);var s=i(8922)}},t={};function i(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,i),o.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=i(5862),t=i(1662);let s=class extends e.oi{render(){return e.dy`
            <div></div>
        `}};s.styles=e.iv`
        div {
            background-color: var(--grey-10);
            width: calc(var(--base-size) / 4);
            height: calc(var(--base-size) * 5);
        }
    `,s=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([(0,t.U)("tsc-divider")],s),i(940);var r=i(9662),o=i(3692),n=i(875);const a=(0,n.XM)(class extends n.Xe{constructor(e){var t;if(super(e),e.type!==n.pX.ATTRIBUTE||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ct){this.ct=new Set;for(const e in t)this.ct.add(e);return this.render(t)}this.ct.forEach((e=>{null==t[e]&&(this.ct.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const s=t[e];null!=s&&(this.ct.add(e),e.includes("-")?i.setProperty(e,s):i[e]=s)}return o.Jb}});var l=i(3279),c=i.n(l);const d=[e.iv`
.border-radius-4 {
    border-radius: var(--border-radius-4);
}

.border-radius-6 {
    border-radius: var(--border-radius-4);
}
`,e.iv`
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
`,e.iv`
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
`,e.iv`
        * {
            box-sizing: border-box;
        }`];var h=i(4357),u=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let p=class extends e.oi{constructor(){super(...arguments),this.items=[],this.itemHeight="10em",this.maxHeight="calc(var(--base-size) * 91)",this.scrollbarHeight=0}connectedCallback(){super.connectedCallback(),setTimeout((()=>{this.scrollbarHeight=(this.container?.clientHeight||0)/3,this.container?.style.setProperty("--scroll-height",`${this.scrollbarHeight}px`),this.container?.addEventListener("scroll",c()(this.scrollContainer.bind(this),150))}),100)}scrollContainer(){if(this.container){const e=this.container?.scrollTop,t=this.container?.scrollHeight;e+this.scrollbarHeight>=.6*t&&this.dispatchEvent((0,h.y)("scrollPaginate"))}}render(){return e.dy`
        <div class="container level-2" style=${a({maxHeight:this.maxHeight})}>
            <slot></slot>
        </div>
        `}};p.styles=[d,e.iv`
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
        `],u([(0,r.Cb)({type:Array})],p.prototype,"items",void 0),u([(0,r.Cb)({type:String})],p.prototype,"itemHeight",void 0),u([(0,r.Cb)({type:String})],p.prototype,"maxHeight",void 0),u([(0,r.IO)(".container")],p.prototype,"container",void 0),p=u([(0,t.U)("tsc-scroll")],p);var v=i(8201);const b="selectedValue",g=new Array(200).fill(0).map(((e,t)=>({value:Math.random(),label:(t+1).toString(),subtitle:"some text",inn:1,kpp:12})));var f=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let y=class extends e.oi{constructor(){super(...arguments),this._items=[],this.multiselect=!1,this.itemLimit=50,this.maxHeight="calc(var(--base-size) * 25)",this.extraLabelKeys=["inn","kpp"],this._visibleItems=[],this.offset=0}set items(e){console.log("get new items",e);const t=(e,t)=>!t||e.some((e=>!t.find((t=>t.value===e.value)))),i=t(e,this.items);console.log("isChanged: ",i),t(e,this.items)&&(this._items=e,this.offset=0,this.visibleItems=[],this.getNextItems())}get items(){return this._items}set visibleItems(e){const t=this.visibleItems.slice();this._visibleItems=e,this.offset+=e.length,this.requestUpdate("visibleItems",t)}get visibleItems(){return this._visibleItems}emitSelectedValue(e){if(!this.multiselect){const t={value:e};this.dispatchEvent((0,h.y)(b,{detail:t}))}}getNextItems(){let e=this.items.slice(this.offset,this.itemLimit+this.offset);0===e.length&&this.paginateFunction&&(e=this.paginateFunction()),this.visibleItems=[...this.visibleItems,...e]}changeSelected(e,t){const i=this.visibleItems.find((t=>t.value===e.value));i&&(i.checked=t);const s={value:this.visibleItems.filter((e=>e.checked))};this.dispatchEvent((0,h.y)(b,{detail:s}))}render(){return e.dy`
        <tsc-scroll .maxHeight=${this.maxHeight} @scrollPaginate=${this.getNextItems}>
            <div class="list">
                ${this.visibleItems.map((t=>e.dy`
                <div class="list-item" @click=${e=>{e.stopPropagation(),this.emitSelectedValue(t)}}>
                    ${(0,v.p)(this.multiselect,e.dy`<tsc-checkbox ?initCheckedState=${t.checked} @change=${e=>this.changeSelected(t,e.detail.checked)}>
                        <div class="list-item-text">
                            <div class="body-2">${t.label}</div>
                            ${(0,v.p)(!this.extraLabelKeys,e.dy`<div class="subtitle-2 grey-100">${t.subtitle||""}</div>`)}
                            ${(0,v.p)(this.extraLabelKeys.length>0,e.dy`
                                <div class="extra-label">
                                    ${this.extraLabelKeys.map((i=>e.dy`
                                        <div><span class="subtitle-2 grey-100">${i}</span>: <span class="subtitle-2 grey-160">${t[i]}</span></div>
                                    `))}
                                </div>
                                `)}
                        </div>
                    </tsc-checkbox>`)}
                </div>
                `))}
            </div>
    </tsc-scroll>
        `}};y.styles=[d,e.iv`
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
        padding-bottom: var(--space-12);
        height: calc(var(--base-size) * 14);
        cursor: pointer;
        display: flex;
    }

    .list-item:hover {
        background: var(--grey-10);
    }

    .list-item-text {
        display: flex;
        flex-direction: column;
    }

    .body-2 {
        color: var(--grey-200);
    }

    .grey-100 {
        color: var(--grey-100);
    }

    .grey-160 {
        color: var(--grey-160);
    }

    .extra-label {
        display: flex;
        gap: var(--space-12);
    }
    `],f([(0,r.Cb)({type:Boolean})],y.prototype,"multiselect",void 0),f([(0,r.Cb)({type:Number})],y.prototype,"itemLimit",void 0),f([(0,r.Cb)({type:String})],y.prototype,"maxHeight",void 0),f([(0,r.Cb)({type:Array})],y.prototype,"items",null),f([(0,r.Cb)({type:Array})],y.prototype,"extraLabelKeys",void 0),f([(0,r.Cb)({type:Object})],y.prototype,"paginateFunction",void 0),f([(0,r.SB)()],y.prototype,"visibleItems",null),y=f([(0,t.U)("tsc-list")],y);var m=i(8810);var $;!function(e){e.M="M",e.L="L",e.S="S",e.XS="XS"}($||($={}));const w=[d,e.iv`
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
`];var _=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};class x extends e.oi{constructor(){super(...arguments),this.classSettings={M:{placeholder:"subtitle-2",inputText:"body-3",height:"calc(var(--base-size) * 12)"},L:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 14)"},S:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 10)"},XS:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 8)"}},this.outline=!1,this.size=$.M,this.success=!1,this.error=!1,this.placeHolderVisible=!1,this.additionalText="",this.clearButtonVisible=!1,this.name=""}connectedCallback(){super.connectedCallback(),console.log("connectedCallback: ",this.input),setTimeout((()=>{console.log("this.input: ",this.input),this.input}),0)}focusInput(){this.placeHolderVisible=!0,this.clearButtonVisible=!0}blurInput(){this.placeHolderVisible=!!this.input?.value,this.clearButtonVisible=!1}editInput(){const e={value:this.input?.value};this.dispatchEvent((0,h.y)("input-value",{detail:e}))}clearInputValue(){this.input&&(this.input.value=""),this.input?.focus()}changeValue(){const e={value:this.input?.value};this.dispatchEvent((0,h.y)("input-change",{detail:e}))}}x.styles=w,_([(0,r.Cb)({type:Boolean})],x.prototype,"outline",void 0),_([(0,r.Cb)()],x.prototype,"size",void 0),_([(0,r.Cb)({type:Boolean})],x.prototype,"success",void 0),_([(0,r.Cb)({type:Boolean})],x.prototype,"error",void 0),_([(0,r.SB)()],x.prototype,"placeHolderVisible",void 0),_([(0,r.Cb)()],x.prototype,"additionalText",void 0),_([(0,r.IO)("#input")],x.prototype,"input",void 0),_([(0,r.SB)()],x.prototype,"clearButtonVisible",void 0),_([(0,r.Cb)({type:String})],x.prototype,"name",void 0);const A=[d,e.iv`
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
`];var S=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let z=class extends x{constructor(){super(...arguments),this.isListVisible=!1,this._inputLabel="",this.items=g,this.multiselect=!0,this.listTemplate=e.dy`
    <div class="dropdown-list">
      <tsc-list
        ?multiselect=${this.multiselect}
        .items=${this.items}
        @selectedValue=${this.emitSelectedValue}
        .paginateFunction=${()=>[{label:"new label",value:"some value"}]}
      ></tsc-list>
    </div>
  `}get clearButtonHtml(){return e.dy`
      <div
        class="clear-button"
        style=${a({gridGap:"calc(var(--base-size) * 3)",display:this.clearButtonVisible?"flex":"none"})}
      >
        <svg
          @click=${this.clearInputValue}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.714 1.28595L6 6M6 6L1.28595 10.714M6 6L10.714 10.714M6 6L1.28595 1.28595"
            stroke="#C0C8D0"
            stroke-width="2"
          />
        </svg>
        <tsc-divider></tsc-divider>
      </div>
    `}clearInputValue(){this.input&&(this.input.value=""),this._inputLabel=""}set initValue(e){console.log("get init value",e,this.items),this.items&&this.items.length&&(this._inputLabel=this.items.find((t=>t.value===e))?.label||""),console.log("new input label",this._inputLabel)}emitSelectedValue(e){if(console.log("get value:",e.detail.value),Array.isArray(e.detail.value)){const t=e.detail.value.map((e=>e.label)).join("; ");this._inputLabel=t}else if(e.detail.value&&"value"in e.detail.value){const t=e.detail.value;this.isListVisible=!1,this._inputLabel=this.items.find((e=>e.value===t.value))?.label||"",console.log("this._inputLabel: ",this._inputLabel)}}openList(e){e.stopPropagation(),this.isListVisible=!this.isListVisible}connectedCallback(){super.connectedCallback(),window.addEventListener("click",(()=>{this.isListVisible=!1}))}getInputTemplate(){return e.dy`
        <input
            @focus="${this.focusInput}"
            @blur="${this.blurInput}"
            .name=${this.name}
            @input=${this.editInput}
            @change=${this.changeValue}
            id="input"
            class=${(0,m.$)({[this.classSettings[this.size].inputText]:!0,outline:this.outline,success:this.success,error:this.error})}
            .placeholder=${this.placeHolderVisible?"":"Название сделки"}
            .value=${this._inputLabel}
          />
        `}getIconSVG(){return e.dy`
        <svg
                width="18"
                height="10"
                viewBox="0 0 18 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 0.833344L9 8.33334L16.5 0.833344"
                  stroke="#C0C8D0"
                  stroke-width="2"
                />
              </svg>
        `}render(){return e.dy`
      <div class="dropdown" @click=${this.openList}>
        <div
          class="input-wrapper"
          style=${a({height:this.classSettings[this.size].height})}
        >
          ${this.placeHolderVisible?e.dy`<div
                class="${(0,m.$)({[this.classSettings[this.size].placeholder]:!0,"input-placeholder":!0})}"
              >
                Название сделки
              </div>`:""}
          ${this.getInputTemplate()}
          <div
            class=${(0,m.$)({"subtitle-2":!0,"additional-text":!0,success:this.success,error:this.error})}
          >
            ${this.additionalText}
          </div>
          <div class="input-button">
            ${this.clearButtonHtml}
            <div
              class=${(0,m.$)({rotate:this.isListVisible,"dropdown-list-icon":!0})}
            >      
            ${this.getIconSVG()}
            </div>
          </div>
        </div>
        ${(0,v.p)(this.isListVisible,this.listTemplate)}
      </div>
    `}};z.styles=A,S([(0,r.SB)()],z.prototype,"isListVisible",void 0),S([(0,r.SB)()],z.prototype,"_inputLabel",void 0),S([(0,r.Cb)({type:String})],z.prototype,"initValue",null),S([(0,r.Cb)({type:Array})],z.prototype,"items",void 0),S([(0,r.Cb)({type:Boolean})],z.prototype,"multiselect",void 0),z=S([(0,t.U)("tsc-dropdown")],z)})()})();