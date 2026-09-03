package com.bhge.core.scpi.rfc.zorderhistory;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlElementWrapper;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlProperty;
import com.fasterxml.jackson.dataformat.xml.annotation.JacksonXmlRootElement;
import lombok.ToString;

import java.util.LinkedList;
import java.util.List;

@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
@JsonInclude(JsonInclude.Include.NON_NULL)
@JacksonXmlRootElement(localName ="item")
//@JsonPropertyOrder({"KUNNR"})
public class ZOrderHistoryRequest$Item {

    private List<ZOrderHistoryRequest$Item> items;

    public ZOrderHistoryRequest$Item() {
        this.items = new LinkedList<>();
    }

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<ZOrderHistoryRequest$Item> getItems() {

        return this.items;
    }
    public void setItems(List<ZOrderHistoryRequest$Item> items) {
        this.items = items;
    }
    //CUST_NO
    @JacksonXmlProperty(localName = "KUNNR")
    private String kunnr;

    //MT_SALES_ORDER_DELIVERY
    @JacksonXmlProperty(localName = "ORDER")
    private String order;

    @JacksonXmlProperty(localName = "ORDER_LINE")
    private String order_line;


    //MT_SALES_ORDER_HEADER
    @JacksonXmlProperty(localName = "ERROR")
    private String error;

    @JacksonXmlProperty(localName = "GE_SALES_ORDER")
    private String ge_sales_order;

    @JacksonXmlProperty(localName = "CUSTOMER_PO")
    private String customer_po;

    @JacksonXmlProperty(localName = "DATE_ORDER_PLACED")
    private String date_order_placed;

    @JacksonXmlProperty(localName = "ORDER_UPDATED_DATE")
    private String order_updated_date;

    @JacksonXmlProperty(localName = "PO_DATE")
    private String po_date;

    @JacksonXmlProperty(localName = "SOLD_TO")
    private String sold_to;

    @JacksonXmlProperty(localName = "AUART")
    private String auart;

    @JacksonXmlProperty(localName = "VKORG")
    private String vkorg;

    @JacksonXmlProperty(localName = "VTWEG")
    private String vtweg;

    @JacksonXmlProperty(localName = "SPART")
    private String spart;

    @JacksonXmlProperty(localName = "SHIPPING_METHOD")
    private String shipping_method;

    @JacksonXmlProperty(localName = "REQ_SHIP_DATE")
    private String req_ship_date;

    @JacksonXmlProperty(localName = "SHIPPING_ADDRESS")
    private String shipping_address;

    @JacksonXmlProperty(localName = "NET_PRICE")
    private String net_price;

    @JacksonXmlProperty(localName = "CURRENCY")
    private String currency;

    @JacksonXmlProperty(localName = "ZTERM")
    private String zterm;

    @JacksonXmlProperty(localName = "INCOTERM")
    private String incoterm;

    @JacksonXmlProperty(localName = "SALES_AREA")
    private String sales_area;

    @JacksonXmlProperty(localName = "BLK_ID")
    private String blk_id;

    @JacksonXmlProperty(localName = "BLK_TXT")
    private String blk_txt;

    @JacksonXmlProperty(localName = "ORDER_STAT")
    private String order_stat;

    @JacksonXmlProperty(localName = "AUTH_AMT")
    private String authAmount;

    @JacksonXmlProperty(localName = "AUTH_DATE")
    private String authDate;

    @JacksonXmlProperty(localName = "SETTL_AMT")
    private String settlAmount;

    @JacksonXmlProperty(localName = "SETTL_DATE")
    private String settlDate;

    @JacksonXmlProperty(localName = "SETTL_STAT")
    private String settlStat;

    //MT_SALES_ORDER_ITEM

    @JacksonXmlProperty(localName = "DELIVERY")
    private String delivery;

    @JacksonXmlProperty(localName = "DELIVERY_LINE")
    private String delivery_line;


    @JacksonXmlProperty(localName = "STATUS")
    private String status;

