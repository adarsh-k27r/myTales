import express from "express";
import { google, signin, signup } from "../controllers/auth.controller.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/signup",
  [
    body("email", "Invalid email").isEmail(),
    body("password", "Password shall be at least 8 chars long").isLength({
      min: 8,
    }),
  ],
  signup
);

router.post("/signin", signin);
router.post("/google", google);

export default router;
