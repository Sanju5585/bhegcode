/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.register.webservices.interceptors;

import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.model.BHGERegieterCustomerModel;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.PrepareInterceptor;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.register.application.mncecommerce.service.BhgeregistermncecommapplicationService;
import com.bhge.register.webservices.dao.RegisterUserDao;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.model.BHGEUserAccessRulesModel;
import com.bhgeregister.dto.BHGERegisterRequest;
import com.bhgeregister.dto.BHGERegisterResponse;
import java.util.Locale;


public class RegisterCustomerInterceptor implements PrepareInterceptor<BHGERegieterCustomerModel>
{

	private static final String IQM_REQUEST_SUBMIT = "IQM REQUEST SUBMIT";
	private static final int FIRST_NAME_MAX_LENGTH = 32;
	private static final int LAST_NAME_MAX_LENGTH = 35;
	private static final Logger LOGGER = Logger.getLogger(RegisterCustomerInterceptor.class);

	private BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService;

	private RegisterUserDao registerDao;

	private ModelService modelService;

	private EmailService emailService;


	/**
	 * @return the emailService
	 */
	public EmailService getEmailService()
	{
		return emailService;
	}

	/**
	 * @param emailService
	 *           the emailService to set
	 */
	public void setEmailService(final EmailService emailService)
	{
		this.emailService = emailService;
	}


