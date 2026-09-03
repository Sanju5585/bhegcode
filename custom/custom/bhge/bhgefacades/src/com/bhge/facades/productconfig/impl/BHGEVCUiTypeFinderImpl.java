package com.bhge.facades.productconfig.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import de.hybris.platform.sap.productconfig.facades.impl.UiTypeFinderImpl;
import de.hybris.platform.sap.productconfig.runtime.interf.model.CsticModel;

public class BHGEVCUiTypeFinderImpl extends UiTypeFinderImpl {
	
	private int dropDownListThreshold = DEFAULT_DROP_DOWN_LIST_THRESHOLD;
	public static final int MIN_DROP_DOWN_LIST_THRESHOLD = 1;
	private static final Logger LOG = LoggerFactory.getLogger(BHGEVCUiTypeFinderImpl.class);
	private static final String LOG_CSTIC_NAME = "BHGEVCUiTypeFinderImpl CsticModel [CSTIC_NAME='";
		
	@Override
	protected boolean isRadioButton(final CsticModel model, final boolean isDebugEnabled, final boolean hasValueImages) {
		final boolean isRadioButton = isSingleSelection(model, isDebugEnabled)
				&& (model.getAssignableValues().size() > MIN_DROP_DOWN_LIST_THRESHOLD 
				&& model.getAssignableValues().size() <= dropDownListThreshold)
				&& editableWithoutAdditionalValue(model, isDebugEnabled) && !hasValueImages;

		if (isDebugEnabled)
		{
			LOG.debug(LOG_CSTIC_NAME + model.getName() + "';CSTIC_isRadioButton='" + isRadioButton + "']");
		}

		return isRadioButton;
	}
	
	@Override
	protected boolean isDDLB(final CsticModel model, final boolean isDebugEnabled, final boolean hasValueImages) {
		final boolean isDDLB = isSingleSelection(model, isDebugEnabled)
				&& (model.getAssignableValues().size() == MIN_DROP_DOWN_LIST_THRESHOLD  
				|| model.getAssignableValues().size() > dropDownListThreshold) 
				&& editableWithoutAdditionalValue(model, isDebugEnabled)
				&& !hasValueImages;

		if (isDebugEnabled)
		{
			LOG.debug(LOG_CSTIC_NAME + model.getName() + "';CSTIC_isDDLB='" + isDDLB + "']");
		}

		return isDDLB;
	}
	
	public void setDropDownListThreshold(final int dropDownListThreshold) {
		super.setDropDownListThreshold(dropDownListThreshold);
		this.dropDownListThreshold = dropDownListThreshold;
	}
	
	@Override
	protected boolean isInputTypeSupported(final CsticModel model, final boolean isDebugEnabled) {

		boolean valueTypeSupported = isValueTypeSupported(model, isDebugEnabled) && !model.isReadonly();
		if (valueTypeSupported && CsticModel.TYPE_STRING == model.getValueType()) {
			LOG.debug("BHGEVCUiTypeFinderImpl " + LOG_CSTIC_NAME + model.getName() + "';CSTIC_isInput='"
					+ valueTypeSupported + "']");
			return valueTypeSupported;
		}
		return super.isInputTypeSupported(model, isDebugEnabled);
	}

}
