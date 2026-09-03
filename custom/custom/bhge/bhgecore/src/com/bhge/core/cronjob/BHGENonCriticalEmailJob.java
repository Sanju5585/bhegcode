package com.bhge.core.cronjob;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jakarta.annotation.Resource;

import org.apache.commons.lang3.exception.ExceptionUtils;
import org.apache.log4j.Logger;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.springframework.beans.factory.annotation.Autowired;

import com.bhge.core.mailmessages.services.BHGEEmailService;
import com.bhge.core.model.BHGERfcCallErrorModel;
import com.bhge.core.order.service.BHGEB2BOrderService;
import de.hybris.platform.commons.model.renderer.RendererTemplateModel;
import de.hybris.platform.commons.renderer.RendererService;
import de.hybris.platform.cronjob.enums.CronJobResult;
import de.hybris.platform.cronjob.enums.CronJobStatus;
import de.hybris.platform.cronjob.model.CronJobModel;
import de.hybris.platform.servicelayer.cronjob.AbstractJobPerformable;
import de.hybris.platform.servicelayer.cronjob.PerformResult;
import de.hybris.platform.util.Config;

public class BHGENonCriticalEmailJob extends AbstractJobPerformable {

	private static final Logger LOG = Logger
			.getLogger(BHGENonCriticalEmailJob.class);

	@Resource(name = "b2bOrderService")
	private BHGEB2BOrderService bhgeB2BOrderService;

	@Resource(name = "bhgeEmailService")
	private BHGEEmailService bhgeEmailService;

	@Resource(name = "rendererService")
	private RendererService rendererService;

