(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2467"],{"4WHm":function(t,e,a){"use strict";var r=a("H655");a.n(r).a},H655:function(t,e,a){},m2ux:function(t,e,a){"use strict";a.r(e);var r=a("P2sY"),i=a.n(r),o={name:"alessedit",mixins:[a("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{newAlgorithmaccForm:{id:0,title:"",address:"",describion:"",accessmode:"",accesscode:"",warning_level:0,relation_face:""},algorithmaccForm:{},earArr:[{value:"一般告警",label:"一般告警"},{value:"严重告警",label:"严重告警"},{value:"重大告警",label:"重大告警"}],relation_face:!1}},mounted:function(){this.pObj=i()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.algorithmaccForm=i()({},this.newAlgorithmaccForm,this.pObj)):this.algorithmaccForm=i()({},this.newAlgorithmaccForm,this.$route.params)},methods:{pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.algorithmaccForm=i()({},this.newAlgorithmaccForm,this.pObj))},handleClose:function(){this.isInDialog?this.$emit("submitClose"):this.$router.go(-1)},handleSubmitAlgorithmacc:function(){this.submitAlgorithmaccForm("algorithmaccForm")},submitAlgorithmaccFormImpl:function(t){var e=this,a=void 0,r=!0,o="";this[t].id>0?(a="/act",r=!1,o="algorithmaccup"):(a="/act",o="algorithmaccadd");var s=i()({},this[t]);s._hy=o,this.callSrvAct(a,s).then(function(t){console.log("res:",t,e.isInDialog),e.isInDialog?r?t.data&&t.data.inst?e.$emit("submitOk",t.data.inst):t.data&&e.$emit("submitOk",t.data||{}):e.$emit("submitOk",s):e.$router.go(-1)})},submitAlgorithmaccForm:function(t){var e=this;this.$refs[t].validate(function(a){if(!a)return!1;e.submitAlgorithmaccFormImpl(t)})},rest:function(){this.algorithmaccForm={}},ret:function(){this.$router.push({name:"alaccess"})}},watch:{paramsObj:function(t){this.pObj.id!=this.paramsObj.id&&(this.pObj=i()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){this.algorithmaccForm={}}},s=(a("4WHm"),a("KHd+")),n=Object(s.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[a("el-form",{ref:"algorithmaccForm",attrs:{model:t.algorithmaccForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"算法名称：",prop:"title",rules:{required:!0,message:" ",trigger:"input"}}},[a("el-input",{model:{value:t.algorithmaccForm.title,callback:function(e){t.$set(t.algorithmaccForm,"title",e)},expression:"algorithmaccForm.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"请求地址：",prop:"address",rules:{required:!0,message:" ",trigger:"input"}}},[a("el-input",{model:{value:t.algorithmaccForm.address,callback:function(e){t.$set(t.algorithmaccForm,"address",e)},expression:"algorithmaccForm.address"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"算法描述：",prop:"describion",rules:{required:!0,message:" ",trigger:"input"}}},[a("el-input",{model:{value:t.algorithmaccForm.describion,callback:function(e){t.$set(t.algorithmaccForm,"describion",e)},expression:"algorithmaccForm.describion"}})],1),t._v(" "),t._e(),t._v(" "),a("el-form-item",{attrs:{label:"算法标识：",prop:"accesscode",rules:{required:!0,message:" ",trigger:"input"}}},[a("el-input",{model:{value:t.algorithmaccForm.accesscode,callback:function(e){t.$set(t.algorithmaccForm,"accesscode",e)},expression:"algorithmaccForm.accesscode"}})],1),t._v(" "),t._e(),t._v(" "),t._e()],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{on:{click:t.handleSubmitAlgorithmacc}},[a("span",[t._v("提交\n            ")])]),t._v(" "),a("el-button",{on:{click:t.rest}},[a("span",[t._v("重置\n            ")])]),t._v(" "),a("el-button",{on:{click:t.ret}},[a("span",[t._v("返回\n            ")])])],1)],1)},[],!1,null,"565857ac",null);n.options.__file="index.vue";e.default=n.exports},y2a5:function(t,e,a){"use strict";var r=a("gDS+"),i=a.n(r),o=a("4d7F"),s=a.n(o);e.a={methods:{cb_null:function(t){return!1},cb_goBack:function(t){return this.$router.go(-1),!0},cb_success:function(t){return!(!t.status||"SUCCESS"!=t.status)||(this.$message.error(t.msg),!1)},cb_showMess:function(t){return this.$message.success(t.msg),!0},gen_sameValue:function(t,e){return function(a,r,i){r!=t?i(new Error(e)):i()}},refreshCaptcha:function(t){t.preventDefault(),t.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(t){return t.length<1?"":t=t.indexOf("?")>-1?t+"&Authorization="+this.apiSrv.token:t+"?Authorization="+this.apiSrv.token},callServer:function(t,e,a){var r=this;this.apiSrv.callServer(t,e).then(function(t){if(console.log("res ------",t),a)for(var e=0;e<a.length;e++){if(a[e])if(!a[e](t))break}}).catch(function(t){console.log("err:",t),r.$message.error(t)})},callSrvAct:function(t,e){var a=this;return new s.a(function(r,i){a.apiSrv.callServer(t,e).then(function(t){t.status&&"SUCCESS"==t.status?r(t):(console.log("res:",t),a.$message.error(t.msg))}).catch(function(t){console.log("err:",t),a.$message.error(t)})})},gen_list_cb:function(t,e){var a=this;if(!t||t.length<1)return this.cb_null;var r=t+"Data",i=t+"TotalRec",o=t+"TotalPage",s=t+"RecOfPage",n=t+"CurPage";return function(t){return e&&1==e&&t.data.cp>1?a[r]=a[r].concat(t.data.pageData||[]):a[r]=t.data.pageData||[],a[i]=t.data.totalRec,a[s]=t.data.rop,a[n]=t.data.cp,a[o]=t.data.rop>0?Math.ceil(t.data.totalRec/t.data.rop):0,t.data.detailData&&(a[r+"dData"]=t.data.detailData||[]),!0}},gen_selmulti_change:function(t){var e=this;if(!t||t.length<1)return this.cb_null;var a=t+"MultiSel";return function(t){if(e[a]){for(var r=[],i=0;i<t.length;i++)r.push(t[i].id);e[a]=r}}},refreshPage2:function(t,e,a,r,o,s){var n=t+"QueryArr",c=t+"CbPage",l=JSON.parse(i()(this[n]));if(l&&l.length>0)for(var u=l.length-1;u>-1;u--)console.log("qpsArr[i].val",l[u].val,0==l[u].val,""!=l[u].val),0==l[u].val&&(console.log("i:",u),l.splice(u,1));console.log("qpsArr:",l,this[n]);var h={qps:l||"",rop:a,cp:r};return this[t+"SortParas"]&&(h.sps=this[t+"SortParas"]),h._hy=o,this.callServer(e,h,[this.cb_success,this[c],s])},refreshPage:function(t,e,a,r){var i=t+"RecOfPage",o=t+"CurPage";this[o]<1&&(this[o]=1),this.refreshPage2(t,e,this[i],this[o],a,r)},queryPageData:function(t,e,a,r,o,s){if(!t||t.length<1)return this.cb_null;var n=t+"QueryArr",c=JSON.parse(i()(this[n]));if(c&&c.length>0)for(var l=c.length-1;l>-1;l--)0==c[l].val&&c.splice(l,1);console.log("qpsArr:",c);var u={qps:c||[],rop:a,cp:r};return this[t+"SortParas"]&&(u.sps=this[t+"SortParas"]),u._hy=o,this.callServer(e,u,s)}}}}}]);