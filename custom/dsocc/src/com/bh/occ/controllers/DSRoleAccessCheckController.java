package com.bh.occ.controllers;

import com.bhge.facades.roleAccessCheck.DSRoleAccessCheckFacade;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import java.util.List;

@Controller
@Tag(name = "Role Access Check")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSRoleAccessCheckController extends DSBaseController
{
	
	@Resource(name ="dsRoleAccessCheckFacade")
	DSRoleAccessCheckFacade dsRoleAccessCheckFacade;

	@RequestMapping(value = "/roleAccessCheck", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Returns true if user has access to the particular page", description = "Returns true if user has access to the particular page")
	@ApiBaseSiteIdAndUserIdParam
	@ResponseStatus(value = HttpStatus.OK)
	public Boolean checkRoleAccess(@RequestParam(value="pageId", required = true) final String pageId) throws CMSItemNotFoundException
	{
		return dsRoleAccessCheckFacade.checkUserAccess(StringEscapeUtils.escapeHtml4(pageId));
	}
	
	
	@RequestMapping(value = "/userRole", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Returns user Role", description = "Returns user Role")
	@ApiBaseSiteIdAndUserIdParam
	public List<String> getUserRole()
	{
		return dsRoleAccessCheckFacade.getUserRole();
	}
	@RequestMapping(value = "/userRoleOfB2BUnit", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "Returns Restriction of B2B unit", description = "Returns Restriction of B2B unit")
	@ApiBaseSiteIdAndUserIdParam
	public Boolean getUserRoleB2BUnit()
	{
		return dsRoleAccessCheckFacade.getUserRoleofB2BUnit();
	}
}

