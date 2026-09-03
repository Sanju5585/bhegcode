/**
 *
 */
package com.bhge.core.order.daos;

import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import com.hybris.ge.edge.core.model.type.FiservMerchantIdModel;
import com.hybris.ge.edge.core.model.type.PaymenttermModel;
import de.hybris.platform.b2b.model.B2BCustomerModel;
import com.hybris.ge.edge.core.model.type.BHGECurrencyCardThresholdModel;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.category.model.CategoryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderEntryModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.ordersplitting.model.WarehouseModel;

import java.util.List;

import com.bhge.core.model.BHGERfcCallErrorModel;


/**
 * @author pachoudhary
 *
 */
public interface BHGEB2BOrderDao
{

	public List<BHGERfcCallErrorModel> getErrorModelDaoLst();

	public List<OrderModel> getOrderBySubmissionStatus(String fromDate);

	public List<OrderModel> getSubmittedOrders();

	public List<OrderModel> getRFCFailOrders();

	public boolean checkSDSPlantEnabled(String salesArea, String plant);

	public double getShippingFee(String salesArea, String plant);

	public String getCountryCodeForPlant(String plant, String salesArea);

	public String getTimeZoneForPlant(String plant, String salesArea);

	public String getCutOffTimeForPlant(String plant);

	public WarehouseModel getPlantForCode(String plantCode);

	public List<EnumerationValueModel> getSalesOrderTypes();

	public boolean isSalesAreaSDSEnabled(String salesArea);

	public List<BHGERfcCallErrorModel> getRFCErrorList();

	public List<AddressModel> getInvalidShipTos();

	public CartModel getExistingCartForSoldTo(UserModel userModel);

	public OrderModel fetchOrderByCode(String orderCode);

	public List<GEEdgeProductModel> getProductsWithoutCategories();

	public List<GEEdgeProductModel> getProductsWithoutPrices();

	public List<AddressModel> getShipTosWithoutCountries();

	public List<GEEdgeProductModel> getProductsWithP5Status();

	public List<GEEdgeProductModel> getProductsWithType();

	public List<CategoryModel> getCategoriesWithoutProductAssigned();

	public List<GEEdgeProductModel> getProductsWithoutFacet();

	public List<OrderModel> getWeeklyOrders(String fromDate, String toDate);

	public List<QuoteModel> getWeeklyQuoteOrders(String fromDate, String toDate);

	public List<OrderModel> getSubmittedBuyOrders();

	public List<OrderModel> getSubmittedReturnOrders();

	public B2BUnitModel getSoldToForB2BUnit(String soldTo);

	public List<B2BUnitModel> getB2bunitWithoutAddressAssigned();

    List<BHGESavedCreditcardModel> getSavedCards(B2BCustomerModel b2bCustomer);
	BHGECurrencyCardThresholdModel getCurrencyLimit(CurrencyModel cartCurrency);

	/**
	 * TA907173
	 * @param paymentTerm
	 * @Return PaymenttermModel
	 */
    public PaymenttermModel getCCPaymentTerm(String paymentTerm);

	public FiservMerchantIdModel getFiservMerchantId(String currentSalesArea, String currency);

	List<OrderModel> getNotProcessedOrders(final String fromDate);
	
	List<OrderModel> getOrderByStatus(String fromDate);

	List<OrderEntryModel> getConfigAttachmentEntries();

    void deleteAllCarts(UserModel user, String b2bUnit, String salesOrg, String commerceType);
}