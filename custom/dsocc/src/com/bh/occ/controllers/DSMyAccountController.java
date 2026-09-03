/**
 *
 */
package com.bh.occ.controllers;

import com.bhge.core.data.CustomerAccountData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.rma.BHGERMAStatusFacade;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.bhge.facades.user.data.BHGECustomerData;
import com.ds.dsocc.bulkOrder.dto.BHGECustomerDataWsDTO;
import com.ds.dsocc.common.dto.BHGECustomerAccountWsDTO;
import com.ds.dsocc.myprofile.data.B2bUnitListData;
import com.ds.dsocc.myprofile.dto.B2bUnitListWsDTO;
import com.ds.dsocc.rma.dto.CustomerAccountDataWsDTO;
import com.google.common.base.Stopwatch;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.commercefacades.customer.CustomerFacade;
import de.hybris.platform.commercefacades.user.data.CustomerData;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservicescommons.dto.user.UserWsDTO;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;


/**
 * @author 212722447
 *
 */
@Controller
@ApiVersion("v2")
@Tag(name = "My Profile")
@RequestMapping(value = "/{baseSiteId}")
public class DSMyAccountController extends DSBaseController
{

	private static final Logger LOG = LoggerFactory.getLogger(DSMyAccountController.class);
	
	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;
	
	@Resource(name = "bhgeRMAStatusFacade")
	BHGERMAStatusFacade bhgeRMAStatusFacade;

	@Resource(name = "b2bCustomerFacade")
	private CustomerFacade customerFacade;

	@Resource(name = "userService")
	private UserService userService;

    @Resource(name = "bhgeCartFacade")
    private BHGECartFacade bhgeCartFacade;

