import "./chunk-EWA6Q2EU.js";

// node_modules/@spartacus/organization/fesm2022/spartacus-organization-administration-assets.mjs
var organization$w = {
  enabled: "Aktivní",
  disabled: "Deaktivováno",
  enable: "Aktivovat",
  disable: "Deaktivovat",
  name: "Název",
  code: "Kód",
  done: "hotovo",
  cancel: "Zrušit",
  add: "Přidat",
  manageUsers: "Správa uživatelů",
  create: "Vytvořit {{name}}",
  edit: "Upravit",
  save: "Uložit {{name}}",
  "delete": "Vymazat",
  assign: "Spravovat",
  active: "Aktivní",
  status: "Status",
  details: "Detaily",
  messages: {
    emptyList: "Tento seznam je prázdný."
  },
  userRoles: {
    b2bcustomergroup: "Zákazník",
    b2bapprovergroup: "Schvalovatel",
    b2bmanagergroup: "Manažer",
    b2badmingroup: "Správce"
  },
  userRights: {
    unitorderviewergroup: "Zobrazit objednávky na úrovni jednotek"
  },
  breadcrumb: "Organizace",
  notification: {
    noSufficientPermissions: "Pro přístup na tuto stránku nemáte dostatečné oprávnění",
    notExist: "Tato položka neexistuje.",
    disabled: "Nemůžete upravovat deaktivovanou položku"
  },
  confirmation: {
    cancel: "ZRUŠIT",
    confirm: "POTVRDIT",
    disable: "DEAKTIVOVAT",
    "delete": "SMAZAT"
  },
  httpHandlers: {
    conflict: {
      budget: "Rozpočet s kódem {{ code }} již existuje.",
      costCenter: "Nákladové středisko s kódem {{ code }} již existuje.",
      unit: "Organizační jednotka s UID {{ code }} již existuje.",
      user: "Uživatel s e-mailem {{ code }} již existuje.",
      userGroup: "Uživatelská skupina s ID {{ code }} již existuje.",
      permission: "Oprávnění ke schvalování s kódem {{ code }} již existuje.",
      unknown: "Chyba ověření serveru."
    }
  },
  information: "Další informace o {{title}}"
};
var orgCostCenter$g = {
  groupName: "Nákladová střediska",
  header: "Všechna nákladová střediska ({{count}})",
  code: "Kód",
  active: "Status",
  name: "Název",
  currency: "Měna",
  unit: "Nadřazená jednotka",
  actions: "",
  sortBy: "Řadit podle",
  sort: {
    byName: "Název",
    byUnitName: "Jednotka",
    byCode: "Kód"
  },
  hint: "Všechny objednávky zadané prostřednictvím nákupního účtu vaší organizace jsou pro účely sledování propojeny s nákladovým střediskem. Každá jednotka může mít více nákladových středisek. K omezení výdajů se nákladovým střediskům přiřazují rozpočty. Nákupčí si ve fázi kontroly a potvrzení vybere nákladové středisko.",
  disable: {
    confirm: "Deaktivovat"
  },
  messages: {
    deactivateTitle: "Deaktivovat nákladové středisko?",
    deactivate: "Deaktivovaná nákladová střediska nemohou být použita pro zadávání nových objednávek. Ujistěte se, že vaše jednotka má alespoň jedno nákladové středisko. Existující objednávky nejsou dotčeny.",
    confirmEnabled: "Nákladové středisko {{ item.name }} bylo úspěšně aktivováno.",
    confirmDisabled: "Nákladové středisko {{ item.name }} bylo úspěšně deaktivováno.",
    update: "Nákladové středisko {{ item.name }} bylo úspěšně aktualizováno.",
    create: "Nákladové středisko {{ item.name }} bylo úspěšně vytvořeno."
  },
  info: {
    disabledEdit: "Aktivujte nákladové středisko, aby ho bylo možné upravovat.",
    disabledEnable: "Než bude možné aktivovat toto nákladové středisko, je třeba aktivovat jednotku."
  },
  details: {
    title: "Detaily nákladového střediska",
    subtitle: "Nákladové středisko: {{ item.name }}"
  },
  edit: {
    title: "Upravit nákladové středisko",
    subtitle: "Nákladové středisko: {{ item.name }}"
  },
  create: {
    title: "Vytvořit nákladové středisko",
    subtitle: ""
  },
  budget: {
    link: "Rozpočty"
  },
  breadcrumbs: {
    list: "Všechna nákladové střediska",
    details: "{{name}}",
    budgets: "Rozpočty"
  }
};
var orgCostCenterBudgets$g = {
  title: "Správa rozpočtů.",
  subtitle: "Nákladové středisko: {{ item.name }}",
  assigned: "Rozpočet {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení rozpočtu {{ item.name }} úspěšně zrušeno"
};
var orgCostCenterAssignedBudgets$g = {
  title: "Přiřazené rozpočty",
  subtitle: "Nákladové středisko: {{ item.name }}",
  assigned: "Rozpočet {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení rozpočtu {{ item.name }} úspěšně zrušeno"
};
var orgBudget$g = {
  groupName: "Rozpočty",
  header: "Všechny rozpočty ({{count}})",
  code: "Kód",
  name: "Název",
  active: "Status",
  currency: "Měna",
  amount: "Částka",
  unit: "Jednotka",
  businessUnits: "Jednotka",
  dateRange: "Začátek – konec",
  startDate: "Začátek",
  endDate: "Konec",
  actions: "",
  sortBy: "Řadit podle",
  sort: {
    byName: "Název",
    byUnitName: "Jednotka",
    byCode: "Kód",
    byValue: "Hodnota"
  },
  hint: "Rozpočty určují celkové limity nákupů a jsou přiřazeny nákladovým střediskům. Nákupčí si vybere nákladové středisko při kontrole a potvrzení.",
  details: {
    title: "Detaily rozpočtu",
    subtitle: "Rozpočet: {{ item.name }}"
  },
  edit: {
    title: "Upravit rozpočet",
    subtitle: "Rozpočet: {{ item.name }}"
  },
  create: {
    title: "Vytvořit rozpočet",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Deaktivovat tento rozpočet?",
    deactivate: "Deaktivované rozpočty se již nevztahují na nákladová střediska, ke kterým byly přiřazeny. Ujistěte se, že přiřazené nákladové středisko má alespoň jeden rozpočet.",
    confirmEnabled: "Rozpočet {{ item.name }} úspěšně aktivován",
    confirmDisabled: "Rozpočet {{ item.name }} úspěšně deaktivován",
    update: "Rozpočet {{ item.name }} úspěšně aktualizován",
    create: "Rozpočet {{ item.name }} úspěšně vytvořen"
  },
  info: {
    disabledEdit: "Aktivujte rozpočet, aby ho bylo možné upravovat.",
    disabledEnable: "Než bude možné aktivovat tento rozpočet, je třeba aktivovat jednotku."
  },
  links: {
    costCenters: "Nákladová střediska"
  },
  breadcrumbs: {
    list: "Všechny rozpočty",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$g = {
  title: "Nákladová střediska",
  subtitle: "Rozpočet: {{ item.name }}"
};
var orgUnit$g = {
  groupName: "Jednotky",
  header: "Všechny jednotky ({{count}})",
  unit: "Jednotka",
  name: "Název",
  uid: "ID",
  approvalProcess: "Proces schvalování",
  parentUnit: "Nadřazená jednotka",
  active: "Status",
  hint: "Jednotky představují oddělení, prodejny, regiony nebo jakékoli další logická uskupení, která vám dávají smysl. Nákladová střediska a dodací adresy, které má nákupčí k dispozici při kontrole a potvrzení, závisí na jeho jednotce. Uživatelé mají přístup ke všem podřízeným jednotkám své primární jednotky.",
  details: {
    title: "Detaily jednotky",
    subtitle: "Jednotka: {{ item.name }}",
    hint: "Jednotky představují oddělení, prodejny, regiony nebo jakékoli další logická uskupení, která vám dávají smysl. Když deaktivujete jednotku, deaktivujete tím všechny její podřízené elementy včetně podřízených jednotek, uživatelů, schvalovatelů a nákladových středisek. Deaktivované jednotky nelze upravovat."
  },
  edit: {
    title: "Upravit jednotku",
    subtitle: "Jednotka: {{ item.name }}"
  },
  create: {
    title: "Vytvořit jednotku",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Deaktivovat tuto jednotku?",
    deactivate: "Deaktivace jednotky má rozsáhlý vliv na celou vaši obchodní organizaci. VŠECHNY podřízené jednotky, uživatelé, rozpočty a nákladová střediska budou rovněž deaktivována.",
    confirmEnabled: "Jednotka {{ item.name }} úspěšně aktivována",
    confirmDisabled: "Jednotka {{ item.name }} úspěšně deaktivována",
    update: "Jednotka {{ item.name }} úspěšně aktualizována",
    create: "Jednotka {{ item.name }} úspěšně vytvořena"
  },
  info: {
    disabledEdit: "Aktivujte jednotku, aby ji bylo možné upravovat.",
    disabledEnable: "Než bude možné aktivovat tuto jednotku, je třeba aktivovat její nadřazenou jednotku.",
    disabledDisable: "Kořenovou jednotku nelze deaktivovat."
  },
  links: {
    units: "Podřízené jednotky",
    users: "Uživatelé",
    approvers: "Schvalovatelé",
    shippingAddresses: "Dodací adresy",
    costCenters: "Nákladová střediska"
  },
  tree: {
    expandAll: "Rozbalit vše",
    collapseAll: "Sbalit vše",
    expand: "Rozbalit",
    collapse: "Sbalit",
    explore: "Prozkoumat podjednotky"
  },
  children: {
    create: {
      title: "Vytvořit podřízenou jednotku",
      subtitle: ""
    },
    messages: {
      create: "Jednotka {{ item.name }} úspěšně vytvořena"
    }
  },
  costCenters: {
    create: {
      title: "Vytvořit nákladové středisko",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Nadřazená obchodní jednotka",
    create: "Vytvořit jednotku",
    parentOrgUnitNotes: "Tato jednotka je ve vaší organizaci jednotkou nejvyšší úrovně. Nelze ji přiřadit jiné jednotce."
  },
  users: {
    header: "Uživatelé v {{code}}",
    changeUserRoles: "Změnit role uživatelů",
    newUser: "Nový uživatel"
  },
  assignRoles: {
    header: "Spravovat role v {{code}}",
    instructions: {
      check: "Chcete-li uživateli přiřadit roli, zaškrtněte příslušné pole dané role.",
      uncheck: "Chcete-li uživateli odebrat roli, zrušte zaškrtnutí příslušného pole.",
      changes: "Změny se ukládají automaticky."
    }
  },
  approvers: {
    header: "Schvalovatelé v {{code}}",
    assign: "Správa schvalovatelů",
    "new": "Nový schvalovatel"
  },
  assignApprovers: {
    header: "Spravovat schvalovatele v {{code}}",
    instructions: {
      check: "Chcete-li této jednotce přiřadit schvalovatele, zaškrtněte u něj příslušné pole.",
      uncheck: "Chcete-li odebrat schvalovatele, zrušte zaškrtnutí příslušného pole.",
      changes: "Změny se ukládají automaticky."
    },
    hint: "Uživatelé uvedení v seznamu Schvalovatelé mají přidělena práva schvalovat nákupčí dané jednotky a podřízených jednotek. Vezměte na vědomí, že uživatel s rolí schvalovatele není totéž jako schvalovatel uvedený v seznamu Schvalovatelé. Pokud pro jednotku neexistuje schvalovatel nebo pokud schvalovatelé nemají dostatečná práva ke schválení nákupu, hledá se schvalovatel výše v hierarchii jednotek, až je vybrán správce."
  },
  breadcrumbs: {
    list: "Všechny jednotky",
    details: "{{name}}",
    children: "Podřízené jednotky",
    users: "Uživatelé",
    approvers: "Schvalovatelé",
    addresses: "Dodací adresy",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Nákladová střediska"
  }
};
var orgUnitChildren$g = {
  title: "Podřízené jednotky",
  subtitle: "Jednotka: {{ item.name }}",
  info: {
    disabledCreate: "K deaktivovaným jednotkám nelze vytvářet podřízené jednotky."
  },
  hint: "Jednotky představují oddělení, prodejny, regiony nebo jakékoli další logická uskupení, která vám dávají smysl. Uživatelé „dědí“ podřízené jednotky. To znamená, že nákupčí mají při kontrole a potvrzení přístup do nákladových středisek a k dodacím adresám podřízených jednotek."
};
var orgUnitApprovers$g = {
  title: "Správa schvalovatelů",
  subtitle: "Jednotka: {{ item.name }}",
  assigned: "Uživatel {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení uživatele {{ item.name }} úspěšně zrušeno"
};
var orgUnitAssignedApprovers$g = {
  title: "Přiřazení schvalovatelé",
  subtitle: "Jednotka: {{ item.name }}",
  assigned: "Uživatel {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení uživatele {{ item.name }} úspěšně zrušeno",
  hint: "Uživatelé uvedení v seznamu Schvalovatelé mají přidělena práva schvalovat nákupčí dané jednotky a podřízených jednotek. Vezměte na vědomí, že uživatel s rolí schvalovatele není totéž jako schvalovatel uvedený v seznamu Schvalovatelé. Pokud pro jednotku neexistuje schvalovatel nebo pokud schvalovatelé nemají dostatečná práva ke schválení nákupu, hledá se schvalovatel výše v hierarchii jednotek, až je vybrán správce."
};
var orgUnitAssignedRoles$g = {
  header: "Spravovat role v {{code}}",
  name: "Název",
  email: "E-mail",
  roles: "Role",
  roleCustomer: "Zákazník",
  roleApprover: "Schvalovatel",
  roleManager: "Manažer",
  roleAdministrator: "Správce"
};
var orgUnitUsers$g = {
  title: "Přiřazení uživatelé",
  subtitle: "Jednotka: {{ item.name }}",
  info: {
    disabledCreate: "K deaktivovaným jednotkám nelze vytvářet uživatele."
  },
  hint: "Uživatelé jsou nákupčí, schvalovatelé, manažeři a správci vaší organizace. Každému uživateli je přiřazena role k provádění nebo schvalování nákupů. Uživatelé „dědí“ podřízené jednotky, což znamená, že nákupčí mají při kontrole a potvrzení přístup k nákladovým střediskům a dodacím adresám podřízených jednotek."
};
var orgUnitUserRoles$g = {
  title: "Role a práva uživatelů",
  subtitle: "Uživatel: {{ item.name }}",
  messages: {
    rolesUpdated: "Role {{item.name}} byly úspěšně aktualizovány"
  }
};
var orgUnitAssignedUsers$g = {
  title: "Přiřazení uživatelé",
  subtitle: "Jednotka: {{ item.name }}"
};
var orgUnitCostCenters$g = {
  title: "Přiřazená nákladová střediska",
  subtitle: "Jednotka: {{ item.name }}",
  info: {
    disabledCreate: "K deaktivovaným jednotkám nelze vytvářet nákladová střediska."
  },
  hint: "Veškeré objednávky podané prostřednictvím nákupního účtu vaší organizace jsou pro účely sledování propojeny s nákladovým střediskem. Nákupčí si zvolí nákladové středisko ve fázi kontroly a potvrzení při použití metody nákupu „Účet“. Každá jednotka může mít více nákladových středisek, ale konkrétní nákladové středisko smí být přiřazeno pouze jedné jednotce. Nákladovým střediskům se přiřazují rozpočty, které definují limit maximálních výdajů. "
};
var orgUnitAddress$g = {
  title: "Dodací adresy",
  subtitle: "Jednotka: {{ item.name }}",
  country: "Země/region",
  titles: "Oslovení",
  firstName: "Křestní jméno",
  lastName: "Příjmení",
  formattedAddress: "Adresa",
  address1: "Adresa",
  address2: "2. adresa (volitelná)",
  city: "Město",
  state: "Stát",
  zipCode: "PSČ",
  phoneNumber: "Telefonní číslo (volitelné)",
  streetAddress: "Ulice",
  aptSuite: "Číslo bytu",
  selectOne: "Vyberte jedno…",
  hint: "Když nákupčí finalizuje objednávku ve fázi kontrola a potvrzení prostřednictvím metody nákupu „Účet“, musí vybrat nákladové středisko. Dodací adresy, které má nákupčí k dispozici, závisejí na jednotce zvoleného nákladového střediska.",
  details: {
    title: "Detaily adresy",
    subtitle: "Jednotka: {{ item.name }}"
  },
  edit: {
    title: "Upravit adresu"
  },
  create: {
    title: "Vytvořit adresu"
  },
  form: {
    subtitle: "Jednotka: {{ item.name }}"
  },
  messages: {
    create: "Adresa {{ item.firstName }} {{ item.lastName }} úspěšně vytvořena",
    update: "Adresa {{ item.firstName }} {{ item.lastName }} úspěšně aktualizována",
    "delete": "Adresu nelze vrátit. Existující objednávky nebudou dotčeny.",
    deleteTitle: "Odstranit tuto adresu?",
    deleted: "Adresa {{ item.firstName }} {{ item.lastName }} úspěšně odstraněna"
  }
};
var orgUserGroup$g = {
  groupName: "Skupiny uživatelů",
  header: "Všechny skupiny uživatelů: ({{count}})",
  disabled: "(deaktivováno)",
  uid: "Kód",
  name: "Název",
  unit: "Jednotka",
  orgUnit: "Jednotka",
  actions: "",
  sortBy: "Řadit podle",
  sort: {
    byName: "Název",
    byUnitName: "Jednotka",
    byGroupID: "Skupina"
  },
  hint: "Skupiny uživatelů umožňují sdružit uživatele do skupin a následně nastavovat více uživatelům limity nákupu najednou.",
  details: {
    title: "Detaily skupiny uživatelů",
    subtitle: "Skupina uživatelů: {{ item.name }}"
  },
  edit: {
    title: "Upravit skupinu uživatelů",
    subtitle: "Skupina uživatelů: {{ item.name }}"
  },
  create: {
    title: "Vytvořit skupinu uživatelů",
    subtitle: ""
  },
  links: {
    user: "Uživatelé",
    permission: "Limity nákupu"
  },
  messages: {
    update: "Skupina uživatelů {{ item.name }} úspěšně aktualizována",
    create: "Skupina uživatelů {{ item.name }} úspěšně vytvořena",
    deleteTitle: "Odstranit skupinu uživatelů?",
    "delete": "Uživatelů v této skupině se nijak nedotkne, když bude skupina odstraněna.",
    deleted: "Skupina uživatelů {{ item.name }} úspěšně odstraněna"
  },
  breadcrumbs: {
    list: "Všechny skupiny uživatelů",
    details: "{{name}}",
    users: "Uživatelé",
    permissions: "Limity nákupu"
  }
};
var orgUserGroupUsers$g = {
  title: "Správa uživatelů",
  subtitle: "Skupina uživatelů: {{ item.name }}",
  assigned: "Uživatel {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení uživatele {{ item.name }} úspěšně zrušeno",
  unassignAll: "Zrušit přiřazení všech",
  unassignAllConfirmation: "Přiřazení všech uživatelů úspěšně zrušeno"
};
var orgUserGroupAssignedUsers$g = {
  title: "Přiřazení uživatelé",
  subtitle: "Skupina uživatelů: {{ item.name }}",
  assigned: "Uživatel {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení uživatele {{ item.name }} úspěšně zrušeno"
};
var orgUserGroupPermissions$g = {
  title: "Správa limitů nákupu",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Limity nákupu {{item.code}} úspěšně přiřazeny",
  unassigned: "Přiřazení limitů nákupu {{item.code}} úspěšně zrušeno"
};
var orgUserGroupAssignedPermissions$g = {
  title: "Přiřazené limity nákupu",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Limity nákupu {{item.code}} úspěšně přiřazeny",
  unassigned: "Přiřazení limitů nákupu {{item.code}} úspěšně zrušeno"
};
var orgUser$g = {
  groupName: "Uživatelé",
  header: "Všichni uživatelé ({{count}})",
  disabled: "(deaktivováno)",
  uid: "E-mail",
  active: "Status",
  name: "Název",
  firstName: "Křestní jméno",
  lastName: "Příjmení",
  email: "E-mail",
  orgUnit: "Jednotka",
  unit: "Jednotka",
  roles: "Role",
  rights: "Práva",
  title: "Oslovení",
  hint: "Uživatelé jsou nákupčí, schvalovatelé, manažeři a správci vaší organizace. Každému uživateli je přiřazena role k provádění nebo schvalování nákupů. Každý uživatel je přiřazen konkrétní jednotce a má přístup ke všem podřízeným jednotkám dané primární jednotky.",
  unitApprover: "Schvalovatel jednotky",
  assignApprover: "Přidat uživatele mezi schvalovatele jednotky",
  actions: "",
  sortBy: "Řadit podle",
  sort: {
    byName: "Název",
    byUnit: "Jednotka"
  },
  details: {
    title: "Detaily uživatele",
    subtitle: "Uživatel: {{ item.name }}"
  },
  edit: {
    title: "Upravit uživatele",
    subtitle: "Uživatel: {{ item.name }}"
  },
  create: {
    title: "Vytvořit uživatele",
    subtitle: ""
  },
  links: {
    password: "Změnit heslo",
    approvers: "Schvalovatelé",
    userGroup: "Uživatelské skupiny",
    permission: "Limity nákupu",
    rolesAndRights: "Role a práva"
  },
  messages: {
    deactivateTitle: "Deaktivovat tohoto uživatele?",
    deactivate: "Deaktivovaní uživatelé se nemohou přihlásit na storefront a zadávat objednávky.",
    confirmEnabled: "Uživatel {{ item.firstName }} {{ item.lastName }} úspěšně aktivován",
    confirmDisabled: "Uživatel {{ item.firstName }} {{ item.lastName }} úspěšně deaktivován",
    update: "Uživatel {{ item.firstName }} {{ item.lastName }} úspěšně aktualizován",
    create: "Uživatel {{ item.firstName }} {{ item.lastName }} úspěšně vytvořen",
    updatePassword: "Heslo uživatele {{item.firstName}} {{item.lastName}} úspěšně aktualizováno"
  },
  info: {
    disabledEdit: "Aktivujte uživatele, aby ho bylo možné upravovat.",
    disabledEnable: "Než bude možné aktivovat tohoto uživatele, je třeba aktivovat jednotku."
  },
  approver: {
    link: "Schvalovatelé",
    header: "Schvalovatelé v {{code}}",
    assign: "Přiřadit schvalovatele",
    assignHeader: "Přiřadit schvalovatele {{code}}",
    back: "Zpět",
    "new": "Nový schvalovatel",
    instructions: {
      check: "Chcete-li tomuto uživateli přiřadit schvalovatele, zaškrtněte u něj příslušné pole.",
      uncheck: "Chcete-li odebrat schvalovatele, zrušte zaškrtnutí příslušného pole.",
      changes: "Změny se ukládají automaticky."
    }
  },
  userGroup: {
    link: "Skupiny uživatelů",
    header: "Skupiny uživatelů v {{code}}",
    assign: "Přiřadit skupiny uživatelů",
    assignHeader: "Přiřadit skupiny uživatelů v {{code}}",
    back: "Zpět",
    instructions: {
      check: "Chcete-li tomuto uživateli přiřadit skupinu, zaškrtněte u něj příslušné pole.",
      uncheck: "Chcete-li odebrat skupinu uživatelů, zrušte zaškrtnutí příslušného pole.",
      changes: "Změny se ukládají automaticky."
    }
  },
  permission: {
    link: "Limity nákupu",
    header: "Limity nákupu v {{code}}",
    assign: "Přiřadit limity nákupu",
    assignHeader: "Přiřadit limity nákupu v {{code}}",
    back: "Zpět",
    instructions: {
      check: "Chcete-li přiřadit tomuto uživateli limity nákupu, zaškrtněte u něj příslušné pole.",
      uncheck: "Chcete-li odebrat limity nákupu, zrušte zaškrtnutí příslušného pole.",
      changes: "Změny se ukládají automaticky."
    },
    per: {
      "undefined": "",
      MONTH: "za měsíc",
      YEAR: "za rok",
      WEEK: "za týden",
      QUARTER: "za čtvrletí"
    }
  },
  password: {
    title: "Změnit heslo",
    subtitle: "Uživatel: {{ item.name }}",
    newPassword: "Nové heslo",
    confirmPassword: "Napište nové heslo znovu"
  },
  breadcrumbs: {
    list: "Všichni uživatelé",
    details: "{{name}}",
    userGroups: "Skupiny uživatelů",
    approvers: "Schvalovatelé",
    permissions: "Limity nákupu"
  }
};
var orgUserUserGroups$g = {
  title: "Správa skupin uživatelů",
  subtitle: "Uživatel: {{ item.name }}",
  assigned: "Skupina uživatelů {{ item.name }} úspěšně přiřazena",
  unassigned: "Přiřazení skupiny uživatelů {{item.name}} úspěšně zrušeno"
};
var orgUserAssignedUserGroups$g = {
  title: "Přiřazené skupiny uživatelů",
  subtitle: "Uživatel: {{ item.name }}",
  assigned: "Skupina uživatelů {{ item.name }} úspěšně přiřazena",
  unassigned: "Přiřazení skupiny uživatelů {{item.name}} úspěšně zrušeno"
};
var orgUserApprovers$g = {
  title: "Správa schvalovatelů",
  subtitle: "Uživatel: {{ item.name }}",
  assigned: "Schvalovatel {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení schvalovatele {{ item.name }} úspěšně zrušeno"
};
var orgUserAssignedApprovers$g = {
  title: "Přiřazení schvalovatelé",
  subtitle: "Uživatel: {{ item.name }}",
  assigned: "Schvalovatel {{ item.name }} úspěšně přiřazen",
  unassigned: "Přiřazení schvalovatele {{ item.name }} úspěšně zrušeno"
};
var orgUserPermissions$g = {
  title: "Správa limitů nákupu",
  subtitle: "Uživatel: {{ item.name }}",
  assigned: "Limity nákupu {{item.code}} úspěšně přiřazeny",
  unassigned: "Přiřazení limitů nákupu {{item.code}} úspěšně zrušeno"
};
var orgUserAssignedPermissions$g = {
  title: "Přiřazené limity nákupu",
  subtitle: "Uživatel: {{ item.name }}",
  assigned: "Limity nákupu {{item.code}} úspěšně přiřazeny",
  unassigned: "Přiřazení limitů nákupu {{item.code}} úspěšně zrušeno"
};
var orgPurchaseLimit$g = {
  groupName: "Limity nákupu",
  header: "Všechny limity nákupu ({{count}})",
  name: "Název",
  code: "Kód",
  active: "Status",
  limit: "Limit",
  orderApprovalPermissionType: "Typ",
  threshold: "Práh",
  periodRange: "Období",
  currency: "Měna",
  orgUnit: "Nadřazená jednotka",
  unit: "Nadřazená jednotka",
  actions: "",
  hint: "Limity nákupu pomáhají kontrolovat výdaje stanovením, kolik mohou nákupčí utratit za jednu objednávku nebo za týden, měsíc, čtvrtletí či rok. Nákupní limity se přiřazují uživatelům nebo skupinám uživatelů. Nákupní limity se přidělují také schvalovatelům a určují, do jaké výše mohou nákupy schvalovat. Pomocí skupin uživatelů můžete limity nákupu přiřadit mnoha uživatelům najednou.",
  details: {
    title: "Detaily limitu nákupu",
    subtitle: "Limit nákupu: {{ item.code }}"
  },
  edit: {
    title: "Upravit limit nákupu",
    subtitle: "Limity nákupu: {{ item.code }}"
  },
  create: {
    title: "Vytvořit limit nákupu",
    subtitle: ""
  },
  sortBy: "Řadit podle",
  sort: {
    byName: "Název",
    byUnitName: "Jednotka"
  },
  messages: {
    deactivateTitle: "Deaktivovat tento limit nákupu?",
    deactivate: "Deaktivované limity nákupu již nelze dále přiřazovat uživatelům ani skupinám uživatelů. Na stávající přiřazení to nebude mít vliv.",
    confirmEnabled: "Limity nákupu {{item.code}} úspěšně aktivovány",
    confirmDisabled: "Limity nákupu {{item.code}} úspěšně deaktivovány",
    update: "Limity nákupu {{item.code}} úspěšně aktualizovány",
    create: "Limity nákupu {{item.code}} úspěšně vytvořeny"
  },
  info: {
    disabledEdit: "Aktivujte limit nákupu, aby jej bylo možné upravovat.",
    disabledEnable: "Než bude možné aktivovat tento limit nákupu, je třeba aktivovat jednotku."
  },
  per: {
    DAY: "za den",
    WEEK: "za týden",
    MONTH: "za měsíc",
    QUARTER: "za čtvrtletí",
    YEAR: "za rok"
  },
  breadcrumbs: {
    list: "Všechny limity nákupu",
    details: "{{code}}"
  }
};
var organization$x = {
  organization: organization$w,
  orgCostCenter: orgCostCenter$g,
  orgCostCenterBudgets: orgCostCenterBudgets$g,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$g,
  orgBudget: orgBudget$g,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$g,
  orgUnit: orgUnit$g,
  orgUnitChildren: orgUnitChildren$g,
  orgUnitApprovers: orgUnitApprovers$g,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$g,
  orgUnitAssignedRoles: orgUnitAssignedRoles$g,
  orgUnitUsers: orgUnitUsers$g,
  orgUnitUserRoles: orgUnitUserRoles$g,
  orgUnitAssignedUsers: orgUnitAssignedUsers$g,
  orgUnitCostCenters: orgUnitCostCenters$g,
  orgUnitAddress: orgUnitAddress$g,
  orgUserGroup: orgUserGroup$g,
  orgUserGroupUsers: orgUserGroupUsers$g,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$g,
  orgUserGroupPermissions: orgUserGroupPermissions$g,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$g,
  orgUser: orgUser$g,
  orgUserUserGroups: orgUserUserGroups$g,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$g,
  orgUserApprovers: orgUserApprovers$g,
  orgUserAssignedApprovers: orgUserAssignedApprovers$g,
  orgUserPermissions: orgUserPermissions$g,
  orgUserAssignedPermissions: orgUserAssignedPermissions$g,
  orgPurchaseLimit: orgPurchaseLimit$g
};
var cs = {
  organization: organization$x
};
var organization$u = {
  enabled: "Aktiv",
  disabled: "Deaktiviert",
  enable: "Aktivieren",
  disable: "Deaktivieren",
  name: "Name",
  code: "Code",
  done: "fertig",
  cancel: "Abbrechen",
  add: "Hinzufügen",
  manageUsers: "Benutzer verwalten",
  create: "{{name}} erstellen",
  edit: "Bearbeiten",
  save: "{{name}} speichern",
  "delete": "Löschen",
  assign: "Verwalten",
  active: "Aktiv",
  status: "Status",
  details: "Details",
  messages: {
    emptyList: "Die Liste ist leer"
  },
  userRoles: {
    b2bcustomergroup: "Kunde",
    b2bapprovergroup: "Genehmigende Person",
    b2bmanagergroup: "Manager",
    b2badmingroup: "Admin"
  },
  userRights: {
    unitorderviewergroup: "Bestellungen der untergeordneten Ebenen anzeigen"
  },
  breadcrumb: "Organisation",
  notification: {
    noSufficientPermissions: "Keine ausreichenden Berechtigungen für den Zugriff auf diese Seite",
    notExist: "Diese Position ist nicht vorhanden",
    disabled: "Sie können eine deaktivierte Position nicht bearbeiten."
  },
  confirmation: {
    cancel: "ABBRECHEN",
    confirm: "BESTÄTIGEN",
    disable: "DEAKTIVIEREN",
    "delete": "LÖSCHEN"
  },
  httpHandlers: {
    conflict: {
      budget: "Budget mit Code {{ code }} ist bereits vorhanden.",
      costCenter: "Kostenstelle mit Code {{ code }} ist bereits vorhanden.",
      unit: "Organisationseinheit mit UID {{ code }} ist bereits vorhanden.",
      user: "Benutzer mit E-Mail-Adresse {{ code }} ist bereits vorhanden",
      userGroup: "Benutzergruppe mit ID {{ code }} ist bereits vorhanden",
      permission: "Genehmigungsberechtigng mit Code {{ code }} ist bereits vorhanden.",
      unknown: "Servervalidierungsfehler"
    }
  },
  information: "Weitere Informationen über {{title}}"
};
var orgCostCenter$f = {
  groupName: "Kostenstellen",
  header: "Alle Kostenstellen ({{count}})",
  code: "Code",
  active: "Status",
  name: "Name",
  currency: "Währung",
  unit: "Übergeordnete Einheit",
  actions: "",
  sortBy: "Sortieren nach",
  sort: {
    byName: "Name",
    byUnitName: "Einheit",
    byCode: "Code"
  },
  hint: "Alle Bestellungen, die über das Einkaufskonto Ihrer Organisation vorgenommen werden, werden zu Nachverfolgungszwecken mit einer Kostenstelle verknüpft. Jede Einheit kann mehrere Kostenstellen haben. Um Ausgaben zu begrenzen, werden den Kostenstellen Budgets zugeordnet. Ein Käufer wählt beim Bezahlen eine Kostenstelle aus.",
  disable: {
    confirm: "Deaktivieren"
  },
  messages: {
    deactivateTitle: "Diese Kostenstelle deaktivieren?",
    deactivate: "Deaktivierte Kostenstellen können nicht für neue Bestellungen verwendet werden. Stellen Sie sicher, dass Ihre Einheit mindestens eine Kostenstelle hat. Vorhandene Bestellungen sind nicht betroffen.",
    confirmEnabled: "Kostenstelle {{ item.name }} erfolgreich aktiviert",
    confirmDisabled: "Kostenstelle {{ item.name }} erfolgreich deaktiviert",
    update: "Kostenstelle {{ item.name }} erfolgreich aktualisiert",
    create: "Kostenstelle {{ item.name }} erfolgreich erstellt"
  },
  info: {
    disabledEdit: "Aktivieren Sie die Kostenstelle, um die Bearbeitung zu ermöglichen.",
    disabledEnable: "Einheit muss aktiviert werden, bevor diese Kostenstelle aktiviert werden kann."
  },
  details: {
    title: "Kostenstellendetails",
    subtitle: "Kostenstelle: {{ item.name }}"
  },
  edit: {
    title: "Kostenstelle bearbeiten",
    subtitle: "Kostenstelle: {{ item.name }}"
  },
  create: {
    title: "Kostenstelle erstellen",
    subtitle: ""
  },
  budget: {
    link: "Budgets"
  },
  breadcrumbs: {
    list: "Alle Kostenstellen",
    details: "{{name}}",
    budgets: "Budgets"
  }
};
var orgCostCenterBudgets$f = {
  title: "Budgets verwalten",
  subtitle: "Kostenstelle: {{ item.name }}",
  assigned: "Budget {{ item.name }} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Budgets {{ item.name }} erfolgreich aufgehoben"
};
var orgCostCenterAssignedBudgets$f = {
  title: "Zugeordnete Budgets",
  subtitle: "Kostenstelle: {{ item.name }}",
  assigned: "Budget {{ item.name }} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Budgets {{ item.name }} erfolgreich aufgehoben"
};
var orgBudget$f = {
  groupName: "Budgets",
  header: "Alle Budgets ({{count}})",
  code: "Code",
  name: "Name",
  active: "Status",
  currency: "Währung",
  amount: "Betrag",
  unit: "Einheit",
  businessUnits: "Einheit",
  dateRange: "Start - Ende",
  startDate: "Start",
  endDate: "Ende",
  actions: "",
  sortBy: "Sortieren nach",
  sort: {
    byName: "Name",
    byUnitName: "Einheit",
    byCode: "Code",
    byValue: "Wert"
  },
  hint: "Budgets legen Gesamteinkaufslimits fest und werden Kostenstellen zugeordnet. Ein Käufer wählt beim Bezahlen eine Kostenstelle aus.",
  details: {
    title: "Budgetdetails",
    subtitle: "Budget: {{ item.name }}"
  },
  edit: {
    title: "Budget bearbeiten",
    subtitle: "Budget: {{ item.name }}"
  },
  create: {
    title: "Budget erstellen",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Dieses Budget deaktivieren?",
    deactivate: "Deaktivierte Budgets gelten nicht mehr für die Kostenstellen, denen sie zugeordnet sind. Stellen Sie sicher, dass die verknüpfte Kostenstelle mindestens ein Budget hat.",
    confirmEnabled: "Budget {{ item.name }} erfolgreich aktiviert",
    confirmDisabled: "Budget {{ item.name }} erfolgreich deaktiviert",
    update: "Budget {{ item.name }} erfolgreich aktualisiert",
    create: "Budget {{ item.name }} erfolgreich erstellt"
  },
  info: {
    disabledEdit: "Aktivieren Sie das Budget, um die Bearbeitung zu ermöglichen.",
    disabledEnable: "Einheit muss aktiviert werden, bevor dieses Budget aktiviert werden kann."
  },
  links: {
    costCenters: "Kostenstellen"
  },
  breadcrumbs: {
    list: "Alle Budgets",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$f = {
  title: "Kostenstellen",
  subtitle: "Budget: {{ item.name }}"
};
var orgUnit$f = {
  groupName: "Einheiten",
  header: "Alle Einheiten ({{count}})",
  unit: "Einheit",
  name: "Name",
  uid: "ID",
  approvalProcess: "Genehmigungsprozess",
  parentUnit: "Übergeordnete Einheit",
  active: "Status",
  hint: "Einheiten stellen Abteilungen, Filialen, Regionen oder andere logische Gruppierungen dar, die für Sie sinnvoll sind. Die Kostenstellen und Lieferadressen, die einem Käufer beim Bezahlen zur Verfügung stehen, hängen von seiner Einheit ab. Benutzer haben Zugriff auf alle untergeordneten Einheiten ihrer primären Einheit.",
  details: {
    title: "Details der Einheit",
    subtitle: "Einheit: {{ item.name }}",
    hint: "Einheiten stellen Abteilungen, Filialen, Regionen oder andere logische Gruppierungen dar, die für Sie sinnvoll sind. Durch die Deaktivierung einer Einheit wird alles deaktiviert, was der Einheit untergeordnet ist (einschließlich der untergeordneten Einheiten, Benutzer, genehmigenden Personen und Kostenstellen). Deaktivierte Einheiten können nicht bearbeitet werden."
  },
  edit: {
    title: "Einheit bearbeiten",
    subtitle: "Einheit: {{ item.name }}"
  },
  create: {
    title: "Einheit erstellen",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Diese Einheit deaktivieren?",
    deactivate: "Die Deaktivierung einer Einheit hat weitreichende Auswirkungen auf Ihre Handelsorganisation. ALLE untergeordneten Einheiten, Benutzer, Budgets und Kostenstellen der Einheit werden deaktiviert.",
    confirmEnabled: "Einheit {{item.name}} erfolgreich aktiviert",
    confirmDisabled: "Einheit {{item.name}} erfolgreich deaktiviert",
    update: "Einheit {{ item.name }} erfolgreich aktualisiert",
    create: "Einheit {{ item.name }} erfolgreich erstellt"
  },
  info: {
    disabledEdit: "Aktivieren Sie die Einheit, um die Bearbeitung zu ermöglichen.",
    disabledEnable: "Übergeordnete Einheit muss aktiviert werden, bevor diese Einheit aktiviert werden kann.",
    disabledDisable: "Wurzeleinheit kann nicht deaktiviert werden."
  },
  links: {
    units: "Untergeordnete Einheiten",
    users: "Benutzer",
    approvers: "Genehmigende Personen",
    shippingAddresses: "Lieferadressen",
    costCenters: "Kostenstellen"
  },
  tree: {
    expandAll: "Alles expandieren",
    collapseAll: "Alles komprimieren",
    expand: "Expandieren",
    collapse: "komprimieren",
    explore: "Untereinheiten erkunden"
  },
  children: {
    create: {
      title: "Untergeordnete Einheit erstellen",
      subtitle: ""
    },
    messages: {
      create: "Einheit {{ item.name }} erfolgreich erstellt"
    }
  },
  costCenters: {
    create: {
      title: "Kostenstelle erstellen",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Übergeordnete Geschäftseinheit",
    create: "Einheit erstellen",
    parentOrgUnitNotes: "Dies ist die Einheit der höchsten Ebene für Ihre Organisation. Sie kann keiner anderen Einheit zugeordnet werden."
  },
  users: {
    header: "Benutzer in {{code}}",
    changeUserRoles: "Benutzerrollen ändern",
    newUser: "Neuer Benutzer"
  },
  assignRoles: {
    header: "Rollen in {{code}} verwalten",
    instructions: {
      check: "Um einem Benutzer eine Rolle zuzuordnen, markieren Sie das Ankreuzfeld der Rolle.",
      uncheck: "Um eine Rolle zu entfernen, entmarkieren Sie das Ankreuzfeld der Rolle.",
      changes: "Änderungen werden automatisch gespeichert."
    }
  },
  approvers: {
    header: "Genehmigende Personen in {{code}}",
    assign: "Genehmigende Personen verwalten",
    "new": "Neue genehmigende Person"
  },
  assignApprovers: {
    header: "Genehmigende Personen in {{code}} verwalten",
    instructions: {
      check: "Um dieser Einheit eine genehmigende Person zuzuordnen, markieren Sie das Ankreuzfeld des Benutzers.",
      uncheck: "Um eine genehmigende Person zu entfernen, entmarkieren Sie das Ankreuzfeld des Benutzers.",
      changes: "Änderungen werden automatisch gespeichert."
    },
    hint: 'Benutzer, die in der Liste der genehmigenden Personen angezeigt werden, erhalten Genehmigungsrechte für die Käufer dieser Einheit und der untergeordneten Einheiten. Beachten Sie, dass ein Benutzer mit der Rolle "Genehmigende Person" sich von einer genehmigenden Person unterscheidet, die in der Liste "Genehmigende Personen" angezeigt wird. Wenn es für eine Einheit keine genehmigende Person gibt oder die genehmigenden Personen nicht über ausreichende Einkaufsgenehmigungsrechte verfügen, wird eine genehmigende Person weiter oben in der Einheitshierarchie gesucht, bis eine Administration ausgewählt wird.'
  },
  breadcrumbs: {
    list: "Alle Einheiten",
    details: "{{name}}",
    children: "Untergeordnete Einheiten",
    users: "Benutzer",
    approvers: "Genehmigende Personen",
    addresses: "Lieferadressen",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Kostenstellen"
  }
};
var orgUnitChildren$f = {
  title: "Untergeordnete Einheiten",
  subtitle: "Einheit: {{item.name}}",
  info: {
    disabledCreate: "Untergeordnete Einheit kann für deaktivierte Einheit nicht erstellt werden."
  },
  hint: 'Einheiten stellen Abteilungen, Filialen, Regionen oder andere logische Gruppierungen dar, die für Sie sinnvoll sind. Benutzer "erben" untergeordnete Einheiten, das heißt, dass Käufer beim Bezahlen auf Kostenstellen und Lieferadressen der untergeordneten Einheiten zugreifen können.'
};
var orgUnitApprovers$f = {
  title: "Genehmigende Personen verwalten",
  subtitle: "Einheit: {{item.name}}",
  assigned: "Benutzer {{item.name}} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Benutzers {{item.name}} erfolgreich aufgehoben"
};
var orgUnitAssignedApprovers$f = {
  title: "Zugeordnete genehmigende Personen",
  subtitle: "Einheit: {{item.name}}",
  assigned: "Benutzer {{item.name}} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Benutzers {{item.name}} erfolgreich aufgehoben",
  hint: 'Benutzer, die in der Liste der genehmigenden Personen angezeigt werden, erhalten Genehmigungsrechte für die Käufer dieser Einheit und der untergeordneten Einheiten. Beachten Sie, dass ein Benutzer mit der Rolle "Genehmigende Person" sich von einer genehmigenden Person unterscheidet, die in der Liste "Genehmigende Personen" angezeigt wird. Wenn es für eine Einheit keine genehmigende Person gibt oder die genehmigenden Personen nicht über ausreichende Einkaufsgenehmigungsrechte verfügen, wird eine genehmigende Person weiter oben in der Einheitshierarchie gesucht, bis eine Administration ausgewählt wird.'
};
var orgUnitAssignedRoles$f = {
  header: "Rollen in {{code}} verwalten",
  name: "Name",
  email: "E-Mail",
  roles: "Rollen",
  roleCustomer: "Kunde",
  roleApprover: "Genehmigende Person",
  roleManager: "Manager",
  roleAdministrator: "Admin"
};
var orgUnitUsers$f = {
  title: "Zugeordnete Benutzer",
  subtitle: "Einheit: {{item.name}}",
  info: {
    disabledCreate: "Benutzer kann für deaktivierte Einheit nicht erstellt werden."
  },
  hint: 'Benutzer sind die Käufer, genehmigenden Personen, Manager und Administratoren Ihrer Organisation. Jedem Benutzer wird eine Rolle zugeordnet, um Einkäufe durchzuführen oder zu genehmigen. Benutzer "erben" untergeordnete Einheiten, d.h. Käufer haben beim Bezahlen Zugriff auf Kostenstellen und Lieferadressen der untergeordneten Einheiten.'
};
var orgUnitUserRoles$f = {
  title: "Benutzerrollen und Rechte",
  subtitle: "Benutzer: {{item.name}}",
  messages: {
    rolesUpdated: "Rollen für {{item.name}} erfolgreich aktualisiert"
  }
};
var orgUnitAssignedUsers$f = {
  title: "Zugeordnete Benutzer",
  subtitle: "Einheit: {{item.name}}"
};
var orgUnitCostCenters$f = {
  title: "Zugeordnete Kostenstellen",
  subtitle: "Einheit: {{item.name}}",
  info: {
    disabledCreate: "Kostenstelle kann für deaktivierte Einheit nicht erstellt werden."
  },
  hint: 'Alle Bestellungen, die über das Einkaufskonto Ihrer Organisation vorgenommen werden, werden zu Nachverfolgungszwecken mit einer Kostenstelle verknüpft. Ein Käufer wählt eine Kostenstelle aus, wenn er mit der Einkaufsmethode "Konto" bezahlt. Jede Einheit kann mehrere Kostenstellen haben, aber eine einzelne Kostenstelle kann nur einer einzigen Einheit zugeordnet werden. Um endgültige Ausgabelimits zu definieren, werden den Kostenstellen Budgets zugeordnet. '
};
var orgUnitAddress$f = {
  title: "Lieferadressen",
  subtitle: "Einheit: {{item.name}}",
  country: "Land/Region",
  titles: "Anrede",
  firstName: "Vorname",
  lastName: "Nachname",
  formattedAddress: "Adresse",
  address1: "Adresse",
  address2: "Zweite Adresse (optional)",
  city: "Ort",
  state: "Bundesland",
  zipCode: "Postleitzahl",
  phoneNumber: "Telefonnummer (optional)",
  streetAddress: "Hausanschrift",
  aptSuite: "Wohnungsnummer",
  selectOne: "Treffen Sie eine Auswahl...",
  hint: 'Wenn ein Käufer mit der Einkaufsmethode "Konto" bezahlt, muss er eine Kostenstelle auswählen. Welche Lieferadressen für den Käufer verfügbar sind, ist von der Einheit der ausgewählten Kostenstelle abhängig.',
  details: {
    title: "Adressdetails",
    subtitle: "Einheit: {{item.name}}"
  },
  edit: {
    title: "Adresse bearbeiten"
  },
  create: {
    title: "Adresse erstellen"
  },
  form: {
    subtitle: "Einheit: {{item.name}}"
  },
  messages: {
    create: "Adresse {{ item.firstName }} {{ item.lastName }} erfolgreich erstellt",
    update: "Adresse {{ item.firstName }} {{ item.lastName }} erfolgreich aktualisiert",
    "delete": "Die Adresse kann nicht mehr wiederhergestellt werden. Vorhandene Bestellungen sind nicht betroffen.",
    deleteTitle: "Diese Adresse löschen?",
    deleted: "Adresse {{ item.firstName }} {{ item.lastName }} erfolgreich gelöscht"
  }
};
var orgUserGroup$f = {
  groupName: "Benutzergruppen",
  header: "Alle Benutzergruppen ({{count}})",
  disabled: "(deaktiviert)",
  uid: "Code",
  name: "Name",
  unit: "Einheit",
  orgUnit: "Einheit",
  actions: "",
  sortBy: "Sortieren nach",
  sort: {
    byName: "Name",
    byUnitName: "Einheit",
    byGroupID: "Gruppe"
  },
  hint: "Mit Benutzergruppen können Sie Benutzer in einer Gruppe zusammenfassen, um Einkaufslimits für viele Benutzer gleichzeitig zuzuordnen.",
  details: {
    title: "Benutzergruppendetails",
    subtitle: "Benutzergruppe: {{ item.name }}"
  },
  edit: {
    title: "Benutzergruppe bearbeiten",
    subtitle: "Benutzergruppe: {{ item.name }}"
  },
  create: {
    title: "Benutzergruppe erstellen",
    subtitle: ""
  },
  links: {
    user: "Benutzer",
    permission: "Einkaufslimits"
  },
  messages: {
    update: "Benutzergruppe {{ item.name }} erfolgreich aktualisiert",
    create: "Benutzergruppe {{ item.name }} erfolgreich erstellt",
    deleteTitle: "Diese Benutzergruppe löschen?",
    "delete": "Wenn diese Benutzergruppe gelöscht wird, hat dies keine Auswirkungen auf die Benutzer in dieser Gruppe.",
    deleted: "Benutzergruppe {{ item.name }} erfolgreich gelöscht"
  },
  breadcrumbs: {
    list: "Alle Benutzergruppen",
    details: "{{name}}",
    users: "Benutzer",
    permissions: "Einkaufslimits"
  }
};
var orgUserGroupUsers$f = {
  title: "Benutzer verwalten",
  subtitle: "Benutzergruppe: {{ item.name }}",
  assigned: "Benutzer {{item.name}} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Benutzers {{item.name}} erfolgreich aufgehoben",
  unassignAll: "Zuordnung für alle aufheben",
  unassignAllConfirmation: "Zuordnung wurde für alle Benutzer aufgehoben."
};
var orgUserGroupAssignedUsers$f = {
  title: "Zugeordnete Benutzer",
  subtitle: "Benutzergruppe: {{ item.name }}",
  assigned: "Benutzer {{item.name}} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Benutzers {{item.name}} erfolgreich aufgehoben"
};
var orgUserGroupPermissions$f = {
  title: "Einkaufslimits verwalten",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Einkaufslimits {{item.code}} erfolgreich zugeordnet",
  unassigned: "Zuordnung der Einkaufslimits {{item.code}} erfolgreich aufgehoben"
};
var orgUserGroupAssignedPermissions$f = {
  title: "Zugeordnete Einkaufslimits",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Einkaufslimits {{item.code}} erfolgreich zugeordnet",
  unassigned: "Zuordnung der Einkaufslimits {{item.code}} erfolgreich aufgehoben"
};
var orgUser$f = {
  groupName: "Benutzer",
  header: "Alle Benutzer ({{count}})",
  disabled: "(deaktiviert)",
  uid: "E-Mail",
  active: "Status",
  name: "Name",
  firstName: "Vorname",
  lastName: "Nachname",
  email: "E-Mail",
  orgUnit: "Einheit",
  unit: "Einheit",
  roles: "Rollen",
  rights: "Rechte",
  title: "Anrede",
  hint: "Benutzer sind die Käufer, genehmigenden Personen, Manager und Administratoren Ihrer Organisation. Jedem Benutzer wird eine Rolle zugeordnet, um Einkäufe durchzuführen oder zu genehmigen. Jeder Benutzer gehört zu einer Einheit und hat Zugriff auf alle untergeordneten Einheiten seiner primären Einheit.",
  unitApprover: "Genehmigende Person der Einheit",
  assignApprover: "Benutzer den genehmigenden Personen für die Einheit hinzufügen",
  actions: "",
  sortBy: "Sortieren nach",
  sort: {
    byName: "Name",
    byUnit: "Einheit"
  },
  details: {
    title: "Benutzerdetails",
    subtitle: "Benutzer: {{ item.name }}"
  },
  edit: {
    title: "Benutzer bearbeiten",
    subtitle: "Benutzer: {{ item.name }}"
  },
  create: {
    title: "Benutzer erstellen",
    subtitle: ""
  },
  links: {
    password: "Kennwort ändern",
    approvers: "Genehmigende Personen",
    userGroup: "Benutzergruppen",
    permission: "Einkaufslimits",
    rolesAndRights: "Rollen und Rechte"
  },
  messages: {
    deactivateTitle: "Diesen Benutzer deaktivieren?",
    deactivate: "Deaktivierte Benutzer können sich nicht an der Storefront anmelden und bestellen.",
    confirmEnabled: "Benutzer {{item.firstName}} {{item.lastName}} erfolgreich aktiviert",
    confirmDisabled: "Benutzer {{item.firstName}} {{item.lastName}} erfolgreich deaktiviert",
    update: "Benutzer {{item.firstName}} {{item.lastName}} erfolgreich aktualisiert",
    create: "Benutzer {{item.firstName}} {{item.lastName}} erfolgreich erstellt",
    updatePassword: "Kennwort des Benutzers {{item.firstName}} {{item.lastName}} erfolgreich aktualisiert"
  },
  info: {
    disabledEdit: "Aktivieren Sie den Benutzer, um die Bearbeitung zu ermöglichen.",
    disabledEnable: "Einheit muss aktiviert werden, bevor dieser Benutzer aktiviert werden kann."
  },
  approver: {
    link: "Genehmigende Personen",
    header: "Genehmigende Personen in {{code}}",
    assign: "Genehmigende Personen zuordnen",
    assignHeader: "Genehmigende Personen in {{code}} zuordnen",
    back: "Zurück",
    "new": "Neue genehmigende Person",
    instructions: {
      check: "Um diesem Benutzer eine genehmigende Person zuzuordnen, markieren Sie das Ankreuzfeld des Benutzers.",
      uncheck: "Um eine genehmigende Person zu entfernen, entmarkieren Sie das Ankreuzfeld des Benutzers.",
      changes: "Änderungen werden automatisch gespeichert."
    }
  },
  userGroup: {
    link: "Benutzergruppen",
    header: "Benutzergruppen in {{code}}",
    assign: "Benutzergruppen zuordnen",
    assignHeader: "Benutzergruppen in {{code}} zuordnen",
    back: "Zurück",
    instructions: {
      check: "Um diesem Benutzer eine Benutzergruppe zuzuordnen, markieren Sie das Ankreuzfeld des Benutzers.",
      uncheck: "Um eine Benutzergruppe zu entfernen, entmarkieren Sie das Ankreuzfeld des Benutzers.",
      changes: "Änderungen werden automatisch gespeichert."
    }
  },
  permission: {
    link: "Einkaufslimits",
    header: "Einkaufslimits in {{code}}",
    assign: "Einkaufslimits zuordnen",
    assignHeader: "Einkaufslimits in {{code}} zuordnen",
    back: "Zurück",
    instructions: {
      check: "Um diesem Benutzer ein Einkaufslimit zuzuordnen, markieren Sie das zugehörige Ankreuzfeld.",
      uncheck: "Um ein Einkaufslimit zuzuordnen, entmarkieren Sie das zugehörige Ankreuzfeld.",
      changes: "Änderungen werden automatisch gespeichert."
    },
    per: {
      "undefined": "",
      MONTH: "pro Monat",
      YEAR: "pro Jahr",
      WEEK: "pro Woche",
      QUARTER: "pro Quartal"
    }
  },
  password: {
    title: "Kennwort ändern",
    subtitle: "Benutzer: {{ item.email }}",
    newPassword: "Neues Kennwort",
    confirmPassword: "Neues Kennwort erneut eingeben"
  },
  breadcrumbs: {
    list: "Alle Benutzer",
    details: "{{name}}",
    userGroups: "Benutzergruppen",
    approvers: "Genehmigende Personen",
    permissions: "Einkaufslimits"
  }
};
var orgUserUserGroups$f = {
  title: "Benutzergruppen verwalten",
  subtitle: "Benutzer: {{ item.name }}",
  assigned: "Benutzergruppe {{item.name}} erfolgreich zugeordnet",
  unassigned: "Zuordnung der Benutzergruppe {{item.name}} erfolgreich aufgehoben"
};
var orgUserAssignedUserGroups$f = {
  title: "Zugeordnete Benutzergruppen",
  subtitle: "Benutzer: {{ item.name }}",
  assigned: "Benutzergruppe {{item.name}} erfolgreich zugeordnet",
  unassigned: "Zuordnung der Benutzergruppe {{item.name}} erfolgreich aufgehoben"
};
var orgUserApprovers$f = {
  title: "Genehmigende Personen verwalten",
  subtitle: "Benutzer: {{ item.name }}",
  assigned: "Genehmigende Person {{ item.name }} erfolgreich zugeordnet",
  unassigned: "Zuordnung der genehmigenden Person {{ item.name }} erfolgreich aufgehoben"
};
var orgUserAssignedApprovers$f = {
  title: "Zugeordnete genehmigende Personen",
  subtitle: "Benutzer: {{ item.name }}",
  assigned: "Genehmigende Person {{ item.name }} erfolgreich zugeordnet",
  unassigned: "Zuordnung der genehmigenden Person {{ item.name }} erfolgreich aufgehoben"
};
var orgUserPermissions$f = {
  title: "Einkaufslimits verwalten",
  subtitle: "Benutzer: {{ item.name }}",
  assigned: "Einkaufslimit {{ item.code }} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Einkaufslimits {{ item.code }} erfolgreich aufgehoben"
};
var orgUserAssignedPermissions$f = {
  title: "Zugeordnete Einkaufslimits",
  subtitle: "Benutzer: {{ item.name }}",
  assigned: "Einkaufslimit {{ item.code }} erfolgreich zugeordnet",
  unassigned: "Zuordnung des Einkaufslimits {{ item.code }} erfolgreich aufgehoben"
};
var orgPurchaseLimit$f = {
  groupName: "Einkaufslimits",
  header: "Alle Einkaufslimits ({{count}})",
  name: "Name",
  code: "Code",
  active: "Status",
  limit: "Limit",
  orderApprovalPermissionType: "Typ",
  threshold: "Schwellenwert",
  periodRange: "Zeitraum",
  currency: "Währung",
  orgUnit: "Übergeordnete Einheit",
  unit: "Übergeordnete Einheit",
  actions: "",
  hint: "Einkaufslimits helfen bei der Ausgabenkontrolle, indem sie für Käufer die Höhe der Ausgaben pro Bestellung oder pro Woche, Monat, Quartal oder Jahr definieren. Einkaufslimits werden Benutzern oder Benutzergruppen zugeordnet. Einkaufslimits werden außerdem genehmigenden Personen zugeordnet, um festzulegen, wie viel sie genehmigen dürfen. Mithilfe von Benutzergruppen können Sie vielen Benutzern gleichzeitig Einkaufslimits zuordnen.  ",
  details: {
    title: "Einkaufslimitdetails",
    subtitle: "Einkaufslimit: {{ item.code }}"
  },
  edit: {
    title: "Einkaufslimit bearbeiten",
    subtitle: "Einkaufslimits: {{ item.code }}"
  },
  create: {
    title: "Einkaufslimit erstellen",
    subtitle: ""
  },
  sortBy: "Sortieren nach",
  sort: {
    byName: "Name",
    byUnitName: "Einheit"
  },
  messages: {
    deactivateTitle: "Dieses Einkaufslimit deaktivieren?",
    deactivate: "Deaktivierte Einkaufslimits können nicht mehr einem Benutzer oder einer Benutzergruppe zugeordnet werden. Aktuelle Zuordnungen haben keine Auswirkungen.",
    confirmEnabled: "Einkaufslimit {{ item.code }} erfolgreich aktiviert",
    confirmDisabled: "Einkaufslimit {{ item.code }} erfolgreich deaktiviert",
    update: "Einkaufslimit {{ item.code }} erfolgreich aktualisiert",
    create: "Einkaufslimit {{ item.code }} erfolgreich erstellt"
  },
  info: {
    disabledEdit: "Aktivieren Sie die Einkaufslimits, um die Bearbeitung zu ermöglichen.",
    disabledEnable: "Einheit muss aktiviert werden, bevor dieses Einkaufslimit aktiviert werden kann."
  },
  per: {
    DAY: "pro Tag",
    WEEK: "pro Woche",
    MONTH: "pro Monat",
    QUARTER: "pro Quartal",
    YEAR: "pro Jahr"
  },
  breadcrumbs: {
    list: "Alle Einkaufslimits",
    details: "{{code}}"
  }
};
var organization$v = {
  organization: organization$u,
  orgCostCenter: orgCostCenter$f,
  orgCostCenterBudgets: orgCostCenterBudgets$f,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$f,
  orgBudget: orgBudget$f,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$f,
  orgUnit: orgUnit$f,
  orgUnitChildren: orgUnitChildren$f,
  orgUnitApprovers: orgUnitApprovers$f,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$f,
  orgUnitAssignedRoles: orgUnitAssignedRoles$f,
  orgUnitUsers: orgUnitUsers$f,
  orgUnitUserRoles: orgUnitUserRoles$f,
  orgUnitAssignedUsers: orgUnitAssignedUsers$f,
  orgUnitCostCenters: orgUnitCostCenters$f,
  orgUnitAddress: orgUnitAddress$f,
  orgUserGroup: orgUserGroup$f,
  orgUserGroupUsers: orgUserGroupUsers$f,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$f,
  orgUserGroupPermissions: orgUserGroupPermissions$f,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$f,
  orgUser: orgUser$f,
  orgUserUserGroups: orgUserUserGroups$f,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$f,
  orgUserApprovers: orgUserApprovers$f,
  orgUserAssignedApprovers: orgUserAssignedApprovers$f,
  orgUserPermissions: orgUserPermissions$f,
  orgUserAssignedPermissions: orgUserAssignedPermissions$f,
  orgPurchaseLimit: orgPurchaseLimit$f
};
var de = {
  organization: organization$v
};
var organization$s = {
  enabled: "Active",
  disabled: "Disabled",
  enable: "Enable",
  disable: "Disable",
  name: "Name",
  code: "Code",
  done: "done",
  cancel: "Cancel",
  add: "Add",
  manageUsers: "Manage Users",
  create: "Create {{name}}",
  edit: "Edit",
  save: "Save {{name}}",
  "delete": "Delete",
  assign: "Manage",
  active: "Active",
  status: "Status",
  details: "Details",
  messages: {
    emptyList: "The list is empty"
  },
  userRoles: {
    b2bcustomergroup: "Customer",
    b2bapprovergroup: "Approver",
    b2bmanagergroup: "Manager",
    b2badmingroup: "Admin"
  },
  userRights: {
    unitorderviewergroup: "View Unit-Level Orders"
  },
  breadcrumb: "Organization",
  notification: {
    noSufficientPermissions: "No sufficient permissions to access this page",
    notExist: "This item does not exist",
    disabled: "You cannot edit a disabled item"
  },
  confirmation: {
    cancel: "CANCEL",
    confirm: "CONFIRM",
    disable: "DISABLE",
    "delete": "DELETE"
  },
  httpHandlers: {
    conflict: {
      budget: "Budget with code {{ code }} already exists.",
      costCenter: "Cost center with code {{ code }} already exists.",
      unit: "Organizational unit with uid {{ code }} already exists.",
      user: "User with email {{ code }} already exists",
      userGroup: "User Group with id {{ code }} already exists",
      permission: "Approval Permission with code {{ code }} already exists.",
      unknown: "Server validation error."
    }
  },
  information: "More information about {{title}}"
};
var orgCostCenter$e = {
  groupName: "Cost Centers",
  header: "All cost centers ({{count}})",
  code: "Code",
  active: "Status",
  name: "Name",
  currency: "Currency",
  unit: "Parent Unit",
  actions: "",
  sortBy: "Sort by",
  sort: {
    byName: "Name",
    byUnitName: "Unit",
    byCode: "Code"
  },
  hint: "All orders placed through your organization's purchase account are linked to a cost center for tracking purposes. Each unit can have multiple cost centers. To limit spending, budgets are assigned to cost centers. A buyer selects a cost center when checking out.",
  disable: {
    confirm: "Disable"
  },
  messages: {
    deactivateTitle: "Disable this cost center?",
    deactivate: "Disabled cost centers cannot be used for placing new orders. Ensure that your unit has at least one cost center. Existing orders are not affected.",
    confirmEnabled: "Cost Center {{ item.name }} enabled successfully",
    confirmDisabled: "Cost Center {{ item.name }} disabled successfully",
    update: "Cost Center {{ item.name }} updated successfully",
    create: "Cost Center {{ item.name }} created successfully"
  },
  info: {
    disabledEdit: "Enable the cost center to allow editing.",
    disabledEnable: "Unit must be enabled before this cost center may be enabled."
  },
  details: {
    title: "Cost Center Details",
    subtitle: "Cost Center: {{ item.name }}"
  },
  edit: {
    title: "Edit Cost Center",
    subtitle: "Cost Center: {{ item.name }}"
  },
  create: {
    title: "Create Cost Center",
    subtitle: ""
  },
  budget: {
    link: "Budgets"
  },
  breadcrumbs: {
    list: "All cost centers",
    details: "{{name}}",
    budgets: "Budgets"
  }
};
var orgCostCenterBudgets$e = {
  title: "Manage budgets",
  subtitle: "Cost Center: {{ item.name }}",
  assigned: "Budget {{ item.name }} assigned successfully",
  unassigned: "Budget {{ item.name }} unassigned successfully"
};
var orgCostCenterAssignedBudgets$e = {
  title: "Assigned budgets",
  subtitle: "Cost Center: {{ item.name }}",
  assigned: "Budget {{ item.name }} assigned successfully",
  unassigned: "Budget {{ item.name }} unassigned successfully"
};
var orgBudget$e = {
  groupName: "Budgets",
  header: "All budgets ({{count}})",
  code: "Code",
  name: "Name",
  active: "Status",
  currency: "Currency",
  amount: "Amount",
  unit: "Unit",
  businessUnits: "Unit",
  dateRange: "Start - End",
  startDate: "Start",
  endDate: "End",
  actions: "",
  sortBy: "Sort by",
  sort: {
    byName: "Name",
    byUnitName: "Unit",
    byCode: "Code",
    byValue: "Value"
  },
  hint: "Budgets set overall purchase limits and are assigned to cost centers. A buyer selects a cost center when checking out.",
  details: {
    title: "Budget Details",
    subtitle: "Budget: {{ item.name }}"
  },
  edit: {
    title: "Edit Budget",
    subtitle: "Budget: {{ item.name }}"
  },
  create: {
    title: "Create Budget",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Disable this budget?",
    deactivate: "Disabled budgets no longer apply to the cost centers they are assigned to. Ensure that the associated cost center has at least one budget.",
    confirmEnabled: "Budget {{ item.name }} enabled successfully",
    confirmDisabled: "Budget {{ item.name }} disabled successfully",
    update: "Budget {{ item.name }} updated successfully",
    create: "Budget {{ item.name }} created successfully"
  },
  info: {
    disabledEdit: "Enable the budget to allow editing.",
    disabledEnable: "Unit must be enabled before this budget may be enabled."
  },
  links: {
    costCenters: "Cost Centers"
  },
  breadcrumbs: {
    list: "All budgets",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$e = {
  title: "Cost centers",
  subtitle: "Budget: {{ item.name }}"
};
var orgUnit$e = {
  groupName: "Units",
  header: "All units ({{count}})",
  unit: "Unit",
  name: "Name",
  uid: "ID",
  approvalProcess: "Approval process",
  parentUnit: "Parent Unit",
  active: "Status",
  hint: "Units represent departments, stores, regions, or any other logical grouping that makes sense to you. The cost centers and delivery addresses available to a buyer when checking out, depend on their unit. Users have access to all child units of their primary unit.",
  details: {
    title: "Unit Details",
    subtitle: "Unit: {{ item.name }}",
    hint: "Units represent departments, stores, regions, or any other logical grouping that makes sense to you. Disabling a unit disables all children of the unit, including child units, users, approvers, and cost centers. Disabled units cannot be edited."
  },
  edit: {
    title: "Edit Unit",
    subtitle: "Unit: {{ item.name }}"
  },
  create: {
    title: "Create Unit",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Disable this unit?",
    deactivate: "Disabling a unit has wide-ranging affects on your commerce organization. ALL the unit's child units, users, budgets, and cost centers will also disabled.",
    confirmEnabled: "Unit {{item.name}} enabled successfully",
    confirmDisabled: "Unit {{item.name}} disabled successfully",
    update: "Unit {{ item.name }} updated successfully",
    create: "Unit {{ item.name }} created successfully"
  },
  info: {
    disabledEdit: "Enable the unit to allow editing.",
    disabledEnable: "Parent must be enabled before this unit may be enabled.",
    disabledDisable: "Root unit can not be disabled."
  },
  links: {
    units: "Child Units",
    users: "Users",
    approvers: "Approvers",
    shippingAddresses: "Delivery Addresses",
    costCenters: "Cost Centers"
  },
  tree: {
    expandAll: "Expand all",
    collapseAll: "Collapse all",
    expand: "Expand",
    collapse: "collapse",
    explore: "Explore sub-units"
  },
  children: {
    create: {
      title: "Create child unit",
      subtitle: ""
    },
    messages: {
      create: "Unit {{ item.name }} created successfully"
    }
  },
  costCenters: {
    create: {
      title: "Create cost center",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Parent business unit",
    create: "Create Unit",
    parentOrgUnitNotes: "This unit is the top-level unit for your organization. It cannot be assigned to another unit."
  },
  users: {
    header: "Users in {{code}}",
    changeUserRoles: "Change user roles",
    newUser: "New user"
  },
  assignRoles: {
    header: "Manage roles in {{code}}",
    instructions: {
      check: "To assign a role to a user, select the role's check box.",
      uncheck: "To remove a role, clear the role's check box.",
      changes: "Changes are saved automatically."
    }
  },
  approvers: {
    header: "Approvers in {{code}}",
    assign: "Manage approvers",
    "new": "New approver"
  },
  assignApprovers: {
    header: "Manage approvers in {{code}}",
    instructions: {
      check: "To assign an approver to this unit, select the user's check box.",
      uncheck: "To remove an approver, clear the user's check box.",
      changes: "Changes are saved automatically."
    },
    hint: "Users displayed under the Approvers list are assigned approval privileges for the buyers of this unit and of child units. Note that a user who has the approver role is separate from an approver who appears under the Approvers list. If an approver doesn't exist for a unit, or if approvers do not have sufficient approval purchase privileges, an approver higher up the unit hierarchy is found, until an administration is chosen."
  },
  breadcrumbs: {
    list: "All units",
    details: "{{name}}",
    children: "Child units",
    users: "Users",
    approvers: "Approvers",
    addresses: "Delivery addresses",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Cost Centers"
  }
};
var orgUnitChildren$e = {
  title: "Child units",
  subtitle: "Unit: {{item.name}}",
  info: {
    disabledCreate: "Child unit can not be created for disabled unit."
  },
  hint: 'Units represent departments, stores, regions, or any other logical grouping that makes sense to you. Users "inherit" child units, meaning buyers have access to cost centers and delivery addresses of child units when checking out.'
};
var orgUnitApprovers$e = {
  title: "Manage approvers",
  subtitle: "Unit: {{item.name}}",
  assigned: "User {{item.name}} assigned successfully",
  unassigned: "User {{item.name}} unassigned successfully"
};
var orgUnitAssignedApprovers$e = {
  title: "Assigned approvers",
  subtitle: "Unit: {{item.name}}",
  assigned: "User {{item.name}} assigned successfully",
  unassigned: "User {{item.name}} unassigned successfully",
  hint: "Users displayed under the Approvers list are assigned approval privileges for the buyers of this unit and of child units. Note that a user who has the approver role is separate from an approver who appears under the Approvers list. If an approver doesn't exist for a unit, or if approvers do not have sufficient approval purchase privileges, an approver higher up the unit hierarchy is found, until an administration is chosen."
};
var orgUnitAssignedRoles$e = {
  header: "Manage roles in {{code}}",
  name: "Name",
  email: "Email",
  roles: "Roles",
  roleCustomer: "Customer",
  roleApprover: "Approver",
  roleManager: "Manager",
  roleAdministrator: "Admin"
};
var orgUnitUsers$e = {
  title: "Assigned users",
  subtitle: "Unit: {{item.name}}",
  info: {
    disabledCreate: "User can not be created for disabled unit."
  },
  hint: 'Users are the buyers, approvers, managers, and administrators of your organization. Each user is assigned a role for making or approving purchases. Users "inherit" child units, meaning buyers have access to cost centers and delivery addresses of child units when checking out.'
};
var orgUnitUserRoles$e = {
  title: "User roles and rights",
  subtitle: "User: {{item.name}}",
  messages: {
    rolesUpdated: "Roles successfully updated for {{item.name}}"
  }
};
var orgUnitAssignedUsers$e = {
  title: "Assigned users",
  subtitle: "Unit: {{item.name}}"
};
var orgUnitCostCenters$e = {
  title: "Assigned cost centers",
  subtitle: "Unit: {{item.name}}",
  info: {
    disabledCreate: "Cost center can not be created for disabled unit."
  },
  hint: `All orders placed through your organization's purchase account are linked to a cost center for tracking purposes. A buyer selects a cost center when checking out using the "Account" purchase method. Each unit can have multiple cost centers, but a single cost center can only be assigned to a single unit. To define ultimate spending limits, budgets are assigned to cost centers. `
};
var orgUnitAddress$e = {
  title: "Delivery addresses",
  subtitle: "Unit: {{item.name}}",
  country: "Country/Region",
  titles: "Title",
  firstName: "First name",
  lastName: "Last name",
  formattedAddress: "Address",
  address1: "Address",
  address2: "2nd address (optional)",
  city: "City",
  state: "State",
  zipCode: "Zip code",
  phoneNumber: "Phone number (optional)",
  streetAddress: "Street Address",
  aptSuite: "Apartment Number",
  selectOne: "Select One...",
  hint: 'When a buyer is checking out using the "Account" purchase method, they much choose a cost center. The delivery addresses available to the buyer depend on the unit of the cost center chosen.',
  details: {
    title: "Address details",
    subtitle: "Unit: {{item.name}}"
  },
  edit: {
    title: "Edit Address"
  },
  create: {
    title: "Create Address"
  },
  form: {
    subtitle: "Unit: {{item.name}}"
  },
  messages: {
    create: "Address {{ item.firstName }} {{ item.lastName }} created successfully",
    update: "Address {{ item.firstName }} {{ item.lastName }} updated successfully",
    "delete": "The address cannot be brought back. Existing orders are not affected.",
    deleteTitle: "Delete this address?",
    deleted: "Address {{ item.firstName }} {{ item.lastName }} deleted successfully"
  }
};
var orgUserGroup$e = {
  groupName: "User Groups",
  header: "All user groups ({{count}})",
  disabled: "(disabled)",
  uid: "Code",
  name: "Name",
  unit: "Unit",
  orgUnit: "Unit",
  actions: "",
  sortBy: "Sort by",
  sort: {
    byName: "Name",
    byUnitName: "Unit",
    byGroupID: "Group"
  },
  hint: "User groups allow you to combine users together in one group, for the purposes of assigning purchase limits for many users at once.",
  details: {
    title: "User group Details",
    subtitle: "User group: {{ item.name }}"
  },
  edit: {
    title: "Edit User group",
    subtitle: "User group: {{ item.name }}"
  },
  create: {
    title: "Create User group",
    subtitle: ""
  },
  links: {
    user: "Users",
    permission: "Purchase limits"
  },
  messages: {
    update: "User Group {{ item.name }} updated successfully",
    create: "User Group {{ item.name }} created successfully",
    deleteTitle: "Delete this user group?",
    "delete": "The users in this group are not affected when the user group is deleted.",
    deleted: "User Group {{ item.name }} deleted successfully"
  },
  breadcrumbs: {
    list: "All user groups",
    details: "{{name}}",
    users: "Users",
    permissions: "Purchase limits"
  }
};
var orgUserGroupUsers$e = {
  title: "Manage users",
  subtitle: "User group: {{ item.name }}",
  assigned: "User {{item.name}} assigned successfully",
  unassigned: "User {{item.name}} unassigned successfully",
  unassignAll: "Unassign All",
  unassignAllConfirmation: "All users unassigned successfully"
};
var orgUserGroupAssignedUsers$e = {
  title: "Assigned users",
  subtitle: "User group: {{ item.name }}",
  assigned: "User {{item.name}} assigned successfully",
  unassigned: "User {{item.name}} unassigned successfully"
};
var orgUserGroupPermissions$e = {
  title: "Manage purchase limits",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Purchase limits {{item.code}} assigned successfully",
  unassigned: "Purchase limits {{item.code}} unassigned successfully"
};
var orgUserGroupAssignedPermissions$e = {
  title: "Assigned purchase limits",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Purchase limits {{item.code}} assigned successfully",
  unassigned: "Purchase limits {{item.code}} unassigned successfully"
};
var orgUser$e = {
  groupName: "Users",
  header: "All users ({{count}})",
  disabled: "(disabled)",
  uid: "Email",
  active: "Status",
  name: "Name",
  firstName: "First name",
  lastName: "Last name",
  email: "Email",
  orgUnit: "Unit",
  unit: "Unit",
  roles: "Roles",
  rights: "Rights",
  title: "Title",
  hint: "Users are the buyers, approvers, managers, and administrators of your organization. Each user is assigned a role for making or approving purchases. Each user belongs to a unit, and they have access to all child units of their primary unit.",
  unitApprover: "Unit approver",
  assignApprover: "Add the user to approvers for the unit",
  actions: "",
  sortBy: "Sort by",
  sort: {
    byName: "Name",
    byUnit: "Unit"
  },
  details: {
    title: "User Details",
    subtitle: "User: {{ item.name }}"
  },
  edit: {
    title: "Edit User",
    subtitle: "User: {{ item.name }}"
  },
  create: {
    title: "Create User",
    subtitle: ""
  },
  links: {
    password: "Change password",
    approvers: "Approvers",
    userGroup: "User groups",
    permission: "Purchase limits",
    rolesAndRights: "Roles and Rights"
  },
  messages: {
    deactivateTitle: "Disable this user?",
    deactivate: "Disabled users cannot log onto the storefront and place orders.",
    confirmEnabled: "User {{item.firstName}} {{item.lastName}} enabled successfully",
    confirmDisabled: "User {{item.firstName}} {{item.lastName}} disabled successfully",
    update: "User {{item.firstName}} {{item.lastName}} updated successfully",
    create: "User {{item.firstName}} {{item.lastName}} created successfully",
    updatePassword: "User {{item.firstName}} {{item.lastName}} password updated successfully"
  },
  info: {
    disabledEdit: "Enable the user to allow editing.",
    disabledEnable: "Unit must be enabled before this user may be enabled."
  },
  approver: {
    link: "Approvers",
    header: "Approvers in {{code}}",
    assign: "Assign Approvers",
    assignHeader: "Assign Approvers in {{code}}",
    back: "Back",
    "new": "New approver",
    instructions: {
      check: "To assign an approver to this user, select the user's check box.",
      uncheck: "To remove an approver, clear the user's check box.",
      changes: "Changes are saved automatically."
    }
  },
  userGroup: {
    link: "User groups",
    header: "User groups in {{code}}",
    assign: "Assign user groups",
    assignHeader: "Assign user groups in {{code}}",
    back: "Back",
    instructions: {
      check: "To assign an user group to this user, select the user's check box.",
      uncheck: "To remove aa user group, clear the user's check box.",
      changes: "Changes are saved automatically."
    }
  },
  permission: {
    link: "Purchase limits",
    header: "Purchase limits in {{code}}",
    assign: "Assign purchase limits",
    assignHeader: "Assign purchase limits in {{code}}",
    back: "Back",
    instructions: {
      check: "To assign a purchase limits to this user, select its check box.",
      uncheck: "To unassign a purchase limits, clear its check box.",
      changes: "Changes are saved automatically."
    },
    per: {
      "undefined": "",
      MONTH: "per Month",
      YEAR: "per Year",
      WEEK: "per Week",
      QUARTER: "per Quarter"
    }
  },
  password: {
    title: "Change password",
    subtitle: "User: {{ item.email }}",
    newPassword: "New password",
    confirmPassword: "Retype new password"
  },
  breadcrumbs: {
    list: "All users",
    details: "{{name}}",
    userGroups: "User groups",
    approvers: "Approvers",
    permissions: "Purchase limits"
  }
};
var orgUserUserGroups$e = {
  title: "Manage user groups",
  subtitle: "User: {{ item.name }}",
  assigned: "User group {{item.name}} assigned successfully",
  unassigned: "User group {{item.name}} unassigned successfully"
};
var orgUserAssignedUserGroups$e = {
  title: "Assigned user groups",
  subtitle: "User: {{ item.name }}",
  assigned: "User group {{item.name}} assigned successfully",
  unassigned: "User group {{item.name}} unassigned successfully"
};
var orgUserApprovers$e = {
  title: "Manage approvers",
  subtitle: "User: {{ item.name }}",
  assigned: "Approver {{ item.name }} assigned successfully",
  unassigned: "Approver {{ item.name }} unassigned successfully"
};
var orgUserAssignedApprovers$e = {
  title: "Assigned approvers",
  subtitle: "User: {{ item.name }}",
  assigned: "Approver {{ item.name }} assigned successfully",
  unassigned: "Approver {{ item.name }} unassigned successfully"
};
var orgUserPermissions$e = {
  title: "Manage purchase limits",
  subtitle: "User: {{ item.name }}",
  assigned: "Purchase limit {{ item.code }} assigned successfully",
  unassigned: "Purchase limit {{ item.code }} unassigned successfully"
};
var orgUserAssignedPermissions$e = {
  title: "Assigned purchase limits",
  subtitle: "User: {{ item.name }}",
  assigned: "Purchase limit {{ item.code }} assigned successfully",
  unassigned: "Purchase limit {{ item.code }} unassigned successfully"
};
var orgPurchaseLimit$e = {
  groupName: "Purchase Limits",
  header: "All purchase limits ({{count}})",
  name: "Name",
  code: "Code",
  active: "Status",
  limit: "Limit",
  orderApprovalPermissionType: "Type",
  threshold: "Threshold",
  periodRange: "Period",
  currency: "Currency",
  orgUnit: "Parent Unit",
  unit: "Parent Unit",
  actions: "",
  hint: "Purchase limits help control spending by defining how much buyers can spend per order or per week, month, quarter, or year. Purchase limits are assigned to users or user groups. Purchase limits are also assigned to approvers, defining how much they are permitted to approve. You can assign purchase limits to many users at once with user groups.",
  details: {
    title: "Purchase Limit Details",
    subtitle: "Purchase Limit: {{ item.code }}"
  },
  edit: {
    title: "Edit Purchase Limit",
    subtitle: "Purchase limits : {{ item.code }}"
  },
  create: {
    title: "Create Purchase Limit",
    subtitle: ""
  },
  sortBy: "Sort by",
  sort: {
    byName: "Name",
    byUnitName: "Unit"
  },
  messages: {
    deactivateTitle: "Disable this purchase limit?",
    deactivate: "Disabled purchase limits can no longer be assigned to a user or user group. Current assignments will have no effect.",
    confirmEnabled: "Purchase Limit {{ item.code }} enabled successfully",
    confirmDisabled: "Purchase Limit {{ item.code }} disabled successfully",
    update: "Purchase Limit {{ item.code }} updated successfully",
    create: "Purchase Limit {{ item.code }} created successfully"
  },
  info: {
    disabledEdit: "Enable the purchase limit to allow editing.",
    disabledEnable: "Unit must be enabled before this purchase limit may be enabled."
  },
  per: {
    DAY: "per day",
    WEEK: "per week",
    MONTH: "per month",
    QUARTER: "per quarter",
    YEAR: "per year"
  },
  breadcrumbs: {
    list: "All purchase limits",
    details: "{{code}}"
  }
};
var organization$t = {
  organization: organization$s,
  orgCostCenter: orgCostCenter$e,
  orgCostCenterBudgets: orgCostCenterBudgets$e,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$e,
  orgBudget: orgBudget$e,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$e,
  orgUnit: orgUnit$e,
  orgUnitChildren: orgUnitChildren$e,
  orgUnitApprovers: orgUnitApprovers$e,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$e,
  orgUnitAssignedRoles: orgUnitAssignedRoles$e,
  orgUnitUsers: orgUnitUsers$e,
  orgUnitUserRoles: orgUnitUserRoles$e,
  orgUnitAssignedUsers: orgUnitAssignedUsers$e,
  orgUnitCostCenters: orgUnitCostCenters$e,
  orgUnitAddress: orgUnitAddress$e,
  orgUserGroup: orgUserGroup$e,
  orgUserGroupUsers: orgUserGroupUsers$e,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$e,
  orgUserGroupPermissions: orgUserGroupPermissions$e,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$e,
  orgUser: orgUser$e,
  orgUserUserGroups: orgUserUserGroups$e,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$e,
  orgUserApprovers: orgUserApprovers$e,
  orgUserAssignedApprovers: orgUserAssignedApprovers$e,
  orgUserPermissions: orgUserPermissions$e,
  orgUserAssignedPermissions: orgUserAssignedPermissions$e,
  orgPurchaseLimit: orgPurchaseLimit$e
};
var en = {
  organization: organization$t
};
var organization$q = {
  enabled: "Activa",
  disabled: "Deshabilitada",
  enable: "Habilitar",
  disable: "Deshabilitar",
  name: "Nombre",
  code: "Código",
  done: "listo",
  cancel: "Cancelar",
  add: "Añadir",
  manageUsers: "Gestionar usuarios",
  create: "Crear {{name}}",
  edit: "Tratar",
  save: "Grabar {{name}}",
  "delete": "Borrar",
  assign: "Administrar",
  active: "Activa",
  status: "Estado",
  details: "Detalles",
  messages: {
    emptyList: "La lista está vacía"
  },
  userRoles: {
    b2bcustomergroup: "Cliente",
    b2bapprovergroup: "Aprobador",
    b2bmanagergroup: "Gerente",
    b2badmingroup: "Administración"
  },
  userRights: {
    unitorderviewergroup: "Ver pedidos a nivel de unidad"
  },
  breadcrumb: "Organización",
  notification: {
    noSufficientPermissions: "Sin permisos suficientes para acceder a esta página",
    notExist: "Este elemento no existe",
    disabled: "No puede tratar un elemento desactivado"
  },
  confirmation: {
    cancel: "CANCELAR",
    confirm: "CONFIRMAR",
    disable: "DESHABILITAR",
    "delete": "BORRAR"
  },
  httpHandlers: {
    conflict: {
      budget: "El presupuesto con el código {{ code }} ya existe.",
      costCenter: "El centro de costes con el código {{ code }} ya existe.",
      unit: "La unidad organizativa con el UID {{ code }} ya existe.",
      user: "El usuario con el correo electrónico {{ code }} ya existe",
      userGroup: "El grupo de usuarios con el ID {{ code }} ya existe",
      permission: "El permiso de aprobación con el código {{ code }} ya existe.",
      unknown: "Error de validación de servidor."
    }
  },
  information: "Más información sobre {{title}}"
};
var orgCostCenter$d = {
  groupName: "Centros de costes",
  header: "Todos los centros de costes ({{count}})",
  code: "Código",
  active: "Estado",
  name: "Nombre",
  currency: "Moneda",
  unit: "Unidad superior",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad",
    byCode: "Código"
  },
  hint: "Todos los pedidos realizados mediante la cuenta de compra de su organización están enlazados a un centro de costes para fines de seguimiento. Cada unidad puede tener varios centros de costes. Para limitar los gastos, se asignan presupuestos a centros de costes. Un comprador selecciona un centro de costes al finalizar la compra.",
  disable: {
    confirm: "Deshabilitar"
  },
  messages: {
    deactivateTitle: "¿Deshabilitar este centro de costes?",
    deactivate: "Los centros de costes deshabilitados no se pueden usar para realizar pedidos. Asegúrese de que su unidad tenga, al menos, un centro de costes. Los pedidos existentes no se verán afectados.",
    confirmEnabled: "Centro de costes {{ item.name }} habilitado correctamente",
    confirmDisabled: "Centro de costes {{ item.name }} deshabilitado correctamente",
    update: "Centro de costes {{ item.name }} actualizado correctamente",
    create: "Centro de costes {{ item.name }} creado correctamente"
  },
  info: {
    disabledEdit: "Habilite el centro de costes para permitir edición.",
    disabledEnable: "La unidad debe estar habilitada antes de poder habilitar este centro de costes."
  },
  details: {
    title: "Detalles de centro de costes",
    subtitle: "Centro de costes: {{ item.name }}"
  },
  edit: {
    title: "Tratar centro de costes",
    subtitle: "Centro de costes: {{ item.name }}"
  },
  create: {
    title: "Crear centro de costes",
    subtitle: ""
  },
  budget: {
    link: "Presupuestos"
  },
  breadcrumbs: {
    list: "Todos los centros de costes",
    details: "{{name}}",
    budgets: "Presupuestos"
  }
};
var orgCostCenterBudgets$d = {
  title: "Gestionar presupuestos",
  subtitle: "Centro de costes: {{ item.name }}",
  assigned: "Presupuesto {{ item.name }} asignado correctamente",
  unassigned: "Presupuesto {{ item.name }} desasignado correctamente"
};
var orgCostCenterAssignedBudgets$d = {
  title: "Presupuestos asignados",
  subtitle: "Centro de costes: {{ item.name }}",
  assigned: "Presupuesto {{ item.name }} asignado correctamente",
  unassigned: "Presupuesto {{ item.name }} desasignado correctamente"
};
var orgBudget$d = {
  groupName: "Presupuestos",
  header: "Todos los presupuestos ({{count}})",
  code: "Código",
  name: "Nombre",
  active: "Estado",
  currency: "Moneda",
  amount: "Importe",
  unit: "Unidad",
  businessUnits: "Unidad",
  dateRange: "Inicio - Fin",
  startDate: "Inicio",
  endDate: "Fin",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad",
    byCode: "Código",
    byValue: "Valor"
  },
  hint: "Los presupuestos fijan límites de compra generales y se asignan a centros de costes. Un comprador selecciona un centro de costes al finalizar la compra.",
  details: {
    title: "Detalles de presupuesto",
    subtitle: "Presupuesto: {{ item.name }}"
  },
  edit: {
    title: "Tratar presupuesto",
    subtitle: "Presupuesto: {{ item.name }}"
  },
  create: {
    title: "Crear presupuesto",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "¿Deshabilitar este presupuesto?",
    deactivate: "Los presupuestos deshabilitados ya no se aplican a los centros de costes a los que están asignados. Asegúrese de que el centro de costes asociado tenga, al menos, un presupuesto.",
    confirmEnabled: "Presupuesto {{ item.name }} habilitado correctamente",
    confirmDisabled: "Presupuesto {{ item.name }} deshabilitado correctamente",
    update: "Presupuesto {{ item.name }} actualizado correctamente",
    create: "Presupuesto {{ item.name }} creado correctamente"
  },
  info: {
    disabledEdit: "Habilite el presupuesto para permitir edición.",
    disabledEnable: "La unidad debe estar habilitada antes de poder habilitar este presupuesto."
  },
  links: {
    costCenters: "Centros de costes"
  },
  breadcrumbs: {
    list: "Todos los presupuestos",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$d = {
  title: "Centros de costes",
  subtitle: "Presupuesto: {{ item.name }}"
};
var orgUnit$d = {
  groupName: "Unidades",
  header: "Todas las unidades ({{count}})",
  unit: "Unidad",
  name: "Nombre",
  uid: "ID",
  approvalProcess: "Proceso de aprobación",
  parentUnit: "Unidad superior",
  active: "Estado",
  hint: "Las unidades representan departamentos, tiendas, regiones o cualquier otra agrupación lógica que tenga sentido para usted. Los centros de costes y direcciones de entrega están disponibles para un comprador al finalizar la compra según su unidad. Los usuarios tienen acceso a todas las unidades secundarias de su unidad principal.",
  details: {
    title: "Detalles de unidad",
    subtitle: "Unidad: {{ item.name }}",
    hint: "Las unidades representan departamentos, tiendas, regiones o cualquier otra agrupación lógica que tenga sentido para usted. Al deshabilitar una unidad, se deshabilitan todos los elementos secundarios de esa unidad, incluidas unidades secundarias, usuarios, aprobadores y centros de costes. Las unidades deshabilitadas no se pueden tratar."
  },
  edit: {
    title: "Tratar unidad",
    subtitle: "Unidad: {{ item.name }}"
  },
  create: {
    title: "Crear unidad",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "¿Deshabilitar esta unidad?",
    deactivate: "Deshabilitar una unidad tiene efectos amplios en su organización de comercio. TODAS las unidades secundarias, usuarios, presupuestos y centros de costes de la unidad también se deshabilitarán.",
    confirmEnabled: "Unidad {{item.name}} habilitada correctamente",
    confirmDisabled: "Unidad {{item.name}} deshabilitada correctamente",
    update: "Unidad {{item.name}} actualizada correctamente",
    create: "Unidad {{item.name}} creada correctamente"
  },
  info: {
    disabledEdit: "Habilite la unidad para permitir edición.",
    disabledEnable: "El elemento principal debe estar habilitado antes de poder habilitar esta unidad.",
    disabledDisable: "La unidad raíz no se puede deshabilitar."
  },
  links: {
    units: "Unidades secundarias",
    users: "Usuarios",
    approvers: "Aprobadores",
    shippingAddresses: "Direcciones de entrega",
    costCenters: "Centros de costes"
  },
  tree: {
    expandAll: "Expandir todo",
    collapseAll: "Contraer todo",
    expand: "Expandir",
    collapse: "contraer",
    explore: "Explorar subunidades"
  },
  children: {
    create: {
      title: "Crear unidad secundaria",
      subtitle: ""
    },
    messages: {
      create: "Unidad {{item.name}} creada correctamente"
    }
  },
  costCenters: {
    create: {
      title: "Crear centro de costes",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Unidad de negocio principal",
    create: "Crear unidad",
    parentOrgUnitNotes: "Esta unidad es la unidad de nivel superior de su organización. No se puede asignar a otra unidad."
  },
  users: {
    header: "Usuarios en {{code}}",
    changeUserRoles: "Cambiar roles de usuario",
    newUser: "Usuario nuevo"
  },
  assignRoles: {
    header: "Gestionar roles en {{code}}",
    instructions: {
      check: "Para asignar un rol a un usuario, seleccione la casilla de verificación del rol.",
      uncheck: "Para eliminar un rol, borre la casilla de verificación del rol.",
      changes: "Los cambios se graban automáticamente."
    }
  },
  approvers: {
    header: "Aprobadores en {{code}}",
    assign: "Gestionar aprobadores",
    "new": "Aprobador nuevo"
  },
  assignApprovers: {
    header: "Gestionar aprobadores en {{code}}",
    instructions: {
      check: "Para asignar un aprobador a esta unidad, seleccione la casilla de verificación del usuario.",
      uncheck: "Para eliminar un aprobador, borre le casilla de verificación del usuario.",
      changes: "Los cambios se graban automáticamente."
    },
    hint: "Se asignan privilegios de aprobación a los usuarios en la lista Aprobadores para los compradores de esta unidad y unidades secundarias. Tenga en cuenta que un usuario con el rol de aprobador es distinto de un aprobador que aparecen en la lista Aprobadores. Si no existe un aprobador para una unidad o si los aprobadores no tienen privilegios de compra de aprobación suficientes, se busca un aprobador más alto en la jerarquía de unidades, hasta elegir una administración."
  },
  breadcrumbs: {
    list: "Todas las unidades",
    details: "{{name}}",
    children: "Unidades secundarias",
    users: "Usuarios",
    approvers: "Aprobadores",
    addresses: "Direcciones de entrega",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Centros de costes"
  }
};
var orgUnitChildren$d = {
  title: "Unidades secundarias",
  subtitle: "Unidad: {{item.name}}",
  info: {
    disabledCreate: "No se puede crear unidad secundaria para una unidad deshabilitada."
  },
  hint: 'Las unidades representan departamentos, tiendas, regiones o cualquier otra agrupación lógica que tenga sentido para usted. Los usuarios "heredan" unidades secundarias, lo cual significa que los compradores tienen acceso a centros de costes y direcciones de entrega de unidades secundarias al finalizar la compra.'
};
var orgUnitApprovers$d = {
  title: "Gestionar aprobadores",
  subtitle: "Unidad: {{item.name}}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente"
};
var orgUnitAssignedApprovers$d = {
  title: "Aprobadores asignados",
  subtitle: "Unidad: {{item.name}}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente",
  hint: "Se asignan privilegios de aprobación a los usuarios en la lista Aprobadores para los compradores de esta unidad y unidades secundarias. Tenga en cuenta que un usuario con el rol de aprobador es distinto de un aprobador que aparecen en la lista Aprobadores. Si no existe un aprobador para una unidad o si los aprobadores no tienen privilegios de compra de aprobación suficientes, se busca un aprobador más alto en la jerarquía de unidades, hasta elegir una administración."
};
var orgUnitAssignedRoles$d = {
  header: "Gestionar roles en {{code}}",
  name: "Nombre",
  email: "Correo electrónico",
  roles: "Roles",
  roleCustomer: "Cliente",
  roleApprover: "Aprobador",
  roleManager: "Gerente",
  roleAdministrator: "Administración"
};
var orgUnitUsers$d = {
  title: "Usuarios asignados",
  subtitle: "Unidad: {{item.name}}",
  info: {
    disabledCreate: "No se puede crear usuarios para una unidad deshabilitada."
  },
  hint: 'Los usuarios son compradores, aprobadores, gerentes y administradores de su organización. Se asigna un rol a cada usuario para realizar o aprobar compras. Los usuarios "heredan" unidades secundarias, lo cual significa que los compradores tienen acceso a centros de costes y dirección de entrega de la unidades secundarias al finalizar la compra.'
};
var orgUnitUserRoles$d = {
  title: "Roles y derechos de usuario",
  subtitle: "Usuario: {{item.name}}",
  messages: {
    rolesUpdated: "Roles actualizados correctamente {{item.name}}"
  }
};
var orgUnitAssignedUsers$d = {
  title: "Usuarios asignados",
  subtitle: "Unidad: {{item.name}}"
};
var orgUnitCostCenters$d = {
  title: "Centros de costes asignados",
  subtitle: "Unidad: {{item.name}}",
  info: {
    disabledCreate: "No se puede crear centro de usuarios para una unidad deshabilitada."
  },
  hint: 'Todos los pedidos realizados mediante la cuenta de compra de su organización están enlazados a un centro de costes para fines de seguimiento. Un comprador selecciona un centro de costes al finalizar la compra mediante el método de compra "Cuenta". Cada unidad puede tener varios centros de costes, pero solo se puede asignar un centro de costes a una unidad. Para definir límites de gastos máximos, se asignan presupuestos a centros de costes. '
};
var orgUnitAddress$d = {
  title: "Direcciones de entrega",
  subtitle: "Unidad: {{item.name}}",
  country: "País/Región",
  titles: "Tratamiento",
  firstName: "Nombre",
  lastName: "Apellido",
  formattedAddress: "Dirección",
  address1: "Dirección",
  address2: "Segunda dirección (opcional)",
  city: "Ciudad",
  state: "Estado",
  zipCode: "Código postal",
  phoneNumber: "Número de teléfono (opcional)",
  streetAddress: "Dirección postal",
  aptSuite: "Número de apartamento",
  selectOne: "Seleccionar uno...",
  hint: 'Cuando un comprador finaliza la compra con el método de compra "Cuenta", puede elegir un centro de costes. Las dirección de entrega disponibles para el comprador se basan en la unidad del centro de costes elegido.',
  details: {
    title: "Detalles de la dirección",
    subtitle: "Unidad: {{item.name}}"
  },
  edit: {
    title: "Tratar dirección"
  },
  create: {
    title: "Crear dirección"
  },
  form: {
    subtitle: "Unidad: {{item.name}}"
  },
  messages: {
    create: "Dirección de {{ item.firstName }} {{ item.lastName }} creada correctamente",
    update: "Dirección de {{ item.firstName }} {{ item.lastName }} actualizada correctamente",
    "delete": "No se puede recuperar la dirección. Los pedidos existentes no se ven afectados.",
    deleteTitle: "¿Borrar esta dirección?",
    deleted: "Dirección de {{ item.firstName }} {{ item.lastName }} borrada correctamente"
  }
};
var orgUserGroup$d = {
  groupName: "Grupos de usuarios",
  header: "Todos los grupos de usuarios ({{count}})",
  disabled: "(deshabilitado)",
  uid: "Código",
  name: "Nombre",
  unit: "Unidad",
  orgUnit: "Unidad",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad",
    byGroupID: "Grupo"
  },
  hint: "Los grupos de usuarios le permiten combinar usuarios en un grupo para asignar límites de compra a varios usuarios a la vez.",
  details: {
    title: "Detalles de grupo de usuarios",
    subtitle: "Grupo de usuarios: {{ item.name }}"
  },
  edit: {
    title: "Tratar grupo de usuarios",
    subtitle: "Grupo de usuarios: {{ item.name }}"
  },
  create: {
    title: "Crear grupo de usuarios",
    subtitle: ""
  },
  links: {
    user: "Usuarios",
    permission: "Límites de compra"
  },
  messages: {
    update: "Grupo de usuarios {{ item.name }} actualizado correctamente",
    create: "Grupo de usuarios {{ item.name }} creado correctamente",
    deleteTitle: "¿Borrar este grupo de usuarios?",
    "delete": "Los usuarios en este grupo no se verán afectados por la eliminación del grupo de usuarios.",
    deleted: "Grupo de usuarios {{ item.name }} borrado correctamente"
  },
  breadcrumbs: {
    list: "Todos los grupos de usuarios",
    details: "{{name}}",
    users: "Usuarios",
    permissions: "Límites de compra"
  }
};
var orgUserGroupUsers$d = {
  title: "Gestionar usuarios",
  subtitle: "Grupo de usuarios: {{ item.name }}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente",
  unassignAll: "Desasignar todos",
  unassignAllConfirmation: "Todos los usuarios desasignados correctamente."
};
var orgUserGroupAssignedUsers$d = {
  title: "Usuarios asignados",
  subtitle: "Grupo de usuarios: {{ item.name }}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente"
};
var orgUserGroupPermissions$d = {
  title: "Gestionar límites de compra",
  subtitle: "Límite: {{ item.name }}",
  assigned: "Límites de compra {{item.code}} asignados correctamente",
  unassigned: "Límites de compra {{item.code}} desasignados correctamente"
};
var orgUserGroupAssignedPermissions$d = {
  title: "Límites de compra asignados",
  subtitle: "Límite: {{ item.name }}",
  assigned: "Límites de compra {{item.code}} asignados correctamente",
  unassigned: "Límites de compra {{item.code}} desasignados correctamente"
};
var orgUser$d = {
  groupName: "Usuarios",
  header: "Todos los usuarios ({{count}})",
  disabled: "(deshabilitado)",
  uid: "Correo electrónico",
  active: "Estado",
  name: "Nombre",
  firstName: "Nombre",
  lastName: "Apellido",
  email: "Correo electrónico",
  orgUnit: "Unidad",
  unit: "Unidad",
  roles: "Roles",
  rights: "Derechos",
  title: "Título",
  hint: "Los usuarios son compradores, aprobadores, gerentes y administradores de su organización. Se asigna un rol a cada usuario para realizar o aprobar compras. Cada usuario pertenece a una unidad y tiene acceso a todas las unidades secundarias de su unidad principal.",
  unitApprover: "Aprobador de unidad",
  assignApprover: "Añada al usuario a aprobadores para la unidad",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nombre",
    byUnit: "Unidad"
  },
  details: {
    title: "Detalles de usuario",
    subtitle: "Usuario: {{ item.name }}"
  },
  edit: {
    title: "Tratar usuario",
    subtitle: "Usuario: {{ item.name }}"
  },
  create: {
    title: "Crear usuario",
    subtitle: ""
  },
  links: {
    password: "Cambiar contraseña",
    approvers: "Aprobadores",
    userGroup: "Grupos de usuarios",
    permission: "Límites de compra",
    rolesAndRights: "Roles y derechos"
  },
  messages: {
    deactivateTitle: "¿Deshabilitar este usuario?",
    deactivate: "Los usuarios deshabilitados no pueden iniciar sesión en la tienda online y realizar pedidos.",
    confirmEnabled: "Usuario {{ item.firstName }} {{ item.lastName }} borrado correctamente",
    confirmDisabled: "Usuario {{ item.firstName }} {{ item.lastName }} deshabilitado correctamente",
    update: "Usuario {{ item.firstName }} {{ item.lastName }} actualizado correctamente",
    create: "Usuario {{ item.firstName }} {{ item.lastName }} creado correctamente",
    updatePassword: "Contraseña del usuario {{ item.firstName }} {{ item.lastName }} actualizada correctamente"
  },
  info: {
    disabledEdit: "Habilite el usuario para permitir edición.",
    disabledEnable: "La unidad debe estar habilitada antes de poder habilitar este usuario."
  },
  approver: {
    link: "Aprobadores",
    header: "Aprobadores en {{code}}",
    assign: "Asignar aprobadores",
    assignHeader: "Asignar aprobadores en {{code}}",
    back: "Atrás",
    "new": "Aprobador nuevo",
    instructions: {
      check: "Para asignar un aprobador a este usuario, seleccione la casilla de verificación del usuario.",
      uncheck: "Para eliminar un aprobador, borre le casilla de verificación del usuario.",
      changes: "Los cambios se graban automáticamente."
    }
  },
  userGroup: {
    link: "Grupos de usuarios",
    header: "Grupos de usuarios en {{code}}",
    assign: "Asignar grupos de usuarios",
    assignHeader: "Asignar grupos de usuarios en {{code}}",
    back: "Atrás",
    instructions: {
      check: "Para asignar un grupo de usuarios a este usuario, seleccione la casilla de verificación del usuario.",
      uncheck: "Para eliminar un grupo de usuarios, borre le casilla de verificación del usuario.",
      changes: "Los cambios se graban automáticamente."
    }
  },
  permission: {
    link: "Límites de compra",
    header: "Límites de compra en {{code}}",
    assign: "Asignar límites de compra",
    assignHeader: "Asignar límites de compra en {{code}}",
    back: "Atrás",
    instructions: {
      check: "Para un límite de compra a este usuario, seleccionar su casilla de verificación.",
      uncheck: "Para desasignar un límite de compra, borre su casilla de verificación.",
      changes: "Los cambios se graban automáticamente."
    },
    per: {
      "undefined": "",
      MONTH: "por mes",
      YEAR: "por año",
      WEEK: "por semana",
      QUARTER: "por trimestre"
    }
  },
  password: {
    title: "Cambiar contraseña",
    subtitle: "Usuario: {{ item.email }}",
    newPassword: "Nueva contraseña",
    confirmPassword: "Volver a escribir la nueva contraseña"
  },
  breadcrumbs: {
    list: "Todos los usuarios",
    details: "{{name}}",
    userGroups: "Grupos de usuarios",
    approvers: "Aprobadores",
    permissions: "Límites de compra"
  }
};
var orgUserUserGroups$d = {
  title: "Gestionar grupos de usuarios",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Grupo de usuarios {{ item.name }} asignado correctamente",
  unassigned: "Grupo de usuarios {{ item.name }} desasignado correctamente"
};
var orgUserAssignedUserGroups$d = {
  title: "Grupos de usuarios asignados",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Grupo de usuarios {{ item.name }} asignado correctamente",
  unassigned: "Grupo de usuarios {{ item.name }} desasignado correctamente"
};
var orgUserApprovers$d = {
  title: "Gestionar aprobadores",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Aprobador {{ item.name }} asignado correctamente",
  unassigned: "Aprobador {{ item.name }} desasignado correctamente"
};
var orgUserAssignedApprovers$d = {
  title: "Aprobadores asignados",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Aprobador {{ item.name }} asignado correctamente",
  unassigned: "Aprobador {{ item.name }} desasignado correctamente"
};
var orgUserPermissions$d = {
  title: "Gestionar límites de compra",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Límite de compra {{item.code}} asignado correctamente",
  unassigned: "Límite de compra {{item.code}} desasignado correctamente"
};
var orgUserAssignedPermissions$d = {
  title: "Límites de compra asignados",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Límite de compra {{item.code}} asignado correctamente",
  unassigned: "Límite de compra {{item.code}} desasignado correctamente"
};
var orgPurchaseLimit$d = {
  groupName: "Límites de compra",
  header: "Todos los límites de compra ({{count}})",
  name: "Nombre",
  code: "Código",
  active: "Estado",
  limit: "Límite",
  orderApprovalPermissionType: "Tipo",
  threshold: "Umbral",
  periodRange: "Período",
  currency: "Moneda",
  orgUnit: "Unidad superior",
  unit: "Unidad superior",
  actions: "",
  hint: "Los límites de compra ayudar a controlar gastos al definir cuánto pueden gastar los compradores por pedido o por semana, mes, trimestre o año. Estos límites se asignan a usuarios o grupos de usuarios, pero también se pueden asignar a aprobadores, lo cual define cuánto pueden aprobar. Puede asignar límites de compra a varios usuarios a la vez con grupos de usuario.",
  details: {
    title: "Detalles de límite de compra",
    subtitle: "Límite de compra: {{ item.code }}"
  },
  edit: {
    title: "Editar límite de compra",
    subtitle: "Límites de compra: {{ item.code }}"
  },
  create: {
    title: "Crear límite de compra",
    subtitle: ""
  },
  sortBy: "Ordenar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad"
  },
  messages: {
    deactivateTitle: "¿Deshabilitar este límite de compra?",
    deactivate: "Los límites de compra deshabilitados ya no se pueden asignar a un usuario o grupo de usuarios. Las asignaciones actuales no tendrán efecto.",
    confirmEnabled: "Límite de compra {{item.code}} habilitado correctamente",
    confirmDisabled: "Límite de compra {{item.code}} deshabilitado correctamente",
    update: "Límite de compra {{item.code}} actualizado correctamente",
    create: "Límite de compra {{item.code}} creado correctamente"
  },
  info: {
    disabledEdit: "Habilite el límite de compra para permitir edición.",
    disabledEnable: "La unidad debe estar habilitada antes de poder habilitar este límite de compra."
  },
  per: {
    DAY: "por día",
    WEEK: "por semana",
    MONTH: "por mes",
    QUARTER: "por trimestre",
    YEAR: "por año"
  },
  breadcrumbs: {
    list: "Todos los límites de compra",
    details: "{{code}}"
  }
};
var organization$r = {
  organization: organization$q,
  orgCostCenter: orgCostCenter$d,
  orgCostCenterBudgets: orgCostCenterBudgets$d,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$d,
  orgBudget: orgBudget$d,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$d,
  orgUnit: orgUnit$d,
  orgUnitChildren: orgUnitChildren$d,
  orgUnitApprovers: orgUnitApprovers$d,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$d,
  orgUnitAssignedRoles: orgUnitAssignedRoles$d,
  orgUnitUsers: orgUnitUsers$d,
  orgUnitUserRoles: orgUnitUserRoles$d,
  orgUnitAssignedUsers: orgUnitAssignedUsers$d,
  orgUnitCostCenters: orgUnitCostCenters$d,
  orgUnitAddress: orgUnitAddress$d,
  orgUserGroup: orgUserGroup$d,
  orgUserGroupUsers: orgUserGroupUsers$d,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$d,
  orgUserGroupPermissions: orgUserGroupPermissions$d,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$d,
  orgUser: orgUser$d,
  orgUserUserGroups: orgUserUserGroups$d,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$d,
  orgUserApprovers: orgUserApprovers$d,
  orgUserAssignedApprovers: orgUserAssignedApprovers$d,
  orgUserPermissions: orgUserPermissions$d,
  orgUserAssignedPermissions: orgUserAssignedPermissions$d,
  orgPurchaseLimit: orgPurchaseLimit$d
};
var es = {
  organization: organization$r
};
var organization$o = {
  enabled: "Activa",
  disabled: "Desactivada",
  enable: "Activar",
  disable: "Desactivar",
  name: "Nombre",
  code: "Código",
  done: "listo",
  cancel: "Cancelar",
  add: "Agregar",
  manageUsers: "Gestionar usuarios",
  create: "Crear {{name}}",
  edit: "Editar",
  save: "Guardar {{name}}",
  "delete": "Borrar",
  assign: "Administrar",
  active: "Activa",
  status: "Estado",
  details: "Detalles",
  messages: {
    emptyList: "La lista está vacía"
  },
  userRoles: {
    b2bcustomergroup: "Cliente",
    b2bapprovergroup: "Aprobador",
    b2bmanagergroup: "Gerente",
    b2badmingroup: "Administrador"
  },
  userRights: {
    unitorderviewergroup: "Ver pedidos a nivel de unidad"
  },
  breadcrumb: "Organización",
  notification: {
    noSufficientPermissions: "Sin permisos suficientes para acceder a esta página",
    notExist: "Este elemento no existe",
    disabled: "No puede editar un elemento desactivado"
  },
  confirmation: {
    cancel: "CANCELAR",
    confirm: "CONFIRMAR",
    disable: "DESACTIVAR",
    "delete": "BORRAR"
  },
  httpHandlers: {
    conflict: {
      budget: "El presupuesto con el código {{ code }} ya existe.",
      costCenter: "El centro de costos con el código {{ code }} ya existe.",
      unit: "La unidad organizativa con el UID {{ code }} ya existe.",
      user: "El usuario con el correo electrónico {{ code }} ya existe",
      userGroup: "El grupo de usuarios con el ID {{ code }} ya existe",
      permission: "El permiso de aprobación con el código {{ code }} ya existe.",
      unknown: "Error de validación de servidor."
    }
  },
  information: "Más información sobre {{title}}"
};
var orgCostCenter$c = {
  groupName: "Centros de costos",
  header: "Todos los centros de costos ({{count}})",
  code: "Código",
  active: "Estado",
  name: "Nombre",
  currency: "Moneda",
  unit: "Unidad superior",
  actions: "",
  sortBy: "Clasificar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad",
    byCode: "Código"
  },
  hint: "Todos los pedidos realizados mediante la cuenta de compra de su organización están enlazados a un centro de costos para fines de seguimiento. Cada unidad puede tener varios centros de costos. Para limitar los gastos, se asignan presupuestos a centros de costos. Un comprador selecciona un centro de costos al finalizar la compra.",
  disable: {
    confirm: "Desactivar"
  },
  messages: {
    deactivateTitle: "¿Desactivar este centro de costos?",
    deactivate: "Los centros de costos desactivados no se pueden usar para realizar pedidos. Asegúrese de que su unidad tenga, al menos, un centro de costos. Los pedidos existentes no se verán afectados.",
    confirmEnabled: "Centro de costos {{ item.name }} activado correctamente",
    confirmDisabled: "Centro de costos {{ item.name }} desactivado correctamente",
    update: "Centro de costos {{ item.name }} actualizado correctamente",
    create: "Centro de costos {{ item.name }} creado correctamente"
  },
  info: {
    disabledEdit: "Active el centro de costos para permitir edición.",
    disabledEnable: "La unidad debe estar activada antes de poder activar este centro de costos."
  },
  details: {
    title: "Detalles de centro de costos",
    subtitle: "Centro de costos: {{ item.name }}"
  },
  edit: {
    title: "Editar centro de costos",
    subtitle: "Centro de costos: {{ item.name }}"
  },
  create: {
    title: "Crear centro de costos",
    subtitle: ""
  },
  budget: {
    link: "Presupuestos"
  },
  breadcrumbs: {
    list: "Todos los centros de costos",
    details: "{{name}}",
    budgets: "Presupuestos"
  }
};
var orgCostCenterBudgets$c = {
  title: "Gestionar presupuestos",
  subtitle: "Centro de costos: {{ item.name }}",
  assigned: "Presupuesto {{ item.name }} asignado correctamente",
  unassigned: "Presupuesto {{ item.name }} desasignado correctamente"
};
var orgCostCenterAssignedBudgets$c = {
  title: "Presupuestos asignados",
  subtitle: "Centro de costos: {{ item.name }}",
  assigned: "Presupuesto {{ item.name }} asignado correctamente",
  unassigned: "Presupuesto {{ item.name }} desasignado correctamente"
};
var orgBudget$c = {
  groupName: "Presupuestos",
  header: "Todos los presupuestos ({{count}})",
  code: "Código",
  name: "Nombre",
  active: "Estado",
  currency: "Moneda",
  amount: "Importe",
  unit: "Unidad",
  businessUnits: "Unidad",
  dateRange: "Inicio - Fin",
  startDate: "Inicio",
  endDate: "Fin",
  actions: "",
  sortBy: "Clasificar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad",
    byCode: "Código",
    byValue: "Valor"
  },
  hint: "Los presupuestos definen límites de compra generales y se asignan a centros de costos. Un comprador selecciona un centro de costos al finalizar la compra.",
  details: {
    title: "Detalles de presupuesto",
    subtitle: "Presupuesto: {{ item.name }}"
  },
  edit: {
    title: "Editar presupuesto",
    subtitle: "Presupuesto: {{ item.name }}"
  },
  create: {
    title: "Crear presupuesto",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "¿Desactivar este presupuesto?",
    deactivate: "Los presupuestos desactivados ya no se aplican a los centros de costos a los que están asignados. Asegúrese de que el centro de costos asociado tenga, al menos, un presupuesto.",
    confirmEnabled: "Presupuesto {{ item.name }} activado correctamente",
    confirmDisabled: "Presupuesto {{ item.name }} desactivado correctamente",
    update: "Presupuesto {{ item.name }} actualizado correctamente",
    create: "Presupuesto {{ item.name }} creado correctamente"
  },
  info: {
    disabledEdit: "Active el presupuesto para permitir edición.",
    disabledEnable: "La unidad debe estar activada antes de poder activar este presupuesto."
  },
  links: {
    costCenters: "Centros de costos"
  },
  breadcrumbs: {
    list: "Todos los presupuestos",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$c = {
  title: "Centros de costos",
  subtitle: "Presupuesto: {{ item.name }}"
};
var orgUnit$c = {
  groupName: "Unidades",
  header: "Todas las unidades ({{count}})",
  unit: "Unidad",
  name: "Nombre",
  uid: "ID",
  approvalProcess: "Proceso de aprobación",
  parentUnit: "Unidad superior",
  active: "Estado",
  hint: "Las unidades representan departamentos, tiendas, regiones o cualquier otra agrupación lógica que tenga sentido para usted. Los centros de costos y direcciones de entrega están disponibles para un comprador al finalizar la compra según su unidad. Los usuarios tienen acceso a todas las unidades secundarias de su unidad principal.",
  details: {
    title: "Detalles de unidad",
    subtitle: "Unidad: {{ item.name }}",
    hint: "Las unidades representan departamentos, tiendas, regiones o cualquier otra agrupación lógica que tenga sentido para usted. Al desactivar una unidad, se desactivan todos los elementos secundarios de esa unidad, incluidas unidades secundarias, usuarios, aprobadores y centros de costos. Las unidades desactivadas no se pueden editar."
  },
  edit: {
    title: "Editar unidad",
    subtitle: "Unidad: {{ item.name }}"
  },
  create: {
    title: "Crear unidad",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "¿Desactivar esta unidad?",
    deactivate: "Desactivar una unidad tiene efectos amplios en su organización de comercio. TODAS las unidades secundarias, usuarios, presupuestos y centros de costos de la unidad también se desactivarán.",
    confirmEnabled: "Unidad {{item.name}} activada correctamente",
    confirmDisabled: "Unidad {{item.name}} desactivada correctamente",
    update: "Unidad {{ item.name }} actualizada correctamente",
    create: "Unidad {{ item.name }} creada correctamente"
  },
  info: {
    disabledEdit: "Active la unidad para permitir edición.",
    disabledEnable: "El elemento principal debe estar activado antes de poder activar esta unidad.",
    disabledDisable: "La unidad raíz no se puede desactivar."
  },
  links: {
    units: "Unidades secundarias",
    users: "Usuarios",
    approvers: "Aprobadores",
    shippingAddresses: "Direcciones de entrega",
    costCenters: "Centros de costos"
  },
  tree: {
    expandAll: "Expandir todo",
    collapseAll: "Contraer todo",
    expand: "Expandir",
    collapse: "contraer",
    explore: "Explorar subunidades"
  },
  children: {
    create: {
      title: "Crear unidad secundaria",
      subtitle: ""
    },
    messages: {
      create: "Unidad {{ item.name }} creada correctamente"
    }
  },
  costCenters: {
    create: {
      title: "Crear centro de costos",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Unidad de negocio principal",
    create: "Crear unidad",
    parentOrgUnitNotes: "Esta unidad es la unidad de nivel superior de su organización. No se puede asignar a otra unidad."
  },
  users: {
    header: "Usuarios en {{code}}",
    changeUserRoles: "Cambiar roles de usuario",
    newUser: "Usuario nuevo"
  },
  assignRoles: {
    header: "Gestionar roles en {{code}}",
    instructions: {
      check: "Para asignar un rol a un usuario, seleccione la casilla de verificación del rol.",
      uncheck: "Para eliminar un rol, borre la casilla de verificación del rol.",
      changes: "Los cambios se guardan automáticamente."
    }
  },
  approvers: {
    header: "Aprobadores en {{code}}",
    assign: "Gestionar aprobadores",
    "new": "Aprobador nuevo"
  },
  assignApprovers: {
    header: "Gestionar aprobadores en {{code}}",
    instructions: {
      check: "Para asignar un aprobador a esta unidad, seleccione la casilla de verificación del usuario.",
      uncheck: "Para eliminar un aprobador, borre le casilla de verificación del usuario.",
      changes: "Los cambios se guardan automáticamente."
    },
    hint: "Se asignan privilegios de aprobación a los usuarios en la lista Aprobadores para los compradores de esta unidad y unidades secundarias. Tenga en cuenta que un usuario con el rol de aprobador es distinto de un aprobador que aparecen en la lista Aprobadores. Si no existe un aprobador para una unidad o si los aprobadores no tienen privilegios de compra de aprobación suficientes, se busca un aprobador más alto en la jerarquía de unidades, hasta elegir una administración."
  },
  breadcrumbs: {
    list: "Todas las unidades",
    details: "{{name}}",
    children: "Unidades secundarias",
    users: "Usuarios",
    approvers: "Aprobadores",
    addresses: "Direcciones de entrega",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Centros de costos"
  }
};
var orgUnitChildren$c = {
  title: "Unidades secundarias",
  subtitle: "Unidad: {{item.name}}",
  info: {
    disabledCreate: "No se puede crear unidad secundaria para una unidad desactivada."
  },
  hint: 'Las unidades representan departamentos, tiendas, regiones o cualquier otra agrupación lógica que tenga sentido para usted. Los usuarios "heredan" unidades secundarias, lo cual significa que los compradores tienen acceso a centros de costos y direcciones de entrega de unidades secundarias al finalizar la compra.'
};
var orgUnitApprovers$c = {
  title: "Gestionar aprobadores",
  subtitle: "Unidad: {{item.name}}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente"
};
var orgUnitAssignedApprovers$c = {
  title: "Aprobadores asignados",
  subtitle: "Unidad: {{item.name}}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente",
  hint: "Se asignan privilegios de aprobación a los usuarios en la lista Aprobadores para los compradores de esta unidad y unidades secundarias. Tenga en cuenta que un usuario con el rol de aprobador es distinto de un aprobador que aparecen en la lista Aprobadores. Si no existe un aprobador para una unidad o si los aprobadores no tienen privilegios de compra de aprobación suficientes, se busca un aprobador más alto en la jerarquía de unidades, hasta elegir una administración."
};
var orgUnitAssignedRoles$c = {
  header: "Gestionar roles en {{code}}",
  name: "Nombre",
  email: "Correo electrónico",
  roles: "Roles",
  roleCustomer: "Cliente",
  roleApprover: "Aprobador",
  roleManager: "Gerente",
  roleAdministrator: "Administrador"
};
var orgUnitUsers$c = {
  title: "Usuarios asignados",
  subtitle: "Unidad: {{item.name}}",
  info: {
    disabledCreate: "No se puede crear usuarios para una unidad desactivada."
  },
  hint: 'Los usuarios son compradores, aprobadores, gerentes y administradores de su organización. Se asigna un rol a cada usuario para realizar o aprobar compras. Los usuarios "heredan" unidades secundarias, lo cual significa que los compradores tienen acceso a centros de costos y dirección de entrega de la unidades secundarias al finalizar la compra.'
};
var orgUnitUserRoles$c = {
  title: "Roles y derechos de usuario",
  subtitle: "Usuario: {{item.name}}",
  messages: {
    rolesUpdated: "Roles actualizados correctamente {{item.name}}"
  }
};
var orgUnitAssignedUsers$c = {
  title: "Usuarios asignados",
  subtitle: "Unidad: {{item.name}}"
};
var orgUnitCostCenters$c = {
  title: "Centros de costos asignados",
  subtitle: "Unidad: {{item.name}}",
  info: {
    disabledCreate: "No se puede crear centro de costos para una unidad desactivada."
  },
  hint: 'Todos los pedidos realizados mediante la cuenta de compra de su organización están enlazados a un centro de costos para fines de seguimiento. Un comprador selecciona un centro de costos al finalizar la compra mediante el método de compra "Cuenta". Cada unidad puede tener varios centros de costos, pero solo se puede asignar un centro de costos a una unidad. Para definir límites de gastos máximos, se asignan presupuestos a centros de costos. '
};
var orgUnitAddress$c = {
  title: "Direcciones de entrega",
  subtitle: "Unidad: {{item.name}}",
  country: "País/Región",
  titles: "Tratamiento",
  firstName: "Nombre",
  lastName: "Apellido",
  formattedAddress: "Dirección",
  address1: "Dirección",
  address2: "Segunda dirección (opcional)",
  city: "Ciudad",
  state: "Estado",
  zipCode: "Código postal",
  phoneNumber: "Número de teléfono (opcional)",
  streetAddress: "Dirección postal",
  aptSuite: "Número de apartamento",
  selectOne: "Seleccionar uno...",
  hint: 'Cuando un comprador finaliza la compra con el método de compra "Cuenta", puede elegir un centro de costos. Las dirección de entrega disponibles para el comprador se basan en la unidad del centro de costos elegido.',
  details: {
    title: "Detalles de la dirección",
    subtitle: "Unidad: {{item.name}}"
  },
  edit: {
    title: "Editar dirección"
  },
  create: {
    title: "Crear dirección"
  },
  form: {
    subtitle: "Unidad: {{item.name}}"
  },
  messages: {
    create: "Dirección de {{ item.firstName }} {{ item.lastName }} creada correctamente",
    update: "Dirección de {{ item.firstName }} {{ item.lastName }} actualizada correctamente",
    "delete": "No se puede recuperar la dirección. Los pedidos existentes no se ven afectados.",
    deleteTitle: "¿Borrar esta dirección?",
    deleted: "Dirección de {{ item.firstName }} {{ item.lastName }} borrada correctamente"
  }
};
var orgUserGroup$c = {
  groupName: "Grupos de usuarios",
  header: "Todos los grupos de usuarios ({{count}})",
  disabled: "(desactivado)",
  uid: "Código",
  name: "Nombre",
  unit: "Unidad",
  orgUnit: "Unidad",
  actions: "",
  sortBy: "Clasificar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad",
    byGroupID: "Grupo"
  },
  hint: "Los grupos de usuarios le permiten combinar usuarios en un grupo para asignar límites de compra a varios usuarios a la vez.",
  details: {
    title: "Detalles de grupo de usuarios",
    subtitle: "Grupo de usuarios: {{ item.name }}"
  },
  edit: {
    title: "Editar grupo de usuarios",
    subtitle: "Grupo de usuarios: {{ item.name }}"
  },
  create: {
    title: "Crear grupo de usuarios",
    subtitle: ""
  },
  links: {
    user: "Usuarios",
    permission: "Límites de compra"
  },
  messages: {
    update: "Grupo de usuarios {{ item.name }} actualizado correctamente",
    create: "Grupo de usuarios {{ item.name }} creado correctamente",
    deleteTitle: "¿Borrar este grupo de usuarios?",
    "delete": "Los usuarios en este grupo no se verán afectados por la eliminación del grupo de usuarios.",
    deleted: "Grupo de usuarios {{ item.name }} borrado correctamente"
  },
  breadcrumbs: {
    list: "Todos los grupos de usuarios",
    details: "{{name}}",
    users: "Usuarios",
    permissions: "Límites de compra"
  }
};
var orgUserGroupUsers$c = {
  title: "Gestionar usuarios",
  subtitle: "Grupo de usuarios: {{ item.name }}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente",
  unassignAll: "Desasignar todos",
  unassignAllConfirmation: "Todos los usuarios desasignados correctamente."
};
var orgUserGroupAssignedUsers$c = {
  title: "Usuarios asignados",
  subtitle: "Grupo de usuarios: {{ item.name }}",
  assigned: "Usuario {{ item.name }} asignado correctamente",
  unassigned: "Usuario {{ item.name }} desasignado correctamente"
};
var orgUserGroupPermissions$c = {
  title: "Gestionar límites de compra",
  subtitle: "Límite: {{ item.name }}",
  assigned: "Límites de compra {{item.code}} asignados correctamente",
  unassigned: "Límites de compra {{item.code}} desasignados correctamente"
};
var orgUserGroupAssignedPermissions$c = {
  title: "Límites de compra asignados",
  subtitle: "Límite: {{ item.name }}",
  assigned: "Límites de compra {{item.code}} asignados correctamente",
  unassigned: "Límites de compra {{item.code}} desasignados correctamente"
};
var orgUser$c = {
  groupName: "Usuarios",
  header: "Todos los usuarios ({{count}})",
  disabled: "(desactivado)",
  uid: "Correo electrónico",
  active: "Estado",
  name: "Nombre",
  firstName: "Nombre",
  lastName: "Apellido",
  email: "Correo electrónico",
  orgUnit: "Unidad",
  unit: "Unidad",
  roles: "Roles",
  rights: "Derechos",
  title: "Título",
  hint: "Los usuarios son compradores, aprobadores, gerentes y administradores de su organización. Se asigna un rol a cada usuario para realizar o aprobar compras. Cada usuario pertenece a una unidad y tiene acceso a todas las unidades secundarias de su unidad principal.",
  unitApprover: "Aprobador de unidad",
  assignApprover: "Agregue al usuario a aprobadores para la unidad",
  actions: "",
  sortBy: "Clasificar por",
  sort: {
    byName: "Nombre",
    byUnit: "Unidad"
  },
  details: {
    title: "Detalles de usuario",
    subtitle: "Usuario: {{ item.name }}"
  },
  edit: {
    title: "Editar usuario",
    subtitle: "Usuario: {{ item.name }}"
  },
  create: {
    title: "Crear usuario",
    subtitle: ""
  },
  links: {
    password: "Cambiar contraseña",
    approvers: "Aprobadores",
    userGroup: "Grupos de usuarios",
    permission: "Límites de compra",
    rolesAndRights: "Roles y derechos"
  },
  messages: {
    deactivateTitle: "¿Desactivar este usuario?",
    deactivate: "Los usuarios desactivados no pueden iniciar sesión en la tienda online y realizar pedidos.",
    confirmEnabled: "Usuario {{ item.firstName }} {{ item.lastName }} borrado correctamente",
    confirmDisabled: "Usuario {{ item.firstName }} {{ item.lastName }} desactivado correctamente",
    update: "Usuario {{ item.firstName }} {{ item.lastName }} actualizado correctamente",
    create: "Usuario {{ item.firstName }} {{ item.lastName }} creado correctamente",
    updatePassword: "Contraseña del usuario {{ item.firstName }} {{ item.lastName }} actualizada correctamente"
  },
  info: {
    disabledEdit: "Active el usuario para permitir edición.",
    disabledEnable: "La unidad debe estar activada antes de poder activar este usuario."
  },
  approver: {
    link: "Aprobadores",
    header: "Aprobadores en {{code}}",
    assign: "Asignar aprobadores",
    assignHeader: "Asignar aprobadores en {{code}}",
    back: "Atrás",
    "new": "Aprobador nuevo",
    instructions: {
      check: "Para asignar un aprobador a este usuario, seleccione la casilla de verificación del usuario.",
      uncheck: "Para eliminar un aprobador, borre le casilla de verificación del usuario.",
      changes: "Los cambios se guardan automáticamente."
    }
  },
  userGroup: {
    link: "Grupos de usuarios",
    header: "Grupos de usuarios en {{code}}",
    assign: "Asignar grupos de usuarios",
    assignHeader: "Asignar grupos de usuarios en {{code}}",
    back: "Atrás",
    instructions: {
      check: "Para asignar un grupo de usuarios a este usuario, seleccione la casilla de verificación del usuario.",
      uncheck: "Para eliminar un grupo de usuarios, borre le casilla de verificación del usuario.",
      changes: "Los cambios se guardan automáticamente."
    }
  },
  permission: {
    link: "Límites de compra",
    header: "Límites de compra en {{code}}",
    assign: "Asignar límites de compra",
    assignHeader: "Asignar límites de compra en {{code}}",
    back: "Atrás",
    instructions: {
      check: "Para un límite de compra a este usuario, seleccionar su casilla de verificación.",
      uncheck: "Para desasignar un límite de compra, borre su casilla de verificación.",
      changes: "Los cambios se guardan automáticamente."
    },
    per: {
      "undefined": "",
      MONTH: "por mes",
      YEAR: "por año",
      WEEK: "por semana",
      QUARTER: "por trimestre"
    }
  },
  password: {
    title: "Cambiar contraseña",
    subtitle: "Usuario: {{ item.email }}",
    newPassword: "Nueva contraseña",
    confirmPassword: "Volver a escribir la nueva contraseña"
  },
  breadcrumbs: {
    list: "Todos los usuario",
    details: "{{name}}",
    userGroups: "Grupos de usuarios",
    approvers: "Aprobadores",
    permissions: "Límites de compra"
  }
};
var orgUserUserGroups$c = {
  title: "Gestionar grupos de usuarios",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Grupo de usuarios {{ item.name }} asignado correctamente",
  unassigned: "Grupo de usuarios {{ item.name }} desasignado correctamente"
};
var orgUserAssignedUserGroups$c = {
  title: "Grupos de usuarios asignados",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Grupo de usuarios {{ item.name }} asignado correctamente",
  unassigned: "Grupo de usuarios {{ item.name }} desasignado correctamente"
};
var orgUserApprovers$c = {
  title: "Gestionar aprobadores",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Aprobador {{ item.name }} asignado correctamente",
  unassigned: "Aprobador {{ item.name }} desasignado correctamente"
};
var orgUserAssignedApprovers$c = {
  title: "Aprobadores asignados",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Aprobador {{ item.name }} asignado correctamente",
  unassigned: "Aprobador {{ item.name }} desasignado correctamente"
};
var orgUserPermissions$c = {
  title: "Gestionar límites de compra",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Límite de compra {{item.code}} asignado correctamente",
  unassigned: "Límite de compra {{item.code}} desasignado correctamente"
};
var orgUserAssignedPermissions$c = {
  title: "Límites de compra asignados",
  subtitle: "Usuario: {{ item.name }}",
  assigned: "Límite de compra {{item.code}} asignado correctamente",
  unassigned: "Límite de compra {{item.code}} desasignado correctamente"
};
var orgPurchaseLimit$c = {
  groupName: "Límites de compra",
  header: "Todos los límites de compra ({{count}})",
  name: "Nombre",
  code: "Código",
  active: "Estado",
  limit: "Límite",
  orderApprovalPermissionType: "Tipo",
  threshold: "Umbral",
  periodRange: "Período",
  currency: "Moneda",
  orgUnit: "Unidad superior",
  unit: "Unidad superior",
  actions: "",
  hint: "Los límites de compra ayudar a controlar gastos al definir cuánto pueden gastar los compradores por pedido o por semana, mes, trimestre o año. Estos límites se asignan a usuarios o grupos de usuarios, pero también se pueden asignar a aprobadores, lo cual define cuánto pueden aprobar. Puede asignar límites de compra a varios usuarios a la vez con grupos de usuario.",
  details: {
    title: "Detalles de límite de compra",
    subtitle: "Límite de compra: {{ item.code }}"
  },
  edit: {
    title: "Editar límite de compra",
    subtitle: "Límites de compra: {{ item.code }}"
  },
  create: {
    title: "Crear límite de compra",
    subtitle: ""
  },
  sortBy: "Clasificar por",
  sort: {
    byName: "Nombre",
    byUnitName: "Unidad"
  },
  messages: {
    deactivateTitle: "¿Desactivar este límite de compra?",
    deactivate: "Los límites de compra desactivados ya no se pueden asignar a un usuario o grupo de usuarios. Las asignaciones actuales no tendrán efecto.",
    confirmEnabled: "Límite de compra {{item.code}} activado correctamente",
    confirmDisabled: "Límite de compra {{item.code}} desactivado correctamente",
    update: "Límite de compra {{item.code}} actualizado correctamente",
    create: "Límite de compra {{item.code}} creado correctamente"
  },
  info: {
    disabledEdit: "Active el límite de compra para permitir edición.",
    disabledEnable: "La unidad debe estar activada antes de poder activar este límite de compra."
  },
  per: {
    DAY: "por día",
    WEEK: "por semana",
    MONTH: "por mes",
    QUARTER: "por trimestre",
    YEAR: "por año"
  },
  breadcrumbs: {
    list: "Todos los límites de compra",
    details: "{{code}}"
  }
};
var organization$p = {
  organization: organization$o,
  orgCostCenter: orgCostCenter$c,
  orgCostCenterBudgets: orgCostCenterBudgets$c,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$c,
  orgBudget: orgBudget$c,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$c,
  orgUnit: orgUnit$c,
  orgUnitChildren: orgUnitChildren$c,
  orgUnitApprovers: orgUnitApprovers$c,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$c,
  orgUnitAssignedRoles: orgUnitAssignedRoles$c,
  orgUnitUsers: orgUnitUsers$c,
  orgUnitUserRoles: orgUnitUserRoles$c,
  orgUnitAssignedUsers: orgUnitAssignedUsers$c,
  orgUnitCostCenters: orgUnitCostCenters$c,
  orgUnitAddress: orgUnitAddress$c,
  orgUserGroup: orgUserGroup$c,
  orgUserGroupUsers: orgUserGroupUsers$c,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$c,
  orgUserGroupPermissions: orgUserGroupPermissions$c,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$c,
  orgUser: orgUser$c,
  orgUserUserGroups: orgUserUserGroups$c,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$c,
  orgUserApprovers: orgUserApprovers$c,
  orgUserAssignedApprovers: orgUserAssignedApprovers$c,
  orgUserPermissions: orgUserPermissions$c,
  orgUserAssignedPermissions: orgUserAssignedPermissions$c,
  orgPurchaseLimit: orgPurchaseLimit$c
};
var es_CO = {
  organization: organization$p
};
var organization$m = {
  enabled: "Actif",
  disabled: "Désactivé",
  enable: "Activer",
  disable: "Désactiver",
  name: "Nom",
  code: "Code",
  done: "Terminé",
  cancel: "Annuler",
  add: "Ajouter",
  manageUsers: "Gérer les utilisateurs",
  create: "Créer {{name}}",
  edit: "Modifier",
  save: "Sauvegarder {{name}}",
  "delete": "Supprimer",
  assign: "Gérer",
  active: "Actif",
  status: "Statut",
  details: "Détails",
  messages: {
    emptyList: "La liste est vide."
  },
  userRoles: {
    b2bcustomergroup: "Client",
    b2bapprovergroup: "Approbateur",
    b2bmanagergroup: "Gestionnaire",
    b2badmingroup: "Administrateur"
  },
  userRights: {
    unitorderviewergroup: "Afficher les commandes au niveau de l'unité"
  },
  breadcrumb: "Organisation",
  notification: {
    noSufficientPermissions: "Vous n'avez pas les autorisations suffisantes pour accéder à cette page.",
    notExist: "Cet élément n'existe pas.",
    disabled: "Vous ne pouvez pas modifier un élément désactivé."
  },
  confirmation: {
    cancel: "ANNULER",
    confirm: "CONFIRMER",
    disable: "DÉSACTIVER",
    "delete": "SUPPRIMER"
  },
  httpHandlers: {
    conflict: {
      budget: "Budget avec le code {{ code }} existe déjà.",
      costCenter: "Le centre de coûts avec le code {{ code }} existe déjà.",
      unit: "L'entité organisationnelle avec l'UID {{ code }} existe déjà.",
      user: "L'utilisateur avec l'e-mail {{ code }} existe déjà.",
      userGroup: "Le groupe d'utilisateurs avec l'ID {{ code }} existe déjà.",
      permission: "L'autorisation d'approbation avec le code {{ code }} existe déjà.",
      unknown: "Erreur de validation du serveur"
    }
  },
  information: "Plus d'informations concernant {{title}}"
};
var orgCostCenter$b = {
  groupName: "Centres de coûts",
  header: "Tous les centres de coûts ({{count}})",
  code: "Code",
  active: "Statut",
  name: "Nom",
  currency: "Devise",
  unit: "Unité parent",
  actions: "",
  sortBy: "Trier par",
  sort: {
    byName: "Nom",
    byUnitName: "Unité",
    byCode: "Code"
  },
  hint: "Toutes les commandes passées via le compte d'achat de votre organisation sont liées à un centre de coûts à des fins de suivi. Chaque unité peut avoir plusieurs centres de coûts. Pour limiter les dépenses, des budgets sont affectés aux centres de coûts. L'acheteur sélectionne un centre de coûts lors de la validation de sa commande.",
  disable: {
    confirm: "Désactiver"
  },
  messages: {
    deactivateTitle: "Désactiver ce centre de coûts ?",
    deactivate: "Les centres de coûts désactivés ne peuvent pas être utilisés pour passer de nouvelles commandes. Vérifiez que votre unité dispose d'au moins un centre de coûts. Les commandes existantes ne seront pas impactées.",
    confirmEnabled: "Le centre de coûts {{ item.name }} a été activé avec succès.",
    confirmDisabled: "Le centre de coûts {{ item.name }} a été désactivé avec succès.",
    update: "Le centre de coûts {{ item.name }} a été mis à jour avec succès.",
    create: "Le centre de coûts {{ item.name }} a été créé avec succès."
  },
  info: {
    disabledEdit: "Activez le centre de coûts pour autoriser la modification.",
    disabledEnable: "L'unité doit être activée pour que ce centre de coûts puisse être activé."
  },
  details: {
    title: "Détails du centre de coûts",
    subtitle: "Centre de coûts : {{ item.name }}"
  },
  edit: {
    title: "Modifier le centre de coûts",
    subtitle: "Centre de coûts : {{ item.name }}"
  },
  create: {
    title: "Créer un centre de coûts",
    subtitle: ""
  },
  budget: {
    link: "Budgets"
  },
  breadcrumbs: {
    list: "Tous les centres de coûts",
    details: "{{name}}",
    budgets: "Budgets"
  }
};
var orgCostCenterBudgets$b = {
  title: "Gérer les budgets",
  subtitle: "Centre de coûts : {{ item.name }}",
  assigned: "Le budget {{ item.name }} a été affecté avec succès.",
  unassigned: "Le budget {{ item.name }} a été désaffecté avec succès."
};
var orgCostCenterAssignedBudgets$b = {
  title: "Budgets affectés",
  subtitle: "Centre de coûts : {{ item.name }}",
  assigned: "Le budget {{ item.name }} a été affecté avec succès.",
  unassigned: "Le budget {{ item.name }} a été désaffecté avec succès."
};
var orgBudget$b = {
  groupName: "Budgets",
  header: "Tous les budgets ({{count}})",
  code: "Code",
  name: "Nom",
  active: "Statut",
  currency: "Devise",
  amount: "Montant",
  unit: "Unité",
  businessUnits: "Unité",
  dateRange: "Début - Fin",
  startDate: "Début",
  endDate: "Fin",
  actions: "",
  sortBy: "Trier par",
  sort: {
    byName: "Nom",
    byUnitName: "Unité",
    byCode: "Code",
    byValue: "Valeur"
  },
  hint: "Les budgets fixent des limites d'achat globales et sont affectés à des centres de coûts. Un acheteur sélectionne un centre de coûts lorsqu'il valide sa commande.",
  details: {
    title: "Détails du budget",
    subtitle: "Budget : {{ item.name }}"
  },
  edit: {
    title: "Modifier le budget",
    subtitle: "Budget : {{ item.name }}"
  },
  create: {
    title: "Créer un budget",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Désactiver ce budget ?",
    deactivate: "Les budgets désactivés ne s'appliquent plus aux centres de coûts auxquels ils sont affectés. Assurez-vous que le centre de coûts associé dispose d'au moins un budget.",
    confirmEnabled: "Le budget {{ item.name }} a été activé avec succès.",
    confirmDisabled: "Le budget {{ item.name }} a été désactivé avec succès.",
    update: "Le budget {{ item.name }} a été mis à jour avec succès.",
    create: "Le budget {{ item.name }} a été créé avec succès."
  },
  info: {
    disabledEdit: "Activez le budget pour autoriser la modification.",
    disabledEnable: "L'unité doit être activée pour que ce budget puisse être activé."
  },
  links: {
    costCenters: "Centres de coûts"
  },
  breadcrumbs: {
    list: "Tous les budgets",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$b = {
  title: "Centres de coûts",
  subtitle: "Budget : {{ item.name }}"
};
var orgUnit$b = {
  groupName: "Unités",
  header: "Toutes les unités ({{count}})",
  unit: "Unité",
  name: "Nom",
  uid: "ID",
  approvalProcess: "Processus d'approbation",
  parentUnit: "Unité parent",
  active: "Statut",
  hint: "Les unités représentent des départements, des magasins, des régions ou tout autre regroupement logique que vous jugez utile. Les centres de coûts et les adresses de livraison dont dispose un acheteur au moment de valider la commande dépendent de son unité. Les utilisateurs ont accès à toutes les unités enfant de leur unité principale.",
  details: {
    title: "Détails de l'unité",
    subtitle: "Unité : {{ item.name }}",
    hint: "Les unités représentent des départements, des magasins, des régions ou tout autre regroupement logique que vous jugez utile. La désactivation d'une unité entraîne la désactivation de tous les enfants de l'unité, y compris les unités enfant, les utilisateurs, les approbateurs et les centres de coûts. Les unités désactivées ne peuvent pas être modifiées."
  },
  edit: {
    title: "Modifier l'unité",
    subtitle: "Unité : {{ item.name }}"
  },
  create: {
    title: "Créer une unité",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Désactiver cette unité ?",
    deactivate: "La désactivation d'une unité a des répercussions importantes sur votre organisation commerciale. TOUTES les unités enfant, les utilisateurs, les budgets et les centres de coûts de l'unité seront également désactivés.",
    confirmEnabled: "L'unité {{ item.name }} a été activée avec succès.",
    confirmDisabled: "L'unité {{ item.name }} a été désactivée avec succès.",
    update: "L'unité {{ item.name }} a été mise à jour avec succès.",
    create: "L'unité {{ item.name }} a été créé avec succès."
  },
  info: {
    disabledEdit: "Activez l'unité pour autoriser la modification.",
    disabledEnable: "Le parent doit être activé pour que cette unité puisse être activée.",
    disabledDisable: "Impossible de désactiver l'unité racine"
  },
  links: {
    units: "Unités enfant",
    users: "Utilisateurs",
    approvers: "Approbateurs",
    shippingAddresses: "Adresses de livraison",
    costCenters: "Centres de coûts"
  },
  tree: {
    expandAll: "Développer tout",
    collapseAll: "Réduire tout",
    expand: "Développer",
    collapse: "Réduire",
    explore: "Explorer les sous-unités"
  },
  children: {
    create: {
      title: "Créer une unité enfant",
      subtitle: ""
    },
    messages: {
      create: "L'unité {{ item.name }} a été créé avec succès."
    }
  },
  costCenters: {
    create: {
      title: "Créer un centre de coûts",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Unité commerciale parent",
    create: "Créer une unité",
    parentOrgUnitNotes: "Cette unité est l'unité de premier niveau de votre organisation. Elle ne peut pas être affectée à une autre unité."
  },
  users: {
    header: "Utilisateurs dans {{code}}",
    changeUserRoles: "Modifier les rôles utilisateur",
    newUser: "Nouvel utilisateur"
  },
  assignRoles: {
    header: "Gérer les rôles dans {{code}}",
    instructions: {
      check: "Pour affecter un rôle à un utilisateur, cochez la case du rôle.",
      uncheck: "Pour retirer un rôle, décochez la case du rôle.",
      changes: "Les modifications sont sauvegardées automatiquement."
    }
  },
  approvers: {
    header: "Approbateurs dans {{code}}",
    assign: "Gérer les approbateurs",
    "new": "Nouvel approbateur"
  },
  assignApprovers: {
    header: "Gérer les approbateurs dans {{code}}",
    instructions: {
      check: "Pour affecter un approbateur à cette unité, cochez la case de l'utilisateur.",
      uncheck: "Pour retirer un approbateur, décochez la case de l'utilisateur.",
      changes: "Les modifications sont sauvegardées automatiquement."
    },
    hint: "Les utilisateurs figurant dans la liste des approbateurs se voient attribuer des privilèges d'approbation pour les acheteurs de cette unité et des unités enfant. Notez qu'un utilisateur qui a le rôle d'approbateur est distinct d'un approbateur qui figure dans la liste des approbateurs. Si un approbateur n'existe pas pour une unité, ou si les approbateurs n'ont pas les privilèges d'approbation des achats suffisants, un approbateur plus haut dans la hiérarchie de l'unité est trouvé, jusqu'à ce qu'une administration soit choisie."
  },
  breadcrumbs: {
    list: "Toutes les unités",
    details: "{{name}}",
    children: "Unités enfant",
    users: "Utilisateurs",
    approvers: "Approbateurs",
    addresses: "Adresses de livraison",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Centres de coûts"
  }
};
var orgUnitChildren$b = {
  title: "Unités enfant",
  subtitle: "Unité : {{item.name}}",
  info: {
    disabledCreate: "Impossible de créer une unité enfant pour une unité désactivée"
  },
  hint: `Les unités représentent des départements, des magasins, des régions ou tout autre regroupement logique que vous jugez utile. Les utilisateurs "héritent" des unités enfant, ce qui signifie que les acheteurs ont accès aux centres de coûts et aux adresses de livraison des unités enfant lorsqu'ils valident la commande.`
};
var orgUnitApprovers$b = {
  title: "Gérer les approbateurs",
  subtitle: "Unité : {{item.name}}",
  assigned: "L'utilisateur {{item.name}} a été affecté avec succès",
  unassigned: "L'utilisateur {{item.name}} a été désaffecté avec succès"
};
var orgUnitAssignedApprovers$b = {
  title: "Approbateurs affectés",
  subtitle: "Unité : {{item.name}}",
  assigned: "L'utilisateur {{item.name}} a été affecté avec succès",
  unassigned: "L'utilisateur {{item.name}} a été désaffecté avec succès",
  hint: "Les utilisateurs figurant dans la liste des approbateurs se voient attribuer des privilèges d'approbation pour les acheteurs de cette unité et des unités enfant. Notez qu'un utilisateur qui a le rôle d'approbateur est distinct d'un approbateur qui figure dans la liste des approbateurs. Si un approbateur n'existe pas pour une unité, ou si les approbateurs n'ont pas les privilèges d'approbation des achats suffisants, un approbateur plus haut dans la hiérarchie de l'unité est trouvé, jusqu'à ce qu'une administration soit choisie."
};
var orgUnitAssignedRoles$b = {
  header: "Gérer les rôles dans {{code}}",
  name: "Nom",
  email: "E-mail",
  roles: "Rôles",
  roleCustomer: "Client",
  roleApprover: "Approbateur",
  roleManager: "Gestionnaire",
  roleAdministrator: "Administrateur"
};
var orgUnitUsers$b = {
  title: "Utilisateurs affectés",
  subtitle: "Unité : {{item.name}}",
  info: {
    disabledCreate: "Impossible de créer un utilisateur pour une unité désactivée"
  },
  hint: `Les utilisateurs sont les acheteurs, approbateurs, gestionnaires et administrateurs de votre organisation. Chaque utilisateur se voit affecter un rôle pour réaliser ou approuver des achats. Les utilisateurs "héritent" des unités enfant, ce qui signifie que les acheteurs ont accès aux centres de coûts et aux adresses de livraison des unités enfant lorsqu'ils valident la commande.`
};
var orgUnitUserRoles$b = {
  title: "Rôles utilisateur et droits",
  subtitle: "Utilisateur : {{item.name}}",
  messages: {
    rolesUpdated: "Rôles mis à jour avec succès pour {{item.name}}"
  }
};
var orgUnitAssignedUsers$b = {
  title: "Utilisateurs affectés",
  subtitle: "Unité : {{item.name}}"
};
var orgUnitCostCenters$b = {
  title: "Centres de coûts affectés",
  subtitle: "Unité : {{item.name}}",
  info: {
    disabledCreate: "Impossible de créer un centre de coûts pour une unité désactivée"
  },
  hint: `Toutes les commandes passées via le compte d'achat de votre organisation sont liées à un centre de coûts à des fins de suivi. L'acheteur sélectionne un centre de coûts lorsqu'il valide la commande en utilisant la méthode d'achat "Compte". Chaque unité peut avoir plusieurs centres de coûts, mais un centre de coûts ne peut être affecté qu'à une seule unité. Pour définir les limites de dépenses ultimes, des budgets sont affectés aux centres de coûts. `
};
var orgUnitAddress$b = {
  title: "Adresses de livraison",
  subtitle: "Unité : {{item.name}}",
  country: "Pays/Région",
  titles: "Civilité",
  firstName: "Prénom",
  lastName: "Nom",
  formattedAddress: "Adresse",
  address1: "Adresse",
  address2: "Deuxième adresse (facultatif)",
  city: "Ville",
  state: "État",
  zipCode: "Code postal",
  phoneNumber: "Numéro de téléphone (facultatif)",
  streetAddress: "Adresse postale",
  aptSuite: "Numéro d’appartement",
  selectOne: "Sélectionner un…",
  hint: `Lorsqu'un acheteur valide la commande en utilisant la méthode d'achat "Compte", il doit choisir un centre de coûts. Les adresses de livraison disponibles pour l'acheteur dépendent de l'unité du centre de coûts choisi.`,
  details: {
    title: "Détails de l'adresse",
    subtitle: "Unité : {{item.name}}"
  },
  edit: {
    title: "Modifier l'adresse"
  },
  create: {
    title: "Créer une adresse"
  },
  form: {
    subtitle: "Unité : {{item.name}}"
  },
  messages: {
    create: "Adresse {{ item.firstName }} {{ item.lastName }} créée avec succès",
    update: "Adresse {{ item.firstName }} {{ item.lastName }} mise à jour avec succès",
    "delete": "Impossible de rétablir l'adresse. Les commandes existantes ne sont pas impactées.",
    deleteTitle: "Supprimer cette adresse ?",
    deleted: "Adresse {{ item.firstName }} {{ item.lastName }} supprimée avec succès"
  }
};
var orgUserGroup$b = {
  groupName: "Groupes d'utilisateurs",
  header: "Tous les groupes d'utilisateurs ({{count}})",
  disabled: "(désactivé)",
  uid: "Code",
  name: "Nom",
  unit: "Unité",
  orgUnit: "Unité",
  actions: "",
  sortBy: "Trier par",
  sort: {
    byName: "Nom",
    byUnitName: "Unité",
    byGroupID: "Groupe"
  },
  hint: "Les groupes d'utilisateurs permettent de regrouper des utilisateurs dans un même groupe, afin d'affecter des limites d'achat à plusieurs utilisateurs à la fois.",
  details: {
    title: "Détails du groupe d'utilisateurs",
    subtitle: "Groupe d'utilisateurs : {{ item.name }}"
  },
  edit: {
    title: "Modifier le groupe d'utilisateurs",
    subtitle: "Groupe d'utilisateurs: {{ item.name }}"
  },
  create: {
    title: "Créer un groupe d'utilisateurs",
    subtitle: ""
  },
  links: {
    user: "Utilisateurs",
    permission: "Limites d'achat"
  },
  messages: {
    update: "Groupe d'utilisateurs {{ item.name }} mis à jour avec succès",
    create: "Groupe d'utilisateurs {{ item.name }} créé avec succès",
    deleteTitle: "Supprimer ce groupe d'utilisateurs ?",
    "delete": "Les utilisateurs de ce groupe ne sont pas impactés lorsque le groupe d'utilisateurs est supprimé.",
    deleted: "Groupe d'utilisateurs {{ item.name }} supprimé avec succès"
  },
  breadcrumbs: {
    list: "Tous les groupes d'utilisateurs",
    details: "{{name}}",
    users: "Utilisateurs",
    permissions: "Limites d'achat"
  }
};
var orgUserGroupUsers$b = {
  title: "Gérer les utilisateurs",
  subtitle: "Groupe d'utilisateurs : {{ item.name }}",
  assigned: "L'utilisateur {{item.name}} a été affecté avec succès.",
  unassigned: "L'utilisateur {{item.name}} a été désaffecté avec succès.",
  unassignAll: "Désaffecter tous",
  unassignAllConfirmation: "Tous les utilisateurs ont été désaffectés avec succès."
};
var orgUserGroupAssignedUsers$b = {
  title: "Utilisateurs affectés",
  subtitle: "Groupe d'utilisateurs : {{ item.name }}",
  assigned: "L'utilisateur {{item.name}} a été affecté avec succès.",
  unassigned: "L'utilisateur {{item.name}} a été désaffecté avec succès."
};
var orgUserGroupPermissions$b = {
  title: "Gérer les limites d'achat",
  subtitle: "Limite : {{ item.name }}",
  assigned: "Les limites d'achat {{item.code}} ont été affectées avec succès.",
  unassigned: "Les limites d'achat {{item.code}} ont été désaffectées avec succès."
};
var orgUserGroupAssignedPermissions$b = {
  title: "Limites d'achat affectées",
  subtitle: "Limite : {{ item.name }}",
  assigned: "Les limites d'achat {{item.code}} ont été affectées avec succès.",
  unassigned: "Les limites d'achat {{item.code}} ont été désaffectées avec succès."
};
var orgUser$b = {
  groupName: "Utilisateurs",
  header: "Tous les utilisateurs ({{count}})",
  disabled: "(désactivé)",
  uid: "E-mail",
  active: "Statut",
  name: "Nom",
  firstName: "Prénom",
  lastName: "Nom",
  email: "E-mail",
  orgUnit: "Unité",
  unit: "Unité",
  roles: "Rôles",
  rights: "Droits",
  title: "Titre",
  hint: "Les utilisateurs sont les acheteurs, approbateurs, gestionnaires et administrateurs de votre organisation. Chaque utilisateur se voit affecter un rôle pour réaliser ou approuver des achats. Chaque utilisateur appartient à une unité et a accès à toutes les unités enfant de son unité principale.",
  unitApprover: "Approbateur d'unité",
  assignApprover: "Ajouter l'utilisateur aux approbateurs de l'unité",
  actions: "",
  sortBy: "Trier par",
  sort: {
    byName: "Nom",
    byUnit: "Unité"
  },
  details: {
    title: "Détails de l'utilisateur",
    subtitle: "Utilisateur : {{ item.name }}"
  },
  edit: {
    title: "Modifier l'utilisateur",
    subtitle: "Utilisateur : {{ item.name }}"
  },
  create: {
    title: "Créer un utilisateur",
    subtitle: ""
  },
  links: {
    password: "Changer le mot de passe",
    approvers: "Approbateurs",
    userGroup: "Groupes d'utilisateurs",
    permission: "Limites d'achat",
    rolesAndRights: "Rôles et droits"
  },
  messages: {
    deactivateTitle: "Désactiver cet utilisateur ?",
    deactivate: "Les utilisateurs désactivés ne peuvent pas se connecter à la vitrine et passer commande.",
    confirmEnabled: "Utilisateur {{ item.firstName }} {{ item.lastName }} activé avec succès",
    confirmDisabled: "Utilisateur {{ item.firstName }} {{ item.lastName }} désactivé avec succès",
    update: "Utilisateur {{ item.firstName }} {{ item.lastName }} mis à jour avec succès",
    create: "Utilisateur {{ item.firstName }} {{ item.lastName }} créé avec succès",
    updatePassword: "Mot de passe de l'utilisateur {{item.firstName}} {{item.lastName}} mis à jour avec succès"
  },
  info: {
    disabledEdit: "Activez l'utilisateur pour autoriser la modification.",
    disabledEnable: "L'unité doit être activée pour que cet utilisateur puisse être activé."
  },
  approver: {
    link: "Approbateurs",
    header: "Approbateurs dans {{code}}",
    assign: "Affecter des approbateurs",
    assignHeader: "Affecter des approbateurs dans {{code}}",
    back: "Retour",
    "new": "Nouvel approbateur",
    instructions: {
      check: "Pour affecter un approbateur à cet utilisateur, cochez la case de l'utilisateur.",
      uncheck: "Pour retirer un approbateur, décochez la case de l'utilisateur.",
      changes: "Les modifications sont sauvegardées automatiquement."
    }
  },
  userGroup: {
    link: "Groupes d'utilisateurs",
    header: "Groupes d'utilisateurs dans {{code}}",
    assign: "Affecter des groupes d'utilisateurs",
    assignHeader: "Affecter des groupes d'utilisateurs dans {{code}}",
    back: "Retour",
    instructions: {
      check: "Pour affecter un groupe d'utilisateurs à cet utilisateur, cochez la case de l'utilisateur.",
      uncheck: "Pour retirer un groupe d'utilisateurs, décochez la case de l'utilisateur.",
      changes: "Les modifications sont sauvegardées automatiquement."
    }
  },
  permission: {
    link: "Limites d'achat",
    header: "Limites d'achat dans {{code}}",
    assign: "Affecter des limites d'achat",
    assignHeader: "Affecter des limites d'achat dans {{code}}",
    back: "Retour",
    instructions: {
      check: "Pour affecter une limite d'achat à cet utilisateur, cochez sa case.",
      uncheck: "Pour désaffecter une limite d'achat, décochez sa case.",
      changes: "Les modifications sont sauvegardées automatiquement."
    },
    per: {
      "undefined": "",
      MONTH: "par mois",
      YEAR: "par an",
      WEEK: "par semaine",
      QUARTER: "par trimestre"
    }
  },
  password: {
    title: "Changer le mot de passe",
    subtitle: "Utilisateur : {{ item.email }}",
    newPassword: "Nouveau mot de passe",
    confirmPassword: "Confirmez le nouveau mot de passe"
  },
  breadcrumbs: {
    list: "Tous les utilisateurs",
    details: "{{name}}",
    userGroups: "Groupes d'utilisateurs",
    approvers: "Approbateurs",
    permissions: "Limites d'achat"
  }
};
var orgUserUserGroups$b = {
  title: "Gérer les groupes d'utilisateurs",
  subtitle: "Utilisateur : {{ item.name }}",
  assigned: "Le groupe d'utilisateurs {{item.name}} a été affecté avec succès.",
  unassigned: "Le groupe d'utilisateurs {{item.name}} a été désaffecté avec succès."
};
var orgUserAssignedUserGroups$b = {
  title: "Groupes d'utilisateurs affectés",
  subtitle: "Utilisateur : {{ item.name }}",
  assigned: "Le groupe d'utilisateurs {{item.name}} a été affecté avec succès.",
  unassigned: "Le groupe d'utilisateurs {{item.name}} a été désaffecté avec succès."
};
var orgUserApprovers$b = {
  title: "Gérer les approbateurs",
  subtitle: "Utilisateur : {{ item.name }}",
  assigned: "L'approbateur {{ item.name }} a été affecté avec succès.",
  unassigned: "L'approbateur {{ item.name }} a été désaffecté avec succès."
};
var orgUserAssignedApprovers$b = {
  title: "Approbateurs affectés",
  subtitle: "Utilisateur : {{ item.name }}",
  assigned: "L'approbateur {{ item.name }} a été affecté avec succès.",
  unassigned: "L'approbateur {{ item.name }} a été désaffecté avec succès."
};
var orgUserPermissions$b = {
  title: "Gérer les limites d'achat",
  subtitle: "Utilisateur : {{ item.name }}",
  assigned: "La limite d'achat {{item.code}} a été affectée avec succès.",
  unassigned: "La limite d'achat {{item.code}} a été désaffectée avec succès."
};
var orgUserAssignedPermissions$b = {
  title: "Limites d'achat affectées",
  subtitle: "Utilisateur : {{ item.name }}",
  assigned: "La limite d'achat {{item.code}} a été affectée avec succès.",
  unassigned: "La limite d'achat {{item.code}} a été désaffectée avec succès."
};
var orgPurchaseLimit$b = {
  groupName: "Limites d'achat",
  header: "Toutes les limites d'achat ({{count}})",
  name: "Nom",
  code: "Code",
  active: "Statut",
  limit: "Limite",
  orderApprovalPermissionType: "Type",
  threshold: "Seuil",
  periodRange: "Période",
  currency: "Devise",
  orgUnit: "Unité parent",
  unit: "Unité parent",
  actions: "",
  hint: "Les limites d'achat permettent de contrôler les dépenses en définissant le montant que les acheteurs peuvent dépenser par commande ou par semaine, mois, trimestre ou année. Les limites d'achat sont affectées à des utilisateurs ou à des groupes d'utilisateurs. Les limites d'achat sont également affectées à des approbateurs et définissent le montant qu'ils sont autorisés à approuver. Les groupes d'utilisateurs vous permettent d'affecter des limites d'achat à plusieurs utilisateurs à la fois.",
  details: {
    title: "Détails de la limite d'achat",
    subtitle: "Limite d'achat : {{ item.code }}"
  },
  edit: {
    title: "Modifier la limite d'achat",
    subtitle: "Limites d'achat : {{ item.code }}"
  },
  create: {
    title: "Créer une limite d'achat",
    subtitle: ""
  },
  sortBy: "Trier par",
  sort: {
    byName: "Nom",
    byUnitName: "Unité"
  },
  messages: {
    deactivateTitle: "Désactiver cette limite d'achat ?",
    deactivate: "Les limites d'achat désactivées ne peuvent plus être affectées à un utilisateur ou à un groupe d'utilisateurs. Les affectations en cours n'auront aucun effet.",
    confirmEnabled: "La limite d'achat {{item.code}} a été activée avec succès.",
    confirmDisabled: "La limite d'achat {{item.code}} a été désactivée avec succès.",
    update: "La limite d'achat {{item.code}} a été mise à jour avec succès.",
    create: "La limite d'achat {{item.code}} a été créée avec succès."
  },
  info: {
    disabledEdit: "Activez la limite d'achat pour autoriser la modification.",
    disabledEnable: "L'unité doit être activée pour que cette limite d'achat puisse être activée."
  },
  per: {
    DAY: "par jour",
    WEEK: "par semaine",
    MONTH: "par mois",
    QUARTER: "par trimestre",
    YEAR: "par an"
  },
  breadcrumbs: {
    list: "Toutes les limites d'achat",
    details: "{{code}}"
  }
};
var organization$n = {
  organization: organization$m,
  orgCostCenter: orgCostCenter$b,
  orgCostCenterBudgets: orgCostCenterBudgets$b,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$b,
  orgBudget: orgBudget$b,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$b,
  orgUnit: orgUnit$b,
  orgUnitChildren: orgUnitChildren$b,
  orgUnitApprovers: orgUnitApprovers$b,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$b,
  orgUnitAssignedRoles: orgUnitAssignedRoles$b,
  orgUnitUsers: orgUnitUsers$b,
  orgUnitUserRoles: orgUnitUserRoles$b,
  orgUnitAssignedUsers: orgUnitAssignedUsers$b,
  orgUnitCostCenters: orgUnitCostCenters$b,
  orgUnitAddress: orgUnitAddress$b,
  orgUserGroup: orgUserGroup$b,
  orgUserGroupUsers: orgUserGroupUsers$b,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$b,
  orgUserGroupPermissions: orgUserGroupPermissions$b,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$b,
  orgUser: orgUser$b,
  orgUserUserGroups: orgUserUserGroups$b,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$b,
  orgUserApprovers: orgUserApprovers$b,
  orgUserAssignedApprovers: orgUserAssignedApprovers$b,
  orgUserPermissions: orgUserPermissions$b,
  orgUserAssignedPermissions: orgUserAssignedPermissions$b,
  orgPurchaseLimit: orgPurchaseLimit$b
};
var fr = {
  organization: organization$n
};
var organization$k = {
  enabled: "सक्रिय",
  disabled: "अक्षम किया गया",
  enable: "सक्षम करें",
  disable: "अक्षम करें",
  name: "नाम",
  code: "कोड",
  done: "समाप्त",
  cancel: "रद्द करें",
  add: "जोड़ें",
  manageUsers: "उपयोगकर्ताओं का प्रबंध करें",
  create: "{{name}} बनाएं",
  edit: "संपादित करें",
  save: "{{name}} सहेजें",
  "delete": "हटाएं",
  assign: "प्रबंधित करें",
  active: "सक्रिय",
  status: "स्थिति",
  details: "विवरण",
  messages: {
    emptyList: "सूची रिक्त है."
  },
  userRoles: {
    b2bcustomergroup: "ग्राहक",
    b2bapprovergroup: "अनुमोदक",
    b2bmanagergroup: "प्रबंधक",
    b2badmingroup: "व्यवस्थापक"
  },
  userRights: {
    unitorderviewergroup: "इकाई-स्तर के ऑर्डर देखें"
  },
  breadcrumb: "संगठन",
  notification: {
    noSufficientPermissions: "इस पृष्ठ पर पहुंच के लिए पर्याप्त अनुमति नहीं है.",
    notExist: "यह आइटम मौजूद नहीं है",
    disabled: "आप अक्षम आइटम को संपादित नहीं कर सकते"
  },
  confirmation: {
    cancel: "रद्द करें",
    confirm: "पुष्टि करें",
    disable: "अक्षम करें",
    "delete": "हटाएं"
  },
  httpHandlers: {
    conflict: {
      budget: "कोड {{ code }} सहित बजट पहले से मौजूद है.",
      costCenter: "कोड {{ code }} सहित लागत केंद्र पहले से मौजूद है.",
      unit: "uid {{ code }} सहित संगठन इकाई पहले से मौजूद है.",
      user: "ई-मेल {{ code }} सहित उपयोगकर्ता पहले से मौजूद है",
      userGroup: " id {{ code }} सहित उपयोगकर्ता समूह पहले से मौजूद है",
      permission: "कोड {{ code }} सहित अनुमोदन अनुमति पहले से मौजूद है.",
      unknown: "सर्वर सत्याप त्रुटि."
    }
  },
  information: "{{title}} के बारे में अधिक जानकारी"
};
var orgCostCenter$a = {
  groupName: "लागत केंद्र",
  header: "सभी लागत केंद्र ({{count}})",
  code: "कोड",
  active: "स्थिति",
  name: "नाम",
  currency: "मुद्रा",
  unit: "पेरेंट इकाई",
  actions: "",
  sortBy: "इसके द्वारा क्रमित",
  sort: {
    byName: "नाम",
    byUnitName: "इकाई",
    byCode: "कोड"
  },
  hint: "आपके संगठन द्वारा दिए गए सभी ऑर्डर ट्रैकिंग के लिए लागत केंद्र से लिंक किए गए हैं. हर इकाई के एकाधिक लागत केंद्र हो सकते हैं. खर्च सीमित करने के लिए लागत केंद्रों को बजट असाइन किया गया है. चेकआउट करते समय क्रेता लागत केंद्र चुनता है.",
  disable: {
    confirm: "अक्षम करें"
  },
  messages: {
    deactivateTitle: "यह लागत केंद्र अक्षम करें?",
    deactivate: "अक्षम किए गए लागत केंद्रों का नए ऑर्डर देने के लिए उपयोग नहीं किया जा सकता. आपकी इकाई के पास कम से कम एक लागत केंद्र को सुनिश्चित करें. मौजूदा ऑर्डर प्रभावित नहीं होंगे.",
    confirmEnabled: "लागत केंद्र {{ item.name }} सफलतापूर्वक सक्षम किया गया",
    confirmDisabled: "लागत केंद्र {{ item.name }} सफलतापूर्वक अक्षम किया गया",
    update: "लागत केंद्र {{ item.name }} सफलतापूर्वक अपडेट किया गया",
    create: "लागत केंद्र {{ item.name }} सफलतापूर्वक बनाया गया"
  },
  info: {
    disabledEdit: "संपादन की अनुमति के लिए लागत केंद्र सक्षम करें.",
    disabledEnable: "इस लागत केंद्र को सक्षम करने से पहले इकाई को सक्षम करना चाहिए."
  },
  details: {
    title: "लागत केंद्र विवरण",
    subtitle: "लागत केंद्रः {{ item.name }}"
  },
  edit: {
    title: "लागत केंद्र संपादित करें",
    subtitle: "लागत केंद्रः {{ item.name }}"
  },
  create: {
    title: "लागत केंद्र बनाएं",
    subtitle: ""
  },
  budget: {
    link: "बजट"
  },
  breadcrumbs: {
    list: "सभी लागत केंद्र",
    details: "{{name}}",
    budgets: "बजट"
  }
};
var orgCostCenterBudgets$a = {
  title: "बजट प्रबंधित करें",
  subtitle: "लागत केंद्रः {{ item.name }}",
  assigned: "बजट {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "बजट {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgCostCenterAssignedBudgets$a = {
  title: "बजट असाइन करें",
  subtitle: "लागत केंद्रः {{ item.name }}",
  assigned: "बजट {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "बजट {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgBudget$a = {
  groupName: "बजट",
  header: "सभी बजट ({{count}})",
  code: "कोड",
  name: "नाम",
  active: "स्थिति",
  currency: "मुद्रा",
  amount: "राशि",
  unit: "इकाई",
  businessUnits: "इकाई",
  dateRange: "प्रारंभ - समाप्ति",
  startDate: "प्रारंभ करें",
  endDate: "समाप्त करें",
  actions: "",
  sortBy: "इसके द्वारा क्रमित",
  sort: {
    byName: "नाम",
    byUnitName: "इकाई",
    byCode: "कोड",
    byValue: "मान"
  },
  hint: "बजट सकल क्रय सीमा सेट करते हैं और लागत केंद्रों को असाइन होते हैं. चेकआउट करते समय क्रेता लागत केंद्र चुनता है.",
  details: {
    title: "बजट विवरण",
    subtitle: "बजटः {{ item.name }}"
  },
  edit: {
    title: "बजट संपादित करें",
    subtitle: "बजटः {{ item.name }}"
  },
  create: {
    title: "बजट बनाएँ",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "इस बजट को अक्षम करें?",
    deactivate: "अक्षम बजट अब उन लागत केंद्रों पर लागू नहीं होंगे जिनके लिए उन्हें असाइन किया गया है. संबंधित लागत केंद्र के पास कम से कम एक बजट होना सुनिश्चित करें.",
    confirmEnabled: "बजट {{ item.name }} सफलतापूर्वक सक्षम किया गया",
    confirmDisabled: "बजट {{ item.name }} सफलतापूर्वक अक्षम किया गया",
    update: "बजट {{ item.name }} सफलतापूर्वक अपडेट किया गया",
    create: "बजट {{ item.name }} सफलतापूर्वक बनाया गया"
  },
  info: {
    disabledEdit: "संपादन अनुमत करने के लिए बजट सक्षम करें.",
    disabledEnable: "इस लागत केंद्र को सक्षम करने से पहले इकाई को सक्षम करना चाहिए."
  },
  links: {
    costCenters: "लागत केंद्र"
  },
  breadcrumbs: {
    list: "सभी बजट",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$a = {
  title: "लागत केंद्र",
  subtitle: "बजटः {{ item.name }}"
};
var orgUnit$a = {
  groupName: "इकाईयां",
  header: "सभी इकाईयां ({{count}})",
  unit: "इकाई",
  name: "नाम",
  uid: "ID",
  approvalProcess: "अनुमोदन प्रक्रिया",
  parentUnit: "पेरेंट इकाई",
  active: "स्थिति",
  hint: "इकाईयां विभाग, स्टोर, क्षेत्र, या कोई अन्य तार्किक समूहीकरण का प्रतिनिधित्व करती हैं जो आपके लिए अर्थपूर्ण हो. चेकआउट करते समय क्रेता के लिए लागत केंद्र और वितरण का पता उपलब्ध होता है, जो आपकी इकाई पर आधारित है. उपयोगकर्ताओं को अपनी प्राथमिक इकाई की सभी चाइल्ड इकाईयों में पहुंच प्राप्त है.",
  details: {
    title: "इकाई विवरण",
    subtitle: "इकाईः {{ item.name }}",
    hint: "इकाईयां विभाग, स्टोर, क्षेत्र या किसी अन्य तार्किक समूह का प्रतिनिधित्व करती हैं जो आपके लिए अर्थपूर्ण हो. इकाई अक्षम करने से इकाई की सभी चिल्ड्रन अक्षम होते हैं, जिसमें चाइल्ड इकाईयां, उपयोगकर्ता, अनुमोदक और लागत केंद्र शामिल हैं. अक्षम इकाईयां संपादित नहीं की जा सकती."
  },
  edit: {
    title: "इकाई संपादित करें",
    subtitle: "इकाईः {{ item.name }}"
  },
  create: {
    title: "इकाई बनाएं",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "इस इकाई को अक्षम करें?",
    deactivate: "इकाई को अक्षम करने से आपके वाणिज्यिक संगठन पर बहुत बड़ा प्रभाव होगा. सभी इकाईयों की चाइल्ड इकाईयां, उपयोगकर्ता, बजट, और लागत केंद्र भी अक्षम होंगे.",
    confirmEnabled: "इकाई {{ item.name }} सफलतापूर्वक सक्षम किया गया",
    confirmDisabled: "इकाई {{ item.name }} सफलतापूर्वक अक्षम किया गया",
    update: "इकाई {{ item.name }} सफलतापूर्वक अपडेट किया गया",
    create: "इकाई {{ item.name }} सफलतापूर्वक बनाई गई"
  },
  info: {
    disabledEdit: "संपादन अनुमत करने के लिए इकाई सक्षम करें.",
    disabledEnable: "इस इकाई को सक्षम करने से पहले पेरेंट को सक्षम किया जाना चाहिए.",
    disabledDisable: "मूल इकाई अक्षम नहीं की जा सकती."
  },
  links: {
    units: "चाइल्ड इकाइयां",
    users: "उपयोगकर्ता",
    approvers: "अनुमोदक",
    shippingAddresses: "वितरण का पता",
    costCenters: "लागत केंद्र"
  },
  tree: {
    expandAll: "सभी विस्तारित करें",
    collapseAll: "सभी को संकुचित करें",
    expand: "विस्तृत करें",
    collapse: "संकुचित करें",
    explore: "उप-इकाईयां एक्सप्लोर करें"
  },
  children: {
    create: {
      title: "चाइल्ड इकाई बनाएं",
      subtitle: ""
    },
    messages: {
      create: "इकाई {{ item.name }} सफलतापूर्वक बनाई गई"
    }
  },
  costCenters: {
    create: {
      title: "लागत केंद्र बनाएं",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "पैरेंट व्यावसायिक इकाई ",
    create: "इकाई बनाएं",
    parentOrgUnitNotes: "यह इकाई आपके संगठन के लिए शीर्ष-स्तर की इकाई है. यह अन्य इकाई को असाइन नहीं की जा सकती."
  },
  users: {
    header: "{{code}} में उपयोगकर्ता",
    changeUserRoles: "उपयोगकर्ता की भूमिकाएं बदलें",
    newUser: "नया उपयोगकर्ता"
  },
  assignRoles: {
    header: "{{code}} में भूमिकाएं प्रबंधित करें",
    instructions: {
      check: "उपयोगकर्ता को भूमिका असाइन करने के लिए, भूमिका का चेकबॉक्स चुनें.",
      uncheck: "भूमिका निकालने के लिए, भूमिका का चेकबॉक्स साफ करें.",
      changes: "सभी परिवर्तन स्वचालित रूप से सहेजे गए."
    }
  },
  approvers: {
    header: "{{code}} में अनुमोदक",
    assign: "अनुमोदक प्रबंधित करें",
    "new": "नया अनुमोदक"
  },
  assignApprovers: {
    header: "{{code}} में अनुमोदक प्रबंधित करें",
    instructions: {
      check: "इस इकाई को अनुमोदक असाइन करने के लिए, उपयोगकर्ता का चेकबॉक्स चुनें.",
      uncheck: "अनुमोदक को निकालने के लिए, उपयोगकर्ता का चेकबॉक्स साफ करें.",
      changes: "परिवर्तन स्वचालित रूप से सहेजे गए."
    },
    hint: "अनुमोदक सूची के अंतर्गत प्रदर्शित उपयोगकर्ताओं को इस इकाई और चाइल्ड इकाई के क्रेताओं के लिए विशेषाधिकार दिये जाते हैं. ध्यान रखें कि जिस उपयोगकर्ता के पास अनुमोदक की भूमिका है वह उस अनुमोदक से अलग है जो अनुमोदक सूची के अंतर्गत दिखाई देते हैं. यदि कोई अनुमोदक किसी इकाई के लिए मौजूद नहीं है, या अनुमोदक के पास पर्याप्त अनुमोदन क्रय विशेषाधिकार नहीं है, तब इकाई पदानुक्रम में ऊपर एक अनुमोदक मिलता है, जब तक कि प्रशासन का चयन नहीं हो जाता."
  },
  breadcrumbs: {
    list: "सभी इकाईयां",
    details: "{{name}}",
    children: "चाइल्ड इकाईयां",
    users: "उपयोगकर्ता",
    approvers: "अनुमोदक",
    addresses: "वितरण का पता",
    addressDetails: "{{formattedAddress}}",
    costCenters: "लागत केंद्र"
  }
};
var orgUnitChildren$a = {
  title: "चाइल्ड इकाईयां",
  subtitle: "इकाईः {{ item.name }}",
  info: {
    disabledCreate: "अक्षम इकाई के लिए चाइल्ड इकाई हीं बाई जा सकती."
  },
  hint: 'इकाईयां विभाग, स्टोर, क्षेत्र, या कोई अन्य तार्किक समूहीकरण का प्रतिनिधित्व करती हैं जो आपके लिए अर्थपूर्ण हो. उपयोगकर्ता को चाइल्ड इकाईयां "विरासत" में मिलती हैं, अर्थात चेकआउट करते समय क्रेता की चाइल्ड इकाई के लागत केंद्र, वितरण पते तक पहुंच होती है.'
};
var orgUnitApprovers$a = {
  title: "अनुमोदक प्रबंधित करें",
  subtitle: "इकाईः {{ item.name }}",
  assigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgUnitAssignedApprovers$a = {
  title: "असाइन किया गया अनुमोदक",
  subtitle: "इकाईः {{ item.name }}",
  assigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक अनअसाइन किया गया",
  hint: "अनुमोदक सूची के अंतर्गत प्रदर्शित उपयोगकर्ताओं को इस इकाई और चाइल्ड इकाई के क्रेताओं के लिए विशेषाधिकार दिये जाते हैं. ध्यान रखें कि जिस उपयोगकर्ता के पास अनुमोदक की भूमिका है वह उस अनुमोदक से अलग है जो अनुमोदक सूची के अंतर्गत दिखाई देते हैं. यदि कोई अनुमोदक किसी इकाई के लिए मौजूद नहीं है, या अनुमोदक के पास पर्याप्त अनुमोदन क्रय विशेषाधिकार नहीं है, तब इकाई पदानुक्रम में ऊपर एक अनुमोदक मिलता है, जब तक कि प्रशासन का चयन नहीं हो जाता."
};
var orgUnitAssignedRoles$a = {
  header: "{{code}} में भूमिकाएं प्रबंधित करें",
  name: "नाम",
  email: "ईमेल",
  roles: "भूमिका",
  roleCustomer: "ग्राहक",
  roleApprover: "अनुमोदक",
  roleManager: "प्रबंधक",
  roleAdministrator: "एडमिन"
};
var orgUnitUsers$a = {
  title: "असाइन किए गए उपयोगकर्ता",
  subtitle: "इकाईः {{ item.name }}",
  info: {
    disabledCreate: "अक्षम इकाई के लिए उपयोगकर्ता नहीं बनाया जा सकता."
  },
  hint: 'उपयोगकर्ता आपके संगठन के क्रेता, अनुमोदक, प्रबंधक और व्यवस्थापक हैं. हर उपयोगकर्ता को क्रय करने या अनुमोदक की भूमिका असाइन की गई है. उपयोगकर्ता को चाइल्ड इकाईयां "विरासत" में मिली हैं, अर्थात क्रेता के पास चेकआउट करते समय चाइल्ड इकाईयों के लागत केंद्र और वितरण पतों की पहुंच है.'
};
var orgUnitUserRoles$a = {
  title: "उपयोगकर्ता की भूमिकाएं और अधिकार",
  subtitle: "उपयोगकर्ताः {{ item.name }}",
  messages: {
    rolesUpdated: "{{item.name}} के लिए भूमिकाएं सफलतापूर्वक अपडेट की गईं"
  }
};
var orgUnitAssignedUsers$a = {
  title: "असाइन किए गए उपयोगकर्ता",
  subtitle: "इकाईः {{ item.name }}"
};
var orgUnitCostCenters$a = {
  title: "असाइन किए गए लागत केंद्र",
  subtitle: "इकाईः {{ item.name }}",
  info: {
    disabledCreate: "अक्षम इकाई के लिए लागत केंद्र नहीं बनाया जा सकता."
  },
  hint: 'आपके संगठन के क्रय खाते द्वारा दिए गए सभी ऑर्डर ट्रैकिंग के लिए लागत केंद्र से लिंक किए गए हैं. क्रेता चेकआउट करते समय "खाता" क्रय विधि का उपयोग कर लागत केंद्र चुनता है. हर इकाई के पास एकाधिक लागत केंद्र हो सकते हैं, लेकिन, एक लागत केंद्र केवल एक इकाई को असाइन किया जा सकता है. अंतिम व्यय सीमा निर्धारित करने के लिए लागत केंद्र को बजट असाइन किया जाता है. '
};
var orgUnitAddress$a = {
  title: "वितरण का पता",
  subtitle: "इकाईः {{ item.name }}",
  country: "देश/क्षेत्र",
  titles: "शीर्षक",
  firstName: "प्रथम नाम",
  lastName: "अंतिम नाम",
  formattedAddress: "पता",
  address1: "पता",
  address2: "दूसरा पता (वैकल्पिक)",
  city: "शहर",
  state: "राज्य",
  zipCode: "जिप कोड:",
  phoneNumber: "फोन नंबर (वैकल्पिक)",
  streetAddress: "सड़क का पता",
  aptSuite: "अपार्टमेंट संख्या",
  selectOne: "एक चुनें...",
  hint: 'जब क्रेता "खाता" क्रय विधि का उपयोग कर चेकआउट करता है, उन्हें लागत केंद्र चुनना चाहिए.  क्रेता के लिए उपलब्ध वितरण पते चुने गए लागत केंद्र की इकाई पर निर्भर करते हैं.',
  details: {
    title: "पता विवरण",
    subtitle: "इकाईः {{ item.name }}"
  },
  edit: {
    title: "पता संपादित करें"
  },
  create: {
    title: "पता बनाएं"
  },
  form: {
    subtitle: "इकाईः {{ item.name }}"
  },
  messages: {
    create: "पता {{ item.firstName }} {{ item.lastName }} सफलतापूर्वक बनाया गया",
    update: "पता {{ item.firstName }} {{ item.lastName }} सफलतापूर्वक अपडेट किया गया",
    "delete": "पता वापस नहीं लिया जा सकता. मौजूदा ऑर्डर प्रभाित नहीं होंगे.",
    deleteTitle: "यह पता हटाएं?",
    deleted: "पता {{ item.firstName }} {{ item.lastName }} सफलतापूर्वक हटाया गया"
  }
};
var orgUserGroup$a = {
  groupName: "उपयोगकर्ता समूह",
  header: "सभी उपयोगकर्ता समूह ({{count}})",
  disabled: "(अक्षम किया गया)",
  uid: "कोड",
  name: "नाम",
  unit: "इकाई",
  orgUnit: "इकाई",
  actions: "",
  sortBy: "इसके द्वारा क्रमित",
  sort: {
    byName: "नाम",
    byUnitName: "इकाई",
    byGroupID: "समूह"
  },
  hint: "एक बार में अनेक उपयोगकर्ताओं के लिए क्रय सीमा असाइन करने के उद्देश्य से उपयोगकर्ता समूह आपको उपयोगकर्ताओं को एक साथ एक समूह में मिलाने की अनुमति देता है.",
  details: {
    title: "उपयोगकर्ता समूह विवरण",
    subtitle: "उपयोगकर्ता समूहः {{ item.name }}"
  },
  edit: {
    title: "उपयोगकर्ता समूह संपादित करें",
    subtitle: "उपयोगकर्ता समूहः {{ item.name }}"
  },
  create: {
    title: "उपयोगकर्ता समूह बनाएं",
    subtitle: ""
  },
  links: {
    user: "उपयोगकर्ता",
    permission: "क्रय सीमाएं"
  },
  messages: {
    update: "उपयोगकर्ता समूह {{ item.name }} सफलतापूर्वक अपडेट किया गया",
    create: "उपयोगकर्ता समूह {{ item.name }} सफलतापूर्वक बनाया गया",
    deleteTitle: "यह उपयोगकर्ता समूह हटाएं?",
    "delete": "उपयोगकर्ता समूह हटाने पर इस समूह के उपयोगकर्ता प्रभावित नहीं होंगे.",
    deleted: "उपयोगकर्ता समूह {{ item.name }} सफलतापूर्वक हटाया गया"
  },
  breadcrumbs: {
    list: "सभी उपयोगकर्ता समूह",
    details: "{{name}}",
    users: "उपयोगकर्ता",
    permissions: "क्रय सीमाएं"
  }
};
var orgUserGroupUsers$a = {
  title: "उपयोगकर्ता प्रबंधित करें",
  subtitle: "उपयोगकर्ता समूहः {{ item.name }}",
  assigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक अनअसाइन किया गया",
  unassignAll: "सभी अनअसाइ करें",
  unassignAllConfirmation: "सभी उपयोगकर्ता सफलतापूर्वक अनअसाइन किए गए"
};
var orgUserGroupAssignedUsers$a = {
  title: "असाइन किए गए उपयोगकर्ता",
  subtitle: "उपयोगकर्ता समूहः {{ item.name }}",
  assigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "उपयोगकर्ता {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgUserGroupPermissions$a = {
  title: "क्रय सीमाएं प्रबंधित करें",
  subtitle: "सीमाः {{ item.name }}",
  assigned: "क्रय सीमाएं {{item.code}} सफलतापूर्वक असाइन की गई",
  unassigned: "क्रय सीमाएं {{item.code}} सफलतापूर्वक अनअसाइन की गई"
};
var orgUserGroupAssignedPermissions$a = {
  title: "असाइन की गई क्रय सीमाएं",
  subtitle: "सीमाः {{ item.name }}",
  assigned: "क्रय सीमाएं {{item.code}} सफलतापूर्वक असाइन किया गया",
  unassigned: "क्रय सीमाएं {{item.code}} सफलतापूर्वक अनअसाइन की गई"
};
var orgUser$a = {
  groupName: "उपयोगकर्ता",
  header: "सभी उपयोगकर्ता ({{count}})",
  disabled: "(अक्षम किया गया)",
  uid: "ईमेल",
  active: "स्थिति",
  name: "नाम",
  firstName: "प्रथम नाम",
  lastName: "अंतिम नाम",
  email: "ईमेल",
  orgUnit: "इकाई",
  unit: "इकाई",
  roles: "भूमिका",
  rights: "अधिकार",
  title: "शीर्षक",
  hint: "उपयोगकर्ता आपके संगठन के क्रेता, अनुमोदक, प्रबंधक और व्यवस्थापक हैं. हर उपयोगकर्ता को क्रय करने या क्रय अनुमोदक की भूमिका असाइन की गई है. हर उपयोगकर्ता किसी इकाई से संबंधित है, और उनके पास अपनी प्राथमिक इकाई की चाइल्ड इकाई की पहुंच है.",
  unitApprover: "इकाई अनुमोदक",
  assignApprover: "इकाई के लिए अनुमोदकों में उपयोगकर्ता जोड़ें",
  actions: "",
  sortBy: "इसके द्वारा क्रमित",
  sort: {
    byName: "नाम",
    byUnit: "इकाई"
  },
  details: {
    title: "उपयोगकर्ता विवरण",
    subtitle: "उपयोगकर्ताः {{ item.name }}"
  },
  edit: {
    title: "उपयोगकर्ता संपादित करें",
    subtitle: "उपयोगकर्ताः {{ item.name }}"
  },
  create: {
    title: "उपयोगकर्ता बनाएं",
    subtitle: ""
  },
  links: {
    password: "पासवर्ड बदलें",
    approvers: "अनुमोदक",
    userGroup: "उपयोगकर्ता समूह",
    permission: "क्रय सीमाएं",
    rolesAndRights: "भूमिकाएं और अधिकार"
  },
  messages: {
    deactivateTitle: "इस इकाई को अक्षम करें?",
    deactivate: "अक्षम उपयोगकर्ता स्टोर फ्रंट पर लॉगऑन कर ऑर्डर नहीं दे सकते.",
    confirmEnabled: "उपयोगकर्ता {{ item.firstName }} {{ item.lastName }} सफलतापूर्वक सक्षम किया गया",
    confirmDisabled: "उपयोगकर्ता {{ item.firstName }} {{ item.lastName }} सफलतापूर्वक अक्षम किया गया",
    update: "उपयोगकर्ता {{ item.firstName }} {{ item.lastName }} सफलतापूर्वक अपडेट किया गया",
    create: "उपयोगकर्ता {{ item.firstName }} {{ item.lastName }} सफलतापूर्वक बनाया गया",
    updatePassword: "उपयोगकर्ता {{ item.firstName }} {{ item.lastName }} पासवर्ड सफलतापूर्वक अपडेट किया गया"
  },
  info: {
    disabledEdit: "संपादन अनुमत करने के लिए उपयोगकर्ता सक्षम करें.",
    disabledEnable: "उपयोगकर्ता को सक्षम करने से पहले इकाई को सक्षम करना चाहिए."
  },
  approver: {
    link: "अनुमोदक",
    header: "{{code}} में अनुमोदक",
    assign: "अनुमोदक असाइन करें",
    assignHeader: "{{code}} में अनुमोदक असाइन करें",
    back: "वापस जाएं",
    "new": "नया अनुमोदक",
    instructions: {
      check: "इस उपयोगकर्ता को अनुमोदक असाइन करने के लिए, उपयोगकर्ता का चेकबॉक्स चुनें.",
      uncheck: "अनुमोदक को निकालने के लिए, उपयोगकर्ता का चेकबॉक्स साफ करें.",
      changes: "परिवर्तन स्वचालित रूप से सहेजे गए."
    }
  },
  userGroup: {
    link: "उपयोगकर्ता समूह",
    header: "{{code}} में उपयोगकर्ता समूह",
    assign: "उपयोगकर्ता समूह असाइन करें",
    assignHeader: "{{code}} में उपयोगकर्ता समूह असाइन करें",
    back: "वापस जाएं",
    instructions: {
      check: "इस उपयोगकर्ता को उपयोगकर्ता समूह असाइन करने के लिए, उपयोगकर्ता का चेकबॉक्स चुनें.",
      uncheck: "उपयोगकर्ता समूह निकालने के लिए, उपयोगकर्ता का चेकबॉक्स साफ करें.",
      changes: "परिवर्तन स्वचालित रूप से सहेजे गए."
    }
  },
  permission: {
    link: "क्रय सीमाएं",
    header: "{{code}} में क्रय सीमाएं",
    assign: "क्रय सीमाएं असाइन करें",
    assignHeader: "{{code}} में क्रय सीमाएं असाइन करें",
    back: "वापस जाएं",
    instructions: {
      check: "इस उपयोगकर्ता को क्रय सीमाएं असाइन करने के लिए, इसका चेक बॉक् चुनें.",
      uncheck: "क्रय सीमाएं अनअसाइन करने के लिए, चेक बॉक्स साफ करें.",
      changes: "परिवर्तन स्वचालित रूप से सहेजे गए."
    },
    per: {
      "undefined": "",
      MONTH: "प्रति माह",
      YEAR: "प्रति वर्ष",
      WEEK: "प्रति सप्ताह",
      QUARTER: "प्रति तिमाही"
    }
  },
  password: {
    title: "पासवर्ड बदलें",
    subtitle: "उपयोगकर्ताः {{ item.email }}",
    newPassword: "नया पासवर्ड",
    confirmPassword: "नया पासवर्ड दोबारा टाइप करें"
  },
  breadcrumbs: {
    list: "सभी उपयोगकर्ता",
    details: "{{name}}",
    userGroups: "उपयोगकर्ता समूह",
    approvers: "अनुमोदक",
    permissions: "क्रय सीमाएं"
  }
};
var orgUserUserGroups$a = {
  title: "उपयोगकर्ता समूहों को प्रबंधित करें",
  subtitle: "उपयोगकर्ताः {{ item.name }}",
  assigned: "उपयोगकर्ता समूह {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "उपयोगकर्ता समूह {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgUserAssignedUserGroups$a = {
  title: "असाइन किए गए उपयोगकर्ता समूह",
  subtitle: "उपयोगकर्ताः {{ item.name }}",
  assigned: "उपयोगकर्ता समूह {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "उपयोगकर्ता समूह {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgUserApprovers$a = {
  title: "अनुमोदक प्रबंधित करें",
  subtitle: "उपयोगकर्ताः {{ item.name }}",
  assigned: "अनुमोदक {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "अनुमोदक {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgUserAssignedApprovers$a = {
  title: "असाइन किया गया अनुमोदक",
  subtitle: "उपयोगकर्ताः {{ item.name }}",
  assigned: "अनुमोदक {{ item.name }} सफलतापूर्वक असाइन किया गया",
  unassigned: "अनुमोदक {{ item.name }} सफलतापूर्वक अनअसाइन किया गया"
};
var orgUserPermissions$a = {
  title: "क्रय सीमाएं प्रबंधित करें",
  subtitle: "उपयोगकर्ताः {{ item.name }}",
  assigned: "क्रय सीमा {{item.code}} सफलतापूर्वक असाइन की गई",
  unassigned: "क्रय सीमा {{item.code}} सफलतापूर्वक अनअसाइन की गई"
};
var orgUserAssignedPermissions$a = {
  title: "असाइन की गई क्रय सीमाएं",
  subtitle: "उपयोगकर्ताः {{ item.name }}",
  assigned: "क्रय सीमा {{item.code}} सफलतापूर्वक असाइन की गई",
  unassigned: "क्रय सीमा {{ item.code }} सफलतापूर्वक अनअसाइन की गई"
};
var orgPurchaseLimit$a = {
  groupName: "क्रय सीमाएं",
  header: "सभी क्रय सीमाएं ({{count}})",
  name: "नाम",
  code: "कोड",
  active: "स्थिति",
  limit: "सीमा",
  orderApprovalPermissionType: "प्रकार",
  threshold: "सीमा",
  periodRange: "अवधि",
  currency: "मुद्रा",
  orgUnit: "पेरेंट इकाई",
  unit: "पेरेंट इकाई",
  actions: "",
  hint: "क्रय सीमाएं यह निर्धारित करके व्यय नियंत्रण में मदद करती हैं कि क्रेता प्रति ऑर्डर या प्रति सप्ताह माह, तिमाही, या वर्ष में कितना व्यय कर सकता है. क्रय सीमाएं उपयोगकर्ता या उपयोगकर्ता समूहों को असाइन की जाती हैं. क्रय सीमाएं अनुमोदकों को भी असाइन की जाती हैं, जो परिभाषित करती हैं कि उन्हें कितना अनुमोदन करने की अनुमति है. आप उपयोगकर्ता समूहों सहित अनेक उपयोगकर्ताओं के क्रय सीमा असाइन कर सकते हैं.",
  details: {
    title: "क्रय सीमा विवरण",
    subtitle: "क्रय सीमाः {{ item.code }}"
  },
  edit: {
    title: "क्रय सीमा संपादित करें",
    subtitle: "क्रय सीमाः {{ item.code }}"
  },
  create: {
    title: "क्रय सीमा बनाएं",
    subtitle: ""
  },
  sortBy: "इसके द्वारा क्रमित",
  sort: {
    byName: "नाम",
    byUnitName: "इकाई"
  },
  messages: {
    deactivateTitle: "यह क्रय सीमा अक्षम करें?",
    deactivate: "अक्षम की गई क्रय सीमा आगे किसी भी उपयोगकर्ता या उपयोगकर्ता समूह को असाइन नहीं की जा सकती. वर्तमान असाइनमेंट का कोई प्रभाव नहीं होगा.",
    confirmEnabled: "क्रय सीमा {{item.code}} सफलतापूर्वक सक्षम की गई",
    confirmDisabled: "क्रय सीमा {{item.code}} सफलतापूर्वक अक्षम की गई",
    update: "क्रय सीमा {{item.code}} सफलतापूर्वक अपडेट की गई",
    create: "क्रय सीमा {{item.code}} सफलतापूर्वक बनाई गई"
  },
  info: {
    disabledEdit: "संपादन अनुमत करने के लिए क्रय सीमा सक्षम करें.",
    disabledEnable: "यह क्रय सीमा सक्षम करने से पहले इकाई सक्षम करनी चाहिए."
  },
  per: {
    DAY: "प्रति दिन",
    WEEK: "प्रति सप्ताह",
    MONTH: "प्रति माह",
    QUARTER: "प्रति तिमाही",
    YEAR: "प्रति वर्ष"
  },
  breadcrumbs: {
    list: "सभी क्रय सीमाएं",
    details: "{{code}}"
  }
};
var organization$l = {
  organization: organization$k,
  orgCostCenter: orgCostCenter$a,
  orgCostCenterBudgets: orgCostCenterBudgets$a,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$a,
  orgBudget: orgBudget$a,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$a,
  orgUnit: orgUnit$a,
  orgUnitChildren: orgUnitChildren$a,
  orgUnitApprovers: orgUnitApprovers$a,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$a,
  orgUnitAssignedRoles: orgUnitAssignedRoles$a,
  orgUnitUsers: orgUnitUsers$a,
  orgUnitUserRoles: orgUnitUserRoles$a,
  orgUnitAssignedUsers: orgUnitAssignedUsers$a,
  orgUnitCostCenters: orgUnitCostCenters$a,
  orgUnitAddress: orgUnitAddress$a,
  orgUserGroup: orgUserGroup$a,
  orgUserGroupUsers: orgUserGroupUsers$a,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$a,
  orgUserGroupPermissions: orgUserGroupPermissions$a,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$a,
  orgUser: orgUser$a,
  orgUserUserGroups: orgUserUserGroups$a,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$a,
  orgUserApprovers: orgUserApprovers$a,
  orgUserAssignedApprovers: orgUserAssignedApprovers$a,
  orgUserPermissions: orgUserPermissions$a,
  orgUserAssignedPermissions: orgUserAssignedPermissions$a,
  orgPurchaseLimit: orgPurchaseLimit$a
};
var hi = {
  organization: organization$l
};
var organization$i = {
  enabled: "Aktív",
  disabled: "Letiltva",
  enable: "Aktiválás",
  disable: "Letiltás",
  name: "Név",
  code: "Kód",
  done: "kész",
  cancel: "Mégse",
  add: "Hozzáadás",
  manageUsers: "Felhasználók kezelése",
  create: "{{name}} létrehozása",
  edit: "Szerkesztés",
  save: "{{name}} mentése",
  "delete": "Törlés",
  assign: "Kezelés",
  active: "Aktív",
  status: "Státus",
  details: "Részletek",
  messages: {
    emptyList: "A lista üres"
  },
  userRoles: {
    b2bcustomergroup: "Ügyfél",
    b2bapprovergroup: "Jóváhagyó",
    b2bmanagergroup: "Vezető",
    b2badmingroup: "Rendszergazda"
  },
  userRights: {
    unitorderviewergroup: "Egységszintű rendelések megtekintése"
  },
  breadcrumb: "Szervezet",
  notification: {
    noSufficientPermissions: "Nem rendelkezik megfelelő jogosultsággal az oldal eléréséhez",
    notExist: "Ez a tétel nem létezik",
    disabled: "Nem szerkeszthet letiltott tételeket"
  },
  confirmation: {
    cancel: "MÉGSE",
    confirm: "MEGERŐSÍTÉS",
    disable: "LETILTÁS",
    "delete": "TÖRLÉS"
  },
  httpHandlers: {
    conflict: {
      budget: "Már létezik {{ code }} kóddal rendelkező költségkeret.",
      costCenter: "Már létezik {{ code }} kóddal rendelkező költséghely.",
      unit: "Már létezik {{ code }} azonosítóval rendelkező szervezeti egység.",
      user: "Már létezik {{ code }} e-mail-címmel rendelkező felhasználó",
      userGroup: "Már létezik {{ code }} azonosítóval rendelkező felhasználócsoport",
      permission: "Már létezik {{ code }} kóddal rendelkező jóváhagyási jogosultság.",
      unknown: "Szerverhitelesítési hiba."
    }
  },
  information: "További információk a következőről: {{title}}"
};
var orgCostCenter$9 = {
  groupName: "Költséghelyek",
  header: "Összes költséghely ({{count}})",
  code: "Kód",
  active: "Státus",
  name: "Név",
  currency: "Pénznem",
  unit: "Fölérendelt egység",
  actions: "",
  sortBy: "Rendezés alapja",
  sort: {
    byName: "Név",
    byUnitName: "Egység",
    byCode: "Kód"
  },
  hint: "A szervezete beszerzési fiókján keresztül leadott rendeléseket a rendszer követési célból összekapcsolja egy költséghellyel. Az egyes egységek több költséghellyel rendelkezhetnek. A kiadások korlátozása érdekében a költséghelyekhez költségkeret is tartozik. A beszerzők a rendelés leadásakor választják ki a költséghelyet.",
  disable: {
    confirm: "Letiltás"
  },
  messages: {
    deactivateTitle: "Letiltja ezt a költséghelyet?",
    deactivate: "A letiltott költséghelyek nem használhatók új rendelések leadására. Biztosítsa, hogy az egysége rendelkezzen legalább egy költséghellyel. A meglévő rendelésekre ez nincs hatással.",
    confirmEnabled: "A költséghely ({{ item.name }}) engedélyezése sikeres",
    confirmDisabled: "A költséghely ({{ item.name }}) letiltása sikeres",
    update: "A költséghely ({{ item.name }}) frissítése sikeres",
    create: "A költséghely ({{ item.name }}) létrehozása sikeres"
  },
  info: {
    disabledEdit: "A szerkesztés a költséghely engedélyezése után válik elérhetővé.",
    disabledEnable: "A költséghely engedélyezéséhez először engedélyezni kell az egységet."
  },
  details: {
    title: "Költséghely részletei",
    subtitle: "Költséghely: {{ item.name }}"
  },
  edit: {
    title: "Költséghely szerkesztése",
    subtitle: "Költséghely: {{ item.name }}"
  },
  create: {
    title: "Költséghely létrehozása",
    subtitle: ""
  },
  budget: {
    link: "Költségkeretek"
  },
  breadcrumbs: {
    list: "Összes költséghely",
    details: "{{name}}",
    budgets: "Költségkeretek"
  }
};
var orgCostCenterBudgets$9 = {
  title: "Költségkeretek kezelése",
  subtitle: "Költséghely: {{ item.name }}",
  assigned: "A költségkeret ({{ item.name }}) hozzárendelése sikeres",
  unassigned: "A költségkeret ({{ item.name }}) hozzárendelésének megszüntetése sikeres"
};
var orgCostCenterAssignedBudgets$9 = {
  title: "Hozzárendelt költségvetések",
  subtitle: "Költséghely: {{ item.name }}",
  assigned: "A költségkeret ({{ item.name }}) hozzárendelése sikeres",
  unassigned: "A költségkeret ({{ item.name }}) hozzárendelésének megszüntetése sikeres"
};
var orgBudget$9 = {
  groupName: "Költségkeretek",
  header: "Összes költségkeret ({{count}})",
  code: "Kód",
  name: "Név",
  active: "Státus",
  currency: "Pénznem",
  amount: "Összeg",
  unit: "Egység",
  businessUnits: "Egység",
  dateRange: "Kezdés – Befejezés",
  startDate: "Kezdés",
  endDate: "Befejezés",
  actions: "",
  sortBy: "Rendezés alapja",
  sort: {
    byName: "Név",
    byUnitName: "Egység",
    byCode: "Kód",
    byValue: "Érték"
  },
  hint: "A költségkeretek megszabják a beszerzések átfogó korlátozásait, és költséghelyekhez vannak hozzárendelve. A beszerzők a rendelés leadásakor választják ki a költséghelyet.",
  details: {
    title: "Költségkeret részletei",
    subtitle: "Költségkeret: {{ item.name }}"
  },
  edit: {
    title: "Költségkeret szerkesztése",
    subtitle: "Költségkeret: {{ item.name }}"
  },
  create: {
    title: "Költségkeret létrehozása",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Letiltja ezt a költségkeretet?",
    deactivate: "A letiltott költségkereteket a rendszer nem alkalmazza azokon a költséghelyeken, amelyekhez a költségkereteket hozzárendelték. Biztosítsa, hogy a társított költséghely legalább egy költségkerettel rendelkezik.",
    confirmEnabled: "A költségkeret ({{ item.name }}) engedélyezése sikeres",
    confirmDisabled: "A költségkeret ({{ item.name }}) letiltása sikeres",
    update: "A költségkeret ({{ item.name }}) frissítése sikeres",
    create: "A költségkeret ({{ item.name }}) létrehozása sikeres"
  },
  info: {
    disabledEdit: "A szerkesztés a költségkeret engedélyezése után válik elérhetővé.",
    disabledEnable: "A költségkeret engedélyezéséhez először engedélyezni kell az egységet."
  },
  links: {
    costCenters: "Költséghelyek"
  },
  breadcrumbs: {
    list: "Összes költségkeret",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$9 = {
  title: "Költséghelyek",
  subtitle: "Költségkeret: {{ item.name }}"
};
var orgUnit$9 = {
  groupName: "Egységek",
  header: "Összes egység ({{count}})",
  unit: "Egység",
  name: "Név",
  uid: "Azonosító",
  approvalProcess: "Jóváhagyási folyamat",
  parentUnit: "Fölérendelt egység",
  active: "Státus",
  hint: "Az egységek a részlegeket, áruházakat, régiókat vagy egyéb csoportosításokat jelentik, amelyek logikusak az Ön számára. A beszerzők számára a rendelés leadásakor rendelkezésre álló költséghelyek és szállítási címek az egységüktől függnek. A felhasználók hozzáférhetnek az elsődleges egységük összes alárendelt egységéhez.",
  details: {
    title: "Egység részletei",
    subtitle: "Egység: {{ item.name }}",
    hint: "Az egységek a részlegeket, áruházakat, régiókat vagy egyéb csoportosításokat jelentik, amelyek logikusak az Ön számára. Az egységek letiltása letiltja az egység összes alárendeltjének használatát is, beleértve az alárendelt egységeket, felhasználókat, jóváhagyókat és költséghelyeket. A letiltott egységek nem szerkeszthetők."
  },
  edit: {
    title: "Egység szerkesztése",
    subtitle: "Egység: {{ item.name }}"
  },
  create: {
    title: "Egység létrehozása",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Letiltja ezt az egységet?",
    deactivate: "Az egység letiltása széles körű hatással lesz a kereskedelmi szervezetére. Az egység ÖSSZES alárendelt egysége, felhasználója, költségkerete és költséghelye is le lesz tiltva.",
    confirmEnabled: "Az egység ({{ item.name }}) engedélyezése sikeres",
    confirmDisabled: "Az egység ({{ item.name }}) letiltása sikeres",
    update: "Az egység ({{ item.name }}) frissítése sikeres",
    create: "Az egység ({{ item.name }}) létrehozása sikeres"
  },
  info: {
    disabledEdit: "A szerkesztés az egység engedélyezése után válik elérhetővé.",
    disabledEnable: "Az egység engedélyezéséhez először engedélyezni kell a fölérendeltet.",
    disabledDisable: "Nem lehet letiltani a gyökéregységet."
  },
  links: {
    units: "Alárendelt egységek",
    users: "Felhasználók",
    approvers: "Jóváhagyók",
    shippingAddresses: "Szállítási címek",
    costCenters: "Költséghelyek"
  },
  tree: {
    expandAll: "Összes kibontása",
    collapseAll: "Összes összecsukása",
    expand: "Kibontás",
    collapse: "összecsukás",
    explore: "Alegységek felfedezése"
  },
  children: {
    create: {
      title: "Alárendelt egység létrehozása",
      subtitle: ""
    },
    messages: {
      create: "Az egység ({{ item.name }}) létrehozása sikeres"
    }
  },
  costCenters: {
    create: {
      title: "Költséghely létrehozása",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Fölérendelt üzleti egység",
    create: "Egység létrehozása",
    parentOrgUnitNotes: "Ez az egység a szervezetének legfelső szintjén található. Nem lehet hozzárendelni egy másik egységhez."
  },
  users: {
    header: "Felhasználók a következőben: {{code}}",
    changeUserRoles: "Felhasználói szerepek módosítása",
    newUser: "Új felhasználó"
  },
  assignRoles: {
    header: "Felhasználók kezelése a következőben: {{code}}",
    instructions: {
      check: "Ha hozzá szeretne rendelni egy szerepet egy felhasználóhoz, jelölje ki a szerep jelölőnégyzetét.",
      uncheck: "Ha el szeretne távolítani egy szerepet, törölje a jelölőnégyzet kijelölését.",
      changes: "A módosítások mentése automatikus."
    }
  },
  approvers: {
    header: "Jóváhagyók a következőben: {{code}}",
    assign: "Jóváhagyók kezelése",
    "new": "Új jóváhagyó"
  },
  assignApprovers: {
    header: "Jóváhagyók kezelése a következőben: {{code}}",
    instructions: {
      check: "Ha jóváhagyót szeretne hozzárendelni ehhez az egységhez, jelölje ki a felhasználó jelölőnégyzetét.",
      uncheck: "Ha el szeretne távolítani egy jóváhagyót, törölje a felhasználó jelölőnégyzetét.",
      changes: "A módosítások mentése automatikus."
    },
    hint: "A Jóváhagyók lista alatt megjelenített felhasználók jóváhagyási jogosultságokat kapnak ezen egység és alárendelt egységeinek beszerzőihez. Megjegyzés: a jóváhagyó szereppel rendelkező felhasználók nem ugyanazok, mint a Jóváhagyók lista alatt megjelenő jóváhagyók. Ha egy egység nem rendelkezik jóváhagyóval, vagy ha a jóváhagyók nem rendelkeznek megfelelő jóváhagyási beszerzési jogosultságokkal, akkor a rendszer az egységhierarchia magasabb szintjén keres jóváhagyót, amíg ki nem választ egy rendszergazdát."
  },
  breadcrumbs: {
    list: "Összes egység",
    details: "{{name}}",
    children: "Alárendelt egységek",
    users: "Felhasználók",
    approvers: "Jóváhagyók",
    addresses: "Szállítási címek",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Költséghelyek"
  }
};
var orgUnitChildren$9 = {
  title: "Alárendelt egységek",
  subtitle: "Egység: {{item.name}}",
  info: {
    disabledCreate: "Letiltott egységekhez nem lehet létrehozni alárendelt egységeket."
  },
  hint: "Az egységek a részlegeket, áruházakat, régiókat vagy egyéb csoportosításokat jelentik, amelyek logikusak az Ön számára. A felhasználók „öröklik” az alárendelt egységeket, azaz a beszerzők a rendelések leadásakor hozzáférhetnek az alárendelt egységek költséghelyeihez és szállítási címeihez."
};
var orgUnitApprovers$9 = {
  title: "Jóváhagyók kezelése",
  subtitle: "Egység: {{item.name}}",
  assigned: "A felhasználó ({{item.name}}) hozzárendelése sikeres",
  unassigned: "A felhasználó ({{item.name}}) hozzárendelésének megszüntetése sikeres"
};
var orgUnitAssignedApprovers$9 = {
  title: "Hozzárendelt jóváhagyók",
  subtitle: "Egység: {{item.name}}",
  assigned: "A felhasználó ({{item.name}}) hozzárendelése sikeres",
  unassigned: "A felhasználó ({{item.name}}) hozzárendelésének megszüntetése sikeres",
  hint: "A Jóváhagyók lista alatt megjelenített felhasználók jóváhagyási jogosultságokat kapnak ezen egység és alárendelt egységeinek beszerzőihez. Megjegyzés: a jóváhagyó szereppel rendelkező felhasználók nem ugyanazok, mint a Jóváhagyók lista alatt megjelenő jóváhagyók. Ha egy egység nem rendelkezik jóváhagyóval, vagy ha a jóváhagyók nem rendelkeznek megfelelő jóváhagyási beszerzési jogosultságokkal, akkor a rendszer az egységhierarchia magasabb szintjén keres jóváhagyót, amíg ki nem választ egy rendszergazdát."
};
var orgUnitAssignedRoles$9 = {
  header: "Felhasználók kezelése a következőben: {{code}}",
  name: "Név",
  email: "E-mail",
  roles: "Szerepek",
  roleCustomer: "Ügyfél",
  roleApprover: "Jóváhagyó",
  roleManager: "Vezető",
  roleAdministrator: "Rendszergazda"
};
var orgUnitUsers$9 = {
  title: "Hozzárendelt felhasználók",
  subtitle: "Egység: {{item.name}}",
  info: {
    disabledCreate: "Letiltott egységekhez nem lehet létrehozni felhasználókat."
  },
  hint: "A felhasználók a szervezete beszerzői, jóváhagyói, vezetői és rendszergazdái. A rendszer minden felhasználóhoz hozzárendel egy szerepet a beszerzések létrehozásához vagy jóváhagyásához. A felhasználók „öröklik” az alárendelt egységeket, azaz a beszerzők a rendelések leadásakor hozzáférhetnek az alárendelt egységek költséghelyeihez és szállítási címeihez."
};
var orgUnitUserRoles$9 = {
  title: "Felhasználói szerepek és jogok",
  subtitle: "Felhasználó: {{item.name}}",
  messages: {
    rolesUpdated: "A szerepek frissítése sikeres a következőhöz: {{item.name}}"
  }
};
var orgUnitAssignedUsers$9 = {
  title: "Hozzárendelt felhasználók",
  subtitle: "Egység: {{item.name}}"
};
var orgUnitCostCenters$9 = {
  title: "Hozzárendelt költséghelyek",
  subtitle: "Egység: {{item.name}}",
  info: {
    disabledCreate: "Letiltott egységekhez nem lehet létrehozni költséghelyeket."
  },
  hint: "A szervezete beszerzési fiókján keresztül leadott rendeléseket a rendszer követési célból összekapcsolja egy költséghellyel. A beszerző a „Számla” beszerzési módszerrel végzett rendelés leadásakor kiválaszt egy költséghelyet. Az egyes egységek több költséghellyel rendelkezhetnek, de egy költséghely csak egyetlen egységhez rendelhető hozzá. A végső kiadási korlátozások definiálásához a rendszer költségkereteket rendel hozzá a költséghelyekhez. "
};
var orgUnitAddress$9 = {
  title: "Szállítási címek",
  subtitle: "Egység: {{item.name}}",
  country: "Ország/régió",
  titles: "Megszólítás",
  firstName: "Utónév",
  lastName: "Vezetéknév",
  formattedAddress: "Cím",
  address1: "Cím",
  address2: "Másodlagos cím (opcionális)",
  city: "Város",
  state: "Állam",
  zipCode: "Irányítószám",
  phoneNumber: "Telefonszám (opcionális)",
  streetAddress: "Utcanév",
  aptSuite: "Lakásszám",
  selectOne: "Válasszon egyet…",
  hint: "Ha egy beszerző a „Számla” beszerzési módszerrel ad le egy rendelést, ki kell választania egy költséghelyet. A beszerző számára rendelkezésre álló szállítási címek a kiválasztott költséghely egységétől függnek.",
  details: {
    title: "Cím részletei",
    subtitle: "Egység: {{item.name}}"
  },
  edit: {
    title: "Cím szerkesztése"
  },
  create: {
    title: "Cím létrehozása"
  },
  form: {
    subtitle: "Egység: {{item.name}}"
  },
  messages: {
    create: "A cím ({{ item.firstName }} {{ item.lastName }}) létrehozása sikeres",
    update: "A cím ({{ item.firstName }} {{ item.lastName }}) frissítése sikeres",
    "delete": "A címet nem lehet visszahozni. Ez nincs hatással a meglévő rendelésekre.",
    deleteTitle: "Törli ezt a címet?",
    deleted: "A cím ({{ item.firstName }} {{ item.lastName }}) törlése sikeres"
  }
};
var orgUserGroup$9 = {
  groupName: "Felhasználócsoportok",
  header: "Összes felhasználócsoport ({{count}})",
  disabled: "(letiltva)",
  uid: "Kód",
  name: "Név",
  unit: "Egység",
  orgUnit: "Egység",
  actions: "",
  sortBy: "Rendezés alapja",
  sort: {
    byName: "Név",
    byUnitName: "Egység",
    byGroupID: "Csoport"
  },
  hint: "A felhasználócsoportok lehetővé teszik, hogy egy csoportban egyesítse a felhasználókat, így lehetősége nyílik egyszerre több felhasználó beszerzési korlátozásainak hozzárendelésére.",
  details: {
    title: "Felhasználócsoport részletei",
    subtitle: "Felhasználócsoport: {{ item.name }}"
  },
  edit: {
    title: "Felhasználócsoport szerkesztése",
    subtitle: "Felhasználócsoport: {{ item.name }}"
  },
  create: {
    title: "Felhasználócsoport létrehozása",
    subtitle: ""
  },
  links: {
    user: "Felhasználók",
    permission: "Beszerzési korlátok"
  },
  messages: {
    update: "A felhasználócsoport ({{ item.name }}) frissítése sikeres",
    create: "A felhasználócsoport ({{ item.name }}) létrehozása sikeres",
    deleteTitle: "Törli ezt a felhasználócsoportot?",
    "delete": "A felhasználócsoport törlése nem érinti a csoportban található felhasználókat.",
    deleted: "A felhasználócsoport ({{ item.name }}) törlése sikeres"
  },
  breadcrumbs: {
    list: "Összes felhasználócsoport",
    details: "{{name}}",
    users: "Felhasználók",
    permissions: "Beszerzési korlátok"
  }
};
var orgUserGroupUsers$9 = {
  title: "Felhasználók kezelése",
  subtitle: "Felhasználócsoport: {{item.name}}",
  assigned: "A felhasználó ({{item.name}}) hozzárendelése sikeres",
  unassigned: "A felhasználó ({{item.name}}) hozzárendelésének megszüntetése sikeres",
  unassignAll: "Összes hozzárendelés megszüntetése",
  unassignAllConfirmation: "Az összes felhasználó hozzárendelésének megszüntetése sikeres"
};
var orgUserGroupAssignedUsers$9 = {
  title: "Hozzárendelt felhasználók",
  subtitle: "Felhasználócsoport: {{ item.name }}",
  assigned: "A felhasználó ({{item.name}}) hozzárendelése sikeres",
  unassigned: "A felhasználó ({{item.name}}) hozzárendelésének megszüntetése sikeres"
};
var orgUserGroupPermissions$9 = {
  title: "Beszerzési korlátok kezelése",
  subtitle: "Korlát: {{ item.name }}",
  assigned: "A beszerzési korlátok {{item.code}} hozzárendelése sikeres",
  unassigned: "A beszerzési korlátok {{item.code}} hozzárendelésének megszüntetése sikeres"
};
var orgUserGroupAssignedPermissions$9 = {
  title: "Hozzárendelt beszerzési korlátok",
  subtitle: "Korlát: {{ item.name }}",
  assigned: "A beszerzési korlátok {{item.code}} hozzárendelése sikeres",
  unassigned: "A beszerzési korlátok {{item.code}} hozzárendelésének megszüntetése sikeres"
};
var orgUser$9 = {
  groupName: "Felhasználók",
  header: "Összes felhasználó ({{count}})",
  disabled: "(letiltva)",
  uid: "E-mail",
  active: "Státus",
  name: "Név",
  firstName: "Utónév",
  lastName: "Vezetéknév",
  email: "E-mail",
  orgUnit: "Egység",
  unit: "Egység",
  roles: "Szerepek",
  rights: "Jogok",
  title: "Megszólítás",
  hint: "A felhasználók a szervezete beszerzői, jóváhagyói, vezetői és rendszergazdái. A rendszer minden felhasználóhoz hozzárendel egy szerepet a beszerzések létrehozásához vagy jóváhagyásához. Minden felhasználó egy egységhez tartozik, és a felhasználók hozzáférnek az elsődleges egységük összes alárendelt egységéhez.",
  unitApprover: "Egységjóváhagyó",
  assignApprover: "Felhasználó hozzáadása az egység jóváhagyóihoz",
  actions: "",
  sortBy: "Rendezés alapja",
  sort: {
    byName: "Név",
    byUnit: "Egység"
  },
  details: {
    title: "Felhasználó adatai",
    subtitle: "Felhasználó: {{ item.name }}"
  },
  edit: {
    title: "Felhasználó szerkesztése",
    subtitle: "Felhasználó: {{ item.name }}"
  },
  create: {
    title: "Felhasználó létrehozása",
    subtitle: ""
  },
  links: {
    password: "Jelszó módosítása",
    approvers: "Jóváhagyók",
    userGroup: "Felhasználócsoportok",
    permission: "Beszerzési korlátok",
    rolesAndRights: "Szerepek és jogok"
  },
  messages: {
    deactivateTitle: "Letiltja ezt a felhasználót?",
    deactivate: "A letiltott felhasználók nem jelentkezhetnek be az áruházba és nem adhatnak le rendeléseket.",
    confirmEnabled: "A felhasználó ({{item.firstName}} {{item.lastName}}) engedélyezése sikeres",
    confirmDisabled: "A felhasználó ({{item.firstName}} {{item.lastName}}) letiltása sikeres",
    update: "A felhasználó ({{item.firstName}} {{item.lastName}}) frissítése sikeres",
    create: "A felhasználó ({{item.firstName}} {{item.lastName}}) létrehozása sikeres",
    updatePassword: "A felhasználó ({{item.firstName}} {{item.lastName}}) jelszavának frissítése sikeres"
  },
  info: {
    disabledEdit: "A szerkesztés a felhasználó engedélyezése után válik elérhetővé.",
    disabledEnable: "A felhasználó engedélyezéséhez először engedélyezni kell az egységet."
  },
  approver: {
    link: "Jóváhagyók",
    header: "Jóváhagyók a következőben: {{code}}",
    assign: "Jóváhagyók hozzárendelése",
    assignHeader: "Jóváhagyók hozzárendelése a következőben: {{code}}",
    back: "Vissza",
    "new": "Új jóváhagyó",
    instructions: {
      check: "Ha jóváhagyót szeretne hozzárendelni ehhez a felhasználóhoz, jelölje ki a felhasználó jelölőnégyzetét.",
      uncheck: "Ha el szeretne távolítani egy jóváhagyót, törölje a felhasználó jelölőnégyzetét.",
      changes: "A módosítások mentése automatikus."
    }
  },
  userGroup: {
    link: "Felhasználócsoportok",
    header: "Felhasználócsoportok a következőben: {{code}}",
    assign: "Felhasználócsoportok hozzárendelése",
    assignHeader: "Felhasználócsoportok hozzárendelése a következőben: {{code}}",
    back: "Vissza",
    instructions: {
      check: "Ha felhasználócsoportot szeretne hozzárendelni ehhez a felhasználóhoz, jelölje ki a felhasználó jelölőnégyzetét.",
      uncheck: "Ha el szeretne távolítani egy felhasználócsoportot, törölje a felhasználó jelölőnégyzetét.",
      changes: "A módosítások mentése automatikus."
    }
  },
  permission: {
    link: "Beszerzési korlátok",
    header: "Beszerzési korlátok a következőben: {{code}}",
    assign: "Beszerzési korlátok hozzárendelése",
    assignHeader: "Beszerzési korlátok hozzárendelése a következőben: {{code}}",
    back: "Vissza",
    instructions: {
      check: "Ha beszerzési korlátot szeretne hozzárendelni ehhez a felhasználóhoz, jelölje ki a jelölőnégyzetét.",
      uncheck: "Ha el szeretne távolítani egy beszerzési korlátot, törölje a jelölőnégyzetét.",
      changes: "A módosítások mentése automatikus."
    },
    per: {
      "undefined": "",
      MONTH: "havonta",
      YEAR: "évente",
      WEEK: "hetente",
      QUARTER: "negyedévente"
    }
  },
  password: {
    title: "Jelszó módosítása",
    subtitle: "Felhasználó: {{ item.email }}",
    newPassword: "Új jelszó",
    confirmPassword: "Új jelszó megerősítése"
  },
  breadcrumbs: {
    list: "Összes felhasználó",
    details: "{{name}}",
    userGroups: "Felhasználócsoportok",
    approvers: "Jóváhagyók",
    permissions: "Beszerzési korlátok"
  }
};
var orgUserUserGroups$9 = {
  title: "Felhasználócsoportok kezelése",
  subtitle: "Felhasználó: {{ item.name }}",
  assigned: "A felhasználócsoport ({{item.name}}) hozzárendelése sikeres",
  unassigned: "A felhasználócsoport ({{item.name}}) hozzárendelésének megszüntetése sikeres"
};
var orgUserAssignedUserGroups$9 = {
  title: "Hozzárendelt felhasználócsoportok",
  subtitle: "Felhasználó: {{ item.name }}",
  assigned: "A felhasználócsoport ({{item.name}}) hozzárendelése sikeres",
  unassigned: "A felhasználócsoport ({{item.name}}) hozzárendelésének megszüntetése sikeres"
};
var orgUserApprovers$9 = {
  title: "Jóváhagyók kezelése",
  subtitle: "Felhasználó: {{ item.name }}",
  assigned: "A jóváhagyó ({{ item.name }}) hozzárendelése sikeres",
  unassigned: "A jóváhagyó ({{ item.name }}) hozzárendelésének megszüntetése sikeres"
};
var orgUserAssignedApprovers$9 = {
  title: "Hozzárendelt jóváhagyók",
  subtitle: "Felhasználó: {{ item.name }}",
  assigned: "A jóváhagyó ({{ item.name }}) hozzárendelése sikeres",
  unassigned: "A jóváhagyó ({{ item.name }}) hozzárendelésének megszüntetése sikeres"
};
var orgUserPermissions$9 = {
  title: "Beszerzési korlátok kezelése",
  subtitle: "Felhasználó: {{ item.name }}",
  assigned: "A beszerzési korlát ({{ item.code }}) hozzárendelése sikeres",
  unassigned: "A beszerzési korlát {{ item.code }} hozzárendelésének megszüntetése sikeres"
};
var orgUserAssignedPermissions$9 = {
  title: "Hozzárendelt beszerzési korlátok",
  subtitle: "Felhasználó: {{ item.name }}",
  assigned: "A beszerzési korlát ({{ item.code }}) hozzárendelése sikeres",
  unassigned: "A beszerzési korlát {{ item.code }} hozzárendelésének megszüntetése sikeres"
};
var orgPurchaseLimit$9 = {
  groupName: "Beszerzési korlátok",
  header: "Összes beszerzési korlát ({{count}})",
  name: "Név",
  code: "Kód",
  active: "Státus",
  limit: "Korlát",
  orderApprovalPermissionType: "Típus",
  threshold: "Küszöb",
  periodRange: "Időszak",
  currency: "Pénznem",
  orgUnit: "Fölérendelt egység",
  unit: "Fölérendelt egység",
  actions: "",
  hint: "A beszerzési korlátok segítenek felügyelni a kiadásokat annak definiálásával, hogy a beszerzők mennyit költhetnek rendelésenként vagy hetente, havonta, negyedévente vagy évente. A beszerzési korlátokat felhasználókhoz vagy felhasználócsoportokhoz lehet hozzárendelni. A jóváhagyókhoz rendelt beszerzési korlát azt határozza meg, hogy mekkora összeg jóváhagyására jogosultak. A felhasználócsoportokkal egyszerre több felhasználóhoz is hozzárendelhet beszerzési korlátokat.",
  details: {
    title: "Beszerzési korlát részletei",
    subtitle: "Beszerzési korlát: {{ item.code }}"
  },
  edit: {
    title: "Beszerzési korlát szerkesztése",
    subtitle: "Beszerzési korlátok: {{ item.code }}"
  },
  create: {
    title: "Beszerzési korlát létrehozása",
    subtitle: ""
  },
  sortBy: "Rendezés alapja",
  sort: {
    byName: "Név",
    byUnitName: "Egység"
  },
  messages: {
    deactivateTitle: "Letiltja ezt a beszerzési korlátot?",
    deactivate: "A letiltott beszerzési korlátok nem rendelhetők hozzá felhasználóhoz vagy felhasználócsoporthoz. A jelenlegi hozzárendelésekre ez nincs hatással.",
    confirmEnabled: "A beszerzési korlát ({{ item.code }}) engedélyezése sikeres",
    confirmDisabled: "A beszerzési korlát ({{ item.code }}) letiltása sikeres",
    update: "A beszerzési korlát ({{ item.code }}) frissítése sikeres",
    create: "A beszerzési korlát ({{ item.code }}) létrehozása sikeres"
  },
  info: {
    disabledEdit: "A szerkesztés a beszerzési korlát engedélyezése után válik elérhetővé.",
    disabledEnable: "A beszerzési korlát engedélyezéséhez először engedélyezni kell az egységet."
  },
  per: {
    DAY: "naponta",
    WEEK: "hetente",
    MONTH: "havonta",
    QUARTER: "negyedévente",
    YEAR: "évente"
  },
  breadcrumbs: {
    list: "Összes beszerzési korlát",
    details: "{{code}}"
  }
};
var organization$j = {
  organization: organization$i,
  orgCostCenter: orgCostCenter$9,
  orgCostCenterBudgets: orgCostCenterBudgets$9,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$9,
  orgBudget: orgBudget$9,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$9,
  orgUnit: orgUnit$9,
  orgUnitChildren: orgUnitChildren$9,
  orgUnitApprovers: orgUnitApprovers$9,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$9,
  orgUnitAssignedRoles: orgUnitAssignedRoles$9,
  orgUnitUsers: orgUnitUsers$9,
  orgUnitUserRoles: orgUnitUserRoles$9,
  orgUnitAssignedUsers: orgUnitAssignedUsers$9,
  orgUnitCostCenters: orgUnitCostCenters$9,
  orgUnitAddress: orgUnitAddress$9,
  orgUserGroup: orgUserGroup$9,
  orgUserGroupUsers: orgUserGroupUsers$9,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$9,
  orgUserGroupPermissions: orgUserGroupPermissions$9,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$9,
  orgUser: orgUser$9,
  orgUserUserGroups: orgUserUserGroups$9,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$9,
  orgUserApprovers: orgUserApprovers$9,
  orgUserAssignedApprovers: orgUserAssignedApprovers$9,
  orgUserPermissions: orgUserPermissions$9,
  orgUserAssignedPermissions: orgUserAssignedPermissions$9,
  orgPurchaseLimit: orgPurchaseLimit$9
};
var hu = {
  organization: organization$j
};
var organization$g = {
  enabled: "Aktif",
  disabled: "Dinonaktifkan",
  enable: "Aktifkan",
  disable: "Nonaktifkan",
  name: "Nama",
  code: "Kode",
  done: "selesai",
  cancel: "Batalkan",
  add: "Tambahkan",
  manageUsers: "Kelola Pengguna",
  create: "Buat {{name}}",
  edit: "Edit",
  save: "Simpan {{name}}",
  "delete": "Hapus",
  assign: "Kelola",
  active: "Aktif",
  status: "Status",
  details: "Rincian",
  messages: {
    emptyList: "Daftar kosong"
  },
  userRoles: {
    b2bcustomergroup: "Pelanggan",
    b2bapprovergroup: "Penyetuju",
    b2bmanagergroup: "Manajer",
    b2badmingroup: "Admin"
  },
  userRights: {
    unitorderviewergroup: "Lihat Pesanan Pada Tingkat Unit"
  },
  breadcrumb: "Organisasi",
  notification: {
    noSufficientPermissions: "Tidak memiliki izin yang memadai untuk mengakses halaman ini",
    notExist: "Item ini tidak ada",
    disabled: "Anda tidak dapat mengedit item yang dinonaktifkan"
  },
  confirmation: {
    cancel: "BATALKAN",
    confirm: "KONFIRMASI",
    disable: "NONAKTIFKAN",
    "delete": "HAPUS"
  },
  httpHandlers: {
    conflict: {
      budget: "Kode anggaran {{ code }} sudah ada.",
      costCenter: "Kode pusat biaya {{ code }} sudah ada.",
      unit: "Uid unit organisasi {{ code }} sudah ada.",
      user: "Email pengguna {{ code }} sudah ada.",
      userGroup: "Id Grup Pengguna {{ code }} sudah ada.",
      permission: "Kode Izin Persetujuan {{ code }} sudah ada.",
      unknown: "Kesalahan validasi server."
    }
  },
  information: "Informasi selengkapnya tentang {{title}}"
};
var orgCostCenter$8 = {
  groupName: "Pusat Biaya",
  header: "Semua Pusat Biaya ({{count}})",
  code: "Kode",
  active: "Status",
  name: "Nama",
  currency: "Mata Uang",
  unit: "Unit Induk",
  actions: "",
  sortBy: "Urutkan berdasarkan",
  sort: {
    byName: "Nama",
    byUnitName: "Unit",
    byCode: "Kode"
  },
  hint: "Semua pemesanan yang dilakukan melalui akun pembelian organisasi Anda tertaut dengan pusat biaya untuk tujuan pelacakan. Setiap unit dapat memiliki lebih dari satu pusat biaya. Untuk membatasi pengeluaran, anggaran ditetapkan pada pusat biaya. Pembeli memilih pusat biaya saat akan melakukan pembayaran.",
  disable: {
    confirm: "Nonaktifkan"
  },
  messages: {
    deactivateTitle: "Nonaktifkan pusat biaya ini?",
    deactivate: "Pusat biaya yang dinonaktifkan tidak dapat digunakan untuk melakukan pemesanan baru. Pastikan bahwa unit Anda memiliki setidaknya satu pusat biaya. Pemesanan yang sudah ada tidak terpengaruh.",
    confirmEnabled: "Pusat Biaya {{ item.name }} berhasil diaktifkan",
    confirmDisabled: "Pusat Biaya {{ item.name }} berhasil dinonaktifkan",
    update: "Pusat Biaya {{ item.name }} berhasil diperbarui",
    create: "Pusat Biaya {{ item.name }} berhasil dibuat"
  },
  info: {
    disabledEdit: "Aktifkan pusat biaya untuk mengizinkan pengeditan.",
    disabledEnable: "Unit harus diaktifkan terlebih dahulu sebelum pusat biaya ini dapat diaktfikan."
  },
  details: {
    title: "Rincian Pusat Biaya",
    subtitle: "Pusat Biaya: {{ item.name }}"
  },
  edit: {
    title: "Edit Pusat Biaya",
    subtitle: "Pusat Biaya: {{ item.name }}"
  },
  create: {
    title: "Buat Pusat Biaya",
    subtitle: ""
  },
  budget: {
    link: "Anggaran"
  },
  breadcrumbs: {
    list: "Semua pusat biaya",
    details: "{{name}}",
    budgets: "Anggaran"
  }
};
var orgCostCenterBudgets$8 = {
  title: "Kelola anggaran",
  subtitle: "Pusat Biaya: {{ item.name }}",
  assigned: "Anggaran {{ item.name }} berhasil ditetapkan",
  unassigned: "Anggaran {{ item.name }} berhasil dibatalkan penetapannya"
};
var orgCostCenterAssignedBudgets$8 = {
  title: "Anggaran yang ditetapkan",
  subtitle: "Pusat Biaya: {{ item.name }}",
  assigned: "Anggaran {{ item.name }} berhasil ditetapkan",
  unassigned: "Anggaran {{ item.name }} berhasil dibatalkan penetapannya"
};
var orgBudget$8 = {
  groupName: "Anggaran",
  header: "Semua anggaran ({{count}})",
  code: "Kode",
  name: "Nama",
  active: "Status",
  currency: "Mata Uang",
  amount: "Jumlah",
  unit: "Unit",
  businessUnits: "Unit",
  dateRange: "Mulai - Berakhir",
  startDate: "Mulai",
  endDate: "Berakhir",
  actions: "",
  sortBy: "Urutkan berdasarkan",
  sort: {
    byName: "Nama",
    byUnitName: "Unit",
    byCode: "Kode",
    byValue: "Nilai"
  },
  hint: "Anggaran mengatur batas pembelian secara keseluruhan dan ditetapkan pada pusat biaya. Pembeli memilih pusat biaya saat akan melakukan pembayaran.",
  details: {
    title: "Rincian Anggaran",
    subtitle: "Anggaran: {{ item.name }}"
  },
  edit: {
    title: "Edit Anggaran",
    subtitle: "Anggaran: {{ item.name }}"
  },
  create: {
    title: "Buat Anggaran",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Nonaktifkan anggaran ini?",
    deactivate: "Anggaran yang dinonaktifkan sudah tidak berlaku untuk pusat biaya tempat ditetapkannya anggaran tersebut. Pastikan bahwa pusat biaya terkait tersebut memiliki setidaknya satu anggaran.",
    confirmEnabled: "Anggaran {{ item.name }} berhasil diaktifkan",
    confirmDisabled: "Anggaran {{ item.name }} berhasil dinonaktifkan",
    update: "Anggaran {{ item.name }} berhasil diperbarui",
    create: "Anggaran {{ item.name }} berhasil dibuat"
  },
  info: {
    disabledEdit: "Aktifkan anggaran untuk mengizinkan pengeditan.",
    disabledEnable: "Unit harus diaktifkan terlebih dahulu sebelum anggaran ini dapat diaktfikan."
  },
  links: {
    costCenters: "Pusat Biaya"
  },
  breadcrumbs: {
    list: "Semua anggaran",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$8 = {
  title: "Pusat biaya",
  subtitle: "Anggaran: {{ item.name }}"
};
var orgUnit$8 = {
  groupName: "Unit",
  header: "Semua unit ({{count}})",
  unit: "Unit",
  name: "Nama",
  uid: "ID",
  approvalProcess: "Proses persetujuan",
  parentUnit: "Unit Induk",
  active: "Status",
  hint: "Unit mewakili departemen, toko, wilayah, atau pengelompokan logis apa pun lainnya yang sesuai dengan kebutuhan Anda. Pusat biaya dan alamat pengiriman yang tersedia bagi pembeli saat melakukan pembayaran bergantung pada unitnya. Pembeli memiliki akses ke semua unit turunan dari unit utamanya.",
  details: {
    title: "Rincian Unit",
    subtitle: "Unit: {{ item.name }}",
    hint: "Unit mewakili departemen, toko, wilayah, atau pengelompokan logis apa pun lainnya yang sesuai dengan kebutuhan Anda. Penonaktifan unit akan menonaktifkan semua turunan unit, termasuk unit turunan, pengguna, penyetuju, dan pusat biaya. Unit yang dinonaktifkan tidak dapat diedit."
  },
  edit: {
    title: "Edit Unit",
    subtitle: "Unit: {{ item.name }}"
  },
  create: {
    title: "Buat Unit",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Nonaktifkan unit ini?",
    deactivate: "Menonaktikan unit akan berdampak luas pada organisasi perdagangan Anda. SEMUA unit turunan, pengguna, anggaran, dan pusat biaya dari unit tersebut juga akan dinonaktifkan.",
    confirmEnabled: "Unit {{ item.name }} berhasil diaktifkan",
    confirmDisabled: "Unit {{ item.name }} berhasil dinonaktifkan",
    update: "Unit {{ item.name }} berhasil diperbarui",
    create: "Unit {{ item.name }} berhasil dibuat"
  },
  info: {
    disabledEdit: "Aktifkan unit untuk mengizinkan pengeditan.",
    disabledEnable: "Induk harus diaktifkan terlebih dahulu sebelum unit ini dapat diaktifkan.",
    disabledDisable: "Unit utama tidak dapat dinonaktifkan."
  },
  links: {
    units: "Unit Turunan",
    users: "Pengguna",
    approvers: "Penyetuju",
    shippingAddresses: "Alamat Pengiriman",
    costCenters: "Pusat Biaya"
  },
  tree: {
    expandAll: "Perluas semua",
    collapseAll: "Ciutkan semua",
    expand: "Perluas",
    collapse: "ciutkan",
    explore: "Jelajahi subunit"
  },
  children: {
    create: {
      title: "Buat unit turunan",
      subtitle: ""
    },
    messages: {
      create: "Unit {{ item.name }} berhasil dibuat"
    }
  },
  costCenters: {
    create: {
      title: "Buat pusat biaya",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Unit bisnis induk",
    create: "Buat Unit",
    parentOrgUnitNotes: "Unit ini merupakan unit tingkat teratas bagi organisasi Anda. Unit ini tidak dapat ditetapkan ke unit lainnya."
  },
  users: {
    header: "Pengguna dalam kode {{code}}",
    changeUserRoles: "Ubah peran pengguna",
    newUser: "Pengguna baru"
  },
  assignRoles: {
    header: "Kelola peran dalam kode {{code}}",
    instructions: {
      check: "Untuk menetapkan peran ke pengguna, pilih kotak centang peran tersebut.",
      uncheck: "Untuk menghapus peran, hapus centang pada kotak peran tersebut.",
      changes: "Perubahan akan disimpan secara otomatis."
    }
  },
  approvers: {
    header: "Penyetuju dalam kode {{code}}",
    assign: "Kelola penyetuju",
    "new": "Penyetuju baru"
  },
  assignApprovers: {
    header: "Kelola penyetuju dalam kode {{code}}",
    instructions: {
      check: "Untuk menetapkan penyetuju pada unit ini, pilih kotak centang pengguna tersebut.",
      uncheck: "Untuk menghapus penyetuju, hapus centang pada kotak pengguna tersebut.",
      changes: "Perubahan akan disimpan secara otomatis."
    },
    hint: "Pengguna yang ditampilkan dalam daftar Penyetuju diberi hak istimewa untuk menyetujui pembelian oleh pembeli dari unit ini dan unit turunannya. Perlu dicatat bahwa pengguna yang memiliki peran sebagai penyetuju berbeda dengan penyetuju yang muncul dalam daftar Penyetuju. Jika penyetuju tidak ditemukan untuk suatu unit, atau jika penyetuju tidak diberi hak istimewa yang memadai untuk menyetujui pembelian, penyetuju di tingkat yang lebih tinggi dalam hierarki unit akan dicari hingga ditemukan seorang administrator yang dipilih."
  },
  breadcrumbs: {
    list: "Semua unit",
    details: "{{name}}",
    children: "Unit turunan",
    users: "Pengguna",
    approvers: "Penyetuju",
    addresses: "Alamat pengiriman",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Pusat Biaya"
  }
};
var orgUnitChildren$8 = {
  title: "Unit turunan",
  subtitle: "Unit: {{ item.name }}",
  info: {
    disabledCreate: "Unit turunan tidak dapat dibuat untuk unit yang dinonaktifkan."
  },
  hint: 'Unit mewakili departemen, toko, wilayah, atau pengelompokan logis apa pun lainnya yang sesuai dengan kebutuhan Anda. Pengguna akan "mewarisi" unit turunan, yang berarti pembeli memiliki akses ke pusat biaya dan alamat pengiriman dari unit turunan saat akan melakukan pembayaran.'
};
var orgUnitApprovers$8 = {
  title: "Kelola penyetuju",
  subtitle: "Unit: {{ item.name }}",
  assigned: "Pengguna {{ item.name }} berhasil ditetapkan",
  unassigned: "Pengguna {{ item.name }} berhasil dibatalkan penetapannya"
};
var orgUnitAssignedApprovers$8 = {
  title: "Penyetuju yang ditetapkan",
  subtitle: "Unit: {{ item.name }}",
  assigned: "Pengguna {{ item.name }} berhasil ditetapkan",
  unassigned: "Pengguna {{ item.name }} berhasil dibatalkan penetapannya",
  hint: "Pengguna yang ditampilkan dalam daftar Penyetuju diberi hak istimewa untuk menyetujui pembelian oleh pembeli dari unit ini dan unit turunannya. Perlu dicatat bahwa pengguna yang memiliki peran sebagai penyetuju berbeda dengan penyetuju yang muncul dalam daftar Penyetuju. Jika penyetuju tidak ditemukan untuk suatu unit, atau jika penyetuju tidak diberi hak istimewa yang memadai untuk menyetujui pembelian, penyetuju di tingkat yang lebih tinggi dalam hierarki unit akan dicari hingga ditemukan seorang administrator yang dipilih."
};
var orgUnitAssignedRoles$8 = {
  header: "Kelola peran dalam kode {{code}}",
  name: "Nama",
  email: "Email",
  roles: "Peran",
  roleCustomer: "Pelanggan",
  roleApprover: "Penyetuju",
  roleManager: "Manajer",
  roleAdministrator: "Admin"
};
var orgUnitUsers$8 = {
  title: "Pengguna yang ditetapkan",
  subtitle: "Unit: {{ item.name }}",
  info: {
    disabledCreate: "Pengguna tidak dapat dibuat untuk unit yang dinonaktifkan."
  },
  hint: 'Pengguna merupakan pembeli, penyetuju, manajer, dan administrator organisasi Anda. Setiap pengguna akan ditetapkan suatu peran untuk melakukan atau menyetujui pembelian. Pengguna "mewarisi" unit turunan, yang berarti pembeli memiliki akses ke pusat biaya dan alamat pengiriman dari unit turunan saat akan melakukan pembayaran.'
};
var orgUnitUserRoles$8 = {
  title: "Peran dan hak pengguna",
  subtitle: "Pengguna: {{ item.name }}",
  messages: {
    rolesUpdated: "Peran berhasil diperbarui untuk {{item.name}}"
  }
};
var orgUnitAssignedUsers$8 = {
  title: "Pengguna yang ditetapkan",
  subtitle: "Unit: {{ item.name }}"
};
var orgUnitCostCenters$8 = {
  title: "Pusat biaya yang ditetapkan",
  subtitle: "Unit: {{ item.name }}",
  info: {
    disabledCreate: "Pusat biaya tidak dapat dibuat untuk unit yang dinonaktifkan."
  },
  hint: 'Semua pemesanan yang dilakukan melalui akun pembelian organisasi Anda tertaut dengan pusat biaya untuk tujuan pelacakan. Pembeli memilih pusat biaya saat akan melakukan pembayaran menggunakan metode pembelian "Akun". Setiap unit dapat memiliki lebih dari satu pusat biaya, tetapi satu pusat biaya hanya dapat ditetapkan pada satu unit. Untuk menentukan batas pengeluaran maksimum, anggaran ditetapkan pada pusat biaya. '
};
var orgUnitAddress$8 = {
  title: "Alamat pengiriman",
  subtitle: "Unit: {{ item.name }}",
  country: "Negara/Wilayah",
  titles: "Gelar",
  firstName: "Nama depan",
  lastName: "Nama belakang",
  formattedAddress: "Alamat",
  address1: "Alamat",
  address2: "Alamat kedua (opsional)",
  city: "Kota",
  state: "Negara Bagian",
  zipCode: "Kode pos",
  phoneNumber: "Nomor telepon (opsional)",
  streetAddress: "Alamat Jalan",
  aptSuite: "Nomor Apartemen",
  selectOne: "Pilih Satu...",
  hint: 'Jika pembeli melakukan pembayaran dengan metode pembelian "Akun", pembeli harus memilih pusat biaya. Alamat pengiriman yang tersedia bagi pembeli bergantung pada unit pusat biaya yang dipilih.',
  details: {
    title: "Rincian alamat",
    subtitle: "Unit: {{ item.name }}"
  },
  edit: {
    title: "Edit Alamat"
  },
  create: {
    title: "Buat Alamat"
  },
  form: {
    subtitle: "Unit: {{ item.name }}"
  },
  messages: {
    create: "Alamat {{ item.firstName }} {{ item.lastName }} berhasil dibuat",
    update: "Alamat {{ item.firstName }} {{ item.lastName }} berhasil diperbarui",
    "delete": "Alamat tidak dapat dipulihkan. Pemesanan yang sudah ada tidak terpengaruh.",
    deleteTitle: "Hapus alamat ini?",
    deleted: "Alamat {{ item.firstName }} {{ item.lastName }} berhasil dihapus"
  }
};
var orgUserGroup$8 = {
  groupName: "Grup Pengguna",
  header: "Semua grup pengguna ({{count}})",
  disabled: "(dinonaktifkan)",
  uid: "Kode",
  name: "Nama",
  unit: "Unit",
  orgUnit: "Unit",
  actions: "",
  sortBy: "Urutkan berdasarkan",
  sort: {
    byName: "Nama",
    byUnitName: "Unit",
    byGroupID: "Grup"
  },
  hint: "Grup pengguna memungkinkan Anda untuk menggabungkan pengguna dalam satu grup yang bertujuan untuk menetapkan batas pembelian bagi banyak pengguna sekaligus.",
  details: {
    title: "Rincian Grup pengguna",
    subtitle: "Grup pengguna: {{ item.name }}"
  },
  edit: {
    title: "Edit Grup pengguna",
    subtitle: "Grup pengguna: {{ item.name }}"
  },
  create: {
    title: "Buat Grup pengguna",
    subtitle: ""
  },
  links: {
    user: "Pengguna",
    permission: "Batas pembelian"
  },
  messages: {
    update: "Grup Pengguna {{ item.name }} berhasil diperbarui",
    create: "Grup Pengguna {{ item.name }} berhasil dibuat",
    deleteTitle: "Hapus grup pengguna ini?",
    "delete": "Pengguna dalam grup ini tidak terdampak jika grup pengguna dihapus.",
    deleted: "Grup Pengguna {{ item.name }} berhasil dihapus"
  },
  breadcrumbs: {
    list: "Semua grup pengguna",
    details: "{{name}}",
    users: "Pengguna",
    permissions: "Batas pembelian"
  }
};
var orgUserGroupUsers$8 = {
  title: "Kelola pengguna",
  subtitle: "Grup pengguna: {{ item.name }}",
  assigned: "Pengguna {{ item.name }} berhasil ditetapkan",
  unassigned: "Pengguna {{ item.name }} berhasil dibatalkan penetapannya",
  unassignAll: "Batal Tetapkan Semua",
  unassignAllConfirmation: "Semua pengguna berhasil dibatalkan penetapannya"
};
var orgUserGroupAssignedUsers$8 = {
  title: "Pengguna yang ditetapkan",
  subtitle: "Grup pengguna: {{ item.name }}",
  assigned: "Pengguna {{ item.name }} berhasil ditetapkan",
  unassigned: "Pengguna {{ item.name }} berhasil dibatalkan penetapannya"
};
var orgUserGroupPermissions$8 = {
  title: "Kelola batas pembelian",
  subtitle: "Batas: {{ item.name }}",
  assigned: "Batas pembelian {{item.code}} berhasil ditetapkan",
  unassigned: "Batas pembelian {{item.code}} berhasil dibatalkan penetapannya"
};
var orgUserGroupAssignedPermissions$8 = {
  title: "Batas pembelian yang ditetapkan",
  subtitle: "Batas: {{ item.name }}",
  assigned: "Batas pembelian {{item.code}} berhasil ditetapkan",
  unassigned: "Batas pembelian {{item.code}} berhasil dibatalkan penetapannya"
};
var orgUser$8 = {
  groupName: "Pengguna",
  header: "Semua pengguna ({{count}})",
  disabled: "(dinonaktifkan)",
  uid: "Email",
  active: "Status",
  name: "Nama",
  firstName: "Nama depan",
  lastName: "Nama belakang",
  email: "Email",
  orgUnit: "Unit",
  unit: "Unit",
  roles: "Peran",
  rights: "Hak",
  title: "Gelar",
  hint: "Pengguna merupakan pembeli, penyetuju, manajer, dan administrator organisasi Anda. Setiap pengguna akan ditetapkan suatu peran untuk melakukan atau menyetujui pembelian. Setiap pengguna tergabung dalam suatu unit dan memiliki akses ke semua unit turunan dari unit utama mereka.",
  unitApprover: "Penyetuju unit",
  assignApprover: "Tambahkan pengguna ke penyetuju unit",
  actions: "",
  sortBy: "Urutkan berdasarkan",
  sort: {
    byName: "Nama",
    byUnit: "Unit"
  },
  details: {
    title: "Rincian Pengguna",
    subtitle: "Pengguna: {{ item.name }}"
  },
  edit: {
    title: "Edit Pengguna",
    subtitle: "Pengguna: {{ item.name }}"
  },
  create: {
    title: "Buat Pengguna",
    subtitle: ""
  },
  links: {
    password: "Ubah kata sandi",
    approvers: "Penyetuju",
    userGroup: "Grup pengguna",
    permission: "Batas pembelian",
    rolesAndRights: "Peran dan Hak"
  },
  messages: {
    deactivateTitle: "Nonaktifkan pengguna ini?",
    deactivate: "Pengguna yang dinonaktifkan tidak dapat masuk ke etalase dan melakukan pemesanan.",
    confirmEnabled: "Pengguna {{item.firstName}} {{item.lastName}} berhasil diaktifkan",
    confirmDisabled: "Pengguna {{item.firstName}} {{item.lastName}} berhasil dinonaktifkan",
    update: "Pengguna {{item.firstName}} {{item.lastName}} berhasil diperbarui",
    create: "Pengguna {{item.firstName}} {{item.lastName}} berhasil dibuat",
    updatePassword: "Kata sandi pengguna {{item.firstName}} {{item.lastName}} berhasil diperbarui"
  },
  info: {
    disabledEdit: "Aktifkan pengguna untuk mengizinkan pengeditan.",
    disabledEnable: "Unit harus diaktifkan terlebih dahulu sebelum pengguna ini dapat diaktfikan."
  },
  approver: {
    link: "Penyetuju",
    header: "Penyetuju dalam kode {{code}}",
    assign: "Tetapkan Penyetuju",
    assignHeader: "Tetapkan Penyetuju dalam kode {{code}}",
    back: "Kembali",
    "new": "Penyetuju baru",
    instructions: {
      check: "Untuk menetapkan penyetuju pada pengguna ini, pilih kotak centang pengguna tersebut.",
      uncheck: "Untuk menghapus penyetuju, hapus centang pada kotak pengguna tersebut.",
      changes: "Perubahan akan disimpan secara otomatis."
    }
  },
  userGroup: {
    link: "Grup pengguna",
    header: "Grup pengguna dalam kode {{code}}",
    assign: "Tetapkan grup pengguna",
    assignHeader: "Tetapkan grup pengguna dalam kode {{code}}",
    back: "Kembali",
    instructions: {
      check: "Untuk menetapkan grup pengguna ke pengguna ini, pilih kotak centang pengguna tersebut.",
      uncheck: "Untuk menghapus grup pengguna, hapus centang pada kotak pengguna tersebut.",
      changes: "Perubahan akan disimpan secara otomatis."
    }
  },
  permission: {
    link: "Batas pembelian",
    header: "Batas pembelian dalam kode {{code}}",
    assign: "Tetapkan batas pembelian",
    assignHeader: "Tetapkan batas pembelian dalam kode {{code}}",
    back: "Kembali",
    instructions: {
      check: "Untuk menetapkan batas pembelian pada pengguna ini, pilih kotak centang tersebut.",
      uncheck: "Untuk membatalkan penetapan batas pembelian, hapus centang pada kotak tersebut.",
      changes: "Perubahan akan disimpan secara otomatis."
    },
    per: {
      "undefined": "",
      MONTH: "setiap Bulan",
      YEAR: "setiap Tahun",
      WEEK: "setiap Minggu",
      QUARTER: "setiap Triwulan"
    }
  },
  password: {
    title: "Ubah kata sandi",
    subtitle: "Pengguna: {{ item.name }}",
    newPassword: "Kata sandi baru",
    confirmPassword: "Ketik ulang kata sandi baru"
  },
  breadcrumbs: {
    list: "Semua pengguna",
    details: "{{name}}",
    userGroups: "Grup pengguna",
    approvers: "Penyetuju",
    permissions: "Batas pembelian"
  }
};
var orgUserUserGroups$8 = {
  title: "Kelola grup pengguna",
  subtitle: "Pengguna: {{ item.name }}",
  assigned: "Grup pengguna {{item.name}} berhasil ditetapkan",
  unassigned: "Grup pengguna {{item.name}} berhasil dibatalkan penetapannya"
};
var orgUserAssignedUserGroups$8 = {
  title: "Grup pengguna yang ditetapkan",
  subtitle: "Pengguna: {{ item.name }}",
  assigned: "Grup pengguna {{item.name}} berhasil ditetapkan",
  unassigned: "Grup pengguna {{item.name}} berhasil dibatalkan penetapannya"
};
var orgUserApprovers$8 = {
  title: "Kelola penyetuju",
  subtitle: "Pengguna: {{ item.name }}",
  assigned: "Penyetuju {{ item.name }} berhasil ditetapkan",
  unassigned: "Penyetuju {{ item.name }} berhasil dibatalkan penetapannya"
};
var orgUserAssignedApprovers$8 = {
  title: "Penyetuju yang ditetapkan",
  subtitle: "Pengguna: {{ item.name }}",
  assigned: "Penyetuju {{ item.name }} berhasil ditetapkan",
  unassigned: "Penyetuju {{ item.name }} berhasil dibatalkan penetapannya"
};
var orgUserPermissions$8 = {
  title: "Kelola batas pembelian",
  subtitle: "Pengguna: {{ item.name }}",
  assigned: "Batas pembelian {{ item.code }} berhasil ditetapkan",
  unassigned: "Batas pembelian {{ item.code }} berhasil dibatalkan penetapannya"
};
var orgUserAssignedPermissions$8 = {
  title: "Batas pembelian yang ditetapkan",
  subtitle: "Pengguna: {{ item.name }}",
  assigned: "Batas pembelian {{ item.code }} berhasil ditetapkan",
  unassigned: "Batas pembelian {{ item.code }} berhasil dibatalkan penetapannya"
};
var orgPurchaseLimit$8 = {
  groupName: "Batas Pembelian",
  header: "Semua batas pembelian ({{count}})",
  name: "Nama",
  code: "Kode",
  active: "Status",
  limit: "Batas",
  orderApprovalPermissionType: "Tipe",
  threshold: "Ambang Batas",
  periodRange: "Periode",
  currency: "Mata Uang",
  orgUnit: "Unit Induk",
  unit: "Unit Induk",
  actions: "",
  hint: "Batas pembelian membantu mengendalikan pengeluaran dengan menentukan seberapa banyak yang dapat dibelanjakan oleh pembeli setiap pemesanan atau setiap minggu, bulan, triwulan, atau tahun. Batas pembelian ditetapkan pada pengguna individu atau grup pengguna. Batas pembelian juga ditetapkan pada penyetuju yang menentukan seberapa banyak yang dapat mereka setujui. Anda dapat menetapkan batas pembelian bagi banyak pengguna sekaligus dengan grup pengguna.",
  details: {
    title: "Rincian Batas Pembelian",
    subtitle: "Batas Pembelian: {{ item.code }}"
  },
  edit: {
    title: "Edit Batas Pembelian",
    subtitle: "Batas pembelian: {{ item.code }}"
  },
  create: {
    title: "Buat Batas Pembelian",
    subtitle: ""
  },
  sortBy: "Urutkan berdasarkan",
  sort: {
    byName: "Nama",
    byUnitName: "Unit"
  },
  messages: {
    deactivateTitle: "Nonaktifkan batas pembelian ini?",
    deactivate: "Batas pembelian yang dinonaktifkan sudah tidak bisa lagi ditetapkan ke pengguna individu atau grup pengguna. Penetapan saat ini tidak akan terdampak.",
    confirmEnabled: "Batas Pembelian {{ item.code }} berhasil diaktifkan",
    confirmDisabled: "Batas Pembelian {{ item.code }} berhasil dinonaktifkan",
    update: "Batas Pembelian {{ item.code }} berhasil diperbarui",
    create: "Batas Pembelian {{ item.code }} berhasil dibuat"
  },
  info: {
    disabledEdit: "Aktifkan batas pembelian untuk mengizinkan pengeditan.",
    disabledEnable: "Unit harus diaktifkan terlebih dahulu sebelum batas pembelian ini dapat diaktifkan."
  },
  per: {
    DAY: "setiap hari",
    WEEK: "setiap minggu",
    MONTH: "setiap bulan",
    QUARTER: "setiap triwulan",
    YEAR: "setiap tahun"
  },
  breadcrumbs: {
    list: "Semua batas pembelian",
    details: "{{code}}"
  }
};
var organization$h = {
  organization: organization$g,
  orgCostCenter: orgCostCenter$8,
  orgCostCenterBudgets: orgCostCenterBudgets$8,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$8,
  orgBudget: orgBudget$8,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$8,
  orgUnit: orgUnit$8,
  orgUnitChildren: orgUnitChildren$8,
  orgUnitApprovers: orgUnitApprovers$8,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$8,
  orgUnitAssignedRoles: orgUnitAssignedRoles$8,
  orgUnitUsers: orgUnitUsers$8,
  orgUnitUserRoles: orgUnitUserRoles$8,
  orgUnitAssignedUsers: orgUnitAssignedUsers$8,
  orgUnitCostCenters: orgUnitCostCenters$8,
  orgUnitAddress: orgUnitAddress$8,
  orgUserGroup: orgUserGroup$8,
  orgUserGroupUsers: orgUserGroupUsers$8,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$8,
  orgUserGroupPermissions: orgUserGroupPermissions$8,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$8,
  orgUser: orgUser$8,
  orgUserUserGroups: orgUserUserGroups$8,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$8,
  orgUserApprovers: orgUserApprovers$8,
  orgUserAssignedApprovers: orgUserAssignedApprovers$8,
  orgUserPermissions: orgUserPermissions$8,
  orgUserAssignedPermissions: orgUserAssignedPermissions$8,
  orgPurchaseLimit: orgPurchaseLimit$8
};
var id = {
  organization: organization$h
};
var organization$e = {
  enabled: "Attivo",
  disabled: "Disattivato",
  enable: "Attiva",
  disable: "Disattiva",
  name: "Nome",
  code: "Codice",
  done: "fine",
  cancel: "Annulla",
  add: "Aggiungi",
  manageUsers: "Gestisci utenti",
  create: "Crea {{name}}",
  edit: "Modifica",
  save: "Salva {{name}}",
  "delete": "Elimina",
  assign: "Gestisci",
  active: "Attivo",
  status: "Stato",
  details: "Dettagli",
  messages: {
    emptyList: "La lista è vuota"
  },
  userRoles: {
    b2bcustomergroup: "Cliente",
    b2bapprovergroup: "Approvatore",
    b2bmanagergroup: "Responsabile",
    b2badmingroup: "Amministratore"
  },
  userRights: {
    unitorderviewergroup: "Visualizza ordini a livello di unità"
  },
  breadcrumb: "Organizzazione",
  notification: {
    noSufficientPermissions: "Autorizzazioni insufficienti per accedere a questa pagina",
    notExist: "Questo articolo non esiste",
    disabled: "Non è possibile modificare un articolo disattivato"
  },
  confirmation: {
    cancel: "ANNULLA",
    confirm: "CONFERMA",
    disable: "DISATTIVA",
    "delete": "ELIMINA"
  },
  httpHandlers: {
    conflict: {
      budget: "Budget con codice {{ code }} già esistente.",
      costCenter: "Centro di costo con codice {{ code }} già esistente.",
      unit: "Unità organizzativa con UID {{ code }} già esistente.",
      user: "Utente con e-mail {{ code }} già esistente",
      userGroup: "Gruppo di utenti con ID {{ code }} già esistente",
      permission: "Autorizzazione di approvazione con codice {{ code }} già esistente.",
      unknown: "Errore di convalida del server."
    }
  },
  information: "Ulteriori informazioni su {{title}}"
};
var orgCostCenter$7 = {
  groupName: "Centri di costo",
  header: "Tutti i centri di costo ({{count}})",
  code: "Codice",
  active: "Stato",
  name: "Nome",
  currency: "Valuta",
  unit: "Unità sovraordinata",
  actions: "",
  sortBy: "Ordina per",
  sort: {
    byName: "Nome",
    byUnitName: "Unità",
    byCode: "Codice"
  },
  hint: "Tutti gli ordini effettuati tramite l'account acquisti dell'organizzazione sono collegati a un centro di costo a scopo di tracciamento. Ogni unità può avere più centri di costo. Per limitare le spese, ai centri di costo vengono assegnati i budget. Un acquirente seleziona un centro di costo in fase di check-out.",
  disable: {
    confirm: "Disattiva"
  },
  messages: {
    deactivateTitle: "Disattivare questo centro di costo?",
    deactivate: "I centri di costo disattivati non possono essere utilizzati per effettuare nuovi ordini. Assicurarsi che l'unità abbia almeno un centro di costo. Gli ordini esistenti non vengono interessati.",
    confirmEnabled: "Centro di costo {{ item.name }} attivato correttamente",
    confirmDisabled: "Centro di costo {{ item.name }} disattivato correttamente",
    update: "Centro di costo {{ item.name }} aggiornato correttamente",
    create: "Centro di costo {{ item.name }} creato correttamente"
  },
  info: {
    disabledEdit: "Attivare il centro di costo per consentire la modifica.",
    disabledEnable: "Prima di poter attivare questo centro di costo è necessario attivare l'unità."
  },
  details: {
    title: "Dettagli centro di costo",
    subtitle: "Centro di costo: {{ item.name }}"
  },
  edit: {
    title: "Modifica centro di costo",
    subtitle: "Centro di costo: {{ item.name }}"
  },
  create: {
    title: "Crea centro di costo",
    subtitle: ""
  },
  budget: {
    link: "Budgets"
  },
  breadcrumbs: {
    list: "Tutti i centri di costo",
    details: "{{name}}",
    budgets: "Budgets"
  }
};
var orgCostCenterBudgets$7 = {
  title: "Gestisci i budget",
  subtitle: "Centro di costo: {{ item.name }}",
  assigned: "Budget {{ item.name }} assegnato correttamente",
  unassigned: "Assegnazione del budget {{ item.name }} annullata correttamente"
};
var orgCostCenterAssignedBudgets$7 = {
  title: "Budget assegnati",
  subtitle: "Centro di costo: {{ item.name }}",
  assigned: "Budget {{ item.name }} assegnato correttamente",
  unassigned: "Assegnazione del budget {{ item.name }} annullata correttamente"
};
var orgBudget$7 = {
  groupName: "Budgets",
  header: "Tutti i budget ({{count}})",
  code: "Codice",
  name: "Nome",
  active: "Stato",
  currency: "Valuta",
  amount: "Importo",
  unit: "Unità",
  businessUnits: "Unità",
  dateRange: "Inizio - Fine",
  startDate: "Inizio",
  endDate: "Fine",
  actions: "",
  sortBy: "Ordina per",
  sort: {
    byName: "Nome",
    byUnitName: "Unità",
    byCode: "Codice",
    byValue: "Valore"
  },
  hint: "I budget impostano i limiti di spesa complessivi e vengono assegnati ai centri di costo. Un acquirente seleziona un centro di costo in fase di check-out.",
  details: {
    title: "Dettagli budget",
    subtitle: "Budget: {{ item.name }}"
  },
  edit: {
    title: "Modifica budget",
    subtitle: "Budget: {{ item.name }}"
  },
  create: {
    title: "Crea budget",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Disattivare questo budget?",
    deactivate: "I budget disattivati non si applicano più ai centri di costo a cui sono assegnati. Assicurarsi che il centro di costo associato disponga di almeno un budget.",
    confirmEnabled: "Budget {{ item.name }} attivato correttamente",
    confirmDisabled: "Budget {{ item.name }} disattivato correttamente",
    update: "Budget {{ item.name }} aggiornato correttamente",
    create: "Budget {{ item.name }} creato correttamente"
  },
  info: {
    disabledEdit: "Attivare il budget per consentire la modifica.",
    disabledEnable: "Prima di poter attivare questo budget è necessario attivare l'unità."
  },
  links: {
    costCenters: "Centri di costo"
  },
  breadcrumbs: {
    list: "Tutti i budget",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$7 = {
  title: "Centri di costo",
  subtitle: "Budget: {{ item.name }}"
};
var orgUnit$7 = {
  groupName: "Unità",
  header: "Tutte le unità ({{count}})",
  unit: "Unità",
  name: "Nome",
  uid: "ID",
  approvalProcess: "Processo di approvazione",
  parentUnit: "Unità sovraordinata",
  active: "Stato",
  hint: "Le unità rappresentano reparti, punti vendita, regioni o qualsiasi altro raggruppamento logico significativo per l'utente. I centri di costo e gli indirizzi di consegna disponibili per un acquirente durante il check-out dipendono dalla sua unità. Gli utenti hanno accesso a tutte le unità subordinate dell'unità principale.",
  details: {
    title: "Dettagli unità",
    subtitle: "Unità: {{ item.name }}",
    hint: "Le unità rappresentano reparti, punti vendita, regioni o qualsiasi altro raggruppamento logico significativo per l'utente. La disattivazione di un'unità disattiva tutti i relativi elementi subordinati, compresi unità, utenti, approvatori e centri di costo subordinati. Le unità disattivate non possono essere modificate."
  },
  edit: {
    title: "Modifica unità",
    subtitle: "Unità: {{ item.name }}"
  },
  create: {
    title: "Crea unità",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Disattivare questa unità?",
    deactivate: "La disattivazione di un'unità ha vasti effetti sulla propria organizzazione commerciale. Vengono disattivati anche TUTTI gli utenti, le unità, i budget e i centri di costo subordinati.",
    confirmEnabled: "Unità {{item.name}} attivata correttamente",
    confirmDisabled: "Unità {{item.name}} disattivata correttamente",
    update: "Unità {{ item.name }} aggiornata correttamente",
    create: "Unità {{ item.name }} creata correttamente"
  },
  info: {
    disabledEdit: "Attivare l'unità per consentire la modifica.",
    disabledEnable: "Prima di poter attivare questa unità è necessario attivare l'elemento sovraordinato.",
    disabledDisable: "L'unità radice non può essere disattivata."
  },
  links: {
    units: "Unità subordinate",
    users: "Utenti",
    approvers: "Approvatori",
    shippingAddresses: "Indirizzi di consegna",
    costCenters: "Centri di costo"
  },
  tree: {
    expandAll: "Espandi tutto",
    collapseAll: "Comprimi tutto",
    expand: "Espandi",
    collapse: "comprimi",
    explore: "Esplora unità subordinate"
  },
  children: {
    create: {
      title: "Crea unità subordinata",
      subtitle: ""
    },
    messages: {
      create: "Unità {{ item.name }} creata correttamente"
    }
  },
  costCenters: {
    create: {
      title: "Crea centro di costo",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Unità aziendale sovraordinata",
    create: "Crea unità",
    parentOrgUnitNotes: "Questa unità è l'unità di livello massimo dell'organizzazione. Non può essere assegnata a un'altra unità."
  },
  users: {
    header: "Utenti in {{code}}",
    changeUserRoles: "Modifica ruoli utente",
    newUser: "Nuovo utente"
  },
  assignRoles: {
    header: "Gestisci ruoli in {{code}}",
    instructions: {
      check: "Per assegnare un ruolo a un utente, selezionare la casella di spunta del ruolo.",
      uncheck: "Per rimuovere un ruolo, deselezionare la casella di spunta del ruolo.",
      changes: "Le modifiche vengono salvate automaticamente."
    }
  },
  approvers: {
    header: "Approvatori in {{code}}",
    assign: "Gestisci approvatori",
    "new": "Nuovo approvatore"
  },
  assignApprovers: {
    header: "Gestisci approvatori in {{code}}",
    instructions: {
      check: "Per assegnare un approvatore a questa unità, selezionare la casella di spunta dell'utente.",
      uncheck: "Per rimuovere un approvatore, deleselezionare la casella di spunta dell'utente.",
      changes: "Le modifiche vengono salvate automaticamente."
    },
    hint: "Agli utenti visualizzati sotto la lista Approvatori vengono assegnati privilegi di approvazione per gli acquirenti di questa unità e delle unità subordinate. Un utente con ruolo di approvatore è diverso da un approvatore visualizzato sotto la lista Approvatori. Se per un'unità non esiste un approvatore o se gli approvatori non dispongono di sufficienti privilegi di approvazione di acquisto, viene trovato un approvatore più in alto nella gerarchia dell'unità fino alla selezione di un'amministrazione."
  },
  breadcrumbs: {
    list: "Tutte le unità",
    details: "{{name}}",
    children: "Unità subordinate",
    users: "Utenti",
    approvers: "Approvatori",
    addresses: "Indirizzi di consegna",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Centri di costo"
  }
};
var orgUnitChildren$7 = {
  title: "Unità subordinate",
  subtitle: "Unità: {{item.name}}",
  info: {
    disabledCreate: "Non è possibile creare un'unità subordinata per un'unità disattivata."
  },
  hint: `Le unità rappresentano reparti, punti vendita, regioni o qualsiasi altro raggruppamento logico significativo per l'utente. Gli utenti "ereditano" unità subordinate, il che significa che gli acquirenti hanno accesso ai centri di costo e agli indirizzi di consegna delle unità subordinate in fase di check-out.`
};
var orgUnitApprovers$7 = {
  title: "Gestisci approvatori",
  subtitle: "Unità: {{item.name}}",
  assigned: "Utente {{item.name}} assegnato correttamente",
  unassigned: "Assegnazione dell'utente {{item.name}} annullata correttamente"
};
var orgUnitAssignedApprovers$7 = {
  title: "Approvatori assegnati",
  subtitle: "Unità: {{item.name}}",
  assigned: "Utente {{item.name}} assegnato correttamente",
  unassigned: "Assegnazione dell'utente {{item.name}} annullata correttamente",
  hint: "Agli utenti visualizzati sotto la lista Approvatori vengono assegnati privilegi di approvazione per gli acquirenti di questa unità e delle unità subordinate. Un utente con ruolo di approvatore è diverso da un approvatore visualizzato sotto la lista Approvatori. Se per un'unità non esiste un approvatore o se gli approvatori non dispongono di sufficienti privilegi di approvazione di acquisto, viene trovato un approvatore più in alto nella gerarchia dell'unità fino alla selezione di un'amministrazione."
};
var orgUnitAssignedRoles$7 = {
  header: "Gestisci ruoli in {{code}}",
  name: "Nome",
  email: "E-mail",
  roles: "Ruoli",
  roleCustomer: "Cliente",
  roleApprover: "Approvatore",
  roleManager: "Responsabile",
  roleAdministrator: "Amministratore"
};
var orgUnitUsers$7 = {
  title: "Utenti assegnati",
  subtitle: "Unità: {{item.name}}",
  info: {
    disabledCreate: "Non è possibile creare un utente per un'unità disattivata."
  },
  hint: 'Gli utenti sono gli acquirenti, gli approvatori, i responsabili e gli amministratori della propria organizzazione. A ogni utente è assegnato un ruolo per effettuare o approvare gli acquisti. Gli utenti "ereditano" le unità subordinate, il che significa che gli acquirenti hanno accesso ai centri di costo e agli indirizzi di consegna delle unità subordinate in fase di check-out.'
};
var orgUnitUserRoles$7 = {
  title: "Ruoli e diritti utente",
  subtitle: "Utente: {{item.name}}",
  messages: {
    rolesUpdated: "Ruoli aggiornati correttamente per {{item.name}}"
  }
};
var orgUnitAssignedUsers$7 = {
  title: "Utenti assegnati",
  subtitle: "Unità: {{item.name}}"
};
var orgUnitCostCenters$7 = {
  title: "Centri di costo assegnati",
  subtitle: "Unità: {{item.name}}",
  info: {
    disabledCreate: "Non è possibile creare un centro di costo per un'unità disattivata."
  },
  hint: `Tutti gli ordini effettuati tramite l'account acquisti dell'organizzazione sono collegati a un centro di costo a scopo di tracciamento. Un acquirente seleziona un centro di costo in fase di check-out utilizzando il metodo di acquisto "Account". Ogni unità può avere più centri di costo, ma un singolo centro di costo può essere assegnato solo a un'unica unità. Per definire limiti di spesa massimi, ai centri di costo vengono assegnati i budget. `
};
var orgUnitAddress$7 = {
  title: "Indirizzi di consegna",
  subtitle: "Unità: {{item.name}}",
  country: "Paese/regione",
  titles: "Titolo",
  firstName: "Nome",
  lastName: "Cognome",
  formattedAddress: "Indirizzo",
  address1: "Indirizzo",
  address2: "Secondo indirizzo (facoltativo)",
  city: "Città",
  state: "Stato",
  zipCode: "CAP",
  phoneNumber: "Numero di telefono (facoltativo)",
  streetAddress: "Via",
  aptSuite: "Numero di appartamento",
  selectOne: "Seleziona uno...",
  hint: `Quando un acquirente esegue il check-out utilizzando il metodo di acquisto "Account", deve scegliere un centro di costo. Gli indirizzi di consegna disponibili per l'acquirente dipendono dall'unità del centro di costo scelto.`,
  details: {
    title: "Dettagli indirizzo",
    subtitle: "Unità: {{item.name}}"
  },
  edit: {
    title: "Modifica indirizzo"
  },
  create: {
    title: "Crea indirizzo"
  },
  form: {
    subtitle: "Unità: {{item.name}}"
  },
  messages: {
    create: "Indirizzo {{ item.firstName }} {{ item.lastName }} creato correttamente",
    update: "Indirizzo {{ item.firstName }} {{ item.lastName }} aggiornato correttamente",
    "delete": "L'indirizzo non può essere riportato. Gli ordini esistenti non saranno interessati.",
    deleteTitle: "Eliminare questo indirizzo?",
    deleted: "Indirizzo {{ item.firstName }} {{ item.lastName }} eliminato correttamente"
  }
};
var orgUserGroup$7 = {
  groupName: "Gruppi di utenti",
  header: "Tutti i gruppi di utenti ({{count}})",
  disabled: "(disattivato)",
  uid: "Codice",
  name: "Nome",
  unit: "Unità",
  orgUnit: "Unità",
  actions: "",
  sortBy: "Ordina per",
  sort: {
    byName: "Nome",
    byUnitName: "Unità",
    byGroupID: "Gruppo"
  },
  hint: "I gruppi di utenti consentono la combinazione di utenti in un gruppo per assegnare limiti di acquisto a più utenti contemporaneamente.",
  details: {
    title: "Dettagli gruppo di utenti",
    subtitle: "Gruppo di utenti: {{ item.name }}"
  },
  edit: {
    title: "Modifica gruppo di utenti",
    subtitle: "Gruppo di utenti: {{ item.name }}"
  },
  create: {
    title: "Crea gruppo di utenti",
    subtitle: ""
  },
  links: {
    user: "Utenti",
    permission: "Limiti di acquisto"
  },
  messages: {
    update: "Gruppo di utenti {{ item.name }} aggiornato correttamente",
    create: "Gruppo di utenti {{ item.name }} creato correttamente",
    deleteTitle: "Eliminare questo gruppo di utenti?",
    "delete": "Gli utenti di questo gruppo non sono interessati dall'eliminazione del gruppo di utenti.",
    deleted: "Gruppo di utenti {{ item.name }} eliminato correttamente"
  },
  breadcrumbs: {
    list: "Tutti i gruppi di utenti",
    details: "{{name}}",
    users: "Utenti",
    permissions: "Limiti di acquisto"
  }
};
var orgUserGroupUsers$7 = {
  title: "Gestisci utenti",
  subtitle: "Gruppo di utenti: {{ item.name }}",
  assigned: "Utente {{item.name}} assegnato correttamente",
  unassigned: "Assegnazione dell'utente {{item.name}} annullata correttamente",
  unassignAll: "Annulla tutte le assegnazioni",
  unassignAllConfirmation: "Assegnazione di tutti gli utenti annullata correttamente"
};
var orgUserGroupAssignedUsers$7 = {
  title: "Utenti assegnati",
  subtitle: "Gruppo di utenti: {{ item.name }}",
  assigned: "Utente {{item.name}} assegnato correttamente",
  unassigned: "Assegnazione dell'utente {{item.name}} annullata correttamente"
};
var orgUserGroupPermissions$7 = {
  title: "Gestisci imiti di acquisto",
  subtitle: "Limite: {{ item.name }}",
  assigned: "Limiti di acquisto {{item.code}} assegnati correttamente",
  unassigned: "Assegnazione dei limiti di acquisto {{item.code}} annullata correttamente"
};
var orgUserGroupAssignedPermissions$7 = {
  title: "Limiti di acquisto assegnati",
  subtitle: "Limite: {{ item.name }}",
  assigned: "Limiti di acquisto {{item.code}} assegnati correttamente",
  unassigned: "Assegnazione dei limiti di acquisto {{item.code}} annullata correttamente"
};
var orgUser$7 = {
  groupName: "Utenti",
  header: "Tutti gli utenti ({{count}})",
  disabled: "(disattivato)",
  uid: "E-mail",
  active: "Stato",
  name: "Nome",
  firstName: "Nome",
  lastName: "Cognome",
  email: "E-mail",
  orgUnit: "Unità",
  unit: "Unità",
  roles: "Ruoli",
  rights: "Diritti",
  title: "Titolo",
  hint: "Gli utenti sono gli acquirenti, gli approvatori, i responsabili e gli amministratori della propria organizzazione. A ogni utente è assegnato un ruolo per effettuare o approvare gli acquisti. Ogni utente appartiene a un'unità e ha accesso a tutte le unità subordinate dell'unità principale.",
  unitApprover: "Approvatore unità",
  assignApprover: "Aggiungi l'utente agli approvatori dell'unità",
  actions: "",
  sortBy: "Ordina per",
  sort: {
    byName: "Nome",
    byUnit: "Unità"
  },
  details: {
    title: "Dettagli utente",
    subtitle: "Utente: {{ item.name }}"
  },
  edit: {
    title: "Modifica utente",
    subtitle: "Utente: {{ item.name }}"
  },
  create: {
    title: "Crea utente",
    subtitle: ""
  },
  links: {
    password: "Modifica password",
    approvers: "Approvatori",
    userGroup: "Gruppi di utenti",
    permission: "Limiti di acquisto",
    rolesAndRights: "Ruoli e diritti"
  },
  messages: {
    deactivateTitle: "Disattivare questo utente?",
    deactivate: "Gli utenti disattivati non possono accedere allo storefront ed effettuare ordini.",
    confirmEnabled: "Utente {{item.firstName}} {{item.lastName}} attivato correttamente",
    confirmDisabled: "Utente {{item.firstName}} {{item.lastName}} disattivato correttamente",
    update: "Utente {{item.firstName}} {{item.lastName}} aggiornato correttamente",
    create: "Utente {{item.firstName}} {{item.lastName}} creato correttamente",
    updatePassword: "Password utente {{item.firstName}} {{item.lastName}} aggiornata correttamente"
  },
  info: {
    disabledEdit: "Attivare l'utente per consentire la modifica.",
    disabledEnable: "Prima di poter attivare questo utente è necessario attivare l'unità."
  },
  approver: {
    link: "Approvatori",
    header: "Approvatori in {{code}}",
    assign: "Assegna approvatori",
    assignHeader: "Assegna approvatori in {{code}}",
    back: "Indietro",
    "new": "Nuovo approvatore",
    instructions: {
      check: "Per assegnare un approvatore a questo utente, selezionare la casella di spunta dell'utente.",
      uncheck: "Per rimuovere un approvatore, deleselezionare la casella di spunta dell'utente.",
      changes: "Le modifiche vengono salvate automaticamente."
    }
  },
  userGroup: {
    link: "Gruppi di utenti",
    header: "Gruppi di utenti in {{code}}",
    assign: "Assegna gruppi di utenti",
    assignHeader: "Assegna gruppi di utenti in {{code}}",
    back: "Indietro",
    instructions: {
      check: "Per assegnare un gruppo di utenti a questo utente, selezionare la casella di spunta dell'utente.",
      uncheck: "Per rimuovere un gruppo di utenti, deleselezionare la casella di spunta dell'utente.",
      changes: "Le modifiche vengono salvate automaticamente."
    }
  },
  permission: {
    link: "Limiti di acquisto",
    header: "Limiti di acquisto in {{code}}",
    assign: "Assegna limiti di acquisto",
    assignHeader: "Assegna limiti di acquisto in {{code}}",
    back: "Indietro",
    instructions: {
      check: "Per assegnare limiti di acquisto a questo utente, selezionare la relativa casella di spunta.",
      uncheck: "Per annullare l'assegnazione di limiti di acquisto, deselezionare la relativa casella di spunta.",
      changes: "Le modifiche vengono salvate automaticamente."
    },
    per: {
      "undefined": "",
      MONTH: "per ogni mese",
      YEAR: "per ogni anno",
      WEEK: "per ogni settimana",
      QUARTER: "per ogni trimestre"
    }
  },
  password: {
    title: "Modifica password",
    subtitle: "Utente: {{ item.name }}",
    newPassword: "Nuova password",
    confirmPassword: "Digita nuovamente la nuova password"
  },
  breadcrumbs: {
    list: "Tutti gli utenti",
    details: "{{name}}",
    userGroups: "Gruppi di utenti",
    approvers: "Approvatori",
    permissions: "Limiti di acquisto"
  }
};
var orgUserUserGroups$7 = {
  title: "Gestisci gruppi di utenti",
  subtitle: "Utente: {{ item.name }}",
  assigned: "Gruppo di utenti {{item.name}} assegnato correttamente",
  unassigned: "Assegnazione del gruppo di utenti {{item.name}} annullata correttamente"
};
var orgUserAssignedUserGroups$7 = {
  title: "Gruppi di utenti assegnati",
  subtitle: "Utente: {{ item.name }}",
  assigned: "Gruppo di utenti {{item.name}} assegnato correttamente",
  unassigned: "Assegnazione del gruppo di utenti {{item.name}} annullata correttamente"
};
var orgUserApprovers$7 = {
  title: "Gestisci approvatori",
  subtitle: "Utente: {{ item.name }}",
  assigned: "Approvatore {{ item.name }} assegnato correttamente",
  unassigned: "Assegnazione dell'approvatore {{ item.name }} annullata correttamente"
};
var orgUserAssignedApprovers$7 = {
  title: "Approvatori assegnati",
  subtitle: "Utente: {{ item.name }}",
  assigned: "Approvatore {{ item.name }} assegnato correttamente",
  unassigned: "Assegnazione dell'approvatore {{ item.name }} annullata correttamente"
};
var orgUserPermissions$7 = {
  title: "Gestisci limiti di acquisto",
  subtitle: "Utente: {{ item.name }}",
  assigned: "Limite di acquisto {{ item.code }} assegnato correttamente",
  unassigned: "Assegnazione del limite di acquisto {{ item.code }} annullata correttamente"
};
var orgUserAssignedPermissions$7 = {
  title: "Limiti di acquisto assegnati",
  subtitle: "Utente: {{ item.name }}",
  assigned: "Limite di acquisto {{ item.code }} assegnato correttamente",
  unassigned: "Assegnazione del limite di acquisto {{ item.code }} annullata correttamente"
};
var orgPurchaseLimit$7 = {
  groupName: "Limiti di acquisto",
  header: "Tutti i limiti di acquisto ({{count}})",
  name: "Nome",
  code: "Codice",
  active: "Stato",
  limit: "Limite",
  orderApprovalPermissionType: "Tipo",
  threshold: "Soglia",
  periodRange: "Periodo",
  currency: "Valuta",
  orgUnit: "Unità sovraordinata",
  unit: "Unità sovraordinata",
  actions: "",
  hint: "I limiti di acquisto aiutano a controllare la spesa tramite la definizione dell'importo di spesa degli acquirenti per ogni ordine o per ogni settimana, mese, trimestre o anno. I limiti di acquisto vengono assegnati agli utenti o ai gruppi di utenti. I limiti di acquisto vengono anche assegnati agli approvatori e definiscono l'importo che sono autorizzati ad approvare. Con i gruppi di utenti, è possibile assegnare limiti di acquisto a molti utenti contemporaneamente.",
  details: {
    title: "Dettagli dei limiti di acquisto",
    subtitle: "Limite di acquisto: {{ item.code }}"
  },
  edit: {
    title: "Modifica limite di acquisto",
    subtitle: "Limiti di acquisto: {{ item.code }}"
  },
  create: {
    title: "Crea limite di acquisto",
    subtitle: ""
  },
  sortBy: "Ordina per",
  sort: {
    byName: "Nome",
    byUnitName: "Unità"
  },
  messages: {
    deactivateTitle: "Disattivare questo limite di acquisto?",
    deactivate: "I limiti di acquisto disattivati non possono più essere assegnati a un utente o a un gruppo di utenti. Le assegnazioni correnti non avranno effetto.",
    confirmEnabled: "Limite di acquisto {{ item.code }} attivato correttamente",
    confirmDisabled: "Limite di acquisto {{ item.code }} disattivato correttamente",
    update: "Limite di acquisto {{ item.code }} aggiornato correttamente",
    create: "Limite di acquisto {{ item.code }} creato correttamente"
  },
  info: {
    disabledEdit: "Attivare il limite di acquisto per consentire la modifica.",
    disabledEnable: "Prima di poter attivare questo limite di acquisto è necessario attivare l'unità."
  },
  per: {
    DAY: "per ogni giorno",
    WEEK: "per ogni settimana",
    MONTH: "per ogni mese",
    QUARTER: "per ogni trimestre",
    YEAR: "per ogni anno"
  },
  breadcrumbs: {
    list: "Tutti i limiti di acquisto",
    details: "{{code}}"
  }
};
var organization$f = {
  organization: organization$e,
  orgCostCenter: orgCostCenter$7,
  orgCostCenterBudgets: orgCostCenterBudgets$7,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$7,
  orgBudget: orgBudget$7,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$7,
  orgUnit: orgUnit$7,
  orgUnitChildren: orgUnitChildren$7,
  orgUnitApprovers: orgUnitApprovers$7,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$7,
  orgUnitAssignedRoles: orgUnitAssignedRoles$7,
  orgUnitUsers: orgUnitUsers$7,
  orgUnitUserRoles: orgUnitUserRoles$7,
  orgUnitAssignedUsers: orgUnitAssignedUsers$7,
  orgUnitCostCenters: orgUnitCostCenters$7,
  orgUnitAddress: orgUnitAddress$7,
  orgUserGroup: orgUserGroup$7,
  orgUserGroupUsers: orgUserGroupUsers$7,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$7,
  orgUserGroupPermissions: orgUserGroupPermissions$7,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$7,
  orgUser: orgUser$7,
  orgUserUserGroups: orgUserUserGroups$7,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$7,
  orgUserApprovers: orgUserApprovers$7,
  orgUserAssignedApprovers: orgUserAssignedApprovers$7,
  orgUserPermissions: orgUserPermissions$7,
  orgUserAssignedPermissions: orgUserAssignedPermissions$7,
  orgPurchaseLimit: orgPurchaseLimit$7
};
var it = {
  organization: organization$f
};
var organization$c = {
  enabled: "有効",
  disabled: "無効",
  enable: "有効",
  disable: "無効",
  name: "名前",
  code: "コード",
  done: "完了",
  cancel: "キャンセル",
  add: "追加",
  manageUsers: "ユーザの管理",
  create: "{{name}} の作成",
  edit: "編集",
  save: "{{name}} の保存",
  "delete": "削除",
  assign: "管理",
  active: "有効",
  status: "ステータス",
  details: "詳細",
  messages: {
    emptyList: "リストは空です"
  },
  userRoles: {
    b2bcustomergroup: "顧客",
    b2bapprovergroup: "承認者",
    b2bmanagergroup: "マネージャ",
    b2badmingroup: "管理"
  },
  userRights: {
    unitorderviewergroup: "ユニットレベルの注文の表示"
  },
  breadcrumb: "組織",
  notification: {
    noSufficientPermissions: "このページにアクセスするのに十分な権限がありません",
    notExist: "このアイテムは存在しません。",
    disabled: "無効化されたアイテムは編集できません"
  },
  confirmation: {
    cancel: "キャンセル",
    confirm: "確認",
    disable: "無効",
    "delete": "削除"
  },
  httpHandlers: {
    conflict: {
      budget: "コードが {{ code }} の予算はすでに存在します。",
      costCenter: "コードが {{ code }} の原価センタはすでに存在します。",
      unit: "UID が {{ code }} の組織ユニットはすでに存在します。",
      user: "電子メールが {{ code }} のユーザはすでに存在します",
      userGroup: "ID が {{ code }} のユーザグループはすでに存在します",
      permission: "コードが {{ code }} の承認権限はすでに存在します。",
      unknown: "サーバ検証エラー"
    }
  },
  information: "{{title}} に関するその他の情報"
};
var orgCostCenter$6 = {
  groupName: "原価センタ",
  header: "すべての原価センタ ({{count}})",
  code: "コード",
  active: "ステータス",
  name: "名前",
  currency: "通貨",
  unit: "親ユニット",
  actions: "",
  sortBy: "ソート基準",
  sort: {
    byName: "名前",
    byUnitName: "ユニット",
    byCode: "コード"
  },
  hint: "組織の購入アカウントを介して行われるすべての注文は、追跡の目的で原価センタにリンクされます。各ユニットは複数の原価センタを持つことができます。支出を制限するには予算を原価センタに割り当てます。購入担当者はチェックアウト時に原価センタを選択します。",
  disable: {
    confirm: "無効"
  },
  messages: {
    deactivateTitle: "原価センタの無効化",
    deactivate: "無効化された原価センタは新しい注文に使用することができません。ユニットに少なくとも 1 つの原価センタがあることを確認してください。既存の注文は影響を受けません。",
    confirmEnabled: "原価センタ {{ item.name }} が正常に有効化されました",
    confirmDisabled: "原価センタ {{ item.name }} が正常に無効化されました",
    update: "原価センタ {{ item.name }} が正常に更新されました",
    create: "原価センタ {{ item.name }} が正常に作成されました"
  },
  info: {
    disabledEdit: "編集を許可するために原価センタを有効化します。",
    disabledEnable: "ユニットはこの原価センタが有効化される前に有効化されている必要があります。"
  },
  details: {
    title: "原価センタ詳細",
    subtitle: "原価センタ: {{ item.name }}"
  },
  edit: {
    title: "原価センタの編集",
    subtitle: "原価センタ: {{ item.name }}"
  },
  create: {
    title: "原価センタの作成",
    subtitle: ""
  },
  budget: {
    link: "予算"
  },
  breadcrumbs: {
    list: "すべての原価センタ",
    details: "{{name}}",
    budgets: "予算"
  }
};
var orgCostCenterBudgets$6 = {
  title: "予算の管理",
  subtitle: "原価センタ: {{ item.name }}",
  assigned: "予算 {{ item.name }} が正常に割り当てられました",
  unassigned: "予算 {{ item.name }} が正常に割り当て解除されました"
};
var orgCostCenterAssignedBudgets$6 = {
  title: "割当済み予算",
  subtitle: "原価センタ: {{ item.name }}",
  assigned: "予算 {{ item.name }} が正常に割り当てられました",
  unassigned: "予算 {{ item.name }} が正常に割り当て解除されました"
};
var orgBudget$6 = {
  groupName: "予算",
  header: "すべての予算 ({{count}})",
  code: "コード",
  name: "名前",
  active: "ステータス",
  currency: "通貨",
  amount: "金額",
  unit: "ユニット",
  businessUnits: "ユニット",
  dateRange: "開始 - 終了",
  startDate: "開始",
  endDate: "終了",
  actions: "",
  sortBy: "ソート基準",
  sort: {
    byName: "名前",
    byUnitName: "ユニット",
    byCode: "コード",
    byValue: "値"
  },
  hint: "予算には全体的な購入制限が設定され、原価センタに割り当てられます。購入担当者はチェックアウト時に原価センタを選択します。",
  details: {
    title: "予算詳細",
    subtitle: "予算: {{ item.name }}"
  },
  edit: {
    title: "予算を編集",
    subtitle: "予算: {{ item.name }}"
  },
  create: {
    title: "予算の作成",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "この予算を無効化しますか?",
    deactivate: "無効化された予算は割り当てられていた原価センタには適用されなくなります。関連する原価センタに少なくとも 1 つの予算があることを確認してください。",
    confirmEnabled: "予算 {{ item.name }} が正常に有効化されました",
    confirmDisabled: "予算 {{ item.name }} が正常に無効化されました",
    update: "予算 {{ item.name }} が正常に更新されました",
    create: "予算 {{ item.name }} が正常に作成されました"
  },
  info: {
    disabledEdit: "編集を許可するために予算を有効化します。",
    disabledEnable: "ユニットはこの予算が有効化される前に有効化されている必要があります。"
  },
  links: {
    costCenters: "原価センタ"
  },
  breadcrumbs: {
    list: "すべての予算",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$6 = {
  title: "原価センタ",
  subtitle: "予算: {{ item.name }}"
};
var orgUnit$6 = {
  groupName: "ユニット",
  header: "すべてのユニット ({{count}})",
  unit: "ユニット",
  name: "名前",
  uid: "ID",
  approvalProcess: "承認プロセス",
  parentUnit: "親ユニット",
  active: "ステータス",
  hint: "ユニットは、部門、店舗、地域、またはその他ユーザにとって意味のある任意の論理的なグループを表しています。原価センタおよび配送先住所は、購入担当者のユニットに応じてチェックアウト時に使用することができます。ユーザはプライマリユニットのすべての子ユニットにアクセスできます。",
  details: {
    title: "ユニット詳細",
    subtitle: "ユニット: {{ item.name }}",
    hint: "ユニットは、部門、店舗、地域、またはその他ユーザにとって意味のある任意の論理的なグループを表しています。ユニットを無効化すると子ユニット、ユーザ、承認者、および原価センタを含めて、ユニットのすべての子も無効化されます。無効化されたユニットを編集することはできません。"
  },
  edit: {
    title: "ユニットの編集",
    subtitle: "ユニット: {{ item.name }}"
  },
  create: {
    title: "ユニットの作成",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "このユニットを無効化しますか?",
    deactivate: "ユニットの無効化は、コマース組織に幅広い影響を与えます。組織のすべての子ユニット、ユーザ、予算、および原価センタも無効化されます。",
    confirmEnabled: "ユニット {{ item.name }} が正常に有効化されました",
    confirmDisabled: "ユニット {{ item.name }} が正常に無効化されました",
    update: "ユニット {{ item.name }} が正常に更新されました",
    create: "ユニット {{ item.name }} が正常に作成されました"
  },
  info: {
    disabledEdit: "編集を許可するためにユニットを有効化します。",
    disabledEnable: "このユニットが有効化される前に親ユニットが有効化されている必要があります。",
    disabledDisable: "ルートユニットは無効化できません。"
  },
  links: {
    units: "子ユニット",
    users: "ユーザ",
    approvers: "承認者",
    shippingAddresses: "配送先住所",
    costCenters: "原価センタ"
  },
  tree: {
    expandAll: "すべて展開",
    collapseAll: "すべて圧縮",
    expand: "展開",
    collapse: "圧縮",
    explore: "サブユニットを参照"
  },
  children: {
    create: {
      title: "子ユニットの作成",
      subtitle: ""
    },
    messages: {
      create: "ユニット {{ item.name }} が正常に作成されました"
    }
  },
  costCenters: {
    create: {
      title: "原価センタの作成",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "親ビジネスユニット",
    create: "ユニットの作成",
    parentOrgUnitNotes: "このユニットは組織のトップレベルユニットです。このユニットを別のユニットに割り当てることはできません。"
  },
  users: {
    header: "{{code}} のユーザ",
    changeUserRoles: "ユーザロールの変更",
    newUser: "新しいユーザ"
  },
  assignRoles: {
    header: "{{code}} でのロールの管理",
    instructions: {
      check: "ユーザにロールを割り当てるには、ロールのチェックボックスを選択します。",
      uncheck: "ロールを削除するにはロールのチェックボックスを選択解除します。",
      changes: "変更は自動的に保存されます。"
    }
  },
  approvers: {
    header: "{{code}} の承認者",
    assign: "承認者の管理",
    "new": "新しい承認者"
  },
  assignApprovers: {
    header: "{{code}} の承認者の管理",
    instructions: {
      check: "このユニットに承認者を割り当てるには、ユーザのチェックボックスを選択します。",
      uncheck: "承認者を削除するには、ユーザのチェックボックスを選択解除します。",
      changes: "変更は自動的に保存されます。"
    },
    hint: "承認者リストに表示されるユーザには、このユニットおよびその子ユニットの購入担当者の承認権限が割り当てられています。承認者ロールを持つユーザと承認者リストに表示される承認者とは異なるので注意してください。ユニットに承認者が存在しない場合、または承認者に十分な購入承認権限がない場合は、管理が選択されるまで、ユニット階層の上位にいる承認者が検索されます。"
  },
  breadcrumbs: {
    list: "すべてのユニット",
    details: "{{name}}",
    children: "子ユニット",
    users: "ユーザ",
    approvers: "承認者",
    addresses: "配送先住所",
    addressDetails: "{{formattedAddress}}",
    costCenters: "原価センタ"
  }
};
var orgUnitChildren$6 = {
  title: "子ユニット",
  subtitle: "ユニット: {{ item.name }}",
  info: {
    disabledCreate: "無効化されたユニットに対して子ユニットを作成することはできません。"
  },
  hint: 'ユニットは、部門、店舗、地域、またはその他ユーザにとって意味のある任意の論理的なグループを表しています。ユーザの "継承" 子ユニットとは、購入担当者がチェックアウト時に子ユニットの原価センタおよび配送先住所にアクセスできることを表しています。'
};
var orgUnitApprovers$6 = {
  title: "承認者の管理",
  subtitle: "ユニット: {{ item.name }}",
  assigned: "ユーザ {{ item.name }} が正常に割り当てられました",
  unassigned: "ユーザ {{ item.name }} が正常に割り当て解除されました"
};
var orgUnitAssignedApprovers$6 = {
  title: "割り当て済み承認者",
  subtitle: "ユニット: {{ item.name }}",
  assigned: "ユーザ {{ item.name }} が正常に割り当てられました",
  unassigned: "ユーザ {{ item.name }} が正常に割り当て解除されました",
  hint: "承認者リストに表示されるユーザには、このユニットおよびその子ユニットの購入担当者の承認権限が割り当てられています。承認者ロールを持つユーザと承認者リストに表示される承認者とは異なるので注意してください。ユニットに承認者が存在しない場合、または承認者に十分な購入承認権限がない場合は、管理が選択されるまで、ユニット階層の上位にいる承認者が検索されます。"
};
var orgUnitAssignedRoles$6 = {
  header: "{{code}} でのロールの管理",
  name: "名前",
  email: "電子メール",
  roles: "ロール",
  roleCustomer: "顧客",
  roleApprover: "承認者",
  roleManager: "マネージャ",
  roleAdministrator: "管理"
};
var orgUnitUsers$6 = {
  title: "割り当て済みユーザ",
  subtitle: "ユニット: {{ item.name }}",
  info: {
    disabledCreate: "無効化されたユニットに対してユーザを作成することはできません。"
  },
  hint: 'ユーザは、組織の購入担当者、承認者、マネージャ、および管理者です。各ユーザには購入を実行または承認するためのロールが割り当てられます。ユーザの "継承" 子ユニットとは、購入担当者がチェックアウト時に子ユニットの原価センタおよび配送先住所にアクセスできることを表しています。'
};
var orgUnitUserRoles$6 = {
  title: "ユーザロールおよび権限",
  subtitle: "ユーザ: {{ item.name }}",
  messages: {
    rolesUpdated: "{{item.name}} のロールが正常に更新されました"
  }
};
var orgUnitAssignedUsers$6 = {
  title: "割り当て済みユーザ",
  subtitle: "ユニット: {{ item.name }}"
};
var orgUnitCostCenters$6 = {
  title: "割当済み原価センタ",
  subtitle: "ユニット: {{ item.name }}",
  info: {
    disabledCreate: "無効化されたユニットに対して原価センタを作成することはできません。"
  },
  hint: '組織の購入アカウントを介して行われるすべての注文は、追跡の目的で原価センタにリンクされます。購入担当者はチェックアウト時に "アカウント" 購入方法を使用して原価センタを選択します。各ユニットは複数の原価センタを持つことができますが、1 つの原価センタは 1 つのユニットにのみ割り当てることができます。最終的な支出制限を定義するには予算を原価センタに割り当てます。 '
};
var orgUnitAddress$6 = {
  title: "配送先住所",
  subtitle: "ユニット: {{ item.name }}",
  country: "国/地域",
  titles: "タイトル",
  firstName: "名",
  lastName: "姓",
  formattedAddress: "住所",
  address1: "住所",
  address2: "2 番目の住所 (オプション)",
  city: "市区町村",
  state: "都道府県/州",
  zipCode: "郵便番号",
  phoneNumber: "電話番号 (オプション)",
  streetAddress: "番地",
  aptSuite: "部屋番号",
  selectOne: "1 つ選択...",
  hint: '購入担当者が "アカウント" 購入方法を使用してチェックアウトするとき、多くの場合は原価センタを選択します。購入担当者が使用できる配送先住所は、選択した原価センタのユニットに依存します。',
  details: {
    title: "住所詳細",
    subtitle: "ユニット: {{ item.name }}"
  },
  edit: {
    title: "住所を編集"
  },
  create: {
    title: "住所を作成"
  },
  form: {
    subtitle: "ユニット: {{ item.name }}"
  },
  messages: {
    create: "住所 {{ item.firstName }} {{ item.lastName }} が正常に作成されました",
    update: "住所 {{ item.firstName }} {{ item.lastName }} が正常に更新されました",
    "delete": "住所を戻すことができません。既存の注文は影響を受けません。",
    deleteTitle: "この住所を削除しますか?",
    deleted: "住所 {{ item.firstName }} {{ item.lastName }} が正常に削除されました"
  }
};
var orgUserGroup$6 = {
  groupName: "ユーザグループ",
  header: "すべてのユーザグループ ({{count}})",
  disabled: "(無効)",
  uid: "コード",
  name: "名前",
  unit: "ユニット",
  orgUnit: "ユニット",
  actions: "",
  sortBy: "ソート基準",
  sort: {
    byName: "名前",
    byUnitName: "ユニット",
    byGroupID: "グループ"
  },
  hint: "ユーザグループは、多数のユーザに購入制限を同時に割り当てる目的で、ユーザを 1 つのグループにまとめることができます。",
  details: {
    title: "ユーザグループ詳細",
    subtitle: "ユーザグループ: {{ item.name }}"
  },
  edit: {
    title: "ユーザグループを編集",
    subtitle: "ユーザグループ: {{ item.name }}"
  },
  create: {
    title: "ユーザグループを作成",
    subtitle: ""
  },
  links: {
    user: "ユーザ",
    permission: "購入制限"
  },
  messages: {
    update: "ユーザグループ {{ item.name }} が正常に更新されました",
    create: "ユーザグループ {{ item.name }} が正常に作成されました",
    deleteTitle: "このユーザグループを削除しますか?",
    "delete": "このグループにいるユーザは、ユーザグループが削除されても影響を受けません。",
    deleted: "ユーザグループ {{ item.name }} が正常に削除されました"
  },
  breadcrumbs: {
    list: "すべてのユーザグループ",
    details: "{{name}}",
    users: "ユーザ",
    permissions: "購入制限"
  }
};
var orgUserGroupUsers$6 = {
  title: "ユーザの管理",
  subtitle: "ユーザグループ: {{ item.name }}",
  assigned: "ユーザ {{ item.name }} が正常に割り当てられました",
  unassigned: "ユーザ {{ item.name }} が正常に割り当て解除されました",
  unassignAll: "すべての割り当てを解除",
  unassignAllConfirmation: "すべてのユーザが正常に割り当て解除されました"
};
var orgUserGroupAssignedUsers$6 = {
  title: "割り当て済みユーザ",
  subtitle: "ユーザグループ: {{ item.name }}",
  assigned: "ユーザ {{ item.name }} が正常に割り当てられました",
  unassigned: "ユーザ {{ item.name }} が正常に割り当て解除されました"
};
var orgUserGroupPermissions$6 = {
  title: "購入制限の管理",
  subtitle: "制限: {{ item.name }}",
  assigned: "購入制限 {{item.code}} が正常に割り当てられました",
  unassigned: "購入制限 {{item.code}} が正常に割り当て解除されました"
};
var orgUserGroupAssignedPermissions$6 = {
  title: "割り当て済み購入制限",
  subtitle: "制限: {{ item.name }}",
  assigned: "購入制限 {{item.code}} が正常に割り当てられました",
  unassigned: "購入制限 {{item.code}} が正常に割り当て解除されました"
};
var orgUser$6 = {
  groupName: "ユーザ",
  header: "すべてのユーザ ({{count}})",
  disabled: "(無効)",
  uid: "電子メール",
  active: "ステータス",
  name: "名前",
  firstName: "名",
  lastName: "姓",
  email: "電子メール",
  orgUnit: "ユニット",
  unit: "ユニット",
  roles: "ロール",
  rights: "権限",
  title: "タイトル",
  hint: "ユーザは、組織の購入担当者、承認者、マネージャ、および管理者です。各ユーザには購入を実行または承認するためのロールが割り当てられます。各ユーザはユニットに属しており、ユーザのプライマリユニットのすべての子ユニットにアクセスできます。",
  unitApprover: "ユニット承認者",
  assignApprover: "ユニットを承認するためのユーザを追加します",
  actions: "",
  sortBy: "ソート基準",
  sort: {
    byName: "名前",
    byUnit: "ユニット"
  },
  details: {
    title: "ユーザ詳細",
    subtitle: "ユーザ: {{ item.name }}"
  },
  edit: {
    title: "ユーザの編集",
    subtitle: "ユーザ: {{ item.name }}"
  },
  create: {
    title: "ユーザの作成",
    subtitle: ""
  },
  links: {
    password: "パスワードの変更",
    approvers: "承認者",
    userGroup: "ユーザグループ",
    permission: "購入制限",
    rolesAndRights: "ロールおよび権限"
  },
  messages: {
    deactivateTitle: "このユーザを無効にしますか?",
    deactivate: "無効化されたユーザは storefront にログオンして注文を行うことができません。",
    confirmEnabled: "ユーザ {{ item.firstName }} {{ item.lastName }} が正常に有効化されました",
    confirmDisabled: "ユーザ {{ item.firstName }} {{ item.lastName }} が正常に無効化されました",
    update: "ユーザ {{ item.firstName }} {{ item.lastName }} が正常に更新されました",
    create: "ユーザ {{ item.firstName }} {{ item.lastName }} が正常に作成されました",
    updatePassword: "ユーザ {{ item.firstName }} {{ item.lastName }} のパスワードが正常に更新されました"
  },
  info: {
    disabledEdit: "編集を許可するためにユーザを有効化します。",
    disabledEnable: "ユニットはこのユーザが有効化される前に有効化されている必要があります。"
  },
  approver: {
    link: "承認者",
    header: "{{code}} の承認者",
    assign: "承認者の割り当て",
    assignHeader: "{{code}} の承認者の割り当て",
    back: "戻る",
    "new": "新しい承認者",
    instructions: {
      check: "このユーザに承認者を割り当てるには、ユーザのチェックボックスを選択します。",
      uncheck: "承認者を削除するには、ユーザのチェックボックスを選択解除します。",
      changes: "変更は自動的に保存されます。"
    }
  },
  userGroup: {
    link: "ユーザグループ",
    header: "{{code}} のユーザグループ",
    assign: "ユーザグループの割り当て",
    assignHeader: "{{code}} のユーザグループの割り当て",
    back: "戻る",
    instructions: {
      check: "このユーザにユーザグループを割り当てるには、ユーザのチェックボックスを選択します。",
      uncheck: "ユーザグループを削除するには、ユーザのチェックボックスを選択解除します。",
      changes: "変更は自動的に保存されます。"
    }
  },
  permission: {
    link: "購入制限",
    header: "{{code}} の購入制限",
    assign: "購入制限の割り当て",
    assignHeader: "{{code}} の購入制限の割り当て",
    back: "戻る",
    instructions: {
      check: "このユーザに購入制限を割り当てるには、ユーザのチェックボックスを選択します。",
      uncheck: "購入制限の割り当てを解除するには、ユーザのチェックボックスを選択解除します。",
      changes: "変更は自動的に保存されます。"
    },
    per: {
      "undefined": "",
      MONTH: "月ごと",
      YEAR: "年ごと",
      WEEK: "週ごと",
      QUARTER: "四半期ごと"
    }
  },
  password: {
    title: "パスワードの変更",
    subtitle: "ユーザ: {{ item.email }}",
    newPassword: "新しいパスワード",
    confirmPassword: "新しいパスワードの再入力"
  },
  breadcrumbs: {
    list: "すべてのユーザ",
    details: "{{name}}",
    userGroups: "ユーザグループ",
    approvers: "承認者",
    permissions: "購入制限"
  }
};
var orgUserUserGroups$6 = {
  title: "ユーザグループの管理",
  subtitle: "ユーザ: {{ item.name }}",
  assigned: "ユーザグループ {{ item.name }} が正常に割り当てられました",
  unassigned: "ユーザグループ {{ item.name }} が正常に割り当て解除されました"
};
var orgUserAssignedUserGroups$6 = {
  title: "割り当て済みユーザグループ",
  subtitle: "ユーザ: {{ item.name }}",
  assigned: "ユーザグループ {{ item.name }} が正常に割り当てられました",
  unassigned: "ユーザグループ {{ item.name }} が正常に割り当て解除されました"
};
var orgUserApprovers$6 = {
  title: "承認者の管理",
  subtitle: "ユーザ: {{ item.name }}",
  assigned: "承認者 {{ item.name }} が正常に割り当てられました",
  unassigned: "承認者 {{ item.name }} が正常に割り当て解除されました"
};
var orgUserAssignedApprovers$6 = {
  title: "割り当て済み承認者",
  subtitle: "ユーザ: {{ item.name }}",
  assigned: "承認者 {{ item.name }} が正常に割り当てられました",
  unassigned: "承認者 {{ item.name }} が正常に割り当て解除されました"
};
var orgUserPermissions$6 = {
  title: "購入制限の管理",
  subtitle: "ユーザ: {{ item.name }}",
  assigned: "購入制限 {{item.code}} が正常に割り当てられました",
  unassigned: "購入制限 {{item.code}} が正常に割り当て解除されました"
};
var orgUserAssignedPermissions$6 = {
  title: "割り当て済み購入制限",
  subtitle: "ユーザ: {{ item.name }}",
  assigned: "購入制限 {{item.code}} が正常に割り当てられました",
  unassigned: "購入制限 {{item.code}} が正常に割り当て解除されました"
};
var orgPurchaseLimit$6 = {
  groupName: "購入制限",
  header: "すべての購入制限 ({{count}})",
  name: "名前",
  code: "コード",
  active: "ステータス",
  limit: "制限",
  orderApprovalPermissionType: "タイプ",
  threshold: "しきい値",
  periodRange: "期間",
  currency: "通貨",
  orgUnit: "親ユニット",
  unit: "親ユニット",
  actions: "",
  hint: "購入制限は、購入担当者が注文ごと、週ごと、月ごと、四半期ごと、または年ごとにどれだけ支出できるのかを定義することで、支出の制御を行います。購入制限はユーザまたはユーザグループに割り当てられます。購入制限は、どれだけ承認できるのかを定義するために、承認者にも割り当てられます。ユーザグループを使用して多くのユーザに同時に購入制限を割り当てることができます。",
  details: {
    title: "購入制限の詳細",
    subtitle: "購入制限: {{ item.code }}"
  },
  edit: {
    title: "購入制限の編集",
    subtitle: "購入制限: {{ item.code }}"
  },
  create: {
    title: "購入制限の作成",
    subtitle: ""
  },
  sortBy: "ソート基準",
  sort: {
    byName: "名前",
    byUnitName: "ユニット"
  },
  messages: {
    deactivateTitle: "この購入制限を無効化しますか?",
    deactivate: "無効化された購入制限はユーザまたはユーザグループに割り当てられなくなります。現在の割り当ては影響を受けません。",
    confirmEnabled: "購入制限 {{item.code}} が正常に有効化されました",
    confirmDisabled: "購入制限 {{item.code}} が正常に無効化されました",
    update: "購入制限 {{item.code}} が正常に更新されました",
    create: "購入制限 {{item.code}} が正常に作成されました"
  },
  info: {
    disabledEdit: "編集を許可するために購入制限を有効化します。",
    disabledEnable: "ユニットはこの購入制限ザが有効化される前に有効化されている必要があります。"
  },
  per: {
    DAY: "日ごと",
    WEEK: "週ごと",
    MONTH: "月ごと",
    QUARTER: "四半期ごと",
    YEAR: "年ごと"
  },
  breadcrumbs: {
    list: "すべての購入制限",
    details: "{{code}}"
  }
};
var organization$d = {
  organization: organization$c,
  orgCostCenter: orgCostCenter$6,
  orgCostCenterBudgets: orgCostCenterBudgets$6,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$6,
  orgBudget: orgBudget$6,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$6,
  orgUnit: orgUnit$6,
  orgUnitChildren: orgUnitChildren$6,
  orgUnitApprovers: orgUnitApprovers$6,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$6,
  orgUnitAssignedRoles: orgUnitAssignedRoles$6,
  orgUnitUsers: orgUnitUsers$6,
  orgUnitUserRoles: orgUnitUserRoles$6,
  orgUnitAssignedUsers: orgUnitAssignedUsers$6,
  orgUnitCostCenters: orgUnitCostCenters$6,
  orgUnitAddress: orgUnitAddress$6,
  orgUserGroup: orgUserGroup$6,
  orgUserGroupUsers: orgUserGroupUsers$6,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$6,
  orgUserGroupPermissions: orgUserGroupPermissions$6,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$6,
  orgUser: orgUser$6,
  orgUserUserGroups: orgUserUserGroups$6,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$6,
  orgUserApprovers: orgUserApprovers$6,
  orgUserAssignedApprovers: orgUserAssignedApprovers$6,
  orgUserPermissions: orgUserPermissions$6,
  orgUserAssignedPermissions: orgUserAssignedPermissions$6,
  orgPurchaseLimit: orgPurchaseLimit$6
};
var ja = {
  organization: organization$d
};
var organization$a = {
  enabled: "활성",
  disabled: "비활성화됨",
  enable: "활성화",
  disable: "비활성화",
  name: "이름",
  code: "코드",
  done: "완료",
  cancel: "취소",
  add: "추가",
  manageUsers: "사용자 관리",
  create: "{{name}} 만들기",
  edit: "편집",
  save: "{{name}} 저장",
  "delete": "삭제",
  assign: "관리",
  active: "사용 중",
  status: "상태",
  details: "세부사항",
  messages: {
    emptyList: "목록이 비어 있습니다."
  },
  userRoles: {
    b2bcustomergroup: "고객",
    b2bapprovergroup: "승인자",
    b2bmanagergroup: "매니저",
    b2badmingroup: "관리자"
  },
  userRights: {
    unitorderviewergroup: "단위 레벨 주문 보기"
  },
  breadcrumb: "조직",
  notification: {
    noSufficientPermissions: "이 페이지를 볼 수 있는 충분한 권한이 없습니다.",
    notExist: "이 항목이 없습니다.",
    disabled: "비활성화된 항목은 편집할 수 없습니다."
  },
  confirmation: {
    cancel: "취소",
    confirm: "확인",
    disable: "사용 안 함",
    "delete": "삭제"
  },
  httpHandlers: {
    conflict: {
      budget: "코드가 {{ code }}인 예산이 이미 있습니다.",
      costCenter: "코드가 {{ code }}인 코스트 센터가 이미 있습니다.",
      unit: "UID가 {{ code }}인 조직 단위가 이미 있습니다.",
      user: "이메일이 {{ code }}인 사용자가 이미 있습니다.",
      userGroup: "ID가 {{ code }}인 사용자 그룹이 이미 있습니다.",
      permission: "코드가 {{ code }}인 승인 권한이 이미 있습니다.",
      unknown: "서버 유효성 확인 오류"
    }
  },
  information: "{{title}}에 대한 추가 정보"
};
var orgCostCenter$5 = {
  groupName: "코스트 센터",
  header: "모든 코스트 센터({{count}})",
  code: "코드",
  active: "상태",
  name: "이름",
  currency: "통화",
  unit: "상위 단위",
  actions: "",
  sortBy: "정렬 기준",
  sort: {
    byName: "이름",
    byUnitName: "단위",
    byCode: "코드"
  },
  hint: "조직의 구매 계정으로 작성한 모든 주문은 추적을 목적으로 코스트 센터에 연결되어 있습니다. 각각의 단위는 코스트 센터를 여러 개 가질 수 있습니다. 지출을 제한하기 위해 코스트 센터에 예산이 지정되어 있습니다. 구매자가 체크아웃할 때 코스트 센터를 선택합니다.",
  disable: {
    confirm: "비활성화"
  },
  messages: {
    deactivateTitle: "이 코스트 센터를 비활성화하시겠습니까?",
    deactivate: "비활성화된 코스트 센터는 새 주문을 작성하는 데 사용할 수 없습니다. 단위에 코스트 센터가 하나 이상 있는지 확인하십시오. 기존 주문에는 영향을 주지 않습니다.",
    confirmEnabled: "코스트 센터 {{ item.name }}이(가) 활성화되었습니다.",
    confirmDisabled: "코스트 센터 {{ item.name }}이(가) 비활성화되었습니다.",
    update: "코스트 센터 {{ item.name }}이(가) 업데이트되었습니다.",
    create: "코스트 센터 {{ item.name }}이(가) 작성되었습니다."
  },
  info: {
    disabledEdit: "편집하려면 코스트 센터를 활성화하십시오.",
    disabledEnable: "이 코스트 센터를 활성화하려면 단위가 활성화되어야 합니다."
  },
  details: {
    title: "코스트 센터 세부사항",
    subtitle: "코스트 센터: {{ item.name }}"
  },
  edit: {
    title: "코스트 센터 편집",
    subtitle: "코스트 센터: {{ item.name }}"
  },
  create: {
    title: "코스트 센터 만들기",
    subtitle: ""
  },
  budget: {
    link: "예산"
  },
  breadcrumbs: {
    list: "모든 코스트 센터",
    details: "{{name}}",
    budgets: "예산"
  }
};
var orgCostCenterBudgets$5 = {
  title: "예산 관리",
  subtitle: "코스트 센터: {{ item.name }}",
  assigned: "예산 {{ item.name }}이(가) 할당되었습니다.",
  unassigned: "예산 {{ item.name }}의 할당이 해제되었습니다."
};
var orgCostCenterAssignedBudgets$5 = {
  title: "할당된 예산",
  subtitle: "코스트 센터: {{ item.name }}",
  assigned: "예산 {{ item.name }}이(가) 할당되었습니다.",
  unassigned: "예산 {{ item.name }}의 할당이 해제되었습니다."
};
var orgBudget$5 = {
  groupName: "예산",
  header: "모든 예산({{count}})",
  code: "코드",
  name: "이름",
  active: "상태",
  currency: "통화",
  amount: "금액",
  unit: "단위",
  businessUnits: "단위",
  dateRange: "시작 - 끝",
  startDate: "시작",
  endDate: "끝",
  actions: "",
  sortBy: "정렬 기준",
  sort: {
    byName: "이름",
    byUnitName: "단위",
    byCode: "코드",
    byValue: "값"
  },
  hint: "예산은 전체적인 구매 한도를 설정하며 코스트 센터에 할당됩니다. 구매자가 체크아웃할 때 코스트 센터를 선택합니다.",
  details: {
    title: "예산 세부사항",
    subtitle: "예산: {{ item.name }}"
  },
  edit: {
    title: "예산 편집",
    subtitle: "예산: {{ item.name }}"
  },
  create: {
    title: "예산 만들기",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "이 예산을 비활성화하시겠습니까?",
    deactivate: "비활성화된 예산은 이 예산이 할당된 코스트 센터에 더 이상 반영되지 않습니다. 연결된 코스트 센터에 예산이 하나 이상 있는지 확인하십시오.",
    confirmEnabled: "예산 {{ item.name }}이(가) 활성화되었습니다.",
    confirmDisabled: "예산 {{ item.name }}이(가) 비활성화되었습니다.",
    update: "예산 {{ item.name }}이(가) 업데이트되었습니다.",
    create: "예산 {{ item.name }}이(가) 작성되었습니다."
  },
  info: {
    disabledEdit: "편집하려면 예산을 활성화하십시오.",
    disabledEnable: "이 예산을 활성화하려면 단위가 활성화되어야 합니다."
  },
  links: {
    costCenters: "코스트 센터"
  },
  breadcrumbs: {
    list: "모든 예산",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$5 = {
  title: "코스트 센터",
  subtitle: "예산: {{ item.name }}"
};
var orgUnit$5 = {
  groupName: "단위",
  header: "모든 단위({{count}})",
  unit: "단위",
  name: "이름",
  uid: "ID",
  approvalProcess: "승인 프로세스",
  parentUnit: "상위 단위",
  active: "상태",
  hint: "단위는 부서, 매장 또는 사용자에게 의미가 있는 기타 논리적인 그룹을 나타냅니다. 구매자가 체크아웃할 때 구매자가 사용할 수 있는 코스트 센터와 배송 주소는 구매자의 단위에 따라 달라집니다. 사용자는 기본 단위의 모든 하위 단위에 사용할 수 있습니다.",
  details: {
    title: "단위 세부사항",
    subtitle: "단위: {{ item.name }}",
    hint: "단위는 부서, 매장 또는 사용자에게 의미가 있는 기타 논리적인 그룹을 나타냅니다. 단위를 비활성화하면 하위 단위, 사용자, 승인자, 코스트 센터 등 단위의 모든 하위 단위를 비활성화하는 것입니다. 비활성화된 단위는 편집할 수 없습니다."
  },
  edit: {
    title: "단위 편집",
    subtitle: "단위: {{ item.name }}"
  },
  create: {
    title: "단위 만들기",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "이 단위를 비활성화하시겠습니까?",
    deactivate: "단위를 비활성화하면 커머스 조직에 큰 영향을 줍니다. 단위의 하위 단위, 사용자, 예산, 코스트 센터도 '모두' 비활성화됩니다.",
    confirmEnabled: "단위 {{ item.name }}이(가) 활성화되었습니다.",
    confirmDisabled: "단위 {{ item.name }}이(가) 비활성화되었습니다.",
    update: "단위 {{ item.name }}이(가) 업데이트되었습니다.",
    create: "단위 {{ item.name }}이(가) 작성되었습니다."
  },
  info: {
    disabledEdit: "편집하려면 단위를 활성화하십시오.",
    disabledEnable: "이 단위를 활성화하려면 상위 단위가 활성화되어야 합니다.",
    disabledDisable: "루트 단위는 비활성화할 수 없습니다."
  },
  links: {
    units: "하위 단위",
    users: "사용자",
    approvers: "승인자",
    shippingAddresses: "배송 주소",
    costCenters: "코스트 센터"
  },
  tree: {
    expandAll: "모두 펼치기",
    collapseAll: "모두 접기",
    expand: "펼치기",
    collapse: "접기",
    explore: "하위 단위 탐색"
  },
  children: {
    create: {
      title: "하위 단위 만들기",
      subtitle: ""
    },
    messages: {
      create: "단위 {{ item.name }}이(가) 작성되었습니다."
    }
  },
  costCenters: {
    create: {
      title: "코스트 센터 만들기",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "상위 비즈니스 단위",
    create: "단위 만들기",
    parentOrgUnitNotes: "이 단위는 조직의 최상위 단위입니다. 다른 단위에 할당할 수 없습니다."
  },
  users: {
    header: "{{code}}의 사용자",
    changeUserRoles: "사용자 역할 변경",
    newUser: "새 사용자"
  },
  assignRoles: {
    header: "{{code}}의 역할 관리",
    instructions: {
      check: "사용자에게 역할을 할당하려면 역할 체크박스를 선택하십시오.",
      uncheck: "역할을 제거하려면 역할 체크박스를 지우십시오.",
      changes: "변경 내용이 자동으로 저장됩니다."
    }
  },
  approvers: {
    header: "{{code}}의 승인자",
    assign: "승인자 관리",
    "new": "새 승인자"
  },
  assignApprovers: {
    header: "{{code}}의 승인자 관리",
    instructions: {
      check: "이 단위에 승인자를 할당하려면 사용자 체크박스를 선택하십시오.",
      uncheck: "승인자를 제거하려면 사용자 체크박스를 지우십시오.",
      changes: "변경 내용이 자동으로 저장됩니다."
    },
    hint: "'승인자' 목록에 표시된 사용자에게는 이 단위와 그 하위 단위의 구매자를 위한 승인 권한이 할당됩니다. 승인자 역할을 가진 사용자는 '승인자' 목록에 표시되는 승인자와 별개입니다. 단위에 승인자가 없거나 승인자가 충분한 승인 구매 권한을 가지지 않으면, 관리가 선택될 때까지 단위 계층구조에서 더 높은 승인자를 찾게 됩니다."
  },
  breadcrumbs: {
    list: "모든 단위",
    details: "{{name}}",
    children: "하위 단위",
    users: "사용자",
    approvers: "승인자",
    addresses: "배송 주소",
    addressDetails: "{{formattedAddress}}",
    costCenters: "코스트 센터"
  }
};
var orgUnitChildren$5 = {
  title: "하위 단위",
  subtitle: "단위: {{item.name}}",
  info: {
    disabledCreate: "비활성화된 단위에서는 하위 단위를 만들 수 없습니다."
  },
  hint: '단위는 부서, 매장 또는 사용자에게 의미가 있는 기타 논리적인 그룹을 나타냅니다. 사용자는 하위 단위를 "상속"합니다. 이는 구매자가 체크아웃할 때 하위 단위의 코스트 센터와 배송 주소를 사용할 수 있다는 것을 의미합니다.'
};
var orgUnitApprovers$5 = {
  title: "승인자 관리",
  subtitle: "단위: {{item.name}}",
  assigned: "사용자 {{item.name}}이(가) 할당되었습니다.",
  unassigned: "사용자 {{item.name}}의 할당이 해제되었습니다."
};
var orgUnitAssignedApprovers$5 = {
  title: "할당된 승인자",
  subtitle: "단위: {{item.name}}",
  assigned: "사용자 {{item.name}}이(가) 할당되었습니다.",
  unassigned: "사용자 {{item.name}}의 할당이 해제되었습니다.",
  hint: "'승인자' 목록에 표시된 사용자에게는 이 단위와 그 하위 단위의 구매자를 위한 승인 권한이 할당됩니다. 승인자 역할을 가진 사용자는 '승인자' 목록에 표시되는 승인자와 별개입니다. 단위에 승인자가 없거나 승인자가 충분한 승인 구매 권한을 가지지 않으면, 관리가 선택될 때까지 단위 계층구조에서 더 높은 승인자를 찾게 됩니다."
};
var orgUnitAssignedRoles$5 = {
  header: "{{code}}의 역할 관리",
  name: "이름",
  email: "이메일",
  roles: "역할",
  roleCustomer: "고객",
  roleApprover: "승인자",
  roleManager: "매니저",
  roleAdministrator: "관리자"
};
var orgUnitUsers$5 = {
  title: "할당된 사용자",
  subtitle: "단위: {{item.name}}",
  info: {
    disabledCreate: "비활성화된 단위에서는 사용자를 만들 수 없습니다."
  },
  hint: '사용자는 조직의 구매자, 승인자, 매니저, 관리자입니다. 각각의 사용자에게는 구매하거나 승인하기 위한 역할이 할당됩니다. 사용자는 하위 단위를 "상속"합니다. 이는 구매자가 체크아웃할 때 하위 단위의 코스트 센터와 배송 주소를 사용할 수 있다는 것을 의미합니다.'
};
var orgUnitUserRoles$5 = {
  title: "사용자 역할 및 권리",
  subtitle: "사용자: {{item.name}}",
  messages: {
    rolesUpdated: "{{item.name}}의 역할이 업데이트되었습니다."
  }
};
var orgUnitAssignedUsers$5 = {
  title: "할당된 사용자",
  subtitle: "단위: {{item.name}}"
};
var orgUnitCostCenters$5 = {
  title: "할당된 코스트 센터",
  subtitle: "단위: {{item.name}}",
  info: {
    disabledCreate: "비활성화된 단위에서는 코스트 센터를 만들 수 없습니다."
  },
  hint: '조직의 구매 계정으로 작성한 모든 주문은 추적을 목적으로 코스트 센터에 연결되어 있습니다. 구매자가 "계정" 구매 방법을 사용하여 체크아웃할 때 코스트 센터를 선택합니다. 각각의 단위는 코스트 센터를 여러 개 가질 수 있지만 하나의 코스트 센터는 하나의 단위에만 할당될 수 있습니다. 최종 지출 한도를 정의하기 위해 코스트 센터에 예산이 할당되어 있습니다. '
};
var orgUnitAddress$5 = {
  title: "배송 주소",
  subtitle: "단위: {{item.name}}",
  country: "국가/지역",
  titles: "호칭",
  firstName: "이름",
  lastName: "성",
  formattedAddress: "주소",
  address1: "주소",
  address2: "주소 2(선택사항)",
  city: "시/구/군",
  state: "시/도",
  zipCode: "우편번호",
  phoneNumber: "전화번호(선택사항)",
  streetAddress: "거리 주소",
  aptSuite: "아파트 호수",
  selectOne: "하나를 선택하십시오...",
  hint: '구매자가 "계정" 구매 방법을 사용하여 체크아웃할 때 코스터 센터를 선택해야 합니다. 구매자가 선택할 수 있는 배송 주소는 선택한 코스트 센터의 단위에 따라 달라집니다.',
  details: {
    title: "주소 세부사항",
    subtitle: "단위: {{item.name}}"
  },
  edit: {
    title: "주소 편집"
  },
  create: {
    title: "주소 만들기"
  },
  form: {
    subtitle: "단위: {{item.name}}"
  },
  messages: {
    create: "주소 {{ item.firstName }} {{ item.lastName }}이(가) 작성되었습니다.",
    update: "주소 {{ item.firstName }} {{ item.lastName }}이(가) 업데이트되었습니다.",
    "delete": "주소를 가져올 수 없습니다. 기존 주문에는 영향을 주지 않습니다.",
    deleteTitle: "이 주소 삭제",
    deleted: "주소 {{ item.firstName }} {{ item.lastName }}이(가) 삭제되었습니다."
  }
};
var orgUserGroup$5 = {
  groupName: "사용자 그룹",
  header: "모든 사용자 그룹({{count}})",
  disabled: "(비활성화됨)",
  uid: "코드",
  name: "이름",
  unit: "단위",
  orgUnit: "단위",
  actions: "",
  sortBy: "정렬 기준",
  sort: {
    byName: "이름",
    byUnitName: "단위",
    byGroupID: "그룹"
  },
  hint: "한 번에 많은 사용자에게 구매 한도를 할당할 목적으로, 사용자 그룹을 통해 사용자를 하나의 그룹으로 함께 묶을 수 있습니다.",
  details: {
    title: "사용자 그룹 세부사항",
    subtitle: "사용자 그룹: {{ item.name }}"
  },
  edit: {
    title: "사용자 그룹 편집",
    subtitle: "사용자 그룹: {{ item.name }}"
  },
  create: {
    title: "사용자 그룹 만들기",
    subtitle: ""
  },
  links: {
    user: "사용자",
    permission: "구매 한도"
  },
  messages: {
    update: "사용자 그룹 {{ item.name }}이(가) 업데이트되었습니다.",
    create: "사용자 그룹 {{ item.name }}이(가) 작성되었습니다.",
    deleteTitle: "이 사용자 그룹 삭제",
    "delete": "사용자 그룹이 삭제되면 이 그룹의 사용자는 영향을 받지 않습니다.",
    deleted: "사용자 그룹 {{ item.name }}이(가) 삭제되었습니다."
  },
  breadcrumbs: {
    list: "모든 사용자 그룹",
    details: "{{name}}",
    users: "사용자",
    permissions: "구매 한도"
  }
};
var orgUserGroupUsers$5 = {
  title: "사용자 관리",
  subtitle: "사용자 그룹: {{ item.name }}",
  assigned: "사용자 {{item.name}}이(가) 할당되었습니다.",
  unassigned: "사용자 {{item.name}}의 할당이 해제되었습니다.",
  unassignAll: "모두 할당 해제 ",
  unassignAllConfirmation: "모든 사용자의 할당이 해제되었습니다."
};
var orgUserGroupAssignedUsers$5 = {
  title: "할당된 사용자",
  subtitle: "사용자 그룹: {{ item.name }}",
  assigned: "사용자 {{item.name}}이(가) 할당되었습니다.",
  unassigned: "사용자 {{item.name}}의 할당이 해제되었습니다."
};
var orgUserGroupPermissions$5 = {
  title: "구매 한도 관리",
  subtitle: "한도: {{ item.name }}",
  assigned: "구매 한도 {{item.code}}이(가) 할당되었습니다.",
  unassigned: "구매 한도 {{item.code}}의 할당이 해제되었습니다."
};
var orgUserGroupAssignedPermissions$5 = {
  title: "할당된 구매 한도",
  subtitle: "한도: {{ item.name }}",
  assigned: "구매 한도 {{item.code}}이(가) 할당되었습니다.",
  unassigned: "구매 한도 {{item.code}}의 할당이 해제되었습니다."
};
var orgUser$5 = {
  groupName: "사용자",
  header: "모든 사용자({{count}})",
  disabled: "(비활성화됨)",
  uid: "이메일",
  active: "상태",
  name: "이름",
  firstName: "이름",
  lastName: "성",
  email: "이메일",
  orgUnit: "단위",
  unit: "단위",
  roles: "역할",
  rights: "권리",
  title: "호칭",
  hint: "사용자는 조직의 구매자, 승인자, 매니저, 관리자입니다. 각각의 사용자에게는 구매를 작성하거나 승인하기 위한 역할이 할당됩니다. 각각의 사용자는 단위에 속해 있고 기본 단위의 모든 하위 단위에 액세스할 수 있습니다.",
  unitApprover: "단위 승인자",
  assignApprover: "단위의 승인자에게 사용자를 추가합니다.",
  actions: "",
  sortBy: "정렬 기준",
  sort: {
    byName: "이름",
    byUnit: "단위"
  },
  details: {
    title: "사용자 세부사항",
    subtitle: "사용자: {{ item.name }}"
  },
  edit: {
    title: "사용자 편집",
    subtitle: "사용자: {{ item.name }}"
  },
  create: {
    title: "사용자 만들기",
    subtitle: ""
  },
  links: {
    password: "암호 변경",
    approvers: "승인자",
    userGroup: "사용자 그룹",
    permission: "구매 한도",
    rolesAndRights: "역할 및 권리"
  },
  messages: {
    deactivateTitle: "이 사용자 비활성화",
    deactivate: "비활성화된 사용자는 상점에 로그온하여 주문할 수 없습니다.",
    confirmEnabled: "사용자 {{item.firstName}} {{item.lastName}}이(가) 활성화되었습니다.",
    confirmDisabled: "사용자 {{item.firstName}} {{item.lastName}}이(가) 비활성화되었습니다.",
    update: "사용자 {{item.firstName}} {{item.lastName}}이(가) 업데이트되었습니다.",
    create: "사용자 {{item.firstName}} {{item.lastName}}이(가) 작성되었습니다.",
    updatePassword: "사용자 {{item.firstName}} {{item.lastName}} 암호가 업데이트되었습니다."
  },
  info: {
    disabledEdit: "편집하려면 사용자를 활성화하십시오.",
    disabledEnable: "이 사용자를 활성화하려면 단위가 활성화되어야 합니다."
  },
  approver: {
    link: "승인자",
    header: "{{code}}의 승인자",
    assign: "승인자 할당",
    assignHeader: "{{code}}의 승인자 할당",
    back: "뒤로",
    "new": "새 승인자",
    instructions: {
      check: "이 사용자에게 승인자를 할당하려면 사용자 체크박스를 선택하십시오.",
      uncheck: "승인자를 제거하려면 사용자 체크박스를 지우십시오.",
      changes: "변경 내용이 자동으로 저장됩니다."
    }
  },
  userGroup: {
    link: "사용자 그룹",
    header: "{{code}}의 사용자 그룹",
    assign: "사용자 그룹 할당",
    assignHeader: "{{code}}의 사용자 그룹 할당",
    back: "뒤로",
    instructions: {
      check: "이 사용자에게 사용자 그룹을 할당하려면 사용자 체크박스를 선택하십시오.",
      uncheck: "사용자 그룹을 제거하려면 사용자 체크박스를 지우십시오.",
      changes: "변경 내용이 자동으로 저장됩니다."
    }
  },
  permission: {
    link: "구매 한도",
    header: "{{code}}의 구매 한도",
    assign: "구매 한도 할당",
    assignHeader: "{{code}}의 구매 한도 할당",
    back: "뒤로",
    instructions: {
      check: "이 사용자에게 구매 한도를 할당하려면 체크박스를 선택하십시오.",
      uncheck: "구매 한도 할당을 해제하려면 체크박스를 지우십시오.",
      changes: "변경 내용이 자동으로 저장됩니다."
    },
    per: {
      "undefined": "",
      MONTH: "월별",
      YEAR: "연도별",
      WEEK: "주별",
      QUARTER: "분기별"
    }
  },
  password: {
    title: "암호 변경",
    subtitle: "사용자: {{ item.email }}",
    newPassword: "새 암호",
    confirmPassword: "새 암호 다시 입력"
  },
  breadcrumbs: {
    list: "모든 사용자",
    details: "{{name}}",
    userGroups: "사용자 그룹",
    approvers: "승인자",
    permissions: "구매 한도"
  }
};
var orgUserUserGroups$5 = {
  title: "사용자 그룹 관리",
  subtitle: "사용자: {{ item.name }}",
  assigned: "사용자 그룹 {{item.name}}이(가) 할당되었습니다.",
  unassigned: "사용자 그룹 {{item.name}}의 할당이 해제되었습니다."
};
var orgUserAssignedUserGroups$5 = {
  title: "할당된 사용자 그룹",
  subtitle: "사용자: {{ item.name }}",
  assigned: "사용자 그룹 {{item.name}}이(가) 할당되었습니다.",
  unassigned: "사용자 그룹 {{item.name}}의 할당이 해제되었습니다."
};
var orgUserApprovers$5 = {
  title: "승인자 관리",
  subtitle: "사용자: {{ item.name }}",
  assigned: "승인자 {{ item.name }}이(가) 할당되었습니다.",
  unassigned: "승인자 {{ item.name }}의 할당이 해제되었습니다."
};
var orgUserAssignedApprovers$5 = {
  title: "할당된 승인자",
  subtitle: "사용자: {{ item.name }}",
  assigned: "승인자 {{ item.name }}이(가) 할당되었습니다.",
  unassigned: "승인자 {{ item.name }}의 할당이 해제되었습니다."
};
var orgUserPermissions$5 = {
  title: "구매 한도 관리",
  subtitle: "사용자: {{ item.name }}",
  assigned: "구매 한도 {{ item.code }}이(가) 할당되었습니다.",
  unassigned: "구매 한도 {{ item.code }}의 할당이 해제되었습니다."
};
var orgUserAssignedPermissions$5 = {
  title: "할당된 구매 한도",
  subtitle: "사용자: {{ item.name }}",
  assigned: "구매 한도 {{ item.code }}이(가) 할당되었습니다.",
  unassigned: "구매 한도 {{ item.code }}의 할당이 해제되었습니다."
};
var orgPurchaseLimit$5 = {
  groupName: "구매 한도",
  header: "모든 구매 한도({{count}})",
  name: "이름",
  code: "코드",
  active: "상태",
  limit: "한도",
  orderApprovalPermissionType: "유형",
  threshold: "임계값",
  periodRange: "기간",
  currency: "통화",
  orgUnit: "상위 단위",
  unit: "상위 단위",
  actions: "",
  hint: "구매 한도는 구매자가 주문당 또는 주별, 월별, 분기별 또는 연도별 지출할 수 있는 금액을 정의하여 지출을 관리하는 데 도움이 됩니다. 구매 한도는 사용자나 사용자 그룹에 할당됩니다. 구매 한도는 승인자에게도 할당되어서 승인자가 승인할 권한이 있는 금액을 정의합니다. 사용자 그룹으로 한 번에 많은 사용자에게 구매 한도를 할당할 수 있습니다.",
  details: {
    title: "구매 한도 세부사항",
    subtitle: "구매 한도: {{ item.code }}"
  },
  edit: {
    title: "구매 한도 편집",
    subtitle: "구매 한도: {{ item.code }}"
  },
  create: {
    title: "구매 한도 만들기",
    subtitle: ""
  },
  sortBy: "정렬 기준",
  sort: {
    byName: "이름",
    byUnitName: "단위"
  },
  messages: {
    deactivateTitle: "이 구매 한도 비활성화",
    deactivate: "구매 한도를 비활성화하면 사용자나 사용자 그룹에 더 이상 할당할 수 없습니다. 현재 할당된 구매 한도에는 영향을 주지 않습니다.",
    confirmEnabled: "구매 한도 {{ item.code }}이(가) 활성화되었습니다.",
    confirmDisabled: "구매 한도 {{ item.code }}이(가) 비활성화되었습니다.",
    update: "구매 한도 {{ item.code }}이(가) 업데이트되었습니다.",
    create: "구매 한도 {{ item.code }}이(가) 작성되었습니다."
  },
  info: {
    disabledEdit: "편집하려면 구매 한도를 활성화하십시오.",
    disabledEnable: "이 구매 한도를 활성화하려면 단위가 활성화되어야 합니다."
  },
  per: {
    DAY: "일별",
    WEEK: "주별",
    MONTH: "월별",
    QUARTER: "분기별",
    YEAR: "연도별"
  },
  breadcrumbs: {
    list: "모든 구매 한도",
    details: "{{code}}"
  }
};
var organization$b = {
  organization: organization$a,
  orgCostCenter: orgCostCenter$5,
  orgCostCenterBudgets: orgCostCenterBudgets$5,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$5,
  orgBudget: orgBudget$5,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$5,
  orgUnit: orgUnit$5,
  orgUnitChildren: orgUnitChildren$5,
  orgUnitApprovers: orgUnitApprovers$5,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$5,
  orgUnitAssignedRoles: orgUnitAssignedRoles$5,
  orgUnitUsers: orgUnitUsers$5,
  orgUnitUserRoles: orgUnitUserRoles$5,
  orgUnitAssignedUsers: orgUnitAssignedUsers$5,
  orgUnitCostCenters: orgUnitCostCenters$5,
  orgUnitAddress: orgUnitAddress$5,
  orgUserGroup: orgUserGroup$5,
  orgUserGroupUsers: orgUserGroupUsers$5,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$5,
  orgUserGroupPermissions: orgUserGroupPermissions$5,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$5,
  orgUser: orgUser$5,
  orgUserUserGroups: orgUserUserGroups$5,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$5,
  orgUserApprovers: orgUserApprovers$5,
  orgUserAssignedApprovers: orgUserAssignedApprovers$5,
  orgUserPermissions: orgUserPermissions$5,
  orgUserAssignedPermissions: orgUserAssignedPermissions$5,
  orgPurchaseLimit: orgPurchaseLimit$5
};
var ko = {
  organization: organization$b
};
var organization$8 = {
  enabled: "Aktywne",
  disabled: "Wyłączone",
  enable: "Włącz",
  disable: "Wyłącz",
  name: "Nazwa",
  code: "Kod",
  done: "gotowe",
  cancel: "Anuluj",
  add: "Dodaj",
  manageUsers: "Zarządzaj użytkownikami",
  create: "Utwórz {{name}}",
  edit: "Edytuj",
  save: "Zapisz {{name}}",
  "delete": "Usuń",
  assign: "Zarządzaj",
  active: "Aktywne",
  status: "Status",
  details: "Szczegóły",
  messages: {
    emptyList: "Ta lista jest pusta"
  },
  userRoles: {
    b2bcustomergroup: "Klient",
    b2bapprovergroup: "Osoba zatwierdzająca",
    b2bmanagergroup: "Menedżer",
    b2badmingroup: "Administrator"
  },
  userRights: {
    unitorderviewergroup: "Wyświetl zamówienia na poziomie jednostki"
  },
  breadcrumb: "Organizacja",
  notification: {
    noSufficientPermissions: "Niewystarczające uprawnienia dostępu do tej strony.",
    notExist: "Ta pozycja nie istnieje.",
    disabled: "Nie możesz edytować wyłączonej pozycji"
  },
  confirmation: {
    cancel: "ANULUJ",
    confirm: "POTWIERDŹ",
    disable: "WYŁĄCZ",
    "delete": "USUŃ"
  },
  httpHandlers: {
    conflict: {
      budget: "Budżet z kodem {{ code }} już istnieje.",
      costCenter: "Miejsce powstawania kosztów z kodem {{ code }} już istnieje.",
      unit: "Jednostka organizacyjna z UID {{ code }} już istnieje.",
      user: "Użytkownik z adresem e-mail {{ code }} już istnieje",
      userGroup: "Grupa użytkowników z ID {{ code }} już istnieje",
      permission: "Uprawnienie do zatwierdzania z kodem {{ code }} już istnieje.",
      unknown: "Błąd walidacji serwera."
    }
  },
  information: "Więcej informacji o planie {{title}}"
};
var orgCostCenter$4 = {
  groupName: "Miejsca powstawania kosztów",
  header: "Wszystkie miejsca powstawania kosztów ({{count}})",
  code: "Kod",
  active: "Status",
  name: "Nazwa",
  currency: "Waluta",
  unit: "Jednostka nadrzędna",
  actions: "",
  sortBy: "Sortuj według",
  sort: {
    byName: "Nazwa",
    byUnitName: "Jednostka",
    byCode: "Kod"
  },
  hint: "Wszystkie zamówienia złożone za pośrednictwem konta zakupowego organizacji są powiązane z miejscem powstawania kosztów w celu ich śledzenia. Każda jednostka może mieć wiele miejsc powstawania kosztów. Aby ograniczyć wydatki, budżety są przypisywane do miejsc powstawania kosztów. Nabywca wybiera miejsce powstawania kosztów podczas dokonywania zakupu.",
  disable: {
    confirm: "Wyłącz"
  },
  messages: {
    deactivateTitle: "Wyłączyć to miejsce powstawania kosztów?",
    deactivate: "Wyłączone miejsca powstawania kosztów nie mogą być używane do składania nowych zamówień. Upewnij się, że Twoja jednostka ma co najmniej jedno miejsce powstawania kosztów. Nie ma to wpływu na istniejące zamówienia.",
    confirmEnabled: "Miejsce powstawania kosztów {{ item.name }} zostało włączone",
    confirmDisabled: "Miejsce powstawania kosztów {{ item.name }} zostało wyłączone",
    update: "Miejsce powstawania kosztów {{ item.name }} zostało zaktualizowane",
    create: "Miejsce powstawania kosztów {{ item.name }} zostało utworzone"
  },
  info: {
    disabledEdit: "Włącz miejsce powstawania kosztów, aby umożliwić edycję",
    disabledEnable: "Jednostkę należy włączyć przed włączeniem tego miejsca powstawania kosztów."
  },
  details: {
    title: "Szczegóły miejsca powstawania kosztów",
    subtitle: "Miejsce powstawania kosztów: {{ item.name }}"
  },
  edit: {
    title: "Edytuj miejsce powstawania kosztów",
    subtitle: "Miejsce powstawania kosztów: {{ item.name }}"
  },
  create: {
    title: "Utwórz miejsce powstawania kosztów",
    subtitle: ""
  },
  budget: {
    link: "Budżety"
  },
  breadcrumbs: {
    list: "Wszystkie miejsca powstawania kosztów",
    details: "{{name}}",
    budgets: "Budżety"
  }
};
var orgCostCenterBudgets$4 = {
  title: "Zarządzanie budżetami",
  subtitle: "Miejsce powstawania kosztów: {{ item.name }}",
  assigned: "Budżet {{ item.name }} został przypisany",
  unassigned: "Usunięto przypisanie budżetu {{ item.name }}"
};
var orgCostCenterAssignedBudgets$4 = {
  title: "Przypisane budżety",
  subtitle: "Miejsce powstawania kosztów: {{ item.name }}",
  assigned: "Budżet {{ item.name }} został przypisany",
  unassigned: "Usunięto przypisanie budżetu {{ item.name }}"
};
var orgBudget$4 = {
  groupName: "Budżety",
  header: "Wszystkie budżety ({{count}})",
  code: "Kod",
  name: "Nazwa",
  active: "Status",
  currency: "Waluta",
  amount: "Kwota",
  unit: "Jednostka",
  businessUnits: "Jednostka",
  dateRange: "Początek - Koniec",
  startDate: "Początek",
  endDate: "Koniec",
  actions: "",
  sortBy: "Sortuj według",
  sort: {
    byName: "Nazwa",
    byUnitName: "Jednostka",
    byCode: "Kod",
    byValue: "Wartość"
  },
  hint: "Budżety określają ogólne limity zakupów i są przypisane do miejsc powstawania kosztów. Nabywca wybiera miejsce powstawania kosztów podczas dokonywania zakupu.",
  details: {
    title: "Szczegóły budżetu",
    subtitle: "Budżet: {{ item.name }}"
  },
  edit: {
    title: "Edytuj budżet",
    subtitle: "Budżet: {{ item.name }}"
  },
  create: {
    title: "Utwórz budżet",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Czy wyłączyć budżet?",
    deactivate: "Wyłączone budżety nie mają już zastosowania do miejsc powstawania kosztów, do których zostały przypisane. Upewnij się, że powiązane miejsce powstawania kosztów ma co najmniej jeden budżet.",
    confirmEnabled: "Budżet {{ item.name }} został włączony",
    confirmDisabled: "Budżet {{ item.name }} został wyłączony",
    update: "Budżet {{ item.name }} został zaktualizowany",
    create: "Budżet {{ item.name }} został utworzony"
  },
  info: {
    disabledEdit: "Włącz budżet, aby umożliwić edycję.",
    disabledEnable: "Jednostkę należy włączyć przed włączeniem tego budżetu."
  },
  links: {
    costCenters: "Miejsca powstawania kosztów"
  },
  breadcrumbs: {
    list: "Wszystkie budżety",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$4 = {
  title: "Miejsca powstawania kosztów",
  subtitle: "Budżet: {{ item.name }}"
};
var orgUnit$4 = {
  groupName: "Jednostki",
  header: "Wszystkie jednostki ({{count}})",
  unit: "Jednostka",
  name: "Nazwa",
  uid: "ID",
  approvalProcess: "Proces zatwierdzania",
  parentUnit: "Jednostka nadrzędna",
  active: "Status",
  hint: "Jednostki reprezentują działy, sklepy, regiony lub inne grupy logiczne, które mają sens. Miejsca powstawania kosztów i adresy dostawy dostępne dla nabywcy podczas dokonywania płatności zależą od jego jednostki. Użytkownicy mają dostęp do wszystkich jednostek podrzędnych swojej jednostki podstawowej.",
  details: {
    title: "Szczegóły jednostki",
    subtitle: "Jednostka: {{ item.name }}",
    hint: "Jednostki reprezentują działy, sklepy, regiony lub inne grupy logiczne, które mają sens. Wyłączenie jednostki powoduje wyłączenie wszystkich elementów podrzędnych tej jednostki, w tym jednostek podrzędnych, użytkowników, osób zatwierdzających i miejsc powstawania kosztów. Wyłączonych jednostek nie można edytować."
  },
  edit: {
    title: "Edytuj jednostkę",
    subtitle: "Jednostka: {{ item.name }}"
  },
  create: {
    title: "Utwórz jednostkę",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Czy wyłączyć jednostkę?",
    deactivate: "Wyłączenie jednostki ma szeroki wpływ na organizację handlową. WSZYSTKIE jednostki podrzędne danej jednostki, użytkownicy, budżety i miejsca powstawania kosztów również zostaną wyłączone.",
    confirmEnabled: "Jednostka {{ item.name }} została włączona",
    confirmDisabled: "Jednostka {{ item.name }} została wyłączona",
    update: "Jednostka {{ item.name }} została zaktualizowana",
    create: "Jednostka {{ item.name }} została utworzona"
  },
  info: {
    disabledEdit: "Włącz jednostkę, aby umożliwić edycję.",
    disabledEnable: "Jednostkę nadrzędną należy włączyć przed włączeniem tej jednostki.",
    disabledDisable: "Nie można wyłączyć jednostki głównej."
  },
  links: {
    units: "Jednostki podrzędne",
    users: "Użytkownicy",
    approvers: "Osoby zatwierdzające",
    shippingAddresses: "Adresy dostawy",
    costCenters: "Miejsca powstawania kosztów"
  },
  tree: {
    expandAll: "Rozwiń wszystkie",
    collapseAll: "Zwiń wszystkie",
    expand: "Rozwiń",
    collapse: "zwiń",
    explore: "Analizuj jednostki podrzędne"
  },
  children: {
    create: {
      title: "Utwórz jednostkę podrzędną",
      subtitle: ""
    },
    messages: {
      create: "Jednostka {{ item.name }} została utworzona"
    }
  },
  costCenters: {
    create: {
      title: "Utwórz miejsce powstawania kosztów",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Nadrzędna jednostka biznesowa",
    create: "Utwórz jednostkę",
    parentOrgUnitNotes: "Ta jednostka jest jednostką najwyższego poziomu w organizacji. Nie można jej przypisać do innej jednostki."
  },
  users: {
    header: "Użytkownicy w {{code}}",
    changeUserRoles: "Zmień role użytkownika",
    newUser: "Nowy użytkownik"
  },
  assignRoles: {
    header: "Zarządzanie rolami w {{code}}",
    instructions: {
      check: "Aby przypisać rolę do użytkownika, zaznacz pole wyboru roli.",
      uncheck: "Aby usunąć rolę, wyczyść jej pole wyboru.",
      changes: "Zmiany są zapisywane automatycznie."
    }
  },
  approvers: {
    header: "Osoby zatwierdzające w {{code}}",
    assign: "Zarządzanie osobami zatwierdzającymi",
    "new": "Nowa osoba zatwierdzająca"
  },
  assignApprovers: {
    header: "Zarządzanie osobami zatwierdzającymi w {{code}}",
    instructions: {
      check: "Aby przypisać osobę zatwierdzającą do jednostki, zaznacz pole wyboru użytkownika.",
      uncheck: "Aby usunąć osobę zatwierdzającą, odznacz pole wyboru użytkownika.",
      changes: "Zmiany są zapisywane automatycznie."
    },
    hint: "Użytkownicy wyświetlani na liście zatwierdzających mają przypisane uprawnienia do zatwierdzania nabywców danej jednostki i jednostek podrzędnych. Zwróć uwagę, że użytkownik, który ma rolę osoby zatwierdzającej, jest niezależny od osoby zatwierdzającej, która pojawia się na liście osób zatwierdzających. Jeśli osoba zatwierdzająca nie istnieje dla jednostki lub jeśli osoby zatwierdzające nie mają wystarczających uprawnień do zatwierdzania zakupów, wyszukiwana jest osoba zatwierdzająca znajdująca się wyżej w hierarchii jednostek, aż do momentu wybrania administratora."
  },
  breadcrumbs: {
    list: "Wszystkie jednostki",
    details: "{{name}}",
    children: "Jednostki podrzędne",
    users: "Użytkownicy",
    approvers: "Osoby zatwierdzające",
    addresses: "Adresy dostawy",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Miejsca powstawania kosztów"
  }
};
var orgUnitChildren$4 = {
  title: "Jednostki podrzędne",
  subtitle: "Jednostka: {{item.name}}",
  info: {
    disabledCreate: "Nie można utworzyć jednostki podrzędnej dla wyłączonej jednostki."
  },
  hint: 'Jednostki reprezentują działy, sklepy, regiony lub inne logiczne grupy, które mają sens. Użytkownicy "dziedziczą" jednostki podrzędne, co oznacza, że nabywcy mają dostęp do miejsc powstawania kosztów i adresów dostawy jednostek podrzędnych podczas dokonywania płatności.'
};
var orgUnitApprovers$4 = {
  title: "Zarządzanie osobami zatwierdzającymi",
  subtitle: "Jednostka: {{item.name}}",
  assigned: "Użytkownik {{ item.name }} został przypisany",
  unassigned: "Usunięto przypisanie użytkownika {{ item.name }}"
};
var orgUnitAssignedApprovers$4 = {
  title: "Przypisane osoby zatwierdzające",
  subtitle: "Jednostka: {{item.name}}",
  assigned: "Użytkownik {{ item.name }} został przypisany",
  unassigned: "Usunięto przypisanie użytkownika {{ item.name }}",
  hint: "Użytkownicy wyświetlani na liście zatwierdzających mają przypisane uprawnienia do zatwierdzania nabywców danej jednostki i jednostek podrzędnych. Zwróć uwagę, że użytkownik, który ma rolę osoby zatwierdzającej, jest niezależny od osoby zatwierdzającej, która pojawia się na liście osób zatwierdzających. Jeśli osoba zatwierdzająca nie istnieje dla jednostki lub jeśli osoby zatwierdzające nie mają wystarczających uprawnień do zatwierdzania zakupów, wyszukiwana jest osoba zatwierdzająca znajdująca się wyżej w hierarchii jednostek, aż do momentu wybrania administratora."
};
var orgUnitAssignedRoles$4 = {
  header: "Zarządzanie rolami w {{code}}",
  name: "Nazwa",
  email: "E-mail",
  roles: "Role",
  roleCustomer: "Klient",
  roleApprover: "Osoba zatwierdzająca",
  roleManager: "Menedżer",
  roleAdministrator: "Administrator"
};
var orgUnitUsers$4 = {
  title: "Przypisani użytkownicy",
  subtitle: "Jednostka: {{item.name}}",
  info: {
    disabledCreate: "Nie można utworzyć użytkownika dla wyłączonej jednostki."
  },
  hint: 'Użytkownicy to nabywcy, osoby zatwierdzające, menedżerowie i administratorzy organizacji. Każdy użytkownik ma przypisaną rolę umożliwiającą dokonywanie lub zatwierdzanie zakupów. Użytkownicy "dziedziczą" jednostki podrzędne, co oznacza, że nabywcy mają dostęp do miejsc powstawania kosztów i adresów dostawy jednostek podrzędnych podczas dokonywania płatności.'
};
var orgUnitUserRoles$4 = {
  title: "Role i uprawnienia użytkownika",
  subtitle: "Użytkownik: {{item.name}}",
  messages: {
    rolesUpdated: "Role zostały zaktualizowane dla {{item.name}}"
  }
};
var orgUnitAssignedUsers$4 = {
  title: "Przypisani użytkownicy",
  subtitle: "Jednostka: {{item.name}}"
};
var orgUnitCostCenters$4 = {
  title: "Przypisane miejsca powstawania kosztów",
  subtitle: "Jednostka: {{item.name}}",
  info: {
    disabledCreate: "Nie można utworzyć miejsca powstawania kosztów dla wyłączonej jednostki."
  },
  hint: 'Wszystkie zamówienia złożone za pośrednictwem konta zakupowego organizacji są powiązane z miejscem powstawania kosztów na potrzeby śledzenia. Nabywca wybiera miejsce powstawania kosztów podczas dokonywania płatności używając metody zakupu "Konto". Każda jednostka może mieć wiele miejsc powstawania kosztów, ale jedno miejsce powstawania kosztów może być przypisane tylko do jednej jednostki. Aby zdefiniować ostateczne limity wydatków, budżety są przypisywane do miejsc powstawania kosztów. '
};
var orgUnitAddress$4 = {
  title: "Adresy dostawy",
  subtitle: "Jednostka: {{item.name}}",
  country: "Kraj/region",
  titles: "Tytuł",
  firstName: "Imię",
  lastName: "Nazwisko",
  formattedAddress: "Adres",
  address1: "Adres",
  address2: "2. adres (opcjonalny)",
  city: "Miasto",
  state: "Status",
  zipCode: "Kod pocztowy",
  phoneNumber: "Numer telefonu (opcjonalny)",
  streetAddress: "Ulica",
  aptSuite: "Numer mieszkania",
  selectOne: "Wybierz jeden...",
  hint: 'Gdy nabywca dokonuje płatności, używając metody zakupu "Konto", wybiera miejsce powstawania kosztów. Adresy dostawy dostępne dla nabywcy zależą od jednostki wybranego miejsca powstawania kosztów.',
  details: {
    title: "Dane adresowe",
    subtitle: "Jednostka: {{item.name}}"
  },
  edit: {
    title: "Edytuj adres"
  },
  create: {
    title: "Utwórz adres"
  },
  form: {
    subtitle: "Jednostka: {{item.name}}"
  },
  messages: {
    create: "Adres {{ item.firstName }} {{ item.lastName }} został utworzony",
    update: "Adres {{ item.firstName }} {{ item.lastName }} został zaktualizowany",
    "delete": "Nie można przywrócić adresu. Nie ma to wpływu na istniejące zamówienia.",
    deleteTitle: "Czy usunąć ten adres?",
    deleted: "Adres {{ item.firstName }} {{ item.lastName }} został usunięty"
  }
};
var orgUserGroup$4 = {
  groupName: "Grupy użytkowników",
  header: "Wszystkie grupy użytkowników ({{count}})",
  disabled: "(wyłączony)",
  uid: "Kod",
  name: "Nazwa",
  unit: "Jednostka",
  orgUnit: "Jednostka",
  actions: "",
  sortBy: "Sortuj według",
  sort: {
    byName: "Nazwa",
    byUnitName: "Jednostka",
    byGroupID: "Grupa"
  },
  hint: "Grupy użytkowników umożliwiają łączenie użytkowników w jedną grupę w celu przypisania limitów zakupów dla wielu użytkowników jednocześnie.",
  details: {
    title: "Szczegóły grupy użytkowników",
    subtitle: "Grupa użytkowników: {{item.name}}"
  },
  edit: {
    title: "Edytuj grupę użytkowników",
    subtitle: "Grupa użytkowników: {{item.name}}"
  },
  create: {
    title: "Utwórz grupę użytkowników",
    subtitle: ""
  },
  links: {
    user: "Użytkownicy",
    permission: "Limity zakupów"
  },
  messages: {
    update: "Grupa użytkowników {{ item.name }} została zaktualizowana",
    create: "Grupa użytkowników {{ item.name }} została utworzona",
    deleteTitle: "Usunąć tę grupę użytkowników?",
    "delete": "Usunięcie grupy użytkowników nie ma wpływu na użytkowników należących do tej grupy.",
    deleted: "Grupa użytkowników {{ item.name }} została usunięta"
  },
  breadcrumbs: {
    list: "Wszystkie grupy użytkowników",
    details: "{{name}}",
    users: "Użytkownicy",
    permissions: "Limity zakupów"
  }
};
var orgUserGroupUsers$4 = {
  title: "Zarządzanie użytkownikami",
  subtitle: "Grupa użytkowników: {{item.name}}",
  assigned: "Użytkownik {{ item.name }} został przypisany",
  unassigned: "Usunięto przypisanie użytkownika {{ item.name }}",
  unassignAll: "Usuń przypisania wszystkich",
  unassignAllConfirmation: "Usunięto przypisania wszystkich użytkowników"
};
var orgUserGroupAssignedUsers$4 = {
  title: "Przypisani użytkownicy",
  subtitle: "Grupa użytkowników: {{item.name}}",
  assigned: "Użytkownik {{ item.name }} został przypisany",
  unassigned: "Usunięto przypisanie użytkownika {{ item.name }}"
};
var orgUserGroupPermissions$4 = {
  title: "Zarządzanie limitami zakupów",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Limity zakupów {{item.code}} zostały przypisane",
  unassigned: "Usunięto przypisania limitów zakupów {{item.code}}"
};
var orgUserGroupAssignedPermissions$4 = {
  title: "Przypisane limity zakupów",
  subtitle: "Limit: {{ item.name }}",
  assigned: "Limity zakupów {{item.code}} zostały przypisane",
  unassigned: "Usunięto przypisania limitów zakupów {{item.code}}"
};
var orgUser$4 = {
  groupName: "Użytkownicy",
  header: "Wszyscy użytkownicy ({{count}})",
  disabled: "(wyłączony)",
  uid: "E-mail",
  active: "Status",
  name: "Nazwa",
  firstName: "Imię",
  lastName: "Nazwisko",
  email: "E-mail",
  orgUnit: "Jednostka",
  unit: "Jednostka",
  roles: "Role",
  rights: "Uprawnienia",
  title: "Tytuł",
  hint: "Użytkownicy to nabywcy, osoby zatwierdzające, menedżerowie i administratorzy organizacji. Każdy użytkownik ma przypisaną rolę umożliwiającą dokonywanie lub zatwierdzanie zakupów. Każdy użytkownik należy do jednostki i ma dostęp do wszystkich jednostek podrzędnych swojej jednostki podstawowej.",
  unitApprover: "Osoba zatwierdzająca jednostki",
  assignApprover: "Dodanie użytkownika do osób zatwierdzających dla jednostki",
  actions: "",
  sortBy: "Sortuj według",
  sort: {
    byName: "Nazwa",
    byUnit: "Jednostka"
  },
  details: {
    title: "Szczegóły użytkownika",
    subtitle: "Użytkownik: {{item.name}}"
  },
  edit: {
    title: "Edytuj użytkownika",
    subtitle: "Użytkownik: {{item.name}}"
  },
  create: {
    title: "Utwórz użytkownika",
    subtitle: ""
  },
  links: {
    password: "Zmień hasło",
    approvers: "Osoby zatwierdzające",
    userGroup: "Grupy użytkowników",
    permission: "Limity zakupów",
    rolesAndRights: "Role i uprawnienia"
  },
  messages: {
    deactivateTitle: "Czy wyłączyć użytkownika?",
    deactivate: "Wyłączeni użytkownicy nie mogą logować się do sklepu i składać zamówień.",
    confirmEnabled: "Użytkownik {{ item.firstName }} {{ item.lastName }} został włączony",
    confirmDisabled: "Użytkownik {{ item.firstName }} {{ item.lastName }} został wyłączony",
    update: "Użytkownik {{ item.firstName }} {{ item.lastName }} został zaktualizowany",
    create: "Użytkownik {{ item.firstName }} {{ item.lastName }} został utworzony",
    updatePassword: "Hasło użytkownika {{ item.firstName }} {{ item.lastName }} zostało zaktualizowane"
  },
  info: {
    disabledEdit: "Włącz użytkownika, aby umożliwić edycję.",
    disabledEnable: "Jednostkę należy włączyć przed włączeniem tego użytkownika."
  },
  approver: {
    link: "Osoby zatwierdzające",
    header: "Osoby zatwierdzające w {{code}}",
    assign: "Przypisz osoby zatwierdzające",
    assignHeader: "Przypisz osoby zatwierdzające w {{code}}",
    back: "Wstecz",
    "new": "Nowa osoba zatwierdzająca",
    instructions: {
      check: "Aby przypisać osobę zatwierdzającą do użytkownika, zaznacz pole wyboru użytkownika.",
      uncheck: "Aby usunąć osobę zatwierdzającą, odznacz pole wyboru użytkownika.",
      changes: "Zmiany są zapisywane automatycznie."
    }
  },
  userGroup: {
    link: "Grupy użytkowników",
    header: "Grupy użytkowników w {{code}}",
    assign: "Przypisz grupy użytkowników",
    assignHeader: "Przypisz grupy użytkowników do {{code}}",
    back: "Wstecz",
    instructions: {
      check: "Aby przypisać grupę do użytkownika, zaznacz pole wyboru użytkownika.",
      uncheck: "Aby usunąć grupę użytkowników, odznacz pole wyboru użytkownika.",
      changes: "Zmiany są zapisywane automatycznie."
    }
  },
  permission: {
    link: "Limity zakupów",
    header: "Limity zakupów w {{code}}",
    assign: "Przypisz limity zakupów",
    assignHeader: "Przypisz limity zakupów w {{code}}",
    back: "Wstecz",
    instructions: {
      check: "Aby przypisać limity zakupów do użytkownika, zaznacz jego pole wyboru.",
      uncheck: "Aby usunąć przypisanie limitów zakupu, odznacz pole wyboru.",
      changes: "Zmiany są zapisywane automatycznie."
    },
    per: {
      "undefined": "",
      MONTH: "na miesiąc",
      YEAR: "na rok",
      WEEK: "na tydzień",
      QUARTER: "na kwartał"
    }
  },
  password: {
    title: "Zmień hasło",
    subtitle: "Użytkownik: {{item.name}}",
    newPassword: "Nowe hasło",
    confirmPassword: "Wpisz ponownie nowe hasło"
  },
  breadcrumbs: {
    list: "Wszyscy użytkownicy",
    details: "{{name}}",
    userGroups: "Grupy użytkowników",
    approvers: "Osoby zatwierdzające",
    permissions: "Limity zakupów"
  }
};
var orgUserUserGroups$4 = {
  title: "Zarządzanie grupami użytkowników",
  subtitle: "Użytkownik: {{item.name}}",
  assigned: "Grupa użytkowników {{ item.name }} została przypisana",
  unassigned: "Usunięto przypisanie grupy użytkowników {{ item.name }}"
};
var orgUserAssignedUserGroups$4 = {
  title: "Przypisane grupy użytkowników",
  subtitle: "Użytkownik: {{item.name}}",
  assigned: "Grupa użytkowników {{ item.name }} została przypisana",
  unassigned: "Usunięto przypisanie grupy użytkowników {{ item.name }}"
};
var orgUserApprovers$4 = {
  title: "Zarządzanie osobami zatwierdzającymi",
  subtitle: "Użytkownik: {{item.name}}",
  assigned: "Osoba zatwierdzająca {{ item.name }} została przypisana",
  unassigned: "Usunięto przypisanie osoby zatwierdzającej {{ item.name }}"
};
var orgUserAssignedApprovers$4 = {
  title: "Przypisane osoby zatwierdzające",
  subtitle: "Użytkownik: {{item.name}}",
  assigned: "Osoba zatwierdzająca {{ item.name }} została przypisana",
  unassigned: "Usunięto przypisanie osoby zatwierdzającej {{ item.name }}"
};
var orgUserPermissions$4 = {
  title: "Zarządzanie limitami zakupów",
  subtitle: "Użytkownik: {{item.name}}",
  assigned: "Limit zakupów {{item.code}} został przypisany",
  unassigned: "Usunięto przypisanie limitu zakupów {{item.code}}"
};
var orgUserAssignedPermissions$4 = {
  title: "Przypisane limity zakupów",
  subtitle: "Użytkownik: {{item.name}}",
  assigned: "Limit zakupów {{item.code}} został przypisany",
  unassigned: "Usunięto przypisanie limitu zakupów {{item.code}}"
};
var orgPurchaseLimit$4 = {
  groupName: "Limity zakupów",
  header: "Wszystkie limity zakupów ({{count}})",
  name: "Nazwa",
  code: "Kod",
  active: "Status",
  limit: "Limit",
  orderApprovalPermissionType: "Typ",
  threshold: "Wartość progowa",
  periodRange: "Okres",
  currency: "Waluta",
  orgUnit: "Jednostka nadrzędna",
  unit: "Jednostka nadrzędna",
  actions: "",
  hint: "Limity zakupów pomagają kontrolować wydatki, określając, ile nabywcy mogą wydać na zamówienie lub na tydzień, miesiąc, kwartał lub rok. Limity zakupów są przypisywane do użytkowników lub grup użytkowników. Limity zakupów są również przypisywane do osób zatwierdzających, określając, ile mogą zatwierdzić. Za pomocą grup użytkowników można przypisać limity zakupów do wielu użytkowników jednocześnie.",
  details: {
    title: "Szczegóły limitów zakupów",
    subtitle: "Limit zakupów: {{ item.code }}"
  },
  edit: {
    title: "Edytuj limit zakupów",
    subtitle: "Limity zakupów: {{ item.code }}"
  },
  create: {
    title: "Utwórz limit zakupów",
    subtitle: ""
  },
  sortBy: "Sortuj według",
  sort: {
    byName: "Nazwa",
    byUnitName: "Jednostka"
  },
  messages: {
    deactivateTitle: "Czy wyłączyć ten limit zakupów?",
    deactivate: "Wyłączonych limitów zakupów nie można już przypisywać do użytkownika lub grupy użytkowników. Bieżące przypisania nie będą działać.",
    confirmEnabled: "Limit zakupów {{item.code}} został włączony",
    confirmDisabled: "Limit zakupów {{item.code}} został wyłączony",
    update: "Limit zakupów {{item.code}} został zaktualizowany",
    create: "Limit zakupów {{item.code}} został utworzony"
  },
  info: {
    disabledEdit: "Włącz limit zakupów, aby umożliwić edycję.",
    disabledEnable: "Jednostkę należy włączyć przed włączeniem tego limitu zakupów."
  },
  per: {
    DAY: "na dzień",
    WEEK: "na tydzień",
    MONTH: "na miesiąc",
    QUARTER: "na kwartał",
    YEAR: "na rok"
  },
  breadcrumbs: {
    list: "Wszystkie limity zakupów",
    details: "{{code}}"
  }
};
var organization$9 = {
  organization: organization$8,
  orgCostCenter: orgCostCenter$4,
  orgCostCenterBudgets: orgCostCenterBudgets$4,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$4,
  orgBudget: orgBudget$4,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$4,
  orgUnit: orgUnit$4,
  orgUnitChildren: orgUnitChildren$4,
  orgUnitApprovers: orgUnitApprovers$4,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$4,
  orgUnitAssignedRoles: orgUnitAssignedRoles$4,
  orgUnitUsers: orgUnitUsers$4,
  orgUnitUserRoles: orgUnitUserRoles$4,
  orgUnitAssignedUsers: orgUnitAssignedUsers$4,
  orgUnitCostCenters: orgUnitCostCenters$4,
  orgUnitAddress: orgUnitAddress$4,
  orgUserGroup: orgUserGroup$4,
  orgUserGroupUsers: orgUserGroupUsers$4,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$4,
  orgUserGroupPermissions: orgUserGroupPermissions$4,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$4,
  orgUser: orgUser$4,
  orgUserUserGroups: orgUserUserGroups$4,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$4,
  orgUserApprovers: orgUserApprovers$4,
  orgUserAssignedApprovers: orgUserAssignedApprovers$4,
  orgUserPermissions: orgUserPermissions$4,
  orgUserAssignedPermissions: orgUserAssignedPermissions$4,
  orgPurchaseLimit: orgPurchaseLimit$4
};
var pl = {
  organization: organization$9
};
var organization$6 = {
  enabled: "Ativo",
  disabled: "Desativado",
  enable: "Ativar",
  disable: "Desativar",
  name: "Nome",
  code: "Código",
  done: "concluído",
  cancel: "Cancelar",
  add: "Adicionar",
  manageUsers: "Gerenciar usuários",
  create: "Criar {{name}}",
  edit: "Editar",
  save: "Gravar {{name}}",
  "delete": "Eliminar",
  assign: "Gerenciar",
  active: "Ativo",
  status: "Status",
  details: "Detalhes",
  messages: {
    emptyList: "A lista está vazia"
  },
  userRoles: {
    b2bcustomergroup: "Cliente",
    b2bapprovergroup: "Aprovador",
    b2bmanagergroup: "Gerente",
    b2badmingroup: "Administrador"
  },
  userRights: {
    unitorderviewergroup: "Visualizar pedidos no nível da unidade"
  },
  breadcrumb: "Organização",
  notification: {
    noSufficientPermissions: "Sem permissões suficientes para acessar esta página",
    notExist: "Este item não existe",
    disabled: "Você não pode editar um item desativado"
  },
  confirmation: {
    cancel: "CANCELAR",
    confirm: "CONFIRMAR",
    disable: "DESATIVAR",
    "delete": "ELIMINAR"
  },
  httpHandlers: {
    conflict: {
      budget: "O orçamento com o código {{ code }} já existe.",
      costCenter: "O centro de custo com o código {{ code }} já existe.",
      unit: "Unidade organizacional com UID {{ code }} já existe.",
      user: "Usuário com e-mail {{ code }} já existe",
      userGroup: "Grupo de usuários com ID {{ code }} já existe",
      permission: "Permissão de aprovação com código {{ code }} já existe.",
      unknown: "Erro de validação de servidor."
    }
  },
  information: "Mais informações sobre {{title}}"
};
var orgCostCenter$3 = {
  groupName: "Centros de custo",
  header: "Todos os centros de custo ({{count}})",
  code: "Código",
  active: "Status",
  name: "Nome",
  currency: "Moeda",
  unit: "Unidade principal",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nome",
    byUnitName: "Unidade",
    byCode: "Código"
  },
  hint: "Todos os pedidos feitos mediante a conta de compras de sua organização estão vinculados a um centro de custo para fins de acompanhamento. Cada unidade pode ter vários centros de custo. Para limitar os gastos, os orçamentos são atribuídos a centros de custo. Um comprador seleciona um centro de custo ao fazer o check-out.",
  disable: {
    confirm: "Desativar"
  },
  messages: {
    deactivateTitle: "Desativar este centro de custo?",
    deactivate: "Os centros de custo desativados não podem ser utilizados para fazer novos pedidos. Assegure que sua unidade tem pelo menos um centro de custo. Os pedidos existentes não são afetados.",
    confirmEnabled: "Centro de custo {{ item.name }} ativado com êxito",
    confirmDisabled: "Centro de custo {{ item.name }} desativado com êxito",
    update: "Centro de custo {{ item.name }} atualizado com êxito",
    create: "Centro de custo {{ item.name }} criado com êxito"
  },
  info: {
    disabledEdit: "Ativar o centro de custo para permitir a edição.",
    disabledEnable: "A unidade deve ser ativada para que este centro de custo possa ser ativado."
  },
  details: {
    title: "Detalhes do centro de custo",
    subtitle: "Centro de custo: {{ item.name }}"
  },
  edit: {
    title: "Editar centro de custo",
    subtitle: "Centro de custo: {{ item.name }}"
  },
  create: {
    title: "Criar centro de custo",
    subtitle: ""
  },
  budget: {
    link: "Orçamentos"
  },
  breadcrumbs: {
    list: "Todos os centros de custo",
    details: "{{name}}",
    budgets: "Orçamentos"
  }
};
var orgCostCenterBudgets$3 = {
  title: "Gerenciar orçamentos",
  subtitle: "Centro de custo: {{ item.name }}",
  assigned: "Orçamento {{ item.name }} atribuído com êxito",
  unassigned: "Atribuição de orçamento {{ item.name }} anulada com êxito"
};
var orgCostCenterAssignedBudgets$3 = {
  title: "Orçamentos atribuídos",
  subtitle: "Centro de custo: {{ item.name }}",
  assigned: "Orçamento {{ item.name }} atribuído com êxito",
  unassigned: "Orçamento {{ item.name }} atribuído com êxito"
};
var orgBudget$3 = {
  groupName: "Orçamentos",
  header: "Todos os orçamentos ({{count}})",
  code: "Código",
  name: "Nome",
  active: "Status",
  currency: "Moeda",
  amount: "Montante",
  unit: "Unidade",
  businessUnits: "Unidade",
  dateRange: "Início – Fim",
  startDate: "Início",
  endDate: "Fim",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nome",
    byUnitName: "Unidade",
    byCode: "Código",
    byValue: "Valor"
  },
  hint: "Os orçamentos definem limites globais de compra e são atribuídos a centros de custo. Um comprador seleciona um centro de custo ao fazer o check-out.",
  details: {
    title: "Detalhes do orçamento",
    subtitle: "Orçamento: {{ item.name }}"
  },
  edit: {
    title: "Editar orçamento",
    subtitle: "Orçamento: {{ item.name }}"
  },
  create: {
    title: "Criar orçamento",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Desativar este orçamento?",
    deactivate: "Os orçamentos desativados não se aplicam mais aos centros de custo aos quais estão atribuídos. Assegure que o centro de custo associado tem pelo menos um orçamento.",
    confirmEnabled: "Orçamento {{ item.name }} ativado com êxito",
    confirmDisabled: "Orçamento {{ item.name }} desativado com êxito",
    update: "Orçamento {{ item.name }} atualizado com êxito",
    create: "Orçamento {{ item.name }} criado com êxito"
  },
  info: {
    disabledEdit: "Ativar o orçamento para permitir a edição.",
    disabledEnable: "A unidade deve ser ativada para que este orçamento possa ser ativado."
  },
  links: {
    costCenters: "Centros de custo"
  },
  breadcrumbs: {
    list: "Todos os orçamentos",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$3 = {
  title: "Centros de custo",
  subtitle: "Orçamento: {{ item.name }}"
};
var orgUnit$3 = {
  groupName: "Unidades",
  header: "Todas as unidades ({{count}})",
  unit: "Unidade",
  name: "Nome",
  uid: "ID",
  approvalProcess: "Processo de aprovação",
  parentUnit: "Unidade principal",
  active: "Status",
  hint: "As unidades representam departamentos, lojas, regiões ou qualquer outro agrupamento lógico que faça sentido para você. Os centros de custo e endereços de entrega disponíveis para um comprador ao fazer o check-out dependem da sua unidade. Os usuários têm acesso a todas as unidades secundárias da sua unidade principal.",
  details: {
    title: "Detalhes da unidade",
    subtitle: "Unidade: {{ item.name }}",
    hint: "As unidades representam departamentos, lojas, regiões ou qualquer outro agrupamento lógico que faça sentido para você. Desativar uma unidade desativa todos os elementos secundários da unidade, incluindo unidades secundárias, usuários, aprovadores e centros de custo. As unidades desativadas não podem ser editadas."
  },
  edit: {
    title: "Editar unidade",
    subtitle: "Unidade: {{ item.name }}"
  },
  create: {
    title: "Criar unidade",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Desativar esta unidade?",
    deactivate: "A desativação de uma unidade tem amplos efeitos na sua organização comercial. TODAS as unidades secundárias, usuários, orçamentos e centros de custo da unidade também serão desativados.",
    confirmEnabled: "Unidade {{item.name}} ativada com êxito",
    confirmDisabled: "Unidade {{item.name}} desativada com êxito",
    update: "Unidade {{ item.name }} atualizada com êxito",
    create: "Unidade {{ item.name }} criada com êxito"
  },
  info: {
    disabledEdit: "Ativar a unidade para permitir a edição.",
    disabledEnable: "O elemento principal deve ser ativado para que esta unidade possa ser ativada.",
    disabledDisable: "A unidade raiz não pode ser desativada."
  },
  links: {
    units: "Unidades secundárias",
    users: "Usuários",
    approvers: "Aprovadores",
    shippingAddresses: "Endereços de entrega",
    costCenters: "Centros de custo"
  },
  tree: {
    expandAll: "Expandir tudo",
    collapseAll: "Comprimir tudo",
    expand: "Expandir",
    collapse: "comprimir",
    explore: "Explorar subunidades"
  },
  children: {
    create: {
      title: "Criar unidade secundária",
      subtitle: ""
    },
    messages: {
      create: "Unidade {{ item.name }} criada com êxito"
    }
  },
  costCenters: {
    create: {
      title: "Criar centro de custo",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Unidade de negócios principal",
    create: "Criar unidade",
    parentOrgUnitNotes: "Esta unidade é a unidade superior para sua organização. Não pode ser atribuída a outra unidade."
  },
  users: {
    header: "Usuários em {{code}}",
    changeUserRoles: "Modificar funções de usuário",
    newUser: "Novo usuário"
  },
  assignRoles: {
    header: "Gerenciar funções em {{code}}",
    instructions: {
      check: "Para atribuir uma função a um usuário, selecione o campo de seleção da função.",
      uncheck: "Para remover uma função, limpe o campo de seleção da função.",
      changes: "As modificações são gravadas automaticamente."
    }
  },
  approvers: {
    header: "Aprovadores em {{code}}",
    assign: "Gerenciar aprovadores",
    "new": "Novo aprovador"
  },
  assignApprovers: {
    header: "Gerenciar aprovadores em {{code}}",
    instructions: {
      check: "Para atribuir um aprovador a esta unidade, selecione o campo de seleção do usuário.",
      uncheck: "Para remover um aprovador, limpe o campo de seleção do usuário.",
      changes: "As modificações são gravadas automaticamente."
    },
    hint: "Os usuários exibidos na lista de aprovadores têm atribuídos privilégios de aprovação para os compradores desta unidade e das unidades secundárias. Observe que um usuário com a função de aprovador é diferente de um aprovador que aparece na lista de aprovadores. Se não existir um aprovador para uma unidade, ou se os aprovadores não tiverem privilégios de compra de aprovação suficientes, é encontrado um aprovador mais acima na hierarquia da unidade, até ser selecionada uma administração."
  },
  breadcrumbs: {
    list: "Todas as unidades",
    details: "{{name}}",
    children: "Unidades secundárias",
    users: "Usuários",
    approvers: "Aprovadores",
    addresses: "Endereços de entrega",
    addressDetails: "{{formattedAddress}}",
    costCenters: "Centros de custo"
  }
};
var orgUnitChildren$3 = {
  title: "Unidades secundárias",
  subtitle: "Unidade: {{item.name}}",
  info: {
    disabledCreate: "A unidade secundária não pode ser criada para unidade desativada."
  },
  hint: 'As unidades representam departamentos, lojas, regiões ou qualquer outro agrupamento lógico que faça sentido para você. Os usuários "herdam" unidades secundárias, o que significa que os compradores têm acesso a centros de custo e endereços de entrega de unidades secundárias ao fazer o check-out.'
};
var orgUnitApprovers$3 = {
  title: "Gerenciar aprovadores",
  subtitle: "Unidade: {{item.name}}",
  assigned: "Usuário {{item.name}} atribuído com êxito",
  unassigned: "Atribuição de usuário {{item.name}} anulada com êxito"
};
var orgUnitAssignedApprovers$3 = {
  title: "Aprovadores atribuídos",
  subtitle: "Unidade: {{item.name}}",
  assigned: "Usuário {{item.name}} atribuído com êxito",
  unassigned: "Atribuição de usuário {{item.name}} anulada com êxito",
  hint: "Os usuários exibidos na lista de aprovadores têm atribuídos privilégios de aprovação para os compradores desta unidade e das unidades secundárias. Observe que um usuário com a função de aprovador é diferente de um aprovador que aparece na lista de aprovadores. Se não existir um aprovador para uma unidade, ou se os aprovadores não tiverem privilégios de compra de aprovação suficientes, é encontrado um aprovador mais acima na hierarquia da unidade, até ser selecionada uma administração."
};
var orgUnitAssignedRoles$3 = {
  header: "Gerenciar funções em {{code}}",
  name: "Nome",
  email: "E-mail",
  roles: "Funções",
  roleCustomer: "Cliente",
  roleApprover: "Aprovador",
  roleManager: "Gerente",
  roleAdministrator: "Administrador"
};
var orgUnitUsers$3 = {
  title: "Usuários atribuídos",
  subtitle: "Unidade: {{item.name}}",
  info: {
    disabledCreate: "O usuário não pode ser criado para unidade desativada."
  },
  hint: 'Os usuários são os compradores, aprovadores, gerentes e administradores da sua organização. Cada usuário tem atribuída uma função para fazer ou aprovar compras. Os usuários "herdam" unidades secundárias, o que significa que os compradores têm acesso a centros de custos e endereços de entrega de unidades secundárias ao fazer o check-out.'
};
var orgUnitUserRoles$3 = {
  title: "Funções e direitos do usuário",
  subtitle: "Usuário: {{item.name}}",
  messages: {
    rolesUpdated: "Funções atualizadas com êxito para {{item.name}}"
  }
};
var orgUnitAssignedUsers$3 = {
  title: "Usuários atribuídos",
  subtitle: "Unidade: {{item.name}}"
};
var orgUnitCostCenters$3 = {
  title: "Centros de custo atribuídos",
  subtitle: "Unidade: {{item.name}}",
  info: {
    disabledCreate: "O centro de custo não pode ser criado para unidade desativada."
  },
  hint: 'Todos os pedidos feitos mediante a conta de compras de sua organização estão vinculados a um centro de custo para fins de acompanhamento. Um comprador seleciona um centro de custo ao fazer o check-out utilizando o método de compra "Conta". Cada unidade pode ter vários centros de custo, mas só é possível atribuir um único centro de custo a uma única unidade. Para definir os limites dos gastos, os orçamentos são atribuídos a centros de custo. '
};
var orgUnitAddress$3 = {
  title: "Endereços de entrega",
  subtitle: "Unidade: {{item.name}}",
  country: "País/região",
  titles: "Título",
  firstName: "Nome",
  lastName: "Sobrenome",
  formattedAddress: "Endereço",
  address1: "Endereço",
  address2: "Segundo endereço (opcional)",
  city: "Cidade",
  state: "Estado",
  zipCode: "CEP",
  phoneNumber: "Número de telefone (opcional)",
  streetAddress: "Endereço",
  aptSuite: "Número do apartamento",
  selectOne: "Selecionar um...",
  hint: 'Quando o comprador fizer o check-out utilizando o método de compra "Conta", é necessário selecionar um centro de custo. Os endereços de entrega disponíveis para o comprador dependem da unidade do centro de custo selecionado.',
  details: {
    title: "Detalhes do endereço",
    subtitle: "Unidade: {{item.name}}"
  },
  edit: {
    title: "Editar endereço"
  },
  create: {
    title: "Criar endereço"
  },
  form: {
    subtitle: "Unidade: {{item.name}}"
  },
  messages: {
    create: "Endereço {{ item.firstName }} {{ item.lastName }} criado com êxito",
    update: "Endereço {{ item.firstName }} {{ item.lastName }} atualizado com êxito",
    "delete": "O endereço não pode ser restituído. Os pedidos existentes não são afetados.",
    deleteTitle: "Eliminar este endereço?",
    deleted: "Endereço {{ item.firstName }} {{ item.lastName }} eliminado com êxito"
  }
};
var orgUserGroup$3 = {
  groupName: "Grupos de usuários",
  header: "Todos os grupos de usuários ({{count}})",
  disabled: "(desativado)",
  uid: "Código",
  name: "Nome",
  unit: "Unidade",
  orgUnit: "Unidade",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nome",
    byUnitName: "Unidade",
    byGroupID: "Grupo"
  },
  hint: "Os grupos de usuários permitem a você combinar utilizadores em um grupo, para os fins de atribuição de limites de compra para vários usuários de uma só vez.",
  details: {
    title: "Detalhes do grupo de usuários",
    subtitle: "Grupo de usuários: {{item.name}}"
  },
  edit: {
    title: "Editar grupo de usuários",
    subtitle: "Grupo de usuários: {{item.name}}"
  },
  create: {
    title: "Criar grupo de usuários",
    subtitle: ""
  },
  links: {
    user: "Usuários",
    permission: "Limites de compra"
  },
  messages: {
    update: "Grupo de usuários {{ item.name }} atualizado com êxito",
    create: "Grupo de usuários {{ item.name }} criado com êxito",
    deleteTitle: "Eliminar este grupo de usuários?",
    "delete": "Os usuários neste grupo não são afetados quando o grupo de usuários é eliminado.",
    deleted: "Grupo de usuários {{ item.name }} eliminado com êxito"
  },
  breadcrumbs: {
    list: "Todos os grupos de usuários",
    details: "{{name}}",
    users: "Usuários",
    permissions: "Limites de compra"
  }
};
var orgUserGroupUsers$3 = {
  title: "Gerenciar usuários",
  subtitle: "Grupo de usuários: {{item.name}}",
  assigned: "Usuário {{item.name}} atribuído com êxito",
  unassigned: "Atribuição de usuário {{item.name}} anulada com êxito",
  unassignAll: "Anular atribuição de tudo",
  unassignAllConfirmation: "Atribuição de todos os usuários anulada com êxito"
};
var orgUserGroupAssignedUsers$3 = {
  title: "Usuários atribuídos",
  subtitle: "Grupo de usuários: {{item.name}}",
  assigned: "Usuário {{item.name}} atribuído com êxito",
  unassigned: "Atribuição de usuário {{item.name}} anulada com êxito"
};
var orgUserGroupPermissions$3 = {
  title: "Gerenciar limites de compra",
  subtitle: "Limite: {{ item.name }}",
  assigned: "Limites de compra {{item.code}} atribuídos com êxito",
  unassigned: "Atribuição de limites de compra {{item.code}} anulada com êxito"
};
var orgUserGroupAssignedPermissions$3 = {
  title: "Limites de compra atribuídos",
  subtitle: "Limite: {{ item.name }}",
  assigned: "Limites de compra {{item.code}} atribuídos com êxito",
  unassigned: "Atribuição de limites de compra {{item.code}} anulada com êxito"
};
var orgUser$3 = {
  groupName: "Usuários",
  header: "Todos os usuários ({{count}})",
  disabled: "(desativado)",
  uid: "E-mail",
  active: "Status",
  name: "Nome",
  firstName: "Nome",
  lastName: "Sobrenome",
  email: "E-mail",
  orgUnit: "Unidade",
  unit: "Unidade",
  roles: "Funções",
  rights: "Direitos",
  title: "Título",
  hint: "Os usuários são os compradores, aprovadores, gerentes e administradores da sua organização. Cada usuário tem atribuída uma função para fazer ou aprovar compras. Cada usuário pertence a uma unidade e tem acesso a todas as unidades secundárias da sua unidade principal.",
  unitApprover: "Aprovador da unidade",
  assignApprover: "Adicionar o usuário a aprovadores para a unidade",
  actions: "",
  sortBy: "Ordenar por",
  sort: {
    byName: "Nome",
    byUnit: "Unidade"
  },
  details: {
    title: "Detalhes do usuário",
    subtitle: "Usuário: {{ item.name }}"
  },
  edit: {
    title: "Editar usuário",
    subtitle: "Usuário: {{ item.name }}"
  },
  create: {
    title: "Criar usuário",
    subtitle: ""
  },
  links: {
    password: "Modificar senha",
    approvers: "Aprovadores",
    userGroup: "Grupos de usuários",
    permission: "Limites de compra",
    rolesAndRights: "Funções e direitos"
  },
  messages: {
    deactivateTitle: "Desativar este usuário?",
    deactivate: "Os usuários desativados não podem efetuar logon na frente de loja e fazer pedidos.",
    confirmEnabled: "Usuário {{item.firstName}} {{item.lastName}} ativado com êxito",
    confirmDisabled: "Usuário {{item.firstName}} {{item.lastName}} desativado com êxito",
    update: "Usuário {{item.firstName}} {{item.lastName}} atualizado com êxito",
    create: "Usuário {{item.firstName}} {{item.lastName}} criado com êxito",
    updatePassword: "Senha de usuário {{item.firstName}} {{item.lastName}} atualizada com êxito"
  },
  info: {
    disabledEdit: "Ativar o usuário para permitir a edição.",
    disabledEnable: "A unidade deve ser ativada para que este usuário possa ser ativado."
  },
  approver: {
    link: "Aprovadores",
    header: "Aprovadores em {{code}}",
    assign: "Atribuir aprovadores",
    assignHeader: "Atribuir aprovadores em {{code}}",
    back: "Voltar",
    "new": "Novo aprovador",
    instructions: {
      check: "Para atribuir um aprovador a este usuário, selecione o campo de seleção do usuário.",
      uncheck: "Para remover um aprovador, limpe o campo de seleção do usuário.",
      changes: "As modificações são gravadas automaticamente."
    }
  },
  userGroup: {
    link: "Grupos de usuários",
    header: "Grupos de usuários em {{code}}",
    assign: "Atribuir grupos de usuários",
    assignHeader: "Atribuir grupos de usuários em {{code}}",
    back: "Voltar",
    instructions: {
      check: "Para atribuir um grupo de usuários a este usuário, selecione o campo de seleção do usuário.",
      uncheck: "Para remover um grupo de usuários, limpe o campo de seleção do usuário.",
      changes: "As modificações são gravadas automaticamente."
    }
  },
  permission: {
    link: "Limites de compra",
    header: "Limites de compra em {{code}}",
    assign: "Atribuir limites de compra",
    assignHeader: "Atribuir limites de compra em {{code}}",
    back: "Voltar",
    instructions: {
      check: "Para atribuir limites de compra a este usuário, selecione seu campo de seleção.",
      uncheck: "Para anular a atribuição de limites de compra, limpe seu campo de seleção.",
      changes: "As modificações são gravadas automaticamente."
    },
    per: {
      "undefined": "",
      MONTH: "por mês",
      YEAR: "por ano",
      WEEK: "por semana",
      QUARTER: "por trimestre"
    }
  },
  password: {
    title: "Modificar senha",
    subtitle: "Usuário: {{ item.email }}",
    newPassword: "Nova senha",
    confirmPassword: "Redigite a nova senha"
  },
  breadcrumbs: {
    list: "Todos os usuários",
    details: "{{name}}",
    userGroups: "Grupos de usuários",
    approvers: "Aprovadores",
    permissions: "Limites de compra"
  }
};
var orgUserUserGroups$3 = {
  title: "Gerenciar grupos de usuários",
  subtitle: "Usuário: {{ item.name }}",
  assigned: "Grupo de usuários {{item.name}} atribuído com êxito",
  unassigned: "Atribuição de grupo de usuários {{item.name}} anulada com êxito"
};
var orgUserAssignedUserGroups$3 = {
  title: "Grupos de usuários atribuídos",
  subtitle: "Usuário: {{ item.name }}",
  assigned: "Grupo de usuários {{item.name}} atribuído com êxito",
  unassigned: "Atribuição de grupo de usuários {{item.name}} anulada com êxito"
};
var orgUserApprovers$3 = {
  title: "Gerenciar aprovadores",
  subtitle: "Usuário: {{ item.name }}",
  assigned: "Aprovador {{ item.name }} atribuído com êxito",
  unassigned: "Atribuição de aprovador {{ item.name }} anulada com êxito"
};
var orgUserAssignedApprovers$3 = {
  title: "Aprovadores atribuídos",
  subtitle: "Usuário: {{ item.name }}",
  assigned: "Aprovador {{ item.name }} atribuído com êxito",
  unassigned: "Atribuição de aprovador {{ item.name }} anulada com êxito"
};
var orgUserPermissions$3 = {
  title: "Gerenciar limites de compra",
  subtitle: "Usuário: {{ item.name }}",
  assigned: "Limite de compra {{ item.code }} atribuído com êxito",
  unassigned: "Atribuição de limite de compra {{ item.code }} anulada com êxito"
};
var orgUserAssignedPermissions$3 = {
  title: "Limites de compra atribuídos",
  subtitle: "Usuário: {{ item.name }}",
  assigned: "Limite de compra {{ item.code }} atribuído com êxito",
  unassigned: "Atribuição de limite de compra {{ item.code }} anulada com êxito"
};
var orgPurchaseLimit$3 = {
  groupName: "Limites de compra",
  header: "Todos os limites de compra ({{count}})",
  name: "Nome",
  code: "Código",
  active: "Status",
  limit: "Limite",
  orderApprovalPermissionType: "Tipo",
  threshold: "Limite",
  periodRange: "Período",
  currency: "Moeda",
  orgUnit: "Unidade principal",
  unit: "Unidade principal",
  actions: "",
  hint: "Os limites de compra ajudam a controlar os gastos, definindo quando os compradores podem gastar por pedido ou por semana, mês, trimestre ou ano. Os limites de compra são atribuídos a usuários ou grupos de usuários. Os limites de compra também são atribuídos a aprovadores, definindo quanto eles podem aprovar. Você pode atribuir limites de compra a vários usuários de uma só vez com grupos de usuários.",
  details: {
    title: "Detalhes do limite de compra",
    subtitle: "Limite de compra: {{ item.code }}"
  },
  edit: {
    title: "Editar limite de compra",
    subtitle: "Limites de compra: {{ item.code }}"
  },
  create: {
    title: "Criar limite de compra",
    subtitle: ""
  },
  sortBy: "Ordenar por",
  sort: {
    byName: "Nome",
    byUnitName: "Unidade"
  },
  messages: {
    deactivateTitle: "Desativar este limite de compra?",
    deactivate: "Os limites de compra desativados não podem mais ser atribuídos a um usuário ou grupo de usuários. As atribuições atuais não terão efeito.",
    confirmEnabled: "Limite de compra {{ item.code }} ativado com êxito",
    confirmDisabled: "Limite de compra {{ item.code }} desativado com êxito",
    update: "Limite de compra {{ item.code }} atualizado com êxito",
    create: "Limite de compra {{ item.code }} criado com êxito"
  },
  info: {
    disabledEdit: "Ativar o limite de compra para permitir a edição.",
    disabledEnable: "A unidade deve ser ativada para que este limite de compra possa ser ativado."
  },
  per: {
    DAY: "por dia",
    WEEK: "por semana",
    MONTH: "por mês",
    QUARTER: "por trimestre",
    YEAR: "por ano"
  },
  breadcrumbs: {
    list: "Todos os limites de compra",
    details: "{{code}}"
  }
};
var organization$7 = {
  organization: organization$6,
  orgCostCenter: orgCostCenter$3,
  orgCostCenterBudgets: orgCostCenterBudgets$3,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$3,
  orgBudget: orgBudget$3,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$3,
  orgUnit: orgUnit$3,
  orgUnitChildren: orgUnitChildren$3,
  orgUnitApprovers: orgUnitApprovers$3,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$3,
  orgUnitAssignedRoles: orgUnitAssignedRoles$3,
  orgUnitUsers: orgUnitUsers$3,
  orgUnitUserRoles: orgUnitUserRoles$3,
  orgUnitAssignedUsers: orgUnitAssignedUsers$3,
  orgUnitCostCenters: orgUnitCostCenters$3,
  orgUnitAddress: orgUnitAddress$3,
  orgUserGroup: orgUserGroup$3,
  orgUserGroupUsers: orgUserGroupUsers$3,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$3,
  orgUserGroupPermissions: orgUserGroupPermissions$3,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$3,
  orgUser: orgUser$3,
  orgUserUserGroups: orgUserUserGroups$3,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$3,
  orgUserApprovers: orgUserApprovers$3,
  orgUserAssignedApprovers: orgUserAssignedApprovers$3,
  orgUserPermissions: orgUserPermissions$3,
  orgUserAssignedPermissions: orgUserAssignedPermissions$3,
  orgPurchaseLimit: orgPurchaseLimit$3
};
var pt = {
  organization: organization$7
};
var organization$4 = {
  enabled: "Активно",
  disabled: "Отключено",
  enable: "Включить",
  disable: "Отключить",
  name: "Имя",
  code: "Код",
  done: "выполнено",
  cancel: "Отменить",
  add: "Добавить",
  manageUsers: "Управление пользователями",
  create: "Создать {{name}}",
  edit: "Редактировать",
  save: "Сохранить {{name}}",
  "delete": "Удалить",
  assign: "Управление",
  active: "Активно",
  status: "Статус",
  details: "Сведения",
  messages: {
    emptyList: "Список пуст"
  },
  userRoles: {
    b2bcustomergroup: "Клиент",
    b2bapprovergroup: "Утверждающий",
    b2bmanagergroup: "Руководитель",
    b2badmingroup: "Администратор"
  },
  userRights: {
    unitorderviewergroup: "Просмотреть заказы на уровне единицы"
  },
  breadcrumb: "Организация",
  notification: {
    noSufficientPermissions: "Нет полномочий на доступ к странице",
    notExist: "Этот элемент не существует",
    disabled: "Невозможно редактировать отключенный элемент"
  },
  confirmation: {
    cancel: "ОТМЕНИТЬ",
    confirm: "ПОДТВЕРДИТЬ",
    disable: "ОТКЛЮЧИТЬ",
    "delete": "УДАЛИТЬ"
  },
  httpHandlers: {
    conflict: {
      budget: "Бюджет с кодом {{ code }} уже существует.",
      costCenter: "МВЗ с кодом {{ code }} уже существует.",
      unit: "Орг. единица с UID {{ code }} уже существует.",
      user: "Пользователь с адресом электронной почты {{ code }} уже существует",
      userGroup: "Группа пользователей с ид. {{ code }} уже существует.",
      permission: "Полномочие на утверждение с кодом {{ code }} уже существует",
      unknown: "Ошибка проверки сервера."
    }
  },
  information: "Подробнее о {{title}}"
};
var orgCostCenter$2 = {
  groupName: "МВЗ",
  header: "Все МВЗ ({{count}})",
  code: "Код",
  active: "Статус",
  name: "Имя",
  currency: "Валюта",
  unit: "Родительская единица",
  actions: "",
  sortBy: "Сортировать по",
  sort: {
    byName: "Имя",
    byUnitName: "Единица",
    byCode: "Код"
  },
  hint: "Все заказы, размещенные через учетную запись организации для закупок, связываются с МВЗ для целей отслеживания. Каждая единица может иметь несколько МВЗ. В целях ограничения расходов каждому МВЗ присваивается бюджет. Покупатель выбирает МВЗ при оформлении заказа.",
  disable: {
    confirm: "Отключить"
  },
  messages: {
    deactivateTitle: "Отключить МВЗ?",
    deactivate: "Отключенные МВЗ невозможно использовать для размещения новых заказов. Убедитесь, что для единицы существует минимум одно МВЗ. Существующие заказы не будут затронуты.",
    confirmEnabled: "МВЗ {{ item.name }} включено",
    confirmDisabled: "МВЗ {{ item.name }} отключено",
    update: "МВЗ {{ item.name }} обновлено",
    create: "МВЗ {{ item.name }} создано"
  },
  info: {
    disabledEdit: "Включите МВЗ, чтобы разрешить редактирование.",
    disabledEnable: "Чтобы включить МВЗ, сначала включите единицу."
  },
  details: {
    title: "Сведения о МВЗ",
    subtitle: "МВЗ: {{ item.name }}"
  },
  edit: {
    title: "Редактировать МВЗ",
    subtitle: "МВЗ: {{ item.name }}"
  },
  create: {
    title: "Создать МВЗ",
    subtitle: ""
  },
  budget: {
    link: "Бюджеты"
  },
  breadcrumbs: {
    list: "Все МВЗ",
    details: "{{name}}",
    budgets: "Бюджеты"
  }
};
var orgCostCenterBudgets$2 = {
  title: "Управление бюджетами",
  subtitle: "МВЗ: {{ item.name }}",
  assigned: "Бюджет {{ item.name }} присвоен",
  unassigned: "Присвоение бюджета {{ item.name }} отменено"
};
var orgCostCenterAssignedBudgets$2 = {
  title: "Присвоенные бюджеты",
  subtitle: "МВЗ: {{ item.name }}",
  assigned: "Бюджет {{ item.name }} присвоен",
  unassigned: "Присвоение бюджета {{ item.name }} отменено"
};
var orgBudget$2 = {
  groupName: "Бюджеты",
  header: "Все бюджеты ({{count}})",
  code: "Код",
  name: "Имя",
  active: "Статус",
  currency: "Валюта",
  amount: "Сумма",
  unit: "Единица",
  businessUnits: "Единица",
  dateRange: "Начало — окончание",
  startDate: "Начало",
  endDate: "Окончание",
  actions: "",
  sortBy: "Сортировать по",
  sort: {
    byName: "Имя",
    byUnitName: "Единица",
    byCode: "Код",
    byValue: "Значение"
  },
  hint: "Бюджеты устанавливают общие ограничения для покупок и присваиваются МВЗ. Покупатель выбирает МВЗ при оформлении заказа.",
  details: {
    title: "Сведения о бюджете",
    subtitle: "Бюджет: {{ item.name }}"
  },
  edit: {
    title: "Редактировать бюджет",
    subtitle: "Бюджет: {{ item.name }}"
  },
  create: {
    title: "Создать бюджет",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Отключить бюджет?",
    deactivate: "Отключенные бюджеты больше не применяются к МВЗ, которым присвоены. Убедитесь, что связанное МВЗ имеет минимум один бюджет.",
    confirmEnabled: "Бюджет {{ item.name }} присвоен",
    confirmDisabled: "Бюджет {{ item.name }} отключен",
    update: "Бюджет {{ item.name }} обновлен",
    create: "Бюджет {{ item.name }} создан"
  },
  info: {
    disabledEdit: "Включите бюджет, чтобы разрешить редактирование.",
    disabledEnable: "Чтобы включить бюджет, сначала включите единицу."
  },
  links: {
    costCenters: "МВЗ"
  },
  breadcrumbs: {
    list: "Все бюджеты",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$2 = {
  title: "МВЗ",
  subtitle: "Бюджет: {{ item.name }}"
};
var orgUnit$2 = {
  groupName: "Единицы",
  header: "Все единицы ({{count}})",
  unit: "Единица",
  name: "Имя",
  uid: "Ид.",
  approvalProcess: "Процесс утверждения",
  parentUnit: "Родительская единица",
  active: "Статус",
  hint: "Единицы представляют отделы, магазины, регионы или другое логическое группирование, полезное для вас. МВЗ и адрес доставки, доступные для покупателя при оформлении заказа, зависят от его единицы. Пользователь имеет доступ ко всем подчиненным единицам для своей основной единицы.",
  details: {
    title: "Сведения о единице",
    subtitle: "Единица: {{ item.name }}",
    hint: "Единицы представляют отделы, магазины, регионы или другое логическое группирование, полезное для вас. При отключении единицы также отключаются все ее дочерние элементы, включая подчиненные единицы, пользователей, утверждающих и МВЗ. Отключенные единицы невозможно редактировать."
  },
  edit: {
    title: "Редактировать единицу",
    subtitle: "Единица: {{ item.name }}"
  },
  create: {
    title: "Создать единицу",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "Отключить единицу?",
    deactivate: "Отключение единицы значительно повлияет на вашу коммерческую организацию. При этом также будут отключены ВСЕ ее подчиненные единицы, пользователи, бюджеты и МВЗ.",
    confirmEnabled: "Единица {{ item.name }} включена",
    confirmDisabled: "Единица {{ item.name }} отключена",
    update: "Единица {{ item.name }} обновлена",
    create: "Единица {{ item.name }} создана"
  },
  info: {
    disabledEdit: "Включите единицу, чтобы разрешить редактирование.",
    disabledEnable: "Чтобы включить единицу, сначала включите вышестоящую единицу.",
    disabledDisable: "Корневую единицу нельзя отключить."
  },
  links: {
    units: "Подчиненные единицы",
    users: "Пользователи",
    approvers: "Утверждающие",
    shippingAddresses: "Адреса доставки",
    costCenters: "МВЗ"
  },
  tree: {
    expandAll: "Развернуть все",
    collapseAll: "Свернуть все",
    expand: "Развернуть",
    collapse: "Свернуть",
    explore: "Просмотреть подчиненные единицы"
  },
  children: {
    create: {
      title: "Создать подчиненную единицу",
      subtitle: ""
    },
    messages: {
      create: "Единица {{ item.name }} создана"
    }
  },
  costCenters: {
    create: {
      title: "Создать МВЗ",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "Вышестоящая бизнес-единица",
    create: "Создать единицу",
    parentOrgUnitNotes: "Это единица высшего уровня в вашей организации. Ее нельзя присвоить другой единице."
  },
  users: {
    header: "Пользователи в {{code}}",
    changeUserRoles: "Изменить роли пользователей",
    newUser: "Новый пользователь"
  },
  assignRoles: {
    header: "Управление ролями в {{code}}",
    instructions: {
      check: "Чтобы присвоить роль пользователю, установите индикатор возле роли.",
      uncheck: "Чтобы удалить роль, снимите индикатор.",
      changes: "Изменения сохраняются автоматически."
    }
  },
  approvers: {
    header: "Утверждающие в {{code}}",
    assign: "Управление утверждающими",
    "new": "Новый утверждающий"
  },
  assignApprovers: {
    header: "Управление утверждающими в {{code}}",
    instructions: {
      check: "Чтобы присвоить единице утверждающего, установите индикатор возле пользователя.",
      uncheck: "Чтобы удалить утверждающего, снимите индикатор.",
      changes: "Изменения сохраняются автоматически."
    },
    hint: "Пользователи в списке утверждающих получают привилегии на утверждение покупателей для выбранной единицы и подчиненных единиц. Обратите внимание: пользователь с ролью утверждающего не совпадает с утверждающим в списке утверждающих. Если для единицы нет утверждающего, или утверждающие не имеют привилегий на утверждение покупки, выполняется поиск утверждающего выше по иерархии, вплоть до администратора."
  },
  breadcrumbs: {
    list: "Все единицы",
    details: "{{name}}",
    children: "Подчиненные единицы",
    users: "Пользователи",
    approvers: "Утверждающие",
    addresses: "Адреса доставки",
    addressDetails: "{{formattedAddress}}",
    costCenters: "МВЗ"
  }
};
var orgUnitChildren$2 = {
  title: "Подчиненные единицы",
  subtitle: "Единица: {{ item.name }}",
  info: {
    disabledCreate: "Невозможно создать подчиненную единицу для отключенной единицы."
  },
  hint: "Единицы представляют отделы, магазины, регионы или другое логическое группирование, полезное для вас. Пользователи наследуют подчиненные единицы, то есть имеют доступ к МВЗ и адресам доставки подчиненных единиц при оформлении заказа."
};
var orgUnitApprovers$2 = {
  title: "Управление утверждающими",
  subtitle: "Единица: {{ item.name }}",
  assigned: "Единица {{ item.name }} присвоена",
  unassigned: "Присвоение единицы {{ item.name }} отменено"
};
var orgUnitAssignedApprovers$2 = {
  title: "Присвоенные утверждающие",
  subtitle: "Единица: {{ item.name }}",
  assigned: "Единица {{ item.name }} присвоена",
  unassigned: "Присвоение единицы {{ item.name }} отменено",
  hint: "Пользователи в списке утверждающих получают привилегии на утверждение покупателей для выбранной единицы и подчиненных единиц. Обратите внимание: пользователь с ролью утверждающего не совпадает с утверждающим в списке утверждающих. Если для единицы нет утверждающего, или утвер;дающие не имеют привилегий на утверждение покупки, выполняется поиск утверждающего выше по иерархии, вплоть до администратора."
};
var orgUnitAssignedRoles$2 = {
  header: "Управление ролями в {{code}}",
  name: "Имя",
  email: "Электронная почта",
  roles: "Роли",
  roleCustomer: "Клиент",
  roleApprover: "Утверждающий",
  roleManager: "Руководитель",
  roleAdministrator: "Администратор"
};
var orgUnitUsers$2 = {
  title: "Присвоенные пользователи",
  subtitle: "Единица: {{ item.name }}",
  info: {
    disabledCreate: "Невозможно создать пользователя для отключенной единицы."
  },
  hint: "Пользователи - это покупатели, утверждающие, руководители и администраторы вашей организации. Каждому пользователю присваивается роль для выполнения или утверждения покупки. Пользователи наследуют подчиненные единицы, то есть имеют доступ к МВЗ и адресам доставки подчиненных единиц при оформлении заказа."
};
var orgUnitUserRoles$2 = {
  title: "Роли и права пользователей",
  subtitle: "Пользователь: {{ item.name }}",
  messages: {
    rolesUpdated: "Роли для {{item.name}} обновлены"
  }
};
var orgUnitAssignedUsers$2 = {
  title: "Присвоенные пользователи",
  subtitle: "Единица: {{ item.name }}"
};
var orgUnitCostCenters$2 = {
  title: "Присвоенные МВЗ",
  subtitle: "Единица: {{ item.name }}",
  info: {
    disabledCreate: "Невозможно создать МВЗ для отключенной единицы."
  },
  hint: 'Все заказы, размещенные через учетную запись организации для закупок, связываются с МВЗ для целей отслеживания. Покупатель выбирает МВЗ при оформлении заказа со способом оплаты "Счет" . Каждая единица может иметь несколько МВЗ, однако одно МВЗ может быть присвоено только одной единице. Чтобы определить общие лимиты расходов, каждому МВЗ присваивается бюджет.  '
};
var orgUnitAddress$2 = {
  title: "Адреса доставки",
  subtitle: "Единица: {{ item.name }}",
  country: "Страна/регион",
  titles: "Обращение",
  firstName: "Имя",
  lastName: "Фамилия",
  formattedAddress: "Адрес",
  address1: "Адрес",
  address2: "2 адрес (необязательно)",
  city: "Город",
  state: "Штат/область",
  zipCode: "Почтовый индекс:",
  phoneNumber: "Телефон (необязательно)",
  streetAddress: "Адрес (улица)",
  aptSuite: "Номер квартиры",
  selectOne: "Выберите...",
  hint: 'При выборе способа оплаты "Счет"  покупатель должен выбрать МВЗ. Доступные покупателю адреса доставки зависят от единицы выбранного МВЗ.',
  details: {
    title: "Сведения об адресе",
    subtitle: "Единица: {{ item.name }}"
  },
  edit: {
    title: "Редактировать адрес"
  },
  create: {
    title: "Создать адрес"
  },
  form: {
    subtitle: "Единица: {{ item.name }}"
  },
  messages: {
    create: "Адрес {{ item.firstName }} {{ item.lastName }} создан",
    update: "Адрес {{ item.firstName }} {{ item.lastName }} обновлен",
    "delete": "Невозможно вернуть адрес. Существующие заказы не будут затронуты.",
    deleteTitle: "Удалить этот адрес?",
    deleted: "Адрес {{ item.firstName }} {{ item.lastName }} удален"
  }
};
var orgUserGroup$2 = {
  groupName: "Группы пользователей",
  header: "Все группы пользователей ({{count}})",
  disabled: "(отключено)",
  uid: "Код",
  name: "Имя",
  unit: "Единица",
  orgUnit: "Единица",
  actions: "",
  sortBy: "Сортировать по",
  sort: {
    byName: "Имя",
    byUnitName: "Единица",
    byGroupID: "Группа"
  },
  hint: "Группы пользователей позволяют комбинировать пользователей, чтобы присвоить лимит покупок сразу нескольким.",
  details: {
    title: "Сведения о группе пользователей",
    subtitle: "Группа пользователей: {{ item.name }}"
  },
  edit: {
    title: "Редактировать группу пользователей",
    subtitle: "Группа пользователей: {{ item.name }}"
  },
  create: {
    title: "Создать группу пользователей",
    subtitle: ""
  },
  links: {
    user: "Пользователи",
    permission: "Лимиты покупок"
  },
  messages: {
    update: "Группа пользователей {{ item.name }} обновлена",
    create: "Группа пользователей {{ item.name }} создана",
    deleteTitle: "Удалить группу пользователей?",
    "delete": "Пользователи в группе не будут затронуты при ее удалении.",
    deleted: "Группа пользователей {{ item.name }} удалена"
  },
  breadcrumbs: {
    list: "Все группы пользователей",
    details: "{{name}}",
    users: "Пользователи",
    permissions: "Лимиты покупок"
  }
};
var orgUserGroupUsers$2 = {
  title: "Управление пользователями",
  subtitle: "Группа пользователей: {{ item.name }}",
  assigned: "Единица {{ item.name }} присвоена",
  unassigned: "Присвоение единицы {{ item.name }} отменено",
  unassignAll: "Отменить присвоение всех",
  unassignAllConfirmation: "Присвоение всех пользователей отменено"
};
var orgUserGroupAssignedUsers$2 = {
  title: "Присвоенные пользователи",
  subtitle: "Группа пользователей: {{ item.name }}",
  assigned: "Единица {{ item.name }} присвоена",
  unassigned: "Присвоение единицы {{ item.name }} отменено"
};
var orgUserGroupPermissions$2 = {
  title: "Управление лимитами покупок",
  subtitle: "Лимит: {{ item.name }}",
  assigned: "Лимиты покупок {{item.code}} присвоены",
  unassigned: "Присвоения лимитов покупок {{item.code}} отменены"
};
var orgUserGroupAssignedPermissions$2 = {
  title: "Присвоенные лимиты покупок",
  subtitle: "Лимит: {{ item.name }}",
  assigned: "Лимиты покупок {{item.code}} присвоены",
  unassigned: "Присвоения лимитов покупок {{item.code}} отменены"
};
var orgUser$2 = {
  groupName: "Пользователи",
  header: "Все пользователи ({{count}})",
  disabled: "(отключено)",
  uid: "Электронная почта",
  active: "Статус",
  name: "Имя",
  firstName: "Имя",
  lastName: "Фамилия",
  email: "Электронная почта",
  orgUnit: "Единица",
  unit: "Единица",
  roles: "Роли",
  rights: "Права",
  title: "Заголовок",
  hint: "Пользователи - это покупатели, утверждающие, руководители и администраторы вашей организации. Каждому пользователю присваивается роль для выполнения или утверждения покупки. Каждый пользователь принадлежит единице и имеет доступ ко всем подчиненным единицам своей основной единицы.",
  unitApprover: "Утверждающий для единицы",
  assignApprover: "Добавить пользователя к утверждающим для единицы",
  actions: "",
  sortBy: "Сортировать по",
  sort: {
    byName: "Имя",
    byUnit: "Единица"
  },
  details: {
    title: "Сведения о пользователе",
    subtitle: "Пользователь: {{ item.name }}"
  },
  edit: {
    title: "Редактировать пользователя",
    subtitle: "Пользователь: {{ item.name }}"
  },
  create: {
    title: "Создать пользователя",
    subtitle: ""
  },
  links: {
    password: "Изменить пароль",
    approvers: "Утверждающие",
    userGroup: "Группы пользователей",
    permission: "Лимиты покупок",
    rolesAndRights: "Роли и права"
  },
  messages: {
    deactivateTitle: "Отключить пользователя?",
    deactivate: "Отключенные пользователи не могут входить в систему для просмотра витрины и размещения заказов.",
    confirmEnabled: "Пользователь {{item.firstName}} {{item.lastName}} включен",
    confirmDisabled: "Пользователь {{item.firstName}} {{item.lastName}} отключен",
    update: "Пользователь {{item.firstName}} {{item.lastName}} обновлен",
    create: "Пользователь {{item.firstName}} {{item.lastName}} создан",
    updatePassword: "Пароль для пользователя {{item.firstName}} {{item.lastName}} обновлен"
  },
  info: {
    disabledEdit: "Включите пользователя, чтобы разрешить редактирование.",
    disabledEnable: "Чтобы включить пользователя, сначала включите единицу."
  },
  approver: {
    link: "Утверждающие",
    header: "Утверждающие в {{code}}",
    assign: "Присвоить утверждающих",
    assignHeader: "Присвоить утверждающих в {{code}}",
    back: "Назад",
    "new": "Новый утверждающий",
    instructions: {
      check: "Чтобы присвоить пользователю утверждающего, установите индикатор возле пользователя.",
      uncheck: "Чтобы удалить утверждающего, снимите индикатор.",
      changes: "Изменения сохраняются автоматически."
    }
  },
  userGroup: {
    link: "Группы пользователей",
    header: "Группы пользователей в {{code}}",
    assign: "Присвоить группы пользователей",
    assignHeader: "Присвоить группы пользователей в {{code}}",
    back: "Назад",
    instructions: {
      check: "Чтобы присвоить пользователю группу пользователей, установите индикатор возле пользователя.",
      uncheck: "Чтобы удалить группу пользователей, снимите индикатор.",
      changes: "Изменения сохраняются автоматически."
    }
  },
  permission: {
    link: "Лимиты покупок",
    header: "Лимиты покупок в {{code}}",
    assign: "Присвоить лимиты покупок",
    assignHeader: "Присвоить лимиты покупок в {{code}}",
    back: "Назад",
    instructions: {
      check: "Чтобы присвоить лимиты покупок пользователю, установите индикатор.",
      uncheck: "Чтобы отменить присвоения лимитов покупок, снимите индикатор.",
      changes: "Изменения сохраняются автоматически."
    },
    per: {
      "undefined": "",
      MONTH: "в месяц",
      YEAR: "в год",
      WEEK: "в неделю",
      QUARTER: "в квартал"
    }
  },
  password: {
    title: "Изменить пароль",
    subtitle: "Пользователь: {{ item.email }}",
    newPassword: "Новый пароль",
    confirmPassword: "Введите новый пароль еще раз"
  },
  breadcrumbs: {
    list: "Все пользователи",
    details: "{{name}}",
    userGroups: "Группы пользователей",
    approvers: "Утверждающие",
    permissions: "Лимиты покупок"
  }
};
var orgUserUserGroups$2 = {
  title: "Управлять группами пользователей",
  subtitle: "Пользователь: {{ item.name }}",
  assigned: "Группа пользователей {{ item.name }} присвоена",
  unassigned: "Присвоение группы пользователей {{ item.name }} отменено"
};
var orgUserAssignedUserGroups$2 = {
  title: "Присвоенные группы пользователей",
  subtitle: "Пользователь: {{ item.name }}",
  assigned: "Группа пользователей {{ item.name }} присвоена",
  unassigned: "Присвоение группы пользователей {{ item.name }} отменено"
};
var orgUserApprovers$2 = {
  title: "Управление утверждающими",
  subtitle: "Пользователь: {{ item.name }}",
  assigned: "Утверждающий {{ item.name }} присвоен",
  unassigned: "Присвоение утверждающего {{ item.name }} отменено"
};
var orgUserAssignedApprovers$2 = {
  title: "Присвоенные утверждающие",
  subtitle: "Пользователь: {{ item.name }}",
  assigned: "Утверждающий {{ item.name }} присвоен",
  unassigned: "Присвоение утверждающего {{ item.name }} отменено"
};
var orgUserPermissions$2 = {
  title: "Управление лимитами покупок",
  subtitle: "Пользователь: {{ item.name }}",
  assigned: "Лимит покупок {{item.code}} присвоен",
  unassigned: "Присвоение лимита покупок {{item.code}} отменено"
};
var orgUserAssignedPermissions$2 = {
  title: "Присвоенные лимиты покупок",
  subtitle: "Пользователь: {{ item.name }}",
  assigned: "Лимит покупок {{item.code}} присвоен",
  unassigned: "Присвоение лимита покупок {{item.code}} отменено"
};
var orgPurchaseLimit$2 = {
  groupName: "Лимиты покупок",
  header: "Все лимиты покупок ({{count}})",
  name: "Имя",
  code: "Код",
  active: "Статус",
  limit: "Лимит",
  orderApprovalPermissionType: "Тип",
  threshold: "Пороговое значение",
  periodRange: "Период",
  currency: "Валюта",
  orgUnit: "Вышестоящая единица",
  unit: "Вышестоящая единица",
  actions: "",
  hint: "Лимиты покупок позволяют контролировать расходы, определяя суммы, которые покупатели могут потратить на заказы в неделю, в месяц, в квартал или в гол. Лимиты покупок присваиваются пользователям или группам пользователей, а также утверждающим и в таком случае определяют суммы, которые можно утвердить. Можно присвоить лимит покупок нескольким пользователям сразу, объединив их в группу пользователей.",
  details: {
    title: "Сведения о лимите покупок",
    subtitle: "Лимит покупок: {{ item.code }}"
  },
  edit: {
    title: "Редактировать лимит покупок",
    subtitle: "Лимиты покупок: {{ item.code }}"
  },
  create: {
    title: "Создать лимит покупок",
    subtitle: ""
  },
  sortBy: "Сортировать по",
  sort: {
    byName: "Имя",
    byUnitName: "Единица"
  },
  messages: {
    deactivateTitle: "Отключить лимит покупок?",
    deactivate: "Отключенные лимиты покупок больше нельзя присвоить пользователю или группе пользователей. Текущие присвоения не будут затронуты.",
    confirmEnabled: "Лимит покупок {{item.code}} включен",
    confirmDisabled: "Лимит покупок {{item.code}} отключен",
    update: "Лимит покупок {{item.code}} обновлен",
    create: "Лимит покупок {{item.code}} создан"
  },
  info: {
    disabledEdit: "Включите лимит покупок, чтобы разрешить редактирование.",
    disabledEnable: "Чтобы включить лимит покупок, сначала включите единицу."
  },
  per: {
    DAY: "в день",
    WEEK: "в неделю",
    MONTH: "в месяц",
    QUARTER: "в квартал",
    YEAR: "в год"
  },
  breadcrumbs: {
    list: "Все лимиты покупок",
    details: "{{code}}"
  }
};
var organization$5 = {
  organization: organization$4,
  orgCostCenter: orgCostCenter$2,
  orgCostCenterBudgets: orgCostCenterBudgets$2,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$2,
  orgBudget: orgBudget$2,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$2,
  orgUnit: orgUnit$2,
  orgUnitChildren: orgUnitChildren$2,
  orgUnitApprovers: orgUnitApprovers$2,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$2,
  orgUnitAssignedRoles: orgUnitAssignedRoles$2,
  orgUnitUsers: orgUnitUsers$2,
  orgUnitUserRoles: orgUnitUserRoles$2,
  orgUnitAssignedUsers: orgUnitAssignedUsers$2,
  orgUnitCostCenters: orgUnitCostCenters$2,
  orgUnitAddress: orgUnitAddress$2,
  orgUserGroup: orgUserGroup$2,
  orgUserGroupUsers: orgUserGroupUsers$2,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$2,
  orgUserGroupPermissions: orgUserGroupPermissions$2,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$2,
  orgUser: orgUser$2,
  orgUserUserGroups: orgUserUserGroups$2,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$2,
  orgUserApprovers: orgUserApprovers$2,
  orgUserAssignedApprovers: orgUserAssignedApprovers$2,
  orgUserPermissions: orgUserPermissions$2,
  orgUserAssignedPermissions: orgUserAssignedPermissions$2,
  orgPurchaseLimit: orgPurchaseLimit$2
};
var ru = {
  organization: organization$5
};
var organization$2 = {
  enabled: "活动",
  disabled: "已禁用",
  enable: "启用",
  disable: "禁用",
  name: "名称",
  code: "代码",
  done: "完成",
  cancel: "取消",
  add: "添加",
  manageUsers: "管理用户",
  create: "创建 {{name}}",
  edit: "编辑",
  save: "保存 {{name}}",
  "delete": "删除",
  assign: "管理",
  active: "活动",
  status: "状态",
  details: "详细信息",
  messages: {
    emptyList: "此列表为空"
  },
  userRoles: {
    b2bcustomergroup: "客户",
    b2bapprovergroup: "批准人",
    b2bmanagergroup: "经理",
    b2badmingroup: "管理员"
  },
  userRights: {
    unitorderviewergroup: "查看单位级别订单"
  },
  breadcrumb: "组织",
  notification: {
    noSufficientPermissions: "权限不足，无法访问此页面",
    notExist: "此项目不存在",
    disabled: "您无法编辑禁用的项目"
  },
  confirmation: {
    cancel: "取消",
    confirm: "确认",
    disable: "禁用",
    "delete": "删除"
  },
  httpHandlers: {
    conflict: {
      budget: "代码为 {{ code }} 的预算已存在。",
      costCenter: "代码为 {{ code }} 的成本中心已存在。",
      unit: "uid 为 {{ code }} 的组织单位已存在。",
      user: "电子邮件为 {{ code }} 的用户已存在",
      userGroup: "标识为 {{ code }} 的用户组已存在",
      permission: "代码为 {{ code }} 的审批权限已存在。",
      unknown: "服务器验证错误。"
    }
  },
  information: "关于 {{title}} 的更多信息"
};
var orgCostCenter$1 = {
  groupName: "成本中心",
  header: "所有成本中心 ({{count}})",
  code: "代码",
  active: "状态",
  name: "名称",
  currency: "货币",
  unit: "父单位",
  actions: "",
  sortBy: "排序依据",
  sort: {
    byName: "名称",
    byUnitName: "单位",
    byCode: "代码"
  },
  hint: "通过贵组织的采购账户下达的所有订单都与成本中心相关联，以便进行跟踪。每个单位可以有多个成本中心。为了限制开支，预算被分配给成本中心。采购商在结账时选择成本中心。",
  disable: {
    confirm: "禁用"
  },
  messages: {
    deactivateTitle: "禁用此成本中心？",
    deactivate: "已禁用的成本中心不能用于下新订单。请确保您的单位至少有一个成本中心。现有订单不受影响。",
    confirmEnabled: "已成功启用成本中心 {{ item.name }}",
    confirmDisabled: "已成功禁用成本中心 {{ item.name }}",
    update: "已成功更新成本中心 {{ item.name }}",
    create: "已成功创建成本中心 {{ item.name }}"
  },
  info: {
    disabledEdit: "启用成本中心以允许编辑。",
    disabledEnable: "必须先启用单位，然后才能启用此成本中心。"
  },
  details: {
    title: "成本中心详细信息",
    subtitle: "成本中心：{{ item.name }}"
  },
  edit: {
    title: "编辑成本中心",
    subtitle: "成本中心：{{ item.name }}"
  },
  create: {
    title: "创建成本中心",
    subtitle: ""
  },
  budget: {
    link: "预算"
  },
  breadcrumbs: {
    list: "所有成本中心",
    details: "{{name}}",
    budgets: "预算"
  }
};
var orgCostCenterBudgets$1 = {
  title: "管理预算",
  subtitle: "成本中心：{{ item.name }}",
  assigned: "已成功分配预算 {{ item.name }}",
  unassigned: "已成功取消分配预算 {{ item.name }} "
};
var orgCostCenterAssignedBudgets$1 = {
  title: "已分配预算",
  subtitle: "成本中心：{{ item.name }}",
  assigned: "已成功分配预算 {{ item.name }}",
  unassigned: "已成功取消分配预算 {{ item.name }} "
};
var orgBudget$1 = {
  groupName: "预算",
  header: "所有预算 ({{count}})",
  code: "代码",
  name: "名称",
  active: "状态",
  currency: "货币",
  amount: "金额",
  unit: "单位",
  businessUnits: "单位",
  dateRange: "开始 - 结束",
  startDate: "开始",
  endDate: "结束",
  actions: "",
  sortBy: "排序依据",
  sort: {
    byName: "名称",
    byUnitName: "单位",
    byCode: "代码",
    byValue: "值"
  },
  hint: "预算设置了总体购买限额并分配给成本中心。采购商在结账时选择成本中心。",
  details: {
    title: "预算详细信息",
    subtitle: "预算：{{ item.name }}"
  },
  edit: {
    title: "编辑预算",
    subtitle: "预算：{{ item.name }}"
  },
  create: {
    title: "创建预算",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "禁用此预算？",
    deactivate: "已禁用的预算不再适用于其分配到的成本中心。请确保相关联成本中心至少有一个预算。",
    confirmEnabled: "已成功启用预算 {{ item.name }} ",
    confirmDisabled: "已成功禁用预算 {{ item.name }} ",
    update: "已成功更新预算 {{ item.name }} ",
    create: "已成功创建预算 {{ item.name }} "
  },
  info: {
    disabledEdit: "启用预算以允许编辑。",
    disabledEnable: "必须先启用单位，然后才能启用此预算。"
  },
  links: {
    costCenters: "成本中心"
  },
  breadcrumbs: {
    list: "所有预算",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters$1 = {
  title: "成本中心",
  subtitle: "预算：{{ item.name }}"
};
var orgUnit$1 = {
  groupName: "单位",
  header: "所有单位 ({{count}})",
  unit: "单位",
  name: "名称",
  uid: "标识",
  approvalProcess: "审批流程",
  parentUnit: "父单位",
  active: "状态",
  hint: "单位代表部门、商店、地区或任何其他对您有意义的逻辑分组。采购商结账时可用的成本中心和送货地址取决于其单位。用户可以访问其主要单位的所有子单位。",
  details: {
    title: "单位详细信息",
    subtitle: "单位：{{ item.name }}",
    hint: "单位代表部门、商店、地区或任何其他对您有意义的逻辑分组。禁用某个单位会禁用该单位的所有子单位，包括子单位、用户、审批人和成本中心。已禁用的单位无法编辑。"
  },
  edit: {
    title: "编辑单位",
    subtitle: "单位：{{ item.name }}"
  },
  create: {
    title: "创建单位",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "禁用此单位？",
    deactivate: "禁用某个单位会对您的商业组织产生广泛影响。此单位的所有子单位、用户、预算和成本中心也将禁用。",
    confirmEnabled: "已成功启用单位 {{item.name}}",
    confirmDisabled: "已成功禁用预算 {{ item.name }} ",
    update: "已成功更新单位 {{ item.name }} ",
    create: "已成功创建单位 {{ item.name }} "
  },
  info: {
    disabledEdit: "启用单位以允许编辑。",
    disabledEnable: "必须先启用父项，然后才能启用此单位。",
    disabledDisable: "无法禁用根单位。"
  },
  links: {
    units: "子单位",
    users: "用户",
    approvers: "批准人",
    shippingAddresses: "送货地址",
    costCenters: "成本中心"
  },
  tree: {
    expandAll: "全部展开",
    collapseAll: "全部折叠",
    expand: "展开",
    collapse: "折叠",
    explore: "浏览子单位"
  },
  children: {
    create: {
      title: "创建子单位",
      subtitle: ""
    },
    messages: {
      create: "已成功创建单位 {{ item.name }} "
    }
  },
  costCenters: {
    create: {
      title: "创建成本中心",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "父业务单位",
    create: "创建单位",
    parentOrgUnitNotes: "此单位是贵组织的顶级单位。无法将其分配给其他单位。"
  },
  users: {
    header: "{{code}} 中的用户",
    changeUserRoles: "更改用户角色",
    newUser: "新用户"
  },
  assignRoles: {
    header: "管理 {{code}} 中的角色",
    instructions: {
      check: "要将角色分配给此用户，请选中角色的复选框。",
      uncheck: "要移除角色，请清除角色的复选框。",
      changes: "更改自动保存。"
    }
  },
  approvers: {
    header: "{{code}} 中的审批人",
    assign: "管理审批人",
    "new": "新审批人"
  },
  assignApprovers: {
    header: "管理 {{code}} 中的审批人",
    instructions: {
      check: "要将审批人分配到此单位，请选中用户的复选框。",
      uncheck: "要移除审批人，请清除用户的复选框。",
      changes: "更改自动保存。"
    },
    hint: "审批人列表下显示的用户已分配有此单位及其子单位的采购商的审批权限。请注意，具有审批人角色的用户与审批人列表下显示的审批人是分开的。如果某个单位没有审批人，或者审批人没有足够的审批购买权限，则会查找单位层次结构中更高级别的审批人，直到选出管理。"
  },
  breadcrumbs: {
    list: "所有单位",
    details: "{{name}}",
    children: "子单位",
    users: "用户",
    approvers: "批准人",
    addresses: "送货地址",
    addressDetails: "{{formattedAddress}}",
    costCenters: "成本中心"
  }
};
var orgUnitChildren$1 = {
  title: "子单位",
  subtitle: "单位：{{item.name}}",
  info: {
    disabledCreate: "无法为禁用的单位创建子单位。"
  },
  hint: "单位代表部门、商店、地区或任何其他对您有意义的逻辑分组。用户“继承”子单位，这意味着采购商在结账时可以访问子单位的成本中心和送货地址。"
};
var orgUnitApprovers$1 = {
  title: "管理审批人",
  subtitle: "单位：{{item.name}}",
  assigned: "已成功分配用户 {{item.name}}",
  unassigned: "已成功取消分配用户 {{item.name}}"
};
var orgUnitAssignedApprovers$1 = {
  title: "已分配审批人",
  subtitle: "单位：{{item.name}}",
  assigned: "已成功分配用户 {{item.name}}",
  unassigned: "已成功取消分配用户 {{item.name}}",
  hint: "审批人列表下显示的用户已分配有此单位及其子单位的采购商的审批权限。请注意，具有审批人角色的用户与审批人列表下显示的审批人是分开的。如果某个单位没有审批人，或者审批人没有足够的审批购买权限，则会查找单位层次结构中更高级别的审批人，直到选出管理。"
};
var orgUnitAssignedRoles$1 = {
  header: "管理 {{code}} 中的角色",
  name: "名称",
  email: "电子邮件",
  roles: "角色",
  roleCustomer: "客户",
  roleApprover: "批准人",
  roleManager: "经理",
  roleAdministrator: "管理员"
};
var orgUnitUsers$1 = {
  title: "已分配用户",
  subtitle: "单位：{{item.name}}",
  info: {
    disabledCreate: "无法为禁用的单位创建用户。"
  },
  hint: "用户是贵组织的采购商、审批人、经理和管理员。每个用户都分配有负责进行或审批购买的角色。用户“继承”子单位，这意味着采购商在结账时可以访问子单位的成本中心和送货地址。"
};
var orgUnitUserRoles$1 = {
  title: "用户角色和权限",
  subtitle: "用户：{{item.name}}",
  messages: {
    rolesUpdated: "已成功更新 {{item.name}} 的角色"
  }
};
var orgUnitAssignedUsers$1 = {
  title: "已分配用户",
  subtitle: "单位：{{item.name}}"
};
var orgUnitCostCenters$1 = {
  title: "已分配成本中心",
  subtitle: "单位：{{item.name}}",
  info: {
    disabledCreate: "无法为禁用的单位创建成本中心。"
  },
  hint: "通过贵组织的采购账户下达的所有订单都会链接到成本中心，以便进行跟踪。采购商在使用“账户”购买方式结账时会选择成本中心。每个单位可以有多个成本中心，但一个成本中心只能分配给一个单位。为了定义最终支出限制，预算会分配给成本中心。 "
};
var orgUnitAddress$1 = {
  title: "送货地址",
  subtitle: "单位：{{item.name}}",
  country: "国家/地区",
  titles: "标题",
  firstName: "名字",
  lastName: "姓氏",
  formattedAddress: "地址",
  address1: "地址",
  address2: "第二个地址（可选）",
  city: "城市",
  state: "状态",
  zipCode: "邮政编码",
  phoneNumber: "电话号码（可选）",
  streetAddress: "街道地址",
  aptSuite: "公寓编号",
  selectOne: "选择一个...",
  hint: "当采购商使用“账户”购买方式结账时，他们必须选择成本中心。采购商可用的送货地址取决于所选成本中心的单位。",
  details: {
    title: "地址详细信息",
    subtitle: "单位：{{item.name}}"
  },
  edit: {
    title: "编辑地址"
  },
  create: {
    title: "创建地址"
  },
  form: {
    subtitle: "单位：{{item.name}}"
  },
  messages: {
    create: "已成功创建地址 {{ item.firstName }} {{ item.lastName }}",
    update: "已成功更新地址 {{ item.firstName }} {{ item.lastName }}",
    "delete": "此地址不可找回。现有订单不受影响。",
    deleteTitle: "删除此地址？",
    deleted: "已成功删除地址 {{ item.firstName }} {{ item.lastName }}"
  }
};
var orgUserGroup$1 = {
  groupName: "用户组",
  header: "所有用户组 ({{count}})",
  disabled: "（已禁用）",
  uid: "代码",
  name: "名称",
  unit: "单位",
  orgUnit: "单位",
  actions: "",
  sortBy: "排序依据",
  sort: {
    byName: "名称",
    byUnitName: "单位",
    byGroupID: "组"
  },
  hint: "用户组允许您将用户合并到一个组中，以便同时为多个用户分配购买限制。",
  details: {
    title: "用户组详细信息",
    subtitle: "用户组：{{ item.name }}"
  },
  edit: {
    title: "编辑用户组",
    subtitle: "用户组：{{ item.name }}"
  },
  create: {
    title: "创建用户组",
    subtitle: ""
  },
  links: {
    user: "用户",
    permission: "购买限制"
  },
  messages: {
    update: "已成功更新用户组 {{ item.name }} ",
    create: "已成功创建用户组 {{ item.name }} ",
    deleteTitle: "删除此用户组？",
    "delete": "删除用户组时，该组中的用户不受影响。",
    deleted: "已成功删除用户组 {{ item.name }} "
  },
  breadcrumbs: {
    list: "所有用户组",
    details: "{{name}}",
    users: "用户",
    permissions: "购买限制"
  }
};
var orgUserGroupUsers$1 = {
  title: "管理用户",
  subtitle: "用户组：{{ item.name }}",
  assigned: "已成功分配用户 {{item.name}}",
  unassigned: "已成功取消分配用户 {{item.name}}",
  unassignAll: "取消分配所有",
  unassignAllConfirmation: "已成功取消分配所有用户"
};
var orgUserGroupAssignedUsers$1 = {
  title: "已分配用户",
  subtitle: "用户组：{{ item.name }}",
  assigned: "已成功分配用户 {{item.name}}",
  unassigned: "已成功取消分配用户 {{item.name}}"
};
var orgUserGroupPermissions$1 = {
  title: "管理购买限制",
  subtitle: "限制：{{ item.name }}",
  assigned: "已成功分配购买限制 {{item.code}} ",
  unassigned: "已成功取消分配购买限制 {{item.code}}"
};
var orgUserGroupAssignedPermissions$1 = {
  title: "已分配购买限制",
  subtitle: "限制：{{ item.name }}",
  assigned: "已成功分配购买限制 {{item.code}} ",
  unassigned: "已成功取消分配购买限制 {{item.code}}"
};
var orgUser$1 = {
  groupName: "用户",
  header: "所有用户({{count}})",
  disabled: "（已禁用）",
  uid: "电子邮件",
  active: "状态",
  name: "名称",
  firstName: "名字",
  lastName: "姓氏",
  email: "电子邮件",
  orgUnit: "单位",
  unit: "单位",
  roles: "角色",
  rights: "权限",
  title: "标题",
  hint: "用户是贵组织的采购商、审批人、经理和管理员。每个用户都分配有负责进行或审批购买的角色。每个用户都属于单位，并且他们有权访问其主要单位的所有子单位。",
  unitApprover: "单位审批人",
  assignApprover: "将用户添加到单位的审批人",
  actions: "",
  sortBy: "排序依据",
  sort: {
    byName: "名称",
    byUnit: "单位"
  },
  details: {
    title: "用户详细信息",
    subtitle: "用户：{{ item.name }}"
  },
  edit: {
    title: "编辑用户",
    subtitle: "用户：{{ item.name }}"
  },
  create: {
    title: "创建用户",
    subtitle: ""
  },
  links: {
    password: "更改密码",
    approvers: "批准人",
    userGroup: "用户组",
    permission: "购买限制",
    rolesAndRights: "角色和权限"
  },
  messages: {
    deactivateTitle: "禁用此用户？",
    deactivate: "已禁用用户无法登录店面和下达订单。",
    confirmEnabled: "已成功启用用户 {{item.firstName}} {{item.lastName}}",
    confirmDisabled: "已成功禁用用户 {{item.firstName}} {{item.lastName}}",
    update: "已成功更新用户 {{item.firstName}} {{item.lastName}}",
    create: "已成功创建用户 {{item.firstName}} {{item.lastName}}",
    updatePassword: "已成功更新用户 {{item.firstName}} {{item.lastName}} 密码"
  },
  info: {
    disabledEdit: "启用用户以允许编辑。",
    disabledEnable: "必须先启用单位，然后才能启用此用户。"
  },
  approver: {
    link: "批准人",
    header: "{{code}} 中的审批人",
    assign: "分配审批人",
    assignHeader: "在 {{code}} 中分配审批人",
    back: "返回",
    "new": "新审批人",
    instructions: {
      check: "要将审批人分配到此用户，请选中用户的复选框。",
      uncheck: "要移除审批人，请清除用户的复选框。",
      changes: "更改自动保存。"
    }
  },
  userGroup: {
    link: "用户组",
    header: "{{code}} 中的用户组",
    assign: "分配用户组",
    assignHeader: "在 {{code}} 中分配用户组",
    back: "返回",
    instructions: {
      check: "要将用户组分配到此用户，请选中用户的复选框。",
      uncheck: "要移除用户组，请清除用户的复选框。",
      changes: "更改自动保存。"
    }
  },
  permission: {
    link: "购买限制",
    header: "{{code}} 中的购买限制",
    assign: "分配购买限制",
    assignHeader: "在 {{code}} 中分配购买限制",
    back: "返回",
    instructions: {
      check: "要将购买限制分配给此用户，请选中其复选框。",
      uncheck: "要取消分配购买限制，请清除其复选框。",
      changes: "更改自动保存。"
    },
    per: {
      "undefined": "",
      MONTH: "每月",
      YEAR: "每年",
      WEEK: "每周",
      QUARTER: "每季度"
    }
  },
  password: {
    title: "更改密码",
    subtitle: "用户：{{ item.email }}",
    newPassword: "新密码",
    confirmPassword: "重新输入新密码"
  },
  breadcrumbs: {
    list: "所有用户",
    details: "{{name}}",
    userGroups: "用户组",
    approvers: "批准人",
    permissions: "购买限制"
  }
};
var orgUserUserGroups$1 = {
  title: "管理用户组",
  subtitle: "用户：{{ item.name }}",
  assigned: "已成功分配用户组 {{item.name}}",
  unassigned: "已成功取消分配用户组 {{item.name}}"
};
var orgUserAssignedUserGroups$1 = {
  title: "已分配用户组",
  subtitle: "用户：{{ item.name }}",
  assigned: "已成功分配用户组 {{item.name}}",
  unassigned: "已成功取消分配用户组 {{item.name}}"
};
var orgUserApprovers$1 = {
  title: "管理审批人",
  subtitle: "用户：{{ item.name }}",
  assigned: "已成功分配审批人 {{ item.name }}",
  unassigned: "已成功取消分配审批人 {{ item.name }}"
};
var orgUserAssignedApprovers$1 = {
  title: "已分配审批人",
  subtitle: "用户：{{ item.name }}",
  assigned: "已成功分配审批人 {{ item.name }}",
  unassigned: "已成功取消分配审批人 {{ item.name }}"
};
var orgUserPermissions$1 = {
  title: "管理购买限制",
  subtitle: "用户：{{ item.name }}",
  assigned: "已成功分配购买限制 {{ item.code }}",
  unassigned: "已成功取消分配购买限制 {{ item.code }}"
};
var orgUserAssignedPermissions$1 = {
  title: "已分配购买限制",
  subtitle: "用户：{{ item.name }}",
  assigned: "已成功分配购买限制 {{ item.code }}",
  unassigned: "已成功取消分配购买限制 {{ item.code }}"
};
var orgPurchaseLimit$1 = {
  groupName: "购买限制",
  header: "所有购买限制 ({{count}})",
  name: "名称",
  code: "代码",
  active: "状态",
  limit: "限制",
  orderApprovalPermissionType: "类型",
  threshold: "阈值",
  periodRange: "期间",
  currency: "货币",
  orgUnit: "父单位",
  unit: "父单位",
  actions: "",
  hint: "购买限制通过定义采购商每笔订单或每周、每月、每季度或每年可以花多少钱来帮助控制支出。购买限制分配给用户或用户组。购买限制还分配给审批人，定义允许他们批准多少。您可以使用用户组一次将购买限制分配给多个用户。",
  details: {
    title: "购买限制详细信息",
    subtitle: "购买限制：{{ item.code }}"
  },
  edit: {
    title: "编辑购买限制",
    subtitle: "购买限制：{{ item.code }}"
  },
  create: {
    title: "创建购买限制",
    subtitle: ""
  },
  sortBy: "排序依据",
  sort: {
    byName: "名称",
    byUnitName: "单位"
  },
  messages: {
    deactivateTitle: "禁用此购买限制？",
    deactivate: "已禁用的购买限制无法再分配给用户或用户组。当前分配将不起作用。",
    confirmEnabled: "已成功启用购买限制 {{ item.code }}",
    confirmDisabled: "已成功禁用购买限制 {{ item.code }}",
    update: "已成功更新购买限制 {{ item.code }}",
    create: "已成功创建购买限制 {{ item.code }}"
  },
  info: {
    disabledEdit: "启用购买限制以允许编辑。",
    disabledEnable: "必须先启用单位，然后才能启用此购买限制。"
  },
  per: {
    DAY: "每天",
    WEEK: "每周",
    MONTH: "每月",
    QUARTER: "每季度",
    YEAR: "每年"
  },
  breadcrumbs: {
    list: "所有购买限制",
    details: "{{code}}"
  }
};
var organization$3 = {
  organization: organization$2,
  orgCostCenter: orgCostCenter$1,
  orgCostCenterBudgets: orgCostCenterBudgets$1,
  orgCostCenterAssignedBudgets: orgCostCenterAssignedBudgets$1,
  orgBudget: orgBudget$1,
  orgBudgetAssignedCostCenters: orgBudgetAssignedCostCenters$1,
  orgUnit: orgUnit$1,
  orgUnitChildren: orgUnitChildren$1,
  orgUnitApprovers: orgUnitApprovers$1,
  orgUnitAssignedApprovers: orgUnitAssignedApprovers$1,
  orgUnitAssignedRoles: orgUnitAssignedRoles$1,
  orgUnitUsers: orgUnitUsers$1,
  orgUnitUserRoles: orgUnitUserRoles$1,
  orgUnitAssignedUsers: orgUnitAssignedUsers$1,
  orgUnitCostCenters: orgUnitCostCenters$1,
  orgUnitAddress: orgUnitAddress$1,
  orgUserGroup: orgUserGroup$1,
  orgUserGroupUsers: orgUserGroupUsers$1,
  orgUserGroupAssignedUsers: orgUserGroupAssignedUsers$1,
  orgUserGroupPermissions: orgUserGroupPermissions$1,
  orgUserGroupAssignedPermissions: orgUserGroupAssignedPermissions$1,
  orgUser: orgUser$1,
  orgUserUserGroups: orgUserUserGroups$1,
  orgUserAssignedUserGroups: orgUserAssignedUserGroups$1,
  orgUserApprovers: orgUserApprovers$1,
  orgUserAssignedApprovers: orgUserAssignedApprovers$1,
  orgUserPermissions: orgUserPermissions$1,
  orgUserAssignedPermissions: orgUserAssignedPermissions$1,
  orgPurchaseLimit: orgPurchaseLimit$1
};
var zh = {
  organization: organization$3
};
var organization = {
  enabled: "啟用中",
  disabled: "已停用",
  enable: "啟用",
  disable: "停用",
  name: "名稱",
  code: "代碼",
  done: "完成",
  cancel: "取消",
  add: "新增",
  manageUsers: "管理使用者",
  create: "建立 {{name}}",
  edit: "編輯",
  save: "儲存 {{name}}",
  "delete": "刪除",
  assign: "管理",
  active: "啟用中",
  status: "狀態",
  details: "明細",
  messages: {
    emptyList: "此清單為空"
  },
  userRoles: {
    b2bcustomergroup: "客戶",
    b2bapprovergroup: "核准者",
    b2bmanagergroup: "經理",
    b2badmingroup: "管理員"
  },
  userRights: {
    unitorderviewergroup: "檢視單位層級訂單"
  },
  breadcrumb: "組織",
  notification: {
    noSufficientPermissions: "存取此頁面的權限不足",
    notExist: "此項目不存在",
    disabled: "您無法編輯停用的項目"
  },
  confirmation: {
    cancel: "取消",
    confirm: "確認",
    disable: "停用",
    "delete": "刪除"
  },
  httpHandlers: {
    conflict: {
      budget: "代碼為 {{ code }} 的預算已存在。",
      costCenter: "代碼為 {{ code }} 的成本中心已存在。",
      unit: "UID 為 {{ code }} 的組織單位已存在。",
      user: "電子郵件為 {{ code }} 的使用者已存在",
      userGroup: "ID 為 {{ code }} 的使用者群組已存在",
      permission: "代碼為 {{ code }} 的核准權限已存在。",
      unknown: "伺服器驗證錯誤。"
    }
  },
  information: "關於 {{title}} 的更多資訊"
};
var orgCostCenter = {
  groupName: "成本中心",
  header: "所有成本中心 ({{count}})",
  code: "代碼",
  active: "狀態",
  name: "名稱",
  currency: "幣別",
  unit: "上層單位",
  actions: "",
  sortBy: "排序依據",
  sort: {
    byName: "名稱",
    byUnitName: "單位",
    byCode: "代碼"
  },
  hint: "透過貴組織採購帳戶下訂的所有訂單都會連結至成本中心以進行追蹤。每個單位可有多個成本中心。若要限制支出，請將預算指派給成本中心。買方會在結帳時選擇成本中心。",
  disable: {
    confirm: "停用"
  },
  messages: {
    deactivateTitle: "停用此成本中心嗎？",
    deactivate: "停用的成本中心無法用於下新訂單。請確保您的單位至少有一個成本中心。現有的訂單不會受到影響。",
    confirmEnabled: "已成功啟用成本中心 {{ item.name }}",
    confirmDisabled: "已成功停用成本中心 {{ item.name }}",
    update: "已成功更新成本中心 {{ item.name }}",
    create: "已成功建立成本中心 {{ item.name }}"
  },
  info: {
    disabledEdit: "啟用成本中心以允許編輯。",
    disabledEnable: "必須先啟用單位，才能啟用此成本中心。"
  },
  details: {
    title: "成本中心明細",
    subtitle: "成本中心：{{ item.name }}"
  },
  edit: {
    title: "編輯成本中心",
    subtitle: "成本中心：{{ item.name }}"
  },
  create: {
    title: "建立成本中心",
    subtitle: ""
  },
  budget: {
    link: "預算"
  },
  breadcrumbs: {
    list: "所有成本中心",
    details: "{{name}}",
    budgets: "預算"
  }
};
var orgCostCenterBudgets = {
  title: "管理預算",
  subtitle: "成本中心：{{ item.name }}",
  assigned: "已成功指派預算 {{ item.name }}",
  unassigned: "已成功取消指派預算 {{ item.name }}"
};
var orgCostCenterAssignedBudgets = {
  title: "指派的預算",
  subtitle: "成本中心：{{ item.name }}",
  assigned: "已成功指派預算 {{ item.name }}",
  unassigned: "已成功取消指派預算 {{ item.name }}"
};
var orgBudget = {
  groupName: "預算",
  header: "所有預算 ({{count}})",
  code: "代碼",
  name: "名稱",
  active: "狀態",
  currency: "幣別",
  amount: "金額",
  unit: "單位",
  businessUnits: "單位",
  dateRange: "開始 - 結束",
  startDate: "開始",
  endDate: "結束",
  actions: "",
  sortBy: "排序依據",
  sort: {
    byName: "名稱",
    byUnitName: "單位",
    byCode: "代碼",
    byValue: "值"
  },
  hint: "預算設定整體採購限制並指派給成本中心。買方會在結帳時選擇成本中心。",
  details: {
    title: "預算明細",
    subtitle: "預算：{{ item.name }}"
  },
  edit: {
    title: "編輯預算",
    subtitle: "預算：{{ item.name }}"
  },
  create: {
    title: "建立預算",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "停用此預算嗎？",
    deactivate: "停用的預算不再套用至受指派的成本中心。請確保關聯的成本中心至少有一個預算。",
    confirmEnabled: "已成功啟用預算 {{ item.name }}",
    confirmDisabled: "已成功停用預算 {{ item.name }}",
    update: "已成功更新預算 {{ item.name }}",
    create: "已成功建立預算 {{ item.name }}"
  },
  info: {
    disabledEdit: "啟用預算以允許編輯。",
    disabledEnable: "必須先啟用單位，才能啟用此預算。"
  },
  links: {
    costCenters: "成本中心"
  },
  breadcrumbs: {
    list: "所有預算",
    details: "{{name}}"
  }
};
var orgBudgetAssignedCostCenters = {
  title: "成本中心",
  subtitle: "預算：{{ item.name }}"
};
var orgUnit = {
  groupName: "單位",
  header: "所有單位 ({{count}})",
  unit: "單位",
  name: "名稱",
  uid: "ID",
  approvalProcess: "核准程序",
  parentUnit: "上層單位",
  active: "狀態",
  hint: "單位表示部門、商店、地區或其他合理的邏輯分組。買方在結帳時可用的成本中心和交貨地址取決於其單位。使用者可存取其主要單位的所有下層單位。",
  details: {
    title: "單位明細",
    subtitle: "單位：{{ item.name }}",
    hint: "單位表示部門、商店、地區或其他合理的邏輯分組。停用單位將停用單位的所有下層，包含下層單位、使用者和成本中心。無法編輯停用的單位。"
  },
  edit: {
    title: "編輯單位",
    subtitle: "單位：{{ item.name }}"
  },
  create: {
    title: "建立單位",
    subtitle: ""
  },
  messages: {
    deactivateTitle: "停用此單位嗎？",
    deactivate: "停用單位將對您的交易組織產生廣泛的影響。所有單位的下層單位、使用者、預算和成本中心也將停用。",
    confirmEnabled: "已成功啟用單位 {{item.name}}",
    confirmDisabled: "已成功停用單位 {{item.name}}",
    update: "已成功更新單位 {{ item.name }}",
    create: "已成功建立單位 {{ item.name }}"
  },
  info: {
    disabledEdit: "啟用單位以允許編輯。",
    disabledEnable: "必須先啟用上層，才能啟用此單位。",
    disabledDisable: "無法停用根單位。"
  },
  links: {
    units: "下層單位",
    users: "使用者",
    approvers: "核准者",
    shippingAddresses: "交貨地址",
    costCenters: "成本中心"
  },
  tree: {
    expandAll: "全部展開",
    collapseAll: "全部收縮",
    expand: "展開",
    collapse: "收縮",
    explore: "探索子單位"
  },
  children: {
    create: {
      title: "建立下層單位",
      subtitle: ""
    },
    messages: {
      create: "已成功建立單位 {{ item.name }}"
    }
  },
  costCenters: {
    create: {
      title: "建立成本中心",
      subtitle: ""
    }
  },
  form: {
    parentOrgUnit: "上層業務單位",
    create: "建立單位",
    parentOrgUnitNotes: "此單位是您組織的最上層單位。無法將此單位指派給其他單位。"
  },
  users: {
    header: "{{code}} 中的使用者",
    changeUserRoles: "更改使用者角色",
    newUser: "新使用者"
  },
  assignRoles: {
    header: "管理 {{code}} 中的角色",
    instructions: {
      check: "若要將角色指派給使用者，請勾選角色的核取方塊。",
      uncheck: "若要移除角色，請清除角色的核取方塊。",
      changes: "已自動儲存更改。"
    }
  },
  approvers: {
    header: "{{code}} 中的核准者",
    assign: "管理核准者",
    "new": "新核准者"
  },
  assignApprovers: {
    header: "管理 {{code}} 中的核准者",
    instructions: {
      check: "若要將核准者指派給此單位，請勾選使用者的核取方塊。",
      uncheck: "若要移除核准者，請清除使用者的核取方塊。",
      changes: "已自動儲存更改。"
    },
    hint: "核准者清單下顯示的使用者會受指派此單位和下層單位買方的核准權限。請注意，具備核准者角色的使用者與核准者清單下顯示的核准者不同。如果單位的核准者不存在或核准者沒有足夠的核准採購權限，則在選擇管理前會尋找單位階層較上層的核准者。"
  },
  breadcrumbs: {
    list: "所有單位",
    details: "{{name}}",
    children: "下層單位",
    users: "使用者",
    approvers: "核准者",
    addresses: "交貨地址",
    addressDetails: "{{formattedAddress}}",
    costCenters: "成本中心"
  }
};
var orgUnitChildren = {
  title: "下層單位",
  subtitle: "單位：{{item.name}}",
  info: {
    disabledCreate: "無法為停用的單位建立下層單位。"
  },
  hint: "單位表示部門、商店、地區或其他合理的邏輯分組。使用者「繼承」下層單位，表示買方在結帳時可存取下層單位的成本中心和交貨地址"
};
var orgUnitApprovers = {
  title: "管理核准者",
  subtitle: "單位：{{item.name}}",
  assigned: "已成功指派使用者 {{ item.name }}",
  unassigned: "已成功指派使用者 {{ item.name }}"
};
var orgUnitAssignedApprovers = {
  title: "指派的核准者",
  subtitle: "單位：{{item.name}}",
  assigned: "已成功指派使用者 {{ item.name }}",
  unassigned: "已成功指派使用者 {{ item.name }}",
  hint: "核准者清單下顯示的使用者會受指派此單位和下層單位買方的核准權限。請注意，具備核准者角色的使用者與核准者清單下顯示的核准者不同。如果單位的核准者不存在或核准者沒有足夠的核准採購權限，則在選擇管理前會尋找單位階層較上層的核准者。"
};
var orgUnitAssignedRoles = {
  header: "管理 {{code}} 中的角色",
  name: "名稱",
  email: "電子郵件",
  roles: "角色",
  roleCustomer: "客戶",
  roleApprover: "核准者",
  roleManager: "經理",
  roleAdministrator: "管理員"
};
var orgUnitUsers = {
  title: "指派的使用者",
  subtitle: "單位：{{item.name}}",
  info: {
    disabledCreate: "無法為停用的單位建立使用者"
  },
  hint: "使用者是買方、核准者、經理和組織的管理員。每個使用者會受指派採購或核准採購的角色。使用者「繼承」下層單位，表示買方可在結帳時存取下層單位的成本中心和交貨地址。"
};
var orgUnitUserRoles = {
  title: "使用者角色和權限",
  subtitle: "使用者：{{item.name}}",
  messages: {
    rolesUpdated: "已成功更新 {{item.name}} 的角色"
  }
};
var orgUnitAssignedUsers = {
  title: "指派的使用者",
  subtitle: "單位：{{item.name}}"
};
var orgUnitCostCenters = {
  title: "指派的成本中心",
  subtitle: "單位：{{item.name}}",
  info: {
    disabledCreate: "無法為停用的單位建立成本中心"
  },
  hint: "透過貴組織採購帳戶下訂的所有訂單都會連結至成本中心以進行追蹤。買方會在使用「帳戶」採購方法結帳時選擇成本中心。每個單位可有多個成本中心，但單一成本中心僅可指派給單一單位。若要定義最終支出限制，請將預算指派給成本中心。 "
};
var orgUnitAddress = {
  title: "交貨地址",
  subtitle: "單位：{{item.name}}",
  country: "國家/地區",
  titles: "稱謂",
  firstName: "名字",
  lastName: "姓氏",
  formattedAddress: "地址",
  address1: "地址",
  address2: "第二個地址 (選擇性)",
  city: "城市",
  state: "州",
  zipCode: "郵遞區號",
  phoneNumber: "電話號碼 (選擇性)",
  streetAddress: "街道地址",
  aptSuite: "公寓號碼",
  selectOne: "選擇一個...",
  hint: "買方使用「帳戶」採購方法結帳時，必須選擇成本中心。買方可用的交貨地址取決於所選成本中心的單位。",
  details: {
    title: "地址明細",
    subtitle: "單位：{{item.name}}"
  },
  edit: {
    title: "編輯地址"
  },
  create: {
    title: "建立地址"
  },
  form: {
    subtitle: "單位：{{item.name}}"
  },
  messages: {
    create: "已成功建立地址 {{ item.firstName }} {{ item.lastName }}",
    update: "已成功更新地址 {{ item.firstName }} {{ item.lastName }}",
    "delete": "無法復原地址。現有的訂單不會受到影響。",
    deleteTitle: "刪除此地址嗎？",
    deleted: "已成功刪除地址 {{ item.firstName }} {{ item.lastName }}"
  }
};
var orgUserGroup = {
  groupName: "使用者群組",
  header: "所有使用者群組 ({{count}})",
  disabled: "(已停用)",
  uid: "代碼",
  name: "名稱",
  unit: "單位",
  orgUnit: "單位",
  actions: "",
  sortBy: "排序依據",
  sort: {
    byName: "名稱",
    byUnitName: "單位",
    byGroupID: "群組"
  },
  hint: "使用者群組可讓您將使用者組合在一個群組中，以便一次為多個使用者指派採購限制。",
  details: {
    title: "使用者群組明細",
    subtitle: "使用者群組：{{ item.name }}"
  },
  edit: {
    title: "編輯使用者群組",
    subtitle: "使用者群組：{{ item.name }}"
  },
  create: {
    title: "建立使用者群組",
    subtitle: ""
  },
  links: {
    user: "使用者",
    permission: "採購限制"
  },
  messages: {
    update: "已成功更新使用者群組 {{ item.name }}",
    create: "已成功建立使用者群組 {{ item.name }}",
    deleteTitle: "刪除此使用者群組嗎？",
    "delete": "刪除使用者群組時，此群組中的使用者不會受到影響。",
    deleted: "已成功刪除使用者群組 {{ item.name }}"
  },
  breadcrumbs: {
    list: "所有使用者群組",
    details: "{{name}}",
    users: "使用者",
    permissions: "採購限制"
  }
};
var orgUserGroupUsers = {
  title: "管理使用者",
  subtitle: "使用者群組：{{ item.name }}",
  assigned: "已成功指派使用者 {{ item.name }}",
  unassigned: "已成功指派使用者 {{ item.name }}",
  unassignAll: "取消指派全部",
  unassignAllConfirmation: "已成功取消指派所有使用者"
};
var orgUserGroupAssignedUsers = {
  title: "指派的使用者",
  subtitle: "使用者群組：{{ item.name }}",
  assigned: "已成功指派使用者 {{ item.name }}",
  unassigned: "已成功指派使用者 {{ item.name }}"
};
var orgUserGroupPermissions = {
  title: "管理採購限制",
  subtitle: "限制：{{ item.name }}",
  assigned: "已成功指派採購限制 {{item.code}}",
  unassigned: "已成功取消指派採購限制 {{item.code}}"
};
var orgUserGroupAssignedPermissions = {
  title: "指派的採購限制",
  subtitle: "限制：{{ item.name }}",
  assigned: "已成功指派採購限制 {{item.code}}",
  unassigned: "已成功取消指派採購限制 {{item.code}}"
};
var orgUser = {
  groupName: "使用者",
  header: "所有使用者 ({{count}})",
  disabled: "(已停用)",
  uid: "電子郵件",
  active: "狀態",
  name: "名稱",
  firstName: "名字",
  lastName: "姓氏",
  email: "電子郵件",
  orgUnit: "單位",
  unit: "單位",
  roles: "角色",
  rights: "權限",
  title: "稱謂",
  hint: "使用者是買方、核准者、經理和組織的管理員。每個使用者會受指派採購或核准採購的角色。每個使用者屬於單位，並可存取其主要單位的所有下層單位。",
  unitApprover: "單位核准者",
  assignApprover: "將使用者新增至單位的核准者",
  actions: "",
  sortBy: "排序依據",
  sort: {
    byName: "名稱",
    byUnit: "單位"
  },
  details: {
    title: "使用者明細",
    subtitle: "使用者：{{ item.name }}"
  },
  edit: {
    title: "編輯使用者",
    subtitle: "使用者：{{ item.name }}"
  },
  create: {
    title: "建立使用者",
    subtitle: ""
  },
  links: {
    password: "更改密碼",
    approvers: "核准者",
    userGroup: "使用者群組",
    permission: "採購限制",
    rolesAndRights: "角色和權限"
  },
  messages: {
    deactivateTitle: "停用此使用者嗎？",
    deactivate: "停用的使用者無法登入店面和下訂單。",
    confirmEnabled: "已成功啟用使用者 {{item.firstName}} {{item.lastName}}",
    confirmDisabled: "已成功停用使用者 {{item.firstName}} {{item.lastName}}",
    update: "已成功更新使用者 {{item.firstName}} {{item.lastName}}",
    create: "已成功建立使用者 {{item.firstName}} {{item.lastName}}",
    updatePassword: "已成功更新使用者 {{item.firstName}} {{item.lastName}} 密碼"
  },
  info: {
    disabledEdit: "啟用使用者以允許編輯。",
    disabledEnable: "必須先啟用單位，才能啟用此使用者。"
  },
  approver: {
    link: "核准者",
    header: "{{code}} 中的核准者",
    assign: "指派核准者",
    assignHeader: "指派 {{code}} 中的核准者",
    back: "返回",
    "new": "新核准者",
    instructions: {
      check: "若要將核准者指派給此使用者，請勾選使用者的核取方塊。",
      uncheck: "若要移除核准者，請清除使用者的核取方塊。",
      changes: "已自動儲存更改。"
    }
  },
  userGroup: {
    link: "使用者群組",
    header: "{{code}} 中的使用者群組 ",
    assign: "指派使用者群組",
    assignHeader: "指派 {{code}} 中的使用者群組 ",
    back: "返回",
    instructions: {
      check: "若要將使用者群組指派給此使用者，請勾選使用者的核取方塊。",
      uncheck: "若要移除使用者群組，請清除使用者的核取方塊。",
      changes: "已自動儲存更改。"
    }
  },
  permission: {
    link: "採購限制",
    header: "{{code}} 中的採購限制",
    assign: "指派採購限制",
    assignHeader: "指派 {{code}} 中的採購限制",
    back: "返回",
    instructions: {
      check: "若要將採購限制指派給此使用者，請勾選其核取方塊。",
      uncheck: "若要取消指派採購限制，請清除其核取方塊。",
      changes: "已自動儲存更改。"
    },
    per: {
      "undefined": "",
      MONTH: "每月",
      YEAR: "每年",
      WEEK: "每週",
      QUARTER: "每季"
    }
  },
  password: {
    title: "更改密碼",
    subtitle: "使用者：{{ item.email }}",
    newPassword: "新密碼",
    confirmPassword: "重新輸入新密碼"
  },
  breadcrumbs: {
    list: "所有使用者",
    details: "{{name}}",
    userGroups: "使用者群組",
    approvers: "核准者",
    permissions: "採購限制"
  }
};
var orgUserUserGroups = {
  title: "管理使用者群組",
  subtitle: "使用者：{{ item.name }}",
  assigned: "已成功指派使用者群組 {{item.name}}",
  unassigned: "已成功取消指派使用者群組 {{item.name}}"
};
var orgUserAssignedUserGroups = {
  title: "指派的使用者群組",
  subtitle: "使用者：{{ item.name }}",
  assigned: "已成功指派使用者群組 {{item.name}}",
  unassigned: "已成功取消指派使用者群組 {{item.name}}"
};
var orgUserApprovers = {
  title: "管理核准者",
  subtitle: "使用者：{{ item.name }}",
  assigned: "已成功指派核准者 {{ item.name }}",
  unassigned: "已成功取消指派核准者 {{ item.name }}"
};
var orgUserAssignedApprovers = {
  title: "指派的核准者",
  subtitle: "使用者：{{ item.name }}",
  assigned: "已成功指派核准者 {{ item.name }}",
  unassigned: "已成功取消指派核准者 {{ item.name }}"
};
var orgUserPermissions = {
  title: "管理採購限制",
  subtitle: "使用者：{{ item.name }}",
  assigned: "已成功指派採購限制 {{ item.code }}",
  unassigned: "已成功取消指派採購限制 {{ item.code }}"
};
var orgUserAssignedPermissions = {
  title: "指派的採購限制",
  subtitle: "使用者：{{ item.name }}",
  assigned: "已成功指派採購限制 {{ item.code }}",
  unassigned: "已成功取消指派採購限制 {{ item.code }}"
};
var orgPurchaseLimit = {
  groupName: "採購限制",
  header: "所有採購限制 ({{count}})",
  name: "名稱",
  code: "代碼",
  active: "狀態",
  limit: "額度",
  orderApprovalPermissionType: "類型",
  threshold: "門檻",
  periodRange: "期間",
  currency: "幣別",
  orgUnit: "上層單位",
  unit: "上層單位",
  actions: "",
  hint: "採購限制可透過定義買方每個訂單或每週、每月、每季或每年可支出的金額，從而協助控制支出。採購限制會指派給使用者或使用者群組。採購限制也會指派給核准者以定義允許核准的金額。您可使用使用者群組一次將採購限制指派給多個使用者。",
  details: {
    title: "採購限制明細",
    subtitle: "採購限制：{{ item.code }}"
  },
  edit: {
    title: "編輯採購限制",
    subtitle: "採購限制：{{ item.code }}"
  },
  create: {
    title: "建立採購限制",
    subtitle: ""
  },
  sortBy: "排序依據",
  sort: {
    byName: "名稱",
    byUnitName: "單位"
  },
  messages: {
    deactivateTitle: "停用此採購限制嗎？",
    deactivate: "停用的採購限制無法再指派給使用者或使用者群組。目前的指派將無效。",
    confirmEnabled: "已成功啟用採購限制 {{ item.code }}",
    confirmDisabled: "已成功停用採購限制 {{ item.code }}",
    update: "已成功更新採購限制 {{ item.code }}",
    create: "已成功建立採購限制 {{ item.code }}"
  },
  info: {
    disabledEdit: "啟用採購限制以允許編輯。",
    disabledEnable: "必須先啟用單位，才能啟用此採購限制。"
  },
  per: {
    DAY: "每天",
    WEEK: "每週",
    MONTH: "每月",
    QUARTER: "每季",
    YEAR: "每年"
  },
  breadcrumbs: {
    list: "所有採購限制",
    details: "{{code}}"
  }
};
var organization$1 = {
  organization,
  orgCostCenter,
  orgCostCenterBudgets,
  orgCostCenterAssignedBudgets,
  orgBudget,
  orgBudgetAssignedCostCenters,
  orgUnit,
  orgUnitChildren,
  orgUnitApprovers,
  orgUnitAssignedApprovers,
  orgUnitAssignedRoles,
  orgUnitUsers,
  orgUnitUserRoles,
  orgUnitAssignedUsers,
  orgUnitCostCenters,
  orgUnitAddress,
  orgUserGroup,
  orgUserGroupUsers,
  orgUserGroupAssignedUsers,
  orgUserGroupPermissions,
  orgUserGroupAssignedPermissions,
  orgUser,
  orgUserUserGroups,
  orgUserAssignedUserGroups,
  orgUserApprovers,
  orgUserAssignedApprovers,
  orgUserPermissions,
  orgUserAssignedPermissions,
  orgPurchaseLimit
};
var zh_TW = {
  organization: organization$1
};
var organizationTranslationChunksConfig = {
  organization: ["organization", "orgCostCenter", "orgCostCenterBudgets", "orgCostCenterAssignedBudgets", "orgBudget", "orgBudgetAssignedCostCenters", "orgUnit", "orgUnitChildren", "orgUnitApprovers", "orgUnitAssignedApprovers", "orgUnitAssignedRoles", "orgUnitUsers", "orgUnitUserRoles", "orgUnitAssignedUsers", "orgUnitCostCenters", "orgUnitAddress", "orgUserGroup", "orgUserGroupUsers", "orgUserGroupAssignedUsers", "orgUserGroupPermissions", "orgUserGroupAssignedPermissions", "orgUser", "orgUserUserGroups", "orgUserAssignedUserGroups", "orgUserApprovers", "orgUserAssignedApprovers", "orgUserPermissions", "orgUserAssignedPermissions", "orgPurchaseLimit"]
};
var organizationTranslations = {
  en
};
export {
  organizationTranslationChunksConfig,
  organizationTranslations,
  cs as organizationTranslationsCs,
  de as organizationTranslationsDe,
  en as organizationTranslationsEn,
  es as organizationTranslationsEs,
  es_CO as organizationTranslationsEs_CO,
  fr as organizationTranslationsFr,
  hi as organizationTranslationsHi,
  hu as organizationTranslationsHu,
  id as organizationTranslationsId,
  it as organizationTranslationsIt,
  ja as organizationTranslationsJa,
  ko as organizationTranslationsKo,
  pl as organizationTranslationsPl,
  pt as organizationTranslationsPt,
  ru as organizationTranslationsRu,
  zh as organizationTranslationsZh,
  zh_TW as organizationTranslationsZh_TW
};
//# sourceMappingURL=@spartacus_organization_administration_assets.js.map
