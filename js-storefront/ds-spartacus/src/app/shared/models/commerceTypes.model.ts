export enum CommerceTypes {
  BUY = 'BUY',
  RETURNS = 'RETURNS',
  GUESTBUY = 'GUESTBUY',
  GUESTQUOTE = 'GUESTRFQ',
  QUOTE = 'QUOTE',
}

export enum HazardDetails {
  PARTIAL = 'PARTIAL',
  COMPLETE = 'COMPLETE',
}

export enum CartTypes {
  FILM = 'FILM',
  NONFILM = 'NONFILM',
  HYBRID = 'HYBRID',
}

export const NONFILM = ['IT', 'MS', 'BN', 'FPT', 'NC'];
export const FILM = ['ITFILM'];
