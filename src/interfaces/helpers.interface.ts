export interface IHelper {
  getAllCharactersData: (page?: number) => Promise<any>;
  makeResponse: (data: IData, metaData: IMetaData) => any;
}

export interface IMetaData {
  count?: number;
  page?: number;
}

export interface IData {
  id?: number;
  name?: string;
  air_date?: string;
  episode?: string;
  characters?: ICharacter[];
  url?: string;
  created?: string;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface IOrigin {
  name: string;
  url: string;
}

export interface ILocation {
  name: string;
  url: string;
}
