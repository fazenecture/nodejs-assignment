import { NextFunction, Response, Request } from "express";
import Joi from "joi";

export const getCharactersValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const schema = Joi.object().keys({
      page: Joi.number().allow(null),
    });

    req.query = await schema.validateAsync(req.query);
    next();
  } catch (err) {
    res.status(400).send(err);
  }
};
