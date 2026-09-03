import { AllProductLine } from './enums/availableProductList.enum';

export const wayagteGuestSalesId = '1800_GE_GE';
export const bentlyGuestSalesId = '1200_BN_BN';
export const panametricsGuestSalesId = '1830_GE_GE';
export const druckGuestSalesId = '6210_GE_GE';
export const reuterStokesGuestSalesId = '1600_RS_RS';

export const productLineCode = {
  [AllProductLine.waygate]: 'ECOM_LVL1_00000001',
  [AllProductLine.bently]: 'ECOM_LVL1_00000006',
  [AllProductLine.panametrics]: 'ECOM_LVL1_00000002',
  [AllProductLine.druck]: 'ECOM_LVL1_00000008',
  [AllProductLine.reuterStokes]: 'ECOM_LVL1_00000009',
};

export const productLineName = {
  [AllProductLine.waygate]: 'Waygate-Technologies',
  [AllProductLine.bently]: 'Cordant',
  [AllProductLine.panametrics]: 'Panametrics',
  [AllProductLine.druck]: 'Druck',
  [AllProductLine.reuterStokes]: 'Reuter-Stokes',
};

export const productNotFoundList = {
  [AllProductLine.waygate]: {
    name: 'Waygate',
    url: 'https://www.bakerhughes.com/waygate-technologies',
  },
  [AllProductLine.bently]: {
    name: 'Cordant',
    url: 'https://www.bakerhughes.com/bently-nevada',
  },

  [AllProductLine.panametrics]: {
    name: 'Panametrics',
    url: 'https://www.bakerhughes.com/panametrics',
  },
  [AllProductLine.druck]: {
    name: 'Druck',
    url: 'https://www.bakerhughes.com/druck',
  },
  [AllProductLine.reuterStokes]: {
    name: 'Reuter Stokes',
    url: 'https://www.bakerhughes.com/reuter-stokes',
  },
};

