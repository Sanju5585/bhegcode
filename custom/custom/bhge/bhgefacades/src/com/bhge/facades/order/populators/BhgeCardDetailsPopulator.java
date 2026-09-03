/**
 *
 */
package com.bhge.facades.order.populators;

import com.bhge.facades.data.BHGECreditCardData;
import com.bhge.facades.rma.data.BHGECheckoutFormData;
import com.bhge.facades.rma.data.BhgeAddrData;
import com.bhge.facades.rma.data.BhgeCountryData;
import com.bhge.facades.rma.data.BhgeStateData;
import com.hybris.ge.edge.core.model.type.BHGESavedCreditcardModel;
import de.hybris.platform.converters.Populator;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.dto.converter.ConversionException;
import org.apache.log4j.Logger;


public class BhgeCardDetailsPopulator implements Populator<BHGESavedCreditcardModel, BHGECreditCardData>
{
	private static final Logger LOG = Logger.getLogger(BHGEOrderPopulator.class);

	@Override
	public void populate(final BHGESavedCreditcardModel source, final BHGECreditCardData target) throws ConversionException
	{
		target.setCcNumber(source.getNumber());
		target.setCcName(source.getName());
		target.setToken(source.getToken());
		target.setCcType(source.getType());
		target.setCcValidTru(source.getValidTru());
	}
}
