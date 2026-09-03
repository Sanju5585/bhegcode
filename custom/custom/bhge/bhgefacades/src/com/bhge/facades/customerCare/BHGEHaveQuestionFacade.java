package com.bhge.facades.customerCare;

import org.springframework.web.multipart.MultipartFile;

public interface BHGEHaveQuestionFacade {
	
	public void haveQuestion(final String businessLine, final String customerQuery, final String productCode, final MultipartFile file);
	
	

}