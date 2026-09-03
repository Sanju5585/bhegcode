
package com.bhge.core.faq.dao;

import java.util.List;
import de.hybris.platform.store.BaseStoreModel;
import com.bhge.core.model.FaqComponentModel;

public interface BHGEFaqDAO
{
    List<FaqComponentModel> getFaqsByStore ();
    List<FaqComponentModel> searchFaqs (String keyword);
}