<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:fo="http://www.w3.org/1999/XSL/Format"
	exclude-result-prefixes="fo">
	<xsl:template match="CalibrationData">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
			<fo:layout-master-set>
	         <fo:simple-page-master master-name="PageMaster.Content-right"              
	          margin="15mm 25mm 30mm 13mm" page-height="297mm" page-width="210mm">
	            <fo:region-body margin="25mm 0mm 15mm 0mm"/>
	            <fo:region-before region-name="Content-right-before" extent="20mm" />
	            <fo:region-after region-name="Content-right-after" extent="10mm" />
	         </fo:simple-page-master>
	         <fo:simple-page-master master-name="PageMaster.Content-left"               
	          margin="10mm 10mm 10mm 10mm" page-height="297mm" page-width="210mm">
	          	<fo:region-body margin="10mm 25mm 10mm 25mm"/>
	            <fo:region-before region-name="Content-left-before" extent="20mm" />
	            <fo:region-after region-name="Content-left-after" extent="10mm" />                                        
	         </fo:simple-page-master>
	         <fo:page-sequence-master master-name="Content-Pages">                      
	            <fo:repeatable-page-master-alternatives>
	               <fo:conditional-page-master-reference 
	                master-reference="PageMaster.Content-right" odd-or-even="odd"/>
	               <fo:conditional-page-master-reference 
	                master-reference="PageMaster.Content-left" odd-or-even="even"/>
	             </fo:repeatable-page-master-alternatives>
	          </fo:page-sequence-master>
	       </fo:layout-master-set>
			<fo:page-sequence master-reference="Content-Pages">
			   <fo:static-content flow-name="Content-right-before">                      
			             <fo:block font-family="Arial" font-size="8pt" text-align="right">
			               	<fo:external-graphic content-height="50%" content-width="50%" src="url(https://1rqrpr83sqoegehqarnde4f.blob.core.windows.net/misc/calibration_pdf_logo.png)" />
			             </fo:block>
			   </fo:static-content>
			   <fo:static-content flow-name="Content-left-before">                      
			             <fo:block font-family="Arial" font-size="8pt" text-align="right" space-after="10mm">
			               <fo:external-graphic content-height="50%" content-width="50%" src="url(https://1rqrpr83sqoegehqarnde4f.blob.core.windows.net/misc/calibration_pdf_logo.png)" />
			             </fo:block>
			    </fo:static-content>
			    <fo:static-content flow-name="Content-right-after">  
			      		 <fo:block font-family="Arial" font-size="10pt" text-align="left" space-after="10mm">
			       	         <xsl:value-of select="disclaimer" />
			             </fo:block>                      
			             <fo:block font-family="Arial" font-size="10pt" text-align="center" space-after="10mm">
			                <xsl:value-of select="footerText" />
			             </fo:block> 
			          
			    </fo:static-content>
			          <fo:static-content flow-name="Content-left-after">  
			          <fo:block font-family="Arial" font-size="10pt" text-align="left" space-after="10mm">
			                <xsl:value-of select="disclaimer" />
			             </fo:block>                       
			             <fo:block font-family="Arial" font-size="10pt" text-align="center">
			                <xsl:value-of select="footerText" />
			             </fo:block>

			    </fo:static-content>
				<fo:flow flow-name="xsl-region-body">					
					<fo:block font-size="15pt" font-weight="bold"
						space-after="5mm"></fo:block>
					<fo:block font-size="15pt" font-weight="bold"
						space-after="10mm" text-align="center" margin-left="10mm" margin-right="10mm" background-color="Black" width="10%" color="#ffffff"> CALIBRATION DATA SHEET </fo:block>
					<fo:block font-size="15pt" font-weight="bold"
						space-after="1mm"></fo:block>
					<fo:table table-layout="fixed" width="100%" >
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										Probe Serial Number 
									</fo:block>
								</fo:table-cell>								
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										<xsl:value-of select="probeSerialNumber" />
									</fo:block>
								</fo:table-cell>								
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										Last Calibration Date 
									</fo:block>
								</fo:table-cell>								
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										<xsl:value-of select="lastCalibrationDate" />
									</fo:block>
								</fo:table-cell>								
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										Probe Material Number 
									</fo:block>
								</fo:table-cell>
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										<xsl:value-of select="probeModel" />
									</fo:block>
								</fo:table-cell>								
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										Configured Material Number  
									</fo:block>
								</fo:table-cell>
								<fo:table-cell>
									<fo:block font-size="10pt" font-weight="bold"
										space-after="10mm">
										<xsl:value-of select="configureProbeModel" />
									</fo:block>
								</fo:table-cell>								
							</fo:table-row>						
						</fo:table-body>
					</fo:table>	
					<fo:block font-size="15pt" font-weight="bold"
						space-after="20mm"> </fo:block>				
					<fo:block font-size="12pt" font-weight="bold">
					<fo:table table-layout="fixed" width="100%" >
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell column-width="2mm">
									<fo:block font-size="12pt" font-weight="bold"
										space-after="2mm" text-align="center" >
										Dew Point										
									</fo:block>
									<fo:block font-size="12pt" font-weight="bold"
										space-after="2mm" text-align="center" >										
										(Deg C)
									</fo:block>
								</fo:table-cell>
								<fo:table-cell column-width="2mm">
									<fo:block font-size="12pt" font-weight="bold"
										space-after="2mm" text-align="center" >
										<xsl:value-of select="headerReading" />
									</fo:block>
								</fo:table-cell>
								<fo:table-cell column-width="2mm">
									<fo:block font-size="12pt" font-weight="bold"
										space-after="2mm" text-align="center" >
										Dew Point									
									</fo:block>
									<fo:block font-size="12pt" font-weight="bold"
										space-after="2mm" text-align="center" >
										(Deg F)
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					</fo:block>
					<fo:block text-align="center" space-after="10mm">________________________________________________________________
					</fo:block>
					<fo:block font-size="12pt">
						<fo:block font-size="12pt" space-before="10mm" />
						<xsl:apply-templates select="entries" />
					</fo:block>					
				</fo:flow>				
			</fo:page-sequence>			
		</fo:root>
	</xsl:template>
	<xsl:template match="entries">
		<xsl:for-each select="entries">
			<fo:block font-size="12pt" font-weight="bold">
				<fo:table table-layout="fixed" width="100%" >
					<fo:table-body>
						<fo:table-row>
							<fo:table-cell border="4px"  text-align="center">
								<fo:block font-size="12pt" space-after="2mm">
									<xsl:value-of select="dpStartC" />
								</fo:block>
							</fo:table-cell>
							<fo:table-cell border="4px"  text-align="center">
								<fo:block font-size="12pt" space-after="2mm">
									<xsl:value-of select="mhReading" />
								</fo:block>
							</fo:table-cell>
							<fo:table-cell border="4px"  text-align="center">
								<fo:block font-size="12pt" space-after="2mm">
									<xsl:value-of select="dpStartF" />
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
					</fo:table-body>
				</fo:table>
			</fo:block>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>