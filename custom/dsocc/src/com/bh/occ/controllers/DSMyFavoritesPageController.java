package com.bh.occ.controllers;

import com.bhge.core.wishlist.service.BHGEWishlistService;
import com.bhge.facades.order.BHGEPriceAvailabilityFacade;
import com.ds.dsocc.product.data.ProductListWsDTO;
import de.hybris.platform.cms2.exceptions.CMSItemNotFoundException;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commercewebservicescommons.dto.product.PriceWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.product.ProductWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.search.pagedata.PaginationWsDTO;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdAndUserIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.Resource;
import jakarta.servlet.ServletException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Controller
@ApiVersion("v2")
@Tag(name = "DS MyFavorites")
@RequestMapping(value = "/{baseSiteId}/users/{userId}")
public class DSMyFavoritesPageController extends DSBaseController {

	private static final Logger LOG = Logger.getLogger(DSMyFavoritesPageController.class);

	@Resource(name = "bhgeWishlistService")
	private BHGEWishlistService bhgeWishlistService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "bhgePriceAvailabilityFacade")
	private BHGEPriceAvailabilityFacade bhgePriceAvailabilityFacade;

	/*
	 * @ResponseBody
	 * 
	 * @Operation(operationId = "checkRealTimePrice", summary =
	 * "Check Real Time Price.", consumes = MediaType.APPLICATION_JSON_VALUE,
	 * produces = MediaType.APPLICATION_JSON_VALUE, description =
	 * "Check Real Time Price.")
	 * 
	 * @ApiBaseSiteIdAndUserIdParam
	 * 
	 * @RequestMapping(value = "/checkRealTimePrice", method = { RequestMethod.POST
	 * }, produces = { MediaType.APPLICATION_JSON_VALUE,
	 * MediaType.APPLICATION_XML_VALUE }) public ProductWsDTO
	 * checkRealTimePrice(@RequestParam(value ="productCode",required = false) final
	 * String productCode,
	 * 
	 * @ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String
	 * fields,
	 * 
	 * @RequestParam(value = "callingsourceinfo", required = false) final String
	 * callingsource,
	 * 
	 * @ApiFieldsParam @RequestParam(value = "guestSalesArea", required = false)
	 * final String guestSalesArea) throws Exception { ProductWsDTO productWsDTO =
	 * new ProductWsDTO(); PriceWsDTO priceWsDTO = new PriceWsDTO(); PriceData
	 * priceData = new PriceData();
	 * 
	 * LOG.info("########################## CheckRealTimePrice for Product: " +
	 * productCode + " from " + callingsource + " ############### "); String
	 * Sanitizedfields = StringEscapeUtils.escapeHtml4(fields); priceData =
	 * bhgeCartFacade.getPriceFromRFCForWS(StringEscapeUtils.escapeHtml4(productCode)
	 * , StringEscapeUtils.escapeHtml4(guestSalesArea)); if (null != priceData) {
	 * priceWsDTO = getDataMapper().map(priceData, PriceWsDTO.class, "FULL"); } else
	 * { LOG.info("No Price available for Product: " + productCode); }
	 * productWsDTO.setPrice(priceWsDTO); return productWsDTO; }
	 */
	@RequestMapping(value = "/getfavourites", method = RequestMethod.GET)
	@ResponseBody
	@Operation(operationId = "MyFavorites Product order", summary = "MyFavorites details", description = "MyFavorites Details")
	@ApiBaseSiteIdAndUserIdParam
	public ProductListWsDTO getFavourites(
			@Parameter(description = "Text") @RequestParam(defaultValue = "") final String text,
			@Parameter(description = "The number of results returned per page.") @RequestParam(defaultValue = DEFAULT_PAGE_SIZE) final String pageSize,
			// @Parameter(description = "The current page.") @RequestParam(defaultValue =
			// DEFAULT_PAGE_SIZE) final int currentPage,
			@Parameter(description = "The current result page requested.") @RequestParam(defaultValue = DEFAULT_CURRENT_PAGE) final int currentPage,
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "User Id", required = true) @PathVariable final String userId,
			@RequestParam(value = "productLine", required = false) final String productLine,
			@ApiFieldsParam @RequestParam(value = "guestSalesArea", required = false) final String guestSalesArea)
			throws CMSItemNotFoundException, IOException, ServletException {
		PriceData priceData = new PriceData();
		PriceWsDTO priceWsDTO = new PriceWsDTO();
		final UserModel user = userService.getCurrentUser();
		// final int page = currentPage;
		if(null !=pageSize) {
			final PageableData pageableData = createPageableData(currentPage, getPageSizeWishlist(pageSize), null, null);


			if (user instanceof GEEdgeCustomerModel) {
				final SearchPageData<ProductData> productData = bhgeWishlistService.getWishlistProductsDataForUser(user,
						StringEscapeUtils.escapeHtml4(text), pageableData);
				ProductListWsDTO productDataListWsDTO = new ProductListWsDTO();
				List<ProductWsDTO> productList = new ArrayList<>();
				List<ProductData> resultProductList = new ArrayList<>();
				PaginationData paginationData = new PaginationData();

				/*
				* priceData =
				* bhgeCartFacade.getPriceFromRFCForWS(StringEscapeUtils.escapeHtml4(productCode)
				* , StringEscapeUtils.escapeHtml4(guestSalesArea)); if (null != priceData) {
				* priceWsDTO = getDataMapper().map(priceData, PriceWsDTO.class, "FULL"); } else
				* { LOG.info("No Price available for Product: " + productCode); }
				*/

				if (productData != null) {
					resultProductList = productData.getResults();

					//fetching price and availability list
					bhgePriceAvailabilityFacade.fetchAndPopulatePriceAvailabilityDetailsForFavourites(resultProductList, 1, productLine,"");

					if (CollectionUtils.isNotEmpty(resultProductList) && resultProductList.size() > 0) {
						for (ProductData data : resultProductList) {
							ProductWsDTO dto = getDataMapper().map(data, ProductWsDTO.class);
							//dto.setPrice(priceWsDTO);
							productList.add(dto);
						}
					}
					paginationData = productData.getPagination();

					PaginationWsDTO paginationWsDTO = getDataMapper().map(paginationData, PaginationWsDTO.class, "FULL");

					productDataListWsDTO.setPagination(paginationWsDTO);
					productDataListWsDTO.setProductList(productList);
				} else {
					productDataListWsDTO.setProductList(Collections.emptyList());
				}

				return productDataListWsDTO;

			}
		}
		return null;
	}

	private int getPageSizeWishlist(final String pageSize) {
		if (StringUtils.isBlank(pageSize)) {
			return Integer.parseInt(Config.getParameter("bhge.favourites.pagesize"));
		} else {
			return Integer.parseInt(pageSize);
		}

	}

	private int getPageSizes(final String pageSize) {
		if (StringUtils.isBlank(pageSize)) {
			return Integer.parseInt(Config.getParameter("bhge.soldto.search.page.size"));
		} else {
			return Integer.parseInt(pageSize);
		}
	}

	@RequestMapping(value = "/addToWishlist", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "addProductsinWishlist", summary = "Add products", description = "Add Products to wishlist.")
	@ApiBaseSiteIdAndUserIdParam
	public ResponseEntity<String> addToWishlist(
			@Parameter(description = "Code of the product to be added to wishlist", required = true) @RequestParam final ArrayList<String> productCodes)
			throws CMSItemNotFoundException {
		if (productCodes != null) {
			try {

				bhgeWishlistService.addProductsToWishlist(productCodes);
				return new ResponseEntity<String>(HttpStatus.OK);
			} catch (final Exception e) {

				return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
			}
		} else {
			return new ResponseEntity<String>(HttpStatus.NOT_ACCEPTABLE);
		}
	}

	@RequestMapping(value = "/removeFromWishlist", method = RequestMethod.POST)
	@ResponseBody
	@Operation(operationId = "deleteProductsinWishlist", summary = "Delete products", description = "Delete products from wishlist.")
	@ApiBaseSiteIdAndUserIdParam
	public ResponseEntity<String> removeFromWishlist(
			@Parameter(description = "Product Codes to be deleted from Wishlist", required = true) @RequestBody final ArrayList<String> productCodes)
			throws CMSItemNotFoundException {
		if (productCodes != null) {
			try {

				bhgeWishlistService.removeProductsFromWishlist(productCodes);
				return new ResponseEntity<String>(HttpStatus.OK);
			} catch (final Exception e) {

				return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_ACCEPTABLE);
			}
		} else {
			return new ResponseEntity<String>(HttpStatus.NOT_ACCEPTABLE);
		}
	}

}
