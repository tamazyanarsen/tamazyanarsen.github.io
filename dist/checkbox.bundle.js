/*! For license information please see checkbox.bundle.js.LICENSE.txt */
(()=>{"use strict";const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const r=(t,...i)=>{const r=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(r,e)},o=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t;var n;const l=window.trustedTypes,a=l?l.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const r=this[t];this[e]=s,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var s,r;const o=this.constructor._$Eh(t,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:d.toAttribute)(e,i.type);this._$Ei=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(t,e){var i,s,r;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==r?r:d.fromAttribute;this._$Ei=n,this[n]=a(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:p}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const b=globalThis.trustedTypes,$=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,g="?"+f,_=`<${g}>`,y=document,m=(t="")=>y.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,w=Array.isArray,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,C=/>/g,x=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,k=/'/g,U=/"/g,z=/^(?:script|style|textarea|title)$/i,P=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),T=P(1),H=(P(2),Symbol.for("lit-noChange")),O=Symbol.for("lit-nothing"),M=new WeakMap,R=y.createTreeWalker(y,129,null,!1),N=(t,e)=>{const i=t.length-1,s=[];let r,o=2===e?"<svg>":"",n=E;for(let e=0;e<i;e++){const i=t[e];let l,a,h=-1,d=0;for(;d<i.length&&(n.lastIndex=d,a=n.exec(i),null!==a);)d=n.lastIndex,n===E?"!--"===a[1]?n=S:void 0!==a[1]?n=C:void 0!==a[2]?(z.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=x):void 0!==a[3]&&(n=x):n===x?">"===a[0]?(n=null!=r?r:E,h=-1):void 0===a[1]?h=-2:(h=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?x:'"'===a[3]?U:k):n===U||n===k?n=x:n===S||n===C?n=E:(n=x,r=void 0);const c=n===x&&t[e+1].startsWith("/>")?" ":"";o+=n===E?i+_:h>=0?(s.push(l),i.slice(0,h)+"$lit$"+i.slice(h)+f+c):i+f+(-2===h?(s.push(void 0),e):c)}const l=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(l):l,s]};class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0;const n=t.length-1,l=this.parts,[a,h]=N(t,e);if(this.el=L.createElement(a,i),R.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=R.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(f)){const i=h[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(f),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?V:"?"===e[1]?q:"@"===e[1]?K:I})}else l.push({type:6,index:r})}for(const e of t)s.removeAttribute(e)}if(z.test(s.tagName)){const t=s.textContent.split(f),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],m()),R.nextNode(),l.push({type:2,index:++r});s.append(t[e],m())}}}else if(8===s.nodeType)if(s.data===g)l.push({type:2,index:r});else{let t=-1;for(;-1!==(t=s.data.indexOf(f,t+1));)l.push({type:7,index:r}),t+=f.length-1}r++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function j(t,e,i=t,s){var r,o,n,l;if(e===H)return e;let a=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const h=A(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==h&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===h?a=void 0:(a=new h(t),a._$AT(t,i,s)),void 0!==s?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(e=j(t,a._$AS(t,e.values),a,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(i,!0);R.currentNode=r;let o=R.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let e;2===a.type?e=new D(o,o.nextSibling,this,t):1===a.type?e=new a.ctor(o,a.name,a.strings,this,t):6===a.type&&(e=new J(o,this,t)),this.v.push(e),a=s[++l]}n!==(null==a?void 0:a.index)&&(o=R.nextNode(),n++)}return r}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var r;this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),A(t)?t===O||null==t||""===t?(this._$AH!==O&&this._$AR(),this._$AH=O):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return w(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==O&&A(this._$AH)?this._$AA.nextSibling.data=t:this.k(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,r="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.m(i);else{const t=new B(r,this),e=t.p(this.options);t.m(i),this.k(e),this._$AH=t}}_$AC(t){let e=M.get(t.strings);return void 0===e&&M.set(t.strings,e=new L(t)),e}S(t){w(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new D(this.M(m()),this.M(m()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class I{constructor(t,e,i,s,r){this.type=1,this._$AH=O,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=O}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const r=this.strings;let o=!1;if(void 0===r)t=j(this,t,e,0),o=!A(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{const s=t;let n,l;for(t=r[0],n=0;n<r.length-1;n++)l=j(this,s[i+n],e,n),l===H&&(l=this._$AH[n]),o||(o=!A(l)||l!==this._$AH[n]),l===O?t=O:t!==O&&(t+=(null!=l?l:"")+r[n+1]),this._$AH[n]=l}o&&!s&&this.C(t)}C(t){t===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class V extends I{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===O?void 0:t}}const W=b?b.emptyScript:"";class q extends I{constructor(){super(...arguments),this.type=4}C(t){t&&t!==O?this.element.setAttribute(this.name,W):this.element.removeAttribute(this.name)}}class K extends I{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=j(this,t,e,0))&&void 0!==i?i:O)===H)return;const s=this._$AH,r=t===O&&s!==O||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==O&&(s===O||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class J{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const Z=window.litHtmlPolyfillSupport;var F,G;null==Z||Z(L,D),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.5");class Q extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let n=o._$litPart$;if(void 0===n){const t=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new D(e.insertBefore(m(),t),t,void 0,null!=i?i:{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}Q.finalized=!0,Q._$litElement$=!0,null===(F=globalThis.litElementHydrateSupport)||void 0===F||F.call(globalThis,{LitElement:Q});const X=globalThis.litElementPolyfillSupport;null==X||X({LitElement:Q}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");const Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function tt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Y(t,e)}var et;null===(et=window.HTMLSlotElement)||void 0===et||et.prototype.assignedElements;const it=(ot=class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,s;if(void 0===this.et){this.et=new Set,void 0!==t.strings&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.st)||void 0===i?void 0:i.has(t))&&this.et.add(t);return this.render(e)}const r=t.element.classList;this.et.forEach((t=>{t in e||(r.remove(t),this.et.delete(t))}));for(const t in e){const i=!!e[t];i===this.et.has(t)||(null===(s=this.st)||void 0===s?void 0:s.has(t))||(i?(r.add(t),this.et.add(t)):(r.remove(t),this.et.delete(t)))}return H}},(...t)=>({_$litDirective$:ot,values:t})),st={bubbles:!0,composed:!0},rt=r`
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
    `;var ot,nt=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};class lt extends Q{constructor(){super(...arguments),this.initCheckedState=!1,this.disabled=!1,this.text="",this.value="",this.name=""}emitChangeEvent(t){var e;this.dispatchEvent(("change",e={value:t.target.value},new CustomEvent("change",{...st,detail:e})))}}lt.styles=rt,nt([tt({type:Boolean})],lt.prototype,"initCheckedState",void 0),nt([tt({type:Boolean})],lt.prototype,"disabled",void 0),nt([tt({type:String})],lt.prototype,"text",void 0),nt([tt({type:String})],lt.prototype,"value",void 0),nt([tt({type:String})],lt.prototype,"name",void 0);const at=r`
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
`;let ht=class extends lt{render(){return T`
            <div class="container">
                <label
                    class=${it({disabled:this.disabled})}
                >
                    <input
                        .name=${this.name}
                        tabindex="1"
                        class=${it({disabled:this.disabled})}
                        type="checkbox"
                        ?checked=${this.initCheckedState}
                        @change=${this.emitChangeEvent}
                        ?disabled=${this.disabled}
                        .value=${this.value}
                    />
                    ${t=!!this.text,e=T`<span class="body-3">${this.text}</span>`,T`${function(t,i,s){return t?e:null==s?void 0:s()}(t,0,(()=>""))}`}
                </label>
            </div>
        `;var t,e}};ht.styles=[lt.styles,at],ht=function(t,e,i,s){var r,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(n=(o<3?r(n):o>3?r(e,i,n):r(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n}([t=>"function"==typeof t?((t,e)=>(window.customElements.define("tsc-checkbox",e),e))(0,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(t){window.customElements.define("tsc-checkbox",t)}}})(0,t)],ht)})();