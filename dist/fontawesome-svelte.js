!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("@fortawesome/fontawesome-svg-core")):"function"==typeof define&&define.amd?define(["@fortawesome/fontawesome-svg-core"],e):"object"==typeof exports?exports["fontawesome-svelte"]=e(require("@fortawesome/fontawesome-svg-core")):t["fontawesome-svelte"]=e(t["@fortawesome/fontawesome-svg-core"])}(window,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";function o(){}n.r(e);function r(t,e){for(const n in e)t[n]=e[n];return t}function i(t){return t()}function s(){return Object.create(null)}function l(t){t.forEach(i)}function c(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function f(t,e,n,o){return t[1]&&o?r(n.ctx.slice(),t[1](o(e))):n.ctx}function a(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}new Set;function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function m(t){return document.createElement(t)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:n[o]&&n[o].set?t[o]=e[o]:h(t,o,e[o])}class ${constructor(t,e=null){this.e=m("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)d(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(p)}}let b;function g(t){b=t}function x(){if(!b)throw new Error("Function called outside component initialization");return b}function w(t){x().$$.before_update.push(t)}const v=[],_=[],j=[],O=[],k=Promise.resolve();let A=!1;function S(){A||(A=!0,k.then(P))}function M(t){j.push(t)}function P(){const t=new Set;do{for(;v.length;){const t=v.shift();g(t),E(t.$$)}for(;_.length;)_.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];t.has(n)||(n(),t.add(n))}j.length=0}while(v.length);for(;O.length;)O.pop()();A=!1}function E(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}const W=new Set;let z;function T(t,e){t&&t.i&&(W.delete(t),t.i(e))}function C(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),z.c.push(()=>{W.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}"undefined"!=typeof window?window:global;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let I;function N(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e,n,r,u,f,a=[-1]){const d=b;g(t);const p=e.props||{},m=t.$$={fragment:null,ctx:null,props:f,update:o,not_equal:u,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:s(),dirty:a};let h=!1;var y;m.ctx=n?n(t,p,(e,n,o=n)=>(m.ctx&&u(m.ctx[e],m.ctx[e]=o)&&(m.bound[e]&&m.bound[e](o),h&&function(t,e){-1===t.$$.dirty[0]&&(v.push(t),S(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n)):[],m.update(),h=!0,l(m.before_update),m.fragment=!!r&&r(m.ctx),e.target&&(e.hydrate?m.fragment&&m.fragment.l((y=e.target,Array.from(y.childNodes))):m.fragment&&m.fragment.c(),e.intro&&T(t.$$.fragment),function(t,e,n){const{fragment:o,on_mount:r,on_destroy:s,after_update:u}=t.$$;o&&o.m(e,n),M(()=>{const e=r.map(i).filter(c);s?s.push(...e):l(e),t.$$.on_mount=[]}),u.forEach(M)}(t,e.target,e.anchor),P()),g(d)}"function"==typeof HTMLElement&&(I=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){N(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}});class L{$destroy(){N(this,1),this.$destroy=o}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}var F=n(0);function H(t){let e;return{c(){e=new $(t[0],null)},m(t,n){e.m(t,n)},p(t,[n]){1&n&&e.p(t[0])},i:o,o:o,d(t){t&&e.d()}}}function D(t){if(null===t)return t;if("object"==typeof t&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&2===t.length){let[e,n]=t;return{prefix:e,iconName:n}}return"string"==typeof t?{prefix:"fas",iconName:t}:void 0}function B(t,e,n){let o,i,{border:s=!1}=e,{fixedWidth:l=!1}=e,{flip:c=null}=e,{icon:u}=e,{mask:f=null}=e,{listItem:d=!1}=e,{pull:p=null}=e,{pulse:m=!1}=e,{rotation:h=null}=e,{swapOpacity:y=!1}=e,{size:$=null}=e,{spin:b=!1}=e,{transform:g}=e,{symbol:x=!1}=e,{title:v=null}=e,{inverse:_=!1}=e,j="";return w(()=>{const t=Object(F.findIconDefinition)(D(u));t?n(0,j=Object(F.icon)(t,{styles:e.style?i:{},classes:[...Object.keys(o).map(t=>o[t]?t:null).filter(t=>!!t),(e.class||"").split(" ")],transform:{..."string"==typeof g?F.parse.transform(g):g},mask:D(f),symbol:x,title:v}).html):console.warn("Could not find one or more icon(s)",t,f)}),t.$set=t=>{n(19,e=r(r({},e),a(t))),"border"in t&&n(1,s=t.border),"fixedWidth"in t&&n(2,l=t.fixedWidth),"flip"in t&&n(3,c=t.flip),"icon"in t&&n(4,u=t.icon),"mask"in t&&n(5,f=t.mask),"listItem"in t&&n(6,d=t.listItem),"pull"in t&&n(7,p=t.pull),"pulse"in t&&n(8,m=t.pulse),"rotation"in t&&n(9,h=t.rotation),"swapOpacity"in t&&n(10,y=t.swapOpacity),"size"in t&&n(11,$=t.size),"spin"in t&&n(12,b=t.spin),"transform"in t&&n(13,g=t.transform),"symbol"in t&&n(14,x=t.symbol),"title"in t&&n(15,v=t.title),"inverse"in t&&n(16,_=t.inverse)},t.$$.update=()=>{73678&t.$$.dirty&&(o={"fa-spin":b,"fa-pulse":m,"fa-fw":l,"fa-border":s,"fa-li":d,"fa-inverse":_,"fa-flip-horizontal":["both","horizontal"].includes(c),"fa-flip-vertical":["both","vertical"].includes(c),[`fa-${$}`]:null!==$,[`fa-rotate-${h}`]:null!==h,[`fa-pull-${p}`]:null!==p,"fa-swap-opacity":y}),i=(e.style||"").split(";").filter(t=>!!t).map(t=>t.split(":").map(t=>t.trim())).reduce((t,e)=>{const[n,o]=e;return t[n]=o,t},{})},e=a(e),[j,s,l,c,u,f,d,p,m,h,y,$,b,g,x,v,_]}var G=class extends L{constructor(t){super(),q(this,t,B,H,u,{border:1,fixedWidth:2,flip:3,icon:4,mask:5,listItem:6,pull:7,pulse:8,rotation:9,swapOpacity:10,size:11,spin:12,transform:13,symbol:14,title:15,inverse:16})}};function J(t){let e,n;const o=t[5].default,i=function(t,e,n,o){if(t){const r=f(t,e,n,o);return t[0](r)}}(o,t,t[4],null);let s=[t[1],{class:`${t[0]} ${t[1].class}`}],l={};for(let t=0;t<s.length;t+=1)l=r(l,s[t]);return{c(){e=m("div"),i&&i.c(),y(e,l)},m(t,o){d(t,e,o),i&&i.m(e,null),n=!0},p(t,[n]){i&&i.p&&16&n&&i.p(f(o,t,t[4],null),function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if("object"==typeof e.dirty){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(o,t[4],n,null)),y(e,function(t,e){const n={},o={},r={$$scope:1};let i=t.length;for(;i--;){const s=t[i],l=e[i];if(l){for(const t in s)t in l||(o[t]=1);for(const t in l)r[t]||(n[t]=l[t],r[t]=1);t[i]=l}else for(const t in s)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(s,[2&n&&t[1],3&n&&{class:`${t[0]} ${t[1].class}`}]))},i(t){n||(T(i,t),n=!0)},o(t){C(i,t),n=!1},d(t){t&&p(e),i&&i.d(t)}}}function K(t,e,n){let{fixedWidth:o=!1}=e;const{familyPrefix:i}=F.config;let s,{$$slots:l={},$$scope:c}=e;return t.$set=t=>{n(1,e=r(r({},e),a(t))),"fixedWidth"in t&&n(2,o=t.fixedWidth),"$$scope"in t&&n(4,c=t.$$scope)},t.$$.update=()=>{4&t.$$.dirty&&n(0,s=[`${i}-layers`,...o?[`${i}-fw`]:[]].join(" "))},e=a(e),[s,e,o,i,c,l]}var Q=class extends L{constructor(t){super(),q(this,t,K,J,u,{fixedWidth:2})}};function R(t){let e;return{c(){e=new $(t[0],null)},m(t,n){e.m(t,n)},p(t,[n]){1&n&&e.p(t[0])},i:o,o:o,d(t){t&&e.d()}}}function U(t,e,n){let{value:o=""}=e,{transform:i}=e,{counter:s=!1}=e,{position:l=null}=e;const{familyPrefix:c}=F.config;let u,f,d="";return w(()=>{const t=s?F.counter:F.text;n(0,d=t(o.toString(),{styles:e.style?f:{},classes:[u,(e.class||"").split(" ")],transform:{..."string"==typeof i?F.parse.transform(i):i}}).html.join(""))}),t.$set=t=>{n(8,e=r(r({},e),a(t))),"value"in t&&n(1,o=t.value),"transform"in t&&n(2,i=t.transform),"counter"in t&&n(3,s=t.counter),"position"in t&&n(4,l=t.position)},t.$$.update=()=>{24&t.$$.dirty&&(u=[...s?[`${c}-layers-counter`]:[],...l?[`${c}-layers-${l}`]:[]]),f=(e.style||"").split(";").filter(t=>!!t).map(t=>t.split(":").map(t=>t.trim())).reduce((t,e)=>{const[n,o]=e;return t[n]=o,t},{})},e=a(e),[d,o,i,s,l]}var V=class extends L{constructor(t){super(),q(this,t,U,R,u,{value:1,transform:2,counter:3,position:4})}};n.d(e,"FontAwesomeIcon",(function(){return G})),n.d(e,"FontAwesomeLayers",(function(){return Q})),n.d(e,"FontAwesomeLayersText",(function(){return V}))}])}));