define(['exports', './useDatatip-88cbd577', './util-aa688832', 'preact/jsx-runtime', './VisTabularDatatip-01ebfbae', './colorUtils-1c8a518e', './accUtils-3fffc1bb', './useUser-e0989b0b'], (function(e,s,r,t,a,i,o,n){"use strict";function l(e,s,r,t){const a=e.value,i=t?.value?.format?t?.value?.format?.(a):a,o=[];return 0!=t?.series?.isDisplayed&&o.push({key:t?.series?.label||"Series",value:s}),0!=t?.group?.isDisplayed&&o.push({key:t?.group?.label||"Group",value:r}),0!=t?.value?.isDisplayed&&o.push({key:t?.value?.label||"Value",value:i}),o}e.useChartDatatip=({isDataCursorEnabled:e,dataCursorPosition:o,isHoriz:u,datatip:d,xScale:p,getDataItem:c,getDataItemPos:x,hoveredItemInfo:I,focusedItemInfo:f,series:g,valueFormats:m,groups:v,width:b,height:C,findNearest:D})=>{let h=f?.isCurrent?f:I?.isCurrent&&void 0!==I.seriesIndex&&void 0!==I.groupIndex?I:void 0;const y=f?.isCurrent||e?"element":"pointer",A=f?.isCurrent?x(f.seriesIndex,f.groupIndex):void 0,{direction:P}=n.useUser(),U="rtl"===P;let k,F,S="top-start",V=r.calculateOffset(U,b,A);if(e&&null!=o?.x&&null!=o?.y){h=h||D?.(o.x,o.y);const e=p.transform(o.x);V={mainAxis:-1,crossAxis:-1},u?(S="end",V.mainAxis=-10,V.crossAxis=e-C/2):(S="top",V.crossAxis=U?b/2-e:e-b/2,V.mainAxis=-10)}if(null!=h?.seriesIndex&&null!=h?.groupIndex){F=c(h.seriesIndex,h.groupIndex);const e=F?{data:F,seriesIndex:h.seriesIndex,groupIndex:h.groupIndex,id:F.id}:void 0;if(e){k=(d||(j={series:g[h.seriesIndex],groups:v[h.groupIndex],valueFormats:m},e=>({content:t.jsx(a.VisTabularDatatip,{tableData:l(e.data,j.series.name||j.series.id.toString(),j.groups.name||j.groups.id,j.valueFormats)}),borderColor:e.data.color||j.series.color})))(e)}}var j;const T=i.getColorRamp(),w=k?.borderColor||h&&(g[h.seriesIndex].color||g[h.seriesIndex].lineColor||g[h.seriesIndex].areaColor)||h&&T[h.seriesIndex%T.length],{datatipContent:z,datatipProps:E}=s.useDatatip({content:k?.content,anchor:y,placement:S,offset:V,borderColor:w});return{datatipContent:z,datatipProps:E}}}));
//# sourceMappingURL=useChartDatatip-9cc52939.js.map
