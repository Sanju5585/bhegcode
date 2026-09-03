
package com.bhge.core.pdf.event;

import de.hybris.platform.util.Config;

import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;

import org.apache.log4j.Logger;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.pdmodel.PDPage;
import org.apache.pdfbox.pdmodel.graphics.image.PDImageXObject;
import org.apache.pdfbox.pdmodel.PDPageContentStream;
import org.apache.pdfbox.pdmodel.common.PDRectangle;
import org.apache.pdfbox.pdmodel.font.PDFont;
import org.apache.pdfbox.pdmodel.font.PDType1Font;
import static com.bhge.core.rma.service.impl.DefaultBHGERmaFormService.TEXT_FONT;
import static com.bhge.core.rma.service.impl.DefaultBHGERmaFormService.FONT_SIZE;
import static com.bhge.core.rma.service.impl.DefaultBHGERmaFormService.TEXT_FONT_BOLD;
import static com.bhge.core.rma.service.impl.DefaultBHGERmaFormService.margin;
import static com.bhge.core.rma.service.impl.DefaultBHGERmaFormService.leading;


/**
 * Pdfbox open source PDF file generation for replacing the itext.
 */
public class HeaderFooterPage {

	private final static Logger LOG = Logger.getLogger(HeaderFooterPage.class);
	// Font configuration
//	public static final PDFont TEXT_FONT = PDType1Font.HELVETICA;
//	public static final PDFont TEXT_FONT_BOLD = PDType1Font.HELVETICA_BOLD;
//	public static final float FONT_SIZE = 12;
//	public static float leading = 1.0f * FONT_SIZE;
//	public static float margin = 60;
//	public static int line = 0;
//
//	//default page size A4 . max size is x: 595 , y: 841
//	public static final PDRectangle PAGE_SIZE = PDRectangle.A4;
//	public static final float MARGIN = 20;
//	public static final boolean IS_LANDSCAPE = false;
//	public static float FONT_HEIGHT = TEXT_FONT.getFontDescriptor().getFontBoundingBox().getHeight()/1000 * FONT_SIZE;
//	public static float YCORDINATE = PDRectangle.A4.getHeight() - margin;
	// Table configuration
	public static final float ROW_HEIGHT = 15;
	public static final float CELL_MARGIN = 2;



	/**
	 * This method is used to add the header logo and text on right hand side on the PDF page.
	 *
	 * @param headerText
	 * @param document
	 * @param page
	 * @param pageContentStream
	 */
	public static void addPageHeaderFooter(String headerText, PDDocument document, PDPage page, PDPageContentStream pageContentStream ) {

		final String headerLogo = Config.getParameter("bhge.hazardous.image.folder.location");
		final String footerLogo = Config.getParameter("bhge.hazardous.image.footer.folder.location");
		try {
			PDImageXObject logoImage = PDImageXObject.createFromFile(headerLogo, document);
			PDRectangle rectangle = page.getMediaBox();
			float startX = rectangle.getUpperRightX() - margin;
			float startY = rectangle.getHeight() - margin;
			float startlY = rectangle.getLowerLeftY();
			float size = FONT_SIZE * TEXT_FONT.getStringWidth(headerText) / 1000;

			float scale = 0.3f; // alter this value to set the image size
			float scaleFooter = 0.2f;
			pageContentStream.drawImage(logoImage, leading, startY+margin/2, logoImage.getWidth() * scale, logoImage.getHeight() * scale);
			pageContentStream.drawImage(logoImage, leading, startlY+margin/2, logoImage.getWidth() * scaleFooter, logoImage.getHeight() * scale);
			//adding header text on RHS
			pageContentStream.beginText();
			pageContentStream.setFont(TEXT_FONT_BOLD, FONT_SIZE);
			pageContentStream.setLeading(leading);
			pageContentStream.newLineAtOffset((startX-(size)), startY + margin/2);
			pageContentStream.showText(headerText);
			pageContentStream.endText();
		}
		catch(IOException io) {
			LOG.error(io);
		}

	}

	//Migration changes- added new method with additional parameter headerlogo
	/**
	 * This method is used to add the header logo and text on right hand side on the PDF page.
	 *
	 * @param headerLogo
	 * @param headerText
	 * @param document
	 * @param page
	 * @param pageContentStream
	 */
	public static void addPageHeaderFooter(File headerLogo, String headerText, PDDocument document, PDPage page, PDPageContentStream pageContentStream ) {

		//final String headerLogo = Config.getParameter("bhge.hazardous.image.folder.location");
		final String footerLogo = Config.getParameter("bhge.hazardous.image.footer.folder.location");
		try {
			//PDImageXObject logoImage = PDImageXObject.createFromFile(headerLogo, document);
			PDImageXObject logoImage = PDImageXObject.createFromFileByExtension(headerLogo, document);
			PDRectangle rectangle = page.getMediaBox();
			float startX = rectangle.getUpperRightX() - margin;
			float startY = rectangle.getHeight() - margin;
			float startlY = rectangle.getLowerLeftY();
			float size = FONT_SIZE * TEXT_FONT.getStringWidth(headerText) / 1000;

			float scale = 0.3f; // alter this value to set the image size
			float scaleFooter = 0.2f;
			pageContentStream.drawImage(logoImage, leading, startY+margin/2, logoImage.getWidth() * scale, logoImage.getHeight() * scale);
			pageContentStream.drawImage(logoImage, leading, startlY+margin/2, logoImage.getWidth() * scaleFooter, logoImage.getHeight() * scale);
			//adding header text on RHS
			pageContentStream.beginText();
			pageContentStream.setFont(TEXT_FONT_BOLD, FONT_SIZE);
			pageContentStream.setLeading(leading);
			pageContentStream.newLineAtOffset((startX-(size)), startY + margin/2);
			pageContentStream.showText(headerText);
			pageContentStream.endText();
		}
		catch(IOException io) {
			LOG.error(io);
		}

	}


//	public void onEndPage(final PdfWriter writer, final Document document)
//	{
//		final String headerLogo = Config.getParameter("bhge.hazardous.image.folder.location");
//		final String footerLogo = Config.getParameter("bhge.hazardous.image.footer.folder.location");
//
//		try
//		{
//			//Header
//			final Image headerImage = Image.getInstance(headerLogo);
//			headerImage.setAlignment(Element.ALIGN_LEFT);
//			headerImage.setAbsolutePosition(20, 790);
//			writer.getDirectContent().addImage(headerImage, true);
//			ColumnText.showTextAligned(writer.getDirectContent(), Element.ALIGN_CENTER, new Phrase("HAZARDOUS INFORMATION FORM"),
//					450, 800, 0);
//
//			//Footer
//			final Image footerImage = Image.getInstance(footerLogo);
//			footerImage.setAlignment(Element.ALIGN_LEFT);
//			footerImage.setAbsolutePosition(0f, 0f);
//			writer.getDirectContent().addImage(footerImage, true);
//			ColumnText.showTextAligned(writer.getDirectContent(), Element.ALIGN_CENTER,
//					new Phrase("page " + document.getPageNumber()), 550, 30, 0);
//		}
//		catch (final BadElementException e)
//		{
//			// XXX Auto-generated catch block
//			e.printStackTrace();
//		}
//		catch (final MalformedURLException e)
//		{
//			// XXX Auto-generated catch block
//			e.printStackTrace();
//		}
//		catch (final IOException e)
//		{
//			// XXX Auto-generated catch block
//			e.printStackTrace();
//		}
//		catch (final Exception e)
//		{
//			e.printStackTrace();
//		}
//	}

}
