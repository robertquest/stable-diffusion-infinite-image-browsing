import{r as l,bn as F,b1 as S}from"./index-25d56352.js";import{u as y,b as q,f as P,c as z,d as E,e as G,l as Q}from"./fullScreenContextMenu-419af06d.js";const A=()=>{const e=l(),c=F(),i=l(),t={tabIdx:-1,target:"local",paneIdx:-1,walkMode:!1},{stackViewEl:r,multiSelectedIdxs:u,stack:m}=y({images:e}).toRefs(),{itemSize:f,gridItems:v}=q(t),{showMenuIdx:p}=P();z();const{showGenInfo:I,imageGenInfo:d,q:w,onContextMenuClick:o,onFileItemClick:g}=E(t,{openNext:S}),{previewIdx:x,previewing:k,onPreviewVisibleChange:M,previewImgMove:b,canPreview:h}=G(t,{scroller:i,files:e}),C=async(n,s,a)=>{m.value=[{curr:"",files:e.value}],await o(n,s,a)};return Q("removeFiles",async({paths:n})=>{var s;e.value=(s=e.value)==null?void 0:s.filter(a=>!n.includes(a.fullpath))}),{scroller:i,queue:c,images:e,onContextMenuClickU:C,stackViewEl:r,previewIdx:x,previewing:k,onPreviewVisibleChange:M,previewImgMove:b,canPreview:h,itemSize:f,gridItems:v,showGenInfo:I,imageGenInfo:d,q:w,onContextMenuClick:o,onFileItemClick:g,showMenuIdx:p,multiSelectedIdxs:u}};export{A as u};