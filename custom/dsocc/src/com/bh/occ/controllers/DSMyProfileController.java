package com.bh.occ.controllers;


import com.bh.occ.forms.BHGEAvailabilityCheckForm;
import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.data.BHGEInventoryData;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.BHGEAvailabilityCheckFormData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.impl.DefaultBHGECheckoutFacade;
import com.bhge.facades.order.populators.BHGECartPopulator;
import com.bhge.facades.product.BHGEProductFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECurrencyFormatData;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldTo;
import com.bhge.facades.user.data.GetAddressFormData;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.BHGEBaseStoreService;
import com.ds.dsocc.bulkOrder.dto.BHGECurrencyFormatDataListWsDTO;
import com.ds.dsocc.bulkOrder.dto.BHGECurrencyFormatDataWsDTO;
import com.ds.dsocc.common.dto.*;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bwebservicescommons.dto.company.B2BUnitWsDTO;
import de.hybris.platform.catalog.model.ProductReferenceModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.enums.data.ShippingCarrierMethodData;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.product.ProductOption;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.UserFacade;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserGroupModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

@Controller
@ApiVersion("v2")
@Tag(name = "DS  UpdateProfile")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/my-account")
public class DSMyProfileController extends DSBaseController {

	 private static final Logger LOG = LoggerFactory.getLogger(DSCartCheckoutController.class);
	private final Collection<ProductOption> OPTIONS = new ArrayList<ProductOption>(
			Arrays.asList(ProductOption.BASIC, ProductOption.PRICE, ProductOption.DESCRIPTION));
	@Resource(name = "customerFacade")
	private CustomerFacade customerFacade;
	
	 @Resource(name = "userService")
	    private UserService userService;

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

	@Resource(name = "b2bCheckoutFacade")
	private DefaultBHGECheckoutFacade bhgeCheckoutFacade;

	@Resource(name = "userFacade")
	private UserFacade userFacade;

	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;

	@Resource(name = "baseStoreService")
	private BHGEBaseStoreService baseStoreService;
	
	@Resource(name = "bhgeCartService")
	BHGECartService bhgeCartService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource(name = "productService")
	private BHGEProductService productService;

	@Resource(name = "bhgeCartPopulator")
	private BHGECartPopulator<CartData> bhgeCartPopulator;

	@Resource(name = "bhgeProductFacade")
	private BHGEProductFacade bhgeProductFacadeImpl;

	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;
	
	@Resource(name="addressConverter")
	private Converter<AddressModel,AddressData> addressConverter;

    @Autowired(required = true)
    private BHGEB2BUnitService bhgeB2BUnitService;
	

	@RequestMapping(value = "/personal-details", method =  RequestMethod.GET )
	@ResponseBody
	@Operation(operationId = "personal-details", summary = "personal details ")
	@ApiBaseSiteIdAndUserIdParam
	public BHGEPersonalDetailsWsDTO getPersonalDetails(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId)
			throws CMSItemNotFoundException {
		// model.addAttribute(TITLE_DATA_ATTR, userFacade.getTitles());

		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		BHGEPersonalDetailsWsDTO bhgePersonalDetailsWsDTO = new BHGEPersonalDetailsWsDTO();
		
		String name= bhgeCustomerData.getName() ;
         
		String firstName=null;
		String lastName=null;
         
		 int index = name.lastIndexOf(' ');
		if(index < 0) {
			 firstName=name.substring(index+1);
			 lastName=StringUtils.EMPTY;
			}else {
			 firstName=name.substring(0, index);
			 lastName= name.substring(index + 1);
			}
     
     
		if (bhgeCustomerData.getName() == null || StringUtils.isEmpty(bhgeCustomerData.getName())
				|| StringUtils.isBlank(bhgeCustomerData.getName())) {
			bhgePersonalDetailsWsDTO.setName(StringUtils.EMPTY);
		}

		else {

			bhgePersonalDetailsWsDTO.setName(bhgeCustomerData.getName());

		}
		if (bhgeCustomerData.getFirstName() == null || StringUtils.isEmpty(bhgeCustomerData.getFirstName())
				|| StringUtils.isBlank(bhgeCustomerData.getFirstName())) {
			bhgePersonalDetailsWsDTO.setFirstName(firstName);
		} else {

			bhgePersonalDetailsWsDTO.setFirstName(bhgeCustomerData.getFirstName());

		}
		if (bhgeCustomerData.getLastName() == null || StringUtils.isEmpty(bhgeCustomerData.getLastName())
				|| StringUtils.isBlank(bhgeCustomerData.getLastName())) {
			bhgePersonalDetailsWsDTO.setLastName(lastName);
		} else {

			bhgePersonalDetailsWsDTO.setLastName(bhgeCustomerData.getLastName());

		}
	/*
	 * if (firstName == null || StringUtils.isEmpty(firstName) ||
	 * StringUtils.isBlank(firstName)) { firstName=StringUtils.EMPTY; } else {
	 * bhgePersonalDetailsWsDTO.setFirstName(firstName); }
	 * 
	 * if (lastName == null || StringUtils.isEmpty(lastName) ||
	 * StringUtils.isBlank(lastName)) {
	 * //bhgePersonalDetailsWsDTO.setLastName(StringUtils.EMPTY);
	 * lastName=StringUtils.EMPTY;
	 * 
	 * } else { bhgePersonalDetailsWsDTO.setLastName(lastName); }
	 */
 if (bhgeCustomerData.getEmail() == null || StringUtils.isEmpty(bhgeCustomerData.getEmail()) || StringUtils.isBlank(bhgeCustomerData.getEmail())) {
	 bhgePersonalDetailsWsDTO.setEmail(StringUtils.EMPTY);
    }
    else {
    	bhgePersonalDetailsWsDTO.setEmail(bhgeCustomerData.getEmail());
    } 
 
 if (bhgeCustomerData.getDisplayUid() == null || StringUtils.isEmpty(bhgeCustomerData.getDisplayUid()) || StringUtils.isBlank(bhgeCustomerData.getDisplayUid())) {
	 bhgePersonalDetailsWsDTO.setDisplayUid(StringUtils.EMPTY);
 }
 else {
	 bhgePersonalDetailsWsDTO.setDisplayUid(bhgeCustomerData.getDisplayUid());
 } 
 
 if (bhgeCustomerData.getLastLogin() == null || StringUtils.isEmpty(bhgeCustomerData.getLastLogin()) || StringUtils.isBlank(bhgeCustomerData.getLastLogin())) {
	 bhgePersonalDetailsWsDTO.setLastLogin(StringUtils.EMPTY);
     }
     else {
    	 bhgePersonalDetailsWsDTO.setLastLogin(bhgeCustomerData.getLastLogin() + " PST");
			/*
			 * try { String dateStr = bhgeCustomerData.getLastLogin(); SimpleDateFormat sdf
			 * = new SimpleDateFormat("dd-MMM-yyyy HH:mm:ss"); Date parsedDate =
			 * sdf.parse(dateStr);
			 * bhgePersonalDetailsWsDTO.setLastLogin(parsedDate.toString()); } catch
			 * (ParseException e) { // TODO Auto-generated catch block e.printStackTrace();
			 */
		}
      
    
	List<PrincipalGroupModel> userGroups = userService.getCurrentUser().getGroups().stream().filter(role -> role instanceof UserGroupModel).collect(Collectors.toList());
	for(PrincipalGroupModel groupModel : userGroups) {
		if(groupModel.getUid().equalsIgnoreCase("UG_ADMIN_ORDER_STORE")) {
			bhgePersonalDetailsWsDTO.setDsRoles(groupModel.getUid());
			break;
		}
		
		if(groupModel.getUid().equalsIgnoreCase("UG_RMA_AUTHORITY")) {
			bhgePersonalDetailsWsDTO.setDsRoles(groupModel.getUid());
			break;
		}
		
		if (groupModel.getUid().equalsIgnoreCase("UG_VIEW_STORE")) {
			bhgePersonalDetailsWsDTO.setDsRoles(groupModel.getUid());			
		}		
		
		if(groupModel.getUid().equalsIgnoreCase("UG_ORDER_TRACKING")) {
			bhgePersonalDetailsWsDTO.setDsRoles(groupModel.getUid());
		}
	}
 
  return bhgePersonalDetailsWsDTO;
		
}
	
