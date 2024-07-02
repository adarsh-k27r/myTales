import express from "express";
import { deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.delete("/delete/:userId", verifyToken, deleteUser);

export default router;
