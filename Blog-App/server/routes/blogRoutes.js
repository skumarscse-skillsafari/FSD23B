import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from "../controllers/blogController.js";
const router = express.Router();
// GET => getAllBlogs
// http://localhost:5000/api/v1/blog
router.get("/", getAllBlogs);

// GET => getBlogById
// http://localhost:5000/api/v1/blog/:id
router.get("/:id", getBlogById);

// POST => createBlog
// http://localhost:5000/api/v1/blog
router.post("/", createBlog);

// PUT => updateBlogById
// http://localhost:5000/api/v1/blog/:id
router.put("/:id", updateBlogById);

// DELETE => deleteBlogById
// http://localhost:5000/api/v1/blog/:id
router.delete("/:id", deleteBlogById);

export default router;
