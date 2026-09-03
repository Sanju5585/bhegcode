<%@ page trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- <%@ taglib prefix="template" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/template" %> --%>
<%-- <%@ taglib prefix="cart" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/cart" %> --%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme" %>
<%@ taglib prefix="format" tagdir="/WEB-INF/tags/shared/format" %>
<%-- <%@ taglib prefix="common" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/common" %> --%>
<%@ taglib prefix="breadcrumb" tagdir="/WEB-INF/tags/desktop/nav/breadcrumb" %>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%-- <%@ taglib prefix="user" tagdir="/WEB-INF/tags/addons/gestorefrontaddon/desktop/user" %>
 --%>

<%-- <%@ tag body-content="empty" trimDirectiveWhitespaces="true"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/desktop/template"%>
<%@ taglib prefix="formElement" tagdir="/WEB-INF/tags/desktop/formElement"%>
<%@ taglib prefix="theme" tagdir="/WEB-INF/tags/shared/theme"%>
<%@ taglib prefix="cms" uri="http://hybris.com/tld/cmstags"%>
<%@ taglib prefix="ycommerce" uri="http://hybris.com/tld/ycommercetags"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="template" tagdir="/WEB-INF/tags/responsive/template"%>
<%@ taglib prefix="user" tagdir="/WEB-INF/tags/responsive/user"%>
<script type="text/javascript" src="${commonResourcePath}/js/jquery-3.5.1.min.js"></script>
<%-- <script src="https://code.jquery.com/jquery-1.10.2.js"></script> --%>
<script src="https://code.jquery.com/ui/1.14.1/jquery-ui.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<!-- <script src="/_ui/responsive/common/js/custom.js"></script> -->
<!-- <script src="/_ui/responsive/common/js/acc.soldToLink.js"></script> -->
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<script src="/_ui/responsive/common/js/jquery-3.5.1.min.js"></script>
<script src="/_ui/responsive/common/js/jquery-ui-1.14.1.min.js"></script>
<script src="/_ui/responsive/common/bootstrap/js/bootstrap.min.js"></script>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> --%>


<c:forEach items="${allParentSoldTos}" var="soldTo" >
	<%-- <div class="panel panel-default  bor-radius-0 pad-5 <c:out value="${soldTo.getUid()}"/>" --%>
	<c:if test='${null != currentSoldTo && currentSoldTo == soldTo.uid}'>
	<div   class="panel panel-default  bor-radius-0 pad-5 soldtoareapanel active">
	
		<%-- <c:if test="${fn:containsIgnoreCase(defaultSalesAreaData.getB2bUnitUid(), soldTo.getUid())}"></c:if> --%>
		<div class="panel-body">
			<span>${soldTo.uid}</span> - ${soldTo.getName()}
			<%-- <span>${soldTo.getUid()} --%>
		</div>
	</div>
	</c:if>
</c:forEach>