	@Operation(operationId = "getMyProfile", summary = "Gets the current user details", description = "Returns customer profile")
	@RequestMapping(value = "/users/{userId}/myprofile", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public UserWsDTO getMyProfileDetails(@ApiFieldsParam
	@RequestParam(defaultValue = DEFAULT_FIELD_SET)
	final String fields)
	{
		LOG.info("Entered into My profile Controller");
		final BHGECustomerData customerData = bhgeUserProfileFacade.getCurrentCustomer();
		return getDataMapper().map(customerData, UserWsDTO.class, StringEscapeUtils.escapeHtml4( fields));
	}
	
	
	
	@Operation(operationId = "getRecentSoldto", summary = "Gets the B2Bunits for Customer", description = "Returns recent B2BUnits")
	@RequestMapping(value = "/users/{userId}/getRecentSoldto", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public B2bUnitListWsDTO getCustomerDetails(@ApiFieldsParam
	@RequestParam(defaultValue = DEFAULT_FIELD_SET)
	final String fields)
	{
		final B2bUnitListData b2bUnitListData = new B2bUnitListData();
		final List<B2BUnitData> b2bUnitDatas = bhgeUserProfileFacade.getCustomerB2Buntis();
		b2bUnitListData.setB2bUnits(b2bUnitDatas);
		/*
		 * return getDataMapper().map(b2bUnitListData, B2bUnitListWsDTO.class, fields);
		 */
		return getDataMapper().map(b2bUnitListData, B2bUnitListWsDTO.class, StringEscapeUtils.escapeHtml4( fields));

		}
	
	
	@Operation(operationId = "getFavouriteSoldtoUnit", summary = "Gets the Favourite B2Bunits for Customer", description = "Returns Favourite B2Bunits")
	@RequestMapping(value = "/users/{userId}/favouriteSoldtoUnit", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public B2bUnitListWsDTO getFavouriteSoldToUnit(@ApiFieldsParam
	@RequestParam(defaultValue = DEFAULT_FIELD_SET)
	final String fields)
	{
		final B2bUnitListData b2bUnitListData = new B2bUnitListData();
		final List<B2BUnitData> b2bUnitDatas = bhgeUserProfileFacade.getFavoriteSoldTosforSearch();
		b2bUnitListData.setB2bUnits(b2bUnitDatas);
		/*
		 * return getDataMapper().map(b2bUnitListData, B2bUnitListWsDTO.class, fields);
		 */
		return getDataMapper().map(b2bUnitListData, B2bUnitListWsDTO.class, StringEscapeUtils.escapeHtml4( fields));

		}
	
	@RequestMapping(value = "/users/{userId}/addFavouriteSoldto", method = RequestMethod.PUT)
	@ResponseBody
	@Operation(operationId = "Add a B2BUnit as Favourite", description = "Add a B2BUnit as Favourite")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public void addFavoriteSoldTo(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "Customer Account Id", required = true) @RequestParam final String soldToUid)
	{
		final B2BUnitModel favoriteSoldTo = bhgeUserProfileFacade.findChildB2BUnitModel(soldToUid);
		bhgeUserProfileFacade.addFavoriteSoldTo(favoriteSoldTo);
	}

	
	@RequestMapping(value = "/users/{userId}/removeFavoriteSoldTo", method = RequestMethod.DELETE)
	@ResponseBody
	@Operation(operationId = "Remove a B2BUnit as Favourite", description = "Remove a B2BUnit as Favourite")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public void removeFavoriteSoldTo(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "Customer Account Id", required = true) @RequestParam final String soldToUid)
	{
		bhgeUserProfileFacade.removeFavoriteSoldTo(soldToUid);
	}
	
	
	@RequestMapping(value = "/users/{userId}/searchSoldToUnit", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Search a list of customer accounts/b2b units", description = "Search for a list of customer accounts/b2b units based on customer account number.")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public B2bUnitListWsDTO searchLeaglEntities(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "Customer Account Id", required = true) @RequestParam final String customerAccountId,
			@RequestParam(value = "pageSize", required = false) final String pageSize)
	{
		final B2bUnitListData b2bUnitListData = new B2bUnitListData();
		final int page = 0;
		final PageableData pageableData = createPageableData(page, getPageSizes(pageSize), null);
		final SearchPageData<B2BUnitData> searchResult = bhgeUserProfileFacade
				.getSoldTosforSearch(StringEscapeUtils.escapeHtml4(customerAccountId), pageableData);
		final List<B2BUnitData> b2bUnitDatas = searchResult.getResults();
		b2bUnitListData.setB2bUnits(b2bUnitDatas);
		/*
		 * return getDataMapper().map(b2bUnitListData, B2bUnitListWsDTO.class, fields);
		 */	
		return getDataMapper().map(b2bUnitListData, B2bUnitListWsDTO.class, StringEscapeUtils.escapeHtml4( fields));

	}
	
	
	@RequestMapping(value = "/users/{userId}/updateSoldTo", method = RequestMethod.PUT)
	@ResponseBody
	@Operation(operationId = "Update Sales Area and Unit", description = "Update Sales Area and Unit")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public BHGECustomerDataWsDTO updateSoldto(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
												 @Parameter(description = "Sales Area Id", required = true) @RequestParam final String salesAreaId,
												 @Parameter(description = "SoldTo Id", required = true) @RequestParam final String soldToUid)
	{
		LOG.info("updateSoldTo  call started time : " + LocalDateTime.now());
		final Stopwatch stopwatch = Stopwatch.createUnstarted();
		stopwatch.start();
		BHGECustomerData customerData = bhgeUserProfileFacade.updateSoldToSalesArea(soldToUid, salesAreaId);
		BHGECustomerDataWsDTO customerDataWsDTO = getDataMapper().map(customerData, BHGECustomerDataWsDTO.class, "FULL");
		stopwatch.stop();
		Long timeElapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
		LOG.info("updateSoldTo call ended time taken " + timeElapsed.toString() + " time : " + LocalDateTime.now());
		return customerDataWsDTO;
	}
	
	/**
	 * Retrieves all units assigned to customer
	 * @param fields
	 */
	@RequestMapping(value = "/users/{userId}/getAllCustomerAccounts", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Gets all customer accounts assigned to user", description = "Gets all customer accounts assigned to user")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public List<CustomerAccountDataWsDTO> getAllCustomerAccounts(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		List<CustomerAccountDataWsDTO> returnList = new ArrayList<>();
		List<CustomerAccountData> customerAccountDataList =  bhgeRMAStatusFacade.fetchCustomerList();
		for(CustomerAccountData customerAccountData : customerAccountDataList)
		{
			returnList.add(getDataMapper().map(customerAccountData, CustomerAccountDataWsDTO.class, StringEscapeUtils.escapeHtml4( fields)));
		}
		return returnList;
	}
	
	
	private int getPageSizes(final String pageSize)
	{
		if (StringUtils.isBlank(pageSize))
		{
			return Integer.parseInt(Config.getParameter("bhge.soldto.search.page.size"));
		}
		else
		{
			return Integer.parseInt(pageSize);
		}

	}
	
	@RequestMapping(value = "/orgUsers/{userId}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getOrgUser", summary = "Get a B2B user profile", description = "Returns a B2B user profile.")
	@ApiBaseSiteIdAndUserIdParam
	public UserWsDTO getOrgUser(
			@ApiFieldsParam @RequestParam(required = false, defaultValue = FieldSetLevelHelper.DEFAULT_LEVEL) final String fields)
	{
		final CustomerData customerData = customerFacade.getCurrentCustomer();
		final BHGECustomerData bhgeCustomerData = new BHGECustomerData();
		bhgeCustomerData.setActive(customerData.isActive());
		bhgeCustomerData.setApprovers(customerData.getApprovers());
		bhgeCustomerData.setRoles(customerData.getRoles());
		bhgeCustomerData.setSelected(customerData.isSelected());
		bhgeCustomerData.setUnit(customerData.getUnit());
		bhgeCustomerData.setFirstName(StringEscapeUtils.escapeHtml4(customerData.getFirstName()));
		bhgeCustomerData.setLastName(StringEscapeUtils.escapeHtml4(customerData.getLastName()));
		bhgeCustomerData.setName(StringEscapeUtils.escapeHtml4(customerData.getName()));
		bhgeCustomerData.setIsPrivateFolderExists(customerData.getIsPrivateFolderExists());
		final UserWsDTO dto = getDataMapper().map(bhgeCustomerData, UserWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
		return dto;
	}

	@Operation(operationId = "getAllSoldtoUnit", summary = "Gets the all B2Bunits for Customer", description = "Returns All B2Bunits for the Customer")
	@RequestMapping(value = "/users/{userId}/allSoldtoUnit", method = RequestMethod.GET)
	@ResponseBody
	@ApiBaseSiteIdAndUserIdParam
	public B2bUnitListWsDTO getAllSoldtoUnit(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		final B2bUnitListData b2bUnitListData = new B2bUnitListData();
		final List<B2BUnitData> b2bUnitDatas = bhgeUserProfileFacade.getAllSoldTosforSearch();
		b2bUnitListData.setB2bUnits(b2bUnitDatas);
		return getDataMapper().map(b2bUnitListData, B2bUnitListWsDTO.class, StringEscapeUtils.escapeHtml4( fields));

	}

	@PutMapping(value = "/users/{userId}/updateProductLine")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseBody
	@Operation(operationId = "Update Product Line", description = "Update Product Line")
	public void updateProductLine(@RequestParam(value = "productLine") final String productLine,
								  @PathVariable String baseSiteId, @PathVariable String userId)
	{
		if (StringUtils.isNotBlank(productLine)) {
			try {
				LOG.info("updateProductLine call started time : " + LocalDateTime.now());
				final Stopwatch stopwatch = Stopwatch.createUnstarted();
				stopwatch.start();
				bhgeUserProfileFacade.updateProductLine(productLine);
				stopwatch.stop();
				Long timeElapsed = stopwatch.elapsed(TimeUnit.MILLISECONDS);
				LOG.info("updateProductLine call ended time taken " + timeElapsed.toString() + " time : " + LocalDateTime.now());
			} catch (Exception e) {
				LOG.error("Error while updating product line", e.getMessage());
			}
		}
	}

    @RequestMapping(value = "/users/{userId}/deleteAllCarts", method = RequestMethod.DELETE)
    @Operation(operationId = "Delete all carts", summary = "Delete all carts for User")
    @ApiBaseSiteIdUserIdAndCartIdParam
    @ResponseStatus(HttpStatus.OK)
    public void deleteAllCarts(@Parameter(description = "b2bUnit", required = false) @RequestParam  String b2bUnit,
                               @Parameter(description = "salesOrg", required = false) @RequestParam String salesOrg,
                               @Parameter(description = "commerceType", required = false) @RequestParam String commerceType)
    {
        UserModel user = userService.getCurrentUser();
        LOG.info("DSMyAccountController: delete all carts for user " + user.getUid());
        bhgeCartFacade.deleteAllCarts(user,b2bUnit,salesOrg,commerceType);
    }

}