export const servicesList = {
  [AllProductLine.waygate]: [
    {
      name: 'Radiography and CT',
      url: 'https://www.bakerhughes.com/waygate-technologies/radiography-and-ct-services',
      categories: [
        {
          name: 'On Demand Inspection Services',
          url: 'https://www.bakerhughes.com/waygate-technologies/radiography-and-ct-services/ondemand-inspection-services-radiography-ct',
        },

        {
          name: 'Field Services',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-repair-services/field-services-radiography-ct',
        },

        {
          name: 'Services Agreements',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-services-agreements/radiography-ct',
        },

        {
          name: 'Parts & Replacements',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/parts-and-replacements/radiography-ct',
        },

        {
          name: 'Rentals',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/rentals/radiography-ct',
        },
        {
          name: 'System Updates & Upgrades',
          url: '',
        },
      ],
    },
    {
      name: 'RVI and Robotics',
      url: 'https://www.bakerhughes.com/waygate-technologies/rvi-and-robotics-services',
      categories: [
        {
          name: 'Robotics-as-a-Service',
          url: 'https://www.bakerhughes.com/waygate-technologies/rvi-and-robotics-services/roboticsasaservice',
        },

        {
          name: 'Inspection Without Limitations',
          url: 'https://www.bakerhughes.com/waygate-technologies/rvi-and-robotics-services/advanced-robotic-services',
        },

        {
          name: 'Flexible RVI Equipment Services',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-services-agreements/rvi-managed-equipment-services-program-flex',
        },

        {
          name: 'VideoProbe™ Rentals & More',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/rentals/visual-inspection',
        },

        {
          name: 'Remote Visual Inspection Equipment House Repairs',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-repair-services/remote-visual-inspection-house-repairs',
        },

        {
          name: 'Visual Care Plan for Video Borescopes',
          url: 'https://www.bakerhughes.com/waygate-technologies/rvi-and-robotics-services/videoprobe-visual-care-plan',
        },
      ],
    },
    {
      name: 'NDT Services & Support',
      url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support',
      categories: [
        {
          name: 'Elevate Your NDT System with Advanced Upgrades',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/system-upgrades',
        },
        {
          name: 'Revolutionize NDT with Remote Service Solutions',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/remote-service',
        },
        {
          name: 'NDT Repair Services for Precision Inspections',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-repair-services',
        },
        {
          name: 'Radiography and CT System Updates',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/software-updates',
        },
        {
          name: 'Streamline NDT Operations with Service Agreements',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-services-agreements',
        },
        {
          name: 'NDT Spare and Replacement Parts',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/parts-and-replacements',
        },
        {
          name: 'NDT Inspection Equipment Rentals',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/rentals',
        },
        {
          name: 'NDT Inspection Services for Industry Excellence',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-inspection-services',
        },
      ],
    },
    {
      name: 'Ultrasound',
      url: 'https://www.bakerhughes.com/waygate-technologies/ultrasound-services',
      categories: [
        {
          name: 'Ultrasonic Testing Consulting from the Industry Leader',
          url: 'https://www.bakerhughes.com/waygate-technologies/ultrasound-services/consulting-services-ultrasound',
        },

        {
          name: 'UT Repair and Calibration Service',
          url: 'https://www.bakerhughes.com/waygate-technologies/ultrasound-services/field-services-ultrasound  ',
        },

        {
          name: 'Specialty Service Agreements for Ultrasonic Testing Equipment',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-services-agreements/ultrasonic-testing',
        },

        {
          name: 'Spare Parts Management',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/parts-and-replacements/ultrasonic-testing',
        },

        {
          name: 'Ultrasonic Testing Equipment Rentals',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/rentals/ultrasonic-testing',
        },

        {
          name: 'System Upgrades for UT Machines',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/system-updates-upgrades-radiography-ct/system-upgrades/ultrasonic-testing',
        },

        {
          name: 'Software Updates for UT Machines',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/system-updates-upgrades-radiography-ct/software-updates/ultrasonic-testing',
        },

        {
          name: 'UT Service Agreements',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-repair-services/ut-calibration-certification',
        },

        {
          name: 'Repairs and Calibration Services by Qualified Experts at our Facilities',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/ndt-repair-services/ut-repair-shop-services',
        },

        {
          name: 'AppLab Service',
          url: 'https://www.bakerhughes.com/waygate-technologies/ultrasound-services/applab-service',
        },
      ],
    },
    {
      name: 'Remote',
      url: 'https://www.bakerhughes.com/waygate-technologies/waygate-technologies-remote-service-contact',
      services: [],
    },
    {
      name: 'Inspection Training Academy',
      url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/waygate-technologies-training-academy',
      services: [],
    },
  ],
  [AllProductLine.bently]: [
    {
      name: 'Support & Services',
      url: 'https://www.bakerhughes.com/bently-nevada/support-services',
      categories: [
        {
          name: 'Implementation Services',
          url: 'https://www.bakerhughes.com/bently-nevada/support-services/implementation-services',
        },

        {
          name: 'Proactive Supporting Services',
          url: 'https://www.bakerhughes.com/bently-nevada/support-services/proactive-supporting-services',
        },

        {
          name: 'Remote Condition Monitoring and Machine Diagnostics',
          url: 'https://www.bakerhughes.com/bently-nevada/support-services/remote-condition-monitoring-and-machine-diagnostics',
          categories: [
            {
              name: 'Bently HOST',
              url: 'https://www.bakerhughes.com/bently-nevada/support-services/remote-condition-monitoring-and-machine-diagnostics/bently-host',
            },
          ],
        },

        {
          name: 'Bently Nevada Training',
          url: 'https://www.bakerhughes.com/bently-nevada/support-services/bently-nevada-training-0',
        },
        {
          name: 'Machinery Diagnostics Services',
          url: 'https://www.bakerhughes.com/bently-nevada/support-services/machinery-diagnostics-services',
          categories: [
            {
              name: 'Industrial Maintenance Overview',
              url: 'https://www.bakerhughes.com/bently-nevada/support-services/machinery-diagnostics-services/industrial-maintenance-overview',
            },
          ],
        },

        {
          name: 'Remote Monitoring & Diagnostics',
          url: 'https://www.bakerhughes.com/bently-nevada/support-services/remote-monitoring-diagnostics',
        },
        {
          name: 'Cyber Security Services',
          url: 'https://www.bakerhughes.com/bently-nevada/support-services/cyber-security-services',
        },
        {
          name: 'Bently Training',
          url: 'https://bentlytraining.com',
        },
      ],
    },
  ],
  [AllProductLine.panametrics]: [
    {
      name: 'Panametrics Services',
      url: 'https://www.bakerhughes.com/panametrics/panametrics-services',
      categories: [
        {
          name: 'Training Service',
          url: 'https://www.bakerhughes.com/panametrics/panametrics-services/training-service',
        },
        {
          name: 'Contact Information',
          url: 'https://www.bakerhughes.com/panametrics/panametrics-services/contact-information',
        },
      ],
    },
  ],
  [AllProductLine.druck]: [
    {
      name: 'Druck Assured Pressure Support Services',
      url: 'https://www.bakerhughes.com/druck/druck-assured-pressure-support-services',
      categories: [
        {
          name: 'Druck North America Service Center',
          url: 'https://www.bakerhughes.com/druck/druck-assured-pressure-support-services/druck-north-america-service-center',
        },
      ],
    },
  ],
  [AllProductLine.reuterStokes]: [
    {
      name: 'Downhole Sensors and Technology',
      url: 'https://www.bakerhughes.com/reuter-stokes/downhole',
      categories: [
        {
          name: 'Gamma-Ray Scintillation Detectors',
          url: 'https://www.bakerhughes.com/reuter-stokes/downhole/gamma-ray-scintillation-detectors',
        },
        {
          name: 'Neutron Detectors',
          url: 'https://www.bakerhughes.com/reuter-stokes/downhole/neutron-detectors',
        },
        {
          name: 'Orientation Modules',
          url: 'https://www.bakerhughes.com/reuter-stokes/downhole/orientation-modules',
        },
      ],
    },
    {
      name: 'Flame Sensing Solutions',
      url: 'https://www.bakerhughes.com/reuter-stokes/flame',
      categories: [
        {
          name: 'Flame Tracker',
          url: 'https://www.bakerhughes.com/reuter-stokes/flame/flame-tracker',
        },
        {
          name: 'Flame Tracker Dry 325',
          url: 'https://www.bakerhughes.com/reuter-stokes/flame/ftd325',
        },
      ],
    },
    {
      name: 'Nuclear Instrumentation',
      url: 'https://www.bakerhughes.com/reuter-stokes/nuclear',
      categories: [
        {
          name: 'Small Modular Reactor (SMR) Nuclear Instrumentation',
          url: 'https://www.bakerhughes.com/reuter-stokes/nuclear/smr',
        },
        {
          name: 'Boiling Water Reactor (BWR) Instrumentation',
          url: 'https://www.bakerhughes.com/reuter-stokes/nuclear/bwr',
        },
        {
          name: 'Pressurized Water Reactor (PWR) Instrumentation',
          url: 'https://www.bakerhughes.com/reuter-stokes/nuclear/pwr',
        },
      ],
    },
    {
      name: 'Radiation Measurement & Monitoring',
      url: 'https://www.bakerhughes.com/reuter-stokes/radiation',
      categories: [
        {
          name: 'Security and Safeguard Radiation Detectors',
          url: 'https://www.bakerhughes.com/reuter-stokes/radiation/safeguards',
        },
        {
          name: 'Homeland Security',
          url: 'https://www.bakerhughes.com/reuter-stokes/radiation/homeland',
        },
        {
          name: 'Specialty Service Agreements for Ultrasonic Testing Equipment',
          url: 'https://www.bakerhughes.com/reuter-stokes/radiation/scattering',
        },
        {
          name: 'Neutron Scattering Applications and Tools',
          url: 'https://www.bakerhughes.com/waygate-technologies/ndt-services-support/parts-and-replacements/ultrasonic-testing',
        },
      ],
    },
  ],
};

