import{r as $,_ as j}from"./index-qPWwQNeE.js";import{p as A,E as O,s as te,r as oe,q as se}from"./element-DRqyh55B.js";import{u as ne}from"./usePagination-DRno2DY3.js";import{l as Z,r as v,Z as G,ah as t,m as f,M as w,O as l,U as e,S as r,b as re,ap as ue,p as de,P as ie,u as _,q as P,T as ce}from"./vue-DSQ7aDT9.js";import"./vxe-BycdWDNe.js";function pe(p,m){return $({url:`customer/status/${p}`,method:"post",data:{status:m}})}function me(p){return $({url:`customer/${p.id}`,method:"post",data:p})}function _e(p){return $({url:"customers",method:"get",params:p})}function fe(p){return $({url:"customer",method:"PUT",data:p})}const ve=Z({__name:"register",emits:["success"],setup(p,{emit:m}){const n=m,R={email:"",password:"",level:"common"},c=v(A(R)),k=v(null),g=G({email:[{required:!0,message:"请填写邮箱地址",trigger:"blur"}],level:[{required:!0,message:"请填写用户等级"}],password:[{required:!0,message:"请填写密码",trigger:"blur"}]}),x=()=>{var s;(s=k.value)==null||s.validate((d,y)=>{if(!d)return console.error("表单校验不通过",y);fe(c.value).then(()=>{O.success("操作成功"),n("success"),c.value=A(R)}).finally(()=>{})})};return(s,d)=>{const y=t("el-input"),h=t("el-form-item"),U=t("el-option"),T=t("el-select"),z=t("el-button"),E=t("el-form");return f(),w(E,{model:c.value,ref_key:"userform",ref:k,"label-width":"auto",rules:g},{default:l(()=>[e(h,{prop:"email",label:"邮箱"},{default:l(()=>[e(y,{modelValue:c.value.email,"onUpdate:modelValue":d[0]||(d[0]=i=>c.value.email=i),placeholder:"请输入邮箱",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),e(h,{prop:"level",label:"用户等级"},{default:l(()=>[e(T,{modelValue:c.value.level,"onUpdate:modelValue":d[1]||(d[1]=i=>c.value.level=i),placeholder:""},{default:l(()=>[e(U,{label:"会员用户",value:"vip"}),e(U,{label:"普通用户",value:"common"})]),_:1},8,["modelValue"])]),_:1}),e(h,{prop:"password",label:"密码"},{default:l(()=>[e(y,{type:"password",modelValue:c.value.password,"onUpdate:modelValue":d[2]||(d[2]=i=>c.value.password=i),placeholder:"请输入",autocomplete:"new-password"},null,8,["modelValue"])]),_:1}),e(h,{label:"",class:"center"},{default:l(()=>[e(z,{type:"primary",size:"large",color:"#055CF9",onClick:d[3]||(d[3]=i=>x()),style:{width:"100%"}},{default:l(()=>[r("提交")]),_:1})]),_:1})]),_:1},8,["model","rules"])}}}),ge=j(ve,[["__scopeId","data-v-13ae2794"]]),be={class:"app-container"},we={class:"table-wrapper"},ye={class:"pager-wrapper"},he={class:"dialog_head"},Ce={class:"title"},Ve={class:"btn_box"},ke=Z({name:"ElementPlus",__name:"index",setup(p){const m=v(!1),{paginationData:n,handleCurrentChange:R,handleSizeChange:c}=ne(),k={id:void 0,email:"",password:"",level:"common"},g=v(!1),x=v(null),s=v(A(k)),d={email:[{required:!0,trigger:"blur",message:"请输入注册邮箱"}],password:[{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}],level:[{required:!0,trigger:"blur",message:"请选择用户等级"}]},y=()=>{var u;(u=x.value)==null||u.validate((o,S)=>{if(!o)return console.error("表单校验不通过",S);m.value=!0,me(s.value).then(()=>{O.success("操作成功"),g.value=!1,D()}).finally(()=>{m.value=!1})})},h=()=>{var u;(u=x.value)==null||u.clearValidate(),s.value=A(k),g.value=!1},U=(u,o)=>{pe(u,o).then(()=>{O.success("更改状态成功"),D()})},T=u=>{g.value=!0,s.value=Object.assign(A(u),{password:""})},z=v([]),E=v(null),i=G({keyword:""}),D=()=>{m.value=!0,_e({page:n.currentPage,limit:n.pageSize,keyword:i.keyword||void 0}).then(({data:u})=>{n.total=u.total,z.value=u.data}).catch(()=>{z.value=[]}).finally(()=>{m.value=!1})},B=()=>{n.currentPage===1?D():n.currentPage=1},H=()=>{i.keyword="",B()},q=v(!1),J=()=>{q.value=!0},K=()=>{q.value=!1,D()};return re([()=>n.currentPage,()=>n.pageSize],D,{immediate:!0}),(u,o)=>{const S=t("el-input"),C=t("el-form-item"),b=t("el-button"),M=t("el-form"),V=t("el-table-column"),F=t("el-tag"),Q=t("el-table"),W=t("el-pagination"),X=t("el-card"),Y=t("Close"),ee=t("el-icon"),N=t("el-option"),le=t("el-select"),I=t("el-dialog"),ae=ue("loading");return f(),de("div",be,[ie((f(),w(X,{shadow:"never"},{default:l(()=>[e(M,{ref_key:"searchFormRef",ref:E,inline:!0,model:i},{default:l(()=>[e(C,{prop:"username",label:"",style:{width:"320px","max-width":"100%"}},{default:l(()=>[e(S,{modelValue:i.keyword,"onUpdate:modelValue":o[0]||(o[0]=a=>i.keyword=a),placeholder:"输入查询"},null,8,["modelValue"])]),_:1}),e(C,null,{default:l(()=>[e(b,{type:"primary",icon:_(te),onClick:B},{default:l(()=>[r("查询")]),_:1},8,["icon"]),e(b,{icon:_(oe),onClick:H},{default:l(()=>[r("重置")]),_:1},8,["icon"])]),_:1}),e(C,null,{default:l(()=>[e(b,{type:"primary",icon:_(se),onClick:J},{default:l(()=>[r("新增用户")]),_:1},8,["icon"])]),_:1})]),_:1},8,["model"]),P("div",we,[e(Q,{data:z.value},{default:l(()=>[e(V,{prop:"customer_no",label:"用户编号",align:"left"}),e(V,{prop:"email",label:"注册邮箱",align:"left"}),e(V,{prop:"level",label:"用户等级",align:"left"},{default:l(a=>[a.row.level=="vip"?(f(),w(F,{key:0,type:"primary",effect:"plain"},{default:l(()=>[r("会员用户")]),_:1})):(f(),w(F,{key:1,type:"warning",effect:"plain"},{default:l(()=>[r("普通用户")]),_:1}))]),_:1}),e(V,{prop:"status",label:"账户状态",align:"left"},{default:l(a=>[a.row.status=="enabled"?(f(),w(F,{key:0,type:"success",effect:"plain"},{default:l(()=>[r("启用")]),_:1})):(f(),w(F,{key:1,type:"danger",effect:"plain"},{default:l(()=>[r("禁用")]),_:1}))]),_:1}),e(V,{prop:"created_at",label:"注册时间",align:"left"}),e(V,{fixed:"right",label:"操作",width:"100",align:"left"},{default:l(a=>[e(b,{type:"primary",text:"",size:"small",onClick:L=>T(a.row)},{default:l(()=>[r("编辑")]),_:2},1032,["onClick"]),a.row.status=="enabled"?(f(),w(b,{key:0,type:"danger",text:"",size:"small",onClick:L=>U(a.row.id,"disabled")},{default:l(()=>[r("禁用")]),_:2},1032,["onClick"])):(f(),w(b,{key:1,type:"success",text:"",size:"small",onClick:L=>U(a.row.id,"enabled")},{default:l(()=>[r("启用")]),_:2},1032,["onClick"]))]),_:1})]),_:1},8,["data"])]),P("div",ye,[e(W,{background:"",layout:_(n).layout,"page-sizes":_(n).pageSizes,total:_(n).total,"page-size":_(n).pageSize,currentPage:_(n).currentPage,onSizeChange:_(c),onCurrentChange:_(R)},null,8,["layout","page-sizes","total","page-size","currentPage","onSizeChange","onCurrentChange"])])]),_:1})),[[ae,m.value]]),e(I,{"modal-class":"custom_dialog",modelValue:g.value,"onUpdate:modelValue":o[5]||(o[5]=a=>g.value=a),"show-close":!1},{header:l(()=>[P("div",he,[P("div",Ce,ce(s.value.id===void 0?"新增用户":"编辑用户信息"),1),e(ee,{onClick:h},{default:l(()=>[e(Y)]),_:1})])]),default:l(()=>[e(M,{ref_key:"formRef",ref:x,model:s.value,rules:d,"label-width":"100px","label-position":"left"},{default:l(()=>[e(C,{prop:"email",label:"注册邮箱"},{default:l(()=>[e(S,{modelValue:s.value.email,"onUpdate:modelValue":o[1]||(o[1]=a=>s.value.email=a),placeholder:"请输入注册邮箱"},null,8,["modelValue"])]),_:1}),e(C,{prop:"level",label:"用户等级"},{default:l(()=>[e(le,{modelValue:s.value.level,"onUpdate:modelValue":o[2]||(o[2]=a=>s.value.level=a),placeholder:""},{default:l(()=>[e(N,{label:"会员用户",value:"vip"}),e(N,{label:"普通用户",value:"common"})]),_:1},8,["modelValue"])]),_:1}),e(C,{prop:"password",label:"密码"},{default:l(()=>[e(S,{type:"password",modelValue:s.value.password,"onUpdate:modelValue":o[3]||(o[3]=a=>s.value.password=a),placeholder:"请输入"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),P("div",Ve,[e(b,{onClick:o[4]||(o[4]=a=>g.value=!1)},{default:l(()=>[r("取消")]),_:1}),e(b,{type:"primary",onClick:y,loading:m.value},{default:l(()=>[r("确认")]),_:1},8,["loading"])])]),_:1},8,["modelValue"]),e(I,{modelValue:q.value,"onUpdate:modelValue":o[6]||(o[6]=a=>q.value=a),center:"",width:"90%","modal-class":"custom_dialog login_dialog","show-close":!1},{header:l(()=>[r(" 添加用户 ")]),default:l(()=>[e(ge,{onSuccess:K})]),_:1},8,["modelValue"])])}}}),Pe=j(ke,[["__scopeId","data-v-aab8c33f"]]);export{Pe as default};
