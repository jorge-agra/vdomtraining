define(['exports', 'preact/hooks'], (function(e,t){"use strict";e.useToggle=function(e=!1){const[o,s]=t.useState(e);return{bool:o,...t.useMemo((()=>({toggle:()=>s((e=>!e)),setTrue:()=>s(!0),setFalse:()=>s(!1)})),[])}}}));
//# sourceMappingURL=useToggle-4d231fba.js.map
