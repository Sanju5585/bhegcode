/**
 * 
 */
package com.bhge.core.cronjob;

import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.servicelayer.impex.ImportResult;
import de.hybris.platform.servicelayer.impex.ImportService;
import de.hybris.platform.servicelayer.impex.impl.StreamBasedImpExResource;
import de.hybris.platform.servicelayer.model.ModelService;
import de.hybris.platform.util.CSVConstants;
import de.hybris.platform.util.Config;

import java.io.FileInputStream;
import java.text.Normalizer;
import java.text.Normalizer.Form;
import jakarta.annotation.Resource;

import org.apache.commons.lang3.StringEscapeUtils;
import org.apache.log4j.Logger;


/**
 * @author achityal
 * 
 */
public class BHGESampleImpexImportJob extends AbstractJobPerformable {
	private static final Logger LOG = Logger
			.getLogger(BHGESampleImpexImportJob.class);

	@Resource(name = "modelService")
	private ModelService modelService;

	private ImportService importService;

	/*
	 * (non-Javadoc)
	 * 
	 * @see
	 * de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable#perform
	 * (de.hybris.platform.cronjob.model.CronJobModel )
	 */
	@Override
	public PerformResult perform(final CronJobModel arg0) {

/*		try {
			LOG.info("========= Running Sample impex import job ===== : "
					+ arg0.getCode());

			final String folderPath = Normalizer.normalize(System.getProperty(Normalizer.normalize("HYBRIS_CONFIG_DIR",Form.NFD)),Form.NFD)
					+ "/" + Config.getParameter("GESampleDataLoadFolder");

			
			final String sampleDataLoad = Config
					.getParameter("ge.ge.initialDataLoad.sampledata");
			String[] impexFiles = null;
			if (sampleDataLoad != null) {
				impexFiles = sampleDataLoad.split(",");
			}

			for (final String impexFile : impexFiles) {
				final String filePath = impexFile;
				processFile(folderPath + "/" + filePath);

			}

		} catch (final Exception ex) {
			LOG.error("Exception occured in GEEdgeSampleImpexImportJob" + ex);
			return new PerformResult(CronJobResult.ERROR, CronJobStatus.ABORTED);
		}*/
		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}

	private void processFile(final String fileName) throws Exception {
		LOG.info("========= PROCESSING IMPEX FILE  ===== : " + fileName);
		final FileInputStream stream = new FileInputStream(fileName);

		final ImportResult importResult = importService
				.importData(new StreamBasedImpExResource(stream,
						CSVConstants.HYBRIS_ENCODING, Character.valueOf(';')));

		if (importResult.isError()) {
			LOG.info("####################### Impex file processing exception : File : "
					+ fileName);
		}

		/**
		 *  implement logging logic, implement email notification logic,
		 */

	}


	public void setImportService(final ImportService importService) {
		this.importService = importService;
	}

	public ImportService getImportService() {
		return importService;
	}

}
