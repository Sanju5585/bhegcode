/**
 *
 */
package com.bhge.register.webservices.services.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.model.ModelService;

import java.lang.reflect.Field;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.mail2.core.EmailException;
import org.apache.log4j.Logger;

import com.bhge.core.registeruser.util.Constants;
import com.bhge.register.webservices.constants.GeneratedBhgeregisterwebservicesConstants.Enumerations.BHGEAccessRequestStatus;
import com.bhge.register.webservices.dao.UserManagerDao;
import com.bhge.register.webservices.email.EmailService;
import com.bhge.register.webservices.enums.BHGEAccessRequestSource;
import com.bhge.register.webservices.model.BHGEAppAccessLevelModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.bhge.register.webservices.model.BHGEUserAccessRequestModel;
import com.bhge.register.webservices.services.UserManagerRegisterService;
import com.bhgeregister.dto.BHGEUserManagerRequest;
import com.bhgeregister.dto.BHGEUserManagerResponse;


/**
 * @author 586667
 *
 */
public class UserManagerRegisterServiceImpl implements UserManagerRegisterService
{


	private static final Logger LOG = Logger.getLogger(UserManagerRegisterServiceImpl.class);

	private final String ORDER_TRACKING_GROUP = "UG_ORDER_TRACKING";
	private final String SERVICE_GROUP = "UG_SERVICE_ROLE";
	private final String PLACE_ORDER_GROUP = "UG_ADMIN_ORDER_STORE";
	private final String VIEW_PRODUCT_AND_PRICE_GROUP = "UG_VIEW_STORE";
	private final String PRODUCT_VIEW_GROUP = "";


	private final ThreadLocal<Long> sequence = ThreadLocal.<Long> withInitial(() -> {
		return Long.MAX_VALUE;
	});


	private EmailService emailservice;


	/**
	 * @return the emailservice
	 */

	public EmailService getEmailservice()
	{
		return emailservice;
	}



	/**
	 * @param emailservice
	 *           the emailservice to set
	 */
	public void setEmailservice(final EmailService emailservice)
	{
		this.emailservice = emailservice;
	}


	private UserManagerDao userManagerDao;
	private ModelService modelService;
	private B2BUnitService<B2BUnitModel, UserModel> b2bUnitService;



	/**
	 * @return the b2bUnitService
	 */
	public B2BUnitService<B2BUnitModel, UserModel> getB2bUnitService()
	{
		return b2bUnitService;
	}



