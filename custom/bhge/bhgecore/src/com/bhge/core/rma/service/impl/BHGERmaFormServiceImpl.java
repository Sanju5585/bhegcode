/**
 *
 */
package com.bhge.core.rma.service.impl;

import de.hybris.platform.catalog.CatalogVersionService;
import de.hybris.platform.catalog.model.CatalogVersionModel;
import de.hybris.platform.core.model.media.MediaFolderModel;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.core.model.order.AbstractOrderEntryModel;
import de.hybris.platform.core.model.order.AbstractOrderModel;
import de.hybris.platform.core.model.order.CartModel;
import de.hybris.platform.core.model.order.OrderModel;
import de.hybris.platform.servicelayer.keygenerator.KeyGenerator;
import de.hybris.platform.servicelayer.media.MediaService;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.servicelayer.session.SessionService;
import de.hybris.platform.servicelayer.user.UserService;
import de.hybris.platform.util.Config;
import de.hybris.platform.util.MediaUtil;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

import jakarta.annotation.Resource;

import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;

import com.bhge.core.constants.BhgeCoreConstants;
import com.bhge.core.order.service.BHGECartService;
import com.bhge.core.pdf.event.HeaderFooterPageEvent;
import com.bhge.core.pdf.event.HeaderFooterPageEventCheckout;
import com.bhge.core.rma.dao.BHGERmaFormDao;
import com.bhge.core.rma.service.BHGERmaFormService;
import com.bhge.facades.data.SalesAreaData;
import com.bhge.facades.rma.data.BHGEHazardousInfoData;
import com.bhge.facades.rma.data.BHGERmaFormData;
import com.bhge.facades.user.data.BHGESoldToData;
import com.hybris.ge.edge.core.model.type.BHGEAdditionalInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEChemicalDetailsModel;
import com.hybris.ge.edge.core.model.type.BHGEHazardousInfoModel;
import com.hybris.ge.edge.core.model.type.BHGEServiceOfferingsModel;


/**
 * @author 1185137
 *
 */
public class BHGERmaFormServiceImpl implements BHGERmaFormService
{

	/*
	 * (non-Javadoc)
	 *
	 * @see
	 * com.bhge.core.rma.service.BHGERmaFormService#saveRma(de.hybris.platform.core.model.order.AbstractOrderEntryModel)
	 */

	private final static Logger LOG = Logger.getLogger(BHGERmaFormServiceImpl.class);

	private final static String RETURN = "RETURNFORCREDIT";
	private final static String CALIBERATON = "CALIBERATON";
	private final static String UPGRADE = "UPGRADE";
	private final static String REPAIR = "REPAIR";

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

