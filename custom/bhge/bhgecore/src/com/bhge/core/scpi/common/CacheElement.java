package com.bhge.core.scpi.common;

import org.apache.commons.lang3.builder.ToStringBuilder;

import java.time.LocalDateTime;

/**
 * Class to store the cache Object
 * @param <K>
 * @param <V>
 */
class CacheElement<K,V> {

        // Cache Key
        private K key;
        //Cache Value
        private V value;
        //date to validate cache expiry behaviour
        private String date;

        /*
         * Constructor
         **/
        public CacheElement(K key, V value) {
            this.key = key;
            this.value = value;
            date =  LocalDateTime.now().toString();
        }

        public K getKey() {
            return key;
        }

        public V getValue() {
            return value;
        }

        public String getDate() {
            return date;
        }

        @Override
        public String toString() {
            return new ToStringBuilder(this)
                    .append("key", key)
                    .append("value", value)
                    .append("date", date)
                    .toString();
        }
    }