package com.bhge.facades.pdf;

import de.hybris.platform.commercefacades.product.data.ImageData;
import java.util.Collection;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlTransient;


/**
 * @author mkuma229
 *
 */
public class DsPdfImageData
{
    @XmlTransient
    private Collection<ImageData> attachments;

    /**
     * @return the attachments
     */
    @XmlElement
    public Collection<ImageData> getAttachments()
    {
        return attachments;
    }

    /**
     * @param attachments
     *           the attachments to set
     */
    public void setAttachments(final Collection<ImageData> attachments)
    {
        this.attachments = attachments;
    }
}

