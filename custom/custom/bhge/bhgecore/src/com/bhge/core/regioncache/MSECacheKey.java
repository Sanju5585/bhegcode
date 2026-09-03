/**
 *
 */
package com.bhge.core.regioncache;

import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.key.CacheUnitValueType;

import java.util.Map;


/**
 * @author 1423683
 *
 */
public class MSECacheKey implements CacheKey
{
	private static final String _MSE_CACHE_CODE = "_MSE_CACHE_";
	private Map<String, String> key = null;
	private String tenantId = null;

	public MSECacheKey(final Map<String, String> key, final String tenantId)
	{
		super();
		this.key = key;
		this.tenantId = tenantId;
	}

	@Override
	public CacheUnitValueType getCacheValueType()
	{
		return CacheUnitValueType.SERIALIZABLE;
	}

	@Override
	public String getTenantId()
	{
		return tenantId;
	}

	@Override
	public Object getTypeCode()
	{
		return _MSE_CACHE_CODE;
	}

	/**
	 * @return the key
	 */
	public Map<String, String> getKey()
	{
		return key;
	}

	/**
	 * @param key
	 *           the key to set
	 */
	public void setKey(final Map<String, String> key)
	{
		this.key = key;
	}

	public static String getGeCacheCode()
	{
		return _MSE_CACHE_CODE;
	}

	public void setTenantId(final String tenantId)
	{
		this.tenantId = tenantId;
	}

	@Override
	public String toString()
	{
		return "MSECacheKey [key=" + key + ", tenantId=" + tenantId + "]";
	}

	@Override
	public int hashCode()
	{
		int result = 1;
		result = 31 * result + ((key == null) ? 0 : key.hashCode());
		result = 31 * result + ((tenantId == null) ? 0 : tenantId.hashCode());
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
		if (super.getClass() != obj.getClass())
		{
			return false;
		}

		final MSECacheKey other = (MSECacheKey) obj;
		if (tenantId == null)
		{
			if (other.tenantId != null)
			{
				return false;
			}
		}
		else if (!(tenantId.equals(other.tenantId)))
		{
			return false;
		}
		if (key == null)
		{
			if (other.key != null)
			{
				return false;
			}
		}
		else if (!(key.equals(other.key)))
		{
			return false;
		}
		return true;
	}

}
