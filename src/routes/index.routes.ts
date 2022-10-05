import { Router } from "express";
import { ControllerClass } from "../controllers/index.controller";
const router = Router();

const { getCharacters } = new ControllerClass();

router.get("/get-characters", getCharacters);

export default router;
