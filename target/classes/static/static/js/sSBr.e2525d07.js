(window.webpackJsonp=window.webpackJsonp||[]).push([["sSBr"],{sSBr:function(e,r,t){"use strict";t.r(r);var a=t("P2sY"),s=t.n(a);function o(e){return"string"==typeof e&&e&&e.length>0?new Date(e):e}function i(e,r){return(Array(r).join("0")+e).slice(-r)}var l={data:function(){return{userForm:{name:this.$route.params.name,userName:this.$route.params.userName,avatar:this.$route.params.avatar||"/static/image/img1.jpg",pwd:"",pwdverify:"",birthday:o(this.$route.params.birthday),mobile:this.$route.params.mobile,sex:this.$route.params.sex,caller:this.$route.params.caller,orgcode:this.$store.state.globaldata.org.code,departId:this.$route.params.departId,introduction:this.$route.params.introduction},departData:this.$store.state.departsdata.departs||[],avatars:[["/static/image/img1.jpg","/static/image/img2.jpg","/static/image/img3.jpg","/static/image/img4.jpg"],["/static/image/img5.jpg","/static/image/img6.jpg","/static/image/img7.jpg","/static/image/img8.jpg"],["/static/image/img9.jpg","/static/image/img10.jpg","/static/image/img11.jpg","/static/image/img12.jpg"]],avatarsShow:!1}},mounted:function(){this.$store.state.globaldata.jwtoken;this.loading=!0,this.$store.dispatch("listDeparts",[this.$store.state.globaldata.org.code])},methods:{showPwdEle:function(){return!this.$route.params.pwd},validatePwd2:function(e,r,t){""===r?t(new Error("请再次输入密码")):r!==this.userForm.pwd?t(new Error("两次输入密码不一致!")):t()},handlePrev:function(){this.$router.go(-1)},selAvatar:function(e){this.userForm.avatar=e,this.avatarsShow=!1},submitUserFormImpl:function(e){var r=this;this.loading=!0;var t=void 0;t=this[e].id>0?"/upuser":"/newuser";var a=s()({},this.userForm,{birthday:function(e){return"string"!=typeof e?e.getFullYear()+"-"+i(e.getMonth()+1,2)+"-"+i(e.getDate(),2):e}(this.userForm.birthday)});apiSrv.callServer(t,a).then(function(e){r.loading=!1,e.status&&"SUCCESS"==e.status?r.$router.go(-1):r.$message.error(e.msg)}).catch(function(e){console.log("err:",e),r.$message.error(e),r.loading=!1})},submitUserForm:function(e){var r=this;this[e].birthday=o(this[e].birthday),this.$refs[e].validate(function(t){if(!t)return!1;r.submitUserFormImpl(e)})},resetUserForm:function(e){this.$refs[e].resetFields()}}},n=t("KHd+"),u=Object(n.a)(l,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"form-header form-header-back"},[t("el-button",{attrs:{plain:""},on:{click:function(r){e.handlePrev()}}},[t("svg-icon",{attrs:{"icon-class":"back"}}),e._v("\n    返回\n  ")],1)],1),e._v(" "),t("div",{staticStyle:{margin:"10px"}}),e._v(" "),t("el-form",{ref:"userForm",staticClass:"form-content",attrs:{model:e.userForm,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"所属公司",prop:"orgname"}},[t("el-input",{attrs:{disabled:""},model:{value:e.$store.state.globaldata.org,callback:function(r){e.$set(e.$store.state.globaldata,"org",r)},expression:"$store.state.globaldata.org"}})],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户姓名",prop:"name",rules:{required:!0,message:"用户姓名不能为空",trigger:"blur"}}},[t("el-input",{model:{value:e.userForm.name,callback:function(r){e.$set(e.userForm,"name",r)},expression:"userForm.name"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户账号",prop:"userName",rules:{required:!0,message:"用户账号不能为空",trigger:"blur"}}},[t("el-input",{model:{value:e.userForm.userName,callback:function(r){e.$set(e.userForm,"userName",r)},expression:"userForm.userName"}})],1)],1)],1),e._v(" "),e.showPwdEle()?t("div",[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户密码",prop:"pwd",rules:{required:!0,message:"用户密码不能为空",trigger:"blur"}}},[t("el-input",{model:{value:e.userForm.pwd,callback:function(r){e.$set(e.userForm,"pwd",r)},expression:"userForm.pwd"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"校验密码",prop:"pwdverify",rules:[{required:!0,message:"校验密码不能为空",trigger:"blur"},{validator:e.validatePwd2,trigger:"blur"}]}},[t("el-input",{model:{value:e.userForm.pwdverify,callback:function(r){e.$set(e.userForm,"pwdverify",r)},expression:"userForm.pwdverify"}})],1)],1)],1)],1):e._e(),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户头像",required:"",prop:"avatar"}},[t("img",{staticClass:"user-avatar",attrs:{src:e.userForm.avatar}}),e._v(" "),t("el-popover",{staticClass:"more-avatar",attrs:{placement:"right",trigger:"click"},model:{value:e.avatarsShow,callback:function(r){e.avatarsShow=r},expression:"avatarsShow"}},[t("div",{staticStyle:{"text-align":"right",margin:"0"}},e._l(e.avatars,function(r){return t("div",e._l(r,function(r){return t("el-button",{key:r,attrs:{circle:""},on:{click:function(t){e.selAvatar(r)}}},[t("img",{staticClass:"user-avatar",attrs:{src:r}})])}))})),e._v(" "),t("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("...")])],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"出生日期",required:"",prop:"birthday",rules:{required:!0,message:"请选择出生日期",trigger:"change"}}},[t("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期","value-format":"timestamp"},model:{value:e.userForm.birthday,callback:function(r){e.$set(e.userForm,"birthday",r)},expression:"userForm.birthday"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"手机号码",prop:"mobile",rules:{required:!0,pattern:"^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\\d{8}$",message:"请输入电话号码",trigger:"blur"}}},[t("el-input",{model:{value:e.userForm.mobile,callback:function(r){e.$set(e.userForm,"mobile",r)},expression:"userForm.mobile"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"电话号码",prop:"caller"}},[t("el-input",{model:{value:e.userForm.caller,callback:function(r){e.$set(e.userForm,"caller",r)},expression:"userForm.caller"}})],1)],1)],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"用户性别",prop:"sex",rules:{required:!0,message:"请选择用户性别",trigger:"blur"}}},[t("el-radio-group",{model:{value:e.userForm.sex,callback:function(r){e.$set(e.userForm,"sex",r)},expression:"userForm.sex"}},[t("el-radio",{attrs:{label:"男"}}),e._v(" "),t("el-radio",{attrs:{label:"女"}})],1)],1)],1),e._v(" "),t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"所属部门",prop:"departId",rules:{type:"number",min:0,message:"请选择所属部门",trigger:"change"}}},[t("el-select",{attrs:{placeholder:"请选择"},model:{value:e.userForm.departId,callback:function(r){e.$set(e.userForm,"departId",r)},expression:"userForm.departId"}},e._l(e.departData,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1)],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"个人介绍",prop:"introduction"}},[t("el-input",{attrs:{type:"textarea"},model:{value:e.userForm.introduction,callback:function(r){e.$set(e.userForm,"introduction",r)},expression:"userForm.introduction"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){e.submitUserForm("userForm")}}},[e._v("确定")]),e._v(" "),t("el-button",{on:{click:function(r){e.resetUserForm("userForm")}}},[e._v("重置")])],1)],1)],1)},[],!1,null,null,null);u.options.__file="index.vue";r.default=u.exports}}]);