(function(){const ft=document.createElement("link").relList;if(ft&&ft.supports&&ft.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))E(L);new MutationObserver(L=>{for(const J of L)if(J.type==="childList")for(const dt of J.addedNodes)dt.tagName==="LINK"&&dt.rel==="modulepreload"&&E(dt)}).observe(document,{childList:!0,subtree:!0});function W(L){const J={};return L.integrity&&(J.integrity=L.integrity),L.referrerPolicy&&(J.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?J.credentials="include":L.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function E(L){if(L.ep)return;L.ep=!0;const J=W(L);fetch(L.href,J)}})();var kc={exports:{}},yu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr;function _0(){if(Wr)return yu;Wr=1;var D=Symbol.for("react.transitional.element"),ft=Symbol.for("react.fragment");function W(E,L,J){var dt=null;if(J!==void 0&&(dt=""+J),L.key!==void 0&&(dt=""+L.key),"key"in L){J={};for(var Ct in L)Ct!=="key"&&(J[Ct]=L[Ct])}else J=L;return L=J.ref,{$$typeof:D,type:E,key:dt,ref:L!==void 0?L:null,props:J}}return yu.Fragment=ft,yu.jsx=W,yu.jsxs=W,yu}var Fr;function M0(){return Fr||(Fr=1,kc.exports=_0()),kc.exports}var Bt=M0(),Wc={exports:{}},Y={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ir;function U0(){if(Ir)return Y;Ir=1;var D=Symbol.for("react.transitional.element"),ft=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),dt=Symbol.for("react.context"),Ct=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),nt=Symbol.iterator;function lt(s){return s===null||typeof s!="object"?null:(s=nt&&s[nt]||s["@@iterator"],typeof s=="function"?s:null)}var Ht={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lt=Object.assign,re={};function qt(s,b,O){this.props=s,this.context=b,this.refs=re,this.updater=O||Ht}qt.prototype.isReactComponent={},qt.prototype.setState=function(s,b){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,b,"setState")},qt.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function ra(){}ra.prototype=qt.prototype;function Ae(s,b,O){this.props=s,this.context=b,this.refs=re,this.updater=O||Ht}var Nt=Ae.prototype=new ra;Nt.constructor=Ae,Lt(Nt,qt.prototype),Nt.isPureReactComponent=!0;var de=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},Xt=Object.prototype.hasOwnProperty;function Vt(s,b,O,A,z,Z){return O=Z.ref,{$$typeof:D,type:s,key:b,ref:O!==void 0?O:null,props:Z}}function Zt(s,b){return Vt(s.type,b,void 0,void 0,void 0,s.props)}function Ee(s){return typeof s=="object"&&s!==null&&s.$$typeof===D}function Ca(s){var b={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(O){return b[O]})}var pe=/\/+/g;function Dt(s,b){return typeof s=="object"&&s!==null&&s.key!=null?Ca(""+s.key):b.toString(36)}function da(){}function ma(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(da,da):(s.status="pending",s.then(function(b){s.status==="pending"&&(s.status="fulfilled",s.value=b)},function(b){s.status==="pending"&&(s.status="rejected",s.reason=b)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function _t(s,b,O,A,z){var Z=typeof s;(Z==="undefined"||Z==="boolean")&&(s=null);var q=!1;if(s===null)q=!0;else switch(Z){case"bigint":case"string":case"number":q=!0;break;case"object":switch(s.$$typeof){case D:case ft:q=!0;break;case M:return q=s._init,_t(q(s._payload),b,O,A,z)}}if(q)return z=z(s),q=A===""?"."+Dt(s,0):A,de(z)?(O="",q!=null&&(O=q.replace(pe,"$&/")+"/"),_t(z,b,O,"",function(Ge){return Ge})):z!=null&&(Ee(z)&&(z=Zt(z,O+(z.key==null||s&&s.key===z.key?"":(""+z.key).replace(pe,"$&/")+"/")+q)),b.push(z)),1;q=0;var Kt=A===""?".":A+":";if(de(s))for(var it=0;it<s.length;it++)A=s[it],Z=Kt+Dt(A,it),q+=_t(A,b,O,Z,z);else if(it=lt(s),typeof it=="function")for(s=it.call(s),it=0;!(A=s.next()).done;)A=A.value,Z=Kt+Dt(A,it++),q+=_t(A,b,O,Z,z);else if(Z==="object"){if(typeof s.then=="function")return _t(ma(s),b,O,A,z);throw b=String(s),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return q}function S(s,b,O){if(s==null)return s;var A=[],z=0;return _t(s,A,"","",function(Z){return b.call(O,Z,z++)}),A}function p(s){if(s._status===-1){var b=s._result;b=b(),b.then(function(O){(s._status===0||s._status===-1)&&(s._status=1,s._result=O)},function(O){(s._status===0||s._status===-1)&&(s._status=2,s._result=O)}),s._status===-1&&(s._status=0,s._result=b)}if(s._status===1)return s._result.default;throw s._result}var x=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function et(){}return Y.Children={map:S,forEach:function(s,b,O){S(s,function(){b.apply(this,arguments)},O)},count:function(s){var b=0;return S(s,function(){b++}),b},toArray:function(s){return S(s,function(b){return b})||[]},only:function(s){if(!Ee(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},Y.Component=qt,Y.Fragment=W,Y.Profiler=L,Y.PureComponent=Ae,Y.StrictMode=E,Y.Suspense=U,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Y.__COMPILER_RUNTIME={__proto__:null,c:function(s){return V.H.useMemoCache(s)}},Y.cache=function(s){return function(){return s.apply(null,arguments)}},Y.cloneElement=function(s,b,O){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var A=Lt({},s.props),z=s.key,Z=void 0;if(b!=null)for(q in b.ref!==void 0&&(Z=void 0),b.key!==void 0&&(z=""+b.key),b)!Xt.call(b,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&b.ref===void 0||(A[q]=b[q]);var q=arguments.length-2;if(q===1)A.children=O;else if(1<q){for(var Kt=Array(q),it=0;it<q;it++)Kt[it]=arguments[it+2];A.children=Kt}return Vt(s.type,z,void 0,void 0,Z,A)},Y.createContext=function(s){return s={$$typeof:dt,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:J,_context:s},s},Y.createElement=function(s,b,O){var A,z={},Z=null;if(b!=null)for(A in b.key!==void 0&&(Z=""+b.key),b)Xt.call(b,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(z[A]=b[A]);var q=arguments.length-2;if(q===1)z.children=O;else if(1<q){for(var Kt=Array(q),it=0;it<q;it++)Kt[it]=arguments[it+2];z.children=Kt}if(s&&s.defaultProps)for(A in q=s.defaultProps,q)z[A]===void 0&&(z[A]=q[A]);return Vt(s,Z,void 0,void 0,null,z)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(s){return{$$typeof:Ct,render:s}},Y.isValidElement=Ee,Y.lazy=function(s){return{$$typeof:M,_payload:{_status:-1,_result:s},_init:p}},Y.memo=function(s,b){return{$$typeof:R,type:s,compare:b===void 0?null:b}},Y.startTransition=function(s){var b=V.T,O={};V.T=O;try{var A=s(),z=V.S;z!==null&&z(O,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(et,x)}catch(Z){x(Z)}finally{V.T=b}},Y.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Y.use=function(s){return V.H.use(s)},Y.useActionState=function(s,b,O){return V.H.useActionState(s,b,O)},Y.useCallback=function(s,b){return V.H.useCallback(s,b)},Y.useContext=function(s){return V.H.useContext(s)},Y.useDebugValue=function(){},Y.useDeferredValue=function(s,b){return V.H.useDeferredValue(s,b)},Y.useEffect=function(s,b,O){var A=V.H;if(typeof O=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return A.useEffect(s,b)},Y.useId=function(){return V.H.useId()},Y.useImperativeHandle=function(s,b,O){return V.H.useImperativeHandle(s,b,O)},Y.useInsertionEffect=function(s,b){return V.H.useInsertionEffect(s,b)},Y.useLayoutEffect=function(s,b){return V.H.useLayoutEffect(s,b)},Y.useMemo=function(s,b){return V.H.useMemo(s,b)},Y.useOptimistic=function(s,b){return V.H.useOptimistic(s,b)},Y.useReducer=function(s,b,O){return V.H.useReducer(s,b,O)},Y.useRef=function(s){return V.H.useRef(s)},Y.useState=function(s){return V.H.useState(s)},Y.useSyncExternalStore=function(s,b,O){return V.H.useSyncExternalStore(s,b,O)},Y.useTransition=function(){return V.H.useTransition()},Y.version="19.1.0",Y}var $r;function tf(){return $r||($r=1,Wc.exports=U0()),Wc.exports}var nd=tf(),Fc={exports:{}},Eu={},Ic={exports:{}},$c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr;function z0(){return Pr||(Pr=1,function(D){function ft(S,p){var x=S.length;S.push(p);t:for(;0<x;){var et=x-1>>>1,s=S[et];if(0<L(s,p))S[et]=p,S[x]=s,x=et;else break t}}function W(S){return S.length===0?null:S[0]}function E(S){if(S.length===0)return null;var p=S[0],x=S.pop();if(x!==p){S[0]=x;t:for(var et=0,s=S.length,b=s>>>1;et<b;){var O=2*(et+1)-1,A=S[O],z=O+1,Z=S[z];if(0>L(A,x))z<s&&0>L(Z,A)?(S[et]=Z,S[z]=x,et=z):(S[et]=A,S[O]=x,et=O);else if(z<s&&0>L(Z,x))S[et]=Z,S[z]=x,et=z;else break t}}return p}function L(S,p){var x=S.sortIndex-p.sortIndex;return x!==0?x:S.id-p.id}if(D.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;D.unstable_now=function(){return J.now()}}else{var dt=Date,Ct=dt.now();D.unstable_now=function(){return dt.now()-Ct}}var U=[],R=[],M=1,nt=null,lt=3,Ht=!1,Lt=!1,re=!1,qt=!1,ra=typeof setTimeout=="function"?setTimeout:null,Ae=typeof clearTimeout=="function"?clearTimeout:null,Nt=typeof setImmediate<"u"?setImmediate:null;function de(S){for(var p=W(R);p!==null;){if(p.callback===null)E(R);else if(p.startTime<=S)E(R),p.sortIndex=p.expirationTime,ft(U,p);else break;p=W(R)}}function V(S){if(re=!1,de(S),!Lt)if(W(U)!==null)Lt=!0,Xt||(Xt=!0,Dt());else{var p=W(R);p!==null&&_t(V,p.startTime-S)}}var Xt=!1,Vt=-1,Zt=5,Ee=-1;function Ca(){return qt?!0:!(D.unstable_now()-Ee<Zt)}function pe(){if(qt=!1,Xt){var S=D.unstable_now();Ee=S;var p=!0;try{t:{Lt=!1,re&&(re=!1,Ae(Vt),Vt=-1),Ht=!0;var x=lt;try{e:{for(de(S),nt=W(U);nt!==null&&!(nt.expirationTime>S&&Ca());){var et=nt.callback;if(typeof et=="function"){nt.callback=null,lt=nt.priorityLevel;var s=et(nt.expirationTime<=S);if(S=D.unstable_now(),typeof s=="function"){nt.callback=s,de(S),p=!0;break e}nt===W(U)&&E(U),de(S)}else E(U);nt=W(U)}if(nt!==null)p=!0;else{var b=W(R);b!==null&&_t(V,b.startTime-S),p=!1}}break t}finally{nt=null,lt=x,Ht=!1}p=void 0}}finally{p?Dt():Xt=!1}}}var Dt;if(typeof Nt=="function")Dt=function(){Nt(pe)};else if(typeof MessageChannel<"u"){var da=new MessageChannel,ma=da.port2;da.port1.onmessage=pe,Dt=function(){ma.postMessage(null)}}else Dt=function(){ra(pe,0)};function _t(S,p){Vt=ra(function(){S(D.unstable_now())},p)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(S){S.callback=null},D.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zt=0<S?Math.floor(1e3/S):5},D.unstable_getCurrentPriorityLevel=function(){return lt},D.unstable_next=function(S){switch(lt){case 1:case 2:case 3:var p=3;break;default:p=lt}var x=lt;lt=p;try{return S()}finally{lt=x}},D.unstable_requestPaint=function(){qt=!0},D.unstable_runWithPriority=function(S,p){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var x=lt;lt=S;try{return p()}finally{lt=x}},D.unstable_scheduleCallback=function(S,p,x){var et=D.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?et+x:et):x=et,S){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=x+s,S={id:M++,callback:p,priorityLevel:S,startTime:x,expirationTime:s,sortIndex:-1},x>et?(S.sortIndex=x,ft(R,S),W(U)===null&&S===W(R)&&(re?(Ae(Vt),Vt=-1):re=!0,_t(V,x-et))):(S.sortIndex=s,ft(U,S),Lt||Ht||(Lt=!0,Xt||(Xt=!0,Dt()))),S},D.unstable_shouldYield=Ca,D.unstable_wrapCallback=function(S){var p=lt;return function(){var x=lt;lt=p;try{return S.apply(this,arguments)}finally{lt=x}}}}($c)),$c}var td;function C0(){return td||(td=1,Ic.exports=z0()),Ic.exports}var Pc={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function H0(){if(ed)return zt;ed=1;var D=tf();function ft(U){var R="https://react.dev/errors/"+U;if(1<arguments.length){R+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)R+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+U+"; visit "+R+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var E={d:{f:W,r:function(){throw Error(ft(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},L=Symbol.for("react.portal");function J(U,R,M){var nt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:nt==null?null:""+nt,children:U,containerInfo:R,implementation:M}}var dt=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ct(U,R){if(U==="font")return"";if(typeof R=="string")return R==="use-credentials"?R:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,zt.createPortal=function(U,R){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R||R.nodeType!==1&&R.nodeType!==9&&R.nodeType!==11)throw Error(ft(299));return J(U,R,null,M)},zt.flushSync=function(U){var R=dt.T,M=E.p;try{if(dt.T=null,E.p=2,U)return U()}finally{dt.T=R,E.p=M,E.d.f()}},zt.preconnect=function(U,R){typeof U=="string"&&(R?(R=R.crossOrigin,R=typeof R=="string"?R==="use-credentials"?R:"":void 0):R=null,E.d.C(U,R))},zt.prefetchDNS=function(U){typeof U=="string"&&E.d.D(U)},zt.preinit=function(U,R){if(typeof U=="string"&&R&&typeof R.as=="string"){var M=R.as,nt=Ct(M,R.crossOrigin),lt=typeof R.integrity=="string"?R.integrity:void 0,Ht=typeof R.fetchPriority=="string"?R.fetchPriority:void 0;M==="style"?E.d.S(U,typeof R.precedence=="string"?R.precedence:void 0,{crossOrigin:nt,integrity:lt,fetchPriority:Ht}):M==="script"&&E.d.X(U,{crossOrigin:nt,integrity:lt,fetchPriority:Ht,nonce:typeof R.nonce=="string"?R.nonce:void 0})}},zt.preinitModule=function(U,R){if(typeof U=="string")if(typeof R=="object"&&R!==null){if(R.as==null||R.as==="script"){var M=Ct(R.as,R.crossOrigin);E.d.M(U,{crossOrigin:M,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0})}}else R==null&&E.d.M(U)},zt.preload=function(U,R){if(typeof U=="string"&&typeof R=="object"&&R!==null&&typeof R.as=="string"){var M=R.as,nt=Ct(M,R.crossOrigin);E.d.L(U,M,{crossOrigin:nt,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0,type:typeof R.type=="string"?R.type:void 0,fetchPriority:typeof R.fetchPriority=="string"?R.fetchPriority:void 0,referrerPolicy:typeof R.referrerPolicy=="string"?R.referrerPolicy:void 0,imageSrcSet:typeof R.imageSrcSet=="string"?R.imageSrcSet:void 0,imageSizes:typeof R.imageSizes=="string"?R.imageSizes:void 0,media:typeof R.media=="string"?R.media:void 0})}},zt.preloadModule=function(U,R){if(typeof U=="string")if(R){var M=Ct(R.as,R.crossOrigin);E.d.m(U,{as:typeof R.as=="string"&&R.as!=="script"?R.as:void 0,crossOrigin:M,integrity:typeof R.integrity=="string"?R.integrity:void 0})}else E.d.m(U)},zt.requestFormReset=function(U){E.d.r(U)},zt.unstable_batchedUpdates=function(U,R){return U(R)},zt.useFormState=function(U,R,M){return dt.H.useFormState(U,R,M)},zt.useFormStatus=function(){return dt.H.useHostTransitionStatus()},zt.version="19.1.0",zt}var ad;function L0(){if(ad)return Pc.exports;ad=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(ft){console.error(ft)}}return D(),Pc.exports=H0(),Pc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function x0(){if(ld)return Eu;ld=1;var D=C0(),ft=tf(),W=L0();function E(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function J(t){var e=t,a=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(a=e.return),t=e.return;while(t)}return e.tag===3?a:null}function dt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ct(t){if(J(t)!==t)throw Error(E(188))}function U(t){var e=t.alternate;if(!e){if(e=J(t),e===null)throw Error(E(188));return e!==t?null:t}for(var a=t,l=e;;){var u=a.return;if(u===null)break;var n=u.alternate;if(n===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===a)return Ct(u),t;if(n===l)return Ct(u),e;n=n.sibling}throw Error(E(188))}if(a.return!==l.return)a=u,l=n;else{for(var i=!1,c=u.child;c;){if(c===a){i=!0,a=u,l=n;break}if(c===l){i=!0,l=u,a=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===a){i=!0,a=n,l=u;break}if(c===l){i=!0,l=n,a=u;break}c=c.sibling}if(!i)throw Error(E(189))}}if(a.alternate!==l)throw Error(E(190))}if(a.tag!==3)throw Error(E(188));return a.stateNode.current===a?t:e}function R(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=R(t),e!==null)return e;t=t.sibling}return null}var M=Object.assign,nt=Symbol.for("react.element"),lt=Symbol.for("react.transitional.element"),Ht=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),qt=Symbol.for("react.profiler"),ra=Symbol.for("react.provider"),Ae=Symbol.for("react.consumer"),Nt=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),Xt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),Ee=Symbol.for("react.activity"),Ca=Symbol.for("react.memo_cache_sentinel"),pe=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=pe&&t[pe]||t["@@iterator"],typeof t=="function"?t:null)}var da=Symbol.for("react.client.reference");function ma(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===da?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lt:return"Fragment";case qt:return"Profiler";case re:return"StrictMode";case V:return"Suspense";case Xt:return"SuspenseList";case Ee:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ht:return"Portal";case Nt:return(t.displayName||"Context")+".Provider";case Ae:return(t._context.displayName||"Context")+".Consumer";case de:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vt:return e=t.displayName||null,e!==null?e:ma(t.type)||"Memo";case Zt:e=t._payload,t=t._init;try{return ma(t(e))}catch{}}return null}var _t=Array.isArray,S=ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,p=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x={pending:!1,data:null,method:null,action:null},et=[],s=-1;function b(t){return{current:t}}function O(t){0>s||(t.current=et[s],et[s]=null,s--)}function A(t,e){s++,et[s]=t.current,t.current=e}var z=b(null),Z=b(null),q=b(null),Kt=b(null);function it(t,e){switch(A(q,e),A(Z,t),A(z,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Ar(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Ar(e),t=pr(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}O(z),A(z,t)}function Ge(){O(z),O(Z),O(q)}function Hn(t){t.memoizedState!==null&&A(Kt,t);var e=z.current,a=pr(e,t.type);e!==a&&(A(Z,t),A(z,a))}function vu(t){Z.current===t&&(O(z),O(Z)),Kt.current===t&&(O(Kt),ou._currentValue=x)}var Ln=Object.prototype.hasOwnProperty,xn=D.unstable_scheduleCallback,Bn=D.unstable_cancelCallback,id=D.unstable_shouldYield,cd=D.unstable_requestPaint,ve=D.unstable_now,fd=D.unstable_getCurrentPriorityLevel,ef=D.unstable_ImmediatePriority,af=D.unstable_UserBlockingPriority,Su=D.unstable_NormalPriority,sd=D.unstable_LowPriority,lf=D.unstable_IdlePriority,od=D.log,rd=D.unstable_setDisableYieldValue,Sl=null,Jt=null;function Qe(t){if(typeof od=="function"&&rd(t),Jt&&typeof Jt.setStrictMode=="function")try{Jt.setStrictMode(Sl,t)}catch{}}var kt=Math.clz32?Math.clz32:hd,dd=Math.log,md=Math.LN2;function hd(t){return t>>>=0,t===0?32:31-(dd(t)/md|0)|0}var gu=256,Tu=4194304;function ha(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function bu(t,e,a){var l=t.pendingLanes;if(l===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=l&134217727;return c!==0?(l=c&~n,l!==0?u=ha(l):(i&=c,i!==0?u=ha(i):a||(a=c&~t,a!==0&&(u=ha(a))))):(c=l&~n,c!==0?u=ha(c):i!==0?u=ha(i):a||(a=l&~t,a!==0&&(u=ha(a)))),u===0?0:e!==0&&e!==u&&(e&n)===0&&(n=u&-u,a=e&-e,n>=a||n===32&&(a&4194048)!==0)?e:u}function gl(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function yd(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uf(){var t=gu;return gu<<=1,(gu&4194048)===0&&(gu=256),t}function nf(){var t=Tu;return Tu<<=1,(Tu&62914560)===0&&(Tu=4194304),t}function qn(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Tl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ed(t,e,a,l,u,n){var i=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(a=i&~a;0<a;){var v=31-kt(a),T=1<<v;c[v]=0,f[v]=-1;var h=m[v];if(h!==null)for(m[v]=null,v=0;v<h.length;v++){var y=h[v];y!==null&&(y.lane&=-536870913)}a&=~T}l!==0&&cf(t,l,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~e))}function cf(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var l=31-kt(e);t.entangledLanes|=e,t.entanglements[l]=t.entanglements[l]|1073741824|a&4194090}function ff(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var l=31-kt(a),u=1<<l;u&e|t[l]&e&&(t[l]|=e),a&=~u}}function Yn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sf(){var t=p.p;return t!==0?t:(t=window.event,t===void 0?32:Xr(t.type))}function vd(t,e){var a=p.p;try{return p.p=t,e()}finally{p.p=a}}var we=Math.random().toString(36).slice(2),Mt="__reactFiber$"+we,Yt="__reactProps$"+we,Ha="__reactContainer$"+we,Gn="__reactEvents$"+we,Sd="__reactListeners$"+we,gd="__reactHandles$"+we,of="__reactResources$"+we,bl="__reactMarker$"+we;function Qn(t){delete t[Mt],delete t[Yt],delete t[Gn],delete t[Sd],delete t[gd]}function La(t){var e=t[Mt];if(e)return e;for(var a=t.parentNode;a;){if(e=a[Ha]||a[Mt]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=_r(t);t!==null;){if(a=t[Mt])return a;t=_r(t)}return e}t=a,a=t.parentNode}return null}function xa(t){if(t=t[Mt]||t[Ha]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function Rl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(E(33))}function Ba(t){var e=t[of];return e||(e=t[of]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function gt(t){t[bl]=!0}var rf=new Set,df={};function ya(t,e){qa(t,e),qa(t+"Capture",e)}function qa(t,e){for(df[t]=e,t=0;t<e.length;t++)rf.add(e[t])}var Td=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mf={},hf={};function bd(t){return Ln.call(hf,t)?!0:Ln.call(mf,t)?!1:Td.test(t)?hf[t]=!0:(mf[t]=!0,!1)}function Ru(t,e,a){if(bd(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var l=e.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+a)}}function Au(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+a)}}function Oe(t,e,a,l){if(l===null)t.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,""+l)}}var wn,yf;function Ya(t){if(wn===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);wn=e&&e[1]||"",yf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+wn+t+yf}var Xn=!1;function Vn(t,e){if(!t||Xn)return"";Xn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(e){var T=function(){throw Error()};if(Object.defineProperty(T.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(T,[])}catch(y){var h=y}Reflect.construct(t,[],T)}else{try{T.call()}catch(y){h=y}t.call(T.prototype)}}else{try{throw Error()}catch(y){h=y}(T=t())&&typeof T.catch=="function"&&T.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=l.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(u=l=0;l<f.length&&!f[l].includes("DetermineComponentFrameRoot");)l++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(l===f.length||u===m.length)for(l=f.length-1,u=m.length-1;1<=l&&0<=u&&f[l]!==m[u];)u--;for(;1<=l&&0<=u;l--,u--)if(f[l]!==m[u]){if(l!==1||u!==1)do if(l--,u--,0>u||f[l]!==m[u]){var v=`
`+f[l].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=l&&0<=u);break}}}finally{Xn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ya(a):""}function Rd(t){switch(t.tag){case 26:case 27:case 5:return Ya(t.type);case 16:return Ya("Lazy");case 13:return Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 15:return Vn(t.type,!1);case 11:return Vn(t.type.render,!1);case 1:return Vn(t.type,!0);case 31:return Ya("Activity");default:return""}}function Ef(t){try{var e="";do e+=Rd(t),t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function ae(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ad(t){var e=vf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),l=""+t[e];if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return u.call(this)},set:function(i){l=""+i,n.call(this,i)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pu(t){t._valueTracker||(t._valueTracker=Ad(t))}function Sf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),l="";return t&&(l=vf(t)?t.checked?"true":"false":t.value),t=l,t!==a?(e.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pd=/[\n"\\]/g;function le(t){return t.replace(pd,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Zn(t,e,a,l,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),e!=null?i==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ae(e)):t.value!==""+ae(e)&&(t.value=""+ae(e)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),e!=null?Kn(t,i,ae(e)):a!=null?Kn(t,i,ae(a)):l!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+ae(c):t.removeAttribute("name")}function gf(t,e,a,l,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),e!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||e!=null))return;a=a!=null?""+ae(a):"",e=e!=null?""+ae(e):a,c||e===t.value||(t.value=e),t.defaultValue=e}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=c?t.checked:!!l,t.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i)}function Kn(t,e,a){e==="number"&&Ou(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ja(t,e,a,l){if(t=t.options,e){e={};for(var u=0;u<a.length;u++)e["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=e.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ae(a),e=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,l&&(t[u].defaultSelected=!0);return}e!==null||t[u].disabled||(e=t[u])}e!==null&&(e.selected=!0)}}function Tf(t,e,a){if(e!=null&&(e=""+ae(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+ae(a):""}function bf(t,e,a,l){if(e==null){if(l!=null){if(a!=null)throw Error(E(92));if(_t(l)){if(1<l.length)throw Error(E(93));l=l[0]}a=l}a==null&&(a=""),e=a}a=ae(e),t.defaultValue=a,l=t.textContent,l===a&&l!==""&&l!==null&&(t.value=l)}function Ga(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Od=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rf(t,e,a){var l=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":l?t.setProperty(e,a):typeof a!="number"||a===0||Od.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Af(t,e,a){if(e!=null&&typeof e!="object")throw Error(E(62));if(t=t.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||e!=null&&e.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var u in e)l=e[u],e.hasOwnProperty(u)&&a[u]!==l&&Rf(t,u,l)}else for(var n in e)e.hasOwnProperty(n)&&Rf(t,n,e[n])}function Jn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nu(t){return Dd.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var kn=null;function Wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,wa=null;function pf(t){var e=xa(t);if(e&&(t=e.stateNode)){var a=t[Yt]||null;t:switch(t=e.stateNode,e.type){case"input":if(Zn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+le(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var l=a[e];if(l!==t&&l.form===t.form){var u=l[Yt]||null;if(!u)throw Error(E(90));Zn(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(e=0;e<a.length;e++)l=a[e],l.form===t.form&&Sf(l)}break t;case"textarea":Tf(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&ja(t,!!a.multiple,e,!1)}}}var Fn=!1;function Of(t,e,a){if(Fn)return t(e,a);Fn=!0;try{var l=t(e);return l}finally{if(Fn=!1,(Qa!==null||wa!==null)&&(dn(),Qa&&(e=Qa,t=wa,wa=Qa=null,pf(e),t)))for(e=0;e<t.length;e++)pf(t[e])}}function Al(t,e){var a=t.stateNode;if(a===null)return null;var l=a[Yt]||null;if(l===null)return null;a=l[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(E(231,e,typeof a));return a}var Ne=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),In=!1;if(Ne)try{var pl={};Object.defineProperty(pl,"passive",{get:function(){In=!0}}),window.addEventListener("test",pl,pl),window.removeEventListener("test",pl,pl)}catch{In=!1}var Xe=null,$n=null,Du=null;function Nf(){if(Du)return Du;var t,e=$n,a=e.length,l,u="value"in Xe?Xe.value:Xe.textContent,n=u.length;for(t=0;t<a&&e[t]===u[t];t++);var i=a-t;for(l=1;l<=i&&e[a-l]===u[n-l];l++);return Du=u.slice(t,1<l?1-l:void 0)}function _u(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Mu(){return!0}function Df(){return!1}function jt(t){function e(a,l,u,n,i){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Mu:Df,this.isPropagationStopped=Df,this}return M(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mu)},persist:function(){},isPersistent:Mu}),e}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=jt(Ea),Ol=M({},Ea,{view:0,detail:0}),_d=jt(Ol),Pn,ti,Nl,zu=M({},Ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Nl&&(Nl&&t.type==="mousemove"?(Pn=t.screenX-Nl.screenX,ti=t.screenY-Nl.screenY):ti=Pn=0,Nl=t),Pn)},movementY:function(t){return"movementY"in t?t.movementY:ti}}),_f=jt(zu),Md=M({},zu,{dataTransfer:0}),Ud=jt(Md),zd=M({},Ol,{relatedTarget:0}),ei=jt(zd),Cd=M({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=jt(Cd),Ld=M({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xd=jt(Ld),Bd=M({},Ea,{data:0}),Mf=jt(Bd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gd(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jd[t])?!!e[t]:!1}function ai(){return Gd}var Qd=M({},Ol,{key:function(t){if(t.key){var e=qd[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(t){return t.type==="keypress"?_u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wd=jt(Qd),Xd=M({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=jt(Xd),Vd=M({},Ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),Zd=jt(Vd),Kd=M({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jd=jt(Kd),kd=M({},zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=jt(kd),Fd=M({},Ea,{newState:0,oldState:0}),Id=jt(Fd),$d=[9,13,27,32],li=Ne&&"CompositionEvent"in window,Dl=null;Ne&&"documentMode"in document&&(Dl=document.documentMode);var Pd=Ne&&"TextEvent"in window&&!Dl,zf=Ne&&(!li||Dl&&8<Dl&&11>=Dl),Cf=" ",Hf=!1;function Lf(t,e){switch(t){case"keyup":return $d.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xa=!1;function tm(t,e){switch(t){case"compositionend":return xf(e);case"keypress":return e.which!==32?null:(Hf=!0,Cf);case"textInput":return t=e.data,t===Cf&&Hf?null:t;default:return null}}function em(t,e){if(Xa)return t==="compositionend"||!li&&Lf(t,e)?(t=Nf(),Du=$n=Xe=null,Xa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zf&&e.locale!=="ko"?null:e.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!am[t.type]:e==="textarea"}function qf(t,e,a,l){Qa?wa?wa.push(l):wa=[l]:Qa=l,e=Sn(e,"onChange"),0<e.length&&(a=new Uu("onChange","change",null,a,l),t.push({event:a,listeners:e}))}var _l=null,Ml=null;function lm(t){Sr(t,0)}function Cu(t){var e=Rl(t);if(Sf(e))return t}function Yf(t,e){if(t==="change")return e}var jf=!1;if(Ne){var ui;if(Ne){var ni="oninput"in document;if(!ni){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),ni=typeof Gf.oninput=="function"}ui=ni}else ui=!1;jf=ui&&(!document.documentMode||9<document.documentMode)}function Qf(){_l&&(_l.detachEvent("onpropertychange",wf),Ml=_l=null)}function wf(t){if(t.propertyName==="value"&&Cu(Ml)){var e=[];qf(e,Ml,t,Wn(t)),Of(lm,e)}}function um(t,e,a){t==="focusin"?(Qf(),_l=e,Ml=a,_l.attachEvent("onpropertychange",wf)):t==="focusout"&&Qf()}function nm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(Ml)}function im(t,e){if(t==="click")return Cu(e)}function cm(t,e){if(t==="input"||t==="change")return Cu(e)}function fm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wt=typeof Object.is=="function"?Object.is:fm;function Ul(t,e){if(Wt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),l=Object.keys(e);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!Ln.call(e,u)||!Wt(t[u],e[u]))return!1}return!0}function Xf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,e){var a=Xf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=e&&l>=e)return{node:a,offset:e-t};t=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xf(a)}}function Zf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ou(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Ou(t.document)}return e}function ii(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var sm=Ne&&"documentMode"in document&&11>=document.documentMode,Va=null,ci=null,zl=null,fi=!1;function Jf(t,e,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fi||Va==null||Va!==Ou(l)||(l=Va,"selectionStart"in l&&ii(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),zl&&Ul(zl,l)||(zl=l,l=Sn(ci,"onSelect"),0<l.length&&(e=new Uu("onSelect","select",null,e,a),t.push({event:e,listeners:l}),e.target=Va)))}function va(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var Za={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},si={},kf={};Ne&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function Sa(t){if(si[t])return si[t];if(!Za[t])return t;var e=Za[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in kf)return si[t]=e[a];return t}var Wf=Sa("animationend"),Ff=Sa("animationiteration"),If=Sa("animationstart"),om=Sa("transitionrun"),rm=Sa("transitionstart"),dm=Sa("transitioncancel"),$f=Sa("transitionend"),Pf=new Map,oi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oi.push("scrollEnd");function me(t,e){Pf.set(t,e),ya(e,[t])}var ts=new WeakMap;function ue(t,e){if(typeof t=="object"&&t!==null){var a=ts.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Ef(e)},ts.set(t,e),e)}return{value:t,source:e,stack:Ef(e)}}var ne=[],Ka=0,ri=0;function Hu(){for(var t=Ka,e=ri=Ka=0;e<t;){var a=ne[e];ne[e++]=null;var l=ne[e];ne[e++]=null;var u=ne[e];ne[e++]=null;var n=ne[e];if(ne[e++]=null,l!==null&&u!==null){var i=l.pending;i===null?u.next=u:(u.next=i.next,i.next=u),l.pending=u}n!==0&&es(a,u,n)}}function Lu(t,e,a,l){ne[Ka++]=t,ne[Ka++]=e,ne[Ka++]=a,ne[Ka++]=l,ri|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function di(t,e,a,l){return Lu(t,e,a,l),xu(t)}function Ja(t,e){return Lu(t,null,null,e),xu(t)}function es(t,e,a){t.lanes|=a;var l=t.alternate;l!==null&&(l.lanes|=a);for(var u=!1,n=t.return;n!==null;)n.childLanes|=a,l=n.alternate,l!==null&&(l.childLanes|=a),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&e!==null&&(u=31-kt(a),t=n.hiddenUpdates,l=t[u],l===null?t[u]=[e]:l.push(e),e.lane=a|536870912),n):null}function xu(t){if(50<au)throw au=0,Sc=null,Error(E(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var ka={};function mm(t,e,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,e,a,l){return new mm(t,e,a,l)}function mi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function De(t,e){var a=t.alternate;return a===null?(a=Ft(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function as(t,e){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Bu(t,e,a,l,u,n){var i=0;if(l=t,typeof t=="function")mi(t)&&(i=1);else if(typeof t=="string")i=y0(t,a,z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ee:return t=Ft(31,a,e,u),t.elementType=Ee,t.lanes=n,t;case Lt:return ga(a.children,u,n,e);case re:i=8,u|=24;break;case qt:return t=Ft(12,a,e,u|2),t.elementType=qt,t.lanes=n,t;case V:return t=Ft(13,a,e,u),t.elementType=V,t.lanes=n,t;case Xt:return t=Ft(19,a,e,u),t.elementType=Xt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ra:case Nt:i=10;break t;case Ae:i=9;break t;case de:i=11;break t;case Vt:i=14;break t;case Zt:i=16,l=null;break t}i=29,a=Error(E(130,t===null?"null":typeof t,"")),l=null}return e=Ft(i,a,e,u),e.elementType=t,e.type=l,e.lanes=n,e}function ga(t,e,a,l){return t=Ft(7,t,l,e),t.lanes=a,t}function hi(t,e,a){return t=Ft(6,t,null,e),t.lanes=a,t}function yi(t,e,a){return e=Ft(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Wa=[],Fa=0,qu=null,Yu=0,ie=[],ce=0,Ta=null,_e=1,Me="";function ba(t,e){Wa[Fa++]=Yu,Wa[Fa++]=qu,qu=t,Yu=e}function ls(t,e,a){ie[ce++]=_e,ie[ce++]=Me,ie[ce++]=Ta,Ta=t;var l=_e;t=Me;var u=32-kt(l)-1;l&=~(1<<u),a+=1;var n=32-kt(e)+u;if(30<n){var i=u-u%5;n=(l&(1<<i)-1).toString(32),l>>=i,u-=i,_e=1<<32-kt(e)+u|a<<u|l,Me=n+t}else _e=1<<n|a<<u|l,Me=t}function Ei(t){t.return!==null&&(ba(t,1),ls(t,1,0))}function vi(t){for(;t===qu;)qu=Wa[--Fa],Wa[Fa]=null,Yu=Wa[--Fa],Wa[Fa]=null;for(;t===Ta;)Ta=ie[--ce],ie[ce]=null,Me=ie[--ce],ie[ce]=null,_e=ie[--ce],ie[ce]=null}var xt=null,ot=null,k=!1,Ra=null,Se=!1,Si=Error(E(519));function Aa(t){var e=Error(E(418,""));throw Ll(ue(e,t)),Si}function us(t){var e=t.stateNode,a=t.type,l=t.memoizedProps;switch(e[Mt]=t,e[Yt]=l,a){case"dialog":w("cancel",e),w("close",e);break;case"iframe":case"object":case"embed":w("load",e);break;case"video":case"audio":for(a=0;a<uu.length;a++)w(uu[a],e);break;case"source":w("error",e);break;case"img":case"image":case"link":w("error",e),w("load",e);break;case"details":w("toggle",e);break;case"input":w("invalid",e),gf(e,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),pu(e);break;case"select":w("invalid",e);break;case"textarea":w("invalid",e),bf(e,l.value,l.defaultValue,l.children),pu(e)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||l.suppressHydrationWarning===!0||Rr(e.textContent,a)?(l.popover!=null&&(w("beforetoggle",e),w("toggle",e)),l.onScroll!=null&&w("scroll",e),l.onScrollEnd!=null&&w("scrollend",e),l.onClick!=null&&(e.onclick=gn),e=!0):e=!1,e||Aa(t)}function ns(t){for(xt=t.return;xt;)switch(xt.tag){case 5:case 13:Se=!1;return;case 27:case 3:Se=!0;return;default:xt=xt.return}}function Cl(t){if(t!==xt)return!1;if(!k)return ns(t),k=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lc(t.type,t.memoizedProps)),a=!a),a&&ot&&Aa(t),ns(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(e===0){ot=ye(t.nextSibling);break t}e--}else a!=="$"&&a!=="$!"&&a!=="$?"||e++;t=t.nextSibling}ot=null}}else e===27?(e=ot,na(t.type)?(t=Yc,Yc=null,ot=t):ot=e):ot=xt?ye(t.stateNode.nextSibling):null;return!0}function Hl(){ot=xt=null,k=!1}function is(){var t=Ra;return t!==null&&(wt===null?wt=t:wt.push.apply(wt,t),Ra=null),t}function Ll(t){Ra===null?Ra=[t]:Ra.push(t)}var gi=b(null),pa=null,Ue=null;function Ve(t,e,a){A(gi,e._currentValue),e._currentValue=a}function ze(t){t._currentValue=gi.current,O(gi)}function Ti(t,e,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,l!==null&&(l.childLanes|=e)):l!==null&&(l.childLanes&e)!==e&&(l.childLanes|=e),t===a)break;t=t.return}}function bi(t,e,a,l){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<e.length;f++)if(c.context===e[f]){n.lanes|=a,c=n.alternate,c!==null&&(c.lanes|=a),Ti(n.return,a,t),l||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(E(341));i.lanes|=a,n=i.alternate,n!==null&&(n.lanes|=a),Ti(i,a,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function xl(t,e,a,l){t=null;for(var u=e,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(E(387));if(i=i.memoizedProps,i!==null){var c=u.type;Wt(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===Kt.current){if(i=u.alternate,i===null)throw Error(E(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ou):t=[ou])}u=u.return}t!==null&&bi(e,t,a,l),e.flags|=262144}function ju(t){for(t=t.firstContext;t!==null;){if(!Wt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Oa(t){pa=t,Ue=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ut(t){return cs(pa,t)}function Gu(t,e){return pa===null&&Oa(t),cs(t,e)}function cs(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Ue===null){if(t===null)throw Error(E(308));Ue=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ue=Ue.next=e;return a}var hm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,l){t.push(l)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},ym=D.unstable_scheduleCallback,Em=D.unstable_NormalPriority,vt={$$typeof:Nt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ri(){return{controller:new hm,data:new Map,refCount:0}}function Bl(t){t.refCount--,t.refCount===0&&ym(Em,function(){t.controller.abort()})}var ql=null,Ai=0,Ia=0,$a=null;function vm(t,e){if(ql===null){var a=ql=[];Ai=0,Ia=Oc(),$a={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Ai++,e.then(fs,fs),e}function fs(){if(--Ai===0&&ql!==null){$a!==null&&($a.status="fulfilled");var t=ql;ql=null,Ia=0,$a=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Sm(t,e){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){l.status="fulfilled",l.value=e;for(var u=0;u<a.length;u++)(0,a[u])(e)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var ss=S.S;S.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&vm(t,e),ss!==null&&ss(t,e)};var Na=b(null);function pi(){var t=Na.current;return t!==null?t:ut.pooledCache}function Qu(t,e){e===null?A(Na,Na.current):A(Na,e.pool)}function os(){var t=pi();return t===null?null:{parent:vt._currentValue,pool:t}}var Yl=Error(E(460)),rs=Error(E(474)),wu=Error(E(542)),Oi={then:function(){}};function ds(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xu(){}function ms(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Xu,Xu),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ys(t),t;default:if(typeof e.status=="string")e.then(Xu,Xu);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(E(482));t=e,t.status="pending",t.then(function(l){if(e.status==="pending"){var u=e;u.status="fulfilled",u.value=l}},function(l){if(e.status==="pending"){var u=e;u.status="rejected",u.reason=l}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,ys(t),t}throw jl=e,Yl}}var jl=null;function hs(){if(jl===null)throw Error(E(459));var t=jl;return jl=null,t}function ys(t){if(t===Yl||t===wu)throw Error(E(483))}var Ze=!1;function Ni(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Di(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ke(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Je(t,e,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(F&2)!==0){var u=l.pending;return u===null?e.next=e:(e.next=u.next,u.next=e),l.pending=e,e=xu(t),es(t,null,a),e}return Lu(t,l,e,a),xu(t)}function Gl(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ff(t,a)}}function _i(t,e){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,a=a.next}while(a!==null);n===null?u=n=e:n=n.next=e}else u=n=e;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:l.shared,callbacks:l.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Mi=!1;function Ql(){if(Mi){var t=$a;if(t!==null)throw t}}function wl(t,e,a,l){Mi=!1;var u=t.updateQueue;Ze=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?n=m:i.next=m,i=f;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==i&&(c===null?v.firstBaseUpdate=m:c.next=m,v.lastBaseUpdate=f))}if(n!==null){var T=u.baseState;i=0,v=m=f=null,c=n;do{var h=c.lane&-536870913,y=h!==c.lane;if(y?(X&h)===h:(l&h)===h){h!==0&&h===Ia&&(Mi=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var B=t,C=c;h=e;var tt=a;switch(C.tag){case 1:if(B=C.payload,typeof B=="function"){T=B.call(tt,T,h);break t}T=B;break t;case 3:B.flags=B.flags&-65537|128;case 0:if(B=C.payload,h=typeof B=="function"?B.call(tt,T,h):B,h==null)break t;T=M({},T,h);break t;case 2:Ze=!0}}h=c.callback,h!==null&&(t.flags|=64,y&&(t.flags|=8192),y=u.callbacks,y===null?u.callbacks=[h]:y.push(h))}else y={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(m=v=y,f=T):v=v.next=y,i|=h;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;y=c,c=y.next,y.next=null,u.lastBaseUpdate=y,u.shared.pending=null}}while(!0);v===null&&(f=T),u.baseState=f,u.firstBaseUpdate=m,u.lastBaseUpdate=v,n===null&&(u.shared.lanes=0),ea|=i,t.lanes=i,t.memoizedState=T}}function Es(t,e){if(typeof t!="function")throw Error(E(191,t));t.call(e)}function vs(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Es(a[t],e)}var Pa=b(null),Vu=b(0);function Ss(t,e){t=Ye,A(Vu,t),A(Pa,e),Ye=t|e.baseLanes}function Ui(){A(Vu,Ye),A(Pa,Pa.current)}function zi(){Ye=Vu.current,O(Pa),O(Vu)}var ke=0,j=null,$=null,yt=null,Zu=!1,tl=!1,Da=!1,Ku=0,Xl=0,el=null,gm=0;function mt(){throw Error(E(321))}function Ci(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!Wt(t[a],e[a]))return!1;return!0}function Hi(t,e,a,l,u,n){return ke=n,j=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,S.H=t===null||t.memoizedState===null?eo:ao,Da=!1,n=a(l,u),Da=!1,tl&&(n=Ts(e,a,l,u)),gs(t),n}function gs(t){S.H=$u;var e=$!==null&&$.next!==null;if(ke=0,yt=$=j=null,Zu=!1,Xl=0,el=null,e)throw Error(E(300));t===null||Tt||(t=t.dependencies,t!==null&&ju(t)&&(Tt=!0))}function Ts(t,e,a,l){j=t;var u=0;do{if(tl&&(el=null),Xl=0,tl=!1,25<=u)throw Error(E(301));if(u+=1,yt=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=Nm,n=e(a,l)}while(tl);return n}function Tm(){var t=S.H,e=t.useState()[0];return e=typeof e.then=="function"?Vl(e):e,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(j.flags|=1024),e}function Li(){var t=Ku!==0;return Ku=0,t}function xi(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Bi(t){if(Zu){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Zu=!1}ke=0,yt=$=j=null,tl=!1,Xl=Ku=0,el=null}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?j.memoizedState=yt=t:yt=yt.next=t,yt}function Et(){if($===null){var t=j.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var e=yt===null?j.memoizedState:yt.next;if(e!==null)yt=e,$=t;else{if(t===null)throw j.alternate===null?Error(E(467)):Error(E(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},yt===null?j.memoizedState=yt=t:yt=yt.next=t}return yt}function qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Vl(t){var e=Xl;return Xl+=1,el===null&&(el=[]),t=ms(el,t,e),e=j,(yt===null?e.memoizedState:yt.next)===null&&(e=e.alternate,S.H=e===null||e.memoizedState===null?eo:ao),t}function Ju(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Vl(t);if(t.$$typeof===Nt)return Ut(t)}throw Error(E(438,String(t)))}function Yi(t){var e=null,a=j.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var l=j.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(e={data:l.data.map(function(u){return u.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=qi(),j.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),l=0;l<t;l++)a[l]=Ca;return e.index++,a}function Ce(t,e){return typeof e=="function"?e(t):e}function ku(t){var e=Et();return ji(e,$,t)}function ji(t,e,a){var l=t.queue;if(l===null)throw Error(E(311));l.lastRenderedReducer=a;var u=t.baseQueue,n=l.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}e.baseQueue=u=n,l.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{e=u.next;var c=i=null,f=null,m=e,v=!1;do{var T=m.lane&-536870913;if(T!==m.lane?(X&T)===T:(ke&T)===T){var h=m.revertLane;if(h===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),T===Ia&&(v=!0);else if((ke&h)===h){m=m.next,h===Ia&&(v=!0);continue}else T={lane:0,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=T,i=n):f=f.next=T,j.lanes|=h,ea|=h;T=m.action,Da&&a(n,T),n=m.hasEagerState?m.eagerState:a(n,T)}else h={lane:T,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=h,i=n):f=f.next=h,j.lanes|=T,ea|=T;m=m.next}while(m!==null&&m!==e);if(f===null?i=n:f.next=c,!Wt(n,t.memoizedState)&&(Tt=!0,v&&(a=$a,a!==null)))throw a;t.memoizedState=n,t.baseState=i,t.baseQueue=f,l.lastRenderedState=n}return u===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function Gi(t){var e=Et(),a=e.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=t;var l=a.dispatch,u=a.pending,n=e.memoizedState;if(u!==null){a.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);Wt(n,e.memoizedState)||(Tt=!0),e.memoizedState=n,e.baseQueue===null&&(e.baseState=n),a.lastRenderedState=n}return[n,l]}function bs(t,e,a){var l=j,u=Et(),n=k;if(n){if(a===void 0)throw Error(E(407));a=a()}else a=e();var i=!Wt(($||u).memoizedState,a);i&&(u.memoizedState=a,Tt=!0),u=u.queue;var c=ps.bind(null,l,u,t);if(Zl(2048,8,c,[t]),u.getSnapshot!==e||i||yt!==null&&yt.memoizedState.tag&1){if(l.flags|=2048,al(9,Wu(),As.bind(null,l,u,a,e),null),ut===null)throw Error(E(349));n||(ke&124)!==0||Rs(l,e,a)}return a}function Rs(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=j.updateQueue,e===null?(e=qi(),j.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function As(t,e,a,l){e.value=a,e.getSnapshot=l,Os(e)&&Ns(t)}function ps(t,e,a){return a(function(){Os(e)&&Ns(t)})}function Os(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!Wt(t,a)}catch{return!0}}function Ns(t){var e=Ja(t,2);e!==null&&ee(e,t,2)}function Qi(t){var e=Gt();if(typeof t=="function"){var a=t;if(t=a(),Da){Qe(!0);try{a()}finally{Qe(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ce,lastRenderedState:t},e}function Ds(t,e,a,l){return t.baseState=a,ji(t,$,typeof l=="function"?l:Ce)}function bm(t,e,a,l,u){if(Iu(t))throw Error(E(485));if(t=e.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?a(!0):n.isTransition=!1,l(n),a=e.pending,a===null?(n.next=e.pending=n,_s(e,n)):(n.next=a.next,e.pending=a.next=n)}}function _s(t,e){var a=e.action,l=e.payload,u=t.state;if(e.isTransition){var n=S.T,i={};S.T=i;try{var c=a(u,l),f=S.S;f!==null&&f(i,c),Ms(t,e,c)}catch(m){wi(t,e,m)}finally{S.T=n}}else try{n=a(u,l),Ms(t,e,n)}catch(m){wi(t,e,m)}}function Ms(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Us(t,e,l)},function(l){return wi(t,e,l)}):Us(t,e,a)}function Us(t,e,a){e.status="fulfilled",e.value=a,zs(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,_s(t,a)))}function wi(t,e,a){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do e.status="rejected",e.reason=a,zs(e),e=e.next;while(e!==l)}t.action=null}function zs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Cs(t,e){return e}function Hs(t,e){if(k){var a=ut.formState;if(a!==null){t:{var l=j;if(k){if(ot){e:{for(var u=ot,n=Se;u.nodeType!==8;){if(!n){u=null;break e}if(u=ye(u.nextSibling),u===null){u=null;break e}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){ot=ye(u.nextSibling),l=u.data==="F!";break t}}Aa(l)}l=!1}l&&(e=a[0])}}return a=Gt(),a.memoizedState=a.baseState=e,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:e},a.queue=l,a=$s.bind(null,j,l),l.dispatch=a,l=Qi(!1),n=Ji.bind(null,j,!1,l.queue),l=Gt(),u={state:e,dispatch:null,action:t,pending:null},l.queue=u,a=bm.bind(null,j,u,n,a),u.dispatch=a,l.memoizedState=t,[e,a,!1]}function Ls(t){var e=Et();return xs(e,$,t)}function xs(t,e,a){if(e=ji(t,e,Cs)[0],t=ku(Ce)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var l=Vl(e)}catch(i){throw i===Yl?wu:i}else l=e;e=Et();var u=e.queue,n=u.dispatch;return a!==e.memoizedState&&(j.flags|=2048,al(9,Wu(),Rm.bind(null,u,a),null)),[l,n,t]}function Rm(t,e){t.action=e}function Bs(t){var e=Et(),a=$;if(a!==null)return xs(e,a,t);Et(),e=e.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=t,[e,l,!1]}function al(t,e,a,l){return t={tag:t,create:a,deps:l,inst:e,next:null},e=j.updateQueue,e===null&&(e=qi(),j.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,e.lastEffect=t),t}function Wu(){return{destroy:void 0,resource:void 0}}function qs(){return Et().memoizedState}function Fu(t,e,a,l){var u=Gt();l=l===void 0?null:l,j.flags|=t,u.memoizedState=al(1|e,Wu(),a,l)}function Zl(t,e,a,l){var u=Et();l=l===void 0?null:l;var n=u.memoizedState.inst;$!==null&&l!==null&&Ci(l,$.memoizedState.deps)?u.memoizedState=al(e,n,a,l):(j.flags|=t,u.memoizedState=al(1|e,n,a,l))}function Ys(t,e){Fu(8390656,8,t,e)}function js(t,e){Zl(2048,8,t,e)}function Gs(t,e){return Zl(4,2,t,e)}function Qs(t,e){return Zl(4,4,t,e)}function ws(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xs(t,e,a){a=a!=null?a.concat([t]):null,Zl(4,4,ws.bind(null,e,t),a)}function Xi(){}function Vs(t,e){var a=Et();e=e===void 0?null:e;var l=a.memoizedState;return e!==null&&Ci(e,l[1])?l[0]:(a.memoizedState=[t,e],t)}function Zs(t,e){var a=Et();e=e===void 0?null:e;var l=a.memoizedState;if(e!==null&&Ci(e,l[1]))return l[0];if(l=t(),Da){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[l,e],l}function Vi(t,e,a){return a===void 0||(ke&1073741824)!==0?t.memoizedState=e:(t.memoizedState=a,t=Wo(),j.lanes|=t,ea|=t,a)}function Ks(t,e,a,l){return Wt(a,e)?a:Pa.current!==null?(t=Vi(t,a,l),Wt(t,e)||(Tt=!0),t):(ke&42)===0?(Tt=!0,t.memoizedState=a):(t=Wo(),j.lanes|=t,ea|=t,e)}function Js(t,e,a,l,u){var n=p.p;p.p=n!==0&&8>n?n:8;var i=S.T,c={};S.T=c,Ji(t,!1,e,a);try{var f=u(),m=S.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var v=Sm(f,l);Kl(t,e,v,te(t))}else Kl(t,e,l,te(t))}catch(T){Kl(t,e,{then:function(){},status:"rejected",reason:T},te())}finally{p.p=n,S.T=i}}function Am(){}function Zi(t,e,a,l){if(t.tag!==5)throw Error(E(476));var u=ks(t).queue;Js(t,u,e,x,a===null?Am:function(){return Ws(t),a(l)})}function ks(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:x,baseState:x,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ce,lastRenderedState:x},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ce,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Ws(t){var e=ks(t).next.queue;Kl(t,e,{},te())}function Ki(){return Ut(ou)}function Fs(){return Et().memoizedState}function Is(){return Et().memoizedState}function pm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=te();t=Ke(a);var l=Je(e,t,a);l!==null&&(ee(l,e,a),Gl(l,e,a)),e={cache:Ri()},t.payload=e;return}e=e.return}}function Om(t,e,a){var l=te();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Iu(t)?Ps(e,a):(a=di(t,e,a,l),a!==null&&(ee(a,t,l),to(a,e,l)))}function $s(t,e,a){var l=te();Kl(t,e,a,l)}function Kl(t,e,a,l){var u={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Iu(t))Ps(e,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=e.lastRenderedReducer,n!==null))try{var i=e.lastRenderedState,c=n(i,a);if(u.hasEagerState=!0,u.eagerState=c,Wt(c,i))return Lu(t,e,u,0),ut===null&&Hu(),!1}catch{}finally{}if(a=di(t,e,u,l),a!==null)return ee(a,t,l),to(a,e,l),!0}return!1}function Ji(t,e,a,l){if(l={lane:2,revertLane:Oc(),action:l,hasEagerState:!1,eagerState:null,next:null},Iu(t)){if(e)throw Error(E(479))}else e=di(t,a,l,2),e!==null&&ee(e,t,2)}function Iu(t){var e=t.alternate;return t===j||e!==null&&e===j}function Ps(t,e){tl=Zu=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function to(t,e,a){if((a&4194048)!==0){var l=e.lanes;l&=t.pendingLanes,a|=l,e.lanes=a,ff(t,a)}}var $u={readContext:Ut,use:Ju,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt},eo={readContext:Ut,use:Ju,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Ut,useEffect:Ys,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,Fu(4194308,4,ws.bind(null,e,t),a)},useLayoutEffect:function(t,e){return Fu(4194308,4,t,e)},useInsertionEffect:function(t,e){Fu(4,2,t,e)},useMemo:function(t,e){var a=Gt();e=e===void 0?null:e;var l=t();if(Da){Qe(!0);try{t()}finally{Qe(!1)}}return a.memoizedState=[l,e],l},useReducer:function(t,e,a){var l=Gt();if(a!==void 0){var u=a(e);if(Da){Qe(!0);try{a(e)}finally{Qe(!1)}}}else u=e;return l.memoizedState=l.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},l.queue=t,t=t.dispatch=Om.bind(null,j,t),[l.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:function(t){t=Qi(t);var e=t.queue,a=$s.bind(null,j,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:Xi,useDeferredValue:function(t,e){var a=Gt();return Vi(a,t,e)},useTransition:function(){var t=Qi(!1);return t=Js.bind(null,j,t.queue,!0,!1),Gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var l=j,u=Gt();if(k){if(a===void 0)throw Error(E(407));a=a()}else{if(a=e(),ut===null)throw Error(E(349));(X&124)!==0||Rs(l,e,a)}u.memoizedState=a;var n={value:a,getSnapshot:e};return u.queue=n,Ys(ps.bind(null,l,n,t),[t]),l.flags|=2048,al(9,Wu(),As.bind(null,l,n,a,e),null),a},useId:function(){var t=Gt(),e=ut.identifierPrefix;if(k){var a=Me,l=_e;a=(l&~(1<<32-kt(l)-1)).toString(32)+a,e="«"+e+"R"+a,a=Ku++,0<a&&(e+="H"+a.toString(32)),e+="»"}else a=gm++,e="«"+e+"r"+a.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:Ki,useFormState:Hs,useActionState:Hs,useOptimistic:function(t){var e=Gt();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Ji.bind(null,j,!0,a),a.dispatch=e,[t,e]},useMemoCache:Yi,useCacheRefresh:function(){return Gt().memoizedState=pm.bind(null,j)}},ao={readContext:Ut,use:Ju,useCallback:Vs,useContext:Ut,useEffect:js,useImperativeHandle:Xs,useInsertionEffect:Gs,useLayoutEffect:Qs,useMemo:Zs,useReducer:ku,useRef:qs,useState:function(){return ku(Ce)},useDebugValue:Xi,useDeferredValue:function(t,e){var a=Et();return Ks(a,$.memoizedState,t,e)},useTransition:function(){var t=ku(Ce)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Vl(t),e]},useSyncExternalStore:bs,useId:Fs,useHostTransitionStatus:Ki,useFormState:Ls,useActionState:Ls,useOptimistic:function(t,e){var a=Et();return Ds(a,$,t,e)},useMemoCache:Yi,useCacheRefresh:Is},Nm={readContext:Ut,use:Ju,useCallback:Vs,useContext:Ut,useEffect:js,useImperativeHandle:Xs,useInsertionEffect:Gs,useLayoutEffect:Qs,useMemo:Zs,useReducer:Gi,useRef:qs,useState:function(){return Gi(Ce)},useDebugValue:Xi,useDeferredValue:function(t,e){var a=Et();return $===null?Vi(a,t,e):Ks(a,$.memoizedState,t,e)},useTransition:function(){var t=Gi(Ce)[0],e=Et().memoizedState;return[typeof t=="boolean"?t:Vl(t),e]},useSyncExternalStore:bs,useId:Fs,useHostTransitionStatus:Ki,useFormState:Bs,useActionState:Bs,useOptimistic:function(t,e){var a=Et();return $!==null?Ds(a,$,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yi,useCacheRefresh:Is},ll=null,Jl=0;function Pu(t){var e=Jl;return Jl+=1,ll===null&&(ll=[]),ms(ll,t,e)}function kl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function tn(t,e){throw e.$$typeof===nt?Error(E(525)):(t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function lo(t){var e=t._init;return e(t._payload)}function uo(t){function e(r,o){if(t){var d=r.deletions;d===null?(r.deletions=[o],r.flags|=16):d.push(o)}}function a(r,o){if(!t)return null;for(;o!==null;)e(r,o),o=o.sibling;return null}function l(r){for(var o=new Map;r!==null;)r.key!==null?o.set(r.key,r):o.set(r.index,r),r=r.sibling;return o}function u(r,o){return r=De(r,o),r.index=0,r.sibling=null,r}function n(r,o,d){return r.index=d,t?(d=r.alternate,d!==null?(d=d.index,d<o?(r.flags|=67108866,o):d):(r.flags|=67108866,o)):(r.flags|=1048576,o)}function i(r){return t&&r.alternate===null&&(r.flags|=67108866),r}function c(r,o,d,g){return o===null||o.tag!==6?(o=hi(d,r.mode,g),o.return=r,o):(o=u(o,d),o.return=r,o)}function f(r,o,d,g){var N=d.type;return N===Lt?v(r,o,d.props.children,g,d.key):o!==null&&(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&lo(N)===o.type)?(o=u(o,d.props),kl(o,d),o.return=r,o):(o=Bu(d.type,d.key,d.props,null,r.mode,g),kl(o,d),o.return=r,o)}function m(r,o,d,g){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=yi(d,r.mode,g),o.return=r,o):(o=u(o,d.children||[]),o.return=r,o)}function v(r,o,d,g,N){return o===null||o.tag!==7?(o=ga(d,r.mode,g,N),o.return=r,o):(o=u(o,d),o.return=r,o)}function T(r,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=hi(""+o,r.mode,d),o.return=r,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case lt:return d=Bu(o.type,o.key,o.props,null,r.mode,d),kl(d,o),d.return=r,d;case Ht:return o=yi(o,r.mode,d),o.return=r,o;case Zt:var g=o._init;return o=g(o._payload),T(r,o,d)}if(_t(o)||Dt(o))return o=ga(o,r.mode,d,null),o.return=r,o;if(typeof o.then=="function")return T(r,Pu(o),d);if(o.$$typeof===Nt)return T(r,Gu(r,o),d);tn(r,o)}return null}function h(r,o,d,g){var N=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return N!==null?null:c(r,o,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case lt:return d.key===N?f(r,o,d,g):null;case Ht:return d.key===N?m(r,o,d,g):null;case Zt:return N=d._init,d=N(d._payload),h(r,o,d,g)}if(_t(d)||Dt(d))return N!==null?null:v(r,o,d,g,null);if(typeof d.then=="function")return h(r,o,Pu(d),g);if(d.$$typeof===Nt)return h(r,o,Gu(r,d),g);tn(r,d)}return null}function y(r,o,d,g,N){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return r=r.get(d)||null,c(o,r,""+g,N);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case lt:return r=r.get(g.key===null?d:g.key)||null,f(o,r,g,N);case Ht:return r=r.get(g.key===null?d:g.key)||null,m(o,r,g,N);case Zt:var G=g._init;return g=G(g._payload),y(r,o,d,g,N)}if(_t(g)||Dt(g))return r=r.get(d)||null,v(o,r,g,N,null);if(typeof g.then=="function")return y(r,o,d,Pu(g),N);if(g.$$typeof===Nt)return y(r,o,d,Gu(o,g),N);tn(o,g)}return null}function B(r,o,d,g){for(var N=null,G=null,_=o,H=o=0,Rt=null;_!==null&&H<d.length;H++){_.index>H?(Rt=_,_=null):Rt=_.sibling;var K=h(r,_,d[H],g);if(K===null){_===null&&(_=Rt);break}t&&_&&K.alternate===null&&e(r,_),o=n(K,o,H),G===null?N=K:G.sibling=K,G=K,_=Rt}if(H===d.length)return a(r,_),k&&ba(r,H),N;if(_===null){for(;H<d.length;H++)_=T(r,d[H],g),_!==null&&(o=n(_,o,H),G===null?N=_:G.sibling=_,G=_);return k&&ba(r,H),N}for(_=l(_);H<d.length;H++)Rt=y(_,r,H,d[H],g),Rt!==null&&(t&&Rt.alternate!==null&&_.delete(Rt.key===null?H:Rt.key),o=n(Rt,o,H),G===null?N=Rt:G.sibling=Rt,G=Rt);return t&&_.forEach(function(oa){return e(r,oa)}),k&&ba(r,H),N}function C(r,o,d,g){if(d==null)throw Error(E(151));for(var N=null,G=null,_=o,H=o=0,Rt=null,K=d.next();_!==null&&!K.done;H++,K=d.next()){_.index>H?(Rt=_,_=null):Rt=_.sibling;var oa=h(r,_,K.value,g);if(oa===null){_===null&&(_=Rt);break}t&&_&&oa.alternate===null&&e(r,_),o=n(oa,o,H),G===null?N=oa:G.sibling=oa,G=oa,_=Rt}if(K.done)return a(r,_),k&&ba(r,H),N;if(_===null){for(;!K.done;H++,K=d.next())K=T(r,K.value,g),K!==null&&(o=n(K,o,H),G===null?N=K:G.sibling=K,G=K);return k&&ba(r,H),N}for(_=l(_);!K.done;H++,K=d.next())K=y(_,r,H,K.value,g),K!==null&&(t&&K.alternate!==null&&_.delete(K.key===null?H:K.key),o=n(K,o,H),G===null?N=K:G.sibling=K,G=K);return t&&_.forEach(function(D0){return e(r,D0)}),k&&ba(r,H),N}function tt(r,o,d,g){if(typeof d=="object"&&d!==null&&d.type===Lt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case lt:t:{for(var N=d.key;o!==null;){if(o.key===N){if(N=d.type,N===Lt){if(o.tag===7){a(r,o.sibling),g=u(o,d.props.children),g.return=r,r=g;break t}}else if(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&lo(N)===o.type){a(r,o.sibling),g=u(o,d.props),kl(g,d),g.return=r,r=g;break t}a(r,o);break}else e(r,o);o=o.sibling}d.type===Lt?(g=ga(d.props.children,r.mode,g,d.key),g.return=r,r=g):(g=Bu(d.type,d.key,d.props,null,r.mode,g),kl(g,d),g.return=r,r=g)}return i(r);case Ht:t:{for(N=d.key;o!==null;){if(o.key===N)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){a(r,o.sibling),g=u(o,d.children||[]),g.return=r,r=g;break t}else{a(r,o);break}else e(r,o);o=o.sibling}g=yi(d,r.mode,g),g.return=r,r=g}return i(r);case Zt:return N=d._init,d=N(d._payload),tt(r,o,d,g)}if(_t(d))return B(r,o,d,g);if(Dt(d)){if(N=Dt(d),typeof N!="function")throw Error(E(150));return d=N.call(d),C(r,o,d,g)}if(typeof d.then=="function")return tt(r,o,Pu(d),g);if(d.$$typeof===Nt)return tt(r,o,Gu(r,d),g);tn(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(a(r,o.sibling),g=u(o,d),g.return=r,r=g):(a(r,o),g=hi(d,r.mode,g),g.return=r,r=g),i(r)):a(r,o)}return function(r,o,d,g){try{Jl=0;var N=tt(r,o,d,g);return ll=null,N}catch(_){if(_===Yl||_===wu)throw _;var G=Ft(29,_,null,r.mode);return G.lanes=g,G.return=r,G}finally{}}}var ul=uo(!0),no=uo(!1),fe=b(null),ge=null;function We(t){var e=t.alternate;A(St,St.current&1),A(fe,t),ge===null&&(e===null||Pa.current!==null||e.memoizedState!==null)&&(ge=t)}function io(t){if(t.tag===22){if(A(St,St.current),A(fe,t),ge===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(ge=t)}}else Fe()}function Fe(){A(St,St.current),A(fe,fe.current)}function He(t){O(fe),ge===t&&(ge=null),O(St)}var St=b(0);function en(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||qc(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function ki(t,e,a,l){e=t.memoizedState,a=a(l,e),a=a==null?e:M({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wi={enqueueSetState:function(t,e,a){t=t._reactInternals;var l=te(),u=Ke(l);u.payload=e,a!=null&&(u.callback=a),e=Je(t,u,l),e!==null&&(ee(e,t,l),Gl(e,t,l))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var l=te(),u=Ke(l);u.tag=1,u.payload=e,a!=null&&(u.callback=a),e=Je(t,u,l),e!==null&&(ee(e,t,l),Gl(e,t,l))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=te(),l=Ke(a);l.tag=2,e!=null&&(l.callback=e),e=Je(t,l,a),e!==null&&(ee(e,t,a),Gl(e,t,a))}};function co(t,e,a,l,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,n,i):e.prototype&&e.prototype.isPureReactComponent?!Ul(a,l)||!Ul(u,n):!0}function fo(t,e,a,l){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,l),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,l),e.state!==t&&Wi.enqueueReplaceState(e,e.state,null)}function _a(t,e){var a=e;if("ref"in e){a={};for(var l in e)l!=="ref"&&(a[l]=e[l])}if(t=t.defaultProps){a===e&&(a=M({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var an=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function so(t){an(t)}function oo(t){console.error(t)}function ro(t){an(t)}function ln(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(l){setTimeout(function(){throw l})}}function mo(t,e,a){try{var l=t.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Fi(t,e,a){return a=Ke(a),a.tag=3,a.payload={element:null},a.callback=function(){ln(t,e)},a}function ho(t){return t=Ke(t),t.tag=3,t}function yo(t,e,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var n=l.value;t.payload=function(){return u(n)},t.callback=function(){mo(e,a,l)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){mo(e,a,l),typeof u!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Dm(t,e,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(e=a.alternate,e!==null&&xl(e,a,u,!0),a=fe.current,a!==null){switch(a.tag){case 13:return ge===null?Tc():a.alternate===null&&rt===0&&(rt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Oi?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([l]):e.add(l),Rc(t,l,u)),!1;case 22:return a.flags|=65536,l===Oi?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([l]):a.add(l)),Rc(t,l,u)),!1}throw Error(E(435,a.tag))}return Rc(t,l,u),Tc(),!1}if(k)return e=fe.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=u,l!==Si&&(t=Error(E(422),{cause:l}),Ll(ue(t,a)))):(l!==Si&&(e=Error(E(423),{cause:l}),Ll(ue(e,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,l=ue(l,a),u=Fi(t.stateNode,l,u),_i(t,u),rt!==4&&(rt=2)),!1;var n=Error(E(520),{cause:l});if(n=ue(n,a),eu===null?eu=[n]:eu.push(n),rt!==4&&(rt=2),e===null)return!0;l=ue(l,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Fi(a.stateNode,l,t),_i(a,t),!1;case 1:if(e=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(aa===null||!aa.has(n))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ho(u),yo(u,t,a,l),_i(a,u),!1}a=a.return}while(a!==null);return!1}var Eo=Error(E(461)),Tt=!1;function At(t,e,a,l){e.child=t===null?no(e,null,a,l):ul(e,t.child,a,l)}function vo(t,e,a,l,u){a=a.render;var n=e.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return Oa(e),l=Hi(t,e,a,i,n,u),c=Li(),t!==null&&!Tt?(xi(t,e,u),Le(t,e,u)):(k&&c&&Ei(e),e.flags|=1,At(t,e,l,u),e.child)}function So(t,e,a,l,u){if(t===null){var n=a.type;return typeof n=="function"&&!mi(n)&&n.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=n,go(t,e,n,l,u)):(t=Bu(a.type,null,l,e,e.mode,u),t.ref=e.ref,t.return=e,e.child=t)}if(n=t.child,!uc(t,u)){var i=n.memoizedProps;if(a=a.compare,a=a!==null?a:Ul,a(i,l)&&t.ref===e.ref)return Le(t,e,u)}return e.flags|=1,t=De(n,l),t.ref=e.ref,t.return=e,e.child=t}function go(t,e,a,l,u){if(t!==null){var n=t.memoizedProps;if(Ul(n,l)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=l=n,uc(t,u))(t.flags&131072)!==0&&(Tt=!0);else return e.lanes=t.lanes,Le(t,e,u)}return Ii(t,e,a,l,u)}function To(t,e,a){var l=e.pendingProps,u=l.children,n=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((e.flags&128)!==0){if(l=n!==null?n.baseLanes|a:a,t!==null){for(u=e.child=t.child,n=0;u!==null;)n=n|u.lanes|u.childLanes,u=u.sibling;e.childLanes=n&~l}else e.childLanes=0,e.child=null;return bo(t,e,l,a)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qu(e,n!==null?n.cachePool:null),n!==null?Ss(e,n):Ui(),io(e);else return e.lanes=e.childLanes=536870912,bo(t,e,n!==null?n.baseLanes|a:a,a)}else n!==null?(Qu(e,n.cachePool),Ss(e,n),Fe(),e.memoizedState=null):(t!==null&&Qu(e,null),Ui(),Fe());return At(t,e,u,a),e.child}function bo(t,e,a,l){var u=pi();return u=u===null?null:{parent:vt._currentValue,pool:u},e.memoizedState={baseLanes:a,cachePool:u},t!==null&&Qu(e,null),Ui(),io(e),t!==null&&xl(t,e,l,!0),null}function un(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(E(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Ii(t,e,a,l,u){return Oa(e),a=Hi(t,e,a,l,void 0,u),l=Li(),t!==null&&!Tt?(xi(t,e,u),Le(t,e,u)):(k&&l&&Ei(e),e.flags|=1,At(t,e,a,u),e.child)}function Ro(t,e,a,l,u,n){return Oa(e),e.updateQueue=null,a=Ts(e,l,a,u),gs(t),l=Li(),t!==null&&!Tt?(xi(t,e,n),Le(t,e,n)):(k&&l&&Ei(e),e.flags|=1,At(t,e,a,n),e.child)}function Ao(t,e,a,l,u){if(Oa(e),e.stateNode===null){var n=ka,i=a.contextType;typeof i=="object"&&i!==null&&(n=Ut(i)),n=new a(l,n),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Wi,e.stateNode=n,n._reactInternals=e,n=e.stateNode,n.props=l,n.state=e.memoizedState,n.refs={},Ni(e),i=a.contextType,n.context=typeof i=="object"&&i!==null?Ut(i):ka,n.state=e.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(ki(e,a,i,l),n.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&Wi.enqueueReplaceState(n,n.state,null),wl(e,l,n,u),Ql(),n.state=e.memoizedState),typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!0}else if(t===null){n=e.stateNode;var c=e.memoizedProps,f=_a(a,c);n.props=f;var m=n.context,v=a.contextType;i=ka,typeof v=="object"&&v!==null&&(i=Ut(v));var T=a.getDerivedStateFromProps;v=typeof T=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=e.pendingProps!==c,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&fo(e,n,l,i),Ze=!1;var h=e.memoizedState;n.state=h,wl(e,l,n,u),Ql(),m=e.memoizedState,c||h!==m||Ze?(typeof T=="function"&&(ki(e,a,T,l),m=e.memoizedState),(f=Ze||co(e,a,f,l,h,m,i))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(e.flags|=4194308)):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=l,e.memoizedState=m),n.props=l,n.state=m,n.context=i,l=f):(typeof n.componentDidMount=="function"&&(e.flags|=4194308),l=!1)}else{n=e.stateNode,Di(t,e),i=e.memoizedProps,v=_a(a,i),n.props=v,T=e.pendingProps,h=n.context,m=a.contextType,f=ka,typeof m=="object"&&m!==null&&(f=Ut(m)),c=a.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==T||h!==f)&&fo(e,n,l,f),Ze=!1,h=e.memoizedState,n.state=h,wl(e,l,n,u),Ql();var y=e.memoizedState;i!==T||h!==y||Ze||t!==null&&t.dependencies!==null&&ju(t.dependencies)?(typeof c=="function"&&(ki(e,a,c,l),y=e.memoizedState),(v=Ze||co(e,a,v,l,h,y,f)||t!==null&&t.dependencies!==null&&ju(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(l,y,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(l,y,f)),typeof n.componentDidUpdate=="function"&&(e.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=l,e.memoizedState=y),n.props=l,n.state=y,n.context=f,l=v):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),l=!1)}return n=l,un(t,e),l=(e.flags&128)!==0,n||l?(n=e.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:n.render(),e.flags|=1,t!==null&&l?(e.child=ul(e,t.child,null,u),e.child=ul(e,null,a,u)):At(t,e,a,u),e.memoizedState=n.state,t=e.child):t=Le(t,e,u),t}function po(t,e,a,l){return Hl(),e.flags|=256,At(t,e,a,l),e.child}var $i={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pi(t){return{baseLanes:t,cachePool:os()}}function tc(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=se),t}function Oo(t,e,a){var l=e.pendingProps,u=!1,n=(e.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),i&&(u=!0,e.flags&=-129),i=(e.flags&32)!==0,e.flags&=-33,t===null){if(k){if(u?We(e):Fe(),k){var c=ot,f;if(f=c){t:{for(f=c,c=Se;f.nodeType!==8;){if(!c){c=null;break t}if(f=ye(f.nextSibling),f===null){c=null;break t}}c=f}c!==null?(e.memoizedState={dehydrated:c,treeContext:Ta!==null?{id:_e,overflow:Me}:null,retryLane:536870912,hydrationErrors:null},f=Ft(18,null,null,0),f.stateNode=c,f.return=e,e.child=f,xt=e,ot=null,f=!0):f=!1}f||Aa(e)}if(c=e.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return qc(c)?e.lanes=32:e.lanes=536870912,null;He(e)}return c=l.children,l=l.fallback,u?(Fe(),u=e.mode,c=nn({mode:"hidden",children:c},u),l=ga(l,u,a,null),c.return=e,l.return=e,c.sibling=l,e.child=c,u=e.child,u.memoizedState=Pi(a),u.childLanes=tc(t,i,a),e.memoizedState=$i,l):(We(e),ec(e,c))}if(f=t.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(n)e.flags&256?(We(e),e.flags&=-257,e=ac(t,e,a)):e.memoizedState!==null?(Fe(),e.child=t.child,e.flags|=128,e=null):(Fe(),u=l.fallback,c=e.mode,l=nn({mode:"visible",children:l.children},c),u=ga(u,c,a,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,ul(e,t.child,null,a),l=e.child,l.memoizedState=Pi(a),l.childLanes=tc(t,i,a),e.memoizedState=$i,e=u);else if(We(e),qc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,l=Error(E(419)),l.stack="",l.digest=i,Ll({value:l,source:null,stack:null}),e=ac(t,e,a)}else if(Tt||xl(t,e,a,!1),i=(a&t.childLanes)!==0,Tt||i){if(i=ut,i!==null&&(l=a&-a,l=(l&42)!==0?1:Yn(l),l=(l&(i.suspendedLanes|a))!==0?0:l,l!==0&&l!==f.retryLane))throw f.retryLane=l,Ja(t,l),ee(i,t,l),Eo;c.data==="$?"||Tc(),e=ac(t,e,a)}else c.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=f.treeContext,ot=ye(c.nextSibling),xt=e,k=!0,Ra=null,Se=!1,t!==null&&(ie[ce++]=_e,ie[ce++]=Me,ie[ce++]=Ta,_e=t.id,Me=t.overflow,Ta=e),e=ec(e,l.children),e.flags|=4096);return e}return u?(Fe(),u=l.fallback,c=e.mode,f=t.child,m=f.sibling,l=De(f,{mode:"hidden",children:l.children}),l.subtreeFlags=f.subtreeFlags&65011712,m!==null?u=De(m,u):(u=ga(u,c,a,null),u.flags|=2),u.return=e,l.return=e,l.sibling=u,e.child=l,l=u,u=e.child,c=t.child.memoizedState,c===null?c=Pi(a):(f=c.cachePool,f!==null?(m=vt._currentValue,f=f.parent!==m?{parent:m,pool:m}:f):f=os(),c={baseLanes:c.baseLanes|a,cachePool:f}),u.memoizedState=c,u.childLanes=tc(t,i,a),e.memoizedState=$i,l):(We(e),a=t.child,t=a.sibling,a=De(a,{mode:"visible",children:l.children}),a.return=e,a.sibling=null,t!==null&&(i=e.deletions,i===null?(e.deletions=[t],e.flags|=16):i.push(t)),e.child=a,e.memoizedState=null,a)}function ec(t,e){return e=nn({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function nn(t,e){return t=Ft(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ac(t,e,a){return ul(e,t.child,null,a),t=ec(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function No(t,e,a){t.lanes|=e;var l=t.alternate;l!==null&&(l.lanes|=e),Ti(t.return,e,a)}function lc(t,e,a,l,u){var n=t.memoizedState;n===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u}:(n.isBackwards=e,n.rendering=null,n.renderingStartTime=0,n.last=l,n.tail=a,n.tailMode=u)}function Do(t,e,a){var l=e.pendingProps,u=l.revealOrder,n=l.tail;if(At(t,e,l.children,a),l=St.current,(l&2)!==0)l=l&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&No(t,a,e);else if(t.tag===19)No(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(A(St,l),u){case"forwards":for(a=e.child,u=null;a!==null;)t=a.alternate,t!==null&&en(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=e.child,e.child=null):(u=a.sibling,a.sibling=null),lc(e,!1,u,a,n);break;case"backwards":for(a=null,u=e.child,e.child=null;u!==null;){if(t=u.alternate,t!==null&&en(t)===null){e.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}lc(e,!0,a,null,n);break;case"together":lc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Le(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),ea|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(xl(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,a=De(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=De(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function uc(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&ju(t)))}function _m(t,e,a){switch(e.tag){case 3:it(e,e.stateNode.containerInfo),Ve(e,vt,t.memoizedState.cache),Hl();break;case 27:case 5:Hn(e);break;case 4:it(e,e.stateNode.containerInfo);break;case 10:Ve(e,e.type,e.memoizedProps.value);break;case 13:var l=e.memoizedState;if(l!==null)return l.dehydrated!==null?(We(e),e.flags|=128,null):(a&e.child.childLanes)!==0?Oo(t,e,a):(We(e),t=Le(t,e,a),t!==null?t.sibling:null);We(e);break;case 19:var u=(t.flags&128)!==0;if(l=(a&e.childLanes)!==0,l||(xl(t,e,a,!1),l=(a&e.childLanes)!==0),u){if(l)return Do(t,e,a);e.flags|=128}if(u=e.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),A(St,St.current),l)break;return null;case 22:case 23:return e.lanes=0,To(t,e,a);case 24:Ve(e,vt,t.memoizedState.cache)}return Le(t,e,a)}function _o(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)Tt=!0;else{if(!uc(t,a)&&(e.flags&128)===0)return Tt=!1,_m(t,e,a);Tt=(t.flags&131072)!==0}else Tt=!1,k&&(e.flags&1048576)!==0&&ls(e,Yu,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var l=e.elementType,u=l._init;if(l=u(l._payload),e.type=l,typeof l=="function")mi(l)?(t=_a(l,t),e.tag=1,e=Ao(null,e,l,t,a)):(e.tag=0,e=Ii(null,e,l,t,a));else{if(l!=null){if(u=l.$$typeof,u===de){e.tag=11,e=vo(null,e,l,t,a);break t}else if(u===Vt){e.tag=14,e=So(null,e,l,t,a);break t}}throw e=ma(l)||l,Error(E(306,e,""))}}return e;case 0:return Ii(t,e,e.type,e.pendingProps,a);case 1:return l=e.type,u=_a(l,e.pendingProps),Ao(t,e,l,u,a);case 3:t:{if(it(e,e.stateNode.containerInfo),t===null)throw Error(E(387));l=e.pendingProps;var n=e.memoizedState;u=n.element,Di(t,e),wl(e,l,null,a);var i=e.memoizedState;if(l=i.cache,Ve(e,vt,l),l!==n.cache&&bi(e,[vt],a,!0),Ql(),l=i.element,n.isDehydrated)if(n={element:l,isDehydrated:!1,cache:i.cache},e.updateQueue.baseState=n,e.memoizedState=n,e.flags&256){e=po(t,e,l,a);break t}else if(l!==u){u=ue(Error(E(424)),e),Ll(u),e=po(t,e,l,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ot=ye(t.firstChild),xt=e,k=!0,Ra=null,Se=!0,a=no(e,null,l,a),e.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Hl(),l===u){e=Le(t,e,a);break t}At(t,e,l,a)}e=e.child}return e;case 26:return un(t,e),t===null?(a=Cr(e.type,null,e.pendingProps,null))?e.memoizedState=a:k||(a=e.type,t=e.pendingProps,l=Tn(q.current).createElement(a),l[Mt]=e,l[Yt]=t,Ot(l,a,t),gt(l),e.stateNode=l):e.memoizedState=Cr(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Hn(e),t===null&&k&&(l=e.stateNode=Mr(e.type,e.pendingProps,q.current),xt=e,Se=!0,u=ot,na(e.type)?(Yc=u,ot=ye(l.firstChild)):ot=u),At(t,e,e.pendingProps.children,a),un(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&k&&((u=l=ot)&&(l=a0(l,e.type,e.pendingProps,Se),l!==null?(e.stateNode=l,xt=e,ot=ye(l.firstChild),Se=!1,u=!0):u=!1),u||Aa(e)),Hn(e),u=e.type,n=e.pendingProps,i=t!==null?t.memoizedProps:null,l=n.children,Lc(u,n)?l=null:i!==null&&Lc(u,i)&&(e.flags|=32),e.memoizedState!==null&&(u=Hi(t,e,Tm,null,null,a),ou._currentValue=u),un(t,e),At(t,e,l,a),e.child;case 6:return t===null&&k&&((t=a=ot)&&(a=l0(a,e.pendingProps,Se),a!==null?(e.stateNode=a,xt=e,ot=null,t=!0):t=!1),t||Aa(e)),null;case 13:return Oo(t,e,a);case 4:return it(e,e.stateNode.containerInfo),l=e.pendingProps,t===null?e.child=ul(e,null,l,a):At(t,e,l,a),e.child;case 11:return vo(t,e,e.type,e.pendingProps,a);case 7:return At(t,e,e.pendingProps,a),e.child;case 8:return At(t,e,e.pendingProps.children,a),e.child;case 12:return At(t,e,e.pendingProps.children,a),e.child;case 10:return l=e.pendingProps,Ve(e,e.type,l.value),At(t,e,l.children,a),e.child;case 9:return u=e.type._context,l=e.pendingProps.children,Oa(e),u=Ut(u),l=l(u),e.flags|=1,At(t,e,l,a),e.child;case 14:return So(t,e,e.type,e.pendingProps,a);case 15:return go(t,e,e.type,e.pendingProps,a);case 19:return Do(t,e,a);case 31:return l=e.pendingProps,a=e.mode,l={mode:l.mode,children:l.children},t===null?(a=nn(l,a),a.ref=e.ref,e.child=a,a.return=e,e=a):(a=De(t.child,l),a.ref=e.ref,e.child=a,a.return=e,e=a),e;case 22:return To(t,e,a);case 24:return Oa(e),l=Ut(vt),t===null?(u=pi(),u===null&&(u=ut,n=Ri(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=a),u=n),e.memoizedState={parent:l,cache:u},Ni(e),Ve(e,vt,u)):((t.lanes&a)!==0&&(Di(t,e),wl(e,null,null,a),Ql()),u=t.memoizedState,n=e.memoizedState,u.parent!==l?(u={parent:l,cache:l},e.memoizedState=u,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=u),Ve(e,vt,l)):(l=n.cache,Ve(e,vt,l),l!==u.cache&&bi(e,[vt],a,!0))),At(t,e,e.pendingProps.children,a),e.child;case 29:throw e.pendingProps}throw Error(E(156,e.tag))}function xe(t){t.flags|=4}function Mo(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!qr(e)){if(e=fe.current,e!==null&&((X&4194048)===X?ge!==null:(X&62914560)!==X&&(X&536870912)===0||e!==ge))throw jl=Oi,rs;t.flags|=8192}}function cn(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?nf():536870912,t.lanes|=e,fl|=e)}function Wl(t,e){if(!k)switch(t.tailMode){case"hidden":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function st(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(e)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=l,t.childLanes=a,e}function Mm(t,e,a){var l=e.pendingProps;switch(vi(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(e),null;case 1:return st(e),null;case 3:return a=e.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),ze(vt),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Cl(e)?xe(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,is())),st(e),null;case 26:return a=e.memoizedState,t===null?(xe(e),a!==null?(st(e),Mo(e,a)):(st(e),e.flags&=-16777217)):a?a!==t.memoizedState?(xe(e),st(e),Mo(e,a)):(st(e),e.flags&=-16777217):(t.memoizedProps!==l&&xe(e),st(e),e.flags&=-16777217),null;case 27:vu(e),a=q.current;var u=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==l&&xe(e);else{if(!l){if(e.stateNode===null)throw Error(E(166));return st(e),null}t=z.current,Cl(e)?us(e):(t=Mr(u,l,a),e.stateNode=t,xe(e))}return st(e),null;case 5:if(vu(e),a=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==l&&xe(e);else{if(!l){if(e.stateNode===null)throw Error(E(166));return st(e),null}if(t=z.current,Cl(e))us(e);else{switch(u=Tn(q.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?u.createElement(a,{is:l.is}):u.createElement(a)}}t[Mt]=e,t[Yt]=l;t:for(u=e.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break t;for(;u.sibling===null;){if(u.return===null||u.return===e)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}e.stateNode=t;t:switch(Ot(t,a,l),a){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&xe(e)}}return st(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==l&&xe(e);else{if(typeof l!="string"&&e.stateNode===null)throw Error(E(166));if(t=q.current,Cl(e)){if(t=e.stateNode,a=e.memoizedProps,l=null,u=xt,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}t[Mt]=e,t=!!(t.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Rr(t.nodeValue,a)),t||Aa(e)}else t=Tn(t).createTextNode(l),t[Mt]=e,e.stateNode=t}return st(e),null;case 13:if(l=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Cl(e),l!==null&&l.dehydrated!==null){if(t===null){if(!u)throw Error(E(318));if(u=e.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(E(317));u[Mt]=e}else Hl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;st(e),u=!1}else u=is(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return e.flags&256?(He(e),e):(He(e),null)}if(He(e),(e.flags&128)!==0)return e.lanes=a,e;if(a=l!==null,t=t!==null&&t.memoizedState!==null,a){l=e.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool);var n=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==u&&(l.flags|=2048)}return a!==t&&a&&(e.child.flags|=8192),cn(e,e.updateQueue),st(e),null;case 4:return Ge(),t===null&&Mc(e.stateNode.containerInfo),st(e),null;case 10:return ze(e.type),st(e),null;case 19:if(O(St),u=e.memoizedState,u===null)return st(e),null;if(l=(e.flags&128)!==0,n=u.rendering,n===null)if(l)Wl(u,!1);else{if(rt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(n=en(t),n!==null){for(e.flags|=128,Wl(u,!1),t=n.updateQueue,e.updateQueue=t,cn(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)as(a,t),a=a.sibling;return A(St,St.current&1|2),e.child}t=t.sibling}u.tail!==null&&ve()>on&&(e.flags|=128,l=!0,Wl(u,!1),e.lanes=4194304)}else{if(!l)if(t=en(n),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,cn(e,t),Wl(u,!0),u.tail===null&&u.tailMode==="hidden"&&!n.alternate&&!k)return st(e),null}else 2*ve()-u.renderingStartTime>on&&a!==536870912&&(e.flags|=128,l=!0,Wl(u,!1),e.lanes=4194304);u.isBackwards?(n.sibling=e.child,e.child=n):(t=u.last,t!==null?t.sibling=n:e.child=n,u.last=n)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=ve(),e.sibling=null,t=St.current,A(St,l?t&1|2:t&1),e):(st(e),null);case 22:case 23:return He(e),zi(),l=e.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(e.flags|=8192):l&&(e.flags|=8192),l?(a&536870912)!==0&&(e.flags&128)===0&&(st(e),e.subtreeFlags&6&&(e.flags|=8192)):st(e),a=e.updateQueue,a!==null&&cn(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),l=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),l!==a&&(e.flags|=2048),t!==null&&O(Na),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),ze(vt),st(e),null;case 25:return null;case 30:return null}throw Error(E(156,e.tag))}function Um(t,e){switch(vi(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ze(vt),Ge(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return vu(e),null;case 13:if(He(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));Hl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return O(St),null;case 4:return Ge(),null;case 10:return ze(e.type),null;case 22:case 23:return He(e),zi(),t!==null&&O(Na),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return ze(vt),null;case 25:return null;default:return null}}function Uo(t,e){switch(vi(e),e.tag){case 3:ze(vt),Ge();break;case 26:case 27:case 5:vu(e);break;case 4:Ge();break;case 13:He(e);break;case 19:O(St);break;case 10:ze(e.type);break;case 22:case 23:He(e),zi(),t!==null&&O(Na);break;case 24:ze(vt)}}function Fl(t,e){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&t)===t){l=void 0;var n=a.create,i=a.inst;l=n(),i.destroy=l}a=a.next}while(a!==u)}}catch(c){at(e,e.return,c)}}function Ie(t,e,a){try{var l=e.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var n=u.next;l=n;do{if((l.tag&t)===t){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=e;var f=a,m=c;try{m()}catch(v){at(u,f,v)}}}l=l.next}while(l!==n)}}catch(v){at(e,e.return,v)}}function zo(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{vs(e,a)}catch(l){at(t,t.return,l)}}}function Co(t,e,a){a.props=_a(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(l){at(t,e,l)}}function Il(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof a=="function"?t.refCleanup=a(l):a.current=l}}catch(u){at(t,e,u)}}function Te(t,e){var a=t.ref,l=t.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){at(t,e,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){at(t,e,u)}else a.current=null}function Ho(t){var e=t.type,a=t.memoizedProps,l=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){at(t,t.return,u)}}function nc(t,e,a){try{var l=t.stateNode;Im(l,t.type,a,e),l[Yt]=e}catch(u){at(t,t.return,u)}}function Lo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&na(t.type)||t.tag===4}function ic(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Lo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(t),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=gn));else if(l!==4&&(l===27&&na(t.type)&&(a=t.stateNode,e=null),t=t.child,t!==null))for(cc(t,e,a),t=t.sibling;t!==null;)cc(t,e,a),t=t.sibling}function fn(t,e,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,e?a.insertBefore(t,e):a.appendChild(t);else if(l!==4&&(l===27&&na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(fn(t,e,a),t=t.sibling;t!==null;)fn(t,e,a),t=t.sibling}function xo(t){var e=t.stateNode,a=t.memoizedProps;try{for(var l=t.type,u=e.attributes;u.length;)e.removeAttributeNode(u[0]);Ot(e,l,a),e[Mt]=t,e[Yt]=a}catch(n){at(t,t.return,n)}}var Be=!1,ht=!1,fc=!1,Bo=typeof WeakSet=="function"?WeakSet:Set,bt=null;function zm(t,e){if(t=t.containerInfo,Cc=Nn,t=Kf(t),ii(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,n=l.focusNode;l=l.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break t}var i=0,c=-1,f=-1,m=0,v=0,T=t,h=null;e:for(;;){for(var y;T!==a||u!==0&&T.nodeType!==3||(c=i+u),T!==n||l!==0&&T.nodeType!==3||(f=i+l),T.nodeType===3&&(i+=T.nodeValue.length),(y=T.firstChild)!==null;)h=T,T=y;for(;;){if(T===t)break e;if(h===a&&++m===u&&(c=i),h===n&&++v===l&&(f=i),(y=T.nextSibling)!==null)break;T=h,h=T.parentNode}T=y}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:t,selectionRange:a},Nn=!1,bt=e;bt!==null;)if(e=bt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,bt=t;else for(;bt!==null;){switch(e=bt,n=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,a=e,u=n.memoizedProps,n=n.memoizedState,l=a.stateNode;try{var B=_a(a.type,u,a.elementType===a.type);t=l.getSnapshotBeforeUpdate(B,n),l.__reactInternalSnapshotBeforeUpdate=t}catch(C){at(a,a.return,C)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,a=t.nodeType,a===9)Bc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Bc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(E(163))}if(t=e.sibling,t!==null){t.return=e.return,bt=t;break}bt=e.return}}function qo(t,e,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$e(t,a),l&4&&Fl(5,a);break;case 1:if($e(t,a),l&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(i){at(a,a.return,i)}else{var u=_a(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(u,e,t.__reactInternalSnapshotBeforeUpdate)}catch(i){at(a,a.return,i)}}l&64&&zo(a),l&512&&Il(a,a.return);break;case 3:if($e(t,a),l&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{vs(t,e)}catch(i){at(a,a.return,i)}}break;case 27:e===null&&l&4&&xo(a);case 26:case 5:$e(t,a),e===null&&l&4&&Ho(a),l&512&&Il(a,a.return);break;case 12:$e(t,a);break;case 13:$e(t,a),l&4&&Go(t,a),l&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Gm.bind(null,a),u0(t,a))));break;case 22:if(l=a.memoizedState!==null||Be,!l){e=e!==null&&e.memoizedState!==null||ht,u=Be;var n=ht;Be=l,(ht=e)&&!n?Pe(t,a,(a.subtreeFlags&8772)!==0):$e(t,a),Be=u,ht=n}break;case 30:break;default:$e(t,a)}}function Yo(t){var e=t.alternate;e!==null&&(t.alternate=null,Yo(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Qn(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,Qt=!1;function qe(t,e,a){for(a=a.child;a!==null;)jo(t,e,a),a=a.sibling}function jo(t,e,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Sl,a)}catch{}switch(a.tag){case 26:ht||Te(a,e),qe(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ht||Te(a,e);var l=ct,u=Qt;na(a.type)&&(ct=a.stateNode,Qt=!1),qe(t,e,a),iu(a.stateNode),ct=l,Qt=u;break;case 5:ht||Te(a,e);case 6:if(l=ct,u=Qt,ct=null,qe(t,e,a),ct=l,Qt=u,ct!==null)if(Qt)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(a.stateNode)}catch(n){at(a,e,n)}else try{ct.removeChild(a.stateNode)}catch(n){at(a,e,n)}break;case 18:ct!==null&&(Qt?(t=ct,Dr(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hu(t)):Dr(ct,a.stateNode));break;case 4:l=ct,u=Qt,ct=a.stateNode.containerInfo,Qt=!0,qe(t,e,a),ct=l,Qt=u;break;case 0:case 11:case 14:case 15:ht||Ie(2,a,e),ht||Ie(4,a,e),qe(t,e,a);break;case 1:ht||(Te(a,e),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Co(a,e,l)),qe(t,e,a);break;case 21:qe(t,e,a);break;case 22:ht=(l=ht)||a.memoizedState!==null,qe(t,e,a),ht=l;break;default:qe(t,e,a)}}function Go(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hu(t)}catch(a){at(e,e.return,a)}}function Cm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Bo),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Bo),e;default:throw Error(E(435,t.tag))}}function sc(t,e){var a=Cm(t);e.forEach(function(l){var u=Qm.bind(null,t,l);a.has(l)||(a.add(l),l.then(u,u))})}function It(t,e){var a=e.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],n=t,i=e,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(na(c.type)){ct=c.stateNode,Qt=!1;break t}break;case 5:ct=c.stateNode,Qt=!1;break t;case 3:case 4:ct=c.stateNode.containerInfo,Qt=!0;break t}c=c.return}if(ct===null)throw Error(E(160));jo(n,i,u),ct=null,Qt=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)Qo(e,t),e=e.sibling}var he=null;function Qo(t,e){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:It(e,t),$t(t),l&4&&(Ie(3,t,t.return),Fl(3,t),Ie(5,t,t.return));break;case 1:It(e,t),$t(t),l&512&&(ht||a===null||Te(a,a.return)),l&64&&Be&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=he;if(It(e,t),$t(t),l&512&&(ht||a===null||Te(a,a.return)),l&4){var n=a!==null?a.memoizedState:null;if(l=t.memoizedState,a===null)if(l===null)if(t.stateNode===null){t:{l=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":n=u.getElementsByTagName("title")[0],(!n||n[bl]||n[Mt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(l),u.head.insertBefore(n,u.querySelector("head > title"))),Ot(n,l,a),n[Mt]=t,gt(n),l=n;break t;case"link":var i=xr("link","href",u).get(l+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break e}}n=u.createElement(l),Ot(n,l,a),u.head.appendChild(n);break;case"meta":if(i=xr("meta","content",u).get(l+(a.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break e}}n=u.createElement(l),Ot(n,l,a),u.head.appendChild(n);break;default:throw Error(E(468,l))}n[Mt]=t,gt(n),l=n}t.stateNode=l}else Br(u,t.type,t.stateNode);else t.stateNode=Lr(u,l,t.memoizedProps);else n!==l?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,l===null?Br(u,t.type,t.stateNode):Lr(u,l,t.memoizedProps)):l===null&&t.stateNode!==null&&nc(t,t.memoizedProps,a.memoizedProps)}break;case 27:It(e,t),$t(t),l&512&&(ht||a===null||Te(a,a.return)),a!==null&&l&4&&nc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(It(e,t),$t(t),l&512&&(ht||a===null||Te(a,a.return)),t.flags&32){u=t.stateNode;try{Ga(u,"")}catch(y){at(t,t.return,y)}}l&4&&t.stateNode!=null&&(u=t.memoizedProps,nc(t,u,a!==null?a.memoizedProps:u)),l&1024&&(fc=!0);break;case 6:if(It(e,t),$t(t),l&4){if(t.stateNode===null)throw Error(E(162));l=t.memoizedProps,a=t.stateNode;try{a.nodeValue=l}catch(y){at(t,t.return,y)}}break;case 3:if(An=null,u=he,he=bn(e.containerInfo),It(e,t),he=u,$t(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{hu(e.containerInfo)}catch(y){at(t,t.return,y)}fc&&(fc=!1,wo(t));break;case 4:l=he,he=bn(t.stateNode.containerInfo),It(e,t),$t(t),he=l;break;case 12:It(e,t),$t(t);break;case 13:It(e,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yc=ve()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,sc(t,l)));break;case 22:u=t.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,m=Be,v=ht;if(Be=m||u,ht=v||f,It(e,t),ht=v,Be=m,$t(t),l&8192)t:for(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,u&&(a===null||f||Be||ht||Ma(t)),a=null,e=t;;){if(e.tag===5||e.tag===26){if(a===null){f=a=e;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var T=f.memoizedProps.style,h=T!=null&&T.hasOwnProperty("display")?T.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(y){at(f,f.return,y)}}}else if(e.tag===6){if(a===null){f=e;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){at(f,f.return,y)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;a===e&&(a=null),e=e.return}a===e&&(a=null),e.sibling.return=e.return,e=e.sibling}l&4&&(l=t.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,sc(t,a))));break;case 19:It(e,t),$t(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,sc(t,l)));break;case 30:break;case 21:break;default:It(e,t),$t(t)}}function $t(t){var e=t.flags;if(e&2){try{for(var a,l=t.return;l!==null;){if(Lo(l)){a=l;break}l=l.return}if(a==null)throw Error(E(160));switch(a.tag){case 27:var u=a.stateNode,n=ic(t);fn(t,n,u);break;case 5:var i=a.stateNode;a.flags&32&&(Ga(i,""),a.flags&=-33);var c=ic(t);fn(t,c,i);break;case 3:case 4:var f=a.stateNode.containerInfo,m=ic(t);cc(t,m,f);break;default:throw Error(E(161))}}catch(v){at(t,t.return,v)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wo(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;wo(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function $e(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)qo(t,e.alternate,e),e=e.sibling}function Ma(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Ie(4,e,e.return),Ma(e);break;case 1:Te(e,e.return);var a=e.stateNode;typeof a.componentWillUnmount=="function"&&Co(e,e.return,a),Ma(e);break;case 27:iu(e.stateNode);case 26:case 5:Te(e,e.return),Ma(e);break;case 22:e.memoizedState===null&&Ma(e);break;case 30:Ma(e);break;default:Ma(e)}t=t.sibling}}function Pe(t,e,a){for(a=a&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var l=e.alternate,u=t,n=e,i=n.flags;switch(n.tag){case 0:case 11:case 15:Pe(u,n,a),Fl(4,n);break;case 1:if(Pe(u,n,a),l=n,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){at(l,l.return,m)}if(l=n,u=l.updateQueue,u!==null){var c=l.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Es(f[u],c)}catch(m){at(l,l.return,m)}}a&&i&64&&zo(n),Il(n,n.return);break;case 27:xo(n);case 26:case 5:Pe(u,n,a),a&&l===null&&i&4&&Ho(n),Il(n,n.return);break;case 12:Pe(u,n,a);break;case 13:Pe(u,n,a),a&&i&4&&Go(u,n);break;case 22:n.memoizedState===null&&Pe(u,n,a),Il(n,n.return);break;case 30:break;default:Pe(u,n,a)}e=e.sibling}}function oc(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Bl(a))}function rc(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Bl(t))}function be(t,e,a,l){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Xo(t,e,a,l),e=e.sibling}function Xo(t,e,a,l){var u=e.flags;switch(e.tag){case 0:case 11:case 15:be(t,e,a,l),u&2048&&Fl(9,e);break;case 1:be(t,e,a,l);break;case 3:be(t,e,a,l),u&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Bl(t)));break;case 12:if(u&2048){be(t,e,a,l),t=e.stateNode;try{var n=e.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){at(e,e.return,f)}}else be(t,e,a,l);break;case 13:be(t,e,a,l);break;case 23:break;case 22:n=e.stateNode,i=e.alternate,e.memoizedState!==null?n._visibility&2?be(t,e,a,l):$l(t,e):n._visibility&2?be(t,e,a,l):(n._visibility|=2,nl(t,e,a,l,(e.subtreeFlags&10256)!==0)),u&2048&&oc(i,e);break;case 24:be(t,e,a,l),u&2048&&rc(e.alternate,e);break;default:be(t,e,a,l)}}function nl(t,e,a,l,u){for(u=u&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var n=t,i=e,c=a,f=l,m=i.flags;switch(i.tag){case 0:case 11:case 15:nl(n,i,c,f,u),Fl(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?nl(n,i,c,f,u):$l(n,i):(v._visibility|=2,nl(n,i,c,f,u)),u&&m&2048&&oc(i.alternate,i);break;case 24:nl(n,i,c,f,u),u&&m&2048&&rc(i.alternate,i);break;default:nl(n,i,c,f,u)}e=e.sibling}}function $l(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,l=e,u=l.flags;switch(l.tag){case 22:$l(a,l),u&2048&&oc(l.alternate,l);break;case 24:$l(a,l),u&2048&&rc(l.alternate,l);break;default:$l(a,l)}e=e.sibling}}var Pl=8192;function il(t){if(t.subtreeFlags&Pl)for(t=t.child;t!==null;)Vo(t),t=t.sibling}function Vo(t){switch(t.tag){case 26:il(t),t.flags&Pl&&t.memoizedState!==null&&v0(he,t.memoizedState,t.memoizedProps);break;case 5:il(t);break;case 3:case 4:var e=he;he=bn(t.stateNode.containerInfo),il(t),he=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Pl,Pl=16777216,il(t),Pl=e):il(t));break;default:il(t)}}function Zo(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function tu(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];bt=l,Jo(l,t)}Zo(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ko(t),t=t.sibling}function Ko(t){switch(t.tag){case 0:case 11:case 15:tu(t),t.flags&2048&&Ie(9,t,t.return);break;case 3:tu(t);break;case 12:tu(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,sn(t)):tu(t);break;default:tu(t)}}function sn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];bt=l,Jo(l,t)}Zo(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Ie(8,e,e.return),sn(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,sn(e));break;default:sn(e)}t=t.sibling}}function Jo(t,e){for(;bt!==null;){var a=bt;switch(a.tag){case 0:case 11:case 15:Ie(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,bt=l;else t:for(a=t;bt!==null;){l=bt;var u=l.sibling,n=l.return;if(Yo(l),l===a){bt=null;break t}if(u!==null){u.return=n,bt=u;break t}bt=n}}}var Hm={getCacheForType:function(t){var e=Ut(vt),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a}},Lm=typeof WeakMap=="function"?WeakMap:Map,F=0,ut=null,Q=null,X=0,I=0,Pt=null,ta=!1,cl=!1,dc=!1,Ye=0,rt=0,ea=0,Ua=0,mc=0,se=0,fl=0,eu=null,wt=null,hc=!1,yc=0,on=1/0,rn=null,aa=null,pt=0,la=null,sl=null,ol=0,Ec=0,vc=null,ko=null,au=0,Sc=null;function te(){if((F&2)!==0&&X!==0)return X&-X;if(S.T!==null){var t=Ia;return t!==0?t:Oc()}return sf()}function Wo(){se===0&&(se=(X&536870912)===0||k?uf():536870912);var t=fe.current;return t!==null&&(t.flags|=32),se}function ee(t,e,a){(t===ut&&(I===2||I===9)||t.cancelPendingCommit!==null)&&(rl(t,0),ua(t,X,se,!1)),Tl(t,a),((F&2)===0||t!==ut)&&(t===ut&&((F&2)===0&&(Ua|=a),rt===4&&ua(t,X,se,!1)),Re(t))}function Fo(t,e,a){if((F&6)!==0)throw Error(E(327));var l=!a&&(e&124)===0&&(e&t.expiredLanes)===0||gl(t,e),u=l?qm(t,e):bc(t,e,!0),n=l;do{if(u===0){cl&&!l&&ua(t,e,0,!1);break}else{if(a=t.current.alternate,n&&!xm(a)){u=bc(t,e,!1),n=!1;continue}if(u===2){if(n=e,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){e=i;t:{var c=t;u=eu;var f=c.current.memoizedState.isDehydrated;if(f&&(rl(c,i).flags|=256),i=bc(c,i,!1),i!==2){if(dc&&!f){c.errorRecoveryDisabledLanes|=n,Ua|=n,u=4;break t}n=wt,wt=u,n!==null&&(wt===null?wt=n:wt.push.apply(wt,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){rl(t,0),ua(t,e,0,!0);break}t:{switch(l=t,n=u,n){case 0:case 1:throw Error(E(345));case 4:if((e&4194048)!==e)break;case 6:ua(l,e,se,!ta);break t;case 2:wt=null;break;case 3:case 5:break;default:throw Error(E(329))}if((e&62914560)===e&&(u=yc+300-ve(),10<u)){if(ua(l,e,se,!ta),bu(l,0,!0)!==0)break t;l.timeoutHandle=Or(Io.bind(null,l,a,wt,rn,hc,e,se,Ua,fl,ta,n,2,-0,0),u);break t}Io(l,a,wt,rn,hc,e,se,Ua,fl,ta,n,0,-0,0)}}break}while(!0);Re(t)}function Io(t,e,a,l,u,n,i,c,f,m,v,T,h,y){if(t.timeoutHandle=-1,T=e.subtreeFlags,(T&8192||(T&16785408)===16785408)&&(su={stylesheets:null,count:0,unsuspend:E0},Vo(e),T=S0(),T!==null)){t.cancelPendingCommit=T(ur.bind(null,t,e,n,a,l,u,i,c,f,v,1,h,y)),ua(t,n,i,!m);return}ur(t,e,n,a,l,u,i,c,f)}function xm(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],n=u.getSnapshot;u=u.value;try{if(!Wt(n(),u))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ua(t,e,a,l){e&=~mc,e&=~Ua,t.suspendedLanes|=e,t.pingedLanes&=~e,l&&(t.warmLanes|=e),l=t.expirationTimes;for(var u=e;0<u;){var n=31-kt(u),i=1<<n;l[n]=-1,u&=~i}a!==0&&cf(t,a,e)}function dn(){return(F&6)===0?(lu(0),!1):!0}function gc(){if(Q!==null){if(I===0)var t=Q.return;else t=Q,Ue=pa=null,Bi(t),ll=null,Jl=0,t=Q;for(;t!==null;)Uo(t.alternate,t),t=t.return;Q=null}}function rl(t,e){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Pm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),gc(),ut=t,Q=a=De(t.current,null),X=e,I=0,Pt=null,ta=!1,cl=gl(t,e),dc=!1,fl=se=mc=Ua=ea=rt=0,wt=eu=null,hc=!1,(e&8)!==0&&(e|=e&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=e;0<l;){var u=31-kt(l),n=1<<u;e|=t[u],l&=~n}return Ye=e,Hu(),a}function $o(t,e){j=null,S.H=$u,e===Yl||e===wu?(e=hs(),I=3):e===rs?(e=hs(),I=4):I=e===Eo?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Pt=e,Q===null&&(rt=1,ln(t,ue(e,t.current)))}function Po(){var t=S.H;return S.H=$u,t===null?$u:t}function tr(){var t=S.A;return S.A=Hm,t}function Tc(){rt=4,ta||(X&4194048)!==X&&fe.current!==null||(cl=!0),(ea&134217727)===0&&(Ua&134217727)===0||ut===null||ua(ut,X,se,!1)}function bc(t,e,a){var l=F;F|=2;var u=Po(),n=tr();(ut!==t||X!==e)&&(rn=null,rl(t,e)),e=!1;var i=rt;t:do try{if(I!==0&&Q!==null){var c=Q,f=Pt;switch(I){case 8:gc(),i=6;break t;case 3:case 2:case 9:case 6:fe.current===null&&(e=!0);var m=I;if(I=0,Pt=null,dl(t,c,f,m),a&&cl){i=0;break t}break;default:m=I,I=0,Pt=null,dl(t,c,f,m)}}Bm(),i=rt;break}catch(v){$o(t,v)}while(!0);return e&&t.shellSuspendCounter++,Ue=pa=null,F=l,S.H=u,S.A=n,Q===null&&(ut=null,X=0,Hu()),i}function Bm(){for(;Q!==null;)er(Q)}function qm(t,e){var a=F;F|=2;var l=Po(),u=tr();ut!==t||X!==e?(rn=null,on=ve()+500,rl(t,e)):cl=gl(t,e);t:do try{if(I!==0&&Q!==null){e=Q;var n=Pt;e:switch(I){case 1:I=0,Pt=null,dl(t,e,n,1);break;case 2:case 9:if(ds(n)){I=0,Pt=null,ar(e);break}e=function(){I!==2&&I!==9||ut!==t||(I=7),Re(t)},n.then(e,e);break t;case 3:I=7;break t;case 4:I=5;break t;case 7:ds(n)?(I=0,Pt=null,ar(e)):(I=0,Pt=null,dl(t,e,n,7));break;case 5:var i=null;switch(Q.tag){case 26:i=Q.memoizedState;case 5:case 27:var c=Q;if(!i||qr(i)){I=0,Pt=null;var f=c.sibling;if(f!==null)Q=f;else{var m=c.return;m!==null?(Q=m,mn(m)):Q=null}break e}}I=0,Pt=null,dl(t,e,n,5);break;case 6:I=0,Pt=null,dl(t,e,n,6);break;case 8:gc(),rt=6;break t;default:throw Error(E(462))}}Ym();break}catch(v){$o(t,v)}while(!0);return Ue=pa=null,S.H=l,S.A=u,F=a,Q!==null?0:(ut=null,X=0,Hu(),rt)}function Ym(){for(;Q!==null&&!id();)er(Q)}function er(t){var e=_o(t.alternate,t,Ye);t.memoizedProps=t.pendingProps,e===null?mn(t):Q=e}function ar(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Ro(a,e,e.pendingProps,e.type,void 0,X);break;case 11:e=Ro(a,e,e.pendingProps,e.type.render,e.ref,X);break;case 5:Bi(e);default:Uo(a,e),e=Q=as(e,Ye),e=_o(a,e,Ye)}t.memoizedProps=t.pendingProps,e===null?mn(t):Q=e}function dl(t,e,a,l){Ue=pa=null,Bi(e),ll=null,Jl=0;var u=e.return;try{if(Dm(t,u,e,a,X)){rt=1,ln(t,ue(a,t.current)),Q=null;return}}catch(n){if(u!==null)throw Q=u,n;rt=1,ln(t,ue(a,t.current)),Q=null;return}e.flags&32768?(k||l===1?t=!0:cl||(X&536870912)!==0?t=!1:(ta=t=!0,(l===2||l===9||l===3||l===6)&&(l=fe.current,l!==null&&l.tag===13&&(l.flags|=16384))),lr(e,t)):mn(e)}function mn(t){var e=t;do{if((e.flags&32768)!==0){lr(e,ta);return}t=e.return;var a=Mm(e.alternate,e,Ye);if(a!==null){Q=a;return}if(e=e.sibling,e!==null){Q=e;return}Q=e=t}while(e!==null);rt===0&&(rt=5)}function lr(t,e){do{var a=Um(t.alternate,t);if(a!==null){a.flags&=32767,Q=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){Q=t;return}Q=t=a}while(t!==null);rt=6,Q=null}function ur(t,e,a,l,u,n,i,c,f){t.cancelPendingCommit=null;do hn();while(pt!==0);if((F&6)!==0)throw Error(E(327));if(e!==null){if(e===t.current)throw Error(E(177));if(n=e.lanes|e.childLanes,n|=ri,Ed(t,a,n,i,c,f),t===ut&&(Q=ut=null,X=0),sl=e,la=t,ol=a,Ec=n,vc=u,ko=l,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,wm(Su,function(){return sr(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||l){l=S.T,S.T=null,u=p.p,p.p=2,i=F,F|=4;try{zm(t,e,a)}finally{F=i,p.p=u,S.T=l}}pt=1,nr(),ir(),cr()}}function nr(){if(pt===1){pt=0;var t=la,e=sl,a=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var l=p.p;p.p=2;var u=F;F|=4;try{Qo(e,t);var n=Hc,i=Kf(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&Zf(c.ownerDocument.documentElement,c)){if(f!==null&&ii(c)){var m=f.start,v=f.end;if(v===void 0&&(v=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(v,c.value.length);else{var T=c.ownerDocument||document,h=T&&T.defaultView||window;if(h.getSelection){var y=h.getSelection(),B=c.textContent.length,C=Math.min(f.start,B),tt=f.end===void 0?C:Math.min(f.end,B);!y.extend&&C>tt&&(i=tt,tt=C,C=i);var r=Vf(c,C),o=Vf(c,tt);if(r&&o&&(y.rangeCount!==1||y.anchorNode!==r.node||y.anchorOffset!==r.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var d=T.createRange();d.setStart(r.node,r.offset),y.removeAllRanges(),C>tt?(y.addRange(d),y.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),y.addRange(d))}}}}for(T=[],y=c;y=y.parentNode;)y.nodeType===1&&T.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<T.length;c++){var g=T[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Nn=!!Cc,Hc=Cc=null}finally{F=u,p.p=l,S.T=a}}t.current=e,pt=2}}function ir(){if(pt===2){pt=0;var t=la,e=sl,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var l=p.p;p.p=2;var u=F;F|=4;try{qo(t,e.alternate,e)}finally{F=u,p.p=l,S.T=a}}pt=3}}function cr(){if(pt===4||pt===3){pt=0,cd();var t=la,e=sl,a=ol,l=ko;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?pt=5:(pt=0,sl=la=null,fr(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(aa=null),jn(a),e=e.stateNode,Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Sl,e,void 0,(e.current.flags&128)===128)}catch{}if(l!==null){e=S.T,u=p.p,p.p=2,S.T=null;try{for(var n=t.onRecoverableError,i=0;i<l.length;i++){var c=l[i];n(c.value,{componentStack:c.stack})}}finally{S.T=e,p.p=u}}(ol&3)!==0&&hn(),Re(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Sc?au++:(au=0,Sc=t):au=0,lu(0)}}function fr(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Bl(e)))}function hn(t){return nr(),ir(),cr(),sr()}function sr(){if(pt!==5)return!1;var t=la,e=Ec;Ec=0;var a=jn(ol),l=S.T,u=p.p;try{p.p=32>a?32:a,S.T=null,a=vc,vc=null;var n=la,i=ol;if(pt=0,sl=la=null,ol=0,(F&6)!==0)throw Error(E(331));var c=F;if(F|=4,Ko(n.current),Xo(n,n.current,i,a),F=c,lu(0,!1),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Sl,n)}catch{}return!0}finally{p.p=u,S.T=l,fr(t,e)}}function or(t,e,a){e=ue(a,e),e=Fi(t.stateNode,e,2),t=Je(t,e,2),t!==null&&(Tl(t,2),Re(t))}function at(t,e,a){if(t.tag===3)or(t,t,a);else for(;e!==null;){if(e.tag===3){or(e,t,a);break}else if(e.tag===1){var l=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(aa===null||!aa.has(l))){t=ue(a,t),a=ho(2),l=Je(e,a,2),l!==null&&(yo(a,l,e,t),Tl(l,2),Re(l));break}}e=e.return}}function Rc(t,e,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Lm;var u=new Set;l.set(e,u)}else u=l.get(e),u===void 0&&(u=new Set,l.set(e,u));u.has(a)||(dc=!0,u.add(a),t=jm.bind(null,t,e,a),e.then(t,t))}function jm(t,e,a){var l=t.pingCache;l!==null&&l.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ut===t&&(X&a)===a&&(rt===4||rt===3&&(X&62914560)===X&&300>ve()-yc?(F&2)===0&&rl(t,0):mc|=a,fl===X&&(fl=0)),Re(t)}function rr(t,e){e===0&&(e=nf()),t=Ja(t,e),t!==null&&(Tl(t,e),Re(t))}function Gm(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),rr(t,a)}function Qm(t,e){var a=0;switch(t.tag){case 13:var l=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(E(314))}l!==null&&l.delete(e),rr(t,a)}function wm(t,e){return xn(t,e)}var yn=null,ml=null,Ac=!1,En=!1,pc=!1,za=0;function Re(t){t!==ml&&t.next===null&&(ml===null?yn=ml=t:ml=ml.next=t),En=!0,Ac||(Ac=!0,Vm())}function lu(t,e){if(!pc&&En){pc=!0;do for(var a=!1,l=yn;l!==null;){if(t!==0){var u=l.pendingLanes;if(u===0)var n=0;else{var i=l.suspendedLanes,c=l.pingedLanes;n=(1<<31-kt(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,yr(l,n))}else n=X,n=bu(l,l===ut?n:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(n&3)===0||gl(l,n)||(a=!0,yr(l,n));l=l.next}while(a);pc=!1}}function Xm(){dr()}function dr(){En=Ac=!1;var t=0;za!==0&&($m()&&(t=za),za=0);for(var e=ve(),a=null,l=yn;l!==null;){var u=l.next,n=mr(l,e);n===0?(l.next=null,a===null?yn=u:a.next=u,u===null&&(ml=a)):(a=l,(t!==0||(n&3)!==0)&&(En=!0)),l=u}lu(t)}function mr(t,e){for(var a=t.suspendedLanes,l=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-kt(n),c=1<<i,f=u[i];f===-1?((c&a)===0||(c&l)!==0)&&(u[i]=yd(c,e)):f<=e&&(t.expiredLanes|=c),n&=~c}if(e=ut,a=X,a=bu(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,a===0||t===e&&(I===2||I===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&Bn(l),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||gl(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(l!==null&&Bn(l),jn(a)){case 2:case 8:a=af;break;case 32:a=Su;break;case 268435456:a=lf;break;default:a=Su}return l=hr.bind(null,t),a=xn(a,l),t.callbackPriority=e,t.callbackNode=a,e}return l!==null&&l!==null&&Bn(l),t.callbackPriority=2,t.callbackNode=null,2}function hr(t,e){if(pt!==0&&pt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(hn()&&t.callbackNode!==a)return null;var l=X;return l=bu(t,t===ut?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(Fo(t,l,e),mr(t,ve()),t.callbackNode!=null&&t.callbackNode===a?hr.bind(null,t):null)}function yr(t,e){if(hn())return null;Fo(t,e,!0)}function Vm(){t0(function(){(F&6)!==0?xn(ef,Xm):dr()})}function Oc(){return za===0&&(za=uf()),za}function Er(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nu(""+t)}function vr(t,e){var a=e.ownerDocument.createElement("input");return a.name=e.name,a.value=e.value,t.id&&a.setAttribute("form",t.id),e.parentNode.insertBefore(a,e),t=new FormData(t),a.parentNode.removeChild(a),t}function Zm(t,e,a,l,u){if(e==="submit"&&a&&a.stateNode===u){var n=Er((u[Yt]||null).action),i=l.submitter;i&&(e=(e=i[Yt]||null)?Er(e.formAction):i.getAttribute("formAction"),e!==null&&(n=e,i=null));var c=new Uu("action","action",null,l,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(za!==0){var f=i?vr(u,i):new FormData(u);Zi(a,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?vr(u,i):new FormData(u),Zi(a,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Nc=0;Nc<oi.length;Nc++){var Dc=oi[Nc],Km=Dc.toLowerCase(),Jm=Dc[0].toUpperCase()+Dc.slice(1);me(Km,"on"+Jm)}me(Wf,"onAnimationEnd"),me(Ff,"onAnimationIteration"),me(If,"onAnimationStart"),me("dblclick","onDoubleClick"),me("focusin","onFocus"),me("focusout","onBlur"),me(om,"onTransitionRun"),me(rm,"onTransitionStart"),me(dm,"onTransitionCancel"),me($f,"onTransitionEnd"),qa("onMouseEnter",["mouseout","mouseover"]),qa("onMouseLeave",["mouseout","mouseover"]),qa("onPointerEnter",["pointerout","pointerover"]),qa("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu));function Sr(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],u=l.event;l=l.listeners;t:{var n=void 0;if(e)for(var i=l.length-1;0<=i;i--){var c=l[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(v){an(v)}u.currentTarget=null,n=f}else for(i=0;i<l.length;i++){if(c=l[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(v){an(v)}u.currentTarget=null,n=f}}}}function w(t,e){var a=e[Gn];a===void 0&&(a=e[Gn]=new Set);var l=t+"__bubble";a.has(l)||(gr(e,t,2,!1),a.add(l))}function _c(t,e,a){var l=0;e&&(l|=4),gr(a,t,l,e)}var vn="_reactListening"+Math.random().toString(36).slice(2);function Mc(t){if(!t[vn]){t[vn]=!0,rf.forEach(function(a){a!=="selectionchange"&&(km.has(a)||_c(a,!1,t),_c(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vn]||(e[vn]=!0,_c("selectionchange",!1,e))}}function gr(t,e,a,l){switch(Xr(e)){case 2:var u=b0;break;case 8:u=R0;break;default:u=Xc}a=u.bind(null,e,a,t),u=void 0,!In||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(u=!0),l?u!==void 0?t.addEventListener(e,a,{capture:!0,passive:u}):t.addEventListener(e,a,!0):u!==void 0?t.addEventListener(e,a,{passive:u}):t.addEventListener(e,a,!1)}function Uc(t,e,a,l,u){var n=l;if((e&1)===0&&(e&2)===0&&l!==null)t:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=l.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=La(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){l=n=i;continue t}c=c.parentNode}}l=l.return}Of(function(){var m=n,v=Wn(a),T=[];t:{var h=Pf.get(t);if(h!==void 0){var y=Uu,B=t;switch(t){case"keypress":if(_u(a)===0)break t;case"keydown":case"keyup":y=wd;break;case"focusin":B="focus",y=ei;break;case"focusout":B="blur",y=ei;break;case"beforeblur":case"afterblur":y=ei;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Zd;break;case Wf:case Ff:case If:y=Hd;break;case $f:y=Jd;break;case"scroll":case"scrollend":y=_d;break;case"wheel":y=Wd;break;case"copy":case"cut":case"paste":y=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Uf;break;case"toggle":case"beforetoggle":y=Id}var C=(e&4)!==0,tt=!C&&(t==="scroll"||t==="scrollend"),r=C?h!==null?h+"Capture":null:h;C=[];for(var o=m,d;o!==null;){var g=o;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||r===null||(g=Al(o,r),g!=null&&C.push(nu(o,g,d))),tt)break;o=o.return}0<C.length&&(h=new y(h,B,null,a,v),T.push({event:h,listeners:C}))}}if((e&7)===0){t:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&a!==kn&&(B=a.relatedTarget||a.fromElement)&&(La(B)||B[Ha]))break t;if((y||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,y?(B=a.relatedTarget||a.toElement,y=m,B=B?La(B):null,B!==null&&(tt=J(B),C=B.tag,B!==tt||C!==5&&C!==27&&C!==6)&&(B=null)):(y=null,B=m),y!==B)){if(C=_f,g="onMouseLeave",r="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(C=Uf,g="onPointerLeave",r="onPointerEnter",o="pointer"),tt=y==null?h:Rl(y),d=B==null?h:Rl(B),h=new C(g,o+"leave",y,a,v),h.target=tt,h.relatedTarget=d,g=null,La(v)===m&&(C=new C(r,o+"enter",B,a,v),C.target=d,C.relatedTarget=tt,g=C),tt=g,y&&B)e:{for(C=y,r=B,o=0,d=C;d;d=hl(d))o++;for(d=0,g=r;g;g=hl(g))d++;for(;0<o-d;)C=hl(C),o--;for(;0<d-o;)r=hl(r),d--;for(;o--;){if(C===r||r!==null&&C===r.alternate)break e;C=hl(C),r=hl(r)}C=null}else C=null;y!==null&&Tr(T,h,y,C,!1),B!==null&&tt!==null&&Tr(T,tt,B,C,!0)}}t:{if(h=m?Rl(m):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var N=Yf;else if(Bf(h))if(jf)N=cm;else{N=nm;var G=um}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&Jn(m.elementType)&&(N=Yf):N=im;if(N&&(N=N(t,m))){qf(T,N,a,v);break t}G&&G(t,h,m),t==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Kn(h,"number",h.value)}switch(G=m?Rl(m):window,t){case"focusin":(Bf(G)||G.contentEditable==="true")&&(Va=G,ci=m,zl=null);break;case"focusout":zl=ci=Va=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,Jf(T,a,v);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":Jf(T,a,v)}var _;if(li)t:{switch(t){case"compositionstart":var H="onCompositionStart";break t;case"compositionend":H="onCompositionEnd";break t;case"compositionupdate":H="onCompositionUpdate";break t}H=void 0}else Xa?Lf(t,a)&&(H="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(H="onCompositionStart");H&&(zf&&a.locale!=="ko"&&(Xa||H!=="onCompositionStart"?H==="onCompositionEnd"&&Xa&&(_=Nf()):(Xe=v,$n="value"in Xe?Xe.value:Xe.textContent,Xa=!0)),G=Sn(m,H),0<G.length&&(H=new Mf(H,t,null,a,v),T.push({event:H,listeners:G}),_?H.data=_:(_=xf(a),_!==null&&(H.data=_)))),(_=Pd?tm(t,a):em(t,a))&&(H=Sn(m,"onBeforeInput"),0<H.length&&(G=new Mf("onBeforeInput","beforeinput",null,a,v),T.push({event:G,listeners:H}),G.data=_)),Zm(T,t,m,a,v)}Sr(T,e)})}function nu(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Sn(t,e){for(var a=e+"Capture",l=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Al(t,a),u!=null&&l.unshift(nu(t,u,n)),u=Al(t,e),u!=null&&l.push(nu(t,u,n))),t.tag===3)return l;t=t.return}return[]}function hl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Tr(t,e,a,l,u){for(var n=e._reactName,i=[];a!==null&&a!==l;){var c=a,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===l)break;c!==5&&c!==26&&c!==27||m===null||(f=m,u?(m=Al(a,n),m!=null&&i.unshift(nu(a,m,f))):u||(m=Al(a,n),m!=null&&i.push(nu(a,m,f)))),a=a.return}i.length!==0&&t.push({event:e,listeners:i})}var Wm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function br(t){return(typeof t=="string"?t:""+t).replace(Wm,`
`).replace(Fm,"")}function Rr(t,e){return e=br(e),br(t)===e}function gn(){}function P(t,e,a,l,u,n){switch(a){case"children":typeof l=="string"?e==="body"||e==="textarea"&&l===""||Ga(t,l):(typeof l=="number"||typeof l=="bigint")&&e!=="body"&&Ga(t,""+l);break;case"className":Au(t,"class",l);break;case"tabIndex":Au(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Au(t,a,l);break;case"style":Af(t,l,n);break;case"data":if(e!=="object"){Au(t,"data",l);break}case"src":case"href":if(l===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Nu(""+l),t.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(e!=="input"&&P(t,e,"name",u.name,u,null),P(t,e,"formEncType",u.formEncType,u,null),P(t,e,"formMethod",u.formMethod,u,null),P(t,e,"formTarget",u.formTarget,u,null)):(P(t,e,"encType",u.encType,u,null),P(t,e,"method",u.method,u,null),P(t,e,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(a);break}l=Nu(""+l),t.setAttribute(a,l);break;case"onClick":l!=null&&(t.onclick=gn);break;case"onScroll":l!=null&&w("scroll",t);break;case"onScrollEnd":l!=null&&w("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(E(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}a=Nu(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""+l):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":l===!0?t.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(a,l):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(a,l):t.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(a):t.setAttribute(a,l);break;case"popover":w("beforetoggle",t),w("toggle",t),Ru(t,"popover",l);break;case"xlinkActuate":Oe(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Oe(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Oe(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Oe(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Oe(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Oe(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Oe(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Ru(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nd.get(a)||a,Ru(t,a,l))}}function zc(t,e,a,l,u,n){switch(a){case"style":Af(t,l,n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(E(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"children":typeof l=="string"?Ga(t,l):(typeof l=="number"||typeof l=="bigint")&&Ga(t,""+l);break;case"onScroll":l!=null&&w("scroll",t);break;case"onScrollEnd":l!=null&&w("scrollend",t);break;case"onClick":l!=null&&(t.onclick=gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!df.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),e=a.slice(2,u?a.length-7:void 0),n=t[Yt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(e,n,u),typeof l=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(e,l,u);break t}a in t?t[a]=l:l===!0?t.setAttribute(a,""):Ru(t,a,l)}}}function Ot(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":w("error",t),w("load",t);var l=!1,u=!1,n;for(n in a)if(a.hasOwnProperty(n)){var i=a[n];if(i!=null)switch(n){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:P(t,e,n,i,a,null)}}u&&P(t,e,"srcSet",a.srcSet,a,null),l&&P(t,e,"src",a.src,a,null);return;case"input":w("invalid",t);var c=n=i=u=null,f=null,m=null;for(l in a)if(a.hasOwnProperty(l)){var v=a[l];if(v!=null)switch(l){case"name":u=v;break;case"type":i=v;break;case"checked":f=v;break;case"defaultChecked":m=v;break;case"value":n=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(E(137,e));break;default:P(t,e,l,v,a,null)}}gf(t,n,c,f,m,i,u,!1),pu(t);return;case"select":w("invalid",t),l=i=n=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:P(t,e,u,c,a,null)}e=n,a=i,t.multiple=!!l,e!=null?ja(t,!!l,e,!1):a!=null&&ja(t,!!l,a,!0);return;case"textarea":w("invalid",t),n=u=l=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(E(91));break;default:P(t,e,i,c,a,null)}bf(t,l,u,n),pu(t);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(l=a[f],l!=null))switch(f){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:P(t,e,f,l,a,null)}return;case"dialog":w("beforetoggle",t),w("toggle",t),w("cancel",t),w("close",t);break;case"iframe":case"object":w("load",t);break;case"video":case"audio":for(l=0;l<uu.length;l++)w(uu[l],t);break;case"image":w("error",t),w("load",t);break;case"details":w("toggle",t);break;case"embed":case"source":case"link":w("error",t),w("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(l=a[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,e));default:P(t,e,m,l,a,null)}return;default:if(Jn(e)){for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!==void 0&&zc(t,e,v,l,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(l=a[c],l!=null&&P(t,e,c,l,a,null))}function Im(t,e,a,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,m=null,v=null;for(y in a){var T=a[y];if(a.hasOwnProperty(y)&&T!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=T;default:l.hasOwnProperty(y)||P(t,e,y,null,l,T)}}for(var h in l){var y=l[h];if(T=a[h],l.hasOwnProperty(h)&&(y!=null||T!=null))switch(h){case"type":n=y;break;case"name":u=y;break;case"checked":m=y;break;case"defaultChecked":v=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(E(137,e));break;default:y!==T&&P(t,e,h,y,l,T)}}Zn(t,i,c,f,m,v,n,u);return;case"select":y=i=c=h=null;for(n in a)if(f=a[n],a.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":y=f;default:l.hasOwnProperty(n)||P(t,e,n,null,l,f)}for(u in l)if(n=l[u],f=a[u],l.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":h=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&P(t,e,u,n,l,f)}e=c,a=i,l=y,h!=null?ja(t,!!a,h,!1):!!l!=!!a&&(e!=null?ja(t,!!a,e,!0):ja(t,!!a,a?[]:"",!1));return;case"textarea":y=h=null;for(c in a)if(u=a[c],a.hasOwnProperty(c)&&u!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:P(t,e,c,null,l,u)}for(i in l)if(u=l[i],n=a[i],l.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":h=u;break;case"defaultValue":y=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(E(91));break;default:u!==n&&P(t,e,i,u,l,n)}Tf(t,h,y);return;case"option":for(var B in a)if(h=a[B],a.hasOwnProperty(B)&&h!=null&&!l.hasOwnProperty(B))switch(B){case"selected":t.selected=!1;break;default:P(t,e,B,null,l,h)}for(f in l)if(h=l[f],y=a[f],l.hasOwnProperty(f)&&h!==y&&(h!=null||y!=null))switch(f){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:P(t,e,f,h,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in a)h=a[C],a.hasOwnProperty(C)&&h!=null&&!l.hasOwnProperty(C)&&P(t,e,C,null,l,h);for(m in l)if(h=l[m],y=a[m],l.hasOwnProperty(m)&&h!==y&&(h!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,e));break;default:P(t,e,m,h,l,y)}return;default:if(Jn(e)){for(var tt in a)h=a[tt],a.hasOwnProperty(tt)&&h!==void 0&&!l.hasOwnProperty(tt)&&zc(t,e,tt,void 0,l,h);for(v in l)h=l[v],y=a[v],!l.hasOwnProperty(v)||h===y||h===void 0&&y===void 0||zc(t,e,v,h,l,y);return}}for(var r in a)h=a[r],a.hasOwnProperty(r)&&h!=null&&!l.hasOwnProperty(r)&&P(t,e,r,null,l,h);for(T in l)h=l[T],y=a[T],!l.hasOwnProperty(T)||h===y||h==null&&y==null||P(t,e,T,h,l,y)}var Cc=null,Hc=null;function Tn(t){return t.nodeType===9?t:t.ownerDocument}function Ar(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pr(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Lc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xc=null;function $m(){var t=window.event;return t&&t.type==="popstate"?t===xc?!1:(xc=t,!0):(xc=null,!1)}var Or=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,Nr=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nr<"u"?function(t){return Nr.resolve(null).then(t).catch(e0)}:Or;function e0(t){setTimeout(function(){throw t})}function na(t){return t==="head"}function Dr(t,e){var a=e,l=0,u=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(0<l&&8>l){a=l;var i=t.ownerDocument;if(a&1&&iu(i.documentElement),a&2&&iu(i.body),a&4)for(a=i.head,iu(a),i=a.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[bl]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}if(u===0){t.removeChild(n),hu(e);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:l=a.charCodeAt(0)-48;else l=0;a=n}while(a);hu(e)}function Bc(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Bc(a),Qn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function a0(t,e,a,l){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[bl])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=ye(t.nextSibling),t===null)break}return null}function l0(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ye(t.nextSibling),t===null))return null;return t}function qc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function u0(t,e){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")e();else{var l=function(){e(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function ye(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Yc=null;function _r(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(e===0)return t;e--}else a==="/$"&&e++}t=t.previousSibling}return null}function Mr(t,e,a){switch(e=Tn(a),t){case"html":if(t=e.documentElement,!t)throw Error(E(452));return t;case"head":if(t=e.head,!t)throw Error(E(453));return t;case"body":if(t=e.body,!t)throw Error(E(454));return t;default:throw Error(E(451))}}function iu(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Qn(t)}var oe=new Map,Ur=new Set;function bn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var je=p.d;p.d={f:n0,r:i0,D:c0,C:f0,L:s0,m:o0,X:d0,S:r0,M:m0};function n0(){var t=je.f(),e=dn();return t||e}function i0(t){var e=xa(t);e!==null&&e.tag===5&&e.type==="form"?Ws(e):je.r(t)}var yl=typeof document>"u"?null:document;function zr(t,e,a){var l=yl;if(l&&typeof e=="string"&&e){var u=le(e);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ur.has(u)||(Ur.add(u),t={rel:t,crossOrigin:a,href:e},l.querySelector(u)===null&&(e=l.createElement("link"),Ot(e,"link",t),gt(e),l.head.appendChild(e)))}}function c0(t){je.D(t),zr("dns-prefetch",t,null)}function f0(t,e){je.C(t,e),zr("preconnect",t,e)}function s0(t,e,a){je.L(t,e,a);var l=yl;if(l&&t&&e){var u='link[rel="preload"][as="'+le(e)+'"]';e==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+le(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+le(a.imageSizes)+'"]')):u+='[href="'+le(t)+'"]';var n=u;switch(e){case"style":n=El(t);break;case"script":n=vl(t)}oe.has(n)||(t=M({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),oe.set(n,t),l.querySelector(u)!==null||e==="style"&&l.querySelector(cu(n))||e==="script"&&l.querySelector(fu(n))||(e=l.createElement("link"),Ot(e,"link",t),gt(e),l.head.appendChild(e)))}}function o0(t,e){je.m(t,e);var a=yl;if(a&&t){var l=e&&typeof e.as=="string"?e.as:"script",u='link[rel="modulepreload"][as="'+le(l)+'"][href="'+le(t)+'"]',n=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=vl(t)}if(!oe.has(n)&&(t=M({rel:"modulepreload",href:t},e),oe.set(n,t),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fu(n)))return}l=a.createElement("link"),Ot(l,"link",t),gt(l),a.head.appendChild(l)}}}function r0(t,e,a){je.S(t,e,a);var l=yl;if(l&&t){var u=Ba(l).hoistableStyles,n=El(t);e=e||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(cu(n)))c.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":e},a),(a=oe.get(n))&&jc(t,a);var f=i=l.createElement("link");gt(f),Ot(f,"link",t),f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Rn(i,e,l)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function d0(t,e){je.X(t,e);var a=yl;if(a&&t){var l=Ba(a).hoistableScripts,u=vl(t),n=l.get(u);n||(n=a.querySelector(fu(u)),n||(t=M({src:t,async:!0},e),(e=oe.get(u))&&Gc(t,e),n=a.createElement("script"),gt(n),Ot(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(u,n))}}function m0(t,e){je.M(t,e);var a=yl;if(a&&t){var l=Ba(a).hoistableScripts,u=vl(t),n=l.get(u);n||(n=a.querySelector(fu(u)),n||(t=M({src:t,async:!0,type:"module"},e),(e=oe.get(u))&&Gc(t,e),n=a.createElement("script"),gt(n),Ot(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},l.set(u,n))}}function Cr(t,e,a,l){var u=(u=q.current)?bn(u):null;if(!u)throw Error(E(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(e=El(a.href),a=Ba(u).hoistableStyles,l=a.get(e),l||(l={type:"style",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=El(a.href);var n=Ba(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(cu(t)))&&!n._p&&(i.instance=n,i.state.loading=5),oe.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},oe.set(t,a),n||h0(u,t,a,i.state))),e&&l===null)throw Error(E(528,""));return i}if(e&&l!==null)throw Error(E(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=vl(a),a=Ba(u).hoistableScripts,l=a.get(e),l||(l={type:"script",instance:null,count:0,state:null},a.set(e,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,t))}}function El(t){return'href="'+le(t)+'"'}function cu(t){return'link[rel="stylesheet"]['+t+"]"}function Hr(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function h0(t,e,a,l){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?l.loading=1:(e=t.createElement("link"),l.preload=e,e.addEventListener("load",function(){return l.loading|=1}),e.addEventListener("error",function(){return l.loading|=2}),Ot(e,"link",a),gt(e),t.head.appendChild(e))}function vl(t){return'[src="'+le(t)+'"]'}function fu(t){return"script[async]"+t}function Lr(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var l=t.querySelector('style[data-href~="'+le(a.href)+'"]');if(l)return e.instance=l,gt(l),l;var u=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),gt(l),Ot(l,"style",u),Rn(l,a.precedence,t),e.instance=l;case"stylesheet":u=El(a.href);var n=t.querySelector(cu(u));if(n)return e.state.loading|=4,e.instance=n,gt(n),n;l=Hr(a),(u=oe.get(u))&&jc(l,u),n=(t.ownerDocument||t).createElement("link"),gt(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ot(n,"link",l),e.state.loading|=4,Rn(n,a.precedence,t),e.instance=n;case"script":return n=vl(a.src),(u=t.querySelector(fu(n)))?(e.instance=u,gt(u),u):(l=a,(u=oe.get(n))&&(l=M({},a),Gc(l,u)),t=t.ownerDocument||t,u=t.createElement("script"),gt(u),Ot(u,"link",l),t.head.appendChild(u),e.instance=u);case"void":return null;default:throw Error(E(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(l=e.instance,e.state.loading|=4,Rn(l,a.precedence,t));return e.instance}function Rn(t,e,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,n=u,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===e)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function jc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Gc(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var An=null;function xr(t,e,a){if(An===null){var l=new Map,u=An=new Map;u.set(a,l)}else u=An,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(t))return l;for(l.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var n=a[u];if(!(n[bl]||n[Mt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(e)||"";i=t+i;var c=l.get(i);c?c.push(n):l.set(i,[n])}}return l}function Br(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function y0(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function qr(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var su=null;function E0(){}function v0(t,e,a){if(su===null)throw Error(E(475));var l=su;if(e.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var u=El(a.href),n=t.querySelector(cu(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=pn.bind(l),t.then(l,l)),e.state.loading|=4,e.instance=n,gt(n);return}n=t.ownerDocument||t,a=Hr(a),(u=oe.get(u))&&jc(a,u),n=n.createElement("link"),gt(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ot(n,"link",a),e.instance=n}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(l.count++,e=pn.bind(l),t.addEventListener("load",e),t.addEventListener("error",e))}}function S0(){if(su===null)throw Error(E(475));var t=su;return t.stylesheets&&t.count===0&&Qc(t,t.stylesheets),0<t.count?function(e){var a=setTimeout(function(){if(t.stylesheets&&Qc(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(a)}}:null}function pn(){if(this.count--,this.count===0){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var On=null;function Qc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,On=new Map,e.forEach(g0,t),On=null,pn.call(t))}function g0(t,e){if(!(e.state.loading&4)){var a=On.get(t);if(a)var l=a.get(null);else{a=new Map,On.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),l=i)}l&&a.set(null,l)}u=e.instance,i=u.getAttribute("data-precedence"),n=a.get(i)||l,n===l&&a.set(null,u),a.set(i,u),this.count++,l=pn.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),e.state.loading|=4}}var ou={$$typeof:Nt,Provider:null,Consumer:null,_currentValue:x,_currentValue2:x,_threadCount:0};function T0(t,e,a,l,u,n,i,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qn(0),this.hiddenUpdates=qn(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Yr(t,e,a,l,u,n,i,c,f,m,v,T){return t=new T0(t,e,a,i,c,f,m,T),e=1,n===!0&&(e|=24),n=Ft(3,null,null,e),t.current=n,n.stateNode=t,e=Ri(),e.refCount++,t.pooledCache=e,e.refCount++,n.memoizedState={element:l,isDehydrated:a,cache:e},Ni(n),t}function jr(t){return t?(t=ka,t):ka}function Gr(t,e,a,l,u,n){u=jr(u),l.context===null?l.context=u:l.pendingContext=u,l=Ke(e),l.payload={element:a},n=n===void 0?null:n,n!==null&&(l.callback=n),a=Je(t,l,e),a!==null&&(ee(a,t,e),Gl(a,t,e))}function Qr(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function wc(t,e){Qr(t,e),(t=t.alternate)&&Qr(t,e)}function wr(t){if(t.tag===13){var e=Ja(t,67108864);e!==null&&ee(e,t,67108864),wc(t,67108864)}}var Nn=!0;function b0(t,e,a,l){var u=S.T;S.T=null;var n=p.p;try{p.p=2,Xc(t,e,a,l)}finally{p.p=n,S.T=u}}function R0(t,e,a,l){var u=S.T;S.T=null;var n=p.p;try{p.p=8,Xc(t,e,a,l)}finally{p.p=n,S.T=u}}function Xc(t,e,a,l){if(Nn){var u=Vc(l);if(u===null)Uc(t,e,l,Dn,a),Vr(t,l);else if(p0(u,t,e,a,l))l.stopPropagation();else if(Vr(t,l),e&4&&-1<A0.indexOf(t)){for(;u!==null;){var n=xa(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=ha(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-kt(i);c.entanglements[1]|=f,i&=~f}Re(n),(F&6)===0&&(on=ve()+500,lu(0))}}break;case 13:c=Ja(n,2),c!==null&&ee(c,n,2),dn(),wc(n,2)}if(n=Vc(l),n===null&&Uc(t,e,l,Dn,a),n===u)break;u=n}u!==null&&l.stopPropagation()}else Uc(t,e,l,null,a)}}function Vc(t){return t=Wn(t),Zc(t)}var Dn=null;function Zc(t){if(Dn=null,t=La(t),t!==null){var e=J(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=dt(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Dn=t,null}function Xr(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fd()){case ef:return 2;case af:return 8;case Su:case sd:return 32;case lf:return 268435456;default:return 32}default:return 32}}var Kc=!1,ia=null,ca=null,fa=null,ru=new Map,du=new Map,sa=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vr(t,e){switch(t){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":ru.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":du.delete(e.pointerId)}}function mu(t,e,a,l,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:e,domEventName:a,eventSystemFlags:l,nativeEvent:n,targetContainers:[u]},e!==null&&(e=xa(e),e!==null&&wr(e)),t):(t.eventSystemFlags|=l,e=t.targetContainers,u!==null&&e.indexOf(u)===-1&&e.push(u),t)}function p0(t,e,a,l,u){switch(e){case"focusin":return ia=mu(ia,t,e,a,l,u),!0;case"dragenter":return ca=mu(ca,t,e,a,l,u),!0;case"mouseover":return fa=mu(fa,t,e,a,l,u),!0;case"pointerover":var n=u.pointerId;return ru.set(n,mu(ru.get(n)||null,t,e,a,l,u)),!0;case"gotpointercapture":return n=u.pointerId,du.set(n,mu(du.get(n)||null,t,e,a,l,u)),!0}return!1}function Zr(t){var e=La(t.target);if(e!==null){var a=J(e);if(a!==null){if(e=a.tag,e===13){if(e=dt(a),e!==null){t.blockedOn=e,vd(t.priority,function(){if(a.tag===13){var l=te();l=Yn(l);var u=Ja(a,l);u!==null&&ee(u,a,l),wc(a,l)}});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _n(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=Vc(t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);kn=l,a.target.dispatchEvent(l),kn=null}else return e=xa(a),e!==null&&wr(e),t.blockedOn=a,!1;e.shift()}return!0}function Kr(t,e,a){_n(t)&&a.delete(e)}function O0(){Kc=!1,ia!==null&&_n(ia)&&(ia=null),ca!==null&&_n(ca)&&(ca=null),fa!==null&&_n(fa)&&(fa=null),ru.forEach(Kr),du.forEach(Kr)}function Mn(t,e){t.blockedOn===e&&(t.blockedOn=null,Kc||(Kc=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,O0)))}var Un=null;function Jr(t){Un!==t&&(Un=t,D.unstable_scheduleCallback(D.unstable_NormalPriority,function(){Un===t&&(Un=null);for(var e=0;e<t.length;e+=3){var a=t[e],l=t[e+1],u=t[e+2];if(typeof l!="function"){if(Zc(l||a)===null)continue;break}var n=xa(a);n!==null&&(t.splice(e,3),e-=3,Zi(n,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function hu(t){function e(f){return Mn(f,t)}ia!==null&&Mn(ia,t),ca!==null&&Mn(ca,t),fa!==null&&Mn(fa,t),ru.forEach(e),du.forEach(e);for(var a=0;a<sa.length;a++){var l=sa[a];l.blockedOn===t&&(l.blockedOn=null)}for(;0<sa.length&&(a=sa[0],a.blockedOn===null);)Zr(a),a.blockedOn===null&&sa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],n=a[l+1],i=u[Yt]||null;if(typeof n=="function")i||Jr(a);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Yt]||null)c=i.formAction;else if(Zc(u)!==null)continue}else c=i.action;typeof c=="function"?a[l+1]=c:(a.splice(l,3),l-=3),Jr(a)}}}function Jc(t){this._internalRoot=t}zn.prototype.render=Jc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));var a=e.current,l=te();Gr(a,l,t,e,null,null)},zn.prototype.unmount=Jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(t.current,2,null,t,null,null),dn(),e[Ha]=null}};function zn(t){this._internalRoot=t}zn.prototype.unstable_scheduleHydration=function(t){if(t){var e=sf();t={blockedOn:null,target:t,priority:e};for(var a=0;a<sa.length&&e!==0&&e<sa[a].priority;a++);sa.splice(a,0,t),a===0&&Zr(t)}};var kr=ft.version;if(kr!=="19.1.0")throw Error(E(527,kr,"19.1.0"));p.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=U(e),t=t!==null?R(t):null,t=t===null?null:t.stateNode,t};var N0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cn.isDisabled&&Cn.supportsFiber)try{Sl=Cn.inject(N0),Jt=Cn}catch{}}return Eu.createRoot=function(t,e){if(!L(t))throw Error(E(299));var a=!1,l="",u=so,n=oo,i=ro,c=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(u=e.onUncaughtError),e.onCaughtError!==void 0&&(n=e.onCaughtError),e.onRecoverableError!==void 0&&(i=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(c=e.unstable_transitionCallbacks)),e=Yr(t,1,!1,null,null,a,l,u,n,i,c,null),t[Ha]=e.current,Mc(t),new Jc(e)},Eu.hydrateRoot=function(t,e,a){if(!L(t))throw Error(E(299));var l=!1,u="",n=so,i=oo,c=ro,f=null,m=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(f=a.unstable_transitionCallbacks),a.formState!==void 0&&(m=a.formState)),e=Yr(t,1,!0,e,a??null,l,u,n,i,c,f,m),e.context=jr(null),a=e.current,l=te(),l=Yn(l),u=Ke(l),u.callback=null,Je(a,u,l),a=l,e.current.lanes=a,Tl(e,a),Re(e),t[Ha]=e.current,Mc(t),new zn(e)},Eu.version="19.1.0",Eu}var ud;function B0(){if(ud)return Fc.exports;ud=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(ft){console.error(ft)}}return D(),Fc.exports=x0(),Fc.exports}var q0=B0();function Y0(){const[D,ft]=nd.useState(null),W=[{id:1,question:"1. What is SQL?",answer:"SQL (Structured Query Language) is a language used to store, manage, and retrieve data from relational databases like MySQL, PostgreSQL, SQLite, etc.",codeExample:`
SELECT * FROM users;
      `},{id:2,question:"2. What are the different types of SQL commands (DDL, DML, DCL, TCL)?",answer:`1. DDL (Data Definition Language) 
Defines the structure of the database. 
	CREATE, ALTER, DROP, TRUNCATE 

2. DML (Data Manipulation Language) 
Handles data inside tables. 
	INSERT, UPDATE, DELETE, SELECT 

3. DCL (Data Control Language) 
Controls access to data. 
	GRANT, REVOKE 

4. TCL (Transaction Control Language) 
Manages changes made by DML. 
	COMMIT, ROLLBACK, SAVEPOINT 
5.DQL (Data Query Language) 
Used to query the database. 
	SELECT`,codeExample:`
-- DDL Example
CREATE TABLE users (id INT, name VARCHAR(50));

-- DML Example
INSERT INTO users (id, name) VALUES (1, 'John');

-- DCL Example
GRANT SELECT ON users TO user1;

-- TCL Example
COMMIT;

-- DQL Example
SELECT * FROM users;`},{id:3,question:"3. What is the use of GROUP BY and ORDER BY?",answer:`GROUP BY is used to arrange identical data into groups  like COUNT(), SUM(), etc.. 
ORDER BY is used to sort the result set in either ascending or descending order.`,codeExample:`
-- GROUP BY groups data
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department;

-- ORDER BY sorts data
SELECT * FROM employees 
ORDER BY salary DESC;


GROUP BY → groups similar data.

ORDER BY → arranges data by column values.


-------------------------------------------------------------------------------

📊 What is GROUP BY in SQL?
The GROUP BY clause is used to group rows that have the same values in specific columns and 
then perform aggregate functions (like COUNT, SUM, AVG, etc.) on each group.


🧠 Syntax:
SELECT column_name, AGGREGATE_FUNCTION(column_name)
FROM table_name
GROUP BY column_name;


✅ Example:
Let’s say you have a table called employees:

| id | name    | department | salary |
| -- | ------- | ---------- | ------ |
| 1  | Alice   | HR         | 50000  |
| 2  | Bob     | IT         | 60000  |
| 3  | Charlie | IT         | 65000  |
| 4  | David   | HR         | 52000  |
| 5  | Eva     | Sales      | 45000  |


📌 Query:
SELECT department, AVG(salary)
FROM employees
GROUP BY department;


📤 Output:
| department | avg     |
| ---------- | ------- |
| HR         | 51000.0 |
| IT         | 62500.0 |
| Sales      | 45000.0 |

This groups employees by their department and calculates the average salary for each department.

-------------------------------------------------------------------------------

🎯 Common Aggregate Functions with GROUP BY:
| Function  | Description                |
| --------- | -------------------------- |
| COUNT() | Number of rows in each group |
| SUM()   | Total value                  |
| AVG()   | Average value                |
| MIN()   | Smallest value               |
| MAX()   | Largest value                |


❗ Important Rules:

Every column in SELECT must either be in GROUP BY or be an aggregate function.
GROUP BY is often used with WHERE and HAVING.


🛠️ Example with HAVING:

SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 1;

→ Shows only departments that have more than 1 employee.
`},{id:4,question:"4. What is the difference between WHERE and HAVING?",answer:`WHERE is used to filter rows before grouping. 
HAVING is used to filter groups after using GROUP BY.`,codeExample:`
-- WHERE filters rows
SELECT * FROM employees 
WHERE salary > 50000;

-- HAVING filters grouped results
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 5;
`},{id:5,question:"5. What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?",answer:"Default JOIN = INNER JOIN",codeExample:`
👩‍💼 Table: Employees
emp_id	name	dept_id
1	Raj	10
2	Priya	20
3	Aman	30
4	Neha	NULL

🏢 Table: Departments
dept_id	dept_name
10	HR
20	Sales
40	Marketing

----------------------------------------------------------------------------------------

🔸 INNER JOIN
Shows only matching rows from both tables.

SELECT * 
FROM Employees 
INNER JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales

----------------------------------------------------------------------------------------

🔸 LEFT JOIN
Shows all rows from left table (Employees), and matching rows from right table (Departments). 
If no match, shows NULL.

SELECT * 
FROM Employees 
LEFT JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales
3	Aman	30	NULL
4	Neha	NULL	NULL

----------------------------------------------------------------------------------------

🔸 RIGHT JOIN
Shows all rows from right table (Departments), and matching from left (Employees). 
If no match, shows NULL.

SELECT * 
FROM Employees 
RIGHT JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales
NULL	NULL	40	Marketing

----------------------------------------------------------------------------------------

🔸 FULL JOIN
Shows all rows from both tables, with NULL where there's no match.

SELECT * 
FROM Employees 
FULL JOIN Departments 
ON Employees.dept_id = Departments.dept_id;

✅ Result:
emp_id	name	dept_id	dept_name
1	Raj	10	HR
2	Priya	20	Sales
3	Aman	30	NULL
4	Neha	NULL	NULL
NULL	NULL	40	Marketing`},{id:6,question:"6. What is a primary key and a foreign key?",answer:`Primary Key: A column (or set of columns) that uniquely identifies each row in a table.
✅ It must be unique and cannot be NULL.

Foreign Key: A column in one table that refers to the primary key in another table.
✅ It creates a relationship between two tables.`,codeExample:`
-- Primary Key
CREATE TABLE Students (
  roll_number INT PRIMARY KEY,
  name VARCHAR(100)
);

-- Foreign Key
CREATE TABLE Marks (
  mark_id INT PRIMARY KEY,
  roll_number INT,
  marks INT,
  FOREIGN KEY (roll_number) REFERENCES Students(roll_number)
);


Simple Example:

Students Table
roll_number	name
1	        Raj
2	        Simran

Marks Table
mark_id	 roll_number	marks
101	    1	         90
102         2	         85



Students table (with roll_number as primary key)

Marks table (with roll_number as foreign key to link to the Students table)


Here:

Students.roll_number is a Primary Key

Marks.roll_number is a Foreign Key (pointing to Students)`},{id:7,question:"7. What is the difference between UNION and UNION ALL?",answer:`UNION combines results from two or more SELECT statements, removing duplicates. 
UNION ALL combines results without removing duplicates.`,codeExample:`
| Feature     |   UNION                                  | UNION ALL                          |
| ----------- | ---------------------------------------- | ---------------------------------- |
| Duplicates  | Removes duplicate rows                   | Includes all rows, even duplicates |
| Performance | Slower (extra work to remove duplicates) | Faster (no duplicate check)        |
| Use Case    | When you want unique records only        | When you want full data as-is      |


-- Removes duplicates
SELECT name FROM students
UNION
SELECT name FROM teachers;

-- Keeps duplicates
SELECT name FROM students
UNION ALL
SELECT name FROM teachers;
`},{id:8,question:"8. What is normalization? What are the normal forms?",answer:`Normalization is a way to arrange data in a database to: 
	Remove duplicate data 
	Make data easy to manage and update`,codeExample:`
🔹 1NF (First Normal Form)

Rule:
Each cell should have only one value.
Each row should be unique.

✅ Good:

Roll | Name | Subject
----------------------
1    | Raj  | Math
2    | Ravi | Science

❌ Bad:

Roll | Name | Subjects
-------------------------
1    | Raj  | Math, Science   ← two values in one cell ❌

-----------------------------------------------------------------------------

🔹 2NF (Second Normal Form)

Rule:
Must be in 1NF
No partial dependency (don’t store data that depends on part of a combined key)
                      (સંયુક્ત કીના ભાગ પર આધાર રાખતો ડેટા સંગ્રહિત કરશો નહીં)

✅ Good:

Break table if subject depends only on Roll number:
Students Table:
Roll | Name
-------------
1    | Raj

Subjects Table:
Roll | Subject
---------------
1    | Math

-----------------------------------------------------------------------------

🔹 3NF (Third Normal Form)

Rule:
Must be in 2NF
No transitive dependency (columns should depend only on the key, not on other columns)
                         (કૉલમ ફક્ત કી પર આધાર રાખવો જોઈએ, અન્ય કૉલમ પર નહીં)

❌ Bad:

Roll | Name | Department | Dept_HOD
-----------------------------------
1    | Raj  | CS         | Mr. Amit
→ Dept_HOD depends on Department, not Roll → ❌

✅ Good:

Students Table:
Roll | Name | Department
--------------------------
1    | Raj  | CS

Department Table:
Department | Dept_HOD
------------------------
CS         | Mr. Amit

interview to say:
In 2NF, data should depend on the full key.
In 3NF, data should depend only on the key, not on other non-key columns.
`},{id:9,question:"9. What is denormalization?",answer:`Denormalization is the process of combining normalized tables to improve read performance. 
It can lead to data redundancy but speeds up data retrieval.`,codeExample:`
-- Normalized Tables
Students Table:
Roll | Name
--------------------------
1    | Raj
2    | Simran
3    | Aman

Subjects Table:
Roll | Subject
--------------------------
1    | Math
2    | Science
3    | English

Marks Table:
Roll | Subject | Marks
--------------------------
1    | Math    | 90
2    | Science | 85
3    | English | 88


-- Denormalized Table
Students_Subjects_Marks Table:
Roll | Name   | Subject  | Marks
--------------------------
1    | Raj    | Math     | 90
2    | Simran | Science  | 85
3    | Aman   | English  | 88


-- Normalized tables are split into smaller tables to reduce redundancy.
-- Denormalized table combines them for faster access.
`},{id:10,question:"10. What is the difference between DELETE, TRUNCATE, and DROP?",answer:"",codeExample:`
| Command  | What it does                            | Can Rollback? | Removes Table? | Speed                         |
| ---------| --------------------------------------- | ------------- | -------------- | ----------------------------- |
| DELETE   | Deletes selected rows (with 'WHERE')    | ✅ Yes       | ❌ No          | Slower (row by row)           |
| TRUNCATE | Deletes all rows (no 'WHERE')           | ❌ No        | ❌ No          | Faster than DELETE            |
| DROP     | Deletes entire table (structure + data) | ❌ No        | ✅ Yes         | Fastest (removes whole table) |


Example:
DELETE FROM students WHERE roll = 1;   -- Deletes only one row

TRUNCATE TABLE students;              -- Deletes all rows quickly

DROP TABLE students;                  -- Deletes table completely

`},{id:11,question:"11. What is an index? Why is it used?",answer:`An index is a database object that improves the speed of data retrieval operations on a table. 
It works like a book's index, allowing quick access to rows without scanning the entire table.`,codeExample:`
Now you want to search for "Raj".
  Without index: It checks every row (slow).
  With index: It quickly jumps to "Raj" (fast).
  

🔸 Step 1: Create a table

  CREATE TABLE students (
      id INT PRIMARY KEY,
      name VARCHAR(100),
      age INT
  );
Now you have a students table with 3 columns: id, name, and age.


🔸 Step 2: Insert some data

  INSERT INTO students (id, name, age) VALUES
  (1, 'Raj', 18),
  (2, 'Pooja', 19),
  (3, 'Amit', 20);


🔸 Step 3: Create an index on the name column

  CREATE INDEX raj_name_index ON students(name);

Here, raj_name_index is just a custom name for the index.
This index helps make searches like WHERE name = 'Raj' faster.


🔸 Step 4: Use the index (automatically used by database)
Now if you do this:

  SELECT * FROM students WHERE name = 'Raj';

The database will use the raj_name_index index to search faster.


🔸 Step 5: Drop (delete) the index

  DROP INDEX raj_name_index;

This removes the index named raj_name_index.
It does not delete any data from the students table — just the index.

-------------------------------------------------------------------------------------

Yes, you're right — the query:

SELECT * FROM employees WHERE name = 'John';

will work perfectly fine without creating an index. ✅
But here's the key point:

🔍 With vs. Without Index
| Case              | What Happens                                                                                                                                                              |
| ----------------  | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ❌ Without Index | The database scans every row in the employees table to find where name = John. This is called a full table scan, which is slow for large tables.                          |
| ✅ With Index    | The database uses the index on name to quickly find only the rows that match 'John', which is much faster, especially when the table has thousands or millions of rows.   |

-------------------------------------------------------------------------------------

🎯 How to Choose Which Columns to Index:

| Situation                     | Index it?   | Reason                               |
| ----------------------------- | ---------   | ------------------------------------ |
| Used in WHERE clause often    | ✅ Yes     | Speeds up searching                  |
| Used in JOINs                 | ✅ Yes     | Speeds up joining two tables         |
| Used in ORDER BY or GROUP BY  | ✅ Yes     | Helps sort/group faster              |
| Frequently updated column     | ❌ No      | Index slows down INSERT/UPDATE       |
| Low uniqueness (e.g., gender) | ❌ No      | Index not useful for repeated values |

-------------------------------------------------------------------------------------

❌ Disadvantages of Using Indexes in DBMS

| 🚩 Problem                               | 📖 Explanation                                                                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ ---------------- |
| 1. Slower INSERT, UPDATE, DELETE         | Every time you add, change, or remove data, the database also needs to update the index. This can slow down write operations. |
| 2. Takes extra storage                   | Indexes require additional disk space — sometimes large if you index many columns.                                            |
| 3. Not useful for small tables           | For small tables, scanning the whole table is already fast — an index may not improve speed much.                             |
| 4. Not useful on low-cardinality columns | If a column has repeated values (like gender = 'Male/Female'), the index won’t help much.                                     |
| 5. Can be misused                        | If you index too many columns, it can slow down performance overall instead of helping.                                       |
| 6. Can cause query plan confusion        | The database might choose the wrong index if multiple indexes exist, leading to slower queries.                               |
| 7. Requires maintenance                  | Indexes may become fragmented over time and need rebuilding or optimization.                                                  |


  `},{id:12,question:"12. What are constraints in SQL?",answer:`Constraints are rules applied to columns in a table to ensure data integrity. 
They restrict the type of data that can be inserted into a table.`,codeExample:`
PRIMARY KEY – Uniquely identifies each row in a table.

FOREIGN KEY – Links to a primary key in another table.

NOT NULL – Ensures a column cannot have a NULL value.

UNIQUE – Ensures all values in a column are different.

CHECK – Ensures that values in a column meet a specific condition.

DEFAULT – Sets a default value for a column when no value is provided.


CREATE TABLE Students (
  ID INT PRIMARY KEY,
  Name VARCHAR(50) NOT NULL,
  Age INT CHECK (Age >= 18),
  City VARCHAR(50) DEFAULT 'Unknown'
);
`},{id:13,question:"13. What is a subquery? Explain with example.",answer:`A subquery is a query nested inside another SQL query. 
It can be used to retrieve data that will be used in the main query.`,codeExample:`
-- Table: Students
ID | Name   | Age
---|--------|-----
1  | Raj    | 18
2  | Simran | 20
3  | Aman   | 22

-- Table: Marks
ID | StudentID | TotalMarks
---|-----------|------------
1  |     1     |    80
2  |     2     |    95
3  |     3     |    70

SELECT Name
FROM Students
WHERE ID = (
  SELECT StudentID
  FROM Marks
  ORDER BY TotalMarks DESC
  LIMIT 1
);

-- This will return the name of the student with the highest total marks.
-- In this case, it will return 'Simran' because she has the highest total marks of 95.
`},{id:14,question:"14. What is the difference between IN and EXISTS?",answer:`IN checks if a value is present in a list or subquery result. 
EXISTS checks if a subquery returns any rows.`,codeExample:`
Use IN for comparing values.

Use EXISTS when checking if a row exists that matches a condition.

-- Using IN
SELECT name FROM Students
WHERE id IN (1, 2, 3);
This gives names of students whose id is 1, 2, or 3.


-- Using EXISTS
SELECT name FROM Students s
WHERE EXISTS (
  SELECT * FROM Marks m WHERE m.student_id = s.id
);
`},{id:15,question:"15. What is a view in SQL?",answer:`A view is a virtual table based on the result of a SELECT query. 
It does not store data itself but provides a way to present data from one or more tables.`,codeExample:`
-- Create a view
CREATE VIEW StudentView AS
SELECT s.id, s.name, m.total_marks
FROM Students s
JOIN Marks m ON s.id = m.student_id;

-- Use the view
SELECT * FROM StudentView;
-- This creates a view named StudentView that shows student names and their total marks.
-- You can use the view like a regular table.

-- Drop the view
DROP VIEW StudentView;
-- This removes the view from the database.
-- Note: Views can be used to simplify complex queries and provide a layer of security by restricting access to specific data.

--update the view
CREATE OR REPLACE VIEW StudentView AS
SELECT s.id, s.name, m.total_marks
FROM Students s
JOIN Marks m ON s.id = m.student_id
WHERE m.total_marks > 75;
-- This updates the view to show only students with total marks greater than 75.

`},{id:16,question:"16. What is the difference between CHAR and VARCHAR?",answer:`CHAR is a fixed-length string data type, while VARCHAR is a variable-length string data type. 
CHAR always reserves the same amount of space, while VARCHAR only uses the space needed for the actual string.`,codeExample:`
-- CHAR Example
CREATE TABLE example1 (
  code CHAR(5)
);

-- VARCHAR Example
CREATE TABLE example2 (
  code VARCHAR(5)
);

-- CHAR will always take 5 bytes, even if the string is shorter.
In CHAR(5), 'AB' is stored as 'AB ' (with 3 spaces).

-- VARCHAR will take only the space needed for the string.
In VARCHAR(5), 'AB' is stored as 'AB'.
`},{id:17,question:"17. What is a stored procedure?",answer:`A stored procedure is like a function in SQL that performs a task (e.g., insert, update, or fetch data) and is stored in the database. 

✅ Why use it? 
	To avoid writing the same SQL code again and again 
	To improve performance 
	To enhance security by controlling data access`,codeExample:`
-- Create a stored procedure
CREATE PROCEDURE GetStudents()
BEGIN
  SELECT * FROM students;
END;

-- Call the stored procedure
CALL GetStudents();
`},{id:18,question:"18. What are functions in SQL?",answer:`Functions are reusable SQL code blocks that perform a specific task and return a value. 
They can be used in SELECT, WHERE, and other clauses.`,codeExample:`
✅ Types of SQL Functions:
Scalar Functions – Return a single value.
👉 Example: UPPER(), LOWER(), LEN(), ROUND()

Aggregate Functions – Return a single result from a set of values.
👉 Example: SUM(), AVG(), COUNT(), MAX(), MIN()

String Functions – Work with text.
👉 Example: CONCAT(), SUBSTRING()

Date Functions – Handle date/time.
👉 Example: NOW(), CURDATE(), DATEDIFF()

Mathematical Functions – Work with numbers.
👉 Example: ABS(), CEIL(), FLOOR()

types of functions in SQL:

built-in functions example:

SELECT UPPER(name) FROM students;
-- Converts all student names to uppercase


user-defined functions:
CREATE FUNCTION GetStudentsAboveAge (@age INT)
RETURNS TABLE
AS
RETURN
(
    SELECT * FROM students WHERE age > @age
);
-- Call the function
SELECT * FROM GetStudentsAboveAge(18);
`},{id:19,question:"19. What is the difference between BETWEEN and IN?",answer:`BETWEEN checks if a value is within a range (inclusive). 
IN checks if a value matches any value in a list.`,codeExample:`
-- Using BETWEEN
SELECT * FROM students WHERE age BETWEEN 18 AND 25;

-- Using IN
SELECT * FROM students WHERE age IN (18, 21, 25);

-- BETWEEN checks if age is between 18 and 25 (inclusive).
-- IN checks if age is one of the values in the list (18, 21, or 25).
`},{id:20,question:"20. What is a trigger in SQL?",answer:`A trigger is a special type of stored procedure that automatically runs when certain events occur in the database (like INSERT, UPDATE, DELETE). 
It can be used to enforce business rules or maintain data integrity.`,codeExample:`
🔹 Step 1: Create the students table
CREATE TABLE students (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  created_at DATETIME
);



🔹 Step 2: Create the trigger

CREATE TRIGGER BeforeInsertStudent
BEFORE INSERT ON students
FOR EACH ROW
BEGIN
  SET NEW.created_at = NOW();    // created_at this column name ok and NEW.created_at this not create column but it is add new row with current date and time
END;

-- This trigger sets the created_at column to the current date and time before inserting a new student record.


🔹 Step 3: Insert a new student
INSERT INTO students (name) VALUES ('Raj');
❗You did not insert created_at — it is automatically filled by the trigger.

🔹 Step 4: View the table
SELECT * FROM students;


output:
| id | name | created_at         |
| -- | ---- | ------------------- |
| 1  | Raj  | 2025-05-14 10:35:00 |



-- Drop the trigger
DROP TRIGGER BeforeInsertStudent;
-- This removes the trigger from the database.
`},{id:21,question:"21. What is a transaction in SQL?",answer:"A transaction in SQL is a set of operations that are done together. If one fails, all changes can be rolled back to keep the database safe.",codeExample:`
-- Full example of a transaction
START TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT;
-- This transfers 100 from account 1 to account 2.
-- If any operation fails, you can use ROLLBACK to undo all changes.

----------------------------------------------------------------------------
second example of a transaction
BEGIN;  -- Start the transaction

-- Step 1: Deduct ₹1000 from Account A
UPDATE accounts
SET balance = balance - 1000
WHERE id = 1;

-- Step 2: Add ₹1000 to Account B
UPDATE accounts
SET balance = balance + 1000
WHERE id = 2;

COMMIT;  -- Save the changes permanently

----------------------------------------------------------------------------
BEGIN; and START TRANSACTION; are both used to start a SQL transaction. They work the same way
— it's just a matter of style or database preference.
      `},{id:22,question:"22. What is SET used for in SQL?",answer:`In SQL, the SET keyword is used to assign a value to a column.
It is mostly used in: 
	UPDATE statements to update existing records. 
	TRIGGERS or STORED PROCEDURES to assign values to new rows.`,codeExample:`
Syntax of SET in UPDATE:
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;

Syntax of SET in a Trigger:
SET NEW.column_name = value;
`},{id:23,question:"23. What are ACID properties in a database?",answer:" sdsda",codeExample:`
🔹 A – Atomicity
All or nothing.
Either the entire transaction happens or nothing happens.
Example: Money is deducted and added — both must succeed.

🔹 C – Consistency
Data stays correct.
Transaction keeps the database in a valid state.
Example: Total money before and after a transfer stays the same.

🔹 I – Isolation
Transactions don’t interfere with each other.
If many users do operations at the same time, each works as if alone.

🔹 D – Durability
Data is saved permanently.
Once a transaction is complete, changes are not lost — even if the system crashes.
`},{id:24,question:"24. What are clustered and non-clustered indexes?",answer:`A clustered index sorts and stores the table data physically. 
A non-clustered index creates a separate lookup to find data faster.`,codeExample:`
-- Clustered Index
CREATE CLUSTERED INDEX idx_student_id
ON students(student_id);

-- Non-Clustered Index
CREATE NONCLUSTERED INDEX idx_student_name
ON students(name);

-------------------------------------------------------------------------------------------

🎓 Table: students
| student_id | name   | age | city     |
| ----------- | ------ | --- | -------- |
| 3           | Raj    | 21  | Keshod   |
| 1           | Aman   | 22  | Junagadh |
| 4           | Zoya   | 20  | Surat    |
| 2           | Bhavya | 23  | Rajkot   |

-------------------------------------------------------------------------------------------

✅ Clustered Index on student_id
When you create a clustered index on student_id, the table is physically sorted by that column:

📘 After applying clustered index:
| student_id | name   | age | city     |
| ----------- | ------ | --- | -------- |
| 1           | Aman   | 22  | Junagadh |
| 2           | Bhavya | 23  | Rajkot   |
| 3           | Raj    | 21  | Keshod   |
| 4           | Zoya   | 20  | Surat    |

-------------------------------------------------------------------------------------------

✅ Non-Clustered Index on name
Creates a separate structure with a pointer to the data: creat new structure or new table

📗 Non-clustered index:
| name   | Pointer to student_id |
| ------ | ---------------------- |
| Aman   | → 1                    |
| Bhavya | → 2                    |
| Raj    | → 3                    |
| Zoya   | → 4                    |

`},{id:25,question:"25. What is a composite key?",answer:`A composite key is a combination of two or more columns in a table that can uniquely identify a row. 
It is used when no single column can serve as a primary key. 
this used like two different table columns are used to create a new table.`,codeExample:`
📘 Simple Example:
Imagine a Marks table:

| Student_ID | Subject_ID | Marks |
| ----------- | ----------- | ----- |
| 1           | 101         | 85    |
| 1           | 102         | 90    |
| 2           | 101         | 88    |


Student_ID alone is not unique.
Subject_ID alone is not unique.

But together, Student_ID + Subject_ID is unique.

🗝️ This combination is a composite key.


🧾 SQL Example:
CREATE TABLE Marks (
  Student_ID INT,
  Subject_ID INT,
  Marks INT,
  PRIMARY KEY (Student_ID, Subject_ID)
);
`},{id:26,question:"26. What is the use of CASE in SQL?",answer:`The CASE statement is used to create conditional logic in SQL queries. 
It allows you to return different values based on different conditions.`,codeExample:`
✅ Syntax:
SELECT
  column_name,
  CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ELSE default_result
  END AS alias_name
FROM table_name;

------------------------------------------------------------------------------

🧾 Example:
Suppose you have a students table:

| name  | marks |
| ----- | ----- |
| Raj   | 85    |
| Priya | 45    |
| Amit  | 70    |

------------------------------------------------------------------------------

You want to add a "Result" column:
If marks ≥ 50 → "Pass"
Else → "Fail"

------------------------------------------------------------------------------

SELECT
  name,
  marks,
  CASE
    WHEN marks >= 50 THEN 'Pass'
    ELSE 'Fail'
  END AS result
FROM students;

------------------------------------------------------------------------------

🔍 Output:

| name  | marks | result |
| ----- | ----- | ------ |
| Raj   | 85    | Pass   |
| Priya | 45    | Fail   |
| Amit  | 70    | Pass   |

`},{id:27,question:"27. How can you find duplicate records in a table?",answer:"To find duplicate records in a table, you can use the GROUP BY clause along with HAVING to filter records that appear more than once.",codeExample:`
✅ Example:
Assume you have a table called students:

| id | name  | email                                   |
| -- | ----- | --------------------------------------- |
| 1  | Raj   | [raj@mail.com](mailto:raj@mail.com)     |
| 2  | Priya | [priya@mail.com](mailto:priya@mail.com) |
| 3  | Raj   | [raj@mail.com](mailto:raj@mail.com)     |
| 4  | Amit  | [amit@mail.com](mailto:amit@mail.com)   |

------------------------------------------------------------------------------

To find duplicate name and email:

SELECT name, email, COUNT(*)
FROM students
GROUP BY name, email
HAVING COUNT(*) > 1;

------------------------------------------------------------------------------

🔍 Output:
| name | email                               | count |
| ---- | ----------------------------------- | ----- |
| Raj  | [raj@mail.com](mailto:raj@mail.com) | 2     |
`},{id:28,question:"28. How to remove duplicate value",answer:"To remove duplicate values from a table, you can use the DELETE statement with a subquery to identify duplicates.",codeExample:`
✅ Example Table: students
| id | name  | email                                     |
| -- | ----- | ----------------------------------------- |
| 1  | Raj   | 	raj@gmail.com                            |
| 2  | Priya | 	priya@gmail.com                          |
| 3  | Raj   | 	raj@gmail.com                            |
| 4  | Aman  | aman@gmail.com                            |
| 5  | Raj   |	raj@gmail.com                            |

------------------------------------------------------------------------------

SQL Query :
DELETE s1
FROM students s1
JOIN students s2
ON s1.name = s2.name AND s1.email = s2.email
WHERE s1.id > s2.id;

------------------------------------------------------------------------------

🔹 What the JOIN would produce:

| s1.id | s1.name | s1.email                            | s2.id | s2.name | s2.email                            |
| ----- | ------- | ----------------------------------- | ----- | ------- | ----------------------------------- |
| 3     | Raj     | [raj@mail.com](mailto:raj@mail.com) | 1     | Raj     | [raj@mail.com](mailto:raj@mail.com) |
| 5     | Raj     | [raj@mail.com](mailto:raj@mail.com) | 1     | Raj     | [raj@mail.com](mailto:raj@mail.com) |
| 5     | Raj     | [raj@mail.com](mailto:raj@mail.com) | 3     | Raj     | [raj@mail.com](mailto:raj@mail.com) |

------------------------------------------------------------------------------

✅ Final Clean Table After Deleting Duplicates:

| id | name  | email                                   |
| -- | ----- | --------------------------------------- |
| 1  | Raj   | [raj@mail.com](mailto:raj@mail.com)     |
| 2  | Priya | [priya@mail.com](mailto:priya@mail.com) |
| 4  | Aman  | [aman@mail.com](mailto:aman@mail.com)   |



Second method :

DELETE FROM students
WHERE id NOT IN (
  SELECT MIN(id)
  FROM students
  GROUP BY name, email
);

🔸 Step 1: The subquery
SELECT MIN(id)
FROM students
GROUP BY name, email;

This finds the lowest id (first one entered) for each unique combination of name and email.

Result of Subquery:
| MIN(id) |             |
| ------- | ----------- |
| 1       | ← First Raj |
| 2       | ← Priya     |
| 4       | ← Aman      |


🔸 Step 2: The outer query
DELETE FROM students
WHERE id NOT IN (...);

This means:
❌ Delete every row whose id is NOT in that list: [1, 2, 4]

`},{id:29,question:"29. How do you write a query to get the second highest salary?",answer:"To get the second highest salary, you can use the following SQL query. ",codeExample:`
📌 Let's take this salary table:
| id | name  | salary |  
| -- | ----- | ------ |
| 1  | Raj   | 50000  |
| 2  | Priya | 60000  |
| 3  | Aman  | 70000  |
| 4  | Rani  | 80000  |
| 5  | Soham | 70000  |

------------------------------------------------------------------------------

Now run this query:

SELECT MAX(salary)
FROM employees
WHERE salary < (
  SELECT MAX(salary) FROM employees
);

Step-by-step:
1. Find max salary:
      SELECT MAX(salary) FROM employees;
      → 80000

2. Now use WHERE salary < 80000, so it considers:

      70000 ✅

      60000 ✅

      50000 ✅

3. Among these three, we now use:
      SELECT MAX(salary) FROM employees WHERE salary < 80000;
      → 70000

------------------------------------------------------------------------------

Second Method:
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 1;


🔍 Breakdown:
| Keyword                | Meaning                                                 |
| ---------------------- | ------------------------------------------------------- |
| SELECT DISTINCT salary | Gets all unique salary values (removes duplicates).     |
| ORDER BY salary DESC   | Sorts salaries in descending order (highest to lowest). |
| LIMIT 1                | Limits the result to only 1 row.                        |
| OFFSET 1               | Skips the first row (i.e., the highest salary).         |


💡 Example table:
| id | name  | salary |
| -- | ----- | ------ |
| 1  | Raj   | 50000  |
| 2  | Priya | 70000  |
| 3  | Aman  | 80000  |
| 4  | Rani  | 70000  |
| 5  | Soham | 60000  |


Steps it follows:
1. SELECT DISTINCT salary:
  → 80000, 70000, 60000, 50000

2.ORDER BY salary DESC:
  → 80000, 70000, 60000, 50000

3.OFFSET 1:
  → Skips 80000

4.LIMIT 1:
  → Returns 70000 ✅ (this is the second highest)
`},{id:30,question:"30. What are window functions in SQL (like RANK(), DENSE_RANK(), ROW_NUMBER())?",answer:`Window functions perform calculations across a set of rows related to the current row. 
They are used for ranking, calculating running totals, and more.`,codeExample:`
ROW_NUMBER() → Unique number to each row

RANK() → Same rank for ties, skips next number

DENSE_RANK() → Same rank for ties, no skip


🧾 Example Table: employees
| id | name  | department | salary |
| -- | ----- | ---------- | ------ |
| 1  | Raj   | IT         | 70000  |
| 2  | Priya | IT         | 80000  |
| 3  | Aman  | HR         | 60000  |
| 4  | Rani  | IT         | 80000  |
| 5  | Soham | HR         | 60000  |

------------------------------------------------------------------------------------------

🧪 Example Query (ranking in each department by salary):
SELECT 
  name, department, salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,
  RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
  DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM employees;

------------------------------------------------------------------------------------------

✅ Output:
| name  | department | salary | row_num | rank | dense_rank |
| ----- | ---------- | ------ | --------| ---- | ---------  |
| Priya | IT         | 80000  | 1       | 1    | 1          |
| Rani  | IT         | 80000  | 2       | 1    | 1          |
| Raj   | IT         | 70000  | 3       | 3    | 2          |
| Aman  | HR         | 60000  | 1       | 1    | 1          |
| Soham | HR         | 60000  | 2       | 1    | 1          |
`},{id:31,question:"31. What is a cursor in SQL?",answer:"A cursor is a tool in SQL used to process each row one at a time from a result set. It's helpful when you need to perform row-by-row operations instead of working with the entire table at once.",codeExample:`
 Simple Example:
| id | name   | salary |
| -- | ------ | ------ |
| 1  | Raj    | 30000  |
| 2  | Neha   | 45000  |
| 3  | Ramesh | 60000  |


You want to increase salary by 10% if salary is less than 50000.

A cursor helps you:
  1. Check each row one-by-one.
  2. If the salary is below 50000, increase it by 10%.



🧪 Example in MySQL:

DECLARE emp_name VARCHAR(100);
DECLARE emp_salary INT;
DECLARE done INT DEFAULT FALSE;

-- Create a cursor
DECLARE emp_cursor CURSOR FOR 
  SELECT name, salary FROM employees;

-- Handle when no more rows
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

-- Open the cursor
OPEN emp_cursor;

-- Loop through each row
read_loop: LOOP
  FETCH emp_cursor INTO emp_name, emp_salary;

  IF done THEN
    LEAVE read_loop;
  END IF;

  -- Custom logic
  IF emp_salary < 50000 THEN
    -- give 10% bonus, just an example
    UPDATE employees SET salary = salary * 1.1 WHERE name = emp_name;
  END IF;

END LOOP;

-- Close the cursor
CLOSE emp_cursor;

`},{id:32,question:"32. What are the different types of relationships in a database?",answer:`There are three main types of relationships in a database: 
1. One-to-One (1:1) 
2. One-to-Many (1:N) 
3. Many-to-Many (M:N)`,codeExample:`
-- One-to-One
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
  );
CREATE TABLE StudentDetails (
  student_id INT PRIMARY KEY,
  address VARCHAR(255),
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
  ); 

-- One-to-Many
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
  );
CREATE TABLE Courses (
  course_id INT PRIMARY KEY,
  student_id INT,
  course_name VARCHAR(100),
  FOREIGN KEY (student_id) REFERENCES Students(student_id)
  );

-- Many-to-Many
CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100)
  );
CREATE TABLE Courses (
  course_id INT PRIMARY KEY,
  course_name VARCHAR(100)
  );
CREATE TABLE StudentCourses (
  student_id INT,
  course_id INT,
  PRIMARY KEY (student_id, course_id),
  FOREIGN KEY (student_id) REFERENCES Students(student_id),
  FOREIGN KEY (course_id) REFERENCES Courses(course_id)
  );

-- many-to-many relationship this look like this in table
| student_id | course_id |
| ----------- | --------- |
| 1           | 101       |
| 1           | 102       |
| 2           | 101       |
| 2           | 103       |
| 3           | 102       |
| 3           | 103       |

------------------------------------------------------------------------------------------
 One-to-One (1:1)
👉 One record in Table A is related to one record in Table B.
🔐 Often used for splitting rarely used data into separate tables.

Example:
Users table and UserProfiles table.
Each user has only one profile, and each profile belongs to only one user.


2. One-to-Many (1:N) 🔥 Most common
👉 One record in Table A can be related to many records in Table B, but each record in Table B relates to only one in Table A.

Example:
Customers and Orders
One customer can place many orders.
Each order is linked to one customer.


3. Many-to-Many (M:N)
👉 Many records in Table A can relate to many in Table B.
✅ Requires a junction (bridge) table.

Example:
Students and Courses
A student can enroll in many courses, and a course can have many students.
A third table like StudentCourses is used to link them.

`},{id:33,question:"33. What is the difference between schema and table?",answer:`🔹 Schema 
	A schema is like a folder or container. 
	It organizes and groups related database objects — such as tables, views, functions, procedures, etc. 
	Helps in managing access, permissions, and database structure. 

🧠 Think of it as: 
	A bookshelf (schema) that holds many books (tables). 
------------------------------------------------------------------------------------------------------
🔹 Table 
	A table stores data in rows and columns. 
	Each table is inside a schema. 
	Contains actual records like names, emails, prices, etc. 

🧠 Think of it as: 
	A book (table) with pages full of actual data.`,codeExample:`
-- Create a schema
CREATE SCHEMA school;

-- Create a table inside that schema
CREATE TABLE school.students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);


school is the schema
students is the table inside the schema`},{id:34,question:"43. What is data integrity?",answer:`Data Integrity means ensuring the accuracy, consistency, and reliability of data in a database. x
Data integrity refers to the accuracy and consistency of data in a database. 
It ensures that data is reliable, valid, and protected from unauthorized access or corruption.`,codeExample:`
-- Example of data integrity constraints
CREATE TABLE Employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    age INT CHECK (age >= 18),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES Departments(id)
);
-- This table ensures:
-- 1. Each employee has a unique ID (PRIMARY KEY).
-- 2. Name cannot be NULL (NOT NULL).
-- 3. Email must be unique (UNIQUE).
-- 4. Age must be 18 or older (CHECK).



🔹 Types of Data Integrity:

| Type                   | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| Entity Integrity       | Ensures each row in a table is unique (usually via a Primary Key)          |
| Referential Integrity  | Ensures foreign keys correctly reference data in another table             |
| Domain Integrity       | Ensures the data type, format, and valid range (like age must be a number) |
| User-Defined Integrity | Custom rules (like salary must be > 0) enforced through constraints        |

`},{id:35,question:"35. What is sharding in databases?",answer:`Sharding is the process of dividing a large database into smaller parts (shards) to improve performance and scalability by distributing the data across multiple servers or databases. 

 Sharding = Splitting a large table/data into smaller parts stored in different places (servers/databases).`,codeExample:`
🔸 Main Table Before Sharding:

-- users table (before sharding)
user_id | name      | country
--------|-----------|---------
1       | Raj       | India
2       | Ankit     | India
1000001 | John      | USA
1000002 | Alice     | USA


🔹 After Sharding – Split into 2 Tables:

users_shard_india
-- Users with user_id ≤ 1000000
user_id | name   | country
--------|--------|---------
1       | Raj    | India
2       | Ankit  | India


users_shard_usa
-- Users with user_id > 1000000
user_id | name   | country
--------|--------|---------
1000001 | John   | USA
1000002 | Alice  | USA

------------------------------------------------------------------------------------------


✅ 1. Create Shard Tables

--users_shard_india
CREATE TABLE users_shard_india AS
SELECT * FROM users
WHERE user_id <= 1000000;


--users_shard_usa
CREATE TABLE users_shard_usa AS
SELECT * FROM users
WHERE user_id > 1000000;

🔎 2. Check the Data
SELECT * FROM users_shard_india;
SELECT * FROM users_shard_usa;

`},{id:36,question:"36. What is the difference between OLTP and OLAP?",answer:"",codeExample:`
🔹 OLTP (Online Transaction Processing)
  Purpose: Handles day-to-day transactions.
  Operations: Insert, Update, Delete (e.g., placing an order).
  Speed: Very fast for read/write operations.
  Data: Current, real-time data.
  Example: ATM transactions, online shopping, bank entries.
✅ Use case: "Add a new customer", "Update order status".


🔹 OLAP (Online Analytical Processing)
  Purpose: Helps in analyzing and reporting data.
  Operations: Complex queries for summaries, trends, insights.
  Speed: Optimized for reading large volumes of data.
  Data: Historical data (aggregated).
  Example: Sales analysis, market trends, reports.
✅ Use case: "What were total sales last year?", "Top 5 selling items".


🔄 Simple Comparison:
| Feature   | OLTP                    | OLAP                        |
| --------- | ----------------------- | --------------------------- |
| Use       | Day-to-day transactions | Data analysis and reporting |
| Data type | Current data            | Historical data             |
| Queries   | Simple, fast            | Complex, slower             |
| Example   | Booking ticket          | Analyzing sales by region   |
`},{id:37,question:"37. What is database locking and deadlock?",answer:`Database locking is a mechanism to control access to data in a database. 
It prevents multiple transactions from modifying the same data simultaneously, ensuring data integrity. 

A deadlock occurs when two or more transactions are waiting for each other to release locks, causing them to be stuck indefinitely.`,codeExample:`
🔹 What is Database Locking?
  Locking is a mechanism used by the database to prevent multiple users from modifying the same data at the same time.

✅ Why it's used:
To ensure data consistency and avoid conflicts.

🔸 Example:
If User A is updating a row, the database locks it so User B can’t update it at the same time.

------------------------------------------------------------------------------------------

🔹 What is Deadlock?
  A deadlock happens when two or more users are waiting for each other to release a lock — and none of them can proceed.

📌 Think of it like:

User A locks Row 1, wants Row 2
User B locks Row 2, wants Row 1
Both are stuck waiting — this is a deadlock.

------------------------------------------------------------------------------------------

🗃 Example Setup (Assume you have a bank_accounts table):
CREATE TABLE bank_accounts (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    balance INT
);

INSERT INTO bank_accounts VALUES
(1, 'Alice', 1000),
(2, 'Bob', 1000);

🧠 Scenario to Demonstrate Deadlock (Using 2 sessions):

✅ Session 1 (User A):
BEGIN;
-- Lock Alice's row
UPDATE bank_accounts SET balance = balance - 100 WHERE id = 1;
-- Wait to update Bob’s row later


✅ Session 2 (User B):
BEGIN;
-- Lock Bob's row
UPDATE bank_accounts SET balance = balance - 100 WHERE id = 2;
-- Now tries to update Alice's row (already locked by Session 1)
UPDATE bank_accounts SET balance = balance + 100 WHERE id = 1;


🔄 Back to Session 1:
-- Now tries to update Bob’s row (already locked by Session 2)
UPDATE bank_accounts SET balance = balance + 100 WHERE id = 2;



💡 How to Resolve:
The database will detect the deadlock and automatically cancel one of the sessions with an error like:

ERROR: deadlock detected

`},{id:38,question:"38. How do you optimize a slow SQL query?",answer:"",codeExample:`

✅ 1. Use Indexes Wisely
Add indexes to columns used in WHERE, JOIN, ORDER BY.

CREATE INDEX idx_name ON students(name);



✅ 2. Avoid SELECT *
Only select the columns you need.

-- Bad
SELECT * FROM students;

-- Good
SELECT name, email FROM students;



✅ 3. Use WHERE to Filter Early
Always filter unnecessary rows early.

SELECT name FROM students WHERE city = 'Keshod';



✅ 4. Avoid Functions on Indexed Columns
Don’t apply functions like LOWER() or YEAR() on indexed columns in WHERE.



✅ 5. Use JOINS Smartly
Ensure correct JOIN conditions and indexes on joined columns.



✅ 6. Use LIMIT for Large Results

SELECT * FROM students LIMIT 100;



✅ 7. Analyze Execution Plan
Use EXPLAIN before your query to see how it runs.

EXPLAIN SELECT name FROM students WHERE city = 'Keshod';



✅ 8. Normalize or Denormalize Based on Use Case
Normalize for update speed and denormalize for read speed.`}],E=L=>{ft(D===L?null:L)};return Bt.jsxs("div",{className:"app-container",children:[Bt.jsx("h1",{children:"SQL Interview Questions"}),Bt.jsx("div",{className:"questions-container",children:W.map(L=>Bt.jsxs("div",{className:"question-item",children:[Bt.jsx("button",{className:`question-button ${D===L.id?"active":""}`,onClick:()=>E(L.id),children:L.question}),D===L.id&&Bt.jsxs("div",{className:"answer-container",children:[Bt.jsxs("div",{className:"answer",children:[Bt.jsx("h3",{children:"Answer:"}),Bt.jsx("p",{children:L.answer})]}),L.codeExample&&Bt.jsxs("div",{className:"code-example",children:[Bt.jsx("h3",{children:"Code Example:"}),Bt.jsx("pre",{children:Bt.jsx("code",{children:L.codeExample})})]})]})]},L.id))})]})}q0.createRoot(document.getElementById("root")).render(Bt.jsx(nd.StrictMode,{children:Bt.jsx(Y0,{})}));
