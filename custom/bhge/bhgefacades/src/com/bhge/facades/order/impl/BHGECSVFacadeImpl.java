/**
 *
 */
package com.bhge.facades.order.impl;


import de.hybris.platform.acceleratorfacades.csv.impl.DefaultCsvFacade;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.core.model.order.CartModel;

import java.io.IOException;
import java.io.Writer;
import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;

import com.bhge.core.order.service.BHGECartService;
import com.bhge.facades.order.BHGECsvFacade;
import com.bhge.facades.user.data.BHGEConfigPartNumbersData;


/**
 * @author udbmishr
 *
 */
public class BHGECSVFacadeImpl extends DefaultCsvFacade implements BHGECsvFacade
{
	public static final String LINE_SEPERATOR = "\n";
	public static final String DELIMITER = ",";

	/*
	 * (non-Javadoc)
	 *
	 * @see de.hybris.platform.acceleratorfacades.csv.CsvFacade#generateCSVForMaterialBomData(java.util.List, boolean,
	 * java.util.List, java.io.Writer)
	 */
	@Override
	public void generateCSVForMaterialBomData(final List<String> headers, final boolean includeHeader,
			final List<BHGEConfigPartNumbersData> materialBomDataList, final Writer writer)
	{
		if (includeHeader && CollectionUtils.isNotEmpty(headers))
		{
			final StringBuilder csvHeader = new StringBuilder();
			int i = 0;
			for (; i < headers.size() - 1; i++)
			{
				csvHeader.append(StringEscapeUtils.escapeCsv(headers.get(i))).append(DELIMITER);
			}
			csvHeader.append(StringEscapeUtils.escapeCsv(headers.get(i))).append(LINE_SEPERATOR);
			try
			{
				writer.write(csvHeader.toString());
			}
			catch (final IOException e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		if (materialBomDataList != null && CollectionUtils.isNotEmpty(materialBomDataList))
		{

			try
			{
				writeMaterialBomDataEntries(writer, materialBomDataList);
			}
			catch (final IOException e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

	protected void writeMaterialBomDataEntries(final Writer writer, final List<BHGEConfigPartNumbersData> materialBomDataList)
			throws IOException
	{

		for (final BHGEConfigPartNumbersData data : materialBomDataList)
		{

			writeMaterialBomDataEntry(writer, data);
		}

	}

	protected void writeMaterialBomDataEntry(final Writer writer, final BHGEConfigPartNumbersData data) throws IOException
	{
		final StringBuilder csvContent = new StringBuilder();
		csvContent.append(StringEscapeUtils.escapeCsv("\t" + data.getExplosionLevel())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getItemNumber())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getNumber())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getName())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getQty())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getUnit())).append(DELIMITER)
				//.append(StringEscapeUtils.escapeCsv(data.getListPrice())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getLeadTime())).append(DELIMITER)
				//.append(StringEscapeUtils.escapeCsv(data.getCountryOrigin())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getCountryName())).append(LINE_SEPERATOR);

		writer.write(csvContent.toString());
	}

	@Override
	public void generateCSVForOrderBomData(final List<String> headers, final boolean includeHeaders,
			final List<BHGEConfigPartNumbersData> orderBomDataList, final Writer writer)
	{
		if (includeHeaders && CollectionUtils.isNotEmpty(headers))
		{
			final StringBuilder csvHeader = new StringBuilder();
			int i = 0;
			for (; i < headers.size() - 1; i++)
			{
				csvHeader.append(StringEscapeUtils.escapeCsv(headers.get(i))).append(DELIMITER);
			}
			csvHeader.append(StringEscapeUtils.escapeCsv(headers.get(i))).append(LINE_SEPERATOR);
			try
			{
				writer.write(csvHeader.toString());
			}
			catch (final IOException e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		if (orderBomDataList != null && CollectionUtils.isNotEmpty(orderBomDataList))
		{
			try
			{
				writeOrderBomDataEntries(writer, orderBomDataList);
			}
			catch (final IOException e)
			{
				// YTODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

	protected void writeOrderBomDataEntries(final Writer writer, final List<BHGEConfigPartNumbersData> orderBomDataList)
			throws IOException
	{

		for (final BHGEConfigPartNumbersData data : orderBomDataList)
		{

			writeOrderBomDataEntry(writer, data);
		}

	}

	protected void writeOrderBomDataEntry(final Writer writer, final BHGEConfigPartNumbersData data) throws IOException
	{
		final StringBuilder csvContent = new StringBuilder();
		csvContent.append(StringEscapeUtils.escapeCsv("\t" + data.getNumber())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getName())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getQty())).append(DELIMITER)
				.append(StringEscapeUtils.escapeCsv("\t" + data.getUnit())).append(LINE_SEPERATOR);

		writer.write(csvContent.toString());
	}

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Override
	protected void writeOrderEntry(final Writer writer, final OrderEntryData entry) throws IOException
	{
		final CartModel parentCart = bhgeCartService.getSessionCart();
		final StringBuilder csvContent = new StringBuilder();
		if (Objects.nonNull(parentCart.getCommerceType()) && (parentCart.getCommerceType().toString().equalsIgnoreCase("RETURNS")))
		{
			csvContent.append(StringEscapeUtils.escapeCsv(entry.getProduct().getCode())).append(DELIMITER)
					.append(StringEscapeUtils.escapeCsv(entry.getQuantity().toString())).append(DELIMITER)
					.append(StringEscapeUtils.escapeCsv(entry.getProduct().getName())).append(DELIMITER)
					.append(StringEscapeUtils.escapeCsv(entry.getBasePrice().getFormattedValue())).append(LINE_SEPERATOR);
		}
		else
		{
			csvContent.append(StringEscapeUtils.escapeCsv(entry.getProduct().getCode())).append(DELIMITER)
					.append(StringEscapeUtils.escapeCsv(entry.getQuantity().toString())).append(DELIMITER)
					.append(StringEscapeUtils.escapeCsv(entry.getProduct().getName())).append(DELIMITER)
					.append(StringEscapeUtils.escapeCsv(entry.getTotalPrice().getFormattedValue())).append(LINE_SEPERATOR);
		}
		writer.write(csvContent.toString());
	}

}
