define(['exports', 'preact/jsx-runtime', './size-a13c8931', './classNames-2e65b3b3', './colorUtils-709e88cf', './LayoutUtils-75d8cff4', './UNSAFE_TagCloud/themes/TagCloudStyles.css', 'preact/hooks', './useUser-e0989b0b', './useDatatip-88cbd577', './util-aa688832', './mergeProps-7d608009', './useTranslationBundle-d999fb18', './useTextDimensions-a2b7ad1c', './useSelection-0c4c6e5c', './useTestId-af48c25c', './TrackResizeContainer-ff49e9cb'], (function(e,t,n,i,o,r,s,l,a,c,u,d,f,h,g,x,m){"use strict";function p(e,t){const{idx:n}=e;return t[n]}function b(e){return null!=e?.15*e:0}function I(e){return{getItem:t=>p(t,e),getDetailFromInfo:t=>{if(!t)return{id:void 0};return{id:p(t,e).id}},getPrevItemInfo:t=>function(e,t){let n=e.idx;return n=Math.max(0,n-1),{idx:n,id:t[n].id}}(t,e),getNextItemInfo:t=>function(e,t){let n=e.idx;return n=Math.min(t.length-1,n+1),{idx:n,id:t[n].id}}(t,e)}}const S=20,y=(e,t,n,i)=>t===n?12:12+Math.ceil((i-1)*(e-t)/(n-t)*12);function w(e){const t=[];let n=Number.MAX_VALUE,i=-Number.MAX_VALUE;for(let t=0;t<e.length;t++)n=Math.min(n,e[t].value),i=Math.max(i,e[t].value);for(let o=0;o<e.length;o++){const r=y(e[o].value,n,i,3);t.push({...e[o],fontSize:r})}return t}function v(e,t){const n=[0];let i=e[0].w+2;if(e.length>1)for(let o=1;o<e.length;o++)i+e[o].w>t&&(n.push(o),i=0),i+=e[o].w+2;return n}function C(e,t,n,i,o,s){let l;return l="cloud"!==e&&e?function(e,t,n,i,o){const r=[],s=[];let l=0,a=0,c=0;const u=w(e);for(let e=0;e<u.length;e++){const t=u[e],n=o(t.label,{fontSize:t.fontSize+"px"});l=Math.max(l,n.width),a=Math.max(a,n.height),c=Math.max(c,t.fontSize),s.push({w:n.width,h:n.height,x:n.x,y:n.y})}let d,f,h=0,g=(t-0)/l;for(;g-h>.001;)d=(h+g)/2,f=v(s,(t-0)/d),f.length*(d*a+2)-2>n-0?g=d:h=d;d=h,f=v(s,(t-0)/d),f.push(u.length);for(let e=0;e<f.length-1;e++){const n=f[e],o=f[e+1];let l=5,c=0,h=!0;if(o-n>1){let i=0;for(let e=n;e<o;e++)i+=s[e].w*d,c=Math.max(c,s[e].h*d);if(l=(t-0-i)/(o-n-1),e==f.length-2){const e=.5*c;e<l&&i+(o-n)*e<.9*(t-0)&&(l=e,h=!1)}}const g=0+(e+1)*(a*d+2)-2;let x=0;for(let e=n;e<o;e++){const a=u[e],c=a.fontSize*d;a.fontSize=c;const f=s[e].w*d;a.y=0+g+s[e].y*d-S,h&&e===o-1&&e!==n?a.x=i?0+f+0-t:0+t-f-0:(a.x=0+x,i?x-=s[e].w*d+l:x+=s[e].w*d+l),r.push({...a,w:f,h:s[e].h*d})}}return r}(t,n,i,o,s):function(e,t,n,i,o){const s=[],l=180;let a=10/l,c=10/l;t>n?a*=t/n:c*=n/t;const u=2*Math.PI/l;let d=null,f=0;const h=[],g=[],x=[],m=w(e);for(let e=0;e<m.length;e++){let t=!1,n=0,i=4;const x=m[e],p=o(x.label,{fontSize:x.fontSize+"px"});f=Math.max(f,x.fontSize);let I=-1;for(;!t;){const o=n%l;void 0===h[o]&&(h[o]=Math.cos(n*u)),void 0===g[o]&&(g[o]=Math.sin(n*u));const f=a*n*h[o],m=c*n*g[o],S=b(p.height),y={x:f,y:m,w:p.width+2*S,h:p.height+2*S};if(t=!0,-1!==I&&r.intersects(s[I],y)&&(t=!1),t)for(let n=0;n<e;n++)if(r.intersects(s[n],y)){I=n,t=!1;break}t&&(d=d?r.getUnion(d,y):y,I=-1,s[e]=y,x.x=f,x.y=m,x.w=p.width,x.h=p.height),3600==n?i=3:5400==n?i=2:10800==n&&(i=1),n+=i}}if(d){const e=Math.max(d.w/t,d.h/n),o=d.x+d.w/2,r=d.y+d.h/2;for(let s=0;s<m.length;s++){let l;const a=m[s];l=i?null!=a.x?0-a.x/e-(t/2-o/e):0:null!=a.x?0+a.x/e+(t/2-o/e):0;const c=null!=a.y?0+a.y/e+(n/2-r/e):0,u=null!=a.w?a.w/e:0,d=null!=a.h?a.h/e:0,f=a.fontSize/e;x.push({...a,x:l,y:c,fontSize:f,w:u,h:d})}}return x}(t,n,i,o,s),l}function z(e,t,n,i,r,s,l,a,c){let u,d=!1;if(!i){const e=t===l?.idx,n=t===r?.idx;d=!!(e&&l?.isCurrent||n&&r?.isCurrent)}const f=function(e,t){if(t)return 0===t.length||new Set(t).has(e)}(e.id,a),h=function(e,t){return!(!t||0===t.length)&&new Set(t).has(e)}(e.id,s);if(e.color){let t,n,i;h?(n=e.color,t=o.getContrastingTextColor(n)):t=e.color,u={color:t,backgroundColor:n,backgroundImage:i}}else n||(u={backgroundColor:"none"});return{isCurrent:d,isHighlighted:f,isSelected:h,isFocused:!!l&&R(l,t),key:e.id,itemIdx:t,style:u,activeId:d?c:void 0,isReadOnly:i,...e}}function M(e){const t=e.dataset.idx;if(null!=t)return{idx:Number(t)}}function T(e,t){return e?.idx===t?.idx}function R(e,t){if(!e.isFocusVisible)return!1;const{idx:n}=e;return n===t}const U=e=>{const{itemBase:n,itemStyle:o,hoverUnselectedItemStyle:r,selectedItemStyle:l,hoveredSelectedItemStyle:a,dimmedItemStyle:c,interactiveCursorStyle:u}=s.styles,d=e.isHighlighted||null==e.isHighlighted,f=i.classNames([n,e.isSelected?l:o,e.isCurrent?e.isSelected?a:e.isFocused||e.supportsSelection?r:"":"",d?"":c,e.supportsAction||e.supportsSelection?u:""]),h=(g=!!e.supportsSelection,x=e.translations,m=e.isSelected,p=e.accessibleLabel,I=e.role,{"aria-label":[p,g?m?x?.dataVisualization_stateSelected():x?.dataVisualization_stateUnselected():""].filter(Boolean).join(". ")||void 0,role:I||"img"});var g,x,m,p,I;const S=b(e.h);return t.jsx("div",{class:f,"data-id":`${e.id}`,"data-idx":e.itemIdx,style:{...e.style,transform:`translate(${(e.x||0)-S}px,${(e.y||0)-S}px)`,fontSize:e.fontSize,padding:`${S}px`,lineHeight:e.fontSize+"px"},id:e.activeId,...h,children:e.label})};const k=(e,t,n,i)=>{if(i?.current&&t.isCurrent&&e.current&&null!=i?.current.x&&null!=i?.current.w&&null!=i?.current.y&&null!=i?.current.h){const t={x:i.current.x,y:i.current.y,width:i.current.w,height:i.current.h},o=e.current.getBoundingClientRect();return u.calculateOffset(n,o.width,t)}return u.calculateOffset(n,0,void 0)},P=({datatip:e,rootRef:t,focusedItemRef:n,focusedItemInfo:i})=>{const{direction:o}=a.useUser(),r="rtl"===o,[s,u]=l.useState(k(t,i,r,n));l.useLayoutEffect((()=>{u(k(t,i,r,n))}),[i]);const d=i?.isCurrent?"element":"pointer",{datatipContent:f,datatipProps:h}=c.useDatatip({content:e?.content,borderColor:e?.borderColor,anchor:d,placement:"top-start",offset:s});return{datatipContent:f,datatipProps:h}};function L({selectionMode:e="none",layout:n="cloud",width:i,height:o,items:c,onItemAction:u,onItemInput:m,testId:p,...b}){const S=x.useTestId(p),y=l.useRef(null),w=l.useRef(null),v=f.useTranslationBundle("@oracle/oraclejet-preact"),R=c.filter((e=>!b.hiddenIds?.includes(e.id))),k=R&&0!==R.length,L=!(!e||"none"===e),A=null!=u,D=A&&null===m,B=function(e,t,n,i,o){return{"aria-label":`${n||""} ${t?"":e.dataVisualization_noData()}`,role:"application","aria-describedBy":i,"aria-LabelledBy":o}}(v,k,b.accessibleLabel,b["aria-describedby"],b["aria-labelledby"]),{getItem:j,getDetailFromInfo:F,getPrevItemInfo:V,getNextItemInfo:N}=I(R),{hoveredItemInfo:E,focusedItemInfo:$,..._}=function(e,t,n,i,o,s){const[c,u]=l.useState({idx:0}),[d,f]=l.useState(),h=l.useRef(),{direction:g}=a.useUser(),x="rtl"===g,m=n=>{const i=M(n.target);T(i,d)||(f(i&&{...i,isCurrent:!0}),h.current=r.getRandomId(),e&&(u({...c,isCurrent:!1}),s?.(t(i))))},p=()=>{f(void 0),h.current=void 0,e&&s?.(t())};if(!e)return{focusedItemInfo:c,hoveredItemInfo:d,onPointerLeave:p,onPointerMove:m};function b(e){s?.(t(e)),h.current=r.getRandomId(),u(e)}function I(e){T(e,c)||(e.isCurrent=!0,e.isFocusVisible=!0,d&&f({...d,isCurrent:!1}),b(e))}const S=()=>{const{id:e}=t(c);null!=e&&(o?.({id:e}),h.current=r.getRandomId())};return{focusedItemInfo:c,hoveredItemInfo:d,"aria-activedescendant":h.current,onPointerUp:e=>{const n=M(e.target);if(null!=n){u(n);const{id:e}=t(n);null!=e&&(o?.({id:e}),h.current=r.getRandomId())}else o?.({id:void 0})},onPointerMove:m,onKeyUp:e=>{switch(e.code){case"Space":case"Enter":S();break;case"Tab":b({...c,isCurrent:!0,isFocusVisible:!0})}},onKeyDown:e=>{switch(e.key){case"Tab":return;case"ArrowDown":I(i(c));break;case"ArrowUp":I(n(c));break;case"ArrowRight":I(x?n(c):i(c));break;case"ArrowLeft":I(x?i(c):n(c))}(e=>{e.preventDefault(),e.stopPropagation()})(e)},onPointerLeave:p,onBlur:()=>{(null!=d||c.isCurrent)&&s?.(t(void 0));const e={...c,isCurrent:!1,isFocusVisible:!1};u(e)}}}(!D&&k,F,V,N,u,m),H=function(e,t,n,i,o){const r=n.isCurrent?n:i?.isCurrent&&null!=i.idx?i:void 0;if(!r)return{content:void 0,borderColor:void 0};const s=t(r,e);return o&&s?o({data:s}):{content:s?.accessibleLabel,borderColor:void 0}}(R,j,$,E,b.datatip),{datatipContent:O,datatipProps:K}=P({datatip:H,rootRef:y,focusedItemInfo:$,focusedItemRef:w}),X=g.useSelection({idExtracter:e=>{const t="keyup"===e.type?$:M(e.target);return F(t).id},selection:b.selectedIds,selectionMode:e,onChange:b.onSelectionChange}),q=d.mergeProps(_,K,X),{direction:G}=a.useUser(),J=[K["aria-describedby"],B["aria-describedBy"]].filter(Boolean).join(" "),{textMeasureContent:Q,getTextDimensions:W}=h.useTextDimensions(),Y=l.useMemo((()=>W&&k?C(n,R,i,o,"rtl"===G,W):[]),[n,R,k,i,o,G,W]);return t.jsxs("div",{ref:y,tabIndex:D?void 0:0,style:{width:i,height:o},class:s.baseStyles,...S,...B,...q,"aria-describedby":J,children:[Y.map(((e,n)=>{const i=z(e,n,L,D,E,b.selectedIds,$,b.highlightedIds,_["aria-activedescendant"]);return $.idx===n&&(w.current=e),t.jsx(U,{fontSize:e.fontSize,x:e.x,y:e.y,accessibleLabel:e.accessibleLabel,supportsSelection:L,supportsAction:A,translations:v,...i})})),Q,O]})}e.TagCloud=function({height:e="112x",width:i="100%",...o}){return t.jsx(m.TrackResizeContainer,{width:n.sizeToCSS(i)||i||"0px",height:n.sizeToCSS(e)||e||"0px",children:(e,n)=>t.jsx(L,{width:e,height:n,...o})})}}));
//# sourceMappingURL=TagCloud-4e7f78f9.js.map
