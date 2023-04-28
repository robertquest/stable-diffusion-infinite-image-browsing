import{d as U,u as re,g as L,_ as ye,c as r,a as Y,P as J,D as ke,f as he,w as qe,b as He,e as Je,h as me,M as Z,i as Ke,j as We,F as ee,A as we,k as Qe,r as Xe,o as P,l as F,m as d,n as t,p as j,q as C,t as S,s as te,v as Ye,x as Ze,y as H,z as O,B as Q,C as ve,E as X,G as et,H as tt,S as fe,I as nt,J as be,K as rt,L as at,N as ot,O as st}from"./index-87c69a69.js";import{D as Oe,S as V,s as lt,u as it,a as ut,b as ct,c as dt,d as pt,e as mt,f as vt,g as ft,h as bt,i as gt,j as _t,k as Ct,t as yt}from"./FileItem-56a1be33.js";import{F as M,_ as kt}from"./index-63c284ed.js";import"./index-a7e9768e.js";import"./index-08538469.js";import{I as ht}from"./index-57e2b7cf.js";import{M as Se}from"./db-551897d4.js";import{B as wt}from"./button-b7ac175b.js";import"./_baseIteratee-8a811c20.js";var Ot=["class","style"],St=function(){return{prefixCls:String,href:String,separator:J.any,overlay:J.any,onClick:Function}};const T=U({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:St(),slots:["separator","overlay"],setup:function(e,a){var o=a.slots,i=a.attrs,g=re("breadcrumb",e),f=g.prefixCls,p=function(y,c){var u=L(o,e,"overlay");return u?r(Oe,{overlay:u,placement:"bottom"},{default:function(){return[r("span",{class:"".concat(c,"-overlay-link")},[y,r(ke,null,null)])]}}):y};return function(){var h,y=(h=L(o,e,"separator"))!==null&&h!==void 0?h:"/",c=L(o,e),u=i.class,m=i.style,v=ye(i,Ot),b;return e.href!==void 0?b=r("a",Y({class:"".concat(f.value,"-link"),onClick:e.onClick},v),[c]):b=r("span",Y({class:"".concat(f.value,"-link"),onClick:e.onClick},v),[c]),b=p(b,f.value),c?r("span",{class:u,style:m},[b,y&&r("span",{class:"".concat(f.value,"-separator")},[y])]):null}}});var It=function(){return{prefixCls:String,routes:{type:Array},params:J.any,separator:J.any,itemRender:{type:Function}}};function Pt(n,e){if(!n.breadcrumbName)return null;var a=Object.keys(e).join("|"),o=n.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(i,g){return e[g]||i});return o}function ge(n){var e=n.route,a=n.params,o=n.routes,i=n.paths,g=o.indexOf(e)===o.length-1,f=Pt(e,a);return g?r("span",null,[f]):r("a",{href:"#/".concat(i.join("/"))},[f])}const E=U({compatConfig:{MODE:3},name:"ABreadcrumb",props:It(),slots:["separator","itemRender"],setup:function(e,a){var o=a.slots,i=re("breadcrumb",e),g=i.prefixCls,f=i.direction,p=function(u,m){return u=(u||"").replace(/^\//,""),Object.keys(m).forEach(function(v){u=u.replace(":".concat(v),m[v])}),u},h=function(u,m,v){var b=Ke(u),w=p(m||"",v);return w&&b.push(w),b},y=function(u){var m=u.routes,v=m===void 0?[]:m,b=u.params,w=b===void 0?{}:b,R=u.separator,A=u.itemRender,B=A===void 0?ge:A,x=[];return v.map(function(_){var I=p(_.path,w);I&&x.push(I);var $=[].concat(x),z=null;return _.children&&_.children.length&&(z=r(Z,null,{default:function(){return[_.children.map(function(N){return r(Z.Item,{key:N.path||N.breadcrumbName},{default:function(){return[B({route:N,params:w,routes:v,paths:h($,N.path,w)})]}})})]}})),r(T,{overlay:z,separator:R,key:I||_.breadcrumbName},{default:function(){return[B({route:_,params:w,routes:v,paths:$})]}})})};return function(){var c,u,m,v=e.routes,b=e.params,w=b===void 0?{}:b,R=he(L(o,e)),A=(c=L(o,e,"separator"))!==null&&c!==void 0?c:"/",B=e.itemRender||o.itemRender||ge;v&&v.length>0?m=y({routes:v,params:w,separator:A,itemRender:B}):R.length&&(m=R.map(function(_,I){return qe(He(_.type)==="object"&&(_.type.__ANT_BREADCRUMB_ITEM||_.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Je(_,{separator:A,key:I})}));var x=(u={},me(u,g.value,!0),me(u,"".concat(g.value,"-rtl"),f.value==="rtl"),u);return r("div",{class:x},[m])}}});var xt=["separator","class"],Mt=function(){return{prefixCls:String}};const ne=U({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:Mt(),setup:function(e,a){var o=a.slots,i=a.attrs,g=re("breadcrumb",e),f=g.prefixCls;return function(){var p;i.separator;var h=i.class,y=ye(i,xt),c=he((p=o.default)===null||p===void 0?void 0:p.call(o));return r("span",Y({class:["".concat(f.value,"-separator"),h]},y),[c.length>0?c:"/"])}}});E.Item=T;E.Separator=ne;E.install=function(n){return n.component(E.name,E),n.component(T.name,T),n.component(ne.name,ne),n};M.useInjectFormItemContext=We;M.ItemRest=ee;M.install=function(n){return n.component(M.name,M),n.component(M.Item.name,M.Item),n.component(ee.name,ee),n};V.setDefaultIndicator=lt;V.install=function(n){return n.component(V.name,V),n};var Rt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"left-circle",theme:"outlined"};const At=Rt;function _e(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){$t(n,i,a[i])})}return n}function $t(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var ae=function(e,a){var o=_e({},e,a.attrs);return r(we,_e({},o,{icon:At}),null)};ae.displayName="LeftCircleOutlined";ae.inheritAttrs=!1;const Bt=ae;var Nt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"};const Dt=Nt;function Ce(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(i){return Object.getOwnPropertyDescriptor(a,i).enumerable}))),o.forEach(function(i){jt(n,i,a[i])})}return n}function jt(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var oe=function(e,a){var o=Ce({},e,a.attrs);return r(we,Ce({},o,{icon:Dt}),null)};oe.displayName="RightCircleOutlined";oe.inheritAttrs=!1;const Et=oe;const zt=U({__name:"folderNavigator",props:{loc:null},emits:["to"],setup(n,{emit:e}){const a=n,o=Qe(()=>a.loc),i=Xe(!1),g=()=>{i.value=!1,e("to",o.value)};return(f,p)=>{const h=ht,y=Se;return P(),F(te,null,[r(y,{visible:i.value,"onUpdate:visible":p[1]||(p[1]=c=>i.value=c),title:f.$t("inputAddressAndPressEnter"),onOk:g},{default:d(()=>[r(h,{onPressEnter:g,value:t(o),"onUpdate:value":p[0]||(p[0]=c=>j(o)?o.value=c:null),style:{width:"100%"},"allow-clear":""},null,8,["value"])]),_:1},8,["visible","title"]),C("a",{style:{"margin-left":"8px"},onClick:p[2]||(p[2]=c=>i.value=!0)},S(f.$t("go")),1)],64)}}}),Ft={class:"hint"},Lt={class:"location-bar"},Vt={class:"breadcrumb"},Tt=["onClick"],Ut={class:"actions"},Gt=["onClick"],qt={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},Ht={key:0,class:"view"},Jt={key:0,class:"preview-switch"},Kt=U({__name:"stackView",props:{target:null,tabIdx:null,paneIdx:null,path:null,walkMode:{type:Boolean},stackKey:null},setup(n){const e=n,a=Ye(),{scroller:o,walkModePath:i,stackViewEl:g,props:f,multiSelectedIdxs:p,spinning:h}=it().toRefs(),{currLocation:y,currPage:c,refresh:u,copyLocation:m,back:v,openNext:b,stack:w,to:R}=ut(e),{gridItems:A,sortMethodConv:B,moreActionsDropdownShow:x,sortedFiles:_,sortMethod:I,viewMode:$,viewModeMap:z,itemSize:G,loadNextDir:N,loadNextDirLoading:se,canLoadNext:Ie,onScroll:Pe}=ct(e),{onDrop:xe,onFileDragStart:Me}=dt(e),{onFileItemClick:Re,onContextMenuClick:Ae,showGenInfo:q,imageGenInfo:le,q:$e}=pt(e,{openNext:b}),{previewIdx:ie,onPreviewVisibleChange:Be,previewing:Ne,previewImgMove:ue,canPreview:ce}=mt(e),{showMenuIdx:K}=vt();return Ze(()=>e,()=>{f.value=e,e.walkMode&&(i.value=e.path);const k=ft.get(e.stackKey??"");k&&(w.value=k.slice())},{immediate:!0}),(k,s)=>{const De=rt,je=at,Ee=Se,ze=T,Fe=E,Le=ot,Ve=Z,de=Oe,W=kt,Te=M,Ue=wt,Ge=V;return P(),H(Ge,{spinning:t(h),size:"large"},{default:d(()=>[r(De,{style:{display:"none"}}),C("div",{ref_key:"stackViewEl",ref:g,onDragover:s[15]||(s[15]=O(()=>{},["prevent"])),onDrop:s[16]||(s[16]=O(l=>t(xe)(l),["prevent"])),class:"container"},[r(Ee,{visible:t(q),"onUpdate:visible":s[1]||(s[1]=l=>j(q)?q.value=l:null),width:"70vw","mask-closable":"",onOk:s[2]||(s[2]=l=>q.value=!1)},{cancelText:d(()=>[]),default:d(()=>[r(je,{active:"",loading:!t($e).isIdle},{default:d(()=>[C("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[0]||(s[0]=l=>t(bt)(t(le),"copied"))},[C("div",Ft,S(k.$t("doubleClickToCopy")),1),Q(" "+S(t(le)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),C("div",Lt,[C("div",Vt,[r(Fe,{style:{flex:"1"}},{default:d(()=>[(P(!0),F(te,null,ve(t(w),(l,D)=>(P(),H(ze,{key:D},{default:d(()=>[C("a",{onClick:O(pe=>t(v)(D),["prevent"])},S(l.curr==="/"?k.$t("root"):l.curr.replace(/:\/$/,k.$t("drive"))),9,Tt)]),_:2},1024))),128))]),_:1})]),C("div",Ut,[C("a",{class:"opt",onClick:s[3]||(s[3]=O((...l)=>t(u)&&t(u)(...l),["prevent"]))},S(k.$t("refresh")),1),e.target==="local"?(P(),H(de,{key:0},{overlay:d(()=>[r(Ve,null,{default:d(()=>[(P(!0),F(te,null,ve(t(a).autoCompletedDirList,l=>(P(),H(Le,{key:l.dir},{default:d(()=>[C("a",{onClick:O(D=>t(R)(l.dir),["prevent"])},S(l.zh),9,Gt)]),_:2},1024))),128))]),_:1})]),default:d(()=>[C("a",{class:"opt",onClick:s[4]||(s[4]=O(()=>{},["prevent"]))},[Q(S(k.$t("quickMove"))+" ",1),r(t(ke))])]),_:1})):X("",!0),r(de,{trigger:["click"],visible:t(x),"onUpdate:visible":s[11]||(s[11]=l=>j(x)?x.value=l:null),placement:"bottomLeft",getPopupContainer:l=>l.parentNode},{overlay:d(()=>[C("div",qt,[r(Te,et(tt({labelCol:{span:6},wrapperCol:{span:18}})),{default:d(()=>[r(W,{label:k.$t("viewMode")},{default:d(()=>[r(t(fe),{value:t($),"onUpdate:value":s[6]||(s[6]=l=>j($)?$.value=l:null),onClick:s[7]||(s[7]=O(()=>{},["stop"])),conv:{value:l=>l,text:l=>t(z)[l]},options:Object.keys(t(z))},null,8,["value","conv","options"])]),_:1},8,["label"]),r(W,{label:k.$t("sortingMethod")},{default:d(()=>[r(t(fe),{value:t(I),"onUpdate:value":s[8]||(s[8]=l=>j(I)?I.value=l:null),onClick:s[9]||(s[9]=O(()=>{},["stop"])),conv:t(B),options:Object.keys(t(gt))},null,8,["value","conv","options"])]),_:1},8,["label"]),r(W,null,{default:d(()=>[C("a",{onClick:s[10]||(s[10]=O((...l)=>t(m)&&t(m)(...l),["prevent"]))},S(k.$t("copyPath")),1),r(zt,{loc:t(y),onTo:t(R)},null,8,["loc","onTo"])]),_:1})]),_:1},16)])]),default:d(()=>[C("a",{class:"opt",onClick:s[5]||(s[5]=O(()=>{},["prevent"]))},S(k.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),t(c)?(P(),F("div",Ht,[r(t(_t),{class:"file-list",items:t(_),ref_key:"scroller",ref:o,onScroll:t(Pe),"item-size":t(G).first,"key-field":"fullpath","item-secondary-size":t(G).second,gridItems:t(A)},nt({default:d(({item:l,index:D})=>[r(Ct,{idx:D,file:l,"full-screen-preview-image-url":t(_)[t(ie)]?t(yt)(t(_)[t(ie)]):"","show-menu-idx":t(K),"onUpdate:showMenuIdx":s[12]||(s[12]=pe=>j(K)?K.value=pe:null),selected:t(p).includes(D),"view-mode":t($),target:n.target,onFileItemClick:t(Re),onDragstart:t(Me),onPreviewVisibleChange:t(Be),onContextMenuClick:t(Ae)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","view-mode","target","onFileItemClick","onDragstart","onPreviewVisibleChange","onContextMenuClick"])]),_:2},[e.walkMode?{name:"after",fn:d(()=>[r(Ue,{onClick:t(N),loading:t(se),block:"",type:"primary",disabled:!t(Ie),ghost:""},{default:d(()=>[Q(S(k.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])]),key:"0"}:void 0]),1032,["items","onScroll","item-size","item-secondary-size","gridItems"]),t(Ne)?(P(),F("div",Jt,[r(t(Bt),{onClick:s[13]||(s[13]=l=>t(ue)("prev")),class:be({disable:!t(ce)("prev")})},null,8,["class"]),r(t(Et),{onClick:s[14]||(s[14]=l=>t(ue)("next")),class:be({disable:!t(ce)("next")})},null,8,["class"])])):X("",!0)])):X("",!0)],544)]),_:1},8,["spinning"])}}});const an=st(Kt,[["__scopeId","data-v-75e5213c"]]);export{an as default};
