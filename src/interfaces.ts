export interface Response {
  name: Name;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Record<
    string,
    {
      name: string;
      symbol: string;
    }
  >;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Record<string, string>;
  translations: Record<
    string,
    {
      official: string;
      common: string;
    }
  >;
  latlng: [number, number];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Record<
    string,
    {
      f: string;
      m: string;
    }
  >;
  flag: string;
  maps: Record<string, string>;
  population: number;
  fifa?: string;
  car: {
    side: string;
    signs: string[];
  };
  timezones: string[];
  continents: string[];
  flags: Record<string, string>;
  coatOfArms: Record<string, string>;
  startOfWeek: string;
  capitalInfo: {
    latlng: [number, number];
  };
  postalCode?: {
    format: string;
    regex: string;
  };
}

export interface Name {
  common: string;
  official: string;
  nativeName?: {
    official: string;
    common: string;
  };
}

export interface HoverInfo {
  name: string;
  latlng: number[];
}

export interface TooltipComponentProps {
  x: number;
  y: number;
  name: string;
}

export interface ModalInfo {
  visible: boolean;
  commonName: string;
  officialName: string;
  capital: string;
  region: string;
  area: number;
  flag: string;
  population: string;
}
