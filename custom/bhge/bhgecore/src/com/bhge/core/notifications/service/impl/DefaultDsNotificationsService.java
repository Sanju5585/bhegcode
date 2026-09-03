package com.bhge.core.notifications.service.impl;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.*;

import jakarta.annotation.Resource;

import com.bhge.core.data.BHGEOrderUpdateEmailNotificationData;
import com.bhge.core.data.DsEmailNotificationData;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.OrderNotificationModel;
import com.bhge.core.order.daos.BHGEOrderNotificationDao;
import com.bhge.core.order.daos.impl.BHGEOrderNotificationDaoImpl;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.dsNotification.*;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;

import com.bhge.core.model.DSNotificationModel;
import com.bhge.core.notifications.dao.DsNotificationsDao;
import com.bhge.core.notifications.service.DsNotificationsService;
import com.bhge.facades.product.data.DSNotificationData;

import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.util.Config;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;


public class DefaultDsNotificationsService implements DsNotificationsService {
    public static final String BHGE_ORDER_UPDATE_NOTIFICATION_FILED = "bhge.order.update.notification.filed.";
    public static final String BHGE_ORDER_UPDATE_NOTIFICATION_STARTDATE = "bhge.order.update.notification.startdate";
    public static final String BHGE_ORDER_UPDATE_NOTIFICATION_ENDDATE = "bhge.order.update.notification.enddate";
    private static final Logger LOG = Logger.getLogger(DefaultDsNotificationsService.class);
    private static final String pattern = "yyyy-MM-dd";

    private static final String SCPI_ZHYB_DS_EMAIL_NOTIFICATION_URL = "scpi.zhyb.ds.email.notification.endpoint.url";
    private static final String ORDER_UPDATE_EMAIL_SUBJECT = "Updates on Your Orders";

	@Resource(name = "dsNotificationsDao")
	private DsNotificationsDao dsNotificationsDao;

    @Resource(name = "bhgeOrderNotificationDao")
    private BHGEOrderNotificationDao bhgeOrderNotificationDao;


	@Resource(name = "modelService")
	private ModelService modelService;

    @Resource(name = "b2bUnitService")
    private B2BUnitService b2bUnitService;

    @Autowired
    FlexibleSearchService flexibleSearchService;

    @Autowired
    private SCPIConnector scpiConnector;

    @Autowired
    private RendererService rendererService;

    @Autowired
    private BHGEEmailService bhgeEmailService;

    @Autowired
    private ConfigurationService configurationService;

    @Resource(name = "userProfileService")
    private BHGEUserProfileService userProfileService;

	@Override
	public void saveNotifications(DSNotificationModel dSNotificationModel) {
		// TODO Auto-generated method stub
		if(dSNotificationModel != null) {
			modelService.save(dSNotificationModel);
			modelService.refresh(dSNotificationModel);
		}

	}

	@Override
	public void setFlagNotification(String serialNumber, String partNumber, String customerNumber, boolean setFlag) {
		// TODO Auto-generated method stub
		DSNotificationModel dSNotificationModel = dsNotificationsDao.searchNotifications(serialNumber, partNumber, customerNumber);
		if(dSNotificationModel != null) {
		dSNotificationModel.setIsFlagged(setFlag);
		modelService.save(dSNotificationModel);
		modelService.refresh(dSNotificationModel);
		}


	}

