package com.ipincloud.iotbj.srv.dao;
import com.ipincloud.iotbj.srv.domain.User;
import org.apache.ibatis.annotations.Param;
import java.util.List;
import java.util.Map;
import com.alibaba.fastjson.JSONObject;
//(UserDao) 表数据库访问层
//generate by redcloud,2020-07-07 23:53:41
public interface UserDao {
    //@param id 主键 
    //@return 实例对象User 
    User queryById(Long id);
    //@param userName 账号 
    //@return 实例对象User 
    User queryByUsername(String userName);
    //已处理，查看服务:/useraccount 
    //@param jsonObj 过滤条件等 
    //@return 实例对象User 
    void addInst(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 实例对象User 
    void updateInst(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 实例对象 
    List<Map> userList(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 总条数list 
    Integer countUserList(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 实例对象User 
    List<Map> userUserRoleListJoin(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 总条数listjoin 
    Integer countUserUserRoleListJoin(@Param("jsonObj") JSONObject jsonObj);
    //@param jsonObj 过滤条件等 
    //@return 影响记录数 
    Integer deletesInst(@Param("jsonObj") JSONObject jsonObj);
}