	@RequestMapping(value = "/notification", method =  RequestMethod.GET )
	@ResponseBody
	@Operation(operationId = "notification", summary = "notification ")
	@ApiBaseSiteIdAndUserIdParam
	public BHGENotificationWsDTO getNotification(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId)
			throws CMSItemNotFoundException {
		// model.addAttribute(TITLE_DATA_ATTR, userFacade.getTitles());

		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
	    
		BHGENotificationWsDTO bhgeNotificationWsDTO = new BHGENotificationWsDTO();
		
		bhgeNotificationWsDTO.setSendShippingNotificationEmail(bhgeCustomerData.getSendShippingNotificationEmail());
		
		if (bhgeCustomerData.getSendInvoiceEmail() == null || StringUtils.isEmpty(bhgeCustomerData.getSendInvoiceEmail()) || StringUtils.isBlank(bhgeCustomerData.getSendInvoiceEmail())) {
			
			bhgeNotificationWsDTO.setSendInvoiceEmail(StringUtils.EMPTY);
	     }
	     else {
	    	 bhgeNotificationWsDTO.setSendInvoiceEmail(bhgeCustomerData.getSendInvoiceEmail());
	     } 
		
		if (bhgeCustomerData.getSendSalesOrderEmail() == null || StringUtils.isEmpty(bhgeCustomerData.getSendSalesOrderEmail()) || StringUtils.isBlank(bhgeCustomerData.getSendSalesOrderEmail())) {
			
			bhgeNotificationWsDTO.setSendSalesOrderEmail(StringUtils.EMPTY);
	     }
	     else {
	    	 bhgeNotificationWsDTO.setSendSalesOrderEmail(bhgeCustomerData.getSendSalesOrderEmail());
	     } 
		
		
		if (bhgeCustomerData.getSendShippingNotificationEmail() == null || StringUtils.isEmpty(bhgeCustomerData.getSendShippingNotificationEmail()) || StringUtils.isBlank(bhgeCustomerData.getSendShippingNotificationEmail())) {
			
			bhgeNotificationWsDTO.setSendShippingNotificationEmail(StringUtils.EMPTY);
	     }
	     else {
	    	 bhgeNotificationWsDTO.setSendShippingNotificationEmail(bhgeCustomerData.getSendShippingNotificationEmail());
	     } 
		
		// New SOA fields 
        if (bhgeCustomerData.getInvoiceContact() == null || StringUtils.isEmpty(bhgeCustomerData.getInvoiceContact()) || StringUtils.isBlank(bhgeCustomerData.getInvoiceContact())) {
			
			bhgeNotificationWsDTO.setInvoiceContact(StringUtils.EMPTY);
	     }
	     else {
	    	 bhgeNotificationWsDTO.setInvoiceContact(bhgeCustomerData.getInvoiceContact());
	     }
        
         if (bhgeCustomerData.getInvoicePhone() == null || StringUtils.isEmpty(bhgeCustomerData.getInvoicePhone()) || StringUtils.isBlank(bhgeCustomerData.getInvoicePhone())) {
			
			bhgeNotificationWsDTO.setInvoicePhone(StringUtils.EMPTY);
	     }
	     else {
	    	 bhgeNotificationWsDTO.setInvoicePhone(bhgeCustomerData.getInvoicePhone());
	     } 
         
         if (bhgeCustomerData.getSoaContact() == null || StringUtils.isEmpty(bhgeCustomerData.getSoaContact()) || StringUtils.isBlank(bhgeCustomerData.getSoaContact())) {
 			
 			bhgeNotificationWsDTO.setSoaContact(StringUtils.EMPTY);
 	     }
 	     else {
 	    	 bhgeNotificationWsDTO.setSoaContact(bhgeCustomerData.getSoaContact());
 	     } 
         
         if (bhgeCustomerData.getSoaPhone() == null || StringUtils.isEmpty(bhgeCustomerData.getSoaPhone()) || StringUtils.isBlank(bhgeCustomerData.getSoaPhone())) {
  			
  			bhgeNotificationWsDTO.setSoaPhone(StringUtils.EMPTY);
  	     }
  	     else {
  	    	 bhgeNotificationWsDTO.setSoaPhone(bhgeCustomerData.getSoaPhone());
  	     }
        bhgeNotificationWsDTO.setOrderBlockEmailNotification(bhgeCustomerData.getOrderBlockEmailNotification());
        bhgeNotificationWsDTO.setOrderBlockReleaseEmailNotification(bhgeCustomerData.getOrderBlockReleaseEmailNotification());
        bhgeNotificationWsDTO.setOrderShipDateChanged(bhgeCustomerData.getOrderShipDateChanged());
		
	   return getDataMapper().map(bhgeNotificationWsDTO, BHGENotificationWsDTO.class, "FULL");
	}
	
