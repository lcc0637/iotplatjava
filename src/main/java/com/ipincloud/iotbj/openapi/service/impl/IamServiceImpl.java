package com.ipincloud.iotbj.openapi.service.impl;


import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import com.ipincloud.iotbj.openapi.service.IamService;

import com.ipincloud.iotbj.srv.dao.OrgDao;
import com.ipincloud.iotbj.srv.dao.UserDao;
import com.ipincloud.iotbj.srv.dao.RoleDao;
import com.ipincloud.iotbj.srv.dao.RolePageDao;
import com.ipincloud.iotbj.srv.dao.UserRoleDao;

import com.ipincloud.iotbj.srv.domain.User;
import com.ipincloud.iotbj.srv.domain.Org;
import com.ipincloud.iotbj.srv.domain.Role;
import com.ipincloud.iotbj.srv.domain.RolePage;
import com.ipincloud.iotbj.srv.domain.UserRole;
import com.ipincloud.iotbj.srv.domain.Page;

import com.ipincloud.iotbj.sys.domain.ResponseBean;

import com.ipincloud.iotbj.utils.FileUtils;
import com.ipincloud.iotbj.utils.ParaUtils;
import com.ipincloud.iotbj.utils.StringUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import import com.ipincloud.iotbj.openapi.domain.ResponseOpenApi;

@Service
@Transactional
public class IamServiceImpl implements IamService {

    @Autowired
    UserDao userDao;
    @Autowired
    OrgDao orgDao;
    @Autowired
    RoleDao roleDao;
    @Autowired
    RolePageDao rolePageDao;
    @Autowired
    UserRoleDao userRoleDao;

    //1.增加或更新用户
    @Override
    public Object saveOrUpdateUser(JSONObject jsonObj){

        if(jsonObj == null || jsonObj.isEmpty()){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }
        Object[] dArr = jsonObj.getJSONArray("saveOrUpdateUser");
        if (dArr == null || dArr.isEmpty() || dArr.size() < 1){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }

        for (int i = 0; i < dArr.size(); i++) {
            JSONObject itemObject = dArr.getJSONObject(i);
            if(itemObject == null){
                continue;
            }
            String personId = itemObject.getString("personId");
            JSONObject userJsonObj = userDao.queryByPersonId(personId);

            if (userJsonObj != null ){

                userJsonObj.put("user_name",itemObject.getString("loginName"));
                userJsonObj.put("mobile",itemObject.getString("mobile"));
                userJsonObj.put(,"title",itemObject.getString("name"));
                Long orgId = itemObject.getLong("orgId");
                if (orgId > 0 ){
                    userJsonObj.put("parent_id",orgId);
                    //查用户部门title
                    Org org = orgDao.queryById(itemObject.getLong("orgId"));
                    if(org != null ){
                        userJsonObj.put("parent_title",org.getParentTitle());
                    }
                }else{
                    userJsonObj.put("parent_id",0);
                }
                
                
                String photo = itemObject.getString("photo");
                if( StringUtils.isNotEmpty( itemObject.getString("photo") ) ){
                    userJsonObj.put("photo"," ;/upload/headimage/"+photo);
                }

                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd' 'HH:mm:ss");

                if (StringUtils.isNotEmpty(itemObject.getString("createDate"))){
                    Date date = simpleDateFormat.parse(itemObject.getString("createDate"));
                    userJsonObj.put("created",date.getTime());
                }
                if (StringUtils.isNotEmpty(itemObject.getString("updateDate"))){
                    Date date = simpleDateFormat.parse(itemObject.getString("updateDate"));
                    userJsonObj.put("updated",date.getTime());
                }

                userDao.updateInst(userJsonObj);

            }else{
                JSONObject orgJsonObj = new JSONObject();
                orgJsonObj.put("type","user");

                Long orgId = itemObject.getLong("orgId");
                if (orgId > 0 ){
                    orgJsonObj.put("parent_id",orgId);
                    //查用户部门title
                    Org org = orgDao.queryById(itemObject.getLong("orgId"));
                    if(org != null ){
                        orgJsonObj.put("parent_title",org.getParentTitle());
                    }
                }else{
                    orgJsonObj.put("parent_id",0);
                }

                orgJsonObj.put("stop","f");
                orgJsonObj.put("tile",itemObject.getString("name"));
                orgDao.addInst(orgJsonObj);

                userJsonObj = new JSONObject();
                userJsonObj.put("id",orgJsonObj.getLong("id"));
                userJsonObj.put("user_name",itemObject.getString("loginName"));
                userJsonObj.put("mobile",itemObject.getString("mobile"));
                userJsonObj.put(,"title",itemObject.getString("name"));
                //Long orgId

                if (orgId > 0 ){
                    userJsonObj.put("parent_id",orgId);
                    //查用户部门title
                    Org org = orgDao.queryById(itemObject.getLong("orgId"));
                    if(org != null ){
                        userJsonObj.put("parent_title",org.getParentTitle());
                    }
                }else{
                    userJsonObj.put("parent_id",0);
                }

                String photo = itemObject.getString("photo");
                if( StringUtils.isNotEmpty( itemObject.getString("photo") ) ){
                    userJsonObj.put("photo"," ;/upload/headimage/"+photo);
                }

                SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd' 'HH:mm:ss");

                if (StringUtils.isNotEmpty(itemObject.getString("createDate"))){
                    Date date = simpleDateFormat.parse(itemObject.getString("createDate"));
                    userJsonObj.put("created",date.getTime());
                }
                if (StringUtils.isNotEmpty(itemObject.getString("updateDate"))){
                    Date date = simpleDateFormat.parse(itemObject.getString("updateDate"));
                    userJsonObj.put("updated",date.getTime());
                }

                userDao.addInst(userJsonObj);
            }
        }

        return new ResponseBean(200,"SUCCESS","用户增加成功.",null);
    }

