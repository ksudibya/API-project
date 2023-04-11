import {Router} from "express";
import * as controllers from "../controllers/beer_controllers.js";

const router = Router();

router.get("/", controllers.getBeers);
router.get("/:id", controllers.getBeer);
router.post("/", controllers.createBeer);
router.put("/:id", controllers.updateBeer);
router.delete("/:id", controllers.deleteBeer);

export default router;