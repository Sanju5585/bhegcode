package com.bhge.core.faq.facade;

import java.util.List;
import com.bhge.core.data.FaqData;

public interface BHGEFaqFacade
{
    List<FaqData> getFaqs();
    List<FaqData> searchFaqs(String keyword);
}