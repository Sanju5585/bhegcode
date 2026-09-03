/**
 *
 */
package com.bhge.core.calportal.service.marketo;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonRootName;


@JsonRootName("syncLeadRequest")
public class MarketoRequest
{
	private String action;
	private String lookupField;
	private List<Input> input;

	/**
	 * @return the action
	 */
	public String getAction()
	{
		return action;
	}

	/**
	 * @param action
	 *           the action to set
	 */
	public void setAction(final String action)
	{
		this.action = action;
	}

	/**
	 * @return the lookupField
	 */
	public String getLookupField()
	{
		return lookupField;
	}

	/**
	 * @param lookupField
	 *           the lookupField to set
	 */
	public void setLookupField(final String lookupField)
	{
		this.lookupField = lookupField;
	}

	/**
	 * @return the input
	 */
	public List<Input> getInput()
	{
		return input;
	}

	/**
	 * @param input
	 *           the input to set
	 */
	public void setInput(final List<Input> input)
	{
		this.input = input;
	}


}
