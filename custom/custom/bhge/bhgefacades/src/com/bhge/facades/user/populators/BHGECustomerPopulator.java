package com.bhge.facades.user.populators;

import com.bhge.core.model.BHStaticContactUsModel;
import com.bhge.register.webservices.model.BHGEApprovalDetailsModel;
import com.google.common.base.Stopwatch;
import com.hybris.ge.edge.core.model.type.BHGECustomerClassificationModel;
import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.b2bacceleratorfacades.user.populators.B2BCustomerPopulator;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUserGroupData;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commercefacades.enums.data.ContactUsSettingsData;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.user.converters.populator.AddressPopulator;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.core.GenericSearchConstants;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;

import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.BHGECurrencyFormatModel;
import com.bhge.core.model.ContactusSettingsModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECurrencyFormatData;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.store.services.BHGEBaseStoreService;

public class BHGECustomerPopulator extends B2BCustomerPopulator
{

	private static final Logger LOGGER = Logger.getLogger(BHGECustomerPopulator.class);

	@Resource
	private AddressPopulator addressPopulator;

	@Resource(name = "b2bCommerceUnitService")
	private B2BCommerceUnitService b2BCommerceUnitService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "addressConverter")
	private Converter<AddressModel, AddressData> addressConverter;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;

	@Resource
	private Converter<BHGECurrencyFormatModel, BHGECurrencyFormatData> bhgeCurrencyFormatConverter;
	
	@Resource
	private B2BUnitService b2bUnitService;
	
	@Autowired(required = true)
	private BHGEB2BUnitService bhgeB2BUnitService;

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.b2bacceleratorfacades.user.populators.B2BCustomerPopulator
	 * #populate(de.hybris.platform.core .model.user.CustomerModel,
	 * de.hybris.platform.commercefacades.user.data.CustomerData) This method is used to populate bhgeCustomerData from
	 * GEEdgeCustomerModel
	 */
	@Override
	public void populate(final CustomerModel source, final CustomerData target) throws ConversionException
	{
		List<String> CustomerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();

		LOGGER.debug("Entered into GEEdgeCustomerPopulator.populate method");
		super.populate(source, target);
		if (target instanceof BHGECustomerData)
		{
			final BHGECustomerData bhgeCustomerData = (BHGECustomerData) target;

			if (source instanceof B2BCustomerModel)
			{

				final GEEdgeCustomerModel customer = source instanceof GEEdgeCustomerModel ? (GEEdgeCustomerModel) source : null;
				if (customer.getOrderConfirmEmail() != null)
				{
					bhgeCustomerData.setOrderConfirmEmail(customer.getOrderConfirmEmail());
				}
				else
				{
					bhgeCustomerData.setOrderConfirmEmail(false);
				}
				if (customer.getDefaultSoldTo() != null)
				{
					final B2BUnitModel soldToUnit = customer.getDefaultSoldTo();
					bhgeCustomerData.setEcommerceFlag(soldToUnit.getEcommerceFlag());
					if (StringUtils.isNotBlank(soldToUnit.getCustomerClass()) && null != soldToUnit.getCustomerClassification()){
						final BHGECustomerClassificationModel customerClassification = soldToUnit.getCustomerClassification();
						bhgeCustomerData.setUserType(null != customerClassification.getCustomerType() ? customerClassification.getCustomerType() : "customer");
					} else {
						bhgeCustomerData.setUserType("customer");
					}
				}
				bhgeCustomerData.setEmail(customer.getEmail());
				bhgeCustomerData.setName(customer.getName());
				bhgeCustomerData.setFirstName(customer.getFirstName());
				bhgeCustomerData.setLastName(customer.getLastName());
				bhgeCustomerData.setShippingContactName(customer.getShippingContactName());
				bhgeCustomerData.setShippingContactNumber(customer.getShippingContactNumber());
				bhgeCustomerData.setUid(customer.getCustomerID());
				if (customer.getDefaultPaymentAddress() != null)
				{
					final AddressData addressData = addressConverter.convert(customer.getDefaultPaymentAddress());
					// addressData.setCompanyName(customer.getDefaultPaymentAddress().getDistrict());
					bhgeCustomerData.setDefaultBillingAddress(addressData);
				}

				if (null != customer.getDefaultCurrencyFormat())
				{
					//		final BHGECurrencyFormatData bhgeCurrencyFormatData = (BHGECurrencyFormatData) bhgeCurrencyFormatConverter
					//				.convertAll((Collection<? extends BHGECurrencyFormatModel>) customer.getDefaultCurrencyFormat());

					final BHGECurrencyFormatData bhgeCurrencyFormatData = bhgeCurrencyFormatConverter
							.convert(customer.getDefaultCurrencyFormat());

					bhgeCustomerData.setDefaultCurrencyFormat(bhgeCurrencyFormatData);
				}

				final List<B2BUserGroupData> permissionGroups = new ArrayList<B2BUserGroupData>();
				final Set<B2BUnitModel> b2bUnitModelList = new LinkedHashSet<B2BUnitModel>();
				if(null != customer.getDefaultSoldTo() && null != customer.getDefaultSoldTo().getUid())
				{
					final B2BUnitData recentB2BUnit = new B2BUnitData();
					recentB2BUnit.setUid(customer.getDefaultSoldTo().getUid());
					recentB2BUnit.setName(customer.getDefaultSoldTo().getName());
					recentB2BUnit.setActive(Boolean.TRUE);
					target.setUnit(recentB2BUnit);
				}

				final Stopwatch stopwatch = Stopwatch.createUnstarted();
				stopwatch.start();
				for (final PrincipalGroupModel myVal : customer.getAllGroups())
				{

					if (myVal instanceof B2BUserGroupModel)
					{

						final B2BUserGroupData b2bUserGroupData = new B2BUserGroupData();
						b2bUserGroupData.setName(myVal.getName());
						permissionGroups.add(b2bUserGroupData);
						// adding sold to
						for (final PrincipalGroupModel myB2b : ((B2BUserGroupModel) myVal).getGroups())
						{
							if (myB2b instanceof B2BUnitModel && !myB2b.getUid().equalsIgnoreCase("GEEDGENETPRIMESOLDTO")
									&& !myB2b.getUid().contains("_")
									&& CustomerAccountGroups.contains(((B2BUnitModel) myB2b).getAccountGroup()))
							{
								final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
								final String defaultSoldToChild = myB2b.getUid() + "_" + userSalesRegion;
								b2bUnitModelList.add(((B2BUnitModel) myB2b));
							}
						}

						// adding default sold to and ship to
						if (customer.getDefaultSoldTo() == null && b2bUnitModelList != null && b2bUnitModelList.size() > 0)
						{
							final B2BUnitModel defaultSoldToModel = b2bUnitModelList.iterator().next();
							bhgeCustomerData.setDefaultSoldTo(defaultSoldToModel.getUid());
							if (defaultSoldToModel.getAddresses() != null && defaultSoldToModel.getAddresses().size() > 0)
							{
								final Iterator<AddressModel> itr = defaultSoldToModel.getAddresses().iterator();
								while (itr.hasNext())
								{
									final AddressModel addrModel = itr.next();
									if (!addrModel.getBillingAddress())
									{
										bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
										break;
									}

								}

							}
						}
						else
						{
							bhgeCustomerData.setDefaultSoldTo(customer.getDefaultSoldTo().getUid());
							if (customer.getDefaultShipTo() != null)
							{
								bhgeCustomerData.setDefaultShipTo(customer.getDefaultShipTo().getPk().toString());
							}
							else
							{

								final Iterator<AddressModel> itr = customer.getDefaultSoldTo().getAddresses().iterator();
								while (itr.hasNext())
								{
									final AddressModel addrModel = itr.next();
									if (!addrModel.getBillingAddress())
									{
										bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
										break;
									}

								}

							}
							
						}
						// end of block for adding default sold to and default
						// ship to
					}
					else if (myVal instanceof B2BUnitModel)
					{
						if (!myVal.getUid().equalsIgnoreCase("GEEDGENETPRIMESOLDTO") && !myVal.getUid().contains("_")
								&& CustomerAccountGroups.contains(((B2BUnitModel) myVal).getAccountGroup()))
						{

							b2bUnitModelList.add(((B2BUnitModel) myVal));

							if (customer.getDefaultSoldTo() == null && b2bUnitModelList != null && b2bUnitModelList.size() > 0)
							{
								final B2BUnitModel defaultSoldToModel = b2bUnitModelList.iterator().next();
								bhgeCustomerData.setDefaultSoldTo(defaultSoldToModel.getUid());
								if (defaultSoldToModel.getAddresses() != null && defaultSoldToModel.getAddresses().size() > 0)
								{
									final Iterator<AddressModel> itr = defaultSoldToModel.getAddresses().iterator();
									while (itr.hasNext())
									{
										final AddressModel addrModel = itr.next();
										if (!addrModel.getBillingAddress())
										{
											bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
											break;
										}
									}
								}
							}
							else
							{
								bhgeCustomerData.setDefaultSoldTo(customer.getDefaultSoldTo().getUid());
								if (customer.getDefaultShipTo() != null)
								{
									bhgeCustomerData.setDefaultShipTo(customer.getDefaultShipTo().getPk().toString());
								}
								else
								{

									final Iterator<AddressModel> itr = customer.getDefaultSoldTo().getAddresses().iterator();
									while (itr.hasNext())
									{
										final AddressModel addrModel = itr.next();
										if (!addrModel.getBillingAddress())
										{
											bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
											break;
										}

									}

								}
							}
						}
					}

				}
				stopwatch.stop();
				Long timeElapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
				LOGGER.info("301 iterating b2b units in user level for " + customer.getUid() + " time taken :" + timeElapsed.toString() + " time : " + LocalDateTime.now());

				// Populating Sales Area list based on the default sold to
				final Set<B2BUnitModel> salesAreaList = new HashSet<B2BUnitModel>();
				if (StringUtils.isNotBlank(bhgeCustomerData.getDefaultSoldTo())
						&& StringUtils.isNotEmpty(bhgeCustomerData.getDefaultSoldTo()))
				{
					final B2BUnitModel defaultSoldToModel = userProfileService
							.findChildB2BUnitModel(bhgeCustomerData.getDefaultSoldTo());
					if (null != defaultSoldToModel && null != defaultSoldToModel.getMembers()
							&& defaultSoldToModel.getMembers().size() > 0)
					{
						for (final PrincipalModel member : defaultSoldToModel.getMembers())
						{
							if (member instanceof B2BUnitModel
									&& CustomerAccountGroups.contains(((B2BUnitModel) member).getAccountGroup()) &&
									((GEEdgeCustomerModel)source).getIsInternalUser() != null && ((GEEdgeCustomerModel)source).getIsInternalUser().booleanValue())
							{
								salesAreaList.add((B2BUnitModel) member);
							}
							else if (member instanceof B2BUnitModel
									&& CustomerAccountGroups.contains(((B2BUnitModel) member).getAccountGroup()) &&
									source.getGroups().contains(member)){
								salesAreaList.add((B2BUnitModel) member);
							}
						}
					}
				}

				bhgeCustomerData.setSalesAreaList(sortB2BUnitModelByName(salesAreaList));
				if (null != customer.getDefaultB2BUnit())
				{
                    List<String> visibleCategories = null;
                    List<String> userAccessibleCategories = null;
                    final B2BUnitModel b2bUnit = customer.getDefaultB2BUnit();
					//US507783: Populate customer data with visible categories.
					if(CollectionUtils.isNotEmpty(b2bUnit.getVisibleCategories())){
						List<String> accessibleCategories = b2bUnit.getVisibleCategories().stream()
								.map(category -> {
									if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.WAYGATE)){
										return "waygate";
									} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.BENTLY)){
										return "cordant";
									} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.PANAMETRICS)){
										return "panametrics";
									} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.DRUCK)){
										return "druck";
									} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.ReuterStokes)){
										return "reuter-stokes";
									}
									return null; // or you could use Optional.empty() and filter out nulls in the next step
								})
								.filter(Objects::nonNull) // Remove any nulls that were returned
								.collect(Collectors.toList());
                         visibleCategories = accessibleCategories;
					}
					else{
						Collection<CategoryModel> list = bhgeUserProfileFacade.fetchCategoriesFromSalesOrg(b2bUnit);
                         visibleCategories =  getProductLineView(list);
					}

                    //setting user visible categories as part of PSI exit strategy
					Collection<CategoryModel> list = customer.getUserAccessibleCategories();
                    if(CollectionUtils.isNotEmpty(list)) {
                        userAccessibleCategories = getProductLineView(list);
                    }
                    if(CollectionUtils.isNotEmpty(userAccessibleCategories) &&
                            CollectionUtils.isNotEmpty(visibleCategories)){
                        bhgeCustomerData.setVisibleCategories(visibleCategories.stream().filter(userAccessibleCategories::contains).collect(Collectors.toList()));
                    }
                    else{
                        bhgeCustomerData.setVisibleCategories(visibleCategories);
                    }

					//setting accessCSRProductLines
					Collection<BHGEApprovalDetailsModel> approversList = bhgeUserProfileFacade.fetchProductLinesForCSRAccess(customer.getEmail());
					if(org.apache.commons.collections4.CollectionUtils.isNotEmpty(approversList)){
						List<String> productLineView = new ArrayList<>();
						productLineView = approversList.stream()
								.map(category -> {
									if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_WAYGATE)){
										return "waygate";
									} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_BENTLY)){
										return "cordant";
									} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_PANAMETRICS)){
										return "panametrics";
									} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_DRUCK)){
										return "druck";
									} else if(category.getApproverGroupName().equalsIgnoreCase(BhgeCoreConstants.CSR_ReuterStokes)){
										return "reuter-stokes";
									}
									return null; // or you could use Optional.empty() and filter out nulls in the next step
								})
								.filter(Objects::nonNull) // Remove any nulls that were returned
								.collect(Collectors.toList());
						bhgeCustomerData.setAccessCSRProductLines(productLineView);
					}

					bhgeCustomerData.setDefaultSalesArea(b2bUnit.getUid());
					final String[] defaultParentB2BUnit = StringUtils.split(b2bUnit.getUid(), "_");
					if (defaultParentB2BUnit != null && defaultParentB2BUnit.length >= 3)
					{
						if (StringUtils.isNotEmpty(defaultParentB2BUnit[0]))
						{
							final B2BUnitModel soldtoUnit = (B2BUnitModel) b2bUnitService.getUnitForUid(defaultParentB2BUnit[0]);
							final SalesAreaData salesAreaData = new SalesAreaData();
							final SAPConfigurationModel baseStoreConfiguration = baseStoreService.findSAPConfigurationWithParams(
									defaultParentB2BUnit[1], defaultParentB2BUnit[2], defaultParentB2BUnit[3]);
							salesAreaData.setSalesOrg(
									baseStoreConfiguration != null ? baseStoreConfiguration.getSapcommon_salesOrganization() : "");
							final BaseStoreModel baseStore = baseStoreService
									.findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
                            Boolean isSapBlocked = false;
							if((soldtoUnit.getSapBlocked() != null && Boolean.TRUE.equals(soldtoUnit.getSapBlocked())) ||
									(b2bUnit.getSapBlocked() != null && Boolean.TRUE.equals(b2bUnit.getSapBlocked()))){
								isSapBlocked = true;
							}
                            LOGGER.info("BHGECustomerPopulator isSapBlocked: " + isSapBlocked);
                            salesAreaData.setSapBlocked(isSapBlocked);
							salesAreaData.setBaseStoreName(baseStore != null ? baseStore.getName() : "");
							salesAreaData.setB2bUnitUid(b2bUnit.getUid());
							salesAreaData.setB2bUnitName(b2bUnit.getName());
							salesAreaData.setCurrencyIso(
									b2bUnit.getCurrency() != null ? b2bUnit.getCurrency().getIsocode() : "");
							salesAreaData.setCurrencySymbol(
									b2bUnit.getCurrency() != null ? b2bUnit.getCurrency().getSymbol() : "");

							final String mediaURL = soldtoUnit != null && CollectionUtils.isNotEmpty(soldtoUnit.getMedias())
									&& soldtoUnit.getMedias().iterator().hasNext()
											? soldtoUnit.getMedias().iterator().next().getURL().toString() : "";
							salesAreaData.setCompanyLogoURL(mediaURL);
							bhgeCustomerData.setRecentSalesArea(salesAreaData);
						}
					}
				}

				// Adding user Last login time
				bhgeCustomerData.setLastLogin(getLastLoginForUser(customer));

				bhgeCustomerData.setPermissionGroups(permissionGroups);

				bhgeCustomerData.setB2bUnitModelList(sortB2BUnitModelByName(b2bUnitModelList));
				bhgeCustomerData.setSendInvoiceEmail(customer.getSendInvoiceEmail());
				bhgeCustomerData.setSendSalesOrderEmail(customer.getSendSalesOrderEmail());
				bhgeCustomerData.setSendShippingNotificationEmail(customer.getSendShippingNotificationEmail());
				bhgeCustomerData.setDeliveryAccount(customer.getDeliveryAccount());
				bhgeCustomerData.setIsShipCompleteOrder(customer.getIsShipCompleteOrder());
				
				// set invoicecontact
				if (customer.getInvoiceContact() != null) {
					bhgeCustomerData.setInvoiceContact(customer.getInvoiceContact());
				}
				// set invoicecontactPhone
				if (customer.getInvoicePhone() != null) {
					 bhgeCustomerData.setInvoicePhone(customer.getInvoicePhone());
				}
				// set soa Contact
				if (customer.getSoaContact() != null) {
					 bhgeCustomerData.setSoaContact(customer.getSoaContact());
				}
				// set soa Phone
				if (customer.getSoaPhone() != null) {
					 bhgeCustomerData.setSoaPhone(customer.getSoaPhone());
				}


				if (customer.getDeliveryOptions() != null)
				{
					if (customer.getDeliveryOptions().getCode().equalsIgnoreCase("Prepay"))
					{
						bhgeCustomerData.setDeliveryOptions("Prepay & Add");
					}
					else
					{
						bhgeCustomerData.setDeliveryOptions(customer.getDeliveryOptions().getCode());
					}
				}

				List<ShippingCarrierMethodData> prepayCarrierTypes = new ArrayList<ShippingCarrierMethodData>();
				if (null != bhgeCustomerData.getDeliveryOptions())
				{
					if (bhgeCustomerData.getDeliveryOptions().contains("Prepay"))
					{
						final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods("prepay_add");
						prepayCarrierTypes = populatCarrierMethod(listOfvalues, "prepay_add");
						// prepayCarrierTypes=geEdgeCheckoutFacade.retriveCarrierMethods("prepay_add");
					}
					else
					{
						final List<EnumerationValueModel> listOfvalues = bhgeCartService.getShippingCarrierMethods("collect");
						prepayCarrierTypes = populatCarrierMethod(listOfvalues, "collect");
						// prepayCarrierTypes=geEdgeCheckoutFacade.retriveCarrierMethods("collect");
					}
				}

				for (final ShippingCarrierMethodData shippingCarrierMethodData : prepayCarrierTypes)
				{
					if (null != customer.getDeliveryCarrier() && null != customer.getDeliveryCarrier().getCode()
							&& customer.getDeliveryCarrier().getCode().trim().equalsIgnoreCase(shippingCarrierMethodData.getCode()))
					{
						bhgeCustomerData.setDeliveryCarrier(shippingCarrierMethodData.getCode());
					}
				}
                bhgeCustomerData.setOrderBlockEmailNotification(customer.getOrderBlockEmailNotification());
                bhgeCustomerData.setOrderBlockReleaseEmailNotification(customer.getOrderBlockReleaseEmailNotification());
                bhgeCustomerData.setOrderShipDateChanged(customer.getOrderShipDateChanged());
