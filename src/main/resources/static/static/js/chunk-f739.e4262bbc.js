(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-f739","chunk-3a97"],{"6K/V":function(t,a,e){},"6X4j":function(t,a,e){"use strict";var l=e("6K/V");e.n(l).a},JU4G:function(t,a,e){},MU79:function(t,a,e){"use strict";var l=e("JU4G");e.n(l).a},"RU/L":function(t,a,e){e("Rqdy");var l=e("WEpk").Object;t.exports=function(t,a,e){return l.defineProperty(t,a,e)}},Rqdy:function(t,a,e){var l=e("Y7ZC");l(l.S+l.F*!e("jmDH"),"Object",{defineProperty:e("2faE").f})},SEkw:function(t,a,e){t.exports={default:e("RU/L"),__esModule:!0}},YEIV:function(t,a,e){"use strict";a.__esModule=!0;var l=function(t){return t&&t.__esModule?t:{default:t}}(e("SEkw"));a.default=function(t,a,e){return a in t?(0,l.default)(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}},oQOg:function(t,a,e){"use strict";e.r(a);var l=e("gDS+"),r=e.n(l),i=e("YEIV"),n=e.n(i),o=e("qQ1a"),s={name:"warnlist",mixins:[e("y2a5").a],components:{Alarminformation:o.default},props:{},data:function(){var t;return t={alarmData:[],alarmTotalRec:0,alarmTotalPage:0,alarmRecOfPage:10,alarmCurPage:1,alarmCbPage:this.gen_list_cb("alarm"),alarmQueryArr:[{name:"algorithm_id",val:0,tb:"algorithmalarm"},{name:"camera_id",val:0,tb:"algorithmalarm"},{name:"alarm_time",val:0,op:">=",tb:"algorithmalarm"},{name:"state",val:"",op:"like",tb:"algorithmalarm"},{name:"alarm_time",val:0,op:"<=",tb:"algorithmalarm"}],alarmQueryInit:[{name:"algorithm_id",val:0,tb:"algorithmalarm"},{name:"camera_id",val:0,tb:"algorithmalarm"},{name:"alarm_time",val:0,op:">=",tb:"algorithmalarm"},{name:"state",val:"",op:"like",tb:"algorithmalarm"},{name:"alarm_time",val:0,op:"<=",tb:"algorithmalarm"}],alarmMultiSel:[],alarmSortParas:[{name:"id",tb:"algorithmalarm",orderV:"desc"}],show:!1,alarminformationEdit:null,show1:!1},n()(t,"alarmQueryArr",[{name:"algorithm_id",val:0,tb:"algorithmalarm"},{name:"camera_id",val:0,tb:"algorithmalarm"},{name:"alarm_time",val:"",op:">=",tb:"algorithmalarm"},{name:"state",val:"",op:"like",tb:"algorithmalarm"},{name:"alarm_time",val:"",op:"<=",tb:"algorithmalarm"}]),n()(t,"show",!1),n()(t,"crameaData",[]),n()(t,"countData",[]),n()(t,"stateArr",[{value:"",label:"全部"},{value:"误报",label:"误报"},{value:"已确认",label:"已确认"},{value:"未确认",label:"未确认"}]),n()(t,"alarm_time",""),n()(t,"algorithm_name",""),n()(t,"grade",""),n()(t,"camera_name",""),n()(t,"state",""),n()(t,"tableHeight",window.innerHeight-420),n()(t,"isRouterAlive",!0),n()(t,"alarmMultiSelID",[]),t},mounted:function(){var t=this;this.refreshPage("alarm","/actq","alarmlist");this.callSrvAct("/actq",{_hy:"cameralist",qps:[{name:"title",val:"",op:"like",tb:"camera"},{name:"state",val:"",op:"like",tb:"camera"}],sps:[{name:"title",tb:"camera",orderV:"asc"}]}).then(function(a){console.log("摄像机信息",a),t.crameaData=a.data.pageData,t.crameaData.splice(0,0,{id:0,title:"全部"}),console.log("摄像机",crameaData)});this.callSrvAct("/actq",{_hy:"algorithmacclist",qps:[{name:"title",val:"",op:"like"}]}).then(function(a){console.log("算法信息",a),t.countData=a.data.pageData,t.countData.splice(0,0,{id:0,title:"全部"}),console.log("算法数据",t.countData)})},methods:{alarmMultiSelChange:function(t){this.alarmMultiSel=t},alarmQuery:function(){this.refreshPage2("alarm","/actq",this.remoteRecOfPage,1,"alarmlist")},alarmResetQuery:function(){this.alarmQueryArr=JSON.parse(r()(this.alarmQueryInit))},alarmSizeChange:function(t){this.refreshPage2("alarm","/actq",t,this.alarmCurPage,"alarmlist")},alarmCurChange:function(t){this.refreshPage2("alarm","/actq",this.alarmRecOfPage,t,"alarmlist")},genDownUrl:function(t){if(!t||t.length<1)return"";var a=t.split(";");return!a||a.length<2?"":this.hysrvport+"/hydownload?btnEncode=headupload&relateType=camera&filename="+a[1]+"&Authorization="+this.apiSrv.token},suring:function(){var t=this;this.callSrvAct("/confirmState",this.alarmMultiSelID).then(function(a){console.log("多选",a),t.refreshPage("alarm","/actq","alarmlist")})},handleChange:function(t){console.log(t);for(var a=[],e=0;e<t.length;e++)a.push(t[e].id);this.alarmMultiSelID=a,console.log("多选",a)},time:function(t){var a=new Date(t);return a.getFullYear()+"-"+(a.getMonth()+1)+"-"+a.getDate()+"  "+(a.getHours()<10?"0"+a.getHours():a.getHours())+":"+(a.getMinutes()<10?"0"+a.getMinutes():a.getMinutes())+":"+(a.getSeconds()<10?"0"+a.getSeconds():a.getSeconds())},alarminformationOK:function(){},alarminformationSet:function(){},ending:function(){var t=this;this.callSrvAct("/confirmState",[this.id]).then(function(a){t.refreshPage("alarm","/actq","alarmlist")})},handleClick:function(t,a){this.show1=!0;this.alarm_time=a.alarm_time,this.algorithm_name=a.algorithm_name,this.grade=a.grade,this.camera_name=a.camera_name,this.state=a.state,this.alarm_img=a.alarm_img,this.id=a.id,this.index=t,console.log("下标",t)},search:function(){this.refreshPage("alarm","/actq","alarmlist")},clickUp:function(t,a){console.log("数据显示0",this.alarmData[0]),console.log("数据显示1",this.alarmData[1]),console.log("数据显示2",this.alarmData[2]),console.log("下标",this.index),this.index>0&&(this.index-=1,this.alarm_time=this.alarmData[this.index].alarm_time,this.algorithm_name=this.alarmData[this.index].algorithm_name,this.grade=this.alarmData[this.index].grade,this.camera_name=this.alarmData[this.index].camera_name,this.id=this.alarmData[this.index].id,this.state=this.alarmData[this.index].state,this.alarmData[this.index].index,console.log("最新下标",this.index))},clickDown:function(t,a){this.index<this.alarmData.length-1&&(this.index+=1,this.alarm_time=this.alarmData[this.index].alarm_time,this.algorithm_name=this.alarmData[this.index].algorithm_name,this.grade=this.alarmData[this.index].grade,this.camera_name=this.alarmData[this.index].camera_name,this.state=this.alarmData[this.index].state,this.id=this.alarmData[this.index].id,this.alarmData[this.index].index,console.log("最新下标",this.index))}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},c=(e("MU79"),e("KHd+")),m=Object(c.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-container",{staticStyle:{height:"100%"},attrs:{direction:"vertical"}},[e("router-view"),t._v(" "),e("div",[e("el-row",[e("el-col",{attrs:{span:6}},[e("span",[t._v("算法名称\n                ")]),t._v(" "),e("el-select",{staticStyle:{"margin-left":"10px"},model:{value:t.alarmQueryArr[0].val,callback:function(a){t.$set(t.alarmQueryArr[0],"val",a)},expression:"alarmQueryArr[0].val"}},t._l(t.countData,function(t,a){return e("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),t._v(" "),e("el-col",{attrs:{span:6}},[e("span",{staticStyle:{width:"70px","text-align":"center","margin-top":"5px"}},[t._v("摄像机名称\n                ")]),t._v(" "),e("el-select",{staticStyle:{"margin-left":"10px"},model:{value:t.alarmQueryArr[1].val,callback:function(a){t.$set(t.alarmQueryArr[1],"val",a)},expression:"alarmQueryArr[1].val"}},t._l(t.crameaData,function(t,a){return e("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})}))],1),t._v(" "),e("el-col",{attrs:{span:12}},[e("span",{staticStyle:{width:"60px","text-align":"center","margin-top":"5px"}},[t._v("时间范围\n                ")]),t._v(" "),e("el-date-picker",{staticStyle:{"margin-left":"10px"},attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"timestamp",type:"datetime"},model:{value:t.alarmQueryArr[2].val,callback:function(a){t.$set(t.alarmQueryArr[2],"val",a)},expression:"alarmQueryArr[2].val"}}),t._v(" "),e("span",{staticStyle:{"margin-left":"10px"}},[t._v("至\n                ")]),t._v(" "),e("el-date-picker",{staticStyle:{"margin-left":"10px"},attrs:{format:"yyyy-MM-dd HH-mm-ss","value-format":"timestamp",type:"datetime"},model:{value:t.alarmQueryArr[4].val,callback:function(a){t.$set(t.alarmQueryArr[4],"val",a)},expression:"alarmQueryArr[4].val"}})],1)],1)],1),t._v(" "),e("div",{staticStyle:{"margin-top":"20px"}},[e("span",[t._v("状态\n        ")]),t._v(" "),e("el-select",{staticStyle:{"margin-left":"30px"},model:{value:t.alarmQueryArr[3].val,callback:function(a){t.$set(t.alarmQueryArr[3],"val",a)},expression:"alarmQueryArr[3].val"}},t._l(t.stateArr,function(t,a){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),t._v(" "),e("el-button",{staticStyle:{"margin-left":"30px"},attrs:{type:"primary"},on:{click:t.search}},[e("span",[t._v("查询\n            ")])]),t._v(" "),e("el-button",{staticStyle:{"margin-left":"30px"},on:{click:t.suring}},[e("span",[t._v("批量确认\n            ")])])],1),t._v(" "),e("el-table",{ref:"alarm",staticStyle:{margin:"10px 0px"},attrs:{stripe:!0,border:!0,height:t.tableHeight,"header-cell-style":{background:"#E6F4FF",fontWeight:"500",color:"#0A51C4",borderBottom:"2px solid #4093F7"},data:t.alarmData},on:{"selection-change":t.handleChange}},[e("el-table-column",{attrs:{type:"selection"}}),t._v(" "),e("el-table-column",{attrs:{label:"报警时间",prop:"alarm_time",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(t.time(a.row.alarm_time))+"\n                ")])]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"算法名称",prop:"algorithm_name",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"预警等级",prop:"grade","min-width":"50",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"摄像机名称",prop:"camera_name",align:"center"}}),t._v(" "),e("el-table-column",{attrs:{label:"状态",prop:"state",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return["误报"==a.row.state?e("span",{staticStyle:{color:"#D9001B"}},[t._v("误报\n                ")]):t._e(),t._v(" "),"已确认"==a.row.state?e("span",{staticStyle:{color:"#70B603"}},[t._v("已确认\n                ")]):t._e(),t._v(" "),"未确认"==a.row.state?e("span",{staticStyle:{color:"#02A7F0"}},[t._v("未确认\n                ")]):t._e()]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("div",{staticStyle:{"margin-top":"10px"}},[e("el-button",{attrs:{size:"mini"},on:{click:function(e){t.handleClick(a.$index,a.row)}}},[e("span",[t._v("查看\n                        ")])])],1)]}}])})],1),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("el-pagination",{attrs:{total:t.alarmTotalRec,"page-count":t.alarmTotalPage,layout:"total, sizes, prev, pager, next"},on:{"size-change":t.alarmSizeChange,"current-change":t.alarmCurChange}})],1),t._v(" "),e("el-dialog",{attrs:{visible:t.show,title:"报警信息","destroy-on-close":!0},on:{"update:visible":function(a){t.show=a}}},[e("alarminformation",{attrs:{paramsObj:t.alarminformationEdit},on:{submitOk:t.alarminformationOK,submitClose:t.alarminformationSet}})],1),t._v(" "),e("el-dialog",{attrs:{visible:t.show1},on:{"update:visible":function(a){t.show1=a}}},[e("div",[e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{staticStyle:{"line-height":"35.6px"}},[e("span",[t._v(t._s(t.algorithm_name)+"\n                    ")]),t._v(" "),e("span",{staticStyle:{color:"#BEBEBE","margin-left":"50px"}},[t._v(t._s(t.alarm_time)+"\n                    ")])]),t._v(" "),e("div",["误报"==t.state?e("el-button",{staticStyle:{"background-color":"#D9001B"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v(t._s(t.state)+"\n                        ")])]):t._e(),t._v(" "),"已确认"==t.state?e("el-button",{staticStyle:{"background-color":"#70B603"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v(t._s(t.state)+"\n                        ")])]):t._e(),t._v(" "),"未确认"==t.state?e("el-button",{staticStyle:{"background-color":"#02A7F0"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v(t._s(t.state)+"\n                        ")])]):t._e(),t._v(" "),e("el-button",{on:{click:t.ending}},[e("span",[t._v("结束当前预警\n                        ")])])],1)]),t._v(" "),e("div",{staticStyle:{width:"100%",height:"300px",border:"20px solid #BEBEBE",margin:"10px 0px"}},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t.genDownUrl(t.alarm_img)}})]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{staticStyle:{"background-color":"#317EF3"},on:{click:t.clickUp}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v("上一条\n                    ")])]),t._v(" "),e("el-button",{staticStyle:{"background-color":"#317EF3"},on:{click:t.clickDown}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v("下一条\n                    ")])])],1),t._v(" "),e("router-view")],1)])],1)},[],!1,null,"a42cc42e",null);m.options.__file="index.vue";a.default=m.exports},qQ1a:function(t,a,e){"use strict";e.r(a);var l={name:"alarminformation",mixins:[],components:{},props:{},data:function(){return{}},mounted:function(){},methods:{},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},r=(e("6X4j"),e("KHd+")),i=Object(r.a)(l,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("el-container",{attrs:{direction:"vertical"}},[e("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[e("div",{staticStyle:{"line-height":"35.6px"}},[e("span",[t._v(t._s(this.$route.params.algorithm_name)+"\n            ")]),t._v(" "),e("span",{staticStyle:{color:"#BEBEBE","margin-left":"50px"}},[t._v(t._s(this.$route.params.alarm_time)+"\n            ")])]),t._v(" "),e("div",["误报"==this.$route.params.state?e("el-button",{staticStyle:{"background-color":"#D9001B"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v(t._s(this.$route.params.state)+"\n                ")])]):t._e(),t._v(" "),"已确认"==this.$route.params.state?e("el-button",{staticStyle:{"background-color":"#70B603"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v(t._s(this.$route.params.state)+"\n                ")])]):t._e(),t._v(" "),"未确认"==this.$route.params.state?e("el-button",{staticStyle:{"background-color":"#02A7F0"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v(t._s(this.$route.params.state)+"\n                ")])]):t._e(),t._v(" "),e("el-button",[e("span",[t._v("结束当前预警\n                ")])])],1)]),t._v(" "),e("div",{staticStyle:{width:"100%",height:"300px",border:"20px solid #BEBEBE",margin:"10px 0px"}},[e("img",{staticStyle:{width:"100%",height:"100%"}})]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("el-button",{staticStyle:{"background-color":"#317EF3"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v("上一条\n            ")])]),t._v(" "),e("el-button",{staticStyle:{"background-color":"#317EF3"}},[e("span",{staticStyle:{color:"#ffffff"}},[t._v("下一条\n            ")])])],1)])},[],!1,null,"b0efd502",null);i.options.__file="index.vue";a.default=i.exports}}]);