	@Override
	public Boolean saveRma(final CartModel cartModel)
	{
		// YTODO Auto-generated method stub

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

	/*
	 * (non-Javadoc)
	 *
	 * @see com.bhge.core.rma.service.BHGERmaFormService#generateHazardPdf(java.util.List)
	 */
	/*
	 * public Boolean generateHazardPdfs(final BHGERmaData rmaData) {
	 *
	 * for (final BHGERmaFormData rmaFormData : rmaData.getRmaFormData()) { final Document document = new Document(); try {
	 * final int fileNo = atomicInteger.incrementAndGet(); file.add(fileNo); final String fileName = "Hazard-info" + fileNo
	 * + ".pdf"; final PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(FILE + fileName));
	 *
	 * document.open(); addMetaData(document); addContent(document, rmaFormData.getHazardousInfo(),
	 * rmaFormData.getPartNumber(), rmaFormData.getSerialNumber(), writer); document.close(); generateRMAHazardPdfForm(); }
	 * catch (final Exception e) { e.printStackTrace(); return false; } finally { document.close();
	 *
	 * } } return true; }
	 */

	@Override
	public File generateHazardPdf(final AbstractOrderModel cart, final BHGERmaFormData rmaFormData)
	{
		//		Document document = new Document();
		//		final String fileNo = rmaFormData.getCartCode();
		//		final String fileName = "Hazard-info-" + fileNo + ".pdf";
		//		final String finalName = "Hazard-info-" + fileNo + "-final.pdf";
		final File filed = new File(FILE + "fileName");
		//		final File files = new File(FILE + finalName);
		//		try
		//		{
		//			final FileOutputStream fos = new FileOutputStream(filed);
		//			final PdfWriter writer = PdfWriter.getInstance(document, fos);
		//
		//			document.open();
		//			addMetaData(document);
		//			addContents(cart, document, rmaFormData, writer);
		//			document.close();
		//
		//			generateRMAHazardPdfForm(files, filed);
		//		}
		//		catch (final Exception e)
		//		{
		//			LOG.info("Error " + e);
		//			//e.printStackTrace();
		//
		//		}
		//		finally
		//		{
		//			try
		//			{
		//				document.close();
		//			}
		//			catch (final Exception exc)
		//			{
		//				document = null;
		//			}
		//		}
		return filed;
	}

	@Override
	public File generateCheckoutPdf(final AbstractOrderModel cart)
	{
		//		Document document = new Document();
		//		final String fileNo = rmaFormData.getCartCode();
		//		final String fileName = "Checkkout-info-" + fileNo + ".pdf";
		//		final String finalName = "Checkkout-info-" + fileNo + "-final.pdf";
		final File filed = new File(CHECKOUT_FILE + "fileName");
		//		final File files = new File(CHECKOUT_FILE + finalName);
		//		try
		//		{
		//			final FileOutputStream fos = new FileOutputStream(filed);
		//			final PdfWriter writer = PdfWriter.getInstance(document, fos);
		//
		//			document.open();
		//			addMetaDataForCheckout(document);
		//			addContentsForCheckout(cart, document, rmaFormData, writer);
		//			document.close();
		//
		//			generateRMAHazardPdfForm(files, filed);
		//		}
		//		catch (final Exception e)
		//		{
		//			LOG.info("Error " + e);
		//			//e.printStackTrace();
		//
		//		}
		//		finally
		//		{
		//			try
		//			{
		//				document.close();
		//			}
		//			catch (final Exception exc)
		//			{
		//				document = null;
		//			}
		//		}
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
	//		writer.setPageEvent(event);
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

	//	private void addContentsForCheckout(final CartModel cart, final Document document, final BHGERmaFormData rmaFormData,
	//			final PdfWriter writer) throws DocumentException, MalformedURLException, IOException
	//	{
	//		final BHGEHazardousInfoData hazardousInfo = rmaFormData.getHazardousInfo();
	//		final HeaderFooterPageEventCheckout event = new HeaderFooterPageEventCheckout();
	//		writer.setPageEvent(event);
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
	//
	//	public String getSoldTo()
	//	{
	//		final SalesAreaData salesArea = (SalesAreaData) sessionService.getAttribute("defaultSalesAreaData");
	//		if (null != salesArea)
	//		{
	//			return salesArea.getB2bUnitUid();
	//		}
	//		return null;
	//	}
	//
	//	public String getUserName()
	//	{
	//		final BHGESoldToData soldto = ((BHGESoldToData) sessionService.getAttribute("sessionSoldTo"));
	//		if (null != soldto)
	//		{
	//			return (soldto.getUid() + " - " + soldto.getLocName());
	//		}
	//		return null;
	//	}
	//
	//	private String checkForNull(final String s)
	//	{
	//		if (s != null && !s.isEmpty())
	//		{
	//			return s;
	//		}
	//		else
	//		{
	//			return "";
	//		}
	//	}
	//
	//	private String checkFlag(final boolean s)
	//	{
	//		if (s == true)
	//		{
	//			return "True";
	//		}
	//		else
	//		{
	//			return "False";
	//		}
	//	}
	//
	//	private void addEmptyLine(final Paragraph paragraph, final int number)
	//	{
	//		for (int i = 0; i < number; i++)
	//		{
	//			paragraph.add(new Paragraph(" "));
	//		}
	//	}
	//
	//	private HashMap<String, String> prepareHazardInfo(final BHGEHazardousInfoData info)
	//	{
	//		final StringBuilder hazards = new StringBuilder();
	//		final HashMap<String, String> pdfInfo = new HashMap<String, String>();
	//
	//		pdfInfo.put("Contaminated", "YES");
	//		if (info != null)
	//		{
	//			if (info.getContainsFluids() != null && info.getContainsFluids())
	//			{
	//				pdfInfo.put("ContainFluid", "YES");
	//			}
	//			else
	//			{
	//				pdfInfo.put("ContainFluid", "NO");
	//			}
	//			if (info.getDeclarationA() != null && info.getDeclarationA())
	//			{
	//				pdfInfo.put("DeclarationA", "YES");
	//			}
	//			else
	//			{
	//				pdfInfo.put("DeclarationA", "NO");
	//			}
	//			if (info.getDecontaminated() != null && info.getDecontaminated())
	//			{
	//				pdfInfo.put("Decontaminated", "YES");
	//			}
	//			else
	//			{
	//				pdfInfo.put("Decontaminated", "NO");
	//			}
	//
	//			if (info.getHazardType() != null)
	//			{
	//				info.getHazardType().forEach(hazard -> hazards.append(hazard + ","));
	//			}
	//
	//			hazards.deleteCharAt(hazards.length() - 1);
	//			pdfInfo.put("HazardList", hazards.toString());
	//
	//		}
	//
	//		return pdfInfo;
	//
	//	}
	//
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
	//
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
	//
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
	//
	//
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
	//
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
			String fileExtension = MediaUtil.getFileExtension(file.getName());
			if (StringUtils.isBlank(fileExtension))
			{
				fileExtension = MediaUtil.getFileExtension(file.getOriginalFilename());
			}
			mediaName = mediaCodeGenerator.generate().toString();
			mediaModel.setRealFileName(file.getOriginalFilename());
			mediaModel.setCode(mediaName);
			final CatalogVersionModel versions = catalogVersionService.getCatalogVersion(BhgeCoreConstants.CONTENT_CATALOG,
					"Online");
			mediaModel.setCatalogVersion(versions);
			getModelService().save(mediaModel);
			final MediaModel orderAttachmentFile = uploadFile(file, mediaModel, file.getOriginalFilename(), contentType);
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

	/*@Override
	public File generateCheckoutPdfForWs(final AbstractOrderModel cart)
	{
		//		Document document = new Document();
		//		final String fileNo = rmaFormData.getCartCode();
		//		final String fileName = "Checkkout-info-" + fileNo + ".pdf";
		//		final String finalName = "Checkkout-info-" + fileNo + "-final.pdf";
		final File filed = new File(CHECKOUT_FILE + "fileName");
		//		final File files = new File(CHECKOUT_FILE + finalName);
		//		try
		//		{
		//			final FileOutputStream fos = new FileOutputStream(filed);
		//			final PdfWriter writer = PdfWriter.getInstance(document, fos);
		//
		//			document.open();
		//			addMetaDataForCheckout(document);
		//			addContentsForCheckout(cart, document, rmaFormData, writer);
		//			document.close();
		//
		//			generateRMAHazardPdfForm(files, filed);
		//		}
		//		catch (final Exception e)
		//		{
		//			LOG.info("Error " + e);
		//			//e.printStackTrace();
		//
		//		}
		//		finally
		//		{
		//			try
		//			{
		//				document.close();
		//			}
		//			catch (final Exception exc)
		//			{
		//				document = null;
		//			}
		//		}
		return filed;
	}*/
	@Override
	public File generateCheckoutPdfForWs(final AbstractOrderModel cart)
	{
		//		Document document = new Document();
		//		final String fileNo = rmaFormData.getCartCode();
		//		final String fileName = "Checkkout-info-" + fileNo + ".pdf";
		//		final String finalName = "Checkkout-info-" + fileNo + "-final.pdf";
		final File filed = new File(CHECKOUT_FILE + "fileName");
		//		final File files = new File(CHECKOUT_FILE + finalName);
		//		try
		//		{
		//			final FileOutputStream fos = new FileOutputStream(filed);
		//			final PdfWriter writer = PdfWriter.getInstance(document, fos);
		//
		//			document.open();
		//			addMetaDataForCheckout(document);
		//			addContentsForCheckout(cart, document, rmaFormData, writer);
		//			document.close();
		//
		//			generateRMAHazardPdfForm(files, filed);
		//		}
		//		catch (final Exception e)
		//		{
		//			LOG.info("Error " + e);
		//			//e.printStackTrace();
		//
		//		}
		//		finally
		//		{
		//			try
		//			{
		//				document.close();
		//			}
		//			catch (final Exception exc)
		//			{
		//				document = null;
		//			}
		//		}
		return filed;
	}
	
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
			LOG.info("BHGERmaFormServiceImp media internal url "+ mediaModel.getInternalURL());
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
		return bhgeRmaFormDao.getOrderByRMA(rmaNumber);
	}
	
	public CartModel getCartById(final String cartId)
	{
		return bhgeRmaFormDao.getCartById(cartId);
	}
	
	public BHGEServiceOfferingsModel getServiceOfferingByText(final String offeringText)
	{
		return bhgeRmaFormDao.getServiceOfferingByText(offeringText);
	}

}
