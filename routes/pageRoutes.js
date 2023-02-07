import express from "express";
import { indexPage, cartPage } from "../controllers/pageController.js";

const router = express.Router();

router.get("/", indexPage);

router.get("/cart", cartPage);

export default router;
