/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.register.webservices.populators;

import de.hybris.platform.converters.Populator;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.log4j.Logger;

import com.bhge.register.webservices.dao.RegisterUserDao;
import org.springframework.beans.factory.annotation.Autowired;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.media.MediaService;
import com.bhge.register.webservices.data.AccountLinkingData;
import com.bhge.register.webservices.data.ManualApprovalData;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;


public class BHGEManualApprovalPopulator implements Populator<BHGEUserAccessRequestModel, ManualApprovalData>
{
	private final Logger LOG = Logger.getLogger(BHGEManualApprovalPopulator.class);

	/* FPT Valv store Changes start */
	private RegisterUserDao registerDao;
	@Autowired
	private MediaService mediaService;

	public RegisterUserDao getRegisterDao()
	{
		return registerDao;
	}

	public void setRegisterDao(final RegisterUserDao registerDao)
	{
		this.registerDao = registerDao;
	}
	/* FPT Valv store Changes end */

	@Override
	public void populate(final BHGEUserAccessRequestModel source, final ManualApprovalData target)
	{
		if ((source.getRequesterId()) != null)
		{
			target.setFirstname(source.getRequesterId().getGivenName());
			target.setLastname(source.getRequesterId().getFamilyName());
			target.setUsername(source.getRequesterId().getUid());
			target.setSsoId(source.getRequesterId().getSso());
		}
		final Date date = source.getCreationtime();
		final SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
		final String creationDate = formatter.format(date);

		if (source.getProcessDate() != null)
		{
			target.setProcessDate(formatter.format(source.getProcessDate()));
		}
		//LOG.info("Creation date :" + creationDate);
		target.setRequestorDate(creationDate);
		if (null != source.getApproverDetails() && null != source.getApproverDetails().getAppAccessLevel()
				&& null != source.getApproverDetails().getAppAccessLevel().getApplicationInfo()
				&& null != source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationName())
		{
			target.setApp(source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationName());
		}

		if (null != source.getApproverDetails() && null != source.getApproverDetails().getAppAccessLevel()
				&& null != source.getApproverDetails().getAppAccessLevel().getApplicationInfo()
				&& null != source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId())
		{
			target.setAppId(source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId().toString());
		}
		if ((source.getRequesterId()) != null)
		{
			if (source.getRequesterId().getRequestCustomerId() != null)
			{
				target.setAccountNumber(source.getRequesterId().getRequestCustomerId());
			}
			if (source.getRequesterId().getCompanyAddress() != null
					&& source.getRequesterId().getCompanyAddress().getCountry() != null
					&& source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1)
			{
				target.setRegion(source.getRequesterId().getCompanyAddress().getCountry().getName());
				target.setCompanyCountry(source.getRequesterId().getCompanyAddress().getCountry().getName());

			}
			if (source.getRequesterId().getCompanyAddress() != null
					&& source.getRequesterId().getCompanyAddress().getCountry() != null
					&& source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 5)
			{
				target.setRegion(source.getRequesterId().getCompanyAddress().getCountry().getName());
				target.setCompanyCountry(source.getRequesterId().getCompanyAddress().getCountry().getName());

			}
			if (source.getRequestStatus() != null)
			{
				target.setApprovalStatus(source.getRequestStatus().toString());
			}
			if (source.getAccessRequestId() != null)
			{
				target.setAccessRequestId(source.getAccessRequestId().toString());
			}

			//Waygate attribute
			if(source.getRequesterId().getEndCustomer() != null){
				target.setEndCustomer(source.getRequesterId().getEndCustomer());
			}
			if(source.getRequesterId().getGovernmentEntity() != null){
				target.setGovernmentEntity(source.getRequesterId().getGovernmentEntity());
			}
			if(source.getRequesterId().getDetailNumber() != null){
				target.setDetailNumber(source.getRequesterId().getDetailNumber().getCode());
			}
			if(source.getRequesterId().getAddressType() != null){
				target.setAddressType(source.getRequesterId().getAddressType().getCode());
			}
			if(source.getRequesterId().getDetailNumberValue() != null){
				target.setDetailNumberValue(source.getRequesterId().getDetailNumberValue());
			}
			if(source.getRequesterId().getAddressProof() != null && source.getRequesterId().getAddressProof().getCode()!=null && mediaService.getMedia(source.getRequesterId().getAddressProof().getCode())!=null){
				if(mediaService.getMedia(source.getRequesterId().getAddressProof().getCode()).getRealFileName()!=null)
				target.setAddressProof(source.getRequesterId().getAddressProof().getCode()+"-"+mediaService.getMedia(source.getRequesterId().getAddressProof().getCode()).getRealFileName());
			}
			if(source.getRequesterId().getOwnershipStructure() != null && source.getRequesterId().getOwnershipStructure().getCode()!=null && mediaService.getMedia(source.getRequesterId().getOwnershipStructure().getCode())!=null){
				if(mediaService.getMedia(source.getRequesterId().getOwnershipStructure().getCode()).getRealFileName()!=null)
				target.setOwnershipStructure(source.getRequesterId().getOwnershipStructure().getCode()+"-"+mediaService.getMedia(source.getRequesterId().getOwnershipStructure().getCode()).getRealFileName());
			}


			//target.setComments(source.getApproverResponse());
			target.setComments(source.getApproverResponseLong());
			target.setEmail(source.getRequesterId().getEmail());
			if (source.getRequesterId().getCompanyAddress() != null
					&& (source.getRequesterId().getCompanyAddress().getLine1() != null
							|| source.getRequesterId().getCompanyAddress().getLine2() != null
							|| source.getRequesterId().getCompanyAddress().getDistrict() != null
							|| source.getRequesterId().getCompanyAddress().getTown() != null
							|| source.getRequesterId().getCompanyAddress().getPostalcode() != null
							|| source.getRequesterId().getCompanyAddress().getCompany() != null))
			{
				target.setCompanyAddressLine1(source.getRequesterId().getCompanyAddress().getLine1());
				target.setCompanyAddressLine2(source.getRequesterId().getCompanyAddress().getLine2());
				target.setDistrict(source.getRequesterId().getCompanyAddress().getDistrict());
				target.setTown(source.getRequesterId().getCompanyAddress().getTown());
				target.setPostalCode(source.getRequesterId().getCompanyAddress().getPostalcode());
				target.setCompanyName(source.getRequesterId().getCompanyAddress().getCompany());
			}
			if (source.getApproverDetails() != null && source.getApproverDetails().getAppAccessLevel() != null)
			{
				target.setIqmRole(source.getApproverDetails().getAppAccessLevel().getAppAccessLevelName());
			}

			target.setIqmDunsNumber(source.getRequesterId().getIqmDunsNumber());
			if (source.getRequesterId().getIqmCompanyAddress() != null
					&& (source.getRequesterId().getIqmCompanyAddress().getLine1() != null
							|| source.getRequesterId().getIqmCompanyAddress().getLine2() != null
							|| source.getRequesterId().getIqmCompanyAddress().getDistrict() != null
							|| source.getRequesterId().getIqmCompanyAddress().getTown() != null
							|| source.getRequesterId().getIqmCompanyAddress().getPostalcode() != null
							|| source.getRequesterId().getIqmCompanyAddress().getCompany() != null))
			{
				target.setIqmCompanyAddressLine1(source.getRequesterId().getIqmCompanyAddress().getLine1());
				target.setIqmCompanyAddressLine2(source.getRequesterId().getIqmCompanyAddress().getLine2());
				target.setIqmDistrict(source.getRequesterId().getIqmCompanyAddress().getDistrict());
				target.setIqmTown(source.getRequesterId().getIqmCompanyAddress().getTown());
				target.setIqmPostalCode(source.getRequesterId().getIqmCompanyAddress().getPostalcode());
				target.setIqmCompanyName(source.getRequesterId().getIqmCompanyAddress().getCompany());
			}
			if (source.getRequesterId().getIqmCompanyAddress() != null
					&& source.getRequesterId().getIqmCompanyAddress().getCountry() != null
					&& source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 2)
			{
				target.setIqmCompanyCountry(source.getRequesterId().getIqmCompanyAddress().getCountry().getName());
				target.setRegion(source.getRequesterId().getIqmRegion().getAttributeValue());
			}

			target.setDamCustomerId(source.getRequesterId().getDamCustomerId());
			if (source.getApproverDetails() != null && source.getApproverDetails().getAppAccessLevel() != null)
			{
				target.setDamRole(source.getApproverDetails().getAppAccessLevel().getAppAccessLevelName());
			}
			if (source.getRequesterId().getDamCompanyAddress() != null
					&& (source.getRequesterId().getDamCompanyAddress().getLine1() != null
							|| source.getRequesterId().getDamCompanyAddress().getLine2() != null
							|| source.getRequesterId().getDamCompanyAddress().getDistrict() != null
							|| source.getRequesterId().getDamCompanyAddress().getTown() != null
							|| source.getRequesterId().getDamCompanyAddress().getPostalcode() != null
							|| source.getRequesterId().getDamCompanyAddress().getCompany() != null))
			{
				target.setDamCompanyAddressLine1(source.getRequesterId().getDamCompanyAddress().getLine1());
				target.setDamCompanyAddressLine2(source.getRequesterId().getDamCompanyAddress().getLine2());
				target.setDamDistrict(source.getRequesterId().getDamCompanyAddress().getDistrict());
				target.setDamTown(source.getRequesterId().getDamCompanyAddress().getTown());
				target.setDamPostalCode(source.getRequesterId().getDamCompanyAddress().getPostalcode());
				target.setDamCompanyName(source.getRequesterId().getDamCompanyAddress().getCompany());
			}
			if (source.getRequesterId().getDamCompanyAddress() != null
					&& source.getRequesterId().getDamCompanyAddress().getCountry() != null
					&& source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 3)
			{
				target.setDamCompanyCountry(source.getRequesterId().getDamCompanyAddress().getCountry().getName());
				target.setRegion(source.getRequesterId().getDamCompanyAddress().getCountry().getName());
			}

			target.setRequesterState(source.getRequesterState());
			if (source.getRequestStatus() != null)
			{
				if (source.getProcessedBy() != null)
				{

					if (source.getRequestStatus().getCode() != "PENDING_APPROVAL")
					{
						target.setProcessedBy(source.getProcessedBy().getGivenName() + " " + source.getProcessedBy().getFamilyName());
					}
				}
				else
				{
					if (source.getRequestStatus().getCode() != "PENDING_APPROVAL")
					{
						if (source.getApproverDetails() != null)
						{
							if (source.getApproverDetails().getApproverID() == 1 || source.getApproverDetails().getApproverID() == 2)
							{
								target.setProcessedBy(source.getApproverDetails().getApproverGroupName());
							}
						}


					}

				}
			}

           //Adding condition to restrict productline display in CSR dashboard of VS
			if (source.getRequesterId().getProductLine() != null && source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 1)
			{
				target.setProductLine(source.getRequesterId().getProductLine().getAttributeKey());
			}
			if (null != source.getRequesterId() && CollectionUtils.isNotEmpty(source.getRequesterId().getSubProductLine())){
				LOG.info("DE160606 Inside subProductLine Check");
				List<String> subProductLines = source.getRequesterId().getSubProductLine().stream()
						.filter(subProductLine -> subProductLine.getAttributeValue() != null)
						.map(subProductLine -> subProductLine.getAttributeValue())
						.collect(Collectors.toList());
				LOG.info("DE160606 subProductLine for user: "+subProductLines);
				target.setSubProductLine(subProductLines);
			}
			if (source.getRequesterId().getIqmProductLine() != null)
			{
				target.setIqmProductLine(source.getRequesterId().getIqmProductLine().getAttributeValue());
			}
			if (source.getRequesterId().getDamProductLine() != null)
			{
				target.setDamProductLine(source.getRequesterId().getDamProductLine().getAttributeValue());
			}
			/* FPT Valv store Changes start */
			if (source.getRequesterId().getCompanyAddress() != null
					&& (source.getRequesterId().getCompanyAddress().getLine1() != null
							|| source.getRequesterId().getCompanyAddress().getLine2() != null
							|| source.getRequesterId().getCompanyAddress().getDistrict() != null
							|| source.getRequesterId().getCompanyAddress().getTown() != null
							|| source.getRequesterId().getCompanyAddress().getPostalcode() != null
							|| source.getRequesterId().getCompanyAddress().getCompany() != null))
			{
				target.setFptCompanyName(source.getRequesterId().getCompanyAddress().getCompany());
				target.setFptCompanyAddressLine1(source.getRequesterId().getCompanyAddress().getLine1());
				target.setFptCompanyAddressLine2(source.getRequesterId().getCompanyAddress().getLine2());
				if(Objects.nonNull(source.getRequesterId().getCompanyAddress().getCountry())) {
					target.setFptCountry(source.getRequesterId().getCompanyAddress().getCountry().getName());
					target.setRegion(source.getRequesterId().getCompanyAddress().getCountry().getName());
				}
				target.setFptStateProvince(source.getRequesterId().getCompanyAddress().getDistrict());
				target.setFptPostalCode(source.getRequesterId().getCompanyAddress().getPostalcode());
				target.setFptTown(source.getRequesterId().getCompanyAddress().getTown());
			}
			target.setFptCustomerAccNumber(source.getRequesterId().getRequestCustomerId());

			final List<String> availableRoles = new ArrayList<>();
			final List<String> availableproductLines = new ArrayList<>();
			final List<String> legalEntiy = new ArrayList<>();
			final List<String> selectedProductLines = new ArrayList<>();
			final List<String> legalEnt = new ArrayList<>();


			final List<BHGERegisterKeyValueDataModel> roles = registerDao.fetchUserRolesFPT("VSRoles");
			if (CollectionUtils.isNotEmpty(roles))
			{
				for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : roles)
				{
					availableRoles.add(bhgeRegisterKeyValueDataModel.getAttributeKey());
				}
				target.setFptRole(availableRoles);
			}
			final List<BHGERegisterKeyValueDataModel> productLines = registerDao.fetchProduct("VSPRODLINESUB", "");
			if (CollectionUtils.isNotEmpty(productLines))
			{
				for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : productLines)
				{
					availableproductLines.add(bhgeRegisterKeyValueDataModel.getAttributeKey());
				}
				target.setFptProductLine(availableproductLines);
			}


