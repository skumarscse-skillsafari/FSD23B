import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Title must be atleast 5 characters"],
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Description must be atleast 5 characters"],
    },
    tags: {
      type: [String],
      required: true,
    },
    datePublished: {
      type: Date,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
      minLength: [5, "Author name must be atleast 5 characters"],
    },
    comments: {
      type: [
        {
          text: String,
          author: String,
          date: Date,
        },
      ],
      required: true,
    },
    likes: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
