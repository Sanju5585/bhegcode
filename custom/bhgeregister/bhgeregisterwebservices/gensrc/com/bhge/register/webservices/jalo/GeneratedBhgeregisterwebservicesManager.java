/*
 * ----------------------------------------------------------------
 * --- WARNING: THIS FILE IS GENERATED AND WILL BE OVERWRITTEN! ---
 * --- Generated at Aug 25, 2026, 10:13:57 AM                   ---
 * ----------------------------------------------------------------
 */
package com.bhge.register.webservices.jalo;

import com.bhge.register.webservices.constants.BhgeregisterwebservicesConstants;
import com.bhge.register.webservices.jalo.BHGEAccountData;
import com.bhge.register.webservices.jalo.BHGEAppAccessLevel;
import com.bhge.register.webservices.jalo.BHGEAppAccessRules;
import com.bhge.register.webservices.jalo.BHGEApplicationDetails;
import com.bhge.register.webservices.jalo.BHGEApprovalDetails;
import com.bhge.register.webservices.jalo.BHGEInquiryEmail;
import com.bhge.register.webservices.jalo.BHGEMnCEcommMatrix;
import com.bhge.register.webservices.jalo.BHGERegisterKeyValueData;
import com.bhge.register.webservices.jalo.BHGEUserAccessRequest;
import com.bhge.register.webservices.jalo.BHGEUserAccessRules;
import de.hybris.platform.core.model.BHGERegieterCustomer;
import de.hybris.platform.jalo.Item;
import de.hybris.platform.jalo.Item.AttributeMode;
import de.hybris.platform.jalo.JaloBusinessException;
import de.hybris.platform.jalo.JaloSystemException;
import de.hybris.platform.jalo.SessionContext;
import de.hybris.platform.jalo.extension.Extension;
import de.hybris.platform.jalo.link.Link;
import de.hybris.platform.jalo.type.ComposedType;
import de.hybris.platform.jalo.type.JaloGenericCreationException;
import java.util.HashMap;
import java.util.Map;

/**
 * Generated class for type <code>BhgeregisterwebservicesManager</code>.
 */
@SuppressWarnings({"deprecation","unused","cast"})
public abstract class GeneratedBhgeregisterwebservicesManager extends Extension
{
	protected static final Map<String, Map<String, AttributeMode>> DEFAULT_INITIAL_ATTRIBUTES;
	static
	{
		final Map<String, Map<String, AttributeMode>> ttmp = new HashMap();
		DEFAULT_INITIAL_ATTRIBUTES = ttmp;
	}
	@Override
	public Map<String, AttributeMode> getDefaultAttributeModes(final Class<? extends Item> itemClass)
	{
		Map<String, AttributeMode> ret = new HashMap<>();
		final Map<String, AttributeMode> attr = DEFAULT_INITIAL_ATTRIBUTES.get(itemClass.getName());
		if (attr != null)
		{
			ret.putAll(attr);
		}
		return ret;
	}
	
	public BHGEAccountData createBHGEAccountData(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEACCOUNTDATA );
			return (BHGEAccountData)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEAccountData : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEAccountData createBHGEAccountData(final Map attributeValues)
	{
		return createBHGEAccountData( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEAppAccessLevel createBHGEAppAccessLevel(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEAPPACCESSLEVEL );
			return (BHGEAppAccessLevel)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEAppAccessLevel : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEAppAccessLevel createBHGEAppAccessLevel(final Map attributeValues)
	{
		return createBHGEAppAccessLevel( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEAppAccessRules createBHGEAppAccessRules(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEAPPACCESSRULES );
			return (BHGEAppAccessRules)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEAppAccessRules : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEAppAccessRules createBHGEAppAccessRules(final Map attributeValues)
	{
		return createBHGEAppAccessRules( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEApplicationDetails createBHGEApplicationDetails(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEAPPLICATIONDETAILS );
			return (BHGEApplicationDetails)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEApplicationDetails : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEApplicationDetails createBHGEApplicationDetails(final Map attributeValues)
	{
		return createBHGEApplicationDetails( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEApprovalDetails createBHGEApprovalDetails(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEAPPROVALDETAILS );
			return (BHGEApprovalDetails)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEApprovalDetails : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEApprovalDetails createBHGEApprovalDetails(final Map attributeValues)
	{
		return createBHGEApprovalDetails( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEInquiryEmail createBHGEInquiryEmail(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEINQUIRYEMAIL );
			return (BHGEInquiryEmail)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEInquiryEmail : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEInquiryEmail createBHGEInquiryEmail(final Map attributeValues)
	{
		return createBHGEInquiryEmail( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEMnCEcommMatrix createBHGEMnCEcommMatrix(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEMNCECOMMMATRIX );
			return (BHGEMnCEcommMatrix)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEMnCEcommMatrix : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEMnCEcommMatrix createBHGEMnCEcommMatrix(final Map attributeValues)
	{
		return createBHGEMnCEcommMatrix( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGERegieterCustomer createBHGERegieterCustomer(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEREGIETERCUSTOMER );
			return (BHGERegieterCustomer)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGERegieterCustomer : "+e.getMessage(), 0 );
		}
	}
	
	public BHGERegieterCustomer createBHGERegieterCustomer(final Map attributeValues)
	{
		return createBHGERegieterCustomer( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGERegisterKeyValueData createBHGERegisterKeyValueData(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEREGISTERKEYVALUEDATA );
			return (BHGERegisterKeyValueData)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGERegisterKeyValueData : "+e.getMessage(), 0 );
		}
	}
	
	public BHGERegisterKeyValueData createBHGERegisterKeyValueData(final Map attributeValues)
	{
		return createBHGERegisterKeyValueData( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEUserAccessRequest createBHGEUserAccessRequest(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEUSERACCESSREQUEST );
			return (BHGEUserAccessRequest)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEUserAccessRequest : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEUserAccessRequest createBHGEUserAccessRequest(final Map attributeValues)
	{
		return createBHGEUserAccessRequest( getSession().getSessionContext(), attributeValues );
	}
	
	public BHGEUserAccessRules createBHGEUserAccessRules(final SessionContext ctx, final Map attributeValues)
	{
		try
		{
			ComposedType type = getTenant().getJaloConnection().getTypeManager().getComposedType( BhgeregisterwebservicesConstants.TC.BHGEUSERACCESSRULES );
			return (BHGEUserAccessRules)type.newInstance( ctx, attributeValues );
		}
		catch( JaloGenericCreationException e)
		{
			final Throwable cause = e.getCause();
			throw (cause instanceof RuntimeException ?
			(RuntimeException)cause
			:
			new JaloSystemException( cause, cause.getMessage(), e.getErrorCode() ) );
		}
		catch( JaloBusinessException e )
		{
			throw new JaloSystemException( e ,"error creating BHGEUserAccessRules : "+e.getMessage(), 0 );
		}
	}
	
	public BHGEUserAccessRules createBHGEUserAccessRules(final Map attributeValues)
	{
		return createBHGEUserAccessRules( getSession().getSessionContext(), attributeValues );
	}
	
	@Override
	public String getName()
	{
		return BhgeregisterwebservicesConstants.EXTENSIONNAME;
	}
	
}
