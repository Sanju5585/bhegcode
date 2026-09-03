package com.bhge.facades.regioncache;

import de.hybris.platform.regioncache.CacheValueLoadException;
import de.hybris.platform.regioncache.CacheValueLoader;
import de.hybris.platform.regioncache.key.CacheKey;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class BHGEQuoteHistoryCacheValueLoader implements CacheValueLoader {

    private static final Logger LOG = LoggerFactory.getLogger(BHGEQuoteHistoryCacheValueLoader.class);

    @Override
    public Object load(CacheKey cacheKey) throws CacheValueLoadException {
        return null;
    }
}
