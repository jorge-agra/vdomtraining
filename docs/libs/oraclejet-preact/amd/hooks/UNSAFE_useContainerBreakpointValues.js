define(['exports', '../useBreakpoints-3f5e2935', '../useContainerBreakpoints-28a281af', 'preact/hooks'], (function(e,t,n,r){"use strict";e.useContainerBreakpointValues=function(e,r=t.defaultBreakpoints){const{breakpointMatches:o,ref:s}=n.useContainerBreakpoints(r);return{breakpoint:Object.entries(e).reduce(((e,t)=>{const n=t[0];return o[n]?t:e}))[1],ref:s}},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useContainerBreakpointValues.js.map
