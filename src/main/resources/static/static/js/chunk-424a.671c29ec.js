(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-424a"],{Fl1l:function(t,a,i){},PKCN:function(t,a,i){"use strict";i.r(a);var e={name:"realtrack",mixins:[i("y2a5").a],components:{},props:{},data:function(){return{times:[],title:"",summaryArr:{},num:0,noNum:0,option:{tooltip:{trigger:"item",formatter:"{b}: {c} ({d}%)"},legend:{orient:"vertical",top:10,right:10,data:[]},series:[{type:"pie",radius:["50%","70%"],avoidLabelOverlap:!1,hoverAnimation:!0,right:80,label:{show:!1,position:"center",color:"#000000",formatter:""},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold"}},labelLine:{show:!1},itemStyle:{borderWidth:5,borderColor:"#fff"},data:[]}]},option1:{color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:[],axisTick:{alignWithLabel:!0},axisLabel:{interval:0,rotate:30}}],yAxis:[{type:"value"}],series:[{type:"bar",barWidth:"60%",data:[]}]},option2:{color:["#3398DB"],tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},xAxis:{type:"category",boundaryGap:!1,data:[]},yAxis:{type:"value"},series:[{data:[],type:"line",areaStyle:{}}]},option3:{tooltip:{formatter:"{b} : {c}%"},series:[{type:"gauge",detail:{formatter:"{value}%"},data:[]}]}}},mounted:function(){var t=this;this.callSrvAct("/spatiotemporalDataTracking",{}).then(function(a){console.log("返回值",a),t.summaryArr=a.data||{};for(var i=[],e=[],n=0,s=0;s<t.summaryArr.algorithmData.length;s++)i.push(t.summaryArr.algorithmData[s].algorithm_title),e.push({value:t.summaryArr.algorithmData[s].num,name:t.summaryArr.algorithmData[s].algorithm_title}),n+=t.summaryArr.algorithmData[s].num;t.option.legend.data=i,t.option.series[0].data=e,t.option.series[0].label.formatter="算法接入\n\n"+n,echarts.init(document.getElementById("algorithmAccess")).setOption(t.option);for(var r=[],p=[],o=0;o<t.summaryArr.alarmData.length;o++)r.push(t.summaryArr.alarmData[o].algorithm_name),p.push(t.summaryArr.alarmData[o].num);t.option1.xAxis[0].data=r,t.option1.series[0].data=p,echarts.init(document.getElementById("earlyWarning")).setOption(t.option1);for(var l=[],d=[],v=0;v<t.summaryArr.alarmChangeData.length;v++)l.push(t.summaryArr.alarmChangeData[v].hour),d.push(t.summaryArr.alarmChangeData[v].num);t.option2.xAxis.data=l,t.option2.series[0].data=d,echarts.init(document.getElementById("warningTrend")).setOption(t.option2);var c=[];c.push({value:t.summaryArr.alarmHandleData.processRate,name:"处理率"}),t.num=t.summaryArr.alarmHandleData.total,t.noNum=t.summaryArr.alarmHandleData.untreated,t.option3.series[0].data=c,echarts.init(document.getElementById("earlyWarningProcessing")).setOption(t.option3)})},methods:{},watch:{},computed:{},beforeCreate:function(){},created:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){}},n=(i("mEGX"),i("KHd+")),s=Object(n.a)(e,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("el-container",{attrs:{direction:"vertical"}},[i("div",{staticStyle:{"margin-bottom":"10px"}},[i("el-date-picker",{attrs:{format:"yyyy-MM-dd HH:mm:ss","value-format":"timestamp","start-placeholder":"开始时间","end-placeholder":"结束时间",type:"datetimerange","unlink-panels":!0},model:{value:t.times,callback:function(a){t.times=a},expression:"times"}}),t._v(" "),i("el-input",{staticStyle:{width:"220px","margin-left":"10px"},attrs:{placeholder:"请输入姓名"},model:{value:t.title,callback:function(a){t.title=a},expression:"title"}}),t._v(" "),i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"}},[i("span",[t._v("搜索\n            ")])])],1),t._v(" "),i("div",{staticStyle:{width:"100%"}},[i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between"}},[i("div",{staticStyle:{width:"30%",height:"300px",border:"1px solid  #000000"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #E0E0E0",padding:"10px"}},[i("span",{staticStyle:{"font-size":"18px"}},[t._v("区域信息\n                    ")]),t._v(" "),i("span",{staticStyle:{color:"blue","font-size":"10px",float:"right","margin-top":"10px"}},[t._v("查看详情\n                    ")])])]),t._v(" "),i("div",{staticStyle:{width:"30%",height:"300px",border:"1px solid  #000000"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #E0E0E0",padding:"10px"}},[i("span",{staticStyle:{"font-size":"18px"}},[t._v("基本信息\n                    ")]),t._v(" "),i("span",{staticStyle:{color:"blue","font-size":"10px",float:"right","margin-top":"10px"}},[t._v("查看详情\n                    ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px 5px 5px 25px"}},[i("span",[t._v("姓名：\n                    ")]),t._v(" "),i("span",[t._v("李四\n                    ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px 5px 5px 25px"}},[i("span",[t._v("性别：\n                    ")]),t._v(" "),i("span",[t._v("男\n                    ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px 5px 5px 25px"}},[i("span",[t._v("部门：\n                    ")]),t._v(" "),i("span",[t._v("市场部\n                    ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px 5px 5px 25px"}},[i("span",[t._v("卡号：\n                    ")]),t._v(" "),i("span",[t._v("1233311\n                    ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px 5px 5px 25px"}},[i("span",[t._v("电话：\n                    ")]),t._v(" "),i("span",[t._v("12399887765\n                    ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px 5px 5px 25px"}},[i("span",{staticStyle:{color:"blue"}},[t._v("查看轨迹\n                    ")])])]),t._v(" "),i("div",{staticStyle:{width:"30%",height:"300px",border:"1px solid  #000000"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #E0E0E0",padding:"10px"}},[i("span",{staticStyle:{"font-size":"18px"}},[t._v("环境信息\n                    ")]),t._v(" "),i("span",{staticStyle:{color:"blue","font-size":"10px",float:"right","margin-top":"10px"}},[t._v("查看详情\n                    ")])]),t._v(" "),i("div",[i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("当前温度：\n                            ")]),t._v(" "),i("span",[t._v("28C\n                            ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("当日平均：\n                            ")]),t._v(" "),i("span",[t._v("26C\n                            ")])])]),t._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("当日最高：\n                            ")]),t._v(" "),i("span",[t._v("28C\n                            ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("当日最低：\n                            ")]),t._v(" "),i("span",[t._v("26C\n                            ")])])]),t._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("区域总人数：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"blue"}},[t._v("28\n                            ")]),t._v(" "),i("span",[t._v("人\n                            ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}})]),t._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("摄像头总数：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"blue"}},[t._v("25\n                            ")]),t._v(" "),i("span",[t._v("个\n                            ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("故障数：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"blue"}},[t._v("3\n                            ")]),t._v(" "),i("span",[t._v("个\n                            ")])])]),t._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-around"}},[i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("传感器总数：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"blue"}},[t._v("6\n                            ")]),t._v(" "),i("span",[t._v("个\n                            ")])]),t._v(" "),i("div",{staticStyle:{margin:"5px",padding:"5px",width:"40%"}},[i("span",[t._v("故障数量：\n                            ")]),t._v(" "),i("span",{staticStyle:{color:"blue"}},[t._v("6\n                            ")]),t._v(" "),i("span",[t._v("个\n                            ")])])])])])]),t._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between",margin:"10px 0px"}},[i("div",{staticStyle:{width:"30%",height:"300px",border:"1px solid  #000000"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #E0E0E0",padding:"10px"}},[i("span",{staticStyle:{"font-size":"18px"}},[t._v("算法接入情况\n                    ")]),t._v(" "),i("span",{staticStyle:{color:"blue","font-size":"10px",float:"right","margin-top":"10px"}},[t._v("查看详情\n                    ")])]),t._v(" "),i("div",{ref:"algorithmAccess",staticStyle:{width:"100%",height:"255px"},attrs:{id:"algorithmAccess"}})]),t._v(" "),i("div",{staticStyle:{width:"65%",height:"300px",border:"1px solid  #000000"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #E0E0E0",padding:"10px"}},[i("span",{staticStyle:{"font-size":"18px"}},[t._v("预警情况\n                    ")]),t._v(" "),i("span",{staticStyle:{color:"blue","font-size":"10px",float:"right","margin-top":"10px"}},[t._v("查看详情\n                    ")])]),t._v(" "),i("div",{ref:"earlyWarning",staticStyle:{width:"100%",height:"255px"},attrs:{id:"earlyWarning"}})])]),t._v(" "),i("div",{staticStyle:{width:"100%",display:"flex","justify-content":"space-between",margin:"10px 0px"}},[i("div",{staticStyle:{width:"65%",height:"300px",border:"1px solid  #000000"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #E0E0E0",padding:"10px"}},[i("span",{staticStyle:{"font-size":"18px"}},[t._v("预警变化趋势\n                    ")]),t._v(" "),i("span",{staticStyle:{color:"blue","font-size":"10px",float:"right","margin-top":"10px"}},[t._v("查看详情\n                    ")])]),t._v(" "),i("div",{ref:"warningTrend",staticStyle:{width:"100%",height:"255px"},attrs:{id:"warningTrend"}})]),t._v(" "),i("div",{staticStyle:{width:"30%",height:"300px",border:"1px solid  #000000",position:"relative"}},[i("div",{staticStyle:{width:"100%","border-bottom":"1px solid #E0E0E0",padding:"10px"}},[i("span",{staticStyle:{"font-size":"18px"}},[t._v("预警情况处理\n                    ")]),t._v(" "),i("span",{staticStyle:{color:"blue","font-size":"10px",float:"right","margin-top":"10px"}},[t._v("查看详情\n                    ")])]),t._v(" "),i("div",{ref:"earlyWarningProcessing",staticStyle:{width:"100%",height:"255px"},attrs:{id:"earlyWarningProcessing"}}),t._v(" "),i("div",{staticStyle:{position:"absolute",right:"5px",top:"140px","font-size":"13px"}},[i("div",[i("span",[t._v("总预警数：\n                        ")]),t._v(" "),i("span",[t._v(t._s(t.num)+"\n                        ")])]),t._v(" "),i("div",{staticStyle:{"margin-top":"20px"}},[i("span",[t._v("未处理：\n                        ")]),t._v(" "),i("span",[t._v(t._s(t.noNum)+"\n                        ")])])])])])])])},[],!1,null,"2399e66c",null);s.options.__file="index.vue";a.default=s.exports},mEGX:function(t,a,i){"use strict";var e=i("Fl1l");i.n(e).a}}]);