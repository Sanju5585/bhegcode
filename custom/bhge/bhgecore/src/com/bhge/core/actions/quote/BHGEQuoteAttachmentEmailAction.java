package com.bhge.core.actions.quote;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.quote.service.pdf.BHGEQuoteEntryData;
import com.bhge.core.quote.service.pdf.DsQuoteCartPdf;
import com.fasterxml.jackson.core.JsonProcessingException;
import de.hybris.platform.acceleratorservices.email.CMSEmailPageService;
import de.hybris.platform.acceleratorservices.email.EmailGenerationService;
import de.hybris.platform.acceleratorservices.email.EmailService;
import de.hybris.platform.acceleratorservices.model.cms2.pages.EmailPageModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAddressModel;
import de.hybris.platform.acceleratorservices.model.email.EmailAttachmentModel;
import de.hybris.platform.acceleratorservices.model.email.EmailMessageModel;
import de.hybris.platform.acceleratorservices.process.strategies.ProcessContextResolutionStrategy;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.category.CategoryService;
import de.hybris.platform.commerceservices.model.process.BHGEQuoteProcessModel;
import de.hybris.platform.commerceservices.order.dao.CommerceQuoteDao;
import de.hybris.platform.commerceservices.order.strategies.QuoteStateSelectionStrategy;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.QuoteModel;
import de.hybris.platform.core.model.user.UserModel;
import de.hybris.platform.enumeration.EnumerationService;
import de.hybris.platform.order.QuoteService;
import de.hybris.platform.processengine.BusinessProcessService;
import de.hybris.platform.processengine.action.AbstractProceduralAction;
import de.hybris.platform.processengine.action.AbstractSimpleDecisionAction;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.store.services.BaseStoreService;
import de.hybris.platform.task.RetryLaterException;
import de.hybris.platform.util.Config;
import org.apache.fop.apps.FOUserAgent;
import org.apache.fop.apps.Fop;
import org.apache.fop.apps.FopFactoryBuilder;
import org.apache.fop.configuration.Configuration;
import org.apache.fop.configuration.ConfigurationException;
import org.apache.fop.configuration.DefaultConfigurationBuilder;
import org.apache.log4j.Logger;
import org.apache.xmlgraphics.util.MimeConstants;

import org.xml.sax.SAXException;

