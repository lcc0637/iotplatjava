(window.webpackJsonp=window.webpackJsonp||[]).push([["879u"],{"879u":function(t,e,a){"use strict";a.r(e);var r=a("P2sY"),n=a.n(r),i={name:"devbuiltinlist",components:{},data:function(){return{tableData:[],totalRec:0,totalPage:0,recOfPage:10,curPage:1,queryArr:[""]}},mounted:function(){var t=this.$store.state.parampage.pageNumDict.devbuiltinlist,e=this.curPage,a=this.queryArr;t&&t.curPage&&(e=t.curPage),t&&t.queryArr&&(this.queryArr=t.queryArr,a=t.queryArr),this.getPageData({queryParas:a,recOfPage:this.recOfPage,curPage:e})},methods:{getSrvData:function(t,e,a,r,n){var i=this;this.loading=!0,this.apiSrv.callServer(e,t).then(function(t){i.loading=!1,t.status&&"SUCCESS"==t.status?n?n(t.data):i[a]=t.data||r:i.$message.error(t.msg)}).catch(function(t){i.$message.error(t),i.loading=!1})},getPageData:function(t){var e=this;this.getSrvData(t,"/devbuiltinfunclist?encode=genplat",null,[],function(t){e.tableData=t.pageData,e.recOfPage=t.recOfPage,e.totalRec=t.totalRec,e.totalPage=t.totalPage,e.curPage=t.curPage,e.$store.dispatch("setPageNum",{devbuiltinlist:{curPage:t.curPage,queryArr:e.queryArr}})})},searchData:function(){this.getPageData({queryParas:this.queryArr,recOfPage:this.recOfPage,curPage:1})},handleSizeChange:function(t){this.getPageData({queryParas:this.queryArr,recOfPage:t,curPage:this.curPage})},handleCurrentChange:function(t){this.getPageData({queryParas:this.queryArr,recOfPage:this.recOfPage,curPage:t})},_handleUpInst:function(t){var e=this;this.loading=!0,this.apiSrv.callServer("/devbuiltinfuncup",t).then(function(t){if(e.loading=!1,t.status&&"SUCCESS"==t.status){var a=e.gcomm.arr2StrCheckQuery(e.queryArr);e._getPageData({queryParas:a,recOfPage:e.recOfPage,curPage:e.curPage})}else e.$message.error(t.msg)}).catch(function(t){e.$message.error(t),e.loading=!1})},sortUp:function(t,e){var a=e,r=a.sort-1,n={id:a.id,sort:r};a.version&&a.version>0&&(n.version=a.version),this._handleUpInst(n)},sortDown:function(t,e){var a=e,r=a.sort+11,n={id:a.id,sort:r};a.version&&a.version>0&&(n.version=a.version),this._handleUpInst(n)},handleDelete:function(t,e){var a=this,r=this.tableData[t];this.$confirm("此操作将删除该项数, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t=[r.id];a.apiSrv.callServer("/devbuiltinfuncdel",t).then(function(t){a.loading=!1,t.status&&"SUCCESS"==t.status?a.getPageData({queryParas:a.queryArr,recOfPage:a.recOfPage,curPage:a.curPage}):a.$message.error(t.msg)}).catch(function(t){a.$message.error(t),a.loading=!1})}).catch(function(t){a.$message.error(t),a.loading=!1})},handleNew:function(){this.$router.push({name:"builtinfuncedit"})},handleEdit:function(t,e){var a=n()({},this.tableData[t]);this.$router.push({name:"builtinfuncedit",params:a})}}},o=a("KHd+"),s=Object(o.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"form-header form-header-back"},[a("span",{staticStyle:{height:"24px",display:"inline-block","margin-top":"12px"}},[t._v("研发项目：红云平台 --- 内建功能管理 ")]),t._v(" "),a("el-button",{staticClass:"header-func ",attrs:{plain:""},on:{click:function(e){t.handleNew()}}},[t._v("新增")]),t._v(" "),a("el-button",{staticClass:"header-func ",attrs:{plain:""},on:{click:function(e){t.searchData()}}},[t._v("搜索")]),t._v(" "),a("el-input",{staticClass:"header-func widthinput",attrs:{placeholder:"请输入内容"},model:{value:t.queryArr[0],callback:function(e){t.$set(t.queryArr,0,e)},expression:"queryArr[0]"}}),t._v(" "),a("span",{staticClass:"header-func txttop"},[t._v("功能名称：")])],1),t._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"func_name",label:"功能名称","min-width":"15%","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"impl_name",label:"实现函数","min-width":"15%","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"minxi_name",label:"引用声明","min-width":"8%","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"func_type",label:"函数类别","min-width":"8%","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t.gcomm.lookInArr(t.$store.state.prjdicts.prjArr,["type","val"],["func_type",e.row.func_type.split(",")],"label").join(","))+"\n    ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sub_type",label:"详细分类","min-width":"8%","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"func_ver",label:"版本号","min-width":"8%","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{prop:"stop",label:"停用","min-width":"5%","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n      "+t._s("true"==e.row.stop?"是":"否")+"\n    ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"sort",label:"序号","min-width":"5%","show-overflow-tooltip":!0}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"28%"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.sortUp(e.$index,e.row)}}},[t._v("上移")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.sortDown(e.$index,e.row)}}},[t._v("下移")]),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block paginationPadding"},[a("el-pagination",{attrs:{"current-page":t.curPage,"page-sizes":[10,20,30,40],"page-size":t.recOfPage,layout:"total, sizes, prev, pager, next",total:t.totalRec},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.curPage=e}}})],1)],1)},[],!1,null,null,null);s.options.__file="index.vue";e.default=s.exports}}]);