			final Collection<BHGERegisterKeyValueDataModel> legalEntites = source.getRequesterId().getFptLegalEntities();
			if (CollectionUtils.isNotEmpty(legalEntites))
			{
				for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : legalEntites)
				{
					legalEntiy.add(bhgeRegisterKeyValueDataModel.getAttributeKey());
				}
				target.setFptLegalEntities(legalEntiy);
			}

			if (source.getRequesterId().getFptLegalEntity() != null)
			{
				target.setFptLegalEntity((List<String>) source.getRequesterId().getFptLegalEntity());

				final BHGERegisterKeyValueDataModel fptSelectedRole = source.getRequesterId().getFptRoles();
				if (fptSelectedRole != null)
				{
					target.setFptSelectedRole(fptSelectedRole.getAttributeKey());
				}

			}
			target.setFptSaleAreaText((List<String>) source.getRequesterId().getFptSaleAreaText());



			final Collection<BHGERegisterKeyValueDataModel> fptProduct = source.getRequesterId().getFptProductLine();
			if (CollectionUtils.isNotEmpty(fptProduct))
			{
				for (final BHGERegisterKeyValueDataModel bhgeRegisterKeyValueDataModel : fptProduct)
				{
					selectedProductLines.add(bhgeRegisterKeyValueDataModel.getAttributeKey());
				}
				final Map<String, Boolean> productLineMap = new HashMap<>();
				for (final String string : availableproductLines)
				{
					if (selectedProductLines.contains(string))
					{
						productLineMap.put(string, true);
					}
					else
					{
						productLineMap.put(string, false);
					}
				}
				final BHGERegisterKeyValueDataModel fptSelectedRole = source.getRequesterId().getFptRoles();
				if (fptSelectedRole != null)
				{
					target.setFptSelectedRole(fptSelectedRole.getAttributeKey());
				}

				target.setFptSelectedProductLines(productLineMap);
			}
			/* FPT Valv store Changes end */

			/* SBH Registration Changes */
			if(source.getRequesterId().getOfsAccountType()!=null){
				target.setOfsAccountType(source.getRequesterId().getOfsAccountType().getAttributeValue());
			}
			/* SBH Registration Changes ends*/
		}
		processAccountLinking(source, target);
	}


	/**
	 * @param source
	 * @param target
	 */
	private void processAccountLinking(final BHGEUserAccessRequestModel source, final ManualApprovalData target)
	{
		if(source.getApproverDetails().getAppAccessLevel().getApplicationInfo().getApplicationId() == 4)
		{
	   		final Collection<String> accountList = source.getFptApproverCustomerDetails();
	   		AccountLinkingData accountLinkData = null;
	   		if (accountList != null && !accountList.isEmpty())
	   		{
	   			target.setAccountLinking(new ArrayList<AccountLinkingData>());
	   			final String[] accountArray = accountList.toArray(new String[accountList.size()]);
	   			for (int iCtr = 0; iCtr < accountArray.length; iCtr++)
	   			{
	   				if (accountArray[iCtr] != null && accountArray[iCtr].indexOf("-") > 0)
	   				{
	   					final String[] accountLinkEntry = accountArray[iCtr].split("-");
	   					accountLinkData = new AccountLinkingData();
	   					accountLinkData.setCustomerNumber(accountLinkEntry[0]);
	   					accountLinkData.setSalesareaList(new ArrayList<String>());
	   					for (int jCtr = 1; jCtr < accountLinkEntry.length; jCtr++)
	   					{
	   						accountLinkData.getSalesareaList().add(accountLinkEntry[jCtr]);
	   					}
	   					target.getAccountLinking().add(accountLinkData);
	   				}
	   			}
	   		}
		}
		else
		{
			if(source.getRequesterId() != null)
			{
	   		final Collection<String> accountList = source.getRequesterId().getApproverCustomerDetails();
	   		AccountLinkingData accountLinkData = null;
	   		if (accountList != null && !accountList.isEmpty())
	   		{
	   			target.setAccountLinking(new ArrayList<AccountLinkingData>());
	   			final String[] accountArray = accountList.toArray(new String[accountList.size()]);
	   			for (int iCtr = 0; iCtr < accountArray.length; iCtr++)
	   			{
	   				if (accountArray[iCtr] != null && accountArray[iCtr].indexOf("-") > 0)
	   				{
	   					final String[] accountLinkEntry = accountArray[iCtr].split("-");
	   					accountLinkData = new AccountLinkingData();
	   					accountLinkData.setCustomerNumber(accountLinkEntry[0]);
	   					accountLinkData.setSalesareaList(new ArrayList<String>());
	   					for (int jCtr = 1; jCtr < accountLinkEntry.length; jCtr++)
	   					{
	   						accountLinkData.getSalesareaList().add(accountLinkEntry[jCtr]);
	   					}
	   					target.getAccountLinking().add(accountLinkData);
	   				}
	   			}
	   		}
			}
		}
	}
}
