import { IData, IHelper, IMetaData } from "../interfaces/helpers.interface";
import { DataService } from "../services/data.service";

export class Helpers extends DataService implements IHelper {
  public getAllCharactersData = async (page?: number): Promise<any> => {
    
    const CHARACTER_API_URL = `${process.env.CHARACTER_URL!}`;
    let data: any = [];
    const pagesCount = await this.fetchCharacterMeta(CHARACTER_API_URL);
    const promise_data: Promise<any>[] = [];

    for (let i = 1; i <= pagesCount; i++) {
      promise_data.push(this.fetchCharactersData(CHARACTER_API_URL, i));
    }

    await Promise.all(promise_data)
      .then(async (response: any) => {
        const responseData: any = [];
        response.map((item: any) => {
          responseData.push(...item);
        });
        await data.push(...responseData);
      })
      .catch((error) => {
        console.log("error: ", error);
      });

    const { results } = await this.fetchEpisodeData(page ?? 1);
    Object.values(results).map((item: any) => {
      Object.values(item.characters).map((url: any) => {
        const id = url.split("character/")[1];
        Object.values(data).map((value: any) => {
          if (value.id == id) {
            const index = item.characters.indexOf(url);
            item.characters[index] = value;
          }
        });
      });
    });

    return results;
  };

  public makeResponse = (data: IData, metaData: IMetaData) => {
    return {
      success: true,
      status: 200,
      meta: metaData,
      data: data,
    };
  };

  // First Logic --> 5.6s
  //   public getAllCharactersData = async () => {
  //     let page: number = 1;
  //     const CHARACTER_API_URL = `${process.env.CHARACTER_URL!}`;
  //     let flag = true;
  //     let data: any = [];
  //     const pagesCount = await this.fetchCharacterMeta(CHARACTER_API_URL);
  //     const promise_data: any = [];
  //     for (let i = 1; i <= pagesCount; i++) {
  //       promise_data.push(this.fetchCharactersData(CHARACTER_API_URL, i));
  //     }

  //     await Promise.all(promise_data)
  //       .then(async (response: any) => {
  //         const responseData: any = [];
  //         response.map((item: any) => {
  //           responseData.push(...item);
  //         });
  //         await data.push(...responseData);
  //       })
  //       .catch((error) => {
  //         console.log("error: ", error);
  //       });
  //     return data;
  //   };
}
