define(['exports', 'preact/hooks'], (function(e,n){"use strict";e.useMenuAction=function({isDisabled:e,isMenuOpen:o,onToggleMenu:s,anchorRef:a}){const[r,t]=n.useState("menu"),u=n.useCallback((e=>{"keyboard"===e.reason?t("firstItem"):t("menu"),s?.({value:!o})}),[s,o,t]),i=n.useCallback((e=>{"outsideClick"===e.reason&&a.current?.contains(e.target)||("dismissed"!==e.reason&&"itemAction"!==e.reason||a.current?.focus(),s?.({value:!1}))}),[s,a]),c=n.useCallback((n=>{"ArrowDown"==n.key&&(!e&&s?.({value:!o}),n.preventDefault())}),[e,o]);return{triggerProps:e?{}:{onAction:u,onKeyDown:c,"aria-haspopup":"true","aria-expanded":o},menuProps:{anchorRef:a,isOpen:o,onClose:i,initialFocus:r}}}}));
//# sourceMappingURL=useMenuAction-c69dedac.js.map