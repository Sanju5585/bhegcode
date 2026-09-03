package com.bhge.core.cronjob;

import de.hybris.platform.category.CategoryService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.Config;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.catalog.model.classification.ClassificationClassModel;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.GEEdgeProductLineMappingModel;
import com.bhge.product.service.BHGEProductService;


public class BHGEProductLineMappingCronJob extends AbstractJobPerformable<CronJobModel>
{

	@Resource(name = "modelService")
	ModelService modelService;

	@Resource(name = "productService")
	private BHGEProductService productService;
	
	@Resource(name = "categoryService")
	private CategoryService categoryService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	private static final Logger LOG = Logger.getLogger(BHGEProductApprovalStatusCronJob.class);

	@Override
	public PerformResult perform(CronJobModel cronJob)
	{
		try {
   		Date lastRunTime = cronJob.getLastRunTime();
   		if(null == lastRunTime) {
   			lastRunTime = new Date();
   		}
   		LOG.debug("Last Runtime: " + lastRunTime.toString());
   		final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
   		
   		// Get the list of products which are created / modified since the last run of cron job.
   		LOG.debug("START - Retrieving List Products to update the Product type");
   		List<GEEdgeProductModel> products = productService.getNewAndUpdatedProducts(formatter.format(lastRunTime));
   		if(null != products) {
   			LOG.debug("No of result items " + products.size());
   		}
   		
   		LOG.debug("END - Retrieving List Products to update the Product type");
   		List<GEEdgeProductLineMappingModel> productLineMappingList = productService.getProductLineMappingItems();
   		
   		if (null != products && products.size() > 0)
   		{
   			for (GEEdgeProductModel product : products)
   			{
   				LOG.debug("Update Product type for product with code " + product.getCode());
   				List<CategoryModel> superCategories = (List<CategoryModel>) product.getSupercategories();
   				boolean isProductTypeSet = false;
   				if (null != superCategories && superCategories.size() > 0)
   				{
   					// Prepare Category Hierarchy for the product
   					Set<String> superCategoryCodes = new HashSet<String>();
   					for (final CategoryModel category : superCategories)
   					{
   						superCategoryCodes.add(category.getCode());
   						for(CategoryModel superCategory : categoryService.getAllSupercategoriesForCategory(category)) {
   							superCategoryCodes.add(superCategory.getCode());
   						}
   					}
   					LOG.debug("List of supercategories for Product " + product.getCode() + " is " + superCategoryCodes.size());
   					
   					// Validate the category hierarchy with product line mapping table
   					for (GEEdgeProductLineMappingModel productLineMapping : productLineMappingList)
   					{
   						if(null != productLineMapping.getCategories() && productLineMapping.getCategories().size() > 0) {
   							for(ClassificationClassModel category : productLineMapping.getCategories()) {
   								if(superCategoryCodes.contains(category.getCode())) {
   									product.setProductType(productLineMapping.getProductType());
   									modelService.save(product);
   									isProductTypeSet = true;
   									break;
   								}
   							}
   						}
   						
   						// If product type already set then go to the next product item in the list.
   						if(isProductTypeSet) {
   							LOG.debug("Product type already set for Product " + product.getCode());
   							break;
   						}
   					}
   				}
   			}
   		}
   		// Setting current time as last run time in Cron job model
   		cronJob.setLastRunTime(new Date());
   		modelService.save(cronJob);
   		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
		} catch(Exception e) {
			LOG.error("Error occured with Product Line Mapping job " + e);
		}
		
		// Setting current time as last run time in Cron job model
		cronJob.setLastRunTime(new Date());
		modelService.save(cronJob);
		return new PerformResult(CronJobResult.FAILURE, CronJobStatus.FINISHED);
	}

}
