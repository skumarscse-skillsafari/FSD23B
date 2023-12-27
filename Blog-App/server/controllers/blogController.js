import Blog from "../models/blogModel.js";
// createBlog
export const createBlog = async (req, res) => {
  try {
    const newBlog = await new Blog(req.body).save();
    res.status(201).json({ success: true, data: newBlog });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find();
    res.status(200).json({ success: true, data: allBlogs });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogById = await Blog.findById(id);
    res.status(200).json({ success: true, data: blogById });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const updateBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body);
    res.status(200).json({
      success: true,
      message: `blog with id: ${updatedBlog._id} is updated`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};

export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBlog = await Blog.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: `blog with id: ${deletedBlog._id} is deleted`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
};
