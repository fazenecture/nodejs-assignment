import { Router } from "express";
import { ControllerClass } from "../controllers/index.controller";
import { getCharactersValidation } from "../validations/validation";
const router: Router = Router();

const { getCharacters } = new ControllerClass();

router.get("/get-characters", getCharactersValidation, getCharacters);

export default router;
