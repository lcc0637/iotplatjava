(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-422d"],{K1Pb:function(t,e,n){"use strict";n.r(e);var a=n("EJiy"),r=n.n(a),i=n("gDS+"),o=n.n(i),l={name:"briman",mixins:[n("y2a5").a],components:{},props:{},data:function(){return{brimanData:[],brimanTotalRec:0,brimanTotalPage:0,brimanRecOfPage:10,brimanCurPage:1,brimanCbPage:this.gen_list_cb("briman"),brimanQueryArr:[{name:"title",val:"",op:"like",tb:"briman"},{name:"state",val:"",op:"like",tb:"briman"}],brimanQueryInit:[{name:"title",val:"",op:"like",tb:"briman"},{name:"state",val:"",op:"like",tb:"briman"}],brimanMultiSel:[],brimanSortParas:[],tableHeight:window.innerHeight-500}},mounted:function(){this.refreshPage("briman","/actq","brimanlist")},methods:{brimanMultiSelChange:function(t){this.brimanMultiSel=t},brimanQuery:function(){this.refreshPage2("briman","/actq",this.remoteRecOfPage,1,"brimanlist")},brimanResetQuery:function(){this.brimanQueryArr=JSON.parse(o()(this.brimanQueryInit))},brimanSizeChange:function(t){this.refreshPage2("briman","/actq",t,this.brimanCurPage,"brimanlist")},brimanCurChange:function(t){this.refreshPage2("briman","/actq",this.brimanRecOfPage,t,"brimanlist")},handlebrimanDel:function(t,e){var n=this,a=e;console.log("哈哈",e),this.$confirm("此操作将删除该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={_hy:"brimandel",briman:[{name:"id",val:[a.id],op:"in"}]};console.log("upData:",t),n.callSrvAct("/act",t).then(function(t){n.refreshPage("briman","/actq","brimanlist")})}).catch(function(t){n.$message.error(t)})},handlebrimanEdit:function(t,e){console.log("aaa",e.address);var n;n=JSON.parse(o()(e)),this.$router.push({name:"brimanedit",params:n})},show3:function(){var t=this;console.log("多选ID",this.brimanMultiSel);var e=this;this.$confirm("此操作将删除该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var n={_hy:"brimandel",briman:[{name:"id",val:e.brimanMultiSel,op:"in"}]};console.log("upData:",n),t.callSrvAct("/act",n).then(function(e){t.refreshPage("briman","/actq","brimanlist")})}).catch(function(e){t.$message.error(e)})},handleChange:function(t){console.log("hahaha",t);for(var e=[],n=0;n<t.length;n++)e.push(t[n].id);this.brimanMultiSel=e,this.dataArr=t,console.log("qqq",t)},add:function(){this.$router.push({name:"brimanedit"})},importing:function(){this.$router.push({name:"brimanimport"})},exporting:function(){for(var t=[],e=0;e<this.brimanData.length;e++)t.push({"设备名称":this.brimanData[e].title,"IP地址":this.brimanData[e].ipaddress,"设备状态":this.brimanData[e].state,"厂商":this.brimanData[e].factory,"信号强度":this.brimanData[e].signales});var n=XLSX.utils.json_to_sheet(t);console.log(n),this.openDownloadDialog(this.sheet2blob(n),"下载1.xlsx")},sheet2blob:function(t,e){var n={SheetNames:[e=e||"sheet1"],Sheets:{}};n.Sheets[e]=t;var a=XLSX.write(n,{bookType:"xlsx",bookSST:!1,type:"binary"});return new Blob([function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),a=0;a!=t.length;++a)n[a]=255&t.charCodeAt(a);return e}(a)],{type:"application/octet-stream"})},openDownloadDialog:function(t,e){"object"==(void 0===t?"undefined":r()(t))&&t instanceof Blob&&(t=URL.createObjectURL(t));var n,a=document.createElement("a");a.href=t,a.download=e||"",window.MouseEvent?n=new MouseEvent("click"):(n=document.createEvent("MouseEvents")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(n)},search:function(){this.refreshPage("briman","/actq","brimanlist")}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=(n("N1y6"),n("KHd+")),c=Object(s.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"100%"},attrs:{direction:"vertical"}},[n("div",{staticStyle:{"margin-left":"30px"}},[n("span",[t._v("设备名称\n        ")]),t._v(" "),n("el-input",{staticStyle:{width:"300px"},model:{value:t.brimanQueryArr[0].val,callback:function(e){t.$set(t.brimanQueryArr[0],"val",e)},expression:"brimanQueryArr[0].val"}}),t._v(" "),n("span",[t._v("设备状态\n        ")]),t._v(" "),n("el-select",{staticStyle:{width:"300px"},model:{value:t.brimanQueryArr[1].val,callback:function(e){t.$set(t.brimanQueryArr[1],"val",e)},expression:"brimanQueryArr[1].val"}},[n("el-option")],1),t._v(" "),n("el-button",{staticStyle:{"margin-left":"30px"},on:{click:t.search}},[n("span",[t._v("搜索\n            ")])])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"30px","margin-left":"30px"}},[n("el-button",{on:{click:t.importing}},[n("span",[t._v("批量导入\n            ")])]),t._v(" "),n("el-button",{on:{click:t.exporting}},[n("span",[t._v("批量导出\n            ")])]),t._v(" "),n("el-button",{on:{click:t.add}},[n("span",[t._v("新增\n            ")])]),t._v(" "),n("el-button",{on:{click:t.show3}},[n("span",[t._v("批量删除\n            ")])])],1),t._v(" "),n("el-table",{ref:"briman",staticStyle:{"margin-top":"10px"},attrs:{stripe:!0,border:!0,height:t.tableHeight,"header-cell-style":{background:"#E6F4FF",fontWeight:"500",color:"#0A51C4",borderBottom:"2px solid #4093F7"},data:t.brimanData},on:{"selection-change":t.handleChange}},[n("el-table-column",{attrs:{label:"全选",type:"selection"}}),t._v(" "),n("el-table-column",{attrs:{label:"设备名称",prop:"title",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"IP地址",prop:"ipaddress",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"设备状态",prop:"state",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"厂商",prop:"factory",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"信号强度",prop:"signales",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticStyle:{"margin-top":"10px"}},[n("el-button",{on:{click:function(n){t.handlebrimanEdit(e.$index,e.row)}}},[n("span",[t._v("编辑\n                        ")])]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){t.handlebrimanDel(e.$index,e.row)}}},[n("span",[t._v("删除\n                        ")])])],1)]}}])})],1),t._v(" "),n("el-pagination",{staticStyle:{"text-align":"center"},attrs:{total:t.brimanTotalRec,"page-count":t.brimanTotalPage,layout:"total, sizes, prev, pager, next"},on:{"size-change":t.brimanSizeChange,"current-change":t.brimanCurChange}})],1)},[],!1,null,"23e320cc",null);c.options.__file="index.vue";e.default=c.exports},N1y6:function(t,e,n){"use strict";var a=n("pMtW");n.n(a).a},pMtW:function(t,e,n){},y2a5:function(t,e,n){"use strict";var a=n("gDS+"),r=n.n(a),i=n("4d7F"),o=n.n(i);e.a={methods:{cb_null:function(t){return!1},cb_goBack:function(t){return this.$router.go(-1),!0},cb_success:function(t){return!(!t.status||"SUCCESS"!=t.status)||(this.$message.error(t.msg),!1)},cb_showMess:function(t){return this.$message.success(t.msg),!0},gen_sameValue:function(t,e){return function(n,a,r){a!=t?r(new Error(e)):r()}},refreshCaptcha:function(t){t.preventDefault(),t.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(t){return t.length<1?"":t=t.indexOf("?")>-1?t+"&Authorization="+this.apiSrv.token:t+"?Authorization="+this.apiSrv.token},callServer:function(t,e,n){var a=this;this.apiSrv.callServer(t,e).then(function(t){if(console.log("res ------",t),n)for(var e=0;e<n.length;e++){if(n[e])if(!n[e](t))break}}).catch(function(t){console.log("err:",t),a.$message.error(t)})},callSrvAct:function(t,e){var n=this;return new o.a(function(a,r){n.apiSrv.callServer(t,e).then(function(t){t.status&&"SUCCESS"==t.status?a(t):(console.log("res:",t),n.$message.error(t.msg))}).catch(function(t){console.log("err:",t),n.$message.error(t)})})},gen_list_cb:function(t,e){var n=this;if(!t||t.length<1)return this.cb_null;var a=t+"Data",r=t+"TotalRec",i=t+"TotalPage",o=t+"RecOfPage",l=t+"CurPage";return function(t){return e&&1==e&&t.data.cp>1?n[a]=n[a].concat(t.data.pageData||[]):n[a]=t.data.pageData||[],n[r]=t.data.totalRec,n[o]=t.data.rop,n[l]=t.data.cp,n[i]=t.data.rop>0?Math.ceil(t.data.totalRec/t.data.rop):0,t.data.detailData&&(n[a+"dData"]=t.data.detailData||[]),!0}},gen_selmulti_change:function(t){var e=this;if(!t||t.length<1)return this.cb_null;var n=t+"MultiSel";return function(t){if(e[n]){for(var a=[],r=0;r<t.length;r++)a.push(t[r].id);e[n]=a}}},refreshPage2:function(t,e,n,a,i,o){var l=t+"QueryArr",s=t+"CbPage",c=JSON.parse(r()(this[l]));if(c&&c.length>0)for(var u=c.length-1;u>-1;u--)console.log("qpsArr[i].val",c[u].val,0==c[u].val,""!=c[u].val),0==c[u].val&&(console.log("i:",u),c.splice(u,1));console.log("qpsArr:",c,this[l]);var h={qps:c||"",rop:n,cp:a};return this[t+"SortParas"]&&(h.sps=this[t+"SortParas"]),h._hy=i,this.callServer(e,h,[this.cb_success,this[s],o])},refreshPage:function(t,e,n,a){var r=t+"RecOfPage",i=t+"CurPage";this[i]<1&&(this[i]=1),this.refreshPage2(t,e,this[r],this[i],n,a)},queryPageData:function(t,e,n,a,i,o){if(!t||t.length<1)return this.cb_null;var l=t+"QueryArr",s=JSON.parse(r()(this[l]));if(s&&s.length>0)for(var c=s.length-1;c>-1;c--)0==s[c].val&&s.splice(c,1);console.log("qpsArr:",s);var u={qps:s||[],rop:n,cp:a};return this[t+"SortParas"]&&(u.sps=this[t+"SortParas"]),u._hy=i,this.callServer(e,u,o)}}}}}]);