	@RequestMapping(value = "/customer-account", method =  RequestMethod.GET )
	@ResponseBody
	@Operation(operationId = "customer-account", summary = "customer account ")
	@ApiBaseSiteIdAndUserIdParam
	public BHGECustomerAccountWsDTO getCustomerAccount(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId)
			throws CMSItemNotFoundException {
		// model.addAttribute(TITLE_DATA_ATTR, userFacade.getTitles());
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		final Set<B2BUnitModel> salesAreasList = bhgeCustomerData.getSalesAreaList();
		final Set<BHGESoldTo> salesAreaData = bhgeSoldToUtil.convertSalesAreaModelToData(salesAreasList);
		final List<BHGESoldTo> salesAreaListData = new ArrayList<BHGESoldTo>(salesAreaData);
		final Set<B2BUnitModel> setb2bunitModel = bhgeCustomerData.getB2bUnitModelList();
		List<B2BUnitModel> b2bunitModelList = new ArrayList<>(setb2bunitModel);
		List<B2BUnitWsDTO> b2bUnitWsDTO = new  ArrayList<>();
        final GEEdgeCustomerModel bhgeUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        Collection<CategoryModel> categoriesFromUser = bhgeUser.getUserAccessibleCategories();
        Boolean hasVisibleVategories = true;
		
		for (final B2BUnitModel b2bunit : b2bunitModelList) {
			B2BUnitWsDTO b2bunitWs = new B2BUnitWsDTO();
			b2bunitWs.setName(b2bunit.getName());
			b2bunitWs.setUid(b2bunit.getUid());
			b2bunitWs.setSelectedUid(b2bunit.getUid());
			b2bunitWs.setSelectedLocName(b2bunit.getName());
			b2bUnitWsDTO.add(b2bunitWs);
		}
		
		final List<BHGESoldTo> salesAreaDataMap = new ArrayList<BHGESoldTo>();
		for (final BHGESoldTo salesArea : salesAreaListData)
		{
			if (salesArea.getSoldToId() != null && salesArea.getSoldToId().contains("_"))
			{
				final String[] salesAreaArr = salesArea.getSoldToId().split("_");
				final BHGESoldTo salesData = new BHGESoldTo();
				if (salesAreaArr != null && salesAreaArr.length >= 3)
				{
                    String  salesOrg = salesAreaArr[1];
                    String  distributionChannel = salesAreaArr[2];
                    String  division = salesAreaArr[3];
                    Collection<CategoryModel> categoriesFromSalesOrg =bhgeB2BUnitService.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
                    if(CollectionUtils.isNotEmpty(categoriesFromSalesOrg) && CollectionUtils.isNotEmpty(categoriesFromUser) ) {
                        hasVisibleVategories = categoriesFromSalesOrg.stream().
                                anyMatch(categoriesFromUser::contains);
                    }
					final SAPConfigurationModel baseStoreConfiguration = baseStoreService
							.findSAPConfigurationWithParams(salesAreaArr[1], salesAreaArr[2], salesAreaArr[3]);
					if (baseStoreConfiguration != null)
					{
						final BaseStoreModel baseStore = baseStoreService
								.findBaseStoreBySAPConfiguration(baseStoreConfiguration.getPk().toString());
						if (baseStore != null)
						{
							salesData.setBaseStoreName(baseStore.getName());
							salesData.setCurrency(salesArea.getCurrency());
							salesData.setSoldToId(salesArea.getSoldToId());
						}
					}
                    if(hasVisibleVategories) {
                        salesAreaDataMap.add(salesData);
                    }
				}
			}
		}
		 List<BHGESoldToWsDTO> soldtowsdto = new ArrayList<>();
		 BHGECustomerAccountWsDTO  bhgeCustomerAccountWsDTO = new BHGECustomerAccountWsDTO(); 
		  
		  for (BHGESoldTo bhgeSoldTo : salesAreaDataMap) 
		  {
			  
			  BHGESoldToWsDTO soldtodto = getDataMapper().map(bhgeSoldTo,BHGESoldToWsDTO.class, "FULL");
			 
		  	soldtowsdto.add(soldtodto);
		  }
	
		bhgeCustomerAccountWsDTO.setB2bUnits(b2bUnitWsDTO); 
		bhgeCustomerAccountWsDTO.setBhgeSoldTo(soldtowsdto);
		
		//bhgeCustomerAccountWsDTO.setRecentSalesArea(bhgeCustomerData.getRecentSalesArea());
	    bhgeCustomerAccountWsDTO.setSelecteddefaultSoldTo(bhgeCustomerData.getDefaultSoldTo());
	    bhgeCustomerAccountWsDTO.setSelecteddefaultSalesArea(bhgeCustomerData.getDefaultSalesArea());
	    
	    
	    
	    return bhgeCustomerAccountWsDTO;
		
}
	
