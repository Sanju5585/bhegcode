<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.1"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:fo="http://www.w3.org/1999/XSL/Format"
	exclude-result-prefixes="fo">

	<xsl:template match="DSWygateFilmData">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
			<fo:layout-master-set>
				<fo:simple-page-master master-name="my_page"
					margin="0.5in">
					<fo:region-body />
				</fo:simple-page-master>
			</fo:layout-master-set>
			<fo:page-sequence master-reference="my_page">
				<fo:flow flow-name="xsl-region-body">
				<fo:block space-after="2mm" margin-left="1mm" text-align="right">
					<fo:external-graphic  content-height="50%" src="url(https://1rqrpr83sqoegehqarnde4f.blob.core.windows.net/waygatefilm/LOGO.png)" />
				</fo:block>
					<fo:block font-size="9pt" font-weight="bold" margin-left="1mm" margin-top="50pt">
						Baker Hughes Belgium
						BV
					</fo:block>
					<fo:block font-size="7pt" space-after="0.5mm" margin-left="1mm">
						Roderveldlaan 5
					</fo:block>
					<fo:block font-size="7pt" space-after="0.5mm" margin-left="1mm">
						2600 Berchem
					</fo:block>
					<fo:block font-size="7pt" space-after="0.5mm" margin-left="1mm">
						Belgium
					</fo:block>
					<fo:block font-size="7pt" space-after="8mm" margin-left="1mm">
						www.bakerhughesds.com/waygate-technologies
					</fo:block>
					<fo:table>
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="7pt" space-after="5mm" margin-left="1mm">
										Date:
										<xsl:value-of select="currentDate" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:block font-size="15pt" font-weight="bold"
						space-after="5mm"></fo:block>
					<fo:block font-size="15pt" font-weight="bold" 
						space-after="10mm" text-align="center" margin-left="1mm" margin-right="1mm" background-color="#013220" width="7%" color="#ffffff"> CERTIFICATE OF CONFORMITY </fo:block>
					<fo:block font-size="15pt" font-weight="bold"
						space-after="1mm"></fo:block>



					<fo:table table-layout="fixed" width="115%">
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="7pt" font-weight="bold"
										margin-top="10pt" space-after="2mm" margin-left="1mm">
										Name of the Products:
									</fo:block>
									</fo:table-cell>
									<fo:table-cell>
									<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm" >
										AGFA STRUTURIX
										<xsl:apply-templates select="type" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="7pt" font-weight="bold"
										margin-top="10pt" space-after="2mm" margin-left="1mm">
										Emulsion Numbers:
									</fo:block>
									</fo:table-cell>
									<fo:table-cell>
									<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm">
										<xsl:value-of select="batch" />
									</fo:block>
								</fo:table-cell>
								<fo:table-cell>
									<fo:block>
									</fo:block>
									<fo:block font-size="7pt" font-weight="bold"
										margin-top="10pt" space-after="2mm" margin-left="20mm">
										Exp Date:
										</fo:block>
										</fo:table-cell>
										<fo:table-cell>
										<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm">
										<xsl:value-of select="expiry" />
									</fo:block>
								</fo:table-cell>
							</fo:table-row>

                    <fo:table-row>
					 <fo:table-cell>
					<fo:block font-size="7pt" font-weight="bold"
					 margin-top="10pt" space-after="2mm" margin-left="1mm">
					   Type of Products:
					</fo:block>
					</fo:table-cell>
					<fo:table-cell number-columns-spanned="3">
					<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm">
						Radiographic films for
						Non-destructive Testing (NDT)
					</fo:block>
					</fo:table-cell>
					 </fo:table-row>
					 <fo:table-row>
					 <fo:table-cell>
					<fo:block font-size="7pt" font-weight="bold"
					 margin-top="10pt" space-after="2mm" margin-left="1mm">
					  Origin of Products:
					</fo:block>
					</fo:table-cell>
					<fo:table-cell>
					<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm">
						All goods are of Belgian origin
					</fo:block>
                     </fo:table-cell>
					 </fo:table-row>
					 <fo:table-row>
					 <fo:table-cell>
					<fo:block font-size="7pt" font-weight="bold"
					 margin-top="10pt" space-after="2mm" margin-left="1mm">
						Testing Methods:
					</fo:block>
					 </fo:table-cell>
					  <fo:table-cell number-columns-spanned="1">
					<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm">
					Dimensions : ISO 5655/ sensitometry : ISO 7004 Classification : EN ISO 11699-1
					</fo:block>
					</fo:table-cell>
						</fo:table-row>

						
					<fo:table-row>
					 <fo:table-cell>
					<fo:block font-size="7pt" font-weight="bold"
					 margin-top="10pt" space-after="2mm" margin-left="1mm">
					  Results of Testing:
					</fo:block>
					</fo:table-cell>
					<fo:table-cell number-columns-spanned="1">
					<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm">
					All products comply with the standardised requirements according to EN ISO 11699-1 and ASTM 1815
					</fo:block>
					</fo:table-cell>
					</fo:table-row>
					
					<fo:table-row>
					 <fo:table-cell>
					<fo:block font-size="7pt" font-weight="bold"
					 margin-top="10pt" space-after="2mm" margin-left="1mm">
					  Quality Control:
					</fo:block>
					</fo:table-cell>
					<fo:table-cell>
					<fo:block font-size="7pt" margin-top="10pt" margin-left="1mm">
						We declare that AGFA NDT Film Systems are manufactured under ISO 14001:2015, ISO 9001:2015 Accreditation and controlled under a Quality Management System approved to ISO 14001:2015 (Approval Certificate No: 00008607), ISO 9001:2015 (Approval No: 00008608) - issued by LRQA Antwerp. Certificate identity # 10258589. Expiration : March 29, 2023.
					</fo:block>
					</fo:table-cell>
					</fo:table-row>	
					<fo:table-row>
					<fo:table-cell>			
					<fo:block font-size="7pt" margin-top="20pt" space-after="2mm" margin-left="1mm">
						Sincerely,
					</fo:block>
					<fo:block space-after="2mm" margin-left="1mm">
					<fo:external-graphic  content-height="50%" src="url(https://1rqrpr83sqoegehqarnde4f.blob.core.windows.net/waygatefilm/Signature.png)" />
					</fo:block>
					</fo:table-cell>
					</fo:table-row>
					<fo:table-row>
					<fo:table-cell>
					<fo:block font-size="7pt" margin-top="30pt" space-after="2mm" margin-left="1mm"
						font-weight="bold">
						Ivo Daneels
					</fo:block>
					</fo:table-cell>
					</fo:table-row>
					<fo:table-row>
					<fo:table-cell number-columns-spanned="3">
					<fo:block font-size="7pt" margin-top="10pt" space-after="2mm" margin-left="1mm" font-weight="bold">
						Waygate Technologies, a Baker Hughes business
					</fo:block>
					</fo:table-cell>
					</fo:table-row>
					</fo:table-body>
					</fo:table>
				</fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>
	<xsl:template match="type">
		<xsl:value-of select="type" />
	</xsl:template>
</xsl:stylesheet>