    //2.批量删除用户
    @Override 
    public Object deleteUsers(JSONObject jsonObj){

        if(jsonObj == null || jsonObj.isEmpty()){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }
        Object[] dArr = jsonObj.getJSONArray("deleteUsers");
        if (dArr == null || dArr.isEmpty() || dArr.size() < 1){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }

        JSONObject jsonQuery = new JSONObject();

        List<Map> qMapList = new List<HashMap>();
        Map qMap = new HashMap();
        qMap.put("name","personId");
        qMap.put("op","in");
        qMap.put("val",dArr);
        qMapList.add(qMap);

        jsonQuery.put("qps",qMapList)
        jsonQuery.put("cp",1);
        jsonQuery.put("rop",1000);

        List<Map> pageUsers = this.userDao.userList(jsonQuery);

        if (pageData == null || pageData.size() < 1) {
            return new ResponseBean(200,"FAILED","数据没有需要删除的数据.",null); 
        }
        List<Integer> delIds = new ArrayList();
        for(Map userMap : pageUsers){
            delIds.add(userMap.get("id"));
        }

        JSONObject jsonDelUser = new JSONObject();

        Map userParaMap = new HashMap();
        userParaMap.put("name","id");
        userParaMap.put("op","in");
        userParaMap.put("val",delIds);

        List<Map> orgParaMaps = new List<HashMap>();
        orgParaMaps.add(userParaMaps);

        jsonDelUser.put("user",userParaMaps);

        JSONObject jsonDelOrg = new JSONObject();
        jsonDelOrg.put("org",userParaMaps);


        Map userRoleParaMap = new HashMap();
        userRoleParaMap.put("name","user_id");
        userRoleParaMap.put("op","in");
        userRoleParaMap.put("val",delIds);

        JSONObject jsonDelUserRole = new JSONObject();
        jsonDelUserRole.put("user_role",userRoleParaMap);


        Integer delNum1 = this.orgDao.deletesInst(jsonDelOrg);
        Integer delNum2 = 0;
        delNum2 = this.userDao.deletesInst(jsonDelUser);
        delNum1 = delNum1 + delNum2;
        delNum2 = this.userRoleDao.deletesInst(jsonDelUserRole);
        delNum1 = delNum1 + delNum2;
        

        return new ResponseBean(200,"SUCCESS","删除用户成功.",delNum1);
    }
    //3.批量增加或更新岗位信息
    @Override
    public Object saveOrUpdatePos(JSONObject jsonObj){

        if(jsonObj == null || jsonObj.isEmpty()){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }
        Object[] dArr = jsonObj.getJSONArray("saveOrUpdatePos");
        if (dArr == null || dArr.isEmpty() || dArr.size() < 1){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }

        for (int i = 0; i < dArr.size(); i++) {

            JSONObject itemObject = dArr.getJSONObject(i);
            if(itemObject == null){
                continue;
            }

            String thirdUUID = itemObject.getString("id");
            String personId = itemObject.getString("userId");
            if (StringUtils.isEmpty(personId)) {
                continue;
            }

            JSONObject roleJsonObj = roleDao.queryByThirdUUID(thirdUUID);
            if (roleJsonObj != null ){

                roleJsonObj.put("thirdUUID",thirdUUID);
                roleJsonObj.put("title",itemObject.getString("mainPos"));
                roleObj.updateInst(roleJsonObj);

                JSONObject userJsonObj = userDao.queryByPersonId(personId);
                if(userJsonObj != null){
                    userRoleJsonObj = new JSONObject();
                    userRoleJsonObj.put("user_id",userJsonObj.getLong("id"));
                    userRoleJsonObj.put("role_id",roleJsonObj.getLong("id"));

                    userRoleDao.addInst(userRoleJsonObj);
                }

            }else{
                
                roleJsonObj = new roleJsonObj();
                roleJsonObj.put("thirdUUID",thirdUUID);
                roleJsonObj.put("title",itemObject.getString("mainPos"));

                roleDao.addInst(roleJsonObj);

                JSONObject userJsonObj = userDao.queryByPersonId(personId);
                if(userJsonObj != null){
                    userRoleJsonObj = new JSONObject();
                    userRoleJsonObj.put("user_id",userJsonObj.getLong("id"));
                    userRoleJsonObj.put("role_id",roleJsonObj.getLong("id"));

                    userRoleDao.addInst(userRoleJsonObj);
                }

            }
        }

        return new ResponseBean(200,"SUCCESS","更新或新增角色成功.",null);
    }
    //4.批量删除岗位信息
    @Override
    public Object deletePoss(JSONObject jsonObj){

        if(jsonObj == null || jsonObj.isEmpty()){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }
        Object[] dArr = jsonObj.getJSONArray("deletePoss");
        if (dArr == null || dArr.isEmpty() || dArr.size() < 1){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }

        JSONObject jsonDelRole = new JSONObject();

        Map paraMap = new HashMap();
        paraMap.put("name","id");
        paraMap.put("op","in");
        paraMap.put("val",delIds);

        List<Map> roleParaMaps = new List<HashMap>();
        roleParaMaps.add(paraMap);

        jsonDelRole.put("role",roleParaMaps);


        JSONObject jsonDelUserRole = new JSONObject();

        Map userRoleParaMap = new HashMap();
        userRoleParaMap.put("name","role_id");
        userRoleParaMap.put("op","in");
        userRoleParaMap.put("val",delIds);

        List<Map> userRoleParaMaps = new List<HashMap>();
        userRoleParaMaps.add(userRoleParaMap);

        jsonDelUserRole.put("user_role",userRoleParaMaps);

        roleDao.deletesInst(jsonDelRole);
        userRoleDao.deletesInst(jsonDelUserRole);

        return new ResponseBean(200,"SUCCESS","删除角色成功.",null);
    }
    //5.批量增加或更新用户与岗位关系
    @Override
    public Object saveOrUpdateUserPos(JSONObject jsonObj){

        if(jsonObj == null || jsonObj.isEmpty()){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }
        Object[] dArr = jsonObj.getJSONArray("saveOrUpdatePos");
        if (dArr == null || dArr.isEmpty() || dArr.size() < 1){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }

        for (int i = 0; i < dArr.size(); i++) {

            JSONObject itemObject = dArr.getJSONObject(i);
            if(itemObject == null){
                continue;
            }

            String userRoleThirdUUID = itemObject.getString("id");
            String userThirdUUID = itemObject.getString("userId");
            String roleThirdUUID = itemObject.getString("posId");
            if (StringUtils.isEmpty(userRoleThirdUUID) || StringUtils.isEmpty(userThirdUUID)||
                StringUtils.isEmpty(roleThirdUUID) ) {
                continue;
            }
            JSONObject userRoleJsonObj userRoleDao.queryByThirdUUID(userRoleThirdUUID);
            if (userRoleJsonObj != null ){
                //check user and role exist ...
                JSONObject roleJsonObj = roleDao.queryByThirdUUID(roleThirdUUID);
                JSONObject userJsonObj = userDao.queryByThirdUUID(userThirdUUID);
                if(roleJsonObj ==null || userJsonObj == null){
                    logger.info("角色或者用户为空.");
                    continue;
                }

                userRoleJsonObj.put("user_id",userJsonObj.getLong("id"));
                userRoleJsonObj.put("role_id",roleJsonObj.getLong("id"));

                userRoleDao.updateInst(userRoleJsonObj);
            }else{
                //check user and role exist ...
                JSONObject roleJsonObj = roleDao.queryByThirdUUID(roleThirdUUID);
                JSONObject userJsonObj = userDao.queryByThirdUUID(userThirdUUID);
                if(roleJsonObj ==null || userJsonObj == null){
                    logger.info("角色或者用户为空.");
                    continue;
                }

                userRoleJsonObj.put("user_id",userJsonObj.getLong("id"));
                userRoleJsonObj.put("role_id",roleJsonObj.getLong("id"));

                userRoleDao.addInst(userRoleJsonObj);

            }
            
        }

        return new ResponseBean(200,"SUCCESS","更新或新增用户角色成功.",null);
    }
    @Override
    public Object deleteUserPoss(JSONObject jsonObj){

        if(jsonObj == null || jsonObj.isEmpty()){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }
        Object[] dArr = jsonObj.getJSONArray("deleteUserPoss");
        if (dArr == null || dArr.isEmpty() || dArr.size() < 1){
            return new ResponseBean(200,"FAILED","没有收到有效数据.",null);
        }

        List<Integer> delIds = new ArrayList();
        for(Map userMap : pageUsers){
            delIds.add(userMap.get("id"));
        }

        JSONObject jsonDelUserRole = new JSONObject();

        Map paraMap = new HashMap();
        paraMap.put("name","id");
        paraMap.put("op","in");
        paraMap.put("val",delIds);


        List<Map> userRoleParaMaps = new List<HashMap>();
        userRoleParaMaps.add(paraMap);

        jsonDelUserRole.put("user_role",userRoleParaMaps);

        jsonDelUserRole.deletesInst(jsonDelRole);

        return new ResponseBean(200,"SUCCESS","删除角色成功.",null);
    }

