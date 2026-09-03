package com.bh.occ.util;

import java.awt.Graphics;


import java.awt.Image;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.StandardOpenOption;
import java.util.HashMap;
import java.util.Iterator;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;

import org.apache.commons.imaging.ImageInfo;
import org.apache.commons.imaging.ImageParser;
import org.apache.commons.imaging.Imaging;
import org.apache.commons.imaging.formats.bmp.BmpImageParser;
import org.apache.commons.imaging.formats.dcx.DcxImageParser;
import org.apache.commons.imaging.formats.gif.GifImageParser;
import org.apache.commons.imaging.formats.pcx.PcxImageParser;
import org.apache.commons.imaging.formats.png.PngImageParser;
import org.apache.commons.imaging.formats.tiff.TiffImageParser;
import org.apache.commons.imaging.formats.wbmp.WbmpImageParser;
import org.apache.commons.imaging.formats.xbm.XbmImageParser;
import org.apache.commons.imaging.formats.xpm.XpmImageParser;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.apache.log4j.Logger;
import org.springframework.web.multipart.MultipartFile;

import com.itextpdf.text.pdf.PdfArray;
import com.itextpdf.text.pdf.PdfDictionary;
import com.itextpdf.text.pdf.PdfName;
import com.itextpdf.text.pdf.PdfReader;


/**
 * @author 212695810 Sanitizers .pdf and image files and returns false if file is not proper
 *
 */
public class FileSanitizerUtil
{
	private static final Logger LOG = Logger.getLogger(FileSanitizerUtil.class);

	/**
	 * Checks for incorrect pdf and media file
	 *
	 * @param filetoUpload
	 * @return
	 */
	public static boolean isFileSanitized(final MultipartFile filetoUpload)
	{
		LOG.info("****************************Inside isFileSanitized method *****************************");
		boolean returnValue = false;
		File fileToCheck;
		try
		{
			fileToCheck = File.createTempFile(filetoUpload.getOriginalFilename(),
					FilenameUtils.getExtension(filetoUpload.getOriginalFilename()));
			FileUtils.writeByteArrayToFile(fileToCheck, filetoUpload.getBytes());
			final boolean isImageFileSafe = checkForImageFile(fileToCheck);
			LOG.info("isImageFileSafe return value " + isImageFileSafe);
			final boolean isPDFFileSafe = checkForPDFFile(fileToCheck);
			LOG.info("isPDFFileSafe return value " + isPDFFileSafe);
			fileToCheck.delete();
			if (isImageFileSafe || isPDFFileSafe)
			{
				returnValue = true;
			}
		}
		catch (final IOException e)
		{
			LOG.error("File creation issue from MultiPart file " + e);
		}
		return returnValue;
	}


