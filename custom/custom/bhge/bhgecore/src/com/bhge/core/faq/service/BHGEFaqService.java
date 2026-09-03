package com.bhge.core.faq.service;

import java.util.List;
import com.bhge.core.data.FaqData;

public interface BHGEFaqService
{
    List<FaqData> getFaqsForCurrentStore();
    List<FaqData> searchFaqs(String keyword);
}