(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-16bd","chunk-6ee3"],{"8Mwn":function(e,t,i){},IefE:function(e,t,i){},"RU/L":function(e,t,i){i("Rqdy");var o=i("WEpk").Object;e.exports=function(e,t,i){return o.defineProperty(e,t,i)}},Rqdy:function(e,t,i){var o=i("Y7ZC");o(o.S+o.F*!i("jmDH"),"Object",{defineProperty:i("2faE").f})},SEkw:function(e,t,i){e.exports={default:i("RU/L"),__esModule:!0}},"TfS+":function(e,t,i){"use strict";i.r(t);var o=i("P2sY"),s=i.n(o),n=i("YEIV"),r=i.n(n),l=i("nxMV"),a={name:"visitpman",mixins:[i("y2a5").a],components:r()({Interviewee:l.default},"Interviewee",l.default),props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){var e;return e={newVisitpersonForm:{id:0,idnumber:"",title:"",photo:"",mobile:"",gender:""},visitpersonForm:{},dialogTableVisible:!1,intervieweeEdit:null},r()(e,"newVisitpersonForm",{id:0,idnumber:"",title:"",photo:"",mobile:"",gender:"",interview_titles:"",interview_ids:""}),r()(e,"visitpersonForm",{id:0,idnumber:"",title:"",photo:"",mobile:"",gender:"",interview_titles:"",interview_ids:""}),r()(e,"message",""),r()(e,"show",!1),r()(e,"show1",!1),r()(e,"timemessge",""),r()(e,"rules",{idnumber:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,message:"证件号码格式有误！",trigger:"blur"}]}),e},mounted:function(){this.pObj=s()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.visitpersonForm=s()({},this.newVisitpersonForm,this.pObj)):this.visitpersonForm=s()({},this.newVisitpersonForm,this.$route.params),console.log(this.visitpersonForm)},methods:{pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.visitpersonForm=s()({},this.newVisitpersonForm,this.pObj))},showDialog:function(){console.log(this.$route.params),"新增"==this.$route.params.name&&(this.visitpersonForm.id=0),this.dialogTableVisible=!0},closingevent:function(){this.dialogTableVisible=!1},handleSuccess:function(e,t){console.log("res:",e),this.visitpersonForm.photo=e.data},genDownUrl:function(e){if(!e||e.length<1)return"";var t=e.split(";");return!t||t.length<2?"":this.hysrvport+"/hydownload?btnEncode=headupload&relateType=face&filename="+t[1]+"&Authorization="+this.apiSrv.token},genUploadUrl:function(e){return this.hysrvport+"/hyupload?btnEncode=headupload&relateType=face&fi=add&Authorization="+this.apiSrv.token},close:function(){this.visitpersonForm.photo="",this.$refs.box.clearFiles()},beforeRemove:function(){},intervieweeOK:function(e){this.visitpersonForm.interview_titles="",this.dialogTableVisible=!1,console.log(e);for(var t=0;t<e.length;t++)""==this.visitpersonForm.interview_titles?(this.visitpersonForm.interview_titles=e[t].user_title,this.visitpersonForm.interview_ids=e[t].user_id):(this.visitpersonForm.interview_titles=this.visitpersonForm.interview_titles+","+e[t].user_title,this.visitpersonForm.interview_ids=this.visitpersonForm.interview_ids+","+e[t].user_id)},intervieweeSet:function(){this.dialogTableVisible=!1},search:function(){var e=this;if(this.message="",15!=this.visitpersonForm.idnumber.length&&18!=this.visitpersonForm.idnumber.length&&!visitpersonForm.idnumber[{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/}])return this.$message.error("身份证号必须15位或18位");this.callSrvAct("/visitpersoncheck",{idnumber:this.visitpersonForm.idnumber}).then(function(t){console.log("返回值",t),e.message=t.data.message,"系统已录入此人"==t.data.message?(e.visitpersonForm=t.data.user,"timemsg"in e.visitpersonForm?(e.show1=!0,e.show=!1,e.timemessge=e.visitpersonForm.timemsg):(e.show=!0,e.show1=!1),console.log(e.visitpersonForm)):"系统未录入此人"==t.data.message&&(e.visitpersonForm={id:0,idnumber:"",title:"",photo:"",mobile:"",gender:"",interview_titles:"",interview_ids:""},e.show=!1,e.show1=!1)})},submit:function(){var e=this;console.log("参数",this.visitpersonForm),0==this.visitpersonForm.id?this.callSrvAct("/visitpersonadd",this.visitpersonForm).then(function(t){console.log("返回值",t),e.$router.push({name:"vipman"})}):this.callSrvAct("/visitpersonup",this.visitpersonForm).then(function(t){console.log("返回值",t),e.$router.push({name:"vipman"})})},timess:function(e){var t=new Date(e);return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+"  "+(t.getHours()<10?"0"+t.getHours():t.getHours())+":"+(t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes())+":"+(t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds())},judgemobile:function(){this.checkPhone(this.visitpersonForm.mobile)},checkPhone:function(e){if(!/^1[3456789]\d{9}$/.test(e))return this.$message.error("手机号码有误，请重填")},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,i=e.size/1024<200;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),i||this.$message.error("上传头像图片大小不能超过 200kb!"),t&&i}},watch:{paramsObj:function(e){this.pObj.id!=this.paramsObj.id&&(this.pObj=s()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},p=(i("YqPc"),i("KHd+")),c=Object(p.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{attrs:{direction:"vertical"}},[i("el-form",{staticStyle:{"margin-left":"120px"},attrs:{model:e.visitpersonForm,"label-width":"120px",rules:e.rules}},[i("el-form-item",{attrs:{label:"身份证号：",prop:"idnumber"}},[i("div",{model:{value:e.visitpersonForm.idnumber,callback:function(t){e.$set(e.visitpersonForm,"idnumber",t)},expression:"visitpersonForm.idnumber"}},[i("el-input",{staticStyle:{width:"300px"},model:{value:e.visitpersonForm.idnumber,callback:function(t){e.$set(e.visitpersonForm,"idnumber",t)},expression:"visitpersonForm.idnumber"}}),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.search}},[i("span",[e._v("查询\n                    ")])]),e._v(" "),i("span",{staticStyle:{"margin-left":"10px",color:"red","font-size":"20px"}},[e._v(e._s(e.message)+"\n                ")])],1)]),e._v(" "),i("el-form-item",{attrs:{label:"姓名：",prop:"title",rules:{required:!0,trigger:"input"}}},[i("el-input",{staticStyle:{width:"300px"},model:{value:e.visitpersonForm.title,callback:function(t){e.$set(e.visitpersonForm,"title",t)},expression:"visitpersonForm.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"上传照片：",prop:""}},[i("div",{staticStyle:{position:"relative"}},[i("el-upload",{ref:"box",staticStyle:{width:"178px",height:"178px",border:"1px dashed #d9d9d9","line-height":"178px","text-align":"center",position:"relative"},attrs:{action:e.genUploadUrl(),multiple:!1,"show-file-list":!1,"on-remove":e.beforeRemove,"on-success":e.handleSuccess,limit:1,id:"box","before-upload":e.beforeAvatarUpload}},[e.visitpersonForm.photo?i("img",{staticStyle:{width:"178px",height:"178px",display:"block"},attrs:{src:e.genDownUrl(e.visitpersonForm.photo)}}):e._e(),e._v(" "),e.visitpersonForm.photo?e._e():i("span",{staticStyle:{"font-size":"24px",color:"#7F7F7F","font-weight":"800"}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),e.visitpersonForm.photo?i("span",{ref:"clos",staticStyle:{position:"absolute",top:"0px",right:"0px"},attrs:{id:"clos"}},[i("i",{staticClass:"el-icon-close",staticStyle:{position:"absolute",top:"0px",right:"0px"},on:{click:function(t){return t.stopPropagation(),e.close(t)}}})]):e._e()]),e._v(" "),e._e()],1)]),e._v(" "),i("el-form-item",{attrs:{label:"手机号码：",prop:"mobile",rules:{required:!0,trigger:"input"}}},[i("el-input",{staticStyle:{width:"300px"},on:{blur:e.judgemobile},model:{value:e.visitpersonForm.mobile,callback:function(t){e.$set(e.visitpersonForm,"mobile",t)},expression:"visitpersonForm.mobile"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"性别：",prop:"gender",rules:{max:12}}},[i("el-radio-group",{model:{value:e.visitpersonForm.gender,callback:function(t){e.$set(e.visitpersonForm,"gender",t)},expression:"visitpersonForm.gender"}},[i("el-radio",{attrs:{label:"男"}},[i("span",[e._v("男\n                    ")])]),e._v(" "),i("el-radio",{attrs:{label:"女"}},[i("span",[e._v("女\n                    ")])])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"被访人员：",prop:""}},[i("div",{staticStyle:{border:"1px dashed #d0d0d0",width:"350px","line-height":"42.8px"}},[i("span",{staticStyle:{"font-size":"24px",color:"#7F7F7F","font-weight":"800","margin-left":"10px"},on:{click:e.showDialog}},[i("i",{staticClass:"el-icon-plus"})]),e._v(" "),i("span",{staticStyle:{"font-size":"20px",color:"#7F7F7F","font-weight":"800","margin-left":"10px"}},[e._v(e._s(e.visitpersonForm.interview_titles)+"\n                ")])])]),e._v(" "),e.show?i("el-form-item",{attrs:{label:"通行时间：",prop:""}},[e.show?i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#7F7F7F","font-weight":"800","margin-left":"10px"}},[e._v(e._s(e.timess(e.visitpersonForm.starttime)+" 至 "+e.timess(e.visitpersonForm.endtime))+"\n                ")])]):e._e()]):e._e(),e._v(" "),e.show1?i("el-form-item",{attrs:{label:"通行时间：",prop:""}},[e.show1?i("div",[i("span",{staticStyle:{"font-size":"20px",color:"red","font-weight":"800","margin-left":"10px"}},[e._v(e._s(e.timemessge)+"\n                ")])]):e._e()]):e._e()],1),e._v(" "),i("div",{staticStyle:{"margin-top":"20px","text-align":"center"}},[i("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[i("span",[e._v("提交\n            ")])])],1),e._v(" "),e.dialogTableVisible?i("el-dialog",{attrs:{visible:e.dialogTableVisible,title:"添加被访人员",modal:!1},on:{"update:visible":function(t){e.dialogTableVisible=t},close:e.closingevent}},[i("interviewee",{attrs:{paramsObj:e.intervieweeEdit},on:{submitOk:e.intervieweeOK,submitClose:e.intervieweeSet}})],1):e._e()],1)},[],!1,null,"7ec107a2",null);c.options.__file="index.vue";t.default=c.exports},YEIV:function(e,t,i){"use strict";t.__esModule=!0;var o=function(e){return e&&e.__esModule?e:{default:e}}(i("SEkw"));t.default=function(e,t,i){return t in e?(0,o.default)(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}},YqPc:function(e,t,i){"use strict";var o=i("8Mwn");i.n(o).a},jOpO:function(e,t,i){"use strict";var o=i("IefE");i.n(o).a},nxMV:function(e,t,i){"use strict";i.r(t);var o={name:"Interviewee",mixins:[i("y2a5").a],components:{},props:{},data:function(){return{policyData:[],policyTotalRec:0,policyTotalPage:0,policyRecOfPage:10,policyCurPage:1,policyCbPage:this.gen_list_cb("policy"),policyQueryArr:[],policyQueryInit:[],orgTtList:[],org_id:"",user_title:"",selectData:[]}},mounted:function(){var e=this;this.callSrvAct("/actq",{_hy:"departlist",qps:[{name:"type",val:"部门",tb:"org"}],sps:[{name:"title",tb:"org",orderV:"asc"}]}).then(function(t){console.log("部门",t),e.orgTtList=t.data||[],e.orgTtList.unshift({id:0,title:"全部"})}),this.callSrvAct("/policylist",{user_title:this.user_title,org_id:this.org_id,cp:0,rop:10}).then(function(t){console.log("返回值",t),e.policyData=t.data.pageData||[],e.policyTotalRec=t.data.totalRec})},methods:{search:function(){var e=this;this.callSrvAct("/policylist",{user_title:this.user_title,org_id:this.org_id,cp:0,rop:10}).then(function(t){console.log("返回值",t),e.policyData=t.data.pageData||[],e.policyTotalRec=t.data.totalRec})},handleChange:function(e){this.selectData=e},query:function(){this.$emit("submitOk",this.selectData),console.log("数据",this.selectData)},cancel:function(){this.$emit("submitClose")}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=(i("jOpO"),i("KHd+")),n=Object(s.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-container",{attrs:{direction:"vertical"}},[i("div",[i("el-select",{model:{value:e.org_id,callback:function(t){e.org_id=t},expression:"org_id"}},e._l(e.orgTtList,function(e,t){return i("el-option",{key:e.id,attrs:{label:e.title,value:e.id}})})),e._v(" "),i("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入姓名"},model:{value:e.user_title,callback:function(t){e.user_title=t},expression:"user_title"}}),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.search}},[i("span",[e._v("搜索\n            ")])])],1),e._v(" "),i("el-table",{ref:"policy",staticStyle:{margin:"10px 0px"},attrs:{"header-cell-style":{background:"rgba(241,246,254,1)",fontWeight:"500",color:"#333333",fontSize:"16px"},data:e.policyData},on:{"selection-change":e.handleChange}},[i("el-table-column",{attrs:{type:"selection"}}),e._v(" "),i("el-table-column",{attrs:{label:"姓名",prop:"user_title"}}),e._v(" "),i("el-table-column",{attrs:{label:"岗位",prop:"region_title"}}),e._v(" "),i("el-table-column",{attrs:{label:"手机号"}})],1),e._v(" "),i("div",{staticStyle:{"text-align":"right"}},[i("el-button",{on:{click:e.cancel}},[i("span",[e._v("取消\n            ")])]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.query}},[i("span",[e._v("确定\n            ")])])],1)],1)},[],!1,null,"31d8b374",null);n.options.__file="index.vue";t.default=n.exports}}]);