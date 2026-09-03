package com.bh.occ.controllers;

import java.util.List;
import java.util.ArrayList;

import jakarta.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bhge.core.faq.facade.BHGEFaqFacade;

import com.bhge.core.data.FaqData;

import com.ds.dsocc.common.dto.FaqWSDTO;

import de.hybris.platform.webservicescommons.mapping.DataMapper;

@Controller
@RequestMapping(value = "/{baseSiteId}/faqs")
public class DSFaqController extends DSBaseController
{

    @Resource(name = "bhgeFaqFacade")
    private BHGEFaqFacade faqFacade;

    @Resource(name = "dataMapper")
    private DataMapper dataMapper;

    @GetMapping
    @ResponseBody
    public List<FaqWSDTO> getFaqs(@PathVariable String baseSiteId)
    {
        List<FaqData> faqDataList = faqFacade.getFaqs();
        List<FaqWSDTO> result = new ArrayList<>();
        for (FaqData data : faqDataList)
        {
            result.add(dataMapper.map(data, FaqWSDTO.class, DEFAULT_FIELD_SET));
        }
        return result;
    }

    @GetMapping("/search")
    @ResponseBody
    public List<FaqWSDTO> searchFaqs(
            @PathVariable String baseSiteId,
            @RequestParam(required = false) String keyword)
    {
        List<FaqData> faqDataList = faqFacade.searchFaqs(keyword);
        List<FaqWSDTO> result = new ArrayList<>();
        for (FaqData data : faqDataList)
        {
            result.add(dataMapper.map(data, FaqWSDTO.class, DEFAULT_FIELD_SET));
        }
        return result;
    }
}
