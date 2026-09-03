package com.bhge.facades.wygate.pdf;

import jakarta.xml.bind.annotation.XmlRootElement;
import jakarta.xml.bind.annotation.XmlSeeAlso;
import jakarta.xml.bind.annotation.XmlTransient;

import com.bhge.facades.data.DSWygateBatchLookupData;
import com.bhge.facades.data.DSWygateFilmData;

@XmlRootElement(name = "DSWygateFilmData")
@XmlSeeAlso(
{ DSWygateFilmData.class })
public class FilmConfirmityPdf {
	
	private String currentDate;
	@XmlTransient
	private DSWygateBatchLookupData type;
	private String batch;
	private String expiry;
	
	private String cper;
	
	private String sper;
	
	private String control;		//test date
	
	public DSWygateBatchLookupData getType() {
		return type;
	}
	public void setType(DSWygateBatchLookupData type) {
		this.type = type;
	}
	public String getCper() {
		return cper;
	}
	public void setCper(String cper) {
		this.cper = cper;
	}
	public String getSper() {
		return sper;
	}
	public void setSper(String sper) {
		this.sper = sper;
	}
	public String getControl() {
		return control;
	}
	public void setControl(String control) {
		this.control = control;
	}
	public DSWygateBatchLookupData getKv120() {
		return kv120;
	}
	public void setKv120(DSWygateBatchLookupData kv120) {
		this.kv120 = kv120;
	}
	public DSWygateBatchLookupData getIsoSpeed() {
		return isoSpeed;
	}
	public void setIsoSpeed(DSWygateBatchLookupData isoSpeed) {
		this.isoSpeed = isoSpeed;
	}
	public DSWygateBatchLookupData getAvgContrast() {
		return avgContrast;
	}
	public void setAvgContrast(DSWygateBatchLookupData avgContrast) {
		this.avgContrast = avgContrast;
	}
	public DSWygateBatchLookupData getIr192() {
		return ir192;
	}
	public void setIr192(DSWygateBatchLookupData ir192) {
		this.ir192 = ir192;
	}
	@XmlTransient
	private DSWygateBatchLookupData classe;
	
	@XmlTransient
	private DSWygateBatchLookupData g2;
	
	@XmlTransient
	private DSWygateBatchLookupData g4;
	
	@XmlTransient
	private DSWygateBatchLookupData sigmaD2;
	
	@XmlTransient
	private DSWygateBatchLookupData gSigmaD;
	
	@XmlTransient
	private DSWygateBatchLookupData kamGy;
	
	@XmlTransient
	private DSWygateBatchLookupData kv120;
	
	@XmlTransient
	private DSWygateBatchLookupData isoSpeed;
	
	@XmlTransient
	private DSWygateBatchLookupData avgContrast;
	
	@XmlTransient
	private DSWygateBatchLookupData ir192;
	
	
	
	
	public DSWygateBatchLookupData getKamGy() {
		return kamGy;
	}
	public void setKamGy(DSWygateBatchLookupData kamGy) {
		this.kamGy = kamGy;
	}
	public DSWygateBatchLookupData getG4() {
		return g4;
	}
	public void setG4(DSWygateBatchLookupData g4) {
		this.g4 = g4;
	}
	public DSWygateBatchLookupData getSigmaD2() {
		return sigmaD2;
	}
	public void setSigmaD2(DSWygateBatchLookupData sigmaD2) {
		this.sigmaD2 = sigmaD2;
	}
	public DSWygateBatchLookupData getgSigmaD() {
		return gSigmaD;
	}
	public void setgSigmaD(DSWygateBatchLookupData gSigmaD) {
		this.gSigmaD = gSigmaD;
	}
	public DSWygateBatchLookupData getG2() {
		return g2;
	}
	public void setG2(DSWygateBatchLookupData g2) {
		this.g2 = g2;
	}
	public DSWygateBatchLookupData getClasse() {
		return classe;
	}
	public void setClasse(DSWygateBatchLookupData classe) {
		this.classe = classe;
	}
	public String getCurrentDate() {
		return currentDate;
	}
	public void setCurrentDate(String currentDate) {
		this.currentDate = currentDate;
	}
	public DSWygateBatchLookupData getLookupData() {
		return type;
	}
	public void setLookupData(DSWygateBatchLookupData type) {
		this.type = type;
	}
	public String getBatch() {
		return batch;
	}
	public void setBatch(String batch) {
		this.batch = batch;
	}
	public String getExpiry() {
		return expiry;
	}
	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}
	
}