    @JacksonXmlProperty(localName = "CARRIER")
    private String carrier;



    @JacksonXmlProperty(localName = "VBELN")
    private String vbeln;

    @JacksonXmlProperty(localName = "ITEM_NO")
    private String item_no;

    @JacksonXmlProperty(localName = "PROD_H")
    private String prod_h;

    @JacksonXmlProperty(localName = "MAT_NO")
    private String mat_no;

    @JacksonXmlProperty(localName = "MAT_DESC")
    private String mat_desc;

    @JacksonXmlProperty(localName = "QUAN")
    private String quan;

    @JacksonXmlProperty(localName = "SHIP_STATUS")
    private String ship_status;

    @JacksonXmlProperty(localName = "EXP_SHIP_DATE")
    private String exp_ship_date;

    @JacksonXmlProperty(localName = "COURIER")
    private String courier;

    @JacksonXmlProperty(localName = "TRACKING_NO")
    private String tracking_no;

    @JacksonXmlProperty(localName = "SHIPPING_NAME")
    private String shipping_name;

    @JacksonXmlProperty(localName = "SHIPPING_DESTINATION")
    private String shipping_destination;

    @JacksonXmlProperty(localName = "CUSTOMER_INVOICE")
    private String customer_invoice;

    @JacksonXmlProperty(localName = "NOTIFICATION_FLAG")
    private String notification_flag;

//    @JacksonXmlProperty(localName = "NET_PRICE")
//    private String net_price;
//
//    @JacksonXmlProperty(localName = "CURRENCY")
//    private String currency;

    @JacksonXmlProperty(localName = "UOM")
    private String uom;

    @JacksonXmlProperty(localName = "REQ_SHP_DT")
    private String req_shp_dt;

    @JacksonXmlProperty(localName = "GE_PROM_DT")
    private String ge_prom_dt;

    @JacksonXmlProperty(localName = "ACT_SHP_DT")
    private String act_shp_dt;

    @JacksonXmlProperty(localName = "LAST_PROM_DT")
    private String LAST_PROM_DT;

    @JacksonXmlProperty(localName = "OLD_NET_PRICE")
    private String OLD_NET_PRICE;

    @JacksonXmlProperty(localName = "NOTIF_PROM_DT")
    private String NOTIF_PROM_DT;

    @JacksonXmlProperty(localName = "OLD_AUTH_AMT")
    private String OLD_AUTH_AMT;

    @JacksonXmlProperty(localName = "OLD_AUTH_DATE")
    private String OLD_AUTH_DATE;

    @JacksonXmlProperty(localName = "NOTIF_AUTH_AMT")
    private String NOTIF_AUTH_AMT;

    @JacksonXmlProperty(localName = "PLAN_SETTL_DATE")
    private String PLAN_SETTL_DATE;

    @JacksonXmlProperty(localName = "NOTIF_NET_PRICE")
    private String NOTIF_NET_PRICE;

    @JacksonXmlProperty(localName = "ZZMATCFG")
    private String zzmatcfg;

    public String getZzmatcfg() {
        return zzmatcfg;
    }

    public void setZzmatcfg(String zzmatcfg) {
        this.zzmatcfg = zzmatcfg;
    }

    public String getKunnr() {
        return kunnr;
    }

    public void setKunnr(String kunnr) {
        this.kunnr = kunnr;
    }

