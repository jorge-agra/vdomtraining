define(['exports', 'preact/jsx-runtime', './classNames-2e65b3b3', './dimensions-ee4bfe23', './padding-c76f8dc6', './colors-d927cd74', './aria-7b544731', './mergeInterpolations-8339fdb7', './useTestId-af48c25c', './UNSAFE_SelectionCard/themes/SelectionCardStyles.css', './useHover-c613069f'], (function(e,s,t,o,r,l,n,c,a,i,d){"use strict";const u=[...Object.values(o.dimensionInterpolations),...Object.values(l.colorInterpolations),...Object.values(n.ariaInterpolations),...Object.values(r.paddingInterpolations)],p=c.mergeInterpolations(u);e.SelectionCard=({children:e,isSelected:o=!1,testId:r,...l})=>{const{hoverProps:n,isHover:c}=d.useHover(),{class:u,...v}=p(l),b=t.classNames([i.baseStyle,u,c&&i.hoverStyle,o&&(c?i.selectedHoverStyle:i.selectedStyle)]),S=a.useTestId(r);return s.jsx("div",{role:"region",...n,class:b,style:v,...S,children:e})}}));
//# sourceMappingURL=SelectionCard-1c9fd038.js.map