/**
 *
 */
package com.bhge.core.email.dao.impl;

import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchQuery;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;
import de.hybris.platform.servicelayer.search.SearchResult;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;

import com.bhge.core.email.dao.BHGEEmailServiceDao;
import com.bhge.register.webservices.model.BHGEMnCEcommMatrixModel;
import com.bhge.register.webservices.model.BHGERegisterKeyValueDataModel;



/**
 * @author 586667
 *
 */
public class DefaultEmailServiceDao implements BHGEEmailServiceDao
{
	private static final Logger LOG = Logger.getLogger(DefaultEmailServiceDao.class);

	private static final String ATTRIBUTE_KEY = "attributeKey";
	private static final String COUNTRY_ATTRIBUTE = "countryAttr";
	private static final String PRODUCT_ATTRIBUTE = "productAtt";
	private static final String REGION_ATTRIBUTE = "regionAttr";
	private static final String SUB_REGION_ATTRIBUTE = "subregionAttr";

	private static final String FETCH_B2bUnits_GovtUsers = "select {pk} from {B2BUnit} where {uid}=?soldToId";
	//private static final String FETCH_EMAIL_MATRIX_DATA = "select {pk} from {BHGEMnCEcommMatrix} where {regionAttrib} = ?regionAttr and {countryAttrib} = ?countryAttr and {productlineAttrib} = ?productAtt";

	private static final String FETCH_EMAIL_MATRIX_COUNTRY = "select {pk} from {BHGEMnCEcommMatrix} where {countryAttrib} = ?countryAttr and {productlineAttrib} = ?productAtt";
	private static final String FETCH_EMAIL_MATRIX_SUBREGION = "select {pk} from {BHGEMnCEcommMatrix} where {subregionAttrib} = ?subregionAttr and {productlineAttrib} = ?productAtt";
	private static final String FETCH_EMAIL_MATRIX_REGION = "select {pk} from {BHGEMnCEcommMatrix} where {regionAttrib} = ?regionAttr and {productlineAttrib} = ?productAtt";

	private static final String GET_PRODUCT_FROM_PRODUCTHEIRARCHY = "select {parentAttrib} from {BHGERegisterKeyValueData} where {attributeKey} = ?attributeKey";
	private static final String GET_REGION_FROM_COUNTRY = "select {pk} from {BHGERegisterKeyValueData} where upper({attributeKey})=upper(?attributeKey)";


	private FlexibleSearchService flexibleSearchService;

	public FlexibleSearchService getFlexibleSearchService()
	{
		return flexibleSearchService;
	}

