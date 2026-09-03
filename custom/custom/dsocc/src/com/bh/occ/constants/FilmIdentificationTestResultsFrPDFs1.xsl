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
					<fo:external-graphic  content-height="50%" src="url(https://dnp1xn49xp2onp7c180kqii.blob.core.windows.net/waygatefilm/LOGO.png)" />
				</fo:block>
						<fo:block font-size="9pt" font-weight="bold" margin-left="1mm" margin-top="35pt">
						Baker Hughes Belgium BV
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
						space-after="10mm" text-align="center" margin-left="1mm" margin-right="1mm" background-color="#013220" width="7%" color="#ffffff"> FICHE D’IDENTIFICATION DES FILMS </fo:block>
					<fo:block font-size="15pt" font-weight="bold"
						space-after="1mm"></fo:block>
					<fo:table table-layout="fixed">
						<fo:table-body>
							<fo:table-row>
							<fo:table-cell number-columns-spanned="3">
									<fo:block font-size="7pt" 
										 space-after="2mm" margin-left="1mm">
										N° d’émulsion/Batch :
									</fo:block>
							</fo:table-cell>
								<fo:table-cell number-columns-spanned="9">
									<fo:block font-size="7pt"  margin-left="1mm" >
									<xsl:value-of select="batch" /></fo:block>
								</fo:table-cell>
								</fo:table-row>
								<fo:table-row>
								<fo:table-cell number-columns-spanned="3" padding-top="2mm">
									<fo:block font-size="7pt" 
										 space-after="2mm" margin-left="1mm">
										Date d'expiration:
                                   </fo:block>
                                   </fo:table-cell>
                                   <fo:table-cell number-columns-spanned="9" padding-top="2mm">
                                   <fo:block font-size="7pt"  margin-left="1mm" >
                                    <xsl:value-of select="expiry" /></fo:block>
								  </fo:table-cell>									
							</fo:table-row>
							
					<fo:table-row>
					<fo:table-cell number-columns-spanned="3" padding-top="2mm">	
					<fo:block font-size="7pt" font-weight="bold" space-after="2mm" margin-top="2pt" margin-left="1mm">
						DESCRIPTION DU FILM</fo:block>
					</fo:table-cell>
					</fo:table-row>
							<fo:table-row>
							<fo:table-cell number-columns-spanned="3" padding-top="2mm">
								<fo:block font-size="7pt" 
										margin-top="2pt" space-after="2mm" margin-left="1mm">Type: </fo:block>
								</fo:table-cell>
								<fo:table-cell number-columns-spanned="9">	
								<fo:block font-size="7pt" margin-top="2pt" margin-left="1mm" padding-top="2mm">
								<xsl:apply-templates select="type" /></fo:block>
								</fo:table-cell>							
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell number-columns-spanned="3" padding-top="2mm" >
								<fo:block font-size="7pt" 
										margin-top="2pt" space-after="2mm" margin-left="1mm">
									Fabricant :	
									</fo:block>  
									</fo:table-cell> 
									<fo:table-cell number-columns-spanned="8" padding-top="2mm">
									<fo:block font-size="7pt" margin-top="2pt" margin-left="1mm" text-align= "justify" >
									AGFA- GEVAERT N.V Mortsel - Belgium (certified ISO 9001:2015 LRQA no 00008608) &amp; (ISO 14001-2015 LRQA no. 00008607). Certification identity #: 10258589. Expiration date : March 29, 2023.</fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
								<fo:table-cell padding-top="2mm" number-columns-spanned="3">
									<fo:block font-size="7pt" 
										margin-top="2pt" space-after="2mm" margin-left="1mm">
										Distributeur : 
									</fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm" number-columns-spanned="9">
									<fo:block font-size="7pt" margin-top="2pt" margin-left="1mm" >
									Baker Hughes Digital Solutions GmbH, Robert-Bosch-Str. 3, D-50354 Huerth, Germany</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					
					
					<fo:block font-size="7pt" font-weight="bold" space-after="2mm" margin-top="2pt" margin-left="1mm" padding-top="2mm">TRAITEMENT AUTOMATIQUE</fo:block>
					<fo:table>
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell>
									<fo:block font-size="7pt" margin-left="1mm" >
									Développeur G135 / Fixateur G335 - le temps d’immersion 100 secondes | température de développement 28°C</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>

					<fo:block font-size="7pt" font-weight="bold" space-after="2mm" margin-top="2pt" margin-left="1mm" padding-top="2mm">CLASSIFICATION DU SYSTÈME SUIVANT EN-ISO 11699-1</fo:block>
					<fo:table border="1px solid" width="95%" font-size="10pt" margin-left="1mm" margin-right="9mm" margin-bottom="5mm">
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell padding-top="2mm" number-columns-spanned="2">
									<fo:block font-size="6pt" space-after="1mm">Structurix D2</fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm">CLASSE </fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm">G(2) </fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm">G(4) </fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm">SigmaD(2) </fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm">G/SigmaD </fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm">Ks(mGy) </fo:block>
								</fo:table-cell>
							</fo:table-row>
							
								
														
							<fo:table-row>
								<fo:table-cell padding-top="6mm" number-columns-spanned="2">
									<fo:block font-size="6pt" space-after="1mm">Type d’émulsion </fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="classe" /></fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="g2" /></fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="g4" /></fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="sigmaD2" /></fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="gSigmaD" /></fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="kamGy" /></fo:block>
								</fo:table-cell>
							</fo:table-row>
							<fo:table-row>
							<fo:table-cell padding-top="2mm">
								<fo:block> </fo:block>
								</fo:table-cell>
							</fo:table-row>	
						</fo:table-body>
					</fo:table>
					
					<fo:table table-layout="fixed" width="100%">
			       <fo:table-body>
			         <fo:table-row>
			           <fo:table-cell>
					<fo:block font-size="7pt" font-weight="bold" space-after="2mm" margin-top="2pt" margin-left="1mm">	CARACTÉRISTIQUES SENSITOMÉTRIQUES SELON ISO 7004 (2002)</fo:block>
					<fo:table border="1px solid" font-size="10pt" margin-left="1mm" margin-bottom="5mm" width="90%">
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell padding-top="2mm" number-columns-spanned="2">
									<fo:block font-size="6pt" space-after="1mm">Structurix D2</fo:block>
								</fo:table-cell>
							<fo:table-cell padding-top="2mm">
							<fo:block font-size="6pt" space-after="1mm">220kV</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="2mm">
							<fo:block font-size="6pt" space-after="1mm">IR192</fo:block>
							</fo:table-cell>
							<fo:table-cell padding-top="2mm">
							<fo:block font-size="6pt" space-after="1mm">120kV</fo:block>
							</fo:table-cell>
							</fo:table-row>	
							<fo:table-row>						
								<fo:table-cell padding-top="6mm" number-columns-spanned="2">
									<fo:block font-size="6pt" space-after="1mm">Sensibilité ISO</fo:block>
								</fo:table-cell>
							<fo:table-cell padding-top="6mm"><fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="isoSpeed" /></fo:block></fo:table-cell>
							<fo:table-cell padding-top="6mm"><fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="ir192" /></fo:block></fo:table-cell>
							<fo:table-cell padding-top="6mm"><fo:block font-size="6pt" space-after="1mm"><xsl:apply-templates select="kv120" /></fo:block></fo:table-cell>
							</fo:table-row>
							<fo:table-row>
							<fo:table-cell padding-top="2mm">
								<fo:block> </fo:block>
								</fo:table-cell>
							</fo:table-row>
							</fo:table-body>
									</fo:table>
							</fo:table-cell>
							
					<fo:table-cell>
							<fo:table table-layout="fixed" width="110%">
								<fo:table-body>
								<fo:table-row>	
								<fo:table-cell padding-top="8mm">
									<fo:block font-size="6pt" space-after="1mm" margin-left="1mm">Contraste moyen:</fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="8mm">
								<fo:block font-size="6pt" space-after="1mm" margin-left="1mm"><xsl:apply-templates select="avgContrast" /></fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="8mm">
									<fo:block font-size="6pt" space-after="1mm" margin-left="1mm">Contraste moyen ”C” (%):</fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="8mm">
								 <fo:block font-size="6pt" space-after="1mm" margin-left="1mm"><xsl:value-of select="cper" /></fo:block>
								 </fo:table-cell>
							   </fo:table-row>
							
							<fo:table-row>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm" margin-left="1mm">Date du contrôle:</fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
								 <fo:block font-size="6pt" space-after="1mm" margin-left="1mm"><xsl:value-of select="control" /></fo:block>
								 </fo:table-cell>
								<fo:table-cell padding-top="6mm">
									<fo:block font-size="6pt" space-after="1mm" margin-left="1mm">Sensibilité “S” (%):</fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="6mm">
								 <fo:block font-size="6pt" space-after="1mm" margin-left="1mm"> <xsl:value-of select="sper" /></fo:block>
								 </fo:table-cell>
								
							</fo:table-row>
						</fo:table-body>
					</fo:table>
			</fo:table-cell>
		</fo:table-row>
	</fo:table-body>
	</fo:table>
					<fo:table table-layout="fixed">
					<fo:table-body>
						<fo:table-row>
						<fo:table-cell number-columns-spanned="7">
					<fo:block font-size="7pt" font-weight="bold" space-after="2mm" margin-top="2pt" margin-left="1mm"> SPÉCIFICATIONS SUPPLÉMENTAIRES</fo:block>
					<fo:block font-size="7pt" space-after="2mm" text-align="justify" margin-right="8%" margin-left="1mm"> 
										Les valeurs de la sensibilité et du contraste moyen du numéro d’émulsion faisant l’objet de cette fiche, sont garanties (dans la limite des péremptions indiquées sur les emballages extérieurs, et pour autant que les films soient conservés dans les conditions rappelées ci-après) dans les écarts de tolérance suivant:
									</fo:block></fo:table-cell>
											
							</fo:table-row>
				</fo:table-body>
			</fo:table>
		
						
					<fo:table table-layout="fixed" width="60%">
						<fo:table-body>
							<fo:table-row>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm" margin-left="20mm">Sensibilité: écart type 3%</fo:block>
								</fo:table-cell>
								<fo:table-cell padding-top="2mm">
									<fo:block font-size="6pt" space-after="1mm" margin-left="20mm">Contraste moyen: écart type 3%</fo:block>
								</fo:table-cell>
							</fo:table-row>
						</fo:table-body>
					</fo:table>
					<fo:table table-layout="fixed">
					<fo:table-body>
						<fo:table-row>
						<fo:table-cell number-columns-spanned="7">
					<fo:block font-size="7pt" font-weight="bold" space-after="2mm" margin-top="10pt" margin-left="1mm">CONDITIONS DE STOCKAGE</fo:block>
			
									<fo:block font-size="7pt" space-after="2mm" text-align="justify" margin-right="8%" margin-left="1mm">
										Les films inclus dans les emballages d’origine fermés, seront entreposés à l’abri de l’humidité (50% H.R ± 20%), de la chaleur (max 23°C) ainsi que toute radiation ionisante (max. 90 nGrayh de Kerma dans l’air par heure). Dans ces conditions, le niveau du voile (densité du noircissement) ne dépassera pas D = 0.3.
									</fo:block></fo:table-cell>
											
						</fo:table-row>
			</fo:table-body>
		</fo:table>
							
			<fo:table>
				<fo:table-body>
					<fo:table-row>
					<fo:table-cell>			
					<fo:block space-after="2mm" margin-left="1mm">
					<fo:external-graphic  content-height="50%" src="url(https://dnp1xn49xp2onp7c180kqii.blob.core.windows.net/waygatefilm/Signature.png)" />
					</fo:block>
					</fo:table-cell>
					</fo:table-row>
					<fo:table-row>
					<fo:table-cell>
					<fo:block font-size="7pt" margin-top="20pt" space-after="2mm" margin-left="1mm"
						font-weight="bold">
						Ivo Daneels
					</fo:block>
					</fo:table-cell>
					</fo:table-row>
					<fo:table-row>
					<fo:table-cell>
					<fo:block font-size="7pt" margin-top="10pt" space-after="2mm" margin-left="1mm" font-weight="bold">
						Waygate Technologies,a Baker Hughes business
					</fo:block>
					</fo:table-cell>
					</fo:table-row>
					</fo:table-body>
				</fo:table>
					
					<!-- <fo:block>
						<xsl:apply-templates select="type" /></fo:block><fo:block>classe
						<xsl:apply-templates select="classe" /></fo:block><fo:block>g2
						<xsl:apply-templates select="g2" /></fo:block><fo:block>g4
						<xsl:apply-templates select="g4" /></fo:block><fo:block>sigmaD2
						<xsl:apply-templates select="sigmaD2" /></fo:block><fo:block>gSigmaD
						<xsl:apply-templates select="gSigmaD" /></fo:block><fo:block>kamGy
						<xsl:apply-templates select="kamGy" /></fo:block><fo:block>kv120
						<xsl:apply-templates select="kv120" /></fo:block><fo:block>isoSpeed
						<xsl:apply-templates select="isoSpeed" /></fo:block><fo:block>ir192
						<xsl:apply-templates select="ir192" /></fo:block><fo:block>avgContrast
						<xsl:apply-templates select="avgContrast" /></fo:block> -->
					
				</fo:flow>
			</fo:page-sequence>		
			
		</fo:root>
	</xsl:template>		
	<xsl:template match="type">		
			<xsl:value-of select="type" />
	</xsl:template>
	<xsl:template match="classe">		
			<xsl:value-of select="classType" />
	</xsl:template>
	<xsl:template match="g2">		
			<xsl:value-of select="g2" />
	</xsl:template>
	<xsl:template match="g4">		
			<xsl:value-of select="g4" />
	</xsl:template>
	<xsl:template match="sigmaD2">		
			<xsl:value-of select="sigmaD2" />
	</xsl:template>
	<xsl:template match="gSigmaD">		
			<xsl:value-of select="GSigmaD" />
	</xsl:template>
	<xsl:template match="kamGy">		
			<xsl:value-of select="ksmGy" />
	</xsl:template>
	<xsl:template match="kv120">		
			<xsl:value-of select="kv120" />
	</xsl:template>
	<xsl:template match="isoSpeed">		
			<xsl:value-of select="isoSpeed" />
	</xsl:template>
	<xsl:template match="avgContrast">		
			<xsl:value-of select="avgContrast" />
	</xsl:template>
	<xsl:template match="ir192">		
			<xsl:value-of select="ir192" />
	</xsl:template>
	
	<xsl:template match="br">
      <xsl:value-of select="'&#x2028;'"/>
   </xsl:template>
</xsl:stylesheet>