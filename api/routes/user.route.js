import express from "express";
import { deleteUser, signout } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.delete("/delete/:userId", verifyToken, deleteUser);
router.post('/signout', signout);

export default router;
