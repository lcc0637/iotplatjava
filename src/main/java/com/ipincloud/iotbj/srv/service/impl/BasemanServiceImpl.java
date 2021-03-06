package com.ipincloud.iotbj.srv.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import javax.annotation.Resource;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import com.alibaba.fastjson.JSONObject;
import com.ipincloud.iotbj.srv.domain.Baseman;
import com.ipincloud.iotbj.srv.dao.*;
import com.ipincloud.iotbj.srv.service.BasemanService;
import com.ipincloud.iotbj.utils.ParaUtils;
//(Baseman)基站管理 服务实现类
//generate by redcloud,2020-07-24 19:59:20
@Service("BasemanService")
public class BasemanServiceImpl implements BasemanService {
    @Resource
    private BasemanDao basemanDao;

    //@param id 主键 
    //@return 实例对象Baseman 
    @Override 
    public Baseman queryById(Long id){
        return this.basemanDao.queryById(id); 
    } 

    //@param jsonObj 过滤条件等 
    //@return 对象查询Baseman 分页 
    @Override
    public Map basemanList(JSONObject jsonObj){

        int totalRec = this.basemanDao.countBasemanList(jsonObj);
        jsonObj = ParaUtils.checkStartIndex(jsonObj,totalRec);
        List<Map> pageData = this.basemanDao.basemanList(jsonObj);
        Map retMap = new HashMap();
        retMap.put("pageData",pageData);
        retMap.put("totalRec",totalRec);
        retMap.put("cp",jsonObj.get("cp"));
        retMap.put("rop",jsonObj.get("rop"));
        return retMap;
    }
            
    
    //@param jsonObj 调用参数  
    //@return 影响记录数 
    @Override 
    @Transactional(isolation = Isolation.REPEATABLE_READ,propagation = Propagation.REQUIRED,rollbackFor = Exception.class)
    public Integer deletesBasemanInst(JSONObject jsonObj){
        Integer delNum1 = this.basemanDao.deletesInst(jsonObj); 
                return delNum1;
    } 

    //@param jsonObj 调用参数 
    //@return 实例对象Baseman 
    @Override 
    public JSONObject addInst( JSONObject jsonObj){
        
            jsonObj = ParaUtils.removeSurplusCol(jsonObj,"id,title,type,area,factory,recenttime,state,ipaddress,url");
            this.basemanDao.addInst(jsonObj);
        // jsonObj.put("id",genId);
        return jsonObj;
            
    } 

    //@param jsonObj 调用参数 
    //@return 影响记录数Baseman 
    @Override 
    public void updateInst(JSONObject jsonObj){
        jsonObj = ParaUtils.removeSurplusCol(jsonObj,"id,title,type,area,factory,recenttime,state,ipaddress,url");        this.basemanDao.updateInst(jsonObj); 
    } 
}
