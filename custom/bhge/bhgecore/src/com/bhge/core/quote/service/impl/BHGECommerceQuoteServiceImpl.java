package com.bhge.core.quote.service.impl;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.enums.GEEdgeCartType;
import com.bhge.core.enums.GEOrderType;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.ordersplit.services.impl.DefaultBHGEOrderSplittingService;
import com.bhge.core.quote.service.BHGECommerceQuoteService;
import com.bhge.core.quote.service.dao.impl.BHGECommerceQuoteDaoImpl;
import com.bhge.core.region.service.BHGERegionService;
import com.bhge.core.sap.SAPJcoContainer;
import com.bhge.core.sap.service.BHGESAPOrderAttachmentService;
import com.bhge.core.scpi.common.SCPIConnector;
import com.bhge.core.scpi.rfc.quote.quoteConversion.*;
import com.bhge.core.scpi.rfc.quote.quoteCreation.*;
import com.bhge.core.scpi.rfc.zordercreate.BHGEZOrderBappiCard;
import com.bhge.core.util.BHGECommonsUtil;
import com.bhge.facades.address.BHGEShippingAddressFormData;
import com.bhge.sap.orderfulfilment.constants.BhgesaporderfulfillmentConstants;
import com.bhge.sap.orderfulfilment.util.BHGESAPOrderUtils;
import com.google.common.math.DoubleMath;
import com.hybris.ge.edge.core.model.type.BHGECreditCardPaymnentinfoModel;
import de.hybris.platform.b2b.enums.CheckoutPaymentType;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.basecommerce.model.site.BaseSiteModel;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.commerceservices.constants.CommerceServicesConstants;
import de.hybris.platform.commerceservices.enums.DiscountType;
import de.hybris.platform.commerceservices.enums.QuoteAction;
import de.hybris.platform.commerceservices.enums.QuoteUserType;
import de.hybris.platform.commerceservices.event.QuoteBuyerSubmitEvent;
import de.hybris.platform.commerceservices.event.QuoteSalesRepSubmitEvent;
import de.hybris.platform.commerceservices.event.QuoteSellerApprovalSubmitEvent;
import de.hybris.platform.commerceservices.order.*;
import de.hybris.platform.commerceservices.order.dao.CommerceQuoteDao;
import de.hybris.platform.commerceservices.order.exceptions.IllegalQuoteSubmitException;
import de.hybris.platform.commerceservices.order.exceptions.QuoteUnderThresholdException;
import de.hybris.platform.commerceservices.order.strategies.*;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commerceservices.util.CommerceQuoteUtils;
import de.hybris.platform.core.enums.ExportStatus;
import de.hybris.platform.core.enums.OrderStatus;
import de.hybris.platform.core.enums.QuoteState;
import de.hybris.platform.core.model.c2l.CountryModel;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.core.model.c2l.RegionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.*;
import de.hybris.platform.core.model.user.AddressModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.order.CalculationService;
import de.hybris.platform.order.CartService;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.order.exceptions.CalculationException;
import de.hybris.platform.order.impl.DefaultCartService;
import de.hybris.platform.sap.core.jco.connection.JCoConnection;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.exceptions.SystemException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.i18n.daos.CountryDao;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.site.BaseSiteService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.tx.Transaction;
import de.hybris.platform.tx.TransactionBody;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.DiscountValue;
import de.hybris.platform.util.MediaUtil;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.BooleanUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.multipart.MultipartFile;

import jakarta.annotation.Resource;
import java.io.InputStream;
import java.sql.Connection;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;


import static de.hybris.platform.commerceservices.constants.CommerceServicesConstants.QUOTE_REQUEST_INITIATION_THRESHOLD;
import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNullStandardMessage;

public class BHGECommerceQuoteServiceImpl implements BHGECommerceQuoteService {

    private static final Logger LOG = LoggerFactory.getLogger(BHGECommerceQuoteServiceImpl.class);

    protected static final String DATE_TIME_FORMAT = "MMM dd, yyyy h:mm a";
    protected static final String ABSTRACT_ORDER_NAME = "Cart %s %s";
    protected static final String ABSTRACT_ORDER_DESCRIPTION = "The system %s this %s automatically when you started editing a saved quote.";

    private static final String NEW_LINE = "\n";
    private CommerceQuoteDao commerceQuoteDao;
    private CartService cartService;
    private ModelService modelService;
    private CommerceSaveCartService commerceSaveCartService;
    private SessionService sessionService;
    private CommerceCartService commerceCartService;
    private QuoteStateSelectionStrategy quoteStateSelectionStrategy;
    private QuoteActionValidationStrategy quoteActionValidationStrategy;
    private QuoteUpdateStateStrategy quoteUpdateStateStrategy;
    private UpdateQuoteFromCartStrategy updateQuoteFromCartStrategy;
    private RequoteStrategy requoteStrategy;
    private Map<QuoteState, QuoteState> quoteSnapshotStateTransitionMap;
    private QuoteService quoteService;
    private CalculationService calculationService;
    private QuoteUserTypeIdentificationStrategy quoteUserTypeIdentificationStrategy;
    private EventService eventService;
    private QuoteAssignmentValidationStrategy quoteAssignmentValidationStrategy;
    private QuoteSellerApproverAutoApprovalStrategy quoteSellerApproverAutoApprovalStrategy;
    private QuoteCartValidationStrategy quoteCartValidationStrategy;
    private QuoteExpirationTimeValidationStrategy quoteExpirationTimeValidationStrategy;
    private QuoteUpdateExpirationTimeStrategy quoteUpdateExpirationTimeStrategy;
    private QuoteMetadataValidationStrategy quoteMetadataValidationStrategy;
    private OrderQuoteDiscountValuesAccessor orderQuoteDiscountValuesAccessor;
    private UserService userService;
    private CommerceQuoteUtils commerceQuoteUtils;
    @Resource(name = "bhgeRegionService")
    private BHGERegionService bhgeRegionService;
    @Resource(name = "countryDao")
    private CountryDao countryDao;
    private CommonI18NService commonI18NService;

    @Resource(name = "mediaService")
    private MediaService mediaService;
    @Resource(name = "mediaCodeGenerator")
    private KeyGenerator mediaCodeGenerator;
    @Resource(name = "catalogVersionService")
    private CatalogVersionService catalogVersionService;

    @Autowired
    SCPIConnector scpiConnector;

    @Autowired
    FlexibleSearchService flexibleSearchService;

    @Autowired
    BHGECommerceQuoteDaoImpl bhgeCommerceQuoteDao;

    @Resource(name = "baseSiteService")
    private BaseSiteService siteService;

    @Resource(name = "sapJcoContainer")
    private SAPJcoContainer sapJcoContainer;

    @Resource(name = "bhgeSAPOrderAttachmentService")
    private BHGESAPOrderAttachmentService bhgeSAPOrderAttachmentService;

    @Resource
    BHGECartService bhgeCartService;

    @Resource
    DefaultBHGEOrderSplittingService bhgeOrderSplittingService;

    private static final double EPSILON = 0.0001d;

    private static final String SCPI_ZHYB_QUOTE_CREATION_URL = "scpi.zhyb.quote.creation.endpoint.url";

    private static final String SCPI_ZHYB_QUOTE_TRACKING_URL = "scpi.zhyb.quote.tracking.endpoint.url";

    private static final String SCPI_ZHYB_QUOTE_CONVERSION_URL = "scpi.zhyb.quote.to.order.endpoint.url";

    private static final String QUOTE_CONVERSATION_INDICATOR = "F";

    /**
     * @return the commonI18NService
     */
    public CommonI18NService getCommonI18NService() {
        return commonI18NService;
    }

    /**
     * @param commonI18NService the commonI18NService to set
     */
    public void setCommonI18NService(final CommonI18NService commonI18NService) {
        this.commonI18NService = commonI18NService;
    }

    @Override
    public QuoteModel createQuoteFromCart(final CartModel cartModel, final UserModel userModel) {
        final QuoteModel quoteModel = createQuoteFromCartInternal(cartModel, userModel);
        if (cartModel.getQuoteReference() == null) {
            cartModel.setName("Quote " + quoteModel.getCode());
            getModelService().save(cartModel);
        }
        if (quoteModel.getCartReference() == null) {
            quoteModel.setName("Quote " + cartModel.getCode());
        }
        getModelService().save(quoteModel);
        getModelService().refresh(quoteModel);

        return quoteModel;
    }

    protected QuoteModel createQuoteFromCartInternal(final CartModel cartModel, final UserModel userModel) {
        validateParameterNotNullStandardMessage("CartModel", cartModel);
        validateParameterNotNullStandardMessage("UserModel", userModel);

        QuoteModel quoteModel = getQuoteService().createQuoteFromCart(cartModel);
        quoteModel = getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.CREATE, quoteModel, userModel);

