package com.bhge.facades.configuration;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import jakarta.annotation.Resource;

import de.hybris.platform.order.model.AbstractOrderEntryProductInfoModel;
import de.hybris.platform.sap.productconfig.services.constants.SapproductconfigservicesConstants;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.commercefacades.order.data.CartModificationData;
import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.order.CommerceCartModificationStatus;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.PK;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.facades.impl.ConfigurationCartIntegrationFacadeImpl;
import de.hybris.platform.sap.productconfig.occ.ProductConfigOrderEntryWsDTO;
import de.hybris.platform.sap.productconfig.runtime.interf.ConfigurationEngineException;
import de.hybris.platform.sap.productconfig.runtime.interf.model.ConfigModel;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

public class BHGEConfigurationCartIntegrationFacadeImpl extends ConfigurationCartIntegrationFacadeImpl implements BHGEConfigurationCartIntegrationFacade {
	
	private static final Logger LOG = Logger.getLogger(BHGEConfigurationCartIntegrationFacadeImpl.class);
	
	private static final String REFERENCED_BY_CART_ENTRY_PK = " referenced by cart entry PK ";
	private static final String WITH_CONFIG_ID = " with configId ";
	
	@Resource(name = "mediaService")
	private MediaService mediaService; 
	
	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;
	
	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService; 
	
	@Resource(name = "modelService")
	private ModelService modelService;
	
	@Override
	public ConfigurationData configureCartItem(final String cartItemKey) {
		ConfigurationData draftConfig = super.configureCartItem(cartItemKey);
		if (draftConfig != null) {
			draftConfig.setDisableResetConfigFlag(true);
		}
		return draftConfig;
	}
	
	@Override
	public CartModificationData updateProductConfigurationInCart(final String productCode, final String configId, final String  mediaPK) {
		
		LOG.debug("Inside BHGEVCConfigurationCartFacadeImpl, config Id is " + configId );
		final ProductModel product = getProductService().getProductForCode(productCode);
		final CommerceCartParameter commerceCartParameter = new CommerceCartParameter();
		final CartModel cart = getCartService().getSessionCart();
		
		String pkString = getPKStringForConfigId(configId);
		
		LOG.debug("Inside BHGEVCConfigurationCartFacadeImpl, pk String is " + pkString );
		
		PK entryPK = convertStringToPK(getPKStringForConfigId(configId));
		
		LOG.debug("Inside BHGEVCConfigurationCartFacadeImpl, pk has been fetched for config id " + entryPK);
		
		final AbstractOrderEntryModel entryToUpdate = findCartItemByPK(convertStringToPK(getPKStringForConfigId(configId)));
		
		LOG.debug("Entry after pk is : " + entryToUpdate );
		
		updateCartItem(product, configId, entryToUpdate, commerceCartParameter, cart, mediaPK);

		final CommerceCartModification commerceCartModification = fillCommerceCartModification(entryToUpdate);

		LOG.debug("Updated product configuration " + product.getCode() + WITH_CONFIG_ID + configId + REFERENCED_BY_CART_ENTRY_PK
					+ commerceCartModification.getEntry().getPk().toString() + "'");
		

		return getCartModificationConverter().convert(commerceCartModification);
	}
	
	@Override
	protected String getPKStringForConfigId(final String configId) {
		String pkString = getAbstractOrderEntryLinkStrategy().getCartEntryForConfigId(configId);
		LOG.debug("Inside getPKStringForConfigId, pk string for cart entry" + pkString );
		if (null == pkString) {
			pkString = getAbstractOrderEntryLinkStrategy().getCartEntryForDraftConfigId(configId);
			LOG.debug("Inside getPKStringForConfigId, pk string for cart entry  from draft" + pkString );
		}
		return pkString;
	}
	
	private CommerceCartModification fillCommerceCartModification(final AbstractOrderEntryModel entryToUpdate)
	{
		final CommerceCartModification modification = new CommerceCartModification();

		modification.setStatusCode(CommerceCartModificationStatus.SUCCESS);
		modification.setQuantity(entryToUpdate.getQuantity().longValue());
		modification.setEntry(entryToUpdate);
		return modification;

	}
	
	protected void updateCartItem(final ProductModel product, final String configId, final AbstractOrderEntryModel cartItem,
			final CommerceCartParameter commerceCartParameter, final CartModel cart, final String mediaPK)
	{

		LOG.debug("BHGEVCConfigurationCartFacadeImpl config id : " + configId);
		
		if(null != cartItem) {
			
			LOG.debug("BHGEVCConfigurationCartFacadeImpl price is : " + cartItem.getTotalPrice());
		}
		
		getConfigurationPricingOrderIntegrationService().updateCartEntryProduct(cartItem, product, configId);
		
		fillCommerceCartParameterForUpdate(commerceCartParameter, cart, configId, CommerceCartParameter.DEFAULT_ENTRY_NUMBER);
		
		LOG.debug("BHGEVCConfigurationCartFacadeImpl  entry number : " + CommerceCartParameter.DEFAULT_ENTRY_NUMBER );
		
		if(null != cartItem) {
			
			LOG.debug("BHGEVCConfigurationCartFacadeImpl after updateCartEntryProduct price is : " + cartItem.getTotalPrice());
		
		
		getConfigurationAbstractOrderIntegrationStrategy().updateAbstractOrderEntryOnLink(commerceCartParameter, cartItem);
		
		updateLinkToCartItem(configId, cartItem.getPk().toString());
		
		LOG.debug("BHGEVCConfigurationCartFacadeImpl After updateLinkToCartItem config id : " + configId);
		
		getProductConfigurationPricingStrategy().updateCartEntryPrices(cartItem, true, commerceCartParameter);

			LOG.debug("BHGEVCConfigurationCartFacadeImpl after updateCartEntryPrices price is : " + cartItem.getTotalPrice());
		}
		
		
		addConfigAttributesToCartEntry(cartItem);
		
		uploadAttachmentToEntry(cartItem, mediaPK, cart);
	}
	
