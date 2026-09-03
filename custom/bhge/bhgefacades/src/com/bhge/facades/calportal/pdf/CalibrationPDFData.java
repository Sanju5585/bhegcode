/**
 *
 */

package com.bhge.facades.calportal.pdf;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlTransient;

@XmlRootElement(name = "CalibrationData")
public class CalibrationPDFData {

	private String probeSerialNumber;
	private String lastCalibrationDate;
	private String probeModel;
	private String configureProbeModel;
	private String location;
	private String headerLogo;
	private String sensorType;
	private String headerReading;
	private Boolean isPinned;
	private String footerText;
	private String disclaimer;
	
	@XmlTransient
	private CalibrationPDFEntryList entries;
	
	
	@XmlElement
	public CalibrationPDFEntryList getEntries() {
		return entries;
	}

	public void setEntries(CalibrationPDFEntryList entries) {
		this.entries = entries;
	}

	@XmlElement
	public String getProbeSerialNumber() {
		return probeSerialNumber;
	}

	public void setProbeSerialNumber(String probeSerialNumber) {
		this.probeSerialNumber = probeSerialNumber;
	}

	@XmlElement
	public String getLastCalibrationDate() {
		return lastCalibrationDate;
	}

	public void setLastCalibrationDate(String lastCalibrationDate) {
		this.lastCalibrationDate = lastCalibrationDate;
	}

	@XmlElement
	public String getProbeModel() {
		return probeModel;
	}

	public void setProbeModel(String probeModel) {
		this.probeModel = probeModel;
	}

	@XmlElement
	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	@XmlElement
	public String getHeaderLogo() {
		return headerLogo;
	}

	public void setHeaderLogo(String headerLogo) {
		this.headerLogo = headerLogo;
	}
	@XmlElement
	public Boolean getIsPinned() {
		return isPinned;
	}

	public void setIsPinned(Boolean isPinned) {
		this.isPinned = isPinned;
	}
	
	@XmlElement
	public String getSensorType() {
		return sensorType;
	}

	public void setSensorType(String sensorType) {
		this.sensorType = sensorType;
	}
	
	@XmlElement
	public String getHeaderReading() {
		return headerReading;
	}

	public void setHeaderReading(String headerReading) {
		this.headerReading = headerReading;
	}
	
	@XmlElement
	public String getConfigureProbeModel() {
		return configureProbeModel;
	}

	public void setConfigureProbeModel(String configureProbeModel) {
		this.configureProbeModel = configureProbeModel;
	}
	@XmlElement
	public String getFooterText() {
		return footerText;
	}

	public void setFooterText(String footerText) {
		this.footerText = footerText;
	}

	@XmlElement
	public String getDisclaimer() {
		return disclaimer;
	}

	public void setDisclaimer(String disclaimer) {
		this.disclaimer = disclaimer;
	}

}
