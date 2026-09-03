package com.bhge.core.rma.service.impl;

import com.bhge.core.dataimport.service.BHGEBlobDataImportService;
import de.hybris.platform.b2b.model.B2BUnitModel;
import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogModel;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.servicelayer.config.ConfigurationService;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;


import java.io.*;
import java.text.Normalizer;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType0Font;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import org.apache.pdfbox.pdmodel.font.encoding.WinAnsiEncoding;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.model.BHGERmaEquipSerialNumberModel;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.pdf.event.HeaderFooterPage;
import com.bhge.core.rma.dao.BHGERmaFormDao;
import com.bhge.core.rma.service.BHGERmaFormService;
import com.bhge.core.util.BHGESoldToUtil;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.rma.data.BHGEHazardousInfoData;
import com.bhge.facades.rma.data.BHGERmaFormData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.hybris.ge.edge.core.model.type.BHGEAdditionalInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEChemicalDetailsModel;
import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;
import de.hybris.platform.servicelayer.search.FlexibleSearchService;




/**
 *
 * Pdfbox open source PDF file generation for replacing the itext.
 */
public class DefaultBHGERmaFormService implements BHGERmaFormService
{

	private final static Logger LOG = Logger.getLogger(DefaultBHGERmaFormService.class);

	private final static String RETURN = "RETURNFORCREDIT";
	private final static String CALIBERATON = "CALIBERATON";
	private final static String UPGRADE = "UPGRADE";
	private final static String REPAIR = "REPAIR";

	//Migration changes start
	private static final String BLOB_CONTAINER_NAME="blob.media.containerName";
	private static final String BLOB_FILE_NAME_TO_BE_READ_LOGO="blob.media.header.logo";
	private static final String BLOB_FILE_NAME_TO_BE_READ_TICK_MEDIA="blob.media.tick.image";
	private static final String BLOB_CONTAINER_NAME_FILE_PDF="blob.media.containerName.hazardous.pdf";
	private static final String BLOB_CONTAINER_NAME_CHECKOUT_FILE="blob.media.containerName.hazardous.pdf";

	@Resource(name="bhgeBlobDataImportService")
	private BHGEBlobDataImportService bhgeBlobDataImportService;

	@Resource(name="configurationService")
	private ConfigurationService configurationService;
	//Migration changes end

	@Resource(name = "bhgeRmaFormDao")
	BHGERmaFormDao bhgeRmaFormDao;

	@Resource(name = "mediaService")
	private MediaService mediaService;
	@Resource(name = "mediaCodeGenerator")
	private KeyGenerator mediaCodeGenerator;
	@Resource(name = "catalogVersionService")
	private CatalogVersionService catalogVersionService;

	@Resource(name = "bhgeCartService")
	public BHGECartService bhgeCartService;

	@Resource(name = "sessionService")
	public SessionService sessionService;

	private ModelService modelService;

	@Resource(name = "userService")
	public UserService userService;
	
	@Resource(name = "bhgeSoldToUtil")
	private BHGESoldToUtil bhgeSoldToUtil;

	@Autowired
	private FlexibleSearchService flexibleSearchService;

	/**
	 * @return the modelService
	 */
	public ModelService getModelService()
	{
		return modelService;
	}

	/**
	 * @param modelService
	 *           the modelService to set
	 */
	public void setModelService(final ModelService modelService)
	{
		this.modelService = modelService;
	}

	//	private static Font headerFont = new Font(Font.FontFamily.TIMES_ROMAN, 18, Font.BOLD);
	//	private static Font subFont = new Font(Font.FontFamily.TIMES_ROMAN, 16, Font.BOLD);
	//	private static Font smallBold = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.NORMAL);
	//	private static Font smallWithBold = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.BOLD);
	//	private static Font blueFont = new Font(Font.FontFamily.TIMES_ROMAN, 12, Font.NORMAL, BaseColor.BLUE);
	private static String FILE = Config.getParameter("bhge.hazardous.pdf.folder.location");
	private static String CHECKOUT_FILE = Config.getParameter("bhge.hazardous.pdf.folder.location");

	public static final PDFont TEXT_FONT = PDType1Font.HELVETICA;
	public static final PDFont TEXT_FONT_BOLD = PDType1Font.HELVETICA_BOLD;
	public static final float FONT_SIZE = 12;
	public static float leading = 1.0f * FONT_SIZE;
	public static float margin = 60;
	public static int line = 0;

	//default page size A4 . max size is x: 595 , y: 841
	public static final PDRectangle PAGE_SIZE = PDRectangle.A4;
	public static final float MARGIN = 20;
	public static final boolean IS_LANDSCAPE = false;
	public static float FONT_HEIGHT = TEXT_FONT.getFontDescriptor().getFontBoundingBox().getHeight() / 1000 * FONT_SIZE;
	public static float YCORDINATE;
	// Table configuration
	public static final float ROW_HEIGHT = 15;
	public static final float CELL_MARGIN = 2;

	//

	@Override
	public Boolean saveRma(final CartModel cartModel)
	{
		return bhgeRmaFormDao.saveRmaForm(cartModel);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.service.BHGERmaFormService#fetchCardData()
	 */
	@Override
	public List<BHGEHazardousInfoModel> fetchHazardData()
	{
		final List<BHGEHazardousInfoModel> hazardModelList = bhgeRmaFormDao.fetchHazardInfo();
		return hazardModelList;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.service.BHGERmaFormService#fetchCartEntries()
	 */
	@Override
	public CartModel fetchCart()
	{
		final CartModel cart = bhgeRmaFormDao.fetchCartDetails();
		return cart;
	}


	@Override
	public File generateHazardPdf(final AbstractOrderModel cart, final BHGERmaFormData rmaFormData) throws Exception
	{
		//		Document document = new Document();
		final String fileNo = cart != null && StringUtils.isNotEmpty(cart.getRmaNumber()) ? cart.getRmaNumber()
				: rmaFormData.getCartCode();
		// Migration changes start
		//final String fileName = "Hazard-info-" + fileNo + ".pdf";
		//final String finalName = "Hazard-info-" + fileNo + "-final.pdf";
		final String fileName = "Hazard-info-" + fileNo;
		final String finalName = "Hazard-info-" + fileNo + "-final";
		final String finalNamepdf = "Hazard-info-" + fileNo + "pdfbox-final.pdf";
		File filed = new File(FILE + fileName);
		//commenting unused variable
		//final File files = new File(FILE + finalName);
		try
		{
			filed = File.createTempFile(StringEscapeUtils.escapeHtml4(fileName),".pdf");
			//			final FileOutputStream fos = new FileOutputStream(filed);
			//			final PdfWriter writer = PdfWriter.getInstance(document, fos);
			//
			//			document.open();
			//			addMetaData(document);
			//			addContents(cart, document, rmaFormData, writer);
			//			document.close();
			//TODO remove this call.
			//			generateRMAHazardPdfForm(files, filed);
			//createRMAHazardPdfForm(cart, rmaFormData, fileName);
			createRMAHazardPdfForm(cart, rmaFormData, filed);
			//deleting temp file
			FileUtils.deleteQuietly(filed);
			//reading from Blob
			String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_FILE_PDF);
			filed=bhgeBlobDataImportService.readFromBlob(fileName,".pdf",checkoutFileContainerName);
			//Migration changes end
		}
		catch (final Exception e)
		{
			LOG.info("Error " + e);
			throw e;
		}
		finally
		{
		}
		return filed;
	}

	@Override
	public File generateCheckoutPdf(final AbstractOrderModel cart) throws Exception
	{
		//		Document document = new Document();
		YCORDINATE = PDRectangle.A4.getHeight() - margin;
		final String fileNo = cart != null && StringUtils.isNotEmpty(cart.getRmaNumber()) ? cart.getRmaNumber() : cart.getCode();
		//Migration changes start
		//final String fileName = "Checkout-info-" + fileNo + ".pdf";
		//final String finalName = "Checkout-info-" + fileNo + "-final.pdf";
		final String finalpdfboxName = "Checkout-info-" + fileNo + "pdbox-final.pdf";
		final String fileName = "Checkout-info-" + fileNo;
		final String finalName = "Checkout-info-" + fileNo+"-final";
		File filed = new File(CHECKOUT_FILE + fileName);
		//final File files = new File(CHECKOUT_FILE + finalName);
		try
		{
			filed = File.createTempFile(fileName,".pdf");
			final File files = File.createTempFile(finalName,".pdf");
			// create checkout PDF : can use https://bhge.local:7002/rma/checkoutPdf for direct generation.
			createCheckoutPdfboxForWs(cart, filed, files);
			//deleting temp file
			FileUtils.deleteQuietly(filed);
			//reading from Blob
			String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_CHECKOUT_FILE);
			filed=bhgeBlobDataImportService.readFromBlob(fileName,".pdf",checkoutFileContainerName);
			LOG.info("Checkout file read from blob" + filed.getName());
			//Migration changes end
		}
		catch (final Exception e)
		{
			LOG.info("Error " + e);
			throw e;
		}
		finally
		{
		}
		return filed;
	}
	
