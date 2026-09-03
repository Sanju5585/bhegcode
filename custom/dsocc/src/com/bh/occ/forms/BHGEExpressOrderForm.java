package com.bh.occ.forms;

public class BHGEExpressOrderForm {

	private String[] productCode;
	private String[] qty;
	private String copyPasteData;
	private boolean waygateQuickOrderPage;
	public String[] getProductCode() {
		return productCode;
	}
	public void setProductCode(String[] productCode) {
		this.productCode = productCode;
	}
	public String[] getQty() {
		return qty;
	}
	public void setQty(String[] qty) {
		this.qty = qty;
	}
	public String getCopyPasteData() {
		return copyPasteData;
	}
	public void setCopyPasteData(String copyPasteData) {
		this.copyPasteData = copyPasteData;
	}

	public boolean isWaygateQuickOrderPage() {
		return waygateQuickOrderPage;
	}

	public void setWaygateQuickOrderPage(boolean waygateQuickOrderPage) {
		this.waygateQuickOrderPage = waygateQuickOrderPage;
	}
}
