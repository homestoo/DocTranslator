import{a as g,b as h}from"./index-D2GOWwZL.js";import{E as i}from"./element-DRqyh55B.js";import{l as b,r as d,d as V,ah as n,m as x,p as y,U as o,O as a,S as k}from"./vue-DSQ7aDT9.js";import{_ as q}from"./index-qPWwQNeE.js";import"./vxe-BycdWDNe.js";const w={class:"app-container"},C=b({name:"接口配置",__name:"other",setup(E){const e=d({prompt:"",threads:"",email_limit:""}),u=d(null),_={prompt:[{required:!0,message:"请填写默认提示语",trigger:"blur"}],threads:[{required:!0,message:"请填写默认线程数",trigger:"blur"}]};V(()=>{g().then(r=>{e.value=r.data})});function c(r){e.value,e.value.prompt,e.value.threads,e.value.email_limit,r==null||r.validate((l,s)=>{if(e.value,l)h({prompt:e.value.prompt,threads:e.value.threads,email_limit:e.value.email_limit}).then(t=>{t.code==200?i.success("保存成功"):i.error(t.message)}).catch(t=>{i.error(t)});else for(const t in s){s[t].forEach(p=>{i({message:p.message,type:"error"})});break}})}return(r,l)=>{const s=n("el-input"),t=n("el-form-item"),p=n("el-button"),f=n("el-form"),v=n("el-card");return x(),y("div",w,[o(v,{shadow:"never"},{default:a(()=>[o(f,{class:"settingForm",ref_key:"settingForm",ref:u,model:e.value,"label-position":"top",rules:_},{default:a(()=>[o(t,{label:"默认提示语",required:"",prop:"prompt"},{default:a(()=>[o(s,{type:"textarea",resize:"none",rows:5,modelValue:e.value.prompt,"onUpdate:modelValue":l[0]||(l[0]=m=>e.value.prompt=m)},null,8,["modelValue"])]),_:1}),o(t,{label:"默认线程数",required:"",prop:"threads"},{default:a(()=>[o(s,{modelValue:e.value.threads,"onUpdate:modelValue":l[1]||(l[1]=m=>e.value.threads=m)},null,8,["modelValue"])]),_:1}),o(t,{label:"限定注册邮箱后缀",prop:"email_limit"},{default:a(()=>[o(s,{modelValue:e.value.email_limit,"onUpdate:modelValue":l[2]||(l[2]=m=>e.value.email_limit=m),placeholder:"多个用逗号隔开,完全匹配域名"},null,8,["modelValue"])]),_:1}),o(t,{class:"setting-btns"},{default:a(()=>[o(p,{style:{width:"88px"},type:"primary",onClick:l[3]||(l[3]=m=>c(u.value))},{default:a(()=>[k("保存")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})])}}}),M=q(C,[["__scopeId","data-v-5ea08fae"]]);export{M as default};
