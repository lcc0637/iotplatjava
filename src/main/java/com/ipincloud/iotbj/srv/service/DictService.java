package com.ipincloud.iotbj.srv.service;
import com.ipincloud.iotbj.srv.domain.Dict;
import java.util.List;
import java.util.Map;
import com.alibaba.fastjson.JSONObject;
//(Iotbj) 服务接口
//generate by redcloud,2020-07-07 10:18:15
public interface DictService {
//@param id 主键 
//@return 实例对象Dict 
Dict queryById(Long id);
//@param jsonObj 过滤条件查询 
//@return 实例对象Dict 
List<Map> dictList(JSONObject jsonObj);
}
