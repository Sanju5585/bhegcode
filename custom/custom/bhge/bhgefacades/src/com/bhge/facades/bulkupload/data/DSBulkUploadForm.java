package com.bhge.facades.bulkupload.data;

public class DSBulkUploadForm {

    private String csvInput;

    private boolean waygateQuickOrderPage;

    public String getCsvInput() {
        return csvInput;
    }

    public void setCsvInput(String csvInput) {
        this.csvInput = csvInput;
    }

    public boolean isWaygateQuickOrderPage() {
        return waygateQuickOrderPage;
    }

    public void setWaygateQuickOrderPage(boolean waygateQuickOrderPage) {
        this.waygateQuickOrderPage = waygateQuickOrderPage;
    }
}
