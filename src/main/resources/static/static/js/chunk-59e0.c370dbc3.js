(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-59e0"],{DMxb:function(t,i,o){},"O/PY":function(t,i,o){"use strict";var e=o("DMxb");o.n(e).a},SoS4:function(t,i,o){"use strict";o.r(i);var e=o("P2sY"),n=o.n(e),r={name:"regionedit",mixins:[o("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{newRegionForm:{id:0,title:"",parent_id:0},regionForm:{},isInDialog:!1}},mounted:function(){this.pObj=n()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.regionForm=n()({},this.newRegionForm,this.pObj)):this.regionForm=n()({},this.newRegionForm,this.$route.params),console.log("123",this.paramsObj)},methods:{pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.regionForm=n()({},this.newRegionForm,this.pObj))},submit:function(){this.submitOrgForm("regionForm")},submitOrgFormImpl:function(t){var i=this,o=void 0,e=!0,r="";this[t].id>0?(o="/act",e=!1,r="regionup"):(o="/act",r="regionadd");var s=n()({},this[t]);s._hy=r,this.callSrvAct(o,s).then(function(t){i.isInDialog?(console.log("不跳转"),e?t.data&&t.data.inst?(console.log("1111111111"),i.$emit("submitOk",t.data.inst)):t.data&&(console.log("22222222222"),i.$emit("submitOk",t.data||{})):i.$emit("submitOk",s)):(console.log("跳转"),i.$router.go(-1))})},submitOrgForm:function(t){var i=this;this.$refs[t].validate(function(o){if(!o)return!1;i.submitOrgFormImpl(t)})}},watch:{paramsObj:function(t){this.pObj.id!=this.paramsObj.id&&(this.pObj=n()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=(o("O/PY"),o("KHd+")),a=Object(s.a)(r,function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("el-container",{attrs:{direction:"vertical"}},[o("el-form",{ref:"regionForm",attrs:{model:t.regionForm,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"区域名称：",prop:"title"}},[o("el-input",{model:{value:t.regionForm.title,callback:function(i){t.$set(t.regionForm,"title",i)},expression:"regionForm.title"}})],1),t._v(" "),t._e()],1),t._v(" "),o("div",{staticStyle:{"text-align":"center"}},[o("el-button",{staticStyle:{"background-color":"#317EF3"},on:{click:t.submit}},[o("span",{staticStyle:{color:"#ffffff"}},[t._v("提交\n                ")])])],1)],1)},[],!1,null,"7909977e",null);a.options.__file="index.vue";i.default=a.exports}}]);