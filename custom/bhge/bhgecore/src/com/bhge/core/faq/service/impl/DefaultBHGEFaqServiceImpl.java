package com.bhge.core.faq.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.bhge.core.faq.dao.BHGEFaqDAO;
import com.bhge.core.faq.service.BHGEFaqService;
import com.bhge.core.model.FaqComponentModel;
import com.bhge.core.data.FaqData;

import de.hybris.platform.store.BaseStoreModel;
import de.hybris.platform.store.services.BaseStoreService;

public class DefaultBHGEFaqServiceImpl implements BHGEFaqService
{
    private BHGEFaqDAO faqDao;
    private BaseStoreService baseStoreService;

    @Override
    public List<FaqData> getFaqsForCurrentStore()
    {

        List<FaqComponentModel> faqComponentModels = faqDao.getFaqsByStore();

        List<FaqData> faqDataList = new ArrayList<>();

        for (FaqComponentModel model : faqComponentModels)
        {
            FaqData data = new FaqData();
            data.setQuestion(model.getQuestion());
            data.setAnswer(model.getAnswer());

            faqDataList.add(data);
        }

        return faqDataList;
    }

    @Override
    public List<FaqData> searchFaqs(String keyword)
    {


        List<FaqComponentModel> faqComponentModels;

        if (keyword == null || keyword.trim().isEmpty())
        {
            faqComponentModels = faqDao.getFaqsByStore();
        }
        else
        {
            faqComponentModels = faqDao.searchFaqs(keyword);
        }

        List<FaqData> faqDataList = new ArrayList<>();

        for (FaqComponentModel model : faqComponentModels)
        {
            FaqData data = new FaqData();
            data.setQuestion(model.getQuestion());
            data.setAnswer(model.getAnswer());

            faqDataList.add(data);
        }

        return faqDataList;
    }

    public void setFaqDao(BHGEFaqDAO faqDao)
    {
        this.faqDao = faqDao;
    }

    public void setBaseStoreService(BaseStoreService baseStoreService)
    {
        this.baseStoreService = baseStoreService;
    }
}