(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d2ab","chunk-a410","chunk-608e","chunk-cc08"],{"2uve":function(t,e,a){},"3WsS":function(t,e,a){"use strict";a.r(e);var r,n=a("gDS+"),l=a.n(n),s=a("YEIV"),i=a.n(s),o=a("JYr9"),u=a("twYc"),c=a("uiSD"),p={name:"algorithmm",mixins:[a("y2a5").a],components:(r={Restart:o.default,Stopit:u.default,Pushpeople:c.default},i()(r,"Restart",o.default),i()(r,"Stopit",u.default),r),props:{},data:function(){return{algorithmData:[],algorithmTotalRec:0,algorithmTotalPage:0,algorithmRecOfPage:10,algorithmCurPage:1,algorithmCbPage:this.gen_list_cb("algorithm"),algorithmQueryArr:[{name:"algorithm_id",val:0,tb:"algorithm"},{name:"camera_id",val:0,tb:"algorithm"},{name:"status",val:"",op:"like",tb:"algorithm"},{name:"user_id",val:0,tb:"algorithm"}],algorithmQueryInit:[{name:"algorithm_id",val:0,tb:"algorithm"},{name:"camera_id",val:0,tb:"algorithm"},{name:"status",val:"",op:"like",tb:"algorithm"},{name:"user_id",val:0,tb:"algorithm"}],algorithmMultiSel:[],algorithmSortParas:[{name:"title",tb:"algorithm",orderV:"asc"}],show:!1,restartEdit:null,show1:!1,stopitEdit:null,show3:!1,pushpeopleEdits:null,runstate:[{value:"",label:"全部"},{value:"运行中",label:"运行中"},{value:"异常",label:"异常"}],crameaData:[],peopleData:[],countData:[]}},mounted:function(){var t=this;this.refreshPage("algorithm","/actq","algorithmlist");this.callSrvAct("/actq",{_hy:"cameralist",qps:[{name:"title",val:"",op:"like",tb:"cramea"},{name:"state",val:"",op:"like",tb:"cramea"}],sps:[{name:"title",tb:"cramea",orderV:"asc"}]}).then(function(e){console.log("摄像机信息",e),t.crameaData=e.data.pageData,t.crameaData.splice(0,0,{id:0,title:"全部"})});this.callSrvAct("/actq",{_hy:"pushuserlist",qps:[{name:"parent_title",val:"",op:"like",tb:"user"},{name:"title",val:"",op:"like",tb:"user"}],sps:[{name:"title",tb:"user",orderV:"asc"}]}).then(function(e){console.log("推送人员信息",e),t.peopleData=e.data.pageData,t.peopleData.splice(0,0,{id:0,title:"全部"})});this.callSrvAct("/actq",{_hy:"algorithmacclist",qps:[{name:"title",val:"",op:"like"}]}).then(function(e){console.log("算法信息",e),t.countData=e.data.pageData,t.countData.splice(0,0,{id:0,title:"全部"})})},methods:{algorithmMultiSelChange:function(t){this.algorithmMultiSel=t},algorithmQuery:function(){this.refreshPage2("algorithm","/actq",this.remoteRecOfPage,1,"algorithmlist")},algorithmResetQuery:function(){this.algorithmQueryArr=JSON.parse(l()(this.algorithmQueryInit))},algorithmSizeChange:function(t){this.refreshPage2("algorithm","/actq",t,this.algorithmCurPage,"algorithmlist")},algorithmCurChange:function(t){this.refreshPage2("algorithm","/actq",this.algorithmRecOfPage,t,"algorithmlist")},add:function(){this.$router.push({name:"seleype",params:null})},start:function(){this.show=!0,this.restartEdit=this.algorithmMultiSel},close:function(){this.show1=!0,this.stopitEdit=this.algorithmMultiSel},restartOK:function(){},restartSet:function(){},stopitOK:function(){},stopitSet:function(){},handleChange:function(t){this.algorithmMultiSel=t},handlestop:function(t,e){var a=this,r=e;this.$confirm("此操作将停止该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={_hy:"algorithmdel",algorithm:[{name:"id",val:[r.id],op:"in"}]};console.log("upData:",t),a.callSrvAct("/act",t).then(function(t){a.refreshPage("algorithm","/actq","algorithmlist")})}).catch(function(t){a.$message.error(t)})},handleSetup:function(t){this.pushpeopleEdits=JSON.parse(l()(t)),this.show3=!0},pushpeopleOKs:function(t){this.show3=!1,console.log("管理界面",t)},pushpeopleSets:function(){},search:function(){this.refreshPage("algorithm","/actq","algorithmlist")}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},h=(a("IM6N"),a("KHd+")),f=Object(h.a)(p,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{margin:"0px 10px"}},[a("span",[t._v("算法名称\n            ")]),t._v(" "),a("el-select",{model:{value:t.algorithmQueryArr[0].val,callback:function(e){t.$set(t.algorithmQueryArr[0],"val",e)},expression:"algorithmQueryArr[0].val"}},t._l(t.countData,function(t,e){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),t._v(" "),a("div",{staticStyle:{margin:"0px 10px"}},[a("span",[t._v("摄像机名称\n            ")]),t._v(" "),a("el-select",{model:{value:t.algorithmQueryArr[1].val,callback:function(e){t.$set(t.algorithmQueryArr[1],"val",e)},expression:"algorithmQueryArr[1].val"}},t._l(t.crameaData,function(t,e){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),t._v(" "),a("div",[a("span",[t._v("运行状态\n            ")]),t._v(" "),a("el-select",{model:{value:t.algorithmQueryArr[2].val,callback:function(e){t.$set(t.algorithmQueryArr[2],"val",e)},expression:"algorithmQueryArr[2].val"}},t._l(t.runstate,function(t,e){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("div",{staticStyle:{margin:"0px 10px"}},[a("span",[t._v("推送人员\n            ")]),t._v(" "),a("el-select",{model:{value:t.algorithmQueryArr[3].val,callback:function(e){t.$set(t.algorithmQueryArr[3],"val",e)},expression:"algorithmQueryArr[3].val"}},t._l(t.peopleData,function(t,e){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),t._v(" "),a("div",[a("el-button",{on:{click:t.search}},[a("span",[t._v("搜索\n                ")])])],1)]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px"}},[a("el-button",{on:{click:t.start}},[a("span",[t._v("批量重启\n            ")])]),t._v(" "),a("el-button",{on:{click:t.close}},[a("span",[t._v("批量停止\n            ")])]),t._v(" "),a("el-button",{on:{click:t.add}},[a("span",[t._v("新建任务\n            ")])])],1),t._v(" "),a("el-table",{ref:"algorithm",staticStyle:{margin:"10px 0px"},attrs:{"header-cell-style":{background:"rgba(241,246,254,1)",fontWeight:"500",color:"#333333",fontSize:"16px"},id:"algorithm",data:t.algorithmData},on:{"selection-change":t.handleChange}},[a("el-table-column",{attrs:{label:"全选",type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{label:"算法名称",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"摄像机名称",prop:"cameratitle"}}),t._v(" "),a("el-table-column",{attrs:{label:"运行状态",prop:"status"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.status)+"\n                ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"推送人员",prop:"user_title"}}),t._v(" "),a("el-table-column",{attrs:{label:"启动时间",prop:"opentime"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.gcomm.v2datetimestr(e.row.opentime))+"\n                ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",["异常"==e.row.status?a("el-button",[a("span",{staticStyle:{color:"#317EF3"}},[t._v("查看异常\n                        ")])]):t._e(),t._v(" "),"运行中"==e.row.status?a("el-button",{on:{click:function(a){t.handleSetup(e.row)}}},[a("span",{staticStyle:{color:"#317EF3"}},[t._v("设置\n                        ")])]):t._e(),t._v(" "),"运行中"==e.row.status?a("el-button",{on:{click:function(a){t.handlestop(e.$index,e.row)}}},[a("span",{staticStyle:{color:"#317EF3"}},[t._v("停止\n                        ")])]):t._e(),t._v(" "),"运行中"==e.row.status?a("el-button",[a("span",{staticStyle:{color:"#317EF3"}},[t._v("重启\n                        ")])]):t._e()],1)]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{attrs:{total:t.algorithmTotalRec,"page-count":t.algorithmTotalPage,layout:"total, sizes, prev, pager, next"},on:{"size-change":t.algorithmSizeChange,"current-change":t.algorithmCurChange}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.show,title:"重启"},on:{"update:visible":function(e){t.show=e}}},[a("restart",{attrs:{paramsObj:t.restartEdit},on:{submitOk:t.restartOK,submitClose:t.restartSet}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.show1,title:"停止"},on:{"update:visible":function(e){t.show1=e}}},[a("stopit",{attrs:{paramsObj:t.stopitEdit},on:{submitOk:t.stopitOK,submitClose:t.stopitSet}})],1),t._v(" "),a("el-dialog",{attrs:{visible:t.show3,title:"选择推送人员","destroy-on-close":!0},on:{"update:visible":function(e){t.show3=e}}},[a("pushpeople",{attrs:{paramsObj:t.pushpeopleEdits},on:{submitOk:t.pushpeopleOKs,submitClose:t.pushpeopleSets}})],1)],1)},[],!1,null,"67d11e41",null);f.options.__file="index.vue";e.default=f.exports},"9NAq":function(t,e,a){},IM6N:function(t,e,a){"use strict";var r=a("S1zu");a.n(r).a},JYr9:function(t,e,a){"use strict";a.r(e);var r={name:"restart",mixins:[],components:{},props:{paramsObj:{type:Array,default:function(){return[]}}},data:function(){return{pobj:[]}},mounted:function(){this.pobj=this.paramsObj},methods:{},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},n=(a("v71k"),a("KHd+")),l=Object(n.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[a("div",{staticStyle:{display:"flex",margin:"10px 0px"}},[a("span",[t._v("总进度：\n        ")]),t._v(" "),a("el-progress",{staticStyle:{width:"200px"},attrs:{percentage:50,color:""}})],1),t._v(" "),a("el-table",{attrs:{data:t.pobj,"header-cell-style":{background:"rgba(241,246,254,1)",fontWeight:"500",color:"#333333",fontSize:"16px"}}},[a("el-table-column",{attrs:{label:"算法名称",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"摄像机名称",prop:"cameratitle"}}),t._v(" "),a("el-table-column",{attrs:{label:"启动时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.gcomm.v2datetimestr(e.row.opentime))+"\n                ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"重启进度"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-progress",{staticStyle:{width:"200px"},attrs:{percentage:50,color:""}})]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[a("el-button",[a("span",[t._v("关闭\n            ")])])],1)],1)},[],!1,null,"208d58e9",null);l.options.__file="index.vue";e.default=l.exports},LM7a:function(t,e,a){},Qq3a:function(t,e,a){"use strict";var r=a("LM7a");a.n(r).a},"RU/L":function(t,e,a){a("Rqdy");var r=a("WEpk").Object;t.exports=function(t,e,a){return r.defineProperty(t,e,a)}},Rqdy:function(t,e,a){var r=a("Y7ZC");r(r.S+r.F*!a("jmDH"),"Object",{defineProperty:a("2faE").f})},S1zu:function(t,e,a){},SEkw:function(t,e,a){t.exports={default:a("RU/L"),__esModule:!0}},YEIV:function(t,e,a){"use strict";e.__esModule=!0;var r=function(t){return t&&t.__esModule?t:{default:t}}(a("SEkw"));e.default=function(t,e,a){return e in t?(0,r.default)(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}},twYc:function(t,e,a){"use strict";a.r(e);var r={name:"stopit",mixins:[],components:{},props:{paramsObj:{type:Array,default:function(){return[]}}},data:function(){return{pobj:[]}},mounted:function(){this.pobj=this.paramsObj},methods:{},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},n=(a("Qq3a"),a("KHd+")),l=Object(n.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[a("div",{staticStyle:{display:"flex",margin:"10px 0px"}},[a("span",[t._v("总进度：\n        ")]),t._v(" "),a("el-progress",{staticStyle:{width:"200px"},attrs:{percentage:50,status:"success",color:""}})],1),t._v(" "),a("el-table",{attrs:{data:t.pobj,"header-cell-style":{background:"rgba(241,246,254,1)",fontWeight:"500",color:"#333333",fontSize:"16px"}}},[a("el-table-column",{attrs:{label:"算法名称",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"摄像机名称",prop:"cameratitle"}}),t._v(" "),a("el-table-column",{attrs:{label:"启动时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.gcomm.v2datetimestr(e.row.opentime))+"\n                ")])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"停止进度"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("el-progress",{staticStyle:{width:"200px"},attrs:{percentage:50,status:"success",color:""}})]}}])})],1),t._v(" "),a("div",{staticStyle:{"text-align":"right","margin-top":"10px"}},[a("el-button",[a("span",[t._v("关闭\n            ")])])],1)],1)},[],!1,null,"138054af",null);l.options.__file="index.vue";e.default=l.exports},uZ1Q:function(t,e,a){"use strict";var r=a("2uve");a.n(r).a},uiSD:function(t,e,a){"use strict";a.r(e);var r=a("gDS+"),n=a.n(r),l={name:"pushpeople",mixins:[a("y2a5").a],components:{},props:{paramsObj:{type:Object,default:function(){return{}}}},data:function(){return{pushuserData:[],pushuserTotalRec:0,pushuserTotalPage:0,pushuserRecOfPage:10,pushuserCurPage:1,pushuserCbPage:this.gen_list_cb("pushuser"),pushuserQueryArr:[{name:"parent_id",val:0,tb:"user"},{name:"title",val:"",op:"like",tb:"user"}],pushuserQueryInit:[{name:"parent_id",val:0,tb:"user"},{name:"title",val:"",op:"like",tb:"user"}],pushuserMultiSel:[],pushuserSortParas:[{name:"title",tb:"user",orderV:"asc"}],departmentArr:[],pobj:{}}},mounted:function(){var t=this;this.refreshPage("pushuser","/actq","pushuserlist");var e=this;this.callSrvAct("/actq",{_hy:"orgtt",qps:[{name:"title",val:"",op:"like"}],sps:[{name:"title",orderV:"asc"}]}).then(function(a){var r=a.data||[];console.log("部门数据",r),e.departmentArr=r,t.departmentArr.splice(0,0,{id:0,title:"全部"})}),this.pobj=this.paramsObj},methods:{pushuserMultiSelChange:function(t){this.pushuserMultiSel=t},pushuserQuery:function(){this.refreshPage2("pushuser","/actq",this.remoteRecOfPage,1,"pushuserlist")},pushuserResetQuery:function(){this.pushuserQueryArr=JSON.parse(n()(this.pushuserQueryInit))},pushuserSizeChange:function(t){this.refreshPage2("pushuser","/actq",t,this.pushuserCurPage,"pushuserlist")},pushuserCurChange:function(t){this.refreshPage2("pushuser","/actq",this.pushuserRecOfPage,t,"pushuserlist")},handleChange:function(t){this.pushuserMultiSel=t,console.log(this.pushuserMultiSel)},determine:function(){if(console.log("父组件传的",this.pobj),"id"in this.pobj){var t=this.pobj;t.user_id=this.pushuserMultiSel[0].id,t.user_title=this.pushuserMultiSel[0].title,this.$emit("submitOk",t)}else this.$emit("submitOk",this.pushuserMultiSel)},search:function(){this.refreshPage("pushuser","/actq","pushuserlist")}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},s=(a("uZ1Q"),a("KHd+")),i=Object(s.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[a("div",[a("el-select",{attrs:{placeholder:"请选择部门"},model:{value:t.pushuserQueryArr[0].val,callback:function(e){t.$set(t.pushuserQueryArr[0],"val",e)},expression:"pushuserQueryArr[0].val"}},t._l(t.departmentArr,function(t,e){return a("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),t._v(" "),a("el-input",{staticStyle:{width:"220px",margin:"0px 10px"},attrs:{placeholder:"请输入姓名"},model:{value:t.pushuserQueryArr[1].val,callback:function(e){t.$set(t.pushuserQueryArr[1],"val",e)},expression:"pushuserQueryArr[1].val"}}),t._v(" "),a("el-button",{on:{click:t.search}},[a("span",[t._v("搜索\n            ")])])],1),t._v(" "),a("el-table",{ref:"pushuser",staticStyle:{margin:"10px 0px"},attrs:{"header-cell-style":{background:"rgba(241,246,254,1)",fontWeight:"500",color:"#333333",fontSize:"16px"},data:t.pushuserData},on:{"selection-change":t.handleChange}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{label:"姓名",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"岗位",prop:"job_title"}}),t._v(" "),a("el-table-column",{attrs:{label:"手机号",prop:"mobile"}})],1),t._v(" "),a("div",{staticStyle:{"text-align":"center"}},[a("el-pagination",{attrs:{total:t.pushuserTotalRec,"page-count":t.pushuserTotalPage,layout:"total, sizes, prev, pager, next"},on:{"size-change":t.pushuserSizeChange,"current-change":t.pushuserCurChange}})],1),t._v(" "),a("div",{staticStyle:{"text-align":"right"}},[a("el-button",[a("span",[t._v("取消\n            ")])]),t._v(" "),a("el-button",{on:{click:t.determine}},[a("span",[t._v("确定\n            ")])])],1)],1)},[],!1,null,"45ff25ac",null);i.options.__file="index.vue";e.default=i.exports},v71k:function(t,e,a){"use strict";var r=a("9NAq");a.n(r).a},y2a5:function(t,e,a){"use strict";var r=a("gDS+"),n=a.n(r),l=a("4d7F"),s=a.n(l);e.a={methods:{cb_null:function(t){return!1},cb_goBack:function(t){return this.$router.go(-1),!0},cb_success:function(t){return!(!t.status||"SUCCESS"!=t.status)||(this.$message.error(t.msg),!1)},cb_showMess:function(t){return this.$message.success(t.msg),!0},gen_sameValue:function(t,e){return function(a,r,n){r!=t?n(new Error(e)):n()}},refreshCaptcha:function(t){t.preventDefault(),t.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(t){return t.length<1?"":t=t.indexOf("?")>-1?t+"&Authorization="+this.apiSrv.token:t+"?Authorization="+this.apiSrv.token},callServer:function(t,e,a){var r=this;this.apiSrv.callServer(t,e).then(function(t){if(console.log("res ------",t),a)for(var e=0;e<a.length;e++){if(!a[e](t))break}}).catch(function(t){console.log("err:",t),r.$message.error(t)})},callSrvAct:function(t,e){var a=this;return new s.a(function(r,n){a.apiSrv.callServer(t,e).then(function(t){t.status&&"SUCCESS"==t.status?r(t):(console.log("res:",t),a.$message.error(t.msg))}).catch(function(t){console.log("err:",t),a.$message.error(t)})})},gen_list_cb:function(t,e){var a=this;if(!t||t.length<1)return this.cb_null;var r=t+"Data",n=t+"TotalRec",l=t+"TotalPage",s=t+"RecOfPage",i=t+"CurPage";return function(t){return e&&1==e&&t.data.cp>1?a[r]=a[r].concat(t.data.pageData||[]):a[r]=t.data.pageData||[],a[n]=t.data.totalRec,a[s]=t.data.rop,a[i]=t.data.cp,a[l]=t.data.rop>0?Math.ceil(t.data.totalRec/t.data.rop):0,t.data.detailData&&(a[r+"dData"]=t.data.detailData||[]),!0}},gen_selmulti_change:function(t){var e=this;if(!t||t.length<1)return this.cb_null;var a=t+"MultiSel";return function(t){if(e[a]){for(var r=[],n=0;n<t.length;n++)r.push(t[n].id);e[a]=r}}},refreshPage2:function(t,e,a,r,l){var s=t+"QueryArr",i=t+"CbPage",o=JSON.parse(n()(this[s]));if(o&&o.length>0)for(var u=o.length-1;u>-1;u--)console.log("qpsArr[i].val",o[u].val,0==o[u].val,""!=o[u].val),0==o[u].val&&(console.log("i:",u),o.splice(u,1));console.log("qpsArr:",o,this[s]);var c={qps:o||"",rop:a,cp:r};return this[t+"SortParas"]&&(c.sps=this[t+"SortParas"]),c._hy=l,this.callServer(e,c,[this.cb_success,this[i]])},refreshPage:function(t,e,a){var r=t+"RecOfPage",n=t+"CurPage";this[n]<1&&(this[n]=1),this.refreshPage2(t,e,this[r],this[n],a)},queryPageData:function(t,e,a,r,l){if(!t||t.length<1)return this.cb_null;var s=t+"QueryArr",i=JSON.parse(n()(this[s]));if(i&&i.length>0)for(var o=i.length-1;o>-1;o--)0==i[o].val&&i.splice(o,1);console.log("qpsArr:",i);var u={qps:i||[],rop:a,cp:r};return this[t+"SortParas"]&&(u.sps=this[t+"SortParas"]),this.callServer(e,u,l)}}}}}]);