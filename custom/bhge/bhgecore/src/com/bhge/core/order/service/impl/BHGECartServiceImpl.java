package com.bhge.core.order.service.impl;


import static com.bhge.core.constants.BhgeCoreConstants.BUY;
import static com.bhge.core.constants.GeneratedBhgeCoreConstants.Enumerations.GEEdgeCartType.FILM;
import static com.bhge.core.constants.GeneratedBhgeCoreConstants.Enumerations.GEEdgeCartType.NONFILM;
import static com.bhge.core.order.service.impl.BHGEPriceAvailabilityCheckServiceImpl.ZERO_PRICE;
import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;
import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNullStandardMessage;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.Normalizer;
import java.text.NumberFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.*;
import java.util.concurrent.atomic.AtomicReference;
import java.util.stream.Collectors;

import jakarta.annotation.Resource;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;

import com.bhge.core.b2bunit.dao.BHGEB2BUnitDAO;
import com.bhge.core.model.BHGECurrencyModel;
import com.bhge.core.util.BHGEPriceAvailabilityUtils;
import com.bhge.sap.orderfulfilment.sapcpiorderexchange.service.BHGEVCCPSConfigurationOrderEntryMapper;
import de.hybris.platform.core.PK;
import de.hybris.platform.core.model.c2l.C2LItemModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSCommerceExternalConfiguration;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSExternalValue;
import de.hybris.platform.sap.productconfig.runtime.cps.model.external.CPSFlatListContainer;
import de.hybris.platform.sap.sapmodel.model.SAPSalesOrganizationModel;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.commons.lang3.math.NumberUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.encoding.WinAnsiEncoding;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.web.multipart.MultipartFile;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

import com.bhge.core.b2bunit.service.BHGEB2BUnitService;
import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.dataimport.service.BHGEBlobDataImportService;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.GEEdgeProductType;
import com.bhge.core.enums.HybrisStatus;
import com.bhge.core.enums.MaterialChannelStatus;
import com.bhge.core.enums.PdfStatusType;
import com.bhge.core.enums.ShippingChargeMethod;
import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGEAnonymousUserCatalogModel;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.model.ReturnPOModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import com.bhge.core.order.service.BHGECalculationService;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.order.strategies.impl.BHGEFindPricingwithCurrentPriceFactoryStrategy;
import com.bhge.core.pdf.event.HeaderFooterPage;
import com.bhge.core.product.BHGECartFactory;
import com.bhge.core.rma.service.BHGERmaFormService;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.util.BHGESAPJCoUtils;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityRequest;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityRequestItem;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZPriceandAvailablityResponse;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZVComponentPrice;
import com.bhge.core.scpi.rfc.priceAndAvailabilty.BHGEZWerksDetail;
import com.bhge.core.user.daos.BHGEUserProfileDao;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.core.util.BHGEProductUtil;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.user.data.BHGEConfigPartNumbersData;
import com.bhge.facades.user.data.BHGECustomerData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.bhge.integration.models.services.BHGESapPlantLogSysOrgService;
import com.bhge.product.service.BHGEProductService;
import com.bhge.store.services.impl.BHGEBaseStoreServiceImpl;
import com.hybris.ge.edge.core.model.type.BHGEAdditionalInfoModel;
import com.hybris.ge.edge.core.model.type.GEEdgeAvailabilityDetailModel;
import com.hybris.ge.edge.core.model.type.GEEdgeStockDetailModel;
import com.hybris.ge.edge.core.model.type.VCComponentPriceModel;
import com.sap.conn.jco.JCoFunction;
import com.sap.conn.jco.JCoStructure;
import com.sap.conn.jco.JCoTable;

import de.hybris.platform.b2b.company.B2BCommerceUnitService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.b2b.model.B2BUserGroupModel;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.data.ProductData;
import de.hybris.platform.commercefacades.user.data.AddressData;
import de.hybris.platform.commerceservices.enums.CountryType;
import de.hybris.platform.commerceservices.order.CommerceCartModification;
import de.hybris.platform.commerceservices.order.CommerceCartModificationException;
import de.hybris.platform.commerceservices.order.CommerceCartService;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.core.CoreAlgorithms;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.enumeration.EnumerationValueModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartEntryModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.product.ProductModel;
import de.hybris.platform.core.model.product.UnitModel;
import de.hybris.platform.core.model.security.PrincipalGroupModel;
import de.hybris.platform.core.model.type.ComposedTypeModel;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.jalo.JaloObjectNoLongerValidException;
import de.hybris.platform.order.AbstractOrderEntryService;
import de.hybris.platform.order.AbstractOrderEntryTypeService;
import de.hybris.platform.order.impl.DefaultCartService;
import de.hybris.platform.ordersplitting.model.WarehouseModel;
import de.hybris.platform.sap.core.configuration.model.SAPConfigurationModel;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.sap.core.jco.exceptions.BackendException;
import de.hybris.platform.sap.core.jco.exceptions.BackendRuntimeException;
import de.hybris.platform.sap.productconfig.facades.ConfigurationData;
import de.hybris.platform.sap.productconfig.services.intf.ProductConfigurationService;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.exceptions.ModelSavingException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.session.SessionService.SessionAttributeLoader;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;
import de.hybris.platform.webservicescommons.util.YSanitizer;



public class BHGECartServiceImpl extends DefaultCartService implements BHGECartService
{

	private static final long serialVersionUID = 1L;
	private static final Logger LOG = LoggerFactory.getLogger(BHGECartServiceImpl.class);
	private static final String SHIP_DATE_MESSAGE = Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE");
	private static final String DISCOUNT_PRICE_MESSAGE = Config.getString("DISC_PRICE_NOTAVBL", "Disc, Price not available");
	private static final String DEFAULT_LONGEST_EST_SHIP_DATE = Config.getString("DEFAULT_LONGEST_EST_SHIP_DATE", "01-Jan-2100");
	private static final String CART_PAGE = "cartPage";
	private static final int APPEND_AS_LAST = -1;
	private static final int CURRENCY_FORMAT_DIGITS = 2;
	private static final String CHECKOUT_FILE = Config.getParameter("bhge.hazardous.pdf.folder.location");
	private static final String SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL = "SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT";
	public static final PDFont TEXT_FONT = PDType1Font.HELVETICA;
	public static final PDFont TEXT_FONT_BOLD = PDType1Font.HELVETICA_BOLD;
	public static final float FONT_SIZE = 12;
	public static final String ORDER_FILE_PREFIX = "ORDER_";
	private static final float LEADING = 1.0f * FONT_SIZE;
	private  static final float MARGIN= 60;

	@Resource(name = "bhgeB2BUnitService")
	private BHGEB2BUnitService bhgeB2BUnitService;

    @Autowired
    private BHGEB2BUnitDAO bhgeB2BUnitDao;

	//default page size A4 . max size is x: 595 , y: 841
	public static final PDRectangle PAGE_SIZE = PDRectangle.A4;
	public static final boolean IS_LANDSCAPE = false;
	public static float FONT_HEIGHT = TEXT_FONT.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * FONT_SIZE;
	public static float YCORDINATE;
	// Table configuration
	public static final float ROW_HEIGHT = 15;
	public static final float CELL_MARGIN = 2;

	//Migration changes start
	private static final String BLOB_CONTAINER_NAME_CHECKOUT_FILE="blob.media.containerName.hazardous.pdf";
	private static final String BLOB_CONTAINER_NAME="blob.media.containerName";
	private static final String BLOB_FILE_NAME_TO_BE_READ_LOGO="blob.media.header.logo";
	private static final String DUMMY_PRODUCT_CODE = "dummy.product.code";
	private static final String JCO_CONNECTIVITY_ERROR= "jco.connectivity.error";
	private static final String BACKEND_EXCEPTION="BackendException occured ";
	private static final String BACKENDRUNTIME_EXCEPTION="BackendRuntimeException occured ";
	private static final String GENERIC_EXCEPTION="Exception occured ";
	private static final String ERROR="Error Message :";

	@Resource(name="bhgeBlobDataImportService")
	private BHGEBlobDataImportService bhgeBlobDataImportService;

	@Resource(name="configurationService")
	private ConfigurationService configurationService;
	//Migration changes end
	@Resource(name = "sapProductConfigConfigurationService")
	private ProductConfigurationService sapProductConfigConfigurationService;
	@Resource(name = "sapProductConfigOrderEntryMapperCPS")
	BHGEVCCPSConfigurationOrderEntryMapper sapProductConfigOrderEntryMapperCPS;
	@Resource(name = "baseStoreService")
	private BHGEBaseStoreServiceImpl baseStoreService;

	@Resource(name = "flexibleSearchService")
	private FlexibleSearchService flexibleSearchService;

	@Resource(name = "sapJcoContainer")
	private SAPJcoContainer sapJcoContainer;

	@Resource(name = "sapPlantLogSysOrgService")
	private BHGESapPlantLogSysOrgService sapPlantLogSysOrgService;

	@Resource(name = "userService")
	private UserService userService;

	@Resource(name = "userProfileService")
	private BHGEUserProfileService userProfileService;

	@Resource
	B2BCommerceUnitService b2bCommerceUnitService;

