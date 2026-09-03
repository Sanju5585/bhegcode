/*
 * [y] hybris Platform
 *
 * Copyright (c) 2017 SAP SE or an SAP affiliate company.  All rights reserved.
 *
 * This software is the confidential and proprietary information of SAP
 * ("Confidential Information"). You shall not disclose such Confidential
 * Information and shall use it only in accordance with the terms of the
 * license agreement you entered into with SAP.
 */
package com.bhge.facades.order.impl;

import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNull;
import static de.hybris.platform.servicelayer.util.ServicesUtil.validateParameterNotNullStandardMessage;

import com.bhge.core.enums.BHGERMACommerceType;
import com.bhge.core.event.QuoteSCPICreationReplicationEvent;
import com.bhge.core.quote.service.BHGECommerceQuoteService;
import com.bhge.facades.pdf.BHGEQuoteEntryData;
import com.bhge.facades.quote.data.QuoteTrackingRequestData;
import com.bhge.facades.quote.data.QuoteTrackingResponseData;
import com.bhge.integration.quote.history.BHGEQuoteHistoryService;
import com.bhge.facades.pdf.DsQuoteCartPdf;
import com.ds.dsocc.quote.data.QuoteCreationRequestData;
import com.fasterxml.jackson.core.JsonProcessingException;
import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.regioncache.region.CacheRegion;
import org.apache.commons.lang3.BooleanUtils;
import org.apache.fop.configuration.ConfigurationException;
import de.hybris.platform.commercefacades.comment.data.CommentData;
import de.hybris.platform.commercefacades.i18n.I18NFacade;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.commercefacades.order.impl.DefaultQuoteFacade;
import de.hybris.platform.commercefacades.quote.data.DiscountTypeData;
import de.hybris.platform.commercefacades.quote.data.QuoteData;
import de.hybris.platform.commercefacades.user.data.CountryData;
import de.hybris.platform.commercefacades.user.data.RegionData;
import de.hybris.platform.commercefacades.util.CommerceUtils;
import de.hybris.platform.commerceservices.comments.CommerceCommentService;
import de.hybris.platform.commerceservices.enums.DiscountType;
import de.hybris.platform.commerceservices.enums.QuoteAction;
import de.hybris.platform.commerceservices.order.CommerceCartService;
import de.hybris.platform.commerceservices.order.CommerceQuoteAssignmentException;
import de.hybris.platform.commerceservices.order.CommerceQuoteService;
import de.hybris.platform.commerceservices.order.strategies.QuoteUserIdentificationStrategy;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.SearchPageData;
import de.hybris.platform.commerceservices.service.data.CommerceCartParameter;
import de.hybris.platform.commerceservices.util.CommerceCommentUtils;
import de.hybris.platform.core.enums.QuoteState;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.CustomerModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.enumeration.EnumerationService;
import de.hybris.platform.order.CartService;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.dto.converter.Converter;
import de.hybris.platform.servicelayer.event.EventService;
import de.hybris.platform.servicelayer.exceptions.ModelNotFoundException;
import de.hybris.platform.servicelayer.exceptions.SystemException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.type.TypeService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.util.Config;

import javax.xml.XMLConstants;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import java.io.*;
import java.math.BigDecimal;
import java.util.*;

import de.hybris.platform.core.model.media.MediaModel;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.fop.apps.FOPException;
import org.apache.fop.apps.FOUserAgent;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactoryBuilder;
import org.apache.fop.configuration.Configuration;
import org.apache.xmlgraphics.util.MimeConstants;
import org.springframework.web.multipart.MultipartFile;

import java.util.stream.Collectors;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.net.URISyntaxException;
import javax.xml.transform.*;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import org.apache.commons.collections4.CollectionUtils;

import com.bhge.core.model.BHGEGlobalPropertiesModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.EndUserTypeData;
import com.bhge.facades.address.BHGEShippingAddressFormData;
import com.bhge.facades.order.BHGECartFacade;
import com.bhge.facades.order.BHGEQuoteFacade;
import com.ds.dsocc.quote.data.QuoteWsDTO;
import org.xml.sax.SAXException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.net.URL;

import org.apache.fop.configuration.DefaultConfigurationBuilder;

/**
 * Default implementation of {@link BHGEQuoteFacade}.
 */
public class BHGEQuoteFacadeImpl extends DefaultQuoteFacade implements BHGEQuoteFacade {
	private static final String QUOTE_NOT_EDITABLE_ERROR = "quoteNotEditable";
	private static final String QUOTE_XSL_FILE_PATH = "quote.pdf.xls.path";
	private static final String QUOTE = "Quote";
	private static final String PDF = ".pdf";
	private static final String QUOTE_EDIT_LOCKED_ERROR = "quoteEditLocked";
	private static final String QUOTE_CART_INSUFFICIENT_ACCESS_RIGHTS = "quoteCartInsufficientRight";
	private static final String QUOTE_SAVE_CART_ERROR = "quoteSaveCarterror";
	private static final String QUOTE_CREATE_ERROR = "quoteCreateError";
	private static final String FOP_CONFIG_FILE = "fopConfigPath";
	private static final String DATE_FORMAT_PDF = "dd MMM yyyy";
	private final static Logger LOG = Logger.getLogger(BHGEQuoteFacadeImpl.class);

