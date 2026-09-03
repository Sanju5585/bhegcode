/**
 *
 */
package com.bh.occ.controllers;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletResponse;

import com.bhge.facades.user.data.BHGESoldToData;
import de.hybris.platform.b2b.jalo.B2BUnit;
import de.hybris.platform.core.model.model.GEEdgeCustomerModel;
import de.hybris.platform.servicelayer.user.UserService;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.validation.BeanPropertyBindingResult;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.google.common.collect.Lists;

import de.hybris.platform.commerceservices.customer.DuplicateUidException;
import de.hybris.platform.commerceservices.search.pagedata.PageableData;
import de.hybris.platform.commerceservices.search.pagedata.PaginationData;
import de.hybris.platform.commercewebservicescommons.dto.search.pagedata.PaginationWsDTO;
import de.hybris.platform.servicelayer.exceptions.ModelNotFoundException;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.webservicescommons.dto.error.ErrorListWsDTO;
import de.hybris.platform.webservicescommons.dto.error.ErrorWsDTO;
import de.hybris.platform.webservicescommons.errors.exceptions.WebserviceValidationException;
import de.hybris.platform.webservicescommons.mapping.DataMapper;
import de.hybris.platform.webservicescommons.mapping.FieldSetLevelHelper;
import de.hybris.platform.webservicescommons.util.YSanitizer;


/**
 * @author 212722447
 *
 */
public class DSBaseController
{


	protected static final String DEFAULT_PAGE_SIZE = "50";
	protected static final String DEFAULT_CURRENT_PAGE = "0";
	protected static final String BASIC_FIELD_SET = FieldSetLevelHelper.BASIC_LEVEL;
	protected static final String DEFAULT_FIELD_SET = FieldSetLevelHelper.DEFAULT_LEVEL;
	protected static final String DEFAULT_FILTER = "ALL";
	protected static final String HEADER_TOTAL_COUNT = "X-Total-Count";
	protected static final String INVALID_REQUEST_BODY_ERROR_MESSAGE = "Request body is invalid or missing";
	protected static final String UTF_8 = "UTF-8";
	public static final int MAX_PAGE_LIMIT = 100;
	public static final String PAGE_SIZE = "5";
	
	public enum ShowMode
	{
		// Constant names cannot be changed due to their usage in dependant extensions, thus nosonar
		Page, // NOSONAR
		All // NOSONAR
	}

	private static final Logger LOG = LoggerFactory.getLogger(DSBaseController.class);

	@Resource(name = "dataMapper")
	private DataMapper dataMapper;

	@Resource
	private UserService userService;

	protected static String logParam(final String paramName, final Long paramValue)
	{
		return paramName + " = " + paramValue;
	}

	protected static String logParam(final String paramName, final String paramValue)
	{
		return paramName + " = " + logValue(paramValue);
	}

	protected static String logValue(final String paramValue)
	{
		return "'" + sanitize(paramValue) + "'";
	}

	protected static String sanitize(final String input)
	{
		return YSanitizer.sanitize(input);
	}

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ResponseBody
	@ExceptionHandler(
	{ ModelNotFoundException.class })
	public ErrorListWsDTO handleModelNotFoundException(final Exception ex)
	{
		LOG.info("Handling Exception for this request - {} - {}", ex.getClass().getSimpleName(), sanitize(ex.getMessage()));
		LOG.debug("An exception occurred!", ex);

		return handleErrorInternal(UnknownIdentifierException.class.getSimpleName(), ex.getMessage());
	}

	protected ErrorListWsDTO handleErrorInternal(final String type, final String message)
	{
		final ErrorListWsDTO errorListDto = new ErrorListWsDTO();
		final ErrorWsDTO error = new ErrorWsDTO();
		error.setType(type.replace("Exception", "Error"));
		error.setMessage(sanitize(message));
		errorListDto.setErrors(Lists.newArrayList(error));
		return errorListDto;
	}

	protected void validate(final Object object, final String objectName, final Validator validator)
	{
		final Errors errors = new BeanPropertyBindingResult(object, objectName);
		validator.validate(object, errors);
		if (errors.hasErrors())
		{
			throw new WebserviceValidationException(errors);
		}
	}

