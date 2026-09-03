/**
 *
 */
package com.bhge.core.forms;

/**
 * @author 503047662
 *
 */
public class BHGEAdvanceSearchRow
{
	private String productSearchAttribute;
	private String productMatchPattern;
	private String productSearchText;

	public String getProductSearchAttribute()
	{
		return productSearchAttribute;
	}

	public void setProductSearchAttribute(final String productSearchAttribute)
	{
		this.productSearchAttribute = productSearchAttribute;
	}

	public String getProductMatchPattern()
	{
		return productMatchPattern;
	}

	public void setProductMatchPattern(final String productMatchPattern)
	{
		this.productMatchPattern = productMatchPattern;
	}

	public String getProductSearchText()
	{
		return productSearchText;
	}

	public void setProductSearchText(final String productSearchText)
	{
		this.productSearchText = productSearchText;
	}

	@Override
	public int hashCode()
	{
		final int prime = 31;
		int result = 1;
		result = prime * result + ((productMatchPattern == null) ? 0 : productMatchPattern.hashCode());
		result = prime * result + ((productSearchAttribute == null) ? 0 : productSearchAttribute.hashCode());
		result = prime * result + ((productSearchText == null) ? 0 : productSearchText.hashCode());
		return result;
	}

	@Override
	public boolean equals(final Object obj)
	{
		if (this == obj)
		{
			return true;
		}
		if (obj == null)
		{
			return false;
		}
		if (getClass() != obj.getClass())
		{
			return false;
		}
		final BHGEAdvanceSearchRow other = (BHGEAdvanceSearchRow) obj;
		if (productMatchPattern == null)
		{
			if (other.productMatchPattern != null)
			{
				return false;
			}
		}
		else if (!productMatchPattern.equals(other.productMatchPattern))
		{
			return false;
		}
		if (productSearchAttribute == null)
		{
			if (other.productSearchAttribute != null)
			{
				return false;
			}
		}
		else if (!productSearchAttribute.equals(other.productSearchAttribute))
		{
			return false;
		}
		if (productSearchText == null)
		{
			if (other.productSearchText != null)
			{
				return false;
			}
		}
		else if (!productSearchText.equals(other.productSearchText))
		{
			return false;
		}
		return true;
	}

	@Override
	public String toString()
	{
		final StringBuilder builder = new StringBuilder();
		builder.append("BHGEAdvanceSearchRow [productSearchAttribute=");
		builder.append(productSearchAttribute);
		builder.append(", productMatchPattern=");
		builder.append(productMatchPattern);
		builder.append(", productSearchText=");
		builder.append(productSearchText);
		builder.append("]");
		return builder.toString();
	}
}
