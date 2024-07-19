export interface CountryData {
  flags: {
    alt: string;
    png: string;
  };
  name: {
    common: string;
  };
  currencies: {
    [key: string]: {
      name: string;
    };
  };
  cca3: string;
  population: number;
  area: number;
  continents: string[];
  languages: {
    [key: string]: string;
  };
  subregion?: string;
  independent: boolean;
  unMember: boolean;
  region: string;
}
