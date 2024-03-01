define(['exports', 'preact/jsx-runtime', './UNSAFE_PlotArea/themes/PlotAreaStyles.css', './classNames-2e65b3b3', './useColorScheme-fd9da662'], (function(e,t,s,i,o){"use strict";const n={yMajorTick:{isRendered:!0},yMinorTick:{isRendered:!1},xMajorTick:{isRendered:!1}};e.Gridlines=function({plotArea:e=n,yMinorTicks:l,xScale:r,yScale:d,isLog:a,xViewportMin:y,xViewportMax:c,yTicks:h,yAxisPosition:x}){const k="top"===x||"bottom"===x,[$,m]=r.range(),[S,L]=d.range();let M="",f="",j="";const{yMajorTick:T,yMinorTick:g,xMajorTick:u}=e,p={...n.yMajorTick,...T},v={...n.yMinorTick,...g},A={...n.xMajorTick,...u},P=!0===v?.isRendered||a;if(p?.isRendered)for(let e=1;e<h.length;e++){const t=d.transform(h[e]);M+=k?`M${t},${$}L${t},${m}`:`M${$},${t}L${m},${t}`}if(A?.isRendered){for(let e=Math.floor(y-.5)+1.5;e<c;e++){const t=r.transform(e);f+=k?`M${S},${t}L${L},${t}`:`M${t},${S}L${t},${L}`}}if(P)for(let e=0;e<l.length;e++){const t=d.transform(l[e]);j+=k?`M${t},${$}L${t},${m}`:`M${$},${t}L${m},${t}`}const R=o.useColorScheme();return t.jsxs(t.Fragment,{children:[p?.isRendered&&t.jsx("path",{d:M,class:i.classNames([s.styles.noPointerEvents,s.styles.majorTickLineStyles,"dashed"===p?.lineStyle?s.styles.dashedLine:void 0,"dotted"===p?.lineStyle?s.styles.dottedLine:void 0]),style:{stroke:p.lineColor,strokeWidth:p.lineWidth}}),A?.isRendered&&t.jsx("path",{d:f,class:i.classNames([s.styles.noPointerEvents,s.styles.majorTickLineStyles,"dashed"===A?.lineStyle?s.styles.dashedLine:void 0,"dotted"===A?.lineStyle?s.styles.dottedLine:void 0]),style:{stroke:A.lineColor,strokeWidth:A.lineWidth}}),P&&t.jsx("path",{d:j,class:i.classNames([s.styles.noPointerEvents,s.styles.minorTickLineStyles,"light"===R?s.styles.lightMinorTickLineStroke:s.styles.darkMinorTickLineStroke,"dashed"===v?.lineStyle?s.styles.dashedLine:void 0,"dotted"===v?.lineStyle?s.styles.dottedLine:void 0]),style:{stroke:v?.lineColor,strokeWidth:v?.lineWidth}})]})},e.PlotArea=function({color:e,yScale:i,isLog:o,availSpace:n,xAxisPosition:l}){const r=!o&&i.domain()[0]<0&&i.domain()[1]>0,d=function(e,t,s){return{x1:"right"===t?e.x+e.width:e.x,x2:"left"===t?e.x:e.x+e.width,y1:"bottom"===t?e.y+e.height:e.y,y2:"top"===t?e.y:e.y+e.height,stroke:s?.lineColor,strokeWidth:s?.lineWidth}}(n,l),a=function(e,t,s){let i,o,n,l;return"bottom"===s?(i=e.x,o=e.x+e.width,n=t,l=t):(i=t,o=t,n=e.y,l=e.y+e.width),{x1:i,x2:o,y1:n,y2:l}}(n,i.transform(0),l);return t.jsxs(t.Fragment,{children:[t.jsx("rect",{...n,class:s.styles.plotAreaStyle,style:{fill:e}}),t.jsx("line",{...d,class:s.styles.axisLineStyle}),r&&t.jsx("line",{...a,class:s.styles.baseLineStyle})]})}}));
//# sourceMappingURL=Gridlines-472d4a3a.js.map
