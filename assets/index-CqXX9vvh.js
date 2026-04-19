(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const we={},Ur=[],zt=()=>{},Xf=()=>!1,Ko=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Go=n=>n.startsWith("onUpdate:"),Ze=Object.assign,zc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},o_=Object.prototype.hasOwnProperty,ve=(n,e)=>o_.call(n,e),re=Array.isArray,Br=n=>di(n)==="[object Map]",Yf=n=>di(n)==="[object Set]",ju=n=>di(n)==="[object Date]",le=n=>typeof n=="function",$e=n=>typeof n=="string",It=n=>typeof n=="symbol",Te=n=>n!==null&&typeof n=="object",Zf=n=>(Te(n)||le(n))&&le(n.then)&&le(n.catch),ed=Object.prototype.toString,di=n=>ed.call(n),a_=n=>di(n).slice(8,-1),td=n=>di(n)==="[object Object]",Qo=n=>$e(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ls=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},c_=/-\w/g,Ot=Jo(n=>n.replace(c_,e=>e.slice(1).toUpperCase())),l_=/\B([A-Z])/g,Tr=Jo(n=>n.replace(l_,"-$1").toLowerCase()),nd=Jo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ba=Jo(n=>n?`on${nd(n)}`:""),qt=(n,e)=>!Object.is(n,e),ro=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},rd=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Wc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let $u;const Xo=()=>$u||($u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pr(n){if(re(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=$e(r)?d_(r):pr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(n)||Te(n))return n}const u_=/;(?![^(]*\))/g,h_=/:([^]+)/,f_=/\/\*[^]*?\*\//g;function d_(n){const e={};return n.replace(f_,"").split(u_).forEach(t=>{if(t){const r=t.split(h_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Kc(n){let e="";if($e(n))e=n;else if(re(n))for(let t=0;t<n.length;t++){const r=Kc(n[t]);r&&(e+=r+" ")}else if(Te(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const p_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",g_=qc(p_);function sd(n){return!!n||n===""}function m_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Ys(n[r],e[r]);return t}function Ys(n,e){if(n===e)return!0;let t=ju(n),r=ju(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=It(n),r=It(e),t||r)return n===e;if(t=re(n),r=re(e),t||r)return t&&r?m_(n,e):!1;if(t=Te(n),r=Te(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const c=n.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Ys(n[a],e[a]))return!1}}return String(n)===String(e)}const id=n=>!!(n&&n.__v_isRef===!0),an=n=>$e(n)?n:n==null?"":re(n)||Te(n)&&(n.toString===ed||!le(n.toString))?id(n)?an(n.value):JSON.stringify(n,od,2):String(n),od=(n,e)=>id(e)?od(n,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[ja(r,i)+" =>"]=s,t),{})}:Yf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>ja(t))}:It(e)?ja(e):Te(e)&&!re(e)&&!td(e)?String(e):e,ja=(n,e="")=>{var t;return It(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let it;class ad{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=it,!e&&it&&(this.index=(it.scopes||(it.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=it;try{return it=this,e()}finally{it=t}}}on(){++this._on===1&&(this.prevScope=it,it=this)}off(){this._on>0&&--this._on===0&&(it=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function cd(n){return new ad(n)}function ld(){return it}function __(n,e=!1){it&&it.cleanups.push(n)}let Ae;const $a=new WeakSet;class ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,it&&it.active&&it.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hu(this),dd(this);const e=Ae,t=Nt;Ae=this,Nt=!0;try{return this.fn()}finally{pd(this),Ae=e,Nt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jc(e);this.deps=this.depsTail=void 0,Hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cc(this)&&this.run()}get dirty(){return cc(this)}}let hd=0,Fs,Us;function fd(n,e=!1){if(n.flags|=8,e){n.next=Us,Us=n;return}n.next=Fs,Fs=n}function Gc(){hd++}function Qc(){if(--hd>0)return;if(Us){let e=Us;for(Us=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Fs;){let e=Fs;for(Fs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function dd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Jc(r),y_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function cc(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function gd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zs)||(n.globalVersion=Zs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!cc(n))))return;n.flags|=2;const e=n.dep,t=Ae,r=Nt;Ae=n,Nt=!0;try{dd(n);const s=n.fn(n._value);(e.version===0||qt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=t,Nt=r,pd(n),n.flags&=-3}}function Jc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Jc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function y_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nt=!0;const md=[];function _n(){md.push(Nt),Nt=!1}function yn(){const n=md.pop();Nt=n===void 0?!0:n}function Hu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Ae;Ae=void 0;try{e()}finally{Ae=t}}}let Zs=0;class v_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Xc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ae||!Nt||Ae===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Ae)t=this.activeLink=new v_(Ae,this),Ae.deps?(t.prevDep=Ae.depsTail,Ae.depsTail.nextDep=t,Ae.depsTail=t):Ae.deps=Ae.depsTail=t,_d(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Ae.depsTail,t.nextDep=void 0,Ae.depsTail.nextDep=t,Ae.depsTail=t,Ae.deps===t&&(Ae.deps=r)}return t}trigger(e){this.version++,Zs++,this.notify(e)}notify(e){Gc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Qc()}}}function _d(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_d(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const vo=new WeakMap,hr=Symbol(""),lc=Symbol(""),ei=Symbol("");function at(n,e,t){if(Nt&&Ae){let r=vo.get(n);r||vo.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Xc),s.map=r,s.key=t),s.track()}}function un(n,e,t,r,s,i){const a=vo.get(n);if(!a){Zs++;return}const c=l=>{l&&l.trigger()};if(Gc(),e==="clear")a.forEach(c);else{const l=re(n),h=l&&Qo(t);if(l&&t==="length"){const d=Number(r);a.forEach((g,_)=>{(_==="length"||_===ei||!It(_)&&_>=d)&&c(g)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),h&&c(a.get(ei)),e){case"add":l?h&&c(a.get("length")):(c(a.get(hr)),Br(n)&&c(a.get(lc)));break;case"delete":l||(c(a.get(hr)),Br(n)&&c(a.get(lc)));break;case"set":Br(n)&&c(a.get(hr));break}}Qc()}function E_(n,e){const t=vo.get(n);return t&&t.get(e)}function Dr(n){const e=me(n);return e===n?e:(at(e,"iterate",ei),Tt(n)?e:e.map(Mt))}function Yo(n){return at(n=me(n),"iterate",ei),n}function $t(n,e){return vn(n)?Jr(gn(n)?Mt(e):e):Mt(e)}const T_={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,n=>$t(this,n))},concat(...n){return Dr(this).concat(...n.map(e=>re(e)?Dr(e):e))},entries(){return Ha(this,"entries",n=>(n[1]=$t(this,n[1]),n))},every(n,e){return on(this,"every",n,e,void 0,arguments)},filter(n,e){return on(this,"filter",n,e,t=>t.map(r=>$t(this,r)),arguments)},find(n,e){return on(this,"find",n,e,t=>$t(this,t),arguments)},findIndex(n,e){return on(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return on(this,"findLast",n,e,t=>$t(this,t),arguments)},findLastIndex(n,e){return on(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return on(this,"forEach",n,e,void 0,arguments)},includes(...n){return qa(this,"includes",n)},indexOf(...n){return qa(this,"indexOf",n)},join(n){return Dr(this).join(n)},lastIndexOf(...n){return qa(this,"lastIndexOf",n)},map(n,e){return on(this,"map",n,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...n){return Rs(this,"push",n)},reduce(n,...e){return qu(this,"reduce",n,e)},reduceRight(n,...e){return qu(this,"reduceRight",n,e)},shift(){return Rs(this,"shift")},some(n,e){return on(this,"some",n,e,void 0,arguments)},splice(...n){return Rs(this,"splice",n)},toReversed(){return Dr(this).toReversed()},toSorted(n){return Dr(this).toSorted(n)},toSpliced(...n){return Dr(this).toSpliced(...n)},unshift(...n){return Rs(this,"unshift",n)},values(){return Ha(this,"values",n=>$t(this,n))}};function Ha(n,e,t){const r=Yo(n),s=r[e]();return r!==n&&!Tt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const I_=Array.prototype;function on(n,e,t,r,s,i){const a=Yo(n),c=a!==n&&!Tt(n),l=a[e];if(l!==I_[e]){const g=l.apply(n,i);return c?Mt(g):g}let h=t;a!==n&&(c?h=function(g,_){return t.call(this,$t(n,g),_,n)}:t.length>2&&(h=function(g,_){return t.call(this,g,_,n)}));const d=l.call(a,h,r);return c&&s?s(d):d}function qu(n,e,t,r){const s=Yo(n),i=s!==n&&!Tt(n);let a=t,c=!1;s!==n&&(i?(c=r.length===0,a=function(h,d,g){return c&&(c=!1,h=$t(n,h)),t.call(this,h,$t(n,d),g,n)}):t.length>3&&(a=function(h,d,g){return t.call(this,h,d,g,n)}));const l=s[e](a,...r);return c?$t(n,l):l}function qa(n,e,t){const r=me(n);at(r,"iterate",ei);const s=r[e](...t);return(s===-1||s===!1)&&ea(t[0])?(t[0]=me(t[0]),r[e](...t)):s}function Rs(n,e,t=[]){_n(),Gc();const r=me(n)[e].apply(n,t);return Qc(),yn(),r}const w_=qc("__proto__,__v_isRef,__isVue"),yd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(It));function A_(n){It(n)||(n=String(n));const e=me(this);return at(e,"has",n),e.hasOwnProperty(n)}class vd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?N_:wd:i?Id:Td).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=re(e);if(!s){let l;if(a&&(l=T_[t]))return l;if(t==="hasOwnProperty")return A_}const c=Reflect.get(e,t,xe(e)?e:r);if((It(t)?yd.has(t):w_(t))||(s||at(e,"get",t),i))return c;if(xe(c)){const l=a&&Qo(t)?c:c.value;return s&&Te(l)?hc(l):l}return Te(c)?s?hc(c):Zo(c):c}}class Ed extends vd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=re(e)&&Qo(t);if(!this._isShallow){const h=vn(i);if(!Tt(r)&&!vn(r)&&(i=me(i),r=me(r)),!a&&xe(i)&&!xe(r))return h||(i.value=r),!0}const c=a?Number(t)<e.length:ve(e,t),l=Reflect.set(e,t,r,xe(e)?e:s);return e===me(s)&&(c?qt(r,i)&&un(e,"set",t,r):un(e,"add",t,r)),l}deleteProperty(e,t){const r=ve(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&un(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!It(t)||!yd.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",re(e)?"length":hr),Reflect.ownKeys(e)}}class b_ extends vd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const S_=new Ed,R_=new b_,C_=new Ed(!0);const uc=n=>n,qi=n=>Reflect.getPrototypeOf(n);function P_(n,e,t){return function(...r){const s=this.__v_raw,i=me(s),a=Br(i),c=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,h=s[n](...r),d=t?uc:e?Jr:Mt;return!e&&at(i,"iterate",l?lc:hr),Ze(Object.create(h),{next(){const{value:g,done:_}=h.next();return _?{value:g,done:_}:{value:c?[d(g[0]),d(g[1])]:d(g),done:_}}})}}function zi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function V_(n,e){const t={get(s){const i=this.__v_raw,a=me(i),c=me(s);n||(qt(s,c)&&at(a,"get",s),at(a,"get",c));const{has:l}=qi(a),h=e?uc:n?Jr:Mt;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(me(s),"iterate",hr),s.size},has(s){const i=this.__v_raw,a=me(i),c=me(s);return n||(qt(s,c)&&at(a,"has",s),at(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=me(c),h=e?uc:n?Jr:Mt;return!n&&at(l,"iterate",hr),c.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return Ze(t,n?{add:zi("add"),set:zi("set"),delete:zi("delete"),clear:zi("clear")}:{add(s){const i=me(this),a=qi(i),c=me(s),l=!e&&!Tt(s)&&!vn(s)?c:s;return a.has.call(i,l)||qt(s,l)&&a.has.call(i,s)||qt(c,l)&&a.has.call(i,c)||(i.add(l),un(i,"add",l,l)),this},set(s,i){!e&&!Tt(i)&&!vn(i)&&(i=me(i));const a=me(this),{has:c,get:l}=qi(a);let h=c.call(a,s);h||(s=me(s),h=c.call(a,s));const d=l.call(a,s);return a.set(s,i),h?qt(i,d)&&un(a,"set",s,i):un(a,"add",s,i),this},delete(s){const i=me(this),{has:a,get:c}=qi(i);let l=a.call(i,s);l||(s=me(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&un(i,"delete",s,void 0),h},clear(){const s=me(this),i=s.size!==0,a=s.clear();return i&&un(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=P_(s,n,e)}),t}function Yc(n,e){const t=V_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ve(t,s)&&s in r?t:r,s,i)}const k_={get:Yc(!1,!1)},D_={get:Yc(!1,!0)},O_={get:Yc(!0,!1)};const Td=new WeakMap,Id=new WeakMap,wd=new WeakMap,N_=new WeakMap;function x_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function M_(n){return n.__v_skip||!Object.isExtensible(n)?0:x_(a_(n))}function Zo(n){return vn(n)?n:Zc(n,!1,S_,k_,Td)}function L_(n){return Zc(n,!1,C_,D_,Id)}function hc(n){return Zc(n,!0,R_,O_,wd)}function Zc(n,e,t,r,s){if(!Te(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=M_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function gn(n){return vn(n)?gn(n.__v_raw):!!(n&&n.__v_isReactive)}function vn(n){return!!(n&&n.__v_isReadonly)}function Tt(n){return!!(n&&n.__v_isShallow)}function ea(n){return n?!!n.__v_raw:!1}function me(n){const e=n&&n.__v_raw;return e?me(e):n}function el(n){return!ve(n,"__v_skip")&&Object.isExtensible(n)&&rd(n,"__v_skip",!0),n}const Mt=n=>Te(n)?Zo(n):n,Jr=n=>Te(n)?hc(n):n;function xe(n){return n?n.__v_isRef===!0:!1}function Ad(n){return F_(n,!1)}function F_(n,e){return xe(n)?n:new U_(n,e)}class U_{constructor(e,t){this.dep=new Xc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:me(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||Tt(e)||vn(e);e=r?e:me(e),qt(e,t)&&(this._rawValue=e,this._value=r?e:Mt(e),this.dep.trigger())}}function ke(n){return xe(n)?n.value:n}const B_={get:(n,e,t)=>e==="__v_raw"?n:ke(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return xe(s)&&!xe(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function bd(n){return gn(n)?n:new Proxy(n,B_)}function j_(n){const e=re(n)?new Array(n.length):{};for(const t in n)e[t]=H_(n,t);return e}class $_{constructor(e,t,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=It(t)?t:String(t),this._raw=me(e);let s=!0,i=e;if(!re(e)||It(this._key)||!Qo(this._key))do s=!ea(i)||Tt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=ke(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&xe(this._raw[this._key])){const t=this._object[this._key];if(xe(t)){t.value=e;return}}this._object[this._key]=e}get dep(){return E_(this._raw,this._key)}}function H_(n,e,t){return new $_(n,e,t)}class q_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Xc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return fd(this,!0),!0}get value(){const e=this.dep.track();return gd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function z_(n,e,t=!1){let r,s;return le(n)?r=n:(r=n.get,s=n.set),new q_(r,s,t)}const Wi={},Eo=new WeakMap;let or;function W_(n,e=!1,t=or){if(t){let r=Eo.get(t);r||Eo.set(t,r=[]),r.push(n)}}function K_(n,e,t=we){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=t,h=z=>s?z:Tt(z)||s===!1||s===0?hn(z,1):hn(z);let d,g,_,I,V=!1,D=!1;if(xe(n)?(g=()=>n.value,V=Tt(n)):gn(n)?(g=()=>h(n),V=!0):re(n)?(D=!0,V=n.some(z=>gn(z)||Tt(z)),g=()=>n.map(z=>{if(xe(z))return z.value;if(gn(z))return h(z);if(le(z))return l?l(z,2):z()})):le(n)?e?g=l?()=>l(n,2):n:g=()=>{if(_){_n();try{_()}finally{yn()}}const z=or;or=d;try{return l?l(n,3,[I]):n(I)}finally{or=z}}:g=zt,e&&s){const z=g,oe=s===!0?1/0:s;g=()=>hn(z(),oe)}const F=ld(),G=()=>{d.stop(),F&&F.active&&zc(F.effects,d)};if(i&&e){const z=e;e=(...oe)=>{z(...oe),G()}}let $=D?new Array(n.length).fill(Wi):Wi;const K=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const oe=d.run();if(s||V||(D?oe.some((_e,w)=>qt(_e,$[w])):qt(oe,$))){_&&_();const _e=or;or=d;try{const w=[oe,$===Wi?void 0:D&&$[0]===Wi?[]:$,I];$=oe,l?l(e,3,w):e(...w)}finally{or=_e}}}else d.run()};return c&&c(K),d=new ud(g),d.scheduler=a?()=>a(K,!1):K,I=z=>W_(z,!1,d),_=d.onStop=()=>{const z=Eo.get(d);if(z){if(l)l(z,4);else for(const oe of z)oe();Eo.delete(d)}},e?r?K(!0):$=d.run():a?a(K.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function hn(n,e=1/0,t){if(e<=0||!Te(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,xe(n))hn(n.value,e,t);else if(re(n))for(let r=0;r<n.length;r++)hn(n[r],e,t);else if(Yf(n)||Br(n))n.forEach(r=>{hn(r,e,t)});else if(td(n)){for(const r in n)hn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&hn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pi(n,e,t,r){try{return r?n(...r):n()}catch(s){ta(s,e,t)}}function Xt(n,e,t,r){if(le(n)){const s=pi(n,e,t,r);return s&&Zf(s)&&s.catch(i=>{ta(i,e,t)}),s}if(re(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Xt(n[i],e,t,r));return s}}function ta(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||we;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,l,h)===!1)return}c=c.parent}if(i){_n(),pi(i,null,10,[n,l,h]),yn();return}}G_(n,t,s,r,a)}function G_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const pt=[];let Bt=-1;const jr=[];let Dn=null,Nr=0;const Sd=Promise.resolve();let To=null;function Rd(n){const e=To||Sd;return n?e.then(this?n.bind(this):n):e}function Q_(n){let e=Bt+1,t=pt.length;for(;e<t;){const r=e+t>>>1,s=pt[r],i=ti(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function tl(n){if(!(n.flags&1)){const e=ti(n),t=pt[pt.length-1];!t||!(n.flags&2)&&e>=ti(t)?pt.push(n):pt.splice(Q_(e),0,n),n.flags|=1,Cd()}}function Cd(){To||(To=Sd.then(Vd))}function J_(n){re(n)?jr.push(...n):Dn&&n.id===-1?Dn.splice(Nr+1,0,n):n.flags&1||(jr.push(n),n.flags|=1),Cd()}function zu(n,e,t=Bt+1){for(;t<pt.length;t++){const r=pt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;pt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Pd(n){if(jr.length){const e=[...new Set(jr)].sort((t,r)=>ti(t)-ti(r));if(jr.length=0,Dn){Dn.push(...e);return}for(Dn=e,Nr=0;Nr<Dn.length;Nr++){const t=Dn[Nr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Dn=null,Nr=0}}const ti=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Vd(n){try{for(Bt=0;Bt<pt.length;Bt++){const e=pt[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<pt.length;Bt++){const e=pt[Bt];e&&(e.flags&=-2)}Bt=-1,pt.length=0,Pd(),To=null,(pt.length||jr.length)&&Vd()}}let lt=null,kd=null;function Io(n){const e=lt;return lt=n,kd=n&&n.type.__scopeId||null,e}function ks(n,e=lt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&nh(-1);const i=Io(e);let a;try{a=n(...s)}finally{Io(i),r._d&&nh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Cs(n,e){if(lt===null)return n;const t=ia(lt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=we]=e[s];i&&(le(i)&&(i={mounted:i,updated:i}),i.deep&&hn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function sr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(_n(),Xt(l,t,8,[n.el,c,n,e]),yn())}}function X_(n,e){if(gt){let t=gt.provides;const r=gt.parent&&gt.parent.provides;r===t&&(t=gt.provides=Object.create(r)),t[n]=e}}function Bs(n,e,t=!1){const r=sp();if(r||fr){let s=fr?fr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&le(e)?e.call(r&&r.proxy):e}}function Y_(){return!!(sp()||fr)}const Z_=Symbol.for("v-scx"),ey=()=>Bs(Z_);function so(n,e,t){return Dd(n,e,t)}function Dd(n,e,t=we){const{immediate:r,deep:s,flush:i,once:a}=t,c=Ze({},t),l=e&&r||!e&&i!=="post";let h;if(ri){if(i==="sync"){const I=ey();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!l){const I=()=>{};return I.stop=zt,I.resume=zt,I.pause=zt,I}}const d=gt;c.call=(I,V,D)=>Xt(I,d,V,D);let g=!1;i==="post"?c.scheduler=I=>{mt(I,d&&d.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(I,V)=>{V?I():tl(I)}),c.augmentJob=I=>{e&&(I.flags|=4),g&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const _=K_(n,e,c);return ri&&(h?h.push(_):l&&_()),_}function ty(n,e,t){const r=this.proxy,s=$e(n)?n.includes(".")?Od(r,n):()=>r[n]:n.bind(r,r);let i;le(e)?i=e:(i=e.handler,t=e);const a=mi(this),c=Dd(s,i.bind(r),t);return a(),c}function Od(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const ny=Symbol("_vte"),ry=n=>n.__isTeleport,sy=Symbol("_leaveCb");function nl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,nl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function gi(n,e){return le(n)?Ze({name:n.name},e,{setup:n}):n}function Nd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Wu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const wo=new WeakMap;function js(n,e,t,r,s=!1){if(re(n)){n.forEach((D,F)=>js(D,e&&(re(e)?e[F]:e),t,r,s));return}if($r(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&js(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?ia(r.component):r.el,a=s?null:i,{i:c,r:l}=n,h=e&&e.r,d=c.refs===we?c.refs={}:c.refs,g=c.setupState,_=me(g),I=g===we?Xf:D=>Wu(d,D)?!1:ve(_,D),V=(D,F)=>!(F&&Wu(d,F));if(h!=null&&h!==l){if(Ku(e),$e(h))d[h]=null,I(h)&&(g[h]=null);else if(xe(h)){const D=e;V(h,D.k)&&(h.value=null),D.k&&(d[D.k]=null)}}if(le(l))pi(l,c,12,[a,d]);else{const D=$e(l),F=xe(l);if(D||F){const G=()=>{if(n.f){const $=D?I(l)?g[l]:d[l]:V()||!n.k?l.value:d[n.k];if(s)re($)&&zc($,i);else if(re($))$.includes(i)||$.push(i);else if(D)d[l]=[i],I(l)&&(g[l]=d[l]);else{const K=[i];V(l,n.k)&&(l.value=K),n.k&&(d[n.k]=K)}}else D?(d[l]=a,I(l)&&(g[l]=a)):F&&(V(l,n.k)&&(l.value=a),n.k&&(d[n.k]=a))};if(a){const $=()=>{G(),wo.delete(n)};$.id=-1,wo.set(n,$),mt($,t)}else Ku(n),G()}}}function Ku(n){const e=wo.get(n);e&&(e.flags|=8,wo.delete(n))}Xo().requestIdleCallback;Xo().cancelIdleCallback;const $r=n=>!!n.type.__asyncLoader,xd=n=>n.type.__isKeepAlive;function iy(n,e){Md(n,"a",e)}function oy(n,e){Md(n,"da",e)}function Md(n,e,t=gt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(na(e,r,t),t){let s=t.parent;for(;s&&s.parent;)xd(s.parent.vnode)&&ay(r,e,t,s),s=s.parent}}function ay(n,e,t,r){const s=na(e,n,r,!0);Ld(()=>{zc(r[e],s)},t)}function na(n,e,t=gt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{_n();const c=mi(t),l=Xt(e,t,n,a);return c(),yn(),l});return r?s.unshift(i):s.push(i),i}}const An=n=>(e,t=gt)=>{(!ri||n==="sp")&&na(n,(...r)=>e(...r),t)},cy=An("bm"),ly=An("m"),uy=An("bu"),hy=An("u"),fy=An("bum"),Ld=An("um"),dy=An("sp"),py=An("rtg"),gy=An("rtc");function my(n,e=gt){na("ec",n,e)}const _y=Symbol.for("v-ndc");function On(n,e,t,r){let s;const i=t,a=re(n);if(a||$e(n)){const c=a&&gn(n);let l=!1,h=!1;c&&(l=!Tt(n),h=vn(n),n=Yo(n)),s=new Array(n.length);for(let d=0,g=n.length;d<g;d++)s[d]=e(l?h?Jr(Mt(n[d])):Mt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i)}else if(Te(n))if(n[Symbol.iterator])s=Array.from(n,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(n);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const d=c[l];s[l]=e(n[d],d,l,i)}}else s=[];return s}function io(n,e,t={},r,s){if(lt.ce||lt.parent&&$r(lt.parent)&&lt.parent.ce){const h=Object.keys(t).length>0;return e!=="default"&&(t.name=e),be(),qs(Fe,null,[yt("slot",t,r)],h?-2:64)}let i=n[e];i&&i._c&&(i._d=!1),be();const a=i&&Fd(i(t)),c=t.key||a&&a.key,l=qs(Fe,{key:(c&&!It(c)?c:`_${e}`)+(!a&&r?"_fb":"")},a||[],a&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Fd(n){return n.some(e=>il(e)?!(e.type===gr||e.type===Fe&&!Fd(e.children)):!0)?n:null}const fc=n=>n?ip(n)?ia(n):fc(n.parent):null,$s=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>fc(n.parent),$root:n=>fc(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Bd(n),$forceUpdate:n=>n.f||(n.f=()=>{tl(n.update)}),$nextTick:n=>n.n||(n.n=Rd.bind(n.proxy)),$watch:n=>ty.bind(n)}),za=(n,e)=>n!==we&&!n.__isScriptSetup&&ve(n,e),yy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(za(r,e))return a[e]=1,r[e];if(s!==we&&ve(s,e))return a[e]=2,s[e];if(ve(i,e))return a[e]=3,i[e];if(t!==we&&ve(t,e))return a[e]=4,t[e];dc&&(a[e]=0)}}const h=$s[e];let d,g;if(h)return e==="$attrs"&&at(n.attrs,"get",""),h(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==we&&ve(t,e))return a[e]=4,t[e];if(g=l.config.globalProperties,ve(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return za(s,e)?(s[e]=t,!0):r!==we&&ve(r,e)?(r[e]=t,!0):ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let l;return!!(t[c]||n!==we&&c[0]!=="$"&&ve(n,c)||za(e,c)||ve(i,c)||ve(r,c)||ve($s,c)||ve(s.config.globalProperties,c)||(l=a.__cssModules)&&l[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Gu(n){return re(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let dc=!0;function vy(n){const e=Bd(n),t=n.proxy,r=n.ctx;dc=!1,e.beforeCreate&&Qu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:d,beforeMount:g,mounted:_,beforeUpdate:I,updated:V,activated:D,deactivated:F,beforeDestroy:G,beforeUnmount:$,destroyed:K,unmounted:z,render:oe,renderTracked:_e,renderTriggered:w,errorCaptured:m,serverPrefetch:y,expose:T,inheritAttrs:b,components:S,directives:E,filters:ht}=e;if(h&&Ey(h,r,null),a)for(const ce in a){const pe=a[ce];le(pe)&&(r[ce]=pe.bind(t))}if(s){const ce=s.call(t,t);Te(ce)&&(n.data=Zo(ce))}if(dc=!0,i)for(const ce in i){const pe=i[ce],Ct=le(pe)?pe.bind(t,t):le(pe.get)?pe.get.bind(t,t):zt,Xn=!le(pe)&&le(pe.set)?pe.set.bind(t):zt,tn=ap({get:Ct,set:Xn});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>tn.value,set:He=>tn.value=He})}if(c)for(const ce in c)Ud(c[ce],r,t,ce);if(l){const ce=le(l)?l.call(t):l;Reflect.ownKeys(ce).forEach(pe=>{X_(pe,ce[pe])})}d&&Qu(d,n,"c");function Pe(ce,pe){re(pe)?pe.forEach(Ct=>ce(Ct.bind(t))):pe&&ce(pe.bind(t))}if(Pe(cy,g),Pe(ly,_),Pe(uy,I),Pe(hy,V),Pe(iy,D),Pe(oy,F),Pe(my,m),Pe(gy,_e),Pe(py,w),Pe(fy,$),Pe(Ld,z),Pe(dy,y),re(T))if(T.length){const ce=n.exposed||(n.exposed={});T.forEach(pe=>{Object.defineProperty(ce,pe,{get:()=>t[pe],set:Ct=>t[pe]=Ct,enumerable:!0})})}else n.exposed||(n.exposed={});oe&&n.render===zt&&(n.render=oe),b!=null&&(n.inheritAttrs=b),S&&(n.components=S),E&&(n.directives=E),y&&Nd(n)}function Ey(n,e,t=zt){re(n)&&(n=pc(n));for(const r in n){const s=n[r];let i;Te(s)?"default"in s?i=Bs(s.from||r,s.default,!0):i=Bs(s.from||r):i=Bs(s),xe(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Qu(n,e,t){Xt(re(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ud(n,e,t,r){let s=r.includes(".")?Od(t,r):()=>t[r];if($e(n)){const i=e[n];le(i)&&so(s,i)}else if(le(n))so(s,n.bind(t));else if(Te(n))if(re(n))n.forEach(i=>Ud(i,e,t,r));else{const i=le(n.handler)?n.handler.bind(t):e[n.handler];le(i)&&so(s,i,n)}}function Bd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(h=>Ao(l,h,a,!0)),Ao(l,e,a)),Te(e)&&i.set(e,l),l}function Ao(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Ao(n,i,t,!0),s&&s.forEach(a=>Ao(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=Ty[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const Ty={data:Ju,props:Xu,emits:Xu,methods:Ds,computed:Ds,beforeCreate:dt,created:dt,beforeMount:dt,mounted:dt,beforeUpdate:dt,updated:dt,beforeDestroy:dt,beforeUnmount:dt,destroyed:dt,unmounted:dt,activated:dt,deactivated:dt,errorCaptured:dt,serverPrefetch:dt,components:Ds,directives:Ds,watch:wy,provide:Ju,inject:Iy};function Ju(n,e){return e?n?function(){return Ze(le(n)?n.call(this,this):n,le(e)?e.call(this,this):e)}:e:n}function Iy(n,e){return Ds(pc(n),pc(e))}function pc(n){if(re(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function dt(n,e){return n?[...new Set([].concat(n,e))]:e}function Ds(n,e){return n?Ze(Object.create(null),n,e):e}function Xu(n,e){return n?re(n)&&re(e)?[...new Set([...n,...e])]:Ze(Object.create(null),Gu(n),Gu(e??{})):e}function wy(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const r in e)t[r]=dt(n[r],e[r]);return t}function jd(){return{app:null,config:{isNativeTag:Xf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ay=0;function by(n,e){return function(r,s=null){le(r)||(r=Ze({},r)),s!=null&&!Te(s)&&(s=null);const i=jd(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Ay++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:nv,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&le(d.install)?(a.add(d),d.install(h,...g)):le(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,_){if(!l){const I=h._ceVNode||yt(r,s);return I.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(I,d,_),l=!0,h._container=d,d.__vue_app__=h,ia(I.component)}},onUnmount(d){c.push(d)},unmount(){l&&(Xt(c,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=fr;fr=h;try{return d()}finally{fr=g}}};return h}}let fr=null;const Sy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ot(e)}Modifiers`]||n[`${Tr(e)}Modifiers`];function Ry(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||we;let s=t;const i=e.startsWith("update:"),a=i&&Sy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>$e(d)?d.trim():d)),a.number&&(s=t.map(Wc)));let c,l=r[c=Ba(e)]||r[c=Ba(Ot(e))];!l&&i&&(l=r[c=Ba(Tr(e))]),l&&Xt(l,n,6,s);const h=r[c+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Xt(h,n,6,s)}}const Cy=new WeakMap;function $d(n,e,t=!1){const r=t?Cy:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!le(n)){const l=h=>{const d=$d(h,e,!0);d&&(c=!0,Ze(a,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!i&&!c?(Te(n)&&r.set(n,null),null):(re(i)?i.forEach(l=>a[l]=null):Ze(a,i),Te(n)&&r.set(n,a),a)}function ra(n,e){return!n||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(n,e[0].toLowerCase()+e.slice(1))||ve(n,Tr(e))||ve(n,e))}function Yu(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:d,props:g,data:_,setupState:I,ctx:V,inheritAttrs:D}=n,F=Io(n);let G,$;try{if(t.shapeFlag&4){const z=s||r,oe=z;G=Ht(h.call(oe,z,d,g,I,_,V)),$=c}else{const z=e;G=Ht(z.length>1?z(g,{attrs:c,slots:a,emit:l}):z(g,null)),$=e.props?c:Py(c)}}catch(z){Hs.length=0,ta(z,n,1),G=yt(gr)}let K=G;if($&&D!==!1){const z=Object.keys($),{shapeFlag:oe}=K;z.length&&oe&7&&(i&&z.some(Go)&&($=Vy($,i)),K=Xr(K,$,!1,!0))}return t.dirs&&(K=Xr(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(t.dirs):t.dirs),t.transition&&nl(K,t.transition),G=K,Io(F),G}const Py=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ko(t))&&((e||(e={}))[t]=n[t]);return e},Vy=(n,e)=>{const t={};for(const r in n)(!Go(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function ky(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?Zu(r,a,h):!!a;if(l&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const _=d[g];if(Hd(a,r,_)&&!ra(h,_))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Zu(r,a,h):!0:!!a;return!1}function Zu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Hd(e,n,i)&&!ra(t,i))return!0}return!1}function Hd(n,e,t){const r=n[t],s=e[t];return t==="style"&&Te(r)&&Te(s)?!Ys(r,s):r!==s}function Dy({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const qd={},zd=()=>Object.create(qd),Wd=n=>Object.getPrototypeOf(n)===qd;function Oy(n,e,t,r=!1){const s={},i=zd();n.propsDefaults=Object.create(null),Kd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:L_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Ny(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=me(s),[l]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let _=d[g];if(ra(n.emitsOptions,_))continue;const I=e[_];if(l)if(ve(i,_))I!==i[_]&&(i[_]=I,h=!0);else{const V=Ot(_);s[V]=gc(l,c,V,I,n,!1)}else I!==i[_]&&(i[_]=I,h=!0)}}}else{Kd(n,e,s,i)&&(h=!0);let d;for(const g in c)(!e||!ve(e,g)&&((d=Tr(g))===g||!ve(e,d)))&&(l?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=gc(l,c,g,void 0,n,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!ve(e,g))&&(delete i[g],h=!0)}h&&un(n.attrs,"set","")}function Kd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let l in e){if(Ls(l))continue;const h=e[l];let d;s&&ve(s,d=Ot(l))?!i||!i.includes(d)?t[d]=h:(c||(c={}))[d]=h:ra(n.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=me(t),h=c||we;for(let d=0;d<i.length;d++){const g=i[d];t[g]=gc(s,l,g,h[g],n,!ve(h,g))}}return a}function gc(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=ve(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&le(l)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=mi(s);r=h[t]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===Tr(t))&&(r=!0))}return r}const xy=new WeakMap;function Gd(n,e,t=!1){const r=t?xy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let l=!1;if(!le(n)){const d=g=>{l=!0;const[_,I]=Gd(g,e,!0);Ze(a,_),I&&c.push(...I)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!l)return Te(n)&&r.set(n,Ur),Ur;if(re(i))for(let d=0;d<i.length;d++){const g=Ot(i[d]);eh(g)&&(a[g]=we)}else if(i)for(const d in i){const g=Ot(d);if(eh(g)){const _=i[d],I=a[g]=re(_)||le(_)?{type:_}:Ze({},_),V=I.type;let D=!1,F=!0;if(re(V))for(let G=0;G<V.length;++G){const $=V[G],K=le($)&&$.name;if(K==="Boolean"){D=!0;break}else K==="String"&&(F=!1)}else D=le(V)&&V.name==="Boolean";I[0]=D,I[1]=F,(D||ve(I,"default"))&&c.push(g)}}const h=[a,c];return Te(n)&&r.set(n,h),h}function eh(n){return n[0]!=="$"&&!Ls(n)}const rl=n=>n==="_"||n==="_ctx"||n==="$stable",sl=n=>re(n)?n.map(Ht):[Ht(n)],My=(n,e,t)=>{if(e._n)return e;const r=ks((...s)=>sl(e(...s)),t);return r._c=!1,r},Qd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(rl(s))continue;const i=n[s];if(le(i))e[s]=My(s,i,r);else if(i!=null){const a=sl(i);e[s]=()=>a}}},Jd=(n,e)=>{const t=sl(e);n.slots.default=()=>t},Xd=(n,e,t)=>{for(const r in e)(t||!rl(r))&&(n[r]=e[r])},Ly=(n,e,t)=>{const r=n.slots=zd();if(n.vnode.shapeFlag&32){const s=e._;s?(Xd(r,e,t),t&&rd(r,"_",s,!0)):Qd(e,r)}else e&&Jd(n,e)},Fy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=we;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:Xd(s,e,t):(i=!e.$stable,Qd(e,s)),a=e}else e&&(Jd(n,e),a={default:1});if(i)for(const c in s)!rl(c)&&a[c]==null&&delete s[c]},mt=Hy;function Uy(n){return By(n)}function By(n,e){const t=Xo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:d,parentNode:g,nextSibling:_,setScopeId:I=zt,insertStaticContent:V}=n,D=(v,A,P,L=null,O=null,M=null,H=void 0,j=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!Ps(v,A)&&(L=nn(v),He(v,O,M,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:x,ref:Y,shapeFlag:q}=A;switch(x){case sa:F(v,A,P,L);break;case gr:G(v,A,P,L);break;case Ka:v==null&&$(A,P,L,H);break;case Fe:S(v,A,P,L,O,M,H,j,U);break;default:q&1?oe(v,A,P,L,O,M,H,j,U):q&6?E(v,A,P,L,O,M,H,j,U):(q&64||q&128)&&x.process(v,A,P,L,O,M,H,j,U,Ft)}Y!=null&&O?js(Y,v&&v.ref,M,A||v,!A):Y==null&&v&&v.ref!=null&&js(v.ref,null,M,v,!0)},F=(v,A,P,L)=>{if(v==null)r(A.el=c(A.children),P,L);else{const O=A.el=v.el;A.children!==v.children&&h(O,A.children)}},G=(v,A,P,L)=>{v==null?r(A.el=l(A.children||""),P,L):A.el=v.el},$=(v,A,P,L)=>{[v.el,v.anchor]=V(v.children,A,P,L,v.el,v.anchor)},K=({el:v,anchor:A},P,L)=>{let O;for(;v&&v!==A;)O=_(v),r(v,P,L),v=O;r(A,P,L)},z=({el:v,anchor:A})=>{let P;for(;v&&v!==A;)P=_(v),s(v),v=P;s(A)},oe=(v,A,P,L,O,M,H,j,U)=>{if(A.type==="svg"?H="svg":A.type==="math"&&(H="mathml"),v==null)_e(A,P,L,O,M,H,j,U);else{const x=v.el&&v.el._isVueCE?v.el:null;try{x&&x._beginPatch(),y(v,A,O,M,H,j,U)}finally{x&&x._endPatch()}}},_e=(v,A,P,L,O,M,H,j)=>{let U,x;const{props:Y,shapeFlag:q,transition:J,dirs:Z}=v;if(U=v.el=a(v.type,M,Y&&Y.is,Y),q&8?d(U,v.children):q&16&&m(v.children,U,null,L,O,Wa(v,M),H,j),Z&&sr(v,null,L,"created"),w(U,v,v.scopeId,H,L),Y){for(const ae in Y)ae!=="value"&&!Ls(ae)&&i(U,ae,null,Y[ae],M,L);"value"in Y&&i(U,"value",null,Y.value,M),(x=Y.onVnodeBeforeMount)&&Ut(x,L,v)}Z&&sr(v,null,L,"beforeMount");const ee=jy(O,J);ee&&J.beforeEnter(U),r(U,A,P),((x=Y&&Y.onVnodeMounted)||ee||Z)&&mt(()=>{try{x&&Ut(x,L,v),ee&&J.enter(U),Z&&sr(v,null,L,"mounted")}finally{}},O)},w=(v,A,P,L,O)=>{if(P&&I(v,P),L)for(let M=0;M<L.length;M++)I(v,L[M]);if(O){let M=O.subTree;if(A===M||tp(M.type)&&(M.ssContent===A||M.ssFallback===A)){const H=O.vnode;w(v,H,H.scopeId,H.slotScopeIds,O.parent)}}},m=(v,A,P,L,O,M,H,j,U=0)=>{for(let x=U;x<v.length;x++){const Y=v[x]=j?ln(v[x]):Ht(v[x]);D(null,Y,A,P,L,O,M,H,j)}},y=(v,A,P,L,O,M,H)=>{const j=A.el=v.el;let{patchFlag:U,dynamicChildren:x,dirs:Y}=A;U|=v.patchFlag&16;const q=v.props||we,J=A.props||we;let Z;if(P&&ir(P,!1),(Z=J.onVnodeBeforeUpdate)&&Ut(Z,P,A,v),Y&&sr(A,v,P,"beforeUpdate"),P&&ir(P,!0),(q.innerHTML&&J.innerHTML==null||q.textContent&&J.textContent==null)&&d(j,""),x?T(v.dynamicChildren,x,j,P,L,Wa(A,O),M):H||pe(v,A,j,null,P,L,Wa(A,O),M,!1),U>0){if(U&16)b(j,q,J,P,O);else if(U&2&&q.class!==J.class&&i(j,"class",null,J.class,O),U&4&&i(j,"style",q.style,J.style,O),U&8){const ee=A.dynamicProps;for(let ae=0;ae<ee.length;ae++){const ye=ee[ae],Ve=q[ye],Ue=J[ye];(Ue!==Ve||ye==="value")&&i(j,ye,Ve,Ue,O,P)}}U&1&&v.children!==A.children&&d(j,A.children)}else!H&&x==null&&b(j,q,J,P,O);((Z=J.onVnodeUpdated)||Y)&&mt(()=>{Z&&Ut(Z,P,A,v),Y&&sr(A,v,P,"updated")},L)},T=(v,A,P,L,O,M,H)=>{for(let j=0;j<A.length;j++){const U=v[j],x=A[j],Y=U.el&&(U.type===Fe||!Ps(U,x)||U.shapeFlag&198)?g(U.el):P;D(U,x,Y,null,L,O,M,H,!0)}},b=(v,A,P,L,O)=>{if(A!==P){if(A!==we)for(const M in A)!Ls(M)&&!(M in P)&&i(v,M,A[M],null,O,L);for(const M in P){if(Ls(M))continue;const H=P[M],j=A[M];H!==j&&M!=="value"&&i(v,M,j,H,O,L)}"value"in P&&i(v,"value",A.value,P.value,O)}},S=(v,A,P,L,O,M,H,j,U)=>{const x=A.el=v?v.el:c(""),Y=A.anchor=v?v.anchor:c("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:Z}=A;Z&&(j=j?j.concat(Z):Z),v==null?(r(x,P,L),r(Y,P,L),m(A.children||[],P,Y,O,M,H,j,U)):q>0&&q&64&&J&&v.dynamicChildren&&v.dynamicChildren.length===J.length?(T(v.dynamicChildren,J,P,O,M,H,j),(A.key!=null||O&&A===O.subTree)&&Yd(v,A,!0)):pe(v,A,P,Y,O,M,H,j,U)},E=(v,A,P,L,O,M,H,j,U)=>{A.slotScopeIds=j,v==null?A.shapeFlag&512?O.ctx.activate(A,P,L,H,U):ht(A,P,L,O,M,H,U):Lt(v,A,U)},ht=(v,A,P,L,O,M,H)=>{const j=v.component=Jy(v,L,O);if(xd(v)&&(j.ctx.renderer=Ft),Xy(j,!1,H),j.asyncDep){if(O&&O.registerDep(j,Pe,H),!v.el){const U=j.subTree=yt(gr);G(null,U,A,P),v.placeholder=U.el}}else Pe(j,v,A,P,O,M,H)},Lt=(v,A,P)=>{const L=A.component=v.component;if(ky(v,A,P))if(L.asyncDep&&!L.asyncResolved){ce(L,A,P);return}else L.next=A,L.update();else A.el=v.el,L.vnode=A},Pe=(v,A,P,L,O,M,H)=>{const j=()=>{if(v.isMounted){let{next:q,bu:J,u:Z,parent:ee,vnode:ae}=v;{const tt=Zd(v);if(tt){q&&(q.el=ae.el,ce(v,q,H)),tt.asyncDep.then(()=>{mt(()=>{v.isUnmounted||x()},O)});return}}let ye=q,Ve;ir(v,!1),q?(q.el=ae.el,ce(v,q,H)):q=ae,J&&ro(J),(Ve=q.props&&q.props.onVnodeBeforeUpdate)&&Ut(Ve,ee,q,ae),ir(v,!0);const Ue=Yu(v),wt=v.subTree;v.subTree=Ue,D(wt,Ue,g(wt.el),nn(wt),v,O,M),q.el=Ue.el,ye===null&&Dy(v,Ue.el),Z&&mt(Z,O),(Ve=q.props&&q.props.onVnodeUpdated)&&mt(()=>Ut(Ve,ee,q,ae),O)}else{let q;const{el:J,props:Z}=A,{bm:ee,m:ae,parent:ye,root:Ve,type:Ue}=v,wt=$r(A);ir(v,!1),ee&&ro(ee),!wt&&(q=Z&&Z.onVnodeBeforeMount)&&Ut(q,ye,A),ir(v,!0);{Ve.ce&&Ve.ce._hasShadowRoot()&&Ve.ce._injectChildStyle(Ue,v.parent?v.parent.type:void 0);const tt=v.subTree=Yu(v);D(null,tt,P,L,v,O,M),A.el=tt.el}if(ae&&mt(ae,O),!wt&&(q=Z&&Z.onVnodeMounted)){const tt=A;mt(()=>Ut(q,ye,tt),O)}(A.shapeFlag&256||ye&&$r(ye.vnode)&&ye.vnode.shapeFlag&256)&&v.a&&mt(v.a,O),v.isMounted=!0,A=P=L=null}};v.scope.on();const U=v.effect=new ud(j);v.scope.off();const x=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>tl(Y),ir(v,!0),x()},ce=(v,A,P)=>{A.component=v;const L=v.vnode.props;v.vnode=A,v.next=null,Ny(v,A.props,L,P),Fy(v,A.children,P),_n(),zu(v),yn()},pe=(v,A,P,L,O,M,H,j,U=!1)=>{const x=v&&v.children,Y=v?v.shapeFlag:0,q=A.children,{patchFlag:J,shapeFlag:Z}=A;if(J>0){if(J&128){Xn(x,q,P,L,O,M,H,j,U);return}else if(J&256){Ct(x,q,P,L,O,M,H,j,U);return}}Z&8?(Y&16&&Zn(x,O,M),q!==x&&d(P,q)):Y&16?Z&16?Xn(x,q,P,L,O,M,H,j,U):Zn(x,O,M,!0):(Y&8&&d(P,""),Z&16&&m(q,P,L,O,M,H,j,U))},Ct=(v,A,P,L,O,M,H,j,U)=>{v=v||Ur,A=A||Ur;const x=v.length,Y=A.length,q=Math.min(x,Y);let J;for(J=0;J<q;J++){const Z=A[J]=U?ln(A[J]):Ht(A[J]);D(v[J],Z,P,null,O,M,H,j,U)}x>Y?Zn(v,O,M,!0,!1,q):m(A,P,L,O,M,H,j,U,q)},Xn=(v,A,P,L,O,M,H,j,U)=>{let x=0;const Y=A.length;let q=v.length-1,J=Y-1;for(;x<=q&&x<=J;){const Z=v[x],ee=A[x]=U?ln(A[x]):Ht(A[x]);if(Ps(Z,ee))D(Z,ee,P,null,O,M,H,j,U);else break;x++}for(;x<=q&&x<=J;){const Z=v[q],ee=A[J]=U?ln(A[J]):Ht(A[J]);if(Ps(Z,ee))D(Z,ee,P,null,O,M,H,j,U);else break;q--,J--}if(x>q){if(x<=J){const Z=J+1,ee=Z<Y?A[Z].el:L;for(;x<=J;)D(null,A[x]=U?ln(A[x]):Ht(A[x]),P,ee,O,M,H,j,U),x++}}else if(x>J)for(;x<=q;)He(v[x],O,M,!0),x++;else{const Z=x,ee=x,ae=new Map;for(x=ee;x<=J;x++){const Qe=A[x]=U?ln(A[x]):Ht(A[x]);Qe.key!=null&&ae.set(Qe.key,x)}let ye,Ve=0;const Ue=J-ee+1;let wt=!1,tt=0;const Sn=new Array(Ue);for(x=0;x<Ue;x++)Sn[x]=0;for(x=Z;x<=q;x++){const Qe=v[x];if(Ve>=Ue){He(Qe,O,M,!0);continue}let At;if(Qe.key!=null)At=ae.get(Qe.key);else for(ye=ee;ye<=J;ye++)if(Sn[ye-ee]===0&&Ps(Qe,A[ye])){At=ye;break}At===void 0?He(Qe,O,M,!0):(Sn[At-ee]=x+1,At>=tt?tt=At:wt=!0,D(Qe,A[At],P,null,O,M,H,j,U),Ve++)}const ps=wt?$y(Sn):Ur;for(ye=ps.length-1,x=Ue-1;x>=0;x--){const Qe=ee+x,At=A[Qe],Ci=A[Qe+1],Rr=Qe+1<Y?Ci.el||ep(Ci):L;Sn[x]===0?D(null,At,P,Rr,O,M,H,j,U):wt&&(ye<0||x!==ps[ye]?tn(At,P,Rr,2):ye--)}}},tn=(v,A,P,L,O=null)=>{const{el:M,type:H,transition:j,children:U,shapeFlag:x}=v;if(x&6){tn(v.component.subTree,A,P,L);return}if(x&128){v.suspense.move(A,P,L);return}if(x&64){H.move(v,A,P,Ft);return}if(H===Fe){r(M,A,P);for(let q=0;q<U.length;q++)tn(U[q],A,P,L);r(v.anchor,A,P);return}if(H===Ka){K(v,A,P);return}if(L!==2&&x&1&&j)if(L===0)j.beforeEnter(M),r(M,A,P),mt(()=>j.enter(M),O);else{const{leave:q,delayLeave:J,afterLeave:Z}=j,ee=()=>{v.ctx.isUnmounted?s(M):r(M,A,P)},ae=()=>{M._isLeaving&&M[sy](!0),q(M,()=>{ee(),Z&&Z()})};J?J(M,ee,ae):ae()}else r(M,A,P)},He=(v,A,P,L=!1,O=!1)=>{const{type:M,props:H,ref:j,children:U,dynamicChildren:x,shapeFlag:Y,patchFlag:q,dirs:J,cacheIndex:Z,memo:ee}=v;if(q===-2&&(O=!1),j!=null&&(_n(),js(j,null,P,v,!0),yn()),Z!=null&&(A.renderCache[Z]=void 0),Y&256){A.ctx.deactivate(v);return}const ae=Y&1&&J,ye=!$r(v);let Ve;if(ye&&(Ve=H&&H.onVnodeBeforeUnmount)&&Ut(Ve,A,v),Y&6)Yn(v.component,P,L);else{if(Y&128){v.suspense.unmount(P,L);return}ae&&sr(v,null,A,"beforeUnmount"),Y&64?v.type.remove(v,A,P,Ft,L):x&&!x.hasOnce&&(M!==Fe||q>0&&q&64)?Zn(x,A,P,!1,!0):(M===Fe&&q&384||!O&&Y&16)&&Zn(U,A,P),L&&qe(v)}const Ue=ee!=null&&Z==null;(ye&&(Ve=H&&H.onVnodeUnmounted)||ae||Ue)&&mt(()=>{Ve&&Ut(Ve,A,v),ae&&sr(v,null,A,"unmounted"),Ue&&(v.el=null)},P)},qe=v=>{const{type:A,el:P,anchor:L,transition:O}=v;if(A===Fe){ba(P,L);return}if(A===Ka){z(v);return}const M=()=>{s(P),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(v.shapeFlag&1&&O&&!O.persisted){const{leave:H,delayLeave:j}=O,U=()=>H(P,M);j?j(v.el,M,U):U()}else M()},ba=(v,A)=>{let P;for(;v!==A;)P=_(v),s(v),v=P;s(A)},Yn=(v,A,P)=>{const{bum:L,scope:O,job:M,subTree:H,um:j,m:U,a:x}=v;th(U),th(x),L&&ro(L),O.stop(),M&&(M.flags|=8,He(H,v,A,P)),j&&mt(j,A),mt(()=>{v.isUnmounted=!0},A)},Zn=(v,A,P,L=!1,O=!1,M=0)=>{for(let H=M;H<v.length;H++)He(v[H],A,P,L,O)},nn=v=>{if(v.shapeFlag&6)return nn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=_(v.anchor||v.el),P=A&&A[ny];return P?_(P):A};let fs=!1;const Ri=(v,A,P)=>{let L;v==null?A._vnode&&(He(A._vnode,null,null,!0),L=A._vnode.component):D(A._vnode||null,v,A,null,null,null,P),A._vnode=v,fs||(fs=!0,zu(L),Pd(),fs=!1)},Ft={p:D,um:He,m:tn,r:qe,mt:ht,mc:m,pc:pe,pbc:T,n:nn,o:n};return{render:Ri,hydrate:void 0,createApp:by(Ri)}}function Wa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ir({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function jy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Yd(n,e,t=!1){const r=n.children,s=e.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=ln(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&Yd(a,c)),c.type===sa&&(c.patchFlag===-1&&(c=s[i]=ln(c)),c.el=a.el),c.type===gr&&!c.el&&(c.el=a.el)}}function $y(n){const e=n.slice(),t=[0];let r,s,i,a,c;const l=n.length;for(r=0;r<l;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<h?i=c+1:a=c;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zd(e)}function th(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function ep(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?ep(e.subTree):null}const tp=n=>n.__isSuspense;function Hy(n,e){e&&e.pendingBranch?re(n)?e.effects.push(...n):e.effects.push(n):J_(n)}const Fe=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),gr=Symbol.for("v-cmt"),Ka=Symbol.for("v-stc"),Hs=[];let Et=null;function be(n=!1){Hs.push(Et=n?null:[])}function qy(){Hs.pop(),Et=Hs[Hs.length-1]||null}let ni=1;function nh(n,e=!1){ni+=n,n<0&&Et&&e&&(Et.hasOnce=!0)}function np(n){return n.dynamicChildren=ni>0?Et||Ur:null,qy(),ni>0&&Et&&Et.push(n),n}function Me(n,e,t,r,s,i){return np(De(n,e,t,r,s,i,!0))}function qs(n,e,t,r,s){return np(yt(n,e,t,r,s,!0))}function il(n){return n?n.__v_isVNode===!0:!1}function Ps(n,e){return n.type===e.type&&n.key===e.key}const rp=({key:n})=>n??null,oo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?$e(n)||xe(n)||le(n)?{i:lt,r:n,k:e,f:!!t}:n:null);function De(n,e=null,t=null,r=0,s=null,i=n===Fe?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&rp(e),ref:e&&oo(e),scopeId:kd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return c?(ol(l,t),i&128&&n.normalize(l)):t&&(l.shapeFlag|=$e(t)?8:16),ni>0&&!a&&Et&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Et.push(l),l}const yt=zy;function zy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===_y)&&(n=gr),il(n)){const c=Xr(n,e,!0);return t&&ol(c,t),ni>0&&!i&&Et&&(c.shapeFlag&6?Et[Et.indexOf(n)]=c:Et.push(c)),c.patchFlag=-2,c}if(tv(n)&&(n=n.__vccOpts),e){e=Wy(e);let{class:c,style:l}=e;c&&!$e(c)&&(e.class=Kc(c)),Te(l)&&(ea(l)&&!re(l)&&(l=Ze({},l)),e.style=pr(l))}const a=$e(n)?1:tp(n)?128:ry(n)?64:Te(n)?4:le(n)?2:0;return De(n,e,t,r,s,a,i,!0)}function Wy(n){return n?ea(n)||Wd(n)?Ze({},n):n:null}function Xr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=n,h=e?Ky(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&rp(h),ref:e&&e.ref?t&&i?re(i)?i.concat(oo(e)):[i,oo(e)]:oo(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Fe?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Xr(n.ssContent),ssFallback:n.ssFallback&&Xr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&nl(d,l.clone(d)),d}function Os(n=" ",e=0){return yt(sa,null,n,e)}function Ht(n){return n==null||typeof n=="boolean"?yt(gr):re(n)?yt(Fe,null,n.slice()):il(n)?ln(n):yt(sa,null,String(n))}function ln(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Xr(n)}function ol(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(re(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ol(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Wd(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else le(e)?(e={default:e,_ctx:lt},t=32):(e=String(e),r&64?(t=16,e=[Os(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ky(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Kc([e.class,r.class]));else if(s==="style")e.style=pr([e.style,r.style]);else if(Ko(s)){const i=e[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Go(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Ut(n,e,t,r=null){Xt(n,e,7,[t,r])}const Gy=jd();let Qy=0;function Jy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Gy,i={uid:Qy++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ad(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gd(r,s),emitsOptions:$d(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ry.bind(null,i),n.ce&&n.ce(i),i}let gt=null;const sp=()=>gt||lt;let bo,mc;{const n=Xo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};bo=e("__VUE_INSTANCE_SETTERS__",t=>gt=t),mc=e("__VUE_SSR_SETTERS__",t=>ri=t)}const mi=n=>{const e=gt;return bo(n),n.scope.on(),()=>{n.scope.off(),bo(e)}},rh=()=>{gt&&gt.scope.off(),bo(null)};function ip(n){return n.vnode.shapeFlag&4}let ri=!1;function Xy(n,e=!1,t=!1){e&&mc(e);const{props:r,children:s}=n.vnode,i=ip(n);Oy(n,r,i,e),Ly(n,s,t||e);const a=i?Yy(n,e):void 0;return e&&mc(!1),a}function Yy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,yy);const{setup:r}=t;if(r){_n();const s=n.setupContext=r.length>1?ev(n):null,i=mi(n),a=pi(r,n,0,[n.props,s]),c=Zf(a);if(yn(),i(),(c||n.sp)&&!$r(n)&&Nd(n),c){if(a.then(rh,rh),e)return a.then(l=>{sh(n,l)}).catch(l=>{ta(l,n,0)});n.asyncDep=a}else sh(n,a)}else op(n)}function sh(n,e,t){le(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Te(e)&&(n.setupState=bd(e)),op(n)}function op(n,e,t){const r=n.type;n.render||(n.render=r.render||zt);{const s=mi(n);_n();try{vy(n)}finally{yn(),s()}}}const Zy={get(n,e){return at(n,"get",""),n[e]}};function ev(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Zy),slots:n.slots,emit:n.emit,expose:e}}function ia(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bd(el(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $s)return $s[t](n)},has(e,t){return t in e||t in $s}})):n.proxy}function tv(n){return le(n)&&"__vccOpts"in n}const ap=(n,e)=>z_(n,e,ri),nv="3.5.32";/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _c;const ih=typeof window<"u"&&window.trustedTypes;if(ih)try{_c=ih.createPolicy("vue",{createHTML:n=>n})}catch{}const cp=_c?n=>_c.createHTML(n):n=>n,rv="http://www.w3.org/2000/svg",sv="http://www.w3.org/1998/Math/MathML",cn=typeof document<"u"?document:null,oh=cn&&cn.createElement("template"),iv={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?cn.createElementNS(rv,n):e==="mathml"?cn.createElementNS(sv,n):t?cn.createElement(n,{is:t}):cn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>cn.createTextNode(n),createComment:n=>cn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>cn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{oh.innerHTML=cp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=oh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ov=Symbol("_vtc");function av(n,e,t){const r=n[ov];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ah=Symbol("_vod"),cv=Symbol("_vsh"),lv=Symbol(""),uv=/(?:^|;)\s*display\s*:/;function hv(n,e,t){const r=n.style,s=$e(t);let i=!1;if(t&&!s){if(e)if($e(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&ao(r,c,"")}else for(const a in e)t[a]==null&&ao(r,a,"");for(const a in t)a==="display"&&(i=!0),ao(r,a,t[a])}else if(s){if(e!==t){const a=r[lv];a&&(t+=";"+a),r.cssText=t,i=uv.test(t)}}else e&&n.removeAttribute("style");ah in n&&(n[ah]=i?r.display:"",n[cv]&&(r.display="none"))}const ch=/\s*!important$/;function ao(n,e,t){if(re(t))t.forEach(r=>ao(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=fv(n,e);ch.test(t)?n.setProperty(Tr(r),t.replace(ch,""),"important"):n[r]=t}}const lh=["Webkit","Moz","ms"],Ga={};function fv(n,e){const t=Ga[e];if(t)return t;let r=Ot(e);if(r!=="filter"&&r in n)return Ga[e]=r;r=nd(r);for(let s=0;s<lh.length;s++){const i=lh[s]+r;if(i in n)return Ga[e]=i}return e}const uh="http://www.w3.org/1999/xlink";function hh(n,e,t,r,s,i=g_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(uh,e.slice(6,e.length)):n.setAttributeNS(uh,e,t):t==null||i&&!sd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":It(t)?String(t):t)}function fh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?cp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(c!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=sd(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function cr(n,e,t,r){n.addEventListener(e,t,r)}function dv(n,e,t,r){n.removeEventListener(e,t,r)}const dh=Symbol("_vei");function pv(n,e,t,r,s=null){const i=n[dh]||(n[dh]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=gv(e);if(r){const h=i[e]=yv(r,s);cr(n,c,h,l)}else a&&(dv(n,c,a,l),i[e]=void 0)}}const ph=/(?:Once|Passive|Capture)$/;function gv(n){let e;if(ph.test(n)){e={};let r;for(;r=n.match(ph);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Tr(n.slice(2)),e]}let Qa=0;const mv=Promise.resolve(),_v=()=>Qa||(mv.then(()=>Qa=0),Qa=Date.now());function yv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Xt(vv(r,t.value),e,5,[r])};return t.value=n,t.attached=_v(),t}function vv(n,e){if(re(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const gh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ev=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?av(n,r,a):e==="style"?hv(n,t,r):Ko(e)?Go(e)||pv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tv(n,e,r,a))?(fh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&hh(n,e,r,a,i,e!=="value")):n._isVueCE&&(Iv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!$e(r)))?fh(n,Ot(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),hh(n,e,r,a))};function Tv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&gh(e)&&le(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return gh(e)&&$e(t)?!1:e in n}function Iv(n,e){const t=n._def.props;if(!t)return!1;const r=Ot(e);return Array.isArray(t)?t.some(s=>Ot(s)===r):Object.keys(t).some(s=>Ot(s)===r)}const So=n=>{const e=n.props["onUpdate:modelValue"]||!1;return re(e)?t=>ro(e,t):e};function wv(n){n.target.composing=!0}function mh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hr=Symbol("_assign");function _h(n,e,t){return e&&(n=n.trim()),t&&(n=Wc(n)),n}const Av={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Hr]=So(s);const i=r||s.props&&s.props.type==="number";cr(n,e?"change":"input",a=>{a.target.composing||n[Hr](_h(n.value,t,i))}),(t||i)&&cr(n,"change",()=>{n.value=_h(n.value,t,i)}),e||(cr(n,"compositionstart",wv),cr(n,"compositionend",mh),cr(n,"change",mh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Hr]=So(a),n.composing)return;const c=(i||n.type==="number")&&!/^0\d/.test(n.value)?Wc(n.value):n.value,l=e??"";if(c===l)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===l)||(n.value=l)}},Ki={created(n,{value:e},t){n.checked=Ys(e,t.props.value),n[Hr]=So(t),cr(n,"change",()=>{n[Hr](bv(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n[Hr]=So(r),e!==t&&(n.checked=Ys(e,r.props.value))}};function bv(n){return"_value"in n?n._value:n.value}const Sv=Ze({patchProp:Ev},iv);let yh;function Rv(){return yh||(yh=Uy(Sv))}const Cv=((...n)=>{const e=Rv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Vv(r);if(!s)return;const i=e._component;!le(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Pv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Pv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Vv(n){return $e(n)?document.querySelector(n):n}/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let lp;const oa=n=>lp=n,up=Symbol();function yc(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var zs;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(zs||(zs={}));function kv(){const n=cd(!0),e=n.run(()=>Ad({}));let t=[],r=[];const s=el({install(i){oa(s),s._a=i,i.provide(up,s),i.config.globalProperties.$pinia=s,r.forEach(a=>t.push(a)),r=[]},use(i){return this._a?t.push(i):r.push(i),this},_p:t,_a:null,_e:n,_s:new Map,state:e});return s}const hp=()=>{};function vh(n,e,t,r=hp){n.add(e);const s=()=>{n.delete(e)&&r()};return!t&&ld()&&__(s),s}function Or(n,...e){n.forEach(t=>{t(...e)})}const Dv=n=>n(),Eh=Symbol(),Ja=Symbol();function vc(n,e){n instanceof Map&&e instanceof Map?e.forEach((t,r)=>n.set(r,t)):n instanceof Set&&e instanceof Set&&e.forEach(n.add,n);for(const t in e){if(!e.hasOwnProperty(t))continue;const r=e[t],s=n[t];yc(s)&&yc(r)&&n.hasOwnProperty(t)&&!xe(r)&&!gn(r)?n[t]=vc(s,r):n[t]=r}return n}const Ov=Symbol();function Nv(n){return!yc(n)||!Object.prototype.hasOwnProperty.call(n,Ov)}const{assign:kn}=Object;function xv(n){return!!(xe(n)&&n.effect)}function Mv(n,e,t,r){const{state:s,actions:i,getters:a}=e,c=t.state.value[n];let l;function h(){c||(t.state.value[n]=s?s():{});const d=j_(t.state.value[n]);return kn(d,i,Object.keys(a||{}).reduce((g,_)=>(g[_]=el(ap(()=>{oa(t);const I=t._s.get(n);return a[_].call(I,I)})),g),{}))}return l=fp(n,h,e,t,r,!0),l}function fp(n,e,t={},r,s,i){let a;const c=kn({actions:{}},t),l={deep:!0};let h,d,g=new Set,_=new Set,I;const V=r.state.value[n];!i&&!V&&(r.state.value[n]={});let D;function F(m){let y;h=d=!1,typeof m=="function"?(m(r.state.value[n]),y={type:zs.patchFunction,storeId:n,events:I}):(vc(r.state.value[n],m),y={type:zs.patchObject,payload:m,storeId:n,events:I});const T=D=Symbol();Rd().then(()=>{D===T&&(h=!0)}),d=!0,Or(g,y,r.state.value[n])}const G=i?function(){const{state:y}=t,T=y?y():{};this.$patch(b=>{kn(b,T)})}:hp;function $(){a.stop(),g.clear(),_.clear(),r._s.delete(n)}const K=(m,y="")=>{if(Eh in m)return m[Ja]=y,m;const T=function(){oa(r);const b=Array.from(arguments),S=new Set,E=new Set;function ht(ce){S.add(ce)}function Lt(ce){E.add(ce)}Or(_,{args:b,name:T[Ja],store:oe,after:ht,onError:Lt});let Pe;try{Pe=m.apply(this&&this.$id===n?this:oe,b)}catch(ce){throw Or(E,ce),ce}return Pe instanceof Promise?Pe.then(ce=>(Or(S,ce),ce)).catch(ce=>(Or(E,ce),Promise.reject(ce))):(Or(S,Pe),Pe)};return T[Eh]=!0,T[Ja]=y,T},z={_p:r,$id:n,$onAction:vh.bind(null,_),$patch:F,$reset:G,$subscribe(m,y={}){const T=vh(g,m,y.detached,()=>b()),b=a.run(()=>so(()=>r.state.value[n],S=>{(y.flush==="sync"?d:h)&&m({storeId:n,type:zs.direct,events:I},S)},kn({},l,y)));return T},$dispose:$},oe=Zo(z);r._s.set(n,oe);const w=(r._a&&r._a.runWithContext||Dv)(()=>r._e.run(()=>(a=cd()).run(()=>e({action:K}))));for(const m in w){const y=w[m];if(xe(y)&&!xv(y)||gn(y))i||(V&&Nv(y)&&(xe(y)?y.value=V[m]:vc(y,V[m])),r.state.value[n][m]=y);else if(typeof y=="function"){const T=K(y,m);w[m]=T,c.actions[m]=y}}return kn(oe,w),kn(me(oe),w),Object.defineProperty(oe,"$state",{get:()=>r.state.value[n],set:m=>{F(y=>{kn(y,m)})}}),r._p.forEach(m=>{kn(oe,a.run(()=>m({store:oe,app:r._a,pinia:r,options:c})))}),V&&i&&t.hydrate&&t.hydrate(oe.$state,V),h=!0,d=!0,oe}/*! #__NO_SIDE_EFFECTS__ */function Lv(n,e,t){let r;const s=typeof e=="function";r=s?t:e;function i(a,c){const l=Y_();return a=a||(l?Bs(up,null):null),a&&oa(a),a=lp,a._s.has(n)||(s?fp(n,e,r,a):Mv(n,r,a)),a._s.get(n)}return i.$id=n,i}function Fv(n,e){if(n==null)return;let t=n;for(let r=0;r<e.length;r++){if(t===void 0||t[e[r]]===void 0)return;if(t===null||t[e[r]]===null)return null;t=t[e[r]]}return t}function al(n,e,t){if(t.length===0)return e;const r=t[0];return t.length>1&&(e=al(typeof n!="object"||n===null||!Object.prototype.hasOwnProperty.call(n,r)?Number.isInteger(Number(t[1]))?[]:{}:n[r],e,Array.prototype.slice.call(t,1))),Number.isInteger(Number(r))&&Array.isArray(n)?n.slice()[r]:Object.assign({},n,{[r]:e})}function dp(n,e){if(n==null||e.length===0)return n;if(e.length===1){if(n==null)return n;if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.slice.call(n,0).splice(e[0],1);const t={};for(const r in n)t[r]=n[r];return delete t[e[0]],t}if(n[e[0]]==null){if(Number.isInteger(e[0])&&Array.isArray(n))return Array.prototype.concat.call([],n);const t={};for(const r in n)t[r]=n[r];return t}return al(n,dp(n[e[0]],Array.prototype.slice.call(e,1)),[e[0]])}function pp(n,e){return e.map(t=>t.split(".")).map(t=>[t,Fv(n,t)]).filter(t=>t[1]!==void 0).reduce((t,r)=>al(t,r[1],r[0]),{})}function gp(n,e){return e.map(t=>t.split(".")).reduce((t,r)=>dp(t,r),n)}function Th(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a,beforeHydrate:c,afterHydrate:l},h,d=!0){try{d&&(c==null||c(h));const g=e.getItem(r);if(g){const _=t.deserialize(g),I=i?pp(_,i):_,V=a?gp(I,a):I;n.$patch(V)}d&&(l==null||l(h))}catch(g){s&&console.error("[pinia-plugin-persistedstate]",g)}}function Ih(n,{storage:e,serializer:t,key:r,debug:s,pick:i,omit:a}){try{const c=i?pp(n,i):n,l=a?gp(c,a):c,h=t.serialize(l);e.setItem(r,h)}catch(c){s&&console.error("[pinia-plugin-persistedstate]",c)}}function Uv(n,e){return typeof n=="function"?n(e):typeof n=="string"?n:e}function Bv(n,e,t){const{pinia:r,store:s,options:{persist:i=t}}=n;if(!i)return;// v8 ignore if -- @preserve
if(!(s.$id in r.state.value)){const c=r._s.get(s.$id.replace("__hot:",""));c&&Promise.resolve().then(()=>c.$persist());return}const a=(Array.isArray(i)?i:i===!0?[{}]:[i]).map(e);s.$hydrate=({runHooks:c=!0}={})=>{a.forEach(l=>{Th(s,l,n,c)})},s.$persist=()=>{a.forEach(c=>{Ih(s.$state,c)})},a.forEach(c=>{Th(s,c,n),s.$subscribe((l,h)=>Ih(h,c),{detached:!0})})}function jv(n={}){return function(e){Bv(e,t=>{const r=Uv(t.key,e.store.$id);return{key:(n.key?n.key:s=>s)(r),debug:t.debug??n.debug??!1,serializer:t.serializer??n.serializer??{serialize:s=>JSON.stringify(s),deserialize:s=>JSON.parse(s)},storage:t.storage??n.storage??window.localStorage,beforeHydrate:t.beforeHydrate??n.beforeHydrate,afterHydrate:t.afterHydrate??n.afterHydrate,pick:t.pick,omit:t.omit}},n.auto??!1)}}var $v=jv();const Ir=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},Hv={},qv={class:"carafe"};function zv(n,e){return be(),Me("div",qv,[io(n.$slots,"top",{},void 0,!0),io(n.$slots,"mid",{},void 0,!0),io(n.$slots,"bottom",{},void 0,!0)])}const Wv=Ir(Hv,[["render",zv],["__scopeId","data-v-43d2bfc5"]]),Kv={},Gv={class:"mug"};function Qv(n,e){return be(),Me("div",Gv,[io(n.$slots,"default")])}const Jv=Ir(Kv,[["render",Qv]]),Xv=gi({__name:"Syrup",props:{syrupColor:{}},setup(n){const e=n;return(t,r)=>(be(),Me("div",{class:"syrup",style:pr({backgroundColor:e.syrupColor,height:e.syrupColor==="#c6c6c6"?"0%":"20%"})},null,4))}}),Yv=Ir(Xv,[["__scopeId","data-v-cd593bcd"]]),Zv=gi({__name:"Base",props:{baseColor:{}},setup(n){const e=n;return(t,r)=>(be(),Me("div",{class:"baseBeverage",style:pr({backgroundColor:e.baseColor})},null,4))}}),eE=Ir(Zv,[["__scopeId","data-v-5e0fe054"]]),tE=gi({__name:"Creamer",props:{creamerColor:{}},setup(n){const e=n;return(t,r)=>(be(),Me("div",{class:"froth",style:pr({height:e.creamerColor==="transparent"?"0%":"20%"})},[(be(),Me(Fe,null,On(5,()=>De("div",{class:"foam",style:pr({backgroundColor:e.creamerColor})},null,4)),64))],4))}}),nE=Ir(tE,[["__scopeId","data-v-2bf7eb9b"]]),rE={},sE={id:"steam"},iE={class:"stream"};function oE(n,e){return be(),Me("div",sE,[(be(),Me(Fe,null,On(3,()=>De("div",iE)),64))])}const aE=Ir(rE,[["render",oE]]),cE={},lE={id:"condensation"},uE={class:"flake"};function hE(n,e){return be(),Me("div",lE,[(be(),Me(Fe,null,On(3,()=>De("div",uE)),64))])}const fE=Ir(cE,[["render",hE]]),dE=gi({__name:"Beverage",props:{isIced:{type:Boolean},baseColor:{},creamerColor:{},syrupColor:{}},setup(n){return(e,t)=>(be(),qs(Jv,null,{default:ks(()=>[n.isIced?(be(),qs(fE,{key:0})):(be(),qs(aE,{key:1})),yt(Wv,null,{top:ks(()=>[yt(nE,{"creamer-color":n.creamerColor},null,8,["creamer-color"])]),mid:ks(()=>[yt(Yv,{"syrup-color":n.syrupColor},null,8,["syrup-color"])]),bottom:ks(()=>[yt(eE,{"base-color":n.baseColor},null,8,["base-color"])]),_:1})]),_:1}))}}),wh=["Hot","Cold"],pE=()=>{};var Ah={};/**
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
 */const mp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},gE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},_p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,l=s+2<n.length,h=l?n[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let _=(c&15)<<2|h>>6,I=h&63;l||(I=64,a||(_=64)),r.push(t[d],t[g],t[_],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(mp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):gE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new mE;const _=i<<2|c>>4;if(r.push(_),h!==64){const I=c<<4&240|h>>2;if(r.push(I),g!==64){const V=h<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _E=function(n){const e=mp(n);return _p.encodeByteArray(e,!0)},Ro=function(n){return _E(n).replace(/\./g,"")},yp=function(n){try{return _p.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function yE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vE=()=>yE().__FIREBASE_DEFAULTS__,EE=()=>{if(typeof process>"u"||typeof Ah>"u")return;const n=Ah.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},TE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&yp(n[1]);return e&&JSON.parse(e)},aa=()=>{try{return pE()||vE()||EE()||TE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},vp=n=>{var e,t;return(t=(e=aa())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},IE=n=>{const e=vp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Ep=()=>{var n;return(n=aa())===null||n===void 0?void 0:n.config},Tp=n=>{var e;return(e=aa())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class wE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function is(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ip(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function AE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ro(JSON.stringify(t)),Ro(JSON.stringify(a)),""].join(".")}const Ws={};function bE(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ws))Ws[e]?n.emulator.push(e):n.prod.push(e);return n}function SE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let bh=!1;function wp(n,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Ws[n]===e||Ws[n]||bh)return;Ws[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=bE().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function c(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function l(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{bh=!0,a()},_}function d(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=SE(r),I=t("text"),V=document.getElementById(I)||document.createElement("span"),D=t("learnmore"),F=document.getElementById(D)||document.createElement("a"),G=t("preprendIcon"),$=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const K=_.element;c(K),d(F,D);const z=h();l($,G),K.append($,V,F,z),document.body.appendChild(K)}i?(V.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function RE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function CE(){var n;const e=(n=aa())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function PE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function VE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DE(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function OE(){return!CE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NE(){try{return typeof indexedDB=="object"}catch{return!1}}function xE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const ME="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ME,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?LE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new bn(s,c,r)}}function LE(n,e){return n.replace(FE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const FE=/\{\$([^}]+)}/g;function UE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Sh(i)&&Sh(a)){if(!mr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Sh(n){return n!==null&&typeof n=="object"}/**
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
 */function yi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function BE(n,e){const t=new jE(n,e);return t.subscribe.bind(t)}class jE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");$E(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Xa),s.error===void 0&&(s.error=Xa),s.complete===void 0&&(s.complete=Xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $E(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Xa(){}/**
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
 */function Rt(n){return n&&n._delegate?n._delegate:n}class _r{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ar="[DEFAULT]";/**
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
 */class HE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new wE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zE(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(n){return n===ar?void 0:n}function zE(n){return n.instantiationMode==="EAGER"}/**
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
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new HE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const KE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},GE=he.INFO,QE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},JE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=QE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cl{constructor(e){this.name=e,this._logLevel=GE,this._logHandler=JE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const XE=(n,e)=>e.some(t=>n instanceof t);let Rh,Ch;function YE(){return Rh||(Rh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return Ch||(Ch=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ap=new WeakMap,Ec=new WeakMap,bp=new WeakMap,Ya=new WeakMap,ll=new WeakMap;function eT(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Fn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ap.set(t,n)}).catch(()=>{}),ll.set(e,n),e}function tT(n){if(Ec.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Ec.set(n,e)}let Tc={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ec.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function nT(n){Tc=n(Tc)}function rT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Za(this),e,...t);return bp.set(r,e.sort?e.sort():[e]),Fn(r)}:ZE().includes(n)?function(...e){return n.apply(Za(this),e),Fn(Ap.get(this))}:function(...e){return Fn(n.apply(Za(this),e))}}function sT(n){return typeof n=="function"?rT(n):(n instanceof IDBTransaction&&tT(n),XE(n,YE())?new Proxy(n,Tc):n)}function Fn(n){if(n instanceof IDBRequest)return eT(n);if(Ya.has(n))return Ya.get(n);const e=sT(n);return e!==n&&(Ya.set(n,e),ll.set(e,n)),e}const Za=n=>ll.get(n);function iT(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Fn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Fn(a.result),l.oldVersion,l.newVersion,Fn(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const oT=["get","getKey","getAll","getAllKeys","count"],aT=["put","add","delete","clear"],ec=new Map;function Ph(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=aT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||oT.includes(t)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),s&&l.done]))[0]};return ec.set(e,i),i}nT(n=>({...n,get:(e,t,r)=>Ph(e,t)||n.get(e,t,r),has:(e,t)=>!!Ph(e,t)||n.has(e,t)}));/**
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
 */class cT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lT(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function lT(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ic="@firebase/app",Vh="0.13.2";/**
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
 */const En=new cl("@firebase/app"),uT="@firebase/app-compat",hT="@firebase/analytics-compat",fT="@firebase/analytics",dT="@firebase/app-check-compat",pT="@firebase/app-check",gT="@firebase/auth",mT="@firebase/auth-compat",_T="@firebase/database",yT="@firebase/data-connect",vT="@firebase/database-compat",ET="@firebase/functions",TT="@firebase/functions-compat",IT="@firebase/installations",wT="@firebase/installations-compat",AT="@firebase/messaging",bT="@firebase/messaging-compat",ST="@firebase/performance",RT="@firebase/performance-compat",CT="@firebase/remote-config",PT="@firebase/remote-config-compat",VT="@firebase/storage",kT="@firebase/storage-compat",DT="@firebase/firestore",OT="@firebase/ai",NT="@firebase/firestore-compat",xT="firebase",MT="11.10.0";/**
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
 */const wc="[DEFAULT]",LT={[Ic]:"fire-core",[uT]:"fire-core-compat",[fT]:"fire-analytics",[hT]:"fire-analytics-compat",[pT]:"fire-app-check",[dT]:"fire-app-check-compat",[gT]:"fire-auth",[mT]:"fire-auth-compat",[_T]:"fire-rtdb",[yT]:"fire-data-connect",[vT]:"fire-rtdb-compat",[ET]:"fire-fn",[TT]:"fire-fn-compat",[IT]:"fire-iid",[wT]:"fire-iid-compat",[AT]:"fire-fcm",[bT]:"fire-fcm-compat",[ST]:"fire-perf",[RT]:"fire-perf-compat",[CT]:"fire-rc",[PT]:"fire-rc-compat",[VT]:"fire-gcs",[kT]:"fire-gcs-compat",[DT]:"fire-fst",[NT]:"fire-fst-compat",[OT]:"fire-vertex","fire-js":"fire-js",[xT]:"fire-js-all"};/**
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
 */const Co=new Map,FT=new Map,Ac=new Map;function kh(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Yr(n){const e=n.name;if(Ac.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;Ac.set(e,n);for(const t of Co.values())kh(t,n);for(const t of FT.values())kh(t,n);return!0}function ul(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const UT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Un=new _i("app","Firebase",UT);/**
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
 */class BT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const os=MT;function Sp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wc,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Un.create("bad-app-name",{appName:String(s)});if(t||(t=Ep()),!t)throw Un.create("no-options");const i=Co.get(s);if(i){if(mr(t,i.options)&&mr(r,i.config))return i;throw Un.create("duplicate-app",{appName:s})}const a=new WE(s);for(const l of Ac.values())a.addComponent(l);const c=new BT(t,r,a);return Co.set(s,c),c}function Rp(n=wc){const e=Co.get(n);if(!e&&n===wc&&Ep())return Sp();if(!e)throw Un.create("no-app",{appName:n});return e}function Bn(n,e,t){var r;let s=(r=LT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}Yr(new _r(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const jT="firebase-heartbeat-database",$T=1,si="firebase-heartbeat-store";let tc=null;function Cp(){return tc||(tc=iT(jT,$T,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(si)}catch(t){console.warn(t)}}}}).catch(n=>{throw Un.create("idb-open",{originalErrorMessage:n.message})})),tc}async function HT(n){try{const t=(await Cp()).transaction(si),r=await t.objectStore(si).get(Pp(n));return await t.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const t=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});En.warn(t.message)}}}async function Dh(n,e){try{const r=(await Cp()).transaction(si,"readwrite");await r.objectStore(si).put(e,Pp(n)),await r.done}catch(t){if(t instanceof bn)En.warn(t.message);else{const r=Un.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});En.warn(r.message)}}}function Pp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const qT=1024,zT=30;class WT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>zT){const a=QT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){En.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Oh(),{heartbeatsToSend:r,unsentEntries:s}=KT(this._heartbeatsCache.heartbeats),i=Ro(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return En.warn(t),""}}}function Oh(){return new Date().toISOString().substring(0,10)}function KT(n,e=qT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Nh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class GT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NE()?xE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await HT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nh(n){return Ro(JSON.stringify({version:2,heartbeats:n})).length}function QT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function JT(n){Yr(new _r("platform-logger",e=>new cT(e),"PRIVATE")),Yr(new _r("heartbeat",e=>new WT(e),"PRIVATE")),Bn(Ic,Vh,n),Bn(Ic,Vh,"esm2017"),Bn("fire-js","")}JT("");var xh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var jn,Vp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function y(){}y.prototype=m.prototype,w.D=m.prototype,w.prototype=new y,w.prototype.constructor=w,w.C=function(T,b,S){for(var E=Array(arguments.length-2),ht=2;ht<arguments.length;ht++)E[ht-2]=arguments[ht];return m.prototype[b].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,y){y||(y=0);var T=Array(16);if(typeof m=="string")for(var b=0;16>b;++b)T[b]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(b=0;16>b;++b)T[b]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=w.g[0],y=w.g[1],b=w.g[2];var S=w.g[3],E=m+(S^y&(b^S))+T[0]+3614090360&4294967295;m=y+(E<<7&4294967295|E>>>25),E=S+(b^m&(y^b))+T[1]+3905402710&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(y^S&(m^y))+T[2]+606105819&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(m^b&(S^m))+T[3]+3250441966&4294967295,y=b+(E<<22&4294967295|E>>>10),E=m+(S^y&(b^S))+T[4]+4118548399&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(b^m&(y^b))+T[5]+1200080426&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(y^S&(m^y))+T[6]+2821735955&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(m^b&(S^m))+T[7]+4249261313&4294967295,y=b+(E<<22&4294967295|E>>>10),E=m+(S^y&(b^S))+T[8]+1770035416&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(b^m&(y^b))+T[9]+2336552879&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(y^S&(m^y))+T[10]+4294925233&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(m^b&(S^m))+T[11]+2304563134&4294967295,y=b+(E<<22&4294967295|E>>>10),E=m+(S^y&(b^S))+T[12]+1804603682&4294967295,m=y+(E<<7&4294967295|E>>>25),E=S+(b^m&(y^b))+T[13]+4254626195&4294967295,S=m+(E<<12&4294967295|E>>>20),E=b+(y^S&(m^y))+T[14]+2792965006&4294967295,b=S+(E<<17&4294967295|E>>>15),E=y+(m^b&(S^m))+T[15]+1236535329&4294967295,y=b+(E<<22&4294967295|E>>>10),E=m+(b^S&(y^b))+T[1]+4129170786&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(m^y))+T[6]+3225465664&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^y&(S^m))+T[11]+643717713&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(b^S))+T[0]+3921069994&4294967295,y=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(y^b))+T[5]+3593408605&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(m^y))+T[10]+38016083&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^y&(S^m))+T[15]+3634488961&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(b^S))+T[4]+3889429448&4294967295,y=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(y^b))+T[9]+568446438&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(m^y))+T[14]+3275163606&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^y&(S^m))+T[3]+4107603335&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(b^S))+T[8]+1163531501&4294967295,y=b+(E<<20&4294967295|E>>>12),E=m+(b^S&(y^b))+T[13]+2850285829&4294967295,m=y+(E<<5&4294967295|E>>>27),E=S+(y^b&(m^y))+T[2]+4243563512&4294967295,S=m+(E<<9&4294967295|E>>>23),E=b+(m^y&(S^m))+T[7]+1735328473&4294967295,b=S+(E<<14&4294967295|E>>>18),E=y+(S^m&(b^S))+T[12]+2368359562&4294967295,y=b+(E<<20&4294967295|E>>>12),E=m+(y^b^S)+T[5]+4294588738&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^b)+T[8]+2272392833&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^y)+T[11]+1839030562&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^m)+T[14]+4259657740&4294967295,y=b+(E<<23&4294967295|E>>>9),E=m+(y^b^S)+T[1]+2763975236&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^b)+T[4]+1272893353&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^y)+T[7]+4139469664&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^m)+T[10]+3200236656&4294967295,y=b+(E<<23&4294967295|E>>>9),E=m+(y^b^S)+T[13]+681279174&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^b)+T[0]+3936430074&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^y)+T[3]+3572445317&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^m)+T[6]+76029189&4294967295,y=b+(E<<23&4294967295|E>>>9),E=m+(y^b^S)+T[9]+3654602809&4294967295,m=y+(E<<4&4294967295|E>>>28),E=S+(m^y^b)+T[12]+3873151461&4294967295,S=m+(E<<11&4294967295|E>>>21),E=b+(S^m^y)+T[15]+530742520&4294967295,b=S+(E<<16&4294967295|E>>>16),E=y+(b^S^m)+T[2]+3299628645&4294967295,y=b+(E<<23&4294967295|E>>>9),E=m+(b^(y|~S))+T[0]+4096336452&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~b))+T[7]+1126891415&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~y))+T[14]+2878612391&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~m))+T[5]+4237533241&4294967295,y=b+(E<<21&4294967295|E>>>11),E=m+(b^(y|~S))+T[12]+1700485571&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~b))+T[3]+2399980690&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~y))+T[10]+4293915773&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~m))+T[1]+2240044497&4294967295,y=b+(E<<21&4294967295|E>>>11),E=m+(b^(y|~S))+T[8]+1873313359&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~b))+T[15]+4264355552&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~y))+T[6]+2734768916&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~m))+T[13]+1309151649&4294967295,y=b+(E<<21&4294967295|E>>>11),E=m+(b^(y|~S))+T[4]+4149444226&4294967295,m=y+(E<<6&4294967295|E>>>26),E=S+(y^(m|~b))+T[11]+3174756917&4294967295,S=m+(E<<10&4294967295|E>>>22),E=b+(m^(S|~y))+T[2]+718787259&4294967295,b=S+(E<<15&4294967295|E>>>17),E=y+(S^(b|~m))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var y=m-this.blockSize,T=this.B,b=this.h,S=0;S<m;){if(b==0)for(;S<=y;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<m;)if(T[b++]=w.charCodeAt(S++),b==this.blockSize){s(this,T),b=0;break}}else for(;S<m;)if(T[b++]=w[S++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var y=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=y&255,y/=256;for(this.u(w),w=Array(16),m=y=0;4>m;++m)for(var T=0;32>T;T+=8)w[y++]=this.g[m]>>>T&255;return w};function i(w,m){var y=c;return Object.prototype.hasOwnProperty.call(y,w)?y[w]:y[w]=m(w)}function a(w,m){this.h=m;for(var y=[],T=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;T&&S==m||(y[b]=S,T=!1)}this.g=y}var c={};function l(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return F(h(-w));for(var m=[],y=1,T=0;w>=y;T++)m[T]=w/y|0,y*=4294967296;return new a(m,0)}function d(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(d(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(m,8)),T=g,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),E=parseInt(w.substring(b,b+S),m);8>S?(S=h(Math.pow(m,S)),T=T.j(S).add(h(E))):(T=T.j(y),T=T.add(h(E)))}return T}var g=l(0),_=l(1),I=l(16777216);n=a.prototype,n.m=function(){if(D(this))return-F(this).m();for(var w=0,m=1,y=0;y<this.g.length;y++){var T=this.i(y);w+=(0<=T?T:4294967296+T)*m,m*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(V(this))return"0";if(D(this))return"-"+F(this).toString(w);for(var m=h(Math.pow(w,6)),y=this,T="";;){var b=z(y,m).g;y=G(y,b.j(m));var S=((0<y.g.length?y.g[0]:y.h)>>>0).toString(w);if(y=b,V(y))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function V(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=G(this,w),D(w)?-1:V(w)?0:1};function F(w){for(var m=w.g.length,y=[],T=0;T<m;T++)y[T]=~w.g[T];return new a(y,~w.h).add(_)}n.abs=function(){return D(this)?F(this):this},n.add=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0,b=0;b<=m;b++){var S=T+(this.i(b)&65535)+(w.i(b)&65535),E=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);T=E>>>16,S&=65535,E&=65535,y[b]=E<<16|S}return new a(y,y[y.length-1]&-2147483648?-1:0)};function G(w,m){return w.add(F(m))}n.j=function(w){if(V(this)||V(w))return g;if(D(this))return D(w)?F(this).j(F(w)):F(F(this).j(w));if(D(w))return F(this.j(F(w)));if(0>this.l(I)&&0>w.l(I))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,y=[],T=0;T<2*m;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<w.g.length;b++){var S=this.i(T)>>>16,E=this.i(T)&65535,ht=w.i(b)>>>16,Lt=w.i(b)&65535;y[2*T+2*b]+=E*Lt,$(y,2*T+2*b),y[2*T+2*b+1]+=S*Lt,$(y,2*T+2*b+1),y[2*T+2*b+1]+=E*ht,$(y,2*T+2*b+1),y[2*T+2*b+2]+=S*ht,$(y,2*T+2*b+2)}for(T=0;T<m;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=m;T<2*m;T++)y[T]=0;return new a(y,0)};function $(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function K(w,m){this.g=w,this.h=m}function z(w,m){if(V(m))throw Error("division by zero");if(V(w))return new K(g,g);if(D(w))return m=z(F(w),m),new K(F(m.g),F(m.h));if(D(m))return m=z(w,F(m)),new K(F(m.g),m.h);if(30<w.g.length){if(D(w)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var y=_,T=m;0>=T.l(w);)y=oe(y),T=oe(T);var b=_e(y,1),S=_e(T,1);for(T=_e(T,2),y=_e(y,2);!V(T);){var E=S.add(T);0>=E.l(w)&&(b=b.add(y),S=E),T=_e(T,1),y=_e(y,1)}return m=G(w,b.j(m)),new K(b,m)}for(b=g;0<=w.l(m);){for(y=Math.max(1,Math.floor(w.m()/m.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(y),E=S.j(m);D(E)||0<E.l(w);)y-=T,S=h(y),E=S.j(m);V(S)&&(S=_),b=b.add(S),w=G(w,E)}return new K(b,w)}n.A=function(w){return z(this,w).h},n.and=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)&w.i(T);return new a(y,this.h&w.h)},n.or=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)|w.i(T);return new a(y,this.h|w.h)},n.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),y=[],T=0;T<m;T++)y[T]=this.i(T)^w.i(T);return new a(y,this.h^w.h)};function oe(w){for(var m=w.g.length+1,y=[],T=0;T<m;T++)y[T]=w.i(T)<<1|w.i(T-1)>>>31;return new a(y,w.h)}function _e(w,m){var y=m>>5;m%=32;for(var T=w.g.length-y,b=[],S=0;S<T;S++)b[S]=0<m?w.i(S+y)>>>m|w.i(S+y+1)<<32-m:w.i(S+y);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Vp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,jn=a}).apply(typeof xh<"u"?xh:typeof self<"u"?self:typeof window<"u"?window:{});var Gi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kp,Ns,Dp,co,bc,Op,Np,xp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Gi=="object"&&Gi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var C=f++;return{value:u(C,o[C]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,_.apply(null,arguments)}function I(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,C){for(var B=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)B[Ie-2]=arguments[Ie];return u.prototype[R].apply(p,B)}}function D(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function F(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(l(p)){const R=o.length||0,C=p.length||0;o.length=R+C;for(let B=0;B<C;B++)o[R+B]=p[B]}else o.push(p)}}class G{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function K(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var oe=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function _e(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function m(o){const u={};for(const f in o)u[f]=o[f];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let C=0;C<y.length;C++)f=y[C],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){c.setTimeout(()=>{throw o},0)}function E(){var o=Ct;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class ht{constructor(){this.h=this.g=null}add(u,f){const p=Lt.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Lt=new G(()=>new Pe,o=>o.reset());class Pe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ce,pe=!1,Ct=new ht,Xn=()=>{const o=c.Promise.resolve(void 0);ce=()=>{o.then(tn)}};var tn=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Lt;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function qe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}qe.prototype.h=function(){this.defaultPrevented=!0};var ba=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};c.addEventListener("test",f,u),c.removeEventListener("test",f,u)}catch{}return o})();function Yn(o,u){if(qe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(oe){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Zn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Yn.aa.h.call(this)}}V(Yn,qe);var Zn={2:"touch",3:"pen",4:"mouse"};Yn.prototype.h=function(){Yn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),fs=0;function Ri(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++fs,this.da=this.fa=!1}function Ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ds(o){this.src=o,this.g={},this.h=0}ds.prototype.add=function(o,u,f,p,R){var C=o.toString();o=this.g[C],o||(o=this.g[C]=[],this.h++);var B=A(o,u,p,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Ri(u,this.src,C,!!p,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),C;(C=0<=R)&&Array.prototype.splice.call(p,R,1),C&&(Ft(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,p){for(var R=0;R<o.length;++R){var C=o[R];if(!C.da&&C.listener==u&&C.capture==!!f&&C.ha==p)return R}return-1}var P="closure_lm_"+(1e6*Math.random()|0),L={};function O(o,u,f,p,R){if(Array.isArray(u)){for(var C=0;C<u.length;C++)O(o,u[C],f,p,R);return null}return f=Z(f),o&&o[nn]?o.K(u,f,h(p)?!!p.capture:!1,R):M(o,u,f,!1,p,R)}function M(o,u,f,p,R,C){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,Ie=q(o);if(Ie||(o[P]=Ie=new ds(o)),f=Ie.add(u,f,p,B,C),f.proxy)return f;if(p=H(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)ba||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(x(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function H(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function j(o,u,f,p,R){if(Array.isArray(u))for(var C=0;C<u.length;C++)j(o,u[C],f,p,R);else p=h(p)?!!p.capture:!!p,f=Z(f),o&&o[nn]?(o=o.i,u=String(u).toString(),u in o.g&&(C=o.g[u],f=A(C,f,p,R),-1<f&&(Ft(C[f]),Array.prototype.splice.call(C,f,1),C.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,p,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[nn])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(x(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=q(u))?(v(f,o),f.h==0&&(f.src=null,u[P]=null)):Ft(o)}}}function x(o){return o in L?L[o]:L[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new Yn(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&U(o),o=f.call(p,u)}return o}function q(o){return o=o[P],o instanceof ds?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ee(){He.call(this),this.i=new ds(this),this.M=this,this.F=null}V(ee,He),ee.prototype[nn]=!0,ee.prototype.removeEventListener=function(o,u,f,p){j(this,o,u,f,p)};function ae(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new qe(u,o);else if(u instanceof qe)u.target=u.target||o;else{var R=u;u=new qe(p,o),T(u,R)}if(R=!0,f)for(var C=f.length-1;0<=C;C--){var B=u.g=f[C];R=ye(B,p,!0,u)&&R}if(B=u.g=o,R=ye(B,p,!0,u)&&R,R=ye(B,p,!1,u)&&R,f)for(C=0;C<f.length;C++)B=u.g=f[C],R=ye(B,p,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)Ft(f[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},ee.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function ye(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,C=0;C<u.length;++C){var B=u[C];if(B&&!B.da&&B.capture==f){var Ie=B.listener,Je=B.ha||B.src;B.fa&&v(o.i,B),R=Ie.call(Je,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ve(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Ue(o){o.g=Ve(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class wt extends He{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tt(o){He.call(this),this.h=o,this.g={}}V(tt,He);var Sn=[];function ps(o){_e(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}tt.prototype.N=function(){tt.aa.N.call(this),ps(this)},tt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Qe=c.JSON.stringify,At=c.JSON.parse,Ci=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Rr(){}Rr.prototype.h=null;function Jl(o){return o.h||(o.h=o.i())}function Xl(){}var gs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sa(){qe.call(this,"d")}V(Sa,qe);function Ra(){qe.call(this,"c")}V(Ra,qe);var er={},Yl=null;function Pi(){return Yl=Yl||new ee}er.La="serverreachability";function Zl(o){qe.call(this,er.La,o)}V(Zl,qe);function ms(o){const u=Pi();ae(u,new Zl(u))}er.STAT_EVENT="statevent";function eu(o,u){qe.call(this,er.STAT_EVENT,o),this.stat=u}V(eu,qe);function ft(o){const u=Pi();ae(u,new eu(u,o))}er.Ma="timingevent";function tu(o,u){qe.call(this,er.Ma,o),this.size=u}V(tu,qe);function _s(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ys(){this.g=!0}ys.prototype.xa=function(){this.g=!1};function Lm(o,u,f,p,R,C){o.info(function(){if(o.g)if(C)for(var B="",Ie=C.split("&"),Je=0;Je<Ie.length;Je++){var ge=Ie[Je].split("=");if(1<ge.length){var nt=ge[0];ge=ge[1];var rt=nt.split("_");B=2<=rt.length&&rt[1]=="type"?B+(nt+"="+ge+"&"):B+(nt+"=redacted&")}}else B=null;else B=C;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function Fm(o,u,f,p,R,C,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+C+" "+B})}function Cr(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Bm(o,f)+(p?" "+p:"")})}function Um(o,u){o.info(function(){return"TIMEOUT: "+u})}ys.prototype.info=function(){};function Bm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var C=R[0];if(C!="noop"&&C!="stop"&&C!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Qe(f)}catch{return u}}var Vi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ca;function ki(){}V(ki,Rr),ki.prototype.g=function(){return new XMLHttpRequest},ki.prototype.i=function(){return{}},Ca=new ki;function Rn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new tt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ru}function ru(){this.i=null,this.g="",this.h=!1}var su={},Pa={};function Va(o,u,f){o.L=1,o.v=xi(rn(u)),o.m=f,o.P=!0,iu(o,null)}function iu(o,u){o.F=Date.now(),Di(o),o.A=rn(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),vu(f.i,"t",p),o.C=0,f=o.j.J,o.h=new ru,o.g=Lu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new wt(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Sn[0]=R.toString()),R=Sn);for(var C=0;C<R.length;C++){var B=O(f,R[C],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ms(),Lm(o.i,o.u,o.A,o.l,o.R,o.m)}Rn.prototype.ca=function(o){o=o.target;const u=this.M;u&&sn(o)==3?u.j():this.Y(o)},Rn.prototype.Y=function(o){try{if(o==this.g)e:{const rt=sn(this.g);var u=this.g.Ba();const kr=this.g.Z();if(!(3>rt)&&(rt!=3||this.g&&(this.h.h||this.g.oa()||Su(this.g)))){this.J||rt!=4||u==7||(u==8||0>=kr?ms(3):ms(2)),ka(this);var f=this.g.Z();this.X=f;t:if(ou(this)){var p=Su(this.g);o="";var R=p.length,C=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tr(this),vs(this);var B="";break t}this.h.i=new c.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(C&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Fm(this.i,this.u,this.A,this.l,this.R,rt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,Je=this.g;if((Ie=Je.g?Je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ie)){var ge=Ie;break t}}ge=null}if(f=ge)Cr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Da(this,f);else{this.o=!1,this.s=3,ft(12),tr(this),vs(this);break e}}if(this.P){f=!0;let Pt;for(;!this.J&&this.C<B.length;)if(Pt=jm(this,B),Pt==Pa){rt==4&&(this.s=4,ft(14),f=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==su){this.s=4,ft(15),Cr(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else Cr(this.i,this.l,Pt,null),Da(this,Pt);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rt!=4||B.length!=0||this.h.h||(this.s=1,ft(16),f=!1),this.o=this.o&&f,!f)Cr(this.i,this.l,B,"[Invalid Chunked Response]"),tr(this),vs(this);else if(0<B.length&&!this.W){this.W=!0;var nt=this.j;nt.g==this&&nt.ba&&!nt.M&&(nt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Fa(nt),nt.M=!0,ft(11))}}else Cr(this.i,this.l,B,null),Da(this,B);rt==4&&tr(this),this.o&&!this.J&&(rt==4?Ou(this.j,this):(this.o=!1,Di(this)))}else s_(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),tr(this),vs(this)}}}catch{}finally{}};function ou(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function jm(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?Pa:(f=Number(u.substring(f,p)),isNaN(f)?su:(p+=1,p+f>u.length?Pa:(u=u.slice(p,p+f),o.C=p+f,u)))}Rn.prototype.cancel=function(){this.J=!0,tr(this)};function Di(o){o.S=Date.now()+o.I,au(o,o.I)}function au(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=_s(_(o.ba,o),u)}function ka(o){o.B&&(c.clearTimeout(o.B),o.B=null)}Rn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Um(this.i,this.A),this.L!=2&&(ms(),ft(17)),tr(this),this.s=2,vs(this)):au(this,this.S-o)};function vs(o){o.j.G==0||o.J||Ou(o.j,o)}function tr(o){ka(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ps(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Da(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Oa(f.h,o))){if(!o.K&&Oa(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)ji(f),Ui(f);else break e;La(f),ft(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=_s(_(f.Za,f),6e3));if(1>=uu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else rr(f,11)}else if((o.K||f.g==o)&&ji(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let ge=R[u];if(f.T=ge[0],ge=ge[1],f.G==2)if(ge[0]=="c"){f.K=ge[1],f.ia=ge[2];const nt=ge[3];nt!=null&&(f.la=nt,f.j.info("VER="+f.la));const rt=ge[4];rt!=null&&(f.Aa=rt,f.j.info("SVER="+f.Aa));const kr=ge[5];kr!=null&&typeof kr=="number"&&0<kr&&(p=1.5*kr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Pt=o.g;if(Pt){const Hi=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hi){var C=p.h;C.g||Hi.indexOf("spdy")==-1&&Hi.indexOf("quic")==-1&&Hi.indexOf("h2")==-1||(C.j=C.l,C.g=new Set,C.h&&(Na(C,C.h),C.h=null))}if(p.D){const Ua=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ua&&(p.ya=Ua,Se(p.I,p.D,Ua))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var B=o;if(p.qa=Mu(p,p.J?p.ia:null,p.W),B.K){hu(p.h,B);var Ie=B,Je=p.L;Je&&(Ie.I=Je),Ie.B&&(ka(Ie),Di(Ie)),p.g=B}else ku(p);0<f.i.length&&Bi(f)}else ge[0]!="stop"&&ge[0]!="close"||rr(f,7);else f.G==3&&(ge[0]=="stop"||ge[0]=="close"?ge[0]=="stop"?rr(f,7):Ma(f):ge[0]!="noop"&&f.l&&f.l.ta(ge),f.v=0)}}ms(4)}catch{}}var $m=class{constructor(o,u){this.g=o,this.map=u}};function cu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function lu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function uu(o){return o.h?1:o.g?o.g.size:0}function Oa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Na(o,u){o.g?o.g.add(u):o.h=u}function hu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}cu.prototype.cancel=function(){if(this.i=fu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function fu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return D(o.i)}function Hm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function qm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function du(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=qm(o),p=Hm(o),R=p.length,C=0;C<R;C++)u.call(void 0,p[C],f&&f[C],o)}var pu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var C=o[f].substring(0,p);R=o[f].substring(p+1)}else C=o[f];u(C,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function nr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nr){this.h=o.h,Oi(this,o.j),this.o=o.o,this.g=o.g,Ni(this,o.s),this.l=o.l;var u=o.i,f=new Is;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),gu(this,f),this.m=o.m}else o&&(u=String(o).match(pu))?(this.h=!1,Oi(this,u[1]||"",!0),this.o=Es(u[2]||""),this.g=Es(u[3]||"",!0),Ni(this,u[4]),this.l=Es(u[5]||"",!0),gu(this,u[6]||"",!0),this.m=Es(u[7]||"")):(this.h=!1,this.i=new Is(null,this.h))}nr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ts(u,mu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ts(u,mu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(Ts(f,f.charAt(0)=="/"?Gm:Km,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",Ts(f,Jm)),o.join("")};function rn(o){return new nr(o)}function Oi(o,u,f){o.j=f?Es(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ni(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function gu(o,u,f){u instanceof Is?(o.i=u,Xm(o.i,o.h)):(f||(u=Ts(u,Qm)),o.i=new Is(u,o.h))}function Se(o,u,f){o.i.set(u,f)}function xi(o){return Se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Es(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ts(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Wm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Wm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var mu=/[#\/\?@]/g,Km=/[#\?:]/g,Gm=/[#\?]/g,Qm=/[#\?@]/g,Jm=/#/g;function Is(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Cn(o){o.g||(o.g=new Map,o.h=0,o.i&&zm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=Is.prototype,n.add=function(o,u){Cn(this),this.i=null,o=Pr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function _u(o,u){Cn(o),u=Pr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function yu(o,u){return Cn(o),u=Pr(o,u),o.g.has(u)}n.forEach=function(o,u){Cn(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)},n.na=function(){Cn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=o[p];for(let C=0;C<R.length;C++)f.push(u[p])}return f},n.V=function(o){Cn(this);let u=[];if(typeof o=="string")yu(this,o)&&(u=u.concat(this.g.get(Pr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Cn(this),this.i=null,o=Pr(this,o),yu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function vu(o,u,f){_u(o,u),0<f.length&&(o.i=null,o.g.set(Pr(o,u),D(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const C=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var R=C;B[p]!==""&&(R+="="+encodeURIComponent(String(B[p]))),o.push(R)}}return this.i=o.join("&")};function Pr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Xm(o,u){u&&!o.j&&(Cn(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(_u(this,p),vu(this,R,f))},o)),o.j=u}function Ym(o,u){const f=new ys;if(c.Image){const p=new Image;p.onload=I(Pn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=I(Pn,f,"TestLoadImage: error",!1,u,p),p.onabort=I(Pn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=I(Pn,f,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Zm(o,u){const f=new ys,p=new AbortController,R=setTimeout(()=>{p.abort(),Pn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(C=>{clearTimeout(R),C.ok?Pn(f,"TestPingServer: ok",!0,u):Pn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Pn(f,"TestPingServer: error",!1,u)})}function Pn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function e_(){this.g=new Ci}function t_(o,u,f){const p=f||"";try{du(o,function(R,C){let B=R;h(R)&&(B=Qe(R)),u.push(p+C+"="+encodeURIComponent(B))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Mi(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Mi,Rr),Mi.prototype.g=function(){return new Li(this.l,this.j)},Mi.prototype.i=(function(o){return function(){return o}})({});function Li(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Li,ee),n=Li.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,As(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ws(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,As(this)),this.g&&(this.readyState=3,As(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Eu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Eu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ws(this):As(this),this.readyState==3&&Eu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,ws(this))},n.Qa=function(o){this.g&&(this.response=o,ws(this))},n.ga=function(){this.g&&ws(this)};function ws(o){o.readyState=4,o.l=null,o.j=null,o.v=null,As(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function As(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Tu(o){let u="";return _e(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function xa(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=Tu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Se(o,u,f))}function Ne(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ne,ee);var n_=/^https?$/i,r_=["POST","PUT"];n=Ne.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ca.g(),this.v=this.o?Jl(this.o):Jl(Ca),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(C){Iu(this,C);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const C of p.keys())f.set(C,p.get(C));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(C=>C.toLowerCase()=="content-type"),R=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(r_,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[C,B]of f)this.g.setRequestHeader(C,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bu(this),this.u=!0,this.g.send(o),this.u=!1}catch(C){Iu(this,C)}};function Iu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,wu(o),Fi(o)}function wu(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),Fi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fi(this,!0)),Ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Au(this):this.bb())},n.bb=function(){Au(this)};function Au(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)Ve(o.Ea,0,o);else if(ae(o,"readystatechange"),sn(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=B===0){var R=String(o.D).match(pu)[1]||null;!R&&c.self&&c.self.location&&(R=c.self.location.protocol.slice(0,-1)),p=!n_.test(R?R.toLowerCase():"")}f=p}if(f)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var C=2<sn(o)?o.g.statusText:""}catch{C=""}o.l=C+" ["+o.Z()+"]",wu(o)}}finally{Fi(o)}}}}function Fi(o,u){if(o.g){bu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{f.onreadystatechange=p}catch{}}}function bu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),At(u)}};function Su(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function s_(o){const u={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if($(o[p]))continue;var f=b(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const C=u[R]||[];u[R]=C,C.push(f)}w(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function bs(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Ru(o){this.Aa=0,this.i=[],this.j=new ys,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=bs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=bs("baseRetryDelayMs",5e3,o),this.cb=bs("retryDelaySeedMs",1e4,o),this.Wa=bs("forwardChannelMaxRetries",2,o),this.wa=bs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new cu(o&&o.concurrentRequestLimit),this.Da=new e_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ru.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,p){ft(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Mu(this,null,this.W),Bi(this)};function Ma(o){if(Cu(o),o.G==3){var u=o.U++,f=rn(o.I);if(Se(f,"SID",o.K),Se(f,"RID",u),Se(f,"TYPE","terminate"),Ss(o,f),u=new Rn(o,o.j,u),u.L=2,u.v=xi(rn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=u.v,f=!0),f||(u.g=Lu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Di(u)}xu(o)}function Ui(o){o.g&&(Fa(o),o.g.cancel(),o.g=null)}function Cu(o){Ui(o),o.u&&(c.clearTimeout(o.u),o.u=null),ji(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Bi(o){if(!lu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ce||Xn(),pe||(ce(),pe=!0),Ct.add(u,o),o.B=0}}function i_(o,u){return uu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=_s(_(o.Ga,o,u),Nu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Rn(this,this.j,o);let C=this.o;if(this.S&&(C?(C=m(C),T(C,this.S)):C=this.S),this.m!==null||this.O||(R.H=C,C=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Vu(this,R,u),f=rn(this.I),Se(f,"RID",o),Se(f,"CVER",22),this.D&&Se(f,"X-HTTP-Session-Id",this.D),Ss(this,f),C&&(this.O?u="headers="+encodeURIComponent(String(Tu(C)))+"&"+u:this.m&&xa(f,this.m,C)),Na(this.h,R),this.Ua&&Se(f,"TYPE","init"),this.P?(Se(f,"$req",u),Se(f,"SID","null"),R.T=!0,Va(R,f,null)):Va(R,f,u),this.G=2}}else this.G==3&&(o?Pu(this,o):this.i.length==0||lu(this.h)||Pu(this))};function Pu(o,u){var f;u?f=u.l:f=o.U++;const p=rn(o.I);Se(p,"SID",o.K),Se(p,"RID",f),Se(p,"AID",o.T),Ss(o,p),o.m&&o.o&&xa(p,o.m,o.o),f=new Rn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Vu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Na(o.h,f),Va(f,p,u)}function Ss(o,u){o.H&&_e(o.H,function(f,p){Se(u,p,f)}),o.l&&du({},function(f,p){Se(u,p,f)})}function Vu(o,u,f){f=Math.min(o.i.length,f);var p=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let C=-1;for(;;){const B=["count="+f];C==-1?0<f?(C=R[0].g,B.push("ofs="+C)):C=0:B.push("ofs="+C);let Ie=!0;for(let Je=0;Je<f;Je++){let ge=R[Je].g;const nt=R[Je].map;if(ge-=C,0>ge)C=Math.max(0,R[Je].g-100),Ie=!1;else try{t_(nt,B,"req"+ge+"_")}catch{p&&p(nt)}}if(Ie){p=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function ku(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ce||Xn(),pe||(ce(),pe=!0),Ct.add(u,o),o.v=0}}function La(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=_s(_(o.Fa,o),Nu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Du(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=_s(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),Ui(this),Du(this))};function Fa(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Du(o){o.g=new Rn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=rn(o.qa);Se(u,"RID","rpc"),Se(u,"SID",o.K),Se(u,"AID",o.T),Se(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Se(u,"TO",o.ja),Se(u,"TYPE","xmlhttp"),Ss(o,u),o.m&&o.o&&xa(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=xi(rn(u)),f.m=null,f.P=!0,iu(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Ui(this),La(this),ft(19))};function ji(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Ou(o,u){var f=null;if(o.g==u){ji(o),Fa(o),o.g=null;var p=2}else if(Oa(o.h,u))f=u.D,hu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Pi(),ae(p,new tu(p,f)),Bi(o)}else ku(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&i_(o,u)||p==2&&La(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:rr(o,5);break;case 4:rr(o,10);break;case 3:rr(o,6);break;default:rr(o,2)}}}function Nu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function rr(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),p=o.Xa;const R=!p;p=new nr(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Oi(p,"https"),xi(p),R?Ym(p.toString(),f):Zm(p.toString(),f)}else ft(2);o.G=0,o.l&&o.l.sa(u),xu(o),Cu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function xu(o){if(o.G=0,o.ka=[],o.l){const u=fu(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Mu(o,u,f){var p=f instanceof nr?rn(f):new nr(f);if(p.g!="")u&&(p.g=u+"."+p.g),Ni(p,p.s);else{var R=c.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var C=new nr(null);p&&Oi(C,p),u&&(C.g=u),R&&Ni(C,R),f&&(C.l=f),p=C}return f=o.D,u=o.ya,f&&u&&Se(p,f,u),Se(p,"VER",o.la),Ss(o,p),p}function Lu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ne(new Mi({eb:f})):new Ne(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fu(){}n=Fu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $i(){}$i.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){ee.call(this),this.g=new Ru(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Vr(this)}V(vt,ee),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Ma(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Qe(o),o=f);u.i.push(new $m(u.Ya++,o)),u.G==3&&Bi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Ma(this.g),delete this.g,vt.aa.N.call(this)};function Uu(o){Sa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Uu,Sa);function Bu(){Ra.call(this),this.status=1}V(Bu,Ra);function Vr(o){this.g=o}V(Vr,Fu),Vr.prototype.ua=function(){ae(this.g,"a")},Vr.prototype.ta=function(o){ae(this.g,new Uu(o))},Vr.prototype.sa=function(o){ae(this.g,new Bu)},Vr.prototype.ra=function(){ae(this.g,"b")},$i.prototype.createWebChannel=$i.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,xp=function(){return new $i},Np=function(){return Pi()},Op=er,bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vi.NO_ERROR=0,Vi.TIMEOUT=8,Vi.HTTP_ERROR=6,co=Vi,nu.COMPLETE="complete",Dp=nu,Xl.EventType=gs,gs.OPEN="a",gs.CLOSE="b",gs.ERROR="c",gs.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ns=Xl,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,kp=Ne}).apply(typeof Gi<"u"?Gi:typeof self<"u"?self:typeof window<"u"?window:{});const Mh="@firebase/firestore",Lh="4.8.0";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let as="11.10.0";/**
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
 */const yr=new cl("@firebase/firestore");function xr(){return yr.logLevel}function W(n,...e){if(yr.logLevel<=he.DEBUG){const t=e.map(hl);yr.debug(`Firestore (${as}): ${n}`,...t)}}function Tn(n,...e){if(yr.logLevel<=he.ERROR){const t=e.map(hl);yr.error(`Firestore (${as}): ${n}`,...t)}}function qn(n,...e){if(yr.logLevel<=he.WARN){const t=e.map(hl);yr.warn(`Firestore (${as}): ${n}`,...t)}}function hl(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Mp(n,r,t)}function Mp(n,e,t){let r=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Tn(r),new Error(r)}function Ee(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Mp(e,s,r)}function ie(n,e){return n}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $n{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Lp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ot.UNAUTHENTICATED)))}shutdown(){}}class YT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class ZT{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ee(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new $n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $n,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $n)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string",31837,{l:r}),new Lp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class eI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class tI{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new eI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ot.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Fh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ee(this.o===void 0,3512);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,W("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Fh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ee(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Fh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function rI(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Fp(){return new TextEncoder}/**
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
 */class fl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=rI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ue(n,e){return n<e?-1:n>e?1:0}function Sc(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ue(r,s);{const i=Fp(),a=sI(i.encode(Uh(n,t)),i.encode(Uh(e,t)));return a!==0?a:ue(r,s)}}t+=r>65535?2:1}return ue(n.length,e.length)}function Uh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function sI(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ue(n[t],e[t]);return ue(n.length,e.length)}function Zr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Bh="__name__";class jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=jt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ue(e.length,t.length)}static compareSegments(e,t){const r=jt.isNumericId(e),s=jt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?jt.extractNumericId(e).compare(jt.extractNumericId(t)):Sc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return jn.fromString(e.substring(4,e.length-2))}}class Re extends jt{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Re(t)}static emptyPath(){return new Re([])}}const iI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends jt{construct(e,t,r){return new Ye(e,t,r)}static isValidIdentifier(e){return iI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bh}static keyField(){return new Ye([Bh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(t)}static emptyPath(){return new Ye([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Re.fromString(e))}static fromName(e){return new X(Re.fromString(e).popFirst(5))}static empty(){return new X(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Re(e.slice()))}}/**
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
 */function Up(n,e,t){if(!t)throw new Q(N.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function oI(n,e,t,r){if(e===!0&&r===!0)throw new Q(N.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function jh(n){if(!X.isDocumentKey(n))throw new Q(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $h(n){if(X.isDocumentKey(n))throw new Q(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Bp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function dl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function ii(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=dl(n);throw new Q(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function je(n,e){const t={typeString:n};return e&&(t.value=e),t}function vi(n,e){if(!Bp(n))throw new Q(N.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Q(N.INVALID_ARGUMENT,t);return!0}/**
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
 */const Hh=-62135596800,qh=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*qh);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Hh)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qh}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vi(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Hh;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:je("string",Ce._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
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
 */class se{static fromTimestamp(e){return new se(e)}static min(){return new se(new Ce(0,0))}static max(){return new se(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const oi=-1;function aI(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=se.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new zn(s,X.empty(),e)}function cI(n){return new zn(n.readTime,n.key,oi)}class zn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new zn(se.min(),X.empty(),oi)}static max(){return new zn(se.max(),X.empty(),oi)}}function lI(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ue(n.largestBatchId,e.largestBatchId))}/**
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
 */const uI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function cs(n){if(n.code!==N.FAILED_PRECONDITION||n.message!==uI)throw n;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,r)=>{t(e)}))}static reject(e){return new k(((t,r)=>{r(e)}))}static waitFor(e){return new k(((t,r)=>{let s=0,i=0,a=!1;e.forEach((c=>{++s,c.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=k.resolve(!1);for(const r of e)t=t.next((s=>s?k.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new k(((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;t(e[h]).next((d=>{a[h]=d,++c,c===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new k(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function fI(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ls(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class ca{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ca.ue=-1;/**
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
 */const pl=-1;function la(n){return n==null}function Po(n){return n===0&&1/n==-1/0}function dI(n){return typeof n=="number"&&Number.isInteger(n)&&!Po(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const jp="";function pI(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=zh(e)),e=gI(n.get(t),e);return zh(e)}function gI(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case jp:t+="";break;default:t+=i}}return t}function zh(n){return n+jp+""}/**
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
 */function Wh(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function wr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $p(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Oe{constructor(e,t){this.comparator=e,this.root=t||Xe.EMPTY}insert(e,t){return new Oe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qi(this.root,e,this.comparator,!0)}}class Qi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Xe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Xe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class We{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Kh(this.data.getIterator())}getIteratorFrom(e){return new Kh(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof We)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new We(this.comparator);return t.data=e,t}}class Kh{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new kt([])}unionWith(e){let t=new We(Ye.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new kt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class Hp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Hp("Invalid base64 string: "+i):i}})(e);return new et(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const mI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(n){if(Ee(!!n,39018),typeof n=="string"){let e=0;const t=mI.exec(n);if(Ee(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Kn(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}/**
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
 */const qp="server_timestamp",zp="__type__",Wp="__previous_value__",Kp="__local_write_time__";function gl(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[zp])===null||t===void 0?void 0:t.stringValue)===qp}function ua(n){const e=n.mapValue.fields[Wp];return gl(e)?ua(e):e}function ai(n){const e=Wn(n.mapValue.fields[Kp].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class _I{constructor(e,t,r,s,i,a,c,l,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=d}}const Vo="(default)";class ci{constructor(e,t){this.projectId=e,this.database=t||Vo}static empty(){return new ci("","")}get isDefaultDatabase(){return this.database===Vo}isEqual(e){return e instanceof ci&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Gp="__type__",yI="__max__",Ji={mapValue:{}},Qp="__vector__",ko="value";function Gn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?gl(n)?4:EI(n)?9007199254740991:vI(n)?10:11:te(28295,{value:n})}function Yt(n,e){if(n===e)return!0;const t=Gn(n);if(t!==Gn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ai(n).isEqual(ai(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Wn(s.timestampValue),c=Wn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Kn(s.bytesValue).isEqual(Kn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Le(s.geoPointValue.latitude)===Le(i.geoPointValue.latitude)&&Le(s.geoPointValue.longitude)===Le(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Le(s.integerValue)===Le(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Le(s.doubleValue),c=Le(i.doubleValue);return a===c?Po(a)===Po(c):isNaN(a)&&isNaN(c)}return!1})(n,e);case 9:return Zr(n.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Wh(a)!==Wh(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Yt(a[l],c[l])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function li(n,e){return(n.values||[]).find((t=>Yt(t,e)))!==void 0}function es(n,e){if(n===e)return 0;const t=Gn(n),r=Gn(e);if(t!==r)return ue(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ue(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const c=Le(i.integerValue||i.doubleValue),l=Le(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(n,e);case 3:return Gh(n.timestampValue,e.timestampValue);case 4:return Gh(ai(n),ai(e));case 5:return Sc(n.stringValue,e.stringValue);case 6:return(function(i,a){const c=Kn(i),l=Kn(a);return c.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const d=ue(c[h],l[h]);if(d!==0)return d}return ue(c.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const c=ue(Le(i.latitude),Le(a.latitude));return c!==0?c:ue(Le(i.longitude),Le(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Qh(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var c,l,h,d;const g=i.fields||{},_=a.fields||{},I=(c=g[ko])===null||c===void 0?void 0:c.arrayValue,V=(l=_[ko])===null||l===void 0?void 0:l.arrayValue,D=ue(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:Qh(I,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Ji.mapValue&&a===Ji.mapValue)return 0;if(i===Ji.mapValue)return 1;if(a===Ji.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},d=Object.keys(h);l.sort(),d.sort();for(let g=0;g<l.length&&g<d.length;++g){const _=Sc(l[g],d[g]);if(_!==0)return _;const I=es(c[l[g]],h[d[g]]);if(I!==0)return I}return ue(l.length,d.length)})(n.mapValue,e.mapValue);default:throw te(23264,{le:t})}}function Gh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ue(n,e);const t=Wn(n),r=Wn(e),s=ue(t.seconds,r.seconds);return s!==0?s:ue(t.nanos,r.nanos)}function Qh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=es(t[s],r[s]);if(i)return i}return ue(t.length,r.length)}function ts(n){return Rc(n)}function Rc(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Wn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Kn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Rc(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Rc(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function lo(n){switch(Gn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ua(n);return e?16+lo(e):16;case 5:return 2*n.stringValue.length;case 6:return Kn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+lo(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return wr(r.fields,((i,a)=>{s+=i.length+lo(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function Cc(n){return!!n&&"integerValue"in n}function ml(n){return!!n&&"arrayValue"in n}function Jh(n){return!!n&&"nullValue"in n}function Xh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function uo(n){return!!n&&"mapValue"in n}function vI(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Gp])===null||t===void 0?void 0:t.stringValue)===Qp}function Ks(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return wr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Ks(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ks(n.arrayValue.values[t]);return e}return Object.assign({},n)}function EI(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===yI}/**
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
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!uo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ks(t)}setAll(e){let t=Ye.emptyPath(),r={},s=[];e.forEach(((a,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Ks(a):s.push(c.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());uo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];uo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){wr(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new bt(Ks(this.value))}}function Jp(n){const e=[];return wr(n.fields,((t,r)=>{const s=new Ye([t]);if(uo(r)){const i=Jp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new kt(e)}/**
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
 */class ct{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new ct(e,0,se.min(),se.min(),se.min(),bt.empty(),0)}static newFoundDocument(e,t,r,s){return new ct(e,1,t,se.min(),r,s,0)}static newNoDocument(e,t){return new ct(e,2,t,se.min(),se.min(),bt.empty(),0)}static newUnknownDocument(e,t){return new ct(e,3,t,se.min(),se.min(),bt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(se.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=se.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ct&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Do{constructor(e,t){this.position=e,this.inclusive=t}}function Yh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=es(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Yt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Oo{constructor(e,t="asc"){this.field=e,this.dir=t}}function TI(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Xp{}class ze extends Xp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new wI(e,t,r):t==="array-contains"?new SI(e,r):t==="in"?new RI(e,r):t==="not-in"?new CI(e,r):t==="array-contains-any"?new PI(e,r):new ze(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new AI(e,r):new bI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(es(t,this.value)):t!==null&&Gn(this.value)===Gn(t)&&this.matchesComparison(es(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends Xp{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Zt(e,t)}matches(e){return Yp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Yp(n){return n.op==="and"}function Zp(n){return II(n)&&Yp(n)}function II(n){for(const e of n.filters)if(e instanceof Zt)return!1;return!0}function Pc(n){if(n instanceof ze)return n.field.canonicalString()+n.op.toString()+ts(n.value);if(Zp(n))return n.filters.map((e=>Pc(e))).join(",");{const e=n.filters.map((t=>Pc(t))).join(",");return`${n.op}(${e})`}}function eg(n,e){return n instanceof ze?(function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&Yt(r.value,s.value)})(n,e):n instanceof Zt?(function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,c)=>i&&eg(a,s.filters[c])),!0):!1})(n,e):void te(19439)}function tg(n){return n instanceof ze?(function(t){return`${t.field.canonicalString()} ${t.op} ${ts(t.value)}`})(n):n instanceof Zt?(function(t){return t.op.toString()+" {"+t.getFilters().map(tg).join(" ,")+"}"})(n):"Filter"}class wI extends ze{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class AI extends ze{constructor(e,t){super(e,"in",t),this.keys=ng("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class bI extends ze{constructor(e,t){super(e,"not-in",t),this.keys=ng("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ng(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class SI extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ml(t)&&li(t.arrayValue,this.value)}}class RI extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&li(this.value.arrayValue,t)}}class CI extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(li(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!li(this.value.arrayValue,t)}}class PI extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ml(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>li(this.value.arrayValue,r)))}}/**
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
 */class VI{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Pe=null}}function ef(n,e=null,t=[],r=[],s=null,i=null,a=null){return new VI(n,e,t,r,s,i,a)}function _l(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Pc(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),la(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ts(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ts(r))).join(",")),e.Pe=t}return e.Pe}function yl(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!TI(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!eg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Zh(n.startAt,e.startAt)&&Zh(n.endAt,e.endAt)}function Vc(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class ha{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kI(n,e,t,r,s,i,a,c){return new ha(n,e,t,r,s,i,a,c)}function rg(n){return new ha(n)}function tf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function DI(n){return n.collectionGroup!==null}function Gs(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new We(Ye.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Oo(i,r))})),t.has(Ye.keyField().canonicalString())||e.Te.push(new Oo(Ye.keyField(),r))}return e.Te}function Wt(n){const e=ie(n);return e.Ie||(e.Ie=OI(e,Gs(n))),e.Ie}function OI(n,e){if(n.limitType==="F")return ef(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Oo(s.field,i)}));const t=n.endAt?new Do(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Do(n.startAt.position,n.startAt.inclusive):null;return ef(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function kc(n,e,t){return new ha(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fa(n,e){return yl(Wt(n),Wt(e))&&n.limitType===e.limitType}function sg(n){return`${_l(Wt(n))}|lt:${n.limitType}`}function Mr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>tg(s))).join(", ")}]`),la(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>ts(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>ts(s))).join(",")),`Target(${r})`})(Wt(n))}; limitType=${n.limitType})`}function da(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Gs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,c,l){const h=Yh(a,c,l);return a.inclusive?h<=0:h<0})(r.startAt,Gs(r),s)||r.endAt&&!(function(a,c,l){const h=Yh(a,c,l);return a.inclusive?h>=0:h>0})(r.endAt,Gs(r),s))})(n,e)}function NI(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ig(n){return(e,t)=>{let r=!1;for(const s of Gs(n)){const i=xI(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xI(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?es(l,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
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
 */class Ar{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){wr(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return $p(this.inner)}size(){return this.innerSize}}/**
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
 */const MI=new Oe(X.comparator);function In(){return MI}const og=new Oe(X.comparator);function xs(...n){let e=og;for(const t of n)e=e.insert(t.key,t);return e}function ag(n){let e=og;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function lr(){return Qs()}function cg(){return Qs()}function Qs(){return new Ar((n=>n.toString()),((n,e)=>n.isEqual(e)))}const LI=new Oe(X.comparator),FI=new We(X.comparator);function fe(...n){let e=FI;for(const t of n)e=e.add(t);return e}const UI=new We(ue);function BI(){return UI}/**
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
 */function vl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Po(e)?"-0":e}}function lg(n){return{integerValue:""+n}}function jI(n,e){return dI(e)?lg(e):vl(n,e)}/**
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
 */class pa{constructor(){this._=void 0}}function $I(n,e,t){return n instanceof No?(function(s,i){const a={fields:{[zp]:{stringValue:qp},[Kp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gl(i)&&(i=ua(i)),i&&(a.fields[Wp]=i),{mapValue:a}})(t,e):n instanceof ui?hg(n,e):n instanceof hi?fg(n,e):(function(s,i){const a=ug(s,i),c=nf(a)+nf(s.Ee);return Cc(a)&&Cc(s.Ee)?lg(c):vl(s.serializer,c)})(n,e)}function HI(n,e,t){return n instanceof ui?hg(n,e):n instanceof hi?fg(n,e):t}function ug(n,e){return n instanceof xo?(function(r){return Cc(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class No extends pa{}class ui extends pa{constructor(e){super(),this.elements=e}}function hg(n,e){const t=dg(e);for(const r of n.elements)t.some((s=>Yt(s,r)))||t.push(r);return{arrayValue:{values:t}}}class hi extends pa{constructor(e){super(),this.elements=e}}function fg(n,e){let t=dg(e);for(const r of n.elements)t=t.filter((s=>!Yt(s,r)));return{arrayValue:{values:t}}}class xo extends pa{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function nf(n){return Le(n.integerValue||n.doubleValue)}function dg(n){return ml(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function qI(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof ui&&s instanceof ui||r instanceof hi&&s instanceof hi?Zr(r.elements,s.elements,Yt):r instanceof xo&&s instanceof xo?Yt(r.Ee,s.Ee):r instanceof No&&s instanceof No})(n.transform,e.transform)}class zI{constructor(e,t){this.version=e,this.transformResults=t}}class mn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mn}static exists(e){return new mn(void 0,e)}static updateTime(e){return new mn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ho(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ga{}function pg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mg(n.key,mn.none()):new Ei(n.key,n.data,mn.none());{const t=n.data,r=bt.empty();let s=new We(Ye.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new br(n.key,r,new kt(s.toArray()),mn.none())}}function WI(n,e,t){n instanceof Ei?(function(s,i,a){const c=s.value.clone(),l=sf(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):n instanceof br?(function(s,i,a){if(!ho(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=sf(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(gg(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Js(n,e,t,r){return n instanceof Ei?(function(i,a,c,l){if(!ho(i.precondition,a))return c;const h=i.value.clone(),d=of(i.fieldTransforms,l,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof br?(function(i,a,c,l){if(!ho(i.precondition,a))return c;const h=of(i.fieldTransforms,l,a),d=a.data;return d.setAll(gg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,c){return ho(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c})(n,e,t)}function KI(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=ug(r.transform,s||null);i!=null&&(t===null&&(t=bt.empty()),t.set(r.field,i))}return t||null}function rf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,((i,a)=>qI(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ei extends ga{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class br extends ga{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function sf(n,e,t){const r=new Map;Ee(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,HI(a,c,t[s]))}return r}function of(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,$I(i,a,e))}return r}class mg extends ga{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class GI extends ga{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class QI{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WI(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Js(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Js(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=cg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const l=pg(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(se.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,((t,r)=>rf(t,r)))&&Zr(this.baseMutations,e.baseMutations,((t,r)=>rf(t,r)))}}class El{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Ee(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return LI})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new El(e,t,r,s)}}/**
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
 */class JI{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Be,de;function YI(n){switch(n){case N.OK:return te(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function _g(n){if(n===void 0)return Tn("GRPC error has no .code"),N.UNKNOWN;switch(n){case Be.OK:return N.OK;case Be.CANCELLED:return N.CANCELLED;case Be.UNKNOWN:return N.UNKNOWN;case Be.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Be.INTERNAL:return N.INTERNAL;case Be.UNAVAILABLE:return N.UNAVAILABLE;case Be.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Be.NOT_FOUND:return N.NOT_FOUND;case Be.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Be.ABORTED:return N.ABORTED;case Be.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Be.DATA_LOSS:return N.DATA_LOSS;default:return te(39323,{code:n})}}(de=Be||(Be={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const ZI=new jn([4294967295,4294967295],0);function af(n){const e=Fp().encode(n),t=new Vp;return t.update(e),new Uint8Array(t.digest())}function cf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new jn([t,r],0),new jn([s,i],0)]}class Tl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ms(`Invalid padding: ${t}`);if(r<0)throw new Ms(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ms(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ms(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=jn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(jn.fromNumber(r)));return s.compare(ZI)===1&&(s=new jn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=af(e),[r,s]=cf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Tl(i,s,t);return r.forEach((c=>a.insert(c))),a}insert(e){if(this.fe===0)return;const t=af(e),[r,s]=cf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ms extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ma{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Ti.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ma(se.min(),s,new Oe(ue),In(),fe())}}class Ti{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Ti(r,t,fe(),fe(),fe())}}/**
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
 */class fo{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class yg{constructor(e,t){this.targetId=e,this.De=t}}class vg{constructor(e,t,r=et.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class lf{constructor(){this.ve=0,this.Ce=uf(),this.Fe=et.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new Ti(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=uf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ee(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class ew{constructor(e){this.We=e,this.Ge=new Map,this.ze=In(),this.je=Xi(),this.Je=Xi(),this.He=new Oe(ue)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Vc(i))if(r===0){const a=new X(i.path);this.Xe(t,a,ct.newNoDocument(a,se.min()))}else Ee(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const c=this._t(e),l=c?this.ut(c,e,a):1;if(l!==0){this.rt(t);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Kn(r).toUint8Array()}catch(l){if(l instanceof Hp)return qn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Tl(a,s,i)}catch(l){return qn(l instanceof Ms?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const c=this.st(a);if(c){if(i.current&&Vc(c.target)){const l=new X(c.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,ct.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let c=!0;a.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new ma(e,t,this.He,this.ze,r);return this.ze=In(),this.je=Xi(),this.Je=Xi(),this.He=new Oe(ue),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new lf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new We(ue),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new We(ue),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||W("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new lf),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Xi(){return new Oe(X.comparator)}function uf(){return new Oe(X.comparator)}const tw={asc:"ASCENDING",desc:"DESCENDING"},nw={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rw={and:"AND",or:"OR"};class sw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Dc(n,e){return n.useProto3Json||la(e)?e:{value:e}}function Mo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Eg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function iw(n,e){return Mo(n,e.toTimestamp())}function Kt(n){return Ee(!!n,49232),se.fromTimestamp((function(t){const r=Wn(t);return new Ce(r.seconds,r.nanos)})(n))}function Il(n,e){return Oc(n,e).canonicalString()}function Oc(n,e){const t=(function(s){return new Re(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Tg(n){const e=Re.fromString(n);return Ee(Sg(e),10190,{key:e.toString()}),e}function Nc(n,e){return Il(n.databaseId,e.path)}function nc(n,e){const t=Tg(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(wg(t))}function Ig(n,e){return Il(n.databaseId,e)}function ow(n){const e=Tg(n);return e.length===4?Re.emptyPath():wg(e)}function xc(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wg(n){return Ee(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function hf(n,e,t){return{name:Nc(n,e),fields:t.value.mapValue.fields}}function aw(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Ee(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(Ee(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&(function(h){const d=h.code===void 0?N.UNKNOWN:_g(h.code);return new Q(d,h.message||"")})(a);t=new vg(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=nc(n,r.document.name),i=Kt(r.document.updateTime),a=r.document.createTime?Kt(r.document.createTime):se.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=ct.newFoundDocument(s,i,a,c),h=r.targetIds||[],d=r.removedTargetIds||[];t=new fo(h,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=nc(n,r.document),i=r.readTime?Kt(r.readTime):se.min(),a=ct.newNoDocument(s,i),c=r.removedTargetIds||[];t=new fo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=nc(n,r.document),i=r.removedTargetIds||[];t=new fo([],i,s,null)}else{if(!("filter"in e))return te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new XI(s,i),c=r.targetId;t=new yg(c,a)}}return t}function cw(n,e){let t;if(e instanceof Ei)t={update:hf(n,e.key,e.value)};else if(e instanceof mg)t={delete:Nc(n,e.key)};else if(e instanceof br)t={update:hf(n,e.key,e.data),updateMask:_w(e.fieldMask)};else{if(!(e instanceof GI))return te(16599,{Rt:e.type});t={verify:Nc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const c=a.transform;if(c instanceof No)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ui)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof hi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof xo)return{fieldPath:a.field.canonicalString(),increment:c.Ee};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:iw(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function lw(n,e){return n&&n.length>0?(Ee(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Kt(s.updateTime):Kt(i);return a.isEqual(se.min())&&(a=Kt(i)),new zI(a,s.transformResults||[])})(t,e)))):[]}function uw(n,e){return{documents:[Ig(n,e.path)]}}function hw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ig(n,s);const i=(function(h){if(h.length!==0)return bg(Zt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Lr(_.field),direction:pw(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=Dc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function fw(n){let e=ow(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Ee(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(g){const _=Ag(g);return _ instanceof Zt&&Zp(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((_=>(function(V){return new Oo(Fr(V.field),(function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(t.orderBy));let c=null;t.limit&&(c=(function(g){let _;return _=typeof g=="object"?g.value:g,la(_)?null:_})(t.limit));let l=null;t.startAt&&(l=(function(g){const _=!!g.before,I=g.values||[];return new Do(I,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const _=!g.before,I=g.values||[];return new Do(I,_)})(t.endAt)),kI(e,s,a,i,c,"F",l,h)}function dw(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ag(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Fr(t.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(t.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(t.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fr(t.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ze.create(Fr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Zt.create(t.compositeFilter.filters.map((r=>Ag(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function pw(n){return tw[n]}function gw(n){return nw[n]}function mw(n){return rw[n]}function Lr(n){return{fieldPath:n.canonicalString()}}function Fr(n){return Ye.fromServerFormat(n.fieldPath)}function bg(n){return n instanceof ze?(function(t){if(t.op==="=="){if(Xh(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NAN"}};if(Jh(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Xh(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NOT_NAN"}};if(Jh(t.value))return{unaryFilter:{field:Lr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Lr(t.field),op:gw(t.op),value:t.value}}})(n):n instanceof Zt?(function(t){const r=t.getFilters().map((s=>bg(s)));return r.length===1?r[0]:{compositeFilter:{op:mw(t.op),filters:r}}})(n):te(54877,{filter:n})}function _w(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Sg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Ln{constructor(e,t,r,s,i=se.min(),a=se.min(),c=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class yw{constructor(e){this.gt=e}}function vw(n){const e=fw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class Ew{constructor(){this.Dn=new Tw}addToCollectionParentIndex(e,t){return this.Dn.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(zn.min())}updateCollectionGroup(e,t,r){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class Tw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new We(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new We(Re.comparator)).toArray()}}/**
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
 */const ff={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rg=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Rg,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
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
 */class ns{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ns(0)}static ur(){return new ns(-1)}}/**
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
 */const df="LruGarbageCollector",Iw=1048576;function pf([n,e],[t,r]){const s=ue(n,t);return s===0?ue(e,r):s}class ww{constructor(e){this.Tr=e,this.buffer=new We(pf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();pf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Aw{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){W(df,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ls(t)?W(df,"Ignoring IndexedDB error during garbage collection: ",t):await cs(t)}await this.Rr(3e5)}))}}class bw{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(ca.ue);const r=new ww(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(ff)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ff):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,c,l,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,c=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),xr()<=he.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-d}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Sw(n,e){return new bw(n,e)}/**
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
 */class Rw{constructor(){this.changes=new Ar((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ct.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?k.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Cw{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Pw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Js(r.mutation,s,kt.empty(),Ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=lr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=xs();return i.forEach(((c,l)=>{a=a.insert(c,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=lr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,c)=>{t.set(a,c)}))}))}computeViews(e,t,r,s){let i=In();const a=Qs(),c=(function(){return Qs()})();return t.forEach(((l,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof br)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Js(d.mutation,h,d.mutation.getFieldMask(),Ce.now())):a.set(h.key,kt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var g;return c.set(h,new Cw(d,(g=a.get(h))!==null&&g!==void 0?g:null))})),c)))}recalculateAndSaveOverlays(e,t){const r=Qs();let s=new Oe(((a,c)=>a-c)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const c of a)c.keys().forEach((l=>{const h=t.get(l);if(h===null)return;let d=r.get(l)||kt.empty();d=c.applyToLocalView(h,d),r.set(l,d);const g=(s.get(c.batchId)||fe()).add(l);s=s.insert(c.batchId,g)}))})).next((()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,d=l.value,g=cg();d.forEach((_=>{if(!i.has(_)){const I=pg(t.get(_),r.get(_));I!==null&&g.set(_,I),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return k.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):DI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):k.resolve(lr());let c=oi,l=i;return a.next((h=>k.forEach(h,((d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?k.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{l=l.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,fe()))).next((d=>({batchId:c,changes:ag(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=xs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=xs();return this.indexManager.getCollectionParents(e,i).next((c=>k.forEach(c,(l=>{const h=(function(g,_){return new ha(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((g,_)=>{a=a.insert(g,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,ct.newInvalidDocument(d)))}));let c=xs();return a.forEach(((l,h)=>{const d=i.get(l);d!==void 0&&Js(d.mutation,h,kt.empty(),Ce.now()),da(t,h)&&(c=c.insert(l,h))})),c}))}}/**
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
 */class Vw{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return k.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Kt(s.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:vw(s.bundledQuery),readTime:Kt(s.readTime)}})(t)),k.resolve()}}/**
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
 */class kw{constructor(){this.overlays=new Oe(X.comparator),this.kr=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const r=lr();return k.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),k.resolve()}getOverlaysForCollection(e,t,r){const s=lr(),i=t.length+1,a=new X(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Oe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=lr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const c=lr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,d)=>c.set(h,d))),!(c.size()>=s)););return k.resolve(c)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new JI(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Dw{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
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
 */class wl{constructor(){this.qr=new We(Ke.Qr),this.$r=new We(Ke.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ke(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ke(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Re([])),r=new Ke(t,e),s=new Ke(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Re([])),r=new Ke(t,e),s=new Ke(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ke(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ue(e.Hr,t.Hr)}static Ur(e,t){return ue(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
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
 */class Ow{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new We(Ke.Qr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new QI(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Yr=this.Yr.add(new Ke(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,t){return k.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?pl:this.er-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ke(t,0),s=new Ke(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const c=this.Zr(a.Hr);i.push(c)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new We(ue);return t.forEach((s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(c=>{r=r.add(c.Hr)}))})),k.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new X(i),0);let c=new We(ue);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),a),k.resolve(this.ei(c))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Ee(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return k.forEach(t.mutations,(s=>{const i=new Ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ke(t,0),s=this.Yr.firstAfterOrEqual(r);return k.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Nw{constructor(e){this.ni=e,this.docs=(function(){return new Oe(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return k.resolve(r?r.document.mutableCopy():ct.newInvalidDocument(t))}getEntries(e,t){let r=In();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ct.newInvalidDocument(s))})),k.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=In();const a=t.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||lI(cI(d),r)<=0||(s.has(d.key)||da(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ri(e,t){return k.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new xw(this)}getSize(e){return k.resolve(this.size)}}class xw extends Rw{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),k.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class Mw{constructor(e){this.persistence=e,this.ii=new Ar((t=>_l(t)),yl),this.lastRemoteSnapshotVersion=se.min(),this.highestTargetId=0,this.si=0,this.oi=new wl,this.targetCount=0,this._i=ns.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),k.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ns(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.hr(t),k.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),k.waitFor(i).next((()=>s))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return k.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),k.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),k.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return k.resolve(r)}containsKey(e,t){return k.resolve(this.oi.containsKey(t))}}/**
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
 */class Cg{constructor(e,t){this.ai={},this.overlays={},this.ui=new ca(0),this.ci=!1,this.ci=!0,this.li=new Dw,this.referenceDelegate=e(this),this.hi=new Mw(this),this.indexManager=new Ew,this.remoteDocumentCache=(function(s){return new Nw(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new yw(t),this.Ti=new Vw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new kw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Ow(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){W("MemoryPersistence","Starting transaction:",e);const s=new Lw(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return k.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class Lw extends hI{constructor(e){super(),this.currentSequenceNumber=e}}class Al{constructor(e){this.persistence=e,this.Ai=new wl,this.Ri=null}static Vi(e){return new Al(e)}get mi(){if(this.Ri)return this.Ri;throw te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),k.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),k.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,se.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return k.or([()=>k.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Lo{constructor(e,t){this.persistence=e,this.gi=new Ar((r=>pI(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Sw(this,t)}static Vi(e,t){return new Lo(e,t)}Ii(){}di(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return k.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?k.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((c=>{c||(r++,i.removeEntry(a,se.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),k.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=lo(e.data.value)),t}Sr(e,t,r){return k.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class bl{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bl(e,t.fromCache,r,s)}}/**
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
 */class Fw{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Uw{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return OE()?8:fI(ut())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new Fw;return this.ws(e,t,a).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,t,a,c.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(xr()<=he.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",Mr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),k.resolve()):(xr()<=he.DEBUG&&W("QueryEngine","Query:",Mr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(xr()<=he.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",Mr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Wt(t))):k.resolve())}ps(e,t){if(tf(t))return k.resolve(null);let r=Wt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=kc(t,null,"F"),r=Wt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(t,c);return this.Ds(t,h,a,l.readTime)?this.ps(e,kc(t,null,"F")):this.vs(e,h,t,l)}))))})))))}ys(e,t,r,s){return tf(t)||s.isEqual(se.min())?k.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?k.resolve(null):(xr()<=he.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mr(t)),this.vs(e,a,t,aI(s,oi)).next((c=>c)))}))}bs(e,t){let r=new We(ig(e));return t.forEach(((s,i)=>{da(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return xr()<=he.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Mr(t)),this.gs.getDocumentsMatchingQuery(e,t,zn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Sl="LocalStore",Bw=3e8;class jw{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Oe(ue),this.Ms=new Ar((i=>_l(i)),yl),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Pw(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function $w(n,e,t,r){return new jw(n,e,t,r)}async function Pg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],c=[];let l=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){c.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:c})))}))}))}function Hw(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,d){const g=h.batch,_=g.keys();let I=k.resolve();return _.forEach((V=>{I=I.next((()=>d.getEntry(l,V))).next((D=>{const F=h.docVersions.get(V);Ee(F!==null,48541),D.version.compareTo(F)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))}))})),I.next((()=>c.mutationQueue.removeMutationBatch(l,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=fe();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Vg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function qw(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const c=[];e.targetChanges.forEach(((d,g)=>{const _=s.get(g);if(!_)return;c.push(t.hi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,g))));let I=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?I=I.withResumeToken(et.EMPTY_BYTE_STRING,se.min()).withLastLimboFreeSnapshotVersion(se.min()):d.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(d.resumeToken,r)),s=s.insert(g,I),(function(D,F,G){return D.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=Bw?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(_,I,d)&&c.push(t.hi.updateTargetData(i,I))}));let l=In(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push(zw(i,a,e.documentUpdates).next((d=>{l=d.Ls,h=d.ks}))),!r.isEqual(se.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return k.waitFor(c).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function zw(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=In();return t.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(se.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):W(Sl,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function Ww(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=pl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Kw(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,k.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Ln(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Mc(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!ls(a))throw a;W(Sl,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function gf(n,e,t){const r=ie(n);let s=se.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,h,d){const g=ie(l),_=g.Ms.get(d);return _!==void 0?k.resolve(g.Fs.get(_)):g.hi.getTargetData(h,d)})(r,a,Wt(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:se.min(),t?i:fe()))).next((c=>(Gw(r,NI(e),c),{documents:c,qs:i})))))}function Gw(n,e,t){let r=n.xs.get(e)||se.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class mf{constructor(){this.activeTargetIds=BI()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qw{constructor(){this.Fo=new mf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new mf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Jw{xo(e){}shutdown(){}}/**
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
 */const _f="ConnectivityMonitor";class yf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){W(_f,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){W(_f,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yi=null;function Lc(){return Yi===null?Yi=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yi++,"0x"+Yi.toString(16)}/**
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
 */const rc="RestConnection",Xw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Yw{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Vo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Lc(),c=this.Go(e,t.toUriEncodedString());W(rc,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),d=is(h);return this.jo(e,c,l,r,d).then((g=>(W(rc,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw qn(rc,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+as})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=Xw[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class Zw{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const st="WebChannelConnection";class eA extends Yw{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Lc();return new Promise(((c,l)=>{const h=new kp;h.setWithCredentials(!0),h.listenOnce(Dp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case co.NO_ERROR:const g=h.getResponseJson();W(st,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case co.TIMEOUT:W(st,`RPC '${e}' ${a} timed out`),l(new Q(N.DEADLINE_EXCEEDED,"Request time out"));break;case co.HTTP_ERROR:const _=h.getStatus();if(W(st,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const V=I==null?void 0:I.error;if(V&&V.status&&V.message){const D=(function(G){const $=G.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf($)>=0?$:N.UNKNOWN})(V.status);l(new Q(D,V.message))}else l(new Q(N.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Q(N.UNAVAILABLE,"Connection failed."));break;default:te(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{W(st,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);W(st,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Lc(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=xp(),c=Np(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const d=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${d}`,l);const g=a.createWebChannel(d,l);this.T_(g);let _=!1,I=!1;const V=new Zw({Ho:F=>{I?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(_||(W(st,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),W(st,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},Yo:()=>g.close()}),D=(F,G,$)=>{F.listen(G,(K=>{try{$(K)}catch(z){setTimeout((()=>{throw z}),0)}}))};return D(g,Ns.EventType.OPEN,(()=>{I||(W(st,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),D(g,Ns.EventType.CLOSE,(()=>{I||(I=!0,W(st,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(g))})),D(g,Ns.EventType.ERROR,(F=>{I||(I=!0,qn(st,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),V.__(new Q(N.UNAVAILABLE,"The operation could not be completed")))})),D(g,Ns.EventType.MESSAGE,(F=>{var G;if(!I){const $=F.data[0];Ee(!!$,16349);const K=$,z=(K==null?void 0:K.error)||((G=K[0])===null||G===void 0?void 0:G.error);if(z){W(st,`RPC '${e}' stream ${s} received error:`,z);const oe=z.status;let _e=(function(y){const T=Be[y];if(T!==void 0)return _g(T)})(oe),w=z.message;_e===void 0&&(_e=N.INTERNAL,w="Unknown error status: "+oe+" with message "+z.message),I=!0,V.__(new Q(_e,w)),g.close()}else W(st,`RPC '${e}' stream ${s} received:`,$),V.a_($)}})),D(c,Op.STAT_EVENT,(F=>{F.stat===bc.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===bc.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function sc(){return typeof document<"u"?document:null}/**
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
 */function _a(n){return new sw(n,!0)}/**
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
 */class kg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const vf="PersistentStream";class Dg{constructor(e,t,r,s,i,a,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new kg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new Q(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return W(vf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(W(vf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class tA extends Dg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=aw(this.serializer,e),r=(function(i){if(!("targetChange"in i))return se.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?se.min():a.readTime?Kt(a.readTime):se.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=xc(this.serializer),t.addTarget=(function(i,a){let c;const l=a.target;if(c=Vc(l)?{documents:uw(i,l)}:{query:hw(i,l).Vt},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=Eg(i,a.resumeToken);const h=Dc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(se.min())>0){c.readTime=Mo(i,a.snapshotVersion.toTimestamp());const h=Dc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=dw(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=xc(this.serializer),t.removeTarget=e,this.k_(t)}}class nA extends Dg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ee(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ee(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=lw(e.writeResults,e.commitTime),r=Kt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=xc(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>cw(this.serializer,r)))};this.k_(t)}}/**
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
 */class rA{}class sA extends rA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Oc(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(N.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Jo(e,Oc(t,r),s,a,c,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(N.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class iA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Tn(t),this._a=!1):W("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const vr="RemoteStore";class oA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Sr(this)&&(W(vr,"Restarting streams for network reachability change."),await(async function(l){const h=ie(l);h.Ia.add(4),await Ii(h),h.Aa.set("Unknown"),h.Ia.delete(4),await ya(h)})(this))}))})),this.Aa=new iA(r,s)}}async function ya(n){if(Sr(n))for(const e of n.da)await e(!0)}async function Ii(n){for(const e of n.da)await e(!1)}function Og(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Vl(t)?Pl(t):us(t).x_()&&Cl(t,e))}function Rl(n,e){const t=ie(n),r=us(t);t.Ta.delete(e),r.x_()&&Ng(t,e),t.Ta.size===0&&(r.x_()?r.B_():Sr(t)&&t.Aa.set("Unknown"))}function Cl(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(se.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}us(n).H_(e)}function Ng(n,e){n.Ra.$e(e),us(n).Y_(e)}function Pl(n){n.Ra=new ew({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),us(n).start(),n.Aa.aa()}function Vl(n){return Sr(n)&&!us(n).M_()&&n.Ta.size>0}function Sr(n){return ie(n).Ia.size===0}function xg(n){n.Ra=void 0}async function aA(n){n.Aa.set("Online")}async function cA(n){n.Ta.forEach(((e,t)=>{Cl(n,e)}))}async function lA(n,e){xg(n),Vl(n)?(n.Aa.la(e),Pl(n)):n.Aa.set("Unknown")}async function uA(n,e,t){if(n.Aa.set("Online"),e instanceof vg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ta.delete(c),s.Ra.removeTarget(c))})(n,e)}catch(r){W(vr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Fo(n,r)}else if(e instanceof fo?n.Ra.Ye(e):e instanceof yg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(se.min()))try{const r=await Vg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const c=i.Ra.Pt(a);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(l.resumeToken,a))}})),c.targetMismatches.forEach(((l,h)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),Ng(i,l);const g=new Ln(d.target,l,h,d.sequenceNumber);Cl(i,g)})),i.remoteSyncer.applyRemoteEvent(c)})(n,t)}catch(r){W(vr,"Failed to raise snapshot:",r),await Fo(n,r)}}async function Fo(n,e,t){if(!ls(e))throw e;n.Ia.add(1),await Ii(n),n.Aa.set("Offline"),t||(t=()=>Vg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{W(vr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await ya(n)}))}function Mg(n,e){return e().catch((t=>Fo(n,t,e)))}async function va(n){const e=ie(n),t=Qn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:pl;for(;hA(e);)try{const s=await Ww(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,fA(e,s)}catch(s){await Fo(e,s)}Lg(e)&&Fg(e)}function hA(n){return Sr(n)&&n.Pa.length<10}function fA(n,e){n.Pa.push(e);const t=Qn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Lg(n){return Sr(n)&&!Qn(n).M_()&&n.Pa.length>0}function Fg(n){Qn(n).start()}async function dA(n){Qn(n).na()}async function pA(n){const e=Qn(n);for(const t of n.Pa)e.X_(t.mutations)}async function gA(n,e,t){const r=n.Pa.shift(),s=El.from(r,e,t);await Mg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await va(n)}async function mA(n,e){e&&Qn(n).Z_&&await(async function(r,s){if((function(a){return YI(a)&&a!==N.ABORTED})(s.code)){const i=r.Pa.shift();Qn(r).N_(),await Mg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await va(r)}})(n,e),Lg(n)&&Fg(n)}async function Ef(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),W(vr,"RemoteStore received new credentials");const r=Sr(t);t.Ia.add(3),await Ii(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await ya(t)}async function _A(n,e){const t=ie(n);e?(t.Ia.delete(2),await ya(t)):e||(t.Ia.add(2),await Ii(t),t.Aa.set("Unknown"))}function us(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new tA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:aA.bind(null,n),e_:cA.bind(null,n),n_:lA.bind(null,n),J_:uA.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Vl(n)?Pl(n):n.Aa.set("Unknown")):(await n.Va.stop(),xg(n))}))),n.Va}function Qn(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new nA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:dA.bind(null,n),n_:mA.bind(null,n),ea:pA.bind(null,n),ta:gA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await va(n)):(await n.ma.stop(),n.Pa.length>0&&(W(vr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class kl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new kl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Dl(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),ls(n))return new Q(N.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class qr{static emptySet(e){return new qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=xs(),this.sortedSet=new Oe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Tf{constructor(){this.fa=new Oe(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class rs{constructor(e,t,r,s,i,a,c,l,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((c=>{a.push({type:0,doc:c})})),new rs(e,t,qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class yA{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class vA{constructor(){this.queries=If(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=If(),i.forEach(((a,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new Q(N.ABORTED,"Firestore shutting down"))}}function If(){return new Ar((n=>sg(n)),fa)}async function EA(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new yA,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=Dl(a,`Initialization of query '${Mr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Ol(t)}async function TA(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function IA(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.wa)c.Ca(s)&&(r=!0);a.ya=s}}r&&Ol(t)}function wA(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Ol(n){n.Da.forEach((e=>{e.next()}))}var Fc,wf;(wf=Fc||(Fc={})).Fa="default",wf.Cache="cache";class AA{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Fc.Cache}}/**
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
 */class Ug{constructor(e){this.key=e}}class Bg{constructor(e){this.key=e}}class bA{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=ig(e),this.eu=new qr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Tf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const _=s.get(d),I=da(this.query,g)?g:null,V=!!_&&this.mutatedKeys.has(_.key),D=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let F=!1;_&&I?_.data.isEqual(I.data)?V!==D&&(r.track({type:3,doc:I}),F=!0):this.iu(_,I)||(r.track({type:2,doc:I}),F=!0,(l&&this.Xa(I,l)>0||h&&this.Xa(I,h)<0)&&(c=!0)):!_&&I?(r.track({type:0,doc:I}),F=!0):_&&!I&&(r.track({type:1,doc:_}),F=!0,(l||h)&&(c=!0)),F&&(I?(a=a.add(I),i=D?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:c,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,g)=>(function(I,V){const D=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{At:F})}};return D(I)-D(V)})(d.type,g.type)||this.Xa(d.doc,g.doc))),this.su(r),s=s!=null&&s;const c=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,a.length!==0||h?{snapshot:new rs(this.query,e.eu,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Tf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Bg(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Ug(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return rs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Nl="SyncEngine";class SA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class RA{constructor(e){this.key=e,this.lu=!1}}class CA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ar((c=>sg(c)),fa),this.Tu=new Map,this.Iu=new Set,this.du=new Oe(X.comparator),this.Eu=new Map,this.Au=new wl,this.Ru={},this.Vu=new Map,this.mu=ns.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function PA(n,e,t=!0){const r=Wg(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await jg(r,e,t,!0),s}async function VA(n,e){const t=Wg(n);await jg(t,e,!0,!1)}async function jg(n,e,t,r){const s=await Kw(n.localStore,Wt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await kA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Og(n.remoteStore,s),c}async function kA(n,e,t,r,s){n.gu=(g,_,I)=>(async function(D,F,G,$){let K=F.view.nu(G);K.Ds&&(K=await gf(D.localStore,F.query,!1).then((({documents:w})=>F.view.nu(w,K))));const z=$&&$.targetChanges.get(F.targetId),oe=$&&$.targetMismatches.get(F.targetId)!=null,_e=F.view.applyChanges(K,D.isPrimaryClient,z,oe);return bf(D,F.targetId,_e._u),_e.snapshot})(n,g,_,I);const i=await gf(n.localStore,e,!0),a=new bA(e,i.qs),c=a.nu(i.documents),l=Ti.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(c,n.isPrimaryClient,l);bf(n,t,h._u);const d=new SA(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function DA(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!fa(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Mc(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Rl(r.remoteStore,s.targetId),Uc(r,s.targetId)})).catch(cs)):(Uc(r,s.targetId),await Mc(r.localStore,s.targetId,!0))}async function OA(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Rl(t.remoteStore,r.targetId))}async function NA(n,e,t){const r=jA(n);try{const s=await(function(a,c){const l=ie(a),h=Ce.now(),d=c.reduce(((I,V)=>I.add(V.key)),fe());let g,_;return l.persistence.runTransaction("Locally write mutations","readwrite",(I=>{let V=In(),D=fe();return l.Os.getEntries(I,d).next((F=>{V=F,V.forEach(((G,$)=>{$.isValidDocument()||(D=D.add(G))}))})).next((()=>l.localDocuments.getOverlayedDocuments(I,V))).next((F=>{g=F;const G=[];for(const $ of c){const K=KI($,g.get($.key).overlayedDocument);K!=null&&G.push(new br($.key,K,Jp(K.value.mapValue),mn.exists(!0)))}return l.mutationQueue.addMutationBatch(I,h,G,c)})).next((F=>{_=F;const G=F.applyToLocalDocumentSet(g,D);return l.documentOverlayCache.saveOverlays(I,F.batchId,G)}))})).then((()=>({batchId:_.batchId,changes:ag(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,c,l){let h=a.Ru[a.currentUser.toKey()];h||(h=new Oe(ue)),h=h.insert(c,l),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await wi(r,s.changes),await va(r.remoteStore)}catch(s){const i=Dl(s,"Failed to persist write");t.reject(i)}}async function $g(n,e){const t=ie(n);try{const r=await qw(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Ee(a.lu,14607):s.removedDocuments.size>0&&(Ee(a.lu,42227),a.lu=!1))})),await wi(t,r,e)}catch(r){await cs(r)}}function Af(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(a,c){const l=ie(a);l.onlineState=c;let h=!1;l.queries.forEach(((d,g)=>{for(const _ of g.wa)_.va(c)&&(h=!0)})),h&&Ol(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xA(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Oe(X.comparator);a=a.insert(i,ct.newNoDocument(i,se.min()));const c=fe().add(i),l=new ma(se.min(),new Map,new Oe(ue),a,c);await $g(r,l),r.du=r.du.remove(i),r.Eu.delete(e),xl(r)}else await Mc(r.localStore,e,!1).then((()=>Uc(r,e,t))).catch(cs)}async function MA(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await Hw(t.localStore,e);qg(t,r,null),Hg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await wi(t,s)}catch(s){await cs(s)}}async function LA(n,e,t){const r=ie(n);try{const s=await(function(a,c){const l=ie(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return l.mutationQueue.lookupMutationBatch(h,c).next((g=>(Ee(g!==null,37113),d=g.keys(),l.mutationQueue.removeMutationBatch(h,g)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>l.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);qg(r,e,t),Hg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await wi(r,s)}catch(s){await cs(s)}}function Hg(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function qg(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Uc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||zg(n,r)}))}function zg(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Rl(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),xl(n))}function bf(n,e,t){for(const r of t)r instanceof Ug?(n.Au.addReference(r.key,e),FA(n,r)):r instanceof Bg?(W(Nl,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||zg(n,r.key)):te(19791,{yu:r})}function FA(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(W(Nl,"New document in limbo: "+t),n.Iu.add(r),xl(n))}function xl(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Re.fromString(e)),r=n.mu.next();n.Eu.set(r,new RA(t)),n.du=n.du.insert(t,r),Og(n.remoteStore,new Ln(Wt(rg(t.path)),r,"TargetPurposeLimboResolution",ca.ue))}}async function wi(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{a.push(r.gu(l,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=bl.Es(l.targetId,h);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,h){const d=ie(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>k.forEach(h,(_=>k.forEach(_.Is,(I=>d.persistence.referenceDelegate.addReference(g,_.targetId,I))).next((()=>k.forEach(_.ds,(I=>d.persistence.referenceDelegate.removeReference(g,_.targetId,I)))))))))}catch(g){if(!ls(g))throw g;W(Sl,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const I=d.Fs.get(_),V=I.snapshotVersion,D=I.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,D)}}})(r.localStore,i))}async function UA(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){W(Nl,"User change. New user:",e.toKey());const r=await Pg(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new Q(N.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wi(t,r.Bs)}}function BA(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const c=t.Pu.get(a);s=s.unionWith(c.view.tu)}return s}}function Wg(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$g.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=BA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xA.bind(null,e),e.hu.J_=IA.bind(null,e.eventManager),e.hu.pu=wA.bind(null,e.eventManager),e}function jA(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=MA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=LA.bind(null,e),e}class Uo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return $w(this.persistence,new Uw,e.initialUser,this.serializer)}Du(e){return new Cg(Al.Vi,this.serializer)}bu(e){return new Qw}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Uo.provider={build:()=>new Uo};class $A extends Uo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ee(this.persistence.referenceDelegate instanceof Lo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Aw(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new Cg((r=>Lo.Vi(r,t)),this.serializer)}}class Bc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Af(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UA.bind(null,this.syncEngine),await _A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new vA})()}createDatastore(e){const t=_a(e.databaseInfo.databaseId),r=(function(i){return new eA(i)})(e.databaseInfo);return(function(i,a,c,l){return new sA(i,a,c,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,c){return new oA(r,s,i,a,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>Af(this.syncEngine,t,0)),(function(){return yf.C()?new yf:new Jw})())}createSyncEngine(e,t){return(function(s,i,a,c,l,h,d){const g=new CA(s,i,a,c,l,h);return d&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);W(vr,"RemoteStore shutting down."),i.Ia.add(5),await Ii(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Bc.provider={build:()=>new Bc};/**
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
 */class HA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Jn="FirestoreClient";class qA{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=fl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{W(Jn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(W(Jn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Dl(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ic(n,e){n.asyncQueue.verifyOperationInProgress(),W(Jn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Pg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{qn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{W("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{qn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Sf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await zA(n);W(Jn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Ef(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Ef(e.remoteStore,s))),n._onlineComponents=e}async function zA(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){W(Jn,"Using user provided OfflineComponentProvider");try{await ic(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===N.FAILED_PRECONDITION||s.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;qn("Error using user provided cache. Falling back to memory cache: "+t),await ic(n,new Uo)}}else W(Jn,"Using default OfflineComponentProvider"),await ic(n,new $A(void 0));return n._offlineComponents}async function Kg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(W(Jn,"Using user provided OnlineComponentProvider"),await Sf(n,n._uninitializedComponentsProvider._online)):(W(Jn,"Using default OnlineComponentProvider"),await Sf(n,new Bc))),n._onlineComponents}function WA(n){return Kg(n).then((e=>e.syncEngine))}async function KA(n){const e=await Kg(n),t=e.eventManager;return t.onListen=PA.bind(null,e.syncEngine),t.onUnlisten=DA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=VA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=OA.bind(null,e.syncEngine),t}function GA(n,e,t={}){const r=new $n;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,c,l,h){const d=new HA({next:_=>{d.Ou(),a.enqueueAndForget((()=>TA(i,g))),_.fromCache&&l.source==="server"?h.reject(new Q(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(_)},error:_=>h.reject(_)}),g=new AA(c,d,{includeMetadataChanges:!0,ka:!0});return EA(i,g)})(await KA(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function Gg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Rf=new Map;/**
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
 */const Qg="firestore.googleapis.com",Cf=!0;class Pf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Qg,this.ssl=Cf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Cf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Iw)throw new Q(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(N.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new XT;switch(r.type){case"firstParty":return new tI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Rf.get(t);r&&(W("ComponentProvider","Removing Datastore"),Rf.delete(t),r.terminate())})(this),Promise.resolve()}}function QA(n,e,t,r={}){var s;n=ii(n,Ea);const i=is(e),a=n._getSettings(),c=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(Ip(`https://${l}`),wp("Firestore",!0)),a.host!==Qg&&a.host!==l&&qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!mr(h,c)&&(n._setSettings(h),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=ot.MOCK_USER;else{d=AE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new Q(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new ot(_)}n._authCredentials=new YT(new Lp(d,g))}}/**
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
 */class Ta{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ta(this.firestore,e,this._query)}}class Ge{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(vi(t,Ge._jsonSchema))return new Ge(e,r||null,new X(Re.fromString(t.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:je("string",Ge._jsonSchemaVersion),referencePath:je("string")};class Hn extends Ta{constructor(e,t,r){super(e,t,rg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new X(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function Zi(n,e,...t){if(n=Rt(n),Up("collection","path",e),n instanceof Ea){const r=Re.fromString(e,...t);return $h(r),new Hn(n,null,r)}{if(!(n instanceof Ge||n instanceof Hn))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return $h(r),new Hn(n.firestore,null,r)}}function JA(n,e,...t){if(n=Rt(n),arguments.length===1&&(e=fl.newId()),Up("doc","path",e),n instanceof Ea){const r=Re.fromString(e,...t);return jh(r),new Ge(n,null,new X(r))}{if(!(n instanceof Ge||n instanceof Hn))throw new Q(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return jh(r),new Ge(n.firestore,n instanceof Hn?n.converter:null,new X(r))}}/**
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
 */const Vf="AsyncQueue";class kf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new kg(this,"async_queue_retry"),this.oc=()=>{const r=sc();r&&W(Vf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=sc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=sc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new $n;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ls(e))throw e;W(Vf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Tn("INTERNAL UNHANDLED ERROR: ",Df(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=kl.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&te(47125,{hc:Df(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Df(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ml extends Ea{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new kf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kf(e),this._firestoreClient=void 0,await e}}}function XA(n,e){const t=typeof n=="object"?n:Rp(),r=typeof n=="string"?n:Vo,s=ul(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=IE("firestore");i&&QA(s,...i)}return s}function Jg(n){if(n._terminated)throw new Q(N.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||YA(n),n._firestoreClient}function YA(n){var e,t,r;const s=n._freezeSettings(),i=(function(c,l,h,d){return new _I(c,l,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Gg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new qA(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class St{constructor(e){this._byteString=e}static fromBase64String(e){try{return new St(et.fromBase64String(e))}catch(t){throw new Q(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new St(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:St._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vi(e,St._jsonSchema))return St.fromBase64String(e.bytes)}}St._jsonSchemaVersion="firestore/bytes/1.0",St._jsonSchema={type:je("string",St._jsonSchemaVersion),bytes:je("string")};/**
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
 */class Ll{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Xg{constructor(e){this._methodName=e}}/**
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
 */class Gt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Gt._jsonSchemaVersion}}static fromJSON(e){if(vi(e,Gt._jsonSchema))return new Gt(e.latitude,e.longitude)}}Gt._jsonSchemaVersion="firestore/geoPoint/1.0",Gt._jsonSchema={type:je("string",Gt._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Qt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Qt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vi(e,Qt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Qt(e.vectorValues);throw new Q(N.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Qt._jsonSchemaVersion="firestore/vectorValue/1.0",Qt._jsonSchema={type:je("string",Qt._jsonSchemaVersion),vectorValues:je("object")};/**
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
 */const ZA=/^__.*__$/;class eb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ei(e,this.data,t,this.fieldTransforms)}}function Yg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ec:n})}}class Fl{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Fl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Bo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Yg(this.Ec)&&ZA.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class tb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||_a(e)}Dc(e,t,r,s=!1){return new Fl({Ec:e,methodName:t,bc:r,path:Ye.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nb(n){const e=n._freezeSettings(),t=_a(n._databaseId);return new tb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function rb(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);nm("Data must be an object, but it was:",a,r);const c=em(r,a);let l,h;if(i.merge)l=new kt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const _=sb(e,g,t);if(!a.contains(_))throw new Q(N.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);ob(d,_)||d.push(_)}l=new kt(d),h=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,h=a.fieldTransforms;return new eb(new bt(c),l,h)}function Zg(n,e){if(tm(n=Rt(n)))return nm("Unsupported field value:",e,n),em(n,e);if(n instanceof Xg)return(function(r,s){if(!Yg(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const c of r){let l=Zg(c,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=Rt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return jI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:Mo(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(s.serializer,i)}}if(r instanceof Gt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof St)return{bytesValue:Eg(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Il(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Qt)return(function(a,c){return{mapValue:{fields:{[Gp]:{stringValue:Qp},[ko]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return vl(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${dl(r)}`)})(n,e)}function em(n,e){const t={};return $p(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wr(n,((r,s)=>{const i=Zg(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function tm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof Gt||n instanceof St||n instanceof Ge||n instanceof Xg||n instanceof Qt)}function nm(n,e,t){if(!tm(t)||!Bp(t)){const r=dl(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function sb(n,e,t){if((e=Rt(e))instanceof Ll)return e._internalPath;if(typeof e=="string")return rm(n,e);throw Bo("Field path arguments must be of type string or ",n,!1,void 0,t)}const ib=new RegExp("[~\\*/\\[\\]]");function rm(n,e,t){if(e.search(ib)>=0)throw Bo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ll(...e.split("."))._internalPath}catch{throw Bo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Q(N.INVALID_ARGUMENT,c+n+l)}function ob(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class sm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ab(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(im("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class ab extends sm{data(){return super.data()}}function im(n,e){return typeof e=="string"?rm(n,e):e instanceof Ll?e._internalPath:e._delegate._internalPath}/**
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
 */function cb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new Q(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class lb{convertValue(e,t="none"){switch(Gn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Kn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return wr(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ko].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Le(a.doubleValue)));return new Qt(i)}convertGeoPoint(e){return new Gt(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ua(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ai(e));default:return null}}convertTimestamp(e){const t=Wn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);Ee(Sg(r),9688,{name:e});const s=new ci(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||Tn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ub(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class eo{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zr extends sm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(im("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}zr._jsonSchemaVersion="firestore/documentSnapshot/1.0",zr._jsonSchema={type:je("string",zr._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class po extends zr{data(e={}){return super.data(e)}}class Wr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new eo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new po(this._firestore,this._userDataWriter,r.key,r,new eo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((c=>{const l=new po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new eo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new po(s._firestore,s._userDataWriter,c.doc.key,c.doc,new eo(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:hb(c.type),doc:l,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(N.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Wr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}Wr._jsonSchemaVersion="firestore/querySnapshot/1.0",Wr._jsonSchema={type:je("string",Wr._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class fb extends lb{constructor(e){super(),this.firestore=e}convertBytes(e){return new St(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}function to(n){n=ii(n,Ta);const e=ii(n.firestore,Ml),t=Jg(e),r=new fb(e);return cb(n._query),GA(t,n._query).then((s=>new Wr(e,r,n,s)))}function db(n,e,t){n=ii(n,Ge);const r=ii(n.firestore,Ml),s=ub(n.converter,e);return pb(r,[rb(nb(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,mn.none())])}function pb(n,e){return(function(r,s){const i=new $n;return r.asyncQueue.enqueueAndForget((async()=>NA(await WA(r),s,i))),i.promise})(Jg(n),e)}(function(e,t=!0){(function(s){as=s})(os),Yr(new _r("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Ml(new ZT(r.getProvider("auth-internal")),new nI(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ci(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Bn(Mh,Lh,e),Bn(Mh,Lh,"esm2017")})();var gb="firebase",mb="11.10.0";/**
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
 */Bn(gb,mb,"app");const _b={apiKey:"AIzaSyDNMpQuG5WjjFbJytRCGWld6mPp2Ndov9I",authDomain:"beverageshop-d9ce9.firebaseapp.com",projectId:"beverageshop-d9ce9",storageBucket:"beverageshop-d9ce9.firebasestorage.app",messagingSenderId:"473136780811",appId:"1:473136780811:web:685f95866900d53dc3990e"},yb=Sp(_b),Vs=XA(yb),vb=Lv("BeverageStore",{state:()=>({temps:wh,currentTemp:wh[0],bases:[],currentBase:null,syrups:[],currentSyrup:null,creamers:[],currentCreamer:null,beverages:[],currentBeverage:null,currentName:"",currentUser:null}),actions:{init(){to(Zi(Vs,"bases")).then(n=>{n.forEach(e=>{const t=e.data();let r={id:e.id,name:t.name,color:t.color};this.bases.push(r)}),this.currentBase=this.bases[0]}),to(Zi(Vs,"creamers")).then(n=>{n.forEach(e=>{const t=e.data();let r={id:e.id,name:t.name,color:t.color};this.creamers.push(r)}),this.currentCreamer=this.creamers[0]}),to(Zi(Vs,"syrups")).then(n=>{n.forEach(e=>{const t=e.data();let r={id:e.id,name:t.name,color:t.color};this.syrups.push(r)}),this.currentSyrup=this.syrups[0]})},makeBeverage(n){if(this.currentUser==null)return;let e={id:this.currentUser.email+"."+n,name:n,temp:this.currentTemp,base:this.currentBase,creamer:this.currentCreamer,syrup:this.currentSyrup};const t=JA(Vs,"beverages",e.id);db(t,{userEmail:this.currentUser.email,beverage:e}),this.beverages.push(e)},showBeverage(n){this.currentBase=n.base,this.currentTemp=n.temp,this.currentCreamer=n.creamer,this.currentSyrup=n.syrup},setUser(n){this.currentUser=n,this.updateBeveragesForUser(n)},updateBeveragesForUser(n){n!=null?to(Zi(Vs,"beverages")).then(e=>{e.forEach(t=>{const r=t.data();if(r.userEmail==n.email&&!this.beverages.includes(r.beverage)){let s=!1;this.beverages.forEach(i=>{i.id==r.beverage.id&&(s=!0)}),s||this.beverages.push(r.beverage)}})}):this.beverages=[]}}});function Ul(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function om(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Eb=om,am=new _i("auth","Firebase",om());/**
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
 */const jo=new cl("@firebase/auth");function Tb(n,...e){jo.logLevel<=he.WARN&&jo.warn(`Auth (${os}): ${n}`,...e)}function go(n,...e){jo.logLevel<=he.ERROR&&jo.error(`Auth (${os}): ${n}`,...e)}/**
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
 */function en(n,...e){throw jl(n,...e)}function xt(n,...e){return jl(n,...e)}function Bl(n,e,t){const r=Object.assign(Object.assign({},Eb()),{[e]:t});return new _i("auth","Firebase",r).create(e,{appName:n.name})}function dr(n){return Bl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ib(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&en(n,"argument-error"),Bl(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jl(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return am.create(n,...e)}function ne(n,e,...t){if(!n)throw jl(e,...t)}function dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw go(e),new Error(e)}function wn(n,e){n||dn(e)}/**
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
 */function jc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function wb(){return Of()==="http:"||Of()==="https:"}function Of(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wb()||VE()||"connection"in navigator)?navigator.onLine:!0}function bb(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Ai{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=RE()||kE()}get(){return Ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function $l(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class cm{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Sb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Rb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Cb=new Ai(3e4,6e4);function Hl(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function hs(n,e,t,r,s={}){return lm(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=yi(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:l},i);return PE()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&is(n.emulatorConfig.host)&&(h.credentials="include"),cm.fetch()(await um(n,n.config.apiHost,t,c),h)})}async function lm(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Sb),e);try{const s=new Vb(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw no(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw no(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw no(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw no(n,"user-disabled",a);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Bl(n,d,h);en(n,d)}}catch(s){if(s instanceof bn)throw s;en(n,"network-request-failed",{message:String(s)})}}async function Pb(n,e,t,r,s={}){const i=await hs(n,e,t,r,s);return"mfaPendingCredential"in i&&en(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function um(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?$l(n.config,s):`${n.config.apiScheme}://${s}`;return Rb.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class Vb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),Cb.get())})}}function no(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=xt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function kb(n,e){return hs(n,"POST","/v1/accounts:delete",e)}async function $o(n,e){return hs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Db(n,e=!1){const t=Rt(n),r=await t.getIdToken(e),s=ql(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(oc(s.auth_time)),issuedAtTime:Xs(oc(s.iat)),expirationTime:Xs(oc(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function oc(n){return Number(n)*1e3}function ql(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return go("JWT malformed, contained fewer than 3 sections"),null;try{const s=yp(t);return s?JSON.parse(s):(go("Failed to decode base64 JWT payload"),null)}catch(s){return go("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nf(n){const e=ql(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function fi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&Ob(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ob({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Nb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $c{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ho(n){var e;const t=n.auth,r=await n.getIdToken(),s=await fi(n,$o(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?hm(i.providerUserInfo):[],c=Mb(n.providerData,a),l=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new $c(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function xb(n){const e=Rt(n);await Ho(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Mb(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function hm(n){return n.map(e=>{var{providerId:t}=e,r=Ul(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Lb(n,e){const t=await lm(n,{},async()=>{const r=yi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await um(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return n.emulatorConfig&&is(n.emulatorConfig.host)&&(l.credentials="include"),cm.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Fb(n,e){return hs(n,"POST","/v2/accounts:revokeToken",Hl(n,e))}/**
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
 */class Kr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Nf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Lb(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Kr;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kr,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Vn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Dt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ul(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Nb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $c(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await fi(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Db(this,e)}reload(){return xb(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Dt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ho(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await fi(this,kb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,c,l,h,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,I=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(c=t.tenantId)!==null&&c!==void 0?c:void 0,F=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,G=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:z,isAnonymous:oe,providerData:_e,stsTokenManager:w}=t;ne(K&&w,e,"internal-error");const m=Kr.fromJSON(this.name,w);ne(typeof K=="string",e,"internal-error"),Vn(g,e.name),Vn(_,e.name),ne(typeof z=="boolean",e,"internal-error"),ne(typeof oe=="boolean",e,"internal-error"),Vn(I,e.name),Vn(V,e.name),Vn(D,e.name),Vn(F,e.name),Vn(G,e.name),Vn($,e.name);const y=new Dt({uid:K,auth:e,email:_,emailVerified:z,displayName:g,isAnonymous:oe,photoURL:V,phoneNumber:I,tenantId:D,stsTokenManager:m,createdAt:G,lastLoginAt:$});return _e&&Array.isArray(_e)&&(y.providerData=_e.map(T=>Object.assign({},T))),F&&(y._redirectEventId=F),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new Kr;s.updateFromServerResponse(t);const i=new Dt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ho(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?hm(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Kr;c.updateFromIdToken(r);const l=new Dt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $c(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const xf=new Map;function pn(n){wn(n instanceof Function,"Expected a class definition");let e=xf.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xf.set(n,e),e)}/**
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
 */class fm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fm.type="NONE";const Mf=fm;/**
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
 */function mo(n,e,t){return`firebase:${n}:${e}:${t}`}class Gr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=mo(this.userKey,s.apiKey,i),this.fullPersistenceKey=mo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await $o(this.auth,{idToken:e}).catch(()=>{});return t?Dt._fromGetAccountInfoResponse(this.auth,t,e):null}return Dt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gr(pn(Mf),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||pn(Mf);const a=mo(r,e.config.apiKey,e.name);let c=null;for(const h of t)try{const d=await h._get(a);if(d){let g;if(typeof d=="string"){const _=await $o(e,{idToken:d}).catch(()=>{});if(!_)break;g=await Dt._fromGetAccountInfoResponse(e,_,d)}else g=Dt._fromJSON(e,d);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Gr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Gr(i,e,r))}}/**
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
 */function Lf(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ym(e))return"Blackberry";if(vm(e))return"Webos";if(pm(e))return"Safari";if((e.includes("chrome/")||gm(e))&&!e.includes("edge/"))return"Chrome";if(_m(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dm(n=ut()){return/firefox\//i.test(n)}function pm(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gm(n=ut()){return/crios\//i.test(n)}function mm(n=ut()){return/iemobile/i.test(n)}function _m(n=ut()){return/android/i.test(n)}function ym(n=ut()){return/blackberry/i.test(n)}function vm(n=ut()){return/webos/i.test(n)}function zl(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Ub(n=ut()){var e;return zl(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bb(){return DE()&&document.documentMode===10}function Em(n=ut()){return zl(n)||_m(n)||vm(n)||ym(n)||/windows phone/i.test(n)||mm(n)}/**
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
 */function Tm(n,e=[]){let t;switch(n){case"Browser":t=Lf(ut());break;case"Worker":t=`${Lf(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${os}/${r}`}/**
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
 */class jb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function $b(n,e={}){return hs(n,"GET","/v2/passwordPolicy",Hl(n,e))}/**
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
 */const Hb=6;class qb{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Hb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class zb{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ff(this),this.idTokenSubscription=new Ff(this),this.beforeStateQueue=new jb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=am,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=pn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Gr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await $o(this,{idToken:e}),r=await Dt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ho(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(dr(this));const t=e?Rt(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $b(this),t=new qb(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Fb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&pn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await Gr.create(this,[pn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Tm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Tb(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ia(n){return Rt(n)}class Ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=BE(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Wb(n){Wl=n}function Kb(n){return Wl.loadJS(n)}function Gb(){return Wl.gapiScript}function Qb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Jb(n,e){const t=ul(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(mr(i,e??{}))return s;en(s,"already-initialized")}return t.initialize({options:e})}function Xb(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(pn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Yb(n,e,t){const r=Ia(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Im(e),{host:a,port:c}=Zb(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(mr(h,r.config.emulator)&&mr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,is(a)?(Ip(`${i}//${a}${l}`),wp("Auth",!0)):e0()}function Im(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zb(n){const e=Im(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Uf(a)}}}function Uf(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function e0(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class wm{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,t){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function Qr(n,e){return Pb(n,"POST","/v1/accounts:signInWithIdp",Hl(n,e))}/**
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
 */const t0="http://localhost";class Er extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):en("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ul(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Er(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Qr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Qr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Qr(e,t)}buildRequest(){const e={requestUri:t0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yi(t)}return e}}/**
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
 */class Kl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bi extends Kl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends bi{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class fn extends bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Er._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return fn.credential(t,r)}catch{return null}}}fn.GOOGLE_SIGN_IN_METHOD="google.com";fn.PROVIDER_ID="google.com";/**
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
 */class xn extends bi{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
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
 */class Mn extends bi{constructor(){super("twitter.com")}static credential(e,t){return Er._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Mn.credential(t,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Dt._fromIdTokenResponse(e,r,s),a=Bf(r);return new ss({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Bf(r);return new ss({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Bf(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class qo extends bn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new qo(e,t,r,s)}}function Am(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?qo._fromErrorAndOperation(n,i,e,r):i})}async function n0(n,e,t=!1){const r=await fi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ss._forOperation(n,"link",r)}/**
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
 */async function r0(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(dr(r));const s="reauthenticate";try{const i=await fi(n,Am(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=ql(i.idToken);ne(a,r,"internal-error");const{sub:c}=a;return ne(n.uid===c,r,"user-mismatch"),ss._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&en(r,"user-mismatch"),i}}/**
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
 */async function s0(n,e,t=!1){if(Vt(n.app))return Promise.reject(dr(n));const r="signIn",s=await Am(n,r,e),i=await ss._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function i0(n,e,t,r){return Rt(n).onIdTokenChanged(e,t,r)}function o0(n,e,t){return Rt(n).beforeAuthStateChanged(e,t)}function a0(n,e,t,r){return Rt(n).onAuthStateChanged(e,t,r)}const zo="__sak";/**
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
 */class bm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zo,"1"),this.storage.removeItem(zo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const c0=1e3,l0=10;class Sm extends bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Em(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Bb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,l0):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},c0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Sm.type="LOCAL";const u0=Sm;/**
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
 */class Rm extends bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Rm.type="SESSION";const Cm=Rm;/**
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
 */function h0(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class wa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new wa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(t.origin,i)),l=await h0(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wa.receivers=[];/**
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
 */function Gl(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class f0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=Gl("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Jt(){return window}function d0(n){Jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function Pm(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function p0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function g0(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function m0(){return Pm()?self:null}/**
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
 */const Vm="firebaseLocalStorageDb",_0=1,Wo="firebaseLocalStorage",km="fbase_key";class Si{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Aa(n,e){return n.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function y0(){const n=indexedDB.deleteDatabase(Vm);return new Si(n).toPromise()}function Hc(){const n=indexedDB.open(Vm,_0);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Wo,{keyPath:km})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await y0(),e(await Hc()))})})}async function jf(n,e,t){const r=Aa(n,!0).put({[km]:e,value:t});return new Si(r).toPromise()}async function v0(n,e){const t=Aa(n,!1).get(e),r=await new Si(t).toPromise();return r===void 0?null:r.value}function $f(n,e){const t=Aa(n,!0).delete(e);return new Si(t).toPromise()}const E0=800,T0=3;class Dm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hc(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>T0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Pm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wa._getInstance(m0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await p0(),!this.activeServiceWorker)return;this.sender=new f0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||g0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hc();return await jf(e,zo,"1"),await $f(e,zo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jf(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>v0(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$f(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Aa(s,!1).getAll();return new Si(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dm.type="LOCAL";const I0=Dm;new Ai(3e4,6e4);/**
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
 */function Om(n,e){return e?pn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Ql extends wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Qr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function w0(n){return s0(n.auth,new Ql(n),n.bypassAuthState)}function A0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),r0(t,new Ql(n),n.bypassAuthState)}async function b0(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),n0(t,new Ql(n),n.bypassAuthState)}/**
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
 */class Nm{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return w0;case"linkViaPopup":case"linkViaRedirect":return b0;case"reauthViaPopup":case"reauthViaRedirect":return A0;default:en(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const S0=new Ai(2e3,1e4);async function R0(n,e,t){if(Vt(n.app))return Promise.reject(xt(n,"operation-not-supported-in-this-environment"));const r=Ia(n);Ib(n,e,Kl);const s=Om(r,t);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends Nm{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,S0.get())};e()}}ur.currentPopupAction=null;/**
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
 */const C0="pendingRedirect",_o=new Map;class P0 extends Nm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await V0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function V0(n,e){const t=O0(e),r=D0(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function k0(n,e){_o.set(n._key(),e)}function D0(n){return pn(n._redirectPersistence)}function O0(n){return mo(C0,n.config.apiKey,n.name)}async function N0(n,e,t=!1){if(Vt(n.app))return Promise.reject(dr(n));const r=Ia(n),s=Om(r,e),a=await new P0(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const x0=600*1e3;class M0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!L0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!xm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=x0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hf(e))}saveEventToCache(e){this.cachedEventUids.add(Hf(e)),this.lastProcessedEventTime=Date.now()}}function Hf(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function xm({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function L0(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xm(n);default:return!1}}/**
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
 */async function F0(n,e={}){return hs(n,"GET","/v1/projects",e)}/**
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
 */const U0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,B0=/^https?/;async function j0(n){if(n.config.emulator)return;const{authorizedDomains:e}=await F0(n);for(const t of e)try{if($0(t))return}catch{}en(n,"unauthorized-domain")}function $0(n){const e=jc(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!B0.test(t))return!1;if(U0.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const H0=new Ai(3e4,6e4);function qf(){const n=Jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function q0(n){return new Promise((e,t)=>{var r,s,i;function a(){qf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qf(),t(xt(n,"network-request-failed"))},timeout:H0.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)a();else{const c=Qb("iframefcb");return Jt()[c]=()=>{gapi.load?a():t(xt(n,"network-request-failed"))},Kb(`${Gb()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw yo=null,e})}let yo=null;function z0(n){return yo=yo||q0(n),yo}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const W0=new Ai(5e3,15e3),K0="__/auth/iframe",G0="emulator/auth/iframe",Q0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},J0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function X0(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?$l(e,G0):`https://${n.config.authDomain}/${K0}`,r={apiKey:e.apiKey,appName:n.name,v:os},s=J0.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${yi(r).slice(1)}`}async function Y0(n){const e=await z0(n),t=Jt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:X0(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Q0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=xt(n,"network-request-failed"),c=Jt().setTimeout(()=>{i(a)},W0.get());function l(){Jt().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const Z0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eS=500,tS=600,nS="_blank",rS="http://localhost";class zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sS(n,e,t,r=eS,s=tS){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Z0),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();t&&(c=gm(h)?nS:t),dm(h)&&(e=e||rS,l.scrollbars="yes");const d=Object.entries(l).reduce((_,[I,V])=>`${_}${I}=${V},`,"");if(Ub(h)&&c!=="_self")return iS(e||"",c),new zf(null);const g=window.open(e||"",c,d);ne(g,n,"popup-blocked");try{g.focus()}catch{}return new zf(g)}function iS(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const oS="__/auth/handler",aS="emulator/auth/handler",cS=encodeURIComponent("fac");async function Wf(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:os,eventId:s};if(e instanceof Kl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",UE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof bi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await n._getAppCheckToken(),h=l?`#${cS}=${encodeURIComponent(l)}`:"";return`${lS(n)}?${yi(c).slice(1)}${h}`}function lS({config:n}){return n.emulator?$l(n,aS):`https://${n.authDomain}/${oS}`}/**
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
 */const ac="webStorageSupport";class uS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cm,this._completeRedirectFn=N0,this._overrideRedirectResult=k0}async _openPopup(e,t,r,s){var i;wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Wf(e,t,r,jc(),s);return sS(e,a,Gl())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Wf(e,t,r,jc(),s);return d0(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Y0(e),r=new M0(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ac,{type:ac},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ac];a!==void 0&&t(!!a),en(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=j0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Em()||pm()||zl()}}const hS=uS;var Kf="@firebase/auth",Gf="1.10.8";/**
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
 */class fS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dS(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pS(n){Yr(new _r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Tm(n)},h=new zb(r,s,i,l);return Xb(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new _r("auth-internal",e=>{const t=Ia(e.getProvider("auth").getImmediate());return(r=>new fS(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Kf,Gf,dS(n)),Bn(Kf,Gf,"esm2017")}/**
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
 */const gS=300,mS=Tp("authIdTokenMaxAge")||gS;let Qf=null;const _S=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>mS)return;const s=t==null?void 0:t.token;Qf!==s&&(Qf=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Jf(n=Rp()){const e=ul(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Jb(n,{popupRedirectResolver:hS,persistence:[I0,u0,Cm]}),r=Tp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=_S(i.toString());o0(t,a,()=>a(t.currentUser)),i0(t,c=>a(c))}}const s=vp("auth");return s&&Yb(t,`http://${s}`),t}function yS(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Wb({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=xt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",yS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pS("Browser");const vS=["id","value"],ES=["id","value"],TS=["id","value"],IS=["id","value"],wS=["disabled"],AS={id:"beverage-container",style:{"margin-top":"20px"}},bS=["onClick"],SS=gi({__name:"App",setup(n){const e=vb(),t=Ad("");e.init();let r=!1,s="Please sign in to save your changes",i="Sign in with Google",a="";function c(){t.value!=""?(e.makeBeverage(t.value),s="Successfully made "+t.value+" beverage!"):s="Please enter a name for the beverage"}function l(g){e.showBeverage(g)}function h(){const g=Jf(),_=new fn;e.currentUser==null?R0(g,_).then(I=>{e.setUser(I.user)}).catch(I=>{s=`An error ocurred:
`+I.toString()}):g.signOut()}const d=Jf();return a0(d,g=>{g!=null?(s="",r=!0,a="Signed in as "+g.displayName,i="Log out"):(r=!1,a="",i="Sign in",s="Please sign in to save your changes"),e.setUser(g)}),(g,_)=>(be(),Me(Fe,null,[De("div",null,[yt(dE,{isIced:ke(e).currentTemp==="Cold",baseColor:ke(e).currentBase.color,creamerColor:ke(e).currentCreamer.color,syrupColor:ke(e).currentSyrup.color},null,8,["isIced","baseColor","creamerColor","syrupColor"]),De("ul",null,[De("li",null,[(be(!0),Me(Fe,null,On(ke(e).temps,I=>(be(),Me("label",{key:I},[Cs(De("input",{type:"radio",name:"temperature",id:`r${I}`,value:I,"onUpdate:modelValue":_[0]||(_[0]=V=>ke(e).currentTemp=V)},null,8,vS),[[Ki,ke(e).currentTemp]]),Os(" "+an(I),1)]))),128))]),De("li",null,[(be(!0),Me(Fe,null,On(ke(e).bases,I=>(be(),Me("label",{key:I.id},[Cs(De("input",{type:"radio",name:"base",id:`r${I.id}`,value:I,"onUpdate:modelValue":_[1]||(_[1]=V=>ke(e).currentBase=V)},null,8,ES),[[Ki,ke(e).currentBase]]),Os(" "+an(I.name),1)]))),128))]),De("li",null,[(be(!0),Me(Fe,null,On(ke(e).creamers,I=>(be(),Me("label",{key:I.id},[Cs(De("input",{type:"radio",name:"creamer",id:`r${I.id}`,value:I,"onUpdate:modelValue":_[2]||(_[2]=V=>ke(e).currentCreamer=V)},null,8,TS),[[Ki,ke(e).currentCreamer]]),Os(" "+an(I.name),1)]))),128))]),De("li",null,[(be(!0),Me(Fe,null,On(ke(e).syrups,I=>(be(),Me("label",{key:I.id},[Cs(De("input",{type:"radio",name:"syrup",id:`r${I.id}`,value:I,"onUpdate:modelValue":_[3]||(_[3]=V=>ke(e).currentSyrup=V)},null,8,IS),[[Ki,ke(e).currentSyrup]]),Os(" "+an(I.name),1)]))),128))])]),De("div",null,[De("label",null,an(ke(a)),1),De("button",{onClick:_[4]||(_[4]=I=>h())},an(ke(i)),1)]),Cs(De("input",{"onUpdate:modelValue":_[5]||(_[5]=I=>t.value=I),type:"text",placeholder:"Beverage Name"},null,512),[[Av,t.value]]),De("button",{onClick:_[6]||(_[6]=I=>c()),disabled:!ke(r)},"🍺 Make Beverage",8,wS),De("p",null,an(ke(s)),1)]),De("div",AS,[(be(!0),Me(Fe,null,On(ke(e).beverages,I=>(be(),Me("label",{key:I.id},[De("button",{onClick:V=>l(I)},an(I.name),9,bS)]))),128))])],64))}}),Mm=kv();Mm.use($v);Cv(SS).use(Mm).mount("#app");
