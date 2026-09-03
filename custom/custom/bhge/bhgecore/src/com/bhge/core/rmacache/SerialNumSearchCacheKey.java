/**
 *
 */
package com.bhge.core.rmacache;

import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.key.CacheUnitValueType;


/**
 * @author 1423683
 *
 */
public class SerialNumSearchCacheKey implements CacheKey
{
	private static final String SERIALNUMSEARCH_CACHE_CODE = "_SERIAL_NUM_SEARCH_CACHE_";
	private String key = null;
	private String tenantId = null;


	public SerialNumSearchCacheKey(final String key, final String tenantId)
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
		return SERIALNUMSEARCH_CACHE_CODE;
	}

	public String getKey()
	{
		return key;
	}

	public void setKey(final String key)
	{
		this.key = key;
	}

	public static String getGeCacheCode()
	{
		return SERIALNUMSEARCH_CACHE_CODE;
	}

	public void setTenantId(final String tenantId)
	{
		this.tenantId = tenantId;
	}

	@Override
	public String toString()
	{
		return "SerialNumSearchCacheKey [key=" + key + ", tenantId=" + tenantId + "]";
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

		final SerialNumSearchCacheKey other = (SerialNumSearchCacheKey) obj;
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