	@Override
	public PerformResult perform(CronJobModel cronJob) {

		List<BHGERfcCallErrorModel> bhgeErrorModelLst = null;
		List<BHGENonCrticalErrorVO> newBhgeErrorModelLst = new ArrayList<>();

		bhgeErrorModelLst = bhgeB2BOrderService
				.getNonCriticalErrorModelLst();

		if (bhgeErrorModelLst != null && !bhgeErrorModelLst.isEmpty()) {

			Map<Integer, Object[]> data = new LinkedHashMap<Integer, Object[]>();
			data.put(
					1,
					new String[] { Config.getParameter("ERROR_DATE"),
							Config.getParameter("ERROR_TIME"),
							Config.getParameter("ERROR_CATEGORY"),
							Config.getParameter("ERROR_MESSAGE"),
							Config.getParameter("USER_EMAIL_ADDRESS"),
							Config.getParameter("USER_SOLD_TO") });

			int i = 2;
			for (BHGERfcCallErrorModel model : bhgeErrorModelLst) {

				DateFormat df1 = new SimpleDateFormat("dd-MMM-yy hh:mm a");
				Date date = model.getCreationtime();
				String reportDate = df1.format(date);
				String dateParts[] = reportDate.split(" ");
				String errordate = dateParts[0];
				String errorTime = dateParts[1] + " " + dateParts[2];

				BHGENonCrticalErrorVO bhgeNonCrticalErrorVO = new BHGENonCrticalErrorVO();
				bhgeNonCrticalErrorVO.setErrorDate(errordate);
				bhgeNonCrticalErrorVO.setErrorTime(errorTime);
				bhgeNonCrticalErrorVO.setErrorCategory(model.getErrorCode());
				bhgeNonCrticalErrorVO
						.setErrorMsg(model.getErrorDescription());
				bhgeNonCrticalErrorVO.setUserEmail(model
						.getCurrentUserEmail());
				bhgeNonCrticalErrorVO.setSoldToId(model.getCurrentSoldToId());

				data.put(
						i,
						new String[] { errordate, errorTime,
								model.getErrorCode(),
								model.getErrorDescription(),
								model.getCurrentUserEmail(),
								model.getCurrentSoldToId() });
				newBhgeErrorModelLst.add(bhgeNonCrticalErrorVO);
				i++;
			}

			Boolean maxExcelRecordsflag = Boolean.TRUE;

			if (newBhgeErrorModelLst.size() > 65356) {
				maxExcelRecordsflag = Boolean.FALSE;
			}

			HSSFWorkbook workbook = new HSSFWorkbook();

			if (maxExcelRecordsflag) {
				HSSFSheet sheet = workbook.createSheet(Config
						.getParameter("PERIODIC_ERROR_SHEET"));
				HSSFFont font = workbook.createFont();
				font.setBold(true);
				HSSFCellStyle style = workbook.createCellStyle();
				style.setFont(font);

				Set<Integer> keyset = data.keySet();
				int rownum = 0;
				for (Integer key : keyset) {

					Row row = sheet.createRow(rownum++);
					Object[] objArr = data.get(key);
					int cellnum = 0;
					for (Object obj : objArr) {
						Cell cell = row.createCell(cellnum++);
						if (key == 1) {
							cell.setCellStyle(style);
						}
						if (obj instanceof Date) {
							cell.setCellValue((Date) obj);
						}else if (obj instanceof Boolean) {
							cell.setCellValue((Boolean) obj);
						}else if (obj instanceof String) {
							cell.setCellValue((String) obj);
						}else if (obj instanceof Double) {
							cell.setCellValue((Double) obj);
						}
					}

				}
			} else {
				HSSFSheet sheet = workbook.createSheet(Config
						.getParameter("PERIODIC_ERROR_SHEET"));
				HSSFFont font = workbook.createFont();
				font.setBold(true);
				HSSFCellStyle style = workbook.createCellStyle();
				style.setFont(font);

				Set<Integer> keyset = data.keySet();
				int rownum = 0;
				for (Integer key : keyset) {

					Row row = sheet.createRow(rownum++);
					Object[] objArr = data.get(key);
					int cellnum = 0;
					for (Object obj : objArr) {
						Cell cell = row.createCell(cellnum++);
						if (key == 1) {
							cell.setCellStyle(style);
						}
						if (obj instanceof Date) {
							cell.setCellValue((Date) obj);
						} else if (obj instanceof Boolean) {
							cell.setCellValue((Boolean) obj);
						} else if (obj instanceof String) {
							cell.setCellValue((String) obj);
					    } else if (obj instanceof Double) {
							cell.setCellValue((Double) obj);
					    }
					}
					if (rownum == 65356) {

						HSSFSheet newSheet = workbook.createSheet(Config
								.getParameter("PERIODIC_ERROR_SHEET")
								+ "Second");
						HSSFFont newFont = workbook.createFont();
						newFont.setBold(true);
						HSSFCellStyle newStyle = workbook.createCellStyle();
						newStyle.setFont(newFont);

						ArrayList<Integer> newKeyset = new ArrayList<Integer>();
						for (Integer var = rownum; var <= data.size(); var++) {
							newKeyset.add(var);
						}
						int newRownum = rownum;
						for (Integer newKey : newKeyset) {

							Row newRow = newSheet.createRow(newRownum++);
							Object[] newObjArr = data.get(newKey);
							int newCellnum = 0;
							for (Object obj : newObjArr) {
								Cell cell = newRow.createCell(newCellnum++);
								if (key == 1) {
									cell.setCellStyle(style);
								}
								if (obj instanceof Date) {
									cell.setCellValue((Date) obj);
								} else if (obj instanceof Boolean) {
									cell.setCellValue((Boolean) obj);
								} else if (obj instanceof String) {
									cell.setCellValue((String) obj);
								} else if (obj instanceof Double) {
									cell.setCellValue((Double) obj);
							    }
							}

						}
						break;
					}
				}
			}

			for (BHGERfcCallErrorModel model : bhgeErrorModelLst) {

				model.setStatus(Boolean.TRUE);
				modelService.save(model);
			}

			FileOutputStream out = null;
			try {
				out = new FileOutputStream(new File("BHGEErrorDetails.xls"));
				workbook.write(out);

				File bhgeErrorDetails = new File("BHGEErrorDetails.xls");
				// SENDING EMAIL FOR NON CRITICAL ERROR
				final String templateCodeNonCriticalError = "NoNCriticalErrorMailTemplate";
				final String subject = Config
						.getParameter("PERIODIC_ERROR_SUBJECT");
				final String to = Config
						.getParameter("PERIODIC_ERROR_TO_ADDRESS");

				RendererTemplateModel templateModel = rendererService
						.getRendererTemplateForCode(templateCodeNonCriticalError);
				bhgeEmailService.orderSubmissionNonCriticalErrorEmail(
						templateModel, subject, to, bhgeErrorDetails,
						newBhgeErrorModelLst);

			} catch (FileNotFoundException e) {
				LOG.error("FileNotFoundException In GEEdgeNonCriticalEmailJob class" + ExceptionUtils.getStackTrace(e));
			} catch (IOException e) {
				LOG.error("IOException In GEEdgeNonCriticalEmailJob class" + ExceptionUtils.getStackTrace(e));
			} finally {
				if (out != null) {
					try {
						out.close();
					} catch (final IOException e) {
						LOG.error("IOException Occured" + e);
					}
				}
			}
		} else {
			LOG.info("Non Critical Error List is Empty");
		}

		return new PerformResult(CronJobResult.SUCCESS, CronJobStatus.FINISHED);
	}


	public BHGEB2BOrderService getBhgeB2BOrderService() {
		return bhgeB2BOrderService;
	}

	public void setBhgeB2BOrderService(
			BHGEB2BOrderService bhgeB2BOrderService) {
		this.bhgeB2BOrderService = bhgeB2BOrderService;
	}

	public BHGEEmailService getBhgeEmailService() {
		return bhgeEmailService;
	}

	public void setBhgeEmailService(BHGEEmailService bhgeEmailService) {
		this.bhgeEmailService = bhgeEmailService;
	}

	public RendererService getRendererService() {
		return rendererService;
	}

	public void setRendererService(RendererService rendererService) {
		this.rendererService = rendererService;
	}
}