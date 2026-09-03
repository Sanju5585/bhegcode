package com.bhge.core.util;

import java.util.Collection;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.function.Predicate;
import java.util.stream.Collectors;

import org.apache.commons.lang3.StringUtils;

import com.bhge.core.forms.BHGEAdvanceSearchRow;


public class BHGEAdvanceSearchUtil
{
	// product search attributes.
	public static final String CODE = "code";
	public static final String NAME = "name";
	public static final String HIERARCHY = "hierarchy";
	public static final String DESCRIPTION = "description";

	// solr product search attributes.
	//public static final String SOLR_CODE = "code_string";
	public static final String SOLR_CODE = "code_text";
	public static final String SOLR_NAME = "name_text_en";
	//public static final String SOLR_HIERARCHY = "categoryNameList_string_en_mv";
	public static final String SOLR_HIERARCHY = "categoryNameList_string_mv";
	//public static final String SOLR_DESCRIPTION = "description_en_text";
	public static final String SOLR_DESCRIPTION = "description_text_en";

	// search operator types.
	public static final String EXACTMATCH = "match";
	public static final String CONTAINS = "contains";
	public static final String STARTSWITH = "startswith";

	/**
	 * Product attributes Predicate for product search rows.
	 *
	 * @return {@link Predicate}}
	 */
	private static Predicate<BHGEAdvanceSearchRow> productAttribute(final String attribute)
	{

		return p -> p.getProductSearchAttribute().equalsIgnoreCase(attribute);
	}

	/**
	 * Filters the product attributes from collection of product search rows.
	 *
	 * @return {@link Collection}}
	 */
	public static String filterProductAttributes(final Collection<BHGEAdvanceSearchRow> products,
			final String productFilterAttribute, final String operatorType)
	{

		final Set<BHGEAdvanceSearchRow> row =

				products.stream().filter(Objects::nonNull).filter(productAttribute(productFilterAttribute))
						.collect(Collectors.<BHGEAdvanceSearchRow> toSet());

		String solrAttribute = "";
		if (productFilterAttribute.equalsIgnoreCase(CODE))
		{
			solrAttribute = SOLR_CODE;
		}
		if (productFilterAttribute.equalsIgnoreCase(NAME))
		{
			solrAttribute = SOLR_NAME;
		}
		if (productFilterAttribute.equalsIgnoreCase(DESCRIPTION))
		{
			solrAttribute = SOLR_DESCRIPTION;
		}
		if (productFilterAttribute.equalsIgnoreCase(HIERARCHY))
		{
			solrAttribute = SOLR_HIERARCHY;
		}

		if (null != row && row.size() > 0 && !solrAttribute.isEmpty())
		{
			return queryBuilder(row, solrAttribute, operatorType);
		}
		return "";
	}

	/**
	 * Build the Solr query for advanced search.
	 *
	 *
	 */
	private static String queryBuilder(final Collection<BHGEAdvanceSearchRow> searchRows, final String productSolrAttribute,
			final String operatorType)
	{
		final AtomicInteger atomicInteger = new AtomicInteger(0);
		final StringBuilder solrQry = new StringBuilder();
		solrQry.append(productSolrAttribute);
		solrQry.append(":");
		solrQry.append("(");
		searchRows.stream().forEach(p -> {

			if (null != p.getProductMatchPattern())
			{
				solrQry.append("(");
				if (p.getProductMatchPattern().equalsIgnoreCase(EXACTMATCH))
				{
					solrQry.append("\"");
					solrQry.append(StringUtils.trim(p.getProductSearchText()));

					solrQry.append("\"");
				}
				if (p.getProductMatchPattern().equalsIgnoreCase(CONTAINS))
				{
					solrQry.append("/.*");
					solrQry.append(StringUtils.trim(p.getProductSearchText()));
					solrQry.append(".*/");
					//added or part to fine tuned with contains and exact match
					solrQry.append("OR");
					solrQry.append(" ");
					solrQry.append("\"");
					solrQry.append(StringUtils.trim(p.getProductSearchText()));
					solrQry.append("\"");
					//expected: name_text_en:(/.*calibra.*/OR "calibra"OR "calibra*"OR calibra~)
					solrQry.append("OR");
					solrQry.append(" ");
					solrQry.append("\"");
					solrQry.append(StringUtils.trim(p.getProductSearchText()));
					solrQry.append("*");
					solrQry.append("\"");
					//~
					solrQry.append("OR");
					solrQry.append(" ");
					solrQry.append(StringUtils.trim(p.getProductSearchText()));
					solrQry.append("~");

				}
				if (p.getProductMatchPattern().equalsIgnoreCase(STARTSWITH))
				{
					solrQry.append("/");
					solrQry.append(StringUtils.trim(p.getProductSearchText()));
					solrQry.append(".*");
					solrQry.append("/");
				}
				solrQry.append(")");
				atomicInteger.getAndIncrement();
				if (atomicInteger.intValue() < searchRows.size())
				{
					solrQry.append(operatorType);
				}
			}

		});
		solrQry.append(")");
		return solrQry.toString();
	}

}
