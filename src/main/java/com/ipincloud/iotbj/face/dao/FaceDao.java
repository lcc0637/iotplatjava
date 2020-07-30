package com.ipincloud.iotbj.face.dao;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;


public interface FaceDao {

    int countAcsdev(JSONObject jsonStr);

    List<Map> listAcsdevByName(JSONObject jsonStr);

    List<Map> listRegionByName(JSONObject jsonObj);

    int countGateway(JSONObject jsonStr);

    List<Map> listGatewayByName(JSONObject jsonStr);

    int insertGateway(@Param("jsonObj") JSONObject jsonObj);

    int updateGateway(JSONObject jsonObj);

    int deleteGatewayById(@Param("jsonObj") JSONArray jsonObj);

    int insertPolicy(@Param("jsonObj") JSONObject jsonObj);

    int countPolicy(JSONObject jsonObj);

    List<Map> listPolicy(JSONObject jsonObj);

    int updateGatewayState(String acsDevIndexCode);

    Map findPolicyById(Long id);

    int updatePolicyState(Long id, String state);

    int deletePolicyById(@Param("jsonObj") JSONArray jsonObj);

    Map findGatewayById(Long id);

    int countHistory(JSONObject jsonObj);

    List<Map> listHistory(JSONObject jsonObj);

    JSONObject getUserByIdnumber(String idnumber);

    int countUser(JSONObject jsonObj);

    List<Map> listUserByName(JSONObject jsonObj);

    int insertVisit(@Param("jsonObj") JSONObject jsonObj);

    int countVisit(JSONObject jsonObj);

    List<Map> listVisitByName(JSONObject jsonObj);

    int updateVisit(JSONObject jsonObj);

    int deleteVisitById(@Param("jsonObj") JSONArray jsonObj);

    JSONObject findVisitByUser(Long userId);

    List<JSONObject> listVisitByUser(Long userId, Long id);

    int updateVisitState(Long id, String state);

    JSONObject findVisitById(Long userId);

    int insertUserCard(@Param("jsonObj") JSONObject jsonObj);

    int exitsCardByNo(String cardno);

    int updateUserCardnumber(Long id, int num);

    List<JSONObject> findCards(@Param("ids") JSONArray ids);

    int deleteCardByIds(@Param("ids") JSONArray ids);

    int updateCardState(@Param("ids") JSONArray ids, String state);

    int countCard(JSONObject jsonObj);

    List<Map> listCard(JSONObject jsonObj);

    int insertEvent(String eventRcv);

    JSONObject findRegionByIndexCode(String regionIndexCode);

    List<JSONObject> findVisitByInterview(String state, Long userId, String userName);

    List<JSONObject> findGatewayByName(String doorName);

    List<JSONObject> findGatewayByIndexCode(String acsDevIndexCode);

    JSONObject findUserByPersonId(String personId);
}