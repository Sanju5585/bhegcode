package com.bh.occ.controllers;

import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.bhge.core.data.ResourceData;
import com.bhge.core.resource.facade.BHGResourceFacade;
import com.ds.dsocc.common.dto.ResourceWSDTO;

import de.hybris.platform.webservicescommons.mapping.DataMapper;

@Controller
@RequestMapping(value = "/{baseSiteId}/resources")
public class DSResourceController extends DSBaseController
{
    @Resource(name = "bhgResourceFacade")
    private BHGResourceFacade resourceFacade;

    @Resource(name = "dataMapper")
    private DataMapper dataMapper;

    @GetMapping
    @ResponseBody
    public List<ResourceWSDTO> getResources(@PathVariable String baseSiteId)
    {
        List<ResourceData> dataList = resourceFacade.getResources();

        List<ResourceWSDTO> result = new ArrayList<>();

        for (ResourceData data : dataList)
        {
            result.add(dataMapper.map(data, ResourceWSDTO.class, DEFAULT_FIELD_SET));
        }

        return result;
    }

    @GetMapping("/search")
    @ResponseBody
    public List<ResourceWSDTO> searchResources(
            @PathVariable String baseSiteId,
            @RequestParam(required = false) String keyword)
    {
        List<ResourceData> dataList = resourceFacade.searchResources(keyword);

        List<ResourceWSDTO> result = new ArrayList<>();

        for (ResourceData data : dataList)
        {
            result.add(dataMapper.map(data, ResourceWSDTO.class, DEFAULT_FIELD_SET));
        }

        return result;
    }
}