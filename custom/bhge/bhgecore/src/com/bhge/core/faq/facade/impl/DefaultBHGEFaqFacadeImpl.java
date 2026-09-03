package com.bhge.core.faq.facade.impl;

import java.util.List;

import com.bhge.core.data.FaqData;
import com.bhge.core.faq.facade.BHGEFaqFacade;
import com.bhge.core.faq.service.BHGEFaqService;

public class DefaultBHGEFaqFacadeImpl implements BHGEFaqFacade
{
    private BHGEFaqService faqService;

    @Override
    public List<FaqData> getFaqs()
    {
        return faqService.getFaqsForCurrentStore();
    }

    @Override
    public List<FaqData> searchFaqs(String keyword)
    {
        return faqService.searchFaqs(keyword);
    }

    public void setFaqService(BHGEFaqService faqService)
    {
        this.faqService = faqService;
    }
}