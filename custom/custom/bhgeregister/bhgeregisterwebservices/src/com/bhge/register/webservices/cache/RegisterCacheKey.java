/**
 *
 */
package com.bhge.register.webservices.cache;

import de.hybris.platform.regioncache.key.CacheKey;
import de.hybris.platform.regioncache.key.CacheUnitValueType;


public class RegisterCacheKey implements CacheKey
{

	private static final String REGISTER_CACHE_CODE = "_REGISTER_CACHE_";
	private String key = null;
	private String tenantId = null;

	public RegisterCacheKey(final String key, final String tenantId)
	{
		this.key = key;
		this.tenantId = tenantId;
	}

	@Override
	public CacheUnitValueType getCacheValueType()
	{
		return CacheUnitValueType.SERIALIZABLE;
	}

	@Override
	public Object getTypeCode()
	{
		return REGISTER_CACHE_CODE;
	}

	@Override
	public String getTenantId()
	{
		return tenantId;
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
		return REGISTER_CACHE_CODE;
	}

	public void setTenantId(final String tenantId)
	{
		this.tenantId = tenantId;
	}

	@Override
	public String toString()
	{
		return "BHGECacheKey [key=" + key + ", tenantId=" + tenantId + "]";
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
		final RegisterCacheKey other = (RegisterCacheKey) obj;
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

