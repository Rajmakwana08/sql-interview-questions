(function(){const ft=document.createElement("link").relList;if(ft&&ft.supports&&ft.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))E(L);new MutationObserver(L=>{for(const J of L)if(J.type==="childList")for(const rt of J.addedNodes)rt.tagName==="LINK"&&rt.rel==="modulepreload"&&E(rt)}).observe(document,{childList:!0,subtree:!0});function W(L){const J={};return L.integrity&&(J.integrity=L.integrity),L.referrerPolicy&&(J.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?J.credentials="include":L.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function E(L){if(L.ep)return;L.ep=!0;const J=W(L);fetch(L.href,J)}})();var kc={exports:{}},yu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wd;function _0(){if(Wd)return yu;Wd=1;var D=Symbol.for("react.transitional.element"),ft=Symbol.for("react.fragment");function W(E,L,J){var rt=null;if(J!==void 0&&(rt=""+J),L.key!==void 0&&(rt=""+L.key),"key"in L){J={};for(var Ct in L)Ct!=="key"&&(J[Ct]=L[Ct])}else J=L;return L=J.ref,{$$typeof:D,type:E,key:rt,ref:L!==void 0?L:null,props:J}}return yu.Fragment=ft,yu.jsx=W,yu.jsxs=W,yu}var Fd;function M0(){return Fd||(Fd=1,kc.exports=_0()),kc.exports}var qt=M0(),Wc={exports:{}},Y={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Id;function U0(){if(Id)return Y;Id=1;var D=Symbol.for("react.transitional.element"),ft=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),rt=Symbol.for("react.context"),Ct=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),R=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),nt=Symbol.iterator;function et(s){return s===null||typeof s!="object"?null:(s=nt&&s[nt]||s["@@iterator"],typeof s=="function"?s:null)}var Ht={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lt=Object.assign,dl={};function xt(s,b,O){this.props=s,this.context=b,this.refs=dl,this.updater=O||Ht}xt.prototype.isReactComponent={},xt.prototype.setState=function(s,b){if(typeof s!="object"&&typeof s!="function"&&s!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,s,b,"setState")},xt.prototype.forceUpdate=function(s){this.updater.enqueueForceUpdate(this,s,"forceUpdate")};function da(){}da.prototype=xt.prototype;function Al(s,b,O){this.props=s,this.context=b,this.refs=dl,this.updater=O||Ht}var Nt=Al.prototype=new da;Nt.constructor=Al,Lt(Nt,xt.prototype),Nt.isPureReactComponent=!0;var rl=Array.isArray,V={H:null,A:null,T:null,S:null,V:null},wt=Object.prototype.hasOwnProperty;function Vt(s,b,O,A,z,Z){return O=Z.ref,{$$typeof:D,type:s,key:b,ref:O!==void 0?O:null,props:Z}}function Zt(s,b){return Vt(s.type,b,void 0,void 0,void 0,s.props)}function El(s){return typeof s=="object"&&s!==null&&s.$$typeof===D}function Ca(s){var b={"=":"=0",":":"=2"};return"$"+s.replace(/[=:]/g,function(O){return b[O]})}var pl=/\/+/g;function Dt(s,b){return typeof s=="object"&&s!==null&&s.key!=null?Ca(""+s.key):b.toString(36)}function ra(){}function ma(s){switch(s.status){case"fulfilled":return s.value;case"rejected":throw s.reason;default:switch(typeof s.status=="string"?s.then(ra,ra):(s.status="pending",s.then(function(b){s.status==="pending"&&(s.status="fulfilled",s.value=b)},function(b){s.status==="pending"&&(s.status="rejected",s.reason=b)})),s.status){case"fulfilled":return s.value;case"rejected":throw s.reason}}throw s}function _t(s,b,O,A,z){var Z=typeof s;(Z==="undefined"||Z==="boolean")&&(s=null);var x=!1;if(s===null)x=!0;else switch(Z){case"bigint":case"string":case"number":x=!0;break;case"object":switch(s.$$typeof){case D:case ft:x=!0;break;case M:return x=s._init,_t(x(s._payload),b,O,A,z)}}if(x)return z=z(s),x=A===""?"."+Dt(s,0):A,rl(z)?(O="",x!=null&&(O=x.replace(pl,"$&/")+"/"),_t(z,b,O,"",function(Gl){return Gl})):z!=null&&(El(z)&&(z=Zt(z,O+(z.key==null||s&&s.key===z.key?"":(""+z.key).replace(pl,"$&/")+"/")+x)),b.push(z)),1;x=0;var Kt=A===""?".":A+":";if(rl(s))for(var it=0;it<s.length;it++)A=s[it],Z=Kt+Dt(A,it),x+=_t(A,b,O,Z,z);else if(it=et(s),typeof it=="function")for(s=it.call(s),it=0;!(A=s.next()).done;)A=A.value,Z=Kt+Dt(A,it++),x+=_t(A,b,O,Z,z);else if(Z==="object"){if(typeof s.then=="function")return _t(ma(s),b,O,A,z);throw b=String(s),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return x}function S(s,b,O){if(s==null)return s;var A=[],z=0;return _t(s,A,"","",function(Z){return b.call(O,Z,z++)}),A}function p(s){if(s._status===-1){var b=s._result;b=b(),b.then(function(O){(s._status===0||s._status===-1)&&(s._status=1,s._result=O)},function(O){(s._status===0||s._status===-1)&&(s._status=2,s._result=O)}),s._status===-1&&(s._status=0,s._result=b)}if(s._status===1)return s._result.default;throw s._result}var B=typeof reportError=="function"?reportError:function(s){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof s=="object"&&s!==null&&typeof s.message=="string"?String(s.message):String(s),error:s});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",s);return}console.error(s)};function lt(){}return Y.Children={map:S,forEach:function(s,b,O){S(s,function(){b.apply(this,arguments)},O)},count:function(s){var b=0;return S(s,function(){b++}),b},toArray:function(s){return S(s,function(b){return b})||[]},only:function(s){if(!El(s))throw Error("React.Children.only expected to receive a single React element child.");return s}},Y.Component=xt,Y.Fragment=W,Y.Profiler=L,Y.PureComponent=Al,Y.StrictMode=E,Y.Suspense=U,Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,Y.__COMPILER_RUNTIME={__proto__:null,c:function(s){return V.H.useMemoCache(s)}},Y.cache=function(s){return function(){return s.apply(null,arguments)}},Y.cloneElement=function(s,b,O){if(s==null)throw Error("The argument must be a React element, but you passed "+s+".");var A=Lt({},s.props),z=s.key,Z=void 0;if(b!=null)for(x in b.ref!==void 0&&(Z=void 0),b.key!==void 0&&(z=""+b.key),b)!wt.call(b,x)||x==="key"||x==="__self"||x==="__source"||x==="ref"&&b.ref===void 0||(A[x]=b[x]);var x=arguments.length-2;if(x===1)A.children=O;else if(1<x){for(var Kt=Array(x),it=0;it<x;it++)Kt[it]=arguments[it+2];A.children=Kt}return Vt(s.type,z,void 0,void 0,Z,A)},Y.createContext=function(s){return s={$$typeof:rt,_currentValue:s,_currentValue2:s,_threadCount:0,Provider:null,Consumer:null},s.Provider=s,s.Consumer={$$typeof:J,_context:s},s},Y.createElement=function(s,b,O){var A,z={},Z=null;if(b!=null)for(A in b.key!==void 0&&(Z=""+b.key),b)wt.call(b,A)&&A!=="key"&&A!=="__self"&&A!=="__source"&&(z[A]=b[A]);var x=arguments.length-2;if(x===1)z.children=O;else if(1<x){for(var Kt=Array(x),it=0;it<x;it++)Kt[it]=arguments[it+2];z.children=Kt}if(s&&s.defaultProps)for(A in x=s.defaultProps,x)z[A]===void 0&&(z[A]=x[A]);return Vt(s,Z,void 0,void 0,null,z)},Y.createRef=function(){return{current:null}},Y.forwardRef=function(s){return{$$typeof:Ct,render:s}},Y.isValidElement=El,Y.lazy=function(s){return{$$typeof:M,_payload:{_status:-1,_result:s},_init:p}},Y.memo=function(s,b){return{$$typeof:R,type:s,compare:b===void 0?null:b}},Y.startTransition=function(s){var b=V.T,O={};V.T=O;try{var A=s(),z=V.S;z!==null&&z(O,A),typeof A=="object"&&A!==null&&typeof A.then=="function"&&A.then(lt,B)}catch(Z){B(Z)}finally{V.T=b}},Y.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},Y.use=function(s){return V.H.use(s)},Y.useActionState=function(s,b,O){return V.H.useActionState(s,b,O)},Y.useCallback=function(s,b){return V.H.useCallback(s,b)},Y.useContext=function(s){return V.H.useContext(s)},Y.useDebugValue=function(){},Y.useDeferredValue=function(s,b){return V.H.useDeferredValue(s,b)},Y.useEffect=function(s,b,O){var A=V.H;if(typeof O=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return A.useEffect(s,b)},Y.useId=function(){return V.H.useId()},Y.useImperativeHandle=function(s,b,O){return V.H.useImperativeHandle(s,b,O)},Y.useInsertionEffect=function(s,b){return V.H.useInsertionEffect(s,b)},Y.useLayoutEffect=function(s,b){return V.H.useLayoutEffect(s,b)},Y.useMemo=function(s,b){return V.H.useMemo(s,b)},Y.useOptimistic=function(s,b){return V.H.useOptimistic(s,b)},Y.useReducer=function(s,b,O){return V.H.useReducer(s,b,O)},Y.useRef=function(s){return V.H.useRef(s)},Y.useState=function(s){return V.H.useState(s)},Y.useSyncExternalStore=function(s,b,O){return V.H.useSyncExternalStore(s,b,O)},Y.useTransition=function(){return V.H.useTransition()},Y.version="19.1.0",Y}var $d;function tf(){return $d||($d=1,Wc.exports=U0()),Wc.exports}var nr=tf(),Fc={exports:{}},Eu={},Ic={exports:{}},$c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pd;function z0(){return Pd||(Pd=1,function(D){function ft(S,p){var B=S.length;S.push(p);t:for(;0<B;){var lt=B-1>>>1,s=S[lt];if(0<L(s,p))S[lt]=p,S[B]=s,B=lt;else break t}}function W(S){return S.length===0?null:S[0]}function E(S){if(S.length===0)return null;var p=S[0],B=S.pop();if(B!==p){S[0]=B;t:for(var lt=0,s=S.length,b=s>>>1;lt<b;){var O=2*(lt+1)-1,A=S[O],z=O+1,Z=S[z];if(0>L(A,B))z<s&&0>L(Z,A)?(S[lt]=Z,S[z]=B,lt=z):(S[lt]=A,S[O]=B,lt=O);else if(z<s&&0>L(Z,B))S[lt]=Z,S[z]=B,lt=z;else break t}}return p}function L(S,p){var B=S.sortIndex-p.sortIndex;return B!==0?B:S.id-p.id}if(D.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;D.unstable_now=function(){return J.now()}}else{var rt=Date,Ct=rt.now();D.unstable_now=function(){return rt.now()-Ct}}var U=[],R=[],M=1,nt=null,et=3,Ht=!1,Lt=!1,dl=!1,xt=!1,da=typeof setTimeout=="function"?setTimeout:null,Al=typeof clearTimeout=="function"?clearTimeout:null,Nt=typeof setImmediate<"u"?setImmediate:null;function rl(S){for(var p=W(R);p!==null;){if(p.callback===null)E(R);else if(p.startTime<=S)E(R),p.sortIndex=p.expirationTime,ft(U,p);else break;p=W(R)}}function V(S){if(dl=!1,rl(S),!Lt)if(W(U)!==null)Lt=!0,wt||(wt=!0,Dt());else{var p=W(R);p!==null&&_t(V,p.startTime-S)}}var wt=!1,Vt=-1,Zt=5,El=-1;function Ca(){return xt?!0:!(D.unstable_now()-El<Zt)}function pl(){if(xt=!1,wt){var S=D.unstable_now();El=S;var p=!0;try{t:{Lt=!1,dl&&(dl=!1,Al(Vt),Vt=-1),Ht=!0;var B=et;try{l:{for(rl(S),nt=W(U);nt!==null&&!(nt.expirationTime>S&&Ca());){var lt=nt.callback;if(typeof lt=="function"){nt.callback=null,et=nt.priorityLevel;var s=lt(nt.expirationTime<=S);if(S=D.unstable_now(),typeof s=="function"){nt.callback=s,rl(S),p=!0;break l}nt===W(U)&&E(U),rl(S)}else E(U);nt=W(U)}if(nt!==null)p=!0;else{var b=W(R);b!==null&&_t(V,b.startTime-S),p=!1}}break t}finally{nt=null,et=B,Ht=!1}p=void 0}}finally{p?Dt():wt=!1}}}var Dt;if(typeof Nt=="function")Dt=function(){Nt(pl)};else if(typeof MessageChannel<"u"){var ra=new MessageChannel,ma=ra.port2;ra.port1.onmessage=pl,Dt=function(){ma.postMessage(null)}}else Dt=function(){da(pl,0)};function _t(S,p){Vt=da(function(){S(D.unstable_now())},p)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(S){S.callback=null},D.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Zt=0<S?Math.floor(1e3/S):5},D.unstable_getCurrentPriorityLevel=function(){return et},D.unstable_next=function(S){switch(et){case 1:case 2:case 3:var p=3;break;default:p=et}var B=et;et=p;try{return S()}finally{et=B}},D.unstable_requestPaint=function(){xt=!0},D.unstable_runWithPriority=function(S,p){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var B=et;et=S;try{return p()}finally{et=B}},D.unstable_scheduleCallback=function(S,p,B){var lt=D.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?lt+B:lt):B=lt,S){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=B+s,S={id:M++,callback:p,priorityLevel:S,startTime:B,expirationTime:s,sortIndex:-1},B>lt?(S.sortIndex=B,ft(R,S),W(U)===null&&S===W(R)&&(dl?(Al(Vt),Vt=-1):dl=!0,_t(V,B-lt))):(S.sortIndex=s,ft(U,S),Lt||Ht||(Lt=!0,wt||(wt=!0,Dt()))),S},D.unstable_shouldYield=Ca,D.unstable_wrapCallback=function(S){var p=et;return function(){var B=et;et=p;try{return S.apply(this,arguments)}finally{et=B}}}}($c)),$c}var tr;function C0(){return tr||(tr=1,Ic.exports=z0()),Ic.exports}var Pc={exports:{}},zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lr;function H0(){if(lr)return zt;lr=1;var D=tf();function ft(U){var R="https://react.dev/errors/"+U;if(1<arguments.length){R+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)R+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+U+"; visit "+R+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var E={d:{f:W,r:function(){throw Error(ft(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},L=Symbol.for("react.portal");function J(U,R,M){var nt=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:nt==null?null:""+nt,children:U,containerInfo:R,implementation:M}}var rt=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ct(U,R){if(U==="font")return"";if(typeof R=="string")return R==="use-credentials"?R:""}return zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,zt.createPortal=function(U,R){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!R||R.nodeType!==1&&R.nodeType!==9&&R.nodeType!==11)throw Error(ft(299));return J(U,R,null,M)},zt.flushSync=function(U){var R=rt.T,M=E.p;try{if(rt.T=null,E.p=2,U)return U()}finally{rt.T=R,E.p=M,E.d.f()}},zt.preconnect=function(U,R){typeof U=="string"&&(R?(R=R.crossOrigin,R=typeof R=="string"?R==="use-credentials"?R:"":void 0):R=null,E.d.C(U,R))},zt.prefetchDNS=function(U){typeof U=="string"&&E.d.D(U)},zt.preinit=function(U,R){if(typeof U=="string"&&R&&typeof R.as=="string"){var M=R.as,nt=Ct(M,R.crossOrigin),et=typeof R.integrity=="string"?R.integrity:void 0,Ht=typeof R.fetchPriority=="string"?R.fetchPriority:void 0;M==="style"?E.d.S(U,typeof R.precedence=="string"?R.precedence:void 0,{crossOrigin:nt,integrity:et,fetchPriority:Ht}):M==="script"&&E.d.X(U,{crossOrigin:nt,integrity:et,fetchPriority:Ht,nonce:typeof R.nonce=="string"?R.nonce:void 0})}},zt.preinitModule=function(U,R){if(typeof U=="string")if(typeof R=="object"&&R!==null){if(R.as==null||R.as==="script"){var M=Ct(R.as,R.crossOrigin);E.d.M(U,{crossOrigin:M,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0})}}else R==null&&E.d.M(U)},zt.preload=function(U,R){if(typeof U=="string"&&typeof R=="object"&&R!==null&&typeof R.as=="string"){var M=R.as,nt=Ct(M,R.crossOrigin);E.d.L(U,M,{crossOrigin:nt,integrity:typeof R.integrity=="string"?R.integrity:void 0,nonce:typeof R.nonce=="string"?R.nonce:void 0,type:typeof R.type=="string"?R.type:void 0,fetchPriority:typeof R.fetchPriority=="string"?R.fetchPriority:void 0,referrerPolicy:typeof R.referrerPolicy=="string"?R.referrerPolicy:void 0,imageSrcSet:typeof R.imageSrcSet=="string"?R.imageSrcSet:void 0,imageSizes:typeof R.imageSizes=="string"?R.imageSizes:void 0,media:typeof R.media=="string"?R.media:void 0})}},zt.preloadModule=function(U,R){if(typeof U=="string")if(R){var M=Ct(R.as,R.crossOrigin);E.d.m(U,{as:typeof R.as=="string"&&R.as!=="script"?R.as:void 0,crossOrigin:M,integrity:typeof R.integrity=="string"?R.integrity:void 0})}else E.d.m(U)},zt.requestFormReset=function(U){E.d.r(U)},zt.unstable_batchedUpdates=function(U,R){return U(R)},zt.useFormState=function(U,R,M){return rt.H.useFormState(U,R,M)},zt.useFormStatus=function(){return rt.H.useHostTransitionStatus()},zt.version="19.1.0",zt}var ar;function L0(){if(ar)return Pc.exports;ar=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(ft){console.error(ft)}}return D(),Pc.exports=H0(),Pc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var er;function B0(){if(er)return Eu;er=1;var D=C0(),ft=tf(),W=L0();function E(t){var l="https://react.dev/errors/"+t;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function L(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function J(t){var l=t,a=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.flags&4098)!==0&&(a=l.return),t=l.return;while(t)}return l.tag===3?a:null}function rt(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function Ct(t){if(J(t)!==t)throw Error(E(188))}function U(t){var l=t.alternate;if(!l){if(l=J(t),l===null)throw Error(E(188));return l!==t?null:t}for(var a=t,e=l;;){var u=a.return;if(u===null)break;var n=u.alternate;if(n===null){if(e=u.return,e!==null){a=e;continue}break}if(u.child===n.child){for(n=u.child;n;){if(n===a)return Ct(u),t;if(n===e)return Ct(u),l;n=n.sibling}throw Error(E(188))}if(a.return!==e.return)a=u,e=n;else{for(var i=!1,c=u.child;c;){if(c===a){i=!0,a=u,e=n;break}if(c===e){i=!0,e=u,a=n;break}c=c.sibling}if(!i){for(c=n.child;c;){if(c===a){i=!0,a=n,e=u;break}if(c===e){i=!0,e=n,a=u;break}c=c.sibling}if(!i)throw Error(E(189))}}if(a.alternate!==e)throw Error(E(190))}if(a.tag!==3)throw Error(E(188));return a.stateNode.current===a?t:l}function R(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t;for(t=t.child;t!==null;){if(l=R(t),l!==null)return l;t=t.sibling}return null}var M=Object.assign,nt=Symbol.for("react.element"),et=Symbol.for("react.transitional.element"),Ht=Symbol.for("react.portal"),Lt=Symbol.for("react.fragment"),dl=Symbol.for("react.strict_mode"),xt=Symbol.for("react.profiler"),da=Symbol.for("react.provider"),Al=Symbol.for("react.consumer"),Nt=Symbol.for("react.context"),rl=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),wt=Symbol.for("react.suspense_list"),Vt=Symbol.for("react.memo"),Zt=Symbol.for("react.lazy"),El=Symbol.for("react.activity"),Ca=Symbol.for("react.memo_cache_sentinel"),pl=Symbol.iterator;function Dt(t){return t===null||typeof t!="object"?null:(t=pl&&t[pl]||t["@@iterator"],typeof t=="function"?t:null)}var ra=Symbol.for("react.client.reference");function ma(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ra?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Lt:return"Fragment";case xt:return"Profiler";case dl:return"StrictMode";case V:return"Suspense";case wt:return"SuspenseList";case El:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Ht:return"Portal";case Nt:return(t.displayName||"Context")+".Provider";case Al:return(t._context.displayName||"Context")+".Consumer";case rl:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vt:return l=t.displayName||null,l!==null?l:ma(t.type)||"Memo";case Zt:l=t._payload,t=t._init;try{return ma(t(l))}catch{}}return null}var _t=Array.isArray,S=ft.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,p=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},lt=[],s=-1;function b(t){return{current:t}}function O(t){0>s||(t.current=lt[s],lt[s]=null,s--)}function A(t,l){s++,lt[s]=t.current,t.current=l}var z=b(null),Z=b(null),x=b(null),Kt=b(null);function it(t,l){switch(A(x,l),A(Z,t),A(z,null),l.nodeType){case 9:case 11:t=(t=l.documentElement)&&(t=t.namespaceURI)?Ad(t):0;break;default:if(t=l.tagName,l=l.namespaceURI)l=Ad(l),t=pd(l,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}O(z),A(z,t)}function Gl(){O(z),O(Z),O(x)}function Hn(t){t.memoizedState!==null&&A(Kt,t);var l=z.current,a=pd(l,t.type);l!==a&&(A(Z,t),A(z,a))}function vu(t){Z.current===t&&(O(z),O(Z)),Kt.current===t&&(O(Kt),ou._currentValue=B)}var Ln=Object.prototype.hasOwnProperty,Bn=D.unstable_scheduleCallback,qn=D.unstable_cancelCallback,ir=D.unstable_shouldYield,cr=D.unstable_requestPaint,vl=D.unstable_now,fr=D.unstable_getCurrentPriorityLevel,lf=D.unstable_ImmediatePriority,af=D.unstable_UserBlockingPriority,Su=D.unstable_NormalPriority,sr=D.unstable_LowPriority,ef=D.unstable_IdlePriority,or=D.log,dr=D.unstable_setDisableYieldValue,Se=null,Jt=null;function Ql(t){if(typeof or=="function"&&dr(t),Jt&&typeof Jt.setStrictMode=="function")try{Jt.setStrictMode(Se,t)}catch{}}var kt=Math.clz32?Math.clz32:hr,rr=Math.log,mr=Math.LN2;function hr(t){return t>>>=0,t===0?32:31-(rr(t)/mr|0)|0}var Tu=256,gu=4194304;function ha(t){var l=t&42;if(l!==0)return l;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function bu(t,l,a){var e=t.pendingLanes;if(e===0)return 0;var u=0,n=t.suspendedLanes,i=t.pingedLanes;t=t.warmLanes;var c=e&134217727;return c!==0?(e=c&~n,e!==0?u=ha(e):(i&=c,i!==0?u=ha(i):a||(a=c&~t,a!==0&&(u=ha(a))))):(c=e&~n,c!==0?u=ha(c):i!==0?u=ha(i):a||(a=e&~t,a!==0&&(u=ha(a)))),u===0?0:l!==0&&l!==u&&(l&n)===0&&(n=u&-u,a=l&-l,n>=a||n===32&&(a&4194048)!==0)?l:u}function Te(t,l){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&l)===0}function yr(t,l){switch(t){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uf(){var t=Tu;return Tu<<=1,(Tu&4194048)===0&&(Tu=256),t}function nf(){var t=gu;return gu<<=1,(gu&62914560)===0&&(gu=4194304),t}function xn(t){for(var l=[],a=0;31>a;a++)l.push(t);return l}function ge(t,l){t.pendingLanes|=l,l!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Er(t,l,a,e,u,n){var i=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var c=t.entanglements,f=t.expirationTimes,m=t.hiddenUpdates;for(a=i&~a;0<a;){var v=31-kt(a),g=1<<v;c[v]=0,f[v]=-1;var h=m[v];if(h!==null)for(m[v]=null,v=0;v<h.length;v++){var y=h[v];y!==null&&(y.lane&=-536870913)}a&=~g}e!==0&&cf(t,e,0),n!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=n&~(i&~l))}function cf(t,l,a){t.pendingLanes|=l,t.suspendedLanes&=~l;var e=31-kt(l);t.entangledLanes|=l,t.entanglements[e]=t.entanglements[e]|1073741824|a&4194090}function ff(t,l){var a=t.entangledLanes|=l;for(t=t.entanglements;a;){var e=31-kt(a),u=1<<e;u&l|t[e]&l&&(t[e]|=l),a&=~u}}function Yn(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function jn(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function sf(){var t=p.p;return t!==0?t:(t=window.event,t===void 0?32:wd(t.type))}function vr(t,l){var a=p.p;try{return p.p=t,l()}finally{p.p=a}}var Xl=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Xl,Yt="__reactProps$"+Xl,Ha="__reactContainer$"+Xl,Gn="__reactEvents$"+Xl,Sr="__reactListeners$"+Xl,Tr="__reactHandles$"+Xl,of="__reactResources$"+Xl,be="__reactMarker$"+Xl;function Qn(t){delete t[Mt],delete t[Yt],delete t[Gn],delete t[Sr],delete t[Tr]}function La(t){var l=t[Mt];if(l)return l;for(var a=t.parentNode;a;){if(l=a[Ha]||a[Mt]){if(a=l.alternate,l.child!==null||a!==null&&a.child!==null)for(t=_d(t);t!==null;){if(a=t[Mt])return a;t=_d(t)}return l}t=a,a=t.parentNode}return null}function Ba(t){if(t=t[Mt]||t[Ha]){var l=t.tag;if(l===5||l===6||l===13||l===26||l===27||l===3)return t}return null}function Re(t){var l=t.tag;if(l===5||l===26||l===27||l===6)return t.stateNode;throw Error(E(33))}function qa(t){var l=t[of];return l||(l=t[of]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Tt(t){t[be]=!0}var df=new Set,rf={};function ya(t,l){xa(t,l),xa(t+"Capture",l)}function xa(t,l){for(rf[t]=l,t=0;t<l.length;t++)df.add(l[t])}var gr=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mf={},hf={};function br(t){return Ln.call(hf,t)?!0:Ln.call(mf,t)?!1:gr.test(t)?hf[t]=!0:(mf[t]=!0,!1)}function Ru(t,l,a){if(br(l))if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(l);return;case"boolean":var e=l.toLowerCase().slice(0,5);if(e!=="data-"&&e!=="aria-"){t.removeAttribute(l);return}}t.setAttribute(l,""+a)}}function Au(t,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttribute(l,""+a)}}function Ol(t,l,a,e){if(e===null)t.removeAttribute(a);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(l,a,""+e)}}var Xn,yf;function Ya(t){if(Xn===void 0)try{throw Error()}catch(a){var l=a.stack.trim().match(/\n( *(at )?)/);Xn=l&&l[1]||"",yf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xn+t+yf}var wn=!1;function Vn(t,l){if(!t||wn)return"";wn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var e={DetermineComponentFrameRoot:function(){try{if(l){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(y){var h=y}Reflect.construct(t,[],g)}else{try{g.call()}catch(y){h=y}t.call(g.prototype)}}else{try{throw Error()}catch(y){h=y}(g=t())&&typeof g.catch=="function"&&g.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};e.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(e.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(e.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var n=e.DetermineComponentFrameRoot(),i=n[0],c=n[1];if(i&&c){var f=i.split(`
`),m=c.split(`
`);for(u=e=0;e<f.length&&!f[e].includes("DetermineComponentFrameRoot");)e++;for(;u<m.length&&!m[u].includes("DetermineComponentFrameRoot");)u++;if(e===f.length||u===m.length)for(e=f.length-1,u=m.length-1;1<=e&&0<=u&&f[e]!==m[u];)u--;for(;1<=e&&0<=u;e--,u--)if(f[e]!==m[u]){if(e!==1||u!==1)do if(e--,u--,0>u||f[e]!==m[u]){var v=`
`+f[e].replace(" at new "," at ");return t.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",t.displayName)),v}while(1<=e&&0<=u);break}}}finally{wn=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ya(a):""}function Rr(t){switch(t.tag){case 26:case 27:case 5:return Ya(t.type);case 16:return Ya("Lazy");case 13:return Ya("Suspense");case 19:return Ya("SuspenseList");case 0:case 15:return Vn(t.type,!1);case 11:return Vn(t.type.render,!1);case 1:return Vn(t.type,!0);case 31:return Ya("Activity");default:return""}}function Ef(t){try{var l="";do l+=Rr(t),t=t.return;while(t);return l}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function al(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vf(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Ar(t){var l=vf(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,l),e=""+t[l];if(!t.hasOwnProperty(l)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,n=a.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return u.call(this)},set:function(i){e=""+i,n.call(this,i)}}),Object.defineProperty(t,l,{enumerable:a.enumerable}),{getValue:function(){return e},setValue:function(i){e=""+i},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function pu(t){t._valueTracker||(t._valueTracker=Ar(t))}function Sf(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var a=l.getValue(),e="";return t&&(e=vf(t)?t.checked?"true":"false":t.value),t=e,t!==a?(l.setValue(t),!0):!1}function Ou(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pr=/[\n"\\]/g;function el(t){return t.replace(pr,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function Zn(t,l,a,e,u,n,i,c){t.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?t.type=i:t.removeAttribute("type"),l!=null?i==="number"?(l===0&&t.value===""||t.value!=l)&&(t.value=""+al(l)):t.value!==""+al(l)&&(t.value=""+al(l)):i!=="submit"&&i!=="reset"||t.removeAttribute("value"),l!=null?Kn(t,i,al(l)):a!=null?Kn(t,i,al(a)):e!=null&&t.removeAttribute("value"),u==null&&n!=null&&(t.defaultChecked=!!n),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.name=""+al(c):t.removeAttribute("name")}function Tf(t,l,a,e,u,n,i,c){if(n!=null&&typeof n!="function"&&typeof n!="symbol"&&typeof n!="boolean"&&(t.type=n),l!=null||a!=null){if(!(n!=="submit"&&n!=="reset"||l!=null))return;a=a!=null?""+al(a):"",l=l!=null?""+al(l):a,c||l===t.value||(t.value=l),t.defaultValue=l}e=e??u,e=typeof e!="function"&&typeof e!="symbol"&&!!e,t.checked=c?t.checked:!!e,t.defaultChecked=!!e,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.name=i)}function Kn(t,l,a){l==="number"&&Ou(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ja(t,l,a,e){if(t=t.options,l){l={};for(var u=0;u<a.length;u++)l["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=l.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&e&&(t[a].defaultSelected=!0)}else{for(a=""+al(a),l=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,e&&(t[u].defaultSelected=!0);return}l!==null||t[u].disabled||(l=t[u])}l!==null&&(l.selected=!0)}}function gf(t,l,a){if(l!=null&&(l=""+al(l),l!==t.value&&(t.value=l),a==null)){t.defaultValue!==l&&(t.defaultValue=l);return}t.defaultValue=a!=null?""+al(a):""}function bf(t,l,a,e){if(l==null){if(e!=null){if(a!=null)throw Error(E(92));if(_t(e)){if(1<e.length)throw Error(E(93));e=e[0]}a=e}a==null&&(a=""),l=a}a=al(l),t.defaultValue=a,e=t.textContent,e===a&&e!==""&&e!==null&&(t.value=e)}function Ga(t,l){if(l){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=l;return}}t.textContent=l}var Or=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rf(t,l,a){var e=l.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?e?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="":e?t.setProperty(l,a):typeof a!="number"||a===0||Or.has(l)?l==="float"?t.cssFloat=a:t[l]=(""+a).trim():t[l]=a+"px"}function Af(t,l,a){if(l!=null&&typeof l!="object")throw Error(E(62));if(t=t.style,a!=null){for(var e in a)!a.hasOwnProperty(e)||l!=null&&l.hasOwnProperty(e)||(e.indexOf("--")===0?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="");for(var u in l)e=l[u],l.hasOwnProperty(u)&&a[u]!==e&&Rf(t,u,e)}else for(var n in l)l.hasOwnProperty(n)&&Rf(t,n,l[n])}function Jn(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nr=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nu(t){return Dr.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var kn=null;function Wn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qa=null,Xa=null;function pf(t){var l=Ba(t);if(l&&(t=l.stateNode)){var a=t[Yt]||null;t:switch(t=l.stateNode,l.type){case"input":if(Zn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),l=a.name,a.type==="radio"&&l!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+el(""+l)+'"][type="radio"]'),l=0;l<a.length;l++){var e=a[l];if(e!==t&&e.form===t.form){var u=e[Yt]||null;if(!u)throw Error(E(90));Zn(e,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(l=0;l<a.length;l++)e=a[l],e.form===t.form&&Sf(e)}break t;case"textarea":gf(t,a.value,a.defaultValue);break t;case"select":l=a.value,l!=null&&ja(t,!!a.multiple,l,!1)}}}var Fn=!1;function Of(t,l,a){if(Fn)return t(l,a);Fn=!0;try{var e=t(l);return e}finally{if(Fn=!1,(Qa!==null||Xa!==null)&&(rn(),Qa&&(l=Qa,t=Xa,Xa=Qa=null,pf(l),t)))for(l=0;l<t.length;l++)pf(t[l])}}function Ae(t,l){var a=t.stateNode;if(a===null)return null;var e=a[Yt]||null;if(e===null)return null;a=e[l];t:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(e=!e.disabled)||(t=t.type,e=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!e;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(E(231,l,typeof a));return a}var Nl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),In=!1;if(Nl)try{var pe={};Object.defineProperty(pe,"passive",{get:function(){In=!0}}),window.addEventListener("test",pe,pe),window.removeEventListener("test",pe,pe)}catch{In=!1}var wl=null,$n=null,Du=null;function Nf(){if(Du)return Du;var t,l=$n,a=l.length,e,u="value"in wl?wl.value:wl.textContent,n=u.length;for(t=0;t<a&&l[t]===u[t];t++);var i=a-t;for(e=1;e<=i&&l[a-e]===u[n-e];e++);return Du=u.slice(t,1<e?1-e:void 0)}function _u(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function Mu(){return!0}function Df(){return!1}function jt(t){function l(a,e,u,n,i){this._reactName=a,this._targetInst=u,this.type=e,this.nativeEvent=n,this.target=i,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(a=t[c],this[c]=a?a(n):n[c]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?Mu:Df,this.isPropagationStopped=Df,this}return M(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Mu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Mu)},persist:function(){},isPersistent:Mu}),l}var Ea={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uu=jt(Ea),Oe=M({},Ea,{view:0,detail:0}),_r=jt(Oe),Pn,ti,Ne,zu=M({},Oe,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ai,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ne&&(Ne&&t.type==="mousemove"?(Pn=t.screenX-Ne.screenX,ti=t.screenY-Ne.screenY):ti=Pn=0,Ne=t),Pn)},movementY:function(t){return"movementY"in t?t.movementY:ti}}),_f=jt(zu),Mr=M({},zu,{dataTransfer:0}),Ur=jt(Mr),zr=M({},Oe,{relatedTarget:0}),li=jt(zr),Cr=M({},Ea,{animationName:0,elapsedTime:0,pseudoElement:0}),Hr=jt(Cr),Lr=M({},Ea,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Br=jt(Lr),qr=M({},Ea,{data:0}),Mf=jt(qr),xr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gr(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=jr[t])?!!l[t]:!1}function ai(){return Gr}var Qr=M({},Oe,{key:function(t){if(t.key){var l=xr[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=_u(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yr[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ai,charCode:function(t){return t.type==="keypress"?_u(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_u(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Xr=jt(Qr),wr=M({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=jt(wr),Vr=M({},Oe,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ai}),Zr=jt(Vr),Kr=M({},Ea,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jr=jt(Kr),kr=M({},zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Wr=jt(kr),Fr=M({},Ea,{newState:0,oldState:0}),Ir=jt(Fr),$r=[9,13,27,32],ei=Nl&&"CompositionEvent"in window,De=null;Nl&&"documentMode"in document&&(De=document.documentMode);var Pr=Nl&&"TextEvent"in window&&!De,zf=Nl&&(!ei||De&&8<De&&11>=De),Cf=" ",Hf=!1;function Lf(t,l){switch(t){case"keyup":return $r.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wa=!1;function tm(t,l){switch(t){case"compositionend":return Bf(l);case"keypress":return l.which!==32?null:(Hf=!0,Cf);case"textInput":return t=l.data,t===Cf&&Hf?null:t;default:return null}}function lm(t,l){if(wa)return t==="compositionend"||!ei&&Lf(t,l)?(t=Nf(),Du=$n=wl=null,wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return zf&&l.locale!=="ko"?null:l.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!am[t.type]:l==="textarea"}function xf(t,l,a,e){Qa?Xa?Xa.push(e):Xa=[e]:Qa=e,l=Sn(l,"onChange"),0<l.length&&(a=new Uu("onChange","change",null,a,e),t.push({event:a,listeners:l}))}var _e=null,Me=null;function em(t){Sd(t,0)}function Cu(t){var l=Re(t);if(Sf(l))return t}function Yf(t,l){if(t==="change")return l}var jf=!1;if(Nl){var ui;if(Nl){var ni="oninput"in document;if(!ni){var Gf=document.createElement("div");Gf.setAttribute("oninput","return;"),ni=typeof Gf.oninput=="function"}ui=ni}else ui=!1;jf=ui&&(!document.documentMode||9<document.documentMode)}function Qf(){_e&&(_e.detachEvent("onpropertychange",Xf),Me=_e=null)}function Xf(t){if(t.propertyName==="value"&&Cu(Me)){var l=[];xf(l,Me,t,Wn(t)),Of(em,l)}}function um(t,l,a){t==="focusin"?(Qf(),_e=l,Me=a,_e.attachEvent("onpropertychange",Xf)):t==="focusout"&&Qf()}function nm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cu(Me)}function im(t,l){if(t==="click")return Cu(l)}function cm(t,l){if(t==="input"||t==="change")return Cu(l)}function fm(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var Wt=typeof Object.is=="function"?Object.is:fm;function Ue(t,l){if(Wt(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var a=Object.keys(t),e=Object.keys(l);if(a.length!==e.length)return!1;for(e=0;e<a.length;e++){var u=a[e];if(!Ln.call(l,u)||!Wt(t[u],l[u]))return!1}return!0}function wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vf(t,l){var a=wf(t);t=0;for(var e;a;){if(a.nodeType===3){if(e=t+a.textContent.length,t<=l&&e>=l)return{node:a,offset:l-t};t=e}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=wf(a)}}function Zf(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?Zf(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function Kf(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var l=Ou(t.document);l instanceof t.HTMLIFrameElement;){try{var a=typeof l.contentWindow.location.href=="string"}catch{a=!1}if(a)t=l.contentWindow;else break;l=Ou(t.document)}return l}function ii(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}var sm=Nl&&"documentMode"in document&&11>=document.documentMode,Va=null,ci=null,ze=null,fi=!1;function Jf(t,l,a){var e=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fi||Va==null||Va!==Ou(e)||(e=Va,"selectionStart"in e&&ii(e)?e={start:e.selectionStart,end:e.selectionEnd}:(e=(e.ownerDocument&&e.ownerDocument.defaultView||window).getSelection(),e={anchorNode:e.anchorNode,anchorOffset:e.anchorOffset,focusNode:e.focusNode,focusOffset:e.focusOffset}),ze&&Ue(ze,e)||(ze=e,e=Sn(ci,"onSelect"),0<e.length&&(l=new Uu("onSelect","select",null,l,a),t.push({event:l,listeners:e}),l.target=Va)))}function va(t,l){var a={};return a[t.toLowerCase()]=l.toLowerCase(),a["Webkit"+t]="webkit"+l,a["Moz"+t]="moz"+l,a}var Za={animationend:va("Animation","AnimationEnd"),animationiteration:va("Animation","AnimationIteration"),animationstart:va("Animation","AnimationStart"),transitionrun:va("Transition","TransitionRun"),transitionstart:va("Transition","TransitionStart"),transitioncancel:va("Transition","TransitionCancel"),transitionend:va("Transition","TransitionEnd")},si={},kf={};Nl&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete Za.animationend.animation,delete Za.animationiteration.animation,delete Za.animationstart.animation),"TransitionEvent"in window||delete Za.transitionend.transition);function Sa(t){if(si[t])return si[t];if(!Za[t])return t;var l=Za[t],a;for(a in l)if(l.hasOwnProperty(a)&&a in kf)return si[t]=l[a];return t}var Wf=Sa("animationend"),Ff=Sa("animationiteration"),If=Sa("animationstart"),om=Sa("transitionrun"),dm=Sa("transitionstart"),rm=Sa("transitioncancel"),$f=Sa("transitionend"),Pf=new Map,oi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oi.push("scrollEnd");function ml(t,l){Pf.set(t,l),ya(l,[t])}var ts=new WeakMap;function ul(t,l){if(typeof t=="object"&&t!==null){var a=ts.get(t);return a!==void 0?a:(l={value:t,source:l,stack:Ef(l)},ts.set(t,l),l)}return{value:t,source:l,stack:Ef(l)}}var nl=[],Ka=0,di=0;function Hu(){for(var t=Ka,l=di=Ka=0;l<t;){var a=nl[l];nl[l++]=null;var e=nl[l];nl[l++]=null;var u=nl[l];nl[l++]=null;var n=nl[l];if(nl[l++]=null,e!==null&&u!==null){var i=e.pending;i===null?u.next=u:(u.next=i.next,i.next=u),e.pending=u}n!==0&&ls(a,u,n)}}function Lu(t,l,a,e){nl[Ka++]=t,nl[Ka++]=l,nl[Ka++]=a,nl[Ka++]=e,di|=e,t.lanes|=e,t=t.alternate,t!==null&&(t.lanes|=e)}function ri(t,l,a,e){return Lu(t,l,a,e),Bu(t)}function Ja(t,l){return Lu(t,null,null,l),Bu(t)}function ls(t,l,a){t.lanes|=a;var e=t.alternate;e!==null&&(e.lanes|=a);for(var u=!1,n=t.return;n!==null;)n.childLanes|=a,e=n.alternate,e!==null&&(e.childLanes|=a),n.tag===22&&(t=n.stateNode,t===null||t._visibility&1||(u=!0)),t=n,n=n.return;return t.tag===3?(n=t.stateNode,u&&l!==null&&(u=31-kt(a),t=n.hiddenUpdates,e=t[u],e===null?t[u]=[l]:e.push(l),l.lane=a|536870912),n):null}function Bu(t){if(50<au)throw au=0,Sc=null,Error(E(185));for(var l=t.return;l!==null;)t=l,l=t.return;return t.tag===3?t.stateNode:null}var ka={};function mm(t,l,a,e){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=e,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(t,l,a,e){return new mm(t,l,a,e)}function mi(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dl(t,l){var a=t.alternate;return a===null?(a=Ft(t.tag,l,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=l,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,l=t.dependencies,a.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function as(t,l){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=l,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,l=a.dependencies,t.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),t}function qu(t,l,a,e,u,n){var i=0;if(e=t,typeof t=="function")mi(t)&&(i=1);else if(typeof t=="string")i=y0(t,a,z.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case El:return t=Ft(31,a,l,u),t.elementType=El,t.lanes=n,t;case Lt:return Ta(a.children,u,n,l);case dl:i=8,u|=24;break;case xt:return t=Ft(12,a,l,u|2),t.elementType=xt,t.lanes=n,t;case V:return t=Ft(13,a,l,u),t.elementType=V,t.lanes=n,t;case wt:return t=Ft(19,a,l,u),t.elementType=wt,t.lanes=n,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case da:case Nt:i=10;break t;case Al:i=9;break t;case rl:i=11;break t;case Vt:i=14;break t;case Zt:i=16,e=null;break t}i=29,a=Error(E(130,t===null?"null":typeof t,"")),e=null}return l=Ft(i,a,l,u),l.elementType=t,l.type=e,l.lanes=n,l}function Ta(t,l,a,e){return t=Ft(7,t,e,l),t.lanes=a,t}function hi(t,l,a){return t=Ft(6,t,null,l),t.lanes=a,t}function yi(t,l,a){return l=Ft(4,t.children!==null?t.children:[],t.key,l),l.lanes=a,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}var Wa=[],Fa=0,xu=null,Yu=0,il=[],cl=0,ga=null,_l=1,Ml="";function ba(t,l){Wa[Fa++]=Yu,Wa[Fa++]=xu,xu=t,Yu=l}function es(t,l,a){il[cl++]=_l,il[cl++]=Ml,il[cl++]=ga,ga=t;var e=_l;t=Ml;var u=32-kt(e)-1;e&=~(1<<u),a+=1;var n=32-kt(l)+u;if(30<n){var i=u-u%5;n=(e&(1<<i)-1).toString(32),e>>=i,u-=i,_l=1<<32-kt(l)+u|a<<u|e,Ml=n+t}else _l=1<<n|a<<u|e,Ml=t}function Ei(t){t.return!==null&&(ba(t,1),es(t,1,0))}function vi(t){for(;t===xu;)xu=Wa[--Fa],Wa[Fa]=null,Yu=Wa[--Fa],Wa[Fa]=null;for(;t===ga;)ga=il[--cl],il[cl]=null,Ml=il[--cl],il[cl]=null,_l=il[--cl],il[cl]=null}var Bt=null,ot=null,k=!1,Ra=null,Sl=!1,Si=Error(E(519));function Aa(t){var l=Error(E(418,""));throw Le(ul(l,t)),Si}function us(t){var l=t.stateNode,a=t.type,e=t.memoizedProps;switch(l[Mt]=t,l[Yt]=e,a){case"dialog":X("cancel",l),X("close",l);break;case"iframe":case"object":case"embed":X("load",l);break;case"video":case"audio":for(a=0;a<uu.length;a++)X(uu[a],l);break;case"source":X("error",l);break;case"img":case"image":case"link":X("error",l),X("load",l);break;case"details":X("toggle",l);break;case"input":X("invalid",l),Tf(l,e.value,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name,!0),pu(l);break;case"select":X("invalid",l);break;case"textarea":X("invalid",l),bf(l,e.value,e.defaultValue,e.children),pu(l)}a=e.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||l.textContent===""+a||e.suppressHydrationWarning===!0||Rd(l.textContent,a)?(e.popover!=null&&(X("beforetoggle",l),X("toggle",l)),e.onScroll!=null&&X("scroll",l),e.onScrollEnd!=null&&X("scrollend",l),e.onClick!=null&&(l.onclick=Tn),l=!0):l=!1,l||Aa(t)}function ns(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 13:Sl=!1;return;case 27:case 3:Sl=!0;return;default:Bt=Bt.return}}function Ce(t){if(t!==Bt)return!1;if(!k)return ns(t),k=!0,!1;var l=t.tag,a;if((a=l!==3&&l!==27)&&((a=l===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lc(t.type,t.memoizedProps)),a=!a),a&&ot&&Aa(t),ns(t),l===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));t:{for(t=t.nextSibling,l=0;t;){if(t.nodeType===8)if(a=t.data,a==="/$"){if(l===0){ot=yl(t.nextSibling);break t}l--}else a!=="$"&&a!=="$!"&&a!=="$?"||l++;t=t.nextSibling}ot=null}}else l===27?(l=ot,na(t.type)?(t=Yc,Yc=null,ot=t):ot=l):ot=Bt?yl(t.stateNode.nextSibling):null;return!0}function He(){ot=Bt=null,k=!1}function is(){var t=Ra;return t!==null&&(Xt===null?Xt=t:Xt.push.apply(Xt,t),Ra=null),t}function Le(t){Ra===null?Ra=[t]:Ra.push(t)}var Ti=b(null),pa=null,Ul=null;function Vl(t,l,a){A(Ti,l._currentValue),l._currentValue=a}function zl(t){t._currentValue=Ti.current,O(Ti)}function gi(t,l,a){for(;t!==null;){var e=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,e!==null&&(e.childLanes|=l)):e!==null&&(e.childLanes&l)!==l&&(e.childLanes|=l),t===a)break;t=t.return}}function bi(t,l,a,e){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var n=u.dependencies;if(n!==null){var i=u.child;n=n.firstContext;t:for(;n!==null;){var c=n;n=u;for(var f=0;f<l.length;f++)if(c.context===l[f]){n.lanes|=a,c=n.alternate,c!==null&&(c.lanes|=a),gi(n.return,a,t),e||(i=null);break t}n=c.next}}else if(u.tag===18){if(i=u.return,i===null)throw Error(E(341));i.lanes|=a,n=i.alternate,n!==null&&(n.lanes|=a),gi(i,a,t),i=null}else i=u.child;if(i!==null)i.return=u;else for(i=u;i!==null;){if(i===t){i=null;break}if(u=i.sibling,u!==null){u.return=i.return,i=u;break}i=i.return}u=i}}function Be(t,l,a,e){t=null;for(var u=l,n=!1;u!==null;){if(!n){if((u.flags&524288)!==0)n=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var i=u.alternate;if(i===null)throw Error(E(387));if(i=i.memoizedProps,i!==null){var c=u.type;Wt(u.pendingProps.value,i.value)||(t!==null?t.push(c):t=[c])}}else if(u===Kt.current){if(i=u.alternate,i===null)throw Error(E(387));i.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(ou):t=[ou])}u=u.return}t!==null&&bi(l,t,a,e),l.flags|=262144}function ju(t){for(t=t.firstContext;t!==null;){if(!Wt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Oa(t){pa=t,Ul=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ut(t){return cs(pa,t)}function Gu(t,l){return pa===null&&Oa(t),cs(t,l)}function cs(t,l){var a=l._currentValue;if(l={context:l,memoizedValue:a,next:null},Ul===null){if(t===null)throw Error(E(308));Ul=l,t.dependencies={lanes:0,firstContext:l},t.flags|=524288}else Ul=Ul.next=l;return a}var hm=typeof AbortController<"u"?AbortController:function(){var t=[],l=this.signal={aborted:!1,addEventListener:function(a,e){t.push(e)}};this.abort=function(){l.aborted=!0,t.forEach(function(a){return a()})}},ym=D.unstable_scheduleCallback,Em=D.unstable_NormalPriority,vt={$$typeof:Nt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ri(){return{controller:new hm,data:new Map,refCount:0}}function qe(t){t.refCount--,t.refCount===0&&ym(Em,function(){t.controller.abort()})}var xe=null,Ai=0,Ia=0,$a=null;function vm(t,l){if(xe===null){var a=xe=[];Ai=0,Ia=Oc(),$a={status:"pending",value:void 0,then:function(e){a.push(e)}}}return Ai++,l.then(fs,fs),l}function fs(){if(--Ai===0&&xe!==null){$a!==null&&($a.status="fulfilled");var t=xe;xe=null,Ia=0,$a=null;for(var l=0;l<t.length;l++)(0,t[l])()}}function Sm(t,l){var a=[],e={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){e.status="fulfilled",e.value=l;for(var u=0;u<a.length;u++)(0,a[u])(l)},function(u){for(e.status="rejected",e.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),e}var ss=S.S;S.S=function(t,l){typeof l=="object"&&l!==null&&typeof l.then=="function"&&vm(t,l),ss!==null&&ss(t,l)};var Na=b(null);function pi(){var t=Na.current;return t!==null?t:ut.pooledCache}function Qu(t,l){l===null?A(Na,Na.current):A(Na,l.pool)}function os(){var t=pi();return t===null?null:{parent:vt._currentValue,pool:t}}var Ye=Error(E(460)),ds=Error(E(474)),Xu=Error(E(542)),Oi={then:function(){}};function rs(t){return t=t.status,t==="fulfilled"||t==="rejected"}function wu(){}function ms(t,l,a){switch(a=t[a],a===void 0?t.push(l):a!==l&&(l.then(wu,wu),l=a),l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,ys(t),t;default:if(typeof l.status=="string")l.then(wu,wu);else{if(t=ut,t!==null&&100<t.shellSuspendCounter)throw Error(E(482));t=l,t.status="pending",t.then(function(e){if(l.status==="pending"){var u=l;u.status="fulfilled",u.value=e}},function(e){if(l.status==="pending"){var u=l;u.status="rejected",u.reason=e}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw t=l.reason,ys(t),t}throw je=l,Ye}}var je=null;function hs(){if(je===null)throw Error(E(459));var t=je;return je=null,t}function ys(t){if(t===Ye||t===Xu)throw Error(E(483))}var Zl=!1;function Ni(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Di(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Kl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Jl(t,l,a){var e=t.updateQueue;if(e===null)return null;if(e=e.shared,(F&2)!==0){var u=e.pending;return u===null?l.next=l:(l.next=u.next,u.next=l),e.pending=l,l=Bu(t),ls(t,null,a),l}return Lu(t,e,l,a),Bu(t)}function Ge(t,l,a){if(l=l.updateQueue,l!==null&&(l=l.shared,(a&4194048)!==0)){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,ff(t,a)}}function _i(t,l){var a=t.updateQueue,e=t.alternate;if(e!==null&&(e=e.updateQueue,a===e)){var u=null,n=null;if(a=a.firstBaseUpdate,a!==null){do{var i={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};n===null?u=n=i:n=n.next=i,a=a.next}while(a!==null);n===null?u=n=l:n=n.next=l}else u=n=l;a={baseState:e.baseState,firstBaseUpdate:u,lastBaseUpdate:n,shared:e.shared,callbacks:e.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=l:t.next=l,a.lastBaseUpdate=l}var Mi=!1;function Qe(){if(Mi){var t=$a;if(t!==null)throw t}}function Xe(t,l,a,e){Mi=!1;var u=t.updateQueue;Zl=!1;var n=u.firstBaseUpdate,i=u.lastBaseUpdate,c=u.shared.pending;if(c!==null){u.shared.pending=null;var f=c,m=f.next;f.next=null,i===null?n=m:i.next=m,i=f;var v=t.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==i&&(c===null?v.firstBaseUpdate=m:c.next=m,v.lastBaseUpdate=f))}if(n!==null){var g=u.baseState;i=0,v=m=f=null,c=n;do{var h=c.lane&-536870913,y=h!==c.lane;if(y?(w&h)===h:(e&h)===h){h!==0&&h===Ia&&(Mi=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});t:{var q=t,C=c;h=l;var tt=a;switch(C.tag){case 1:if(q=C.payload,typeof q=="function"){g=q.call(tt,g,h);break t}g=q;break t;case 3:q.flags=q.flags&-65537|128;case 0:if(q=C.payload,h=typeof q=="function"?q.call(tt,g,h):q,h==null)break t;g=M({},g,h);break t;case 2:Zl=!0}}h=c.callback,h!==null&&(t.flags|=64,y&&(t.flags|=8192),y=u.callbacks,y===null?u.callbacks=[h]:y.push(h))}else y={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(m=v=y,f=g):v=v.next=y,i|=h;if(c=c.next,c===null){if(c=u.shared.pending,c===null)break;y=c,c=y.next,y.next=null,u.lastBaseUpdate=y,u.shared.pending=null}}while(!0);v===null&&(f=g),u.baseState=f,u.firstBaseUpdate=m,u.lastBaseUpdate=v,n===null&&(u.shared.lanes=0),la|=i,t.lanes=i,t.memoizedState=g}}function Es(t,l){if(typeof t!="function")throw Error(E(191,t));t.call(l)}function vs(t,l){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Es(a[t],l)}var Pa=b(null),Vu=b(0);function Ss(t,l){t=Yl,A(Vu,t),A(Pa,l),Yl=t|l.baseLanes}function Ui(){A(Vu,Yl),A(Pa,Pa.current)}function zi(){Yl=Vu.current,O(Pa),O(Vu)}var kl=0,j=null,$=null,yt=null,Zu=!1,te=!1,Da=!1,Ku=0,we=0,le=null,Tm=0;function mt(){throw Error(E(321))}function Ci(t,l){if(l===null)return!1;for(var a=0;a<l.length&&a<t.length;a++)if(!Wt(t[a],l[a]))return!1;return!0}function Hi(t,l,a,e,u,n){return kl=n,j=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,S.H=t===null||t.memoizedState===null?lo:ao,Da=!1,n=a(e,u),Da=!1,te&&(n=gs(l,a,e,u)),Ts(t),n}function Ts(t){S.H=$u;var l=$!==null&&$.next!==null;if(kl=0,yt=$=j=null,Zu=!1,we=0,le=null,l)throw Error(E(300));t===null||gt||(t=t.dependencies,t!==null&&ju(t)&&(gt=!0))}function gs(t,l,a,e){j=t;var u=0;do{if(te&&(le=null),we=0,te=!1,25<=u)throw Error(E(301));if(u+=1,yt=$=null,t.updateQueue!=null){var n=t.updateQueue;n.lastEffect=null,n.events=null,n.stores=null,n.memoCache!=null&&(n.memoCache.index=0)}S.H=Nm,n=l(a,e)}while(te);return n}function gm(){var t=S.H,l=t.useState()[0];return l=typeof l.then=="function"?Ve(l):l,t=t.useState()[0],($!==null?$.memoizedState:null)!==t&&(j.flags|=1024),l}function Li(){var t=Ku!==0;return Ku=0,t}function Bi(t,l,a){l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~a}function qi(t){if(Zu){for(t=t.memoizedState;t!==null;){var l=t.queue;l!==null&&(l.pending=null),t=t.next}Zu=!1}kl=0,yt=$=j=null,te=!1,we=Ku=0,le=null}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?j.memoizedState=yt=t:yt=yt.next=t,yt}function Et(){if($===null){var t=j.alternate;t=t!==null?t.memoizedState:null}else t=$.next;var l=yt===null?j.memoizedState:yt.next;if(l!==null)yt=l,$=t;else{if(t===null)throw j.alternate===null?Error(E(467)):Error(E(310));$=t,t={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},yt===null?j.memoizedState=yt=t:yt=yt.next=t}return yt}function xi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ve(t){var l=we;return we+=1,le===null&&(le=[]),t=ms(le,t,l),l=j,(yt===null?l.memoizedState:yt.next)===null&&(l=l.alternate,S.H=l===null||l.memoizedState===null?lo:ao),t}function Ju(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ve(t);if(t.$$typeof===Nt)return Ut(t)}throw Error(E(438,String(t)))}function Yi(t){var l=null,a=j.updateQueue;if(a!==null&&(l=a.memoCache),l==null){var e=j.alternate;e!==null&&(e=e.updateQueue,e!==null&&(e=e.memoCache,e!=null&&(l={data:e.data.map(function(u){return u.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),a===null&&(a=xi(),j.updateQueue=a),a.memoCache=l,a=l.data[l.index],a===void 0)for(a=l.data[l.index]=Array(t),e=0;e<t;e++)a[e]=Ca;return l.index++,a}function Cl(t,l){return typeof l=="function"?l(t):l}function ku(t){var l=Et();return ji(l,$,t)}function ji(t,l,a){var e=t.queue;if(e===null)throw Error(E(311));e.lastRenderedReducer=a;var u=t.baseQueue,n=e.pending;if(n!==null){if(u!==null){var i=u.next;u.next=n.next,n.next=i}l.baseQueue=u=n,e.pending=null}if(n=t.baseState,u===null)t.memoizedState=n;else{l=u.next;var c=i=null,f=null,m=l,v=!1;do{var g=m.lane&-536870913;if(g!==m.lane?(w&g)===g:(kl&g)===g){var h=m.revertLane;if(h===0)f!==null&&(f=f.next={lane:0,revertLane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),g===Ia&&(v=!0);else if((kl&h)===h){m=m.next,h===Ia&&(v=!0);continue}else g={lane:0,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=g,i=n):f=f.next=g,j.lanes|=h,la|=h;g=m.action,Da&&a(n,g),n=m.hasEagerState?m.eagerState:a(n,g)}else h={lane:g,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},f===null?(c=f=h,i=n):f=f.next=h,j.lanes|=g,la|=g;m=m.next}while(m!==null&&m!==l);if(f===null?i=n:f.next=c,!Wt(n,t.memoizedState)&&(gt=!0,v&&(a=$a,a!==null)))throw a;t.memoizedState=n,t.baseState=i,t.baseQueue=f,e.lastRenderedState=n}return u===null&&(e.lanes=0),[t.memoizedState,e.dispatch]}function Gi(t){var l=Et(),a=l.queue;if(a===null)throw Error(E(311));a.lastRenderedReducer=t;var e=a.dispatch,u=a.pending,n=l.memoizedState;if(u!==null){a.pending=null;var i=u=u.next;do n=t(n,i.action),i=i.next;while(i!==u);Wt(n,l.memoizedState)||(gt=!0),l.memoizedState=n,l.baseQueue===null&&(l.baseState=n),a.lastRenderedState=n}return[n,e]}function bs(t,l,a){var e=j,u=Et(),n=k;if(n){if(a===void 0)throw Error(E(407));a=a()}else a=l();var i=!Wt(($||u).memoizedState,a);i&&(u.memoizedState=a,gt=!0),u=u.queue;var c=ps.bind(null,e,u,t);if(Ze(2048,8,c,[t]),u.getSnapshot!==l||i||yt!==null&&yt.memoizedState.tag&1){if(e.flags|=2048,ae(9,Wu(),As.bind(null,e,u,a,l),null),ut===null)throw Error(E(349));n||(kl&124)!==0||Rs(e,l,a)}return a}function Rs(t,l,a){t.flags|=16384,t={getSnapshot:l,value:a},l=j.updateQueue,l===null?(l=xi(),j.updateQueue=l,l.stores=[t]):(a=l.stores,a===null?l.stores=[t]:a.push(t))}function As(t,l,a,e){l.value=a,l.getSnapshot=e,Os(l)&&Ns(t)}function ps(t,l,a){return a(function(){Os(l)&&Ns(t)})}function Os(t){var l=t.getSnapshot;t=t.value;try{var a=l();return!Wt(t,a)}catch{return!0}}function Ns(t){var l=Ja(t,2);l!==null&&ll(l,t,2)}function Qi(t){var l=Gt();if(typeof t=="function"){var a=t;if(t=a(),Da){Ql(!0);try{a()}finally{Ql(!1)}}}return l.memoizedState=l.baseState=t,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:t},l}function Ds(t,l,a,e){return t.baseState=a,ji(t,$,typeof e=="function"?e:Cl)}function bm(t,l,a,e,u){if(Iu(t))throw Error(E(485));if(t=l.action,t!==null){var n={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){n.listeners.push(i)}};S.T!==null?a(!0):n.isTransition=!1,e(n),a=l.pending,a===null?(n.next=l.pending=n,_s(l,n)):(n.next=a.next,l.pending=a.next=n)}}function _s(t,l){var a=l.action,e=l.payload,u=t.state;if(l.isTransition){var n=S.T,i={};S.T=i;try{var c=a(u,e),f=S.S;f!==null&&f(i,c),Ms(t,l,c)}catch(m){Xi(t,l,m)}finally{S.T=n}}else try{n=a(u,e),Ms(t,l,n)}catch(m){Xi(t,l,m)}}function Ms(t,l,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(e){Us(t,l,e)},function(e){return Xi(t,l,e)}):Us(t,l,a)}function Us(t,l,a){l.status="fulfilled",l.value=a,zs(l),t.state=a,l=t.pending,l!==null&&(a=l.next,a===l?t.pending=null:(a=a.next,l.next=a,_s(t,a)))}function Xi(t,l,a){var e=t.pending;if(t.pending=null,e!==null){e=e.next;do l.status="rejected",l.reason=a,zs(l),l=l.next;while(l!==e)}t.action=null}function zs(t){t=t.listeners;for(var l=0;l<t.length;l++)(0,t[l])()}function Cs(t,l){return l}function Hs(t,l){if(k){var a=ut.formState;if(a!==null){t:{var e=j;if(k){if(ot){l:{for(var u=ot,n=Sl;u.nodeType!==8;){if(!n){u=null;break l}if(u=yl(u.nextSibling),u===null){u=null;break l}}n=u.data,u=n==="F!"||n==="F"?u:null}if(u){ot=yl(u.nextSibling),e=u.data==="F!";break t}}Aa(e)}e=!1}e&&(l=a[0])}}return a=Gt(),a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cs,lastRenderedState:l},a.queue=e,a=$s.bind(null,j,e),e.dispatch=a,e=Qi(!1),n=Ji.bind(null,j,!1,e.queue),e=Gt(),u={state:l,dispatch:null,action:t,pending:null},e.queue=u,a=bm.bind(null,j,u,n,a),u.dispatch=a,e.memoizedState=t,[l,a,!1]}function Ls(t){var l=Et();return Bs(l,$,t)}function Bs(t,l,a){if(l=ji(t,l,Cs)[0],t=ku(Cl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var e=Ve(l)}catch(i){throw i===Ye?Xu:i}else e=l;l=Et();var u=l.queue,n=u.dispatch;return a!==l.memoizedState&&(j.flags|=2048,ae(9,Wu(),Rm.bind(null,u,a),null)),[e,n,t]}function Rm(t,l){t.action=l}function qs(t){var l=Et(),a=$;if(a!==null)return Bs(l,a,t);Et(),l=l.memoizedState,a=Et();var e=a.queue.dispatch;return a.memoizedState=t,[l,e,!1]}function ae(t,l,a,e){return t={tag:t,create:a,deps:e,inst:l,next:null},l=j.updateQueue,l===null&&(l=xi(),j.updateQueue=l),a=l.lastEffect,a===null?l.lastEffect=t.next=t:(e=a.next,a.next=t,t.next=e,l.lastEffect=t),t}function Wu(){return{destroy:void 0,resource:void 0}}function xs(){return Et().memoizedState}function Fu(t,l,a,e){var u=Gt();e=e===void 0?null:e,j.flags|=t,u.memoizedState=ae(1|l,Wu(),a,e)}function Ze(t,l,a,e){var u=Et();e=e===void 0?null:e;var n=u.memoizedState.inst;$!==null&&e!==null&&Ci(e,$.memoizedState.deps)?u.memoizedState=ae(l,n,a,e):(j.flags|=t,u.memoizedState=ae(1|l,n,a,e))}function Ys(t,l){Fu(8390656,8,t,l)}function js(t,l){Ze(2048,8,t,l)}function Gs(t,l){return Ze(4,2,t,l)}function Qs(t,l){return Ze(4,4,t,l)}function Xs(t,l){if(typeof l=="function"){t=t();var a=l(t);return function(){typeof a=="function"?a():l(null)}}if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function ws(t,l,a){a=a!=null?a.concat([t]):null,Ze(4,4,Xs.bind(null,l,t),a)}function wi(){}function Vs(t,l){var a=Et();l=l===void 0?null:l;var e=a.memoizedState;return l!==null&&Ci(l,e[1])?e[0]:(a.memoizedState=[t,l],t)}function Zs(t,l){var a=Et();l=l===void 0?null:l;var e=a.memoizedState;if(l!==null&&Ci(l,e[1]))return e[0];if(e=t(),Da){Ql(!0);try{t()}finally{Ql(!1)}}return a.memoizedState=[e,l],e}function Vi(t,l,a){return a===void 0||(kl&1073741824)!==0?t.memoizedState=l:(t.memoizedState=a,t=Wo(),j.lanes|=t,la|=t,a)}function Ks(t,l,a,e){return Wt(a,l)?a:Pa.current!==null?(t=Vi(t,a,e),Wt(t,l)||(gt=!0),t):(kl&42)===0?(gt=!0,t.memoizedState=a):(t=Wo(),j.lanes|=t,la|=t,l)}function Js(t,l,a,e,u){var n=p.p;p.p=n!==0&&8>n?n:8;var i=S.T,c={};S.T=c,Ji(t,!1,l,a);try{var f=u(),m=S.S;if(m!==null&&m(c,f),f!==null&&typeof f=="object"&&typeof f.then=="function"){var v=Sm(f,e);Ke(t,l,v,tl(t))}else Ke(t,l,e,tl(t))}catch(g){Ke(t,l,{then:function(){},status:"rejected",reason:g},tl())}finally{p.p=n,S.T=i}}function Am(){}function Zi(t,l,a,e){if(t.tag!==5)throw Error(E(476));var u=ks(t).queue;Js(t,u,l,B,a===null?Am:function(){return Ws(t),a(e)})}function ks(t){var l=t.memoizedState;if(l!==null)return l;l={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:B},next:null};var a={};return l.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cl,lastRenderedState:a},next:null},t.memoizedState=l,t=t.alternate,t!==null&&(t.memoizedState=l),l}function Ws(t){var l=ks(t).next.queue;Ke(t,l,{},tl())}function Ki(){return Ut(ou)}function Fs(){return Et().memoizedState}function Is(){return Et().memoizedState}function pm(t){for(var l=t.return;l!==null;){switch(l.tag){case 24:case 3:var a=tl();t=Kl(a);var e=Jl(l,t,a);e!==null&&(ll(e,l,a),Ge(e,l,a)),l={cache:Ri()},t.payload=l;return}l=l.return}}function Om(t,l,a){var e=tl();a={lane:e,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Iu(t)?Ps(l,a):(a=ri(t,l,a,e),a!==null&&(ll(a,t,e),to(a,l,e)))}function $s(t,l,a){var e=tl();Ke(t,l,a,e)}function Ke(t,l,a,e){var u={lane:e,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Iu(t))Ps(l,u);else{var n=t.alternate;if(t.lanes===0&&(n===null||n.lanes===0)&&(n=l.lastRenderedReducer,n!==null))try{var i=l.lastRenderedState,c=n(i,a);if(u.hasEagerState=!0,u.eagerState=c,Wt(c,i))return Lu(t,l,u,0),ut===null&&Hu(),!1}catch{}finally{}if(a=ri(t,l,u,e),a!==null)return ll(a,t,e),to(a,l,e),!0}return!1}function Ji(t,l,a,e){if(e={lane:2,revertLane:Oc(),action:e,hasEagerState:!1,eagerState:null,next:null},Iu(t)){if(l)throw Error(E(479))}else l=ri(t,a,e,2),l!==null&&ll(l,t,2)}function Iu(t){var l=t.alternate;return t===j||l!==null&&l===j}function Ps(t,l){te=Zu=!0;var a=t.pending;a===null?l.next=l:(l.next=a.next,a.next=l),t.pending=l}function to(t,l,a){if((a&4194048)!==0){var e=l.lanes;e&=t.pendingLanes,a|=e,l.lanes=a,ff(t,a)}}var $u={readContext:Ut,use:Ju,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt,useHostTransitionStatus:mt,useFormState:mt,useActionState:mt,useOptimistic:mt,useMemoCache:mt,useCacheRefresh:mt},lo={readContext:Ut,use:Ju,useCallback:function(t,l){return Gt().memoizedState=[t,l===void 0?null:l],t},useContext:Ut,useEffect:Ys,useImperativeHandle:function(t,l,a){a=a!=null?a.concat([t]):null,Fu(4194308,4,Xs.bind(null,l,t),a)},useLayoutEffect:function(t,l){return Fu(4194308,4,t,l)},useInsertionEffect:function(t,l){Fu(4,2,t,l)},useMemo:function(t,l){var a=Gt();l=l===void 0?null:l;var e=t();if(Da){Ql(!0);try{t()}finally{Ql(!1)}}return a.memoizedState=[e,l],e},useReducer:function(t,l,a){var e=Gt();if(a!==void 0){var u=a(l);if(Da){Ql(!0);try{a(l)}finally{Ql(!1)}}}else u=l;return e.memoizedState=e.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},e.queue=t,t=t.dispatch=Om.bind(null,j,t),[e.memoizedState,t]},useRef:function(t){var l=Gt();return t={current:t},l.memoizedState=t},useState:function(t){t=Qi(t);var l=t.queue,a=$s.bind(null,j,l);return l.dispatch=a,[t.memoizedState,a]},useDebugValue:wi,useDeferredValue:function(t,l){var a=Gt();return Vi(a,t,l)},useTransition:function(){var t=Qi(!1);return t=Js.bind(null,j,t.queue,!0,!1),Gt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,l,a){var e=j,u=Gt();if(k){if(a===void 0)throw Error(E(407));a=a()}else{if(a=l(),ut===null)throw Error(E(349));(w&124)!==0||Rs(e,l,a)}u.memoizedState=a;var n={value:a,getSnapshot:l};return u.queue=n,Ys(ps.bind(null,e,n,t),[t]),e.flags|=2048,ae(9,Wu(),As.bind(null,e,n,a,l),null),a},useId:function(){var t=Gt(),l=ut.identifierPrefix;if(k){var a=Ml,e=_l;a=(e&~(1<<32-kt(e)-1)).toString(32)+a,l="«"+l+"R"+a,a=Ku++,0<a&&(l+="H"+a.toString(32)),l+="»"}else a=Tm++,l="«"+l+"r"+a.toString(32)+"»";return t.memoizedState=l},useHostTransitionStatus:Ki,useFormState:Hs,useActionState:Hs,useOptimistic:function(t){var l=Gt();l.memoizedState=l.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=a,l=Ji.bind(null,j,!0,a),a.dispatch=l,[t,l]},useMemoCache:Yi,useCacheRefresh:function(){return Gt().memoizedState=pm.bind(null,j)}},ao={readContext:Ut,use:Ju,useCallback:Vs,useContext:Ut,useEffect:js,useImperativeHandle:ws,useInsertionEffect:Gs,useLayoutEffect:Qs,useMemo:Zs,useReducer:ku,useRef:xs,useState:function(){return ku(Cl)},useDebugValue:wi,useDeferredValue:function(t,l){var a=Et();return Ks(a,$.memoizedState,t,l)},useTransition:function(){var t=ku(Cl)[0],l=Et().memoizedState;return[typeof t=="boolean"?t:Ve(t),l]},useSyncExternalStore:bs,useId:Fs,useHostTransitionStatus:Ki,useFormState:Ls,useActionState:Ls,useOptimistic:function(t,l){var a=Et();return Ds(a,$,t,l)},useMemoCache:Yi,useCacheRefresh:Is},Nm={readContext:Ut,use:Ju,useCallback:Vs,useContext:Ut,useEffect:js,useImperativeHandle:ws,useInsertionEffect:Gs,useLayoutEffect:Qs,useMemo:Zs,useReducer:Gi,useRef:xs,useState:function(){return Gi(Cl)},useDebugValue:wi,useDeferredValue:function(t,l){var a=Et();return $===null?Vi(a,t,l):Ks(a,$.memoizedState,t,l)},useTransition:function(){var t=Gi(Cl)[0],l=Et().memoizedState;return[typeof t=="boolean"?t:Ve(t),l]},useSyncExternalStore:bs,useId:Fs,useHostTransitionStatus:Ki,useFormState:qs,useActionState:qs,useOptimistic:function(t,l){var a=Et();return $!==null?Ds(a,$,t,l):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Yi,useCacheRefresh:Is},ee=null,Je=0;function Pu(t){var l=Je;return Je+=1,ee===null&&(ee=[]),ms(ee,t,l)}function ke(t,l){l=l.props.ref,t.ref=l!==void 0?l:null}function tn(t,l){throw l.$$typeof===nt?Error(E(525)):(t=Object.prototype.toString.call(l),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t)))}function eo(t){var l=t._init;return l(t._payload)}function uo(t){function l(d,o){if(t){var r=d.deletions;r===null?(d.deletions=[o],d.flags|=16):r.push(o)}}function a(d,o){if(!t)return null;for(;o!==null;)l(d,o),o=o.sibling;return null}function e(d){for(var o=new Map;d!==null;)d.key!==null?o.set(d.key,d):o.set(d.index,d),d=d.sibling;return o}function u(d,o){return d=Dl(d,o),d.index=0,d.sibling=null,d}function n(d,o,r){return d.index=r,t?(r=d.alternate,r!==null?(r=r.index,r<o?(d.flags|=67108866,o):r):(d.flags|=67108866,o)):(d.flags|=1048576,o)}function i(d){return t&&d.alternate===null&&(d.flags|=67108866),d}function c(d,o,r,T){return o===null||o.tag!==6?(o=hi(r,d.mode,T),o.return=d,o):(o=u(o,r),o.return=d,o)}function f(d,o,r,T){var N=r.type;return N===Lt?v(d,o,r.props.children,T,r.key):o!==null&&(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&eo(N)===o.type)?(o=u(o,r.props),ke(o,r),o.return=d,o):(o=qu(r.type,r.key,r.props,null,d.mode,T),ke(o,r),o.return=d,o)}function m(d,o,r,T){return o===null||o.tag!==4||o.stateNode.containerInfo!==r.containerInfo||o.stateNode.implementation!==r.implementation?(o=yi(r,d.mode,T),o.return=d,o):(o=u(o,r.children||[]),o.return=d,o)}function v(d,o,r,T,N){return o===null||o.tag!==7?(o=Ta(r,d.mode,T,N),o.return=d,o):(o=u(o,r),o.return=d,o)}function g(d,o,r){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=hi(""+o,d.mode,r),o.return=d,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case et:return r=qu(o.type,o.key,o.props,null,d.mode,r),ke(r,o),r.return=d,r;case Ht:return o=yi(o,d.mode,r),o.return=d,o;case Zt:var T=o._init;return o=T(o._payload),g(d,o,r)}if(_t(o)||Dt(o))return o=Ta(o,d.mode,r,null),o.return=d,o;if(typeof o.then=="function")return g(d,Pu(o),r);if(o.$$typeof===Nt)return g(d,Gu(d,o),r);tn(d,o)}return null}function h(d,o,r,T){var N=o!==null?o.key:null;if(typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint")return N!==null?null:c(d,o,""+r,T);if(typeof r=="object"&&r!==null){switch(r.$$typeof){case et:return r.key===N?f(d,o,r,T):null;case Ht:return r.key===N?m(d,o,r,T):null;case Zt:return N=r._init,r=N(r._payload),h(d,o,r,T)}if(_t(r)||Dt(r))return N!==null?null:v(d,o,r,T,null);if(typeof r.then=="function")return h(d,o,Pu(r),T);if(r.$$typeof===Nt)return h(d,o,Gu(d,r),T);tn(d,r)}return null}function y(d,o,r,T,N){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return d=d.get(r)||null,c(o,d,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case et:return d=d.get(T.key===null?r:T.key)||null,f(o,d,T,N);case Ht:return d=d.get(T.key===null?r:T.key)||null,m(o,d,T,N);case Zt:var G=T._init;return T=G(T._payload),y(d,o,r,T,N)}if(_t(T)||Dt(T))return d=d.get(r)||null,v(o,d,T,N,null);if(typeof T.then=="function")return y(d,o,r,Pu(T),N);if(T.$$typeof===Nt)return y(d,o,r,Gu(o,T),N);tn(o,T)}return null}function q(d,o,r,T){for(var N=null,G=null,_=o,H=o=0,Rt=null;_!==null&&H<r.length;H++){_.index>H?(Rt=_,_=null):Rt=_.sibling;var K=h(d,_,r[H],T);if(K===null){_===null&&(_=Rt);break}t&&_&&K.alternate===null&&l(d,_),o=n(K,o,H),G===null?N=K:G.sibling=K,G=K,_=Rt}if(H===r.length)return a(d,_),k&&ba(d,H),N;if(_===null){for(;H<r.length;H++)_=g(d,r[H],T),_!==null&&(o=n(_,o,H),G===null?N=_:G.sibling=_,G=_);return k&&ba(d,H),N}for(_=e(_);H<r.length;H++)Rt=y(_,d,H,r[H],T),Rt!==null&&(t&&Rt.alternate!==null&&_.delete(Rt.key===null?H:Rt.key),o=n(Rt,o,H),G===null?N=Rt:G.sibling=Rt,G=Rt);return t&&_.forEach(function(oa){return l(d,oa)}),k&&ba(d,H),N}function C(d,o,r,T){if(r==null)throw Error(E(151));for(var N=null,G=null,_=o,H=o=0,Rt=null,K=r.next();_!==null&&!K.done;H++,K=r.next()){_.index>H?(Rt=_,_=null):Rt=_.sibling;var oa=h(d,_,K.value,T);if(oa===null){_===null&&(_=Rt);break}t&&_&&oa.alternate===null&&l(d,_),o=n(oa,o,H),G===null?N=oa:G.sibling=oa,G=oa,_=Rt}if(K.done)return a(d,_),k&&ba(d,H),N;if(_===null){for(;!K.done;H++,K=r.next())K=g(d,K.value,T),K!==null&&(o=n(K,o,H),G===null?N=K:G.sibling=K,G=K);return k&&ba(d,H),N}for(_=e(_);!K.done;H++,K=r.next())K=y(_,d,H,K.value,T),K!==null&&(t&&K.alternate!==null&&_.delete(K.key===null?H:K.key),o=n(K,o,H),G===null?N=K:G.sibling=K,G=K);return t&&_.forEach(function(D0){return l(d,D0)}),k&&ba(d,H),N}function tt(d,o,r,T){if(typeof r=="object"&&r!==null&&r.type===Lt&&r.key===null&&(r=r.props.children),typeof r=="object"&&r!==null){switch(r.$$typeof){case et:t:{for(var N=r.key;o!==null;){if(o.key===N){if(N=r.type,N===Lt){if(o.tag===7){a(d,o.sibling),T=u(o,r.props.children),T.return=d,d=T;break t}}else if(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Zt&&eo(N)===o.type){a(d,o.sibling),T=u(o,r.props),ke(T,r),T.return=d,d=T;break t}a(d,o);break}else l(d,o);o=o.sibling}r.type===Lt?(T=Ta(r.props.children,d.mode,T,r.key),T.return=d,d=T):(T=qu(r.type,r.key,r.props,null,d.mode,T),ke(T,r),T.return=d,d=T)}return i(d);case Ht:t:{for(N=r.key;o!==null;){if(o.key===N)if(o.tag===4&&o.stateNode.containerInfo===r.containerInfo&&o.stateNode.implementation===r.implementation){a(d,o.sibling),T=u(o,r.children||[]),T.return=d,d=T;break t}else{a(d,o);break}else l(d,o);o=o.sibling}T=yi(r,d.mode,T),T.return=d,d=T}return i(d);case Zt:return N=r._init,r=N(r._payload),tt(d,o,r,T)}if(_t(r))return q(d,o,r,T);if(Dt(r)){if(N=Dt(r),typeof N!="function")throw Error(E(150));return r=N.call(r),C(d,o,r,T)}if(typeof r.then=="function")return tt(d,o,Pu(r),T);if(r.$$typeof===Nt)return tt(d,o,Gu(d,r),T);tn(d,r)}return typeof r=="string"&&r!==""||typeof r=="number"||typeof r=="bigint"?(r=""+r,o!==null&&o.tag===6?(a(d,o.sibling),T=u(o,r),T.return=d,d=T):(a(d,o),T=hi(r,d.mode,T),T.return=d,d=T),i(d)):a(d,o)}return function(d,o,r,T){try{Je=0;var N=tt(d,o,r,T);return ee=null,N}catch(_){if(_===Ye||_===Xu)throw _;var G=Ft(29,_,null,d.mode);return G.lanes=T,G.return=d,G}finally{}}}var ue=uo(!0),no=uo(!1),fl=b(null),Tl=null;function Wl(t){var l=t.alternate;A(St,St.current&1),A(fl,t),Tl===null&&(l===null||Pa.current!==null||l.memoizedState!==null)&&(Tl=t)}function io(t){if(t.tag===22){if(A(St,St.current),A(fl,t),Tl===null){var l=t.alternate;l!==null&&l.memoizedState!==null&&(Tl=t)}}else Fl()}function Fl(){A(St,St.current),A(fl,fl.current)}function Hl(t){O(fl),Tl===t&&(Tl=null),O(St)}var St=b(0);function ln(t){for(var l=t;l!==null;){if(l.tag===13){var a=l.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||xc(a)))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}function ki(t,l,a,e){l=t.memoizedState,a=a(e,l),a=a==null?l:M({},l,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wi={enqueueSetState:function(t,l,a){t=t._reactInternals;var e=tl(),u=Kl(e);u.payload=l,a!=null&&(u.callback=a),l=Jl(t,u,e),l!==null&&(ll(l,t,e),Ge(l,t,e))},enqueueReplaceState:function(t,l,a){t=t._reactInternals;var e=tl(),u=Kl(e);u.tag=1,u.payload=l,a!=null&&(u.callback=a),l=Jl(t,u,e),l!==null&&(ll(l,t,e),Ge(l,t,e))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var a=tl(),e=Kl(a);e.tag=2,l!=null&&(e.callback=l),l=Jl(t,e,a),l!==null&&(ll(l,t,a),Ge(l,t,a))}};function co(t,l,a,e,u,n,i){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(e,n,i):l.prototype&&l.prototype.isPureReactComponent?!Ue(a,e)||!Ue(u,n):!0}function fo(t,l,a,e){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(a,e),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(a,e),l.state!==t&&Wi.enqueueReplaceState(l,l.state,null)}function _a(t,l){var a=l;if("ref"in l){a={};for(var e in l)e!=="ref"&&(a[e]=l[e])}if(t=t.defaultProps){a===l&&(a=M({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}var an=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function so(t){an(t)}function oo(t){console.error(t)}function ro(t){an(t)}function en(t,l){try{var a=t.onUncaughtError;a(l.value,{componentStack:l.stack})}catch(e){setTimeout(function(){throw e})}}function mo(t,l,a){try{var e=t.onCaughtError;e(a.value,{componentStack:a.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Fi(t,l,a){return a=Kl(a),a.tag=3,a.payload={element:null},a.callback=function(){en(t,l)},a}function ho(t){return t=Kl(t),t.tag=3,t}function yo(t,l,a,e){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var n=e.value;t.payload=function(){return u(n)},t.callback=function(){mo(l,a,e)}}var i=a.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(t.callback=function(){mo(l,a,e),typeof u!="function"&&(aa===null?aa=new Set([this]):aa.add(this));var c=e.stack;this.componentDidCatch(e.value,{componentStack:c!==null?c:""})})}function Dm(t,l,a,e,u){if(a.flags|=32768,e!==null&&typeof e=="object"&&typeof e.then=="function"){if(l=a.alternate,l!==null&&Be(l,a,u,!0),a=fl.current,a!==null){switch(a.tag){case 13:return Tl===null?gc():a.alternate===null&&dt===0&&(dt=3),a.flags&=-257,a.flags|=65536,a.lanes=u,e===Oi?a.flags|=16384:(l=a.updateQueue,l===null?a.updateQueue=new Set([e]):l.add(e),Rc(t,e,u)),!1;case 22:return a.flags|=65536,e===Oi?a.flags|=16384:(l=a.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([e])},a.updateQueue=l):(a=l.retryQueue,a===null?l.retryQueue=new Set([e]):a.add(e)),Rc(t,e,u)),!1}throw Error(E(435,a.tag))}return Rc(t,e,u),gc(),!1}if(k)return l=fl.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=u,e!==Si&&(t=Error(E(422),{cause:e}),Le(ul(t,a)))):(e!==Si&&(l=Error(E(423),{cause:e}),Le(ul(l,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,e=ul(e,a),u=Fi(t.stateNode,e,u),_i(t,u),dt!==4&&(dt=2)),!1;var n=Error(E(520),{cause:e});if(n=ul(n,a),lu===null?lu=[n]:lu.push(n),dt!==4&&(dt=2),l===null)return!0;e=ul(e,a),a=l;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Fi(a.stateNode,e,t),_i(a,t),!1;case 1:if(l=a.type,n=a.stateNode,(a.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||n!==null&&typeof n.componentDidCatch=="function"&&(aa===null||!aa.has(n))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ho(u),yo(u,t,a,e),_i(a,u),!1}a=a.return}while(a!==null);return!1}var Eo=Error(E(461)),gt=!1;function At(t,l,a,e){l.child=t===null?no(l,null,a,e):ue(l,t.child,a,e)}function vo(t,l,a,e,u){a=a.render;var n=l.ref;if("ref"in e){var i={};for(var c in e)c!=="ref"&&(i[c]=e[c])}else i=e;return Oa(l),e=Hi(t,l,a,i,n,u),c=Li(),t!==null&&!gt?(Bi(t,l,u),Ll(t,l,u)):(k&&c&&Ei(l),l.flags|=1,At(t,l,e,u),l.child)}function So(t,l,a,e,u){if(t===null){var n=a.type;return typeof n=="function"&&!mi(n)&&n.defaultProps===void 0&&a.compare===null?(l.tag=15,l.type=n,To(t,l,n,e,u)):(t=qu(a.type,null,e,l,l.mode,u),t.ref=l.ref,t.return=l,l.child=t)}if(n=t.child,!uc(t,u)){var i=n.memoizedProps;if(a=a.compare,a=a!==null?a:Ue,a(i,e)&&t.ref===l.ref)return Ll(t,l,u)}return l.flags|=1,t=Dl(n,e),t.ref=l.ref,t.return=l,l.child=t}function To(t,l,a,e,u){if(t!==null){var n=t.memoizedProps;if(Ue(n,e)&&t.ref===l.ref)if(gt=!1,l.pendingProps=e=n,uc(t,u))(t.flags&131072)!==0&&(gt=!0);else return l.lanes=t.lanes,Ll(t,l,u)}return Ii(t,l,a,e,u)}function go(t,l,a){var e=l.pendingProps,u=e.children,n=t!==null?t.memoizedState:null;if(e.mode==="hidden"){if((l.flags&128)!==0){if(e=n!==null?n.baseLanes|a:a,t!==null){for(u=l.child=t.child,n=0;u!==null;)n=n|u.lanes|u.childLanes,u=u.sibling;l.childLanes=n&~e}else l.childLanes=0,l.child=null;return bo(t,l,e,a)}if((a&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qu(l,n!==null?n.cachePool:null),n!==null?Ss(l,n):Ui(),io(l);else return l.lanes=l.childLanes=536870912,bo(t,l,n!==null?n.baseLanes|a:a,a)}else n!==null?(Qu(l,n.cachePool),Ss(l,n),Fl(),l.memoizedState=null):(t!==null&&Qu(l,null),Ui(),Fl());return At(t,l,u,a),l.child}function bo(t,l,a,e){var u=pi();return u=u===null?null:{parent:vt._currentValue,pool:u},l.memoizedState={baseLanes:a,cachePool:u},t!==null&&Qu(l,null),Ui(),io(l),t!==null&&Be(t,l,e,!0),null}function un(t,l){var a=l.ref;if(a===null)t!==null&&t.ref!==null&&(l.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(E(284));(t===null||t.ref!==a)&&(l.flags|=4194816)}}function Ii(t,l,a,e,u){return Oa(l),a=Hi(t,l,a,e,void 0,u),e=Li(),t!==null&&!gt?(Bi(t,l,u),Ll(t,l,u)):(k&&e&&Ei(l),l.flags|=1,At(t,l,a,u),l.child)}function Ro(t,l,a,e,u,n){return Oa(l),l.updateQueue=null,a=gs(l,e,a,u),Ts(t),e=Li(),t!==null&&!gt?(Bi(t,l,n),Ll(t,l,n)):(k&&e&&Ei(l),l.flags|=1,At(t,l,a,n),l.child)}function Ao(t,l,a,e,u){if(Oa(l),l.stateNode===null){var n=ka,i=a.contextType;typeof i=="object"&&i!==null&&(n=Ut(i)),n=new a(e,n),l.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Wi,l.stateNode=n,n._reactInternals=l,n=l.stateNode,n.props=e,n.state=l.memoizedState,n.refs={},Ni(l),i=a.contextType,n.context=typeof i=="object"&&i!==null?Ut(i):ka,n.state=l.memoizedState,i=a.getDerivedStateFromProps,typeof i=="function"&&(ki(l,a,i,e),n.state=l.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof n.getSnapshotBeforeUpdate=="function"||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(i=n.state,typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount(),i!==n.state&&Wi.enqueueReplaceState(n,n.state,null),Xe(l,e,n,u),Qe(),n.state=l.memoizedState),typeof n.componentDidMount=="function"&&(l.flags|=4194308),e=!0}else if(t===null){n=l.stateNode;var c=l.memoizedProps,f=_a(a,c);n.props=f;var m=n.context,v=a.contextType;i=ka,typeof v=="object"&&v!==null&&(i=Ut(v));var g=a.getDerivedStateFromProps;v=typeof g=="function"||typeof n.getSnapshotBeforeUpdate=="function",c=l.pendingProps!==c,v||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(c||m!==i)&&fo(l,n,e,i),Zl=!1;var h=l.memoizedState;n.state=h,Xe(l,e,n,u),Qe(),m=l.memoizedState,c||h!==m||Zl?(typeof g=="function"&&(ki(l,a,g,e),m=l.memoizedState),(f=Zl||co(l,a,f,e,h,m,i))?(v||typeof n.UNSAFE_componentWillMount!="function"&&typeof n.componentWillMount!="function"||(typeof n.componentWillMount=="function"&&n.componentWillMount(),typeof n.UNSAFE_componentWillMount=="function"&&n.UNSAFE_componentWillMount()),typeof n.componentDidMount=="function"&&(l.flags|=4194308)):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=e,l.memoizedState=m),n.props=e,n.state=m,n.context=i,e=f):(typeof n.componentDidMount=="function"&&(l.flags|=4194308),e=!1)}else{n=l.stateNode,Di(t,l),i=l.memoizedProps,v=_a(a,i),n.props=v,g=l.pendingProps,h=n.context,m=a.contextType,f=ka,typeof m=="object"&&m!==null&&(f=Ut(m)),c=a.getDerivedStateFromProps,(m=typeof c=="function"||typeof n.getSnapshotBeforeUpdate=="function")||typeof n.UNSAFE_componentWillReceiveProps!="function"&&typeof n.componentWillReceiveProps!="function"||(i!==g||h!==f)&&fo(l,n,e,f),Zl=!1,h=l.memoizedState,n.state=h,Xe(l,e,n,u),Qe();var y=l.memoizedState;i!==g||h!==y||Zl||t!==null&&t.dependencies!==null&&ju(t.dependencies)?(typeof c=="function"&&(ki(l,a,c,e),y=l.memoizedState),(v=Zl||co(l,a,v,e,h,y,f)||t!==null&&t.dependencies!==null&&ju(t.dependencies))?(m||typeof n.UNSAFE_componentWillUpdate!="function"&&typeof n.componentWillUpdate!="function"||(typeof n.componentWillUpdate=="function"&&n.componentWillUpdate(e,y,f),typeof n.UNSAFE_componentWillUpdate=="function"&&n.UNSAFE_componentWillUpdate(e,y,f)),typeof n.componentDidUpdate=="function"&&(l.flags|=4),typeof n.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=1024),l.memoizedProps=e,l.memoizedState=y),n.props=e,n.state=y,n.context=f,e=v):(typeof n.componentDidUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=4),typeof n.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&h===t.memoizedState||(l.flags|=1024),e=!1)}return n=e,un(t,l),e=(l.flags&128)!==0,n||e?(n=l.stateNode,a=e&&typeof a.getDerivedStateFromError!="function"?null:n.render(),l.flags|=1,t!==null&&e?(l.child=ue(l,t.child,null,u),l.child=ue(l,null,a,u)):At(t,l,a,u),l.memoizedState=n.state,t=l.child):t=Ll(t,l,u),t}function po(t,l,a,e){return He(),l.flags|=256,At(t,l,a,e),l.child}var $i={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pi(t){return{baseLanes:t,cachePool:os()}}function tc(t,l,a){return t=t!==null?t.childLanes&~a:0,l&&(t|=sl),t}function Oo(t,l,a){var e=l.pendingProps,u=!1,n=(l.flags&128)!==0,i;if((i=n)||(i=t!==null&&t.memoizedState===null?!1:(St.current&2)!==0),i&&(u=!0,l.flags&=-129),i=(l.flags&32)!==0,l.flags&=-33,t===null){if(k){if(u?Wl(l):Fl(),k){var c=ot,f;if(f=c){t:{for(f=c,c=Sl;f.nodeType!==8;){if(!c){c=null;break t}if(f=yl(f.nextSibling),f===null){c=null;break t}}c=f}c!==null?(l.memoizedState={dehydrated:c,treeContext:ga!==null?{id:_l,overflow:Ml}:null,retryLane:536870912,hydrationErrors:null},f=Ft(18,null,null,0),f.stateNode=c,f.return=l,l.child=f,Bt=l,ot=null,f=!0):f=!1}f||Aa(l)}if(c=l.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return xc(c)?l.lanes=32:l.lanes=536870912,null;Hl(l)}return c=e.children,e=e.fallback,u?(Fl(),u=l.mode,c=nn({mode:"hidden",children:c},u),e=Ta(e,u,a,null),c.return=l,e.return=l,c.sibling=e,l.child=c,u=l.child,u.memoizedState=Pi(a),u.childLanes=tc(t,i,a),l.memoizedState=$i,e):(Wl(l),lc(l,c))}if(f=t.memoizedState,f!==null&&(c=f.dehydrated,c!==null)){if(n)l.flags&256?(Wl(l),l.flags&=-257,l=ac(t,l,a)):l.memoizedState!==null?(Fl(),l.child=t.child,l.flags|=128,l=null):(Fl(),u=e.fallback,c=l.mode,e=nn({mode:"visible",children:e.children},c),u=Ta(u,c,a,null),u.flags|=2,e.return=l,u.return=l,e.sibling=u,l.child=e,ue(l,t.child,null,a),e=l.child,e.memoizedState=Pi(a),e.childLanes=tc(t,i,a),l.memoizedState=$i,l=u);else if(Wl(l),xc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,e=Error(E(419)),e.stack="",e.digest=i,Le({value:e,source:null,stack:null}),l=ac(t,l,a)}else if(gt||Be(t,l,a,!1),i=(a&t.childLanes)!==0,gt||i){if(i=ut,i!==null&&(e=a&-a,e=(e&42)!==0?1:Yn(e),e=(e&(i.suspendedLanes|a))!==0?0:e,e!==0&&e!==f.retryLane))throw f.retryLane=e,Ja(t,e),ll(i,t,e),Eo;c.data==="$?"||gc(),l=ac(t,l,a)}else c.data==="$?"?(l.flags|=192,l.child=t.child,l=null):(t=f.treeContext,ot=yl(c.nextSibling),Bt=l,k=!0,Ra=null,Sl=!1,t!==null&&(il[cl++]=_l,il[cl++]=Ml,il[cl++]=ga,_l=t.id,Ml=t.overflow,ga=l),l=lc(l,e.children),l.flags|=4096);return l}return u?(Fl(),u=e.fallback,c=l.mode,f=t.child,m=f.sibling,e=Dl(f,{mode:"hidden",children:e.children}),e.subtreeFlags=f.subtreeFlags&65011712,m!==null?u=Dl(m,u):(u=Ta(u,c,a,null),u.flags|=2),u.return=l,e.return=l,e.sibling=u,l.child=e,e=u,u=l.child,c=t.child.memoizedState,c===null?c=Pi(a):(f=c.cachePool,f!==null?(m=vt._currentValue,f=f.parent!==m?{parent:m,pool:m}:f):f=os(),c={baseLanes:c.baseLanes|a,cachePool:f}),u.memoizedState=c,u.childLanes=tc(t,i,a),l.memoizedState=$i,e):(Wl(l),a=t.child,t=a.sibling,a=Dl(a,{mode:"visible",children:e.children}),a.return=l,a.sibling=null,t!==null&&(i=l.deletions,i===null?(l.deletions=[t],l.flags|=16):i.push(t)),l.child=a,l.memoizedState=null,a)}function lc(t,l){return l=nn({mode:"visible",children:l},t.mode),l.return=t,t.child=l}function nn(t,l){return t=Ft(22,t,null,l),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function ac(t,l,a){return ue(l,t.child,null,a),t=lc(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function No(t,l,a){t.lanes|=l;var e=t.alternate;e!==null&&(e.lanes|=l),gi(t.return,l,a)}function ec(t,l,a,e,u){var n=t.memoizedState;n===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:e,tail:a,tailMode:u}:(n.isBackwards=l,n.rendering=null,n.renderingStartTime=0,n.last=e,n.tail=a,n.tailMode=u)}function Do(t,l,a){var e=l.pendingProps,u=e.revealOrder,n=e.tail;if(At(t,l,e.children,a),e=St.current,(e&2)!==0)e=e&1|2,l.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&No(t,a,l);else if(t.tag===19)No(t,a,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break t;for(;t.sibling===null;){if(t.return===null||t.return===l)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}e&=1}switch(A(St,e),u){case"forwards":for(a=l.child,u=null;a!==null;)t=a.alternate,t!==null&&ln(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=l.child,l.child=null):(u=a.sibling,a.sibling=null),ec(l,!1,u,a,n);break;case"backwards":for(a=null,u=l.child,l.child=null;u!==null;){if(t=u.alternate,t!==null&&ln(t)===null){l.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}ec(l,!0,a,null,n);break;case"together":ec(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function Ll(t,l,a){if(t!==null&&(l.dependencies=t.dependencies),la|=l.lanes,(a&l.childLanes)===0)if(t!==null){if(Be(t,l,a,!1),(a&l.childLanes)===0)return null}else return null;if(t!==null&&l.child!==t.child)throw Error(E(153));if(l.child!==null){for(t=l.child,a=Dl(t,t.pendingProps),l.child=a,a.return=l;t.sibling!==null;)t=t.sibling,a=a.sibling=Dl(t,t.pendingProps),a.return=l;a.sibling=null}return l.child}function uc(t,l){return(t.lanes&l)!==0?!0:(t=t.dependencies,!!(t!==null&&ju(t)))}function _m(t,l,a){switch(l.tag){case 3:it(l,l.stateNode.containerInfo),Vl(l,vt,t.memoizedState.cache),He();break;case 27:case 5:Hn(l);break;case 4:it(l,l.stateNode.containerInfo);break;case 10:Vl(l,l.type,l.memoizedProps.value);break;case 13:var e=l.memoizedState;if(e!==null)return e.dehydrated!==null?(Wl(l),l.flags|=128,null):(a&l.child.childLanes)!==0?Oo(t,l,a):(Wl(l),t=Ll(t,l,a),t!==null?t.sibling:null);Wl(l);break;case 19:var u=(t.flags&128)!==0;if(e=(a&l.childLanes)!==0,e||(Be(t,l,a,!1),e=(a&l.childLanes)!==0),u){if(e)return Do(t,l,a);l.flags|=128}if(u=l.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),A(St,St.current),e)break;return null;case 22:case 23:return l.lanes=0,go(t,l,a);case 24:Vl(l,vt,t.memoizedState.cache)}return Ll(t,l,a)}function _o(t,l,a){if(t!==null)if(t.memoizedProps!==l.pendingProps)gt=!0;else{if(!uc(t,a)&&(l.flags&128)===0)return gt=!1,_m(t,l,a);gt=(t.flags&131072)!==0}else gt=!1,k&&(l.flags&1048576)!==0&&es(l,Yu,l.index);switch(l.lanes=0,l.tag){case 16:t:{t=l.pendingProps;var e=l.elementType,u=e._init;if(e=u(e._payload),l.type=e,typeof e=="function")mi(e)?(t=_a(e,t),l.tag=1,l=Ao(null,l,e,t,a)):(l.tag=0,l=Ii(null,l,e,t,a));else{if(e!=null){if(u=e.$$typeof,u===rl){l.tag=11,l=vo(null,l,e,t,a);break t}else if(u===Vt){l.tag=14,l=So(null,l,e,t,a);break t}}throw l=ma(e)||e,Error(E(306,l,""))}}return l;case 0:return Ii(t,l,l.type,l.pendingProps,a);case 1:return e=l.type,u=_a(e,l.pendingProps),Ao(t,l,e,u,a);case 3:t:{if(it(l,l.stateNode.containerInfo),t===null)throw Error(E(387));e=l.pendingProps;var n=l.memoizedState;u=n.element,Di(t,l),Xe(l,e,null,a);var i=l.memoizedState;if(e=i.cache,Vl(l,vt,e),e!==n.cache&&bi(l,[vt],a,!0),Qe(),e=i.element,n.isDehydrated)if(n={element:e,isDehydrated:!1,cache:i.cache},l.updateQueue.baseState=n,l.memoizedState=n,l.flags&256){l=po(t,l,e,a);break t}else if(e!==u){u=ul(Error(E(424)),l),Le(u),l=po(t,l,e,a);break t}else{switch(t=l.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(ot=yl(t.firstChild),Bt=l,k=!0,Ra=null,Sl=!0,a=no(l,null,e,a),l.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(He(),e===u){l=Ll(t,l,a);break t}At(t,l,e,a)}l=l.child}return l;case 26:return un(t,l),t===null?(a=Cd(l.type,null,l.pendingProps,null))?l.memoizedState=a:k||(a=l.type,t=l.pendingProps,e=gn(x.current).createElement(a),e[Mt]=l,e[Yt]=t,Ot(e,a,t),Tt(e),l.stateNode=e):l.memoizedState=Cd(l.type,t.memoizedProps,l.pendingProps,t.memoizedState),null;case 27:return Hn(l),t===null&&k&&(e=l.stateNode=Md(l.type,l.pendingProps,x.current),Bt=l,Sl=!0,u=ot,na(l.type)?(Yc=u,ot=yl(e.firstChild)):ot=u),At(t,l,l.pendingProps.children,a),un(t,l),t===null&&(l.flags|=4194304),l.child;case 5:return t===null&&k&&((u=e=ot)&&(e=a0(e,l.type,l.pendingProps,Sl),e!==null?(l.stateNode=e,Bt=l,ot=yl(e.firstChild),Sl=!1,u=!0):u=!1),u||Aa(l)),Hn(l),u=l.type,n=l.pendingProps,i=t!==null?t.memoizedProps:null,e=n.children,Lc(u,n)?e=null:i!==null&&Lc(u,i)&&(l.flags|=32),l.memoizedState!==null&&(u=Hi(t,l,gm,null,null,a),ou._currentValue=u),un(t,l),At(t,l,e,a),l.child;case 6:return t===null&&k&&((t=a=ot)&&(a=e0(a,l.pendingProps,Sl),a!==null?(l.stateNode=a,Bt=l,ot=null,t=!0):t=!1),t||Aa(l)),null;case 13:return Oo(t,l,a);case 4:return it(l,l.stateNode.containerInfo),e=l.pendingProps,t===null?l.child=ue(l,null,e,a):At(t,l,e,a),l.child;case 11:return vo(t,l,l.type,l.pendingProps,a);case 7:return At(t,l,l.pendingProps,a),l.child;case 8:return At(t,l,l.pendingProps.children,a),l.child;case 12:return At(t,l,l.pendingProps.children,a),l.child;case 10:return e=l.pendingProps,Vl(l,l.type,e.value),At(t,l,e.children,a),l.child;case 9:return u=l.type._context,e=l.pendingProps.children,Oa(l),u=Ut(u),e=e(u),l.flags|=1,At(t,l,e,a),l.child;case 14:return So(t,l,l.type,l.pendingProps,a);case 15:return To(t,l,l.type,l.pendingProps,a);case 19:return Do(t,l,a);case 31:return e=l.pendingProps,a=l.mode,e={mode:e.mode,children:e.children},t===null?(a=nn(e,a),a.ref=l.ref,l.child=a,a.return=l,l=a):(a=Dl(t.child,e),a.ref=l.ref,l.child=a,a.return=l,l=a),l;case 22:return go(t,l,a);case 24:return Oa(l),e=Ut(vt),t===null?(u=pi(),u===null&&(u=ut,n=Ri(),u.pooledCache=n,n.refCount++,n!==null&&(u.pooledCacheLanes|=a),u=n),l.memoizedState={parent:e,cache:u},Ni(l),Vl(l,vt,u)):((t.lanes&a)!==0&&(Di(t,l),Xe(l,null,null,a),Qe()),u=t.memoizedState,n=l.memoizedState,u.parent!==e?(u={parent:e,cache:e},l.memoizedState=u,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=u),Vl(l,vt,e)):(e=n.cache,Vl(l,vt,e),e!==u.cache&&bi(l,[vt],a,!0))),At(t,l,l.pendingProps.children,a),l.child;case 29:throw l.pendingProps}throw Error(E(156,l.tag))}function Bl(t){t.flags|=4}function Mo(t,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xd(l)){if(l=fl.current,l!==null&&((w&4194048)===w?Tl!==null:(w&62914560)!==w&&(w&536870912)===0||l!==Tl))throw je=Oi,ds;t.flags|=8192}}function cn(t,l){l!==null&&(t.flags|=4),t.flags&16384&&(l=t.tag!==22?nf():536870912,t.lanes|=l,fe|=l)}function We(t,l){if(!k)switch(t.tailMode){case"hidden":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var e=null;a!==null;)a.alternate!==null&&(e=a),a=a.sibling;e===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:e.sibling=null}}function st(t){var l=t.alternate!==null&&t.alternate.child===t.child,a=0,e=0;if(l)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,e|=u.subtreeFlags&65011712,e|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,e|=u.subtreeFlags,e|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=e,t.childLanes=a,l}function Mm(t,l,a){var e=l.pendingProps;switch(vi(l),l.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return st(l),null;case 1:return st(l),null;case 3:return a=l.stateNode,e=null,t!==null&&(e=t.memoizedState.cache),l.memoizedState.cache!==e&&(l.flags|=2048),zl(vt),Gl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Ce(l)?Bl(l):t===null||t.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,is())),st(l),null;case 26:return a=l.memoizedState,t===null?(Bl(l),a!==null?(st(l),Mo(l,a)):(st(l),l.flags&=-16777217)):a?a!==t.memoizedState?(Bl(l),st(l),Mo(l,a)):(st(l),l.flags&=-16777217):(t.memoizedProps!==e&&Bl(l),st(l),l.flags&=-16777217),null;case 27:vu(l),a=x.current;var u=l.type;if(t!==null&&l.stateNode!=null)t.memoizedProps!==e&&Bl(l);else{if(!e){if(l.stateNode===null)throw Error(E(166));return st(l),null}t=z.current,Ce(l)?us(l):(t=Md(u,e,a),l.stateNode=t,Bl(l))}return st(l),null;case 5:if(vu(l),a=l.type,t!==null&&l.stateNode!=null)t.memoizedProps!==e&&Bl(l);else{if(!e){if(l.stateNode===null)throw Error(E(166));return st(l),null}if(t=z.current,Ce(l))us(l);else{switch(u=gn(x.current),t){case 1:t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":t=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":t=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":t=u.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof e.is=="string"?u.createElement("select",{is:e.is}):u.createElement("select"),e.multiple?t.multiple=!0:e.size&&(t.size=e.size);break;default:t=typeof e.is=="string"?u.createElement(a,{is:e.is}):u.createElement(a)}}t[Mt]=l,t[Yt]=e;t:for(u=l.child;u!==null;){if(u.tag===5||u.tag===6)t.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===l)break t;for(;u.sibling===null;){if(u.return===null||u.return===l)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}l.stateNode=t;t:switch(Ot(t,a,e),a){case"button":case"input":case"select":case"textarea":t=!!e.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&Bl(l)}}return st(l),l.flags&=-16777217,null;case 6:if(t&&l.stateNode!=null)t.memoizedProps!==e&&Bl(l);else{if(typeof e!="string"&&l.stateNode===null)throw Error(E(166));if(t=x.current,Ce(l)){if(t=l.stateNode,a=l.memoizedProps,e=null,u=Bt,u!==null)switch(u.tag){case 27:case 5:e=u.memoizedProps}t[Mt]=l,t=!!(t.nodeValue===a||e!==null&&e.suppressHydrationWarning===!0||Rd(t.nodeValue,a)),t||Aa(l)}else t=gn(t).createTextNode(e),t[Mt]=l,l.stateNode=t}return st(l),null;case 13:if(e=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Ce(l),e!==null&&e.dehydrated!==null){if(t===null){if(!u)throw Error(E(318));if(u=l.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(E(317));u[Mt]=l}else He(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;st(l),u=!1}else u=is(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return l.flags&256?(Hl(l),l):(Hl(l),null)}if(Hl(l),(l.flags&128)!==0)return l.lanes=a,l;if(a=e!==null,t=t!==null&&t.memoizedState!==null,a){e=l.child,u=null,e.alternate!==null&&e.alternate.memoizedState!==null&&e.alternate.memoizedState.cachePool!==null&&(u=e.alternate.memoizedState.cachePool.pool);var n=null;e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),n!==u&&(e.flags|=2048)}return a!==t&&a&&(l.child.flags|=8192),cn(l,l.updateQueue),st(l),null;case 4:return Gl(),t===null&&Mc(l.stateNode.containerInfo),st(l),null;case 10:return zl(l.type),st(l),null;case 19:if(O(St),u=l.memoizedState,u===null)return st(l),null;if(e=(l.flags&128)!==0,n=u.rendering,n===null)if(e)We(u,!1);else{if(dt!==0||t!==null&&(t.flags&128)!==0)for(t=l.child;t!==null;){if(n=ln(t),n!==null){for(l.flags|=128,We(u,!1),t=n.updateQueue,l.updateQueue=t,cn(l,t),l.subtreeFlags=0,t=a,a=l.child;a!==null;)as(a,t),a=a.sibling;return A(St,St.current&1|2),l.child}t=t.sibling}u.tail!==null&&vl()>on&&(l.flags|=128,e=!0,We(u,!1),l.lanes=4194304)}else{if(!e)if(t=ln(n),t!==null){if(l.flags|=128,e=!0,t=t.updateQueue,l.updateQueue=t,cn(l,t),We(u,!0),u.tail===null&&u.tailMode==="hidden"&&!n.alternate&&!k)return st(l),null}else 2*vl()-u.renderingStartTime>on&&a!==536870912&&(l.flags|=128,e=!0,We(u,!1),l.lanes=4194304);u.isBackwards?(n.sibling=l.child,l.child=n):(t=u.last,t!==null?t.sibling=n:l.child=n,u.last=n)}return u.tail!==null?(l=u.tail,u.rendering=l,u.tail=l.sibling,u.renderingStartTime=vl(),l.sibling=null,t=St.current,A(St,e?t&1|2:t&1),l):(st(l),null);case 22:case 23:return Hl(l),zi(),e=l.memoizedState!==null,t!==null?t.memoizedState!==null!==e&&(l.flags|=8192):e&&(l.flags|=8192),e?(a&536870912)!==0&&(l.flags&128)===0&&(st(l),l.subtreeFlags&6&&(l.flags|=8192)):st(l),a=l.updateQueue,a!==null&&cn(l,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==a&&(l.flags|=2048),t!==null&&O(Na),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),zl(vt),st(l),null;case 25:return null;case 30:return null}throw Error(E(156,l.tag))}function Um(t,l){switch(vi(l),l.tag){case 1:return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return zl(vt),Gl(),t=l.flags,(t&65536)!==0&&(t&128)===0?(l.flags=t&-65537|128,l):null;case 26:case 27:case 5:return vu(l),null;case 13:if(Hl(l),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(E(340));He()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return O(St),null;case 4:return Gl(),null;case 10:return zl(l.type),null;case 22:case 23:return Hl(l),zi(),t!==null&&O(Na),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 24:return zl(vt),null;case 25:return null;default:return null}}function Uo(t,l){switch(vi(l),l.tag){case 3:zl(vt),Gl();break;case 26:case 27:case 5:vu(l);break;case 4:Gl();break;case 13:Hl(l);break;case 19:O(St);break;case 10:zl(l.type);break;case 22:case 23:Hl(l),zi(),t!==null&&O(Na);break;case 24:zl(vt)}}function Fe(t,l){try{var a=l.updateQueue,e=a!==null?a.lastEffect:null;if(e!==null){var u=e.next;a=u;do{if((a.tag&t)===t){e=void 0;var n=a.create,i=a.inst;e=n(),i.destroy=e}a=a.next}while(a!==u)}}catch(c){at(l,l.return,c)}}function Il(t,l,a){try{var e=l.updateQueue,u=e!==null?e.lastEffect:null;if(u!==null){var n=u.next;e=n;do{if((e.tag&t)===t){var i=e.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,u=l;var f=a,m=c;try{m()}catch(v){at(u,f,v)}}}e=e.next}while(e!==n)}}catch(v){at(l,l.return,v)}}function zo(t){var l=t.updateQueue;if(l!==null){var a=t.stateNode;try{vs(l,a)}catch(e){at(t,t.return,e)}}}function Co(t,l,a){a.props=_a(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(e){at(t,l,e)}}function Ie(t,l){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var e=t.stateNode;break;case 30:e=t.stateNode;break;default:e=t.stateNode}typeof a=="function"?t.refCleanup=a(e):a.current=e}}catch(u){at(t,l,u)}}function gl(t,l){var a=t.ref,e=t.refCleanup;if(a!==null)if(typeof e=="function")try{e()}catch(u){at(t,l,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){at(t,l,u)}else a.current=null}function Ho(t){var l=t.type,a=t.memoizedProps,e=t.stateNode;try{t:switch(l){case"button":case"input":case"select":case"textarea":a.autoFocus&&e.focus();break t;case"img":a.src?e.src=a.src:a.srcSet&&(e.srcset=a.srcSet)}}catch(u){at(t,t.return,u)}}function nc(t,l,a){try{var e=t.stateNode;Im(e,t.type,a,l),e[Yt]=l}catch(u){at(t,t.return,u)}}function Lo(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&na(t.type)||t.tag===4}function ic(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Lo(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&na(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function cc(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,l):(l=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.appendChild(t),a=a._reactRootContainer,a!=null||l.onclick!==null||(l.onclick=Tn));else if(e!==4&&(e===27&&na(t.type)&&(a=t.stateNode,l=null),t=t.child,t!==null))for(cc(t,l,a),t=t.sibling;t!==null;)cc(t,l,a),t=t.sibling}function fn(t,l,a){var e=t.tag;if(e===5||e===6)t=t.stateNode,l?a.insertBefore(t,l):a.appendChild(t);else if(e!==4&&(e===27&&na(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(fn(t,l,a),t=t.sibling;t!==null;)fn(t,l,a),t=t.sibling}function Bo(t){var l=t.stateNode,a=t.memoizedProps;try{for(var e=t.type,u=l.attributes;u.length;)l.removeAttributeNode(u[0]);Ot(l,e,a),l[Mt]=t,l[Yt]=a}catch(n){at(t,t.return,n)}}var ql=!1,ht=!1,fc=!1,qo=typeof WeakSet=="function"?WeakSet:Set,bt=null;function zm(t,l){if(t=t.containerInfo,Cc=Nn,t=Kf(t),ii(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var e=a.getSelection&&a.getSelection();if(e&&e.rangeCount!==0){a=e.anchorNode;var u=e.anchorOffset,n=e.focusNode;e=e.focusOffset;try{a.nodeType,n.nodeType}catch{a=null;break t}var i=0,c=-1,f=-1,m=0,v=0,g=t,h=null;l:for(;;){for(var y;g!==a||u!==0&&g.nodeType!==3||(c=i+u),g!==n||e!==0&&g.nodeType!==3||(f=i+e),g.nodeType===3&&(i+=g.nodeValue.length),(y=g.firstChild)!==null;)h=g,g=y;for(;;){if(g===t)break l;if(h===a&&++m===u&&(c=i),h===n&&++v===e&&(f=i),(y=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=y}a=c===-1||f===-1?null:{start:c,end:f}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:t,selectionRange:a},Nn=!1,bt=l;bt!==null;)if(l=bt,t=l.child,(l.subtreeFlags&1024)!==0&&t!==null)t.return=l,bt=t;else for(;bt!==null;){switch(l=bt,n=l.alternate,t=l.flags,l.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&n!==null){t=void 0,a=l,u=n.memoizedProps,n=n.memoizedState,e=a.stateNode;try{var q=_a(a.type,u,a.elementType===a.type);t=e.getSnapshotBeforeUpdate(q,n),e.__reactInternalSnapshotBeforeUpdate=t}catch(C){at(a,a.return,C)}}break;case 3:if((t&1024)!==0){if(t=l.stateNode.containerInfo,a=t.nodeType,a===9)qc(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":qc(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(E(163))}if(t=l.sibling,t!==null){t.return=l.return,bt=t;break}bt=l.return}}function xo(t,l,a){var e=a.flags;switch(a.tag){case 0:case 11:case 15:$l(t,a),e&4&&Fe(5,a);break;case 1:if($l(t,a),e&4)if(t=a.stateNode,l===null)try{t.componentDidMount()}catch(i){at(a,a.return,i)}else{var u=_a(a.type,l.memoizedProps);l=l.memoizedState;try{t.componentDidUpdate(u,l,t.__reactInternalSnapshotBeforeUpdate)}catch(i){at(a,a.return,i)}}e&64&&zo(a),e&512&&Ie(a,a.return);break;case 3:if($l(t,a),e&64&&(t=a.updateQueue,t!==null)){if(l=null,a.child!==null)switch(a.child.tag){case 27:case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}try{vs(t,l)}catch(i){at(a,a.return,i)}}break;case 27:l===null&&e&4&&Bo(a);case 26:case 5:$l(t,a),l===null&&e&4&&Ho(a),e&512&&Ie(a,a.return);break;case 12:$l(t,a);break;case 13:$l(t,a),e&4&&Go(t,a),e&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Gm.bind(null,a),u0(t,a))));break;case 22:if(e=a.memoizedState!==null||ql,!e){l=l!==null&&l.memoizedState!==null||ht,u=ql;var n=ht;ql=e,(ht=l)&&!n?Pl(t,a,(a.subtreeFlags&8772)!==0):$l(t,a),ql=u,ht=n}break;case 30:break;default:$l(t,a)}}function Yo(t){var l=t.alternate;l!==null&&(t.alternate=null,Yo(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&Qn(l)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ct=null,Qt=!1;function xl(t,l,a){for(a=a.child;a!==null;)jo(t,l,a),a=a.sibling}function jo(t,l,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:ht||gl(a,l),xl(t,l,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ht||gl(a,l);var e=ct,u=Qt;na(a.type)&&(ct=a.stateNode,Qt=!1),xl(t,l,a),iu(a.stateNode),ct=e,Qt=u;break;case 5:ht||gl(a,l);case 6:if(e=ct,u=Qt,ct=null,xl(t,l,a),ct=e,Qt=u,ct!==null)if(Qt)try{(ct.nodeType===9?ct.body:ct.nodeName==="HTML"?ct.ownerDocument.body:ct).removeChild(a.stateNode)}catch(n){at(a,l,n)}else try{ct.removeChild(a.stateNode)}catch(n){at(a,l,n)}break;case 18:ct!==null&&(Qt?(t=ct,Dd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),hu(t)):Dd(ct,a.stateNode));break;case 4:e=ct,u=Qt,ct=a.stateNode.containerInfo,Qt=!0,xl(t,l,a),ct=e,Qt=u;break;case 0:case 11:case 14:case 15:ht||Il(2,a,l),ht||Il(4,a,l),xl(t,l,a);break;case 1:ht||(gl(a,l),e=a.stateNode,typeof e.componentWillUnmount=="function"&&Co(a,l,e)),xl(t,l,a);break;case 21:xl(t,l,a);break;case 22:ht=(e=ht)||a.memoizedState!==null,xl(t,l,a),ht=e;break;default:xl(t,l,a)}}function Go(t,l){if(l.memoizedState===null&&(t=l.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{hu(t)}catch(a){at(l,l.return,a)}}function Cm(t){switch(t.tag){case 13:case 19:var l=t.stateNode;return l===null&&(l=t.stateNode=new qo),l;case 22:return t=t.stateNode,l=t._retryCache,l===null&&(l=t._retryCache=new qo),l;default:throw Error(E(435,t.tag))}}function sc(t,l){var a=Cm(t);l.forEach(function(e){var u=Qm.bind(null,t,e);a.has(e)||(a.add(e),e.then(u,u))})}function It(t,l){var a=l.deletions;if(a!==null)for(var e=0;e<a.length;e++){var u=a[e],n=t,i=l,c=i;t:for(;c!==null;){switch(c.tag){case 27:if(na(c.type)){ct=c.stateNode,Qt=!1;break t}break;case 5:ct=c.stateNode,Qt=!1;break t;case 3:case 4:ct=c.stateNode.containerInfo,Qt=!0;break t}c=c.return}if(ct===null)throw Error(E(160));jo(n,i,u),ct=null,Qt=!1,n=u.alternate,n!==null&&(n.return=null),u.return=null}if(l.subtreeFlags&13878)for(l=l.child;l!==null;)Qo(l,t),l=l.sibling}var hl=null;function Qo(t,l){var a=t.alternate,e=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:It(l,t),$t(t),e&4&&(Il(3,t,t.return),Fe(3,t),Il(5,t,t.return));break;case 1:It(l,t),$t(t),e&512&&(ht||a===null||gl(a,a.return)),e&64&&ql&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:var u=hl;if(It(l,t),$t(t),e&512&&(ht||a===null||gl(a,a.return)),e&4){var n=a!==null?a.memoizedState:null;if(e=t.memoizedState,a===null)if(e===null)if(t.stateNode===null){t:{e=t.type,a=t.memoizedProps,u=u.ownerDocument||u;l:switch(e){case"title":n=u.getElementsByTagName("title")[0],(!n||n[be]||n[Mt]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=u.createElement(e),u.head.insertBefore(n,u.querySelector("head > title"))),Ot(n,e,a),n[Mt]=t,Tt(n),e=n;break t;case"link":var i=Bd("link","href",u).get(e+(a.href||""));if(i){for(var c=0;c<i.length;c++)if(n=i[c],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){i.splice(c,1);break l}}n=u.createElement(e),Ot(n,e,a),u.head.appendChild(n);break;case"meta":if(i=Bd("meta","content",u).get(e+(a.content||""))){for(c=0;c<i.length;c++)if(n=i[c],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){i.splice(c,1);break l}}n=u.createElement(e),Ot(n,e,a),u.head.appendChild(n);break;default:throw Error(E(468,e))}n[Mt]=t,Tt(n),e=n}t.stateNode=e}else qd(u,t.type,t.stateNode);else t.stateNode=Ld(u,e,t.memoizedProps);else n!==e?(n===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):n.count--,e===null?qd(u,t.type,t.stateNode):Ld(u,e,t.memoizedProps)):e===null&&t.stateNode!==null&&nc(t,t.memoizedProps,a.memoizedProps)}break;case 27:It(l,t),$t(t),e&512&&(ht||a===null||gl(a,a.return)),a!==null&&e&4&&nc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(It(l,t),$t(t),e&512&&(ht||a===null||gl(a,a.return)),t.flags&32){u=t.stateNode;try{Ga(u,"")}catch(y){at(t,t.return,y)}}e&4&&t.stateNode!=null&&(u=t.memoizedProps,nc(t,u,a!==null?a.memoizedProps:u)),e&1024&&(fc=!0);break;case 6:if(It(l,t),$t(t),e&4){if(t.stateNode===null)throw Error(E(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e}catch(y){at(t,t.return,y)}}break;case 3:if(An=null,u=hl,hl=bn(l.containerInfo),It(l,t),hl=u,$t(t),e&4&&a!==null&&a.memoizedState.isDehydrated)try{hu(l.containerInfo)}catch(y){at(t,t.return,y)}fc&&(fc=!1,Xo(t));break;case 4:e=hl,hl=bn(t.stateNode.containerInfo),It(l,t),$t(t),hl=e;break;case 12:It(l,t),$t(t);break;case 13:It(l,t),$t(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yc=vl()),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,sc(t,e)));break;case 22:u=t.memoizedState!==null;var f=a!==null&&a.memoizedState!==null,m=ql,v=ht;if(ql=m||u,ht=v||f,It(l,t),ht=v,ql=m,$t(t),e&8192)t:for(l=t.stateNode,l._visibility=u?l._visibility&-2:l._visibility|1,u&&(a===null||f||ql||ht||Ma(t)),a=null,l=t;;){if(l.tag===5||l.tag===26){if(a===null){f=a=l;try{if(n=f.stateNode,u)i=n.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=f.stateNode;var g=f.memoizedProps.style,h=g!=null&&g.hasOwnProperty("display")?g.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(y){at(f,f.return,y)}}}else if(l.tag===6){if(a===null){f=l;try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){at(f,f.return,y)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===t)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break t;for(;l.sibling===null;){if(l.return===null||l.return===t)break t;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}e&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,sc(t,a))));break;case 19:It(l,t),$t(t),e&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,sc(t,e)));break;case 30:break;case 21:break;default:It(l,t),$t(t)}}function $t(t){var l=t.flags;if(l&2){try{for(var a,e=t.return;e!==null;){if(Lo(e)){a=e;break}e=e.return}if(a==null)throw Error(E(160));switch(a.tag){case 27:var u=a.stateNode,n=ic(t);fn(t,n,u);break;case 5:var i=a.stateNode;a.flags&32&&(Ga(i,""),a.flags&=-33);var c=ic(t);fn(t,c,i);break;case 3:case 4:var f=a.stateNode.containerInfo,m=ic(t);cc(t,m,f);break;default:throw Error(E(161))}}catch(v){at(t,t.return,v)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function Xo(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var l=t;Xo(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),t=t.sibling}}function $l(t,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)xo(t,l.alternate,l),l=l.sibling}function Ma(t){for(t=t.child;t!==null;){var l=t;switch(l.tag){case 0:case 11:case 14:case 15:Il(4,l,l.return),Ma(l);break;case 1:gl(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&Co(l,l.return,a),Ma(l);break;case 27:iu(l.stateNode);case 26:case 5:gl(l,l.return),Ma(l);break;case 22:l.memoizedState===null&&Ma(l);break;case 30:Ma(l);break;default:Ma(l)}t=t.sibling}}function Pl(t,l,a){for(a=a&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var e=l.alternate,u=t,n=l,i=n.flags;switch(n.tag){case 0:case 11:case 15:Pl(u,n,a),Fe(4,n);break;case 1:if(Pl(u,n,a),e=n,u=e.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(m){at(e,e.return,m)}if(e=n,u=e.updateQueue,u!==null){var c=e.stateNode;try{var f=u.shared.hiddenCallbacks;if(f!==null)for(u.shared.hiddenCallbacks=null,u=0;u<f.length;u++)Es(f[u],c)}catch(m){at(e,e.return,m)}}a&&i&64&&zo(n),Ie(n,n.return);break;case 27:Bo(n);case 26:case 5:Pl(u,n,a),a&&e===null&&i&4&&Ho(n),Ie(n,n.return);break;case 12:Pl(u,n,a);break;case 13:Pl(u,n,a),a&&i&4&&Go(u,n);break;case 22:n.memoizedState===null&&Pl(u,n,a),Ie(n,n.return);break;case 30:break;default:Pl(u,n,a)}l=l.sibling}}function oc(t,l){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(t=l.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qe(a))}function dc(t,l){t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&qe(t))}function bl(t,l,a,e){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)wo(t,l,a,e),l=l.sibling}function wo(t,l,a,e){var u=l.flags;switch(l.tag){case 0:case 11:case 15:bl(t,l,a,e),u&2048&&Fe(9,l);break;case 1:bl(t,l,a,e);break;case 3:bl(t,l,a,e),u&2048&&(t=null,l.alternate!==null&&(t=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==t&&(l.refCount++,t!=null&&qe(t)));break;case 12:if(u&2048){bl(t,l,a,e),t=l.stateNode;try{var n=l.memoizedProps,i=n.id,c=n.onPostCommit;typeof c=="function"&&c(i,l.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(f){at(l,l.return,f)}}else bl(t,l,a,e);break;case 13:bl(t,l,a,e);break;case 23:break;case 22:n=l.stateNode,i=l.alternate,l.memoizedState!==null?n._visibility&2?bl(t,l,a,e):$e(t,l):n._visibility&2?bl(t,l,a,e):(n._visibility|=2,ne(t,l,a,e,(l.subtreeFlags&10256)!==0)),u&2048&&oc(i,l);break;case 24:bl(t,l,a,e),u&2048&&dc(l.alternate,l);break;default:bl(t,l,a,e)}}function ne(t,l,a,e,u){for(u=u&&(l.subtreeFlags&10256)!==0,l=l.child;l!==null;){var n=t,i=l,c=a,f=e,m=i.flags;switch(i.tag){case 0:case 11:case 15:ne(n,i,c,f,u),Fe(8,i);break;case 23:break;case 22:var v=i.stateNode;i.memoizedState!==null?v._visibility&2?ne(n,i,c,f,u):$e(n,i):(v._visibility|=2,ne(n,i,c,f,u)),u&&m&2048&&oc(i.alternate,i);break;case 24:ne(n,i,c,f,u),u&&m&2048&&dc(i.alternate,i);break;default:ne(n,i,c,f,u)}l=l.sibling}}function $e(t,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var a=t,e=l,u=e.flags;switch(e.tag){case 22:$e(a,e),u&2048&&oc(e.alternate,e);break;case 24:$e(a,e),u&2048&&dc(e.alternate,e);break;default:$e(a,e)}l=l.sibling}}var Pe=8192;function ie(t){if(t.subtreeFlags&Pe)for(t=t.child;t!==null;)Vo(t),t=t.sibling}function Vo(t){switch(t.tag){case 26:ie(t),t.flags&Pe&&t.memoizedState!==null&&v0(hl,t.memoizedState,t.memoizedProps);break;case 5:ie(t);break;case 3:case 4:var l=hl;hl=bn(t.stateNode.containerInfo),ie(t),hl=l;break;case 22:t.memoizedState===null&&(l=t.alternate,l!==null&&l.memoizedState!==null?(l=Pe,Pe=16777216,ie(t),Pe=l):ie(t));break;default:ie(t)}}function Zo(t){var l=t.alternate;if(l!==null&&(t=l.child,t!==null)){l.child=null;do l=t.sibling,t.sibling=null,t=l;while(t!==null)}}function tu(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];bt=e,Jo(e,t)}Zo(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ko(t),t=t.sibling}function Ko(t){switch(t.tag){case 0:case 11:case 15:tu(t),t.flags&2048&&Il(9,t,t.return);break;case 3:tu(t);break;case 12:tu(t);break;case 22:var l=t.stateNode;t.memoizedState!==null&&l._visibility&2&&(t.return===null||t.return.tag!==13)?(l._visibility&=-3,sn(t)):tu(t);break;default:tu(t)}}function sn(t){var l=t.deletions;if((t.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var e=l[a];bt=e,Jo(e,t)}Zo(t)}for(t=t.child;t!==null;){switch(l=t,l.tag){case 0:case 11:case 15:Il(8,l,l.return),sn(l);break;case 22:a=l.stateNode,a._visibility&2&&(a._visibility&=-3,sn(l));break;default:sn(l)}t=t.sibling}}function Jo(t,l){for(;bt!==null;){var a=bt;switch(a.tag){case 0:case 11:case 15:Il(8,a,l);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var e=a.memoizedState.cachePool.pool;e!=null&&e.refCount++}break;case 24:qe(a.memoizedState.cache)}if(e=a.child,e!==null)e.return=a,bt=e;else t:for(a=t;bt!==null;){e=bt;var u=e.sibling,n=e.return;if(Yo(e),e===a){bt=null;break t}if(u!==null){u.return=n,bt=u;break t}bt=n}}}var Hm={getCacheForType:function(t){var l=Ut(vt),a=l.data.get(t);return a===void 0&&(a=t(),l.data.set(t,a)),a}},Lm=typeof WeakMap=="function"?WeakMap:Map,F=0,ut=null,Q=null,w=0,I=0,Pt=null,ta=!1,ce=!1,rc=!1,Yl=0,dt=0,la=0,Ua=0,mc=0,sl=0,fe=0,lu=null,Xt=null,hc=!1,yc=0,on=1/0,dn=null,aa=null,pt=0,ea=null,se=null,oe=0,Ec=0,vc=null,ko=null,au=0,Sc=null;function tl(){if((F&2)!==0&&w!==0)return w&-w;if(S.T!==null){var t=Ia;return t!==0?t:Oc()}return sf()}function Wo(){sl===0&&(sl=(w&536870912)===0||k?uf():536870912);var t=fl.current;return t!==null&&(t.flags|=32),sl}function ll(t,l,a){(t===ut&&(I===2||I===9)||t.cancelPendingCommit!==null)&&(de(t,0),ua(t,w,sl,!1)),ge(t,a),((F&2)===0||t!==ut)&&(t===ut&&((F&2)===0&&(Ua|=a),dt===4&&ua(t,w,sl,!1)),Rl(t))}function Fo(t,l,a){if((F&6)!==0)throw Error(E(327));var e=!a&&(l&124)===0&&(l&t.expiredLanes)===0||Te(t,l),u=e?xm(t,l):bc(t,l,!0),n=e;do{if(u===0){ce&&!e&&ua(t,l,0,!1);break}else{if(a=t.current.alternate,n&&!Bm(a)){u=bc(t,l,!1),n=!1;continue}if(u===2){if(n=l,t.errorRecoveryDisabledLanes&n)var i=0;else i=t.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){l=i;t:{var c=t;u=lu;var f=c.current.memoizedState.isDehydrated;if(f&&(de(c,i).flags|=256),i=bc(c,i,!1),i!==2){if(rc&&!f){c.errorRecoveryDisabledLanes|=n,Ua|=n,u=4;break t}n=Xt,Xt=u,n!==null&&(Xt===null?Xt=n:Xt.push.apply(Xt,n))}u=i}if(n=!1,u!==2)continue}}if(u===1){de(t,0),ua(t,l,0,!0);break}t:{switch(e=t,n=u,n){case 0:case 1:throw Error(E(345));case 4:if((l&4194048)!==l)break;case 6:ua(e,l,sl,!ta);break t;case 2:Xt=null;break;case 3:case 5:break;default:throw Error(E(329))}if((l&62914560)===l&&(u=yc+300-vl(),10<u)){if(ua(e,l,sl,!ta),bu(e,0,!0)!==0)break t;e.timeoutHandle=Od(Io.bind(null,e,a,Xt,dn,hc,l,sl,Ua,fe,ta,n,2,-0,0),u);break t}Io(e,a,Xt,dn,hc,l,sl,Ua,fe,ta,n,0,-0,0)}}break}while(!0);Rl(t)}function Io(t,l,a,e,u,n,i,c,f,m,v,g,h,y){if(t.timeoutHandle=-1,g=l.subtreeFlags,(g&8192||(g&16785408)===16785408)&&(su={stylesheets:null,count:0,unsuspend:E0},Vo(l),g=S0(),g!==null)){t.cancelPendingCommit=g(ud.bind(null,t,l,n,a,e,u,i,c,f,v,1,h,y)),ua(t,n,i,!m);return}ud(t,l,n,a,e,u,i,c,f)}function Bm(t){for(var l=t;;){var a=l.tag;if((a===0||a===11||a===15)&&l.flags&16384&&(a=l.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var e=0;e<a.length;e++){var u=a[e],n=u.getSnapshot;u=u.value;try{if(!Wt(n(),u))return!1}catch{return!1}}if(a=l.child,l.subtreeFlags&16384&&a!==null)a.return=l,l=a;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function ua(t,l,a,e){l&=~mc,l&=~Ua,t.suspendedLanes|=l,t.pingedLanes&=~l,e&&(t.warmLanes|=l),e=t.expirationTimes;for(var u=l;0<u;){var n=31-kt(u),i=1<<n;e[n]=-1,u&=~i}a!==0&&cf(t,a,l)}function rn(){return(F&6)===0?(eu(0),!1):!0}function Tc(){if(Q!==null){if(I===0)var t=Q.return;else t=Q,Ul=pa=null,qi(t),ee=null,Je=0,t=Q;for(;t!==null;)Uo(t.alternate,t),t=t.return;Q=null}}function de(t,l){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Pm(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Tc(),ut=t,Q=a=Dl(t.current,null),w=l,I=0,Pt=null,ta=!1,ce=Te(t,l),rc=!1,fe=sl=mc=Ua=la=dt=0,Xt=lu=null,hc=!1,(l&8)!==0&&(l|=l&32);var e=t.entangledLanes;if(e!==0)for(t=t.entanglements,e&=l;0<e;){var u=31-kt(e),n=1<<u;l|=t[u],e&=~n}return Yl=l,Hu(),a}function $o(t,l){j=null,S.H=$u,l===Ye||l===Xu?(l=hs(),I=3):l===ds?(l=hs(),I=4):I=l===Eo?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,Pt=l,Q===null&&(dt=1,en(t,ul(l,t.current)))}function Po(){var t=S.H;return S.H=$u,t===null?$u:t}function td(){var t=S.A;return S.A=Hm,t}function gc(){dt=4,ta||(w&4194048)!==w&&fl.current!==null||(ce=!0),(la&134217727)===0&&(Ua&134217727)===0||ut===null||ua(ut,w,sl,!1)}function bc(t,l,a){var e=F;F|=2;var u=Po(),n=td();(ut!==t||w!==l)&&(dn=null,de(t,l)),l=!1;var i=dt;t:do try{if(I!==0&&Q!==null){var c=Q,f=Pt;switch(I){case 8:Tc(),i=6;break t;case 3:case 2:case 9:case 6:fl.current===null&&(l=!0);var m=I;if(I=0,Pt=null,re(t,c,f,m),a&&ce){i=0;break t}break;default:m=I,I=0,Pt=null,re(t,c,f,m)}}qm(),i=dt;break}catch(v){$o(t,v)}while(!0);return l&&t.shellSuspendCounter++,Ul=pa=null,F=e,S.H=u,S.A=n,Q===null&&(ut=null,w=0,Hu()),i}function qm(){for(;Q!==null;)ld(Q)}function xm(t,l){var a=F;F|=2;var e=Po(),u=td();ut!==t||w!==l?(dn=null,on=vl()+500,de(t,l)):ce=Te(t,l);t:do try{if(I!==0&&Q!==null){l=Q;var n=Pt;l:switch(I){case 1:I=0,Pt=null,re(t,l,n,1);break;case 2:case 9:if(rs(n)){I=0,Pt=null,ad(l);break}l=function(){I!==2&&I!==9||ut!==t||(I=7),Rl(t)},n.then(l,l);break t;case 3:I=7;break t;case 4:I=5;break t;case 7:rs(n)?(I=0,Pt=null,ad(l)):(I=0,Pt=null,re(t,l,n,7));break;case 5:var i=null;switch(Q.tag){case 26:i=Q.memoizedState;case 5:case 27:var c=Q;if(!i||xd(i)){I=0,Pt=null;var f=c.sibling;if(f!==null)Q=f;else{var m=c.return;m!==null?(Q=m,mn(m)):Q=null}break l}}I=0,Pt=null,re(t,l,n,5);break;case 6:I=0,Pt=null,re(t,l,n,6);break;case 8:Tc(),dt=6;break t;default:throw Error(E(462))}}Ym();break}catch(v){$o(t,v)}while(!0);return Ul=pa=null,S.H=e,S.A=u,F=a,Q!==null?0:(ut=null,w=0,Hu(),dt)}function Ym(){for(;Q!==null&&!ir();)ld(Q)}function ld(t){var l=_o(t.alternate,t,Yl);t.memoizedProps=t.pendingProps,l===null?mn(t):Q=l}function ad(t){var l=t,a=l.alternate;switch(l.tag){case 15:case 0:l=Ro(a,l,l.pendingProps,l.type,void 0,w);break;case 11:l=Ro(a,l,l.pendingProps,l.type.render,l.ref,w);break;case 5:qi(l);default:Uo(a,l),l=Q=as(l,Yl),l=_o(a,l,Yl)}t.memoizedProps=t.pendingProps,l===null?mn(t):Q=l}function re(t,l,a,e){Ul=pa=null,qi(l),ee=null,Je=0;var u=l.return;try{if(Dm(t,u,l,a,w)){dt=1,en(t,ul(a,t.current)),Q=null;return}}catch(n){if(u!==null)throw Q=u,n;dt=1,en(t,ul(a,t.current)),Q=null;return}l.flags&32768?(k||e===1?t=!0:ce||(w&536870912)!==0?t=!1:(ta=t=!0,(e===2||e===9||e===3||e===6)&&(e=fl.current,e!==null&&e.tag===13&&(e.flags|=16384))),ed(l,t)):mn(l)}function mn(t){var l=t;do{if((l.flags&32768)!==0){ed(l,ta);return}t=l.return;var a=Mm(l.alternate,l,Yl);if(a!==null){Q=a;return}if(l=l.sibling,l!==null){Q=l;return}Q=l=t}while(l!==null);dt===0&&(dt=5)}function ed(t,l){do{var a=Um(t.alternate,t);if(a!==null){a.flags&=32767,Q=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!l&&(t=t.sibling,t!==null)){Q=t;return}Q=t=a}while(t!==null);dt=6,Q=null}function ud(t,l,a,e,u,n,i,c,f){t.cancelPendingCommit=null;do hn();while(pt!==0);if((F&6)!==0)throw Error(E(327));if(l!==null){if(l===t.current)throw Error(E(177));if(n=l.lanes|l.childLanes,n|=di,Er(t,a,n,i,c,f),t===ut&&(Q=ut=null,w=0),se=l,ea=t,oe=a,Ec=n,vc=u,ko=e,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xm(Su,function(){return sd(),null})):(t.callbackNode=null,t.callbackPriority=0),e=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||e){e=S.T,S.T=null,u=p.p,p.p=2,i=F,F|=4;try{zm(t,l,a)}finally{F=i,p.p=u,S.T=e}}pt=1,nd(),id(),cd()}}function nd(){if(pt===1){pt=0;var t=ea,l=se,a=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||a){a=S.T,S.T=null;var e=p.p;p.p=2;var u=F;F|=4;try{Qo(l,t);var n=Hc,i=Kf(t.containerInfo),c=n.focusedElem,f=n.selectionRange;if(i!==c&&c&&c.ownerDocument&&Zf(c.ownerDocument.documentElement,c)){if(f!==null&&ii(c)){var m=f.start,v=f.end;if(v===void 0&&(v=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(v,c.value.length);else{var g=c.ownerDocument||document,h=g&&g.defaultView||window;if(h.getSelection){var y=h.getSelection(),q=c.textContent.length,C=Math.min(f.start,q),tt=f.end===void 0?C:Math.min(f.end,q);!y.extend&&C>tt&&(i=tt,tt=C,C=i);var d=Vf(c,C),o=Vf(c,tt);if(d&&o&&(y.rangeCount!==1||y.anchorNode!==d.node||y.anchorOffset!==d.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var r=g.createRange();r.setStart(d.node,d.offset),y.removeAllRanges(),C>tt?(y.addRange(r),y.extend(o.node,o.offset)):(r.setEnd(o.node,o.offset),y.addRange(r))}}}}for(g=[],y=c;y=y.parentNode;)y.nodeType===1&&g.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<g.length;c++){var T=g[c];T.element.scrollLeft=T.left,T.element.scrollTop=T.top}}Nn=!!Cc,Hc=Cc=null}finally{F=u,p.p=e,S.T=a}}t.current=l,pt=2}}function id(){if(pt===2){pt=0;var t=ea,l=se,a=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||a){a=S.T,S.T=null;var e=p.p;p.p=2;var u=F;F|=4;try{xo(t,l.alternate,l)}finally{F=u,p.p=e,S.T=a}}pt=3}}function cd(){if(pt===4||pt===3){pt=0,cr();var t=ea,l=se,a=oe,e=ko;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?pt=5:(pt=0,se=ea=null,fd(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(aa=null),jn(a),l=l.stateNode,Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Se,l,void 0,(l.current.flags&128)===128)}catch{}if(e!==null){l=S.T,u=p.p,p.p=2,S.T=null;try{for(var n=t.onRecoverableError,i=0;i<e.length;i++){var c=e[i];n(c.value,{componentStack:c.stack})}}finally{S.T=l,p.p=u}}(oe&3)!==0&&hn(),Rl(t),u=t.pendingLanes,(a&4194090)!==0&&(u&42)!==0?t===Sc?au++:(au=0,Sc=t):au=0,eu(0)}}function fd(t,l){(t.pooledCacheLanes&=l)===0&&(l=t.pooledCache,l!=null&&(t.pooledCache=null,qe(l)))}function hn(t){return nd(),id(),cd(),sd()}function sd(){if(pt!==5)return!1;var t=ea,l=Ec;Ec=0;var a=jn(oe),e=S.T,u=p.p;try{p.p=32>a?32:a,S.T=null,a=vc,vc=null;var n=ea,i=oe;if(pt=0,se=ea=null,oe=0,(F&6)!==0)throw Error(E(331));var c=F;if(F|=4,Ko(n.current),wo(n,n.current,i,a),F=c,eu(0,!1),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Se,n)}catch{}return!0}finally{p.p=u,S.T=e,fd(t,l)}}function od(t,l,a){l=ul(a,l),l=Fi(t.stateNode,l,2),t=Jl(t,l,2),t!==null&&(ge(t,2),Rl(t))}function at(t,l,a){if(t.tag===3)od(t,t,a);else for(;l!==null;){if(l.tag===3){od(l,t,a);break}else if(l.tag===1){var e=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof e.componentDidCatch=="function"&&(aa===null||!aa.has(e))){t=ul(a,t),a=ho(2),e=Jl(l,a,2),e!==null&&(yo(a,e,l,t),ge(e,2),Rl(e));break}}l=l.return}}function Rc(t,l,a){var e=t.pingCache;if(e===null){e=t.pingCache=new Lm;var u=new Set;e.set(l,u)}else u=e.get(l),u===void 0&&(u=new Set,e.set(l,u));u.has(a)||(rc=!0,u.add(a),t=jm.bind(null,t,l,a),l.then(t,t))}function jm(t,l,a){var e=t.pingCache;e!==null&&e.delete(l),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ut===t&&(w&a)===a&&(dt===4||dt===3&&(w&62914560)===w&&300>vl()-yc?(F&2)===0&&de(t,0):mc|=a,fe===w&&(fe=0)),Rl(t)}function dd(t,l){l===0&&(l=nf()),t=Ja(t,l),t!==null&&(ge(t,l),Rl(t))}function Gm(t){var l=t.memoizedState,a=0;l!==null&&(a=l.retryLane),dd(t,a)}function Qm(t,l){var a=0;switch(t.tag){case 13:var e=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:e=t.stateNode;break;case 22:e=t.stateNode._retryCache;break;default:throw Error(E(314))}e!==null&&e.delete(l),dd(t,a)}function Xm(t,l){return Bn(t,l)}var yn=null,me=null,Ac=!1,En=!1,pc=!1,za=0;function Rl(t){t!==me&&t.next===null&&(me===null?yn=me=t:me=me.next=t),En=!0,Ac||(Ac=!0,Vm())}function eu(t,l){if(!pc&&En){pc=!0;do for(var a=!1,e=yn;e!==null;){if(t!==0){var u=e.pendingLanes;if(u===0)var n=0;else{var i=e.suspendedLanes,c=e.pingedLanes;n=(1<<31-kt(42|t)+1)-1,n&=u&~(i&~c),n=n&201326741?n&201326741|1:n?n|2:0}n!==0&&(a=!0,yd(e,n))}else n=w,n=bu(e,e===ut?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),(n&3)===0||Te(e,n)||(a=!0,yd(e,n));e=e.next}while(a);pc=!1}}function wm(){rd()}function rd(){En=Ac=!1;var t=0;za!==0&&($m()&&(t=za),za=0);for(var l=vl(),a=null,e=yn;e!==null;){var u=e.next,n=md(e,l);n===0?(e.next=null,a===null?yn=u:a.next=u,u===null&&(me=a)):(a=e,(t!==0||(n&3)!==0)&&(En=!0)),e=u}eu(t)}function md(t,l){for(var a=t.suspendedLanes,e=t.pingedLanes,u=t.expirationTimes,n=t.pendingLanes&-62914561;0<n;){var i=31-kt(n),c=1<<i,f=u[i];f===-1?((c&a)===0||(c&e)!==0)&&(u[i]=yr(c,l)):f<=l&&(t.expiredLanes|=c),n&=~c}if(l=ut,a=w,a=bu(t,t===l?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e=t.callbackNode,a===0||t===l&&(I===2||I===9)||t.cancelPendingCommit!==null)return e!==null&&e!==null&&qn(e),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Te(t,a)){if(l=a&-a,l===t.callbackPriority)return l;switch(e!==null&&qn(e),jn(a)){case 2:case 8:a=af;break;case 32:a=Su;break;case 268435456:a=ef;break;default:a=Su}return e=hd.bind(null,t),a=Bn(a,e),t.callbackPriority=l,t.callbackNode=a,l}return e!==null&&e!==null&&qn(e),t.callbackPriority=2,t.callbackNode=null,2}function hd(t,l){if(pt!==0&&pt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(hn()&&t.callbackNode!==a)return null;var e=w;return e=bu(t,t===ut?e:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),e===0?null:(Fo(t,e,l),md(t,vl()),t.callbackNode!=null&&t.callbackNode===a?hd.bind(null,t):null)}function yd(t,l){if(hn())return null;Fo(t,l,!0)}function Vm(){t0(function(){(F&6)!==0?Bn(lf,wm):rd()})}function Oc(){return za===0&&(za=uf()),za}function Ed(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Nu(""+t)}function vd(t,l){var a=l.ownerDocument.createElement("input");return a.name=l.name,a.value=l.value,t.id&&a.setAttribute("form",t.id),l.parentNode.insertBefore(a,l),t=new FormData(t),a.parentNode.removeChild(a),t}function Zm(t,l,a,e,u){if(l==="submit"&&a&&a.stateNode===u){var n=Ed((u[Yt]||null).action),i=e.submitter;i&&(l=(l=i[Yt]||null)?Ed(l.formAction):i.getAttribute("formAction"),l!==null&&(n=l,i=null));var c=new Uu("action","action",null,e,u);t.push({event:c,listeners:[{instance:null,listener:function(){if(e.defaultPrevented){if(za!==0){var f=i?vd(u,i):new FormData(u);Zi(a,{pending:!0,data:f,method:u.method,action:n},null,f)}}else typeof n=="function"&&(c.preventDefault(),f=i?vd(u,i):new FormData(u),Zi(a,{pending:!0,data:f,method:u.method,action:n},n,f))},currentTarget:u}]})}}for(var Nc=0;Nc<oi.length;Nc++){var Dc=oi[Nc],Km=Dc.toLowerCase(),Jm=Dc[0].toUpperCase()+Dc.slice(1);ml(Km,"on"+Jm)}ml(Wf,"onAnimationEnd"),ml(Ff,"onAnimationIteration"),ml(If,"onAnimationStart"),ml("dblclick","onDoubleClick"),ml("focusin","onFocus"),ml("focusout","onBlur"),ml(om,"onTransitionRun"),ml(dm,"onTransitionStart"),ml(rm,"onTransitionCancel"),ml($f,"onTransitionEnd"),xa("onMouseEnter",["mouseout","mouseover"]),xa("onMouseLeave",["mouseout","mouseover"]),xa("onPointerEnter",["pointerout","pointerover"]),xa("onPointerLeave",["pointerout","pointerover"]),ya("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ya("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ya("onBeforeInput",["compositionend","keypress","textInput","paste"]),ya("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ya("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),km=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu));function Sd(t,l){l=(l&4)!==0;for(var a=0;a<t.length;a++){var e=t[a],u=e.event;e=e.listeners;t:{var n=void 0;if(l)for(var i=e.length-1;0<=i;i--){var c=e[i],f=c.instance,m=c.currentTarget;if(c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(v){an(v)}u.currentTarget=null,n=f}else for(i=0;i<e.length;i++){if(c=e[i],f=c.instance,m=c.currentTarget,c=c.listener,f!==n&&u.isPropagationStopped())break t;n=c,u.currentTarget=m;try{n(u)}catch(v){an(v)}u.currentTarget=null,n=f}}}}function X(t,l){var a=l[Gn];a===void 0&&(a=l[Gn]=new Set);var e=t+"__bubble";a.has(e)||(Td(l,t,2,!1),a.add(e))}function _c(t,l,a){var e=0;l&&(e|=4),Td(a,t,e,l)}var vn="_reactListening"+Math.random().toString(36).slice(2);function Mc(t){if(!t[vn]){t[vn]=!0,df.forEach(function(a){a!=="selectionchange"&&(km.has(a)||_c(a,!1,t),_c(a,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[vn]||(l[vn]=!0,_c("selectionchange",!1,l))}}function Td(t,l,a,e){switch(wd(l)){case 2:var u=b0;break;case 8:u=R0;break;default:u=wc}a=u.bind(null,l,a,t),u=void 0,!In||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(u=!0),e?u!==void 0?t.addEventListener(l,a,{capture:!0,passive:u}):t.addEventListener(l,a,!0):u!==void 0?t.addEventListener(l,a,{passive:u}):t.addEventListener(l,a,!1)}function Uc(t,l,a,e,u){var n=e;if((l&1)===0&&(l&2)===0&&e!==null)t:for(;;){if(e===null)return;var i=e.tag;if(i===3||i===4){var c=e.stateNode.containerInfo;if(c===u)break;if(i===4)for(i=e.return;i!==null;){var f=i.tag;if((f===3||f===4)&&i.stateNode.containerInfo===u)return;i=i.return}for(;c!==null;){if(i=La(c),i===null)return;if(f=i.tag,f===5||f===6||f===26||f===27){e=n=i;continue t}c=c.parentNode}}e=e.return}Of(function(){var m=n,v=Wn(a),g=[];t:{var h=Pf.get(t);if(h!==void 0){var y=Uu,q=t;switch(t){case"keypress":if(_u(a)===0)break t;case"keydown":case"keyup":y=Xr;break;case"focusin":q="focus",y=li;break;case"focusout":q="blur",y=li;break;case"beforeblur":case"afterblur":y=li;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=_f;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ur;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Zr;break;case Wf:case Ff:case If:y=Hr;break;case $f:y=Jr;break;case"scroll":case"scrollend":y=_r;break;case"wheel":y=Wr;break;case"copy":case"cut":case"paste":y=Br;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Uf;break;case"toggle":case"beforetoggle":y=Ir}var C=(l&4)!==0,tt=!C&&(t==="scroll"||t==="scrollend"),d=C?h!==null?h+"Capture":null:h;C=[];for(var o=m,r;o!==null;){var T=o;if(r=T.stateNode,T=T.tag,T!==5&&T!==26&&T!==27||r===null||d===null||(T=Ae(o,d),T!=null&&C.push(nu(o,T,r))),tt)break;o=o.return}0<C.length&&(h=new y(h,q,null,a,v),g.push({event:h,listeners:C}))}}if((l&7)===0){t:{if(h=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",h&&a!==kn&&(q=a.relatedTarget||a.fromElement)&&(La(q)||q[Ha]))break t;if((y||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,y?(q=a.relatedTarget||a.toElement,y=m,q=q?La(q):null,q!==null&&(tt=J(q),C=q.tag,q!==tt||C!==5&&C!==27&&C!==6)&&(q=null)):(y=null,q=m),y!==q)){if(C=_f,T="onMouseLeave",d="onMouseEnter",o="mouse",(t==="pointerout"||t==="pointerover")&&(C=Uf,T="onPointerLeave",d="onPointerEnter",o="pointer"),tt=y==null?h:Re(y),r=q==null?h:Re(q),h=new C(T,o+"leave",y,a,v),h.target=tt,h.relatedTarget=r,T=null,La(v)===m&&(C=new C(d,o+"enter",q,a,v),C.target=r,C.relatedTarget=tt,T=C),tt=T,y&&q)l:{for(C=y,d=q,o=0,r=C;r;r=he(r))o++;for(r=0,T=d;T;T=he(T))r++;for(;0<o-r;)C=he(C),o--;for(;0<r-o;)d=he(d),r--;for(;o--;){if(C===d||d!==null&&C===d.alternate)break l;C=he(C),d=he(d)}C=null}else C=null;y!==null&&gd(g,h,y,C,!1),q!==null&&tt!==null&&gd(g,tt,q,C,!0)}}t:{if(h=m?Re(m):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var N=Yf;else if(qf(h))if(jf)N=cm;else{N=nm;var G=um}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&Jn(m.elementType)&&(N=Yf):N=im;if(N&&(N=N(t,m))){xf(g,N,a,v);break t}G&&G(t,h,m),t==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Kn(h,"number",h.value)}switch(G=m?Re(m):window,t){case"focusin":(qf(G)||G.contentEditable==="true")&&(Va=G,ci=m,ze=null);break;case"focusout":ze=ci=Va=null;break;case"mousedown":fi=!0;break;case"contextmenu":case"mouseup":case"dragend":fi=!1,Jf(g,a,v);break;case"selectionchange":if(sm)break;case"keydown":case"keyup":Jf(g,a,v)}var _;if(ei)t:{switch(t){case"compositionstart":var H="onCompositionStart";break t;case"compositionend":H="onCompositionEnd";break t;case"compositionupdate":H="onCompositionUpdate";break t}H=void 0}else wa?Lf(t,a)&&(H="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(H="onCompositionStart");H&&(zf&&a.locale!=="ko"&&(wa||H!=="onCompositionStart"?H==="onCompositionEnd"&&wa&&(_=Nf()):(wl=v,$n="value"in wl?wl.value:wl.textContent,wa=!0)),G=Sn(m,H),0<G.length&&(H=new Mf(H,t,null,a,v),g.push({event:H,listeners:G}),_?H.data=_:(_=Bf(a),_!==null&&(H.data=_)))),(_=Pr?tm(t,a):lm(t,a))&&(H=Sn(m,"onBeforeInput"),0<H.length&&(G=new Mf("onBeforeInput","beforeinput",null,a,v),g.push({event:G,listeners:H}),G.data=_)),Zm(g,t,m,a,v)}Sd(g,l)})}function nu(t,l,a){return{instance:t,listener:l,currentTarget:a}}function Sn(t,l){for(var a=l+"Capture",e=[];t!==null;){var u=t,n=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||n===null||(u=Ae(t,a),u!=null&&e.unshift(nu(t,u,n)),u=Ae(t,l),u!=null&&e.push(nu(t,u,n))),t.tag===3)return e;t=t.return}return[]}function he(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gd(t,l,a,e,u){for(var n=l._reactName,i=[];a!==null&&a!==e;){var c=a,f=c.alternate,m=c.stateNode;if(c=c.tag,f!==null&&f===e)break;c!==5&&c!==26&&c!==27||m===null||(f=m,u?(m=Ae(a,n),m!=null&&i.unshift(nu(a,m,f))):u||(m=Ae(a,n),m!=null&&i.push(nu(a,m,f)))),a=a.return}i.length!==0&&t.push({event:l,listeners:i})}var Wm=/\r\n?/g,Fm=/\u0000|\uFFFD/g;function bd(t){return(typeof t=="string"?t:""+t).replace(Wm,`
`).replace(Fm,"")}function Rd(t,l){return l=bd(l),bd(t)===l}function Tn(){}function P(t,l,a,e,u,n){switch(a){case"children":typeof e=="string"?l==="body"||l==="textarea"&&e===""||Ga(t,e):(typeof e=="number"||typeof e=="bigint")&&l!=="body"&&Ga(t,""+e);break;case"className":Au(t,"class",e);break;case"tabIndex":Au(t,"tabindex",e);break;case"dir":case"role":case"viewBox":case"width":case"height":Au(t,a,e);break;case"style":Af(t,e,n);break;case"data":if(l!=="object"){Au(t,"data",e);break}case"src":case"href":if(e===""&&(l!=="a"||a!=="href")){t.removeAttribute(a);break}if(e==null||typeof e=="function"||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=Nu(""+e),t.setAttribute(a,e);break;case"action":case"formAction":if(typeof e=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof n=="function"&&(a==="formAction"?(l!=="input"&&P(t,l,"name",u.name,u,null),P(t,l,"formEncType",u.formEncType,u,null),P(t,l,"formMethod",u.formMethod,u,null),P(t,l,"formTarget",u.formTarget,u,null)):(P(t,l,"encType",u.encType,u,null),P(t,l,"method",u.method,u,null),P(t,l,"target",u.target,u,null)));if(e==null||typeof e=="symbol"||typeof e=="boolean"){t.removeAttribute(a);break}e=Nu(""+e),t.setAttribute(a,e);break;case"onClick":e!=null&&(t.onclick=Tn);break;case"onScroll":e!=null&&X("scroll",t);break;case"onScrollEnd":e!=null&&X("scrollend",t);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(E(61));if(a=e.__html,a!=null){if(u.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"multiple":t.multiple=e&&typeof e!="function"&&typeof e!="symbol";break;case"muted":t.muted=e&&typeof e!="function"&&typeof e!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(e==null||typeof e=="function"||typeof e=="boolean"||typeof e=="symbol"){t.removeAttribute("xlink:href");break}a=Nu(""+e),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""+e):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":e&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":e===!0?t.setAttribute(a,""):e!==!1&&e!=null&&typeof e!="function"&&typeof e!="symbol"?t.setAttribute(a,e):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":e!=null&&typeof e!="function"&&typeof e!="symbol"&&!isNaN(e)&&1<=e?t.setAttribute(a,e):t.removeAttribute(a);break;case"rowSpan":case"start":e==null||typeof e=="function"||typeof e=="symbol"||isNaN(e)?t.removeAttribute(a):t.setAttribute(a,e);break;case"popover":X("beforetoggle",t),X("toggle",t),Ru(t,"popover",e);break;case"xlinkActuate":Ol(t,"http://www.w3.org/1999/xlink","xlink:actuate",e);break;case"xlinkArcrole":Ol(t,"http://www.w3.org/1999/xlink","xlink:arcrole",e);break;case"xlinkRole":Ol(t,"http://www.w3.org/1999/xlink","xlink:role",e);break;case"xlinkShow":Ol(t,"http://www.w3.org/1999/xlink","xlink:show",e);break;case"xlinkTitle":Ol(t,"http://www.w3.org/1999/xlink","xlink:title",e);break;case"xlinkType":Ol(t,"http://www.w3.org/1999/xlink","xlink:type",e);break;case"xmlBase":Ol(t,"http://www.w3.org/XML/1998/namespace","xml:base",e);break;case"xmlLang":Ol(t,"http://www.w3.org/XML/1998/namespace","xml:lang",e);break;case"xmlSpace":Ol(t,"http://www.w3.org/XML/1998/namespace","xml:space",e);break;case"is":Ru(t,"is",e);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nr.get(a)||a,Ru(t,a,e))}}function zc(t,l,a,e,u,n){switch(a){case"style":Af(t,e,n);break;case"dangerouslySetInnerHTML":if(e!=null){if(typeof e!="object"||!("__html"in e))throw Error(E(61));if(a=e.__html,a!=null){if(u.children!=null)throw Error(E(60));t.innerHTML=a}}break;case"children":typeof e=="string"?Ga(t,e):(typeof e=="number"||typeof e=="bigint")&&Ga(t,""+e);break;case"onScroll":e!=null&&X("scroll",t);break;case"onScrollEnd":e!=null&&X("scrollend",t);break;case"onClick":e!=null&&(t.onclick=Tn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rf.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),l=a.slice(2,u?a.length-7:void 0),n=t[Yt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(l,n,u),typeof e=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(l,e,u);break t}a in t?t[a]=e:e===!0?t.setAttribute(a,""):Ru(t,a,e)}}}function Ot(t,l,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",t),X("load",t);var e=!1,u=!1,n;for(n in a)if(a.hasOwnProperty(n)){var i=a[n];if(i!=null)switch(n){case"src":e=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,l));default:P(t,l,n,i,a,null)}}u&&P(t,l,"srcSet",a.srcSet,a,null),e&&P(t,l,"src",a.src,a,null);return;case"input":X("invalid",t);var c=n=i=u=null,f=null,m=null;for(e in a)if(a.hasOwnProperty(e)){var v=a[e];if(v!=null)switch(e){case"name":u=v;break;case"type":i=v;break;case"checked":f=v;break;case"defaultChecked":m=v;break;case"value":n=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(E(137,l));break;default:P(t,l,e,v,a,null)}}Tf(t,n,c,f,m,i,u,!1),pu(t);return;case"select":X("invalid",t),e=i=n=null;for(u in a)if(a.hasOwnProperty(u)&&(c=a[u],c!=null))switch(u){case"value":n=c;break;case"defaultValue":i=c;break;case"multiple":e=c;default:P(t,l,u,c,a,null)}l=n,a=i,t.multiple=!!e,l!=null?ja(t,!!e,l,!1):a!=null&&ja(t,!!e,a,!0);return;case"textarea":X("invalid",t),n=u=e=null;for(i in a)if(a.hasOwnProperty(i)&&(c=a[i],c!=null))switch(i){case"value":e=c;break;case"defaultValue":u=c;break;case"children":n=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(E(91));break;default:P(t,l,i,c,a,null)}bf(t,e,u,n),pu(t);return;case"option":for(f in a)if(a.hasOwnProperty(f)&&(e=a[f],e!=null))switch(f){case"selected":t.selected=e&&typeof e!="function"&&typeof e!="symbol";break;default:P(t,l,f,e,a,null)}return;case"dialog":X("beforetoggle",t),X("toggle",t),X("cancel",t),X("close",t);break;case"iframe":case"object":X("load",t);break;case"video":case"audio":for(e=0;e<uu.length;e++)X(uu[e],t);break;case"image":X("error",t),X("load",t);break;case"details":X("toggle",t);break;case"embed":case"source":case"link":X("error",t),X("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(e=a[m],e!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,l));default:P(t,l,m,e,a,null)}return;default:if(Jn(l)){for(v in a)a.hasOwnProperty(v)&&(e=a[v],e!==void 0&&zc(t,l,v,e,a,void 0));return}}for(c in a)a.hasOwnProperty(c)&&(e=a[c],e!=null&&P(t,l,c,e,a,null))}function Im(t,l,a,e){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,n=null,i=null,c=null,f=null,m=null,v=null;for(y in a){var g=a[y];if(a.hasOwnProperty(y)&&g!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":f=g;default:e.hasOwnProperty(y)||P(t,l,y,null,e,g)}}for(var h in e){var y=e[h];if(g=a[h],e.hasOwnProperty(h)&&(y!=null||g!=null))switch(h){case"type":n=y;break;case"name":u=y;break;case"checked":m=y;break;case"defaultChecked":v=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(E(137,l));break;default:y!==g&&P(t,l,h,y,e,g)}}Zn(t,i,c,f,m,v,n,u);return;case"select":y=i=c=h=null;for(n in a)if(f=a[n],a.hasOwnProperty(n)&&f!=null)switch(n){case"value":break;case"multiple":y=f;default:e.hasOwnProperty(n)||P(t,l,n,null,e,f)}for(u in e)if(n=e[u],f=a[u],e.hasOwnProperty(u)&&(n!=null||f!=null))switch(u){case"value":h=n;break;case"defaultValue":c=n;break;case"multiple":i=n;default:n!==f&&P(t,l,u,n,e,f)}l=c,a=i,e=y,h!=null?ja(t,!!a,h,!1):!!e!=!!a&&(l!=null?ja(t,!!a,l,!0):ja(t,!!a,a?[]:"",!1));return;case"textarea":y=h=null;for(c in a)if(u=a[c],a.hasOwnProperty(c)&&u!=null&&!e.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:P(t,l,c,null,e,u)}for(i in e)if(u=e[i],n=a[i],e.hasOwnProperty(i)&&(u!=null||n!=null))switch(i){case"value":h=u;break;case"defaultValue":y=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(E(91));break;default:u!==n&&P(t,l,i,u,e,n)}gf(t,h,y);return;case"option":for(var q in a)if(h=a[q],a.hasOwnProperty(q)&&h!=null&&!e.hasOwnProperty(q))switch(q){case"selected":t.selected=!1;break;default:P(t,l,q,null,e,h)}for(f in e)if(h=e[f],y=a[f],e.hasOwnProperty(f)&&h!==y&&(h!=null||y!=null))switch(f){case"selected":t.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:P(t,l,f,h,e,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var C in a)h=a[C],a.hasOwnProperty(C)&&h!=null&&!e.hasOwnProperty(C)&&P(t,l,C,null,e,h);for(m in e)if(h=e[m],y=a[m],e.hasOwnProperty(m)&&h!==y&&(h!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,l));break;default:P(t,l,m,h,e,y)}return;default:if(Jn(l)){for(var tt in a)h=a[tt],a.hasOwnProperty(tt)&&h!==void 0&&!e.hasOwnProperty(tt)&&zc(t,l,tt,void 0,e,h);for(v in e)h=e[v],y=a[v],!e.hasOwnProperty(v)||h===y||h===void 0&&y===void 0||zc(t,l,v,h,e,y);return}}for(var d in a)h=a[d],a.hasOwnProperty(d)&&h!=null&&!e.hasOwnProperty(d)&&P(t,l,d,null,e,h);for(g in e)h=e[g],y=a[g],!e.hasOwnProperty(g)||h===y||h==null&&y==null||P(t,l,g,h,e,y)}var Cc=null,Hc=null;function gn(t){return t.nodeType===9?t:t.ownerDocument}function Ad(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function pd(t,l){if(t===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&l==="foreignObject"?0:t}function Lc(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var Bc=null;function $m(){var t=window.event;return t&&t.type==="popstate"?t===Bc?!1:(Bc=t,!0):(Bc=null,!1)}var Od=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,Nd=typeof Promise=="function"?Promise:void 0,t0=typeof queueMicrotask=="function"?queueMicrotask:typeof Nd<"u"?function(t){return Nd.resolve(null).then(t).catch(l0)}:Od;function l0(t){setTimeout(function(){throw t})}function na(t){return t==="head"}function Dd(t,l){var a=l,e=0,u=0;do{var n=a.nextSibling;if(t.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(0<e&&8>e){a=e;var i=t.ownerDocument;if(a&1&&iu(i.documentElement),a&2&&iu(i.body),a&4)for(a=i.head,iu(a),i=a.firstChild;i;){var c=i.nextSibling,f=i.nodeName;i[be]||f==="SCRIPT"||f==="STYLE"||f==="LINK"&&i.rel.toLowerCase()==="stylesheet"||a.removeChild(i),i=c}}if(u===0){t.removeChild(n),hu(l);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:e=a.charCodeAt(0)-48;else e=0;a=n}while(a);hu(l)}function qc(t){var l=t.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var a=l;switch(l=l.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":qc(a),Qn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function a0(t,l,a,e){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==l.toLowerCase()){if(!e&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(e){if(!t[be])switch(l){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(n=t.getAttribute("rel"),n==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(n!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(n=t.getAttribute("src"),(n!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&n&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(l==="input"&&t.type==="hidden"){var n=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===n)return t}else return t;if(t=yl(t.nextSibling),t===null)break}return null}function e0(t,l,a){if(l==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yl(t.nextSibling),t===null))return null;return t}function xc(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function u0(t,l){var a=t.ownerDocument;if(t.data!=="$?"||a.readyState==="complete")l();else{var e=function(){l(),a.removeEventListener("DOMContentLoaded",e)};a.addEventListener("DOMContentLoaded",e),t._reactRetry=e}}function yl(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?"||l==="F!"||l==="F")break;if(l==="/$")return null}}return t}var Yc=null;function _d(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(l===0)return t;l--}else a==="/$"&&l++}t=t.previousSibling}return null}function Md(t,l,a){switch(l=gn(a),t){case"html":if(t=l.documentElement,!t)throw Error(E(452));return t;case"head":if(t=l.head,!t)throw Error(E(453));return t;case"body":if(t=l.body,!t)throw Error(E(454));return t;default:throw Error(E(451))}}function iu(t){for(var l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Qn(t)}var ol=new Map,Ud=new Set;function bn(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var jl=p.d;p.d={f:n0,r:i0,D:c0,C:f0,L:s0,m:o0,X:r0,S:d0,M:m0};function n0(){var t=jl.f(),l=rn();return t||l}function i0(t){var l=Ba(t);l!==null&&l.tag===5&&l.type==="form"?Ws(l):jl.r(t)}var ye=typeof document>"u"?null:document;function zd(t,l,a){var e=ye;if(e&&typeof l=="string"&&l){var u=el(l);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ud.has(u)||(Ud.add(u),t={rel:t,crossOrigin:a,href:l},e.querySelector(u)===null&&(l=e.createElement("link"),Ot(l,"link",t),Tt(l),e.head.appendChild(l)))}}function c0(t){jl.D(t),zd("dns-prefetch",t,null)}function f0(t,l){jl.C(t,l),zd("preconnect",t,l)}function s0(t,l,a){jl.L(t,l,a);var e=ye;if(e&&t&&l){var u='link[rel="preload"][as="'+el(l)+'"]';l==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+el(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+el(a.imageSizes)+'"]')):u+='[href="'+el(t)+'"]';var n=u;switch(l){case"style":n=Ee(t);break;case"script":n=ve(t)}ol.has(n)||(t=M({rel:"preload",href:l==="image"&&a&&a.imageSrcSet?void 0:t,as:l},a),ol.set(n,t),e.querySelector(u)!==null||l==="style"&&e.querySelector(cu(n))||l==="script"&&e.querySelector(fu(n))||(l=e.createElement("link"),Ot(l,"link",t),Tt(l),e.head.appendChild(l)))}}function o0(t,l){jl.m(t,l);var a=ye;if(a&&t){var e=l&&typeof l.as=="string"?l.as:"script",u='link[rel="modulepreload"][as="'+el(e)+'"][href="'+el(t)+'"]',n=u;switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":n=ve(t)}if(!ol.has(n)&&(t=M({rel:"modulepreload",href:t},l),ol.set(n,t),a.querySelector(u)===null)){switch(e){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fu(n)))return}e=a.createElement("link"),Ot(e,"link",t),Tt(e),a.head.appendChild(e)}}}function d0(t,l,a){jl.S(t,l,a);var e=ye;if(e&&t){var u=qa(e).hoistableStyles,n=Ee(t);l=l||"default";var i=u.get(n);if(!i){var c={loading:0,preload:null};if(i=e.querySelector(cu(n)))c.loading=5;else{t=M({rel:"stylesheet",href:t,"data-precedence":l},a),(a=ol.get(n))&&jc(t,a);var f=i=e.createElement("link");Tt(f),Ot(f,"link",t),f._p=new Promise(function(m,v){f.onload=m,f.onerror=v}),f.addEventListener("load",function(){c.loading|=1}),f.addEventListener("error",function(){c.loading|=2}),c.loading|=4,Rn(i,l,e)}i={type:"stylesheet",instance:i,count:1,state:c},u.set(n,i)}}}function r0(t,l){jl.X(t,l);var a=ye;if(a&&t){var e=qa(a).hoistableScripts,u=ve(t),n=e.get(u);n||(n=a.querySelector(fu(u)),n||(t=M({src:t,async:!0},l),(l=ol.get(u))&&Gc(t,l),n=a.createElement("script"),Tt(n),Ot(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function m0(t,l){jl.M(t,l);var a=ye;if(a&&t){var e=qa(a).hoistableScripts,u=ve(t),n=e.get(u);n||(n=a.querySelector(fu(u)),n||(t=M({src:t,async:!0,type:"module"},l),(l=ol.get(u))&&Gc(t,l),n=a.createElement("script"),Tt(n),Ot(n,"link",t),a.head.appendChild(n)),n={type:"script",instance:n,count:1,state:null},e.set(u,n))}}function Cd(t,l,a,e){var u=(u=x.current)?bn(u):null;if(!u)throw Error(E(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(l=Ee(a.href),a=qa(u).hoistableStyles,e=a.get(l),e||(e={type:"style",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ee(a.href);var n=qa(u).hoistableStyles,i=n.get(t);if(i||(u=u.ownerDocument||u,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},n.set(t,i),(n=u.querySelector(cu(t)))&&!n._p&&(i.instance=n,i.state.loading=5),ol.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ol.set(t,a),n||h0(u,t,a,i.state))),l&&e===null)throw Error(E(528,""));return i}if(l&&e!==null)throw Error(E(529,""));return null;case"script":return l=a.async,a=a.src,typeof a=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=ve(a),a=qa(u).hoistableScripts,e=a.get(l),e||(e={type:"script",instance:null,count:0,state:null},a.set(l,e)),e):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,t))}}function Ee(t){return'href="'+el(t)+'"'}function cu(t){return'link[rel="stylesheet"]['+t+"]"}function Hd(t){return M({},t,{"data-precedence":t.precedence,precedence:null})}function h0(t,l,a,e){t.querySelector('link[rel="preload"][as="style"]['+l+"]")?e.loading=1:(l=t.createElement("link"),e.preload=l,l.addEventListener("load",function(){return e.loading|=1}),l.addEventListener("error",function(){return e.loading|=2}),Ot(l,"link",a),Tt(l),t.head.appendChild(l))}function ve(t){return'[src="'+el(t)+'"]'}function fu(t){return"script[async]"+t}function Ld(t,l,a){if(l.count++,l.instance===null)switch(l.type){case"style":var e=t.querySelector('style[data-href~="'+el(a.href)+'"]');if(e)return l.instance=e,Tt(e),e;var u=M({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return e=(t.ownerDocument||t).createElement("style"),Tt(e),Ot(e,"style",u),Rn(e,a.precedence,t),l.instance=e;case"stylesheet":u=Ee(a.href);var n=t.querySelector(cu(u));if(n)return l.state.loading|=4,l.instance=n,Tt(n),n;e=Hd(a),(u=ol.get(u))&&jc(e,u),n=(t.ownerDocument||t).createElement("link"),Tt(n);var i=n;return i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ot(n,"link",e),l.state.loading|=4,Rn(n,a.precedence,t),l.instance=n;case"script":return n=ve(a.src),(u=t.querySelector(fu(n)))?(l.instance=u,Tt(u),u):(e=a,(u=ol.get(n))&&(e=M({},a),Gc(e,u)),t=t.ownerDocument||t,u=t.createElement("script"),Tt(u),Ot(u,"link",e),t.head.appendChild(u),l.instance=u);case"void":return null;default:throw Error(E(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(e=l.instance,l.state.loading|=4,Rn(e,a.precedence,t));return l.instance}function Rn(t,l,a){for(var e=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=e.length?e[e.length-1]:null,n=u,i=0;i<e.length;i++){var c=e[i];if(c.dataset.precedence===l)n=c;else if(n!==u)break}n?n.parentNode.insertBefore(t,n.nextSibling):(l=a.nodeType===9?a.head:a,l.insertBefore(t,l.firstChild))}function jc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.title==null&&(t.title=l.title)}function Gc(t,l){t.crossOrigin==null&&(t.crossOrigin=l.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=l.referrerPolicy),t.integrity==null&&(t.integrity=l.integrity)}var An=null;function Bd(t,l,a){if(An===null){var e=new Map,u=An=new Map;u.set(a,e)}else u=An,e=u.get(a),e||(e=new Map,u.set(a,e));if(e.has(t))return e;for(e.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var n=a[u];if(!(n[be]||n[Mt]||t==="link"&&n.getAttribute("rel")==="stylesheet")&&n.namespaceURI!=="http://www.w3.org/2000/svg"){var i=n.getAttribute(l)||"";i=t+i;var c=e.get(i);c?c.push(n):e.set(i,[n])}}return e}function qd(t,l,a){t=t.ownerDocument||t,t.head.insertBefore(a,l==="title"?t.querySelector("head > title"):null)}function y0(t,l,a){if(a===1||l.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return t=l.disabled,typeof l.precedence=="string"&&t==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function xd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var su=null;function E0(){}function v0(t,l,a){if(su===null)throw Error(E(475));var e=su;if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var u=Ee(a.href),n=t.querySelector(cu(u));if(n){t=n._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pn.bind(e),t.then(e,e)),l.state.loading|=4,l.instance=n,Tt(n);return}n=t.ownerDocument||t,a=Hd(a),(u=ol.get(u))&&jc(a,u),n=n.createElement("link"),Tt(n);var i=n;i._p=new Promise(function(c,f){i.onload=c,i.onerror=f}),Ot(n,"link",a),l.instance=n}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,t),(t=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=pn.bind(e),t.addEventListener("load",l),t.addEventListener("error",l))}}function S0(){if(su===null)throw Error(E(475));var t=su;return t.stylesheets&&t.count===0&&Qc(t,t.stylesheets),0<t.count?function(l){var a=setTimeout(function(){if(t.stylesheets&&Qc(t,t.stylesheets),t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}},6e4);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a)}}:null}function pn(){if(this.count--,this.count===0){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var On=null;function Qc(t,l){t.stylesheets=null,t.unsuspend!==null&&(t.count++,On=new Map,l.forEach(T0,t),On=null,pn.call(t))}function T0(t,l){if(!(l.state.loading&4)){var a=On.get(t);if(a)var e=a.get(null);else{a=new Map,On.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),n=0;n<u.length;n++){var i=u[n];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(a.set(i.dataset.precedence,i),e=i)}e&&a.set(null,e)}u=l.instance,i=u.getAttribute("data-precedence"),n=a.get(i)||e,n===e&&a.set(null,u),a.set(i,u),this.count++,e=pn.bind(this),u.addEventListener("load",e),u.addEventListener("error",e),n?n.parentNode.insertBefore(u,n.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),l.state.loading|=4}}var ou={$$typeof:Nt,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function g0(t,l,a,e,u,n,i,c){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xn(0),this.hiddenUpdates=xn(null),this.identifierPrefix=e,this.onUncaughtError=u,this.onCaughtError=n,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Yd(t,l,a,e,u,n,i,c,f,m,v,g){return t=new g0(t,l,a,i,c,f,m,g),l=1,n===!0&&(l|=24),n=Ft(3,null,null,l),t.current=n,n.stateNode=t,l=Ri(),l.refCount++,t.pooledCache=l,l.refCount++,n.memoizedState={element:e,isDehydrated:a,cache:l},Ni(n),t}function jd(t){return t?(t=ka,t):ka}function Gd(t,l,a,e,u,n){u=jd(u),e.context===null?e.context=u:e.pendingContext=u,e=Kl(l),e.payload={element:a},n=n===void 0?null:n,n!==null&&(e.callback=n),a=Jl(t,e,l),a!==null&&(ll(a,t,l),Ge(a,t,l))}function Qd(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<l?a:l}}function Xc(t,l){Qd(t,l),(t=t.alternate)&&Qd(t,l)}function Xd(t){if(t.tag===13){var l=Ja(t,67108864);l!==null&&ll(l,t,67108864),Xc(t,67108864)}}var Nn=!0;function b0(t,l,a,e){var u=S.T;S.T=null;var n=p.p;try{p.p=2,wc(t,l,a,e)}finally{p.p=n,S.T=u}}function R0(t,l,a,e){var u=S.T;S.T=null;var n=p.p;try{p.p=8,wc(t,l,a,e)}finally{p.p=n,S.T=u}}function wc(t,l,a,e){if(Nn){var u=Vc(e);if(u===null)Uc(t,l,e,Dn,a),Vd(t,e);else if(p0(u,t,l,a,e))e.stopPropagation();else if(Vd(t,e),l&4&&-1<A0.indexOf(t)){for(;u!==null;){var n=Ba(u);if(n!==null)switch(n.tag){case 3:if(n=n.stateNode,n.current.memoizedState.isDehydrated){var i=ha(n.pendingLanes);if(i!==0){var c=n;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var f=1<<31-kt(i);c.entanglements[1]|=f,i&=~f}Rl(n),(F&6)===0&&(on=vl()+500,eu(0))}}break;case 13:c=Ja(n,2),c!==null&&ll(c,n,2),rn(),Xc(n,2)}if(n=Vc(e),n===null&&Uc(t,l,e,Dn,a),n===u)break;u=n}u!==null&&e.stopPropagation()}else Uc(t,l,e,null,a)}}function Vc(t){return t=Wn(t),Zc(t)}var Dn=null;function Zc(t){if(Dn=null,t=La(t),t!==null){var l=J(t);if(l===null)t=null;else{var a=l.tag;if(a===13){if(t=rt(l),t!==null)return t;t=null}else if(a===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null)}}return Dn=t,null}function wd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fr()){case lf:return 2;case af:return 8;case Su:case sr:return 32;case ef:return 268435456;default:return 32}default:return 32}}var Kc=!1,ia=null,ca=null,fa=null,du=new Map,ru=new Map,sa=[],A0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Vd(t,l){switch(t){case"focusin":case"focusout":ia=null;break;case"dragenter":case"dragleave":ca=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":du.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":ru.delete(l.pointerId)}}function mu(t,l,a,e,u,n){return t===null||t.nativeEvent!==n?(t={blockedOn:l,domEventName:a,eventSystemFlags:e,nativeEvent:n,targetContainers:[u]},l!==null&&(l=Ba(l),l!==null&&Xd(l)),t):(t.eventSystemFlags|=e,l=t.targetContainers,u!==null&&l.indexOf(u)===-1&&l.push(u),t)}function p0(t,l,a,e,u){switch(l){case"focusin":return ia=mu(ia,t,l,a,e,u),!0;case"dragenter":return ca=mu(ca,t,l,a,e,u),!0;case"mouseover":return fa=mu(fa,t,l,a,e,u),!0;case"pointerover":var n=u.pointerId;return du.set(n,mu(du.get(n)||null,t,l,a,e,u)),!0;case"gotpointercapture":return n=u.pointerId,ru.set(n,mu(ru.get(n)||null,t,l,a,e,u)),!0}return!1}function Zd(t){var l=La(t.target);if(l!==null){var a=J(l);if(a!==null){if(l=a.tag,l===13){if(l=rt(a),l!==null){t.blockedOn=l,vr(t.priority,function(){if(a.tag===13){var e=tl();e=Yn(e);var u=Ja(a,e);u!==null&&ll(u,a,e),Xc(a,e)}});return}}else if(l===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _n(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var a=Vc(t.nativeEvent);if(a===null){a=t.nativeEvent;var e=new a.constructor(a.type,a);kn=e,a.target.dispatchEvent(e),kn=null}else return l=Ba(a),l!==null&&Xd(l),t.blockedOn=a,!1;l.shift()}return!0}function Kd(t,l,a){_n(t)&&a.delete(l)}function O0(){Kc=!1,ia!==null&&_n(ia)&&(ia=null),ca!==null&&_n(ca)&&(ca=null),fa!==null&&_n(fa)&&(fa=null),du.forEach(Kd),ru.forEach(Kd)}function Mn(t,l){t.blockedOn===l&&(t.blockedOn=null,Kc||(Kc=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,O0)))}var Un=null;function Jd(t){Un!==t&&(Un=t,D.unstable_scheduleCallback(D.unstable_NormalPriority,function(){Un===t&&(Un=null);for(var l=0;l<t.length;l+=3){var a=t[l],e=t[l+1],u=t[l+2];if(typeof e!="function"){if(Zc(e||a)===null)continue;break}var n=Ba(a);n!==null&&(t.splice(l,3),l-=3,Zi(n,{pending:!0,data:u,method:a.method,action:e},e,u))}}))}function hu(t){function l(f){return Mn(f,t)}ia!==null&&Mn(ia,t),ca!==null&&Mn(ca,t),fa!==null&&Mn(fa,t),du.forEach(l),ru.forEach(l);for(var a=0;a<sa.length;a++){var e=sa[a];e.blockedOn===t&&(e.blockedOn=null)}for(;0<sa.length&&(a=sa[0],a.blockedOn===null);)Zd(a),a.blockedOn===null&&sa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(e=0;e<a.length;e+=3){var u=a[e],n=a[e+1],i=u[Yt]||null;if(typeof n=="function")i||Jd(a);else if(i){var c=null;if(n&&n.hasAttribute("formAction")){if(u=n,i=n[Yt]||null)c=i.formAction;else if(Zc(u)!==null)continue}else c=i.action;typeof c=="function"?a[e+1]=c:(a.splice(e,3),e-=3),Jd(a)}}}function Jc(t){this._internalRoot=t}zn.prototype.render=Jc.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(E(409));var a=l.current,e=tl();Gd(a,e,t,l,null,null)},zn.prototype.unmount=Jc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;Gd(t.current,2,null,t,null,null),rn(),l[Ha]=null}};function zn(t){this._internalRoot=t}zn.prototype.unstable_scheduleHydration=function(t){if(t){var l=sf();t={blockedOn:null,target:t,priority:l};for(var a=0;a<sa.length&&l!==0&&l<sa[a].priority;a++);sa.splice(a,0,t),a===0&&Zd(t)}};var kd=ft.version;if(kd!=="19.1.0")throw Error(E(527,kd,"19.1.0"));p.findDOMNode=function(t){var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=U(l),t=t!==null?R(t):null,t=t===null?null:t.stateNode,t};var N0={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:S,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cn.isDisabled&&Cn.supportsFiber)try{Se=Cn.inject(N0),Jt=Cn}catch{}}return Eu.createRoot=function(t,l){if(!L(t))throw Error(E(299));var a=!1,e="",u=so,n=oo,i=ro,c=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(e=l.identifierPrefix),l.onUncaughtError!==void 0&&(u=l.onUncaughtError),l.onCaughtError!==void 0&&(n=l.onCaughtError),l.onRecoverableError!==void 0&&(i=l.onRecoverableError),l.unstable_transitionCallbacks!==void 0&&(c=l.unstable_transitionCallbacks)),l=Yd(t,1,!1,null,null,a,e,u,n,i,c,null),t[Ha]=l.current,Mc(t),new Jc(l)},Eu.hydrateRoot=function(t,l,a){if(!L(t))throw Error(E(299));var e=!1,u="",n=so,i=oo,c=ro,f=null,m=null;return a!=null&&(a.unstable_strictMode===!0&&(e=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(i=a.onCaughtError),a.onRecoverableError!==void 0&&(c=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(f=a.unstable_transitionCallbacks),a.formState!==void 0&&(m=a.formState)),l=Yd(t,1,!0,l,a??null,e,u,n,i,c,f,m),l.context=jd(null),a=l.current,e=tl(),e=Yn(e),u=Kl(e),u.callback=null,Jl(a,u,e),a=e,l.current.lanes=a,ge(l,a),Rl(l),t[Ha]=l.current,Mc(t),new zn(l)},Eu.version="19.1.0",Eu}var ur;function q0(){if(ur)return Fc.exports;ur=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(ft){console.error(ft)}}return D(),Fc.exports=B0(),Fc.exports}var x0=q0();function Y0(){const[D,ft]=nr.useState(null),W=[{id:1,question:"1. What is SQL?",answer:"SQL (Structured Query Language) is a language used to store, manage, and retrieve data from relational databases like MySQL, PostgreSQL, SQLite, etc.",codeExample:`
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

ORDER BY → arranges data by column values.`},{id:4,question:"4. What is the difference between WHERE and HAVING?",answer:`WHERE is used to filter rows before grouping. 
HAVING is used to filter groups after using GROUP BY.`,codeExample:`
-- WHERE filters rows
SELECT * FROM employees 
WHERE salary > 50000;

-- HAVING filters grouped results
SELECT department, COUNT(*) 
FROM employees 
GROUP BY department 
HAVING COUNT(*) > 5;
`},{id:5,question:"5. What is the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN?",answer:"",codeExample:`
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



✅ **2. Avoid SELECT ***
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
Normalize for update speed and denormalize for read speed.`}],E=L=>{ft(D===L?null:L)};return qt.jsxs("div",{className:"app-container",children:[qt.jsx("h1",{children:"SQL Interview Questions"}),qt.jsx("div",{className:"questions-container",children:W.map(L=>qt.jsxs("div",{className:"question-item",children:[qt.jsx("button",{className:`question-button ${D===L.id?"active":""}`,onClick:()=>E(L.id),children:L.question}),D===L.id&&qt.jsxs("div",{className:"answer-container",children:[qt.jsxs("div",{className:"answer",children:[qt.jsx("h3",{children:"Answer:"}),qt.jsx("p",{children:L.answer})]}),L.codeExample&&qt.jsxs("div",{className:"code-example",children:[qt.jsx("h3",{children:"Code Example:"}),qt.jsx("pre",{children:qt.jsx("code",{children:L.codeExample})})]})]})]},L.id))})]})}x0.createRoot(document.getElementById("root")).render(qt.jsx(nr.StrictMode,{children:qt.jsx(Y0,{})}));
