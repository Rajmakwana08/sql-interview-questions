(function(){const se=document.createElement("link").relList;if(se&&se.supports&&se.supports("modulepreload"))return;for(const H of document.querySelectorAll('link[rel="modulepreload"]'))E(H);new MutationObserver(H=>{for(const k of H)if(k.type==="childList")for(const de of k.addedNodes)de.tagName==="LINK"&&de.rel==="modulepreload"&&E(de)}).observe(document,{childList:!0,subtree:!0});function W(H){const k={};return H.integrity&&(k.integrity=H.integrity),H.referrerPolicy&&(k.referrerPolicy=H.referrerPolicy),H.crossOrigin==="use-credentials"?k.credentials="include":H.crossOrigin==="anonymous"?k.credentials="omit":k.credentials="same-origin",k}function E(H){if(H.ep)return;H.ep=!0;const k=W(H);fetch(H.href,k)}})();var Jc={exports:{}},En={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wr;function Mh(){if(Wr)return En;Wr=1;var D=Symbol.for("react.transitional.element"),se=Symbol.for("react.fragment");function W(E,H,k){var de=null;if(k!==void 0&&(de=""+k),H.key!==void 0&&(de=""+H.key),"key"in H){k={};for(var Le in H)Le!=="key"&&(k[Le]=H[Le])}else k=H;return H=k.ref,{$$typeof:D,type:E,key:de,ref:H!==void 0?H:null,props:k}}return En.Fragment=se,En.jsx=W,En.jsxs=W,En}var Ir;function _h(){return Ir||(Ir=1,Jc.exports=Mh()),Jc.exports}var Be=_h(),Wc={exports:{}},w={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr;function Uh(){if(Fr)return w;Fr=1;var D=Symbol.for("react.transitional.element"),se=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),k=Symbol.for("react.consumer"),de=Symbol.for("react.context"),Le=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),ue=Symbol.iterator;function le(f){return f===null||typeof f!="object"?null:(f=ue&&f[ue]||f["@@iterator"],typeof f=="function"?f:null)}var ze={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},He=Object.assign,ra={};function qe(f,T,N){this.props=f,this.context=T,this.refs=ra,this.updater=N||ze}qe.prototype.isReactComponent={},qe.prototype.setState=function(f,T){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,T,"setState")},qe.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function rt(){}rt.prototype=qe.prototype;function Ra(f,T,N){this.props=f,this.context=T,this.refs=ra,this.updater=N||ze}var Oe=Ra.prototype=new rt;Oe.constructor=Ra,He(Oe,qe.prototype),Oe.isPureReactComponent=!0;var da=Array.isArray,X={H:null,A:null,T:null,S:null,V:null},Ve=Object.prototype.hasOwnProperty;function Xe(f,T,N,R,C,K){return N=K.ref,{$$typeof:D,type:f,key:T,ref:N!==void 0?N:null,props:K}}function Ke(f,T){return Xe(f.type,T,void 0,void 0,void 0,f.props)}function Ea(f){return typeof f=="object"&&f!==null&&f.$$typeof===D}function Lt(f){var T={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(N){return T[N]})}var Aa=/\/+/g;function De(f,T){return typeof f=="object"&&f!==null&&f.key!=null?Lt(""+f.key):T.toString(36)}function dt(){}function mt(f){switch(f.status){case"fulfilled":return f.value;case"rejected":throw f.reason;default:switch(typeof f.status=="string"?f.then(dt,dt):(f.status="pending",f.then(function(T){f.status==="pending"&&(f.status="fulfilled",f.value=T)},function(T){f.status==="pending"&&(f.status="rejected",f.reason=T)})),f.status){case"fulfilled":return f.value;case"rejected":throw f.reason}}throw f}function Me(f,T,N,R,C){var K=typeof f;(K==="undefined"||K==="boolean")&&(f=null);var q=!1;if(f===null)q=!0;else switch(K){case"bigint":case"string":case"number":q=!0;break;case"object":switch(f.$$typeof){case D:case se:q=!0;break;case _:return q=f._init,Me(q(f._payload),T,N,R,C)}}if(q)return C=C(f),q=R===""?"."+De(f,0):R,da(C)?(N="",q!=null&&(N=q.replace(Aa,"$&/")+"/"),Me(C,T,N,"",function(ja){return ja})):C!=null&&(Ea(C)&&(C=Ke(C,N+(C.key==null||f&&f.key===C.key?"":(""+C.key).replace(Aa,"$&/")+"/")+q)),T.push(C)),1;q=0;var Ze=R===""?".":R+":";if(da(f))for(var ie=0;ie<f.length;ie++)R=f[ie],K=Ze+De(R,ie),q+=Me(R,T,N,K,C);else if(ie=le(f),typeof ie=="function")for(f=ie.call(f),ie=0;!(R=f.next()).done;)R=R.value,K=Ze+De(R,ie++),q+=Me(R,T,N,K,C);else if(K==="object"){if(typeof f.then=="function")return Me(mt(f),T,N,R,C);throw T=String(f),Error("Objects are not valid as a React child (found: "+(T==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":T)+"). If you meant to render a collection of children, use an array instead.")}return q}function v(f,T,N){if(f==null)return f;var R=[],C=0;return Me(f,R,"","",function(K){return T.call(N,K,C++)}),R}function A(f){if(f._status===-1){var T=f._result;T=T(),T.then(function(N){(f._status===0||f._status===-1)&&(f._status=1,f._result=N)},function(N){(f._status===0||f._status===-1)&&(f._status=2,f._result=N)}),f._status===-1&&(f._status=0,f._result=T)}if(f._status===1)return f._result.default;throw f._result}var x=typeof reportError=="function"?reportError:function(f){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var T=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof f=="object"&&f!==null&&typeof f.message=="string"?String(f.message):String(f),error:f});if(!window.dispatchEvent(T))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",f);return}console.error(f)};function ae(){}return w.Children={map:v,forEach:function(f,T,N){v(f,function(){T.apply(this,arguments)},N)},count:function(f){var T=0;return v(f,function(){T++}),T},toArray:function(f){return v(f,function(T){return T})||[]},only:function(f){if(!Ea(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},w.Component=qe,w.Fragment=W,w.Profiler=H,w.PureComponent=Ra,w.StrictMode=E,w.Suspense=U,w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,w.__COMPILER_RUNTIME={__proto__:null,c:function(f){return X.H.useMemoCache(f)}},w.cache=function(f){return function(){return f.apply(null,arguments)}},w.cloneElement=function(f,T,N){if(f==null)throw Error("The argument must be a React element, but you passed "+f+".");var R=He({},f.props),C=f.key,K=void 0;if(T!=null)for(q in T.ref!==void 0&&(K=void 0),T.key!==void 0&&(C=""+T.key),T)!Ve.call(T,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&T.ref===void 0||(R[q]=T[q]);var q=arguments.length-2;if(q===1)R.children=N;else if(1<q){for(var Ze=Array(q),ie=0;ie<q;ie++)Ze[ie]=arguments[ie+2];R.children=Ze}return Xe(f.type,C,void 0,void 0,K,R)},w.createContext=function(f){return f={$$typeof:de,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null},f.Provider=f,f.Consumer={$$typeof:k,_context:f},f},w.createElement=function(f,T,N){var R,C={},K=null;if(T!=null)for(R in T.key!==void 0&&(K=""+T.key),T)Ve.call(T,R)&&R!=="key"&&R!=="__self"&&R!=="__source"&&(C[R]=T[R]);var q=arguments.length-2;if(q===1)C.children=N;else if(1<q){for(var Ze=Array(q),ie=0;ie<q;ie++)Ze[ie]=arguments[ie+2];C.children=Ze}if(f&&f.defaultProps)for(R in q=f.defaultProps,q)C[R]===void 0&&(C[R]=q[R]);return Xe(f,K,void 0,void 0,null,C)},w.createRef=function(){return{current:null}},w.forwardRef=function(f){return{$$typeof:Le,render:f}},w.isValidElement=Ea,w.lazy=function(f){return{$$typeof:_,_payload:{_status:-1,_result:f},_init:A}},w.memo=function(f,T){return{$$typeof:p,type:f,compare:T===void 0?null:T}},w.startTransition=function(f){var T=X.T,N={};X.T=N;try{var R=f(),C=X.S;C!==null&&C(N,R),typeof R=="object"&&R!==null&&typeof R.then=="function"&&R.then(ae,x)}catch(K){x(K)}finally{X.T=T}},w.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},w.use=function(f){return X.H.use(f)},w.useActionState=function(f,T,N){return X.H.useActionState(f,T,N)},w.useCallback=function(f,T){return X.H.useCallback(f,T)},w.useContext=function(f){return X.H.useContext(f)},w.useDebugValue=function(){},w.useDeferredValue=function(f,T){return X.H.useDeferredValue(f,T)},w.useEffect=function(f,T,N){var R=X.H;if(typeof N=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return R.useEffect(f,T)},w.useId=function(){return X.H.useId()},w.useImperativeHandle=function(f,T,N){return X.H.useImperativeHandle(f,T,N)},w.useInsertionEffect=function(f,T){return X.H.useInsertionEffect(f,T)},w.useLayoutEffect=function(f,T){return X.H.useLayoutEffect(f,T)},w.useMemo=function(f,T){return X.H.useMemo(f,T)},w.useOptimistic=function(f,T){return X.H.useOptimistic(f,T)},w.useReducer=function(f,T,N){return X.H.useReducer(f,T,N)},w.useRef=function(f){return X.H.useRef(f)},w.useState=function(f){return X.H.useState(f)},w.useSyncExternalStore=function(f,T,N){return X.H.useSyncExternalStore(f,T,N)},w.useTransition=function(){return X.H.useTransition()},w.version="19.1.0",w}var $r;function es(){return $r||($r=1,Wc.exports=Uh()),Wc.exports}var ud=es(),Ic={exports:{}},Sn={},Fc={exports:{}},$c={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pr;function Ch(){return Pr||(Pr=1,function(D){function se(v,A){var x=v.length;v.push(A);e:for(;0<x;){var ae=x-1>>>1,f=v[ae];if(0<H(f,A))v[ae]=A,v[x]=f,x=ae;else break e}}function W(v){return v.length===0?null:v[0]}function E(v){if(v.length===0)return null;var A=v[0],x=v.pop();if(x!==A){v[0]=x;e:for(var ae=0,f=v.length,T=f>>>1;ae<T;){var N=2*(ae+1)-1,R=v[N],C=N+1,K=v[C];if(0>H(R,x))C<f&&0>H(K,R)?(v[ae]=K,v[C]=x,ae=C):(v[ae]=R,v[N]=x,ae=N);else if(C<f&&0>H(K,x))v[ae]=K,v[C]=x,ae=C;else break e}}return A}function H(v,A){var x=v.sortIndex-A.sortIndex;return x!==0?x:v.id-A.id}if(D.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var k=performance;D.unstable_now=function(){return k.now()}}else{var de=Date,Le=de.now();D.unstable_now=function(){return de.now()-Le}}var U=[],p=[],_=1,ue=null,le=3,ze=!1,He=!1,ra=!1,qe=!1,rt=typeof setTimeout=="function"?setTimeout:null,Ra=typeof clearTimeout=="function"?clearTimeout:null,Oe=typeof setImmediate<"u"?setImmediate:null;function da(v){for(var A=W(p);A!==null;){if(A.callback===null)E(p);else if(A.startTime<=v)E(p),A.sortIndex=A.expirationTime,se(U,A);else break;A=W(p)}}function X(v){if(ra=!1,da(v),!He)if(W(U)!==null)He=!0,Ve||(Ve=!0,De());else{var A=W(p);A!==null&&Me(X,A.startTime-v)}}var Ve=!1,Xe=-1,Ke=5,Ea=-1;function Lt(){return qe?!0:!(D.unstable_now()-Ea<Ke)}function Aa(){if(qe=!1,Ve){var v=D.unstable_now();Ea=v;var A=!0;try{e:{He=!1,ra&&(ra=!1,Ra(Xe),Xe=-1),ze=!0;var x=le;try{a:{for(da(v),ue=W(U);ue!==null&&!(ue.expirationTime>v&&Lt());){var ae=ue.callback;if(typeof ae=="function"){ue.callback=null,le=ue.priorityLevel;var f=ae(ue.expirationTime<=v);if(v=D.unstable_now(),typeof f=="function"){ue.callback=f,da(v),A=!0;break a}ue===W(U)&&E(U),da(v)}else E(U);ue=W(U)}if(ue!==null)A=!0;else{var T=W(p);T!==null&&Me(X,T.startTime-v),A=!1}}break e}finally{ue=null,le=x,ze=!1}A=void 0}}finally{A?De():Ve=!1}}}var De;if(typeof Oe=="function")De=function(){Oe(Aa)};else if(typeof MessageChannel<"u"){var dt=new MessageChannel,mt=dt.port2;dt.port1.onmessage=Aa,De=function(){mt.postMessage(null)}}else De=function(){rt(Aa,0)};function Me(v,A){Xe=rt(function(){v(D.unstable_now())},A)}D.unstable_IdlePriority=5,D.unstable_ImmediatePriority=1,D.unstable_LowPriority=4,D.unstable_NormalPriority=3,D.unstable_Profiling=null,D.unstable_UserBlockingPriority=2,D.unstable_cancelCallback=function(v){v.callback=null},D.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ke=0<v?Math.floor(1e3/v):5},D.unstable_getCurrentPriorityLevel=function(){return le},D.unstable_next=function(v){switch(le){case 1:case 2:case 3:var A=3;break;default:A=le}var x=le;le=A;try{return v()}finally{le=x}},D.unstable_requestPaint=function(){qe=!0},D.unstable_runWithPriority=function(v,A){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var x=le;le=v;try{return A()}finally{le=x}},D.unstable_scheduleCallback=function(v,A,x){var ae=D.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?ae+x:ae):x=ae,v){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break;default:f=5e3}return f=x+f,v={id:_++,callback:A,priorityLevel:v,startTime:x,expirationTime:f,sortIndex:-1},x>ae?(v.sortIndex=x,se(p,v),W(U)===null&&v===W(p)&&(ra?(Ra(Xe),Xe=-1):ra=!0,Me(X,x-ae))):(v.sortIndex=f,se(U,v),He||ze||(He=!0,Ve||(Ve=!0,De()))),v},D.unstable_shouldYield=Lt,D.unstable_wrapCallback=function(v){var A=le;return function(){var x=le;le=A;try{return v.apply(this,arguments)}finally{le=x}}}}($c)),$c}var ed;function Lh(){return ed||(ed=1,Fc.exports=Ch()),Fc.exports}var Pc={exports:{}},Ce={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ad;function zh(){if(ad)return Ce;ad=1;var D=es();function se(U){var p="https://react.dev/errors/"+U;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+U+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function W(){}var E={d:{f:W,r:function(){throw Error(se(522))},D:W,C:W,L:W,m:W,X:W,S:W,M:W},p:0,findDOMNode:null},H=Symbol.for("react.portal");function k(U,p,_){var ue=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:ue==null?null:""+ue,children:U,containerInfo:p,implementation:_}}var de=D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Le(U,p){if(U==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,Ce.createPortal=function(U,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(se(299));return k(U,p,null,_)},Ce.flushSync=function(U){var p=de.T,_=E.p;try{if(de.T=null,E.p=2,U)return U()}finally{de.T=p,E.p=_,E.d.f()}},Ce.preconnect=function(U,p){typeof U=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,E.d.C(U,p))},Ce.prefetchDNS=function(U){typeof U=="string"&&E.d.D(U)},Ce.preinit=function(U,p){if(typeof U=="string"&&p&&typeof p.as=="string"){var _=p.as,ue=Le(_,p.crossOrigin),le=typeof p.integrity=="string"?p.integrity:void 0,ze=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?E.d.S(U,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:ue,integrity:le,fetchPriority:ze}):_==="script"&&E.d.X(U,{crossOrigin:ue,integrity:le,fetchPriority:ze,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ce.preinitModule=function(U,p){if(typeof U=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=Le(p.as,p.crossOrigin);E.d.M(U,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&E.d.M(U)},Ce.preload=function(U,p){if(typeof U=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,ue=Le(_,p.crossOrigin);E.d.L(U,_,{crossOrigin:ue,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ce.preloadModule=function(U,p){if(typeof U=="string")if(p){var _=Le(p.as,p.crossOrigin);E.d.m(U,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else E.d.m(U)},Ce.requestFormReset=function(U){E.d.r(U)},Ce.unstable_batchedUpdates=function(U,p){return U(p)},Ce.useFormState=function(U,p,_){return de.H.useFormState(U,p,_)},Ce.useFormStatus=function(){return de.H.useHostTransitionStatus()},Ce.version="19.1.0",Ce}var td;function Hh(){if(td)return Pc.exports;td=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(se){console.error(se)}}return D(),Pc.exports=zh(),Pc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ld;function xh(){if(ld)return Sn;ld=1;var D=Lh(),se=es(),W=Hh();function E(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function H(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function k(e){var a=e,t=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(t=a.return),e=a.return;while(e)}return a.tag===3?t:null}function de(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function Le(e){if(k(e)!==e)throw Error(E(188))}function U(e){var a=e.alternate;if(!a){if(a=k(e),a===null)throw Error(E(188));return a!==e?null:e}for(var t=e,l=a;;){var n=t.return;if(n===null)break;var u=n.alternate;if(u===null){if(l=n.return,l!==null){t=l;continue}break}if(n.child===u.child){for(u=n.child;u;){if(u===t)return Le(n),e;if(u===l)return Le(n),a;u=u.sibling}throw Error(E(188))}if(t.return!==l.return)t=n,l=u;else{for(var i=!1,c=n.child;c;){if(c===t){i=!0,t=n,l=u;break}if(c===l){i=!0,l=n,t=u;break}c=c.sibling}if(!i){for(c=u.child;c;){if(c===t){i=!0,t=u,l=n;break}if(c===l){i=!0,l=u,t=n;break}c=c.sibling}if(!i)throw Error(E(189))}}if(t.alternate!==l)throw Error(E(190))}if(t.tag!==3)throw Error(E(188));return t.stateNode.current===t?e:a}function p(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=p(e),a!==null)return a;e=e.sibling}return null}var _=Object.assign,ue=Symbol.for("react.element"),le=Symbol.for("react.transitional.element"),ze=Symbol.for("react.portal"),He=Symbol.for("react.fragment"),ra=Symbol.for("react.strict_mode"),qe=Symbol.for("react.profiler"),rt=Symbol.for("react.provider"),Ra=Symbol.for("react.consumer"),Oe=Symbol.for("react.context"),da=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),Ke=Symbol.for("react.lazy"),Ea=Symbol.for("react.activity"),Lt=Symbol.for("react.memo_cache_sentinel"),Aa=Symbol.iterator;function De(e){return e===null||typeof e!="object"?null:(e=Aa&&e[Aa]||e["@@iterator"],typeof e=="function"?e:null)}var dt=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===dt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case He:return"Fragment";case qe:return"Profiler";case ra:return"StrictMode";case X:return"Suspense";case Ve:return"SuspenseList";case Ea:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case ze:return"Portal";case Oe:return(e.displayName||"Context")+".Provider";case Ra:return(e._context.displayName||"Context")+".Consumer";case da:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return a=e.displayName||null,a!==null?a:mt(e.type)||"Memo";case Ke:a=e._payload,e=e._init;try{return mt(e(a))}catch{}}return null}var Me=Array.isArray,v=se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,A=W.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x={pending:!1,data:null,method:null,action:null},ae=[],f=-1;function T(e){return{current:e}}function N(e){0>f||(e.current=ae[f],ae[f]=null,f--)}function R(e,a){f++,ae[f]=e.current,e.current=a}var C=T(null),K=T(null),q=T(null),Ze=T(null);function ie(e,a){switch(R(q,a),R(K,e),R(C,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Rr(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Rr(a),e=Ar(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}N(C),R(C,e)}function ja(){N(C),N(K),N(q)}function zu(e){e.memoizedState!==null&&R(Ze,e);var a=C.current,t=Ar(a,e.type);a!==t&&(R(K,e),R(C,t))}function vn(e){K.current===e&&(N(C),N(K)),Ze.current===e&&(N(Ze),rn._currentValue=x)}var Hu=Object.prototype.hasOwnProperty,xu=D.unstable_scheduleCallback,Bu=D.unstable_cancelCallback,id=D.unstable_shouldYield,cd=D.unstable_requestPaint,Sa=D.unstable_now,sd=D.unstable_getCurrentPriorityLevel,as=D.unstable_ImmediatePriority,ts=D.unstable_UserBlockingPriority,gn=D.unstable_NormalPriority,fd=D.unstable_LowPriority,ls=D.unstable_IdlePriority,od=D.log,rd=D.unstable_setDisableYieldValue,vl=null,ke=null;function Qa(e){if(typeof od=="function"&&rd(e),ke&&typeof ke.setStrictMode=="function")try{ke.setStrictMode(vl,e)}catch{}}var Je=Math.clz32?Math.clz32:hd,dd=Math.log,md=Math.LN2;function hd(e){return e>>>=0,e===0?32:31-(dd(e)/md|0)|0}var bn=256,Tn=4194304;function ht(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pn(e,a,t){var l=e.pendingLanes;if(l===0)return 0;var n=0,u=e.suspendedLanes,i=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~u,l!==0?n=ht(l):(i&=c,i!==0?n=ht(i):t||(t=c&~e,t!==0&&(n=ht(t))))):(c=l&~u,c!==0?n=ht(c):i!==0?n=ht(i):t||(t=l&~e,t!==0&&(n=ht(t)))),n===0?0:a!==0&&a!==n&&(a&u)===0&&(u=n&-n,t=a&-a,u>=t||u===32&&(t&4194048)!==0)?a:n}function gl(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function yd(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(){var e=bn;return bn<<=1,(bn&4194048)===0&&(bn=256),e}function us(){var e=Tn;return Tn<<=1,(Tn&62914560)===0&&(Tn=4194304),e}function qu(e){for(var a=[],t=0;31>t;t++)a.push(e);return a}function bl(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ed(e,a,t,l,n,u){var i=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,s=e.expirationTimes,m=e.hiddenUpdates;for(t=i&~t;0<t;){var S=31-Je(t),b=1<<S;c[S]=0,s[S]=-1;var h=m[S];if(h!==null)for(m[S]=null,S=0;S<h.length;S++){var y=h[S];y!==null&&(y.lane&=-536870913)}t&=~b}l!==0&&is(e,l,0),u!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=u&~(i&~a))}function is(e,a,t){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-Je(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|t&4194090}function cs(e,a){var t=e.entangledLanes|=a;for(e=e.entanglements;t;){var l=31-Je(t),n=1<<l;n&a|e[l]&a&&(e[l]|=a),t&=~n}}function wu(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Yu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ss(){var e=A.p;return e!==0?e:(e=window.event,e===void 0?32:Vr(e.type))}function Sd(e,a){var t=A.p;try{return A.p=e,a()}finally{A.p=t}}var Ga=Math.random().toString(36).slice(2),_e="__reactFiber$"+Ga,we="__reactProps$"+Ga,zt="__reactContainer$"+Ga,ju="__reactEvents$"+Ga,vd="__reactListeners$"+Ga,gd="__reactHandles$"+Ga,fs="__reactResources$"+Ga,Tl="__reactMarker$"+Ga;function Qu(e){delete e[_e],delete e[we],delete e[ju],delete e[vd],delete e[gd]}function Ht(e){var a=e[_e];if(a)return a;for(var t=e.parentNode;t;){if(a=t[zt]||t[_e]){if(t=a.alternate,a.child!==null||t!==null&&t.child!==null)for(e=Mr(e);e!==null;){if(t=e[_e])return t;e=Mr(e)}return a}e=t,t=e.parentNode}return null}function xt(e){if(e=e[_e]||e[zt]){var a=e.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return e}return null}function pl(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(E(33))}function Bt(e){var a=e[fs];return a||(a=e[fs]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ge(e){e[Tl]=!0}var os=new Set,rs={};function yt(e,a){qt(e,a),qt(e+"Capture",a)}function qt(e,a){for(rs[e]=a,e=0;e<a.length;e++)os.add(a[e])}var bd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ds={},ms={};function Td(e){return Hu.call(ms,e)?!0:Hu.call(ds,e)?!1:bd.test(e)?ms[e]=!0:(ds[e]=!0,!1)}function Rn(e,a,t){if(Td(a))if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+t)}}function An(e,a,t){if(t===null)e.removeAttribute(a);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+t)}}function Na(e,a,t,l){if(l===null)e.removeAttribute(t);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(a,t,""+l)}}var Gu,hs;function wt(e){if(Gu===void 0)try{throw Error()}catch(t){var a=t.stack.trim().match(/\n( *(at )?)/);Gu=a&&a[1]||"",hs=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gu+e+hs}var Vu=!1;function Xu(e,a){if(!e||Vu)return"";Vu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var b=function(){throw Error()};if(Object.defineProperty(b.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(b,[])}catch(y){var h=y}Reflect.construct(e,[],b)}else{try{b.call()}catch(y){h=y}e.call(b.prototype)}}else{try{throw Error()}catch(y){h=y}(b=e())&&typeof b.catch=="function"&&b.catch(function(){})}}catch(y){if(y&&h&&typeof y.stack=="string")return[y.stack,h.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=l.DetermineComponentFrameRoot(),i=u[0],c=u[1];if(i&&c){var s=i.split(`
`),m=c.split(`
`);for(n=l=0;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;for(;n<m.length&&!m[n].includes("DetermineComponentFrameRoot");)n++;if(l===s.length||n===m.length)for(l=s.length-1,n=m.length-1;1<=l&&0<=n&&s[l]!==m[n];)n--;for(;1<=l&&0<=n;l--,n--)if(s[l]!==m[n]){if(l!==1||n!==1)do if(l--,n--,0>n||s[l]!==m[n]){var S=`
`+s[l].replace(" at new "," at ");return e.displayName&&S.includes("<anonymous>")&&(S=S.replace("<anonymous>",e.displayName)),S}while(1<=l&&0<=n);break}}}finally{Vu=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?wt(t):""}function pd(e){switch(e.tag){case 26:case 27:case 5:return wt(e.type);case 16:return wt("Lazy");case 13:return wt("Suspense");case 19:return wt("SuspenseList");case 0:case 15:return Xu(e.type,!1);case 11:return Xu(e.type.render,!1);case 1:return Xu(e.type,!0);case 31:return wt("Activity");default:return""}}function ys(e){try{var a="";do a+=pd(e),e=e.return;while(e);return a}catch(t){return`
Error generating stack: `+t.message+`
`+t.stack}}function ta(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Es(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Rd(e){var a=Es(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,a),l=""+e[a];if(!e.hasOwnProperty(a)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var n=t.get,u=t.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return n.call(this)},set:function(i){l=""+i,u.call(this,i)}}),Object.defineProperty(e,a,{enumerable:t.enumerable}),{getValue:function(){return l},setValue:function(i){l=""+i},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Nn(e){e._valueTracker||(e._valueTracker=Rd(e))}function Ss(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var t=a.getValue(),l="";return e&&(l=Es(e)?e.checked?"true":"false":e.value),e=l,e!==t?(a.setValue(e),!0):!1}function On(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ad=/[\n"\\]/g;function la(e){return e.replace(Ad,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ku(e,a,t,l,n,u,i,c){e.name="",i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"?e.type=i:e.removeAttribute("type"),a!=null?i==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ta(a)):e.value!==""+ta(a)&&(e.value=""+ta(a)):i!=="submit"&&i!=="reset"||e.removeAttribute("value"),a!=null?Zu(e,i,ta(a)):t!=null?Zu(e,i,ta(t)):l!=null&&e.removeAttribute("value"),n==null&&u!=null&&(e.defaultChecked=!!u),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+ta(c):e.removeAttribute("name")}function vs(e,a,t,l,n,u,i,c){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),a!=null||t!=null){if(!(u!=="submit"&&u!=="reset"||a!=null))return;t=t!=null?""+ta(t):"",a=a!=null?""+ta(a):t,c||a===e.value||(e.value=a),e.defaultValue=a}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.name=i)}function Zu(e,a,t){a==="number"&&On(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function Yt(e,a,t,l){if(e=e.options,a){a={};for(var n=0;n<t.length;n++)a["$"+t[n]]=!0;for(t=0;t<e.length;t++)n=a.hasOwnProperty("$"+e[t].value),e[t].selected!==n&&(e[t].selected=n),n&&l&&(e[t].defaultSelected=!0)}else{for(t=""+ta(t),a=null,n=0;n<e.length;n++){if(e[n].value===t){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}a!==null||e[n].disabled||(a=e[n])}a!==null&&(a.selected=!0)}}function gs(e,a,t){if(a!=null&&(a=""+ta(a),a!==e.value&&(e.value=a),t==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=t!=null?""+ta(t):""}function bs(e,a,t,l){if(a==null){if(l!=null){if(t!=null)throw Error(E(92));if(Me(l)){if(1<l.length)throw Error(E(93));l=l[0]}t=l}t==null&&(t=""),a=t}t=ta(a),e.defaultValue=t,l=e.textContent,l===t&&l!==""&&l!==null&&(e.value=l)}function jt(e,a){if(a){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=a;return}}e.textContent=a}var Nd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ts(e,a,t){var l=a.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,t):typeof t!="number"||t===0||Nd.has(a)?a==="float"?e.cssFloat=t:e[a]=(""+t).trim():e[a]=t+"px"}function ps(e,a,t){if(a!=null&&typeof a!="object")throw Error(E(62));if(e=e.style,t!=null){for(var l in t)!t.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in a)l=a[n],a.hasOwnProperty(n)&&t[n]!==l&&Ts(e,n,l)}else for(var u in a)a.hasOwnProperty(u)&&Ts(e,u,a[u])}function ku(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Dd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dn(e){return Dd.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ju=null;function Wu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qt=null,Gt=null;function Rs(e){var a=xt(e);if(a&&(e=a.stateNode)){var t=e[we]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ku(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),a=t.name,t.type==="radio"&&a!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+la(""+a)+'"][type="radio"]'),a=0;a<t.length;a++){var l=t[a];if(l!==e&&l.form===e.form){var n=l[we]||null;if(!n)throw Error(E(90));Ku(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(a=0;a<t.length;a++)l=t[a],l.form===e.form&&Ss(l)}break e;case"textarea":gs(e,t.value,t.defaultValue);break e;case"select":a=t.value,a!=null&&Yt(e,!!t.multiple,a,!1)}}}var Iu=!1;function As(e,a,t){if(Iu)return e(a,t);Iu=!0;try{var l=e(a);return l}finally{if(Iu=!1,(Qt!==null||Gt!==null)&&(du(),Qt&&(a=Qt,e=Gt,Gt=Qt=null,Rs(a),e)))for(a=0;a<e.length;a++)Rs(e[a])}}function Rl(e,a){var t=e.stateNode;if(t===null)return null;var l=t[we]||null;if(l===null)return null;t=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(E(231,a,typeof t));return t}var Oa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fu=!1;if(Oa)try{var Al={};Object.defineProperty(Al,"passive",{get:function(){Fu=!0}}),window.addEventListener("test",Al,Al),window.removeEventListener("test",Al,Al)}catch{Fu=!1}var Va=null,$u=null,Mn=null;function Ns(){if(Mn)return Mn;var e,a=$u,t=a.length,l,n="value"in Va?Va.value:Va.textContent,u=n.length;for(e=0;e<t&&a[e]===n[e];e++);var i=t-e;for(l=1;l<=i&&a[t-l]===n[u-l];l++);return Mn=n.slice(e,1<l?1-l:void 0)}function _n(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function Un(){return!0}function Os(){return!1}function Ye(e){function a(t,l,n,u,i){this._reactName=t,this._targetInst=n,this.type=l,this.nativeEvent=u,this.target=i,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(u):u[c]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Un:Os,this.isPropagationStopped=Os,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Un)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Un)},persist:function(){},isPersistent:Un}),a}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cn=Ye(Et),Nl=_({},Et,{view:0,detail:0}),Md=Ye(Nl),Pu,ei,Ol,Ln=_({},Nl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ti,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ol&&(Ol&&e.type==="mousemove"?(Pu=e.screenX-Ol.screenX,ei=e.screenY-Ol.screenY):ei=Pu=0,Ol=e),Pu)},movementY:function(e){return"movementY"in e?e.movementY:ei}}),Ds=Ye(Ln),_d=_({},Ln,{dataTransfer:0}),Ud=Ye(_d),Cd=_({},Nl,{relatedTarget:0}),ai=Ye(Cd),Ld=_({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),zd=Ye(Ld),Hd=_({},Et,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xd=Ye(Hd),Bd=_({},Et,{data:0}),Ms=Ye(Bd),qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jd(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Yd[e])?!!a[e]:!1}function ti(){return jd}var Qd=_({},Nl,{key:function(e){if(e.key){var a=qd[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=_n(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ti,charCode:function(e){return e.type==="keypress"?_n(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_n(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Gd=Ye(Qd),Vd=_({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_s=Ye(Vd),Xd=_({},Nl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ti}),Kd=Ye(Xd),Zd=_({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),kd=Ye(Zd),Jd=_({},Ln,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Wd=Ye(Jd),Id=_({},Et,{newState:0,oldState:0}),Fd=Ye(Id),$d=[9,13,27,32],li=Oa&&"CompositionEvent"in window,Dl=null;Oa&&"documentMode"in document&&(Dl=document.documentMode);var Pd=Oa&&"TextEvent"in window&&!Dl,Us=Oa&&(!li||Dl&&8<Dl&&11>=Dl),Cs=" ",Ls=!1;function zs(e,a){switch(e){case"keyup":return $d.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function em(e,a){switch(e){case"compositionend":return Hs(a);case"keypress":return a.which!==32?null:(Ls=!0,Cs);case"textInput":return e=a.data,e===Cs&&Ls?null:e;default:return null}}function am(e,a){if(Vt)return e==="compositionend"||!li&&zs(e,a)?(e=Ns(),Mn=$u=Va=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Us&&a.locale!=="ko"?null:a.data;default:return null}}var tm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xs(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!tm[e.type]:a==="textarea"}function Bs(e,a,t,l){Qt?Gt?Gt.push(l):Gt=[l]:Qt=l,a=vu(a,"onChange"),0<a.length&&(t=new Cn("onChange","change",null,t,l),e.push({event:t,listeners:a}))}var Ml=null,_l=null;function lm(e){vr(e,0)}function zn(e){var a=pl(e);if(Ss(a))return e}function qs(e,a){if(e==="change")return a}var ws=!1;if(Oa){var ni;if(Oa){var ui="oninput"in document;if(!ui){var Ys=document.createElement("div");Ys.setAttribute("oninput","return;"),ui=typeof Ys.oninput=="function"}ni=ui}else ni=!1;ws=ni&&(!document.documentMode||9<document.documentMode)}function js(){Ml&&(Ml.detachEvent("onpropertychange",Qs),_l=Ml=null)}function Qs(e){if(e.propertyName==="value"&&zn(_l)){var a=[];Bs(a,_l,e,Wu(e)),As(lm,a)}}function nm(e,a,t){e==="focusin"?(js(),Ml=a,_l=t,Ml.attachEvent("onpropertychange",Qs)):e==="focusout"&&js()}function um(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zn(_l)}function im(e,a){if(e==="click")return zn(a)}function cm(e,a){if(e==="input"||e==="change")return zn(a)}function sm(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var We=typeof Object.is=="function"?Object.is:sm;function Ul(e,a){if(We(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var t=Object.keys(e),l=Object.keys(a);if(t.length!==l.length)return!1;for(l=0;l<t.length;l++){var n=t[l];if(!Hu.call(a,n)||!We(e[n],a[n]))return!1}return!0}function Gs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vs(e,a){var t=Gs(e);e=0;for(var l;t;){if(t.nodeType===3){if(l=e+t.textContent.length,e<=a&&l>=a)return{node:t,offset:a-e};e=l}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Gs(t)}}function Xs(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?Xs(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Ks(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=On(e.document);a instanceof e.HTMLIFrameElement;){try{var t=typeof a.contentWindow.location.href=="string"}catch{t=!1}if(t)e=a.contentWindow;else break;a=On(e.document)}return a}function ii(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var fm=Oa&&"documentMode"in document&&11>=document.documentMode,Xt=null,ci=null,Cl=null,si=!1;function Zs(e,a,t){var l=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;si||Xt==null||Xt!==On(l)||(l=Xt,"selectionStart"in l&&ii(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Cl&&Ul(Cl,l)||(Cl=l,l=vu(ci,"onSelect"),0<l.length&&(a=new Cn("onSelect","select",null,a,t),e.push({event:a,listeners:l}),a.target=Xt)))}function St(e,a){var t={};return t[e.toLowerCase()]=a.toLowerCase(),t["Webkit"+e]="webkit"+a,t["Moz"+e]="moz"+a,t}var Kt={animationend:St("Animation","AnimationEnd"),animationiteration:St("Animation","AnimationIteration"),animationstart:St("Animation","AnimationStart"),transitionrun:St("Transition","TransitionRun"),transitionstart:St("Transition","TransitionStart"),transitioncancel:St("Transition","TransitionCancel"),transitionend:St("Transition","TransitionEnd")},fi={},ks={};Oa&&(ks=document.createElement("div").style,"AnimationEvent"in window||(delete Kt.animationend.animation,delete Kt.animationiteration.animation,delete Kt.animationstart.animation),"TransitionEvent"in window||delete Kt.transitionend.transition);function vt(e){if(fi[e])return fi[e];if(!Kt[e])return e;var a=Kt[e],t;for(t in a)if(a.hasOwnProperty(t)&&t in ks)return fi[e]=a[t];return e}var Js=vt("animationend"),Ws=vt("animationiteration"),Is=vt("animationstart"),om=vt("transitionrun"),rm=vt("transitionstart"),dm=vt("transitioncancel"),Fs=vt("transitionend"),$s=new Map,oi="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");oi.push("scrollEnd");function ma(e,a){$s.set(e,a),yt(a,[e])}var Ps=new WeakMap;function na(e,a){if(typeof e=="object"&&e!==null){var t=Ps.get(e);return t!==void 0?t:(a={value:e,source:a,stack:ys(a)},Ps.set(e,a),a)}return{value:e,source:a,stack:ys(a)}}var ua=[],Zt=0,ri=0;function Hn(){for(var e=Zt,a=ri=Zt=0;a<e;){var t=ua[a];ua[a++]=null;var l=ua[a];ua[a++]=null;var n=ua[a];ua[a++]=null;var u=ua[a];if(ua[a++]=null,l!==null&&n!==null){var i=l.pending;i===null?n.next=n:(n.next=i.next,i.next=n),l.pending=n}u!==0&&ef(t,n,u)}}function xn(e,a,t,l){ua[Zt++]=e,ua[Zt++]=a,ua[Zt++]=t,ua[Zt++]=l,ri|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function di(e,a,t,l){return xn(e,a,t,l),Bn(e)}function kt(e,a){return xn(e,null,null,a),Bn(e)}function ef(e,a,t){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t);for(var n=!1,u=e.return;u!==null;)u.childLanes|=t,l=u.alternate,l!==null&&(l.childLanes|=t),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(n=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,n&&a!==null&&(n=31-Je(t),e=u.hiddenUpdates,l=e[n],l===null?e[n]=[a]:l.push(a),a.lane=t|536870912),u):null}function Bn(e){if(50<tn)throw tn=0,vc=null,Error(E(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Jt={};function mm(e,a,t,l){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,a,t,l){return new mm(e,a,t,l)}function mi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Da(e,a){var t=e.alternate;return t===null?(t=Ie(e.tag,a,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=a,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,a=e.dependencies,t.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function af(e,a){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,a=t.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function qn(e,a,t,l,n,u){var i=0;if(l=e,typeof e=="function")mi(e)&&(i=1);else if(typeof e=="string")i=yh(e,t,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ea:return e=Ie(31,t,a,n),e.elementType=Ea,e.lanes=u,e;case He:return gt(t.children,n,u,a);case ra:i=8,n|=24;break;case qe:return e=Ie(12,t,a,n|2),e.elementType=qe,e.lanes=u,e;case X:return e=Ie(13,t,a,n),e.elementType=X,e.lanes=u,e;case Ve:return e=Ie(19,t,a,n),e.elementType=Ve,e.lanes=u,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rt:case Oe:i=10;break e;case Ra:i=9;break e;case da:i=11;break e;case Xe:i=14;break e;case Ke:i=16,l=null;break e}i=29,t=Error(E(130,e===null?"null":typeof e,"")),l=null}return a=Ie(i,t,a,n),a.elementType=e,a.type=l,a.lanes=u,a}function gt(e,a,t,l){return e=Ie(7,e,l,a),e.lanes=t,e}function hi(e,a,t){return e=Ie(6,e,null,a),e.lanes=t,e}function yi(e,a,t){return a=Ie(4,e.children!==null?e.children:[],e.key,a),a.lanes=t,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Wt=[],It=0,wn=null,Yn=0,ia=[],ca=0,bt=null,Ma=1,_a="";function Tt(e,a){Wt[It++]=Yn,Wt[It++]=wn,wn=e,Yn=a}function tf(e,a,t){ia[ca++]=Ma,ia[ca++]=_a,ia[ca++]=bt,bt=e;var l=Ma;e=_a;var n=32-Je(l)-1;l&=~(1<<n),t+=1;var u=32-Je(a)+n;if(30<u){var i=n-n%5;u=(l&(1<<i)-1).toString(32),l>>=i,n-=i,Ma=1<<32-Je(a)+n|t<<n|l,_a=u+e}else Ma=1<<u|t<<n|l,_a=e}function Ei(e){e.return!==null&&(Tt(e,1),tf(e,1,0))}function Si(e){for(;e===wn;)wn=Wt[--It],Wt[It]=null,Yn=Wt[--It],Wt[It]=null;for(;e===bt;)bt=ia[--ca],ia[ca]=null,_a=ia[--ca],ia[ca]=null,Ma=ia[--ca],ia[ca]=null}var xe=null,oe=null,J=!1,pt=null,va=!1,vi=Error(E(519));function Rt(e){var a=Error(E(418,""));throw Hl(na(a,e)),vi}function lf(e){var a=e.stateNode,t=e.type,l=e.memoizedProps;switch(a[_e]=e,a[we]=l,t){case"dialog":G("cancel",a),G("close",a);break;case"iframe":case"object":case"embed":G("load",a);break;case"video":case"audio":for(t=0;t<nn.length;t++)G(nn[t],a);break;case"source":G("error",a);break;case"img":case"image":case"link":G("error",a),G("load",a);break;case"details":G("toggle",a);break;case"input":G("invalid",a),vs(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Nn(a);break;case"select":G("invalid",a);break;case"textarea":G("invalid",a),bs(a,l.value,l.defaultValue,l.children),Nn(a)}t=l.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||a.textContent===""+t||l.suppressHydrationWarning===!0||pr(a.textContent,t)?(l.popover!=null&&(G("beforetoggle",a),G("toggle",a)),l.onScroll!=null&&G("scroll",a),l.onScrollEnd!=null&&G("scrollend",a),l.onClick!=null&&(a.onclick=gu),a=!0):a=!1,a||Rt(e)}function nf(e){for(xe=e.return;xe;)switch(xe.tag){case 5:case 13:va=!1;return;case 27:case 3:va=!0;return;default:xe=xe.return}}function Ll(e){if(e!==xe)return!1;if(!J)return nf(e),J=!0,!1;var a=e.tag,t;if((t=a!==3&&a!==27)&&((t=a===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Hc(e.type,e.memoizedProps)),t=!t),t&&oe&&Rt(e),nf(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(E(317));e:{for(e=e.nextSibling,a=0;e;){if(e.nodeType===8)if(t=e.data,t==="/$"){if(a===0){oe=ya(e.nextSibling);break e}a--}else t!=="$"&&t!=="$!"&&t!=="$?"||a++;e=e.nextSibling}oe=null}}else a===27?(a=oe,ut(e.type)?(e=wc,wc=null,oe=e):oe=a):oe=xe?ya(e.stateNode.nextSibling):null;return!0}function zl(){oe=xe=null,J=!1}function uf(){var e=pt;return e!==null&&(Ge===null?Ge=e:Ge.push.apply(Ge,e),pt=null),e}function Hl(e){pt===null?pt=[e]:pt.push(e)}var gi=T(null),At=null,Ua=null;function Xa(e,a,t){R(gi,a._currentValue),a._currentValue=t}function Ca(e){e._currentValue=gi.current,N(gi)}function bi(e,a,t){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===t)break;e=e.return}}function Ti(e,a,t,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var u=n.dependencies;if(u!==null){var i=n.child;u=u.firstContext;e:for(;u!==null;){var c=u;u=n;for(var s=0;s<a.length;s++)if(c.context===a[s]){u.lanes|=t,c=u.alternate,c!==null&&(c.lanes|=t),bi(u.return,t,e),l||(i=null);break e}u=c.next}}else if(n.tag===18){if(i=n.return,i===null)throw Error(E(341));i.lanes|=t,u=i.alternate,u!==null&&(u.lanes|=t),bi(i,t,e),i=null}else i=n.child;if(i!==null)i.return=n;else for(i=n;i!==null;){if(i===e){i=null;break}if(n=i.sibling,n!==null){n.return=i.return,i=n;break}i=i.return}n=i}}function xl(e,a,t,l){e=null;for(var n=a,u=!1;n!==null;){if(!u){if((n.flags&524288)!==0)u=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var i=n.alternate;if(i===null)throw Error(E(387));if(i=i.memoizedProps,i!==null){var c=n.type;We(n.pendingProps.value,i.value)||(e!==null?e.push(c):e=[c])}}else if(n===Ze.current){if(i=n.alternate,i===null)throw Error(E(387));i.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(rn):e=[rn])}n=n.return}e!==null&&Ti(a,e,t,l),a.flags|=262144}function jn(e){for(e=e.firstContext;e!==null;){if(!We(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Nt(e){At=e,Ua=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ue(e){return cf(At,e)}function Qn(e,a){return At===null&&Nt(e),cf(e,a)}function cf(e,a){var t=a._currentValue;if(a={context:a,memoizedValue:t,next:null},Ua===null){if(e===null)throw Error(E(308));Ua=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ua=Ua.next=a;return t}var hm=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(t,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(t){return t()})}},ym=D.unstable_scheduleCallback,Em=D.unstable_NormalPriority,Se={$$typeof:Oe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function pi(){return{controller:new hm,data:new Map,refCount:0}}function Bl(e){e.refCount--,e.refCount===0&&ym(Em,function(){e.controller.abort()})}var ql=null,Ri=0,Ft=0,$t=null;function Sm(e,a){if(ql===null){var t=ql=[];Ri=0,Ft=Nc(),$t={status:"pending",value:void 0,then:function(l){t.push(l)}}}return Ri++,a.then(sf,sf),a}function sf(){if(--Ri===0&&ql!==null){$t!==null&&($t.status="fulfilled");var e=ql;ql=null,Ft=0,$t=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function vm(e,a){var t=[],l={status:"pending",value:null,reason:null,then:function(n){t.push(n)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var n=0;n<t.length;n++)(0,t[n])(a)},function(n){for(l.status="rejected",l.reason=n,n=0;n<t.length;n++)(0,t[n])(void 0)}),l}var ff=v.S;v.S=function(e,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&Sm(e,a),ff!==null&&ff(e,a)};var Ot=T(null);function Ai(){var e=Ot.current;return e!==null?e:ne.pooledCache}function Gn(e,a){a===null?R(Ot,Ot.current):R(Ot,a.pool)}function of(){var e=Ai();return e===null?null:{parent:Se._currentValue,pool:e}}var wl=Error(E(460)),rf=Error(E(474)),Vn=Error(E(542)),Ni={then:function(){}};function df(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Xn(){}function mf(e,a,t){switch(t=e[t],t===void 0?e.push(a):t!==a&&(a.then(Xn,Xn),a=t),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yf(e),e;default:if(typeof a.status=="string")a.then(Xn,Xn);else{if(e=ne,e!==null&&100<e.shellSuspendCounter)throw Error(E(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var n=a;n.status="fulfilled",n.value=l}},function(l){if(a.status==="pending"){var n=a;n.status="rejected",n.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,yf(e),e}throw Yl=a,wl}}var Yl=null;function hf(){if(Yl===null)throw Error(E(459));var e=Yl;return Yl=null,e}function yf(e){if(e===wl||e===Vn)throw Error(E(483))}var Ka=!1;function Oi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Di(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,a,t){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(I&2)!==0){var n=l.pending;return n===null?a.next=a:(a.next=n.next,n.next=a),l.pending=a,a=Bn(e),ef(e,null,t),a}return xn(e,l,a,t),Bn(e)}function jl(e,a,t){if(a=a.updateQueue,a!==null&&(a=a.shared,(t&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,cs(e,t)}}function Mi(e,a){var t=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,t===l)){var n=null,u=null;if(t=t.firstBaseUpdate,t!==null){do{var i={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};u===null?n=u=i:u=u.next=i,t=t.next}while(t!==null);u===null?n=u=a:u=u.next=a}else n=u=a;t={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:u,shared:l.shared,callbacks:l.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=a:e.next=a,t.lastBaseUpdate=a}var _i=!1;function Ql(){if(_i){var e=$t;if(e!==null)throw e}}function Gl(e,a,t,l){_i=!1;var n=e.updateQueue;Ka=!1;var u=n.firstBaseUpdate,i=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var s=c,m=s.next;s.next=null,i===null?u=m:i.next=m,i=s;var S=e.alternate;S!==null&&(S=S.updateQueue,c=S.lastBaseUpdate,c!==i&&(c===null?S.firstBaseUpdate=m:c.next=m,S.lastBaseUpdate=s))}if(u!==null){var b=n.baseState;i=0,S=m=s=null,c=u;do{var h=c.lane&-536870913,y=h!==c.lane;if(y?(V&h)===h:(l&h)===h){h!==0&&h===Ft&&(_i=!0),S!==null&&(S=S.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var B=e,L=c;h=a;var ee=t;switch(L.tag){case 1:if(B=L.payload,typeof B=="function"){b=B.call(ee,b,h);break e}b=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=L.payload,h=typeof B=="function"?B.call(ee,b,h):B,h==null)break e;b=_({},b,h);break e;case 2:Ka=!0}}h=c.callback,h!==null&&(e.flags|=64,y&&(e.flags|=8192),y=n.callbacks,y===null?n.callbacks=[h]:y.push(h))}else y={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},S===null?(m=S=y,s=b):S=S.next=y,i|=h;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;y=c,c=y.next,y.next=null,n.lastBaseUpdate=y,n.shared.pending=null}}while(!0);S===null&&(s=b),n.baseState=s,n.firstBaseUpdate=m,n.lastBaseUpdate=S,u===null&&(n.shared.lanes=0),at|=i,e.lanes=i,e.memoizedState=b}}function Ef(e,a){if(typeof e!="function")throw Error(E(191,e));e.call(a)}function Sf(e,a){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Ef(t[e],a)}var Pt=T(null),Kn=T(0);function vf(e,a){e=wa,R(Kn,e),R(Pt,a),wa=e|a.baseLanes}function Ui(){R(Kn,wa),R(Pt,Pt.current)}function Ci(){wa=Kn.current,N(Pt),N(Kn)}var Ja=0,Y=null,$=null,ye=null,Zn=!1,el=!1,Dt=!1,kn=0,Vl=0,al=null,gm=0;function me(){throw Error(E(321))}function Li(e,a){if(a===null)return!1;for(var t=0;t<a.length&&t<e.length;t++)if(!We(e[t],a[t]))return!1;return!0}function zi(e,a,t,l,n,u){return Ja=u,Y=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,v.H=e===null||e.memoizedState===null?ao:to,Dt=!1,u=t(l,n),Dt=!1,el&&(u=bf(a,t,l,n)),gf(e),u}function gf(e){v.H=Pn;var a=$!==null&&$.next!==null;if(Ja=0,ye=$=Y=null,Zn=!1,Vl=0,al=null,a)throw Error(E(300));e===null||be||(e=e.dependencies,e!==null&&jn(e)&&(be=!0))}function bf(e,a,t,l){Y=e;var n=0;do{if(el&&(al=null),Vl=0,el=!1,25<=n)throw Error(E(301));if(n+=1,ye=$=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}v.H=Om,u=a(t,l)}while(el);return u}function bm(){var e=v.H,a=e.useState()[0];return a=typeof a.then=="function"?Xl(a):a,e=e.useState()[0],($!==null?$.memoizedState:null)!==e&&(Y.flags|=1024),a}function Hi(){var e=kn!==0;return kn=0,e}function xi(e,a,t){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~t}function Bi(e){if(Zn){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Zn=!1}Ja=0,ye=$=Y=null,el=!1,Vl=kn=0,al=null}function je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ye===null?Y.memoizedState=ye=e:ye=ye.next=e,ye}function Ee(){if($===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=$.next;var a=ye===null?Y.memoizedState:ye.next;if(a!==null)ye=a,$=e;else{if(e===null)throw Y.alternate===null?Error(E(467)):Error(E(310));$=e,e={memoizedState:$.memoizedState,baseState:$.baseState,baseQueue:$.baseQueue,queue:$.queue,next:null},ye===null?Y.memoizedState=ye=e:ye=ye.next=e}return ye}function qi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xl(e){var a=Vl;return Vl+=1,al===null&&(al=[]),e=mf(al,e,a),a=Y,(ye===null?a.memoizedState:ye.next)===null&&(a=a.alternate,v.H=a===null||a.memoizedState===null?ao:to),e}function Jn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Xl(e);if(e.$$typeof===Oe)return Ue(e)}throw Error(E(438,String(e)))}function wi(e){var a=null,t=Y.updateQueue;if(t!==null&&(a=t.memoCache),a==null){var l=Y.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(n){return n.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),t===null&&(t=qi(),Y.updateQueue=t),t.memoCache=a,t=a.data[a.index],t===void 0)for(t=a.data[a.index]=Array(e),l=0;l<e;l++)t[l]=Lt;return a.index++,t}function La(e,a){return typeof a=="function"?a(e):a}function Wn(e){var a=Ee();return Yi(a,$,e)}function Yi(e,a,t){var l=e.queue;if(l===null)throw Error(E(311));l.lastRenderedReducer=t;var n=e.baseQueue,u=l.pending;if(u!==null){if(n!==null){var i=n.next;n.next=u.next,u.next=i}a.baseQueue=n=u,l.pending=null}if(u=e.baseState,n===null)e.memoizedState=u;else{a=n.next;var c=i=null,s=null,m=a,S=!1;do{var b=m.lane&-536870913;if(b!==m.lane?(V&b)===b:(Ja&b)===b){var h=m.revertLane;if(h===0)s!==null&&(s=s.next={lane:0,revertLane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),b===Ft&&(S=!0);else if((Ja&h)===h){m=m.next,h===Ft&&(S=!0);continue}else b={lane:0,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=b,i=u):s=s.next=b,Y.lanes|=h,at|=h;b=m.action,Dt&&t(u,b),u=m.hasEagerState?m.eagerState:t(u,b)}else h={lane:b,revertLane:m.revertLane,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},s===null?(c=s=h,i=u):s=s.next=h,Y.lanes|=b,at|=b;m=m.next}while(m!==null&&m!==a);if(s===null?i=u:s.next=c,!We(u,e.memoizedState)&&(be=!0,S&&(t=$t,t!==null)))throw t;e.memoizedState=u,e.baseState=i,e.baseQueue=s,l.lastRenderedState=u}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function ji(e){var a=Ee(),t=a.queue;if(t===null)throw Error(E(311));t.lastRenderedReducer=e;var l=t.dispatch,n=t.pending,u=a.memoizedState;if(n!==null){t.pending=null;var i=n=n.next;do u=e(u,i.action),i=i.next;while(i!==n);We(u,a.memoizedState)||(be=!0),a.memoizedState=u,a.baseQueue===null&&(a.baseState=u),t.lastRenderedState=u}return[u,l]}function Tf(e,a,t){var l=Y,n=Ee(),u=J;if(u){if(t===void 0)throw Error(E(407));t=t()}else t=a();var i=!We(($||n).memoizedState,t);i&&(n.memoizedState=t,be=!0),n=n.queue;var c=Af.bind(null,l,n,e);if(Kl(2048,8,c,[e]),n.getSnapshot!==a||i||ye!==null&&ye.memoizedState.tag&1){if(l.flags|=2048,tl(9,In(),Rf.bind(null,l,n,t,a),null),ne===null)throw Error(E(349));u||(Ja&124)!==0||pf(l,a,t)}return t}function pf(e,a,t){e.flags|=16384,e={getSnapshot:a,value:t},a=Y.updateQueue,a===null?(a=qi(),Y.updateQueue=a,a.stores=[e]):(t=a.stores,t===null?a.stores=[e]:t.push(e))}function Rf(e,a,t,l){a.value=t,a.getSnapshot=l,Nf(a)&&Of(e)}function Af(e,a,t){return t(function(){Nf(a)&&Of(e)})}function Nf(e){var a=e.getSnapshot;e=e.value;try{var t=a();return!We(e,t)}catch{return!0}}function Of(e){var a=kt(e,2);a!==null&&aa(a,e,2)}function Qi(e){var a=je();if(typeof e=="function"){var t=e;if(e=t(),Dt){Qa(!0);try{t()}finally{Qa(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},a}function Df(e,a,t,l){return e.baseState=t,Yi(e,$,typeof l=="function"?l:La)}function Tm(e,a,t,l,n){if($n(e))throw Error(E(485));if(e=a.action,e!==null){var u={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(i){u.listeners.push(i)}};v.T!==null?t(!0):u.isTransition=!1,l(u),t=a.pending,t===null?(u.next=a.pending=u,Mf(a,u)):(u.next=t.next,a.pending=t.next=u)}}function Mf(e,a){var t=a.action,l=a.payload,n=e.state;if(a.isTransition){var u=v.T,i={};v.T=i;try{var c=t(n,l),s=v.S;s!==null&&s(i,c),_f(e,a,c)}catch(m){Gi(e,a,m)}finally{v.T=u}}else try{u=t(n,l),_f(e,a,u)}catch(m){Gi(e,a,m)}}function _f(e,a,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(l){Uf(e,a,l)},function(l){return Gi(e,a,l)}):Uf(e,a,t)}function Uf(e,a,t){a.status="fulfilled",a.value=t,Cf(a),e.state=t,a=e.pending,a!==null&&(t=a.next,t===a?e.pending=null:(t=t.next,a.next=t,Mf(e,t)))}function Gi(e,a,t){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=t,Cf(a),a=a.next;while(a!==l)}e.action=null}function Cf(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Lf(e,a){return a}function zf(e,a){if(J){var t=ne.formState;if(t!==null){e:{var l=Y;if(J){if(oe){a:{for(var n=oe,u=va;n.nodeType!==8;){if(!u){n=null;break a}if(n=ya(n.nextSibling),n===null){n=null;break a}}u=n.data,n=u==="F!"||u==="F"?n:null}if(n){oe=ya(n.nextSibling),l=n.data==="F!";break e}}Rt(l)}l=!1}l&&(a=t[0])}}return t=je(),t.memoizedState=t.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lf,lastRenderedState:a},t.queue=l,t=$f.bind(null,Y,l),l.dispatch=t,l=Qi(!1),u=ki.bind(null,Y,!1,l.queue),l=je(),n={state:a,dispatch:null,action:e,pending:null},l.queue=n,t=Tm.bind(null,Y,n,u,t),n.dispatch=t,l.memoizedState=e,[a,t,!1]}function Hf(e){var a=Ee();return xf(a,$,e)}function xf(e,a,t){if(a=Yi(e,a,Lf)[0],e=Wn(La)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Xl(a)}catch(i){throw i===wl?Vn:i}else l=a;a=Ee();var n=a.queue,u=n.dispatch;return t!==a.memoizedState&&(Y.flags|=2048,tl(9,In(),pm.bind(null,n,t),null)),[l,u,e]}function pm(e,a){e.action=a}function Bf(e){var a=Ee(),t=$;if(t!==null)return xf(a,t,e);Ee(),a=a.memoizedState,t=Ee();var l=t.queue.dispatch;return t.memoizedState=e,[a,l,!1]}function tl(e,a,t,l){return e={tag:e,create:t,deps:l,inst:a,next:null},a=Y.updateQueue,a===null&&(a=qi(),Y.updateQueue=a),t=a.lastEffect,t===null?a.lastEffect=e.next=e:(l=t.next,t.next=e,e.next=l,a.lastEffect=e),e}function In(){return{destroy:void 0,resource:void 0}}function qf(){return Ee().memoizedState}function Fn(e,a,t,l){var n=je();l=l===void 0?null:l,Y.flags|=e,n.memoizedState=tl(1|a,In(),t,l)}function Kl(e,a,t,l){var n=Ee();l=l===void 0?null:l;var u=n.memoizedState.inst;$!==null&&l!==null&&Li(l,$.memoizedState.deps)?n.memoizedState=tl(a,u,t,l):(Y.flags|=e,n.memoizedState=tl(1|a,u,t,l))}function wf(e,a){Fn(8390656,8,e,a)}function Yf(e,a){Kl(2048,8,e,a)}function jf(e,a){return Kl(4,2,e,a)}function Qf(e,a){return Kl(4,4,e,a)}function Gf(e,a){if(typeof a=="function"){e=e();var t=a(e);return function(){typeof t=="function"?t():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Vf(e,a,t){t=t!=null?t.concat([e]):null,Kl(4,4,Gf.bind(null,a,e),t)}function Vi(){}function Xf(e,a){var t=Ee();a=a===void 0?null:a;var l=t.memoizedState;return a!==null&&Li(a,l[1])?l[0]:(t.memoizedState=[e,a],e)}function Kf(e,a){var t=Ee();a=a===void 0?null:a;var l=t.memoizedState;if(a!==null&&Li(a,l[1]))return l[0];if(l=e(),Dt){Qa(!0);try{e()}finally{Qa(!1)}}return t.memoizedState=[l,a],l}function Xi(e,a,t){return t===void 0||(Ja&1073741824)!==0?e.memoizedState=a:(e.memoizedState=t,e=Wo(),Y.lanes|=e,at|=e,t)}function Zf(e,a,t,l){return We(t,a)?t:Pt.current!==null?(e=Xi(e,t,l),We(e,a)||(be=!0),e):(Ja&42)===0?(be=!0,e.memoizedState=t):(e=Wo(),Y.lanes|=e,at|=e,a)}function kf(e,a,t,l,n){var u=A.p;A.p=u!==0&&8>u?u:8;var i=v.T,c={};v.T=c,ki(e,!1,a,t);try{var s=n(),m=v.S;if(m!==null&&m(c,s),s!==null&&typeof s=="object"&&typeof s.then=="function"){var S=vm(s,l);Zl(e,a,S,ea(e))}else Zl(e,a,l,ea(e))}catch(b){Zl(e,a,{then:function(){},status:"rejected",reason:b},ea())}finally{A.p=u,v.T=i}}function Rm(){}function Ki(e,a,t,l){if(e.tag!==5)throw Error(E(476));var n=Jf(e).queue;kf(e,n,a,x,t===null?Rm:function(){return Wf(e),t(l)})}function Jf(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:x,baseState:x,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:x},next:null};var t={};return a.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:t},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Wf(e){var a=Jf(e).next.queue;Zl(e,a,{},ea())}function Zi(){return Ue(rn)}function If(){return Ee().memoizedState}function Ff(){return Ee().memoizedState}function Am(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var t=ea();e=Za(t);var l=ka(a,e,t);l!==null&&(aa(l,a,t),jl(l,a,t)),a={cache:pi()},e.payload=a;return}a=a.return}}function Nm(e,a,t){var l=ea();t={lane:l,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null},$n(e)?Pf(a,t):(t=di(e,a,t,l),t!==null&&(aa(t,e,l),eo(t,a,l)))}function $f(e,a,t){var l=ea();Zl(e,a,t,l)}function Zl(e,a,t,l){var n={lane:l,revertLane:0,action:t,hasEagerState:!1,eagerState:null,next:null};if($n(e))Pf(a,n);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=a.lastRenderedReducer,u!==null))try{var i=a.lastRenderedState,c=u(i,t);if(n.hasEagerState=!0,n.eagerState=c,We(c,i))return xn(e,a,n,0),ne===null&&Hn(),!1}catch{}finally{}if(t=di(e,a,n,l),t!==null)return aa(t,e,l),eo(t,a,l),!0}return!1}function ki(e,a,t,l){if(l={lane:2,revertLane:Nc(),action:l,hasEagerState:!1,eagerState:null,next:null},$n(e)){if(a)throw Error(E(479))}else a=di(e,t,l,2),a!==null&&aa(a,e,2)}function $n(e){var a=e.alternate;return e===Y||a!==null&&a===Y}function Pf(e,a){el=Zn=!0;var t=e.pending;t===null?a.next=a:(a.next=t.next,t.next=a),e.pending=a}function eo(e,a,t){if((t&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,t|=l,a.lanes=t,cs(e,t)}}var Pn={readContext:Ue,use:Jn,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useLayoutEffect:me,useInsertionEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useSyncExternalStore:me,useId:me,useHostTransitionStatus:me,useFormState:me,useActionState:me,useOptimistic:me,useMemoCache:me,useCacheRefresh:me},ao={readContext:Ue,use:Jn,useCallback:function(e,a){return je().memoizedState=[e,a===void 0?null:a],e},useContext:Ue,useEffect:wf,useImperativeHandle:function(e,a,t){t=t!=null?t.concat([e]):null,Fn(4194308,4,Gf.bind(null,a,e),t)},useLayoutEffect:function(e,a){return Fn(4194308,4,e,a)},useInsertionEffect:function(e,a){Fn(4,2,e,a)},useMemo:function(e,a){var t=je();a=a===void 0?null:a;var l=e();if(Dt){Qa(!0);try{e()}finally{Qa(!1)}}return t.memoizedState=[l,a],l},useReducer:function(e,a,t){var l=je();if(t!==void 0){var n=t(a);if(Dt){Qa(!0);try{t(a)}finally{Qa(!1)}}}else n=a;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Nm.bind(null,Y,e),[l.memoizedState,e]},useRef:function(e){var a=je();return e={current:e},a.memoizedState=e},useState:function(e){e=Qi(e);var a=e.queue,t=$f.bind(null,Y,a);return a.dispatch=t,[e.memoizedState,t]},useDebugValue:Vi,useDeferredValue:function(e,a){var t=je();return Xi(t,e,a)},useTransition:function(){var e=Qi(!1);return e=kf.bind(null,Y,e.queue,!0,!1),je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,t){var l=Y,n=je();if(J){if(t===void 0)throw Error(E(407));t=t()}else{if(t=a(),ne===null)throw Error(E(349));(V&124)!==0||pf(l,a,t)}n.memoizedState=t;var u={value:t,getSnapshot:a};return n.queue=u,wf(Af.bind(null,l,u,e),[e]),l.flags|=2048,tl(9,In(),Rf.bind(null,l,u,t,a),null),t},useId:function(){var e=je(),a=ne.identifierPrefix;if(J){var t=_a,l=Ma;t=(l&~(1<<32-Je(l)-1)).toString(32)+t,a="«"+a+"R"+t,t=kn++,0<t&&(a+="H"+t.toString(32)),a+="»"}else t=gm++,a="«"+a+"r"+t.toString(32)+"»";return e.memoizedState=a},useHostTransitionStatus:Zi,useFormState:zf,useActionState:zf,useOptimistic:function(e){var a=je();a.memoizedState=a.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=t,a=ki.bind(null,Y,!0,t),t.dispatch=a,[e,a]},useMemoCache:wi,useCacheRefresh:function(){return je().memoizedState=Am.bind(null,Y)}},to={readContext:Ue,use:Jn,useCallback:Xf,useContext:Ue,useEffect:Yf,useImperativeHandle:Vf,useInsertionEffect:jf,useLayoutEffect:Qf,useMemo:Kf,useReducer:Wn,useRef:qf,useState:function(){return Wn(La)},useDebugValue:Vi,useDeferredValue:function(e,a){var t=Ee();return Zf(t,$.memoizedState,e,a)},useTransition:function(){var e=Wn(La)[0],a=Ee().memoizedState;return[typeof e=="boolean"?e:Xl(e),a]},useSyncExternalStore:Tf,useId:If,useHostTransitionStatus:Zi,useFormState:Hf,useActionState:Hf,useOptimistic:function(e,a){var t=Ee();return Df(t,$,e,a)},useMemoCache:wi,useCacheRefresh:Ff},Om={readContext:Ue,use:Jn,useCallback:Xf,useContext:Ue,useEffect:Yf,useImperativeHandle:Vf,useInsertionEffect:jf,useLayoutEffect:Qf,useMemo:Kf,useReducer:ji,useRef:qf,useState:function(){return ji(La)},useDebugValue:Vi,useDeferredValue:function(e,a){var t=Ee();return $===null?Xi(t,e,a):Zf(t,$.memoizedState,e,a)},useTransition:function(){var e=ji(La)[0],a=Ee().memoizedState;return[typeof e=="boolean"?e:Xl(e),a]},useSyncExternalStore:Tf,useId:If,useHostTransitionStatus:Zi,useFormState:Bf,useActionState:Bf,useOptimistic:function(e,a){var t=Ee();return $!==null?Df(t,$,e,a):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:wi,useCacheRefresh:Ff},ll=null,kl=0;function eu(e){var a=kl;return kl+=1,ll===null&&(ll=[]),mf(ll,e,a)}function Jl(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function au(e,a){throw a.$$typeof===ue?Error(E(525)):(e=Object.prototype.toString.call(a),Error(E(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function lo(e){var a=e._init;return a(e._payload)}function no(e){function a(r,o){if(e){var d=r.deletions;d===null?(r.deletions=[o],r.flags|=16):d.push(o)}}function t(r,o){if(!e)return null;for(;o!==null;)a(r,o),o=o.sibling;return null}function l(r){for(var o=new Map;r!==null;)r.key!==null?o.set(r.key,r):o.set(r.index,r),r=r.sibling;return o}function n(r,o){return r=Da(r,o),r.index=0,r.sibling=null,r}function u(r,o,d){return r.index=d,e?(d=r.alternate,d!==null?(d=d.index,d<o?(r.flags|=67108866,o):d):(r.flags|=67108866,o)):(r.flags|=1048576,o)}function i(r){return e&&r.alternate===null&&(r.flags|=67108866),r}function c(r,o,d,g){return o===null||o.tag!==6?(o=hi(d,r.mode,g),o.return=r,o):(o=n(o,d),o.return=r,o)}function s(r,o,d,g){var O=d.type;return O===He?S(r,o,d.props.children,g,d.key):o!==null&&(o.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ke&&lo(O)===o.type)?(o=n(o,d.props),Jl(o,d),o.return=r,o):(o=qn(d.type,d.key,d.props,null,r.mode,g),Jl(o,d),o.return=r,o)}function m(r,o,d,g){return o===null||o.tag!==4||o.stateNode.containerInfo!==d.containerInfo||o.stateNode.implementation!==d.implementation?(o=yi(d,r.mode,g),o.return=r,o):(o=n(o,d.children||[]),o.return=r,o)}function S(r,o,d,g,O){return o===null||o.tag!==7?(o=gt(d,r.mode,g,O),o.return=r,o):(o=n(o,d),o.return=r,o)}function b(r,o,d){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=hi(""+o,r.mode,d),o.return=r,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case le:return d=qn(o.type,o.key,o.props,null,r.mode,d),Jl(d,o),d.return=r,d;case ze:return o=yi(o,r.mode,d),o.return=r,o;case Ke:var g=o._init;return o=g(o._payload),b(r,o,d)}if(Me(o)||De(o))return o=gt(o,r.mode,d,null),o.return=r,o;if(typeof o.then=="function")return b(r,eu(o),d);if(o.$$typeof===Oe)return b(r,Qn(r,o),d);au(r,o)}return null}function h(r,o,d,g){var O=o!==null?o.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return O!==null?null:c(r,o,""+d,g);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case le:return d.key===O?s(r,o,d,g):null;case ze:return d.key===O?m(r,o,d,g):null;case Ke:return O=d._init,d=O(d._payload),h(r,o,d,g)}if(Me(d)||De(d))return O!==null?null:S(r,o,d,g,null);if(typeof d.then=="function")return h(r,o,eu(d),g);if(d.$$typeof===Oe)return h(r,o,Qn(r,d),g);au(r,d)}return null}function y(r,o,d,g,O){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return r=r.get(d)||null,c(o,r,""+g,O);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case le:return r=r.get(g.key===null?d:g.key)||null,s(o,r,g,O);case ze:return r=r.get(g.key===null?d:g.key)||null,m(o,r,g,O);case Ke:var j=g._init;return g=j(g._payload),y(r,o,d,g,O)}if(Me(g)||De(g))return r=r.get(d)||null,S(o,r,g,O,null);if(typeof g.then=="function")return y(r,o,d,eu(g),O);if(g.$$typeof===Oe)return y(r,o,d,Qn(o,g),O);au(o,g)}return null}function B(r,o,d,g){for(var O=null,j=null,M=o,z=o=0,pe=null;M!==null&&z<d.length;z++){M.index>z?(pe=M,M=null):pe=M.sibling;var Z=h(r,M,d[z],g);if(Z===null){M===null&&(M=pe);break}e&&M&&Z.alternate===null&&a(r,M),o=u(Z,o,z),j===null?O=Z:j.sibling=Z,j=Z,M=pe}if(z===d.length)return t(r,M),J&&Tt(r,z),O;if(M===null){for(;z<d.length;z++)M=b(r,d[z],g),M!==null&&(o=u(M,o,z),j===null?O=M:j.sibling=M,j=M);return J&&Tt(r,z),O}for(M=l(M);z<d.length;z++)pe=y(M,r,z,d[z],g),pe!==null&&(e&&pe.alternate!==null&&M.delete(pe.key===null?z:pe.key),o=u(pe,o,z),j===null?O=pe:j.sibling=pe,j=pe);return e&&M.forEach(function(ot){return a(r,ot)}),J&&Tt(r,z),O}function L(r,o,d,g){if(d==null)throw Error(E(151));for(var O=null,j=null,M=o,z=o=0,pe=null,Z=d.next();M!==null&&!Z.done;z++,Z=d.next()){M.index>z?(pe=M,M=null):pe=M.sibling;var ot=h(r,M,Z.value,g);if(ot===null){M===null&&(M=pe);break}e&&M&&ot.alternate===null&&a(r,M),o=u(ot,o,z),j===null?O=ot:j.sibling=ot,j=ot,M=pe}if(Z.done)return t(r,M),J&&Tt(r,z),O;if(M===null){for(;!Z.done;z++,Z=d.next())Z=b(r,Z.value,g),Z!==null&&(o=u(Z,o,z),j===null?O=Z:j.sibling=Z,j=Z);return J&&Tt(r,z),O}for(M=l(M);!Z.done;z++,Z=d.next())Z=y(M,r,z,Z.value,g),Z!==null&&(e&&Z.alternate!==null&&M.delete(Z.key===null?z:Z.key),o=u(Z,o,z),j===null?O=Z:j.sibling=Z,j=Z);return e&&M.forEach(function(Dh){return a(r,Dh)}),J&&Tt(r,z),O}function ee(r,o,d,g){if(typeof d=="object"&&d!==null&&d.type===He&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case le:e:{for(var O=d.key;o!==null;){if(o.key===O){if(O=d.type,O===He){if(o.tag===7){t(r,o.sibling),g=n(o,d.props.children),g.return=r,r=g;break e}}else if(o.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ke&&lo(O)===o.type){t(r,o.sibling),g=n(o,d.props),Jl(g,d),g.return=r,r=g;break e}t(r,o);break}else a(r,o);o=o.sibling}d.type===He?(g=gt(d.props.children,r.mode,g,d.key),g.return=r,r=g):(g=qn(d.type,d.key,d.props,null,r.mode,g),Jl(g,d),g.return=r,r=g)}return i(r);case ze:e:{for(O=d.key;o!==null;){if(o.key===O)if(o.tag===4&&o.stateNode.containerInfo===d.containerInfo&&o.stateNode.implementation===d.implementation){t(r,o.sibling),g=n(o,d.children||[]),g.return=r,r=g;break e}else{t(r,o);break}else a(r,o);o=o.sibling}g=yi(d,r.mode,g),g.return=r,r=g}return i(r);case Ke:return O=d._init,d=O(d._payload),ee(r,o,d,g)}if(Me(d))return B(r,o,d,g);if(De(d)){if(O=De(d),typeof O!="function")throw Error(E(150));return d=O.call(d),L(r,o,d,g)}if(typeof d.then=="function")return ee(r,o,eu(d),g);if(d.$$typeof===Oe)return ee(r,o,Qn(r,d),g);au(r,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,o!==null&&o.tag===6?(t(r,o.sibling),g=n(o,d),g.return=r,r=g):(t(r,o),g=hi(d,r.mode,g),g.return=r,r=g),i(r)):t(r,o)}return function(r,o,d,g){try{kl=0;var O=ee(r,o,d,g);return ll=null,O}catch(M){if(M===wl||M===Vn)throw M;var j=Ie(29,M,null,r.mode);return j.lanes=g,j.return=r,j}finally{}}}var nl=no(!0),uo=no(!1),sa=T(null),ga=null;function Wa(e){var a=e.alternate;R(ve,ve.current&1),R(sa,e),ga===null&&(a===null||Pt.current!==null||a.memoizedState!==null)&&(ga=e)}function io(e){if(e.tag===22){if(R(ve,ve.current),R(sa,e),ga===null){var a=e.alternate;a!==null&&a.memoizedState!==null&&(ga=e)}}else Ia()}function Ia(){R(ve,ve.current),R(sa,sa.current)}function za(e){N(sa),ga===e&&(ga=null),N(ve)}var ve=T(0);function tu(e){for(var a=e;a!==null;){if(a.tag===13){var t=a.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||qc(t)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function Ji(e,a,t,l){a=e.memoizedState,t=t(l,a),t=t==null?a:_({},a,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Wi={enqueueSetState:function(e,a,t){e=e._reactInternals;var l=ea(),n=Za(l);n.payload=a,t!=null&&(n.callback=t),a=ka(e,n,l),a!==null&&(aa(a,e,l),jl(a,e,l))},enqueueReplaceState:function(e,a,t){e=e._reactInternals;var l=ea(),n=Za(l);n.tag=1,n.payload=a,t!=null&&(n.callback=t),a=ka(e,n,l),a!==null&&(aa(a,e,l),jl(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var t=ea(),l=Za(t);l.tag=2,a!=null&&(l.callback=a),a=ka(e,l,t),a!==null&&(aa(a,e,t),jl(a,e,t))}};function co(e,a,t,l,n,u,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,u,i):a.prototype&&a.prototype.isPureReactComponent?!Ul(t,l)||!Ul(n,u):!0}function so(e,a,t,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(t,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(t,l),a.state!==e&&Wi.enqueueReplaceState(a,a.state,null)}function Mt(e,a){var t=a;if("ref"in a){t={};for(var l in a)l!=="ref"&&(t[l]=a[l])}if(e=e.defaultProps){t===a&&(t=_({},t));for(var n in e)t[n]===void 0&&(t[n]=e[n])}return t}var lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function fo(e){lu(e)}function oo(e){console.error(e)}function ro(e){lu(e)}function nu(e,a){try{var t=e.onUncaughtError;t(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function mo(e,a,t){try{var l=e.onCaughtError;l(t.value,{componentStack:t.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Ii(e,a,t){return t=Za(t),t.tag=3,t.payload={element:null},t.callback=function(){nu(e,a)},t}function ho(e){return e=Za(e),e.tag=3,e}function yo(e,a,t,l){var n=t.type.getDerivedStateFromError;if(typeof n=="function"){var u=l.value;e.payload=function(){return n(u)},e.callback=function(){mo(a,t,l)}}var i=t.stateNode;i!==null&&typeof i.componentDidCatch=="function"&&(e.callback=function(){mo(a,t,l),typeof n!="function"&&(tt===null?tt=new Set([this]):tt.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Dm(e,a,t,l,n){if(t.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=t.alternate,a!==null&&xl(a,t,n,!0),t=sa.current,t!==null){switch(t.tag){case 13:return ga===null?bc():t.alternate===null&&re===0&&(re=3),t.flags&=-257,t.flags|=65536,t.lanes=n,l===Ni?t.flags|=16384:(a=t.updateQueue,a===null?t.updateQueue=new Set([l]):a.add(l),pc(e,l,n)),!1;case 22:return t.flags|=65536,l===Ni?t.flags|=16384:(a=t.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},t.updateQueue=a):(t=a.retryQueue,t===null?a.retryQueue=new Set([l]):t.add(l)),pc(e,l,n)),!1}throw Error(E(435,t.tag))}return pc(e,l,n),bc(),!1}if(J)return a=sa.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=n,l!==vi&&(e=Error(E(422),{cause:l}),Hl(na(e,t)))):(l!==vi&&(a=Error(E(423),{cause:l}),Hl(na(a,t))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=na(l,t),n=Ii(e.stateNode,l,n),Mi(e,n),re!==4&&(re=2)),!1;var u=Error(E(520),{cause:l});if(u=na(u,t),an===null?an=[u]:an.push(u),re!==4&&(re=2),a===null)return!0;l=na(l,t),t=a;do{switch(t.tag){case 3:return t.flags|=65536,e=n&-n,t.lanes|=e,e=Ii(t.stateNode,l,e),Mi(t,e),!1;case 1:if(a=t.type,u=t.stateNode,(t.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(tt===null||!tt.has(u))))return t.flags|=65536,n&=-n,t.lanes|=n,n=ho(n),yo(n,e,t,l),Mi(t,n),!1}t=t.return}while(t!==null);return!1}var Eo=Error(E(461)),be=!1;function Re(e,a,t,l){a.child=e===null?uo(a,null,t,l):nl(a,e.child,t,l)}function So(e,a,t,l,n){t=t.render;var u=a.ref;if("ref"in l){var i={};for(var c in l)c!=="ref"&&(i[c]=l[c])}else i=l;return Nt(a),l=zi(e,a,t,i,u,n),c=Hi(),e!==null&&!be?(xi(e,a,n),Ha(e,a,n)):(J&&c&&Ei(a),a.flags|=1,Re(e,a,l,n),a.child)}function vo(e,a,t,l,n){if(e===null){var u=t.type;return typeof u=="function"&&!mi(u)&&u.defaultProps===void 0&&t.compare===null?(a.tag=15,a.type=u,go(e,a,u,l,n)):(e=qn(t.type,null,l,a,a.mode,n),e.ref=a.ref,e.return=a,a.child=e)}if(u=e.child,!nc(e,n)){var i=u.memoizedProps;if(t=t.compare,t=t!==null?t:Ul,t(i,l)&&e.ref===a.ref)return Ha(e,a,n)}return a.flags|=1,e=Da(u,l),e.ref=a.ref,e.return=a,a.child=e}function go(e,a,t,l,n){if(e!==null){var u=e.memoizedProps;if(Ul(u,l)&&e.ref===a.ref)if(be=!1,a.pendingProps=l=u,nc(e,n))(e.flags&131072)!==0&&(be=!0);else return a.lanes=e.lanes,Ha(e,a,n)}return Fi(e,a,t,l,n)}function bo(e,a,t){var l=a.pendingProps,n=l.children,u=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((a.flags&128)!==0){if(l=u!==null?u.baseLanes|t:t,e!==null){for(n=a.child=e.child,u=0;n!==null;)u=u|n.lanes|n.childLanes,n=n.sibling;a.childLanes=u&~l}else a.childLanes=0,a.child=null;return To(e,a,l,t)}if((t&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gn(a,u!==null?u.cachePool:null),u!==null?vf(a,u):Ui(),io(a);else return a.lanes=a.childLanes=536870912,To(e,a,u!==null?u.baseLanes|t:t,t)}else u!==null?(Gn(a,u.cachePool),vf(a,u),Ia(),a.memoizedState=null):(e!==null&&Gn(a,null),Ui(),Ia());return Re(e,a,n,t),a.child}function To(e,a,t,l){var n=Ai();return n=n===null?null:{parent:Se._currentValue,pool:n},a.memoizedState={baseLanes:t,cachePool:n},e!==null&&Gn(a,null),Ui(),io(a),e!==null&&xl(e,a,l,!0),null}function uu(e,a){var t=a.ref;if(t===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(E(284));(e===null||e.ref!==t)&&(a.flags|=4194816)}}function Fi(e,a,t,l,n){return Nt(a),t=zi(e,a,t,l,void 0,n),l=Hi(),e!==null&&!be?(xi(e,a,n),Ha(e,a,n)):(J&&l&&Ei(a),a.flags|=1,Re(e,a,t,n),a.child)}function po(e,a,t,l,n,u){return Nt(a),a.updateQueue=null,t=bf(a,l,t,n),gf(e),l=Hi(),e!==null&&!be?(xi(e,a,u),Ha(e,a,u)):(J&&l&&Ei(a),a.flags|=1,Re(e,a,t,u),a.child)}function Ro(e,a,t,l,n){if(Nt(a),a.stateNode===null){var u=Jt,i=t.contextType;typeof i=="object"&&i!==null&&(u=Ue(i)),u=new t(l,u),a.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Wi,a.stateNode=u,u._reactInternals=a,u=a.stateNode,u.props=l,u.state=a.memoizedState,u.refs={},Oi(a),i=t.contextType,u.context=typeof i=="object"&&i!==null?Ue(i):Jt,u.state=a.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ji(a,t,i,l),u.state=a.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(i=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),i!==u.state&&Wi.enqueueReplaceState(u,u.state,null),Gl(a,l,u,n),Ql(),u.state=a.memoizedState),typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){u=a.stateNode;var c=a.memoizedProps,s=Mt(t,c);u.props=s;var m=u.context,S=t.contextType;i=Jt,typeof S=="object"&&S!==null&&(i=Ue(S));var b=t.getDerivedStateFromProps;S=typeof b=="function"||typeof u.getSnapshotBeforeUpdate=="function",c=a.pendingProps!==c,S||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(c||m!==i)&&so(a,u,l,i),Ka=!1;var h=a.memoizedState;u.state=h,Gl(a,l,u,n),Ql(),m=a.memoizedState,c||h!==m||Ka?(typeof b=="function"&&(Ji(a,t,b,l),m=a.memoizedState),(s=Ka||co(a,t,s,l,h,m,i))?(S||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(a.flags|=4194308)):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=m),u.props=l,u.state=m,u.context=i,l=s):(typeof u.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{u=a.stateNode,Di(e,a),i=a.memoizedProps,S=Mt(t,i),u.props=S,b=a.pendingProps,h=u.context,m=t.contextType,s=Jt,typeof m=="object"&&m!==null&&(s=Ue(m)),c=t.getDerivedStateFromProps,(m=typeof c=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(i!==b||h!==s)&&so(a,u,l,s),Ka=!1,h=a.memoizedState,u.state=h,Gl(a,l,u,n),Ql();var y=a.memoizedState;i!==b||h!==y||Ka||e!==null&&e.dependencies!==null&&jn(e.dependencies)?(typeof c=="function"&&(Ji(a,t,c,l),y=a.memoizedState),(S=Ka||co(a,t,S,l,h,y,s)||e!==null&&e.dependencies!==null&&jn(e.dependencies))?(m||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(l,y,s),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(l,y,s)),typeof u.componentDidUpdate=="function"&&(a.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=y),u.props=l,u.state=y,u.context=s,l=S):(typeof u.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(a.flags|=1024),l=!1)}return u=l,uu(e,a),l=(a.flags&128)!==0,u||l?(u=a.stateNode,t=l&&typeof t.getDerivedStateFromError!="function"?null:u.render(),a.flags|=1,e!==null&&l?(a.child=nl(a,e.child,null,n),a.child=nl(a,null,t,n)):Re(e,a,t,n),a.memoizedState=u.state,e=a.child):e=Ha(e,a,n),e}function Ao(e,a,t,l){return zl(),a.flags|=256,Re(e,a,t,l),a.child}var $i={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pi(e){return{baseLanes:e,cachePool:of()}}function ec(e,a,t){return e=e!==null?e.childLanes&~t:0,a&&(e|=fa),e}function No(e,a,t){var l=a.pendingProps,n=!1,u=(a.flags&128)!==0,i;if((i=u)||(i=e!==null&&e.memoizedState===null?!1:(ve.current&2)!==0),i&&(n=!0,a.flags&=-129),i=(a.flags&32)!==0,a.flags&=-33,e===null){if(J){if(n?Wa(a):Ia(),J){var c=oe,s;if(s=c){e:{for(s=c,c=va;s.nodeType!==8;){if(!c){c=null;break e}if(s=ya(s.nextSibling),s===null){c=null;break e}}c=s}c!==null?(a.memoizedState={dehydrated:c,treeContext:bt!==null?{id:Ma,overflow:_a}:null,retryLane:536870912,hydrationErrors:null},s=Ie(18,null,null,0),s.stateNode=c,s.return=a,a.child=s,xe=a,oe=null,s=!0):s=!1}s||Rt(a)}if(c=a.memoizedState,c!==null&&(c=c.dehydrated,c!==null))return qc(c)?a.lanes=32:a.lanes=536870912,null;za(a)}return c=l.children,l=l.fallback,n?(Ia(),n=a.mode,c=iu({mode:"hidden",children:c},n),l=gt(l,n,t,null),c.return=a,l.return=a,c.sibling=l,a.child=c,n=a.child,n.memoizedState=Pi(t),n.childLanes=ec(e,i,t),a.memoizedState=$i,l):(Wa(a),ac(a,c))}if(s=e.memoizedState,s!==null&&(c=s.dehydrated,c!==null)){if(u)a.flags&256?(Wa(a),a.flags&=-257,a=tc(e,a,t)):a.memoizedState!==null?(Ia(),a.child=e.child,a.flags|=128,a=null):(Ia(),n=l.fallback,c=a.mode,l=iu({mode:"visible",children:l.children},c),n=gt(n,c,t,null),n.flags|=2,l.return=a,n.return=a,l.sibling=n,a.child=l,nl(a,e.child,null,t),l=a.child,l.memoizedState=Pi(t),l.childLanes=ec(e,i,t),a.memoizedState=$i,a=n);else if(Wa(a),qc(c)){if(i=c.nextSibling&&c.nextSibling.dataset,i)var m=i.dgst;i=m,l=Error(E(419)),l.stack="",l.digest=i,Hl({value:l,source:null,stack:null}),a=tc(e,a,t)}else if(be||xl(e,a,t,!1),i=(t&e.childLanes)!==0,be||i){if(i=ne,i!==null&&(l=t&-t,l=(l&42)!==0?1:wu(l),l=(l&(i.suspendedLanes|t))!==0?0:l,l!==0&&l!==s.retryLane))throw s.retryLane=l,kt(e,l),aa(i,e,l),Eo;c.data==="$?"||bc(),a=tc(e,a,t)}else c.data==="$?"?(a.flags|=192,a.child=e.child,a=null):(e=s.treeContext,oe=ya(c.nextSibling),xe=a,J=!0,pt=null,va=!1,e!==null&&(ia[ca++]=Ma,ia[ca++]=_a,ia[ca++]=bt,Ma=e.id,_a=e.overflow,bt=a),a=ac(a,l.children),a.flags|=4096);return a}return n?(Ia(),n=l.fallback,c=a.mode,s=e.child,m=s.sibling,l=Da(s,{mode:"hidden",children:l.children}),l.subtreeFlags=s.subtreeFlags&65011712,m!==null?n=Da(m,n):(n=gt(n,c,t,null),n.flags|=2),n.return=a,l.return=a,l.sibling=n,a.child=l,l=n,n=a.child,c=e.child.memoizedState,c===null?c=Pi(t):(s=c.cachePool,s!==null?(m=Se._currentValue,s=s.parent!==m?{parent:m,pool:m}:s):s=of(),c={baseLanes:c.baseLanes|t,cachePool:s}),n.memoizedState=c,n.childLanes=ec(e,i,t),a.memoizedState=$i,l):(Wa(a),t=e.child,e=t.sibling,t=Da(t,{mode:"visible",children:l.children}),t.return=a,t.sibling=null,e!==null&&(i=a.deletions,i===null?(a.deletions=[e],a.flags|=16):i.push(e)),a.child=t,a.memoizedState=null,t)}function ac(e,a){return a=iu({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function iu(e,a){return e=Ie(22,e,null,a),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function tc(e,a,t){return nl(a,e.child,null,t),e=ac(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Oo(e,a,t){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),bi(e.return,a,t)}function lc(e,a,t,l,n){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:t,tailMode:n}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=t,u.tailMode=n)}function Do(e,a,t){var l=a.pendingProps,n=l.revealOrder,u=l.tail;if(Re(e,a,l.children,t),l=ve.current,(l&2)!==0)l=l&1|2,a.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Oo(e,t,a);else if(e.tag===19)Oo(e,t,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(R(ve,l),n){case"forwards":for(t=a.child,n=null;t!==null;)e=t.alternate,e!==null&&tu(e)===null&&(n=t),t=t.sibling;t=n,t===null?(n=a.child,a.child=null):(n=t.sibling,t.sibling=null),lc(a,!1,n,t,u);break;case"backwards":for(t=null,n=a.child,a.child=null;n!==null;){if(e=n.alternate,e!==null&&tu(e)===null){a.child=n;break}e=n.sibling,n.sibling=t,t=n,n=e}lc(a,!0,t,null,u);break;case"together":lc(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function Ha(e,a,t){if(e!==null&&(a.dependencies=e.dependencies),at|=a.lanes,(t&a.childLanes)===0)if(e!==null){if(xl(e,a,t,!1),(t&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(E(153));if(a.child!==null){for(e=a.child,t=Da(e,e.pendingProps),a.child=t,t.return=a;e.sibling!==null;)e=e.sibling,t=t.sibling=Da(e,e.pendingProps),t.return=a;t.sibling=null}return a.child}function nc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&jn(e)))}function Mm(e,a,t){switch(a.tag){case 3:ie(a,a.stateNode.containerInfo),Xa(a,Se,e.memoizedState.cache),zl();break;case 27:case 5:zu(a);break;case 4:ie(a,a.stateNode.containerInfo);break;case 10:Xa(a,a.type,a.memoizedProps.value);break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(Wa(a),a.flags|=128,null):(t&a.child.childLanes)!==0?No(e,a,t):(Wa(a),e=Ha(e,a,t),e!==null?e.sibling:null);Wa(a);break;case 19:var n=(e.flags&128)!==0;if(l=(t&a.childLanes)!==0,l||(xl(e,a,t,!1),l=(t&a.childLanes)!==0),n){if(l)return Do(e,a,t);a.flags|=128}if(n=a.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),R(ve,ve.current),l)break;return null;case 22:case 23:return a.lanes=0,bo(e,a,t);case 24:Xa(a,Se,e.memoizedState.cache)}return Ha(e,a,t)}function Mo(e,a,t){if(e!==null)if(e.memoizedProps!==a.pendingProps)be=!0;else{if(!nc(e,t)&&(a.flags&128)===0)return be=!1,Mm(e,a,t);be=(e.flags&131072)!==0}else be=!1,J&&(a.flags&1048576)!==0&&tf(a,Yn,a.index);switch(a.lanes=0,a.tag){case 16:e:{e=a.pendingProps;var l=a.elementType,n=l._init;if(l=n(l._payload),a.type=l,typeof l=="function")mi(l)?(e=Mt(l,e),a.tag=1,a=Ro(null,a,l,e,t)):(a.tag=0,a=Fi(null,a,l,e,t));else{if(l!=null){if(n=l.$$typeof,n===da){a.tag=11,a=So(null,a,l,e,t);break e}else if(n===Xe){a.tag=14,a=vo(null,a,l,e,t);break e}}throw a=mt(l)||l,Error(E(306,a,""))}}return a;case 0:return Fi(e,a,a.type,a.pendingProps,t);case 1:return l=a.type,n=Mt(l,a.pendingProps),Ro(e,a,l,n,t);case 3:e:{if(ie(a,a.stateNode.containerInfo),e===null)throw Error(E(387));l=a.pendingProps;var u=a.memoizedState;n=u.element,Di(e,a),Gl(a,l,null,t);var i=a.memoizedState;if(l=i.cache,Xa(a,Se,l),l!==u.cache&&Ti(a,[Se],t,!0),Ql(),l=i.element,u.isDehydrated)if(u={element:l,isDehydrated:!1,cache:i.cache},a.updateQueue.baseState=u,a.memoizedState=u,a.flags&256){a=Ao(e,a,l,t);break e}else if(l!==n){n=na(Error(E(424)),a),Hl(n),a=Ao(e,a,l,t);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=ya(e.firstChild),xe=a,J=!0,pt=null,va=!0,t=uo(a,null,l,t),a.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(zl(),l===n){a=Ha(e,a,t);break e}Re(e,a,l,t)}a=a.child}return a;case 26:return uu(e,a),e===null?(t=Lr(a.type,null,a.pendingProps,null))?a.memoizedState=t:J||(t=a.type,e=a.pendingProps,l=bu(q.current).createElement(t),l[_e]=a,l[we]=e,Ne(l,t,e),ge(l),a.stateNode=l):a.memoizedState=Lr(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return zu(a),e===null&&J&&(l=a.stateNode=_r(a.type,a.pendingProps,q.current),xe=a,va=!0,n=oe,ut(a.type)?(wc=n,oe=ya(l.firstChild)):oe=n),Re(e,a,a.pendingProps.children,t),uu(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&J&&((n=l=oe)&&(l=th(l,a.type,a.pendingProps,va),l!==null?(a.stateNode=l,xe=a,oe=ya(l.firstChild),va=!1,n=!0):n=!1),n||Rt(a)),zu(a),n=a.type,u=a.pendingProps,i=e!==null?e.memoizedProps:null,l=u.children,Hc(n,u)?l=null:i!==null&&Hc(n,i)&&(a.flags|=32),a.memoizedState!==null&&(n=zi(e,a,bm,null,null,t),rn._currentValue=n),uu(e,a),Re(e,a,l,t),a.child;case 6:return e===null&&J&&((e=t=oe)&&(t=lh(t,a.pendingProps,va),t!==null?(a.stateNode=t,xe=a,oe=null,e=!0):e=!1),e||Rt(a)),null;case 13:return No(e,a,t);case 4:return ie(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=nl(a,null,l,t):Re(e,a,l,t),a.child;case 11:return So(e,a,a.type,a.pendingProps,t);case 7:return Re(e,a,a.pendingProps,t),a.child;case 8:return Re(e,a,a.pendingProps.children,t),a.child;case 12:return Re(e,a,a.pendingProps.children,t),a.child;case 10:return l=a.pendingProps,Xa(a,a.type,l.value),Re(e,a,l.children,t),a.child;case 9:return n=a.type._context,l=a.pendingProps.children,Nt(a),n=Ue(n),l=l(n),a.flags|=1,Re(e,a,l,t),a.child;case 14:return vo(e,a,a.type,a.pendingProps,t);case 15:return go(e,a,a.type,a.pendingProps,t);case 19:return Do(e,a,t);case 31:return l=a.pendingProps,t=a.mode,l={mode:l.mode,children:l.children},e===null?(t=iu(l,t),t.ref=a.ref,a.child=t,t.return=a,a=t):(t=Da(e.child,l),t.ref=a.ref,a.child=t,t.return=a,a=t),a;case 22:return bo(e,a,t);case 24:return Nt(a),l=Ue(Se),e===null?(n=Ai(),n===null&&(n=ne,u=pi(),n.pooledCache=u,u.refCount++,u!==null&&(n.pooledCacheLanes|=t),n=u),a.memoizedState={parent:l,cache:n},Oi(a),Xa(a,Se,n)):((e.lanes&t)!==0&&(Di(e,a),Gl(a,null,null,t),Ql()),n=e.memoizedState,u=a.memoizedState,n.parent!==l?(n={parent:l,cache:l},a.memoizedState=n,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=n),Xa(a,Se,l)):(l=u.cache,Xa(a,Se,l),l!==n.cache&&Ti(a,[Se],t,!0))),Re(e,a,a.pendingProps.children,t),a.child;case 29:throw a.pendingProps}throw Error(E(156,a.tag))}function xa(e){e.flags|=4}function _o(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qr(a)){if(a=sa.current,a!==null&&((V&4194048)===V?ga!==null:(V&62914560)!==V&&(V&536870912)===0||a!==ga))throw Yl=Ni,rf;e.flags|=8192}}function cu(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?us():536870912,e.lanes|=a,sl|=a)}function Wl(e,a){if(!J)switch(e.tailMode){case"hidden":a=e.tail;for(var t=null;a!==null;)a.alternate!==null&&(t=a),a=a.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var l=null;t!==null;)t.alternate!==null&&(l=t),t=t.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function fe(e){var a=e.alternate!==null&&e.alternate.child===e.child,t=0,l=0;if(a)for(var n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)t|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=t,a}function _m(e,a,t){var l=a.pendingProps;switch(Si(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return fe(a),null;case 1:return fe(a),null;case 3:return t=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Ca(Se),ja(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(Ll(a)?xa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,uf())),fe(a),null;case 26:return t=a.memoizedState,e===null?(xa(a),t!==null?(fe(a),_o(a,t)):(fe(a),a.flags&=-16777217)):t?t!==e.memoizedState?(xa(a),fe(a),_o(a,t)):(fe(a),a.flags&=-16777217):(e.memoizedProps!==l&&xa(a),fe(a),a.flags&=-16777217),null;case 27:vn(a),t=q.current;var n=a.type;if(e!==null&&a.stateNode!=null)e.memoizedProps!==l&&xa(a);else{if(!l){if(a.stateNode===null)throw Error(E(166));return fe(a),null}e=C.current,Ll(a)?lf(a):(e=_r(n,l,t),a.stateNode=e,xa(a))}return fe(a),null;case 5:if(vn(a),t=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&xa(a);else{if(!l){if(a.stateNode===null)throw Error(E(166));return fe(a),null}if(e=C.current,Ll(a))lf(a);else{switch(n=bu(q.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(t,{is:l.is}):n.createElement(t)}}e[_e]=a,e[we]=l;e:for(n=a.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}a.stateNode=e;e:switch(Ne(e,t,l),t){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&xa(a)}}return fe(a),a.flags&=-16777217,null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&xa(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(E(166));if(e=q.current,Ll(a)){if(e=a.stateNode,t=a.memoizedProps,l=null,n=xe,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[_e]=a,e=!!(e.nodeValue===t||l!==null&&l.suppressHydrationWarning===!0||pr(e.nodeValue,t)),e||Rt(a)}else e=bu(e).createTextNode(l),e[_e]=a,a.stateNode=e}return fe(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ll(a),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(E(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(E(317));n[_e]=a}else zl(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;fe(a),n=!1}else n=uf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return a.flags&256?(za(a),a):(za(a),null)}if(za(a),(a.flags&128)!==0)return a.lanes=t,a;if(t=l!==null,e=e!==null&&e.memoizedState!==null,t){l=a.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var u=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(u=l.memoizedState.cachePool.pool),u!==n&&(l.flags|=2048)}return t!==e&&t&&(a.child.flags|=8192),cu(a,a.updateQueue),fe(a),null;case 4:return ja(),e===null&&_c(a.stateNode.containerInfo),fe(a),null;case 10:return Ca(a.type),fe(a),null;case 19:if(N(ve),n=a.memoizedState,n===null)return fe(a),null;if(l=(a.flags&128)!==0,u=n.rendering,u===null)if(l)Wl(n,!1);else{if(re!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(u=tu(e),u!==null){for(a.flags|=128,Wl(n,!1),e=u.updateQueue,a.updateQueue=e,cu(a,e),a.subtreeFlags=0,e=t,t=a.child;t!==null;)af(t,e),t=t.sibling;return R(ve,ve.current&1|2),a.child}e=e.sibling}n.tail!==null&&Sa()>ou&&(a.flags|=128,l=!0,Wl(n,!1),a.lanes=4194304)}else{if(!l)if(e=tu(u),e!==null){if(a.flags|=128,l=!0,e=e.updateQueue,a.updateQueue=e,cu(a,e),Wl(n,!0),n.tail===null&&n.tailMode==="hidden"&&!u.alternate&&!J)return fe(a),null}else 2*Sa()-n.renderingStartTime>ou&&t!==536870912&&(a.flags|=128,l=!0,Wl(n,!1),a.lanes=4194304);n.isBackwards?(u.sibling=a.child,a.child=u):(e=n.last,e!==null?e.sibling=u:a.child=u,n.last=u)}return n.tail!==null?(a=n.tail,n.rendering=a,n.tail=a.sibling,n.renderingStartTime=Sa(),a.sibling=null,e=ve.current,R(ve,l?e&1|2:e&1),a):(fe(a),null);case 22:case 23:return za(a),Ci(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(t&536870912)!==0&&(a.flags&128)===0&&(fe(a),a.subtreeFlags&6&&(a.flags|=8192)):fe(a),t=a.updateQueue,t!==null&&cu(a,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==t&&(a.flags|=2048),e!==null&&N(Ot),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),a.memoizedState.cache!==t&&(a.flags|=2048),Ca(Se),fe(a),null;case 25:return null;case 30:return null}throw Error(E(156,a.tag))}function Um(e,a){switch(Si(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ca(Se),ja(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return vn(a),null;case 13:if(za(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(E(340));zl()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return N(ve),null;case 4:return ja(),null;case 10:return Ca(a.type),null;case 22:case 23:return za(a),Ci(),e!==null&&N(Ot),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ca(Se),null;case 25:return null;default:return null}}function Uo(e,a){switch(Si(a),a.tag){case 3:Ca(Se),ja();break;case 26:case 27:case 5:vn(a);break;case 4:ja();break;case 13:za(a);break;case 19:N(ve);break;case 10:Ca(a.type);break;case 22:case 23:za(a),Ci(),e!==null&&N(Ot);break;case 24:Ca(Se)}}function Il(e,a){try{var t=a.updateQueue,l=t!==null?t.lastEffect:null;if(l!==null){var n=l.next;t=n;do{if((t.tag&e)===e){l=void 0;var u=t.create,i=t.inst;l=u(),i.destroy=l}t=t.next}while(t!==n)}}catch(c){te(a,a.return,c)}}function Fa(e,a,t){try{var l=a.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var u=n.next;l=u;do{if((l.tag&e)===e){var i=l.inst,c=i.destroy;if(c!==void 0){i.destroy=void 0,n=a;var s=t,m=c;try{m()}catch(S){te(n,s,S)}}}l=l.next}while(l!==u)}}catch(S){te(a,a.return,S)}}function Co(e){var a=e.updateQueue;if(a!==null){var t=e.stateNode;try{Sf(a,t)}catch(l){te(e,e.return,l)}}}function Lo(e,a,t){t.props=Mt(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(l){te(e,a,l)}}function Fl(e,a){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof t=="function"?e.refCleanup=t(l):t.current=l}}catch(n){te(e,a,n)}}function ba(e,a){var t=e.ref,l=e.refCleanup;if(t!==null)if(typeof l=="function")try{l()}catch(n){te(e,a,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(n){te(e,a,n)}else t.current=null}function zo(e){var a=e.type,t=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":t.autoFocus&&l.focus();break e;case"img":t.src?l.src=t.src:t.srcSet&&(l.srcset=t.srcSet)}}catch(n){te(e,e.return,n)}}function uc(e,a,t){try{var l=e.stateNode;Fm(l,e.type,t,a),l[we]=a}catch(n){te(e,e.return,n)}}function Ho(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ut(e.type)||e.tag===4}function ic(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ho(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ut(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cc(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,a):(a=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.appendChild(e),t=t._reactRootContainer,t!=null||a.onclick!==null||(a.onclick=gu));else if(l!==4&&(l===27&&ut(e.type)&&(t=e.stateNode,a=null),e=e.child,e!==null))for(cc(e,a,t),e=e.sibling;e!==null;)cc(e,a,t),e=e.sibling}function su(e,a,t){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?t.insertBefore(e,a):t.appendChild(e);else if(l!==4&&(l===27&&ut(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(su(e,a,t),e=e.sibling;e!==null;)su(e,a,t),e=e.sibling}function xo(e){var a=e.stateNode,t=e.memoizedProps;try{for(var l=e.type,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Ne(a,l,t),a[_e]=e,a[we]=t}catch(u){te(e,e.return,u)}}var Ba=!1,he=!1,sc=!1,Bo=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Cm(e,a){if(e=e.containerInfo,Lc=Ou,e=Ks(e),ii(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var l=t.getSelection&&t.getSelection();if(l&&l.rangeCount!==0){t=l.anchorNode;var n=l.anchorOffset,u=l.focusNode;l=l.focusOffset;try{t.nodeType,u.nodeType}catch{t=null;break e}var i=0,c=-1,s=-1,m=0,S=0,b=e,h=null;a:for(;;){for(var y;b!==t||n!==0&&b.nodeType!==3||(c=i+n),b!==u||l!==0&&b.nodeType!==3||(s=i+l),b.nodeType===3&&(i+=b.nodeValue.length),(y=b.firstChild)!==null;)h=b,b=y;for(;;){if(b===e)break a;if(h===t&&++m===n&&(c=i),h===u&&++S===l&&(s=i),(y=b.nextSibling)!==null)break;b=h,h=b.parentNode}b=y}t=c===-1||s===-1?null:{start:c,end:s}}else t=null}t=t||{start:0,end:0}}else t=null;for(zc={focusedElem:e,selectionRange:t},Ou=!1,Te=a;Te!==null;)if(a=Te,e=a.child,(a.subtreeFlags&1024)!==0&&e!==null)e.return=a,Te=e;else for(;Te!==null;){switch(a=Te,u=a.alternate,e=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&u!==null){e=void 0,t=a,n=u.memoizedProps,u=u.memoizedState,l=t.stateNode;try{var B=Mt(t.type,n,t.elementType===t.type);e=l.getSnapshotBeforeUpdate(B,u),l.__reactInternalSnapshotBeforeUpdate=e}catch(L){te(t,t.return,L)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,t=e.nodeType,t===9)Bc(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Bc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(E(163))}if(e=a.sibling,e!==null){e.return=a.return,Te=e;break}Te=a.return}}function qo(e,a,t){var l=t.flags;switch(t.tag){case 0:case 11:case 15:$a(e,t),l&4&&Il(5,t);break;case 1:if($a(e,t),l&4)if(e=t.stateNode,a===null)try{e.componentDidMount()}catch(i){te(t,t.return,i)}else{var n=Mt(t.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(n,a,e.__reactInternalSnapshotBeforeUpdate)}catch(i){te(t,t.return,i)}}l&64&&Co(t),l&512&&Fl(t,t.return);break;case 3:if($a(e,t),l&64&&(e=t.updateQueue,e!==null)){if(a=null,t.child!==null)switch(t.child.tag){case 27:case 5:a=t.child.stateNode;break;case 1:a=t.child.stateNode}try{Sf(e,a)}catch(i){te(t,t.return,i)}}break;case 27:a===null&&l&4&&xo(t);case 26:case 5:$a(e,t),a===null&&l&4&&zo(t),l&512&&Fl(t,t.return);break;case 12:$a(e,t);break;case 13:$a(e,t),l&4&&jo(e,t),l&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=jm.bind(null,t),nh(e,t))));break;case 22:if(l=t.memoizedState!==null||Ba,!l){a=a!==null&&a.memoizedState!==null||he,n=Ba;var u=he;Ba=l,(he=a)&&!u?Pa(e,t,(t.subtreeFlags&8772)!==0):$a(e,t),Ba=n,he=u}break;case 30:break;default:$a(e,t)}}function wo(e){var a=e.alternate;a!==null&&(e.alternate=null,wo(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Qu(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Qe=!1;function qa(e,a,t){for(t=t.child;t!==null;)Yo(e,a,t),t=t.sibling}function Yo(e,a,t){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(vl,t)}catch{}switch(t.tag){case 26:he||ba(t,a),qa(e,a,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:he||ba(t,a);var l=ce,n=Qe;ut(t.type)&&(ce=t.stateNode,Qe=!1),qa(e,a,t),cn(t.stateNode),ce=l,Qe=n;break;case 5:he||ba(t,a);case 6:if(l=ce,n=Qe,ce=null,qa(e,a,t),ce=l,Qe=n,ce!==null)if(Qe)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(t.stateNode)}catch(u){te(t,a,u)}else try{ce.removeChild(t.stateNode)}catch(u){te(t,a,u)}break;case 18:ce!==null&&(Qe?(e=ce,Dr(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),yn(e)):Dr(ce,t.stateNode));break;case 4:l=ce,n=Qe,ce=t.stateNode.containerInfo,Qe=!0,qa(e,a,t),ce=l,Qe=n;break;case 0:case 11:case 14:case 15:he||Fa(2,t,a),he||Fa(4,t,a),qa(e,a,t);break;case 1:he||(ba(t,a),l=t.stateNode,typeof l.componentWillUnmount=="function"&&Lo(t,a,l)),qa(e,a,t);break;case 21:qa(e,a,t);break;case 22:he=(l=he)||t.memoizedState!==null,qa(e,a,t),he=l;break;default:qa(e,a,t)}}function jo(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yn(e)}catch(t){te(a,a.return,t)}}function Lm(e){switch(e.tag){case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Bo),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Bo),a;default:throw Error(E(435,e.tag))}}function fc(e,a){var t=Lm(e);a.forEach(function(l){var n=Qm.bind(null,e,l);t.has(l)||(t.add(l),l.then(n,n))})}function Fe(e,a){var t=a.deletions;if(t!==null)for(var l=0;l<t.length;l++){var n=t[l],u=e,i=a,c=i;e:for(;c!==null;){switch(c.tag){case 27:if(ut(c.type)){ce=c.stateNode,Qe=!1;break e}break;case 5:ce=c.stateNode,Qe=!1;break e;case 3:case 4:ce=c.stateNode.containerInfo,Qe=!0;break e}c=c.return}if(ce===null)throw Error(E(160));Yo(u,i,n),ce=null,Qe=!1,u=n.alternate,u!==null&&(u.return=null),n.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)Qo(a,e),a=a.sibling}var ha=null;function Qo(e,a){var t=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fe(a,e),$e(e),l&4&&(Fa(3,e,e.return),Il(3,e),Fa(5,e,e.return));break;case 1:Fe(a,e),$e(e),l&512&&(he||t===null||ba(t,t.return)),l&64&&Ba&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?l:t.concat(l))));break;case 26:var n=ha;if(Fe(a,e),$e(e),l&512&&(he||t===null||ba(t,t.return)),l&4){var u=t!==null?t.memoizedState:null;if(l=e.memoizedState,t===null)if(l===null)if(e.stateNode===null){e:{l=e.type,t=e.memoizedProps,n=n.ownerDocument||n;a:switch(l){case"title":u=n.getElementsByTagName("title")[0],(!u||u[Tl]||u[_e]||u.namespaceURI==="http://www.w3.org/2000/svg"||u.hasAttribute("itemprop"))&&(u=n.createElement(l),n.head.insertBefore(u,n.querySelector("head > title"))),Ne(u,l,t),u[_e]=e,ge(u),l=u;break e;case"link":var i=xr("link","href",n).get(l+(t.href||""));if(i){for(var c=0;c<i.length;c++)if(u=i[c],u.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&u.getAttribute("rel")===(t.rel==null?null:t.rel)&&u.getAttribute("title")===(t.title==null?null:t.title)&&u.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){i.splice(c,1);break a}}u=n.createElement(l),Ne(u,l,t),n.head.appendChild(u);break;case"meta":if(i=xr("meta","content",n).get(l+(t.content||""))){for(c=0;c<i.length;c++)if(u=i[c],u.getAttribute("content")===(t.content==null?null:""+t.content)&&u.getAttribute("name")===(t.name==null?null:t.name)&&u.getAttribute("property")===(t.property==null?null:t.property)&&u.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&u.getAttribute("charset")===(t.charSet==null?null:t.charSet)){i.splice(c,1);break a}}u=n.createElement(l),Ne(u,l,t),n.head.appendChild(u);break;default:throw Error(E(468,l))}u[_e]=e,ge(u),l=u}e.stateNode=l}else Br(n,e.type,e.stateNode);else e.stateNode=Hr(n,l,e.memoizedProps);else u!==l?(u===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):u.count--,l===null?Br(n,e.type,e.stateNode):Hr(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&uc(e,e.memoizedProps,t.memoizedProps)}break;case 27:Fe(a,e),$e(e),l&512&&(he||t===null||ba(t,t.return)),t!==null&&l&4&&uc(e,e.memoizedProps,t.memoizedProps);break;case 5:if(Fe(a,e),$e(e),l&512&&(he||t===null||ba(t,t.return)),e.flags&32){n=e.stateNode;try{jt(n,"")}catch(y){te(e,e.return,y)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,uc(e,n,t!==null?t.memoizedProps:n)),l&1024&&(sc=!0);break;case 6:if(Fe(a,e),$e(e),l&4){if(e.stateNode===null)throw Error(E(162));l=e.memoizedProps,t=e.stateNode;try{t.nodeValue=l}catch(y){te(e,e.return,y)}}break;case 3:if(Ru=null,n=ha,ha=Tu(a.containerInfo),Fe(a,e),ha=n,$e(e),l&4&&t!==null&&t.memoizedState.isDehydrated)try{yn(a.containerInfo)}catch(y){te(e,e.return,y)}sc&&(sc=!1,Go(e));break;case 4:l=ha,ha=Tu(e.stateNode.containerInfo),Fe(a,e),$e(e),ha=l;break;case 12:Fe(a,e),$e(e);break;case 13:Fe(a,e),$e(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(yc=Sa()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 22:n=e.memoizedState!==null;var s=t!==null&&t.memoizedState!==null,m=Ba,S=he;if(Ba=m||n,he=S||s,Fe(a,e),he=S,Ba=m,$e(e),l&8192)e:for(a=e.stateNode,a._visibility=n?a._visibility&-2:a._visibility|1,n&&(t===null||s||Ba||he||_t(e)),t=null,a=e;;){if(a.tag===5||a.tag===26){if(t===null){s=t=a;try{if(u=s.stateNode,n)i=u.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{c=s.stateNode;var b=s.memoizedProps.style,h=b!=null&&b.hasOwnProperty("display")?b.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(y){te(s,s.return,y)}}}else if(a.tag===6){if(t===null){s=a;try{s.stateNode.nodeValue=n?"":s.memoizedProps}catch(y){te(s,s.return,y)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;t===a&&(t=null),a=a.return}t===a&&(t=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(t=l.retryQueue,t!==null&&(l.retryQueue=null,fc(e,t))));break;case 19:Fe(a,e),$e(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,fc(e,l)));break;case 30:break;case 21:break;default:Fe(a,e),$e(e)}}function $e(e){var a=e.flags;if(a&2){try{for(var t,l=e.return;l!==null;){if(Ho(l)){t=l;break}l=l.return}if(t==null)throw Error(E(160));switch(t.tag){case 27:var n=t.stateNode,u=ic(e);su(e,u,n);break;case 5:var i=t.stateNode;t.flags&32&&(jt(i,""),t.flags&=-33);var c=ic(e);su(e,c,i);break;case 3:case 4:var s=t.stateNode.containerInfo,m=ic(e);cc(e,m,s);break;default:throw Error(E(161))}}catch(S){te(e,e.return,S)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function Go(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;Go(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function $a(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)qo(e,a.alternate,a),a=a.sibling}function _t(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:Fa(4,a,a.return),_t(a);break;case 1:ba(a,a.return);var t=a.stateNode;typeof t.componentWillUnmount=="function"&&Lo(a,a.return,t),_t(a);break;case 27:cn(a.stateNode);case 26:case 5:ba(a,a.return),_t(a);break;case 22:a.memoizedState===null&&_t(a);break;case 30:_t(a);break;default:_t(a)}e=e.sibling}}function Pa(e,a,t){for(t=t&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,n=e,u=a,i=u.flags;switch(u.tag){case 0:case 11:case 15:Pa(n,u,t),Il(4,u);break;case 1:if(Pa(n,u,t),l=u,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(m){te(l,l.return,m)}if(l=u,n=l.updateQueue,n!==null){var c=l.stateNode;try{var s=n.shared.hiddenCallbacks;if(s!==null)for(n.shared.hiddenCallbacks=null,n=0;n<s.length;n++)Ef(s[n],c)}catch(m){te(l,l.return,m)}}t&&i&64&&Co(u),Fl(u,u.return);break;case 27:xo(u);case 26:case 5:Pa(n,u,t),t&&l===null&&i&4&&zo(u),Fl(u,u.return);break;case 12:Pa(n,u,t);break;case 13:Pa(n,u,t),t&&i&4&&jo(n,u);break;case 22:u.memoizedState===null&&Pa(n,u,t),Fl(u,u.return);break;case 30:break;default:Pa(n,u,t)}a=a.sibling}}function oc(e,a){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&Bl(t))}function rc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Bl(e))}function Ta(e,a,t,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Vo(e,a,t,l),a=a.sibling}function Vo(e,a,t,l){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a,t,l),n&2048&&Il(9,a);break;case 1:Ta(e,a,t,l);break;case 3:Ta(e,a,t,l),n&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&Bl(e)));break;case 12:if(n&2048){Ta(e,a,t,l),e=a.stateNode;try{var u=a.memoizedProps,i=u.id,c=u.onPostCommit;typeof c=="function"&&c(i,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(s){te(a,a.return,s)}}else Ta(e,a,t,l);break;case 13:Ta(e,a,t,l);break;case 23:break;case 22:u=a.stateNode,i=a.alternate,a.memoizedState!==null?u._visibility&2?Ta(e,a,t,l):$l(e,a):u._visibility&2?Ta(e,a,t,l):(u._visibility|=2,ul(e,a,t,l,(a.subtreeFlags&10256)!==0)),n&2048&&oc(i,a);break;case 24:Ta(e,a,t,l),n&2048&&rc(a.alternate,a);break;default:Ta(e,a,t,l)}}function ul(e,a,t,l,n){for(n=n&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var u=e,i=a,c=t,s=l,m=i.flags;switch(i.tag){case 0:case 11:case 15:ul(u,i,c,s,n),Il(8,i);break;case 23:break;case 22:var S=i.stateNode;i.memoizedState!==null?S._visibility&2?ul(u,i,c,s,n):$l(u,i):(S._visibility|=2,ul(u,i,c,s,n)),n&&m&2048&&oc(i.alternate,i);break;case 24:ul(u,i,c,s,n),n&&m&2048&&rc(i.alternate,i);break;default:ul(u,i,c,s,n)}a=a.sibling}}function $l(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var t=e,l=a,n=l.flags;switch(l.tag){case 22:$l(t,l),n&2048&&oc(l.alternate,l);break;case 24:$l(t,l),n&2048&&rc(l.alternate,l);break;default:$l(t,l)}a=a.sibling}}var Pl=8192;function il(e){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)Xo(e),e=e.sibling}function Xo(e){switch(e.tag){case 26:il(e),e.flags&Pl&&e.memoizedState!==null&&Sh(ha,e.memoizedState,e.memoizedProps);break;case 5:il(e);break;case 3:case 4:var a=ha;ha=Tu(e.stateNode.containerInfo),il(e),ha=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Pl,Pl=16777216,il(e),Pl=a):il(e));break;default:il(e)}}function Ko(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function en(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Te=l,ko(l,e)}Ko(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Zo(e),e=e.sibling}function Zo(e){switch(e.tag){case 0:case 11:case 15:en(e),e.flags&2048&&Fa(9,e,e.return);break;case 3:en(e);break;case 12:en(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,fu(e)):en(e);break;default:en(e)}}function fu(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var t=0;t<a.length;t++){var l=a[t];Te=l,ko(l,e)}Ko(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:Fa(8,a,a.return),fu(a);break;case 22:t=a.stateNode,t._visibility&2&&(t._visibility&=-3,fu(a));break;default:fu(a)}e=e.sibling}}function ko(e,a){for(;Te!==null;){var t=Te;switch(t.tag){case 0:case 11:case 15:Fa(8,t,a);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var l=t.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Bl(t.memoizedState.cache)}if(l=t.child,l!==null)l.return=t,Te=l;else e:for(t=e;Te!==null;){l=Te;var n=l.sibling,u=l.return;if(wo(l),l===t){Te=null;break e}if(n!==null){n.return=u,Te=n;break e}Te=u}}}var zm={getCacheForType:function(e){var a=Ue(Se),t=a.data.get(e);return t===void 0&&(t=e(),a.data.set(e,t)),t}},Hm=typeof WeakMap=="function"?WeakMap:Map,I=0,ne=null,Q=null,V=0,F=0,Pe=null,et=!1,cl=!1,dc=!1,wa=0,re=0,at=0,Ut=0,mc=0,fa=0,sl=0,an=null,Ge=null,hc=!1,yc=0,ou=1/0,ru=null,tt=null,Ae=0,lt=null,fl=null,ol=0,Ec=0,Sc=null,Jo=null,tn=0,vc=null;function ea(){if((I&2)!==0&&V!==0)return V&-V;if(v.T!==null){var e=Ft;return e!==0?e:Nc()}return ss()}function Wo(){fa===0&&(fa=(V&536870912)===0||J?ns():536870912);var e=sa.current;return e!==null&&(e.flags|=32),fa}function aa(e,a,t){(e===ne&&(F===2||F===9)||e.cancelPendingCommit!==null)&&(rl(e,0),nt(e,V,fa,!1)),bl(e,t),((I&2)===0||e!==ne)&&(e===ne&&((I&2)===0&&(Ut|=t),re===4&&nt(e,V,fa,!1)),pa(e))}function Io(e,a,t){if((I&6)!==0)throw Error(E(327));var l=!t&&(a&124)===0&&(a&e.expiredLanes)===0||gl(e,a),n=l?qm(e,a):Tc(e,a,!0),u=l;do{if(n===0){cl&&!l&&nt(e,a,0,!1);break}else{if(t=e.current.alternate,u&&!xm(t)){n=Tc(e,a,!1),u=!1;continue}if(n===2){if(u=a,e.errorRecoveryDisabledLanes&u)var i=0;else i=e.pendingLanes&-536870913,i=i!==0?i:i&536870912?536870912:0;if(i!==0){a=i;e:{var c=e;n=an;var s=c.current.memoizedState.isDehydrated;if(s&&(rl(c,i).flags|=256),i=Tc(c,i,!1),i!==2){if(dc&&!s){c.errorRecoveryDisabledLanes|=u,Ut|=u,n=4;break e}u=Ge,Ge=n,u!==null&&(Ge===null?Ge=u:Ge.push.apply(Ge,u))}n=i}if(u=!1,n!==2)continue}}if(n===1){rl(e,0),nt(e,a,0,!0);break}e:{switch(l=e,u=n,u){case 0:case 1:throw Error(E(345));case 4:if((a&4194048)!==a)break;case 6:nt(l,a,fa,!et);break e;case 2:Ge=null;break;case 3:case 5:break;default:throw Error(E(329))}if((a&62914560)===a&&(n=yc+300-Sa(),10<n)){if(nt(l,a,fa,!et),pn(l,0,!0)!==0)break e;l.timeoutHandle=Nr(Fo.bind(null,l,t,Ge,ru,hc,a,fa,Ut,sl,et,u,2,-0,0),n);break e}Fo(l,t,Ge,ru,hc,a,fa,Ut,sl,et,u,0,-0,0)}}break}while(!0);pa(e)}function Fo(e,a,t,l,n,u,i,c,s,m,S,b,h,y){if(e.timeoutHandle=-1,b=a.subtreeFlags,(b&8192||(b&16785408)===16785408)&&(on={stylesheets:null,count:0,unsuspend:Eh},Xo(a),b=vh(),b!==null)){e.cancelPendingCommit=b(nr.bind(null,e,a,u,t,l,n,i,c,s,S,1,h,y)),nt(e,u,i,!m);return}nr(e,a,u,t,l,n,i,c,s)}function xm(e){for(var a=e;;){var t=a.tag;if((t===0||t===11||t===15)&&a.flags&16384&&(t=a.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var l=0;l<t.length;l++){var n=t[l],u=n.getSnapshot;n=n.value;try{if(!We(u(),n))return!1}catch{return!1}}if(t=a.child,a.subtreeFlags&16384&&t!==null)t.return=a,a=t;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function nt(e,a,t,l){a&=~mc,a&=~Ut,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var n=a;0<n;){var u=31-Je(n),i=1<<u;l[u]=-1,n&=~i}t!==0&&is(e,t,a)}function du(){return(I&6)===0?(ln(0),!1):!0}function gc(){if(Q!==null){if(F===0)var e=Q.return;else e=Q,Ua=At=null,Bi(e),ll=null,kl=0,e=Q;for(;e!==null;)Uo(e.alternate,e),e=e.return;Q=null}}function rl(e,a){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,Pm(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),gc(),ne=e,Q=t=Da(e.current,null),V=a,F=0,Pe=null,et=!1,cl=gl(e,a),dc=!1,sl=fa=mc=Ut=at=re=0,Ge=an=null,hc=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var n=31-Je(l),u=1<<n;a|=e[n],l&=~u}return wa=a,Hn(),t}function $o(e,a){Y=null,v.H=Pn,a===wl||a===Vn?(a=hf(),F=3):a===rf?(a=hf(),F=4):F=a===Eo?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Pe=a,Q===null&&(re=1,nu(e,na(a,e.current)))}function Po(){var e=v.H;return v.H=Pn,e===null?Pn:e}function er(){var e=v.A;return v.A=zm,e}function bc(){re=4,et||(V&4194048)!==V&&sa.current!==null||(cl=!0),(at&134217727)===0&&(Ut&134217727)===0||ne===null||nt(ne,V,fa,!1)}function Tc(e,a,t){var l=I;I|=2;var n=Po(),u=er();(ne!==e||V!==a)&&(ru=null,rl(e,a)),a=!1;var i=re;e:do try{if(F!==0&&Q!==null){var c=Q,s=Pe;switch(F){case 8:gc(),i=6;break e;case 3:case 2:case 9:case 6:sa.current===null&&(a=!0);var m=F;if(F=0,Pe=null,dl(e,c,s,m),t&&cl){i=0;break e}break;default:m=F,F=0,Pe=null,dl(e,c,s,m)}}Bm(),i=re;break}catch(S){$o(e,S)}while(!0);return a&&e.shellSuspendCounter++,Ua=At=null,I=l,v.H=n,v.A=u,Q===null&&(ne=null,V=0,Hn()),i}function Bm(){for(;Q!==null;)ar(Q)}function qm(e,a){var t=I;I|=2;var l=Po(),n=er();ne!==e||V!==a?(ru=null,ou=Sa()+500,rl(e,a)):cl=gl(e,a);e:do try{if(F!==0&&Q!==null){a=Q;var u=Pe;a:switch(F){case 1:F=0,Pe=null,dl(e,a,u,1);break;case 2:case 9:if(df(u)){F=0,Pe=null,tr(a);break}a=function(){F!==2&&F!==9||ne!==e||(F=7),pa(e)},u.then(a,a);break e;case 3:F=7;break e;case 4:F=5;break e;case 7:df(u)?(F=0,Pe=null,tr(a)):(F=0,Pe=null,dl(e,a,u,7));break;case 5:var i=null;switch(Q.tag){case 26:i=Q.memoizedState;case 5:case 27:var c=Q;if(!i||qr(i)){F=0,Pe=null;var s=c.sibling;if(s!==null)Q=s;else{var m=c.return;m!==null?(Q=m,mu(m)):Q=null}break a}}F=0,Pe=null,dl(e,a,u,5);break;case 6:F=0,Pe=null,dl(e,a,u,6);break;case 8:gc(),re=6;break e;default:throw Error(E(462))}}wm();break}catch(S){$o(e,S)}while(!0);return Ua=At=null,v.H=l,v.A=n,I=t,Q!==null?0:(ne=null,V=0,Hn(),re)}function wm(){for(;Q!==null&&!id();)ar(Q)}function ar(e){var a=Mo(e.alternate,e,wa);e.memoizedProps=e.pendingProps,a===null?mu(e):Q=a}function tr(e){var a=e,t=a.alternate;switch(a.tag){case 15:case 0:a=po(t,a,a.pendingProps,a.type,void 0,V);break;case 11:a=po(t,a,a.pendingProps,a.type.render,a.ref,V);break;case 5:Bi(a);default:Uo(t,a),a=Q=af(a,wa),a=Mo(t,a,wa)}e.memoizedProps=e.pendingProps,a===null?mu(e):Q=a}function dl(e,a,t,l){Ua=At=null,Bi(a),ll=null,kl=0;var n=a.return;try{if(Dm(e,n,a,t,V)){re=1,nu(e,na(t,e.current)),Q=null;return}}catch(u){if(n!==null)throw Q=n,u;re=1,nu(e,na(t,e.current)),Q=null;return}a.flags&32768?(J||l===1?e=!0:cl||(V&536870912)!==0?e=!1:(et=e=!0,(l===2||l===9||l===3||l===6)&&(l=sa.current,l!==null&&l.tag===13&&(l.flags|=16384))),lr(a,e)):mu(a)}function mu(e){var a=e;do{if((a.flags&32768)!==0){lr(a,et);return}e=a.return;var t=_m(a.alternate,a,wa);if(t!==null){Q=t;return}if(a=a.sibling,a!==null){Q=a;return}Q=a=e}while(a!==null);re===0&&(re=5)}function lr(e,a){do{var t=Um(e.alternate,e);if(t!==null){t.flags&=32767,Q=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!a&&(e=e.sibling,e!==null)){Q=e;return}Q=e=t}while(e!==null);re=6,Q=null}function nr(e,a,t,l,n,u,i,c,s){e.cancelPendingCommit=null;do hu();while(Ae!==0);if((I&6)!==0)throw Error(E(327));if(a!==null){if(a===e.current)throw Error(E(177));if(u=a.lanes|a.childLanes,u|=ri,Ed(e,t,u,i,c,s),e===ne&&(Q=ne=null,V=0),fl=a,lt=e,ol=t,Ec=u,Sc=n,Jo=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gm(gn,function(){return fr(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,n=A.p,A.p=2,i=I,I|=4;try{Cm(e,a,t)}finally{I=i,A.p=n,v.T=l}}Ae=1,ur(),ir(),cr()}}function ur(){if(Ae===1){Ae=0;var e=lt,a=fl,t=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||t){t=v.T,v.T=null;var l=A.p;A.p=2;var n=I;I|=4;try{Qo(a,e);var u=zc,i=Ks(e.containerInfo),c=u.focusedElem,s=u.selectionRange;if(i!==c&&c&&c.ownerDocument&&Xs(c.ownerDocument.documentElement,c)){if(s!==null&&ii(c)){var m=s.start,S=s.end;if(S===void 0&&(S=m),"selectionStart"in c)c.selectionStart=m,c.selectionEnd=Math.min(S,c.value.length);else{var b=c.ownerDocument||document,h=b&&b.defaultView||window;if(h.getSelection){var y=h.getSelection(),B=c.textContent.length,L=Math.min(s.start,B),ee=s.end===void 0?L:Math.min(s.end,B);!y.extend&&L>ee&&(i=ee,ee=L,L=i);var r=Vs(c,L),o=Vs(c,ee);if(r&&o&&(y.rangeCount!==1||y.anchorNode!==r.node||y.anchorOffset!==r.offset||y.focusNode!==o.node||y.focusOffset!==o.offset)){var d=b.createRange();d.setStart(r.node,r.offset),y.removeAllRanges(),L>ee?(y.addRange(d),y.extend(o.node,o.offset)):(d.setEnd(o.node,o.offset),y.addRange(d))}}}}for(b=[],y=c;y=y.parentNode;)y.nodeType===1&&b.push({element:y,left:y.scrollLeft,top:y.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<b.length;c++){var g=b[c];g.element.scrollLeft=g.left,g.element.scrollTop=g.top}}Ou=!!Lc,zc=Lc=null}finally{I=n,A.p=l,v.T=t}}e.current=a,Ae=2}}function ir(){if(Ae===2){Ae=0;var e=lt,a=fl,t=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||t){t=v.T,v.T=null;var l=A.p;A.p=2;var n=I;I|=4;try{qo(e,a.alternate,a)}finally{I=n,A.p=l,v.T=t}}Ae=3}}function cr(){if(Ae===4||Ae===3){Ae=0,cd();var e=lt,a=fl,t=ol,l=Jo;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Ae=5:(Ae=0,fl=lt=null,sr(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(tt=null),Yu(t),a=a.stateNode,ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(vl,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=v.T,n=A.p,A.p=2,v.T=null;try{for(var u=e.onRecoverableError,i=0;i<l.length;i++){var c=l[i];u(c.value,{componentStack:c.stack})}}finally{v.T=a,A.p=n}}(ol&3)!==0&&hu(),pa(e),n=e.pendingLanes,(t&4194090)!==0&&(n&42)!==0?e===vc?tn++:(tn=0,vc=e):tn=0,ln(0)}}function sr(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,Bl(a)))}function hu(e){return ur(),ir(),cr(),fr()}function fr(){if(Ae!==5)return!1;var e=lt,a=Ec;Ec=0;var t=Yu(ol),l=v.T,n=A.p;try{A.p=32>t?32:t,v.T=null,t=Sc,Sc=null;var u=lt,i=ol;if(Ae=0,fl=lt=null,ol=0,(I&6)!==0)throw Error(E(331));var c=I;if(I|=4,Zo(u.current),Vo(u,u.current,i,t),I=c,ln(0,!1),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(vl,u)}catch{}return!0}finally{A.p=n,v.T=l,sr(e,a)}}function or(e,a,t){a=na(t,a),a=Ii(e.stateNode,a,2),e=ka(e,a,2),e!==null&&(bl(e,2),pa(e))}function te(e,a,t){if(e.tag===3)or(e,e,t);else for(;a!==null;){if(a.tag===3){or(a,e,t);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(tt===null||!tt.has(l))){e=na(t,e),t=ho(2),l=ka(a,t,2),l!==null&&(yo(t,l,a,e),bl(l,2),pa(l));break}}a=a.return}}function pc(e,a,t){var l=e.pingCache;if(l===null){l=e.pingCache=new Hm;var n=new Set;l.set(a,n)}else n=l.get(a),n===void 0&&(n=new Set,l.set(a,n));n.has(t)||(dc=!0,n.add(t),e=Ym.bind(null,e,a,t),a.then(e,e))}function Ym(e,a,t){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,ne===e&&(V&t)===t&&(re===4||re===3&&(V&62914560)===V&&300>Sa()-yc?(I&2)===0&&rl(e,0):mc|=t,sl===V&&(sl=0)),pa(e)}function rr(e,a){a===0&&(a=us()),e=kt(e,a),e!==null&&(bl(e,a),pa(e))}function jm(e){var a=e.memoizedState,t=0;a!==null&&(t=a.retryLane),rr(e,t)}function Qm(e,a){var t=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(t=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(E(314))}l!==null&&l.delete(a),rr(e,t)}function Gm(e,a){return xu(e,a)}var yu=null,ml=null,Rc=!1,Eu=!1,Ac=!1,Ct=0;function pa(e){e!==ml&&e.next===null&&(ml===null?yu=ml=e:ml=ml.next=e),Eu=!0,Rc||(Rc=!0,Xm())}function ln(e,a){if(!Ac&&Eu){Ac=!0;do for(var t=!1,l=yu;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var u=0;else{var i=l.suspendedLanes,c=l.pingedLanes;u=(1<<31-Je(42|e)+1)-1,u&=n&~(i&~c),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(t=!0,yr(l,u))}else u=V,u=pn(l,l===ne?u:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(u&3)===0||gl(l,u)||(t=!0,yr(l,u));l=l.next}while(t);Ac=!1}}function Vm(){dr()}function dr(){Eu=Rc=!1;var e=0;Ct!==0&&($m()&&(e=Ct),Ct=0);for(var a=Sa(),t=null,l=yu;l!==null;){var n=l.next,u=mr(l,a);u===0?(l.next=null,t===null?yu=n:t.next=n,n===null&&(ml=t)):(t=l,(e!==0||(u&3)!==0)&&(Eu=!0)),l=n}ln(e)}function mr(e,a){for(var t=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var i=31-Je(u),c=1<<i,s=n[i];s===-1?((c&t)===0||(c&l)!==0)&&(n[i]=yd(c,a)):s<=a&&(e.expiredLanes|=c),u&=~c}if(a=ne,t=V,t=pn(e,e===a?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,t===0||e===a&&(F===2||F===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Bu(l),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||gl(e,t)){if(a=t&-t,a===e.callbackPriority)return a;switch(l!==null&&Bu(l),Yu(t)){case 2:case 8:t=ts;break;case 32:t=gn;break;case 268435456:t=ls;break;default:t=gn}return l=hr.bind(null,e),t=xu(t,l),e.callbackPriority=a,e.callbackNode=t,a}return l!==null&&l!==null&&Bu(l),e.callbackPriority=2,e.callbackNode=null,2}function hr(e,a){if(Ae!==0&&Ae!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(hu()&&e.callbackNode!==t)return null;var l=V;return l=pn(e,e===ne?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Io(e,l,a),mr(e,Sa()),e.callbackNode!=null&&e.callbackNode===t?hr.bind(null,e):null)}function yr(e,a){if(hu())return null;Io(e,a,!0)}function Xm(){eh(function(){(I&6)!==0?xu(as,Vm):dr()})}function Nc(){return Ct===0&&(Ct=ns()),Ct}function Er(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Dn(""+e)}function Sr(e,a){var t=a.ownerDocument.createElement("input");return t.name=a.name,t.value=a.value,e.id&&t.setAttribute("form",e.id),a.parentNode.insertBefore(t,a),e=new FormData(e),t.parentNode.removeChild(t),e}function Km(e,a,t,l,n){if(a==="submit"&&t&&t.stateNode===n){var u=Er((n[we]||null).action),i=l.submitter;i&&(a=(a=i[we]||null)?Er(a.formAction):i.getAttribute("formAction"),a!==null&&(u=a,i=null));var c=new Cn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ct!==0){var s=i?Sr(n,i):new FormData(n);Ki(t,{pending:!0,data:s,method:n.method,action:u},null,s)}}else typeof u=="function"&&(c.preventDefault(),s=i?Sr(n,i):new FormData(n),Ki(t,{pending:!0,data:s,method:n.method,action:u},u,s))},currentTarget:n}]})}}for(var Oc=0;Oc<oi.length;Oc++){var Dc=oi[Oc],Zm=Dc.toLowerCase(),km=Dc[0].toUpperCase()+Dc.slice(1);ma(Zm,"on"+km)}ma(Js,"onAnimationEnd"),ma(Ws,"onAnimationIteration"),ma(Is,"onAnimationStart"),ma("dblclick","onDoubleClick"),ma("focusin","onFocus"),ma("focusout","onBlur"),ma(om,"onTransitionRun"),ma(rm,"onTransitionStart"),ma(dm,"onTransitionCancel"),ma(Fs,"onTransitionEnd"),qt("onMouseEnter",["mouseout","mouseover"]),qt("onMouseLeave",["mouseout","mouseover"]),qt("onPointerEnter",["pointerout","pointerover"]),qt("onPointerLeave",["pointerout","pointerover"]),yt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),yt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),yt("onBeforeInput",["compositionend","keypress","textInput","paste"]),yt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),yt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),yt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nn));function vr(e,a){a=(a&4)!==0;for(var t=0;t<e.length;t++){var l=e[t],n=l.event;l=l.listeners;e:{var u=void 0;if(a)for(var i=l.length-1;0<=i;i--){var c=l[i],s=c.instance,m=c.currentTarget;if(c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(S){lu(S)}n.currentTarget=null,u=s}else for(i=0;i<l.length;i++){if(c=l[i],s=c.instance,m=c.currentTarget,c=c.listener,s!==u&&n.isPropagationStopped())break e;u=c,n.currentTarget=m;try{u(n)}catch(S){lu(S)}n.currentTarget=null,u=s}}}}function G(e,a){var t=a[ju];t===void 0&&(t=a[ju]=new Set);var l=e+"__bubble";t.has(l)||(gr(a,e,2,!1),t.add(l))}function Mc(e,a,t){var l=0;a&&(l|=4),gr(t,e,l,a)}var Su="_reactListening"+Math.random().toString(36).slice(2);function _c(e){if(!e[Su]){e[Su]=!0,os.forEach(function(t){t!=="selectionchange"&&(Jm.has(t)||Mc(t,!1,e),Mc(t,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Su]||(a[Su]=!0,Mc("selectionchange",!1,a))}}function gr(e,a,t,l){switch(Vr(a)){case 2:var n=Th;break;case 8:n=ph;break;default:n=Vc}t=n.bind(null,a,t,e),n=void 0,!Fu||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(a,t,{capture:!0,passive:n}):e.addEventListener(a,t,!0):n!==void 0?e.addEventListener(a,t,{passive:n}):e.addEventListener(a,t,!1)}function Uc(e,a,t,l,n){var u=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var i=l.tag;if(i===3||i===4){var c=l.stateNode.containerInfo;if(c===n)break;if(i===4)for(i=l.return;i!==null;){var s=i.tag;if((s===3||s===4)&&i.stateNode.containerInfo===n)return;i=i.return}for(;c!==null;){if(i=Ht(c),i===null)return;if(s=i.tag,s===5||s===6||s===26||s===27){l=u=i;continue e}c=c.parentNode}}l=l.return}As(function(){var m=u,S=Wu(t),b=[];e:{var h=$s.get(e);if(h!==void 0){var y=Cn,B=e;switch(e){case"keypress":if(_n(t)===0)break e;case"keydown":case"keyup":y=Gd;break;case"focusin":B="focus",y=ai;break;case"focusout":B="blur",y=ai;break;case"beforeblur":case"afterblur":y=ai;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Ud;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Kd;break;case Js:case Ws:case Is:y=zd;break;case Fs:y=kd;break;case"scroll":case"scrollend":y=Md;break;case"wheel":y=Wd;break;case"copy":case"cut":case"paste":y=xd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=_s;break;case"toggle":case"beforetoggle":y=Fd}var L=(a&4)!==0,ee=!L&&(e==="scroll"||e==="scrollend"),r=L?h!==null?h+"Capture":null:h;L=[];for(var o=m,d;o!==null;){var g=o;if(d=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||d===null||r===null||(g=Rl(o,r),g!=null&&L.push(un(o,g,d))),ee)break;o=o.return}0<L.length&&(h=new y(h,B,null,t,S),b.push({event:h,listeners:L}))}}if((a&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",h&&t!==Ju&&(B=t.relatedTarget||t.fromElement)&&(Ht(B)||B[zt]))break e;if((y||h)&&(h=S.window===S?S:(h=S.ownerDocument)?h.defaultView||h.parentWindow:window,y?(B=t.relatedTarget||t.toElement,y=m,B=B?Ht(B):null,B!==null&&(ee=k(B),L=B.tag,B!==ee||L!==5&&L!==27&&L!==6)&&(B=null)):(y=null,B=m),y!==B)){if(L=Ds,g="onMouseLeave",r="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&(L=_s,g="onPointerLeave",r="onPointerEnter",o="pointer"),ee=y==null?h:pl(y),d=B==null?h:pl(B),h=new L(g,o+"leave",y,t,S),h.target=ee,h.relatedTarget=d,g=null,Ht(S)===m&&(L=new L(r,o+"enter",B,t,S),L.target=d,L.relatedTarget=ee,g=L),ee=g,y&&B)a:{for(L=y,r=B,o=0,d=L;d;d=hl(d))o++;for(d=0,g=r;g;g=hl(g))d++;for(;0<o-d;)L=hl(L),o--;for(;0<d-o;)r=hl(r),d--;for(;o--;){if(L===r||r!==null&&L===r.alternate)break a;L=hl(L),r=hl(r)}L=null}else L=null;y!==null&&br(b,h,y,L,!1),B!==null&&ee!==null&&br(b,ee,B,L,!0)}}e:{if(h=m?pl(m):window,y=h.nodeName&&h.nodeName.toLowerCase(),y==="select"||y==="input"&&h.type==="file")var O=qs;else if(xs(h))if(ws)O=cm;else{O=um;var j=nm}else y=h.nodeName,!y||y.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?m&&ku(m.elementType)&&(O=qs):O=im;if(O&&(O=O(e,m))){Bs(b,O,t,S);break e}j&&j(e,h,m),e==="focusout"&&m&&h.type==="number"&&m.memoizedProps.value!=null&&Zu(h,"number",h.value)}switch(j=m?pl(m):window,e){case"focusin":(xs(j)||j.contentEditable==="true")&&(Xt=j,ci=m,Cl=null);break;case"focusout":Cl=ci=Xt=null;break;case"mousedown":si=!0;break;case"contextmenu":case"mouseup":case"dragend":si=!1,Zs(b,t,S);break;case"selectionchange":if(fm)break;case"keydown":case"keyup":Zs(b,t,S)}var M;if(li)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Vt?zs(e,t)&&(z="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(z="onCompositionStart");z&&(Us&&t.locale!=="ko"&&(Vt||z!=="onCompositionStart"?z==="onCompositionEnd"&&Vt&&(M=Ns()):(Va=S,$u="value"in Va?Va.value:Va.textContent,Vt=!0)),j=vu(m,z),0<j.length&&(z=new Ms(z,e,null,t,S),b.push({event:z,listeners:j}),M?z.data=M:(M=Hs(t),M!==null&&(z.data=M)))),(M=Pd?em(e,t):am(e,t))&&(z=vu(m,"onBeforeInput"),0<z.length&&(j=new Ms("onBeforeInput","beforeinput",null,t,S),b.push({event:j,listeners:z}),j.data=M)),Km(b,e,m,t,S)}vr(b,a)})}function un(e,a,t){return{instance:e,listener:a,currentTarget:t}}function vu(e,a){for(var t=a+"Capture",l=[];e!==null;){var n=e,u=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||u===null||(n=Rl(e,t),n!=null&&l.unshift(un(e,n,u)),n=Rl(e,a),n!=null&&l.push(un(e,n,u))),e.tag===3)return l;e=e.return}return[]}function hl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function br(e,a,t,l,n){for(var u=a._reactName,i=[];t!==null&&t!==l;){var c=t,s=c.alternate,m=c.stateNode;if(c=c.tag,s!==null&&s===l)break;c!==5&&c!==26&&c!==27||m===null||(s=m,n?(m=Rl(t,u),m!=null&&i.unshift(un(t,m,s))):n||(m=Rl(t,u),m!=null&&i.push(un(t,m,s)))),t=t.return}i.length!==0&&e.push({event:a,listeners:i})}var Wm=/\r\n?/g,Im=/\u0000|\uFFFD/g;function Tr(e){return(typeof e=="string"?e:""+e).replace(Wm,`
`).replace(Im,"")}function pr(e,a){return a=Tr(a),Tr(e)===a}function gu(){}function P(e,a,t,l,n,u){switch(t){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||jt(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&jt(e,""+l);break;case"className":An(e,"class",l);break;case"tabIndex":An(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":An(e,t,l);break;case"style":ps(e,l,u);break;case"data":if(a!=="object"){An(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||t!=="href")){e.removeAttribute(t);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Dn(""+l),e.setAttribute(t,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(t==="formAction"?(a!=="input"&&P(e,a,"name",n.name,n,null),P(e,a,"formEncType",n.formEncType,n,null),P(e,a,"formMethod",n.formMethod,n,null),P(e,a,"formTarget",n.formTarget,n,null)):(P(e,a,"encType",n.encType,n,null),P(e,a,"method",n.method,n,null),P(e,a,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(t);break}l=Dn(""+l),e.setAttribute(t,l);break;case"onClick":l!=null&&(e.onclick=gu);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(E(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(E(60));e.innerHTML=t}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}t=Dn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""+l):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":l===!0?e.setAttribute(t,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(t,l):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(t,l):e.removeAttribute(t);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(t):e.setAttribute(t,l);break;case"popover":G("beforetoggle",e),G("toggle",e),Rn(e,"popover",l);break;case"xlinkActuate":Na(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Na(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Na(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Na(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Na(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Na(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Na(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Rn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=Od.get(t)||t,Rn(e,t,l))}}function Cc(e,a,t,l,n,u){switch(t){case"style":ps(e,l,u);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(E(61));if(t=l.__html,t!=null){if(n.children!=null)throw Error(E(60));e.innerHTML=t}}break;case"children":typeof l=="string"?jt(e,l):(typeof l=="number"||typeof l=="bigint")&&jt(e,""+l);break;case"onScroll":l!=null&&G("scroll",e);break;case"onScrollEnd":l!=null&&G("scrollend",e);break;case"onClick":l!=null&&(e.onclick=gu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rs.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(n=t.endsWith("Capture"),a=t.slice(2,n?t.length-7:void 0),u=e[we]||null,u=u!=null?u[t]:null,typeof u=="function"&&e.removeEventListener(a,u,n),typeof l=="function")){typeof u!="function"&&u!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(a,l,n);break e}t in e?e[t]=l:l===!0?e.setAttribute(t,""):Rn(e,t,l)}}}function Ne(e,a,t){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var l=!1,n=!1,u;for(u in t)if(t.hasOwnProperty(u)){var i=t[u];if(i!=null)switch(u){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(E(137,a));default:P(e,a,u,i,t,null)}}n&&P(e,a,"srcSet",t.srcSet,t,null),l&&P(e,a,"src",t.src,t,null);return;case"input":G("invalid",e);var c=u=i=n=null,s=null,m=null;for(l in t)if(t.hasOwnProperty(l)){var S=t[l];if(S!=null)switch(l){case"name":n=S;break;case"type":i=S;break;case"checked":s=S;break;case"defaultChecked":m=S;break;case"value":u=S;break;case"defaultValue":c=S;break;case"children":case"dangerouslySetInnerHTML":if(S!=null)throw Error(E(137,a));break;default:P(e,a,l,S,t,null)}}vs(e,u,c,s,m,i,n,!1),Nn(e);return;case"select":G("invalid",e),l=i=u=null;for(n in t)if(t.hasOwnProperty(n)&&(c=t[n],c!=null))switch(n){case"value":u=c;break;case"defaultValue":i=c;break;case"multiple":l=c;default:P(e,a,n,c,t,null)}a=u,t=i,e.multiple=!!l,a!=null?Yt(e,!!l,a,!1):t!=null&&Yt(e,!!l,t,!0);return;case"textarea":G("invalid",e),u=n=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":n=c;break;case"children":u=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(E(91));break;default:P(e,a,i,c,t,null)}bs(e,l,n,u),Nn(e);return;case"option":for(s in t)if(t.hasOwnProperty(s)&&(l=t[s],l!=null))switch(s){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:P(e,a,s,l,t,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(l=0;l<nn.length;l++)G(nn[l],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in t)if(t.hasOwnProperty(m)&&(l=t[m],l!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(E(137,a));default:P(e,a,m,l,t,null)}return;default:if(ku(a)){for(S in t)t.hasOwnProperty(S)&&(l=t[S],l!==void 0&&Cc(e,a,S,l,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(l=t[c],l!=null&&P(e,a,c,l,t,null))}function Fm(e,a,t,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,u=null,i=null,c=null,s=null,m=null,S=null;for(y in t){var b=t[y];if(t.hasOwnProperty(y)&&b!=null)switch(y){case"checked":break;case"value":break;case"defaultValue":s=b;default:l.hasOwnProperty(y)||P(e,a,y,null,l,b)}}for(var h in l){var y=l[h];if(b=t[h],l.hasOwnProperty(h)&&(y!=null||b!=null))switch(h){case"type":u=y;break;case"name":n=y;break;case"checked":m=y;break;case"defaultChecked":S=y;break;case"value":i=y;break;case"defaultValue":c=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(E(137,a));break;default:y!==b&&P(e,a,h,y,l,b)}}Ku(e,i,c,s,m,S,u,n);return;case"select":y=i=c=h=null;for(u in t)if(s=t[u],t.hasOwnProperty(u)&&s!=null)switch(u){case"value":break;case"multiple":y=s;default:l.hasOwnProperty(u)||P(e,a,u,null,l,s)}for(n in l)if(u=l[n],s=t[n],l.hasOwnProperty(n)&&(u!=null||s!=null))switch(n){case"value":h=u;break;case"defaultValue":c=u;break;case"multiple":i=u;default:u!==s&&P(e,a,n,u,l,s)}a=c,t=i,l=y,h!=null?Yt(e,!!t,h,!1):!!l!=!!t&&(a!=null?Yt(e,!!t,a,!0):Yt(e,!!t,t?[]:"",!1));return;case"textarea":y=h=null;for(c in t)if(n=t[c],t.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:P(e,a,c,null,l,n)}for(i in l)if(n=l[i],u=t[i],l.hasOwnProperty(i)&&(n!=null||u!=null))switch(i){case"value":h=n;break;case"defaultValue":y=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(E(91));break;default:n!==u&&P(e,a,i,n,l,u)}gs(e,h,y);return;case"option":for(var B in t)if(h=t[B],t.hasOwnProperty(B)&&h!=null&&!l.hasOwnProperty(B))switch(B){case"selected":e.selected=!1;break;default:P(e,a,B,null,l,h)}for(s in l)if(h=l[s],y=t[s],l.hasOwnProperty(s)&&h!==y&&(h!=null||y!=null))switch(s){case"selected":e.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:P(e,a,s,h,l,y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var L in t)h=t[L],t.hasOwnProperty(L)&&h!=null&&!l.hasOwnProperty(L)&&P(e,a,L,null,l,h);for(m in l)if(h=l[m],y=t[m],l.hasOwnProperty(m)&&h!==y&&(h!=null||y!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(E(137,a));break;default:P(e,a,m,h,l,y)}return;default:if(ku(a)){for(var ee in t)h=t[ee],t.hasOwnProperty(ee)&&h!==void 0&&!l.hasOwnProperty(ee)&&Cc(e,a,ee,void 0,l,h);for(S in l)h=l[S],y=t[S],!l.hasOwnProperty(S)||h===y||h===void 0&&y===void 0||Cc(e,a,S,h,l,y);return}}for(var r in t)h=t[r],t.hasOwnProperty(r)&&h!=null&&!l.hasOwnProperty(r)&&P(e,a,r,null,l,h);for(b in l)h=l[b],y=t[b],!l.hasOwnProperty(b)||h===y||h==null&&y==null||P(e,a,b,h,l,y)}var Lc=null,zc=null;function bu(e){return e.nodeType===9?e:e.ownerDocument}function Rr(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ar(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Hc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var xc=null;function $m(){var e=window.event;return e&&e.type==="popstate"?e===xc?!1:(xc=e,!0):(xc=null,!1)}var Nr=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,Or=typeof Promise=="function"?Promise:void 0,eh=typeof queueMicrotask=="function"?queueMicrotask:typeof Or<"u"?function(e){return Or.resolve(null).then(e).catch(ah)}:Nr;function ah(e){setTimeout(function(){throw e})}function ut(e){return e==="head"}function Dr(e,a){var t=a,l=0,n=0;do{var u=t.nextSibling;if(e.removeChild(t),u&&u.nodeType===8)if(t=u.data,t==="/$"){if(0<l&&8>l){t=l;var i=e.ownerDocument;if(t&1&&cn(i.documentElement),t&2&&cn(i.body),t&4)for(t=i.head,cn(t),i=t.firstChild;i;){var c=i.nextSibling,s=i.nodeName;i[Tl]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||t.removeChild(i),i=c}}if(n===0){e.removeChild(u),yn(a);return}n--}else t==="$"||t==="$?"||t==="$!"?n++:l=t.charCodeAt(0)-48;else l=0;t=u}while(t);yn(a)}function Bc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var t=a;switch(a=a.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Bc(t),Qu(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function th(e,a,t,l){for(;e.nodeType===1;){var n=t;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Tl])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var u=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=ya(e.nextSibling),e===null)break}return null}function lh(e,a,t){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ya(e.nextSibling),e===null))return null;return e}function qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function nh(e,a){var t=e.ownerDocument;if(e.data!=="$?"||t.readyState==="complete")a();else{var l=function(){a(),t.removeEventListener("DOMContentLoaded",l)};t.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ya(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return e}var wc=null;function Mr(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(a===0)return e;a--}else t==="/$"&&a++}e=e.previousSibling}return null}function _r(e,a,t){switch(a=bu(t),e){case"html":if(e=a.documentElement,!e)throw Error(E(452));return e;case"head":if(e=a.head,!e)throw Error(E(453));return e;case"body":if(e=a.body,!e)throw Error(E(454));return e;default:throw Error(E(451))}}function cn(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Qu(e)}var oa=new Map,Ur=new Set;function Tu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ya=A.d;A.d={f:uh,r:ih,D:ch,C:sh,L:fh,m:oh,X:dh,S:rh,M:mh};function uh(){var e=Ya.f(),a=du();return e||a}function ih(e){var a=xt(e);a!==null&&a.tag===5&&a.type==="form"?Wf(a):Ya.r(e)}var yl=typeof document>"u"?null:document;function Cr(e,a,t){var l=yl;if(l&&typeof a=="string"&&a){var n=la(a);n='link[rel="'+e+'"][href="'+n+'"]',typeof t=="string"&&(n+='[crossorigin="'+t+'"]'),Ur.has(n)||(Ur.add(n),e={rel:e,crossOrigin:t,href:a},l.querySelector(n)===null&&(a=l.createElement("link"),Ne(a,"link",e),ge(a),l.head.appendChild(a)))}}function ch(e){Ya.D(e),Cr("dns-prefetch",e,null)}function sh(e,a){Ya.C(e,a),Cr("preconnect",e,a)}function fh(e,a,t){Ya.L(e,a,t);var l=yl;if(l&&e&&a){var n='link[rel="preload"][as="'+la(a)+'"]';a==="image"&&t&&t.imageSrcSet?(n+='[imagesrcset="'+la(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(n+='[imagesizes="'+la(t.imageSizes)+'"]')):n+='[href="'+la(e)+'"]';var u=n;switch(a){case"style":u=El(e);break;case"script":u=Sl(e)}oa.has(u)||(e=_({rel:"preload",href:a==="image"&&t&&t.imageSrcSet?void 0:e,as:a},t),oa.set(u,e),l.querySelector(n)!==null||a==="style"&&l.querySelector(sn(u))||a==="script"&&l.querySelector(fn(u))||(a=l.createElement("link"),Ne(a,"link",e),ge(a),l.head.appendChild(a)))}}function oh(e,a){Ya.m(e,a);var t=yl;if(t&&e){var l=a&&typeof a.as=="string"?a.as:"script",n='link[rel="modulepreload"][as="'+la(l)+'"][href="'+la(e)+'"]',u=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Sl(e)}if(!oa.has(u)&&(e=_({rel:"modulepreload",href:e},a),oa.set(u,e),t.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(fn(u)))return}l=t.createElement("link"),Ne(l,"link",e),ge(l),t.head.appendChild(l)}}}function rh(e,a,t){Ya.S(e,a,t);var l=yl;if(l&&e){var n=Bt(l).hoistableStyles,u=El(e);a=a||"default";var i=n.get(u);if(!i){var c={loading:0,preload:null};if(i=l.querySelector(sn(u)))c.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":a},t),(t=oa.get(u))&&Yc(e,t);var s=i=l.createElement("link");ge(s),Ne(s,"link",e),s._p=new Promise(function(m,S){s.onload=m,s.onerror=S}),s.addEventListener("load",function(){c.loading|=1}),s.addEventListener("error",function(){c.loading|=2}),c.loading|=4,pu(i,a,l)}i={type:"stylesheet",instance:i,count:1,state:c},n.set(u,i)}}}function dh(e,a){Ya.X(e,a);var t=yl;if(t&&e){var l=Bt(t).hoistableScripts,n=Sl(e),u=l.get(n);u||(u=t.querySelector(fn(n)),u||(e=_({src:e,async:!0},a),(a=oa.get(n))&&jc(e,a),u=t.createElement("script"),ge(u),Ne(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function mh(e,a){Ya.M(e,a);var t=yl;if(t&&e){var l=Bt(t).hoistableScripts,n=Sl(e),u=l.get(n);u||(u=t.querySelector(fn(n)),u||(e=_({src:e,async:!0,type:"module"},a),(a=oa.get(n))&&jc(e,a),u=t.createElement("script"),ge(u),Ne(u,"link",e),t.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},l.set(n,u))}}function Lr(e,a,t,l){var n=(n=q.current)?Tu(n):null;if(!n)throw Error(E(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(a=El(t.href),t=Bt(n).hoistableStyles,l=t.get(a),l||(l={type:"style",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=El(t.href);var u=Bt(n).hoistableStyles,i=u.get(e);if(i||(n=n.ownerDocument||n,i={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,i),(u=n.querySelector(sn(e)))&&!u._p&&(i.instance=u,i.state.loading=5),oa.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},oa.set(e,t),u||hh(n,e,t,i.state))),a&&l===null)throw Error(E(528,""));return i}if(a&&l!==null)throw Error(E(529,""));return null;case"script":return a=t.async,t=t.src,typeof t=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Sl(t),t=Bt(n).hoistableScripts,l=t.get(a),l||(l={type:"script",instance:null,count:0,state:null},t.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(E(444,e))}}function El(e){return'href="'+la(e)+'"'}function sn(e){return'link[rel="stylesheet"]['+e+"]"}function zr(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function hh(e,a,t,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ne(a,"link",t),ge(a),e.head.appendChild(a))}function Sl(e){return'[src="'+la(e)+'"]'}function fn(e){return"script[async]"+e}function Hr(e,a,t){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+la(t.href)+'"]');if(l)return a.instance=l,ge(l),l;var n=_({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),ge(l),Ne(l,"style",n),pu(l,t.precedence,e),a.instance=l;case"stylesheet":n=El(t.href);var u=e.querySelector(sn(n));if(u)return a.state.loading|=4,a.instance=u,ge(u),u;l=zr(t),(n=oa.get(n))&&Yc(l,n),u=(e.ownerDocument||e).createElement("link"),ge(u);var i=u;return i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Ne(u,"link",l),a.state.loading|=4,pu(u,t.precedence,e),a.instance=u;case"script":return u=Sl(t.src),(n=e.querySelector(fn(u)))?(a.instance=n,ge(n),n):(l=t,(n=oa.get(u))&&(l=_({},t),jc(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),ge(n),Ne(n,"link",l),e.head.appendChild(n),a.instance=n);case"void":return null;default:throw Error(E(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,pu(l,t.precedence,e));return a.instance}function pu(e,a,t){for(var l=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,u=n,i=0;i<l.length;i++){var c=l[i];if(c.dataset.precedence===a)u=c;else if(u!==n)break}u?u.parentNode.insertBefore(e,u.nextSibling):(a=t.nodeType===9?t.head:t,a.insertBefore(e,a.firstChild))}function Yc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function jc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var Ru=null;function xr(e,a,t){if(Ru===null){var l=new Map,n=Ru=new Map;n.set(t,l)}else n=Ru,l=n.get(t),l||(l=new Map,n.set(t,l));if(l.has(e))return l;for(l.set(e,null),t=t.getElementsByTagName(e),n=0;n<t.length;n++){var u=t[n];if(!(u[Tl]||u[_e]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var i=u.getAttribute(a)||"";i=e+i;var c=l.get(i);c?c.push(u):l.set(i,[u])}}return l}function Br(e,a,t){e=e.ownerDocument||e,e.head.insertBefore(t,a==="title"?e.querySelector("head > title"):null)}function yh(e,a,t){if(t===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function qr(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var on=null;function Eh(){}function Sh(e,a,t){if(on===null)throw Error(E(475));var l=on;if(a.type==="stylesheet"&&(typeof t.media!="string"||matchMedia(t.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=El(t.href),u=e.querySelector(sn(n));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Au.bind(l),e.then(l,l)),a.state.loading|=4,a.instance=u,ge(u);return}u=e.ownerDocument||e,t=zr(t),(n=oa.get(n))&&Yc(t,n),u=u.createElement("link"),ge(u);var i=u;i._p=new Promise(function(c,s){i.onload=c,i.onerror=s}),Ne(u,"link",t),a.instance=u}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(l.count++,a=Au.bind(l),e.addEventListener("load",a),e.addEventListener("error",a))}}function vh(){if(on===null)throw Error(E(475));var e=on;return e.stylesheets&&e.count===0&&Qc(e,e.stylesheets),0<e.count?function(a){var t=setTimeout(function(){if(e.stylesheets&&Qc(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(t)}}:null}function Au(){if(this.count--,this.count===0){if(this.stylesheets)Qc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Nu=null;function Qc(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Nu=new Map,a.forEach(gh,e),Nu=null,Au.call(e))}function gh(e,a){if(!(a.state.loading&4)){var t=Nu.get(e);if(t)var l=t.get(null);else{t=new Map,Nu.set(e,t);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<n.length;u++){var i=n[u];(i.nodeName==="LINK"||i.getAttribute("media")!=="not all")&&(t.set(i.dataset.precedence,i),l=i)}l&&t.set(null,l)}n=a.instance,i=n.getAttribute("data-precedence"),u=t.get(i)||l,u===l&&t.set(null,n),t.set(i,n),this.count++,l=Au.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),u?u.parentNode.insertBefore(n,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),a.state.loading|=4}}var rn={$$typeof:Oe,Provider:null,Consumer:null,_currentValue:x,_currentValue2:x,_threadCount:0};function bh(e,a,t,l,n,u,i,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qu(0),this.hiddenUpdates=qu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=u,this.onRecoverableError=i,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function wr(e,a,t,l,n,u,i,c,s,m,S,b){return e=new bh(e,a,t,i,c,s,m,b),a=1,u===!0&&(a|=24),u=Ie(3,null,null,a),e.current=u,u.stateNode=e,a=pi(),a.refCount++,e.pooledCache=a,a.refCount++,u.memoizedState={element:l,isDehydrated:t,cache:a},Oi(u),e}function Yr(e){return e?(e=Jt,e):Jt}function jr(e,a,t,l,n,u){n=Yr(n),l.context===null?l.context=n:l.pendingContext=n,l=Za(a),l.payload={element:t},u=u===void 0?null:u,u!==null&&(l.callback=u),t=ka(e,l,a),t!==null&&(aa(t,e,a),jl(t,e,a))}function Qr(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<a?t:a}}function Gc(e,a){Qr(e,a),(e=e.alternate)&&Qr(e,a)}function Gr(e){if(e.tag===13){var a=kt(e,67108864);a!==null&&aa(a,e,67108864),Gc(e,67108864)}}var Ou=!0;function Th(e,a,t,l){var n=v.T;v.T=null;var u=A.p;try{A.p=2,Vc(e,a,t,l)}finally{A.p=u,v.T=n}}function ph(e,a,t,l){var n=v.T;v.T=null;var u=A.p;try{A.p=8,Vc(e,a,t,l)}finally{A.p=u,v.T=n}}function Vc(e,a,t,l){if(Ou){var n=Xc(l);if(n===null)Uc(e,a,l,Du,t),Xr(e,l);else if(Ah(n,e,a,t,l))l.stopPropagation();else if(Xr(e,l),a&4&&-1<Rh.indexOf(e)){for(;n!==null;){var u=xt(n);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var i=ht(u.pendingLanes);if(i!==0){var c=u;for(c.pendingLanes|=2,c.entangledLanes|=2;i;){var s=1<<31-Je(i);c.entanglements[1]|=s,i&=~s}pa(u),(I&6)===0&&(ou=Sa()+500,ln(0))}}break;case 13:c=kt(u,2),c!==null&&aa(c,u,2),du(),Gc(u,2)}if(u=Xc(l),u===null&&Uc(e,a,l,Du,t),u===n)break;n=u}n!==null&&l.stopPropagation()}else Uc(e,a,l,null,t)}}function Xc(e){return e=Wu(e),Kc(e)}var Du=null;function Kc(e){if(Du=null,e=Ht(e),e!==null){var a=k(e);if(a===null)e=null;else{var t=a.tag;if(t===13){if(e=de(a),e!==null)return e;e=null}else if(t===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return Du=e,null}function Vr(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(sd()){case as:return 2;case ts:return 8;case gn:case fd:return 32;case ls:return 268435456;default:return 32}default:return 32}}var Zc=!1,it=null,ct=null,st=null,dn=new Map,mn=new Map,ft=[],Rh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xr(e,a){switch(e){case"focusin":case"focusout":it=null;break;case"dragenter":case"dragleave":ct=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":dn.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":mn.delete(a.pointerId)}}function hn(e,a,t,l,n,u){return e===null||e.nativeEvent!==u?(e={blockedOn:a,domEventName:t,eventSystemFlags:l,nativeEvent:u,targetContainers:[n]},a!==null&&(a=xt(a),a!==null&&Gr(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,n!==null&&a.indexOf(n)===-1&&a.push(n),e)}function Ah(e,a,t,l,n){switch(a){case"focusin":return it=hn(it,e,a,t,l,n),!0;case"dragenter":return ct=hn(ct,e,a,t,l,n),!0;case"mouseover":return st=hn(st,e,a,t,l,n),!0;case"pointerover":var u=n.pointerId;return dn.set(u,hn(dn.get(u)||null,e,a,t,l,n)),!0;case"gotpointercapture":return u=n.pointerId,mn.set(u,hn(mn.get(u)||null,e,a,t,l,n)),!0}return!1}function Kr(e){var a=Ht(e.target);if(a!==null){var t=k(a);if(t!==null){if(a=t.tag,a===13){if(a=de(t),a!==null){e.blockedOn=a,Sd(e.priority,function(){if(t.tag===13){var l=ea();l=wu(l);var n=kt(t,l);n!==null&&aa(n,t,l),Gc(t,l)}});return}}else if(a===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Mu(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var t=Xc(e.nativeEvent);if(t===null){t=e.nativeEvent;var l=new t.constructor(t.type,t);Ju=l,t.target.dispatchEvent(l),Ju=null}else return a=xt(t),a!==null&&Gr(a),e.blockedOn=t,!1;a.shift()}return!0}function Zr(e,a,t){Mu(e)&&t.delete(a)}function Nh(){Zc=!1,it!==null&&Mu(it)&&(it=null),ct!==null&&Mu(ct)&&(ct=null),st!==null&&Mu(st)&&(st=null),dn.forEach(Zr),mn.forEach(Zr)}function _u(e,a){e.blockedOn===a&&(e.blockedOn=null,Zc||(Zc=!0,D.unstable_scheduleCallback(D.unstable_NormalPriority,Nh)))}var Uu=null;function kr(e){Uu!==e&&(Uu=e,D.unstable_scheduleCallback(D.unstable_NormalPriority,function(){Uu===e&&(Uu=null);for(var a=0;a<e.length;a+=3){var t=e[a],l=e[a+1],n=e[a+2];if(typeof l!="function"){if(Kc(l||t)===null)continue;break}var u=xt(t);u!==null&&(e.splice(a,3),a-=3,Ki(u,{pending:!0,data:n,method:t.method,action:l},l,n))}}))}function yn(e){function a(s){return _u(s,e)}it!==null&&_u(it,e),ct!==null&&_u(ct,e),st!==null&&_u(st,e),dn.forEach(a),mn.forEach(a);for(var t=0;t<ft.length;t++){var l=ft[t];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ft.length&&(t=ft[0],t.blockedOn===null);)Kr(t),t.blockedOn===null&&ft.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(l=0;l<t.length;l+=3){var n=t[l],u=t[l+1],i=n[we]||null;if(typeof u=="function")i||kr(t);else if(i){var c=null;if(u&&u.hasAttribute("formAction")){if(n=u,i=u[we]||null)c=i.formAction;else if(Kc(n)!==null)continue}else c=i.action;typeof c=="function"?t[l+1]=c:(t.splice(l,3),l-=3),kr(t)}}}function kc(e){this._internalRoot=e}Cu.prototype.render=kc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(E(409));var t=a.current,l=ea();jr(t,l,e,a,null,null)},Cu.prototype.unmount=kc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;jr(e.current,2,null,e,null,null),du(),a[zt]=null}};function Cu(e){this._internalRoot=e}Cu.prototype.unstable_scheduleHydration=function(e){if(e){var a=ss();e={blockedOn:null,target:e,priority:a};for(var t=0;t<ft.length&&a!==0&&a<ft[t].priority;t++);ft.splice(t,0,e),t===0&&Kr(e)}};var Jr=se.version;if(Jr!=="19.1.0")throw Error(E(527,Jr,"19.1.0"));A.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(E(188)):(e=Object.keys(e).join(","),Error(E(268,e)));return e=U(a),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var Oh={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lu.isDisabled&&Lu.supportsFiber)try{vl=Lu.inject(Oh),ke=Lu}catch{}}return Sn.createRoot=function(e,a){if(!H(e))throw Error(E(299));var t=!1,l="",n=fo,u=oo,i=ro,c=null;return a!=null&&(a.unstable_strictMode===!0&&(t=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(n=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(i=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(c=a.unstable_transitionCallbacks)),a=wr(e,1,!1,null,null,t,l,n,u,i,c,null),e[zt]=a.current,_c(e),new kc(a)},Sn.hydrateRoot=function(e,a,t){if(!H(e))throw Error(E(299));var l=!1,n="",u=fo,i=oo,c=ro,s=null,m=null;return t!=null&&(t.unstable_strictMode===!0&&(l=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks),t.formState!==void 0&&(m=t.formState)),a=wr(e,1,!0,a,t??null,l,n,u,i,c,s,m),a.context=Yr(null),t=a.current,l=ea(),l=wu(l),n=Za(l),n.callback=null,ka(t,n,l),t=l,a.current.lanes=t,bl(a,t),pa(a),e[zt]=a.current,_c(e),new Cu(a)},Sn.version="19.1.0",Sn}var nd;function Bh(){if(nd)return Ic.exports;nd=1;function D(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(D)}catch(se){console.error(se)}}return D(),Ic.exports=xh(),Ic.exports}var qh=Bh();function wh(){const[D,se]=ud.useState(null),W=[{id:1,question:"1. What is SQL?",answer:"SQL (Structured Query Language) is a language used to store, manage, and retrieve data from relational databases like MySQL, PostgreSQL, SQLite, etc.",codeExample:`
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
Normalize for update speed and denormalize for read speed.`},{id:1.1,question:"DBMS questions start",answer:"",codeExample:""},{id:39,question:"39. What is a DBMS and how is it different from RDBMS?",answer:`DBMS (Database Management System) is software that allows users to create, store, manage, and retrieve data from a database. 
RDBMS (Relational Database Management System) is a type of DBMS that stores data in tables (also called relations) with rows and columns, and enforces relationships between tables using foreign keys.`,codeExample:`
Examples of DBMS:

Microsoft Access
File-based systems
SQLite (basic use)

Examples of RDBMS:

MySQL
PostgreSQL
Oracle
Microsoft SQL Server


Key Differences Between DBMS and RDBMS:

| Feature               | DBMS                                            | RDBMS                                     |
| --------------------- | ----------------------------------------------- | ----------------------------------------- |
| Data Storage          | Stores data as files or hierarchical structures | Stores data in tables (rows and columns)  |
| Relationships         | Does not support relationships                  | Supports relationships using foreign keys |
| Data Integrity        | Low data integrity                              | High data integrity with constraints      |
| Normalization         | Not supported or limited                        | Fully supports normalization              |
| Multi-user Access     | Limited                                         | Supports multiple users                   |
| Examples              | MS Access, file system                          | MySQL, PostgreSQL, Oracle                 |

`},{id:40,question:"40. Explain primary key vs. unique key.",answer:`🔑 Primary Key 
	A primary key uniquely identifies each record (row) in a table. 
	Only one primary key is allowed per table. 
	Cannot be NULL.
	Ensures uniqueness and not null values. 

🔐 Unique Key 
	A unique key also ensures that values in a column (or set of columns) are unique. 
	Can be multiple unique keys in a table. 
	Can have NULL values (but only one NULL per unique column in most databases like MySQL).`,codeExample:`
-- Example of Primary Key:
CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(50)
);

-- Example of Unique Key:
CREATE TABLE Employees (
    emp_id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);


 Comparison Table:

| Feature               | Primary Key                  | Unique Key                               |
| --------------------  | ---------------------------- | ---------------------------------------- |
| Uniqueness            | Yes                          | Yes                                      |
| NULL Allowed?         | ❌ No                        | ✅ Yes (usually one NULL)               |
| Number per Table      | 1 only                       | Multiple allowed                         |
| Purpose               | Identifies each row uniquely | Ensures uniqueness in specific column(s) |
`},{id:41,question:"41. What is SQL injection, and how do you prevent it?",answer:`SQL Injection is a hacking technique where a bad person tries to trick your website into running their own SQL code to: 
	Login without a password, 
	Steal or delete data, 
	Or take control of the database.`,codeExample:`
🔐 Simple Example:

Imagine this login form:

| Username: | admin |
| Password: | 1234 |

Your website runs this SQL:
  SELECT * FROM users WHERE username = 'admin' AND password = '1234';



Now a hacker types this:

| Username: | admin' -- |
| Password: | (anything) |

So the SQL becomes:
SELECT * FROM users WHERE username = 'admin' --' AND password = '...';

👉 The -- means comment, so the password check is ignored!
💥 Hacker logs in without a password!

----------------------------------------------------------------------------------------

✅ How to Stop This (Prevention):
Use Parameterized Queries (Safe Queries):

Instead of this (bad):
  # ❌ BAD
  query = "SELECT * FROM users WHERE username = '" + user + "' AND password = '" + pwd + "'"

Do this (good):
  # ✅ GOOD
  cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (user, pwd))

This keeps the input separate from the SQL, so it can’t be used to inject code.

----------------------------------------------------------------------------------------

🛡️ Easy Ways to Prevent SQL Injection:

| Method                      | Explanation                                                  |
| --------------------------- | ------------------------------------------------------------ |
| ✅ Parameterized Queries    | Safest way to write SQL                                      |
| ✅ Input Validation         | Check that the user enters proper data (like no '--' or ')  |
| ✅ Use ORM (like Django)    | It writes safe SQL for you                                   |
| ✅ Hide error messages      | Don’t show SQL errors to users                               |




`},{id:42,question:"42. When should you use a NoSQL database over a relational one?",answer:"",codeExample:`
✅ Use NoSQL when:

| Scenario                                         | Why NoSQL is better                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| 1. You have unstructured or semi-structured data | NoSQL can handle JSON, documents, key-value, or graphs — perfect for flexible data.                   |
| 2. Data changes frequently                       | Schema-less design means you don’t need to define columns — you can change structure anytime.         |
| 3. You need horizontal scalability (Big Data)    | NoSQL is built to scale across many servers, good for huge volumes of data (e.g., Facebook, Netflix). |
| 4. You want high-speed read/write                | Ideal for apps like real-time analytics, caching, chat apps, etc.                                     |
| 5. You don’t need complex joins or transactions  | NoSQL doesn’t do joins well — it’s great when your data is simple and document-based.                 |

-----------------------------------------------------------------------------------------

❌ Avoid NoSQL when:

| Situation                               | Use Relational (SQL) instead                                                    |
| --------------------------------------- | ------------------------------------------------------------------------------- |
| You need strong ACID transactions       | Like banking systems where accuracy is critical                                 |
| You work with complex relationships     | Such as many-to-many (e.g., school databases with students, teachers, subjects) |
| Your data is highly structured          | Fixed tables and schemas work better in SQL                                     |
| You rely on joins and foreign keys      | These are SQL strengths                                                         |


`},{id:43,question:"43. How does DBMS ensure concurrency control?",answer:`Concurrency control ensures that multiple users can access the database at the same time, without causing problems like: 
	🔁 Data inconsistency 
	📝 Lost updates 
	🔐 Dirty reads (reading uncommitted data) 
	⚠️ Deadlocks`,codeExample:`
🛡️ How DBMS Ensures Concurrency Control

1. Locks
| Type               | What it does                           |
| ------------------ | -------------------------------------- |
| Shared Lock        | Multiple users can read, but not write |
| Exclusive Lock     | Only one user can read/write at a time |


2. Isolation Levels (from ACID)
DBMS allows you to set how isolated each transaction is:

| Isolation Level  | Prevents             | But allows           |
| -----------------| -------------------- | -------------------- |
| Read Uncommitted | Nothing              | Dirty reads          |
| Read Committed   | Dirty reads          | Non-repeatable reads |
| Repeatable Read  | Non-repeatable reads | Phantom reads        |
| Serializable     | All issues           | Slower performance   |


3. Timestamp Ordering

Each transaction gets a timestamp
DBMS executes transactions in timestamp order to avoid conflicts


4. Optimistic Concurrency Control

No locks are used initially
DBMS checks for conflicts at commit time
Good for systems where conflicts are rare


5. Multiversion Concurrency Control (MVCC)

Each transaction sees a snapshot of the data
Readers don’t block writers, and vice versa
Used by databases like PostgreSQL, Oracle



`},{id:44,question:"44. What are materialized views and when should they be used?",answer:"A Materialized View is like a precomputed and stored result of a SQL query.",codeExample:`
🔄 Difference from a normal view:
| View Type         | Stored?   | Recomputed?             | Example                       |
| ------------------| -------   | ----------------------  | ----------------------------- |
| Normal View       | ❌ No    | ✅ Every time you query | Like a saved query only       |
| Materialized View | ✅ Yes   | ❌ No (until refreshed) | Like a snapshot of query data |


📦 Think of it like:
You have a query:

SELECT department, AVG(salary) FROM employees GROUP BY department;

If it's a normal view, this runs every time you access it.
If it’s a materialized view, the result is stored in a table.


✅ When to Use Materialized Views
| Use Case                   | Why It's a Good Fit                                                  |
| -------------------------- | -------------------------------------------------------------------- |
| Heavy, complex queries     | Pre-compute once and avoid re-running it every time                  |
| Dashboards & reports       | Fast response for charts/summary data                                |
| Rarely changing data       | Ideal when data updates infrequently, but reads are frequent         |
| Aggregated data            | Example: sales summaries, user stats, etc.                           |


❌ When NOT to Use
| Scenario                    | Why Not                                               |
| --------------------------- | ----------------------------------------------------- |
| Real-time data required     | Materialized views can get stale unless refreshed     |
| Frequent data changes       | Need to refresh often, which can hurt performance     |
| Very large data changes     | Refreshing the view might be slow                     |


-----------------------------------------------------------------------------------------

what meaning of Precomputed

  Something that is already calculated or processed in advance, so you don't need to calculate it again.


what meaning of snapshot of query

      Think of a snapshot like taking a photo of something at a specific moment in time.

So, a snapshot of a query means:
Taking the result of a SQL query right now, saving it, and using that saved result later, without 
re-running the query again.


`},{id:45,question:"45. What is a surrogate key? How is it different from a natural key?",answer:"",codeExample:`
🔑 What is a Surrogate Key?
  A Surrogate Key is a fake or artificial key that is used to uniquely identify a row in a table. It has no real-world meaning.

🧩 It is usually an auto-increment number or UUID (Unique Identifier).



🌿 What is a Natural Key?
  A Natural Key is a real-world, meaningful column that uniquely identifies a record.

🧩 Example: Email address, Social Security Number, Student Roll Number — these exist outside the database too.


🔄 Key Differences:
| Feature                   | Surrogate Key                   | Natural Key                   |
| -----------------------   | ------------------------------  | ----------------------------- |
| ✅ Meaning in real world | ❌ No                           | ✅ Yes                       |
| 🧱 Type                  | System-generated (e.g., ID)      | Data-based (e.g., email, SSN)|
| 🔁 Changes often?        | ❌ Never                        | ✅ Might change              |
| ⚡ Performance           | ✅ Better for joins/indexing    | ❌ Can be slower             |
| 🧠 Easy to understand?   | ❌ Not directly (just a number) | ✅ More meaningful           |


🧪 Example:
Let's say we have a table of students:

| student_id (Surrogate Key)      | email (Natural Key)                           | name  |
| ------------------------------- | --------------------------------------------- | ----- |
| 1                               | [alice@example.com](mailto:alice@example.com) | Alice |
| 2                               | [bob@example.com](mailto:bob@example.com)     | Bob   |

student_id is a surrogate key (just a number created by the system)
email is a natural key (unique and meaningful)

-----------------------------------------------------------------------------------------

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- Surrogate key
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE           -- Natural key (optional)
);


Insert Data:

INSERT INTO students (name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO students (name, email) VALUES ('Bob', 'bob@example.com');

The database will assign id = 1, id = 2, etc. automatically.


✅ 2. Implementing a Natural Key
If you want to use a natural key (e.g., email) as the primary key:

CREATE TABLE students (
    email VARCHAR(100) PRIMARY KEY,     -- Natural key
    name VARCHAR(100)
);


Insert Data:

INSERT INTO students (email, name) VALUES ('alice@example.com', 'Alice');
INSERT INTO students (email, name) VALUES ('bob@example.com', 'Bob');

Now, email acts as the unique identifier.



🔍 Query Examples:

With Surrogate Key:

  SELECT * FROM students WHERE id = 1;

  
With Natural Key:

  SELECT * FROM students WHERE email = 'alice@example.com';

`},{id:46,question:"46. What are the different isolation levels in transactions?",answer:`what meaning of Isolation 
	Each transaction runs separately — like it's the only one running.`,codeExample:`
🔹 1. Read Uncommitted (💥 Least Safe)

❗ You can see uncommitted (temporary) changes made by others
This may give wrong or incomplete results

Example:

Transaction A changes balance to ₹1000 but hasn’t saved (committed) it
Transaction B reads ₹1000 — even though A might cancel it later

✅ Fastest, ❌ Not safe (dirty reads)



🔹 2. Read Committed (Default in most databases)

✅ You can only see committed (saved) changes
❗ But if someone updates the data again, your next read may give different result

Example:

You check your bank balance: ₹2000
In the meantime, someone transfers ₹500
You check again — now it’s ₹1500

✅ Safer than Read Uncommitted
❌ But results can change during the same transaction



🔹 3. Repeatable Read

✅ You get the same result every time you read
❗ But new rows can still be added by others

Example:

You read a list of orders → 5 orders
Even if someone changes a product price, you still see the original 5 orders
But someone might add a new order and that won’t show until you start a new transaction

✅ Very consistent
❌ Still allows phantom rows



🔹 4. Serializable (💯 Safest)

✅ It acts like only one transaction is allowed at a time
You get perfect accuracy

Example:

You read all orders > ₹1000
During your transaction, no one can insert, update, or delete rows that affect your result

✅ 100% correct
❌ Slowest (locks more things)

-----------------------------------------------------------------------------------------

Interviewer: "Can you explain transaction isolation levels?"

You can reply like this:
“Sure! Isolation levels define how transactions interact when running at the same time.
There are four main levels:


Read Uncommitted – allows dirty reads

Read Committed – only reads committed data

Repeatable Read – keeps data the same throughout the transaction

Serializable – the strictest; it prevents other transactions from making any changes that affect the current one.


The higher the level, the safer it is, but also slower. Most databases use Read Committed by default.”`},{id:47,question:"47. Explain the difference between logical and physical data independence.",answer:`Logical Data Independence: 
	You can change the structure of the database (like adding a column) without affecting the programs that use the data. 

Physical Data Independence: 
	You can change the way data is stored (like changing from HDD to SSD) without affecting the structure or application.`,codeExample:""},{id:48,question:"48. How would you handle a situation where millions of rows need to be updated efficiently?",answer:`To update millions of rows efficiently, you can use batch processing or partitioning. 

Batch Processing: 
	Break the update into smaller chunks to avoid locking the entire table at once. 

Partitioning: 
	Divide the table into smaller parts (partitions) and update each partition separately.`,codeExample:`
Example of Batch Processing:

UPDATE employees
SET salary = salary * 1.1
WHERE department = 'Sales'
LIMIT 1000;



Example of Partitioning:

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
) 
PARTITION BY RANGE (department) (
    PARTITION sales VALUES LESS THAN ('Sales'),
    PARTITION marketing VALUES LESS THAN ('Marketing'),
    PARTITION engineering VALUES LESS THAN ('Engineering')
);
`},{id:49,question:"49. What are the ACID vs. BASE principles in databases?",answer:`ACID: 
	A - Atomicity: All or nothing, 
	C - Consistency: Data remains valid, 
	I - Isolation: Transactions don’t interfere, 
	D - Durability: Changes are permanent. 

BASE: 
	B - Basically Available: System is available most of the time, 
	A - Soft state: Data can change over time, 
	E - Eventually consistent: Data will become consistent eventually.`,codeExample:`
🔸 What is BASE?
BASE is a design principle used in NoSQL databases (like MongoDB, Cassandra) that focuses on:

  High availability
  Performance
  Scalability


🔍 BASE Stands For:   
| Term  | Full Form             | Meaning (in simple words)                                                                         |
| ----- | --------------------- | --------------------------------------------------------------------------------------------------|
| B     | Basically Available   | The system is always accessible, even if some parts are slow or fail.                             |
| A     | Soft State            | The state of the data might change over time, even without new input (due to background syncing). |
| E     | Eventually Consistent | Data will become correct, but not instantly — it syncs over time.                                 |


📘 Real-Life Example: Instagram Likes
Imagine you like a photo on Instagram:

  1. You hit ❤️ on a post → You see the like count increase immediately.

  2. Your friend might not see your like right away.

  3.After a few seconds (or minutes), your friend sees your like — ✅ data becomes consistent eventually.

This is BASE behavior.



🔁 BASE vs. ACID (Visual Summary):
| Feature          | ACID (SQL)                 | BASE (NoSQL)                 |
| ---------------- | -------------------------- | ---------------------------- |
| Data Consistency | Strong (Always consistent) | Weak (Eventually consistent) |
| Availability     | Moderate                   | High                         |
| Performance      | Slower but safer           | Fast and scalable            |
| Best For         | Banking, transactions      | Social media, big data       |

   `},{id:50,question:"50. How do you design a database for a scalable web application?",answer:"To design a scalable database, I would normalize the data to reduce duplication, use indexing for fast queries, choose the right database type (SQL or NoSQL), and apply techniques like replication, sharding, and caching to handle large traffic efficiently.",codeExample:""},{id:51,question:"51. How does caching help in DBMS performance?",answer:"Caching helps reduce database load and speed up queries by saving results in memory like Redis. In Django, I use cache.get() and cache.set() to store frequent queries like product lists.",codeExample:`
⚙️ How to Use Cache in Query (Using Redis Example in Python/Django)
Step 1: Install Redis
You can install Redis on your system or use it in cloud (like Redis Cloud).


Step 2: Connect Redis to Your Code
In Python:

pip install redis


In Django settings:

CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.redis.RedisCache",
        "LOCATION": "redis://127.0.0.1:6379",
    }
}


Step 3: Use Cache in Your Query (Example Code)

from django.core.cache import cache
from .models import Product

def get_ice_cream_products():
    # Try to get from cache
    products = cache.get('ice_cream_products')

    if products is None:
        # Not in cache, fetch from database
        products = Product.objects.filter(category='Ice Cream')
        
        # Save in cache for 1 hour (3600 seconds)
        cache.set('ice_cream_products', products, timeout=3600)
    
    return products


✅ Now:

First time: it goes to DB and saves result in cache.
After that: it uses cached result, no DB call!


💡 Important:

When your data updates, remember to clear cache or set short timeouts.
You can also cache specific parts of a web page or full pages.`},{id:52,question:"52. What is normalization in real-life database design and why is it crucial?",answer:"Normalization is the process of organizing data in a database so that it removes duplicates, saves space, and avoids errors.",codeExample:`
🍕 Real-Life Example: Ice Cream Shop Database
Imagine you have this table:

| Order_ID | Customer_Name | Ice_Cream_Name | Price | Customer_Cityv |
| ---------| --------------| -------------- | ----- | -------------- |
| 1        | Raj           | Vanilla        | 100   | Keshod         |
| 2        | Raj           | Chocolate      | 120   | Keshod         |
| 3        | Meena         | Vanilla        | 100   | Junagadh       |

🔴 Problems:

Raj's name and city are repeated.
Vanilla’s price is repeated.
If price changes, you must update every row (risk of error!).


✅ Normalize It (Step-by-Step)
Step 1: Break into smaller tables.


🔸 Customers Table
| Customer_ID | Name  | City     |
| ----------- | ----- | -------- |
| 1           | Raj   | Keshod   |
| 2           | Meena | Junagadh |


🔸 IceCream Table
| IceCream_ID | Name      | Price |
| ----------- | --------- | ----- |
| 1           | Vanilla   | 100   |
| 2           | Chocolate | 120   |


🔸 Orders Table
| Order_ID | Customer_ID | IceCream_ID |
| -------- | ----------- | ----------- |
| 1        | 1           | 1           |
| 2        | 1           | 2           |
| 3        | 2           | 1           |

`}],E=H=>{se(D===H?null:H)};return Be.jsxs("div",{className:"app-container",children:[Be.jsx("h1",{children:"SQL Interview Questions"}),Be.jsx("div",{className:"questions-container",children:W.map(H=>Be.jsxs("div",{className:"question-item",children:[Be.jsx("button",{className:`question-button ${D===H.id?"active":""}`,onClick:()=>E(H.id),children:H.question}),D===H.id&&Be.jsxs("div",{className:"answer-container",children:[Be.jsxs("div",{className:"answer",children:[Be.jsx("h3",{children:"Answer:"}),Be.jsx("p",{children:H.answer})]}),H.codeExample&&Be.jsxs("div",{className:"code-example",children:[Be.jsx("h3",{children:"Code Example:"}),Be.jsx("pre",{children:Be.jsx("code",{children:H.codeExample})})]})]})]},H.id))})]})}qh.createRoot(document.getElementById("root")).render(Be.jsx(ud.StrictMode,{children:Be.jsx(wh,{})}));
