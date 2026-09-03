package com.bhge.core.interceptors;

import de.hybris.platform.category.CategoryService;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.security.PrincipalModel;
import de.hybris.platform.servicelayer.interceptor.InterceptorContext;
import de.hybris.platform.servicelayer.interceptor.InterceptorException;
import de.hybris.platform.servicelayer.interceptor.PrepareInterceptor;
import org.apache.log4j.Logger;

import org.springframework.util.CollectionUtils;

import java.util.*;

public class BHGECategoryPrepareInterceptor implements PrepareInterceptor<CategoryModel>
{
    private CategoryService categoryService;

    private static final Logger LOG = Logger.getLogger(BHGECategoryPrepareInterceptor.class);
    private static final String RESOLVED_CATEGORIES_FOR_ALLOWED_PRINCIPALS = "resolved.categories.for.allowed.principals";
    private boolean isPrincipalsAppended = false;


    @Override
    public void onPrepare(CategoryModel categoryModel, InterceptorContext ctx) throws InterceptorException
    {
        if (ctx.isNew(categoryModel))
        {
            if (!CollectionUtils.isEmpty(categoryModel.getAllowedPrincipals()))
            {
                handleAllowedPrincipals(categoryModel, ctx, false);
            }
        }
        else if (ctx.isModified(categoryModel, CategoryModel.ALLOWEDPRINCIPALS))
        {
            LOG.info("Interceptor call for Category : " + categoryModel.getCode());
            try {
                handleAllowedPrincipals(categoryModel, ctx, false);
            } catch (RuntimeException re) {
                LOG.error("Exception in BHGECategoryPrepareInterceptor - onPrepare");
            }
        }
    }
    protected void handleAllowedPrincipals(final CategoryModel categoryModel, final InterceptorContext ctx,
                                           final boolean skipRootSearch)
    {
        //no need to call the service method for setting principals only for given category, because it's already set here

        if (!categoryService.isSetAllowedPrincipalsRecursivelyDisabled())
        {
            if (!skipRootSearch && !categoryService.isRoot(categoryModel))
            {
                for (final CategoryModel superCategory : categoryModel.getAllSupercategories())
                {
                    if (categoryService.isRoot(superCategory) && ctx.isModified(superCategory, CategoryModel.ALLOWEDPRINCIPALS)
                            && !isCategoryForPrincipalsResolved(superCategory, ctx))
                    {
                        handleAllowedPrincipals(superCategory, ctx, true); //start processing from modified root
                    }
                }
            }

            if (isCategoryForPrincipalsResolved(categoryModel, ctx))
            {
                if (LOG.isDebugEnabled())
                {
                    LOG.debug("handling principals for category " + categoryModel.getCode() + "was already done");
                    LOG.debug("assigned principals: ");
                    categoryModel.getAllowedPrincipals().forEach(e -> LOG.debug(e.getUid()));
                }
            }
            else
            {
                // Added Set
                Set<PrincipalModel> addedPrincipals = new HashSet<>();
                // Removed Set
                Set<PrincipalModel> removedPrincipals = new HashSet<>();
                // Evaluating the Added or Removed flag along with the modified principals
                getModifiedAllowedprincipals(categoryModel,addedPrincipals,removedPrincipals);

                // Call for Removing the principals
                if(!CollectionUtils.isEmpty(removedPrincipals)) {
                    LOG.info("Principals remove start");
                    isPrincipalsAppended = false;
                    perfromCategoriesUpdate(categoryModel, ctx, new ArrayList<>(removedPrincipals));
                    LOG.debug("Principals Removed");
                }
                // Call for Adding the principals
                if(!CollectionUtils.isEmpty(addedPrincipals)) {
                    LOG.info("Principals adding start");
                    isPrincipalsAppended = true;
                    perfromCategoriesUpdate(categoryModel, ctx, new ArrayList<>(addedPrincipals));
                    LOG.debug("Principals Added ");
                }
            }
        }
    }

    private void perfromCategoriesUpdate(CategoryModel categoryModel, InterceptorContext ctx, List<PrincipalModel> modifiedPrincipals) {
        LOG.info("Category : " + categoryModel.getCode());
        LOG.info("Modified principals are : " + modifiedPrincipals);
        LOG.info("isAppend flag is : " +isPrincipalsAppended);

        if(!CollectionUtils.isEmpty(modifiedPrincipals)) {
            // Updating Sub Categories
            replacePrincipalsForSubCategories(categoryModel, modifiedPrincipals, ctx, isPrincipalsAppended);
            markCategoryToPrincipalsResolved(categoryModel, ctx);
            // Update Super Categories only when restrictions are added.
            if (isPrincipalsAppended) {
                addPrincipalsToSuperCategories(categoryModel, modifiedPrincipals, ctx, isPrincipalsAppended);
            }
        }
        LOG.info("***** Category is Updated with required Allowed Principals *****");
    }

