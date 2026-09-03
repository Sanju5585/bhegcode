package com.bh.occ.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.bhge.facades.configuration.BHGEConfigurationCartIntegrationFacade;
import com.bhge.facades.order.BHGECartFacade;

import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commercefacades.order.data.CartModificationDataList;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.request.mapping.annotation.RequestMappingOverride;
import de.hybris.platform.commercewebservicescommons.dto.order.CartModificationListWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.order.CartModificationWsDTO;
import de.hybris.platform.sap.productconfig.occ.ProductConfigOrderEntryAccessoriesWsDTO;
import de.hybris.platform.sap.productconfig.occ.ProductConfigOrderEntryWsDTO;
import de.hybris.platform.sap.productconfig.occ.controllers.SapproductconfigoccControllerConstants;
import de.hybris.platform.webservicescommons.mapping.DataMapper;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdUserIdAndCartIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@Tag(name = "BHGE VC Product Configurator Cart Integration")
@RequestMapping(value = "/{baseSiteId}/users/{userId}/carts")
public class BHGEVCConfiguratorCartIntegrationController {
	
	@Resource(name = "sapProductConfigCartIntegrationFacade")
	private BHGEConfigurationCartIntegrationFacade vcConfigCartFacade;

	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;
	
	@Resource(name = "dataMapper")
	protected DataMapper dataMapper;
	
	private static final String PRODUCT_CODE = "', product code: '";
	private static final String CONFIG_ID = "configId: ";
	private static final Logger LOG = Logger.getLogger(BHGEVCConfiguratorCartIntegrationController.class);
	protected static final String DEFAULT_FIELD_SET = FieldSetLevelHelper.DEFAULT_LEVEL;

	@RequestMapping(value = "/{cartId}/entries/"
			+ SapproductconfigoccControllerConstants.CONFIGURATOR_TYPE_FOR_OCC_EXPOSURE, method = RequestMethod.POST)
	@RequestMappingOverride
	@ResponseBody
	@ResponseStatus(HttpStatus.CREATED)
	@Operation(operationId = "createCartEntryConfiguration", summary = "Adds a product configuration to the cart", description = "Adds a product configuration to the cart. The root product of the configuration is added as a cart entry- Additionally, the configuration is attached to the new entry.")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public CartModificationWsDTO addCartEntry(
			@Parameter(description = "Base site identifier.") @PathVariable final String baseSiteId,
			@Parameter(required = true) @RequestBody final ProductConfigOrderEntryWsDTO entry) throws CommerceCartModificationException
	{
		final CartModificationData cartModificationData = addCartEntryInternal(entry);
		return dataMapper.map(cartModificationData, CartModificationWsDTO.class);
	}

