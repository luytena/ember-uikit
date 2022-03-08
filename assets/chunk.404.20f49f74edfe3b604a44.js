/*! For license information please see chunk.404.20f49f74edfe3b604a44.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[404],{836:(t,e,n)=>{"use strict"
n.r(e),n.d(e,{default:()=>T})
var i=n(927),r=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],o=r.join(","),s="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=function(t,e,n){var i=Array.prototype.slice.apply(t.querySelectorAll(o))
return e&&s.call(t,o)&&i.unshift(t),i.filter(n)},u=function(t){var e=parseInt(t.getAttribute("tabindex"),10)
return isNaN(e)?function(t){return"true"===t.contentEditable}(t)?0:"AUDIO"!==t.nodeName&&"VIDEO"!==t.nodeName&&"DETAILS"!==t.nodeName||null!==t.getAttribute("tabindex")?t.tabIndex:0:e},c=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},l=function(t){return"INPUT"===t.tagName},h=function(t,e){return!(e.disabled||function(t){return l(t)&&"hidden"===t.type}(e)||function(t,e){if("hidden"===getComputedStyle(t).visibility)return!0
var n=s.call(t,"details>summary:first-of-type")?t.parentElement:t
if(s.call(n,"details:not([open]) *"))return!0
if(e&&"full"!==e){if("non-zero-area"===e){var i=t.getBoundingClientRect(),r=i.width,o=i.height
return 0===r&&0===o}}else for(;t;){if("none"===getComputedStyle(t).display)return!0
t=t.parentElement}return!1}(e,t.displayCheck)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some((function(t){return"SUMMARY"===t.tagName}))}(e)||function(t){if(l(t)||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||"BUTTON"===t.tagName)for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var n=0;n<e.children.length;n++){var i=e.children.item(n)
if("LEGEND"===i.tagName)return!i.contains(t)}return!0}e=e.parentElement}return!1}(e))},f=function(t,e){return!(!h(t,e)||function(t){return function(t){return l(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0
var e,n=t.form||t.ownerDocument,i=function(t){return n.querySelectorAll('input[type="radio"][name="'+t+'"]')}
if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)e=i(window.CSS.escape(t.name))
else try{e=i(t.name)}catch(t){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",t.message),!1}var r=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]}(e,t.form)
return!r||r===t}(t)}(e)||u(e)<0)},d=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==s.call(t,o)&&f(e,t)},p=r.concat("iframe").join(","),v=function(t,e){if(e=e||{},!t)throw new Error("No node provided")
return!1!==s.call(t,p)&&h(e,t)}
function m(t,e){var n=Object.keys(t)
if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t)
e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w,b=(w=[],{activateTrap:function(t){if(w.length>0){var e=w[w.length-1]
e!==t&&e.pause()}var n=w.indexOf(t);-1===n||w.splice(n,1),w.push(t)},deactivateTrap:function(t){var e=w.indexOf(t);-1!==e&&w.splice(e,1),w.length>0&&w[w.length-1].unpause()}}),y=function(t){return setTimeout(t,0)},x=function(t,e){var n=-1
return t.every((function(t,i){return!e(t)||(n=i,!1)})),n},k=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i]
return"function"==typeof t?t.apply(void 0,n):t},$=function(t){return t.target.shadowRoot&&"function"==typeof t.composedPath?t.composedPath()[0]:t.target},S=function(t,e){var n,i=(null==e?void 0:e.document)||document,r=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{}
e%2?m(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},e),o={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},s=function(t,e,n){return t&&void 0!==t[e]?t[e]:r[n||e]},l=function(t){return!(!t||!o.containers.some((function(e){return e.contains(t)})))},p=function(t){var e=r[t]
if("function"==typeof e){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s]
e=e.apply(void 0,o)}if(!e){if(void 0===e||!1===e)return e
throw new Error("`".concat(t,"` was specified but was not a node, or did not return a node"))}var a=e
if("string"==typeof e&&!(a=i.querySelector(e)))throw new Error("`".concat(t,"` as selector refers to no known node"))
return a},w=function(){var t=p("initialFocus")
if(!1===t)return!1
if(void 0===t)if(l(i.activeElement))t=i.activeElement
else{var e=o.tabbableGroups[0]
t=e&&e.firstTabbableNode||p("fallbackFocus")}if(!t)throw new Error("Your focus-trap needs to have at least one focusable element")
return t},S=function(){if(o.tabbableGroups=o.containers.map((function(t){var e,n,i,r=(n=[],i=[],a(t,(e=e||{}).includeContainer,f.bind(null,e)).forEach((function(t,e){var r=u(t)
0===r?n.push(t):i.push({documentOrder:e,tabIndex:r,node:t})})),i.sort(c).map((function(t){return t.node})).concat(n)),o=function(t,e){return a(t,(e=e||{}).includeContainer,h.bind(null,e))}(t)
if(r.length>0)return{container:t,firstTabbableNode:r[0],lastTabbableNode:r[r.length-1],nextTabbableNode:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=o.findIndex((function(e){return e===t}))
return e?o.slice(n+1).find((function(t){return d(t)})):o.slice(0,n).reverse().find((function(t){return d(t)}))}}})).filter((function(t){return!!t})),o.tabbableGroups.length<=0&&!p("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},E=function t(e){!1!==e&&e!==i.activeElement&&(e&&e.focus?(e.focus({preventScroll:!!r.preventScroll}),o.mostRecentlyFocusedNode=e,function(t){return t.tagName&&"input"===t.tagName.toLowerCase()&&"function"==typeof t.select}(e)&&e.select()):t(w()))},T=function(t){var e=p("setReturnFocus",t)
return e||!1!==e&&t},I=function(t){var e=$(t)
l(e)||(k(r.clickOutsideDeactivates,t)?n.deactivate({returnFocus:r.returnFocusOnDeactivate&&!v(e)}):k(r.allowOutsideClick,t)||t.preventDefault())},C=function(t){var e=$(t),n=l(e)
n||e instanceof Document?n&&(o.mostRecentlyFocusedNode=e):(t.stopImmediatePropagation(),E(o.mostRecentlyFocusedNode||w()))},A=function(t){if(function(t){return"Escape"===t.key||"Esc"===t.key||27===t.keyCode}(t)&&!1!==k(r.escapeDeactivates,t))return t.preventDefault(),void n.deactivate();(function(t){return"Tab"===t.key||9===t.keyCode})(t)&&function(t){var e=$(t)
S()
var n=null
if(o.tabbableGroups.length>0){var i=x(o.tabbableGroups,(function(t){return t.container.contains(e)})),r=i>=0?o.tabbableGroups[i]:void 0
if(i<0)n=t.shiftKey?o.tabbableGroups[o.tabbableGroups.length-1].lastTabbableNode:o.tabbableGroups[0].firstTabbableNode
else if(t.shiftKey){var s=x(o.tabbableGroups,(function(t){var n=t.firstTabbableNode
return e===n}))
if(s<0&&(r.container===e||v(e)&&!d(e)&&!r.nextTabbableNode(e,!1))&&(s=i),s>=0){var a=0===s?o.tabbableGroups.length-1:s-1
n=o.tabbableGroups[a].lastTabbableNode}}else{var u=x(o.tabbableGroups,(function(t){var n=t.lastTabbableNode
return e===n}))
if(u<0&&(r.container===e||v(e)&&!d(e)&&!r.nextTabbableNode(e))&&(u=i),u>=0){var c=u===o.tabbableGroups.length-1?0:u+1
n=o.tabbableGroups[c].firstTabbableNode}}}else n=p("fallbackFocus")
n&&(t.preventDefault(),E(n))}(t)},_=function(t){if(!k(r.clickOutsideDeactivates,t)){var e=$(t)
l(e)||k(r.allowOutsideClick,t)||(t.preventDefault(),t.stopImmediatePropagation())}},N=function(){if(o.active)return b.activateTrap(n),o.delayInitialFocusTimer=r.delayInitialFocus?y((function(){E(w())})):E(w()),i.addEventListener("focusin",C,!0),i.addEventListener("mousedown",I,{capture:!0,passive:!1}),i.addEventListener("touchstart",I,{capture:!0,passive:!1}),i.addEventListener("click",_,{capture:!0,passive:!1}),i.addEventListener("keydown",A,{capture:!0,passive:!1}),n},O=function(){if(o.active)return i.removeEventListener("focusin",C,!0),i.removeEventListener("mousedown",I,!0),i.removeEventListener("touchstart",I,!0),i.removeEventListener("click",_,!0),i.removeEventListener("keydown",A,!0),n}
return(n={activate:function(t){if(o.active)return this
var e=s(t,"onActivate"),n=s(t,"onPostActivate"),r=s(t,"checkCanFocusTrap")
r||S(),o.active=!0,o.paused=!1,o.nodeFocusedBeforeActivation=i.activeElement,e&&e()
var a=function(){r&&S(),N(),n&&n()}
return r?(r(o.containers.concat()).then(a,a),this):(a(),this)},deactivate:function(t){if(!o.active)return this
clearTimeout(o.delayInitialFocusTimer),o.delayInitialFocusTimer=void 0,O(),o.active=!1,o.paused=!1,b.deactivateTrap(n)
var e=s(t,"onDeactivate"),i=s(t,"onPostDeactivate"),r=s(t,"checkCanReturnFocus")
e&&e()
var a=s(t,"returnFocus","returnFocusOnDeactivate"),u=function(){y((function(){a&&E(T(o.nodeFocusedBeforeActivation)),i&&i()}))}
return a&&r?(r(T(o.nodeFocusedBeforeActivation)).then(u,u),this):(u(),this)},pause:function(){return o.paused||!o.active||(o.paused=!0,O()),this},unpause:function(){return o.paused&&o.active?(o.paused=!1,S(),N(),this):this},updateContainerElements:function(t){var e=[].concat(t).filter(Boolean)
return o.containers=e.map((function(t){return"string"==typeof t?i.querySelector(t):t})),o.active&&S(),this}}).updateContainerElements(t),n}
let E
try{E=(0,i.capabilities)("3.22")}catch{E=(0,i.capabilities)("3.13")}var T=(0,i.setModifierManager)((()=>({capabilities:E,createModifier:()=>({focusTrapOptions:void 0,isActive:!0,isPaused:!1,shouldSelfFocus:!1,focusTrap:void 0}),installModifier(t,e,n){let{named:{isActive:i,isPaused:r,shouldSelfFocus:o,focusTrapOptions:s,_createFocusTrap:a}}=n
t.focusTrapOptions={...s}||{},void 0!==i&&(t.isActive=i),void 0!==r&&(t.isPaused=r),t.focusTrapOptions&&void 0===t.focusTrapOptions.initialFocus&&o&&(t.focusTrapOptions.initialFocus=e)
let u=S
a&&(u=a),!1!==t.focusTrapOptions.returnFocusOnDeactivate&&(t.focusTrapOptions.returnFocusOnDeactivate=!0),t.focusTrap=u(e,t.focusTrapOptions),t.isActive&&t.focusTrap.activate(),t.isPaused&&t.focusTrap.pause()},updateModifier(t,e){let{named:n}=e
const i=n.focusTrapOptions||{}
if(t.isActive&&!n.isActive){const{returnFocusOnDeactivate:e}=i,n=void 0===e
t.focusTrap.deactivate({returnFocus:n})}else!t.isActive&&n.isActive&&t.focusTrap.activate()
t.isPaused&&!n.isPaused?t.focusTrap.unpause():!t.isPaused&&n.isPaused&&t.focusTrap.pause(),t.focusTrapOptions=i,void 0!==n.isActive&&(t.isActive=n.isActive),void 0!==n.isPaused&&(t.isPaused=n.isPaused)},destroyModifier(t){let{focusTrap:e}=t
e.deactivate()}})),class{})},972:function(t){t.exports=function(){"use strict"
var t=Object.prototype,e=t.hasOwnProperty
function n(t,n){return e.call(t,n)}var i=/\B([A-Z])/g,r=rt((function(t){return t.replace(i,"-$1").toLowerCase()})),o=/-(\w)/g,s=rt((function(t){return t.replace(o,u)})),a=rt((function(t){return t.length?u(0,t.charAt(0))+t.slice(1):""}))
function u(t,e){return e?e.toUpperCase():""}var c=String.prototype,l=c.startsWith||function(t){return 0===this.lastIndexOf(t,0)}
function h(t,e){return l.call(t,e)}var f=c.endsWith||function(t){return this.substr(-t.length)===t}
function d(t,e){return f.call(t,e)}var p=Array.prototype,v=function(t,e){return!!~this.indexOf(t,e)},m=c.includes||v,g=p.includes||v
function w(t,e){return t&&(O(t)?m:g).call(t,e)}var b=p.findIndex||function(t){for(var e=arguments,n=0;n<this.length;n++)if(t.call(e[1],this[n],n,this))return n
return-1}
function y(t,e){return b.call(t,e)}var x=Array.isArray
function k(t){return"function"==typeof t}function $(t){return null!==t&&"object"==typeof t}var S=t.toString
function E(t){return"[object Object]"===S.call(t)}function T(t){return $(t)&&t===t.window}function I(t){return 9===_(t)}function C(t){return _(t)>=1}function A(t){return 1===_(t)}function _(t){return!T(t)&&$(t)&&t.nodeType}function N(t){return"boolean"==typeof t}function O(t){return"string"==typeof t}function D(t){return"number"==typeof t}function M(t){return D(t)||O(t)&&!isNaN(t-parseFloat(t))}function P(t){return!(x(t)?t.length:$(t)&&Object.keys(t).length)}function B(t){return void 0===t}function z(t){return N(t)?t:"true"===t||"1"===t||""===t||"false"!==t&&"0"!==t&&t}function H(t){var e=Number(t)
return!isNaN(e)&&e}function F(t){return parseFloat(t)||0}var L=Array.from||function(t){return p.slice.call(t)}
function j(t){return W(t)[0]}function W(t){return t&&(C(t)?[t]:L(t).filter(C))||[]}function R(t){return T(t)?t:(t=j(t))?(I(t)?t:t.ownerDocument).defaultView:window}function V(t){return t?d(t,"ms")?F(t):1e3*F(t):0}function q(t,e){return t===e||$(t)&&$(e)&&Object.keys(t).length===Object.keys(e).length&&X(t,(function(t,n){return t===e[n]}))}function G(t,e,n){return t.replace(new RegExp(e+"|"+n,"g"),(function(t){return t===e?n:e}))}var U=Object.assign||function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1]
t=Object(t)
for(var r=0;r<e.length;r++){var o=e[r]
if(null!==o)for(var s in o)n(o,s)&&(t[s]=o[s])}return t}
function Y(t){return t[t.length-1]}function X(t,e){for(var n in t)if(!1===e(t[n],n))return!1
return!0}function K(t,e){return t.slice().sort((function(t,n){var i=t[e]
void 0===i&&(i=0)
var r=n[e]
return void 0===r&&(r=0),i>r?1:r>i?-1:0}))}function Z(t,e){var n=new Set
return t.filter((function(t){var i=t[e]
return!n.has(i)&&(n.add(i)||!0)}))}function J(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=1),Math.min(Math.max(H(t)||0,e),n)}function Q(){}function tt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
return[["bottom","top"],["right","left"]].every((function(e){var n=e[0],i=e[1]
return Math.min.apply(Math,t.map((function(t){return t[n]})))-Math.max.apply(Math,t.map((function(t){return t[i]})))>0}))}function et(t,e){return t.x<=e.right&&t.x>=e.left&&t.y<=e.bottom&&t.y>=e.top}var nt={ratio:function(t,e,n){var i,r="width"===e?"height":"width"
return(i={})[r]=t[e]?Math.round(n*t[r]/t[e]):t[r],i[e]=n,i},contain:function(t,e){var n=this
return X(t=U({},t),(function(i,r){return t=t[r]>e[r]?n.ratio(t,r,e[r]):t})),t},cover:function(t,e){var n=this
return X(t=this.contain(t,e),(function(i,r){return t=t[r]<e[r]?n.ratio(t,r,e[r]):t})),t}}
function it(t,e,n,i){void 0===n&&(n=0),void 0===i&&(i=!1)
var r=(e=W(e)).length
return r?(t=M(t)?H(t):"next"===t?n+1:"previous"===t?n-1:e.indexOf(j(t)),i?J(t,0,r-1):(t%=r)<0?t+r:t):-1}function rt(t){var e=Object.create(null)
return function(n){return e[n]||(e[n]=t(n))}}function ot(t,e,n){if($(e))for(var i in e)ot(t,i,e[i])
else{if(B(n))return(t=j(t))&&t.getAttribute(e)
W(t).forEach((function(t){k(n)&&(n=n.call(t,ot(t,e))),null===n?at(t,e):t.setAttribute(e,n)}))}}function st(t,e){return W(t).some((function(t){return t.hasAttribute(e)}))}function at(t,e){t=W(t),e.split(" ").forEach((function(e){return t.forEach((function(t){return t.hasAttribute(e)&&t.removeAttribute(e)}))}))}function ut(t,e){for(var n=0,i=[e,"data-"+e];n<i.length;n++)if(st(t,i[n]))return ot(t,i[n])}var ct="undefined"!=typeof window,lt=ct&&/msie|trident/i.test(window.navigator.userAgent),ht=ct&&"rtl"===ot(document.documentElement,"dir"),ft=ct&&"ontouchstart"in window,dt=ct&&window.PointerEvent,pt=ct&&(ft||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints),vt=dt?"pointerdown":ft?"touchstart":"mousedown",mt=dt?"pointermove":ft?"touchmove":"mousemove",gt=dt?"pointerup":ft?"touchend":"mouseup",wt=dt?"pointerenter":ft?"":"mouseenter",bt=dt?"pointerleave":ft?"":"mouseleave",yt=dt?"pointercancel":"touchcancel",xt={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}
function kt(t){return W(t).some((function(t){return xt[t.tagName.toLowerCase()]}))}function $t(t){return W(t).some((function(t){return t.offsetWidth||t.offsetHeight||t.getClientRects().length}))}var St="input,select,textarea,button"
function Et(t){return W(t).some((function(t){return Ot(t,St)}))}var Tt=St+",a[href],[tabindex]"
function It(t){return Ot(t,Tt)}function Ct(t){return(t=j(t))&&A(t.parentNode)&&t.parentNode}function At(t,e){return W(t).filter((function(t){return Ot(t,e)}))}var _t=ct?Element.prototype:{},Nt=_t.matches||_t.webkitMatchesSelector||_t.msMatchesSelector||Q
function Ot(t,e){return W(t).some((function(t){return Nt.call(t,e)}))}var Dt=_t.closest||function(t){var e=this
do{if(Ot(e,t))return e}while(e=Ct(e))}
function Mt(t,e){return h(e,">")&&(e=e.slice(1)),A(t)?Dt.call(t,e):W(t).map((function(t){return Mt(t,e)})).filter(Boolean)}function Pt(t,e){return O(e)?Ot(t,e)||!!Mt(t,e):t===e||(I(e)?e.documentElement:j(e)).contains(j(t))}function Bt(t,e){for(var n=[];t=Ct(t);)e&&!Ot(t,e)||n.push(t)
return n}function zt(t,e){var n=(t=j(t))?W(t.children):[]
return e?At(n,e):n}function Ht(t,e){return e?W(t).indexOf(j(e)):zt(Ct(t)).indexOf(t)}function Ft(t,e){return Wt(t,jt(t,e))}function Lt(t,e){return Rt(t,jt(t,e))}function jt(t,e){return void 0===e&&(e=document),O(t)&&Ut(t)||I(e)?e:e.ownerDocument}function Wt(t,e){return j(Vt(t,e,"querySelector"))}function Rt(t,e){return W(Vt(t,e,"querySelectorAll"))}function Vt(t,e,n){if(void 0===e&&(e=document),!t||!O(t))return t
t=t.replace(Gt,"$1 *"),Ut(t)&&(t=Xt(t).map((function(t){var n=e
if("!"===t[0]){var i=t.substr(1).trim().split(" ")
n=Mt(Ct(e),i[0]),t=i.slice(1).join(" ").trim()}if("-"===t[0]){var r=t.substr(1).trim().split(" "),o=(n||e).previousElementSibling
n=Ot(o,t.substr(1))?o:null,t=r.slice(1).join(" ")}return n?function(t){for(var e=[];t.parentNode;){var n=ot(t,"id")
if(n){e.unshift("#"+Zt(n))
break}var i=t.tagName
"HTML"!==i&&(i+=":nth-child("+(Ht(t)+1)+")"),e.unshift(i),t=t.parentNode}return e.join(" > ")}(n)+" "+t:null})).filter(Boolean).join(","),e=document)
try{return e[n](t)}catch(t){return null}}var qt=/(^|[^\\],)\s*[!>+~-]/,Gt=/([!>+~-])(?=\s+[!>+~-]|\s*$)/g,Ut=rt((function(t){return t.match(qt)})),Yt=/.*?[^\\](?:,|$)/g,Xt=rt((function(t){return t.match(Yt).map((function(t){return t.replace(/,$/,"").trim()}))})),Kt=ct&&window.CSS&&CSS.escape||function(t){return t.replace(/([^\x7f-\uFFFF\w-])/g,(function(t){return"\\"+t}))}
function Zt(t){return O(t)?Kt.call(null,t):""}function Jt(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
var n=ie(t),i=n[0],r=n[1],o=n[2],s=n[3],a=n[4]
return i=le(i),s.length>1&&(s=oe(s)),a&&a.self&&(s=se(s)),o&&(s=re(o,s)),a=ae(a),r.split(" ").forEach((function(t){return i.forEach((function(e){return e.addEventListener(t,s,a)}))})),function(){return Qt(i,r,s,a)}}function Qt(t,e,n,i){void 0===i&&(i=!1),i=ae(i),t=le(t),e.split(" ").forEach((function(e){return t.forEach((function(t){return t.removeEventListener(e,n,i)}))}))}function te(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
var n=ie(t),i=n[0],r=n[1],o=n[2],s=n[3],a=n[4],u=n[5],c=Jt(i,r,o,(function(t){var e=!u||u(t)
e&&(c(),s(t,e))}),a)
return c}function ee(t,e,n){return le(t).reduce((function(t,i){return t&&i.dispatchEvent(ne(e,!0,!0,n))}),!0)}function ne(t,e,n,i){if(void 0===e&&(e=!0),void 0===n&&(n=!1),O(t)){var r=document.createEvent("CustomEvent")
r.initCustomEvent(t,e,n,i),t=r}return t}function ie(t){return k(t[2])&&t.splice(2,0,!1),t}function re(t,e){var n=this
return function(i){var r=">"===t[0]?Rt(t,i.currentTarget).reverse().filter((function(t){return Pt(i.target,t)}))[0]:Mt(i.target,t)
r&&(i.current=r,e.call(n,i))}}function oe(t){return function(e){return x(e.detail)?t.apply(void 0,[e].concat(e.detail)):t(e)}}function se(t){return function(e){if(e.target===e.currentTarget||e.target===e.current)return t.call(null,e)}}function ae(t){return t&&lt&&!N(t)?!!t.capture:t}function ue(t){return t&&"addEventListener"in t}function ce(t){return ue(t)?t:j(t)}function le(t){return x(t)?t.map(ce).filter(Boolean):O(t)?Rt(t):ue(t)?[t]:W(t)}function he(t){return"touch"===t.pointerType||!!t.touches}function fe(t){var e=t.touches,n=t.changedTouches,i=e&&e[0]||n&&n[0]||t
return{x:i.clientX,y:i.clientY}}var de=ct&&window.Promise||me,pe=function(){var t=this
this.promise=new de((function(e,n){t.reject=n,t.resolve=e}))},ve=ct&&window.setImmediate||setTimeout
function me(t){this.state=2,this.value=void 0,this.deferred=[]
var e=this
try{t((function(t){e.resolve(t)}),(function(t){e.reject(t)}))}catch(t){e.reject(t)}}me.reject=function(t){return new me((function(e,n){n(t)}))},me.resolve=function(t){return new me((function(e,n){e(t)}))},me.all=function(t){return new me((function(e,n){var i=[],r=0
function o(n){return function(o){i[n]=o,(r+=1)===t.length&&e(i)}}0===t.length&&e(i)
for(var s=0;s<t.length;s+=1)me.resolve(t[s]).then(o(s),n)}))},me.race=function(t){return new me((function(e,n){for(var i=0;i<t.length;i+=1)me.resolve(t[i]).then(e,n)}))}
var ge=me.prototype
function we(t,e){var n=U({data:null,method:"GET",headers:{},xhr:new XMLHttpRequest,beforeSend:Q,responseType:""},e)
return de.resolve().then((function(){return n.beforeSend(n)})).then((function(){return function(t,e){return new de((function(n,i){var r=e.xhr
for(var o in e)if(o in r)try{r[o]=e[o]}catch(t){}for(var s in r.open(e.method.toUpperCase(),t),e.headers)r.setRequestHeader(s,e.headers[s])
Jt(r,"load",(function(){0===r.status||r.status>=200&&r.status<300||304===r.status?("json"===e.responseType&&O(r.response)&&(r=U(function(t){var e={}
for(var n in t)e[n]=t[n]
return e}(r),{response:JSON.parse(r.response)})),n(r)):i(U(Error(r.statusText),{xhr:r,status:r.status}))})),Jt(r,"error",(function(){return i(U(Error("Network Error"),{xhr:r}))})),Jt(r,"timeout",(function(){return i(U(Error("Network Timeout"),{xhr:r}))})),r.send(e.data)}))}(t,n)}))}function be(t,e,n){return new de((function(i,r){var o=new Image
o.onerror=function(t){return r(t)},o.onload=function(){return i(o)},n&&(o.sizes=n),e&&(o.srcset=e),o.src=t}))}function ye(t){return(t=Me(t)).innerHTML="",t}function xe(t,e){return t=Me(t),B(e)?t.innerHTML:ke(t.hasChildNodes()?ye(t):t,e)}function ke(t,e){return t=Me(t),Ee(e,(function(e){return t.appendChild(e)}))}function $e(t,e){return t=Me(t),Ee(e,(function(e){return t.parentNode.insertBefore(e,t)}))}function Se(t,e){return t=Me(t),Ee(e,(function(e){return t.nextSibling?$e(t.nextSibling,e):ke(t.parentNode,e)}))}function Ee(t,e){return(t=O(t)?Oe(t):t)?"length"in t?W(t).map(e):e(t):null}function Te(t){W(t).forEach((function(t){return t.parentNode&&t.parentNode.removeChild(t)}))}function Ie(t,e){for(e=j($e(t,e));e.firstChild;)e=e.firstChild
return ke(e,t),e}function Ce(t,e){return W(W(t).map((function(t){return t.hasChildNodes?Ie(W(t.childNodes),e):ke(t,e)})))}function Ae(t){W(t).map(Ct).filter((function(t,e,n){return n.indexOf(t)===e})).forEach((function(t){$e(t,t.childNodes),Te(t)}))}ge.resolve=function(t){var e=this
if(2===e.state){if(t===e)throw new TypeError("Promise settled with itself.")
var n=!1
try{var i=t&&t.then
if(null!==t&&$(t)&&k(i))return void i.call(t,(function(t){n||e.resolve(t),n=!0}),(function(t){n||e.reject(t),n=!0}))}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},ge.reject=function(t){var e=this
if(2===e.state){if(t===e)throw new TypeError("Promise settled with itself.")
e.state=1,e.value=t,e.notify()}},ge.notify=function(){var t=this
ve((function(){if(2!==t.state)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],i=e[1],r=e[2],o=e[3]
try{0===t.state?k(n)?r(n.call(void 0,t.value)):r(t.value):1===t.state&&(k(i)?r(i.call(void 0,t.value)):o(t.value))}catch(t){o(t)}}}))},ge.then=function(t,e){var n=this
return new me((function(i,r){n.deferred.push([t,e,i,r]),n.notify()}))},ge.catch=function(t){return this.then(void 0,t)}
var _e=/^\s*<(\w+|!)[^>]*>/,Ne=/^<(\w+)\s*\/?>(?:<\/\1>)?$/
function Oe(t){var e=Ne.exec(t)
if(e)return document.createElement(e[1])
var n=document.createElement("div")
return _e.test(t)?n.insertAdjacentHTML("beforeend",t.trim()):n.textContent=t,n.childNodes.length>1?W(n.childNodes):n.firstChild}function De(t,e){if(A(t))for(e(t),t=t.firstElementChild;t;){var n=t.nextElementSibling
De(t,e),t=n}}function Me(t,e){return Be(t)?j(Oe(t)):Wt(t,e)}function Pe(t,e){return Be(t)?W(Oe(t)):Rt(t,e)}function Be(t){return O(t)&&("<"===t[0]||t.match(/^\s*</))}function ze(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1]
Re(t,e,"add")}function He(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1]
Re(t,e,"remove")}function Fe(t,e){ot(t,"class",(function(t){return(t||"").replace(new RegExp("\\b"+e+"\\b","g"),"")}))}function Le(t){for(var e=[],n=arguments.length-1;n-- >0;)e[n]=arguments[n+1]
e[0]&&He(t,e[0]),e[1]&&ze(t,e[1])}function je(t,e){e=Ve(e)[0]
for(var n=W(t),i=0;i<n.length;i++)if(e&&n[i].classList.contains(e))return!0
return!1}function We(t,e,n){e=Ve(e)
for(var i=W(t),r=0;r<i.length;r++)for(var o=i[r].classList,s=0;s<e.length;s++)B(n)?o.toggle(e[s]):qe.Force?o.toggle(e[s],!!n):o[n?"add":"remove"](e[s])}function Re(t,e,n){var i
e=e.reduce((function(t,e){return t.concat(Ve(e))}),[])
for(var r=W(t),o=function(t){qe.Multiple?(i=r[t].classList)[n].apply(i,e):e.forEach((function(e){return r[t].classList[n](e)}))},s=0;s<r.length;s++)o(s)}function Ve(t){return String(t).split(/\s|,/).filter(Boolean)}var qe={get Multiple(){return this.get("Multiple")},get Force(){return this.get("Force")},get:function(t){var e=document.createElement("_").classList
return e.add("a","b"),e.toggle("c",!1),(qe={Multiple:e.contains("b"),Force:!e.contains("c")})[t]}},Ge={"animation-iteration-count":!0,"column-count":!0,"fill-opacity":!0,"flex-grow":!0,"flex-shrink":!0,"font-weight":!0,"line-height":!0,opacity:!0,order:!0,orphans:!0,"stroke-dasharray":!0,"stroke-dashoffset":!0,widows:!0,"z-index":!0,zoom:!0}
function Ue(t,e,n,i){return void 0===i&&(i=""),W(t).map((function(t){if(O(e)){if(e=Qe(e),B(n))return Xe(t,e)
n||D(n)?t.style.setProperty(e,M(n)&&!Ge[e]?n+"px":n,i):t.style.removeProperty(e)}else{if(x(e)){var r=Ye(t)
return e.reduce((function(t,e){return t[e]=r[Qe(e)],t}),{})}$(e)&&(i=n,X(e,(function(e,n){return Ue(t,n,e,i)})))}return t}))[0]}function Ye(t,e){return R(t).getComputedStyle(t,e)}function Xe(t,e,n){return Ye(t,n)[e]}var Ke=rt((function(t){var e=ke(document.documentElement,Oe("<div>"))
ze(e,"uk-"+t)
var n=Xe(e,"content",":before")
return Te(e),n})),Ze=/^\s*(["'])?(.*?)\1\s*$/
function Je(t){return(lt?Ke(t):Ye(document.documentElement).getPropertyValue("--uk-"+t)).replace(Ze,"$2")}var Qe=rt((function(t){return function(t){t=r(t)
var e=document.documentElement.style
if(t in e)return t
for(var n,i=tn.length;i--;)if((n="-"+tn[i]+"-"+t)in e)return n}(t)})),tn=["webkit","moz","ms"]
function en(t,e,n,i){return void 0===n&&(n=400),void 0===i&&(i="linear"),de.all(W(t).map((function(t){return new de((function(r,o){for(var s in e){var a=Ue(t,s)
""===a&&Ue(t,s,a)}var u=setTimeout((function(){return ee(t,"transitionend")}),n)
te(t,"transitionend transitioncanceled",(function(e){var n=e.type
clearTimeout(u),He(t,"uk-transition"),Ue(t,{transitionProperty:"",transitionDuration:"",transitionTimingFunction:""}),"transitioncanceled"===n?o():r(t)}),{self:!0}),ze(t,"uk-transition"),Ue(t,U({transitionProperty:Object.keys(e).map(Qe).join(","),transitionDuration:n+"ms",transitionTimingFunction:i},e))}))})))}var nn={start:en,stop:function(t){return ee(t,"transitionend"),de.resolve()},cancel:function(t){ee(t,"transitioncanceled")},inProgress:function(t){return je(t,"uk-transition")}},rn="uk-animation-"
function on(t,e,n,i,r){return void 0===n&&(n=200),de.all(W(t).map((function(t){return new de((function(o,s){ee(t,"animationcanceled")
var a=setTimeout((function(){return ee(t,"animationend")}),n)
te(t,"animationend animationcanceled",(function(e){var n=e.type
clearTimeout(a),"animationcanceled"===n?s():o(t),Ue(t,"animationDuration",""),Fe(t,"uk-animation-\\S*")}),{self:!0}),Ue(t,"animationDuration",n+"ms"),ze(t,e,rn+(r?"leave":"enter")),h(e,rn)&&(i&&ze(t,"uk-transform-origin-"+i),r&&ze(t,"uk-animation-reverse"))}))})))}var sn=new RegExp("uk-animation-(enter|leave)"),an={in:on,out:function(t,e,n,i){return on(t,e,n,i,!0)},inProgress:function(t){return sn.test(ot(t,"class"))},cancel:function(t){ee(t,"animationcanceled")}},un={width:["left","right"],height:["top","bottom"]}
function cn(t){var e=A(t)?j(t).getBoundingClientRect():{height:dn(t),width:pn(t),top:0,left:0}
return{height:e.height,width:e.width,top:e.top,left:e.left,bottom:e.top+e.height,right:e.left+e.width}}function ln(t,e){var n=cn(t)
if(t){var i=R(t),r={height:i.pageYOffset,width:i.pageXOffset}
for(var o in un)for(var s in un[o])n[un[o][s]]+=r[o]}if(!e)return n
var a=Ue(t,"position")
X(Ue(t,["left","top"]),(function(i,r){return Ue(t,r,e[r]-n[r]+F("absolute"===a&&"auto"===i?hn(t)[r]:i))}))}function hn(t){for(var e=ln(t),n=e.top,i=e.left,r=j(t),o=r.ownerDocument,s=o.body,a=o.documentElement,u=r.offsetParent||a;u&&(u===s||u===a)&&"static"===Ue(u,"position");)u=u.parentNode
if(A(u)){var c=ln(u)
n-=c.top+F(Ue(u,"borderTopWidth")),i-=c.left+F(Ue(u,"borderLeftWidth"))}return{top:n-F(Ue(t,"marginTop")),left:i-F(Ue(t,"marginLeft"))}}function fn(t){var e=[0,0]
t=j(t)
do{if(e[0]+=t.offsetTop,e[1]+=t.offsetLeft,"fixed"===Ue(t,"position")){var n=R(t)
return e[0]+=n.pageYOffset,e[1]+=n.pageXOffset,e}}while(t=t.offsetParent)
return e}var dn=vn("height"),pn=vn("width")
function vn(t){var e=a(t)
return function(n,i){if(B(i)){if(T(n))return n["inner"+e]
if(I(n)){var r=n.documentElement
return Math.max(r["offset"+e],r["scroll"+e])}return(i="auto"===(i=Ue(n=j(n),t))?n["offset"+e]:F(i)||0)-mn(n,t)}return Ue(n,t,i||0===i?+i+mn(n,t)+"px":"")}}function mn(t,e,n){return void 0===n&&(n="border-box"),Ue(t,"boxSizing")===n?un[e].map(a).reduce((function(e,n){return e+F(Ue(t,"padding"+n))+F(Ue(t,"border"+n+"Width"))}),0):0}function gn(t){for(var e in un)for(var n in un[e])if(un[e][n]===t)return un[e][1-n]
return t}function wn(t,e,n,i){return void 0===e&&(e="width"),void 0===n&&(n=window),void 0===i&&(i=!1),M(t)?+t:d(t,"vh")?bn(dn(R(n)),t):d(t,"vw")?bn(pn(R(n)),t):d(t,"%")?bn(i?n["offset"+a(e)]:cn(n)[e],t):F(t)}function bn(t,e){return t*F(e)/100}var yn={reads:[],writes:[],read:function(t){return this.reads.push(t),kn(),t},write:function(t){return this.writes.push(t),kn(),t},clear:function(t){Sn(this.reads,t),Sn(this.writes,t)},flush:xn}
function xn(t){void 0===t&&(t=1),$n(yn.reads),$n(yn.writes.splice(0)),yn.scheduled=!1,(yn.reads.length||yn.writes.length)&&kn(t+1)}function kn(t){yn.scheduled||(yn.scheduled=!0,t&&t<4?de.resolve().then((function(){return xn(t)})):requestAnimationFrame((function(){return xn()})))}function $n(t){for(var e;e=t.shift();)try{e()}catch(t){console.error(t)}}function Sn(t,e){var n=t.indexOf(e)
return~n&&t.splice(n,1)}function En(){}En.prototype={positions:[],init:function(){var t,e=this
this.positions=[],this.unbind=Jt(document,"mousemove",(function(e){return t=fe(e)})),this.interval=setInterval((function(){t&&(e.positions.push(t),e.positions.length>5&&e.positions.shift())}),50)},cancel:function(){this.unbind&&this.unbind(),this.interval&&clearInterval(this.interval)},movesTo:function(t){if(this.positions.length<2)return!1
var e=t.getBoundingClientRect(),n=e.left,i=e.right,r=e.top,o=e.bottom,s=this.positions[0],a=Y(this.positions),u=[s,a]
return!et(a,e)&&[[{x:n,y:r},{x:i,y:o}],[{x:n,y:o},{x:i,y:r}]].some((function(t){var n=function(t,e){var n=t[0],i=n.x,r=n.y,o=t[1],s=o.x,a=o.y,u=e[0],c=u.x,l=u.y,h=e[1],f=h.x,d=h.y,p=(d-l)*(s-i)-(f-c)*(a-r)
if(0===p)return!1
var v=((f-c)*(r-l)-(d-l)*(i-c))/p
return!(v<0)&&{x:i+v*(s-i),y:r+v*(a-r)}}(u,t)
return n&&et(n,e)}))}}
var Tn={}
function In(t,e,n){return Tn.computed(k(t)?t.call(n,n):t,k(e)?e.call(n,n):e)}function Cn(t,e){return t=t&&!x(t)?[t]:t,e?t?t.concat(e):x(e)?e:[e]:t}function An(t,e){return B(e)?t:e}function _n(t,e,i){var r={}
if(k(e)&&(e=e.options),e.extends&&(t=_n(t,e.extends,i)),e.mixins)for(var o=0,s=e.mixins.length;o<s;o++)t=_n(t,e.mixins[o],i)
for(var a in t)c(a)
for(var u in e)n(t,u)||c(u)
function c(n){r[n]=(Tn[n]||An)(t[n],e[n],i)}return r}function Nn(t,e){var n
void 0===e&&(e=[])
try{return t?h(t,"{")?JSON.parse(t):e.length&&!w(t,":")?((n={})[e[0]]=t,n):t.split(";").reduce((function(t,e){var n=e.split(/:(.*)/),i=n[0],r=n[1]
return i&&!B(r)&&(t[i.trim()]=r.trim()),t}),{}):{}}catch(t){return{}}}function On(t){if(zn(t)&&Ln(t,{func:"playVideo",method:"play"}),Bn(t))try{t.play().catch(Q)}catch(t){}}function Dn(t){zn(t)&&Ln(t,{func:"pauseVideo",method:"pause"}),Bn(t)&&t.pause()}function Mn(t){zn(t)&&Ln(t,{func:"mute",method:"setVolume",value:0}),Bn(t)&&(t.muted=!0)}function Pn(t){return Bn(t)||zn(t)}function Bn(t){return t&&"VIDEO"===t.tagName}function zn(t){return t&&"IFRAME"===t.tagName&&(Hn(t)||Fn(t))}function Hn(t){return!!t.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/)}function Fn(t){return!!t.src.match(/vimeo\.com\/video\/.*/)}function Ln(t,e){(function(t){if(t._ukPlayer)return t._ukPlayer
var e,n=Hn(t),i=Fn(t),r=++Wn
return t._ukPlayer=new de((function(o){n&&te(t,"load",(function(){var n=function(){return jn(t,{event:"listening",id:r})}
e=setInterval(n,100),n()})),te(window,"message",o,!1,(function(t){var e=t.data
try{return(e=JSON.parse(e))&&(n&&e.id===r&&"onReady"===e.event||i&&Number(e.player_id)===r)}catch(t){}})),t.src=t.src+(w(t.src,"?")?"&":"?")+(n?"enablejsapi=1":"api=1&player_id="+r)})).then((function(){return clearInterval(e)}))})(t).then((function(){return jn(t,e)}))}function jn(t,e){try{t.contentWindow.postMessage(JSON.stringify(U({event:"command"},e)),"*")}catch(t){}}Tn.events=Tn.created=Tn.beforeConnect=Tn.connected=Tn.beforeDisconnect=Tn.disconnected=Tn.destroy=Cn,Tn.args=function(t,e){return!1!==e&&Cn(e||t)},Tn.update=function(t,e){return K(Cn(t,k(e)?{read:e}:e),"order")},Tn.props=function(t,e){return x(e)&&(e=e.reduce((function(t,e){return t[e]=String,t}),{})),Tn.methods(t,e)},Tn.computed=Tn.methods=function(t,e){return e?t?U({},t,e):e:t},Tn.data=function(t,e,n){return n?In(t,e,n):e?t?function(n){return In(t,e,n)}:e:t}
var Wn=0
function Rn(t,e,n){return void 0===e&&(e=0),void 0===n&&(n=0),!!$t(t)&&tt.apply(void 0,Un(t).map((function(t){var i=ln(Yn(t)),r=i.top,o=i.left,s=i.bottom,a=i.right
return{top:r-e,left:o-n,bottom:s+e,right:a+n}})).concat(ln(t)))}function Vn(t,e){(t=T(t)||I(t)?Kn(t):j(t)).scrollTop=e}function qn(t,e){void 0===e&&(e={})
var n=e.offset
void 0===n&&(n=0)
var i=$t(t)?Un(t):[]
return i.reduce((function(e,r,o){var s=r.scrollTop,a=r.scrollHeight,u=r.offsetHeight,c=a-Xn(r),l=ln(i[o-1]||t),h=l.height,f=l.top,d=Math.ceil(f-ln(Yn(r)).top-n+s)
return n>0&&u<h+n?d+=n:n=0,d>c?(n-=d-c,d=c):d<0&&(n-=d,d=0),function(){return function(t,e){return new de((function(n){var i,r=t.scrollTop,o=(i=Math.abs(e),40*Math.pow(i,.375)),s=Date.now()
!function i(){var a,u=(a=J((Date.now()-s)/o),.5*(1-Math.cos(Math.PI*a)))
Vn(t,r+e*u),1===u?n():requestAnimationFrame(i)}()}))}(r,d-s).then(e)}}),(function(){return de.resolve()}))()}function Gn(t,e,n){if(void 0===e&&(e=0),void 0===n&&(n=0),!$t(t))return 0
var i=Un(t,/auto|scroll/,!0)[0],r=i.scrollHeight,o=i.scrollTop,s=Xn(i),a=r-s,u=fn(t)[0]-fn(i)[0],c=Math.max(0,u-s+e)
return J((o-c)/(Math.min(a,u+t.offsetHeight-n)-c))}function Un(t,e,n){void 0===e&&(e=/auto|scroll|hidden/),void 0===n&&(n=!1)
var i=Kn(t),r=Bt(t).reverse(),o=y(r=r.slice(r.indexOf(i)+1),(function(t){return"fixed"===Ue(t,"position")}))
return~o&&(r=r.slice(o)),[i].concat(r.filter((function(t){return e.test(Ue(t,"overflow"))&&(!n||t.scrollHeight>Xn(t))}))).reverse()}function Yn(t){return t===Kn(t)?window:t}function Xn(t){return(t===Kn(t)?document.documentElement:t).clientHeight}function Kn(t){var e=R(t).document
return e.scrollingElement||e.documentElement}var Zn={width:["x","left","right"],height:["y","top","bottom"]}
function Jn(t,e,n,i,r,o,s,a){n=ti(n),i=ti(i)
var u={element:n,target:i}
if(!t||!e)return u
var c=ln(t),l=ln(e),h=l
if(Qn(h,n,c,-1),Qn(h,i,l,1),r=ei(r,c.width,c.height),o=ei(o,l.width,l.height),r.x+=o.x,r.y+=o.y,h.left+=r.x,h.top+=r.y,s){var f=Un(t).map(Yn)
a&&!w(f,a)&&f.unshift(a),f=f.map((function(t){return ln(t)})),X(Zn,(function(t,e){var o=t[0],a=t[1],d=t[2];(!0===s||w(s,o))&&f.some((function(t){var s=n[o]===a?-c[e]:n[o]===d?c[e]:0,f=i[o]===a?l[e]:i[o]===d?-l[e]:0
if(h[a]<t[a]||h[a]+c[e]>t[d]){var p=c[e]/2,v="center"===i[o]?-l[e]/2:0
return"center"===n[o]&&(m(p,v)||m(-p,-v))||m(s,f)}function m(n,i){var s=F((h[a]+n+i-2*r[o]).toFixed(4))
if(s>=t[a]&&s+c[e]<=t[d])return h[a]=s,["element","target"].forEach((function(t){u[t][o]=n?u[t][o]===Zn[e][1]?Zn[e][2]:Zn[e][1]:u[t][o]})),!0}}))}))}return ln(t,h),u}function Qn(t,e,n,i){X(Zn,(function(r,o){var s=r[0],a=r[1],u=r[2]
e[s]===u?t[a]+=n[o]*i:"center"===e[s]&&(t[a]+=n[o]*i/2)}))}function ti(t){var e=/left|center|right/,n=/top|center|bottom/
return 1===(t=(t||"").split(" ")).length&&(t=e.test(t[0])?t.concat("center"):n.test(t[0])?["center"].concat(t):["center","center"]),{x:e.test(t[0])?t[0]:"center",y:n.test(t[1])?t[1]:"center"}}function ei(t,e,n){var i=(t||"").split(" "),r=i[0],o=i[1]
return{x:r?F(r)*(d(r,"%")?e/100:1):0,y:o?F(o)*(d(o,"%")?n/100:1):0}}var ni=Object.freeze({__proto__:null,ajax:we,getImage:be,transition:en,Transition:nn,animate:on,Animation:an,attr:ot,hasAttr:st,removeAttr:at,data:ut,addClass:ze,removeClass:He,removeClasses:Fe,replaceClass:Le,hasClass:je,toggleClass:We,dimensions:cn,offset:ln,position:hn,offsetPosition:fn,height:dn,width:pn,boxModelAdjust:mn,flipPosition:gn,toPx:wn,ready:function(t){"loading"===document.readyState?te(document,"DOMContentLoaded",t):t()},empty:ye,html:xe,prepend:function(t,e){return(t=Me(t)).hasChildNodes()?Ee(e,(function(e){return t.insertBefore(e,t.firstChild)})):ke(t,e)},append:ke,before:$e,after:Se,remove:Te,wrapAll:Ie,wrapInner:Ce,unwrap:Ae,fragment:Oe,apply:De,$:Me,$$:Pe,inBrowser:ct,isIE:lt,isRtl:ht,hasTouch:pt,pointerDown:vt,pointerMove:mt,pointerUp:gt,pointerEnter:wt,pointerLeave:bt,pointerCancel:yt,on:Jt,off:Qt,once:te,trigger:ee,createEvent:ne,toEventTargets:le,isTouch:he,getEventPos:fe,fastdom:yn,isVoidElement:kt,isVisible:$t,selInput:St,isInput:Et,selFocusable:Tt,isFocusable:It,parent:Ct,filter:At,matches:Ot,closest:Mt,within:Pt,parents:Bt,children:zt,index:Ht,hasOwn:n,hyphenate:r,camelize:s,ucfirst:a,startsWith:h,endsWith:d,includes:w,findIndex:y,isArray:x,isFunction:k,isObject:$,isPlainObject:E,isWindow:T,isDocument:I,isNode:C,isElement:A,isBoolean:N,isString:O,isNumber:D,isNumeric:M,isEmpty:P,isUndefined:B,toBoolean:z,toNumber:H,toFloat:F,toArray:L,toNode:j,toNodes:W,toWindow:R,toMs:V,isEqual:q,swap:G,assign:U,last:Y,each:X,sortBy:K,uniqueBy:Z,clamp:J,noop:Q,intersectRect:tt,pointInRect:et,Dimensions:nt,getIndex:it,memoize:rt,MouseTracker:En,mergeOptions:_n,parseOptions:Nn,play:On,pause:Dn,mute:Mn,isVideo:Pn,positionAt:Jn,Promise:de,Deferred:pe,query:Ft,queryAll:Lt,find:Wt,findAll:Rt,escape:Zt,css:Ue,getCssVar:Je,propName:Qe,isInView:Rn,scrollTop:Vn,scrollIntoView:qn,scrolledOver:Gn,scrollParents:Un,getViewport:Yn,getViewportClientHeight:Xn}),ii=rt((function(t){return!(!h(t,"uk-")&&!h(t,"data-uk-"))&&s(t.replace("data-uk-","").replace("uk-",""))})),ri=function(t){this._init(t)}
ri.util=ni,ri.data="__uikit__",ri.prefix="uk-",ri.options={},ri.version="3.11.1",function(t){var e,n=t.data
function i(t,e){if(t)for(var n in t)t[n]._connected&&t[n]._callUpdate(e)}t.use=function(t){if(!t.installed)return t.call(null,this),t.installed=!0,this},t.mixin=function(e,n){(n=(O(n)?t.component(n):n)||this).options=_n(n.options,e)},t.extend=function(t){t=t||{}
var e=this,n=function(t){this._init(t)}
return(n.prototype=Object.create(e.prototype)).constructor=n,n.options=_n(e.options,t),n.super=e,n.extend=e.extend,n},t.update=function(t,e){Bt(t=t?j(t):document.body).reverse().forEach((function(t){return i(t[n],e)})),De(t,(function(t){return i(t[n],e)}))},Object.defineProperty(t,"container",{get:function(){return e||document.body},set:function(t){e=Me(t)}})}(ri),function(t){function e(t){for(var e=this,n=this.$options.update,i=function(i){var r=n[i],o=r.read,s=r.write,a=r.events
if(t.has("update")||a&&a.some((function(e){return t.has(e)}))){var u=void 0
o&&(u=o.call(e,e._data,t))&&E(u)&&U(e._data,u),s&&!1!==u&&yn.write((function(){return s.call(e,e._data,t)}))}},r=0;r<n.length;r++)i(r)}function i(t){var e=this.$options.computed,i=U({},this._computeds)
for(var r in this._computeds={},e){var o=e[r],s=o.watch,a=o.immediate
s&&(t&&a||n(i,r)&&!q(i[r],this[r]))&&s.call(this,this[r],i[r])}}t.prototype._callHook=function(t){var e=this,n=this.$options[t]
n&&n.forEach((function(t){return t.call(e)}))},t.prototype._callConnected=function(){this._connected||(this._data={},this._computeds={},this._initProps(),this._callHook("beforeConnect"),this._connected=!0,this._initEvents(),this._initObservers(),this._callHook("connected"),this._callUpdate())},t.prototype._callDisconnected=function(){this._connected&&(this._callHook("beforeDisconnect"),this._disconnectObservers(),this._unbindEvents(),this._callHook("disconnected"),this._connected=!1,delete this._watch)},t.prototype._callUpdate=function(t){var n=this
void 0===t&&(t="update"),this._connected&&("update"!==t&&"resize"!==t||this._callWatches(),this.$options.update&&(this._updates||(this._updates=new Set,yn.read((function(){n._connected&&e.call(n,n._updates),delete n._updates}))),this._updates.add(t.type||t)))},t.prototype._callWatches=function(){var t=this
if(!this._watch){var e=!n(this,"_watch")
this._watch=yn.read((function(){t._connected&&i.call(t,e),t._watch=null}))}}}(ri),function(t){var e=0
function i(t,e){var n={},i=t.args
void 0===i&&(i=[])
var o=t.props
void 0===o&&(o={})
var a=t.el
if(!o)return n
for(var u in o){var l=r(u),f=ut(a,l)
B(f)||(f=o[u]===Boolean&&""===f||c(o[u],f),("target"!==l||f&&!h(f,"_"))&&(n[u]=f))}var d=Nn(ut(a,e),i)
for(var p in d){var v=s(p)
void 0!==o[v]&&(n[v]=c(o[v],d[p]))}return n}function o(t,e,i){Object.defineProperty(t,e,{enumerable:!0,get:function(){var r=t._computeds,o=t.$props,s=t.$el
return n(r,e)||(r[e]=(i.get||i).call(t,o,s)),r[e]},set:function(n){var r=t._computeds
r[e]=i.set?i.set.call(t,n):n,B(r[e])&&delete r[e]}})}function a(t,e,n){E(e)||(e={name:n,handler:e})
var i=e.name,r=e.el,o=e.handler,s=e.capture,u=e.passive,c=e.delegate,l=e.filter,h=e.self
r=k(r)?r.call(t):r||t.$el,x(r)?r.forEach((function(i){return a(t,U({},e,{el:i}),n)})):!r||l&&!l.call(t)||t._events.push(Jt(r,i,c?O(c)?c:c.call(t):null,O(o)?t[o]:o.bind(t),{passive:u,capture:s,self:h}))}function u(t,e){return t.every((function(t){return!t||!n(t,e)}))}function c(t,e){return t===Boolean?z(e):t===Number?H(e):"list"===t?function(t){return x(t)?t:O(t)?t.split(/,(?![^(]*\))/).map((function(t){return M(t)?H(t):z(t.trim())})):[t]}(e):t?t(e):e}function l(t){var e=t.$name,n=t.$options,o=t.$props,a=n.attrs,u=n.props,c=n.el
if(u&&!1!==a){var l=x(a)?a:Object.keys(u),h=l.map((function(t){return r(t)})).concat(e),f=new MutationObserver((function(r){var a=i(n,e)
r.some((function(t){var n=t.attributeName,i=n.replace("data-","")
return(i===e?l:[s(i),s(n)]).some((function(t){return!B(a[t])&&a[t]!==o[t]}))}))&&t.$reset()}))
return f.observe(c,{attributes:!0,attributeFilter:h.concat(h.map((function(t){return"data-"+t})))}),f}}t.prototype._init=function(t){(t=t||{}).data=function(t,e){var n=t.data,i=e.args,r=e.props
if(void 0===r&&(r={}),n=x(n)?P(i)?void 0:n.slice(0,i.length).reduce((function(t,e,n){return E(e)?U(t,e):t[i[n]]=e,t}),{}):n,n)for(var o in n)B(n[o])?delete n[o]:n[o]=r[o]?c(r[o],n[o]):n[o]
return n}(t,this.constructor.options),this.$options=_n(this.constructor.options,t,this),this.$el=null,this.$props={},this._uid=e++,this._initData(),this._initMethods(),this._initComputeds(),this._callHook("created"),t.el&&this.$mount(t.el)},t.prototype._initData=function(){var t=this.$options.data
for(var e in void 0===t&&(t={}),t)this.$props[e]=this[e]=t[e]},t.prototype._initMethods=function(){var t=this.$options.methods
if(t)for(var e in t)this[e]=t[e].bind(this)},t.prototype._initComputeds=function(){var t=this.$options.computed
if(this._computeds={},t)for(var e in t)o(this,e,t[e])},t.prototype._initProps=function(t){var e
for(e in t=t||i(this.$options,this.$name))B(t[e])||(this.$props[e]=t[e])
var n=[this.$options.computed,this.$options.methods]
for(e in this.$props)e in t&&u(n,e)&&(this[e]=this.$props[e])},t.prototype._initEvents=function(){var t=this
this._events=[]
var e=this.$options.events
e&&e.forEach((function(e){if(n(e,"handler"))a(t,e)
else for(var i in e)a(t,e[i],i)}))},t.prototype._unbindEvents=function(){this._events.forEach((function(t){return t()})),delete this._events},t.prototype._initObservers=function(){var t,e,n
this._observers=[(t=this,e=t.$options.el,n=new MutationObserver((function(){return t.$emit()})),n.observe(e,{childList:!0,subtree:!0}),n),l(this)]},t.prototype._disconnectObservers=function(){this._observers.forEach((function(t){return t&&t.disconnect()}))}}(ri),function(t){var e=t.data,n={}
t.component=function(e,i){var o=r(e)
if(e=s(o),!i)return E(n[e])&&(n[e]=t.extend(n[e])),n[e]
t[e]=function(n,i){for(var r=arguments.length,o=Array(r);r--;)o[r]=arguments[r]
var s=t.component(e)
return s.options.functional?new s({data:E(n)?n:[].concat(o)}):n?Pe(n).map(a)[0]:a(n)
function a(n){var r=t.getComponent(n,e)
if(r){if(!i)return r
r.$destroy()}return new s({el:n,data:i})}}
var a=E(i)?U({},i):i.options
return a.name=e,a.install&&a.install(t,a,e),t._initialized&&!a.functional&&yn.read((function(){return t[e]("[uk-"+o+"],[data-uk-"+o+"]")})),n[e]=E(i)?a:i},t.getComponents=function(t){return t&&t[e]||{}},t.getComponent=function(e,n){return t.getComponents(e)[n]},t.connect=function(i){if(i[e])for(var r in i[e])i[e][r]._callConnected()
for(var o=0;o<i.attributes.length;o++){var s=ii(i.attributes[o].name)
s&&s in n&&t[s](i)}},t.disconnect=function(t){for(var n in t[e])t[e][n]._callDisconnected()}}(ri),function(t){var e=t.data
t.prototype.$create=function(e,n,i){return t[e](n,i)},t.prototype.$mount=function(t){var n=this.$options.name
t[e]||(t[e]={}),t[e][n]||(t[e][n]=this,this.$el=this.$options.el=this.$options.el||t,Pt(t,document)&&this._callConnected())},t.prototype.$reset=function(){this._callDisconnected(),this._callConnected()},t.prototype.$destroy=function(t){void 0===t&&(t=!1)
var n=this.$options,i=n.el,r=n.name
i&&this._callDisconnected(),this._callHook("destroy"),i&&i[e]&&(delete i[e][r],P(i[e])||delete i[e],t&&Te(this.$el))},t.prototype.$emit=function(t){this._callUpdate(t)},t.prototype.$update=function(e,n){void 0===e&&(e=this.$el),t.update(e,n)},t.prototype.$getComponent=t.getComponent
var n=rt((function(e){return t.prefix+r(e)}))
Object.defineProperties(t.prototype,{$container:Object.getOwnPropertyDescriptor(t,"container"),$name:{get:function(){return n(this.$options.name)}}})}(ri)
var oi={connected:function(){!je(this.$el,this.$name)&&ze(this.$el,this.$name)}},si={props:{cls:Boolean,animation:"list",duration:Number,origin:String,transition:String},data:{cls:!1,animation:[!1],duration:200,origin:!1,transition:"linear",clsEnter:"uk-togglabe-enter",clsLeave:"uk-togglabe-leave",initProps:{overflow:"",height:"",paddingTop:"",paddingBottom:"",marginTop:"",marginBottom:""},hideProps:{overflow:"hidden",height:0,paddingTop:0,paddingBottom:0,marginTop:0,marginBottom:0}},computed:{hasAnimation:function(t){return!!t.animation[0]},hasTransition:function(t){var e=t.animation
return this.hasAnimation&&!0===e[0]}},methods:{toggleElement:function(t,e,n){var i=this
return new de((function(r){return de.all(W(t).map((function(t){var r=N(e)?e:!i.isToggled(t)
if(!ee(t,"before"+(r?"show":"hide"),[i]))return de.reject()
var o,s=(k(n)?n:!1!==n&&i.hasAnimation?i.hasTransition?ai(i):(o=i,function(t,e){an.cancel(t)
var n=o.animation,i=o.duration,r=o._toggle
return e?(r(t,!0),an.in(t,n[0],i,o.origin)):an.out(t,n[1]||n[0],i,o.origin).then((function(){return r(t,!1)}))}):i._toggle)(t,r),a=r?i.clsEnter:i.clsLeave
ze(t,a),ee(t,r?"show":"hide",[i])
var u=function(){He(t,a),ee(t,r?"shown":"hidden",[i]),i.$update(t)}
return s?s.then(u,(function(){return He(t,a),de.reject()})):u()}))).then(r,Q)}))},isToggled:function(t){return void 0===t&&(t=this.$el),!!je(t=W(t)[0],this.clsEnter)||!je(t,this.clsLeave)&&(this.cls?je(t,this.cls.split(" ")[0]):$t(t))},_toggle:function(t,e){var n
t&&(e=Boolean(e),this.cls?(n=w(this.cls," ")||e!==je(t,this.cls))&&We(t,this.cls,w(this.cls," ")?void 0:e):(n=e===t.hidden)&&(t.hidden=!e),Pe("[autofocus]",t).some((function(t){return $t(t)?t.focus()||!0:t.blur()})),n&&(ee(t,"toggled",[e,this]),this.$update(t)))}}}
function ai(t){var e=t.isToggled,n=t.duration,i=t.initProps,r=t.hideProps,o=t.transition,s=t._toggle
return function(t,a){var u=nn.inProgress(t),c=t.hasChildNodes?F(Ue(t.firstElementChild,"marginTop"))+F(Ue(t.lastElementChild,"marginBottom")):0,l=$t(t)?dn(t)+(u?0:c):0
nn.cancel(t),e(t)||s(t,!0),dn(t,""),yn.flush()
var h=dn(t)+(u?0:c)
return dn(t,l),(a?nn.start(t,U({},i,{overflow:"hidden",height:h}),Math.round(n*(1-l/h)),o):nn.start(t,r,Math.round(n*(l/h)),o).then((function(){return s(t,!1)}))).then((function(){return Ue(t,i)}))}}var ui={mixins:[oi,si],props:{targets:String,active:null,collapsible:Boolean,multiple:Boolean,toggle:String,content:String,transition:String,offset:Number},data:{targets:"> *",active:!1,animation:[!0],collapsible:!0,multiple:!1,clsOpen:"uk-open",toggle:"> .uk-accordion-title",content:"> .uk-accordion-content",transition:"ease",offset:0},computed:{items:{get:function(t,e){return Pe(t.targets,e)},watch:function(t,e){var n=this
if(t.forEach((function(t){return ci(Me(n.content,t),!je(t,n.clsOpen))})),!e&&!je(t,this.clsOpen)){var i=!1!==this.active&&t[Number(this.active)]||!this.collapsible&&t[0]
i&&this.toggle(i,!1)}},immediate:!0},toggles:function(t){var e=t.toggle
return this.items.map((function(t){return Me(e,t)}))}},events:[{name:"click",delegate:function(){return this.targets+" "+this.$props.toggle},handler:function(t){t.preventDefault(),this.toggle(Ht(this.toggles,t.current))}}],methods:{toggle:function(t,e){var n=this,i=[this.items[it(t,this.items)]],r=At(this.items,"."+this.clsOpen)
this.multiple||w(r,i[0])||(i=i.concat(r)),!this.collapsible&&r.length<2&&!At(i,":not(."+this.clsOpen+")").length||i.forEach((function(t){return n.toggleElement(t,!je(t,n.clsOpen),(function(t,i){We(t,n.clsOpen,i),ot(Me(n.$props.toggle,t),"aria-expanded",i)
var r=Me((t._wrapper?"> * ":"")+n.content,t)
if(!1!==e&&n.hasTransition)return t._wrapper||(t._wrapper=Ie(r,"<div"+(i?" hidden":"")+">")),ci(r,!1),ai(n)(t._wrapper,i).then((function(){if(ci(r,!i),delete t._wrapper,Ae(r),i){var e=Me(n.$props.toggle,t)
Rn(e)||qn(e,{offset:n.offset})}}))
ci(r,!i)}))}))}}}
function ci(t,e){t&&(t.hidden=e)}var li,hi={mixins:[oi,si],args:"animation",props:{close:String},data:{animation:[!0],selClose:".uk-alert-close",duration:150,hideProps:U({opacity:0},si.data.hideProps)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.close()}}],methods:{close:function(){var t=this
this.toggleElement(this.$el).then((function(){return t.$destroy(!0)}))}}},fi={args:"autoplay",props:{automute:Boolean,autoplay:Boolean},data:{automute:!1,autoplay:!0},computed:{inView:function(t){return"inview"===t.autoplay}},connected:function(){this.inView&&!st(this.$el,"preload")&&(this.$el.preload="none"),this.automute&&Mn(this.$el)},update:{read:function(){return!!Pn(this.$el)&&{visible:$t(this.$el)&&"hidden"!==Ue(this.$el,"visibility"),inView:this.inView&&Rn(this.$el)}},write:function(t){var e=t.visible,n=t.inView
!e||this.inView&&!n?Dn(this.$el):(!0===this.autoplay||this.inView&&n)&&On(this.$el)},events:["resize","scroll"]}},di={mixins:[fi],props:{width:Number,height:Number},data:{automute:!0},update:{read:function(){var t=this.$el,e=function(t){for(;t=Ct(t);)if("static"!==Ue(t,"position"))return t}(t)||Ct(t),n=e.offsetHeight,i=e.offsetWidth,r=nt.cover({width:this.width||t.naturalWidth||t.videoWidth||t.clientWidth,height:this.height||t.naturalHeight||t.videoHeight||t.clientHeight},{width:i+(i%2?1:0),height:n+(n%2?1:0)})
return!(!r.width||!r.height)&&r},write:function(t){var e=t.height,n=t.width
Ue(this.$el,{height:e,width:n})},events:["resize"]}},pi={props:{container:Boolean},data:{container:!0},computed:{container:function(t){var e=t.container
return!0===e&&this.$container||e&&Me(e)}}},vi={props:{pos:String,offset:null,flip:Boolean,clsPos:String},data:{pos:"bottom-"+(ht?"right":"left"),flip:!0,offset:!1,clsPos:""},computed:{pos:function(t){return t.pos.split("-").concat("center").slice(0,2)},dir:function(){return this.pos[0]},align:function(){return this.pos[1]}},methods:{positionAt:function(t,e,n){Fe(t,this.clsPos+"-(top|bottom|left|right)(-[a-z]+)?")
var i=this.offset,r=this.getAxis()
if(!M(i)){var o=Me(i)
i=o?ln(o)["x"===r?"left":"top"]-ln(e)["x"===r?"right":"bottom"]:0}var s=Jn(t,e,"x"===r?gn(this.dir)+" "+this.align:this.align+" "+gn(this.dir),"x"===r?this.dir+" "+this.align:this.align+" "+this.dir,"x"===r?""+("left"===this.dir?-i:i):" "+("top"===this.dir?-i:i),null,this.flip,n).target,a=s.x,u=s.y
this.dir="x"===r?a:u,this.align="x"===r?u:a,We(t,this.clsPos+"-"+this.dir+"-"+this.align,!1===this.offset)},getAxis:function(){return"top"===this.dir||"bottom"===this.dir?"y":"x"}}},mi={mixins:[pi,vi,si],args:"pos",props:{mode:"list",toggle:Boolean,boundary:Boolean,boundaryAlign:Boolean,delayShow:Number,delayHide:Number,clsDrop:String},data:{mode:["click","hover"],toggle:"- *",boundary:!0,boundaryAlign:!1,delayShow:0,delayHide:800,clsDrop:!1,animation:["uk-animation-fade"],cls:"uk-open",container:!1},computed:{boundary:function(t,e){var n=t.boundary
return!0===n?window:Ft(n,e)},clsDrop:function(t){return t.clsDrop||"uk-"+this.$options.name},clsPos:function(){return this.clsDrop}},created:function(){this.tracker=new En},connected:function(){ze(this.$el,this.clsDrop),this.toggle&&!this.target&&(this.target=this.$create("toggle",Ft(this.toggle,this.$el),{target:this.$el,mode:this.mode}).$el,ot(this.target,"aria-haspopup",!0))},disconnected:function(){this.isActive()&&(li=null)},events:[{name:"click",delegate:function(){return"."+this.clsDrop+"-close"},handler:function(t){t.preventDefault(),this.hide(!1)}},{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.defaultPrevented,n=t.current.hash
e||!n||Pt(n,this.$el)||this.hide(!1)}},{name:"beforescroll",handler:function(){this.hide(!1)}},{name:"toggle",self:!0,handler:function(t,e){t.preventDefault(),this.isToggled()?this.hide(!1):this.show(e.$el,!1)}},{name:"toggleshow",self:!0,handler:function(t,e){t.preventDefault(),this.show(e.$el)}},{name:"togglehide",self:!0,handler:function(t){t.preventDefault(),Ot(this.$el,":focus,:hover")||this.hide()}},{name:wt+" focusin",filter:function(){return w(this.mode,"hover")},handler:function(t){he(t)||this.clearTimers()}},{name:bt+" focusout",filter:function(){return w(this.mode,"hover")},handler:function(t){!he(t)&&t.relatedTarget&&this.hide()}},{name:"toggled",self:!0,handler:function(t,e){e&&(this.clearTimers(),this.position())}},{name:"show",self:!0,handler:function(){var t=this
li=this,this.tracker.init(),te(this.$el,"hide",Jt(document,vt,(function(e){var n=e.target
return!Pt(n,t.$el)&&te(document,gt+" "+yt+" scroll",(function(e){var i=e.defaultPrevented,r=e.type,o=e.target
i||r!==gt||n!==o||t.target&&Pt(n,t.target)||t.hide(!1)}),!0)})),{self:!0}),te(this.$el,"hide",Jt(document,"keydown",(function(e){27===e.keyCode&&t.hide(!1)})),{self:!0})}},{name:"beforehide",self:!0,handler:function(){this.clearTimers()}},{name:"hide",handler:function(t){var e=t.target
this.$el===e?(li=this.isActive()?null:li,this.tracker.cancel()):li=null===li&&Pt(e,this.$el)&&this.isToggled()?this:li}}],update:{write:function(){this.isToggled()&&!je(this.$el,this.clsEnter)&&this.position()},events:["resize"]},methods:{show:function(t,e){var n=this
if(void 0===t&&(t=this.target),void 0===e&&(e=!0),this.isToggled()&&t&&this.target&&t!==this.target&&this.hide(!1),this.target=t,this.clearTimers(),!this.isActive()){if(li){if(e&&li.isDelaying)return void(this.showTimer=setTimeout(this.show,10))
for(var i;li&&i!==li&&!Pt(this.$el,li.$el);)i=li,li.hide(!1)}this.container&&Ct(this.$el)!==this.container&&ke(this.container,this.$el),this.showTimer=setTimeout((function(){return n.toggleElement(n.$el,!0)}),e&&this.delayShow||0)}},hide:function(t){var e=this
void 0===t&&(t=!0)
var n,i,r=function(){return e.toggleElement(e.$el,!1,!1)}
this.clearTimers(),this.isDelaying=(n=this.$el,i=[],De(n,(function(t){return"static"!==Ue(t,"position")&&i.push(t)})),i).some((function(t){return e.tracker.movesTo(t)})),t&&this.isDelaying?this.hideTimer=setTimeout(this.hide,50):t&&this.delayHide?this.hideTimer=setTimeout(r,this.delayHide):r()},clearTimers:function(){clearTimeout(this.showTimer),clearTimeout(this.hideTimer),this.showTimer=null,this.hideTimer=null,this.isDelaying=!1},isActive:function(){return li===this},position:function(){He(this.$el,this.clsDrop+"-stack"),We(this.$el,this.clsDrop+"-boundary",this.boundaryAlign)
var t=ln(this.boundary),e=this.boundaryAlign?t:ln(this.target)
if("justify"===this.align){var n="y"===this.getAxis()?"width":"height"
Ue(this.$el,n,e[n])}else this.boundary&&this.$el.offsetWidth>Math.max(t.right-e.left,e.right-t.left)&&ze(this.$el,this.clsDrop+"-stack")
this.positionAt(this.$el,this.boundaryAlign?this.boundary:this.target,this.boundary)}}},gi={mixins:[oi],args:"target",props:{target:Boolean},data:{target:!1},computed:{input:function(t,e){return Me(St,e)},state:function(){return this.input.nextElementSibling},target:function(t,e){var n=t.target
return n&&(!0===n&&Ct(this.input)===e&&this.input.nextElementSibling||Ft(n,e))}},update:function(){var t=this.target,e=this.input
if(t){var n,i=Et(t)?"value":"textContent",r=t[i],o=e.files&&e.files[0]?e.files[0].name:Ot(e,"select")&&(n=Pe("option",e).filter((function(t){return t.selected}))[0])?n.textContent:e.value
r!==o&&(t[i]=o)}},events:[{name:"change",handler:function(){this.$update()}},{name:"reset",el:function(){return Mt(this.$el,"form")},handler:function(){this.$update()}}]},wi={update:{read:function(t){var e=Rn(this.$el)
if(!e||t.isInView===e)return!1
t.isInView=e},write:function(){this.$el.src=""+this.$el.src},events:["scroll","resize"]}},bi={props:{margin:String,firstColumn:Boolean},data:{margin:"uk-margin-small-top",firstColumn:"uk-first-column"},update:{read:function(){var t=yi(this.$el.children)
return{rows:t,columns:xi(t)}},write:function(t){for(var e=t.columns,n=t.rows,i=0;i<n.length;i++)for(var r=0;r<n[i].length;r++)We(n[i][r],this.margin,0!==i),We(n[i][r],this.firstColumn,!!~e[0].indexOf(n[i][r]))},events:["resize"]}}
function yi(t){return ki(t,"top","bottom")}function xi(t){for(var e=[],n=0;n<t.length;n++)for(var i=ki(t[n],"left","right"),r=0;r<i.length;r++)e[r]=e[r]?e[r].concat(i[r]):i[r]
return ht?e.reverse():e}function ki(t,e,n){for(var i=[[]],r=0;r<t.length;r++){var o=t[r]
if($t(o))for(var s=$i(o),a=i.length-1;a>=0;a--){var u=i[a]
if(!u[0]){u.push(o)
break}var c=void 0
if(u[0].offsetParent===o.offsetParent?c=$i(u[0]):(s=$i(o,!0),c=$i(u[0],!0)),s[e]>=c[n]-1&&s[e]!==c[e]){i.push([o])
break}if(s[n]-1>c[e]||s[e]===c[e]){u.push(o)
break}if(0===a){i.unshift([o])
break}}}return i}function $i(t,e){var n
void 0===e&&(e=!1)
var i=t.offsetTop,r=t.offsetLeft,o=t.offsetHeight,s=t.offsetWidth
return e&&(i=(n=fn(t))[0],r=n[1]),{top:i,left:r,bottom:i+o,right:r+s}}var Si={extends:bi,mixins:[oi],name:"grid",props:{masonry:Boolean,parallax:Number},data:{margin:"uk-grid-margin",clsStack:"uk-grid-stack",masonry:!1,parallax:0},connected:function(){this.masonry&&ze(this.$el,"uk-flex-top uk-flex-wrap-top")},update:[{write:function(t){var e=t.columns
We(this.$el,this.clsStack,e.length<2)},events:["resize"]},{read:function(t){var e=t.columns,n=t.rows
if(!e.length||!this.masonry&&!this.parallax||Ei(this.$el))return t.translates=!1,!1
var i=!1,r=zt(this.$el),o=function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e.offsetHeight}),0)}))}(e),s=function(t,e){var n=t.filter((function(t){return je(t,e)}))[0]
return F(n?Ue(n,"marginTop"):Ue(t[0],"paddingLeft"))}(r,this.margin)*(n.length-1),a=Math.max.apply(Math,o)+s
this.masonry&&(i=function(t,e){var n=t.map((function(t){return Math.max.apply(Math,t.map((function(t){return t.offsetHeight})))}))
return e.map((function(t){var e=0
return t.map((function(i,r){return e+=r?n[r-1]-t[r-1].offsetHeight:0}))}))}(n,e=e.map((function(t){return K(t,"offsetTop")}))))
var u=Math.abs(this.parallax)
return u&&(u=o.reduce((function(t,e,n){return Math.max(t,e+s+(n%2?u:u/8)-a)}),0)),{padding:u,columns:e,translates:i,height:i?a:""}},write:function(t){var e=t.height,n=t.padding
Ue(this.$el,"paddingBottom",n||""),!1!==e&&Ue(this.$el,"height",e)},events:["resize"]},{read:function(t){return t.height,!Ei(this.$el)&&{scrolled:!!this.parallax&&Gn(this.$el)*Math.abs(this.parallax)}},write:function(t){var e=t.columns,n=t.scrolled,i=t.translates;(!1!==n||i)&&e.forEach((function(t,e){return t.forEach((function(t,r){return Ue(t,"transform",n||i?"translateY("+((i&&-i[e][r])+(n?e%2?n:n/8:0))+"px)":"")}))}))},events:["scroll","resize"]}]}
function Ei(t){return zt(t).some((function(t){return"absolute"===Ue(t,"position")}))}var Ti=lt?{props:{selMinHeight:String},data:{selMinHeight:!1,forceHeight:!1},computed:{elements:function(t,e){var n=t.selMinHeight
return n?Pe(n,e):[e]}},update:[{read:function(){Ue(this.elements,"height","")},order:-5,events:["resize"]},{write:function(){var t=this
this.elements.forEach((function(e){var n=F(Ue(e,"minHeight"))
n&&(t.forceHeight||Math.round(n+mn(e,"height","content-box"))>=e.offsetHeight)&&Ue(e,"height",n)}))},order:5,events:["resize"]}]}:{},Ii={mixins:[Ti],args:"target",props:{target:String,row:Boolean},data:{target:"> *",row:!0,forceHeight:!0},computed:{elements:function(t,e){return Pe(t.target,e)}},update:{read:function(){return{rows:(this.row?yi(this.elements):[this.elements]).map(Ci)}},write:function(t){t.rows.forEach((function(t){var e=t.heights
return t.elements.forEach((function(t,n){return Ue(t,"minHeight",e[n])}))}))},events:["resize"]}}
function Ci(t){if(t.length<2)return{heights:[""],elements:t}
var e=t.map(Ai),n=Math.max.apply(Math,e),i=t.some((function(t){return t.style.minHeight})),r=t.some((function(t,i){return!t.style.minHeight&&e[i]<n}))
return i&&r&&(Ue(t,"minHeight",""),e=t.map(Ai),n=Math.max.apply(Math,e)),{heights:e=t.map((function(t,i){return e[i]===n&&F(t.style.minHeight).toFixed(2)!==n.toFixed(2)?"":n})),elements:t}}function Ai(t){var e=!1
$t(t)||(e=t.style.display,Ue(t,"display","block","important"))
var n=cn(t).height-mn(t,"height","content-box")
return!1!==e&&Ue(t,"display",e),n}var _i={mixins:[Ti],props:{expand:Boolean,offsetTop:Boolean,offsetBottom:Boolean,minHeight:Number},data:{expand:!1,offsetTop:!1,offsetBottom:!1,minHeight:0},update:{read:function(t){var e=t.minHeight
if(!$t(this.$el))return!1
var n="",i=mn(this.$el,"height","content-box")
if(this.expand)n=dn(window)-(cn(document.documentElement).height-cn(this.$el).height)-i||""
else{if(n="calc(100vh",this.offsetTop){var r=ln(this.$el).top
n+=r>0&&r<dn(window)/2?" - "+r+"px":""}!0===this.offsetBottom?n+=" - "+cn(this.$el.nextElementSibling).height+"px":M(this.offsetBottom)?n+=" - "+this.offsetBottom+"vh":this.offsetBottom&&d(this.offsetBottom,"px")?n+=" - "+F(this.offsetBottom)+"px":O(this.offsetBottom)&&(n+=" - "+cn(Ft(this.offsetBottom,this.$el)).height+"px"),n+=(i?" - "+i+"px":"")+")"}return{minHeight:n,prev:e}},write:function(t){var e=t.minHeight,n=t.prev
Ue(this.$el,{minHeight:e}),e!==n&&this.$update(this.$el,"resize"),this.minHeight&&F(Ue(this.$el,"minHeight"))<this.minHeight&&Ue(this.$el,"minHeight",this.minHeight)},events:["resize"]}},Ni={args:"src",props:{id:Boolean,icon:String,src:String,style:String,width:Number,height:Number,ratio:Number,class:String,strokeAnimation:Boolean,focusable:Boolean,attributes:"list"},data:{ratio:1,include:["style","class","focusable"],class:"",strokeAnimation:!1},beforeConnect:function(){this.class+=" uk-svg"},connected:function(){var t,e=this
!this.icon&&w(this.src,"#")&&(t=this.src.split("#"),this.src=t[0],this.icon=t[1]),this.svg=this.getSvg().then((function(t){if(e._connected){var n=function(t,e){if(kt(e)||"CANVAS"===e.tagName){e.hidden=!0
var n=e.nextElementSibling
return Bi(t,n)?n:Se(e,t)}var i=e.lastElementChild
return Bi(t,i)?i:ke(e,t)}(t,e.$el)
return e.svgEl&&n!==e.svgEl&&Te(e.svgEl),e.applyAttributes(n,t),e.$emit(),e.svgEl=n}}),Q)},disconnected:function(){var t=this
this.svg.then((function(e){t._connected||(kt(t.$el)&&(t.$el.hidden=!1),Te(e),t.svgEl=null)})),this.svg=null},update:{read:function(){return!!(this.strokeAnimation&&this.svgEl&&$t(this.svgEl))},write:function(){var t,e;(e=Pi(t=this.svgEl))&&t.style.setProperty("--uk-animation-stroke",e)},type:["resize"]},methods:{getSvg:function(){var t=this
return Oi(this.src).then((function(e){return function(t,e){return e&&w(t,"<symbol")&&(t=function(t,e){var n
if(!Mi[t])for(Mi[t]={},Di.lastIndex=0;n=Di.exec(t);)Mi[t][n[3]]='<svg xmlns="http://www.w3.org/2000/svg"'+n[1]+"svg>"
return Mi[t][e]}(t,e)||t),(t=Me(t.substr(t.indexOf("<svg"))))&&t.hasChildNodes()&&t}(e,t.icon)||de.reject("SVG not found.")}))},applyAttributes:function(t,e){var n=this
for(var i in this.$options.props)w(this.include,i)&&i in this&&ot(t,i,this[i])
for(var r in this.attributes){var o=this.attributes[r].split(":",2),s=o[0],a=o[1]
ot(t,s,a)}this.id||at(t,"id")
var u=["width","height"],c=u.map((function(t){return n[t]}))
c.some((function(t){return t}))||(c=u.map((function(t){return ot(e,t)})))
var l=ot(e,"viewBox")
l&&!c.some((function(t){return t}))&&(c=l.split(" ").slice(2)),c.forEach((function(e,i){return ot(t,u[i],F(e)*n.ratio||null)}))}}},Oi=rt((function(t){return new de((function(e,n){t?h(t,"data:")?e(decodeURIComponent(t.split(",")[1])):we(t).then((function(t){return e(t.response)}),(function(){return n("SVG not found.")})):n()}))})),Di=/<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g,Mi={}
function Pi(t){return Math.ceil(Math.max.apply(Math,[0].concat(Pe("[stroke]",t).map((function(t){try{return t.getTotalLength()}catch(t){return 0}})))))}function Bi(t,e){return zi(t)&&zi(e)&&Hi(t)===Hi(e)}function zi(t){return t&&"svg"===t.tagName}function Hi(t){return(t.innerHTML||(new XMLSerializer).serializeToString(t).replace(/<svg.*?>(.*?)<\/svg>/g,"$1")).replace(/\s/g,"")}var Fi={spinner:'<svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" cx="15" cy="15" r="14"/></svg>',totop:'<svg width="18" height="10" viewBox="0 0 18 10" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 9 9 1 17 9 "/></svg>',marker:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="4" width="1" height="11"/><rect x="4" y="9" width="11" height="1"/></svg>',"close-icon":'<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"/><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"/></svg>',"close-large":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"/><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"/></svg>',"navbar-toggle-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><rect y="9" width="20" height="2"/><rect y="3" width="20" height="2"/><rect y="15" width="20" height="2"/></svg>',"overlay-icon":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><rect x="19" y="0" width="1" height="40"/><rect x="0" y="19" width="40" height="1"/></svg>',"pagination-next":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="1 1 6 6 1 11"/></svg>',"pagination-previous":'<svg width="7" height="12" viewBox="0 0 7 12" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.2" points="6 1 1 6 6 11"/></svg>',"search-icon":'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"/><path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"/></svg>',"search-large":'<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.8" cx="17.5" cy="17.5" r="16.5"/><line fill="none" stroke="#000" stroke-width="1.8" x1="38" y1="39" x2="29" y2="30"/></svg>',"search-navbar":'<svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle fill="none" stroke="#000" stroke-width="1.1" cx="10.5" cy="10.5" r="9.5"/><line fill="none" stroke="#000" stroke-width="1.1" x1="23" y1="23" x2="17" y2="17"/></svg>',"slidenav-next":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="1.225,23 12.775,12 1.225,1 "/></svg>',"slidenav-next-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="4.002,38.547 22.527,20.024 4,1.5 "/></svg>',"slidenav-previous":'<svg width="14" height="24" viewBox="0 0 14 24" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="1.4" points="12.775,1 1.225,12 12.775,23 "/></svg>',"slidenav-previous-large":'<svg width="25" height="40" viewBox="0 0 25 40" xmlns="http://www.w3.org/2000/svg"><polyline fill="none" stroke="#000" stroke-width="2" points="20.527,1.5 2,20.024 20.525,38.547 "/></svg>'},Li={install:function(t){t.icon.add=function(e,n){var i,r=O(e)?((i={})[e]=n,i):e
X(r,(function(t,e){Fi[e]=t,delete Gi[e]})),t._initialized&&De(document.body,(function(e){return X(t.getComponents(e),(function(t){t.$options.isIcon&&t.icon in r&&t.$reset()}))}))}},extends:Ni,args:"icon",props:["icon"],data:{include:["focusable"]},isIcon:!0,beforeConnect:function(){ze(this.$el,"uk-icon")},methods:{getSvg:function(){var t=function(t){return Fi[t]?(Gi[t]||(Gi[t]=Me((Fi[function(t){return ht?G(G(t,"left","right"),"previous","next"):t}(t)]||Fi[t]).trim())),Gi[t].cloneNode(!0)):null}(this.icon)
return t?de.resolve(t):de.reject("Icon not found.")}}},ji={args:!1,extends:Li,data:function(t){return{icon:r(t.constructor.options.name)}},beforeConnect:function(){ze(this.$el,this.$name)}},Wi={extends:ji,beforeConnect:function(){ze(this.$el,"uk-slidenav")},computed:{icon:function(t,e){var n=t.icon
return je(e,"uk-slidenav-large")?n+"-large":n}}},Ri={extends:ji,computed:{icon:function(t,e){var n=t.icon
return je(e,"uk-search-icon")&&Bt(e,".uk-search-large").length?"search-large":Bt(e,".uk-search-navbar").length?"search-navbar":n}}},Vi={extends:ji,computed:{icon:function(){return"close-"+(je(this.$el,"uk-close-large")?"large":"icon")}}},qi={extends:ji,connected:function(){var t=this
this.svg.then((function(e){return e&&1!==t.ratio&&Ue(Me("circle",e),"strokeWidth",1/t.ratio)}))}},Gi={},Ui={args:"dataSrc",props:{dataSrc:String,dataSrcset:Boolean,sizes:String,width:Number,height:Number,offsetTop:String,offsetLeft:String,target:String},data:{dataSrc:"",dataSrcset:!1,sizes:!1,width:!1,height:!1,offsetTop:"50vh",offsetLeft:"50vw",target:!1},computed:{cacheKey:function(t){var e=t.dataSrc
return this.$name+"."+e},width:function(t){var e=t.width,n=t.dataWidth
return e||n},height:function(t){var e=t.height,n=t.dataHeight
return e||n},sizes:function(t){var e=t.sizes,n=t.dataSizes
return e||n},isImg:function(t,e){return tr(e)},target:{get:function(t){var e=t.target
return[this.$el].concat(Lt(e,this.$el))},watch:function(){this.observe()}},offsetTop:function(t){return wn(t.offsetTop,"height")},offsetLeft:function(t){return wn(t.offsetLeft,"width")}},connected:function(){window.IntersectionObserver?(nr[this.cacheKey]?Yi(this.$el,nr[this.cacheKey],this.dataSrcset,this.sizes):this.isImg&&this.width&&this.height&&Yi(this.$el,function(t,e,n){var i
return n&&(t=(i=nt.ratio({width:t,height:e},"width",wn(Ki(n)))).width,e=i.height),'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="'+t+'" height="'+e+'"></svg>'}(this.width,this.height,this.sizes)),this.observer=new IntersectionObserver(this.load,{rootMargin:this.offsetTop+"px "+this.offsetLeft+"px"}),requestAnimationFrame(this.observe)):Yi(this.$el,this.dataSrc,this.dataSrcset,this.sizes)},disconnected:function(){this.observer&&this.observer.disconnect()},update:{read:function(t){var e=this,n=t.image
return!!this.observer&&(n||"complete"!==document.readyState||this.load(this.observer.takeRecords()),!this.isImg&&void(n&&n.then((function(t){return t&&""!==t.currentSrc&&Yi(e.$el,er(t))}))))},write:function(t){if(this.dataSrcset&&1!==window.devicePixelRatio){var e=Ue(this.$el,"backgroundSize");(e.match(/^(auto\s?)+$/)||F(e)===t.bgSize)&&(t.bgSize=(n=this.dataSrcset,i=this.sizes,r=wn(Ki(i)),(o=(n.match(Qi)||[]).map(F).sort((function(t,e){return t-e}))).filter((function(t){return t>=r}))[0]||o.pop()||""),Ue(this.$el,"backgroundSize",t.bgSize+"px"))}var n,i,r,o},events:["resize"]},methods:{load:function(t){var e=this
t.some((function(t){return B(t.isIntersecting)||t.isIntersecting}))&&(this._data.image=be(this.dataSrc,this.dataSrcset,this.sizes).then((function(t){return Yi(e.$el,er(t),t.srcset,t.sizes),nr[e.cacheKey]=er(t),t}),(function(t){return ee(e.$el,new t.constructor(t.type,t))})),this.observer.disconnect())},observe:function(){var t=this
this._connected&&!this._data.image&&this.target.forEach((function(e){return t.observer.observe(e)}))}}}
function Yi(t,e,n,i){if(tr(t)){var r=function(e,n){return n&&n!==t[e]&&(t[e]=n)}
r("sizes",i),r("srcset",n),r("src",e)}else e&&!w(t.style.backgroundImage,e)&&(Ue(t,"backgroundImage","url("+Zt(e)+")"),ee(t,ne("load",!1)))}var Xi=/\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g
function Ki(t){var e,n
for(Xi.lastIndex=0;e=Xi.exec(t);)if(!e[1]||window.matchMedia(e[1]).matches){e=h(n=e[2],"calc")?n.slice(5,-1).replace(Zi,(function(t){return wn(t)})).replace(/ /g,"").match(Ji).reduce((function(t,e){return t+ +e}),0):n
break}return e||"100vw"}var Zi=/\d+(?:\w+|%)/g,Ji=/[+-]?(\d+)/g,Qi=/\s+\d+w\s*(?:,|$)/g
function tr(t){return"IMG"===t.tagName}function er(t){return t.currentSrc||t.src}var nr,ir="__test__"
try{(nr=window.sessionStorage||{})[ir]=1,delete nr[ir]}catch(t){nr={}}var rr={props:{media:Boolean},data:{media:!1},computed:{matchMedia:function(){var t=function(t){if(O(t))if("@"===t[0]){var e="breakpoint-"+t.substr(1)
t=F(Je(e))}else if(isNaN(t))return t
return!(!t||isNaN(t))&&"(min-width: "+t+"px)"}(this.media)
return!t||window.matchMedia(t).matches}}},or={mixins:[oi,rr],props:{fill:String},data:{fill:"",clsWrapper:"uk-leader-fill",clsHide:"uk-leader-hide",attrFill:"data-fill"},computed:{fill:function(t){return t.fill||Je("leader-fill-content")}},connected:function(){var t
t=Ce(this.$el,'<span class="'+this.clsWrapper+'">'),this.wrapper=t[0]},disconnected:function(){Ae(this.wrapper.childNodes)},update:{read:function(t){var e=t.changed,n=t.width,i=n
return{width:n=Math.floor(this.$el.offsetWidth/2),fill:this.fill,changed:e||i!==n,hide:!this.matchMedia}},write:function(t){We(this.wrapper,this.clsHide,t.hide),t.changed&&(t.changed=!1,ot(this.wrapper,this.attrFill,new Array(t.width).join(t.fill)))},events:["resize"]}},sr=[],ar={mixins:[oi,pi,si],props:{selPanel:String,selClose:String,escClose:Boolean,bgClose:Boolean,stack:Boolean},data:{cls:"uk-open",escClose:!0,bgClose:!0,overlay:!0,stack:!1},computed:{panel:function(t,e){return Me(t.selPanel,e)},transitionElement:function(){return this.panel},bgClose:function(t){return t.bgClose&&this.panel}},beforeDisconnect:function(){w(sr,this)&&this.toggleElement(this.$el,!1,!1)},events:[{name:"click",delegate:function(){return this.selClose},handler:function(t){t.preventDefault(),this.hide()}},{name:"toggle",self:!0,handler:function(t,e){t.defaultPrevented||(t.preventDefault(),this.isToggled()===w(sr,this)&&this.toggle())}},{name:"beforeshow",self:!0,handler:function(t){if(w(sr,this))return!1
!this.stack&&sr.length?(de.all(sr.map((function(t){return t.hide()}))).then(this.show),t.preventDefault()):sr.push(this)}},{name:"show",self:!0,handler:function(){var t=this,e=document.documentElement
pn(window)>e.clientWidth&&this.overlay&&Ue(document.body,"overflowY","scroll"),this.stack&&Ue(this.$el,"zIndex",F(Ue(this.$el,"zIndex"))+sr.length),ze(e,this.clsPage),this.bgClose&&te(this.$el,"hide",Jt(document,vt,(function(e){var n=e.target
Y(sr)!==t||t.overlay&&!Pt(n,t.$el)||Pt(n,t.panel)||te(document,gt+" "+yt+" scroll",(function(e){var i=e.defaultPrevented,r=e.type,o=e.target
i||r!==gt||n!==o||t.hide()}),!0)})),{self:!0}),this.escClose&&te(this.$el,"hide",Jt(document,"keydown",(function(e){27===e.keyCode&&Y(sr)===t&&t.hide()})),{self:!0})}},{name:"shown",self:!0,handler:function(){It(this.$el)||ot(this.$el,"tabindex","-1"),Me(":focus",this.$el)||this.$el.focus()}},{name:"hidden",self:!0,handler:function(){var t=this
w(sr,this)&&sr.splice(sr.indexOf(this),1),sr.length||Ue(document.body,"overflowY",""),Ue(this.$el,"zIndex",""),sr.some((function(e){return e.clsPage===t.clsPage}))||He(document.documentElement,this.clsPage)}}],methods:{toggle:function(){return this.isToggled()?this.hide():this.show()},show:function(){var t=this
return this.container&&Ct(this.$el)!==this.container?(ke(this.container,this.$el),new de((function(e){return requestAnimationFrame((function(){return t.show().then(e)}))}))):this.toggleElement(this.$el,!0,ur(this))},hide:function(){return this.toggleElement(this.$el,!1,ur(this))}}}
function ur(t){var e=t.transitionElement,n=t._toggle
return function(t,i){return new de((function(r,o){return te(t,"show hide",(function(){t._reject&&t._reject(),t._reject=o,n(t,i)
var s=te(e,"transitionstart",(function(){te(e,"transitionend transitioncancel",r,{self:!0}),clearTimeout(a)}),{self:!0}),a=setTimeout((function(){s(),r()}),V(Ue(e,"transitionDuration")))}))})).then((function(){return delete t._reject}))}}var cr={install:function(t){var e=t.modal
function n(t,n,i,r){n=U({bgClose:!1,escClose:!0,labels:e.labels},n)
var o=e.dialog(t(n),n),s=new pe,a=!1
return Jt(o.$el,"submit","form",(function(t){t.preventDefault(),s.resolve(r&&r(o)),a=!0,o.hide()})),Jt(o.$el,"hide",(function(){return!a&&i(s)})),s.promise.dialog=o,s.promise}e.dialog=function(t,n){var i=e('<div class="uk-modal"> <div class="uk-modal-dialog">'+t+"</div> </div>",n)
return i.show(),Jt(i.$el,"hidden",(function(){return de.resolve().then((function(){return i.$destroy(!0)}))}),{self:!0}),i},e.alert=function(t,e){return n((function(e){var n=e.labels
return'<div class="uk-modal-body">'+(O(t)?t:xe(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-primary uk-modal-close" autofocus>'+n.ok+"</button> </div>"}),e,(function(t){return t.resolve()}))},e.confirm=function(t,e){return n((function(e){var n=e.labels
return'<form> <div class="uk-modal-body">'+(O(t)?t:xe(t))+'</div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+n.cancel+'</button> <button class="uk-button uk-button-primary" autofocus>'+n.ok+"</button> </div> </form>"}),e,(function(t){return t.reject()}))},e.prompt=function(t,e,i){return n((function(n){var i=n.labels
return'<form class="uk-form-stacked"> <div class="uk-modal-body"> <label>'+(O(t)?t:xe(t))+'</label> <input class="uk-input" value="'+(e||"")+'" autofocus> </div> <div class="uk-modal-footer uk-text-right"> <button class="uk-button uk-button-default uk-modal-close" type="button">'+i.cancel+'</button> <button class="uk-button uk-button-primary">'+i.ok+"</button> </div> </form>"}),i,(function(t){return t.resolve(null)}),(function(t){return Me("input",t.$el).value}))},e.labels={ok:"Ok",cancel:"Cancel"}},mixins:[ar],data:{clsPage:"uk-modal-page",selPanel:".uk-modal-dialog",selClose:".uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full"},events:[{name:"show",self:!0,handler:function(){je(this.panel,"uk-margin-auto-vertical")?ze(this.$el,"uk-flex"):Ue(this.$el,"display","block"),dn(this.$el)}},{name:"hidden",self:!0,handler:function(){Ue(this.$el,"display",""),He(this.$el,"uk-flex")}}]},lr={extends:ui,data:{targets:"> .uk-parent",toggle:"> a",content:"> ul"}},hr=".uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle",fr={mixins:[oi,pi,Ti],props:{dropdown:String,mode:"list",align:String,offset:Number,boundary:Boolean,boundaryAlign:Boolean,clsDrop:String,delayShow:Number,delayHide:Number,dropbar:Boolean,dropbarMode:String,dropbarAnchor:Boolean,duration:Number},data:{dropdown:hr,align:ht?"right":"left",clsDrop:"uk-navbar-dropdown",mode:void 0,offset:void 0,delayShow:void 0,delayHide:void 0,boundaryAlign:void 0,flip:"x",boundary:!0,dropbar:!1,dropbarMode:"slide",dropbarAnchor:!1,duration:200,forceHeight:!0,selMinHeight:hr,container:!1},computed:{boundary:function(t,e){var n=t.boundary,i=t.boundaryAlign
return!0===n||i?e:n},dropbarAnchor:function(t,e){return Ft(t.dropbarAnchor,e)},pos:function(t){return"bottom-"+t.align},dropbar:{get:function(t){var e=t.dropbar
return e?(e=this._dropbar||Ft(e,this.$el)||Me("+ .uk-navbar-dropbar",this.$el))||(this._dropbar=Me("<div></div>")):null},watch:function(t){ze(t,"uk-navbar-dropbar")},immediate:!0},dropContainer:function(t,e){return this.container||e},dropdowns:{get:function(t,e){var n=this,i=t.clsDrop,r=Pe("."+i,e)
return this.dropContainer!==e&&Pe("."+i,this.dropContainer).forEach((function(t){var e=n.getDropdown(t)
!w(r,t)&&e&&e.target&&Pt(e.target,n.$el)&&r.push(t)})),r},watch:function(t){var e=this
this.$create("drop",t.filter((function(t){return!e.getDropdown(t)})),U({},this.$props,{boundary:this.boundary,pos:this.pos,offset:this.dropbar||this.offset}))},immediate:!0},toggles:function(t,e){return Pe(t.dropdown,e)}},disconnected:function(){this.dropbar&&Te(this.dropbar),delete this._dropbar},events:[{name:"mouseover focusin",delegate:function(){return this.dropdown},handler:function(t){var e=t.current,n=this.getActive()
n&&w(n.mode,"hover")&&n.target&&!Pt(n.target,e)&&!n.tracker.movesTo(n.$el)&&n.hide(!1)}},{name:"keydown",delegate:function(){return this.dropdown},handler:function(t){var e=t.current,n=t.keyCode,i=this.getActive()
n===vr.DOWN&&st(e,"aria-expanded")&&(t.preventDefault(),i&&i.target===e?pr(i.$el):(e.click(),te(this.dropContainer,"show",(function(t){return pr(t.target)})))),dr(t,this.toggles,i)}},{name:"keydown",el:function(){return this.dropContainer},delegate:function(){return"."+this.clsDrop},handler:function(t){var e=t.current,n=t.keyCode
if(w(this.dropdowns,e)){var i=this.getActive(),r=Pe(Tt,e),o=y(r,(function(t){return Ot(t,":focus")}))
n===vr.UP&&(t.preventDefault(),o>0&&r[o-1].focus()),n===vr.DOWN&&(t.preventDefault(),o<r.length-1&&r[o+1].focus()),n===vr.ESC&&i&&i.target&&i.target.focus(),dr(t,this.toggles,i)}}},{name:"mouseleave",el:function(){return this.dropbar},filter:function(){return this.dropbar},handler:function(){var t=this.getActive()
t&&w(t.mode,"hover")&&!this.dropdowns.some((function(t){return Ot(t,":hover")}))&&t.hide()}},{name:"beforeshow",el:function(){return this.dropContainer},filter:function(){return this.dropbar},handler:function(){Ct(this.dropbar)||Se(this.dropbarAnchor||this.$el,this.dropbar)}},{name:"show",el:function(){return this.dropContainer},filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,i=e.dir
je(n,this.clsDrop)&&("slide"===this.dropbarMode&&ze(this.dropbar,"uk-navbar-dropbar-slide"),this.clsDrop&&ze(n,this.clsDrop+"-dropbar"),"bottom"===i&&this.transitionTo(n.offsetHeight+F(Ue(n,"marginTop"))+F(Ue(n,"marginBottom")),n))}},{name:"beforehide",el:function(){return this.dropContainer},filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el,i=this.getActive()
Ot(this.dropbar,":hover")&&i&&i.$el===n&&t.preventDefault()}},{name:"hide",el:function(){return this.dropContainer},filter:function(){return this.dropbar},handler:function(t,e){var n=e.$el
if(je(n,this.clsDrop)){var i=this.getActive();(!i||i&&i.$el===n)&&this.transitionTo(0)}}}],methods:{getActive:function(){return li&&Pt(li.target,this.$el)&&li},transitionTo:function(t,e){var n=this,i=this.dropbar,r=$t(i)?dn(i):0
return Ue(e=r<t&&e,"clip","rect(0,"+e.offsetWidth+"px,"+r+"px,0)"),dn(i,r),nn.cancel([e,i]),de.all([nn.start(i,{height:t},this.duration),nn.start(e,{clip:"rect(0,"+e.offsetWidth+"px,"+t+"px,0)"},this.duration)]).catch(Q).then((function(){Ue(e,{clip:""}),n.$update(i)}))},getDropdown:function(t){return this.$getComponent(t,"drop")||this.$getComponent(t,"dropdown")}}}
function dr(t,e,n){var i=t.current,r=t.keyCode,o=n&&n.target||i,s=e.indexOf(o)
r===vr.LEFT&&s>0&&(n&&n.hide(!1),e[s-1].focus()),r===vr.RIGHT&&s<e.length-1&&(n&&n.hide(!1),e[s+1].focus()),r===vr.TAB&&(o.focus(),n&&n.hide(!1))}function pr(t){if(!Me(":focus",t)){var e=Me(Tt,t)
e&&e.focus()}}var vr={TAB:9,ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40},mr={mixins:[ar],args:"mode",props:{mode:String,flip:Boolean,overlay:Boolean},data:{mode:"slide",flip:!1,overlay:!1,clsPage:"uk-offcanvas-page",clsContainer:"uk-offcanvas-container",selPanel:".uk-offcanvas-bar",clsFlip:"uk-offcanvas-flip",clsContainerAnimation:"uk-offcanvas-container-animation",clsSidebarAnimation:"uk-offcanvas-bar-animation",clsMode:"uk-offcanvas",clsOverlay:"uk-offcanvas-overlay",selClose:".uk-offcanvas-close",container:!1},computed:{clsFlip:function(t){var e=t.flip,n=t.clsFlip
return e?n:""},clsOverlay:function(t){var e=t.overlay,n=t.clsOverlay
return e?n:""},clsMode:function(t){var e=t.mode
return t.clsMode+"-"+e},clsSidebarAnimation:function(t){var e=t.mode,n=t.clsSidebarAnimation
return"none"===e||"reveal"===e?"":n},clsContainerAnimation:function(t){var e=t.mode,n=t.clsContainerAnimation
return"push"!==e&&"reveal"!==e?"":n},transitionElement:function(t){return"reveal"===t.mode?Ct(this.panel):this.panel}},update:{read:function(){this.isToggled()&&!$t(this.$el)&&this.hide()},events:["resize"]},events:[{name:"click",delegate:function(){return'a[href^="#"]'},handler:function(t){var e=t.current.hash
!t.defaultPrevented&&e&&Me(e,document.body)&&this.hide()}},{name:"touchstart",passive:!0,el:function(){return this.panel},handler:function(t){var e=t.targetTouches
1===e.length&&(this.clientY=e[0].clientY)}},{name:"touchmove",self:!0,passive:!1,filter:function(){return this.overlay},handler:function(t){t.cancelable&&t.preventDefault()}},{name:"touchmove",passive:!1,el:function(){return this.panel},handler:function(t){if(1===t.targetTouches.length){var e=t.targetTouches[0].clientY-this.clientY,n=this.panel,i=n.scrollTop,r=n.scrollHeight,o=n.clientHeight;(o>=r||0===i&&e>0||r-i<=o&&e<0)&&t.cancelable&&t.preventDefault()}}},{name:"show",self:!0,handler:function(){"reveal"!==this.mode||je(Ct(this.panel),this.clsMode)||(Ie(this.panel,"<div>"),ze(Ct(this.panel),this.clsMode)),Ue(document.documentElement,"overflowY",this.overlay?"hidden":""),ze(document.body,this.clsContainer,this.clsFlip),Ue(document.body,"touch-action","pan-y pinch-zoom"),Ue(this.$el,"display","block"),ze(this.$el,this.clsOverlay),ze(this.panel,this.clsSidebarAnimation,"reveal"!==this.mode?this.clsMode:""),dn(document.body),ze(document.body,this.clsContainerAnimation),this.clsContainerAnimation&&(gr().content+=",user-scalable=0")}},{name:"hide",self:!0,handler:function(){He(document.body,this.clsContainerAnimation),Ue(document.body,"touch-action","")}},{name:"hidden",self:!0,handler:function(){var t
this.clsContainerAnimation&&((t=gr()).content=t.content.replace(/,user-scalable=0$/,"")),"reveal"===this.mode&&Ae(this.panel),He(this.panel,this.clsSidebarAnimation,this.clsMode),He(this.$el,this.clsOverlay),Ue(this.$el,"display",""),He(document.body,this.clsContainer,this.clsFlip),Ue(document.documentElement,"overflowY","")}},{name:"swipeLeft swipeRight",handler:function(t){this.isToggled()&&d(t.type,"Left")^this.flip&&this.hide()}}]}
function gr(){return Me('meta[name="viewport"]',document.head)||ke(document.head,'<meta name="viewport">')}var wr={mixins:[oi],props:{selContainer:String,selContent:String,minHeight:Number},data:{selContainer:".uk-modal",selContent:".uk-modal-dialog",minHeight:150},computed:{container:function(t,e){return Mt(e,t.selContainer)},content:function(t,e){return Mt(e,t.selContent)}},connected:function(){Ue(this.$el,"minHeight",this.minHeight)},update:{read:function(){return!!(this.content&&this.container&&$t(this.$el))&&{current:F(Ue(this.$el,"maxHeight")),max:Math.max(this.minHeight,dn(this.container)-(cn(this.content).height-dn(this.$el)))}},write:function(t){var e=t.current,n=t.max
Ue(this.$el,"maxHeight",n),Math.round(e)!==Math.round(n)&&ee(this.$el,"resize")},events:["resize"]}},br={props:["width","height"],connected:function(){ze(this.$el,"uk-responsive-width")},update:{read:function(){return!!($t(this.$el)&&this.width&&this.height)&&{width:pn(Ct(this.$el)),height:this.height}},write:function(t){dn(this.$el,nt.contain({height:this.height,width:this.width},t).height)},events:["resize"]}},yr={props:{offset:Number},data:{offset:0},methods:{scrollTo:function(t){var e=this
t=t&&Me(t)||document.body,ee(this.$el,"beforescroll",[this,t])&&qn(t,{offset:this.offset}).then((function(){return ee(e.$el,"scrolled",[e,t])}))}},events:{click:function(t){t.defaultPrevented||(t.preventDefault(),this.scrollTo("#"+Zt(decodeURIComponent((this.$el.hash||"").substr(1)))))}}},xr="_ukScrollspy",kr={args:"cls",props:{cls:String,target:String,hidden:Boolean,offsetTop:Number,offsetLeft:Number,repeat:Boolean,delay:Number},data:function(){return{cls:"",target:!1,hidden:!0,offsetTop:0,offsetLeft:0,repeat:!1,delay:0,inViewClass:"uk-scrollspy-inview"}},computed:{elements:{get:function(t,e){var n=t.target
return n?Pe(n,e):[e]},watch:function(t){this.hidden&&Ue(At(t,":not(."+this.inViewClass+")"),"visibility","hidden")},immediate:!0}},disconnected:function(){var t=this
this.elements.forEach((function(e){He(e,t.inViewClass,e[xr]?e[xr].cls:""),delete e[xr]}))},update:[{read:function(t){var e=this
if(!t.update)return de.resolve().then((function(){e.$emit(),t.update=!0})),!1
this.elements.forEach((function(t){t[xr]||(t[xr]={cls:ut(t,"uk-scrollspy-class")||e.cls}),t[xr].show=Rn(t,e.offsetTop,e.offsetLeft)}))},write:function(t){var e=this
this.elements.forEach((function(n){var i=n[xr]
!i.show||i.inview||i.queued?!i.show&&i.inview&&!i.queued&&e.repeat&&e.toggle(n,!1):(i.queued=!0,t.promise=(t.promise||de.resolve()).then((function(){return new de((function(t){return setTimeout(t,e.delay)}))})).then((function(){e.toggle(n,!0),setTimeout((function(){i.queued=!1,e.$emit()}),300)})))}))},events:["scroll","resize"]}],methods:{toggle:function(t,e){var n=t[xr]
n.off&&n.off(),Ue(t,"visibility",!e&&this.hidden?"hidden":""),We(t,this.inViewClass,e),We(t,n.cls),/\buk-animation-/.test(n.cls)&&(n.off=te(t,"animationcancel animationend",(function(){return Fe(t,"uk-animation-[\\w-]+")}))),ee(t,e?"inview":"outview"),n.inview=e,this.$update(t)}}},$r={props:{cls:String,closest:String,scroll:Boolean,overflow:Boolean,offset:Number},data:{cls:"uk-active",closest:!1,scroll:!1,overflow:!0,offset:0},computed:{links:{get:function(t,e){return Pe('a[href^="#"]',e).filter((function(t){return t.hash}))},watch:function(t){this.scroll&&this.$create("scroll",t,{offset:this.offset||0})},immediate:!0},targets:function(){return Pe(this.links.map((function(t){return Zt(t.hash).substr(1)})).join(","))},elements:function(t){var e=t.closest
return Mt(this.links,e||"*")}},update:[{read:function(){var t=this,e=this.targets.length
if(!e||!$t(this.$el))return!1
var n=Un(this.targets,/auto|scroll/,!0)[0],i=n.scrollTop,r=n.scrollHeight-Xn(n),o=!1
return i===r?o=e-1:(this.targets.every((function(e,i){if(ln(e).top-ln(Yn(n)).top-t.offset<=0)return o=i,!0})),!1===o&&this.overflow&&(o=0)),{active:o}},write:function(t){var e=t.active,n=!1!==e&&!je(this.elements[e],this.cls)
this.links.forEach((function(t){return t.blur()})),He(this.elements,this.cls),ze(this.elements[e],this.cls),n&&ee(this.$el,"active",[e,this.elements[e]])},events:["scroll","resize"]}]},Sr={mixins:[oi,rr],props:{top:null,bottom:Boolean,offset:String,animation:String,clsActive:String,clsInactive:String,clsFixed:String,clsBelow:String,selTarget:String,widthElement:Boolean,showOnUp:Boolean,targetOffset:Number},data:{top:0,bottom:!1,offset:0,animation:"",clsActive:"uk-active",clsInactive:"",clsFixed:"uk-sticky-fixed",clsBelow:"uk-sticky-below",selTarget:"",widthElement:!1,showOnUp:!1,targetOffset:!1},computed:{offset:function(t){return wn(t.offset)},selTarget:function(t,e){var n=t.selTarget
return n&&Me(n,e)||e},widthElement:function(t,e){return Ft(t.widthElement,e)||this.placeholder},isActive:{get:function(){return je(this.selTarget,this.clsActive)},set:function(t){t&&!this.isActive?(Le(this.selTarget,this.clsInactive,this.clsActive),ee(this.$el,"active")):t||je(this.selTarget,this.clsInactive)||(Le(this.selTarget,this.clsActive,this.clsInactive),ee(this.$el,"inactive"))}}},connected:function(){this.placeholder=Me("+ .uk-sticky-placeholder",this.$el)||Me('<div class="uk-sticky-placeholder"></div>'),this.isFixed=!1,this.isActive=!1},disconnected:function(){this.isFixed&&(this.hide(),He(this.selTarget,this.clsInactive)),Te(this.placeholder),this.placeholder=null,this.widthElement=null},events:[{name:"load hashchange popstate",el:function(){return window},handler:function(){var t=this
if(!1!==this.targetOffset&&location.hash&&window.pageYOffset>0){var e=Me(location.hash)
e&&yn.read((function(){var n=ln(e).top,i=ln(t.$el).top,r=t.$el.offsetHeight
t.isFixed&&i+r>=n&&i<=n+e.offsetHeight&&Vn(window,n-r-(M(t.targetOffset)?t.targetOffset:0)-t.offset)}))}}}],update:[{read:function(t,e){var n=t.height
if(this.inactive=!this.matchMedia||!$t(this.$el),this.inactive)return!1
if(this.isActive&&e.has("resize")&&(this.hide(),n=this.$el.offsetHeight,this.show()),(n=this.isActive?n:this.$el.offsetHeight)+this.offset>dn(window))return this.inactive=!0,!1
var i=this.isFixed?this.placeholder:this.$el
this.topOffset=ln(i).top,this.bottomOffset=this.topOffset+n,this.offsetParentTop=ln(i.offsetParent).top
var r=Er("bottom",this)
return this.top=Math.max(F(Er("top",this)),this.topOffset)-this.offset,this.bottom=r&&r-this.$el.offsetHeight,this.width=cn($t(this.widthElement)?this.widthElement:this.$el).width,{height:n,top:fn(this.placeholder)[0],margins:Ue(this.$el,["marginTop","marginBottom","marginLeft","marginRight"])}},write:function(t){var e=t.height,n=t.margins,i=this.placeholder
Ue(i,U({height:e},n)),Pt(i,document)||(Se(this.$el,i),i.hidden=!0),this.isActive=!!this.isActive},events:["resize"]},{read:function(t){var e=t.scroll
return void 0===e&&(e=0),this.scroll=window.pageYOffset,{dir:e<=this.scroll?"down":"up",scroll:this.scroll}},write:function(t,e){var n=this,i=Date.now(),r=e.has("scroll"),o=t.initTimestamp
void 0===o&&(o=0)
var s=t.dir,a=t.lastDir,u=t.lastScroll,c=t.scroll,l=t.top
if(t.lastScroll=c,!(c<0||c===u&&r||this.showOnUp&&!r&&!this.isFixed||((i-o>300||s!==a)&&(t.initScroll=c,t.initTimestamp=i),t.lastDir=s,this.showOnUp&&!this.isFixed&&Math.abs(t.initScroll-c)<=30&&Math.abs(u-c)<=10)))if(this.inactive||c<this.top||this.showOnUp&&(c<=this.top||"down"===s&&r||"up"===s&&!this.isFixed&&c<=this.bottomOffset)){if(!this.isFixed)return void(an.inProgress(this.$el)&&l>c&&(an.cancel(this.$el),this.hide()))
this.isFixed=!1,this.animation&&c>this.topOffset?(an.cancel(this.$el),an.out(this.$el,this.animation).then((function(){return n.hide()}),Q)):this.hide()}else this.isFixed?this.update():this.animation?(an.cancel(this.$el),this.show(),an.in(this.$el,this.animation).catch(Q)):this.show()},events:["resize","scroll"]}],methods:{show:function(){this.isFixed=!0,this.update(),this.placeholder.hidden=!1},hide:function(){this.isActive=!1,He(this.$el,this.clsFixed,this.clsBelow),Ue(this.$el,{position:"",top:"",width:""}),this.placeholder.hidden=!0},update:function(){var t=0!==this.top||this.scroll>this.top,e=Math.max(0,this.offset),n="fixed"
M(this.bottom)&&this.scroll>this.bottom-this.offset&&(e=this.bottom-this.offsetParentTop,n="absolute"),Ue(this.$el,{position:n,top:e+"px",width:this.width}),this.isActive=t,We(this.$el,this.clsBelow,this.scroll>this.bottomOffset),ze(this.$el,this.clsFixed)}}}
function Er(t,e){var n=e.$props,i=e.$el,r=e[t+"Offset"],o=n[t]
if(o)return O(o)&&o.match(/^-?\d/)?r+wn(o):ln(!0===o?Ct(i):Ft(o,i)).bottom}var Tr={mixins:[si],args:"connect",props:{connect:String,toggle:String,itemNav:String,active:Number,swiping:Boolean},data:{connect:"~.uk-switcher",toggle:"> * > :first-child",itemNav:!1,active:0,swiping:!0,cls:"uk-active",attrItem:"uk-switcher-item"},computed:{connects:{get:function(t,e){return Lt(t.connect,e)},watch:function(t){var e=this
this.swiping&&Ue(t,"touch-action","pan-y pinch-zoom")
var n=this.index()
this.connects.forEach((function(t){return zt(t).forEach((function(t,i){return We(t,e.cls,i===n)}))}))},immediate:!0},toggles:{get:function(t,e){return Pe(t.toggle,e).filter((function(t){return!Ot(t,".uk-disabled *, .uk-disabled, [disabled]")}))},watch:function(t){var e=this.index()
this.show(~e?e:t[this.active]||t[0])},immediate:!0},children:function(){var t=this
return zt(this.$el).filter((function(e){return t.toggles.some((function(t){return Pt(t,e)}))}))}},events:[{name:"click",delegate:function(){return this.toggle},handler:function(t){t.preventDefault(),this.show(t.current)}},{name:"click",el:function(){return this.connects.concat(this.itemNav?Lt(this.itemNav,this.$el):[])},delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.show(ut(t.current,this.attrItem))}},{name:"swipeRight swipeLeft",filter:function(){return this.swiping},el:function(){return this.connects},handler:function(t){var e=t.type
this.show(d(e,"Left")?"next":"previous")}}],methods:{index:function(){var t=this
return y(this.children,(function(e){return je(e,t.cls)}))},show:function(t){var e=this,n=this.index(),i=it(this.children[it(t,this.toggles,n)],zt(this.$el))
n!==i&&(this.children.forEach((function(t,n){We(t,e.cls,i===n),ot(e.toggles[n],"aria-expanded",i===n)})),this.connects.forEach((function(t){var r=t.children
return e.toggleElement(W(r).filter((function(t){return je(t,e.cls)})),!1,n>=0).then((function(){return e.toggleElement(r[i],!0,n>=0)}))})))}}},Ir={mixins:[oi],extends:Tr,props:{media:Boolean},data:{media:960,attrItem:"uk-tab-item"},connected:function(){var t=je(this.$el,"uk-tab-left")?"uk-tab-left":!!je(this.$el,"uk-tab-right")&&"uk-tab-right"
t&&this.$create("toggle",this.$el,{cls:t,mode:"media",media:this.media})}},Cr={mixins:[rr,si],args:"target",props:{href:String,target:null,mode:"list",queued:Boolean},data:{href:!1,target:!1,mode:"click",queued:!0},connected:function(){w(this.mode,"media")||It(this.$el)||ot(this.$el,"tabindex","0")},computed:{target:{get:function(t,e){var n=t.href,i=t.target
return(i=Lt(i||n,e)).length&&i||[e]},watch:function(){this.updateAria()},immediate:!0}},events:[{name:vt,filter:function(){return w(this.mode,"hover")},handler:function(t){var e=this
he(t)&&!this._showState&&(ee(this.$el,"focus"),te(document,vt,(function(){return ee(e.$el,"blur")}),!0,(function(t){return!Pt(t.target,e.$el)})),w(this.mode,"click")&&(this._preventClick=!0))}},{name:wt+" "+bt+" focus blur",filter:function(){return w(this.mode,"hover")},handler:function(t){if(!he(t)){var e=w([wt,"focus"],t.type),n=ot(this.$el,"aria-expanded")
!e&&(t.type===bt&&Ot(this.$el,":focus")||"blur"===t.type&&Ot(this.$el,":hover"))||(this._showState&&e===(n!==this._showState)?e||(this._showState=null):(this._showState=e?n:null,this.toggle("toggle"+(e?"show":"hide"))))}}},{name:"keydown",filter:function(){return w(this.mode,"click")&&"INPUT"!==this.$el.tagName},handler:function(t){32===t.keyCode&&(t.preventDefault(),this.$el.click())}},{name:"click",filter:function(){return w(this.mode,"click")},handler:function(t){if(this._preventClick)return this._preventClick=null
var e;(Mt(t.target,'a[href="#"], a[href=""]')||(e=Mt(t.target,"a[href]"))&&("true"!==ot(this.$el,"aria-expanded")||e.hash&&Ot(this.target,e.hash)))&&t.preventDefault(),this.toggle()}},{name:"toggled",self:!0,el:function(){return this.target},handler:function(t,e){t.target===this.target[0]&&this.updateAria(e)}}],update:{read:function(){return!(!w(this.mode,"media")||!this.media)&&{match:this.matchMedia}},write:function(t){var e=t.match,n=this.isToggled(this.target);(e?!n:n)&&this.toggle()},events:["resize"]},methods:{toggle:function(t){var e=this
if(ee(this.target,t||"toggle",[this])){if(!this.queued)return this.toggleElement(this.target)
var n=this.target.filter((function(t){return je(t,e.clsLeave)}))
if(n.length)this.target.forEach((function(t){var i=w(n,t)
e.toggleElement(t,i,i)}))
else{var i=this.target.filter(this.isToggled)
this.toggleElement(i,!1).then((function(){return e.toggleElement(e.target.filter((function(t){return!w(i,t)})),!0)}))}}},updateAria:function(t){w(this.mode,"media")||ot(this.$el,"aria-expanded",N(t)?t:this.isToggled(this.target))}}}
X(Object.freeze({__proto__:null,Accordion:ui,Alert:hi,Cover:di,Drop:mi,Dropdown:mi,FormCustom:gi,Gif:wi,Grid:Si,HeightMatch:Ii,HeightViewport:_i,Icon:Li,Img:Ui,Leader:or,Margin:bi,Modal:cr,Nav:lr,Navbar:fr,Offcanvas:mr,OverflowAuto:wr,Responsive:br,Scroll:yr,Scrollspy:kr,ScrollspyNav:$r,Sticky:Sr,Svg:Ni,Switcher:Tr,Tab:Ir,Toggle:Cr,Video:fi,Close:Vi,Spinner:qi,SlidenavNext:Wi,SlidenavPrevious:Wi,SearchIcon:Ri,Marker:ji,NavbarToggleIcon:ji,OverlayIcon:ji,PaginationNext:ji,PaginationPrevious:ji,Totop:ji}),(function(t,e){return ri.component(e,t)})),ri.use((function(t){if(ct){var e,n,i=function(){e||(e=!0,yn.write((function(){return e=!1})),t.update(null,"resize"))}
Jt(window,"load resize",i),Jt(document,"loadedmetadata load",i,!0),"ResizeObserver"in window&&new ResizeObserver(i).observe(document.documentElement),Jt(window,"scroll",(function(e){n||(n=!0,yn.write((function(){return n=!1})),t.update(null,e.type))}),{passive:!0,capture:!0})
var r=0
Jt(document,"animationstart",(function(t){var e=t.target;(Ue(e,"animationName")||"").match(/^uk-.*(left|right)/)&&(r++,Ue(document.documentElement,"overflowX","hidden"),setTimeout((function(){--r||Ue(document.documentElement,"overflowX","")}),V(Ue(e,"animationDuration"))+100))}),!0),Jt(document,vt,(function(t){if(he(t)){var e=fe(t),n="tagName"in t.target?t.target:Ct(t.target)
te(document,gt+" "+yt+" scroll",(function(t){var i=fe(t),r=i.x,o=i.y;("scroll"!==t.type&&n&&r&&Math.abs(e.x-r)>100||o&&Math.abs(e.y-o)>100)&&setTimeout((function(){var t,i,s,a
ee(n,"swipe"),ee(n,"swipe"+(t=e.x,i=e.y,s=r,a=o,Math.abs(t-s)>=Math.abs(i-a)?t-s>0?"Left":"Right":i-a>0?"Up":"Down"))}))}))}}),{passive:!0})}})),function(t){var e=t.connect,n=t.disconnect
function i(t){for(var i=t.addedNodes,r=t.removedNodes,o=0;o<i.length;o++)De(i[o],e)
for(var s=0;s<r.length;s++)De(r[s],n)}function r(e){var n=e.target,i=e.attributeName,r=ii(i)
if(r&&r in t)if(st(n,i))t[r](n)
else{var o=t.getComponent(n,r)
o&&o.$destroy()}}ct&&window.MutationObserver&&yn.read((function(){document.body&&De(document.body,e),new MutationObserver((function(t){return t.forEach(i)})).observe(document,{childList:!0,subtree:!0}),new MutationObserver((function(t){return t.forEach(r)})).observe(document,{attributes:!0,subtree:!0}),t._initialized=!0}))}(ri)
var Ar={mixins:[oi],props:{date:String,clsWrapper:String},data:{date:"",clsWrapper:".uk-countdown-%unit%"},computed:{date:function(t){var e=t.date
return Date.parse(e)},days:function(t,e){return Me(t.clsWrapper.replace("%unit%","days"),e)},hours:function(t,e){return Me(t.clsWrapper.replace("%unit%","hours"),e)},minutes:function(t,e){return Me(t.clsWrapper.replace("%unit%","minutes"),e)},seconds:function(t,e){return Me(t.clsWrapper.replace("%unit%","seconds"),e)},units:function(){var t=this
return["days","hours","minutes","seconds"].filter((function(e){return t[e]}))}},connected:function(){this.start()},disconnected:function(){var t=this
this.stop(),this.units.forEach((function(e){return ye(t[e])}))},events:[{name:"visibilitychange",el:function(){return document},handler:function(){document.hidden?this.stop():this.start()}}],update:{write:function(){var t,e=this,n={total:t=this.date-Date.now(),seconds:t/1e3%60,minutes:t/1e3/60%60,hours:t/1e3/60/60%24,days:t/1e3/60/60/24}
n.total<=0&&(this.stop(),n.days=n.hours=n.minutes=n.seconds=0),this.units.forEach((function(t){var i=String(Math.floor(n[t]))
i=i.length<2?"0"+i:i
var r=e[t]
r.textContent!==i&&((i=i.split("")).length!==r.children.length&&xe(r,i.map((function(){return"<span></span>"})).join("")),i.forEach((function(t,e){return r.children[e].textContent=t})))}))}},methods:{start:function(){this.stop(),this.date&&this.units.length&&(this.$update(),this.timer=setInterval(this.$update,1e3))},stop:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}}},_r="uk-transition-leave",Nr="uk-transition-enter"
function Or(t,e,n,i){void 0===i&&(i=0)
var r=Dr(e,!0),o={opacity:1},s={opacity:0},a=function(t){return function(){return r===Dr(e)?t():de.reject()}},u=a((function(){return ze(e,_r),de.all(Pr(e).map((function(t,e){return new de((function(r){return setTimeout((function(){return nn.start(t,s,n/2,"ease").then(r)}),e*i)}))}))).then((function(){return He(e,_r)}))})),c=a((function(){var a=dn(e)
return ze(e,Nr),t(),Ue(zt(e),{opacity:0}),new de((function(t){return requestAnimationFrame((function(){var u=zt(e),c=dn(e)
Ue(e,"alignContent","flex-start"),dn(e,a)
var l=Pr(e)
Ue(u,s)
var h=l.map((function(t,e){return new de((function(r){return setTimeout((function(){return nn.start(t,o,n/2,"ease").then(r)}),e*i)}))}))
a!==c&&h.push(nn.start(e,{height:c},n/2+l.length*i,"ease")),de.all(h).then((function(){He(e,Nr),r===Dr(e)&&(Ue(e,{height:"",alignContent:""}),Ue(u,{opacity:""}),delete e.dataset.transition),t()}))}))}))}))
return je(e,_r)?Mr(e).then(c):je(e,Nr)?Mr(e).then(u).then(c):u().then(c)}function Dr(t,e){return e&&(t.dataset.transition=1+Dr(t)),H(t.dataset.transition)||0}function Mr(t){return de.all(zt(t).filter(nn.inProgress).map((function(t){return new de((function(e){return te(t,"transitionend transitioncanceled",e)}))})))}function Pr(t){return yi(zt(t)).reduce((function(t,e){return t.concat(K(e.filter((function(t){return Rn(t)})),"offsetLeft"))}),[])}function Br(t,e,n){return new de((function(i){return requestAnimationFrame((function(){var r=zt(e),o=r.map((function(t){return zr(t,!0)})),s=Ue(e,["height","padding"])
nn.cancel(e),r.forEach(nn.cancel),Hr(e),t(),r=r.concat(zt(e).filter((function(t){return!w(r,t)}))),de.resolve().then((function(){yn.flush()
var t=Ue(e,["height","padding"]),a=function(t,e,n){var i=e.map((function(t,e){return!(!Ct(t)||!(e in n))&&(n[e]?$t(t)?Fr(t):{opacity:0}:{opacity:$t(t)?1:0})})),r=i.map((function(i,r){var o=Ct(e[r])===t&&(n[r]||zr(e[r]))
return!!o&&(i?"opacity"in i||(o.opacity%1?i.opacity=1:delete o.opacity):delete o.opacity,o)}))
return[i,r]}(e,r,o),u=a[0],c=a[1]
r.forEach((function(t,e){return c[e]&&Ue(t,c[e])})),Ue(e,U({display:"block"},s)),requestAnimationFrame((function(){var o=r.map((function(t,i){return Ct(t)===e&&nn.start(t,u[i],n,"ease")})).concat(nn.start(e,t,n,"ease"))
de.all(o).then((function(){r.forEach((function(t,n){return Ct(t)===e&&Ue(t,"display",0===u[n].opacity?"none":"")})),Hr(e)}),Q).then(i)}))}))}))}))}function zr(t,e){var n=Ue(t,"zIndex")
return!!$t(t)&&U({display:"",opacity:e?Ue(t,"opacity"):"0",pointerEvents:"none",position:"absolute",zIndex:"auto"===n?Ht(t):n},Fr(t))}function Hr(t){Ue(t.children,{height:"",left:"",opacity:"",pointerEvents:"",position:"",top:"",marginTop:"",marginLeft:"",transform:"",width:"",zIndex:""}),Ue(t,{height:"",display:"",padding:""})}function Fr(t){var e=ln(t),n=e.height,i=e.width,r=hn(t),o=r.top,s=r.left,a=Ue(t,["marginTop","marginLeft"])
return{top:o,left:s,height:n,width:i,marginLeft:a.marginLeft,marginTop:a.marginTop,transform:""}}var Lr={props:{duration:Number,animation:Boolean},data:{duration:150,animation:"slide"},methods:{animate:function(t,e){var n=this
void 0===e&&(e=this.$el)
var i=this.animation,r="fade"===i?Or:"delayed-fade"===i?function(){for(var t=[],e=arguments.length;e--;)t[e]=arguments[e]
return Or.apply(void 0,t.concat([40]))}:i?Br:function(){return t(),de.resolve()}
return r(t,e,this.duration).then((function(){return n.$update(e,"resize")}),Q)}}},jr={mixins:[Lr],args:"target",props:{target:Boolean,selActive:Boolean},data:{target:null,selActive:!1,attrItem:"uk-filter-control",cls:"uk-active",duration:250},computed:{toggles:{get:function(t,e){var n=t.attrItem
return Pe("["+n+"],[data-"+n+"]",e)},watch:function(){var t=this
if(this.updateState(),!1!==this.selActive){var e=Pe(this.selActive,this.$el)
this.toggles.forEach((function(n){return We(n,t.cls,w(e,n))}))}},immediate:!0},children:{get:function(t,e){return Pe(t.target+" > *",e)},watch:function(t,e){var n,i
e&&(i=e,(n=t).length!==i.length||!n.every((function(t){return~i.indexOf(t)})))&&this.updateState()},immediate:!0}},events:[{name:"click",delegate:function(){return"["+this.attrItem+"],[data-"+this.attrItem+"]"},handler:function(t){t.preventDefault(),this.apply(t.current)}}],methods:{apply:function(t){var e,n,i=this.getState(),r=Rr(t,this.attrItem,this.getState())
e=i,n=r,["filter","sort"].every((function(t){return q(e[t],n[t])}))||this.setState(r)},getState:function(){var t=this
return this.toggles.filter((function(e){return je(e,t.cls)})).reduce((function(e,n){return Rr(n,t.attrItem,e)}),{filter:{"":""},sort:[]})},setState:function(t,e){var n=this
void 0===e&&(e=!0),t=U({filter:{"":""},sort:[]},t),ee(this.$el,"beforeFilter",[this,t]),this.toggles.forEach((function(e){return We(e,n.cls,!!function(t,e,n){var i=n.filter
void 0===i&&(i={"":""})
var r=n.sort,o=r[0],s=r[1],a=Wr(t,e),u=a.filter
void 0===u&&(u="")
var c=a.group
void 0===c&&(c="")
var l=a.sort,h=a.order
return void 0===h&&(h="asc"),B(l)?c in i&&u===i[c]||!u&&c&&!(c in i)&&!i[""]:o===l&&s===h}(e,n.attrItem,t))})),de.all(Pe(this.target,this.$el).map((function(i){var r=function(){(function(t,e,n){var i=function(t){var e=t.filter,n=""
return X(e,(function(t){return n+=t||""})),n}(t)
n.forEach((function(t){return Ue(t,"display",i&&!Ot(t,i)?"none":"")}))
var r=t.sort,o=r[0],s=r[1]
if(o){var a=function(t,e,n){return U([],t).sort((function(t,i){return ut(t,e).localeCompare(ut(i,e),void 0,{numeric:!0})*("asc"===n||-1)}))}(n,o,s)
q(a,n)||ke(e,a)}})(t,i,zt(i)),n.$update(n.$el)}
return e?n.animate(r,i):r()}))).then((function(){return ee(n.$el,"afterFilter",[n])}))},updateState:function(){var t=this
yn.write((function(){return t.setState(t.getState(),!1)}))}}}
function Wr(t,e){return Nn(ut(t,e),["filter"])}function Rr(t,e,n){var i=Wr(t,e),r=i.filter,o=i.group,s=i.sort,a=i.order
return void 0===a&&(a="asc"),(r||B(s))&&(o?r?(delete n.filter[""],n.filter[o]=r):(delete n.filter[o],(P(n.filter)||""in n.filter)&&(n.filter={"":r||""})):n.filter={"":r||""}),B(s)||(n.sort=[s,a]),n}var Vr={slide:{show:function(t){return[{transform:Gr(-100*t)},{transform:Gr()}]},percent:function(t){return qr(t)},translate:function(t,e){return[{transform:Gr(-100*e*t)},{transform:Gr(100*e*(1-t))}]}}}
function qr(t){return Math.abs(Ue(t,"transform").split(",")[4]/t.offsetWidth)||0}function Gr(t,e){return void 0===t&&(t=0),void 0===e&&(e="%"),t+=t?e:"",lt?"translateX("+t+")":"translate3d("+t+", 0, 0)"}function Ur(t){return"scale3d("+t+", "+t+", 1)"}var Yr=U({},Vr,{fade:{show:function(){return[{opacity:0},{opacity:1}]},percent:function(t){return 1-Ue(t,"opacity")},translate:function(t){return[{opacity:1-t},{opacity:t}]}},scale:{show:function(){return[{opacity:0,transform:Ur(.8)},{opacity:1,transform:Ur(1)}]},percent:function(t){return 1-Ue(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:Ur(1-.2*t)},{opacity:t,transform:Ur(.8+.2*t)}]}}})
function Xr(t,e,n){ee(t,ne(e,!1,!1,n))}var Kr={props:{autoplay:Boolean,autoplayInterval:Number,pauseOnHover:Boolean},data:{autoplay:!1,autoplayInterval:7e3,pauseOnHover:!0},connected:function(){this.autoplay&&this.startAutoplay()},disconnected:function(){this.stopAutoplay()},update:function(){ot(this.slides,"tabindex","-1")},events:[{name:"visibilitychange",el:function(){return document},filter:function(){return this.autoplay},handler:function(){document.hidden?this.stopAutoplay():this.startAutoplay()}}],methods:{startAutoplay:function(){var t=this
this.stopAutoplay(),this.interval=setInterval((function(){return(!t.draggable||!Me(":focus",t.$el))&&(!t.pauseOnHover||!Ot(t.$el,":hover"))&&!t.stack.length&&t.show("next")}),this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)}}},Zr={props:{draggable:Boolean},data:{draggable:!0,threshold:10},created:function(){var t=this;["start","move","end"].forEach((function(e){var n=t[e]
t[e]=function(e){var i=fe(e).x*(ht?-1:1)
t.prevPos=i!==t.pos?t.pos:t.prevPos,t.pos=i,n(e)}}))},events:[{name:vt,delegate:function(){return this.selSlides},handler:function(t){var e
!this.draggable||!he(t)&&!(e=t.target).children.length&&e.childNodes.length||Mt(t.target,St)||t.button>0||this.length<2||this.start(t)}},{name:"dragstart",handler:function(t){t.preventDefault()}}],methods:{start:function(){this.drag=this.pos,this._transitioner?(this.percent=this._transitioner.percent(),this.drag+=this._transitioner.getDistance()*this.percent*this.dir,this._transitioner.cancel(),this._transitioner.translate(this.percent),this.dragging=!0,this.stack=[]):this.prevIndex=this.index,Jt(document,mt,this.move,{passive:!1}),Jt(document,gt+" "+yt+" input",this.end,!0),Ue(this.list,"userSelect","none")},move:function(t){var e=this,n=this.pos-this.drag
if(!(0===n||this.prevPos===this.pos||!this.dragging&&Math.abs(n)<this.threshold)){Ue(this.list,"pointerEvents","none"),t.cancelable&&t.preventDefault(),this.dragging=!0,this.dir=n<0?1:-1
for(var i=this.slides,r=this.prevIndex,o=Math.abs(n),s=this.getIndex(r+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth;s!==r&&o>a;)this.drag-=a*this.dir,r=s,o-=a,s=this.getIndex(r+this.dir,r),a=this._getDistance(r,s)||i[r].offsetWidth
this.percent=o/a
var u,c=i[r],l=i[s],h=this.index!==s,f=r===s;[this.index,this.prevIndex].filter((function(t){return!w([s,r],t)})).forEach((function(t){ee(i[t],"itemhidden",[e]),f&&(u=!0,e.prevIndex=r)})),(this.index===r&&this.prevIndex!==r||u)&&ee(i[this.index],"itemshown",[this]),h&&(this.prevIndex=r,this.index=s,!f&&ee(c,"beforeitemhide",[this]),ee(l,"beforeitemshow",[this])),this._transitioner=this._translate(Math.abs(this.percent),c,!f&&l),h&&(!f&&ee(c,"itemhide",[this]),ee(l,"itemshow",[this]))}},end:function(){if(Qt(document,mt,this.move,{passive:!1}),Qt(document,gt+" "+yt+" input",this.end,!0),this.dragging)if(this.dragging=null,this.index===this.prevIndex)this.percent=1-this.percent,this.dir*=-1,this._show(!1,this.index,!0),this._transitioner=null
else{var t=(ht?this.dir*(ht?1:-1):this.dir)<0==this.prevPos>this.pos
this.index=t?this.index:this.prevIndex,t&&(this.percent=1-this.percent),this.show(this.dir>0&&!t||this.dir<0&&t?"next":"previous",!0)}Ue(this.list,{userSelect:"",pointerEvents:""}),this.drag=this.percent=null}}},Jr={mixins:[Kr,Zr,{data:{selNav:!1},computed:{nav:function(t,e){return Me(t.selNav,e)},selNavItem:function(t){var e=t.attrItem
return"["+e+"],[data-"+e+"]"},navItems:function(t,e){return Pe(this.selNavItem,e)}},update:{write:function(){var t=this
this.nav&&this.length!==this.nav.children.length&&xe(this.nav,this.slides.map((function(e,n){return"<li "+t.attrItem+'="'+n+'"><a href></a></li>'})).join("")),this.navItems.concat(this.nav).forEach((function(e){return e&&(e.hidden=!t.maxIndex)})),this.updateNav()},events:["resize"]},events:[{name:"click",delegate:function(){return this.selNavItem},handler:function(t){t.preventDefault(),this.show(ut(t.current,this.attrItem))}},{name:"itemshow",handler:"updateNav"}],methods:{updateNav:function(){var t=this,e=this.getValidIndex()
this.navItems.forEach((function(n){var i=ut(n,t.attrItem)
We(n,t.clsActive,H(i)===e),We(n,"uk-invisible",t.finite&&("previous"===i&&0===e||"next"===i&&e>=t.maxIndex))}))}}}],props:{clsActivated:Boolean,easing:String,index:Number,finite:Boolean,velocity:Number,selSlides:String},data:function(){return{easing:"ease",finite:!1,velocity:1,index:0,prevIndex:-1,stack:[],percent:0,clsActive:"uk-active",clsActivated:!1,Transitioner:!1,transitionOptions:{}}},connected:function(){this.prevIndex=-1,this.index=this.getValidIndex(this.$props.index),this.stack=[]},disconnected:function(){He(this.slides,this.clsActive)},computed:{duration:function(t,e){var n=t.velocity
return Qr(e.offsetWidth/n)},list:function(t,e){return Me(t.selList,e)},maxIndex:function(){return this.length-1},selSlides:function(t){return t.selList+" "+(t.selSlides||"> *")},slides:{get:function(){return Pe(this.selSlides,this.$el)},watch:function(){this.$reset()}},length:function(){return this.slides.length}},events:{itemshown:function(){this.$update(this.list)}},methods:{show:function(t,e){var n=this
if(void 0===e&&(e=!1),!this.dragging&&this.length){var i=this.stack,r=e?0:i.length,o=function(){i.splice(r,1),i.length&&n.show(i.shift(),!0)}
if(i[e?"unshift":"push"](t),!e&&i.length>1)2===i.length&&this._transitioner.forward(Math.min(this.duration,200))
else{var s=this.getIndex(this.index),a=je(this.slides,this.clsActive)&&this.slides[s],u=this.getIndex(t,this.index),c=this.slides[u]
if(a!==c){if(this.dir=function(t,e){return"next"===t?1:"previous"===t||t<e?-1:1}(t,s),this.prevIndex=s,this.index=u,a&&!ee(a,"beforeitemhide",[this])||!ee(c,"beforeitemshow",[this,a]))return this.index=this.prevIndex,void o()
var l=this._show(a,c,e).then((function(){return a&&ee(a,"itemhidden",[n]),ee(c,"itemshown",[n]),new de((function(t){yn.write((function(){i.shift(),i.length?n.show(i.shift(),!0):n._transitioner=null,t()}))}))}))
return a&&ee(a,"itemhide",[this]),ee(c,"itemshow",[this]),l}o()}}},getIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.index),J(it(t,this.slides,e,this.finite),0,this.maxIndex)},getValidIndex:function(t,e){return void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),this.getIndex(t,e)},_show:function(t,e,n){if(this._transitioner=this._getTransitioner(t,e,this.dir,U({easing:n?e.offsetWidth<600?"cubic-bezier(0.25, 0.46, 0.45, 0.94)":"cubic-bezier(0.165, 0.84, 0.44, 1)":this.easing},this.transitionOptions)),!n&&!t)return this._translate(1),de.resolve()
var i=this.stack.length
return this._transitioner[i>1?"forward":"show"](i>1?Math.min(this.duration,75+75/(i-1)):this.duration,this.percent)},_getDistance:function(t,e){return this._getTransitioner(t,t!==e&&e).getDistance()},_translate:function(t,e,n){void 0===e&&(e=this.prevIndex),void 0===n&&(n=this.index)
var i=this._getTransitioner(e!==n&&e,n)
return i.translate(t),i},_getTransitioner:function(t,e,n,i){return void 0===t&&(t=this.prevIndex),void 0===e&&(e=this.index),void 0===n&&(n=this.dir||1),void 0===i&&(i=this.transitionOptions),new this.Transitioner(D(t)?this.slides[t]:t,D(e)?this.slides[e]:e,n*(ht?-1:1),i)}}}
function Qr(t){return.5*t+300}var to={mixins:[Jr],props:{animation:String},data:{animation:"slide",clsActivated:"uk-transition-active",Animations:Vr,Transitioner:function(t,e,n,i){var r=i.animation,o=i.easing,s=r.percent,a=r.translate,u=r.show
void 0===u&&(u=Q)
var c=u(n),l=new pe
return{dir:n,show:function(i,r,s){var a=this
void 0===r&&(r=0)
var u=s?"linear":o
return i-=Math.round(i*J(r,-1,1)),this.translate(r),Xr(e,"itemin",{percent:r,duration:i,timing:u,dir:n}),Xr(t,"itemout",{percent:1-r,duration:i,timing:u,dir:n}),de.all([nn.start(e,c[1],i,u),nn.start(t,c[0],i,u)]).then((function(){a.reset(),l.resolve()}),Q),l.promise},cancel:function(){nn.cancel([e,t])},reset:function(){for(var n in c[0])Ue([e,t],n,"")},forward:function(n,i){return void 0===i&&(i=this.percent()),nn.cancel([e,t]),this.show(n,i,!0)},translate:function(i){this.reset()
var r=a(i,n)
Ue(e,r[1]),Ue(t,r[0]),Xr(e,"itemtranslatein",{percent:i,dir:n}),Xr(t,"itemtranslateout",{percent:1-i,dir:n})},percent:function(){return s(t||e,e,n)},getDistance:function(){return t&&t.offsetWidth}}}},computed:{animation:function(t){var e=t.animation,n=t.Animations
return U(n[e]||n.slide,{name:e})},transitionOptions:function(){return{animation:this.animation}}},events:{"itemshow itemhide itemshown itemhidden":function(t){var e=t.target
this.$update(e)},beforeitemshow:function(t){ze(t.target,this.clsActive)},itemshown:function(t){ze(t.target,this.clsActivated)},itemhidden:function(t){He(t.target,this.clsActive,this.clsActivated)}}},eo={mixins:[pi,ar,si,to],functional:!0,props:{delayControls:Number,preload:Number,videoAutoplay:Boolean,template:String},data:function(){return{preload:1,videoAutoplay:!1,delayControls:3e3,items:[],cls:"uk-open",clsPage:"uk-lightbox-page",selList:".uk-lightbox-items",attrItem:"uk-lightbox-item",selClose:".uk-close-large",selCaption:".uk-lightbox-caption",pauseOnHover:!1,velocity:2,Animations:Yr,template:'<div class="uk-lightbox uk-overflow-hidden"> <ul class="uk-lightbox-items"></ul> <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque"> <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button> </div> <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href uk-slidenav-previous uk-lightbox-item="previous"></a> <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href uk-slidenav-next uk-lightbox-item="next"></a> <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div> </div>'}},created:function(){var t=Me(this.template),e=Me(this.selList,t)
this.items.forEach((function(){return ke(e,"<li>")})),this.$mount(ke(this.container,t))},computed:{caption:function(t,e){return Me(t.selCaption,e)}},events:[{name:mt+" "+vt+" keydown",handler:"showControls"},{name:"click",self:!0,delegate:function(){return this.selSlides},handler:function(t){t.defaultPrevented||this.hide()}},{name:"shown",self:!0,handler:function(){this.showControls()}},{name:"hide",self:!0,handler:function(){this.hideControls(),He(this.slides,this.clsActive),nn.stop(this.slides)}},{name:"hidden",self:!0,handler:function(){this.$destroy(!0)}},{name:"keyup",el:function(){return document},handler:function(t){if(this.isToggled(this.$el)&&this.draggable)switch(t.keyCode){case 37:this.show("previous")
break
case 39:this.show("next")}}},{name:"beforeitemshow",handler:function(t){this.isToggled()||(this.draggable=!1,t.preventDefault(),this.toggleElement(this.$el,!0,!1),this.animation=Yr.scale,He(t.target,this.clsActive),this.stack.splice(1,0,this.index))}},{name:"itemshow",handler:function(){xe(this.caption,this.getItem().caption||"")
for(var t=-this.preload;t<=this.preload;t++)this.loadItem(this.index+t)}},{name:"itemshown",handler:function(){this.draggable=this.$props.draggable}},{name:"itemload",handler:function(t,e){var n=this,i=e.source,r=e.type,o=e.alt
void 0===o&&(o="")
var s=e.poster,a=e.attrs
if(void 0===a&&(a={}),this.setItem(e,"<span uk-spinner></span>"),i){var u,c={frameborder:"0",allow:"autoplay",allowfullscreen:"",style:"max-width: 100%; box-sizing: border-box;","uk-responsive":"","uk-video":""+this.videoAutoplay}
if("image"===r||i.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i))be(i,a.srcset,a.size).then((function(t){var r=t.width,s=t.height
return n.setItem(e,no("img",U({src:i,width:r,height:s,alt:o},a)))}),(function(){return n.setError(e)}))
else if("video"===r||i.match(/\.(mp4|webm|ogv)($|\?)/i)){var l=no("video",U({src:i,poster:s,controls:"",playsinline:"","uk-video":""+this.videoAutoplay},a))
Jt(l,"loadedmetadata",(function(){ot(l,{width:l.videoWidth,height:l.videoHeight}),n.setItem(e,l)})),Jt(l,"error",(function(){return n.setError(e)}))}else"iframe"===r||i.match(/\.(html|php)($|\?)/i)?this.setItem(e,no("iframe",U({src:i,frameborder:"0",allowfullscreen:"",class:"uk-lightbox-iframe"},a))):(u=i.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))?this.setItem(e,no("iframe",U({src:"https://www.youtube"+(u[1]||"")+".com/embed/"+u[2]+(u[3]?"?"+u[3]:""),width:1920,height:1080},c,a))):(u=i.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))&&we("https://vimeo.com/api/oembed.json?maxwidth=1920&url="+encodeURI(i),{responseType:"json",withCredentials:!1}).then((function(t){var i=t.response,r=i.height,o=i.width
return n.setItem(e,no("iframe",U({src:"https://player.vimeo.com/video/"+u[1]+(u[2]?"?"+u[2]:""),width:o,height:r},c,a)))}),(function(){return n.setError(e)}))}}}],methods:{loadItem:function(t){void 0===t&&(t=this.index)
var e=this.getItem(t)
this.getSlide(e).childElementCount||ee(this.$el,"itemload",[e])},getItem:function(t){return void 0===t&&(t=this.index),this.items[it(t,this.slides)]},setItem:function(t,e){ee(this.$el,"itemloaded",[this,xe(this.getSlide(t),e)])},getSlide:function(t){return this.slides[this.items.indexOf(t)]},setError:function(t){this.setItem(t,'<span uk-icon="icon: bolt; ratio: 2"></span>')},showControls:function(){clearTimeout(this.controlsTimer),this.controlsTimer=setTimeout(this.hideControls,this.delayControls),ze(this.$el,"uk-active","uk-transition-active")},hideControls:function(){He(this.$el,"uk-active","uk-transition-active")}}}
function no(t,e){var n=Oe("<"+t+">")
return ot(n,e),n}var io,ro={install:function(t,e){t.lightboxPanel||t.component("lightboxPanel",eo),U(e.props,t.component("lightboxPanel").options.props)},props:{toggle:String},data:{toggle:"a"},computed:{toggles:{get:function(t,e){return Pe(t.toggle,e)},watch:function(){this.hide()}}},disconnected:function(){this.hide()},events:[{name:"click",delegate:function(){return this.toggle+":not(.uk-disabled)"},handler:function(t){t.preventDefault(),this.show(t.current)}}],methods:{show:function(t){var e=this,n=Z(this.toggles.map(oo),"source")
if(A(t)){var i=oo(t).source
t=y(n,(function(t){var e=t.source
return i===e}))}return this.panel=this.panel||this.$create("lightboxPanel",U({},this.$props,{items:n})),Jt(this.panel.$el,"hidden",(function(){return e.panel=!1})),this.panel.show(t)},hide:function(){return this.panel&&this.panel.hide()}}}
function oo(t){var e={}
return["href","caption","type","poster","alt","attrs"].forEach((function(n){e["href"===n?"source":n]=ut(t,n)})),e.attrs=Nn(e.attrs),e}var so={mixins:[pi],functional:!0,args:["message","status"],data:{message:"",status:"",timeout:5e3,group:null,pos:"top-center",clsContainer:"uk-notification",clsClose:"uk-notification-close",clsMsg:"uk-notification-message"},install:function(t){t.notification.closeAll=function(e,n){De(document.body,(function(i){var r=t.getComponent(i,"notification")
!r||e&&e!==r.group||r.close(n)}))}},computed:{marginProp:function(t){return"margin"+(h(t.pos,"top")?"Top":"Bottom")},startProps:function(){var t
return(t={opacity:0})[this.marginProp]=-this.$el.offsetHeight,t}},created:function(){var t=Me("."+this.clsContainer+"-"+this.pos,this.container)||ke(this.container,'<div class="'+this.clsContainer+" "+this.clsContainer+"-"+this.pos+'" style="display: block"></div>')
this.$mount(ke(t,'<div class="'+this.clsMsg+(this.status?" "+this.clsMsg+"-"+this.status:"")+'"> <a href class="'+this.clsClose+'" data-uk-close></a> <div>'+this.message+"</div> </div>"))},connected:function(){var t,e=this,n=F(Ue(this.$el,this.marginProp))
nn.start(Ue(this.$el,this.startProps),(t={opacity:1},t[this.marginProp]=n,t)).then((function(){e.timeout&&(e.timer=setTimeout(e.close,e.timeout))}))},events:(io={click:function(t){Mt(t.target,'a[href="#"],a[href=""]')&&t.preventDefault(),this.close()}},io[wt]=function(){this.timer&&clearTimeout(this.timer)},io[bt]=function(){this.timeout&&(this.timer=setTimeout(this.close,this.timeout))},io),methods:{close:function(t){var e=this,n=function(t){var n=Ct(t)
ee(t,"close",[e]),Te(t),n&&!n.hasChildNodes()&&Te(n)}
this.timer&&clearTimeout(this.timer),t?n(this.$el):nn.start(this.$el,this.startProps).then(n)}}},ao={x:lo,y:lo,rotate:lo,scale:lo,color:ho,backgroundColor:ho,borderColor:ho,blur:fo,hue:fo,fopacity:fo,grayscale:fo,invert:fo,saturate:fo,sepia:fo,opacity:function(t,e,n){return 1===n.length&&n.unshift(xo(e,t,"")),n=n.map(F),function(e,i){e[t]=bo(n,i)}},stroke:function(t,e,n){1===n.length&&n.unshift(0)
var i=yo(n)
if(!(n=n.map(F)).some((function(t){return t})))return Q
var r=Pi(e)
return Ue(e,"strokeDasharray",r),"%"===i&&(n=n.map((function(t){return t*r/100}))),n=n.reverse(),function(t,e){t.strokeDashoffset=bo(n,e)}},bgx:po,bgy:po},uo=Object.keys,co={mixins:[rr],props:ko(uo(ao),"list"),data:ko(uo(ao),void 0),computed:{props:function(t,e){var n=this
return uo(ao).reduce((function(i,r){return B(t[r])||(i[r]=ao[r].call(n,r,e,t[r].slice())),i}),{})}},methods:{reset:function(){var t=this
X(this.getCss(0),(function(e,n){return Ue(t.$el,n,"")}))},getCss:function(t){var e=this
return uo(this.props).reduce((function(n,i){return e.props[i](n,t),n}),{transform:"",filter:""})}}}
function lo(t,e,n){var i=yo(n)||{x:"px",y:"px",rotate:"deg"}[t]||""
return"x"!==t&&"y"!==t||(t="translate"+a(t)),1===(n=n.map(F)).length&&n.unshift("scale"===t?1:0),function(e,r){var o=bo(n,r)
h(t,"translate")&&(o=F(o).toFixed("px"===i?0:6)),e.transform+=" "+t+"("+o+i+")"}}function ho(t,e,n){return 1===n.length&&n.unshift(xo(e,t,"")),n=n.map((function(t){return function(t,e){return xo(t,"color",e).split(/[(),]/g).slice(1,-1).concat(1).slice(0,4).map(F)}(e,t)})),function(e,i){var r=wo(n,i),o=r[0],s=r[1],a=r[2],u=o.map((function(t,e){return t+=a*(s[e]-t),3===e?F(t):parseInt(t,10)})).join(",")
e[t]="rgba("+u+")"}}function fo(t,e,n){1===n.length&&n.unshift(0)
var i=yo(n)||{blur:"px",hue:"deg"}[t]||"%"
return t={fopacity:"opacity",hue:"hue-rotate"}[t]||t,n=n.map(F),function(e,r){var o=bo(n,r)
e.filter+=" "+t+"("+(o+i)+")"}}function po(t,e,n){1===n.length&&n.unshift(0)
var i="y"===(t=t.substr(-1))?"height":"width"
n=n.map((function(t){return wn(t,i,e)})),Ue(e,"background-position-"+t,"")
var r=Ue(e,"backgroundPosition").split(" ")["x"===t?0:1]
return"cover"===xo(e,"backgroundSize","")?vo.call(this,t,e,n,r,i):mo(t,n,r)}function vo(t,e,n,i,r){var o=go.call(this,e)
if(!o.naturalWidth)return Q
var s=Math.min.apply(Math,n),a=Math.max.apply(Math,n),u=n.indexOf(s)<n.indexOf(a),c=a-s,l=(u?-c:0)-(u?s:a),h={width:e.offsetWidth,height:e.offsetHeight},f={width:o.naturalWidth,height:o.naturalHeight},d=nt.cover(f,h),p=d[r]-h[r]
if(p<c)h[r]=d[r]+c-p
else if(p>c){var v=h[r]/wn(i,r,e,!0)
v&&(l-=(p-c)/v)}var m=nt.cover(f,h),g=mo(t,n,l+"px")
return function(t,e){g(t,e),t.backgroundSize=m.width+"px "+m.height+"px",t.backgroundRepeat="no-repeat"}}function mo(t,e,n){return function(i,r){i["background-position-"+t]="calc("+n+" + "+bo(e,r)+"px)"}}function go(t){var e=this,n=Ue(t,"backgroundImage").replace(/^none|url\(["']?(.+?)["']?\)$/,"$1"),i=this._data
if(i[n])return i[n]
if(n){var r=new Image
return r.src=n,r.naturalWidth||(r.onload=function(){return e.$update()}),i[n]=r}}function wo(t,e){var n=t.length-1,i=Math.min(Math.floor(n*e),n-1)
return t.slice(i,i+2).concat(1===e?1:e%(1/n)*n)}function bo(t,e){var n=wo(t,e),i=n[0],r=n[1],o=n[2]
return D(i)?i+Math.abs(i-r)*o*(i<r?1:-1):+r}function yo(t,e){return t.reduce((function(t,e){return t||O(e)&&e.replace(/[\d-]/g,"").trim()}),"")||e}function xo(t,e,n){var i=t.style[e],r=Ue(Ue(t,e,n),e)
return t.style[e]=i,r}function ko(t,e){return t.reduce((function(t,n){return t[n]=e,t}),{})}var $o={mixins:[co],props:{target:String,viewport:Number,easing:Number,start:String,end:String},data:{target:!1,viewport:1,easing:1,start:0,end:0},computed:{target:function(t,e){var n=t.target
return Io(n&&Ft(n,e)||e)},start:function(t){return Eo(t.start,this.target)},end:function(t){var e=t.end,n=t.viewport
return Eo(e||(n=100*(1-n))&&n+"vh+"+n+"%",this.target)}},update:{read:function(t,e){var n=t.percent
if(e.has("scroll")||(n=!1),this.matchMedia){var i=n
return{percent:n=To(Gn(this.target,this.start,this.end),this.easing),style:i!==n&&this.getCss(n)}}},write:function(t){var e=t.style
this.matchMedia?e&&Ue(this.$el,e):this.reset()},events:["scroll","resize"]}},So=/-?\d+(?:\.\d+)?(?:v[wh]|%|px)?/g
function Eo(t,e){var n,i=0
for(t=t.toString().replace(/\s/g,""),So.lastIndex=0;null!==(n=So.exec(t));)i+=wn(n[0],"height",e,!0)
return i}function To(t,e){return e>=0?Math.pow(t,e+1):1-Math.pow(1-t,1-e)}function Io(t){return t?"offsetTop"in t?t:Io(Ct(t)):document.documentElement}var Co={update:{write:function(){if(!this.stack.length&&!this.dragging){var t=this.getValidIndex(this.index)
~this.prevIndex&&this.index===t||this.show(t)}},events:["resize"]}}
function Ao(t,e,n){var i=Oo(t,e)
return n?i-function(t,e){return cn(e).width/2-cn(t).width/2}(t,e):Math.min(i,_o(e))}function _o(t){return Math.max(0,No(t)-cn(t).width)}function No(t){return zt(t).reduce((function(t,e){return cn(e).width+t}),0)}function Oo(t,e){return t&&(hn(t).left+(ht?cn(t).width-cn(e).width:0))*(ht?-1:1)||0}function Do(t,e){e-=1
var n=cn(t).width,i=e+n+2
return zt(t).filter((function(r){var o=Oo(r,t),s=o+Math.min(cn(r).width,n)
return o>=e&&s<=i}))}function Mo(t,e,n){ee(t,ne(e,!1,!1,n))}var Po={mixins:[oi,Jr,Co],props:{center:Boolean,sets:Boolean},data:{center:!1,sets:!1,attrItem:"uk-slider-item",selList:".uk-slider-items",selNav:".uk-slider-nav",clsContainer:"uk-slider-container",Transitioner:function(t,e,n,i){var r=i.center,o=i.easing,s=i.list,a=new pe,u=t?Ao(t,s,r):Ao(e,s,r)+cn(e).width*n,c=e?Ao(e,s,r):u+cn(t).width*n*(ht?-1:1)
return{dir:n,show:function(e,i,r){void 0===i&&(i=0)
var u=r?"linear":o
return e-=Math.round(e*J(i,-1,1)),this.translate(i),i=t?i:J(i,0,1),Mo(this.getItemIn(),"itemin",{percent:i,duration:e,timing:u,dir:n}),t&&Mo(this.getItemIn(!0),"itemout",{percent:1-i,duration:e,timing:u,dir:n}),nn.start(s,{transform:Gr(-c*(ht?-1:1),"px")},e,u).then(a.resolve,Q),a.promise},cancel:function(){nn.cancel(s)},reset:function(){Ue(s,"transform","")},forward:function(t,e){return void 0===e&&(e=this.percent()),nn.cancel(s),this.show(t,e,!0)},translate:function(i){var r=this.getDistance()*n*(ht?-1:1)
Ue(s,"transform",Gr(J(r-r*i-c,-No(s),cn(s).width)*(ht?-1:1),"px"))
var o=this.getActives(),a=this.getItemIn(),u=this.getItemIn(!0)
i=t?J(i,-1,1):0,zt(s).forEach((function(r){var c=w(o,r),l=r===a,h=r===u
Mo(r,"itemtranslate"+(l||!h&&(c||n*(ht?-1:1)==-1^Oo(r,s)>Oo(t||e))?"in":"out"),{dir:n,percent:h?1-i:l?i:c?1:0})}))},percent:function(){return Math.abs((Ue(s,"transform").split(",")[4]*(ht?-1:1)+u)/(c-u))},getDistance:function(){return Math.abs(c-u)},getItemIn:function(n){void 0===n&&(n=!1)
var i=this.getActives(),o=Do(s,Ao(e||t,s,r))
if(n){var a=i
i=o,o=a}return o[y(o,(function(t){return!w(i,t)}))]},getActives:function(){return Do(s,Ao(t||e,s,r))}}}},computed:{avgWidth:function(){return No(this.list)/this.length},finite:function(t){return t.finite||Math.ceil(No(this.list))<cn(this.list).width+(e=this.list,Math.max.apply(Math,[0].concat(zt(e).map((function(t){return cn(t).width})))))+this.center
var e},maxIndex:function(){if(!this.finite||this.center&&!this.sets)return this.length-1
if(this.center)return Y(this.sets)
var t=0,e=_o(this.list),n=y(this.slides,(function(n){if(t>=e)return!0
t+=cn(n).width}))
return~n?n:this.length-1},sets:function(t){var e=this,n=t.sets
if(n){var i=cn(this.list).width/(this.center?2:1),r=0,o=i,s=0
return n=K(this.slides,"offsetLeft").reduce((function(t,n,a){var u=cn(n).width
if(s+u>r&&(!e.center&&a>e.maxIndex&&(a=e.maxIndex),!w(t,a))){var c=e.slides[a+1]
e.center&&c&&u<o-cn(c).width/2?o-=u:(o=i,t.push(a),r=s+i+(e.center?u/2:0))}return s+=u,t}),[]),!P(n)&&n}},transitionOptions:function(){return{center:this.center,list:this.list}}},connected:function(){We(this.$el,this.clsContainer,!Me("."+this.clsContainer,this.$el))},update:{write:function(){var t=this
this.navItems.forEach((function(e){var n=H(ut(e,t.attrItem))
!1!==n&&(e.hidden=!t.maxIndex||n>t.maxIndex||t.sets&&!w(t.sets,n))})),!this.length||this.dragging||this.stack.length||(this.reorder(),this._translate(1))
var e=this._getTransitioner(this.index).getActives()
this.slides.forEach((function(n){return We(n,t.clsActive,w(e,n))})),!this.clsActivated||this.sets&&!w(this.sets,F(this.index))||this.slides.forEach((function(n){return We(n,t.clsActivated||"",w(e,n))}))},events:["resize"]},events:{beforeitemshow:function(t){!this.dragging&&this.sets&&this.stack.length<2&&!w(this.sets,this.index)&&(this.index=this.getValidIndex())
var e=Math.abs(this.index-this.prevIndex+(this.dir>0&&this.index<this.prevIndex||this.dir<0&&this.index>this.prevIndex?(this.maxIndex+1)*this.dir:0))
if(!this.dragging&&e>1){for(var n=0;n<e;n++)this.stack.splice(1,0,this.dir>0?"next":"previous")
t.preventDefault()}else{var i=this.dir<0||!this.slides[this.prevIndex]?this.index:this.prevIndex
this.duration=Qr(this.avgWidth/this.velocity)*(cn(this.slides[i]).width/this.avgWidth),this.reorder()}},itemshow:function(){~this.prevIndex&&ze(this._getTransitioner().getItemIn(),this.clsActive)}},methods:{reorder:function(){var t=this
if(this.finite)Ue(this.slides,"order","")
else{var e=this.dir>0&&this.slides[this.prevIndex]?this.prevIndex:this.index
if(this.slides.forEach((function(n,i){return Ue(n,"order",t.dir>0&&i<e?1:t.dir<0&&i>=t.index?-1:"")})),this.center)for(var n=this.slides[e],i=cn(this.list).width/2-cn(n).width/2,r=0;i>0;){var o=this.getIndex(--r+e,e),s=this.slides[o]
Ue(s,"order",o>e?-2:-1),i-=cn(s).width}}},getValidIndex:function(t,e){if(void 0===t&&(t=this.index),void 0===e&&(e=this.prevIndex),t=this.getIndex(t,e),!this.sets)return t
var n
do{if(w(this.sets,t))return t
n=t,t=this.getIndex(t+this.dir,e)}while(t!==n)
return t}}},Bo={mixins:[co],data:{selItem:"!li"},computed:{item:function(t,e){return Ft(t.selItem,e)}},events:[{name:"itemin itemout",self:!0,el:function(){return this.item},handler:function(t){var e=this,n=t.type,i=t.detail,r=i.percent,o=i.duration,s=i.timing,a=i.dir
yn.read((function(){var t=e.getCss(Ho(n,a,r)),i=e.getCss(zo(n)?.5:a>0?1:0)
yn.write((function(){Ue(e.$el,t),nn.start(e.$el,i,o,s).catch(Q)}))}))}},{name:"transitioncanceled transitionend",self:!0,el:function(){return this.item},handler:function(){nn.cancel(this.$el)}},{name:"itemtranslatein itemtranslateout",self:!0,el:function(){return this.item},handler:function(t){var e=this,n=t.type,i=t.detail,r=i.percent,o=i.dir
yn.read((function(){var t=e.getCss(Ho(n,o,r))
yn.write((function(){return Ue(e.$el,t)}))}))}}]}
function zo(t){return d(t,"in")}function Ho(t,e,n){return n/=2,zo(t)^e<0?n:1-n}var Fo,Lo,jo=U({},Vr,{fade:{show:function(){return[{opacity:0,zIndex:0},{zIndex:-1}]},percent:function(t){return 1-Ue(t,"opacity")},translate:function(t){return[{opacity:1-t,zIndex:0},{zIndex:-1}]}},scale:{show:function(){return[{opacity:0,transform:Ur(1.5),zIndex:0},{zIndex:-1}]},percent:function(t){return 1-Ue(t,"opacity")},translate:function(t){return[{opacity:1-t,transform:Ur(1+.5*t),zIndex:0},{zIndex:-1}]}},pull:{show:function(t){return t<0?[{transform:Gr(30),zIndex:-1},{transform:Gr(),zIndex:0}]:[{transform:Gr(-100),zIndex:0},{transform:Gr(),zIndex:-1}]},percent:function(t,e,n){return n<0?1-qr(e):qr(t)},translate:function(t,e){return e<0?[{transform:Gr(30*t),zIndex:-1},{transform:Gr(-100*(1-t)),zIndex:0}]:[{transform:Gr(100*-t),zIndex:0},{transform:Gr(30*(1-t)),zIndex:-1}]}},push:{show:function(t){return t<0?[{transform:Gr(100),zIndex:0},{transform:Gr(),zIndex:-1}]:[{transform:Gr(-30),zIndex:-1},{transform:Gr(),zIndex:0}]},percent:function(t,e,n){return n>0?1-qr(e):qr(t)},translate:function(t,e){return e<0?[{transform:Gr(100*t),zIndex:0},{transform:Gr(-30*(1-t)),zIndex:-1}]:[{transform:Gr(-30*t),zIndex:-1},{transform:Gr(100*(1-t)),zIndex:0}]}}}),Wo={mixins:[oi,to,Co],props:{ratio:String,minHeight:Number,maxHeight:Number},data:{ratio:"16:9",minHeight:!1,maxHeight:!1,selList:".uk-slideshow-items",attrItem:"uk-slideshow-item",selNav:".uk-slideshow-nav",Animations:jo},update:{read:function(){if(!this.list)return!1
var t=this.ratio.split(":").map(Number),e=t[0],n=t[1]
return n=n*this.list.offsetWidth/e||0,this.minHeight&&(n=Math.max(this.minHeight,n)),this.maxHeight&&(n=Math.min(this.maxHeight,n)),{height:n-mn(this.list,"height","content-box")}},write:function(t){var e=t.height
e>0&&Ue(this.list,"minHeight",e)},events:["resize"]}},Ro={mixins:[oi,Lr],props:{group:String,threshold:Number,clsItem:String,clsPlaceholder:String,clsDrag:String,clsDragState:String,clsBase:String,clsNoDrag:String,clsEmpty:String,clsCustom:String,handle:String},data:{group:!1,threshold:5,clsItem:"uk-sortable-item",clsPlaceholder:"uk-sortable-placeholder",clsDrag:"uk-sortable-drag",clsDragState:"uk-drag",clsBase:"uk-sortable",clsNoDrag:"uk-sortable-nodrag",clsEmpty:"uk-sortable-empty",clsCustom:"",handle:!1,pos:{}},created:function(){var t=this;["init","start","move","end"].forEach((function(e){var n=t[e]
t[e]=function(e){U(t.pos,fe(e)),n(e)}}))},events:{name:vt,passive:!1,handler:"init"},computed:{target:function(){return(this.$el.tBodies||[this.$el])[0]},items:function(){return zt(this.target)},isEmpty:{get:function(){return P(this.items)},watch:function(t){We(this.target,this.clsEmpty,t)},immediate:!0},handles:{get:function(t,e){var n=t.handle
return n?Pe(n,e):this.items},watch:function(t,e){Ue(e,{touchAction:"",userSelect:""}),Ue(t,{touchAction:pt?"none":"",userSelect:"none"})},immediate:!0}},update:{write:function(t){if(this.drag&&Ct(this.placeholder)){var e=this,n=e.pos,i=n.x,r=n.y,o=e.origin,s=o.offsetTop,a=o.offsetLeft,u=e.placeholder
Ue(this.drag,{top:r-s,left:i-a})
var c=this.getSortable(document.elementFromPoint(i,r))
if(c){var l=c.items
if(!l.some(nn.inProgress)){var h=function(t,e){return t[y(t,(function(t){return et(e,t.getBoundingClientRect())}))]}(l,{x:i,y:r})
if(!l.length||h&&h!==u){var f=this.getSortable(u),d=function(t,e,n,i,r,o){if(zt(t).length){var s=e.getBoundingClientRect()
if(!o)return function(t,e){var n=1===zt(t).length
n&&ke(t,e)
var i=zt(t),r=i.some((function(t,e){var n=t.getBoundingClientRect()
return i.slice(e+1).some((function(t){var e=t.getBoundingClientRect()
return!Vo([n.left,n.right],[e.left,e.right])}))}))
return n&&Te(e),r}(t,n)||r<s.top+s.height/2?e:e.nextElementSibling
var a=n.getBoundingClientRect(),u=Vo([s.top,s.bottom],[a.top,a.bottom]),c=u?i:r,l=u?"width":"height",h=u?"left":"top",f=u?"right":"bottom",d=a[l]<s[l]?s[l]-a[l]:0
return a[h]<s[h]?!(d&&c<s[h]+d)&&e.nextElementSibling:!(d&&c>s[f]-d)&&e}}(c.target,h,u,i,r,c===f&&t.moved!==h)
!1!==d&&(d&&u===d||(c!==f?(f.remove(u),t.moved=h):delete t.moved,c.insert(u,d),this.touched.add(c)))}}}}},events:["move"]},methods:{init:function(t){var e=t.target,n=t.button,i=t.defaultPrevented,r=this.items.filter((function(t){return Pt(e,t)}))[0]
!r||i||n>0||Et(e)||Pt(e,"."+this.clsNoDrag)||this.handle&&!Pt(e,this.handle)||(t.preventDefault(),this.touched=new Set([this]),this.placeholder=r,this.origin=U({target:e,index:Ht(r)},this.pos),Jt(document,mt,this.move),Jt(document,gt,this.end),this.threshold||this.start(t))},start:function(t){var e,n
this.drag=(Ue(n=ke(this.$container,(e=this.placeholder).outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g,"$1div$2")),"margin","0","important"),Ue(n,U({boxSizing:"border-box",width:e.offsetWidth,height:e.offsetHeight},Ue(e,["paddingLeft","paddingRight","paddingTop","paddingBottom"]))),dn(n.firstElementChild,dn(e.firstElementChild)),n)
var i=this.placeholder.getBoundingClientRect(),r=i.left,o=i.top
U(this.origin,{offsetLeft:this.pos.x-r,offsetTop:this.pos.y-o}),ze(this.drag,this.clsDrag,this.clsCustom),ze(this.placeholder,this.clsPlaceholder),ze(this.items,this.clsItem),ze(document.documentElement,this.clsDragState),ee(this.$el,"start",[this,this.placeholder]),function(t){var e=Date.now()
Fo=setInterval((function(){var n=t.x,i=t.y
i+=window.pageYOffset
var r=.3*(Date.now()-e)
e=Date.now(),Un(document.elementFromPoint(n,t.y),/auto|scroll/).reverse().some((function(t){var e=t.scrollTop,n=t.scrollHeight,o=ln(Yn(t)),s=o.top,a=o.bottom,u=o.height
if(s<i&&s+35>i)e-=r
else{if(!(a>i&&a-35<i))return
e+=r}if(e>0&&e<n-u)return Vn(t,e),!0}))}),15)}(this.pos),this.move(t)},move:function(t){this.drag?this.$emit("move"):(Math.abs(this.pos.x-this.origin.x)>this.threshold||Math.abs(this.pos.y-this.origin.y)>this.threshold)&&this.start(t)},end:function(){var t=this
if(Qt(document,mt,this.move),Qt(document,gt,this.end),Qt(window,"scroll",this.scroll),this.drag){clearInterval(Fo)
var e=this.getSortable(this.placeholder)
this===e?this.origin.index!==Ht(this.placeholder)&&ee(this.$el,"moved",[this,this.placeholder]):(ee(e.$el,"added",[e,this.placeholder]),ee(this.$el,"removed",[this,this.placeholder])),ee(this.$el,"stop",[this,this.placeholder]),Te(this.drag),this.drag=null,this.touched.forEach((function(e){var n=e.clsPlaceholder,i=e.clsItem
return t.touched.forEach((function(t){return He(t.items,n,i)}))})),this.touched=null,He(document.documentElement,this.clsDragState)}},insert:function(t,e){var n=this
ze(this.items,this.clsItem),this.animate((function(){return e?$e(e,t):ke(n.target,t)}))},remove:function(t){Pt(t,this.target)&&this.animate((function(){return Te(t)}))},getSortable:function(t){do{var e=this.$getComponent(t,"sortable")
if(e&&(e===this||!1!==this.group&&e.group===this.group))return e}while(t=Ct(t))}}}
function Vo(t,e){return t[1]>e[0]&&e[1]>t[0]}var qo={mixins:[pi,si,vi],args:"title",props:{delay:Number,title:String},data:{pos:"top",title:"",delay:0,animation:["uk-animation-scale-up"],duration:100,cls:"uk-active",clsPos:"uk-tooltip"},beforeConnect:function(){var t
this._hasTitle=st(this.$el,"title"),ot(this.$el,"title",""),this.updateAria(!1),It(t=this.$el)||ot(t,"tabindex","0")},disconnected:function(){this.hide(),ot(this.$el,"title",this._hasTitle?this.title:null)},methods:{show:function(){var t=this
!this.isToggled(this.tooltip||null)&&this.title&&(this._unbind=te(document,"show keydown "+vt,this.hide,!1,(function(e){return e.type===vt&&!Pt(e.target,t.$el)||"keydown"===e.type&&27===e.keyCode||"show"===e.type&&e.detail[0]!==t&&e.detail[0].$name===t.$name})),clearTimeout(this.showTimer),this.showTimer=setTimeout(this._show,this.delay))},hide:function(){var t=this
Ot(this.$el,"input:focus")||(clearTimeout(this.showTimer),this.isToggled(this.tooltip||null)&&this.toggleElement(this.tooltip,!1,!1).then((function(){Te(t.tooltip),t.tooltip=null,t._unbind()})))},_show:function(){var t=this
this.tooltip=ke(this.container,'<div class="'+this.clsPos+'"> <div class="'+this.clsPos+'-inner">'+this.title+"</div> </div>"),Jt(this.tooltip,"toggled",(function(e,n){t.updateAria(n),n&&(t.positionAt(t.tooltip,t.$el),t.origin="y"===t.getAxis()?gn(t.dir)+"-"+t.align:t.align+"-"+gn(t.dir))})),this.toggleElement(this.tooltip,!0)},updateAria:function(t){ot(this.$el,"aria-expanded",t)}},events:(Lo={focus:"show",blur:"hide"},Lo[wt+" "+bt]=function(t){he(t)||this[t.type===wt?"show":"hide"]()},Lo[vt]=function(t){he(t)&&this.show()},Lo)},Go={props:{allow:String,clsDragover:String,concurrent:Number,maxSize:Number,method:String,mime:String,msgInvalidMime:String,msgInvalidName:String,msgInvalidSize:String,multiple:Boolean,name:String,params:Object,type:String,url:String},data:{allow:!1,clsDragover:"uk-dragover",concurrent:1,maxSize:0,method:"POST",mime:!1,msgInvalidMime:"Invalid File Type: %s",msgInvalidName:"Invalid File Name: %s",msgInvalidSize:"Invalid File Size: %s Kilobytes Max",multiple:!1,name:"files[]",params:{},type:"",url:"",abort:Q,beforeAll:Q,beforeSend:Q,complete:Q,completeAll:Q,error:Q,fail:Q,load:Q,loadEnd:Q,loadStart:Q,progress:Q},events:{change:function(t){Ot(t.target,'input[type="file"]')&&(t.preventDefault(),t.target.files&&this.upload(t.target.files),t.target.value="")},drop:function(t){Yo(t)
var e=t.dataTransfer
e&&e.files&&(He(this.$el,this.clsDragover),this.upload(e.files))},dragenter:function(t){Yo(t)},dragover:function(t){Yo(t),ze(this.$el,this.clsDragover)},dragleave:function(t){Yo(t),He(this.$el,this.clsDragover)}},methods:{upload:function(t){var e=this
if(t.length){ee(this.$el,"upload",[t])
for(var n=0;n<t.length;n++){if(this.maxSize&&1e3*this.maxSize<t[n].size)return void this.fail(this.msgInvalidSize.replace("%s",this.maxSize))
if(this.allow&&!Uo(this.allow,t[n].name))return void this.fail(this.msgInvalidName.replace("%s",this.allow))
if(this.mime&&!Uo(this.mime,t[n].type))return void this.fail(this.msgInvalidMime.replace("%s",this.mime))}this.multiple||(t=[t[0]]),this.beforeAll(this,t)
var i=function(t,e){for(var n=[],i=0;i<t.length;i+=e){for(var r=[],o=0;o<e;o++)r.push(t[i+o])
n.push(r)}return n}(t,this.concurrent),r=function(t){var n=new FormData
for(var o in t.forEach((function(t){return n.append(e.name,t)})),e.params)n.append(o,e.params[o])
we(e.url,{data:n,method:e.method,responseType:e.type,beforeSend:function(t){var n=t.xhr
return n.upload&&Jt(n.upload,"progress",e.progress),["loadStart","load","loadEnd","abort"].forEach((function(t){return Jt(n,t.toLowerCase(),e[t])})),e.beforeSend(t)}}).then((function(t){e.complete(t),i.length?r(i.shift()):e.completeAll(t)}),(function(t){return e.error(t)}))}
r(i.shift())}}}}
function Uo(t,e){return e.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$","i"))}function Yo(t){t.preventDefault(),t.stopPropagation()}return X(Object.freeze({__proto__:null,Countdown:Ar,Filter:jr,Lightbox:ro,LightboxPanel:eo,Notification:so,Parallax:$o,Slider:Po,SliderParallax:Bo,Slideshow:Wo,SlideshowParallax:Bo,Sortable:Ro,Tooltip:qo,Upload:Go}),(function(t,e){return ri.component(e,t)})),ri}()},339:(t,e,n)=>{"use strict"
n.r(e),n.d(e,{setup:()=>c})
var i=Object.defineProperty,r=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,a=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,u=(t,e)=>{for(var n in e||(e={}))r.call(e,n)&&a(t,n,e[n])
if(o)for(var n of o(e))s.call(e,n)&&a(t,n,e[n])
return t}
function c(t){function e(t){return new RegExp(`\\b(?:${t.split(" ").join("|")})\\b`)}let n="[-+*/_~!@$%^=<>{}\\w]+",i=/[A-Za-z0-9]+/,r=f.either(i,/[a-zA-Z0-9]+\.[a-zA-Z0-9-]+/,f.concat(i,/::/,/-?/,i)),o=/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,s=new RegExp(f.either(/"[^{"]+/,/"/,/'[^{']+/,/'/,/"[^"]+"/,/'[^']+'/)),a={"parameter argument property":{pattern:/@[\w\d-_]+/}},c={punctuation:[{pattern:/[!#%&:()*+,.\/;<=>\[\\\]^`{|}~]+/},{pattern:/^=/,alias:"attr-equals"},{pattern:/\/?>/}]},l={"function-name":[{pattern:new RegExp("(\\()"+n),lookbehind:!0},{pattern:new RegExp("(\\{\\{\\{?)"+n),lookbehind:!0}]},h={builtin:e(["action on","outlet yield","log debugger","let each each-in if else unless"].join(" ")),keyword:e(["has-block concat fn component helper modifier get hash query-params","true false undefined null"].join(" ")),operator:e(["eq neq","gt gte le lte","and or not","as"].join(" "))},d={function:{greedy:!0,pattern:/\([\S-_\d]+\b/,inside:u(u(u({},c),l),h)}},p={"this-expression":{pattern:/this\.[\S]+/,lookbehind:!0,greedy:!0,inside:u(u({},c),{namespace:/this/,property:/[\S]+/})}},v={"member-expression":{pattern:/[\S]+\.[\S]+/,lookbehind:!0,greedy:!0,inside:u(u({},c),{constant:/[\S]+/,property:/[\S]+/})}},m=u(u(u(u(u(u(u(u(u({},d),c),p),v),a),{number:o,boolean:/\b(?:true|false)\b/}),h),l),{"attr-name":/^[^=]+=/,string:s,variable:/\b[A-Za-z0-9_-]+\b/}),g={mustache:{pattern:/\{\{\{?\/?[^}]+?\}?\}\}/,lookbehind:!0,alias:"punctuation",greedy:!0,inside:u(u({},{"sub-expression":{alias:"punctuation",pattern:/\([^)]+\)/,lookbehind:!0,greedy:!0,inside:m}}),m)}},w={string:{pattern:s,inside:g}}
m.string=w.string
let b=t.languages.markup
if(!b)throw new Error("prism-markup is required")
t.languages.glimmer=u(u({comment:[{pattern:/\{\{!--[\s\S]*?--\}\}/},{pattern:/\{\{![\s\S]*?\}\}/}],number:o},g),{tag:u(u({},b.tag),{inside:u(u(u(u(u({number:o},a),g),{tag:u(u({},b.tag.inside.tag),{inside:u(u({},c),{"class-name":new RegExp(r)})}),"attr-name":{pattern:/\b[^=\b]+=/,inside:u(u(u(u({},w),c),a),g)}}),c),w)})})}function l(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return e.map((t=>h(t))).join("")}function h(t){return t?"string"==typeof t?t:t.source:null}var f={lookahead:function(t){return l("(?=",t,")")},either:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]
return"("+e.map((t=>h(t))).join("|")+")"},optional:function(t){return l("(",t,")?")},concat:l}}}])
