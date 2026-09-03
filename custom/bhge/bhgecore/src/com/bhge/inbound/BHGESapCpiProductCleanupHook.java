package com.bhge.inbound;

import java.util.Collections;
import java.util.Optional;

import de.hybris.platform.inboundservices.persistence.PersistenceContext;
import org.apache.commons.collections4.CollectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import de.hybris.platform.core.model.ItemModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.inboundservices.persistence.hook.PrePersistHook;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.model.ModelService;

public class BHGESapCpiProductCleanupHook implements PrePersistHook{
	
	private static final Logger LOG = LoggerFactory.getLogger(BHGESapCpiProductCleanupHook.class);
	@Autowired
	private ProductService productService;
	
	@Autowired
	private ModelService modelService;

	@Override
	public Optional<ItemModel> execute(ItemModel item,final PersistenceContext context) {
		
		if (item instanceof ProductModel)
		{
			final ProductModel product = (ProductModel) item;

			LOG.info("Executing BHGESapCpiProductCleanupHook hook for type Product and item {}", item);
			

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
					
					productToSave.setSupercategories(Collections.emptyList());
					modelService.save(productToSave);

				}
			}
			catch(Exception ex)
			{
				LOG.info("Exception in BHGESapCpiProductCleanupHook " + ex.getMessage());
			}
		
		}
		return Optional.of(item);
	}

}
