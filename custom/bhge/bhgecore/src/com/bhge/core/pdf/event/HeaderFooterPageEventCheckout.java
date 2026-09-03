/**
 *
 */
package com.bhge.core.pdf.event;

import de.hybris.platform.util.Config;


/**
 *
 *
 */
public class HeaderFooterPageEventCheckout
{
//	@Override
	public void onEndPage(final String writer, final String document)
	{
		final String headerLogo = Config.getParameter("bhge.hazardous.image.folder.location");
		final String footerLogo = Config.getParameter("bhge.hazardous.image.footer.folder.location");
//		try
//		{
//			//Header
//			final Image headerImage = Image.getInstance(headerLogo);
//			headerImage.setAlignment(Element.ALIGN_LEFT);
//			headerImage.setAbsolutePosition(20, 790);
//			writer.getDirectContent().addImage(headerImage, true);
//			ColumnText.showTextAligned(writer.getDirectContent(), Element.ALIGN_CENTER, new Phrase("CHECKOUT INFORMATION FORM"), 450,
//					800, 0);
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
	}
}
