package com.bh.occ.controllers;

import com.bhge.core.commerceservices.category.BHGECommerceCategoryService;
import com.ds.dsocc.product.data.CategoryListData;
import com.ds.dsocc.product.dto.CategoryListWsDTO;
import de.hybris.platform.commercefacades.product.data.CategoryData;
import de.hybris.platform.commercewebservicescommons.dto.product.CategoryWsDTO;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import de.hybris.platform.webservicescommons.util.YSanitizer;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import java.util.List;

@Controller
@Tag(name = "Categories")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSCategoryController extends DSBaseController
{
	private static final Logger LOG = Logger.getLogger(DSCategoryController.class);

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "bhgeCommerceCategoryService")
	private BHGECommerceCategoryService bhgeCommerceCategoryService;

	@RequestMapping(value = "/{categoryId}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getAllCategories", summary = "Gets a list of child categories under a specific category", description = "Returns a list of child categories in the specified category.")
	@ApiBaseSiteIdAndUserIdParam
	public CategoryListWsDTO getAllCategories(@Parameter(description = "category Id", required = false) @PathVariable final String categoryId,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FILTER) final String guestSalesArea,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		CategoryListData categoryListData = new CategoryListData();
		List<CategoryData> categoryList = bhgeCommerceCategoryService.fetchAllCategories(StringEscapeUtils.escapeHtml4(guestSalesArea));
		categoryListData.setCategories(categoryList);
		return getDataMapper().map(categoryListData, CategoryListWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}
	
	@RequestMapping(value = "/breadcrumb/{categoryId}", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "getBreadcrumbs", summary = "Gets the breacrumb under a specific category", description = "Returns a list of child categories in the specified category.")
	@ApiBaseSiteIdAndUserIdParam
	public CategoryWsDTO getBreadCrumbDetails(@Parameter(description = "Base site identifier", required = true) @PathVariable final String baseSiteId, @Parameter(description = "category Id", required = true) @PathVariable final String categoryId)
	{
		
		CategoryData categoryData = bhgeCommerceCategoryService.getBreadCrumbsForCategory(YSanitizer.sanitize(categoryId));
		return getDataMapper().map(categoryData, CategoryWsDTO.class);
	}
}
