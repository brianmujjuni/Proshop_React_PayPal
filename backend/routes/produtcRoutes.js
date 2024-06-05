import express from "express";
import Product from "../models/productModel.js";
import {
  getProductById,
  getProducts,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authmiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/:id").get(getProductById);

export default router;
