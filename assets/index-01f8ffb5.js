(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Bn;const Qe=window,Vt=Qe.trustedTypes,fi=Vt?Vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ut=`lit$${(Math.random()+"").slice(9)}$`,lr="?"+ut,Ia=`<${lr}>`,Ut=document,le=(e="")=>Ut.createComment(e),he=e=>e===null||typeof e!="object"&&typeof e!="function",hr=Array.isArray,ba=e=>hr(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,di=/-->/g,pi=/>/g,Et=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gi=/'/g,mi=/"/g,ur=/^(?:script|style|textarea|title)$/i,Sa=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Ca=Sa(1),ue=Symbol.for("lit-noChange"),L=Symbol.for("lit-nothing"),yi=new WeakMap,Lt=Ut.createTreeWalker(Ut,129,null,!1),Da=(e,t)=>{const n=e.length-1,s=[];let i,r=t===2?"<svg>":"",o=te;for(let c=0;c<n;c++){const l=e[c];let h,u,p=-1,v=0;for(;v<l.length&&(o.lastIndex=v,u=o.exec(l),u!==null);)v=o.lastIndex,o===te?u[1]==="!--"?o=di:u[1]!==void 0?o=pi:u[2]!==void 0?(ur.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=Et):u[3]!==void 0&&(o=Et):o===Et?u[0]===">"?(o=i??te,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?Et:u[3]==='"'?mi:gi):o===mi||o===gi?o=Et:o===di||o===pi?o=te:(o=Et,i=void 0);const T=o===Et&&e[c+1].startsWith("/>")?" ":"";r+=o===te?l+Ia:p>=0?(s.push(h),l.slice(0,p)+"$lit$"+l.slice(p)+ut+T):l+ut+(p===-2?(s.push(void 0),c):T)}const a=r+(e[n]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[fi!==void 0?fi.createHTML(a):a,s]};let es=class fr{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let r=0,o=0;const a=t.length-1,c=this.parts,[l,h]=Da(t,n);if(this.el=fr.createElement(l,s),Lt.currentNode=this.el.content,n===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(i=Lt.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes()){const u=[];for(const p of i.getAttributeNames())if(p.endsWith("$lit$")||p.startsWith(ut)){const v=h[o++];if(u.push(p),v!==void 0){const T=i.getAttribute(v.toLowerCase()+"$lit$").split(ut),S=/([.?@])?(.*)/.exec(v);c.push({type:1,index:r,name:S[2],strings:T,ctor:S[1]==="."?Na:S[1]==="?"?xa:S[1]==="@"?Ra:gn})}else c.push({type:6,index:r})}for(const p of u)i.removeAttribute(p)}if(ur.test(i.tagName)){const u=i.textContent.split(ut),p=u.length-1;if(p>0){i.textContent=Vt?Vt.emptyScript:"";for(let v=0;v<p;v++)i.append(u[v],le()),Lt.nextNode(),c.push({type:2,index:++r});i.append(u[p],le())}}}else if(i.nodeType===8)if(i.data===lr)c.push({type:2,index:r});else{let u=-1;for(;(u=i.data.indexOf(ut,u+1))!==-1;)c.push({type:7,index:r}),u+=ut.length-1}r++}}static createElement(t,n){const s=Ut.createElement("template");return s.innerHTML=t,s}};function Bt(e,t,n=e,s){var i,r,o,a;if(t===ue)return t;let c=s!==void 0?(i=n._$Co)===null||i===void 0?void 0:i[s]:n._$Cl;const l=he(t)?void 0:t._$litDirective$;return(c==null?void 0:c.constructor)!==l&&((r=c==null?void 0:c._$AO)===null||r===void 0||r.call(c,!1),l===void 0?c=void 0:(c=new l(e),c._$AT(e,n,s)),s!==void 0?((o=(a=n)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=c:n._$Cl=c),c!==void 0&&(t=Bt(e,c._$AS(e,t.values),c,s)),t}let _a=class{constructor(t,n){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var n;const{el:{content:s},parts:i}=this._$AD,r=((n=t==null?void 0:t.creationScope)!==null&&n!==void 0?n:Ut).importNode(s,!0);Lt.currentNode=r;let o=Lt.nextNode(),a=0,c=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Cs(o,o.nextSibling,this,t):l.type===1?h=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(h=new Oa(o,this,t)),this.u.push(h),l=i[++c]}a!==(l==null?void 0:l.index)&&(o=Lt.nextNode(),a++)}return r}p(t){let n=0;for(const s of this.u)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}},Cs=class dr{constructor(t,n,s,i){var r;this.type=2,this._$AH=L,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cm=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,n;return(n=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&n!==void 0?n:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Bt(this,t,n),he(t)?t===L||t==null||t===""?(this._$AH!==L&&this._$AR(),this._$AH=L):t!==this._$AH&&t!==ue&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ba(t)?this.k(t):this.g(t)}O(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==L&&he(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ut.createTextNode(t)),this._$AH=t}$(t){var n;const{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=es.createElement(i.h,this.options)),i);if(((n=this._$AH)===null||n===void 0?void 0:n._$AD)===r)this._$AH.p(s);else{const o=new _a(r,this),a=o.v(this.options);o.p(s),this.T(a),this._$AH=o}}_$AC(t){let n=yi.get(t.strings);return n===void 0&&yi.set(t.strings,n=new es(t)),n}k(t){hr(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let s,i=0;for(const r of t)i===n.length?n.push(s=new dr(this.O(le()),this.O(le()),this,this.options)):s=n[i],s._$AI(r),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cm=t,(n=this._$AP)===null||n===void 0||n.call(this,t))}},gn=class{constructor(t,n,s,i,r){this.type=1,this._$AH=L,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=L}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,s,i){const r=this.strings;let o=!1;if(r===void 0)t=Bt(this,t,n,0),o=!he(t)||t!==this._$AH&&t!==ue,o&&(this._$AH=t);else{const a=t;let c,l;for(t=r[0],c=0;c<r.length-1;c++)l=Bt(this,a[s+c],n,c),l===ue&&(l=this._$AH[c]),o||(o=!he(l)||l!==this._$AH[c]),l===L?t=L:t!==L&&(t+=(l??"")+r[c+1]),this._$AH[c]=l}o&&!i&&this.j(t)}j(t){t===L?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Na=class extends gn{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===L?void 0:t}};const ka=Vt?Vt.emptyScript:"";let xa=class extends gn{constructor(){super(...arguments),this.type=4}j(t){t&&t!==L?this.element.setAttribute(this.name,ka):this.element.removeAttribute(this.name)}},Ra=class extends gn{constructor(t,n,s,i,r){super(t,n,s,i,r),this.type=5}_$AI(t,n=this){var s;if((t=(s=Bt(this,t,n,0))!==null&&s!==void 0?s:L)===ue)return;const i=this._$AH,r=t===L&&i!==L||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==L&&(i===L||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,s;typeof this._$AH=="function"?this._$AH.call((s=(n=this.options)===null||n===void 0?void 0:n.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},Oa=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Bt(this,t)}};const vi=Qe.litHtmlPolyfillSupport;vi==null||vi(es,Cs),((Bn=Qe.litHtmlVersions)!==null&&Bn!==void 0?Bn:Qe.litHtmlVersions=[]).push("2.6.1");const Ma=(e,t,n)=>{var s,i;const r=(s=n==null?void 0:n.renderBefore)!==null&&s!==void 0?s:t;let o=r._$litPart$;if(o===void 0){const a=(i=n==null?void 0:n.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new Cs(t.insertBefore(le(),a),a,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},La=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],c=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(c>>10)),t[s++]=String.fromCharCode(56320+(c&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},gr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,v=l&63;c||(v=64,o||(p=64)),s.push(n[h],n[u],n[p],n[v])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):La(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const u=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||l==null||u==null)throw new $a;const p=r<<2|a>>4;if(s.push(p),l!==64){const v=a<<4&240|l>>2;if(s.push(v),u!==64){const T=l<<6&192|u;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class $a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pa=function(e){const t=pr(e);return gr.encodeByteArray(t,!0)},We=function(e){return Pa(e).replace(/\./g,"")},Fa=function(e){try{return gr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=()=>Va().__FIREBASE_DEFAULTS__,Ba=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ja=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Fa(e[1]);return t&&JSON.parse(t)},mr=()=>{try{return Ua()||Ba()||ja()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ha=e=>{var t,n;return(n=(t=mr())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Ka=e=>{const t=Ha(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},qa=()=>{var e;return(e=mr())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[We(JSON.stringify(n)),We(JSON.stringify(o)),a].join(".")}function Qa(){try{return typeof indexedDB=="object"}catch{return!1}}function Wa(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="FirebaseError";class Wt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=Xa,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?Ya(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,a,s)}}function Ya(e,t){return e.replace(Ja,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const Ja=/\{\$([^}]+)}/g;function ns(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(wi(r)&&wi(o)){if(!ns(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function wi(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(e){return e&&e._delegate?e._delegate:e}class de{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ga;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ec(t))try{this.getOrInitializeService({instanceIdentifier:Tt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=Tt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Tt){return this.instances.has(t)}getOptions(t=Tt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:tc(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Tt){return this.component?this.component.multipleInstances?t:Tt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tc(e){return e===Tt?void 0:e}function ec(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Za(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const sc={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},ic=b.INFO,rc={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},oc=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=rc[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class vr{constructor(t){this.name=t,this._logLevel=ic,this._logHandler=oc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?sc[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}const ac=(e,t)=>t.some(n=>e instanceof n);let Ei,Ti;function cc(){return Ei||(Ei=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lc(){return Ti||(Ti=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wr=new WeakMap,ss=new WeakMap,Er=new WeakMap,jn=new WeakMap,Ds=new WeakMap;function hc(e){const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{n(ft(e.result)),i()},o=()=>{s(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&wr.set(n,e)}).catch(()=>{}),Ds.set(t,e),t}function uc(e){if(ss.has(e))return;const t=new Promise((n,s)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)});ss.set(e,t)}let is={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ss.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Er.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ft(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function fc(e){is=e(is)}function dc(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=e.call(Hn(this),t,...n);return Er.set(s,t.sort?t.sort():[t]),ft(s)}:lc().includes(e)?function(...t){return e.apply(Hn(this),t),ft(wr.get(this))}:function(...t){return ft(e.apply(Hn(this),t))}}function pc(e){return typeof e=="function"?dc(e):(e instanceof IDBTransaction&&uc(e),ac(e,cc())?new Proxy(e,is):e)}function ft(e){if(e instanceof IDBRequest)return hc(e);if(jn.has(e))return jn.get(e);const t=pc(e);return t!==e&&(jn.set(e,t),Ds.set(t,e)),t}const Hn=e=>Ds.get(e);function gc(e,t,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(e,t),a=ft(o);return s&&o.addEventListener("upgradeneeded",c=>{s(ft(o.result),c.oldVersion,c.newVersion,ft(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const mc=["get","getKey","getAll","getAllKeys","count"],yc=["put","add","delete","clear"],Kn=new Map;function Ai(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Kn.get(t))return Kn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,i=yc.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||mc.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),i&&c.done]))[0]};return Kn.set(t,r),r}fc(e=>({...e,get:(t,n,s)=>Ai(t,n)||e.get(t,n,s),has:(t,n)=>!!Ai(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wc(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function wc(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const rs="@firebase/app",Ii="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dt=new vr("@firebase/app"),Ec="@firebase/app-compat",Tc="@firebase/analytics-compat",Ac="@firebase/analytics",Ic="@firebase/app-check-compat",bc="@firebase/app-check",Sc="@firebase/auth",Cc="@firebase/auth-compat",Dc="@firebase/database",_c="@firebase/database-compat",Nc="@firebase/functions",kc="@firebase/functions-compat",xc="@firebase/installations",Rc="@firebase/installations-compat",Oc="@firebase/messaging",Mc="@firebase/messaging-compat",Lc="@firebase/performance",$c="@firebase/performance-compat",Pc="@firebase/remote-config",Fc="@firebase/remote-config-compat",Vc="@firebase/storage",Uc="@firebase/storage-compat",Bc="@firebase/firestore",jc="@firebase/firestore-compat",Hc="firebase",Kc="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="[DEFAULT]",qc={[rs]:"fire-core",[Ec]:"fire-core-compat",[Ac]:"fire-analytics",[Tc]:"fire-analytics-compat",[bc]:"fire-app-check",[Ic]:"fire-app-check-compat",[Sc]:"fire-auth",[Cc]:"fire-auth-compat",[Dc]:"fire-rtdb",[_c]:"fire-rtdb-compat",[Nc]:"fire-fn",[kc]:"fire-fn-compat",[xc]:"fire-iid",[Rc]:"fire-iid-compat",[Oc]:"fire-fcm",[Mc]:"fire-fcm-compat",[Lc]:"fire-perf",[$c]:"fire-perf-compat",[Pc]:"fire-rc",[Fc]:"fire-rc-compat",[Vc]:"fire-gcs",[Uc]:"fire-gcs-compat",[Bc]:"fire-fst",[jc]:"fire-fst-compat","fire-js":"fire-js",[Hc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Map,as=new Map;function Gc(e,t){try{e.container.addComponent(t)}catch(n){Dt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ye(e){const t=e.name;if(as.has(t))return Dt.debug(`There were multiple attempts to register component ${t}.`),!1;as.set(t,e);for(const n of Xe.values())Gc(n,e);return!0}function zc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new yr("app","Firebase",Qc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=Kc;function Tr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:os,automaticDataCollectionEnabled:!1},t),i=s.name;if(typeof i!="string"||!i)throw dt.create("bad-app-name",{appName:String(i)});if(n||(n=qa()),!n)throw dt.create("no-options");const r=Xe.get(i);if(r){if(ns(n,r.options)&&ns(s,r.config))return r;throw dt.create("duplicate-app",{appName:i})}const o=new nc(i);for(const c of as.values())o.addComponent(c);const a=new Wc(n,s,o);return Xe.set(i,a),a}function Yc(e=os){const t=Xe.get(e);if(!t&&e===os)return Tr();if(!t)throw dt.create("no-app",{appName:e});return t}function $t(e,t,n){var s;let i=(s=qc[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Dt.warn(a.join(" "));return}Ye(new de(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="firebase-heartbeat-database",Zc=1,pe="firebase-heartbeat-store";let qn=null;function Ar(){return qn||(qn=gc(Jc,Zc,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}}).catch(e=>{throw dt.create("idb-open",{originalErrorMessage:e.message})})),qn}async function tl(e){try{return(await Ar()).transaction(pe).objectStore(pe).get(Ir(e))}catch(t){if(t instanceof Wt)Dt.warn(t.message);else{const n=dt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(n.message)}}}async function bi(e,t){try{const s=(await Ar()).transaction(pe,"readwrite");return await s.objectStore(pe).put(t,Ir(e)),s.done}catch(n){if(n instanceof Wt)Dt.warn(n.message);else{const s=dt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dt.warn(s.message)}}}function Ir(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const el=1024,nl=30*24*60*60*1e3;class sl{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rl(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Si();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=nl}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Si(),{heartbeatsToSend:n,unsentEntries:s}=il(this._heartbeatsCache.heartbeats),i=We(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Si(){return new Date().toISOString().substring(0,10)}function il(e,t=el){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ci(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ci(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class rl{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qa()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await tl(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Ci(e){return We(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(e){Ye(new de("platform-logger",t=>new vc(t),"PRIVATE")),Ye(new de("heartbeat",t=>new sl(t),"PRIVATE")),$t(rs,Ii,e),$t(rs,Ii,"esm2017"),$t("fire-js","")}ol("");var al="firebase",cl="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$t(al,cl,"app");var ll=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,_s=_s||{},y=ll||self;function Je(){}function mn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ce(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function hl(e){return Object.prototype.hasOwnProperty.call(e,Gn)&&e[Gn]||(e[Gn]=++ul)}var Gn="closure_uid_"+(1e9*Math.random()>>>0),ul=0;function fl(e,t,n){return e.call.apply(e.bind,arguments)}function dl(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function G(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?G=fl:G=dl,G.apply(null,arguments)}function Ve(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function j(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function vt(){this.s=this.s,this.o=this.o}var pl=0;vt.prototype.s=!1;vt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),pl!=0)&&hl(this)};vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const br=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ns(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Di(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(mn(s)){const i=e.length||0,r=s.length||0;e.length=i+r;for(let o=0;o<r;o++)e[i+o]=s[o]}else e.push(s)}}function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};var gl=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{y.addEventListener("test",Je,t),y.removeEventListener("test",Je,t)}catch{}return e}();function Ze(e){return/^[\s\xa0]*$/.test(e)}var _i=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function zn(e,t){return e<t?-1:e>t?1:0}function yn(){var e=y.navigator;return e&&(e=e.userAgent)?e:""}function it(e){return yn().indexOf(e)!=-1}function ks(e){return ks[" "](e),e}ks[" "]=Je;function ml(e){var t=wl;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var yl=it("Opera"),jt=it("Trident")||it("MSIE"),Sr=it("Edge"),cs=Sr||jt,Cr=it("Gecko")&&!(yn().toLowerCase().indexOf("webkit")!=-1&&!it("Edge"))&&!(it("Trident")||it("MSIE"))&&!it("Edge"),vl=yn().toLowerCase().indexOf("webkit")!=-1&&!it("Edge");function Dr(){var e=y.document;return e?e.documentMode:void 0}var tn;t:{var Qn="",Wn=function(){var e=yn();if(Cr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Sr)return/Edge\/([\d\.]+)/.exec(e);if(jt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(vl)return/WebKit\/(\S+)/.exec(e);if(yl)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Wn&&(Qn=Wn?Wn[1]:""),jt){var Xn=Dr();if(Xn!=null&&Xn>parseFloat(Qn)){tn=String(Xn);break t}}tn=Qn}var wl={};function El(){return ml(function(){let e=0;const t=_i(String(tn)).split("."),n=_i("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=zn(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||zn(i[2].length==0,r[2].length==0)||zn(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var ls;if(y.document&&jt){var Ni=Dr();ls=Ni||parseInt(tn,10)||void 0}else ls=void 0;var Tl=ls;function ge(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Cr){t:{try{ks(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Al[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ge.X.h.call(this)}}j(ge,z);var Al={2:"touch",3:"pen",4:"mouse"};ge.prototype.h=function(){ge.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var De="closure_listenable_"+(1e6*Math.random()|0),Il=0;function bl(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=i,this.key=++Il,this.ba=this.ea=!1}function vn(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function xs(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function _r(e){const t={};for(const n in e)t[n]=e[n];return t}const ki="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nr(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<ki.length;r++)n=ki[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function wn(e){this.src=e,this.g={},this.h=0}wn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=us(e,t,s,i);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new bl(t,this.src,r,!!s,i),t.ea=n,e.push(t)),t};function hs(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=br(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(vn(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function us(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ba&&r.listener==t&&r.capture==!!n&&r.ha==s)return i}return-1}var Rs="closure_lm_"+(1e6*Math.random()|0),Yn={};function kr(e,t,n,s,i){if(s&&s.once)return Rr(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)kr(e,t[r],n,s,i);return null}return n=Ls(n),e&&e[De]?e.N(t,n,Ce(s)?!!s.capture:!!s,i):xr(e,t,n,!1,s,i)}function xr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Ce(i)?!!i.capture:!!i,a=Ms(e);if(a||(e[Rs]=a=new wn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=Sl(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)gl||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent(Mr(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Sl(){function e(n){return t.call(e.src,e.listener,n)}const t=Cl;return e}function Rr(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Rr(e,t[r],n,s,i);return null}return n=Ls(n),e&&e[De]?e.O(t,n,Ce(s)?!!s.capture:!!s,i):xr(e,t,n,!0,s,i)}function Or(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Or(e,t[r],n,s,i);else s=Ce(s)?!!s.capture:!!s,n=Ls(n),e&&e[De]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=us(r,n,s,i),-1<n&&(vn(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=Ms(e))&&(t=e.g[t.toString()],e=-1,t&&(e=us(t,n,s,i)),(n=-1<e?t[e]:null)&&Os(n))}function Os(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[De])hs(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Mr(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=Ms(t))?(hs(n,e),n.h==0&&(n.src=null,t[Rs]=null)):vn(e)}}}function Mr(e){return e in Yn?Yn[e]:Yn[e]="on"+e}function Cl(e,t){if(e.ba)e=!0;else{t=new ge(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&Os(e),e=n.call(s,t)}return e}function Ms(e){return e=e[Rs],e instanceof wn?e:null}var Jn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ls(e){return typeof e=="function"?e:(e[Jn]||(e[Jn]=function(t){return e.handleEvent(t)}),e[Jn])}function F(){vt.call(this),this.i=new wn(this),this.P=this,this.I=null}j(F,vt);F.prototype[De]=!0;F.prototype.removeEventListener=function(e,t,n,s){Or(this,e,t,n,s)};function B(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),Nr(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Ue(o,s,!0,t)&&i}if(o=t.g=e,i=Ue(o,s,!0,t)&&i,i=Ue(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Ue(o,s,!1,t)&&i}F.prototype.M=function(){if(F.X.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)vn(n[s]);delete e.g[t],e.h--}}this.I=null};F.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};F.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Ue(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&hs(e.i,o),i=a.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var $s=y.JSON.stringify;function Dl(){var e=Pr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class _l{constructor(){this.h=this.g=null}add(t,n){const s=Lr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Lr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new Nl,e=>e.reset());class Nl{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function kl(e){y.setTimeout(()=>{throw e},0)}function $r(e,t){fs||xl(),ds||(fs(),ds=!0),Pr.add(e,t)}var fs;function xl(){var e=y.Promise.resolve(void 0);fs=function(){e.then(Rl)}}var ds=!1,Pr=new _l;function Rl(){for(var e;e=Dl();){try{e.h.call(e.g)}catch(n){kl(n)}var t=Lr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ds=!1}function En(e,t){F.call(this),this.h=e||1,this.g=t||y,this.j=G(this.lb,this),this.l=Date.now()}j(En,F);g=En.prototype;g.ca=!1;g.R=null;g.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),B(this,"tick"),this.ca&&(Ps(this),this.start()))}};g.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ps(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}g.M=function(){En.X.M.call(this),Ps(this),delete this.g};function Fs(e,t,n){if(typeof e=="function")n&&(e=G(e,n));else if(e&&typeof e.handleEvent=="function")e=G(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:y.setTimeout(e,t||0)}function Fr(e){e.g=Fs(()=>{e.g=null,e.i&&(e.i=!1,Fr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Ol extends vt{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Fr(this)}M(){super.M(),this.g&&(y.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function me(e){vt.call(this),this.h=e,this.g={}}j(me,vt);var xi=[];function Vr(e,t,n,s){Array.isArray(n)||(n&&(xi[0]=n.toString()),n=xi);for(var i=0;i<n.length;i++){var r=kr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Ur(e){xs(e.g,function(t,n){this.g.hasOwnProperty(n)&&Os(t)},e),e.g={}}me.prototype.M=function(){me.X.M.call(this),Ur(this)};me.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Tn(){this.g=!0}Tn.prototype.Aa=function(){this.g=!1};function Ml(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var h=l[0];l=l[1];var u=h.split("_");o=2<=u.length&&u[1]=="type"?o+(h+"="+l+"&"):o+(h+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function Ll(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function Mt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+Pl(e,n)+(s?" "+s:"")})}function $l(e,t){e.info(function(){return"TIMEOUT: "+t})}Tn.prototype.info=function(){};function Pl(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return $s(n)}catch{return t}}var xt={},Ri=null;function An(){return Ri=Ri||new F}xt.Pa="serverreachability";function Br(e){z.call(this,xt.Pa,e)}j(Br,z);function ye(e){const t=An();B(t,new Br(t))}xt.STAT_EVENT="statevent";function jr(e,t){z.call(this,xt.STAT_EVENT,e),this.stat=t}j(jr,z);function Q(e){const t=An();B(t,new jr(t,e))}xt.Qa="timingevent";function Hr(e,t){z.call(this,xt.Qa,e),this.size=t}j(Hr,z);function _e(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return y.setTimeout(function(){e()},t)}var In={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Kr={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Vs(){}Vs.prototype.h=null;function Oi(e){return e.h||(e.h=e.i())}function qr(){}var Ne={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Us(){z.call(this,"d")}j(Us,z);function Bs(){z.call(this,"c")}j(Bs,z);var ps;function bn(){}j(bn,Vs);bn.prototype.g=function(){return new XMLHttpRequest};bn.prototype.i=function(){return{}};ps=new bn;function ke(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new me(this),this.O=Fl,e=cs?125:void 0,this.T=new En(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Gr}function Gr(){this.i=null,this.g="",this.h=!1}var Fl=45e3,gs={},en={};g=ke.prototype;g.setTimeout=function(e){this.O=e};function ms(e,t,n){e.K=1,e.v=Cn(lt(t)),e.s=n,e.P=!0,zr(e,null)}function zr(e,t){e.F=Date.now(),xe(e),e.A=lt(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),eo(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Gr,e.g=Io(e.l,n?t:null,!e.s),0<e.N&&(e.L=new Ol(G(e.La,e,e.g),e.N)),Vr(e.S,e.g,"readystatechange",e.ib),t=e.H?_r(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ye(),Ml(e.j,e.u,e.A,e.m,e.U,e.s)}g.ib=function(e){e=e.target;const t=this.L;t&&ot(e)==3?t.l():this.La(e)};g.La=function(e){try{if(e==this.g)t:{const h=ot(this.g);var t=this.g.Ea();const u=this.g.aa();if(!(3>h)&&(h!=3||cs||this.g&&(this.h.h||this.g.fa()||Pi(this.g)))){this.I||h!=4||t==7||(t==8||0>=u?ye(3):ye(2)),Sn(this);var n=this.g.aa();this.Y=n;e:if(Qr(this)){var s=Pi(this.g);e="";var i=s.length,r=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),ie(this);var o="";break e}this.h.i=new y.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,Ll(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ze(a)){var l=a;break e}}l=null}if(n=l)Mt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ys(this,n);else{this.i=!1,this.o=3,Q(12),At(this),ie(this);break t}}this.P?(Wr(this,h,o),cs&&this.i&&h==3&&(Vr(this.S,this.T,"tick",this.hb),this.T.start())):(Mt(this.j,this.m,o,null),ys(this,o)),h==4&&At(this),this.i&&!this.I&&(h==4?wo(this.l,this):(this.i=!1,xe(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),At(this),ie(this)}}}catch{}finally{}};function Qr(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Da:!1}function Wr(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=Vl(e,n),i==en){t==4&&(e.o=4,Q(14),s=!1),Mt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==gs){e.o=4,Q(15),Mt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else Mt(e.j,e.m,i,null),ys(e,i);Qr(e)&&i!=en&&i!=gs&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Qs(t),t.K=!0,Q(11))):(Mt(e.j,e.m,n,"[Invalid Chunked Response]"),At(e),ie(e))}g.hb=function(){if(this.g){var e=ot(this.g),t=this.g.fa();this.C<t.length&&(Sn(this),Wr(this,e,t),this.i&&e!=4&&xe(this))}};function Vl(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?en:(n=Number(t.substring(n,s)),isNaN(n)?gs:(s+=1,s+n>t.length?en:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,At(this)};function xe(e){e.V=Date.now()+e.O,Xr(e,e.O)}function Xr(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=_e(G(e.gb,e),t)}function Sn(e){e.B&&(y.clearTimeout(e.B),e.B=null)}g.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?($l(this.j,this.A),this.K!=2&&(ye(),Q(17)),At(this),this.o=2,ie(this)):Xr(this,this.V-e)};function ie(e){e.l.G==0||e.I||wo(e.l,e)}function At(e){Sn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ps(e.T),Ur(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function ys(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||vs(n.h,e))){if(!e.J&&vs(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)rn(n),Nn(n);else break t;zs(n),Q(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=_e(G(n.cb,n),6e3));if(1>=io(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else It(n,11)}else if((e.J||n.g==e)&&rn(n),!Ze(t))for(i=n.Fa.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(n.T=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.I=l[1],n.ka=l[2];const h=l[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const u=l[4];u!=null&&(n.Ca=u,n.j.info("SVER="+n.Ca));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const v=e.g;if(v){const T=v.g?v.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.h;r.g||T.indexOf("spdy")==-1&&T.indexOf("quic")==-1&&T.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(js(r,r.h),r.h=null))}if(s.D){const S=v.g?v.g.getResponseHeader("X-HTTP-Session-Id"):null;S&&(s.za=S,_(s.F,s.D,S))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=e;if(s.sa=Ao(s,s.H?s.ka:null,s.V),o.J){ro(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(Sn(a),xe(a)),s.g=o}else yo(s);0<n.i.length&&kn(n)}else l[0]!="stop"&&l[0]!="close"||It(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?It(n,7):Gs(n):l[0]!="noop"&&n.l&&n.l.wa(l),n.A=0)}}ye(4)}catch{}}function Ul(e){if(e.W&&typeof e.W=="function")return e.W();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(mn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Bl(e){if(e.oa&&typeof e.oa=="function")return e.oa();if(!e.W||typeof e.W!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(mn(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const s in e)t[n++]=s;return t}}}function Yr(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(mn(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=Bl(e),s=Ul(e),i=s.length,r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}var Jr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jl(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function St(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof St){this.h=t!==void 0?t:e.h,nn(this,e.j),this.s=e.s,this.g=e.g,sn(this,e.m),this.l=e.l,t=e.i;var n=new ve;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Mi(this,n),this.o=e.o}else e&&(n=String(e).match(Jr))?(this.h=!!t,nn(this,n[1]||"",!0),this.s=ne(n[2]||""),this.g=ne(n[3]||"",!0),sn(this,n[4]),this.l=ne(n[5]||"",!0),Mi(this,n[6]||"",!0),this.o=ne(n[7]||"")):(this.h=!!t,this.i=new ve(null,this.h))}St.prototype.toString=function(){var e=[],t=this.j;t&&e.push(se(t,Li,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(se(t,Li,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(se(n,n.charAt(0)=="/"?ql:Kl,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",se(n,zl)),e.join("")};function lt(e){return new St(e)}function nn(e,t,n){e.j=n?ne(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function sn(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Mi(e,t,n){t instanceof ve?(e.i=t,Ql(e.i,e.h)):(n||(t=se(t,Gl)),e.i=new ve(t,e.h))}function _(e,t,n){e.i.set(t,n)}function Cn(e){return _(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ne(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function se(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Hl),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Hl(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Li=/[#\/\?@]/g,Kl=/[#\?:]/g,ql=/[#\?]/g,Gl=/[#\?@]/g,zl=/#/g;function ve(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function wt(e){e.g||(e.g=new Map,e.h=0,e.i&&jl(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=ve.prototype;g.add=function(e,t){wt(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function Zr(e,t){wt(e),t=Xt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function to(e,t){return wt(e),t=Xt(e,t),e.g.has(t)}g.forEach=function(e,t){wt(this),this.g.forEach(function(n,s){n.forEach(function(i){e.call(t,i,s,this)},this)},this)};g.oa=function(){wt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const i=e[s];for(let r=0;r<i.length;r++)n.push(t[s])}return n};g.W=function(e){wt(this);let t=[];if(typeof e=="string")to(this,e)&&(t=t.concat(this.g.get(Xt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};g.set=function(e,t){return wt(this),this.i=null,e=Xt(this,e),to(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t};function eo(e,t,n){Zr(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),Ns(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),e.push(i)}}return this.i=e.join("&")};function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ql(e,t){t&&!e.j&&(wt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Zr(this,s),eo(this,i,n))},e)),e.j=t}var Wl=class{constructor(t,n){this.h=t,this.g=n}};function no(e){this.l=e||Xl,y.PerformanceNavigationTiming?(e=y.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(y.g&&y.g.Ga&&y.g.Ga()&&y.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Xl=10;function so(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function io(e){return e.h?1:e.g?e.g.size:0}function vs(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function js(e,t){e.g?e.g.add(t):e.h=t}function ro(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}no.prototype.cancel=function(){if(this.i=oo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function oo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Ns(e.i)}function Hs(){}Hs.prototype.stringify=function(e){return y.JSON.stringify(e,void 0)};Hs.prototype.parse=function(e){return y.JSON.parse(e,void 0)};function Yl(){this.g=new Hs}function Jl(e,t,n){const s=n||"";try{Yr(e,function(i,r){let o=i;Ce(i)&&(o=$s(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Zl(e,t){const n=new Tn;if(y.Image){const s=new Image;s.onload=Ve(Be,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Ve(Be,n,s,"TestLoadImage: error",!1,t),s.onabort=Ve(Be,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Ve(Be,n,s,"TestLoadImage: timeout",!1,t),y.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Be(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Re(e){this.l=e.ac||null,this.j=e.jb||!1}j(Re,Vs);Re.prototype.g=function(){return new Dn(this.l,this.j)};Re.prototype.i=function(e){return function(){return e}}({});function Dn(e,t){F.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ks,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}j(Dn,F);var Ks=0;g=Dn.prototype;g.open=function(e,t){if(this.readyState!=Ks)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,we(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||y).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Oe(this)),this.readyState=Ks};g.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,we(this)),this.g&&(this.readyState=3,we(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof y.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ao(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))};function ao(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}g.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Oe(this):we(this),this.readyState==3&&ao(this)}};g.Va=function(e){this.g&&(this.response=this.responseText=e,Oe(this))};g.Ua=function(e){this.g&&(this.response=e,Oe(this))};g.ga=function(){this.g&&Oe(this)};function Oe(e){e.readyState=4,e.l=null,e.j=null,e.A=null,we(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function we(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var th=y.JSON.parse;function x(e){F.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=co,this.K=this.L=!1}j(x,F);var co="",eh=/^https?$/i,nh=["POST","PUT"];g=x.prototype;g.Ka=function(e){this.L=e};g.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ps.g(),this.C=this.u?Oi(this.u):Oi(ps),this.g.onreadystatechange=G(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){$i(this,r);return}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=y.FormData&&e instanceof y.FormData,!(0<=br(nh,t))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{uo(this),0<this.B&&((this.K=sh(this.g))?(this.g.timeout=this.B,this.g.ontimeout=G(this.qa,this)):this.A=Fs(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){$i(this,r)}};function sh(e){return jt&&El()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}g.qa=function(){typeof _s<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,B(this,"timeout"),this.abort(8))};function $i(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,lo(e),_n(e)}function lo(e){e.D||(e.D=!0,B(e,"complete"),B(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,B(this,"complete"),B(this,"abort"),_n(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),_n(this,!0)),x.X.M.call(this)};g.Ha=function(){this.s||(this.F||this.v||this.l?ho(this):this.fb())};g.fb=function(){ho(this)};function ho(e){if(e.h&&typeof _s<"u"&&(!e.C[1]||ot(e)!=4||e.aa()!=2)){if(e.v&&ot(e)==4)Fs(e.Ha,0,e);else if(B(e,"readystatechange"),ot(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(Jr)[1]||null;if(!i&&y.self&&y.self.location){var r=y.self.location.protocol;i=r.substr(0,r.length-1)}s=!eh.test(i?i.toLowerCase():"")}n=s}if(n)B(e,"complete"),B(e,"success");else{e.m=6;try{var o=2<ot(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",lo(e)}}finally{_n(e)}}}}function _n(e,t){if(e.g){uo(e);const n=e.g,s=e.C[0]?Je:null;e.g=null,e.C=null,t||B(e,"ready");try{n.onreadystatechange=s}catch{}}}function uo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(y.clearTimeout(e.A),e.A=null)}function ot(e){return e.g?e.g.readyState:0}g.aa=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}};g.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),th(t)}};function Pi(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case co:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Ea=function(){return this.m};g.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function fo(e){let t="";return xs(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function qs(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=fo(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):_(e,t,n))}function ee(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function po(e){this.Ca=0,this.i=[],this.j=new Tn,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ee("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ee("baseRetryDelayMs",5e3,e),this.bb=ee("retryDelaySeedMs",1e4,e),this.$a=ee("forwardChannelMaxRetries",2,e),this.ta=ee("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new no(e&&e.concurrentRequestLimit),this.Fa=new Yl,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}g=po.prototype;g.ma=8;g.G=1;function Gs(e){if(go(e),e.G==3){var t=e.U++,n=lt(e.F);_(n,"SID",e.I),_(n,"RID",t),_(n,"TYPE","terminate"),Me(e,n),t=new ke(e,e.j,t,void 0),t.K=2,t.v=Cn(lt(n)),n=!1,y.navigator&&y.navigator.sendBeacon&&(n=y.navigator.sendBeacon(t.v.toString(),"")),!n&&y.Image&&(new Image().src=t.v,n=!0),n||(t.g=Io(t.l,null),t.g.da(t.v)),t.F=Date.now(),xe(t)}To(e)}function Nn(e){e.g&&(Qs(e),e.g.cancel(),e.g=null)}function go(e){Nn(e),e.u&&(y.clearTimeout(e.u),e.u=null),rn(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&y.clearTimeout(e.m),e.m=null)}function kn(e){so(e.h)||e.m||(e.m=!0,$r(e.Ja,e),e.C=0)}function ih(e,t){return io(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=t.D.concat(e.i),!0):e.G==1||e.G==2||e.C>=(e.Za?0:e.$a)?!1:(e.m=_e(G(e.Ja,e,t),Eo(e,e.C)),e.C++,!0)}g.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new ke(this,this.j,e,void 0);let r=this.s;if(this.S&&(r?(r=_r(r),Nr(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){e:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=mo(this,i,t),n=lt(this.F),_(n,"RID",e),_(n,"CVER",22),this.D&&_(n,"X-HTTP-Session-Id",this.D),Me(this,n),r&&(this.N?t="headers="+encodeURIComponent(String(fo(r)))+"&"+t:this.o&&qs(n,this.o,r)),js(this.h,i),this.Ya&&_(n,"TYPE","init"),this.O?(_(n,"$req",t),_(n,"SID","null"),i.Z=!0,ms(i,n,null)):ms(i,n,t),this.G=2}}else this.G==3&&(e?Fi(this,e):this.i.length==0||so(this.h)||Fi(this))};function Fi(e,t){var n;t?n=t.m:n=e.U++;const s=lt(e.F);_(s,"SID",e.I),_(s,"RID",n),_(s,"AID",e.T),Me(e,s),e.o&&e.s&&qs(s,e.o,e.s),n=new ke(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=mo(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),js(e.h,n),ms(n,s,t)}function Me(e,t){e.ia&&xs(e.ia,function(n,s){_(t,s,n)}),e.l&&Yr({},function(n,s){_(t,s,n)})}function mo(e,t,n){n=Math.min(e.i.length,n);var s=e.l?G(e.l.Ra,e.l,e):null;t:{var i=e.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=i[c].h;const h=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),a=!1;else try{Jl(h,o,"req"+l+"_")}catch{s&&s(h)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function yo(e){e.g||e.u||(e.Z=1,$r(e.Ia,e),e.A=0)}function zs(e){return e.g||e.u||3<=e.A?!1:(e.Z++,e.u=_e(G(e.Ia,e),Eo(e,e.A)),e.A++,!0)}g.Ia=function(){if(this.u=null,vo(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=_e(G(this.eb,this),e)}};g.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Q(10),Nn(this),vo(this))};function Qs(e){e.B!=null&&(y.clearTimeout(e.B),e.B=null)}function vo(e){e.g=new ke(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=lt(e.sa);_(t,"RID","rpc"),_(t,"SID",e.I),_(t,"CI",e.L?"0":"1"),_(t,"AID",e.T),_(t,"TYPE","xmlhttp"),Me(e,t),e.o&&e.s&&qs(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Cn(lt(t)),n.s=null,n.P=!0,zr(n,e)}g.cb=function(){this.v!=null&&(this.v=null,Nn(this),zs(this),Q(19))};function rn(e){e.v!=null&&(y.clearTimeout(e.v),e.v=null)}function wo(e,t){var n=null;if(e.g==t){rn(e),Qs(e),e.g=null;var s=2}else if(vs(e.h,t))n=t.D,ro(e.h,t),s=1;else return;if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=An(),B(s,new Hr(s,n)),kn(e)}else yo(e);else if(i=t.o,i==3||i==0&&0<e.pa||!(s==1&&ih(e,t)||s==2&&zs(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:It(e,5);break;case 4:It(e,10);break;case 3:It(e,6);break;default:It(e,2)}}}function Eo(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function It(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=G(e.kb,e);n||(n=new St("//www.google.com/images/cleardot.gif"),y.location&&y.location.protocol=="http"||nn(n,"https"),Cn(n)),Zl(n.toString(),s)}else Q(2);e.G=0,e.l&&e.l.va(t),To(e),go(e)}g.kb=function(e){e?(this.j.info("Successfully pinged google.com"),Q(2)):(this.j.info("Failed to ping google.com"),Q(1))};function To(e){if(e.G=0,e.la=[],e.l){const t=oo(e.h);(t.length!=0||e.i.length!=0)&&(Di(e.la,t),Di(e.la,e.i),e.h.i.length=0,Ns(e.i),e.i.length=0),e.l.ua()}}function Ao(e,t,n){var s=n instanceof St?lt(n):new St(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),sn(s,s.m);else{var i=y.location;s=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var r=new St(null,void 0);s&&nn(r,s),t&&(r.g=t),i&&sn(r,i),n&&(r.l=n),s=r}return n=e.D,t=e.za,n&&t&&_(s,n,t),_(s,"VER",e.ma),Me(e,s),s}function Io(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new x(new Re({jb:!0})):new x(e.ra),t.Ka(e.H),t}function bo(){}g=bo.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Ra=function(){};function on(){if(jt&&!(10<=Number(Tl)))throw Error("Environmental error: no available transport.")}on.prototype.g=function(e,t){return new J(e,t)};function J(e,t){F.call(this),this.g=new po(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!Ze(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!Ze(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Yt(this)}j(J,F);J.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;Q(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=Ao(e,null,e.V),kn(e)};J.prototype.close=function(){Gs(this.g)};J.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=$s(e),e=n);t.i.push(new Wl(t.ab++,e)),t.G==3&&kn(t)};J.prototype.M=function(){this.g.l=null,delete this.j,Gs(this.g),delete this.g,J.X.M.call(this)};function So(e){Us.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}j(So,Us);function Co(){Bs.call(this),this.status=1}j(Co,Bs);function Yt(e){this.g=e}j(Yt,bo);Yt.prototype.xa=function(){B(this.g,"a")};Yt.prototype.wa=function(e){B(this.g,new So(e))};Yt.prototype.va=function(e){B(this.g,new Co)};Yt.prototype.ua=function(){B(this.g,"b")};on.prototype.createWebChannel=on.prototype.g;J.prototype.send=J.prototype.u;J.prototype.open=J.prototype.m;J.prototype.close=J.prototype.close;In.NO_ERROR=0;In.TIMEOUT=8;In.HTTP_ERROR=6;Kr.COMPLETE="complete";qr.EventType=Ne;Ne.OPEN="a";Ne.CLOSE="b";Ne.ERROR="c";Ne.MESSAGE="d";F.prototype.listen=F.prototype.N;x.prototype.listenOnce=x.prototype.O;x.prototype.getLastError=x.prototype.Oa;x.prototype.getLastErrorCode=x.prototype.Ea;x.prototype.getStatus=x.prototype.aa;x.prototype.getResponseJson=x.prototype.Sa;x.prototype.getResponseText=x.prototype.fa;x.prototype.send=x.prototype.da;x.prototype.setWithCredentials=x.prototype.Ka;var rh=function(){return new on},oh=function(){return An()},Zn=In,ah=Kr,ch=xt,Vi={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},lh=Re,je=qr,hh=x;const Ui="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}H.UNAUTHENTICATED=new H(null),H.GOOGLE_CREDENTIALS=new H("google-credentials-uid"),H.FIRST_PARTY=new H("first-party-uid"),H.MOCK_USER=new H("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jt="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new vr("@firebase/firestore");function Bi(){return _t.logLevel}function m(e,...t){if(_t.logLevel<=b.DEBUG){const n=t.map(Ws);_t.debug(`Firestore (${Jt}): ${e}`,...n)}}function Nt(e,...t){if(_t.logLevel<=b.ERROR){const n=t.map(Ws);_t.error(`Firestore (${Jt}): ${e}`,...n)}}function ws(e,...t){if(_t.logLevel<=b.WARN){const n=t.map(Ws);_t.warn(`Firestore (${Jt}): ${e}`,...n)}}function Ws(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e="Unexpected state"){const t=`FIRESTORE (${Jt}) INTERNAL ASSERTION FAILED: `+e;throw Nt(t),new Error(t)}function O(e,t){e||A()}function D(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Wt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class uh{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(H.UNAUTHENTICATED))}shutdown(){}}class fh{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dh{constructor(t){this.t=t,this.currentUser=H.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let r=new Ct;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ct,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=r;t.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ct)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(O(typeof s.accessToken=="string"),new Do(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return O(t===null||typeof t=="string"),new H(t)}}class ph{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i,this.type="FirstParty",this.user=H.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(O(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class gh{constructor(t,n,s,i){this.h=t,this.l=n,this.m=s,this.g=i}getToken(){return Promise.resolve(new ph(this.h,this.l,this.m,this.g))}start(t,n){t.enqueueRetryable(()=>n(H.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mh{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yh{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.A;return this.A=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(O(typeof n.token=="string"),this.A=n.token,new mh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=vh(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function C(e,t){return e<t?-1:e>t?1:0}function Ht(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new P(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?C(this.nanoseconds,t.nanoseconds):C(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new P(0,0))}static max(){return new N(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,n,s){n===void 0?n=0:n>t.length&&A(),s===void 0?s=t.length-n:s>t.length-n&&A(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ee.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ee?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class k extends Ee{construct(t,n,s){return new k(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(d.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new k(n)}static emptyPath(){return new k([])}}const wh=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class q extends Ee{construct(t,n,s){return new q(t,n,s)}static isValidIdentifier(t){return wh.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),q.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new q(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(d.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(d.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const c=t[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=c,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(d.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new q(n)}static emptyPath(){return new q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.path=t}static fromPath(t){return new E(k.fromString(t))}static fromName(t){return new E(k.fromString(t).popFirst(5))}static empty(){return new E(k.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&k.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return k.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new E(new k(t.slice()))}}function Eh(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=N.fromTimestamp(s===1e9?new P(n+1,0):new P(n,s));return new gt(i,E.empty(),t)}function Th(e){return new gt(e.readTime,e.key,-1)}class gt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new gt(N.min(),E.empty(),-1)}static max(){return new gt(N.max(),E.empty(),-1)}}function Ah(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=E.comparator(e.documentKey,t.documentKey),n!==0?n:C(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function No(e){if(e.code!==d.FAILED_PRECONDITION||e.message!==Ih)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&A(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new f((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):f.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):f.reject(n)}static resolve(t){return new f((n,s)=>{n(t)})}static reject(t){return new f((n,s)=>{s(t)})}static waitFor(t){return new f((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},c=>s(c))}),o=!0,r===i&&n()})}static or(t){let n=f.resolve(!1);for(const s of t)n=n.next(i=>i?f.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(t,n){return new f((s,i)=>{const r=t.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(t[l]).next(h=>{o[l]=h,++a,a===r&&s(o)},h=>i(h))}})}static doWhile(t,n){return new f((s,i)=>{const r=()=>{t()===!0?n().next(()=>{r()},i):s()};r()})}}function xn(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>n.writeSequenceNumber(s))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}ko.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,n,s,i,r,o,a,c){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class an{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new an("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof an&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Le(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function xo(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(e){return e==null}function cn(e){return e===0&&1/e==-1/0}function Ch(e){return typeof e=="number"&&Number.isInteger(e)&&!cn(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Dh("Invalid base64 string: "+i):i}}(t);return new ht(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new ht(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return C(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const _h=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(e){if(O(!!e),typeof e=="string"){let t=0;const n=_h.exec(e);if(O(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:V(e.seconds),nanos:V(e.nanos)}}function V(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Te(e){return typeof e=="string"?ht.fromBase64String(e):ht.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ln(e){const t=kt(e.mapValue.fields.__local_write_time__.timestampValue);return new P(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const He={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Kt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Nh(e)?4:kh(e)?9007199254740991:10:A()}function rt(e,t){if(e===t)return!0;const n=Kt(e);if(n!==Kt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ln(e).isEqual(ln(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=kt(s.timestampValue),o=kt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Te(s.bytesValue).isEqual(Te(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return V(s.geoPointValue.latitude)===V(i.geoPointValue.latitude)&&V(s.geoPointValue.longitude)===V(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return V(s.integerValue)===V(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=V(s.doubleValue),o=V(i.doubleValue);return r===o?cn(r)===cn(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return Ht(e.arrayValue.values||[],t.arrayValue.values||[],rt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(ji(r)!==ji(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!rt(r[a],o[a])))return!1;return!0}(e,t);default:return A()}}function Ae(e,t){return(e.values||[]).find(n=>rt(n,t))!==void 0}function qt(e,t){if(e===t)return 0;const n=Kt(e),s=Kt(t);if(n!==s)return C(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return C(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=V(i.integerValue||i.doubleValue),a=V(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Hi(e.timestampValue,t.timestampValue);case 4:return Hi(ln(e),ln(t));case 5:return C(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Te(i),a=Te(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=C(o[c],a[c]);if(l!==0)return l}return C(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=C(V(i.latitude),V(r.latitude));return o!==0?o:C(V(i.longitude),V(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=qt(o[c],a[c]);if(l)return l}return C(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){if(i===He.mapValue&&r===He.mapValue)return 0;if(i===He.mapValue)return 1;if(r===He.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let h=0;h<a.length&&h<l.length;++h){const u=C(a[h],l[h]);if(u!==0)return u;const p=qt(o[a[h]],c[l[h]]);if(p!==0)return p}return C(a.length,l.length)}(e.mapValue,t.mapValue);default:throw A()}}function Hi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return C(e,t);const n=kt(e),s=kt(t),i=C(n.seconds,s.seconds);return i!==0?i:C(n.nanos,s.nanos)}function Gt(e){return Es(e)}function Es(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=kt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Te(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,E.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Es(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${Es(s.fields[a])}`;return r+"}"}(e.mapValue):A();var t,n}function Ts(e){return!!e&&"integerValue"in e}function Ys(e){return!!e&&"arrayValue"in e}function Ge(e){return!!e&&"mapValue"in e}function re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Le(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=re(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function kh(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,n){this.position=t,this.inclusive=n}}function Ki(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=E.comparator(E.fromName(o.referenceValue),n.key):s=qt(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function qi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!rt(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{}class $ extends Ro{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new Rh(t,n,s):n==="array-contains"?new Lh(t,s):n==="in"?new $h(t,s):n==="not-in"?new Ph(t,s):n==="array-contains-any"?new Fh(t,s):new $(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new Oh(t,s):new Mh(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(qt(n,this.value)):n!==null&&Kt(this.value)===Kt(n)&&this.matchesComparison(qt(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return A()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class mt extends Ro{constructor(t,n){super(),this.filters=t,this.op=n,this.ft=null}static create(t,n){return new mt(t,n)}matches(t){return Oo(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.dt(n=>n.isInequality());return t!==null?t.field:null}dt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function Oo(e){return e.op==="and"}function Mo(e){return xh(e)&&Oo(e)}function xh(e){for(const t of e.filters)if(t instanceof mt)return!1;return!0}function As(e){if(e instanceof $)return e.field.canonicalString()+e.op.toString()+Gt(e.value);if(Mo(e))return e.filters.map(t=>As(t)).join(",");{const t=e.filters.map(n=>As(n)).join(",");return`${e.op}(${t})`}}function Lo(e,t){return e instanceof $?function(n,s){return s instanceof $&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)}(e,t):e instanceof mt?function(n,s){return s instanceof mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Lo(r,s.filters[o]),!0):!1}(e,t):void A()}function $o(e){return e instanceof $?function(t){return`${t.field.canonicalString()} ${t.op} ${Gt(t.value)}`}(e):e instanceof mt?function(t){return t.op.toString()+" {"+t.getFilters().map($o).join(" ,")+"}"}(e):"Filter"}class Rh extends ${constructor(t,n,s){super(t,n,s),this.key=E.fromName(s.referenceValue)}matches(t){const n=E.comparator(t.key,this.key);return this.matchesComparison(n)}}class Oh extends ${constructor(t,n){super(t,"in",n),this.keys=Po("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class Mh extends ${constructor(t,n){super(t,"not-in",n),this.keys=Po("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Po(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>E.fromName(s.referenceValue))}class Lh extends ${constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ys(n)&&Ae(n.arrayValue,this.value)}}class $h extends ${constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Ae(this.value.arrayValue,n)}}class Ph extends ${constructor(t,n){super(t,"not-in",n)}matches(t){if(Ae(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Ae(this.value.arrayValue,n)}}class Fh extends ${constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ys(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ae(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Vh(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new X(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new X(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ke(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ke(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ke(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ke(this.root,t,this.comparator,!0)}}class Ke{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s??U.RED,this.left=i??U.EMPTY,this.right=r??U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new U(t??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return U.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw A();const t=this.left.check();if(t!==this.right.check())throw A();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw A()}get value(){throw A()}get color(){throw A()}get left(){throw A()}get right(){throw A()}copy(e,t,n,s,i){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.comparator=t,this.data=new X(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Gi(this.data.getIterator())}getIteratorFrom(t){return new Gi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof W)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new W(this.comparator);return n.data=t,n}}class Gi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(t){this.fields=t,t.sort(q.comparator)}static empty(){return new nt([])}unionWith(t){let n=new W(q.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new nt(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return Ht(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t){this.value=t}static empty(){return new et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Ge(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(n)}setAll(t){let n=q.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=re(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());Ge(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return rt(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];Ge(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Le(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new et(re(this.value))}}function Fo(e){const t=[];return Le(e.fields,(n,s)=>{const i=new q([n]);if(Ge(s)){const r=Fo(s.mapValue).fields;if(r.length===0)t.push(i);else for(const o of r)t.push(i.child(o))}else t.push(i)}),new nt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,n,s,i,r,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(t){return new tt(t,0,N.min(),N.min(),N.min(),et.empty(),0)}static newFoundDocument(t,n,s,i){return new tt(t,1,n,N.min(),s,i,0)}static newNoDocument(t,n){return new tt(t,2,n,N.min(),N.min(),et.empty(),0)}static newUnknownDocument(t,n){return new tt(t,3,n,N.min(),N.min(),et.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this._t=null}}function zi(e,t=null,n=[],s=[],i=null,r=null,o=null){return new Uh(e,t,n,s,i,r,o)}function Js(e){const t=D(e);if(t._t===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>As(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Xs(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Gt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Gt(s)).join(",")),t._t=n}return t._t}function Zs(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!Vh(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Lo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qi(e.startAt,t.startAt)&&qi(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,c=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Bh(e,t,n,s,i,r,o,a){return new Rn(e,t,n,s,i,r,o,a)}function jh(e){return new Rn(e)}function Qi(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Hh(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Kh(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function qh(e){return e.collectionGroup!==null}function Pt(e){const t=D(e);if(t.wt===null){t.wt=[];const n=Kh(t),s=Hh(t);if(n!==null&&s===null)n.isKeyField()||t.wt.push(new oe(n)),t.wt.push(new oe(q.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.wt.push(new oe(q.keyField(),r))}}}return t.wt}function zt(e){const t=D(e);if(!t.gt)if(t.limitType==="F")t.gt=zi(t.path,t.collectionGroup,Pt(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of Pt(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new oe(r.field,o))}const s=t.endAt?new hn(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new hn(t.startAt.position,t.startAt.inclusive):null;t.gt=zi(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.gt}function Is(e,t,n){return new Rn(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Vo(e,t){return Zs(zt(e),zt(t))&&e.limitType===t.limitType}function Uo(e){return`${Js(zt(e))}|lt:${e.limitType}`}function Wi(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>$o(s)).join(", ")}]`),Xs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Gt(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Gt(s)).join(",")),`Target(${n})`}(zt(e))}; limitType=${e.limitType})`}function ti(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):E.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of Pt(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=Ki(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,Pt(n),s)||n.endAt&&!function(i,r,o){const a=Ki(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,Pt(n),s))}(e,t)}function Gh(e){return(t,n)=>{let s=!1;for(const i of Pt(e)){const r=zh(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function zh(e,t,n){const s=e.field.isKeyField()?E.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),c=o.data.field(i);return a!==null&&c!==null?qt(a,c):A()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return A()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(e,t){if(e.yt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cn(t)?"-0":t}}function jo(e){return{integerValue:""+e}}function Qh(e,t){return Ch(t)?jo(t):Bo(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this._=void 0}}function Wh(e,t,n){return e instanceof un?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof Ie?Ko(e,t):e instanceof be?qo(e,t):function(s,i){const r=Ho(s,i),o=Xi(r)+Xi(s.It);return Ts(r)&&Ts(s.It)?jo(o):Bo(s.Tt,o)}(e,t)}function Xh(e,t,n){return e instanceof Ie?Ko(e,t):e instanceof be?qo(e,t):n}function Ho(e,t){return e instanceof fn?Ts(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class un extends On{}class Ie extends On{constructor(t){super(),this.elements=t}}function Ko(e,t){const n=Go(t);for(const s of e.elements)n.some(i=>rt(i,s))||n.push(s);return{arrayValue:{values:n}}}class be extends On{constructor(t){super(),this.elements=t}}function qo(e,t){let n=Go(t);for(const s of e.elements)n=n.filter(i=>!rt(i,s));return{arrayValue:{values:n}}}class fn extends On{constructor(t,n){super(),this.Tt=t,this.It=n}}function Xi(e){return V(e.integerValue||e.doubleValue)}function Go(e){return Ys(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Yh(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof Ie&&s instanceof Ie||n instanceof be&&s instanceof be?Ht(n.elements,s.elements,rt):n instanceof fn&&s instanceof fn?rt(n.It,s.It):n instanceof un&&s instanceof un}(e.transform,t.transform)}class Jh{constructor(t,n){this.version=t,this.transformResults=n}}class at{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ze(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Mn{}function zo(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Wo(e.key,at.none()):new $e(e.key,e.data,at.none());{const n=e.data,s=et.empty();let i=new W(q.comparator);for(let r of t.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new Rt(e.key,s,new nt(i.toArray()),at.none())}}function Zh(e,t,n){e instanceof $e?function(s,i,r){const o=s.value.clone(),a=Ji(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof Rt?function(s,i,r){if(!ze(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Ji(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(Qo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ae(e,t,n,s){return e instanceof $e?function(i,r,o,a){if(!ze(i.precondition,r))return o;const c=i.value.clone(),l=Zi(i.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(e,t,n,s):e instanceof Rt?function(i,r,o,a){if(!ze(i.precondition,r))return o;const c=Zi(i.fieldTransforms,a,r),l=r.data;return l.setAll(Qo(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,s):function(i,r,o){return ze(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(e,t,n)}function tu(e,t){let n=null;for(const s of e.fieldTransforms){const i=t.data.field(s.field),r=Ho(s.transform,i||null);r!=null&&(n===null&&(n=et.empty()),n.set(s.field,r))}return n||null}function Yi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ht(n,s,(i,r)=>Yh(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $e extends Mn{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Rt extends Mn{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Qo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Ji(e,t,n){const s=new Map;O(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Xh(o,a,n[i]))}return s}function Zi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Wh(r,o,t))}return s}class Wo extends Mn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class eu extends Mn{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var R,I;function nu(e){switch(e){default:return A();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function su(e){if(e===void 0)return Nt("GRPC error has no .code"),d.UNKNOWN;switch(e){case R.OK:return d.OK;case R.CANCELLED:return d.CANCELLED;case R.UNKNOWN:return d.UNKNOWN;case R.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case R.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case R.INTERNAL:return d.INTERNAL;case R.UNAVAILABLE:return d.UNAVAILABLE;case R.UNAUTHENTICATED:return d.UNAUTHENTICATED;case R.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case R.NOT_FOUND:return d.NOT_FOUND;case R.ALREADY_EXISTS:return d.ALREADY_EXISTS;case R.PERMISSION_DENIED:return d.PERMISSION_DENIED;case R.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case R.ABORTED:return d.ABORTED;case R.OUT_OF_RANGE:return d.OUT_OF_RANGE;case R.UNIMPLEMENTED:return d.UNIMPLEMENTED;case R.DATA_LOSS:return d.DATA_LOSS;default:return A()}}(I=R||(R={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Le(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return xo(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu=new X(E.comparator);function dn(){return iu}const Xo=new X(E.comparator);function qe(...e){let t=Xo;for(const n of e)t=t.insert(n.key,n);return t}function Yo(e){let t=Xo;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function bt(){return ce()}function Jo(){return ce()}function ce(){return new Zt(e=>e.toString(),(e,t)=>e.isEqual(t))}const ru=new X(E.comparator),ou=new W(E.comparator);function K(...e){let t=ou;for(const n of e)t=t.add(n);return t}const au=new W(C);function cu(){return au}class lu{constructor(t,n){this.databaseId=t,this.yt=n}}function bs(e,t){return e.yt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function hu(e,t){return e.yt?t.toBase64():t.toUint8Array()}function uu(e,t){return bs(e,t.toTimestamp())}function Ft(e){return O(!!e),N.fromTimestamp(function(t){const n=kt(t);return new P(n.seconds,n.nanos)}(e))}function Zo(e,t){return function(n){return new k(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function fu(e){const t=k.fromString(e);return O(Eu(t)),t}function Ss(e,t){return Zo(e.databaseId,t.path)}function du(e){const t=fu(e);return t.length===4?k.emptyPath():gu(t)}function pu(e){return new k(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function gu(e){return O(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function tr(e,t,n){return{name:Ss(e,t),fields:n.value.mapValue.fields}}function mu(e,t){let n;if(t instanceof $e)n={update:tr(e,t.key,t.value)};else if(t instanceof Wo)n={delete:Ss(e,t.key)};else if(t instanceof Rt)n={update:tr(e,t.key,t.data),updateMask:wu(t.fieldMask)};else{if(!(t instanceof eu))return A();n={verify:Ss(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof un)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Ie)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof be)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof fn)return{fieldPath:r.field.canonicalString(),increment:o.It};throw A()}(0,s))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:uu(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:A()}(e,t.precondition)),n}function yu(e,t){return e&&e.length>0?(O(t!==void 0),e.map(n=>function(s,i){let r=s.updateTime?Ft(s.updateTime):Ft(i);return r.isEqual(N.min())&&(r=Ft(i)),new Jh(r,s.transformResults||[])}(n,t))):[]}function vu(e){let t=du(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){O(s===1);const h=n.from[0];h.allDescendants?i=h.collectionId:t=t.child(h.collectionId)}let r=[];n.where&&(r=function(h){const u=ta(h);return u instanceof mt&&Mo(u)?u.getFilters():[u]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(u){return new oe(Ot(u.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(u.direction))}(h)));let a=null;n.limit&&(a=function(h){let u;return u=typeof h=="object"?h.value:h,Xs(u)?null:u}(n.limit));let c=null;n.startAt&&(c=function(h){const u=!!h.before,p=h.values||[];return new hn(p,u)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const u=!h.before,p=h.values||[];return new hn(p,u)}(n.endAt)),Bh(t,i,o,r,a,"F",c,l)}function ta(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ot(t.unaryFilter.field);return $.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ot(t.unaryFilter.field);return $.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ot(t.unaryFilter.field);return $.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Ot(t.unaryFilter.field);return $.create(r,"!=",{nullValue:"NULL_VALUE"});default:return A()}}(e):e.fieldFilter!==void 0?function(t){return $.create(Ot(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return A()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return mt.create(t.compositeFilter.filters.map(n=>ta(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return A()}}(t.compositeFilter.op))}(e):A()}function Ot(e){return q.fromServerFormat(e.fieldPath)}function wu(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function Eu(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Zh(r,t,s[i])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ae(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ae(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Jo();return this.mutations.forEach(i=>{const r=t.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const c=zo(o,a);c!==null&&s.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(N.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),K())}isEqual(t){return this.batchId===t.batchId&&Ht(this.mutations,t.mutations,(n,s)=>Yi(n,s))&&Ht(this.baseMutations,t.baseMutations,(n,s)=>Yi(n,s))}}class ei{constructor(t,n,s,i){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(t,n,s){O(t.mutations.length===s.length);let i=ru;const r=t.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new ei(t,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(t){this.oe=t}}function bu(e){const t=vu({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Is(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(){this.Ze=new Cu}addToCollectionParentIndex(t,n){return this.Ze.add(n),f.resolve()}getCollectionParents(t,n){return f.resolve(this.Ze.getEntries(n))}addFieldIndex(t,n){return f.resolve()}deleteFieldIndex(t,n){return f.resolve()}getDocumentsMatchingTarget(t,n){return f.resolve(null)}getIndexType(t,n){return f.resolve(0)}getFieldIndexes(t,n){return f.resolve([])}getNextCollectionGroupToUpdate(t){return f.resolve(null)}getMinOffset(t,n){return f.resolve(gt.min())}getMinOffsetFromCollectionGroup(t,n){return f.resolve(gt.min())}updateCollectionGroup(t,n,s){return f.resolve()}updateIndexEntries(t,n){return f.resolve()}}class Cu{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new W(k.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new W(k.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.Pn=t}next(){return this.Pn+=2,this.Pn}static Vn(){return new Qt(0)}static Sn(){return new Qt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this.changes=new Zt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,tt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?f.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(t,n,s,i){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(t,n))).next(i=>(s!==null&&ae(s.mutation,i,nt.empty(),P.now()),i))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,K()).next(()=>s))}getLocalViewOfDocuments(t,n,s=K()){const i=bt();return this.populateOverlays(t,i,n).next(()=>this.computeViews(t,n,i,s).next(r=>{let o=qe();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=bt();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,K()))}populateOverlays(t,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(t,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,i){let r=dn();const o=ce(),a=ce();return n.forEach((c,l)=>{const h=s.get(l.key);i.has(l.key)&&(h===void 0||h.mutation instanceof Rt)?r=r.insert(l.key,l):h!==void 0?(o.set(l.key,h.mutation.getFieldMask()),ae(h.mutation,l,h.mutation.getFieldMask(),P.now())):o.set(l.key,nt.empty())}),this.recalculateAndSaveOverlays(t,r).next(c=>(c.forEach((l,h)=>o.set(l,h)),n.forEach((l,h)=>{var u;return a.set(l,new _u(h,(u=o.get(l))!==null&&u!==void 0?u:null))}),a))}recalculateAndSaveOverlays(t,n){const s=ce();let i=new X((o,a)=>o-a),r=K();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let h=s.get(c)||nt.empty();h=a.applyToLocalView(l,h),s.set(c,h);const u=(i.get(a.batchId)||K()).add(c);i=i.insert(a.batchId,u)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,h=c.value,u=Jo();h.forEach(p=>{if(!r.has(p)){const v=zo(n.get(p),s.get(p));v!==null&&u.set(p,v),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,u))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(i){return E.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):qh(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,i-r.size):f.resolve(bt());let a=-1,c=r;return o.next(l=>f.forEach(l,(h,u)=>(a<u.largestBatchId&&(a=u.largestBatchId),r.get(h)?f.resolve():this.remoteDocumentCache.getEntry(t,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(t,l,r)).next(()=>this.computeViews(t,c,l,K())).next(h=>({batchId:a,changes:Yo(h)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new E(n)).next(s=>{let i=qe();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const i=n.collectionGroup;let r=qe();return this.indexManager.getCollectionParents(t,i).next(o=>f.forEach(o,a=>{const c=function(l,h){return new Rn(h,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,s).next(l=>{l.forEach((h,u)=>{r=r.insert(h,u)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,i))).next(r=>{i.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,tt.newInvalidDocument(l)))});let o=qe();return r.forEach((a,c)=>{const l=i.get(a);l!==void 0&&ae(l.mutation,c,nt.empty(),P.now()),ti(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(t){this.Tt=t,this.es=new Map,this.ns=new Map}getBundleMetadata(t,n){return f.resolve(this.es.get(n))}saveBundleMetadata(t,n){var s;return this.es.set(n.id,{id:(s=n).id,version:s.version,createTime:Ft(s.createTime)}),f.resolve()}getNamedQuery(t,n){return f.resolve(this.ns.get(n))}saveNamedQuery(t,n){return this.ns.set(n.name,function(s){return{name:s.name,query:bu(s.bundledQuery),readTime:Ft(s.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.overlays=new X(E.comparator),this.ss=new Map}getOverlay(t,n){return f.resolve(this.overlays.get(n))}getOverlays(t,n){const s=bt();return f.forEach(n,i=>this.getOverlay(t,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.ce(t,n,r)}),f.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),f.resolve()}getOverlaysForCollection(t,n,s){const i=bt(),r=n.length+1,o=new E(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return f.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new X((l,h)=>l-h);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>s){let h=r.get(l.largestBatchId);h===null&&(h=bt(),r=r.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=bt(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=i)););return f.resolve(a)}ce(t,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Au(n,s));let r=this.ss.get(n);r===void 0&&(r=K(),this.ss.set(n,r)),this.ss.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.rs=new W(M.os),this.us=new W(M.cs)}isEmpty(){return this.rs.isEmpty()}addReference(t,n){const s=new M(t,n);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.ls(new M(t,n))}fs(t,n){t.forEach(s=>this.removeReference(s,n))}ds(t){const n=new E(new k([])),s=new M(n,t),i=new M(n,t+1),r=[];return this.us.forEachInRange([s,i],o=>{this.ls(o),r.push(o.key)}),r}_s(){this.rs.forEach(t=>this.ls(t))}ls(t){this.rs=this.rs.delete(t),this.us=this.us.delete(t)}ws(t){const n=new E(new k([])),s=new M(n,t),i=new M(n,t+1);let r=K();return this.us.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new M(t,0),s=this.rs.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class M{constructor(t,n){this.key=t,this.gs=n}static os(t,n){return E.comparator(t.key,n.key)||C(t.gs,n.gs)}static cs(t,n){return C(t.gs,n.gs)||E.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new W(M.os)}checkEmpty(t){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Tu(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new M(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(t,n){return f.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.Ts(s),r=i<0?0:i;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(t){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new M(n,0),i=new M(n,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],o=>{const a=this.Is(o.gs);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new W(C);return n.forEach(i=>{const r=new M(i,0),o=new M(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,o],a=>{s=s.add(a.gs)})}),f.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;E.isDocumentKey(r)||(r=r.child(""));const o=new M(new E(r),0);let a=new W(C);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(a=a.add(c.gs)),!0)},o),f.resolve(this.Es(a))}Es(t){const n=[];return t.forEach(s=>{const i=this.Is(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){O(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return f.forEach(n.mutations,i=>{const r=new M(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.ps=s})}bn(t){}containsKey(t,n){const s=new M(n,0),i=this.ps.firstAfterOrEqual(s);return f.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,f.resolve()}As(t,n){return this.Ts(t)}Ts(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Is(t){const n=this.Ts(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(t){this.Rs=t,this.docs=new X(E.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return f.resolve(s?s.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(t,n){let s=dn();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():tt.newInvalidDocument(i))}),f.resolve(s)}getDocumentsMatchingQuery(t,n,s,i){let r=dn();const o=n.path,a=new E(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Ah(Th(h),s)<=0||(i.has(h.key)||ti(n,h))&&(r=r.insert(h.key,h.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(t,n,s,i){A()}bs(t,n){return f.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Mu(this)}getSize(t){return f.resolve(this.size)}}class Mu extends Du{constructor(t){super(),this.Xn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(t,i)):this.Xn.removeEntry(s)}),f.waitFor(n)}getFromCache(t,n){return this.Xn.getEntry(t,n)}getAllFromCache(t,n){return this.Xn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t){this.persistence=t,this.vs=new Zt(n=>Js(n),Zs),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ni,this.targetCount=0,this.Ss=Qt.Vn()}forEachTarget(t,n){return this.vs.forEach((s,i)=>n(i)),f.resolve()}getLastRemoteSnapshotVersion(t){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return f.resolve(this.Ps)}allocateTargetId(t){return this.highestTargetId=this.Ss.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Ps&&(this.Ps=n),f.resolve()}xn(t){this.vs.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Ss=new Qt(n),this.highestTargetId=n),t.sequenceNumber>this.Ps&&(this.Ps=t.sequenceNumber)}addTargetData(t,n){return this.xn(n),this.targetCount+=1,f.resolve()}updateTargetData(t,n){return this.xn(n),f.resolve()}removeTargetData(t,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.vs.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),f.waitFor(r).next(()=>i)}getTargetCount(t){return f.resolve(this.targetCount)}getTargetData(t,n){const s=this.vs.get(n)||null;return f.resolve(s)}addMatchingKeys(t,n,s){return this.Vs.hs(n,s),f.resolve()}removeMatchingKeys(t,n,s){this.Vs.fs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Vs.ds(n),f.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Vs.ws(n);return f.resolve(s)}containsKey(t,n){return f.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(t,n){this.Ds={},this.overlays={},this.Cs=new ko(0),this.xs=!1,this.xs=!0,this.referenceDelegate=t(this),this.Ns=new Lu(this),this.indexManager=new Su,this.remoteDocumentCache=function(s){return new Ou(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Iu(n),this.Os=new ku(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new xu,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ds[t.toKey()];return s||(s=new Ru(n,this.referenceDelegate),this.Ds[t.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new Pu(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(t,n){return f.or(Object.values(this.Ds).map(s=>()=>s.containsKey(t,n)))}}class Pu extends bh{constructor(t){super(),this.currentSequenceNumber=t}}class si{constructor(t){this.persistence=t,this.Bs=new ni,this.Ls=null}static qs(t){return new si(t)}get Us(){if(this.Ls)return this.Ls;throw A()}addReference(t,n,s){return this.Bs.addReference(s,n),this.Us.delete(s.toString()),f.resolve()}removeReference(t,n,s){return this.Bs.removeReference(s,n),this.Us.add(s.toString()),f.resolve()}markPotentiallyOrphaned(t,n){return this.Us.add(n.toString()),f.resolve()}removeTarget(t,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ms(){this.Ls=new Set}Fs(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Us,s=>{const i=E.fromPath(s);return this.Ks(t,i).next(r=>{r||n.removeEntry(i,N.min())})}).next(()=>(this.Ls=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ks(t,n).next(s=>{s?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(t){return 0}Ks(t,n){return f.or([()=>f.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.$s(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Ci=s,this.xi=i}static Ni(t,n){let s=K(),i=K();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new ii(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this.ki=!1}initialize(t,n){this.Oi=t,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(t,n,s,i){return this.Mi(t,n).next(r=>r||this.Fi(t,n,i,s)).next(r=>r||this.$i(t,n))}Mi(t,n){if(Qi(n))return f.resolve(null);let s=zt(n);return this.indexManager.getIndexType(t,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Is(n,null,"F"),s=zt(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(r=>{const o=K(...r);return this.Oi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(c=>{const l=this.Bi(n,a);return this.Li(n,l,o,c.readTime)?this.Mi(t,Is(n,null,"F")):this.qi(t,l,n,c)}))})))}Fi(t,n,s,i){return Qi(n)||i.isEqual(N.min())?this.$i(t,n):this.Oi.getDocuments(t,s).next(r=>{const o=this.Bi(n,r);return this.Li(n,o,s,i)?this.$i(t,n):(Bi()<=b.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wi(n)),this.qi(t,o,n,Eh(i,-1)))})}Bi(t,n){let s=new W(Gh(t));return n.forEach((i,r)=>{ti(t,r)&&(s=s.add(r))}),s}Li(t,n,s,i){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const r=t.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(t,n){return Bi()<=b.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Wi(n)),this.Oi.getDocumentsMatchingQuery(t,n,gt.min())}qi(t,n,s,i){return this.Oi.getDocumentsMatchingQuery(t,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(t,n,s,i){this.persistence=t,this.Ui=n,this.Tt=i,this.Ki=new X(C),this.Gi=new Zt(r=>Js(r),Zs),this.Qi=new Map,this.ji=t.getRemoteDocumentCache(),this.Ns=t.getTargetCache(),this.Os=t.getBundleCache(),this.zi(s)}zi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Nu(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Ki))}}function Uu(e,t,n,s){return new Vu(e,t,n,s)}async function ea(e,t){const n=D(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.zi(t),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let c=K();for(const l of i){o.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of r){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:o,addedBatchIds:a}))})})}function Bu(e,t){const n=D(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=t.batch.keys(),r=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const h=c.batch,u=h.keys();let p=f.resolve();return u.forEach(v=>{p=p.next(()=>l.getEntry(a,v)).next(T=>{const S=c.docVersions.get(v);O(S!==null),T.version.compareTo(S)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),l.addEntry(T)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,s,t,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=K();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(t))).next(()=>n.localDocuments.getDocuments(s,i))})}function ju(e){const t=D(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ns.getLastRemoteSnapshotVersion(n))}function Hu(e,t){const n=D(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}class er{constructor(){this.activeTargetIds=cu()}sr(t){this.activeTargetIds=this.activeTargetIds.add(t)}ir(t){this.activeTargetIds=this.activeTargetIds.delete(t)}nr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ku{constructor(){this.Ur=new er,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Ur.sr(t),this.Kr[t]||"not-current"}updateQueryState(t,n,s){this.Kr[t]=n}removeLocalQueryTarget(t){this.Ur.ir(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.Kr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new er,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{Gr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(t){this.Hr.push(t)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Hr)t(0)}Wr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Hr)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.Yr=t.Yr,this.Zr=t.Zr}Xr(t){this.eo=t}no(t){this.so=t}onMessage(t){this.io=t}close(){this.Zr()}send(t){this.Yr(t)}ro(){this.eo()}oo(t){this.so(t)}uo(t){this.io(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.co=n+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(t,n,s,i,r){const o=this.fo(t,n);m("RestConnection","Sending: ",o,s);const a={};return this._o(a,i,r),this.wo(t,o,a,s).then(c=>(m("RestConnection","Received: ",c),c),c=>{throw ws("RestConnection",`${t} failed with error: `,c,"url: ",o,"request:",s),c})}mo(t,n,s,i,r,o){return this.lo(t,n,s,i,r)}_o(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Jt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}fo(t,n){const s=Gu[t];return`${this.co}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}wo(t,n,s,i){return new Promise((r,o)=>{const a=new hh;a.setWithCredentials(!0),a.listenOnce(ah.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Zn.NO_ERROR:const l=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(l)),r(l);break;case Zn.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new w(d.DEADLINE_EXCEEDED,"Request time out"));break;case Zn.HTTP_ERROR:const h=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let u=a.getResponseJson();Array.isArray(u)&&(u=u[0]);const p=u==null?void 0:u.error;if(p&&p.status&&p.message){const v=function(T){const S=T.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(S)>=0?S:d.UNKNOWN}(p.status);o(new w(v,p.message))}else o(new w(d.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(d.UNAVAILABLE,"Connection failed."));break;default:A()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(i);a.send(n,"POST",c,s,15)})}yo(t,n,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=rh(),o=oh(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new lh({})),this._o(a.initMessageHeaders,n,s),a.encodeInitMessageHeaders=!0;const c=i.join("");m("Connection","Creating WebChannel: "+c,a);const l=r.createWebChannel(c,a);let h=!1,u=!1;const p=new zu({Yr:T=>{u?m("Connection","Not sending because WebChannel is closed:",T):(h||(m("Connection","Opening WebChannel transport."),l.open(),h=!0),m("Connection","WebChannel sending:",T),l.send(T))},Zr:()=>l.close()}),v=(T,S,Y)=>{T.listen(S,st=>{try{Y(st)}catch(Z){setTimeout(()=>{throw Z},0)}})};return v(l,je.EventType.OPEN,()=>{u||m("Connection","WebChannel transport opened.")}),v(l,je.EventType.CLOSE,()=>{u||(u=!0,m("Connection","WebChannel transport closed"),p.oo())}),v(l,je.EventType.ERROR,T=>{u||(u=!0,ws("Connection","WebChannel transport errored:",T),p.oo(new w(d.UNAVAILABLE,"The operation could not be completed")))}),v(l,je.EventType.MESSAGE,T=>{var S;if(!u){const Y=T.data[0];O(!!Y);const st=Y,Z=st.error||((S=st[0])===null||S===void 0?void 0:S.error);if(Z){m("Connection","WebChannel received error:",Z);const li=Z.status;let Un=function(Aa){const ui=R[Aa];if(ui!==void 0)return su(ui)}(li),hi=Z.message;Un===void 0&&(Un=d.INTERNAL,hi="Unknown error status: "+li+" with message "+Z.message),u=!0,p.oo(new w(Un,hi)),l.close()}else m("Connection","WebChannel received:",Y),p.uo(Y)}}),v(o,ch.STAT_EVENT,T=>{T.stat===Vi.PROXY?m("Connection","Detected buffering proxy"):T.stat===Vi.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.ro()},0),p}}function ts(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(e){return new lu(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Ys=t,this.timerId=n,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(t){this.cancel();const n=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),t())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(t,n,s,i,r,o,a,c){this.Ys=t,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new na(t,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(t){this.Uo(),this.stream.send(t)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(t,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,t!==4?this.ko.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(Nt(n.toString()),Nt("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=t,await this.listener.no(n)}Go(){}auth(){this.state=1;const t=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===n&&this.jo(s,i)},s=>{t(()=>{const i=new w(d.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(t,n){const s=this.Qo(this.Co);this.stream=this.Wo(t,n),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Qo(t){return n=>{this.Ys.enqueueAndForget(()=>this.Co===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xu extends Wu{constructor(t,n,s,i,r,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(t,n){return this.connection.yo("Write",t,n)}onMessage(t){if(O(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Zo){this.ko.reset();const n=yu(t.writeResults,t.commitTime),s=Ft(t.commitTime);return this.listener.eu(s,n)}return O(!t.writeResults||t.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const t={};t.database=pu(this.Tt),this.qo(t)}tu(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>mu(this.Tt,s))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}lo(t,n,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(d.UNKNOWN,i.toString())})}mo(t,n,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.mo(t,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(d.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class Ju{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(t){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.hu("Offline")))}set(t){this.du(),this.ou=0,t==="Online"&&(this.cu=!1),this.hu(t)}hu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}lu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(Nt(n),this.cu=!1):m("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{Fe(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=D(a);c.mu.add(4),await Pe(c),c.pu.set("Unknown"),c.mu.delete(4),await $n(c)}(this))})}),this.pu=new Ju(s,i)}}async function $n(e){if(Fe(e))for(const t of e.gu)await t(!0)}async function Pe(e){for(const t of e.gu)await t(!1)}function Fe(e){return D(e).mu.size===0}async function sa(e,t,n){if(!xn(t))throw t;e.mu.add(1),await Pe(e),e.pu.set("Offline"),n||(n=()=>ju(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.mu.delete(1),await $n(e)})}function ia(e,t){return t().catch(n=>sa(e,n,t))}async function Pn(e){const t=D(e),n=yt(t);let s=t._u.length>0?t._u[t._u.length-1].batchId:-1;for(;tf(t);)try{const i=await Hu(t.localStore,s);if(i===null){t._u.length===0&&n.Bo();break}s=i.batchId,ef(t,i)}catch(i){await sa(t,i)}ra(t)&&oa(t)}function tf(e){return Fe(e)&&e._u.length<10}function ef(e,t){e._u.push(t);const n=yt(e);n.Mo()&&n.Xo&&n.tu(t.mutations)}function ra(e){return Fe(e)&&!yt(e).Oo()&&e._u.length>0}function oa(e){yt(e).start()}async function nf(e){yt(e).su()}async function sf(e){const t=yt(e);for(const n of e._u)t.tu(n.mutations)}async function rf(e,t,n){const s=e._u.shift(),i=ei.from(s,t,n);await ia(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Pn(e)}async function of(e,t){t&&yt(e).Xo&&await async function(n,s){if(i=s.code,nu(i)&&i!==d.ABORTED){const r=n._u.shift();yt(n).$o(),await ia(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Pn(n)}var i}(e,t),ra(e)&&oa(e)}async function sr(e,t){const n=D(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=Fe(n);n.mu.add(3),await Pe(n),s&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.mu.delete(3),await $n(n)}async function af(e,t){const n=D(e);t?(n.mu.delete(2),await $n(n)):t||(n.mu.add(2),await Pe(n),n.pu.set("Unknown"))}function yt(e){return e.Eu||(e.Eu=function(t,n,s){const i=D(t);return i.ru(),new Xu(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(e.datastore,e.asyncQueue,{Xr:nf.bind(null,e),no:of.bind(null,e),nu:sf.bind(null,e),eu:rf.bind(null,e)}),e.gu.push(async t=>{t?(e.Eu.$o(),await Pn(e)):(await e.Eu.stop(),e._u.length>0&&(m("RemoteStore",`Stopping write stream with ${e._u.length} pending writes`),e._u=[]))})),e.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Ct,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ri(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(d.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function aa(e,t){if(Nt("AsyncQueue",`${t}: ${e}`),xn(e))return new w(d.UNAVAILABLE,`${t}: ${e}`);throw e}class cf{constructor(){this.queries=new Zt(t=>Uo(t),Vo),this.onlineState="Unknown",this.vu=new Set}}function lf(e){e.vu.forEach(t=>{t.next()})}class hf{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Zt(a=>Uo(a),Vo),this.uc=new Map,this.cc=new Set,this.ac=new X(E.comparator),this.hc=new Map,this.lc=new ni,this.fc={},this.dc=new Map,this._c=Qt.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function uf(e,t,n){const s=gf(e);try{const i=await function(r,o){const a=D(r),c=P.now(),l=o.reduce((p,v)=>p.add(v.key),K());let h,u;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=dn(),T=K();return a.ji.getEntries(p,l).next(S=>{v=S,v.forEach((Y,st)=>{st.isValidDocument()||(T=T.add(Y))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,v)).next(S=>{h=S;const Y=[];for(const st of o){const Z=tu(st,h.get(st.key).overlayedDocument);Z!=null&&Y.push(new Rt(st.key,Z,Fo(Z.value.mapValue),at.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,Y,o)}).next(S=>{u=S;const Y=S.applyToLocalDocumentSet(h,T);return a.documentOverlayCache.saveOverlays(p,S.batchId,Y)})}).then(()=>({batchId:u.batchId,changes:Yo(h)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,a){let c=r.fc[r.currentUser.toKey()];c||(c=new X(C)),c=c.insert(o,a),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,n),await Fn(s,i.changes),await Pn(s.remoteStore)}catch(i){const r=aa(i,"Failed to persist write");n.reject(r)}}function ir(e,t,n){const s=D(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.oc.forEach((r,o)=>{const a=o.view.Pu(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=D(r);a.onlineState=o;let c=!1;a.queries.forEach((l,h)=>{for(const u of h.listeners)u.Pu(o)&&(c=!0)}),c&&lf(a)}(s.eventManager,t),i.length&&s.rc.Ho(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function ff(e,t){const n=D(e),s=t.batch.batchId;try{const i=await Bu(n.localStore,t);la(n,s,null),ca(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Fn(n,i)}catch(i){await No(i)}}async function df(e,t,n){const s=D(e);try{const i=await function(r,o){const a=D(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(h=>(O(h!==null),l=h.keys(),a.mutationQueue.removeMutationBatch(c,h))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(s.localStore,t);la(s,t,n),ca(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await Fn(s,i)}catch(i){await No(i)}}function ca(e,t){(e.dc.get(t)||[]).forEach(n=>{n.resolve()}),e.dc.delete(t)}function la(e,t,n){const s=D(e);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(t);r&&(n?r.reject(n):r.resolve(),i=i.remove(t)),s.fc[s.currentUser.toKey()]=i}}async function Fn(e,t,n){const s=D(e),i=[],r=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,t,n).then(l=>{if((l||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const h=ii.Ni(c.targetId,l);r.push(h)}}))}),await Promise.all(o),s.rc.Ho(i),await async function(a,c){const l=D(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>f.forEach(c,u=>f.forEach(u.Ci,p=>l.persistence.referenceDelegate.addReference(h,u.targetId,p)).next(()=>f.forEach(u.xi,p=>l.persistence.referenceDelegate.removeReference(h,u.targetId,p)))))}catch(h){if(!xn(h))throw h;m("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const u=h.targetId;if(!h.fromCache){const p=l.Ki.get(u),v=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(v);l.Ki=l.Ki.insert(u,T)}}}(s.localStore,r))}async function pf(e,t){const n=D(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await ea(n.localStore,t);n.currentUser=t,function(i,r){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new w(d.CANCELLED,r))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await Fn(n,s.Wi)}}function gf(e){const t=D(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ff.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=df.bind(null,t),t}class mf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.Tt=Ln(t.databaseInfo.databaseId),this.sharedClientState=this.Ic(t),this.persistence=this.Tc(t),await this.persistence.start(),this.localStore=this.Ec(t),this.gcScheduler=this.Ac(t,this.localStore),this.indexBackfillerScheduler=this.Rc(t,this.localStore)}Ac(t,n){return null}Rc(t,n){return null}Ec(t){return Uu(this.persistence,new Fu,t.initialUser,this.Tt)}Tc(t){return new $u(si.qs,this.Tt)}Ic(t){return new Ku}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yf{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ir(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pf.bind(null,this.syncEngine),await af(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new cf}createDatastore(t){const n=Ln(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new Qu(i));var i;return function(r,o,a,c){return new Yu(r,o,a,c)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>ir(this.syncEngine,a,0),o=nr.C()?new nr:new qu,new Zu(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,c,l){const h=new hf(s,i,r,o,a,c);return l&&(h.wc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=D(t);m("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Pe(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=H.UNAUTHENTICATED,this.clientId=_o.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ct;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=aa(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function wf(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await ea(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function Ef(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Tf(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>sr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>sr(t.remoteStore,r)),e.onlineComponents=t}async function Tf(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await wf(e,new mf)),e.offlineComponents}async function Af(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await Ef(e,new yf)),e.onlineComponents}function If(e){return Af(e).then(t=>t.syncEngine)}const rr=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e,t,n){if(!n)throw new w(d.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function bf(e,t,n,s){if(t===!0&&s===!0)throw new w(d.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function or(e){if(!E.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ar(e){if(E.isDocumentKey(e))throw new w(d.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oi(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":A()}function ua(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=oi(e);throw new w(d.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,bf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,n,s,i){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cr({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cr(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new uh;switch(n.type){case"gapi":const s=n.client;return new gh(s,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=rr.get(t);n&&(m("ComponentProvider","Removing Datastore"),rr.delete(t),n.terminate())}(this),Promise.resolve()}}function Sf(e,t,n,s={}){var i;const r=(e=ua(e,Vn))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==t&&ws("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},r),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=H.MOCK_USER;else{o=za(s.mockUserToken,(i=e._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new w(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new H(c)}e._authCredentials=new fh(new Do(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ct(this.firestore,t,this._key)}}class ai{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ai(this.firestore,t,this._query)}}class pt extends ai{constructor(t,n,s){super(t,n,jh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ct(this.firestore,null,new E(t))}withConverter(t){return new pt(this.firestore,t,this._path)}}function Cf(e,t,...n){if(e=fe(e),ha("collection","path",t),e instanceof Vn){const s=k.fromString(t,...n);return ar(s),new pt(e,null,s)}{if(!(e instanceof ct||e instanceof pt))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return ar(s),new pt(e.firestore,null,s)}}function Df(e,t,...n){if(e=fe(e),arguments.length===1&&(t=_o.R()),ha("doc","path",t),e instanceof Vn){const s=k.fromString(t,...n);return or(s),new ct(e,null,new E(s))}{if(!(e instanceof ct||e instanceof pt))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(k.fromString(t,...n));return or(s),new ct(e.firestore,e instanceof pt?e.converter:null,new E(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new na(this,"async_queue_retry"),this.Hc=()=>{const n=ts();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const t=ts();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Jc(),this.Yc(t)}enterRestrictedMode(t){if(!this.Kc){this.Kc=!0,this.zc=t||!1;const n=ts();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(t){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Ct;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Uc.push(t),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(t){if(!xn(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(t){const n=this.qc.then(()=>(this.jc=!0,t().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw Nt("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=n,n}enqueueAfterDelay(t,n,s){this.Jc(),this.Wc.indexOf(t)>-1&&(n=0);const i=ri.createAndSchedule(this,t,n,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&A()}verifyOperationInProgress(){}async ta(){let t;do t=this.qc,await t;while(t!==this.qc)}ea(t){for(const n of this.Gc)if(n.timerId===t)return!0;return!1}na(t){return this.ta().then(()=>{this.Gc.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.ta()})}sa(t){this.Wc.push(t)}Xc(t){const n=this.Gc.indexOf(t);this.Gc.splice(n,1)}}class fa extends Vn{constructor(t,n,s,i){super(t,n,s,i),this.type="firestore",this._queue=new _f,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||da(this),this._firestoreClient.terminate()}}function Nf(e,t){const n=typeof e=="object"?e:Yc(),s=typeof e=="string"?e:t||"(default)",i=zc(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Ka("firestore");r&&Sf(i,...r)}return i}function kf(e){return e._firestoreClient||da(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function da(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new Sh(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new vf(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Se(ht.fromBase64String(t))}catch(n){throw new w(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Se(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new q(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return C(this._lat,t._lat)||C(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=/^__.*__$/;class Rf{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new Rt(t,this.data,this.fieldMask,n,this.fieldTransforms):new $e(t,this.data,n,this.fieldTransforms)}}function ya(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw A()}}class ci{constructor(t,n,s,i,r,o){this.settings=t,this.databaseId=n,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(t){return new ci(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.oa({path:s,ca:!1});return i.aa(t),i}ha(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),i=this.oa({path:s,ca:!1});return i.ia(),i}la(t){return this.oa({path:void 0,ca:!0})}fa(t){return pn(t,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let t=0;t<this.path.length;t++)this.aa(this.path.get(t))}aa(t){if(t.length===0)throw this.fa("Document fields must not be empty");if(ya(this.ra)&&xf.test(t))throw this.fa('Document fields cannot begin and end with "__"')}}class Of{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.Tt=s||Ln(t)}wa(t,n,s,i=!1){return new ci({ra:t,methodName:n,_a:s,path:q.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Mf(e){const t=e._freezeSettings(),n=Ln(e._databaseId);return new Of(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Lf(e,t,n,s,i,r={}){const o=e.wa(r.merge||r.mergeFields?2:0,t,n,i);Ta("Data must be an object, but it was:",o,s);const a=wa(s,o);let c,l;if(r.merge)c=new nt(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const h=[];for(const u of r.mergeFields){const p=$f(t,u,n);if(!o.contains(p))throw new w(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);Vf(h,p)||h.push(p)}c=new nt(h),l=o.fieldTransforms.filter(u=>c.covers(u.field))}else c=null,l=o.fieldTransforms;return new Rf(new et(a),c,l)}function va(e,t){if(Ea(e=fe(e)))return Ta("Unsupported field value:",t,e),wa(e,t);if(e instanceof ga)return function(n,s){if(!ya(s.ra))throw s.fa(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ca&&t.ra!==4)throw t.fa("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let a=va(o,s.la(r));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),r++}return{arrayValue:{values:i}}}(e,t)}return function(n,s){if((n=fe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Qh(s.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=P.fromDate(n);return{timestampValue:bs(s.Tt,i)}}if(n instanceof P){const i=new P(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:bs(s.Tt,i)}}if(n instanceof ma)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Se)return{bytesValue:hu(s.Tt,n._byteString)};if(n instanceof ct){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zo(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.fa(`Unsupported field value: ${oi(n)}`)}(e,t)}function wa(e,t){const n={};return xo(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Le(e,(s,i)=>{const r=va(i,t.ua(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Ea(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof P||e instanceof ma||e instanceof Se||e instanceof ct||e instanceof ga)}function Ta(e,t,n){if(!Ea(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=oi(n);throw s==="an object"?t.fa(e+" a custom object"):t.fa(e+" "+s)}}function $f(e,t,n){if((t=fe(t))instanceof pa)return t._internalPath;if(typeof t=="string")return Ff(e,t);throw pn("Field path arguments must be of type string or ",e,!1,void 0,n)}const Pf=new RegExp("[~\\*/\\[\\]]");function Ff(e,t,n){if(t.search(Pf)>=0)throw pn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pa(...t.split("."))._internalPath}catch{throw pn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function pn(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${s}`),o&&(c+=` in document ${i}`),c+=")"),new w(d.INVALID_ARGUMENT,a+e+c)}function Vf(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(e,t,n){let s;return s=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,s}function Bf(e,t){const n=ua(e.firestore,fa),s=Df(e),i=Uf(e.converter,t);return jf(n,[Lf(Mf(e.firestore),"addDoc",s._key,i,e.converter!==null,{}).toMutation(s._key,at.exists(!1))]).then(()=>s)}function jf(e,t){return function(n,s){const i=new Ct;return n.asyncQueue.enqueueAndForget(async()=>uf(await If(n),s,i)),i.promise}(kf(e),t)}(function(e,t=!0){(function(n){Jt=n})(Xc),Ye(new de("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new fa(new dh(n.getProvider("auth-internal")),new yh(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new an(a.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:t},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),$t(Ui,"3.8.4",e),$t(Ui,"3.8.4","esm2017")})();const Hf={apiKey:"AIzaSyAi9NEeZf1Lk-xEO_s-MofPp7ZiAJJ2UEg",authDomain:"space-kitty-fp.firebaseapp.com",projectId:"space-kitty-fp",storageBucket:"space-kitty-fp.appspot.com",messagingSenderId:"721235516487",appId:"1:721235516487:web:93cb87e4a5be54143e2562"},Kf=Tr(Hf),qf=Nf(Kf);async function Gf(e){try{const t=await Bf(Cf(qf,"scoreboard"),{time:Date.now(),nickname:e,score:10});console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}}function zf(e){e.key=="Enter"&&(Gf(e.target.value),e.target.value="")}function Qf(){return Ca`<h1>Nickname</h1>
    <input type="text" @keydown=${zf} />`}Ma(Qf(),document.body);