	//Added for spartacus migration
	@Override
	public File generateCheckoutPdfForWs(final AbstractOrderModel cart) throws Exception
	{
		//		Document document = new Document();
		YCORDINATE = PDRectangle.A4.getHeight() - margin;
		final String fileNo = cart != null && StringUtils.isNotEmpty(cart.getRmaNumber()) ? cart.getRmaNumber() : cart.getCode();
		//Migration changes start
		//final String fileName = "Checkout-info-" + fileNo + ".pdf";
		//final String finalName = "Checkout-info-" + fileNo + "-final.pdf";
		final String finalpdfboxName = "Checkout-info-" + fileNo + "pdbox-final.pdf";
		final String fileName = "Checkout-info-" + fileNo;
		final String finalName = "Checkout-info-" + fileNo+"-final";
		File filed = new File(CHECKOUT_FILE + fileName);
		//final File files = new File(CHECKOUT_FILE + finalName);
		try
		{
			filed = File.createTempFile(StringEscapeUtils.escapeHtml4(fileName),".pdf");
			final File files = File.createTempFile(StringEscapeUtils.escapeHtml4(finalName),".pdf");
			// create checkout PDF : can use https://bhge.local:7002/rma/checkoutPdf for direct generation.
			createCheckoutPdfboxForWs(cart, filed, files);
			//deleting temp file
			FileUtils.deleteQuietly(filed);
			//reading from Blob
			String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_CHECKOUT_FILE);
			filed=bhgeBlobDataImportService.readFromBlob(fileName,".pdf",checkoutFileContainerName);
			LOG.info("Checkout file read from blob" + filed.getName());
			//Migration changes end
		}
		catch (final Exception e)
		{
			LOG.info("Error " + e);
			throw e;
		}
		finally
		{
		}
		return filed;
	}


	//	private void addMetaData(final Document document)
	//	{
	//		document.addTitle("RMA hazard-info");
	//		document.addSubject("Using iText");
	//		document.addKeywords("Java, PDF, iText");
	//		document.addAuthor("BHGE");
	//
	//	}
	//
	//	private void addMetaDataForCheckout(final Document document)
	//	{
	//		document.addTitle("RMA Checkout-info");
	//		document.addSubject("Using iText");
	//		document.addKeywords("Java, PDF, iText");
	//		document.addAuthor("BHGE");
	//
	//	}


	//	private void addContents(final CartModel cart, final Document document, final BHGERmaFormData rmaFormData,
	//			final PdfWriter writer) throws DocumentException, MalformedURLException, IOException
	//	{
	//		final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
	//		final HeaderFooterPageEvent event = new HeaderFooterPageEvent();
	////		writer.setPageEvent(event);
	////		HeaderFooterPage.addPageHeaderFooter();
	//		//		addPageHeaderFooterok
	//		document.setMargins(50, 45, 50, 60);
	//		document.setMarginMirroring(false);
	//		final Paragraph preface = new Paragraph();
	//		addEmptyLine(preface, 2);
	//
	//		//Adding hazardous text chunk to 'para'
	//		final Paragraph para1 = new Paragraph();
	//		para1.add(new Chunk(
	//				"Please note that the below is the Hazardous Information which was provided at the time of RMA submission. This form is for your reference",
	//				smallBold));
	//		preface.add(para1);
	//
	//		addEmptyLine(preface, 2);
	//
	//		final Paragraph para2 = new Paragraph();
	//		para2.add(new Chunk("RMA DETAILS", headerFont));
	//		preface.add(para2);
	//		addEmptyLine(preface, 2);
	//		final String rmaNumber = StringUtils.isNotBlank(cart.getRmaNumber()) ? cart.getRmaNumber() : "";
	//		final Paragraph para3 = new Paragraph();
	//		para3.add(new Chunk("RMA number : ", subFont));
	//		para3.add(new Chunk(rmaNumber, subFont));
	//		para3.add("      ");
	//		para3.add(new Chunk("Order date : " + rmaFormData.getCartDate(), subFont));
	//		para3.add("      ");
	//		para3.add(new Chunk("Part details : " + cart.getEntries().size(), subFont));
	//		preface.add(para3);
	//		addEmptyLine(preface, 1);
	//
	//		final Paragraph para4 = new Paragraph();
	//		final PdfPTable entriesTable = new PdfPTable(2);
	//		entriesTable.setHorizontalAlignment(Element.ALIGN_LEFT);
	//		final PdfPCell partNumberCell = new PdfPCell(new Paragraph("PART NUMBER"));
	//		final PdfPCell serialNumberCell = new PdfPCell(new Paragraph("SERIAL NUMBER"));
	//
	//		entriesTable.addCell(partNumberCell);
	//		entriesTable.addCell(serialNumberCell);
	//		for (final AbstractOrderEntryModel entry : cart.getEntries())
	//		{
	//			final String serialNumber = CollectionUtils.isNotEmpty(entry.getBhgeRmaEquipSerialNumber())
	//					? entry.getBhgeRmaEquipSerialNumber().iterator().next().getSerialNumber() : "";
	//			entriesTable.addCell(entry.getPartNumber());
	//			entriesTable.addCell(serialNumber);
	//		}
	//		para4.add(entriesTable);
	//		preface.add(para4);
	//
	//		addEmptyLine(preface, 2);
	//
	//		final Paragraph para5 = new Paragraph();
	//		para5.add(new Chunk("HAZARDOUS INFORMATION", headerFont));
	//		preface.add(para5);
	//		addEmptyLine(preface, 1);
	//		final String declaration = (hazardousInfo.getDeclarationA() != null && hazardousInfo.getDeclarationA()) ? "Yes" : "No";
	//		final Paragraph para6 = new Paragraph();
	//		para6.add(new Chunk("Have the above items been exposed to hazardous or contaminated substances : ", smallBold));
	//		para6.add(new Chunk(declaration, smallWithBold));
	//		preface.add(para6);
	//
	//		if (hazardousInfo.getDeclarationA() != null && hazardousInfo.getDeclarationA())
	//		{
	//			addEmptyLine(preface, 1);
	//			final Paragraph para7 = new Paragraph();
	//			para7.add(new Chunk("Contamination in return listed below", smallBold));
	//			preface.add(para7);
	//
	//			final Paragraph para8 = new Paragraph();
	//			para8.add(new Chunk("* Notice", smallWithBold));
	//			para8.add(new Chunk(": This product must be decontaminated prior to return", smallBold));
	//			preface.add(para8);
	//
	//			addEmptyLine(preface, 1);
	//			if (CollectionUtils.isNotEmpty(hazardousInfo.getHazardType()))
	//			{
	//				for (final String hazardData : hazardousInfo.getHazardType())
	//				{
	//					final Paragraph para9 = new Paragraph();
	//					para9.add(new Chunk(hazardData, smallWithBold));
	//					preface.add(para9);
	//				}
	//			}
	//			if (StringUtils.isNotBlank(hazardousInfo.getOtherText()))
	//			{
	//				addEmptyLine(preface, 1);
	//				final Paragraph para11 = new Paragraph();
	//				para11.add(new Chunk("Others : " + hazardousInfo.getOtherText(), smallBold));
	//				preface.add(para11);
	//			}
	//			if (StringUtils.isNotBlank(hazardousInfo.getFluidText()))
	//			{
	//				addEmptyLine(preface, 1);
	//				final Paragraph para14 = new Paragraph();
	//				para14.add(new Chunk("Fluid Inside Unit : " + hazardousInfo.getFluidText(), smallBold));
	//				preface.add(para14);
	//			}
	//			addEmptyLine(preface, 2);
	//			final Paragraph para10 = new Paragraph();
	//			para10.add(new Chunk("CHEMICAL / MATERIAL DETAILS", headerFont));
	//			addEmptyLine(preface, 1);
	//
	//			final PdfPTable table = new PdfPTable(4);
	//			table.setHorizontalAlignment(Element.ALIGN_LEFT);
	//			final PdfPCell cell1 = new PdfPCell(new Paragraph("CHEMICAL NAME"));
	//			final PdfPCell cell2 = new PdfPCell(new Paragraph("UN NO."));
	//			final PdfPCell cell3 = new PdfPCell(new Paragraph("MSDS SUPPLIED"));
	//			final PdfPCell cell4 = new PdfPCell(new Paragraph("NOTES"));
	//
	//			table.addCell(cell1);
	//			table.addCell(cell2);
	//			table.addCell(cell3);
	//			table.addCell(cell4);
	//			if (cart.getBhgeHazardousInfo() != null
	//					&& CollectionUtils.isNotEmpty(cart.getBhgeHazardousInfo().getBhgeChemicalDetails()))
	//			{
	//				for (final BHGEChemicalDetailsModel chemicalData : cart.getBhgeHazardousInfo().getBhgeChemicalDetails())
	//				{
	//					final String chemicalName = StringUtils.isNotBlank(chemicalData.getChemicalName()) ? chemicalData.getChemicalName()
	//							: "";
	//					final String un = StringUtils.isNotBlank(chemicalData.getUn()) ? chemicalData.getUn() : "";
	//					final String msdsSupplied = chemicalData.getIsMsdnSupplied() != null
	//							? chemicalData.getIsMsdnSupplied() ? "Yes" : "No" : "";
	//					final String chemicalNotes = StringUtils.isNotBlank(chemicalData.getChemicalNotes())
	//							? chemicalData.getChemicalNotes() : "";
	//					final PdfPCell cell5 = new PdfPCell(new Paragraph(chemicalName));
	//					final PdfPCell cell6 = new PdfPCell(new Paragraph(un));
	//					final PdfPCell cell7 = new PdfPCell(new Paragraph(msdsSupplied));
	//					final PdfPCell cell8 = new PdfPCell(new Paragraph(chemicalNotes));
	//
	//					table.addCell(cell5);
	//					table.addCell(cell6);
	//					table.addCell(cell7);
	//					table.addCell(cell8);
	//
	//				}
	//			}
	//			para10.add(table);
	//			preface.add(para10);
	//		}
	//
	//
	//		addEmptyLine(preface, 2);
	//		document.newPage();
	//		final Paragraph para12 = new Paragraph();
	//		para12.add(new Chunk("DECLARATION", headerFont));
	//		preface.add(para12);
	//		addEmptyLine(preface, 1);
	//
	//		final Paragraph para13 = new Paragraph();
	//		para13.add(new Chunk(
	//				"I declare that the goods above may have been contaminated with Process or Hazardous media,a copy of the Material Safety Data Sheet (MSDS) for each material will be enclosed in my return shipment, the goods have been cleaned appropriately per the MSDS,and any necessary precautions for safe handling have been taken per the MSDS.",
	//				smallBold));
	//		preface.add(para13);
	//		addEmptyLine(preface, 3);
	//
	//
	//		final String tick = Config.getParameter("bhge.hazardous.image.tick.location");
	//		final Image tickImage = Image.getInstance(tick);
	//		final Paragraph para16 = new Paragraph();
	//		para16.add(new Chunk("      Agreed  ", smallBold));
	//		para16.setSpacingAfter(5f);
	//		para16.add(tickImage);
	//		preface.add(para16);
	//
	//		//Customer / User details
	//		if (null != userService.getCurrentUser())
	//		{
	//			final Paragraph para14 = new Paragraph();
	//			para14.add(new Chunk("User : ", smallWithBold));
	//			para14.add("      ");
	//			para14.add(new Chunk(
	//					checkForNull(userService.getCurrentUser().getName() == null ? "" : userService.getCurrentUser().getName()),
	//					smallBold));
	//			preface.add(para14);
	//		}
	//
	//		final Paragraph para15 = new Paragraph();
	//		para15.add(new Chunk("Customer Account Name : ", smallWithBold));
	//		para15.add("      ");
	//		para15.add(new Chunk(getUserName() == null ? "" : getUserName(), smallBold));
	//		preface.add(para15);
	//		addEmptyLine(preface, 3);
	//		document.add(preface);
	//
	//		document.newPage();
	//	}

	/**
	 * adding a new line.
	 *
	 */
	public static void newLine()
	{
		YCORDINATE -= FONT_HEIGHT;
	}

	/**
	 * add new line with increased size font
	 *
	 * @param text
	 * @param document
	 * @param page
	 * @param pageContentStream
	 * @throws IOException
	 */
	public static void addHeading(final String text, final PDDocument document, final PDPage page,
			final PDPageContentStream pageContentStream) throws IOException
	{

		final float fontH1 = FONT_SIZE * 1.25f;
		final float size = fontH1 * TEXT_FONT.getStringWidth(text) / 1000;

		pageContentStream.beginText();
		YCORDINATE -= FONT_HEIGHT;
		pageContentStream.setFont(TEXT_FONT_BOLD, fontH1);
		pageContentStream.setLeading(leading);
		pageContentStream.newLineAtOffset(margin, YCORDINATE);
		pageContentStream.showText(text);
		pageContentStream.endText();
	}

	/**
	 * for creating new line in PDF
	 *
	 * @param text
	 * @param isTextBold
	 * @param sameLine
	 * @param document
	 * @param page
	 * @param pageContentStream
	 * @param corXY
	 * @throws IOException
	 */
	public void addPara(String text, final boolean isTextBold, final boolean sameLine, final PDDocument document,
			final PDPage page, final PDPageContentStream pageContentStream, final float... corXY) throws IOException
	{
		LOG.debug("paratext value is: " + text);
		if(StringUtils.isNotEmpty(text))
		{
			text = text.replaceAll("\t", " ");
		}
		//Below code is used to identify accent characters and uses LiberationSans-Regular.ttf font which supports these characters. 
		//String nfdNormalizedString = Normalizer.normalize(text, Normalizer.Form.NFD); 
		//Pattern pattern = Pattern.compile("\\p{InCombiningDiacriticalMarks}+");
		final float fontH1 = FONT_SIZE * 1.0f;
		YCORDINATE = sameLine ? YCORDINATE : YCORDINATE - FONT_HEIGHT;
		pageContentStream.beginText();
		if(!text.matches("\\A\\p{ASCII}*\\z"))
		{
			InputStream ttfStream = getClass().getResourceAsStream("/Noto_Sans_SC/static/NotoSansSC-Regular.ttf");
			PDType0Font font = PDType0Font.load(document, ttfStream);
			pageContentStream.setFont(font, fontH1);
		}
		else
		{
			final PDFont font = isTextBold ? TEXT_FONT_BOLD : TEXT_FONT;
			pageContentStream.setFont(font, fontH1);
		}
		pageContentStream.setLeading(leading);
		if (corXY.length > 0)
		{
			final float corY = corXY.length >= 2 ? corXY[1] : YCORDINATE;
			pageContentStream.newLineAtOffset(corXY[0], corY);
		}
		else
		{
			pageContentStream.newLineAtOffset(margin, YCORDINATE);
		}
		pageContentStream.showText(text);
		pageContentStream.endText();
	}

	/**
	 * Multiline text with auto next line support.
	 *
	 * @param lines
	 * @param isTextBold
	 * @param document
	 * @param page
	 * @param pageContentStream
	 * @throws IOException
	 */
	public void addMultiLinePara(final List<String> lines, final boolean isTextBold, final boolean sameLine,
			final PDDocument document, final PDPage page, final PDPageContentStream pageContentStream, final float... corXY)
			throws IOException
	{
		boolean isNonASCII = false;
		for (final String lineText : lines)
		{
			if(!lineText.matches("\\A\\p{ASCII}*\\z"))
			{
				isNonASCII = true;
				break;
			}
		}
		YCORDINATE = sameLine ? YCORDINATE : YCORDINATE - FONT_HEIGHT;
		final float fontH1 = FONT_SIZE * 1.0f;
		pageContentStream.beginText();
		pageContentStream.setLeading(leading);
		if(isNonASCII)
		{
			InputStream ttfStream = getClass().getResourceAsStream("/Noto_Sans_SC/static/NotoSansSC-Regular.ttf");
			PDType0Font font = PDType0Font.load(document, ttfStream);
			pageContentStream.setFont(font, fontH1);
		}
		else
		{
			final PDFont font = isTextBold ? TEXT_FONT_BOLD : TEXT_FONT;
			pageContentStream.setFont(font, fontH1);
		}
		pageContentStream.setLeading(leading);
		if (corXY.length > 0)
		{
			final float corY = corXY.length >= 2 ? corXY[1] : YCORDINATE;
			pageContentStream.newLineAtOffset(corXY[0], corY);
		}
		else
		{
			pageContentStream.newLineAtOffset(margin, YCORDINATE);
		}
		for (final String lineText : lines)
		{
			newLine();
			pageContentStream.showText(lineText);
			pageContentStream.newLineAtOffset(0, -leading);
		}
		pageContentStream.endText();
	}

	/**
	 *
	 * @param page
	 * @param paragraph
	 * @return
	 * @throws IOException
	 */
	public List<String> addMultiParagraph(final PDPage page, String paragraph, final PDDocument document, final float... paraWidth) throws IOException
	{
		// Create a new font object selecting one of the PDF base fonts
		final PDRectangle mediabox = page.getMediaBox();
		final float width = paraWidth != null && paraWidth.length > 0 ? paraWidth[0] : mediabox.getWidth() - 2 * margin;

		final List<String> lines = new ArrayList<>();
		int lastSpace = -1;
		float size;
		while (paragraph.length() > 0)
		{
			int spaceIndex = paragraph.indexOf(' ', lastSpace + 1);
			if (spaceIndex < 0)
			{
				spaceIndex = paragraph.length();
			}
			String subString = paragraph.substring(0, spaceIndex);
			if(!subString.matches("\\A\\p{ASCII}*\\z"))
			{
				InputStream ttfStream = getClass().getResourceAsStream("/Noto_Sans_SC/static/NotoSansSC-Regular.ttf");
				PDType0Font font = PDType0Font.load(document, ttfStream);
				size = FONT_SIZE * font.getStringWidth(subString) / 1000;
			}
			else
			{
				size = FONT_SIZE * TEXT_FONT.getStringWidth(subString) / 1000;
			}
			if (size > width)
			{
				if (lastSpace < 0)
				{
					lastSpace = spaceIndex;
				}
				subString = paragraph.substring(0, lastSpace);
				lines.add(subString);
				paragraph = paragraph.substring(lastSpace).trim();
				lastSpace = -1;
			}
			else if (spaceIndex == paragraph.length())
			{
				lines.add(paragraph);
				paragraph = "";
			}
			else
			{
				lastSpace = spaceIndex;
			}
		}
		return lines;
	}

	public static float calWidth(final String text)
	{

		try
		{
			return FONT_SIZE * TEXT_FONT.getStringWidth(text) / 1000;
		}
		catch (final IOException e)
		{
			LOG.error(e);
		}
		return 0f;
	}

	/***
	 * add image with option a side text.
	 *
	 * @param path
	 * @param text
	 * @param isTextBold
	 * @param sameLine
	 * @param document
	 * @param page
	 * @param pageContentStream
	 * @param corXY
	 * @author Shahid
	 */
	public static void addImage(final String path, final String text, final boolean isTextBold, final boolean sameLine,
			final PDDocument document, final PDPage page, final PDPageContentStream pageContentStream, final float... corXY)
	{
		try
		{
			final float fontH1 = FONT_SIZE * 1.0f;
			final PDFont font = isTextBold ? TEXT_FONT_BOLD : TEXT_FONT;
			YCORDINATE = sameLine ? YCORDINATE : YCORDINATE - FONT_HEIGHT;
			final PDImageXObject image = PDImageXObject.createFromFile(path, document);
			final float scale = 0.125f; // alter this value to set the image size
			final float imageWidth = image.getWidth() * scale;
			pageContentStream.drawImage(image, margin, YCORDINATE, imageWidth, image.getHeight() * scale);

			if (text != null && !text.trim().isEmpty())
			{
				pageContentStream.beginText();
				pageContentStream.setFont(font, fontH1);
				pageContentStream.setLeading(leading);
				if (corXY.length > 0)
				{
					final float corY = corXY.length >= 2 ? corXY[1] : YCORDINATE;
					pageContentStream.newLineAtOffset(corXY[0] + imageWidth, corY);
				}
				else
				{
					pageContentStream.newLineAtOffset(margin + imageWidth + 10, YCORDINATE + 10);
				}
				pageContentStream.showText(text);
				pageContentStream.endText();
			}
		}
		catch (final IOException io)
		{
			LOG.error(io);
		}

	}

	//migration changes
	//new method with File as param
	public static void addImage(final File file, final String text, final boolean isTextBold, final boolean sameLine,
								final PDDocument document, final PDPage page, final PDPageContentStream pageContentStream, final float... corXY)
	{
		try
		{
			final float fontH1 = FONT_SIZE * 1.0f;
			final PDFont font = isTextBold ? TEXT_FONT_BOLD : TEXT_FONT;
			YCORDINATE = sameLine ? YCORDINATE : YCORDINATE - FONT_HEIGHT;
			final PDImageXObject image = PDImageXObject.createFromFileByExtension(file, document);
			final float scale = 0.125f; // alter this value to set the image size
			final float imageWidth = image.getWidth() * scale;
			pageContentStream.drawImage(image, margin, YCORDINATE, imageWidth, image.getHeight() * scale);

			if (text != null && !text.trim().isEmpty())
			{
				pageContentStream.beginText();
				pageContentStream.setFont(font, fontH1);
				pageContentStream.setLeading(leading);
				if (corXY.length > 0)
				{
					final float corY = corXY.length >= 2 ? corXY[1] : YCORDINATE;
					pageContentStream.newLineAtOffset(corXY[0] + imageWidth, corY);
				}
				else
				{
					pageContentStream.newLineAtOffset(margin + imageWidth + 10, YCORDINATE + 10);
				}
				pageContentStream.showText(text);
				pageContentStream.endText();
			}
		}
		catch (final IOException io)
		{
			LOG.error(io);
		}

	}

	public void drawTable(final PDPage page, final PDPageContentStream contentStream, final float y, final float margin,
			final String[][] content) throws IOException
	{
		final int rows = content.length;
		final int cols = content[0].length;
		final float rowHeight = 20.0f;
		final float tableWidth = page.getMediaBox().getWidth() - 2.0f * margin;
		final float tableHeight = rowHeight * rows;
		final float colWidth = tableWidth / cols;

		try {
			//draw the rows
			float nexty = y;
			for (int i = 0; i <= rows; i++) {
				contentStream.moveTo(margin, nexty);
				contentStream.lineTo(margin + tableWidth, nexty);
				contentStream.stroke();
				nexty -= rowHeight;
			}

			//draw the columns
			float nextx = margin;
			for (int i = 0; i <= cols; i++) {
				contentStream.moveTo(nextx, y);
				contentStream.lineTo(nextx, y - tableHeight);
				contentStream.stroke();
				nextx += colWidth;
			}
		} catch (RuntimeException re){
			LOG.error("Exception while creating a Table : ", re);
		}

		//now add the text
		contentStream.setFont(TEXT_FONT, FONT_SIZE);

		final float cellMargin = 5.0f;
		float textx = margin + cellMargin;
		//		    float texty = y - 15.0f;
		YCORDINATE = YCORDINATE - 15.0f;
		for (final String[] aContent : content)
		{
			for (final String text : aContent)
			{
				contentStream.beginText();
				contentStream.newLineAtOffset(textx, YCORDINATE);
				contentStream.showText(StringUtils.isNotBlank(text) ? text : "");
				contentStream.endText();
				textx += colWidth;
			}
			YCORDINATE -= rowHeight;
			textx = margin + cellMargin;
		}
	}

	/**
	 * replacement for iText using Open Source Apache PDFBox, create hazardousForm PDF based on RMA FORM data.
	 *
	 * @param cart
	 * @param rmaFormData
	 * @param file
	 * @author Shahid
	 */
	private void createRMAHazardPdfForm(final AbstractOrderModel cart, final BHGERmaFormData rmaFormData, final File file)
			throws IOException
	{
		final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
		//Migration changes start
		//final String tickImage = Config.getParameter("bhge.hazardous.image.tick.location");
		final String containerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME);
		final String fileNameTobeRead=configurationService.getConfiguration().getString(BLOB_FILE_NAME_TO_BE_READ_TICK_MEDIA);
		File tickImage=bhgeBlobDataImportService.readFromBlob(fileNameTobeRead,".png",containerName);
		//Migration changes end
		final PDDocument pdDocument = new PDDocument();
		PDPage hazardousPage = new PDPage(PDRectangle.A4);
		pdDocument.addPage(hazardousPage);
		//reset the page
		PDRectangle pageSize = hazardousPage.getMediaBox();
		float startUY = pageSize.getUpperRightY() - margin;
		YCORDINATE = startUY; //Reset the yCordinate with the new Y cordinate

		// Start a new content stream which will hold the content that's about to be created
		PDPageContentStream contentStream = null;
		try
		{
			contentStream = new PDPageContentStream(pdDocument, hazardousPage);
		}
		catch (final Exception exc)
		{
			LOG.error(exc);
		}
		final String headerText = "Hazardous Materials Exposure / COSHH Form";
		final String productHeaderText = "RMA ORDER DETAILS";
		final String bodyDisclaimerText = "Please note that the below is the Hazardous Information which was "
				+ "provided at the time of RMA submission. This form is for your reference";
		final String h1Text = "RMA DETAILS";
		final String paraRMANubmer = "RMA Number: ";
		final String paraOrderDate = "Order Date: ";
		//		final String paraPartDetail = "Part Details: ";
		//Migration changes start
		File headerLogo=getHeaderLogo();
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, hazardousPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, hazardousPage, contentStream);
		//Migration changes end
		final List<String> lines = addMultiParagraph(hazardousPage, bodyDisclaimerText, pdDocument);
		newLine();
		addMultiLinePara(lines, false, false, pdDocument, hazardousPage, contentStream);
		addHeading(productHeaderText, pdDocument, hazardousPage, contentStream);
		newLine();
		newLine();

		float xCorForRMARow = 0f;
		final String rmaNumber = StringUtils.isNotBlank(cart.getRmaNumber()) ? cart.getRmaNumber() : "";
		final String orderDate = rmaFormData != null && StringUtils.isNotBlank(rmaFormData.getCartDate())
				? rmaFormData.getCartDate() : "";
		final String size = cart != null && CollectionUtils.isNotEmpty(cart.getEntries())
				? Integer.toString(cart.getEntries().size()) : "";

		addPara(paraRMANubmer, false, false, pdDocument, hazardousPage, contentStream, new float[]
		{ margin });
		xCorForRMARow += calWidth(paraRMANubmer);
		addPara(rmaNumber, true, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin + xCorForRMARow });

		xCorForRMARow += calWidth(rmaNumber) + calWidth("  ");
		addPara(paraOrderDate, false, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin + xCorForRMARow });
		xCorForRMARow += calWidth(paraOrderDate);
		addPara(orderDate, true, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin + xCorForRMARow });
		xCorForRMARow += calWidth(orderDate) + calWidth("  ");

		//		addPara(paraPartDetail, false, true, pdDocument, hazardousPage, contentStream, new float[]
		//		{ margin + xCorForRMARow });
		//		xCorForRMARow += calWidth(paraPartDetail) + calWidth("  ");
		//		addPara(size, true, true, pdDocument, hazardousPage, contentStream, new float[]
		//		{ margin + xCorForRMARow });
				newLine();
				newLine();

		addPara("Part Number", false, false, pdDocument, hazardousPage, contentStream, new float[]
		{ margin * 1 });
		addPara("           ", false, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin * 2 });
		addPara("Serial Number", false, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin * 3 + calWidth("Part Number") });