	@RequestMapping(value = "/getSalesAreaForSoldTo", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getSalesAreaForSoldTo", summary = "getSalesAreaForSoldTo ")
	@ApiBaseSiteIdAndUserIdParam
	public List<BHGESoldToWsDTO> getSalesAreaForSoldToAccPage(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "SoldTo Id", required = true) @RequestParam("SoldTo Id") String soldToUid) 
			throws CMSItemNotFoundException
	{
		soldToUid = StringEscapeUtils.escapeHtml4(null != soldToUid ? (("0000000000" + soldToUid).substring(soldToUid.length())) : null);
		LOG.info("SoldTo Id is " + soldToUid);
		List<BHGESoldToWsDTO> soldtowsdto = new ArrayList<>();
		try
		{
			final Set<B2BUnitModel> salesAreasList = bhgeUserProfileFacade.getSalesAreaForSoldTo(
					StringEscapeUtils.escapeHtml4(soldToUid), (GEEdgeCustomerModel) userService.getCurrentUser());
			final Set<BHGESoldTo> salesAreaData = bhgeSoldToUtil.convertSalesAreaModelToData(salesAreasList);
			final List<BHGESoldTo> salesAreaListData = new ArrayList<BHGESoldTo>(salesAreaData);

			Collections.sort(salesAreaListData, new Comparator<BHGESoldTo>()
			{
				public int compare(final BHGESoldTo p1, final BHGESoldTo p2)
				{
					if (p1 != null && p1.getBaseStoreName() != null && p2 != null && p2.getBaseStoreName() != null)
					{
						return p1.getBaseStoreName().compareToIgnoreCase(p2.getBaseStoreName());
					}
					return 0;
				}
			});
			
			
			  for (BHGESoldTo bhgeSoldTo : salesAreaListData) 
			  {
				  
				  BHGESoldToWsDTO soldtodto = getDataMapper().map(bhgeSoldTo,BHGESoldToWsDTO.class, "FULL");
				 
			  	soldtowsdto.add(soldtodto);
			  }

			 return soldtowsdto;
		}
		catch (final Exception e)
		{
			LOG.debug("Get Sales Area for Soldto: " + e);
		}
		return soldtowsdto;
	}
	
    @RequestMapping(value = "/order-details", method =  RequestMethod.GET )
	@ResponseBody
	@Operation(operationId = "order-details", summary = "order details ")
	@ApiBaseSiteIdAndUserIdParam
	public BHGECustomerFormDataWsDTO getOrderDetailsSummary(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId)
			throws CMSItemNotFoundException {
		// model.addAttribute(TITLE_DATA_ATTR, userFacade.getTitles());
		
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		BHGECustomerFormDataWsDTO bhgeCustomerFormDtatWsDTO = new BHGECustomerFormDataWsDTO();
		
		final List<ShippingCarrierMethodData> prepayCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("prepay_add");
		final List<ShippingCarrierMethodData> collectCarrierTypes = bhgeCheckoutFacade.retriveCarrierMethods("collect");
		bhgeCustomerFormDtatWsDTO.setIsShipCompleteOrder(bhgeCustomerData.getIsShipCompleteOrder());
	    bhgeCustomerFormDtatWsDTO.setPrepayAddTypes(getShippingCarrierMethodDataWsDTOList(prepayCarrierTypes));
		bhgeCustomerFormDtatWsDTO.setCollectTypes(getShippingCarrierMethodDataWsDTOList(collectCarrierTypes));
		
        if (bhgeCustomerData.getDeliveryAccount() == null || StringUtils.isEmpty(bhgeCustomerData.getDeliveryAccount()) || StringUtils.isBlank(bhgeCustomerData.getDeliveryAccount())) {
			
        	bhgeCustomerFormDtatWsDTO.setDeliveryAccount(StringUtils.EMPTY);
	     }
	     else {
	    	 bhgeCustomerFormDtatWsDTO.setDeliveryAccount(bhgeCustomerData.getDeliveryAccount());
	     } 
        
       if (bhgeCustomerData.getDeliveryOptions() == null || StringUtils.isEmpty(bhgeCustomerData.getDeliveryOptions()) || StringUtils.isBlank(bhgeCustomerData.getDeliveryOptions())) {
			
        	bhgeCustomerFormDtatWsDTO.setDeliveryOptions(StringUtils.EMPTY);
	     }
	     else {
	    	 bhgeCustomerFormDtatWsDTO.setDeliveryOptions(bhgeCustomerData.getDeliveryOptions());
	     } 
		
       if (bhgeCustomerData.getShippingContactName() == null || StringUtils.isEmpty(bhgeCustomerData.getShippingContactName()) || StringUtils.isBlank(bhgeCustomerData.getShippingContactName())) {
			
       	bhgeCustomerFormDtatWsDTO.setShippingContactName(StringUtils.EMPTY);
       	
	     }
	     else {
	    	 bhgeCustomerFormDtatWsDTO.setShippingContactName(bhgeCustomerData.getShippingContactName());
	     } 
       
       if (bhgeCustomerData.getShippingContactNumber() == null || StringUtils.isEmpty(bhgeCustomerData.getShippingContactNumber()) || StringUtils.isBlank(bhgeCustomerData.getShippingContactNumber())) {
			
          	bhgeCustomerFormDtatWsDTO.setShippingContactNumber(StringUtils.EMPTY);
          	
   	     }
   	     else {
   	    	bhgeCustomerFormDtatWsDTO.setShippingContactNumber(bhgeCustomerData.getShippingContactNumber());
   	     } 
       
       if (bhgeCustomerData.getSendShippingNotificationEmail() == null || StringUtils.isEmpty(bhgeCustomerData.getSendShippingNotificationEmail()) || StringUtils.isBlank(bhgeCustomerData.getSendShippingNotificationEmail())) {

    	   bhgeCustomerFormDtatWsDTO.setSendShippingNotificationEmail(StringUtils.EMPTY);

       }
       else {
    	   bhgeCustomerFormDtatWsDTO.setSendShippingNotificationEmail(bhgeCustomerData.getSendShippingNotificationEmail());
       } 
       
      bhgeCustomerFormDtatWsDTO.setDeliveryCarrier(bhgeCustomerData.getDeliveryCarrier());
     // bhgeCustomerFormDtatWsDTO.setselectedDeliveryCarrier(bhgeCustomerData.getDeliveryCarrier());
      LOG.info("order details working propely");
       return bhgeCustomerFormDtatWsDTO;
		
		}
    
    
	
	
    @RequestMapping(value = "/getCurrency", method =  RequestMethod.GET )
	@ResponseBody
	@Operation(operationId = "currency format", summary = "currencyformat")
	@ApiBaseSiteIdAndUserIdParam
	public BHGECurrencyFormatDataListWsDTO getCurrency(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId)
			throws CMSItemNotFoundException {
		// model.addAttribute(TITLE_DATA_ATTR, userFacade.getTitles());

		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		
		List<BHGECurrencyFormatData> currencyFormatDataList = bhgeUserProfileFacade.getCurrencyFormats();
		List<BHGECurrencyFormatDataWsDTO> currenctFormatListWsDTO = new ArrayList<>();
		BHGECurrencyFormatDataListWsDTO currencyFormats = new BHGECurrencyFormatDataListWsDTO();
		for(BHGECurrencyFormatData data : currencyFormatDataList) {
			BHGECurrencyFormatDataWsDTO dto = getDataMapper().map(data, BHGECurrencyFormatDataWsDTO.class);
			currenctFormatListWsDTO.add(dto);
		}
		currencyFormats.setCurrencyFormatList(currenctFormatListWsDTO);
		BHGECurrencyFormatData defaultCurrencyFormat = bhgeCustomerData.getDefaultCurrencyFormat();
		currencyFormats.setSelectedcurrencyFormat(bhgeCustomerData.getDefaultCurrencyFormat());
		//currencyFormats.setSelectedcurrencyFormat(getDataMapper().map(defaultCurrencyFormat, BHGEDefaultCurrencyFormatWsDTO.class));
		return getDataMapper().map(currencyFormats, BHGECurrencyFormatDataListWsDTO.class, "FULL");
		
}
	//Ship To Code after discusstion with Nitis
	
