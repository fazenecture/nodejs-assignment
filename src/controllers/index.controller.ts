import { DataService } from "../services/data.service";
import { Request, Response } from "express";
import { Helpers } from "../helpers/index.helpers";
import { IControllerInterface } from "../interfaces/controller.interface";
import { IMetaData } from "../interfaces/helpers.interface";

export class ControllerClass extends Helpers {
  public getCharacters = async (req: Request, res: Response) => {
    try {
      const { page } = req.query;
      const results = await this.getAllCharactersData(parseInt(<string>page));
      const metaData: IMetaData = {
        count: results.length,
        page: parseInt(<string>page),
      };
      console.log("results: ", results);
      res.status(200).send(this.makeResponse(results, metaData));
    } catch (err) {
      res.status(400).send(err);
    }
  };
}
