package com.bhge.facades.customerCare.impl;

import jakarta.annotation.Resource;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.mailmessages.services.BHGEHaveQuestionService;
import com.bhge.facades.customerCare.BHGEHaveQuestionFacade;

import de.hybris.platform.servicelayer.user.UserService;

public class BHGEHaveQuestionFacadeImpl implements BHGEHaveQuestionFacade {
	
	private static final Logger LOG = Logger.getLogger(BHGEHaveQuestionFacadeImpl.class);

	@Autowired
	private BHGEHaveQuestionService bhgeHaveQuestionService;
	
	@Resource(name = "userService")
    private UserService userService;
	
	@Override
	public void haveQuestion(final String businessLine, final String customerQuery, final String productCode,
			final MultipartFile file) {   
		
		final String customerId = userService.getCurrentUser().getUid();
		bhgeHaveQuestionService.sendEmailForHaveAQue(businessLine, customerQuery, productCode, customerId, file);
	}

	public BHGEHaveQuestionService getBhgeHaveQuestionService() {
		return bhgeHaveQuestionService;
	}

	public void setBhgeHaveQuestionService(BHGEHaveQuestionService bhgeHaveQuestionService) {
		this.bhgeHaveQuestionService = bhgeHaveQuestionService;
	}


}