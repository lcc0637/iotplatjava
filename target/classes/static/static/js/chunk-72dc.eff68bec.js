(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-72dc"],{"9wpP":function(t,e,a){"use strict";var n=a("OWEQ");a.n(n).a},OWEQ:function(t,e,a){},m1lz:function(t,e,a){"use strict";a.r(e);var n=a("P2sY"),r=a.n(n),i={name:"jobedit",mixins:[a("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{newJobForm:{id:0,title:"",sort:0,memo:""},jobForm:{},isInDialog:!1,pObj:{}}},mounted:function(){this.pObj=r()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.jobForm=r()({},this.newJobForm,this.pObj)):this.jobForm=r()({},this.newJobForm,this.$route.params)},methods:{pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.jobForm=r()({},this.newJobForm,this.pObj))},handleClose:function(){this.isInDialog?this.$emit("submitClose"):this.$router.go(-1)},handleSubmitJob:function(){this.submitJobForm("jobForm")},submitJobFormImpl:function(t){var e=this,a=void 0,n=!0,i="";this[t].id>0?(a="/act",n=!1,i="jobup"):(a="/act",i="jobadd");var o=r()({},this[t]);o._hy=i,this.callSrvAct(a,o).then(function(t){console.log("res:",t,e.isInDialog),e.isInDialog?n?t.data&&t.data.inst?e.$emit("submitOk",t.data.inst):t.data&&e.$emit("submitOk",t.data||{}):e.$emit("submitOk",o):e.$router.go(-1)})},submitJobForm:function(t){var e=this;this.$refs[t].validate(function(a){if(!a)return!1;e.submitJobFormImpl(t)})}},watch:{paramsObj:function(t){this.pObj.id!=this.paramsObj.id&&(this.pObj=r()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},o=(a("9wpP"),a("KHd+")),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[t.isInDialog?t._e():a("el-container",{attrs:{direction:"horizontal"}},[a("span",{staticStyle:{height:"24px",display:"inline-block","margin-top":"12px"}},[t._v("岗位编辑\n        ")]),t._v(" "),a("el-button",{staticClass:"header-func",attrs:{type:"text"}},[a("svg-icon",{attrs:{"icon-class":"close","font-size":"16px"}})],1)],1),t._v(" "),a("el-form",{ref:"jobForm",attrs:{model:t.jobForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"岗位名称",prop:"title",rules:{required:!0,message:"请输入岗位名称",min:1,max:255}}},[a("el-input",{model:{value:t.jobForm.title,callback:function(e){t.$set(t.jobForm,"title",e)},expression:"jobForm.title"}})],1),t._v(" "),t._e(),t._v(" "),t._e(),t._v(" "),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-button",{on:{click:t.handleSubmitJob}},[a("span",[t._v("确定\n                    ")])]),t._v(" "),a("el-button",{on:{click:t.handleClose}},[a("span",[t._v("取消\n                    ")])])],1)],1)],1)},[],!1,null,"24129a65",null);s.options.__file="index.vue";e.default=s.exports},y2a5:function(t,e,a){"use strict";var n=a("gDS+"),r=a.n(n),i=a("4d7F"),o=a.n(i);e.a={methods:{cb_null:function(t){return!1},cb_goBack:function(t){return this.$router.go(-1),!0},cb_success:function(t){return!(!t.status||"SUCCESS"!=t.status)||(this.$message.error(t.msg),!1)},cb_showMess:function(t){return this.$message.success(t.msg),!0},gen_sameValue:function(t,e){return function(a,n,r){n!=t?r(new Error(e)):r()}},refreshCaptcha:function(t){t.preventDefault(),t.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(t){return t.length<1?"":t=t.indexOf("?")>-1?t+"&Authorization="+this.apiSrv.token:t+"?Authorization="+this.apiSrv.token},callServer:function(t,e,a){var n=this;this.apiSrv.callServer(t,e).then(function(t){if(console.log("res ------",t),a)for(var e=0;e<a.length;e++){if(a[e])if(!a[e](t))break}}).catch(function(t){console.log("err:",t),n.$message.error(t)})},callSrvAct:function(t,e){var a=this;return new o.a(function(n,r){a.apiSrv.callServer(t,e).then(function(t){t.status&&"SUCCESS"==t.status?n(t):(console.log("res:",t),a.$message.error(t.msg))}).catch(function(t){console.log("err:",t),a.$message.error(t)})})},gen_list_cb:function(t,e){var a=this;if(!t||t.length<1)return this.cb_null;var n=t+"Data",r=t+"TotalRec",i=t+"TotalPage",o=t+"RecOfPage",s=t+"CurPage";return function(t){return e&&1==e&&t.data.cp>1?a[n]=a[n].concat(t.data.pageData||[]):a[n]=t.data.pageData||[],a[r]=t.data.totalRec,a[o]=t.data.rop,a[s]=t.data.cp,a[i]=t.data.rop>0?Math.ceil(t.data.totalRec/t.data.rop):0,t.data.detailData&&(a[n+"dData"]=t.data.detailData||[]),!0}},gen_selmulti_change:function(t){var e=this;if(!t||t.length<1)return this.cb_null;var a=t+"MultiSel";return function(t){if(e[a]){for(var n=[],r=0;r<t.length;r++)n.push(t[r].id);e[a]=n}}},refreshPage2:function(t,e,a,n,i,o){var s=t+"QueryArr",c=t+"CbPage",l=JSON.parse(r()(this[s]));if(l&&l.length>0)for(var u=l.length-1;u>-1;u--)console.log("qpsArr[i].val",l[u].val,0==l[u].val,""!=l[u].val),0==l[u].val&&(console.log("i:",u),l.splice(u,1));console.log("qpsArr:",l,this[s]);var h={qps:l||"",rop:a,cp:n};return this[t+"SortParas"]&&(h.sps=this[t+"SortParas"]),h._hy=i,this.callServer(e,h,[this.cb_success,this[c],o])},refreshPage:function(t,e,a,n){var r=t+"RecOfPage",i=t+"CurPage";this[i]<1&&(this[i]=1),this.refreshPage2(t,e,this[r],this[i],a,n)},queryPageData:function(t,e,a,n,i,o){if(!t||t.length<1)return this.cb_null;var s=t+"QueryArr",c=JSON.parse(r()(this[s]));if(c&&c.length>0)for(var l=c.length-1;l>-1;l--)0==c[l].val&&c.splice(l,1);console.log("qpsArr:",c);var u={qps:c||[],rop:a,cp:n};return this[t+"SortParas"]&&(u.sps=this[t+"SortParas"]),u._hy=i,this.callServer(e,u,o)}}}}}]);