    @RequestMapping(value = "/getShipToAddress", method =  RequestMethod.GET )
   	@ResponseBody
   	@Operation(operationId = "ship to", summary = "ship-to ")
   	@ApiBaseSiteIdAndUserIdParam
   	
   	public List<AddressFormWsDTO> getShipToAddressSalesArea(@RequestParam("salesArea") String salesArea)
   	       throws CMSItemNotFoundException {    
	
    	final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData gEEdgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		final List<AddressFormWsDTO> addressFormWsList = new ArrayList<AddressFormWsDTO>();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		final GetAddressFormData form = new GetAddressFormData();
		form.setPageNo("0");
		form.setPageSize("1000");
		form.setZipCode("");
		form.setState("");
		form.setB2bUnit(StringEscapeUtils.escapeHtml4(salesArea));
		final boolean accountPageFlag = true;
		final SearchPageData<AddressData> searchPageData = bhgeUserProfileFacade.getAddressForSalesArea(form, accountPageFlag,true);
		final List<AddressData> results = searchPageData.getResults();
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		for (final AddressData data : results)
		{
			final AddressFormWsDTO addressFormWsDTO = new AddressFormWsDTO();
			addressFormWsDTO.setLine1(StringUtils.isNotEmpty(data.getLine1()) ? data.getLine1() : "");
			addressFormWsDTO.setLine2(StringUtils.isNotEmpty(data.getLine2()) ? data.getLine2() : "");
			addressFormWsDTO.setAddressId(data.getId());
			addressFormWsDTO.setTownCity(StringUtils.isNotEmpty(data.getTown()) ? data.getTown() : "");
			addressFormWsDTO.setFirstName(StringUtils.isNotEmpty(data.getFirstName()) ? data.getFirstName() : "");
			addressFormWsDTO.setPostcode(data.getPostalCode());
			addressFormWsDTO.setSapCustomerID(data.getSapCustomerID());
		    if (data.getRegion() != null)
			{
				addressFormWsDTO.setLastName(StringUtils.isNotEmpty(data.getRegion().getName()) ? data.getRegion().getName() : "");
				addressFormWsDTO.setLastName(StringUtils.isNotEmpty(data.getRegion().getName()) ? data.getRegion().getName() : "");
			}
			addressFormWsDTO.setTitleCode(data.getCompanyName());
			addressFormWsDTO.setCountryIso(data.getCountry().getName());
			
		/*	if(bhgeCustomerData.getDefaultShipTo() != null && bhgeCustomerData.getDefaultShipTo().equalsIgnoreCase(data.getId())) {
				addressFormWsDTO.setSelected(true);
			}else {
				addressFormWsDTO.setSelected(false);
			}*/
			if(null != currentUser.getDefaultB2BUnit() && currentUser.getDefaultShipTo()!=null) {
				AddressData defaultShipToData = addressConverter.convert(currentUser.getDefaultShipTo());
				if( defaultShipToData.getId().equalsIgnoreCase(data.getId())) {
					addressFormWsDTO.setSelected(true);
				}else {
					addressFormWsDTO.setSelected(false);
				}
			}else {
				if(bhgeCustomerData.getDefaultShipTo() != null && bhgeCustomerData.getDefaultShipTo().equalsIgnoreCase(data.getId())) {
					addressFormWsDTO.setSelected(true);
				}else {
					addressFormWsDTO.setSelected(false);
				}
			}
			
			//setting selected value for cart drop down
			if (bhgeCartService.getSessionCart() != null
					&& StringUtils.isNotBlank(bhgeCartService.getSessionCart().getEndUserNumber()))
			{
				if (bhgeCartService.getSessionCart().getEndUserNumber().equalsIgnoreCase(data.getSapCustomerID()))
				{
					addressFormWsDTO.setSelected(true);
				}
			}
			addressFormWsList.add(addressFormWsDTO);
		}
			Collections.sort(addressFormWsList, new Comparator<AddressFormWsDTO>()
			{
				public int compare(final AddressFormWsDTO p1, final AddressFormWsDTO p2)
				{
					if (p1 != null && p1.getTitleCode() != null && p2 != null && p2.getTitleCode() != null)
					{
						return p1.getTitleCode().compareToIgnoreCase(p2.getTitleCode());
					}
					return 0;
				}
			});
			LOG.info("ship to page working propely");
			return addressFormWsList;
			
    }
	
	
    
    
   //POST call 
    

