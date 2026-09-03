package com.bh.occ.controllers;

import de.hybris.platform.commercefacades.i18n.I18NFacade;
import de.hybris.platform.commerceservices.enums.CountryType;
import de.hybris.platform.commerceservices.request.mapping.annotation.ApiVersion;
import de.hybris.platform.commercewebservicescommons.dto.user.CountryListWsDTO;
import de.hybris.platform.commercewebservicescommons.dto.user.RegionListWsDTO;
import de.hybris.platform.webservicescommons.cache.CacheControl;
import de.hybris.platform.webservicescommons.cache.CacheControlDirective;
import de.hybris.platform.webservicescommons.swagger.ApiBaseSiteIdParam;
import de.hybris.platform.webservicescommons.swagger.ApiFieldsParam;
import de.hybris.platform.commercewebservices.core.user.data.CountryDataList;
import de.hybris.platform.commercewebservices.core.user.data.RegionDataList;


import jakarta.annotation.Resource;

import java.util.Locale;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.bhge.facades.order.BHGECartFacade;
import com.bhge.core.util.BHGECommonsUtil;


@Controller
@ApiVersion("v2")
@RequestMapping(value = "/{baseSiteId}/dscountries")
@CacheControl(directive = CacheControlDirective.PRIVATE, maxAge = 120)
@Tag(name = "DS Countries")
public class DSCountriesController extends DSBaseController
{
	private static final Logger LOG = LoggerFactory.getLogger(DSCountriesController.class);
	@Resource(name = "i18NFacade")
	private I18NFacade i18NFacade;

	//@Resource(name = "checkoutFacade")
	//private CheckoutFacade checkoutFacade;
	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;

	@RequestMapping(method = RequestMethod.GET)
	@Cacheable(value = "countriesCache", key = "T(de.hybris.platform.commercewebservicescommons.cache.CommerceCacheKeyGenerator).generateKey(false,false,'getCountries',#type,#fields)")
	@ResponseBody
	@Operation(operationId = "getCountries", summary = "DS Get a list of countries.", description =
			"If the value of type equals to shipping, then return shipping countries. If the value of type equals to billing, then return billing countries."
					+ " If the value of type is not given, return all countries. The list is sorted alphabetically.")
	@ApiBaseSiteIdParam
	public CountryListWsDTO getCountries(
			@Parameter(description = "The type of countries.", schema = @Schema(allowableValues = {"SHIPPING", "BILLING"})) @RequestParam(required = false) final String type,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		LOG.info("inside DSCountriesController getcountries method");
		if (StringUtils.isNotBlank(type) && !CountryType.SHIPPING.toString().equalsIgnoreCase(type) && !CountryType.BILLING
				.toString().equalsIgnoreCase(type))
		{
			throw new IllegalStateException(String.format("The value of country type : [%s] is invalid", type));
		}

		final CountryDataList dataList = new CountryDataList();
		dataList.setCountries(bhgeCartFacade.getCountries(StringUtils.isNotBlank(type) ? CountryType.valueOf(StringEscapeUtils.escapeHtml4(type)) : null));
		return getDataMapper().map(dataList, CountryListWsDTO.class,StringEscapeUtils.escapeHtml4(fields));
	}

	@GetMapping("/{countyIsoCode}/dsregions")
	@ResponseStatus(value = HttpStatus.OK)
	@ResponseBody
	@Cacheable(value = "countriesCache", key = "T(de.hybris.platform.commercewebservicescommons.cache.CommerceCacheKeyGenerator).generateKey(false,false,'getRegionsForCountry',#countyIsoCode,#fields)")
	@Operation(operationId = "getCountryRegions", summary = "DS Fetch the list of regions for the provided country.", description = "Lists all regions.")
	@ApiBaseSiteIdParam
	public RegionListWsDTO getCountryRegions(
			@Parameter(description = "An ISO code for a country", required = true) @PathVariable final String countyIsoCode,
			@ApiFieldsParam @RequestParam(defaultValue = DEFAULT_FIELD_SET) final String fields)
	{
		LOG.info("inside DSCountriesController getregion method");
		final RegionDataList regionDataList = new RegionDataList();
		regionDataList.setRegions(BHGECommonsUtil.getRegionsWithoutEmptyValues((i18NFacade.getRegionsForCountryIso(StringEscapeUtils.escapeHtml4(countyIsoCode.toUpperCase(Locale.ENGLISH))))));

		return getDataMapper().map(regionDataList, RegionListWsDTO.class, StringEscapeUtils.escapeHtml4(fields));
	}

}