    @Override
    public Object policyadd(JSONObject jsonObj) {
        JSONArray gateways = jsonObj.getJSONArray("gateways");
        JSONArray persons = jsonObj.getJSONArray("persons");
        if (gateways != null && persons != null && (gateways.size() * persons.size()) > 100) {
            return new ResponseBean(200, "FAILED", "单次数量超出100", null);
        }
        Long starttime = jsonObj.getLong("starttime");
        Long endtime = jsonObj.getLong("endtime");
        if (starttime == null || starttime == 0 || endtime == null || endtime == 0) {
            return new ResponseBean(200, "FAILED", "未配置通行时间", null);
        }
        JSONObject policy = new JSONObject();
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        String startTime = simpleDateFormat.format(new Date(starttime));
        String endTime = simpleDateFormat.format(new Date(endtime));
        Set<JSONObject> resourceInfos = new HashSet<>();
        Set<JSONObject> personInfos = new HashSet<>();
        //List<JSONObject> errInfos = new ArrayList<>();
        for (int i = 0; i < gateways.size(); i++) {
            JSONObject joi = gateways.getJSONObject(i);
            for (int j = 0; j < persons.size(); j++) {
                JSONObject joj = persons.getJSONObject(j);
                policy.put("acsDevIndexCode", joi.getString("acsDevIndexCode"));
                policy.put("personId", joj.getString("personId"));
                //添加人员信息
                if (StringUtils.isNotEmpty(joj.getString("personId"))) {
                    JSONObject person = faceDao.findUserByPersonId(joj.getString("personId"));
                    JSONObject personInfo = new JSONObject();
                    personInfo.put("personId", person.getString("personId"));
                    personInfo.put("operatorType", 1);
                    personInfo.put("startTime", startTime);
                    personInfo.put("endTime", endTime);
                    personInfo.put("personType", "1");
                    personInfo.put("name", person.getString("title"));
                    List<JSONObject> cards = new ArrayList<>();
                    JSONObject card = new JSONObject();
                    card.put("card", Objects.equals("", person.getString("mobile")) ? person.getString("idnumber") : person.getString("mobile"));
                    card.put("status", 0);
                    card.put("cardType", 1);
                    cards.add(card);
                    personInfo.put("cards", cards);
                    JSONObject face = new JSONObject();
                    face.put("card", null);
                    Map faceData = new HashMap<>();
                    String photo = person.getString("photo");
                    if (StringUtils.isEmpty(photo)) {
                        break;
                    }
                    String imgPath = localhostUri + "/face/img?imgPath=" + FileUtils.getRealFilePath(photo);
                    faceData.put("f" + person.getString("id"), imgPath);
                    face.put("data", faceData);
                    personInfo.put("face", face);
                    personInfos.add(personInfo);
                } else {
                    break;
                }
                //添加资源信息
                if (StringUtils.isNotEmpty(policy.getString("acsDevIndexCode"))) {
                    JSONObject resourceInfo = new JSONObject();
                    //resourceInfo.put("resourceIndexCode", policy.getString("acsDevIndexCode"));
                    //resourceInfo.put("resourceType", "acsDevice");
                    List<JSONObject> doors = faceDao.findGatewayByIndexCode(policy.getString("acsDevIndexCode"));
                    resourceInfo.put("resourceIndexCode", doors.get(0).getString("doorIndexCode"));
                    resourceInfo.put("resourceType", doors.get(0).getString("channelType"));
                    JSONArray channelNos = new JSONArray();
                    if (doors != null) {
                        for (int k = 0; k < doors.size(); k++) {
                            channelNos.add(doors.get(k).getInteger("channelNo"));
                        }
                    } else {
                        channelNos.add(1);
                    }
                    resourceInfo.put("channelNos", channelNos);
                    resourceInfos.add(resourceInfo);
                } else {
                    break;
                }
                policy.put("region_id", joi.getLong("region_id"));
                policy.put("gateway_id", joi.getLong("gateway_id"));
                policy.put("user_id", joj.getLong("user_id"));
                policy.put("org_id", joj.getLong("org_id"));
                policy.put("starttime", starttime);
                policy.put("endtime", endtime);
                policy.put("created", System.currentTimeMillis());
                policy.put("updated", System.currentTimeMillis());
                policy.put("state", "配置通过");
                faceDao.insertPolicy(policy);

                policy.clear();
            }
        }
        if (hikEnable) {
            ApiService.authDownload(resourceInfos, personInfos);
        }
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    public void policyallow(Set<String> personIds, Set<Map> acsDevIndexCodes, long starttime, long endtime) {
        if (personIds == null || acsDevIndexCodes == null) {
            return;
        }
        JSONObject param = new JSONObject();
        List<Map> personDatas = new ArrayList<>();
        Map person = new HashMap<>();
        person.put("personDataType", "person");
        person.put("indexCodes", personIds);
        personDatas.add(person);

        param.put("personDatas", personDatas);
        param.put("resourceInfos", acsDevIndexCodes);

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        String startTime = simpleDateFormat.format(new Date(starttime));
        String endTime = simpleDateFormat.format(new Date(endtime));
        param.put("startTime", startTime);
        param.put("endTime", endTime);
        ApiService.authconf(param);
    }

    public Object policyprohibit(JSONObject jsonObj) {
        Long policyId = jsonObj.getLong("id");
        if (policyId == null || policyId == 0) {
            return new ResponseBean(200, "FAILED", "操作失败", jsonObj);
        }
        String state = "禁止";
        faceDao.updatePolicyState(policyId, state);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object policydel(JSONArray jsonObj) {
        if (jsonObj == null || jsonObj.size() < 1) {
            return new ResponseBean(200, "FAILED", "操作失败", null);
        }
        //调用第三方接口进行删除权限
        // ApiService.

        faceDao.deletePolicyById(jsonObj);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object visithistorylist(JSONObject jsonObj) {
        int totalRec = faceDao.countHistory(jsonObj);
        jsonObj = ParaUtils.checkStartIndex(jsonObj, totalRec);
        List<Map> list = faceDao.listHistory(jsonObj);
        jsonObj.put("pageData", list);
        jsonObj.put("totalRec", totalRec);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object visitpersonadd(JSONObject jsonObj) {
        JSONObject jsonObjFirst = null;
        JSONObject jsonObjSecond = null;
        JSONObject visit = new JSONObject();
        JSONObject user = faceDao.getUserByIdnumber(jsonObj.getString("idnumber"));
        Long userId = null;
        if (user == null) {
            jsonObjFirst = ParaUtils.copyJsonObjectCols(jsonObj, "id,type,parent_id,sort,data_scope,stop,memo,parent_title,title,orgIndexCode");
            jsonObjFirst.put("type", "user");
            this.orgDao.addInst(jsonObjFirst);
            jsonObjSecond = ParaUtils.copyJsonObjectCols(jsonObj, "mobile,user_name,pwd,id,title,parent_id,parent_title,lastlogin,job_title,job_id,thirdin,created,updated,photo,idnumber,cardnumber,mcardno,gender,personId");
            jsonObjSecond.put("id", jsonObjFirst.get("id"));
            this.userDao.addInst(jsonObjSecond);
            String personId = "";
            if (hikEnable) {
                //通过身份证查询海康是否存在人员
                JSONObject certifi = new JSONObject();
                certifi.put("certificateType", "111");
                certifi.put("certificateNo", jsonObjSecond.getString("idnumber"));
                JSONObject hikperson = ApiService.getPersonbycertificateno(certifi);
                if (hikperson != null) {
                    return new ResponseBean(500, "FAILED", "海康平台已存在此人员,无需新增记录", null);
                }
                JSONObject person = new JSONObject();
                person.put("personName", jsonObjSecond.getString("title"));
                if (Objects.equals("男", jsonObjSecond.getString("gender"))) {
                    person.put("gender", "1");
                } else if (Objects.equals("女", jsonObjSecond.getString("gender"))) {
                    person.put("gender", "2");
                } else {
                    person.put("gender", "0");
                }
                ApiModel.HikOrg hikOrg = ApiService.getOrgRoot();
                if (hikOrg == null) {
                    return new ResponseBean(500, "FAILED", "海康平台的根部门不存在", null);
                }
                person.put("orgIndexCode", hikOrg.orgIndexCode);
                person.put("phoneNo", jsonObjSecond.getString("mobile"));
                person.put("certificateType", "111");
                person.put("certificateNo", jsonObjSecond.getString("idnumber"));
                if (Objects.equals("", jsonObjSecond.getString("user_name"))) {
                    person.put("jobNo", jsonObjSecond.getString("user_name"));
                } else {
                    person.put("jobNo", jsonObjSecond.getString("jobno"));
                }
                List<Map> list = new ArrayList();
                Map face = new HashMap();
                String str = "";
                if (StringUtils.isNotEmpty(jsonObjSecond.getString("photo"))) {
                    str = FileUtils.readImgBase64Code(jsonObjSecond.getString("photo"));
                }
                face.put("faceData", str);
                list.add(face);
                person.put("faces", list);
                personId = ApiService.addPerson(person);
            }
            if (StringUtils.isNotEmpty(personId)) {
                jsonObjSecond.put("personId", jsonObjSecond);
                userDao.updateInst(jsonObjSecond);
            }
            userId = jsonObjSecond.getLong("id");
        } else {
            userId = user.getLong("id");
        }
        User newUser = userDao.queryById(userId);

        visit.put("visit_id", newUser.getId());
        visit.put("visit_title", newUser.getTitle());
        visit.put("interview_ids", jsonObj.getString("interview_ids"));
        visit.put("interview_titles", jsonObj.getString("interview_titles"));
        List<JSONObject> gateways = faceDao.findGatewayByName("东二门");
        if (gateways == null) {
            return new ResponseBean(400, "FAILED", "找不到东二门的门禁设备", jsonObj);
        }
        List<String> gateway_ids = new ArrayList<>();
        List<String> gateway_titles = new ArrayList<>();
        for (JSONObject jsonObject : gateways) {
            gateway_ids.add(jsonObject.getString("id"));
            gateway_titles.add(jsonObject.getString("title"));
        }
        visit.put("gateway_id", gateway_ids.toString().replace("[", "").replace("]", "")); //默认东二门
        visit.put("gateway_title", gateway_titles.toString().replace("[", "").replace("]", "")); //默认东二门
        visit.put("conftime", System.currentTimeMillis());
        visit.put("starttime", System.currentTimeMillis());
        visit.put("endtime", System.currentTimeMillis() + (24 * 3600 * 1000));
        visit.put("state", "申请中");
        visit.put("created", System.currentTimeMillis());
        visit.put("updated", System.currentTimeMillis());
        faceDao.insertVisit(visit);
        //向oa系统推送访问记录
        String id = visit.getString("id");
        String guId = newUser.getId() + "";
        String name = newUser.getTitle();
        String certificateNum = newUser.getIdnumber();
        String mobile = newUser.getMobile();
        String gender = newUser.getGender();
        String targetUserId = visit.getString("interview_ids");
        String targetUserName = visit.getString("interview_titles");
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        String startTime = simpleDateFormat.format(new Date(visit.getLong("starttime")));
        String endTime = simpleDateFormat.format(new Date(visit.getLong("endtime")));
        String createTime = simpleDateFormat.format(new Date());
        String status = visit.getString("state");

        String imgpath = FileUtils.getRealFilePath(newUser.getPhoto());
        String facePic = localhostUri + "/face/img?imgPath=" + imgpath;

        Guest guest = new Guest(id, guId, name, certificateNum, mobile, gender,
                targetUserId, targetUserName, startTime, endTime, facePic, createTime, status);
        new OAApi().sendNewGuestMessage(guest);

        return new ResponseBean(200, "SUCCESS", "操作成功", null);
    }

    @Override
    public Object visitpersoncheck(JSONObject jsonObj) {
        String idnumber = jsonObj.getString("idnumber");
        if (StringUtils.isEmpty(idnumber) || idnumber.length() != 15 && idnumber.length() != 18) {
            return new ResponseBean(200, "FAILED", "参数有误", null);
        }
        JSONObject user = faceDao.getUserByIdnumber(idnumber);
        if (user == null || user.getLong("id") < 1) {
            jsonObj.put("state", 0);
            jsonObj.put("message", "系统未录入此人");
            jsonObj.put("user", null);
        } else {
            jsonObj.put("state", 1);
            jsonObj.put("message", "系统已录入此人");

            Long userId = user.getLong("id");
            JSONObject visit = faceDao.findVisitByUser(userId);
            Long starttime = visit.getLong("starttime");
            Long endtime = visit.getLong("endtime");
            Long now = System.currentTimeMillis();

            user.remove("id");
            user.put("id", visit.getLong("id"));
            user.put("visit_id", userId);

            user.put("interview_ids", visit.getString("interview_ids"));
            user.put("interview_titles", visit.getString("interview_titles"));
            user.put("starttime", starttime);
            user.put("endtime", endtime);
            if (now < starttime || now > endtime) {
                user.put("timemsg", "无有效通行时间");
            }
            jsonObj.put("user", user);
        }
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object userlist(JSONObject jsonObj) {
        int totalRec = faceDao.countUser(jsonObj);
        jsonObj = ParaUtils.checkStartIndex(jsonObj, totalRec);
        List<Map> list = faceDao.listUserByName(jsonObj);
        jsonObj.put("pageData", list);
        jsonObj.put("totalRec", totalRec);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object visitList(JSONObject jsonObj) {
        int totalRec = faceDao.countVisit(jsonObj);
        jsonObj = ParaUtils.checkStartIndex(jsonObj, totalRec);
        List<Map> list = faceDao.listVisitByName(jsonObj);
        jsonObj.put("pageData", list);
        jsonObj.put("totalRec", totalRec);

        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object visitpersonup(JSONObject jsonObj) {
        if (jsonObj == null || jsonObj.getLong("id") < 1) {
            return new ResponseBean(200, "FAILED", "操作失败", null);
        }
        JSONObject user = new JSONObject();
        user.put("id", jsonObj.getLong("visit_id"));
        user.put("mobile", jsonObj.getLong("mobile"));
        user.put("photo", jsonObj.getLong("photo"));
        userDao.updateInst(user);

        JSONObject visit = new JSONObject();
        visit.put("id", jsonObj.getString("id"));
        visit.put("interview_ids", jsonObj.getString("interview_ids"));
        visit.put("interview_titles", jsonObj.getString("interview_titles"));
        visit.put("conftime", System.currentTimeMillis());
        visit.put("starttime", System.currentTimeMillis());
        visit.put("endtime", System.currentTimeMillis() + (24 * 3600 * 1000));
        visit.put("state", "申请中");
        visit.put("updated", System.currentTimeMillis());
        faceDao.updateVisit(visit);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object visitpersondel(JSONArray jsonObj) {
        if (jsonObj == null || jsonObj.size() < 1) {
            return new ResponseBean(200, "FAILED", "操作失败", null);
        }
        faceDao.deleteVisitById(jsonObj);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object visitresult(Long userId) {
        User user = userDao.queryById(userId);
        if (user == null) {
            return new ResponseBean(200, "FAILED", "系统没有此用户", null);
        }
        List<JSONObject> visitList = faceDao.findVisitByInterview("申请中", userId, user.getTitle());
        for (int i = 0; i < visitList.size(); i++) {
            JSONObject visit = visitList.get(i);
            User visitUser = userDao.queryById(visit.getLong("visit_id"));
            if (visitUser != null) {
                visit.put("user_title", visitUser.getTitle());
                visit.put("mobile", visitUser.getMobile());
                visit.put("parent_title", visitUser.getParentTitle());
                visit.put("idnumber", visitUser.getIdnumber());
                visit.put("photo", visitUser.getPhoto());
                visit.put("gender", visitUser.getGender());

                List<JSONObject> list = faceDao.findVisitByInterview(null, userId, user.getTitle());
                visit.put("visitHistory", list);
            }
        }
        return new ResponseBean(200, "SUCCESS", "操作成功", visitList);
    }

    @Override
    public Object visitallow(JSONObject jsonObj) {
        Long visitId = jsonObj.getLong("id");
        if (visitId == null || visitId == 0) {
            return new ResponseBean(200, "FAILED", "操作失败", jsonObj);
        }
        String state = "允许";
        faceDao.updateVisitState(visitId, state);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object visitprohibit(JSONObject jsonObj) {
        Long visitId = jsonObj.getLong("id");
        if (visitId == null || visitId == 0) {
            return new ResponseBean(200, "FAILED", "操作失败", jsonObj);
        }
        String state = "禁止";
        faceDao.updateVisitState(visitId, state);
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object cardadd(JSONObject jsonObj) {
        User user = userDao.queryById(jsonObj.getLong("user_id"));
        if (user == null) {
            return new ResponseBean(200, "FAILED", "该人员{" + jsonObj.getString("user_name") + "}在系统不存在，请先进行人员新增", null);
        } else if (user.getCardnumber() >= 5) {
            return new ResponseBean(200, "FAILED", "已到达卡片数量上限", null);
        }
        int count = faceDao.exitsCardByNo(jsonObj.getString("cardno"));
        if (count > 0) {
            return new ResponseBean(200, "FAILED", "该卡已发给其他人员", null);
        } else {
            jsonObj.put("state", "正常");
            faceDao.insertUserCard(jsonObj);
            faceDao.updateUserCardnumber(user.getId(), 1); //人员卡片数量加1
        }
        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }

    @Override
    public Object carddel(JSONArray jsonArray) {
        List<JSONObject> jsonObjects = faceDao.findCards(jsonArray);
        for (int i = 0; i < jsonObjects.size(); i++) {
            faceDao.updateUserCardnumber(jsonObjects.get(i).getLong("user_id"), -1); //人员卡片数量加1
        }
        faceDao.deleteCardByIds(jsonArray);
        return new ResponseBean(200, "SUCCESS", "操作成功", null);
    }

    @Override
    public Object cardstart(JSONArray jsonArray) {
        faceDao.updateCardState(jsonArray, "正常");
        return new ResponseBean(200, "SUCCESS", "操作成功", null);
    }

    @Override
    public Object cardstop(JSONArray jsonArray) {
        faceDao.updateCardState(jsonArray, "停用");
        return new ResponseBean(200, "SUCCESS", "操作成功", null);

    }

    @Override
    public Object cardlist(JSONObject jsonObj) {
        int totalRec = faceDao.countCard(jsonObj);
        jsonObj = ParaUtils.checkStartIndex(jsonObj, totalRec);
        List<Map> list = faceDao.listCard(jsonObj);
        jsonObj.put("pageData", list);
        jsonObj.put("totalRec", totalRec);

        return new ResponseBean(200, "SUCCESS", "操作成功", jsonObj);
    }


}