    public String getDelivery() {
        return delivery;
    }

    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }

    public String getDelivery_line() {
        return delivery_line;
    }

    public void setDelivery_line(String delivery_line) {
        this.delivery_line = delivery_line;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCarrier() {
        return carrier;
    }

    public void setCarrier(String carrier) {
        this.carrier = carrier;
    }

    public String getVbeln() {
        return vbeln;
    }

    public void setVbeln(String vbeln) {
        this.vbeln = vbeln;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getGe_sales_order() {
        return ge_sales_order;
    }

    public void setGe_sales_order(String ge_sales_order) {
        this.ge_sales_order = ge_sales_order;
    }

    public String getCustomer_po() {
        return customer_po;
    }

    public void setCustomer_po(String customer_po) {
        this.customer_po = customer_po;
    }

    public String getDate_order_placed() {
        return date_order_placed;
    }

    public void setDate_order_placed(String date_order_placed) {
        this.date_order_placed = date_order_placed;
    }

    public String getOrder_updated_date() {
        return order_updated_date;
    }

    public void setOrder_updated_date(String order_updated_date) {
        this.order_updated_date = order_updated_date;
    }

    public String getPo_date() {
        return po_date;
    }

    public void setPo_date(String po_date) {
        this.po_date = po_date;
    }

    public String getSold_to() {
        return sold_to;
    }

    public void setSold_to(String sold_to) {
        this.sold_to = sold_to;
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

    public String getItem_no() {
        return item_no;
    }

    public void setItem_no(String item_no) {
        this.item_no = item_no;
    }

    public String getProd_h() {
        return prod_h;
    }

    public void setProd_h(String prod_h) {
        this.prod_h = prod_h;
    }

    public String getMat_no() {
        return mat_no;
    }

    public void setMat_no(String mat_no) {
        this.mat_no = mat_no;
    }

    public String getMat_desc() {
        return mat_desc;
    }

    public void setMat_desc(String mat_desc) {
        this.mat_desc = mat_desc;
    }

    public String getQuan() {
        return quan;
    }

    public void setQuan(String quan) {
        this.quan = quan;
    }

    public String getShip_status() {
        return ship_status;
    }

    public void setShip_status(String ship_status) {
        this.ship_status = ship_status;
    }

    public String getExp_ship_date() {
        return exp_ship_date;
    }

    public void setExp_ship_date(String exp_ship_date) {
        this.exp_ship_date = exp_ship_date;
    }

    public String getCourier() {
        return courier;
    }

    public void setCourier(String courier) {
        this.courier = courier;
    }

    public String getTracking_no() {
        return tracking_no;
    }

    public void setTracking_no(String tracking_no) {
        this.tracking_no = tracking_no;
    }

    public String getShipping_name() {
        return shipping_name;
    }

    public void setShipping_name(String shipping_name) {
        this.shipping_name = shipping_name;
    }

    public String getShipping_destination() {
        return shipping_destination;
    }

    public void setShipping_destination(String shipping_destination) {
        this.shipping_destination = shipping_destination;
    }

    public String getCustomer_invoice() {
        return customer_invoice;
    }

    public void setCustomer_invoice(String customer_invoice) {
        this.customer_invoice = customer_invoice;
    }

    public String getNotification_flag() {
        return notification_flag;
    }

    public void setNotification_flag(String notification_flag) {
        this.notification_flag = notification_flag;
    }

    public String getNet_price() {
        return net_price;
    }

    public void setNet_price(String net_price) {
        this.net_price = net_price;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getUom() {
        return uom;
    }

    public void setUom(String uom) {
        this.uom = uom;
    }

    public String getReq_shp_dt() {
        return req_shp_dt;
    }

    public void setReq_shp_dt(String req_shp_dt) {
        this.req_shp_dt = req_shp_dt;
    }

    public String getGe_prom_dt() {
        return ge_prom_dt;
    }

    public void setGe_prom_dt(String ge_prom_dt) {
        this.ge_prom_dt = ge_prom_dt;
    }

    public String getAct_shp_dt() {
        return act_shp_dt;
    }

    public void setAct_shp_dt(String act_shp_dt) {
        this.act_shp_dt = act_shp_dt;
    }

    public String getSpart() {
        return spart;
    }

    public void setSpart(String spart) {
        this.spart = spart;
    }

    public String getShipping_method() {
        return shipping_method;
    }

    public void setShipping_method(String shipping_method) {
        this.shipping_method = shipping_method;
    }

    public String getReq_ship_date() {
        return req_ship_date;
    }

    public void setReq_ship_date(String req_ship_date) {
        this.req_ship_date = req_ship_date;
    }

    public String getShipping_address() {
        return shipping_address;
    }

    public void setShipping_address(String shipping_address) {
        this.shipping_address = shipping_address;
    }

    public String getZterm() {
        return zterm;
    }

    public void setZterm(String zterm) {
        this.zterm = zterm;
    }

    public String getIncoterm() {
        return incoterm;
    }

    public void setIncoterm(String incoterm) {
        this.incoterm = incoterm;
    }

    public String getSales_area() {
        return sales_area;
    }

    public void setSales_area(String sales_area) {
        this.sales_area = sales_area;
    }

    public String getBlk_id() {
        return blk_id;
    }

    public void setBlk_id(String blk_id) {
        this.blk_id = blk_id;
    }

    public String getBlk_txt() {
        return blk_txt;
    }

    public void setBlk_txt(String blk_txt) {
        this.blk_txt = blk_txt;
    }

    public String getOrder_stat() {
        return order_stat;
    }

    public void setOrder_stat(String order_stat) {
        this.order_stat = order_stat;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public String getOrder_line() {
        return order_line;
    }

    public void setOrder_line(String order_line) {
        this.order_line = order_line;
    }

    public String getAuthAmount() {
        return authAmount;
    }

    public void setAuthAmount(String authAmount) {
        this.authAmount = authAmount;
    }

    public String getAuthDate() {
        return authDate;
    }

    public void setAuthDate(String authDate) {
        this.authDate = authDate;
    }

    public String getSettlAmount() {
        return settlAmount;
    }

    public void setSettlAmount(String settlAmount) {
        this.settlAmount = settlAmount;
    }

    public String getSettlDate() {
        return settlDate;
    }

    public void setSettlDate(String settlDate) {
        this.settlDate = settlDate;
    }

    public String getSettlStat() {
        return settlStat;
    }

    public void setSettlStat(String settlStat) {
        this.settlStat = settlStat;
    }

    public String getLAST_PROM_DT() {
        return LAST_PROM_DT;
    }

    public void setLAST_PROM_DT(String LAST_PROM_DT) {
        this.LAST_PROM_DT = LAST_PROM_DT;
    }

    public String getOLD_NET_PRICE() {
        return OLD_NET_PRICE;
    }

    public void setOLD_NET_PRICE(String OLD_NET_PRICE) {
        this.OLD_NET_PRICE = OLD_NET_PRICE;
    }

    public String getNOTIF_PROM_DT() {
        return NOTIF_PROM_DT;
    }

    public void setNOTIF_PROM_DT(String NOTIF_PROM_DT) {
        this.NOTIF_PROM_DT = NOTIF_PROM_DT;
    }

    public String getOLD_AUTH_AMT() {
        return OLD_AUTH_AMT;
    }

    public void setOLD_AUTH_AMT(String OLD_AUTH_AMT) {
        this.OLD_AUTH_AMT = OLD_AUTH_AMT;
    }

    public String getOLD_AUTH_DATE() {
        return OLD_AUTH_DATE;
    }

    public void setOLD_AUTH_DATE(String OLD_AUTH_DATE) {
        this.OLD_AUTH_DATE = OLD_AUTH_DATE;
    }

    public String getNOTIF_AUTH_AMT() {
        return NOTIF_AUTH_AMT;
    }

    public void setNOTIF_AUTH_AMT(String NOTIF_AUTH_AMT) {
        this.NOTIF_AUTH_AMT = NOTIF_AUTH_AMT;
    }

    public String getPLAN_SETTL_DATE() {
        return PLAN_SETTL_DATE;
    }

    public void setPLAN_SETTL_DATE(String PLAN_SETTL_DATE) {
        this.PLAN_SETTL_DATE = PLAN_SETTL_DATE;
    }

    public String getNOTIF_NET_PRICE() {
        return NOTIF_NET_PRICE;
    }

    public void setNOTIF_NET_PRICE(String NOTIF_NET_PRICE) {
        this.NOTIF_NET_PRICE = NOTIF_NET_PRICE;
    }
}