import express from "express";
import { createProduct, getAllProducts } from "../controllers/product.js";
import upload from "../config/multer.js";
// import { verifyTokenMiddleware } from "../middlewares/verifyToken.js";

const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(
    upload.fields([{ name: "image", maxCount: 1 }, { name: "images" }]),
    createProduct
  );

export default router;
