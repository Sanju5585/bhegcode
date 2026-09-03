/**
 *
 */
package com.bhge.core.wishlist.service;

import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.user.UserModel;

import java.util.ArrayList;


/**
 * @author 212689642
 *
 */
public interface BHGEWishlistService
{
	public ArrayList<String> getWishlistProductsCodeForUser(final UserModel userModel);

	//public ArrayList<ProductData> getWishlistProductsDataForUser(final UserModel userModel,final String text, final PageableData pageableData);
	public SearchPageData<ProductData> getWishlistProductsDataForUser(final UserModel userModel,final String text, final PageableData pageableData);
	public void addProductsToWishlist(final ArrayList<String> productCodes);

	public void removeProductsFromWishlist(final ArrayList<String> productCodes);
	
	public void updateLeaveNoteinProduct(final String productCode, final String leaveNote);
}