export const industriesList = {
  [AllProductLine.waygate]: [
    {
      name: 'Aerospace',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-aerospace',
      categories: [
        {
          name: 'Ultrasonic Solutions for Aerospace',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-aerospace/ultrasonic-solutions-aerospace',
        },
        {
          name: 'Radiography and CT Solutions for Aerospace Industry',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-aerospace/radiography-and-ct-solutions-aerospace-industry',
        },
      ],
    },
    {
      name: 'Electronics',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-electronics',
      categories: [
        {
          name: 'Radiography and CT Solutions for Electronics Industry',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-electronics/radiography-and-ct-solutions-electronics-industry',
        },
      ],
    },
    {
      name: 'Automotives',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-automotives',
      categories: [
        {
          name: 'Ultrasonic Solutions for Automative',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-automotives/ultrasonic-solutions-automotive',
        },
        {
          name: 'Radiography and CT Solutions for Automotive Industry',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-automotives/radiography-and-ct-solutions-automotive-industry',
        },
      ],
    },
    {
      name: 'Batteries',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-batteries',
    },
    {
      name: 'Energy',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-energy',
      categories: [
        {
          name: 'Visual Inspection for Power Generation',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-energy/visual-inspection-power-generation',
        },
      ],
    },
    {
      name: 'Engineering Solutions',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/engineering-solutions',
    },
    {
      name: 'Manufacturing',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-manufacturing',
      categories: [
        {
          name: 'Radiography and CT Solutions for Additive Manufacturing Industry',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-manufacturing/radiography-and-ct-solutions-additive-manufacturing',
        },
      ],
    },
    {
      name: 'Medical',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-medical',
    },
    {
      name: 'Oil and Gas',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-oil-and-gas',
      categories: [
        {
          name: 'Ultrasonic NDT Solutions for Refineries',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-oil-and-gas/ultrasonic-ndt-solutions-refineries',
        },
      ],
    },
    {
      name: 'Research and Development',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-research-and-development',
    },
    {
      name: 'Transportation',
      url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-transportation',
      categories: [
        {
          name: 'Ultrasonic Solutions for Rail',
          url: 'https://www.bakerhughes.com/waygate-technologies/industry/ndt-transportation/ultrasonic-solutions-rail',
        },
      ],
    },
  ],
  [AllProductLine.bently]: [
    {
      name: 'Chemicals',
      url: 'https://www.bakerhughes.com/cordant/industry/chemicals',
    },
    {
      name: 'Fertilizer',
      url: 'https://www.bakerhughes.com/cordant/industry/fertilizers',
    },
    {
      name: 'Mining',
      url: 'https://www.bakerhughes.com/cordant/industry/mining',
    },
    {
      name: 'Oil & Gas',
      url: 'https://www.bakerhughes.com/cordant/industry/oil-and-gas',
    },
    {
      name: 'Power Generation',
      url: 'https://www.bakerhughes.com/cordant/industry/power-generation',
    },
  ],
  [AllProductLine.panametrics]: [
    {
      name: 'CCUS',
      url: 'https://www.bakerhughes.com/panametrics/industry/ccus',
    },
    {
      name: 'Food & Beverage',
      url: 'https://www.bakerhughes.com/panametrics/industry/food-beverage',
    },
    {
      name: 'Geothermal',
      url: 'https://www.bakerhughes.com/panametrics/industry/geothermal',
    },
    {
      name: 'Hydrogen',
      url: 'https://www.bakerhughes.com/panametrics/industry/hydrogen',
    },
    {
      name: 'LNG',
      url: 'https://www.bakerhughes.com/panametrics/industry/lng',
    },
    {
      name: 'Refinery',
      url: 'https://www.bakerhughes.com/panametrics/industry/refinery',
    },
    {
      name: 'Pharma and Healthcare',
      url: 'https://www.bakerhughes.com/panametrics/industry/pharma-and-healthcare',
    },
    {
      name: 'District Energy',
      url: 'https://www.bakerhughes.com/panametrics/industry/district-energy',
    },
    {
      name: 'Power Generation',
      url: 'https://www.bakerhughes.com/panametrics/industry/power-generation',
    },
    {
      name: 'RNG',
      url: 'https://www.bakerhughes.com/panametrics/industry/rng',
    },
    {
      name: 'Semiconductor',
      url: 'https://www.bakerhughes.com/panametrics/industry/semiconductor',
    },
    {
      name: 'Steel',
      url: 'https://www.bakerhughes.com/panametrics/industry/steel',
    },
    {
      name: 'Water and Wastewater',
      url: 'https://www.bakerhughes.com/panametrics/industry/water-and-wastewater',
    },
  ],
  [AllProductLine.druck]: [
    {
      name: 'Automotive Industry',
      url: 'https://www.bakerhughes.com/druck/industry/druck-pressure-sensors-automotive-industry',
    },
    {
      name: 'Semiconductor Industry',
      url: 'https://www.bakerhughes.com/druck/industry/druck-solutions-semiconductor-industry',
    },
    {
      name: 'Motorsport Industry',
      url: 'https://www.bakerhughes.com/druck/industry/druck-high-performance-sensors-motorsport',
    },
    {
      name: 'Oil and Gas Subsea Industry',
      url: 'https://www.bakerhughes.com/druck/industry/oil-and-gas-subsea-industry',
    },
    {
      name: 'Aerospace Industry',
      url: 'https://www.bakerhughes.com/druck/industry/aerospace-industry-1',
    },
    {
      name: 'Hydrology Industry',
      url: 'https://www.bakerhughes.com/druck/industry/hydrology-industry',
    },
  ],
};

