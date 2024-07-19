import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";
import Post from "../models/post.model.js";

// Route 1: Delete User Route (Authorisation required)

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(errorHandler(403, "You are not allowed to delete this user."));
  }

  try {
    // Delete all posts by the user
    await Post.deleteMany({ userId: req.params.userId });

    // Delete the user
    await User.findByIdAndDelete(req.params.userId);

    res
      .clearCookie("access_token")
      .status(200)
      .json("User and their posts have been deleted");
  } catch (error) {
    next(error);
  }
};

// Route 2: Signout Route

export const signout = (req, res, next) => {
  try {
    res
      .clearCookie("access_token")
      .status(200)
      .json("User has been signed out");
  } catch (error) {
    next(error);
  }
};
