define(['exports', './logger-e130a3d8'], (function(e,t){"use strict";e.useComponentTheme=(e,s)=>{const{multiVariantStyles:n,styles:o,variants:r=[],baseTheme:a=""}=e||{},i=Object.keys(r).reduce(((e,t)=>(e[t]=s?.[t],e)),{});n||t.warn("You are missing a theme for your component. You may need to create one or provide a theme in your Environment context.");const m=n?n(i):"";return{styles:o,baseTheme:a,variantClasses:m,classes:`${a} ${m}`}}}));
//# sourceMappingURL=useComponentTheme-f77b756d.js.map
