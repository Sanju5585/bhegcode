package com.bhge.core.mailmessages.context;

import com.bhge.core.data.BHGEOrderUpdateEmailNotificationData;
import de.hybris.platform.util.Config;
import org.apache.log4j.Logger;

import java.util.List;

public class BHGEOrderUpdateMailContext {
   private static final Logger LOG = Logger.getLogger(BHGEOrderUpdateMailContext.class);

    private List<BHGEOrderUpdateEmailNotificationData> orderUpdateEmailNotificatonList;
    private String subject;
    private String customerName;
    private String mediaBaseUrl;
    private boolean headerUpdate;
    private boolean itemUpdate;
    private String jsUrl;

    public String getJsUrl() {
        return jsUrl;
    }

    public void setJsUrl(String jsUrl) {
        this.jsUrl = jsUrl;
    }

    public boolean isHeaderUpdate() {
        return headerUpdate;
    }

    public void setHeaderUpdate(boolean headerUpdate) {
        this.headerUpdate = headerUpdate;
    }

    public boolean isItemUpdate() {
        return itemUpdate;
    }

    public void setItemUpdate(boolean itemUpdate) {
        this.itemUpdate = itemUpdate;
    }



    public String getMediaBaseUrl() {
        return mediaBaseUrl;
    }
    public void setMediaBaseUrl(String mediaBaseUrl) {
        this.mediaBaseUrl = mediaBaseUrl;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public List<BHGEOrderUpdateEmailNotificationData> getOrderUpdateEmailNotificatonList() {
        return orderUpdateEmailNotificatonList;
    }

    public void setOrderUpdateEmailNotificatonList(List<BHGEOrderUpdateEmailNotificationData> orderUpdateEmailNotificatonList) {
        this.orderUpdateEmailNotificatonList = orderUpdateEmailNotificatonList;
    }



}

