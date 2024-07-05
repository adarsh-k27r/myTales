import { errorHandler } from "../utils/error.js";
import Post from "../models/post.model.js";

// Route 1: Create a Post API Route

export const create = async (req, res, next) => {
  if (!req.body.title || !req.body.content) {
    return next(errorHandler(400, "Please provide all the required fields"));
  }

  // slugs are used as a post url for better SEO results instead of post-id.
  const slug = req.body.title
    .split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const newPost = new Post({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    next(error);
  }
};


// Route 2: Get all the Public Posts.

export const getposts= async(req, res, next)=>{
  
}