	public void dismissNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean setDismissed) {
		DSNotificationModel dSNotificationModel = dsNotificationsDao.searchNotifications(serialNumber, partNumber, customerNumber);
		if(dSNotificationModel != null) {
		dSNotificationModel.setIsDismissed(setDismissed);
		modelService.save(dSNotificationModel);
		modelService.refresh(dSNotificationModel);
		}


	}

	public void markasReadNotifications(String serialNumber, String partNumber, String customerNumber,
			boolean marksRead) {
		DSNotificationModel dSNotificationModel = dsNotificationsDao.searchNotifications(serialNumber, partNumber, customerNumber);
		if(dSNotificationModel != null) {
		dSNotificationModel.setIsRead(marksRead);
		modelService.save(dSNotificationModel);
		modelService.refresh(dSNotificationModel);
		}


	}

	@Override
	public List<DSNotificationModel> searchNotificationsBySerialNo(String serialNumber, String customerNumber) {
		// TODO Auto-generated method stub
		List<DSNotificationModel> dSNotificationList = dsNotificationsDao.searchNotificationsBySerialNo();
		return dSNotificationList;

	}

	@Override
	public void dismissAllNotifications(List<DSNotificationData> dSNotificationDataList, String dismissAll) {
		if(dSNotificationDataList != null) {
			for(DSNotificationData dSNotificationData : dSNotificationDataList) {
				DSNotificationModel dSNotificationModel = dsNotificationsDao.searchNotifications(dSNotificationData.getSerialNumber(), dSNotificationData.getPartNumber(), dSNotificationData.getEndCustomer());
				if(dSNotificationModel != null) {
				if(dismissAll.equalsIgnoreCase("read")) {
				if(dSNotificationModel.getIsRead()) {
					dSNotificationModel.setIsDismissed(true);
				}
				}
				if(dismissAll.equalsIgnoreCase("unread")) {
					if(dSNotificationModel.getIsRead() == false) {
				dSNotificationModel.setIsDismissed(true);
				}
				}
				modelService.save(dSNotificationModel);
				modelService.refresh(dSNotificationModel);
				}
			}
		}
	}

	@Override
	public DSNotificationModel searchNotifications(String serialNumber, String partNumber, String customerNumber) {
		// TODO Auto-generated method stub
		DSNotificationModel dSNotificationModel = dsNotificationsDao.searchNotifications(serialNumber, partNumber, customerNumber);
		return dSNotificationModel;
	}

	public String calculateTimeForNotification(String notificationID, Date serviceDueDate) {
		DSNotificationModel dSNotificationModel = dsNotificationsDao.calculateTimeForNotification(notificationID);
		SimpleDateFormat formatter = new SimpleDateFormat("MM-dd-yyyy HH:mm:ss");
		Date modifiedTime;
		//Date ServiceDueDate1 = dSNotificationModel.getServiceDueDate();
		//String ServiceDueDate12 = formatter.format(ServiceDueDate1);
		if(dSNotificationModel.getServiceDueDate().equals(serviceDueDate)) {
		modifiedTime = dSNotificationModel.getCreationtime();
		}
		else {
			 modifiedTime = dSNotificationModel.getModifiedtime();

		}
		String modified = formatter.format(modifiedTime);
		return modified;

	}

    public Map<String, List<BHGEOrderUpdateEmailNotificationData>>  getEmailNotificationsMap (DsEmailNotificationData dsEmailNotificationData) {
        LOG.info("US552962 : Fetching OrderUpdate data from SAP");
        LOG.info("US552962 -InsidegetEmailNotificationMAP ===================================");
        String emailNotificationRequstXML = prepareEmailNotificationReuest(dsEmailNotificationData);
        final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_DS_EMAIL_NOTIFICATION_URL,
                flexibleSearchService);
        if (StringUtils.isBlank(scpiEndpointUrl)) {
            LOG.error("US552962 - SCPI endpoint URL is not configured.");
            return null;
        }
        LOG.info("US552962 : Sending Request to SAP....");
        BHGEDSNotificationSendResponse bhgedsNotificationSendResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl,
                emailNotificationRequstXML, BHGEDSNotificationSendResponse.class);
        LOG.info("US552962 : Got Response fromm SAP....");

		Map<String, List<BHGEOrderUpdateEmailNotificationData>> saleOrderEmailMapGroupByCutomerNumber
                = new HashMap<String, List<BHGEOrderUpdateEmailNotificationData>>();

		if(bhgedsNotificationSendResponse !=null && bhgedsNotificationSendResponse.getMtSalesOrderHdrList()!=null )
		{
            LOG.info("US552962 : MtSalesOrderHdrList List is not null....");
            List<BHGEMtSalesOrderHdr> SalesOrderHeaderList = bhgedsNotificationSendResponse.getMtSalesOrderHdrList().getItems();
			if(SalesOrderHeaderList !=null) {
                LOG.info("US552962 : SalesOrderHeaderList List is not null....");
				groupByCustomerHeader(SalesOrderHeaderList,saleOrderEmailMapGroupByCutomerNumber);
			}
		}
        if(bhgedsNotificationSendResponse !=null && bhgedsNotificationSendResponse.getMtSalesOrderItems()!=null )
        {
            LOG.info("US552962 : MtSalesOrderItemList List is not null....");
            List<BHGEMtSalesOrderItem> salesOrderItemList = bhgedsNotificationSendResponse.getMtSalesOrderItems().getItems();
            if(salesOrderItemList !=null){
                LOG.info("US552962 : SalesOrderItemList List is not null....");
                groupByCustomerItemList(salesOrderItemList,saleOrderEmailMapGroupByCutomerNumber) ;
            }
        }
        LOG.info("US552962 : Returning Customer MAP");
        return saleOrderEmailMapGroupByCutomerNumber;
    }

    public void sendOrderUpdateEmail(final List<BHGEOrderUpdateEmailNotificationData> orderUpdateEmailList,
                                     String customerMailId, String customerName){
        final RendererTemplateModel templateModel = rendererService
                .getRendererTemplateForCode("OrderUpdateEmailTemplate");
        final String subject = ORDER_UPDATE_EMAIL_SUBJECT;
        bhgeEmailService.orderUpdateNotificationEmail(templateModel,subject, customerMailId,orderUpdateEmailList,customerName);
    }

    private String prepareEmailNotificationReuest(DsEmailNotificationData dsEmailNotificationData)
    {
        LOG.info("US552962 - Preparing Request XML");
        String requestXml = null;
        BHGEDSNotificationSendRequest bhgedsNotificationSendRequest = new BHGEDSNotificationSendRequest();

        if(dsEmailNotificationData.getCustomerNumber()!=null)
            bhgedsNotificationSendRequest.setICustNo(dsEmailNotificationData.getCustomerNumber());
        if(dsEmailNotificationData.getDivision()!=null)
            bhgedsNotificationSendRequest.setIDivision(dsEmailNotificationData.getDivision());
        if(dsEmailNotificationData.getFlag()!=null)
            bhgedsNotificationSendRequest.setIFlag(dsEmailNotificationData.getFlag());
        if(dsEmailNotificationData.getSalesOrg()!=null)
            bhgedsNotificationSendRequest.setISalesOrg(dsEmailNotificationData.getSalesOrg());
        if(dsEmailNotificationData.getSoNumber()!=null)
            bhgedsNotificationSendRequest.setISoNum(dsEmailNotificationData.getSoNumber());
        if(dsEmailNotificationData.getSoType()!=null)
            bhgedsNotificationSendRequest.setISoType(dsEmailNotificationData.getSoType());

        Date fromDate = dsEmailNotificationData.getStartDate();
        Date toDate =  dsEmailNotificationData.getEndDate();
        final DateFormat df = new SimpleDateFormat(pattern);
        if(fromDate!=null){
            String strFromDate = df.format(fromDate);
            LOG.info("US552962 - From date : "+ strFromDate);
            bhgedsNotificationSendRequest.setISoFdate(strFromDate);
        }else{
            bhgedsNotificationSendRequest.setISoFdate(getTodayDate());
        }
        if(toDate!=null){
            String strToDate = df.format(toDate);
            LOG.info("US552962 - To date : "+ strToDate);
            bhgedsNotificationSendRequest.setISoTdate(strToDate);
        }else{
            bhgedsNotificationSendRequest.setISoTdate(getTodayDate());
        }
        requestXml = SCPIConnector.toXML(bhgedsNotificationSendRequest);
        LOG.info("US552962 - requestXML Prepared : requestXML :\n" + requestXml);
        return requestXml;
    }

    private String getTodayDate()
    {
        final DateFormat df = new SimpleDateFormat(pattern);
        String dateToday = df.format(new Date(System.currentTimeMillis()));
		LOG.info("US552962 - dateToday in the format : "+ dateToday);
        return dateToday;
    }

    private void groupByCustomerItemList(List<BHGEMtSalesOrderItem> salesOrderItemList,
                                         Map<String, List<BHGEOrderUpdateEmailNotificationData>> saleOrderEmailMapGroupByCutomerNumber)
    {
        LOG.info("US552962 : Inside groupByCustomerItemList");
        for(BHGEMtSalesOrderItem item : salesOrderItemList){
            String customerEmailid = item.getEmailId();
            if(customerEmailid!=null && !customerEmailid.trim().isEmpty())
            {
                GEEdgeCustomerModel customer = getUser(customerEmailid);
                BHGEOrderUpdateEmailNotificationData bhgeOrderUpdateEmailNotificationData = new BHGEOrderUpdateEmailNotificationData();
                bhgeOrderUpdateEmailNotificationData.setCustomerNumber(item.getCustomerNumber());
                bhgeOrderUpdateEmailNotificationData.setGeSalesOrderNumber(item.getGeSalesOrder());
                bhgeOrderUpdateEmailNotificationData.setItemNo(item.getItemNo());
                bhgeOrderUpdateEmailNotificationData.setUpdateField(configurationService.getConfiguration()
                        .getString(BHGE_ORDER_UPDATE_NOTIFICATION_FILED.concat(item.getField())));

                if(item.getField().equalsIgnoreCase("ZZGECUSHDT")) {
                    bhgeOrderUpdateEmailNotificationData.setUpdateType("Delivery Date Changed");
                    bhgeOrderUpdateEmailNotificationData.setOldValue(getFormatedDateforMail(item.getOldValue()));
                    bhgeOrderUpdateEmailNotificationData.setNewValue(getFormatedDateforMail(item.getNewValue()));
                }
                else if(item.getField().equalsIgnoreCase("BOLNR")) {
                    bhgeOrderUpdateEmailNotificationData.setUpdateType("Tracking Number Chaged");
                    bhgeOrderUpdateEmailNotificationData.setOldValue(item.getOldValue());
                    bhgeOrderUpdateEmailNotificationData.setNewValue(item.getNewValue());
                }else{
                    bhgeOrderUpdateEmailNotificationData.setOldValue(item.getOldValue());
                    bhgeOrderUpdateEmailNotificationData.setNewValue(item.getNewValue());
                }
                bhgeOrderUpdateEmailNotificationData.setMaterial(item.getMaterial());
                bhgeOrderUpdateEmailNotificationData.setDescription(item.getDescription());

                if(customer == null){
                    LOG.info("US552962 : Customer is null");
                    // If key exists, append to list; else create new list
                    saleOrderEmailMapGroupByCutomerNumber.computeIfAbsent(customerEmailid, k -> new ArrayList<>()).add(bhgeOrderUpdateEmailNotificationData);
                }else{
                    if(customer.getOrderShipDateChanged()!=null){
                        if(customer.getOrderShipDateChanged() && item.getField().equalsIgnoreCase("ZZGECUSHDT")){
                            LOG.info("US552962 : Customer is null");
                            // If key exists, append to list; else create new list
                            saleOrderEmailMapGroupByCutomerNumber.computeIfAbsent(customerEmailid, k -> new ArrayList<>()).add(bhgeOrderUpdateEmailNotificationData);
                        }
                    }else{
                        LOG.info("US552962 : Customer is null");
                        // If key exists, append to list; else create new list
                        saleOrderEmailMapGroupByCutomerNumber.computeIfAbsent(customerEmailid, k -> new ArrayList<>()).add(bhgeOrderUpdateEmailNotificationData);
                    }
                }
                if(customer!=null){
                    LOG.info("US552962-1 : Updating InAPP Notification Item level");
                    SearchResult<OrderNotificationModel> results =
                            bhgeOrderNotificationDao.getOrderNotification(item.getGeSalesOrder(),customer, item.getItemNo(),item.getCustomerNumber());
                    LOG.info("US552962-1 : InAPP Notification Updating : " + item.getGeSalesOrder());
                    if(CollectionUtils.isNotEmpty(results.getResult())){
                        LOG.info("US552962 : InAPP Notification Updating : inside IF" + item.getGeSalesOrder());
                        for (OrderNotificationModel inAppNotificationModel: results.getResult()) {
                            LOG.info("US552962 : InAPP Notification Updating : Notification already Exist" +inAppNotificationModel.getPk() );
                            inAppNotificationModel.setIsOrderRead(false);
                            inAppNotificationModel.setIsOrderEmailSent(true);
                            inAppNotificationModel.setOrderStatus("Shipping Date changed");
                            inAppNotificationModel.setUpdatedDate(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()));
                            inAppNotificationModel.setBlockReason(item.getDescription());
                            modelService.save(inAppNotificationModel);
                            modelService.refresh(inAppNotificationModel);
                            LOG.info("US552962 : InAPP Notification Updated");
                        }
                    }else{
                        LOG.info("US552962 : InAPP Notification Creating : inside Else" + item.getGeSalesOrder());
                        OrderNotificationModel inAppNotificationModel = new OrderNotificationModel();
                        inAppNotificationModel.setCustomer(customer);

                        final String b2bUnitId = item.getCustomerNumber();
                        LOG.info("US552962 : InApp Notfication b2bUnitId : " + b2bUnitId);
                        final B2BUnitModel parentB2bUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(b2bUnitId);
                        LOG.info("US552962 : InApp Notfication parentB2bUnit : " + parentB2bUnit.getPk());

                        inAppNotificationModel.setB2bUnit(parentB2bUnit);
                        inAppNotificationModel.setOrderId(item.getGeSalesOrder());
                        inAppNotificationModel.setIsOrderRead(false);
                        inAppNotificationModel.setIsOrderEmailSent(true);
                        inAppNotificationModel.setOrderStatus("Shipping Date changed");
                        inAppNotificationModel.setLineNo(item.getItemNo());
                        inAppNotificationModel.setUpdatedDate(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()));
                        inAppNotificationModel.setBlockReason(item.getDescription());
                        modelService.save(inAppNotificationModel);
                        modelService.refresh(inAppNotificationModel);
                        LOG.info("US552962 : InAPP Notification created");
                    }

                }

            }
        }
        LOG.info("US552962 : Item level Customer Map Ready");
    }

	private void groupByCustomerHeader(List<BHGEMtSalesOrderHdr> headerItems,
                                       Map<String, List<BHGEOrderUpdateEmailNotificationData>> saleOrderEmailMapGroupByCutomerNumber) {
        LOG.info("US552962 : Inside groupByCustomerHeader");
     	for (BHGEMtSalesOrderHdr item : headerItems) {
			String customerEmailid = item.getEmailId();

            if(customerEmailid!=null && !customerEmailid.trim().isEmpty())
            {

                GEEdgeCustomerModel customer = getUser(customerEmailid);
                BHGEOrderUpdateEmailNotificationData bhgeOrderUpdateEmailNotificationData = new BHGEOrderUpdateEmailNotificationData();
                bhgeOrderUpdateEmailNotificationData.setCustomerNumber(item.getCustomerNumber());
                bhgeOrderUpdateEmailNotificationData.setGeSalesOrderNumber(item.getGeSalesOrder());
                bhgeOrderUpdateEmailNotificationData.setItemNo("HEADER");
                bhgeOrderUpdateEmailNotificationData.setOrderDate(item.getDateOrderPlaced());
                bhgeOrderUpdateEmailNotificationData.setUpdateField(configurationService.getConfiguration()
                        .getString(BHGE_ORDER_UPDATE_NOTIFICATION_FILED.concat(item.getField())));
                String updateStatus =determineUpdateStatus(item.getField(),
                                                            item.getOldValue(),
                                                            item.getNewValue());
                bhgeOrderUpdateEmailNotificationData.setUpdateType(updateStatus);
                LOG.info("US552962 : determineUpdateStatus" + updateStatus);
                bhgeOrderUpdateEmailNotificationData.setOldValue(item.getOldValue());
                bhgeOrderUpdateEmailNotificationData.setNewValue(item.getNewValue());
                bhgeOrderUpdateEmailNotificationData.setDescription(item.getDescription());
                if(customer == null){
                    LOG.info("US552962 : Customer is null");
                    // If key exists, append to list; else create new list
                    saleOrderEmailMapGroupByCutomerNumber.computeIfAbsent(customerEmailid, k -> new ArrayList<>()).add(bhgeOrderUpdateEmailNotificationData);
                }
                else {
                    LOG.info("US552962 : Inside else 338");
                    if(customer.getOrderBlockEmailNotification()!=null){
                        LOG.info("US552962 : Inside else 340");
                        LOG.info("US552962 :customer.getOrderBlockEmailNotification()" +customer.getOrderBlockEmailNotification());
                        LOG.info("US552962 : " + bhgeOrderUpdateEmailNotificationData.getUpdateType().equalsIgnoreCase("BLOCKED"));
                        if(customer.getOrderBlockEmailNotification() && bhgeOrderUpdateEmailNotificationData.getUpdateType().equalsIgnoreCase("BLOCKED")){
                            // If key exists, append to list; else create new list
                            LOG.info("US552962 : Inside else 343");
                            saleOrderEmailMapGroupByCutomerNumber.computeIfAbsent(customerEmailid, k -> new ArrayList<>()).add(bhgeOrderUpdateEmailNotificationData);
                        }

                    }
                    if(customer.getOrderBlockReleaseEmailNotification()!=null){
                        LOG.info("US552962 : Inside else 353");
                        if(customer.getOrderBlockReleaseEmailNotification() && bhgeOrderUpdateEmailNotificationData.getUpdateType().equalsIgnoreCase("Released")){
                            // If key exists, append to list; else create new list
                            LOG.info("US552962 : Inside else 356");
                            saleOrderEmailMapGroupByCutomerNumber.computeIfAbsent(customerEmailid, k -> new ArrayList<>()).add(bhgeOrderUpdateEmailNotificationData);
                        }

                    }
                }
                if(customer!=null){
                    LOG.info("US552962 : Updating InAPP Notification");
                    SearchResult<OrderNotificationModel> results =
                            bhgeOrderNotificationDao.getOrderNotification(item.getGeSalesOrder(),customer,"00",item.getCustomerNumber());
                    LOG.info("US552962 : InAPP Notification Updating : " + item.getGeSalesOrder());
                    if(CollectionUtils.isNotEmpty(results.getResult())){
                        LOG.info("US552962 : InAPP Notification Updating : inside IF" + item.getGeSalesOrder());
                        for (OrderNotificationModel inAppNotificationModel: results.getResult()) {
                            LOG.info("US552962 : InAPP Notification Updating : Notification already Exist" +inAppNotificationModel.getPk() );
                            inAppNotificationModel.setIsOrderRead(false);
                            inAppNotificationModel.setIsOrderEmailSent(true);
                            inAppNotificationModel.setOrderStatus(updateStatus);
                            inAppNotificationModel.setUpdatedDate(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()));
                            inAppNotificationModel.setBlockReason(item.getDescription());
                            modelService.save(inAppNotificationModel);
                            modelService.refresh(inAppNotificationModel);
                            LOG.info("US552962 : InAPP Notification Updated");
                        }
                        }else{
                            LOG.info("US552962 : InAPP Notification Creating : inside Else" + item.getGeSalesOrder());
                            OrderNotificationModel inAppNotificationModel = new OrderNotificationModel();
                            inAppNotificationModel.setCustomer(customer);

                            final String b2bUnitId = item.getCustomerNumber();
                            LOG.info("US552962 : InApp Notfication b2bUnitId : " + b2bUnitId);
                            final B2BUnitModel parentB2bUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(b2bUnitId);
                            LOG.info("US552962 : InApp Notfication parentB2bUnit : " + parentB2bUnit.getPk());

                            inAppNotificationModel.setB2bUnit(parentB2bUnit);
                            inAppNotificationModel.setOrderId(item.getGeSalesOrder());
                            inAppNotificationModel.setIsOrderRead(false);
                            inAppNotificationModel.setIsOrderEmailSent(true);
                            inAppNotificationModel.setOrderStatus(updateStatus);
                            inAppNotificationModel.setLineNo("00");
                            inAppNotificationModel.setUpdatedDate(Date.from(LocalDate.now().atStartOfDay(ZoneId.systemDefault()).toInstant()));
                            inAppNotificationModel.setBlockReason(item.getDescription());
                            modelService.save(inAppNotificationModel);
                            modelService.refresh(inAppNotificationModel);
                            LOG.info("US552962 : InAPP Notification created");
                        }

                }


            }
		}
        LOG.info("US552962 : Customer Map Ready");
	}

    private GEEdgeCustomerModel getUser(String customerEmailid) {
        GEEdgeCustomerModel customer = null;
        LOG.info("US552962 : Fetching Customer : " + customerEmailid);
        try{
            customer = userProfileService.findCurrentUserProfile(customerEmailid);
        }catch(Exception e){
            LOG.info("US552962 : Customer Not Found : "+ e.toString());
        }

        return customer;
    }

    public static String determineUpdateStatus(String field, String oldValue, String newValue) {
        return switch (field.toUpperCase()) {
            case "CMGST" -> {
                if ("B".equals(newValue)) {
                    yield "Blocked";
                } else if ("D".equals(newValue) && "B".equals(oldValue)) {
                    yield "Released";
                } else {
                    yield "Check";
                }
            }
            case "LIFSK" -> {
                if(newValue == null || newValue.isBlank()){
                    yield "Released";
                }else{
                    yield "Blocked";
                }
            }
            case "FAKSK" -> {
                if(newValue == null || newValue.isBlank()){
                    yield "Released";
                }else{
                    yield "Blocked";
                }
            }
            case "STAT" -> {
                if(newValue == null || newValue.isBlank()){
                    yield "Released";
                }else{
                    yield "Blocked";
                }
            }
            default -> "UnknownField";
        };
    }

    private String getFormatedDateforMail(String inputDate_str)
    {
        String formattedDate = new String();
        if(inputDate_str != null) {
            DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
            DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            // Parse and format
            try{
                LocalDate date = LocalDate.parse(inputDate_str, inputFormatter);
                formattedDate = date.format(outputFormatter);
            }catch(Exception e){
                LOG.info("US552962 : Date formating Exception : ");
                formattedDate = "";
            }

        }
        return formattedDate;
    }

}

