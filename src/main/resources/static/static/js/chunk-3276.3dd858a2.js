(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3276"],{"+FZg":function(t,e,s){},"8D+x":function(t,e,s){"use strict";var i=s("+FZg");s.n(i).a},"D+m3":function(t,e,s){"use strict";s.r(e);var i=s("P2sY"),c=s.n(i),n={name:"accessedit",mixins:[s("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{newAccessForm:{id:0,title:""},accessForm:{}}},mounted:function(){console.log(this.paramsObj),this.pObj=c()({},this.paramsObj),this.gcomm.mapLength(this.pObj)>0?(this.isInDialog=!0,this.accessForm=c()({},this.newAccessForm,this.pObj)):this.accessForm=c()({},this.newAccessForm,this.$route.params)},methods:{pObjChanged:function(){this.gcomm.mapLength(this.pObj)>0&&(this.isInDialog=!0,this.accessForm=c()({},this.newAccessForm,this.pObj))},submit:function(){var t=this;if(console.log(this.accessForm),this.accessForm.id>0){var e=this.accessForm;e._hy="regionup",this.callSrvAct("/act",e).then(function(e){console.log("结果",e),t.$emit("submitOk")})}else{var s={id:0,parent_id:this.paramsObj.parent_id,title:this.accessForm.title,_hy:"regionadd"};this.callSrvAct("/act",s).then(function(e){console.log("结果",e),t.$emit("submitOk")})}}},watch:{paramsObj:function(t){this.pObj.id!=this.paramsObj.id&&(this.pObj=c()({},this.paramsObj),this.pObjChanged())}},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){this.accessForm.title=""},destroyed:function(){}},o=(s("8D+x"),s("KHd+")),a=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-container",{attrs:{direction:"vertical"}},[s("el-form",{attrs:{model:t.accessForm,"label-width":"100px"}},[s("el-form-item",{attrs:{label:"区域名称",prop:"title"}},[s("el-input",{model:{value:t.accessForm.title,callback:function(e){t.$set(t.accessForm,"title",e)},expression:"accessForm.title"}})],1)],1),t._v(" "),s("el-row",{staticStyle:{"text-align":"center"},attrs:{autogenchild:!1,childcol:24,justify:"center"}},[s("el-button",{staticStyle:{"background-color":"#0066C1"},on:{click:t.submit}},[s("span",{staticStyle:{color:"#ffffff"}},[t._v("提交\n            ")])])],1)],1)},[],!1,null,"4303b8be",null);a.options.__file="index.vue";e.default=a.exports}}]);