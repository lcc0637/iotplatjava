(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-0a0b"],{"5biZ":function(t,e,a){a("EnHN");var n=a("WEpk").Object;t.exports=function(t){return n.getOwnPropertyNames(t)}},"6bP5":function(t,e,a){"use strict";var n=a("Qq1u");a.n(n).a},DEEi:function(t,e,a){},EnHN:function(t,e,a){a("zn7N")("getOwnPropertyNames",function(){return a("A5Xg").f})},OyzN:function(t,e,a){t.exports={default:a("5biZ"),__esModule:!0}},PZHG:function(t,e,a){"use strict";var n=a("nZPP");a.n(n).a},Qq1u:function(t,e,a){},SmTk:function(t,e,a){"use strict";a.r(e);var n=a("OyzN"),s=a.n(n),i=a("gDS+"),r=a.n(i),o=a("y2a5"),l={name:"TreeTable",props:{showProps:{type:Object,required:!0},sortName:{type:String,default:""},keyPropType:{type:String,default:"number"},parentProp:{type:String,default:"parent_id"},fetchTreeData:{type:Function,required:!0}},data:function(){return{tableData:[]}},mounted:function(){var t="string"==this.keyPropType?"":-1;this.fetchTreeData(t,this.appendData)},methods:{showRow:function(t){return t.row._show?"animation:treeTableShow 1s;-webkit-animation:treeTableShow 1s;":"display:none;"},getTreeData:function(){return this.tableData},clearData:function(){this.tableData=[]},resetData:function(){this.tableData=[];var t="string"==this.keyPropType?"":-1;this.fetchTreeData(t,this.appendData)},expand:function(){for(var t=0;t<this.tableData.length;t++)if(this.tableData[t].hy_extra_num>1&&!this.tableData[t]._expanded){this.toggleExpanded(t);break}},collapse:function(){for(var t=0;t<this.tableData.length;t++)if(this.tableData[t].hy_extra_num>1&&this.tableData[t]._expanded){this.toggleExpanded(t);break}},appendData:function(t,e){if(e&&e.length>0){for(var a=0,n=0,s=1,i=0;i<this.tableData.length;i++)if(this.tableData[i][this.showProps.key]==t){a=i+1,s=(n=this.tableData[i]._level)+1;break}if(this.isSort){var r=a;for(r=a;r<this.tableData.length;r++){if(this.tableData[r]._level==s&&this.tableData[r].sort>e[0].sort){a=r;break}if(this.tableData[r]._level<s){a=r;break}}r<0&&(r=0),r>this.tableData.length&&(a=this.tableData.length)}for(var o=e.length-1;o>-1;o--)e[o]._expanded=!1,e[o]._show=!0,e[o]._level=n+1,this.tableData.splice(a,0,e[o])}},deleteChildData:function(t){if("string"==this.keyPropType){for(var e=this.tableData.length;e--;)if(this.tableData&&this.tableData[e]){var a=this.tableData[e][this.showProps.key];a&&a.length>=2&&a.substr(0,a.length-2)==t&&(this.tableData.splice(e,1),this.deleteChildData(a))}}else for(var n=this.tableData.length;n--;)if(this.tableData&&this.tableData[n]&&this.tableData[n][this.parentProp]==t){var s=this.tableData[n][this.showProps.key];this.tableData.splice(n,1),this.deleteChildData(s)}},deleteData:function(t){if(1==t.length){for(var e="",a="",n=void 0,s=0;s<this.tableData.length;s++)if(this.tableData[s].id==t[0]){n=this.tableData[s],"string"==this.keyPropType?e=(a=n[this.showProps.key])&&a.length>=2?a.substr(0,a.length-2):"":(a=n[this.showProps.key],e=n[this.parentProp]),this.tableData.splice(s,1);break}for(s=0;s<this.tableData.length;s++)if(this.tableData[s][this.showProps.key]==e){this.tableData[s].hy_extra_num>1&&(this.tableData[s].hy_extra_num=this.tableData[s].hy_extra_num-1);break}a&&a.length>0&&this.deleteChildData(a)}},upInstProp:function(t,e,a){for(var n=0;n<this.tableData.length;n++)if(this.tableData[n].id==t){this.tableData[n][e]=a;break}},adjustUpInst:function(t){},adjustSort:function(t){var e=void 0;"string"==this.keyPropType?(e="",t[this.showProps.key]&&t[this.showProps.key].length>2&&(e=t[this.showProps.key].substr(0,t[this.showProps.key].length-2))):"number"==this.showProps.key&&(e=t[this.parentProp]);for(var a=-1,n=0;n<this.tableData.length;n++)if(this.tableData[n][this.showProps.key]==t[this.showProps.key]){a=n;break}a>-1&&this.tableData.splice(a,1);for(var s=-1,i=0;i<this.tableData.length;i++)if(this.tableData[i][this.showProps.key]!=e){if(this.tableData[i]._level==t._level&&(s<0&&(s=i),this.tableData[i].sort>t.sort))return void this.tableData.splice(i,0,t);if(s>0&&this.tableData[i]._level<t._level)return void this.tableData.splice(i,0,t)}else s=i+1;this.tableData.push(t)},toggleShow:function(t,e,a,n){for(var s=e;s<t.length;s++)this.isPcRelation(a,t[s])&&(t[s]._show=n,t[s].hy_extra_num>1&&t[s]._expanded?this.toggleShow(t,s+1,t[s][this.showProps.key],n):this.toggleShow(t,s+1,t[s][this.showProps.key],!1))},isPcRelation:function(t,e){if(!e)return!1;if(console.log("isPcRelation:",t,e),"string"==this.keyPropType)return console.log("222:",t,e.code),0==e.code.indexOf(t);if("number"==this.keyPropType){console.log("333:",t,e[this.parentProp],this.parentProp);var a=e[this.parentProp]==t;return console.log("test:",a),a}return console.log("kdkkdk"),!1},toggleExpanded:function(t){console.log("trIndex:",t);var e=this.tableData[t];e._expanded=!e._expanded;var a=!!e._expanded;if(console.log("trIndex data:",t,e),e.hy_extra_num>1){for(var n=!1,s=t+1;s<this.tableData.length;s++)if(this.isPcRelation(e[this.showProps.key],this.tableData[s])){n=!0;break}console.log("childDataExist :",n),n?(console.log("toggleShow :"),this.toggleShow(this.tableData,t+1,e[this.showProps.key],a)):(console.log("fetchTreeData :"),this.fetchTreeData&&this.fetchTreeData(e[this.showProps.key],this.appendData))}}}},h=(a("6bP5"),a("PZHG"),a("KHd+")),c=Object(h.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("el-table",{staticStyle:{width:"100%"},attrs:{data:this.tableData,stripe:"",border:"","row-style":this.showRow}},[this._t("default")],2)},[],!1,null,"ee75c35c",null);c.options.__file="index.vue";var p=c.exports,u={name:"rolepage",mixins:[o.a],components:{TreeTable:p},data:function(){return{pageQueryVisible:!1,pageQueryInit:[{name:"title",val:"",op:"like"}],pageQueryArr:[{name:"title",val:"",op:"like"}],pageSortParas:[{name:"sort",orderV:"asc",tb:"l"}],pageCbPage:this.gen_list_cb("page"),btnQueryArr:[{name:"page_id",val:[],op:"in"}],btnSortParas:[{name:"page_id",orderV:"asc"},{name:"sort",orderV:"asc"}],btnRecOfPage:1e4,btnCurPage:1,input:"",pageMultiSel:[],selection:!1,value:"全部",pageTotalRec:0,pageTotalPage:0,pageRecOfPage:1e4,pageCurPage:1}},mounted:function(){console.log("pp:",this.$route.params)},methods:{handleClose:function(){this.$router.go(-1)},handleQuery:function(){this.pageQueryVisible=!this.pageQueryVisible},pageMultiSelChange:function(t){if(console.log("multi sel dd:",t),this.pageMultiSel){for(var e=[],a=0;a<t.length;a++)e.push(t[a].id);this.pageMultiSel=e}},getPageTTData:function(t,e){var a=this;console.log("kkdkdk ---------- ");var n=JSON.parse(r()(this.pageQueryArr));t>0&&n.push({name:"parent_id",val:t}),console.log("queryParas...",n);var s={_hy:"rolepagemmtree",cpds:[{_hy:"tree",qps:n,sps:this.pageSortParas},{_hy:"query",qps:[{name:"page_id",val:"_hyl_0.*.id",op:"in"},{name:"role_id",val:this.$route.params.id,op:"="}]},{_hy:"query",qps:[{name:"page_id",val:"_hyl_0.*.id",op:"in"}],sps:this.btnSortParas},{_hy:"query",qps:[{name:"btn_id",val:"_hyl_2.*.id",op:"in"},{name:"role_id",val:this.$route.params.id,op:"="}]}]},i=[];this.callSrvAct("/actqs",s).then(function(n){var s="";if(n.data[1]&&!!n.data[1].length>0){s=",";for(var r=0;r<n.data[1].length;r++)s=s+n.data[1][r].page_id+","}var o="";if(n.data[3]&&!!n.data[3].length>0){o=",";for(var l=0;l<n.data[3].length;l++)o=o+n.data[3][l].btn_id+","}if(n.data[0]&&!!n.data[0].length>0){i=n.data[0]||[];for(var h=0;h<i.length;h++)if(s.indexOf(","+i[h].id+",")>-1?i[h].join_id=i[h].id:i[h].join_id=0,i[h].btn_sels=[],i[h].btn_srves=[],n.data[2]&&!!n.data[2].length>0)for(var c=0;c<n.data[2].length;c++)n.data[2][c].page_id==i[h].id&&(i[h].btn_srves.push(n.data[2][c]),o.indexOf(","+n.data[2][c].id+",")>-1&&i[h].btn_sels.push(n.data[2][c].id))}console.log("cbData:",i),e?e(t,i):a.$refs.pageTreeTable.appendData(t,i)})},_searchQuery:function(){this.curPage=1,this.$refs.pageTreeTable.resetData()},_resetQuery:function(){this.pageQueryArr=JSON.parse(r()(this.pageQueryInit))},getSelBtnes:function(t,e,a){for(var n=0;n<t.length;n++)if(t[n].btn_sels&&t[n].btn_sels.length>0){for(var s=!1,i=0;i<t[n].btn_sels.length;i++)!t[n].btn_srves[i].join_id&&a?(e.push(t[n].btn_sels[i]),s=!0):t[n].btn_srves[i].join_id&&!a&&e.push(t[n].btn_sels[i]);if(s)(","+this.pageMultiSel.join(",")+",").indexOf(","+t[n].id)<0&&this.pageMultiSel.push(t[n].id)}if(t&&t.length>0)for(var r=0;r<t.length;r++)t[r].children&&t[r].children.length>0&&this.getSelBtnes(t[r].children,e,a)},handleJoin:function(t,e){var a=this,n={_hy:"rolepagejoin",role_page:[{role_id:this.$route.params.id,page_id:e.id}]};this.callSrvAct("/act",n).then(function(t){e.join_id=e.id}).catch(function(t){a.$message.error(t)})},handleSub:function(t,e){var a=this,n=(this.$route.params.id,e.id,{_hy:"rolepagesub",role_page:[{name:"role_id",val:this.$route.params.id,op:"="},{name:"page_id",val:[e.id],op:"in"}]});this.callSrvAct("/act",n).then(function(t){e.join_id=0}).catch(function(t){a.$message.error(t)})},handleSet:function(t,e){for(var a=[],n=0;n<e.btn_srves.length;n++)a.push(e.btn_srves[n].id);for(var s=e.btn_sels,i=[],r=0;r<s.length;r++)i.push({role_id:this.$route.params.id,btn_id:s[r]});var o={_hy:"rolebtnset",role_btn:i,role_btn_ids:a};console.log("upData:",o),this.callSrvAct("/act",o).then(function(t){console.log("res:",t)})},isObjEqual:function(t,e){var a=s()(t),n=s()(e);if(a.length!=n.length)return!1;for(var i=0,r=a.length;i<r;i++){var o=a[i];if(t[o]!==e[o])return!1}return!0},rowAllChecked:function(t){return!(!t.btn_sels||!t.btn_srves||t.btn_srves.length<1)&&t.btn_sels.length==t.btn_srves.length},handleCheckAllChange:function(t){if(t.btn_srves)if(t.btn_sels||(t.btn_sels=[]),t.btn_sels.length!=t.btn_srves.length){for(var e=[],a=0;a<t.btn_srves.length;a++)e.push(t.btn_srves[a].id);t.btn_sels=e}else t.btn_sels=[]},shows:function(){this.show=!this.show},handleCollapse:function(){for(var t=0;t<this.expands.length;t++)for(var e=0;e<this.tableData.length;e++)if(parseInt(this.expands[t])==this.tableData[e].id&&this.$refs.enen.toggleRowExpansion(this.tableData[e],!1),this.tableData[e].hasOwnProperty("children"))for(var a=0;a<this.tableData[e].children.length;a++)parseInt(this.expands[t])==this.tableData[e].children[a].id&&this.$refs.enen.toggleRowExpansion(this.tableData[e].children[a],!1)},handleRefresh:function(){this.curPage=1,this.$refs.pageTreeTable.resetData()}}},g=(a("b6kP"),Object(h.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{attrs:{direction:"vertical"}},[a("div",[a("span",[t._v("选择权限：\n        ")])]),t._v(" "),a("div",{staticStyle:{"padding-left":"70px"}},[a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("全选\n                ")])])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("人脸识别\n                ")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px","margin-left":"100px"}},[a("el-checkbox",[a("span",[t._v("部门管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("人员管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("门禁管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("权限管理\n                    ")])])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("车辆识别\n                ")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px","margin-left":"100px"}},[a("el-checkbox",[a("span",[t._v("车辆白名单管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("车辆闸机管理\n                    ")])])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("算法管理\n                ")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px","margin-left":"100px"}},[a("el-checkbox",[a("span",[t._v("摄像机管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("算法管理\n                    ")])])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("实时监控\n                ")])])],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("人员定位\n                ")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px","margin-left":"100px"}},[a("el-checkbox",[a("span",[t._v("预警管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("电子围栏管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("地图管理\n                    ")])])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("物联网\n                ")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"10px","margin-left":"100px"}},[a("el-checkbox",[a("span",[t._v("设备管理\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("数据流模板\n                    ")])]),t._v(" "),a("el-checkbox",[a("span",[t._v("触发器管理\n                    ")])])],1)],1),t._v(" "),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-checkbox",[a("span",{staticStyle:{"font-size":"18px",color:"#000000"}},[t._v("时空数据管理\n                ")])])],1)]),t._v(" "),a("div",{staticStyle:{"text-align":"center","margin-top":"30px"}},[a("el-button",[a("span",[t._v("重置\n            ")])]),t._v(" "),a("el-button",{staticStyle:{"background-color":"#317EF3"}},[a("span",{staticStyle:{color:"#ffffff"}},[t._v("保存\n            ")])])],1)])},[],!1,null,"3416ee78",null));g.options.__file="index.vue";e.default=g.exports},b6kP:function(t,e,a){"use strict";var n=a("DEEi");a.n(n).a},nZPP:function(t,e,a){},y2a5:function(t,e,a){"use strict";var n=a("gDS+"),s=a.n(n),i=a("4d7F"),r=a.n(i);e.a={methods:{cb_null:function(t){return!1},cb_goBack:function(t){return this.$router.go(-1),!0},cb_success:function(t){return!(!t.status||"SUCCESS"!=t.status)||(this.$message.error(t.msg),!1)},cb_showMess:function(t){return this.$message.success(t.msg),!0},gen_sameValue:function(t,e){return function(a,n,s){n!=t?s(new Error(e)):s()}},refreshCaptcha:function(t){t.preventDefault(),t.target.src=this.hysrvport+"/captcha?"+Math.random()},add_authToken:function(t){return t.length<1?"":t=t.indexOf("?")>-1?t+"&Authorization="+this.apiSrv.token:t+"?Authorization="+this.apiSrv.token},callServer:function(t,e,a){var n=this;this.apiSrv.callServer(t,e).then(function(t){if(console.log("res ------",t),a)for(var e=0;e<a.length;e++){if(!a[e](t))break}}).catch(function(t){console.log("err:",t),n.$message.error(t)})},callSrvAct:function(t,e){var a=this;return new r.a(function(n,s){a.apiSrv.callServer(t,e).then(function(t){t.status&&"SUCCESS"==t.status?n(t):(console.log("res:",t),a.$message.error(t.msg))}).catch(function(t){console.log("err:",t),a.$message.error(t)})})},gen_list_cb:function(t,e){var a=this;if(!t||t.length<1)return this.cb_null;var n=t+"Data",s=t+"TotalRec",i=t+"TotalPage",r=t+"RecOfPage",o=t+"CurPage";return function(t){return e&&1==e&&t.data.cp>1?a[n]=a[n].concat(t.data.pageData||[]):a[n]=t.data.pageData||[],a[s]=t.data.totalRec,a[r]=t.data.rop,a[o]=t.data.cp,a[i]=t.data.rop>0?Math.ceil(t.data.totalRec/t.data.rop):0,t.data.detailData&&(a[n+"dData"]=t.data.detailData||[]),!0}},gen_selmulti_change:function(t){var e=this;if(!t||t.length<1)return this.cb_null;var a=t+"MultiSel";return function(t){if(e[a]){for(var n=[],s=0;s<t.length;s++)n.push(t[s].id);e[a]=n}}},refreshPage2:function(t,e,a,n,i){var r=t+"QueryArr",o=t+"CbPage",l=JSON.parse(s()(this[r]));if(l&&l.length>0)for(var h=l.length-1;h>-1;h--)console.log("qpsArr[i].val",l[h].val,0==l[h].val,""!=l[h].val),0==l[h].val&&(console.log("i:",h),l.splice(h,1));console.log("qpsArr:",l,this[r]);var c={qps:l||"",rop:a,cp:n};return this[t+"SortParas"]&&(c.sps=this[t+"SortParas"]),c._hy=i,this.callServer(e,c,[this.cb_success,this[o]])},refreshPage:function(t,e,a){var n=t+"RecOfPage",s=t+"CurPage";this[s]<1&&(this[s]=1),this.refreshPage2(t,e,this[n],this[s],a)},queryPageData:function(t,e,a,n,i){if(!t||t.length<1)return this.cb_null;var r=t+"QueryArr",o=JSON.parse(s()(this[r]));if(o&&o.length>0)for(var l=o.length-1;l>-1;l--)0==o[l].val&&o.splice(l,1);console.log("qpsArr:",o);var h={qps:o||[],rop:a,cp:n};return this[t+"SortParas"]&&(h.sps=this[t+"SortParas"]),this.callServer(e,h,i)}}}},zn7N:function(t,e,a){var n=a("Y7ZC"),s=a("WEpk"),i=a("KUxP");t.exports=function(t,e){var a=(s.Object||{})[t]||Object[t],r={};r[t]=e(a),n(n.S+n.F*i(function(){a(1)}),"Object",r)}}}]);