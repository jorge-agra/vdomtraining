define(['exports', '../useInteractionStyle-0d19d1a9', '../mergeProps-7d608009', '../clientHints-aa2ccdd3', '../useHover-c613069f', '../useToggle-4d231fba', 'preact/hooks', '../useActive-dfb7e815'], (function(e,t,o,r,i,c,a,s){"use strict";e.useInteractionStyle=t.useInteractionStyle,e.wrapWithActiveSelector=e=>({"&:active":e}),e.wrapWithFocusSelector=e=>({"&:focus":e}),e.wrapWithFocusVisibleSelector=e=>({"&:focus-visible":e}),e.wrapWithHoverSelector=e=>({"&:hover":e}),e.wrapWithNotActiveSelector=e=>({"&:not(:active)":e}),e.wrapWithParentNotActiveSelector=(e,t)=>({[`${t}:not(:active) > &`]:e}),e.wrapWithParentPseudoHoverSelector=(e,t)=>({"@media":{"(hover: hover)":{selectors:{[`${t}:hover:not(:active) > &`]:e}}}}),e.wrapWithPseudoHoverSelector=e=>({"@media":{"(hover: hover)":{selectors:{"&:hover:not(:active)":e}}}}),e.wrapWithVisitedSelector=e=>({"&:visited":e}),Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_useInteractionStyle.js.map
