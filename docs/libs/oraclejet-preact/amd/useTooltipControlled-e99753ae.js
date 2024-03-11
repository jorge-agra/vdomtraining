define(['exports', 'preact/jsx-runtime', 'preact/hooks', './useId-bea76214', './Floating-d924078b', './Layer-f22bc6df', 'preact/compat', './TopLayerHost-06d05670', './useHover-c613069f', './useFocus-9d062824', './useTouch-850c91e2', './mergeProps-7d608009', './useAnimation-71f423d8', './useComponentTheme-f77b756d', './useTestId-af48c25c', './useThemeInterpolations-04c9a737', './classNames-2e65b3b3', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './EnvironmentProvider-14a25d3a', './useColorScheme-fd9da662'], (function(e,t,n,o,s,r,u,i,a,c,d,l,m,p,f,h,g,b,v,T){"use strict";const P=({children:e,id:o,isOpen:s,isDatatip:r,onTransitionEnd:u,testId:i,...a})=>{const c=n.useRef(null),d=n.useRef(null),l=f.useTestId(i),{baseTheme:v,variantClasses:T,styles:P}=p.useComponentTheme(b.TooltipContentRedwoodTheme,{variant:r?"datatip":"tooltip"}),x=h.useThemeInterpolations(),{nodeRef:y}=m.useAnimation(s?"mounted":"unmounted",{animationStates:{mounted:e=>{const t=e.firstChild;return{from:{maxHeight:"0",opacity:"0%"},to:{maxHeight:`${t?.offsetHeight}px`,opacity:r?"100%":"95%"},options:{duration:r?1:100,easing:[0,0,.2,1]}}},unmounted:e=>({from:{opacity:r?"100%":"95%"},to:{maxHeight:"0",opacity:"0%"},options:{duration:r?1:100,easing:[0,0,.2,1]}})},isAnimatedOnMount:!0,onAnimationEnd:()=>u?.()});return n.useEffect((()=>{c.current&&d.current?.offsetHeight&&(c.current.style.height=`${d.current?.offsetHeight}px`)}),[]),t.jsx("div",{ref:c,id:o,role:"tooltip",class:g.classNames([P.wrapper,x,v]),...l,children:t.jsx("div",{ref:y,class:P.inner,...a,children:t.jsx("div",{ref:d,class:g.classNames([T,P.content]),children:e})})})};e.useTooltipControlled=({text:e,isOpen:u=!1,variant:i="tooltip",position:m="bottom",isDisabled:p=!1,anchor:f={x:"element",y:"element"},offset:h={mainAxis:0,crossAxis:0},onToggle:g,testId:b})=>{const x=p||!e,y=n.useRef(!0),E=n.useRef(!1),[C,R]=n.useState(!x&&u?"mounting":"unmounted"),k=n.useRef(C),H=e=>{k.current=e,R(e)},[A,I]=n.useState(!1);I(!1);const j="datatip"===i,F=n.useRef(!0),{hoverProps:S,isHover:w}=a.useHover({}),{touchProps:D,isTouch:L}=d.useTouch({isDisabled:p}),{focusProps:B,isFocus:M}=c.useFocus({isDisabled:w||L}),{hoverProps:N,isHover:O}=a.useHover({isDisabled:p}),_="pointer"===f.x||"pointer"===f.y,G=n.useRef(o.useId()),U=n.useRef(null),$=n.useRef({x:-9999,y:-9999}),K=_&&!M?$:U,V=j?0:250,X=n.useRef(null),Y=T.useColorScheme(),q=Y&&"light"!==Y?"light":"dark",z=()=>{X.current&&(clearTimeout(X.current),X.current=null)},J=n.useCallback((e=>{if(e)switch(C){case"unmounted":H("mountPending");break;case"unmounting":H("mounting"),g?.({value:!0});break;case"unmountPending":z(),H("mounted")}else switch(C){case"mounting":case"mounted":H("unmountPending");break;case"mountPending":z(),te(),H("unmounted")}}),[C,g]);n.useEffect((()=>{y.current?y.current=!1:H(u?"mounting":"unmounting")}),[u]),n.useEffect((()=>()=>{z()}),[]),n.useEffect((()=>{F.current?F.current=!1:_&&w&&"unmounted"===C||J(w||M&&!E.current||O||L)}),[w,M,O,L,_,C,J]),n.useEffect((()=>(X.current||"mountPending"!==C&&"unmountPending"!==C||(X.current=setTimeout((()=>{z(),"mountPending"!==C&&"unmountPending"!==C||C!==k.current||g?.({value:"mountPending"===C})}),V)),()=>{z()})),[C,V,g]);const Q={onFocus:n.useCallback((e=>{(e.eventPhase===Event.AT_TARGET||e.eventPhase===Event.BUBBLING_PHASE&&j)&&(U.current=e.target)}),[j]),onBlur:n.useCallback((e=>{e.eventPhase===Event.AT_TARGET&&(E.current=!1)}),[])},W={onMouseEnter:n.useCallback((e=>{U.current=e.target}),[])},Z={onKeyUp:n.useCallback((e=>{"Escape"===e.code&&(e.preventDefault(),E.current=!0,g?.({value:!1}))}),[g])};let ee;const te=()=>{$.current={x:-9999,y:-9999}};if(x)ee=l.mergeProps(S,B,W,Q);else{const e={"aria-describedby":G.current,..._&&{onMouseLeave:()=>{"mounting"!==C&&z()},onMouseMove:e=>{(e=>{if("unmounted"!==C&&("datatip"!==i||"mounted"!==C))return;const t=U?.current?.getBoundingClientRect(),n=document.body.scrollLeft+(t?.left||0)+(t?.width||0),o=document.body.scrollTop+(t?.top||0)+(t?.height||0),s="pointer"===f.x?e.clientX:n,r="pointer"===f.y?e.clientY:o;"mounted"===C?($.current={x:s,y:r},!0!==A&&I(!0)):"unmounted"===C&&(z(),X.current=setTimeout((()=>{"unmounted"===C&&($.current={x:s,y:r},g?.({value:!0}))}),V))})(e)}}};ee=l.mergeProps(S,B,D,W,Q,e,Z)}if(x)return z(),te(),{tooltipContent:null,tooltipProps:ee};const ne=(e=>{let t="bottom";switch(e){case"top":case"end":case"bottom":case"start":t=e;break;case"top-end":t="top-end-corner";break;case"bottom-end":t="bottom-end-corner";break;case"bottom-start":t="bottom-start-corner";break;case"top-start":t="top-start-corner"}return t})(m),oe=t.jsx(P,{id:G.current,testId:b,isOpen:["mounting","mounted","unmountPending"].includes(C),...N,isDatatip:j,onTransitionEnd:()=>{"mounting"===C&&H("mounted"),"unmounting"===C&&(te(),H("unmounted"))},children:e}),se=t.jsx(r.Layer,{logicalParentRef:U,children:t.jsx(s.Floating,{anchorRef:K,placement:ne,offsetValue:h,children:"tooltip"===i?t.jsx(v.EnvironmentProvider,{environment:{colorScheme:q},children:oe}):t.jsx(t.Fragment,{children:oe})})});return{tooltipContent:!["unmounted","mountPending"].includes(C)&&se,tooltipProps:ee}}}));
//# sourceMappingURL=useTooltipControlled-e99753ae.js.map