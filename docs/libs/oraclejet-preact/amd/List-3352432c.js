define(['exports', 'preact/jsx-runtime', 'preact/hooks', './classNames-2e65b3b3', './mergeProps-7d608009', './keys-123d62b0', './LoadMoreCollection-7b33bf5e', './VirtualizedCollection-b0f95707', 'preact/compat', './TabbableModeContext-8858ed6b', './useId-bea76214', './FocusTrap-bc72d6c0', './useInteractionStyle-0d19d1a9', './mergeInterpolations-8339fdb7', './flexitem-c1ba5934', './PRIVATE_List/themes/ListStyles.css', './collectionUtils-e7261bcb', './useSelection-b137b39f', './useCurrentKey-7c221c70', './useCollectionFocusRing-d3bea583', './useTabbableModeSet-44947df5', './useItemAction-395de569', './Skeleton-957111dc', './Flex-d0cc2f6e', './Selector-f5524178', './ImageVars.css-06029f00', './useTheme-1f90c1f7', './useCollectionGestureContext-9e8728b3', './useTestId-af48c25c', './Menu-4851dd92', './MenuItem-96f8014c', 'preact', './Floating-d924078b', './TopLayerHost-06d05670', './logger-e130a3d8', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './SelectMenuGroupContext-3dbda9d7', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./MenuSeparatorStyles.styles.css', 'module', './UNSAFE_Menu/themes/redwood/MenuSeparatorVariants.css', './useContextMenuGesture-0129fe8f'], (function(e,t,s,i,n,o,l,r,a,c,u,d,b,f,m,g,y,p,h,S,x,v,k,C,T,A,I,V,F,M,w,E,j,R,K,P,L,N,z,D,H,G,_,O,U){"use strict";const B=e=>{switch(e){case"listbox":return{list:"listbox",item:"presentation",cell:"option"};case"treegrid":return{list:"treegrid",item:"row",cell:"gridcell"};default:return{list:"grid",item:"row",cell:"gridcell"}}},q="[data-oj-key]";function Y({children:e,context:n,itemDepth:o,isFocused:l,isFocusRingVisible:r,isActive:a,isGridlineVisible:y,isSelected:p,isTopGridlineVisible:h=!1,isTabbable:S=!1,role:x,selectionMode:v,suggestion:k,currentItemVariant:C}){const T=s.useRef(null),A=s.useMemo((()=>B(x)),[x]),I=n.metadata.key,V=n.index,F="option"===A.cell?{role:A.cell,"aria-posinset":V+1,"aria-setsize":-1}:{role:A.cell},{interactionProps:M,applyActiveStyle:w,applyHoverStyle:E,applyPseudoHoverStyle:j}=b.useInteractionStyle(),R=g.listItemMultiVariantStyles({selectable:$(v,p)?"isSelectable":"notSelectable",selected:p?"isSelected":"notSelected",selectedSingle:p&&"single"===v?"isSelectedSingle":"notSelectedSingle",needsEventsHover:E?"isNeedsEventsHover":"notNeedsEventsHover",pseudoHover:j?"isPseudoHover":"notPseudoHover",active:w||a?"isActive":"notActive",focusHighlight:"highlight"===C&&l?"isFocusHighlight":"notFocusHighlight",focusRingVisible:r&&l?"isFocusRingVisible":"notFocusRingVisible",gridlineTop:h?"visible":"hidden",gridlineBottom:!y&&("end"!==k||y||p&&"single"===v)?"hidden":"visible"}),K=i.classNames([R]),P=f.mergeInterpolations([...Object.values(m.flexitemInterpolations)]),{class:L,...N}=P({flex:"1 1 auto",alignSelf:"center"}),z=i.classNames([L,"multiple"===v&&g.listItemStyles.checkboxContainer]);return t.jsx("div",{"aria-rowindex":V+1,"aria-level":o,"data-oj-key":I,class:K,ref:T,role:A.item,...k&&{"data-oj-suggestion":!0},..."number"==typeof I&&{"data-oj-key-type":"number"},...M,children:t.jsx("div",{id:u.useId(),style:N,class:z,"aria-posinset":V+1,"aria-setsize":-1,onKeyDown:e=>{!S||"ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.stopPropagation()},"aria-colindex":1,"aria-selected":"none"!==v?p:void 0,...F,children:t.jsx(c.TabbableModeContext.Provider,{value:{isTabbable:S},children:t.jsx(d.FocusTrap,{isDisabled:!S,restoreFocusRef:!1,children:e(n)})})})})}const $=(e,t)=>"none"!==e&&("multiple"===e||!t),J=a.memo(Y,((e,t)=>!(!e||!t)&&(e.children===t.children&&e.isFocused===t.isFocused&&e.isFocusRingVisible===t.isFocusRingVisible&&e.isSelected===t.isSelected&&e.isTabbable===t.isTabbable&&e.isActive===t.isActive&&e.suggestion===t.suggestion&&e.isGridlineVisible===t.isGridlineVisible&&e.isTopGridlineVisible===t.isTopGridlineVisible&&y.compareListItemContext(e.context,t.context))));function Q({children:e,minimumCount:n=1}){const[o,l]=s.useState(!1);s.useEffect((()=>{setTimeout((()=>{l(!0)}),50)}),[]);const r=i.classNames([g.skeletonStyles.container]);return o&&e?t.jsx("div",{class:r,role:"presentation",children:[...Array(n)].map(((t,s)=>e(s)))}):null}const W="oj-collection-sparkle";function X({sparkleHeight:e}){const{name:s}=I.useTheme();if(e<=0)return null;const n=e+"px",o=i.classNames([g.sparkleStyles.base]),l=i.classNames([g.sparkleStyles.container,W,"redwood"===s&&A.globalImages]);return t.jsx("div",{class:l,children:t.jsx("div",{class:o,style:{height:n}})},"sparkle")}const Z={mouse:{initialFocus:"menu",placement:"bottom-start",offsetValue:0},keyboard:{initialFocus:"firstItem",placement:"bottom-start",offsetValue:0},touch:{initialFocus:"menu",placement:"end",offsetValue:40}},ee={isOpen:!1,initialFocus:"menu",placement:"bottom-start",offsetValue:0,anchorRef:{current:null}};const te=e=>!(!e.parentElement||!e.parentElement.classList.contains("oj-listview-expander")),se=(e,t,s)=>{if(e&&t&&(e.scrollIntoViewIfNeeded?e.scrollIntoViewIfNeeded():e.scrollIntoView({block:"nearest"}),s>0)){const i=t.getBoundingClientRect(),n=e.getBoundingClientRect(),o=i.top+s-n.top;o>0&&(t.scrollTop=t.scrollTop-o)}},ie=(e,t)=>t??{scroller:()=>e.current},ne={all:!1,keys:new Set},oe=(e,t)=>{const s=t.data.map((e=>e.metadata.key)),i=s.indexOf(e.value.start),n=s.indexOf(e.value.end),o=Math.min(i,n),l=Math.max(i,n);return-1===o?{offset:0,count:t.totalSize}:s.slice(o,l+1)},le=t.jsx(Q,{minimumCount:25,children:()=>t.jsx(C.Flex,{height:"12x",align:"center",children:t.jsx(k.Skeleton,{height:"4x"})})}),re=t.jsx("div",{class:l.LOADMORE_STYLE_CLASS,children:t.jsx(Q,{minimumCount:3,children:()=>t.jsx(C.Flex,{height:"12x",align:"center",children:t.jsx(k.Skeleton,{height:"4x"})})})}),ae=(e,t)=>{if(t){const s=Math.min(t.offset,e.offset+e.totalSize),i=s-e.offset;i>0&&(e={offset:s,data:e.data.slice(i,i+t.count),totalSize:e.totalSize,sizePrecision:e.sizePrecision})}return e};e.List=function({"aria-label":e,"aria-labelledby":a,allowTabbableMode:c=!0,children:u,currentKey:d,data:b,gridlines:f,loadingIndicator:m=le,onCurrentKeyChange:k,onLoadRange:C,onSelectionChange:A,onItemAction:I,rangeExtractor:w,role:E="grid",selectedKeys:j=ne,selectionMode:R="none",viewportConfig:K,currentItemVariant:P="none",promotedSection:L,isVirtualized:N=!0,customItemRenderer:z,scrollToVisibleOffset:D,testId:H,contextMenuRenderer:G,..._}){const O=s.useRef(null),$=s.useMemo((()=>B(E)),[E]),Q=s.useRef(),W=s.useRef(),ce=s.useRef(),[ue,de]=s.useState(!1),[be,fe]=s.useState(0),me="none"===R?void 0:"multiple"===R,ge=null===b?void 0:"exact"===b.sizePrecision?b.totalSize:-1,ye=i.classNames([g.listStyles.base]),{currentKeyProps:pe}=h.useCurrentKey((e=>y.keyExtractor(e,q)),"multiple"!==R,y.getPrevNextKey(O.current,d,!0,q),y.getPrevNextKey(O.current,d,!1,q),void 0,void 0,d,k),[he,Se]=S.useCollectionFocusRing(O,["ArrowUp","ArrowDown"]),[xe,ve]=x.useTabbableModeSet(O,(e=>te(e)?null:y.keyExtractor(e,q)),d,k);s.useEffect((()=>{if(null!=d&&O.current){const e=y.findElementByKey(O.current,d,q);if(e){const t=O.current.getAttribute("aria-activedescendant"),s=e.querySelector(`[role=${$.cell}]`);if(s&&t!==s.id){O.current.setAttribute("aria-activedescendant",s.id);const t=K?.scroller(),i=D?D(O.current):0;se(e,null!=t?t:O.current,i)}}}}),[d,b,$.cell,K,D]);const ke=s.useCallback((e=>{A&&(!1===e.value.all&&e.value.keys.size>0&&(Q.current=Array.from(e.value.keys.values()).pop()),A(e))}),[Q,A]),Ce=s.useCallback((e=>{if(b&&A){const t=oe(e,b);Array.isArray(t)?(Q.current=Array.from(t).pop(),A({value:{all:!1,keys:new Set(t)},target:null})):(W.current={detail:e,range:{offset:b.offset,count:b.data.length}},C(t))}}),[b,A,C]),Te=s.useCallback((()=>{if(O.current&&k&&(!c||xe(void 0))){const e=ce.current||y.getFirstVisibleKey(O.current,q);o.isKeyDefined(e)&&k({value:e})}}),[c,k,xe]),Ae=s.useCallback((e=>{const t=y.keyExtractor(e.target,q);o.isKeyDefined(t)&&"checkbox"===e.relatedTarget?.getAttribute("type")&&(O.current?.focus(),k&&o.isKeyDefined(t)&&k({value:t}))}),[k]),Ie=s.useCallback((e=>{if(te(e.target)){O.current?.focus();const t=y.keyExtractor(e.target,q);k&&o.isKeyDefined(t)&&k({value:t})}else!o.isKeyDefined(d)&&k&&Te(),!c&&Ae(e)}),[c,d,Te,Ae,k]),Ve=V.useCollectionGestureContext(),{selectionProps:Fe}=p.useSelection((e=>e===O.current?void 0===d?null:d:y.keyExtractor(e,q)),j,R,!1,"replace","embedded"===Ve,ke,Q.current,d,((e,t)=>y.getPrevNextKey(O.current,e,t,q)),void 0,(e=>{if(O.current){const t=y.findElementByKey(O.current,e,q);if(t){const e=K?.scroller(),s=D?D(O.current):0;se(t,null!=e?e:O.current,s)}}}),Ce);if(b&&void 0!==W.current&&A){const e=oe(W.current.detail,b);Array.isArray(e)&&A({value:{all:!1,keys:new Set(e)},target:null});const t=W.current?W.current.range:{offset:b.offset,count:b.data.length};b=ae(b,t),W.current=void 0,C(t)}const Me=s.useMemo((()=>b&&L&&((e,t)=>0===t?null:e.slice(0,t).reduce(((e,s,i)=>{const n=s.metadata.key;return i===t-1?e.set(n,"end"):e.set(n,!0),e}),new Map))(b.data,L.count)),[b,L]),we=t.jsx(X,{sparkleHeight:be}),Ee=v.useItemAction(d,b,I,q,"embedded"===Ve);s.useEffect((()=>{if(Me){const e=O.current?.querySelector("."+r.PLACEHOLDER_STYLE_CLASS);let t=e?.offsetHeight||0;const s=O.current?.querySelectorAll("[data-oj-suggestion]");s?.forEach((e=>t+=e.offsetHeight)),fe(t)}}),[Me]);const je=s.useCallback((e=>{const s="multiple"===R?()=>t.jsx(T.Selector,{onChange:ke,rowKey:e.data.metadata.key,selectedKeys:j}):void 0;return{index:e.index,data:e.data.data,metadata:e.data.metadata,selector:s}}),[R,j,ke]),Re=N?Y:J,Ke=e=>{const s=je(e),i=Me?.get(s.metadata.key),n=c&&xe(s.metadata.key),l=d===s.metadata.key&&!n,r=l&&ue,a=o.containsKey(j,s.metadata.key),m=l&&he,g=(e,n)=>{return t.jsx(Re,{context:e,isFocused:l,isFocusRingVisible:m,isActive:r,isGridlineVisible:(o=s.index,"visible"===f?.item&&(o+1!==b?.totalSize||"visible"===f?.bottom)),isSelected:a,isTabbable:c&&xe(s.metadata.key),role:E,selectionMode:R,currentItemVariant:P,...i&&{suggestion:i},...0===s.index&&{isTopGridlineVisible:"visible"===f?.item&&"visible"===f?.top},...n,children:u},s.metadata.key);var o};if(z){return z({listItemContext:s,isFocused:l,isFocusRingVisible:m,isSelected:a,isTabbable:n,isActive:r,defaultListItem:g})}return g(s)};K=ie(O,K);const Pe=s.useCallback((e=>{const t=y.keyExtractor(e.target,q);o.isKeyDefined(t)&&(ce.current=t)}),[]),Le=s.useCallback((e=>{" "===e.key&&o.isKeyDefined(d)&&"none"!==R&&de(!0)}),[d,R,de]),Ne=s.useCallback((()=>{de(!1)}),[de]),[ze,De]=s.useState({key:""}),[He,Ge]=s.useState(ee),{triggerProps:_e}=U.useContextMenuGesture((({gesture:e,anchor:t,target:s})=>{let i=t;if("keyboard"===e){const e=y.findElementByKey(O.current,d,q);i=e||t,De({key:d})}else{const e=y.keyExtractor(s,q);De({key:e}),k?.({value:e})}Ge({...Z[e],anchorRef:{current:i},isOpen:!0})}),{isDisabled:!G}),Oe=s.useCallback((e=>{"dismissed"!==e.reason&&"itemAction"!==e.reason||O.current?.focus(),Ge({...ee})}),[]),Ue=F.useTestId(H);return t.jsxs(t.Fragment,{children:[t.jsx("div",{...n.mergeProps(c?ve:{},pe,Se,Fe,Ee,_e,{onFocus:Ie,onPointerDown:Pe,onKeyDown:Le,onKeyUp:Ne},_),...Ue,role:E,"aria-rowcount":ge,"aria-colcount":1,ref:O,class:ye,tabIndex:0,"aria-label":e,"aria-labelledby":a,"aria-multiselectable":me,children:null==b?m:N?t.jsx(r.VirtualizedCollection,{data:b,itemSelector:q,loadMoreIndicator:re,onLoadRange:C,rangeExtractor:w,suggestions:we,viewportConfig:K,children:Ke}):t.jsx(l.LoadMoreCollection,{data:b.data,loadMoreIndicator:re,hasMore:"atLeast"===b.sizePrecision&&b.data.length<=b.totalSize,onLoadMore:()=>{b&&C({offset:0,count:b.data.length+25})},suggestions:we,viewportConfig:K,children:Ke})}),G&&t.jsx(M.Menu,{...He,onClose:Oe,children:G(ze)})]})},e.SkeletonContainer=Q}));
//# sourceMappingURL=List-3352432c.js.map
