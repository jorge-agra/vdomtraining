define(['exports', 'preact/jsx-runtime', 'preact/hooks', './mergeProps-7d608009', './classNames-2e65b3b3', './useId-bea76214', './UNSAFE_NavigationList/themes/NavigationListStyles.css', './collectionUtils-e7261bcb', './useCollectionFocusRing-d3bea583', './useCurrentKey-7c221c70', 'preact/compat', './useTestId-af48c25c', './UNSAFE_Text/themes/TextStyles.css', './BaseNavigationListItem-971d5aea', './Flex-d0cc2f6e', './logger-e130a3d8', 'preact', './Floating-d924078b', './TopLayerHost-06d05670', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './UNSAFE_NavigationList/themes/NavigationListItemStyles.css', 'module', './UNSAFE_NavigationList/themes/redwood/NavigationListItemVariants.css'], (function(e,t,n,o,s,r,i,a,c,l,u,d,y,g,m,v,f,h,b,N,C,S,p,x,K,L){"use strict";const F=(e,t,n)=>{const o=e.closest(t),s=e.closest(n);return o?.contains(s)?null:a.keyExtractor(e,t)},R=(e,t,n)=>{const o=n.indexOf(e);if(o>0){const e=n[o===n.length-1?o-1:o+1];if(-1!==t.indexOf(e))return e}return t[0]},I=u.forwardRef((({children:e,selection:y,onSelectionChange:m,onRemove:v,"aria-label":f,"aria-labelledby":h,testId:b},N)=>{const C=n.useRef(null),{showFocusRing:S,currentKey:p,onCurrentKeyChange:x,containerHandlers:K,onKeyDown:L}=function({containerRef:e,selection:t,onRemove:s,onSelectionChange:r,children:i}){const u='[role="option"]',[d,y]=n.useState(t),g=n.useCallback((e=>{y(e.value)}),[]),{currentKeyProps:m}=l.useCurrentKey((e=>s?F(e,u,"[data-oj-navigationlist-item-remove-icon]"):a.keyExtractor(e,u)),!1,a.getPrevNextKeyUsingRef(e,d,!0,u),a.getPrevNextKeyUsingRef(e,d,!1,u),void 0,void 0,d,g),[v,f]=c.useCollectionFocusRing(e,["Home","End","ArrowUp","ArrowDown"]),h={onFocus:n.useCallback((()=>{if(e.current&&void 0===d){const t=a.getFirstVisibleKey(e.current,u);t&&y(t)}}),[d,e])},b=n.useRef();n.useEffect((()=>{if(e.current){const t=Array.from(e.current.querySelectorAll(u),(e=>a.getKey(e)));d&&-1===t.indexOf(d)&&b.current&&y(R(d,t,b.current)),b.current=t}}),[i,d,e]);const N=n.useCallback((t=>{if(("Home"===t.key||"End"===t.key)&&e.current&&d){const n=Array.from(e.current.querySelectorAll(u),(e=>a.getKey(e)));g?.({value:n["Home"===t.key?0:n.length-1]})}d&&"Enter"===t.key&&r?.({value:d,reason:"keyboard"}),d&&"Delete"===t.key&&s?.({value:d})}),[d,r,s,g,e]);return{showFocusRing:v,currentKey:d,onCurrentKeyChange:g,onKeyDown:N,containerHandlers:o.mergeProps(f,m,h)}}({containerRef:C,selection:y,onRemove:v,onSelectionChange:m,children:e}),I={onKeyDown:L},k=s.classNames([i.navigationListStyles.uListStyle]),w=r.useId()+"_",A=d.useTestId(b);return u.useImperativeHandle(N,(()=>({focus:()=>{C.current&&C.current.focus()}}))),t.jsx("ul",{"aria-label":f,"aria-labelledby":h,role:"listbox",ref:C,tabIndex:0,"aria-activedescendant":p?w+p:"",...o.mergeProps(I,K),...A,class:k,children:t.jsx(g.NavigationListContext.Provider,{value:{selection:y,onSelectionChange:m,onCurrentKeyChange:x,currentKey:p,showFocusRing:S,navigationListItemPrefix:w,onRemove:v},children:e})})}));e.NavigationList=I,e.NavigationListItem=function({itemKey:e,label:n,badge:o,metadata:s,severity:r}){return t.jsx(g.BaseNavigationListItem,{itemKey:e,label:n,badge:o,metadata:s,severity:r})}}));
//# sourceMappingURL=NavigationListItem-34b1f5ef.js.map