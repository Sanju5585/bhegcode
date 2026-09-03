import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-user-registration-assets.mjs
var userRegistrationForm$g = {
  fields: {
    titleCode: {
      label: "Titul (volitelný)",
      placeholder: "Oslovení"
    },
    titleCodeOnOTPForm: {
      label: "Oslovení",
      placeholder: "Vyberte oslovení"
    },
    firstName: {
      label: "Křestní jméno",
      placeholder: "Křestní jméno"
    },
    lastName: {
      label: "Příjmení",
      placeholder: "Příjmení"
    },
    companyName: {
      label: "Název společnosti",
      placeholder: "Název společnosti"
    },
    email: {
      label: "E-mail",
      placeholder: "E-mail"
    },
    city: {
      label: "Město/obec (volitelné)",
      placeholder: "Vyberte město/obec"
    },
    cityOnOTPForm: {
      label: "Město/obec",
      placeholder: "Vyberte město/obec"
    },
    country: {
      label: "Země (volitelná)",
      placeholder: "Vyberte zemi"
    },
    countryOnOTPForm: {
      label: "Stát",
      placeholder: "Vyberte zemi"
    },
    state: {
      label: "Stát / správní celek (volitelný)",
      placeholder: "Vyberte stát / správní celek"
    },
    stateOnOTPForm: {
      label: "Region/správní celek",
      placeholder: "Vyberte stát / správní celek"
    },
    postalCode: {
      label: "PSČ (volitelné)",
      placeholder: "PSČ"
    },
    postalCodeOnOTPForm: {
      label: "PSČ",
      placeholder: "PSČ"
    },
    addressLine: {
      label: "Adresa (volitelná)",
      placeholder: "Adresa"
    },
    addressLineOnOTPForm: {
      label: "Adresa",
      placeholder: "Adresa"
    },
    secondAddressLine: {
      label: "2. řádek adresy (volitelný)",
      placeholder: "2. řádek adresy"
    },
    secondAddressLineOnOTPForm: {
      label: "2. řádek adresy",
      placeholder: "2. řádek adresy"
    },
    phoneNumber: {
      label: "Telefonní číslo (volitelné)",
      placeholder: "Telefonní číslo"
    },
    phoneNumberOnOTPForm: {
      label: "Telefonní číslo",
      placeholder: "Telefonní číslo"
    },
    message: {
      label: "Zpráva (volitelná)",
      placeholder: "Příklad dat pro pole zprávy: „Oddělení: pozemní podpora, Pozice: velitel bezpečnosti; Přímý nadřízený: Steve Jackson; Komentáře: Vytvořte mi prosím nový účet“."
    },
    messageOnOTPForm: {
      label: "Zpráva",
      placeholder: "Příklad dat pro pole zprávy: „Oddělení: pozemní podpora, Pozice: velitel bezpečnosti; Přímý nadřízený: Steve Jackson; Komentáře: Vytvořte mi prosím nový účet“."
    }
  },
  messageToApproverTemplate: "Název společnost: {{companyName}},\n  Telefonní číslo: {{phoneNumber}},\n  Adresa: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Zpráva: {{message}}",
  successFormSubmitMessage: "Děkujeme za registraci! Zástupce vás bude brzy kontaktovat a potvrdí vaše přístupové údaje.",
  formSubmitButtonLabel: "Registrovat",
  continueWithOTP: "Pokračovat",
  goToLoginButtonLabel: "Už jste zaregistrováni? Přihlaste se.",
  httpHandlers: {
    conflict: "Uživatel s touto e-mailovou adresou už existuje."
  },
  messageToFailedToRegister: "Registrace se nezdařila. Obraťte se na správce."
};
var userRegistration$g = {
  userRegistrationForm: userRegistrationForm$g
};
var cs = {
  userRegistration: userRegistration$g
};
var userRegistrationForm$f = {
  fields: {
    titleCode: {
      label: "Anrede (optional)",
      placeholder: "Anrede"
    },
    titleCodeOnOTPForm: {
      label: "Anrede",
      placeholder: "Anrede auswählen"
    },
    firstName: {
      label: "Vorname",
      placeholder: "Vorname"
    },
    lastName: {
      label: "Nachname",
      placeholder: "Nachname"
    },
    companyName: {
      label: "Firmenname",
      placeholder: "Firmenname"
    },
    email: {
      label: "E-Mail",
      placeholder: "E-Mail"
    },
    city: {
      label: "Ort/Stadt (optional)",
      placeholder: "Ort/Stadt auswählen"
    },
    cityOnOTPForm: {
      label: "Ort/Stadt",
      placeholder: "Ort/Land auswählen"
    },
    country: {
      label: "Land (optional)",
      placeholder: "Land auswählen"
    },
    countryOnOTPForm: {
      label: "Land",
      placeholder: "Land auswählen"
    },
    state: {
      label: "Bundesland/Kanton",
      placeholder: "Bundesland/Kanton auswählen"
    },
    stateOnOTPForm: {
      label: "Bundesland/Kanton",
      placeholder: "Bundesland/Kanton auswählen"
    },
    postalCode: {
      label: "Postleitzahl (optional)",
      placeholder: "Postleitzahl"
    },
    postalCodeOnOTPForm: {
      label: "Postleitzahl",
      placeholder: "Postleitzahl"
    },
    addressLine: {
      label: "Adresse (optional)",
      placeholder: "Adresse"
    },
    addressLineOnOTPForm: {
      label: "Adresse",
      placeholder: "Adresse"
    },
    secondAddressLine: {
      label: "Adresse Zeile 2 (optional)",
      placeholder: "Adresse Zeile 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Adresse Zeile 2",
      placeholder: "Adresse Zeile 2"
    },
    phoneNumber: {
      label: "Telefonnummer (optional)",
      placeholder: "Telefonnummer"
    },
    phoneNumberOnOTPForm: {
      label: "Telefonnummer",
      placeholder: "Telefonnummer"
    },
    message: {
      label: "Nachricht (optional)",
      placeholder: 'Beispieldaten für das Nachrichtenfeld: "Abteilung: Ground Support; Planstelle: Chief Safe Guard; Bericht an: Steve Jackson; Kommentare: Bitte erstellen Sie ein neues Konto für mich".'
    },
    messageOnOTPForm: {
      label: "Nachricht",
      placeholder: 'Beispieldaten für das Nachrichtenfeld: "Abteilung: Ground Support; Planstelle: Chief Safe Guard; Bericht an: Steve Jackson; Kommentare: Bitte erstellen Sie ein neues Konto für mich".'
    }
  },
  messageToApproverTemplate: "Firmenname: {{companyName}},\n  Telefonnummer: {{phoneNumber}},\n  Adresse: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Nachricht: {{message}}",
  successFormSubmitMessage: "Vielen Dank für Ihre Registrierung! Ein Beauftragter wird Sie in Kürze kontaktieren und Ihre Zugriffsinformationen bestätigen.",
  formSubmitButtonLabel: "Registrieren",
  continueWithOTP: "Weiter",
  goToLoginButtonLabel: "Schon registriert? Zur Anmeldung wechseln",
  httpHandlers: {
    conflict: "Ein Benutzer mit dieser E-Mail-Adresse ist bereits vorhanden."
  },
  messageToFailedToRegister: "Registrierung fehlgeschlagen. Bitte wenden Sie sich an Ihren Administrator, um weitere Unterstützung zu erhalten."
};
var userRegistration$f = {
  userRegistrationForm: userRegistrationForm$f
};
var de = {
  userRegistration: userRegistration$f
};
var userRegistrationForm$e = {
  fields: {
    titleCode: {
      label: "Title (optional)",
      placeholder: "Title"
    },
    titleCodeOnOTPForm: {
      label: "Title",
      placeholder: "Select Title"
    },
    firstName: {
      label: "First name",
      placeholder: "First name"
    },
    lastName: {
      label: "Last name",
      placeholder: "Last name"
    },
    companyName: {
      label: "Company name",
      placeholder: "Company name"
    },
    email: {
      label: "E-mail",
      placeholder: "E-mail"
    },
    city: {
      label: "City/Town (optional)",
      placeholder: "Please select City/Town"
    },
    cityOnOTPForm: {
      label: "City/Town",
      placeholder: "Please select City/Town"
    },
    country: {
      label: "Country (optional)",
      placeholder: "Select Country"
    },
    countryOnOTPForm: {
      label: "Country",
      placeholder: "Select Country"
    },
    state: {
      label: "State/Province (optional)",
      placeholder: "Select State/Province"
    },
    stateOnOTPForm: {
      label: "State/Province",
      placeholder: "Select State/Province"
    },
    postalCode: {
      label: "Zip/Postal code (optional)",
      placeholder: "Zip/Postal code"
    },
    postalCodeOnOTPForm: {
      label: "Zip/Postal code",
      placeholder: "Zip/Postal code"
    },
    addressLine: {
      label: "Address (optional)",
      placeholder: "Address"
    },
    addressLineOnOTPForm: {
      label: "Address",
      placeholder: "Address"
    },
    secondAddressLine: {
      label: "Address line 2 (optional)",
      placeholder: "Address line 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Address line 2",
      placeholder: "Address line 2"
    },
    phoneNumber: {
      label: "Phone number (optional)",
      placeholder: "Phone number"
    },
    phoneNumberOnOTPForm: {
      label: "Phone number",
      placeholder: "Phone number"
    },
    message: {
      label: "Message (optional)",
      placeholder: 'An example data for the message field: "Department: Ground support; Position: Chief safe guard; Report to: Steve Jackson; Comments: Please create new account for me".'
    },
    messageOnOTPForm: {
      label: "Message",
      placeholder: 'An example data for the message field: "Department: Ground support; Position: Chief safe guard; Report to: Steve Jackson; Comments: Please create new account for me".'
    }
  },
  messageToApproverTemplate: "Company name: {{companyName}},\n  Phone number: {{phoneNumber}},\n  Address: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Message: {{message}}",
  successFormSubmitMessage: "Thank you for registering! A representative will contact you shortly and confirm your access information.",
  formSubmitButtonLabel: "Register",
  continueWithOTP: "Continue",
  goToLoginButtonLabel: "Already registered? Go to Sign in",
  httpHandlers: {
    conflict: "User with this e-mail address already exists."
  },
  messageToFailedToRegister: "Failed to register. Please contact your admin for further assistance."
};
var userRegistration$e = {
  userRegistrationForm: userRegistrationForm$e
};
var en = {
  userRegistration: userRegistration$e
};
var userRegistrationForm$d = {
  fields: {
    titleCode: {
      label: "Tratamiento (opcional)",
      placeholder: "Tratamiento"
    },
    titleCodeOnOTPForm: {
      label: "Tratamiento",
      placeholder: "Seleccionar tratamiento"
    },
    firstName: {
      label: "Nombre",
      placeholder: "Nombre"
    },
    lastName: {
      label: "Apellido",
      placeholder: "Apellido"
    },
    companyName: {
      label: "Nombre de la empresa",
      placeholder: "Nombre de la empresa"
    },
    email: {
      label: "Correo electrónico",
      placeholder: "Correo electrónico"
    },
    city: {
      label: "Ciudad/Pueblo (opcional)",
      placeholder: "Seleccionar una ciudad o un pueblo"
    },
    cityOnOTPForm: {
      label: "Ciudad/Pueblo",
      placeholder: "Seleccionar una ciudad o un pueblo"
    },
    country: {
      label: "País (opcional)",
      placeholder: "Seleccionar un país"
    },
    countryOnOTPForm: {
      label: "País",
      placeholder: "Seleccionar un país"
    },
    state: {
      label: "Estado/Provincia (opcional)",
      placeholder: "Seleccionar un estado o una provincia"
    },
    stateOnOTPForm: {
      label: "Estado/Provincia",
      placeholder: "Seleccionar un estado o una provincia"
    },
    postalCode: {
      label: "Código postal (opcional)",
      placeholder: "Código postal"
    },
    postalCodeOnOTPForm: {
      label: "Código postal",
      placeholder: "Código postal"
    },
    addressLine: {
      label: "Dirección (opcional)",
      placeholder: "Dirección"
    },
    addressLineOnOTPForm: {
      label: "Dirección",
      placeholder: "Dirección"
    },
    secondAddressLine: {
      label: "Línea de dirección 2 (opcional)",
      placeholder: "Línea de dirección 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Línea de dirección 2",
      placeholder: "Línea de dirección 2"
    },
    phoneNumber: {
      label: "Número de teléfono (opcional)",
      placeholder: "Número de teléfono"
    },
    phoneNumberOnOTPForm: {
      label: "Número de teléfono",
      placeholder: "Número de teléfono"
    },
    message: {
      label: "Mensaje (opcional)",
      placeholder: 'Datos de ejemplo para el campo de mensaje: "Departamento: soporte terrestre; Posición: guardia de seguridad principal; Superior: Steve Jackson; Comentarios: Cree una nueva cuenta para mí".'
    },
    messageOnOTPForm: {
      label: "Mensaje",
      placeholder: 'Datos de ejemplo para el campo de mensaje: "Departamento: soporte terrestre; Posición: guardia de seguridad principal; Superior: Steve Jackson; Comentarios: Cree una nueva cuenta para mí".'
    }
  },
  messageToApproverTemplate: "Nombre de la empresa: {{companyName}},\n  Número de teléfono: {{phoneNumber}},\n  Dirección: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Mensaje: {{message}}",
  successFormSubmitMessage: "¡Gracias por registrarse! Un representante se pondrá en contacto con usted para confirmar su información de acceso.",
  formSubmitButtonLabel: "Registrarse",
  continueWithOTP: "Continuar",
  goToLoginButtonLabel: "¿Ya se registró? Vaya a Iniciar sesión.",
  httpHandlers: {
    conflict: "Ya existe un usuario con esta dirección de correo electrónico."
  },
  messageToFailedToRegister: "Se produjo un error en el registro. Póngase en contacto con el administrador para recibir asistencia."
};
var userRegistration$d = {
  userRegistrationForm: userRegistrationForm$d
};
var es = {
  userRegistration: userRegistration$d
};
var userRegistrationForm$c = {
  fields: {
    titleCode: {
      label: "Título (opcional)",
      placeholder: "Título"
    },
    titleCodeOnOTPForm: {
      label: "Título",
      placeholder: "Seleccionar título"
    },
    firstName: {
      label: "Nombre",
      placeholder: "Nombre"
    },
    lastName: {
      label: "Apellido",
      placeholder: "Apellido"
    },
    companyName: {
      label: "Nombre de la empresa",
      placeholder: "Nombre de la empresa"
    },
    email: {
      label: "Correo electrónico",
      placeholder: "Correo electrónico"
    },
    city: {
      label: "Ciudad/Pueblo (opcional)",
      placeholder: "Seleccionar una ciudad o un pueblo"
    },
    cityOnOTPForm: {
      label: "Ciudad/Pueblo",
      placeholder: "Seleccionar una ciudad o un pueblo"
    },
    country: {
      label: "País (opcional)",
      placeholder: "Seleccionar un país"
    },
    countryOnOTPForm: {
      label: "País",
      placeholder: "Seleccionar un país"
    },
    state: {
      label: "Estado/Provincia (opcional)",
      placeholder: "Seleccionar un estado o una provincia"
    },
    stateOnOTPForm: {
      label: "Estado/Provincia",
      placeholder: "Seleccionar un estado o una provincia"
    },
    postalCode: {
      label: "Código postal (opcional)",
      placeholder: "Código postal"
    },
    postalCodeOnOTPForm: {
      label: "Código postal",
      placeholder: "Código postal"
    },
    addressLine: {
      label: "Dirección (opcional)",
      placeholder: "Dirección"
    },
    addressLineOnOTPForm: {
      label: "Dirección",
      placeholder: "Dirección"
    },
    secondAddressLine: {
      label: "Línea de dirección 2 (opcional)",
      placeholder: "Línea de dirección 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Línea de dirección 2",
      placeholder: "Línea de dirección 2"
    },
    phoneNumber: {
      label: "Número de teléfono (opcional)",
      placeholder: "Número de teléfono"
    },
    phoneNumberOnOTPForm: {
      label: "Número de teléfono",
      placeholder: "Número de teléfono"
    },
    message: {
      label: "Mensaje (opcional)",
      placeholder: 'Datos de ejemplo para el campo de mensaje: "Departamento: soporte terrestre; Posición: guardia de seguridad principal; Superior: Steve Jackson; Comentarios: Cree una nueva cuenta para mí".'
    },
    messageOnOTPForm: {
      label: "Mensaje",
      placeholder: 'Datos de ejemplo para el campo de mensaje: "Departamento: soporte terrestre; Posición: guardia de seguridad principal; Superior: Steve Jackson; Comentarios: Cree una nueva cuenta para mí".'
    }
  },
  messageToApproverTemplate: "Nombre de la empresa: {{companyName}},\nNúmero de teléfono: {{phoneNumber}},\n  Dirección: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Mensaje: {{message}}",
  successFormSubmitMessage: "¡Gracias por registrarse! Un representante se pondrá en contacto con usted en breve para confirmar su información de acceso.",
  formSubmitButtonLabel: "Registrarse",
  continueWithOTP: "Continuar",
  goToLoginButtonLabel: "¿Ya se registró? Vaya a Iniciar sesión.",
  httpHandlers: {
    conflict: "Ya existe un usuario con esta dirección de correo electrónico."
  },
  messageToFailedToRegister: "Se produjo un error en el registro. Póngase en contacto con el administrador para recibir asistencia."
};
var userRegistration$c = {
  userRegistrationForm: userRegistrationForm$c
};
var es_CO = {
  userRegistration: userRegistration$c
};
var userRegistrationForm$b = {
  fields: {
    titleCode: {
      label: "Civilité (facultatif)",
      placeholder: "Civilité"
    },
    titleCodeOnOTPForm: {
      label: "Civilité",
      placeholder: "Sélectionner la civilité"
    },
    firstName: {
      label: "Prénom",
      placeholder: "Prénom"
    },
    lastName: {
      label: "Nom de famille",
      placeholder: "Nom de famille"
    },
    companyName: {
      label: "Nom de l'entreprise",
      placeholder: "Nom de l'entreprise"
    },
    email: {
      label: "Adresse e-mail",
      placeholder: "Adresse e-mail"
    },
    city: {
      label: "Ville/Localité (facultatif)",
      placeholder: "Veuillez sélectionner une ville/localité"
    },
    cityOnOTPForm: {
      label: "Ville/Localité",
      placeholder: "Veuillez sélectionner une ville/localité."
    },
    country: {
      label: "Pays (facultatif)",
      placeholder: "Sélectionner le pays"
    },
    countryOnOTPForm: {
      label: "Pays",
      placeholder: "Sélectionner le pays"
    },
    state: {
      label: "État/Province (facultatif)",
      placeholder: "Sélectionner l'État/la province"
    },
    stateOnOTPForm: {
      label: "Etat/Province",
      placeholder: "Sélectionner l'État/la province"
    },
    postalCode: {
      label: "Code postal/ZIP (facultatif)",
      placeholder: "Code postal/ZIP"
    },
    postalCodeOnOTPForm: {
      label: "Code postal",
      placeholder: "Code postal"
    },
    addressLine: {
      label: "Adresse (facultatif)",
      placeholder: "Adresse"
    },
    addressLineOnOTPForm: {
      label: "Adresse",
      placeholder: "Adresse"
    },
    secondAddressLine: {
      label: "Adresse, ligne 2 (facultatif)",
      placeholder: "Adresse, ligne 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Adresse, ligne 2",
      placeholder: "Adresse, ligne 2"
    },
    phoneNumber: {
      label: "Numéro de téléphone (facultatif)",
      placeholder: "Numéro de téléphone"
    },
    phoneNumberOnOTPForm: {
      label: "Numéro de téléphone",
      placeholder: "Numéro de téléphone"
    },
    message: {
      label: "Message (facultatif)",
      placeholder: 'Un exemple de données pour la zone du message : "Département : Assistance au sol ; Poste : Chef de la sécurité ; Sous la responsabilité de : Steve Jackson ; Commentaires : Veuillez créer un nouveau compte pour moi".'
    },
    messageOnOTPForm: {
      label: "Message",
      placeholder: 'Un exemple de données pour la zone du message : "Département : Assistance au sol ; Poste : Chef de la sécurité ; Sous la responsabilité de : Steve Jackson ; Commentaires : Veuillez créer un nouveau compte pour moi".'
    }
  },
  messageToApproverTemplate: "Nom de l'entreprise : {{companyName}},\nNuméro de téléphone : {{phoneNumber}},\n  Adresse : {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Message : {{message}}",
  successFormSubmitMessage: "Merci de vous être inscrit ! Un représentant vous contactera sous peu pour confirmer vos informations d'accès.",
  formSubmitButtonLabel: "S'inscrire",
  continueWithOTP: "Poursuivre",
  goToLoginButtonLabel: "Vous êtes déjà inscrit ? Connectez-vous",
  httpHandlers: {
    conflict: "Un utilisateur avec cette adresse e-mail existe déjà."
  },
  messageToFailedToRegister: "L'enregistrement a échoué. Veuillez contacter votre administrateur pour obtenir de l'aide."
};
var userRegistration$b = {
  userRegistrationForm: userRegistrationForm$b
};
var fr = {
  userRegistration: userRegistration$b
};
var userRegistrationForm$a = {
  fields: {
    titleCode: {
      label: "शीर्षक (वैकल्पिक)",
      placeholder: "शीर्षक"
    },
    titleCodeOnOTPForm: {
      label: "शीर्षक",
      placeholder: "शीर्षक चुनें"
    },
    firstName: {
      label: "प्रथम नाम",
      placeholder: "प्रथम नाम"
    },
    lastName: {
      label: "अंतिम नाम",
      placeholder: "अंतिम नाम"
    },
    companyName: {
      label: "कंपनी का नाम",
      placeholder: "कंपनी का नाम"
    },
    email: {
      label: "ईमेल",
      placeholder: "ईमेल"
    },
    city: {
      label: "शहर/नगर (वैकल्पिक)",
      placeholder: "कृपया शहर/नगर चुनें"
    },
    cityOnOTPForm: {
      label: "शहर/कस्बा",
      placeholder: "कृपया शहर/नगर चुनें"
    },
    country: {
      label: "देश (वैकल्पिक)",
      placeholder: "देश चुनें"
    },
    countryOnOTPForm: {
      label: "देश",
      placeholder: "देश चुनें"
    },
    state: {
      label: "राज्य/प्रांत (वैकल्पिक)",
      placeholder: "राज्य/ प्रांत चुनें"
    },
    stateOnOTPForm: {
      label: "राज्य/ प्रांत",
      placeholder: "राज्य/ प्रांत चुनें"
    },
    postalCode: {
      label: "ज़िप/पोस्टल कोड (वैकल्पिक)",
      placeholder: "ज़िप/पोस्टल कोड"
    },
    postalCodeOnOTPForm: {
      label: "ज़िप/पोस्टल कोड",
      placeholder: "ज़िप/पोस्टल कोड"
    },
    addressLine: {
      label: "पता (वैकल्पिक)",
      placeholder: "पता"
    },
    addressLineOnOTPForm: {
      label: "पता",
      placeholder: "पता"
    },
    secondAddressLine: {
      label: "पता पंक्ति 2 (वैकल्पिक)",
      placeholder: "पता पंक्ति 2"
    },
    secondAddressLineOnOTPForm: {
      label: "पता पंक्ति 2",
      placeholder: "पता पंक्ति 2"
    },
    phoneNumber: {
      label: "फोन नंबर (वैकल्पिक)",
      placeholder: "फ़ोन नंबर"
    },
    phoneNumberOnOTPForm: {
      label: "फ़ोन नंबर",
      placeholder: "फ़ोन नंबर"
    },
    message: {
      label: "संदेश (वैकल्पिक)",
      placeholder: 'संदेश फ़ील्ड के लिए उदाहरण डेटाः "विभागः ग्राउंड सहायता; पदः प्रमुख सुरक्षा गार्ड; रिपोर्ट करेंः स्टीव जैकसन; टिप्पणियांः कृपया मेरे लिए नया खाता बनाएं".'
    },
    messageOnOTPForm: {
      label: "संदेश",
      placeholder: 'संदेश फ़ील्ड के लिए उदाहरण डेटाः "विभागः ग्राउंड सहायता; पदः प्रमुख सुरक्षा गार्ड; रिपोर्ट करेंः स्टीव जैकसन; टिप्पणियांः कृपया मेरे लिए नया खाता बनाएं".'
    }
  },
  messageToApproverTemplate: "कंपनी नामः {{companyName}}, फोन नंबरः {{phoneNumber}}, पताः {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}}, संदेशः {{message}}",
  successFormSubmitMessage: "पंजीकरण करने के लिए धन्यवाद! कोई प्रतिनिधि जल्द ही आपसे संपर्क करेगा और आपकी पहुंच जानकारी की पुष्टि करेगा.",
  formSubmitButtonLabel: "पंजीकृत करें",
  continueWithOTP: "जारी रखें",
  goToLoginButtonLabel: "पहले से पंजीकृत हैं? साइन इन पर जाएं",
  httpHandlers: {
    conflict: "इस ईमेल के साथ उपयोगकर्ता पहले से मौजूद है."
  },
  messageToFailedToRegister: "पंजीकरण करने में विफल. आगे सहायता के लिए कृपया अपने व्यवस्थापक से संपर्क करें."
};
var userRegistration$a = {
  userRegistrationForm: userRegistrationForm$a
};
var hi = {
  userRegistration: userRegistration$a
};
var userRegistrationForm$9 = {
  fields: {
    titleCode: {
      label: "Megszólítás (opcionális)",
      placeholder: "Megszólítás"
    },
    titleCodeOnOTPForm: {
      label: "Megszólítás",
      placeholder: "Megszólítás kiválasztása"
    },
    firstName: {
      label: "Utónév",
      placeholder: "Utónév"
    },
    lastName: {
      label: "Vezetéknév",
      placeholder: "Vezetéknév"
    },
    companyName: {
      label: "Vállalat neve",
      placeholder: "Vállalat neve"
    },
    email: {
      label: "E-mail",
      placeholder: "E-mail"
    },
    city: {
      label: "Település (opcionális)",
      placeholder: "Válassza ki a települést"
    },
    cityOnOTPForm: {
      label: "Település",
      placeholder: "Válassza ki a települést"
    },
    country: {
      label: "Ország (opcionális)",
      placeholder: "Válassza ki az országot"
    },
    countryOnOTPForm: {
      label: "Ország",
      placeholder: "Válassza ki az országot"
    },
    state: {
      label: "Állam/tartomány (opcionális)",
      placeholder: "Válassza ki az államot/tartományt"
    },
    stateOnOTPForm: {
      label: "Állam/tartomány",
      placeholder: "Válassza ki az államot/tartományt"
    },
    postalCode: {
      label: "Irányítószám (opcionális)",
      placeholder: "Irányítószám"
    },
    postalCodeOnOTPForm: {
      label: "Irányítószám",
      placeholder: "Irányítószám"
    },
    addressLine: {
      label: "Cím (opcionális)",
      placeholder: "Cím"
    },
    addressLineOnOTPForm: {
      label: "Cím",
      placeholder: "Cím"
    },
    secondAddressLine: {
      label: "Cím 2. sora (opcionális)",
      placeholder: "Cím 2. sora"
    },
    secondAddressLineOnOTPForm: {
      label: "Cím 2. sora",
      placeholder: "Cím 2. sora"
    },
    phoneNumber: {
      label: "Telefonszám (opcionális)",
      placeholder: "Telefonszám"
    },
    phoneNumberOnOTPForm: {
      label: "Telefonszám",
      placeholder: "Telefonszám"
    },
    message: {
      label: "Üzenet (opcionális)",
      placeholder: "Az üzenet mező példaadata: „Osztály: szárazföldi támogatás; Pozíció: vezető biztonsági hivatalnok; Felettes: Steve Jackson; Megjegyzés: Új fiók létrehozását szeretném igényelni”."
    },
    messageOnOTPForm: {
      label: "Üzenet",
      placeholder: "Az üzenet mező példaadata: „Osztály: szárazföldi támogatás; Pozíció: vezető biztonsági hivatalnok; Felettes: Steve Jackson; Megjegyzés: Új fiók létrehozását szeretném igényelni”."
    }
  },
  messageToApproverTemplate: "Vállalat neve: {{companyName}},\n  Telefonszám: {{phoneNumber}},\n  Cím: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Üzenet: {{message}}",
  successFormSubmitMessage: "Köszönjük a regisztrációt! Egy képviselőnk hamarosan felveszi Önnel a kapcsolatot, és tájékoztatja a hozzáférési információkról.",
  formSubmitButtonLabel: "Regisztráció",
  continueWithOTP: "Folytatás",
  goToLoginButtonLabel: "Már regisztrált? Lépjen be.",
  httpHandlers: {
    conflict: "Már létezik felhasználó ezzel az e-mail-címmel."
  },
  messageToFailedToRegister: "Sikertelen regisztráció. További segítségért forduljon a rendszergazdájához."
};
var userRegistration$9 = {
  userRegistrationForm: userRegistrationForm$9
};
var hu = {
  userRegistration: userRegistration$9
};
var userRegistrationForm$8 = {
  fields: {
    titleCode: {
      label: "Gelar/Sapaan (opsional)",
      placeholder: "Gelar/Sapaan"
    },
    titleCodeOnOTPForm: {
      label: "Gelar/Sapaan",
      placeholder: "Pilih Gelar/Sapaan"
    },
    firstName: {
      label: "Nama depan",
      placeholder: "Nama depan"
    },
    lastName: {
      label: "Nama belakang",
      placeholder: "Nama belakang"
    },
    companyName: {
      label: "Nama perusahaan",
      placeholder: "Nama perusahaan"
    },
    email: {
      label: "E-mail",
      placeholder: "E-mail"
    },
    city: {
      label: "Kota/Kabupaten (opsional)",
      placeholder: "Harap pilih Kota/Kabupaten"
    },
    cityOnOTPForm: {
      label: "Kota/Kabupaten",
      placeholder: "Harap pilih Kota/Kabupaten"
    },
    country: {
      label: "Negara (opsional)",
      placeholder: "Pilih Negara"
    },
    countryOnOTPForm: {
      label: "Negara",
      placeholder: "Pilih Negara"
    },
    state: {
      label: "Negara Bagian/Provinsi (opsional)",
      placeholder: "Pilih Negara Bagian/Provinsi"
    },
    stateOnOTPForm: {
      label: "Negara Bagian/Provinsi",
      placeholder: "Pilih Negara Bagian/Provinsi"
    },
    postalCode: {
      label: "Kode Pos (opsional)",
      placeholder: "Kode Pos"
    },
    postalCodeOnOTPForm: {
      label: "Kode Pos",
      placeholder: "Kode Pos"
    },
    addressLine: {
      label: "Alamat (opsional)",
      placeholder: "Alamat"
    },
    addressLineOnOTPForm: {
      label: "Alamat",
      placeholder: "Alamat"
    },
    secondAddressLine: {
      label: "Baris alamat 2 (opsional)",
      placeholder: "Baris alamat 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Baris alamat 2",
      placeholder: "Baris alamat 2"
    },
    phoneNumber: {
      label: "Nomor telepon (opsional)",
      placeholder: "Nomor telepon"
    },
    phoneNumberOnOTPForm: {
      label: "Nomor telepon",
      placeholder: "Nomor telepon"
    },
    message: {
      label: "Pesan (opsional)",
      placeholder: 'Contoh data pada bidang pesan: "Departemen: Pelayanan Pesawat Udara di Darat; Posisi: Kepala Pengamanan; Melapor kepada: Steve Jackson; Komentar: Mohon buatkan akun baru untuk saya."'
    },
    messageOnOTPForm: {
      label: "Pesan",
      placeholder: 'Contoh data pada bidang pesan: "Departemen: Pelayanan Pesawat Udara di Darat; Posisi: Kepala Pengamanan; Melapor kepada: Steve Jackson; Komentar: Mohon buatkan akun baru untuk saya."'
    }
  },
  messageToApproverTemplate: "Nama perusahaan: {{companyName}},\n  Nomor telepon: {{phoneNumber}},\n  Alamat: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Pesan: {{message}}",
  successFormSubmitMessage: "Terima kasih sudah mendaftar! Seorang perwakilan akan segera menghubungi Anda untuk mengonfirmasi informasi akses Anda.",
  formSubmitButtonLabel: "Daftar",
  continueWithOTP: "Lanjutkan",
  goToLoginButtonLabel: "Sudah terdaftar? Klik Masuk",
  httpHandlers: {
    conflict: "Pengguna dengan alamat email ini sudah ada."
  },
  messageToFailedToRegister: "Gagal mendaftar. Silakan hubungi admin untuk bantuan lebih lanjut."
};
var userRegistration$8 = {
  userRegistrationForm: userRegistrationForm$8
};
var id = {
  userRegistration: userRegistration$8
};
var userRegistrationForm$7 = {
  fields: {
    titleCode: {
      label: "Titolo (facoltativo)",
      placeholder: "Titolo"
    },
    titleCodeOnOTPForm: {
      label: "Titolo",
      placeholder: "Seleziona un titolo"
    },
    firstName: {
      label: "Nome",
      placeholder: "Nome"
    },
    lastName: {
      label: "Cognome",
      placeholder: "Cognome"
    },
    companyName: {
      label: "Nome della società",
      placeholder: "Nome della società"
    },
    email: {
      label: "E-mail",
      placeholder: "E-mail"
    },
    city: {
      label: "Città (facoltativo)",
      placeholder: "Seleziona una città"
    },
    cityOnOTPForm: {
      label: "Città",
      placeholder: "Seleziona una città"
    },
    country: {
      label: "Paese (facoltativo)",
      placeholder: "Seleziona un paese"
    },
    countryOnOTPForm: {
      label: "Paese",
      placeholder: "Seleziona un paese"
    },
    state: {
      label: "Stato/provincia (facoltativo)",
      placeholder: "Seleziona uno stato/provincia"
    },
    stateOnOTPForm: {
      label: "Stato/provincia",
      placeholder: "Seleziona uno stato/provincia"
    },
    postalCode: {
      label: "CAP/Codice postale (facoltativo)",
      placeholder: "CAP/codice postale"
    },
    postalCodeOnOTPForm: {
      label: "CAP/codice postale",
      placeholder: "CAP/codice postale"
    },
    addressLine: {
      label: "Indirizzo (facoltativo)",
      placeholder: "Indirizzo"
    },
    addressLineOnOTPForm: {
      label: "Indirizzo",
      placeholder: "Indirizzo"
    },
    secondAddressLine: {
      label: "Riga 2 indirizzo (facoltativa)",
      placeholder: "Riga 2 indirizzo"
    },
    secondAddressLineOnOTPForm: {
      label: "Riga 2 indirizzo",
      placeholder: "Riga 2 indirizzo"
    },
    phoneNumber: {
      label: "Numero di telefono (facoltativo)",
      placeholder: "Numero di telefono"
    },
    phoneNumberOnOTPForm: {
      label: "Numero di telefono",
      placeholder: "Numero di telefono"
    },
    message: {
      label: "Messaggio (facoltativo)",
      placeholder: 'Dati di esempio per il campo messaggio: "Reparto: supporto a terra; posizione: capo della sicurezza; superiore: Paolo Rossi; commento: crea nuovo account per me".'
    },
    messageOnOTPForm: {
      label: "Messaggio",
      placeholder: 'Dati di esempio per il campo messaggio: "Reparto: supporto a terra; posizione: capo della sicurezza; superiore: Paolo Rossi; commento: crea nuovo account per me".'
    }
  },
  messageToApproverTemplate: "Nome società: {{companyName}},\n  Numero di telefono: {{phoneNumber}},\n  Indirizzo: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Messaggio: {{message}}",
  successFormSubmitMessage: "Grazie della registrazione. Un rappresentante ti contatterà a breve e confermerà le tue informazioni di accesso.",
  formSubmitButtonLabel: "Registrati",
  continueWithOTP: "Continua",
  goToLoginButtonLabel: "Hai già effettuato la registrazione? Passa all'accesso",
  httpHandlers: {
    conflict: "Un utente con questo indirizzo e-mail esiste già."
  },
  messageToFailedToRegister: "Registrazione non riuscita. Contatta l'amministratore per ulteriore assistenza."
};
var userRegistration$7 = {
  userRegistrationForm: userRegistrationForm$7
};
var it = {
  userRegistration: userRegistration$7
};
var userRegistrationForm$6 = {
  fields: {
    titleCode: {
      label: "タイトル (オプション)",
      placeholder: "タイトル"
    },
    titleCodeOnOTPForm: {
      label: "タイトル",
      placeholder: "タイトルを選択"
    },
    firstName: {
      label: "名",
      placeholder: "名"
    },
    lastName: {
      label: "姓",
      placeholder: "姓"
    },
    companyName: {
      label: "会社名",
      placeholder: "会社名"
    },
    email: {
      label: "電子メールアドレス",
      placeholder: "電子メールアドレス"
    },
    city: {
      label: "市区町村 (オプション)",
      placeholder: "市区町村を選択してください"
    },
    cityOnOTPForm: {
      label: "市区町村",
      placeholder: "市区町村を選択してください"
    },
    country: {
      label: "国 (オプション)",
      placeholder: "国を選択してください"
    },
    countryOnOTPForm: {
      label: "国",
      placeholder: "国を選択してください"
    },
    state: {
      label: "都道府県 (オプション)",
      placeholder: "都道府県を選択してください"
    },
    stateOnOTPForm: {
      label: "都道府県",
      placeholder: "都道府県を選択してください"
    },
    postalCode: {
      label: "郵便番号 (オプション)",
      placeholder: "郵便番号"
    },
    postalCodeOnOTPForm: {
      label: "郵便番号",
      placeholder: "郵便番号"
    },
    addressLine: {
      label: "住所 (オプション)",
      placeholder: "住所"
    },
    addressLineOnOTPForm: {
      label: "住所",
      placeholder: "住所"
    },
    secondAddressLine: {
      label: "住所行 2 (オプション)",
      placeholder: "住所行 2"
    },
    secondAddressLineOnOTPForm: {
      label: "住所行 2",
      placeholder: "住所行 2"
    },
    phoneNumber: {
      label: "電話番号 (オプション)",
      placeholder: "電話番号"
    },
    phoneNumberOnOTPForm: {
      label: "電話番号",
      placeholder: "電話番号"
    },
    message: {
      label: "メッセージ (オプション)",
      placeholder: 'メッセージフィールドのデータ例: "部門: 地上サポート; 職位: 安全ガード担当長; 上司: Steve Jackson; コメント: 新しいアカウントを作成してください"'
    },
    messageOnOTPForm: {
      label: "メッセージ",
      placeholder: 'メッセージフィールドのデータ例: "部門: 地上サポート; 職位: 安全ガード担当長; 上司: Steve Jackson; コメント: 新しいアカウントを作成してください"'
    }
  },
  messageToApproverTemplate: "会社名: {{companyName}}、\n  電話番号: {{phoneNumber}}、\n  住所: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}}、\n  メッセージ: {{message}}",
  successFormSubmitMessage: "ご登録、ありがとうございます。担当者が間もなく連絡して、アクセス情報を確認いたします。",
  formSubmitButtonLabel: "登録",
  continueWithOTP: "続行",
  goToLoginButtonLabel: "登録済みですか? サインインへ移動",
  httpHandlers: {
    conflict: "この電子メールアドレスのユーザはすでに存在します。"
  },
  messageToFailedToRegister: "登録に失敗しました。支援が必要な場合は管理者に連絡してください。"
};
var userRegistration$6 = {
  userRegistrationForm: userRegistrationForm$6
};
var ja = {
  userRegistration: userRegistration$6
};
var userRegistrationForm$5 = {
  fields: {
    titleCode: {
      label: "호칭(선택사항)",
      placeholder: "호칭"
    },
    titleCodeOnOTPForm: {
      label: "호칭",
      placeholder: "호칭 선택"
    },
    firstName: {
      label: "이름",
      placeholder: "이름"
    },
    lastName: {
      label: "성",
      placeholder: "성"
    },
    companyName: {
      label: "회사 이름",
      placeholder: "회사 이름"
    },
    email: {
      label: "이메일",
      placeholder: "이메일"
    },
    city: {
      label: "시/구/군(선택사항)",
      placeholder: "시/구/군을 선택하십시오."
    },
    cityOnOTPForm: {
      label: "시/구/군",
      placeholder: "시/구/군을 선택하십시오."
    },
    country: {
      label: "국가(선택사항)",
      placeholder: "국가 선택"
    },
    countryOnOTPForm: {
      label: "국가",
      placeholder: "국가 선택"
    },
    state: {
      label: "시/도(선택사항)",
      placeholder: "시/도 선택"
    },
    stateOnOTPForm: {
      label: "시/도",
      placeholder: "시/도 선택"
    },
    postalCode: {
      label: "우편번호(선택사항)",
      placeholder: "우편번호"
    },
    postalCodeOnOTPForm: {
      label: "우편번호",
      placeholder: "우편번호"
    },
    addressLine: {
      label: "주소(선택사항)",
      placeholder: "주소"
    },
    addressLineOnOTPForm: {
      label: "주소",
      placeholder: "주소"
    },
    secondAddressLine: {
      label: "주소 2(선택사항)",
      placeholder: "주소 2"
    },
    secondAddressLineOnOTPForm: {
      label: "주소 2",
      placeholder: "주소 2"
    },
    phoneNumber: {
      label: "전화번호(선택사항)",
      placeholder: "전화번호"
    },
    phoneNumberOnOTPForm: {
      label: "전화번호",
      placeholder: "전화번호"
    },
    message: {
      label: "메시지(선택사항)",
      placeholder: '메시지 필드 예: "부서: 지상 지원, 포지션: 경비 대장, 보고 대상: Steve Jackson, 의견: 저의 새 계정을 만들어주십시오."'
    },
    messageOnOTPForm: {
      label: "메시지",
      placeholder: '메시지 필드 예: "부서: 지상 지원, 포지션: 경비 대장, 보고 대상: Steve Jackson, 의견: 저의 새 계정을 만들어주십시오."'
    }
  },
  messageToApproverTemplate: "회사 이름: {{companyName}},\n  전화 번호: {{phoneNumber}},\n  주소: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  메시지: {{message}}",
  successFormSubmitMessage: "등록해주셔서 감사합니다! 곧 담당자가 연락하여 액세스 정보를 확인해 드리겠습니다.",
  formSubmitButtonLabel: "등록",
  continueWithOTP: "계속",
  goToLoginButtonLabel: "이미 등록하셨습니까? 로그인하십시오.",
  httpHandlers: {
    conflict: "이 이메일 주소를 사용하는 사용자가 이미 있습니다."
  },
  messageToFailedToRegister: "등록하지 못했습니다. 지원 받으려면 관리자에게 문의하십시오."
};
var userRegistration$5 = {
  userRegistrationForm: userRegistrationForm$5
};
var ko = {
  userRegistration: userRegistration$5
};
var userRegistrationForm$4 = {
  fields: {
    titleCode: {
      label: "Tytuł (opcjonalny)",
      placeholder: "Tytuł"
    },
    titleCodeOnOTPForm: {
      label: "Tytuł",
      placeholder: "Wybierz tytuł"
    },
    firstName: {
      label: "Imię",
      placeholder: "Imię"
    },
    lastName: {
      label: "Nazwisko",
      placeholder: "Nazwisko"
    },
    companyName: {
      label: "Nazwa firmy",
      placeholder: "Nazwa firmy"
    },
    email: {
      label: "E-mail",
      placeholder: "E-mail"
    },
    city: {
      label: "Miejscowość (opcjonalna)",
      placeholder: "Wybierz miejscowość"
    },
    cityOnOTPForm: {
      label: "Miasto/Miejscowość",
      placeholder: "Wybierz miejscowość"
    },
    country: {
      label: "Kraj (opcjonalny)",
      placeholder: "Wybierz kraj"
    },
    countryOnOTPForm: {
      label: "Kraj",
      placeholder: "Wybierz kraj"
    },
    state: {
      label: "Stan/województwo (opcjonalny)",
      placeholder: "Wybierz stan/województwo"
    },
    stateOnOTPForm: {
      label: "Województwo/powiat",
      placeholder: "Wybierz stan/województwo"
    },
    postalCode: {
      label: "Kod pocztowy (opcjonalny)",
      placeholder: "Kod pocztowy"
    },
    postalCodeOnOTPForm: {
      label: "Kod pocztowy",
      placeholder: "Kod pocztowy"
    },
    addressLine: {
      label: "Adres (opcjonalny)",
      placeholder: "Adres"
    },
    addressLineOnOTPForm: {
      label: "Adres",
      placeholder: "Adres"
    },
    secondAddressLine: {
      label: "Adres - wiersz 2 (opcjonalna)",
      placeholder: "Adres - wiersz 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Adres - wiersz 2",
      placeholder: "Adres - wiersz 2"
    },
    phoneNumber: {
      label: "Numer telefonu (opcjonalny)",
      placeholder: "Numer telefonu"
    },
    phoneNumberOnOTPForm: {
      label: "Numer telefonu",
      placeholder: "Numer telefonu"
    },
    message: {
      label: "Wiadomość (opcjonalna)",
      placeholder: 'Przykładowe dane pola wiadomości: "Dział: Wsparcie naziemne; Stanowisko: Główny strażnik; Przełożony: Steve Jackson; Uwagi: Utwórz dla mnie nowe konto".'
    },
    messageOnOTPForm: {
      label: "Wiadomość",
      placeholder: 'Przykładowe dane pola wiadomości: "Dział: Wsparcie naziemne; Stanowisko: Główny strażnik; Przełożony: Steve Jackson; Uwagi: Utwórz dla mnie nowe konto".'
    }
  },
  messageToApproverTemplate: "Nazwa firmy: {{companyName}},\n  Numer telefonu: {{phoneNumber}},\n  Adres: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Wiadomość: {{message}}",
  successFormSubmitMessage: "Dziękujemy za rejestrację! Wkrótce skontaktuje się z Tobą nasz przedstawiciel, aby potwierdzić Twoje dane dostępowe.",
  formSubmitButtonLabel: "Zarejestruj się",
  continueWithOTP: "Kontynuuj",
  goToLoginButtonLabel: "Masz już konto? Przejdź do Zaloguj się",
  httpHandlers: {
    conflict: "Użytkownik z tym adresem e-mail już istnieje."
  },
  messageToFailedToRegister: "Rejestracja nie powiodła się. Skontaktuj się z administratorem, aby uzyskać dalszą pomoc."
};
var userRegistration$4 = {
  userRegistrationForm: userRegistrationForm$4
};
var pl = {
  userRegistration: userRegistration$4
};
var userRegistrationForm$3 = {
  fields: {
    titleCode: {
      label: "Título (opcional)",
      placeholder: "Título"
    },
    titleCodeOnOTPForm: {
      label: "Título",
      placeholder: "Selecionar título"
    },
    firstName: {
      label: "Nome",
      placeholder: "Nome"
    },
    lastName: {
      label: "Sobrenome",
      placeholder: "Sobrenome"
    },
    companyName: {
      label: "Nome da empresa",
      placeholder: "Nome da empresa"
    },
    email: {
      label: "E-mail",
      placeholder: "E-mail"
    },
    city: {
      label: "Cidade (opcional)",
      placeholder: "Selecione a cidade"
    },
    cityOnOTPForm: {
      label: "Cidade",
      placeholder: "Selecione a cidade"
    },
    country: {
      label: "País (opcional)",
      placeholder: "Selecione o país"
    },
    countryOnOTPForm: {
      label: "País",
      placeholder: "Selecione o país"
    },
    state: {
      label: "Estado/município (opcional)",
      placeholder: "Selecione o estado/município"
    },
    stateOnOTPForm: {
      label: "Estado/província",
      placeholder: "Selecione o estado/província"
    },
    postalCode: {
      label: "CEP/código postal (opcional)",
      placeholder: "CEP/código postal"
    },
    postalCodeOnOTPForm: {
      label: "CEP/código postal",
      placeholder: "CEP/código postal"
    },
    addressLine: {
      label: "Endereço (opcional)",
      placeholder: "Endereço"
    },
    addressLineOnOTPForm: {
      label: "Endereço",
      placeholder: "Endereço"
    },
    secondAddressLine: {
      label: "Linha 2 do endereço (opcional)",
      placeholder: "Linha 2 do endereço"
    },
    secondAddressLineOnOTPForm: {
      label: "Linha 2 do endereço",
      placeholder: "Linha 2 do endereço"
    },
    phoneNumber: {
      label: "Número de telefone (opcional)",
      placeholder: "Número de telefone"
    },
    phoneNumberOnOTPForm: {
      label: "Número de telefone",
      placeholder: "Número de telefone"
    },
    message: {
      label: "Mensagem (opcional)",
      placeholder: 'Um exemplo de dados para o campo da mensagem: "Departamento: apoio em terra; Posição: chefe de segurança; Reportar a: Steve Jackson; Comentários: crie uma nova conta para mim".'
    },
    messageOnOTPForm: {
      label: "Mensagem",
      placeholder: 'Um exemplo de dados para o campo da mensagem: "Departamento: apoio em terra; Posição: chefe de segurança; Reportar a: Steve Jackson; Comentários: crie uma nova conta para mim".'
    }
  },
  messageToApproverTemplate: "Nome da empresa: {{companyName}},\n  Número de telefone: {{phoneNumber}},\n  Endereço: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Mensagem: {{message}}",
  successFormSubmitMessage: "Obrigado por se registrar! Um representante irá contatar você em breve e confirmar suas informações de acesso.",
  formSubmitButtonLabel: "Registrar",
  continueWithOTP: "Continuar",
  goToLoginButtonLabel: "Já registrado? Vá para Iniciar sessão",
  httpHandlers: {
    conflict: "Já existe um utilizador com este endereço de e-mail."
  },
  messageToFailedToRegister: "Falha no registro. Contate seu administrador para mais assistência."
};
var userRegistration$3 = {
  userRegistrationForm: userRegistrationForm$3
};
var pt = {
  userRegistration: userRegistration$3
};
var userRegistrationForm$2 = {
  fields: {
    titleCode: {
      label: "Обращение (необязательно)",
      placeholder: "Обращение"
    },
    titleCodeOnOTPForm: {
      label: "Обращение",
      placeholder: "Выбрать обращение"
    },
    firstName: {
      label: "Имя",
      placeholder: "Имя"
    },
    lastName: {
      label: "Фамилия",
      placeholder: "Фамилия"
    },
    companyName: {
      label: "Название компании",
      placeholder: "Название компании"
    },
    email: {
      label: "Электронная почта",
      placeholder: "Электронная почта"
    },
    city: {
      label: "Город (необязательно)",
      placeholder: "Выберите город"
    },
    cityOnOTPForm: {
      label: "Город",
      placeholder: "Выберите город"
    },
    country: {
      label: "Страна (необязательно)",
      placeholder: "Выберите страну"
    },
    countryOnOTPForm: {
      label: "Страна",
      placeholder: "Выберите страну"
    },
    state: {
      label: "Регион/область (необязательно)",
      placeholder: "Выберите регион/область"
    },
    stateOnOTPForm: {
      label: "Регион/Область",
      placeholder: "Выберите регион/область"
    },
    postalCode: {
      label: "Почтовый индекс (необязательно)",
      placeholder: "Почтовый индекс"
    },
    postalCodeOnOTPForm: {
      label: "Почтовый индекс",
      placeholder: "Почтовый индекс"
    },
    addressLine: {
      label: "Адрес (необязательно)",
      placeholder: "Адрес"
    },
    addressLineOnOTPForm: {
      label: "Адрес",
      placeholder: "Адрес"
    },
    secondAddressLine: {
      label: "Адрес, строка 2 (необязательно)",
      placeholder: "Адрес, строка 2"
    },
    secondAddressLineOnOTPForm: {
      label: "Адрес, строка 2",
      placeholder: "Адрес, строка 2"
    },
    phoneNumber: {
      label: "Телефон (необязательно)",
      placeholder: "Телефон"
    },
    phoneNumberOnOTPForm: {
      label: "Телефон",
      placeholder: "Телефон"
    },
    message: {
      label: "Сообщение (необязательно)",
      placeholder: 'Пример данных для поля сообщения: "Отдел: наземная поддержка; должность: главный охранник; начальник: Стив Джексон; комментарий: Пожалуйста, создайте для меня новую учетную запись".'
    },
    messageOnOTPForm: {
      label: "Сообщение",
      placeholder: 'Пример данных для поля сообщения: "Отдел: наземная поддержка; должность: главный охранник; начальник: Стив Джексон; комментарий: Пожалуйста, создайте для меня новую учетную запись".'
    }
  },
  messageToApproverTemplate: "Название компании: {{companyName}},\n  Телефон: {{phoneNumber}},\n  Адрес: {{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}},\n  Сообщение: {{message}}",
  successFormSubmitMessage: "Спасибо за регистрацию! Наш представитель свяжется с вами в ближайшее время для подтверждения данных для доступа.",
  formSubmitButtonLabel: "Зарегистрироваться",
  continueWithOTP: "Продолжить",
  goToLoginButtonLabel: "Уже зарегистрированы? Используйте кнопку входа.",
  httpHandlers: {
    conflict: "Пользователь с таким адресом электронной почты уже существует."
  },
  messageToFailedToRegister: "Регистрация не удалась. Обратитесь к администратору."
};
var userRegistration$2 = {
  userRegistrationForm: userRegistrationForm$2
};
var ru = {
  userRegistration: userRegistration$2
};
var userRegistrationForm$1 = {
  fields: {
    titleCode: {
      label: "标题（可选）",
      placeholder: "标题"
    },
    titleCodeOnOTPForm: {
      label: "标题",
      placeholder: "选择标题"
    },
    firstName: {
      label: "名字",
      placeholder: "名字"
    },
    lastName: {
      label: "姓氏",
      placeholder: "姓氏"
    },
    companyName: {
      label: "公司名称",
      placeholder: "公司名称"
    },
    email: {
      label: "电子邮件",
      placeholder: "电子邮件"
    },
    city: {
      label: "市/镇（可选）",
      placeholder: "请选择市/镇"
    },
    cityOnOTPForm: {
      label: "市/镇",
      placeholder: "请选择市/镇"
    },
    country: {
      label: "国家/地区（可选）",
      placeholder: "选择国家/地区"
    },
    countryOnOTPForm: {
      label: "国家/地区",
      placeholder: "选择国家/地区"
    },
    state: {
      label: "州/省（可选）",
      placeholder: "选择州/省"
    },
    stateOnOTPForm: {
      label: "州/省",
      placeholder: "选择州/省"
    },
    postalCode: {
      label: "邮政编码（可选）",
      placeholder: "邮政编码"
    },
    postalCodeOnOTPForm: {
      label: "邮政编码",
      placeholder: "邮政编码"
    },
    addressLine: {
      label: "地址（可选）",
      placeholder: "地址"
    },
    addressLineOnOTPForm: {
      label: "地址",
      placeholder: "地址"
    },
    secondAddressLine: {
      label: "地址行 2（可选）",
      placeholder: "地址行 2"
    },
    secondAddressLineOnOTPForm: {
      label: "地址行 2",
      placeholder: "地址行 2"
    },
    phoneNumber: {
      label: "电话号码（可选）",
      placeholder: "电话号码"
    },
    phoneNumberOnOTPForm: {
      label: "电话号码",
      placeholder: "电话号码"
    },
    message: {
      label: "消息（可选）",
      placeholder: "消息字段的示例数据：“部门：地面支援；职位：首席安全官；直接上级：Steve Jackson；注释：请为我创建新帐户”。"
    },
    messageOnOTPForm: {
      label: "消息",
      placeholder: "消息字段的示例数据：“部门：地面支援；职位：首席安全官；直接上级：Steve Jackson；注释：请为我创建新帐户”。"
    }
  },
  messageToApproverTemplate: "公司名称：{{companyName}}，\n  电话号码：{{phoneNumber}}，\n  地址：{{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}}，\n  消息：{{message}}",
  successFormSubmitMessage: "感谢您的注册！代表会尽快与您联系并确认您的访问信息。",
  formSubmitButtonLabel: "注册",
  continueWithOTP: "继续",
  goToLoginButtonLabel: "已经注册？请转到“注册”",
  httpHandlers: {
    conflict: "具有此电子邮件地址的用户已存在。"
  },
  messageToFailedToRegister: "注册失败。请联系您的管理员寻求进一步帮助。"
};
var userRegistration$1 = {
  userRegistrationForm: userRegistrationForm$1
};
var zh = {
  userRegistration: userRegistration$1
};
var userRegistrationForm = {
  fields: {
    titleCode: {
      label: "稱謂 (選擇性)",
      placeholder: "稱謂"
    },
    titleCodeOnOTPForm: {
      label: "稱謂",
      placeholder: "選擇稱謂"
    },
    firstName: {
      label: "名字",
      placeholder: "名字"
    },
    lastName: {
      label: "姓氏",
      placeholder: "姓氏"
    },
    companyName: {
      label: "公司名稱",
      placeholder: "公司名稱"
    },
    email: {
      label: "電子郵件",
      placeholder: "電子郵件"
    },
    city: {
      label: "城市/城鎮 (選擇性)",
      placeholder: "請選擇城市/城鎮"
    },
    cityOnOTPForm: {
      label: "城市/城鎮",
      placeholder: "請選擇城市/城鎮"
    },
    country: {
      label: "國家/地區 (選擇性)",
      placeholder: "選擇國家/地區"
    },
    countryOnOTPForm: {
      label: "國家/地區",
      placeholder: "選擇國家/地區"
    },
    state: {
      label: "州/省 (選擇性)",
      placeholder: "選擇州/省"
    },
    stateOnOTPForm: {
      label: "州/省",
      placeholder: "選擇州/省"
    },
    postalCode: {
      label: "郵遞區號 (選擇性)",
      placeholder: "郵遞區號"
    },
    postalCodeOnOTPForm: {
      label: "郵遞區號",
      placeholder: "郵遞區號"
    },
    addressLine: {
      label: "地址 (選擇性)",
      placeholder: "地址"
    },
    addressLineOnOTPForm: {
      label: "地址",
      placeholder: "地址"
    },
    secondAddressLine: {
      label: "地址行 2 (選擇性)",
      placeholder: "地址行 2"
    },
    secondAddressLineOnOTPForm: {
      label: "地址行 2",
      placeholder: "地址行 2"
    },
    phoneNumber: {
      label: "電話號碼 (選擇性)",
      placeholder: "電話號碼"
    },
    phoneNumberOnOTPForm: {
      label: "電話號碼",
      placeholder: "電話號碼"
    },
    message: {
      label: "訊息 (選擇性)",
      placeholder: "訊息欄位的範例資料：「部門：地勤支援；保安隊長；主管：Steve Jackson；備註：請為我建立新帳戶」。"
    },
    messageOnOTPForm: {
      label: "訊息",
      placeholder: "訊息欄位的範例資料：「部門：地勤支援；保安隊長；主管：Steve Jackson；備註：請為我建立新帳戶」。"
    }
  },
  messageToApproverTemplate: "公司名稱：{{companyName}}，\n電話號碼：{{phoneNumber}}，\n地址{{addressLine}} {{secondAddressLine}} {{city}} {{state}} {{postalCode}} {{country}}，\n訊息：{{message}}",
  successFormSubmitMessage: "感謝您註冊！業務代表稍後將聯絡您，並確認您的存取資訊。",
  formSubmitButtonLabel: "註冊",
  continueWithOTP: "繼續",
  goToLoginButtonLabel: "已註冊？請登入",
  httpHandlers: {
    conflict: "具有此電子郵件地址的使用者已存在。"
  },
  messageToFailedToRegister: "無法註冊。請聯絡管理員取得進一步協助。"
};
var userRegistration = {
  userRegistrationForm
};
var zh_TW = {
  userRegistration
};
var organizationUserRegistrationTranslationChunksConfig = {
  userRegistration: ["userRegistrationForm"]
};
var organizationUserRegistrationTranslations = {
  en
};
export {
  organizationUserRegistrationTranslationChunksConfig,
  organizationUserRegistrationTranslations,
  cs as organizationUserRegistrationTranslationsCs,
  de as organizationUserRegistrationTranslationsDe,
  en as organizationUserRegistrationTranslationsEn,
  es as organizationUserRegistrationTranslationsEs,
  es_CO as organizationUserRegistrationTranslationsEs_CO,
  fr as organizationUserRegistrationTranslationsFr,
  hi as organizationUserRegistrationTranslationsHi,
  hu as organizationUserRegistrationTranslationsHu,
  id as organizationUserRegistrationTranslationsId,
  it as organizationUserRegistrationTranslationsIt,
  ja as organizationUserRegistrationTranslationsJa,
  ko as organizationUserRegistrationTranslationsKo,
  pl as organizationUserRegistrationTranslationsPl,
  pt as organizationUserRegistrationTranslationsPt,
  ru as organizationUserRegistrationTranslationsRu,
  zh as organizationUserRegistrationTranslationsZh,
  zh_TW as organizationUserRegistrationTranslationsZh_TW
};
//# sourceMappingURL=@spartacus_organization_user-registration_assets.js.map
