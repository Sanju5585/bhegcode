/**
 *
 */
package com.bhge.facades.price;

import de.hybris.platform.commercefacades.product.data.PriceData;
import de.hybris.platform.commercefacades.product.data.PriceDataType;
import de.hybris.platform.commercefacades.product.impl.DefaultPriceDataFactory;
import de.hybris.platform.core.model.c2l.CurrencyModel;
import de.hybris.platform.servicelayer.i18n.CommonI18NService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.util.Config;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Locale;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;

import com.bhge.facades.user.data.BHGESoldToData;


public class BHGEPriceDataFactory extends DefaultPriceDataFactory
{

	private static final Logger LOG = Logger.getLogger(BHGEPriceDataFactory.class);
	@Resource(name = "sessionService")
	SessionService sessionService;

	@Resource(name = "commonI18NService")
	CommonI18NService commonI18NService;


	@Override
	public PriceData create(final PriceDataType priceType, BigDecimal value, final CurrencyModel currency)
	{
		value = value.setScale(2, BigDecimal.ROUND_DOWN);
		final BHGESoldToData soldTo = (BHGESoldToData) sessionService.getAttribute("sessionSoldTo");
        CurrencyModel currencySymbol= null;
        if(null != currency){
            currencySymbol = currency;
        }
        else {
            currencySymbol = soldTo != null && soldTo.getCurrency() != null
                    ? commonI18NService.getCurrency(soldTo.getCurrency().getIsocode())
                    : commonI18NService.getCurrency("USD");
        }
		final PriceData priceData = super.create(priceType, value, currencySymbol);
		final String defaultCurrencyFormat = sessionService.getAttribute("defaultCurrencyFormat");
		String currencyFormat = null;
		final String isoCode = null;
		DecimalFormat dFormat = null;
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
		priceData.setCurrencyIso(currency.getIsocode());
        if((null != currency.getIsocode()) && (currency.getIsocode().equalsIgnoreCase("JPY"))){
            if (value.doubleValue() > 0) {
                currencyFormat = Config.getString("defaultCurrencyFormat", "####,###,###");
                dFormat = new DecimalFormat(currencyFormat);
                value = value.setScale(0, RoundingMode.DOWN);
                LOG.info("removing decimal for JPY"+value.doubleValue());
                priceData.setFormattedValue(priceData.getCurrencyIso() + " " + currency.getSymbol() + dFormat.format(value));
            }
            else
            {
                LOG.info("price is 0 for JPY");
                priceData.setFormattedValue(priceData.getCurrencyIso() + " " + currency.getSymbol() + "0");
            }
        }
        else {
            if (value.doubleValue() > 0) {
                priceData.setFormattedValue(priceData.getCurrencyIso() + " " + currency.getSymbol() + dFormat.format(value));
            } else {
                priceData.setFormattedValue(priceData.getCurrencyIso() + " " + currency.getSymbol() + "0.00");
            }
        }
		return priceData;
	}
}
