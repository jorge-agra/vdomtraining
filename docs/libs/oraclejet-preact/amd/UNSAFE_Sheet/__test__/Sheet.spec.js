define(['preact/jsx-runtime', '@testing-library/preact', '../../TopLayerHost-06d05670', '../../EnvironmentProvider-14a25d3a', 'chai', 'sinon', 'preact/hooks', '@testing-library/user-event', '../../BaseButton-0ad3564a', '../../Sheet-41710ab5', '../../clientHints-aa2ccdd3', 'preact', '../../Common/themes/redwood/theme', '../../Common/themes/themeContract.css', 'preact/compat', '../../LayerManager-ae159a94', '../../usePress-80afb622', '../../useHover-c613069f', '../../useToggle-4d231fba', '../../useActive-dfb7e815', '../../TabbableModeContext-8858ed6b', '../../useTabbableMode-913efe07', '../../useId-bea76214', '../../useColorScheme-fd9da662', '../../classNames-2e65b3b3', '../../dimensions-ee4bfe23', '../../size-a13c8931', '../../utils-8a58b095', '../../colorUtils-709e88cf', '../../_curry1-a5ea38c3', '../../mergeInterpolations-8339fdb7', '../../_curry3-9f1efdbd', '../../_curry2-919f598e', '../../_isObject-e5ac15f2', '../../mergeProps-7d608009', '../../UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./../../BaseButtonStyles.styles.css', '../../vanilla-extract-recipes-createRuntimeFn.esm-103a441d', '../../useTestId-af48c25c', '../../Modal-098f562a', '../../Layer-f22bc6df', '../../useThemeInterpolations-04c9a737', '../../useScale-57db0ae7', '../../theme-e50f9baa', '../../Theme-a05c79ae', '../../UNSAFE_Modal/themes/ModalStyles.css', 'css!./../../ModalStyles.styles.css', '../../WindowOverlay-d9c7307d', '../../vanilla-extract-dynamic.esm-8f33fc39', '../../UNSAFE_WindowOverlay/themes/WindowOverlayStyles.css', 'css!./../../WindowOverlayStyles.styles.css', '../../UNSAFE_WindowOverlay/themes/WindowOverlayContract.css', '../../useUser-e0989b0b', '../../useComponentTheme-f77b756d', '../../logger-e130a3d8', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayTheme', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayBaseTheme.css', 'module', '../../UNSAFE_WindowOverlay/themes/redwood/WindowOverlayVariants.css', '../../useSheetSwipe-ee78bba5', '../themes/SheetStyles.css', 'css!./../../SheetStyles.styles.css'], (function(e,t,n,s,o,r,a,c,l,i,d,u,h,y,m,f,p,b,S,w,v,x,g,E,T,C,j,O,W,N,B,_,F,U,A,I,M,k,H,P,D,L,R,q,X,Y,z,V,G,J,K,Q,Z,$,ee,te,ne,se,oe,re,ae,ce){"use strict";function le(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var ie=le(c);function de(e){return e.querySelector("#contentId")}function ue(e){return e.querySelector("#contentId").parentElement}const he=({onClose:t})=>{const n=a.useRef(null);return e.jsx(e.Fragment,{children:e.jsxs(s.RootEnvironmentProvider,{children:[e.jsx(l.BaseButton,{ref:n,children:"Open"}),e.jsx(i.Sheet,{isOpen:!0,onClose:t,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",outlineStyle:"none"},id:"contentId",children:[e.jsx("h1",{children:"N1"}),e.jsx("h1",{children:"N2"}),e.jsx("h1",{children:"N3"}),e.jsx("h1",{children:"N4"})]})})]})})};describe("Test Sheet Component",(()=>{it("Sheet content render correctly",(async function(){const{container:n}=t.render(e.jsx(he,{})),s=de(n);o.expect(s).not.null})),it("onClose called when Escape or Tab are pressed",(async function(){const n=r.spy(),{container:s}=t.render(e.jsx(he,{onClose:n})),a=de(s),c=ue(s);o.expect(a).not.null,t.fireEvent.keyDown(c,{code:"Tab"}),t.fireEvent.keyDown(c,{code:"Escape"}),o.expect(n.calledTwice).to.be.true})),it("onClose called when clicking scrim",(async function(){const n=r.spy(),{container:s}=t.render(e.jsx(he,{onClose:n})),a=de(s),c=function(e){return e.parentElement?.parentElement?.parentElement?.firstElementChild}(ue(s));o.expect(a).not.null,await ie.default.click(c),o.expect(n.called).to.be.true})),it("onClose called when swipe is done (mobile)",(async function(){const n=r.spy(),{container:s}=t.render(e.jsx(he,{onClose:n})),a=de(s),c=ue(s);if(o.expect(a).not.null,"undefined"==typeof jest&&"primary"===d.getClientHints().touchSupport){const e=new Touch({target:c,identifier:0,pageX:386,pageY:224}),s=new Touch({target:c,identifier:0,pageX:389,pageY:397});c&&(t.fireEvent.touchStart(c,{timeStamp:10406,currentTarget:c,changedTouches:[e]}),t.fireEvent.touchEnd(c,{timeStamp:10472,currentTarget:c,changedTouches:[s]})),o.expect(n.called).to.be.true}}))}))}));
//# sourceMappingURL=Sheet.spec.js.map