        return quoteModel;
    }

    protected boolean hasQuoteInSessionCart() {
        return getCartService().hasSessionCart() && getCartService().getSessionCart().getQuoteReference() != null;
    }

    @Override
    public CartModel loadQuoteAsSessionCart(final QuoteModel quoteModel, final UserModel userModel) {
        getQuoteActionValidationStrategy().validate(QuoteAction.EDIT, quoteModel, userModel);

        // if the quote is in offer state, remove quote related cart & quote discounts
        if (getQuoteActionValidationStrategy().isValidAction(QuoteAction.CHECKOUT, quoteModel, userModel)) {
            removeQuoteCart(quoteModel);
            quoteModel.setPreviousEstimatedTotal(quoteModel.getTotalPrice());
            getCommerceQuoteUtils().removeExistingQuoteDiscount(quoteModel);
            getModelService().save(quoteModel);
        }

        return updateAndLoadQuoteCartWithAction(quoteModel, QuoteAction.EDIT, userModel);
    }

    @Override
    public void removeQuoteCart(final QuoteModel quote) {
        if (quote.getCartReference() != null) {
            if (isSessionQuoteSameAsRequestedQuote(quote)) {
                getSessionService().removeAttribute(DefaultCartService.SESSION_CART_PARAMETER_NAME);
            }
            getModelService().remove(quote.getCartReference());
            getModelService().refresh(quote);
        }
    }

    protected CartModel updateAndLoadQuoteCartWithAction(final QuoteModel quoteModel, final QuoteAction quoteAction,
                                                         final UserModel userModel) {
        // load quote to cart
        QuoteModel updatedQuoteModel = getQuoteUpdateExpirationTimeStrategy().updateExpirationTime(quoteAction,
                quoteModel, userModel);
        updatedQuoteModel = getQuoteUpdateStateStrategy().updateQuoteState(quoteAction, updatedQuoteModel, userModel);
        getModelService().save(updatedQuoteModel);
        getModelService().refresh(updatedQuoteModel);

        return (updatedQuoteModel.getCartReference() != null) ? updatedQuoteModel.getCartReference()
                : getCartService().createCartFromQuote(updatedQuoteModel);
    }

    protected String getCurrentDateTimeFormatted(final String format) {
        final DateTimeFormatter ofPattern = DateTimeFormatter.ofPattern(format);
        return LocalDateTime.now().format(ofPattern);
    }

    protected Optional<QuoteModel> getQuoteFromSessionCart() {
        if (hasQuoteInSessionCart()) {
            return Optional.of(getCartService().getSessionCart().getQuoteReference());
        }
        return Optional.empty();
    }

    @Override
    public QuoteModel submitQuote(final QuoteModel quoteModel, final UserModel userModel) {
        validateParameterNotNullStandardMessage("quoteModel", quoteModel);
        validateParameterNotNullStandardMessage("userModel", userModel);

        getQuoteActionValidationStrategy().validate(QuoteAction.SUBMIT, quoteModel, userModel);

        QuoteModel updatedQuoteModel = isSessionQuoteSameAsRequestedQuote(quoteModel)
                ? updateQuoteFromCart(getCartService().getSessionCart(), userModel)
                : quoteModel;
        validateQuoteTotal(updatedQuoteModel);

        getQuoteMetadataValidationStrategy().validate(QuoteAction.SUBMIT, updatedQuoteModel, userModel);

        updatedQuoteModel = getQuoteUpdateExpirationTimeStrategy().updateExpirationTime(QuoteAction.SUBMIT,
                updatedQuoteModel, userModel);
        updatedQuoteModel = getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.SUBMIT, updatedQuoteModel,
                userModel);
        getModelService().save(updatedQuoteModel);
        getModelService().refresh(updatedQuoteModel);

        final QuoteUserType quoteUserType = getQuoteUserTypeIdentificationStrategy().getCurrentQuoteUserType(userModel)
                .get();
        LOG.info(" ############# Quote Type is : {}", quoteUserType.getCode());
        if (QuoteUserType.BUYER.equals(quoteUserType)) {
            final QuoteBuyerSubmitEvent quoteBuyerSubmitEvent = new QuoteBuyerSubmitEvent(updatedQuoteModel, userModel,
                    quoteUserType);
            getEventService().publishEvent(quoteBuyerSubmitEvent);
        } else if (QuoteUserType.SELLER.equals(quoteUserType)) {
            final QuoteSalesRepSubmitEvent quoteSalesRepSubmitEvent = new QuoteSalesRepSubmitEvent(updatedQuoteModel,
                    userModel, quoteUserType);
            getEventService().publishEvent(quoteSalesRepSubmitEvent);
        }

        return updatedQuoteModel;
    }

    @Override
    public void validateQuoteThreshold(final QuoteModel quote, final UserModel user, final CartModel sessionCart)
            throws QuoteUnderThresholdException {
        validateParameterNotNullStandardMessage("quote", quote);
        validateParameterNotNullStandardMessage("user", user);
        validateParameterNotNullStandardMessage("sessionCart", sessionCart);

        // only check first version of quote and if the customer is the current quote
        // user
        // then if quote-cart does not meet threshold, throw exception
        if (DoubleMath.fuzzyCompare(sessionCart.getSubtotal().doubleValue(),
                getQuoteRequestThreshold(quote, user, sessionCart), EPSILON) < 0) {
            throw new QuoteUnderThresholdException(quote.getCode(), quote.getVersion());
        }
    }

    /**
     * Checks if quote is in a state that requires checking the request threshold.
     *
     * @param quote
     * @param user
     * @param sessionCart
     * @return true is request threshold is required.
     */
    protected boolean isRequestThresholdRequired(final QuoteModel quote, final UserModel user,
                                                 final CartModel sessionCart) {
        // only check first version of quote and if the customer is the current quote
        // user
        return (quote.getVersion().intValue() == 1) && (user.equals(sessionCart.getUser()));
    }

    @Override
    public double getQuoteRequestThreshold(final QuoteModel quote, final UserModel user, final CartModel sessionCart) {
        validateParameterNotNullStandardMessage("quote", quote);
        validateParameterNotNullStandardMessage("user", user);
        validateParameterNotNullStandardMessage("sessionCart", sessionCart);

        double threshold = -1;

        if (isRequestThresholdRequired(quote, user, sessionCart)) {
            // Global quote request threshold regardless of currency
            threshold = Config.getDouble(QUOTE_REQUEST_INITIATION_THRESHOLD, 0);

            // threshold per site and currency
            final BaseSiteModel site = quote.getSite();
            final CurrencyModel currency = quote.getCurrency();
            if (site != null && StringUtils.isNotBlank(site.getUid()) && currency != null
                    && StringUtils.isNotBlank(currency.getIsocode())) {
                final String siteQuoteThresholdWithCurrency = QUOTE_REQUEST_INITIATION_THRESHOLD.concat(".")
                        .concat(site.getUid()).concat(".").concat(currency.getIsocode());
                // Quote request threshold with respect to site and currency
                threshold = Config.getDouble(siteQuoteThresholdWithCurrency, threshold);
            }
        }

        return threshold;
    }

    protected void validateQuoteTotal(final QuoteModel quoteModel) {
        if (DoubleMath.fuzzyCompare(quoteModel.getTotalPrice().doubleValue(), 0, EPSILON) < 0) {
            throw new IllegalQuoteSubmitException(quoteModel.getCode(), quoteModel.getState(), quoteModel.getVersion(),
                    String.format("Can't submit quote because that the total is negative. [Quote total : %s]",
                            quoteModel.getTotalPrice()));
        }
    }

    @Override
    public QuoteModel approveQuote(final QuoteModel quoteModel, final UserModel userModel) {
        validateParameterNotNullStandardMessage("quoteModel", quoteModel);
        validateParameterNotNullStandardMessage("userModel", userModel);

        getQuoteActionValidationStrategy().validate(QuoteAction.APPROVE, quoteModel, userModel);
        getQuoteMetadataValidationStrategy().validate(QuoteAction.APPROVE, quoteModel, userModel);

        final QuoteModel updatedQuoteModel = getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.APPROVE,
                quoteModel, userModel);
        getModelService().save(updatedQuoteModel);
        getModelService().refresh(updatedQuoteModel);

        final QuoteSellerApprovalSubmitEvent quoteSellerApprovalSubmitEvent = new QuoteSellerApprovalSubmitEvent(
                updatedQuoteModel, userModel,
                getQuoteUserTypeIdentificationStrategy().getCurrentQuoteUserType(userModel).get());
        getEventService().publishEvent(quoteSellerApprovalSubmitEvent);

        return updatedQuoteModel;
    }

    @Override
    public QuoteModel rejectQuote(final QuoteModel quoteModel, final UserModel userModel) {
        validateParameterNotNullStandardMessage("quoteModel", quoteModel);
        validateParameterNotNullStandardMessage("userModel", userModel);

        getQuoteActionValidationStrategy().validate(QuoteAction.REJECT, quoteModel, userModel);

        final QuoteModel updatedQuoteModel = getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.REJECT,
                quoteModel, userModel);
        getModelService().save(updatedQuoteModel);
        getModelService().refresh(updatedQuoteModel);

        final QuoteSellerApprovalSubmitEvent quoteSellerApprovalSubmitEvent = new QuoteSellerApprovalSubmitEvent(
                updatedQuoteModel, userModel,
                getQuoteUserTypeIdentificationStrategy().getCurrentQuoteUserType(userModel).get());
        getEventService().publishEvent(quoteSellerApprovalSubmitEvent);

        return updatedQuoteModel;
    }

    protected QuoteModel createQuoteSnapshot(final QuoteModel quoteModel) {
        final QuoteState currentQuoteState = quoteModel.getState();
        if (!getQuoteSnapshotStateTransitionMap().containsKey(currentQuoteState)) {
            throw new IllegalArgumentException(String.format(
                    "Unable to create Quote Snapshot for Quote [Quote Code : %s],"
                            + " because Snapshot transition state was not found for current quote state : %s ",
                    quoteModel.getCode(), currentQuoteState));
        }

        return getQuoteService().createQuoteSnapshot(quoteModel,
                getQuoteSnapshotStateTransitionMap().get(currentQuoteState));
    }

    @Override
    public QuoteModel updateQuoteFromCart(final CartModel cartModel, final UserModel userModel) {
        validateParameterNotNullStandardMessage("cartModel", cartModel);
        validateParameterNotNullStandardMessage("userModel", userModel);
        validateQuoteCart(cartModel);

        final QuoteModel outdatedQuote = cartModel.getQuoteReference();
        getQuoteActionValidationStrategy().validate(QuoteAction.SAVE, outdatedQuote, userModel);

        final QuoteModel updatedQuote = updateQuoteFromCartInternal(cartModel);
        removeQuoteCart(updatedQuote);
        return updatedQuote;
    }

    @Override
    public QuoteModel requote(final QuoteModel quote, final UserModel user) {
        validateParameterNotNullStandardMessage("quoteModel", quote);

        getQuoteActionValidationStrategy().validate(QuoteAction.REQUOTE, quote, user);

        final QuoteModel quoteModel = getRequoteStrategy().requote(quote);
        getModelService().save(quoteModel);
        getModelService().refresh(quoteModel);

        return quoteModel;
    }

    @Override
    public SearchPageData<QuoteModel> getQuoteList(final CustomerModel customerModel, final UserModel quoteUserModel,
                                                   final BaseStoreModel store, final PageableData pageableData) {
        validateParameterNotNullStandardMessage("customerModel", customerModel);
        validateParameterNotNullStandardMessage("quoteUserModel", quoteUserModel);
        validateParameterNotNullStandardMessage("store", store);
        validateParameterNotNullStandardMessage("pageableData", pageableData);
        return getCommerceQuoteDao().findQuotesByCustomerAndStore(customerModel, store, pageableData,
                getQuoteStateSelectionStrategy().getAllowedStatesForAction(QuoteAction.VIEW, quoteUserModel));
    }

    @Override
    public QuoteModel getQuoteByCodeAndCustomerAndStore(final CustomerModel customerModel,
                                                        final UserModel quoteUserModel, final BaseStoreModel store, final String quoteCode) {
        validateParameterNotNullStandardMessage("customerModel", customerModel);
        validateParameterNotNullStandardMessage("quoteUserModel", quoteUserModel);
        validateParameterNotNullStandardMessage("quoteCode", quoteCode);
        validateParameterNotNullStandardMessage("store", store);

        return getCommerceQuoteDao().findUniqueQuoteByCodeAndCustomerAndStore(customerModel, store, quoteCode,
                getQuoteStateSelectionStrategy().getAllowedStatesForAction(QuoteAction.VIEW, quoteUserModel));
    }

    protected void validateListNotEmpty(final Collection paramToCheck, final String unknownIdException) {
        if (CollectionUtils.isEmpty(paramToCheck)) {
            throw new UnknownIdentifierException(unknownIdException);
        }
    }

    @Override
    public Set<QuoteAction> getAllowedActions(final QuoteModel quoteModel, final UserModel userModel) {
        validateParameterNotNullStandardMessage("quoteModel", quoteModel);
        return getQuoteStateSelectionStrategy().getAllowedActionsForState(quoteModel.getState(), userModel);
    }

    @Override
    public CartModel acceptAndPrepareCheckout(final QuoteModel quoteModel, final UserModel userModel) {
        validateParameterNotNullStandardMessage("quoteModel", quoteModel);
        validateParameterNotNullStandardMessage("userModel", quoteModel);
        if (getQuoteExpirationTimeValidationStrategy().hasQuoteExpired(quoteModel)) {
            final QuoteModel expiredQuoteModel = getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.EXPIRED,
                    quoteModel, userModel);
            getModelService().save(expiredQuoteModel);
            getModelService().refresh(expiredQuoteModel);

            throw new CommerceQuoteExpirationTimeException(
                    String.format("Quote has expired. Quote Code : [%s].", expiredQuoteModel.getCode()));
        }
        getQuoteActionValidationStrategy().validate(QuoteAction.CHECKOUT, quoteModel, userModel);

        if (quoteModel.getCartReference() != null
                && !getQuoteCartValidationStrategy().validate(quoteModel, quoteModel.getCartReference())) {
            removeQuoteCart(quoteModel);
        }
        return updateAndLoadQuoteCartWithAction(quoteModel, QuoteAction.CHECKOUT, userModel);
    }

    @Override
    public void applyQuoteDiscount(final AbstractOrderModel abstractOrderModel, final UserModel userModel,
                                   final Double discountRate, final DiscountType discountType) {
        validateParameterNotNullStandardMessage("abstractOrderModel", abstractOrderModel);
        validateParameterNotNullStandardMessage("user", userModel);
        validateParameterNotNullStandardMessage("discountRate", discountRate);
        validateParameterNotNullStandardMessage("discountType", discountType);

        QuoteModel quoteModel = null;
        if (abstractOrderModel instanceof CartModel) {
            validateQuoteCart((CartModel) abstractOrderModel);
            quoteModel = ((CartModel) abstractOrderModel).getQuoteReference();
        } else if (abstractOrderModel instanceof QuoteModel) {
            quoteModel = (QuoteModel) abstractOrderModel;
        } else {
            throw new IllegalArgumentException(
                    "The abstract order model is neither a quote model nor a cart model created from quote model.");
        }

        getQuoteActionValidationStrategy().validate(QuoteAction.DISCOUNT, quoteModel, userModel);
        validateDiscountRate(discountRate, discountType, abstractOrderModel);
        boolean isCalculationRequired = CollectionUtils
                .isNotEmpty(getOrderQuoteDiscountValuesAccessor().getQuoteDiscountValues(abstractOrderModel));

        final List<DiscountValue> discountList = getCommerceQuoteUtils()
                .removeExistingQuoteDiscount(abstractOrderModel);

        try {
            if (discountRate.doubleValue() > EPSILON) {
                isCalculationRequired = true;
                final DiscountValue discountValue = createDiscountValue(discountRate, discountType,
                        abstractOrderModel.getCurrency().getIsocode()).orElseThrow(
                        () -> new IllegalArgumentException("Discount type cannot be created or supported"));

                discountList.add(discountValue);
                abstractOrderModel.setGlobalDiscountValues(discountList);
                getOrderQuoteDiscountValuesAccessor().setQuoteDiscountValues(abstractOrderModel,
                        Collections.singletonList(discountValue)); // keep track of the quote discount
            }

            // calculate if existing ones have been removed and/or new ones have been added
            if (isCalculationRequired) {
                getCalculationService().calculateTotals(abstractOrderModel, true);
                getModelService().save(abstractOrderModel);
            }
        } catch (final CalculationException e) {
            LOG.error("Failed to calculate cart [{}]", abstractOrderModel.getCode(), e);
            throw new SystemException(
                    "Could not calculate cart [" + abstractOrderModel.getCode() + "] due to : " + e.getMessage(), e);
        }
    }

    protected void validateDiscountRate(final Double discountRate, final DiscountType discountType,
                                        final AbstractOrderModel abstractOrderModel) {
        final double rate = discountRate.doubleValue();

        if (DoubleMath.fuzzyCompare(rate, 0, EPSILON) < 0) {
            throw new IllegalArgumentException("The discount rate is less then 0!");
        }
        if (DiscountType.PERCENT.equals(discountType) && (DoubleMath.fuzzyCompare(rate, 100, EPSILON) > 0)) {
            throw new IllegalArgumentException("Discount type is percent, but the discount rate is greater than 100!");
        }
        if (DiscountType.ABSOLUTE.equals(discountType)
                && DoubleMath.fuzzyCompare(rate, abstractOrderModel.getSubtotal().doubleValue(), EPSILON) > 0) {
            throw new IllegalArgumentException(
                    String.format("Discount type is absolute, but the discont rate is greater than cart total [%s]!",
                            abstractOrderModel.getTotalPrice()));
        }
    }

    @Override
    public void cancelQuote(final QuoteModel quoteModel, final UserModel userModel) {
        final QuoteModel quoteToCancel = quoteModel;
        validateParameterNotNullStandardMessage("quoteModel", quoteToCancel);
        validateParameterNotNullStandardMessage("userModel", userModel);
        CartModel cartModel = null;
        cartModel = quoteModel.getCartReference();
        cartModel.setName("");
        cartModel.setQuoteReference(null);
        quoteToCancel.setName("");
        quoteToCancel.setCartReference(null);
        // getQuoteActionValidationStrategy().validate(QuoteAction.CANCEL,
        // quoteToCancel, userModel);
        //
        // if (isSessionQuoteSameAsRequestedQuote(quoteToCancel))
        // {
        // final Optional<CartModel> optionalCart =
        // Optional.ofNullable(getCartService().getSessionCart());
        // if (optionalCart.isPresent())
        // {
        // quoteToCancel = updateQuoteFromCartInternal(optionalCart.get());
        // removeQuoteCart(quoteToCancel);
        // }
        // }

        // quoteToCancel =
        // getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.CANCEL,
        // quoteToCancel, userModel);
        getModelService().save(cartModel);
        getModelService().refresh(cartModel);
        getModelService().save(quoteToCancel);
        getModelService().refresh(quoteToCancel);

        // getEventService().publishEvent(
        // new QuoteCancelEvent(quoteToCancel, userModel,
        // getQuoteUserTypeIdentificationStrategy().getCurrentQuoteUserType(
        // userModel).get()));
    }

    @Override
    public void assignQuoteToUser(final QuoteModel quote, final UserModel assignee, final UserModel assigner) {
        validateParameterNotNullStandardMessage("quote", quote);
        validateParameterNotNullStandardMessage("assignee", assignee);
        validateParameterNotNullStandardMessage("assigner", assigner);

        getQuoteAssignmentValidationStrategy().validateQuoteAssignment(quote, assignee, assigner);

        final String errorMsg = String.format("An exception occured, could not assign quote code:%s to user:%s",
                quote.getCode(), assignee.getUid());
        executeQuoteAssignment(quote, assignee, errorMsg);
    }

    @Override
    public void unassignQuote(final QuoteModel quote, final UserModel assigner) {
        validateParameterNotNullStandardMessage("quote", quote);
        validateParameterNotNullStandardMessage("assigner", assigner);

        getQuoteAssignmentValidationStrategy().validateQuoteUnassignment(quote, assigner);

        final String errorMsg = String.format("An exception occured, could not un-assign quote code:%s",
                quote.getCode());
        executeQuoteAssignment(quote, null, errorMsg);
    }

    @Override
    public boolean shouldAutoApproveTheQuoteForSellerApproval(final QuoteModel quoteModel) {
        return getQuoteSellerApproverAutoApprovalStrategy().shouldAutoApproveQuote(quoteModel);
    }

    @Override
    public Integer getQuotesCountForStoreAndUser(final CustomerModel customerModel, final UserModel quoteUserModel,
                                                 final BaseStoreModel store) {
        validateParameterNotNullStandardMessage("customerModel", customerModel);
        validateParameterNotNullStandardMessage("quoteUserModel", quoteUserModel);
        validateParameterNotNullStandardMessage("store", store);
        return getUserService().isAnonymousUser(quoteUserModel) ? Integer.valueOf(0)
                : getCommerceQuoteDao().getQuotesCountForCustomerAndStore(customerModel, store,
                getQuoteStateSelectionStrategy().getAllowedStatesForAction(QuoteAction.VIEW, quoteUserModel));
    }

    @Override
    public boolean isQuoteCartValidForCheckout(final CartModel cart) {
        if (cart.getQuoteReference() == null) {
            return false;
        }
        return getQuoteCartValidationStrategy().validate(cart, cart.getQuoteReference());
    }

    @Override
    public QuoteModel createQuoteSnapshotWithState(final QuoteModel quoteModel, final QuoteState quoteState) {
        final QuoteModel updatedQuote = getQuoteService().createQuoteSnapshot(quoteModel, quoteState);
        getModelService().save(updatedQuote);
        return updatedQuote;
    }

    protected QuoteModel updateQuoteFromCartInternal(final CartModel cartModel) {
        final QuoteModel outdatedQuote = cartModel.getQuoteReference();
        final QuoteModel updatedQuote = getUpdateQuoteFromCartStrategy().updateQuoteFromCart(cartModel);

        return saveUpdate(cartModel, outdatedQuote, updatedQuote);
    }

    protected void executeQuoteAssignment(final QuoteModel quote, final UserModel assignee, final String errorMsg) {
        if (Config.isHSQLDBUsed()) {
            setAssigneeOnQuote(quote, assignee);
        } else {
            try {
                Transaction.current().execute(new TransactionBody() {
                    @Override
                    public Object execute() throws Exception {
                        getModelService().lock(quote.getPk());
                        setAssigneeOnQuote(quote, assignee);
                        return null;
                    }
                });
            } catch (final Exception e) {
                throw new IllegalStateException(errorMsg, e);
            }
        }

    }

    protected void setAssigneeOnQuote(final QuoteModel quote, final UserModel assignee) {
        quote.setAssignee(assignee);
        getModelService().save(quote);
    }

    protected QuoteModel saveUpdate(final CartModel cart, final QuoteModel outdatedQuote,
                                    final QuoteModel updatedQuote) {
        try {
            final Transaction tx = Transaction.current();
            tx.setTransactionIsolationLevel(Connection.TRANSACTION_READ_COMMITTED);
            return (QuoteModel) tx.execute(new TransactionBody() {
                @Override
                public QuoteModel execute() throws Exception {
                    getModelService().remove(outdatedQuote);
                    getModelService().saveAll(updatedQuote, cart);
                    return updatedQuote;
                }
            });
        } catch (final Exception e) {
            throw new SystemException(
                    String.format("Updating quote with code [%s] and version [%s] from cart [%s] failed.",
                            outdatedQuote.getCode(), outdatedQuote.getVersion(), cart.getCode()),
                    e);
        }
    }

    protected Optional<DiscountValue> createDiscountValue(final Double discountRate, final DiscountType discountType,
                                                          final String currencyIsoCode) {
        DiscountValue discountValue = null;

        if (DiscountType.PERCENT.equals(discountType)) {
            discountValue = DiscountValue.createRelative(CommerceServicesConstants.QUOTE_DISCOUNT_CODE, discountRate);
        } else if (DiscountType.ABSOLUTE.equals(discountType)) {
            discountValue = DiscountValue.createAbsolute(CommerceServicesConstants.QUOTE_DISCOUNT_CODE, discountRate,
                    currencyIsoCode);
        } else if (DiscountType.TARGET.equals(discountType)) {
            discountValue = DiscountValue.createTargetPrice(CommerceServicesConstants.QUOTE_DISCOUNT_CODE, discountRate,
                    currencyIsoCode);
        }

        return (discountType == null || discountValue == null) ? Optional.empty() : Optional.of(discountValue);
    }

    protected boolean isSessionQuoteSameAsRequestedQuote(final QuoteModel quoteModel) {
        final Optional<QuoteModel> quoteFromSessionCart = getQuoteFromSessionCart();
        return quoteFromSessionCart.isPresent()
                && StringUtils.equals(quoteFromSessionCart.get().getCode(), quoteModel.getCode())
                && quoteFromSessionCart.get().getVersion().equals(quoteModel.getVersion());
    }

    protected void validateQuoteCart(final CartModel cartModel) {
        if (cartModel.getQuoteReference() == null) {
            throw new IllegalArgumentException("The cart is not associated to a quote.");
        }
    }

    protected CommerceQuoteDao getCommerceQuoteDao() {
        return commerceQuoteDao;
    }

    
    public void setCommerceQuoteDao(final CommerceQuoteDao commerceQuoteDao) {
        this.commerceQuoteDao = commerceQuoteDao;
    }

    protected CartService getCartService() {
        return cartService;
    }

    
    public void setCartService(final CartService cartService) {
        this.cartService = cartService;
    }

    protected ModelService getModelService() {
        return modelService;
    }

    
    public void setModelService(final ModelService modelService) {
        this.modelService = modelService;
    }

    protected CommerceSaveCartService getCommerceSaveCartService() {
        return commerceSaveCartService;
    }

    
    public void setCommerceSaveCartService(final CommerceSaveCartService commerceSaveCartService) {
        this.commerceSaveCartService = commerceSaveCartService;
    }

    protected SessionService getSessionService() {
        return sessionService;
    }

    
    public void setSessionService(final SessionService sessionService) {
        this.sessionService = sessionService;
    }

    protected CommerceCartService getCommerceCartService() {
        return commerceCartService;
    }

    
    public void setCommerceCartService(final CommerceCartService commerceCartService) {
        this.commerceCartService = commerceCartService;
    }

    protected QuoteStateSelectionStrategy getQuoteStateSelectionStrategy() {
        return quoteStateSelectionStrategy;
    }

    
    public void setQuoteStateSelectionStrategy(final QuoteStateSelectionStrategy quoteStateSelectionStrategy) {
        this.quoteStateSelectionStrategy = quoteStateSelectionStrategy;
    }

    protected QuoteActionValidationStrategy getQuoteActionValidationStrategy() {
        return quoteActionValidationStrategy;
    }

    
    public void setQuoteActionValidationStrategy(final QuoteActionValidationStrategy quoteActionValidationStrategy) {
        this.quoteActionValidationStrategy = quoteActionValidationStrategy;
    }

    protected QuoteUpdateStateStrategy getQuoteUpdateStateStrategy() {
        return quoteUpdateStateStrategy;
    }

    
    public void setQuoteUpdateStateStrategy(final QuoteUpdateStateStrategy quoteUpdateStateStrategy) {
        this.quoteUpdateStateStrategy = quoteUpdateStateStrategy;
    }

    protected CalculationService getCalculationService() {
        return calculationService;
    }

    
    public void setCalculationService(final CalculationService calculationService) {
        this.calculationService = calculationService;
    }

    protected QuoteService getQuoteService() {
        return quoteService;
    }

    
    public void setQuoteService(final QuoteService quoteService) {
        this.quoteService = quoteService;
    }

    protected UpdateQuoteFromCartStrategy getUpdateQuoteFromCartStrategy() {
        return updateQuoteFromCartStrategy;
    }

    
    public void setUpdateQuoteFromCartStrategy(final UpdateQuoteFromCartStrategy updateQuoteFromCartStrategy) {
        this.updateQuoteFromCartStrategy = updateQuoteFromCartStrategy;
    }

    protected QuoteAssignmentValidationStrategy getQuoteAssignmentValidationStrategy() {
        return quoteAssignmentValidationStrategy;
    }

    
    public void setQuoteAssignmentValidationStrategy(
            final QuoteAssignmentValidationStrategy quoteAssignmentValidationStrategy) {
        this.quoteAssignmentValidationStrategy = quoteAssignmentValidationStrategy;
    }

    protected Map<QuoteState, QuoteState> getQuoteSnapshotStateTransitionMap() {
        return quoteSnapshotStateTransitionMap;
    }

    
    public void setQuoteSnapshotStateTransitionMap(final Map<QuoteState, QuoteState> quoteSnapshotStateTransitionMap) {
        this.quoteSnapshotStateTransitionMap = quoteSnapshotStateTransitionMap;
    }

    
    protected QuoteUserTypeIdentificationStrategy getQuoteUserTypeIdentificationStrategy() {
        return quoteUserTypeIdentificationStrategy;
    }

    public void setQuoteUserTypeIdentificationStrategy(
            final QuoteUserTypeIdentificationStrategy quoteUserTypeIdentificationStrategy) {
        this.quoteUserTypeIdentificationStrategy = quoteUserTypeIdentificationStrategy;
    }

    protected EventService getEventService() {
        return eventService;
    }

    
    public void setEventService(final EventService eventService) {
        this.eventService = eventService;
    }

    protected QuoteSellerApproverAutoApprovalStrategy getQuoteSellerApproverAutoApprovalStrategy() {
        return quoteSellerApproverAutoApprovalStrategy;
    }

    
    public void setQuoteSellerApproverAutoApprovalStrategy(
            final QuoteSellerApproverAutoApprovalStrategy quoteSellerApproverAutoApprovalStrategy) {
        this.quoteSellerApproverAutoApprovalStrategy = quoteSellerApproverAutoApprovalStrategy;
    }

    protected QuoteCartValidationStrategy getQuoteCartValidationStrategy() {
        return quoteCartValidationStrategy;
    }

    
    public void setQuoteCartValidationStrategy(final QuoteCartValidationStrategy quoteCartValidationStrategy) {
        this.quoteCartValidationStrategy = quoteCartValidationStrategy;
    }

    protected OrderQuoteDiscountValuesAccessor getOrderQuoteDiscountValuesAccessor() {
        return orderQuoteDiscountValuesAccessor;
    }

    
    public void setOrderQuoteDiscountValuesAccessor(
            final OrderQuoteDiscountValuesAccessor orderQuoteDiscountValuesAccessor) {
        this.orderQuoteDiscountValuesAccessor = orderQuoteDiscountValuesAccessor;
    }

    protected QuoteUpdateExpirationTimeStrategy getQuoteUpdateExpirationTimeStrategy() {
        return quoteUpdateExpirationTimeStrategy;
    }

    
    public void setQuoteUpdateExpirationTimeStrategy(
            final QuoteUpdateExpirationTimeStrategy quoteUpdateExpirationTimeStrategy) {
        this.quoteUpdateExpirationTimeStrategy = quoteUpdateExpirationTimeStrategy;
    }

    protected QuoteMetadataValidationStrategy getQuoteMetadataValidationStrategy() {
        return quoteMetadataValidationStrategy;
    }

    
    public void setQuoteMetadataValidationStrategy(
            final QuoteMetadataValidationStrategy quoteMetadataValidationStrategy) {
        this.quoteMetadataValidationStrategy = quoteMetadataValidationStrategy;
    }

    protected QuoteExpirationTimeValidationStrategy getQuoteExpirationTimeValidationStrategy() {
        return quoteExpirationTimeValidationStrategy;
    }

    
    public void setQuoteExpirationTimeValidationStrategy(
            final QuoteExpirationTimeValidationStrategy quoteExpirationTimeValidationStrategy) {
        this.quoteExpirationTimeValidationStrategy = quoteExpirationTimeValidationStrategy;
    }

    protected UserService getUserService() {
        return userService;
    }

    
    public void setUserService(final UserService userService) {
        this.userService = userService;
    }

    protected CommerceQuoteUtils getCommerceQuoteUtils() {
        return commerceQuoteUtils;
    }

    
    public void setCommerceQuoteUtils(final CommerceQuoteUtils commerceQuoteUtils) {
        this.commerceQuoteUtils = commerceQuoteUtils;
    }

    protected RequoteStrategy getRequoteStrategy() {
        return requoteStrategy;
    }

    
    public void setRequoteStrategy(final RequoteStrategy requoteStrategy) {
        this.requoteStrategy = requoteStrategy;
    }

    /**
     * @param userName
     * @param company
     * @param contactNumber
     * @param emailAddress
     * @param address1
     * @param address2
     * @param country
     * @param region
     * @param postalCode
     * @param city
     * @param emailtype
     * @param quoteModel
     * @param userModel
     */

    @Override
    public void submitQuoteFrom(final String userName, final String company, final String contactNumber,
                                final String emailAddress, final String address1, final String address2, final String country,
                                final String region, final String postalCode, final String city, final String emailtype,
                                final QuoteModel quoteModel, final UserModel userModel, final String description,
                                final BHGEShippingAddressFormData bhgeAddressFormData) {
        validateParameterNotNullStandardMessage("quoteModel", quoteModel);
        validateParameterNotNullStandardMessage("userModel", userModel);

        getQuoteActionValidationStrategy().validate(QuoteAction.SUBMIT, quoteModel, userModel);

        QuoteModel updatedQuoteModel = isSessionQuoteSameAsRequestedQuote(quoteModel)
                ? updateQuoteFromCart(getCartService().getSessionCart(), userModel)
                : quoteModel;
        validateQuoteTotal(updatedQuoteModel);

        getQuoteMetadataValidationStrategy().validate(QuoteAction.SUBMIT, updatedQuoteModel, userModel);

        updatedQuoteModel = getQuoteUpdateExpirationTimeStrategy().updateExpirationTime(QuoteAction.SUBMIT,
                updatedQuoteModel, userModel);
        updatedQuoteModel = getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.SUBMIT, updatedQuoteModel,
                userModel);
        updatedQuoteModel.setUserName(userName);
        updatedQuoteModel.setCompany(company);
        updatedQuoteModel.setContactNumber(contactNumber);
        updatedQuoteModel.setDescription(description);
        final String[] email = emailAddress.split(",");
        updatedQuoteModel.setEmailAddress(email[0]);
        updatedQuoteModel.setAddress1(address1);
        updatedQuoteModel.setAddress2(address2);
        updatedQuoteModel.setEmailtype(emailtype);
        if (country != null) {
            final List<CountryModel> countries = countryDao.findCountriesByCode(country);
            if (countries != null) {
                updatedQuoteModel.setCountry(countries.get(0));
            }
        }
        if (region != null) {
            final RegionModel regionModel = bhgeRegionService.getRegionByCountryAndCode(country, region);
            if (regionModel != null) {
                updatedQuoteModel.setRegion(regionModel);
            }
        }
        updatedQuoteModel.setCity(city);
        updatedQuoteModel.setPostalCode(postalCode);
        // Create and save end user address on quote
        createAndSaveEnduserAddressOnQuote(bhgeAddressFormData, updatedQuoteModel);
        getModelService().save(updatedQuoteModel);
        getModelService().refresh(updatedQuoteModel);

        final QuoteUserType quoteUserType = getQuoteUserTypeIdentificationStrategy().getCurrentQuoteUserType(userModel)
                .get();
        if (QuoteUserType.BUYER.equals(quoteUserType)) {
            final QuoteBuyerSubmitEvent quoteBuyerSubmitEvent = new QuoteBuyerSubmitEvent(updatedQuoteModel, userModel,
                    quoteUserType);
            getEventService().publishEvent(quoteBuyerSubmitEvent);
        } else if (QuoteUserType.SELLER.equals(quoteUserType)) {
            final QuoteSalesRepSubmitEvent quoteSalesRepSubmitEvent = new QuoteSalesRepSubmitEvent(updatedQuoteModel,
                    userModel, quoteUserType);
            getEventService().publishEvent(quoteSalesRepSubmitEvent);
        }
    }


    @Override
    public void submitQuoteFromforWS(final String userName, final String company, final String contactNumber,
                                     final String emailAddress, final String address1, final String address2, final String country,
                                     final String region, final String postalCode, final String city, final String emailtype,
                                     final QuoteModel quoteModel, final UserModel userModel, final String description,
                                     final BHGEShippingAddressFormData bhgeAddressFormData) {
        validateParameterNotNullStandardMessage("quoteModel", quoteModel);
        validateParameterNotNullStandardMessage("userModel", userModel);

        getQuoteActionValidationStrategy().validate(QuoteAction.SUBMIT, quoteModel, userModel);

        QuoteModel updatedQuoteModel = quoteModel.getCartReference() != null
                ? updateQuoteFromCart(quoteModel.getCartReference(), userModel)
                : quoteModel;
        validateQuoteTotal(updatedQuoteModel);

        getQuoteMetadataValidationStrategy().validate(QuoteAction.SUBMIT, updatedQuoteModel, userModel);

        updatedQuoteModel = getQuoteUpdateExpirationTimeStrategy().updateExpirationTime(QuoteAction.SUBMIT,
                updatedQuoteModel, userModel);
        updatedQuoteModel = getQuoteUpdateStateStrategy().updateQuoteState(QuoteAction.SUBMIT, updatedQuoteModel,
                userModel);
        updatedQuoteModel.setUserName(userName);
        updatedQuoteModel.setCompany(company);
        updatedQuoteModel.setContactNumber(contactNumber);
        updatedQuoteModel.setDescription(description);
        final String[] email = emailAddress.split(",");
        updatedQuoteModel.setEmailAddress(email[0]);
        updatedQuoteModel.setAddress1(address1);
        updatedQuoteModel.setAddress2(address2);
        updatedQuoteModel.setEmailtype(emailtype);
        if (country != null) {
            final List<CountryModel> countries = countryDao.findCountriesByCode(country);
            if (countries != null) {
                updatedQuoteModel.setCountry(countries.get(0));
            }
        }
        if (region != null) {
            final RegionModel regionModel = bhgeRegionService.getRegionByCountryAndCode(country, region);
            if (regionModel != null) {
                updatedQuoteModel.setRegion(regionModel);
            }
        }
        updatedQuoteModel.setCity(city);
        updatedQuoteModel.setPostalCode(postalCode);
        // Create and save end user address on quote
        createAndSaveEnduserAddressOnQuote(bhgeAddressFormData, updatedQuoteModel);
        getModelService().save(updatedQuoteModel);
        getModelService().refresh(updatedQuoteModel);

        final QuoteUserType quoteUserType = getQuoteUserTypeIdentificationStrategy().getCurrentQuoteUserType(userModel)
                .get();
        if (QuoteUserType.BUYER.equals(quoteUserType)) {
            final QuoteBuyerSubmitEvent quoteBuyerSubmitEvent = new QuoteBuyerSubmitEvent(updatedQuoteModel, userModel,
                    quoteUserType);
            getEventService().publishEvent(quoteBuyerSubmitEvent);
        } else if (QuoteUserType.SELLER.equals(quoteUserType)) {
            final QuoteSalesRepSubmitEvent quoteSalesRepSubmitEvent = new QuoteSalesRepSubmitEvent(updatedQuoteModel,
                    userModel, quoteUserType);
            getEventService().publishEvent(quoteSalesRepSubmitEvent);
        }
    }

    /**
     * Create and saves end user address on Quote
     *
     * @param bhgeAddressFormData
     * @param quoteModel
     */
    protected void createAndSaveEnduserAddressOnQuote(final BHGEShippingAddressFormData bhgeAddressFormData,
                                                      final QuoteModel quoteModel) {

        final UserModel user = userService.getCurrentUser();
        final AddressModel endUserAddress = modelService.create(AddressModel.class);
        CountryModel countryModel = null;

        endUserAddress.setStreetnumber(bhgeAddressFormData.getLine2());
        endUserAddress.setStreetname(bhgeAddressFormData.getLine1());
        endUserAddress.setTown(bhgeAddressFormData.getTown());
        endUserAddress.setPostalcode(bhgeAddressFormData.getPostalCode());
        endUserAddress.setOwner(user);
        endUserAddress.setEndUserType(bhgeAddressFormData.getEndUserType());
        if (null != bhgeAddressFormData.getCountry()
                && StringUtils.isNotEmpty(bhgeAddressFormData.getCountry().getIsocode())) {
            countryModel = getCommonI18NService().getCountry(bhgeAddressFormData.getCountry().getIsocode());
            endUserAddress.setCountry(countryModel);
        }

        if (null != countryModel && null != bhgeAddressFormData.getRegion()
                && StringUtils.isNotEmpty(bhgeAddressFormData.getRegion().getIsocode())) {
            final RegionModel regionModel = getCommonI18NService().getRegion(countryModel,
                    bhgeAddressFormData.getRegion().getIsocode());
            endUserAddress.setRegion(regionModel);
        }

        endUserAddress.setCompany(bhgeAddressFormData.getCompanyName());
        quoteModel.setRMAEndUserAddress(endUserAddress);
        modelService.save(quoteModel);

    }

    public MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
                                 final String contentType) throws Exception {
        try {
            final InputStream inputStream = file.getInputStream();
            mediaService.setStreamForMedia(mediaModel, inputStream, originalFileName, contentType);

        } catch (final Exception e) {
            LOG.error("Exception while uploading media{}", e.getMessage());
        }
        return mediaModel;
    }

    @Override
    public MediaModel uploadQuoteAttachmentWs(QuoteModel quoteModel, final MultipartFile file) {
        try {
            final MediaModel mediaModel = new MediaModel();
            final MediaFolderModel mediaFolder = mediaService
                    .getFolder(Config.getString("awss3userdata", "customerdata"));
            mediaModel.setFolder(mediaFolder);

            String mediaName = null;
            final String contentType = file.getContentType();
            String fileExtension = MediaUtil.getFileExtension(file.getOriginalFilename());
            mediaName = mediaCodeGenerator.generate().toString();
            // shortening file name as SAP is not accepting files with large name
            String shortFileName = StringUtils.substring(file.getOriginalFilename(), 0,
                    Config.getInt("attachmentFleNameLength", 20));
            if (!shortFileName.toLowerCase().endsWith("." + fileExtension.toLowerCase())) {
                shortFileName += "." + fileExtension;
            }
            mediaModel.setRealFileName(shortFileName);
            mediaModel.setCode(mediaName);
            // POC mandates catalog version for media.
            final CatalogVersionModel versions = catalogVersionService
                    .getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG, "Online");
            mediaModel.setCatalogVersion(versions);

            getModelService().save(mediaModel);
            final MediaModel quoteAttachmentFile = uploadFile(file, mediaModel, shortFileName, contentType);
            // Code for saving the attachment in quote
            final QuoteModel currentQuote = quoteModel;
//			currentQuote.setAdditionalDocs(quoteAttachmentFile);
            final List<MediaModel> finalList = new ArrayList<MediaModel>();
            if(currentQuote.getAttachments().size()>0)
            {
                currentQuote.setAttachments(null);
            }
            finalList.add(quoteAttachmentFile);
            CartModel cart=currentQuote.getCartReference();
            cart.setAttachments(finalList);
            getModelService().save(cart);
            currentQuote.setAttachments(finalList);
            currentQuote.setIsAttachmentMoved(false);
            getModelService().save(currentQuote);
            return mediaModel;
        } catch (final Exception e) {
            LOG.error("Exception while uploading file:{}", e.getMessage());
        }
        return null;
    }

    @Override
    public boolean replicateQuote(QuoteModel quote) {
        boolean quoteReplicated = false;

        if (quote == null || StringUtils.isBlank(quote.getCode())) {
            LOG.error("Invalid quote provided for replication.");
            return false;
        }

        try {
            String quoteCreationRequestXml = prepareQuoteRequest(quote);
            final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_QUOTE_CREATION_URL, flexibleSearchService);

            if (StringUtils.isBlank(scpiEndpointUrl)) {
                LOG.error("SCPI endpoint URL is not configured.");
                return false;
            }

            BHGEZQuoteCreationResponse quoteCreationResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, quoteCreationRequestXml, BHGEZQuoteCreationResponse.class);

            if (null != quoteCreationResponse) {
                BHGEQuoteReturnTable returnMsg = quoteCreationResponse.getReturnTable();
                if (null != returnMsg.getItems()) {
                    for (BHGEQuoteReturn item : returnMsg.getItems()) {
                        if (StringUtils.equalsIgnoreCase(item.getType(), "S")) {
                            LOG.info("Quote replicated successfully. Sales Document: {}", item.getMessage());
                            quoteReplicated = true;
                            quote.setState(QuoteState.SUBMITTED);
                        } else if (StringUtils.equalsIgnoreCase(item.getType(), "E")
                                && !StringUtils.equalsIgnoreCase(item.getId(), "V4") ) {
                            LOG.error("US530529: Error replicating quote. Message: {}", item.getMessage());
                            quoteReplicated = true;
                            quote.setErpFailureReason(item.getMessage());
                            quote.setState(QuoteState.PROCESSING_ERROR);
                            break;
                        } else {
                            LOG.error("US530529: Error replicating quote. Message: {}", item.getMessage());
                            quoteReplicated = false;
                            quote.setErpFailureReason("ERP Connectivity Error");
                            quote.setState(QuoteState.ERROR);
                        }
                    }
                }
            } else {
                quote.setState(QuoteState.ERROR);
                LOG.error("SCPI response is null or invalid for quote: {}", quote.getCode());
            }
            getModelService().save(quote);
            getModelService().refresh(quote);
        } catch (Exception e) {
            LOG.error("Unexpected error while replicating quote: {}. Error: {}", quote.getCode(), e.getMessage(), e);
        }
        return quoteReplicated;
    }

    @Override
    public List<QuoteModel> getPendingQuotes() {
        return bhgeCommerceQuoteDao.getPendingQuotes();
    }

    @Override
    public boolean quoteAttachment(QuoteModel quote) {
        boolean attachmentUploaded = false;
        try {
            LOG.info("US530529: Inside quoteAttachment");
            siteService.setCurrentBaseSite(siteService.getBaseSiteForUID(Config.getString("GEEDGE_BASE_SITE", "bhge")), false);
            final JCoConnection connectionObj = sapJcoContainer.getRFCConnection();
            if ( null != connectionObj ) {
                attachmentUploaded = bhgeSAPOrderAttachmentService.submitQuoteAttachmentToSCPI(quote);
            }
        } catch (Exception e) {
            LOG.error("US530529: Exception while uploading quote attachment: {}", e.getMessage());
        }
        return attachmentUploaded;
    }

    @Override
    public QuoteModel getQuoteByCode(String quoteCode) {
        return bhgeCommerceQuoteDao.getQuoteByCode(quoteCode);
    }

    @Override
    public boolean isQuoteConverted(QuoteModel quote, OrderModel order) {
        boolean quoteConvertedToOrder = false;
        try {
            if (quote != null && order != null) {
                String quoteConversionXML = prepareQuoteConversionRequest(quote, order);
                final String scpiEndpointUrl = BHGECommonsUtil.getValueFromBHGEGlobalProperties(SCPI_ZHYB_QUOTE_CONVERSION_URL, flexibleSearchService);
                if (StringUtils.isBlank(scpiEndpointUrl)) {
                    LOG.error("SCPI endpoint URL is not configured.");
                    return false;
                }

                BHGEZQuoteConversionResponse quoteConversionResponse = scpiConnector.sendPostCallToSCPI_CloudNEO(scpiEndpointUrl, quoteConversionXML, BHGEZQuoteConversionResponse.class);
                if (null != quoteConversionResponse) {
                    LOG.info("US530529: Received Quote Conversion response {}", quoteConversionResponse);
                    BHGEZQuoteConversionReturnTable quoteToOrderReturnTable = quoteConversionResponse.getReturnMessages();
                    quoteConvertedToOrder = true;
                    if (null != quoteToOrderReturnTable.getItems()) {
                        for (BHGEZQuoteConversionReturn item : quoteToOrderReturnTable.getItems()) {
                            if (StringUtils.equalsIgnoreCase(item.getType(), "S")) {
                                LOG.info("Quote converted successfully. Sales Document: {}", item.getMessage());
                                quoteConvertedToOrder = true;
                                order.setStatus(OrderStatus.SUBMITTED);
                                order.setExportStatus(ExportStatus.EXPORTED);
                                quote.setState(QuoteState.ORDERED);
                            } else {
                                LOG.error("Error converting Quote Conversion. Message: {}", item.getMessage());
                                order.setStatus(OrderStatus.ERROR);

                                quoteConvertedToOrder = false;
                            }
                        }
                    }
                    modelService.save(order);
                    modelService.refresh(order);
                    modelService.save(quote);
                    modelService.refresh(quote);
                } else {
                    LOG.error("SCPI response is null or invalid for order: {}", order.getCode());
                }
            } else {
                LOG.error("Invalid quote or order provided for conversion.");
            }
        } catch (Exception e) {
            LOG.error("Unexpected error while converting quote to order: {}. Error: {}", quote.getCode(), e.getMessage(), e);
        }
        return quoteConvertedToOrder;
    }

    private String prepareQuoteConversionRequest(QuoteModel quote, OrderModel order) {
        BHGEZQuoteConversionRequest quoteConversionRequest = new BHGEZQuoteConversionRequest();
        prepareQuoteConversionHeader(quoteConversionRequest, order, quote);
        prepareQuoteConversionPartner(quoteConversionRequest, order);
        prepareQuoteConversionItems(quoteConversionRequest, order, quote.getCode());
        if (null != order.getBhgeCreditCardPaymentInfo()) {
            prepareQuoteConversionCCard(quoteConversionRequest, order.getBhgeCreditCardPaymentInfo());
        }
        //TODO : Add logic to set item price in request if required
        return SCPIConnector.toXML(quoteConversionRequest);
    }

    private void prepareQuoteConversionCCard(BHGEZQuoteConversionRequest quoteConversionRequest, BHGECreditCardPaymnentinfoModel ccPaymentInfo) {
        LOG.info("US530529: Inside Credit card Details");
        try {
            if (quoteConversionRequest.getCcItem() == null) {
                quoteConversionRequest.setCcItem(new BHGEZOrderBappiCard()); // Initialize ccItem if null
            }
            final BHGEZOrderBappiCard card = new BHGEZOrderBappiCard();
            card.setCcName(StringUtils.isNotBlank(ccPaymentInfo.getName()) ? ccPaymentInfo.getName() : "");
            card.setCcType(StringUtils.isNotBlank(ccPaymentInfo.getType()) ? ccPaymentInfo.getType() : "");
            card.setCcNumber(StringUtils.isNotBlank(ccPaymentInfo.getToken()) ? ccPaymentInfo.getToken() : "");
            setCardExpire(card, ccPaymentInfo);
            quoteConversionRequest.getCcItem().getItems().add(card);
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion CCard: {}", e.getMessage(), e);
        }
    }

    private void setCardExpire(BHGEZOrderBappiCard card, BHGECreditCardPaymnentinfoModel ccPaymentInfo) {
        try {
            if (StringUtils.isNotBlank(ccPaymentInfo.getValidTru())) {
                String ccValidTru = ccPaymentInfo.getValidTru() + "01";
                Calendar cal = Calendar.getInstance();
                DateTimeFormatter inputFormatter = DateTimeFormatter.ofPattern("yyyyMMdd");
                LocalDate locDate = LocalDate.parse(ccValidTru, inputFormatter);
                DateTimeFormatter outputFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
                ccValidTru = locDate.format(outputFormatter);
                card.setCcValidTru(ccValidTru);
            }
        } catch (Exception e) {
            LOG.error("US530529: Error while setting card expire date: {}", e.getMessage(), e);
        }
    }

    private void prepareQuoteConversionItems(BHGEZQuoteConversionRequest quoteToOrderRequest, OrderModel order, String quoteCode) {
        try {
            if (null != order && CollectionUtils.isNotEmpty(order.getEntries())){
                for (AbstractOrderEntryModel entry : order.getEntries()) {
                    BHGEZQuoteConversionItem quoteConversionItem = new BHGEZQuoteConversionItem();
                    prepareQuoteConversionItem(entry, quoteConversionItem, quoteCode);
                    quoteToOrderRequest.getOrderItems().getItems().add(quoteConversionItem);
                }
            }
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion Items: {}", e.getMessage(), e);
        }
    }

    private void prepareQuoteConversionItem(AbstractOrderEntryModel entry, BHGEZQuoteConversionItem quoteConversionItem, String quoteCode) {
        try{
            quoteConversionItem.setQuotNumber(quoteCode);
            quoteConversionItem.setMaterial(entry.getProduct().getCode());
            quoteConversionItem.setItmNumber(String.valueOf(entry.getEntryNumber()) + "00");
            quoteConversionItem.setServDate(formattedDate(entry.getRequestedDeliveryDate()));
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion Item: {}", e.getMessage(), e);
        }
    }

    private void prepareQuoteConversionPartner(BHGEZQuoteConversionRequest quoteToOrderRequest, OrderModel order) {
        quoteToOrderRequest.getPartnerTable().getItems().add(prepareQuoteToOrderSoldToAddress(order.getSoldToForCart()));
        quoteToOrderRequest.getPartnerTable().getItems().add(prepareQuoteToOrderPayerAddress(order));
        quoteToOrderRequest.getPartnerTable().getItems().add(prepareQuoteToOrderShipToAddress(order));
        quoteToOrderRequest.getPartnerTable().getItems().add(prepareQuoteToOrderBillingAddress(order));
        quoteToOrderRequest.getPartnerTable().getItems().add(prepareQuoteToOrderEndUserAddress(order));
    }

    private BHGEZQuoteConversionPartner prepareQuoteToOrderEndUserAddress(OrderModel order) {
        final BHGEZQuoteConversionPartner endUserAddress = new BHGEZQuoteConversionPartner();
        try {
            if (null != order.getRMAEndUserAddress()) {
                final AddressModel address = order.getRMAEndUserAddress();
                endUserAddress.setPartnerFunction(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
                endUserAddress.setCountry(address.getCountry().getIsocode());
                if (StringUtils.isNotBlank(address.getSapCustomerID())) {
                    endUserAddress.setPartnerNumber(address.getSapCustomerID());
                } else {
                    endUserAddress.setNewUserFlag("X");
                    endUserAddress.setName1(address.getStreetname());
                    endUserAddress.setName2(address.getStreetnumber());
                    endUserAddress.setCompName(address.getCompany());
                    endUserAddress.setCity(address.getTown());
                    endUserAddress.setRegion(address.getRegion().getIsocodeShort());
                    endUserAddress.setZip(address.getPostalcode());
                }
            }
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion End User Address: {}", e.getMessage(), e);
        }
        return endUserAddress;
    }

    private BHGEZQuoteConversionPartner prepareQuoteToOrderBillingAddress(OrderModel order) {
        final BHGEZQuoteConversionPartner billingAddress = new BHGEZQuoteConversionPartner();
        try {
            final B2BUnitModel soldToUnit = order.getSoldToForCart();
            final String soldToId = soldToUnit.getUid().split("_")[0];
            for (AddressModel address : soldToUnit.getAddresses()) {
                if (Boolean.TRUE.equals(address.getBillingAddress())
                        && StringUtils.equalsIgnoreCase(soldToId, address.getSapCustomerID())) {

                    billingAddress.setPartnerFunction(Config.getString("BILL_TO_PARTNER_FUNCTION", "BP"));
                    billingAddress.setCountry(address.getCountry().getIsocode());
                    billingAddress.setPartnerNumber(soldToId);
                    break;
                }
            }
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion Billing Address: {}", e.getMessage(), e);
        }
        return billingAddress;
    }

    private BHGEZQuoteConversionPartner prepareQuoteToOrderShipToAddress(OrderModel order) {
        final BHGEZQuoteConversionPartner shipToAddress = new BHGEZQuoteConversionPartner();
        try {
            if (null != order.getDeliveryAddress()) {
                final AddressModel address = order.getDeliveryAddress();
                shipToAddress.setPartnerFunction(Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));
                shipToAddress.setCountry(address.getCountry().getIsocode());
                if (StringUtils.isNotBlank(order.getDeliveryAddress().getSapCustomerID())) {
                    shipToAddress.setPartnerNumber(order.getDeliveryAddress().getSapCustomerID());
                } else {
                    shipToAddress.setCity(address.getTown());
                    shipToAddress.setRegion(address.getRegion().getIsocodeShort());
                    shipToAddress.setName1(address.getStreetname());
                    shipToAddress.setName2(address.getStreetnumber());
                    shipToAddress.setCompName(address.getCompany());
                    shipToAddress.setNewUserFlag("X");
                    shipToAddress.setZip(address.getPostalcode());
                }
            }
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion Ship To Address: {}", e.getMessage(), e);
        }
        return shipToAddress;
    }

    private BHGEZQuoteConversionPartner prepareQuoteToOrderPayerAddress(OrderModel order) {
        final BHGEZQuoteConversionPartner payerAddress = new BHGEZQuoteConversionPartner();
        try {
            if (null != order.getPayerAddress()) {
                payerAddress.setPartnerFunction(Config.getString("PAYER_PARTNER_FUNCTION", "RG"));
                payerAddress.setPartnerNumber(order.getSoldToForCart().getUid().split("_")[0]);
                payerAddress.setCountry(order.getPayerAddress().getCountry().getIsocode());
            }
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion Payer Address: {}", e.getMessage(), e);
        }
        return payerAddress;
    }

    private BHGEZQuoteConversionPartner prepareQuoteToOrderSoldToAddress(B2BUnitModel soldToForCart) {
        final BHGEZQuoteConversionPartner soldTOPartner = new BHGEZQuoteConversionPartner();
        try {
            if (null != soldToForCart && CollectionUtils.isNotEmpty(soldToForCart.getAddresses())) {
                for (AddressModel address : soldToForCart.getAddresses()) {
                    if (BooleanUtils.isTrue(address.getBillingAddress())) {
                        soldTOPartner.setPartnerNumber(soldToForCart.getUid().split("_")[0]);
                        soldTOPartner.setPartnerFunction(Config.getString("SOLD_TO_PARTNER_FUNCTION", "AG"));
                        soldTOPartner.setCountry(address.getCountry().getIsocode());
                    }
                }
            }
        } catch (Exception e) {
            LOG.error("US530529: Error while preparing Quote Conversion Sold To Address: {}", e.getMessage(), e);
        }
        return soldTOPartner;
    }

    private void prepareQuoteConversionHeader(BHGEZQuoteConversionRequest quoteToOrderRequest, OrderModel order, QuoteModel quote) {
        try {
            final BHGEZQuoteConversionHeader quoteToOrderHeader = new BHGEZQuoteConversionHeader();
            quoteToOrderHeader.setExtSoNumber(order.getCode());
            quoteToOrderHeader.setQuotation(quote.getCode());
            quoteToOrderHeader.setConversionIndCtr(QUOTE_CONVERSATION_INDICATOR);
            if (StringUtils.equalsIgnoreCase(order.getCartType().getCode(), GEEdgeCartType.NONFILM.getCode())) {
                quoteToOrderHeader.setDocumentType(GEOrderType.ZOR.getCode());
                quoteToOrderHeader.setReqDelDate(formattedDate(order.getReqHeaderDeliveryDate()));
            } else {
                quoteToOrderHeader.setDocumentType(GEOrderType.ZFLM.getCode());
                quoteToOrderHeader.setReqDelDate(formattedDate(order.getReqHeaderDeliveryDateFilm()));
            }
            quoteToOrderHeader.setPoDate(formattedDate(order.getCreationtime()));
            if (StringUtils.equalsIgnoreCase(order.getPaymentType().getCode(), CheckoutPaymentType.CARD.getCode())) {
                quoteToOrderHeader.setPoNumber(Config.getString("guest.cc.po.text", "Credit Card Order"));
            } else {
                quoteToOrderHeader.setPoNumber(order.getPurchaseOrderNumber());
            }
            quoteToOrderHeader.setShippingRemarks(order.getShippingRemarks());
            quoteToOrderHeader.setShipEmail(order.getShipNotificationEmail());
            quoteToOrderHeader.setInvoiceEmail(order.getInvoiceEmail());
            quoteToOrderHeader.setSoaEmail(order.getOrderConfirmationEMail());
            if (BooleanUtils.isTrue(order.getIsShipCompleteOrder())) {
                quoteToOrderHeader.setIsShipCompleteOrder("T");
            } else {
                quoteToOrderHeader.setIsShipCompleteOrder("F");
            }
            quoteToOrderHeader.setPartnerNumber(order.getSoldToForCart().getUid().split("_")[0]);
            quoteToOrderHeader.setGovtBuyer(BooleanUtils.isTrue(order.getIsBuyer())  ? "X" : "");
            quoteToOrderHeader.setGovtFlag(BooleanUtils.isTrue(order.getIsGovernment())  ? "X" : "");
            quoteToOrderHeader.setNucFlag(BooleanUtils.isTrue(order.getIsNuclear())  ? "X" : "");
            quoteToOrderHeader.setNucOpptyFlag(BooleanUtils.isTrue(order.getIsNuclearOppurtunity())  ? "X" : "");
//            quoteToOrderHeader.setDiscCode();
            quoteToOrderHeader.setZSpecialInstructions(BooleanUtils.isTrue(order.getIsSpecialDiscountPresent())  ? "X" : "");
            quoteToOrderHeader.setCsrHelpText(order.getSpecialDiscountCode());
            // : Ahrensburg Hybris Block changes Beign
            setAhrensburgHybrisBlock(order, quoteToOrderHeader);
            quoteToOrderHeader.setNoRdd(BooleanUtils.isTrue(order.getEarlyShipment()) ? "X": "");
            quoteToOrderHeader.setShipToContact(order.getShipToContactName());
            quoteToOrderHeader.setShipToPhone(order.getShipToContactPhone());
            quoteToOrderHeader.setInvoiceContact(order.getInvoiceContact());
            quoteToOrderHeader.setInvoicePhone(order.getInvoicePhone());
            quoteToOrderHeader.setSoaContact(order.getSoaContact());
            quoteToOrderHeader.setSoaPhone(order.getSoaPhone());
            quoteToOrderHeader.setExportAddress(order.getExportAddressText());
            quoteToOrderRequest.setQuoteOrderHeader(quoteToOrderHeader);
        } catch (Exception e) {
            LOG.error("Error while preparing Quote Conversion Header: {}", e.getMessage(), e);
        }
    }

    private void setAhrensburgHybrisBlock(OrderModel order, BHGEZQuoteConversionHeader quoteToOrderHeader) {
        LOG.debug("US564046-quote : Ahrensburg Hybris Block changes Beign for order" + order.getCode());
        //Getting Sales Org
        if (order.getSoldToForCart() != null)
        {
            LOG.debug("US564046-quote : Getting SoldtoForCart value " + order.getSoldToForCart());

            if (Config.getString("bhge.ahrensburg.soldto", "6040") == null ||
                    Config.getString("bhge.ahrensburg.plant", "6045") == null) {
                LOG.debug("US564046-quote : hrensburg Configuration Not Found");
                return;
            }
            String soldTo = null;
            if(order.getSoldToForCart().getUid()!=null && order.getSoldToForCart().getUid().contains("_")){
                String soldToUID =  order.getSoldToForCart().getUid();
                LOG.debug("US564046-quote : Order code of the Order is  " + order.getCode());
                LOG.debug("US564046-quote :Soldtounit of the Order {0} is {1}" ,order.getCode(), soldToUID);
                final String[] splitSoldToUID = soldToUID.split("_");
                soldTo =splitSoldToUID[1];
                LOG.debug("US564046-quote : SoldtoUnit after Split is " + soldTo);
            }

            if(soldTo!=null && soldTo.equalsIgnoreCase(Config.getString("bhge.ahrensburg.soldto","6040"))) {
                for (AbstractOrderEntryModel entry : order.getEntries()) {
                    final String plant = getPlant(entry);
                    LOG.debug("US564046-quote : Plant for Entry " + entry.getEntryNumber() +" is :" + plant );
                    LOG.debug("US564046-quote : bhge.ahrensburg.plant :"+ Config.getString("bhge.ahrensburg.plant","6045"));
                    if (plant.equalsIgnoreCase(Config.getString("bhge.ahrensburg.plant","6045"))) {
                        LOG.debug("US564046-quote : Inside if");
                        LOG.debug("US564046-quote : Plant for Entry found for block " + entry.getEntryNumber() +" Plant code :" + plant );

                        quoteToOrderHeader.setCsrHelp(BHGESAPOrderUtils.checkBooleanValues(Boolean.TRUE));
                        String csrHelpText = StringUtils.EMPTY;
                        if (quoteToOrderHeader.getCsrHelpText() != null) {
                            csrHelpText = quoteToOrderHeader.getCsrHelpText();
                        }
                        csrHelpText = csrHelpText + NEW_LINE + "The Order is marked for CSR Review since the Plant is 6045";
                        quoteToOrderHeader.setCsrHelpText(csrHelpText);

                        LOG.debug("US564046-quote :Hybris Block applied");
                        LOG.debug("US564046-quote :Hybris Block Text" +csrHelpText);
                        break;
                    }else{
                        LOG.debug("US564046-quote :Plant and bhge.ahrensburg.plant dosent match");
                    }
                }
            }else{
                LOG.debug("US564046-quote : Sold To is not marked for block : " + soldTo );
            }
            LOG.debug("US564046-quote : End of Ahrensburg Hybris Block check");
        }
    }

    private String prepareQuoteRequest(QuoteModel quote) {
        String requestXml = null;
        BHGEZQuoteCreateRequest zQuoteCreateRequest = new BHGEZQuoteCreateRequest();
        zQuoteCreateRequest.setExtSonumber(quote.getCode());
        zQuoteCreateRequest.setQuoteHeader(prepareQuoteHeader(quote));
        prepareQuotePartner(zQuoteCreateRequest,quote);
        prepareQuoteItems(zQuoteCreateRequest, quote.getEntries());
        requestXml = SCPIConnector.toXML(zQuoteCreateRequest);
        return requestXml;
    }

    private void prepareQuoteItems(BHGEZQuoteCreateRequest zQuoteCreateRequest, List<AbstractOrderEntryModel> entries) {
        try {
            if (CollectionUtils.isNotEmpty(entries)) {
                for (AbstractOrderEntryModel entry : entries) {
                    BHGEQuoteItem item = new BHGEQuoteItem();
                    populateQuoteItem(item, entry);
                    zQuoteCreateRequest.getQuoteItems().getItems().add(item);
                }
            }
        } catch (Exception e) {
            LOG.error("Error while preparing Quote Items: {}", e.getMessage(), e);
        }
    }


    private void populateQuoteItem(BHGEQuoteItem item, AbstractOrderEntryModel entry) {
        try {
            item.setMaterial(entry.getProduct().getCode());
            item.setTargetQty(entry.getQuantity().toString());
            item.setTargetQu(entry.getUnit().getCode());
            item.setZReqDate(formattedDate(entry.getRequestedDeliveryDate()));
            item.setZItTextZ021(entry.getNote());
        } catch (Exception e) {
            LOG.error("Error while populating quote item: {}", e.getMessage(), e);
        }
    }


    private void prepareQuotePartner(BHGEZQuoteCreateRequest zQuoteCreateRequest, QuoteModel quote) {
        try {
            final B2BUnitModel soldToCustomer = quote.getSoldToForCart();
            zQuoteCreateRequest.getPartner().getItems().add(prepareSoldToAddress(soldToCustomer));
            zQuoteCreateRequest.getPartner().getItems().add(preparePayerAddress(quote));
            zQuoteCreateRequest.getPartner().getItems().add(prepareShipTOAddress(quote));
            zQuoteCreateRequest.getPartner().getItems().add(prepareBillingAddress(quote));
            zQuoteCreateRequest.getPartner().getItems().add(prepareEndUserAddress(quote));
        } catch (Exception e) {
            LOG.error("Error while preparing Quote Partners: {}", e.getMessage(), e);
        }
    }

    private BHGEQuotePartner prepareEndUserAddress(QuoteModel quote) {
        BHGEQuotePartner endUserAddress = new BHGEQuotePartner();
        try {
            if (null != quote.getRMAEndUserAddress()) {
                final AddressModel address = quote.getRMAEndUserAddress();
                endUserAddress.setPartnRole(Config.getString("END_USER_PARTNER_FUNCTION", "ZE"));
                endUserAddress.setCountry(address.getCountry().getIsocode());
                if (StringUtils.isNotBlank(address.getSapCustomerID())) {
                    endUserAddress.setPartnNumb(address.getSapCustomerID());
                } else {
                    endUserAddress.setName1(address.getCompany());
                    endUserAddress.setName2(address.getStreetname());
                    endUserAddress.setName3(address.getStreetnumber());
                    endUserAddress.setCity(address.getTown());
                    endUserAddress.setRegion(address.getRegion().getIsocodeShort());
                    endUserAddress.setPostlCode(address.getPostalcode());
                    endUserAddress.setZnewuserFlag("X");
                }
            }
        } catch (Exception e) {
            LOG.error("Error while preparing End User Quote Partners: {}", e.getMessage(), e);
        }
        return endUserAddress;
    }


    private BHGEQuotePartner prepareBillingAddress(QuoteModel quote) {
        BHGEQuotePartner partner = new BHGEQuotePartner();
        try {
            final B2BUnitModel soldToUnit = quote.getSoldToForCart();
            final String soldToId = soldToUnit.getUid().split("_")[0];
            for (AddressModel address : soldToUnit.getAddresses()) {
                if (Boolean.TRUE.equals(address.getBillingAddress())
                        && StringUtils.equalsIgnoreCase(soldToId, address.getSapCustomerID())) {

                    partner.setPartnRole(Config.getString("BILL_TO_PARTNER_FUNCTION", "BP"));
                    partner.setCountry(address.getCountry().getIsocode());
                    partner.setPartnNumb(soldToId);
                    break;
                }
            }
        } catch (Exception e) {
            LOG.error("Error while preparing Billing Quote Partner: {}", e.getMessage(), e);
        }
        return partner;
    }


    private BHGEQuotePartner prepareShipTOAddress(QuoteModel quote) {
        BHGEQuotePartner zQuoteCreateRequestPartner = new BHGEQuotePartner();
        try {
            if (null != quote.getDeliveryAddress()) {
                final AddressModel address = quote.getDeliveryAddress();
                zQuoteCreateRequestPartner.setPartnRole(Config.getString("SHIP_TO_PARTNER_FUNCTION", "SH"));
                zQuoteCreateRequestPartner.setCountry(address.getCountry().getIsocode());
                if (StringUtils.isNotBlank(quote.getDeliveryAddress().getSapCustomerID())) {
                    zQuoteCreateRequestPartner.setPartnNumb(quote.getDeliveryAddress().getSapCustomerID());
                } else {
                    zQuoteCreateRequestPartner.setCity(address.getTown());
                    zQuoteCreateRequestPartner.setRegion(address.getRegion().getIsocodeShort());
                    zQuoteCreateRequestPartner.setName1(address.getCompany());
                    zQuoteCreateRequestPartner.setName2(address.getStreetname());
                    zQuoteCreateRequestPartner.setName3(address.getStreetnumber());
                    zQuoteCreateRequestPartner.setZnewuserFlag("X");
                    zQuoteCreateRequestPartner.setPostlCode(address.getPostalcode());
                }
            }
        } catch (Exception e) {
            LOG.error("Error while preparing Ship TO Quote Partners: {}", e.getMessage());
        }
        return zQuoteCreateRequestPartner;
    }

    private BHGEQuotePartner prepareSoldToAddress(B2BUnitModel soldToCustomer) {
        BHGEQuotePartner zQuoteCreateRequestPartner = new BHGEQuotePartner();
        try {
            if (null != soldToCustomer) {
                for (AddressModel address : soldToCustomer.getAddresses()) {
                    if (address.getBillingAddress() != null ) {
                        zQuoteCreateRequestPartner.setPartnNumb(soldToCustomer.getUid().split("_")[0]);
                        zQuoteCreateRequestPartner.setPartnRole(Config.getString("SOLD_TO_PARTNER_FUNCTION", "AG"));
                        zQuoteCreateRequestPartner.setCountry(address.getCountry().getIsocode());
                        break;
                    }
                }
            }
        } catch (Exception e) {
            LOG.error("Error while preparing Sold To Quote Partners: {}", e.getMessage());
        }
        return zQuoteCreateRequestPartner;
    }

    private BHGEQuotePartner preparePayerAddress(QuoteModel quote) {
        BHGEQuotePartner zQuoteCreateRequestPartner = new BHGEQuotePartner();
        try {
            if (null != quote.getPayerAddress()) {
                zQuoteCreateRequestPartner.setPartnNumb(quote.getSoldToForCart().getUid().split("_")[0]);
                zQuoteCreateRequestPartner.setCountry(quote.getPayerAddress().getCountry().getIsocode());
                zQuoteCreateRequestPartner.setPartnRole(Config.getString("PAYER_PARTNER_FUNCTION", "RG"));
            } else {
                final B2BUnitModel soldToUnit = quote.getSoldToForCart();
                zQuoteCreateRequestPartner = prepareSoldToAddress(soldToUnit);
                zQuoteCreateRequestPartner.setPartnRole(Config.getString("PAYER_PARTNER_FUNCTION", "RG"));
            }
        } catch (Exception e) {
            LOG.error("Error while preparing Payer Quote Partners: {}", e.getMessage());
        }
        return zQuoteCreateRequestPartner;
    }

    private BHGEZQuoteCreateRequestHeader prepareQuoteHeader(QuoteModel quote) {
        BHGEZQuoteCreateRequestHeader zQuoteCreateRequestHeader = new BHGEZQuoteCreateRequestHeader();
        try {
            final B2BUnitModel b2bUnit = quote.getSoldToForCart();
            String[] soldToArray = b2bUnit.getUid().split("_");
            final String soldTo = soldToArray[1];
            final String distribution = soldToArray[2];
            final String division = soldToArray[3];
            zQuoteCreateRequestHeader.setDocType("ZQT");
            zQuoteCreateRequestHeader.setSalesOrg(soldTo);
            zQuoteCreateRequestHeader.setDistrChan(distribution);
            zQuoteCreateRequestHeader.setDivision(division);
            zQuoteCreateRequestHeader.setPurchNoC(quote.getCode());
            zQuoteCreateRequestHeader.setPurchDate(formattedDate(quote.getCreationtime()));
            zQuoteCreateRequestHeader.setReqDateH(formattedDate(quote.getReqHeaderDeliveryDate()));
            if (BooleanUtils.isTrue(quote.getIsNuclearOppurtunity())) {
                zQuoteCreateRequestHeader.setZTextNuclearCheck("X");
                zQuoteCreateRequestHeader.setExportAddress(quote.getExportAddressText());
            } else {
                zQuoteCreateRequestHeader.setZTextNuclearCheck("");
            }
            if (BooleanUtils.isTrue(quote.getIsSpecialDiscountPresent())) {
                zQuoteCreateRequestHeader.setZTextCsrHelp("X");
                zQuoteCreateRequestHeader.setZTextZ034(quote.getSpecialDiscountCode());
            } else {
                zQuoteCreateRequestHeader.setZTextCsrHelp("");
            }
            zQuoteCreateRequestHeader.setQuoteEmail(quote.getOrderConfirmationEMail());
            zQuoteCreateRequestHeader.setQuoteContact(quote.getSoaContact());
            zQuoteCreateRequestHeader.setQuotePhone(quote.getSoaPhone());
        } catch (Exception e) {
            LOG.error("Error while preparing Quote Header: {}", e.getMessage());
        }
        return zQuoteCreateRequestHeader;
    }

    private String formattedDate(Date date) {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
        formatter.setTimeZone(TimeZone.getTimeZone("UTC"));
        if (null != date) {
            return formatter.format(date);
        } else {
            return null;
        }
    }

    private String getPlant(final AbstractOrderEntryModel entry) {

        String plant = org.apache.commons.lang3.StringUtils.EMPTY;
        if (org.apache.commons.lang3.StringUtils.isNotEmpty(entry.getPlant()) && entry.getPlant().contains(BhgesaporderfulfillmentConstants.PLANT_SEPERATOR)) {
            LOG.debug("Getting plant {} details for order {}", entry.getPlant(), entry.getOrder().getCode());
            final String[] plants = entry.getPlant().split(BhgesaporderfulfillmentConstants.PLANT_SEPERATOR);
            if (null != plants && plants.length > 0) {
                plant = plants[0];
            }
        }
        else {
            plant = entry.getPlant();
        }
        return plant;
    }
}