	public void setFlexibleSearchService(final FlexibleSearchService flexibleSearchService)
	{
		this.flexibleSearchService = flexibleSearchService;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.email.dao.BHGEEmailServiceDao#fetchSoldTo(java.lang.String)
	 */
	@Override
	public B2BUnitModel fetchSoldTo(final String soldToId)
	{
		String paddingSoldToid = null;
		if (soldToId != null)
		{
			paddingSoldToid = leftPad(soldToId, 10, '0');
		}
		B2BUnitModel soldTo = new B2BUnitModel();
		LOG.info("fetchSoldTo Start for ===== " + soldToId);
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(FETCH_B2bUnits_GovtUsers);
		fQuery.addQueryParameter("soldToId", paddingSoldToid);

		final SearchResult<B2BUnitModel> querysearchResult = getFlexibleSearchService().search(fQuery);

		final List<B2BUnitModel> results = querysearchResult.getResult();

		if (results != null & results.size() > 0)
		{
			LOG.info("Sold to id found for" + soldToId);
			soldTo = results.get(0);
		}
		LOG.info("fetchSoldTo End for====== " + soldToId);
		return soldTo;
	}

	public static String leftPad(final String originalString, final int length, final char padCharacter)
	{
		String paddedString = originalString;
		while (paddedString.length() < length)
		{
			paddedString = padCharacter + paddedString;
		}
		return paddedString;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.email.dao.BHGEEmailServiceDao#fetchLinkedProductLine(java.lang.String)
	 */
	@Override
	public BHGERegisterKeyValueDataModel fetchLinkedProductLine(final String productHeirarchy, final String inProductLine)
	{
		BHGERegisterKeyValueDataModel productLine = null;
		if (StringUtils.isNotBlank(inProductLine))
		{
			LOG.info("productLine Fetch Flow - " + inProductLine);
			productLine = getBhgeRegisterKeyValueDataModel(inProductLine, productLine);
		}
		else
		{
			String productHeirarchyValue = productHeirarchy;
			LOG.info("productHeirarchy value before split " + productHeirarchy);
			if (null != productHeirarchy)
			{

				if (productHeirarchy.length() > 5 || productHeirarchy.length() == 5)
				{
					productHeirarchyValue = productHeirarchy.substring(0, 5);
					LOG.info("fetching productHeirarchy after split  " + productHeirarchyValue);
				}
			}

			LOG.info("Inside fetchLinkedProductLine for email");
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(GET_PRODUCT_FROM_PRODUCTHEIRARCHY);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, productHeirarchyValue);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				productLine = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);

			}
		}
		return productLine;
	}

	@Override
	public  BHGERegisterKeyValueDataModel getBhgeRegisterKeyValueDataModel(String inProductLine, BHGERegisterKeyValueDataModel productLine) {
		final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(GET_REGION_FROM_COUNTRY);
		fQuery.addQueryParameter(ATTRIBUTE_KEY, inProductLine);

		final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
		if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
				&& querysearchResult.getResult().get(0) != null)
		{
			productLine = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
		}
		return productLine;
	}


	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.email.dao.BHGEEmailServiceDao#fetchLinkedRegion(java.lang.String)
	 */
	@Override
	public BHGERegisterKeyValueDataModel fetchLinkedRegion(final String countryCP)
	{
		BHGERegisterKeyValueDataModel region = null;
		if (null != countryCP)
		{
			LOG.info("Inside fetchLinkedRegion for email");
			final FlexibleSearchQuery fQuery = new FlexibleSearchQuery(GET_REGION_FROM_COUNTRY);
			fQuery.addQueryParameter(ATTRIBUTE_KEY, countryCP);

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				region = (BHGERegisterKeyValueDataModel) querysearchResult.getResult().get(0);
			}
		}
		return region;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.email.dao.BHGEEmailServiceDao#fetchEmailForGovtUser(java.lang.String, java.lang.String,
	 * java.lang.String)
	 */
	/*
	 * @Override public BHGEMnCEcommMatrixModel fetchInquiryMatrixData(final String region, final String productLine, final
	 * String countryCP) {
	 *
	 * BHGEMnCEcommMatrixModel matrixModel = null; if (null != region && null != productLine && null != countryCP) {
	 * LOG.info("Inside fetchEmailForGovtUser for email"); final FlexibleSearchQuery fQuery = new
	 * FlexibleSearchQuery(FETCH_EMAIL_MATRIX_DATA); fQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productLine);
	 * fQuery.addQueryParameter(COUNTRY_ATTRIBUTE, countryCP); fQuery.addQueryParameter(REGION_ATTRIBUTE, region);
	 *
	 * final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(fQuery);
	 *
	 * if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null &&
	 * querysearchResult.getResult().get(0) != null) { matrixModel = (BHGEMnCEcommMatrixModel)
	 * querysearchResult.getResult().get(0);
	 *
	 * } }
	 *
	 * return matrixModel; }
	 */

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.email.dao.BHGEEmailServiceDao#fetchEmailForGovtUser(java.lang.String, java.lang.String,
	 * java.lang.String)
	 */
	@Override
	public BHGEMnCEcommMatrixModel fetchInquiryMatrixData(final String country, final String productLine, final String flag)
	{
		LOG.info("Inside DefaultEmailServiceDao: fetchInquiryMatrixData>> ");

		BHGEMnCEcommMatrixModel matrixModel = null;
		FlexibleSearchQuery InquiryMatrixQuery = new FlexibleSearchQuery("");

		if (null != productLine && null != country)
		{
			if ("COUNTRY".equalsIgnoreCase(flag))
			{

				InquiryMatrixQuery = new FlexibleSearchQuery(FETCH_EMAIL_MATRIX_COUNTRY);
				InquiryMatrixQuery.addQueryParameter(COUNTRY_ATTRIBUTE, country);
				InquiryMatrixQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productLine);
			}
			else if ("SUBREGION".equalsIgnoreCase(flag))
			{

				InquiryMatrixQuery = new FlexibleSearchQuery(FETCH_EMAIL_MATRIX_SUBREGION);
				InquiryMatrixQuery.addQueryParameter(SUB_REGION_ATTRIBUTE, country);
				InquiryMatrixQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productLine);
			}
			else if ("REGION".equalsIgnoreCase(flag))
			{

				InquiryMatrixQuery = new FlexibleSearchQuery(FETCH_EMAIL_MATRIX_REGION);
				InquiryMatrixQuery.addQueryParameter(REGION_ATTRIBUTE, country);
				InquiryMatrixQuery.addQueryParameter(PRODUCT_ATTRIBUTE, productLine);
			}

			final SearchResult<Object> querysearchResult = getFlexibleSearchService().search(InquiryMatrixQuery);

			if (null != querysearchResult && querysearchResult.getCount() > 0 && querysearchResult.getResult() != null
					&& querysearchResult.getResult().get(0) != null)
			{
				matrixModel = (BHGEMnCEcommMatrixModel) querysearchResult.getResult().get(0);
			}
		}

		return matrixModel;
	}


}
