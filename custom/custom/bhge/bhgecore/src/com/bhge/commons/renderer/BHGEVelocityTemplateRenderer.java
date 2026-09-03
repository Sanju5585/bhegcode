/**
 * 
 */
package com.bhge.commons.renderer;

import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.exceptions.RendererException;
import de.hybris.platform.commons.renderer.impl.VelocityTemplateRenderer;
import de.hybris.platform.core.model.media.MediaModel;
import de.hybris.platform.servicelayer.media.MediaService;

import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.Writer;
import java.util.Locale;

import org.apache.commons.io.IOUtils;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;


public class BHGEVelocityTemplateRenderer {
	private MediaService mediaService;
	private String contextName;

	public void render(final RendererTemplateModel template,
			final Object context, final Writer output, Locale locale) {
		Class<?> clazz = null;

		try {
			clazz = Class.forName(template.getContextClass());
		} catch (final ClassNotFoundException e) {
			throw new RendererException("Cannot find class: "
					+ template.getContextClass(), e);
		}

		InputStream inputStream = null;
		try {
			if ((context != null)
					&& (!clazz.isAssignableFrom(context.getClass()))) {
				throw new RendererException("The context class ["
						+ context.getClass().getName()
						+ "] is not correctly defined.");
			}
			final MediaModel content = template.getContent(locale);
			if (content == null) {
				throw new RendererException("No content found for template "
						+ template.getCode());
			}

			inputStream = mediaService.getStreamFromMedia(content);

			writeToOutput(output, inputStream, context);
		} catch (final IOException e) {
			throw new RendererException("Problem during rendering", e);
		} finally {
			IOUtils.closeQuietly(inputStream);
		}
	}

	private void writeToOutput(final Writer result,
			final InputStream inputStream, final Object context)
			throws IOException {
		final VelocityContext ctx = new VelocityContext();
		ctx.put(contextName, context);

		final Reader reader = new InputStreamReader(inputStream, "UTF-8");

		try {
			evaluate(result, ctx, reader);
			result.flush();
		} catch (final Exception e) {
			throw new RendererException("Problem with get velocity stream", e);
		} finally {
			IOUtils.closeQuietly(reader);
		}
	}

	protected void evaluate(final Writer result, final VelocityContext ctx,
			final Reader reader) throws IOException {
		Velocity.setProperty("input.encoding", "UTF-8");
		Velocity.setProperty("output.encoding", "UTF-8");
		Velocity.evaluate(ctx, result, getClass().getName(), reader);
	}

	/**
	 * @param mediaService
	 *            the mediaService to set
	 */
	
	public void setMediaService(final MediaService mediaService) {
		this.mediaService = mediaService;
	}

	/**
	 * @param contextName
	 *            the contextName to set
	 */
	
	public void setContextName(final String contextName) {
		this.contextName = contextName;
	}

}
