/**
 *
 */
package com.bhge.core.wishlist.service.impl;

import de.hybris.platform.b2bcommercefacades.company.data.B2BUnitData;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.product.ProductService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.wishlist2.Wishlist2Service;
import de.hybris.platform.wishlist2.enums.Wishlist2EntryPriority;
import de.hybris.platform.wishlist2.model.Wishlist2EntryModel;
import de.hybris.platform.wishlist2.model.Wishlist2Model;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.b2bunit.dao.BHGEB2BUnitDAO;
import com.bhge.core.wishlist.daos.BHGEWishlistDao;
import com.bhge.core.wishlist.service.BHGEWishlistService;


/**
 * @author 212689642
 *
 */
public class DefaultBHGEWishlistService implements BHGEWishlistService
{

	private static final String WLDEFAULT = "default";


	private Wishlist2Service wishlistService;

	private UserService userService;

	private ProductService productService;

	@Resource(name = "productConverter")
	private Converter<ProductModel, ProductData> productConverter;
	
	@Resource
	ModelService modelService;
	
	@Autowired
	private BHGEWishlistDao bhgeWishlistDao;
	
	private final static Logger LOG = Logger.getLogger(DefaultBHGEWishlistService.class);

	/**
	 * @return the wishlistService
	 */
	public Wishlist2Service getWishlistService()
	{
		return wishlistService;
	}

	/**
	 * @param wishlistService
	 *           the wishlistService to set
	 */
	public void setWishlistService(final Wishlist2Service wishlistService)
	{
		this.wishlistService = wishlistService;
	}

	/**
	 * @return the userService
	 */
	public UserService getUserService()
	{
		return userService;
	}

	/**
	 * @param userService
	 *           the userService to set
	 */
	public void setUserService(final UserService userService)
	{
		this.userService = userService;
	}

	/**
	 * @return the productService
	 */
	public ProductService getProductService()
	{
		return productService;
	}

	/**
	 * @param productService
	 *           the productService to set
	 */
	public void setProductService(final ProductService productService)
	{
		this.productService = productService;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.wishlist.service.BHGEWishlistService#getWishlistProductsForUser(de.hybris.platform.core.model.user.
	 * UserModel)
	 */
	@Override
	public ArrayList<String> getWishlistProductsCodeForUser(final UserModel userModel)
	{
		// YTODO Auto-generated method stub
		final ArrayList<String> productCodes = new ArrayList<String>();
		if (wishlistService.getDefaultWishlist(userModel) != null)
		{
			for (final Wishlist2EntryModel entry : wishlistService.getDefaultWishlist(userModel).getEntries())
			{
				productCodes.add(entry.getProduct().getCode());
			}
		}
		return productCodes;
	}

	//public ArrayList<ProductData> getWishlistProductsDataForUser(final UserModel userModel, final String text, final PageableData pageableData)
	public SearchPageData<ProductData> getWishlistProductsDataForUser(final UserModel userModel, final String text, final PageableData pageableData)
	{
		List<Wishlist2EntryModel> wishlistentries = new ArrayList<Wishlist2EntryModel>();
		List<ProductData> productDatas = new ArrayList<ProductData>();
		SearchPageData<Wishlist2EntryModel> wishListEntryresult = null;
		SearchPageData<ProductData> result = null;
		SimpleDateFormat formatter = new SimpleDateFormat("dd-MMM-yyyy");
		final Wishlist2Model wishList = wishlistService.getDefaultWishlist(userModel);
		
		  if(null != wishList)
		  {
			if(null != text) 
			{
				//wishlistentries = bhgeWishlistDao.findWishlistEntrybyWishListandProduct(wishlistService.getDefaultWishlist(userModel), text, pageableData);
				wishListEntryresult = bhgeWishlistDao.findWishlistEntrybyWishListandProduct(wishList, text, pageableData);
			}
			else
			{
				//wishlistentries = bhgeWishlistDao.findWishlistEntrybyWishList(wishlistService.getDefaultWishlist(userModel), pageableData);
				wishListEntryresult = bhgeWishlistDao.findWishlistEntrybyWishList(wishList, pageableData);
			}
			if(null != wishListEntryresult)
			{
				wishlistentries = wishListEntryresult.getResults();
			}
			else
			{
				return null;
			}
			
	     }
			if(!wishlistentries.isEmpty())
			{
				for (final Wishlist2EntryModel entry : wishlistentries)
				{
					final ProductModel productModel = getProductService().getProductForCode(entry.getProduct().getCode());					 
					ProductData productData = productConverter.convert(productModel);
					productData.setAddedasFavouriteTime(formatter.format(entry.getAddedDate()));
					productData.setProductNote(entry.getComment());
					productDatas.add(productData);
				}
				result = createSearchPageData(pageableData,wishListEntryresult, productDatas);
	   	}
		//return productDatas;
		return result;
	}
	
