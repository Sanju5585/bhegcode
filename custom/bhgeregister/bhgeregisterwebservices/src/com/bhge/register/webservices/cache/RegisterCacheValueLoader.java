/**
 *
 */
package com.bhge.register.webservices.cache;

import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;

import java.security.SecureRandom;

import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;


@SuppressWarnings("rawtypes")
public class RegisterCacheValueLoader implements CacheValueLoader
{

	private static final Logger LOG = Logger.getLogger(RegisterCacheValueLoader.class);

	private static String TOKEN_DATASET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

	private static int TOKEN_LENGTH = 40;

	@Override
	public String load(final CacheKey key) throws CacheValueLoadException
	{
		String registerToken = null;
		final char[] dataSetToken = new char[TOKEN_LENGTH];
		if (key instanceof RegisterCacheKey)
		{
			final RegisterCacheKey registerCacheKey = (RegisterCacheKey) key;

			if (null != registerCacheKey && StringUtils.isNotBlank(registerCacheKey.getKey()))
			{
				final SecureRandom randomBase = new SecureRandom();
				for (int ict = 0; ict < TOKEN_LENGTH; ict++)
				{
					dataSetToken[ict] = TOKEN_DATASET.charAt(Math.abs(randomBase.nextInt()) % (TOKEN_DATASET.length()));
				}
				registerToken = String.valueOf(dataSetToken);
			}
		}
		return registerToken;
	}

}
