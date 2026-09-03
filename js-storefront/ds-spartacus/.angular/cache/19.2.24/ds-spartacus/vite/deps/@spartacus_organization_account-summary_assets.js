import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-account-summary-assets.mjs
var orgAccountSummary$g = {
  groupName: "Souhrny účtu",
  header: "Všechny souhrny účtu ({{count}})",
  name: "Jednotka",
  details: {
    header: "Detaily souhrnu zákazníka",
    uid: "ID jednotky",
    name: "Název jednotky",
    address: "Adresa",
    creditRep: "Výkaz úvěru",
    creditLine: "Úvěrový rámec",
    currentBalance: "Aktuální zůstatek",
    openBalance: "Počáteční zůstatek",
    pastDueBalance: "Zůstatek po splatnosti",
    dayRange: "{{minBoundary}}–{{maxBoundary}} d.",
    dayPlus: "{{minBoundary}}a více dní.",
    notApplicable: "irelevantní"
  },
  document: {
    header: "Doklady",
    id: "Číslo dokladu",
    type: "Typ dokladu",
    date: "Vytvořeno",
    dueDate: "Datum splatnosti",
    originalAmount: "Původní částka",
    openAmount: "Otevřená částka",
    status: "Status",
    attachment: "Příloha",
    download: "Stáhnout",
    attachmentDescription: "Stáhnout přílohu pro {{type}} {{id}}.",
    noneFound: "Nebyly nalezeny žádné doklady."
  },
  sorts: {
    byCreatedAtDateAsc: "Datum vytvoření vzestupně",
    byCreatedAtDateDesc: "Datum vytvoření sestupně",
    byDueAtDateAsc: "Datum splatnosti vzestupně",
    byDueAtDateDesc: "Datum splatnosti vzestupně",
    byOriginalAmountAsc: "Původní částka vzestupně",
    byOriginalAmountDesc: "Původní částka vzestupně",
    byOpenAmountAsc: "Otevřená částka vzestupně",
    byOpenAmountDesc: "Otevřená částka sestupně",
    byOrgDocumentTypeAsc: "Typ dokladu vzestupně",
    byOrgDocumentTypeDesc: "Typ dokladu sestupně",
    byStatusAsc: "Status vzestupně",
    byStatusDesc: "Status sestupně",
    byOrgDocumentIdAsc: "Číslo dokladu vzestupně",
    byOrgDocumentIdDesc: "Číslo dokladu sestupně"
  },
  statuses: {
    open: "Otevřeno",
    closed: "Zavřeno",
    all: "Vše"
  },
  filterByOptions: {
    orgDocumentId: "Číslo dokladu",
    orgDocumentIdRange: "Rozsah čísel dokladu",
    orgDocumentType: "Typ dokladu",
    createdAtDateRange: "Rozsah data vytvoření",
    dueAtDateRange: "Rozsah data splatnosti",
    amountRange: "Rozsah původní částky",
    openAmountRange: "Rozsah otevřené částky"
  },
  sortBy: "Řadit podle",
  sortDocuments: "Řadit dokumentu",
  filter: {
    status: "Status",
    filterBy: "Filtrovat podle",
    documentNumber: "Číslo dokladu",
    documentType: "Typ dokladu",
    startRange: "Od",
    endRange: "Do",
    clear: "Vymazat vše",
    search: "Hledat",
    errors: {
      toDateMustComeAfterFrom: "Zvolte koncové datum, které následuje po počátečním.",
      toAmountMustBeLargeThanFrom: "Vyberte koncovou hodnotu rozsahu, která je menší než počáteční hodnota."
    }
  },
  hint: "Souhrny účtů umožňují prohlížet obecné informace o jednotce, včetně zůstatků a souhrnů stárnutí faktur. Můžete zde také procházet seznam transakčních dokladů jednotky."
};
var orgAccountSummaryList$g = {
  breadcrumbs: {
    list: "Souhrny účtu",
    details: "{{name}}"
  }
};
var accountSummary$g = {
  orgAccountSummary: orgAccountSummary$g,
  orgAccountSummaryList: orgAccountSummaryList$g
};
var cs = {
  accountSummary: accountSummary$g
};
var orgAccountSummary$f = {
  groupName: "Kontozusammenfassungen",
  header: "Alle Kontozusammenfassungen ({{count}})",
  name: "Einheit",
  details: {
    header: "Details zur Kontozusammenfassung",
    uid: "Einheits-ID",
    name: "Name der Einheit",
    address: "Adresse",
    creditRep: "Kredit-Rep",
    creditLine: "Kreditlinie",
    currentBalance: "Aktueller Saldo",
    openBalance: "Offener Saldo",
    pastDueBalance: "Überfälliger Saldo",
    dayRange: "{{minBoundary}}-{{maxBoundary}} Tage",
    dayPlus: "{{minBoundary}}+ Tage",
    notApplicable: "k.A."
  },
  document: {
    header: "Belege",
    id: "Belegnummer",
    type: "Belegart",
    date: "Erstellt am",
    dueDate: "Fällig am",
    originalAmount: "Ursprünglicher Betrag",
    openAmount: "Offener Betrag",
    status: "Status",
    attachment: "Anhang",
    download: "Herunterladen",
    attachmentDescription: "Laden Sie den Anhang für {{type}} {{id}} herunter.",
    noneFound: "Keine Belege gefunden"
  },
  sorts: {
    byCreatedAtDateAsc: "Erstellt am (aufsteigend)",
    byCreatedAtDateDesc: "Erstellt am (absteigend)",
    byDueAtDateAsc: "Fällig am (aufsteigend)",
    byDueAtDateDesc: "Fällig am (absteigend)",
    byOriginalAmountAsc: "Ursprünglicher Betrag aufsteigend",
    byOriginalAmountDesc: "Ursprünglicher Betrag absteigend",
    byOpenAmountAsc: "Offener Betrag (aufsteigend)",
    byOpenAmountDesc: "Offener Betrag (absteigend)",
    byOrgDocumentTypeAsc: "Belegart aufsteigend",
    byOrgDocumentTypeDesc: "Belegart absteigend",
    byStatusAsc: "Status (aufsteigend)",
    byStatusDesc: "Status (absteigend)",
    byOrgDocumentIdAsc: "Belegnummer aufsteigend",
    byOrgDocumentIdDesc: "Belegnummer absteigend"
  },
  statuses: {
    open: "Offen",
    closed: "Geschlossen",
    all: "Alle"
  },
  filterByOptions: {
    orgDocumentId: "Belegnummer",
    orgDocumentIdRange: "Nummernkreis für Beleg",
    orgDocumentType: "Belegart",
    createdAtDateRange: "Erstellt am - Bereich",
    dueAtDateRange: "Fällig am - Bereich",
    amountRange: "Ursprünglicher Betrag - Bereich",
    openAmountRange: "Offener Betrag - Bereich"
  },
  sortBy: "Sortieren nach",
  sortDocuments: "Belege sortieren",
  filter: {
    status: "Status",
    filterBy: "Filtern nach",
    documentNumber: "Belegnummer",
    documentType: "Belegart",
    startRange: "Von",
    endRange: "Bis",
    clear: "Alle zurücksetzen",
    search: "Suchen",
    errors: {
      toDateMustComeAfterFrom: "Wählen Sie ein Enddatum, das später als das Startdatum ist.",
      toAmountMustBeLargeThanFrom: "Wählen Sie einen Endbereichswert, der kleiner als der Startwert ist."
    }
  },
  hint: "Mithilfe von Kontozusammenfassungen können Sie allgemeine Informationen über eine Einheit, einschließlich der Salden und Fälligkeitszusammenfassungen von Rechnungen prüfen. Sie können hier auch eine Liste von Transaktionsbelegen für eine Einheit durchsuchen."
};
var orgAccountSummaryList$f = {
  breadcrumbs: {
    list: "Kontozusammenfassungen",
    details: "{{name}}"
  }
};
var accountSummary$f = {
  orgAccountSummary: orgAccountSummary$f,
  orgAccountSummaryList: orgAccountSummaryList$f
};
var de = {
  accountSummary: accountSummary$f
};
var orgAccountSummary$e = {
  groupName: "Account Summaries",
  header: "All Account Summaries ({{count}})",
  name: "Unit",
  details: {
    header: "Account Summary Details",
    uid: "Unit ID",
    name: "Unit Name",
    address: "Address",
    creditRep: "Credit Rep",
    creditLine: "Credit Line",
    currentBalance: "Current Balance",
    openBalance: "Open Balance",
    pastDueBalance: "Past Due Balance",
    dayRange: "{{minBoundary}}-{{maxBoundary}} Days",
    dayPlus: "{{minBoundary}}+ Days",
    notApplicable: "n/a"
  },
  document: {
    header: "Documents",
    id: "Document Number",
    type: "Document Type",
    date: "Created On",
    dueDate: "Due On",
    originalAmount: "Original Amount",
    openAmount: "Open Amount",
    status: "Status",
    attachment: "Attachment",
    download: "Download",
    attachmentDescription: "Download attachment for {{type}} {{id}}.",
    noneFound: "No Documents Found"
  },
  sorts: {
    byCreatedAtDateAsc: "Created On Ascending",
    byCreatedAtDateDesc: "Created On Descending",
    byDueAtDateAsc: "Due On Ascending",
    byDueAtDateDesc: "Due On Descending",
    byOriginalAmountAsc: "Original Amount Ascending",
    byOriginalAmountDesc: "Original Amount Descending",
    byOpenAmountAsc: "Open Amount Ascending",
    byOpenAmountDesc: "Open Amount Descending",
    byOrgDocumentTypeAsc: "Document Type Ascending",
    byOrgDocumentTypeDesc: "Document Type Descending",
    byStatusAsc: "Status Ascending",
    byStatusDesc: "Status Descending",
    byOrgDocumentIdAsc: "Document Number Ascending",
    byOrgDocumentIdDesc: "Document Number Descending"
  },
  statuses: {
    open: "Open",
    closed: "Closed",
    all: "All"
  },
  filterByOptions: {
    orgDocumentId: "Document Number",
    orgDocumentIdRange: "Document Number Range",
    orgDocumentType: "Document Type",
    createdAtDateRange: "Created On Range",
    dueAtDateRange: "Due On Range",
    amountRange: "Original Amount Range",
    openAmountRange: "Open Amount Range"
  },
  sortBy: "Sort By",
  sortDocuments: "Sort documents",
  filter: {
    status: "Status",
    filterBy: "Filter By",
    documentNumber: "Document Number",
    documentType: "Document Type",
    startRange: "From",
    endRange: "To",
    clear: "Clear All",
    search: "Search",
    errors: {
      toDateMustComeAfterFrom: "Choose an end date that's later than the start date.",
      toAmountMustBeLargeThanFrom: "Choose an end range value that's smaller than the start value."
    }
  },
  hint: "Account summaries allow you to review general information about a unit, including balances and aging summary of invoices. Here, you can also browse through a list of transaction documents for a unit."
};
var orgAccountSummaryList$e = {
  breadcrumbs: {
    list: "Account Summaries",
    details: "{{name}}"
  }
};
var accountSummary$e = {
  orgAccountSummary: orgAccountSummary$e,
  orgAccountSummaryList: orgAccountSummaryList$e
};
var en = {
  accountSummary: accountSummary$e
};
var orgAccountSummary$d = {
  groupName: "Resúmenes de cuenta",
  header: "Todos los resúmenes de cuenta ({{count}})",
  name: "Unidad",
  details: {
    header: "Detalles de resúmenes de cuenta",
    uid: "ID de unidad",
    name: "Nombre de unidad",
    address: "Dirección",
    creditRep: "Informe de crédito",
    creditLine: "Línea de crédito",
    currentBalance: "Saldo actual",
    openBalance: "Saldo pendiente",
    pastDueBalance: "Saldo adeudado",
    dayRange: "{{minBoundary}}-{{maxBoundary}} días",
    dayPlus: "+{{minBoundary}} días",
    notApplicable: "n/d"
  },
  document: {
    header: "Documentos",
    id: "Número de documento",
    type: "Tipo de documento",
    date: "Fecha de creación",
    dueDate: "Con vencimiento el",
    originalAmount: "Importe original",
    openAmount: "Importe pendiente",
    status: "Estado",
    attachment: "Adjunto",
    download: "Descargar",
    attachmentDescription: "Descargar adjuntos para {{type}} {{id}}.",
    noneFound: "No se encontró ningún documento"
  },
  sorts: {
    byCreatedAtDateAsc: "Creado en forma ascendente",
    byCreatedAtDateDesc: "Creado en forma descendente",
    byDueAtDateAsc: "Con vencimiento en ascendente",
    byDueAtDateDesc: "Con vencimiento en descendente",
    byOriginalAmountAsc: "Monto original ascendente",
    byOriginalAmountDesc: "Monto original descendente",
    byOpenAmountAsc: "Monto ascendente pendiente",
    byOpenAmountDesc: "Monto descendente pendiente",
    byOrgDocumentTypeAsc: "Tipo de documento ascendente",
    byOrgDocumentTypeDesc: "Tipo de documento descendente",
    byStatusAsc: "Estado ascendente",
    byStatusDesc: "Estado descendente",
    byOrgDocumentIdAsc: "Número de documento ascendente",
    byOrgDocumentIdDesc: "Número de documento descendente"
  },
  statuses: {
    open: "Abierto",
    closed: "Cerrado",
    all: "Todo"
  },
  filterByOptions: {
    orgDocumentId: "Número de documento",
    orgDocumentIdRange: "Rango de número de documento",
    orgDocumentType: "Tipo de documento",
    createdAtDateRange: "Rango creado el",
    dueAtDateRange: "Rango con vencimiento",
    amountRange: "Rango de importe original",
    openAmountRange: "Rango de importe pendiente"
  },
  sortBy: "Clasificado por",
  sortDocuments: "Clasificar documentos",
  filter: {
    status: "Estado",
    filterBy: "Filtrar por",
    documentNumber: "Número de documento",
    documentType: "Tipo de documento",
    startRange: "De",
    endRange: "A",
    clear: "Borrar todo",
    search: "Buscar",
    errors: {
      toDateMustComeAfterFrom: "Seleccione una fecha final que sea posterior a la fecha de inicio.",
      toAmountMustBeLargeThanFrom: "Seleccione un valor de rango final que sea menor que el valor inicial."
    }
  },
  hint: "Los resúmenes de cuenta le permiten revisar información general sobre una unidad, incluidos los saldos y el resumen de antigüedad de las facturas. Aquí también puede explorar una lista de documentos de transacciones de una unidad."
};
var orgAccountSummaryList$d = {
  breadcrumbs: {
    list: "Resúmenes de cuenta",
    details: "{{name}}"
  }
};
var accountSummary$d = {
  orgAccountSummary: orgAccountSummary$d,
  orgAccountSummaryList: orgAccountSummaryList$d
};
var es = {
  accountSummary: accountSummary$d
};
var orgAccountSummary$c = {
  groupName: "Resúmenes de cuentas",
  header: "Todos los resúmenes de cuentas ({{count}})",
  name: "Unidad",
  details: {
    header: "Datos del resumen de cuenta",
    uid: "ID de unidad",
    name: "Nombre de unidad",
    address: "Dirección",
    creditRep: "Informe de crédito",
    creditLine: "Línea de crédito",
    currentBalance: "Saldo actual",
    openBalance: "Saldo pendiente",
    pastDueBalance: "Saldo atrasado",
    dayRange: "{{minBoundary}}-{{maxBoundary}} días",
    dayPlus: "+{{minBoundary}} días",
    notApplicable: "n/d"
  },
  document: {
    header: "Documentos",
    id: "Número de documento",
    type: "Tipo de documento",
    date: "Fecha de creación",
    dueDate: "Con vencimiento el",
    originalAmount: "Importe original",
    openAmount: "Importe pendiente",
    status: "Estado",
    attachment: "Adjunto",
    download: "Descargar",
    attachmentDescription: "Descargar adjunto para {{type}} {{id}}.",
    noneFound: "No se encontró ningún documento"
  },
  sorts: {
    byCreatedAtDateAsc: "Creado en forma ascendente",
    byCreatedAtDateDesc: "Creado en forma descendente",
    byDueAtDateAsc: "Con vencimiento en ascendente",
    byDueAtDateDesc: "Con vencimiento en descendente",
    byOriginalAmountAsc: "Monto original ascendente",
    byOriginalAmountDesc: "Monto original descendente",
    byOpenAmountAsc: "Monto ascendente pendiente",
    byOpenAmountDesc: "Monto descendente pendiente",
    byOrgDocumentTypeAsc: "Tipo de documento ascendente",
    byOrgDocumentTypeDesc: "Tipo de documento descendente",
    byStatusAsc: "Estado ascendente",
    byStatusDesc: "Estado descendente",
    byOrgDocumentIdAsc: "Número de documento ascendente",
    byOrgDocumentIdDesc: "Número de documento descendente"
  },
  statuses: {
    open: "Abierto",
    closed: "Cerrado",
    all: "Todos"
  },
  filterByOptions: {
    orgDocumentId: "Número de documento",
    orgDocumentIdRange: "Rango de número de documento",
    orgDocumentType: "Tipo de documento",
    createdAtDateRange: "Rango creado el",
    dueAtDateRange: "Rango con vencimiento",
    amountRange: "Rango de importe original",
    openAmountRange: "Rango de importe pendiente"
  },
  sortBy: "Clasificado por",
  sortDocuments: "Clasificar documentos",
  filter: {
    status: "Estado",
    filterBy: "Filtrar por",
    documentNumber: "Número de documento",
    documentType: "Tipo de documento",
    startRange: "De",
    endRange: "A",
    clear: "Borrar todo",
    search: "Buscar",
    errors: {
      toDateMustComeAfterFrom: "Elija una fecha de cierre que sea posterior a la fecha de inicio.",
      toAmountMustBeLargeThanFrom: "Elija un valor de rango final que sea menor que el valor inicial."
    }
  },
  hint: "Los resúmenes de cuentas le permiten revisar información general sobre una unidad, incluidos los saldos y el resumen de antigüedad de las facturas. Aquí también puede explorar una lista de documentos de transacciones de una unidad."
};
var orgAccountSummaryList$c = {
  breadcrumbs: {
    list: "Resúmenes de cuentas",
    details: "{{name}}"
  }
};
var accountSummary$c = {
  orgAccountSummary: orgAccountSummary$c,
  orgAccountSummaryList: orgAccountSummaryList$c
};
var es_CO = {
  accountSummary: accountSummary$c
};
var orgAccountSummary$b = {
  groupName: "Récapitulatifs de comptes",
  header: "Tous les récapitulatifs de comptes ({{count}})",
  name: "Unité",
  details: {
    header: "Détails du récapitulatif du compte",
    uid: "ID de l'unité",
    name: "Nom de l'unité",
    address: "Adresse",
    creditRep: "Rapport de solvabilité",
    creditLine: "Marge de crédit",
    currentBalance: "Solde actuel",
    openBalance: "Solde non utilisé",
    pastDueBalance: "Ancien solde dû",
    dayRange: "{{minBoundary}}-{{maxBoundary}} jours",
    dayPlus: "{{minBoundary}}+ jours",
    notApplicable: "non applicable"
  },
  document: {
    header: "Documents",
    id: "Numéro de document",
    type: "Type de document",
    date: "Créé le",
    dueDate: "Dû le",
    originalAmount: "Montant d'origine",
    openAmount: "Montant en suspens",
    status: "Statut",
    attachment: "Pièce jointe",
    download: "Télécharger",
    attachmentDescription: "Télécharger la pièce jointe pour {{type}} {{id}}",
    noneFound: "Aucun document trouvé"
  },
  sorts: {
    byCreatedAtDateAsc: "Créé le (croissant)",
    byCreatedAtDateDesc: "Créé le (décroissant)",
    byDueAtDateAsc: "Dû le (croissant)",
    byDueAtDateDesc: "Dû le (décroissant)",
    byOriginalAmountAsc: "Montant d'origine (croissant)",
    byOriginalAmountDesc: "Montant d'origine (décroissant)",
    byOpenAmountAsc: "Montant en suspens (croissant)",
    byOpenAmountDesc: "Montant en suspens (décroissant)",
    byOrgDocumentTypeAsc: "Type de document (croissant)",
    byOrgDocumentTypeDesc: "Type de document (décroissant)",
    byStatusAsc: "Statut (croissant)",
    byStatusDesc: "Statut (décroissant)",
    byOrgDocumentIdAsc: "Numéro de document (croissant)",
    byOrgDocumentIdDesc: "Numéro de document (décroissant)"
  },
  statuses: {
    open: "En cours",
    closed: "Fermé",
    all: "Tous"
  },
  filterByOptions: {
    orgDocumentId: "Numéro de document",
    orgDocumentIdRange: "Numéro de document (intervalle)",
    orgDocumentType: "Type de document",
    createdAtDateRange: "Créé le (intervalle)",
    dueAtDateRange: "Dû le (intervalle)",
    amountRange: "Montant d'origine (intervalle)",
    openAmountRange: "Montant en suspens (intervalle)"
  },
  sortBy: "Trier par",
  sortDocuments: "Trier les documents",
  filter: {
    status: "Statut",
    filterBy: "Filtrer par",
    documentNumber: "Numéro de document",
    documentType: "Type de document",
    startRange: "De",
    endRange: "À",
    clear: "Effacer tout",
    search: "Rechercher",
    errors: {
      toDateMustComeAfterFrom: "Sélectionnez une date de fin postérieure à la date de début.",
      toAmountMustBeLargeThanFrom: "Sélectionnez une valeur d'intervalle de fin inférieure à la valeur de début."
    }
  },
  hint: "Les récapitulatifs de comptes vous permettent de consulter des informations générales sur une unité, y compris les soldes et le récapitulatif chronologique des factures. Vous pouvez également parcourir la liste des documents de transaction d'une unité."
};
var orgAccountSummaryList$b = {
  breadcrumbs: {
    list: "Récapitulatifs de comptes",
    details: "{{name}}"
  }
};
var accountSummary$b = {
  orgAccountSummary: orgAccountSummary$b,
  orgAccountSummaryList: orgAccountSummaryList$b
};
var fr = {
  accountSummary: accountSummary$b
};
var orgAccountSummary$a = {
  groupName: "खाता सारांश",
  header: "सभी खातों का सारांश ({{count}})",
  name: "इकाई",
  details: {
    header: "खाता सारांश विवरण",
    uid: "इकाई ID",
    name: "इकाई का नाम",
    address: "पता",
    creditRep: "क्रेडिट रिपोर्ट",
    creditLine: "क्रेडिट लाइन",
    currentBalance: "वर्तमान शेष राशि",
    openBalance: "आदिशेष",
    pastDueBalance: "पूर्व देय राशि:",
    dayRange: "{{minBoundary}}-{{maxBoundary}} दिवस",
    dayPlus: "{{minBoundary}}+ दिवस",
    notApplicable: "लागू नहीं है"
  },
  document: {
    header: "दस्तावेज़",
    id: "दस्तावेज संख्या",
    type: "दस्तावेज़ प्रकार",
    date: "निर्माण दिनांक",
    dueDate: "नियत दिनांक",
    originalAmount: "मूल राशि",
    openAmount: "खुली राशि",
    status: "स्थिति",
    attachment: "संलग्नक",
    download: "डाउनलोड करें",
    attachmentDescription: "{{type}} {{id}} के लिए अनुलग्नक डाउनलोड करें",
    noneFound: "कोई दस्तावेज़ नहीं मिले"
  },
  sorts: {
    byCreatedAtDateAsc: "आरोही पर बनाए गए",
    byCreatedAtDateDesc: "अवरोही पर बनाए गए",
    byDueAtDateAsc: "आरोही पर देय",
    byDueAtDateDesc: "अवरोही पर देय",
    byOriginalAmountAsc: "आरोही क्रम में मूल राशि",
    byOriginalAmountDesc: "अवरोही क्रम में मूल राशि",
    byOpenAmountAsc: "मुक्त राशि आरोही",
    byOpenAmountDesc: "मुक्त राशि अवरोही",
    byOrgDocumentTypeAsc: "दस्तावेज़ प्रकार आरोही",
    byOrgDocumentTypeDesc: "दस्तावेज़ प्रकार अवरोही",
    byStatusAsc: "स्थिति आरोही",
    byStatusDesc: "स्थिति अवरोही",
    byOrgDocumentIdAsc: "दस्तावेज़ संख्या आरोही",
    byOrgDocumentIdDesc: "दस्तावेज़ संख्या अवरोही"
  },
  statuses: {
    open: "खोलें",
    closed: "बंद है",
    all: "सभी"
  },
  filterByOptions: {
    orgDocumentId: "दस्तावेज संख्या",
    orgDocumentIdRange: "दस्तावेज संख्या श्रेणी",
    orgDocumentType: "दस्तावेज़ प्रकार",
    createdAtDateRange: "निर्माण दिनांक श्रेणी",
    dueAtDateRange: "देय दिनांक श्रेणी",
    amountRange: "मूल राशि श्रेणी",
    openAmountRange: "मुक्त राशि श्रेणी"
  },
  sortBy: "इसके द्वारा क्रमित",
  sortDocuments: "दस्तावेज़ क्रमित करें",
  filter: {
    status: "स्थिति",
    filterBy: "इसके द्वारा फ़िल्टर",
    documentNumber: "दस्तावेज संख्या",
    documentType: "दस्तावेज़ प्रकार",
    startRange: "इससे",
    endRange: "इस तक",
    clear: "सब साफ़ करें",
    search: "खोजें",
    errors: {
      toDateMustComeAfterFrom: "एक समाप्ति दिनांक चुनें जो प्रारंभ दिनांक के बाद की हो.",
      toAmountMustBeLargeThanFrom: "एक समाप्ति श्रेणी मान चुनें जो प्रारंभ मान से छोटा हो."
    }
  },
  hint: "खाता सारांश आपको इकाई के बारे में सामान्य जानकारी की समीक्षा करने की अनुमति देता है, जिसमें चालानों की शेष राशी और एजिंग सारांश शामिल है. यहां, आप किसी इकाई के लिए लेनदेन दस्तावेज़ों की सूची द्वारा भी ब्राउज़ कर सकते हैं."
};
var orgAccountSummaryList$a = {
  breadcrumbs: {
    list: "खाता सारांश",
    details: "{{name}}"
  }
};
var accountSummary$a = {
  orgAccountSummary: orgAccountSummary$a,
  orgAccountSummaryList: orgAccountSummaryList$a
};
var hi = {
  accountSummary: accountSummary$a
};
var orgAccountSummary$9 = {
  groupName: "Számlaösszegzések",
  header: "Összes számlaösszegzés ({{count}})",
  name: "Egység",
  details: {
    header: "Számlaösszegzés részletei",
    uid: "Egység azonosítója",
    name: "Egység neve",
    address: "Cím",
    creditRep: "Információ",
    creditLine: "Hitelkeret",
    currentBalance: "Jelenlegi egyenleg",
    openBalance: "Nyitott egyenleg",
    pastDueBalance: "Lejárt esedékességű egyenleg",
    dayRange: "{{minBoundary}}–{{maxBoundary}} nap",
    dayPlus: "{{minBoundary}}+ nap",
    notApplicable: "N/A"
  },
  document: {
    header: "Dokumentumok",
    id: "Dokumentumszám",
    type: "Dokumentumtípus",
    date: "Létrehozás dátuma",
    dueDate: "Esedékesség napja",
    originalAmount: "Eredeti összeg",
    openAmount: "Nyitott összeg",
    status: "Státus",
    attachment: "Csatolmány",
    download: "Letöltés",
    attachmentDescription: "Csatolmány letöltése a következőhöz: {{type}} {{id}}.",
    noneFound: "Nem található dokumentum"
  },
  sorts: {
    byCreatedAtDateAsc: "Létrehozás dátuma szerint növekvő",
    byCreatedAtDateDesc: "Létrehozás dátuma szerint csökkenő",
    byDueAtDateAsc: "Esedékesség szerint növekvő",
    byDueAtDateDesc: "Esedékesség szerint csökkenő",
    byOriginalAmountAsc: "Eredeti összeg szerint növekvő",
    byOriginalAmountDesc: "Eredeti összeg szerint csökkenő",
    byOpenAmountAsc: "Nyitott összeg szerint növekvő",
    byOpenAmountDesc: "Nyitott összeg szerint csökkenő",
    byOrgDocumentTypeAsc: "Dokumentumtípus szerint növekvő",
    byOrgDocumentTypeDesc: "Dokumentumtípus szerint csökkenő",
    byStatusAsc: "Státus szerint növekvő",
    byStatusDesc: "Státus szerint csökkenő",
    byOrgDocumentIdAsc: "Dokumentumszám szerint növekvő",
    byOrgDocumentIdDesc: "Dokumentumszám szerint csökkenő"
  },
  statuses: {
    open: "Nyitott",
    closed: "Lezárt",
    all: "Összes"
  },
  filterByOptions: {
    orgDocumentId: "Dokumentumszám",
    orgDocumentIdRange: "Dokumentumszám-tartomány",
    orgDocumentType: "Dokumentumtípus",
    createdAtDateRange: "Létrehozás tartománya",
    dueAtDateRange: "Esedékesség tartománya",
    amountRange: "Eredeti összeg tartománya",
    openAmountRange: "Nyitott összeg tartománya"
  },
  sortBy: "Rendezés alapja",
  sortDocuments: "Dokumentumok rendezése",
  filter: {
    status: "Státus",
    filterBy: "Szűrés szempontja",
    documentNumber: "Dokumentumszám",
    documentType: "Dokumentumtípus",
    startRange: "Ettől:",
    endRange: "Eddig:",
    clear: "Összes törlése",
    search: "Keresés",
    errors: {
      toDateMustComeAfterFrom: "Olyan dátumot válasszon befejezési dátumként, amely későbbi a kezdési dátumnál.",
      toAmountMustBeLargeThanFrom: "Olyan értéket válasszon befejezési tartományként, amely kisebb a kezdési értéknél."
    }
  },
  hint: "A számlaösszegzések lehetővé teszik, hogy ellenőrizze egy egység általános információit, beleértve az egyenlegeket és a számlák lejáratának összesítését. Ezen felül itt tekintheti meg az egységek tranzakciós dokumentumainak listáját is."
};
var orgAccountSummaryList$9 = {
  breadcrumbs: {
    list: "Számlaösszegzések",
    details: "{{name}}"
  }
};
var accountSummary$9 = {
  orgAccountSummary: orgAccountSummary$9,
  orgAccountSummaryList: orgAccountSummaryList$9
};
var hu = {
  accountSummary: accountSummary$9
};
var orgAccountSummary$8 = {
  groupName: "Ringkasan Akun",
  header: "Semua Ringkasan Akun ({{count}})",
  name: "Unit",
  details: {
    header: "Rincian Ringkasan Akun",
    uid: "ID Unit",
    name: "Nama Unit",
    address: "Alamat",
    creditRep: "Perwakilan Kredit",
    creditLine: "Batas Kredit",
    currentBalance: "Saldo Saat Ini",
    openBalance: "Saldo Belum Dibayar",
    pastDueBalance: "Saldo Jatuh Tempo",
    dayRange: "{{minBoundary}}-{{maxBoundary}} Hari",
    dayPlus: "{{minBoundary}}+ Hari",
    notApplicable: "tidak ada"
  },
  document: {
    header: "Dokumen",
    id: "Nomor Dokumen",
    type: "Tipe Dokumen",
    date: "Dibuat Pada",
    dueDate: "Jatuh Tempo Pada",
    originalAmount: "Jumlah Awal",
    openAmount: "Jumlah Yang Belum Dibayar",
    status: "Status",
    attachment: "Lampiran",
    download: "Unduh",
    attachmentDescription: "Unduh lampiran untuk {{type}}{{id}}.",
    noneFound: "Tidak Ditemukan Dokumen"
  },
  sorts: {
    byCreatedAtDateAsc: "Dibuat Pada Urutan Naik",
    byCreatedAtDateDesc: "Dibuat Pada Urutan Turun",
    byDueAtDateAsc: "Jatuh Tempo Dengan Urutan Naik",
    byDueAtDateDesc: "Jatuh Tempo Dengan Urutan Turun",
    byOriginalAmountAsc: "Jumlah Awal Dengan Urutan Naik",
    byOriginalAmountDesc: "Jumlah Awal Dengan Urutan Turun",
    byOpenAmountAsc: "Jumlah Yang Belum Dibayar Dengan Urutan Naik",
    byOpenAmountDesc: "Jumlah Yang Belum Dibayar Dengan Urutan Turun",
    byOrgDocumentTypeAsc: "Tipe Dokumen Dengan Urutan Naik",
    byOrgDocumentTypeDesc: "Tipe Dokumen Dengan Urutan Turun",
    byStatusAsc: "Status Dengan Urutan Naik",
    byStatusDesc: "Status Dengan Urutan Turun",
    byOrgDocumentIdAsc: "Nomor Dokumen Dengan Urutan Naik",
    byOrgDocumentIdDesc: "Nomor Dokumen Dengan Urutan Turun"
  },
  statuses: {
    open: "Terbuka",
    closed: "Tertutup",
    all: "Semua"
  },
  filterByOptions: {
    orgDocumentId: "Nomor Dokumen",
    orgDocumentIdRange: "Rentang Nomor Dokumen",
    orgDocumentType: "Tipe Dokumen",
    createdAtDateRange: "Rentang Dibuat Pada",
    dueAtDateRange: "Rentang Jatuh Tempo Pada",
    amountRange: "Rentang Jumlah Awal",
    openAmountRange: "Rentang Jumlah yang Belum Dibayar"
  },
  sortBy: "Urutkan Berdasarkan",
  sortDocuments: "Urutkan dokumen",
  filter: {
    status: "Status",
    filterBy: "Filter Berdasarkan",
    documentNumber: "Nomor Dokumen",
    documentType: "Tipe Dokumen",
    startRange: "Dari",
    endRange: "Hingga",
    clear: "Hapus Semua",
    search: "Cari",
    errors: {
      toDateMustComeAfterFrom: "Pilih tanggal berakhir yang lebih besar dari tanggal mulai.",
      toAmountMustBeLargeThanFrom: "Pilih nilai akhir rentang yang lebih kecil dari nilai awal."
    }
  },
  hint: "Ringkasan akun memungkinkan Anda untuk meninjau informasi umum tentang unit, termasuk saldo dan ringkasan lamanya tagihan. Anda juga dapat menjelajahi seluruh daftar dokumen transaksi untuk suatu unit."
};
var orgAccountSummaryList$8 = {
  breadcrumbs: {
    list: "Ringkasan Akun",
    details: "{{name}}"
  }
};
var accountSummary$8 = {
  orgAccountSummary: orgAccountSummary$8,
  orgAccountSummaryList: orgAccountSummaryList$8
};
var id = {
  accountSummary: accountSummary$8
};
var orgAccountSummary$7 = {
  groupName: "Riepiloghi account",
  header: "Tutti i riepiloghi account ({{count}})",
  name: "Unità",
  details: {
    header: "Dettagli riepilogo account",
    uid: "ID unità",
    name: "Nome unità",
    address: "Indirizzo",
    creditRep: "Rapp. crediti",
    creditLine: "Linea di credito",
    currentBalance: "Saldo attuale",
    openBalance: "Saldo aperto",
    pastDueBalance: "Saldo scaduto",
    dayRange: "{{minBoundary}}-{{maxBoundary}} giorni",
    dayPlus: "{{minBoundary}}+ giorni",
    notApplicable: "n/a"
  },
  document: {
    header: "Documenti",
    id: "Numero documento",
    type: "Tipo di documento",
    date: "Data di creazione",
    dueDate: "Data scadenza",
    originalAmount: "Importo originale",
    openAmount: "Importo aperto",
    status: "Stato",
    attachment: "Allegato",
    download: "Scarica",
    attachmentDescription: "Scarica allegato per {{type}} {{id}}.",
    noneFound: "Nessun documento trovato"
  },
  sorts: {
    byCreatedAtDateAsc: "Data di creazione (in ordine crescente)",
    byCreatedAtDateDesc: "Data di creazione (in ordine decrescente)",
    byDueAtDateAsc: "Data scadenza (in ordine crescente)",
    byDueAtDateDesc: "Data scadenza (in ordine decrescente)",
    byOriginalAmountAsc: "Importo originale (in ordine crescente)",
    byOriginalAmountDesc: "Importo originale (in ordine decrescente)",
    byOpenAmountAsc: "Importo aperto (in ordine crescente)",
    byOpenAmountDesc: "Importo aperto (in ordine decrescente)",
    byOrgDocumentTypeAsc: "Tipo di documento (in ordine crescente)",
    byOrgDocumentTypeDesc: "Tipo di documento (in ordine decrescente)",
    byStatusAsc: "Stato (in ordine crescente)",
    byStatusDesc: "Stato (in ordine decrescente)",
    byOrgDocumentIdAsc: "Numero documento (in ordine crescente)",
    byOrgDocumentIdDesc: "Numero documento (in ordine decrescente)"
  },
  statuses: {
    open: "Aperto",
    closed: "Chiuso",
    all: "Tutto"
  },
  filterByOptions: {
    orgDocumentId: "Numero documento",
    orgDocumentIdRange: "Intervallo numero documento",
    orgDocumentType: "Tipo di documento",
    createdAtDateRange: "Intervallo data di creazione",
    dueAtDateRange: "Intervallo data scadenza",
    amountRange: "Intervallo importo originale",
    openAmountRange: "Intervallo importo aperto"
  },
  sortBy: "Ordina per",
  sortDocuments: "Ordina documenti",
  filter: {
    status: "Stato",
    filterBy: "Filtra per",
    documentNumber: "Numero documento",
    documentType: "Tipo di documento",
    startRange: "Da",
    endRange: "A",
    clear: "Cancella tutto",
    search: "Cerca",
    errors: {
      toDateMustComeAfterFrom: "Scegliere una data di fine successiva alla data di inizio.",
      toAmountMustBeLargeThanFrom: "Scegliere un valore di fine intervallo inferiore al valore di inizio."
    }
  },
  hint: "I riepiloghi di account consentono di rivedere le informazioni generali di un'unità, compresi riepilogo delle scadenze e saldi delle fatture. Qui è anche possibile sfogliare una lista di documenti di transazione per un'unità."
};
var orgAccountSummaryList$7 = {
  breadcrumbs: {
    list: "Riepiloghi account",
    details: "{{name}}"
  }
};
var accountSummary$7 = {
  orgAccountSummary: orgAccountSummary$7,
  orgAccountSummaryList: orgAccountSummaryList$7
};
var it = {
  accountSummary: accountSummary$7
};
var orgAccountSummary$6 = {
  groupName: "アカウント概要",
  header: "すべてのアカウント概要 ({{count}})",
  name: "ユニット",
  details: {
    header: "アカウント概要の詳細",
    uid: "ユニット ID",
    name: "ユニット名",
    address: "住所",
    creditRep: "信用報告書",
    creditLine: "与信限度額",
    currentBalance: "現在の残高",
    openBalance: "開始残高",
    pastDueBalance: "未払い残高",
    dayRange: "{{minBoundary}}-{{maxBoundary}} 日間",
    dayPlus: "{{minBoundary}}+ 日間",
    notApplicable: "なし"
  },
  document: {
    header: "文書",
    id: "文書番号",
    type: "文書タイプ",
    date: "作成日付",
    dueDate: "期限日",
    originalAmount: "元の金額",
    openAmount: "未処理金額",
    status: "ステータス",
    attachment: "添付ファイル",
    download: "ダウンロード",
    attachmentDescription: "{{type}} {{id}} の添付ファイルをダウンロードします。",
    noneFound: "文書がみつかりません"
  },
  sorts: {
    byCreatedAtDateAsc: "作成日付 (昇順)",
    byCreatedAtDateDesc: "作成日付 (降順)",
    byDueAtDateAsc: "期限日 (昇順)",
    byDueAtDateDesc: "期限日 (降順)",
    byOriginalAmountAsc: "元の金額 (昇順)",
    byOriginalAmountDesc: "元の金額 (降順)",
    byOpenAmountAsc: "未処理金額 (昇順)",
    byOpenAmountDesc: "未処理金額 (降順)",
    byOrgDocumentTypeAsc: "文書タイプ (昇順)",
    byOrgDocumentTypeDesc: "文書タイプ (降順)",
    byStatusAsc: "ステータス (昇順)",
    byStatusDesc: "ステータス (降順)",
    byOrgDocumentIdAsc: "文書番号 (昇順)",
    byOrgDocumentIdDesc: "文書番号 (降順)"
  },
  statuses: {
    open: "未処理",
    closed: "処理済み",
    all: "すべて"
  },
  filterByOptions: {
    orgDocumentId: "文書番号",
    orgDocumentIdRange: "文書番号範囲",
    orgDocumentType: "文書タイプ",
    createdAtDateRange: "作成日付範囲",
    dueAtDateRange: "期限日範囲",
    amountRange: "元の金額範囲",
    openAmountRange: "未処理金額範囲"
  },
  sortBy: "ソート基準",
  sortDocuments: "ソートの文書",
  filter: {
    status: "ステータス",
    filterBy: "フィルタ基準",
    documentNumber: "文書番号",
    documentType: "文書タイプ",
    startRange: "開始",
    endRange: "終了",
    clear: "すべてクリア",
    search: "検索",
    errors: {
      toDateMustComeAfterFrom: "開始日より後の終了日を選択します。",
      toAmountMustBeLargeThanFrom: "開始値よりも小さな終了範囲値を選択します"
    }
  },
  hint: "アカウント概要では残高や請求書概要の時間経過を含むユニットについての一般情報をレビューできます。ユニットのトランザクション文書を一覧で表示することもできます。"
};
var orgAccountSummaryList$6 = {
  breadcrumbs: {
    list: "アカウント概要",
    details: "{{name}}"
  }
};
var accountSummary$6 = {
  orgAccountSummary: orgAccountSummary$6,
  orgAccountSummaryList: orgAccountSummaryList$6
};
var ja = {
  accountSummary: accountSummary$6
};
var orgAccountSummary$5 = {
  groupName: "계정 요약",
  header: "모든 계정 요약({{count}})",
  name: "단위",
  details: {
    header: "계정 요약 세부사항",
    uid: "단위 ID",
    name: "단위 이름",
    address: "주소",
    creditRep: "신용 담당자",
    creditLine: "신용 한도",
    currentBalance: "현재 잔액",
    openBalance: "미수금",
    pastDueBalance: "기한 경과 잔액",
    dayRange: "{{minBoundary}}-{{maxBoundary}}일",
    dayPlus: "{{minBoundary}}+일",
    notApplicable: "해당 없음"
  },
  document: {
    header: "문서",
    id: "문서 번호",
    type: "문서 유형",
    date: "작성 날짜",
    dueDate: "만기일",
    originalAmount: "원래 금액",
    openAmount: "미결 금액",
    status: "상태",
    attachment: "첨부 파일",
    download: "다운로드",
    attachmentDescription: "{{type}} {{id}}의 첨부 파일 다운로드.",
    noneFound: "문서가 없습니다."
  },
  sorts: {
    byCreatedAtDateAsc: "작성 날짜(오름차순)",
    byCreatedAtDateDesc: "작성 날짜(내림차순)",
    byDueAtDateAsc: "만기일(오름차순)",
    byDueAtDateDesc: "만기일(내림차순)",
    byOriginalAmountAsc: "원래 금액(오름차순)",
    byOriginalAmountDesc: "원래 금액(내림차순)",
    byOpenAmountAsc: "미결 금액(오름차순)",
    byOpenAmountDesc: "미결 금액(내림차순)",
    byOrgDocumentTypeAsc: "문서 유형(오름차순)",
    byOrgDocumentTypeDesc: "문서 유형(내림차순)",
    byStatusAsc: "상태(오름차순)",
    byStatusDesc: "상태(내림차순)",
    byOrgDocumentIdAsc: "문서 번호(오름차순)",
    byOrgDocumentIdDesc: "문서 번호(내림차순)"
  },
  statuses: {
    open: "미결",
    closed: "종료됨",
    all: "모두"
  },
  filterByOptions: {
    orgDocumentId: "문서 번호",
    orgDocumentIdRange: "문서 번호",
    orgDocumentType: "문서 유형",
    createdAtDateRange: "작성 날짜 범위",
    dueAtDateRange: "만기일 범위",
    amountRange: "원래 금액 범위",
    openAmountRange: "미결 금액 범위"
  },
  sortBy: "정렬 기준",
  sortDocuments: "문서 정렬",
  filter: {
    status: "상태",
    filterBy: "필터 기준",
    documentNumber: "문서 번호",
    documentType: "문서 유형",
    startRange: "시작",
    endRange: "끝",
    clear: "모두 지우기",
    search: "검색",
    errors: {
      toDateMustComeAfterFrom: "시작 날짜보다 나중인 종료 날짜를 선택하십시오.",
      toAmountMustBeLargeThanFrom: "시작 값보다 작은 끝 범위 값을 선택하십시오."
    }
  },
  hint: "계정 요약에서 잔액과 송장 내역 요약 등 단위에 대한 일반적인 정보를 확인할 수 있습니다. 여기서 단위의 거래 문서 리스트를 볼 수도 있습니다."
};
var orgAccountSummaryList$5 = {
  breadcrumbs: {
    list: "계정 요약",
    details: "{{name}}"
  }
};
var accountSummary$5 = {
  orgAccountSummary: orgAccountSummary$5,
  orgAccountSummaryList: orgAccountSummaryList$5
};
var ko = {
  accountSummary: accountSummary$5
};
var orgAccountSummary$4 = {
  groupName: "Podsumowania kont",
  header: "Wszystkie podsumowania kont ({{count}})",
  name: "Jednostka",
  details: {
    header: "Szczegóły podsumowania konta",
    uid: "ID jednostki",
    name: "Nazwa jednostki",
    address: "Adres",
    creditRep: "Ref. ds. kredytów",
    creditLine: "Linia kredytowa",
    currentBalance: "Bieżące saldo",
    openBalance: "Nierozliczone saldo",
    pastDueBalance: "Zaległe saldo",
    dayRange: "{{minBoundary}}-{{maxBoundary}} dni",
    dayPlus: "{{minBoundary}}+ dni",
    notApplicable: "Nie dotyczy"
  },
  document: {
    header: "Dokumenty",
    id: "Numer dokumentu",
    type: "Typ dokumentu",
    date: "Data utworzenia",
    dueDate: "Termin",
    originalAmount: "Pierwotna kwota",
    openAmount: "Kwota nierozliczona",
    status: "Status",
    attachment: "Załącznik",
    download: "Pobierz",
    attachmentDescription: "Pobierz załącznik dla {{type}} {{id}}.",
    noneFound: "Nie znaleziono dokumentów"
  },
  sorts: {
    byCreatedAtDateAsc: "Data utworzenia rosnąco",
    byCreatedAtDateDesc: "Data utworzenia malejąco",
    byDueAtDateAsc: "Termin rosnąco",
    byDueAtDateDesc: "Termin malejąco",
    byOriginalAmountAsc: "Kwota pierwotna rosnąco",
    byOriginalAmountDesc: "Kwota pierwotna malejąco",
    byOpenAmountAsc: "Kwota nierozliczona rosnąco",
    byOpenAmountDesc: "Kwota nierozliczona malejąco",
    byOrgDocumentTypeAsc: "Typ dokumentu rosnąco",
    byOrgDocumentTypeDesc: "Typ dokumentu malejąco",
    byStatusAsc: "Status rosnąco",
    byStatusDesc: "Status malejąco",
    byOrgDocumentIdAsc: "Numer dokumentu rosnąco",
    byOrgDocumentIdDesc: "Numer dokumentu malejąco"
  },
  statuses: {
    open: "Otwarte",
    closed: "Zamknięte",
    all: "Wszystkie"
  },
  filterByOptions: {
    orgDocumentId: "Numer dokumentu",
    orgDocumentIdRange: "Zakres numerów dokumentów",
    orgDocumentType: "Typ dokumentu",
    createdAtDateRange: "Zakres dat utworzenia",
    dueAtDateRange: "Zakres terminów",
    amountRange: "Zakres kwot pierwotnych",
    openAmountRange: "Zakres kwot nierozliczonych"
  },
  sortBy: "Sortuj wg",
  sortDocuments: "Sortuj dokumenty",
  filter: {
    status: "Status",
    filterBy: "Filtruj wg",
    documentNumber: "Numer dokumentu",
    documentType: "Typ dokumentu",
    startRange: "Od",
    endRange: "Do",
    clear: "Wyczyść wszystko",
    search: "Szukaj",
    errors: {
      toDateMustComeAfterFrom: "Wybierz datę końcową późniejszą niż data rozpoczęcia.",
      toAmountMustBeLargeThanFrom: "Wybierz wartość końcową zakresu, która jest mniejsza niż wartość początkowa."
    }
  },
  hint: "Podsumowania kont umożliwiają przeglądanie ogólnych informacji o jednostce, w tym sald i podsumowań wiekowania faktur. W tym miejscu można również przeglądać listę dokumentów transakcji dla jednostki."
};
var orgAccountSummaryList$4 = {
  breadcrumbs: {
    list: "Podsumowania kont",
    details: "{{name}}"
  }
};
var accountSummary$4 = {
  orgAccountSummary: orgAccountSummary$4,
  orgAccountSummaryList: orgAccountSummaryList$4
};
var pl = {
  accountSummary: accountSummary$4
};
var orgAccountSummary$3 = {
  groupName: "Resumos da conta",
  header: "Todos os resumos da conta ({{count}})",
  name: "Unidade",
  details: {
    header: "Detalhes do resumo da conta",
    uid: "ID de unidade",
    name: "Nome de unidade",
    address: "Endereço",
    creditRep: "Relatório de crédito",
    creditLine: "Linha de crédito",
    currentBalance: "Saldo atual",
    openBalance: "Saldo em aberto",
    pastDueBalance: "Saldo atrasado",
    dayRange: "{{minBoundary}}-{{maxBoundary}} Dias",
    dayPlus: "{{minBoundary}}+ Dias",
    notApplicable: "n/a"
  },
  document: {
    header: "Documentos",
    id: "Número do documento",
    type: "Tipo de documento",
    date: "Criado em",
    dueDate: "Vencimento em",
    originalAmount: "Montante original",
    openAmount: "Montante em aberto",
    status: "Status",
    attachment: "Anexo",
    download: "Baixar",
    attachmentDescription: "Baixar anexo para {{type}} {{id}}.",
    noneFound: "Nenhum documento encontrado"
  },
  sorts: {
    byCreatedAtDateAsc: "Criado em ordem crescente",
    byCreatedAtDateDesc: "Criado em ordem decrescente",
    byDueAtDateAsc: "Vencimento em ordem crescente",
    byDueAtDateDesc: "Vencimento em ordem decrescente",
    byOriginalAmountAsc: "Montante original em ordem crescente",
    byOriginalAmountDesc: "Montante original em ordem decrescente",
    byOpenAmountAsc: "Montante em aberto em ordem crescente",
    byOpenAmountDesc: "Montante em aberto em ordem decrescente",
    byOrgDocumentTypeAsc: "Tipo de documento em ordem crescente",
    byOrgDocumentTypeDesc: "Tipo de documento em ordem decrescente",
    byStatusAsc: "Status em ordem crescente",
    byStatusDesc: "Status em ordem decrescente",
    byOrgDocumentIdAsc: "Número do documento em ordem crescente",
    byOrgDocumentIdDesc: "Número do documento em ordem decrescente"
  },
  statuses: {
    open: "Aberto",
    closed: "Fechado",
    all: "Todos"
  },
  filterByOptions: {
    orgDocumentId: "Número do documento",
    orgDocumentIdRange: "Intervalo de numeração do documento",
    orgDocumentType: "Tipo de documento",
    createdAtDateRange: "Intervalo criado em",
    dueAtDateRange: "Intervalo com vencimento em",
    amountRange: "Intervalo de montantes originais",
    openAmountRange: "Intervalo de montantes em aberto"
  },
  sortBy: "Ordenar por",
  sortDocuments: "Ordenar documentos",
  filter: {
    status: "Status",
    filterBy: "Filtrar por",
    documentNumber: "Número do documento",
    documentType: "Tipo de documento",
    startRange: "Desde",
    endRange: "Até",
    clear: "Limpar tudo",
    search: "Pesquisar",
    errors: {
      toDateMustComeAfterFrom: "Selecione uma data final posterior à data inicial.",
      toAmountMustBeLargeThanFrom: "Selecione um valor de intervalo final menor que o valor inicial."
    }
  },
  hint: "Os resumos da conta permitem que você revise informações gerais sobre uma unidade, incluindo saldos e resumo de aging de faturas. Aqui, você também pode procurar em uma lista de documentos de transação de uma unidade."
};
var orgAccountSummaryList$3 = {
  breadcrumbs: {
    list: "Resumos da conta",
    details: "{{name}}"
  }
};
var accountSummary$3 = {
  orgAccountSummary: orgAccountSummary$3,
  orgAccountSummaryList: orgAccountSummaryList$3
};
var pt = {
  accountSummary: accountSummary$3
};
var orgAccountSummary$2 = {
  groupName: "Сводки по учетной записи",
  header: "Все сводки по учетной записи ({{count}})",
  name: "Единица",
  details: {
    header: "Сведения сводки по учетной записи",
    uid: "Ид. единицы",
    name: "Имя единицы",
    address: "Адрес",
    creditRep: "Обработчик кредитов",
    creditLine: "Кредитная линия",
    currentBalance: "Текущее сальдо",
    openBalance: "Открытое сальдо",
    pastDueBalance: "Просроченное сальдо",
    dayRange: "{{minBoundary}}-{{maxBoundary}} дн.",
    dayPlus: "{{minBoundary}}+ дн.",
    notApplicable: "неприменимо"
  },
  document: {
    header: "Документы",
    id: "Номер документа",
    type: "Тип документа",
    date: "Дата создания",
    dueDate: "Дата платежа",
    originalAmount: "Исходная сумма",
    openAmount: "Открытая сумма",
    status: "Статус",
    attachment: "Вложение",
    download: "Выгрузить",
    attachmentDescription: "Выгрузить вложение для {{type}} {{id}}.",
    noneFound: "Документы не найдены"
  },
  sorts: {
    byCreatedAtDateAsc: "По дате создания по восходящей",
    byCreatedAtDateDesc: "По дате создания по нисходящей",
    byDueAtDateAsc: "По дате платежа по восходящей",
    byDueAtDateDesc: "По дате платежа по нисходящей",
    byOriginalAmountAsc: "Исходная сумма по восходящей",
    byOriginalAmountDesc: "По исходной сумме по нисходящей",
    byOpenAmountAsc: "По открытой сумме по восходящей",
    byOpenAmountDesc: "По открытой сумме по нисходящей",
    byOrgDocumentTypeAsc: "По типу документа по восходящей",
    byOrgDocumentTypeDesc: "По типу документа по нисходящей",
    byStatusAsc: "По статусу по восходящей",
    byStatusDesc: "По статусу по нисходящей",
    byOrgDocumentIdAsc: "По номеру документа по восходящей",
    byOrgDocumentIdDesc: "По номеру документа по нисходящей"
  },
  statuses: {
    open: "Открыто",
    closed: "Закрыто",
    all: "Все"
  },
  filterByOptions: {
    orgDocumentId: "Номер документа",
    orgDocumentIdRange: "Номер документа",
    orgDocumentType: "Тип документа",
    createdAtDateRange: "Диапазон дат создания",
    dueAtDateRange: "Диапазон дат платежа",
    amountRange: "Диапазон исходных сумм",
    openAmountRange: "Диапазон открытых сумм"
  },
  sortBy: "Сортировать по",
  sortDocuments: "Сортировать документы",
  filter: {
    status: "Статус",
    filterBy: "Фильтр по",
    documentNumber: "Номер документа",
    documentType: "Тип документа",
    startRange: "С",
    endRange: "По",
    clear: "Очистить все",
    search: "Поиск",
    errors: {
      toDateMustComeAfterFrom: "Выберите дату окончания позже даты начала.",
      toAmountMustBeLargeThanFrom: "Выберите значение конца диапазона больше значения начала."
    }
  },
  hint: "Сводки по учетной записи позволяют просматривать общую информацию о единицах, включая сальдо и сводку по устареванию счетов. Здесь также можно просмотреть список документов по операциям для единицы."
};
var orgAccountSummaryList$2 = {
  breadcrumbs: {
    list: "Сводки по учетной записи",
    details: "{{name}}"
  }
};
var accountSummary$2 = {
  orgAccountSummary: orgAccountSummary$2,
  orgAccountSummaryList: orgAccountSummaryList$2
};
var ru = {
  accountSummary: accountSummary$2
};
var orgAccountSummary$1 = {
  groupName: "账户摘要",
  header: "所有账户摘要 ({{count}})",
  name: "单位",
  details: {
    header: "账户摘要详细信息",
    uid: "单位标识",
    name: "单位名称",
    address: "地址",
    creditRep: "信用报告",
    creditLine: "信用额度",
    currentBalance: "当前余额",
    openBalance: "未结余额",
    pastDueBalance: "逾期余额",
    dayRange: "{{minBoundary}}-{{maxBoundary}} 天",
    dayPlus: "{{minBoundary}} 天以上",
    notApplicable: "不适用"
  },
  document: {
    header: "文档",
    id: "凭证编号",
    type: "凭证类型",
    date: "创建日期",
    dueDate: "到期日期",
    originalAmount: "原始金额",
    openAmount: "未结金额",
    status: "状态",
    attachment: "附件",
    download: "下载",
    attachmentDescription: "下载 {{type}} {{id}} 的附件。",
    noneFound: "未找到凭证"
  },
  sorts: {
    byCreatedAtDateAsc: "创建日期（升序）",
    byCreatedAtDateDesc: "创建日期（降序）",
    byDueAtDateAsc: "到期日期（升序）",
    byDueAtDateDesc: "到期日期（降序）",
    byOriginalAmountAsc: "原始金额（升序）",
    byOriginalAmountDesc: "原始金额（降序）",
    byOpenAmountAsc: "未结金额（升序）",
    byOpenAmountDesc: "未结金额（降序）",
    byOrgDocumentTypeAsc: "凭证类型（升序）",
    byOrgDocumentTypeDesc: "凭证类型（降序）",
    byStatusAsc: "状态（升序）",
    byStatusDesc: "状态（降序）",
    byOrgDocumentIdAsc: "凭证编号（升序）",
    byOrgDocumentIdDesc: "凭证编号（降序）"
  },
  statuses: {
    open: "未完成",
    closed: "已关闭",
    all: "全部"
  },
  filterByOptions: {
    orgDocumentId: "凭证编号",
    orgDocumentIdRange: "凭证编号范围",
    orgDocumentType: "凭证类型",
    createdAtDateRange: "创建日期范围",
    dueAtDateRange: "到期日期范围",
    amountRange: "原始金额范围",
    openAmountRange: "未结金额范围"
  },
  sortBy: "排序方式",
  sortDocuments: "排序凭证",
  filter: {
    status: "状态",
    filterBy: "过滤条件",
    documentNumber: "凭证编号",
    documentType: "凭证类型",
    startRange: "从",
    endRange: "到",
    clear: "全部清除",
    search: "搜索",
    errors: {
      toDateMustComeAfterFrom: "选择晚于起始日期的结束日期。",
      toAmountMustBeLargeThanFrom: "选择小于起始值的结束范围值。"
    }
  },
  hint: "账户摘要可让您查看单位的一般信息，包括余额和发票账龄摘要。在此，您还可以浏览单位的交易凭证列表。"
};
var orgAccountSummaryList$1 = {
  breadcrumbs: {
    list: "账户摘要",
    details: "{{name}}"
  }
};
var accountSummary$1 = {
  orgAccountSummary: orgAccountSummary$1,
  orgAccountSummaryList: orgAccountSummaryList$1
};
var zh = {
  accountSummary: accountSummary$1
};
var orgAccountSummary = {
  groupName: "帳戶摘要",
  header: "所有帳戶摘要 ({{count}})",
  name: "單位",
  details: {
    header: "帳戶摘要明細",
    uid: "單位 ID",
    name: "單位名稱",
    address: "地址",
    creditRep: "信用報告",
    creditLine: "信用額度",
    currentBalance: "目前餘額",
    openBalance: "未結餘額",
    pastDueBalance: "逾期餘額",
    dayRange: "{{minBoundary}}-{{maxBoundary}} 天",
    dayPlus: "{{minBoundary}}+ 天",
    notApplicable: "n/a"
  },
  document: {
    header: "文件",
    id: "文件號碼",
    type: "文件類型",
    date: "建立日期",
    dueDate: "到期日",
    originalAmount: "原始金額",
    openAmount: "未結金額",
    status: "狀態",
    attachment: "附件",
    download: "下載",
    attachmentDescription: "下載 {{type}} {{id}} 的附件。",
    noneFound: "找不到文件"
  },
  sorts: {
    byCreatedAtDateAsc: "建立日期 (升冪)",
    byCreatedAtDateDesc: "建立日期 (降冪)",
    byDueAtDateAsc: "到期日 (升冪)",
    byDueAtDateDesc: "到期日 (降冪)",
    byOriginalAmountAsc: "原始金額 (升冪)",
    byOriginalAmountDesc: "原始金額 (降冪)",
    byOpenAmountAsc: "未結金額 (升冪)",
    byOpenAmountDesc: "未結金額 (降冪)",
    byOrgDocumentTypeAsc: "文件類型 (升冪)",
    byOrgDocumentTypeDesc: "文件類型 (降冪)",
    byStatusAsc: "狀態 (升冪)",
    byStatusDesc: "狀態 (降冪)",
    byOrgDocumentIdAsc: "文件號碼 (升冪)",
    byOrgDocumentIdDesc: "文件號碼 (降冪)"
  },
  statuses: {
    open: "未結",
    closed: "已關閉",
    all: "全部"
  },
  filterByOptions: {
    orgDocumentId: "文件號碼",
    orgDocumentIdRange: "文件號碼範圍",
    orgDocumentType: "文件類型",
    createdAtDateRange: "建立日期範圍",
    dueAtDateRange: "到期日範圍",
    amountRange: "原始金額範圍",
    openAmountRange: "未結金額範圍"
  },
  sortBy: "排序依據",
  sortDocuments: "排序文件",
  filter: {
    status: "狀態",
    filterBy: "篩選依據",
    documentNumber: "文件號碼",
    documentType: "文件類型",
    startRange: "自",
    endRange: "至",
    clear: "全部清除",
    search: "搜尋",
    errors: {
      toDateMustComeAfterFrom: "選擇晚於開始日期的結束日期。",
      toAmountMustBeLargeThanFrom: "選擇小於開始值的結束範圍值。"
    }
  },
  hint: "帳戶摘要可讓您審查關於單位的一般資訊，包含餘額和發票帳齡摘要。您也可在此瀏覽單位的交易文件清單。"
};
var orgAccountSummaryList = {
  breadcrumbs: {
    list: "帳戶摘要",
    details: "{{name}}"
  }
};
var accountSummary = {
  orgAccountSummary,
  orgAccountSummaryList
};
var zh_TW = {
  accountSummary
};
var accountSummaryTranslationChunksConfig = {
  accountSummary: ["orgAccountSummary", "orgAccountSummaryList"]
};
var accountSummaryTranslations = {
  en
};
export {
  accountSummaryTranslationChunksConfig,
  accountSummaryTranslations,
  cs as accountSummaryTranslationsCs,
  de as accountSummaryTranslationsDe,
  en as accountSummaryTranslationsEn,
  es as accountSummaryTranslationsEs,
  es_CO as accountSummaryTranslationsEs_CO,
  fr as accountSummaryTranslationsFr,
  hi as accountSummaryTranslationsHi,
  hu as accountSummaryTranslationsHu,
  id as accountSummaryTranslationsId,
  it as accountSummaryTranslationsIt,
  ja as accountSummaryTranslationsJa,
  ko as accountSummaryTranslationsKo,
  pl as accountSummaryTranslationsPl,
  pt as accountSummaryTranslationsPt,
  ru as accountSummaryTranslationsRu,
  zh as accountSummaryTranslationsZh,
  zh_TW as accountSummaryTranslationsZh_TW
};
//# sourceMappingURL=@spartacus_organization_account-summary_assets.js.map