	@SuppressWarnings("deprecation")
	private SearchPageData<ProductData> createSearchPageData(final PageableData pageableData, final SearchPageData<Wishlist2EntryModel> wishListEntryresult, final List<ProductData> productDatas)
	{
		final SearchPageData<ProductData> result = new SearchPageData<ProductData>();

		final PaginationData paginationData = new PaginationData();

		paginationData.setPageSize(pageableData.getPageSize());
		paginationData.setSort(pageableData.getSort());
		paginationData.setTotalNumberOfResults(wishListEntryresult.getPagination().getTotalNumberOfResults());

		paginationData.setNumberOfPages((int) Math
				.ceil(Double.valueOf(paginationData.getTotalNumberOfResults()) / Double.valueOf(paginationData.getPageSize())));

		paginationData.setCurrentPage(Math.max(0, Math.min(paginationData.getNumberOfPages(), pageableData.getCurrentPage())));
		result.setPagination(paginationData);

		int startIndex;
		int endIndex;
		if (pageableData.getCurrentPage() == 0)
		{
			startIndex = 0;
			endIndex = pageableData.getPageSize();
		}
		else
		{
			startIndex = pageableData.getCurrentPage() * pageableData.getPageSize();
			endIndex = (pageableData.getCurrentPage() + 1) * pageableData.getPageSize();
		}

		if (productDatas.size() <= pageableData.getPageSize())
		{
			result.setResults(productDatas);
		}
		else if (endIndex <= productDatas.size())
		{
			result.setResults(productDatas.subList(startIndex, endIndex));
		}
		else
		{
			result.setResults(productDatas.subList(startIndex, productDatas.size()));
		}
		return result;
	}	
	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.wishlist.service.BHGEWishlistService#addProductsToWishlist(java.lang.String[])
	 */
	@Override
	public void addProductsToWishlist(final ArrayList<String> productCodes)
	{
		// YTODO Auto-generated method stub
		final UserModel userModel = userService.getCurrentUser();
		//Create a wishlist if it does not exist for the user
		if (!wishlistService.hasDefaultWishlist(userModel))
		{
			wishlistService.createDefaultWishlist(userModel, WLDEFAULT, "My default wishlist");
		}
		//Check if product already exists in the wishlist
		boolean exists = false;
		for (final String productCode : productCodes)
		{
			for (final Wishlist2EntryModel entry : wishlistService.getDefaultWishlist(userModel).getEntries())
			{
				if (entry.getProduct().getCode().equals(productCode))
				{
					exists = true;
				}
			}
			if (exists == false)
			{
				wishlistService.addWishlistEntry(productService.getProductForCode(productCode), Integer.valueOf(1),
						Wishlist2EntryPriority.MEDIUM, "");
			}
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.wishlist.service.BHGEWishlistService#removeProductsFromWishlist(java.lang.String[])
	 */
	@Override
	public void removeProductsFromWishlist(final ArrayList<String> productCodes)
	{
		// YTODO Auto-generated method stub
		final UserModel userModel = userService.getCurrentUser();
		for (final String productCode : productCodes)
		{
			wishlistService.removeWishlistEntryForProduct(productService.getProductForCode(productCode),
					wishlistService.getDefaultWishlist(userModel));
		}
	}
	
	
	@Override
	public void updateLeaveNoteinProduct(final String productCode, final String leaveNote)
	{
		final UserModel userModel = userService.getCurrentUser();
		if(null != productCode)
		{
			Wishlist2EntryModel wishListEntry = bhgeWishlistDao.findWishlistEntrybyWishListandProduct(wishlistService.getDefaultWishlist(userModel), productCode);
			if(null != wishListEntry)
			{
				wishListEntry.setComment(leaveNote);
				modelService.save(wishListEntry);
				final ProductModel productModel = getProductService().getProductForCode(wishListEntry.getProduct().getCode());
				ProductData productData = productConverter.convert(productModel);
				productData.setProductNote(wishListEntry.getComment());
			}			
		}
		else
		{
			LOG.info(" ProductCode can not be null");
		}
	}

}