	/**
	 * Adds pagination field to the 'fields' parameter
	 *
	 * @param fields
	 * @return fields with pagination
	 */
	protected String addPaginationField(final String fields)
	{
		String fieldsWithPagination = fields;

		if (StringUtils.isNotBlank(fieldsWithPagination))
		{
			fieldsWithPagination += ",";
		}
		fieldsWithPagination += "pagination";

		return fieldsWithPagination;
	}

	protected void setTotalCountHeader(final HttpServletResponse response, final PaginationWsDTO paginationDto)
	{
		if (paginationDto != null && paginationDto.getTotalResults() != null)
		{
			response.setHeader(HEADER_TOTAL_COUNT, StringEscapeUtils.escapeHtml4(String.valueOf(paginationDto.getTotalResults())));
		}
	}

	protected void setTotalCountHeader(final HttpServletResponse response, final PaginationData paginationDto)
	{
		if (paginationDto != null)
		{
			response.setHeader(HEADER_TOTAL_COUNT,  StringEscapeUtils.escapeHtml4(String.valueOf(paginationDto.getTotalNumberOfResults())));
		}
	}

	protected DataMapper getDataMapper()
	{
		return dataMapper;
	}

	protected void setDataMapper(final DataMapper dataMapper)
	{
		this.dataMapper = dataMapper;
	}

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ResponseBody
	@ExceptionHandler(
	{ DuplicateUidException.class })
	public ErrorListWsDTO handleDuplicateUidException(final DuplicateUidException ex)
	{
		LOG.debug("DuplicateUidException", ex);
		return handleErrorInternal("DuplicateUidException", ex.getMessage());
	}

	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	@ResponseBody
	@ExceptionHandler(
	{ HttpMessageNotReadableException.class })
	public ErrorListWsDTO handleHttpMessageNotReadableException(final Exception ex)
	{
		LOG.debug(INVALID_REQUEST_BODY_ERROR_MESSAGE, ex);
		return handleErrorInternal(HttpMessageNotReadableException.class.getSimpleName(), INVALID_REQUEST_BODY_ERROR_MESSAGE);
	}

	protected PageableData createPageableData(final int currentPage, final int pageSize, final String sort)
	{
		final PageableData pageable = new PageableData();
		pageable.setCurrentPage(currentPage);
		pageable.setPageSize(pageSize);
		pageable.setSort(sort);
		return pageable;
	}
	
	/**
	 * Decodes a string with encoding using a specific encoding scheme.
	 *
	 * @param source
	 *           A string to decode
	 * @param enc
	 *           The name of a supported character encoding. Default value is UTF-8 if no value is provided.
	 * @return A decoded string
	 */
	protected String decodeWithScheme(final String source, final String enc)
	{
		try
		{
			return URLDecoder.decode(source, StringUtils.isBlank(enc) ? UTF_8 : enc);
		}
		catch (final UnsupportedEncodingException e)
		{
			LOG.error("Unsupported decoding " + enc + ". Return input parameter as fallback.", e);
			return source;
		}
	}
	/**
	 * Used for search APIs
	 * @param pageNumber
	 * @param pageSize
	 * @param sortCode
	 * @param showMode
	 * @return
	 */
	protected PageableData createPageableData(final int pageNumber, final int pageSize, final String sortCode,
			final ShowMode showMode)
	{
		final PageableData pageableData = new PageableData();
		pageableData.setCurrentPage(pageNumber);
		pageableData.setSort(sortCode);

		if (ShowMode.All == showMode)
		{
			pageableData.setPageSize(MAX_PAGE_LIMIT);
		}
		else
		{
			pageableData.setPageSize(pageSize);
		}
		return pageableData;
	}
	/**
	 * Gets default page size if pageSize is empty
	 * @param pageSize
	 * @return
	 */
	protected int getUIPageSize(final String pageSize)
	{
		if (StringUtils.isBlank(pageSize))
		{
			return Integer.parseInt(PAGE_SIZE);
		}
		else
		{
			return Integer.parseInt(pageSize);
		}

	}

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}
}
