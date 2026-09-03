package com.bhge.core.scpi.rfc.zrmastatus;

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
@JacksonXmlRootElement(localName = "item")
public class ZRmaStatusRequest$Item {

    private List<ZRmaStatusRequest$Item> items;

    public ZRmaStatusRequest$Item() {
        this.items = new LinkedList<>();
    }

    @JacksonXmlProperty(localName = "item")
    @JacksonXmlElementWrapper(useWrapping = false)
    public List<ZRmaStatusRequest$Item> getItems() {

        return this.items;
    }

    public void setItems(List<ZRmaStatusRequest$Item> items) {
        this.items = items;
    }

    // CUST_NO
    @JacksonXmlProperty(localName = "KUNNR")
    private String kunnr;

    // MT_SALES_ORDER_DELIVERY
    @JacksonXmlProperty(localName = "ORDER")
    private String order;

    @JacksonXmlProperty(localName = "ORDER_LINE")
    private String order_line;

    // MT_SALES_ORDER_HEADER
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

    @JacksonXmlProperty(localName = "REQ_DATE")
    private String req_date;

    @JacksonXmlProperty(localName = "COMMENTS")
    private String comments;

    @JacksonXmlProperty(localName = "LIST_PRICE")
    private String list_price;

    @JacksonXmlProperty(localName = "DISCOUNT")
    private String discount;

    @JacksonXmlProperty(localName = "DISC_PERCENT")
    private String disc_percent;

    @JacksonXmlProperty(localName = "CREATED_BY")
    private String created_by;

    @JacksonXmlProperty(localName = "CUST_ADDRESS")
    private String cust_address;

    @JacksonXmlProperty(localName = "CURRENCY")
    private String currency;

    @JacksonXmlProperty(localName = "SALES_ORDER")
    private String sales_order;

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

    // MT_SALES_ORDER_ITEM

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

    @JacksonXmlProperty(localName = "UOM")
    private String uom;

    @JacksonXmlProperty(localName = "REQ_SHP_DT")
    private String req_shp_dt;

    @JacksonXmlProperty(localName = "GE_PROM_DT")
    private String ge_prom_dt;

    @JacksonXmlProperty(localName = "ACT_SHP_DT")
    private String act_shp_dt;

    @JacksonXmlProperty(localName = "RMA_NUM")
    private String rma_num;

    @JacksonXmlProperty(localName = "PO_NUM")
    private String po_num;

    @JacksonXmlProperty(localName = "RMA_STATUS")
    private String rms_status;

    @JacksonXmlProperty(localName = "RETURN_SITE")
    private String return_site;

    @JacksonXmlProperty(localName = "CUSTOMER_ACCOUNT")
    private String customer_account;

    @JacksonXmlProperty(localName = "NAME1")
    private String name1;

    @JacksonXmlProperty(localName = "ENDUSER")
    private String endUser;

    @JacksonXmlProperty(localName = "LAST_UPDATED_DATE")
    private String last_updated_DATE;

    @JacksonXmlProperty(localName = "INCOTERMS")
    private String incoterms;

    @JacksonXmlProperty(localName = "RMA_CREATED_DATE")
    private String rma_created_date;

    @JacksonXmlProperty(localName = "OUTBOUND_DEL_NR")
    private String outbound_del_nr;

    @JacksonXmlProperty(localName = "LINE_NO")
    private String line_no;

    @JacksonXmlProperty(localName = "PART_NUM")
    private String part_num;

    @JacksonXmlProperty(localName = "PART_DESCR")
    private String part_descr;

    @JacksonXmlProperty(localName = "SHIP_TO")
    private String ship_to;

    @JacksonXmlProperty(localName = "PROM_SHIP_DT")
    private String prom_ship_dt;

    @JacksonXmlProperty(localName = "ACTUAL_SHIP_DT")
    private String actual_ship_dt;

    @JacksonXmlProperty(localName = "SERVICE_OFF")
    private String service_off;

    @JacksonXmlProperty(localName = "SERIAL_NUM")
    private String serial_num;

