/**
 * Connect+Funda brand tokens — single source of truth for all audience pages.
 * Mirrors the tailwind.config.js `cf` palette. Imported anywhere a raw value is needed.
 */
export const cf = {
  navy: '#2D3645',
  navyDeep: '#222A36',
  navyInk: '#1B222C',
  orange: '#F2682A',
  orangeDk: '#D9531A',
  ink: '#37404F',
  muted: '#647084',
  line: '#E7EAF0',
  bgSoft: '#F6F8FB',
} as const;

export const contact = {
  email: 'Garth@connectandfunda.co.za',
  phone: '+27 82 953 5091',
  phoneHref: 'tel:+27829535091',
  web: 'www.connectandfunda.co.za',
  webHref: 'https://www.connectandfunda.co.za',
  address: 'Cube WS, 9 The Straight Street, Pineslopes AH 2191, Johannesburg',
} as const;