//				if (MapUtils.isNotEmpty(customer.getProductLineMap())) {
//					Map<String, String> productMap = customer.getProductLineMap().entrySet().stream()
//							.collect(Collectors.toMap(
//									entry -> Optional.ofNullable(entry.getKey()).orElse("defaultUID"),
//									entry -> Optional.ofNullable(entry.getValue()).orElse("defaultProductLine"),
//									(existingValue, newValue) -> existingValue
//							));
//					bhgeCustomerData.setProductLineMap(productMap);
//				}
			}
		}

	}



	private Set<B2BUnitModel> sortB2BUnitModelByName(final Set<B2BUnitModel> b2bUnitList)
	{

		final List<B2BUnitModel> b2bSalesAreaListData = new ArrayList<B2BUnitModel>(b2bUnitList);

		Collections.sort(b2bSalesAreaListData, new Comparator<B2BUnitModel>()
		{
			@Override
			public int compare(final B2BUnitModel p1, final B2BUnitModel p2)
			{
				if (p1 != null && p1.getLocName() != null && p2 != null && p2.getLocName() != null)
				{
					return p1.getLocName().compareToIgnoreCase(p2.getLocName());
				}
				return 0;
			}
		});

		final Set<B2BUnitModel> sortedSet = new LinkedHashSet();
		for (final B2BUnitModel b2bUnit : b2bSalesAreaListData)
		{
			sortedSet.add(b2bUnit);
		}

		return sortedSet;
	}


	private String getLastLoginForUser(final GEEdgeCustomerModel customer)
	{
		final String lastLoginFormat = Config.getString("LAST_LOGIN_DATE_FORMAT", "dd-MMM-YYYY hh:mm:ss aa");
		final SimpleDateFormat formatter = new SimpleDateFormat(lastLoginFormat);
		try
		{
			if (null != customer && null != customer.getLastLogin())
			{
				return formatter.format(customer.getLastLogin());
			}
		}
		catch (final Exception e)
		{
			LOGGER.error("Error occured while parsing the Last Login date " + e);
		}
		return "";
	}


	public List<ShippingCarrierMethodData> populatCarrierMethod(final List<EnumerationValueModel> sourceList,
			final String shippingCharge)
	{
		final List<ShippingCarrierMethodData> targetList = new ArrayList<ShippingCarrierMethodData>();
		if (sourceList != null)
		{
			for (final EnumerationValueModel enumValue : sourceList)
			{
				final ShippingCarrierMethodData shippingCarrierData = new ShippingCarrierMethodData();

				shippingCarrierData.setCode(enumValue.getCode());

				shippingCarrierData.setName(enumValue.getName());

				shippingCarrierData.setShippingCharge(shippingCharge);

				targetList.add(shippingCarrierData);

			}
		}

		return targetList;
	}

	/*
	 * private String getLastLoginForUser(final GEEdgeCustomerModel customer) { final String lastLoginFormat =
	 * Config.getString("LAST_LOGIN_DATE_FORMAT", "dd-MMM-YYYY hh:mm:ss aa"); final SimpleDateFormat formatter = new
	 * SimpleDateFormat(lastLoginFormat); try { if(null != customer && null != customer.getLastLogin()) { return
	 * formatter.format(customer.getLastLogin()); } } catch (final Exception e) {
	 * LOGGER.error("Error occured while parsing the Last Login date " + e); } return ""; }
	 *
	 * public void populateAddress(final CustomerModel source, final bhgeCustomerData target) {
	 *
	 * final Collection<AddressModel> addressModelCollection = source .getAddresses(); final Collection<AddressData>
	 * addressDataCollection = new ArrayList<AddressData>(); for (final AddressModel addressModel :
	 * addressModelCollection) { final AddressData addressData = new AddressData();
	 * addressPopulator.populate(addressModel, addressData); addressDataCollection.add(addressData); }
	 * target.setAddressData((List<AddressData>) addressDataCollection); }
	 *
	 * public List<ShippingCarrierMethodData> populatCarrierMethod( final List<EnumerationValueModel> sourceList, final
	 * String shippingCharge) { final List<ShippingCarrierMethodData> targetList = new
	 * ArrayList<ShippingCarrierMethodData>();
	 *
	 * for (final EnumerationValueModel enumValue : sourceList) { final ShippingCarrierMethodData shippingCarrierData =
	 * new ShippingCarrierMethodData();
	 *
	 * shippingCarrierData.setCode(enumValue.getCode());
	 *
	 * shippingCarrierData.setName(enumValue.getName());
	 *
	 * shippingCarrierData.setShippingCharge(shippingCharge);
	 *
	 * targetList.add(shippingCarrierData);
	 *
	 * }
	 *
	 * return targetList; }
	 *
	 * public List<ContactUsSettingsData> populateConatctUsSettings(final List<ContactusSettingsModel> sourceList){
	 *
	 *
	 * final List<ContactUsSettingsData> targetList = new ArrayList<ContactUsSettingsData>();
	 *
	 * for(final ContactusSettingsModel contactus : sourceList){ final ContactUsSettingsData contactUsSettingsData = new
	 * ContactUsSettingsData();
	 *
	 * contactUsSettingsData.setProductLine(contactus.getContactUsProductLine());
	 * contactUsSettingsData.setRegion(contactus.getContactUsRegion() != null ? contactus.getContactUsRegion().getName()
	 * : ""); contactUsSettingsData.setEmail(contactus.getEmail());
	 * contactUsSettingsData.setPhoneNum(contactus.getPhoneNum());
	 * contactUsSettingsData.setWorkingHours(contactus.getWorkingHours());
	 * contactUsSettingsData.setCountry(contactus.getContactUsCountry() != null ?
	 * contactus.getContactUsCountry().getName() : ""); contactUsSettingsData.setSalesArea(contactus.getCode());
	 *
	 *
	 * targetList.add(contactUsSettingsData); }
	 *
	 *
	 * return targetList; }
	 *
	 * public List<List<ContactUsSettingsData>> populateDefaultContactUs(final List<ContactusSettingsModel> sourceList){
	 *
	 *
	 * final List<BaseStoreModel> basestores = baseStoreService.getAllBaseStores(); final List<ContactUsSettingsData>
	 * targetList = null;
	 *
	 * List<List<ContactUsSettingsData>> contactUsSettings= new ArrayList();
	 *
	 *
	 * final List<List<ContactUsSettingsData>> finaltargettlist= new ArrayList();
	 *
	 * for(final BaseStoreModel basestoremodel: basestores){ final String basestorecode =
	 * basestoremodel.getUid().split("_")[0]; final List<ContactUsSettingsData> targetListVal = new
	 * ArrayList<ContactUsSettingsData>(); for(final ContactusSettingsModel contactus :sourceList){ final String
	 * contactlistcode = contactus.getCode().split("_")[0]; if(contactlistcode.equals(basestorecode)){ final
	 * ContactUsSettingsData contactUsSettingsData = new ContactUsSettingsData();
	 * contactUsSettingsData.setProductLine(contactus.getContactUsProductLine());
	 * contactUsSettingsData.setRegion(contactus.getContactUsRegion() != null ? contactus.getContactUsRegion().getName()
	 * : ""); contactUsSettingsData.setEmail(contactus.getEmail());
	 * contactUsSettingsData.setPhoneNum(contactus.getPhoneNum());
	 * contactUsSettingsData.setWorkingHours(contactus.getWorkingHours());
	 * contactUsSettingsData.setCountry(contactus.getContactUsCountry() != null ?
	 * contactus.getContactUsCountry().getName() : ""); contactUsSettingsData.setSalesArea(contactus.getCode());
	 * targetListVal.add(contactUsSettingsData); } }
	 *
	 *
	 * finaltargettlist.add(targetListVal); }
	 *
	 * return finaltargettlist; }
	 *
	 * private Set<B2BUnitModel> sortB2BUnitModelByName(final Set<B2BUnitModel> b2bUnitList){
	 *
	 * final List<B2BUnitModel> b2bSalesAreaListData = new ArrayList<B2BUnitModel>(b2bUnitList);
	 *
	 * Collections.sort(b2bSalesAreaListData, new Comparator<B2BUnitModel>() { public int compare(final B2BUnitModel p1,
	 * final B2BUnitModel p2) { if(p1 != null && p1.getLocName() != null && p2 != null && p2.getLocName() != null){
	 * return p1.getLocName().compareToIgnoreCase(p2.getLocName()); } return 0; } });
	 *
	 * final Set<B2BUnitModel> sortedSet = new LinkedHashSet(); for(final B2BUnitModel b2bUnit : b2bSalesAreaListData){
	 * sortedSet.add(b2bUnit); }
	 *
	 * return sortedSet; }
	 */

	public List<ContactUsSettingsData> populateConatctUsSettings(final List<ContactusSettingsModel> sourceList)
	{


		final List<ContactUsSettingsData> targetList = new ArrayList<ContactUsSettingsData>();

		for (final ContactusSettingsModel contactus : sourceList)
		{
			final ContactUsSettingsData contactUsSettingsData = new ContactUsSettingsData();

			contactUsSettingsData.setProductLine(contactus.getContactUsProductLine());
			contactUsSettingsData.setRegion(contactus.getContactUsRegion() != null ? contactus.getContactUsRegion().getName() : "");
			contactUsSettingsData.setSubRegion(contactus.getSubRegion()!= null ? contactus.getSubRegion(): "");
			contactUsSettingsData.setEmail(contactus.getEmail());
			contactUsSettingsData.setPhoneNum(contactus.getPhoneNum());
			contactUsSettingsData.setWorkingHours(contactus.getWorkingHours());
			contactUsSettingsData.setCountry(contactus.getContactUsCountry() != null ? contactus.getContactUsCountry().getName() : "");
			contactUsSettingsData.setSalesArea(contactus.getCode());
			contactUsSettingsData.setContactUsCommerceType(contactus.getContactUsCommerceType());
			contactUsSettingsData.setCommerceTypeValue(contactus.getCommerceTypeValue());


			targetList.add(contactUsSettingsData);
		}


		return targetList;
	}

	public List<ContactUsSettingsData> populateStaticConatctUsSettings(final List<BHStaticContactUsModel> sourceList)
	{
		final List<ContactUsSettingsData> targetList = new ArrayList<ContactUsSettingsData>();

		for (final BHStaticContactUsModel contactus : sourceList)
		{
			final ContactUsSettingsData contactUsSettingsData = new ContactUsSettingsData();

			// Setting CommerceType like Sales or Returns
			contactUsSettingsData.setCommerceTypeValue(contactus.getCommerceTypeValue());
			// Setting Region values
			contactUsSettingsData.setRegion(contactus.getRegion() != null ? contactus.getRegion().getName() : "");
			// Setting Sub Region values
			String subRegionValue = "";
			// Setting Country values
			String countryValue = "";
			if(StringUtils.isNotBlank(contactus.getSubRegion())){
				subRegionValue = contactus.getSubRegion();
			}
			if (StringUtils.isNotBlank(contactus.getCountry())){
				countryValue = contactus.getCountry();
			}
			// Setting Sub Region values
			contactUsSettingsData.setSubRegion(subRegionValue);
			// Setting Country values
			contactUsSettingsData.setCountry(countryValue);
			// Setting ProductLine values
			contactUsSettingsData.setProductLine(contactus.getContactUsProductLine());
			// Setting Email values
			contactUsSettingsData.setEmail(contactus.getEmail());
			// Setting Phone Number values
			contactUsSettingsData.setPhoneNum(contactus.getPhoneNum());
			// Setting Working Hours values
			contactUsSettingsData.setWorkingHours(contactus.getWorkingHours());
			// Setting Code values
			contactUsSettingsData.setSalesArea(contactus.getCode());

			targetList.add(contactUsSettingsData);
		}


		return targetList;
	}

	private List<String> getProductLineView(Collection<CategoryModel> visibleCategories) {
		List<String> productLineView = new ArrayList<>();
		if(org.apache.commons.collections4.CollectionUtils.isNotEmpty(visibleCategories)){
			productLineView = visibleCategories.stream()
					.map(category -> {
						if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.WAYGATE)){
							return "waygate";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.BENTLY)){
							return "cordant";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.PANAMETRICS)){
							return "panametrics";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.DRUCK)){
							return "druck";
						} else if(category.getCode().equalsIgnoreCase(BhgeCoreConstants.ReuterStokes)){
							return "reuter-stokes";
						}
						return null; // or you could use Optional.empty() and filter out nulls in the next step
					})
					.filter(Objects::nonNull) // Remove any nulls that were returned
					.collect(Collectors.toList());
			return productLineView;
		}
		return productLineView;
	}

}
