(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1217"],{QU32:function(e,t,r){"use strict";var a=r("rlGs");r.n(a).a},"RU/L":function(e,t,r){r("Rqdy");var a=r("WEpk").Object;e.exports=function(e,t,r){return a.defineProperty(e,t,r)}},Rqdy:function(e,t,r){var a=r("Y7ZC");a(a.S+a.F*!r("jmDH"),"Object",{defineProperty:r("2faE").f})},SEkw:function(e,t,r){e.exports={default:r("RU/L"),__esModule:!0}},YEIV:function(e,t,r){"use strict";t.__esModule=!0;var a=function(e){return e&&e.__esModule?e:{default:e}}(r("SEkw"));t.default=function(e,t,r){return t in e?(0,a.default)(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},neS6:function(e,t,r){"use strict";r.r(t);var a,i=r("YEIV"),s=r.n(i),o=r("P2sY"),n=r.n(o),l={name:"baseedit",mixins:[r("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{newBaseeditForm:{id:0,title:"",type:0,factory:0,area:0,ipaddress:"",sbxh:"",jrxy:"",quyu:"",url:""},baseeditForm:{},regionArr:[],baseArr:["A基站","B基站","C基站"],factoryArr:["A厂","B厂","C厂"],addressArr:["A点","B点","C点"],viewArr:["平面视图","立体视图"]}},mounted:function(){this.pObj=n()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.baseeditForm=n()({},this.newBaseeditForm,this.pObj)):this.baseeditForm=n()({},this.newBaseeditForm,this.$route.params);var e=this;this.callSrvAct("/actq",{_hy:"regiontt",qps:[{name:"title",val:"",op:"like"}],sps:[{name:"title",orderV:"asc"}]}).then(function(t){var r=t.data||[];console.log("获取到的数据",r),e.regionArr=r})},methods:(a={pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.baseeditForm=n()({},this.newBaseeditForm,this.pObj))},genUploadUrl:function(e){return this.hysrvport+"/hyupload?btnEncode=headupload&relateType=camera&fi=add&Authorization="+this.apiSrv.token},handleChange:function(e){console.log(e);for(var t=0;t<this.regionArr.length;t++)this.regionArr[t].title==e&&(this.baseeditForm.region_id=this.regionArr[t].id)},rest:function(){this.baseeditForm={}},handleSubmitBaseman:function(){this.submitBasemanForm("baseeditForm")},submitBasemanForm:function(e){var t=this;this.$refs[e].validate(function(r){if(!r)return!1;t.submitBasemanFormImpl(e)})},submitBasemanFormImpl:function(e){var t=this,r=void 0,a=!0,i="";this[e].id>0?(r="/act",a=!1,i="basemanup"):(r="/act",i="basemanadd");var s=n()({},this[e]);s._hy=i,this.callSrvAct(r,s).then(function(e){console.log("res:",e,t.isInDialog),t.isInDialog?a?e.data&&e.data.inst?t.$emit("submitOk",e.data.inst):e.data&&t.$emit("submitOk",e.data||{}):t.$emit("submitOk",s):t.$router.go(-1)})},handleAvatarSuccess:function(e,t){this.baseeditForm.url=e.data},genDownUrl:function(e){if(!e||e.length<1)return"";var t=e.split(";");return!t||t.length<2?"":this.hysrvport+"/hydownload?btnEncode=headupload&relateType=camera&filename="+t[1]+"&Authorization="+this.apiSrv.token}},s()(a,"genUploadUrl",function(e){return this.hysrvport+"/hyupload?btnEncode=headupload&relateType=camera&fi=add&Authorization="+this.apiSrv.token}),s()(a,"close",function(){this.baseeditForm.url="",this.$refs.box.clearFiles()}),a),watch:{paramsObj:function(e){this.pObj.id!=this.paramsObj.id&&(this.pObj=n()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},u=(r("QU32"),r("KHd+")),c=Object(u.a)(l,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{direction:"vertical"}},[r("el-form",{ref:"baseeditForm",staticStyle:{padding:"30px"},attrs:{model:e.baseeditForm}},[r("el-form-item",{attrs:{label:"基站名称：",prop:"title",rules:{required:!0,message:" ",trigger:"input"}}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.baseeditForm.title,callback:function(t){e.$set(e.baseeditForm,"title",t)},expression:"baseeditForm.title"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"基站类型：",prop:"type",rules:{required:!0}}},[r("el-select",{model:{value:e.baseeditForm.type,callback:function(t){e.$set(e.baseeditForm,"type",t)},expression:"baseeditForm.type"}},e._l(e.baseArr,function(e,t){return r("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"厂商：",prop:"factory",rules:{required:!0}}},[r("el-select",{model:{value:e.baseeditForm.factory,callback:function(t){e.$set(e.baseeditForm,"factory",t)},expression:"baseeditForm.factory"}},e._l(e.factoryArr,function(e,t){return r("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"区域：",prop:"area",rules:{required:!0}}},[r("el-select",{on:{change:e.handleChange},model:{value:e.baseeditForm.area,callback:function(t){e.$set(e.baseeditForm,"area",t)},expression:"baseeditForm.area"}},e._l(e.regionArr,function(e,t){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.title}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"IP地址及端口号：",prop:"ipaddress",rules:{required:!0,message:" ",trigger:"input"}}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.baseeditForm.ipaddress,callback:function(t){e.$set(e.baseeditForm,"ipaddress",t)},expression:"baseeditForm.ipaddress"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"设备型号：",prop:"sbxh",rules:{required:!0,message:" ",trigger:"input"}}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.baseeditForm.sbxh,callback:function(t){e.$set(e.baseeditForm,"sbxh",t)},expression:"baseeditForm.sbxh"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"接入协议：",prop:"jrxy",rules:{required:!0,message:" ",trigger:"input"}}},[r("el-input",{staticStyle:{width:"200px"},model:{value:e.baseeditForm.jrxy,callback:function(t){e.$set(e.baseeditForm,"jrxy",t)},expression:"baseeditForm.jrxy"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"位置信息：",prop:"quyu"}},[r("div",{model:{value:e.baseeditForm.quyu,callback:function(t){e.$set(e.baseeditForm,"quyu",t)},expression:"baseeditForm.quyu"}},[r("el-select",{model:{value:e.baseeditForm.quyu,callback:function(t){e.$set(e.baseeditForm,"quyu",t)},expression:"baseeditForm.quyu"}},e._l(e.regionArr,function(e,t){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.title}})})),e._v(" "),r("el-select",{model:{value:e.baseeditForm.quyu,callback:function(t){e.$set(e.baseeditForm,"quyu",t)},expression:"baseeditForm.quyu"}},e._l(e.regionArr,function(e,t){return r("el-option",{key:e.id,attrs:{label:e.title,value:e.title}})}))],1)]),e._v(" "),r("el-form-item",{attrs:{prop:"url"}},[r("el-upload",{ref:"box",staticStyle:{border:"1px solid #d9d9d9","border-radius":"6px",cursor:"pointer",position:"relative",overflow:"hidden",width:"100%",height:"178px","line-height":"178px","text-align":"center"},attrs:{action:e.genUploadUrl(),multiple:!1,"on-success":e.handleAvatarSuccess,limit:0,id:"box"}},[e.baseeditForm.url?r("img",{staticStyle:{"object-fit":"fill"},attrs:{src:e.genDownUrl(e.baseeditForm.url)}}):r("svg-icon",{staticStyle:{"font-size":"28px",color:"#8c939d"},attrs:{"icon-class":"add"}}),e._v(" "),e.baseeditForm.url?r("span",{ref:"clos",staticStyle:{position:"absolute",top:"0px",right:"0px"},attrs:{id:"clos"}},[r("i",{staticClass:"el-icon-close",staticStyle:{position:"absolute",top:"0px",right:"0px"},on:{click:function(t){return t.stopPropagation(),e.close(t)}}})]):e._e()],1)],1)],1),e._v(" "),r("div",{staticStyle:{"text-align":"center"}},[r("el-button",{on:{click:e.handleSubmitBaseman}},[r("span",[e._v("提交\n            ")])]),e._v(" "),r("el-button",{on:{click:e.rest}},[r("span",[e._v("重置\n            ")])])],1)],1)},[],!1,null,"413e4f1a",null);c.options.__file="index.vue";t.default=c.exports},rlGs:function(e,t,r){},y2a5:function(e,t,r){"use strict";var a=r("gDS+"),i=r.n(a),s=r("4d7F"),o=r.n(s);t.a={methods:{cb_null:function(e){return!1},cb_goBack:function(e){return this.$router.go(-1),!0},cb_success:function(e){return!(!e.status||"SUCCESS"!=e.status)||(this.$message.error(e.msg),!1)},cb_showMess:function(e){return this.$message.success(e.msg),!0},gen_sameValue:function(e,t){return function(r,a,i){a!=e?i(new Error(t)):i()}},refreshCaptcha:function(e){e.preventDefault(),e.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(e){return e.length<1?"":e=e.indexOf("?")>-1?e+"&Authorization="+this.apiSrv.token:e+"?Authorization="+this.apiSrv.token},callServer:function(e,t,r){var a=this;this.apiSrv.callServer(e,t).then(function(e){if(console.log("res ------",e),r)for(var t=0;t<r.length;t++){if(r[t])if(!r[t](e))break}}).catch(function(e){console.log("err:",e),a.$message.error(e)})},callSrvAct:function(e,t){var r=this;return new o.a(function(a,i){r.apiSrv.callServer(e,t).then(function(e){e.status&&"SUCCESS"==e.status?a(e):(console.log("res:",e),r.$message.error(e.msg))}).catch(function(e){console.log("err:",e),r.$message.error(e)})})},gen_list_cb:function(e,t){var r=this;if(!e||e.length<1)return this.cb_null;var a=e+"Data",i=e+"TotalRec",s=e+"TotalPage",o=e+"RecOfPage",n=e+"CurPage";return function(e){return t&&1==t&&e.data.cp>1?r[a]=r[a].concat(e.data.pageData||[]):r[a]=e.data.pageData||[],r[i]=e.data.totalRec,r[o]=e.data.rop,r[n]=e.data.cp,r[s]=e.data.rop>0?Math.ceil(e.data.totalRec/e.data.rop):0,e.data.detailData&&(r[a+"dData"]=e.data.detailData||[]),!0}},gen_selmulti_change:function(e){var t=this;if(!e||e.length<1)return this.cb_null;var r=e+"MultiSel";return function(e){if(t[r]){for(var a=[],i=0;i<e.length;i++)a.push(e[i].id);t[r]=a}}},refreshPage2:function(e,t,r,a,s,o){var n=e+"QueryArr",l=e+"CbPage",u=JSON.parse(i()(this[n]));if(u&&u.length>0)for(var c=u.length-1;c>-1;c--)console.log("qpsArr[i].val",u[c].val,0==u[c].val,""!=u[c].val),0==u[c].val&&(console.log("i:",c),u.splice(c,1));console.log("qpsArr:",u,this[n]);var d={qps:u||"",rop:r,cp:a};return this[e+"SortParas"]&&(d.sps=this[e+"SortParas"]),d._hy=s,this.callServer(t,d,[this.cb_success,this[l],o])},refreshPage:function(e,t,r,a){var i=e+"RecOfPage",s=e+"CurPage";this[s]<1&&(this[s]=1),this.refreshPage2(e,t,this[i],this[s],r,a)},queryPageData:function(e,t,r,a,s,o){if(!e||e.length<1)return this.cb_null;var n=e+"QueryArr",l=JSON.parse(i()(this[n]));if(l&&l.length>0)for(var u=l.length-1;u>-1;u--)0==l[u].val&&l.splice(u,1);console.log("qpsArr:",l);var c={qps:l||[],rop:r,cp:a};return this[e+"SortParas"]&&(c.sps=this[e+"SortParas"]),c._hy=s,this.callServer(t,c,o)}}}}}]);