	protected void updateLinkToCartItem(final String configId, final String cartItemKey) {
		final String cartItemDraftKey = getAbstractOrderEntryLinkStrategy().getCartEntryForDraftConfigId(configId);
		
		LOG.debug("BHGEVCConfigurationCartFacadeImpl cartItemDraftKey : "+ cartItemDraftKey);
		
		if (null != cartItemDraftKey) {
			getAbstractOrderEntryLinkStrategy().removeDraftConfigIdForCartEntry(cartItemKey);
			
			final String oldConfigId = getAbstractOrderEntryLinkStrategy().getConfigIdForCartEntry(cartItemKey);
			
			LOG.debug("BHGEVCConfigurationCartFacadeImpl old config id : "+ oldConfigId +"And Config id is :" + configId);
			
			if (null != oldConfigId && !oldConfigId.equals(configId))
			{
				getConfigurationService().releaseSession(oldConfigId);
			}
		}
		getAbstractOrderEntryLinkStrategy().setConfigIdForCartEntry(cartItemKey, configId);
		
		LOG.debug("BHGEVCConfigurationCartFacadeImpl cartItemKey : "+ cartItemKey);
	}
	

	@Override
	public CartModificationData addVCConfigurationToCart(final ProductConfigOrderEntryWsDTO entry, final String mediaPK) throws CommerceCartModificationException {
		
		final String productCode = entry.getProduct().getCode();
		final Long quantity = entry.getQuantity();
		final String configId = entry.getConfigId();
		
		checkConfigurationUpdateAllowed(getProductService().getProductForCode(productCode));
		checkQuoteCartUpdate();

		String configurableProductCode = productCode;
		
		if (StringUtils.isNotBlank(configId)) {
			
			try {
				final ConfigModel configuration = getConfigLifecycleStrategy().retrieveConfigurationModel(configId);
				final boolean takeProductCodeFromConfiguration = StringUtils.isBlank(configurableProductCode) ? true
						: !getConfigurationVariantUtil()
								.isCPQChangeableVariantProduct(getProductService().getProductForCode(configurableProductCode));

				if (takeProductCodeFromConfiguration) {
					configurableProductCode = configuration.getKbKey().getProductCode();
				}
			}
			catch (final ConfigurationEngineException e) {
				throw new CommerceCartModificationException(
						String.format("We could not read configuration model for id %s", configId), e);
			}
		}
		
		LOG.debug(String.format("inside BHGEConfigurationCartIntegrationFacadeImpl, addVCConfigurationToCart for (variant) product %s and configurable product %s",
					productCode, configurableProductCode));
		
		final ProductModel product = getProductService().getProductForCode(configurableProductCode);
		final CommerceCartParameter commerceCartParameter = new CommerceCartParameter();
		final CartModel cart = getCartService().getSessionCart();


		fillCommerceCartParameterForAddToCart(commerceCartParameter, cart, product, quantity == 0 ? 1 : quantity, product.getUnit(),
				true, configId);

		final CommerceCartModification commerceCartModification = getCommerceCartService().addToCart(commerceCartParameter);
		final AbstractOrderEntryModel newEntry = commerceCartModification.getEntry();
		if (newEntry != null) {
		
			addConfigAttributesToCartEntry(newEntry);
			LOG.debug("inside BHGEConfigurationCartIntegrationFacadeImpl, Added product '" + product.getCode() + WITH_CONFIG_ID + configId + "' to cart with quantity '"
						+ newEntry.getQuantity() + REFERENCED_BY_CART_ENTRY_PK + newEntry.getPk().toString() + "'");
			
			if(mediaPK != null) {
				
				LOG.debug("Inside BHGEConfigurationCartIntegrationFacadeImpl -- media pk is " + mediaPK);
				
				final MediaModel mediaModel = modelService.get(PK.parse(mediaPK));
				if (mediaModel != null) {
					newEntry.setConfigurationAttachment(mediaModel);
				}
			}
			getModelService().save(newEntry);
			
			if (newEntry.getConfigurationAttachment() != null) {
				cart.setConfigurationBlock(true);
				getModelService().save(cart);
			}
		}

		return getCartModificationConverter().convert(commerceCartModification);
	}
	
	
	private void uploadAttachmentToEntry(final AbstractOrderEntryModel entry, final String mediaPK, final CartModel cart) {
		
		if (entry != null) {
		
			LOG.debug("Inside BHGEConfigurationCartIntegrationFacadeImpl, uploadAttachmentToEntry '" + "' to cart with quantity '"
						+ entry.getQuantity() + REFERENCED_BY_CART_ENTRY_PK + entry.getPk().toString() + "'");
			
			if(mediaPK != null) {
				LOG.debug("Inside BHGEConfigurationCartIntegrationFacadeImpl, uploadAttachmentToEntry -- meidaPk is " + mediaPK);
				final MediaModel mediaModel = modelService.get(PK.parse(mediaPK));
				if (mediaModel != null) {
					entry.setConfigurationAttachment(mediaModel);
				}
			}
			getModelService().save(entry);
			
			if (entry.getConfigurationAttachment() != null) {
				cart.setConfigurationBlock(true);
				getModelService().save(cart);
			}
		}

	}
	

}
