import{d as A,u as oe,k as C,C as _e,a as D,c,bg as Ie,bh as $e,r as J,l as Te,ad as Y,P as G,ai as ke,bi as se,D as he,_ as I,bj as te,B as be,f as je,i as ye,bk as Le,e as Ne,bl as We,bm as Me,bn as Ee,w as ze,bo as Ae,ah as Ce,aS as Ue,j as Se,bp as ne,q as j,n as O,p as q,b3 as Pe,aX as z,s as S,v as T,x as re,b2 as W,bq as Be,A as xe,g as Re,o as Fe,br as qe,aD as R,bs as Ge,bt as Ve,aU as F,bu as Ye,bv as He,bc as Xe,b9 as ie,bw as Je,bx as Qe,by as Ze,bz as Ke,be as et,aV as tt,aW as nt}from"./index-b92d12d2.js";import{b as rt,_ as at,F as ot}from"./index-05505ffb.js";import"./index-7dfb4203.js";import{T as st,I as lt}from"./index-4fc84313.js";import{c as ct}from"./index-568ed62c.js";import{u as we}from"./useTaskListStore-dbde1916.js";import{W as it,B as ut}from"./button-3e7df890.js";import{_ as dt}from"./index-b1f740d9.js";var ft=function(){return{prefixCls:String,checked:{type:Boolean,default:void 0},onChange:{type:Function},onClick:{type:Function},"onUpdate:checked":Function}},vt=A({compatConfig:{MODE:3},name:"ACheckableTag",props:ft(),setup:function(e,r){var t=r.slots,a=r.emit,s=oe("tag",e),f=s.prefixCls,p=function(k){var u=e.checked;a("update:checked",!u),a("change",!u),a("click",k)},y=C(function(){var o;return _e(f.value,(o={},D(o,"".concat(f.value,"-checkable"),!0),D(o,"".concat(f.value,"-checkable-checked"),e.checked),o))});return function(){var o;return c("span",{class:y.value,onClick:p},[(o=t.default)===null||o===void 0?void 0:o.call(t)])}}});const ae=vt;var pt=new RegExp("^(".concat(Ie.join("|"),")(-inverse)?$")),gt=new RegExp("^(".concat($e.join("|"),")$")),mt=function(){return{prefixCls:String,color:{type:String},closable:{type:Boolean,default:!1},closeIcon:G.any,visible:{type:Boolean,default:void 0},onClose:{type:Function},"onUpdate:visible":Function,icon:G.any}},V=A({compatConfig:{MODE:3},name:"ATag",props:mt(),slots:["closeIcon","icon"],setup:function(e,r){var t=r.slots,a=r.emit,s=r.attrs,f=oe("tag",e),p=f.prefixCls,y=f.direction,o=J(!0);Te(function(){e.visible!==void 0&&(o.value=e.visible)});var k=function(h){h.stopPropagation(),a("update:visible",!1),a("close",h),!h.defaultPrevented&&e.visible===void 0&&(o.value=!1)},u=C(function(){var v=e.color;return v?pt.test(v)||gt.test(v):!1}),l=C(function(){var v;return _e(p.value,(v={},D(v,"".concat(p.value,"-").concat(e.color),u.value),D(v,"".concat(p.value,"-has-color"),e.color&&!u.value),D(v,"".concat(p.value,"-hidden"),!o.value),D(v,"".concat(p.value,"-rtl"),y.value==="rtl"),v))});return function(){var v,h,b,w=e.icon,$=w===void 0?(v=t.icon)===null||v===void 0?void 0:v.call(t):w,P=e.color,M=e.closeIcon,L=M===void 0?(h=t.closeIcon)===null||h===void 0?void 0:h.call(t):M,i=e.closable,d=i===void 0?!1:i,m=function(){return d?L?c("span",{class:"".concat(p.value,"-close-icon"),onClick:k},[L]):c(ke,{class:"".concat(p.value,"-close-icon"),onClick:k},null):null},_={backgroundColor:P&&!u.value?P:void 0},N=$||null,B=(b=t.default)===null||b===void 0?void 0:b.call(t),Z=N?c(Y,null,[N,c("span",null,[B])]):B,K="onClick"in s,H=c("span",{class:l.value,style:_},[Z,m()]);return K?c(it,null,{default:function(){return[H]}}):H}}});V.CheckableTag=ae;V.install=function(n){return n.component(V.name,V),n.component(ae.name,ae),n};const Oe=V;var De=se("normal","exception","active","success"),_t=se("line","circle","dashboard"),kt=se("default","small"),Q=function(){return{prefixCls:String,type:G.oneOf(_t),percent:Number,format:{type:Function},status:G.oneOf(De),showInfo:{type:Boolean,default:void 0},strokeWidth:Number,strokeLinecap:String,strokeColor:{type:[String,Object],default:void 0},trailColor:String,width:Number,success:{type:Object,default:function(){return{}}},gapDegree:Number,gapPosition:String,size:G.oneOf(kt),steps:Number,successPercent:Number,title:String}};function U(n){return!n||n<0?0:n>100?100:n}function X(n){var e=n.success,r=n.successPercent,t=r;return e&&"progress"in e&&(he(!1,"Progress","`success.progress` is deprecated. Please use `success.percent` instead."),t=e.progress),e&&"percent"in e&&(t=e.percent),t}var ht=["from","to","direction"],bt=function(){return I(I({},Q()),{},{prefixCls:String,direction:{type:String}})},yt=function(e){var r=[];return Object.keys(e).forEach(function(t){var a=parseFloat(t.replace(/%/g,""));isNaN(a)||r.push({key:a,value:e[t]})}),r=r.sort(function(t,a){return t.key-a.key}),r.map(function(t){var a=t.key,s=t.value;return"".concat(s," ").concat(a,"%")}).join(", ")},Ct=function(e,r){var t=e.from,a=t===void 0?te.blue:t,s=e.to,f=s===void 0?te.blue:s,p=e.direction,y=p===void 0?r==="rtl"?"to left":"to right":p,o=be(e,ht);if(Object.keys(o).length!==0){var k=yt(o);return{backgroundImage:"linear-gradient(".concat(y,", ").concat(k,")")}}return{backgroundImage:"linear-gradient(".concat(y,", ").concat(a,", ").concat(f,")")}};const St=A({compatConfig:{MODE:3},name:"Line",props:bt(),setup:function(e,r){var t=r.slots,a=C(function(){var o=e.strokeColor,k=e.direction;return o&&typeof o!="string"?Ct(o,k):{background:o}}),s=C(function(){return e.trailColor?{backgroundColor:e.trailColor}:void 0}),f=C(function(){var o=e.percent,k=e.strokeWidth,u=e.strokeLinecap,l=e.size;return I({width:"".concat(U(o),"%"),height:"".concat(k||(l==="small"?6:8),"px"),borderRadius:u==="square"?0:""},a.value)}),p=C(function(){return X(e)}),y=C(function(){var o=e.strokeWidth,k=e.size,u=e.strokeLinecap,l=e.success;return{width:"".concat(U(p.value),"%"),height:"".concat(o||(k==="small"?6:8),"px"),borderRadius:u==="square"?0:"",backgroundColor:l==null?void 0:l.strokeColor}});return function(){var o;return c(Y,null,[c("div",{class:"".concat(e.prefixCls,"-outer")},[c("div",{class:"".concat(e.prefixCls,"-inner"),style:s.value},[c("div",{class:"".concat(e.prefixCls,"-bg"),style:f.value},null),p.value!==void 0?c("div",{class:"".concat(e.prefixCls,"-success-bg"),style:y.value},null):null])]),(o=t.default)===null||o===void 0?void 0:o.call(t)])}}});var Pt={percent:0,prefixCls:"vc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,trailColor:"#D9D9D9",trailWidth:1},xt=function(e){var r=J(null);return je(function(){var t=Date.now(),a=!1;e.value.forEach(function(s){var f=(s==null?void 0:s.$el)||s;if(f){a=!0;var p=f.style;p.transitionDuration=".3s, .3s, .3s, .06s",r.value&&t-r.value<100&&(p.transitionDuration="0s, 0s")}}),a&&(r.value=Date.now())}),e},wt={gapDegree:Number,gapPosition:{type:String},percent:{type:[Array,Number]},prefixCls:String,strokeColor:{type:[Object,String,Array]},strokeLinecap:{type:String},strokeWidth:Number,trailColor:String,trailWidth:Number,transition:String},Ot=["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","strokeColor"],ue=0;function de(n){return+n.replace("%","")}function fe(n){return Array.isArray(n)?n:[n]}function ve(n,e,r,t){var a=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,s=arguments.length>5?arguments[5]:void 0,f=50-t/2,p=0,y=-f,o=0,k=-2*f;switch(s){case"left":p=-f,y=0,o=2*f,k=0;break;case"right":p=f,y=0,o=-2*f,k=0;break;case"bottom":y=f,k=2*f;break}var u="M 50,50 m ".concat(p,",").concat(y,`
   a `).concat(f,",").concat(f," 0 1 1 ").concat(o,",").concat(-k,`
   a `).concat(f,",").concat(f," 0 1 1 ").concat(-o,",").concat(k),l=Math.PI*2*f,v={stroke:r,strokeDasharray:"".concat(e/100*(l-a),"px ").concat(l,"px"),strokeDashoffset:"-".concat(a/2+n/100*(l-a),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:u,pathStyle:v}}const Dt=A({compatConfig:{MODE:3},name:"VCCircle",props:ye(wt,Pt),setup:function(e){ue+=1;var r=J(ue),t=C(function(){return fe(e.percent)}),a=C(function(){return fe(e.strokeColor)}),s=Le(),f=Ne(s,2),p=f[0],y=f[1];xt(y);var o=function(){var u=e.prefixCls,l=e.strokeWidth,v=e.strokeLinecap,h=e.gapDegree,b=e.gapPosition,w=0;return t.value.map(function($,P){var M=a.value[P]||a.value[a.value.length-1],L=Object.prototype.toString.call(M)==="[object Object]"?"url(#".concat(u,"-gradient-").concat(r.value,")"):"",i=ve(w,$,M,l,h,b),d=i.pathString,m=i.pathStyle;w+=$;var _={key:P,d,stroke:L,"stroke-linecap":v,"stroke-width":l,opacity:$===0?0:1,"fill-opacity":"0",class:"".concat(u,"-circle-path"),style:m};return c("path",I({ref:p(P)},_),null)})};return function(){var k=e.prefixCls,u=e.strokeWidth,l=e.trailWidth,v=e.gapDegree,h=e.gapPosition,b=e.trailColor,w=e.strokeLinecap;e.strokeColor;var $=be(e,Ot),P=ve(0,100,b,u,v,h),M=P.pathString,L=P.pathStyle;delete $.percent;var i=a.value.find(function(m){return Object.prototype.toString.call(m)==="[object Object]"}),d={d:M,stroke:b,"stroke-linecap":w,"stroke-width":l||u,"fill-opacity":"0",class:"".concat(k,"-circle-trail"),style:L};return c("svg",I({class:"".concat(k,"-circle"),viewBox:"0 0 100 100"},$),[i&&c("defs",null,[c("linearGradient",{id:"".concat(k,"-gradient-").concat(r.value),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[Object.keys(i).sort(function(m,_){return de(m)-de(_)}).map(function(m,_){return c("stop",{key:_,offset:m,"stop-color":i[m]},null)})])]),c("path",d,null),o().reverse()])}}});function It(n){var e=n.percent,r=n.success,t=n.successPercent,a=U(X({success:r,successPercent:t}));return[a,U(U(e)-a)]}function $t(n){var e=n.success,r=e===void 0?{}:e,t=n.strokeColor,a=r.strokeColor;return[a||te.green,t||null]}const Tt=A({compatConfig:{MODE:3},name:"Circle",inheritAttrs:!1,props:Q(),setup:function(e,r){var t=r.slots,a=C(function(){if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),s=C(function(){var l=e.width||120;return{width:typeof l=="number"?"".concat(l,"px"):l,height:typeof l=="number"?"".concat(l,"px"):l,fontSize:"".concat(l*.15+6,"px")}}),f=C(function(){return e.strokeWidth||6}),p=C(function(){return e.gapPosition||e.type==="dashboard"&&"bottom"||"top"}),y=C(function(){return It(e)}),o=C(function(){return Object.prototype.toString.call(e.strokeColor)==="[object Object]"}),k=C(function(){return $t({success:e.success,strokeColor:e.strokeColor})}),u=C(function(){var l;return l={},D(l,"".concat(e.prefixCls,"-inner"),!0),D(l,"".concat(e.prefixCls,"-circle-gradient"),o.value),l});return function(){var l;return c("div",{class:u.value,style:s.value},[c(Dt,{percent:y.value,strokeWidth:f.value,trailWidth:f.value,strokeColor:k.value,strokeLinecap:e.strokeLinecap,trailColor:e.trailColor,prefixCls:e.prefixCls,gapDegree:a.value,gapPosition:p.value},null),(l=t.default)===null||l===void 0?void 0:l.call(t)])}}});var jt=function(){return I(I({},Q()),{},{steps:Number,size:{type:String},strokeColor:String,trailColor:String})};const Lt=A({compatConfig:{MODE:3},name:"Steps",props:jt(),setup:function(e,r){var t=r.slots,a=C(function(){return Math.round(e.steps*((e.percent||0)/100))}),s=C(function(){return e.size==="small"?2:14}),f=C(function(){for(var p=e.steps,y=e.strokeWidth,o=y===void 0?8:y,k=e.strokeColor,u=e.trailColor,l=e.prefixCls,v=[],h=0;h<p;h+=1){var b,w=(b={},D(b,"".concat(l,"-steps-item"),!0),D(b,"".concat(l,"-steps-item-active"),h<=a.value-1),b);v.push(c("div",{key:h,class:w,style:{backgroundColor:h<=a.value-1?k:u,width:"".concat(s.value,"px"),height:"".concat(o,"px")}},null))}return v});return function(){var p;return c("div",{class:"".concat(e.prefixCls,"-steps-outer")},[f.value,(p=t.default)===null||p===void 0?void 0:p.call(t)])}}}),Nt=A({compatConfig:{MODE:3},name:"AProgress",props:ye(Q(),{type:"line",percent:0,showInfo:!0,trailColor:null,size:"default",strokeLinecap:"round"}),slots:["format"],setup:function(e,r){var t=r.slots,a=oe("progress",e),s=a.prefixCls,f=a.direction;he(e.successPercent==null,"Progress","`successPercent` is deprecated. Please use `success.percent` instead.");var p=C(function(){var u,l=e.type,v=e.showInfo,h=e.size,b=s.value;return u={},D(u,b,!0),D(u,"".concat(b,"-").concat(l==="dashboard"&&"circle"||l),!0),D(u,"".concat(b,"-show-info"),v),D(u,"".concat(b,"-").concat(h),h),D(u,"".concat(b,"-rtl"),f.value==="rtl"),u}),y=C(function(){var u=e.percent,l=u===void 0?0:u,v=X(e);return parseInt(v!==void 0?v.toString():l.toString(),10)}),o=C(function(){var u=e.status;return De.indexOf(u)<0&&y.value>=100?"success":u||"normal"}),k=function(){var l=e.showInfo,v=e.format,h=e.type,b=e.percent,w=e.title,$=X(e);if(!l)return null;var P,M=v||(t==null?void 0:t.format)||function(i){return"".concat(i,"%")},L=h==="line";return v||t!=null&&t.format||o.value!=="exception"&&o.value!=="success"?P=M(U(b),U($)):o.value==="exception"?P=L?c(We,null,null):c(ke,null,null):o.value==="success"&&(P=L?c(Me,null,null):c(Ee,null,null)),c("span",{class:"".concat(s.value,"-text"),title:w===void 0&&typeof P=="string"?P:void 0},[P])};return function(){var u=e.type,l=e.steps,v=e.strokeColor,h=e.title,b=k(),w;u==="line"?w=l?c(Lt,I(I({},e),{},{strokeColor:typeof v=="string"?v:void 0,prefixCls:s.value,steps:l}),{default:function(){return[b]}}):c(St,I(I({},e),{},{prefixCls:s.value}),{default:function(){return[b]}}):(u==="circle"||u==="dashboard")&&(w=c(Tt,I(I({},e),{},{prefixCls:s.value}),{default:function(){return[b]}}));var $=I(I({},p.value),{},D({},"".concat(s.value,"-status-").concat(o.value),!0));return c("div",{class:$,title:h},[w])}}}),Wt=ze(Nt);function Mt(n,e){return n&&n.length?Ae(n,rt(e)):[]}var Et={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"minus-circle",theme:"outlined"};const zt=Et;function pe(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),t.forEach(function(a){At(n,a,r[a])})}return n}function At(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var le=function(e,r){var t=pe({},e,r.attrs);return c(Ce,pe({},t,{icon:zt}),null)};le.displayName="MinusCircleOutlined";le.inheritAttrs=!1;const Ut=le;var Bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"};const Rt=Bt;function ge(n){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?Object(arguments[e]):{},t=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(t=t.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),t.forEach(function(a){Ft(n,a,r[a])})}return n}function Ft(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}var ce=function(e,r){var t=ge({},e,r.attrs);return c(Ce,ge({},t,{icon:Rt}),null)};ce.displayName="SyncOutlined";ce.inheritAttrs=!1;const qt=ce;const Gt={key:0,class:"auto-completed-dirs"},Vt=A({__name:"localPathShortcut",props:{task:null,idx:null},emits:["update:task"],setup(n,{emit:e}){const r=n,t=Ue({get:()=>r.task,set:o=>e("update:task",o)}),a=we(),s=Se(),{showDirAutoCompletedIdx:f}=ne(a),p=o=>{if(t.value.type==="download"){t.value.recv_dir=o;return}t.value.send_dirs.push(o)},y=["#f5222d","#1890ff","#ff3125","#d46b08","#007bff","#52c41a","#13c2c2","#fa541c","#eb2f96","#2f54eb"];return(o,k)=>{const u=Oe,l=Be;return j(f)===n.idx&&j(s).autoCompletedDirList.length?(O(),q("div",Gt,[(O(!0),q(Y,null,Pe(j(s).autoCompletedDirList,(v,h)=>(O(),z(l,{key:v.dir,title:v.dir+"  点击添加"},{default:S(()=>[c(u,{visible:!j(t).send_dirs.includes(v.dir),color:y[h%y.length],onClick:b=>p(v.dir)},{default:S(()=>[T(re(v.zh),1)]),_:2},1032,["visible","color","onClick"])]),_:2},1032,["title"]))),128))])):W("",!0)}}});const me=xe(Vt,[["__scopeId","data-v-02736e53"]]),Yt=n=>(tt("data-v-9ebf1ff9"),n=n(),nt(),n),Ht={class:"panel"},Xt={class:"actions-bar"},Jt={class:"top-bar"},Qt=Yt(()=>F("div",{class:"flex-placeholder"},null,-1)),Zt={key:3},Kt={class:"action-bar"},en=A({__name:"taskRecord",props:{tabIdx:null,paneIdx:null},setup(n){const e=n,r=Je(!0),t=we(),a=Se(),{tasks:s}=ne(t),{showDirAutoCompletedIdx:f}=ne(t),p=new Map,y=J(10);Re(()=>{p.forEach(i=>i.clearTask())}),a.waitTaskRecordLoaded=new Promise(i=>{Fe(async()=>{const d=await qe();s.value=Mt([...d.tasks,...s.value].map(r),_=>_.id).sort((_,N)=>Date.parse(N.start_time)-Date.parse(_.start_time)).slice(0,100);let m=s.value.filter(_=>_.running);m.filter(_=>!d.tasks.find(N=>N.id===_.id)).forEach(_=>{_.running=!1}),m=s.value.filter(_=>_.running),m.length&&m.forEach(_=>{l(_.id).completedTask.then(()=>R.success(`${_.type==="download"?"下载":"上传"}完成`))}),s.value.length||k(),i()})}),a.useEventListen("createNewTask",async i=>{s.value.unshift(r({...o(),...i})),await u(0),R.success("创建完成，在任务列表查看进度")});const o=()=>r({type:"upload",send_dirs:[],recv_dir:"",id:"",running:!1,start_time:"",n_failed_files:0,n_files:0,n_success_files:0,canceled:!1}),k=()=>{s.value.unshift(o())},u=async i=>{const d=s.value[i];if(d.send_dirs=d.send_dirs.map(_=>_.trim()).filter(_=>_),d.recv_dir=d.recv_dir.trim(),!(d.type==="upload"?d.recv_dir.startsWith("/"):d.send_dirs.every(_=>_.startsWith("/"))))return R.error("百度云的位置必须以 “/” 开头");d.running=!0,d.n_files=100;const m=await Ge(d);d.id=m.id,l(m.id).completedTask.then(()=>R.success(d.type==="upload"?"上传完成":"下载完成"))},l=i=>{t.taskLogMap.set(i,[]);const d=st.run({action:()=>Ve(i),pollInterval:t.pollInterval*1e3,validator(m){t.taskLogMap.get(i).push(...m.tasks);const _=s.value.findIndex(N=>N.id===i);return s.value[_]=r(m.task_summary),!m.task_summary.running}});return p.set(i,d),t.queue.pushAction(()=>d.completedTask),d},v=i=>parseInt(((i.n_failed_files+i.n_success_files)/i.n_files*100).toString()),h=i=>!!i.id&&!i.running&&!i.canceled,b=i=>i.running||h(i),w=i=>{const d=s.value[i];s.value.unshift({...o(),...Qe(d,"send_dirs","type","recv_dir")}),R.success("复制完成，已添加到最前端")},$=i=>{a.openLogDetailInRight(e.tabIdx,s.value[i].id)},P=async i=>{var _;const d=s.value[i],{last_tick:m}=await Ze(d.id);t.taskLogMap.get(d.id).push(...m.tasks),s.value[i]=r(m.task_summary),(_=p.get(d.id))==null||_.clearTask()},M=async i=>{const d=s.value[i];s.value.splice(i,1),d.id&&Ke(d.id),R.success("删除完成")},L=i=>{ct(i,`复制 "${i}" 成功，粘贴使用"`)};return(i,d)=>{const m=ut,_=et,N=Oe,B=at,Z=dt,K=lt,H=ot,ee=Wt;return O(),q(Y,null,[F("div",Ht,[F("div",Xt,[c(m,{onClick:d[0]||(d[0]=g=>L("<#%Y-%m-%d#>"))},{default:S(()=>[T("复制日期占位符")]),_:1}),c(m,{onClick:d[1]||(d[1]=g=>L("<#%H-%M-%S#>"))},{default:S(()=>[T("复制时间占位符")]),_:1}),c(m,{onClick:d[2]||(d[2]=g=>L("<#%Y-%m-%d %H-%M-%S#>"))},{default:S(()=>[T("复制日期+时间占位符")]),_:1})])]),F("div",{class:"wrapper",onClick:d[4]||(d[4]=g=>f.value=-1)},[c(_,{style:{display:"none"}}),c(m,{onClick:k,block:"",style:{"border-radius":"8px"}},{icon:S(()=>[c(j(Ye))]),default:S(()=>[T(" 添加一个任务 ")]),_:1}),(O(!0),q(Y,null,Pe(j(s).slice(0,y.value),(g,E)=>(O(),q("div",{key:j(He)(g),class:"task-form"},[F("div",Jt,[h(g)?(O(),z(N,{key:0,color:"success"},{default:S(()=>[T("已完成")]),_:1})):W("",!0),g.running?(O(),z(N,{key:1,color:"processing"},{icon:S(()=>[c(j(qt),{spin:!0})]),default:S(()=>[T(re(g.type==="download"?"下载":"上传")+"中 ",1)]),_:2},1024)):W("",!0),g.canceled?(O(),z(N,{key:2,color:"default"},{icon:S(()=>[c(j(Ut))]),default:S(()=>[T(" 已取消 ")]),_:1})):W("",!0),Qt,g.start_time?(O(),q("div",Zt," 开始时间： "+re(g.start_time),1)):W("",!0)]),c(H,{layout:"vertical","label-align":"left"},{default:S(()=>[c(B,{label:"任务类型"},{default:S(()=>[c(j(Xe),{value:g.type,"onUpdate:value":x=>g.type=x,disabled:b(g),options:["upload","download"],conv:{value:x=>x,text:x=>x==="upload"?"上传":"下载"}},null,8,["value","onUpdate:value","disabled","conv"])]),_:2},1024),c(B,{label:`发送的文件夹 (${g.type==="upload"?"本地":"百度云"})`,onClick:ie(x=>g.type==="upload"&&(f.value=E),["stop"])},{default:S(()=>[c(Z,{"auto-size":"",disabled:b(g),value:g.send_dirs.join(),"onUpdate:value":x=>g.send_dirs=x.split(","),"allow-clear":"",placeholder:"发送文件的文件夹,多个文件夹使用逗号或者换行分隔。支持使用占位符例如stable-diffusion-webui最常用表示日期的<#%Y-%m-%d#>"},null,8,["disabled","value","onUpdate:value"]),g.type==="upload"?(O(),z(me,{key:0,task:g,"onUpdate:task":x=>j(s)[E]=x,idx:E},null,8,["task","onUpdate:task","idx"])):W("",!0)]),_:2},1032,["label","onClick"]),c(B,{label:`接收的文件夹 (${g.type!=="upload"?"本地":"百度云"})`},{default:S(()=>[c(K,{value:g.recv_dir,"onUpdate:value":x=>g.recv_dir=x,disabled:b(g),"allow-clear":"",onClick:ie(x=>g.type==="download"&&(f.value=E),["stop"]),placeholder:"用于接收的文件夹，支持使用占位符例如stable-diffusion-webui最常用表示日期的<#%Y-%m-%d#>"},null,8,["value","onUpdate:value","disabled","onClick"]),g.type==="download"?(O(),z(me,{key:0,task:g,"onUpdate:task":x=>j(s)[E]=x,idx:E},null,8,["task","onUpdate:task","idx"])):W("",!0)]),_:2},1032,["label"])]),_:2},1024),F("div",Kt,[j(t).taskLogMap.get(g.id)?(O(),z(m,{key:0,onClick:x=>$(E)},{default:S(()=>[T("查看详细日志")]),_:2},1032,["onClick"])):W("",!0),c(m,{onClick:x=>w(E)},{default:S(()=>[T("复制该任务")]),_:2},1032,["onClick"]),g.running?(O(),z(m,{key:1,onClick:x=>P(E),danger:""},{default:S(()=>[T("取消任务")]),_:2},1032,["onClick"])):W("",!0),c(m,{onClick:x=>M(E),disabled:g.running,danger:""},{default:S(()=>[T("移除")]),_:2},1032,["onClick","disabled"]),h(g)?W("",!0):(O(),z(m,{key:2,type:"primary",loading:g.running,disabled:g.running,onClick:x=>u(E)},{default:S(()=>[T("开始")]),_:2},1032,["loading","disabled","onClick"]))]),g.running?(O(),z(ee,{key:0,"stroke-color":{from:"#108ee9",to:"#87d068"},percent:v(g),status:"active"},null,8,["percent"])):W("",!0)]))),128)),y.value<j(s).length?(O(),z(m,{key:0,onClick:d[3]||(d[3]=g=>y.value+=5),block:"",style:{"border-radius":"8px"}},{default:S(()=>[T(" 继续加载 ")]),_:1})):W("",!0)])],64)}}});const un=xe(en,[["__scopeId","data-v-9ebf1ff9"]]);export{un as default};