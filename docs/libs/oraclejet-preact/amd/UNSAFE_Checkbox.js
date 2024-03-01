define(['exports', 'preact/jsx-runtime', 'preact/compat', './logger-e130a3d8', './TabbableModeContext-8858ed6b', 'preact/hooks', './useId-bea76214', './TopLayerHost-06d05670', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-5b95b4fc', './Flex-d0cc2f6e', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', 'preact', './Floating-d924078b', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-671dbb94', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-98877aa8', './TransitionGroup-b7a438aa', './MessagesContext-7704d1bd', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './FormFieldContext-30dbfa2d', './Popup-d06c889e', './UNSAFE_Separator/themes/SeparatorStyles.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './InputGroupContext-f6432f98', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './FormContext-40a413b7', './useFormContext-75933456', './CheckboxRadioContext-6aab10ba', './CheckboxControl-1ffdb63b', './Common/themes/redwood/theme', './Common/themes/themeContract.css', './vanilla-extract-recipes-createRuntimeFn.esm-103a441d', './ComponentMessageContainer-a45c7df5', './MessagesManager-8e4d9a1b', './useAnimation-71f423d8', './useMessagesContext-f7ae2abb', './Transition-940ceb61', './ComponentMessage-69f98ab9', './useComponentTheme-f77b756d', './MessageStartIcon-e086a6c7', './classNames-2e65b3b3', './SuccessS-869d229b', './Icon-1c51c520', './size-a13c8931', './utils-8a58b095', './colorUtils-709e88cf', './_curry1-a5ea38c3', './useTooltip-648a4c14', './useTooltipControlled-e99753ae', './Layer-f22bc6df', './useThemeInterpolations-04c9a737', './useColorScheme-fd9da662', './useScale-57db0ae7', './theme-e50f9baa', './Theme-a05c79ae', './mergeInterpolations-8339fdb7', './_curry3-9f1efdbd', './_curry2-919f598e', './_isObject-e5ac15f2', './useHover-c613069f', './useToggle-4d231fba', './useFocus-9d062824', './useTouch-850c91e2', './mergeProps-7d608009', './useTestId-af48c25c', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'css!./TooltipContentVariants.styles.css', './EnvironmentProvider-14a25d3a', './LayerManager-ae159a94', './UNSAFE_Icon/themes/IconStyle.css', './ErrorS-c6d54ba8', './InformationS-9617ab47', './WarningS-3221de6c', './PRIVATE_Message/themes/MessageStyles.css', './useTranslationBundle-d999fb18', './MessageSummary-15ee87fc', './MessageUtils-410832f3', './soundUtils-07d963c0', './HiddenAccessible-b4126946', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', './useFormFieldContext-24009ca1', './InlineHelp-92a0db0e', './InlineHelpSource-327ffc1e', './useTabbableMode-913efe07', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', './useInputGroupContext-42ac66b4', './dimensions-ee4bfe23', './boxalignment-7ec45526', './arrayUtils-3a8f9f2d', 'css!./boxalignment.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-f6bbe8f1', './flexbox-7c9a1acb', 'css!./flexbox.styles.css', './flexitem-c1ba5934', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', 'css!./MessageBannerVariants.styles.css', './useFloating-907f899d', './useUser-e0989b0b', './positionUtils-332efab6', './refUtils-9ddc9039', './useOutsideClick-6689a91c', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-8f33fc39', './UNSAFE_Floating/themes/FloatingContract.css', './BaseButton-0ad3564a', './usePress-80afb622', './useActive-dfb7e815', './clientHints-aa2ccdd3', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './ButtonLayout-64cb114c', './Text-7cbb9b7a', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutTheme', './UNSAFE_ButtonLayout/themes/ButtonLayoutStyles.css', 'css!./ButtonLayoutStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutVariants.css', 'css!./ButtonLayoutVariants.styles.css', './getLocale-61827336', './stringUtils-fd898858', './Message.types-f1704955', './tabbableUtils-b4353985', './head-2669913d', './_arity-57b80ac2', './_isArray-c27f325f', './_isString-2c7b8515', './FocusTrap-bc72d6c0', './FocusTracker-6c447746', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-098f562a', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './useAnimationStatus-05ff49db', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'css!./PopupStyles.styles.css', 'css!./SeparatorStyles.styles.css', './useFocusWithin-6de34a65', './IconUserAssistance-96e37f34', './Help-f3927506', './StyledCheckbox-b81d48b3', './Check-0d56c89d', './CheckboxOff-769431c4', './CheckboxOn-57ac4338', './CheckboxMixed-6a2b224d', './UNSAFE_Checkbox/themes/CheckboxIconContract.css', './UNSAFE_Checkbox/themes/redwood/CheckboxIconTheme', './UNSAFE_Checkbox/themes/CheckboxIconStyles.css', 'css!./CheckboxIconStyles.styles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxIconBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxIconVariants.css', 'css!./CheckboxIconVariants.styles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './UNSAFE_Checkbox/themes/CheckboxStyles.css', 'css!./CheckboxStyles.styles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxBaseTheme.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', 'css!./CheckboxVariants.styles.css', './LayoutStyles.css-295a1d49', 'css!./LayoutStyles.styles.css'], (function(e,s,t,o,a,c,n,r,l,i,d,h,m,u,b,y,S,p,C,F,A,U,x,f,T,g,_,k,E,N,B,w,M,I,L,v,P,V,R,H,j,D,O,q,G,W,z,K,$,J,Q,X,Y,Z,ee,se,te,oe,ae,ce,ne,re,le,ie,de,he,me,ue,be,ye,Se,pe,Ce,Fe,Ae,Ue,xe,fe,Te,ge,_e,ke,Ee,Ne,Be,we,Me,Ie,Le,ve,Pe,Ve,Re,He,je,De,Oe,qe,Ge,We,ze,Ke,$e,Je,Qe,Xe,Ye,Ze,es,ss,ts,os,as,cs,ns,rs,ls,is,ds,hs,ms,us,bs,ys,Ss,ps,Cs,Fs,As,Us,xs,fs,Ts,gs,_s,ks,Es,Ns,Bs,ws,Ms,Is,Ls,vs,Ps,Vs,Rs,Hs,js,Ds,Os,qs,Gs,Ws,zs,Ks,$s,Js,Qs,Xs,Ys,Zs,et,st,tt,ot,at,ct,nt,rt,lt,it,dt,ht,mt,ut,bt,yt,St,pt,Ct,Ft,At,Ut,xt,ft,Tt,gt,_t,kt,Et,Nt,Bt,wt){"use strict";const Mt=t.forwardRef((({"aria-describedby":e,assistiveText:o,columnSpan:a,helpSourceLink:c,helpSourceText:r,isDisabled:l,isReadonly:i,isRequired:d=!1,messages:m,onCommit:u,userAssistanceDensity:b,value:y,children:S},p=null)=>{const{isDisabled:C,isReadonly:F,userAssistanceDensity:A}=D.useFormContext(),U=t.useRef(null),x=n.useId(),f=l??C,T=i??F,g=b??A,_=!f&&!T,k=_?`${x}-bottom-ua`:void 0,E=t.useCallback((e=>{const{key:s}=e,t=void 0!==s;if(t&&" "!==s)return;const o=e.target,a=t?!o.checked:o.checked,c=!!y;c!==a&&u({value:a,previousValue:c})}),[u,y]);return t.useImperativeHandle(p,(()=>({focus:()=>{!f&&U.current?.focus()},blur:()=>{const e=document.activeElement;U.current===e&&e.blur()}}))),s.jsxs(O.CheckboxRadioContext.Provider,{value:{isFocusRingShown:!f},children:[s.jsx(q.CheckboxControl,{..._?{onChange:E,onKeyUp:E}:{},"aria-describedby":e,assistiveText:o,columnSpan:a,helpSourceLink:c,helpSourceText:r,isChecked:y,isDisabled:f,isReadonly:T,isRequired:d,ref:U,children:S}),_&&s.jsx(h.InlineUserAssistance,{id:k,isRequiredShown:!!d&&!y,requiredAlignment:"start",messages:m,userAssistanceDensity:"reflow"===g?g:"efficient"})]})}));e.Checkbox=Mt,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_Checkbox.js.map