//		newLine();

		if (CollectionUtils.isNotEmpty(cart.getEntries()))
		{
			for (final AbstractOrderEntryModel entry : cart.getEntries())
			{
				final String partNumber = StringUtils.isNotEmpty(entry.getPartNumber()) ? entry.getPartNumber() : "";
				//final String serialNumber = CollectionUtils.isNotEmpty(entry.getBhgeRmaEquipSerialNumber())
				//	? entry.getBhgeRmaEquipSerialNumber().iterator().next().getSerialNumber() : "";
				final List<String> serList = new ArrayList<String>();
				if (CollectionUtils.isNotEmpty(entry.getBhgeRmaEquipSerialNumber()))
				{
					for (final BHGERmaEquipSerialNumberModel s : entry.getBhgeRmaEquipSerialNumber())
					{
						serList.add(s.getSerialNumber());
					}
				}
				String serialNumber = "";
				if (CollectionUtils.isNotEmpty(serList))
				{
					serialNumber = serList.stream().collect(Collectors.joining(" "));
					serialNumber = checkSpclChar(serialNumber);
				}
				final List<String> serialText = addMultiParagraph(hazardousPage, serialNumber, pdDocument, calWidth("Part Number"));
				addPara(partNumber, true, false, pdDocument, hazardousPage, contentStream, new float[]
				{ margin * 1 });
				addPara("           ", false, true, pdDocument, hazardousPage, contentStream, new float[]
				{ margin * 2 });
				/*
				 * addPara(serialNumber, true, true, pdDocument, hazardousPage, contentStream, new float[] { margin * 3 +
				 * calWidth("Part Number") });
				 */
				/*addMultiLinePara(serialText, true, false, pdDocument, hazardousPage, contentStream, new float[]
				{ margin * 3 + calWidth("Part Number") });
				newLine();*/
				if(CollectionUtils.isNotEmpty(serialText)) {
					for (String serialNoValue : serialText) {
						addPara("           ", false, true, pdDocument, hazardousPage, contentStream, new float[]{margin * 2});
						addPara(serialNoValue, true, true, pdDocument, hazardousPage, contentStream,
								new float[]{margin * 3 + calWidth("Part Number")});
						newLine();
					}
				}
			}
		}

		final String h1HazardInfo = "HAZARDOUS MATERIALS EXPOSURE";
		final String h1Declaration = "DECLARATION";

		final String paraHazardl1 = "Have the above items been exposed to hazardous or contaminated substances :";
		String multiParaDec = "I declare that the goods above may have been contaminated with Process or Hazardous media,a copy of "
				+ "the Material Safety Data Sheet (MSDS) for each material will be enclosed in my return shipment, the "
				+ "goods have been cleaned appropriately per the MSDS,and any necessary precautions for safe handling"
				+ "have been taken per the MSDS.";

		final String declaration = (hazardousInfo.getDeclarationA() != null && hazardousInfo.getDeclarationA()) ? "Yes" : "No";

		newLine();
		addHeading(h1HazardInfo, pdDocument, hazardousPage, contentStream);
		newLine();
		addPara(paraHazardl1, false, false, pdDocument, hazardousPage, contentStream);
		addPara(declaration, true, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin + calWidth(paraHazardl1) });
		newLine();


		if (hazardousInfo.getDeclarationA() != null && hazardousInfo.getDeclarationA())
		{
			final String paraCont1 = "Contamination in return listed below";
			final String paraCont2 = "This product must be decontaminated prior to return";


			addPara(paraCont1, false, false, pdDocument, hazardousPage, contentStream);
			newLine();
			addPara("* Notice: ", true, false, pdDocument, hazardousPage, contentStream);
			addPara(paraCont2, false, true, pdDocument, hazardousPage, contentStream, new float[]
			{ margin + calWidth("* Notice   ") });
			newLine();
			if (CollectionUtils.isNotEmpty(hazardousInfo.getHazardType()))
			{
				for (final String hazardData : hazardousInfo.getHazardType())
				{
					addPara(hazardData, true, false, pdDocument, hazardousPage, contentStream);
				}
			}
			newLine();
			if (StringUtils.isNotBlank(hazardousInfo.getOtherText()))
			{

				/*
				 * addPara("Others : " + checkSpclChar(hazardousInfo.getOtherText()), false, false, pdDocument,
				 * hazardousPage, contentStream);
				 */
				List<String> otherText = addMultiParagraph(hazardousPage,
						("Others : " + checkSpclChar(hazardousInfo.getOtherText())), pdDocument);
				addMultiLinePara(otherText, false, false, pdDocument, hazardousPage, contentStream);

			}
			if (StringUtils.isNotBlank(hazardousInfo.getFluidText()))
			{
				/*
				 * addPara("Fluid Inside Unit : " + checkSpclChar(hazardousInfo.getFluidText()), false, false, pdDocument,
				 * hazardousPage, contentStream);
				 */
				List<String> fluidText = addMultiParagraph(hazardousPage,
						("Fluid Inside Unit : " + checkSpclChar(hazardousInfo.getFluidText())), pdDocument);
				addMultiLinePara(fluidText, false, false, pdDocument, hazardousPage, contentStream);

			}
			hazardousPage = new PDPage(PDRectangle.A4); //new page created
			pageSize = hazardousPage.getMediaBox();
			startUY = pageSize.getUpperRightY() - margin;
			pdDocument.addPage(hazardousPage); //Add the page to the PDDocument
			YCORDINATE = startUY; //Reset the yCordinate with the new Y cordinate
			contentStream.close(); //close the prev stream
			contentStream = new PDPageContentStream(pdDocument, hazardousPage); //Create a new contentStream and use it further
			//Migration changes start
			//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, hazardousPage, contentStream);
			HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, hazardousPage, contentStream);
			//Migration changes end
			//TODO create new page
			final String headingChemical = "CHEMICAL / MATERIAL DETAILS";
			final String chemicalName = "CHEMICAL NAME";
			final String unNo = "UN NO.";
			final String msdsSupplied = "MSDS SUPPLIED";
			final String notes = "NOTES";

			newLine();
			addHeading(headingChemical, pdDocument, hazardousPage, contentStream);
			final int contentRows = CollectionUtils.isNotEmpty(cart.getBhgeHazardousInfo().getBhgeChemicalDetails())
					&& cart.getBhgeHazardousInfo().getBhgeChemicalDetails().size() > 0
							? cart.getBhgeHazardousInfo().getBhgeChemicalDetails().size() : 0;
			final String[][] content = new String[contentRows + 1][4];
			newLine();

			content[0][0] = chemicalName;
			content[0][1] = unNo;
			content[0][2] = msdsSupplied;
			content[0][3] = notes;
			int rowLoop = 1;

			for (final BHGEChemicalDetailsModel chemicalData : cart.getBhgeHazardousInfo().getBhgeChemicalDetails())
			{

				final String chemicalNameVal = StringUtils.isNotBlank(chemicalData.getChemicalName()) ? chemicalData.getChemicalName()
						: "";
				final String unNoVal = StringUtils.isNotBlank(chemicalData.getUn()) ? chemicalData.getUn() : "";
				final String msdsSuppliedVal = chemicalData.getIsMsdnSupplied() != null
						? chemicalData.getIsMsdnSupplied() ? "Yes" : "No" : "";
				final String notesVal = StringUtils.isNotBlank(chemicalData.getChemicalNotes()) ? chemicalData.getChemicalNotes()
						: "";

				content[rowLoop][0] = chemicalNameVal;
				content[rowLoop][1] = unNoVal;
				content[rowLoop][2] = msdsSuppliedVal;
				content[rowLoop][3] = notesVal;

				rowLoop++;
			}

			//Draw table
			drawTable(hazardousPage, contentStream, YCORDINATE, 55, content);
			newLine();
			if (null != rmaFormData.getHazardousInfo() && rmaFormData.getHazardousInfo().getHazardInfo() != null)
			{
				addHeading("Details ", pdDocument, hazardousPage, contentStream);
				newLine();
				final List<String> detailText = addMultiParagraph(hazardousPage,
						checkSpclChar(rmaFormData.getHazardousInfo().getHazardInfo()), pdDocument);
				addMultiLinePara(detailText, false, false, pdDocument, hazardousPage, contentStream);
				newLine();
			}
		}
		else
		{
			multiParaDec = "I declare that these items have not been contaminated by Process or Hazardous media.";
		}
		addHeading(h1Declaration, pdDocument, hazardousPage, contentStream);
		newLine();
		final List<String> linesDecl = addMultiParagraph(hazardousPage, multiParaDec, pdDocument);

		addMultiLinePara(linesDecl, false, false, pdDocument, hazardousPage, contentStream);
		newLine();
		addImage(tickImage, "AGREED", true, false, pdDocument, hazardousPage, contentStream);
		newLine();
		final String user = "User: ";
		final String customerAC = "Customer Account Name:";
		/*final String userVal = userService.getCurrentUser() != null && userService.getCurrentUser().getName() == null ? ""
				: userService.getCurrentUser().getName();*/
		final String userVal = cart.getUser() != null && cart.getUser().getName() == null ? "" : cart.getUser().getName();

		final String customerACVal = getUserName(cart) != null ? getUserName(cart) : "";

		xCorForRMARow = 0f;
		addPara(user, false, false, pdDocument, hazardousPage, contentStream, new float[]
		{ margin });
		xCorForRMARow += calWidth(user);
		addPara(userVal, true, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin + xCorForRMARow });

		addPara(customerAC, false, false, pdDocument, hazardousPage, contentStream, new float[]
		{ margin });
		xCorForRMARow += calWidth(customerAC);
		addPara(customerACVal, true, true, pdDocument, hazardousPage, contentStream, new float[]
		{ margin + xCorForRMARow });

		//saving the file into disk
		contentStream.close();
		//Migration changes start
		//pdDocument.save(FILE + file);
		String fileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_FILE_PDF);
		pdDocument.save(file);
		bhgeBlobDataImportService.writeFileToBlob(file,fileContainerName);
		//Migration changes end

		pdDocument.close();
	}

	private String checkSpclChar(final String test)
	{
		final StringBuilder b = new StringBuilder();
		for (int i = 0; i < test.length(); i++)
		{
			if (WinAnsiEncoding.INSTANCE.contains(test.charAt(i)))
			{
				b.append(test.charAt(i));
			}
		}
		return b.toString();
	}

	private String[][] createTablebody(final String[] cols, final String[][] content, final int row)
	{
		//	for(int row=1; row <= size; row++) {
		for (int col = 0; col < 4; col++)
		{
			switch (col)
			{
				case 0:
					content[row][col] = cols[0];
					//					cols[0] = chemicalNameVal;
					break;
				case 1:
					content[row][col] = cols[1];
					//					cols[1] = unNoVal;
					break;
				case 2:
					content[row][col] = cols[2];
					//					cols[2] = msdsSuppliedVal;
					break;
				case 3:
					content[row][col] = cols[3];
					//					cols[3] = notesVal;
					break;
				default:
					cols[0] = " ";
					break;
			}
		}
		//					}
		return content;
	}

	/**
	 * replacement for iText using Open Source Apache PDFBox, create checkout PDF based on cart data.
	 *
	 * @param cart
	 * @param rmaFormData
	 * @param fileName
	 * @throws IOException
	 * @author Shahid
	 */
	private File[] createCheckoutPdfbox(final AbstractOrderModel cart, final File... files) throws IOException
	{
		//final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
		final PDDocument pdDocument = new PDDocument();
		PDPage checkoutPage = new PDPage(PDRectangle.A4);
		pdDocument.addPage(checkoutPage);
		// Start a new content stream which will hold the content that's about to be created
		PDPageContentStream contentStream = null;
		final SimpleDateFormat targetFormat = new SimpleDateFormat("dd-MMM-yyyy");

		try
		{
			contentStream = new PDPageContentStream(pdDocument, checkoutPage);
		}
		catch (final Exception exc)
		{
			LOG.error(exc);
		}

		final String headerText = "Checkout Information Form";
		final String h1Text = "CHECKOUT DATA";
		final String paraCustomer = "Customer";
		final String rmaNumber = cart != null && cart.getRmaNumber() != null
				? "RMA Number:    " + removePrefixZeros(cart.getRmaNumber()) : "RMA Number: ";
		final String paraAccount = (getUserName(cart) == null ? "" : getUserName(cart));
		final String paraMAccountdesclaimer = "Please note that the below is the Checkout Information which was provided at the time of RMA submission."
				+ "This form is for your reference";
		//Migration changes start
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		File headerLogo=getHeaderLogo();
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end
		addHeading(h1Text, pdDocument, checkoutPage, contentStream);
		LOG.info("In Middle of checkout pdf generation");
		newLine();
		addPara(paraCustomer, true, false, pdDocument, checkoutPage, contentStream);
		//		newLine();
		addPara(paraAccount, false, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara(rmaNumber, false, false, pdDocument, checkoutPage, contentStream);
		newLine();

		final List<String> lines = addMultiParagraph(checkoutPage, paraMAccountdesclaimer, pdDocument);
		newLine();

		addMultiLinePara(lines, false, false, pdDocument, checkoutPage, contentStream);

		final List<Float> biggestCellSec1 = new ArrayList<>();
		biggestCellSec1.add(calWidth("PO Number"));
		biggestCellSec1.add(calWidth("End Customer PO Number"));
		Collections.sort(biggestCellSec1);
		Collections.reverse(biggestCellSec1);
		final float sizeC1 = biggestCellSec1.get(0);

		final String custAC = "1. CUSTOMER ACCOUNT & PAYMENT DETAILS";
		final String poNumber = cart != null && cart.getPurchaseOrderNumber() != null ? cart.getPurchaseOrderNumber() : "";
		final String endCustPONumber = cart != null && cart.getEndCustomerRefNum() != null ? cart.getEndCustomerRefNum() : "";
		final List<String> poFileNames = new ArrayList<String>();
		for (final MediaModel model : cart.getPoDocs())
		{
			poFileNames.add(model.getRealFileName());
		}
		final String poFileDetails = cart != null && poFileNames != null ? poFileNames.stream().collect(Collectors.joining(" "))
				: "";
		final List<String> poFileLines = addMultiParagraph(checkoutPage, poFileDetails, pdDocument, sizeC1);
		addPara(custAC, true, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara("PO Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(poNumber, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC1 });
		newLine();

		addPara("End Customer PO Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endCustPONumber, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC1 });
		newLine();
		addPara("PO Documents", false, false, pdDocument, checkoutPage, contentStream, new float[] { margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 });
		addMultiLinePara(poFileLines, true, true, pdDocument, checkoutPage, contentStream,new float[] { margin * 3 + sizeC1, });
		newLine();

		final List<Float> biggestCellC2 = new ArrayList<>();
		biggestCellC2.add(calWidth("Shipping Address"));
		biggestCellC2.add(calWidth("Shipping Method"));
		biggestCellC2.add(calWidth("Selected Carrier"));
		biggestCellC2.add(calWidth("Shipping Contact Name"));
		biggestCellC2.add(calWidth("Shipping Contact Phone Number"));
		biggestCellC2.add(calWidth("Delivery Point"));
		biggestCellC2.add(calWidth("Requested Delivery date"));
		biggestCellC2.add(calWidth("Shipping Remarks"));
		biggestCellC2.add(calWidth("Alternate Contact Name"));
		biggestCellC2.add(calWidth("Alternate Contact Number"));
		biggestCellC2.add(calWidth("Alternate Contact Email"));
		biggestCellC2.add(calWidth("Incoterm"));
		Collections.sort(biggestCellC2);
		Collections.reverse(biggestCellC2);
		final float sizeC2 = biggestCellC2.get(0);

		final String shippingAddressLine1 = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getLine1() != null ? cart.getDeliveryAddress().getLine1() : "";
		final String shippingAddressLine2 = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getLine2() != null ? cart.getDeliveryAddress().getLine2() : "";
		final String postal = cart != null && cart.getDeliveryAddress() != null && cart.getDeliveryAddress().getPostalcode() != null
				? cart.getDeliveryAddress().getPostalcode().toString() : "";
		final String shippingAddressLine = shippingAddressLine1 + " " + shippingAddressLine2 + " " + postal;
		final String custShipDetail = "2. SHIPPING DETAILS";
		final String shippingMethod = cart != null && cart.getShippingChargeMethod() != null
				? cart.getShippingChargeMethod().toString() : "";

		final String selectedCarrier = cart != null && cart.getShippingCarrierMethod() != null
				&& cart.getShippingCarrierMethod().getCode() != null ? cart.getShippingCarrierMethod().getCode().toString() : "";

		final String deliveryAccountNum = cart != null && cart.getDeliveryAccountNum() != null ? cart.getDeliveryAccountNum() : "";

		final String shippingContactName = cart != null && cart.getShipToContactName() != null ? cart.getShipToContactName() : "";
		final String shippingContactPhone = cart != null && cart.getShipToContactPhone() != null ? cart.getShipToContactPhone()
				: "";
		final String deliveryPoint = cart != null && cart.getDeliveryPoint() != null ? cart.getDeliveryPoint() : "";
		final String requestedDeliveryDate = cart != null && cart.getReqHeaderDeliveryDate() != null
				? targetFormat.format(cart.getReqHeaderDeliveryDate()) : "";
		final String shippingRemarks = cart != null && cart.getShippingRemarks() != null ? cart.getShippingRemarks() : "";
		final String altContactNameVal = cart != null && cart.getShippingConatct2Name() != null ? cart.getShippingConatct2Name()
				: "";
		final String altContactEmailVal = cart != null && cart.getAlternateContactEmail() != null ? cart.getAlternateContactEmail()
				: "";
		final String altContactNumberVal = cart != null && cart.getShippingConatct2Number() != null
				? cart.getShippingConatct2Number() : "";

		BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
		if(null == soldto)
		{
			soldto = bhgeSoldToUtil.getBHGESoldToData(cart.getSoldToForCart());
		}
		final String incoterm1 = soldto != null && soldto.getIncoterms1() != null ? soldto.getIncoterms1() : "";
		final String incoterm2 = soldto != null && soldto.getIncoterms2() != null ? soldto.getIncoterms2() : "";

		addPara(custShipDetail, true, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara("Shipping Method", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingMethod, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Shipping Address", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingAddressLine, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Selected Carrier", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(selectedCarrier, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();
		if (!deliveryAccountNum.isEmpty() && !deliveryAccountNum.equalsIgnoreCase(""))
		{
			addPara("Shipping Account number", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(deliveryAccountNum, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		addPara("Shipping Contact Name", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingContactName, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Shipping Contact Phone Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingContactPhone, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Delivery Point", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(deliveryPoint, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Requested Delivery date (DD-MM-YYYY) ", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(requestedDeliveryDate, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Shipping Remarks", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		final List<String> shippingRemarklines = addMultiParagraph(checkoutPage, checkSpclChar(shippingRemarks), pdDocument, sizeC2);
		addMultiLinePara(shippingRemarklines, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();
		if (!altContactNameVal.isEmpty() && !altContactNameVal.equalsIgnoreCase(""))
		{
			addPara("Alternate Contact Name", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(altContactNameVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		if (!altContactNumberVal.isEmpty() && !altContactNumberVal.equalsIgnoreCase(""))
		{
			addPara("Alternate Contact Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(altContactNumberVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		if (!altContactEmailVal.isEmpty() && !altContactEmailVal.equalsIgnoreCase(""))
		{
			addPara("Alternate Contact Email", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(altContactEmailVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		addPara("Incoterm", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(incoterm1, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();
		final List<Float> biggestCellC3 = new ArrayList<>();
		biggestCellC3.add(calWidth("Order acknowledgement"));
		biggestCellC3.add(calWidth("Ship notificiation"));
		biggestCellC3.add(calWidth("Invoice email"));
		biggestCellC3.add(calWidth("Do you need to BHGE to review order"));
		biggestCellC3.add(calWidth("CSR Review Reason"));
		Collections.sort(biggestCellC3);
		Collections.reverse(biggestCellC3);
		final float sizeC3 = biggestCellC3.get(0);

		checkoutPage = new PDPage(PDRectangle.A4); //new page created
		final PDRectangle pageSize1 = checkoutPage.getMediaBox();
		final float startUY1 = pageSize1.getUpperRightY() - margin;
		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
		YCORDINATE = startUY1; //Reset the yCordinate with the new Y cordinate
		contentStream.close(); //close the prev stream
		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
		//Migration changes start
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end

		final String custNotificationDetail = "3. NOTIFICATIONS DETAILS";
		final String orderack = cart != null && cart.getOrderConfirmationEMail() != null ? cart.getOrderConfirmationEMail() : "";
		final String shipNotification = cart != null && cart.getShipNotificationEmail() != null ? cart.getShipNotificationEmail()
				: "";
		final String invoiceEmail = cart != null && cart.getInvoiceEmail() != null ? cart.getInvoiceEmail() : "";
		final String csrReviewText = cart != null && cart.getSpecialDiscountCode() != null ? cart.getSpecialDiscountCode() : "";
		addPara(custNotificationDetail, true, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara("Order acknowledgement", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(orderack, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC3 });
		newLine();
		addPara("Ship notificiation", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shipNotification, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC3 });
		newLine();
		addPara("Invoice email", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(invoiceEmail, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC3 });
		newLine();
		if (cart != null && cart.getSpecialDiscountCode() != null && !cart.getSpecialDiscountCode().equalsIgnoreCase(""))
		{
			addPara("Do you need to BHGE to review order", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara("Yes", true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC3 });
			newLine();
			addPara("CSR Review Reason", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			final List<String> csrReviewlines = addMultiParagraph(checkoutPage, checkSpclChar(csrReviewText), pdDocument, sizeC2);
			addMultiLinePara(csrReviewlines, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC3 });
			newLine();
		}

		//create newpage for compliance section
		checkoutPage = new PDPage(PDRectangle.A4); //new page created
		final PDRectangle pageSize = checkoutPage.getMediaBox();
		final float startUY = pageSize.getUpperRightY() - margin;
		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
		YCORDINATE = startUY; //Reset the yCordinate with the new Y cordinate
		contentStream.close(); //close the prev stream
		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
		//Migration changes start
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end

		final String custComplianceDetail = "4.COMPLIANCE QUESTIONS";
		final String isGovVal = cart != null && cart.getIsGovernment() != null
				? cart.getIsGovernment().booleanValue() ? "Yes" : "No" : "No";
		final String isNuclearVal = cart != null && cart.getIsNuclearOppurtunity() != null
				? cart.getIsNuclearOppurtunity().booleanValue() ? "Yes" : "No" : "No";
		final String isEndUserVal = cart != null && cart.getIsBuyer() != null ? cart.getIsBuyer().booleanValue() ? "Yes" : "No"
				: "No";
		final String isExportVal = cart != null && cart.getIsExport() != null ? cart.getIsExport().booleanValue() ? "Yes" : "No"
				: "No";
		final String exportAddress = cart != null && cart.getExportAddressText() != null ? cart.getExportAddressText() : "";
		final String endUserCategoryVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getEndUserType() != null ? cart.getRMAEndUserAddress().getEndUserType() : "";
		final String endUserNameVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getCompany() != null ? cart.getRMAEndUserAddress().getCompany() : "";
		final String endUserAddressL1Val = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getLine1() != null ? cart.getRMAEndUserAddress().getLine1() : "";
		final String endUserAddressL2Val = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getLine2() != null ? cart.getRMAEndUserAddress().getLine2() : "";
		final String endUserCountryVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getCountry() != null && cart.getRMAEndUserAddress().getCountry().getName() != null
						? cart.getRMAEndUserAddress().getCountry().getName() : "";
		final String endUserStateVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getRegion() != null && cart.getRMAEndUserAddress().getRegion().getName() != null
						? cart.getRMAEndUserAddress().getRegion().getName() : "";
		final String endUserCityVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getTown() != null ? cart.getRMAEndUserAddress().getTown() : "";//Region
		final String endUserZipcodeVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getPostalcode() != null ? cart.getRMAEndUserAddress().getPostalcode() : "";

		final String isGov = "Is this a Government or Military opportunity, or does it involve nuclear, chemical, or biological weapons?";
		final String isNuclear = "Is this a Nuclear Opportunity?";
		final String isExport = "Will any materials in this order be exported from the requested shipping address?";
		final String isEndUser = "Is the end user a government agency or buying for a government?";
		final String altContactName = "Alternate contact name";
		final String altContactEmail = "Alternate contact Email ID";
		final String altContactNumber = "Alternate contact phone number";
		final String endUserCategory = "End user category";
		final String endUserName = "End user name";
		final String endUserAddressL1 = "End user address line 1";
		final String endUserAddressL2 = "End user address line 2";
		final String endUserCountry = "End user country";
		final String endUserState = "End user state / province";
		final String endUserCity = "End user city";
		final String endUserZipcode = "End user zip code";
		final String exportAddressText = "Export Address";

		final List<Float> biggestCellC4 = new ArrayList<>();
		biggestCellC4.add(calWidth(altContactNumber));
		Collections.sort(biggestCellC4);
		Collections.reverse(biggestCellC4);
		final float sizeC4 = biggestCellC4.get(0);

		addPara(custComplianceDetail, true, false, pdDocument, checkoutPage, contentStream);
		final List<String> isGovlines = addMultiParagraph(checkoutPage, isGov, pdDocument, sizeC4);
		final List<String> isExportlines = addMultiParagraph(checkoutPage, isExport, pdDocument, sizeC4);
		final List<String> isEndUserlines = addMultiParagraph(checkoutPage, isEndUser, pdDocument, sizeC4);
		final List<String> exportAddressLinesText = addMultiParagraph(checkoutPage, checkSpclChar(exportAddressText), pdDocument, sizeC4);
		final List<String> exportAddressLines = addMultiParagraph(checkoutPage, checkSpclChar(exportAddress), pdDocument, sizeC4);
		List<String> endUserNameVals = addMultiParagraph(checkoutPage, checkSpclChar(endUserNameVal), pdDocument, sizeC4);
		final List<String> endUserAddressL1ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL1Val), pdDocument, sizeC4);
		final List<String> endUserAddressL2ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL2Val), pdDocument, sizeC4);

		newLine();
		addMultiLinePara(isGovlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isGovVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * isGovlines.size();
		newLine();
		addPara(isNuclear, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isNuclearVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();

		addMultiLinePara(isExportlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isExportVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isExportlines.size() + FONT_HEIGHT * 3.5f });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * isExportlines.size();

		if (!exportAddress.isEmpty() && !exportAddress.equalsIgnoreCase(""))
		{
			addMultiLinePara(exportAddressLinesText, false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addMultiLinePara(exportAddressLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
			//v.imp to reset
			YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
			newLine();
		}
		addMultiLinePara(isEndUserlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() + FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isEndUserVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isEndUserlines.size() + FONT_HEIGHT * 5.8f });
		//v.imp to reset
		newLine();
		/*
		 * addPara(altContactName, false, false, pdDocument, checkoutPage, contentStream, new float[] { margin * 2,
		 * YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT }); addPara("           ", false, true, pdDocument,
		 * checkoutPage, contentStream, new float[] { margin * 3 }); addPara(altContactNameVal, true, true, pdDocument,
		 * checkoutPage, contentStream, new float[] { margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size()
		 * }); newLine(); addPara(altContactEmail, false, false, pdDocument, checkoutPage, contentStream, new float[] {
		 * margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT }); addPara("           ", false, true,
		 * pdDocument, checkoutPage, contentStream, new float[] { margin * 3 }); addPara(altContactEmailVal, true, true,
		 * pdDocument, checkoutPage, contentStream, new float[] { margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT *
		 * isGovlines.size() }); newLine(); addPara(altContactNumber, false, false, pdDocument, checkoutPage,
		 * contentStream, new float[] { margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		 * addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 });
		 * addPara(altContactNumberVal, true, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 +
		 * sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() }); newLine();
		 */addPara(endUserCategory, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserCategoryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserName, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addMultiLinePara(endUserNameVals, true, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserAddressL1, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });



		addMultiLinePara(endUserAddressL1ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
		newLine();
		/*
		 * addPara(endUserAddressL1Val, true, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 +
		 * sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() }); newLine();
		 */
		addPara(endUserAddressL2, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addMultiLinePara(endUserAddressL2ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
		newLine();
		addPara(endUserCountry, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserCountryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserCity, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserCityVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserState, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserStateVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserZipcode, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserZipcodeVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();

		//saving the file into disk
		contentStream.close();
		LOG.info("Checkout pdf generated Successfully");
		//Migration changes start
		String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_CHECKOUT_FILE);
		//Migration changes end
		for (final File file : files)
		{
			//Migration changes start
			//pdDocument.save(CHECKOUT_FILE + file.getName());
			LOG.info("Checkout PDF File generated :" + file.getName());
			pdDocument.save(file);
			bhgeBlobDataImportService.writeFileToBlob(file,checkoutFileContainerName);
			LOG.info("File written to blob :" + file.getName());
			//Migration changes end
		}
		pdDocument.close();
		return files;
	}
	
	private File[] createCheckoutPdfboxForWs(final AbstractOrderModel cart, final File... files) throws IOException
	{
		//final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
		final PDDocument pdDocument = new PDDocument();
		PDPage checkoutPage = new PDPage(PDRectangle.A4);
		pdDocument.addPage(checkoutPage);
		// Start a new content stream which will hold the content that's about to be created
		PDPageContentStream contentStream = null;
		final SimpleDateFormat targetFormat = new SimpleDateFormat("dd-MMM-yyyy");
		
		try
		{
			contentStream = new PDPageContentStream(pdDocument, checkoutPage);
		}
		catch (final Exception exc)
		{
			LOG.error(exc);
		}

		final String headerText = "Checkout Information Form";
		final String h1Text = "CHECKOUT DATA";
		final String paraCustomer = "Customer";
		final String rmaNumber = cart != null && cart.getRmaNumber() != null
				? "RMA Number:    " + removePrefixZeros(cart.getRmaNumber()) : "RMA Number: ";
		final String paraAccount = (getUserName(cart) == null ? "" : getUserName(cart));
		final String paraMAccountdesclaimer = "Please note that the below is the Checkout Information which was provided at the time of RMA submission."
				+ "This form is for your reference";
		//Migration changes start
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		File headerLogo=getHeaderLogo();
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end
		addHeading(h1Text, pdDocument, checkoutPage, contentStream);
		LOG.info("In Middle of checkout pdf generation");
		newLine();
		addPara(paraCustomer, true, false, pdDocument, checkoutPage, contentStream);
		//		newLine();
		addPara(paraAccount, false, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara(rmaNumber, false, false, pdDocument, checkoutPage, contentStream);
		newLine();

		final List<String> lines = addMultiParagraph(checkoutPage, paraMAccountdesclaimer, pdDocument);
		newLine();

		addMultiLinePara(lines, false, false, pdDocument, checkoutPage, contentStream);

		final List<Float> biggestCellSec1 = new ArrayList<>();
		biggestCellSec1.add(calWidth("PO Number"));
		biggestCellSec1.add(calWidth("End Customer PO Number"));
		Collections.sort(biggestCellSec1);
		Collections.reverse(biggestCellSec1);
		final float sizeC1 = biggestCellSec1.get(0);

		final String custAC = "1. CUSTOMER ACCOUNT & PAYMENT DETAILS";
		final String poNumber = cart != null && cart.getPurchaseOrderNumber() != null ? cart.getPurchaseOrderNumber() : "";
		final String endCustPONumber = cart != null && cart.getEndCustomerRefNum() != null ? cart.getEndCustomerRefNum() : "";
		final List<String> poFileNames = new ArrayList<String>();
		for (final MediaModel model : cart.getPoDocs())
		{
			poFileNames.add(model.getRealFileName());
		}
		final String poFileDetails = cart != null && poFileNames != null ? poFileNames.stream().collect(Collectors.joining(" "))
				: "";
		LOG.info("At line 1878:");
		final List<String> poFileLines = addMultiParagraphForPO(checkoutPage, poFileDetails, pdDocument, sizeC1);
		LOG.info("At line 1880:");
		addPara(custAC, true, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara("PO Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(poNumber, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC1 });
		newLine();

		addPara("End Customer PO Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endCustPONumber, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC1 });
		newLine();
		addPara("PO Documents", false, false, pdDocument, checkoutPage, contentStream, new float[] { margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 });
		addMultiLinePara(poFileLines, true, true, pdDocument, checkoutPage, contentStream,new float[] { margin * 3 + sizeC1, });
		newLine();

		final List<Float> biggestCellC2 = new ArrayList<>();
		biggestCellC2.add(calWidth("Shipping Address"));
		biggestCellC2.add(calWidth("Shipping Method"));
		biggestCellC2.add(calWidth("Selected Carrier"));
		biggestCellC2.add(calWidth("Shipping Contact Name"));
		biggestCellC2.add(calWidth("Shipping Contact Phone Number"));
		biggestCellC2.add(calWidth("Delivery Point"));
		biggestCellC2.add(calWidth("Requested Delivery date"));
		biggestCellC2.add(calWidth("Shipping Remarks"));
		biggestCellC2.add(calWidth("Alternate Contact Name"));
		biggestCellC2.add(calWidth("Alternate Contact Number"));
		biggestCellC2.add(calWidth("Alternate Contact Email"));
		biggestCellC2.add(calWidth("Incoterms1"));
		biggestCellC2.add(calWidth("Incoterms2"));
		Collections.sort(biggestCellC2);
		Collections.reverse(biggestCellC2);
		final float sizeC2 = biggestCellC2.get(0);

		final String shippingAddressLine1 = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getLine1() != null ? cart.getDeliveryAddress().getLine1() : "";
		final String shippingAddressLine2 = cart != null && cart.getDeliveryAddress() != null
				&& cart.getDeliveryAddress().getLine2() != null ? cart.getDeliveryAddress().getLine2() : "";
		final String postal = cart != null && cart.getDeliveryAddress() != null && cart.getDeliveryAddress().getPostalcode() != null
				? cart.getDeliveryAddress().getPostalcode().toString() : "";
		final String shippingAddressLine = shippingAddressLine1 + " " + shippingAddressLine2 + " " + postal;
		final String custShipDetail = "2. SHIPPING DETAILS";
		final String shippingMethod = cart != null && cart.getShippingChargeMethod() != null
				? cart.getShippingChargeMethod().toString() : "";

		final String selectedCarrier = cart != null && cart.getShippingCarrierMethod() != null
				&& cart.getShippingCarrierMethod().getCode() != null ? cart.getShippingCarrierMethod().toString() : "";

		final String deliveryAccountNum = cart != null && cart.getDeliveryAccountNum() != null ? cart.getDeliveryAccountNum() : "";

		final String shippingContactName = cart != null && cart.getShipToContactName() != null ? cart.getShipToContactName() : "";
		final String shippingContactPhone = cart != null && cart.getShipToContactPhone() != null ? cart.getShipToContactPhone()
				: "";
		final String deliveryPoint = cart != null && cart.getDeliveryPoint() != null ? cart.getDeliveryPoint() : "";
		final String requestedDeliveryDate = cart != null && cart.getReqHeaderDeliveryDate() != null
				? targetFormat.format(cart.getReqHeaderDeliveryDate()) : "";
		final String shippingRemarks = cart != null && cart.getShippingRemarks() != null ? cart.getShippingRemarks() : "";
		final String altContactNameVal = cart != null && cart.getShippingConatct2Name() != null ? cart.getShippingConatct2Name()
				: "";
		final String altContactEmailVal = cart != null && cart.getAlternateContactEmail() != null ? cart.getAlternateContactEmail()
				: "";
		final String altContactNumberVal = cart != null && cart.getShippingConatct2Number() != null
				? cart.getShippingConatct2Number() : "";

		BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
		if(null == soldto)
		{
			soldto = bhgeSoldToUtil.getBHGESoldToData(cart.getSoldToForCart());
		}
		final String incoterm1 = soldto != null && soldto.getIncoterms1() != null ? soldto.getIncoterms1() : "";
		final String incoterm2 = soldto != null && soldto.getIncoterms2() != null ? soldto.getIncoterms2() : "";

		addPara(custShipDetail, true, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara("Shipping Method", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingMethod, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Shipping Address", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingAddressLine, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Selected Carrier", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(selectedCarrier, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();
		if (!deliveryAccountNum.isEmpty() && !deliveryAccountNum.equalsIgnoreCase(""))
		{
			addPara("Shipping Account number", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(deliveryAccountNum, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		addPara("Shipping Contact Name", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingContactName, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Shipping Contact Phone Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shippingContactPhone, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Delivery Point", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(deliveryPoint, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Requested Delivery date (DD-MM-YYYY) ", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(requestedDeliveryDate, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Shipping Remarks", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		final List<String> shippingRemarklines = addMultiParagraph(checkoutPage, checkSpclChar(shippingRemarks), pdDocument, sizeC2);
		addMultiLinePara(shippingRemarklines, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();
		if (!altContactNameVal.isEmpty() && !altContactNameVal.equalsIgnoreCase(""))
		{
			addPara("Alternate Contact Name", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(altContactNameVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		if (!altContactNumberVal.isEmpty() && !altContactNumberVal.equalsIgnoreCase(""))
		{
			addPara("Alternate Contact Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(altContactNumberVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		if (!altContactEmailVal.isEmpty() && !altContactEmailVal.equalsIgnoreCase(""))
		{
			addPara("Alternate Contact Email", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara(altContactEmailVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC2 });
			newLine();
		}
		addPara("Incoterms1", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(incoterm1, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		addPara("Incoterms2", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(incoterm2, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC2 });
		newLine();

		final List<Float> biggestCellC3 = new ArrayList<>();
		biggestCellC3.add(calWidth("Order acknowledgement"));
		biggestCellC3.add(calWidth("Ship notificiation"));
		biggestCellC3.add(calWidth("Invoice email"));
		biggestCellC3.add(calWidth("Do you need to BHGE to review order"));
		biggestCellC3.add(calWidth("CSR Review Reason"));
		Collections.sort(biggestCellC3);
		Collections.reverse(biggestCellC3);
		final float sizeC3 = biggestCellC3.get(0);

		checkoutPage = new PDPage(PDRectangle.A4); //new page created
		final PDRectangle pageSize1 = checkoutPage.getMediaBox();
		final float startUY1 = pageSize1.getUpperRightY() - margin;
		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
		YCORDINATE = startUY1; //Reset the yCordinate with the new Y cordinate
		contentStream.close(); //close the prev stream
		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
		//Migration changes start
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end

		final String custNotificationDetail = "3. NOTIFICATIONS DETAILS";
		final String orderack = cart != null && cart.getOrderConfirmationEMail() != null ? cart.getOrderConfirmationEMail() : "";
		final String shipNotification = cart != null && cart.getShipNotificationEmail() != null ? cart.getShipNotificationEmail()
				: "";
		final String invoiceEmail = cart != null && cart.getInvoiceEmail() != null ? cart.getInvoiceEmail() : "";
		final String csrReviewText = cart != null && cart.getSpecialDiscountCode() != null ? cart.getSpecialDiscountCode() : "";
		addPara(custNotificationDetail, true, false, pdDocument, checkoutPage, contentStream);
		newLine();
		addPara("Order acknowledgement", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(orderack, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC3 });
		newLine();
		addPara("Ship notificiation", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(shipNotification, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC3 });
		newLine();
		addPara("Invoice email", false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(invoiceEmail, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC3 });
		newLine();
		if (cart != null && cart.getSpecialDiscountCode() != null && !cart.getSpecialDiscountCode().equalsIgnoreCase(""))
		{
			addPara("Do you need to BHGE to review order", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addPara("Yes", true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC3 });
			newLine();
			addPara("CSR Review Reason", false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2 });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			final List<String> csrReviewlines = addMultiParagraph(checkoutPage, checkSpclChar(csrReviewText), pdDocument, sizeC2);
			addMultiLinePara(csrReviewlines, true, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC3 });
			newLine();
		}

		//create newpage for compliance section
		checkoutPage = new PDPage(PDRectangle.A4); //new page created
		final PDRectangle pageSize = checkoutPage.getMediaBox();
		final float startUY = pageSize.getUpperRightY() - margin;
		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
		YCORDINATE = startUY; //Reset the yCordinate with the new Y cordinate
		contentStream.close(); //close the prev stream
		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
		//Migration changes start
		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
		//Migration changes end

		final String custComplianceDetail = "4.COMPLIANCE QUESTIONS";
		final String isGovVal = cart != null && cart.getIsGovernment() != null
				? cart.getIsGovernment().booleanValue() ? "Yes" : "No" : "No";
		final String isNuclearVal = cart != null && cart.getIsNuclearOppurtunity() != null
				? cart.getIsNuclearOppurtunity().booleanValue() ? "Yes" : "No" : "No";
		final String isEndUserVal = cart != null && cart.getIsBuyer() != null ? cart.getIsBuyer().booleanValue() ? "Yes" : "No"
				: "No";
		final String isExportVal = cart != null && cart.getIsExport() != null ? cart.getIsExport().booleanValue() ? "Yes" : "No"
				: "No";
		final String exportAddress = cart != null && cart.getExportAddressText() != null ? cart.getExportAddressText() : "";
		final String endUserCategoryVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getEndUserType() != null ? cart.getRMAEndUserAddress().getEndUserType() : "";
		final String endUserNameVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getCompany() != null ? cart.getRMAEndUserAddress().getCompany() : "";
		final String endUserAddressL1Val = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getLine1() != null ? cart.getRMAEndUserAddress().getLine1() : "";
		final String endUserAddressL2Val = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getLine2() != null ? cart.getRMAEndUserAddress().getLine2() : "";
		final String endUserCountryVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getCountry() != null && cart.getRMAEndUserAddress().getCountry().getName() != null
						? cart.getRMAEndUserAddress().getCountry().getName() : "";
		final String endUserStateVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getRegion() != null && cart.getRMAEndUserAddress().getRegion().getName() != null
						? cart.getRMAEndUserAddress().getRegion().getName() : "";
		final String endUserCityVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getTown() != null ? cart.getRMAEndUserAddress().getTown() : "";//Region
		final String endUserZipcodeVal = cart != null && cart.getRMAEndUserAddress() != null
				&& cart.getRMAEndUserAddress().getPostalcode() != null ? cart.getRMAEndUserAddress().getPostalcode() : "";

		final String isGov = "Is this a Government or Military opportunity, or does it involve nuclear, chemical, or biological weapons?";
		final String isNuclear = "Is this a Nuclear Opportunity?";
		final String isExport = "Will any materials in this order be exported from the requested shipping address?";
		final String isEndUser = "Is the end user a government agency or buying for a government?";
		final String altContactName = "Alternate contact name";
		final String altContactEmail = "Alternate contact Email ID";
		final String altContactNumber = "Alternate contact phone number";
		final String endUserCategory = "End user category";
		final String endUserName = "End user name";
		final String endUserAddressL1 = "End user address line 1";
		final String endUserAddressL2 = "End user address line 2";
		final String endUserCountry = "End user country";
		final String endUserState = "End user state / province";
		final String endUserCity = "End user city";
		final String endUserZipcode = "End user zip code";
		final String exportAddressText = "Export Address";

		final List<Float> biggestCellC4 = new ArrayList<>();
		biggestCellC4.add(calWidth(altContactNumber));
		Collections.sort(biggestCellC4);
		Collections.reverse(biggestCellC4);
		final float sizeC4 = biggestCellC4.get(0);

		addPara(custComplianceDetail, true, false, pdDocument, checkoutPage, contentStream);
		final List<String> isGovlines = addMultiParagraph(checkoutPage, isGov, pdDocument, sizeC4);
		final List<String> isExportlines = addMultiParagraph(checkoutPage, isExport, pdDocument, sizeC4);
		final List<String> isEndUserlines = addMultiParagraph(checkoutPage, isEndUser, pdDocument, sizeC4);
		final List<String> exportAddressLinesText = addMultiParagraph(checkoutPage, checkSpclChar(exportAddressText), pdDocument, sizeC4);
		final List<String> exportAddressLines = addMultiParagraph(checkoutPage, checkSpclChar(exportAddress), pdDocument, sizeC4);
		List<String> endUserNameVals = addMultiParagraph(checkoutPage, checkSpclChar(endUserNameVal), pdDocument, sizeC4);
		final List<String> endUserAddressL1ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL1Val), pdDocument, sizeC4);
		final List<String> endUserAddressL2ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL2Val), pdDocument, sizeC4);

		newLine();
		addMultiLinePara(isGovlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2 });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isGovVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * isGovlines.size();
		newLine();
		addPara(isNuclear, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isNuclearVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();

		addMultiLinePara(isExportlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isExportVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isExportlines.size() + FONT_HEIGHT * 3.5f });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * isExportlines.size();

		if (!exportAddress.isEmpty() && !exportAddress.equalsIgnoreCase(""))
		{
			addMultiLinePara(exportAddressLinesText, false, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 });
			addMultiLinePara(exportAddressLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
			{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
			//v.imp to reset
			YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
			newLine();
		}
		addMultiLinePara(isEndUserlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() + FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(isEndUserVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isEndUserlines.size() + FONT_HEIGHT * 5.8f });
		//v.imp to reset
		newLine();
		/*
		 * addPara(altContactName, false, false, pdDocument, checkoutPage, contentStream, new float[] { margin * 2,
		 * YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT }); addPara("           ", false, true, pdDocument,
		 * checkoutPage, contentStream, new float[] { margin * 3 }); addPara(altContactNameVal, true, true, pdDocument,
		 * checkoutPage, contentStream, new float[] { margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size()
		 * }); newLine(); addPara(altContactEmail, false, false, pdDocument, checkoutPage, contentStream, new float[] {
		 * margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT }); addPara("           ", false, true,
		 * pdDocument, checkoutPage, contentStream, new float[] { margin * 3 }); addPara(altContactEmailVal, true, true,
		 * pdDocument, checkoutPage, contentStream, new float[] { margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT *
		 * isGovlines.size() }); newLine(); addPara(altContactNumber, false, false, pdDocument, checkoutPage,
		 * contentStream, new float[] { margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		 * addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 });
		 * addPara(altContactNumberVal, true, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 +
		 * sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() }); newLine();
		 */addPara(endUserCategory, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserCategoryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserName, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addMultiLinePara(endUserNameVals, true, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserAddressL1, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });



		addMultiLinePara(endUserAddressL1ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
		newLine();
		/*
		 * addPara(endUserAddressL1Val, true, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 +
		 * sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() }); newLine();
		 */
		addPara(endUserAddressL2, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addMultiLinePara(endUserAddressL2ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
		//v.imp to reset
		YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
		newLine();
		addPara(endUserCountry, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserCountryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserCity, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserCityVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserState, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserStateVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();
		addPara(endUserZipcode, false, false, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 });
		addPara(endUserZipcodeVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
		newLine();

		// This block is for adding the offerings in the rma checkout pdf
		String material = "Material: ";
		String offering = "Offering: ";
		if (CollectionUtils.isNotEmpty(cart.getEntries()))
		{
			checkoutPage = new PDPage(PDRectangle.A4); //new page created
			PDRectangle pageSize2 = checkoutPage.getMediaBox();
			float startUY2 = pageSize2.getUpperRightY() - margin;
			float startlY = pageSize2.getLowerLeftY() + 120;
			pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
			YCORDINATE = startUY2; //Reset the yCordinate with the new Y cordinate
			contentStream.close(); //close the prev stream
			contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
			//Migration changes start
			HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
			//Migration changes end

			for (final AbstractOrderEntryModel entry : cart.getEntries())
			{
				String partNumber = entry.getProduct().getCode();
				LOG.info("partNumber" + partNumber);
				List<BHGEServiceOfferingsModel> offeringList = (List<BHGEServiceOfferingsModel>) entry.getBhgeServiceOfferings();
				for(BHGEServiceOfferingsModel result : offeringList) {
					LOG.info("Offering text" + result.getOfferingText());
					LOG.info("startUY2: " + startUY2 + " YCORDINATE: " + YCORDINATE + " startlY: " + startlY);
					//checking the ycordinate position to add the new page for material text
					if(YCORDINATE <= startlY) {
						checkoutPage = new PDPage(PDRectangle.A4); //new page created
						pageSize2 = checkoutPage.getMediaBox();
						startUY2 = pageSize2.getUpperRightY() - margin;
						pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
						YCORDINATE = startUY2; //Reset the yCordinate with the new Y cordinate
						contentStream.close(); //close the prev stream
						contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
						HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
					}
					if(material != null && partNumber != null) {
						addPara(material, false, false, pdDocument, checkoutPage, contentStream);
						addPara(partNumber, true, true, pdDocument, checkoutPage, contentStream, new float[]{ margin * 2 + material.length() });
						newLine();
					}
					//checking the ycordinate position to add the new page for offering text
					if(YCORDINATE <= startlY) {
						checkoutPage = new PDPage(PDRectangle.A4); //new page created
						pageSize2 = checkoutPage.getMediaBox();
						startUY2 = pageSize2.getUpperRightY() - margin;
						pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
						YCORDINATE = startUY2; //Reset the yCordinate with the new Y cordinate
						contentStream.close(); //close the prev stream
						contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
						HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
					}
					if(offering != null && result.getOfferingText() != null) {
						addPara(offering, false, false, pdDocument, checkoutPage, contentStream);
						addPara(result.getOfferingText(), true, true, pdDocument, checkoutPage, contentStream, new float[]{ margin * 2 + offering.length() });
						newLine();
					}
					//checking the ycordinate position to add the new page for tick image and offerring long text
					if(YCORDINATE <= startlY) {
						checkoutPage = new PDPage(PDRectangle.A4); //new page created
						pageSize2 = checkoutPage.getMediaBox();
						startUY2 = pageSize2.getUpperRightY() - margin;
						pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
						YCORDINATE = startUY2; //Reset the yCordinate with the new Y cordinate
						contentStream.close(); //close the prev stream
						contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
						//Migration changes start
						HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
						//Migration changes end
					}
					final String containerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME);
					final String fileNameTobeRead=configurationService.getConfiguration().getString(BLOB_FILE_NAME_TO_BE_READ_TICK_MEDIA);
					File tickImage=bhgeBlobDataImportService.readFromBlob(fileNameTobeRead,".png",containerName);
					String offeringLongText = result.getServiceOfferingLongText();

					if(result.getServiceOfferingLongTextConfirmation() != null && "Y".equals(result.getServiceOfferingLongTextConfirmation())){
						newLine();
						newLine();
						addImage(tickImage, "", false, true, pdDocument, checkoutPage, contentStream);
					}

					if(offeringLongText != null) {
						final List<String> offeringLongTextLines = addMultiParagraph(checkoutPage, offeringLongText, pdDocument);
						addMultiLinePara(offeringLongTextLines, false, true, pdDocument, checkoutPage, contentStream, new float[]{ margin + 30});
					}
					newLine();
				}
			}
		}

		//saving the file into disk
		contentStream.close();
		LOG.info("Checkout pdf generated Successfully");
		//Migration changes start
		String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_CHECKOUT_FILE);
		//Migration changes end
		for (final File file : files)
		{
			//Migration changes start
			//pdDocument.save(CHECKOUT_FILE + file.getName());
			LOG.info("Checkout PDF File generated :" + file.getName());
			pdDocument.save(file);
			bhgeBlobDataImportService.writeFileToBlob(file,checkoutFileContainerName);
			LOG.info("File written to blob :" + file.getName());
			//Migration changes end
		}
		pdDocument.close();
		return files;
	}

	//added for spartacus migration
//	private File[] createCheckoutPdfboxForWs(final AbstractOrderModel cart, final File... files) throws IOException
//	{
//		//final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
//		final PDDocument pdDocument = new PDDocument();
//		PDPage checkoutPage = new PDPage(PDRectangle.A4);
//		pdDocument.addPage(checkoutPage);
//		// Start a new content stream which will hold the content that's about to be created
//		PDPageContentStream contentStream = null;
//		final SimpleDateFormat targetFormat = new SimpleDateFormat("dd-MMM-yyyy");
//
//		try
//		{
//			contentStream = new PDPageContentStream(pdDocument, checkoutPage);
//		}
//		catch (final Exception exc)
//		{
//			LOG.error(exc);
//		}
//
//		final String headerText = "Checkout Information Form";
//		final String h1Text = "CHECKOUT DATA";
//		final String paraCustomer = "Customer";
//		final String rmaNumber = cart != null && cart.getRmaNumber() != null
//				? "RMA Number:    " + removePrefixZeros(cart.getRmaNumber()) : "RMA Number: ";
//		final String paraAccount = (getUserName(cart) == null ? "" : getUserName(cart));
//		final String paraMAccountdesclaimer = "Please note that the below is the Checkout Information which was provided at the time of RMA submission."
//				+ "This form is for your reference";
//		//Migration changes start
//		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
//		File headerLogo=getHeaderLogo();
//		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
//		//Migration changes end
//		addHeading(h1Text, pdDocument, checkoutPage, contentStream);
//		LOG.info("In Middle of checkout pdf generation");
//		newLine();
//		addPara(paraCustomer, true, false, pdDocument, checkoutPage, contentStream);
//		//		newLine();
//		addPara(paraAccount, false, false, pdDocument, checkoutPage, contentStream);
//		newLine();
//		addPara(rmaNumber, false, false, pdDocument, checkoutPage, contentStream);
//		newLine();
//
//		final List<String> lines = addMultiParagraph(checkoutPage, paraMAccountdesclaimer, pdDocument);
//		newLine();
//
//		addMultiLinePara(lines, false, false, pdDocument, checkoutPage, contentStream);
//
//		final List<Float> biggestCellSec1 = new ArrayList<>();
//		biggestCellSec1.add(calWidth("PO Number"));
//		biggestCellSec1.add(calWidth("End Customer PO Number"));
//		Collections.sort(biggestCellSec1);
//		Collections.reverse(biggestCellSec1);
//		final float sizeC1 = biggestCellSec1.get(0);
//
//		final String custAC = "1. CUSTOMER ACCOUNT & PAYMENT DETAILS";
//		final String poNumber = cart != null && cart.getPurchaseOrderNumber() != null ? cart.getPurchaseOrderNumber() : "";
//		final String endCustPONumber = cart != null && cart.getEndCustomerRefNum() != null ? cart.getEndCustomerRefNum() : "";
//		final List<String> poFileNames = new ArrayList<String>();
//		for (final MediaModel model : cart.getPoDocs())
//		{
//			poFileNames.add(model.getRealFileName());
//		}
//		final String poFileDetails = cart != null && poFileNames != null ? poFileNames.stream().collect(Collectors.joining(" "))
//				: "";
//		final List<String> poFileLines = addMultiParagraph(checkoutPage, poFileDetails, pdDocument, sizeC1);
//		addPara(custAC, true, false, pdDocument, checkoutPage, contentStream);
//		newLine();
//		addPara("PO Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(poNumber, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC1 });
//		newLine();
//
//		addPara("End Customer PO Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(endCustPONumber, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC1 });
//		newLine();
//
//		addPara("PO Documents", false, false, pdDocument, checkoutPage, contentStream, new float[] { margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 });
//		addMultiLinePara(poFileLines, true, true, pdDocument, checkoutPage, contentStream,new float[] { margin * 3 + sizeC1, });
//		newLine();
//
//		final List<Float> biggestCellC2 = new ArrayList<>();
//		biggestCellC2.add(calWidth("Shipping Address"));
//		biggestCellC2.add(calWidth("Shipping Method"));
//		biggestCellC2.add(calWidth("Selected Carrier"));
//		biggestCellC2.add(calWidth("Shipping Contact Name"));
//		biggestCellC2.add(calWidth("Shipping Contact Phone Number"));
//		biggestCellC2.add(calWidth("Delivery Point"));
//		biggestCellC2.add(calWidth("Requested Delivery date"));
//		biggestCellC2.add(calWidth("Shipping Remarks"));
//		biggestCellC2.add(calWidth("Alternate Contact Name"));
//		biggestCellC2.add(calWidth("Alternate Contact Number"));
//		biggestCellC2.add(calWidth("Alternate Contact Email"));
//		biggestCellC2.add(calWidth("Incoterm"));
//		Collections.sort(biggestCellC2);
//		Collections.reverse(biggestCellC2);
//		final float sizeC2 = biggestCellC2.get(0);
//
//		final String shippingAddressLine1 = cart != null && cart.getDeliveryAddress() != null
//				&& cart.getDeliveryAddress().getLine1() != null ? cart.getDeliveryAddress().getLine1() : "";
//		final String shippingAddressLine2 = cart != null && cart.getDeliveryAddress() != null
//				&& cart.getDeliveryAddress().getLine2() != null ? cart.getDeliveryAddress().getLine2() : "";
//		final String postal = cart != null && cart.getDeliveryAddress() != null && cart.getDeliveryAddress().getPostalcode() != null
//				? cart.getDeliveryAddress().getPostalcode().toString() : "";
//		final String shippingAddressLine = shippingAddressLine1 + " " + shippingAddressLine2 + " " + postal;
//		final String custShipDetail = "2. SHIPPING DETAILS";
//		final String shippingMethod = cart != null && cart.getShippingChargeMethod() != null
//				? cart.getShippingChargeMethod().toString() : "";
//
//		final String selectedCarrier = cart != null && cart.getShippingCarrierMethod() != null
//				&& cart.getShippingCarrierMethod().getCode() != null ? cart.getShippingCarrierMethod().getCode().toString() : "";
//
//		final String deliveryAccountNum = cart != null && cart.getDeliveryAccountNum() != null ? cart.getDeliveryAccountNum() : "";
//
//		final String shippingContactName = cart != null && cart.getShipToContactName() != null ? cart.getShipToContactName() : "";
//		final String shippingContactPhone = cart != null && cart.getShipToContactPhone() != null ? cart.getShipToContactPhone()
//				: "";
//		final String deliveryPoint = cart != null && cart.getDeliveryPoint() != null ? cart.getDeliveryPoint() : "";
//		final String requestedDeliveryDate = cart != null && cart.getReqHeaderDeliveryDate() != null
//				? targetFormat.format(cart.getReqHeaderDeliveryDate()) : "";
//		final String shippingRemarks = cart != null && cart.getShippingRemarks() != null ? cart.getShippingRemarks() : "";
//		final String altContactNameVal = cart != null && cart.getShippingConatct2Name() != null ? cart.getShippingConatct2Name()
//				: "";
//		final String altContactEmailVal = cart != null && cart.getAlternateContactEmail() != null ? cart.getAlternateContactEmail()
//				: "";
//		final String altContactNumberVal = cart != null && cart.getShippingConatct2Number() != null
//				? cart.getShippingConatct2Number() : "";
//
//		// Commented for spartacus implementation
//		//BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
//		BHGESoldToData soldto = bhgeSoldToUtil.getDefaultB2BUnitUidOfCurrentUser();
//		if(null == soldto)
//		{
//			soldto = bhgeSoldToUtil.getBHGESoldToData(cart.getSoldToForCart());
//		}
//		final String incoterm1 = soldto != null && soldto.getIncoterms1() != null ? soldto.getIncoterms1() : "";
//		final String incoterm2 = soldto != null && soldto.getIncoterms2() != null ? soldto.getIncoterms2() : "";
//
//		addPara(custShipDetail, true, false, pdDocument, checkoutPage, contentStream);
//		newLine();
//		addPara("Shipping Method", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(shippingMethod, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//
//		addPara("Shipping Address", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(shippingAddressLine, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//
//		addPara("Selected Carrier", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(selectedCarrier, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//		if (!deliveryAccountNum.isEmpty() && !deliveryAccountNum.equalsIgnoreCase(""))
//		{
//			addPara("Shipping Account number", false, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 2 });
//			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 });
//			addPara(deliveryAccountNum, true, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 + sizeC2 });
//			newLine();
//		}
//		addPara("Shipping Contact Name", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(shippingContactName, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//
//		addPara("Shipping Contact Phone Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(shippingContactPhone, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//
//		addPara("Delivery Point", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(deliveryPoint, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//
//		addPara("Requested Delivery date (DD-MM-YYYY) ", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(requestedDeliveryDate, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//
//		addPara("Shipping Remarks", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		final List<String> shippingRemarklines = addMultiParagraph(checkoutPage, checkSpclChar(shippingRemarks), pdDocument, sizeC2);
//		addMultiLinePara(shippingRemarklines, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//		if (!altContactNameVal.isEmpty() && !altContactNameVal.equalsIgnoreCase(""))
//		{
//			addPara("Alternate Contact Name", false, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 2 });
//			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 });
//			addPara(altContactNameVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 + sizeC2 });
//			newLine();
//		}
//		if (!altContactNumberVal.isEmpty() && !altContactNumberVal.equalsIgnoreCase(""))
//		{
//			addPara("Alternate Contact Number", false, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 2 });
//			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 });
//			addPara(altContactNumberVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 + sizeC2 });
//			newLine();
//		}
//		if (!altContactEmailVal.isEmpty() && !altContactEmailVal.equalsIgnoreCase(""))
//		{
//			addPara("Alternate Contact Email", false, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 2 });
//			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 });
//			addPara(altContactEmailVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 + sizeC2 });
//			newLine();
//		}
//		addPara("Incoterm", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(incoterm1, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC2 });
//		newLine();
//
//		final List<Float> biggestCellC3 = new ArrayList<>();
//		biggestCellC3.add(calWidth("Order acknowledgement"));
//		biggestCellC3.add(calWidth("Ship notificiation"));
//		biggestCellC3.add(calWidth("Invoice email"));
//		biggestCellC3.add(calWidth("Do you need to BHGE to review order"));
//		biggestCellC3.add(calWidth("CSR Review Reason"));
//		Collections.sort(biggestCellC3);
//		Collections.reverse(biggestCellC3);
//		final float sizeC3 = biggestCellC3.get(0);
//
//		checkoutPage = new PDPage(PDRectangle.A4); //new page created
//		final PDRectangle pageSize1 = checkoutPage.getMediaBox();
//		final float startUY1 = pageSize1.getUpperRightY() - margin;
//		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
//		YCORDINATE = startUY1; //Reset the yCordinate with the new Y cordinate
//		contentStream.close(); //close the prev stream
//		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
//		//Migration changes start
//		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
//		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
//		//Migration changes end
//
//		final String custNotificationDetail = "3. NOTIFICATIONS DETAILS";
//		final String orderack = cart != null && cart.getOrderConfirmationEMail() != null ? cart.getOrderConfirmationEMail() : "";
//		final String shipNotification = cart != null && cart.getShipNotificationEmail() != null ? cart.getShipNotificationEmail()
//				: "";
//		final String invoiceEmail = cart != null && cart.getInvoiceEmail() != null ? cart.getInvoiceEmail() : "";
//		final String csrReviewText = cart != null && cart.getSpecialDiscountCode() != null ? cart.getSpecialDiscountCode() : "";
//		addPara(custNotificationDetail, true, false, pdDocument, checkoutPage, contentStream);
//		newLine();
//		addPara("Order acknowledgement", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(orderack, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC3 });
//		newLine();
//		addPara("Ship notificiation", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(shipNotification, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC3 });
//		newLine();
//		addPara("Invoice email", false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(invoiceEmail, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC3 });
//		newLine();
//		if (cart != null && cart.getSpecialDiscountCode() != null && !cart.getSpecialDiscountCode().equalsIgnoreCase(""))
//		{
//			addPara("Do you need to BHGE to review order", false, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 2 });
//			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 });
//			addPara("Yes", true, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 + sizeC3 });
//			newLine();
//			addPara("CSR Review Reason", false, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 2 });
//			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 });
//			final List<String> csrReviewlines = addMultiParagraph(checkoutPage, checkSpclChar(csrReviewText), pdDocument, sizeC2);
//			addMultiLinePara(csrReviewlines, true, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 + sizeC3 });
//			newLine();
//		}
//
//		//create newpage for compliance section
//		checkoutPage = new PDPage(PDRectangle.A4); //new page created
//		final PDRectangle pageSize = checkoutPage.getMediaBox();
//		final float startUY = pageSize.getUpperRightY() - margin;
//		pdDocument.addPage(checkoutPage); //Add the page to the PDDocument
//		YCORDINATE = startUY; //Reset the yCordinate with the new Y cordinate
//		contentStream.close(); //close the prev stream
//		contentStream = new PDPageContentStream(pdDocument, checkoutPage); //Create a new contentStream and use it further
//		//Migration changes start
//		//HeaderFooterPage.addPageHeaderFooter(headerText, pdDocument, checkoutPage, contentStream);
//		HeaderFooterPage.addPageHeaderFooter(headerLogo,headerText, pdDocument, checkoutPage, contentStream);
//		//Migration changes end
//
//		final String custComplianceDetail = "4.COMPLIANCE QUESTIONS";
//		final String isGovVal = cart != null && cart.getIsGovernment() != null
//				? cart.getIsGovernment().booleanValue() ? "Yes" : "No" : "No";
//		final String isNuclearVal = cart != null && cart.getIsNuclearOppurtunity() != null
//				? cart.getIsNuclearOppurtunity().booleanValue() ? "Yes" : "No" : "No";
//		final String isEndUserVal = cart != null && cart.getIsBuyer() != null ? cart.getIsBuyer().booleanValue() ? "Yes" : "No"
//				: "No";
//		final String isExportVal = cart != null && cart.getIsExport() != null ? cart.getIsExport().booleanValue() ? "Yes" : "No"
//				: "No";
//		final String exportAddress = cart != null && cart.getExportAddressText() != null ? cart.getExportAddressText() : "";
//		final String endUserCategoryVal = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getEndUserType() != null ? cart.getRMAEndUserAddress().getEndUserType() : "";
//		final String endUserNameVal = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getCompany() != null ? cart.getRMAEndUserAddress().getCompany() : "";
//		final String endUserAddressL1Val = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getLine1() != null ? cart.getRMAEndUserAddress().getLine1() : "";
//		final String endUserAddressL2Val = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getLine2() != null ? cart.getRMAEndUserAddress().getLine2() : "";
//		final String endUserCountryVal = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getCountry() != null && cart.getRMAEndUserAddress().getCountry().getName() != null
//						? cart.getRMAEndUserAddress().getCountry().getName() : "";
//		final String endUserStateVal = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getRegion() != null && cart.getRMAEndUserAddress().getRegion().getName() != null
//						? cart.getRMAEndUserAddress().getRegion().getName() : "";
//		final String endUserCityVal = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getTown() != null ? cart.getRMAEndUserAddress().getTown() : "";//Region
//		final String endUserZipcodeVal = cart != null && cart.getRMAEndUserAddress() != null
//				&& cart.getRMAEndUserAddress().getPostalcode() != null ? cart.getRMAEndUserAddress().getPostalcode() : "";
//
//		final String isGov = "Is this a Government or Military opportunity, or does it involve nuclear, chemical, or biological weapons?";
//		final String isNuclear = "Is this a Nuclear Opportunity?";
//		final String isExport = "Will any materials in this order be exported from the requested shipping address?";
//		final String isEndUser = "Is the end user a government agency or buying for a government?";
//		final String altContactName = "Alternate contact name";
//		final String altContactEmail = "Alternate contact Email ID";
//		final String altContactNumber = "Alternate contact phone number";
//		final String endUserCategory = "End user category";
//		final String endUserName = "End user name";
//		final String endUserAddressL1 = "End user address line 1";
//		final String endUserAddressL2 = "End user address line 2";
//		final String endUserCountry = "End user country";
//		final String endUserState = "End user state / province";
//		final String endUserCity = "End user city";
//		final String endUserZipcode = "End user zip code";
//		final String exportAddressText = "Export Address";
//
//		final List<Float> biggestCellC4 = new ArrayList<>();
//		biggestCellC4.add(calWidth(altContactNumber));
//		Collections.sort(biggestCellC4);
//		Collections.reverse(biggestCellC4);
//		final float sizeC4 = biggestCellC4.get(0);
//
//		addPara(custComplianceDetail, true, false, pdDocument, checkoutPage, contentStream);
//		final List<String> isGovlines = addMultiParagraph(checkoutPage, isGov, pdDocument, sizeC4);
//		final List<String> isExportlines = addMultiParagraph(checkoutPage, isExport, pdDocument, sizeC4);
//		final List<String> isEndUserlines = addMultiParagraph(checkoutPage, isEndUser, pdDocument, sizeC4);
//		final List<String> exportAddressLinesText = addMultiParagraph(checkoutPage, checkSpclChar(exportAddressText), pdDocument, sizeC4);
//		final List<String> exportAddressLines = addMultiParagraph(checkoutPage, checkSpclChar(exportAddress), pdDocument, sizeC4);
//		List<String> endUserNameVals = addMultiParagraph(checkoutPage, checkSpclChar(endUserNameVal), pdDocument, sizeC4);
//		final List<String> endUserAddressL1ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL1Val), pdDocument, sizeC4);
//		final List<String> endUserAddressL2ValLines = addMultiParagraph(checkoutPage, checkSpclChar(endUserAddressL2Val), pdDocument, sizeC4);
//
//		newLine();
//		addMultiLinePara(isGovlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2 });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(isGovVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		//v.imp to reset
//		YCORDINATE -= FONT_HEIGHT * isGovlines.size();
//		newLine();
//		addPara(isNuclear, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(isNuclearVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		newLine();
//
//		addMultiLinePara(isExportlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(isExportVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isExportlines.size() + FONT_HEIGHT * 3.5f });
//		//v.imp to reset
//		YCORDINATE -= FONT_HEIGHT * isExportlines.size();
//
//		if (!exportAddress.isEmpty() && !exportAddress.equalsIgnoreCase(""))
//		{
//			addMultiLinePara(exportAddressLinesText, false, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//			addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 });
//			addMultiLinePara(exportAddressLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
//			{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
//			//v.imp to reset
//			YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
//			newLine();
//		}
//		addMultiLinePara(isEndUserlines, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() + FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(isEndUserVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isEndUserlines.size() + FONT_HEIGHT * 5.8f });
//		//v.imp to reset
//		newLine();
//		/*
//		 * addPara(altContactName, false, false, pdDocument, checkoutPage, contentStream, new float[] { margin * 2,
//		 * YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT }); addPara("           ", false, true, pdDocument,
//		 * checkoutPage, contentStream, new float[] { margin * 3 }); addPara(altContactNameVal, true, true, pdDocument,
//		 * checkoutPage, contentStream, new float[] { margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size()
//		 * }); newLine(); addPara(altContactEmail, false, false, pdDocument, checkoutPage, contentStream, new float[] {
//		 * margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT }); addPara("           ", false, true,
//		 * pdDocument, checkoutPage, contentStream, new float[] { margin * 3 }); addPara(altContactEmailVal, true, true,
//		 * pdDocument, checkoutPage, contentStream, new float[] { margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT *
//		 * isGovlines.size() }); newLine(); addPara(altContactNumber, false, false, pdDocument, checkoutPage,
//		 * contentStream, new float[] { margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		 * addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 });
//		 * addPara(altContactNumberVal, true, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 +
//		 * sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() }); newLine();
//		 */addPara(endUserCategory, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(endUserCategoryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		newLine();
//		addPara(endUserName, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addMultiLinePara(endUserNameVals, true, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		newLine();
//		addPara(endUserAddressL1, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//
//
//
//		addMultiLinePara(endUserAddressL1ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
//		//v.imp to reset
//		YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
//		newLine();
//		/*
//		 * addPara(endUserAddressL1Val, true, true, pdDocument, checkoutPage, contentStream, new float[] { margin * 3 +
//		 * sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() }); newLine();
//		 */
//		addPara(endUserAddressL2, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addMultiLinePara(endUserAddressL2ValLines, true, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * exportAddressLinesText.size() + FONT_HEIGHT * 3.5f });
//		//v.imp to reset
//		YCORDINATE -= FONT_HEIGHT * exportAddressLinesText.size();
//		newLine();
//		addPara(endUserCountry, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(endUserCountryVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		newLine();
//		addPara(endUserCity, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(endUserCityVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		newLine();
//		addPara(endUserState, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(endUserStateVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		newLine();
//		addPara(endUserZipcode, false, false, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 2, YCORDINATE + FONT_HEIGHT * isGovlines.size() - FONT_HEIGHT });
//		addPara("           ", false, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 });
//		addPara(endUserZipcodeVal, true, true, pdDocument, checkoutPage, contentStream, new float[]
//		{ margin * 3 + sizeC4, YCORDINATE + FONT_HEIGHT * isGovlines.size() });
//		newLine();
//
//		//saving the file into disk
//		contentStream.close();
//		LOG.info("Checkout pdf generated Successfully");
//		//Migration changes start
//		String checkoutFileContainerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME_CHECKOUT_FILE);
//		//Migration changes end
//		for (final File file : files)
//		{
//			//Migration changes start
//			//pdDocument.save(CHECKOUT_FILE + file.getName());
//			LOG.info("Checkout PDF File generated :" + file.getName());
//			pdDocument.save(file);
//			bhgeBlobDataImportService.writeFileToBlob(file,checkoutFileContainerName);
//			LOG.info("File written to blob :" + file.getName());
//			//Migration changes end
//		}
//		pdDocument.close();
//		return files;
//	}


	//	private void addContentsForCheckout(final CartModel cart, final Document document, final BHGERmaFormData rmaFormData,
	//			final PdfWriter writer) throws DocumentException, MalformedURLException, IOException
	//	{
	//		final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
	//		final HeaderFooterPageEventCheckout event = new HeaderFooterPageEventCheckout();
	////		writer.setPageEvent(event);
	//		final Paragraph preface = new Paragraph();
	//		addEmptyLine(preface, 2);
	//
	//		final String sold = getUserName();
	//		//Adding hazardous text chunk to 'para'
	//		Paragraph para = new Paragraph();
	//		para = new Paragraph();
	//		para.add(new Chunk("CHECKOUT DATA", headerFont));
	//		preface.add(para);
	//		addEmptyLine(preface, 1);
	//		Paragraph para0 = new Paragraph();
	//		para0 = new Paragraph();
	//		para0.add(new Chunk("Customer:", subFont));
	//		para0.add(new Chunk(sold));
	//		preface.add(para0);
	//		addEmptyLine(preface, 1);
	//		final Paragraph para1 = new Paragraph();
	//		para1.add(new Chunk(
	//				"Please note that the below is the Checkout Information which was provided at the time of RMA submission. This form is for your reference",
	//				smallBold));
	//		preface.add(para1);
	//		addEmptyLine(preface, 1);
	//
	//		final Paragraph para2 = new Paragraph();
	//		para2.add(new Chunk("1. CUSTOMER ACCOUNT & PAYMENT DETAILS"));
	//		preface.add(para2);
	//		addEmptyLine(preface, 1);
	//
	//		final Paragraph paraTable0 = new Paragraph();
	//		final PdfPTable tablepara0 = new PdfPTable(2);
	//		tablepara0.setHorizontalAlignment(Element.ALIGN_MIDDLE);
	//		final PdfPCell cell0 = new PdfPCell(new Paragraph("Field", subFont));
	//		final PdfPCell rcell0 = new PdfPCell(new Paragraph("Value", subFont));//checkForNull(cart.getPonum())
	//		final PdfPCell cell1 = new PdfPCell(new Paragraph("PO Number"));
	//		final PdfPCell rcell1 = new PdfPCell(new Paragraph(checkForNull(cart.getPurchaseOrderNumber())));//checkForNull(cart.getPonum())
	//		final PdfPCell cell2 = new PdfPCell(new Paragraph("End Customer PO Number"));
	//		final PdfPCell rcell2 = new PdfPCell(new Paragraph(checkForNull(cart.getPurchaseOrderNumber())));
	//		tablepara0.addCell(cell0);
	//		tablepara0.addCell(rcell0);
	//		tablepara0.addCell(cell1);
	//		tablepara0.addCell(rcell1);
	//		tablepara0.addCell(cell2);
	//		tablepara0.addCell(rcell2);
	//		paraTable0.add(tablepara0);
	//		preface.add(paraTable0);
	//		addEmptyLine(preface, 2);
	//
	//		final Paragraph para3 = new Paragraph();
	//		para3.add(new Chunk("2. SHIPPING DETAILS"));
	//		preface.add(para3);
	//		addEmptyLine(preface, 1);
	//
	//		final Paragraph paraTable1 = new Paragraph();
	//		final PdfPTable tablepara1 = new PdfPTable(2);
	//		tablepara1.setHorizontalAlignment(Element.ALIGN_MIDDLE);
	//
	//		final PdfPCell genericcell1 = new PdfPCell(new Paragraph("Field", subFont));
	//		final PdfPCell rgenericcell1 = new PdfPCell(new Paragraph("Value", subFont));//checkForNull(cart.getPonum())
	//
	//		final PdfPCell cell5 = new PdfPCell(new Paragraph("Shipping Method"));
	//		final PdfPCell rcell5 = new PdfPCell(new Paragraph(checkForNull(cart.getShippingMethod())));//
	//		PdfPCell cell6 = null;
	//		PdfPCell rcell6 = null;
	//		if (cart.getShippingCarrierMethod() != null)
	//		{
	//			cell6 = new PdfPCell(new Paragraph("Selected Carrier"));
	//			rcell6 = new PdfPCell(new Paragraph(checkForNull(cart.getShippingCarrierMethod().getCode())));//cart.getShippingCarrierMethod().getCode())
	//		}
	//		else
	//		{
	//			cell6 = new PdfPCell(new Paragraph("Selected Carrier"));
	//			rcell6 = new PdfPCell(new Paragraph(""));
	//		}
	//
	//		final PdfPCell cell19 = new PdfPCell(new Paragraph("Delivery Account number"));
	//		final PdfPCell rcell19 = new PdfPCell(new Paragraph(checkForNull(cart.getDeliveryAccountNum())));//
	//
	//		final PdfPCell cell9 = new PdfPCell(new Paragraph("Shipping Contact Name"));
	//		final PdfPCell rcell9 = new PdfPCell(new Paragraph(checkForNull(cart.getShipToContactName())));//
	//
	//		final PdfPCell cell10 = new PdfPCell(new Paragraph("Shipping Contact Phone Number"));
	//		final PdfPCell rcell10 = new PdfPCell(new Paragraph(checkForNull(cart.getShipToContactPhone())));//
	//
	//		final PdfPCell cell3 = new PdfPCell(new Paragraph("Delivery Point"));
	//		final PdfPCell rcell3 = new PdfPCell(new Paragraph(checkForNull(cart.getDeliveryPoint())));//
	//
	//		final PdfPCell cell4 = new PdfPCell(new Paragraph("Requested Delivery date"));
	//		final PdfPCell rcell4 = new PdfPCell(
	//				new Paragraph(cart.getReqHeaderDeliveryDate() == null ? "" : cart.getReqHeaderDeliveryDate().toString()));
	//
	//
	//		final PdfPCell cell11 = new PdfPCell(new Paragraph("Shipping Remarks"));
	//		final PdfPCell rcell11 = new PdfPCell(new Paragraph(checkForNull(cart.getShippingRemarks())));//
	//
	//
	//		tablepara1.addCell(genericcell1);
	//		tablepara1.addCell(rgenericcell1);
	//
	//		tablepara1.addCell(cell5);
	//		tablepara1.addCell(rcell5);
	//
	//		tablepara1.addCell(cell6);
	//		tablepara1.addCell(rcell6);
	//
	//
	//		tablepara1.addCell(cell9);
	//		tablepara1.addCell(rcell9);
	//
	//		tablepara1.addCell(cell10);
	//		tablepara1.addCell(rcell10);
	//
	//
	//		tablepara1.addCell(cell3);
	//		tablepara1.addCell(rcell3);
	//
	//		tablepara1.addCell(cell4);
	//		tablepara1.addCell(rcell4);
	//
	//		tablepara1.addCell(cell11);
	//		tablepara1.addCell(rcell11);
	//
	//
	//		paraTable1.add(tablepara1);
	//		preface.add(paraTable1);
	//		addEmptyLine(preface, 2);
	//
	//		final Paragraph para4 = new Paragraph();
	//		para4.add(new Chunk("3. NOTIFICATIONS DETAILS"));
	//		preface.add(para4);
	//		addEmptyLine(preface, 1);
	//		final Paragraph paraTable2 = new Paragraph();
	//		final PdfPTable tablepara2 = new PdfPTable(2);
	//		tablepara2.setHorizontalAlignment(Element.ALIGN_MIDDLE);
	//
	//		final PdfPCell genericcell2 = new PdfPCell(new Paragraph("Field", subFont));
	//		final PdfPCell rgenericcell2 = new PdfPCell(new Paragraph("Value", subFont));//checkForNull(cart.getPonum())
	//
	//		final PdfPCell cell12 = new PdfPCell(new Paragraph("Order acknowledgement"));
	//		final PdfPCell rcell12 = new PdfPCell(new Paragraph(checkForNull(cart.getOrderConfirmationEMail())));//
	//
	//		final PdfPCell cell13 = new PdfPCell(new Paragraph("Ship notificiation"));
	//		final PdfPCell rcell13 = new PdfPCell(new Paragraph(checkForNull(cart.getShipNotificationEmail())));//checkForNull(cart.getShipNotificationEmail())
	//
	//		final PdfPCell cell14 = new PdfPCell(new Paragraph("Invoice email"));
	//		final PdfPCell rcell14 = new PdfPCell(new Paragraph(checkForNull((cart.getInvoiceEmail()))));//
	//
	//		tablepara2.addCell(genericcell2);
	//		tablepara2.addCell(rgenericcell2);
	//
	//		tablepara2.addCell(cell12);
	//		tablepara2.addCell(rcell12);
	//
	//		tablepara2.addCell(cell13);
	//		tablepara2.addCell(rcell13);
	//		tablepara2.addCell(cell14);
	//		tablepara2.addCell(rcell14);
	//
	//		paraTable2.add(tablepara2);
	//		preface.add(paraTable2);
	//		addEmptyLine(preface, 8);
	//
	//
	//		final Paragraph para5 = new Paragraph();
	//		para5.add(new Chunk("4.COMPLIANCE QUESTIONS"));
	//		preface.add(para5);
	//		addEmptyLine(preface, 1);
	//
	//		final Paragraph paraTable3 = new Paragraph();
	//		final PdfPTable tablepara3 = new PdfPTable(2);
	//		tablepara3.setHorizontalAlignment(Element.ALIGN_MIDDLE);
	//
	//		final PdfPCell genericcell3 = new PdfPCell(new Paragraph("Field", subFont));
	//		final PdfPCell rgenericcell3 = new PdfPCell(new Paragraph("Value", subFont));//checkForNull(cart.getPonum())
	//
	//		final PdfPCell cell15 = new PdfPCell(new Paragraph(
	//				"Is this a Government or Military opportunity, or does it involve nuclear, chemical, or biological weapons?"));
	//		final PdfPCell rcell15 = new PdfPCell(new Paragraph(checkFlag(cart.getIsGovernment())));
	//
	//		final PdfPCell cell16 = new PdfPCell(new Paragraph("Is this a Nuclear Opportunity?"));
	//		final PdfPCell rcell16 = new PdfPCell(new Paragraph(checkFlag(cart.getIsNuclear())));//
	//
	//		final PdfPCell cell17 = new PdfPCell(
	//				new Paragraph("Will any materials in this order be exported from the requested shipping address?"));
	//		final PdfPCell rcell17 = new PdfPCell(new Paragraph(checkFlag(cart.getIsExport())));//checkForNull(cart.getIsExport().toString())
	//
	//		final PdfPCell cell18 = new PdfPCell(new Paragraph("Is the end user a government agency or buying for a government?"));
	//		final PdfPCell rcell18 = new PdfPCell(new Paragraph(checkFlag(cart.getIsBuyer())));//checkForNull(cart.getIsBuyer().toString())
	//
	//		final PdfPCell cell7 = new PdfPCell(new Paragraph("Alternate contact name"));
	//		final PdfPCell rcell7 = new PdfPCell(new Paragraph(checkForNull(cart.getShippingConatct2Name())));//
	//
	//		final PdfPCell cell8 = new PdfPCell(new Paragraph("Alternate contact Email ID"));
	//		final PdfPCell rcell8 = new PdfPCell(new Paragraph(checkForNull(cart.getAlternateContactEmail())));//
	//
	//		final PdfPCell cell28 = new PdfPCell(new Paragraph("Alternate contact phone number"));
	//		final PdfPCell rcell28 = new PdfPCell(new Paragraph(checkForNull(cart.getShippingConatct2Number())));//
	//
	//		PdfPCell cell20 = null;
	//		PdfPCell rcell20 = null;
	//
	//		PdfPCell cell21 = null;
	//		PdfPCell rcell21 = null;
	//
	//		PdfPCell cell22 = null;
	//		PdfPCell rcell22 = null;
	//
	//		PdfPCell cell23 = null;
	//		PdfPCell rcell23 = null;
	//
	//		PdfPCell cell24 = null;
	//		PdfPCell rcell24 = null;
	//
	//		PdfPCell cell25 = null;
	//		PdfPCell rcell25 = null;
	//
	//		PdfPCell cell26 = null;
	//		PdfPCell rcell26 = null;
	//
	//		PdfPCell cell27 = null;
	//		PdfPCell rcell27 = null;
	//
	//		if (cart.getRMAEndUserAddress() != null)
	//		{
	//
	//			cell20 = new PdfPCell(new Paragraph("End user category"));
	//			rcell20 = new PdfPCell(new Paragraph(checkForNull(cart.getEndUserCategory())));
	//
	//			cell21 = new PdfPCell(new Paragraph("End user name"));
	//			rcell21 = new PdfPCell(new Paragraph(
	//					checkForNull(cart.getRMAEndUserAddress().getFirstname() + cart.getRMAEndUserAddress().getFirstname())));//needs to be changed
	//
	//			cell22 = new PdfPCell(new Paragraph("End user address line 1"));
	//			rcell22 = new PdfPCell(new Paragraph(checkForNull(cart.getRMAEndUserAddress().getLine1())));
	//
	//			cell23 = new PdfPCell(new Paragraph("End user address line 2"));
	//			rcell23 = new PdfPCell(new Paragraph(checkForNull(cart.getRMAEndUserAddress().getLine2())));
	//
	//			cell24 = new PdfPCell(new Paragraph("End user country"));
	//			rcell24 = new PdfPCell(new Paragraph(
	//					(cart.getRMAEndUserAddress().getCountry() == null ? "" : cart.getRMAEndUserAddress().getCountry().toString())));//checkForNull(cart.getRMAEndUserAddress().getCountry().toString())
	//
	//			cell25 = new PdfPCell(new Paragraph("End user state / province"));
	//			rcell25 = new PdfPCell(new Paragraph(
	//					cart.getRMAEndUserAddress().getRegion() == null ? "" : cart.getRMAEndUserAddress().getRegion().toString()));//checkForNull(cart.getRMAEndUserAddress().getRegion().toString())
	//
	//			cell26 = new PdfPCell(new Paragraph("End user city"));
	//			rcell26 = new PdfPCell(new Paragraph(checkForNull(cart.getRMAEndUserAddress().getDistrict())));
	//
	//			cell27 = new PdfPCell(new Paragraph("End user zip code"));
	//			rcell27 = new PdfPCell(new Paragraph(checkForNull(cart.getRMAEndUserAddress().getPostalcode())));
	//		}
	//		else
	//		{
	//			cell20 = new PdfPCell(new Paragraph("End user category"));
	//			rcell20 = new PdfPCell(new Paragraph(checkForNull("")));
	//
	//			cell21 = new PdfPCell(new Paragraph("End user name"));
	//			rcell21 = new PdfPCell(new Paragraph(checkForNull("")));//needs to be changed
	//
	//			cell22 = new PdfPCell(new Paragraph("End user address line 1"));
	//			rcell22 = new PdfPCell(new Paragraph(checkForNull("")));
	//
	//			cell23 = new PdfPCell(new Paragraph("End user address line 2"));
	//			rcell23 = new PdfPCell(new Paragraph(checkForNull("")));
	//
	//			cell24 = new PdfPCell(new Paragraph("End user country"));
	//			rcell24 = new PdfPCell(new Paragraph(checkForNull("")));
	//
	//			cell25 = new PdfPCell(new Paragraph("End user state / province"));
	//			rcell25 = new PdfPCell(new Paragraph(checkForNull("")));
	//
	//			cell26 = new PdfPCell(new Paragraph("End user city"));
	//			rcell26 = new PdfPCell(new Paragraph(checkForNull("")));
	//
	//			cell27 = new PdfPCell(new Paragraph("End user zip code"));
	//			rcell27 = new PdfPCell(new Paragraph(checkForNull("")));
	//		}
	//		tablepara3.addCell(genericcell3);
	//		tablepara3.addCell(rgenericcell3);
	//		tablepara3.addCell(cell15);
	//		tablepara3.addCell(rcell15);
	//		tablepara3.addCell(cell16);
	//		tablepara3.addCell(rcell16);
	//		tablepara3.addCell(cell17);
	//		tablepara3.addCell(rcell17);
	//		tablepara3.addCell(cell18);
	//		tablepara3.addCell(rcell18);
	//		tablepara3.addCell(cell7);
	//		tablepara3.addCell(rcell7);
	//		tablepara3.addCell(cell8);
	//		tablepara3.addCell(rcell8);
	//		tablepara3.addCell(cell28);
	//		tablepara3.addCell(rcell28);
	//		tablepara3.addCell(cell19);
	//		tablepara3.addCell(rcell19);
	//		tablepara3.addCell(cell20);
	//		tablepara3.addCell(rcell20);
	//		tablepara3.addCell(cell21);
	//		tablepara3.addCell(rcell21);
	//		tablepara3.addCell(cell22);
	//		tablepara3.addCell(rcell22);
	//		tablepara3.addCell(cell23);
	//		tablepara3.addCell(rcell23);
	//		tablepara3.addCell(cell24);
	//		tablepara3.addCell(rcell24);
	//		tablepara3.addCell(cell25);
	//		tablepara3.addCell(rcell25);
	//		tablepara3.addCell(cell26);
	//		tablepara3.addCell(rcell26);
	//		tablepara3.addCell(cell27);
	//		tablepara3.addCell(rcell27);
	//		paraTable3.add(tablepara3);
	//		preface.add(paraTable3);
	//		addEmptyLine(preface, 2);
	//
	//		document.add(preface);
	//		document.newPage();
	//	}

	public String getSoldTo()
	{
		final SalesAreaData salesArea = (SalesAreaData) sessionService.getAttribute("defaultSalesAreaData");
		if (null != salesArea)
		{
			return salesArea.getB2bUnitUid();
		}
		return null;
	}

	public String getUserName(AbstractOrderModel cart)
	{
		B2BUnitModel b2bModel = cart.getSoldToForCart();

		//final BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
		if (null != b2bModel)
		{
			String soldTo = b2bModel.getUid();
			String[] soldToString = soldTo.split("_");
			return (removePrefixZeros(soldToString[0]) + " - " + b2bModel.getLocName());
		}
		return null;
	}

	private String checkForNull(final String s)
	{
		if (s != null && !s.isEmpty())
		{
			return s;
		}
		else
		{
			return "";
		}
	}

	private String checkFlag(final boolean s)
	{
		if (s == true)
		{
			return "True";
		}
		else
		{
			return "False";
		}
	}

	//	private void addEmptyLine(final Paragraph paragraph, final int number)
	//	{
	//		for (int i = 0; i < number; i++)
	//		{
	//			paragraph.add(new Paragraph(" "));
	//		}
	//	}

	private HashMap<String, String> prepareHazardInfo(final BHGEHazardousInfoData info)
	{
		final StringBuilder hazards = new StringBuilder();
		final HashMap<String, String> pdfInfo = new HashMap<String, String>();

		pdfInfo.put("Contaminated", "YES");
		if (info != null)
		{
			if (info.getContainsFluids() != null && info.getContainsFluids())
			{
				pdfInfo.put("ContainFluid", "YES");
			}
			else
			{
				pdfInfo.put("ContainFluid", "NO");
			}
			if (info.getDeclarationA() != null && info.getDeclarationA())
			{
				pdfInfo.put("DeclarationA", "YES");
			}
			else
			{
				pdfInfo.put("DeclarationA", "NO");
			}
			if (info.getDecontaminated() != null && info.getDecontaminated())
			{
				pdfInfo.put("Decontaminated", "YES");
			}
			else
			{
				pdfInfo.put("Decontaminated", "NO");
			}

			if (info.getHazardType() != null)
			{
				info.getHazardType().forEach(hazard -> hazards.append(hazard + ","));
			}

			hazards.deleteCharAt(hazards.length() - 1);
			pdfInfo.put("HazardList", hazards.toString());

		}

		return pdfInfo;

	}

	//	private void createChemicalDetailsTable(final Paragraph paragraph, final BHGEHazardousInfoData info) throws BadElementException
	//	{
	//		final PdfPTable table = new PdfPTable(4);
	//		// t.setBorderColor(BaseColor.GRAY);
	//		// t.setPadding(4);
	//		// t.setSpacing(4);
	//		// t.setBorderWidth(1);
	//		table.setHorizontalAlignment(Element.ALIGN_LEFT);
	//
	//		PdfPCell c1 = new PdfPCell(new Phrase("Chemical Name"));
	//		c1.setHorizontalAlignment(Element.ALIGN_CENTER);
	//		table.addCell(c1);
	//
	//		c1 = new PdfPCell(new Phrase("UN"));
	//		c1.setHorizontalAlignment(Element.ALIGN_CENTER);
	//		table.addCell(c1);
	//
	//		//		c1 = new PdfPCell(new Phrase("Msdn Supplied"));
	//		//		c1.setHorizontalAlignment(Element.ALIGN_CENTER);
	//		//		table.addCell(c1);
	//
	//		c1 = new PdfPCell(new Phrase("Chemical Notes"));
	//		c1.setHorizontalAlignment(Element.ALIGN_CENTER);
	//		table.addCell(c1);
	//
	//		table.setHeaderRows(1);
	//		info.getChemicalDetails().forEach(detail -> {
	//			PdfPCell cell = new PdfPCell(new Phrase(detail.getChemicalName(), blueFont));
	//			cell.setHorizontalAlignment(Element.ALIGN_CENTER);
	//			table.addCell(cell);
	//			cell = new PdfPCell(new Phrase(detail.getUn(), blueFont));
	//			cell.setHorizontalAlignment(Element.ALIGN_CENTER);
	//			table.addCell(cell);
	//			cell = new PdfPCell(new Phrase(detail.getChemicalNotes(), blueFont));
	//			cell.setHorizontalAlignment(Element.ALIGN_CENTER);
	//			table.addCell(cell);
	//		});
	//
	//		paragraph.add(table);
	//
	//	}

	//	private void createDeclarationTable(final Paragraph paragraph, final BHGEHazardousInfoData info, final String userName,
	//			final String cartDate)
	//	{
	//		final PdfPTable table = new PdfPTable(3);
	//		table.setHorizontalAlignment(Element.ALIGN_LEFT);
	//		if (userName != null)
	//		{
	//			PdfPCell c1 = new PdfPCell(new Phrase("Signed: " + userName));
	//			c1.setHorizontalAlignment(Element.ALIGN_LEFT);
	//			table.addCell(c1);
	//
	//			c1 = new PdfPCell(new Phrase("Print Name: " + userName));
	//			c1.setHorizontalAlignment(Element.ALIGN_LEFT);
	//			table.addCell(c1);
	//
	//			if (cartDate != null)
	//			{
	//				c1 = new PdfPCell(new Phrase("Date :" + cartDate));
	//			}
	//			c1.setHorizontalAlignment(Element.ALIGN_CENTER);
	//			table.addCell(c1);
	//			paragraph.add(table);
	//		}
	//
	//	}

	//	public Boolean generateRMAHazardPdfForm(final File files, final File filed)
	//	{
	//		InputStream in;
	//		OutputStream out;
	//		try
	//		{
	//			in = new FileInputStream(filed);
	//			out = new FileOutputStream(files);
	//			doMerge(in, out);
	//		}
	//		catch (final FileNotFoundException e)
	//		{
	//			e.printStackTrace();
	//		}
	//		catch (final IOException e)
	//		{
	//			e.printStackTrace();
	//		}
	//		catch (final DocumentException e)
	//		{
	//			e.printStackTrace();
	//		}
	//
	//		return true;
	//	}


	//	public void doMerge(final InputStream in, final OutputStream outputStream) throws DocumentException, IOException
	//	{
	//		final Document document = new Document();
	//		final PdfWriter writer = PdfWriter.getInstance(document, outputStream);
	//		document.open();
	//		final PdfContentByte cb = writer.getDirectContent();
	//
	//		final PdfReader reader = new PdfReader(in);
	//		for (int i = 1; i <= reader.getNumberOfPages(); i++)
	//		{
	//			document.newPage();
	//			//import the page from source pdf
	//			final PdfImportedPage page = writer.getImportedPage(reader, i);
	//			//add the page to the destination pdf
	//			cb.addTemplate(page, 0, 0);
	//		}
	//		outputStream.flush();
	//		document.close();
	//		outputStream.close();
	//	}

	//	private void addCheckBox(final Paragraph para, final PdfWriter writer, final boolean flag)
	//	{
	//		if (flag)
	//		{
	//			final Font font = new Font(Font.FontFamily.ZAPFDINGBATS, 14);
	//			final Chunk chunk = new Chunk((char) 52, font);
	//			para.add(chunk);
	//		}
	//	}

	@Override
	public BHGEServiceOfferingsModel fetchServicingOfferings(final String offeringCode)
	{

		return bhgeRmaFormDao.fetchServicingOfferings(offeringCode);
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.rma.service.BHGERmaFormService#uploadAdditionalFile(org.springframework.web.multipart.MultipartFile)
	 */
	@Override
	public MediaModel uploadAdditionalFile(final MultipartFile file)
	{
		try
		{
			final MediaModel mediaModel = modelService.create(MediaModel.class);
			final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
			mediaModel.setFolder(mediaFolder);
			String mediaName = null;
			final String contentType = file.getContentType();
			String fileExtension = MediaUtil.getFileExtension(file.getOriginalFilename());
			mediaName = mediaCodeGenerator.generate().toString();
			String shortFileName = StringUtils.substring(file.getOriginalFilename(), 0, Config.getInt("attachmentFleNameLength", 20));
			if(!shortFileName.toLowerCase().endsWith("." + fileExtension.toLowerCase())){
				shortFileName += "." + fileExtension;
			}
			mediaModel.setRealFileName(shortFileName);
			mediaModel.setCode(mediaName);
			final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG,
					"Online");
			mediaModel.setCatalogVersion(versions);
			getModelService().save(mediaModel);
			final MediaModel orderAttachmentFile = uploadFile(file, mediaModel, shortFileName, contentType);
			//return mediaModel;

			/*
			 * final CartModel currentCart = bhgeCartService.getSessionCart(); ; final List<MediaModel> medias = new
			 * ArrayList<MediaModel>(); medias.add(orderAttachmentFile); currentCart.setAttachments(medias);
			 * currentCart.setIsAttachmentMoved(false); getModelService().save(currentCart);
			 */
			return mediaModel;
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading file:" + e);
		}
		return null;
	}

	private MediaModel uploadFile(final MultipartFile file, final MediaModel mediaModel, final String originalFileName,
			final String contentType) throws Exception
	{
		try
		{
			final InputStream inputStream = file.getInputStream();
			mediaService.setStreamForMedia(mediaModel, inputStream, originalFileName, contentType);
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading media" + e);
		}
		return mediaModel;
	}

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.service.BHGERmaFormService#completenessCheck(de.hybris.platform.core.model.order.
	 * AbstractOrderEntryModel)
	 */
	@Override
	public Boolean completenessCheck(final AbstractOrderEntryModel cartEntry)
	{

		final String partNumber = cartEntry.getPartNumber();
		final Long Quantity = cartEntry.getQuantity();
		Boolean completenessCheckFlag = true;
		final Double percentCompletion = 100.0;
		final BHGEHazardousInfoModel hazardInfo = cartEntry.getBhgeHazardousInfo();
		final BHGEAdditionalInfoModel additionalInfo = cartEntry.getBhgeAdditionalInfo();
		double featuresCount = 0;

		if (Objects.isNull(cartEntry.getQuantity()))
		{
			//completenessCheckFlag = false;
			featuresCount++;
		}
		if (Objects.isNull(hazardInfo))
		{
			completenessCheckFlag = false;
			featuresCount++;
		}
		else
		{
			if (hazardInfo.getDeclerationA())
			{
				if (!hazardInfo.getDeclerationB())
				{
					completenessCheckFlag = false;
					featuresCount++;
				}
			}
			else
			{
				if (!hazardInfo.getDeclerationB())
				{
					completenessCheckFlag = false;
					featuresCount++;
				}
			}

		}

		if (Objects.isNull(additionalInfo))
		{
			//completenessCheckFlag = false;
			featuresCount++;
		}
		else if (Objects.isNull(additionalInfo.getIsAccessoryPresent()) && Objects.isNull(additionalInfo.getAccessoriesNotes()))
		{
			//completenessCheckFlag = false;
			featuresCount++;
		}


		if (Objects.isNull(cartEntry.getBhgeServiceOfferings()))
		{
			//completenessCheckFlag = false;
			featuresCount++;
		}
		//		else
		//		{
		//			//					completenessCheckFlag = completenessCheckFlag
		//			//							&& checkServiceOfferingCompleteness((List<BHGEServiceOfferingsModel>) cartEntry.getBhgeServiceOfferings());
		//			featuresCount++;
		//		}
		final double addPortion = 100 / featuresCount;
		/*
		 * percentCompletion += percentCompletion + (addPortion * featuresCount); final double result =
		 * calculatePercentage(percentCompletion, featuresCount);
		 */
		cartEntry.setRmaFormPercentCompletion(addPortion);
		return completenessCheckFlag;
	}

	private double calculatePercentage(final double obtained, final double total)
	{
		return obtained * 100 / total;
	}

	private Boolean checkServiceOfferingCompleteness(final List<BHGEServiceOfferingsModel> offeringModel)
	{
		Boolean serviceOfferingCompletnessflag = true;
		for (final BHGEServiceOfferingsModel offering : offeringModel)
		{

			final String offeringType = offering.getOfferingType().toString();
			if ((offeringType.equalsIgnoreCase(CALIBERATON) || offeringType.equalsIgnoreCase(REPAIR)
					|| offeringType.equalsIgnoreCase(UPGRADE)) && Objects.isNull(offering.getOfferingText())
					&& Objects.isNull(offering.getProblemDescLong()))
			{
				serviceOfferingCompletnessflag = false;
			}
			else if (offeringType.equalsIgnoreCase(RETURN) && Objects.nonNull(offering.getOfferingText())
					&& Objects.isNull(offering.getOfferingText()))
			{

				serviceOfferingCompletnessflag = false;
			}
		}
		return serviceOfferingCompletnessflag;
	}

	/**
	 * remove prefix zero's from the string.
	 *
	 * @param str
	 * @return
	 */
	public String removePrefixZeros(final String str)
	{
		if (StringUtils.isEmpty(str))
		{
			return "";
		}
		int arrayLength = 0;
		final char[] array = str.toCharArray();
		arrayLength = array.length;
		int firstNonZeroAt = 0;
		for (int i = 0; i < array.length; i++)
		{
			if (!String.valueOf(array[i]).equalsIgnoreCase("0"))
			{
				firstNonZeroAt = i;
				break;
			}
		}
		final char[] newArray = Arrays.copyOfRange(array, firstNonZeroAt, arrayLength);
		final String resultString = new String(newArray);
		return resultString;
	}

	//Migration changes start
	/**
	 * Gets Top Banner Image from Blob
	 * @return File
	 */
	private File getHeaderLogo(){
		final String containerName=configurationService.getConfiguration().getString(BLOB_CONTAINER_NAME);
		final String fileNameTobeRead=configurationService.getConfiguration().getString(BLOB_FILE_NAME_TO_BE_READ_LOGO);
		File file=bhgeBlobDataImportService.readFromBlob(fileNameTobeRead,".png",containerName);
		return file;
	}
	//Migration changes end

	@Override
	public MediaModel uploadAdditionalFileWs(final MultipartFile file)
	{
		try
		{
			final MediaModel mediaModel = modelService.create(MediaModel.class);
			final MediaFolderModel mediaFolder = mediaService.getFolder(Config.getString("awss3userdata", "customerdata"));
			mediaModel.setFolder(mediaFolder);
			String mediaName = null;
			final String contentType = file.getContentType();
			String fileExtension = MediaUtil.getFileExtension(file.getOriginalFilename());
			mediaName = mediaCodeGenerator.generate().toString();
			String shortFileName = StringUtils.substring(file.getOriginalFilename(), 0, Config.getInt("attachmentFleNameLength", 20));
			if(shortFileName.contains(",")) {
				shortFileName = shortFileName.replaceAll(",", "-");
			}
			if(!shortFileName.toLowerCase().endsWith("." + fileExtension.toLowerCase())){
				shortFileName += "." + fileExtension;
			}
			mediaModel.setRealFileName(shortFileName);
			mediaModel.setCode(mediaName);
			final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG,
					"Online");
			mediaModel.setCatalogVersion(versions);
			getModelService().save(mediaModel);
			final MediaModel orderAttachmentFile = uploadFile(file, mediaModel, shortFileName, contentType);
			//return mediaModel;

			/*
			 * final CartModel currentCart = bhgeCartService.getSessionCart(); ; final List<MediaModel> medias = new
			 * ArrayList<MediaModel>(); medias.add(orderAttachmentFile); currentCart.setAttachments(medias);
			 * currentCart.setIsAttachmentMoved(false); getModelService().save(currentCart);
			 */
			return mediaModel;
		}
		catch (final Exception e)
		{
			LOG.error("Exception while uploading file:" + e);
		}
		return null;
	}

	public OrderModel getOrderByRMA(final String rmaNumber)
	{
		OrderModel ord=bhgeRmaFormDao.getOrderByRMA(rmaNumber);
		return ord;
	}

	public CartModel getCartById(final String cartId)
	{
		return bhgeRmaFormDao.getCartById(cartId);
	}

	public BHGEServiceOfferingsModel getServiceOfferingByText(final String offeringText)
	{
		return bhgeRmaFormDao.getServiceOfferingByText(offeringText);
	}

	public List<String> addMultiParagraphForPO(final PDPage page, String paragraph, final PDDocument document, final float... paraWidth) throws IOException
	{
		// Create a new font object selecting one of the PDF base fonts
		LOG.info("Inside addMultiParagraphForPO method");
		final PDRectangle mediabox = page.getMediaBox();
		final float width = paraWidth != null && paraWidth.length > 0 ? paraWidth[0] : mediabox.getWidth() - 2 * margin;

		final List<String> lines = new ArrayList<>();
		int lastSpace = -1;
		float size;
		while (paragraph.length() > 0)
		{
			int spaceIndex = paragraph.indexOf(' ', lastSpace + 1);
			if (spaceIndex < 0)
			{
				spaceIndex = paragraph.length();
			}
			String subString = paragraph.substring(0, spaceIndex);
			if(!subString.matches("\\A\\p{ASCII}*\\z"))
			{
				LOG.info("Inside NotoSans Condition");
				//InputStream ttfStream = getClass().getResourceAsStream("/com/mpobjects/jasperreports/fonts/noto/NotoSans-Regular.ttf");
				InputStream ttfStream = getClass().getResourceAsStream("/Noto_Sans_SC/static/NotoSansSC-Regular.ttf");
				PDType0Font font = PDType0Font.load(document, ttfStream);
				size = FONT_SIZE * font.getStringWidth(subString) / 1000;
			}
			else
			{
				LOG.info("Inside NotoSans Else Condition");
				size = FONT_SIZE * TEXT_FONT.getStringWidth(subString) / 1000;
			}
			if (size > width)
			{
				if (lastSpace < 0)
				{
					lastSpace = spaceIndex;
				}
				subString = paragraph.substring(0, lastSpace);
				lines.add(subString);
				paragraph = paragraph.substring(lastSpace).trim();
				lastSpace = -1;
			}
			else if (spaceIndex == paragraph.length())
			{
				lines.add(paragraph);
				paragraph = "";
			}
			else
			{
				lastSpace = spaceIndex;
			}
		}
		return lines;
	}

}


