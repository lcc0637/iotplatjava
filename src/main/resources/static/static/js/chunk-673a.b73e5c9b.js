(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-673a"],{WeEU:function(e,t,n){"use strict";n.r(t);var o=n("P2sY"),a=n.n(o),l=n("EJiy"),i=n.n(l),s={name:"iotmanimport",mixins:[n("y2a5").a],components:{},props:{},data:function(){return{importData:[],num:0,success:0,fail:0,repeat:0}},mounted:function(){},methods:{importfxx:function(e){var t=this;t.num=0,t.success=0,t.fail=0,t.repeat=0,console.log(this.$refs.upload.value),this.file=event.currentTarget.files[0],console.log(this.file);var n=this.file,o=new FileReader;FileReader.prototype.readAsBinaryString=function(e){var n,o,a="";window.console.log(this);var l=new FileReader;l.onload=function(e){window.console.log(e);for(var i=new Uint8Array(l.result),s=i.byteLength,r=0;r<s;r++)a+=String.fromCharCode(i[r]);n=XLSX.read(a,{type:"binary"}),o=XLSX.utils.sheet_to_json(n.Sheets[n.SheetNames[0]]),window.console.log(o),console.log("哈哈哈",this.outdata);for(var c=[],u=0;u<o.length;u++)c.push({title:o[u].设备名称,equdes:o[u].设备描述,equip:o[u].设备IP,factory:o[u].厂商,lasttime:o[u].最后通信时间,workdur:o[u].工作时长});window.console.log(c),t.importData=c,console.log(t.$refs.upload.value),console.log(document.getElementById("upload").value)},l.readAsArrayBuffer(e)},o.readAsBinaryString(n)},fixdata:function(e){for(var t="",n=0,o=10240;n<e.byteLength/o;++n)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*o,n*o+o)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(n*o)))},SizeChange:function(){},CurChange:function(){},exportExcel:function(){this.num=0,this.success=0,this.fail=0,this.repeat=0;var e=XLSX.utils.json_to_sheet([{"设备名称":"","设备描述":"","设备IP":"","厂商":"","最后通信时间":"","工作时长":""}]);console.log(e),this.openDownloadDialog(this.sheet2blob(e),"模板教程.xlsx")},sheet2blob:function(e,t){var n={SheetNames:[t=t||"sheet1"],Sheets:{}};n.Sheets[t]=e;var o=XLSX.write(n,{bookType:"xlsx",bookSST:!1,type:"binary"});return new Blob([function(e){for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),o=0;o!=e.length;++o)n[o]=255&e.charCodeAt(o);return t}(o)],{type:"application/octet-stream"})},openDownloadDialog:function(e,t){"object"==(void 0===e?"undefined":i()(e))&&e instanceof Blob&&(e=URL.createObjectURL(e));var n,o=document.createElement("a");o.href=e,o.download=t||"",window.MouseEvent?n=new MouseEvent("click"):(n=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),o.dispatchEvent(n)},uploadOk:function(){var e=this;this.num=0,this.success=0,this.fail=0,this.repeat=0,this.num=this.importData.length,console.log("上传数据",this.importData);for(var t=0;t<this.importData.length;t++){var n=a()({},this.importData[t]);console.log("数据",this.importData),n._hy="iotmanadd",this.callSrvAct("/act",n).then(function(t){console.log("后台返回",t),"SUCCESS"==t.status?e.success=e.success+1:"FAILED"==t.status&&(e.fail=e.fail+1)})}}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=(n("sYqm"),n("KHd+")),c=Object(r.a)(s,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",{attrs:{direction:"vertical"}},[n("div",[n("el-row",{attrs:{autogenchild:!1,childcol:24}},[n("span",[e._v("提示：需保证上传的excel文件为单一文件\n            ")])]),e._v(" "),n("div",{staticStyle:{margin:"10px 0px"}},[n("span",[e._v("请先\n            ")]),e._v(" "),n("el-button",{on:{click:e.exportExcel}},[n("span",[e._v("下载模板和教程\n                ")])]),e._v(" "),n("span",[e._v("仔细阅读后，按要求填写车辆信息，并上传摄像机信息表格\n            ")])],1),e._v(" "),n("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[n("div",{staticStyle:{display:"flex",height:"36px","line-height":"35px"}},[n("span",[e._v("上传的文件：\n                ")]),e._v(" "),n("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"文件路径"}}),e._v(" "),n("el-input",{ref:"upload",attrs:{type:"file",id:"upload"},on:{change:function(t){e.importfxx(this)}}}),e._v(" "),n("el-button",{on:{click:e.uploadOk}},[n("span",[e._v("确认上传\n                    ")])])],1),e._v(" "),n("div",[n("span",[e._v("上传共\n                ")]),e._v(" "),n("span",[e._v(e._s(e.num)+"\n                ")]),e._v(" "),n("span",[e._v("条  成功\n                ")]),e._v(" "),n("span",{staticStyle:{color:"green"}},[e._v(e._s(e.success)+"\n                ")]),e._v(" "),n("span",{staticStyle:{color:"green"}},[e._v("条\n                ")]),e._v(" "),n("span",[e._v("失败\n                ")]),e._v(" "),n("span",{staticStyle:{color:"red"}},[e._v(e._s(e.fail)+"\n                ")]),e._v(" "),n("span",{staticStyle:{color:"red"}},[e._v("条\n                ")]),e._v(" "),n("span",[e._v("重复\n                ")]),e._v(" "),n("span",{staticStyle:{color:"blue"}},[e._v(e._s(e.repeat)+"\n                ")]),e._v(" "),n("span",{staticStyle:{color:"blue"}},[e._v("条\n                ")])])]),e._v(" "),n("el-table",{attrs:{data:e.importData,"header-cell-style":{background:"rgba(241,246,254,1)",fontWeight:"500",color:"#333333",fontSize:"16px","text-align":"center"}}},[n("el-table-column",{attrs:{label:"设备名称",prop:"title"}}),e._v(" "),n("el-table-column",{attrs:{label:"设备描述",prop:"equdes"}}),e._v(" "),n("el-table-column",{attrs:{label:"设备IP",prop:"equip"}}),e._v(" "),n("el-table-column",{attrs:{label:"厂商",prop:"factory"}}),e._v(" "),n("el-table-column",{attrs:{label:"最后通信时间",prop:"lasttime"}}),e._v(" "),n("el-table-column",{attrs:{label:"工作时长",prop:"workdur"}})],1)],1)])},[],!1,null,"a6b6b0e6",null);c.options.__file="index.vue";t.default=c.exports},bSWq:function(e,t,n){},sYqm:function(e,t,n){"use strict";var o=n("bSWq");n.n(o).a}}]);