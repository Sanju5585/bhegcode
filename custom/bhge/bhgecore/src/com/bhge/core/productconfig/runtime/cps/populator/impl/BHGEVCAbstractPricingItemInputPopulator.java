package com.bhge.core.productconfig.runtime.cps.populator.impl;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.bhge.core.constants.BhgeCoreConstants;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.services.B2BUnitService;
import de.hybris.platform.commerceservices.model.process.BHGESalesAreaDataModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.sap.productconfig.runtime.cps.constants.SapproductconfigruntimecpsConstants;
import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.Attribute;
import de.hybris.platform.sap.productconfig.runtime.cps.model.pricing.PricingItemInput;
import de.hybris.platform.sap.productconfig.runtime.cps.populator.impl.AbstractPricingItemInputPopulator;

public class BHGEVCAbstractPricingItemInputPopulator extends AbstractPricingItemInputPopulator {

	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCPricingItemInputPopulator.class);
	
	private static final String UNDERSCORE = "_";
	
	@Resource
	private B2BUnitService b2bUnitService;
	
	@Resource
	private ProductService productService;
	
	protected void fillBHGEVCPricingAttributes(final PricingItemInput target) {

		LOG.info("inside BHGEVCAbstractPricingItemInputPopulator ..");
		final Optional<Attribute> b2bUnitattributeOptional = target.getAttributes().stream()
				.filter(attribute -> attribute.getName()
						.equalsIgnoreCase(SapproductconfigruntimecpsConstants.PRICING_ATTRIBUTE_CUSTOMER_NUMBER))
				.findAny();
		
		final Optional<Attribute> productAttributeOptional = target.getAttributes().stream()
				.filter(attribute -> attribute.getName()
						.equalsIgnoreCase(SapproductconfigruntimecpsConstants.PRICING_ATTRIBUTE_MATERIAL_NUMBER))
				.findAny();
		
		final Optional<Attribute> salesOrgAttributeOptional = target.getAttributes().stream()
				.filter(attribute -> attribute.getName()
						.equalsIgnoreCase(SapproductconfigruntimecpsConstants.PRICING_ATTRIBUTE_SALES_ORG))
				.findAny();
		
		final String b2bUnitId = getB2BunitId(b2bUnitattributeOptional);
		final String region = getRegion(b2bUnitId);
		if (StringUtils.isNotEmpty(region)) {
			LOG.info("Adding KOMK-KDKG1 : {}, in cps pricing input request", region);
			target.getAttributes().add(createAttribute(BhgeCoreConstants.VC_PRICING_ATTRIBUTE_REGION, region));
		}

		target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_PRICING_ATTRIBUTE_AUART, StringUtils.EMPTY));
		target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_PRICING_ATTRIBUTE_AUART_SD, StringUtils.EMPTY));
		target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_PRICING_ATTRIBUTE_KPOSN, StringUtils.EMPTY));
		target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_PRICING_ATTRIBUTE_KZNEP,StringUtils.EMPTY));
		target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_PRICING_ATTRIBUTE_ZZMVGR3P, StringUtils.EMPTY));
		target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_PRICING_ATTRIBUTE_PSTYV, StringUtils.EMPTY));
		
		final String productCode = getProductId(productAttributeOptional);
		final String salesOrgId = getSalesOrgId(salesOrgAttributeOptional);
		if (StringUtils.isNotEmpty(productCode) && StringUtils.isNotEmpty(salesOrgId)) {
			LOG.info("find material group for product code {} and sales org id {} ", productCode, salesOrgId);
			final String materialPriceGroup = getMaterialPriceGroup(productCode, salesOrgId);
			if (StringUtils.isNotEmpty(materialPriceGroup)) {
				target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_MATERIAL_PRICING_GROUP_ATTRIBUTE, materialPriceGroup));
			}
		}
		
		setDiscountAttributes(productCode, target);

	}
	
	protected String getB2BunitId(final Optional<Attribute> b2bUnitattributeOptional) {

		String b2bUnitId = StringUtils.EMPTY;
		if (b2bUnitattributeOptional.isPresent()) {
			final List<String> b2bUnits = b2bUnitattributeOptional.get().getValues();
			if (CollectionUtils.isNotEmpty(b2bUnits)) {
				b2bUnitId = b2bUnits.get(0);
				LOG.info("Processing cps pricing input request for B2Bunit {}", b2bUnitId);
			}
		}
		return b2bUnitId;
	}

	protected String getProductId(final Optional<Attribute> productAttributeOptional) {

		String productCode = StringUtils.EMPTY;
		if (productAttributeOptional.isPresent()) {
			final List<String> productCodes = productAttributeOptional.get().getValues();
			if (CollectionUtils.isNotEmpty(productCodes)) {
				productCode = productCodes.get(0);
				LOG.info("Processing cps pricing input request with product code {}", productCode);
			}
		}
		return productCode;
	}

	protected String getSalesOrgId(final Optional<Attribute> salesOrgAttributeOptional) {

		String salesOrg = StringUtils.EMPTY;
		if (salesOrgAttributeOptional.isPresent()) {
			final List<String> salesOrgs = salesOrgAttributeOptional.get().getValues();
			if (CollectionUtils.isNotEmpty(salesOrgs)) {
				salesOrg = salesOrgs.get(0);
				LOG.info("Processing cps pricing input request for SalesOrg {}", salesOrg);
			}
		}
		return salesOrg;
	}
	
	
	protected String getRegion(final String b2bUnitId) {

		String region = StringUtils.EMPTY;
		if (StringUtils.isNotEmpty(b2bUnitId)) {
			final B2BUnitModel b2bUnitModel = getB2BUnit(b2bUnitId);
			LOG.info("B2Bunit Model present for uid {} with PK ", b2bUnitId, b2bUnitModel.getPk());
			region = b2bUnitModel.getRegionCP();
		}
		return region;
	}
	
	protected B2BUnitModel getB2BUnit(final String b2bUnitId) {
		
		return (B2BUnitModel) b2bUnitService.getUnitForUid(b2bUnitId);
	}
	
	protected GEEdgeProductModel getProductModel(final String productCode) {

		GEEdgeProductModel geEdgeProduct = null;
		try {
			
			if (StringUtils.isNotEmpty(productCode)) {
				final ProductModel productModel = productService.getProductForCode(productCode);
				if (productModel != null && productModel instanceof GEEdgeProductModel) {
					geEdgeProduct = (GEEdgeProductModel) productModel;
					LOG.info("Product Model present for code {} with PK ", productCode, geEdgeProduct.getPk());
				}
			}

		} catch (Exception e) {
			LOG.error("Product not found for productcode {} ", productCode);
		}

		return geEdgeProduct;
	}
	
	

	protected String getMaterialPriceGroup(final String productCode, final String salesOrgId) {

		String materialPriceGroup = StringUtils.EMPTY;
		final GEEdgeProductModel geEdgeProduct = getProductModel(productCode);
		if (geEdgeProduct != null) {
			final Collection<BHGESalesAreaDataModel> salesAreaModels = geEdgeProduct.getSalesAreaData();
			if (CollectionUtils.isNotEmpty(salesAreaModels) && StringUtils.isNotEmpty(salesOrgId)) {
				final Optional<BHGESalesAreaDataModel> salesAreaModelOptional = salesAreaModels.stream()
						.filter(salesAreaModel -> salesAreaModel.getSalesOrganization().equalsIgnoreCase(salesOrgId))
						.findAny();
				if (salesAreaModelOptional.isPresent()) {
					BHGESalesAreaDataModel salesAreaModel = salesAreaModelOptional.get();
					LOG.info("Sales Area Model present for uid {} with PK {} ", salesOrgId, salesAreaModel.getPk());
					materialPriceGroup = salesAreaModel.getMaterialPriceGroup();
				}
			}

		}
		return materialPriceGroup;
	}
	
	protected void setDiscountAttributes(final String productCode, final PricingItemInput target) {

		final GEEdgeProductModel geEdgeProduct = getProductModel(productCode);
		try {
			if(geEdgeProduct != null) {
				final String productHierarchy = geEdgeProduct.getGeProductHierarchy();
				LOG.info("Product Hierarchy {} for product code {} ", productHierarchy, productCode);
				if (StringUtils.isNotEmpty(productHierarchy)) {
					String[] productHierarchies = productHierarchy.split(UNDERSCORE);
					
					if (productHierarchies.length >= 1) {
						LOG.info("Product Hierarchy - 1 is {} for product code {} ", productHierarchies[0], productCode);
						target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_MATERIAL_PH1_ATTRIBUTE, productHierarchies[0].concat(UNDERSCORE)));
					}
					if (productHierarchies.length >= 2) {
						final String ph2 = productHierarchies[0].concat(UNDERSCORE).concat(productHierarchies[1]);
						LOG.info("Product Hierarchy - 2 is {} for product code {} ", ph2, productCode);
						target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_MATERIAL_PH2_ATTRIBUTE, ph2));
					}
					if (productHierarchies.length == 3) {
						LOG.info("Product Hierarchy - 3 is {} for product code {} ", productHierarchy, productCode);
						target.getAttributes().add(this.createAttribute(BhgeCoreConstants.VC_MATERIAL_PH3_ATTRIBUTE, productHierarchy));
					}
					
				}
			}
			
		} catch (Exception ex) {
			LOG.error("Error during populting product hierarchy discount attributes for product code {} ", productCode, ex);
		}
		
	}

}