	/**
	 * @return the modelService
	 */
	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}



	/**
	 * @return the registerDao
	 */
	public RegisterUserDao getRegisterDao()
	{
		return registerDao;
	}

	/**
	 * @param registerDao
	 *           the registerDao to set
	 */
	public void setRegisterDao(final RegisterUserDao registerDao)
	{
		this.registerDao = registerDao;
	}


	/**
	 * @return the bhgeregistermncecommapplicationService
	 */
	public BhgeregistermncecommapplicationService getBhgeregistermncecommapplicationService()
	{
		return bhgeregistermncecommapplicationService;
	}

	/**
	 * @param bhgeregistermncecommapplicationService
	 *           the bhgeregistermncecommapplicationService to set
	 */
	public void setBhgeregistermncecommapplicationService(
			final BhgeregistermncecommapplicationService bhgeregistermncecommapplicationService)
	{
		this.bhgeregistermncecommapplicationService = bhgeregistermncecommapplicationService;
	}


	@Override
	public void onPrepare(final BHGERegieterCustomerModel customerModel, final InterceptorContext ctx) throws InterceptorException
	{
		LOGGER.info("Inside Register Customer Active Check: START");
		try
		{
			LOGGER.info("Checking the FirstName value against its max allowed length");
			checkAndUpdateFirstNameLength(customerModel);

			if (ctx.isModified(customerModel, BHGERegieterCustomerModel.ACTIVESTATUS) && customerModel.getActiveStatus())
			{
				LOGGER.info("Trigger SAP Insert for New eComemrce Customer - " + customerModel.getSso());

				if (null != customerModel.getRequestCustomerId())
				{
					processWithCustomerNumber(customerModel);

				}
				else
				{
					processWithoutCustomerNumber(customerModel);
				}
			}
			LOGGER.info("Inside Register Customer Active Check: CLOSE");
		}
		catch (final Exception ex)
		{
			LOGGER.info("MSG1520: Error occured while processing SAP request with I flag ");
		}

	}

	// checking and updating First and Last name
	private void checkAndUpdateFirstNameLength(BHGERegieterCustomerModel customerModel) {
		try {
			String firstName = customerModel.getGivenName();
			String lastName = customerModel.getFamilyName();
			// checking and updating First name
			checkAndUpdateFirstName(customerModel, firstName, FIRST_NAME_MAX_LENGTH);
			// checking and updating Last name
			checkAndUpdateLastName(customerModel, lastName, LAST_NAME_MAX_LENGTH);
		} catch (RuntimeException re) {
			LOGGER.error("Exception in checkAndUpdateFirstNameLength ");
			re.printStackTrace();
		}
	}

	private void checkAndUpdateFirstName(BHGERegieterCustomerModel customerModel, String name, int maxLength) {
		if (StringUtils.isNotBlank(name) && name.length() > maxLength) {
			name = name.substring(0, maxLength);
			customerModel.setGivenName(name);
			LOGGER.info("Corrected the First Name value against its max length and it is like : " + name);
		}
	}

	private void checkAndUpdateLastName(BHGERegieterCustomerModel customerModel, String name, int maxLength) {
		if (StringUtils.isNotBlank(name) && name.length() > maxLength) {
			name = name.substring(0, maxLength);
			customerModel.setFamilyName(name);
			LOGGER.info("Corrected the Last Name value against its max length and it is like : " + name);
		}
	}

	/**
	 * @param customerModel
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 */
	private void processWithoutCustomerNumber(final BHGERegieterCustomerModel customerModel)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside processWithoutCustomerNumber: START - " + customerModel.getSso());
		final List<BHGEUserAccessRequestModel> accessRequestData = registerDao.fetchUserAccessRequestList(customerModel.getSso());
		Boolean flag = false;
		for (int i = 0; i < accessRequestData.size(); i++)
		{
			if (accessRequestData.get(i).getRequestStatus() != null && accessRequestData.get(i)
					.getRequestStatus() == com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_ACTIVATION)
			{
				if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1)
				{
					final BHGEApprovalDetailsModel model = updatingDetails(customerModel.getProductLine(),
							customerModel.getCompanyAddress().getCountry(), accessRequestData.get(i));
					LOGGER.info("Approver - " + model.getApproverGroupName() + " & Email - " + model.getEmailDistribList());
					getEmailService().processCSRMail("WithoutCustomermodelcheck", accessRequestData.get(i), null, null);
					LOGGER.info("Inside processWithoutCustomerNumber: CLOSE - " + customerModel.getSso());

				}
				//ofs changes started
				else if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5)
				{
					final BHGEApprovalDetailsModel model = updatingDetailsOfs(customerModel.getCompanyAddress().getCountry(), accessRequestData.get(i));
					LOGGER.info("Approver - " + model.getApproverGroupName() + " & Email - " + model.getEmailDistribList());
					getEmailService().processCSRMail("WithoutCustomermodelcheck", accessRequestData.get(i), null, null);
					LOGGER.info("Inside processWithoutCustomerNumber: CLOSE - " + customerModel.getSso());

				}
				//ofs changes ended
				else if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo()
						.getApplicationId() == 2)
				{
					/*
					 * final BHGEApprovalDetailsModel model = updatingDetails(customerModel.getIqmProductLine(),
					 * customerModel.getIqmCompanyAddress().getCountry(), accessRequestData);
					 */
					accessRequestData.get(i)
							.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
					getEmailService().requestSubmitEmail(IQM_REQUEST_SUBMIT, accessRequestData.get(i).getRequesterId().getEmail(),
							accessRequestData.get(i).getRequesterId().getGivenName() + " "
									+ accessRequestData.get(i).getRequesterId().getFamilyName(),
							accessRequestData.get(i).getRequesterId().getSso(),
							accessRequestData.get(i).getApproverDetails().getEmailDistribList());
					accessRequestData.get(i).setLinkedWithRegister(true);
					getModelService().save(accessRequestData.get(i));

				}
				else if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo()
						.getApplicationId() == 3)
				{

					if (null != accessRequestData.get(i).getRequesterId().getDamCustomerId()
							&& !accessRequestData.get(i).getRequesterId().getDamCustomerId().isEmpty())
					{
						if (validateSuccessSAPRules(customerModel, accessRequestData.get(i)))
						{
							final BHGERegisterRequest sapCustomerEmail = new BHGERegisterRequest();
							sapCustomerEmail.setDamCustomerAccNumber(
									null != customerModel.getDamCustomerId()
											? (("0000000000" + customerModel.getDamCustomerId())
													.substring(customerModel.getDamCustomerId().length()))
											: null);
							sapCustomerEmail.setEmail(customerModel.getEmail());
							sapCustomerEmail.setUserId(customerModel.getSso());
							sapCustomerEmail.setFirstName(customerModel.getGivenName());
							sapCustomerEmail.setLastName(customerModel.getFamilyName());
							sapCustomerEmail.setInsertFlag("I");
							sapCustomerEmail.setSapContactId(customerModel.getSapContactID());
							final BHGERegisterResponse savingInSAPResponse = validateCustomerNumber(sapCustomerEmail);
							if (!savingInSAPResponse.getRuleMessageList().isEmpty() && savingInSAPResponse.getRuleMessageList().stream()
									.allMatch(obj -> !("ERROR".equalsIgnoreCase(obj.getRuleStatus()))))
							{
								//savingUserAccessRequestUpdate(customerModel, "SUCCESS");
								savingUserAccessRequestUpdate(accessRequestData.get(i), "SUCCESS");
							}
							else
							{
								//savingUserAccessRequestUpdate(customerModel, "FAILURE");
								savingUserAccessRequestUpdate(accessRequestData.get(i), "FAILURE");
							}
						}
						else
						{
							/*
							 * final BHGEApprovalDetailsModel model = updatingApproverDetails(customerModel.getProductLine(),
							 * customerModel.getCompanyAddress().getCountry(), accessRequestData.get(i));
							 */
							final BHGEApprovalDetailsModel model = registerDao.getDAMApproverDetails();
						}
					}
					else
					{
						accessRequestData.get(i)
								.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
						accessRequestData.get(i).setLinkedWithRegister(true);
						getModelService().save(accessRequestData.get(i));
					}
				}
				//US8159: FPT Valve Store changes start
				else if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo()
						.getApplicationId() == 4)
				{
					accessRequestData.get(i)
							.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
					BHGEApprovalDetailsModel model = null;
					BHGEUserAccessRequestModel userAccessRequestData = accessRequestData.get(i);
					final List<BHGEApprovalDetailsModel> approverDetailsLsit = new ArrayList<>();
					if(CollectionUtils.isNotEmpty(userAccessRequestData.getFptApproverDetailsList()))
					{
						LOGGER.info("FPTApproversList for User is : " + userAccessRequestData.getFptApproverDetailsList());
						userAccessRequestData.getFptApproverDetailsList().stream().forEach(
								approver -> {
									userAccessRequestData.setApproverDetails(approver);
									getModelService().save(userAccessRequestData);									
									  try { 
										  if (customerModel.getSso() != null) 
										  {
									         LOGGER.info("Sending mail to FPTApprover ");
									         getEmailService().processCSRMail("WithoutCustomermodelcheck", userAccessRequestData, null, null); 
									       } 
										  } 
									  catch (Exception e) 
									  {
									  LOGGER.info("Error in sending mail to FPTApprovers with error : " +e.getMessage()); 
									  }
									 
								});
						flag = true;
					}
					else
					{
						for (int j = 0; j < customerModel.getFptLegalEntities().size(); j++)
						{
							model = updatingDetailsForFpt(
									((List<BHGERegisterKeyValueDataModel>) customerModel.getFptLegalEntities()).get(j),
									accessRequestData.get(i), customerModel.getFptRoles());
							approverDetailsLsit.add(model);
							if (flag.equals(Boolean.FALSE) && customerModel.getSso() != null)
							{
								getEmailService().processCSRMail("WithoutCustomermodelcheck", accessRequestData.get(i), null, null);
							}
						}
						flag = true;
						accessRequestData.get(i).setFptApproverDetailsList(approverDetailsLsit);
					}
					//LOGGER.info("Approver - " + model.getApproverGroupName() + " & Email - " + model.getEmailDistribList());
					LOGGER.info("Inside processWithoutCustomerNumber: CLOSE - " + customerModel.getSso());
				}
				//US8159: FPT Valvestore changes end
			}
		}
	}

	//US8159 :FPT Valve store changes start
	private BHGEApprovalDetailsModel updatingDetailsForFpt(final BHGERegisterKeyValueDataModel legalEntities,
			final BHGEUserAccessRequestModel accessRequestData, final BHGERegisterKeyValueDataModel fptRoles)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside updatingDetails: START");
		try
		{
			BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);
			for (int i = 0; i < 3; i++)
			{
				matrixModel = fetchManualApproverForFpt(legalEntities.getAttributeId(), i, fptRoles.getAttributeValue());
				if (null != matrixModel)
				{
					break;
				}
			}
			if (null != matrixModel)
			{
				LOGGER.warn("Inside updatingDetails: No Manual approver found - " + legalEntities.getAttributeId());
			}
			accessRequestData.setApproverDetails(
					null != matrixModel && matrixModel.getCsrApproverValue() != null ? matrixModel.getCsrApproverValue()
							: registerDao.getFPTPlaceHolderMatrix(legalEntities.getAttributeId()).getCsrApproverValue());
			accessRequestData.setLinkedWithRegister(true);
			getModelService().save(accessRequestData);

			LOGGER.info("Inside updatingDetails: CLOSE");
			return accessRequestData.getApproverDetails();
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1519: Error in updating details in database for without customer number scenario: " + ex.getMessage());

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("registration.failure.MSG1519 " + Config.getParameter("registration.failure.MSG1519"));
			emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1519"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "Last Name", "First Name", "User Id"),
					Arrays.asList(accessRequestData.getRequesterId().getEmail(), accessRequestData.getRequesterId().getFamilyName(),
							accessRequestData.getRequesterId().getGivenName(), accessRequestData.getRequesterId().getSso()));
		}

		return accessRequestData.getApproverDetails();
	}

	private BHGEMnCEcommMatrixModel fetchManualApproverForFpt(final String legalEntities, final int counter, final String role)
	{
		/*
		 * if (counter == 0) {
		 */
		return registerDao.fetchManualApproverForFpt(legalEntities, role);
		/* } */
		/*
		 * else if (counter == 1) { return registerDao.fetchManualApproverForFpt( (null !=
		 * registerDao.fetchSubRegion(country) ? registerDao.fetchSubRegion(country).getAttributeValue() : null),
		 * productLine, role, "SUBREGION"); } else if (counter == 2) { return registerDao.fetchManualApproverForFpt( (null
		 * != registerDao.fetchRegion(country) ? registerDao.fetchRegion(country).getAttributeValue() : null),
		 * productLine, role, "REGION"); }
	 */
		//return null;
	}
	//US8159 : FPT Valve store changes end

	private BHGEApprovalDetailsModel updatingDetails(final BHGERegisterKeyValueDataModel productLine, final CountryModel country,
			final BHGEUserAccessRequestModel accessRequestData) throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside updatingDetails: START");
		try
		{
			BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);
			accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
			/*
			 * if(accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 2) {
			 *
			 * getEmailService().requestSubmitEmail(IQM_REQUEST_SUBMIT, accessRequestData.getRequesterId().getEmail(),
			 * accessRequestData.getRequesterId().getGivenName(),accessRequestData.getRequesterId().getSso()); }
			 */
			for (int i = 0; i < 3; i++)
			{
				matrixModel = fetchManualApproverforProductline(country.getName(), productLine.getAttributeKey());
				if (null != matrixModel)
				{
					break;
				}
			}
			if (null != matrixModel)
			{
				LOGGER.warn("Inside updatingDetails: No Manual approver found - " + productLine.getAttributeKey() + " & Country - "
						+ country.getName());
			}
			accessRequestData.setApproverDetails(
					null != matrixModel && matrixModel.getCsrApproverValue() != null ? matrixModel.getCsrApproverValue()
							: registerDao.getPlaceHolderMatrix(productLine.getAttributeKey()).getCsrApproverValue());
			accessRequestData.setLinkedWithRegister(true);
			getModelService().save(accessRequestData);

			LOGGER.info("Inside updatingDetails: CLOSE");
			return accessRequestData.getApproverDetails();
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1519: Error in updating details in database for without customer number scenario: " + ex.getMessage());

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("registration.failure.MSG1519 " + Config.getParameter("registration.failure.MSG1519"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1519"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "Last Name", "First Name", "User Id"),
					Arrays.asList(accessRequestData.getRequesterId().getEmail(), StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getFamilyName()),
							StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getGivenName()), accessRequestData.getRequesterId().getSso()));
		}

		return accessRequestData.getApproverDetails();
	}
	
	//ofs changes started
		private BHGEApprovalDetailsModel updatingDetailsOfs(final CountryModel country,
				final BHGEUserAccessRequestModel accessRequestData) throws CMSItemNotFoundException, EmailException
		{
			LOGGER.info("Inside updatingDetails for OFS: START");
			try
			{
				BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);
				accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
				/*
				 * if(accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 2) {
				 *
				 * getEmailService().requestSubmitEmail(IQM_REQUEST_SUBMIT, accessRequestData.getRequesterId().getEmail(),
				 * accessRequestData.getRequesterId().getGivenName(),accessRequestData.getRequesterId().getSso()); }
				 */
				BHGEMnCEcommMatrixModel placeHolderMatrix = null;
				for (int i = 0; i < 3; i++)
				{
					//matrixModel = fetchManualApproverforCountry(country.getName(new Locale("en")));
					//Log.info("Country" +country.getName());
					if (null != matrixModel)
					{
						break;
					}
				}
				if (null != matrixModel)
				{
					LOGGER.warn("Inside updatingDetails: No Manual approver found - & Country - "
							+ country.getName());
				}
				accessRequestData.setApproverDetails(registerDao.getOFSApproverDetails());
				accessRequestData.setLinkedWithRegister(true);
				getModelService().save(accessRequestData);

				LOGGER.info("Inside updatingDetails for OFS: CLOSE");
				return accessRequestData.getApproverDetails();
			}
			catch (final Exception ex)
			{
				LOGGER.error("MSG1519: Error in updating details in database for without customer number scenario: " + ex.getMessage());

				final StringWriter sw = new StringWriter();
				final PrintWriter pw = new PrintWriter(sw);
				ex.printStackTrace(pw);
				LOGGER.info("registration.failure.MSG1519 " + Config.getParameter("registration.failure.MSG1519"));
				emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1519"), ex.getMessage(), sw.toString(),
						Arrays.asList("Email", "Last Name", "First Name", "User Id"),
						Arrays.asList(accessRequestData.getRequesterId().getEmail(), accessRequestData.getRequesterId().getFamilyName(),
								accessRequestData.getRequesterId().getGivenName(), accessRequestData.getRequesterId().getSso()));
			}

			return accessRequestData.getApproverDetails();
		}
		//ofs changes ended

	/**
	 * @param name
	 * @param attributeKey
	 * @param i
	 * @return
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 */
	private BHGEMnCEcommMatrixModel fetchManualApprover(final String country, final String productLine, final int counter)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside fetchManualApprover: START - " + productLine + " & Country - " + country);
		BHGEMnCEcommMatrixModel response = null;
		try
		{
			if (counter == 0)
			{
				response = registerDao.fetchManualApprover(country, productLine, "COUNTRY");
			}
			else if (counter == 1)
			{
				response = registerDao.fetchManualApprover(
						(null != registerDao.fetchSubRegion(country) ? registerDao.fetchSubRegion(country).getAttributeValue() : null),
						productLine, "SUBREGION");
			}
			else if (counter == 2)
			{
				response = registerDao.fetchManualApprover(
						(null != registerDao.fetchRegion(country) ? registerDao.fetchRegion(country).getAttributeValue() : null),
						productLine, "REGION");
			}
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1520: Error in fetching manual approval for a particular country and product line: " + ex.getMessage());
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info(Config.getParameter("registration.failure.MSG1520"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1520"), ex.getMessage(), sw.toString(),
					Arrays.asList("Country", "Product Line"), Arrays.asList(country, productLine));
		}
		LOGGER.info("Inside fetchManualApprover: CLOSE - " + productLine + " & Country - " + country);
		return response;
	}

	/**
	 * @param customerModel
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 *
	 */
	private void processWithCustomerNumber(final BHGERegieterCustomerModel customerModel)
			throws CMSItemNotFoundException, EmailException
	{

		LOGGER.info("Inside processWithCustomerNumber: START - " + customerModel.getSso());
		//final BHGEUserAccessRequestModel accessRequestData = registerDao.fetchUserAccessRequest(customerModel.getSso());
		final List<BHGEUserAccessRequestModel> accessRequestData = registerDao.fetchUserAccessRequestList(customerModel.getSso());

		for (int i = 0; i < accessRequestData.size(); i++)
		{

			if (accessRequestData.get(i).getRequestStatus() != null && accessRequestData.get(i)
					.getRequestStatus() == com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_ACTIVATION)
			{
				if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1)
				{
					if (validateSuccessSAPRules(customerModel, accessRequestData.get(i)))
					{
						final BHGERegisterRequest sapCustomerEmail = new BHGERegisterRequest();
						sapCustomerEmail
								.setCustomerNumber(null != customerModel.getRequestCustomerId()
										? (("0000000000" + customerModel.getRequestCustomerId())
												.substring(customerModel.getRequestCustomerId().length()))
										: null);
						sapCustomerEmail.setEmail(customerModel.getEmail());
						sapCustomerEmail.setUserId(customerModel.getSso());
						sapCustomerEmail.setFirstName(customerModel.getGivenName());
						sapCustomerEmail.setLastName(customerModel.getFamilyName());
						sapCustomerEmail.setInsertFlag("I");
						sapCustomerEmail.setSrcSystem("DS");
						sapCustomerEmail.setSapContactId(customerModel.getSapContactID());
						final BHGERegisterResponse savingInSAPResponse = validateCustomerNumber(sapCustomerEmail);
						if (!savingInSAPResponse.getRuleMessageList().isEmpty() && savingInSAPResponse.getRuleMessageList().stream()
								.allMatch(obj -> !("ERROR".equalsIgnoreCase(obj.getRuleStatus()))))
						{
							//savingUserAccessRequestUpdate(customerModel, "SUCCESS");
							savingUserAccessRequestUpdate(accessRequestData.get(i), "SUCCESS");
						}
						else
						{
							//savingUserAccessRequestUpdate(customerModel, "FAILURE");
							savingUserAccessRequestUpdate(accessRequestData.get(i), "FAILURE");
						}
					}
					else
					{
						final BHGEApprovalDetailsModel model = updatingApproverDetails(customerModel.getProductLine(),
								customerModel.getCompanyAddress().getCountry(), accessRequestData.get(i));
						sendCSREmail(accessRequestData.get(i));
					}
				}
					//ofs changes started
					if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5)
					{
						if (validateOFSSuccessSAPRules(customerModel, accessRequestData.get(i)))
						{
							final BHGERegisterRequest sapCustomerEmail = new BHGERegisterRequest();
							sapCustomerEmail
									.setCustomerNumber(null != customerModel.getRequestCustomerId()
											? (("0000000000" + customerModel.getRequestCustomerId())
													.substring(customerModel.getRequestCustomerId().length()))
											: null);
							sapCustomerEmail.setEmail(customerModel.getEmail());
							sapCustomerEmail.setUserId(customerModel.getSso());
							sapCustomerEmail.setFirstName(customerModel.getGivenName());
							sapCustomerEmail.setLastName(customerModel.getFamilyName());
							sapCustomerEmail.setInsertFlag("I");
							sapCustomerEmail.setSrcSystem("OFS");
							sapCustomerEmail.setSapContactId(customerModel.getSapContactID());
							final BHGERegisterResponse savingInSAPResponse = validateCustomerNumber(sapCustomerEmail);
							if (!savingInSAPResponse.getRuleMessageList().isEmpty() && savingInSAPResponse.getRuleMessageList().stream()
									.allMatch(obj -> !("ERROR".equalsIgnoreCase(obj.getRuleStatus()))))
							{
								//savingUserAccessRequestUpdate(customerModel, "SUCCESS");
								savingUserAccessRequestUpdate(accessRequestData.get(i), "SUCCESS");
								//sendCSREmail(accessRequestData.get(i));
							}
							else
							{
								//savingUserAccessRequestUpdate(customerModel, "FAILURE");
								savingUserAccessRequestUpdate(accessRequestData.get(i), "FAILURE");
							}
						}
						else
						{
							final BHGEApprovalDetailsModel model = updatingOFSApproverDetails(
									customerModel.getCompanyAddress().getCountry(), accessRequestData.get(i));
							sendCSREmail(accessRequestData.get(i));
						}

					}
					//ofs changes ended
				
				else if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo()
						.getApplicationId() == 2)
				{
					/*
					 * final BHGEApprovalDetailsModel model = updatingDetails(customerModel.getIqmProductLine(),
					 * customerModel.getIqmCompanyAddress().getCountry(), accessRequestData);
					 */
					accessRequestData.get(i)
							.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
					getEmailService().requestSubmitEmail(IQM_REQUEST_SUBMIT, accessRequestData.get(i).getRequesterId().getEmail(),
							accessRequestData.get(i).getRequesterId().getGivenName() + " "
									+ accessRequestData.get(i).getRequesterId().getFamilyName(),
							accessRequestData.get(i).getRequesterId().getSso(),
							accessRequestData.get(i).getApproverDetails().getEmailDistribList());
					accessRequestData.get(i).setLinkedWithRegister(true);
					getModelService().save(accessRequestData.get(i));

				}
				else if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo()
						.getApplicationId() == 3)
				{

					if (null != accessRequestData.get(i).getRequesterId().getDamCustomerId()
							&& !accessRequestData.get(i).getRequesterId().getDamCustomerId().isEmpty())
					{
						if (validateSuccessSAPRules(customerModel, accessRequestData.get(i)))
						{
							final BHGERegisterRequest sapCustomerEmail = new BHGERegisterRequest();
							sapCustomerEmail.setDamCustomerAccNumber(
									null != customerModel.getDamCustomerId()
											? (("0000000000" + customerModel.getDamCustomerId())
													.substring(customerModel.getDamCustomerId().length()))
											: null);
							sapCustomerEmail.setEmail(customerModel.getEmail());
							sapCustomerEmail.setUserId(customerModel.getSso());
							sapCustomerEmail.setFirstName(customerModel.getGivenName());
							sapCustomerEmail.setLastName(customerModel.getFamilyName());
							sapCustomerEmail.setInsertFlag("I");
							sapCustomerEmail.setSapContactId(customerModel.getSapContactID());
							final BHGERegisterResponse savingInSAPResponse = validateCustomerNumber(sapCustomerEmail);
							if (!savingInSAPResponse.getRuleMessageList().isEmpty() && savingInSAPResponse.getRuleMessageList().stream()
									.allMatch(obj -> !("ERROR".equalsIgnoreCase(obj.getRuleStatus()))))
							{
								//savingUserAccessRequestUpdate(customerModel, "SUCCESS");
								savingUserAccessRequestUpdate(accessRequestData.get(i), "SUCCESS");
							}
							else
							{
								//savingUserAccessRequestUpdate(customerModel, "FAILURE");
								savingUserAccessRequestUpdate(accessRequestData.get(i), "FAILURE");
							}
						}
						else
						{
							/*
							 * final BHGEApprovalDetailsModel model = updatingApproverDetails(customerModel.getProductLine(),
							 * customerModel.getCompanyAddress().getCountry(), accessRequestData.get(i));
							 */
							final BHGEApprovalDetailsModel model = registerDao.getDAMApproverDetails();
						}
					}
				}
				//US8159 : FPT Valve store changes start
				else if (accessRequestData.get(i).getApproverDetails().getAppAccessLevel().getApplicationInfo()
						.getApplicationId() == 4)
				{
					accessRequestData.get(i)
							.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
					BHGEApprovalDetailsModel model = null;
					BHGEUserAccessRequestModel userAccessRequestData = accessRequestData.get(i);
					final List<BHGEApprovalDetailsModel> approverdetailsList = new ArrayList<>();
					if(CollectionUtils.isNotEmpty(userAccessRequestData.getFptApproverDetailsList()))
					{
						LOGGER.info("FPTApproversList for User is : " + userAccessRequestData.getFptApproverDetailsList());
						userAccessRequestData.getFptApproverDetailsList().stream().forEach(
								approver -> {
									userAccessRequestData.setApproverDetails(approver);
									getModelService().save(userAccessRequestData);
									try {
										sendCSREmail(userAccessRequestData);
									}  catch (Exception e) {
										LOGGER.info("Error in sending mail to FPTApprovers with error : " + e.getMessage());
									}
								});
					}
					else
					{
						for (int j = 0; j < customerModel.getFptLegalEntity().size(); j++)
						{
							model = updatingApproverDetailswithCustNumberForFpt(((List<String>) customerModel.getFptLegalEntity()).get(j),
									accessRequestData.get(i), customerModel.getFptRoles());
							approverdetailsList.add(model);
							sendCSREmail(accessRequestData.get(i));
						}
						accessRequestData.get(i).setFptApproverDetailsList(approverdetailsList);
					}
				}
				//US8159 : FPT Valve store changes end
					else
					{
						accessRequestData.get(i)
								.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
						accessRequestData.get(i).setLinkedWithRegister(true);
						getModelService().save(accessRequestData.get(i));
					}

				}

			}

		//}
		/*
		 * if (validateSuccessSAPRules(customerModel, accessRequestData)) { final BHGERegisterRequest sapCustomerEmail = new
		 * BHGERegisterRequest(); sapCustomerEmail.setCustomerNumber(null != customerModel.getRequestCustomerId() ?
		 * (("0000000000" + customerModel.getRequestCustomerId()).substring(customerModel.getRequestCustomerId().length())) :
		 * null); sapCustomerEmail.setEmail(customerModel.getEmail()); sapCustomerEmail.setUserId(customerModel.getSso());
		 * sapCustomerEmail.setFirstName(customerModel.getGivenName());
		 * sapCustomerEmail.setLastName(customerModel.getFamilyName()); sapCustomerEmail.setInsertFlag("I");
		 * sapCustomerEmail.setSapContactId(customerModel.getSapContactID()); final BHGERegisterResponse savingInSAPResponse =
		 * validateCustomerNumber(sapCustomerEmail); if (!savingInSAPResponse.getRuleMessageList().isEmpty() &&
		 * savingInSAPResponse.getRuleMessageList().stream() .allMatch(obj -> !("ERROR".equalsIgnoreCase(obj.getRuleStatus()))))
		 * { savingUserAccessRequestUpdate(customerModel, "SUCCESS"); } else { savingUserAccessRequestUpdate(customerModel,
		 * "FAILURE"); } } else { final BHGEApprovalDetailsModel model = updatingApproverDetails(customerModel.getProductLine(),
		 * customerModel.getCompanyAddress().getCountry(), accessRequestData); sendCSREmail(accessRequestData); }
		 */
		LOGGER.info("Inside processWithCustomerNumber: CLOSE - " + customerModel.getSso());
	}

	//US8159 : FPT Valvestore changes start

	private BHGEApprovalDetailsModel updatingApproverDetailswithCustNumberForFpt(final String legalEntities,
			final BHGEUserAccessRequestModel accessRequestData, final BHGERegisterKeyValueDataModel role)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside updatingApproverDetails: START - " + legalEntities);
		try
		{
			BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);

			matrixModel = fetchManualApproverAttributeKeyForFptWithCustNo(legalEntities, role.getAttributeValue());

			if (null != matrixModel)
			{
				accessRequestData.setApproverDetails(matrixModel.getCsrApproverValue());
				getModelService().save(accessRequestData);
			}

			LOGGER.info("Inside updatingApproverDetails: START - " + legalEntities);
			return accessRequestData.getApproverDetails();

		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1517: Error in updating approver details in access request post SAP rule failure with error: "
					+ ex.getMessage());

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("Error message " + Config.getParameter("registration.failure.MSG1517"));
			emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1517"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "Last Name", "First Name", "User Id", "Access Request Id"),
					Arrays.asList(accessRequestData.getRequesterId().getEmail(), accessRequestData.getRequesterId().getFamilyName(),
							accessRequestData.getRequesterId().getGivenName(), accessRequestData.getRequesterId().getSso(),
							String.valueOf(accessRequestData.getAccessRequestId())));
		}

		return accessRequestData.getApproverDetails();
	}


	private BHGEMnCEcommMatrixModel fetchManualApproverAttributeKeyForFpt(final String country, final String legalEntities,
			final String role, final int counter)
	{
		LOGGER.info("Inside fetchManualApproverAttributeKey: START - " + legalEntities + " & Country - " + country);
		if (counter == 0)
		{
			return registerDao.fetchManualApproverForFpt(legalEntities, role);
		}
		/*
		 * else if (counter == 1) { return registerDao.fetchManualApproverForFpt(null !=
		 * registerDao.fetchSubRegionAttributeKey(country) ?
		 * registerDao.fetchSubRegionAttributeKey(country).getAttributeKey() : null, productLine, role, "subRegion"); }
		 * else if (counter == 2) { return registerDao.fetchManualApproverForFpt(null !=
		 * registerDao.fetchRegionAttributeKey(country) ? registerDao.fetchRegionAttributeKey(country).getAttributeKey() :
		 * null, productLine, role, "region"); }
		 */
		LOGGER.info("Inside fetchManualApproverAttributeKey: NOMATCH - " + legalEntities + " & Country - " + country);
		return null;
	}

	private BHGEMnCEcommMatrixModel fetchManualApproverAttributeKeyForFptWithCustNo(final String legalEntities, final String role)
	{
		LOGGER.info("Inside fetchManualApproverAttributeKey: START - " + legalEntities);

		return registerDao.fetchManualApproverForFptWitCustNo(legalEntities, role);


	}
	//US8159 : FPT Valvestore chnages end

	/**
	 * @param productLine
	 * @param accessRequestData
	 * @param countryModel
	 * @return
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 */
	private BHGEApprovalDetailsModel updatingApproverDetails(final BHGERegisterKeyValueDataModel productLine,
			final CountryModel country, final BHGEUserAccessRequestModel accessRequestData)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info(
				"Inside updatingApproverDetails: START - " + productLine.getAttributeKey() + " & Country - " + country.getName());
		try
		{
			accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);

			BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);

			for (int i = 0; i < 3; i++)
			{
				matrixModel = fetchManualApproverforProductline(country.getIsocode(), productLine.getAttributeKey());
				if (null != matrixModel)
				{
					break;
				}

			}
			accessRequestData.setApproverDetails(null != matrixModel ? matrixModel.getCsrApproverValue()
					: registerDao.getPlaceHolderMatrix(productLine.getAttributeKey()).getCsrApproverValue());

			getModelService().save(accessRequestData);

			LOGGER.info(
					"Inside updatingApproverDetails: START - " + productLine.getAttributeKey() + " & Country - " + country.getName());
			return accessRequestData.getApproverDetails();

		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1517: Error in updating approver details in access request post SAP rule failure with error: "
					+ ex.getMessage());

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("Error message " + Config.getParameter("registration.failure.MSG1517"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1517"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "Last Name", "First Name", "User Id", "Access Request Id"),
					Arrays.asList(accessRequestData.getRequesterId().getEmail(), StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getFamilyName()),
							StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getGivenName()), accessRequestData.getRequesterId().getSso(),
							String.valueOf(accessRequestData.getAccessRequestId())));
		}

		return accessRequestData.getApproverDetails();
	}
	
	//ofs changes strt here
	private BHGEApprovalDetailsModel updatingOFSApproverDetails(final CountryModel country, final BHGEUserAccessRequestModel accessRequestData)
			throws CMSItemNotFoundException, EmailException
	{
		BHGEMnCEcommMatrixModel placeHolderMatrix = null;
		LOGGER.info(
				"Inside updatingApproverDetails: START - Country - " + country.getName());
		try
		{
			accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);

			BHGEMnCEcommMatrixModel matrixModel = getModelService().create(BHGEMnCEcommMatrixModel.class);

			for (int i = 0; i < 3; i++)
			{
				//matrixModel = fetchManualApproverforCountry(country.getName(new Locale("en")));
				if (null != matrixModel)
				{
					break;
				}

			}
			accessRequestData.setApproverDetails(registerDao.getOFSApproverDetails());

			getModelService().save(accessRequestData);

			LOGGER.info(
					"Inside updatingApproverDetails: START - Country - " + country.getName());
			return accessRequestData.getApproverDetails();

		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1517: Error in updating approver details in access request post SAP rule failure with error: "
					+ ex.getMessage());

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("Error message " + Config.getParameter("registration.failure.MSG1517"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1517"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "Last Name", "First Name", "User Id", "Access Request Id"),
					Arrays.asList(accessRequestData.getRequesterId().getEmail(), accessRequestData.getRequesterId().getFamilyName(),
							accessRequestData.getRequesterId().getGivenName(), accessRequestData.getRequesterId().getSso(),
							String.valueOf(accessRequestData.getAccessRequestId())));
		}

		return accessRequestData.getApproverDetails();
	}
	//ofs changes end here


	/**
	 * @param submitDetails
	 * @return
	 *
	 */
	private BHGEMnCEcommMatrixModel fetchManualApproverAttributeKey(final String country, final String productLine,
			final int counter)
	{
		LOGGER.info("Inside fetchManualApproverAttributeKey: START - " + productLine + " & Country - " + country);
		if (counter == 0)
		{
			return registerDao.fetchManualApproverAttributeKey(country, productLine, "country");
		}
		else if (counter == 1)
		{
			return registerDao.fetchManualApproverAttributeKey(null != registerDao.fetchSubRegionAttributeKey(country)
					? registerDao.fetchSubRegionAttributeKey(country).getAttributeKey()
					: null, productLine, "subRegion");
		}
		else if (counter == 2)
		{
			return registerDao.fetchManualApproverAttributeKey(null != registerDao.fetchRegionAttributeKey(country)
					? registerDao.fetchRegionAttributeKey(country).getAttributeKey()
					: null, productLine, "region");
		}
		LOGGER.info("Inside fetchManualApproverAttributeKey: NOMATCH - " + productLine + " & Country - " + country);
		return null;
	}
	
	private BHGEMnCEcommMatrixModel fetchManualApproverforProductline(final String country, final String productLine)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside fetchManualApproverforProductline: START - " + productLine + " & Country - " + country);
		BHGEMnCEcommMatrixModel response = null;
		try
		{
			response = registerDao.fetchManualApproverforProductline(country, productLine);

		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1520: Error in fetching manual approval for a particular country and product line: " + ex.getMessage());
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info(Config.getParameter("registration.failure.MSG1520"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1520"), ex.getMessage(), sw.toString(),
					Arrays.asList("Country", "Product Line"), Arrays.asList(country, productLine));
		}
		LOGGER.info("Inside fetchManualApproverforProductline: CLOSE - " + productLine + " & Country - " + country);
		return response;
	}
	
	//ofs started
	private BHGEMnCEcommMatrixModel fetchManualApproverforCountry(final String country)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside fetchManualApproverforCountry: START - Country - " + country);
		BHGEMnCEcommMatrixModel response = null;
		try
		{
			response = registerDao.fetchManualApproverforCountry(country);

		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1520: Error in fetching manual approval for a particular country and product line: " + ex.getMessage());
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info(Config.getParameter("registration.failure.MSG1520"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1520"), ex.getMessage(), sw.toString(),
					Arrays.asList("Country"), Arrays.asList(country));
		}
		LOGGER.info("Inside fetchManualApproverforCountry: CLOSE - Country - " + country);
		return response;
	}
	
	private boolean validateOFSSuccessSAPRules(final BHGERegieterCustomerModel customerModel,
			final BHGEUserAccessRequestModel accessRequestData) throws CMSItemNotFoundException, EmailException
	{
		boolean response = false;
		LOGGER.info("Inside validateSuccessSAPRules: START");
		try
		{
			final List<BHGEUserAccessRulesModel> listRules = registerDao.fetchUserAccessRules(accessRequestData);
			if (!listRules.isEmpty())
			{	
				for( BHGEUserAccessRulesModel ict:listRules) {
					if(ict.getAppAccessRuleDetails().equalsIgnoreCase("User's email does not belong to a public, government, or competitor domain") &&
							ict.getRuleStatus().getCode().equalsIgnoreCase("SUCCESS")) {
						response = true;
					}
				}
			}
			else
			{
				response = false;
			}
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1514: Error in validating SAP Rules.");
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("registration.failure.MSG1514 " + Config.getParameter("registration.failure.MSG1514"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1514"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "First Name", "Last Name", "User Id"), Arrays.asList(customerModel.getEmail(),
							customerModel.getGivenName(), customerModel.getFamilyName(), customerModel.getSso()));
		}
		LOGGER.info("Inside validateSuccessSAPRules: CLOSE");
		return response;
	}
	
	//ofs ended
	
	/**
	 * @param customerModel
	 * @param accessRequestData2
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 */
	private boolean validateSuccessSAPRules(final BHGERegieterCustomerModel customerModel,
			final BHGEUserAccessRequestModel accessRequestData) throws CMSItemNotFoundException, EmailException
	{
		boolean response = false;
		LOGGER.info("Inside validateSuccessSAPRules: START");
		try
		{
			final List<BHGEUserAccessRulesModel> listRules = registerDao.fetchUserAccessRules(accessRequestData);
			if (!listRules.isEmpty()
					&& listRules.stream().allMatch(obj -> ("SUCCESS".equalsIgnoreCase(obj.getRuleStatus().getCode()))))
			{
				response = true;
			}
			else
			{
				response = false;
			}
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1514: Error in validating SAP Rules.");
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("registration.failure.MSG1514 " + Config.getParameter("registration.failure.MSG1514"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1514"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "First Name", "Last Name", "User Id"), Arrays.asList(customerModel.getEmail(),
							StringEscapeUtils.escapeHtml4(customerModel.getGivenName()), StringEscapeUtils.escapeHtml4(customerModel.getFamilyName()), customerModel.getSso()));
		}
		LOGGER.info("Inside validateSuccessSAPRules: CLOSE");
		return response;
	}

	/**
	 * @param customerModel
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 */
	/*
	 * private void savingUserAccessRequestUpdate(final BHGERegieterCustomerModel customerModel, final String flag) throws
	 * CMSItemNotFoundException, EmailException
	 */
	private void savingUserAccessRequestUpdate(final BHGEUserAccessRequestModel accessRequestData, final String flag)
			throws CMSItemNotFoundException, EmailException
	{
		//LOGGER.info("Inside savingUserAccessRequestUpdate: START - " + customerModel.getSso());
		try
		{
			//final BHGEUserAccessRequestModel accessRequestData = registerDao.fetchUserAccessRequest(customerModel.getSso());
			if ("SUCCESS".equalsIgnoreCase(flag))
			{
				LOGGER.info("Inside savingUserAccessRequestUpdate: APPROVED - ");
				accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.APPROVED);
				if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1)
				{
					accessRequestData.setApproverDetails(registerDao.getSystemApproverDetails());
				}
				if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 3)
				{
					accessRequestData.setApproverDetails(registerDao.getDAMApproverDetails());
				}
				//ofs changes started
				if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5)
				{
					accessRequestData.setApproverDetails(registerDao.getOFSApproverDetails());
				}
				//ofs changes ended
				getModelService().save(accessRequestData);
			}
			if ("FAILURE".equalsIgnoreCase(flag))
			{
				LOGGER.info("Inside savingUserAccessRequestUpdate: PENDING APPROVAL - ");
				accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.PENDING_APPROVAL);
				if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1)
				{
					accessRequestData.setApproverDetails(registerDao.getSystemApproverDetails());
					getModelService().save(accessRequestData);
					sendCSREmail(accessRequestData);
				}
				if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 3)
				{
					accessRequestData.setApproverDetails(registerDao.getDAMApproverDetails());
					getModelService().save(accessRequestData);
					//sendCSREmail(accessRequestData);
				}
				//ofs changes started
				if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5)
				{
					accessRequestData.setApproverDetails(registerDao.getOFSApproverDetails());
					getModelService().save(accessRequestData);
					sendCSREmail(accessRequestData);
				}
				//ofs changes ended
			}
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1516: Error in updating user access request with error: " + ex.getMessage());
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("registration.failure.MSG1516 " + Config.getParameter("registration.failure.MSG1516"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1516"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "First Name", "Last Name", "User Id"),
					Arrays.asList(accessRequestData.getRequesterId().getEmail(), StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getGivenName()),
							StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getFamilyName()), accessRequestData.getRequesterId().getSso()));
		}
		LOGGER.info("Inside savingUserAccessRequestUpdate: CLOSE - " + accessRequestData.getRequesterId().getSso());

	}

	/**
	 * @param customerModel
	 * @param approverDetails
	 * @param string
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 */
	private void sendCSREmail(final BHGEUserAccessRequestModel accessRequestData) throws CMSItemNotFoundException, EmailException
	{
		try
		{
			LOGGER.info("Approver - " + accessRequestData.getApproverDetails().getApproverGroupName() + " & Email - "
					+ accessRequestData.getApproverDetails().getEmailDistribList());
			getEmailService().processCSRMail("WithoutCustomermodelcheck", accessRequestData,
					accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId().toString(),
					null);
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1518: Error in sending mail in register customer interceptor with error: " + ex.getMessage());
			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("MSG1518 " + Config.getParameter("MSG1518"));
			if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1
					|| accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 2
					|| accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 3 
					|| accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5)
			{
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1518"), ex.getMessage(), sw.toString(),
					Arrays.asList("Email", "Last Name", "First Name", "User Id"),
					Arrays.asList(accessRequestData.getApproverDetails().getEmailDistribList(),
							StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getFamilyName()), StringEscapeUtils.escapeHtml4(accessRequestData.getRequesterId().getGivenName()),
							accessRequestData.getRequesterId().getSso()));
		}
			if (accessRequestData.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4)
			{
				emailService.registerFptFailureMail(Config.getParameter("registration.failure.MSG1518"), ex.getMessage(),
						sw.toString(), Arrays.asList("Email", "Last Name", "First Name", "User Id"),
						Arrays.asList(accessRequestData.getApproverDetails().getEmailDistribList(),
								accessRequestData.getRequesterId().getFamilyName(), accessRequestData.getRequesterId().getGivenName(),
								accessRequestData.getRequesterId().getSso()));
			}
		}
	}

	/**
	 * @param sapCustomerEmail
	 * @return
	 * @throws EmailException
	 * @throws CMSItemNotFoundException
	 */
	public BHGERegisterResponse validateCustomerNumber(final BHGERegisterRequest requestData)
			throws CMSItemNotFoundException, EmailException
	{
		LOGGER.info("Inside validateCustomerNumber: START - " + requestData.getUserId());
		try
		{
			final List<BHGERegisterRequest> registerRequestList = new ArrayList<>();
			registerRequestList.add(requestData);
			return getBhgeregistermncecommapplicationService().executeSAPLookup(registerRequestList);
		}
		catch (final Exception ex)
		{
			LOGGER.error("MSG1515: Error in SAP Customer number validation. Ops Team to check for input criteria for failure.");

			final String message = String.format(
					"Technical Error happened during Self Registration. Support team is notified for the same & will get back to you.",
					ex);

			final StringWriter sw = new StringWriter();
			final PrintWriter pw = new PrintWriter(sw);
			ex.printStackTrace(pw);
			LOGGER.info("registration.failure.MSG1515 " + Config.getParameter("registration.failure.MSG1515"));
			emailService.registerFailureMail(Config.getParameter("registration.failure.MSG1515"), ex.getMessage(), sw.toString(),
					Arrays.asList("Customer Number", "First Name", "Last Name", "User Id"),
					Arrays.asList(requestData.getCustomerNumber(), StringEscapeUtils.escapeHtml4(requestData.getFirstName()), StringEscapeUtils.escapeHtml4(requestData.getLastName()),
							requestData.getUserId()));
			throw new RuntimeException(message);

		}
	}

}
