define(['exports', '../../../colorUtils-709e88cf', 'react', '../../../usePropertyValue-331661ed', '../../../head-2669913d', '../../../curryN-651fa590', '../../../_curry1-a5ea38c3', '../../../_arity-57b80ac2', '../../../_curry2-919f598e', '../../../_arrayReduce-3736fac6', 'preact/hooks', '../../../_curry3-9f1efdbd', '../../../_isArray-c27f325f', '../../../_isString-2c7b8515'], (function(r,e,t,n,a,c,o,u,i,l,s,f,y,d){"use strict";function g(r,e,t){for(var n=t.next();!n.done;)e=r(e,n.value),n=t.next();return e}function _(r,e,t,n){return t[n](r,e)}var p=a._createReduce(l._arrayReduce,_,g);function b(r){return r}var h=o._curry1(b),R=i._curry2((function(r,e){if(e.length<=0)return h;var t=a.head(e),n=a.tail(e);return u._arity(t.length,(function(){return p((function(e,t){return r.call(this,t,e)}),t.apply(this,arguments),n)}))})),v=R,C=o._curry1((function(r){return!e.isNil(r)}));const x=r=>r.replace(/var\(|\)/g,""),k=r=>/rgb(a?)\(/.test(r)?r:4===r.split(",").length?`rgba(${r})`:`rgb(${r})`,N=n.curry(((r,t)=>a.pipe(x,r,e.getLuminance)(t))),B=c.curryN(2,((r,t)=>C(r)&&C(t)?e.getContrast(r,t).toFixed(2):"NaN")),G=v(((r,e)=>C(e)?r(e):e));r.colorEncodings=["RGB","Hex"],r.tokenFromVar=x,r.useColorUtils=({backgroundColor:r,colorEncoding:c})=>{const[o,u]=n.usePropertyValue(),i=t.useCallback((e=>B(N(u,r),N(u,e))),[r,u]);return{setRef:o,getColor:t.useCallback(a.pipe(x,u,"RGB"===c?k:G([e.parseToRGBA,e.rgbaToHex])),[c,u]),getContrastRatio:i}},Object.defineProperty(r,"__esModule",{value:!0})}));
//# sourceMappingURL=useColorSchemeUtils.js.map