import jakarta.annotation.Resource;
import javax.xml.XMLConstants;
import jakarta.xml.bind.JAXBContext;
import jakarta.xml.bind.JAXBException;
import jakarta.xml.bind.Marshaller;
import javax.xml.transform.Result;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXResult;
import javax.xml.transform.stream.StreamSource;
import java.io.*;
import java.net.URISyntaxException;
import java.net.URL;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class BHGEQuoteAttachmentEmailAction extends AbstractProceduralAction<BHGEQuoteProcessModel> {

    private static final Logger LOG = Logger.getLogger(BHGEGenerateQuoteEmailAction.class);
    private static final String DATE_FORMAT_PDF = "dd MMM yyyy";
    private static final String QUOTE_XSL_FILE_PATH = "quote.pdf.xls.path";
    private static final String QUOTE = "Quote";
    private static final String PDF = ".pdf";
    public static final String PDF_MIME_TYPE = "pdf";

    private CMSEmailPageService cmsEmailPageService;
    private String frontendTemplateName;
    private ProcessContextResolutionStrategy contextResolutionStrategy;
    private EmailGenerationService emailGenerationService;
    @Resource(name = "businessProcessService")
    private BusinessProcessService businessProcessService;
    @Resource(name = "emailService")
    private EmailService emailService;
    @Resource(name = "commerceQuoteDao")
    private CommerceQuoteDao commerceQuoteDao;
    @Resource(name = "quoteStateSelectionStrategy")
    private QuoteStateSelectionStrategy quoteStateSelectionStrategy;
    @Resource(name = "userService")
    private UserService userService;
    @Resource(name = "baseStoreService")
    private BaseStoreService baseStoreService;
    @Resource(name = "categoryService")
    private CategoryService categoryService;
    @Resource(name = "catalogVersionService")
    private CatalogVersionService catalogVersionService;

    @Resource(name = "mediaService")
    private MediaService mediaService;

    @Resource(name = "configurationService")
    private ConfigurationService configurationService;
    @Resource(name = "enumerationService")
    private EnumerationService enumerationService;

    protected CMSEmailPageService getCmsEmailPageService()
    {
        return cmsEmailPageService;
    }


    public void setCmsEmailPageService(final CMSEmailPageService cmsEmailPageService)
    {
        this.cmsEmailPageService = cmsEmailPageService;
    }

    protected String getFrontendTemplateName()
    {
        return frontendTemplateName;
    }


    public void setFrontendTemplateName(final String frontendTemplateName)
    {
        this.frontendTemplateName = frontendTemplateName;
    }

    protected ProcessContextResolutionStrategy getContextResolutionStrategy()
    {
        return contextResolutionStrategy;
    }


    public void setContextResolutionStrategy(final ProcessContextResolutionStrategy contextResolutionStrategy)
    {
        this.contextResolutionStrategy = contextResolutionStrategy;
    }

    protected EmailGenerationService getEmailGenerationService()
    {
        return emailGenerationService;
    }


    public void setEmailGenerationService(final EmailGenerationService emailGenerationService)
    {
        this.emailGenerationService = emailGenerationService;
    }

    @Resource(name = "quoteService")
    private QuoteService quoteService;

    @Override
    public void executeAction(BHGEQuoteProcessModel businessProcessModel) throws RetryLaterException, Exception {
        LOG.info("US564371 :  Inside the BHGEQuoteAttachmentEmailAction");
        final QuoteModel quote = quoteService.getCurrentQuoteForCode(businessProcessModel.getQuoteCode());
        LOG.info("US564371 : QuoteCode"+ quote.getCode());

        getContextResolutionStrategy().initializeContext(businessProcessModel);
        CatalogVersionModel contentCatalogVersion = getContextResolutionStrategy().getContentCatalogVersion(
                businessProcessModel);
        if (contentCatalogVersion != null)
        {
            LOG.info("US564371 : contentCatalogVersion is not null");
            final EmailPageModel emailPageModel = getCmsEmailPageService().getEmailPageForFrontendTemplate(getFrontendTemplateName(),
                    contentCatalogVersion);
            if (emailPageModel != null)
            {
                LOG.info("US564371 : emailPageModel is not null");
                emailPageModel.setFromEmail(Config.getParameter("customer.fromEmail.default"));
                final EmailMessageModel emailMessageModel = getEmailGenerationService().generate(businessProcessModel, emailPageModel);
                if (emailMessageModel == null)
                {
                    LOG.warn("US564371: Failed to generate email message - emailMessageModel is null");
                    return;
                }
                LOG.info("US564371 : emailMessageModel is not null");
                List<EmailAttachmentModel> emailAttachments = null;
                if (quote.getAttachments() != null && quote.getAttachments().size() > 0) {
                    LOG.info("US564371 : Atttaching Quote Attachment");
                    emailAttachments = new ArrayList<EmailAttachmentModel>();
                    for (MediaModel file : quote.getAttachments()) {
                        if (file != null) {
                            try {
                                String realFileName = file.getRealFileName();
                                String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new java.util.Date());
                                String attachCode = realFileName + timeStamp;
                                DataInputStream dataInputStream = new DataInputStream(mediaService.getStreamFromMedia(file));
                                EmailAttachmentModel attachment = emailService.createEmailAttachment(dataInputStream,
                                        attachCode, file.getMime());
                                attachment.setRealFileName(realFileName);
                                modelService.save(attachment);
                                emailAttachments.add(attachment);
                            } catch (Exception e) {
                                LOG.error("US564371: unable to add attachments from quote:" + quote.getCode() + "with error:"
                                        + e.getMessage());
                            }
                        }
                    }
                }
                if(emailAttachments!=null && !emailAttachments.isEmpty()){
                    LOG.info("US564371 : Adding Quote Attachment to Email MessageModel");
                    emailMessageModel.setAttachments(emailAttachments);
                    modelService.save(emailMessageModel);
                }
                //Adding Quote PDF in Quote Email
                EmailAttachmentModel quoteAttachment = null;
                try {
                    LOG.info("US564371 : Adding Quote PDF as attachment");
                    quoteAttachment = getQuotePDFAttachment(quote);
                } catch (JAXBException | IOException | URISyntaxException | TransformerException e) {
                    LOG.error("US564371 : unable to attach quote as PDF:" + quote.getCode() + "with error:"
                            + e.getMessage());
                }
                if(quoteAttachment !=null) {
                    LOG.info("US564371 : Adding Quote PDF to Email MessageModel");
                    if(emailAttachments == null)
                        emailAttachments = new ArrayList<EmailAttachmentModel>();
                    emailAttachments.add(quoteAttachment);
                    emailMessageModel.setAttachments(emailAttachments);
                    modelService.save(emailMessageModel);
                }

                final List<EmailMessageModel> emails = new ArrayList<>();
                emails.addAll(businessProcessModel.getEmails());
                emails.add(emailMessageModel);
                businessProcessModel.setEmails(emails);
                getModelService().save(businessProcessModel);
                LOG.info("US564371 : Attachments done PorcessModel saved");
            }
            else{
                LOG.error("US564371 : Could not retrieve email page model for " + getFrontendTemplateName() + " and "
                        + contentCatalogVersion.getCatalog().getName() + ":" + contentCatalogVersion.getVersion()
                        + ", cannot generate email content");
            }
        }else{
            LOG.error("US564371 : Could not resolve the content catalog version, cannot generate email content");
        }
        LOG.info("US564371 :Retruning executeAction of BHGEQuoteAttachmentEmail Action");
        return;
    }

    private EmailAttachmentModel getQuotePDFAttachment(QuoteModel quoteModel) throws JAXBException,
            IOException, URISyntaxException, TransformerException {
        LOG.info("US564371 : inside getQuotePDFAttachment");
        EmailAttachmentModel quotePDFasAttachment = null;
        final UserModel currentUser = userService.getCurrentUser();

        final String xsltFile = configurationService.getConfiguration().getProperty(QUOTE_XSL_FILE_PATH).toString();
        final JAXBContext rfqPDFContext = JAXBContext.newInstance(DsQuoteCartPdf.class);
        final StringWriter sw = new StringWriter();
        final Marshaller rfqCartMarshaller = rfqPDFContext.createMarshaller();
        rfqCartMarshaller.setProperty(Marshaller.JAXB_FORMATTED_OUTPUT, true);
        final DsQuoteCartPdf dsCartDataPdfs = getQuoteDataValue(quoteModel);
        rfqCartMarshaller.marshal(dsCartDataPdfs, sw);
        final String result = sw.toString();
        LOG.info("US564371 : Got QuotePDF as XML");
        quotePDFasAttachment = generateQuotePdf(result, xsltFile,quoteModel);
        LOG.info("US564371 : DownloadPDFQuoteCheck" + result);
        return quotePDFasAttachment;
    }

    private EmailAttachmentModel generateQuotePdf(String xml, String xsltFile, QuoteModel quoteModel) throws URISyntaxException, IOException,
            TransformerException {
        EmailAttachmentModel attachment = null;
        try {
            LOG.info("US564371 : inside generateQuotePdf");
            final StreamSource xmlSource = new StreamSource(new StringReader(xml));
            final Timestamp timestamp = new Timestamp(System.currentTimeMillis());
            final SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd-HHmmss");
            final URL url = new URL(xsltFile);
            final BufferedReader read = new BufferedReader(new InputStreamReader(url.openStream()));
            DefaultConfigurationBuilder cfgBuilder = new DefaultConfigurationBuilder();
            Configuration cfg = cfgBuilder.build(new URL("https://oucbgdxcttupmy55qxxmhw4.blob.core.windows.net/misc/fopconfig.xml").openStream());
            LOG.info("US564371 : FOP Configuration: " + cfg);
            FopFactoryBuilder fopFactoryBuilder = new FopFactoryBuilder(url.toURI()).setConfiguration(cfg);
            final FOUserAgent foUserAgent = fopFactoryBuilder.build().newFOUserAgent();
            final ByteArrayOutputStream outStream = new ByteArrayOutputStream();
            final TransformerFactory factory = TransformerFactory.newInstance();
            factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_DTD, "");
            factory.setAttribute(XMLConstants.ACCESS_EXTERNAL_STYLESHEET, "");
            final Transformer transformer = factory.newTransformer(new StreamSource(read));
            final Fop fop = fopFactoryBuilder.build().newFop(MimeConstants.MIME_PDF, foUserAgent, outStream);
            final Result res = new SAXResult(fop.getDefaultHandler());
            transformer.transform(xmlSource, res);
            final byte[] pdfBytes = outStream.toByteArray();
            LOG.info("US564371 : Got pdfBytes");
            String quoteFileName = QUOTE + "-" + quoteModel.getCode() + PDF;

            ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(pdfBytes);
            DataInputStream dataInputStream = new DataInputStream(byteArrayInputStream);
            LOG.info("US564371 : Attaching File: "+quoteFileName);
            attachment = emailService.createEmailAttachment(dataInputStream,
                    quoteFileName, PDF_MIME_TYPE);
            attachment.setRealFileName(quoteFileName);
            modelService.save(attachment);
            LOG.info("US564371 : Attachment Saved: ");
        } catch (final JsonProcessingException e) {
            LOG.info("US564371 : JsonProcessingException:::::::" + e.getMessage());
        } catch (ConfigurationException | SAXException e) {
            e.printStackTrace();
        }
        LOG.info("US564371 : Returning Attachment ");
        return attachment;
    }

    private DsQuoteCartPdf getQuoteDataValue(QuoteModel quoteModel) {
        final DsQuoteCartPdf dsQuoteDataPdfs = new DsQuoteCartPdf();

        if (null != quoteModel)
        {
            dsQuoteDataPdfs.setCustomerProjectName(quoteModel.getSoldToForCart().getName());
            dsQuoteDataPdfs.setQuoteID(quoteModel.getCode());
            if (null != quoteModel.getCartType())
            {
                dsQuoteDataPdfs.setOrderType(quoteModel.getCommerceType().getCode());
            }
            dsQuoteDataPdfs.setEndUserIndustry(quoteModel.getCartType().getCode());
            LOG.info("enduser1 " + quoteModel.getCartType().getCode());
            LOG.info("enduser2 " + enumerationService.getEnumerationName(quoteModel.getCommerceType()));
            dsQuoteDataPdfs.setNotificationEmail(quoteModel.getOrderConfirmationEMail());
            if (null != quoteModel.getSubtotal()) {
                Double cartTotal = quoteModel.getSubtotal();
                if (quoteModel.getCurrency().getIsocode().equalsIgnoreCase("JPY")) {
                    String jpyPrice = String.valueOf(cartTotal.longValue());
                    LOG.info("jpyPrice " + jpyPrice);
                    dsQuoteDataPdfs.setTotalItems(jpyPrice);
                } else {
                    dsQuoteDataPdfs.setTotalItems(String.valueOf(cartTotal));
                }
            }

            if (null != quoteModel.getDeliveryAddress())
            {
                dsQuoteDataPdfs.setShipToAddressLine1(quoteModel.getDeliveryAddress().getLine1());
                dsQuoteDataPdfs.setShipToAddressLine2(quoteModel.getDeliveryAddress().getLine2());
                dsQuoteDataPdfs.setShipToAddressPostalCode(quoteModel.getDeliveryAddress().getPostalcode());
                if(quoteModel.getDeliveryAddress().getRegion()!=null)
                    dsQuoteDataPdfs.setShipToAddressRegion(quoteModel.getDeliveryAddress().getRegion().getName());
                dsQuoteDataPdfs.setShipToAddressTown(quoteModel.getDeliveryAddress().getTown());
            }
            if (null != quoteModel.getPayerAddress())
            {
                dsQuoteDataPdfs.setBillToAddressLine1(quoteModel.getPayerAddress().getLine1());
                dsQuoteDataPdfs.setBillToAddressLine2(quoteModel.getPayerAddress().getLine2());
                dsQuoteDataPdfs.setBillToAddressPostalCode(quoteModel.getPayerAddress().getPostalcode());
                if(quoteModel.getPayerAddress().getRegion()!=null)
                    dsQuoteDataPdfs.setBillToAddressRegion(quoteModel.getPayerAddress().getRegion().getName());
                dsQuoteDataPdfs.setBillToAddressTown(quoteModel.getPayerAddress().getTown());
            }


            final String formattedSysDate = getCurrentdate();
            dsQuoteDataPdfs.setCurrentDate(formattedSysDate);
            final List<BHGEQuoteEntryData> productList = new ArrayList<BHGEQuoteEntryData>();
            int loopCount = quoteModel.getEntries().size();
            String currency = quoteModel.getCurrency().getIsocode();
            LOG.info("ListCount" + loopCount);
            if(loopCount>0) {
                for (int i = 0; i < loopCount; i++) {
                    BHGEQuoteEntryData bhgeQuoteEntryData = new BHGEQuoteEntryData();
                    bhgeQuoteEntryData.setDSItemCount(i+1);
                    bhgeQuoteEntryData.setDSProductCode(quoteModel.getEntries().get(i).getProduct().getCode());
                    bhgeQuoteEntryData.setDSProductName(quoteModel.getEntries().get(i).getProduct().getName());
                    if(null != quoteModel.getEntries().get(i).getTotalPrice() ) {
                        Double totalPrice = quoteModel.getEntries().get(i).getTotalPrice();
                        if (currency.equalsIgnoreCase("JPY") && null != totalPrice) {
                            String jpyPrice = String.valueOf(totalPrice.longValue());
                            LOG.info("jpyPrice " + jpyPrice);
                            bhgeQuoteEntryData.setDSProductPrice(jpyPrice);
                        } else {
                            bhgeQuoteEntryData.setDSProductPrice(String.valueOf(totalPrice));
                        }
                    }
                    bhgeQuoteEntryData.setDSProductQuantity(quoteModel.getEntries().get(i).getQuantity());
                    bhgeQuoteEntryData.setDSProductCurrency(quoteModel.getCurrency().getName());
                    bhgeQuoteEntryData.setDSProductUnit(quoteModel.getEntries().get(i).getUnit().getName());
                    LOG.info("ProductName1 " + bhgeQuoteEntryData.getDSProductName());
                    LOG.info("ProductName2 " + quoteModel.getEntries().get(0).getProduct().getName());
                    productList.add(bhgeQuoteEntryData);
                }
            }
			/*final List<ImageData> productAttachementList = new ArrayList<ImageData>();
			final DsPdfImageData dsPdfImageData = new DsPdfImageData();
			if (null != quoteData.getAttachments())
			{
				quoteData.getAttachments().forEach(image-> {
					productAttachementList.add(image);
					dsPdfImageData.setAttachments(productAttachementList);
				});
			}
			dsQuoteDataPdfs.setAttachments(dsPdfImageData);*/
            LOG.info("ProductListSize" + productList.size());
            dsQuoteDataPdfs.setEntries(productList);
        }
        return dsQuoteDataPdfs;
    }

    private String getCurrentdate() {
        final Date currentSysDate = new Date();
        final String requestedShipDate = new SimpleDateFormat(DATE_FORMAT_PDF).format(currentSysDate);
        return requestedShipDate;
    }

}
