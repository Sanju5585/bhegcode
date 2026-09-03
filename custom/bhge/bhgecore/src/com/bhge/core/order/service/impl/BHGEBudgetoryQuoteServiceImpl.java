package com.bhge.core.order.service.impl;

import com.bhge.core.order.pdf.BHGEBudgetoryQuoteEntryData;
import com.bhge.core.order.pdf.BHGEBudgetoryQuotePdf;
import com.bhge.core.order.service.BHGEBudgetoryQuoteService;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.user.service.BHGEUserProfileService;
import com.fasterxml.jackson.core.JsonProcessingException;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.commercefacades.order.data.CartData;
import de.hybris.platform.commercefacades.order.data.OrderEntryData;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.model.GEEdgeProductModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.exceptions.UnknownIdentifierException;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.util.DiscountValue;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.fop.apps.*;
import org.apache.log4j.Logger;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.xssf.usermodel.XSSFRichTextString;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import jakarta.annotation.Resource;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import javax.xml.transform.*;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;
import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.AbstractMap;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class BHGEBudgetoryQuoteServiceImpl implements BHGEBudgetoryQuoteService {

    @Resource(name = "bhgeCartService")
    public BHGECartService bhgeCartService;

    @Resource(name = "configurationService")
    private ConfigurationService configurationService;

    @Resource(name = "mediaService")
    private MediaService mediaService;

    @Resource(name = "catalogVersionService")
    private CatalogVersionService catalogVersionService;

    @Resource(name = "userProfileService")
    private BHGEUserProfileService userProfileService;

    private static final String PDF = ".pdf";

    private static final String BUDGETORY_QUOTE_XSL_FILE_MEDIA_ID = "budgetory.quote.pdf.xsl.media.id";

    private static final String BUDGETORY_QUOTE_PDF_XSL_BLOB_PATH = "budgetory.quote.pdf.xsl.blob.path";

    private static final String CONTENT_TYPE = "application/pdf";
    private static final String DATE_FORMAT = "yyyyMMdd-HHmmss";

    private  static  final Logger LOG = Logger.getLogger(BHGEBudgetoryQuoteServiceImpl.class);

    @Override
    public void generateExcelForBudgetoryQuote(CartData cartData, String customFileName, String formatedAddress, HttpServletResponse response, CartModel cartModel) throws IOException {
    try (
    Workbook workbook = new XSSFWorkbook()) {
        Sheet sheet = workbook.createSheet("BUDGETARYQUOTE");
        sheet.setDefaultColumnWidth(16);

        // Header style
        CellStyle headerStyle = workbook.createCellStyle();
        Font headerFont = workbook.createFont();
        headerFont.setFontName("Calibri");
        headerFont.setBold(true);
        headerStyle.setFont(headerFont);

        //Budgetory Quote Title
        Row headerRow = sheet.createRow(0);
        Cell headerCell = headerRow.createCell(2);
        headerCell.setCellValue("Budgetary Quote");
        headerCell.setCellStyle(headerStyle);
        LOG.info("BHGEBudgetoryQuoteServiceImpl bqexcel header set");

        //Userdetails
        LOG.info("BHGEBudgetoryQuoteServiceImpl bqexcel for cart" + cartData.getCode());
        //CartModel cartModel = bhgeCartService.getCartByCodeForDSstore(cartData.getCode());

        String currentDate = getCurrentDate(cartData);
        LOG.info("BHGEBudgetoryQuoteServiceImpl bqexcel currentDate" + currentDate);
        String soldTo = getSoldto(cartData);
        String userNameandEmail =  null;
        if(null != cartModel.getUser()) {
            String userName = cartModel.getUser().getName();
            String email = cartModel.getUser().getUid();
            userNameandEmail = String.join(",", userName, email);
            LOG.info("BHGEBudgetoryQuoteServiceImpl bqexcel usernameandEmail"+userNameandEmail);
        }

        createRow(sheet ,1,"Quote Date",currentDate);
        //createRow(sheet,2,"Valid Until","30 days from the date of issue.");
        Row row = sheet.createRow(2);
        row.createCell(0).setCellValue("Valid Until");
        Cell cell = row.createCell(1);
        String text ="30 days from the date of issue.(Subject to change)";
        XSSFRichTextString subjectText = new XSSFRichTextString(text);
        String changeText ="(Subject to change)";
        int startsubject = text.indexOf(changeText);
        int endsubject = startsubject + changeText.length();
        subjectText.applyFont(startsubject,endsubject,headerFont);
        cell.setCellValue(subjectText);
        createRow(sheet,3,"Sold To Party",soldTo);
        if(null != cartModel.getSoldToForCart() && null != cartModel.getSoldToForCart().getIncoterms1()
        && null != cartModel.getSoldToForCart().getIncoterms2()) {
            String incoterms = cartModel.getSoldToForCart().getIncoterms1() +" "+cartModel.getSoldToForCart().getIncoterms2();
            createRow(sheet, 4, "INCOTERMS", incoterms);
            LOG.info("BHGEBudgetoryQuoteServiceImpl bqexcel incoterms"+incoterms);
        }
        else{
            createRow(sheet, 4, "INCOTERMS", StringUtils.EMPTY);
        }
        if(null != cartModel.getSoldToForCart() && null != cartModel.getSoldToForCart().getPaymentTrms() && null != cartModel.getSoldToForCart().getPaymentTrms().getName()) {
            String paymentTerms = cartModel.getSoldToForCart().getPaymentTrms().getCode()+" "+cartModel.getSoldToForCart().getPaymentTrms().getName();
            createRow(sheet, 6, "Payment Terms",paymentTerms);
        }else{
            createRow(sheet, 6, "Payment Terms", StringUtils.EMPTY);
        }
        createRow(sheet,7,"Quote To",formatedAddress);
        createRow(sheet,8,"Quote Creator",userNameandEmail);

        int startRow = 10;
        Row productHeaderRow = sheet.createRow(startRow);
        productHeaderRow.createCell(0).setCellValue("Product Number");
        productHeaderRow.createCell(1).setCellValue("Quantity");
        productHeaderRow.createCell(2).setCellValue("Name");
        productHeaderRow.createCell(3).setCellValue("Configured Part Number");
        productHeaderRow.createCell(4).setCellValue("Price");
        int rowCount = startRow+1;
        int maxLeadTime = 0;
        if(null != cartData.getEntries() && cartData.getEntries().size() > 0) {
            for (OrderEntryData cartEntryData : cartData.getEntries()) {
                LOG.info("BHGEBudgetoryQuoteServiceImpl inside productdetails for part"+cartEntryData.getPartNumber());
                Row productDetailRow = sheet.createRow(rowCount++);
                if(cartEntryData.getLeadTime() != null) {
                    if(cartEntryData.getLeadTime() > maxLeadTime) {
                        maxLeadTime = cartEntryData.getLeadTime();
                    }
                }
                if(null != cartEntryData.getProduct()) {
                    productDetailRow.createCell(0).setCellValue(cartEntryData.getProduct().getCode());
                }
                productDetailRow.createCell(1).setCellValue(cartEntryData.getQuantity());
                if(null != cartEntryData.getProduct()) {
                    productDetailRow.createCell(2).setCellValue(cartEntryData.getProduct().getName());
                }
                if (null != cartEntryData.getFullyConfigurePartNumber()) {
                    productDetailRow.createCell(3).setCellValue(cartEntryData.getFullyConfigurePartNumber());
                }
                if (null != cartEntryData.getTotalPrice() && null != cartEntryData.getTotalPrice().getFormattedValue())
                    productDetailRow.createCell(4).setCellValue(cartEntryData.getTotalPrice().getFormattedValue());
            }
        }

        //String estimatedLeadTime = maxLeadTime +" "+"Weeks";

        Row leadtimeRow = sheet.createRow(5);
        leadtimeRow.createCell(0).setCellValue("Estimated Lead time");
        Cell leadTimeCell =  leadtimeRow.createCell(1);
        String leadTime =maxLeadTime +" "+"Weeks (Subject to change)";
        XSSFRichTextString leadtimeText = new XSSFRichTextString(leadTime);
        String boldtimetext ="(Subject to change)";
        int startLT = leadTime.indexOf(boldtimetext);
        int endLT = startLT + boldtimetext.length();
        leadtimeText.applyFont(startLT,endLT,headerFont);
        leadTimeCell.setCellValue(leadtimeText);
        //createRow(sheet,5,"Estimated Lead time", estimatedLeadTime);
        LOG.info("BHGEBudgetoryQuoteServiceImpl bqexcel productdetails are set");
        // Total Price
        Map.Entry<Boolean,String> couponvalue = getCouponDiscount(cartModel);
        if(null != couponvalue && null != couponvalue.getKey() && couponvalue.getKey().equals(true)) {
            Row coupondiscountRow = sheet.createRow(rowCount++);
            Cell coupondiscountCell = coupondiscountRow.createCell(3);
            coupondiscountCell.setCellValue("DS Store Discount");
            if(null != couponvalue.getValue()){
                coupondiscountCell.setCellValue(couponvalue.getValue());
                LOG.info("BHGEBudgetoryQuoteServiceImpl coupon discount is set"+couponvalue.getValue());
            }
        }
        Row totalRow = sheet.createRow(rowCount++);

        Cell total = totalRow.createCell(3);
        total.setCellValue("Total Price");
        if( null != cartData.getTotalPrice()) {
            totalRow.createCell(4).setCellValue(cartData.getTotalPrice().getFormattedValue());
            LOG.info("BHGEBudgetoryQuoteServiceImpl bqexcel totalPrice is set");
        }

        rowCount= rowCount+2;

        Row noteRowLine1 = sheet.createRow(rowCount++);
        Cell noteCellLine1 = noteRowLine1.createCell(0);

        String note1 = "Note- This document is provided solely for budgetory planning and preliminary discussion purposes.";
        XSSFRichTextString note1inRichText = new XSSFRichTextString(note1);
        note1inRichText.applyFont(note1.indexOf("budgetory planning"),note1.length(),headerFont);
        noteCellLine1.setCellValue(note1inRichText);

        Row noteRowLine2 = sheet.createRow(rowCount++);
        Cell noteCellLine2 = noteRowLine2.createCell(0);
        String note2 = "This Budgetary Quote does not constitute an offer to sell, a commitment to supply, or a legally binding proposal by Baker Hughes or its affiliates.";
        XSSFRichTextString note2inRichText = new XSSFRichTextString(note2);
        String boldText = "does not constitute an offer to sell, a commitment to supply, or a legally binding proposal";
        int start = note2.indexOf(boldText);
        int end = start + boldText.length();
        note2inRichText.applyFont(start,end,headerFont);
        noteCellLine2.setCellValue(note2inRichText);

        Row noteRowLine3 = sheet.createRow(rowCount++);
        Cell noteCellLine3 = noteRowLine3.createCell(0);
        noteCellLine3.setCellValue("No contractual obligations, commercial commitments, or pricing guarantees are established through this document.");

        Row noteRowLine4 = sheet.createRow(rowCount++);
        Cell noteCellLine4 = noteRowLine4.createCell(0);
        noteCellLine4.setCellValue("All information provided is subject to change without notice and remains contingent upon final technical clarification, commercial review, approvals, and availability.");
        //sheet.autoSizeColumn(1);
        String fileName = customFileName + ".xlsx";
        response.setContentType("application/vnd.ms-excel");
        response.setHeader("Content-disposition", "attachment;filename=" + fileName);

        try (OutputStream out = response.getOutputStream()) {
            workbook.write(out);
            out.flush();
        }
    } catch (Exception e) {
        LOG.error("Error creating excel template:", e);
    }
}

    private Map.Entry<Boolean, String> getCouponDiscount(CartModel cartModel) {
        if ( null != cartModel && CollectionUtils.isNotEmpty(cartModel.getGlobalDiscountValues() )&& CollectionUtils.isNotEmpty(cartModel.getAppliedCouponCodes())){
            for (DiscountValue discount : cartModel.getGlobalDiscountValues()) {
                if(discount.getCode().startsWith("Action")){
                    return new AbstractMap.SimpleEntry<>(true,String.valueOf(discount.getAppliedValue()));
                }
            }
        }
        return new AbstractMap.SimpleEntry<>(false,null);
    }

    private String getSoldto(CartData cartData) {
        String soldTo = null;
        if (cartData.getSaleaAreaID() != null && cartData.getSaleaAreaID().contains("_")) {
            String soldToUID = cartData.getSaleaAreaID();
            if (null != soldToUID) {
                final String[] splitSoldToUID = soldToUID.split("_");
                soldTo = splitSoldToUID[0];
                LOG.info("BHGEBudgetoryQuoteServiceImpl  soldto" + soldTo);
            }
        }
        return soldTo;
    }

    private String getCurrentDate(CartData cartData) {
        String date = LocalDate.now().format(DateTimeFormatter.ofPattern("dd-MM-yyyy"));
        return date;
    }

    @Override
    public void generatePdfForBudgetoryQuote(CartData cartData, String customFileName, String formatedAddress, HttpServletRequest request, HttpServletResponse response, CartModel cartModel) throws FOPException, IOException, URISyntaxException, TransformerException, JAXBException {
            BHGEBudgetoryQuotePdf budgetoryQuoteData = getBudgetoryQuoteData(cartData,formatedAddress,cartModel);
            final String budgetoryQuoteXMLData = generateBudgetoryQuoteXMLData(budgetoryQuoteData);
            final ByteArrayOutputStream pdfOutputStream = getPDFOutputStream(budgetoryQuoteXMLData, request,
                    response);
            updateResponseHeader(pdfOutputStream, request, response,customFileName);
        }

    private BHGEBudgetoryQuotePdf getBudgetoryQuoteData(CartData cartData, String formatedAddress, CartModel cartModel) {
        BHGEBudgetoryQuotePdf pdfData = new BHGEBudgetoryQuotePdf();
        LOG.info("BHGEBudgetoryQuoteServiceImpl bqpdf data for cart"+cartData.getCode());
      //  CartModel  cartModel = bhgeCartService.getCartByCodeForDSstore(cartData.getCode());
        pdfData.setBudgetoryQuoteDate(getCurrentDate(cartData));
        pdfData.setQuoteTo(formatedAddress);
        if(null != cartModel.getSoldToForCart() && null != cartModel.getSoldToForCart().getIncoterms1() && null != cartModel.getSoldToForCart().getIncoterms2()) {
            String incoterms = cartModel.getSoldToForCart().getIncoterms1() +" "+cartModel.getSoldToForCart().getIncoterms2();
            pdfData.setIncoterms(incoterms);
        }
        if(null != cartModel.getSoldToForCart() && null != cartModel.getSoldToForCart().getPaymentTrms() && null != cartModel.getSoldToForCart().getPaymentTrms().getName()) {
            String paymentTerms = cartModel.getSoldToForCart().getPaymentTrms().getCode()+" "+cartModel.getSoldToForCart().getPaymentTrms().getName();
            pdfData.setPaymentTerms(paymentTerms);
        }
        pdfData.setSoldToParty(getSoldto(cartData));
        if(null != cartModel.getUser()) {
            if(null != cartModel.getUser().getName()) {
                pdfData.setQuoteCreatorName(cartModel.getUser().getName());
            }
            if(null != cartModel.getUser().getUid()) {
                pdfData.setQuoteCreatorEmail(cartModel.getUser().getUid());
            }
        }
        if(null != cartData.getTotalPrice()) {
            pdfData.setTotalAmount(cartData.getTotalPrice().getFormattedValue());
        }
        if(null != cartData.getEntries() && CollectionUtils.isNotEmpty(cartData.getEntries())) {
            pdfData.setEntryData(getEntryData(cartData.getEntries(),pdfData));
        }
        Map.Entry<Boolean,String> couponvalue = getCouponDiscount(cartModel);
        if(null != couponvalue && null != couponvalue.getKey() && couponvalue.getKey().equals(true)) {
            pdfData.setCouponAmount(couponvalue.getValue());
            LOG.info("BHGEBudgetoryQuoteServiceImpl couponvalue" + pdfData.getCouponAmount());
        }
        return pdfData;
    }

    private List<BHGEBudgetoryQuoteEntryData> getEntryData(List<OrderEntryData> entries,BHGEBudgetoryQuotePdf pdfData) {
        List<BHGEBudgetoryQuoteEntryData> pdfentryData = new ArrayList<>();
        int lineItemNumber = 1000;
        int maxLeadTime = 0;
        for (OrderEntryData orderEntryData : entries) {
            BHGEBudgetoryQuoteEntryData entryData = new BHGEBudgetoryQuoteEntryData();
            GEEdgeProductModel productModel=null;
            if(null != orderEntryData.getProduct()) {
                 productModel = (GEEdgeProductModel) userProfileService.getProductForCode(orderEntryData.getProduct().getCode());
            }
            int itemnum = orderEntryData.getEntryNumber() +1;
            int number = itemnum * lineItemNumber;
            LOG.info("BHGEBudgetoryQuoteServiceImpl bqpdf entry data for entry number"+number);
            if(orderEntryData.getLeadTime() != null) {
                entryData.setLeadtime(orderEntryData.getLeadTime()+"weeks");
                if(orderEntryData.getLeadTime() > maxLeadTime) {
                    maxLeadTime = orderEntryData.getLeadTime();
                }
            }
            entryData.setItemNo(number);
            entryData.setPartNumber((orderEntryData.getProduct().getCode()));
            entryData.setDescription(orderEntryData.getProduct().getName());
            entryData.setQuantity(orderEntryData.getQuantity());
            if(null != productModel && null != productModel.getUnit()) {
                entryData.setUom(productModel.getUnit().getCode());
            }
            entryData.setNetTotal(orderEntryData.getNetSellingPrice().getFormattedValue());
            entryData.setUnitPrice(orderEntryData.getListPrice().getFormattedValue());
            if(null != orderEntryData.getYourPriceDiscount()) {
                entryData.setDiscountamount(orderEntryData.getYourPriceDiscount().getFormattedValue());
            }
            entryData.setDiscountpercentage(orderEntryData.getDiscountPercentage());
            if(null != orderEntryData.getFullyConfigurePartNumber()){
                entryData.setFullconfigLongNumber(orderEntryData.getFullyConfigurePartNumber());
            }
            pdfentryData.add(entryData);
        }
        pdfData.setEstimatedLeadTime(maxLeadTime+" "+"Weeks");
        LOG.info("BHGEBudgetoryQuoteServiceImpl bqpdf entrydata set");
        return pdfentryData;
    }

    private String generateBudgetoryQuoteXMLData(final BHGEBudgetoryQuotePdf bhgeBudgetoryQuotePdf)
            throws JAXBException, IOException, FOPException, TransformerException, URISyntaxException {
        LOG.info("BHGEBudgetoryQuoteServiceImpl Inside generatePDFData()");
        final JAXBContext budgetoryQuotePDFContext = JAXBContext.newInstance(BHGEBudgetoryQuotePdf.class);
        final StringWriter sw = new StringWriter();
        final Marshaller pdfDataMarshaller = budgetoryQuotePDFContext.createMarshaller();
        pdfDataMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        pdfDataMarshaller.marshal(bhgeBudgetoryQuotePdf, sw);
        final String budgetoryQuoteXMLData = sw.toString();
        return budgetoryQuoteXMLData;
    }

    private ByteArrayOutputStream getPDFOutputStream(final String result, HttpServletRequest request,
                                                                HttpServletResponse response) throws IOException, TransformerException, FOPException, URISyntaxException {

        final String xsltMediaID = configurationService.getConfiguration().getString(BUDGETORY_QUOTE_XSL_FILE_MEDIA_ID);
        final ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        try {
            final StreamSource xmlSource = new StreamSource(new StringReader(result));
            LOG.info("BHGEBudgetoryQuoteServiceImpl budgetoryQuote media code: "+ xsltMediaID);
            String xslUrl = null;
            if(null != xsltMediaID) {
                xslUrl = xsltMediaID.trim();
            }
                final MediaModel xsltMedia = getMediaByCode(xslUrl);
            final String xsltMediaURL;
            if (xsltMedia != null) {
                LOG.info("BHGEBudgetoryQuoteServiceImpl Inside budgetoryQuote xslmedia if condition");
                xsltMediaURL = String.format("%s%s",
                        StringEscapeUtils.escapeHtml4(request.getRequestURL().toString()).substring(0, request.getRequestURL().indexOf(request.getContextPath())),
                        xsltMedia.getURL());
            } else {
                LOG.info("BHGEBudgetoryQuoteServiceImpl Inside budgetoryQuote xslmedia else condition");
                xsltMediaURL = configurationService.getConfiguration().getString(BUDGETORY_QUOTE_PDF_XSL_BLOB_PATH);
            }
            LOG.info("BHGEBudgetoryQuoteServiceImpl budgetoryQuote xsltMediaURL: "+xsltMediaURL);
            final URL url = new URL(StringEscapeUtils.escapeHtml4(xsltMediaURL));
            LOG.info("BHGEBudgetoryQuoteServiceImpl budgetoryQuote URL: "+url);
            final BufferedReader read = new BufferedReader(new InputStreamReader(url.openStream()));
            final FopFactory fopFactory = FopFactory.newInstance(url.toURI());
            final FOUserAgent foUserAgent = fopFactory.newFOUserAgent();
            final TransformerFactory factory = TransformerFactory.newInstance();
            final Transformer transformer = factory.newTransformer(new StreamSource(read));
            final Fop fop = fopFactory.newFop(MimeConstants.MIME_PDF, foUserAgent, outStream);
            final Result res = new SAXResult(fop.getDefaultHandler());
            transformer.transform(xmlSource, res);
        } catch (final JsonProcessingException e) {
            LOG.error("JsonProcessingException:::::::" + e.getMessage());
        }
        return outStream;
    }

    private void updateResponseHeader(ByteArrayOutputStream outStream, HttpServletRequest request,
                                      HttpServletResponse response, String customFileName) {
        final Timestamp timestamp = new Timestamp(System.currentTimeMillis());
        final SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
        final byte[] pdfBytes = outStream.toByteArray();

        try {
            response.setContentLength(pdfBytes.length);
            response.setContentType(CONTENT_TYPE);
            response.addHeader("Content-Disposition",
                    "attachment; filename= " + customFileName + PDF);
            response.getOutputStream().write(pdfBytes);
            response.getOutputStream().flush();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            LOG.error("IO Exception:::::::" + e.getMessage());
        }

    }

    private MediaModel getMediaByCode(final String mediaCode) {
        if (StringUtils.isNotEmpty(mediaCode)) {
            for (final CatalogVersionModel catalogVersionModel : catalogVersionService.getSessionCatalogVersions()) {

                final MediaModel media = getMediaByCodeAndCatalogVersion(mediaCode, catalogVersionModel);
                if (media != null) {
                    LOG.info("BHGEBudgetoryQuoteServiceImpl Inside budgetoryQuote media condition: "+ media);
                    return media;
                }
            }
        }
        LOG.info("Inside budgetoryQuote getMediaByCode return null");
        return null;
    }

    private MediaModel getMediaByCodeAndCatalogVersion(final String mediaCode,
                                                       final CatalogVersionModel catalogVersionModel) {
        try {
            return mediaService.getMedia(catalogVersionModel, mediaCode);
        } catch (final UnknownIdentifierException ignore) {
            // Ignore this exception
            LOG.error("File Not Found :: " + mediaCode + ignore);
        }
        return null;
    }

    private void createRow(Sheet sheet, int i, String header, String value) {
    Row row = sheet.createRow(i);
    row.createCell(0).setCellValue(header);
    row.createCell(1).setCellValue(value);
}


}
