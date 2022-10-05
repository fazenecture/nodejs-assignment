export interface IDataService {
    fetchBaseData: () => Promise<any>;
    fetchCharactersData: (CHARACTER_API_URL: string, page?: number) => Promise<any>;
    fetchEpisodeData: (page: number) => Promise<any>;
    fetchCharacterMeta: (CHARACTER_API_URL: string) => Promise<any>;
}