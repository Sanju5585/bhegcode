/**
 * 
 */
package com.bhge.core.scpi.rfc.priceAndAvailabilty;

/**
 * @author 212722447
 *
 */

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;

@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName = "item")
public class BHGEZPriceandAvailablityRequestItem 
{
	
	@JacksonXmlProperty(localName = "PRSDT")
	private String prsdt;	
	@JacksonXmlProperty(localName = "AUART")
	private String auart;
	@JacksonXmlProperty(localName = "VKORG")
	private String vkorg;
	@JacksonXmlProperty(localName = "VTWEG")
	private String vtweg;
	@JacksonXmlProperty(localName = "SPART")
	private String spart;
    @JacksonXmlProperty(localName = "CALLER_DATA")
	private BHGEZPriceandAvailablityRequestItem callerData;
	@JacksonXmlProperty(localName = "VBELN")
	private String vbeln;
	@JacksonXmlProperty(localName = "POSNR")
	private String posnr;
	@JacksonXmlProperty(localName = "ZZMATCFG")
	private String zzmatcfg;
	@JacksonXmlProperty(localName = "KUNNR")
	private String kunnr;
	@JacksonXmlProperty(localName = "SPRAS")
	private String spras;
	@JacksonXmlProperty(localName = "KPOSN")
	private String kposn;
	@JacksonXmlProperty(localName = "MATNR")
	private String material;
	@JacksonXmlProperty(localName = "MGAME")
	private String mgame;
	@JacksonXmlProperty(localName = "VRKME")
	private String vrkme;
	@JacksonXmlProperty(localName = "VARCOND")
	private String varCond;
	@JacksonXmlProperty(localName = "AVBT_CHECK")
	private String avbtCheck;
	@JacksonXmlProperty(localName = "PROD_CAT_FLAG")
	private String prodCatFlag;
	@JacksonXmlProperty(localName = "WERKS_LIST")
	private String werksList;
	@JacksonXmlProperty(localName = "STEP_DESCR")
	private String stepDescr;
	@JacksonXmlProperty(localName = "KALSM")
	private String kalsm;
	@JacksonXmlProperty(localName = "WAERK")
	private String waerk;
    @JacksonXmlProperty(localName = "NAME")
    private String name;
	@JacksonXmlProperty(localName = "PRSOK")
	private String prsok;
	@JacksonXmlProperty(localName = "PSTYV")
	private String pstyv;
	@JacksonXmlProperty(localName = "WERKS")
	private BHGEZPriceandAvailablityRequestItem werks;
	//private String werks;
	@JacksonXmlProperty(localName = "KPEIN")
	private String kpein;
	@JacksonXmlProperty(localName = "KMEIN")
	private String kmein;
	@JacksonXmlProperty(localName = "GEWEI")
	private String gewei;
	@JacksonXmlProperty(localName = "VOLEH")
	private String voleh;
	@JacksonXmlProperty(localName = "SCALEDET_STATUS")
	private String scaleDetStatus;
	@JacksonXmlProperty(localName = "NETPR")
	private String netpr;
	@JacksonXmlProperty(localName = "NETWR")
	private String netwr;
	@JacksonXmlProperty(localName = "BRTWR")
	private String brtwr;
	@JacksonXmlProperty(localName = "MWSBP")
	private String mwsbp;
	@JacksonXmlProperty(localName = "KZWI1")
	private String kzwt1;
	@JacksonXmlProperty(localName = "KZWI2")
	private String kzwt2;
	@JacksonXmlProperty(localName = "KZWI3")
	private String kzwt3;
	@JacksonXmlProperty(localName = "KZWI4")
	private String kzwt4;
	@JacksonXmlProperty(localName = "KZWI5")
	private String kzwt5;
	@JacksonXmlProperty(localName = "KZWI6")
	private String kzwt6;
	@JacksonXmlProperty(localName = "BONBA")
	private String bonba;
	@JacksonXmlProperty(localName = "PREVA")
	private String preva;
	@JacksonXmlProperty(localName = "CMPRE")
	private String cmpre;
	@JacksonXmlProperty(localName = "WAVWR")
	private String wavwr;
	@JacksonXmlProperty(localName = "BRGEW")
	private String brgew;
	@JacksonXmlProperty(localName = "NTGEW")
	private String ntgew;
	@JacksonXmlProperty(localName = "VOLUM")
	private String volum;
	@JacksonXmlProperty(localName = "STUNR")
	private String stunr;
	@JacksonXmlProperty(localName = "ZAEHK")
	private String zaehk;
	@JacksonXmlProperty(localName = "KSCHL")
	private String kschl;
	@JacksonXmlProperty(localName = "WAERS")
	private String waers;
	@JacksonXmlProperty(localName = "KRECH")
	private String krech;
	@JacksonXmlProperty(localName = "KINAK")
	private String kinak;
	@JacksonXmlProperty(localName = "ITEM")
	private BHGEZPriceandAvailablityRequestItem item;
	@JacksonXmlProperty(localName = "COND")
	private BHGEZPriceandAvailablityRequestItem cond;
	@JacksonXmlProperty(localName = "LAND1")
	private String land1;
	@JacksonXmlProperty(localName = "REGIO")
	private String regio;
	@JacksonXmlProperty(localName = "CONFIG_ID")
	private String configId;
	@JacksonXmlProperty(localName = "CHARC")
	private String charc;
	@JacksonXmlProperty(localName = "VALUE")
	private String value;
	@JacksonXmlProperty(localName = "CURRENCY")
	private String currency;
	@JacksonXmlProperty(localName = "CONDVALUE")
	private String condValue;
	@JacksonXmlProperty(localName = "VCTEXT")
	private String vcText;
	@JacksonXmlProperty(localName = "VCITEM")
	private String vcItem;
	@JacksonXmlProperty(localName = "QTY")
	private String quantity;
	@JacksonXmlProperty(localName = "COM_DATE")
	private String comDate;
	@JacksonXmlProperty(localName = "COM_QTY")
	private String comQty;
	@JacksonXmlProperty(localName = "PLANT")
	private String plant;
	@JacksonXmlProperty(localName = "TYPE")
	private String type;
	@JacksonXmlProperty(localName = "CODE")
	private String code;
	@JacksonXmlProperty(localName = "MESSAGE")
	private String message;
	@JacksonXmlProperty(localName = "LOG_NO")
	private String logNo;
	@JacksonXmlProperty(localName = "LOG_MSG_NO")
	private String logMsgNo;
	@JacksonXmlProperty(localName = "REQ_DATE")
	private String reqDate;
	@JacksonXmlProperty(localName = "REQ_QTY")
	private String reqQty;
	@JacksonXmlProperty(localName = "DELKZ")
	private String delkz;
	@JacksonXmlProperty(localName = "YLINE")
	private String yline;
	@JacksonXmlProperty(localName = "PARVW")
	private String parvw;
	@JacksonXmlProperty(localName = "DEFAULT")
	private String defaultPlant;

