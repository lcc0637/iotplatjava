(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5b65"],{AChg:function(t,n,e){"use strict";e.r(n);var i={name:"detailsee",mixins:[],components:{},props:{},data:function(){return{}},mounted:function(){},methods:{genDownUrl:function(t){if(!t||t.length<1)return"";var n=t.split(";");return!n||n.length<2?"":this.hysrvport+"/hydownload?btnEncode=headupload&relateType=camera&filename="+n[1]+"&Authorization="+this.apiSrv.token}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=(e("s/8G"),e("KHd+")),s=Object(a.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-container",{attrs:{direction:"vertical"}},[e("div",{staticStyle:{display:"flex"}},[e("span",[t._v("基本信息\n        ")])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"row","margin-top":"20px"}},[e("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e("span",[t._v("设备ID\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.id_num)+"\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"300px"}},[e("span",[t._v("设备名称\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.$route.params.title)+"\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"300px"}},[e("span",[t._v("设备区域\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.$route.params.area)+"\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"300px"}},[e("span",[t._v("设备类型\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.$route.params.type)+"\n            ")])])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"row","margin-top":"20px"}},[e("div",{staticStyle:{display:"flex","flex-direction":"column"}},[e("span",[t._v("IP地址及端口号\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.$route.params.ipaddress)+"\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"300px"}},[e("span",[t._v("设备型号\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v("DS-KASDASD\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"300px"}},[e("span",[t._v("接入协议\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v("HTTP\n            ")])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"300px"}},[e("span",[t._v("厂商\n            ")]),t._v(" "),e("span",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(this.$route.params.factory)+"\n            ")])])]),t._v(" "),e("div",{staticStyle:{display:"flex","flex-direction":"column","margin-top":"30px"}},[e("span",[t._v("位置信息\n        ")]),t._v(" "),e("img",{staticStyle:{width:"300px",height:"300px"},attrs:{src:t.genDownUrl(this.$route.params.url)}})])])},[],!1,null,"6bd5dca0",null);s.options.__file="index.vue";n.default=s.exports},MdzJ:function(t,n,e){},"s/8G":function(t,n,e){"use strict";var i=e("MdzJ");e.n(i).a}}]);