	@RequestMapping(value = "/{cartId}/accessoryEntries",method = RequestMethod.POST)
	@ResponseBody
	@ResponseStatus(HttpStatus.CREATED)
	@Operation(operationId = "createCartEntryConfigurationAccessories", summary = "Adds a product configuration to the cart with Accesssories", description = "Adds a product configuration to the cart with accessories . The root product of the configuration is added as a cart entry- Additionally, the configuration is attached to the new entry.")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public CartModificationListWsDTO addCartEntryAccessories(
			@Parameter(description = "Base site identifier.") @PathVariable final String baseSiteId,
			@Parameter(required = true) @RequestBody final ProductConfigOrderEntryAccessoriesWsDTO entries,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields) throws CommerceCartModificationException
	{

		CartModificationDataList modifications = new CartModificationDataList();
		CartModificationListWsDTO cartModificationListWsDTO = new CartModificationListWsDTO();
		List<CartModificationData> cartModificationDataList = new ArrayList<>();
		List<String> accessoriesProductList = new ArrayList<>();
		List<Integer> accessoriesEntriesNumber = new ArrayList<>();
		
		ProductConfigOrderEntryWsDTO mainOrderEntry = entries.getMainEntry();
		CartModificationData mainCartModificationData = new CartModificationData();
		if (Objects.nonNull(mainOrderEntry)) {

			if (StringUtils.isNotEmpty(mainOrderEntry.getConfigId())) {
				mainCartModificationData = addCartEntryInternal(mainOrderEntry);
				cartModificationDataList.add(mainCartModificationData);

			} else {

				final OrderEntryData orderEntry = new OrderEntryData();
				orderEntry.setQuantity(mainOrderEntry.getQuantity());
				ProductData productData = new ProductData();
				productData.setCode(mainOrderEntry.getProduct().getCode());
				orderEntry.setProduct(productData);
				mainCartModificationData = bhgeCartFacade.addOrderEntry(orderEntry);
				cartModificationDataList.add(mainCartModificationData);
			}

			for (ProductConfigOrderEntryWsDTO accessoryOrderEntry : entries.getAccessoryEntries()) {
				CartModificationData accessoryCartModificationData = new CartModificationData();

				if (StringUtils.isNotEmpty(accessoryOrderEntry.getConfigId())) {
					accessoryCartModificationData = addCartEntryInternal(accessoryOrderEntry);
					cartModificationDataList.add(accessoryCartModificationData);
					accessoriesEntriesNumber.add(accessoryCartModificationData.getEntry().getEntryNumber());
					if (null != accessoryOrderEntry.getProduct()) {
						accessoriesProductList.add(accessoryOrderEntry.getProduct().getCode());
					}

				} else {

					final OrderEntryData orderEntry = new OrderEntryData();
					orderEntry.setQuantity(accessoryOrderEntry.getQuantity());
					ProductData productData = new ProductData();
					productData.setCode(accessoryOrderEntry.getProduct().getCode());
					orderEntry.setProduct(productData);
					accessoryCartModificationData = bhgeCartFacade.addOrderEntry(orderEntry);
					cartModificationDataList.add(accessoryCartModificationData);
					accessoriesEntriesNumber.add(accessoryCartModificationData.getEntry().getEntryNumber());
					accessoriesProductList.add(productData.getCode());
				}
			}

		}
		modifications.setCartModificationList(cartModificationDataList);
		List<CartModificationWsDTO> cartModificationWsDTOS = modifications.getCartModificationList().stream().map(cartModification-> dataMapper.map(cartModification,CartModificationWsDTO.class,fields)).toList();
		cartModificationListWsDTO.setCartModifications(cartModificationWsDTOS);
		bhgeCartFacade.saveAccessoriesProducts(mainCartModificationData, accessoriesEntriesNumber, accessoriesProductList);
		return cartModificationListWsDTO;
	}

	@RequestMapping(value = "/{cartId}/entries", method = RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.OK)
	@Operation(operationId = "removeAccessoryCartEntry", summary = "Remove Accessory cart entry.", description = "Remove Accessory cart entry.")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public void removeAccessoryCart(
			@Parameter(description = "The entry number. Each entry in a cart has an entry number.", required = true) @RequestParam final String entryNumber)
	{
		final List<Integer> finalList = new ArrayList<>();
		final String[] a = entryNumber.split(",");
		for (int i = 0; i < a.length; i++)
		{
			finalList.add(Integer.parseInt(a[i].trim()));
		}
		bhgeCartFacade.removeAccessoryCartEntry(finalList);
	}
	
	protected CartModificationData addCartEntryInternal(final ProductConfigOrderEntryWsDTO entry) throws CommerceCartModificationException {

		LOG.debug("inside BHGEVCConfiguratorCartIntegrationController, addCartEntry: '" + logParam(CONFIG_ID, entry.getConfigId()) + PRODUCT_CODE
				+ entry.getProduct().getCode() + "'");

		CartModificationData cartModificationData = null;
		cartModificationData = vcConfigCartFacade.addVCConfigurationToCart(entry, entry.getConfigAttachmentMedia());

		LOG.debug("inside BHGEVCConfiguratorCartIntegrationController, addCartEntry: '" + logParam(CONFIG_ID, entry.getConfigId()) + PRODUCT_CODE
				+ entry.getProduct().getCode() + "' was successful");

		return cartModificationData;
	}
	
