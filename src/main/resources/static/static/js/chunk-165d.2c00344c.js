(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-165d"],{VZk3:function(t,s,e){"use strict";e.r(s);var a=e("P2sY"),n=e.n(a),i={name:"startcamera",mixins:[e("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{pObj:{},success:!1,fail:!1,startuptext:"",progress:0,barcolor:"",barstate:""}},mounted:function(){this.pObj=n()({},this.paramsObj),console.log("传过来的",this.pObj),"运行中"==this.pObj.state&&(this.startuptext="启动完成",this.$refs.bar.percentage=100),this.startup()},methods:{startup:function(){var t=this,s=this,e={_hy:"cameraopen",qps:[{name:"id",val:[this.pObj.id],op:"in"}]};console.log("upData:",e),this.callSrvAct("/deviceopen",e).then(function(e){console.log("后台返回值",e),"SUCCESS"==e.data[0].result?(t.count("SUCCESS",e.data),s.success=!0,s.fail=!1,s.barcolor="green",t.$emit("submitOk")):"FAILD"==e.data[0].result&&(t.count("FAILD",e.data),s.success=!0,s.fail=!0,s.barcolor="red")})},count:function(t,s){var e=this,a=this;a.progress=0,this.interval=window.setInterval(function(){a.progress+=40,a.startuptext="启动中",a.progress>=100&&(a.progress=100,window.clearInterval(a.interval),console.log(t),"SUCCESS"==t?(a.barstate="success",a.startuptext="启动完成",e.$emit("submitClose",{progress:a.progress,barstate:a.barstate,barcolor:a.barcolor,status:t})):"FAILD"==t&&(a.barstate="exception",a.startuptext="启动失败",e.$emit("submitClose",{progress:a.progress,barstate:a.barstate,barcolor:a.barcolor,status:t,msg:s[0].msg})))},500)},colse:function(){this.$emit("submitClose",{})}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){window.clearInterval(this.interval)},destroyed:function(){}},r=(e("ikIs"),e("KHd+")),o=Object(r.a)(i,function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("el-container",{attrs:{direction:"vertical"}},[e("el-main",[e("div",{staticStyle:{margin:"10px 0px"}},[e("span",{staticStyle:{"font-size":"20px","font-wieght":"800"}},[t._v("开启进度\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("span",[t._v("摄像机接入：\n            ")]),t._v(" "),e("el-progress",{staticStyle:{width:"200px"},attrs:{percentage:t.progress,status:t.barstate,color:t.barcolor}}),t._v(" "),e("span",{class:{active1:t.success,active2:t.fail}},[t._v(t._s(t.startuptext)+"\n            ")])],1),t._v(" "),e("div",{staticStyle:{margin:"10px 0px"}},[e("span",{staticStyle:{"font-size":"20px","font-wieght":"800"}},[t._v("摄像机信息\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("div",[e("span",[t._v("场景：\n                ")]),t._v(" "),e("span",[t._v(t._s(t.pObj.scene)+"\n                ")])]),t._v(" "),e("div",{staticStyle:{"margin-left":"200px"}},[e("span",[t._v("位置：\n                ")]),t._v(" "),e("span",[t._v(t._s(t.pObj.pos)+"\n                ")])])]),t._v(" "),e("div",{staticStyle:{display:"flex"}},[e("div",[e("span",[t._v("分辨率及帧率：\n                ")]),t._v(" "),e("span",[t._v(t._s(t.pObj.resolution+" "+t.pObj.framerate)+"\n                ")])]),t._v(" "),e("div",{staticStyle:{"margin-left":"200px"}},[e("span",[t._v("视频编码：\n                ")]),t._v(" "),e("span",[t._v(t._s(t.pObj.codec)+"\n                ")])])]),t._v(" "),e("div",[e("span",[t._v("视频地址：\n            ")]),t._v(" "),e("span",[t._v(t._s(t.pObj.videoa)+"\n            ")])]),t._v(" "),e("div",{staticStyle:{"text-align":"right"}},[t._e(),t._v(" "),e("el-button",{on:{click:t.colse}},[e("span",[t._v("关闭\n                ")])])],1)])],1)},[],!1,null,"6a5fcee0",null);o.options.__file="index.vue";s.default=o.exports},ikIs:function(t,s,e){"use strict";var a=e("sshD");e.n(a).a},sshD:function(t,s,e){}}]);