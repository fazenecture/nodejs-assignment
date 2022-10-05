import axios from "axios";
import dotenv from "dotenv";
import { IDataService } from "../interfaces/service.interface";
dotenv.config();

export class DataService implements IDataService {
  public fetchBaseData = async (): Promise<any> => {
    const BASE_URL: string = process.env.BASE_URL ?? "";
    const response = await axios.get(BASE_URL);
    return response.data;
  };

  public fetchCharactersData = async (
    CHARACTER_API_URL: string,
    page?: number
  ): Promise<any> => {
    const response = await axios.get(CHARACTER_API_URL, {
      params: {
        page: page,
      },
    });
    return response.data.results;
  };

  public fetchEpisodeData = async (page: number): Promise<any> => {
    const EPISODE_API_URL = process.env.EPISODE_URL!;
    const response = await axios.get(EPISODE_API_URL, {
      params: {
        page: page,
      },
    });
    return response.data;
  };

  public fetchCharacterMeta = async (
    CHARACTER_API_URL: string
  ): Promise<any> => {
    const {
      data: { info },
    } = await axios.get(CHARACTER_API_URL);
    return info.pages;
  };
}
