package com.bhge.core.mailmessages.services;

import org.springframework.web.multipart.MultipartFile;

public interface BHGEHaveQuestionService {
	
	void sendEmailForHaveAQue(final String businessLine, final String customerQuery, final String productCode,
			final String customerId, final MultipartFile file);

}