export const supportList = {
  [AllProductLine.waygate]: [
    { name: 'Track order', url: '/waygate/track-order' },
    {
      name: 'Contact us',
      url: `/${AllProductLine.waygate}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training documents',
      url: '/training-docs',
    },
    {
      name: 'Returns',
      url: `/${AllProductLine.waygate}/my-returns`,
    },
    {
      name: 'Calibrations & Certificates',
      url: '/waygate/calibration-data',
    },
    // {
    //   name: 'My Saved Equipments',
    //   url: '/my-equipments',
    // },
    // {
    //   name: 'Add New Equipment',
    //   url: '/add-equipment-to-watchlist',
    // },
    // {
    //   name: 'Calibration Data & Certificates',
    //   url: '/calibration-data',
    // },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.bently]: [
    { name: 'My Orders', url: `/${AllProductLine.bently}/my-orders` },
    {
      name: 'My Returns',
      url: `/${AllProductLine.bently}/my-returns`,
    },
    {
      name: 'Contact us',
      url: `/${AllProductLine.bently}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training documents',
      url: '/training-docs',
    },
    {
      name: 'Calibrations & Certificates',
      url: `/${AllProductLine.bently}/calibration-data`,
    },
    // {
    //   name: 'My Saved Equipments',
    //   url: '/my-equipments',
    // },
    // {
    //   name: 'Add New Equipment',
    //   url: '/add-equipment-to-watchlist',
    // },
    // {
    //   name: 'Calibration Data & Certificates',
    //   url: '/calibration-data',
    // },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.panametrics]: [
    { name: 'My Orders', url: `/${AllProductLine.panametrics}/my-orders` },
    {
      name: 'My Returns',
      url: `/${AllProductLine.panametrics}/my-returns`,
    },
    {
      name: 'Contact us',
      url: `/${AllProductLine.panametrics}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training document',
      url: '/training-docs',
    },
    {
      name: 'Calibration & Certificates',
      url: `/${AllProductLine.panametrics}/calibration-data`,
    },
    // {
    //   name: 'My Saved Equipments',
    //   url: '/my-equipments',
    // },
    // {
    //   name: 'Add New Equipment',
    //   url: '/add-equipment-to-watchlist',
    // },
    // {
    //   name: 'Calibration Data & Certificates',
    //   url: '/calibration-data',
    // },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.druck]: [
    { name: 'My Orders', url: `/${AllProductLine.druck}/my-orders` },
    {
      name: 'My Returns',
      url: `/${AllProductLine.druck}/my-returns`,
    },
    {
      name: 'Contact us',
      url: `/${AllProductLine.druck}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training document',
      url: '/training-docs',
    },
    {
      name: 'Calibration & Certificates',
      url: `/${AllProductLine.druck}/calibration-data`,
    },
    // {
    //   name: 'My Saved Equipments',
    //   url: '/my-equipments',
    // },
    // {
    //   name: 'Add New Equipment',
    //   url: '/add-equipment-to-watchlist',
    // },
    // {
    //   name: 'Calibration Data & Certificates',
    //   url: '/calibration-data',
    // },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.reuterStokes]: [
    { name: 'My Orders', url: `/${AllProductLine.reuterStokes}/my-orders` },
    {
      name: 'My Returns',
      url: `/${AllProductLine.reuterStokes}/my-returns`,
    },
    {
      name: 'Contact us',
      url: '/contactus',
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training document',
      url: '/training-docs',
    },
    // {
    //   name: 'Calibration & Certificates',
    //   url: `/${AllProductLine.reuterStokes}/calibration-data`,
    // },
  ],
};

