package com.bh.occ.controllers;

import com.bhge.facades.data.BhgeSalesAreaObjectData;
import com.bhge.facades.data.BhgeSalesAreaObjectListData;
import com.bhge.facades.user.BHGEUserProfileFacade;
import com.ds.dsocc.myprofile.data.BhgeSalesAreaObjectListWsDTO;
import com.ds.dsocc.myprofile.data.BhgeSalesAreaObjectWsDTO;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import java.util.List;

/**
 * @author 212722447
 *
 */
@Controller
@ApiVersion("v2")
@Tag(name = "Guest Profile Data")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSGuestHomePageController  extends DSBaseController
{

	@Resource(name = "bhgeUserProfileFacade")
	private BHGEUserProfileFacade bhgeUserProfileFacade;

		
	@RequestMapping(value = "/getSalesOrgforGuestUser/{salesOrgId}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getAllSalesOrgforGuestUser", summary = "Gets list of SalesOrg for GuestUser", description = "Returns a list of SalesOrg for GuestUser.")
	@ApiBaseSiteIdAndUserIdParam
	public BhgeSalesAreaObjectListWsDTO getGuestCustomerAccountDetails(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "salesOrg for GuestUSer", required = false) @PathVariable final String salesOrgId)
	{
		final BhgeSalesAreaObjectListData bhgeSalesAreaObjectDataList = new BhgeSalesAreaObjectListData();
		final List<BhgeSalesAreaObjectData> bhgeSalesAreaObjectData = bhgeUserProfileFacade.getSalesOrgforGuestUser(StringEscapeUtils.escapeHtml4(salesOrgId));
		bhgeSalesAreaObjectDataList.setSalesAreaObjects(bhgeSalesAreaObjectData);
		return getDataMapper().map(bhgeSalesAreaObjectDataList, BhgeSalesAreaObjectListWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}
	
	
	@RequestMapping(value = "/getGuestSalesOrgforCategory/{categoryCode}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getGuestSalesOrgforCategory", summary = "Get SalesOrg for GuestUser for categoryCode", description = "Returns SalesOrg for GuestUser for categoryCode.")
	@ApiBaseSiteIdAndUserIdParam
	public BhgeSalesAreaObjectWsDTO getGuestSalesOrgforCategory(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "salesOrg for GuestUSer", required = false) @PathVariable final String categoryCode)
	{
		final BhgeSalesAreaObjectData bhgeSalesAreaObjectData = bhgeUserProfileFacade.getGuestSalesOrgforCategory(StringEscapeUtils.escapeHtml4(categoryCode));
		return getDataMapper().map(bhgeSalesAreaObjectData, BhgeSalesAreaObjectWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}
	
	@RequestMapping(value = "/getGuestSalesOrgforProduct/{productCode}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getGuestSalesOrgforProduct", summary = "Get SalesOrg for GuestUser for ProductCode", description = "Returns SalesOrg for GuestUser for ProductCode.")
	@ApiBaseSiteIdAndUserIdParam
	public BhgeSalesAreaObjectWsDTO getGuestSalesOrgforProduct(@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields,
			@Parameter(description = "salesOrg for GuestUSer", required = false) @PathVariable final String productCode)
	{
		final BhgeSalesAreaObjectData bhgeSalesAreaObjectData = bhgeUserProfileFacade.getGuestSalesOrgforProduct(productCode);
		return getDataMapper().map(bhgeSalesAreaObjectData, BhgeSalesAreaObjectWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}
	
}