	private CartService cartService;

	@Autowired
	private ConfigurationService configurationService;
	private CommerceCartService commerceCartService;
	private CommerceQuoteService commerceQuoteService;
	private QuoteService quoteService;
	private ModelService modelService;
	private Converter<QuoteModel, QuoteData> quoteConverter;
	private Converter<CartModel, CartData> cartConverter;
	private UserService userService;
	private BaseStoreService baseStoreService;
	private EnumerationService enumerationService;
	private TypeService typeService;
	private CommerceCommentService commerceCommentService;
	private QuoteUserIdentificationStrategy quoteUserIdentificationStrategy;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "bhgeCartFacade")
	private BHGECartFacade bhgeCartFacade;

	@Resource(name = "i18NFacade")
	private I18NFacade i18NFacade;

	@Autowired
	private FlexibleSearchService flexibleSearchService;

	@Autowired
	private EventService eventService;
	
	@Autowired
	private BHGECommerceQuoteService bhgeCommerceQuoteService;

	@Autowired
	BHGEQuoteHistoryService bhGEQuoteHistoryService;

	@Autowired
	CacheRegion quoteHistoryCacheRegion;

	@Override
	public QuoteData createQuote(final String cartId, QuoteCreationRequestData quoteCreationRequestData) {
		try {
			QuoteData quoteData = new QuoteData();
			CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartId);
			if (null != cartModel) {
				cartModel.setOrderConfirmationEMail(quoteCreationRequestData.getQuoteAckMail());
				cartModel.setSoaContact(quoteCreationRequestData.getSoaContact());
				cartModel.setSoaPhone(quoteCreationRequestData.getSoaPhone());
				cartModel.setIsSpecialDiscountPresent(Boolean.valueOf(quoteCreationRequestData.getCsrReview()));
				cartModel.setSpecialDiscountCode(quoteCreationRequestData.getCsrReason());
				cartModel.setIsBuyer(Boolean.valueOf(quoteCreationRequestData.getExportFlag()));
				cartModel.setIsGovernment(Boolean.valueOf(quoteCreationRequestData.getExportFlag()));
				cartModel.setIsNuclearOppurtunity(Boolean.valueOf(quoteCreationRequestData.getExportFlag()));
				cartModel.setIsExport(Boolean.valueOf(quoteCreationRequestData.getExportFlag()));
				cartModel.setExportAddressText(quoteCreationRequestData.getExportAddress());
			}
			modelService.save(cartModel);
			modelService.refresh(cartModel);
			if (null != cartModel && CollectionUtils.isNotEmpty(cartModel.getEntries())) {
				quoteData = initiateQuoteforWS(cartModel);
			}
			return quoteData;
		} catch (final UnknownIdentifierException e) {
			QuoteData quoteData = new QuoteData();
			quoteData.setErrorCode(QUOTE_NOT_EDITABLE_ERROR);
			return quoteData;
		} catch (final CommerceQuoteAssignmentException e) {
			QuoteData quoteData = new QuoteData();
			quoteData.setErrorCode(QUOTE_EDIT_LOCKED_ERROR);
			return quoteData;
		} catch (final ModelNotFoundException e) {
			QuoteData quoteData = new QuoteData();
			quoteData.setErrorCode(QUOTE_CART_INSUFFICIENT_ACCESS_RIGHTS);
			return quoteData;
		} catch (final SystemException e) {
			QuoteData quoteData = new QuoteData();
			quoteData.setErrorCode(QUOTE_SAVE_CART_ERROR);
			return quoteData;
		} catch (final Exception e) {
			QuoteData quoteData = new QuoteData();
			quoteData.setErrorCode(QUOTE_CREATE_ERROR);
			return quoteData;
		}

	}

	@Override
	public Boolean submitQuote(final String quoteCode, final QuoteWsDTO quoteWsDTO) {
		try {
			final BHGEShippingAddressFormData bhgeAddressFormData = new BHGEShippingAddressFormData();
			bhgeAddressFormData.setCompanyName(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndUserCompanyName()));
			bhgeAddressFormData.setLine1(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndaddressLine()));
			bhgeAddressFormData.setLine2(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndaddress1Line()));
			bhgeAddressFormData.setTown(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndTown()));
			bhgeAddressFormData.setEndUserType(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndUserCategory()));
			if (quoteWsDTO.getEndUserCountryIso() != null) {
				final CountryData countryData = i18NFacade.getCountryForIsocode(quoteWsDTO.getEndUserCountryIso());
				bhgeAddressFormData.setCountry(countryData);
				bhgeAddressFormData.setCountryName(countryData.getIsocode());
			}
			if (quoteWsDTO.getEndUserRegionIso() != null && !StringUtils.isEmpty(quoteWsDTO.getEndUserRegionIso())) {
				final RegionData regionData = i18NFacade.getRegion(quoteWsDTO.getEndUserCountryIso(),
						quoteWsDTO.getEndUserRegionIso());
				bhgeAddressFormData.setRegion(regionData);
				bhgeAddressFormData.setStateName(regionData != null ? regionData.getIsocode() : " ");
			}
			bhgeAddressFormData.setPostalCode(StringEscapeUtils.escapeHtml4(quoteWsDTO.getEndZipcode()));

			submitQuoteFormforWS(quoteCode, StringEscapeUtils.escapeHtml4(quoteWsDTO.getUserName()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getCompanyCheckout()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getPhoneCheckout()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getEmailAddress()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getAddressCheckout()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getAddress1Checkout()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getCountry()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getRegion()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getCityCheckout()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getPostalCheckout()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getEmailtype()),
					StringEscapeUtils.escapeHtml4(quoteWsDTO.getDescription()), bhgeAddressFormData);
		} catch (final CommerceQuoteAssignmentException cqae) {
			return false;
		}

		return true;

	}

	public void prepareQuotePageData(final CartData cartData, final QuoteData quoteData) {
		quoteData.setName(cartData.getName());
		quoteData.setDescription(cartData.getDescription());
		quoteData.setCartCode(cartData.getCode());
		// quoteData.setCartData(cartData);
	}

	public void sortComments(final CartData cartData) {
		if (cartData != null) {
			if (CollectionUtils.isNotEmpty(cartData.getComments())) {
				final List<CommentData> sortedComments = cartData.getComments().stream().sorted(
						(comment1, comment2) -> comment2.getCreationDate().compareTo(comment1.getCreationDate()))
						.collect(Collectors.toList());
				cartData.setComments(sortedComments);
			}

			if (CollectionUtils.isNotEmpty(cartData.getEntries())) {
				for (final OrderEntryData orderEntry : cartData.getEntries()) {
					if (CollectionUtils.isNotEmpty(orderEntry.getComments())) {
						final List<CommentData> sortedEntryComments = orderEntry.getComments().stream()
								.sorted((comment1, comment2) -> comment2.getCreationDate()
										.compareTo(comment1.getCreationDate()))
								.collect(Collectors.toList());

						orderEntry.setComments(sortedEntryComments);
					} else if (orderEntry.getProduct() != null && orderEntry.getProduct().getMultidimensional() != null
							&& Boolean.TRUE.equals(orderEntry.getProduct().getMultidimensional())) {
						if (CollectionUtils.isNotEmpty(orderEntry.getEntries())) {
							for (final OrderEntryData multiDOrderEntry : orderEntry.getEntries()) {
								if (CollectionUtils.isNotEmpty(multiDOrderEntry.getComments())) {
									final List<CommentData> sortedMultiDOrderEntryComments = multiDOrderEntry
											.getComments().stream()
											.sorted((comment1, comment2) -> comment2.getCreationDate()
													.compareTo(comment1.getCreationDate()))
											.collect(Collectors.toList());

									multiDOrderEntry.setComments(sortedMultiDOrderEntryComments);
								}
							}
						}
					}
				}
			}
		}
	}

	public QuoteData initiateQuoteforWS(CartModel cartModel) {
		final QuoteModel quoteModel = getCommerceQuoteService().createQuoteFromCart(cartModel,
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
		quoteModel.setState(QuoteState.CREATED);
		getModelService().save(quoteModel);
		getCartService().removeSessionCart();
		getModelService().refresh(quoteModel);
		final QuoteSCPICreationReplicationEvent event = new QuoteSCPICreationReplicationEvent(quoteModel);
		eventService.publishEvent(event);
		return getQuoteConverter().convert(quoteModel);
	}

	@Override
	public QuoteData initiateQuote() {
		final CartModel cartModel = getCartService().getSessionCart();
		final QuoteModel quoteModel = getCommerceQuoteService().createQuoteFromCart(cartModel,
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
		getModelService().save(quoteModel);
		getCartService().removeSessionCart();
		return getQuoteConverter().convert(quoteModel);
	}

	@Override
	public CartData createCartFromQuote(final String quoteCode) {
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final CartModel cartModel = getCartService().createCartFromQuote(quoteModel);

		getModelService().saveAll(cartModel, quoteModel);

		return cartConverter.convert(cartModel);
	}

	@Override
	public void enableQuoteEdit(final String quoteCode) {
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final UserModel currentQuoteUser = getQuoteUserIdentificationStrategy().getCurrentQuoteUser();

		getCommerceQuoteService().assignQuoteToUser(quoteModel, currentQuoteUser, currentQuoteUser);

		final CartModel cartModel = getCommerceQuoteService().loadQuoteAsSessionCart(quoteModel, currentQuoteUser);
		getModelService().saveAll(cartModel, quoteModel);

		final CommerceCartParameter parameter = new CommerceCartParameter();
		cartModel.setCalculated(Boolean.FALSE);
		parameter.setEnableHooks(true);
		parameter.setCart(cartModel);
		getCommerceCartService().calculateCart(parameter);
		getModelService().refresh(cartModel);
		getCartService().setSessionCart(cartModel);
	}

	@Override
	public QuoteData editQuote(final String quoteCode) {
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final UserModel currentQuoteUser = getQuoteUserIdentificationStrategy().getCurrentQuoteUser();
		getCommerceQuoteService().assignQuoteToUser(quoteModel, currentQuoteUser, currentQuoteUser);
		CartData cartData = new CartData();
		if (null != quoteModel.getCartReference()) {
			cartData = bhgeCartFacade.getSessionCartWithEntryOrderingforWS(quoteModel.getCartReference(), false);
		}
		QuoteData quoteData = getQuoteConverter().convert(quoteModel);
		prepareQuotePageData(cartData, quoteData);
		sortComments(cartData);
		return quoteData;
	}

	@Override
	public QuoteData newCart() {
		final QuoteModel syncedQuote = getCommerceQuoteService().updateQuoteFromCart(getCartService().getSessionCart(),
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
		return getQuoteConverter().convert(syncedQuote);
	}

	@Override
	public void submitQuote(final String quoteCode) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final UserModel userModel = getQuoteUserIdentificationStrategy().getCurrentQuoteUser();
		final CartModel sessionCart = getCartService().getSessionCart();

		getCommerceQuoteService().validateQuoteThreshold(quoteModel, userModel, sessionCart);
		getCommerceQuoteService().unassignQuote(quoteModel, userModel);
		getCommerceQuoteService().submitQuote(quoteModel, userModel);
	}

	public void submitQuoteForm(final String quoteCode, final String userName, final String company,
			final String contactNumber, final String emailAddress, final String address1, final String address2,
			final String country, final String region, final String city, final String postalCode,
			final String emailtype, final String description, final BHGEShippingAddressFormData bhgeAddressFormData) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final UserModel userModel = getQuoteUserIdentificationStrategy().getCurrentQuoteUser();

		bhgeCommerceQuoteService.unassignQuote(quoteModel, userModel);
		bhgeCommerceQuoteService.submitQuoteFrom(userName, company, contactNumber, emailAddress, address1,
				address2, country, region, postalCode, city, emailtype, quoteModel, userModel, description,
				bhgeAddressFormData);
	}

	public void submitQuoteFormforWS(final String quoteCode, final String userName, final String company,
			final String contactNumber, final String emailAddress, final String address1, final String address2,
			final String country, final String region, final String city, final String postalCode,
			final String emailtype, final String description, final BHGEShippingAddressFormData bhgeAddressFormData) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final UserModel userModel = getQuoteUserIdentificationStrategy().getCurrentQuoteUser();

		bhgeCommerceQuoteService.unassignQuote(quoteModel, userModel);
		bhgeCommerceQuoteService.submitQuoteFromforWS(userName, company, contactNumber, emailAddress, address1,
				address2, country, region, postalCode, city, emailtype, quoteModel, userModel, description,
				bhgeAddressFormData);
	}

	@Override
	public double getQuoteRequestThreshold(final String quoteCode) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);
		final QuoteModel quote = getQuoteModelForCode(quoteCode);
		final UserModel user = getQuoteUserIdentificationStrategy().getCurrentQuoteUser();
		final CartModel sessionCart = getCartService().getSessionCart();

		return getCommerceQuoteService().getQuoteRequestThreshold(quote, user, sessionCart);
	}

	@Override
	public void approveQuote(final String quoteCode) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		getCommerceQuoteService().approveQuote(quoteModel, getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
	}

	@Override
	public void rejectQuote(final String quoteCode) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		getCommerceQuoteService().rejectQuote(quoteModel, getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
	}

	@Override
	public void acceptAndPrepareCheckout(final String quoteCode) {
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final CartModel checkoutCart = getCommerceQuoteService().acceptAndPrepareCheckout(quoteModel,
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
		getModelService().saveAll(checkoutCart, quoteModel);

		final CommerceCartParameter parameter = new CommerceCartParameter();
		parameter.setEnableHooks(true);
		parameter.setCart(checkoutCart);
		getCommerceCartService().calculateCart(parameter);
		getModelService().refresh(checkoutCart);
		getCartService().setSessionCart(checkoutCart);
	}

	@Override
	public SearchPageData<QuoteData> getPagedQuotes(final PageableData pageableData) {
		final CustomerModel currentCustomer = (CustomerModel) getUserService().getCurrentUser();
		final BaseStoreModel currentBaseStore = getBaseStoreService().getCurrentBaseStore();
		final SearchPageData<QuoteModel> quoteModelSearchPageData = getCommerceQuoteService().getQuoteList(
				currentCustomer, getQuoteUserIdentificationStrategy().getCurrentQuoteUser(), currentBaseStore,
				pageableData);
		return CommerceUtils.convertPageData(quoteModelSearchPageData, getQuoteConverter());
	}

	@Override
	protected QuoteModel getQuoteModelForCode(final String quoteCode) {
		return bhgeCommerceQuoteService.getQuoteByCode(quoteCode);
	}

	@Override
	public QuoteData getQuoteForCode(final String quoteCode) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		return getQuoteConverter().convert(quoteModel);
	}

	@Override
	public void addComment(final String text) {
		final CartModel sessionCart = getCartService().getSessionCart();

		validateQuoteCart(sessionCart);

		if (StringUtils.isBlank(text)) {
			throw new IllegalArgumentException("Parameter text cannot be blank");
		}

		getCommerceCommentService().addComment(CommerceCommentUtils.buildQuoteCommentParameter(sessionCart,
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser(), text));
	}

	@Override
	public void addEntryComment(final long entryNumber, final String text) {
		final CartModel sessionCart = getCartService().getSessionCart();

		validateQuoteCart(sessionCart);

		if (StringUtils.isBlank(text)) {
			throw new IllegalArgumentException("Parameter text cannot be blank");
		}

		if (StringUtils.length(text) > 255) {
			throw new IllegalArgumentException("Parameter text cannot exceed length of 255");
		}

		getCommerceCommentService().addComment(CommerceCommentUtils.buildQuoteEntryCommentParameter(
				getEntryForEntryNumber(sessionCart, (int) entryNumber),
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser(), text));
	}

	@Override
	public Set<QuoteAction> getAllowedActions(final String quoteCode) {
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		return getCommerceQuoteService().getAllowedActions(quoteModel,
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
	}

	@Override
	public void applyQuoteDiscount(final Double discountRate, final String discountTypeCode) {
		validateParameterNotNull(discountRate, "DiscountRate cannot be null");
		validateParameterNotNull(discountTypeCode, "DiscountTypeCode cannot be null");

		getCommerceQuoteService().applyQuoteDiscount(getCartService().getSessionCart(),
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser(), discountRate,
				DiscountType.valueOf(discountTypeCode));
	}

	/**
	 * @deprecated Since 6.4.
	 */
	@Deprecated
	@Override
	public List<DiscountTypeData> getDiscountTypes() {
		final List<DiscountTypeData> discountTypeDataList = new ArrayList<>();
		final List<DiscountType> discountTypes = getEnumerationService().getEnumerationValues(DiscountType.class);
		for (final DiscountType discountTypeEnum : discountTypes) {
			final DiscountTypeData discountTypeData = new DiscountTypeData();
			discountTypeData.setCode(discountTypeEnum.getCode());
			discountTypeData.setName(getTypeService().getEnumerationValue(discountTypeEnum).getName());
			discountTypeDataList.add(discountTypeData);
		}
		return discountTypeDataList;
	}

	@Override
	public void cancelQuote(final String quoteCode) {
		validateParameterNotNullStandardMessage("quoteCode", quoteCode);

		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		// final UserModel userModel =
		// getQuoteUserIdentificationStrategy().getCurrentQuoteUser();

		// getCommerceQuoteService().unassignQuote(quoteModel, userModel);

		getCommerceQuoteService().cancelQuote(quoteModel, getQuoteUserIdentificationStrategy().getCurrentQuoteUser());
	}

	@Override
	public Integer getQuotesCountForCurrentUser() {
		final CustomerModel currentCustomer = (CustomerModel) getUserService().getCurrentUser();
		final BaseStoreModel currentBaseStore = getBaseStoreService().getCurrentBaseStore();
		return getCommerceQuoteService().getQuotesCountForStoreAndUser(currentCustomer,
				getQuoteUserIdentificationStrategy().getCurrentQuoteUser(), currentBaseStore);

	}

	@Override
	public boolean isQuoteSessionCartValidForCheckout() {
		return getCommerceQuoteService().isQuoteCartValidForCheckout(getCartService().getSessionCart());
	}

	@Override
	public void removeQuoteCart(final String quoteCode) {
		getCommerceQuoteService().removeQuoteCart(getQuoteModelForCode(quoteCode));
	}

	@Override
	public QuoteData requote(final String quoteCode) {
		final QuoteModel quoteModel = getQuoteModelForCode(quoteCode);
		final UserModel userModel = getQuoteUserIdentificationStrategy().getCurrentQuoteUser();

		final QuoteModel newQuoteModel = getCommerceQuoteService().requote(quoteModel, userModel);
		return getQuoteConverter().convert(newQuoteModel);
	}

	@Override
	protected void validateQuoteCart(final CartModel cartModel) {
		validateParameterNotNullStandardMessage("cartModel", cartModel);
		if (cartModel.getQuoteReference() == null) {
			throw new IllegalArgumentException("Unable to update quote since the session cart is not a quote cart");
		}
	}

	@Override
	protected AbstractOrderEntryModel getEntryForEntryNumber(final AbstractOrderModel order, final int number) {
		final List<AbstractOrderEntryModel> entries = order.getEntries();
		if (entries != null && !entries.isEmpty()) {
			final Integer requestedEntryNumber = Integer.valueOf(number);
			for (final AbstractOrderEntryModel entry : entries) {
				if (entry != null && requestedEntryNumber.equals(entry.getEntryNumber())) {
					return entry;
				}
			}
		}
		return null;
	}

	@Override
	public List<EndUserTypeData> getEndUserTypeData() {
		List<EndUserTypeData> endUserTypeList = new ArrayList<EndUserTypeData>();
		String endUserTypeKeys = Config.getParameter("endUserTypes");
		if (null != endUserTypeKeys && StringUtils.isNotEmpty(endUserTypeKeys)) {
			List<String> endUserTypes = Arrays.asList(endUserTypeKeys.split(","));
			for (String endUser : endUserTypes) {
				try {
					final BHGEGlobalPropertiesModel bhgeGlobalProperty = new BHGEGlobalPropertiesModel();
					bhgeGlobalProperty.setUid(endUser);
					BHGEGlobalPropertiesModel property = flexibleSearchService.getModelByExample(bhgeGlobalProperty);
					EndUserTypeData endUserType = new EndUserTypeData();
					endUserType.setCode(property.getUid());
					endUserType.setName(property.getValue());
					endUserTypeList.add(endUserType);
				} catch (ModelNotFoundException e) {
					LOG.error("Error in fetching EndUserType " + e.getMessage());
				}
			}
		}
		return endUserTypeList;
	}

	public void downloadQuotePDF(final String rfqCartId, final HttpServletRequest request, final HttpServletResponse response)
			throws IOException, FOPException, TransformerException, JAXBException, TransformerFactoryConfigurationError,
			URISyntaxException
	{
		final UserModel currentUser = userService.getCurrentUser();
		QuoteData quoteData = null;
		QuoteModel quoteModel = null;
		if (!userService.isAnonymousUser(currentUser) && currentUser instanceof GEEdgeCustomerModel)
		{
			quoteModel = bhgeCommerceQuoteService.getQuoteByCode(rfqCartId);
			quoteData = getQuoteConverter().convert(quoteModel);
			final String xsltFile = configurationService.getConfiguration().getProperty(QUOTE_XSL_FILE_PATH).toString();
			final JAXBContext rfqPDFContext = JAXBContext.newInstance(DsQuoteCartPdf.class);
			final StringWriter sw = new StringWriter();
			final Marshaller rfqCartMarshaller = rfqPDFContext.createMarshaller();
			rfqCartMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
			final DsQuoteCartPdf dsCartDataPdfs = getQuoteDataValue(quoteModel);
			rfqCartMarshaller.marshal(dsCartDataPdfs, sw);
			final String result = sw.toString();
			generateQuotePdf(result, xsltFile, request, response);
			LOG.info("DownloadPDFQuoteCheck" + result);
		}
	}

	private void generateQuotePdf(final String xml, final String xsltFile, final HttpServletRequest request,
								  final HttpServletResponse response) throws FileNotFoundException, FOPException, TransformerFactoryConfigurationError,
			TransformerConfigurationException, TransformerException, IOException, URISyntaxException
	{
		try
		{
			final StreamSource xmlSource = new StreamSource(new StringReader(xml));
			final Timestamp timestamp = new Timestamp(System.currentTimeMillis());
			final SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd-HHmmss");
			final URL url = new URL(xsltFile);
			final BufferedReader read = new BufferedReader(new InputStreamReader(url.openStream()));
			DefaultConfigurationBuilder cfgBuilder = new DefaultConfigurationBuilder();
			Configuration cfg = cfgBuilder.build(new URL("https://oucbgdxcttupmy55qxxmhw4.blob.core.windows.net/misc/fopconfig.xml").openStream());
			LOG.info("FOP Configuration: " + cfg);
			FopFactoryBuilder fopFactoryBuilder = new FopFactoryBuilder(url.toURI()).setConfiguration(cfg);
			final FOUserAgent foUserAgent = fopFactoryBuilder.build().newFOUserAgent();
			final ByteArrayOutputStream outStream = new ByteArrayOutputStream();
			final TransformerFactory factory = TransformerFactory.newInstance();
			factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_DTD, "");
			factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_STYLESHEET, "");
			final Transformer transformer = factory.newTransformer(new StreamSource(read));
			final Fop fop = fopFactoryBuilder.build().newFop(MimeConstants.MIME_PDF, foUserAgent, outStream);
			final Result res = new SAXResult(fop.getDefaultHandler());
			transformer.transform(xmlSource, res);
			final byte[] pdfBytes = outStream.toByteArray();
			response.setContentLength(pdfBytes.length);
			response.setContentType("application/pdf");
			response.addHeader("Content-Disposition", "attachment; filename= " + QUOTE + "-" + sdf.format(timestamp) + PDF);
			response.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
			response.getOutputStream().write(pdfBytes);
			response.getOutputStream().flush();
		}
		catch (final JsonProcessingException e)
		{
			LOG.info("JsonProcessingException:::::::" + e.getMessage());
		}
		catch (ConfigurationException | SAXException e)
		{
			e.printStackTrace();
		}
	}

	public DsQuoteCartPdf getQuoteDataValue(final QuoteModel quoteModel)
	{
		final DsQuoteCartPdf dsQuoteDataPdfs = new DsQuoteCartPdf();

		if (null != quoteModel)
		{
			dsQuoteDataPdfs.setCustomerProjectName(quoteModel.getSoldToForCart().getName());
			dsQuoteDataPdfs.setQuoteID(quoteModel.getCode());
			if (null != quoteModel.getCartType())
			{
				dsQuoteDataPdfs.setOrderType(quoteModel.getCommerceType().getCode());
			}
			dsQuoteDataPdfs.setEndUserIndustry(quoteModel.getCartType().getCode());
			LOG.info("enduser1 " + quoteModel.getCartType().getCode());
			LOG.info("enduser2 " + enumerationService.getEnumerationName(quoteModel.getCommerceType()));
			dsQuoteDataPdfs.setNotificationEmail(quoteModel.getOrderConfirmationEMail());
            if(null != quoteModel.getSubtotal()) {
                Double cartTotal = quoteModel.getSubtotal();
                if (quoteModel.getCurrency().getIsocode().equalsIgnoreCase("JPY")) {
                    String jpyPrice = String.valueOf(cartTotal.longValue());
                    LOG.info("jpyPrice " + jpyPrice);
                    dsQuoteDataPdfs.setTotalItems(jpyPrice);
                } else {
                    dsQuoteDataPdfs.setTotalItems(String.valueOf(cartTotal));
                }
            }


			if (null != quoteModel.getDeliveryAddress())
			{
				dsQuoteDataPdfs.setShipToAddressLine1(quoteModel.getDeliveryAddress().getLine1());
				dsQuoteDataPdfs.setShipToAddressLine2(quoteModel.getDeliveryAddress().getLine2());
				dsQuoteDataPdfs.setShipToAddressPostalCode(quoteModel.getDeliveryAddress().getPostalcode());
				if(quoteModel.getDeliveryAddress().getRegion()!=null)
					dsQuoteDataPdfs.setShipToAddressRegion(quoteModel.getDeliveryAddress().getRegion().getName());
				dsQuoteDataPdfs.setShipToAddressTown(quoteModel.getDeliveryAddress().getTown());
			}
			if (null != quoteModel.getPayerAddress())
			{
				dsQuoteDataPdfs.setBillToAddressLine1(quoteModel.getPayerAddress().getLine1());
				dsQuoteDataPdfs.setBillToAddressLine2(quoteModel.getPayerAddress().getLine2());
				dsQuoteDataPdfs.setBillToAddressPostalCode(quoteModel.getPayerAddress().getPostalcode());
				if(quoteModel.getPayerAddress().getRegion()!=null)
					dsQuoteDataPdfs.setBillToAddressRegion(quoteModel.getPayerAddress().getRegion().getName());
				dsQuoteDataPdfs.setBillToAddressTown(quoteModel.getPayerAddress().getTown());
			}


			final String formattedSysDate = getCurrentdate();
			dsQuoteDataPdfs.setCurrentDate(formattedSysDate);
			final List<BHGEQuoteEntryData> productList = new ArrayList<BHGEQuoteEntryData>();
			int loopCount = quoteModel.getEntries().size();
            String currency = quoteModel.getCurrency().getIsocode();
			LOG.info("ListCount" + loopCount);
			if(loopCount>0) {
				for (int i = 0; i < loopCount; i++) {
					BHGEQuoteEntryData bhgeQuoteEntryData = new BHGEQuoteEntryData();
					bhgeQuoteEntryData.setDSItemCount(i+1);
					bhgeQuoteEntryData.setDSProductCode(quoteModel.getEntries().get(i).getProduct().getCode());
					bhgeQuoteEntryData.setDSProductName(quoteModel.getEntries().get(i).getProduct().getName());
                    if(null !=quoteModel.getEntries().get(i).getTotalPrice() ){
                    Double totalPrice = quoteModel.getEntries().get(i).getTotalPrice();
                    if(currency.equalsIgnoreCase("JPY") && null !=  totalPrice){
                        String jpyPrice = String.valueOf(totalPrice.longValue());
                        LOG.info("jpyPrice " + jpyPrice);
                        bhgeQuoteEntryData.setDSProductPrice(jpyPrice);
                    }
                    else {
                        bhgeQuoteEntryData.setDSProductPrice(String.valueOf(totalPrice));
                    }}
					bhgeQuoteEntryData.setDSProductQuantity(quoteModel.getEntries().get(i).getQuantity());
					bhgeQuoteEntryData.setDSProductCurrency(quoteModel.getCurrency().getName());
					bhgeQuoteEntryData.setDSProductUnit(quoteModel.getEntries().get(i).getUnit().getName());
					LOG.info("ProductName1 " + bhgeQuoteEntryData.getDSProductName());
					LOG.info("ProductName2 " + quoteModel.getEntries().get(0).getProduct().getName());
					productList.add(bhgeQuoteEntryData);
				}
			}
			/*final List<ImageData> productAttachementList = new ArrayList<ImageData>();
			final DsPdfImageData dsPdfImageData = new DsPdfImageData();
			if (null != quoteData.getAttachments())
			{
				quoteData.getAttachments().forEach(image-> {
					productAttachementList.add(image);
					dsPdfImageData.setAttachments(productAttachementList);
				});
			}
			dsQuoteDataPdfs.setAttachments(dsPdfImageData);*/
			LOG.info("ProductListSize" + productList.size());
			dsQuoteDataPdfs.setEntries(productList);
		}
		return dsQuoteDataPdfs;
	}


	public String uploadQuoteAttachmentWs(QuoteModel quoteModel, final MultipartFile file) {
		try {
			if ((null != file) && ((!file.isEmpty()))) {

				final MediaModel mediaModel = bhgeCommerceQuoteService.uploadQuoteAttachmentWs(quoteModel, file);
				if (null != mediaModel) {
					return mediaModel.getRealFileName();
				}
			}
		} catch (final Exception e) {
			LOG.error("Error in uploading attachment to the Order." + ExceptionUtils.getStackTrace(e));
		}
		return null;
	}
	
	public void removeQuoteAttachmentsWs(QuoteModel quoteModel)
	{
		
		if(quoteModel!=null ) {
			CartModel cart=quoteModel.getCartReference();
			quoteModel.setAttachments(null);
			cart.setAttachments(null);
			modelService.save(cart);
			modelService.save(quoteModel);
		}
	}
	private String getCurrentdate()
	{
		final Date currentSysDate = new Date();
		final String requestedShipDate = new SimpleDateFormat(DATE_FORMAT_PDF).format(currentSysDate);
		return requestedShipDate;
	}

	@Override
	public CartData acceptQuote(String quoteId) {
		CartModel sessionCart = bhgeCartService.getSessionCart();
		LOG.info("US530529: Session Cart id after accept action " + sessionCart.getCode());
		if (CollectionUtils.isEmpty(sessionCart.getEntries())) {
			modelService.remove(sessionCart);
		}
		QuoteModel quoteModel = getQuoteModelForCode(quoteId);
		CartModel cartModel = getCartService().createCartFromQuote(quoteModel);
		if (null != cartModel) {
			quoteModel.setState(QuoteState.CONVERTED);
			modelService.save(quoteModel);
			modelService.refresh(quoteModel);
			cartModel.setUser(userService.getCurrentUser());
			cartModel.setCommerceType(BHGERMACommerceType.BUY);
			cartModel.setQuoteReference(quoteModel);
			modelService.save(cartModel);
			modelService.refresh(cartModel);
			getCartService().setSessionCart(cartModel);
			return getCartConverter().convert(cartModel);
		}
		return null;
	}

	@Override
	public SearchPageData<QuoteTrackingResponseData> getQuoteTrackingData(QuoteTrackingRequestData trackingReqData, PageableData pageableData) {

		SearchPageData<QuoteTrackingResponseData> responseData = new SearchPageData<>();
		try {
            LOG.info("US537895: Inside getQuoteTracking method");
			responseData = bhGEQuoteHistoryService.getQuoteHistory(trackingReqData, pageableData);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return responseData;
    }

//	@Override
//	public boolean convertQuoteToOrder(String cartId) {
//		try {
//
//		} catch (Exception e) {
//			throw new RuntimeException(e);
//		}
//		return bhgeCommerceQuoteService.convertQuoteToOrder(cartId);
//	}

	@Override
	protected CartService getCartService() {
		return cartService;
	}

	@Override
	
	public void setCartService(final CartService cartService) {
		this.cartService = cartService;
	}


	@Override
	
	public void setCommerceQuoteService(final CommerceQuoteService commerceQuoteService) {
		this.commerceQuoteService = commerceQuoteService;
	}

	@Override
	protected CommerceCartService getCommerceCartService() {
		return commerceCartService;
	}

	@Override
	
	public void setCommerceCartService(final CommerceCartService commerceCartService) {
		this.commerceCartService = commerceCartService;
	}

	@Override
	protected QuoteService getQuoteService() {
		return quoteService;
	}

	@Override
	
	public void setQuoteService(final QuoteService quoteService) {
		this.quoteService = quoteService;
	}

	@Override
	protected ModelService getModelService() {
		return modelService;
	}

	@Override
	
	public void setModelService(final ModelService modelService) {
		this.modelService = modelService;
	}

	@Override
	protected Converter<QuoteModel, QuoteData> getQuoteConverter() {
		return quoteConverter;
	}

	@Override
	
	public void setQuoteConverter(final Converter<QuoteModel, QuoteData> quoteConverter) {
		this.quoteConverter = quoteConverter;
	}

	@Override
	protected Converter<CartModel, CartData> getCartConverter() {
		return cartConverter;
	}

	@Override
	
	public void setCartConverter(final Converter<CartModel, CartData> cartConverter) {
		this.cartConverter = cartConverter;
	}

	@Override
	protected UserService getUserService() {
		return userService;
	}

	@Override
	
	public void setUserService(final UserService userService) {
		this.userService = userService;
	}

	@Override
	protected BaseStoreService getBaseStoreService() {
		return baseStoreService;
	}

	@Override
	
	public void setBaseStoreService(final BaseStoreService baseStoreService) {
		this.baseStoreService = baseStoreService;
	}

	@Override
	public EnumerationService getEnumerationService() {
		return enumerationService;
	}

	@Override
	
	public void setEnumerationService(final EnumerationService enumerationService) {
		this.enumerationService = enumerationService;
	}

	@Override
	public TypeService getTypeService() {
		return typeService;
	}

	@Override
	
	public void setTypeService(final TypeService typeService) {
		this.typeService = typeService;
	}

	@Override
	protected CommerceCommentService getCommerceCommentService() {
		return commerceCommentService;
	}

	@Override
	
	public void setCommerceCommentService(final CommerceCommentService commerceCommentService) {
		this.commerceCommentService = commerceCommentService;
	}

	@Override
	protected QuoteUserIdentificationStrategy getQuoteUserIdentificationStrategy() {
		return quoteUserIdentificationStrategy;
	}

	@Override
	
	public void setQuoteUserIdentificationStrategy(
			final QuoteUserIdentificationStrategy quoteUserIdentificationStrategy) {
		this.quoteUserIdentificationStrategy = quoteUserIdentificationStrategy;
	}

	public CommerceQuoteService getCommerceQuoteService()
	{
		return commerceQuoteService;
	}

}
