define(['exports', 'preact/jsx-runtime', 'preact', './Collection-7018c53f', './useViewportIntersect-800c1cb2'], (function(e,o,t,r,n){"use strict";const c="oj-collection-loadmore",i=`.${c}`;e.LOADMORE_STYLE_CLASS=c,e.LoadMoreCollection=function({data:e,children:c,viewportConfig:s,hasMore:l,onLoadMore:a,loadMoreIndicator:d,suggestions:u,loadMoreThreshold:h=1}){return n.useViewportIntersect(s,Math.max(h,1),0,i,(()=>{e&&a()})),e?o.jsxs(t.Fragment,{children:[u,o.jsx(r.Collection,{items:e,children:c}),l&&d]}):o.jsx("div",{})}}));
//# sourceMappingURL=LoadMoreCollection-7b33bf5e.js.map