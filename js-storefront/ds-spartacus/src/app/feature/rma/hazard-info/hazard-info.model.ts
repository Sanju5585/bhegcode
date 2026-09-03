export class HazardExposureElement {
  id: number;
  type: ExposureType;
  translationKey: ExposureTypeTranslationKeys;
  additionalInfo?: string;
  isChecked?: boolean = false;
  constructor() {}
}

export class HazardousForm {
  hazardType: ExposureType[];
  declarationA: boolean;
  declarationB: boolean;
  hazardInfo: string;
  chemicalDetails: ChemicalDetail[];
  containsFluids: boolean;
  fluidText: string;
  isOther: boolean;
  otherText: string;
  isHazardSaved: string;
  hazardFormAttachments: [];
  partList: [];

  constructor() {
    this.hazardType = [];
    this.declarationA = null;
    this.declarationB = null;
    this.hazardInfo = '';
    this.chemicalDetails = [];
    this.containsFluids = null;
    this.fluidText = null;
    this.isOther = null;
    this.otherText = null;
    this.isHazardSaved = null;
  }
}

export class ChemicalDetail {
  chemicalName: string;
  un: string;
  isMsdnSupplied?: boolean;
  chemicalNotes?: string;
  isSelected?: boolean;

  constructor(name, un, isMsdn?, notes?) {
    this.chemicalName = name;
    this.un = un;
    this.isMsdnSupplied = isMsdn;
    this.chemicalNotes = notes;
    this.isSelected = false;
  }
}

export enum ExposureType {
  radiation = 'RADIATION',
  biological = 'BIOLOGICAL',
  solvent = 'SOLVENTS_ADHESIVES',
  coolants = 'COOLANTS',
  acid = 'ACID',
  gas = 'COMPRESSEDGAS',
  fluid = 'FLUID_INSIDE',
  lubricants = 'LUBRICANTS',
  fuels = 'FUELS',
  alkali = 'ALKALI',
  others = 'OTHERS',
}

export enum ExposureTypeTranslationKeys {
  radiation = 'hazardInfo.hazardExposure.radiation',
  biological = 'hazardInfo.hazardExposure.biological',
  solvent = 'hazardInfo.hazardExposure.solvents',
  coolants = 'hazardInfo.hazardExposure.coolants',
  acid = 'hazardInfo.hazardExposure.acid',
  gas = 'hazardInfo.hazardExposure.gases',
  fluid = 'hazardInfo.hazardExposure.fluid',
  lubricants = 'hazardInfo.hazardExposure.lubricants',
  fuels = 'hazardInfo.hazardExposure.fuels',
  alkali = 'hazardInfo.hazardExposure.alkali',
  others = 'hazardInfo.hazardExposure.other',
}
