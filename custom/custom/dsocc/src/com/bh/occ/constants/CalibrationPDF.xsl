<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:fo="http://www.w3.org/1999/XSL/Format"
	exclude-result-prefixes="fo">
	<xsl:template match="CalibrationData">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
			<fo:layout-master-set>
				<fo:simple-page-master master-name="my_page" margin="0.5in">
					<fo:region-body />
				</fo:simple-page-master>
			</fo:layout-master-set>
			<fo:page-sequence master-reference="my_page">
			<fo:flow flow-name="xsl-region-body">
				<fo:block text-align="center"> 
				  <xsl:variable name="headerlogo" select="headerLogo"/>
                  <fo:external-graphic  content-height="50%" src="url($headerlogo)" />
                </fo:block>
                <fo:block font-size="10pt" font-weight="bold" space-after="2mm" text-align="center"> CALIBRATION DATA SHEET </fo:block>
                <fo:block font-size="10pt" font-weight="bold" space-after="2mm"></fo:block>
                <fo:table table-layout="fixed" width="80%" >
                	<fo:table-body>
                		<fo:table-row>
                			<fo:table-cell>
								<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									Probe Serial Number :
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block></fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									<xsl:value-of select="probeSerialNumber"/>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block></fo:block>
							</fo:table-cell>
                		</fo:table-row>
                		<fo:table-row>
                			<fo:table-cell>
								<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									Last Calibration Date :
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block></fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									<xsl:value-of select="lastCalibrationDate"/>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block></fo:block>
							</fo:table-cell>
                		</fo:table-row>
                		<fo:table-row>
                			<fo:table-cell>
								<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									Probe Part Number :
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block></fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									<xsl:value-of select="probeModel"/>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block></fo:block>
							</fo:table-cell>
                		</fo:table-row>           		
                	</fo:table-body>
                </fo:table>
                <fo:table table-layout="fixed" width="80%">
                	<fo:table-body>
                		<fo:table-row>
	                		<fo:table-cell>
	                			<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									ND Number
								</fo:block>
	                		</fo:table-cell>
	                		<fo:table-cell>
	                			<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									Dew Point (Deg C)
								</fo:block>
	                		</fo:table-cell>
	                		<fo:table-cell>
	                			<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									MH Reading
								</fo:block>
	                		</fo:table-cell>
	                		<fo:table-cell>
	                			<fo:block  font-size="8pt" font-weight="bold" space-after="2mm"> 
									Dew Point (Deg F)
								</fo:block>
	                		</fo:table-cell>
                		</fo:table-row>                	
                	</fo:table-body>
                </fo:table>
                <fo:block>_________________________________________________________________________________________________________________________________________ </fo:block>
                <fo:block font-size="8pt">
						<fo:block font-size="8pt"  space-after="4mm"/>
						<xsl:apply-templates select="entries"/>
				</fo:block>
			</fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>
	<xsl:template match="entries">
		<xsl:for-each select="entries">
			<fo:block>
				<fo:table table-layout="fixed" width="100%" >
					<fo:table-body>
						<fo:table-row>
							<fo:table-cell>
								<fo:block font-size="8pt"  space-after="2mm">
									<xsl:value-of select="lineNo"/>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block font-size="8pt"  space-after="2mm">
									<xsl:value-of select="dpStartC"/> 					            
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>
								<fo:block font-size="8pt"  space-after="2mm">
									<xsl:value-of select="mhReading"/>
								</fo:block>
							</fo:table-cell>
							<fo:table-cell>								
								<fo:block font-size="8pt"  space-after="2mm">
									<xsl:value-of select="dpStartF"/>
								</fo:block>
							</fo:table-cell>
						</fo:table-row>
					</fo:table-body>
				</fo:table>
			</fo:block>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>