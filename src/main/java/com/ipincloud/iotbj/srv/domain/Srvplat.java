package com.ipincloud.iotbj.srv.domain;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Time;
import java.sql.Date;
import java.sql.Timestamp;
import com.alibaba.fastjson.annotation.JSONField;

//(Srvplat)接入平台
//generate by redcloud,2020-07-07 10:18:15
public class Srvplat implements Serializable {
    // 主键ID
    private Long id ;
    // 平台名称
    private String title ;
    // 厂商
    private String corp ;
    // 平台版本
    private String ver ;
    // 备注
    private String memo ;

    public Long getId() {
        return id ;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title ;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCorp() {
        return corp ;
    }

    public void setCorp(String corp) {
        this.corp = corp;
    }

    public String getVer() {
        return ver ;
    }

    public void setVer(String ver) {
        this.ver = ver;
    }

    public String getMemo() {
        return memo ;
    }

    public void setMemo(String memo) {
        this.memo = memo;
    }

}

