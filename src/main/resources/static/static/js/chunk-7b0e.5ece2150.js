(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-7b0e"],{"Uin/":function(t,r,a){},aXmU:function(t,r,a){"use strict";var e=a("Uin/");a.n(e).a},m2ux:function(t,r,a){"use strict";a.r(r);var e=a("P2sY"),i=a.n(e),o={name:"alessedit",mixins:[a("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{newAlgorithmaccForm:{id:0,title:"",address:"",describion:"",accessmode:""},algorithmaccForm:{}}},mounted:function(){this.pObj=i()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.algorithmaccForm=i()({},this.newAlgorithmaccForm,this.pObj)):this.algorithmaccForm=i()({},this.newAlgorithmaccForm,this.$route.params)},methods:{pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.algorithmaccForm=i()({},this.newAlgorithmaccForm,this.pObj))},handleClose:function(){this.isInDialog?this.$emit("submitClose"):this.$router.go(-1)},handleSubmitAlgorithmacc:function(){this.submitAlgorithmaccForm("algorithmaccForm")},submitAlgorithmaccFormImpl:function(t){var r=this,a=void 0,e=!0,o="";this[t].id>0?(a="/act",e=!1,o="algorithmaccup"):(a="/act",o="algorithmaccadd");var s=i()({},this[t]);s._hy=o,this.callSrvAct(a,s).then(function(t){console.log("res:",t,r.isInDialog),r.isInDialog?e?t.data&&t.data.inst?r.$emit("submitOk",t.data.inst):t.data&&r.$emit("submitOk",t.data||{}):r.$emit("submitOk",s):r.$router.go(-1)})},submitAlgorithmaccForm:function(t){var r=this;this.$refs[t].validate(function(a){if(!a)return!1;r.submitAlgorithmaccFormImpl(t)})},rest:function(){this.algorithmaccForm={}},ret:function(){this.$router.push({name:"alaccess"})}},watch:{paramsObj:function(t){this.pObj.id!=this.paramsObj.id&&(this.pObj=i()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){this.algorithmaccForm={}}},s=(a("aXmU"),a("KHd+")),n=Object(s.a)(o,function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("el-container",{attrs:{direction:"vertical"}},[a("el-form",{ref:"algorithmaccForm",attrs:{model:t.algorithmaccForm,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"算法名称：",prop:"title",rules:{required:!0,message:" ",trigger:"input"}}},[a("el-input",{model:{value:t.algorithmaccForm.title,callback:function(r){t.$set(t.algorithmaccForm,"title",r)},expression:"algorithmaccForm.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"请求地址：",prop:"address",rules:{required:!0,message:" ",trigger:"input"}}},[a("el-input",{model:{value:t.algorithmaccForm.address,callback:function(r){t.$set(t.algorithmaccForm,"address",r)},expression:"algorithmaccForm.address"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"算法描述：",prop:"describion",rules:{required:!0,message:" ",trigger:"input"}}},[a("el-input",{model:{value:t.algorithmaccForm.describion,callback:function(r){t.$set(t.algorithmaccForm,"describion",r)},expression:"algorithmaccForm.describion"}})],1),t._v(" "),t._e()],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-button",{on:{click:t.handleSubmitAlgorithmacc}},[a("span",[t._v("提交\n            ")])]),t._v(" "),a("el-button",{on:{click:t.rest}},[a("span",[t._v("重置\n            ")])]),t._v(" "),a("el-button",{on:{click:t.ret}},[a("span",[t._v("返回\n            ")])])],1)],1)},[],!1,null,"371755fc",null);n.options.__file="index.vue";r.default=n.exports},y2a5:function(t,r,a){"use strict";var e=a("gDS+"),i=a.n(e),o=a("4d7F"),s=a.n(o);r.a={methods:{cb_null:function(t){return!1},cb_goBack:function(t){return this.$router.go(-1),!0},cb_success:function(t){return!(!t.status||"SUCCESS"!=t.status)||(this.$message.error(t.msg),!1)},cb_showMess:function(t){return this.$message.success(t.msg),!0},gen_sameValue:function(t,r){return function(a,e,i){e!=t?i(new Error(r)):i()}},refreshCaptcha:function(t){t.preventDefault(),t.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(t){return t.length<1?"":t=t.indexOf("?")>-1?t+"&Authorization="+this.apiSrv.token:t+"?Authorization="+this.apiSrv.token},callServer:function(t,r,a){var e=this;this.apiSrv.callServer(t,r).then(function(t){if(console.log("res ------",t),a)for(var r=0;r<a.length;r++){if(!a[r](t))break}}).catch(function(t){console.log("err:",t),e.$message.error(t)})},callSrvAct:function(t,r){var a=this;return new s.a(function(e,i){a.apiSrv.callServer(t,r).then(function(t){t.status&&"SUCCESS"==t.status?e(t):(console.log("res:",t),a.$message.error(t.msg))}).catch(function(t){console.log("err:",t),a.$message.error(t)})})},gen_list_cb:function(t,r){var a=this;if(!t||t.length<1)return this.cb_null;var e=t+"Data",i=t+"TotalRec",o=t+"TotalPage",s=t+"RecOfPage",n=t+"CurPage";return function(t){return r&&1==r&&t.data.cp>1?a[e]=a[e].concat(t.data.pageData||[]):a[e]=t.data.pageData||[],a[i]=t.data.totalRec,a[s]=t.data.rop,a[n]=t.data.cp,a[o]=t.data.rop>0?Math.ceil(t.data.totalRec/t.data.rop):0,t.data.detailData&&(a[e+"dData"]=t.data.detailData||[]),!0}},gen_selmulti_change:function(t){var r=this;if(!t||t.length<1)return this.cb_null;var a=t+"MultiSel";return function(t){if(r[a]){for(var e=[],i=0;i<t.length;i++)e.push(t[i].id);r[a]=e}}},refreshPage2:function(t,r,a,e,o){var s=t+"QueryArr",n=t+"CbPage",c=JSON.parse(i()(this[s]));if(c&&c.length>0)for(var l=c.length-1;l>-1;l--)console.log("qpsArr[i].val",c[l].val,0==c[l].val,""!=c[l].val),0==c[l].val&&(console.log("i:",l),c.splice(l,1));console.log("qpsArr:",c,this[s]);var u={qps:c||"",rop:a,cp:e};return this[t+"SortParas"]&&(u.sps=this[t+"SortParas"]),u._hy=o,this.callServer(r,u,[this.cb_success,this[n]])},refreshPage:function(t,r,a){var e=t+"RecOfPage",i=t+"CurPage";this[i]<1&&(this[i]=1),this.refreshPage2(t,r,this[e],this[i],a)},queryPageData:function(t,r,a,e,o){if(!t||t.length<1)return this.cb_null;var s=t+"QueryArr",n=JSON.parse(i()(this[s]));if(n&&n.length>0)for(var c=n.length-1;c>-1;c--)0==n[c].val&&n.splice(c,1);console.log("qpsArr:",n);var l={qps:n||[],rop:a,cp:e};return this[t+"SortParas"]&&(l.sps=this[t+"SortParas"]),this.callServer(r,l,o)}}}}}]);