    private void getModifiedAllowedprincipals(CategoryModel categoryModel, Set<PrincipalModel> addedPrincipals, Set<PrincipalModel> removedPrincipals)
    {
        LOG.info("Inside getModifiedAllowedprincipals method Start");

        Set<PrincipalModel> commonPrincipals = new HashSet<>();

        // Getting the Existing Principals Loaded in BHGECategoryLoadInterceptor
        Set<PrincipalModel> existingPrincipals = CollectionUtils.isEmpty(categoryModel.getNewAllowedPrincipals()) ? Collections.EMPTY_SET
                : new HashSet(categoryModel.getNewAllowedPrincipals());
        commonPrincipals.addAll(existingPrincipals); // Adding Existing principals to get common ones
        removedPrincipals.addAll(existingPrincipals);

        // Getting the Updated Principals which has updated Principals
        Set<PrincipalModel> updatedPrincipals = CollectionUtils.isEmpty(categoryModel.getAllowedPrincipals()) ? Collections.EMPTY_SET
                : new HashSet(categoryModel.getAllowedPrincipals());
        addedPrincipals.addAll(updatedPrincipals);

        if(!CollectionUtils.isEmpty(addedPrincipals) || !CollectionUtils.isEmpty(removedPrincipals))
        {
            // Will get common principals
            commonPrincipals.retainAll(updatedPrincipals);

            // Remove common elements from Existing to get the removed principals
            addedPrincipals.removeAll(commonPrincipals);
            // Remove common elements from Updated to get the added principals
            removedPrincipals.removeAll(commonPrincipals);
        }
    }

    private void updateCategory(final CategoryModel category, final List<PrincipalModel> modifiedPrincipals, Boolean isPrincipalsAppended)
    {
        try {
            //Getting the Existing principals of the Category
            Set<PrincipalModel> allowedPrincipalSet = category.getAllowedPrincipals() == null ? new HashSet<>()
                    : new HashSet(category.getAllowedPrincipals());
            if (isPrincipalsAppended) {
                LOG.info("Restrictions are added for Category : " + category.getCode());
                allowedPrincipalSet.addAll(modifiedPrincipals);
            } else {
                LOG.info("Restrictions are removed for Category : " + category.getCode());
                if(!CollectionUtils.isEmpty(allowedPrincipalSet))
                {
                    boolean removeFlag = allowedPrincipalSet.removeAll(modifiedPrincipals);
                    LOG.info("Status of Remove all flag is : " + removeFlag);
                }
            }
            // Setting back the modified allowed principals to Category
            category.setAllowedPrincipals(new ArrayList<>(allowedPrincipalSet));
        } catch (RuntimeException re)
        {
            LOG.error("Exception while updating the allowed principals in Interceptor for Category : "+category.getCode());
        }
    }

    protected void replacePrincipalsForSubCategories(final CategoryModel category, final List<PrincipalModel> modifiedPrincipals,
                                                     final InterceptorContext ctx, Boolean isPrincipalsAppended)
    {
        LOG.info("Sub Category call for category : " + category.getCode());
        if (category.getCategories() == null)
        {
            return;
        }
        LOG.info("Sub Categories : " + category.getCategories());
        for (final CategoryModel subCategory : category.getCategories())
        {
            // Update Current Category
            updateCategory(subCategory,modifiedPrincipals,isPrincipalsAppended);
            ctx.registerElement(subCategory);

            replacePrincipalsForSubCategories(subCategory, modifiedPrincipals, ctx, isPrincipalsAppended);
        }
    }

    protected void addPrincipalsToSuperCategories(final CategoryModel category, final List<PrincipalModel> modifiedPrincipals,
                                                  final InterceptorContext ctx, Boolean isPrincipalsAppended)
    {
        LOG.info("Super Category call for category : " + category.getCode());
        if (category.getSupercategories() == null)
        {
            return;
        }
        LOG.info("Super Categories : " + category.getSupercategories());
        //get only direct SuperCategories direct and process recursively
        for (final CategoryModel superCategory : category.getSupercategories())
        {
            if (ctx.isModified(superCategory, CategoryModel.ALLOWEDPRINCIPALS)
                    && !isCategoryForPrincipalsResolved(superCategory, ctx))
            {
                replacePrincipalsForSubCategories(superCategory, superCategory.getAllowedPrincipals(), ctx, isPrincipalsAppended);
            }

            final Set<PrincipalModel> principals = superCategory.getAllowedPrincipals() == null ? new HashSet<>()
                    : new HashSet(superCategory.getAllowedPrincipals());
            principals.addAll(modifiedPrincipals);
            superCategory.setAllowedPrincipals(new ArrayList<>(principals));
            LOG.info("Restrictions are added in addPrincipalsToSuperCategories for Category : " + category.getCode());
            ctx.registerElement(superCategory);
            markCategoryToPrincipalsResolved(superCategory, ctx);

            addPrincipalsToSuperCategories(superCategory, modifiedPrincipals, ctx, isPrincipalsAppended);
        }
    }

    protected void markCategoryToPrincipalsResolved(final CategoryModel category, final InterceptorContext ctx)
    {
        final Set<CategoryModel> resolvedCategories = ctx.getAttribute(RESOLVED_CATEGORIES_FOR_ALLOWED_PRINCIPALS) == null
                ? new HashSet<>() : new HashSet((Collection) ctx.getAttribute(RESOLVED_CATEGORIES_FOR_ALLOWED_PRINCIPALS));

        resolvedCategories.add(category);
        ctx.setAttribute(RESOLVED_CATEGORIES_FOR_ALLOWED_PRINCIPALS, resolvedCategories);
    }

    protected boolean isCategoryForPrincipalsResolved(final CategoryModel category, final InterceptorContext ctx)
    {
        if (ctx.getAttribute(RESOLVED_CATEGORIES_FOR_ALLOWED_PRINCIPALS) == null)
        {
            return false;
        }
        return ((Set<CategoryModel>) ctx.getAttribute(RESOLVED_CATEGORIES_FOR_ALLOWED_PRINCIPALS)).contains(category);
    }

    
    public void setCategoryService(final CategoryService categoryService)
    {
        this.categoryService = categoryService;
    }

}
