export interface ITraffic {
  date: string;
  fileDate: string;
  TPS: {
    [key: string]: ISection;
  };
  SCH: {
    [key: string]: ISection;
  };
  TPC: {
    [key: string]: ISection;
  };
  REG: {
    [key: string]: ISection;
  };
}

export interface ISection {
  timeIdentifier?: string;
  time?: number;
  trafficIdentifier?: string;
  traffic?: string;
  from: string;
  to: string;
  isOpen: boolean | null;
  entries: IRoad[];
  exits?: IRoad[];
  extras?: IRoad[];
}

export interface IRoad {
  identifier: string;
  name?: string;
  isOpen: boolean | null;
}
