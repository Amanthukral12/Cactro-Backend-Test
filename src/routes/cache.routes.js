import { Router } from "express";
import {
  addNewPair,
  deleteCache,
  getCacheByKey,
} from "../controller/cache.controller.js";

const router = Router();

router.route("/").post(addNewPair);
router.route("/:key").get(getCacheByKey).delete(deleteCache);

export default router;
