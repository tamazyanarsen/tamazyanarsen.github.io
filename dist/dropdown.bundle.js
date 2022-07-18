/*! For license information please see dropdown.bundle.js.LICENSE.txt */
(()=>{"use strict";const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,t=Symbol(),i=new Map;class s{constructor(e,i){if(this._$cssResult$=!0,i!==t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let t=i.get(this.cssText);return e&&void 0===t&&(i.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const r=(e,...i)=>{const r=1===e.length?e[0]:i.reduce(((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1]),e[0]);return new s(r,t)},o=e?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let i="";for(const t of e.cssRules)i+=t.cssText;return(e=>new s("string"==typeof e?e:e+"",t))(i)})(e):e;var n;const l=window.trustedTypes,a=l?l.emptyScript:"",c=window.reactiveElementPolyfillSupport,h={toAttribute(e,t){switch(t){case Boolean:e=e?a:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},d=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:d};class p extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const s=this._$Eh(i,t);void 0!==s&&(this._$Eu.set(s,i),e.push(s))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eh(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ES(e,t,i=u){var s,r;const o=this.constructor._$Eh(e,i);if(void 0!==o&&!0===i.reflect){const n=(null!==(r=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==r?r:h.toAttribute)(t,i.type);this._$Ei=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Ei=null}}_$AK(e,t){var i,s,r;const o=this.constructor,n=o._$Eu.get(e);if(void 0!==n&&this._$Ei!==n){const e=o.getPropertyOptions(n),l=e.converter,a=null!==(r=null!==(s=null===(i=l)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof l?l:null)&&void 0!==r?r:h.fromAttribute;this._$Ei=n,this[n]=a(t,e.type),this._$Ei=null}}requestUpdate(e,t,i){let s=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||d)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}var v;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==c||c({ReactiveElement:p}),(null!==(n=globalThis.reactiveElementVersions)&&void 0!==n?n:globalThis.reactiveElementVersions=[]).push("1.3.2");const b=globalThis.trustedTypes,g=b?b.createPolicy("lit-html",{createHTML:e=>e}):void 0,f=`lit$${(Math.random()+"").slice(9)}$`,y="?"+f,$=`<${y}>`,m=document,_=(e="")=>m.createComment(e),w=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,E=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,C=/'/g,k=/"/g,P=/^(?:script|style|textarea|title)$/i,H=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),T=H(1),O=(H(2),Symbol.for("lit-noChange")),U=Symbol.for("lit-nothing"),L=new WeakMap,R=m.createTreeWalker(m,129,null,!1),M=(e,t)=>{const i=e.length-1,s=[];let r,o=2===t?"<svg>":"",n=S;for(let t=0;t<i;t++){const i=e[t];let l,a,c=-1,h=0;for(;h<i.length&&(n.lastIndex=h,a=n.exec(i),null!==a);)h=n.lastIndex,n===S?"!--"===a[1]?n=x:void 0!==a[1]?n=E:void 0!==a[2]?(P.test(a[2])&&(r=RegExp("</"+a[2],"g")),n=z):void 0!==a[3]&&(n=z):n===z?">"===a[0]?(n=null!=r?r:S,c=-1):void 0===a[1]?c=-2:(c=n.lastIndex-a[2].length,l=a[1],n=void 0===a[3]?z:'"'===a[3]?k:C):n===k||n===C?n=z:n===x||n===E?n=S:(n=z,r=void 0);const d=n===z&&e[t+1].startsWith("/>")?" ":"";o+=n===S?i+$:c>=0?(s.push(l),i.slice(0,c)+"$lit$"+i.slice(c)+f+d):i+f+(-2===c?(s.push(void 0),t):d)}const l=o+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==g?g.createHTML(l):l,s]};class V{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let r=0,o=0;const n=e.length-1,l=this.parts,[a,c]=M(e,t);if(this.el=V.createElement(a,i),R.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(s=R.nextNode())&&l.length<n;){if(1===s.nodeType){if(s.hasAttributes()){const e=[];for(const t of s.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(f)){const i=c[o++];if(e.push(t),void 0!==i){const e=s.getAttribute(i.toLowerCase()+"$lit$").split(f),t=/([.?@])?(.*)/.exec(i);l.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?D:"?"===t[1]?W:"@"===t[1]?K:I})}else l.push({type:6,index:r})}for(const t of e)s.removeAttribute(t)}if(P.test(s.tagName)){const e=s.textContent.split(f),t=e.length-1;if(t>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],_()),R.nextNode(),l.push({type:2,index:++r});s.append(e[t],_())}}}else if(8===s.nodeType)if(s.data===y)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=s.data.indexOf(f,e+1));)l.push({type:7,index:r}),e+=f.length-1}r++}}static createElement(e,t){const i=m.createElement("template");return i.innerHTML=e,i}}function N(e,t,i=e,s){var r,o,n,l;if(t===O)return t;let a=void 0!==s?null===(r=i._$Cl)||void 0===r?void 0:r[s]:i._$Cu;const c=w(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(o=null==a?void 0:a._$AO)||void 0===o||o.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,i,s)),void 0!==s?(null!==(n=(l=i)._$Cl)&&void 0!==n?n:l._$Cl=[])[s]=a:i._$Cu=a),void 0!==a&&(t=N(e,a._$AS(e,t.values),a,s)),t}class j{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:i},parts:s}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:m).importNode(i,!0);R.currentNode=r;let o=R.nextNode(),n=0,l=0,a=s[0];for(;void 0!==a;){if(n===a.index){let t;2===a.type?t=new B(o,o.nextSibling,this,e):1===a.type?t=new a.ctor(o,a.name,a.strings,this,e):6===a.type&&(t=new X(o,this,e)),this.v.push(t),a=s[++l]}n!==(null==a?void 0:a.index)&&(o=R.nextNode(),n++)}return r}m(e){let t=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class B{constructor(e,t,i,s){var r;this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cg=null===(r=null==s?void 0:s.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=N(this,e,t),w(e)?e===U||null==e||""===e?(this._$AH!==U&&this._$AR(),this._$AH=U):e!==this._$AH&&e!==O&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return A(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==U&&w(this._$AH)?this._$AA.nextSibling.data=e:this.k(m.createTextNode(e)),this._$AH=e}T(e){var t;const{values:i,_$litType$:s}=e,r="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=V.createElement(s.h,this.options)),s);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.m(i);else{const e=new j(r,this),t=e.p(this.options);e.m(i),this.k(t),this._$AH=e}}_$AC(e){let t=L.get(e.strings);return void 0===t&&L.set(e.strings,t=new V(e)),t}S(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const r of e)s===t.length?t.push(i=new B(this.M(_()),this.M(_()),this,this.options)):i=t[s],i._$AI(r),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class I{constructor(e,t,i,s,r){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=U}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){const r=this.strings;let o=!1;if(void 0===r)e=N(this,e,t,0),o=!w(e)||e!==this._$AH&&e!==O,o&&(this._$AH=e);else{const s=e;let n,l;for(e=r[0],n=0;n<r.length-1;n++)l=N(this,s[i+n],t,n),l===O&&(l=this._$AH[n]),o||(o=!w(l)||l!==this._$AH[n]),l===U?e=U:e!==U&&(e+=(null!=l?l:"")+r[n+1]),this._$AH[n]=l}o&&!s&&this.C(e)}C(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class D extends I{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===U?void 0:e}}const q=b?b.emptyScript:"";class W extends I{constructor(){super(...arguments),this.type=4}C(e){e&&e!==U?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class K extends I{constructor(e,t,i,s,r){super(e,t,i,s,r),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=N(this,e,t,0))&&void 0!==i?i:U)===O)return;const s=this._$AH,r=e===U&&s!==U||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class X{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}}const Z=window.litHtmlPolyfillSupport;var J,G;null==Z||Z(V,B),(null!==(v=globalThis.litHtmlVersions)&&void 0!==v?v:globalThis.litHtmlVersions=[]).push("2.2.5");class F extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,i)=>{var s,r;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:t;let n=o._$litPart$;if(void 0===n){const e=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:null;o._$litPart$=n=new B(t.insertBefore(_(),e),e,void 0,null!=i?i:{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return O}}F.finalized=!0,F._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:F});const Q=globalThis.litElementPolyfillSupport;null==Q||Q({LitElement:F}),(null!==(G=globalThis.litElementVersions)&&void 0!==G?G:globalThis.litElementVersions=[]).push("3.2.0");const Y=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:s}=t;return{kind:i,elements:s,finisher(t){window.customElements.define(e,t)}}})(e,t),ee=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function te(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ee(e,t)}function ie(e){return te({...e,state:!0})}function se(e,t){return(({finisher:e,descriptor:t})=>(i,s)=>{var r;if(void 0===s){const s=null!==(r=i.originalKey)&&void 0!==r?r:i.key,o=null!=t?{kind:"method",placement:"prototype",key:s,descriptor:t(i.key)}:{...i,key:s};return null!=e&&(o.finisher=function(t){e(t,s)}),o}{const r=i.constructor;void 0!==t&&Object.defineProperty(i,s,t(s)),null==e||e(r,s)}})({descriptor:i=>{const s={get(){var t,i;return null!==(i=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof i?Symbol():"__"+i;s.get=function(){var i,s;return void 0===this[t]&&(this[t]=null!==(s=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(e))&&void 0!==s?s:null),this[t]}}return s}})}var re;null===(re=window.HTMLSlotElement)||void 0===re||re.prototype.assignedElements;let oe=class extends F{render(){return T`
            <div></div>
        `}};oe.styles=r`
        div {
            background-color: var(--grey-10);
            width: calc(var(--base-size) / 4);
            height: calc(var(--base-size) * 5);
        }
    `,oe=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n}([Y("tsc-divider")],oe);const ne={bubbles:!0,composed:!0},le=(e,t)=>new CustomEvent(e,{...ne,detail:t}),ae=e=>(...t)=>({_$litDirective$:e,values:t});class ce{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const he=ae(class extends ce{constructor(e){var t;if(super(e),1!==e.type||"style"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce(((t,i)=>{const s=e[i];return null==s?t:t+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${s};`}),"")}update(e,[t]){const{style:i}=e.element;if(void 0===this.ct){this.ct=new Set;for(const e in t)this.ct.add(e);return this.render(t)}this.ct.forEach((e=>{null==t[e]&&(this.ct.delete(e),e.includes("-")?i.removeProperty(e):i[e]="")}));for(const e in t){const s=t[e];null!=s&&(this.ct.add(e),e.includes("-")?i.setProperty(e,s):i[e]=s)}return O}}),de=[r`
.border-radius-4 {
    border-radius: var(--border-radius-4);
}

.border-radius-6 {
    border-radius: var(--border-radius-4);
}
`,r`
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
`,r`
.level-1 {
    background: white;
    box-shadow: 0px calc(var(--base-size) / 4) var(--base-size) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-2 {
    background: white;
    box-shadow: 0px calc(var(--base-size) / 4) calc(var(--base-size) * 15 / 4) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-3 {
    background: white;
    box-shadow: 0px 0px calc(var(--base-size) * 10) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}

.level-4 {
    background: white;
    box-shadow: 0px 0px calc(var(--base-size) * 55 / 4) rgba(33, 39, 44, 0.1);
    border-radius: calc(var(--base-size) * 3 / 2);
}
`,r`
        * {
            box-sizing: border-box;
        }`];var ue=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let pe=class extends F{constructor(){super(...arguments),this.maxHeight="calc(var(--base-size) * 91)"}connectedCallback(){super.connectedCallback(),setTimeout((()=>{console.log(document.styleSheets,this.container?.clientHeight),this.container?.style.setProperty("--scroll-height",`calc(var(--base-size) * ${this.container?.clientHeight} / 12)`)}),100)}render(){return T`
        <div class="container level-2" style=${he({maxHeight:this.maxHeight})}>
            <slot></slot>
        </div>
        `}};pe.styles=[de,r`
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
                /* border-radius: calc(var(--border-radius-4) * 4); */
            }
        `],ue([te({type:String})],pe.prototype,"maxHeight",void 0),ue([se(".container")],pe.prototype,"container",void 0),pe=ue([Y("tsc-scroll")],pe);var ve=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let be=class extends F{constructor(){super(...arguments),this._items=[]}set items(e){console.log(e),this._items=e}get items(){return this._items}emitSelectedValue(e){this.dispatchEvent(le("selectedValue",{value:e}))}render(){return T`
        <tsc-scroll .maxHeight=${"100px"}>
            <div class="list">
                ${this.items.map((e=>T`
                <div class="list-item body-2" @click=${()=>this.emitSelectedValue(e)}>
                    ${e.label}
                </div>
                `))}
            </div>
        </tsc-scroll>
        `}};be.styles=r`
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
    `,ve([te({type:Array})],be.prototype,"items",null),be=ve([Y("tsc-list")],be);const ge=ae(class extends ce{constructor(e){var t;if(super(e),1!==e.type||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var i,s;if(void 0===this.et){this.et=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(i=this.st)||void 0===i?void 0:i.has(e))&&this.et.add(e);return this.render(t)}const r=e.element.classList;this.et.forEach((e=>{e in t||(r.remove(e),this.et.delete(e))}));for(const e in t){const i=!!t[e];i===this.et.has(e)||(null===(s=this.st)||void 0===s?void 0:s.has(e))||(i?(r.add(e),this.et.add(e)):(r.remove(e),this.et.delete(e)))}return O}});var fe;!function(e){e.M="M",e.L="L",e.S="S",e.XS="XS"}(fe||(fe={}));const ye=[de,r`
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
`];var $e=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};class me extends F{constructor(){super(...arguments),this.classSettings={M:{placeholder:"subtitle-2",inputText:"body-3",height:"calc(var(--base-size) * 12)"},L:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 14)"},S:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 10)"},XS:{placeholder:"body-3",inputText:"body-2",height:"calc(var(--base-size) * 8)"}},this.outline=!1,this.size=fe.M,this.success=!1,this.error=!1,this.placeHolderVisible=!1,this.additionalText="",this.clearButtonVisible=!1}connectedCallback(){super.connectedCallback(),console.log("connectedCallback: ",this.input),setTimeout((()=>{console.log("this.input: ",this.input),this.input}),0)}focusInput(){this.placeHolderVisible=!0,this.clearButtonVisible=!0}blurInput(){this.placeHolderVisible=!!this.input?.value,this.clearButtonVisible=!1}editInput(){this.dispatchEvent(le("input-value",{value:this.input?.value}))}clearInputValue(){this.input&&(this.input.value=""),this.input?.focus()}changeValue(){this.dispatchEvent(le("input-change",{value:this.input?.value}))}}me.styles=ye,$e([te({type:Boolean})],me.prototype,"outline",void 0),$e([te()],me.prototype,"size",void 0),$e([te({type:Boolean})],me.prototype,"success",void 0),$e([te({type:Boolean})],me.prototype,"error",void 0),$e([ie()],me.prototype,"placeHolderVisible",void 0),$e([te()],me.prototype,"additionalText",void 0),$e([se("#input")],me.prototype,"input",void 0),$e([ie()],me.prototype,"clearButtonVisible",void 0);const _e=[de,r`
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
        }

        .rotate {
            transform: rotate(180deg);
        }

        .dropdown-list {
            transition: transform 0.5s;
            cursor: pointer;
        }
`];var we=function(e,t,i,s){var r,o=arguments.length,n=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(o<3?r(n):o>3?r(t,i,n):r(t,i))||n);return o>3&&n&&Object.defineProperty(t,i,n),n};let Ae=class extends me{constructor(){super(...arguments),this.isListVisible=!1,this._inputLabel="",this._emitValue=!1,this.items=[{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"123",value:"12"},{label:"1",value:{t:[12]}}],this.listTemplate=T`
        <div>
            <tsc-list .items=${this.items}
                @selectedValue=${this.emitSelectedValue}
            ></tsc-list>
        </div>
    `}get clearButtonHtml(){return T`
        <div class="clear-button" style=${he({gridGap:"calc(var(--base-size) * 3)",display:this.clearButtonVisible?"flex":"none"})}>
            <svg @click=${this.clearInputValue} width="12" height = "12" viewBox = "0 0 12 12" fill = "none" xmlns = "http://www.w3.org/2000/svg" >
                <path d="M10.714 1.28595L6 6M6 6L1.28595 10.714M6 6L10.714 10.714M6 6L1.28595 1.28595" stroke="#C0C8D0" stroke-width="2" />
            </svg>
            <tsc-divider></tsc-divider>
        </div>
    `}clearInputValue(){this.input&&(this.input.value=""),this._inputLabel=""}set initValue(e){this.items&&this.items.length&&(this._inputLabel=this.items.find((t=>t.value===e))?.label||"")}emitSelectedValue(e){console.log("get value:",e.detail.value),this.isListVisible=!1,this._inputLabel=this.items.find((t=>t.value===e.detail.value?.value))?.label||"",console.log("this._inputLabel: ",this._inputLabel),this._emitValue=!0}openList(){this._emitValue?this._emitValue=!1:this.isListVisible=!this.isListVisible}render(){return T`
        <div class="dropdown" @click=${this.openList}>
            <div class="input-wrapper"
            style=${he({height:this.classSettings[this.size].height})}>
                ${this.placeHolderVisible?T`<div class="${ge({[this.classSettings[this.size].placeholder]:!0,"input-placeholder":!0})}">Название сделки</div>`:""}
                <input @focus="${this.focusInput}" @blur="${this.blurInput}"
                    @input=${this.editInput}
                    @change=${this.changeValue}
                id="input" class=${ge({[this.classSettings[this.size].inputText]:!0,outline:this.outline,success:this.success,error:this.error})} .placeholder=${this.placeHolderVisible?"":"Название сделки"}
                .value=${this._inputLabel}
                >
                <div class=${ge({"subtitle-2":!0,"additional-text":!0,success:this.success,error:this.error})}>
                    ${this.additionalText}
                </div>
                <div class="input-button">
                    ${this.clearButtonHtml}
                    <div
                        class=${ge({rotate:this.isListVisible,"dropdown-list":!0})}
                    >
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 0.833344L9 8.33334L16.5 0.833344" stroke="#C0C8D0" stroke-width="2"/>
                        </svg>
                    </div>
                </div>
            </div>
            ${e=this.isListVisible,t=this.listTemplate,T`${function(e,i,s){return e?t:null==s?void 0:s()}(e,0,(()=>""))}`}
        </div>
`;var e,t}};Ae.styles=_e,we([ie()],Ae.prototype,"isListVisible",void 0),we([ie()],Ae.prototype,"_inputLabel",void 0),we([te({type:Object})],Ae.prototype,"initValue",null),we([te({type:Array})],Ae.prototype,"items",void 0),Ae=we([Y("tsc-dropdown")],Ae)})();