	protected static String logParam(final String paramName, final String paramValue) {
		return paramName + " = " + paramValue;
	}
	
	
	@RequestMapping(value = "/{cartId}/entries/{entryNumber}/"
			+ SapproductconfigoccControllerConstants.CONFIGURATOR_TYPE_FOR_OCC_EXPOSURE, method = RequestMethod.PUT)
	@ResponseBody
	@RequestMappingOverride
	@ResponseStatus(HttpStatus.OK)
	@Operation(operationId = "replaceCartEntryConfiguration", summary = "Updates the configuration of a cart entry", description = "Updates the configuration. The entire configuration attached to the cart entry is replaced by the configuration specified in the request body. Possible only if the configuration change has been initiated by the corresponding GET method before.")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public CartModificationWsDTO updateVCCartEntry(
			@Parameter(description = "Base site identifier.") @PathVariable final String baseSiteId,
			@Parameter(required = true) @PathVariable final int entryNumber,
			@RequestBody final ProductConfigOrderEntryWsDTO entry) {
		entry.setEntryNumber(entryNumber);
		final CartModificationData cartModificationData = updateCartEntryInternal(entry, entry.getConfigAttachmentMedia());
		return dataMapper.map(cartModificationData, CartModificationWsDTO.class);
	}
	
	protected CartModificationData updateCartEntryInternal(final ProductConfigOrderEntryWsDTO entry,  final String  mediaPK)

	{
		final String configId = entry.getConfigId();
		final String productCode = entry.getProduct().getCode();

		if (LOG.isDebugEnabled())
		{
			LOG.debug("BHGEVCConfiguratorCartIntegrationController updateCartEntry: '" + logParam(CONFIG_ID, configId) + PRODUCT_CODE + productCode + "'");
		}

		final CartModificationData cartModificationData = vcConfigCartFacade.updateProductConfigurationInCart(productCode,
				configId, mediaPK);

		if (LOG.isDebugEnabled())
		{
			LOG.debug("BHGEVCConfiguratorCartIntegrationController updateCartEntry: '" + logParam(CONFIG_ID, configId) + PRODUCT_CODE + productCode + "' was successful");
		}
		return cartModificationData;
	}
	
	@RequestMapping(value = "/{cartId}/entries/placeHolder", method = RequestMethod.POST)
	@ResponseBody
	@ResponseStatus(HttpStatus.CREATED)
	@Operation(operationId = "createDummyCartEntry", summary = "Adds a dummy product to the cart")
	@ApiBaseSiteIdUserIdAndCartIdParam
	public CartModificationWsDTO addPlacehoderCartEntry(
			@Parameter(description = "Base site identifier.") @PathVariable final String baseSiteId,
			@Parameter(required = true) @RequestBody final ProductConfigOrderEntryWsDTO entry) throws CommerceCartModificationException
	{
		final OrderEntryData orderEntry = new OrderEntryData();
		orderEntry.setQuantity(entry.getQuantity());
		ProductData productData = new ProductData();
		productData.setCode(entry.getProduct().getCode());
		orderEntry.setProduct(productData);
		final CartModificationData cartModificationData = bhgeCartFacade.addOrderEntry(orderEntry);
		bhgeCartFacade.savePartPlaceHolderDetails(cartModificationData, entry);
		return dataMapper.map(cartModificationData, CartModificationWsDTO.class);
	}
	
	@Operation(operationId = "addLongNumberCartEntry", hidden = true, summary = "Add long number to cart entry")
	@PostMapping(value = "/{cartId}/longNumberEntry")
	@ResponseBody
	@ApiBaseSiteIdUserIdAndCartIdParam
	public CartModificationWsDTO addLongNumberCartEntry(
			@Parameter(description = "Base site identifier.", required = true) @PathVariable final String baseSiteId,
			@Parameter(description = "LongNumber added to cart", required = true) @RequestParam(required = true) final String longNumber,
			@Parameter(description = "Amount to be added.", required = false) @RequestParam(required = false, defaultValue = "1") final long quantity,
			@ApiFieldsParam @RequestParam(required = false, defaultValue = FieldSetLevelHelper.DEFAULT_LEVEL) final String fields)
	{
	
		String[] arrOfLongNumber = longNumber.split("-");
		String productCode = null;
		if (arrOfLongNumber.length >=1) {
			productCode = arrOfLongNumber [0];
		}
		final OrderEntryData orderEntry = new OrderEntryData();
		orderEntry.setQuantity(quantity);
		ProductData productData = new ProductData();
		productData.setCode(productCode);
		orderEntry.setProduct(productData);
		orderEntry.setEntryNumber(null);
		orderEntry.setLongConfiguration(longNumber);
		LOG.info("BHGEVCConfiguratorCartIntegrationController addLongNumberCartEntry productCode "+productCode+" longNumber "+longNumber);


		return dataMapper.map(bhgeCartFacade.addOrderEntry(orderEntry), CartModificationWsDTO.class, fields);
	}

}
