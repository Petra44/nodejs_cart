import express from "express";
import { addToCart, deleteFromCart } from "../controllers/actionController.js";

const router = express.Router();

router.post("/", addToCart);
router.delete("/", deleteFromCart);

export default router;
