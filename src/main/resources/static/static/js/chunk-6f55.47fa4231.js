(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6f55","chunk-f604"],{"A+Je":function(t,e,a){"use strict";a.r(e);var n=a("EJiy"),o=a.n(n),l=a("gDS+"),s=a.n(l),i=a("loDg"),r={name:"labelman",mixins:[a("y2a5").a],components:{Labelimport:i.default},props:{},data:function(){return{tagsData:[],tagsTotalRec:0,tagsTotalPage:0,tagsRecOfPage:10,tagsCurPage:1,tagsCbPage:this.gen_list_cb("tags"),tagsQueryArr:[{name:"name",val:"",op:"like",tb:"tags"},{name:"type",val:"",op:"like",tb:"tags"}],tagsQueryInit:[{name:"name",val:"",op:"like",tb:"tags"},{name:"type",val:"",op:"like",tb:"tags"}],tagsMultiSel:[],tagsSortParas:[{name:"id",tb:"tags",orderV:"desc"}],labelshow:!1,labelInstEdit:null,lableArr:["优秀","良好"],tableHeight:window.innerHeight-500}},mounted:function(){this.refreshPage("tags","/actq","tagslist")},methods:{tagsMultiSelChange:function(t){this.tagsMultiSel=t},tagsQuery:function(){this.refreshPage2("tags","/actq",this.remoteRecOfPage,1,"tagslist")},tagsResetQuery:function(){this.tagsQueryArr=JSON.parse(s()(this.tagsQueryInit))},tagsSizeChange:function(t){this.refreshPage2("tags","/actq",t,this.tagsCurPage,"tagslist")},tagsCurChange:function(t){this.refreshPage2("tags","/actq",this.tagsRecOfPage,t,"tagslist")},exportExcel:function(){for(var t=[],e=0;e<this.tagsData.length;e++)t.push({"姓名":this.tagsData[e].name,"类型":this.tagsData[e].type,"厂商":this.tagsData[e].factory});var a=XLSX.utils.json_to_sheet(t);console.log(a),this.openDownloadDialog(this.sheet2blob(a),"下载1.xlsx")},sheet2blob:function(t,e){var a={SheetNames:[e=e||"sheet1"],Sheets:{}};a.Sheets[e]=t;var n=XLSX.write(a,{bookType:"xlsx",bookSST:!1,type:"binary"});return new Blob([function(t){for(var e=new ArrayBuffer(t.length),a=new Uint8Array(e),n=0;n!=t.length;++n)a[n]=255&t.charCodeAt(n);return e}(n)],{type:"application/octet-stream"})},openDownloadDialog:function(t,e){"object"==(void 0===t?"undefined":o()(t))&&t instanceof Blob&&(t=URL.createObjectURL(t));var a,n=document.createElement("a");n.href=t,n.download=e||"",window.MouseEvent?a=new MouseEvent("click"):(a=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(a)},search:function(){this.refreshPage("tags","/actq","tagslist")},add:function(){this.$router.push({name:"labeledit"})},importing:function(){this.$router.push({name:"labelimport"})},editlabelSetOK:function(){},showEditLabelSet:function(){this.showEditLabelSet=!0},handlebasemanEdit:function(t,e){console.log("aaa",e.name);var a;a=JSON.parse(s()(e)),this.$router.push({name:"labeledit",params:a})},handletagsDel:function(t,e){var a=this,n=e;this.$confirm("此操作将删除该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={_hy:"tagsdel",tags:[{name:"id",val:[n.id],op:"in"}]};console.log("upData:",t),a.callSrvAct("/act",t).then(function(t){a.refreshPage("tags","/actq","tagslist")})}).catch(function(t){a.$message.error(t)})},show3:function(){var t=this;console.log("多选ID",this.tagsMultiSel);var e=this;this.$confirm("此操作将删除该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var a={_hy:"tagsdel",tags:[{name:"id",val:e.tagsMultiSel,op:"in"}]};console.log("upData:",a),t.callSrvAct("/act",a).then(function(e){t.refreshPage("tags","/actq","tagslist")})}).catch(function(e){t.$message.error(e)})},handleChange:function(t){console.log("hahaha",t);for(var e=[],a=0;a<t.length;a++)e.push(t[a].id);this.tagsMultiSel=e,this.dataArr=t,console.log("qqq",t)}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},c=(a("Ifsz"),a("KHd+")),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticStyle:{height:"100%"},attrs:{direction:"vertical"}},[a("div",{staticStyle:{padding:"20px",display:"flex"}},[a("div",[a("span",[t._v("员工姓名\n            ")]),t._v(" "),a("el-input",{staticStyle:{width:"200px"},model:{value:t.tagsQueryArr[0].val,callback:function(e){t.$set(t.tagsQueryArr[0],"val",e)},expression:"tagsQueryArr[0].val"}})],1),t._v(" "),a("div",{staticStyle:{"margin-left":"30px"}},[a("span",[t._v("标签类型\n            ")]),t._v(" "),a("el-select",{model:{value:t.tagsQueryArr[1].val,callback:function(e){t.$set(t.tagsQueryArr[1],"val",e)},expression:"tagsQueryArr[1].val"}},t._l(t.lableArr,function(t,e){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1)]),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[a("span",[t._v("搜索\n            ")])]),t._v(" "),a("el-button",{on:{click:t.importing}},[a("span",[t._v("批量导入\n            ")])]),t._v(" "),a("el-button",{on:{click:t.exportExcel}},[a("span",[t._v("批量导出\n            ")])]),t._v(" "),a("el-button",{on:{click:t.add}},[a("span",[t._v("新增\n            ")])]),t._v(" "),a("el-button",{on:{click:t.show3}},[a("span",[t._v("批量删除\n            ")])])],1),t._v(" "),a("el-table",{ref:"tags",attrs:{stripe:!0,border:!0,height:t.tableHeight,"header-cell-style":{background:"#E6F4FF",fontWeight:"500",color:"#0A51C4",borderBottom:"2px solid #4093F7"},data:t.tagsData},on:{"selection-change":t.handleChange}},[a("el-table-column",{attrs:{label:"全选",type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{label:"姓名",prop:"name",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"type",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"厂商",prop:"factory",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticStyle:{"margin-top":"10px"}},[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handlebasemanEdit(e.$index,e.row)}}},[a("span",[t._v("编辑\n                        ")])]),t._v(" "),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){t.handletagsDel(e.$index,e.row)}}},[a("span",[t._v("删除\n                        ")])])],1)]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{ref:"tags",attrs:{total:t.tagsTotalRec,"page-count":t.tagsTotalPage,layout:"total, sizes, prev, pager, next"},on:{"size-change":t.tagsSizeChange,"current-change":t.tagsCurChange}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.labelshow,title:"导入"},on:{"update:visible":function(e){t.labelshow=e}}},[a("labelimport",{attrs:{paramsObj:t.labelInstEdit},on:{submitOk:t.editlabelSetOK,submitClose:t.showEditLabelSet}})],1)],1)},[],!1,null,"11a686b5",null);u.options.__file="index.vue";e.default=u.exports},ArKi:function(t,e,a){"use strict";var n=a("NOdl");a.n(n).a},Ifsz:function(t,e,a){"use strict";var n=a("VD8W");a.n(n).a},NOdl:function(t,e,a){},VD8W:function(t,e,a){},loDg:function(t,e,a){"use strict";a.r(e);var n=a("P2sY"),o=a.n(n),l=a("EJiy"),s=a.n(l),i={name:"labelimport",mixins:[a("y2a5").a],components:{},props:{},data:function(){return{importData:[],num:0,success:0,fail:0,repeat:0}},mounted:function(){},methods:{importfxx:function(t){var e=this;e.num=0,e.success=0,e.fail=0,e.repeat=0,console.log(this.$refs.upload.value),this.file=event.currentTarget.files[0],console.log(this.file);var a=this.file,n=new FileReader;FileReader.prototype.readAsBinaryString=function(t){var a,n,o="";window.console.log(this);var l=new FileReader;l.onload=function(t){window.console.log(t);for(var s=new Uint8Array(l.result),i=s.byteLength,r=0;r<i;r++)o+=String.fromCharCode(s[r]);a=XLSX.read(o,{type:"binary"}),n=XLSX.utils.sheet_to_json(a.Sheets[a.SheetNames[0]]),window.console.log("呵呵呵",n),console.log("哈哈哈",n);for(var c=[],u=0;u<n.length;u++)c.push({name:n[u].姓名,type:n[u].类型,factory:n[u].厂商});window.console.log(c),e.importData=c,console.log(e.$refs.upload.value),console.log(document.getElementById("upload").value)},l.readAsArrayBuffer(t)},n.readAsBinaryString(a)},fixdata:function(t){for(var e="",a=0,n=10240;a<t.byteLength/n;++a)e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(a*n,a*n+n)));return e+=String.fromCharCode.apply(null,new Uint8Array(t.slice(a*n)))},SizeChange:function(){},CurChange:function(){},exportExcel:function(){this.num=0,this.success=0,this.fail=0,this.repeat=0;var t=XLSX.utils.json_to_sheet([{"姓名":"","类型":"","厂商":""}]);console.log(t),this.openDownloadDialog(this.sheet2blob(t),"模板教程.xlsx")},sheet2blob:function(t,e){var a={SheetNames:[e=e||"sheet1"],Sheets:{}};a.Sheets[e]=t;var n=XLSX.write(a,{bookType:"xlsx",bookSST:!1,type:"binary"});return new Blob([function(t){for(var e=new ArrayBuffer(t.length),a=new Uint8Array(e),n=0;n!=t.length;++n)a[n]=255&t.charCodeAt(n);return e}(n)],{type:"application/octet-stream"})},openDownloadDialog:function(t,e){"object"==(void 0===t?"undefined":s()(t))&&t instanceof Blob&&(t=URL.createObjectURL(t));var a,n=document.createElement("a");n.href=t,n.download=e||"",window.MouseEvent?a=new MouseEvent("click"):(a=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),n.dispatchEvent(a)},uploadOk:function(){var t=this;this.num=0,this.success=0,this.fail=0,this.repeat=0,this.num=this.importData.length,console.log("上传数据",this.importData);for(var e=0;e<this.importData.length;e++){var a=o()({},this.importData[e]);console.log("数据",this.importData),a._hy="tagsadd",this.callSrvAct("/act",a).then(function(e){console.log("后台返回",e),"SUCCESS"==e.status?t.success=t.success+1:"FAILED"==e.status&&(t.fail=t.fail+1)})}}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=(a("ArKi"),a("KHd+")),c=Object(r.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[a("div",[a("el-row",{attrs:{autogenchild:!1,childcol:24}},[a("span",[t._v("提示：需保证上传的excel文件为单一文件\n            ")])]),t._v(" "),a("div",{staticStyle:{margin:"10px 0px"}},[a("span",[t._v("请先\n            ")]),t._v(" "),a("el-button",{on:{click:t.exportExcel}},[a("span",[t._v("下载模板和教程\n                ")])]),t._v(" "),a("span",[t._v("仔细阅读后，按要求填写车辆信息，并上传摄像机信息表格\n            ")])],1),t._v(" "),a("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[a("div",{staticStyle:{display:"flex",height:"36px","line-height":"35px"}},[a("span",[t._v("上传的文件：\n                ")]),t._v(" "),a("el-input",{staticStyle:{width:"250px"},attrs:{placeholder:"文件路径"}}),t._v(" "),a("el-input",{ref:"upload",attrs:{type:"file",id:"upload"},on:{change:function(e){t.importfxx(this)}}}),t._v(" "),a("el-button",{on:{click:t.uploadOk}},[a("span",[t._v("确认上传\n                    ")])])],1),t._v(" "),a("div",[a("span",[t._v("上传共\n                ")]),t._v(" "),a("span",[t._v(t._s(t.num)+"\n                ")]),t._v(" "),a("span",[t._v("条  成功\n                ")]),t._v(" "),a("span",{staticStyle:{color:"green"}},[t._v(t._s(t.success)+"\n                ")]),t._v(" "),a("span",{staticStyle:{color:"green"}},[t._v("条\n                ")]),t._v(" "),a("span",[t._v("失败\n                ")]),t._v(" "),a("span",{staticStyle:{color:"red"}},[t._v(t._s(t.fail)+"\n                ")]),t._v(" "),a("span",{staticStyle:{color:"red"}},[t._v("条\n                ")]),t._v(" "),a("span",[t._v("重复\n                ")]),t._v(" "),a("span",{staticStyle:{color:"blue"}},[t._v(t._s(t.repeat)+"\n                ")]),t._v(" "),a("span",{staticStyle:{color:"blue"}},[t._v("条\n                ")])])]),t._v(" "),a("el-table",{attrs:{data:t.importData,"header-cell-style":{background:"rgba(241,246,254,1)",fontWeight:"500",color:"#333333",fontSize:"16px","text-align":"center"}}},[a("el-table-column",{attrs:{label:"姓名",prop:"name"}}),t._v(" "),a("el-table-column",{attrs:{label:"类型",prop:"type"}}),t._v(" "),a("el-table-column",{attrs:{label:"厂商",prop:"factory"}})],1)],1)])},[],!1,null,"4398444a",null);c.options.__file="index.vue";e.default=c.exports}}]);