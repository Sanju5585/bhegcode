/**
 * 
 */
package com.bhge.core.wishlist.daos;

import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;
import de.hybris.platform.wishlist2.model.Wishlist2Model;

import java.util.List;

/**
 * @author 212722447
 *
 */
public interface BHGEWishlistDao
{

	List<Wishlist2Model> findDefaultWishlist(UserModel var1, final PageableData pageableData);
	
	//List<Wishlist2EntryModel> findWishlistEntrybyWishList(final Wishlist2Model wishlist, final PageableData pageableData);
	SearchPageData<Wishlist2EntryModel> findWishlistEntrybyWishList(final Wishlist2Model wishlist, final PageableData pageableData);
	
	//List<Wishlist2EntryModel> findWishlistEntrybyWishListandProduct(final Wishlist2Model wishlist, final String text, final PageableData pageableData);
	SearchPageData<Wishlist2EntryModel> findWishlistEntrybyWishListandProduct(final Wishlist2Model wishlist, final String text, final PageableData pageableData);
	
	Wishlist2EntryModel findWishlistEntrybyWishListandProduct(final Wishlist2Model wishlist, final String productCode);
	
}
