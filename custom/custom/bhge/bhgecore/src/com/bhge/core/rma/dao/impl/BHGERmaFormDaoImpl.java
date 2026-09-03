/**
 *
 */
package com.bhge.core.rma.dao.impl;

import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.user.UserService;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.core.rma.dao.BHGERmaFormDao;
import com.bhge.product.service.BHGEProductService;
import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public class BHGERmaFormDaoImpl implements BHGERmaFormDao
{
	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "productService")
	private BHGEProductService productService;


	@Resource(name = "userService")
	public UserService userService;

	private ModelService modelService;

	private final static Logger LOG = Logger.getLogger(BHGERmaFormDaoImpl.class);

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.dao.BHGERmaFormDao#saveRmaForm(de.hybris.platform.core.model.order.AbstractOrderEntryModel)
	 */
	@Override
	public Boolean saveRmaForm(final CartModel cartModel)
	{

		LOG.info("Insite saveRmaForm facade - " + cartModel.getCode());
		try
		{
			cartModel.setIsGovernment(new Boolean(true));
			cartModel.setUser(userService.getCurrentUser());
			modelService.save(cartModel);
			LOG.info("SUCCESS saveRmaForm facade - " + cartModel.getCode());
			return true;
		}
		catch (final ModelSavingException e)
		{
			LOG.info(e.getMessage());
			LOG.info("FAILURE saveRmaForm facade - " + cartModel.getCode());
			return false;
		}


	}

	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.dao.BHGERmaFormDao#fetchCartDetails()
	 */
	@Override
	public List<BHGEHazardousInfoModel> fetchHazardInfo()
	{
		final List<BHGEHazardousInfoModel> hazardModelList = new ArrayList<BHGEHazardousInfoModel>();
		final CartModel cartModel = fetchCartDetails();

		for (final AbstractOrderEntryModel entry : cartModel.getEntries())
		{

			hazardModelList.add(entry.getBhgeHazardousInfo());
		}

		return hazardModelList;

	}



	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.dao.BHGERmaFormDao#fetchCartDetails()
	 */
	@Override
	public CartModel fetchCartDetails()
	{
		final UserModel user = userService.getCurrentUser();
		final Long userPK = user.getPk().getLong();
		final String queryString = "SELECT {cart:PK} FROM {" + CartModel._TYPECODE + " AS cart} WHERE {cart:user}=?userPK";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("userPK", userPK);
		query.addQueryParameters(params);
		final SearchResult<CartModel> result = flexibleSearchService.search(query);

		if (result.getResult().size() > 0)
		{
			return result.getResult().get(0);
		}
		else
		{
			return modelService.create(CartModel.class);
		}

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.dao.BHGERmaFormDao#fetchServicingOfferings(java.lang.String)
	 */
	@Override
	public BHGEServiceOfferingsModel fetchServicingOfferings(final String offeringCode)
	{
		final String queryString = "SELECT {BhgeSO:PK} FROM {" + BHGEServiceOfferingsModel._TYPECODE
				+ " AS BhgeSO} WHERE {BhgeSO:offeringCode}=?offeringCode";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("offeringCode", offeringCode);
		query.addQueryParameters(params);
		final SearchResult<BHGEServiceOfferingsModel> result = flexibleSearchService.search(query);
		if (Objects.nonNull(result))
		{
			return result.getResult().get(0);
		}
		else
		{
			return null;
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.dao.BHGERmaFormDao#getPlantName(java.lang.String)
	 */
	@Override
	public String getPlantName(final String plantCode)
	{
		final String queryString = "SELECT {w:PK} FROM {" + WarehouseModel._TYPECODE + " AS w} WHERE {w:code}=?plantCode";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("plantCode", plantCode);
		query.addQueryParameters(params);
		final SearchResult<WarehouseModel> result = flexibleSearchService.search(query);

		if (Objects.nonNull(result) && result.getResult().size() > 0 && Objects.nonNull(result.getResult().get(0)))
		{
			return result.getResult().get(0).getName();
		}
		else
		{
			return plantCode;
		}

	}

	public OrderModel getOrderByRMA(final String rmaNumber)
	{
		final String queryString = "SELECT {pk} from {order} WHERE {rmaNumber}=?rmaNumber ";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("rmaNumber", rmaNumber);
		query.addQueryParameters(params);
		final SearchResult<OrderModel> result = flexibleSearchService.search(query);
		if (Objects.nonNull(result) && result.getResult().size() > 0 && Objects.nonNull(result.getResult().get(0)))
		{
			return result.getResult().get(0);
		}
		return null;
		
	}
	
	public CartModel getCartById(final String cartId)
	{
		final String queryString = "SELECT {pk} from {cart} WHERE {code}=?cartId ";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("cartId", cartId);
		query.addQueryParameters(params);
		final SearchResult<CartModel> result = flexibleSearchService.search(query);
		if (Objects.nonNull(result) && result.getResult().size() > 0 && Objects.nonNull(result.getResult().get(0)))
		{
			return result.getResult().get(0);
		}
		return null;
		
	}
	
	public BHGEServiceOfferingsModel getServiceOfferingByText(final String offeringText)
	{
		final String queryString = "SELECT {pk} FROM {BHGEServiceOfferings} WHERE upper({offeringText}) LIKE upper(?offeringText) ";
		final FlexibleSearchQuery query = new FlexibleSearchQuery(queryString);
		final Map<String, Object> params = new HashMap<String, Object>();
		params.put("offeringText",  "%" + offeringText + "%");
		query.addQueryParameters(params);
		final SearchResult<BHGEServiceOfferingsModel> result = flexibleSearchService.search(query);
		if (Objects.nonNull(result))
		{
			return result.getResult().get(0);
		}
		else
		{
			return null;
		}

		
	}


}