    @JacksonXmlProperty(localName = "PRODUCT_HIERARCHY")
    private String product_heirarchy;

    @JacksonXmlProperty(localName = "REPAIR_REASON")
    private String repair_reason;

    @JacksonXmlProperty(localName = "MNF_YEAR")
    private String mnf_year;

    @JacksonXmlProperty(localName = "ACCESSORIES_LIST")
    private String accessories_list;

    @JacksonXmlProperty(localName = "SERVICE_NOTES")
    private String service_notes;

    @JacksonXmlProperty(localName = "WARRANTY_CLAIM_INFO")
    private String warranty_claim_info;

    @JacksonXmlProperty(localName = "CUST_NUM")
    private String cust_num;

    @JacksonXmlProperty(localName = "TYPE")
    private String type;

    @JacksonXmlProperty(localName = "ID")
    private String id;

    @JacksonXmlProperty(localName = "NUMBER")
    private String number;

    @JacksonXmlProperty(localName = "MESSAGE")
    private String message;

    @JacksonXmlProperty(localName = "LOG_NO")
    private String log_no;

    @JacksonXmlProperty(localName = "LOG_MSG_NO")
    private String log_msg_no;

    @JacksonXmlProperty(localName = "MESSAGE_V1")
    private String message_v1;

    @JacksonXmlProperty(localName = "MESSAGE_V2")
    private String message_v2;

    @JacksonXmlProperty(localName = "MESSAGE_V3")
    private String message_v3;

    @JacksonXmlProperty(localName = "MESSAGE_V4")
    private String message_v4;

    @JacksonXmlProperty(localName = "PARAMETER")
    private String parameter;

    @JacksonXmlProperty(localName = "ROW")
    private String row;

    @JacksonXmlProperty(localName = "FIELD")
    private String field;

    @JacksonXmlProperty(localName = "SYSTEM")
    private String system;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getLog_no() {
        return log_no;
    }

    public void setLog_no(String log_no) {
        this.log_no = log_no;
    }

    public String getLog_msg_no() {
        return log_msg_no;
    }

    public void setLog_msg_no(String log_msg_no) {
        this.log_msg_no = log_msg_no;
    }

    public String getMessage_v1() {
        return message_v1;
    }

    public void setMessage_v1(String message_v1) {
        this.message_v1 = message_v1;
    }

    public String getMessage_v2() {
        return message_v2;
    }

    public void setMessage_v2(String message_v2) {
        this.message_v2 = message_v2;
    }

    public String getMessage_v3() {
        return message_v3;
    }

    public void setMessage_v3(String message_v3) {
        this.message_v3 = message_v3;
    }

    public String getMessage_v4() {
        return message_v4;
    }

    public void setMessage_v4(String message_v4) {
        this.message_v4 = message_v4;
    }

    public String getParameter() {
        return parameter;
    }

    public void setParameter(String parameter) {
        this.parameter = parameter;
    }

    public String getRow() {
        return row;
    }

    public void setRow(String row) {
        this.row = row;
    }

    public String getField() {
        return field;
    }

