/**
 *
 */
package com.bhge.core.rma.dao;

import java.util.List;
import java.util.Map;


/**
 * @author 1423683
 *
 */
public interface BHGERMAStatusDao
{

	public String getProductLineName(String productListId);

	public List<String> getProductLineId(String productListName);

	public Map<String, String> loadProductLine();

}
