import { Router } from "express";
import { addNewPair } from "../controller/cache.controller.js";

const router = Router();

router.route("/").post(addNewPair);

export default router;
