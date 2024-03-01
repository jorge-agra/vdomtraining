define(['exports', 'preact/jsx-runtime', './Label-019984fa', './Link-3a2d65ad', './Text-7cbb9b7a', './useAccessibleContext-7d4ee044', 'preact/hooks', './FormContext-40a413b7', './useFormContext-75933456', './TabbableModeContext-8858ed6b', './textAlign-28c50375', './FormFieldContext-30dbfa2d', './logger-e130a3d8', 'css!./ReadonlyTextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldInputVariants.css', './TopLayerHost-06d05670', 'preact/compat', './StyledTextField-633ae6df', './Flex-d0cc2f6e', 'css!./LabelValueLayoutStyles.styles.css', 'css!./SkeletonStyles.styles.css', 'css!./TextFieldLoadingStyles.styles.css', 'css!./TextFieldStyles.styles.css', 'module', './UNSAFE_TextField/themes/redwood/TextFieldVariants.css', 'css!./RadioStyles.styles.css', 'module', './UNSAFE_RadioItem/themes/redwood/RadioVariants.css', 'css!./LabelStyles.styles.css', 'module', './UNSAFE_Label/themes/redwood/LabelVariants.css', './UNSAFE_TextField/themes/FormLayoutStyles.css', 'module', 'css!./CheckboxStyles.styles.css', 'module', './UNSAFE_Checkbox/themes/redwood/CheckboxVariants.css', './InputGroupContext-f6432f98', './TextFieldInput-eed1a5a8', 'preact', 'css!./LiveRegionStyles.styles.css', 'css!./UserAssistanceStyles.styles.css', 'module', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceVariants.css', './InlineUserAssistance-5b95b4fc', 'css!./MessageBannerStyles.styles.css', 'module', './UNSAFE_MessageBanner/themes/redwood/MessageBannerVariants.css', './Floating-d924078b', 'css!./TooltipContentStyles.styles.css', 'module', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentVariants.css', 'css!./IconStyle.styles.css', './IconButton-671dbb94', 'css!./MessageStyles.styles.css', './MessageFormattingUtils-98877aa8', './TransitionGroup-b7a438aa', './MessagesContext-7704d1bd', 'css!./HiddenAccessibleStyles.styles.css', 'css!./ComponentMessageStyles.styles.css', 'module', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageVariants.css', './Popup-d06c889e', './UNSAFE_Separator/themes/SeparatorStyles.css', 'module', './UNSAFE_Popup/themes/redwood/PopupVariants.css', './View-41b13753', './useTextField-e4bae9af', './HiddenAccessible-b4126946', './classNames-2e65b3b3', './useComponentTheme-f77b756d', './mergeInterpolations-8339fdb7', './UNSAFE_LabelledLink/themes/redwood/LabelledLinkTheme', './useFormFieldContext-24009ca1', './CompactLabelAssistance-c8d6399f', './useTooltip-648a4c14', './useTooltipControlled-e99753ae', './useId-bea76214', './Layer-f22bc6df', './useThemeInterpolations-04c9a737', './useColorScheme-fd9da662', './useScale-57db0ae7', './theme-e50f9baa', './Theme-a05c79ae', './useHover-c613069f', './useToggle-4d231fba', './useFocus-9d062824', './useTouch-850c91e2', './mergeProps-7d608009', './useAnimation-71f423d8', './useTestId-af48c25c', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentTheme', './hooks/UNSAFE_useTooltip/themes/TooltipContentStyles.css', './hooks/UNSAFE_useTooltip/themes/redwood/TooltipContentBaseTheme.css', 'css!./TooltipContentVariants.styles.css', './vanilla-extract-recipes-createRuntimeFn.esm-103a441d', './EnvironmentProvider-14a25d3a', './LayerManager-ae159a94', './useTranslationBundle-d999fb18', './CompactHelpSource-c33f674c', './useTabbableMode-913efe07', './Help-f3927506', './Icon-1c51c520', './size-a13c8931', './utils-8a58b095', './Common/themes/themeContract.css', './colorUtils-709e88cf', './_curry1-a5ea38c3', './UNSAFE_Icon/themes/IconStyle.css', './useFocusWithin-6de34a65', './UNSAFE_UserAssistance/themes/UserAssistanceStyles.css', './UNSAFE_Label/themes/redwood/LabelTheme', './UNSAFE_Label/themes/LabelStyles.css', './UNSAFE_Label/themes/redwood/LabelBaseTheme.css', './UNSAFE_TextField/themes/redwood/TextFieldTheme', './UNSAFE_TextField/themes/TextFieldStyles.css', './UNSAFE_TextField/themes/redwood/TextFieldBaseTheme.css', 'css!./TextFieldVariants.styles.css', './usePress-80afb622', './useInteractionStyle-0d19d1a9', './clientHints-aa2ccdd3', './useActive-dfb7e815', './UNSAFE_Link/themes/redwood/LinkTheme', './UNSAFE_Link/themes/LinkStyles.css', 'css!./LinkStyles.styles.css', './UNSAFE_Link/themes/redwood/LinkBaseTheme.css', 'module', './UNSAFE_Link/themes/redwood/LinkVariants.css', 'css!./LinkVariants.styles.css', './UNSAFE_Text/themes/TextStyles.css', 'css!./TextStyles.styles.css', 'css!./text.styles.css', './vanilla-extract-sprinkles-createRuntimeSprinkles.esm-f6bbe8f1', './Common/themes/redwood/theme', './LabelValueLayout-4e9258be', './UNSAFE_RadioItem/themes/redwood/RadioTheme', './UNSAFE_RadioItem/themes/RadioStyles.css', './UNSAFE_RadioItem/themes/redwood/RadioBaseTheme.css', './UNSAFE_TextField/themes/redwood/FormLayoutTheme', './UNSAFE_TextField/themes/redwood/FormLayoutBaseTheme.css', './UNSAFE_Checkbox/themes/redwood/CheckboxTheme', './UNSAFE_Checkbox/themes/CheckboxStyles.css', './UNSAFE_Checkbox/themes/redwood/CheckboxBaseTheme.css', 'css!./CheckboxVariants.styles.css', './useInputGroupContext-42ac66b4', './useUser-e0989b0b', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldTheme', './UNSAFE_TextField/themes/ReadonlyTextFieldStyles.css', 'css!./ReadonlyTextFieldStyles.styles.css', './UNSAFE_TextField/themes/redwood/ReadonlyTextFieldVariants.css', 'css!./ReadonlyTextFieldVariants.styles.css', './LayoutStyles.css-295a1d49', 'css!./LayoutStyles.styles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonTheme', './UNSAFE_Skeleton/themes/SkeletonStyles.css', './UNSAFE_Skeleton/themes/redwood/SkeletonBaseTheme.css', 'module', './UNSAFE_Skeleton/themes/redwood/SkeletonVariants.css', './dimensions-ee4bfe23', './boxalignment-7ec45526', './arrayUtils-3a8f9f2d', 'css!./boxalignment.styles.css', './flexbox-7c9a1acb', 'css!./flexbox.styles.css', './flexitem-c1ba5934', 'css!./flexitem.styles.css', 'css!./FlexStyles.styles.css', './useTextFieldInputHandlers-990da838', './TextFieldUtils-756daaf4', './UNSAFE_TextField/themes/redwood/TextFieldInputTheme', './UNSAFE_TextField/themes/TextFieldInputStyles.css', 'css!./TextFieldInputStyles.styles.css', './UNSAFE_TextField/themes/redwood/TextFieldInputVariants.css', 'css!./TextFieldInputVariants.styles.css', './ComponentMessageContainer-a45c7df5', './MessagesManager-8e4d9a1b', './useMessagesContext-f7ae2abb', './Transition-940ceb61', './ComponentMessage-69f98ab9', './MessageStartIcon-e086a6c7', './SuccessS-869d229b', './ErrorS-c6d54ba8', './InformationS-9617ab47', './WarningS-3221de6c', './PRIVATE_Message/themes/MessageStyles.css', './MessageSummary-15ee87fc', './MessageUtils-410832f3', './soundUtils-07d963c0', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageTheme', './UNSAFE_ComponentMessage/themes/ComponentMessageStyles.css', './UNSAFE_ComponentMessage/themes/redwood/ComponentMessageBaseTheme.css', './InlineHelp-92a0db0e', './InlineHelpSource-327ffc1e', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceTheme', './UNSAFE_UserAssistance/themes/redwood/UserAssistanceBaseTheme.css', 'css!./MessageBannerVariants.styles.css', './useFloating-907f899d', './positionUtils-332efab6', './refUtils-9ddc9039', './useOutsideClick-6689a91c', './UNSAFE_Floating/themes/redwood/FloatingTheme', './UNSAFE_Floating/themes/FloatingStyles.css', 'css!./FloatingStyles.styles.css', './UNSAFE_Floating/themes/redwood/FloatingBaseTheme.css', 'module', './UNSAFE_Floating/themes/redwood/FloatingVariants.css', './vanilla-extract-dynamic.esm-8f33fc39', './UNSAFE_Floating/themes/FloatingContract.css', './BaseButton-0ad3564a', './UNSAFE_BaseButton/themes/BaseButtonStyles.css', 'css!./BaseButtonStyles.styles.css', './ButtonLayout-64cb114c', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutTheme', './UNSAFE_ButtonLayout/themes/ButtonLayoutStyles.css', 'css!./ButtonLayoutStyles.styles.css', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutBaseTheme.css', 'module', './UNSAFE_ButtonLayout/themes/redwood/ButtonLayoutVariants.css', 'css!./ButtonLayoutVariants.styles.css', './getLocale-61827336', './stringUtils-fd898858', './Message.types-f1704955', './tabbableUtils-b4353985', './head-2669913d', './_arity-57b80ac2', './_curry3-9f1efdbd', './_curry2-919f598e', './_isArray-c27f325f', './_isString-2c7b8515', './FocusTrap-bc72d6c0', './FocusTracker-6c447746', './PRIVATE_FocusTracker/themes/FocusTrackerStyles.css', 'css!./FocusTrackerStyles.styles.css', './Modal-098f562a', './UNSAFE_Modal/themes/ModalStyles.css', 'css!./ModalStyles.styles.css', './useAnimationStatus-05ff49db', './UNSAFE_Popup/themes/PopupContract.css', './UNSAFE_Popup/themes/redwood/PopupTheme', './UNSAFE_Popup/themes/redwood/PopupBaseTheme.css', 'css!./PopupStyles.styles.css', 'css!./SeparatorStyles.styles.css', './borders-bd13f801', './colors-d927cd74', './padding-c76f8dc6', './aria-7b544731', './equals-07e34d17', './_isObject-e5ac15f2', './useMessageSeverity-6b4548ce', './useFormFieldContextProps-e0ab321c', './UNSAFE_LabelledLink/themes/LabelledLinkStyles.css', 'css!./LabelledLinkStyles.styles.css', './UNSAFE_LabelledLink/themes/redwood/LabelledLinkVariants.css', 'css!./LabelledLinkVariants.styles.css'], (function(e,s,t,o,a,l,n,d,i,c,r,m,h,y,F,S,b,u,T,A,x,U,p,L,_,E,N,g,f,w,k,C,B,I,M,V,R,P,v,j,H,W,D,O,G,z,$,q,J,K,Q,X,Y,Z,ee,se,te,oe,ae,le,ne,de,ie,ce,re,me,he,ye,Fe,Se,be,ue,Te,Ae,xe,Ue,pe,Le,_e,Ee,Ne,ge,fe,we,ke,Ce,Be,Ie,Me,Ve,Re,Pe,ve,je,He,We,De,Oe,Ge,ze,$e,qe,Je,Ke,Qe,Xe,Ye,Ze,es,ss,ts,os,as,ls,ns,ds,is,cs,rs,ms,hs,ys,Fs,Ss,bs,us,Ts,As,xs,Us,ps,Ls,_s,Es,Ns,gs,fs,ws,ks,Cs,Bs,Is,Ms,Vs,Rs,Ps,vs,js,Hs,Ws,Ds,Os,Gs,zs,$s,qs,Js,Ks,Qs,Xs,Ys,Zs,et,st,tt,ot,at,lt,nt,dt,it,ct,rt,mt,ht,yt,Ft,St,bt,ut,Tt,At,xt,Ut,pt,Lt,_t,Et,Nt,gt,ft,wt,kt,Ct,Bt,It,Mt,Vt,Rt,Pt,vt,jt,Ht,Wt,Dt,Ot,Gt,zt,$t,qt,Jt,Kt,Qt,Xt,Yt,Zt,eo,so,to,oo,ao,lo,no,io,co,ro,mo,ho,yo,Fo,So,bo,uo,To,Ao,xo,Uo,po,Lo,_o,Eo,No,go,fo,wo,ko,Co,Bo,Io,Mo,Vo,Ro,Po){"use strict";const vo=({children:e,id:o})=>s.jsx(ye.HiddenAccessible,{isHidden:!0,children:s.jsx(t.Label,{id:o,children:e})});function jo({hasInsideLabel:e,isFormLayout:s,isFormReadonly:t,textAlign:o}){const a=[...Object.values(r.textInterpolations)],l=be.mergeInterpolations(a),{class:n}=l({textAlign:o}),{classes:d}=Se.useComponentTheme(ue.LabelledLinkRedwoodTheme,{formLayout:s?"isFormLayout":"notFormLayout",readonlyForm:t?"isReadonlyForm":"notReadonlyForm",insideLabel:e?"hasInsideLabel":"noInsideLabel"});return{classes:Fe.classNames([n,d])}}e.LabelledLink=({"aria-describedby":e,children:n,columnSpan:d,href:c,label:r,labelEdge:h,labelStartWidth:y,onClick:F,target:S,textAlign:b,userAssistanceDensity:T})=>{const{isFormLayout:A,isReadonly:x,labelEdge:U,labelStartWidth:p,textAlign:L,userAssistanceDensity:_}=i.useFormContext(),E=h??U,N=y??p,g=b??L,f=T??_,w=n??c,{baseId:k,formFieldContext:C,labelProps:B,inputProps:I,userAssistanceProps:M}=he.useTextField({ariaDescribedBy:e,isReadonly:!0,labelEdge:E,value:w}),V=s.jsx(t.Label,{...B,children:r}),R={label:"none"!==E?V:void 0,labelEdge:"none"!==E?E:void 0,labelStartWidth:"none"!==E?N:void 0},P="efficient"===f?s.jsx(O.InlineUserAssistance,{userAssistanceDensity:f,...M}):void 0,{classes:v}=jo({hasInsideLabel:"inside"===E,isFormLayout:A,isFormReadonly:x,textAlign:g}),j=""===r,H="none"===E,{containerAria:W,hiddenLabelAria:D,linkAria:G}=function({"aria-describedby":e,baseId:s,hasEmptyLabel:t,hasHiddenLabel:o,labelId:a}){const n=`${s}--container`,d=a??`${s}--hidden-label`,{UNSAFE_ariaLabelledBy:i}=l.useAccessibleContext();return{containerAria:{id:n},hiddenLabelAria:o?{id:d}:{},linkAria:{"aria-describedby":e,"aria-labelledby":Fe.classNames([d,t&&o&&i,n])}}}({"aria-describedby":I["aria-describedby"],baseId:k,hasEmptyLabel:j,hasHiddenLabel:H,labelId:B.id});return s.jsx(m.FormFieldContext.Provider,{value:C,children:s.jsx(u.ReadonlyTextField,{columnSpan:d,role:"presentation",inlineUserAssistance:P,...R,children:s.jsxs("div",{class:v,...W,children:[H&&s.jsx(vo,{...D,children:r}),s.jsx(me.View,{width:"100%",children:s.jsx(o.Link,{href:c,target:S,onClick:F,...G,children:s.jsx(a.Text,{size:"md",variant:"inherit",children:w})})})]})})})},Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=UNSAFE_LabelledLink.js.map
