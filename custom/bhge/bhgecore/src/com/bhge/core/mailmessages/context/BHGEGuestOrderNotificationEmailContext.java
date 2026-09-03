package com.bhge.core.mailmessages.context;

public class BHGEGuestOrderNotificationEmailContext {

    private String userName;

    private String userEmail;

    private String userSoldTo;

    private String hybrisOrderNumber;

    private String orderStatus;

    private String subject;

    private String mediaBaseUrl;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getUserSoldTo() {
        return userSoldTo;
    }

    public void setUserSoldTo(String userSoldTo) {
        this.userSoldTo = userSoldTo;
    }

    public String getHybrisOrderNumber() {
        return hybrisOrderNumber;
    }

    public void setHybrisOrderNumber(String hybrisOrderNumber) {
        this.hybrisOrderNumber = hybrisOrderNumber;
    }

    public String getOrderStatus() {
        return orderStatus;
    }

    public void setOrderStatus(String orderStatus) {
        this.orderStatus = orderStatus;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMediaBaseUrl() {
        return mediaBaseUrl;
    }

    public void setMediaBaseUrl(String mediaBaseUrl) {
        this.mediaBaseUrl = mediaBaseUrl;
    }
}