	@JacksonXmlProperty(localName = "AUTHOR")
	private String author;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}
	

	/**
	 * @return the defaultPlant
	 */
	public String getDefaultPlant()
	{
		return defaultPlant;
	}


	/**
	 * @param defaultPlant the defaultPlant to set
	 */
	public void setDefaultPlant(String defaultPlant)
	{
		this.defaultPlant = defaultPlant;
	}


	public String getComDate()
	{
		return comDate;
	}


	public void setComDate(String comDate)
	{
		this.comDate = comDate;
	}

	public String getComQty()
	{
		return comQty;
	}


	public void setComQty(String comQty)
	{
		this.comQty = comQty;
	}

	/**
	 * @return the quantity
	 */
	public String getQuantity()
	{
		return quantity;
	}

	/**
	 * @param quantity the quantity to set
	 */
	public void setQuantity(String quantity)
	{
		this.quantity = quantity;
	}

	/**
	 * @return the vcItem
	 */
	public String getVcItem()
	{
		return vcItem;
	}

	/**
	 * @param vcItem the vcItem to set
	 */
	public void setVcItem(String vcItem)
	{
		this.vcItem = vcItem;
	}

	/**
	 * @return the currency
	 */
	public String getCurrency()
	{
		return currency;
	}

	/**
	 * @param currency the currency to set
	 */
	public void setCurrency(String currency)
	{
		this.currency = currency;
	}

	/**
	 * @return the condValue
	 */
	public String getCondValue()
	{
		return condValue;
	}

	/**
	 * @param condValue the condValue to set
	 */
	public void setCondValue(String condValue)
	{
		this.condValue = condValue;
	}

	/**
	 * @return the vcText
	 */
	public String getVcText()
	{
		return vcText;
	}

	/**
	 * @param vcText the vcText to set
	 */
	public void setVcText(String vcText)
	{
		this.vcText = vcText;
	}

	/**
	 * @return the configId
	 */
	public String getConfigId()
	{
		return configId;
	}

	/**
	 * @param configId the configId to set
	 */
	public void setConfigId(String configId)
	{
		this.configId = configId;
	}

	/**
	 * @return the charc
	 */
	public String getCharc()
	{
		return charc;
	}

	/**
	 * @param charc the charc to set
	 */
	public void setCharc(String charc)
	{
		this.charc = charc;
	}

	/**
	 * @return the value
	 */
	public String getValue()
	{
		return value;
	}

	/**
	 * @param value the value to set
	 */
	public void setValue(String value)
	{
		this.value = value;
	}

	public String getRegio()
	{
		return regio;
	}

	/**
	 * @param regio the regio to set
	 */
	public void setRegio(String regio)
	{
		this.regio = regio;
	}

	
	
	
	 public BHGEZPriceandAvailablityRequestItem getCond() {
	     return cond; 
	}

	/**
	 * @return the land1
	 */
	public String getLand1()
	{
		return land1;
	}

	/**
	 * @param land1 the land1 to set
	 */
	public void setLand1(String land1)
	{
		this.land1 = land1;
	}

	public void setCond(BHGEZPriceandAvailablityRequestItem cond) {
		this.cond = cond;
	}

	private List<BHGEZPriceandAvailablityRequestItem> items;
	  
	  @JacksonXmlProperty(localName = "item")	  
	  @JacksonXmlElementWrapper(useWrapping = false) 
	  public List<BHGEZPriceandAvailablityRequestItem> getItems() 
	  { 
		 this.items = items == null ? new ArrayList<BHGEZPriceandAvailablityRequestItem>() : items; 
	     return items; 
	  }
	  
	  public BHGEZPriceandAvailablityRequestItem getItem() {
		     return item; 
	}

	public void setItem(BHGEZPriceandAvailablityRequestItem item) {
		this.item = item;
	}

	public void setItems(final List<BHGEZPriceandAvailablityRequestItem> items) 
	  {
	     this.items = items; 
	  }
	  
	  
	public String getVbeln() {
		return vbeln;
	}

	public void setVbeln(String vbeln) {
		this.vbeln = vbeln;
	}

	public String getKunnr() {
		return kunnr;
	}

	public void setKunnr(String kunnr) {
		this.kunnr = kunnr;
	}

	public String getSpras() {
		return spras;
	}

	public void setSpras(String spras) {
		this.spras = spras;
	}

	public String getKposn() {
		return kposn;
	}

	public void setKposn(String kposn) {
		this.kposn = kposn;
	}

	public String getMaterial() {
		return material;
	}

	public void setMaterial(String material) {
		this.material = material;
	}

	public String getMgame() {
		return mgame;
	}

	public void setMgame(String mgame) {
		this.mgame = mgame;
	}

	public String getVrkme() {
		return vrkme;
	}

	public void setVrkme(String vrkme) {
		this.vrkme = vrkme;
	}

	public String getVarCond() {
		return varCond;
	}

	public void setVarCond(String varCond) {
		this.varCond = varCond;
	}

	public String getAvbtCheck() {
		return avbtCheck;
	}

	public void setAvbtCheck(String avbtCheck) {
		this.avbtCheck = avbtCheck;
	}

	public String getProdCatFlag() {
		return prodCatFlag;
	}

	public void setProdCatFlag(String prodCatFlag) {
		this.prodCatFlag = prodCatFlag;
	}

	public String getWerksList() {
		return werksList;
	}

	public void setWerksList(String werksList) {
		this.werksList = werksList;
	}

	public String getStepDescr() {
		return stepDescr;
	}

	public void setStepDescr(String stepDescr) {
		this.stepDescr = stepDescr;
	}

	
	public String getKalsm() {
		return kalsm;
	}

	public void setKalsm(String kalsm) {
		this.kalsm = kalsm;
	}

	public String getWaerk() {
		return waerk;
	}

	public void setWaerk(String waerk) {
		this.waerk = waerk;
	}

	public String getPrsok() {
		return prsok;
	}

	public void setPrsok(String prsok) {
		this.prsok = prsok;
	}

	public String getPstyv() {
		return pstyv;
	}

	public void setPstyv(String pstyv) {
		this.pstyv = pstyv;
	}

	public BHGEZPriceandAvailablityRequestItem getWerks() {
		return werks;
	}

	public void setWerks(BHGEZPriceandAvailablityRequestItem werks) {
		this.werks = werks;
	}

	public String getKpein() {
		return kpein;
	}

	public void setKpein(String kpein) {
		this.kpein = kpein;
	}

	public String getKmein() {
		return kmein;
	}

	public void setKmein(String kmein) {
		this.kmein = kmein;
	}

	public String getGewei() {
		return gewei;
	}

	public void setGewei(String gewei) {
		this.gewei = gewei;
	}

	public String getVoleh() {
		return voleh;
	}

	public void setVoleh(String voleh) {
		this.voleh = voleh;
	}

	public String getScaleDetStatus() {
		return scaleDetStatus;
	}

	public void setScaleDetStatus(String scaleDetStatus) {
		this.scaleDetStatus = scaleDetStatus;
	}

	public String getNetpr() {
		return netpr;
	}

	public void setNetpr(String netpr) {
		this.netpr = netpr;
	}

	public String getNetwr() {
		return netwr;
	}

	public void setNetwr(String netwr) {
		this.netwr = netwr;
	}

	public String getBrtwr() {
		return brtwr;
	}

	public void setBrtwr(String brtwr) {
		this.brtwr = brtwr;
	}

	public String getMwsbp() {
		return mwsbp;
	}

	public void setMwsbp(String mwsbp) {
		this.mwsbp = mwsbp;
	}

	public String getKzwt1() {
		return kzwt1;
	}

	public void setKzwt1(String kzwt1) {
		this.kzwt1 = kzwt1;
	}

	public String getKzwt2() {
		return kzwt2;
	}

	public void setKzwt2(String kzwt2) {
		this.kzwt2 = kzwt2;
	}

	public String getKzwt3() {
		return kzwt3;
	}

	public void setKzwt3(String kzwt3) {
		this.kzwt3 = kzwt3;
	}

	public String getKzwt4() {
		return kzwt4;
	}

	public void setKzwt4(String kzwt4) {
		this.kzwt4 = kzwt4;
	}

	public String getKzwt5() {
		return kzwt5;
	}

	public void setKzwt5(String kzwt5) {
		this.kzwt5 = kzwt5;
	}

	public String getKzwt6() {
		return kzwt6;
	}

	public void setKzwt6(String kzwt6) {
		this.kzwt6 = kzwt6;
	}

	public String getBonba() {
		return bonba;
	}

	public void setBonba(String bonba) {
		this.bonba = bonba;
	}

	public String getPreva() {
		return preva;
	}

	public void setPreva(String preva) {
		this.preva = preva;
	}

	public String getCmpre() {
		return cmpre;
	}

	public void setCmpre(String cmpre) {
		this.cmpre = cmpre;
	}

	public String getWavwr() {
		return wavwr;
	}

	public void setWavwr(String wavwr) {
		this.wavwr = wavwr;
	}

	public String getBrgew() {
		return brgew;
	}

	public void setBrgew(String brgew) {
		this.brgew = brgew;
	}

	public String getNtgew() {
		return ntgew;
	}

	public void setNtgew(String ntgew) {
		this.ntgew = ntgew;
	}

	public String getVolum() {
		return volum;
	}

	public void setVolum(String volum) {
		this.volum = volum;
	}

	public String getStunr() {
		return stunr;
	}

	public void setStunr(String stunr) {
		this.stunr = stunr;
	}

	public String getZaehk() {
		return zaehk;
	}

	public void setZaehk(String zaehk) {
		this.zaehk = zaehk;
	}

	public String getKschl() {
		return kschl;
	}

	public void setKschl(String kschl) {
		this.kschl = kschl;
	}

	public String getWaers() {
		return waers;
	}

	public void setWaers(String waers) {
		this.waers = waers;
	}

	public String getKrech() {
		return krech;
	}

	public void setKrech(String krech) {
		this.krech = krech;
	}

	public String getKinak() {
		return kinak;
	}

	public void setKinak(String kinak) {
		this.kinak = kinak;
	}

	public String getKbetr() {
		return kbetr;
	}

	public void setKbetr(String kbetr) {
		this.kbetr = kbetr;
	}

	public String getDummyPrcsResultMultiItemE() {
		return dummyPrcsResultMultiItemE;
	}

	public void setDummyPrcsResultMultiItemE(String dummyPrcsResultMultiItemE) {
		this.dummyPrcsResultMultiItemE = dummyPrcsResultMultiItemE;
	}

	public String getPlant() {
		return plant;
	}

	public void setPlant(String plant) {
		this.plant = plant;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getLogNo() {
		return logNo;
	}

	public void setLogNo(String logNo) {
		this.logNo = logNo;
	}

	public String getLogMsgNo() {
		return logMsgNo;
	}

	public void setLogMsgNo(String logMsgNo) {
		this.logMsgNo = logMsgNo;
	}

	public String getReqDate() {
		return reqDate;
	}

	public void setReqDate(String reqDate) {
		this.reqDate = reqDate;
	}

	public String getReqQty() {
		return reqQty;
	}

	public void setReqQty(String reqQty) {
		this.reqQty = reqQty;
	}

	public String getDelkz() {
		return delkz;
	}

	public void setDelkz(String delkz) {
		this.delkz = delkz;
	}

	public String getYline() {
		return yline;
	}

	public void setYline(String yline) {
		this.yline = yline;
	}

	@JacksonXmlProperty(localName = "KBETR")
	private String kbetr;
	@JacksonXmlProperty(localName = "KWERT")
	private String kwert;
	@JacksonXmlProperty(localName = "DUMMY_PRCS_RESULT_MULTI_ITEM_E")
	private String dummyPrcsResultMultiItemE;
	public String getKwert() {
		return kwert;
	}

	public void setKwert(String kwert) {
		this.kwert = kwert;
	}

	public String getParvw()
	{
		return parvw;
	}

	public void setParvw(String parvw)
	{
		this.parvw = parvw;
	}
	public String getPrsdt() {
		return prsdt;
	}
	public void setPrsdt(String prsdt) {
		this.prsdt = prsdt;
	}
	public String getAuart() {
		return auart;
	}
	public void setAuart(String auart) {
		this.auart = auart;
	}
	public String getVkorg() {
		return vkorg;
	}
	public void setVkorg(String vkorg) {
		this.vkorg = vkorg;
	}
	public String getVtweg() {
		return vtweg;
	}
	public void setVtweg(String vtweg) {
		this.vtweg = vtweg;
	}
	public String getSpart() {
		return spart;
	}
	public void setSpart(String spart) {
		this.spart = spart;
	}
	public BHGEZPriceandAvailablityRequestItem getCallerData() {
		return callerData;
	}
	public void setCallerData(BHGEZPriceandAvailablityRequestItem callerData) {
		this.callerData = callerData;
	}

	public String getPosnr() {
		return posnr;
	}

	public void setPosnr(String posnr) {
		this.posnr = posnr;
	}

	public String getZzmatcfg() {
		return zzmatcfg;
	}

	public void setZzmatcfg(String zzmatcfg) {
		this.zzmatcfg = zzmatcfg;
	}
}