	@Resource(name = "calculationService")
	private BHGECalculationService bhgeCalculationService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "bhgeCartFactory")
	public BHGECartFactory bhgeCartFactory;
	@Resource(name = "mediaService")
	private MediaService mediaService;

	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;

	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "modelService")
	public ModelService modelService;

	@Resource(name = "commerceCartService")
	private CommerceCartService commerceCartService;

	@Resource(name = "abstractOrderEntryTypeService")
	private AbstractOrderEntryTypeService abstractOrderEntryTypeService;

	@Resource(name = "abstractOrderEntryService")
	private AbstractOrderEntryService<CartEntryModel> abstractOrderEntryService;

	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;

	@Resource(name = "productService")
	private BHGEProductService bhgeProductService;

	@Resource(name = "currentFactoryFindPricingStrategy")
	public BHGEFindPricingwithCurrentPriceFactoryStrategy currentFactoryFindPricingStrategy;

	@Resource(name = "commonI18NService")
	private CommonI18NService commonI18NService;

	@Resource(name = "userProfileDao")
	BHGEUserProfileDao bhgeUserProfileDao;

	@Resource(name = "bhgeRmaFormService")
	public BHGERmaFormService bhgeRmaFormService;

	@Resource(name = "scpiConnector")
	SCPIConnector scpiConnector;

	@Resource(name = "baseSiteService")
	private BaseSiteService baseSiteService;

	 @Resource(name = "bhgeCartService")
	 public BHGECartService bhgeCartService;

	 @Resource
	 private SessionService sessionService;
	 @Resource(name="bhgePriceAvailabilityCheckService")
	 private BHGEPriceAvailabilityCheckServiceImpl bhgePriceAvailabilityCheckService;

	@Resource
	private BHGEVCAuthorExternalConfiguration bhgeVCAuthorExternalConfiguration;

	@Resource(name = "sapProductConfigConfigurationService")
	private ProductConfigurationService productConfigurationService;
	@Resource(name="bhgePriceAvailabilityUtils")
	private BHGEPriceAvailabilityUtils bhgePriceAvailabilityUtils;


	@Override
	public List<EnumerationValueModel> getShippingCarrierMethods(final String shippingChargemethod)
	{

		return getShippingCarrierTypes(shippingChargemethod);

	}


	@SuppressWarnings(
	{ "deprecation", "rawtypes" })
	@Override
	public List<EnumerationValueModel> getShippingCarrierTypes(final String carrierType)
	{
		final Map<String, Object> params = new HashMap<>();
		FlexibleSearchQuery query = null;
		String baseStoreUid = "";

		// Getting the current base store uid
		final BaseStoreModel baseStoreModel = baseStoreService.getCurrentBaseStore();
		if (null != baseStoreModel && StringUtils.isNotEmpty(baseStoreModel.getUid()))
		{
			baseStoreUid = baseStoreModel.getUid().trim();
		}

		final String prePayQueryString = "SELECT {PS:PK} from {PrePayShippingCarrierMethod AS PS},  "
				+ "{GEEdgeBaseStore2ShippingCarrierMapping AS GE}, {BASESTORE AS BS} where {BS:UID}=?baseStoreUid and "
				+ "{GE:SOURCE}={BS:PK} and {GE:TARGET}={PS:PK} ORDER BY {PS:NAME} ASC";

		final String CollectQueryString = "SELECT {PS:PK} from {CollectShippingCarrierMethod AS PS},  "
				+ "{GEEdgeBaseStore2ShippingCarrierMapping AS GE}, {BASESTORE AS BS} where {BS:UID}=?baseStoreUid and "
				+ "{GE:SOURCE}={BS:PK} and {GE:TARGET}={PS:PK} ORDER BY {PS:NAME} ASC";

		if ( BhgeCoreConstants.SHIPPING_CARRIER_METHOD_PREPAY.equalsIgnoreCase(carrierType))
		{
			params.put("baseStoreUid", baseStoreUid);
			query = new FlexibleSearchQuery(prePayQueryString);
			query.addQueryParameters(params);
		}
		else if (BhgeCoreConstants.SHIPPING_CARRIER_METHOD_COLLECT.equalsIgnoreCase(carrierType))
		{
			params.put("baseStoreUid", baseStoreUid);
			params.put("shippingMethod", ShippingChargeMethod.COLLECT);
			query = new FlexibleSearchQuery(CollectQueryString);
			query.addQueryParameters(params);
		}

		final SearchResult result = flexibleSearchService.search(query);
		final List<EnumerationValueModel> listOfEnumerationValueModel = new ArrayList<>();
		final Set<EnumerationValueModel> setOfEnumerationValue = new HashSet<>();
		if (result != null)
		{
			for (Object o : result.getResult()) {
				setOfEnumerationValue.add((EnumerationValueModel) o);
			}
			if (!setOfEnumerationValue.isEmpty())
			{
				final boolean flag = listOfEnumerationValueModel.addAll(setOfEnumerationValue);
				if (flag)
				{
					return listOfEnumerationValueModel;
				}
			}
		}
		return Collections.emptyList();
	}


	@Override
	public GEEdgeCartType getCartTypeForProductType(final GEEdgeProductType productType)
	{
		//This should come from mapping table
		if (productType != null)
		{
			if (null != productType.getCode() && productType.getCode().equals(GEEdgeProductType.ITFILM.getCode()))
			{
				return GEEdgeCartType.FILM;
			}
			else if (productType.getCode().equals(GEEdgeProductType.IT.getCode())
					|| productType.getCode().equals(GEEdgeProductType.MS.getCode())
					|| productType.getCode().equals(GEEdgeProductType.FPT.getCode())
					|| productType.getCode().equals(GEEdgeProductType.NC.getCode()))
			{
				return GEEdgeCartType.NONFILM;
			}
			else
			{
				return GEEdgeCartType.NONFILM;
			}
		}
		return null;
	}


	@Override
	public CartModel getInventoryCheckData(final CartModel cart)
	{

		try
		{
			LOG.debug("getInventoryCheckData");
			final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
			String priceAndAvailabilityRequestXml = prepareRequest(cart, BhgeCoreConstants.FLAG_PA);
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
					flexibleSearchService);
			BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
			if(null != zPriceandAvailablityResponse)
			{
				processResponse(cart, scpiEndpointUrl, zPriceandAvailablityResponse, null, orderEntries);
			}
			else
			{
				if (LOG.isDebugEnabled())
				{
					LOG.debug("Connection failed:SAP has an error");
				}
				final List<AbstractOrderEntryModel> updateOrderEntries = new ArrayList<>();
				for (final AbstractOrderEntryModel orderEntry : orderEntries)
				{
					final List<String> estShipData = new ArrayList<>();
					estShipData.add(SHIP_DATE_MESSAGE);
					orderEntry.setDiscountPrice(DISCOUNT_PRICE_MESSAGE);
					orderEntry.setEstShippingDates(estShipData);
					modelService.save(orderEntry);
					updateOrderEntries.add(orderEntry);
				}
				cart.setEntries(updateOrderEntries);
				modelService.save(cart);
			}
		} //try ends
		catch (final BackendException backEndException)
		{
			LOG.error(BACKEND_EXCEPTION + backEndException.toString());
			cart.setConnectivityerror(Config.getParameter(JCO_CONNECTIVITY_ERROR));
			modelService.save(cart);
		}
		catch (final BackendRuntimeException beckEndRunTimeException)
		{
			LOG.error(BACKENDRUNTIME_EXCEPTION + beckEndRunTimeException.toString());
			handleExceptionCase(cart, beckEndRunTimeException);
		}
		catch (final Exception exception)
		{
			LOG.error(GENERIC_EXCEPTION + exception.toString());
			handleExceptionCase(cart, exception);
			LOG.error(ERROR + ExceptionUtils.getStackTrace(exception));
		}

		// Closing the SAP code here
		return cart;

	}// getInventoryCheckData method ends

	@Override
	public CartModel getInventoryCheckDataForWS(final CartModel cart, final String guestSalesArea)
	{

		try
		{
			LOG.debug("getInventoryCheckData");
			final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
			String priceAndAvailabilityRequestXml = prepareRequestForWS(cart, BhgeCoreConstants.FLAG_PA, guestSalesArea, null, null, orderEntries);
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
					flexibleSearchService);
			BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
			if(null != zPriceandAvailablityResponse)
			{
				processResponse(cart, scpiEndpointUrl, zPriceandAvailablityResponse, null, orderEntries);
			}
			else
			{
				if (LOG.isDebugEnabled())
				{
					LOG.debug("Connection failed:SAP has an error");
				}
				final List<AbstractOrderEntryModel> updateOrderEntries = new ArrayList<>();
				for (final AbstractOrderEntryModel orderEntry : orderEntries)
				{
					final List<String> estShipData = new ArrayList<>();
					estShipData.add(SHIP_DATE_MESSAGE);
					orderEntry.setDiscountPrice(DISCOUNT_PRICE_MESSAGE);
					orderEntry.setEstShippingDates(estShipData);
					modelService.save(orderEntry);
					updateOrderEntries.add(orderEntry);
				}
				cart.setEntries(updateOrderEntries);
				modelService.save(cart);
			}
		} //try ends
		catch (final BackendException backEndException)
		{
			LOG.error(BACKEND_EXCEPTION + backEndException.toString());
			cart.setConnectivityerror(Config.getParameter(JCO_CONNECTIVITY_ERROR));
			modelService.save(cart);
		}
		catch (final BackendRuntimeException beckEndRunTimeException)
		{
			LOG.error(BACKENDRUNTIME_EXCEPTION + beckEndRunTimeException.toString());
			handleExceptionCase(cart, beckEndRunTimeException);
		}
		catch (final Exception exception)
		{
			LOG.error(GENERIC_EXCEPTION + exception.toString());
			handleExceptionCase(cart, exception);
			LOG.error(ERROR + ExceptionUtils.getStackTrace(exception));
		}

		// Closing the SAP code here
		return cart;

	}// getInventoryCheckData method ends


	/**
	 * Preparing RFC Request for Price and Availability
	 *
	 * @param cart
	 * @param connection
	 * @return
	 * @throws BackendException
	 */
	protected JCoFunction prepareRequest(final CartModel cart, final JCoConnection connection, final String requestType)
			throws BackendException
	{
		final String functionModule = Config.getString("SAP_FUNCTION", "ZHYB_PRICE_LIST_MAT_AVLBT");
		final JCoFunction function = setFunctionAndDefault(cart, connection, functionModule);
		final JCoTable orderHeadTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_HEAD);
		final JCoTable orderItemsTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_ITEM);
		final JCoTable requestedDateTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_WMDVSX);
		final JCoTable partnerTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_PARTNER);
		final JCoTable variantConfigTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ORDER_CFGS_VALUE);

		String soldToForCart = "";
		if (userService.isAnonymousUser(userService.getCurrentUser()) && Objects.nonNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
			{
				//LOG.info("In prepareRequest " + sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA));
				cart.setSoldToForCart(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA));
				modelService.save(cart);
			}

		final String uidOfChild = cart.getSoldToForCart() != null
              			? cart.getSoldToForCart().getUid()
              			: StringUtils.EMPTY;

		if (StringUtils.isNotBlank(uidOfChild) && uidOfChild.contains("_"))
		{
			soldToForCart = uidOfChild.substring(0, uidOfChild.indexOf("_"));
		}
		else
		{
			soldToForCart = uidOfChild;
		}

		// Setting Language to the request
		if (null != cart.getStore() && null != cart.getStore().getDefaultLanguage())
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU,
					cart.getStore().getDefaultLanguage().getIsocode().toUpperCase());
		}
		else
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU, BhgeCoreConstants.DEFAULT_LOCALE);
		}
		function.getImportParameterList().setValue(BhgeCoreConstants.I_FLAG_PA, requestType);

		orderHeadTable.appendRow();
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_KUNNR, soldToForCart);

		// If order type is ZOR then $00000000001 will be passed, If type is ZFLM then current cart id will be passed
		//String vbelnValue = GeCoreConstants.IT_HEAD_VBELN_VALUE;
		//if(null != cart.getCartType() && (GeCoreConstants.CART_TYPE_FILM.equals(cart.getCartType().getCode())
		//		|| GeCoreConstants.CART_TYPE_HYBRID.equals(cart.getCartType().getCode()))) {
		final String vbelnValue = BHGESAPJCoUtils.addLeadingZeros(cart.getCode(), 10);
		//}
		LOG.debug("IT_HEAD-VBELN value is " + vbelnValue);
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_VBELN, vbelnValue);

		int lineItemCount = 100000;
		for (final AbstractOrderEntryModel orderEntry : cart.getEntries())
		{
			final String itemNum = ((Integer) lineItemCount).toString();
			lineItemCount++;
			final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) orderEntry.getProduct();
			orderItemsTable.appendRow();
			final JCoTable configValueTable = orderItemsTable.getTable(BhgeCoreConstants.T_IT_ITEM_VARCOND);
			final JCoTable plantsTable = orderItemsTable.getTable(BhgeCoreConstants.T_ET_WERKS);

			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_KPOSN, itemNum);
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MATNR, geEdgeProductModel.getCode());
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MGAME, bhgePriceAvailabilityUtils.getFormattedQuantity(orderEntry.getQuantity()));

			// Setting Product Type IT / FL to the Request
			if (null != geEdgeProductModel.getProductType() && GEEdgeProductType.ITFILM.equals(geEdgeProductModel.getProductType()))
			{
				orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_FL);
			}
			else
			{
				orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_IT);
			}

			// Setting UOM to the request
			if (null != geEdgeProductModel.getUnit())
			{
				orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_VRKME, geEdgeProductModel.getUnit().getSapCode());
			}

			if (StringUtils.isNotBlank(orderEntry.getExternalConfiguration()))
			{
				orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_AVBT_CHECK, BhgeCoreConstants.ATP_CHECK_DATA);
				//				setConfigurationChar(configValueTable, itemNum, orderEntry);
				orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_VARCOND, configValueTable);
				setVariantConfigDetails(variantConfigTable, itemNum, orderEntry); // To Populate VC details of the material
			}
			else
			{
				orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_AVBT_CHECK, geEdgeProductModel.getAtp());
			}

			requestedDateTable.appendRow();
			requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_REQ_QTY, bhgePriceAvailabilityUtils.getFormattedQuantity(orderEntry.getQuantity()));
			requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_MATNR, geEdgeProductModel.getCode());
			requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_YLINE, itemNum);
			if (null != geEdgeProductModel.getUnit())
			{
				requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_DELKZ, geEdgeProductModel.getUnit().getCode());
			}

			preparePlantsForSalesOrg(plantsTable);
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_WERKS, plantsTable);
		}

		if (StringUtils.isNotBlank(cart.getEndUserNumber()))
		{
			partnerTable.appendRow();
			partnerTable.setValue(BhgeCoreConstants.PARVW, Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			partnerTable.setValue(BhgeCoreConstants.KUNNR, cart.getEndUserNumber());
		}

		// Populating Shipto Address details to get the Availability details
		AddressModel deliveryAddress = cart.getDeliveryAddress();
		final AddressModel defaultShipto = getDefaultShiptoForUserForWs();
		if (deliveryAddress == null)
		{
			cart.setDeliveryAddress(defaultShipto);
			deliveryAddress = defaultShipto;
		}

		if (null != deliveryAddress)
		{
			String sapCustomerId = "";
			partnerTable.appendRow();
			partnerTable.setValue(BhgeCoreConstants.PARVW, Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));
			// Existing Shipto Address. Send the Shipto Customer id in the KUNNR field
			if (StringUtils.isNotBlank(deliveryAddress.getSapCustomerID()))
			{
				if (deliveryAddress.getSapCustomerID().contains("_"))
				{
					sapCustomerId = deliveryAddress.getSapCustomerID().substring(0, deliveryAddress.getSapCustomerID().indexOf("_"));
				}
				else
				{
					sapCustomerId = deliveryAddress.getSapCustomerID();
				}
			}
			else
			{
				// Drop Ship (New Address). Send the DEFAULT SHIPTO, IF NOT THERE THEN Send SOLDTO in KUNNR field
				if (null != defaultShipto && StringUtils.isNotBlank(defaultShipto.getSapCustomerID()))
				{
					if (defaultShipto.getSapCustomerID().contains("_"))
					{
						sapCustomerId = defaultShipto.getSapCustomerID().substring(0, defaultShipto.getSapCustomerID().indexOf("_"));
					}
					else
					{
						sapCustomerId = defaultShipto.getSapCustomerID();
					}
				}
			}
			partnerTable.setValue(BhgeCoreConstants.KUNNR, sapCustomerId);
			partnerTable.setValue(BhgeCoreConstants.LAND1,
					(null != deliveryAddress.getCountry()) ? deliveryAddress.getCountry().getIsocode() : "");
			partnerTable.setValue(BhgeCoreConstants.REGIO,
					(null != deliveryAddress.getRegion()) ? deliveryAddress.getRegion().getIsocodeShort() : "");
		}
		LOG.debug("Price & Availability - Request XML: " + function.toXML());
		return function;

	} // prepareRequest method ends
	protected String prepareRequest(final CartModel cart, final String requestType)
			throws BackendException {
		BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest = new BHGEZPriceandAvailablityRequest();
		BHGEZPriceandAvailablityRequestItem isGlobal = new BHGEZPriceandAvailablityRequestItem();
		zPriceandAvailablityRequest.setIsGlobal(setGlobalFuctionValue(cart, isGlobal));
		// Setting Language to the request
		zPriceandAvailablityRequest.setLanguage(bhgePriceAvailabilityUtils.getLanguageForRequest());
		zPriceandAvailablityRequest.setFlagPa(requestType);
		bhgePriceAvailabilityUtils.prepareHeadDetails(zPriceandAvailablityRequest, cart);
		bhgePriceAvailabilityUtils.setSoldTO(cart);
	    prepareItemDetails(zPriceandAvailablityRequest,cart,cart.getEntries());
		preparePartnerDetails(zPriceandAvailablityRequest, cart);

		String requestXml = scpiConnector.toXML(zPriceandAvailablityRequest);
		LOG.info("BHGECartServiceImpl : inside prepareRequest method");
		LOG.info("BHGECartServiceImpl : Price and Availability Request XML: " + requestXml);
		return requestXml;


	}
	public void prepareItemDetails(BHGEZPriceandAvailablityRequest request,CartModel cart,List<AbstractOrderEntryModel> cartEntries) {
	int lineItemCount = BhgeCoreConstants.LINE_ITEM_COUNT;
	AtomicReference<Integer> configCounter = new AtomicReference<>(BhgeCoreConstants.CONFIG_KPOSN_COUNTER);
	cartEntries.forEach(orderEntry -> {
		BHGEZPriceandAvailablityRequestItem itemDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem orderCfgsValueDetail = new BHGEZPriceandAvailablityRequestItem();
		String itemNum = String.valueOf(lineItemCount + orderEntry.getEntryNumber());
		final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) orderEntry.getProduct();
		String salesArea=bhgePriceAvailabilityUtils.getSoldToForCart(cart);
		bhgePriceAvailabilityUtils.setValuesforItemDetail(orderEntry, itemDetail, itemNum, geEdgeProductModel,salesArea);
		if (StringUtils.isNotBlank(orderEntry.getExternalConfiguration()))
		{
			itemDetail.setAvbtCheck(BhgeCoreConstants.ATP_CHECK_DATA);
			setVariantConfigDetails(orderCfgsValueDetail, itemNum, orderEntry);
			request.getOrderCfgsValue().getItems().add(orderCfgsValueDetail);
		}
		else
		{
			itemDetail.setAvbtCheck(geEdgeProductModel.getAtp());
		}
		bhgePriceAvailabilityUtils.setwmdvsxDetail(request, orderEntry, itemNum, geEdgeProductModel);
		preparePlantsForSalesOrg(itemDetail);
		request.getItItem().getItems().add(itemDetail);
		configCounter.getAndSet(configCounter.get() + 1);
	});
	}

	protected String prepareRequestForWS(final CartModel cart, final String requestType, final String guestSalesArea,
										 final Map<Integer, ConfigurationData> configDataMap, final String productLine, final List<AbstractOrderEntryModel> cartEntries)
			throws BackendException, JSONException {
		BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest = new BHGEZPriceandAvailablityRequest();
		zPriceandAvailablityRequest.setIsGlobal(bhgePriceAvailabilityUtils.setGlobalFuctionValueForWS(String.valueOf(cart.getCartType()), guestSalesArea));
		// Setting Language to the request
		zPriceandAvailablityRequest.setLanguage(bhgePriceAvailabilityUtils.getLanguageForRequest());
		zPriceandAvailablityRequest.setFlagPa(requestType);
		bhgePriceAvailabilityUtils.prepareHeadDetails(zPriceandAvailablityRequest, cart);
		bhgePriceAvailabilityUtils.setSoldTO(cart, guestSalesArea);
		bhgePriceAvailabilityUtils.prepareItemDetails(zPriceandAvailablityRequest,guestSalesArea, cartEntries, configDataMap);
		preparePartnerDetails(zPriceandAvailablityRequest, cart);

		String requestXml = scpiConnector.toXML(zPriceandAvailablityRequest);
		LOG.info("BHGECartServiceImpl : inside prepareRequestForWS method");
		LOG.info("BHGECartServiceImpl : Price and Availability Request XML: " + requestXml);
		return requestXml;
	}// prepareRequest method ends
	public void preparePartnerDetails(BHGEZPriceandAvailablityRequest request, CartModel cart) {
		if (StringUtils.isNotBlank(cart.getEndUserNumber())) {
			BHGEZPriceandAvailablityRequestItem endUserDetail = new BHGEZPriceandAvailablityRequestItem();
			endUserDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			endUserDetail.setLand1("");
			endUserDetail.setRegio("");
			endUserDetail.setKunnr(cart.getEndUserNumber());
			request.getItPartner().getItems().add(endUserDetail);
		}
		AddressModel deliveryAddress = cart.getDeliveryAddress();
		final AddressModel defaultShipto = getDefaultShiptoForUserForWs();
		if (deliveryAddress == null)
		{
			cart.setDeliveryAddress(defaultShipto);
			deliveryAddress = defaultShipto;
		}
		LOG.info("BHGECartServiceImpl:preparePartnerDetails  Delivery Address for ItPartner: " + deliveryAddress);
		if (null != deliveryAddress) {
			LOG.info("BHGECartServiceImpl: preparePartnerDetails Delivery Address for ItPartner: " + deliveryAddress.getSapCustomerID());
			BHGEZPriceandAvailablityRequestItem shipToDetail = new BHGEZPriceandAvailablityRequestItem();
			shipToDetail.setParvw(Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));
			if(StringUtils.isNotBlank(deliveryAddress.getSapCustomerID())) {
				shipToDetail.setKunnr(bhgePriceAvailabilityUtils.extractSapCustomerId(deliveryAddress));
			}
			else if(null != defaultShipto && StringUtils.isNotBlank(defaultShipto.getSapCustomerID())) {
				shipToDetail.setKunnr(bhgePriceAvailabilityUtils.extractSapCustomerId(defaultShipto));
			}
				shipToDetail.setLand1(Optional.ofNullable(deliveryAddress.getCountry())
						.map(C2LItemModel::getIsocode)
						.orElse(""));
				shipToDetail.setRegio(Optional.ofNullable(deliveryAddress.getRegion())
						.map(RegionModel::getIsocodeShort)
						.orElse(""));
			request.getItPartner().getItems().add(shipToDetail);
			LOG.info("BHGECartServiceImpl : preparing the itPartnerDetail1 logic before converting to xml "+ shipToDetail);


		}
	}

	@Override
	public JCoFunction setFunctionAndDefault(final CartModel cart, final JCoConnection connection, final String functionModule)
			throws BackendException
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Trying to make to Function call: Setting the Default Input parameters to JCOStructure");
		}
		final JCoFunction function = connection.getFunction(functionModule);
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();
		final JCoStructure jcoStructure = function.getImportParameterList().getStructure(BhgeCoreConstants.IS_GLOBAL_JCOSTRUCTURE);
		String orderType = BhgeCoreConstants.ZOR_TYPE;

		if (null != cart.getCartType() && (BhgeCoreConstants.CART_TYPE_FILM.equals(cart.getCartType().getCode())
				|| BhgeCoreConstants.CART_TYPE_HYBRID.equals(cart.getCartType().getCode())))
		{
			orderType = BhgeCoreConstants.ZFLM_TYPE;
		}

		if (null != sapConfigurationModel)
		{
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_AUART, orderType);
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VKORG, sapConfigurationModel.getSapcommon_salesOrganization());
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VTWEG, sapConfigurationModel.getSapcommon_distributionChannel());
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_SPART, sapConfigurationModel.getSapcommon_division());
		}
		if (userService.isAnonymousUser(userService.getCurrentUser()) && Objects.nonNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
			{
				final B2BUnitModel defaultB2BUnit = sessionService.getAttribute("sessionSalesArea");
				final String b2bUnitUidSplit[] = defaultB2BUnit.getUid().split("_");
				jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_AUART, orderType);
				jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VKORG, b2bUnitUidSplit[1]);
				jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VTWEG, b2bUnitUidSplit[2]);
				jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_SPART, b2bUnitUidSplit[3]);
			}

		return function;
	}

	public BHGEZPriceandAvailablityRequestItem setGlobalFuctionValue(final CartModel cart, final BHGEZPriceandAvailablityRequestItem isGlobal)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Trying to make to Function call: Setting the Default Input parameters to JCOStructure");
		}
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();
		String orderType = BhgeCoreConstants.ZOR_TYPE;

		if (null != cart.getCartType() && (BhgeCoreConstants.CART_TYPE_FILM.equals(cart.getCartType().getCode())
				|| BhgeCoreConstants.CART_TYPE_HYBRID.equals(cart.getCartType().getCode())))
		{
			orderType = BhgeCoreConstants.ZFLM_TYPE;
		}
		if (null != sapConfigurationModel)
		{
			isGlobal.setAuart(orderType);
			isGlobal.setVkorg(sapConfigurationModel.getSapcommon_salesOrganization());
			isGlobal.setVtweg(sapConfigurationModel.getSapcommon_distributionChannel());
			isGlobal.setSpart(sapConfigurationModel.getSapcommon_division());
		}
		if (userService.isAnonymousUser(userService.getCurrentUser()) && Objects.nonNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
			{
				final B2BUnitModel defaultB2BUnit = sessionService.getAttribute("sessionSalesArea");
				final String b2bUnitUidSplit[] = defaultB2BUnit.getUid().split("_");
				isGlobal.setAuart(orderType);
				isGlobal.setVkorg(b2bUnitUidSplit[1]);
				isGlobal.setVtweg(b2bUnitUidSplit[2]);
				isGlobal.setSpart(b2bUnitUidSplit[3]);
			}

		return isGlobal;
	}
	protected SAPConfigurationModel getSapConfigurationForCurrentStore()
	{
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
			if (null != baseStore)
			{
				return baseStore.getSAPConfiguration();
			}
			return null;
		}
		return null;
	}


	/**
	 * Method to set Configuration details
	 *
	 * @param variantConfigTable
	 * @param posex
	 * @param orderEntry
	 */
	@Override
	public JCoTable setVariantConfigDetails(final JCoTable variantConfigTable, final String posex,
			final AbstractOrderEntryModel orderEntry)
	{

		Document doc;
		final DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		try
		{
			// BEGIN FIXES
			dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
			dbf.setFeature("http://xml.org/sax/features/external-general-entities", false);
			dbf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
			final String configString = orderEntry.getExternalConfiguration();
			if (StringUtils.isNotBlank(configString))
			{
				doc = dbf.newDocumentBuilder().parse(new InputSource(
						new ByteArrayInputStream(configString.getBytes(Normalizer.normalize("utf-8", Normalizer.Form.NFD)))));
				doc.getDocumentElement().normalize();
				final NodeList nodeList = doc.getDocumentElement().getChildNodes();
				if (nodeList != null && nodeList.getLength() > 0)
				{
					for (int i = 0; i < nodeList.getLength(); i++)
					{
						if ("CONFIGURATION".equalsIgnoreCase(nodeList.item(i).getNodeName()))
						{
							final NodeList nodeList1 = nodeList.item(i).getChildNodes();
							if (nodeList1 != null && nodeList1.getLength() > 0)
							{
								for (int j = 0; j < nodeList1.getLength(); j++)
								{
									final NodeList nodeList2 = nodeList1.item(j).getChildNodes();
									if (nodeList2 != null && nodeList2.getLength() > 0)
									{
										for (int k = 0; k < nodeList2.getLength(); k++)
										{
											final NodeList nodeList3 = nodeList2.item(k).getChildNodes();
											if (nodeList3 != null && nodeList3.getLength() > 0)
											{
												for (int l = 0; l < nodeList3.getLength(); l++)
												{
													if ("CSTIC".equals(nodeList3.item(l).getNodeName()))
													{
														LOG.debug("CHARC: " + nodeList3.item(l).getAttributes().getNamedItem("CHARC"));
														LOG.debug("VALUE: " + nodeList3.item(l).getAttributes().getNamedItem("VALUE").toString()
																.replaceAll("\"", ""));
														final String charValue = nodeList3.item(l).getAttributes().getNamedItem("VALUE")
																.getTextContent();
														variantConfigTable.appendRow();
														variantConfigTable.setValue(BhgeCoreConstants.CONFIG_ID_TEXT, posex);
														variantConfigTable.setValue(BhgeCoreConstants.CHARC_TEXT,
																nodeList3.item(l).getAttributes().getNamedItem("CHARC").getTextContent());
														variantConfigTable.setValue(BhgeCoreConstants.VALUE_TEXT, charValue);
													}
												}
											}
										}
									}
								}
							}
							break;
						}
					}
				}
			}
		}
		catch (SAXException | ParserConfigurationException | IOException e)
		{
			LOG.error(GENERIC_EXCEPTION + e);
		}

		catch (final Exception e)
		{
			LOG.error(GENERIC_EXCEPTION + e);
		}
		return variantConfigTable;
	}


	public BHGEZPriceandAvailablityRequestItem setVariantConfigDetails(final BHGEZPriceandAvailablityRequestItem orderCfgsValueDetail, final String posex,
			final AbstractOrderEntryModel orderEntry)
	{

		Document doc;
		final DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		try
		{
			// BEGIN FIXES
			dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
			dbf.setFeature("http://xml.org/sax/features/external-general-entities", false);
			dbf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
			final String configString = orderEntry.getExternalConfiguration();
			if (StringUtils.isNotBlank(configString))
			{
				doc = dbf.newDocumentBuilder().parse(new InputSource(
						new ByteArrayInputStream(configString.getBytes(Normalizer.normalize("utf-8", Normalizer.Form.NFD)))));
				doc.getDocumentElement().normalize();
				final NodeList nodeList = doc.getDocumentElement().getChildNodes();
				if (nodeList != null && nodeList.getLength() > 0)
				{
					for (int i = 0; i < nodeList.getLength(); i++)
					{
						if ("CONFIGURATION".equalsIgnoreCase(nodeList.item(i).getNodeName()))
						{
							final NodeList nodeList1 = nodeList.item(i).getChildNodes();
							if (nodeList1 != null && nodeList1.getLength() > 0)
							{
								for (int j = 0; j < nodeList1.getLength(); j++)
								{
									final NodeList nodeList2 = nodeList1.item(j).getChildNodes();
									if (nodeList2 != null && nodeList2.getLength() > 0)
									{
										for (int k = 0; k < nodeList2.getLength(); k++)
										{
											final NodeList nodeList3 = nodeList2.item(k).getChildNodes();
											if (nodeList3 != null && nodeList3.getLength() > 0)
											{
												for (int l = 0; l < nodeList3.getLength(); l++)
												{
													if ("CSTIC".equals(nodeList3.item(l).getNodeName()))
													{
														LOG.debug("CHARC: " + nodeList3.item(l).getAttributes().getNamedItem("CHARC"));
														LOG.debug("VALUE: " + nodeList3.item(l).getAttributes().getNamedItem("VALUE").toString()
																.replaceAll("\"", ""));
														final String charValue = nodeList3.item(l).getAttributes().getNamedItem("VALUE")
																.getTextContent();
														orderCfgsValueDetail.setConfigId(posex);
														orderCfgsValueDetail.setCharc(nodeList3.item(l).getAttributes().getNamedItem("CHARC").getTextContent());
														orderCfgsValueDetail.setValue(charValue);
													}
												}
											}
										}
									}
								}
							}
							break;
						}
					}
				}
			}
		}
		catch (Exception e)
		{
			LOG.error(GENERIC_EXCEPTION + e);
		}

		return orderCfgsValueDetail;
	}


	/**
	 * This method will prepare the list of plants available for the current sales area and add those plants information
	 * to the Price and Availability RFC request.
	 *
	 * @param plantsTable
	 * @return
	 */
	protected JCoTable preparePlantsForSalesOrg(final JCoTable plantsTable)
	{
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			if (null != baseStore)
			{
				final Set<WarehouseModel> plants = sapPlantLogSysOrgService.getPlantsForSalesOrganization(baseStore);
				if (null != plants && !plants.isEmpty())
				{
					for (final WarehouseModel plant : plants)
					{
						plantsTable.appendRow();
						plantsTable.setValue(BhgeCoreConstants.IT_ITEM_WERKS_LIST, plant.getCode());
					}
				}
			}
			return plantsTable;
		}
		else
		{
			final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
			final CountryModel countryModel = baseStoreModel.getDefaultCountry();
			if (Objects.nonNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
			{
				final String sessionSalesOrg = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESORG);
				if (sessionSalesOrg != null && sessionSalesOrg.contains("_"))
				{
					final String[] sessionSalesOrgArr = sessionSalesOrg.split("_");
					if (sessionSalesOrgArr != null && sessionSalesOrgArr.length >= 2)
					{
						final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao
								.getCountryandSalesOrgMappingForAnonymousUser(sessionSalesOrgArr[0], sessionSalesOrgArr[1],
										sessionSalesOrgArr[2], countryModel);
						if (null != anonymousUserCatalog && !anonymousUserCatalog.getPlants().isEmpty())
						{
							for (final String plant : anonymousUserCatalog.getPlants())
							{
								plantsTable.appendRow();
								plantsTable.setValue(BhgeCoreConstants.IT_ITEM_WERKS_LIST, plant);
							}
						}
					}
				}
			}
			return plantsTable;
		}
	}

	//protected BHGEZPriceandAvailablityRequest preparePlantsForSalesOrg(final BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest)
	protected BHGEZPriceandAvailablityRequestItem preparePlantsForSalesOrg(final BHGEZPriceandAvailablityRequestItem itItemDetail)
	{
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final BHGEZPriceandAvailablityRequestItem werksDetail = new BHGEZPriceandAvailablityRequestItem();
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			if (null != baseStore)
			{
				final Set<WarehouseModel> plants = sapPlantLogSysOrgService.getPlantsForSalesOrganization(baseStore);
				if (null != plants && !plants.isEmpty())
				{
					for (final WarehouseModel plant : plants)
					{
						BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
						werksList.setWerksList(plant.getCode());
						werksDetail.getItems().add(werksList);
					}
					itItemDetail.setWerks(werksDetail);
				}
			}
			return itItemDetail;
		}
		else
		{
			final BaseStoreModel baseStoreModel = baseStoreService.getBaseStoreForUid(BhgeCoreConstants.GUEST_BASE_STORE_UID);
			final CountryModel countryModel = baseStoreModel.getDefaultCountry();
			if (Objects.nonNull(sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA)))
			{
				final String sessionSalesOrg = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESORG);
				if (sessionSalesOrg != null && sessionSalesOrg.contains("_"))
				{
					final String[] sessionSalesOrgArr = sessionSalesOrg.split("_");
					if (sessionSalesOrgArr.length >= 2)
					{
						final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeUserProfileDao
								.getCountryandSalesOrgMappingForAnonymousUser(sessionSalesOrgArr[0], sessionSalesOrgArr[1],
										sessionSalesOrgArr[2], countryModel);
						if (null != anonymousUserCatalog && !anonymousUserCatalog.getPlants().isEmpty())
						{
							for (final String plant : anonymousUserCatalog.getPlants())
							{
								BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
								werksList.setWerksList(plant);
								werksDetail.getItems().add(werksList);
							}
							itItemDetail.setWerks(werksDetail);
						}
					}
				}
			}
			return itItemDetail;
		}
	}

	protected BHGEZPriceandAvailablityRequestItem preparePlantsForSalesOrgForWS(final BHGEZPriceandAvailablityRequestItem itItemDetail,  final String guestSalesArea,final String productCode)
	{
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final BHGEZPriceandAvailablityRequestItem werksDetail = new BHGEZPriceandAvailablityRequestItem();
		final BHGEProductUtil productUtil = new BHGEProductUtil();
		final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) bhgeProductService.getProductForCode(productCode);
		final String deliveryPlant = productUtil.getPlantForCurrentSalesAreaData(geEdgeProductModel, userService);
		LOG.info("BHGECartServiceImpl::The delivery plant for the productcode" +productCode +": is :"+ deliveryPlant);
		if(StringUtils.isNotEmpty(deliveryPlant))
		{

			BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
			werksList.setWerksList(deliveryPlant);
			werksDetail.getItems().add(werksList);
			itItemDetail.setWerks(werksDetail);
			return itItemDetail;

		} else {
			if (userService.getCurrentUser() instanceof GEEdgeCustomerModel) {
				if (null != baseStore) {
					final Set<WarehouseModel> plants = sapPlantLogSysOrgService.getPlantsForSalesOrganization(baseStore);
					if (null != plants && !plants.isEmpty()) {
						for (final WarehouseModel plant : plants) {
							BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
							werksList.setWerksList(plant.getCode());
							werksDetail.getItems().add(werksList);
						}
						itItemDetail.setWerks(werksDetail);
					}
				}
				return itItemDetail;
			} else {
				final BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea);
				if (null != anonymousUserCatalog && !anonymousUserCatalog.getPlants().isEmpty()) {
					for (final String plant : anonymousUserCatalog.getPlants()) {
						BHGEZPriceandAvailablityRequestItem werksList = new BHGEZPriceandAvailablityRequestItem();
						werksList.setWerksList(plant);
						werksDetail.getItems().add(werksList);
					}
					itItemDetail.setWerks(werksDetail);
				}
				return itItemDetail;
			}
		}
	}



	@Override
	public AddressModel getDefaultShiptoForUserForWs()
	{
		try {
			final UserModel user = userService.getCurrentUser();
			if (!(user instanceof GEEdgeCustomerModel)) {
				return null;
			}
			final GEEdgeCustomerModel customer = (GEEdgeCustomerModel) user;
			//This log will be removed after longconfig PNA test
			LOG.info("BHGECartServiceImpl inside getDefaultShiptoForUserForWs");

			final BHGESoldToData soldTo = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
			//This log will be removed after longconfig PNA test
			LOG.info("BHGECartServiceImpl inside getDefaultShiptoForUserForWs After getting soldTo");
			//final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
			final BHGECustomerData bhgeCustomerData = prepareCustomerData(customer);
			//This log will be removed after longconfig PNA test
			LOG.info("BHGECartServiceImpl inside getDefaultShiptoForUserForWs After preparing customerData");
			return getDefaultShipto(bhgeCustomerData, soldTo);
		} catch (RuntimeException runtimeException) {
			runtimeException.printStackTrace();
			return null;
		}
	}

	/**
	 * @param customer
	 * @return
	 */
	private BHGECustomerData prepareCustomerData(final GEEdgeCustomerModel customer)
	{
		//This log will be removed after longconfig PNA test
		LOG.info("BHGECartServiceImpl inside prepareCustomerData");
		List<String> CustomerAccountGroups = bhgeB2BUnitService.getCustomerAccountGroupsforB2bUnit();
		final BHGECustomerData bhgeCustomerData = new BHGECustomerData();
		if (null != customer.getDefaultSoldTo())
		{
			bhgeCustomerData.setDefaultSoldTo(customer.getDefaultSoldTo().getUid());
		}

		if (null != customer.getDefaultShipTo())
		{
			bhgeCustomerData.setDefaultShipTo(customer.getDefaultShipTo().getPk().toString());
		}

		if (customer.getDefaultSoldTo() == null || customer.getDefaultShipTo() == null)
		{
			//This log will be removed after longconfig PNA test
			LOG.info("BHGECartServiceImpl inside prepareCustomerData default soldTo "+customer.getDefaultSoldTo()+"shipTo "+customer.getDefaultShipTo());
			final Set<B2BUnitModel> b2bUnitModelList = new LinkedHashSet<B2BUnitModel>();
			for (final PrincipalGroupModel myVal : customer.getAllGroups())
			{
				if (myVal instanceof B2BUserGroupModel)
				{
					for (final PrincipalGroupModel myB2b : ((B2BUserGroupModel) myVal).getGroups())
					{
						if (myB2b instanceof B2BUnitModel && !myB2b.getUid().equalsIgnoreCase("GEEDGENETPRIMESOLDTO")
								&& !myVal.getUid().contains("_")
								&& CustomerAccountGroups.contains(((B2BUnitModel) myB2b).getAccountGroup()))
						{
							b2bUnitModelList.add(((B2BUnitModel) myB2b));
						}
					}
				}
				else if (myVal instanceof B2BUnitModel && !myVal.getUid().equalsIgnoreCase("GEEDGENETPRIMESOLDTO")
						&& !myVal.getUid().contains("_")
						&& CustomerAccountGroups.contains(((B2BUnitModel) myVal).getAccountGroup()))
				{
					b2bUnitModelList.add(((B2BUnitModel) myVal));
				}
			}

			//This log will be removed after longconfig PNA test
			LOG.info("BHGECartServiceImpl inside prepareCustomerData default shipTo and soldTo after iterating all customergroups");
			// adding default sold to and ship to
			for (final B2BUnitModel b2bUnitModel : b2bUnitModelList)
			{
				if (customer.getDefaultSoldTo() == null)
				{
					bhgeCustomerData.setDefaultSoldTo(b2bUnitModel.getUid());
                    Boolean isAPAC = getAPACstatusforSalesOrg();
                    Boolean isSapBlocked = false;
					if (b2bUnitModel.getAddresses() != null && b2bUnitModel.getAddresses().size() > 0)
					{
						for (final AddressModel addrModel : b2bUnitModel.getAddresses())
						{
							if (Boolean.TRUE.equals(addrModel.getShippingAddress()))
							{
                                if(null != addrModel.getSapCustomerID()){
                                    isSapBlocked = bhgeSoldToUtil.getSoldToBlockStatus(addrModel.getSapCustomerID());
                                    if(isSapBlocked){
                                        continue;
                                    }
                                }
                                if(isAPAC){
                                    if(Boolean.TRUE.equals(addrModel.getIsPrimaryAddress())){
                                        bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
                                        break;
                                    }
                                }
                                else{
								bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
								break;
							}
                            }
                            if(isAPAC && null != bhgeCustomerData && bhgeCustomerData.getDefaultShipTo() == null && customer.getDefaultSoldTo() != null ){
                                LOG.info("no Primaryaddress for apacsalesOrg defaulting to soldto");
                                AddressModel address = getSoldToAddressforWS(customer.getDefaultSoldTo().getUid());
                                bhgeCustomerData.setDefaultShipTo(address.getPk().toString());
                            }
						}
					}
				}
				else if (customer.getDefaultSoldTo() != null)
				{
					bhgeCustomerData.setDefaultSoldTo(customer.getDefaultSoldTo().getUid());
					if (customer.getDefaultShipTo() != null)
					{
						bhgeCustomerData.setDefaultShipTo(customer.getDefaultShipTo().getPk().toString());
					}
					else if (customer.getDefaultSoldTo().getAddresses() != null
							&& !customer.getDefaultSoldTo().getAddresses().isEmpty())
					{
						for (final AddressModel addrModel : customer.getDefaultSoldTo().getAddresses())
						{
							if (addrModel.getShippingAddress())
							{
								bhgeCustomerData.setDefaultShipTo(addrModel.getPk().toString());
								break;
							}
						}
					}
				}
			}
			// end of block for adding default sold to and default ship to
		}
		//This log will be removed after longconfig PNA test
		LOG.info("BHGECartServiceImpl inside prepareCustomerData");
		return bhgeCustomerData;
	}

	private AddressModel getDefaultShipto(final BHGECustomerData geEdgeCustomerData, final BHGESoldToData defaultSoldTo)
	{
		//This log will be removed after longconfig PNA test
		LOG.info("BHGECartServiceImpl inside getDefaultShipto method");
		AddressModel defaultShipTo = null;
		// Condition 1: Check if the default ship to is set for customer and get
		// the default ship to from the customer
		if (geEdgeCustomerData.getDefaultSoldTo() != null && geEdgeCustomerData.getDefaultShipTo() != null
				&& geEdgeCustomerData.getDefaultSoldTo().equals(defaultSoldTo.getUid()))
		{
			//This log will be removed after longconfig PNA test
			LOG.info("BHGECartServiceImpl inside getDefaultShipto method default soldTo "+geEdgeCustomerData.getDefaultSoldTo());
			final String defaultSoldToChild = geEdgeCustomerData.getDefaultSoldTo() + "_"
					+ userProfileService.getUserDefaultSalesRegion();
			final B2BUnitModel cpdefaultSoldTo = userProfileService.findChildB2BUnitModel(defaultSoldToChild);
			if (cpdefaultSoldTo != null)
			{
				defaultShipTo = b2bCommerceUnitService.getAddressForCode(cpdefaultSoldTo, geEdgeCustomerData.getDefaultShipTo());
			}
		}

		// Condition 2:If default ship to is not set find the sold to and get
		// the ship to from the address of sold to
		if (defaultShipTo == null)
		{
			//This log will be removed after longconfig PNA test
			LOG.info("BHGECartServiceImpl inside getDefaultShipto method checking null");
			//final String childSoldToName = defaultSoldTo.getUid() + "_" + userProfileService.getUserDefaultSalesRegion();

			//US397-changed UID logic

			final String childSoldToName = defaultSoldTo.getUid();

			final B2BUnitModel soldToChild = userProfileService.findChildB2BUnitModel(childSoldToName);
			// Get the list of address attached to the sold to
			if (soldToChild != null)
			{
                Boolean isAPACSalesOrg = getAPACstatusforSalesOrg();
				final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
				for (final AddressModel address : listOfSoldToAddress)
				{
					if (Boolean.TRUE.equals(address.getShippingAddress() && address.getSapCustomerID() != null)
							&& address.getSapCustomerID().equals(defaultSoldTo.getUid()))
					{
                        if(isAPACSalesOrg){
                            if(Boolean.TRUE.equals(address.getIsPrimaryAddress())){
                                defaultShipTo = address;
                                break;
                            }
                        }else {
                            defaultShipTo = address;
                            break;
                        }
					}
				}
                if(isAPACSalesOrg && null == defaultShipTo) {
                    defaultShipTo = getSoldToAddressforWS(soldToChild.getUid());
                }
            }
		}
		return defaultShipTo;
	}

    public AddressModel getSoldToAddressforWS(final String soldToId) {
        final String userSalesRegion = getUserDefaultSalesRegion();
        String childSoldToName = soldToId;
        if (!soldToId.contains("_")) {
            {
                if (!soldToId.contains("_" + userSalesRegion)) {
                    childSoldToName = soldToId + "_" + userSalesRegion;
                }
            }
        }

        final B2BUnitModel soldToChild = findChildB2BUnitModel(childSoldToName);
        AddressModel soldToAddress = null;
        final List<AddressModel> listOfSoldToAddress = (List<AddressModel>) soldToChild.getAddresses();
        for (final AddressModel address : listOfSoldToAddress) {
            if (address.getBillingAddress().booleanValue()) {
                soldToAddress = address;
                break;
            }
        }
        return soldToAddress;
    }

    public String getUserDefaultSalesRegion() {
        return userProfileService.getUserDefaultSalesRegion();
    }

    public B2BUnitModel findChildB2BUnitModel(final String uid) {

        return userProfileService.findChildB2BUnitModel(uid);
    }

    public Boolean getAPACstatusforSalesOrg() {
        final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
        String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
        String salesOrg = null;
        String distributionChannel = null;
        String division = null;
        String[] defaultB2BId = null;
        final String defaultUnitId = b2bUnit;
        if (Objects.nonNull((defaultUnitId)) && defaultUnitId.contains("_")) {
            defaultB2BId = defaultUnitId.split("_");
            salesOrg = defaultB2BId[1];
            if (defaultB2BId.length > 2) {
                distributionChannel = defaultB2BId[2];
            }
            if (defaultB2BId.length > 3) {
                division = defaultB2BId[3];
            }
        }
        SAPSalesOrganizationModel sapSalesOrganizationModel = bhgeB2BUnitDao.getCategoriesFromSalesOrg(salesOrg, distributionChannel, division);
        if (null != sapSalesOrganizationModel && sapSalesOrganizationModel.getIsAPAC() != null && Boolean.TRUE.equals(sapSalesOrganizationModel.getIsAPAC())) {
            LOG.info("into the loop as salesorg is APAC" + true);
            return true;
        }
        return false;
    }

	protected void processResponse(final CartModel cart, final String page, final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, final String productLine, final List<AbstractOrderEntryModel> cartEntries)
	{
		LOG.info("BHGECartServiceImpl Price & Availability - Response XML: " + scpiConnector.toXML(zPriceandAvailablityResponse));
		processErrors(cart, zPriceandAvailablityResponse);
		processPrice(cart, zPriceandAvailablityResponse,  page, productLine, cartEntries);
		processAvailability(cart, zPriceandAvailablityResponse, cartEntries);
	}

	/**
	 * Processing RFC Errors for Price and Availability
	 *
	 * @param cart
	 * @param function
	 */
	protected void processErrors(final CartModel cart, final JCoFunction function)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.info("Processing the errors");
		}
		final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
		final JCoTable messageItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_RETURN);

		final int numOfMessageRows = messageItemsTable.getNumRows();
		if (numOfMessageRows > 0)
		{
			final Boolean containsErrors = getErrorFromMessageTable(messageItemsTable, cart);
			if (Boolean.TRUE.equals(containsErrors))
			{
				final List<AbstractOrderEntryModel> updateOrderEntries = new ArrayList<>();
				for (final AbstractOrderEntryModel orderEntry : orderEntries)
				{
					final List<String> estShipData = new ArrayList<>();
					estShipData.add(SHIP_DATE_MESSAGE);
					orderEntry.setDiscountPrice(DISCOUNT_PRICE_MESSAGE);
					orderEntry.setEstShippingDates(estShipData);
					modelService.save(orderEntry);
					updateOrderEntries.add(orderEntry);
				}
				cart.setEntries(updateOrderEntries);
				modelService.save(cart);
			}
		}

		// Processing END_USER error
		final JCoTable errorMessageTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_RETURN);
		for (int i = 0; i < errorMessageTable.getNumRows(); i++)
		{
			final String messageCode = errorMessageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_CODE);
			final String messageType = errorMessageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_TYPE);
			final String message = errorMessageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_MESSAGE);
			LOG.debug("Message Type: " + messageType);
			LOG.debug("Message: " + message);
			LOG.debug("Message Code: " + messageCode);
			if (StringUtils.isNotBlank(messageCode) && BhgeCoreConstants.END_USER_ERROR_CODE.equals(messageCode.trim()))
			{
				sessionService.setAttribute("isEndUserValid", false);
				break;
			}
			errorMessageTable.nextRow();
		}
	}

	protected void processErrors(final CartModel cart, final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.info("Processing the errors");
		}
		final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
		BHGEZPriceandAvailablityRequestItem etReturn = zPriceandAvailablityResponse.getEtReturn();


		if(null != etReturn && CollectionUtils.isNotEmpty(etReturn.getItems()))
		{
			final Boolean containsErrors = getErrorFromMessageTable(etReturn, cart);
			if (Boolean.TRUE.equals(containsErrors))
			{
				final List<AbstractOrderEntryModel> updateOrderEntries = new ArrayList<>();
				for (final AbstractOrderEntryModel orderEntry : orderEntries)
				{
					final List<String> estShipData = new ArrayList<>();
					estShipData.add(SHIP_DATE_MESSAGE);
					orderEntry.setDiscountPrice(DISCOUNT_PRICE_MESSAGE);
					orderEntry.setEstShippingDates(estShipData);
					modelService.save(orderEntry);
					updateOrderEntries.add(orderEntry);
				}
				cart.setEntries(updateOrderEntries);
				modelService.save(cart);
			}
		}

		// Processing END_USER error
		if(null != etReturn && CollectionUtils.isNotEmpty(etReturn.getItems()))
		{
			for (BHGEZPriceandAvailablityRequestItem item : etReturn.getItems())
			{
				final String messageCode = item.getCode();
				final String messageType = item.getType();
				final String message = item.getMessage();
				LOG.debug("Message Type: " + messageType);
				LOG.debug("Message: " + message);
				LOG.debug("Message Code: " + messageCode);
				if (StringUtils.isNotBlank(messageCode) && BhgeCoreConstants.END_USER_ERROR_CODE.equals(messageCode.trim()))
				{
					sessionService.setAttribute("isEndUserValid", false);
					break;
				}
			}
		}
	}

	@Override
	public Boolean getErrorFromMessageTable(final JCoTable messageTable, final AbstractOrderModel orderModel)
	{
		boolean containsErrors = Boolean.FALSE;
		final int numOfMessageRows = messageTable.getNumRows();
		if (numOfMessageRows > 0)
		{
			if (LOG.isDebugEnabled())
			{
				LOG.debug("Size of message table " + numOfMessageRows);
			}
			final String[] arrayOfCriticalErrors = StringUtils.split(Config.getParameter("CRITICAL_ERROR_ORDER_SUBMISSION"), ",");
			for (int i = 0; i < numOfMessageRows; i++)
			{
				final String messageType = messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_TYPE);
				final String message = messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_MESSAGE);

				if ("E".equalsIgnoreCase(messageType))
				{
					containsErrors = Boolean.TRUE;
					final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
					if (LOG.isDebugEnabled())
					{
						LOG.debug("Message TYPE " + messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_TYPE) + " Message CODE "
								+ messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_CODE) + " Message LOG NO "
								+ messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_LOG_MSGNO) + " Message MESSAGE "
								+ messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_MESSAGE));
					}
					final DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
					// Get the date today using Calendar object.
					final Date today = Calendar.getInstance().getTime();
					final String reportDate = df.format(today);
					if (orderModel.getUser() instanceof GEEdgeCustomerModel)
					{
						final GEEdgeCustomerModel geEdgeCustomerModel = userProfileService
								.findCurrentUserProfile(orderModel.getUser().getUid());
						model.setCurrentUserEmail(geEdgeCustomerModel.getEmail());
					}
					final String soldToId = orderModel.getSoldToForCart() != null
                                                       ? orderModel.getSoldToForCart().getUid()
                                                       : StringUtils.EMPTY;
					model.setErrorCode(messageType);
					model.setErrorDescription(message);
					model.setCurrentSoldToId(soldToId);
					model.setErrorTime(reportDate);
					model.setStatus(Boolean.FALSE);

					if (ArrayUtils.contains(arrayOfCriticalErrors, message))
					{
						model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
						model.setStatus(Boolean.TRUE);
					}
					else
					{
						model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
						model.setStatus(Boolean.FALSE);
					}
					modelService.save(model);

				}
				messageTable.nextRow();
			}

		}
		return containsErrors;
	}

	public Boolean getErrorFromMessageTable(final BHGEZPriceandAvailablityRequestItem etReturn, final AbstractOrderModel orderModel)
	{
		Boolean containsErrors = Boolean.FALSE;
		//final int numOfMessageRows = messageTable.getNumRows();
		//if (numOfMessageRows > 0)
		if(null != etReturn && CollectionUtils.isNotEmpty(etReturn.getItems()))
		{
			if (LOG.isDebugEnabled())
			{
				LOG.debug("Size of message table " + (CollectionUtils.isNotEmpty(etReturn.getItems())
						? etReturn.getItems().size() : 0));
			}
			final String[] arrayOfCriticalErrors = StringUtils.split(Config.getParameter("CRITICAL_ERROR_ORDER_SUBMISSION"), ",");
			//for (int i = 0; i < numOfMessageRows; i++)
			for (BHGEZPriceandAvailablityRequestItem item :etReturn.getItems())
			{
				final String messageType = item.getType();
				final String message = item.getMessage();

				if ("E".equalsIgnoreCase(messageType))
				{
					containsErrors = Boolean.TRUE;
					final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
					if (LOG.isDebugEnabled())
					{
						/*
						 * LOG.debug("Message TYPE " + messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_TYPE) +
						 * " Message CODE " + messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_CODE) +
						 * " Message LOG NO " + messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_LOG_MSGNO) +
						 * " Message MESSAGE " + messageTable.getString(BhgeCoreConstants.T_MESSAGETABLE_MESSAGE));
						 */
						LOG.debug("Message TYPE " + item.getType() + " Message CODE " + item.getCode() + " Message LOG NO "
								+ item.getLogMsgNo() + " Message MESSAGE " + item.getMessage());
					}
					final DateFormat df = new SimpleDateFormat("MM/dd/yyyy");
					// Get the date today using Calendar object.
					final Date today = Calendar.getInstance().getTime();
					final String reportDate = df.format(today);
					if (orderModel.getUser() instanceof GEEdgeCustomerModel)
					{
						final GEEdgeCustomerModel geEdgeCustomerModel = userProfileService
								.findCurrentUserProfile(orderModel.getUser().getUid());
						model.setCurrentUserEmail(geEdgeCustomerModel.getEmail());
					}
					final String soldToId = orderModel.getSoldToForCart() != null
                                                       ? orderModel.getSoldToForCart().getUid()
													   : StringUtils.EMPTY;
					model.setErrorCode(messageType);
					model.setErrorDescription(message);
					model.setCurrentSoldToId(soldToId);
					model.setErrorTime(reportDate);
					model.setStatus(Boolean.FALSE);

					if (ArrayUtils.contains(arrayOfCriticalErrors, message))
					{
						model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_HIGH);
						model.setStatus(Boolean.TRUE);
					}
					else
					{
						model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
						model.setStatus(Boolean.FALSE);
					}
					modelService.save(model);

				}
			}

		}
		return containsErrors;
	}
	protected void processPrice(final CartModel cart, final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, final String page, final String productLine, final List<AbstractOrderEntryModel> cartEntries)
	{
		LOG.info("BHGECartServiceImpl Inside processPrice and ProductLine is " + productLine);
        LOG.info("US644202 carttotal--5 before P&A price response calculation "+cart.getTotalPrice());
        LOG.info("US644202 cartdiscounts-5"+cart.getGlobalDiscountValues());
		final BHGEZPriceandAvailablityRequestItem etResultExt = zPriceandAvailablityResponse.getEtResultExt();
		final String currency = (cart.getCurrency() != null) ? cart.getCurrency().getIsocode() : "";
		final int digits = cart.getCurrency() != null ? cart.getCurrency().getDigits().intValue() : CURRENCY_FORMAT_DIGITS;
		int lineItemCount = BhgeCoreConstants.LINE_ITEM_COUNT;
		Integer configandkposnCounter = BhgeCoreConstants.CONFIG_KPOSN_COUNTER;
		final BHGEZVComponentPrice componentPrice = zPriceandAvailablityResponse.getVcComponentPrice();
		final int numberOfComponentItems = null != componentPrice ? (CollectionUtils.isNotEmpty(componentPrice.getItems()) ? componentPrice.getItems().size() : 0) : 0;
		LOG.debug("No of Component result Items " + (null != componentPrice
				? (CollectionUtils.isNotEmpty(componentPrice.getItems()) ? componentPrice.getItems().size() : 0) : 0));
		final Map<String, VCComponentPriceModel> componentPriceMap = prepareComponentPriceMap(componentPrice,
				numberOfComponentItems);

		if (etResultExt == null || CollectionUtils.isEmpty(etResultExt.getItems())) {
			return;
		}

		LOG.info("BHGECartServiceImpl : processPrice : Inside if estResult :" + etResultExt.getItems().size());
		Double yourPriceTotalDiscount = 0.0;
		Map<Integer, BHGEZPriceandAvailablityRequestItem> requestItemMap = etResultExt.getItems().stream()
				.filter(item -> item.getItem() != null && CollectionUtils.isNotEmpty(item.getItem().getItems()))
				.flatMap(item -> item.getItem().getItems().stream())
				.collect(Collectors.toMap(
						reqItem -> Integer.parseInt(reqItem.getKposn()),
						reqItem -> reqItem,
						(existing, replacement) -> existing
				));

		for (final AbstractOrderEntryModel orderEntry : cartEntries) {
			int lineNumber = orderEntry.getEntryNumber() + lineItemCount;//100000
			final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) orderEntry.getProduct();

			if (orderEntry.getProduct().getSapConfigurable() && (isBentlyStore() || BhgeCoreConstants.BENTLY_NEVADA.equalsIgnoreCase(productLine))|| (orderEntry.getProduct().getSapConfigurable() && isLongConfigEntry(orderEntry))) {
				lineNumber = Integer.parseInt(bhgePriceAvailabilityUtils.formattedLineNumber(configandkposnCounter));
				LOG.info("BHGECartServiceImpl : processPrice : Inside if lineNumber is :" + lineNumber);//001000
			}
			for (Map.Entry<Integer, BHGEZPriceandAvailablityRequestItem> entry : requestItemMap.entrySet()) {
				Integer key = entry.getKey();
				BHGEZPriceandAvailablityRequestItem value = entry.getValue();
				LOG.info("BHGECartServiceImpl : requestItemMap Key: " + key + ", Value: " + value);
			}

			BHGEZPriceandAvailablityRequestItem reqItem = requestItemMap.get(lineNumber);
			LOG.info("BHGECartServiceImpl : processPrice : lineNumber is :" + lineNumber + " and reqItem is :" + reqItem);
			if (reqItem != null) {
				LOG.info("BHGECartServiceImpl : processPrice : lineNumber and itemLinenumber is matched" +lineNumber +":");
				processRequestItem(reqItem, orderEntry, currency, productLine, yourPriceTotalDiscount,digits,geEdgeProductModel,numberOfComponentItems, componentPriceMap);
			}
			modelService.save(cart);


			if (CART_PAGE.equalsIgnoreCase(page)
					&& Boolean.valueOf(Config.getParameter("validate.cart.for.nonsellable.products")) == Boolean.TRUE)
			{
				validateCartForNonSellableProducts(cart);
			}

			try
			{
                LOG.info("US644202 carttotal--6 before recalculate"+cart.getTotalPrice());
                LOG.info("US644202 cartdiscounts-6"+cart.getGlobalDiscountValues());
				bhgeCalculationService.recalculate(cart);
                LOG.info("US644202 carttotal--7 after recalculate "+cart.getTotalPrice());
                LOG.info("US644202 cartdiscounts-7"+cart.getGlobalDiscountValues());
			}
			catch (final Exception e)
			{
				LOG.error("Error occured while executing the calculate method - processPrice() " + e);
			}

			configandkposnCounter++;

		}
		cart.setYourPriceDiscount(CoreAlgorithms.round(yourPriceTotalDiscount, digits));
		modelService.save(cart);
		modelService.refresh(cart);


	}
	private void processRequestItem(BHGEZPriceandAvailablityRequestItem reqItem, AbstractOrderEntryModel orderEntry, String currency, String productLine, Double yourPriceTotalDiscount, int digits, GEEdgeProductModel geEdgeProductModel, int numberOfComponentItems, Map<String, VCComponentPriceModel> componentPriceMap) {
		String zcmListPrice = StringUtils.EMPTY;
		String zr02ListPrice = StringUtils.EMPTY;
		String listPrice ;
		String price = StringUtils.EMPTY;
		double vcOptionsPrice = 0.0;
		String silverClausePrice = StringUtils.EMPTY;
		String discountPrice = StringUtils.EMPTY;
		String discPercentage = StringUtils.EMPTY;
		String discountValueForItem = "";

		if (reqItem.getCond() != null && CollectionUtils.isNotEmpty(reqItem.getCond().getItems())) {
			for (BHGEZPriceandAvailablityRequestItem condItem : reqItem.getCond().getItems()) {
				String conditionType = condItem.getKschl();
				LOG.info("BHGECartServiceImpl ProcessPrice conditionType :" + conditionType);
				switch (conditionType) {
					case "ZCM1" ->
						// Getting Base Price from the response (price condition - ZCM1)
							zcmListPrice = getListPriceFromCondTable(condItem, currency, orderEntry.getQuantity());
					case "ZR02" ->
						// Getting Base Price from the response (price condition - ZR02)
							zr02ListPrice = getListPriceFromCondTable(condItem, currency, orderEntry.getQuantity());
					case "YUMU" -> {
						// Getting Base Price from the response (price condition - ZR02)
						price = getPriceFromCondTable(condItem);
						LOG.info("13.BHGECartServiceImpl YUMU price is  " + price);
					}
					case "ZUMU" -> {
						// Getting Your Price from the response (price condition - ZUMU)
						discountPrice = getPriceFromCondTable(condItem);
						LOG.info("14.BHGECartServiceImpl ZUMU price is  " + discountPrice);
					}
					//commenting VC option price as this is not needed for VC products
					/**case "ZZ00" -> {
						// Getting Options Price for VC Materials from the response (price condition - ZZ00)
						vcOptionsPrice += getVCPriceFromCondTable(condItem, orderEntry.getQuantity());
						LOG.info("Total VC options price in this loop is =====" + vcOptionsPrice);
					}**/
					case "ZSCL" -> {
						silverClausePrice = getPriceFromCondTable(condItem);
					}
					case "ZK09" -> {
						discPercentage = getPriceFromCondTable(condItem);
						discountValueForItem = getDiscountValueForItem(condItem);
					}
					default -> {
					}
				}

			}
		}

		listPrice = StringUtils.isNotBlank(zcmListPrice) && NumberUtils.isNumber(zcmListPrice) && Double.valueOf(zcmListPrice) > 0
				? zcmListPrice
				: zr02ListPrice;
		setOrderEntryPrices(orderEntry, listPrice, price, vcOptionsPrice, silverClausePrice, discPercentage, discountPrice, productLine,discountValueForItem, yourPriceTotalDiscount,digits,geEdgeProductModel, componentPriceMap,numberOfComponentItems);


	}
	private boolean setOrderEntryPrices(AbstractOrderEntryModel orderEntry, String listPrice, String price, double vcOptionsPrice, String silverClausePrice, String discPercentage, String discountPrice, String productLine, String discountValueForItem, Double yourPriceTotalDiscount, int digits, GEEdgeProductModel geEdgeProductModel, Map<String, VCComponentPriceModel> componentPriceMap, int numberOfComponentItems) {
		if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith(ZERO_PRICE) && NumberUtils.isNumber(listPrice)) {
			orderEntry.setListPrice(CoreAlgorithms.round(Double.parseDouble(listPrice), digits));
		} else {
			orderEntry.setListPrice((double) 0);
		}

		if (StringUtils.isNotBlank(price) && !price.startsWith(ZERO_PRICE) && NumberUtils.isNumber(price)) {
			orderEntry.setBasePrice(CoreAlgorithms.round(Double.parseDouble(price), digits));
			LOG.info("BHGECartServiceImpl YUMU price is  " + price + "orderentry base price is :"+ orderEntry.getBasePrice());
			if (BhgeCoreConstants.BENTLY_NEVADA.equalsIgnoreCase(productLine) || isBentlyStore()|| (orderEntry.getProduct().getSapConfigurable() && isLongConfigEntry(orderEntry)))
			{
				listPrice = price;
				orderEntry.setListPrice(CoreAlgorithms.round(Double.parseDouble(listPrice), digits));
				LOG.info("BHGECartServiceImpl YUMU price is  " + price + "orderentry base price is :"+ orderEntry.getBasePrice());
			}
		} else {
			orderEntry.setBasePrice((double) 0);
		}
		if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith(ZERO_PRICE) && NumberUtils.isNumber(listPrice))
		{
		//have to check in old code if it is breaking
			orderEntry.setBasePrice(CoreAlgorithms.round(Double.parseDouble(listPrice), digits));
		}
		if (vcOptionsPrice > 0) {
			orderEntry.setVcOptionsPrice(CoreAlgorithms.round(vcOptionsPrice, digits));
			//have to check in old code if it is breaking


		} else {
			orderEntry.setVcOptionsPrice((double) 0);
		}

		if (StringUtils.isNotBlank(silverClausePrice) && !silverClausePrice.startsWith(ZERO_PRICE)) {
			orderEntry.setSilverClausePricePercentage(BHGESAPJCoUtils.getSilverClauseDiscPercentage(silverClausePrice));
			orderEntry.setSilverClausePrice(CoreAlgorithms.round(getSilverClausePrice(orderEntry.getSilverClausePricePercentage(), listPrice), digits));
		} else {
			orderEntry.setSilverClausePrice(0.00);
			orderEntry.setSilverClausePricePercentage(null);
		}

		if (StringUtils.isNotBlank(discPercentage) && !discPercentage.startsWith(ZERO_PRICE) && StringUtils.isNotBlank(price) && !price.startsWith(ZERO_PRICE) && NumberUtils.isNumber(price)) {
			discPercentage = BHGESAPJCoUtils.getFormattedDiscountPercentage(discPercentage.trim());
			Double yourPriceDiscAmount = getYourPriceDiscountValue(discPercentage, price);
			orderEntry.setYourPriceDiscount(CoreAlgorithms.round(yourPriceDiscAmount, digits));
			orderEntry.setDiscountPercentage(discPercentage);
			yourPriceTotalDiscount += Double.valueOf(discountValueForItem);
		} else {
			orderEntry.setYourPriceDiscount(0.00);
			orderEntry.setDiscountPercentage(null);
		}

		double yourPriceValue = 0.0;
		yourPriceValue = calculateOrderEntryDiscountPrice(orderEntry, geEdgeProductModel, listPrice,
				vcOptionsPrice, yourPriceValue);
		final BHGEProductUtil productUtil = new BHGEProductUtil();
		final MaterialChannelStatus materialStatus = productUtil
				.getMaterialStatusForCurrentSalesArea(geEdgeProductModel, getSessionService(), userService);
		if (materialStatus != null && (materialStatus.equals(MaterialChannelStatus.CC)
				|| materialStatus.equals(MaterialChannelStatus.SO)))
		{
			orderEntry.setIsEngineeringHold(Boolean.TRUE);
		}
		if (yourPriceValue > 0) {
			orderEntry.setDiscountPrice(Double.toString(CoreAlgorithms.round(yourPriceValue, digits)));
		} else {
			orderEntry.setDiscountPrice(Double.toString(0));
		}
		//Setting Bently YourPrice
		if((BhgeCoreConstants.BENTLY_NEVADA.equalsIgnoreCase(productLine) || isBentlyStore())
				&& StringUtils.isNotBlank(discountPrice) && Double.parseDouble(discountPrice) > 0 ){
			orderEntry.setDiscountPrice(discountPrice);
			yourPriceValue = calculateBentlyYourPriceDiscount(orderEntry);
			orderEntry.setYourPriceDiscount(CoreAlgorithms.round(yourPriceValue, digits));
			if(null != orderEntry.getListPrice()) {
				Double percentage = (yourPriceValue / orderEntry.getListPrice()) * 100;
				LOG.info(" ########################## BHGECartServiceImpl percentage discount is  " + percentage);
				orderEntry.setDiscountPercentage(BHGESAPJCoUtils.formatDiscountPercentage(percentage));
			}

		}
		
		final List<VCComponentPriceModel> componentPrices = componentPriceMap.entrySet().stream()
				.filter(key -> StringUtils.isNotBlank(key.getKey()))
				.map(Map.Entry::getValue)
				.filter(Objects::nonNull)
				.peek(componentPriceModel -> componentPriceModel.setComponentPrice(
						CoreAlgorithms.round(componentPriceModel.getTotalPrice() / orderEntry.getQuantity(), digits)))
				.collect(Collectors.toList());

		orderEntry.setComponentPrices(componentPrices);
		LOG.info(" ########################## BHGECartServiceImpl Fetching the Price values of Product of Part Number "
				+ orderEntry.getProduct().getCode());
		LOG.info(" ########################## BHGECartServiceImpl List Price is "
				+ (StringUtils.isNotBlank(listPrice) ? listPrice : " Not Available"));
		LOG.info(" ########################## BHGECartServiceImpl YourPriceDiscount is  " + orderEntry.getYourPriceDiscount());
		LOG.info(" ########################## BHGECartServiceImpl SilverClausePrice is  " + orderEntry.getSilverClausePrice());
		LOG.info(" ########################## BHGECartServiceImpl Price of Product after applying the discounts is  "
				+ orderEntry.getDiscountPrice());
		modelService.save(orderEntry);
		return true;
	}
	/**
	 * Calculates order entry discount price based on configurable boolean
	 *
	 * @param orderEntry
	 * @param geEdgeProductModel
	 * @param listPrice
	 * @param vcOptionsPrice
	 * @param yourPriceValue
	 * @return
	 */
	private double calculateOrderEntryDiscountPrice(final AbstractOrderEntryModel orderEntry,
			final GEEdgeProductModel geEdgeProductModel, final String listPrice, final double vcOptionsPrice, double yourPriceValue)
	{
		//Coupon split
		Double yourPriceDiscount = orderEntry.getYourPriceDiscount();
		if(CollectionUtils.isNotEmpty(orderEntry.getDiscountValues()) && yourPriceDiscount <= orderEntry.getDiscountValues().get(0).getValue())
			yourPriceDiscount = 0.0;
		if (geEdgeProductModel.getSapConfigurable() != null && geEdgeProductModel.getSapConfigurable() == true)
		{
			if (StringUtils.isNotBlank(listPrice) && NumberUtils.isNumber(listPrice))
			{
				yourPriceValue = Double.valueOf(vcOptionsPrice) + Double.valueOf(listPrice) - yourPriceDiscount
						+ orderEntry.getSilverClausePrice();
			}
			else
			{
				yourPriceValue = Double.valueOf(vcOptionsPrice) - yourPriceDiscount
						+ orderEntry.getSilverClausePrice();
			}
		}
		else if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith("0.00") && NumberUtils.isNumber(listPrice))
		{
			if (orderEntry.getSilverClausePricePercentage() != null
					&& orderEntry.getSilverClausePricePercentage().contains(BhgeCoreConstants.HYPHEN))
			{
				//Setting the difference of list price and your price discount with silver clause as your price value
				yourPriceValue = Double.valueOf(listPrice) - yourPriceDiscount - orderEntry.getSilverClausePrice();
			}
			else
			{
				yourPriceValue = Double.valueOf(listPrice) - yourPriceDiscount + orderEntry.getSilverClausePrice();
			}
		}
		return yourPriceValue;
	}

	private double calculateBentlyYourPriceDiscount(final AbstractOrderEntryModel orderEntry)
	{
		return orderEntry.getListPrice() - Double.valueOf(orderEntry.getDiscountPrice());
	}

	private String getListPriceFromCondTable(final JCoTable itemCondTable, final String sessionCurrency, final Long qty)
	{
		String price = "";
		double tempPrice = 0.0;
		final String sapCurrency = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_WAERS);

		/*
		 * If both Session Currency in Hybris and SAP Currency are same then take <KBETR> value otherwise take <KWERT>
		 * value. <KWERT> will contain price for total demand (total ordered quantity for the item), so we will have to
		 * divide <KWERT> value by the ordered quantity value in order to get price for unique quantity.
		 */
		if (StringUtils.isNotBlank(sapCurrency) && StringUtils.isNotBlank(sessionCurrency)
				&& sessionCurrency.equalsIgnoreCase(sapCurrency.trim()))
		{
			price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
		}
		else
		{
			price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
			if (StringUtils.isNotBlank(price))
			{
				tempPrice = Double.valueOf(price.trim()) / qty;
				price = String.valueOf(tempPrice);
			}
		}

		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
		}
		return price;
	}

	private String getListPriceFromCondTable(final BHGEZPriceandAvailablityRequestItem condItem, final String sessionCurrency, final Long qty)
	{
		String price = "";
		double tempPrice = 0.0;
		//final String sapCurrency = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_WAERS);
		final String sapCurrency = condItem.getWaers();


		/*
		 * If both Session Currency in Hybris and SAP Currency are same then take <KBETR> value otherwise take <KWERT>
		 * value. <KWERT> will contain price for total demand (total ordered quantity for the item), so we will have to
		 * divide <KWERT> value by the ordered quantity value in order to get price for unique quantity.
		 */
		if (StringUtils.isNotBlank(sapCurrency) && StringUtils.isNotBlank(sessionCurrency)
				&& sessionCurrency.equalsIgnoreCase(sapCurrency.trim()))
		{
			//price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
			price = condItem.getKbetr();
		}
		else
		{
			//price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
			price = condItem.getKwert();
			if (StringUtils.isNotBlank(price))
			{
				tempPrice = Double.valueOf(price.trim()) / qty;
				price = String.valueOf(tempPrice);
			}
		}

		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
		}
		return price;
	}


	private String getPriceFromCondTable(final JCoTable itemCondTable)
	{
		String price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
		}
		return price;
	}

	private String getPriceFromCondTable(final BHGEZPriceandAvailablityRequestItem condItem)
	{
		//String price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
		String price = condItem.getKbetr();
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
		}
		return price;
	}

	private double getVCPriceFromCondTable(final JCoTable itemCondTable, final Long qty)
	{
		String price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
		double vcPrice = 0.0;
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
			if (NumberUtils.isNumber(price))
			{
				vcPrice = Double.valueOf(price) / qty;
			}
			else if (price.contains("-"))
			{
				price = price.replace("-", "");
				if (NumberUtils.isNumber(price))
				{
					vcPrice = -Double.valueOf(price) / qty;
				}
			}
		}
		LOG.debug("VC OPTION PRICE for Qty " + qty + " is " + vcPrice);
		return vcPrice;
	}

	private double getVCPriceFromCondTable(final BHGEZPriceandAvailablityRequestItem condItem, final Long qty)
	{
		//String price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
		String price = condItem.getKwert();
		double vcPrice = 0.0;
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
			if (NumberUtils.isNumber(price))
			{
				vcPrice = Double.valueOf(price) / qty;
			}
			else if (price.contains("-"))
			{
				price = price.replace("-", "");
				if (NumberUtils.isNumber(price))
				{
					vcPrice = -Double.valueOf(price) / qty;
				}
			}
		}
		LOG.debug("VC OPTION PRICE for Qty " + qty + " is " + vcPrice);
		return vcPrice;
	}


	/**
	 * @param itemCondTable
	 * @return
	 */
	private String getDiscountValueForItem(final JCoTable itemCondTable)
	{
		String price = "0.00";
		price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
			// Removing '-' sign, if its present in the discount percentage
			if (BhgeCoreConstants.HYPHEN.equals(price.substring(price.length() - 1)))
			{
				price = price.substring(0, price.length() - 1);
			}
		}
		return price;
	}

	private String getDiscountValueForItem(final BHGEZPriceandAvailablityRequestItem condItem)
	{
		String price = "0.00";
		//price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KWERT);
		price = condItem.getKwert();
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
			// Removing '-' sign, if its present in the discount percentage
			if (BhgeCoreConstants.HYPHEN.equals(price.substring(price.length() - 1)))
			{
				price = price.substring(0, price.length() - 1);
			}
		}
		return price;
	}


	private String getPriceFormattedValue(final String price)
	{
		if (price != null)
		{
			final Double d = Double.parseDouble(price.replaceAll(",", ""));
			final DecimalFormat formatter = new DecimalFormat("0.00");
			final String formattedPrice = formatter.format(d);
			return formattedPrice;
		}
		return null;
	}


	/**
	 * @param silverClausePricePercentage
	 * @return
	 */
	private Double getSilverClausePrice(final String silverClausePricePercentage, final String listPrice)
	{
		Double price = 0.0;
		if (StringUtils.isNotBlank(silverClausePricePercentage) && StringUtils.isNotBlank(listPrice))
		{
			if (silverClausePricePercentage.contains(BhgeCoreConstants.HYPHEN))
			{
				final String tempPrice = silverClausePricePercentage.replace(BhgeCoreConstants.HYPHEN, "");
				price = (Double.valueOf(listPrice) / 100) * (Double.valueOf(tempPrice));
			}
			else
			{
				price = (Double.valueOf(listPrice) / 100) * (Double.valueOf(silverClausePricePercentage));
			}
		}
		return price;
	}


	private Double getYourPriceDiscountValue(final String discPercentage, final String listPrice)
	{
		double yourPriceDiscount = 0.0;
		if (StringUtils.isNotBlank(listPrice) && NumberUtils.isNumber(listPrice) && StringUtils.isNotBlank(discPercentage)
				&& NumberUtils.isNumber(discPercentage))
		{
			yourPriceDiscount = (Double.valueOf(discPercentage) / 100) * Double.valueOf(listPrice);
		}
		return yourPriceDiscount;
	}


	/**
	 * @param componentPriceItemsTable
	 * @param numberOfComponentItems
	 * @return
	 */
	private Map<String, VCComponentPriceModel> prepareComponentPriceMap(final JCoTable componentPriceItemsTable, final long qty)
	{
		final Map<String, VCComponentPriceModel> componentPriceMap = new HashMap<String, VCComponentPriceModel>();
		final int numberOfComponentItems = componentPriceItemsTable.getNumRows();
		if (numberOfComponentItems > 0)
		{
			for (int i = 0; i < numberOfComponentItems; i++)
			{
				final String itemLineNumber = componentPriceItemsTable.getString(BhgeCoreConstants.VC_ITEM);
				final String componentName = getFieldValue(componentPriceItemsTable.getString(BhgeCoreConstants.VC_VARCOND));
				if (StringUtils.isNotBlank(componentName))
				{
					final VCComponentPriceModel componentPriceModel = modelService.create(VCComponentPriceModel.class);
					componentPriceModel.setName(componentName);
					componentPriceModel.setCurrency(getFieldValue(componentPriceItemsTable.getString(BhgeCoreConstants.VC_CURRENCY)));
					componentPriceModel.setTotalPrice(getPrice(componentPriceItemsTable.getString(BhgeCoreConstants.VC_CONDVALUE)));
					componentPriceModel.setDescription(getFieldValue(componentPriceItemsTable.getString(BhgeCoreConstants.VC_VCTEXT)));
					componentPriceMap.put(itemLineNumber + "_" + componentName, componentPriceModel);
				}
				componentPriceItemsTable.nextRow();
			}
		}
		return componentPriceMap;
	}


	private Map<String, VCComponentPriceModel> prepareComponentPriceMap(final BHGEZVComponentPrice componentPrice, final long qty)
	{
		final Map<String, VCComponentPriceModel> componentPriceMap = new HashMap<String, VCComponentPriceModel>();
		if(null != componentPrice && CollectionUtils.isNotEmpty(componentPrice.getItems()))
		{
			for (BHGEZVComponentPrice compPrice : componentPrice.getItems())
			{
				final String itemLineNumber = compPrice.getItem();
				final String componentName = getFieldValue(compPrice.getVarCond());
				if (StringUtils.isNotBlank(componentName))
				{
					final VCComponentPriceModel componentPriceModel = modelService.create(VCComponentPriceModel.class);
					componentPriceModel.setName(componentName);
					componentPriceModel.setCurrency(getFieldValue(compPrice.getCurrency()));
					componentPriceModel.setTotalPrice(getPrice(compPrice.getCondValue()));
					componentPriceModel.setDescription(getFieldValue(compPrice.getVcText()));
					componentPriceMap.put(itemLineNumber + "_" + componentName, componentPriceModel);
				}
			}
		}
		return componentPriceMap;
	}


	private String getFieldValue(final String value)
	{
		if (StringUtils.isNotBlank(value))
		{
			return value.trim();
		}
		return null;
	}


	private Double getPrice(String price)
	{
		if (StringUtils.isNotBlank(price))
		{
			price = price.trim();
			if (NumberUtils.isNumber(price))
			{
				return Double.valueOf(price);
			}
		}
		return 0.0;
	}


	/**
	 * Processing the Availability informations for the cart items. This method will set the default plant, stock details
	 * and Estimated ship dates for all the cart items
	 *
	 * @param cart
	 * @param function
	 */
	protected void processAvailability(final CartModel cart, final JCoFunction function)
	{
		Map<String, GEEdgeAvailabilityDetailModel> availabilityMap = null;
		Map<String, GEEdgeStockDetailModel> stockDetailsMap = null;
		final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();

		// Preparing the Stock details map
		final JCoTable stockDetailsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_MAT_WERK_QTY);
		final int numberOfStockItems = stockDetailsTable.getNumRows();
		stockDetailsMap = prepareStockDetailsMap(stockDetailsTable);

		// Preparing the Availability details map
		final JCoTable availabilityItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_WMDVEX);
		final int numberOfAvailabilityItems = availabilityItemsTable.getNumRows();
		availabilityMap = prepareAvailabilityDetailsMap(stockDetailsMap, availabilityItemsTable);

		for (final AbstractOrderEntryModel entry : orderEntries)
		{

			// Setting the Default plant and Availability details to Cart entry
			if (numberOfAvailabilityItems > 0)
			{
				setAvailabilityDetailsToCartEntry(availabilityMap, entry);
			}
			else
			{
				setShipDateMessage(entry);
			}

			// Setting the Stock details to Cart entry
			if (numberOfStockItems > 0)
			{
				setStockDetailsToCartEntry(stockDetailsMap, entry);
			}

		}
		cart.setEntries(orderEntries);
		modelService.save(cart);

		try
		{
			bhgeCalculationService.recalculate(cart);
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while executing the calculate method - processPrice() " + e);
		}
	}


	protected void processAvailability(final CartModel cart, final BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse, final List<AbstractOrderEntryModel> cartEntries)
	{
		Map<String, GEEdgeAvailabilityDetailModel> availabilityMap = null;
		Map<String, GEEdgeStockDetailModel> stockDetailsMap = null;
		
		final BHGEZWerksDetail stockDetailsTable = zPriceandAvailablityResponse.getEtMatWerkOty();
		final int numberOfStockItems = null != stockDetailsTable ? (CollectionUtils.isNotEmpty(stockDetailsTable.getItems())
				? stockDetailsTable.getItems().size() : 0) : 0;
		stockDetailsMap = prepareStockDetailsMap(stockDetailsTable);

		
		final BHGEZPriceandAvailablityRequestItem availabilityItemsTable = zPriceandAvailablityResponse.getEtWmdvex();
		final int numberOfAvailabilityItems = null != availabilityItemsTable ? (CollectionUtils.isNotEmpty(availabilityItemsTable.getItems())
				? stockDetailsTable.getItems().size() : 0) : 0;
		availabilityMap = prepareAvailabilityDetailsMap(stockDetailsMap, availabilityItemsTable);
		ArrayList<Integer> listOfFilmLeadtimes = new ArrayList<Integer>();
		ArrayList<Integer> listOfNonFilmLeadtimes = new ArrayList<Integer>();
		for (final AbstractOrderEntryModel entry : cartEntries)
		{

			// Setting the Default plant and Availability details to Cart entry
			if (numberOfAvailabilityItems > 0)
			{
				setAvailabilityDetailsToCartEntry(availabilityMap, entry);
			}
			else
			{
				setShipDateMessage(entry);
			}

			// Setting the Stock details to Cart entry
			if (numberOfStockItems > 0)
			{
				setStockDetailsToCartEntry(stockDetailsMap, entry);
			}
			final GEEdgeProductModel productEntry = (GEEdgeProductModel) entry.getProduct();
			if (entry.getLeadtime()!=null && productEntry.getProductType() != null
					&& productEntry.getProductType().getCode().equalsIgnoreCase("ITFILM")){

				listOfFilmLeadtimes.add(entry.getLeadtime());
				LOG.info("FilmLeadtime at entry level " + entry.getLeadtime());
			}
			else if (entry.getLeadtime() != null) {
				listOfNonFilmLeadtimes.add(entry.getLeadtime());
				LOG.info("NonFilmLeadtime at entry level " + entry.getLeadtime());
			}
		}

		Integer largestFilmLeadtime =0;
		Integer largestNonFilmLeadtime =0;
		if (!listOfFilmLeadtimes.isEmpty())
		{
			Collections.sort(listOfFilmLeadtimes);
			LOG.info("listOfFilmLeadtimes.size()"+ listOfFilmLeadtimes.size());
			largestFilmLeadtime = listOfFilmLeadtimes.get(listOfFilmLeadtimes.size() - 1);
		}
		if (!listOfNonFilmLeadtimes.isEmpty())
		{
			Collections.sort(listOfNonFilmLeadtimes);
			LOG.info("listOfNonFilmLeadtimes.size()"+ listOfNonFilmLeadtimes.size());
			largestNonFilmLeadtime = listOfNonFilmLeadtimes.get(listOfNonFilmLeadtimes.size() - 1);
		}

		cart.setLargestFilmLeadtime(largestFilmLeadtime);
		cart.setLargestNonFilmLeadtime(largestNonFilmLeadtime);
		//cart.setEntries(orderEntries);
		modelService.save(cart);
		try
		{
			bhgeCalculationService.recalculate(cart);
		}
		catch (final Exception e)
		{
			LOG.error("Error occured while executing the calculate method - processPrice() " + e);
		}
	}


	/**
	 * This method will prepare the Stock details map from the RFC response. This map will contain Material_Plant as key
	 * and Stock model as value. We will use this map, to set the real-time stock details to the shopping cart items.
	 *
	 * @param stockDetailsTable
	 * @return
	 */
	protected Map<String, GEEdgeStockDetailModel> prepareStockDetailsMap(final JCoTable stockDetailsTable)
	{
		final Map<String, GEEdgeStockDetailModel> stockDetailsMap = new LinkedHashMap<String, GEEdgeStockDetailModel>();
		final int numberOfStockItems = stockDetailsTable.getNumRows();
		if (numberOfStockItems > 0)
		{
			for (int x = 0; x < numberOfStockItems; x++)
			{
				final String material = stockDetailsTable.getString(BhgeCoreConstants.ET_MAT_WERK_QTY_MATNR);
				final String qty = stockDetailsTable.getString(BhgeCoreConstants.ET_MAT_WERK_QTY_QTY);
				final String plant = stockDetailsTable.getString(BhgeCoreConstants.ET_MAT_WERK_QTY_WERKS);
				if (StringUtils.isNotEmpty(material) && StringUtils.isNotEmpty(plant))
				{
					final GEEdgeStockDetailModel stockModel = modelService.create(GEEdgeStockDetailModel.class);
					stockModel.setMaterial(material);
					stockModel.setActualStockQty(getStringQuantity(qty));
					if (StringUtils.isNotBlank(plant) && plant.contains(BhgeCoreConstants.PLANT_SEPERATOR))
					{
						final String[] plants = plant.split(BhgeCoreConstants.PLANT_SEPERATOR);
						if (plants.length == 4)
						{
							stockModel.setPlantName(plants[plants.length - 1]);
						}
					}
					else
					{
						stockModel.setPlantName(bhgeB2BOrderService.getPlantNameForCode(plant));
					}
					stockModel.setPlant(plant);
					modelService.save(stockModel);
					stockDetailsMap.put(material.replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", ""), stockModel);
					LOG.info(" Available quantity of the Product with Part Number " + material + " is " + qty + " in the Plant "
							+ (stockModel.getPlantName() != null ? stockModel.getPlantName() : stockModel.getPlant() + "(Default)"));
				}
				stockDetailsTable.nextRow();
			}
		}
		return stockDetailsMap;
	}

	//protected Map<String, GEEdgeStockDetailModel> prepareStockDetailsMap(final BHGEZPriceandAvailablityRequestItem stockDetailsTable)
	protected Map<String, GEEdgeStockDetailModel> prepareStockDetailsMap(final BHGEZWerksDetail stockDetailsTable)
	{
		final Map<String, GEEdgeStockDetailModel> stockDetailsMap = new LinkedHashMap<String, GEEdgeStockDetailModel>();
	   if(null != stockDetailsTable && CollectionUtils.isNotEmpty(stockDetailsTable.getItems()))
		{
			//for (BHGEZPriceandAvailablityRequestItem stockItem : stockDetailsTable.getItems())
			for (BHGEZWerksDetail stockItem : stockDetailsTable.getItems())
			{
				final String material = stockItem.getMaterial();
				final String qty = stockItem.getQty();
				final String plant = stockItem.getWerks();
				final Integer leadtime =StringUtils.isEmpty(stockItem.getLeadtime()) ? 0 : Integer.parseInt(stockItem.getLeadtime());

				if (StringUtils.isNotEmpty(material) && StringUtils.isNotEmpty(plant))
				{
					final GEEdgeStockDetailModel stockModel = modelService.create(GEEdgeStockDetailModel.class);
					stockModel.setMaterial(material);
					stockModel.setActualStockQty(getStringQuantity(qty));
					stockModel.setLeadtime(leadtime);
					if (StringUtils.isNotBlank(plant) && plant.contains(BhgeCoreConstants.PLANT_SEPERATOR))
					{
						final String[] plants = plant.split(BhgeCoreConstants.PLANT_SEPERATOR);
						if (plants.length == 4)
						{
							stockModel.setPlantName(plants[plants.length - 1]);
						}
					}
					else
					{
						stockModel.setPlantName(bhgeB2BOrderService.getPlantNameForCode(plant));
					}
					stockModel.setPlant(plant);
					modelService.save(stockModel);
					stockDetailsMap.put(material.replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", ""), stockModel);
					LOG.info(" Available quantity of the Product with Part Number " + material + " is " + qty + " in the Plant "
							+ (stockModel.getPlantName() != null ? stockModel.getPlantName() : stockModel.getPlant() + "(Default)"));
				}
			}
		}
		return stockDetailsMap;
	}


	protected String getStringQuantity(String actualString)
	{
		if (actualString != null && actualString.contains("."))
		{
			actualString = actualString.substring(0, actualString.indexOf("."));
			if (actualString.startsWith("-"))
			{
				actualString = "0";
			}

			/*
			 * if(Integer.valueOf(actualString) < 10 && !actualString.equals("00")) { actualString = "0" + actualString; }
			 */
		}
		return actualString;
	}


	/**
	 * This method will prepare the Availability details map from the RFC response. This map will contain
	 * Material_Plant_Quantity as key and availability model as value. We will use this map, to set the availability
	 * informations and default plant to the shopping cart items.
	 *
	 * @param stockDetailsMap
	 * @param availabilityItemsTable
	 * @return
	 */
	protected Map<String, GEEdgeAvailabilityDetailModel> prepareAvailabilityDetailsMap(
			final Map<String, GEEdgeStockDetailModel> stockDetailsMap, final JCoTable availabilityItemsTable)
	{
		final Map<String, GEEdgeAvailabilityDetailModel> availabilityMap = new LinkedHashMap<String, GEEdgeAvailabilityDetailModel>();
		final int numberOfAvailabilityItems = availabilityItemsTable.getNumRows();
		if (numberOfAvailabilityItems > 0)
		{
			for (int x = 0; x < numberOfAvailabilityItems; x++)
			{
				final String plant = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_PLANT);
				final String material = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_MATNR);
				final String comQty = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_COM_QTY);
				final String comDate = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_COM_DATE);
				final String[] plants = plant.split(BhgeCoreConstants.PLANT_SEPERATOR);
				if (StringUtils.isNotEmpty(plant) && (plants.length > 0) && StringUtils.isNotEmpty(material))
				{
					final GEEdgeAvailabilityDetailModel model = (GEEdgeAvailabilityDetailModel) modelService
							.create(GEEdgeAvailabilityDetailModel.class);
					// Setting Real-time stock details of a material for the plant
					final String actualStock = getActualStockDetailsOfMaterialAndPlant(stockDetailsMap,
							material.replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", ""));
					final Boolean isDefaultPlant = BHGESAPJCoUtils
							.getBooleanValueForString(availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_DEFAULT_PLANT));

					if (StringUtils.isNotBlank(plant) && plant.contains(BhgeCoreConstants.PLANT_SEPERATOR))
					{
						//final String[] plants = plant.split(BhgeCoreConstants.PLANT_SEPERATOR);
						if (plants.length == 4)
						{
							model.setPlantName(plants[plants.length - 1]);
						}
					}
					else
					{
						model.setPlantName(bhgeB2BOrderService.getPlantNameForCode(plant));
					}

					model.setPlant(plant);
					model.setCommittedDate(formatDate(comDate));
					model.setCommittedQuantity(getStringQuantity(comQty));
					model.setActualStockQty(actualStock);
					model.setIsDefaultPlant(isDefaultPlant);
					modelService.save(model);
					availabilityMap.put(material.replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", "") + "_"
							+ getStringQuantity(comQty) + "_" + formatDate(comDate), model);
				}
				availabilityItemsTable.nextRow();
			}
		}
		return availabilityMap;
	}


	protected Map<String, GEEdgeAvailabilityDetailModel> prepareAvailabilityDetailsMap(
			final Map<String, GEEdgeStockDetailModel> stockDetailsMap, final BHGEZPriceandAvailablityRequestItem availabilityItemsTable)
	{
		final Map<String, GEEdgeAvailabilityDetailModel> availabilityMap = new LinkedHashMap<String, GEEdgeAvailabilityDetailModel>();
		//final int numberOfAvailabilityItems = availabilityItemsTable.getNumRows();
		//if (numberOfAvailabilityItems > 0)
		if (null != availabilityItemsTable && CollectionUtils.isNotEmpty(availabilityItemsTable.getItems()))
		{
			//for (int x = 0; x < numberOfAvailabilityItems; x++)
			for (BHGEZPriceandAvailablityRequestItem item : availabilityItemsTable.getItems())
			{
				//final String plant = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_PLANT);
				//final String material = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_MATNR);
				//final String comQty = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_COM_QTY);
				//final String comDate = availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_COM_DATE);
				final String plant = item.getPlant();
				final String material = item.getMaterial();
				final String comQty = item.getComQty();
				final String comDate = item.getComDate();
				final String[] plants = plant.split(BhgeCoreConstants.PLANT_SEPERATOR);
				if (StringUtils.isNotEmpty(plant) && (plants.length > 0) && StringUtils.isNotEmpty(material))
				{
					final GEEdgeAvailabilityDetailModel model = (GEEdgeAvailabilityDetailModel) modelService
							.create(GEEdgeAvailabilityDetailModel.class);
					// Setting Real-time stock details of a material for the plant
					final String actualStock = getActualStockDetailsOfMaterialAndPlant(stockDetailsMap,
							material.replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", ""));
					/*
					 * final Boolean isDefaultPlant = BHGESAPJCoUtils
					 * .getBooleanValueForString(availabilityItemsTable.getString(BhgeCoreConstants.ET_WMDVEX_DEFAULT_PLANT))
					 * ;
					 */
					final Boolean isDefaultPlant = BHGESAPJCoUtils.getBooleanValueForString(item.getDefaultPlant());

					if (StringUtils.isNotBlank(plant) && plant.contains(BhgeCoreConstants.PLANT_SEPERATOR))
					{
						//final String[] plants = plant.split(BhgeCoreConstants.PLANT_SEPERATOR);
						if (plants.length == 4)
						{
							model.setPlantName(plants[plants.length - 1]);
						}
					}
					else
					{
						model.setPlantName(bhgeB2BOrderService.getPlantNameForCode(plant));
					}

					model.setPlant(plant);
					model.setCommittedDate(formatDate(comDate));
					model.setCommittedQuantity(getStringQuantity(comQty));
					model.setActualStockQty(actualStock);
					model.setIsDefaultPlant(isDefaultPlant);
					modelService.save(model);
					availabilityMap.put(material.replaceAll("\\s", "") + "_" + plant.replaceAll("\\s", "") + "_"
							+ getStringQuantity(comQty) + "_" + formatDate(comDate), model);
				}
			}
		}
		return availabilityMap;
	}


	/**
	 * Getting the Actual real-time stock details of a material for the plant
	 *
	 * @param stockDetailsMap
	 * @param key
	 * @return
	 */
	protected String getActualStockDetailsOfMaterialAndPlant(final Map<String, GEEdgeStockDetailModel> stockDetailsMap,
			final String key)
	{
		if (null != stockDetailsMap && stockDetailsMap.size() > 0 && StringUtils.isNotEmpty(key))
		{
			final GEEdgeStockDetailModel stockDetail = stockDetailsMap.get(key);
			return null != stockDetail ? stockDetail.getActualStockQty() : null;
		}
		return null;
	}


	/**
	 * This method will format the given date from yyyy-MM-dd format to dd-MM-yyyy format
	 *
	 * @param date
	 * @return
	 */
	public String formatDate(final String date)
	{
		if (StringUtils.isNotEmpty(date) && StringUtils.isNotBlank(date) && !BhgeCoreConstants.DEFAULT_DATE_VALUE.equals(date))
		{
			Date sapDate;
			String requiredDate = "";
			final String sapDateFormat = Config.getString("ATP_SHIP_DATE_FORMAT_FROM_SAP", "yyyy-MM-dd");
			final String requiredFormat = Config.getString("ATP_SHIP_DATE_FORMAT", "dd-MMM-yyyy");
			final SimpleDateFormat sapDateFormatter = new SimpleDateFormat(sapDateFormat);
			final SimpleDateFormat requiredDateFormatter = new SimpleDateFormat(requiredFormat);
			try
			{
				sapDate = sapDateFormatter.parse(date);
				requiredDate = requiredDateFormatter.format(sapDate);
			}
			catch (final ParseException e)
			{
				LOG.error(
						"Parse exception occured while parsing the estimated ship date obtained from ATP RFC call: The Date obtained is not in the format of "
								+ sapDateFormatter);
				LOG.error(String.valueOf(e));
			}
			return requiredDate;
		}
		return null;
	}


	/**
	 * This method will set the Default plant and Availability details (Estimated ship dates) to the cart items
	 *
	 * @param availabilityMap
	 * @param entry
	 * @param isShipComplete
	 */
	protected void setAvailabilityDetailsToCartEntry(final Map<String, GEEdgeAvailabilityDetailModel> availabilityMap,
			final AbstractOrderEntryModel entry)
	{
		final Set<String> keys = availabilityMap.keySet();
		if (null != keys && keys.size() > 0)
		{
			final GEEdgeProductModel productModel = (GEEdgeProductModel) entry.getProduct();
			final List<GEEdgeAvailabilityDetailModel> availabilityModelList = new ArrayList<GEEdgeAvailabilityDetailModel>();
			final Set<String> estimatedShipDates = new LinkedHashSet<String>();
			for (final String key : keys)
			{
				GEEdgeAvailabilityDetailModel availabilityModel = null;
				if (key.startsWith(productModel.getCode().replaceAll("\\s", "") + "_"))
				{
					availabilityModel = availabilityMap.get(key);

					// Setting Default Plant to the Cart Entry
					if (availabilityModel.getIsDefaultPlant() && StringUtils.isEmpty(entry.getPlant()))
					{
						setDefaultPlantToCartEntry(entry, availabilityModel);
					}

					// Adding estimated ship dates only for the default plant
					if (availabilityModel.getPlant().equals(entry.getPlant()))
					{
						estimatedShipDates.add(getEstimatedShipDateForEntry(availabilityModel));
					}

					availabilityModelList.add(availabilityModel);
				}
			}

			if (isDefaultPlantChanged(entry, availabilityModelList))
			{
				/** Default Plant changed for an item */
				resetDefaultPlantAndSDS(entry, availabilityModelList);
			}
			else
			{
				/** Normal Case */
				if (!estimatedShipDates.isEmpty())
				{
					entry.setEstShippingDates(new ArrayList<String>(estimatedShipDates));
				}
				else
				{
					setShipDateMessage(entry);
				}
			}
			entry.setAvailabilityDetails(availabilityModelList);

		}
		else
		{
			setShipDateMessage(entry);
		}
		modelService.save(entry);
	}


	/**
	 * This method will set the default plant to the cart items
	 *
	 * @param entry
	 * @param availabilityModel
	 */
	protected void setDefaultPlantToCartEntry(final AbstractOrderEntryModel entry,
			final GEEdgeAvailabilityDetailModel availabilityModel)
	{
		entry.setPlant(availabilityModel.getPlant());
		entry.setAvailableQuantity(availabilityModel.getActualStockQty());

		if (StringUtils.isNotBlank(availabilityModel.getPlant())
				&& availabilityModel.getPlant().contains(BhgeCoreConstants.PLANT_SEPERATOR))
		{
			final String[] plants = availabilityModel.getPlant().split(BhgeCoreConstants.PLANT_SEPERATOR);
			if (plants.length == 4)
			{
				entry.setPlantName(plants[plants.length - 1]);
			}
		}
		else
		{
			entry.setPlantName(bhgeB2BOrderService.getPlantNameForCode(availabilityModel.getPlant()));
		}
	}

	public String getEstimatedShipDateForEntry(final GEEdgeAvailabilityDetailModel availabiltyDetail)
	{
		if (null != availabiltyDetail)
		{
			final String comQty = availabiltyDetail.getCommittedQuantity();

			/*
			 * If the Committed Date is blank then we will set some largest date and also in storefront we will show like
			 * No Estimate Available if this date found.
			 */
			final String date = (StringUtils.isBlank(availabiltyDetail.getCommittedDate())) ? DEFAULT_LONGEST_EST_SHIP_DATE
					: availabiltyDetail.getCommittedDate();
			return comQty + " " + date;
		}
		return null;
	}


	private boolean isDefaultPlantChanged(final AbstractOrderEntryModel entry,
			final List<GEEdgeAvailabilityDetailModel> availabilityModelList)
	{
		final Collection<GEEdgeAvailabilityDetailModel> oldAvailability = entry.getAvailabilityDetails();
		boolean isDefaultPlantChanged = false;
		if (oldAvailability != null)
		{
			String oldDefaultPlant = "";
			String newDefaultPlant = "";
			final List<GEEdgeAvailabilityDetailModel> oldList = (List<GEEdgeAvailabilityDetailModel>) oldAvailability;
			for (final GEEdgeAvailabilityDetailModel detail : oldList)
			{
				if (detail.getIsDefaultPlant())
				{
					oldDefaultPlant = detail.getPlant();
				}
			}

			for (final GEEdgeAvailabilityDetailModel detail : availabilityModelList)
			{
				if (detail.getIsDefaultPlant())
				{
					newDefaultPlant = detail.getPlant();
				}
			}

			if (!newDefaultPlant.equalsIgnoreCase(oldDefaultPlant))
			{
				isDefaultPlantChanged = true;
			}
		}

		return isDefaultPlantChanged;
	}


	private void resetDefaultPlantAndSDS(final AbstractOrderEntryModel entry,
			final List<GEEdgeAvailabilityDetailModel> availabilityDetails)
	{
		final Set<String> estimatedShipDates = new LinkedHashSet<String>();
		for (final GEEdgeAvailabilityDetailModel detail : availabilityDetails)
		{
			if (detail.getIsDefaultPlant())
			{
				/** Reset Default Plant */
				setDefaultPlantToCartEntry(entry, detail);
				estimatedShipDates.add(getEstimatedShipDateForEntry(detail));
			}
		}

		if (estimatedShipDates.size() > 0)
		{
			entry.setEstShippingDates(new ArrayList<String>(estimatedShipDates));
		}
		else
		{
			setShipDateMessage(entry);
		}

		/** Remove SDS flag and recalculated */
		if (entry.getIsSameDayShipChecked() != null && entry.getIsSameDayShipChecked())
		{
			entry.setIsSameDayShipChecked(Boolean.FALSE);
			entry.setSameDayShipmentCost(0.00);
			modelService.save(entry);
			getSessionService().setAttribute(BhgeCoreConstants.IS_DEFAULT_PLANT_CHANGED, true);
		}

	}


	/**
	 * Setting the default Estimated ship date message to the cart item if the Estimated ship date is not available in
	 * the RFC response
	 *
	 * @param entry
	 */
	protected void setShipDateMessage(final AbstractOrderEntryModel entry)
	{
		if (null != entry)
		{
			final List<String> estShipData = new ArrayList<String>();
			estShipData.add(SHIP_DATE_MESSAGE);
			entry.setEstShippingDates(estShipData);
			modelService.save(entry);
		}
	}


	/**
	 * This method will set the stock details to the cart items
	 *
	 * @param stockDetailsMap
	 * @param entry
	 */
	protected void setStockDetailsToCartEntry(final Map<String, GEEdgeStockDetailModel> stockDetailsMap,
			final AbstractOrderEntryModel entry) {
		final Set<String> keys = stockDetailsMap.keySet();
		if (null != entry.getProduct() && null != keys){

			LOG.info("BHGECartServiceImpl, stockDetailsMap size is : " + keys.size() + "for product  : " + entry.getProduct().getCode());
	}
		if (null != keys && keys.size() > 0)
		{
			final GEEdgeProductModel productModel = (GEEdgeProductModel) entry.getProduct();
			final List<GEEdgeStockDetailModel> stockDetailsList = new ArrayList<GEEdgeStockDetailModel>();
			for (final String key : keys)
			{
				GEEdgeStockDetailModel stockDetailsModel = null;
				if (key.startsWith(productModel.getCode().replaceAll("\\s", "") + "_"))
				{
					stockDetailsModel = stockDetailsMap.get(key);
					stockDetailsList.add(stockDetailsModel);

					// Setting Stock info to the Cart Entry
					if (stockDetailsModel.getPlant().equals(entry.getPlant()))
					{
						entry.setAvailableQuantity(stockDetailsModel.getActualStockQty());
						if (stockDetailsModel != null) {
							LOG.info("BHGECartServiceImpl, Lead time is " + stockDetailsModel.getLeadtime() + " entry pk " + entry.getPk());
						}
						entry.setLeadtime(stockDetailsModel.getLeadtime());
					}
				}
			}
			entry.setStockDetails(stockDetailsList);
			modelService.save(entry);
		}
	}



	protected void handleExceptionCase(final AbstractOrderModel cart, final Exception exception)
	{
		final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
		final List<AbstractOrderEntryModel> updateOrderEntries = new ArrayList<AbstractOrderEntryModel>();
		for (final AbstractOrderEntryModel orderEntry : orderEntries)
		{
			orderEntry.setDiscountPrice(Config.getString("DISC_PRICE_NOTAVBL", "Disc, Price not available"));
			final List<String> estShipData = new ArrayList<String>();
			estShipData.add(Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE"));
			orderEntry.setEstShippingDates(estShipData);
			cart.setConnectivityerror(Config.getParameter(JCO_CONNECTIVITY_ERROR));
			try
			{
				modelService.save(orderEntry);
				//modelService.refresh(orderEntry);
			}
			catch (final ModelSavingException e)
			{
				LOG.warn("Error while saving orderEntries." + e.getMessage() + " and the reason is " + e.getCause());
				e.printStackTrace();
			}
			updateOrderEntries.add(orderEntry);
		}
		cart.setEntries(updateOrderEntries);
		modelService.save(cart);
		//modelService.refresh(cart);

		final BHGESoldToData soldTo = sessionService.getAttribute("sessionSoldTo");
		GEEdgeCustomerModel geEdgeCustomerModel = null;
		if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			geEdgeCustomerModel = (GEEdgeCustomerModel) userService.getCurrentUser();
		}
		final String soldToID = ((soldTo == null) ? "no sold to found" : soldTo.getUid());
		final String userEmail = geEdgeCustomerModel == null ? "no_user_found" : geEdgeCustomerModel.getEmail();

		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		// Get the date today using Calendar object.
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);

		model.setErrorCode("BackendException in ATP Service");
		final String exceptionMsg = exception.getMessage();
		model.setErrorDescription(exceptionMsg);
		model.setCurrentUserEmail(userEmail);
		model.setCurrentSoldToId(soldToID);
		model.setErrorTime(reportDate);
		model.setErrorType("ATP Error");
		// needs to be added or modified
		model.setRequestParameterToSAP("CartModel as" + cart.toString());
		model.setResponseParameterFromSAP("BackendException Object" + exception.toString());
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
		model.setStatus(Boolean.FALSE);
		modelService.save(model);
		//modelService.refresh(model);
		bhgeEmailService.sendEmailForRFCFailure(Config.getParameter("RFCFailureSubject"), Config.getParameter("RFCFailureMailTo"),
				exception.getMessage());
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.hybris.ge.edge.core.order.service.GEEdgeCartService#getIncoterm1(de.hybris.platform.core.model.user.
	 * AddressModel, com.hybris.ge.edge.facades.user.data.GEEdgeSoldToData)
	 */
	@Override
	public String getIncoterm1(final AddressData shipToData, final BHGESoldToData soldToData)
	{
		String incoterm1 = null;
		//Guest User
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final B2BUnitModel currentSessionB2BUnitModel = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			if (StringUtils.isNotBlank(currentSessionB2BUnitModel.getIncoterms1()))
			{
				incoterm1 = currentSessionB2BUnitModel.getIncoterms1();
			}
		}
		//Logged in user
		else if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			if (shipToData != null && StringUtils.isNotBlank(shipToData.getSapCustomerID()))
			{
//				LOG.info(" #################### getIncoterm1::Selected Delivery address at the Checkout page is "
//						+ (StringUtils.isNotEmpty(shipToData.getCompanyName()) ? shipToData.getCompanyName() + "-" : "")
//						+ " " + (StringUtils.isNotEmpty(shipToData.getLine1()) ? shipToData.getLine1() + "-" : "") + " "
//						+  (StringUtils.isNotEmpty(shipToData.getSapCustomerID()) ? shipToData.getSapCustomerID() : ""));

				final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
				final String shipToId = shipToData.getSapCustomerID() + "_" + userSalesRegion;
				final B2BUnitModel shipToLocation = userProfileService.findChildB2BUnitModel(shipToId);
				LOG.info(" ######### getIncoterm1 for ::shipToId ");

				if (shipToLocation.getIncoterms1() != null)
				{
					incoterm1 = shipToLocation.getIncoterms1();
					LOG.info(" ######### getIncoterm1 for: shipToLocation.getIncoterms1() ::shipToId ");
				}
				else
				{
					incoterm1 = soldToData.getIncoterms1();
					LOG.info(" ######### getIncoterm1 for: soldToData.getIncoterms1() ::soldToDataId " + soldToData.getUid() + incoterm1);

				}
			}
			else
			{
				incoterm1 = soldToData.getIncoterms1();
				LOG.info(" ######### getIncoterm1 for: soldToData.getIncoterms1() :: In else ");
			}
		}
		if (incoterm1 != null)
		{
			LOG.info(" ######################## Incoterm for the Current order with Order code is ");
		}
		return incoterm1;
	}



	//Added for Spartacus Migration
	@Override
	public String getIncoterm1ForWs(final AddressData shipToData, final BHGESoldToData soldToData, String guestSalesArea)
	{
		String incoterm1 = null;
		//Guest User
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			//final B2BUnitModel currentSessionB2BUnitModel = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			BHGEAnonymousUserCatalogModel anonymousUserCatalog = bhgeSoldToUtil.getAnonymousUserCatalog(guestSalesArea);
			B2BUnitModel currentSessionB2BUnitModel = anonymousUserCatalog.getB2BUnit();

			if (StringUtils.isNotBlank(currentSessionB2BUnitModel.getIncoterms1()))
			{
				incoterm1 = currentSessionB2BUnitModel.getIncoterms1();
			}
		}
		//Logged in user
		else if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			if (shipToData != null && StringUtils.isNotBlank(shipToData.getSapCustomerID()))
			{
//				LOG.info(" #################### getIncoterm1::Selected Delivery address at the Checkout page is "
//	            + (StringUtils.isNotEmpty(shipToData.getCompanyName()) ? shipToData.getCompanyName() + "-" : "")
//	            + " " + (StringUtils.isNotEmpty(shipToData.getLine1()) ? shipToData.getLine1() + "-" : "") + " "
//	 			+ (StringUtils.isNotEmpty(shipToData.getSapCustomerID()) ? shipToData.getSapCustomerID() : ""));

				final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
				final String shipToId = shipToData.getSapCustomerID() + "_" + userSalesRegion;
				final B2BUnitModel shipToLocation = userProfileService.findChildB2BUnitModel(shipToId);
				LOG.info(" ######### getIncoterm1 for ::shipToId ");
				if (shipToLocation.getIncoterms1() != null)
				{
					incoterm1 = shipToLocation.getIncoterms1();

					LOG.info(" ######### getIncoterm1 for: shipToLocation.getIncoterms1() ::shipToId ");
				}
				else
				{
					incoterm1 = soldToData.getIncoterms1();

					LOG.info(" ######### getIncoterm1 for: soldToData.getIncoterms1() ::soldToDataId " + soldToData.getUid() + incoterm1);
				}
			}
			else
			{
				incoterm1 = soldToData.getIncoterms1();

				LOG.info(" ######### getIncoterm1 for: soldToData.getIncoterms1() :: In else ");
			}
		}
		if (incoterm1 != null)
		{
			LOG.info(" ######################## Incoterm for the Current order with Order code is ");
		}
		return incoterm1;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.hybris.ge.edge.core.order.service.GEEdgeCartService#getIncoterm2(de.hybris.platform.core.model.user.
	 * AddressModel, com.hybris.ge.edge.facades.user.data.GEEdgeSoldToData)
	 */
	@Override
	public String getIncoterm2(final AddressData shipToData, final BHGESoldToData soldToData)
	{
		String incoterm2 = null;

		//Guest User
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final B2BUnitModel currentSessionB2BUnitModel = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			if (StringUtils.isNotBlank(currentSessionB2BUnitModel.getIncoterms2()))
			{
				incoterm2 = currentSessionB2BUnitModel.getIncoterms2();
			}
		}
		//Logged in user
		else if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			if (shipToData != null && StringUtils.isNotBlank(shipToData.getSapCustomerID()))
			{
				final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
				final String shipToId = shipToData.getSapCustomerID() + "_" + userSalesRegion;
				final B2BUnitModel shipToLocation = userProfileService.findChildB2BUnitModel(shipToId);

				if (shipToLocation.getIncoterms2() != null)
				{
					incoterm2 = shipToLocation.getIncoterms2();
				}
				else
				{
					incoterm2 = soldToData.getIncoterms2();
				}
			}
			else
			{
				incoterm2 = soldToData.getIncoterms2();
			}
		}
		if (incoterm2 != null)
		{
			LOG.info(" ######################## Incoterm for the Current order with Order code is ");
		}
		return incoterm2;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.hybris.ge.edge.core.order.service.GEEdgeCartService#getIncotermModel(de.hybris.platform.core.model.user.
	 * AddressModel, com.hybris.ge.edge.facades.user.data.GEEdgeSoldToData)
	 */
	@Override
	public String getIncotermModel(final AddressData shipToData, final BHGESoldToData soldToData)
	{
		String incotermName = null;

		//Guest User
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final B2BUnitModel currentSessionB2BUnitModel = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			if (currentSessionB2BUnitModel.getIncotrms1() != null)
			{
				incotermName = currentSessionB2BUnitModel.getIncotrms1().getName();
			}
		}
		//Logged in user
		else if (userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			if (shipToData != null && StringUtils.isNotBlank(shipToData.getSapCustomerID()))
			{
				final String userSalesRegion = userProfileService.getUserDefaultSalesRegion();
				final String shipToId = shipToData.getSapCustomerID() + "_" + userSalesRegion;
				final B2BUnitModel shipToLocation = userProfileService.findChildB2BUnitModel(shipToId);

				if (shipToLocation.getIncotrms1() != null)
				{
					incotermName = shipToLocation.getIncotrms1().getName();
				}
				else
				{
					if (soldToData.getIncotrms1() != null)
					{
						incotermName = soldToData.getIncotrms1().getName();
					}
				}
			}
			else
			{
				if (soldToData.getIncotrms1() != null)
				{
					incotermName = soldToData.getIncotrms1().getName();
				}
			}
		}
		if (incotermName != null)
		{
			LOG.info(" ######################## Incoterm for the Current order with Order code is ");
		}
		return incotermName;
	}

	@Override
	public CartModel getSessionCart()
	{
		if (!userService.getCurrentUser().getUid().contains("anonymous"))
		{

			// Logged in user - getting cart based on customer and default sold to

			final UserModel user = userService.getCurrentUser();
			//LOG.info("User info :" + userService.getCurrentUser());
			B2BUnitModel b2bUnit = null;
			if (user instanceof GEEdgeCustomerModel currentUser)
			{
				b2bUnit = currentUser.getDefaultB2BUnit();
			}
			try
			{
				if (b2bUnit != null)
				{
					final CartModel cart = loadCart();

					/*if (cart != null)
					{
					cart.setSoldToForCart(b2bUnit);
					modelService.save(cart);
					}*/
					// LOG.info("Cart sold to for cart " + cart.getSoldToForCart().getUid());
                    if(null != cart && null != cart.getCartType() && null != cart.getCommerceType() && cart.getCommerceType().getCode().equalsIgnoreCase(BUY)
                    && null == cart.getQuoteReference() && Boolean.FALSE.equals(cart.getIsQuote())){
                        BHGECurrencyModel bhgecurrency = bhgePriceAvailabilityUtils.getCustomerCurrency(b2bUnit.getUid(),cart.getCartType().getCode());
                        if(bhgecurrency != null) {
                            CurrencyModel cartCurrency = bhgeProductService.getcurrencyModel(bhgecurrency.getCurrency());
                            cart.setCurrency(cartCurrency);
                            LOG.info("BHGECartServiceImpl.java into differenct loop to save the cart currency - existing cart" +cart.getCurrency().getIsocode());
                            modelService.save(cart);
                        }
                    }
					return cart;
				}
			}
			catch (final Exception ex)
			{
				if (LOG.isInfoEnabled())
				{
					LOG.info("Session Cart no longer valid. Removing from session. getSessionCart will create a new cart. "
							+ ex.getMessage() + ExceptionUtils.getStackTrace(ex));
					getSessionService().removeAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME);
					getSessionService().setAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME,
							bhgeCartFactory.updateCartForLoggedInuser(super.getSessionCart()));
					getSessionService().removeAttribute(SESSION_CART_PARAMETER_NAME);
				}
			}
			// Guest user - getting cart based only on  customer
			return super.getSessionCart();

		}
		else
		{
			try
			{
				return internalGetSessionCart();
			}
			catch (final JaloObjectNoLongerValidException ex)
			{
				if (LOG.isInfoEnabled())
				{
					LOG.info("Session Cart no longer valid. Removing from session. getSessionCart will create a new cart. "
							+ ex.getMessage());
				}
				getSessionService().removeAttribute(SESSION_CART_PARAMETER_NAME);
				return internalGetSessionCart();
			}
		}
	}

	private CartModel loadCart() {
		LOG.info("Inside load() method in anonymous class time : " + LocalDateTime.now());
		final CartModel cart = getExistingCartForSoldTo();
		if (cart != null) {
			if (null != cart.getCartType() && null != cart.getSoldToForCart() && null == cart.getQuoteReference() && null != cart.getCommerceType() &&
					cart.getCommerceType().getCode().equalsIgnoreCase(BUY) && Boolean.FALSE.equals(cart.getIsQuote())) {
				String b2bUnit = cart.getSoldToForCart().getUid();
				BHGECurrencyModel bhgecurrency = bhgePriceAvailabilityUtils.getCustomerCurrency(b2bUnit, cart.getCartType().getCode());
				if (bhgecurrency != null) {
					CurrencyModel cartCurrency = bhgeProductService.getcurrencyModel(bhgecurrency.getCurrency());
					cart.setCurrency(cartCurrency);
					LOG.info("BHGECartServiceImpl.java into the loop to save the cart currency for FILM - existing cart" + cart.getCurrency().getIsocode());
					modelService.save(cart);
				}
			}

			return cart;
		}
		return bhgeCartFactory.createCart();
	}

	/**
	 * @return
	 */
	private CartModel getExistingCartForSoldTo()
	{
		UserModel user = userService.getCurrentUser();
		CartModel cart =  bhgeB2BOrderService.getExistingCartForSoldTo(user);
        if( null != cart && null != cart.getCartType() && null != cart.getSoldToForCart() && null == cart.getQuoteReference() && null != cart.getCommerceType() &&
                cart.getCommerceType().getCode().equalsIgnoreCase(BUY)&& Boolean.FALSE.equals(cart.getIsQuote()) ){
            String b2bUnit =cart.getSoldToForCart().getUid();
            BHGECurrencyModel bhgecurrency = bhgePriceAvailabilityUtils.getCustomerCurrency(b2bUnit,cart.getCartType().getCode());
            if(bhgecurrency != null) {
                CurrencyModel cartCurrency = bhgeProductService.getcurrencyModel(bhgecurrency.getCurrency());
                cart.setCurrency(cartCurrency);
                LOG.info("BHGECartServiceImpl.java into the hassessioncart loop to save the cart currency for FILM - existing cart" +cart.getCurrency().getIsocode());
                modelService.save(cart);
            }
        }
        return cart;
	}



	@Override
	public void clearSessionCart()
	{
		try
		{
			final CartModel cart = bhgeCartFactory.createCart();
			// Logged in user - getting cart based on customer and default sold to
			final UserModel user = userService.getCurrentUser();
			if (user instanceof GEEdgeCustomerModel)
			{
				final B2BUnitModel b2bUnit = ((GEEdgeCustomerModel) user).getDefaultB2BUnit();
				getSessionService().setAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME, cart);
			}

		}
		catch (final Exception e)
		{
			LOG.error("Error while clearing session cart" + e);
		}
	}

	@Override
	public GEEdgeCartType getCartTypeForCart(final CartModel cart)
	{
		final UserModel user = userService.getCurrentUser();
		final List<String> cartTypes = new ArrayList<String>();
		GEEdgeCartType cartType = null;
		if (CollectionUtils.isNotEmpty(cart.getEntries()))
		{
			for (final AbstractOrderEntryModel entry : cart.getEntries())
			{
				final GEEdgeProductType productType = ((GEEdgeProductModel) entry.getProduct()).getProductType();
				if (null == productType)
				{
					continue;
				}
				cartType = getCartTypeForProductType(productType);
				if (null != cartType && CollectionUtils.isNotEmpty(cartTypes) && !cartTypes.contains(cartType.getCode()))
				{
					return GEEdgeCartType.HYBRID;
				}
				cartTypes.add(cartType.getCode());
			}
		}
		return cartType;
	}

	/**
	 * Gets price and availability by passing guestSalesArea as additional input
	 */
	@Override
	public CartModel getRealTimePriceAndAvailabiltyDetails(final CartModel cart, final Boolean shipmentMethod, String guestSalesArea, String productLine, final Map<Integer, ConfigurationData> configDataMap)
	{
		if (cart.getEntries().isEmpty())
		{
			return cart;
		}
		if (Boolean.TRUE.equals(shipmentMethod))
		{
			cart.setIsShipCompleteOrder(Boolean.TRUE);
			cart.setIsPartialShipment(Boolean.FALSE);
		}
		else
		{
			cart.setIsShipCompleteOrder(Boolean.FALSE);
			cart.setIsPartialShipment(Boolean.TRUE);
		}
        LOG.info("US644202 carttotal service "+cart.getTotalPrice());
        LOG.info("US644202 cartdiscounts-1"+cart.getGlobalDiscountValues());
        if(null != cart.getSoldToForCart().getUid() && null != cart.getCartType() && null != cart.getQuoteReference() && null != cart.getCommerceType() &&
        cart.getCommerceType().getCode().equalsIgnoreCase(BUY)&& Boolean.FALSE.equals(cart.getIsQuote())){
        String b2bUnit = cart.getSoldToForCart().getUid();
        BHGECurrencyModel bhgecurrency = bhgePriceAvailabilityUtils.getCustomerCurrency(b2bUnit,cart.getCartType().getCode());
        if(bhgecurrency != null) {
            LOG.info("into the loop to save the cart currency for FILM" +bhgecurrency.getCurrency());
           CurrencyModel cartCurrency = bhgeProductService.getcurrencyModel(bhgecurrency.getCurrency());
            cart.setCurrency(cartCurrency);
            modelService.save(cart);
            modelService.refresh(cart);
        }
        }
		try
		{
            LOG.info("US644202 carttotal--2 service"+cart.getTotalPrice());
            LOG.info("US644202 cartdiscounts-2 before recalculate"+cart.getGlobalDiscountValues());
			cart.setConnectivityerror(null);
			final List<AbstractOrderEntryModel> nonVCCartEntries = filterNonVCCartEntries(cart);
			final List<AbstractOrderEntryModel> vcCartEntries = filterVCCartEntries(cart);

			if(CollectionUtils.isNotEmpty(nonVCCartEntries)) {
				String priceAndAvailabilityRequestXml = prepareRequestForWS(cart, BhgeCoreConstants.FLAG_PA, guestSalesArea, null, productLine, nonVCCartEntries);
				final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
						flexibleSearchService);
				BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
                LOG.info("US644202 carttotal--3 before P&A response calculation "+cart.getTotalPrice());
                LOG.info("US644202 cartdiscounts-3"+cart.getGlobalDiscountValues());
                processResponse(cart, scpiEndpointUrl, zPriceandAvailablityResponse, productLine, nonVCCartEntries);
                LOG.info("US644202 carttotal--4 after P&A response calculation "+cart.getTotalPrice());
                LOG.info("US644202 cartdiscounts-4"+cart.getGlobalDiscountValues());
			}

			if (CollectionUtils.isNotEmpty(vcCartEntries)) {

				//This is to call to get the price and availability for VC
				if (isBentlyStore() || BhgeCoreConstants.BENTLY_NEVADA.equalsIgnoreCase(productLine)) {
					LOG.info("Inside BHGECartServiceImpl getRealTimePriceAndAvailabiltyDetails : vcCartEntries present for Bently");
					String priceAndAvailabilityRequestXml = prepareRequestForWS(cart, BhgeCoreConstants.FLAG_VL, guestSalesArea, configDataMap, productLine, vcCartEntries);
					final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
							flexibleSearchService);
					BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
					processResponse(cart, scpiEndpointUrl, zPriceandAvailablityResponse, productLine, vcCartEntries);
					processResponseLongNumber(zPriceandAvailablityResponse, vcCartEntries);

				} else {
					
					LOG.info("Inside BHGECartServiceImpl getRealTimePriceAndAvailabiltyDetails : vcCartEntries present for nont Bently store");
					final List<AbstractOrderEntryModel> vcLongConfigEntries = filterVCLongConfigCartEntries(vcCartEntries);
					final List<AbstractOrderEntryModel> vcNonLongConfigEntries = filterVCNonLongConfigCartEntries(vcCartEntries);
					if(CollectionUtils.isNotEmpty(vcLongConfigEntries)) {
						
						LOG.info("Inside BHGECartServiceImpl getRealTimePriceAndAvailabiltyDetails : vcLongConfigEntries present for nont Bently store");
						//This is to call to get the price and LN for long config for Pana
						String vcLongConfigRequestXml = prepareRequestForWS(cart, BhgeCoreConstants.FLAG_VL, guestSalesArea, configDataMap, productLine, vcLongConfigEntries);
						final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
								flexibleSearchService);
						BHGEZPriceandAvailablityResponse vcLongConfigResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, vcLongConfigRequestXml, BHGEZPriceandAvailablityResponse.class);
						processResponse(cart, scpiEndpointUrl, vcLongConfigResponse, productLine, vcLongConfigEntries);
						processResponseLongNumber(vcLongConfigResponse, vcLongConfigEntries);
						
					} else if(CollectionUtils.isNotEmpty(vcNonLongConfigEntries)) {
						LOG.info("Inside BHGECartServiceImpl getRealTimePriceAndAvailabiltyDetails : vcNonLongConfigEntries present for nont Bently store");
						//This is to call to get the long part number for VC
						String vcNonLongConfigRequestXml = prepareRequestForWS(cart, BhgeCoreConstants.FLAG_LN, guestSalesArea, configDataMap, productLine, vcNonLongConfigEntries);
						final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
								flexibleSearchService);
						BHGEZPriceandAvailablityResponse vcNonLongConfigResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, vcNonLongConfigRequestXml, BHGEZPriceandAvailablityResponse.class);
						processResponseLongNumber(vcNonLongConfigResponse, vcNonLongConfigEntries);
						
					}
				}
				
				String vcAvailabilityrRequestXml = prepareRequestForWS(cart, BhgeCoreConstants.FLAG_A, guestSalesArea, configDataMap, productLine, vcCartEntries);
				final String scpiEndpointUrlForAvailablity = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
						flexibleSearchService);
				BHGEZPriceandAvailablityResponse vcAvailabilityrResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrlForAvailablity, vcAvailabilityrRequestXml, BHGEZPriceandAvailablityResponse.class);
				LOG.info("BHGECartServiceImpl : Check availibitly response : " +  scpiConnector.toXML(vcAvailabilityrResponse));
				processAvailability(cart, vcAvailabilityrResponse, vcCartEntries);
			}

			if (shipmentMethod)
			{
				setLargestShipDateInCartEntries(cart);
			}

		}
		catch (final BackendException backEndException)
		{
			LOG.error("BackendException occured" + backEndException.getMessage());
			//handleExceptionCase(cart, backEndException);
			cart.setConnectivityerror(Config.getParameter(JCO_CONNECTIVITY_ERROR));
			try
			{
				modelService.save(cart);
				//modelService.refresh(cart);
			}
			catch (final ModelSavingException e)
			{
				LOG.warn("Error while saving cart. " + e.getMessage() + " and the reason is " + e.getCause());
				e.printStackTrace();
			}
		}
		catch (final BackendRuntimeException beckEndRunTimeException)
		{
			LOG.error("BackendRuntimeException occured" + beckEndRunTimeException.getMessage());
			handleExceptionCase(cart, beckEndRunTimeException);
		}
		catch (final Exception exception)
		{
			LOG.error("Exception occured" + exception.getMessage());
			handleExceptionCase(cart, exception);
			//exception.printStackTrace();
			LOG.error(ERROR + ExceptionUtils.getStackTrace(exception));
		}
		setSurchargeForOrder(cart);
		// Closing the SAP code here
		return cart;
	}

	@Override
	public void setSurchargeForOrder(CartModel cart) {
		LOG.info("Inside setSurchargeForOrder method in BHGECartServiceImpl ");
		LOG.info("cart currency after saving "+cart.getCurrency().getIsocode());
		String sessionSalesOrg = "";
		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
		final String defaultUnitId = b2bUnit;
		String[] defaultB2BId = null;
		if (Objects.nonNull((defaultUnitId)) && defaultUnitId.contains("_")) {
			defaultB2BId = defaultUnitId.split("_");
			sessionSalesOrg = defaultB2BId[1];
			LOG.info("Inside Sales Org If " + sessionSalesOrg);
		}
		String curr = (cart.getCurrency() != null) ? cart.getCurrency().getIsocode() : "";
		LOG.info("Sales Org & Curr " + sessionSalesOrg + " " + curr);
		LOG.info("Sales Org " + sessionSalesOrg);
		LOG.info("Currency " + curr);
		List<SAPSalesOrganizationModel> SalesOrgAndCurr = bhgeUserProfileDao.getFindBySalesOrgAndCurrencyString(sessionSalesOrg, curr);
		Integer Limit =0;
		Integer surCharge = 0;
		if(SalesOrgAndCurr.size()>0 ){
			Limit = Integer.parseInt(SalesOrgAndCurr.get(0).getLimit());
			surCharge = Integer.parseInt(SalesOrgAndCurr.get(0).getCharge());
		}
		if(surCharge!= 0) {
			cart.setSurCharge(String.valueOf(surCharge));
		}
		if(null != cart.getSubtotal()) {
			LOG.info("Cart subtotal is " + cart.getSubtotal() + " and surcharge limit is " + Limit);
			if(cart.getSubtotal() >= 10000)
			{
				LOG.info("Cart subtotal is greater than 10000, so not applying surcharge");
				cart.setSurCharge(null);
			}
		}
		modelService.save(cart);
		modelService.refresh(cart);
	}

	private void processResponseLongNumber(BHGEZPriceandAvailablityResponse fullyLongNumberResponse, List<AbstractOrderEntryModel> vcCartEntries) {

		LOG.info("BHGECartServiceImpl processResponseLongNumber - Response XML: " + scpiConnector.toXML(fullyLongNumberResponse));
		AtomicReference<Integer> configCounter = new AtomicReference<>(BhgeCoreConstants.CONFIG_KPOSN_COUNTER);
		if(null != fullyLongNumberResponse) {
			final BHGEZPriceandAvailablityRequestItem etLong = fullyLongNumberResponse.getEtLong();
			if (null != etLong && CollectionUtils.isNotEmpty(etLong.getItems())) {
				LOG.info("BHGECartServiceImpl fullyConfigurePartNumber etLong items size :" + etLong.getItems().size() +"product code is :" + etLong.getItems().get(0).getMaterial()+"posnr is :"+etLong.getItems().get(0).getPosnr());
				for (final AbstractOrderEntryModel orderEntry : vcCartEntries) {
					int lineNumber = Integer.parseInt(bhgePriceAvailabilityUtils.formattedLineNumber(orderEntry.getEntryNumber()+configCounter.get()));
					final String productCode = orderEntry.getProduct().getCode();
					for (BHGEZPriceandAvailablityRequestItem responseItem : etLong.getItems()) {
						if (productCode.equalsIgnoreCase(responseItem.getMaterial()) && lineNumber == Integer.parseInt(responseItem.getPosnr())) {
							orderEntry.setVcFullyConfigurepartNumber(productCode + responseItem.getZzmatcfg());
							LOG.info("BHGECartServiceImpl fullyConfigurePartNumber zzmatchsfg value :" + responseItem.getZzmatcfg());
							modelService.save(orderEntry);
						}
					}
				}
			}
		}
	}


	/**
	 * This method will get the Price and Availability details from SAP using RFC connection for the shopping cart items
	 *
	 */
	@Override
	public CartModel getRealTimePriceAndAvailabiltyDetails(final CartModel cart, final Boolean shipmentMethod)
	{
		if (cart.getEntries().isEmpty())
		{
			return cart;
		}
		if (Boolean.TRUE.equals(shipmentMethod))
		{
			cart.setIsShipCompleteOrder(Boolean.TRUE);
			cart.setIsPartialShipment(Boolean.FALSE);
		}
		else
		{
			cart.setIsShipCompleteOrder(Boolean.FALSE);
			cart.setIsPartialShipment(Boolean.TRUE);
		}

		try
		{
			String priceAndAvailabilityRequestXml = prepareRequest(cart, BhgeCoreConstants.FLAG_PA);
			final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
					flexibleSearchService);
			BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
			processResponse(cart, scpiEndpointUrl, zPriceandAvailablityResponse, null, cart.getEntries());

			if (Boolean.TRUE.equals(shipmentMethod))
			{
				setLargestShipDateInCartEntries(cart);
			}

		}
		catch (final BackendException backEndException)
		{
			LOG.error("BackendException occured" + backEndException.getMessage());
			//handleExceptionCase(cart, backEndException);
			cart.setConnectivityerror(Config.getParameter(JCO_CONNECTIVITY_ERROR));
			try
			{
				modelService.save(cart);
				//modelService.refresh(cart);
			}
			catch (final ModelSavingException e)
			{
				LOG.warn("Error while saving cart. " + e.getMessage() + " and the reason is " + e.getCause());
				e.printStackTrace();
			}
		}
		catch (final BackendRuntimeException beckEndRunTimeException)
		{
			LOG.error("BackendRuntimeException occured" + beckEndRunTimeException.getMessage());
			handleExceptionCase(cart, beckEndRunTimeException);
		}
		catch (final Exception exception)
		{
			LOG.error("Exception occured" + exception.getMessage());
			handleExceptionCase(cart, exception);
			//exception.printStackTrace();
			LOG.error(ERROR + ExceptionUtils.getStackTrace(exception));
		}
		// Closing the SAP code here
		return cart;
	}

	/**
	 * This method will set the largest estimated shipping date to the cart entries, since the shipmode is complete
	 *
	 * @param cart
	 */
	protected void setLargestShipDateInCartEntries(final CartModel cart)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("setLargestShipDateInCartEntries: Setting Largest Estimated Ship date to Cart Entries");
		}

		if (CollectionUtils.isNotEmpty(cart.getEntries()))
		{
			if (null != cart.getCartType() && cart.getCartType().getCode().equalsIgnoreCase("HYBRID"))
			{
				final List<AbstractOrderEntryModel> filmEntries = new ArrayList<AbstractOrderEntryModel>();
				final List<AbstractOrderEntryModel> nonFilmEntries = new ArrayList<AbstractOrderEntryModel>();
				for (final AbstractOrderEntryModel entryModel : cart.getEntries())
				{
					final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) entryModel.getProduct();
					if (geEdgeProductModel.getProductType() != null
							&& geEdgeProductModel.getProductType().getCode().equalsIgnoreCase("FILM"))
					{
						filmEntries.add(entryModel);
					}
					else
					{
						nonFilmEntries.add(entryModel);
					}
				}

				if (filmEntries.size() > 0)
				{
					setLargestShipDateToEntries(filmEntries);
				}

				if (nonFilmEntries.size() > 0)
				{
					setLargestShipDateToEntries(nonFilmEntries);
				}
			}
			else
			{
				setLargestShipDateToEntries(cart.getEntries());
			}
		}
		try
		{
			modelService.save(cart);
			//modelService.refresh(cart);
		}
		catch (final ModelSavingException e)
		{
			LOG.warn("Error while saving cart. " + e.getMessage() + " and the reason is " + e.getCause());
			e.printStackTrace();
		}
	}

	private void setLargestShipDateToEntries(final List<AbstractOrderEntryModel> entries)
	{
		for (final AbstractOrderEntryModel entry : entries)
		{
			final List<String> shipDate = entry.getEstShippingDates();
			if (shipDate != null && !shipDate.isEmpty())
			{
				List<String> dateList = null;
				final String date = shipDate.get(0);
				if (date != null && !date.endsWith((SHIP_DATE_MESSAGE)))
				{
					if (dateList == null)
					{
						//dateList = getLargestShipDate(entries);
						dateList = getLargestShipDateForEntry(entry);
					}
					final List<String> dateWithQuantity = new ArrayList<String>();
					for (final String d : dateList)
					{
						dateWithQuantity.add(entry.getQuantity() + " " + d);
					}
					entry.setEstShippingDates(dateWithQuantity);
					modelService.save(entry);
					//modelService.refresh(entry);
				}
			}
		}
	}

	protected ArrayList<String> getLargestShipDateForEntry(final AbstractOrderEntryModel entry)
	{
		final String format = Config.getString("ATP_SHIP_DATE_FORMAT", "dd-MM-yyyy");
		final SimpleDateFormat formatter = new SimpleDateFormat(format);
		final List<Date> shipDatesList = new ArrayList<Date>();

			final List<String> shipDate = entry.getEstShippingDates();
			for (final String date : shipDate)
			{
				if (date != null && !date.equalsIgnoreCase(Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE")))
				{
					final String[] tokens = date.split(" ");
					if (tokens != null && tokens.length > 1)
					{
						try
						{
							shipDatesList.add(formatter.parse(tokens[1]));
						}
						catch (final ParseException e)
						{
							LOG.error(
									"Parse exception occured while parsing the estimated ship date obtained from ATP RFC call: The Date obtained is not in the format of "
											+ format);
						}
					}
				}
			}

		String largestShipDate = "";
		if (!shipDatesList.isEmpty())
		{
			Collections.sort(shipDatesList);
			largestShipDate = formatter.format(shipDatesList.get(shipDatesList.size() - 1));
		}
		final ArrayList<String> newShipDates = new ArrayList<>();
		newShipDates.add(largestShipDate);
		return newShipDates;
	}

	protected ArrayList<String> getLargestShipDate(final List<AbstractOrderEntryModel> entries)
	{
		final String format = Config.getString("ATP_SHIP_DATE_FORMAT", "dd-MM-yyyy");
		final SimpleDateFormat formatter = new SimpleDateFormat(format);
		final List<Date> shipDatesList = new ArrayList<Date>();
		for (final AbstractOrderEntryModel entry : entries)
		{
			final List<String> shipDate = entry.getEstShippingDates();
			for (final String date : shipDate)
			{
				if (date != null && !date.equalsIgnoreCase(Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE")))
				{
					final String[] tokens = date.split(" ");
					if (tokens != null && tokens.length > 1)
					{
						try
						{
							shipDatesList.add(formatter.parse(tokens[1]));
						}
						catch (final ParseException e)
						{
							LOG.error(
									"Parse exception occured while parsing the estimated ship date obtained from ATP RFC call: The Date obtained is not in the format of "
											+ format);
						}
					}
				}
			}
		}
		String largestShipDate = "";
		if (!shipDatesList.isEmpty())
		{
			Collections.sort(shipDatesList);
			largestShipDate = formatter.format(shipDatesList.get(shipDatesList.size() - 1));
		}
		final ArrayList<String> newShipDates = new ArrayList<String>();
		newShipDates.add(largestShipDate);
		return newShipDates;
	}

	@Override
	public MediaModel uploadOrderAttachment(final MultipartFile file)
	{
		try
		{
			final MediaModel mediaModel = new MediaModel();
			final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
			mediaModel.setFolder(mediaFolder);

			String mediaName = null;
			final String contentType = file.getContentType();
			String fileExtension = MediaUtil.getFileExtension(file.getOriginalFilename());
			mediaName = mediaCodeGenerator.generate().toString();
			//shortening file name as SAP is not accepting files with large name
			String shortFileName = StringUtils.substring(file.getOriginalFilename(), 0, Config.getInt("attachmentFleNameLength", 20));
			if(!shortFileName.toLowerCase().endsWith("." + fileExtension.toLowerCase())){
				shortFileName += "." + fileExtension;
			}
			mediaModel.setRealFileName(shortFileName);
			mediaModel.setCode(mediaName);
			// POC mandates catalog version for media.
			final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG,
					"Online");
			mediaModel.setCatalogVersion(versions);

			getModelService().save(mediaModel);
			final MediaModel orderAttachmentFile = uploadFile(file, mediaModel, shortFileName, contentType);
			//Code for saving the attachment in cart
			final CartModel currentCart = getSessionCart();
			final List<MediaModel> finalList = new ArrayList<>();
			for (final MediaModel cartAttachment : currentCart.getAttachments())
			{
				finalList.add(cartAttachment);
			}
			finalList.add(orderAttachmentFile);
			currentCart.setAttachments(finalList);
			currentCart.setIsAttachmentMoved(false);
			getModelService().save(currentCart);
			return mediaModel;
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading file:" + e);
		}
		return null;
	}

	@Override
	public MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
			final String contentType) throws Exception
	{
		try
		{
			final InputStream inputStream = file.getInputStream();
			mediaService.setStreamForMedia(mediaModel, inputStream, originalFileName, contentType);

		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading media" + e);
		}
		return mediaModel;
	}

	@Override
	public void saveReqHeaderDeliveryDate(final Date reqDelDateNonFilm, final boolean isShipComplete)
	{
		final CartModel currentCart = getSessionCart();
		if (currentCart.getCartType().getCode().equalsIgnoreCase("FILM"))
		{
			currentCart.setReqHeaderDeliveryDateFilm(reqDelDateNonFilm);
		}
		else
		{
			currentCart.setReqHeaderDeliveryDate(reqDelDateNonFilm);
		}
		//currentCart.setReqHeaderDeliveryDate(reqDelDateNonFilm);
		modelService.save(currentCart);
		if (isShipComplete)
		{
			for (final AbstractOrderEntryModel orderEntryModel : currentCart.getEntries())
			{
				orderEntryModel.setRequestedDeliveryDate(null);
				modelService.save(orderEntryModel);
			}
		}
	}

	//Added for spartacus migration
	@Override
	public void saveReqHeaderDeliveryDateForWs(final Date reqDelDateNonFilm, final boolean isShipComplete, String cartId)
	{
		final CartModel currentCart = bhgeCartService.getCartByCodeForDSstore(cartId);
		if (currentCart!=null && currentCart.getCartType().getCode().equalsIgnoreCase("FILM"))
		{
			currentCart.setReqHeaderDeliveryDateFilm(reqDelDateNonFilm);
		}
		else
		{
			currentCart.setReqHeaderDeliveryDate(reqDelDateNonFilm);
		}
		//currentCart.setReqHeaderDeliveryDate(reqDelDateNonFilm);
		modelService.save(currentCart);
	}

	@Override
	public void saveReqHeaderDeliveryDateFilm(final Date reqHdrDate)
	{
		final CartModel currentCart = getSessionCart();
		currentCart.setReqHeaderDeliveryDateFilm(reqHdrDate);
		getModelService().save(currentCart);
	}

	//Added for spartacus migration
	@Override
	public void saveReqHeaderDeliveryDateFilmForWs(final Date reqHdrDate, String cartId)
	{
		final CartModel currentCart = bhgeCartService.getCartByCodeForDSstore(cartId);
		currentCart.setReqHeaderDeliveryDateFilm(reqHdrDate);
		getModelService().save(currentCart);
	}



	/**
	 * @param cart
	 */
	private void validateCartForNonSellableProducts(final CartModel cart)
	{
		String nonsellableProductCodes = "";
		for (final AbstractOrderEntryModel orderEntry : cart.getEntries())
		{
			if (orderEntry.getListPrice().doubleValue() == 0 && BooleanUtils.isFalse(orderEntry.getProduct().getSapConfigurable()))
			{
				nonsellableProductCodes = StringUtils.isNotEmpty(nonsellableProductCodes)
						? nonsellableProductCodes + "," + orderEntry.getProduct().getCode()
						: orderEntry.getProduct().getCode();
				getModelService().remove(orderEntry);
			}

			if (BooleanUtils.isTrue(orderEntry.getProduct().getSapConfigurable()))
			{
				double vcDiscountprice = 0.0;
				if (NumberUtils.isNumber(orderEntry.getDiscountPrice()))
				{
					vcDiscountprice = Double.valueOf(orderEntry.getDiscountPrice()).doubleValue();
				}
				if (vcDiscountprice == 0)
				{
					nonsellableProductCodes = StringUtils.isNotEmpty(nonsellableProductCodes)
							? nonsellableProductCodes + "," + orderEntry.getProduct().getCode()
							: orderEntry.getProduct().getCode();
					getModelService().remove(orderEntry);
					//getModelService().refresh(orderEntry);
				}
			}
		}

		getSessionService().setAttribute(BhgeCoreConstants.NON_SELLABLE_PROD_CODES, nonsellableProductCodes);
		//set cart type after removing the products
		cart.setCartType(getCartTypeForCart(cart));
		modelService.save(cart);
		//getModelService().refresh(cart);
	}


	@Override
	public ProductData getPriceFromRFC(final GEEdgeProductModel product)
	{
		LOG.info("TA937504: Inside SAP ERP Price service call");
		ProductData productData = null;
		try
		{
			if (null == product)
			{
				return null;
			}

			else
			{
				String priceAndAvailabilityRequestXml = preparePriceRequest(product);
				//String scpiEndpointUrl = scpiConnector.getSCPIConnection("UserRegistration");
				final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
						flexibleSearchService);
				BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
				productData =  processPriceResponse(product,zPriceandAvailablityResponse, scpiEndpointUrl, priceAndAvailabilityRequestXml);
				/*
				 * final JCoConnection connection = sapJcoContainer.getRFCConnection(); if (connection != null &&
				 * !connection.isBackendOffline()) { try { final JCoFunction function = preparePriceRequest(product,
				 * connection); connection.execute(function); productData = processPriceResponse(product, function); } catch
				 * (final Exception e) { productData = connectivityErrorResponse(); }
				 *
				 * } else { productData = connectivityErrorResponse(); }
				 */
			}
		}
		catch (final Exception exeption)
		{
			LOG.info("Exception is " + exeption.getMessage());
			// To-do : Mail trigger
		}
		return productData;
	}

	@Override
	public ProductData getPriceFromRFCForWS(final GEEdgeProductModel product, final String guestSalesArea)
	{
		ProductData productData = null;
		try
		{
			if (null == product)
			{
				return null;
			}

			else
			{
				String priceAndAvailabilityRequestXml = preparePriceRequestForWS(product, guestSalesArea);
				//String scpiEndpointUrl = scpiConnector.getSCPIConnection("UserRegistration");
				final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_PRICE_LIST_MAT_AVLBT_ENDPOINT_URL,
						flexibleSearchService);
				BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, priceAndAvailabilityRequestXml, BHGEZPriceandAvailablityResponse.class);
				productData =  processPriceResponse(product,zPriceandAvailablityResponse, scpiEndpointUrl, priceAndAvailabilityRequestXml);
				/*
				 * final JCoConnection connection = sapJcoContainer.getRFCConnection(); if (connection != null &&
				 * !connection.isBackendOffline()) { try { final JCoFunction function = preparePriceRequest(product,
				 * connection); connection.execute(function); productData = processPriceResponse(product, function); } catch
				 * (final Exception e) { productData = connectivityErrorResponse(); }
				 *
				 * } else { productData = connectivityErrorResponse(); }
				 */
			}
		}
		catch (final Exception exeption)
		{
			LOG.info("Exception is " + exeption.getMessage());
			// To-do : Mail trigger
		}
		return productData;
	}

	protected ProductData connectivityErrorResponse()
	{
		final ProductData productData = new ProductData();

		productData.setConnectivityerror(Config.getParameter(JCO_CONNECTIVITY_ERROR));
		return productData;
	}

	/**
	 * Preparing RFC Request to get the Real time Price for the given material from SAP using RFC
	 *
	 * @param geEdgeProductModel
	 * @param connection
	 * @return JCoFunction
	 * @throws BackendException
	 */
	protected JCoFunction preparePriceRequest(final GEEdgeProductModel geEdgeProductModel, final JCoConnection connection)
			throws BackendException
	{
		final String functionModule = Config.getString("SAP_FUNCTION", "ZHYB_PRICE_LIST_MAT_AVLBT");
		final JCoFunction function = setFunctionAndDefault(geEdgeProductModel, connection, functionModule);
		final JCoTable orderHeadTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_HEAD);
		final JCoTable orderItemsTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_ITEM);
		final JCoTable requestedDateTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_WMDVSX);
		final JCoTable partnerTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_PARTNER);
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final CartModel cart = getSessionCart();
		final String itemNum = "100000";

		String soldTo = "";
		final BHGESoldToData soldToData = (BHGESoldToData) getSessionService().getAttribute("sessionSoldTo");
		if (null != soldToData)
		{
			soldTo = soldToData.getUid();
		}

		// Setting Language to the request
		if (null != baseStore && null != baseStore.getDefaultLanguage())
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU,
					baseStore.getDefaultLanguage().getIsocode().toUpperCase());
		}
		else
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU, BhgeCoreConstants.DEFAULT_LOCALE);
		}
		function.getImportParameterList().setValue(BhgeCoreConstants.I_FLAG_PA, BhgeCoreConstants.FLAG_P);

		orderHeadTable.appendRow();
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_KUNNR, soldTo);
		final String vbelnValue = BHGESAPJCoUtils.addLeadingZeros(cart.getCode(), 10);
		LOG.debug("IT_HEAD-VBELN value is " + vbelnValue);
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_VBELN, vbelnValue);

		orderItemsTable.appendRow();
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_KPOSN, itemNum);
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MATNR, geEdgeProductModel.getCode());
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MGAME, bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));

		// Setting Product Type IT / FL to the Request
		if (null != geEdgeProductModel.getProductType() && GEEdgeProductType.ITFILM.equals(geEdgeProductModel.getProductType()))
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_FL);
		}
		else
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_IT);
		}

		// Setting UOM to the request
		if (null != geEdgeProductModel.getUnit())
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_VRKME, geEdgeProductModel.getUnit().getSapCode());
		}

		requestedDateTable.appendRow();
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_REQ_QTY, bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_MATNR, geEdgeProductModel.getCode());
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_YLINE, itemNum);
		if (null != geEdgeProductModel.getUnit())
		{
			requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_DELKZ, geEdgeProductModel.getUnit().getCode());
		}


		final JCoTable plantsTable = orderItemsTable.getTable(BhgeCoreConstants.T_ET_WERKS);
		//preparePlantsForSalesOrg(plantsTable);

		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_WERKS, plantsTable);

		if (StringUtils.isNotBlank(cart.getEndUserNumber()))
		{
			partnerTable.appendRow();
			partnerTable.setValue(BhgeCoreConstants.PARVW, Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			partnerTable.setValue(BhgeCoreConstants.KUNNR, cart.getEndUserNumber());
		}
		LOG.debug("Real Time Price RFC - Request XML: " + function.toXML());
		return function;
	}

	protected String preparePriceRequest(final GEEdgeProductModel geEdgeProductModel)
	{

		String requestXml = null;
		BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest = new BHGEZPriceandAvailablityRequest();
		BHGEZPriceandAvailablityRequestItem isGlobal = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem itHeadDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem itItemDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem wmdvsxDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem werksDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem itPartnerDetail = new BHGEZPriceandAvailablityRequestItem();
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final CartModel cart = getSessionCart();
		final String itemNum = "100000";
		isGlobal = setGlobalFuctionValue(geEdgeProductModel, isGlobal);
		zPriceandAvailablityRequest.setIsGlobal(isGlobal);

		String soldTo = "";
		final BHGESoldToData soldToData = (BHGESoldToData) getSessionService().getAttribute("sessionSoldTo");
		if (null != soldToData)
		{
			soldTo = soldToData.getUid();
		}

		// Setting Language to the request
		if (null != baseStore && null != baseStore.getDefaultLanguage())
		{
			zPriceandAvailablityRequest.setLanguage(baseStore.getDefaultLanguage().getIsocode().toUpperCase());
		}
		else
		{
			zPriceandAvailablityRequest.setLanguage(BhgeCoreConstants.DEFAULT_LOCALE);
		}
		zPriceandAvailablityRequest.setFlagPa(BhgeCoreConstants.FLAG_P);

		//final String vbelnValue = BHGESAPJCoUtils.addLeadingZeros(cart.getCode(), 10);
		final String vbelnValue = "0069999999";
		LOG.debug("IT_HEAD-VBELN value is " + vbelnValue);
		itHeadDetail.setKunnr(soldTo);
		itHeadDetail.setVbeln(vbelnValue);
		zPriceandAvailablityRequest.getItHead().getItems().add(itHeadDetail);
        if(null != cart && null != cart.getCommerceType() && cart.getCommerceType().getCode().equalsIgnoreCase(BUY)
        && null == cart.getQuoteReference() && Boolean.FALSE.equals(cart.getIsQuote())) {
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
            if (null != geEdgeProductModel.getProductType()) {
                String cartType = getCartTypeForProductType(geEdgeProductModel.getProductType().getCode());
                BHGECurrencyModel bhgecurrency = bhgeProductService.getCustomerCurrency(b2bUnit, cartType);
                if (bhgecurrency != null) {
                    BHGEZPriceandAvailablityRequestItem currency = new BHGEZPriceandAvailablityRequestItem();
                    BHGEZPriceandAvailablityRequestItem pricingProcedurevalue = new BHGEZPriceandAvailablityRequestItem();
                    BHGEZPriceandAvailablityRequestItem callerData = new BHGEZPriceandAvailablityRequestItem();
                    if (callerData.getItems() != null) {
                        callerData.setItems(new ArrayList<>());
                    }
                    LOG.info("came into the block to fetch customer currency" + bhgecurrency.getCurrency());
                    String customerCurrency = bhgecurrency.getCurrency();
                    String pricingProcedure = bhgecurrency.getPricingProcedure();
                    if (null != bhgecurrency.getCurrency()) {
                        currency.setName("WAERK");
                        currency.setValue(customerCurrency);
                        LOG.info("WAERK :: currency is " + customerCurrency);
                        callerData.getItems().add(currency);
                    }
                    if (null != pricingProcedure) {
                        LOG.info("PRICINGPROCEDURE :: pricing procedure is " + pricingProcedure);
                        pricingProcedurevalue.setName("KALSM");
                        pricingProcedurevalue.setValue(pricingProcedure);
                        callerData.getItems().add(pricingProcedurevalue);
                    }
                    itHeadDetail.setCallerData(callerData);
                }
            }
        }

		itItemDetail.setKposn(itemNum);
		if(geEdgeProductModel.getProductType().equals(GEEdgeProductType.ITFILM)) {
			itItemDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			LOG.info("Inside BHGECartServiceImpl : setting KUNNR as " + soldTo);
			itItemDetail.setKunnr(soldTo);
		}
		itItemDetail.setMaterial(geEdgeProductModel.getCode());
		itItemDetail.setMgame(bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));

		// Setting Product Type IT / FL to the Request
		if (null != geEdgeProductModel.getProductType() && GEEdgeProductType.ITFILM.equals(geEdgeProductModel.getProductType()))
		{
			itItemDetail.setProdCatFlag(BhgeCoreConstants.PROD_CAT_FLAG_FL);
		}
		else
		{
			itItemDetail.setProdCatFlag(BhgeCoreConstants.PROD_CAT_FLAG_IT);
		}

		// Setting UOM to the request
		if (null != geEdgeProductModel.getUnit())
		{
			itItemDetail.setVrkme(geEdgeProductModel.getUnit().getSapCode());
		}

		wmdvsxDetail.setReqQty(bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));
		wmdvsxDetail.setMaterial(geEdgeProductModel.getCode());
		wmdvsxDetail.setYline(itemNum);
		/*
		 * if (null != geEdgeProductModel.getUnit()) { wmdvsxDetail.setDelkz(geEdgeProductModel.getUnit().getCode()); }
		 */
		zPriceandAvailablityRequest.getEtWmdvsx().getItems().add(wmdvsxDetail);

		//preparePlantsForSalesOrg(zPriceandAvailablityRequest);
		preparePlantsForSalesOrg(itItemDetail);

		//itItemDetail.getItem().getItems().add(werksDetail);
		zPriceandAvailablityRequest.getItItem().getItems().add(itItemDetail);

		if (StringUtils.isNotBlank(cart.getEndUserNumber()))
		{
			itPartnerDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			itPartnerDetail.setLand1("");
			itPartnerDetail.setRegio("");
			itPartnerDetail.setKunnr(cart.getEndUserNumber());
			zPriceandAvailablityRequest.getItPartner().getItems().add(itPartnerDetail);
		}

		requestXml = scpiConnector.toXML(zPriceandAvailablityRequest);
		LOG.debug("Inside preparePriceRequest - Price and Availability Request XML: " + requestXml);
		return requestXml;
	}

    public String getCartTypeForProductType(final String productType)
    {
        //This should come from mapping table
        if (productType != null)
        {
            if (productType.equals(GEEdgeProductType.ITFILM.getCode()))
            {
                return FILM;
            }
            else if (productType.equals(GEEdgeProductType.IT.getCode())
                    || productType.equals(GEEdgeProductType.MS.getCode())
                    || productType.equals(GEEdgeProductType.FPT.getCode())
                    || productType.equals(GEEdgeProductType.NC.getCode()))
            {
                return NONFILM;
            }
            else
            {
                return NONFILM;
            }
        }
        return null;
    }

	protected String preparePriceRequestForWS(final GEEdgeProductModel geEdgeProductModel, final String guestSalesArea)
	{

		String requestXml = null;
		BHGEZPriceandAvailablityRequest zPriceandAvailablityRequest = new BHGEZPriceandAvailablityRequest();
		BHGEZPriceandAvailablityRequestItem isGlobal = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem itHeadDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem itItemDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem wmdvsxDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem werksDetail = new BHGEZPriceandAvailablityRequestItem();
		BHGEZPriceandAvailablityRequestItem itPartnerDetail = new BHGEZPriceandAvailablityRequestItem();
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final CartModel cart = getSessionCart();
		final String itemNum = "100000";
		isGlobal = setGlobalFuctionValueForWS(geEdgeProductModel, isGlobal, guestSalesArea);
		zPriceandAvailablityRequest.setIsGlobal(isGlobal);

		String soldTo = "";
		BHGESoldToData soldToData = null;
		//final BHGESoldToData soldToData = (BHGESoldToData) getSessionService().getAttribute("sessionSoldTo");
		if(userService.isAnonymousUser(userService.getCurrentUser()))
		{
			soldToData = bhgeSoldToUtil.getDefaultB2BUnitUidOfGuestUser(guestSalesArea);
			if(null != soldToData)
			{
				String soldTosplit[] = soldToData.getUid().split("_");
				if(null != soldTosplit && soldTosplit.length >=2)
				{
					soldTo = soldTosplit[0];
				}
			}
		}
		if(userService.getCurrentUser() instanceof GEEdgeCustomerModel)
		{
			soldToData = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUserWs();
			if (null != soldToData)
			{
				soldTo = soldToData.getUid();
			}
		}

		// Setting Language to the request
		if (null != baseStore && null != baseStore.getDefaultLanguage())
		{
			zPriceandAvailablityRequest.setLanguage(baseStore.getDefaultLanguage().getIsocode().toUpperCase());
		}
		else
		{
			zPriceandAvailablityRequest.setLanguage(BhgeCoreConstants.DEFAULT_LOCALE);
		}
		zPriceandAvailablityRequest.setFlagPa(BhgeCoreConstants.FLAG_P);

		//final String vbelnValue = BHGESAPJCoUtils.addLeadingZeros(cart.getCode(), 10);
		final String vbelnValue = "0069999999";
		LOG.debug("IT_HEAD-VBELN value is " + vbelnValue);
		itHeadDetail.setKunnr(soldTo);
		itHeadDetail.setVbeln(vbelnValue);
		zPriceandAvailablityRequest.getItHead().getItems().add(itHeadDetail);
        if(null != cart && null != cart.getCommerceType() && cart.getCommerceType().getCode().equalsIgnoreCase(BUY)
                && null == cart.getQuoteReference() && Boolean.FALSE.equals(cart.getIsQuote())) {
            final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
            String b2bUnit = currentUser.getDefaultB2BUnit().getUid();
            if (null != geEdgeProductModel.getProductType()) {
                String cartType = getCartTypeForProductType(geEdgeProductModel.getProductType().getCode());
                BHGECurrencyModel bhgecurrency = bhgeProductService.getCustomerCurrency(b2bUnit, cartType);
                if (bhgecurrency != null) {
                    BHGEZPriceandAvailablityRequestItem currency = new BHGEZPriceandAvailablityRequestItem();
                    BHGEZPriceandAvailablityRequestItem pricingProcedurevalue = new BHGEZPriceandAvailablityRequestItem();
                    BHGEZPriceandAvailablityRequestItem callerData = new BHGEZPriceandAvailablityRequestItem();
                    if (callerData.getItems() != null) {
                        callerData.setItems(new ArrayList<>());
                    }
                    LOG.info("came into the block to fetch customer currency" + bhgecurrency.getCurrency());
                    String customerCurrency = bhgecurrency.getCurrency();
                    String pricingProcedure = bhgecurrency.getPricingProcedure();
                    if (null != bhgecurrency.getCurrency()) {
                        currency.setName("WAERK");
                        currency.setValue(customerCurrency);
                        LOG.info("WAERK :: currency is " + customerCurrency);
                        callerData.getItems().add(currency);
                    }
                    if (null != pricingProcedure) {
                        LOG.info("PRICINGPROCEDURE :: pricing procedure is " + pricingProcedure);
                        pricingProcedurevalue.setName("KALSM");
                        pricingProcedurevalue.setValue(pricingProcedure);
                        callerData.getItems().add(pricingProcedurevalue);
                    }
                    itHeadDetail.setCallerData(callerData);
                }
            }
            }

		itItemDetail.setKposn(itemNum);
		if (geEdgeProductModel.getProductType().equals(GEEdgeProductType.ITFILM)) {
			itItemDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			LOG.info("Inside BHGECartServiceImpl : setting KUNNR as " + soldTo);
			itItemDetail.setKunnr(soldTo);
		}
		itItemDetail.setMaterial(geEdgeProductModel.getCode());
		itItemDetail.setMgame(bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));

		// Setting Product Type IT / FL to the Request
		if (null != geEdgeProductModel.getProductType() && GEEdgeProductType.ITFILM.equals(geEdgeProductModel.getProductType()))
		{
			itItemDetail.setProdCatFlag(BhgeCoreConstants.PROD_CAT_FLAG_FL);
		}
		else
		{
			itItemDetail.setProdCatFlag(BhgeCoreConstants.PROD_CAT_FLAG_IT);
		}

		// Setting UOM to the request
		if (null != geEdgeProductModel.getUnit())
		{
			itItemDetail.setVrkme(geEdgeProductModel.getUnit().getSapCode());
		}

		wmdvsxDetail.setReqQty(bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));
		wmdvsxDetail.setMaterial(geEdgeProductModel.getCode());
		wmdvsxDetail.setYline(itemNum);
		/*
		 * if (null != geEdgeProductModel.getUnit()) { wmdvsxDetail.setDelkz(geEdgeProductModel.getUnit().getCode()); }
		 */
		zPriceandAvailablityRequest.getEtWmdvsx().getItems().add(wmdvsxDetail);

		//preparePlantsForSalesOrg(zPriceandAvailablityRequest);
		preparePlantsForSalesOrgForWS(itItemDetail, guestSalesArea,geEdgeProductModel.getCode());

		//itItemDetail.getItem().getItems().add(werksDetail);
		zPriceandAvailablityRequest.getItItem().getItems().add(itItemDetail);

		if (StringUtils.isNotBlank(cart.getEndUserNumber()))
		{
			itPartnerDetail.setParvw(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			itPartnerDetail.setLand1("");
			itPartnerDetail.setRegio("");
			itPartnerDetail.setKunnr(cart.getEndUserNumber());
			zPriceandAvailablityRequest.getItPartner().getItems().add(itPartnerDetail);
		}

		requestXml = scpiConnector.toXML(zPriceandAvailablityRequest);
		LOG.debug("Inside preparePriceRequestForWS - Price and Availability Request XML: " + requestXml);
		return requestXml;
	}

	/**
	 * Processing the RFC response for the price which we got from SAP
	 *
	 * @param geEdgeProductModel
	 * @param function
	 */
	protected ProductData processPriceResponse(final GEEdgeProductModel geEdgeProductModel, final JCoFunction function)
	{
		LOG.info("BHGECartServiceImpl: Price & Availability - Response XML: " + function.toXML());
		if (LOG.isDebugEnabled())
		{
			LOG.info("Processing the Price");
		}

		ProductData productData = null;
		final CartModel cart = getSessionCart();
		int lineItemCount = 100000;
		final JCoTable resultItemsTable = function.getExportParameterList().getTable(BhgeCoreConstants.T_ET_RESULT_EXT);
		final int numberOfResultItems = resultItemsTable.getNumRows();
		if (LOG.isDebugEnabled())
		{
			LOG.debug("No of result Items " + numberOfResultItems);
		}
		
		if (numberOfResultItems > 0)
		{
			productData = new ProductData();
			for (int i = 0; i < numberOfResultItems; i++)
			{
				final JCoTable itemTable = resultItemsTable.getTable(BhgeCoreConstants.T_ET_RESULT_EXT_ITEM);
				if (itemTable.getNumRows() > 0)
				{
					for (int j = 0; j < itemTable.getNumRows(); j++)
					{
						String price = "";
						String discPercentage = "";
						String listPrice = "";
						String zcmListPrice = "";
						String zr02ListPrice = "";
						final String itemNum = ((Integer) lineItemCount).toString();
						lineItemCount++;
						final String lineNumber = itemTable.getString(BhgeCoreConstants.IT_ITEM_KPOSN);
						String currency = "USD";
						if (commonI18NService.getCurrentCurrency() != null
								&& commonI18NService.getCurrentCurrency().getIsocode() != null)
						{
							currency = commonI18NService.getCurrentCurrency().getIsocode();
						}
						if (itemNum.equalsIgnoreCase(lineNumber))
						{
							final JCoTable itemCondTable = itemTable.getTable(BhgeCoreConstants.T_ET_RESULT_EXT_ITEM_COND);
							if (itemCondTable.getNumRows() > 0)
							{
								for (int k = 0; k < itemCondTable.getNumRows(); k++)
								{
									final String conditionType = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KSCHL);
									// Getting Base Price from the response (price condition - ZCM1)
									if (Config.getString("SAP_PRICING_CONDITION_BASE_PRICE_FL", "ZCM1").equals(conditionType))
									{
										zcmListPrice = getListPriceFromCondTable(itemCondTable, currency, 1L);
									}

									// Getting Base Price from the response (price condition - ZR02)
									if (Config.getString("SAP_PRICING_CONDITION_BASE_PRICE_IT", "ZR02").equals(conditionType))
									{
										zr02ListPrice = getListPriceFromCondTable(itemCondTable, currency, 1L);
									}
									// Getting List Price from the response (price condition - YUMU)
									if (StringUtils.isNotBlank(conditionType)
											&& Config.getString("SAP_PRICING_CONDITION_LIST_PRICE", "YUMU").equalsIgnoreCase(conditionType))
									{
										listPrice = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
										if (null != listPrice)
										{
											listPrice = listPrice.trim();
										}
									}

									if (StringUtils.isNotBlank(zcmListPrice) && NumberUtils.isNumber(zcmListPrice)
											&& Double.valueOf(zcmListPrice) > 0)
									{
										listPrice = zcmListPrice;
									}
									else
									{
										listPrice = zr02ListPrice;
									}

									// Getting Your Price from the response (price condition - ZUMU)
									if (StringUtils.isNotBlank(conditionType)
											&& Config.getString("SAP_PRICING_CONDITION_YOUR_PRICE", "ZUMU").equalsIgnoreCase(conditionType))
									{
										price = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
										if (null != price)
										{
											price = price.trim();
										}
									}

									// Getting Your Price discount percentage from the response (price condition - ZK09)
									if (StringUtils.isNotBlank(conditionType) && Config
											.getString("SAP_PRICING_CONDITION_DISC_PERCENTAGE", "ZK09").equalsIgnoreCase(conditionType))
									{
										discPercentage = itemCondTable.getString(BhgeCoreConstants.ET_RESULT_EXT_ITEM_COND_KBETR);
										if (null != discPercentage)
										{
											discPercentage = discPercentage.trim();
										}
									}

									itemCondTable.nextRow();
								}
							}

							// Setting List Price for the item
							if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith("0.00") && NumberUtils.isNumber(listPrice))
							{
								productData.setPrice(createPrice(cart, Double.parseDouble(listPrice)));
								geEdgeProductModel.setBasePrice(Double.parseDouble(listPrice));
								modelService.save(geEdgeProductModel);
							}

							// Setting Your Price for the item
							if (StringUtils.isNotBlank(price) && !price.startsWith("0.00"))
							{
								price = getPriceFormattedValue(price);
								productData.setDiscountPrice(price);
							}

							// Setting Your Price discount percentage for the cart item
							if (StringUtils.isNotBlank(discPercentage) && !discPercentage.startsWith("0.00")
									&& StringUtils.isNotBlank(listPrice) && !listPrice.startsWith("0.00")
									&& NumberUtils.isNumber(listPrice))
							{
								discPercentage = BHGESAPJCoUtils.getFormattedDiscountPercentage(discPercentage.trim());
								final Double yourPriceDiscAmount = getYourPriceDiscountValue(discPercentage, listPrice);

								productData.setDiscountPercentage(discPercentage);
								productData.setYourPriceDiscount(createPrice(cart, yourPriceDiscAmount));
							}

							LOG.info(" ########################## List Price of Product with Part Number " + geEdgeProductModel.getCode()
									+ " is " + (StringUtils.isNotBlank(listPrice) ? listPrice : "Not Available"));
						}
						itemTable.nextRow();
					}
				}
				resultItemsTable.nextRow();
			}
		}
		return productData;
	}


	protected ProductData processPriceResponse(final GEEdgeProductModel geEdgeProductModel,BHGEZPriceandAvailablityResponse zPriceandAvailablityResponse,
			final String scpiEndpointUrl, final String priceAndAvailabilityRequestXml)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.info("Processing the Price");
		}

		ProductData productData = null;
		final CartModel cart = getSessionCart();
		int lineItemCount = 100000;
		if (LOG.isDebugEnabled())
		{
			LOG.debug("No of result Items " + (null != zPriceandAvailablityResponse.getEtResultExt() ?
					(CollectionUtils.isNotEmpty(zPriceandAvailablityResponse.getEtResultExt().getItems()) ?
							zPriceandAvailablityResponse.getEtResultExt().getItems().size() : 0 ): 0));
		}

		String price = "";
		String discPercentage = "";
		String listPrice = "";
		String zcmListPrice = "";
		String zr02ListPrice = "";

		if(null != zPriceandAvailablityResponse.getEtResultExt() && CollectionUtils.isNotEmpty(zPriceandAvailablityResponse.getEtResultExt().getItems()))
		{
			LOG.info("BHGECartServiceImpl: Price & Availability - Response from SCPI Endpoint: " + scpiEndpointUrl);
			productData = new ProductData();
			for(BHGEZPriceandAvailablityRequestItem requestItem : zPriceandAvailablityResponse.getEtResultExt().getItems())
			{
				if(null != requestItem.getItem() && CollectionUtils.isNotEmpty(requestItem.getItem().getItems()))
				{
						final String itemNum = ((Integer) lineItemCount).toString();
						lineItemCount++;
						String currency = "USD";
						if (commonI18NService.getCurrentCurrency() != null
								&& commonI18NService.getCurrentCurrency().getIsocode() != null)
						{
							currency = commonI18NService.getCurrentCurrency().getIsocode();
						}
						for(BHGEZPriceandAvailablityRequestItem reqItem : requestItem.getItem().getItems())
						{
							if(null != reqItem && null != reqItem.getKposn() && reqItem.getKposn().equalsIgnoreCase(itemNum))
							{
								if(null != reqItem.getCond() && CollectionUtils.isNotEmpty(reqItem.getCond().getItems()))
								{
										for(BHGEZPriceandAvailablityRequestItem condItem : reqItem.getCond().getItems())
										{
											final String conditionType = condItem.getKschl();
											if(conditionType.equalsIgnoreCase("ZR02"))
											{

												zcmListPrice = getListPriceFromCondTable(condItem, currency, 1L);
											}
											if(conditionType.equalsIgnoreCase("ZCM1"))
											{
												zr02ListPrice = getListPriceFromCondTable(condItem, currency, 1L);
											}
											if(conditionType.equalsIgnoreCase("YUMU"))
											{
												//listPrice = condItem.getKbetr();
												listPrice = getListPriceFromCondTable(condItem, currency, 1L);
											}
											if(StringUtils.isNotBlank(zcmListPrice) && NumberUtils.isNumber(zcmListPrice)
													&& Double.valueOf(zcmListPrice) > 0)
											{
												listPrice = zcmListPrice;
											}
									      else
									      {
									      	listPrice = zr02ListPrice;
									      }

											if(conditionType.equalsIgnoreCase("ZUMU"))
											{
												price = condItem.getKbetr();
											}
											if(conditionType.equalsIgnoreCase("ZK09"))
											{
												discPercentage = condItem.getKbetr();
											}
										}
								}

							// Setting List Price for the item
								if (StringUtils.isNotBlank(listPrice) && !listPrice.startsWith("0.00") && NumberUtils.isNumber(listPrice))
								{
									productData.setPrice(createPrice(cart, Double.parseDouble(listPrice)));
									geEdgeProductModel.setBasePrice(Double.parseDouble(listPrice));
									modelService.save(geEdgeProductModel);
								}

								// Setting Your Price for the item
								if (StringUtils.isNotBlank(price) && !price.startsWith("0.00"))
								{
									price = getPriceFormattedValue(price);
									productData.setDiscountPrice(price);
								}

								// Setting Your Price discount percentage for the cart item
								if (StringUtils.isNotBlank(discPercentage) && !discPercentage.startsWith("0.00")
										&& StringUtils.isNotBlank(listPrice) && !listPrice.startsWith("0.00")
										&& NumberUtils.isNumber(listPrice))
								{
									discPercentage = BHGESAPJCoUtils.getFormattedDiscountPercentage(discPercentage.trim());
									final Double yourPriceDiscAmount = getYourPriceDiscountValue(discPercentage, listPrice);

									productData.setDiscountPercentage(discPercentage);
									productData.setYourPriceDiscount(createPrice(cart, yourPriceDiscAmount));
								}
								LOG.info(" ########################## List Price of Product with Part Number " + geEdgeProductModel.getCode()
								+ " is " + (StringUtils.isNotBlank(listPrice) ? listPrice : "Not Available"));
						}
					}
				}
			}
		}
		return productData;
	}

	@Override
	public JCoFunction setFunctionAndDefault(final GEEdgeProductModel product, final JCoConnection connection,
			final String functionModule) throws BackendException
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Trying to make to Function call: Setting the Default Input parameters to JCOStructure");
		}
		final JCoFunction function = connection.getFunction(functionModule);
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();
		final JCoStructure jcoStructure = function.getImportParameterList().getStructure(BhgeCoreConstants.IS_GLOBAL_JCOSTRUCTURE);

		String orderType = "ZOR";
		if (null != product.getProductType() && BhgeCoreConstants.FILM.equals(product.getProductType().getCode()))
		{
			orderType = BhgeCoreConstants.ZFLM_TYPE;
		}

		if (null != sapConfigurationModel)
		{
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_AUART, orderType);
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VKORG, sapConfigurationModel.getSapcommon_salesOrganization());
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VTWEG, sapConfigurationModel.getSapcommon_distributionChannel());
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_SPART, sapConfigurationModel.getSapcommon_division());
		}
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final B2BUnitModel defaultB2BUnit = sessionService.getAttribute("sessionSalesArea");
			final String b2bUnitUidSplit[] = defaultB2BUnit.getUid().split("_");
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_AUART, orderType);
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VKORG, b2bUnitUidSplit[1]);
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VTWEG, b2bUnitUidSplit[2]);
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_SPART, b2bUnitUidSplit[3]);
		}
		return function;
	}


	public BHGEZPriceandAvailablityRequestItem setGlobalFuctionValue(final GEEdgeProductModel product, final BHGEZPriceandAvailablityRequestItem isGlobal)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Trying to make to Function call: Setting the Default Input parameters to JCOStructure");
		}
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();

		String orderType = "ZOR";
		if (null != product.getProductType() && BhgeCoreConstants.FILM.equals(product.getProductType().getCode()))
		{
			orderType = BhgeCoreConstants.ZFLM_TYPE;
		}

		if (null != sapConfigurationModel)
		{
			isGlobal.setAuart(orderType);
			isGlobal.setVkorg(sapConfigurationModel.getSapcommon_salesOrganization());
			isGlobal.setVtweg(sapConfigurationModel.getSapcommon_distributionChannel());
			isGlobal.setSpart(sapConfigurationModel.getSapcommon_division());
		}
		if (userService.isAnonymousUser(userService.getCurrentUser()))
		{
			final B2BUnitModel defaultB2BUnit = sessionService.getAttribute("sessionSalesArea");
			final String b2bUnitUidSplit[] = defaultB2BUnit.getUid().split("_");
			isGlobal.setAuart(orderType);
			isGlobal.setVkorg(b2bUnitUidSplit[1]);
			isGlobal.setVtweg(b2bUnitUidSplit[2]);
			isGlobal.setSpart(b2bUnitUidSplit[3]);
		}
		return isGlobal;
	}

	public BHGEZPriceandAvailablityRequestItem setGlobalFuctionValueForWS(final GEEdgeProductModel product, final BHGEZPriceandAvailablityRequestItem isGlobal,
			final String guestSalesArea)
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Trying to make to Function call: Setting the Default Input parameters to JCOStructure");
		}
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();

		String orderType = "ZOR";
		if (null != product.getProductType() && BhgeCoreConstants.FILM.equals(product.getProductType().getCode()))
		{
			orderType = BhgeCoreConstants.ZFLM_TYPE;
		}

		if (null != sapConfigurationModel)
		{
			isGlobal.setAuart(orderType);
			isGlobal.setVkorg(sapConfigurationModel.getSapcommon_salesOrganization());
			isGlobal.setVtweg(sapConfigurationModel.getSapcommon_distributionChannel());
			isGlobal.setSpart(sapConfigurationModel.getSapcommon_division());
		}
		if (userService.isAnonymousUser(userService.getCurrentUser()) && null != guestSalesArea)
			{
				final String b2bUnitUidSplit[] = guestSalesArea.split("_");
				isGlobal.setAuart(orderType);
				if(b2bUnitUidSplit.length >= 2)
				{
					isGlobal.setVkorg(b2bUnitUidSplit[0]);
					isGlobal.setVtweg(b2bUnitUidSplit[1]);
					isGlobal.setSpart(b2bUnitUidSplit[2]);
				}
			}

		return isGlobal;
	}

	protected PriceData createPrice(final AbstractOrderModel source, final Double val)
	{
		if (source == null)
		{
			throw new IllegalArgumentException("source order must not be null");
		}

		final CurrencyModel currency = source.getCurrency();
		DecimalFormat dFormat = null;
		String currencyFormat = null;
		if (currency == null)
		{
			throw new IllegalArgumentException("source order currency must not be null");
		}

		// Get double value, handle null as zero
		final double priceValue = val != null ? val.doubleValue() : 0d;

		final String defaultCurrencyFormat = sessionService.getAttribute("defaultCurrencyFormat");
		if (null != defaultCurrencyFormat)
		{
			if (defaultCurrencyFormat.equalsIgnoreCase("de_DE"))
			{
				final NumberFormat nf = NumberFormat.getNumberInstance(Locale.GERMAN);
				dFormat = (DecimalFormat) nf;
			}
			else if (defaultCurrencyFormat.equalsIgnoreCase("fr_CA"))
			{
				final NumberFormat nf = NumberFormat.getNumberInstance(Locale.FRENCH);
				dFormat = (DecimalFormat) nf;
			}
			else if (defaultCurrencyFormat.equalsIgnoreCase("en_US"))
			{
				currencyFormat = Config.getString("defaultCurrencyFormat", "####,###,###.00");
				dFormat = new DecimalFormat(currencyFormat);
			}
			else
			{
				currencyFormat = Config.getString("defaultCurrencyFormat", "####,###,###.00");
				dFormat = new DecimalFormat(currencyFormat);
			}
		}
		else
		{
			currencyFormat = Config.getString("defaultCurrencyFormat", "####,###,###.00");
			dFormat = new DecimalFormat(currencyFormat);

		}
		final PriceData priceData = new PriceData();
		priceData.setValue(BigDecimal.valueOf(priceValue));
		priceData.setCurrencyIso(currency.getIsocode());
		priceData.setFormattedValue(dFormat.format(priceValue));
		priceData.setPriceType(PriceDataType.BUY);
		return priceData;
	}

	@Override
	public void removeSessionCart()
	{
		if (!userService.getCurrentUser().getUid().contains("anonymous"))
		{
			final B2BUnitModel salesArea = sessionService.getAttribute(BhgeCoreConstants.DEFAULT_SESSION_SALESAREA);
			if (hasSessionCart())
			{
				final CartModel sessionCart = getSessionCart();
				getModelService().remove(sessionCart);
				if (!userService.isAnonymousUser(userService.getCurrentUser()))
				{
					if (salesArea != null)
					{
						getSessionService().removeAttribute(salesArea.getUid() + SESSION_CART_PARAMETER_NAME);
					}
				}
			}
		}
		else
		{
			if (hasSessionCart())
			{
				final CartModel sessionCart = getSessionCart();
				getModelService().remove(sessionCart);
				getSessionService().removeAttribute(SESSION_CART_PARAMETER_NAME);
			}
		}
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.order.service.BHGECartService#getProductAvailabiltyDetails(de.hybris.platform.core.model.order.
	 * CartModel, java.lang.Boolean)
	 */
	@Override
	public CartModel getProductAvailabiltyDetails(final CartModel cart, final Boolean isShipComplete)
	{
		try
		{
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			if (connection != null && !connection.isBackendOffline())
			{
				final JCoFunction function = prepareRequest(cart, connection, BhgeCoreConstants.FLAG_A);
				connection.execute(function);
				processErrors(cart, function);
				processAvailability(cart, function);

				// If shipmode is complete, then we'll have to set the largest shipping date to the cart entries
				if (null != isShipComplete && isShipComplete.booleanValue())
				{
					setLargestShipDateInCartEntries(cart);
				}

			}
			else
			{
				if (LOG.isDebugEnabled())
				{
					LOG.debug("Connection failed: SAP has an error");
				}
				final List<AbstractOrderEntryModel> updateOrderEntries = new ArrayList<>();
				for (final AbstractOrderEntryModel orderEntry : cart.getEntries())
				{
					final List<String> estShipData = new ArrayList<>();
					estShipData.add(SHIP_DATE_MESSAGE);
					orderEntry.setEstShippingDates(estShipData);
					modelService.save(orderEntry);
					updateOrderEntries.add(orderEntry);
				}
				cart.setEntries(updateOrderEntries);
				modelService.save(cart);
			}
		}
		catch (final BackendException backEndException)
		{
			LOG.error("BackendException occured" + backEndException.getMessage());
			handleAvailabilityDetailsRFCException(cart, backEndException);
		}
		catch (final BackendRuntimeException beckEndRunTimeException)
		{
			LOG.error("BackendRuntimeException occured" + beckEndRunTimeException.getMessage());
			handleAvailabilityDetailsRFCException(cart, beckEndRunTimeException);
		}
		catch (final Exception exception)
		{
			LOG.error("Exception occured" + exception.getMessage());
			handleAvailabilityDetailsRFCException(cart, exception);
		}
		// Closing the SAP code here
		return cart;
	}

	protected void handleAvailabilityDetailsRFCException(final AbstractOrderModel cart, final Exception exception)
	{
		final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
		final List<AbstractOrderEntryModel> updateOrderEntries = new ArrayList<>();
		for (final AbstractOrderEntryModel orderEntry : orderEntries)
		{
			final List<String> estShipData = new ArrayList<>();
			estShipData.add(Config.getString("EST_SHIP_DATE_NOTAVBL", "NO ESTIMATE AVAILABLE"));
			orderEntry.setEstShippingDates(estShipData);
			modelService.save(orderEntry);
			updateOrderEntries.add(orderEntry);
		}
		cart.setEntries(updateOrderEntries);
		modelService.save(cart);

		final BHGESoldToData soldTo = sessionService.getAttribute("sessionSoldTo");
		final GEEdgeCustomerModel geEdgeCustomerModel = (GEEdgeCustomerModel) userService.getCurrentUser();
		final String soldToID = ((soldTo == null) ? "no sold to found" : soldTo.getUid());
		final String userEmail = geEdgeCustomerModel == null ? "no_user_found" : geEdgeCustomerModel.getEmail();

		final BHGERfcCallErrorModel model = (BHGERfcCallErrorModel) modelService.create(BHGERfcCallErrorModel.class);
		final DateFormat df = new SimpleDateFormat("MM/dd/yyyy hh:mm a");
		final Date today = Calendar.getInstance().getTime();
		final String reportDate = df.format(today);
		model.setErrorCode("BackendException in ATP Service");
		final String exceptionMsg = exception.getMessage();
		model.setErrorDescription(exceptionMsg);
		model.setCurrentUserEmail(userEmail);
		model.setCurrentSoldToId(soldToID);
		model.setErrorTime(reportDate);
		model.setErrorType("ATP Error");
		// needs to be added or modified
		model.setRequestParameterToSAP("CartModel as" + cart.toString());
		model.setResponseParameterFromSAP("BackendException Object" + exception.toString());
		model.setCriticality(BhgeCoreConstants.ERROR_CRITICALITY_LOW);
		model.setStatus(Boolean.FALSE);
		modelService.save(model);
	}

	@Override
	public boolean hasSessionCart()
	{
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{

			// Logged in user - getting cart based on customer and default sold to
			final UserModel user = userService.getCurrentUser();
			B2BUnitModel b2bUnit = null;
			if (user instanceof GEEdgeCustomerModel currentUser)
			{
				b2bUnit = currentUser.getDefaultB2BUnit();
			}
			CartModel cart = null;
			try
			{
				if (b2bUnit != null)
				{
					cart = getSessionService().getOrLoadAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME,
							new SessionAttributeLoader<CartModel>()
							{
								@Override
								public CartModel load()
								{
                                    return getExistingCartForSoldTo();
								}
							});
				}
			}
			catch (final JaloObjectNoLongerValidException ex)
			{
				if (LOG.isInfoEnabled())
				{
					LOG.info(
							"Session Cart no longer valid. Removing from session. hasSessionCart will return false. " + ex.getMessage());
				}
				getSessionService().removeAttribute(b2bUnit != null ? b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME : "");
				return false;
			}
			return cart != null;
		}
		else
		{
			return super.hasSessionCart();
		}
	}

	/**
	 * OOTB is creating new empty cart whenever hasSessionCart method is called and there in no session cart available.
	 * this method will check for session cart if cart available it will return true.
	 *
	 * @return boolean
	 */
	public boolean hasSessionCartWitoutCreateNewCart()
	{
		if (!userService.isAnonymousUser(userService.getCurrentUser()))
		{

			// Logged in user - getting cart based on customer and default sold to
			final UserModel user = userService.getCurrentUser();
			B2BUnitModel b2bUnit = null;
			if (user instanceof GEEdgeCustomerModel)
			{
				b2bUnit = ((GEEdgeCustomerModel) user).getDefaultB2BUnit();
			}
			final CartModel cart = null;
			try
			{
				if (b2bUnit != null)
				{
					return getSessionService().getAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME) != null;
				}
			}
			catch (final JaloObjectNoLongerValidException ex)
			{
				if (LOG.isInfoEnabled())
				{
					LOG.info(
							"Session Cart no longer valid. Removing from session. hasSessionCart will return false. " + ex.getMessage());
				}
				getSessionService().removeAttribute(b2bUnit != null ? b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME : "");
				return false;
			}
			return false;
		}
		else
		{
			return super.hasSessionCart();
		}
	}

	/**
	 * @param product
	 * @param function
	 * @return
	 */
	private List<BHGEConfigPartNumbersData> processPriceResponseForBOM(final GEEdgeProductModel product,
			final JCoFunction function)
	{
		LOG.info("Order BOM - Response XML: " + function.toXML());

		final List<BHGEConfigPartNumbersData> dataList = new ArrayList<>();

		//set data values
		final JCoTable materialDetailsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_BOM);
		final int numOfMessageRows = materialDetailsTable.getNumRows();
		if (numOfMessageRows > 0)
		{
			for (int i = 0; i < numOfMessageRows; i++)
			{
				final BHGEConfigPartNumbersData data = new BHGEConfigPartNumbersData();
				final String comp_material = materialDetailsTable.getString(BhgeCoreConstants.COMP_MARTERIAL);
				final String object_desc = materialDetailsTable.getString(BhgeCoreConstants.OBJECT_DESC);
				final String comp_qty = materialDetailsTable.getString(BhgeCoreConstants.COMP_QTY);
				final String comp_uom = materialDetailsTable.getString(BhgeCoreConstants.COMP_UOM);
				if (StringUtils.isNotBlank(comp_material))
				{
					data.setNumber(comp_material);

				}
				if (StringUtils.isNotBlank(object_desc))
				{
					data.setName(object_desc);
				}
				if (StringUtils.isNotBlank(comp_qty))
				{
					data.setQty(comp_qty);
				}

				if (StringUtils.isNotBlank(comp_uom))
				{
					data.setUnit(comp_uom);
				}
				dataList.add(data);
				materialDetailsTable.nextRow();
			}
		}
		return dataList;
	}


	private JCoFunction preparePriceRequestForBOM(final GEEdgeProductModel product, final String configId, final String plant,
			final JCoConnection connection, final String configXML) throws BackendException
	{
		final String functionName = Config.getString("SAP_BOM_FUNCTION", "ZHYB_BOM_RFC");
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();
		final JCoFunction function = connection.getFunction(functionName);
		final JCoStructure orderHeadTable = function.getImportParameterList().getStructure(BhgeCoreConstants.IM_ORDER_HEADER_IN);
		final JCoTable orderItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ITEMS);
		final JCoTable vcTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_VC_TEXT);


		//Setting values for Header
		orderHeadTable.setValue(BhgeCoreConstants.SALES_ORG, sapConfigurationModel.getSapcommon_salesOrganization());
		orderHeadTable.setValue(BhgeCoreConstants.DIVISION, sapConfigurationModel.getSapcommon_division());
		orderHeadTable.setValue(BhgeCoreConstants.DISTR_CHAN, sapConfigurationModel.getSapcommon_distributionChannel());
		//orderHeadTable.setValue(BhgeCoreConstants.T_MULTI_FLAG, "0");

		//Setting values for Items
		orderItemsTable.appendRow();
		orderItemsTable.setValue(BhgeCoreConstants.ORDER_SCHEDULE_TABLE_ITEM_NUMBER, "001000");
		orderItemsTable.setValue(BhgeCoreConstants.MATERIAL, product.getCode());
		//orderItemsTable.setValue(BhgeCoreConstants.PLANT, getPlantForSalesOrg());
		orderItemsTable.setValue(BhgeCoreConstants.PLANT, plant);
		orderItemsTable.setValue(BhgeCoreConstants.T_ITEMS_TARGET_QTY, "1");

		//Setting values for T_VC
		setVariantConfigDetailsForOrderBOM(vcTable, product.getCode(), configXML);

		LOG.info("Order BOM - Request XML: " + function.toXML());
		return function;
	}

	/**
	 * Method to set Configuration details
	 *
	 * @param variantConfigTable
	 * @param posex
	 * @param orderEntry
	 */

	private JCoTable setVariantConfigDetailsForOrderBOM(final JCoTable variantConfigTable, final String productCode,
			final String configString)
	{

		Document doc;
		final DocumentBuilderFactory dbf = DocumentBuilderFactory.newInstance();
		try
		{
			// BEGIN FIXES
			dbf.setFeature("http://apache.org/xml/features/disallow-doctype-decl", true);
			dbf.setFeature("http://xml.org/sax/features/external-general-entities", false);
			dbf.setFeature("http://xml.org/sax/features/external-parameter-entities", false);
			if (StringUtils.isNotBlank(configString))
			{
				doc = dbf.newDocumentBuilder().parse(new InputSource(
						new ByteArrayInputStream(configString.getBytes(Normalizer.normalize("utf-8", Normalizer.Form.NFD)))));
				doc.getDocumentElement().normalize();
				final NodeList nodeList = doc.getDocumentElement().getChildNodes();
				if (nodeList != null && nodeList.getLength() > 0)
				{
					for (int i = 0; i < nodeList.getLength(); i++)
					{
						if ("CONFIGURATION".equalsIgnoreCase(nodeList.item(i).getNodeName()))
						{
							final NodeList nodeList1 = nodeList.item(i).getChildNodes();
							if (nodeList1 != null && nodeList1.getLength() > 0)
							{
								for (int j = 0; j < nodeList1.getLength(); j++)
								{
									final NodeList nodeList2 = nodeList1.item(j).getChildNodes();
									if (nodeList2 != null && nodeList2.getLength() > 0)
									{
										for (int k = 0; k < nodeList2.getLength(); k++)
										{
											final NodeList nodeList3 = nodeList2.item(k).getChildNodes();
											if (nodeList3 != null && nodeList3.getLength() > 0)
											{
												for (int l = 0; l < nodeList3.getLength(); l++)
												{
													if ("CSTIC".equals(nodeList3.item(l).getNodeName()))
													{
														LOG.debug("CHARC: " + nodeList3.item(l).getAttributes().getNamedItem("CHARC"));
														LOG.debug("VALUE: " + nodeList3.item(l).getAttributes().getNamedItem("VALUE").toString()
																.replaceAll("\"", ""));
														final String charValue = nodeList3.item(l).getAttributes().getNamedItem("VALUE")
																.getTextContent();
														variantConfigTable.appendRow();
														variantConfigTable.setValue(BhgeCoreConstants.ORDER_SCHEDULE_TABLE_ITEM_NUMBER,
																"001000");
														variantConfigTable.setValue(BhgeCoreConstants.MATERIAL, productCode);
														variantConfigTable.setValue(BhgeCoreConstants.CHARC_TEXT,
																nodeList3.item(l).getAttributes().getNamedItem("CHARC").getTextContent());
														variantConfigTable.setValue(BhgeCoreConstants.VALUE_TEXT, charValue);
													}
												}
											}
										}
									}
								}
							}
							break;
						}
					}
				}
			}
		}
		catch (SAXException | ParserConfigurationException e)
		{
			LOG.error(GENERIC_EXCEPTION + e);
		}
		catch (final IOException e)
		{
			LOG.error(GENERIC_EXCEPTION + e);
		}
		catch (final Exception e)
		{
			LOG.error(GENERIC_EXCEPTION + e);
		}
		return variantConfigTable;
	}



	private JCoFunction preparePriceRequestForMaterialBOM(final GEEdgeProductModel product, final String multilevelFlag,
			final String plant, final JCoConnection connection) throws BackendException
	{
		final String functionName = Config.getString("SAP_BOM_FUNCTION", "ZHY_BOM_RFC");
		//final SAPConfigurationModel sapConfigurationModel1 = getSapConfigurationForCurrentStore();
		final JCoFunction function = connection.getFunction(functionName);
		final JCoStructure orderHeadTable = function.getImportParameterList().getStructure(BhgeCoreConstants.IM_MATERIAL_IN);
		//final JCoTable orderItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ITEMS);
		//final JCoTable vcTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_VC_TEXT);


		//Setting values for Header
		/*
		 * orderHeadTable.setValue(BhgeCoreConstants.SALES_ORG, sapConfigurationModel.getSapcommon_salesOrganization());
		 * orderHeadTable.setValue(BhgeCoreConstants.DIVISION, sapConfigurationModel.getSapcommon_division());
		 * orderHeadTable.setValue(BhgeCoreConstants.DISTR_CHAN,
		 * sapConfigurationModel.getSapcommon_distributionChannel());
		 * orderHeadTable.setValue(BhgeCoreConstants.T_MULTI_FLAG, "0");
		 */
		orderHeadTable.setValue(BhgeCoreConstants.IT_ITEM_MATNR, product.getCode());
		//orderHeadTable.setValue(BhgeCoreConstants.PLANT, getPlantForSalesOrg());
		orderHeadTable.setValue(BhgeCoreConstants.T_ET_WERKS, plant);
		if (multilevelFlag.equalsIgnoreCase("true"))
		{
			orderHeadTable.setValue(BhgeCoreConstants.T_MULTI_FLAG, "X");
		}
		else
		{
			orderHeadTable.setValue(BhgeCoreConstants.T_MULTI_FLAG, "");
		}

		/*
		 * //Setting values for Items orderItemsTable.appendRow();
		 * orderItemsTable.setValue(BhgeCoreConstants.ORDER_SCHEDULE_TABLE_ITEM_NUMBER, "0");
		 * orderItemsTable.setValue(BhgeCoreConstants.MATERIAL, product.getCode());
		 * orderItemsTable.setValue(BhgeCoreConstants.PLANT, getPlantForSalesOrg());
		 * orderItemsTable.setValue(BhgeCoreConstants.T_ITEMS_TARGET_QTY, "1");
		 *
		 * //Setting values for T_VC vcTable.appendRow();
		 * vcTable.setValue(BhgeCoreConstants.ORDER_SCHEDULE_TABLE_ITEM_NUMBER, "0");
		 * vcTable.setValue(BhgeCoreConstants.MATERIAL, product.getCode()); setVariantConfigDetailsForOrderBOM(vcTable,
		 * "0", configXML);
		 */

		LOG.info("Order BOM - Request XML: " + function.toXML());
		return function;
	}

	/*
	 * method to get material Bom Details
	 */

	private List<BHGEConfigPartNumbersData> processPriceResponseForMaterialBOM(final GEEdgeProductModel product,
			final JCoFunction function)
	{
		LOG.info("Order BOM - Response XML: " + function.toXML());

		final List<BHGEConfigPartNumbersData> dataList = new ArrayList<>();

		//set data values
		final JCoTable materialDetailsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_BOM);
		final int numOfMessageRows = materialDetailsTable.getNumRows();
		if (numOfMessageRows > 0)
		{
			for (int i = 0; i < numOfMessageRows; i++)
			{
				final BHGEConfigPartNumbersData data = new BHGEConfigPartNumbersData();
				final String comp_Number = materialDetailsTable.getString(BhgeCoreConstants.COMP_MARTERIAL);
				final String object_desc = materialDetailsTable.getString(BhgeCoreConstants.OBJECT_DESC);
				final String comp_qty = materialDetailsTable.getString(BhgeCoreConstants.COMP_QTY);
				final String comp_uom = materialDetailsTable.getString(BhgeCoreConstants.COMP_UOM);
				final String item_Number = materialDetailsTable.getString(BhgeCoreConstants.ITEM_NUMBER);
				final String explosion_Level = materialDetailsTable.getString(BhgeCoreConstants.EXPLOSION_LEVEL);
				final String list_Price = materialDetailsTable.getString(BhgeCoreConstants.LIST_PRICE);
				final String lead_Time = materialDetailsTable.getString(BhgeCoreConstants.LEAD_TIME);
				final String country_origin = materialDetailsTable.getString(BhgeCoreConstants.COUNTRY_OF_ORIGIN);
				final String country_name = materialDetailsTable.getString(BhgeCoreConstants.COUNTRY_NAME);
				if (StringUtils.isNotBlank(comp_Number))
				{
					data.setNumber(comp_Number);

				}
				if (StringUtils.isNotBlank(object_desc))
				{
					data.setName(object_desc);
				}
				if (StringUtils.isNotBlank(comp_qty))
				{
					data.setQty(comp_qty);
				}

				if (StringUtils.isNotBlank(comp_uom))
				{
					data.setUnit(comp_uom);
				}
				if (StringUtils.isNotBlank(explosion_Level))
				{
					data.setExplosionLevel(explosion_Level);
				}
				if (StringUtils.isNotBlank(item_Number))
				{
					data.setItemNumber(item_Number);
				}
				if (StringUtils.isNotBlank(list_Price))
				{
					data.setListPrice(list_Price);
				}
				if (StringUtils.isNotBlank(lead_Time))
				{
					data.setLeadTime(lead_Time);
				}
				if (StringUtils.isNotBlank(country_origin))
				{
					data.setCountryOrigin(country_origin);
				}
				if (StringUtils.isNotBlank(country_name))
				{
					data.setCountryName(country_name);
				}
				dataList.add(data);

				materialDetailsTable.nextRow();
			}
		}
		return dataList;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.order.service.BHGECartService#addProductToCart(de.hybris.platform.commerceservices.service.data.
	 * CommerceCartParameter)
	 */
	@Override
	public CommerceCartModification addProductToCart(final CommerceCartParameter parameter)
			throws CommerceCartModificationException
	{
		CommerceCartModification modification = new CommerceCartModification();
		try
		{
			//LOG.debug("Adding Part number " + parameter.getProduct().getCode() + "to cart");
			modification = commerceCartService.addToCart(parameter);
			//LOG.debug(parameter.getProduct().getCode() + " is added to the cart successfully");
			if (!parameter.isBulkUpload())
			{
				final CartModel cartModel = getSessionCart();
				if ((CollectionUtils.isNotEmpty(cartModel.getEntries())) && (cartModel.getEntries().size() == 1))
				{
					final UserModel user = userService.getCurrentUser();
					if ( user instanceof GEEdgeCustomerModel)
					{
						final GEEdgeCustomerModel geEdgeCustomerModel = ((GEEdgeCustomerModel) user);
						if (null == geEdgeCustomerModel.getIsShipCompleteOrder())
						{
							cartModel.setIsShipCompleteOrder(Boolean.TRUE);
						}
						else
						{
							cartModel.setIsShipCompleteOrder(geEdgeCustomerModel.getIsShipCompleteOrder());
						}
						cartModel.setShippingChargeMethod(geEdgeCustomerModel.getDeliveryOptions());
						if (cartModel.getShippingChargeMethod() != null)
						{
							if (ShippingChargeMethod.COLLECT.toString().equals(cartModel.getShippingChargeMethod().getCode()))
							{
								cartModel.setDeliveryAccountNum(geEdgeCustomerModel.getDeliveryAccount());
							}
							else
							{
								cartModel.setDeliveryAccountNum(null);
							}
						}
						cartModel.setShipToContactName(geEdgeCustomerModel.getShippingContactName());
						cartModel.setShipToContactPhone(geEdgeCustomerModel.getShippingContactNumber());
						getModelService().save(cartModel);
					}
				}
			}
		}
		catch (final ModelSavingException e)
		{
			// YTODO Auto-generated catch block
			e.printStackTrace();
		}

		return modification;
	}

	public CartEntryModel addProductToCartEntry(final CommerceCartParameter parameter)
	{
		CartEntryModel entryModel = new CartEntryModel();
		try
		{
			//LOG.debug("Adding Part number " + parameter.getProduct().getCode() + "to cart");
			//modification = commerceCartService.addToCart(parameter);
			entryModel = addNewEntry(parameter.getCart(), parameter.getProduct(), parameter.getQuantity(), parameter.getUnit(),
					APPEND_AS_LAST, false);
			getModelService().save(entryModel);
			//LOG.debug(parameter.getProduct().getCode() + " is added to the cart successfully");
			if (!parameter.isBulkUpload())
			{
				final CartModel cartModel = getSessionCart();
				if ((CollectionUtils.isNotEmpty(cartModel.getEntries())) && (cartModel.getEntries().size() == 1))
				{
					final UserModel user = userService.getCurrentUser();
					if ( user instanceof GEEdgeCustomerModel)
					{
						final GEEdgeCustomerModel geEdgeCustomerModel = ((GEEdgeCustomerModel) user);
						if (null == geEdgeCustomerModel.getIsShipCompleteOrder())
						{
							cartModel.setIsShipCompleteOrder(Boolean.TRUE);
						}
						else
						{
							cartModel.setIsShipCompleteOrder(geEdgeCustomerModel.getIsShipCompleteOrder());
						}
						cartModel.setShippingChargeMethod(geEdgeCustomerModel.getDeliveryOptions());
						if (cartModel.getShippingChargeMethod() != null)
						{
							if (ShippingChargeMethod.COLLECT.toString().equals(cartModel.getShippingChargeMethod().getCode()))
							{
								cartModel.setDeliveryAccountNum(geEdgeCustomerModel.getDeliveryAccount());
							}
							else
							{
								cartModel.setDeliveryAccountNum(null);
							}
						}
						cartModel.setShipToContactName(geEdgeCustomerModel.getShippingContactName());
						cartModel.setShipToContactPhone(geEdgeCustomerModel.getShippingContactNumber());
						getModelService().save(cartModel);
					}
				}
			}
		}
		catch (final ModelSavingException e)
		{
			// YTODO Auto-generated catch block
			e.printStackTrace();
		}

		return entryModel;
	}



	@Override
	public Map<String, String> getPlantsForMaterial(final GEEdgeProductModel productModel)
	{
		Map<String, String> plantList = null;
		try
		{
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			if (connection != null && !connection.isBackendOffline())
			{
				final JCoFunction function = prepareAvailabilityRequestForProduct(productModel, connection);
				connection.execute(function);
				LOG.debug("BHGECartServiceImpl: Price & Availability - Response XML: " + function.toXML());
				plantList = processAvailabilityResponseForProduct(productModel, function);
			}
		}
		catch (final Exception backEndException)
		{
			LOG.error(String.valueOf(backEndException));

		}

		return plantList;
	}

	private JCoFunction prepareAvailabilityRequestForProduct(final GEEdgeProductModel productModel, final JCoConnection connection)
			throws BackendException
	{
		final String functionName = Config.getString("SAP_FUNCTION", "ZHYB_PRICE_LIST_MAT_AVLBT");
		final JCoFunction function = setFunctionAndDefaultForProduct(productModel, connection, functionName);
		final JCoTable orderHeadTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_HEAD);
		final JCoTable orderItemsTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_ITEM);
		final JCoTable requestedDateTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_WMDVSX);
		final JCoTable partnerTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_PARTNER);
		final JCoTable variantConfigTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ORDER_CFGS_VALUE);
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		final CartModel cart = getSessionCart();
		String soldTo = "";
		final BHGESoldToData soldToData = (BHGESoldToData) getSessionService().getAttribute("sessionSoldTo");
		if (null != soldToData)
		{
			soldTo = soldToData.getUid();
		}
		if (null != baseStore && null != baseStore.getDefaultLanguage())
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU,
					baseStore.getDefaultLanguage().getIsocode().toUpperCase());
		}
		else
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU, BhgeCoreConstants.DEFAULT_LOCALE);
		}
		//function.getImportParameterList().setValue(BhgeCoreConstants.I_FLAG_PA, BhgeCoreConstants.FLAG_P);
		function.getImportParameterList().setValue(BhgeCoreConstants.I_FLAG_PA, BhgeCoreConstants.FLAG_A);
		orderHeadTable.appendRow();
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_KUNNR, soldTo);
		final String vbelnValue = BHGESAPJCoUtils.addLeadingZeros(cart.getCode(), 10);
		LOG.debug("IT_HEAD-VBELN value is " + vbelnValue);
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_VBELN, vbelnValue);
		orderItemsTable.appendRow();
		final String itemNum = "100000";
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_KPOSN, itemNum);
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MATNR, productModel.getCode());
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MGAME, bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));
		final JCoTable configValueTable = orderItemsTable.getTable(BhgeCoreConstants.T_IT_ITEM_VARCOND);
		final JCoTable plantsTable = orderItemsTable.getTable(BhgeCoreConstants.T_ET_WERKS);
		if (null != productModel.getProductType() && GEEdgeProductType.ITFILM.equals(productModel.getProductType()))
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_FL);
		}
		else
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_IT);
		}
		//Setting UOM for the product
		if (null != productModel.getUnit())
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_VRKME, productModel.getUnit().getSapCode());
		}
		/*
		 * if (StringUtils.isNotBlank(productModel.getExternalConfiguration())) {
		 * orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_AVBT_CHECK, BhgeCoreConstants.ATP_CHECK_DATA); //
		 * setConfigurationChar(configValueTable, itemNum, orderEntry);
		 * orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_VARCOND, configValueTable);
		 * setVariantConfigDetails(variantConfigTable, itemNum,productModel); // To Populate VC details of the material }
		 */
		//else
		//{
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_AVBT_CHECK, productModel.getAtp());
		//}

		requestedDateTable.appendRow();
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_REQ_QTY, bhgePriceAvailabilityUtils.getFormattedQuantity(Long.valueOf(1)));
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_MATNR, productModel.getCode());
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_YLINE, itemNum);
		if (null != productModel.getUnit())
		{
			requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_DELKZ, productModel.getUnit().getCode());
		}

		preparePlantsForSalesOrg(plantsTable);
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_WERKS, plantsTable);
		if (StringUtils.isNotBlank(cart.getEndUserNumber()))
		{
			partnerTable.appendRow();
			partnerTable.setValue(BhgeCoreConstants.PARVW, Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			partnerTable.setValue(BhgeCoreConstants.KUNNR, cart.getEndUserNumber());
		}
		// Populating Shipto Address details to get the Availability details

		AddressModel deliveryAddress = cart.getDeliveryAddress();
		final AddressModel defaultShipto = getDefaultShiptoForUserForWs();
		if (deliveryAddress == null)
		{
			cart.setDeliveryAddress(defaultShipto);
			deliveryAddress = defaultShipto;
		}
		if (null != deliveryAddress)
		{
			String sapCustomerId = "";
			partnerTable.appendRow();
			partnerTable.setValue(BhgeCoreConstants.PARVW, Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));
			// Existing Shipto Address. Send the Shipto Customer id in the KUNNR field
			if (StringUtils.isNotBlank(deliveryAddress.getSapCustomerID()))
			{
				if (deliveryAddress.getSapCustomerID().contains("_"))
				{
					sapCustomerId = deliveryAddress.getSapCustomerID().substring(0, deliveryAddress.getSapCustomerID().indexOf("_"));
				}
				else
				{
					sapCustomerId = deliveryAddress.getSapCustomerID();
				}
			}
			else
			{
				// Drop Ship (New Address). Send the DEFAULT SHIPTO, IF NOT THERE THEN Send SOLDTO in KUNNR field
				if (null != defaultShipto && StringUtils.isNotBlank(defaultShipto.getSapCustomerID()))
				{
					if (defaultShipto.getSapCustomerID().contains("_"))
					{
						sapCustomerId = defaultShipto.getSapCustomerID().substring(0, defaultShipto.getSapCustomerID().indexOf("_"));
					}
					else
					{
						sapCustomerId = defaultShipto.getSapCustomerID();
					}
				}
			}
			partnerTable.setValue(BhgeCoreConstants.KUNNR, sapCustomerId);
			partnerTable.setValue(BhgeCoreConstants.LAND1,
					(null != deliveryAddress.getCountry()) ? deliveryAddress.getCountry().getIsocode() : "");
			partnerTable.setValue(BhgeCoreConstants.REGIO,
					(null != deliveryAddress.getRegion()) ? deliveryAddress.getRegion().getIsocodeShort() : "");
		}
		LOG.debug("Price & Availability - Request XML: " + function.toXML());
		return function;
	}

	private JCoFunction setFunctionAndDefaultForProduct(final GEEdgeProductModel productModel, final JCoConnection connection,
			final String functionName) throws BackendException
	{
		if (LOG.isDebugEnabled())
		{
			LOG.debug("Trying to make to Function call: Setting the Default Input parameters to JCOStructure");
		}
		final JCoFunction function = connection.getFunction(functionName);
		final SAPConfigurationModel sapConfigurationModel = getSapConfigurationForCurrentStore();
		final JCoStructure jcoStructure = function.getImportParameterList().getStructure(BhgeCoreConstants.IS_GLOBAL_JCOSTRUCTURE);
		String orderType = "ZOR";
		if (null != productModel.getProductType() && BhgeCoreConstants.FILM.equals(productModel.getProductType().getCode()))
		{
			orderType = BhgeCoreConstants.ZFLM_TYPE;
		}

		if (null != sapConfigurationModel)
		{
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_AUART, orderType);
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VKORG, sapConfigurationModel.getSapcommon_salesOrganization());
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_VTWEG, sapConfigurationModel.getSapcommon_distributionChannel());
			jcoStructure.setValue(BhgeCoreConstants.IS_GLOBAL_SPART, sapConfigurationModel.getSapcommon_division());
		}
		return function;
	}


	private Map<String, String> processAvailabilityResponseForProduct(final GEEdgeProductModel productModel,
			final JCoFunction function)
	{
		LOG.debug(" BHGECartServiceImpl:Price & Availability - Response XML: " + function.toXML());
		final Map<String, String> plantList = new HashMap<>();
		Map<String, GEEdgeAvailabilityDetailModel> availabilityMap = null;
		Map<String, GEEdgeStockDetailModel> stockDetailsMap = null;

		// Preparing the Stock details map
		final JCoTable stockDetailsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_MAT_WERK_QTY);
		final int numberOfStockItems = stockDetailsTable.getNumRows();
		stockDetailsMap = prepareStockDetailsMap(stockDetailsTable);

		//preparing availability details map
		final JCoTable availabilityItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_WMDVEX);
		final int numberOfAvailabilityItems = availabilityItemsTable.getNumRows();
		availabilityMap = prepareAvailabilityDetailsMap(stockDetailsMap, availabilityItemsTable);
		final Set<String> keySet = availabilityMap.keySet();
		for (final String key : keySet)
		{
			final String str = key.replaceAll("\\s", "");
			final String keyDetails[] = str.split("_");
			final String plantCode = keyDetails[1];
			final String plantName = bhgeB2BOrderService.getPlantNameForCode(plantCode);
			plantList.put(plantCode, plantName);
		}
		return plantList;
	}

	@Override
	public void setSessionCart(final CartModel cart)
	{
		if (cart == null)
		{
			removeSessionCart();
		}
		else
		{
			// Logged in user - getting cart based on customer and default sold to
			final UserModel user = userService.getCurrentUser();
			if (!userService.isAnonymousUser(user))
			{
				B2BUnitModel b2bUnit = null;
				if (user instanceof GEEdgeCustomerModel)
				{
					b2bUnit = ((GEEdgeCustomerModel) user).getDefaultB2BUnit();
				}
				try
				{
					if (b2bUnit != null)
					{
						getSessionService().setAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME, cart);
						cart.setName(null);
						modelService.save(cart);
					}
				}
				catch (final Exception ex)
				{
					if (LOG.isInfoEnabled())
					{
						LOG.info("Session Cart no longer valid. Removing from session. getSessionCart will create a new cart. "
								+ ex.getMessage() + ExceptionUtils.getStackTrace(ex));
						getSessionService().removeAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME);
						getSessionService().setAttribute(b2bUnit.getUid() + SESSION_CART_PARAMETER_NAME,
								bhgeCartFactory.updateCartForLoggedInuser(super.getSessionCart()));
						getSessionService().removeAttribute(SESSION_CART_PARAMETER_NAME);
					}
				}
			}
			else
			{
				getSessionService().setAttribute(SESSION_CART_PARAMETER_NAME, cart);
			}
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.order.impl.DefaultAbstractOrderService#addNewEntry(de.hybris.platform.core.model.order.
	 * AbstractOrderModel, de.hybris.platform.core.model.product.ProductModel, long,
	 * de.hybris.platform.core.model.product.UnitModel, int, boolean)
	 */
	@Override
	public CartEntryModel addNewEntry(final CartModel order, final ProductModel product, final long qty, final UnitModel unit,
			final int number, final boolean addToPresent)
	{
		validateParameterNotNullStandardMessage("order", order);
		return (CartEntryModel) addNewEntry(abstractOrderEntryTypeService.getAbstractOrderEntryType(order), order, product, qty,
				unit, number, addToPresent);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.order.impl.DefaultAbstractOrderService#addNewEntry(de.hybris.platform.core.model.type.
	 * ComposedTypeModel, de.hybris.platform.core.model.order.AbstractOrderModel,
	 * de.hybris.platform.core.model.product.ProductModel, long, de.hybris.platform.core.model.product.UnitModel, int,
	 * boolean)
	 */
	@Override
	public AbstractOrderEntryModel addNewEntry(final ComposedTypeModel entryType, final CartModel order,
			final ProductModel product, final long qty, final UnitModel unit, final int number, final boolean addToPresent)
	{
		validateParameterNotNullStandardMessage("entryType", entryType);
		validateParameterNotNullStandardMessage("product", product);
		validateParameterNotNullStandardMessage("order", order);
		if (qty <= 0)
		{
			throw new IllegalArgumentException("Quantity must be a positive non-zero value");
		}
		if (number < APPEND_AS_LAST)
		{
			throw new IllegalArgumentException("Number must be greater or equal -1");
		}
		UnitModel usedUnit = unit;
		if (usedUnit == null)
		{
			LOG.debug("No unit passed, trying to get product unit");
			usedUnit = product.getUnit();
			validateParameterNotNullStandardMessage("usedUnit", usedUnit);
		}

		AbstractOrderEntryModel ret = null;
		// search for present entries for this product if needed
		if (addToPresent)
		{
			for (final CartEntryModel e : getEntriesForProduct(order, product))
			{
				// Ensure that order entry is not a 'give away', and has same units
				if (Boolean.FALSE.equals(e.getGiveAway()) && usedUnit.equals(e.getUnit()))
				{
					e.setQuantity(Long.valueOf(e.getQuantity().longValue() + qty));
					ret = e;
					break;
				}
			}
		}

		if (ret == null)
		{
			ret = abstractOrderEntryService.createEntry(entryType, order);
			ret.setQuantity(Long.valueOf(qty));
			ret.setProduct(product);
			ret.setUnit(usedUnit);
			ret.setBasePrice(product.getBasePrice()); // setting entry base price to product base price
			addEntryAtPosition(order, ret, number);
		}
		order.setCalculated(Boolean.FALSE);
		return ret;
	}

	/**
	 * @comment The product in Cart for which the HYBRIS STATUS is out of Stock; it is removed from the CartEntry and the
	 *          cart is refreshed.
	 * @CartModel cart
	 * @return none
	 */
	@Override
	public List<CartEntryModel> nonSellableProductForCart(final CartModel cart, final UserModel user) {
		final List<CartEntryModel> productsToBeRemoved = new LinkedList<>();
		final List<CartEntryModel> entries = (List) cart.getEntries();
		final B2BUnitModel soldTo = cart.getSoldToForCart();
		final String dummyProductCode = configurationService.getConfiguration().getString(DUMMY_PRODUCT_CODE);
		final List<String> productCodesToBeRemoved = new ArrayList<String>();
		boolean annonymousUser= !userService.isAnonymousUser(user);
		if (CollectionUtils.isEmpty(entries) || soldTo == null) {
			return productsToBeRemoved;
		}
		entries.stream()
				.filter(entry -> !entry.getProduct().getCode().equalsIgnoreCase(dummyProductCode))
				.forEach(entry -> {
					final GEEdgeProductModel productEntry = (GEEdgeProductModel) entry.getProduct();
					if (productEntry == null || productEntry.getProductType() == null) {
						productsToBeRemoved.add(entry);
						productCodesToBeRemoved.add(productEntry.getCode());
						return;
					}
					final BHGEProductUtil productUtil = new BHGEProductUtil();
					if (annonymousUser) {
						HybrisStatus hybrisStatus = productUtil.getHybrisStatusForCurrentSalesArea(productEntry, userService);
						MaterialChannelStatus materialStatus = productUtil.getMaterialStatusForCurrentSalesArea(productEntry, userService);
						boolean isNonSellable = !productEntry.getAllowedProdPrincipals().contains(soldTo) || hybrisStatus == null || materialStatus == null
								|| !(hybrisStatus.equals(HybrisStatus.SELL) || hybrisStatus.equals(HybrisStatus.SELLANDRETURN))
								|| !(materialStatus.equals(MaterialChannelStatus.P1) || materialStatus.equals(MaterialChannelStatus.P2)
								|| materialStatus.equals(MaterialChannelStatus.P3) || materialStatus.equals(MaterialChannelStatus.CC)
								|| materialStatus.equals(MaterialChannelStatus.SO));

						if (isNonSellable) {
							productsToBeRemoved.add(entry);
							productCodesToBeRemoved.add(productEntry.getCode());
                         LOG.info("Invalid Status found for material, product is not buyable for current customer: " + productEntry.getCode());

						}
						entry.setIsEngineeringHold(Boolean.FALSE);
						if (materialStatus != null && materialStatus.equals(MaterialChannelStatus.CC) || materialStatus.equals(MaterialChannelStatus.SO)) {
							entry.setIsEngineeringHold(Boolean.TRUE);
						}
						// If the material is VC material, then don't check for price in Hybris. Since for VC material, prices will be
						// retrieved from CPQ database at runtime
						modelService.save(entry);
					}
				});
		LOG.info("productCodesToBeRemoved: " + productCodesToBeRemoved.toString());
		return productsToBeRemoved;
	}/**
	 * This method will set the given plant as the default plant in the cart item and also will set the appropriate
	 * estimated shipdates.
	 *
	 */
	@Override
	public AbstractOrderEntryModel updateDefaultPlantForEntry( String cartID, final String defaultPlant,
			final int entryNumber)
	{
		//Added 24/5 for spartacus revamp : Retrieve session cart if cart is null
		CartModel cart=getCartByCodeForDSstore(cartID);
		if(cart == null)
		{
			cart = getSessionCart();
		}
		CartEntryModel cartEntry = null;
		if(cart != null)
		{

		try
		{
			final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
			cartEntry = (CartEntryModel) orderEntries.get(entryNumber);

			if (null != cartEntry && null != cartEntry.getStockDetails() && !cartEntry.getStockDetails().isEmpty())
			{
				for (final GEEdgeStockDetailModel stockModel : cartEntry.getStockDetails())
				{
					// Setting the default plant to the cart item
					if (defaultPlant.equals(stockModel.getPlant()))
					{
						cartEntry.setPlantName(stockModel.getPlantName());
						cartEntry.setPlant(stockModel.getPlant());
						cartEntry.setAvailableQuantity(stockModel.getActualStockQty());
						cartEntry.setLeadtime(stockModel.getLeadtime());

						/*
						 * Commenting this code in order to refresh the estimated ship dates for ship complete order if((null
						 * != cart.getIsShipCompleteOrder() && cart.getIsShipCompleteOrder()) || cart.getEntries().size() ==
						 * 1) { setEstimatedShipDateForEntry(cartEntry, defaultPlant); }
						 */


						/*
						 * If shipmode is Partial, then we'll have to set the availability details for the given plant.
						 */
						setEstimatedShipDateForEntry(cartEntry, defaultPlant);
						modelService.save(cartEntry);

						/*
						 * If shipmode is Complete, then we'll have to set the largest estimated ship date to the all cart
						 * entries.
						 */
						if (null != cart.getIsShipCompleteOrder() && cart.getIsShipCompleteOrder() && cart.getEntries().size() > 1)
						{
							resetEstShipDatesInCartEntries(cart);
							setLargestShipDateInCartEntries(cart);
						}
						break;
					}
				}
				modelService.save(cartEntry);
			}

		}
		catch (final Exception e)
		{
			LOG.error("Exception occured while updating default plant for cart entry " + e);
		}
		}
		return cartEntry;
	}

	/**
	 * Resetting the Estimated ship dates in the cart entry
	 *
	 * @param cart
	 */
	protected void resetEstShipDatesInCartEntries(final CartModel cart)
	{
		if (null != cart.getEntries() && !cart.getEntries().isEmpty())
		{
			for (final AbstractOrderEntryModel entry : cart.getEntries())
			{
				final List<GEEdgeAvailabilityDetailModel> availabilityDetailsList = (List<GEEdgeAvailabilityDetailModel>) entry
						.getAvailabilityDetails();
				final List<String> estimatedShipDates = new ArrayList<>();
				for (final GEEdgeAvailabilityDetailModel availabilityDetail : availabilityDetailsList)
				{
					// Setting Default Plant to the Cart Entry
					if (Boolean.TRUE.equals(availabilityDetail.getIsDefaultPlant()) && StringUtils.isEmpty(entry.getPlant()))
					{
						setDefaultPlantToCartEntry(entry, availabilityDetail);
					}

					// Adding estimated ship dates only for the default plant
					if (availabilityDetail.getPlant().equals(entry.getPlant()))
					{
						estimatedShipDates.add(getEstimatedShipDateForEntry(availabilityDetail));
					}
				}

				if (!estimatedShipDates.isEmpty())
				{
					entry.setEstShippingDates(new ArrayList<String>(estimatedShipDates));
				}
				else
				{
					setShipDateMessage(entry);
				}
				modelService.save(entry);
			}
		}
	}

	public void setEstimatedShipDateForEntry(final AbstractOrderEntryModel entry, final String plant)
	{
		if (null != entry && entry.getAvailabilityDetails() != null && !entry.getAvailabilityDetails().isEmpty()
				&& StringUtils.isNotBlank(plant))
		{
			final List<String> estimatedShipDates = new ArrayList<String>();
			for (final GEEdgeAvailabilityDetailModel availabilityModel : entry.getAvailabilityDetails())
			{
				if (plant.equals(availabilityModel.getPlant()))
				{
					estimatedShipDates.add(getEstimatedShipDateForEntry(availabilityModel));
				}
			}

			if (!estimatedShipDates.isEmpty())
			{
				entry.setEstShippingDates(estimatedShipDates);
			}
			else
			{
				setShipDateMessage(entry);
			}

		}
		else
		{
			setShipDateMessage(entry);
		}
		modelService.save(entry);
	}

	@Override
	public CartModel getPriceForVCCartEntry(final int entryNumber)
	{
		AbstractOrderEntryModel entry = null;
		final CartModel cart = getSessionCart();
		try
		{
			final List<AbstractOrderEntryModel> orderEntries = cart.getEntries();
			entry = orderEntries.get(entryNumber);
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			if (entry != null && connection != null && !connection.isBackendOffline())
			{
				final JCoFunction function = prepareRequestForVC(entry, connection);
				connection.execute(function);
				processPriceForVC(entry, function);
			}
			else
			{
				LOG.debug("Unable to get price for VC Cart entry");
			}
		}
		catch (final BackendException backEndException)
		{
			LOG.error(BACKEND_EXCEPTION + backEndException.getMessage());
			backEndException.printStackTrace();
		}
		catch (final BackendRuntimeException backEndRunTimeException)
		{
			LOG.error(BACKENDRUNTIME_EXCEPTION + backEndRunTimeException.getMessage());
			backEndRunTimeException.printStackTrace();
		}
		catch (final Exception exception)
		{
			LOG.error("Exception occured" + exception.getMessage());
			//exception.printStackTrace();
			LOG.error(ERROR + ExceptionUtils.getStackTrace(exception));
		}
		return cart;
	}

	protected JCoFunction prepareRequestForVC(final AbstractOrderEntryModel entry, final JCoConnection connection)
			throws BackendException
	{
		final CartModel cart = getSessionCart();
		final String functionModule = Config.getString("SAP_FUNCTION", "ZHYB_PRICE_LIST_MAT_AVLBT");
		final JCoFunction function = setFunctionAndDefault(cart, connection, functionModule);
		final JCoTable orderHeadTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_HEAD);
		final JCoTable orderItemsTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_ITEM);
		final JCoTable requestedDateTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_WMDVSX);
		final JCoTable partnerTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_PARTNER);
		final JCoTable variantConfigTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ORDER_CFGS_VALUE);
		String soldToForCart = "";
		final String uidOfChild = cart != null && cart.getSoldToForCart() != null
                                                ? cart.getSoldToForCart().getUid()
                                                : StringUtils.EMPTY;
		if (StringUtils.isNotBlank(uidOfChild) && uidOfChild.contains("_"))
		{
			soldToForCart = uidOfChild.substring(0, uidOfChild.indexOf("_"));
		}
		else
		{
			soldToForCart = uidOfChild;
		}

		// Setting Language to the request
		if (null != cart.getStore() && null != cart.getStore().getDefaultLanguage())
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU,
					cart.getStore().getDefaultLanguage().getIsocode().toUpperCase());
		}
		else
		{
			function.getImportParameterList().setValue(BhgeCoreConstants.LANGU, BhgeCoreConstants.DEFAULT_LOCALE);
		}
		function.getImportParameterList().setValue(BhgeCoreConstants.I_FLAG_PA, BhgeCoreConstants.FLAG_VC);
		orderHeadTable.appendRow();
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_KUNNR, soldToForCart);
		final String vbelnValue = BHGESAPJCoUtils.addLeadingZeros(cart.getCode(), 10);
		LOG.debug("IT_HEAD-VBELN value is " + vbelnValue);
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_VBELN, vbelnValue);
		final String lineItemCount = "100000";
		final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) entry.getProduct();
		orderItemsTable.appendRow();
		final JCoTable configValueTable = orderItemsTable.getTable(BhgeCoreConstants.T_IT_ITEM_VARCOND);
		final JCoTable plantsTable = orderItemsTable.getTable(BhgeCoreConstants.T_ET_WERKS);
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_KPOSN, lineItemCount);
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MATNR, geEdgeProductModel.getCode());
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_MGAME, bhgePriceAvailabilityUtils.getFormattedQuantity(entry.getQuantity()));
		if (null != geEdgeProductModel.getProductType() && GEEdgeProductType.ITFILM.equals(geEdgeProductModel.getProductType()))
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_FL);
		}
		else
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_PROD_CAT_FLAG, BhgeCoreConstants.PROD_CAT_FLAG_IT);
		}

		// Setting UOM to the request
		if (null != geEdgeProductModel.getUnit())
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_VRKME, geEdgeProductModel.getUnit().getSapCode());
		}

		if (StringUtils.isNotBlank(entry.getExternalConfiguration()))
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_AVBT_CHECK, BhgeCoreConstants.ATP_CHECK_DATA);
			//				setConfigurationChar(configValueTable, itemNum, cartEntry);
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_VARCOND, configValueTable);
			setVariantConfigDetails(variantConfigTable, lineItemCount, entry); // To Populate VC details of the material
		}
		else
		{
			orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_AVBT_CHECK, geEdgeProductModel.getAtp());
		}
		requestedDateTable.appendRow();
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_REQ_QTY, bhgePriceAvailabilityUtils.getFormattedQuantity(entry.getQuantity()));
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_MATNR, geEdgeProductModel.getCode());
		requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_YLINE, lineItemCount);
		if (null != geEdgeProductModel.getUnit())
		{
			requestedDateTable.setValue(BhgeCoreConstants.ET_WMDVSX_DELKZ, geEdgeProductModel.getUnit().getCode());
		}
		preparePlantsForSalesOrg(plantsTable);
		orderItemsTable.setValue(BhgeCoreConstants.IT_ITEM_WERKS, plantsTable);
		if (StringUtils.isNotBlank(cart.getEndUserNumber()))
		{
			partnerTable.appendRow();
			partnerTable.setValue(BhgeCoreConstants.PARVW, Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
			partnerTable.setValue(BhgeCoreConstants.KUNNR, cart.getEndUserNumber());
		}
		LOG.debug("Price & Availability - VC Request XML: " + function.toXML());
		return function;
	}

	protected void processPriceForVC(final AbstractOrderEntryModel entry, final JCoFunction function)
	{
		LOG.debug("Processing the Price for VC Materials");
		LOG.debug("Price & Availability - VC Response XML: " + function.toXML());
		final JCoTable resultItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_VC_COMPONENT_PRICE);
		final int numberOfResultItems = resultItemsTable.getNumRows();
		LOG.debug("No of result Items " + numberOfResultItems);
		if (numberOfResultItems > 0)
		{
			final List<VCComponentPriceModel> componentPrices = new ArrayList<VCComponentPriceModel>();
			for (int i = 0; i < numberOfResultItems; i++)
			{
				final String componentName = getFieldValue(resultItemsTable.getString(BhgeCoreConstants.VC_VARCOND));
				if (StringUtils.isNotBlank(componentName))
				{
					final VCComponentPriceModel componentPriceModel = modelService.create(VCComponentPriceModel.class);
					componentPriceModel.setName(componentName);
					componentPriceModel.setDescription(getFieldValue(resultItemsTable.getString(BhgeCoreConstants.VC_VCTEXT)));
					componentPriceModel.setCurrency(getFieldValue(resultItemsTable.getString(BhgeCoreConstants.VC_CURRENCY)));
					componentPriceModel.setComponentPrice(
							getPrice(resultItemsTable.getString(BhgeCoreConstants.VC_CONDVALUE)) / entry.getQuantity());
					componentPriceModel.setTotalPrice(getPrice(resultItemsTable.getString(BhgeCoreConstants.VC_CONDVALUE)));
					componentPrices.add(componentPriceModel);
				}
				resultItemsTable.nextRow();
			}
			entry.setComponentPrices(componentPrices);
			modelService.save(entry);
		}
	}

	@Override
	public boolean isCompleteShipmentWithMultiplePlants()
	{
		final CartModel cart = getSessionCart();
		boolean isShipmentValid = false;
		if (null != cart.getIsShipCompleteOrder() && cart.getIsShipCompleteOrder() && cart.getEntries().size() > 1)
		{

			if (null != cart.getCartType() && BhgeCoreConstants.CART_TYPE_HYBRID.equalsIgnoreCase(cart.getCartType().getCode()))
			{
				final List<AbstractOrderEntryModel> filmEntries = new ArrayList<AbstractOrderEntryModel>();
				final List<AbstractOrderEntryModel> nonFilmEntries = new ArrayList<AbstractOrderEntryModel>();
				for (final AbstractOrderEntryModel entryModel : cart.getEntries())
				{
					final GEEdgeProductModel geEdgeProductModel = (GEEdgeProductModel) entryModel.getProduct();
					if (null != geEdgeProductModel.getProductType()
							&& BhgeCoreConstants.FILM.equalsIgnoreCase(geEdgeProductModel.getProductType().getCode()))
					{
						filmEntries.add(entryModel);
					}
					else
					{
						nonFilmEntries.add(entryModel);
					}
				}
				isShipmentValid = isDifferentPlantSelectedForCompleteShipment(filmEntries)
						|| isDifferentPlantSelectedForCompleteShipment(nonFilmEntries);
				return isShipmentValid;
			}
			else
			{
				isShipmentValid = isDifferentPlantSelectedForCompleteShipment(cart.getEntries());
				return isShipmentValid;
			}
		}

		return false;
	}

	public boolean isDifferentPlantSelectedForCompleteShipment(final List<AbstractOrderEntryModel> entries)
	{
		final List<String> plants = new ArrayList<String>();
		for (final AbstractOrderEntryModel entry : entries)
		{
			if (StringUtils.isNotBlank(entry.getPlant()))
			{
				plants.add(entry.getPlant().trim());
			}
		}

		if (plants.size() > 1)
		{
			for (int i = 1; i < plants.size(); i++)
			{
				if (!plants.get(i).equals(plants.get(0)))
				{
					return true;
				}
			}
		}
		return false;
	}

	@Override
	public boolean getSoldtoBlockDetails()
	{
		boolean blockPresentCheck = false;
		try
		{
			final JCoConnection connection = sapJcoContainer.getRFCConnection();
			if (connection != null && !connection.isBackendOffline())
			{
				final JCoFunction function = prepareRequestForBlock(connection);
				connection.execute(function);
				blockPresentCheck = processRequestForBlock(function);
			}
			else
			{
				LOG.debug("Unable to get Block information.");
			}
		}
		catch (final BackendException backEndException)
		{
			LOG.error(BACKEND_EXCEPTION + backEndException.getMessage());
			backEndException.printStackTrace();
		}
		catch (final BackendRuntimeException backEndRunTimeException)
		{
			LOG.error(BACKENDRUNTIME_EXCEPTION + backEndRunTimeException.getMessage());
			backEndRunTimeException.printStackTrace();
		}
		catch (final Exception exception)
		{
			LOG.error("Exception occured" + exception.getMessage());
			//exception.printStackTrace();
			LOG.error(ERROR + ExceptionUtils.getStackTrace(exception));
		}
		return blockPresentCheck;
	}

	protected JCoFunction prepareRequestForBlock(final JCoConnection connection) throws BackendException
	{
		LOG.info("Inside prepareRequestForBlock");
		final JCoFunction function = connection.getFunction(Config.getString("SAP_FUNCTION", "ZHYB_PRICE_LIST_MAT_AVLBT"));
		String soldToForCart = null;
		final BHGESoldToData soldToData = (BHGESoldToData) getSessionService().getAttribute("sessionSoldTo");
		if (null != soldToData)
		{
			soldToForCart = soldToData.getUid();
		}
		function.getImportParameterList().setValue(BhgeCoreConstants.I_FLAG_PA, BhgeCoreConstants.FLAG_C);
		final JCoTable orderHeadTable = function.getImportParameterList().getTable(BhgeCoreConstants.T_IT_HEAD);
		orderHeadTable.appendRow();
		orderHeadTable.setValue(BhgeCoreConstants.IT_HEAD_KUNNR, soldToForCart);
		LOG.info("Post prepareRequestForBlock : " + function.toXML());
		return function;
	}

	protected boolean processRequestForBlock(final JCoFunction function)
	{
		LOG.info("Inside processRequestForBlock");
		final JCoTable messageItemsTable = function.getTableParameterList().getTable(BhgeCoreConstants.T_ET_RETURN);
		final int numOfMessageRows = messageItemsTable.getNumRows();
		LOG.info("Post numOfMessageRows : " + numOfMessageRows);
		if (numOfMessageRows > 0)
		{
			return true;
		}
		else
		{
			return false;
		}
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.order.service.BHGECartService#updateCartAlternateEmailWithGuestEmail(String guestEmailID)
	 */
	@Override
	public void updateCartAlternateEmailWithGuestEmail(final String cartId, final String guestEmailID)
	{
			final CartModel sessionCart = getCartByCodeForDSstore(cartId);
			if(null != sessionCart)
			{
				sessionCart.setAlternateContactEmail(guestEmailID);
				getModelService().save(sessionCart);
			}
	}

	@Override
	public void updateCartAlternateEmailWithGuestEmail(final String guestEmailID)
	{
		if (hasSessionCart())
		{
			final CartModel sessionCart = getSessionCart();
			sessionCart.setAlternateContactEmail(guestEmailID);
			getModelService().save(sessionCart);
		}
	}
	@Override
	public void updateCartentryECA(final String cartId, int entryNumber, Long ecaCode)

	{
		final CartModel sessionCart = getCartByCodeForDSstore(cartId);
		if(null != sessionCart) {
			LOG.info("BHGEDefaultCommerceAddToCartStrategy inside of updateCartentryECA method entryNumber " + entryNumber + " ECA code " + ecaCode);
			final List<AbstractOrderEntryModel> orderEntries = sessionCart.getEntries();
			if (sessionCart.getIsQuote()) {
				LOG.info("BHGECartServiceImpl inside of updateCartentryECA method Quote cart entry number before adjustment " + entryNumber);
				entryNumber = entryNumber/10;
				LOG.info("BHGECartServiceImpl inside of updateCartentryECA method Quote cart entry number " + orderEntries.size());
					final CartEntryModel cartEntry = (CartEntryModel) orderEntries.get(entryNumber-1);
					populateEndCustomerAddress(ecaCode, cartEntry);

			} else {
				LOG.info("BHGECartServiceImpl inside of updateCartentryECA method Non Quote cart entry number " + entryNumber);
					LOG.info("BHGECartServiceImpl inside of updateCartentryECA method orderEntries size " + orderEntries.size());
					final CartEntryModel cartEntry = (CartEntryModel) orderEntries.get(entryNumber);
					populateEndCustomerAddress(ecaCode, cartEntry);
			}
		}
	}
	private void populateEndCustomerAddress(Long ecaCode, CartEntryModel entryModel) {
		LOG.info("BHGECartServiceImpl inside of populateEndCustomerAddress method ECA code "+ecaCode);
		entryModel.setEcaCode(ecaCode);

		final GEEdgeCustomerModel currentUser = (GEEdgeCustomerModel) userService.getCurrentUser();
		B2BUnitModel salesArea = currentUser.getDefaultB2BUnit();
		AddressModel shipTo = b2bCommerceUnitService.getAddressForCode(salesArea, ecaCode.toString());
		if(null !=shipTo) {
			entryModel.setEndCustomerAddress(shipTo);
			LOG.info("BHGECartServiceImpl inside of populateEndCustomerAddress method shipTo address " + shipTo.getPk());
		}
		else {
			try {
				shipTo = modelService.get(PK.parse(ecaCode.toString()));
			} catch (Exception e) {
				LOG.error("BHGECartServiceImpl inside of populateEndCustomerAddress method Exception while getting shipTo address by pk " + ecaCode, e);
			}
			if (null != shipTo) {
				LOG.info("BHGECartServiceImpl inside of populateEndCustomerAddress method shipTo address after get by pk " + shipTo.getPk());
				entryModel.setEndCustomerAddress(shipTo);
			}
		}
		modelService.save(entryModel);

	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.order.service.BHGECartService#generateCheckoutPdf(AbstractOrderModel cart)
	 */
	public Boolean generateCheckoutPdf(final AbstractOrderModel cart) throws IOException
	{
		YCORDINATE = PDRectangle.A4.getHeight() - MARGIN;
		final String fileNo = YSanitizer.sanitize(cart.getCode());
		final String fileName = "Checkout-info-" + fileNo;
		final String finalName = "Checkout-info-" + fileNo;
		File filed = new File(CHECKOUT_FILE + fileName);
		try
		{
			filed = File.createTempFile(StringEscapeUtils.escapeHtml4(fileName),".pdf");
			final File files = File.createTempFile(StringEscapeUtils.escapeHtml4(finalName),".pdf");
			createCheckoutPdfbox(cart, filed, files);
			//deleting temp file
			FileUtils.deleteQuietly(filed);
			//reading from Blob
			String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_CHECKOUT_FILE);
			filed=bhgeBlobDataImportService.readFromBlob(fileName,".pdf",checkoutFileContainerName);
			//Migration changes end
		}
		catch (final Exception e)
		{
			LOG.error("Error " + e);
			return false;
		}
		return setCheckoutPDFToCartAttachments(cart, filed);
	}


	/**
	 * Sets the checkout PDF to cart attachments
	 *
	 * @param cart
	 * @param filed
	 * @throws FileNotFoundException
	 * @throws IOException
	 */
	private boolean setCheckoutPDFToCartAttachments(final AbstractOrderModel cart, final File filed)
			throws FileNotFoundException, IOException
	{
		boolean returnValue = false;
		final InputStream stream = new FileInputStream((filed));
		final MultipartFile multipartFileToSend = new MockMultipartFile("file", StringEscapeUtils.escapeHtml4(filed.getName()), MediaType.APPLICATION_PDF_VALUE,
				stream);

		final BHGEAdditionalInfoModel additionalInfoModel = null;
		final List<MediaModel> additioanalAttachmentList = new ArrayList<>();
		MediaModel mediaModel = null;
		try
		{
			if ((null != multipartFileToSend) && ((!multipartFileToSend.isEmpty())))
			{

				mediaModel = bhgeRmaFormService.uploadAdditionalFile(multipartFileToSend);
				modelService.save(mediaModel);
				if (null != mediaModel)
				{
					final String name = mediaModel.getRealFileName();
				}
			}
			final List<MediaModel> finalList = new ArrayList<MediaModel>();
			/*for (final MediaModel cartAttachment : cart.getAttachments())
			{
				finalList.add(cartAttachment);
			}*/
			finalList.add(mediaModel);
			cart.setRmaAttachment(finalList);
			cart.setCheckoutPdfStatus(PdfStatusType.GENERATED);
			modelService.save(cart);
			returnValue = true;

		}
		catch (final Exception e)
		{
			LOG.error("Error in uploading attachment to the Rma from." + ExceptionUtils.getStackTrace(e));
		}
		return returnValue;
	}


	/**
	 * replacement for iText using Open Source Apache PDFBox, create checkout PDF based on cart data.
	 *
	 * @param cart
	 * @param rmaFormData
	 * @param fileName
	 * @throws IOException
	 * @author Shahid
	 */
	private File[] createCheckoutPdfbox(final AbstractOrderModel cart, final File... files) throws IOException
	{
		//final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
		final PDDocument pdDocument = new PDDocument();
		final PDPage checkoutPage = new PDPage(PDRectangle.A4);
		pdDocument.addPage(checkoutPage);
		// Start a new content stream which will hold the content that's about to be created
		PDPageContentStream contentStream = null;
		final SimpleDateFormat targetFormat = new SimpleDateFormat("dd-MMM-yyyy");

		try
		{
			contentStream = new PDPageContentStream(pdDocument, checkoutPage);
		}
		catch (final Exception exc)
		{
			LOG.error(String.valueOf(exc));
		}
		//Populates header , customer account and payment segment
		final String headerText = populateSegment1(cart, pdDocument, checkoutPage, contentStream);
		//Populates shipping details segment
		populateSegment2(cart, pdDocument, checkoutPage, contentStream);
		//Populates notifications segment
		contentStream = populateSegment3(cart, pdDocument, contentStream, headerText);
		//Populates compliance segment
		contentStream = populateSegment4(cart, pdDocument, contentStream, headerText);

		//saving the file into disk
		contentStream.close();
		//Migration changes start
		String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_CHECKOUT_FILE);
		//Migration changes end
		for (final File file : files)
		{
			//Migration changes start
			//pdDocument.save(CHECKOUT_FILE + file.getName());
			pdDocument.save(file);
			bhgeBlobDataImportService.writeFileToBlob(file,checkoutFileContainerName);
			//Migration changes end
		}
		pdDocument.close();
		return files;
	}


	/**
	 * @param cart
	 * @param pdDocument
	 * @param contentStream
	 * @param headerText
	 * @return
	 * @throws IOException
	 */
	private PDPageContentStream populateSegment4(final AbstractOrderModel cart, final PDDocument pdDocument,
			PDPageContentStream contentStream, final String headerText) throws IOException
	{
		PDPage checkoutPage;
		//create newpage for compliance section
		checkoutPage = new PDPage(PDRectangle.A4); //new page created
		final PDRectangle pageSize = checkoutPage.getMediaBox();
		final float startUY = pageSize.getUpperRightY() - MARGIN;
		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
		YCORDINATE = startUY; //Reset the yCordinate with the new Y cordinate
		contentStream.close(); //close the prev stream
		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
		//Migration changes start
		File headerLogo=getHeaderLogo();
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end
		final String custComplianceDetail = "4.COMPLIANCE QUESTIONS";
		final String isGovVal = cart != null && cart.getIsGovernment() != null
				? cart.getIsGovernment().booleanValue() ? "Yes" : "No"
				: "No";
		final String isNuclearVal = cart != null && cart.getIsNuclearOppurtunity() != null
				? cart.getIsNuclearOppurtunity().booleanValue() ? "Yes" : "No"
				: "No";
		final String isEndUserVal = cart != null && cart.getIsBuyer() != null ? cart.getIsBuyer().booleanValue() ? "Yes" : "No"
				: "No";
		final String isExportVal = cart != null && cart.getIsExport() != null ? cart.getIsExport().booleanValue() ? "Yes" : "No"
				: "No";
		final String exportAddress = cart != null && cart.getExportAddressText() != null ? cart.getExportAddressText() : "";
		final String endUserCategoryVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getEndUserType() != null ? cart.getRMAEndUserAddress().getEndUserType() : "";
		final String endUserNameVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getCompany() != null ? cart.getRMAEndUserAddress().getCompany() : "";
		final String endUserAddressL1Val = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getLine1() != null ? cart.getRMAEndUserAddress().getLine1() : "";
		final String endUserAddressL2Val = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getLine2() != null ? cart.getRMAEndUserAddress().getLine2() : "";
		final String endUserCountryVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getCountry() != null && cart.getRMAEndUserAddress().getCountry().getName() != null
						? cart.getRMAEndUserAddress().getCountry().getName()
						: "";
		final String endUserStateVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getRegion() != null && cart.getRMAEndUserAddress().getRegion().getName() != null
						? cart.getRMAEndUserAddress().getRegion().getName()
						: "";
		final String endUserCityVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getTown() != null ? cart.getRMAEndUserAddress().getTown() : "";//Region
		final String endUserZipcodeVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getPostalcode() != null ? cart.getRMAEndUserAddress().getPostalcode() : "";

		final String isGov = "Is this a Government or Military opportunity, or does it involve nuclear, chemical, or biological weapons?";
		final String isNuclear = "Is this a Nuclear Opportunity?";
		final String isExport = "Will any materials in this order be exported from the requested shipping address?";
		final String isEndUser = "Is the end user a government agency or buying for a government?";
		final String altContactNumber = "Alternate contact phone number";
		final String endUserCategory = "End user category";
		final String endUserName = "End user name";
		final String endUserAddressL1 = "End user address line 1";
		final String endUserAddressL2 = "End user address line 2";
		final String endUserCountry = "End user country";
		final String endUserState = "End user state / province";
		final String endUserCity = "End user city";
		final String endUserZipcode = "End user zip code";

		final List<Float> biggestCellC4 = new ArrayList<>();
		biggestCellC4.add(calWidth(altContactNumber));
		Collections.sort(biggestCellC4);
		Collections.reverse(biggestCellC4);
		final float sizeC4 = biggestCellC4.get(0);

		addPara(custComplianceDetail, true, false, pdDocument, checkoutPage, contentStream);
		final List<String> isGovlines = addMultiParagraph(checkoutPage, isGov, sizeC4);
		final List<String> isExportlines = addMultiParagraph(checkoutPage, isExport, sizeC4);
		final List<String> isEndUserlines = addMultiParagraph(checkoutPage, isEndUser, sizeC4);
		final List<String> exportAddressLines = addMultiParagraph(checkoutPage, checkSpclChar(exportAddress), sizeC4);
		final List<String> endUserNameVals = addMultiParagraph(checkoutPage, checkSpclChar(endUserNameVal), sizeC4);
		final List<String> endUserAddressL1ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL1Val), sizeC4);
		final List<String> endUserAddressL2ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL2Val), sizeC4);

		newLine();
		addMultiLinePara(isGovlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(isGovVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * isGovlines.size();
		newLine();
		addPara(isNuclear, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(isNuclearVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();

		addMultiLinePara(isExportlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(isExportVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isExportlines.size() + FONT_HEIGHT * 3.5f });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * isExportlines.size();

		addMultiLinePara(isEndUserlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() + FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(isEndUserVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isEndUserlines.size() + FONT_HEIGHT * 5.8f });
		//v.imp to reset
		newLine();
		//{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() + FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(endUserCategory, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara(endUserCategoryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserName, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addMultiLinePara(endUserNameVals, true, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserAddressL1, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addMultiLinePara(endUserAddressL1ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
				{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserAddressL2, false, false, pdDocument, checkoutPage, contentStream, new float[]
				{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
	   addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
				{ MARGIN * 3 });
		addMultiLinePara(endUserAddressL2ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
						{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserCountry, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(endUserCountryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserCity, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(endUserCityVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserState, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(endUserStateVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserZipcode, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(endUserZipcodeVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		return contentStream;
	}


	/**
	 * @param cart
	 * @param pdDocument
	 * @param contentStream
	 * @param headerText
	 * @return
	 * @throws IOException
	 */
	private PDPageContentStream populateSegment3(final AbstractOrderModel cart, final PDDocument pdDocument,
			PDPageContentStream contentStream, final String headerText) throws IOException
	{
		PDPage checkoutPage;
		final List<Float> biggestCellC3 = new ArrayList<>();
		biggestCellC3.add(calWidth("Order acknowledgement"));
		biggestCellC3.add(calWidth("Invoice email"));
		Collections.sort(biggestCellC3);
		Collections.reverse(biggestCellC3);
		final float sizeC3 = biggestCellC3.get(0);

		checkoutPage = new PDPage(PDRectangle.A4); //new page created
		final PDRectangle pageSize1 = checkoutPage.getMediaBox();
		final float startUY1 = pageSize1.getUpperRightY() - MARGIN;
		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
		YCORDINATE = startUY1; //Reset the yCordinate with the new Y cordinate
		contentStream.close(); //close the prev stream
		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
		//Migration changes start
		File headerLogo=getHeaderLogo();
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end
		final String custNotificationDetail = "3. NOTIFICATIONS DETAILS";
		final String orderack = cart != null && cart.getOrderConfirmationEMail() != null ? cart.getOrderConfirmationEMail() : "";
		final String shipNotification = cart != null && StringUtils.isNotBlank(cart.getShipNotificationEmail())
				? cart.getShipNotificationEmail()
				: "";
		final String cartEmailAddress = cart != null && StringUtils.isNotBlank(cart.getAlternateContactEmail())
				? cart.getAlternateContactEmail()
				: "";
		final String invoiceEmail = cart != null && StringUtils.isNotBlank(cart.getInvoiceEmail()) ? cart.getInvoiceEmail() : "";
		final String csrReviewText = cart != null && StringUtils.isNotBlank(cart.getSpecialDiscountCode())
				? cart.getSpecialDiscountCode()
				: "";
		addPara(custNotificationDetail, true, false, pdDocument, checkoutPage, contentStream);
		newLine();

		addPara("Email Address", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(cartEmailAddress, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC3 });
		newLine();

		addPara("Shipping Notification Email", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipNotification, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC3 });
		newLine();

		addPara("Order acknowledgement", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(orderack, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC3 });
		newLine();
		addPara("Invoice email", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(invoiceEmail, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC3 });
		newLine();
		return contentStream;
	}


	/**
	 * @param cart
	 * @param pdDocument
	 * @param checkoutPage
	 * @param contentStream
	 * @throws IOException
	 */
	private void populateSegment2(final AbstractOrderModel cart, final PDDocument pdDocument, final PDPage checkoutPage,
			final PDPageContentStream contentStream) throws IOException
	{
		final List<Float> biggestCellC2 = new ArrayList<>();
		biggestCellC2.add(calWidth("Shipping Address"));
		biggestCellC2.add(calWidth("Shipping Contact Name"));
		biggestCellC2.add(calWidth("Shipping Contact Phone Number"));
		biggestCellC2.add(calWidth("Delivery Point"));
		biggestCellC2.add(calWidth("Shipping Remarks"));
		Collections.sort(biggestCellC2);
		Collections.reverse(biggestCellC2);
		final float sizeC2 = biggestCellC2.get(0);

		//Shipping address population - start
		final String shipToName = "Ship to company name";
		final String shipToAddressL1 = "Ship to address line 1";
		final String shipToAddressL2 = "Ship to address line 2";
		final String shipToCountry = "Ship to country";
		final String shipToState = "Ship to state / province";
		final String shipToCity = "Ship to city";
		final String shipToZipcode = "Ship to zip code";


		final String shipToCompanyVal = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getCompany() != null ? cart.getDeliveryAddress().getCompany() : "";
		final String shipToLine1Val = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getLine1() != null ? cart.getDeliveryAddress().getLine1() : "";
		final String shipToLine2Val = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getLine2() != null ? cart.getDeliveryAddress().getLine2() : "";
		final String shipToLineCountryVal = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getCountry() != null && cart.getDeliveryAddress().getCountry().getName() != null
						? cart.getDeliveryAddress().getCountry().getName()
						: "";
		final String shipToStateVal = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getRegion() != null && cart.getDeliveryAddress().getRegion().getName() != null
						? cart.getDeliveryAddress().getRegion().getName()
						: "";
		final String shipToCityVal = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getTown() != null ? cart.getDeliveryAddress().getTown() : "";//Region
		final String shipToZipCodeVal = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getPostalcode() != null ? cart.getDeliveryAddress().getPostalcode() : "";


		//Shipping addressing population - end

		final String custShipDetail = "2. SHIPPING DETAILS";

		final String shippingContactName = cart != null && cart.getShipToContactName() != null ? cart.getShipToContactName() : "";
		final String shippingContactPhone = cart != null && cart.getShipToContactPhone() != null ? cart.getShipToContactPhone()
				: "";
		final String deliveryPoint = cart != null && cart.getDeliveryPoint() != null ? cart.getDeliveryPoint() : "";
		final String shippingRemarks = cart != null && cart.getShippingRemarks() != null ? cart.getShippingRemarks() : "";


		addPara(custShipDetail, true, false, pdDocument, checkoutPage, contentStream);
		newLine();

		addPara(shipToName, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipToCompanyVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara(shipToAddressL1, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipToLine1Val, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara(shipToAddressL2, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipToLine2Val, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara(shipToCountry, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipToLineCountryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara(shipToState, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipToStateVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara(shipToCity, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipToCityVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara(shipToZipcode, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shipToZipCodeVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();



		addPara("Shipping Contact Name", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shippingContactName, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara("Shipping Contact Phone Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(shippingContactPhone, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara("Delivery Point", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(deliveryPoint, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();

		addPara("Shipping Remarks", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		final List<String> shippingRemarklines = addMultiParagraph(checkoutPage, checkSpclChar(shippingRemarks), sizeC2);
		addMultiLinePara(shippingRemarklines, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC2 });
		newLine();
	}


	/**
	 * @param cart
	 * @param pdDocument
	 * @param checkoutPage
	 * @param contentStream
	 * @return
	 * @throws IOException
	 */
	private String populateSegment1(final AbstractOrderModel cart, final PDDocument pdDocument, final PDPage checkoutPage,
									final PDPageContentStream contentStream) throws IOException {
		final String headerText = "Checkout Information Form";
		final String h1Text = "CHECKOUT DATA";
		final String customerLabel = "Customer";
		final String accountName = StringUtils.defaultIfBlank(cart.getShippingConatct2Name(), "");
		final String disclaimer = "Please note that the below is the Checkout Information which was provided at the time of guest order submission.";

		// Add header and footer
		File headerLogo = getHeaderLogo();
		HeaderFooterPage.addPageHeaderFooter(headerLogo, headerText, pdDocument, checkoutPage, contentStream);

		// Add main heading
		addHeading(h1Text, pdDocument, checkoutPage, contentStream);

		// Add customer label
		newLine();
		addPara(customerLabel, true, false, pdDocument, checkoutPage, contentStream);

		// Add account name
		newLine();
		addPara(accountName, true, false, pdDocument, checkoutPage, contentStream);

		// Add disclaimer
		newLine();
		addPara(disclaimer, false, true, pdDocument, checkoutPage, contentStream);

		return headerText;
	}
	private String populateSegment(final AbstractOrderModel cart, final PDDocument pdDocument, final PDPage checkoutPage,
			final PDPageContentStream contentStream) throws IOException
	{
		final String headerText = "Checkout Information Form";
		final String h1Text = "CHECKOUT DATA";
		final String paraCustomer = "Customer";
		final String paraAccount = StringUtils.isNotBlank(cart.getShippingConatct2Name()) ? cart.getShippingConatct2Name() : "";
		final String paraMAccountdesclaimer = "Please note that the below is the Checkout Information which was provided at the time of guest order submission."
				+ "This form is for your reference";
		//Migration changes start
		File headerLogo=getHeaderLogo();
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end
		addHeading(h1Text, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara(paraCustomer, true, false, pdDocument, checkoutPage, contentStream);
		//		newLine();
		addPara(paraAccount, false, false, pdDocument, checkoutPage, contentStream);
		newLine();
		final List<String> lines = addMultiParagraph(checkoutPage, paraMAccountdesclaimer);
		newLine();

		addMultiLinePara(lines, false, false, pdDocument, checkoutPage, contentStream);

		final List<Float> biggestCellSec1 = new ArrayList<>();
		biggestCellSec1.add(calWidth("Payment Method"));
		biggestCellSec1.add(calWidth("PO Number"));
		Collections.sort(biggestCellSec1);
		Collections.reverse(biggestCellSec1);
		final float sizeC1 = biggestCellSec1.get(0);

		final String custAC = "1. CUSTOMER ACCOUNT & PAYMENT DETAILS";
		final String paymentMethod = cart != null && cart.getPaymentType() != null ? cart.getPaymentType().getCode() : "ACCOUNT";
		final String poNumber = cart != null && cart.getPurchaseOrderNumber() != null ? cart.getPurchaseOrderNumber() : "-";
		final List<String> poFileNames = new ArrayList<String>();
		/*
		 * for (final MediaModel model : cart.getPoDocs()) { poFileNames.add(model.getRealFileName()); }
		 */
		for(final ReturnPOModel returnPo : cart.getReturnPO())
		{
			if(CollectionUtils.isNotEmpty(returnPo.getPoAttachments()))
			{
				for(final MediaModel model : returnPo.getPoAttachments())
				{
					poFileNames.add(model.getRealFileName());
				}
			}
		}
		final String poFileDetails = cart != null && CollectionUtils.isNotEmpty(poFileNames)
				? poFileNames.stream().collect(Collectors.joining(" "))
				: "";
		//final List<String> poFileLines = addMultiParagraph(checkoutPage, poFileDetails, sizeC1);
		addPara(custAC, true, false, pdDocument, checkoutPage, contentStream);
		newLine();

		//Adding Sold to Address - start

		final String soldToName = "Sold to company name";
		final String soldToAddressL1 = "Sold to address line 1";
		final String soldToAddressL2 = "Sold to address line 2";
		final String soldToCountry = "Sold to country";
		final String soldToState = "Sold to state / province";
		final String soldToCity = "Sold to city";
		final String soldToZipcode = "Sold to zip code";


		final String soldToCompanyVal = cart != null && cart.getPaymentAddress() != null
				&& cart.getPaymentAddress().getCompany() != null ? cart.getPaymentAddress().getCompany() : "";
		final String soldToLine1Val = cart != null && cart.getPaymentAddress() != null
				&& cart.getPaymentAddress().getLine1() != null ? cart.getPaymentAddress().getLine1() : "";
		final String soldToLine2Val = cart != null && cart.getPaymentAddress() != null
				&& cart.getPaymentAddress().getLine2() != null ? cart.getPaymentAddress().getLine2() : "";
		final String soldToLineCountryVal = cart != null && cart.getPaymentAddress() != null
				&& cart.getPaymentAddress().getCountry() != null && cart.getPaymentAddress().getCountry().getName() != null
						? cart.getPaymentAddress().getCountry().getName()
						: "";
		final String soldToStateVal = cart != null && cart.getPaymentAddress() != null
				&& cart.getPaymentAddress().getRegion() != null && cart.getPaymentAddress().getRegion().getName() != null
						? cart.getPaymentAddress().getRegion().getName()
						: "";
		final String soldToCityVal = cart != null && cart.getPaymentAddress() != null && cart.getPaymentAddress().getTown() != null
				? cart.getPaymentAddress().getTown()
				: "";//Region
		final String soldToZipCodeVal = cart != null && cart.getPaymentAddress() != null
				&& cart.getPaymentAddress().getPostalcode() != null ? cart.getPaymentAddress().getPostalcode() : "";

		addPara(soldToName, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(soldToCompanyVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara(soldToAddressL1, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(soldToLine1Val, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara(soldToAddressL2, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(soldToLine2Val, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara(soldToCountry, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(soldToLineCountryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara(soldToState, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(soldToStateVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara(soldToCity, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(soldToCityVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara(soldToZipcode, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(soldToZipCodeVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();


		//Adding Sold to Address - end

		addPara("Payment Method", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(paymentMethod, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara("Purchase Order Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(poNumber, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		addPara("PO Documents", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 });
		addPara(poFileDetails, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ MARGIN * 3 + sizeC1 });
		newLine();

		return headerText;
	}


	/**
	 * adding a new line.
	 *
	 */
	public static void newLine()
	{
		YCORDINATE -= FONT_HEIGHT;
	}

	public static float calWidth(final String text)
	{

		try
		{
			return FONT_SIZE * TEXT_FONT.getStringWidth(text) / 1000;
		}
		catch (final IOException e)
		{
			LOG.error(String.valueOf(e));
		}
		return 0f;
	}

	public static String checkSpclChar(final String test)
	{
		final StringBuilder b = new StringBuilder();
		for (int i = 0; i < test.length(); i++)
		{
			if (WinAnsiEncoding.INSTANCE.contains(test.charAt(i)))
			{
				b.append(test.charAt(i));
			}
		}
		return b.toString();
	}

	/**
	 * for creating new line in PDF
	 *
	 * @param text
	 * @param isTextBold
	 * @param sameLine
	 * @param document
	 * @param page
	 * @param pageContentStream
	 * @param corXY
	 * @throws IOException
	 */
	public static void addPara(final String text, final boolean isTextBold, final boolean sameLine, final PDDocument document,
			final PDPage page, final PDPageContentStream pageContentStream, final float... corXY) throws IOException
	{

		final PDRectangle rectangle = page.getMediaBox();
		final float fontH1 = FONT_SIZE * 1.0f;
		final PDFont font = isTextBold ? TEXT_FONT_BOLD : TEXT_FONT;
		final float size = FONT_SIZE * TEXT_FONT.getStringWidth(text) / 1000;
		YCORDINATE = sameLine ? YCORDINATE : YCORDINATE - FONT_HEIGHT;
		pageContentStream.beginText();
		pageContentStream.setFont(font, fontH1);
		pageContentStream.setLeading(LEADING);
		if (corXY.length > 0)
		{
			final float corY = corXY.length >= 2 ? corXY[1] : YCORDINATE;
			pageContentStream.newLineAtOffset(corXY[0], corY);
		}
		else
		{
			pageContentStream.newLineAtOffset(MARGIN, YCORDINATE);
		}
		pageContentStream.showText(text);
		pageContentStream.endText();
	}

	/**
	 * Multiline text with auto next line support.
	 *
	 * @param lines
	 * @param isTextBold
	 * @param document
	 * @param page
	 * @param pageContentStream
	 * @throws IOException
	 */
	public static void addMultiLinePara(final List<String> lines, final boolean isTextBold, final boolean sameLine,
			final PDDocument document, final PDPage page, final PDPageContentStream pageContentStream, final float... corXY)
			throws IOException
	{

		final PDFont font = isTextBold ? TEXT_FONT_BOLD : TEXT_FONT;
		YCORDINATE = sameLine ? YCORDINATE : YCORDINATE - FONT_HEIGHT;
		final float fontH1 = FONT_SIZE * 1.0f;
		pageContentStream.beginText();
		pageContentStream.setFont(font, fontH1);
		pageContentStream.setLeading(LEADING);
		if (corXY.length > 0)
		{
			final float corY = corXY.length >= 2 ? corXY[1] : YCORDINATE;
			pageContentStream.newLineAtOffset(corXY[0], corY);
		}
		else
		{
			pageContentStream.newLineAtOffset(MARGIN, YCORDINATE);
		}
		for (final String lineText : lines)
		{
			newLine();
			pageContentStream.showText(lineText);
			pageContentStream.newLineAtOffset(0, -LEADING);
		}
		pageContentStream.endText();
	}

	/**
	 *
	 * @param page
	 * @param paragraph
	 * @return
	 * @throws IOException
	 */
	public static List<String> addMultiParagraph(final PDPage page, String paragraph, final float... paraWidth) throws IOException
	{
		// Create a new font object selecting one of the PDF base fonts
		final PDRectangle mediabox = page.getMediaBox();
		final float width = paraWidth != null && paraWidth.length > 0 ? paraWidth[0] : mediabox.getWidth() - 2 * MARGIN;

		final List<String> lines = new ArrayList<>();
		int lastSpace = -1;
		while (!paragraph.isEmpty())
		{
			int spaceIndex = paragraph.indexOf(' ', lastSpace + 1);
			if (spaceIndex < 0)
			{
				spaceIndex = paragraph.length();
			}
			String subString = paragraph.substring(0, spaceIndex);
			final float size = FONT_SIZE * TEXT_FONT.getStringWidth(subString) / 1000;
			if (size > width)
			{
				if (lastSpace < 0)
				{
					lastSpace = spaceIndex;
				}
				subString = paragraph.substring(0, lastSpace);
				lines.add(subString);
				paragraph = paragraph.substring(lastSpace).trim();
				lastSpace = -1;
			}
			else if (spaceIndex == paragraph.length())
			{
				lines.add(paragraph);
				paragraph = "";
			}
			else
			{
				lastSpace = spaceIndex;
			}
		}
		return lines;
	}

	/**
	 * add new line with increased size font
	 *
	 * @param text
	 * @param document
	 * @param page
	 * @param pageContentStream
	 * @throws IOException
	 */
	public static void addHeading(final String text, final PDDocument document, final PDPage page,
			final PDPageContentStream pageContentStream) throws IOException
	{

		final float fontH1 = FONT_SIZE * 1.25f;
		final float size = fontH1 * TEXT_FONT.getStringWidth(text) / 1000;

		pageContentStream.beginText();
		YCORDINATE -= FONT_HEIGHT;
		pageContentStream.setFont(TEXT_FONT_BOLD, fontH1);
		pageContentStream.setLeading(LEADING);
		pageContentStream.newLineAtOffset(MARGIN, YCORDINATE);
		pageContentStream.showText(text);
		pageContentStream.endText();
	}

	//Migration changes start
	/**
	 * Gets Top Banner Image from Blob
	 * @return File
	 */
	private File getHeaderLogo(){
		final String containerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME);
		final String fileNameTobeRead=configurationService.getConfiguration().getString(BLOB_FILE_NAME_TO_BE_READ_LOGO);
		return bhgeBlobDataImportService.readFromBlob(fileNameTobeRead,".png",containerName);
	}
	//Migration changes end


	@Override
	public CartModel getCartByCodeForDSstore(String cartId) {

		final UserModel currentUser = userService.getCurrentUser();
		CartModel cartModel = null;
		if (!userService.isAnonymousUser(currentUser))
		{
			cartModel = commerceCartService.getCartForCodeAndUser(cartId, currentUser);

		}
		else
		{
			cartModel = commerceCartService.getCartForGuidAndSite(cartId, baseSiteService.getCurrentBaseSite());
		}
		return cartModel;
	}

	// Added for DS Store spartacus migration
	@Override
	public MediaModel uploadOrderAttachmentWs(CartModel cartModel, final MultipartFile file, boolean isEUC)
	{
		try
		{
			final MediaModel mediaModel = new MediaModel();
			final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
			mediaModel.setFolder(mediaFolder);

			String mediaName = null;
			final String contentType = file.getContentType();
			String fileExtension = MediaUtil.getFileExtension(file.getOriginalFilename());
			mediaName = mediaCodeGenerator.generate().toString();
			//shortening file name as SAP is not accepting files with large name
			String shortFileName = null;
				shortFileName = StringUtils.substring(file.getOriginalFilename(), 0, Config.getInt("eucFileNameLength", 14));
				if (!shortFileName.toLowerCase().endsWith("." + fileExtension.toLowerCase())) {
					shortFileName += "." + fileExtension;
				}
				 shortFileName = ORDER_FILE_PREFIX + shortFileName;
				mediaModel.setRealFileName(shortFileName);

			mediaModel.setCode(mediaName);
			// POC mandates catalog version for media.
			final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG,
					"Online");
			mediaModel.setCatalogVersion(versions);

			getModelService().save(mediaModel);
			final MediaModel orderAttachmentFile = uploadFile(file, mediaModel, shortFileName, contentType);
			//Code for saving the attachment in cart
			final CartModel currentCart = cartModel;

			if (BooleanUtils.isTrue(isEUC)) {
				final List<MediaModel> eucList = new ArrayList<>();
				for (final MediaModel cartEUCAttachment : currentCart.getEuc())
				{
					eucList.add(cartEUCAttachment);
				}
				eucList.add(orderAttachmentFile);
				currentCart.setEuc(eucList);
			} else {
				final List<MediaModel> finalList = new ArrayList<>();
				for (final MediaModel cartAttachment : currentCart.getAttachments())
				{
					finalList.add(cartAttachment);
				}
				finalList.add(orderAttachmentFile);
				currentCart.setAttachments(finalList);
			}
			currentCart.setIsAttachmentMoved(false);
			getModelService().save(currentCart);
			return mediaModel;
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading file:" + e);
		}
		return null;
	}


	@Override
	public void changeCurrentCartUser(CartModel cartModel, final UserModel user)
	{
		validateParameterNotNull(user, "user must not be null!");
		cartModel.setUser(user);
		getModelService().save(cartModel);
	}

	@Override
	public List<CountryModel> getCountries(final CountryType countryType)
	{
		final BaseStoreModel store = baseStoreService.getCurrentBaseStore();
		final List<CountryModel> countryList = new ArrayList<>();
		if (store != null)
		{
			if (CountryType.SHIPPING.equals(countryType) && CollectionUtils.isNotEmpty(store.getDeliveryCountries()))
			{
				List<CountryModel> delCountries=(List<CountryModel>) store.getDeliveryCountries();
				for (int i = 0; i < store.getDeliveryCountries().size(); i++)
				{
					if (!delCountries.get(i).getRegions().isEmpty() && Boolean.TRUE.equals(!delCountries.get(i).getSanctioned()))
					{
						countryList.add(delCountries.get(i));
					}
				}
				return countryList;
			}
			else if (CountryType.BILLING.equals(countryType) && CollectionUtils.isNotEmpty(store.getBillingCountries()))
			{
				List<CountryModel> billCountries=(List<CountryModel>) store.getBillingCountries();
				for (int i = 0; i < store.getBillingCountries().size(); i++)
				{
					if (!billCountries.get(i).getRegions().isEmpty() && Boolean.TRUE.equals(!billCountries.get(i).getSanctioned()))
					{
						countryList.add(billCountries.get(i));
					}
				}
				return countryList;
			}
		}
		List<CountryModel> commonCountries = commonI18NService.getAllCountries();
		for (CountryModel commonCountry : commonCountries) {
			if (!commonCountry.getRegions().isEmpty() && Boolean.TRUE.equals(!commonCountry.getSanctioned())) {
				countryList.add(commonCountry);
			}
		}
		return countryList;
	}

	@Override
	public void updateEntryReqDate(String reqDate, int entryNumber) {
		try {
			LOG.info("Inside updateEntryReqDate, reqDate is: "+ reqDate);
			CartModel cart = getSessionCart();
			String productLine = sessionService.getAttribute("productLine");
			if(null != cart){
				CartEntryModel entry = bhgeCartService.getEntryForNumber(cart, entryNumber);
				final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
				Date date = formatter.parse(reqDate);
				LOG.info("RequestedDeliveryDate: " + date);
				LOG.info("Line 7764 : productLine : "+ productLine+" shipment: "+cart.getIsShipCompleteOrder());
				if (StringUtils.isNotBlank(productLine) && StringUtils.containsIgnoreCase(productLine, "cordant") && cart.getIsShipCompleteOrder()) {
					LOG.info("Cordant complete shipment: "+productLine);
					for(AbstractOrderEntryModel  cartEntry: cart.getEntries()){
						cartEntry.setRequestedDeliveryDate(date);
						modelService.save(cartEntry);
					}
				} else{
					entry.setRequestedDeliveryDate(date);
					LOG.info("RequestedDeliveryDate after saving: "+ entry.getRequestedDeliveryDate());
				}

				modelService.saveAll(entry, cart);
				modelService.refresh(entry);
				modelService.refresh(cart);
			}
		} catch (Exception ex){
			LOG.info("Error during entry request delivery date update"+ ex.getMessage());
		}
	}

	@Override
	public void updateHeaderReqDate(String cartId, String reqDate) {
		try {
			LOG.info("Inside updateHeaderReqDate method");
			final UserModel currentUser = userService.getCurrentUser();
			if (!userService.isAnonymousUser(currentUser)) {
				CartModel cart = commerceCartService.getCartForCodeAndUser(cartId, currentUser);
				if (null != cart){
					final SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
					Date date = formatter.parse(reqDate);
					LOG.info("RequestedDeliveryDate: " + date);
					cart.setReqHeaderDeliveryDate(date);
					cart.getEntries().stream().filter(Objects::nonNull).forEach(
							entry -> {
								entry.setRequestedDeliveryDate(date);
							}
					);
					modelService.saveAll(cart.getEntries());
					modelService.save(cart);
					modelService.refresh(cart);
				}
			}
		} catch (Exception e) {
			LOG.error("Exception While updating header requested delivery date: " + e.getMessage());
		}
	}

    @Override
    public void deleteAllCarts(UserModel user, String b2bUnit, String salesOrg, String commerceType) {
         bhgeB2BOrderService.deleteAllCarts(user,b2bUnit,salesOrg,commerceType);
    }

    protected boolean isBentlyStore() {
		final BaseStoreModel baseStore = baseStoreService.getCurrentBaseStore();
		LOG.info("inside isBentlyStore method of BHGECartServiceImpl- base store is " + baseStore);
		boolean isBentlyStore = false;
		if (baseStore != null && baseStore.getUid().contains(BhgeCoreConstants.BENTLY_NEVADA_STORE)) {
			LOG.info("inside isBentlyStore method of BHGECartServiceImpl- current base store is bently store and id is " + baseStore.getUid());
			isBentlyStore = true;
		}
		
		return isBentlyStore;
	}
	@Override
	public boolean checkIfProductConfigIssue(CartModel cartModel) {
		LOG.info("Inside checkIfProductConfigIssue method of BHGECartServiceImpl");
		boolean checkIfProductConfigIssue = false;
		if (cartModel == null || cartModel.getEntries() == null || cartModel.getEntries().isEmpty()) {
			return false;
		}
		for (AbstractOrderEntryModel entry : cartModel.getEntries()) {
			LOG.info("Checking entry " + entry.getEntryNumber() + " for product configuration issue.");
			if (entry == null || entry.getProductConfiguration() == null) {
				continue;
			}
			String configId = entry.getProductConfiguration().getConfigurationId();
			LOG.info("Configuration ID for entry " + entry.getEntryNumber() + " is: " + configId);
			if (StringUtils.isEmpty(configId)) {
				continue;
			}
			String externalConfiguration = sapProductConfigConfigurationService.retrieveExternalConfiguration(configId);
			if (StringUtils.isEmpty(externalConfiguration)) {
				continue;
			}
			LOG.info("External configuration for entry " + entry.getEntryNumber() + " is: " + externalConfiguration);
			CPSCommerceExternalConfiguration cpsConfiguration = sapProductConfigOrderEntryMapperCPS.getCPSExternalConfigByExternalConfiguration(externalConfiguration);
			if (cpsConfiguration == null) {
				continue;
			}
			CPSFlatListContainer flatList = sapProductConfigOrderEntryMapperCPS.getCPSFlatListContainer(cpsConfiguration);
			if (flatList == null || flatList.getValues() == null || flatList.getValues().isEmpty()) {
				continue;
			}
			for (CPSExternalValue value : flatList.getValues()) {
				if (value == null || value.getValue() == null || value.getParentCharacteristic() == null || value.getParentCharacteristic().getId() == null) {
					continue;
				}
				LOG.info("Checking characteristic " + value.getParentCharacteristic().getId() + " with value " + value.getValue() + " for entry " + entry.getEntryNumber());
				if ("LN".equalsIgnoreCase(value.getValue()) && "LN_ECOMM".equalsIgnoreCase(value.getParentCharacteristic().getId())) {
					entry.setProductPricingIssue(true);
					checkIfProductConfigIssue=true;
					modelService.save(entry);
				}
			}
		}
		return checkIfProductConfigIssue;
	}
	
	protected List<AbstractOrderEntryModel> filterNonVCCartEntries (final CartModel Cart) {
		final List<AbstractOrderEntryModel> nonVCCartEntries = new ArrayList<>();
		
		Cart.getEntries().forEach(entry -> {
	        if(Boolean.FALSE.equals(entry.getProduct().getSapConfigurable())) {
	        	nonVCCartEntries.add(entry);
	        }
	    });
		return nonVCCartEntries;
	}
	
	protected List<AbstractOrderEntryModel> filterVCCartEntries (final CartModel Cart) {
		final List<AbstractOrderEntryModel> vcCartEntries = new ArrayList<>();
		
		Cart.getEntries().forEach(entry -> {
	        if(Boolean.TRUE.equals(entry.getProduct().getSapConfigurable())) {
	        	vcCartEntries.add(entry);
	        }
	    });
		return vcCartEntries;
	}
	
	protected List<AbstractOrderEntryModel> filterVCLongConfigCartEntries (final List<AbstractOrderEntryModel> vcCartEntries) {
		final List<AbstractOrderEntryModel> longConfigCartEntries = new ArrayList<>();
		
		vcCartEntries.forEach(entry -> {
	        if(isLongConfigEntry(entry)) {
	        	longConfigCartEntries.add(entry);
	        }
	    });
		return longConfigCartEntries;
	}
	
	protected List<AbstractOrderEntryModel> filterVCNonLongConfigCartEntries (final List<AbstractOrderEntryModel> vcCartEntries) {
		final List<AbstractOrderEntryModel> longConfigCartEntries = new ArrayList<>();
		
		vcCartEntries.forEach(entry -> {
	        if(!isLongConfigEntry(entry)) {
	        	longConfigCartEntries.add(entry);
	        }
	    });
		return longConfigCartEntries;
	}
	
	private boolean isLongConfigEntry(AbstractOrderEntryModel entry) {

		return Objects.nonNull(entry.getLongConfigEntry()) && entry.getLongConfigEntry();
	}
}
