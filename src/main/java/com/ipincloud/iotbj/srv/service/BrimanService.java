package com.ipincloud.iotbj.srv.service;
import com.ipincloud.iotbj.srv.domain.Briman;
import java.util.List;
import java.util.Map;
import com.alibaba.fastjson.JSONObject;
//(Iotbj)网桥管理 服务接口
//generate by redcloud,2020-07-07 23:53:41
public interface BrimanService {
    //@param id 主键 
    //@return 实例对象Briman 
    Briman queryById(Long id);
//@param jsonObj 调用参数 
//@return 影响记录数Briman 
void updateInst(JSONObject jsonObj);
//@param jsonObj 过滤条件查询 
//@return 实例对象Briman 
Map brimanList(JSONObject jsonObj);
//@param jsonObj 调用参数 
//@return 实例对象Briman 
JSONObject addInst( JSONObject jsonObj);
//@param jsonObj 调用参数  
//@return 影响记录数 
Integer deletesBrimanInst(JSONObject jsonObj);
}
