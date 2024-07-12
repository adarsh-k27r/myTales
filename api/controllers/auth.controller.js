import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

// Route 1: SignUp API
export const signup = async (req, res, next) => {
  const { name, username, email, password } = req.body;

  if (
    !name ||
    !username ||
    !email ||
    !password ||
    name === "" ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required."));
  }

  // Result of express-validator's validation.
  const eXresult = validationResult(req);
  if (!eXresult.isEmpty()) {
    return res.json({ errors: eXresult.array() });
  }

  try {
    const validUser = await User.findOne({ email });
    if (validUser) {
      return next(errorHandler(400, "User already exists."));
    }

    const salt = bcryptjs.genSaltSync(10);
    const hashedPassword = bcryptjs.hashSync(password, salt);

    const newUser = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const { password: pass, ...rest } = newUser._doc;

    const token = jwt.sign({ id: newUser._id, author: newUser.name }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// Route 2: SignIn API
export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required."));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Incorrect credentials"));
    }

    const { password: pass, ...rest } = validUser._doc;

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Incorrect credentials."));
    }

    const token = jwt.sign({ id: validUser._id, author: validUser.name }, process.env.JWT_SECRET);
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

// Route 3: Firebase O-Auth API

export const google = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      const token = jwt.sign({ id: user._id, author: user.name }, process.env.JWT_SECRET);
      const { password, ...rest } = user._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    } else {
      const generatedPassword =
        Math.random().toString(36).slice(-8) +
        Math.random().toString(36).slice(-8);
      const salt = bcryptjs.genSaltSync(10);
      const hashedPassword = bcryptjs.hashSync(generatedPassword, salt);

      const newUser = new User({
        name,
        username: name.toLowerCase().split(" ").join("") + Math.random().toString(9).slice(-4),
        email,
        password: hashedPassword,
      });

      await newUser.save();

      const token = jwt.sign({ id: newUser._id, author: newUser.name }, process.env.JWT_SECRET);
      const { password, ...rest } = newUser._doc;
      res
        .status(200)
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .json(rest);
    }
  } catch (error) {
    next(error);
  }
};
