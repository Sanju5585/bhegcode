package com.bhge.inbound;

import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.c2l.LanguageModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.inboundservices.persistence.PersistenceContext;
import de.hybris.platform.inboundservices.persistence.hook.PrePersistHook;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.i18n.I18NService;
import de.hybris.platform.servicelayer.model.ModelService;

import java.util.Collections;
import java.util.Locale;
import java.util.Objects;
import java.util.Optional;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.annotation.Resource;


public class BHGESapCpiProductPrePersistenceHook implements PrePersistHook
{

	private static final Logger LOG = LoggerFactory.getLogger(BHGESapCpiProductPrePersistenceHook.class);
	@Autowired
	private ProductService productService;

	@Autowired
	private ModelService modelService;



	@Override
	public Optional<ItemModel> execute(final ItemModel item,final PersistenceContext context)
	{
		if (item instanceof ProductModel product)
		{

            LOG.info("Executing BHGEPREPERSISTENCEPRODUCT hook for type Product and item {}", item);

			try {
                final ProductModel productToSave = productService.getProductForCode(product.getCatalogVersion(), product.getCode());

				if (productToSave.getSupercategories() != null && !productToSave.getSupercategories().isEmpty())
				{
					productToSave.getSupercategories().stream().forEach(
							category -> LOG.info("SuperCategories of HybrisProduct are " + category.getCode())
							);

					product.getSupercategories().stream().forEach(
							category -> LOG.info("SuperCategories of CPIProduct are " + category.getCode())
							);

					if(!CollectionUtils.isEqualCollection(productToSave.getSupercategories(), product.getSupercategories()))
					{
						LOG.info("SuperCategories areDifferent for same Product ");
						productToSave.setSupercategories(product.getSupercategories());
						modelService.save(productToSave);
					}
				}
			}
			catch(Exception ex)
			{
				LOG.info("Exception in BHGEPREPERSISTENCEPRODUCT " + ex.getMessage());
			}

		}
		return Optional.of(item);
	}
}
