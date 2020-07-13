package com.ipincloud.iotbj.srv.service;
import com.ipincloud.iotbj.srv.domain.Algorithm;
import java.util.List;
import java.util.Map;
import com.alibaba.fastjson.JSONObject;
//(Iotbj)算法 服务接口
//generate by redcloud,2020-07-07 10:18:15
public interface AlgorithmService {
//@param id 主键 
//@return 实例对象Algorithm 
Algorithm queryById(Long id);
//@param jsonObj 过滤条件查询 
//@return 实例对象Algorithm 
List<Map> algorithmList(JSONObject jsonObj);
//@param jsonObj 调用参数  
//@return 影响记录数 
Integer deletesInst(@Param("jsonObj") JSONObject jsonObj);
//@param jsonObj 调用参数 
//@return 实例对象Algorithm 
JSONObject addInst( JSONObject jsonObj);
//@param jsonObj 调用参数 
//@return 影响记录数Algorithm 
void updateInst(@Param("jsonObj") JSONObject jsonObj);
    //设备相关接口，参看api接口/algorithmopen
    //设备相关接口，参看api接口/algorithmclose
    //设备相关接口，参看api接口/algorithmrestart
}
