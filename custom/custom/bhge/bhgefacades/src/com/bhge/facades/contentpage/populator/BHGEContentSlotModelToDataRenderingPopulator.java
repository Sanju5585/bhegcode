package com.bhge.facades.contentpage.populator;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import de.hybris.platform.cms2.servicelayer.data.ContentSlotData;
import de.hybris.platform.cmsfacades.cmsitems.attributeconverters.UniqueIdentifierAttributeToDataContentConverter;
import de.hybris.platform.cmsfacades.rendering.cache.RenderingCacheService;
import de.hybris.platform.cmsfacades.data.AbstractCMSComponentData;
import de.hybris.platform.cms2.model.contents.components.AbstractCMSComponentModel;
import de.hybris.platform.cms2.model.contents.contentslot.ContentSlotModel;
import de.hybris.platform.cmsfacades.rendering.populators.ContentSlotModelToDataRenderingPopulator;
import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.cmsfacades.data.PageContentSlotData;
import de.hybris.platform.cmsfacades.rendering.visibility.RenderingVisibilityService;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.servicelayer.dto.converter.Converter;

public class BHGEContentSlotModelToDataRenderingPopulator extends ContentSlotModelToDataRenderingPopulator
{

	private static final Logger LOG = LoggerFactory.getLogger(BHGEContentSlotModelToDataRenderingPopulator.class);

	// --------------------------------------------------------------------------
	// Variables
	// --------------------------------------------------------------------------
	private RenderingVisibilityService renderingVisibilityService;
	private Converter<AbstractCMSComponentModel, AbstractCMSComponentData> cmsComponentModelToDataRenderingConverter;
	private UniqueIdentifierAttributeToDataContentConverter<ItemModel> uniqueIdentifierAttributeToDataContentConverter;
	private Populator<ItemModel, Map<String, Object>> customPropertiesPopulator;
	private RenderingCacheService<AbstractCMSComponentData> renderingCacheService;

	// --------------------------------------------------------------------------
	// Public API
	// --------------------------------------------------------------------------
	@Override
	public void populate(final ContentSlotData contentSlotData, final PageContentSlotData targetData)
	{
		// Basic data
		LOG.info("Start BHGEContentSlotModelToDataRenderingPopulator for contentSlot " + contentSlotData.getUid());
		try {
			
			final ContentSlotModel slotModel = contentSlotData.getContentSlot();
			targetData.setSlotId(contentSlotData.getUid());
			targetData.setSlotUuid(getUniqueIdentifierAttributeToDataContentConverter().convert(slotModel));
			targetData.setPosition(contentSlotData.getPosition());
			targetData.setName(contentSlotData.getName());
			targetData.setSlotShared(contentSlotData.isFromMaster());
			targetData.setCatalogVersion(getUniqueIdentifierAttributeToDataContentConverter().convert(slotModel.getCatalogVersion()));

			populateCustomProperties(slotModel, targetData);
			populateComponents(slotModel, targetData);
			LOG.info("Finish BHGEContentSlotModelToDataRenderingPopulator for contentSlot " + contentSlotData.getUid());
		}
		catch(Exception ex)
		{
			LOG.info("ExceptionforContentSlot in BHGEContentSlotModelToDataRenderingPopulator " + ex.getMessage());
		}

	}

	/**
	 * Populates components for {@link ContentSlotModel}. The list of components is retrieved from the cache if the
	 * {@link RenderingCacheService} is enabled.
	 *
	 * @param slotModel
	 * 		the {@link ContentSlotModel} containing components
	 * @param targetData
	 * 		the target {@link PageContentSlotData} object
	 */
	protected void populateComponents(final ContentSlotModel slotModel, final PageContentSlotData targetData)
	{
		// Components
		targetData.setComponents(slotModel.getCmsComponents() //
				.stream() //
				.filter(getRenderingVisibilityService()::isVisible) //
				.map(this::convertComponentModelToData) //
				.collect(Collectors.toList()));
	}

	/**
	 * Populates custom properties for {@link ContentSlotModel}.
	 *
	 * @param slotModel
	 * 		the {@link ContentSlotModel} to retrieve custom properties
	 * @param targetData
	 * 		the target {@link PageContentSlotData} object.
	 */
	protected void populateCustomProperties(final ContentSlotModel slotModel, final PageContentSlotData targetData)
	{
		final Map<String, Object> customProperties = new HashMap<>();
		getCustomPropertiesPopulator().populate(slotModel, customProperties);
		targetData.setOtherProperties(customProperties);
	}

	/**
	 * Converts given component model to component data
	 *
	 * @param component the {@link AbstractCMSComponentModel} to convert into {@link AbstractCMSComponentData}
	 * @return converted {@link AbstractCMSComponentData} representing input model
	 */
	protected AbstractCMSComponentData convertComponentModelToData(final AbstractCMSComponentModel component)
	{
		return getRenderingCacheService()
				.cacheOrElse(component, () -> getCmsComponentModelToDataRenderingConverter().convert(component));
	}

	// --------------------------------------------------------------------------
	// Getters/Setters
	// --------------------------------------------------------------------------
	protected Converter<AbstractCMSComponentModel, AbstractCMSComponentData> getCmsComponentModelToDataRenderingConverter()
	{
		return cmsComponentModelToDataRenderingConverter;
	}

	
	public void setCmsComponentModelToDataRenderingConverter(
			final Converter<AbstractCMSComponentModel, AbstractCMSComponentData> cmsComponentModelToDataRenderingConverter)
	{
		this.cmsComponentModelToDataRenderingConverter = cmsComponentModelToDataRenderingConverter;
	}

	
	protected UniqueIdentifierAttributeToDataContentConverter<ItemModel> getUniqueIdentifierAttributeToDataContentConverter()
	{
		return uniqueIdentifierAttributeToDataContentConverter;
	}

	public void setUniqueIdentifierAttributeToDataContentConverter(
			final UniqueIdentifierAttributeToDataContentConverter<ItemModel> uniqueIdentifierAttributeToDataContentConverter)
	{
		this.uniqueIdentifierAttributeToDataContentConverter = uniqueIdentifierAttributeToDataContentConverter;
	}

	protected RenderingVisibilityService getRenderingVisibilityService()
	{
		return renderingVisibilityService;
	}

	
	public void setRenderingVisibilityService(
			final RenderingVisibilityService renderingVisibilityService)
	{
		this.renderingVisibilityService = renderingVisibilityService;
	}

	protected Populator<ItemModel, Map<String, Object>> getCustomPropertiesPopulator()
	{
		return customPropertiesPopulator;
	}

	
	public void setCustomPropertiesPopulator(
			final Populator<ItemModel, Map<String, Object>> customPropertiesPopulator)
	{
		this.customPropertiesPopulator = customPropertiesPopulator;
	}

	public RenderingCacheService<AbstractCMSComponentData> getRenderingCacheService()
	{
		return renderingCacheService;
	}

	
	public void setRenderingCacheService(
			final RenderingCacheService<AbstractCMSComponentData> renderingCacheService)
	{
		this.renderingCacheService = renderingCacheService;
	}

}
