/*! For license information please see chunk.404.acac220fe40ee1b31be6.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[404],{836:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{default:()=>I})
var n=i(927),s=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=s.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=function(t,e,i){var n=Array.prototype.slice.apply(t.querySelectorAll(o))
return e&&r.call(t,o)&&n.unshift(t),n.filter(i)},l=function(t){var e=parseInt(t.getAttribute("tabindex"),10)
return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:"AUDIO"!==t.nodeName&&"VIDEO"!==t.nodeName&&"DETAILS"!==t.nodeName||null!==t.getAttribute("tabindex")?t.tabIndex:0:e},h=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},c=function(t){return"INPUT"===t.tagName},d=function(t,e){return!(e.disabled||function(t){return c(t)&&"hidden"===t.type}(e)||function(t,e){if("hidden"===getComputedStyle(t).visibility)return!0
var i=r.call(t,"details>summary:first-of-type")?t.parentElement:t
if(r.call(i,"details:not([open]) *"))return!0
if(e&&"full"!==e){if("non-zero-area"===e){var n=t.getBoundingClientRect(),s=n.width,o=n.height
return 0===s&&0===o}}else for(;t;){if("none"===getComputedStyle(t).display)return!0
t=t.parentElement}return!1}(e,t.displayCheck)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(c(t)||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||"BUTTON"===t.tagName)for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var i=0;i<e.children.length;i++){var n=e.children.item(i)
if("LEGEND"===n.tagName)return!n.contains(t)}return!0}e=e.parentElement}return!1}(e))},u=function(t,e){return!(!d(t,e)||function(t){return function(t){return c(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0
var e,i=t.form||t.ownerDocument,n=function(t){return i.querySelectorAll('input[type="radio"][name="'+t+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=n(window.CSS.escape(t.name))
else try{e=n(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var s=function(t,e){for(var i=0;i<t.length;i++)if(t[i].checked&&t[i].form===e)return t[i]}(e,t.form)
return!s||s===t}(t)}(e)||l(e)<0)},p=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==r.call(t,o)&&u(e,t)},f=s.concat("iframe").join(","),m=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==r.call(t,f)&&d(e,t)}
function g(t,e){var i=Object.keys(t)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t)
e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var w,b=(w=[],{activateTrap:function(t){if(w.length>0){var e=w[w.length-1]
e!==t&&e.pause()}var i=w.indexOf(t);-1===i||w.splice(i,1),w.push(t)},deactivateTrap:function(t){var e=w.indexOf(t);-1!==e&&w.splice(e,1),w.length>0&&w[w.length-1].unpause()}}),y=function(t){return setTimeout(t,0)},x=function(t,e){var i=-1
return t.every((function(t,n){return!e(t)||(i=n,!1)})),i},k=function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
return"function"==typeof t?t.apply(void 0,i):t},$=function(t){return t.target.shadowRoot&&"function"==typeof t.composedPath?t.composedPath()[0]:t.target},S=function(t,e){var i,n=(null==e?void 0:e.document)||document,s=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{}
e%2?g(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},e),o={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},r=function(t,e,i){return t&&void 0!==t[e]?t[e]:s[i||e]},c=function(t){return!(!t||!o.containers.some((function(e){return e.contains(t)})))},f=function(t){var e=s[t]
if("function"==typeof e){for(var i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r]
e=e.apply(void 0,o)}if(!e){if(void 0===e||!1===e)return e
throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var a=e
if("string"==typeof e&&!(a=n.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"))
return a},w=function(){var t=f("initialFocus")
if(!1===t)return!1
if(void 0===t)if(c(n.activeElement))t=n.activeElement
else{var e=o.tabbableGroups[0]
t=e&&e.firstTabbableNode||f("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element")
return t},S=function(){if(o.tabbableGroups=o.containers.map((function(t){var e,i,n,s=(i=[],n=[],a(t,(e=e||{}).includeContainer,u.bind(null,e)).forEach((function(t,e){var s=l(t)
0===s?i.push(t):n.push({documentOrder:e,tabIndex:s,node:t})})),n.sort(h).map((function(t){return t.node})).concat(i)),o=function(t,e){return a(t,(e=e||{}).includeContainer,d.bind(null,e))}(t)
if(s.length>0)return{container:t,firstTabbableNode:s[0],lastTabbableNode:s[s.length-1],nextTabbableNode:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=o.findIndex((function(e){return e===t}))
return e?o.slice(i+1).find((function(t){return p(t)})):o.slice(0,i).reverse().find((function(t){return p(t)}))}}})).filter((function(t){return!!t})),o.tabbableGroups.length<=0&&!f("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},T=function t(e){!1!==e&&e!==n.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!s.preventScroll}),o.mostRecentlyFocusedNode=e,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(e)&&e.select()):t(w()))},I=function(t){var e=f("setReturnFocus",t)
return e||!1!==e&&t},E=function(t){var e=$(t)
c(e)||(k(s.clickOutsideDeactivates,t)?i.deactivate({returnFocus:s.returnFocusOnDeactivate&&!m(e)}):k(s.allowOutsideClick,t)||t.preventDefault())},C=function(t){var e=$(t),i=c(e)
i||e instanceof Document?i&&(o.mostRecentlyFocusedNode=e):(t.stopImmediatePropagation(),T(o.mostRecentlyFocusedNode||w()))},A=function(t){if(function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&!1!==k(s.escapeDeactivates,t))return t.preventDefault(),void i.deactivate();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){var e=$(t)
S()
var i=null
if(o.tabbableGroups.length>0){var n=x(o.tabbableGroups,(function(t){return t.container.contains(e)})),s=n>=0?o.tabbableGroups[n]:void 0
if(n<0)i=t.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(t.shiftKey){var r=x(o.tabbableGroups,(function(t){var i=t.firstTabbableNode
return e===i}))
if(r<0&&(s.container===e||m(e)&&!p(e)&&!s.nextTabbableNode(e,!1))&&(r=n),r>=0){var a=0===r?o.tabbableGroups.length-1:r-1
i=o.tabbableGroups[a].lastTabbableNode}}else{var l=x(o.tabbableGroups,(function(t){var i=t.lastTabbableNode
return e===i}))
if(l<0&&(s.container===e||m(e)&&!p(e)&&!s.nextTabbableNode(e))&&(l=n),l>=0){var h=l===o.tabbableGroups.length-1?0:l+1
i=o.tabbableGroups[h].firstTabbableNode}}}else i=f("fallbackFocus")
i&&(t.preventDefault(),T(i))}(t)},_=function(t){if(!k(s.clickOutsideDeactivates,t)){var e=$(t)
c(e)||k(s.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())}},P=function(){if(o.active)return b.activateTrap(i),o.delayInitialFocusTimer=s.delayInitialFocus?y((function(){T(w())})):T(w()),n.addEventListener("focusin",C,!0),n.addEventListener("mousedown",E,{capture:!0,passive:!1}),n.addEventListener("touchstart",E,{capture:!0,passive:!1}),n.addEventListener("click",_,{capture:!0,passive:!1}),n.addEventListener("keydown",A,{capture:!0,passive:!1}),i},O=function(){if(o.active)return n.removeEventListener("focusin",C,!0),n.removeEventListener("mousedown",E,!0),n.removeEventListener("touchstart",E,!0),n.removeEventListener("click",_,!0),n.removeEventListener("keydown",A,!0),i}
return(i={activate:function(t){if(o.active)return this
var e=r(t,"onActivate"),i=r(t,"onPostActivate"),s=r(t,"checkCanFocusTrap")
s||S(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=n.activeElement,e&&e()
var a=function(){s&&S(),P(),i&&i()}
return s?(s(o.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(t){if(!o.active)return this
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,O(),o.active=!1,o.paused=!1,b.deactivateTrap(i)
var e=r(t,"onDeactivate"),n=r(t,"onPostDeactivate"),s=r(t,"checkCanReturnFocus")
e&&e()
var a=r(t,"returnFocus","returnFocusOnDeactivate"),l=function(){y((function(){a&&T(I(o.nodeFocusedBeforeActivation)),n&&n()}))}
return a&&s?(s(I(o.nodeFocusedBeforeActivation)).then(l,l),this):(l(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,O()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,S(),P(),this):this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean)
return o.containers=e.map((function(t){return"string"==typeof t?n.querySelector(t):t})),o.active&&S(),this}}).updateContainerElements(t),i}
let T
try{T=(0,n.capabilities)("3.22")}catch{T=(0,n.capabilities)("3.13")}var I=(0,n.setModifierManager)((()=>({capabilities:T,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(t,e,i){let{named:{isActive:n,isPaused:s,shouldSelfFocus:o,focusTrapOptions:r,_createFocusTrap:a}}=i
t.focusTrapOptions={...r}||{},void 0!==n&&(t.isActive=n),void 0!==s&&(t.isPaused=s),t.focusTrapOptions&&void 0===t.focusTrapOptions.initialFocus&&o&&(t.focusTrapOptions.initialFocus=e)
let l=S
a&&(l=a),!1!==t.focusTrapOptions.returnFocusOnDeactivate&&(t.focusTrapOptions.returnFocusOnDeactivate=!0),t.focusTrap=l(e,t.focusTrapOptions),t.isActive&&t.focusTrap.activate(),t.isPaused&&t.focusTrap.pause()},updateModifier(t,e){let{named:i}=e
const n=i.focusTrapOptions||{}
if(t.isActive&&!i.isActive){const{returnFocusOnDeactivate:e}=n,i=void 0===e
t.focusTrap.deactivate({returnFocus:i})}else!t.isActive&&i.isActive&&t.focusTrap.activate()
t.isPaused&&!i.isPaused?t.focusTrap.unpause():!t.isPaused&&i.isPaused&&t.focusTrap.pause(),t.focusTrapOptions=n,void 0!==i.isActive&&(t.isActive=i.isActive),void 0!==i.isPaused&&(t.isPaused=i.isPaused)},destroyModifier(t){let{focusTrap:e}=t
e.deactivate()}})),class{})},972:function(t){t.exports=function(){"use strict"
const{hasOwnProperty:t,toString:e}=Object.prototype
function i(e,i){return t.call(e,i)}const n=/\B([A-Z])/g,s=X((t=>t.replace(n,"-$1").toLowerCase())),o=/-(\w)/g,r=X((t=>t.replace(o,l))),a=X((t=>t.length?l(0,t.charAt(0))+t.slice(1):""))
function l(t,e){return e?e.toUpperCase():""}function h(t,e){return null==t||null==t.startsWith?void 0:t.startsWith(e)}function c(t,e){return null==t||null==t.endsWith?void 0:t.endsWith(e)}function d(t,e){return null==t||null==t.includes?void 0:t.includes(e)}function u(t,e){return null==t||null==t.findIndex?void 0:t.findIndex(e)}const{isArray:p,from:f}=Array,{assign:m}=Object
function g(t){return"function"==typeof t}function v(t){return null!==t&&"object"==typeof t}function w(t){return"[object Object]"===e.call(t)}function b(t){return v(t)&&t===t.window}function y(t){return 9===$(t)}function x(t){return $(t)>=1}function k(t){return 1===$(t)}function $(t){return!b(t)&&v(t)&&t.nodeType}function S(t){return"boolean"==typeof t}function T(t){return"string"==typeof t}function I(t){return"number"==typeof t}function E(t){return I(t)||T(t)&&!isNaN(t-parseFloat(t))}function C(t){return!(p(t)?t.length:v(t)&&Object.keys(t).length)}function A(t){return void 0===t}function _(t){return S(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function P(t){const e=Number(t)
return!isNaN(e)&&e}function O(t){return parseFloat(t)||0}function D(t){return N(t)[0]}function N(t){return t&&(x(t)?[t]:Array.from(t).filter(x))||[]}function M(t){var e
if(b(t))return t
const i=y(t=D(t))?t:null==(e=t)?void 0:e.ownerDocument
return(null==i?void 0:i.defaultView)||window}function z(t){return t?c(t,"ms")?O(t):1e3*O(t):0}function B(t,e){return t===e||v(t)&&v(e)&&Object.keys(t).length===Object.keys(e).length&&L(t,((t,i)=>t===e[i]))}function H(t,e,i){return t.replace(new RegExp(e+"|"+i,"g"),(t=>t===e?i:e))}function F(t){return t[t.length-1]}function L(t,e){for(const i in t)if(!1===e(t[i],i))return!1
return!0}function j(t,e){return t.slice().sort(((t,i)=>{let{[e]:n=0}=t,{[e]:s=0}=i
return n>s?1:s>n?-1:0}))}function W(t,e){const i=new Set
return t.filter((t=>{let{[e]:n}=t
return!i.has(n)&&i.add(n)}))}function R(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=1),Math.min(Math.max(P(t)||0,e),i)}function V(){}function q(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return[["bottom","top"],["right","left"]].every((t=>{let[i,n]=t
return Math.min(...e.map((t=>{let{[i]:e}=t
return e})))-Math.max(...e.map((t=>{let{[n]:e}=t
return e})))>0}))}function U(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}const G={ratio(t,e,i){const n="width"===e?"height":"width"
return{[n]:t[e]?Math.round(i*t[n]/t[e]):t[n],[e]:i}},contain(t,e){return L(t={...t},((i,n)=>t=t[n]>e[n]?this.ratio(t,n,e[n]):t)),t},cover(t,e){return L(t=this.contain(t,e),((i,n)=>t=t[n]<e[n]?this.ratio(t,n,e[n]):t)),t}}
function Y(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=!1),e=N(e)
const{length:s}=e
return s?(t=E(t)?P(t):"next"===t?i+1:"previous"===t?i-1:e.indexOf(D(t)),n?R(t,0,s-1):(t%=s)<0?t+s:t):-1}function X(t){const e=Object.create(null)
return i=>e[i]||(e[i]=t(i))}class Z{constructor(){this.promise=new Promise(((t,e)=>{this.reject=e,this.resolve=t}))}}function J(t,e,i){if(v(e))for(const s in e)J(t,s,e[s])
else{var n
if(A(i))return null==(n=D(t))?void 0:n.getAttribute(e)
for(const n of N(t))g(i)&&(i=i.call(n,J(n,e))),null===i?Q(n,e):n.setAttribute(e,i)}}function K(t,e){return N(t).some((t=>t.hasAttribute(e)))}function Q(t,e){const i=N(t)
for(const n of e.split(" "))for(const t of i)t.removeAttribute(n)}function tt(t,e){for(const i of[e,"data-"+e])if(K(t,i))return J(t,i)}const et={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
function it(t){return N(t).some((t=>et[t.tagName.toLowerCase()]))}function nt(t){return N(t).some((t=>t.offsetWidth||t.offsetHeight||t.getClientRects().length))}const st="input,select,textarea,button"
function ot(t){return N(t).some((t=>ct(t,st)))}const rt=st+",a[href],[tabindex]"
function at(t){return ct(t,rt)}function lt(t){var e
return null==(e=D(t))?void 0:e.parentElement}function ht(t,e){return N(t).filter((t=>ct(t,e)))}function ct(t,e){return N(t).some((t=>t.matches(e)))}function dt(t,e){return h(e,">")&&(e=e.slice(1)),k(t)?t.closest(e):N(t).map((t=>dt(t,e))).filter(Boolean)}function ut(t,e){return T(e)?ct(t,e)||!!dt(t,e):t===e||D(e).contains(D(t))}function pt(t,e){const i=[]
for(;t=lt(t);)e&&!ct(t,e)||i.push(t)
return i}function ft(t,e){const i=(t=D(t))?N(t.children):[]
return e?ht(i,e):i}function mt(t,e){return e?N(t).indexOf(D(e)):ft(lt(t)).indexOf(t)}function gt(t,e){return wt(t,kt(t,e))}function vt(t,e){return bt(t,kt(t,e))}function wt(t,e){return D(St(t,e,"querySelector"))}function bt(t,e){return N(St(t,e,"querySelectorAll"))}const yt=/(^|[^\\],)\s*[!>+~-]/,xt=X((t=>t.match(yt)))
function kt(t,e){return void 0===e&&(e=document),T(t)&&xt(t)||y(e)?e:e.ownerDocument}const $t=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g
function St(t,e,i){if(void 0===e&&(e=document),!t||!T(t))return t
t=t.replace($t,"$1 *"),xt(t)&&(t=It(t).map((t=>{let i=e
if("!"===t[0]){const n=t.substr(1).trim().split(" ")
i=dt(lt(e),n[0]),t=n.slice(1).join(" ").trim()}if("-"===t[0]){const n=t.substr(1).trim().split(" "),s=(i||e).previousElementSibling
i=ct(s,t.substr(1))?s:null,t=n.slice(1).join(" ")}return i?function(t){const e=[]
for(;t.parentNode;){const i=J(t,"id")
if(i){e.unshift("#"+Et(i))
break}{let{tagName:i}=t
"HTML"!==i&&(i+=":nth-child("+(mt(t)+1)+")"),e.unshift(i),t=t.parentNode}}return e.join(" > ")}(i)+" "+t:null})).filter(Boolean).join(","),e=document)
try{return e[i](t)}catch(t){return null}}const Tt=/.*?[^\\](?:,|$)/g,It=X((t=>t.match(Tt).map((t=>t.replace(/,$/,"").trim()))))
function Et(t){return T(t)?CSS.escape(t):""}function Ct(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,o,r,a=!1]=Dt(e)
r.length>1&&(r=Mt(r)),null!=a&&a.self&&(r=zt(r)),o&&(r=Nt(o,r))
for(const l of s)for(const t of n)t.addEventListener(l,r,a)
return()=>At(n,s,r,a)}function At(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
let[n,s,,o,r=!1]=Dt(e)
for(const a of s)for(const t of n)t.removeEventListener(a,o,r)}function _t(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
const[n,s,o,r,a=!1,l]=Dt(e),h=Ct(n,s,o,(t=>{const e=!l||l(t)
e&&(h(),r(t,e))}),a)
return h}function Pt(t,e,i){return Ft(t).every((t=>t.dispatchEvent(Ot(e,!0,!0,i))))}function Ot(t,e,i,n){return void 0===e&&(e=!0),void 0===i&&(i=!1),T(t)&&(t=new CustomEvent(t,{bubbles:e,cancelable:i,detail:n})),t}function Dt(t){return t[0]=Ft(t[0]),T(t[1])&&(t[1]=t[1].split(" ")),g(t[2])&&t.splice(2,0,!1),t}function Nt(t,e){return i=>{const n=">"===t[0]?bt(t,i.currentTarget).reverse().filter((t=>ut(i.target,t)))[0]:dt(i.target,t)
n&&(i.current=n,e.call(this,i))}}function Mt(t){return e=>p(e.detail)?t(e,...e.detail):t(e)}function zt(t){return function(e){if(e.target===e.currentTarget||e.target===e.current)return t.call(null,e)}}function Bt(t){return t&&"addEventListener"in t}function Ht(t){return Bt(t)?t:D(t)}function Ft(t){return p(t)?t.map(Ht).filter(Boolean):T(t)?bt(t):Bt(t)?[t]:N(t)}function Lt(t){return"touch"===t.pointerType||!!t.touches}function jt(t){var e,i
const{clientX:n,clientY:s}=(null==(e=t.touches)?void 0:e[0])||(null==(i=t.changedTouches)?void 0:i[0])||t
return{x:n,y:s}}function Wt(t,e){const i={data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:V,responseType:"",...e}
return Promise.resolve().then((()=>i.beforeSend(i))).then((()=>function(t,e){return new Promise(((i,n)=>{const{xhr:s}=e
for(const o in e)if(o in s)try{s[o]=e[o]}catch(t){}s.open(e.method.toUpperCase(),t)
for(const t in e.headers)s.setRequestHeader(t,e.headers[t])
Ct(s,"load",(()=>{0===s.status||s.status>=200&&s.status<300||304===s.status?i(s):n(m(Error(s.statusText),{xhr:s,status:s.status}))})),Ct(s,"error",(()=>n(m(Error("Network Error"),{xhr:s})))),Ct(s,"timeout",(()=>n(m(Error("Network Timeout"),{xhr:s})))),s.send(e.data)}))}(t,i)))}function Rt(t,e,i){return new Promise(((n,s)=>{const o=new Image
o.onerror=t=>{s(t)},o.onload=()=>{n(o)},i&&(o.sizes=i),e&&(o.srcset=e),o.src=t}))}const Vt={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0}
function qt(t,e,i,n){void 0===n&&(n="")
const s=N(t)
for(const o of s)if(T(e)){if(e=Zt(e),A(i))return Gt(o,e)
i||I(i)?o.style.setProperty(e,E(i)&&!Vt[e]?i+"px":i,n):o.style.removeProperty(e)}else{if(p(e)){const t=Ut(o),i={}
for(const n of e)i[n]=t[Zt(n)]
return i}v(e)&&(n=i,L(e,((t,e)=>qt(o,e,t,n))))}return s[0]}function Ut(t,e){return M(t).getComputedStyle(t,e)}function Gt(t,e,i){return Ut(t,i)[e]}const Yt=/^\s*(["'])?(.*?)\1\s*$/
function Xt(t){return Ut(document.documentElement).getPropertyValue("--uk-"+t).replace(Yt,"$2")}const Zt=X((t=>function(t){t=s(t)
const{style:e}=document.documentElement
if(t in e)return t
let i,n=Jt.length
for(;n--;)if(i="-"+Jt[n]+"-"+t,i in e)return i}(t))),Jt=["webkit","moz","ms"]
function Kt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
se(t,i,"add")}function Qt(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n]
se(t,i,"remove")}function te(t,e){J(t,"class",(t=>(t||"").replace(new RegExp("\\b"+e+"\\b","g"),"")))}function ee(t){(arguments.length<=1?void 0:arguments[1])&&Qt(t,arguments.length<=1?void 0:arguments[1]),(arguments.length<=2?void 0:arguments[2])&&Kt(t,arguments.length<=2?void 0:arguments[2])}function ie(t,e){[e]=oe(e)
for(const i of N(t))if(e&&i.classList.contains(e))return!0
return!1}function ne(t,e,i){const n=oe(e)
A(i)||(i=!!i)
for(const s of N(t))for(const t of n)s.classList.toggle(t,i)}function se(t,e,i){e=e.reduce(((t,e)=>t.concat(oe(e))),[])
for(const n of N(t))n.classList[i](...e)}function oe(t){return String(t).split(/\s|,/).filter(Boolean)}function re(t,e,i,n){return void 0===i&&(i=400),void 0===n&&(n="linear"),Promise.all(N(t).map((t=>new Promise(((s,o)=>{for(const i in e){const e=qt(t,i)
""===e&&qt(t,i,e)}const r=setTimeout((()=>Pt(t,"transitionend")),i)
_t(t,"transitionend transitioncanceled",(e=>{let{type:i}=e
clearTimeout(r),Qt(t,"uk-transition"),qt(t,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),"transitioncanceled"===i?o():s(t)}),{self:!0}),Kt(t,"uk-transition"),qt(t,{transitionProperty:Object.keys(e).map(Zt).join(","),transitionDuration:i+"ms",transitionTimingFunction:n,...e})})))))}const ae={start:re,stop:t=>(Pt(t,"transitionend"),Promise.resolve()),cancel(t){Pt(t,"transitioncanceled")},inProgress:t=>ie(t,"uk-transition")},le="uk-animation-"
function he(t,e,i,n,s){return void 0===i&&(i=200),Promise.all(N(t).map((t=>new Promise(((o,r)=>{Pt(t,"animationcanceled")
const a=setTimeout((()=>Pt(t,"animationend")),i)
_t(t,"animationend animationcanceled",(e=>{let{type:i}=e
clearTimeout(a),"animationcanceled"===i?r():o(t),qt(t,"animationDuration",""),te(t,"uk-animation-\\S*")}),{self:!0}),qt(t,"animationDuration",i+"ms"),Kt(t,e,le+(s?"leave":"enter")),h(e,le)&&(n&&Kt(t,"uk-transform-origin-"+n),s&&Kt(t,"uk-animation-reverse"))})))))}const ce=new RegExp("uk-animation-(enter|leave)"),de={in:he,out:(t,e,i,n)=>he(t,e,i,n,!0),inProgress:t=>ce.test(J(t,"class")),cancel(t){Pt(t,"animationcanceled")}},ue={width:["left","right"],height:["top","bottom"]}
function pe(t){const e=k(t)?D(t).getBoundingClientRect():{height:ve(t),width:we(t),top:0,left:0}
return{height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.top+e.height,right:e.left+e.width}}function fe(t,e){const i=pe(t)
if(t){const{scrollY:e,scrollX:n}=M(t),s={height:e,width:n}
for(const t in ue)for(const e in ue[t])i[ue[t][e]]+=s[t]}if(!e)return i
const n=qt(t,"position")
L(qt(t,["left","top"]),((s,o)=>qt(t,o,e[o]-i[o]+O("absolute"===n&&"auto"===s?me(t)[o]:s))))}function me(t){let{top:e,left:i}=fe(t)
const{ownerDocument:{body:n,documentElement:s},offsetParent:o}=D(t)
let r=o||s
for(;r&&(r===n||r===s)&&"static"===qt(r,"position");)r=r.parentNode
if(k(r)){const t=fe(r)
e-=t.top+O(qt(r,"borderTopWidth")),i-=t.left+O(qt(r,"borderLeftWidth"))}return{top:e-O(qt(t,"marginTop")),left:i-O(qt(t,"marginLeft"))}}function ge(t){const e=[0,0]
t=D(t)
do{if(e[0]+=t.offsetTop,e[1]+=t.offsetLeft,"fixed"===qt(t,"position")){const i=M(t)
return e[0]+=i.scrollY,e[1]+=i.scrollX,e}}while(t=t.offsetParent)
return e}const ve=be("height"),we=be("width")
function be(t){const e=a(t)
return(i,n)=>{if(A(n)){if(b(i))return i["inner"+e]
if(y(i)){const t=i.documentElement
return Math.max(t["offset"+e],t["scroll"+e])}return(n="auto"===(n=qt(i=D(i),t))?i["offset"+e]:O(n)||0)-ye(i,t)}return qt(i,t,n||0===n?+n+ye(i,t)+"px":"")}}function ye(t,e,i){return void 0===i&&(i="border-box"),qt(t,"boxSizing")===i?ue[e].map(a).reduce(((e,i)=>e+O(qt(t,"padding"+i))+O(qt(t,"border"+i+"Width"))),0):0}function xe(t){for(const e in ue)for(const i in ue[e])if(ue[e][i]===t)return ue[e][1-i]
return t}function ke(t,e,i,n){return void 0===e&&(e="width"),void 0===i&&(i=window),void 0===n&&(n=!1),T(t)?Se(t).reduce(((t,s)=>{const o=Ie(s)
return o&&(s=function(t,e){return t*O(e)/100}("vh"===o?ve(M(i)):"vw"===o?we(M(i)):n?i["offset"+a(e)]:pe(i)[e],s)),t+O(s)}),0):O(t)}const $e=/-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g,Se=X((t=>t.toString().replace(/\s/g,"").match($e)||[])),Te=/(?:v[hw]|%)$/,Ie=X((t=>(t.match(Te)||[])[0]))
function Ee(t,e){var i
return(null==t||null==(i=t.tagName)?void 0:i.toLowerCase())===e.toLowerCase()}function Ce(t,e){return A(e)?Ve(t).innerHTML:Ae(t,e)}const Ae=Ne("replaceChildren"),_e=Ne("prepend"),Pe=Ne("append"),Oe=Ne("before"),De=Ne("after")
function Ne(t){return function(e,i){var n
const s=N(T(i)?je(i):i)
return null==(n=Ve(e))||n[t](...s),We(s)}}function Me(t){N(t).forEach((t=>t.remove()))}function ze(t,e){for(e=D(Oe(t,e));e.firstChild;)e=e.firstChild
return Pe(e,t),e}function Be(t,e){return N(N(t).map((t=>t.hasChildNodes()?ze(N(t.childNodes),e):Pe(t,e))))}function He(t){N(t).map(lt).filter(((t,e,i)=>i.indexOf(t)===e)).forEach((t=>t.replaceWith(...t.childNodes)))}const Fe=/^\s*<(\w+|!)[^>]*>/,Le=/^<(\w+)\s*\/?>(?:<\/\1>)?$/
function je(t){const e=Le.exec(t)
if(e)return document.createElement(e[1])
const i=document.createElement("div")
return Fe.test(t)?i.insertAdjacentHTML("beforeend",t.trim()):i.textContent=t,We(i.childNodes)}function We(t){return t.length>1?t:t[0]}function Re(t,e){if(k(t))for(e(t),t=t.firstElementChild;t;){const i=t.nextElementSibling
Re(t,e),t=i}}function Ve(t,e){return Ue(t)?D(je(t)):wt(t,e)}function qe(t,e){return Ue(t)?N(je(t)):bt(t,e)}function Ue(t){return T(t)&&h(t.trim(),"<")}const Ge="undefined"!=typeof window,Ye=Ge&&"rtl"===J(document.documentElement,"dir"),Xe=Ge&&"ontouchstart"in window,Ze=Ge&&window.PointerEvent,Je=Ze?"pointerdown":Xe?"touchstart":"mousedown",Ke=Ze?"pointermove":Xe?"touchmove":"mousemove",Qe=Ze?"pointerup":Xe?"touchend":"mouseup",ti=Ze?"pointerenter":Xe?"":"mouseenter",ei=Ze?"pointerleave":Xe?"":"mouseleave",ii=Ze?"pointercancel":"touchcancel",ni={reads:[],writes:[],read(t){return this.reads.push(t),oi(),t},write(t){return this.writes.push(t),oi(),t},clear(t){ai(this.reads,t),ai(this.writes,t)},flush:si}
function si(t){ri(ni.reads),ri(ni.writes.splice(0)),ni.scheduled=!1,(ni.reads.length||ni.writes.length)&&oi(t+1)}function oi(t){ni.scheduled||(ni.scheduled=!0,t&&t<4?Promise.resolve().then((()=>si(t))):requestAnimationFrame((()=>si(1))))}function ri(t){let e
for(;e=t.shift();)try{e()}catch(t){console.error(t)}}function ai(t,e){const i=t.indexOf(e)
return~i&&t.splice(i,1)}function li(){}li.prototype={positions:[],init(){let t
this.positions=[],this.unbind=Ct(document,"mousemove",(e=>t=jt(e))),this.interval=setInterval((()=>{t&&(this.positions.push(t),this.positions.length>5&&this.positions.shift())}),50)},cancel(){this.unbind&&this.unbind(),this.interval&&clearInterval(this.interval)},movesTo(t){if(this.positions.length<2)return!1
const e=t.getBoundingClientRect(),{left:i,right:n,top:s,bottom:o}=e,[r]=this.positions,a=F(this.positions),l=[r,a]
return!U(a,e)&&[[{x:i,y:s},{x:n,y:o}],[{x:i,y:o},{x:n,y:s}]].some((t=>{const i=function(t,e){let[{x:i,y:n},{x:s,y:o}]=t,[{x:r,y:a},{x:l,y:h}]=e
const c=(h-a)*(s-i)-(l-r)*(o-n)
if(0===c)return!1
const d=((l-r)*(n-a)-(h-a)*(i-r))/c
return!(d<0)&&{x:i+d*(s-i),y:n+d*(o-n)}}(l,t)
return i&&U(i,e)}))}}
const hi=window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype
function ci(t,e,i,n){if(void 0===n&&(n=!0),!hi)return
const s=new IntersectionObserver(((t,i)=>{n&&!t.some((t=>t.isIntersecting))||e(t,i)}),i)
for(const o of N(t))s.observe(o)
return s}const di=window.ResizeObserver
function ui(t,e,i){if(void 0===i&&(i={box:"border-box"}),!di)return
const n=new ResizeObserver(((t,i)=>{e(t,i)}))
for(const s of N(t))n.observe(s,i)
return n}const pi={}
function fi(t,e,i){return pi.computed(g(t)?t.call(i,i):t,g(e)?e.call(i,i):e)}function mi(t,e){return t=t&&!p(t)?[t]:t,e?t?t.concat(e):p(e)?e:[e]:t}function gi(t,e){return A(e)?t:e}function vi(t,e,n){const s={}
if(g(e)&&(e=e.options),e.extends&&(t=vi(t,e.extends,n)),e.mixins)for(const i of e.mixins)t=vi(t,i,n)
for(const i in t)o(i)
for(const r in e)i(t,r)||o(r)
function o(i){s[i]=(pi[i]||gi)(t[i],e[i],n)}return s}function wi(t,e){void 0===e&&(e=[])
try{return t?h(t,"{")?JSON.parse(t):e.length&&!d(t,":")?{[e[0]]:t}:t.split(";").reduce(((t,e)=>{const[i,n]=e.split(/:(.*)/)
return i&&!A(n)&&(t[i.trim()]=n.trim()),t}),{}):{}}catch(t){return{}}}function bi(t){if(Si(t)&&Ei(t,{func:"playVideo",method:"play"}),$i(t))try{t.play().catch(V)}catch(t){}}function yi(t){Si(t)&&Ei(t,{func:"pauseVideo",method:"pause"}),$i(t)&&t.pause()}function xi(t){Si(t)&&Ei(t,{func:"mute",method:"setVolume",value:0}),$i(t)&&(t.muted=!0)}function ki(t){return $i(t)||Si(t)}function $i(t){return Ee(t,"video")}function Si(t){return Ee(t,"iframe")&&(Ti(t)||Ii(t))}function Ti(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function Ii(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}async function Ei(t,e){await function(t){if(t._ukPlayer)return t._ukPlayer
const e=Ti(t),i=Ii(t),n=++Ai
let s
return t._ukPlayer=new Promise((o=>{e&&_t(t,"load",(()=>{const e=()=>Ci(t,{event:"listening",id:n})
s=setInterval(e,100),e()})),_t(window,"message",o,!1,(t=>{let{data:s}=t
try{return s=JSON.parse(s),s&&(e&&s.id===n&&"onReady"===s.event||i&&Number(s.player_id)===n)}catch(t){}})),t.src=t.src+(d(t.src,"?")?"&":"?")+(e?"enablejsapi=1":"api=1&player_id="+n)})).then((()=>clearInterval(s)))}(t),Ci(t,e)}function Ci(t,e){try{t.contentWindow.postMessage(JSON.stringify({event:"command",...e}),"*")}catch(t){}}pi.events=pi.created=pi.beforeConnect=pi.connected=pi.beforeDisconnect=pi.disconnected=pi.destroy=mi,pi.args=function(t,e){return!1!==e&&mi(e||t)},pi.update=function(t,e){return j(mi(t,g(e)?{read:e}:e),"order")},pi.props=function(t,e){if(p(e)){const t={}
for(const i of e)t[i]=String
e=t}return pi.methods(t,e)},pi.computed=pi.methods=function(t,e){return e?t?{...t,...e}:e:t},pi.data=function(t,e,i){return i?fi(t,e,i):e?t?function(i){return fi(t,e,i)}:e:t}
let Ai=0
function _i(t,e,i){return void 0===e&&(e=0),void 0===i&&(i=0),!!nt(t)&&q(...Ni(t).map((t=>{const{top:n,left:s,bottom:o,right:r}=fe(Mi(t))
return{top:n-e,left:s-i,bottom:o+e,right:r+i}})).concat(fe(t)))}function Pi(t,e){if(t=b(t)||y(t)?Bi(t):D(t),A(e))return t.scrollTop
t.scrollTop=e}function Oi(t,e){let{offset:i=0}=void 0===e?{}:e
const n=nt(t)?Ni(t):[]
return n.reduce(((e,s,o)=>{const{scrollTop:r,scrollHeight:a,offsetHeight:l}=s,h=a-zi(s),{height:c,top:d}=fe(n[o-1]||t)
let u=Math.ceil(d-fe(Mi(s)).top-i+r)
return i>0&&l<c+i?u+=i:i=0,u>h?(i-=u-h,u=h):u<0&&(i-=u,u=0),()=>function(t,e){return new Promise((i=>{const n=t.scrollTop,s=(r=Math.abs(e),40*Math.pow(r,.375)),o=Date.now()
var r
!function r(){const a=(l=R((Date.now()-o)/s),.5*(1-Math.cos(Math.PI*l)))
var l
Pi(t,n+e*a),1===a?i():requestAnimationFrame(r)}()}))}(s,u-r).then(e)}),(()=>Promise.resolve()))()}function Di(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),!nt(t))return 0
const[n]=Ni(t,/auto|scroll/,!0),{scrollHeight:s,scrollTop:o}=n,r=zi(n),a=s-r,l=ge(t)[0]-ge(n)[0],h=Math.max(0,l-r+e)
return R((o-h)/(Math.min(a,l+t.offsetHeight-i)-h))}function Ni(t,e,i){void 0===e&&(e=/auto|scroll|hidden/),void 0===i&&(i=!1)
const n=Bi(t)
let s=pt(t).reverse()
s=s.slice(s.indexOf(n)+1)
const o=u(s,(t=>"fixed"===qt(t,"position")))
return~o&&(s=s.slice(o)),[n].concat(s.filter((t=>e.test(qt(t,"overflow"))&&(!i||t.scrollHeight>zi(t))))).reverse()}function Mi(t){return t===Bi(t)?window:t}function zi(t){return(t===Bi(t)?document.documentElement:t).clientHeight}function Bi(t){const{document:e}=M(t)
return e.scrollingElement||e.documentElement}const Hi={width:["x","left","right"],height:["y","top","bottom"]}
function Fi(t,e,i,n,s,o,r,a){i=ji(i),n=ji(n)
const l={element:i,target:n}
if(!t||!e)return l
const h=fe(t),c=fe(e),u=c
if(Li(u,i,h,-1),Li(u,n,c,1),s=Wi(s,h.width,h.height),o=Wi(o,c.width,c.height),s.x+=o.x,s.y+=o.y,u.left+=s.x,u.top+=s.y,r){let e=Ni(t).map(Mi)
a&&!d(e,a)&&e.unshift(a),e=e.map((t=>fe(t))),L(Hi,((t,o)=>{let[a,p,f]=t;(!0===r||d(r,a))&&e.some((t=>{const e=i[a]===p?-h[o]:i[a]===f?h[o]:0,r=n[a]===p?c[o]:n[a]===f?-c[o]:0
if(u[p]<t[p]||u[p]+h[o]>t[f]){const t=h[o]/2,s="center"===n[a]?-c[o]/2:0
return"center"===i[a]&&(d(t,s)||d(-t,-s))||d(e,r)}function d(e,i){const n=O((u[p]+e+i-2*s[a]).toFixed(4))
if(n>=t[p]&&n+h[o]<=t[f]){u[p]=n
for(const t of["element","target"])e&&(l[t][a]=l[t][a]===Hi[o][1]?Hi[o][2]:Hi[o][1])
return!0}}}))}))}return fe(t,u),l}function Li(t,e,i,n){L(Hi,((s,o)=>{let[r,a,l]=s
e[r]===l?t[a]+=i[o]*n:"center"===e[r]&&(t[a]+=i[o]*n/2)}))}function ji(t){const e=/left|center|right/,i=/top|center|bottom/
return 1===(t=(t||"").split(" ")).length&&(t=e.test(t[0])?t.concat("center"):i.test(t[0])?["center"].concat(t):["center","center"]),{x:e.test(t[0])?t[0]:"center",y:i.test(t[1])?t[1]:"center"}}function Wi(t,e,i){const[n,s]=(t||"").split(" ")
return{x:n?O(n)*(c(n,"%")?e/100:1):0,y:s?O(s)*(c(s,"%")?i/100:1):0}}var Ri=Object.freeze({__proto__:null,ajax:Wt,getImage:Rt,transition:re,Transition:ae,animate:he,Animation:de,attr:J,hasAttr:K,removeAttr:Q,data:tt,addClass:Kt,removeClass:Qt,removeClasses:te,replaceClass:ee,hasClass:ie,toggleClass:ne,dimensions:pe,offset:fe,position:me,offsetPosition:ge,height:ve,width:we,boxModelAdjust:ye,flipPosition:xe,toPx:ke,ready:function(t){"loading"===document.readyState?_t(document,"DOMContentLoaded",t):t()},isTag:Ee,empty:function(t){return Ae(t,"")},html:Ce,replaceChildren:Ae,prepend:_e,append:Pe,before:Oe,after:De,remove:Me,wrapAll:ze,wrapInner:Be,unwrap:He,fragment:je,apply:Re,$:Ve,$$:qe,inBrowser:Ge,isRtl:Ye,hasTouch:Xe,pointerDown:Je,pointerMove:Ke,pointerUp:Qe,pointerEnter:ti,pointerLeave:ei,pointerCancel:ii,on:Ct,off:At,once:_t,trigger:Pt,createEvent:Ot,toEventTargets:Ft,isTouch:Lt,getEventPos:jt,fastdom:ni,isVoidElement:it,isVisible:nt,selInput:st,isInput:ot,selFocusable:rt,isFocusable:at,parent:lt,filter:ht,matches:ct,closest:dt,within:ut,parents:pt,children:ft,index:mt,hasOwn:i,hyphenate:s,camelize:r,ucfirst:a,startsWith:h,endsWith:c,includes:d,findIndex:u,isArray:p,toArray:f,assign:m,isFunction:g,isObject:v,isPlainObject:w,isWindow:b,isDocument:y,isNode:x,isElement:k,isBoolean:S,isString:T,isNumber:I,isNumeric:E,isEmpty:C,isUndefined:A,toBoolean:_,toNumber:P,toFloat:O,toNode:D,toNodes:N,toWindow:M,toMs:z,isEqual:B,swap:H,last:F,each:L,sortBy:j,uniqueBy:W,clamp:R,noop:V,intersectRect:q,pointInRect:U,Dimensions:G,getIndex:Y,memoize:X,Deferred:Z,MouseTracker:li,hasIntersectionObserver:hi,observeIntersection:ci,observeResize:ui,mergeOptions:vi,parseOptions:wi,play:bi,pause:yi,mute:xi,isVideo:ki,positionAt:Fi,query:gt,queryAll:vt,find:wt,findAll:bt,escape:Et,css:qt,getCssVar:Xt,propName:Zt,isInView:_i,scrollTop:Pi,scrollIntoView:Oi,scrolledOver:Di,scrollParents:Ni,getViewport:Mi,getViewportClientHeight:zi,getScrollingElement:Bi})
function Vi(t,e){const i={},{args:n=[],props:o={},el:a}=t
if(!o)return i
for(const r in o){const t=s(r)
let e=tt(a,t)
A(e)||(e=o[r]===Boolean&&""===e||Yi(o[r],e),("target"!==t||e&&!h(e,"_"))&&(i[r]=e))}const l=wi(tt(a,e),n)
for(const s in l){const t=r(s)
void 0!==o[t]&&(i[t]=Yi(o[t],l[s]))}return i}function qi(t,e,n){Object.defineProperty(t,e,{enumerable:!0,get(){const{_computeds:s,$props:o,$el:r}=t
return i(s,e)||(s[e]=(n.get||n).call(t,o,r)),s[e]},set(i){const{_computeds:s}=t
s[e]=n.set?n.set.call(t,i):i,A(s[e])&&delete s[e]}})}function Ui(t,e,i){w(e)||(e={name:i,handler:e})
let{name:n,el:s,handler:o,capture:r,passive:a,delegate:l,filter:h,self:c}=e
s=g(s)?s.call(t):s||t.$el,p(s)?s.forEach((n=>Ui(t,{...e,el:n},i))):!s||h&&!h.call(t)||t._events.push(Ct(s,n,l?T(l)?l:l.call(t):null,T(o)?t[o]:o.bind(t),{passive:a,capture:r,self:c}))}function Gi(t,e){return t.every((t=>!t||!i(t,e)))}function Yi(t,e){return t===Boolean?_(e):t===Number?P(e):"list"===t?function(t){return p(t)?t:T(t)?t.split(/,(?![^(]*\))/).map((t=>E(t)?P(t):_(t.trim()))):[t]}(e):t?t(e):e}function Xi(t){const{el:e}=t.$options,i=new MutationObserver((()=>t.$emit()))
return i.observe(e,{childList:!0,subtree:!0}),i}function Zi(t){const{$name:e,$options:i,$props:n}=t,{attrs:o,props:a,el:l}=i
if(!a||!1===o)return
const h=p(o)?o:Object.keys(a),c=h.map((t=>s(t))).concat(e),d=new MutationObserver((s=>{const o=Vi(i,e)
s.some((t=>{let{attributeName:i}=t
const s=i.replace("data-","")
return(s===e?h:[r(s),r(i)]).some((t=>!A(o[t])&&o[t]!==n[t]))}))&&t.$reset()}))
return d.observe(l,{attributes:!0,attributeFilter:c.concat(c.map((t=>"data-"+t)))}),d}const Ji=new Map
let Ki
const Qi=X((t=>!(!h(t,"uk-")&&!h(t,"data-uk-"))&&r(t.replace("data-uk-","").replace("uk-","")))),tn=function(t){this._init(t)}
tn.util=Ri,tn.data="__uikit__",tn.prefix="uk-",tn.options={},tn.version="3.12.2",function(t){const e=t.data
let i
function n(t,e){if(t)for(const i in t)t[i]._connected&&t[i]._callUpdate(e)}t.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},t.mixin=function(e,i){(i=(T(i)?t.component(i):i)||this).options=vi(i.options,e)},t.extend=function(t){t=t||{}
const e=this,i=function(t){this._init(t)}
return(i.prototype=Object.create(e.prototype)).constructor=i,i.options=vi(e.options,t),i.super=e,i.extend=e.extend,i},t.update=function(t,i){t=t?D(t):document.body
for(const s of pt(t).reverse())n(s[e],i)
Re(t,(t=>n(t[e],i)))},Object.defineProperty(t,"container",{get:()=>i||document.body,set(t){i=Ve(t)}})}(tn),function(t){function e(t){for(const{read:e,write:i,events:n=[]}of this.$options.update){if(!t.has("update")&&!n.some((e=>t.has(e))))continue
let s
e&&(s=e.call(this,this._data,t),s&&w(s)&&m(this._data,s)),i&&!1!==s&&ni.write((()=>i.call(this,this._data,t)))}}function n(t){const{$options:{computed:e}}=this,n={...this._computeds}
this._computeds={}
for(const s in e){const{watch:o,immediate:r}=e[s]
o&&(t&&r||i(n,s)&&!B(n[s],this[s]))&&o.call(this,this[s],n[s])}}t.prototype._callHook=function(t){var e
null==(e=this.$options[t])||e.forEach((t=>t.call(this)))},t.prototype._callConnected=function(){this._connected||(this._data={},this._computeds={},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObservers(),this._callHook("connected"),this._callUpdate())},t.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._disconnectObservers(),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1,delete this._watch)},t.prototype._callUpdate=function(t){void 0===t&&(t="update"),this._connected&&("update"!==t&&"resize"!==t||this._callWatches(),this.$options.update&&(this._updates||(this._updates=new Set,ni.read((()=>{this._connected&&e.call(this,this._updates),delete this._updates}))),this._updates.add(t.type||t)))},t.prototype._callWatches=function(){if(this._watch)return
const t=!i(this,"_watch")
this._watch=ni.read((()=>{this._connected&&n.call(this,t),this._watch=null}))}}(tn),function(t){let e=0
t.prototype._init=function(t){(t=t||{}).data=function(t,e){let{data:i={}}=t,{args:n=[],props:s={}}=e
p(i)&&(i=i.slice(0,n.length).reduce(((t,e,i)=>(w(e)?m(t,e):t[n[i]]=e,t)),{}))
for(const o in i)A(i[o])?delete i[o]:s[o]&&(i[o]=Yi(s[o],i[o]))
return i}(t,this.constructor.options),this.$options=vi(this.constructor.options,t,this),this.$el=null,this.$props={},this._uid=e++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},t.prototype._initData=function(){const{data:t={}}=this.$options
for(const e in t)this.$props[e]=this[e]=t[e]},t.prototype._initMethods=function(){const{methods:t}=this.$options
if(t)for(const e in t)this[e]=t[e].bind(this)},t.prototype._initComputeds=function(){const{computed:t}=this.$options
if(this._computeds={},t)for(const e in t)qi(this,e,t[e])},t.prototype._initProps=function(t){let e
for(e in t=t||Vi(this.$options,this.$name))A(t[e])||(this.$props[e]=t[e])
const i=[this.$options.computed,this.$options.methods]
for(e in this.$props)e in t&&Gi(i,e)&&(this[e]=this.$props[e])},t.prototype._initEvents=function(){this._events=[]
for(const n of this.$options.events||[])if(i(n,"handler"))Ui(this,n)
else for(const t in n)Ui(this,n[t],t)
for(const{events:i=[]}of this.$options.update||[])if(d(i,"scroll")){t=this._uid,e=()=>this.$emit("scroll"),Ki=Ki||Ct(window,"scroll",(()=>Ji.forEach((t=>t()))),{passive:!0,capture:!0}),Ji.set(t,e)
break}var t,e},t.prototype._unbindEvents=function(){var t
this._events.forEach((t=>t())),delete this._events,t=this._uid,Ji.delete(t),Ki&&!Ji.size&&(Ki(),Ki=null)},t.prototype._initObservers=function(){this._observers=[Xi(this),Zi(this)]},t.prototype.registerObserver=function(t){this._observers.push(t)},t.prototype._disconnectObservers=function(){this._observers.forEach((t=>null==t?void 0:t.disconnect()))}}(tn),function(t){const e=t.data,i={}
t.component=function(e,n){const o=s(e)
if(e=r(o),!n)return w(i[e])&&(i[e]=t.extend(i[e])),i[e]
t[e]=function(i,n){const s=t.component(e)
return s.options.functional?new s({data:w(i)?i:[...arguments]}):i?qe(i).map(o)[0]:o()
function o(i){const o=t.getComponent(i,e)
if(o){if(!n)return o
o.$destroy()}return new s({el:i,data:n})}}
const a=w(n)?{...n}:n.options
return a.name=e,null==a.install||a.install(t,a,e),t._initialized&&!a.functional&&ni.read((()=>t[e]("[uk-"+o+"],[data-uk-"+o+"]"))),i[e]=w(n)?a:n},t.getComponents=t=>(null==t?void 0:t[e])||{},t.getComponent=(e,i)=>t.getComponents(e)[i],t.connect=n=>{if(n[e])for(const t in n[e])n[e][t]._callConnected()
for(const e of n.attributes){const s=Qi(e.name)
s&&s in i&&t[s](n)}},t.disconnect=t=>{for(const i in t[e])t[e][i]._callDisconnected()}}(tn),function(t){const e=t.data
t.prototype.$create=function(e,i,n){return t[e](i,n)},t.prototype.$mount=function(t){const{name:i}=this.$options
t[e]||(t[e]={}),t[e][i]||(t[e][i]=this,this.$el=this.$options.el=this.$options.el||t,ut(t,document)&&this._callConnected())},t.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},t.prototype.$destroy=function(t){void 0===t&&(t=!1)
const{el:i,name:n}=this.$options
i&&this._callDisconnected(),this._callHook("destroy"),null!=i&&i[e]&&(delete i[e][n],C(i[e])||delete i[e],t&&Me(this.$el))},t.prototype.$emit=function(t){this._callUpdate(t)},t.prototype.$update=function(e,i){void 0===e&&(e=this.$el),t.update(e,i)},t.prototype.$getComponent=t.getComponent
const i=X((e=>t.prefix+s(e)))
Object.defineProperties(t.prototype,{$container:Object.getOwnPropertyDescriptor(t,"container"),$name:{get(){return i(this.$options.name)}}})}(tn)
var en={connected(){!ie(this.$el,this.$name)&&Kt(this.$el,this.$name)}},nn={methods:{lazyload(t,e){void 0===t&&(t=this.$el),void 0===e&&(e=this.$el),this.registerObserver(ci(t,((t,i)=>{for(const n of N(g(e)?e():e))qe('[loading="lazy"]',n).forEach((t=>Q(t,"loading")))
for(const e of t.filter((t=>{let{isIntersecting:e}=t
return e})).map((t=>{let{target:e}=t
return e})))i.unobserve(e)})))}}},sn={props:{cls:Boolean,animation:"list",duration:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,origin:!1,transition:"linear",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave",initProps:{overflow:"",height:"",paddingTop:"",paddingBottom:"",marginTop:"",marginBottom:""},hideProps:{overflow:"hidden",height:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}},computed:{hasAnimation(t){let{animation:e}=t
return!!e[0]},hasTransition(t){let{animation:e}=t
return this.hasAnimation&&!0===e[0]}},methods:{toggleElement(t,e,i){return new Promise((n=>Promise.all(N(t).map((t=>{const n=S(e)?e:!this.isToggled(t)
if(!Pt(t,"before"+(n?"show":"hide"),[this]))return Promise.reject()
const s=(g(i)?i:!1!==i&&this.hasAnimation?this.hasTransition?on(this):(r=this,(t,e)=>{de.cancel(t)
const{animation:i,duration:n,_toggle:s}=r
return e?(s(t,!0),de.in(t,i[0],n,r.origin)):de.out(t,i[1]||i[0],n,r.origin).then((()=>s(t,!1)))}):this._toggle)(t,n),o=n?this.clsEnter:this.clsLeave
var r
Kt(t,o),Pt(t,n?"show":"hide",[this])
const a=()=>{Qt(t,o),Pt(t,n?"shown":"hidden",[this]),this.$update(t)}
return s?s.then(a,(()=>(Qt(t,o),Promise.reject()))):a()}))).then(n,V)))},isToggled(t){return void 0===t&&(t=this.$el),[t]=N(t),!!ie(t,this.clsEnter)||!ie(t,this.clsLeave)&&(this.cls?ie(t,this.cls.split(" ")[0]):nt(t))},_toggle(t,e){if(!t)return
let i
e=Boolean(e),this.cls?(i=d(this.cls," ")||e!==ie(t,this.cls),i&&ne(t,this.cls,d(this.cls," ")?void 0:e)):(i=e===t.hidden,i&&(t.hidden=!e)),qe("[autofocus]",t).some((t=>nt(t)?t.focus()||!0:t.blur())),i&&(Pt(t,"toggled",[e,this]),this.$update(t))}}}
function on(t){let{isToggled:e,duration:i,initProps:n,hideProps:s,transition:o,_toggle:r}=t
return(t,a)=>{const l=ae.inProgress(t),h=t.hasChildNodes()?O(qt(t.firstElementChild,"marginTop"))+O(qt(t.lastElementChild,"marginBottom")):0,c=nt(t)?ve(t)+(l?0:h):0
ae.cancel(t),e(t)||r(t,!0),ve(t,""),ni.flush()
const d=ve(t)+(l?0:h)
return ve(t,c),(a?ae.start(t,{...n,overflow:"hidden",height:d},Math.round(i*(1-c/d)),o):ae.start(t,s,Math.round(i*(c/d)),o).then((()=>r(t,!1)))).then((()=>qt(t,n)))}}var rn={mixins:[en,nn,sn],props:{targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,transition:String,offset:Number},data:{targets:"> *",active:!1,animation:[!0],collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",transition:"ease",offset:0},computed:{items:{get(t,e){let{targets:i}=t
return qe(i,e)},watch(t,e){if(t.forEach((t=>an(Ve(this.content,t),!ie(t,this.clsOpen)))),e||ie(t,this.clsOpen))return
const i=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0]
i&&this.toggle(i,!1)},immediate:!0},toggles(t){let{toggle:e}=t
return this.items.map((t=>Ve(e,t)))}},connected(){this.lazyload()},events:[{name:"click",delegate(){return this.targets+" "+this.$props.toggle},handler(t){t.preventDefault(),this.toggle(mt(this.toggles,t.current))}}],methods:{toggle(t,e){let i=[this.items[Y(t,this.items)]]
const n=ht(this.items,"."+this.clsOpen)
if(this.multiple||d(n,i[0])||(i=i.concat(n)),this.collapsible||!(n.length<2)||ht(i,":not(."+this.clsOpen+")").length)for(const s of i)this.toggleElement(s,!ie(s,this.clsOpen),(async(t,i)=>{ne(t,this.clsOpen,i),J(Ve(this.$props.toggle,t),"aria-expanded",i)
const n=Ve((t._wrapper?"> * ":"")+this.content,t)
if(!1!==e&&this.hasTransition){if(t._wrapper||(t._wrapper=ze(n,"<div"+(i?" hidden":"")+">")),an(n,!1),await on(this)(t._wrapper,i),an(n,!i),delete t._wrapper,He(n),i){const e=Ve(this.$props.toggle,t)
_i(e)||Oi(e,{offset:this.offset})}}else an(n,!i)}))}}}
function an(t,e){t&&(t.hidden=e)}var ln={mixins:[en,sn],args:"animation",props:{close:String},data:{animation:[!0],selClose:".uk-alert-close",duration:150,hideProps:{opacity:0,...sn.data.hideProps}},events:[{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.close()}}],methods:{async close(){await this.toggleElement(this.$el),this.$destroy(!0)}}},hn={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},computed:{inView(t){let{autoplay:e}=t
return"inview"===e}},connected(){this.inView&&!K(this.$el,"preload")&&(this.$el.preload="none"),this.automute&&xi(this.$el),this.registerObserver(ci(this.$el,(()=>this.$emit("scroll")),{},!1))},update:{read(){return!!ki(this.$el)&&{visible:nt(this.$el)&&"hidden"!==qt(this.$el,"visibility"),inView:this.inView&&_i(this.$el)}},write(t){let{visible:e,inView:i}=t
!e||this.inView&&!i?yi(this.$el):(!0===this.autoplay||this.inView&&i)&&bi(this.$el)},events:["resize","scroll"]}},cn={mixins:[hn],props:{width:Number,height:Number},data:{automute:!0},connected(){this.registerObserver(ui(this.$el,(()=>this.$emit("resize"))))},update:{read(){const t=this.$el,{offsetHeight:e,offsetWidth:i}=function(t){for(;t=lt(t);)if("static"!==qt(t,"position"))return t}(t)||lt(t),n=G.cover({width:this.width||t.naturalWidth||t.videoWidth||t.clientWidth,height:this.height||t.naturalHeight||t.videoHeight||t.clientHeight},{width:i+(i%2?1:0),height:e+(e%2?1:0)})
return!(!n.width||!n.height)&&n},write(t){let{height:e,width:i}=t
qt(this.$el,{height:e,width:i})},events:["resize"]}},dn={props:{container:Boolean},data:{container:!0},computed:{container(t){let{container:e}=t
return!0===e&&this.$container||e&&Ve(e)}}},un={props:{pos:String,offset:null,flip:Boolean,clsPos:String},data:{pos:"bottom-"+(Ye?"right":"left"),flip:!0,offset:!1,clsPos:""},computed:{pos(t){let{pos:e}=t
return e.split("-").concat("center").slice(0,2)},dir(){return this.pos[0]},align(){return this.pos[1]}},methods:{positionAt(t,e,i){te(t,this.clsPos+"-(top|bottom|left|right)(-[a-z]+)?")
let{offset:n}=this
const s=this.getAxis()
if(!E(n)){const t=Ve(n)
n=t?fe(t)["x"===s?"left":"top"]-fe(e)["x"===s?"right":"bottom"]:0}const{x:o,y:r}=Fi(t,e,"x"===s?xe(this.dir)+" "+this.align:this.align+" "+xe(this.dir),"x"===s?this.dir+" "+this.align:this.align+" "+this.dir,"x"===s?""+("left"===this.dir?-n:n):" "+("top"===this.dir?-n:n),null,this.flip,i).target
this.dir="x"===s?o:r,this.align="x"===s?r:o,ne(t,this.clsPos+"-"+this.dir+"-"+this.align,!1===this.offset)},getAxis(){return"top"===this.dir||"bottom"===this.dir?"y":"x"}}}
let pn
var fn={mixins:[dn,nn,un,sn],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryAlign:Boolean,delayShow:Number,delayHide:Number,clsDrop:String},data:{mode:["click","hover"],toggle:"- *",boundary:!0,boundaryAlign:!1,delayShow:0,delayHide:800,clsDrop:!1,animation:["uk-animation-fade"],cls:"uk-open",container:!1},computed:{boundary(t,e){let{boundary:i}=t
return!0===i?window:gt(i,e)},clsDrop(t){let{clsDrop:e}=t
return e||"uk-"+this.$options.name},clsPos(){return this.clsDrop}},created(){this.tracker=new li},connected(){Kt(this.$el,this.clsDrop),this.toggle&&!this.target&&(this.target=this.$create("toggle",gt(this.toggle,this.$el),{target:this.$el,mode:this.mode}).$el,J(this.target,"aria-haspopup",!0),this.lazyload(this.target))},disconnected(){this.isActive()&&(pn=null)},events:[{name:"click",delegate(){return"."+this.clsDrop+"-close"},handler(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:()=>'a[href^="#"]',handler(t){let{defaultPrevented:e,current:{hash:i}}=t
e||!i||ut(i,this.$el)||this.hide(!1)}},{name:"beforescroll",handler(){this.hide(!1)}},{name:"toggle",self:!0,handler(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(e.$el,!1)}},{name:"toggleshow",self:!0,handler(t,e){t.preventDefault(),this.show(e.$el)}},{name:"togglehide",self:!0,handler(t){t.preventDefault(),ct(this.$el,":focus,:hover")||this.hide()}},{name:ti+" focusin",filter(){return d(this.mode,"hover")},handler(t){Lt(t)||this.clearTimers()}},{name:ei+" focusout",filter(){return d(this.mode,"hover")},handler(t){!Lt(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler(t,e){e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler(){pn=this,this.tracker.init(),_t(this.$el,"hide",Ct(document,Je,(t=>{let{target:e}=t
return!ut(e,this.$el)&&_t(document,Qe+" "+ii+" scroll",(t=>{let{defaultPrevented:i,type:n,target:s}=t
i||n!==Qe||e!==s||this.target&&ut(e,this.target)||this.hide(!1)}),!0)})),{self:!0}),_t(this.$el,"hide",Ct(document,"keydown",(t=>{27===t.keyCode&&this.hide(!1)})),{self:!0})}},{name:"beforehide",self:!0,handler(){this.clearTimers()}},{name:"hide",handler(t){let{target:e}=t
this.$el===e?(pn=this.isActive()?null:pn,this.tracker.cancel()):pn=null===pn&&ut(e,this.$el)&&this.isToggled()?this:pn}}],update:{write(){this.isToggled()&&!ie(this.$el,this.clsEnter)&&this.position()},events:["resize"]},methods:{show(t,e){if(void 0===t&&(t=this.target),void 0===e&&(e=!0),this.isToggled()&&t&&this.target&&t!==this.target&&this.hide(!1),this.target=t,this.clearTimers(),!this.isActive()){if(pn){if(e&&pn.isDelaying)return void(this.showTimer=setTimeout((()=>ct(t,":hover")&&this.show()),10))
let i
for(;pn&&i!==pn&&!ut(this.$el,pn.$el);)i=pn,pn.hide(!1)}this.container&&lt(this.$el)!==this.container&&Pe(this.container,this.$el),this.showTimer=setTimeout((()=>this.toggleElement(this.$el,!0)),e&&this.delayShow||0)}},hide(t){void 0===t&&(t=!0)
const e=()=>this.toggleElement(this.$el,!1,!1)
this.clearTimers(),this.isDelaying=function(t){const e=[]
return Re(t,(t=>"static"!==qt(t,"position")&&e.push(t))),e}(this.$el).some((t=>this.tracker.movesTo(t))),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(e,this.delayHide):e()},clearTimers(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive(){return pn===this},position(){Qt(this.$el,this.clsDrop+"-stack"),ne(this.$el,this.clsDrop+"-boundary",this.boundaryAlign)
const t=fe(this.boundary),e=this.boundaryAlign?t:fe(this.target)
if("justify"===this.align){const t="y"===this.getAxis()?"width":"height"
qt(this.$el,t,e[t])}else this.boundary&&this.$el.offsetWidth>Math.max(t.right-e.left,e.right-t.left)&&Kt(this.$el,this.clsDrop+"-stack")
this.positionAt(this.$el,this.boundaryAlign?this.boundary:this.target,this.boundary)}}},mn={mixins:[en],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:(t,e)=>Ve(st,e),state(){return this.input.nextElementSibling},target(t,e){let{target:i}=t
return i&&(!0===i&&lt(this.input)===e&&this.input.nextElementSibling||gt(i,e))}},update(){const{target:t,input:e}=this
if(!t)return
let i
const n=ot(t)?"value":"textContent",s=t[n],o=e.files&&e.files[0]?e.files[0].name:ct(e,"select")&&(i=qe("option",e).filter((t=>t.selected))[0])?i.textContent:e.value
s!==o&&(t[n]=o)},events:[{name:"change",handler(){this.$emit()}},{name:"reset",el(){return dt(this.$el,"form")},handler(){this.$emit()}}]},gn={update:{read(t){const e=_i(this.$el)
if(!e||t.isInView===e)return!1
t.isInView=e},write(){this.$el.src=""+this.$el.src},events:["scroll","resize"]}},vn={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},update:{read(){const t=wn(this.$el.children)
return{rows:t,columns:bn(t)}},write(t){let{columns:e,rows:i}=t
for(const n of i)for(const t of n)ne(t,this.margin,i[0]!==n),ne(t,this.firstColumn,!!~e[0].indexOf(t))},events:["resize"]}}
function wn(t){return yn(t,"top","bottom")}function bn(t){const e=[]
for(const i of t){const t=yn(i,"left","right")
for(let i=0;i<t.length;i++)e[i]=e[i]?e[i].concat(t[i]):t[i]}return Ye?e.reverse():e}function yn(t,e,i){const n=[[]]
for(const s of t){if(!nt(s))continue
let t=xn(s)
for(let o=n.length-1;o>=0;o--){const r=n[o]
if(!r[0]){r.push(s)
break}let a
if(r[0].offsetParent===s.offsetParent?a=xn(r[0]):(t=xn(s,!0),a=xn(r[0],!0)),t[e]>=a[i]-1&&t[e]!==a[e]){n.push([s])
break}if(t[i]-1>a[e]||t[e]===a[e]){r.push(s)
break}if(0===o){n.unshift([s])
break}}}return n}function xn(t,e){void 0===e&&(e=!1)
let{offsetTop:i,offsetLeft:n,offsetHeight:s,offsetWidth:o}=t
return e&&([i,n]=ge(t)),{top:i,left:n,bottom:i+s,right:n+o}}var kn={extends:vn,mixins:[en],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected(){this.masonry&&Kt(this.$el,"uk-flex-top uk-flex-wrap-top")},update:[{write(t){let{columns:e}=t
ne(this.$el,this.clsStack,e.length<2)},events:["resize"]},{read(t){let{columns:e,rows:i}=t
if(!e.length||!this.masonry&&!this.parallax||$n(this.$el))return t.translates=!1,!1
let n=!1
const s=ft(this.$el),o=function(t){return t.map((t=>t.reduce(((t,e)=>t+e.offsetHeight),0)))}(e),r=function(t,e){const[i]=t.filter((t=>ie(t,e)))
return O(i?qt(i,"marginTop"):qt(t[0],"paddingLeft"))}(s,this.margin)*(i.length-1),a=Math.max(...o)+r
this.masonry&&(e=e.map((t=>j(t,"offsetTop"))),n=function(t,e){const i=t.map((t=>Math.max(...t.map((t=>t.offsetHeight)))))
return e.map((t=>{let e=0
return t.map(((n,s)=>e+=s?i[s-1]-t[s-1].offsetHeight:0))}))}(i,e))
let l=Math.abs(this.parallax)
return l&&(l=o.reduce(((t,e,i)=>Math.max(t,e+r+(i%2?l:l/8)-a)),0)),{padding:l,columns:e,translates:n,height:n?a:""}},write(t){let{height:e,padding:i}=t
qt(this.$el,"paddingBottom",i||""),!1!==e&&qt(this.$el,"height",e)},events:["resize"]},{read(){return!$n(this.$el)&&{scrolled:!!this.parallax&&Di(this.$el)*Math.abs(this.parallax)}},write(t){let{columns:e,scrolled:i,translates:n}=t;(!1!==i||n)&&e.forEach(((t,e)=>t.forEach(((t,s)=>qt(t,"transform",i||n?"translateY("+((n&&-n[e][s])+(i?e%2?i:i/8:0))+"px)":"")))))},events:["scroll","resize"]}]}
function $n(t){return ft(t).some((t=>"absolute"===qt(t,"position")))}var Sn={args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0,forceHeight:!0},computed:{elements(t,e){let{target:i}=t
return qe(i,e)}},update:{read(){return{rows:(this.row?wn(this.elements):[this.elements]).map(Tn)}},write(t){let{rows:e}=t
for(const{heights:i,elements:n}of e)n.forEach(((t,e)=>qt(t,"minHeight",i[e])))},events:["resize"]}}
function Tn(t){if(t.length<2)return{heights:[""],elements:t}
let e=t.map(In),i=Math.max(...e)
const n=t.some((t=>t.style.minHeight)),s=t.some(((t,n)=>!t.style.minHeight&&e[n]<i))
return n&&s&&(qt(t,"minHeight",""),e=t.map(In),i=Math.max(...e)),e=t.map(((t,n)=>e[n]===i&&O(t.style.minHeight).toFixed(2)!==i.toFixed(2)?"":i)),{heights:e,elements:t}}function In(t){let e=!1
nt(t)||(e=t.style.display,qt(t,"display","block","important"))
const i=pe(t).height-ye(t,"height","content-box")
return!1!==e&&qt(t,"display",e),i}var En={mixins:[en],props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},update:{read(t){let{minHeight:e}=t
if(!nt(this.$el))return!1
let i=""
const n=ye(this.$el,"height","content-box")
if(this.expand)i=ve(window)-(pe(document.documentElement).height-pe(this.$el).height)-n||""
else{if(i="calc(100vh",this.offsetTop){const{top:t}=fe(this.$el)
i+=t>0&&t<ve(window)/2?" - "+t+"px":""}!0===this.offsetBottom?i+=" - "+pe(this.$el.nextElementSibling).height+"px":E(this.offsetBottom)?i+=" - "+this.offsetBottom+"vh":this.offsetBottom&&c(this.offsetBottom,"px")?i+=" - "+O(this.offsetBottom)+"px":T(this.offsetBottom)&&(i+=" - "+pe(gt(this.offsetBottom,this.$el)).height+"px"),i+=(n?" - "+n+"px":"")+")"}return{minHeight:i,prev:e}},write(t){let{minHeight:e,prev:i}=t
qt(this.$el,{minHeight:e}),e!==i&&Pt(this.$el,"resize"),this.minHeight&&O(qt(this.$el,"minHeight"))<this.minHeight&&qt(this.$el,"minHeight",this.minHeight)},events:["resize"]}},Cn={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,focusable:Boolean,attributes:"list"},data:{ratio:1,include:["style","class","focusable"],class:"",strokeAnimation:!1},beforeConnect(){this.class+=" uk-svg"},connected(){!this.icon&&d(this.src,"#")&&([this.src,this.icon]=this.src.split("#")),this.svg=this.getSvg().then((t=>{if(this._connected){const e=function(t,e){if(it(e)||Ee(e,"canvas")){e.hidden=!0
const i=e.nextElementSibling
return Dn(t,i)?i:De(e,t)}const i=e.lastElementChild
return Dn(t,i)?i:Pe(e,t)}(t,this.$el)
return this.svgEl&&e!==this.svgEl&&Me(this.svgEl),this.applyAttributes(e,t),this.$emit(),this.svgEl=e}}),V)},disconnected(){this.svg.then((t=>{this._connected||(it(this.$el)&&(this.$el.hidden=!1),Me(t),this.svgEl=null)})),this.svg=null},update:{read(){return!!(this.strokeAnimation&&this.svgEl&&nt(this.svgEl))},write(){!function(t){const e=On(t)
e&&t.style.setProperty("--uk-animation-stroke",e)}(this.svgEl)},type:["resize"]},methods:{async getSvg(){return Ee(this.$el,"img")&&!this.$el.complete&&"lazy"===this.$el.loading?new Promise((t=>_t(this.$el,"load",(()=>t(this.getSvg()))))):(t=await An(this.src),(e=this.icon)&&d(t,"<symbol")&&(t=function(t,e){if(!Pn[t]){let e
for(Pn[t]={},_n.lastIndex=0;e=_n.exec(t);)Pn[t][e[3]]='<svg xmlns="http://www.w3.org/2000/svg"'+e[1]+"svg>"}return Pn[t][e]}(t,e)||t),(null==(i=t=Ve(t.substr(t.indexOf("<svg"))))?void 0:i.hasChildNodes())&&t||Promise.reject("SVG not found."))
var t,e,i},applyAttributes(t,e){for(const o in this.$options.props)d(this.include,o)&&o in this&&J(t,o,this[o])
for(const o in this.attributes){const[e,i]=this.attributes[o].split(":",2)
J(t,e,i)}this.id||Q(t,"id")
const i=["width","height"]
let n=i.map((t=>this[t]))
n.some((t=>t))||(n=i.map((t=>J(e,t))))
const s=J(e,"viewBox")
s&&!n.some((t=>t))&&(n=s.split(" ").slice(2)),n.forEach(((e,n)=>J(t,i[n],O(e)*this.ratio||null)))}}}
const An=X((async t=>t?h(t,"data:")?decodeURIComponent(t.split(",")[1]):(await fetch(t)).text():Promise.reject())),_n=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,Pn={}
function On(t){return Math.ceil(Math.max(0,...qe("[stroke]",t).map((t=>{try{return t.getTotalLength()}catch(t){return 0}}))))}function Dn(t,e){return Ee(t,"svg")&&Ee(e,"svg")&&Nn(t)===Nn(e)}function Nn(t){return(t.innerHTML||(new XMLSerializer).serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g,"$1")).replace(/\s/g,"")}const Mn={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},zn={install:function(t){t.icon.add=(e,i)=>{const n=T(e)?{[e]:i}:e
L(n,((t,e)=>{Mn[e]=t,delete Wn[e]})),t._initialized&&Re(document.body,(e=>L(t.getComponents(e),(t=>{t.$options.isIcon&&t.icon in n&&t.$reset()}))))}},extends:Cn,args:"icon",props:["icon"],data:{include:["focusable"]},isIcon:!0,beforeConnect(){Kt(this.$el,"uk-icon")},methods:{async getSvg(){const t=function(t){return Mn[t]?(Wn[t]||(Wn[t]=Ve((Mn[function(t){return Ye?H(H(t,"left","right"),"previous","next"):t}(t)]||Mn[t]).trim())),Wn[t].cloneNode(!0)):null}(this.icon)
if(!t)throw"Icon not found."
return t}}},Bn={args:!1,extends:zn,data:t=>({icon:s(t.constructor.options.name)}),beforeConnect(){Kt(this.$el,this.$name)}},Hn={extends:Bn,beforeConnect(){Kt(this.$el,"uk-slidenav")},computed:{icon(t,e){let{icon:i}=t
return ie(e,"uk-slidenav-large")?i+"-large":i}}},Fn={extends:Bn,computed:{icon(t,e){let{icon:i}=t
return ie(e,"uk-search-icon")&&pt(e,".uk-search-large").length?"search-large":pt(e,".uk-search-navbar").length?"search-navbar":i}}},Ln={extends:Bn,computed:{icon(){return"close-"+(ie(this.$el,"uk-close-large")?"large":"icon")}}},jn={extends:Bn,methods:{async getSvg(){const t=await zn.methods.getSvg.call(this)
return 1!==this.ratio&&qt(Ve("circle",t),"strokeWidth",1/this.ratio),t}}},Wn={},Rn="loading"in HTMLImageElement.prototype
var Vn={args:"dataSrc",props:{dataSrc:String,sources:String,offsetTop:String,offsetLeft:String,target:String,loading:String},data:{dataSrc:"",sources:!1,offsetTop:"50vh",offsetLeft:"50vw",target:!1,loading:"lazy"},computed:{target:{get(t){let{target:e}=t
return[this.$el,...vt(e,this.$el)]},watch(){this.$reset()}}},connected(){var t
"lazy"===this.loading&&hi?Rn&&Qn(this.$el)&&(this.$el.loading="lazy",qn(this.$el),1===this.target.length)||(Qn(t=this.$el)&&!K(t,"src")&&J(t,"src",'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"></svg>'),this.registerObserver(ci(this.target,((t,e)=>{this.load(),e.disconnect()}),{rootMargin:ke(this.offsetTop,"height")+"px "+ke(this.offsetLeft,"width")+"px"}))):this.load()},disconnected(){this._data.image&&(this._data.image.onload="")},update:{write(t){if(!this.observer||Qn(this.$el))return!1
const e=tt(this.$el,"data-srcset")
if(e&&1!==window.devicePixelRatio){const i=qt(this.$el,"backgroundSize");(i.match(/^(auto\s?)+$/)||O(i)===t.bgSize)&&(t.bgSize=function(t,e){const i=ke(function(t){let e
for(Yn.lastIndex=0;e=Yn.exec(t);)if(!e[1]||window.matchMedia(e[1]).matches){e=Jn(e[2])
break}return e||"100vw"}(e)),n=(t.match(Kn)||[]).map(O).sort(((t,e)=>t-e))
return n.filter((t=>t>=i))[0]||n.pop()||""}(e,tt(this.$el,"sizes")),qt(this.$el,"backgroundSize",t.bgSize+"px"))}},events:["resize"]},methods:{load(){if(this._data.image)return this._data.image
const t=Qn(this.$el)?this.$el:function(t,e,i){const n=new Image
return function(t,e){if((e=function(t){if(!t)return[]
if(h(t,"["))try{t=JSON.parse(t)}catch(e){t=[]}else t=wi(t)
return p(t)||(t=[t]),t.filter((t=>!C(t)))}(e)).length){const i=je("<picture>")
for(const t of e){const e=je("<source>")
J(e,t),Pe(i,e)}Pe(i,t)}}(n,i),Gn(t,n),n.onload=()=>{qn(t,n.currentSrc)},J(n,"src",e),n}(this.$el,this.dataSrc,this.sources)
return Q(t,"loading"),qn(this.$el,t.currentSrc),this._data.image=t}}}
function qn(t,e){if(Qn(t)){const e=lt(t);(!function(t){return Ee(t,"picture")}(e)?[t]:ft(e)).forEach((t=>Gn(t,t)))}else e&&!d(t.style.backgroundImage,e)&&(qt(t,"backgroundImage","url("+Et(e)+")"),Pt(t,Ot("load",!1)))}const Un=["data-src","data-srcset","sizes"]
function Gn(t,e){Un.forEach((i=>{const n=tt(t,i)
n&&J(e,i.replace(/^(data-)+/,""),n)}))}const Yn=/\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g,Xn=/\d+(?:\w+|%)/g,Zn=/[+-]?(\d+)/g
function Jn(t){return h(t,"calc")?t.slice(5,-1).replace(Xn,(t=>ke(t))).replace(/ /g,"").match(Zn).reduce(((t,e)=>t+ +e),0):t}const Kn=/\s+\d+w\s*(?:,|$)/g
function Qn(t){return Ee(t,"img")}var ts={props:{media:Boolean},data:{media:!1},computed:{matchMedia(){const t=function(t){if(T(t))if("@"===t[0]){const e="breakpoint-"+t.substr(1)
t=O(Xt(e))}else if(isNaN(t))return t
return!(!t||isNaN(t))&&"(min-width: "+t+"px)"}(this.media)
return!t||window.matchMedia(t).matches}}},es={mixins:[en,ts],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill(t){let{fill:e}=t
return e||Xt("leader-fill-content")}},connected(){[this.wrapper]=Be(this.$el,'<span class="'+this.clsWrapper+'">')},disconnected(){He(this.wrapper.childNodes)},update:{read(t){let{changed:e,width:i}=t
const n=i
return i=Math.floor(this.$el.offsetWidth/2),{width:i,fill:this.fill,changed:e||n!==i,hide:!this.matchMedia}},write(t){ne(this.wrapper,this.clsHide,t.hide),t.changed&&(t.changed=!1,J(this.wrapper,this.attrFill,new Array(t.width).join(t.fill)))},events:["resize"]}}
const is=[]
var ns={mixins:[en,dn,sn],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel(t,e){let{selPanel:i}=t
return Ve(i,e)},transitionElement(){return this.panel},bgClose(t){let{bgClose:e}=t
return e&&this.panel}},beforeDisconnect(){d(is,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate(){return this.selClose},handler(t){t.preventDefault(),this.hide()}},{name:"toggle",self:!0,handler(t){t.defaultPrevented||(t.preventDefault(),this.isToggled()===d(is,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler(t){if(d(is,this))return!1
!this.stack&&is.length?(Promise.all(is.map((t=>t.hide()))).then(this.show),t.preventDefault()):is.push(this)}},{name:"show",self:!0,handler(){const t=document.documentElement
we(window)>t.clientWidth&&this.overlay&&qt(document.body,"overflowY","scroll"),this.stack&&qt(this.$el,"zIndex",O(qt(this.$el,"zIndex"))+is.length),Kt(t,this.clsPage),this.bgClose&&_t(this.$el,"hide",Ct(document,Je,(t=>{let{target:e}=t
F(is)!==this||this.overlay&&!ut(e,this.$el)||ut(e,this.panel)||_t(document,Qe+" "+ii+" scroll",(t=>{let{defaultPrevented:i,type:n,target:s}=t
i||n!==Qe||e!==s||this.hide()}),!0)})),{self:!0}),this.escClose&&_t(this.$el,"hide",Ct(document,"keydown",(t=>{27===t.keyCode&&F(is)===this&&this.hide()})),{self:!0})}},{name:"shown",self:!0,handler(){at(this.$el)||J(this.$el,"tabindex","-1"),Ve(":focus",this.$el)||this.$el.focus()}},{name:"hidden",self:!0,handler(){d(is,this)&&is.splice(is.indexOf(this),1),is.length||qt(document.body,"overflowY",""),qt(this.$el,"zIndex",""),is.some((t=>t.clsPage===this.clsPage))||Qt(document.documentElement,this.clsPage)}}],methods:{toggle(){return this.isToggled()?this.hide():this.show()},show(){return this.container&&lt(this.$el)!==this.container?(Pe(this.container,this.$el),new Promise((t=>requestAnimationFrame((()=>this.show().then(t)))))):this.toggleElement(this.$el,!0,ss(this))},hide(){return this.toggleElement(this.$el,!1,ss(this))}}}
function ss(t){let{transitionElement:e,_toggle:i}=t
return(t,n)=>new Promise(((s,o)=>_t(t,"show hide",(()=>{t._reject&&t._reject(),t._reject=o,i(t,n)
const r=_t(e,"transitionstart",(()=>{_t(e,"transitionend transitioncancel",s,{self:!0}),clearTimeout(a)}),{self:!0}),a=setTimeout((()=>{r(),s()}),z(qt(e,"transitionDuration")))})))).then((()=>delete t._reject))}var os={install:function(t){let{modal:e}=t
function i(t,i,n,s){i={bgClose:!1,escClose:!0,labels:e.labels,...i}
const o=e.dialog(t(i),i),r=new Z
let a=!1
return Ct(o.$el,"submit","form",(t=>{t.preventDefault(),r.resolve(null==s?void 0:s(o)),a=!0,o.hide()})),Ct(o.$el,"hide",(()=>!a&&n(r))),r.promise.dialog=o,r.promise}e.dialog=function(t,i){const n=e('<div class="uk-modal"> <div class="uk-modal-dialog">'+t+"</div> </div>",i)
return n.show(),Ct(n.$el,"hidden",(async()=>{await Promise.resolve(),n.$destroy(!0)}),{self:!0}),n},e.alert=function(t,e){return i((e=>{let{labels:i}=e
return'<div class="uk-modal-body">'+(T(t)?t:Ce(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>'+i.ok+"</button> </div>"}),e,(t=>t.resolve()))},e.confirm=function(t,e){return i((e=>{let{labels:i}=e
return'<form> <div class="uk-modal-body">'+(T(t)?t:Ce(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+i.cancel+'</button> <button class="uk-button uk-button-primary" autofocus>'+i.ok+"</button> </div> </form>"}),e,(t=>t.reject()))},e.prompt=function(t,e,n){return i((i=>{let{labels:n}=i
return'<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>'+(T(t)?t:Ce(t))+'</label> <input class="uk-input" value="'+(e||"")+'" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+n.cancel+'</button> <button class="uk-button uk-button-primary">'+n.ok+"</button> </div> </form>"}),n,(t=>t.resolve(null)),(t=>Ve("input",t.$el).value))},e.labels={ok:"Ok",cancel:"Cancel"}},mixins:[ns],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler(){ie(this.panel,"uk-margin-auto-vertical")?Kt(this.$el,"uk-flex"):qt(this.$el,"display","block"),ve(this.$el)}},{name:"hidden",self:!0,handler(){qt(this.$el,"display",""),Qt(this.$el,"uk-flex")}}]},rs={extends:rn,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}}
const as=".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle"
var ls={mixins:[en,dn],props:{dropdown:String,mode:"list",align:String,offset:Number,boundary:Boolean,boundaryAlign:Boolean,clsDrop:String,delayShow:Number,delayHide:Number,dropbar:Boolean,dropbarMode:String,dropbarAnchor:Boolean,duration:Number},data:{dropdown:as,align:Ye?"right":"left",clsDrop:"uk-navbar-dropdown",mode:void 0,offset:void 0,delayShow:void 0,delayHide:void 0,boundaryAlign:void 0,flip:"x",boundary:!0,dropbar:!1,dropbarMode:"slide",dropbarAnchor:!1,duration:200,forceHeight:!0,selMinHeight:as,container:!1},computed:{boundary(t,e){let{boundary:i,boundaryAlign:n}=t
return!0===i||n?e:i},dropbarAnchor(t,e){let{dropbarAnchor:i}=t
return gt(i,e)},pos(t){let{align:e}=t
return"bottom-"+e},dropbar:{get(t){let{dropbar:e}=t
return e?(e=this._dropbar||gt(e,this.$el)||Ve("+ .uk-navbar-dropbar",this.$el),e||(this._dropbar=Ve("<div></div>"))):null},watch(t){Kt(t,"uk-navbar-dropbar")},immediate:!0},dropContainer(t,e){return this.container||e},dropdowns:{get(t,e){let{clsDrop:i}=t
const n=qe("."+i,e)
if(this.dropContainer!==e)for(const o of qe("."+i,this.dropContainer)){var s
const t=null==(s=this.getDropdown(o))?void 0:s.target
!d(n,o)&&t&&ut(t,this.$el)&&n.push(o)}return n},watch(t){this.$create("drop",t.filter((t=>!this.getDropdown(t))),{...this.$props,boundary:this.boundary,pos:this.pos,offset:this.dropbar||this.offset})},immediate:!0},toggles(t,e){let{dropdown:i}=t
return qe(i,e)}},disconnected(){this.dropbar&&Me(this.dropbar),delete this._dropbar},events:[{name:"mouseover focusin",delegate(){return this.dropdown},handler(t){let{current:e}=t
const i=this.getActive()
i&&d(i.mode,"hover")&&i.target&&!ut(i.target,e)&&!i.isDelaying&&i.hide(!1)}},{name:"keydown",delegate(){return this.dropdown},handler(t){const{current:e,keyCode:i}=t,n=this.getActive()
i===ds.DOWN&&K(e,"aria-expanded")&&(t.preventDefault(),n&&n.target===e?cs(n.$el):(e.click(),_t(this.dropContainer,"show",(t=>{let{target:e}=t
return cs(e)})))),hs(t,this.toggles,n)}},{name:"keydown",el(){return this.dropContainer},delegate(){return"."+this.clsDrop},handler(t){const{current:e,keyCode:i}=t
if(!d(this.dropdowns,e))return
const n=this.getActive(),s=qe(rt,e),o=u(s,(t=>ct(t,":focus")))
var r
i===ds.UP&&(t.preventDefault(),o>0&&s[o-1].focus()),i===ds.DOWN&&(t.preventDefault(),o<s.length-1&&s[o+1].focus()),i===ds.ESC&&(null==n||null==(r=n.target)||r.focus()),hs(t,this.toggles,n)}},{name:"mouseleave",el(){return this.dropbar},filter(){return this.dropbar},handler(){const t=this.getActive()
t&&d(t.mode,"hover")&&!this.dropdowns.some((t=>ct(t,":hover")))&&t.hide()}},{name:"beforeshow",el(){return this.dropContainer},filter(){return this.dropbar},handler(){lt(this.dropbar)||De(this.dropbarAnchor||this.$el,this.dropbar)}},{name:"show",el(){return this.dropContainer},filter(){return this.dropbar},handler(t,e){let{$el:i,dir:n}=e
ie(i,this.clsDrop)&&("slide"===this.dropbarMode&&Kt(this.dropbar,"uk-navbar-dropbar-slide"),this.clsDrop&&Kt(i,this.clsDrop+"-dropbar"),"bottom"===n&&this.transitionTo(i.offsetHeight+O(qt(i,"marginTop"))+O(qt(i,"marginBottom")),i))}},{name:"beforehide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t,e){let{$el:i}=e
const n=this.getActive()
ct(this.dropbar,":hover")&&(null==n?void 0:n.$el)===i&&!this.toggles.some((t=>n.target!==t&&ct(t,":focus")))&&t.preventDefault()}},{name:"hide",el(){return this.dropContainer},filter(){return this.dropbar},handler(t,e){let{$el:i}=e
if(!ie(i,this.clsDrop))return
const n=this.getActive()
n&&(null==n?void 0:n.$el)!==i||this.transitionTo(0)}}],methods:{getActive(){return pn&&ut(pn.target,this.$el)&&pn},transitionTo(t,e){const{dropbar:i}=this,n=nt(i)?ve(i):0
return qt(e=n<t&&e,"clip","rect(0,"+e.offsetWidth+"px,"+n+"px,0)"),ve(i,n),ae.cancel([e,i]),Promise.all([ae.start(i,{height:t},this.duration),ae.start(e,{clip:"rect(0,"+e.offsetWidth+"px,"+t+"px,0)"},this.duration)]).catch(V).then((()=>{qt(e,{clip:""}),this.$update(i)}))},getDropdown(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")}}}
function hs(t,e,i){const{current:n,keyCode:s}=t,o=(null==i?void 0:i.target)||n,r=e.indexOf(o)
s===ds.LEFT&&r>0&&(null==i||i.hide(!1),e[r-1].focus()),s===ds.RIGHT&&r<e.length-1&&(null==i||i.hide(!1),e[r+1].focus()),s===ds.TAB&&(o.focus(),null==i||i.hide(!1))}function cs(t){var e
Ve(":focus",t)||null==(e=Ve(rt,t))||e.focus()}const ds={TAB:9,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40}
var us={props:{swiping:Boolean},data:{swiping:!0},computed:{swipeTarget:(t,e)=>e},connected(){this.swiping&&Ui(this,{el:this.swipeTarget,name:Je,passive:!0,handler(t){if(!Lt(t))return
const e=jt(t),i="tagName"in t.target?t.target:lt(t.target)
_t(document,Qe+" "+ii+" scroll",(t=>{const{x:n,y:s}=jt(t);("scroll"!==t.type&&i&&n&&Math.abs(e.x-n)>100||s&&Math.abs(e.y-s)>100)&&setTimeout((()=>{var t,o,r,a
Pt(i,"swipe"),Pt(i,"swipe"+(t=e.x,o=e.y,r=n,a=s,Math.abs(t-r)>=Math.abs(o-a)?t-r>0?"Left":"Right":o-a>0?"Up":"Down"))}))}))}})}},ps={mixins:[ns,us],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1},computed:{clsFlip(t){let{flip:e,clsFlip:i}=t
return e?i:""},clsOverlay(t){let{overlay:e,clsOverlay:i}=t
return e?i:""},clsMode(t){let{mode:e,clsMode:i}=t
return i+"-"+e},clsSidebarAnimation(t){let{mode:e,clsSidebarAnimation:i}=t
return"none"===e||"reveal"===e?"":i},clsContainerAnimation(t){let{mode:e,clsContainerAnimation:i}=t
return"push"!==e&&"reveal"!==e?"":i},transitionElement(t){let{mode:e}=t
return"reveal"===e?lt(this.panel):this.panel}},update:{read(){this.isToggled()&&!nt(this.$el)&&this.hide()},events:["resize"]},events:[{name:"click",delegate:()=>'a[href^="#"]',handler(t){let{current:{hash:e},defaultPrevented:i}=t
!i&&e&&Ve(e,document.body)&&this.hide()}},{name:"touchstart",passive:!0,el(){return this.panel},handler(t){let{targetTouches:e}=t
1===e.length&&(this.clientY=e[0].clientY)}},{name:"touchmove",self:!0,passive:!1,filter(){return this.overlay},handler(t){t.cancelable&&t.preventDefault()}},{name:"touchmove",passive:!1,el(){return this.panel},handler(t){if(1!==t.targetTouches.length)return
const e=t.targetTouches[0].clientY-this.clientY,{scrollTop:i,scrollHeight:n,clientHeight:s}=this.panel;(s>=n||0===i&&e>0||n-i<=s&&e<0)&&t.cancelable&&t.preventDefault()}},{name:"show",self:!0,handler(){"reveal"!==this.mode||ie(lt(this.panel),this.clsMode)||(ze(this.panel,"<div>"),Kt(lt(this.panel),this.clsMode)),qt(document.documentElement,"overflowY",this.overlay?"hidden":""),Kt(document.body,this.clsContainer,this.clsFlip),qt(document.body,"touch-action","pan-y pinch-zoom"),qt(this.$el,"display","block"),Kt(this.$el,this.clsOverlay),Kt(this.panel,this.clsSidebarAnimation,"reveal"!==this.mode?this.clsMode:""),ve(document.body),Kt(document.body,this.clsContainerAnimation),this.clsContainerAnimation&&(fs().content+=",user-scalable=0")}},{name:"hide",self:!0,handler(){Qt(document.body,this.clsContainerAnimation),qt(document.body,"touch-action","")}},{name:"hidden",self:!0,handler(){this.clsContainerAnimation&&function(){const t=fs()
t.content=t.content.replace(/,user-scalable=0$/,"")}(),"reveal"===this.mode&&He(this.panel),Qt(this.panel,this.clsSidebarAnimation,this.clsMode),Qt(this.$el,this.clsOverlay),qt(this.$el,"display",""),Qt(document.body,this.clsContainer,this.clsFlip),qt(document.documentElement,"overflowY","")}},{name:"swipeLeft swipeRight",handler(t){this.isToggled()&&c(t.type,"Left")^this.flip&&this.hide()}}]}
function fs(){return Ve('meta[name="viewport"]',document.head)||Pe(document.head,'<meta name="viewport">')}var ms={mixins:[en],props:{selContainer:String,selContent:String,minHeight:Number},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog",minHeight:150},computed:{container(t,e){let{selContainer:i}=t
return dt(e,i)},content(t,e){let{selContent:i}=t
return dt(e,i)}},connected(){qt(this.$el,"minHeight",this.minHeight)},update:{read(){return!!(this.content&&this.container&&nt(this.$el))&&{current:O(qt(this.$el,"maxHeight")),max:Math.max(this.minHeight,ve(this.container)-(pe(this.content).height-ve(this.$el)))}},write(t){let{current:e,max:i}=t
qt(this.$el,"maxHeight",i),Math.round(e)!==Math.round(i)&&Pt(this.$el,"resize")},events:["resize"]}},gs={props:["width","height"],connected(){Kt(this.$el,"uk-responsive-width")},update:{read(){return!!(nt(this.$el)&&this.width&&this.height)&&{width:we(lt(this.$el)),height:this.height}},write(t){ve(this.$el,G.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},vs={props:{offset:Number},data:{offset:0},methods:{async scrollTo(t){t=t&&Ve(t)||document.body,Pt(this.$el,"beforescroll",[this,t])&&(await Oi(t,{offset:this.offset}),Pt(this.$el,"scrolled",[this,t]))}},events:{click(t){t.defaultPrevented||(t.preventDefault(),this.scrollTo("#"+Et(decodeURIComponent((this.$el.hash||"").substr(1)))))}}}
const ws="_ukScrollspy"
var bs={args:"cls",props:{cls:String,target:String,hidden:Boolean,offsetTop:Number,offsetLeft:Number,repeat:Boolean,delay:Number},data:()=>({cls:"",target:!1,hidden:!0,offsetTop:0,offsetLeft:0,repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}),computed:{elements:{get(t,e){let{target:i}=t
return i?qe(i,e):[e]},watch(t){this.hidden&&qt(ht(t,":not(."+this.inViewClass+")"),"visibility","hidden")},immediate:!0}},disconnected(){for(const t of this.elements)Qt(t,this.inViewClass,t[ws]?t[ws].cls:""),delete t[ws]},update:[{read(t){if(!t.update)return Promise.resolve().then((()=>{this.$emit(),t.update=!0})),!1
for(const e of this.elements)e[ws]||(e[ws]={cls:tt(e,"uk-scrollspy-class")||this.cls}),e[ws].show=_i(e,this.offsetTop,this.offsetLeft)},write(t){for(const e of this.elements){const i=e[ws]
!i.show||i.inview||i.queued?!i.show&&i.inview&&!i.queued&&this.repeat&&this.toggle(e,!1):(i.queued=!0,t.promise=(t.promise||Promise.resolve()).then((()=>new Promise((t=>setTimeout(t,this.delay))))).then((()=>{this.toggle(e,!0),setTimeout((()=>{i.queued=!1,this.$emit()}),300)})))}},events:["scroll","resize"]}],methods:{toggle(t,e){const i=t[ws]
i.off&&i.off(),qt(t,"visibility",!e&&this.hidden?"hidden":""),ne(t,this.inViewClass,e),ne(t,i.cls),/\buk-animation-/.test(i.cls)&&(i.off=_t(t,"animationcancel animationend",(()=>te(t,"uk-animation-[\\w-]+")))),Pt(t,e?"inview":"outview"),i.inview=e,this.$update(t)}}},ys={props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:{get:(t,e)=>qe('a[href^="#"]',e).filter((t=>t.hash)),watch(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})},immediate:!0},targets(){return qe(this.links.map((t=>Et(t.hash).substr(1))).join(","))},elements(t){let{closest:e}=t
return dt(this.links,e||"*")}},update:[{read(){const{length:t}=this.targets
if(!t||!nt(this.$el))return!1
const[e]=Ni(this.targets,/auto|scroll/,!0),{scrollTop:i,scrollHeight:n}=e,s=n-zi(e)
let o=!1
return i===s?o=t-1:(this.targets.every(((t,i)=>{if(fe(t).top-fe(Mi(e)).top-this.offset<=0)return o=i,!0})),!1===o&&this.overflow&&(o=0)),{active:o}},write(t){let{active:e}=t
const i=!1!==e&&!ie(this.elements[e],this.cls)
this.links.forEach((t=>t.blur())),Qt(this.elements,this.cls),Kt(this.elements[e],this.cls),i&&Pt(this.$el,"active",[e,this.elements[e]])},events:["scroll","resize"]}]},xs={mixins:[en,ts],props:{position:String,top:null,bottom:Boolean,offset:String,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,widthElement:Boolean,showOnUp:Boolean,targetOffset:Number},data:{position:"top",top:0,bottom:!1,offset:0,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",widthElement:!1,showOnUp:!1,targetOffset:!1},computed:{selTarget(t,e){let{selTarget:i}=t
return i&&Ve(i,e)||e},widthElement(t,e){let{widthElement:i}=t
return gt(i,e)||this.placeholder},isActive:{get(){return ie(this.selTarget,this.clsActive)},set(t){t&&!this.isActive?(ee(this.selTarget,this.clsInactive,this.clsActive),Pt(this.$el,"active")):t||ie(this.selTarget,this.clsInactive)||(ee(this.selTarget,this.clsActive,this.clsInactive),Pt(this.$el,"inactive"))}}},connected(){this.placeholder=Ve("+ .uk-sticky-placeholder",this.$el)||Ve('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.isActive=!1},disconnected(){this.isFixed&&(this.hide(),Qt(this.selTarget,this.clsInactive)),Me(this.placeholder),this.placeholder=null,this.widthElement=null},events:[{name:"load hashchange popstate",el:()=>window,filter(){return!1!==this.targetOffset},handler(){location.hash&&0!==Pi(window)&&ni.read((()=>{const t=fe(Ve(location.hash)),e=fe(this.$el)
this.isFixed&&q(t,e)&&Pi(window,t.top-e.height-ke(this.targetOffset,"height")-ke(this.offset,"height"))}))}}],update:[{read(t,e){let{height:i,margin:n}=t
if(this.inactive=!this.matchMedia||!nt(this.$el),this.inactive)return!1
const s=this.isActive&&e.has("resize")
s&&(qt(this.selTarget,"transition","0s"),this.hide()),this.isActive||(i=fe(this.$el).height,n=qt(this.$el,"margin")),s&&(this.show(),ni.write((()=>qt(this.selTarget,"transition",""))))
const o=this.isFixed?this.placeholder:this.$el,r=ve(window)
let a=this.position
"auto"===a&&i>r&&(a="bottom")
let l=ke(this.offset,"height",o)
"bottom"===a&&(l+=r-i)
const h=Math.max(0,i+l-r),c=fe(o).top,d=fe(o.offsetParent).top,u=ks(this.top,this.$el,c),p=ks(this.bottom,this.$el,c+i,!0)
return{start:Math.max(u,c)-l,end:p?p-fe(this.$el).height+h-l:Bi(this.$el).scrollHeight-r,offset:l,overflow:h,topOffset:c,offsetParentTop:d,height:i,margin:n,width:pe(nt(this.widthElement)?this.widthElement:this.$el).width,top:ge(o)[0]}},write(t){let{height:e,margin:i}=t
const{placeholder:n}=this
qt(n,{height:e,margin:i}),ut(n,document)||(De(this.$el,n),n.hidden=!0),this.isActive=!!this.isActive},events:["resize"]},{read(t){let{scroll:e=0,dir:i="down",overflow:n,overflowScroll:s=0,start:o,end:r}=t
const a=Pi(window)
return{dir:e<=a?"down":"up",prevDir:i,scroll:a,prevScroll:e,overflowScroll:R(s+R(a,o,r)-R(e,o,r),0,n)}},write(t,e){const i=e.has("scroll"),{initTimestamp:n=0,dir:s,prevDir:o,scroll:r,prevScroll:a=0,top:l,start:h,topOffset:c,height:d}=t
if(r<0||r===a&&i||this.showOnUp&&!i&&!this.isFixed)return
const u=Date.now()
if((u-n>300||s!==o)&&(t.initScroll=r,t.initTimestamp=u),!(this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-r)<=30&&Math.abs(a-r)<=10))if(this.inactive||r<h||this.showOnUp&&(r<=h||"down"===s&&i||"up"===s&&!this.isFixed&&r<=c+d)){if(!this.isFixed)return void(de.inProgress(this.$el)&&l>r&&(de.cancel(this.$el),this.hide()))
this.isFixed=!1,this.animation&&r>c?(de.cancel(this.$el),de.out(this.$el,this.animation).then((()=>this.hide()),V)):this.hide()}else this.isFixed?this.update():this.animation&&r>c?(de.cancel(this.$el),this.show(),de.in(this.$el,this.animation).catch(V)):this.show()},events:["resize","scroll"]}],methods:{show(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide(){this.isActive=!1,Qt(this.$el,this.clsFixed,this.clsBelow),qt(this.$el,{position:"",top:"",width:""}),this.placeholder.hidden=!0},update(){let{width:t,scroll:e=0,overflow:i,overflowScroll:n=0,start:s,end:o,offset:r,topOffset:a,height:l,offsetParentTop:h}=this._data
const c=0!==s||e>s
let d="fixed"
e>o&&(r+=o-h,d="absolute"),i&&(r-=n),qt(this.$el,{position:d,top:r+"px",width:t}),this.isActive=c,ne(this.$el,this.clsBelow,e>a+l),Kt(this.$el,this.clsFixed)}}}
function ks(t,e,i,n){if(!t)return 0
if(T(t)&&t.match(/^-?\d/))return i+ke(t)
{const i=!0===t?lt(e):gt(t,e)
return fe(i).bottom-(n&&i&&ut(e,i)?O(qt(i,"paddingBottom")):0)}}var $s={mixins:[nn,us,sn],args:"connect",props:{connect:String,toggle:String,itemNav:String,active:Number},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",itemNav:!1,active:0,cls:"uk-active",attrItem:"uk-switcher-item"},computed:{connects:{get(t,e){let{connect:i}=t
return vt(i,e)},watch(t){this.swiping&&qt(t,"touch-action","pan-y pinch-zoom")
const e=this.index()
this.connects.forEach((t=>ft(t).forEach(((t,i)=>ne(t,this.cls,i===e)))))},immediate:!0},toggles:{get(t,e){let{toggle:i}=t
return qe(i,e).filter((t=>!ct(t,".uk-disabled *, .uk-disabled, [disabled]")))},watch(t){const e=this.index()
this.show(~e?e:t[this.active]||t[0])},immediate:!0},children(){return ft(this.$el).filter((t=>this.toggles.some((e=>ut(e,t)))))},swipeTarget(){return this.connects}},connected(){this.lazyload(this.$el,this.connects)},events:[{name:"click",delegate(){return this.toggle},handler(t){t.preventDefault(),this.show(t.current)}},{name:"click",el(){return this.connects.concat(this.itemNav?vt(this.itemNav,this.$el):[])},delegate(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler(t){t.preventDefault(),this.show(tt(t.current,this.attrItem))}},{name:"swipeRight swipeLeft",filter(){return this.swiping},el(){return this.connects},handler(t){let{type:e}=t
this.show(c(e,"Left")?"next":"previous")}}],methods:{index(){return u(this.children,(t=>ie(t,this.cls)))},show(t){const e=this.index(),i=Y(this.children[Y(t,this.toggles,e)],ft(this.$el))
e!==i&&(this.children.forEach(((t,e)=>{ne(t,this.cls,i===e),J(this.toggles[e],"aria-expanded",i===e)})),this.connects.forEach((async t=>{let{children:n}=t
await this.toggleElement(N(n).filter((t=>ie(t,this.cls))),!1,e>=0),await this.toggleElement(n[i],!0,e>=0)})))}}},Ss={mixins:[en],extends:$s,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item"},connected(){const t=ie(this.$el,"uk-tab-left")?"uk-tab-left":!!ie(this.$el,"uk-tab-right")&&"uk-tab-right"
t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},Ts={mixins:[nn,ts,sn],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},connected(){d(this.mode,"media")||at(this.$el)||J(this.$el,"tabindex","0"),this.lazyload(this.$el,this.target)},computed:{target:{get(t,e){let{href:i,target:n}=t
return n=vt(n||i,e),n.length&&n||[e]},watch(){this.updateAria()},immediate:!0}},events:[{name:Je,filter(){return d(this.mode,"hover")},handler(t){Lt(t)&&!this._showState&&(Pt(this.$el,"focus"),_t(document,Je,(()=>Pt(this.$el,"blur")),!0,(t=>!ut(t.target,this.$el))),d(this.mode,"click")&&(this._preventClick=!0))}},{name:ti+" "+ei+" focus blur",filter(){return d(this.mode,"hover")},handler(t){if(Lt(t))return
const e=d([ti,"focus"],t.type),i=J(this.$el,"aria-expanded")
!e&&(t.type===ei&&ct(this.$el,":focus")||"blur"===t.type&&ct(this.$el,":hover"))||(this._showState&&e===(i!==this._showState)?e||(this._showState=null):(this._showState=e?i:null,this.toggle("toggle"+(e?"show":"hide"))))}},{name:"keydown",filter(){return d(this.mode,"click")&&!Ee(this.$el,"input")},handler(t){32===t.keyCode&&(t.preventDefault(),this.$el.click())}},{name:"click",filter(){return d(this.mode,"click")},handler(t){if(this._preventClick)return this._preventClick=null
let e;(dt(t.target,'a[href="#"], a[href=""]')||(e=dt(t.target,"a[href]"))&&("true"!==J(this.$el,"aria-expanded")||e.hash&&ct(this.target,e.hash)))&&t.preventDefault(),this.toggle()}},{name:"toggled",self:!0,el(){return this.target},handler(t,e){t.target===this.target[0]&&this.updateAria(e)}}],update:{read(){return!(!d(this.mode,"media")||!this.media)&&{match:this.matchMedia}},write(t){let{match:e}=t
const i=this.isToggled(this.target);(e?!i:i)&&this.toggle()},events:["resize"]},methods:{async toggle(t){if(!Pt(this.target,t||"toggle",[this]))return
if(!this.queued)return this.toggleElement(this.target)
const e=this.target.filter((t=>ie(t,this.clsLeave)))
if(e.length){for(const t of this.target){const i=d(e,t)
this.toggleElement(t,i,i)}return}const i=this.target.filter(this.isToggled)
await this.toggleElement(i,!1),await this.toggleElement(this.target.filter((t=>!d(i,t))),!0)},updateAria(t){d(this.mode,"media")||J(this.$el,"aria-expanded",S(t)?t:this.isToggled(this.target))}}}
L(Object.freeze({__proto__:null,Accordion:rn,Alert:ln,Cover:cn,Drop:fn,Dropdown:fn,FormCustom:mn,Gif:gn,Grid:kn,HeightMatch:Sn,HeightViewport:En,Icon:zn,Img:Vn,Leader:es,Margin:vn,Modal:os,Nav:rs,Navbar:ls,Offcanvas:ps,OverflowAuto:ms,Responsive:gs,Scroll:vs,Scrollspy:bs,ScrollspyNav:ys,Sticky:xs,Svg:Cn,Switcher:$s,Tab:Ss,Toggle:Ts,Video:hn,Close:Ln,Spinner:jn,SlidenavNext:Hn,SlidenavPrevious:Hn,SearchIcon:Fn,Marker:Bn,NavbarToggleIcon:Bn,OverlayIcon:Bn,PaginationNext:Bn,PaginationPrevious:Bn,Totop:Bn}),((t,e)=>tn.component(e,t))),tn.use((function(t){if(!Ge)return
let e
const i=()=>{e||(e=!0,ni.read((()=>e=!1)),t.update(null,"resize"))}
Ct(window,"load resize",i),Ct(document,"loadedmetadata load",i,!0),ui(document.documentElement,i)
let n=0
Ct(document,"animationstart",(t=>{let{target:e}=t;(qt(e,"animationName")||"").match(/^uk-.*(left|right)/)&&(n++,qt(document.documentElement,"overflowX","hidden"),setTimeout((()=>{--n||qt(document.documentElement,"overflowX","")}),z(qt(e,"animationDuration"))+100))}),!0)})),function(t){const{connect:e,disconnect:i}=t
function n(t){let{addedNodes:n,removedNodes:s}=t
for(const i of n)Re(i,e)
for(const e of s)Re(e,i)}function s(e){var i
let{target:n,attributeName:s}=e
const o=Qi(s)
o&&o in t&&(K(n,s)?t[o](n):null==(i=t.getComponent(n,o))||i.$destroy())}Ge&&window.MutationObserver&&ni.read((function(){document.body&&Re(document.body,e),new MutationObserver((t=>t.forEach(n))).observe(document,{childList:!0,subtree:!0}),new MutationObserver((t=>t.forEach(s))).observe(document,{attributes:!0,subtree:!0}),t._initialized=!0}))}(tn)
const Is=["days","hours","minutes","seconds"]
var Es={mixins:[en],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},connected(){this.date=Date.parse(this.date),this.start()},disconnected(){this.stop()},events:[{name:"visibilitychange",el:()=>document,handler(){document.hidden?this.stop():this.start()}}],methods:{start(){this.stop(),this.update(),this.timer=setInterval(this.update,1e3)},stop(){clearInterval(this.timer)},update(){const t=function(t){const e=t-Date.now()
return{total:e,seconds:e/1e3%60,minutes:e/1e3/60%60,hours:e/1e3/60/60%24,days:e/1e3/60/60/24}}(this.date);(!this.date||t.total<=0)&&(this.stop(),t.days=t.hours=t.minutes=t.seconds=0)
for(const e of Is){const i=Ve(this.clsWrapper.replace("%unit%",e),this.$el)
if(!i)continue
let n=String(Math.floor(t[e]))
n=n.length<2?"0"+n:n,i.textContent!==n&&(n=n.split(""),n.length!==i.children.length&&Ce(i,n.map((()=>"<span></span>")).join("")),n.forEach(((t,e)=>i.children[e].textContent=t)))}}}}
const Cs="uk-transition-leave",As="uk-transition-enter"
function _s(t,e,i,n){void 0===n&&(n=0)
const s=Ps(e,!0),o={opacity:1},r={opacity:0},a=t=>()=>s===Ps(e)?t():Promise.reject(),l=a((()=>(Kt(e,Cs),Promise.all(Ds(e).map(((t,e)=>new Promise((s=>setTimeout((()=>ae.start(t,r,i/2,"ease").then(s)),e*n)))))).then((()=>Qt(e,Cs)))))),h=a((()=>{const a=ve(e)
return Kt(e,As),t(),qt(ft(e),{opacity:0}),new Promise((t=>requestAnimationFrame((()=>{const l=ft(e),h=ve(e)
qt(e,"alignContent","flex-start"),ve(e,a)
const c=Ds(e)
qt(l,r)
const d=c.map(((t,e)=>new Promise((s=>setTimeout((()=>ae.start(t,o,i/2,"ease").then(s)),e*n)))))
a!==h&&d.push(ae.start(e,{height:h},i/2+c.length*n,"ease")),Promise.all(d).then((()=>{Qt(e,As),s===Ps(e)&&(qt(e,{height:"",alignContent:""}),qt(l,{opacity:""}),delete e.dataset.transition),t()}))}))))}))
return ie(e,Cs)?Os(e).then(h):ie(e,As)?Os(e).then(l).then(h):l().then(h)}function Ps(t,e){return e&&(t.dataset.transition=1+Ps(t)),P(t.dataset.transition)||0}function Os(t){return Promise.all(ft(t).filter(ae.inProgress).map((t=>new Promise((e=>_t(t,"transitionend transitioncanceled",e))))))}function Ds(t){return wn(ft(t)).reduce(((t,e)=>t.concat(j(e.filter((t=>_i(t))),"offsetLeft"))),[])}function Ns(t,e,i){return new Promise((n=>requestAnimationFrame((()=>{let s=ft(e)
const o=s.map((t=>Ms(t,!0))),r=qt(e,["height","padding"])
ae.cancel(e),s.forEach(ae.cancel),zs(e),t(),s=s.concat(ft(e).filter((t=>!d(s,t)))),Promise.resolve().then((()=>{ni.flush()
const t=qt(e,["height","padding"]),[a,l]=function(t,e,i){const n=e.map(((t,e)=>!(!lt(t)||!(e in i))&&(i[e]?nt(t)?Bs(t):{opacity:0}:{opacity:nt(t)?1:0}))),s=n.map(((n,s)=>{const o=lt(e[s])===t&&(i[s]||Ms(e[s]))
if(!o)return!1
if(n){if(!("opacity"in n)){const{opacity:t}=o
t%1?n.opacity=1:delete o.opacity}}else delete o.opacity
return o}))
return[n,s]}(e,s,o)
s.forEach(((t,e)=>l[e]&&qt(t,l[e]))),qt(e,{display:"block",...r}),requestAnimationFrame((()=>{const o=s.map(((t,n)=>lt(t)===e&&ae.start(t,a[n],i,"ease"))).concat(ae.start(e,t,i,"ease"))
Promise.all(o).then((()=>{s.forEach(((t,i)=>lt(t)===e&&qt(t,"display",0===a[i].opacity?"none":""))),zs(e)}),V).then(n)}))}))}))))}function Ms(t,e){const i=qt(t,"zIndex")
return!!nt(t)&&{display:"",opacity:e?qt(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===i?mt(t):i,...Bs(t)}}function zs(t){qt(t.children,{height:"",left:"",opacity:"",pointerEvents:"",position:"",top:"",marginTop:"",marginLeft:"",transform:"",width:"",zIndex:""}),qt(t,{height:"",display:"",padding:""})}function Bs(t){const{height:e,width:i}=fe(t),{top:n,left:s}=me(t),{marginLeft:o,marginTop:r}=qt(t,["marginTop","marginLeft"])
return{top:n,left:s,height:e,width:i,marginLeft:o,marginTop:r,transform:""}}var Hs={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate(t,e){void 0===e&&(e=this.$el)
const i=this.animation,n="fade"===i?_s:"delayed-fade"===i?function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return _s(...e,40)}:i?Ns:()=>(t(),Promise.resolve())
return n(t,e,this.duration).then((()=>this.$update(e,"resize")),V)}}},Fs={mixins:[Hs],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{toggles:{get(t,e){let{attrItem:i}=t
return qe("["+i+"],[data-"+i+"]",e)},watch(){if(this.updateState(),!1!==this.selActive){const t=qe(this.selActive,this.$el)
this.toggles.forEach((e=>ne(e,this.cls,d(t,e))))}},immediate:!0},children:{get(t,e){let{target:i}=t
return qe(i+" > *",e)},watch(t,e){var i,n
e&&(n=e,(i=t).length!==n.length||!i.every((t=>~n.indexOf(t))))&&this.updateState()},immediate:!0}},events:[{name:"click",delegate(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler(t){t.preventDefault(),this.apply(t.current)}}],methods:{apply(t){const e=this.getState(),i=js(t,this.attrItem,this.getState())
var n,s
n=e,s=i,["filter","sort"].every((t=>B(n[t],s[t])))||this.setState(i)},getState(){return this.toggles.filter((t=>ie(t,this.cls))).reduce(((t,e)=>js(e,this.attrItem,t)),{filter:{"":""},sort:[]})},setState(t,e){void 0===e&&(e=!0),t={filter:{"":""},sort:[],...t},Pt(this.$el,"beforeFilter",[this,t]),this.toggles.forEach((e=>ne(e,this.cls,!!function(t,e,i){let{filter:n={"":""},sort:[s,o]}=i
const{filter:r="",group:a="",sort:l,order:h="asc"}=Ls(t,e)
return A(l)?a in n&&r===n[a]||!r&&a&&!(a in n)&&!n[""]:s===l&&o===h}(e,this.attrItem,t)))),Promise.all(qe(this.target,this.$el).map((i=>{const n=()=>{(function(t,e,i){const n=function(t){let{filter:e}=t,i=""
return L(e,(t=>i+=t||"")),i}(t)
i.forEach((t=>qt(t,"display",n&&!ct(t,n)?"none":"")))
const[s,o]=t.sort
if(s){const t=function(t,e,i){return[...t].sort(((t,n)=>tt(t,e).localeCompare(tt(n,e),void 0,{numeric:!0})*("asc"===i||-1)))}(i,s,o)
B(t,i)||Pe(e,t)}})(t,i,ft(i)),this.$update(this.$el)}
return e?this.animate(n,i):n()}))).then((()=>Pt(this.$el,"afterFilter",[this])))},updateState(){ni.write((()=>this.setState(this.getState(),!1)))}}}
function Ls(t,e){return wi(tt(t,e),["filter"])}function js(t,e,i){const n=Ls(t,e),{filter:s,group:o,sort:r,order:a="asc"}=n
return(s||A(r))&&(o?s?(delete i.filter[""],i.filter[o]=s):(delete i.filter[o],(C(i.filter)||""in i.filter)&&(i.filter={"":s||""})):i.filter={"":s||""}),A(r)||(i.sort=[r,a]),i}var Ws={slide:{show:t=>[{transform:Vs(-100*t)},{transform:Vs()}],percent:t=>Rs(t),translate:(t,e)=>[{transform:Vs(-100*e*t)},{transform:Vs(100*e*(1-t))}]}}
function Rs(t){return Math.abs(qt(t,"transform").split(",")[4]/t.offsetWidth)||0}function Vs(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),"translate3d("+(t+=t?e:"")+", 0, 0)"}function qs(t){return"scale3d("+t+", "+t+", 1)"}var Us={...Ws,fade:{show:()=>[{opacity:0},{opacity:1}],percent:t=>1-qt(t,"opacity"),translate:t=>[{opacity:1-t},{opacity:t}]},scale:{show:()=>[{opacity:0,transform:qs(.8)},{opacity:1,transform:qs(1)}],percent:t=>1-qt(t,"opacity"),translate:t=>[{opacity:1-t,transform:qs(1-.2*t)},{opacity:t,transform:qs(.8+.2*t)}]}}
function Gs(t,e,i){Pt(t,Ot(e,!1,!1,i))}var Ys={props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected(){this.autoplay&&this.startAutoplay()},disconnected(){this.stopAutoplay()},update(){J(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:()=>document,filter(){return this.autoplay},handler(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay(){this.stopAutoplay(),this.interval=setInterval((()=>(!this.draggable||!Ve(":focus",this.$el))&&(!this.pauseOnHover||!ct(this.$el,":hover"))&&!this.stack.length&&this.show("next")),this.autoplayInterval)},stopAutoplay(){this.interval&&clearInterval(this.interval)}}},Xs={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created(){for(const t of["start","move","end"]){const e=this[t]
this[t]=t=>{const i=jt(t).x*(Ye?-1:1)
this.prevPos=i===this.pos?this.prevPos:this.pos,this.pos=i,e(t)}}},events:[{name:Je,delegate(){return this.selSlides},handler(t){var e
!this.draggable||!Lt(t)&&!(e=t.target).children.length&&e.childNodes.length||dt(t.target,st)||t.button>0||this.length<2||this.start(t)}},{name:"dragstart",handler(t){t.preventDefault()}}],methods:{start(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,Ct(document,Ke,this.move,{passive:!1}),Ct(document,Qe+" "+ii+" input",this.end,!0),qt(this.list,"userSelect","none")},move(t){const e=this.pos-this.drag
if(0===e||this.prevPos===this.pos||!this.dragging&&Math.abs(e)<this.threshold)return
qt(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=e<0?1:-1
const{slides:i}=this
let{prevIndex:n}=this,s=Math.abs(e),o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
for(;o!==n&&s>r;)this.drag-=r*this.dir,n=o,s-=r,o=this.getIndex(n+this.dir,n),r=this._getDistance(n,o)||i[n].offsetWidth
this.percent=s/r
const a=i[n],l=i[o],h=this.index!==o,c=n===o
let u;[this.index,this.prevIndex].filter((t=>!d([o,n],t))).forEach((t=>{Pt(i[t],"itemhidden",[this]),c&&(u=!0,this.prevIndex=n)})),(this.index===n&&this.prevIndex!==n||u)&&Pt(i[this.index],"itemshown",[this]),h&&(this.prevIndex=n,this.index=o,!c&&Pt(a,"beforeitemhide",[this]),Pt(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),a,!c&&l),h&&(!c&&Pt(a,"itemhide",[this]),Pt(l,"itemshow",[this]))},end(){if(At(document,Ke,this.move,{passive:!1}),At(document,Qe+" "+ii+" input",this.end,!0),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null
else{const t=(Ye?this.dir*(Ye?1:-1):this.dir)<0==this.prevPos>this.pos
this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(this.dir>0&&!t||this.dir<0&&t?"next":"previous",!0)}qt(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},Zs={mixins:[Ys,Xs,{data:{selNav:!1},computed:{nav(t,e){let{selNav:i}=t
return Ve(i,e)},selNavItem(t){let{attrItem:e}=t
return"["+e+"],[data-"+e+"]"},navItems(t,e){return qe(this.selNavItem,e)}},update:{write(){this.nav&&this.length!==this.nav.children.length&&Ce(this.nav,this.slides.map(((t,e)=>"<li "+this.attrItem+'="'+e+'"><a href></a></li>')).join("")),this.navItems.concat(this.nav).forEach((t=>t&&(t.hidden=!this.maxIndex))),this.updateNav()},events:["resize"]},events:[{name:"click",delegate(){return this.selNavItem},handler(t){t.preventDefault(),this.show(tt(t.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav(){const t=this.getValidIndex()
for(const e of this.navItems){const i=tt(e,this.attrItem)
ne(e,this.clsActive,P(i)===t),ne(e,"uk-invisible",this.finite&&("previous"===i&&0===t||"next"===i&&t>=this.maxIndex))}}}}],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number,selSlides:String},data:()=>({easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}),connected(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected(){Qt(this.slides,this.clsActive)},computed:{duration(t,e){let{velocity:i}=t
return Js(e.offsetWidth/i)},list(t,e){let{selList:i}=t
return Ve(i,e)},maxIndex(){return this.length-1},selSlides(t){let{selList:e,selSlides:i}=t
return e+" "+(i||"> *")},slides:{get(){return qe(this.selSlides,this.$el)},watch(){this.$reset()}},length(){return this.slides.length}},methods:{show(t,e){if(void 0===e&&(e=!1),this.dragging||!this.length)return
const{stack:i}=this,n=e?0:i.length,s=()=>{i.splice(n,1),i.length&&this.show(i.shift(),!0)}
if(i[e?"unshift":"push"](t),!e&&i.length>1)return void(2===i.length&&this._transitioner.forward(Math.min(this.duration,200)))
const o=this.getIndex(this.index),r=ie(this.slides,this.clsActive)&&this.slides[o],a=this.getIndex(t,this.index),l=this.slides[a]
if(r===l)return void s()
if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(t,o),this.prevIndex=o,this.index=a,r&&!Pt(r,"beforeitemhide",[this])||!Pt(l,"beforeitemshow",[this,r]))return this.index=this.prevIndex,void s()
const h=this._show(r,l,e).then((()=>(r&&Pt(r,"itemhidden",[this]),Pt(l,"itemshown",[this]),new Promise((t=>{ni.write((()=>{i.shift(),i.length?this.show(i.shift(),!0):this._transitioner=null,t()}))})))))
return r&&Pt(r,"itemhide",[this]),Pt(l,"itemshow",[this]),h},getIndex(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.index),R(Y(t,this.slides,e,this.finite),0,this.maxIndex)},getValidIndex(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show(t,e,i){if(this._transitioner=this._getTransitioner(t,e,this.dir,{easing:i?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing,...this.transitionOptions}),!i&&!t)return this._translate(1),Promise.resolve()
const{length:n}=this.stack
return this._transitioner[n>1?"forward":"show"](n>1?Math.min(this.duration,75+75/(n-1)):this.duration,this.percent)},_getDistance(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate(t,e,i){void 0===e&&(e=this.prevIndex),void 0===i&&(i=this.index)
const n=this._getTransitioner(e!==i&&e,i)
return n.translate(t),n},_getTransitioner(t,e,i,n){return void 0===t&&(t=this.prevIndex),void 0===e&&(e=this.index),void 0===i&&(i=this.dir||1),void 0===n&&(n=this.transitionOptions),new this.Transitioner(I(t)?this.slides[t]:t,I(e)?this.slides[e]:e,i*(Ye?-1:1),n)}}}
function Js(t){return.5*t+300}var Ks={mixins:[Zs],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:Ws,Transitioner:function(t,e,i,n){let{animation:s,easing:o}=n
const{percent:r,translate:a,show:l=V}=s,h=l(i),c=new Z
return{dir:i,show(n,s,r){void 0===s&&(s=0)
const a=r?"linear":o
return n-=Math.round(n*R(s,-1,1)),this.translate(s),Gs(e,"itemin",{percent:s,duration:n,timing:a,dir:i}),Gs(t,"itemout",{percent:1-s,duration:n,timing:a,dir:i}),Promise.all([ae.start(e,h[1],n,a),ae.start(t,h[0],n,a)]).then((()=>{this.reset(),c.resolve()}),V),c.promise},cancel(){ae.cancel([e,t])},reset(){for(const i in h[0])qt([e,t],i,"")},forward(i,n){return void 0===n&&(n=this.percent()),ae.cancel([e,t]),this.show(i,n,!0)},translate(n){this.reset()
const s=a(n,i)
qt(e,s[1]),qt(t,s[0]),Gs(e,"itemtranslatein",{percent:n,dir:i}),Gs(t,"itemtranslateout",{percent:1-n,dir:i})},percent:()=>r(t||e,e,i),getDistance:()=>null==t?void 0:t.offsetWidth}}},computed:{animation(t){let{animation:e,Animations:i}=t
return{...i[e]||i.slide,name:e}},transitionOptions(){return{animation:this.animation}}},events:{beforeitemshow(t){let{target:e}=t
Kt(e,this.clsActive)},itemshown(t){let{target:e}=t
Kt(e,this.clsActivated)},itemhidden(t){let{target:e}=t
Qt(e,this.clsActive,this.clsActivated)}}},Qs={mixins:[dn,ns,sn,Ks],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:()=>({preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:Us,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}),created(){const t=Ve(this.template),e=Ve(this.selList,t)
this.items.forEach((()=>Pe(e,"<li>"))),this.$mount(Pe(this.container,t))},computed:{caption(t,e){let{selCaption:i}=t
return Ve(i,e)}},events:[{name:Ke+" "+Je+" keydown",handler:"showControls"},{name:"click",self:!0,delegate(){return this.selSlides},handler(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler(){this.showControls()}},{name:"hide",self:!0,handler(){this.hideControls(),Qt(this.slides,this.clsActive),ae.stop(this.slides)}},{name:"hidden",self:!0,handler(){this.$destroy(!0)}},{name:"keyup",el:()=>document,handler(t){if(this.isToggled(this.$el)&&this.draggable)switch(t.keyCode){case 37:this.show("previous")
break
case 39:this.show("next")}}},{name:"beforeitemshow",handler(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=Us.scale,Qt(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler(){Ce(this.caption,this.getItem().caption||"")
for(let t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler(){this.draggable=this.$props.draggable}},{name:"itemload",async handler(t,e){const{source:i,type:n,alt:s="",poster:o,attrs:r={}}=e
if(this.setItem(e,"<span uk-spinner></span>"),!i)return
let a
const l={frameborder:"0",allow:"autoplay",allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":""+this.videoAutoplay}
if("image"===n||i.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i))try{const{width:t,height:n}=await Rt(i,r.srcset,r.size)
this.setItem(e,to("img",{src:i,width:t,height:n,alt:s,...r}))}catch(t){this.setError(e)}else if("video"===n||i.match(/\.(mp4|webm|ogv)($|\?)/i)){const t=to("video",{src:i,poster:o,controls:"",playsinline:"","uk-video":""+this.videoAutoplay,...r})
Ct(t,"loadedmetadata",(()=>{J(t,{width:t.videoWidth,height:t.videoHeight}),this.setItem(e,t)})),Ct(t,"error",(()=>this.setError(e)))}else if("iframe"===n||i.match(/\.(html|php)($|\?)/i))this.setItem(e,to("iframe",{src:i,frameborder:"0",allowfullscreen:"",class:"uk-lightbox-iframe",...r}))
else if(a=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))this.setItem(e,to("iframe",{src:"https://www.youtube"+(a[1]||"")+".com/embed/"+a[2]+(a[3]?"?"+a[3]:""),width:1920,height:1080,...l,...r}))
else if(a=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))try{const{height:t,width:n}=await(await fetch("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(i),{credentials:"omit"})).json()
this.setItem(e,to("iframe",{src:"https://player.vimeo.com/video/"+a[1]+(a[2]?"?"+a[2]:""),width:n,height:t,...l,...r}))}catch(t){this.setError(e)}}}],methods:{loadItem(t){void 0===t&&(t=this.index)
const e=this.getItem(t)
this.getSlide(e).childElementCount||Pt(this.$el,"itemload",[e])},getItem(t){return void 0===t&&(t=this.index),this.items[Y(t,this.slides)]},setItem(t,e){Pt(this.$el,"itemloaded",[this,Ce(this.getSlide(t),e)])},getSlide(t){return this.slides[this.items.indexOf(t)]},setError(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),Kt(this.$el,"uk-active","uk-transition-active")},hideControls(){Qt(this.$el,"uk-active","uk-transition-active")}}}
function to(t,e){const i=je("<"+t+">")
return J(i,e),i}var eo={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",Qs),m(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get(t,e){let{toggle:i}=t
return qe(i,e)},watch(){this.hide()}}},disconnected(){this.hide()},events:[{name:"click",delegate(){return this.toggle+":not(.uk-disabled)"},handler(t){t.preventDefault(),this.show(t.current)}}],methods:{show(t){const e=W(this.toggles.map(io),"source")
if(k(t)){const{source:i}=io(t)
t=u(e,(t=>{let{source:e}=t
return i===e}))}return this.panel=this.panel||this.$create("lightboxPanel",{...this.$props,items:e}),Ct(this.panel.$el,"hidden",(()=>this.panel=!1)),this.panel.show(t)},hide(){return this.panel&&this.panel.hide()}}}
function io(t){const e={}
for(const i of["href","caption","type","poster","alt","attrs"])e["href"===i?"source":i]=tt(t,i)
return e.attrs=wi(e.attrs),e}var no={mixins:[dn],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(t){t.notification.closeAll=function(e,i){Re(document.body,(n=>{const s=t.getComponent(n,"notification")
!s||e&&e!==s.group||s.close(i)}))}},computed:{marginProp(t){let{pos:e}=t
return"margin"+(h(e,"top")?"Top":"Bottom")},startProps(){return{opacity:0,[this.marginProp]:-this.$el.offsetHeight}}},created(){const t=Ve("."+this.clsContainer+"-"+this.pos,this.container)||Pe(this.container,'<div class="'+this.clsContainer+" "+this.clsContainer+"-"+this.pos+'" style="display: block"></div>')
this.$mount(Pe(t,'<div class="'+this.clsMsg+(this.status?" "+this.clsMsg+"-"+this.status:"")+'"> <a href class="'+this.clsClose+'" data-uk-close></a> <div>'+this.message+"</div> </div>"))},async connected(){const t=O(qt(this.$el,this.marginProp))
await ae.start(qt(this.$el,this.startProps),{opacity:1,[this.marginProp]:t}),this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},events:{click(t){dt(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()},[ti](){this.timer&&clearTimeout(this.timer)},[ei](){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))}},methods:{async close(t){this.timer&&clearTimeout(this.timer),t||await ae.start(this.$el,this.startProps),(t=>{const e=lt(t)
Pt(t,"close",[this]),Me(t),null!=e&&e.hasChildNodes()||Me(e)})(this.$el)}}}
const so={x:ao,y:ao,rotate:ao,scale:ao,color:lo,backgroundColor:lo,borderColor:lo,blur:ho,hue:ho,fopacity:ho,grayscale:ho,invert:ho,saturate:ho,sepia:ho,opacity:function(t,e,i){return 1===i.length&&i.unshift(yo(e,t,"")),i=mo(i),(e,n)=>{e[t]=vo(i,n)}},stroke:function(t,e,i){1===i.length&&i.unshift(0)
const n=bo(i),s=On(e)
return i=mo(i.reverse(),(t=>(t=O(t),"%"===n?t*s/100:t))),i.some((t=>{let[e]=t
return e}))?(qt(e,"strokeDasharray",s),(t,e)=>{t.strokeDashoffset=vo(i,e)}):V},bgx:co,bgy:co},{keys:oo}=Object
var ro={mixins:[ts],props:xo(oo(so),"list"),data:xo(oo(so),void 0),computed:{props:(t,e)=>oo(so).reduce(((i,n)=>(A(t[n])||(i[n]=so[n](n,e,t[n].slice())),i)),{})},events:{load(){this.$emit()}},methods:{reset(){L(this.getCss(0),((t,e)=>qt(this.$el,e,"")))},getCss(t){const e={transform:"",filter:""}
for(const i in this.props)this.props[i](e,t)
return e}}}
function ao(t,e,i){const n=bo(i)||{x:"px",y:"px",rotate:"deg"}[t]||""
let s
return"x"!==t&&"y"!==t||(t="translate"+a(t),s=t=>O(O(t).toFixed("px"===n?0:6))),1===i.length&&i.unshift("scale"===t?1:0),i=mo(i,s),(e,s)=>{e.transform+=" "+t+"("+vo(i,s)+n+")"}}function lo(t,e,i){return 1===i.length&&i.unshift(yo(e,t,"")),i=mo(i,(t=>function(t,e){return yo(t,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(O)}(e,t))),(e,n)=>{const[s,o,r]=go(i,n),a=s.map(((t,e)=>(t+=r*(o[e]-t),3===e?O(t):parseInt(t,10)))).join(",")
e[t]="rgba("+a+")"}}function ho(t,e,i){1===i.length&&i.unshift(0)
const n=bo(i)||{blur:"px",hue:"deg"}[t]||"%"
return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,i=mo(i),(e,s)=>{const o=vo(i,s)
e.filter+=" "+t+"("+(o+n)+")"}}function co(t,e,i){1===i.length&&i.unshift(0)
const n="y"===(t=t.substr(-1))?"height":"width"
i=mo(i,(t=>ke(t,n,e)))
const s=yo(e,"background-position-"+t,"")
return"cover"===yo(e,"backgroundSize","")?function(t,e,i,n,s){const o=function(t){const e=qt(t,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1")
if(po[e])return po[e]
const i=new Image
return e&&(i.src=e,!i.naturalWidth)?(i.onload=()=>{po[e]=fo(i),Pt(t,"load")},fo(i)):po[e]=fo(i)}(e)
if(!o.width)return V
const r=i.map((t=>{let[e]=t
return e})),a=Math.min(...r),l=Math.max(...r),h=r.indexOf(a)<r.indexOf(l),c=l-a
let d=(h?-c:0)-(h?a:l)
const u={width:e.offsetWidth,height:e.offsetHeight},p=G.cover(o,u),f=p[s]-u[s]
if(f<c)u[s]=p[s]+c-f
else if(f>c){const t=u[s]/ke(n,s,e,!0)
t&&(d-=(f-c)/t)}const m=G.cover(o,u),g=uo(t,i,d+"px")
return(t,e)=>{g(t,e),t.backgroundSize=m.width+"px "+m.height+"px",t.backgroundRepeat="no-repeat"}}(t,e,i,s,n):uo(t,i,s)}function uo(t,e,i){return function(n,s){n["background-position-"+t]="calc("+i+" + "+vo(e,s)+"px)"}}const po={}
function fo(t){return{width:t.naturalWidth,height:t.naturalHeight}}function mo(t,e){void 0===e&&(e=O)
const i=[],{length:n}=t
let s=0
for(let o=0;o<n;o++){let[r,a]=T(t[o])?t[o].trim().split(" "):[t[o]]
if(r=e(r),a=a?O(a)/100:null,0===o?null===a?a=0:a&&i.push([r,0]):o===n-1&&(null===a?a=1:1!==a&&(i.push([r,a]),a=1)),i.push([r,a]),null===a)s++
else if(s){const t=i[o-s-1][1],e=(a-t)/(s+1)
for(let n=s;n>0;n--)i[o-n][1]=t+e*(s-n+1)
s=0}}return i}function go(t,e){const i=u(t.slice(1),(t=>{let[,i]=t
return e<=i}))+1
return[t[i-1][0],t[i][0],(e-t[i-1][1])/(t[i][1]-t[i-1][1])]}function vo(t,e){const[i,n,s]=go(t,e)
return I(i)?i+Math.abs(i-n)*s*(i<n?1:-1):+n}const wo=/^-?\d+([^\s]*)/
function bo(t,e){for(const i of t){const t=null==i.match?void 0:i.match(wo)
if(t)return t[1]}return e}function yo(t,e,i){const n=t.style[e],s=qt(qt(t,e,i),e)
return t.style[e]=n,s}function xo(t,e){return t.reduce(((t,i)=>(t[i]=e,t)),{})}var ko={mixins:[ro],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target(t,e){let{target:i}=t
return $o(i&&gt(i,e)||e)},start(t){let{start:e}=t
return ke(e,"height",this.target,!0)},end(t){let{end:e,viewport:i}=t
return ke(e||(i=100*(1-i))&&i+"vh+"+i+"%","height",this.target,!0)}},update:{read(t,e){let{percent:i}=t
if(e.has("scroll")||(i=!1),!this.matchMedia)return
const n=i
return i=function(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}(Di(this.target,this.start,this.end),this.easing),{percent:i,style:n!==i&&this.getCss(i)}},write(t){let{style:e}=t
this.matchMedia?e&&qt(this.$el,e):this.reset()},events:["scroll","resize"]}}
function $o(t){return t?"offsetTop"in t?t:$o(lt(t)):document.documentElement}var So={update:{write(){if(this.stack.length||this.dragging)return
const t=this.getValidIndex(this.index)
~this.prevIndex&&this.index===t||this.show(t)},events:["resize"]}},To={mixins:[nn],connected(){this.lazyload(this.slides,this.getAdjacentSlides)}}
function Io(t,e,i){const n=Ao(t,e)
return i?n-function(t,e){return pe(e).width/2-pe(t).width/2}(t,e):Math.min(n,Eo(e))}function Eo(t){return Math.max(0,Co(t)-pe(t).width)}function Co(t){return ft(t).reduce(((t,e)=>pe(e).width+t),0)}function Ao(t,e){return t&&(me(t).left+(Ye?pe(t).width-pe(e).width:0))*(Ye?-1:1)||0}function _o(t,e){e-=1
const i=pe(t).width,n=e+i+2
return ft(t).filter((s=>{const o=Ao(s,t),r=o+Math.min(pe(s).width,i)
return o>=e&&r<=n}))}function Po(t,e,i){Pt(t,Ot(e,!1,!1,i))}var Oo={mixins:[en,Zs,So,To],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(t,e,i,n){let{center:s,easing:o,list:r}=n
const a=new Z,l=t?Io(t,r,s):Io(e,r,s)+pe(e).width*i,h=e?Io(e,r,s):l+pe(t).width*i*(Ye?-1:1)
return{dir:i,show(e,n,s){void 0===n&&(n=0)
const l=s?"linear":o
return e-=Math.round(e*R(n,-1,1)),this.translate(n),n=t?n:R(n,0,1),Po(this.getItemIn(),"itemin",{percent:n,duration:e,timing:l,dir:i}),t&&Po(this.getItemIn(!0),"itemout",{percent:1-n,duration:e,timing:l,dir:i}),ae.start(r,{transform:Vs(-h*(Ye?-1:1),"px")},e,l).then(a.resolve,V),a.promise},cancel(){ae.cancel(r)},reset(){qt(r,"transform","")},forward(t,e){return void 0===e&&(e=this.percent()),ae.cancel(r),this.show(t,e,!0)},translate(n){const s=this.getDistance()*i*(Ye?-1:1)
qt(r,"transform",Vs(R(s-s*n-h,-Co(r),pe(r).width)*(Ye?-1:1),"px"))
const o=this.getActives(),a=this.getItemIn(),l=this.getItemIn(!0)
n=t?R(n,-1,1):0
for(const h of ft(r)){const s=d(o,h),c=h===a,u=h===l
Po(h,"itemtranslate"+(c||!u&&(s||i*(Ye?-1:1)==-1^Ao(h,r)>Ao(t||e))?"in":"out"),{dir:i,percent:u?1-n:c?n:s?1:0})}},percent:()=>Math.abs((qt(r,"transform").split(",")[4]*(Ye?-1:1)+l)/(h-l)),getDistance:()=>Math.abs(h-l),getItemIn(i){void 0===i&&(i=!1)
let n=this.getActives(),o=_o(r,Io(e||t,r,s))
if(i){const t=n
n=o,o=t}return o[u(o,(t=>!d(n,t)))]},getActives:()=>_o(r,Io(t||e,r,s))}}},computed:{avgWidth(){return Co(this.list)/this.length},finite(t){let{finite:e}=t
return e||Math.ceil(Co(this.list))<Math.floor(pe(this.list).width+(i=this.list,Math.max(0,...ft(i).map((t=>pe(t).width))))+this.center)
var i},maxIndex(){if(!this.finite||this.center&&!this.sets)return this.length-1
if(this.center)return F(this.sets)
let t=0
const e=Eo(this.list),i=u(this.slides,(i=>{if(t>=e)return!0
t+=pe(i).width}))
return~i?i:this.length-1},sets(t){let{sets:e}=t
if(!e)return
let i=0
const n=[],s=pe(this.list).width
for(let o in this.slides){const t=pe(this.slides[o]).width
i+t>s&&(i=0),this.center?i<s/2&&i+t+pe(this.slides[+o+1]).width/2>s/2&&(n.push(+o),i=s/2-t/2):0===i&&n.push(Math.min(+o,this.maxIndex)),i+=t}return n.length?n:void 0},transitionOptions(){return{center:this.center,list:this.list}}},connected(){ne(this.$el,this.clsContainer,!Ve("."+this.clsContainer,this.$el))},update:{write(){for(const t of this.navItems){const e=P(tt(t,this.attrItem))
!1!==e&&(t.hidden=!this.maxIndex||e>this.maxIndex||this.sets&&!d(this.sets,e))}!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1)),this.updateActiveClasses()},events:["resize"]},events:{beforeitemshow(t){!this.dragging&&this.sets&&this.stack.length<2&&!d(this.sets,this.index)&&(this.index=this.getValidIndex())
const e=Math.abs(this.index-this.prevIndex+(this.dir>0&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0))
if(!this.dragging&&e>1){for(let t=0;t<e;t++)this.stack.splice(1,0,this.dir>0?"next":"previous")
return void t.preventDefault()}const i=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex
this.duration=Js(this.avgWidth/this.velocity)*(pe(this.slides[i]).width/this.avgWidth),this.reorder()},itemshow(){~this.prevIndex&&Kt(this._getTransitioner().getItemIn(),this.clsActive)},itemshown(){this.updateActiveClasses()}},methods:{reorder(){if(this.finite)return void qt(this.slides,"order","")
const t=this.dir>0&&this.slides[this.prevIndex]?this.prevIndex:this.index
if(this.slides.forEach(((e,i)=>qt(e,"order",this.dir>0&&i<t?1:this.dir<0&&i>=this.index?-1:""))),!this.center)return
const e=this.slides[t]
let i=pe(this.list).width/2-pe(e).width/2,n=0
for(;i>0;){const e=this.getIndex(--n+t,t),s=this.slides[e]
qt(s,"order",e>t?-2:-1),i-=pe(s).width}},updateActiveClasses(){const t=this._getTransitioner(this.index).getActives(),e=[this.clsActive,(!this.sets||d(this.sets,O(this.index)))&&this.clsActivated||""]
for(const i of this.slides)ne(i,e,d(t,i))},getValidIndex(t,e){if(void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),t=this.getIndex(t,e),!this.sets)return t
let i
do{if(d(this.sets,t))return t
i=t,t=this.getIndex(t+this.dir,e)}while(t!==i)
return t},getAdjacentSlides(){const{width:t}=pe(this.list),e=-t,i=2*t,n=pe(this.slides[this.index]).width,s=this.center?t/2-n/2:0,o=new Set
for(const r of[-1,1]){let t=s+(r>0?n:0),a=0
do{const e=this.slides[this.getIndex(this.index+r+a++*r)]
t+=pe(e).width*r,o.add(e)}while(this.slides.length>a&&t>e&&t<i)}return Array.from(o)}}},Do={mixins:[ro],data:{selItem:"!li"},computed:{item(t,e){let{selItem:i}=t
return gt(i,e)}},events:[{name:"itemin itemout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,duration:n,timing:s,dir:o}}=t
ni.read((()=>{const t=this.getCss(Mo(e,o,i)),r=this.getCss(No(e)?.5:o>0?1:0)
ni.write((()=>{qt(this.$el,t),ae.start(this.$el,r,n,s).catch(V)}))}))}},{name:"transitioncanceled transitionend",self:!0,el(){return this.item},handler(){ae.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el(){return this.item},handler(t){let{type:e,detail:{percent:i,dir:n}}=t
ni.read((()=>{const t=this.getCss(Mo(e,n,i))
ni.write((()=>qt(this.$el,t)))}))}}]}
function No(t){return c(t,"in")}function Mo(t,e,i){return i/=2,No(t)^e<0?i:1-i}var zo={...Ws,fade:{show:()=>[{opacity:0,zIndex:0},{zIndex:-1}],percent:t=>1-qt(t,"opacity"),translate:t=>[{opacity:1-t,zIndex:0},{zIndex:-1}]},scale:{show:()=>[{opacity:0,transform:qs(1.5),zIndex:0},{zIndex:-1}],percent:t=>1-qt(t,"opacity"),translate:t=>[{opacity:1-t,transform:qs(1+.5*t),zIndex:0},{zIndex:-1}]},pull:{show:t=>t<0?[{transform:Vs(30),zIndex:-1},{transform:Vs(),zIndex:0}]:[{transform:Vs(-100),zIndex:0},{transform:Vs(),zIndex:-1}],percent:(t,e,i)=>i<0?1-Rs(e):Rs(t),translate:(t,e)=>e<0?[{transform:Vs(30*t),zIndex:-1},{transform:Vs(-100*(1-t)),zIndex:0}]:[{transform:Vs(100*-t),zIndex:0},{transform:Vs(30*(1-t)),zIndex:-1}]},push:{show:t=>t<0?[{transform:Vs(100),zIndex:0},{transform:Vs(),zIndex:-1}]:[{transform:Vs(-30),zIndex:-1},{transform:Vs(),zIndex:0}],percent:(t,e,i)=>i>0?1-Rs(e):Rs(t),translate:(t,e)=>e<0?[{transform:Vs(100*t),zIndex:0},{transform:Vs(-30*(1-t)),zIndex:-1}]:[{transform:Vs(-30*t),zIndex:-1},{transform:Vs(100*(1-t)),zIndex:0}]}},Bo={mixins:[en,Ks,So,To],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:zo},update:{read(){if(!this.list)return!1
let[t,e]=this.ratio.split(":").map(Number)
return e=e*this.list.offsetWidth/t||0,this.minHeight&&(e=Math.max(this.minHeight,e)),this.maxHeight&&(e=Math.min(this.maxHeight,e)),{height:e-ye(this.list,"height","content-box")}},write(t){let{height:e}=t
e>0&&qt(this.list,"minHeight",e)},events:["resize"]},methods:{getAdjacentSlides(){return[1,-1].map((t=>this.slides[this.getIndex(this.index+t)]))}}},Ho={mixins:[en,Hs],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created(){for(const t of["init","start","move","end"]){const e=this[t]
this[t]=t=>{m(this.pos,jt(t)),e(t)}}},events:{name:Je,passive:!1,handler:"init"},computed:{target(){return(this.$el.tBodies||[this.$el])[0]},items(){return ft(this.target)},isEmpty:{get(){return C(this.items)},watch(t){ne(this.target,this.clsEmpty,t)},immediate:!0},handles:{get(t,e){let{handle:i}=t
return i?qe(i,e):this.items},watch(t,e){qt(e,{touchAction:"",userSelect:""}),qt(t,{touchAction:Xe?"none":"",userSelect:"none"})},immediate:!0}},update:{write(t){if(!this.drag||!lt(this.placeholder))return
const{pos:{x:e,y:i},origin:{offsetTop:n,offsetLeft:s},placeholder:o}=this
qt(this.drag,{top:i-n,left:e-s})
const r=this.getSortable(document.elementFromPoint(e,i))
if(!r)return
const{items:a}=r
if(a.some(ae.inProgress))return
const l=function(t,e){return t[u(t,(t=>U(e,t.getBoundingClientRect())))]}(a,{x:e,y:i})
if(a.length&&(!l||l===o))return
const h=this.getSortable(o),c=function(t,e,i,n,s,o){if(!ft(t).length)return
const r=e.getBoundingClientRect()
if(!o)return function(t,e){const i=1===ft(t).length
i&&Pe(t,e)
const n=ft(t),s=n.some(((t,e)=>{const i=t.getBoundingClientRect()
return n.slice(e+1).some((t=>{const e=t.getBoundingClientRect()
return!Lo([i.left,i.right],[e.left,e.right])}))}))
return i&&Me(e),s}(t,i)||s<r.top+r.height/2?e:e.nextElementSibling
const a=i.getBoundingClientRect(),l=Lo([r.top,r.bottom],[a.top,a.bottom]),h=l?n:s,c=l?"width":"height",d=l?"left":"top",u=l?"right":"bottom",p=a[c]<r[c]?r[c]-a[c]:0
return a[d]<r[d]?!(p&&h<r[d]+p)&&e.nextElementSibling:!(p&&h>r[u]-p)&&e}(r.target,l,o,e,i,r===h&&t.moved!==l)
!1!==c&&(c&&o===c||(r!==h?(h.remove(o),t.moved=l):delete t.moved,r.insert(o,c),this.touched.add(r)))},events:["move"]},methods:{init(t){const{target:e,button:i,defaultPrevented:n}=t,[s]=this.items.filter((t=>ut(e,t)))
!s||n||i>0||ot(e)||ut(e,"."+this.clsNoDrag)||this.handle&&!ut(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=s,this.origin={target:e,index:mt(s),...this.pos},Ct(document,Ke,this.move),Ct(document,Qe,this.end),this.threshold||this.start(t))},start(t){this.drag=function(t,e){const i=Pe(t,e.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g,"$1div$2"))
return qt(i,"margin","0","important"),qt(i,{boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight,padding:qt(e,"padding")}),ve(i.firstElementChild,ve(e.firstElementChild)),i}(this.$container,this.placeholder)
const{left:e,top:i}=this.placeholder.getBoundingClientRect()
m(this.origin,{offsetLeft:this.pos.x-e,offsetTop:this.pos.y-i}),Kt(this.drag,this.clsDrag,this.clsCustom),Kt(this.placeholder,this.clsPlaceholder),Kt(this.items,this.clsItem),Kt(document.documentElement,this.clsDragState),Pt(this.$el,"start",[this,this.placeholder]),function(t){let e=Date.now()
Fo=setInterval((()=>{let{x:i,y:n}=t
n+=Pi(window)
const s=.3*(Date.now()-e)
e=Date.now(),Ni(document.elementFromPoint(i,t.y),/auto|scroll/).reverse().some((t=>{let{scrollTop:e,scrollHeight:i}=t
const{top:o,bottom:r,height:a}=fe(Mi(t))
if(o<n&&o+35>n)e-=s
else{if(!(r>n&&r-35<n))return
e+=s}if(e>0&&e<i-a)return Pi(t,e),!0}))}),15)}(this.pos),this.move(t)},move(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end(){if(At(document,Ke,this.move),At(document,Qe,this.end),!this.drag)return
clearInterval(Fo)
const t=this.getSortable(this.placeholder)
this===t?this.origin.index!==mt(this.placeholder)&&Pt(this.$el,"moved",[this,this.placeholder]):(Pt(t.$el,"added",[t,this.placeholder]),Pt(this.$el,"removed",[this,this.placeholder])),Pt(this.$el,"stop",[this,this.placeholder]),Me(this.drag),this.drag=null
for(const{clsPlaceholder:e,clsItem:i}of this.touched)for(const t of this.touched)Qt(t.items,e,i)
this.touched=null,Qt(document.documentElement,this.clsDragState)},insert(t,e){Kt(this.items,this.clsItem),this.animate((()=>e?Oe(e,t):Pe(this.target,t)))},remove(t){ut(t,this.target)&&this.animate((()=>Me(t)))},getSortable(t){do{const e=this.$getComponent(t,"sortable")
if(e&&(e===this||!1!==this.group&&e.group===this.group))return e}while(t=lt(t))}}}
let Fo
function Lo(t,e){return t[1]>e[0]&&e[1]>t[0]}var jo={mixins:[dn,sn,un],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active",clsPos:"uk-tooltip"},beforeConnect(){var t
this._hasTitle=K(this.$el,"title"),J(this.$el,"title",""),this.updateAria(!1),at(t=this.$el)||J(t,"tabindex","0")},disconnected(){this.hide(),J(this.$el,"title",this._hasTitle?this.title:null)},methods:{show(){!this.isToggled(this.tooltip||null)&&this.title&&(this._unbind=_t(document,"show keydown "+Je,this.hide,!1,(t=>t.type===Je&&!ut(t.target,this.$el)||"keydown"===t.type&&27===t.keyCode||"show"===t.type&&t.detail[0]!==this&&t.detail[0].$name===this.$name)),clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},async hide(){ct(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&(await this.toggleElement(this.tooltip,!1,!1),Me(this.tooltip),this.tooltip=null,this._unbind()))},_show(){this.tooltip=Pe(this.container,'<div class="'+this.clsPos+'"> <div class="'+this.clsPos+'-inner">'+this.title+"</div> </div>"),Ct(this.tooltip,"toggled",((t,e)=>{this.updateAria(e),e&&(this.positionAt(this.tooltip,this.$el),this.origin="y"===this.getAxis()?xe(this.dir)+"-"+this.align:this.align+"-"+xe(this.dir))})),this.toggleElement(this.tooltip,!0)},updateAria(t){J(this.$el,"aria-expanded",t)}},events:{focus:"show",blur:"hide",[ti+" "+ei](t){Lt(t)||this[t.type===ti?"show":"hide"]()},[Je](t){Lt(t)&&this.show()}}},Wo={props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,msgInvalidMime:String,msgInvalidName:String,msgInvalidSize:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,msgInvalidMime:"Invalid File Type: %s",msgInvalidName:"Invalid File Name: %s",msgInvalidSize:"Invalid File Size: %s Kilobytes Max",multiple:!1,name:"files[]",params:{},type:"",url:"",abort:V,beforeAll:V,beforeSend:V,complete:V,completeAll:V,error:V,fail:V,load:V,loadEnd:V,loadStart:V,progress:V},events:{change(t){ct(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop(t){Vo(t)
const e=t.dataTransfer
null!=e&&e.files&&(Qt(this.$el,this.clsDragover),this.upload(e.files))},dragenter(t){Vo(t)},dragover(t){Vo(t),Kt(this.$el,this.clsDragover)},dragleave(t){Vo(t),Qt(this.$el,this.clsDragover)}},methods:{async upload(t){if(!t.length)return
Pt(this.$el,"upload",[t])
for(const n of t){if(this.maxSize&&1e3*this.maxSize<n.size)return void this.fail(this.msgInvalidSize.replace("%s",this.maxSize))
if(this.allow&&!Ro(this.allow,n.name))return void this.fail(this.msgInvalidName.replace("%s",this.allow))
if(this.mime&&!Ro(this.mime,n.type))return void this.fail(this.msgInvalidMime.replace("%s",this.mime))}this.multiple||(t=t.slice(0,1)),this.beforeAll(this,t)
const e=function(t,e){t=f(t)
const i=[]
for(let n=0;n<t.length;n+=e)i.push(t.slice(n,n+e))
return i}(t,this.concurrent),i=async t=>{const n=new FormData
t.forEach((t=>n.append(this.name,t)))
for(const e in this.params)n.append(e,this.params[e])
try{const t=await Wt(this.url,{data:n,method:this.method,responseType:this.type,beforeSend:t=>{const{xhr:e}=t
e.upload&&Ct(e.upload,"progress",this.progress)
for(const i of["loadStart","load","loadEnd","abort"])Ct(e,i.toLowerCase(),this[i])
return this.beforeSend(t)}})
this.complete(t),e.length?await i(e.shift()):this.completeAll(t)}catch(t){this.error(t)}}
await i(e.shift())}}}
function Ro(t,e){return e.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$","i"))}function Vo(t){t.preventDefault(),t.stopPropagation()}return L(Object.freeze({__proto__:null,Countdown:Es,Filter:Fs,Lightbox:eo,LightboxPanel:Qs,Notification:no,Parallax:ko,Slider:Oo,SliderParallax:Do,Slideshow:Bo,SlideshowParallax:Do,Sortable:Ho,Tooltip:jo,Upload:Wo}),((t,e)=>tn.component(e,t))),tn}()},339:(t,e,i)=>{"use strict"
i.r(e),i.d(e,{setup:()=>h})
var n=Object.defineProperty,s=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,e,i)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,l=(t,e)=>{for(var i in e||(e={}))s.call(e,i)&&a(t,i,e[i])
if(o)for(var i of o(e))r.call(e,i)&&a(t,i,e[i])
return t}
function h(t){function e(t){return new RegExp(`\\b(?:${t.split(" ").join("|")})\\b`)}let i="[-+*/_~!@$%^=<>{}\\w]+",n=/[A-Za-z0-9]+/,s=u.either(n,/[a-zA-Z0-9]+\.[a-zA-Z0-9-]+/,u.concat(n,/::/,/-?/,n)),o=/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,r=new RegExp(u.either(/"[^{"]+/,/"/,/'[^{']+/,/'/,/"[^"]+"/,/'[^']+'/)),a={"parameter argument property":{pattern:/@[\w\d-_]+/}},h={punctuation:[{pattern:/[!#%&:()*+,.\/;<=>\[\\\]^`{|}~]+/},{pattern:/^=/,alias:"attr-equals"},{pattern:/\/?>/}]},c={"function-name":[{pattern:new RegExp("(\\()"+i),lookbehind:!0},{pattern:new RegExp("(\\{\\{\\{?)"+i),lookbehind:!0}]},d={builtin:e(["action on","outlet yield","log debugger","let each each-in if else unless"].join(" ")),keyword:e(["has-block concat fn component helper modifier get hash query-params","true false undefined null"].join(" ")),operator:e(["eq neq","gt gte le lte","and or not","as"].join(" "))},p={function:{greedy:!0,pattern:/\([\S-_\d]+\b/,inside:l(l(l({},h),c),d)}},f={"this-expression":{pattern:/this\.[\S]+/,lookbehind:!0,greedy:!0,inside:l(l({},h),{namespace:/this/,property:/[\S]+/})}},m={"member-expression":{pattern:/[\S]+\.[\S]+/,lookbehind:!0,greedy:!0,inside:l(l({},h),{constant:/[\S]+/,property:/[\S]+/})}},g=l(l(l(l(l(l(l(l(l({},p),h),f),m),a),{number:o,boolean:/\b(?:true|false)\b/}),d),c),{"attr-name":/^[^=]+=/,string:r,variable:/\b[A-Za-z0-9_-]+\b/}),v={mustache:{pattern:/\{\{\{?\/?[^}]+?\}?\}\}/,lookbehind:!0,alias:"punctuation",greedy:!0,inside:l(l({},{"sub-expression":{alias:"punctuation",pattern:/\([^)]+\)/,lookbehind:!0,greedy:!0,inside:g}}),g)}},w={string:{pattern:r,inside:v}}
g.string=w.string
let b=t.languages.markup
if(!b)throw new Error("prism-markup is required")
t.languages.glimmer=l(l({comment:[{pattern:/\{\{!--[\s\S]*?--\}\}/},{pattern:/\{\{![\s\S]*?\}\}/}],number:o},v),{tag:l(l({},b.tag),{inside:l(l(l(l(l({number:o},a),v),{tag:l(l({},b.tag.inside.tag),{inside:l(l({},h),{"class-name":new RegExp(s)})}),"attr-name":{pattern:/\b[^=\b]+=/,inside:l(l(l(l({},w),h),a),v)}}),h),w)})})}function c(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return e.map((t=>d(t))).join("")}function d(t){return t?"string"==typeof t?t:t.source:null}var u={lookahead:function(t){return c("(?=",t,")")},either:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i]
return"("+e.map((t=>d(t))).join("|")+")"},optional:function(t){return c("(",t,")?")},concat:c}}}])