	private static boolean checkForImageFile(final File f)
	{
		boolean safeState = false;
		boolean fallbackOnApacheCommonsImaging;
		try
		{
			if ((f != null) && f.exists() && f.canRead() && f.canWrite())
			{
				//Get the image format
				String formatName;
				try (ImageInputStream iis = ImageIO.createImageInputStream(f))
				{
					final Iterator<ImageReader> imageReaderIterator = ImageIO.getImageReaders(iis);
					//If there not ImageReader instance found so it's means that the current
					// format is not supported by the Java built-in API
					if (!imageReaderIterator.hasNext())
					{
						final ImageInfo imageInfo = Imaging.getImageInfo(f);
						if (imageInfo != null && imageInfo.getFormat() != null && imageInfo.getFormat().getName() != null)
						{
							formatName = imageInfo.getFormat().getName();
							fallbackOnApacheCommonsImaging = true;
						}
						else
						{
							throw new IOException("Format of the original image is " + "not supported for read operation !");
						}
					}
					else
					{
						final ImageReader reader = imageReaderIterator.next();
						formatName = reader.getFormatName();
						fallbackOnApacheCommonsImaging = false;
					}
				}

				// Load the image
				BufferedImage originalImage;
				if (!fallbackOnApacheCommonsImaging)
				{
					originalImage = ImageIO.read(f);
				}
				else
				{
					originalImage = Imaging.getBufferedImage(f);
				}

				// Check that image has been successfully loaded
				if (originalImage == null)
				{
					throw new IOException("Cannot load the original image !");
				}

				// Get current Width and Height of the image
				final int originalWidth = originalImage.getWidth(null);
				final int originalHeight = originalImage.getHeight(null);


				// Resize the image by removing 1px on Width and Height
				final Image resizedImage = originalImage.getScaledInstance(originalWidth - 1, originalHeight - 1, Image.SCALE_SMOOTH);

				// Resize the resized image by adding 1px on Width and Height
				// In fact set image to is initial size
				final Image initialSizedImage = resizedImage.getScaledInstance(originalWidth, originalHeight, Image.SCALE_SMOOTH);

				// Save image by overwriting the provided source file content
				final BufferedImage sanitizedImage = new BufferedImage(initialSizedImage.getWidth(null),
						initialSizedImage.getHeight(null), BufferedImage.TYPE_INT_RGB);
				final Graphics bg = sanitizedImage.getGraphics();
				bg.drawImage(initialSizedImage, 0, 0, null);
				bg.dispose();
				try (OutputStream fos = Files.newOutputStream(f.toPath(), StandardOpenOption.WRITE))
				{
					if (!fallbackOnApacheCommonsImaging)
					{
						ImageIO.write(sanitizedImage, formatName, fos);
					}
					else
					{
						ImageParser imageParser;
						//Handle only formats for which Apache Commons Imaging can successfully write
						// (YES in Write column of the reference link) the image format
						//See reference link in the class header
						switch (formatName)
						{
							case "TIFF":
							{
								imageParser = new TiffImageParser();
								break;
							}
							case "PCX":
							{
								imageParser = new PcxImageParser();
								break;
							}
							case "DCX":
							{
								imageParser = new DcxImageParser();
								break;
							}
							case "BMP":
							{
								imageParser = new BmpImageParser();
								break;
							}
							case "GIF":
							{
								imageParser = new GifImageParser();
								break;
							}
							case "PNG":
							{
								imageParser = new PngImageParser();
								break;
							}
							case "WBMP":
							{
								imageParser = new WbmpImageParser();
								break;
							}
							case "XBM":
							{
								imageParser = new XbmImageParser();
								break;
							}
							case "XPM":
							{
								imageParser = new XpmImageParser();
								break;
							}
							default:
							{
								throw new IOException("Format of the original image is not" + " supported for write operation !");
							}

						}
						imageParser.writeImage(sanitizedImage, fos, new HashMap<>());
					}

				}

				// Set state flag
				safeState = true;
			}
		}
		catch (final Exception e)
		{
			safeState = false;
			LOG.warn("Error during Image file processing !", e);
		}

		return safeState;
	}

	private static boolean checkForPDFFile(final File f)
	{
		boolean returnValue = false;
		try
		{
			if ((f != null) && f.exists())
			{
				// Load stream in PDF parser
				// If the stream is not a PDF then exception will be throwed
				// here and safe state will be set to FALSE
				final PdfReader reader = new PdfReader(f.getAbsolutePath());
				// Check 1:
				// Detect if the document contains any JavaScript code
				final String jsCode = reader.getJavaScript();
				if (jsCode == null)
				{
					// OK no JS code then when pass to check 2:
					// Detect if the document has any embedded files
					final PdfDictionary root = reader.getCatalog();
					final PdfDictionary names = root.getAsDict(PdfName.NAMES);
					PdfArray namesArray = null;
					if (names != null)
					{
						final PdfDictionary embeddedFiles = names.getAsDict(PdfName.EMBEDDEDFILES);
						namesArray = embeddedFiles.getAsArray(PdfName.NAMES);
					}
					// Get safe state from number of embedded files
					returnValue = ((namesArray == null) || namesArray.isEmpty());
				}
			}
		}
		catch (final Exception e)
		{
			LOG.error("PDF file is not sanitized " + e);
		}
		return returnValue;
	}
}