	/**
	 * @param b2bUnitService
	 *           the b2bUnitService to set
	 */
	public void setB2bUnitService(final B2BUnitService<B2BUnitModel, UserModel> b2bUnitService)
	{
		this.b2bUnitService = b2bUnitService;
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
	 * @return the userManagerDao
	 */
	public UserManagerDao getUserManagerDao()
	{
		return userManagerDao;
	}



	/**
	 * @param userManagerDao
	 *           the userManagerDao to set
	 */
	public void setUserManagerDao(final UserManagerDao userManagerDao)
	{
		this.userManagerDao = userManagerDao;
	}



	@Override
	public BHGEUserManagerResponse fetchUsers(final BHGEUserManagerRequest submitDetails)
	{
		final BHGEUserManagerResponse response = new BHGEUserManagerResponse();
		final List<BHGEUserManagerRequest> listCustomerResponse = new ArrayList<>();
		final Map<String, List<BHGEUserManagerRequest>> userAccessMap = new HashMap<>();
		final List<BHGEUserAccessRequestModel> userList = new ArrayList<>();
		Map<String, Object> responseObject = new HashMap<>();
		Set<GEEdgeCustomerModel> responseCustomers = new HashSet<>();
		Set<String> linkedAccounts = new HashSet<>();
		try
		{
			/*
			 * final List<BHGEUserAccessRequestModel> listCustomers =
			 * getUserManagerDao().fetchManagerModel(submitDetails.getUserId());
			 *
			 * LOG.info(listCustomers.size()); listCustomers.forEach(each -> { LOG.info(each.getPk()); });
			 */

			responseObject = fetchCustomers(submitDetails.getGeneratedUID());
			responseCustomers = (Set<GEEdgeCustomerModel>) responseObject.get("responseCustomers");
			linkedAccounts = (Set<String>) responseObject.get("linkedAccounts");

			responseCustomers.forEach(each -> {
				userList.addAll(getUserManagerDao().fetchUserRequestList(each.getUid()));
			});

			final List<BHGEAppAccessLevelModel> accessData = getUserManagerDao().fetchAccessLevels();

			if (null != userList)
			{
				LOG.info("linked customers List size: "
						+ (null != userList ? userList.size() : " No customers are linked to current login manager"));


				userList.forEach(eachItem -> {
					final BHGEUserManagerRequest customerObject = new BHGEUserManagerRequest();
					/* Anish User Comments */
					System.out.println("Requestor Comment" + eachItem.getRequestorComment());
					customerObject.setRequestorComment(eachItem.getRequestorComment());
					/* Anish User Comments */
					final int allowedLimit = allowedLimit(eachItem);

					customerObject.setDisableList(fetchdisabledList(allowedLimit, accessData));


					if (eachItem.getRequestStatus().getCode().equals(BHGEAccessRequestStatus.REJECTED))
					{
						return;
					}

					String accessName = "";
					Map<String, Object> objectMap = new HashMap<>();
					String properAccessName = "";
					customerObject.setEmail(eachItem.getRequesterId().getEmail());
					customerObject.setFirstName(eachItem.getRequesterId().getGivenName());
					customerObject.setLastName(eachItem.getRequesterId().getFamilyName());
					customerObject.setUserId(eachItem.getRequesterId().getSso());
					final GEEdgeCustomerModel edgeCustomer = getUserManagerDao().fetchEdgeCustomer(eachItem.getRequesterId().getSso());
					if (edgeCustomer != null)
					{
						LOG.info("edgeCustomer: " + edgeCustomer.isLoginDisabled());
						customerObject.setActiveFlag(Boolean.toString(edgeCustomer.isLoginDisabled()));
					}
					else
					{
						customerObject.setActiveFlag(Boolean.toString(true));
					}

					if (!(eachItem.getRequestStatus().getCode().equals(BHGEAccessRequestStatus.COMPLETED)))
					{
						if ("OrderTracking".equalsIgnoreCase(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()))
						{
							accessName = "Pending Registration";
						}

						else
						{
							accessName = "Access Requested";
						}

					}


					objectMap = getProperAccessName(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelName());

					properAccessName = (String) objectMap.get("properName");

					customerObject.setAccessLevelName("".equals(accessName) ? properAccessName : accessName);
					if (!(eachItem.getRequestStatus().getCode().equals(BHGEAccessRequestStatus.COMPLETED)))
					/*
					 * { customerObject.setApprovedAccessLevelList(
					 * Arrays.asList(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelName())); } else
					 */
					{
						customerObject.setPendingAccessLevelList(
								Arrays.asList(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()));
					}

					/* GET Having AccessList */
					final GEEdgeCustomerModel geEdgeCustomerModel = getUserManagerDao()
							.fetchEdgeCustomer(eachItem.getRequesterId().getSso());
					final List<String> hasAccess = new ArrayList<String>();
					if (null != geEdgeCustomerModel && !geEdgeCustomerModel.getGroups().isEmpty())
					{
						try
						{
							System.out.println("Get Groups Started : ");
							for (final PrincipalGroupModel eachGroup : geEdgeCustomerModel.getGroups())
							{
								System.out.println(eachGroup.getUid());
								final String eachAccess = eachGroup.getUid();
								switch (eachAccess)
								{
									case "UG_VIEW_STORE":
										hasAccess.add("ViewProductPrices");
										hasAccess.add("OrderTracking");
										break;
									case "UG_ORDER_TRACKING":
										hasAccess.add("OrderTracking");
										break;
									case "UG_ADMIN_ORDER_STORE":
										hasAccess.add("OrderTracking");
										hasAccess.add("ViewProductPrices");
										hasAccess.add("PlaceOrder");
										break;
								}
							}
						}
						catch (final Exception ex)
						{
							ex.printStackTrace();
						}

					}
					final Set<String> removedDuplicateAccesses = new LinkedHashSet<String>();
					removedDuplicateAccesses.addAll(hasAccess);
					hasAccess.clear();
					hasAccess.addAll(removedDuplicateAccesses);
					if (hasAccess.contains("PlaceOrder"))
					{
						LOG.info("Access Level - Place Order");
						customerObject.setAccessLevelName("".equals(accessName) ? "Place Order" : accessName);
					}
					else if (hasAccess.contains("ViewProductPrices"))
					{
						LOG.info("Access Level - View Product And Price");
						customerObject.setAccessLevelName("".equals(accessName) ? "View Product And Price" : accessName);
					}
					else if (hasAccess.contains("OrderTracking"))
					{
						LOG.info("Access Level - Order Tracking");
						customerObject.setAccessLevelName("".equals(accessName) ? "Order Tracking" : accessName);
					}
					customerObject.setApprovedAccessLevelList(hasAccess);
					/* GET Having AccessList */

					customerObject.setAccessLevelId(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelId());

					listCustomerResponse.add(customerObject);

				});
				LOG.info("listCustomers Size: " + listCustomerResponse.size());

				response.setFilteredList(filteringDuplicates(listCustomerResponse));

				response.setUserMessageList(seetingAccessDatainResponse(accessData));

				response.setLinkedAccounts(StringUtils.join(linkedAccounts, ','));

			}

		}
		catch (final Exception ex)
		{
			LOG.error("Error Occured while fetching users data.");
			ex.printStackTrace();
		}
		return response;

	}

	/* Anish */
	@Override
	public Map<String, Object> fetchAllUsers(final BHGEUserManagerRequest submitDetails)
	{
		final BHGEUserManagerResponse response = new BHGEUserManagerResponse();
		final List<BHGEUserManagerRequest> listCustomerResponse = new ArrayList<>();
		final Map<String, List<BHGEUserManagerRequest>> userAccessMap = new HashMap<>();
		final List<BHGEUserAccessRequestModel> userList = new ArrayList<>();
		Map<String, Object> responseObject = new HashMap<>();
		final Set<GEEdgeCustomerModel> responseCustomers = new HashSet<>();
		final Set<String> linkedAccounts = new HashSet<>();
		try
		{
			responseObject = fetchCustomers(submitDetails.getGeneratedUID());
			/*
			 * responseCustomers = (Set<GEEdgeCustomerModel>) responseObject.get("responseCustomers"); linkedAccounts =
			 * (Set<String>) responseObject.get("linkedAccounts");
			 */
		}
		catch (final Exception e)
		{
			e.printStackTrace();
		}
		return responseObject;
	}

	@Override
	public BHGEUserManagerResponse fetchUpdateProfileUsers(final BHGEUserManagerRequest submitDetails)
	{
		final BHGEUserManagerResponse response = new BHGEUserManagerResponse();
		final List<BHGEUserManagerRequest> listCustomerResponse = new ArrayList<>();
		final Map<String, List<BHGEUserManagerRequest>> userAccessMap = new HashMap<>();
		final List<BHGEUserAccessRequestModel> userList = new ArrayList<>();
		final Map<String, Object> responseObject = new HashMap<>();
		final Set<GEEdgeCustomerModel> responseCustomers = new HashSet<>();
		try
		{
			System.out.println("each.getUid() : " + submitDetails.getGeneratedUID());

			final GEEdgeCustomerModel geEdgeCustomerModel = getUserManagerDao().fetchEdgeCustomer(submitDetails.getGeneratedUID());
			final List<String> hasAccess = new ArrayList<String>();
			/* GET Having AccessList */
			if (null != geEdgeCustomerModel && !geEdgeCustomerModel.getGroups().isEmpty())
			{
				try
				{
					System.out.println("Get Groups Started : ");
					for (final PrincipalGroupModel eachGroup : geEdgeCustomerModel.getGroups())
					{
						System.out.println(eachGroup.getUid());
						final String eachAccess = eachGroup.getUid();
						switch (eachAccess)
						{
							case "UG_VIEW_STORE":
								hasAccess.add("UG_VIEW_STORE");
								break;
							case "UG_ORDER_TRACKING":
								hasAccess.add("UG_ORDER_TRACKING");
								break;
							case "UG_ADMIN_ORDER_STORE":
								hasAccess.add("UG_ADMIN_ORDER_STORE");
								break;
						}
					}
				}
				catch (final Exception ex)
				{
					ex.printStackTrace();
				}

			}
			/* GET Having AccessList */
			userList.addAll(getUserManagerDao().fetchUserRequestList(submitDetails.getGeneratedUID()));

			final List<BHGEAppAccessLevelModel> accessData = getUserManagerDao().fetchAccessLevels();

			/* GET Having DisableAccessList */
			final int allowedLimitFromSso = allowedLimitFromSso(submitDetails.getGeneratedUID());
			System.out.println("allowedLimit : " + allowedLimitFromSso);
			response.setDisableAccessList(fetchdisabledList(allowedLimitFromSso, accessData));
			/* GET Having DisableAccessList */

			if (null != userList)
			{
				LOG.info("linked customers List size 276: "
						+ (null != userList ? userList.size() : " No customers are linked to current login manager"));
				userList.forEach(eachItem -> {
					final BHGEUserManagerRequest customerObject = new BHGEUserManagerRequest();
					if (eachItem.getRequestStatus().getCode().equals(BHGEAccessRequestStatus.REJECTED))
					{
						return;
					}
					String accessName = "";
					Map<String, Object> objectMap = new HashMap<>();
					String properAccessName = "";
					customerObject.setEmail(eachItem.getRequesterId().getEmail());
					customerObject.setFirstName(eachItem.getRequesterId().getGivenName());
					customerObject.setLastName(eachItem.getRequesterId().getFamilyName());
					customerObject.setUserId(eachItem.getRequesterId().getSso());
					final GEEdgeCustomerModel edgeCustomer = getUserManagerDao().fetchEdgeCustomer(eachItem.getRequesterId().getSso());
					if (edgeCustomer != null)
					{
						LOG.info("edgeCustomer: " + edgeCustomer.isLoginDisabled());
						customerObject.setActiveFlag(Boolean.toString(edgeCustomer.isLoginDisabled()));
					}
					else
					{
						customerObject.setActiveFlag(Boolean.toString(true));
					}

					if (!(eachItem.getRequestStatus().getCode().equals(BHGEAccessRequestStatus.COMPLETED)))
					{
						if ("OrderTracking".equalsIgnoreCase(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()))
						{
							accessName = "Pending Registration";
						}

						else
						{
							accessName = "Access Requested";
						}

					}
					objectMap = getProperAccessName(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelName());

					properAccessName = (String) objectMap.get("properName");

					customerObject.setAccessLevelName("".equals(accessName) ? properAccessName : accessName);


					if (!(eachItem.getRequestStatus().getCode().equals(BHGEAccessRequestStatus.COMPLETED)))
					{
						customerObject.setPendingAccessLevelList(
								Arrays.asList(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelName()));
					}

					customerObject.setAccessLevelId(eachItem.getApproverDetails().getAppAccessLevel().getAppAccessLevelId());

					listCustomerResponse.add(customerObject);

				});
				LOG.info("listCustomers 362 Size: " + listCustomerResponse.size());

				response.setFilteredList(filteringDuplicates(listCustomerResponse));

				response.setApprovedAccessList(hasAccess);

			}

		}
		catch (final Exception ex)
		{
			LOG.error("Error Occured while fetching users data.");
			ex.printStackTrace();
		}
		return response;

	}
	/* Anish */



	/**
	 * @param generatedUID
	 */
	private Map<String, Object> fetchCustomers(final String generatedUID)
	{
		final Map<String, Object> responseObject = new HashMap<>();
		final Set<GEEdgeCustomerModel> responseCustomers = new HashSet<>();
		final Set<String> linkedAccounts = new HashSet<>();

		try
		{
			final GEEdgeCustomerModel geEdgeCustomer = getUserManagerDao().fetchEdgeCustomer(generatedUID);
			if (null != geEdgeCustomer && !geEdgeCustomer.getGroups().isEmpty())
			{

				for (final PrincipalGroupModel eachGroup : geEdgeCustomer.getGroups())
				{
					if (eachGroup instanceof B2BUnitModel && eachGroup.getUid().chars().filter(ch -> ch == '_').count() == 3)
					{
						linkedAccounts
								.add(eachGroup.getName() + " - " + eachGroup.getUid().substring(0, eachGroup.getUid().indexOf("_")));

						final B2BUnitModel soldtoValue = b2bUnitService
								.getUnitForUid(eachGroup.getUid().substring(0, eachGroup.getUid().indexOf("_")));

						if (null != soldtoValue)
						{
							final List<B2BUnitModel> intermediateList = soldtoValue.getMembers().stream()
									.filter(each -> (each instanceof B2BUnitModel)).map(m -> (B2BUnitModel) m)
									.collect(Collectors.toList());

							intermediateList.stream().forEach(b2b -> {

								b2b.getMembers().stream().forEach(every -> {

									if (every instanceof GEEdgeCustomerModel)
									{
										responseCustomers.add((GEEdgeCustomerModel) every);
									}

								});
							});
						}

					}
				}
			}
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
		System.out.println("responseCustomers Size : " + responseCustomers.size());
		responseObject.put("responseCustomers", responseCustomers);
		responseObject.put("linkedAccounts", linkedAccounts);

		return responseObject;
	}



	/**
	 * @param allowedLimit
	 * @param accessData
	 */
	public List<String> fetchdisabledList(final int allowedLimit, final List<BHGEAppAccessLevelModel> accessData)
	{
		final List<String> disabledList = new ArrayList<>();
		switch (allowedLimit)
		{
			case 1:
				for (int i = 1; i < accessData.size(); i++)
				{
					disabledList.add(accessData.get(i).getAppAccessLevelName());
				}
				break;

			case 2:
				for (int i = 2; i < accessData.size(); i++)
				{
					disabledList.add(accessData.get(i).getAppAccessLevelName());
				}
				break;

			case 3:
				for (int i = 3; i < accessData.size(); i++)
				{
					disabledList.add(accessData.get(i).getAppAccessLevelName());
				}
				break;

			case 4:
				for (int i = 4; i < accessData.size(); i++)
				{
					disabledList.add(accessData.get(i).getAppAccessLevelName());
				}
				break;

		}
		return disabledList;

	}



	/**
	 * @param eachItem
	 * @return
	 */
	public int allowedLimit(final BHGEUserAccessRequestModel eachItem)
	{
		int finalFlag = 0;
		try
		{
			final GEEdgeCustomerModel edgeCustomer = getUserManagerDao().fetchEdgeCustomer(eachItem.getRequesterId().getSso());
			String allowedLevel = "";

			if (null != edgeCustomer && !edgeCustomer.getGroups().isEmpty())
			{
				try
				{
					for (final PrincipalGroupModel eachGroup : edgeCustomer.getGroups())
					{
						if (eachGroup instanceof B2BUnitModel && eachGroup.getUid().chars().filter(ch -> ch == '_').count() == 3)
						{
							final B2BUnitModel soldtoValue = b2bUnitService
									.getUnitForUid(eachGroup.getUid().substring(0, eachGroup.getUid().indexOf("_")));

							final String param = (null != soldtoValue.getEcommerceFlag()) ? soldtoValue.getEcommerceFlag() : "E4";

							final int currentFlag = fetchingAllowedLimit(param);
							if (finalFlag == 0 || currentFlag < finalFlag)
							{
								finalFlag = currentFlag;
								allowedLevel = (null == soldtoValue.getEcommerceFlag()) ? "E4" : soldtoValue.getEcommerceFlag();
							}
						}
					}
				}
				catch (final Exception ex)
				{
					ex.printStackTrace();
				}

			}
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
		return finalFlag;
	}

	/* Anish allowedLimit */
	public int allowedLimitFromSso(final String Sso)
	{
		int finalFlag = 0;
		try
		{
			final GEEdgeCustomerModel edgeCustomer = getUserManagerDao().fetchEdgeCustomer(Sso);
			String allowedLevel = "";

			if (null != edgeCustomer && !edgeCustomer.getGroups().isEmpty())
			{
				try
				{
					for (final PrincipalGroupModel eachGroup : edgeCustomer.getGroups())
					{
						if (eachGroup instanceof B2BUnitModel && eachGroup.getUid().chars().filter(ch -> ch == '_').count() == 3)
						{
							final B2BUnitModel soldtoValue = b2bUnitService
									.getUnitForUid(eachGroup.getUid().substring(0, eachGroup.getUid().indexOf("_")));

							final String param = (null != soldtoValue.getEcommerceFlag()) ? soldtoValue.getEcommerceFlag() : "E4";

							final int currentFlag = fetchingAllowedLimit(param);
							if (finalFlag == 0 || currentFlag < finalFlag)
							{
								finalFlag = currentFlag;
								allowedLevel = (null == soldtoValue.getEcommerceFlag()) ? "E4" : soldtoValue.getEcommerceFlag();
							}
						}
					}
				}
				catch (final Exception ex)
				{
					ex.printStackTrace();
				}

			}
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
		return finalFlag;
	}
	/* Anish AllowedLimit */




	/**
	 * @param accessData
	 */
	private List<String> seetingAccessDatainResponse(final List<BHGEAppAccessLevelModel> accessData)
	{
		final List<String> accessList = new ArrayList<>();
		try
		{
			for (final BHGEAppAccessLevelModel bhgeAppAccessLevelModel : accessData)
			{
				accessList.add(bhgeAppAccessLevelModel.getAppAccessLevelName());
			}
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
		return accessList;

	}



	/**
	 * @param allowedLimit
	 * @param string
	 *
	 */
	private Map<String, Object> getProperAccessName(final String accessName)
	{
		final Map<String, Object> methodResponse = new HashMap<>();
		try
		{
			String accessNameResponse = "";
			switch (accessName)
			{
				case Constants.VIEW_PRODUCTS:
					accessNameResponse = "View Products";
					break;

				case Constants.ORDER_TRACKING:
					accessNameResponse = "Order Tracking";
					break;

				case Constants.SERVICES:
					accessNameResponse = "Services";
					break;

				case Constants.VIEW_PRODUCT_PRICE:
					accessNameResponse = "View Product And Price";
					break;

				case Constants.PLACE_ORDER:
					accessNameResponse = "Place Order";
					break;

				case Constants.DEACTIVATED:
					accessNameResponse = "Deactivated";
					break;
			}
			methodResponse.put("properName", accessNameResponse);
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
		return methodResponse;

	}



	/**
	 * @param listCustomerResponse
	 */
	private List<BHGEUserManagerRequest> filteringDuplicates(final List<BHGEUserManagerRequest> listCustomerResponse)
	{
		final List<BHGEUserManagerRequest> filteredData = new ArrayList<>();
		try
		{
			for (final BHGEUserManagerRequest each : listCustomerResponse)
			{
				boolean isFound = false;
				for (final BHGEUserManagerRequest eachFiltered : filteredData)
				{
					if (eachFiltered.getUserId().equalsIgnoreCase(each.getUserId())
							&& eachFiltered.getAccessLevelId() < each.getAccessLevelId())
					{
						each.setApprovedAccessLevelList(new ArrayList<String>(settingApprovedAccessLevels(each, eachFiltered)));
						each.setPendingAccessLevelList(new ArrayList<String>(settingPendingAccessLevels(each, eachFiltered)));

						if (null != eachFiltered.getAccessLevelName()
								&& eachFiltered.getAccessLevelName().equalsIgnoreCase("Pending Registration"))
						{
							each.setAccessLevelName("Pending Registration");
						}
						Collections.replaceAll(filteredData, eachFiltered, each);


						isFound = true;
						break;
					}
					else if (eachFiltered.getUserId().equalsIgnoreCase(each.getUserId())
							&& eachFiltered.getAccessLevelId() >= each.getAccessLevelId())
					{

						eachFiltered.setApprovedAccessLevelList(new ArrayList<String>(settingApprovedAccessLevels(each, eachFiltered)));
						eachFiltered.setPendingAccessLevelList(new ArrayList<String>(settingPendingAccessLevels(each, eachFiltered)));

						if (null != each.getAccessLevelName() && each.getAccessLevelName().equalsIgnoreCase("Pending Registration"))
						{
							eachFiltered.setAccessLevelName("Pending Registration");
						}
						Collections.replaceAll(filteredData, eachFiltered, eachFiltered);

						isFound = true;
						break;
					}

				}
				if (!isFound)
				{
					filteredData.add(each);
				}
			}
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
		return filteredData;
	}



	/**
	 * @param each
	 * @param eachFiltered
	 * @return
	 */
	private HashSet<String> settingPendingAccessLevels(final BHGEUserManagerRequest each,
			final BHGEUserManagerRequest eachFiltered)
	{
		final HashSet<String> uniqueAccessLevels = new HashSet<>();

		if (null != each.getPendingAccessLevelList())
		{
			uniqueAccessLevels.addAll(each.getPendingAccessLevelList());
		}

		if (null != eachFiltered.getPendingAccessLevelList())
		{
			uniqueAccessLevels.addAll(eachFiltered.getPendingAccessLevelList());
		}

		return uniqueAccessLevels;

	}



	/**
	 * @param eachFiltered
	 * @param each
	 *
	 */
	private HashSet<String> settingApprovedAccessLevels(final BHGEUserManagerRequest each,
			final BHGEUserManagerRequest eachFiltered)
	{
		final HashSet<String> uniqueAccessLevels = new HashSet<>();

		if (null != each.getApprovedAccessLevelList())
		{

			uniqueAccessLevels.addAll(each.getApprovedAccessLevelList());
		}

		if (null != eachFiltered.getApprovedAccessLevelList())
		{

			uniqueAccessLevels.addAll(eachFiltered.getApprovedAccessLevelList());
		}

		return uniqueAccessLevels;

	}



	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.services.UserManagerRegisterService#managerProcessRequest(com.bhgeregister.dto.
	 * BHGEUserManagerRequest)
	 */
	@Override
	public boolean managerProcessRequest(final BHGEUserManagerRequest serviceRequest)
	{
		try
		{
			for (final Field field : serviceRequest.getAccessObject().getClass().getDeclaredFields())
			{
				LOG.info("field.getName(): " + field.getName());

				if (field.getName().equalsIgnoreCase("OrderTracking"))
				{
					if (serviceRequest.getAccessObject().getOrderTracking().equalsIgnoreCase("true"))
					{
						processProvideRequest("1", ORDER_TRACKING_GROUP, serviceRequest, field);
					}
					else if (serviceRequest.getAccessObject().getOrderTracking().equalsIgnoreCase("false"))
					{
						processRemoveRequest("1", ORDER_TRACKING_GROUP, serviceRequest, field);
					}


				}
				else if (field.getName().equalsIgnoreCase("Services"))
				{
					if (serviceRequest.getAccessObject().getServices().equalsIgnoreCase("true"))
					{
						processProvideRequest("2", SERVICE_GROUP, serviceRequest, field);
					}
					else if (serviceRequest.getAccessObject().getServices().equalsIgnoreCase("false"))
					{
						processRemoveRequest("2", SERVICE_GROUP, serviceRequest, field);
					}

				}
				else if (field.getName().equalsIgnoreCase("ViewProductPrices"))
				{

					if (serviceRequest.getAccessObject().getViewProductPrices().equalsIgnoreCase("true"))
					{
						processProvideRequest("3", VIEW_PRODUCT_AND_PRICE_GROUP, serviceRequest, field);
					}
					else if (serviceRequest.getAccessObject().getViewProductPrices().equalsIgnoreCase("false"))
					{
						processRemoveRequest("3", VIEW_PRODUCT_AND_PRICE_GROUP, serviceRequest, field);
					}

				}
				else if (field.getName().equalsIgnoreCase("PlaceOrder"))
				{

					if (serviceRequest.getAccessObject().getPlaceOrder().equalsIgnoreCase("true"))
					{
						processProvideRequest("4", PLACE_ORDER_GROUP, serviceRequest, field);
					}
					else if (serviceRequest.getAccessObject().getPlaceOrder().equalsIgnoreCase("false"))
					{
						processRemoveRequest("4", PLACE_ORDER_GROUP, serviceRequest, field);
					}

				}
			}

			/* Email Implementation */
			final GEEdgeCustomerModel geEdgeCustomerModel = getUserManagerDao().fetchEdgeCustomer(serviceRequest.getGeneratedUID());
			final List<String> hasAccess = new ArrayList<String>();
			StringBuilder access = new StringBuilder();
			final String roleName = "";
			/* GET Having AccessList */
			if (null != geEdgeCustomerModel && !geEdgeCustomerModel.getGroups().isEmpty())
			{
				try
				{
					System.out.println("Get Groups Started : ");
					for (final PrincipalGroupModel eachGroup : geEdgeCustomerModel.getGroups())
					{
						System.out.println(eachGroup.getUid());
						final String eachAccess = eachGroup.getUid();
						switch (eachAccess)
						{
							case "UG_VIEW_STORE":
								hasAccess.add("UG_VIEW_STORE");
								access = access.append("Status, Returns, Price & Availability").append("<br>");
								break;
							case "UG_ORDER_TRACKING":
								hasAccess.add("UG_ORDER_TRACKING");
								access = access.append("Order Status & Returns").append("<br>");
								break;
							case "UG_ADMIN_ORDER_STORE":
								hasAccess.add("UG_ADMIN_ORDER_STORE");
								access = access.append("Full Access").append("<br>");
								break;
						}
					}
				}
				catch (final Exception ex)
				{
					ex.printStackTrace();
				}

			}

			final String finalHasAccess = access.toString();

			try
			{
				getEmailservice().accessUpdateMail(geEdgeCustomerModel.getEmail(), geEdgeCustomerModel.getName(), finalHasAccess, "",
						geEdgeCustomerModel.getEmail(), "");
			}
			catch (final CMSItemNotFoundException e)
			{
				LOG.error("CMSItemNotFoundException found while triggering resend verification email");
			}
			catch (final EmailException e)
			{
				LOG.error("EmailException found while triggering resend verification email");
			}


			/* GET Having AccessList */
			/* Email Implementation */

		}
		catch (final Exception ex)
		{
			LOG.info("Some Error occured while saving access request data ", ex);
		}
		return true;
	}



	/**
	 * @param string
	 * @param oRDER_TRACKING_GROUP2
	 * @param serviceRequest
	 * @param field
	 */
	private void processRemoveRequest(final String accessId, final String groupName, final BHGEUserManagerRequest serviceRequest,
			final Field field)
	{
		try
		{
			final BHGEUserAccessRequestModel accessModel = getUserManagerDao()
					.getFetchPreviousRequest(serviceRequest.getAccessObject().getStatusId(), accessId);

			if (null != accessModel)
			{
				updateAccessRequestData(accessModel, field.getName());
			}
			removingFromEdgeNetGroup(serviceRequest.getAccessObject().getStatusId(), groupName);
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}

	}



	/**
	 * @param statusId
	 * @param groupName
	 */
	private void removingFromEdgeNetGroup(final String sso, final String groupName)
	{
		LOG.info("Inside removingFromEdgeNetGroup: sso" + sso + " groupName" + groupName);
		try
		{
			final GEEdgeCustomerModel customer = getUserManagerDao().fetchEdgeCustomer(sso);
			if (customer != null)
			{
				final Set<PrincipalGroupModel> groups = new HashSet<PrincipalGroupModel>(customer.getGroups());

				LOG.info("Before saving count: " + groups.size());

				final UserGroupModel userGroupModel = getUserManagerDao().fetchGroupModel(groupName);
				boolean isRemove = false;
				for (final PrincipalGroupModel principalGroupModel : groups)
				{
					if (principalGroupModel.getPk().toString().equals(userGroupModel.getPk().toString()))
					{
						isRemove = true;
						break;
						//groups.remove(userGroupModel);
					}
				}
				if (isRemove)
				{
					groups.remove(userGroupModel);
				}
				LOG.info("After saving count: " + groups.size());

				customer.setGroups(groups);
				getModelService().save(customer);

			}

		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
	}



	/**
	 * @param accessModel
	 * @param accessName
	 *
	 */
	private void updateAccessRequestData(final BHGEUserAccessRequestModel accessModel, final String accessName)
	{
		try
		{
			LOG.info("Updating Access Request data in DB");

			if (null != accessModel
					&& accessModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName().equalsIgnoreCase(accessName))
			{
				accessModel.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.REJECTED);
				getModelService().save(accessModel);
			}

			LOG.info("Updating Access Request data in DB complete");
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}

	}



	/**
	 * @param field
	 * @param serviceRequest
	 * @param accessId
	 * @param groupName
	 */
	private void processProvideRequest(final String accessId, final String groupName, final BHGEUserManagerRequest serviceRequest,
			final Field field)
	{
		try
		{
			final BHGEUserAccessRequestModel accessModel = getUserManagerDao()
					.getFetchPreviousRequest(serviceRequest.getAccessObject().getStatusId(), accessId);

			if (null == accessModel
					|| !(accessModel.getRequestStatus().getCode().equalsIgnoreCase(BHGEAccessRequestStatus.COMPLETED)))
			{
				saveAccessRequestdata(serviceRequest, accessId, field.getName());
				addingToEdgeNetGroup(serviceRequest.getAccessObject().getStatusId(), groupName);
			}
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}

	}



	/**
	 * @param sapLevel
	 */
	private int fetchingAllowedLimit(final String sapLevel)
	{
		int allowedLevel = 0;
		switch (sapLevel)
		{
			case "E1":
				allowedLevel = 3;
				break;

			case "E2":
				allowedLevel = 2;
				break;

			case "E3":
				allowedLevel = 2;
				break;

			case "E4":
				allowedLevel = 1;
				break;

			default:
				allowedLevel = 1;
				break;

		}

		return allowedLevel;
	}



	/**
	 * @param statusId
	 * @param oRDER_TRACKING_GROUP2
	 */
	private void addingToEdgeNetGroup(final String sso, final String groupName)
	{
		try
		{
			final GEEdgeCustomerModel customer = getUserManagerDao().fetchEdgeCustomer(sso);
			if (customer != null)
			{
				final Set<PrincipalGroupModel> groups = new HashSet<PrincipalGroupModel>(customer.getGroups());
				final UserGroupModel userGroupModel = getUserManagerDao().fetchGroupModel(groupName);
				groups.add(userGroupModel);
				customer.setGroups(groups);
				getModelService().save(customer);
			}
			LOG.info("Inside addingToEdgeNetGroup: sso" + sso + " groupName" + groupName);
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
	}



	/**
	 * @param requestData
	 * @param accessId
	 * @param accessName
	 */
	private void saveAccessRequestdata(final BHGEUserManagerRequest requestData, final String accessId, final String accessName)
	{
		try
		{
			LOG.info("Saving Access Request data in DB");
			sequence.set(java.util.UUID.randomUUID().getMostSignificantBits() & Long.MAX_VALUE);

			final BHGEUserAccessRequestModel previousModel = getUserManagerDao()
					.getFetchPreviousRequest(requestData.getAccessObject().getStatusId(), accessId);

			LOG.info("previousModel = " + previousModel + " & requestData.getAccessObject().getStatusId() - "
					+ requestData.getAccessObject().getStatusId() + " & accessId - " + accessId);

			if (null != previousModel
					&& previousModel.getApproverDetails().getAppAccessLevel().getAppAccessLevelName().equalsIgnoreCase(accessName))
			{
				previousModel.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.COMPLETED);
				getModelService().save(previousModel);
			}

			else
			{

				LOG.info("Requestor = " + getUserManagerDao().getRequestorData(requestData.getAccessObject().getStatusId())
						+ " & Approval - " + fetchApprovalDetails(accessId));


				final BHGEUserAccessRequestModel accessRequestData = getModelService().create(BHGEUserAccessRequestModel.class);

				accessRequestData.setAccessRequestId(sequence.get());
				accessRequestData.setAccessRequestSource(BHGEAccessRequestSource.REGISTER_MICROSITE);
				accessRequestData.setRequesterId(getUserManagerDao().getRequestorData(requestData.getAccessObject().getStatusId()));
				accessRequestData.setRequestStatus(com.bhge.register.webservices.enums.BHGEAccessRequestStatus.COMPLETED);
				accessRequestData.setApproverDetails(fetchApprovalDetails(accessId));
				accessRequestData.setLinkedWithRegister(true);

				getModelService().save(accessRequestData);
			}

			LOG.info("Saving Access Request data in DB complete");
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}

	}



	/**
	 * @param accessId
	 */
	private BHGEApprovalDetailsModel fetchApprovalDetails(final String accessId)
	{
		BHGEApprovalDetailsModel response = null;
		try
		{
			if ("0".equals(accessId))
			{
				response = getUserManagerDao().fetchApprovalDetails("500");
			}
			else if ("1".equals(accessId))
			{
				response = getUserManagerDao().fetchApprovalDetails("501");
			}
			else if ("2".equals(accessId))
			{
				response = getUserManagerDao().fetchApprovalDetails("502");
			}
			else if ("3".equals(accessId))
			{
				response = getUserManagerDao().fetchApprovalDetails("503");
			}
			else if ("4".equals(accessId))
			{
				response = getUserManagerDao().fetchApprovalDetails("504");
			}
		}
		catch (final Exception ex)
		{
			ex.printStackTrace();
		}
		return response;

	}



	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.services.UserManagerRegisterService#revokeAccess(com.bhgeregister.dto.
	 * BHGEUserManagerRequest)
	 */
	@Override
	public boolean revokeAccess(final BHGEUserManagerRequest serviceRequest)
	{
		LOG.info("Inside revokeAccess: " + serviceRequest.getUserId());
		final GEEdgeCustomerModel customerModel = getUserManagerDao().fetchEdgeCustomer(serviceRequest.getUserId());
		if (customerModel != null)
		{
			LOG.info(customerModel.isLoginDisabled());
			customerModel.setLoginDisabled(true);
			customerModel.setDisabledBySso(serviceRequest.getGeneratedUID());
			getModelService().save(customerModel);
			return true;
		}
		return false;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.register.webservices.services.UserManagerRegisterService#provideAccess(com.bhgeregister.dto.
	 * BHGEUserManagerRequest)
	 */
	@Override
	public boolean provideAccess(final BHGEUserManagerRequest serviceRequest)
	{
		LOG.info("Inside provideAccess: " + serviceRequest.getUserId());
		final GEEdgeCustomerModel customerModel = getUserManagerDao().fetchEdgeCustomer(serviceRequest.getUserId());
		if (customerModel != null)
		{
			LOG.info(customerModel.isLoginDisabled());
			customerModel.setLoginDisabled(false);
			customerModel.setDisabledBySso(null);
			getModelService().save(customerModel);
			return true;
		}
		return false;
	}

}