export const supportListGuest = {
  [AllProductLine.waygate]: [
    { name: 'Track order', url: '/waygate/track-order' },
    {
      name: 'Contact us',
      url: `/${AllProductLine.waygate}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training documents',
      url: '/training-docs',
    },
    {
      name: 'Returns',
      url: '/assets/pdf/BH_RMA_Process_Latest.pdf',
      external: true,
    },
    {
      name: 'Calibrations & Certificates',
      url: '/waygate/calibration-data',
    },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.bently]: [
    { name: 'Track order', url: `/${AllProductLine.bently}/track-order` },
    {
      name: 'Contact us',
      url: `/${AllProductLine.bently}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training documents',
      url: '/training-docs',
    },
    {
      name: 'Returns',
      url: '/assets/pdf/BH_RMA_Process_Latest.pdf',
      external: true,
    },
    {
      name: 'Calibrations & Certificates',
      url: `/${AllProductLine.bently}/calibration-data`,
    },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.panametrics]: [
    { name: 'Track order', url: `/${AllProductLine.panametrics}/track-order` },
    {
      name: 'Contact us',
      url: `/${AllProductLine.panametrics}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training document',
      url: '/training-docs',
    },
    {
      name: 'Returns',
      url: '/assets/pdf/BH_RMA_Process_Latest.pdf',
      external: true,
    },
    {
      name: 'Calibration & Certificates',
      url: `/${AllProductLine.panametrics}/calibration-data`,
    },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.druck]: [
    { name: 'Track order', url: `/${AllProductLine.druck}/track-order` },
    {
      name: 'Contact us',
      url: `/${AllProductLine.druck}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training document',
      url: '/training-docs',
    },
    {
      name: 'Returns',
      url: '/assets/pdf/BH_RMA_Process_Latest.pdf',
      external: true,
    },
    {
      name: 'Calibration & Certificates',
      url: `/${AllProductLine.druck}/calibration-data`,
    },
    // {
    //   name: 'Other Important Links',
    //   url: '/list-of-portals',
    // },
  ],
  [AllProductLine.reuterStokes]: [
    { name: 'Track order', url: `/${AllProductLine.reuterStokes}/track-order` },
    {
      name: 'Contact us',
      url: `/${AllProductLine.reuterStokes}/contactus`,
    },
    {
      name: 'Other Portals & Links',
      url: '/list-of-portals',
    },
    {
      name: 'Training document',
      url: '/training-docs',
    },
    // {
    //   name: 'Returns',
    //   url: '/assets/pdf/BH_RMA_Process_Latest.pdf',
    //   external: true,
    // },
    // {
    //   name: 'Calibration & Certificates',
    //   url: `/${AllProductLine.reuterStokes}/calibration-data`,
    // },
  ],
};