	@Operation(operationId = "personaldetails", summary = "Sets the personal details", description = "sets the personal details")
	@RequestMapping(value = "/personal-details", method = RequestMethod.POST)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public ResponseEntity<String> setPersonalDetails(@Parameter(description = "Takes User Details.")  @RequestBody final BHGEPersonalDetailsWsDTO details,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {
		
		
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());

		bhgeCustomerData.setFirstName(details.getFirstName());
		bhgeCustomerData.setLastName(details.getLastName());
		bhgeCustomerData.setEmail(details.getEmail());
		bhgeCustomerData.setDisplayUid(details.getDisplayUid());
		bhgeCustomerData.setLastLogin(details.getLastLogin());
		
		bhgeUserProfileFacade.updateUserProfileWs(bhgeCustomerData);
		return new ResponseEntity<>("Success", HttpStatus.OK); 
	}
	
	@Operation(operationId = "notification", summary = "Sets the personal details", description = "sets the personal details")
	@RequestMapping(value = "/notification", method = RequestMethod.POST)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	
	public ResponseEntity<String> setNotification(@Parameter(description = "Takes User Details.") @RequestBody final BHGENotificationWsDTO notification) {
		
		LOG.info("US552962 : inside setNotification /notification");
        final CustomerData customerData = customerFacade.getCurrentCustomer();
        LOG.info("US552962 : CustomerUid" +customerData.getUid());
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());

		bhgeCustomerData.setSendInvoiceEmail(notification.getSendInvoiceEmail());
		//bhgeCustomerData.setSendShippingNotificationEmail(notification.getSendShippingNotificationEmail());
		bhgeCustomerData.setSendSalesOrderEmail(notification.getSendSalesOrderEmail());
		// Added New fields For SOA
		bhgeCustomerData.setInvoiceContact(notification.getInvoiceContact());
		bhgeCustomerData.setInvoicePhone(notification.getInvoicePhone());
		bhgeCustomerData.setSoaContact(notification.getSoaContact());
		bhgeCustomerData.setSoaPhone(notification.getSoaPhone());

