define(['exports', 'preact/jsx-runtime', 'preact/hooks', './Flex-d0cc2f6e', './usePress-80afb622', './UNSAFE_Selector/themes/SelectorStyles.css', './StyledCheckbox-b81d48b3', './mergeProps-7d608009', './useActive-dfb7e815', './useFocus-9d062824', './useTestId-af48c25c'], (function(e,s,t,l,c,a,r,i,n,o,u){"use strict";const d=e=>{"Enter"==e.key&&e.stopPropagation()};e.SelectorAll=function({"aria-label":e,"aria-labelledby":p,selected:h,onChange:b,testId:y}){const f=t.useRef(null),{isActive:x,activeProps:g}=n.useActive(),{isFocus:S,focusProps:k}=o.useFocus(),{pressProps:v}=c.usePress((e=>{b?.("none"==h||"partial"==h?{value:{all:!0,deletedKeys:new Set},target:e.target}:{value:{all:!1,keys:new Set},target:e.target})})),P="partial"===h||"partial-all"===h?"partial":"all"===h?"checked":"unchecked",F=u.useTestId(y);return s.jsx("div",{class:a.styles.container,...i.mergeProps({onClick:()=>{f.current?.focus()}},v),...F,children:s.jsx("div",{class:a.styles.base,...g,children:s.jsx(l.Flex,{align:"center",justify:"center",width:"11x",height:"11x",children:s.jsx(r.StyledCheckbox,{ref:f,isChecked:P,isActive:x,isFocusRingShown:S,"aria-label":e,"aria-labelledby":p,onKeyDown:d,onKeyUp:d,...k})})})})}}));
//# sourceMappingURL=SelectorAll-ce761ec7.js.map