export const loadproductListForGuest = {
  [AllProductLine.waygate]:
    '{"active":true,"address":{"country":{"isocode":"US"},"formattedAddress":"Skaneateles, NY","id":"8822995582999","town":"Skaneateles, NY"},"salesAreaId":"1800_GE_GE","salesAreaName":"Waygate Technologies USA, LP"}',
  [AllProductLine.bently]:
    '{"active":true,"address":{"country":{"isocode":"US"}, "formattedAddress":"Minden, NV","id":"8811657920535","town":"Minden, NV"},"salesAreaId": "1200_BN_BN","salesAreaName":"Bently Nevada LLC"}',
  [AllProductLine.panametrics]:
    '{"active":true,"address":{"country":{"isocode":"US"},"formattedAddress":"Billerica, MA","id":"8822995681303","town":"Billerica, MA"},"salesAreaId":"1830_GE_GE","salesAreaName":"Panametrics LLC"}',
  [AllProductLine.druck]:
    '{"active":true,"address":{"country":{"isocode":"GB"},"formattedAddress":"Groby, Leicester, United Kingdom","id":"8811658215447","town":"Groby, Leicester"},"salesAreaId":"6210_GE_GE","salesAreaName":"Druck Limited"}',
  [AllProductLine.reuterStokes]:
    '{"active" : true,"salesAreaId" : "1600_RS_RS","salesAreaName" ,"Reuter-Stokes, Inc."}',
};

// TODO: usefulLinks needs to updated for panametrics

