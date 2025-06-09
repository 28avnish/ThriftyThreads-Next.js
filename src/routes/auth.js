import express from "express";
import { newUser } from "../controllers/user.js";
// import { verifyTokenMiddleware } from "../middlewares/verifyToken.js";

const router = express.Router();

router.route("/").post(newUser);

export default router;
