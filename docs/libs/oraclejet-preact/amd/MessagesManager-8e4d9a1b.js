define(['exports', 'preact/jsx-runtime', 'preact', 'preact/hooks', './TransitionGroup-b7a438aa', './useAnimation-71f423d8', './MessagesContext-7704d1bd', './useMessagesContext-f7ae2abb', './Transition-940ceb61'], (function(e,n,t,i,a,r,s,o,c){"use strict";const u={};function d({animationStates:e=u,initialAnimationStyles:t,onEntering:a,onExiting:s,...d}){const[l,g]=i.useState("entering"),m=i.useRef(),x=i.useRef(),{controller:v,nodeRef:f}=r.useAnimation(l,{animationStates:e,isAnimatedOnMount:!0,onAnimationEnd:i.useCallback((()=>{m.current?.(),m.current=void 0,x.current?.(),x.current=void 0}),[])}),{addBusyState:y}=o.useMessagesContext(),b=i.useCallback(((n,t,i)=>{m.current&&(m.current=void 0,v.cancel()),x.current?.(),x.current=void 0,a?.(n,void 0,i),g("entering"),void 0!==e.entering||void 0!==e["exiting => entering"]?(m.current=t,x.current=y?.("messages animating")):t?.()}),[e,v,y,a]),k=i.useCallback(((n,t,i)=>{m.current&&(m.current=void 0,v.cancel()),x.current?.(),x.current=void 0,s?.(n,void 0,i),g("exiting"),void 0!==e.exiting||void 0!==e["entering => exiting"]?(m.current=t,x.current=y?.("messages animating")):t?.()}),[e,v,y,s]);return i.useLayoutEffect((()=>()=>x.current?.()),[]),n.jsx("div",{ref:f,style:t,children:n.jsx(c.Transition,{...d,onEntering:b,onExiting:k})})}e.MessagesManager=function({data:e,animationStates:r,children:s,initialAnimationStyles:o,onMessageWillRemove:c}){const u=i.useCallback((async(e,n)=>{n&&c?.(n.key,n.index,e)}),[c]);return n.jsx(a.TransitionGroup,{elementType:t.Fragment,children:e.map(((e,t)=>n.jsx(d,{animationStates:r,initialAnimationStyles:o,metadata:{index:t,key:e.key},onExited:u,children:s?.({index:t,item:e})},e.key)))})}}));
//# sourceMappingURL=MessagesManager-8e4d9a1b.js.map
