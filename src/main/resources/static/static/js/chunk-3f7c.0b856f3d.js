(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3f7c"],{"9XLd":function(t,e,i){"use strict";i.r(e);var o={name:"homepage",mixins:[i("y2a5").a],components:{},props:{},data:function(){return{regionArr:[],countArr:[],cameraArr:[],regionTitle:"",countTitle:"",cameraTitle:"",countNum:0,cameraNum:0,countANum:0,callpoliceData:[{time:(new Date).getTime(),cameraTitle:"001",type:"人员越界"},{time:(new Date).getTime(),cameraTitle:"002",type:"人员越界"},{time:(new Date).getTime(),cameraTitle:"003",type:"人员越界"},{time:(new Date).getTime(),cameraTitle:"004",type:"人员越界"},{time:(new Date).getTime(),cameraTitle:"005",type:"人员越界"}],option:{title:{text:"历史告警时段分布",textStyle:{color:"#ffffff"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{right:"50",data:["上月","本月","同比"]},xAxis:{name:"时间/日期",data:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29]},yAxis:{name:"数量"},series:[{name:"上月",type:"bar",stack:"总量",data:[25,24,23,23,15,20,23,25,29,25,25,24,21,21,25]},{name:"本月",type:"bar",stack:"总量",data:[10,5,3,23,26,29,10,26,15,15,12,18,15,18,14]},{name:"同比",type:"line",data:[5,15,13,23,26,12,20,16,15,35,12,18,25,18,24]}]},option1:{title:{text:"本日报警信息确认统计",textStyle:{color:"#ffffff"}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{bottom:10,data:["报警数","确认数"]},xAxis:{data:["行为违章","作业违章","皮带异常","火险预警","清仓作业"]},yAxis:{},series:[{name:"报警数",type:"bar",data:[50,90,60,40,70]},{name:"确认数",type:"bar",data:[40,30,50,70,20]}]}}},mounted:function(){var t=this;this.callSrvAct("/actq",{_hy:"regiontt",qps:[{name:"title",val:"",op:"like"}],sps:[{name:"title",orderV:"asc"}]}).then(function(e){var i=e.data||[];console.log("区域信息",i),t.regionArr=i,t.regionArr.splice(0,0,{id:0,title:"全部"})});this.callSrvAct("/actq",{_hy:"algorithmacclist",qps:[{name:"title",val:"",op:"like"}]}).then(function(e){console.log("算法接入信息",e),t.countArr=e.data.pageData,t.countNum=e.data.totalRec,t.countArr.splice(0,0,{id:0,title:"全部"})});this.callSrvAct("/actq",{_hy:"cameralist",qps:[{name:"title",val:"",op:"like",tb:"camera"},{name:"state",val:"",op:"like",tb:"camera"}],sps:[{name:"title",tb:"camera",orderV:"asc"}]}).then(function(e){console.log("摄像机信息",e),t.cameraArr=e.data.pageData,t.cameraNum=e.data.totalRec});this.callSrvAct("/actq",{_hy:"algorithmlist",qps:[],sps:[{name:"algorithm_title",tb:"algorithm",orderV:"asc"}]}).then(function(e){console.log("算法管理信息",e),t.countANum=e.data.totalRec}),echarts.init(document.getElementById("Histogram")).setOption(this.option),echarts.init(document.getElementById("Statistics")).setOption(this.option1),document.getElementsByClassName("el-progress-circle__track")[0].attributes.stroke='stroke="red"'},methods:{jump1:function(){this.$router.push({name:"algorithmm"})},jump2:function(){this.$router.push({name:"videoca"})},jump3:function(){this.$router.push({name:"alaccess"})}},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},a=(i("IfSw"),i("KHd+")),l=Object(a.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-container",{staticStyle:{"background-color":"#9D9D9D",height:"100%"},attrs:{direction:"vertical"}},[i("el-header",[i("div",{staticStyle:{display:"flex","justify-content":"space-around",width:"100%"}},[i("div",{staticStyle:{"line-height":"40px",width:"25%"}},[i("span",{staticStyle:{"font-size":"25px",color:"#00E3E3"}},[t._v("违章预警\\\n                ")]),t._v(" "),i("span",{staticStyle:{color:"#00E3E3"}},[t._v("人员定位\\智能水冲洗\\环境监测\\状态监测\n                ")])]),t._v(" "),i("div",{staticStyle:{"line-height":"40px"}},[i("span",{staticStyle:{"font-size":"30px",color:"#ffffff"}},[t._v("泰豪工业物联网大数据平台\n                ")])]),t._v(" "),i("div",{staticStyle:{"line-height":"40px",width:"25%"}},[i("span",{staticStyle:{color:"#ffffff"}},[t._v("2020年6月9日 星期二 16：19：45 \n                ")]),t._v(" "),i("span",{staticStyle:{color:"#ffffff"}},[t._v(" 欢迎\n                ")]),t._v(" "),i("span",{staticStyle:{color:"#ffffff"}},[t._v("小李，\n                ")]),t._v(" "),i("span",{staticStyle:{color:"#ffffff"}},[t._v("退出登录\n                ")])])])]),t._v(" "),i("el-main",[i("div",{staticStyle:{display:"flex","justify-content":"space-around",width:"100%"}},[i("div",{staticStyle:{width:"25%"}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[i("el-row",{staticStyle:{"margin-bottom":"30px"}},[i("span",{staticStyle:{"font-size":"24px",color:"#ffffff"}},[t._v("基本信息\n                        ")])]),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[i("div",[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("接入路数\n                                ")])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump1}},[t._v(t._s(t.countANum)+"\n                                ")]),t._v(" "),i("span",{staticStyle:{color:"#005757"}},[t._v("路\n                                ")])])]),t._v(" "),i("div",[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("摄像头数量\n                                ")])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#46A3FF"},on:{click:t.jump2}},[t._v(t._s(t.cameraNum)+"\n                                ")]),t._v(" "),i("span",{staticStyle:{color:"#003D79"}},[t._v("个\n                                ")])])]),t._v(" "),i("div",[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("算法模型数量\n                                ")])]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#E800E8"},on:{click:t.jump3}},[t._v(t._s(t.countNum)+"\n                                ")]),t._v(" "),i("span",{staticStyle:{color:"#5E005E"}},[t._v("个\n                                ")])])])])],1),t._v(" "),i("div",[i("el-row",{staticStyle:{"margin-bottom":"30px"}},[i("span",{staticStyle:{"font-size":"24px",color:"#ffffff"}},[t._v("总体信息\n                        ")])]),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-around","margin-bottom":"10px"}},[i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("摄像头数量\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump1}},[t._v("333\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("个\n                                    ")])])])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("开启数量\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump2}},[t._v("100\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("个\n                                    ")])])])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("关闭数量\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump3}},[t._v("200\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("个\n                                    ")])])])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("负责人\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump3}},[t._v("300\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("个\n                                    ")])])])])]),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("接入路数\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump1}},[t._v("400\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("路\n                                    ")])])])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("运行中数量\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump2}},[t._v("100\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("个\n                                    ")])])])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("异常数量\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump3}},[t._v("4\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("个\n                                    ")])])])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #005757",width:"100px",height:"100px",display:"flex","align-items":"center","justify-content":"center"}},[i("div",[i("span",{staticStyle:{color:"#ffffff"}},[t._v("报警数\n                                ")]),t._v(" "),i("div",[i("span",{staticStyle:{"font-size":"20px",color:"#A6FFFF"},on:{click:t.jump3}},[t._v("100\n                                    ")]),t._v(" "),i("span",{staticStyle:{color:"#A6FFFF"}},[t._v("次\n                                    ")])])])])])],1),t._v(" "),i("div",{ref:"Histogram",staticStyle:{width:"500px",height:"400px","margin-top":"20px"},attrs:{id:"Histogram"}})]),t._v(" "),i("div",{staticStyle:{width:"50%"}},[i("div",{staticStyle:{"line-height":"40px"}},[i("span",{staticStyle:{"font-size":"24px",color:"#ffffff"}},[t._v("实时监控\n                    ")]),t._v(" "),i("el-select",{attrs:{placeholder:"请选择区域"},model:{value:t.regionTitle,callback:function(e){t.regionTitle=e},expression:"regionTitle"}},t._l(t.regionArr,function(t,e){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),t._v(" "),i("el-select",{attrs:{placeholder:"请选择算法名称"},model:{value:t.countTitle,callback:function(e){t.countTitle=e},expression:"countTitle"}},t._l(t.countArr,function(t,e){return i("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})),t._v(" "),i("el-input",{staticStyle:{width:"220px"},attrs:{placeholder:"请输入摄像机名称"},model:{value:t.cameraTitle,callback:function(e){t.cameraTitle=e},expression:"cameraTitle"}})],1),t._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between",margin:"15px 0px"}},[i("div",{staticStyle:{border:"1px solid #005757",color:"#A6FFFF"}},[i("span",[t._v("<<<\n                        ")])]),t._v(" "),t._l(t.cameraArr,function(e,o){return i("div",{key:e.id,staticStyle:{border:"1px solid #005757",color:"#A6FFFF"}},[i("span",[t._v(t._s(e.title)+"\n                        ")])])}),t._v(" "),i("div",{staticStyle:{border:"1px solid #005757",color:"#A6FFFF"}},[i("span",[t._v(">>>\n                        ")])])],2),t._v(" "),i("div",{staticStyle:{width:"100%"}},[i("div",{staticStyle:{width:"100%",height:"300px","background-color":"#000000"}})]),t._v(" "),i("div",{staticStyle:{"margin-top":"20px"}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[i("span",{staticStyle:{color:"#ffffff","font-size":"20px","font-weight":"700"}},[t._v("本日预警统计\n                        ")])]),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:5.1,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("5.1%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("作业违章\n                            ")])],1),t._v(" "),i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:2.1,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("2.1%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("行为违章\n                            ")])],1),t._v(" "),i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:3.6,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("3.6%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("皮带异常\n                            ")])],1),t._v(" "),i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:3.6,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("3.6%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("火险预警\n                            ")])],1)]),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-around",margin:"10px 0px"}},[i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:3.6,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("3.6%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("清仓安全\n                            ")])],1),t._v(" "),i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:3.6,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("3.6%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("跑偏违章\n                            ")])],1),t._v(" "),i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:3.6,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("3.6%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("吸烟预警\n                            ")])],1),t._v(" "),i("div",{staticStyle:{position:"relative",width:"126px",height:"126px"}},[i("el-progress",{staticStyle:{transform:"rotate(-90deg)"},attrs:{percentage:3.6,type:"circle","stroke-width":15,color:"#A6FFFF","show-text":!1}}),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"35%",top:"40%",color:"#548C00"}},[t._v("3.6%\n                            ")]),t._v(" "),i("span",{staticStyle:{position:"absolute",left:"26%",top:"57%",color:"#548C00"}},[t._v("洒煤预警\n                            ")])],1)])]),t._v(" "),i("div",[i("div",{staticStyle:{display:"flex","justify-content":"space-around","margin-bottom":"5px"}},[i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("翻越皮带：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("27\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])]),t._v(" "),i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("未带安全帽：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("5\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])]),t._v(" "),i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("跑偏：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("5\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])]),t._v(" "),i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("火险：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("5\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])])]),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("清仓：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("5\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])]),t._v(" "),i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("人员越界：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("61\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])]),t._v(" "),i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("吸烟：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("5\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])]),t._v(" "),i("div",[i("span",{staticStyle:{color:"#548C00"}},[t._v("洒煤：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#00A600"}},[t._v("5\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"#006000"}},[t._v("次\n                            ")])])])])]),t._v(" "),i("div",{staticStyle:{width:"25%"}},[i("div",[i("el-row",{staticStyle:{"margin-bottom":"30px"}},[i("span",{staticStyle:{"font-size":"24px",color:"#ffffff"}},[t._v("报警信息\n                        ")])]),t._v(" "),i("div",[i("div",{staticStyle:{display:"flex","justify-content":"space-around","margin-bottom":"10px"}},[i("div",{staticStyle:{border:"1px solid #AE0000",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#AE0000"}},[t._v("全部（8）\n                                ")])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #AE0000",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#AE0000"}},[t._v("人员越界（8）\n                                ")])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #00E3E3",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#00E3E3"}},[t._v("人员越界（0）\n                                ")])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #00E3E3",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#00E3E3"}},[t._v("安全帽（0）\n                                ")])])]),t._v(" "),i("div",{staticStyle:{display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{border:"1px solid #00E3E3",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#00E3E3"}},[t._v("工作服（0）\n                                ")])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #00E3E3",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#00E3E3"}},[t._v("皮带洒煤（0）\n                                ")])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #00E3E3",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#00E3E3"}},[t._v("明火监测（0）\n                                ")])]),t._v(" "),i("div",{staticStyle:{border:"1px solid #00E3E3",width:"110px","text-align":"center"}},[i("span",{staticStyle:{color:"#00E3E3"}},[t._v("吸烟（0）\n                                ")])])])]),t._v(" "),i("div",{staticStyle:{width:"100%",height:"5px","background-color":"#00E3E3",margin:"10px 0px"}})],1),t._v(" "),i("el-table",{attrs:{data:t.callpoliceData,"cell-style":{"text-align":"center","font-size":"10px"},"header-cell-style":{"text-align":"center"}}},[i("el-table-column",{attrs:{label:"时间","min-width":"100%"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v(t._s(t.gcomm.v2datetimestr(e.row.time))+"\n                            ")])]}}])}),t._v(" "),i("el-table-column",{attrs:{width:"5%"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("div",{staticStyle:{width:"5px",height:"5px","background-color":"green","border-radius":"50%"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"摄像机",prop:"cameraTitle"}}),t._v(" "),i("el-table-column",{attrs:{width:"5%"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("div",{staticStyle:{width:"5px",height:"20px",border:"1px solid  blue"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"类型",prop:"type"}}),t._v(" "),i("el-table-column",{attrs:{width:"5%"},scopedSlots:t._u([{key:"default",fn:function(t){return[i("div",{staticStyle:{width:"5px",height:"5px","background-color":"green","border-radius":"50%"}})]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"详情"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("span",[t._v("查看详情\n                            ")])]}}])})],1),t._v(" "),i("div",{ref:"Statistics",staticStyle:{width:"500px",height:"400px","margin-top":"20px"},attrs:{id:"Statistics"}})],1)])])],1)},[],!1,null,"ce7e81b2",null);l.options.__file="index.vue";e.default=l.exports},IfSw:function(t,e,i){"use strict";var o=i("Nz3n");i.n(o).a},Nz3n:function(t,e,i){}}]);