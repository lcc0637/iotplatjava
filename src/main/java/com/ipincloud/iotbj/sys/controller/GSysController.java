package com.ipincloud.iotbj.sys.controller;

import java.io.UnsupportedEncodingException;
import java.util.List;
import java.util.Map;
import java.util.ArrayList;
import javax.servlet.http.HttpServletResponse;

import org.apache.shiro.authz.UnauthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.JSON;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;

import com.ipincloud.iotbj.utils.FileUtils;
import com.ipincloud.iotbj.utils.RsaUtils;

import com.ipincloud.iotbj.sys.config.JWTUtil;
import com.ipincloud.iotbj.sys.domain.ResponseBean;
import com.ipincloud.iotbj.sys.messinfo.MessageInfo;

import com.ipincloud.iotbj.srv.domain.*;
import com.ipincloud.iotbj.srv.service.*;
import com.ipincloud.iotbj.srv.service.impl.*;

@RestController
public class GSysController {

	private Logger logger = LoggerFactory.getLogger(this.getClass().getName());
	
	@PostMapping("/actq")
	public Object actq(@RequestBody String bodyStr,
							  HttpServletResponse response)  {

		JSONObject jsonObj =  JSON.parseObject(bodyStr);
		String hyVal = jsonObj.getString("_hy");

		if (hyVal == null || "".equals(hyVal)){
			ResponseBean retResponseBean = new ResponseBean(200,"FAILED", "获取的参数不正确!",null);
        	return JSON.toJSONString(retResponseBean);
		}

		Subject currentUser = SecurityUtils.getSubject();
		if(!currentUser.isPermitted(hyVal)){
            ResponseBean retResponseBean = new ResponseBean(200,"FAILED", "权限不足,请与管理员联系",null);
        	return JSON.toJSONString(retResponseBean);
        }
		

		if  ("userlist".equals(hyVal) ){
			List<Map> listMap = userService.queryUserList(jsonObj);
			ResponseBean retResponseBean = new ResponseBean(200,"SUCCESS", "操作成功",listMap);
        
        	return JSON.toJSONString(retResponseBean);
		}

		return new ResponseBean(200,"SUCCESS", "未处理的服务查询命令",nil);
	}
}