define(['exports', 'preact/jsx-runtime', './classNames-2e65b3b3', './mergeInterpolations-8339fdb7', './UNSAFE_Text/themes/TextStyles.css'], (function(e,s,t,n,i){"use strict";const a=[({lineClamp:e})=>e?{class:i.styles.lineClamp,webkitLineClamp:e}:{}],r=n.mergeInterpolations(a);e.Text=function({children:e,hyphens:n,size:a,truncation:l,variant:c="inherit",weight:o,overflowWrap:p="anywhere",...h}){const m=i.multiVariantStyles({hyphens:n,size:a,truncation:l,variant:c,weight:o,overflowWrap:p}),{class:u,...y}=r(h),d=t.classNames([m,u]);return s.jsx("span",{class:d,style:y,id:h.id,children:e})}}));
//# sourceMappingURL=Text-7cbb9b7a.js.map
