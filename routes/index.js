import { Router } from "express";
import beerRoutes from "./beer.js";

const router = Router();

router.get("/"), (req, res) => res.send("This is the api root");

router.use("/beer", beerRoutes);

export default router;