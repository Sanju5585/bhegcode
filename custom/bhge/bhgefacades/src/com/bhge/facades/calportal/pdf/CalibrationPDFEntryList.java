package com.bhge.facades.calportal.pdf;

import java.util.List;

import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlTransient;


import com.bhge.core.data.CalibrationPDFEntry;

public class CalibrationPDFEntryList {
	
	@XmlTransient
	private List<CalibrationPDFEntry> entries;
	
	@XmlElement
	public List<CalibrationPDFEntry> getEntries() {
		return entries;
	}

	public void setEntries(List<CalibrationPDFEntry> entries) {
		this.entries = entries;
	}

}
