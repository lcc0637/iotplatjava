package com.ipincloud.iotbj.srv.dao;
import com.ipincloud.iotbj.srv.domain.UserCard;
import org.apache.ibatis.annotations.Param;
import java.util.List;
import java.util.Map;
import com.alibaba.fastjson.JSONObject;
//(UserCardDao)用户卡片 表数据库访问层
//generate by redcloud,2020-07-24 19:59:20
public interface UserCardDao {
    //@param id 主键 
    //@return 实例对象UserCard 
    UserCard queryById(Long id);
    //@param jsonObj 过滤条件等 
    //@return 实例对象UserCard 
    int addInst(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 实例对象 
    List<Map> userCardList(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 总条数list 
    Integer countUserCardList(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 实例对象UserCard 
    int updateInst(@Param("jsonObj") JSONObject jsonObj);
}
