(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-727f","chunk-578c"],{"0N7y":function(t,e,n){"use strict";n.r(e);var a=n("P2sY"),o=n.n(a),r={name:"promanedit",mixins:[n("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{newPromanForm:{id:0,title:"",prodes:""},promanForm:{}}},mounted:function(){this.pObj=o()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.promanForm=o()({},this.newPromanForm,this.pObj)):this.promanForm=o()({},this.newPromanForm,this.$route.params)},methods:{pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.promanForm=o()({},this.newPromanForm,this.pObj))},handleClick:function(){this.submitOrgForm("promanForm")},submitOrgFormImpl:function(t){var e=this,n=void 0,a=!0,r="";this[t].id>0?(n="/act",a=!1,r="promanup"):(n="/act",r="promanadd",this[t].state="关闭");var i=o()({},this[t]);i._hy=r,this.callSrvAct(n,i).then(function(t){e.isInDialog?(console.log("不跳转"),a?t.data&&t.data.inst?(console.log("1111111111"),e.$emit("submitOk",t.data.inst)):t.data&&(console.log("22222222222"),e.$emit("submitOk",t.data||{})):e.$emit("submitOk",i)):(console.log("跳转"),e.$router.go(-1))})},submitOrgForm:function(t){var e=this;this.$refs[t].validate(function(n){if(!n)return!1;e.submitOrgFormImpl(t)})}},watch:{paramsObj:function(t){this.pObj.id!=this.paramsObj.id&&(this.pObj=o()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},i=(n("ZGgJ"),n("KHd+")),s=Object(i.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{attrs:{direction:"vertical"}},[n("el-form",{ref:"promanForm",attrs:{model:t.promanForm}},[n("el-form-item",{attrs:{label:"产品名称：",prop:"title",rules:{required:!0,trigger:"input"}}},[n("el-input",{staticStyle:{width:"300px"},model:{value:t.promanForm.title,callback:function(e){t.$set(t.promanForm,"title",e)},expression:"promanForm.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"描述：",prop:"prodes",rules:{required:!0,trigger:"input"}}},[n("el-input",{staticStyle:{width:"300px"},model:{value:t.promanForm.prodes,callback:function(e){t.$set(t.promanForm,"prodes",e)},expression:"promanForm.prodes"}})],1)],1),t._v(" "),n("div",{staticStyle:{"text-align":"center"}},[n("el-button",{on:{click:t.handleClick}},[n("span",[t._v("提交\n            ")])]),t._v(" "),n("el-button",[n("span",[t._v("取消\n            ")])])],1)],1)},[],!1,null,"55d052dc",null);s.options.__file="index.vue";e.default=s.exports},"1c6+":function(t,e,n){},"9gLL":function(t,e,n){},E7oI:function(t,e,n){"use strict";var a=n("9gLL");n.n(a).a},Pssy:function(t,e,n){"use strict";n.r(e);var a=n("P2sY"),o=n.n(a),r=n("EJiy"),i=n.n(r),s=n("gDS+"),l=n.n(s),c=n("0N7y"),u={name:"proman",mixins:[n("y2a5").a],components:{Promanedit:c.default},props:{},data:function(){return{promanData:[],promanTotalRec:0,promanTotalPage:0,promanRecOfPage:10,promanCurPage:1,promanCbPage:this.gen_list_cb("proman"),promanQueryArr:[],promanQueryInit:[],promanMultiSel:[],promanSortParas:[{name:"id",tb:"proman",orderV:"desc"}],showpro:!1,proEdit:null,tableHeight:window.innerHeight-500}},mounted:function(){this.refreshPage("proman","/actq","promanlist")},methods:{promanMultiSelChange:function(t){this.promanMultiSel=t},promanQuery:function(){this.refreshPage2("proman","/actq",this.remoteRecOfPage,1,"promanlist")},promanResetQuery:function(){this.promanQueryArr=JSON.parse(l()(this.promanQueryInit))},promanSizeChange:function(t){this.refreshPage2("proman","/actq",t,this.promanCurPage,"promanlist")},promanCurChange:function(t){this.refreshPage2("proman","/actq",this.promanRecOfPage,t,"promanlist")},handlepromanDel:function(t,e){var n=this,a=e;console.log("hahaha",e),this.$confirm("此操作将删除该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={_hy:"promandel",proman:[{name:"id",val:[a.id],op:"in"}]};console.log("upData:",t),n.callSrvAct("/act",t).then(function(t){n.refreshPage("proman","/actq","promanlist")})}).catch(function(t){n.$message.error(t)})},add:function(){this.showpro=!0,this.proEdit={id:0}},proOk:function(){this.showpro=!1,this.refreshPage("proman","/actq","promanlist")},show3:function(){var t=this;console.log("多选ID",this.promanMultiSel);var e=this;this.$confirm("此操作将删除该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={_hy:"promandel",proman:[{name:"id",val:e.promanMultiSel,op:"in"}]};console.log("upData:",n),t.callSrvAct("/act",n).then(function(e){t.refreshPage("proman","/actq","promanlist")})}).catch(function(e){t.$message.error(e)})},handleChange:function(t){console.log("hahaha",t);for(var e=[],n=0;n<t.length;n++)e.push(t[n].id);this.promanMultiSel=e,this.dataArr=t,console.log("qqq",t)},importing:function(){this.$router.push({name:"proimport"})},exporting:function(){for(var t=[],e=0;e<this.promanData.length;e++)t.push({"名称":this.promanData[e].title,"描述":this.promanData[e].prodes});var n=XLSX.utils.json_to_sheet(t);console.log(n),this.openDownloadDialog(this.sheet2blob(n),"下载1.xlsx")},sheet2blob:function(t,e){var n={SheetNames:[e=e||"sheet1"],Sheets:{}};n.Sheets[e]=t;var a=XLSX.write(n,{bookType:"xlsx",bookSST:!1,type:"binary"});return new Blob([function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),a=0;a!=t.length;++a)n[a]=255&t.charCodeAt(a);return e}(a)],{type:"application/octet-stream"})},openDownloadDialog:function(t,e){"object"==(void 0===t?"undefined":i()(t))&&t instanceof Blob&&(t=URL.createObjectURL(t));var n,a=document.createElement("a");a.href=t,a.download=e||"",window.MouseEvent?n=new MouseEvent("click"):(n=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(n)},handlepromanEdit:function(t,e){this.proEdit=o()({},e),this.showpro=!0,this.proClose=!0},proClose:function(){this.showpro=!1}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},p=(n("E7oI"),n("KHd+")),h=Object(p.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"100%"},attrs:{direction:"vertical"}},[n("div",[n("span",[t._v("名称\n        ")]),t._v(" "),n("el-input",{staticStyle:{width:"300px"}}),t._v(" "),n("el-button",{staticStyle:{"margin-left":"30px"}},[n("span",[t._v("搜索\n            ")])])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{staticStyle:{"margin-left":"30px"},on:{click:t.add}},[n("span",[t._v("新增\n            ")])]),t._v(" "),n("el-button",{staticStyle:{"margin-left":"30px"},on:{click:t.show3}},[n("span",[t._v("批量删除\n            ")])]),t._v(" "),n("el-button",{staticStyle:{"margin-left":"30px"},on:{click:t.importing}},[n("span",[t._v("批量导入\n            ")])]),t._v(" "),n("el-button",{staticStyle:{"margin-left":"30px"},on:{click:t.exporting}},[n("span",[t._v("批量导出\n            ")])])],1),t._v(" "),n("el-table",{ref:"proman",staticStyle:{"margin-top":"5px"},attrs:{border:!0,height:t.tableHeight,"header-cell-style":{background:"#E6F4FF",fontWeight:"500",color:"#0A51C4",borderBottom:"2px solid #4093F7"},data:t.promanData},on:{"selection-change":t.handleChange}},[n("el-table-column",{attrs:{label:"全选",type:"selection"}}),t._v(" "),n("el-table-column",{attrs:{label:"名称",prop:"title",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"描述",prop:"prodes",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticStyle:{"margin-top":"10px"}},[n("el-button",{on:{click:function(n){t.handlepromanEdit(e.$index,e.row)}}},[n("span",[t._v("编辑\n                        ")])]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){t.handlepromanDel(e.$index,e.row)}}},[n("span",[t._v("删除\n                        ")])])],1)]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{"text-align":"center"},attrs:{layout:"total, sizes, prev, pager, next"},on:{"size-change":t.SizeChange,"current-change":t.CurChange}}),t._v(" "),t.showpro?n("el-dialog",{attrs:{visible:t.showpro},on:{"update:visible":function(e){t.showpro=e}}},[n("promanedit",{attrs:{paramsObj:t.proEdit},on:{submitOk:t.proOk,submitClose:t.proClose}})],1):t._e()],1)},[],!1,null,"2b663307",null);h.options.__file="index.vue";e.default=h.exports},ZGgJ:function(t,e,n){"use strict";var a=n("1c6+");n.n(a).a},y2a5:function(t,e,n){"use strict";var a=n("gDS+"),o=n.n(a),r=n("4d7F"),i=n.n(r);e.a={methods:{cb_null:function(t){return!1},cb_goBack:function(t){return this.$router.go(-1),!0},cb_success:function(t){return!(!t.status||"SUCCESS"!=t.status)||(this.$message.error(t.msg),!1)},cb_showMess:function(t){return this.$message.success(t.msg),!0},gen_sameValue:function(t,e){return function(n,a,o){a!=t?o(new Error(e)):o()}},refreshCaptcha:function(t){t.preventDefault(),t.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(t){return t.length<1?"":t=t.indexOf("?")>-1?t+"&Authorization="+this.apiSrv.token:t+"?Authorization="+this.apiSrv.token},callServer:function(t,e,n){var a=this;this.apiSrv.callServer(t,e).then(function(t){if(console.log("res ------",t),n)for(var e=0;e<n.length;e++){if(n[e])if(!n[e](t))break}}).catch(function(t){console.log("err:",t),a.$message.error(t)})},callSrvAct:function(t,e){var n=this;return new i.a(function(a,o){n.apiSrv.callServer(t,e).then(function(t){t.status&&"SUCCESS"==t.status?a(t):(console.log("res:",t),n.$message.error(t.msg))}).catch(function(t){console.log("err:",t),n.$message.error(t)})})},gen_list_cb:function(t,e){var n=this;if(!t||t.length<1)return this.cb_null;var a=t+"Data",o=t+"TotalRec",r=t+"TotalPage",i=t+"RecOfPage",s=t+"CurPage";return function(t){return e&&1==e&&t.data.cp>1?n[a]=n[a].concat(t.data.pageData||[]):n[a]=t.data.pageData||[],n[o]=t.data.totalRec,n[i]=t.data.rop,n[s]=t.data.cp,n[r]=t.data.rop>0?Math.ceil(t.data.totalRec/t.data.rop):0,t.data.detailData&&(n[a+"dData"]=t.data.detailData||[]),!0}},gen_selmulti_change:function(t){var e=this;if(!t||t.length<1)return this.cb_null;var n=t+"MultiSel";return function(t){if(e[n]){for(var a=[],o=0;o<t.length;o++)a.push(t[o].id);e[n]=a}}},refreshPage2:function(t,e,n,a,r,i){var s=t+"QueryArr",l=t+"CbPage",c=JSON.parse(o()(this[s]));if(c&&c.length>0)for(var u=c.length-1;u>-1;u--)console.log("qpsArr[i].val",c[u].val,0==c[u].val,""!=c[u].val),0==c[u].val&&(console.log("i:",u),c.splice(u,1));console.log("qpsArr:",c,this[s]);var p={qps:c||"",rop:n,cp:a};return this[t+"SortParas"]&&(p.sps=this[t+"SortParas"]),p._hy=r,this.callServer(e,p,[this.cb_success,this[l],i])},refreshPage:function(t,e,n,a){var o=t+"RecOfPage",r=t+"CurPage";this[r]<1&&(this[r]=1),this.refreshPage2(t,e,this[o],this[r],n,a)},queryPageData:function(t,e,n,a,r,i){if(!t||t.length<1)return this.cb_null;var s=t+"QueryArr",l=JSON.parse(o()(this[s]));if(l&&l.length>0)for(var c=l.length-1;c>-1;c--)0==l[c].val&&l.splice(c,1);console.log("qpsArr:",l);var u={qps:l||[],rop:n,cp:a};return this[t+"SortParas"]&&(u.sps=this[t+"SortParas"]),u._hy=r,this.callServer(e,u,i)}}}}}]);