import{g as a}from"./@icons-Cq6LkEtt.js";import{r as p}from"./react-CYTwke-y.js";var c={exports:{}},f={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o=p;function S(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var d=typeof Object.is=="function"?Object.is:S,m=o.useState,v=o.useEffect,x=o.useLayoutEffect,l=o.useDebugValue;function E(t,e){var r=e(),u=m({inst:{value:r,getSnapshot:e}}),n=u[0].inst,s=u[1];return x(function(){n.value=r,n.getSnapshot=e,i(n)&&s({inst:n})},[t,r,e]),v(function(){return i(n)&&s({inst:n}),t(function(){i(n)&&s({inst:n})})},[t]),l(r),r}function i(t){var e=t.getSnapshot;t=t.value;try{var r=e();return!d(t,r)}catch{return!0}}function y(t,e){return e()}var h=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:E;f.useSyncExternalStore=o.useSyncExternalStore!==void 0?o.useSyncExternalStore:h;c.exports=f;var g=c.exports;const D=a(g);export{D as u};