    public void setField(String field) {
        this.field = field;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public String getCust_num() {
        return cust_num;
    }

    public void setCust_num(String cust_num) {
        this.cust_num = cust_num;
    }

    public String getRma_num() {
        return rma_num;
    }

    public void setRma_num(String rma_num) {
        this.rma_num = rma_num;
    }

    public String getPo_num() {
        return po_num;
    }

    public void setPo_num(String po_num) {
        this.po_num = po_num;
    }

    public String getRms_status() {
        return rms_status;
    }

    public void setRms_status(String rms_status) {
        this.rms_status = rms_status;
    }

    public String getReturn_site() {
        return return_site;
    }

    public void setReturn_site(String return_site) {
        this.return_site = return_site;
    }

    public String getCustomer_account() {
        return customer_account;
    }

    public void setCustomer_account(String customer_account) {
        this.customer_account = customer_account;
    }

    public String getName1() {
        return name1;
    }

    public void setName1(String name1) {
        this.name1 = name1;
    }

    public String getEndUser() {
        return endUser;
    }

    public void setEndUser(String endUser) {
        this.endUser = endUser;
    }

    public String getLast_updated_DATE() {
        return last_updated_DATE;
    }

    public void setLast_updated_DATE(String last_updated_DATE) {
        this.last_updated_DATE = last_updated_DATE;
    }

    public String getIncoterms() {
        return incoterms;
    }

    public void setIncoterms(String incoterms) {
        this.incoterms = incoterms;
    }

    public String getRma_created_date() {
        return rma_created_date;
    }

    public void setRma_created_date(String rma_created_date) {
        this.rma_created_date = rma_created_date;
    }

    public String getOutbound_del_nr() {
        return outbound_del_nr;
    }

    public void setOutbound_del_nr(String outbound_del_nr) {
        this.outbound_del_nr = outbound_del_nr;
    }

    public String getLine_no() {
        return line_no;
    }

    public void setLine_no(String line_no) {
        this.line_no = line_no;
    }

    public String getPart_num() {
        return part_num;
    }

    public void setPart_num(String part_num) {
        this.part_num = part_num;
    }

    public String getPart_descr() {
        return part_descr;
    }

    public void setPart_descr(String part_descr) {
        this.part_descr = part_descr;
    }

    public String getShip_to() {
        return ship_to;
    }

    public void setShip_to(String ship_to) {
        this.ship_to = ship_to;
    }

    public String getProm_ship_dt() {
        return prom_ship_dt;
    }

    public void setProm_ship_dt(String prom_ship_dt) {
        this.prom_ship_dt = prom_ship_dt;
    }

    public String getActual_ship_dt() {
        return actual_ship_dt;
    }

    public void setActual_ship_dt(String actual_ship_dt) {
        this.actual_ship_dt = actual_ship_dt;
    }

    public String getService_off() {
        return service_off;
    }

    public void setService_off(String service_off) {
        this.service_off = service_off;
    }

    public String getSerial_num() {
        return serial_num;
    }

    public void setSerial_num(String serial_num) {
        this.serial_num = serial_num;
    }

    public String getProduct_heirarchy() {
        return product_heirarchy;
    }

    public void setProduct_heirarchy(String product_heirarchy) {
        this.product_heirarchy = product_heirarchy;
    }

    public String getRepair_reason() {
        return repair_reason;
    }

    public void setRepair_reason(String repair_reason) {
        this.repair_reason = repair_reason;
    }

    public String getMnf_year() {
        return mnf_year;
    }

    public void setMnf_year(String mnf_year) {
        this.mnf_year = mnf_year;
    }

    public String getAccessories_list() {
        return accessories_list;
    }

    public void setAccessories_list(String accessories_list) {
        this.accessories_list = accessories_list;
    }

    public String getService_notes() {
        return service_notes;
    }

    public void setService_notes(String service_notes) {
        this.service_notes = service_notes;
    }

    public String getWarranty_claim_info() {
        return warranty_claim_info;
    }

    public void setWarranty_claim_info(String warranty_claim_info) {
        this.warranty_claim_info = warranty_claim_info;
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

    public String getReq_date() {
        return req_date;
    }

    public void setReq_date(String req_date) {
        this.req_date = req_date;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public String getList_price() {
        return list_price;
    }

    public void setList_price(String list_price) {
        this.list_price = list_price;
    }

    public String getDiscount() {
        return discount;
    }

    public void setDiscount(String discount) {
        this.discount = discount;
    }

    public String getDisc_percent() {
        return disc_percent;
    }

    public void setDisc_percent(String disc_percent) {
        this.disc_percent = disc_percent;
    }

    public String getCreated_by() {
        return created_by;
    }

    public void setCreated_by(String created_by) {
        this.created_by = created_by;
    }

    public String getCust_address() {
        return cust_address;
    }

    public void setCust_address(String cust_address) {
        this.cust_address = cust_address;
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

    public String getSales_order() {
        return sales_order;
    }

    public void setSales_order(String sales_order) {
        this.sales_order = sales_order;
    }

}