        bhgeCustomerData.setOrderBlockEmailNotification(notification.getOrderBlockEmailNotification());
        bhgeCustomerData.setOrderBlockReleaseEmailNotification(notification.getOrderBlockReleaseEmailNotification());
        bhgeCustomerData.setOrderShipDateChanged(notification.getOrderShipDateChanged());
	
		
		bhgeUserProfileFacade.updateUserProfileWs(bhgeCustomerData);
		return new ResponseEntity<>("Success", HttpStatus.OK);
		
	}
	
	@Operation(operationId = "customeraccount", summary = "Sets the customer account", description = "sets the customer account")
	@RequestMapping(value = "/customer-account", method = RequestMethod.POST)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public ResponseEntity<String> setCustomerAccount(@Parameter(description = "Takes User Details.")  @RequestBody final BHGECustomerAccountFormWsDTO customeraccount) {
		
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		BHGECustomerAccountWsDTO bhgeCustomerAccountWsDTO = new BHGECustomerAccountWsDTO();

		bhgeCustomerData.setDefaultShipTo(customeraccount.getDefaultShipTo());
		bhgeCustomerData.setDefaultSalesArea(customeraccount.getDefaultSalesArea());
		bhgeCustomerData.setDefaultSoldTo(customeraccount.getDefaultSoldTo());
		
		bhgeUserProfileFacade.updateUserProfileWs(bhgeCustomerData);
		return new ResponseEntity<>("Success", HttpStatus.OK);
	
}
	
	@Operation(operationId = "orderdetails", summary = "Sets the order details", description = "sets the order details")
	@RequestMapping(value = "/order-details", method = RequestMethod.POST)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public  ResponseEntity<String> setOrderDetailsSummary(@Parameter(description = "Takes User Details.")  @RequestBody final BHGECustomerFormFormatWsDTO orderdetails ) {
		
		
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		BHGECustomerFormDataWsDTO bhgeCustomerFormDataWsDTO = new BHGECustomerFormDataWsDTO();	
		bhgeCustomerData.setDefaultSoldTo(orderdetails.getDefaultSoldTo());
		bhgeCustomerData.setDeliveryAccount(orderdetails.getDeliveryAccount());
		bhgeCustomerData.setDeliveryCarrier(orderdetails.getDeliveryCarrier());
	    bhgeCustomerData.setDeliveryOptions(orderdetails.getDeliveryOptions());
	    bhgeCustomerData.setShippingContactName(orderdetails.getShippingContactName());
	    bhgeCustomerData.setShippingContactNumber(orderdetails.getShippingContactNumber());
	    bhgeCustomerData.setIsShipCompleteOrder(orderdetails.getIsShipCompleteOrder());
	    bhgeCustomerData.setDefaultSalesArea(StringEscapeUtils.escapeHtml4(orderdetails.getDefaultSalesArea()));
	    bhgeCustomerData.setSendShippingNotificationEmail(orderdetails.getSendShippingNotificationEmail());
		
		
		bhgeUserProfileFacade.updateUserProfileWs(bhgeCustomerData);
		return new ResponseEntity<>("Success", HttpStatus.OK);
}
	
	private List<ShippingCarrierMethodDataWsDTO> getShippingCarrierMethodDataWsDTOList(List<ShippingCarrierMethodData> prepayCarrierTypes){
		 List<ShippingCarrierMethodDataWsDTO> shippingCarrierMethodDataWsDTOList = new ArrayList<ShippingCarrierMethodDataWsDTO>();
	        prepayCarrierTypes.forEach(shippingCarrierMethodData -> {
	            shippingCarrierMethodDataWsDTOList.add(getDataMapper().map(shippingCarrierMethodData, ShippingCarrierMethodDataWsDTO.class, "FULL"));
	                }
	        );
	        return shippingCarrierMethodDataWsDTOList;
	}
	
	
	@Operation(operationId = "currenctFormat", summary = "Sets the order currenctFormat", description = "sets the currenctFormat")
	@RequestMapping(value = "/setCurrency", method = RequestMethod.POST)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public ResponseEntity<String> setCurrency(@Parameter(description = "Takes User Details.") @RequestBody final BHGEDefaultCurrencyFormatWsDTO currency) {
		// model.addAttribute(TITLE_DATA_ATTR, userFacade.getTitles());

		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		BHGEDefaultCurrencyFormatWsDTO bhgeDefaultCurrencyFormatWsDTO = new BHGEDefaultCurrencyFormatWsDTO();
		

		if (bhgeCustomerData.getDefaultCurrencyFormat() != null)
		{
			bhgeCustomerData.setDefaultCurrencyFormat(currency.getDefaultCurrencyFormat());
		}
		
		
		bhgeUserProfileFacade.updateUserProfileWs(bhgeCustomerData);
		return new ResponseEntity<>("Success", HttpStatus.OK);
	
	}
	
	
	@Operation(operationId = "shipTo", summary = "Sets the order shipTo", description = "sets the shipTo")
	@RequestMapping(value = "/shipTo", method = RequestMethod.POST)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public  ResponseEntity<String> setShipTo(@Parameter(description = "Takes User Details.") @RequestBody final BHGEDefaultShipToWsDTO shipto) {
		// model.addAttribute(TITLE_DATA_ATTR, userFacade.getTitles());

		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());
		BHGEDefaultShipToWsDTO bhgeDefaultShipToWsDTO = new BHGEDefaultShipToWsDTO();
		bhgeCustomerData.setDefaultShipTo(shipto.getDefaultShipTo());
		bhgeUserProfileFacade.updateUserProfileWs(bhgeCustomerData);
		return new ResponseEntity<>("Success", HttpStatus.OK);
	}
	
	
	@Operation(operationId = "validateFilmPart", summary = "Sets the order ShipToAddress", description = "sets the ShipToAddress")
	@RequestMapping(value = "/validateFilmPart", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public Map<String, String> validateFilmPart(
			@Parameter(description = "partNum") @RequestParam(value = "partNum", required = true) final String partNum,
			@Parameter(description = "Takes User Details.") @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {

		final CustomerData customerData = customerFacade.getCurrentCustomer();
//		final ValidateFilmPartWsDTO validateFilmPartWsDTO  = new ValidateFilmPartWsDTO();
		final BHGECustomerData bhgeCustomerData = bhgeUserProfileFacade.getUserProfile(customerData.getUid());


		final Map<String, String> status = new HashMap<String, String>();
		if (org.apache.commons.lang3.StringUtils.isBlank(partNum) || null == partNum) {
			status.put("error", "Please enter Part#");
			status.put("isFilm", "false");
//			validateFilmPartWsDTO.setStatus(status);
			return status;
		}
		ProductModel productModel = null;

		if (org.apache.commons.lang3.StringUtils.isNotEmpty(partNum)) {
			productModel = userProfileService.getProductForCode(partNum);
		}
		if (null == productModel) {
			status.put("error", "Invalid Part# " + StringEscapeUtils.escapeHtml4(partNum));
			status.put("isFilm", "false");
//			validateFilmPartWsDTO.setStatus(status);

			return status;
		}
		final GEEdgeProductModel product = (GEEdgeProductModel) productModel;
		//Restrict products for FPT and non FPT products based on user role
		if (!productService.isVisibleForCurrentUser(product)) {
			status.put("error", "Invalid Part# " + StringEscapeUtils.escapeHtml4(partNum));
			status.put("isFilm", "false");
//			validateFilmPartWsDTO.setStatus(status);
			return status;
		}
		if (GEEdgeProductType.ITFILM.equals(product.getProductType())) {
			status.put("error", "");
			status.put("isFilm", "true");
		} else {
			status.put("error", "");
			status.put("isFilm", "false");
		}
		return status;

	}

	@Operation(operationId = "inventoryCheckWidget", summary = "inventoryCheckWidget", description = "inventoryCheckWidgets")
	@RequestMapping(value = "/inventoryCheckWidget", method = {RequestMethod.GET, RequestMethod.POST})
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public BHGEInventoryDataWsDTO inventoryCheckWidget(
			@Parameter(description = "availabilityCheckForm") @RequestBody final BHGEAvailabilityCheckForm availabilityCheckForm,
			@Parameter(description = "Takes User Details.") @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) {

		String productCode = "";
		CartModel cartModel = null;
		final CartData cartData = new CartData();
		String obsoletePart = null;
		ProductData productData = null;
		final BHGEInventoryData bhgeInventoryData = new BHGEInventoryData();
		final List<ProductData> replacementPartsList = new ArrayList<ProductData>();

		try {

			if (null == availabilityCheckForm) {
				//model.addAttribute("error", "");
				bhgeInventoryData.setError(null);
				LOG.debug("Availability Check Form is Null");
//				return bhgeInventoryData;
				//return ControllerConstants.Views.Pages.INVENTORY_CHECK_WIDGET;
			}

			final String isHomePage = availabilityCheckForm.getIsHomePage();
			final String isInvPage = availabilityCheckForm.getIsInvPage();

			if (org.apache.commons.lang3.StringUtils.isNotBlank(isHomePage) && Boolean.valueOf(isHomePage)) {
				//model.addAttribute("isHomePage", Boolean.valueOf(isHomePage));
				bhgeInventoryData.setIsHomePage(Boolean.valueOf(isHomePage));
			} else if (org.apache.commons.lang3.StringUtils.isNotBlank(isInvPage) && Boolean.valueOf(isInvPage)) {
				//model.addAttribute("isInvPage", Boolean.valueOf(isInvPage));
				bhgeInventoryData.setIsInvPage(Boolean.valueOf(isInvPage));
			}
			if (null == availabilityCheckForm.getPartNum()) {
				//model.addAttribute("error", "");
				bhgeInventoryData.setError(null);
//				return bhgeInventoryData;
				//return ControllerConstants.Views.Pages.INVENTORY_CHECK_WIDGET;
			}
			productCode = StringEscapeUtils.escapeHtml4(availabilityCheckForm.getPartNum());

			final Integer qty = (null != availabilityCheckForm.getQty() && org.apache.commons.lang3.StringUtils.isNotBlank(availabilityCheckForm.getQty())
					&& Integer.parseInt(availabilityCheckForm.getQty()) > 0) ? Integer.valueOf(availabilityCheckForm.getQty()) : 1;


			final BHGEAvailabilityCheckFormData formData = new BHGEAvailabilityCheckFormData();
			formData.setPartNum(productCode);
			formData.setQty(qty);

			if (org.apache.commons.lang3.StringUtils.isNotBlank(availabilityCheckForm.getDefaultShipTo())) {
				formData.setDefaultShipTo(availabilityCheckForm.getDefaultShipTo());
			}
			if (org.apache.commons.lang3.StringUtils.isNotBlank(availabilityCheckForm.getEndCustomerRefNum())) {
				formData.setEndCustomerRefNum(availabilityCheckForm.getEndCustomerRefNum());
			}
			LOG.debug("########################## CheckRealTimePrice and Availability for Product: " + productCode + " from "
					+ " ############### ");
			cartModel = bhgeCartFacade.getAvailabilityDetailsForMaterialsForWS(formData, bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser().getUid());

			if (null != cartModel) {
				final GEEdgeProductModel productModel = (GEEdgeProductModel) userProfileService.getProductForCode(productCode);
				if (null != availabilityCheckForm.getDefaultPlant() && org.apache.commons.lang3.StringUtils.isNotEmpty(availabilityCheckForm.getDefaultPlant())
						&& org.apache.commons.lang3.StringUtils.equals(isHomePage, "true")) {
					cartModel.setIsShipCompleteOrder(Boolean.TRUE);
					bhgeCartService.updateDefaultPlantForEntry(cartModel.getCode(), availabilityCheckForm.getDefaultPlant(), 0);
					//model.addAttribute("availbilityList", "true");
					bhgeInventoryData.setAvailbilityList(true);
				}
				productData = bhgeProductFacadeImpl.getProductForOptions(productModel, OPTIONS);
				productData.setConfigurable(productModel.getSapConfigurable());
				final PriceData priceData = bhgeProductFacadeImpl.getProductPriceData(productModel.getCode());
				if (null != priceData) {
					LOG.debug("Availability Check: Price " + priceData.getFormattedValue());
				}

				productData.setPrice(priceData);
				final BHGEProductUtil productUtil = new BHGEProductUtil();
				final HybrisStatus hybrisStatus;

				hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(productModel, userService);
				if (hybrisStatus != null && "OBSOLETE".equals(hybrisStatus.getCode())) {
					obsoletePart = productModel.getCode();
					final Collection<ProductReferenceModel> refCollection = productModel.getProductReferences();
					for (final ProductReferenceModel refModel : refCollection) {
						if (null != refModel.getReferenceType() && "OBSOLETE".equals(refModel.getReferenceType().getCode())) {
							final GEEdgeProductModel targetProd = (GEEdgeProductModel) refModel.getTarget();
							final ProductData replacementPartData = bhgeProductFacadeImpl.getProductForOptions(targetProd, OPTIONS);
							replacementPartData.setConfigurable(targetProd.getSapConfigurable());
							replacementPartsList.add(replacementPartData);
						}
					}
				} else {
					replacementPartsList.add(productData);
				}

				bhgeCartPopulator.populate(cartModel, cartData);
				bhgeCartFacade.removeCart(cartModel);
			}
			else
			{
				LOG.debug("Availability Check: Cart Model is Null");
				final GEEdgeProductModel productModel = (GEEdgeProductModel) userProfileService.getProductForCode(productCode);
				productData = bhgeProductFacadeImpl.getProductForOptions(productModel, OPTIONS);
				bhgeInventoryData.setProductData(productData);
				//cartData = null;
				//model.addAttribute("error", productCode);
				//bhgeInventoryData.setError(productCode);
			}
//			if (null != ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency())
			if (null != bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser().getCurrency())
			{
//				bhgeInventoryData.setCurrencyISO(((BHGESoldToData) sessionService.getAttribute("sessionSoldTo")).getCurrency().getIsocode());
				bhgeInventoryData.setCurrencyISO(bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser().getCurrency().getIsocode());
				bhgeInventoryData.setCurrencyFormattedValue(bhgeSoldToUtil.getDefaultB2BUnitModelCurrentUser().getCurrency().getIsocode());
			}

			bhgeInventoryData.setProductData(productData);
			bhgeInventoryData.setCartData(cartData);
			bhgeInventoryData.setObsoletePart(obsoletePart);
			bhgeInventoryData.setReplacementPartsList(replacementPartsList);
			bhgeInventoryData.setDiscountNotAvailable(Config.getParameter("DISC_PRICE_NOTAVBL"));
			bhgeInventoryData.setPriceNotAvblMessage(
					Config.getString("cart.priceNotAvbl", "Unable to calculate Your Price at this time. Please try again later"));
			bhgeInventoryData.setShippingDateNotAvblMessage(Config.getString("cart.shippingDateNotAvbl",
					"Unable to calculate estimated shipping date at this time. Please try again later"));
			bhgeInventoryData.setIsEndUserValid(true);
			BHGEInventoryDataWsDTO bhgeInventoryDataWsDTO = getDataMapper().map(bhgeInventoryData,BHGEInventoryDataWsDTO.class,"FULL");
			return bhgeInventoryDataWsDTO;

		} catch (final Exception e) {
			//model.addAttribute("error", productCode);
			bhgeInventoryData.setError(productCode);
			LOG.error("Error occured while checking the inventory " + productCode + e);
			e.printStackTrace();
			return getDataMapper().map(bhgeInventoryData,BHGEInventoryDataWsDTO.class,"FULL");

//			return bhgeInventoryData;
		}

	}

}