export const productsContentSlot = {
  [AllProductLine.waygate]: 'DSWaygateProductsContentSlot1',
  [AllProductLine.bently]: 'DSBentlyProductsContentSlot1',
  [AllProductLine.panametrics]: 'DSPanaProductsContentSlot1',
  [AllProductLine.druck]: 'DSDruckProductsContentSlot1',
  [AllProductLine.reuterStokes]: 'DSReuterProductsContentSlot1',
};

export const bannerContentSlot = {
  [AllProductLine.waygate]: 'WaygateBannerContentSlot',
  [AllProductLine.bently]: 'BentlyBannerContentSlot',
  [AllProductLine.panametrics]: 'PanaBannerContentSlot',
  [AllProductLine.druck]: 'DruckBannerContentSlot',
  [AllProductLine.reuterStokes]: 'ReuterBannerContentSlot',
};

export const NewArrivalSlot = {
  [AllProductLine.waygate]: 'WaygateNewArrivalSlot',
  [AllProductLine.bently]: 'BentlyNewArrivalSlot',
  [AllProductLine.panametrics]: 'PanaNewArrivalSlot',
  [AllProductLine.druck]: 'DruckNewArrivalSlot',
  [AllProductLine.reuterStokes]: 'ReuterNewArrivalSlot',
};

export const productByCategoryDisplayFlag = {
  [AllProductLine.waygate]: true,
  [AllProductLine.bently]: false,
  [AllProductLine.panametrics]: false,
  [AllProductLine.druck]: false,
  [AllProductLine.reuterStokes]: false,
};

export const usefulLinks = {
  [AllProductLine.waygate]: [
    { linkedIn: 'https://www.linkedin.com/company/waygate-technologies/' },
    { youTube: 'https://www.youtube.com/@WaygateTechnologies' },
  ],
  [AllProductLine.bently]: [
    { linkedIn: 'https://www.linkedin.com/company/bentlynevada/' },
    { youTube: 'https://www.youtube.com/@bentlynevadaabakerhughesbu6013' },
  ],
  [AllProductLine.panametrics]: [
    { linkedIn: 'https://www.linkedin.com/company/panametricscompany/' },
    { youTube: 'https://www.youtube.com/@panametrics' },
  ],
  [AllProductLine.druck]: [
    { linkedIn: 'https://www.linkedin.com/company/druckcompany/' },
    { youTube: 'https://www.youtube.com/@druckabakerhughesbusiness9035' },
  ],
  [AllProductLine.reuterStokes]: [
    { linkedIn: 'https://www.linkedin.com/company/reuter-stokes/' },
    { youTube: 'https://www.youtube.com/@reuter-stokes' },
  ],
};

export const quickOrderDisplay = {
  [AllProductLine.waygate]: true,
  [AllProductLine.bently]: true,
  [AllProductLine.panametrics]: true,
  [AllProductLine.druck]: true,
  [AllProductLine.reuterStokes]: false,
};

export const mailToUrl = {
  [AllProductLine.waygate]: ['waygate.usa@bakerhughes.com'],
  [AllProductLine.bently]: [
    'Bently.returns@bakerhughes.com',
    'https://www.bently.com/support',
  ],
  [AllProductLine.panametrics]: ['https://www.panametrics.com/support'],
  [AllProductLine.reuterStokes]: ['https://www.bakerhughes.com/reuter-stokes'],
  [AllProductLine.druck]: [
    // 'druckcontact@bakerhughes.com Drucktechsupport@bakerhughes.com https://www.bakerhughes.com/druck/contact',
    'druckcontact@bakerhughes.com',
    'Drucktechsupport@bakerhughes.com',
    'https://www.bakerhughes.com/druck/contact',
  ],
};

export const chinaCountry = [
  { isocode: 'CN', name: 'China' },
  { isocode: 'HK', name: 'Hong Kong' },
];

export const apacCountries = [
  { isocode: 'VN', name: 'Vietnam' },
  { isocode: 'KR', name: 'South Korea' },
  { isocode: 'MY', name: 'Malaysia' },
  { isocode: 'SG', name: 'Singapore' },
  { isocode: 'TH', name: 'Thailand' },
  { isocode: 'PH', name: 'Philippines' },
  { isocode: 'ID', name: 'Indonesia' },
];

export const salesOrgsForChinaApac = ['7140', '6040', '1800'];
