/**
 *
 */
package com.bhge.register.webservices.services.impl;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.register.webservices.appoval.StatusCountBean;
import com.bhge.register.webservices.dao.BHGEManualApprovalDao;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.exception.BhgeRegisterException;
import com.bhge.register.webservices.facades.impl.BHGEManualApprovalFacadeImpl;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.services.BHGEManualApprovalService;
import com.bhge.register.webservices.services.SubmitRegisterRequestService;
import com.bhgeregister.dto.BHGECSRRequest;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import com.bhgeregister.dto.BHGESoldtoData;
import com.bhge.register.webservices.dao.RegisterUserDao;


public class BHGEManualApprovalServiceImpl implements BHGEManualApprovalService

{

	private final static Logger LOG = Logger.getLogger(BHGEManualApprovalFacadeImpl.class);
	private final String success = "SUCCESS";

	@Resource
	private BHGEManualApprovalDao manualApprovalDao;
	
	private RegisterUserDao registerDao;

	SubmitRegisterRequestService submitRegisterRequestService;
	
	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;
	
	@Resource(name = "modelService")
	private ModelService modelService;
	
	@Resource(name = "bhgeUserEmailService")
	private EmailService emailService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "sessionService")
	private SessionService sessionService;

	/**
	 * @return the registerDao
	 */
	public RegisterUserDao getRegisterDao() {
		return registerDao;
	}

	/**
	 * @param registerDao the registerDao to set
	 */
	public void setRegisterDao(final RegisterUserDao registerDao) {
		this.registerDao = registerDao;
	}
	
	/**
	 * @return the submitRegisterRequestService
	 */
	public SubmitRegisterRequestService getSubmitRegisterRequestService()
	{
		return submitRegisterRequestService;
	}

	/**
	 * @param submitRegisterRequestService
	 *           the submitRegisterRequestService to set
	 */
	public void setSubmitRegisterRequestService(final SubmitRegisterRequestService submitRegisterRequestService)
	{
		this.submitRegisterRequestService = submitRegisterRequestService;
	}


	@Override
	public List<ManualApprovalData> fetchManualapprovaldetails(final String uid,String name,String productLine,String fromDate,String toDate)
	{
		UserModel csrUser = getRegisterUser(uid);
		LOG.info("Inside Service fetchManualapprovaldetails uid: " + csrUser.getUid());
		final List<ManualApprovalData> data = manualApprovalDao.fetchApprovalDetails(csrUser.getUid(),name,productLine,fromDate,toDate);
		return data;
	}

	@Override
	public List<ManualApprovalData> fetchHomepageDashboardDetails(final String uid)
	{
		UserModel csrUser = getRegisterUser(uid);
		LOG.info("Inside Service fetchHomepageDashboardDetails uid: " + csrUser.getUid());
		final List<ManualApprovalData> data = manualApprovalDao.fetchHomepageDashboardDetails(csrUser.getUid());
		return data;
	}

	@Override
	public StatusCountBean fetchDashboardDetails(final String uid,String name,String productLine,String fromDate,String toDate)
	{
		UserModel csrUser = getRegisterUser(uid);
		LOG.info("Inside Service fetchDashboardDetails uid: " + csrUser.getUid());
		return manualApprovalDao.fetchDashboardDetails(csrUser.getUid(),name,productLine,fromDate,toDate);
	}

	@Override
	public List<ManualApprovalData> fetchDashboardApprovalDetails(final String uid, final String status,final String name,final String productLine,final String fromDate,final String toDate)
	{
		UserModel csrUser = getRegisterUser(uid);
		LOG.info("Inside Service fetchDashboardApprovalDetails uid: " + csrUser.getUid());
		return manualApprovalDao.fetchDashboardApprovalDetails(csrUser.getUid(), status,name,productLine,fromDate,toDate);
	}
	@Override
	public List<ManualApprovalData> fetchDashboardApprovalDetailsDownloads(final String uid, final String status,final String name,final String productLine,final String fromDate,final String toDate){
		UserModel csrUser = getRegisterUser(uid);
		LOG.info("Inside Service fetchDashboardApprovalDetailsDownloads uid: " + csrUser.getUid());
		return manualApprovalDao.fetchDashboardApprovalDetails(csrUser.getUid(), status,name,productLine,fromDate,toDate);
	}


	@Override
	public ManualApprovalData fetchManualWorkflowDetails(final String requestAccessId)
	{
		return manualApprovalDao.fetchManualWorkflowDetails(requestAccessId);
	}

	@Override
	public BHGERegisterResponse updateManualapprovaldetails(final ManualApprovalData approvalData, final String uid)
			throws CMSItemNotFoundException, EmailException
	{
		UserModel csrUser = getRegisterUser(uid);
		LOG.info("Inside Service updateManualapprovaldetails uid: " + csrUser.getUid());
		return manualApprovalDao.updateApprovalDetails(approvalData, csrUser.getUid());
	}

	@Override
	public void authorizeApproverAccess(final String uid, final String requestAccessId) throws BhgeRegisterException
	{
		UserModel csrUser = getRegisterUser(uid);
		LOG.info("Inside Service authorizeApproverAccess uid: " + csrUser.getUid());
		manualApprovalDao.authorizeApproverAccess(csrUser.getUid(), requestAccessId);
	}

	private UserModel getRegisterUser(String uid) {
		UserModel userModel=userService.getUserForUID(uid);
		UserModel sessionUser=null;
		if(userModel instanceof GEEdgeCustomerModel)
		{
			sessionUser=manualApprovalDao.getRegisterCustomer(uid);
		}
		else {
			sessionUser=userModel;
		}
		return sessionUser;
	}

	/**
	 * @return the manualApprovalDao
	 */
	public BHGEManualApprovalDao getManualApprovalDao()
	{
		return manualApprovalDao;
	}

	/**
	 * @param manualApprovalDao
	 *           the manualApprovalDao to set
	 */
	public void setManualApprovalDao(final BHGEManualApprovalDao manualApprovalDao)
	{
		this.manualApprovalDao = manualApprovalDao;
	}

	@Override
	public BHGERegisterResponse fetchManualCsrDetails(final String uid, final String customerAccNumber)
	{
		final String FPT = Config.getParameter("register.appName.FPT");

		final BHGERegisterRequest fptBhgeRegisterRequest = new BHGERegisterRequest();
		
		fptBhgeRegisterRequest.setFptCustomerAccNumber(customerAccNumber);
		fptBhgeRegisterRequest.setSrcSystem(Config.getParameter("com.sap.reg.src.system"));
		fptBhgeRegisterRequest.setUserEvent(Config.getParameter("com.sap.reg.user.event"));
		
		

		LOG.info("Starting SAP call for FPT customer number");
		final String fptStore = FPT;
		List<BHGERegisterKeyValueDataModel> salesOrg = null;
		final String attributeType = Config.getParameter("register.legal.entity");
		BHGERegisterResponse response = null;
		Boolean flag=true;
		final List<String> salesArea = new ArrayList<>();
		try
		{
			
			response = submitRegisterRequestService.validateCustomerNumber(fptBhgeRegisterRequest, fptStore);
			
			if ((null != response && null != response.getRuleMessageList() && !response.getRuleMessageList().isEmpty()
					&& response.getRuleMessageList().stream().anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) || (null != response.getSoldtoData() && response.getSoldtoData().isEmpty()))
			{

				LOG.warn("MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				return response;
			}
			
			if(null != response && null != response.getErrorMessage() && response.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue")) 
			  {
				LOG.info("ConnectivityIssue during the CustomerAccount Validation");
				response.setErrorMessage("RegistrationNetworkIssue");
			    return response;
			  }

			Map<String, BHGESoldtoData> soldtoMap = null;
			final List<String> legalEntities = new ArrayList<>();
			if (response != null)
			{
				soldtoMap = response.getSoldtoData();
			}
			if (soldtoMap != null && soldtoMap.get(fptBhgeRegisterRequest.getFptCustomerAccNumber()).getSalesareaList()!=null)
			{
				response.setLegalEntityList(soldtoMap.get(fptBhgeRegisterRequest.getFptCustomerAccNumber()).getSalesareaList());
				salesOrg = registerDao.fetchFptSalesOrg(attributeType);
			}
			
			if (salesOrg != null) {
				for (final BHGERegisterKeyValueDataModel sales : salesOrg) {
					salesArea.add(sales.getAttributeId());
					LOG.info("Sales Area :" + salesArea);
				}
			}
			if (response.getLegalEntityList() != null)
			{
				legalEntities.addAll(response.getLegalEntityList());
			}
			flag = !Collections.disjoint(legalEntities, salesArea);
			
			/*
			 * if (legalEntities != null && salesArea != null) {
			 * flag=salesArea.containsAll(legalEntities); }
			 */
			if (flag.equals(Boolean.FALSE))
			{
				LOG.warn("MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				return response;
			}
			BHGERegisterKeyValueDataModel approverDetails = null;
			final List<BHGERegisterKeyValueDataModel> validLegalEntities = new ArrayList<BHGERegisterKeyValueDataModel>();
			final List<String> salesList = new ArrayList<>();
			final List<String> salesTextList = new ArrayList<>();
			for (final String attributeId : legalEntities)
			{
				String saleArea = null;
				String saleText = null;

				approverDetails = manualApprovalDao.fetchManualCsrDetails(uid, attributeId);

				if (approverDetails != null)
				{
					saleText = approverDetails.getAttributeKey();
					saleArea = approverDetails.getAttributeId();
					validLegalEntities.add(approverDetails);
				}

				if (saleArea != null)
				{
					salesList.add(saleArea);
				}
				if (saleText != null)
				{
					salesTextList.add(saleText);
				}
			}
			if(CollectionUtils.isEmpty(validLegalEntities))
			{
				response.setErrorMessage("Please Select the Different Customer Account Number");
				return response;
			}
			response.setSalesraeaResult(salesList);
			response.setSalesraeaText(salesTextList);
		}
		catch (CMSItemNotFoundException | EmailException ex)
		{
			LOG.error("MSG1501: Error in SAP Customer number validation. Ops Team to check for input criteria for failure.");
			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			throw new RuntimeException(message);
		}

		return response;
	}
	
	@Override
	public BHGERegisterResponse fetchManualOfsCsrDetails(final String uid, final String customerAccNumber)
	{
		final String OFS = Config.getParameter("register.appName.OFS");

		final BHGERegisterRequest ofsBhgeRegisterRequest = new BHGERegisterRequest();
		
		ofsBhgeRegisterRequest.setOfsCustomerAccNumber(customerAccNumber);
		ofsBhgeRegisterRequest.setSrcSystem("com.sap.reg.src.ofs.system");

		LOG.info("Starting SAP call for OFS customer number");
		final String ofsStore = OFS;
		List<BHGERegisterKeyValueDataModel> salesOrg = null;
		final String attributeType = Config.getParameter("register.ofs.legal.entity");
		BHGERegisterResponse response = null;
		Boolean flag=true;
		final List<String> salesArea = new ArrayList<>();
		try
		{
			
			response = submitRegisterRequestService.validateCustomerNumber(ofsBhgeRegisterRequest, ofsStore);
			
			if ((null != response && null != response.getRuleMessageList() && !response.getRuleMessageList().isEmpty()
					&& response.getRuleMessageList().stream().anyMatch(obj -> !(success.equalsIgnoreCase(obj.getRuleStatus())))) || (null != response.getSoldtoData() && response.getSoldtoData().isEmpty()))
			{

				LOG.warn("MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				return response;
			}
			
			if(null != response && null != response.getErrorMessage() && response.getErrorMessage().equalsIgnoreCase("RegistrationNetworkIssue")) 
			  {
				LOG.info("ConnectivityIssue during the CustomerAccount Validation");
				response.setErrorMessage("RegistrationNetworkIssue");
			    return response;
			  }

			Map<String, BHGESoldtoData> soldtoMap = null;
			final List<String> legalEntities = new ArrayList<>();
			if (response != null)
			{
				soldtoMap = response.getSoldtoData();
			}
			
			if (soldtoMap != null && soldtoMap.get(ofsBhgeRegisterRequest.getOfsCustomerAccNumber()).getSalesareaList()!=null)
			{
				response.setLegalEntityList(soldtoMap.get(ofsBhgeRegisterRequest.getOfsCustomerAccNumber()).getSalesareaList());
				salesOrg = registerDao.fetchFptSalesOrg(attributeType);
			}
			
			if (salesOrg != null) {
				for (final BHGERegisterKeyValueDataModel sales : salesOrg) {
					salesArea.add(sales.getAttributeId());
					LOG.info("Sales Area :" + salesArea);
				}
			}
			if (response.getLegalEntityList() != null)
			{
				legalEntities.addAll(response.getLegalEntityList());
			}
			flag = !Collections.disjoint(legalEntities, salesArea);
			
			/*
			 * if (legalEntities != null && salesArea != null) {
			 * flag=salesArea.containsAll(legalEntities); }
			 */
			if (flag.equals(Boolean.FALSE))
			{
				LOG.warn("MSG1502: Error in SAP Customer number validation. This is not a valid sold-to location number");
				response.setErrorMessage(
						"This is not a valid sold-to location number.  Please try again, or enter your company data below");
				LOG.info("registration.failure.MSG1502 " + Config.getParameter("registration.failure.MSG1502"));
				return response;
			}
			BHGERegisterKeyValueDataModel approverDetails = null;
			final List<BHGERegisterKeyValueDataModel> validLegalEntities = new ArrayList<BHGERegisterKeyValueDataModel>();
			final List<String> salesList = new ArrayList<>();
			final List<String> salesTextList = new ArrayList<>();
			for (final String attributeId : legalEntities)
			{
				String saleArea = null;
				String saleText = null;

				approverDetails = manualApprovalDao.fetchManualCsrDetails(uid, attributeId);

				if (approverDetails != null)
				{
					saleText = approverDetails.getAttributeKey();
					saleArea = approverDetails.getAttributeId();
					validLegalEntities.add(approverDetails);
				}

				if (saleArea != null)
				{
					salesList.add(saleArea);
				}
				if (saleText != null)
				{
					salesTextList.add(saleText);
				}
			}
			if(CollectionUtils.isEmpty(validLegalEntities))
			{
				response.setErrorMessage("Please Select the Different Customer Account Number");
				return response;
			}
			response.setSalesraeaResult(salesList);
			response.setSalesraeaText(salesTextList);
		}
		catch (CMSItemNotFoundException | EmailException ex)
		{
			LOG.error("MSG1501: Error in SAP Customer number validation. Ops Team to check for input criteria for failure.");
			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			throw new RuntimeException(message);
		}

		return response;
	}
	
	@Override
	public String updateCSRData(final BHGECSRRequest csrRequestData)
	{
		BHGEUserAccessRequestModel userRequest = manualApprovalDao.fetchUserAcessRequest(csrRequestData.getRequestAccessId());
		String updateSuccess = "false";
		if (null != userRequest) {
			if (null != userRequest.getRequesterId()) {
				try {
					BHGERegieterCustomerModel regieterCustomer = userRequest.getRequesterId();
					AddressModel userAddress = regieterCustomer.getCompanyAddress();
					userAddress.setLine1(csrRequestData.getCompanyAddress());
					userAddress.setLine2(csrRequestData.getCompanyAddressLine2());
					userAddress.setDistrict(csrRequestData.getDistrict());
					userAddress.setTown(csrRequestData.getTown());
					userAddress.setPostalcode(csrRequestData.getPostalCode());
					userAddress.setCountry(commonI18NService.getCountry(registerDao.fetchIsoCode(csrRequestData.getCountry()).toUpperCase()));
					userAddress.setCompany(csrRequestData.getCompanyName());
					modelService.save(userAddress);
					regieterCustomer.setCompanyAddress(userAddress);
					if (null != csrRequestData.getProductLine() && null != regieterCustomer.getProductLine() && null != regieterCustomer.getProductLine().getAttributeKey()
							&& !regieterCustomer.getProductLine().getAttributeKey().equalsIgnoreCase(csrRequestData.getProductLine())) {
						LOG.info(" CSRProductLine is " + csrRequestData.getProductLine());
						regieterCustomer.setProductLine(registerDao.fetchProductLine(csrRequestData.getProductLine()));
						updateApprover(userRequest, csrRequestData.getProductLine(), registerDao.fetchIsoCode(csrRequestData.getCountry()).toUpperCase());
					}
					modelService.save(regieterCustomer);
					updateSuccess = "true";
				} catch (Exception e) {
					LOG.info(" Error in Updating the CustomerRecord in CSR Dashboard " + e.getMessage());
					updateSuccess = "false";
				}
			}
		} else {
			updateSuccess = "false";
		}
		return updateSuccess;

	}
	
	
	public void updateApprover(BHGEUserAccessRequestModel userRequest, final String productLine, final String country) throws CMSItemNotFoundException, EmailException
	{
		BHGEMnCEcommMatrixModel matrixModel = registerDao.fetchManualApproverAttributeKey(country, productLine, "country");
			BHGEApprovalDetailsModel approvalDetail = null != matrixModel ? matrixModel.getCsrApproverValue()
					: registerDao.getPlaceHolderMatrix(productLine).getCsrApproverValue();
			if(null != userRequest.getApproverDetails() && null != approvalDetail
					&& !approvalDetail.equals(userRequest.getApproverDetails()))
			{
				LOG.info(" UpdatedApproverfromCSR is " + approvalDetail.getEmailDistribList());
				userRequest.setApproverDetails(approvalDetail);
				modelService.save(userRequest);
				emailService.processCSRMail("WithoutCustomermodelcheck", userRequest,
						userRequest.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId().toString(),
						null);
			}
	}

}
