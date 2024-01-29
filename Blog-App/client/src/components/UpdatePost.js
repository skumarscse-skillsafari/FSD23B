import { useState, useEffect } from "react";
import FileBase64 from "react-file-base64";
import { PostState } from "../context/PostContext";
import { useParams } from "react-router-dom";
import axios from "axios";
const UpdatePost = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://clumsy-kerchief-colt.cyclic.app/api/v1/blog/${id}`)
      .then((res) => setUpdatePost(res?.data?.data))
      .catch((error) => console.log(error));
  }, []);
  const [updatePost, setUpdatePost] = useState({
    title: "",
    description: "",
    datePublished: new Date().toISOString(),
    author: "",
    tags: "",
    image: "",
    comments: "",
    likes: 0,
  });
  const { dispatch } = PostState();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatePost);
    if (window.confirm("Are you sure to update the post?")) {
      dispatch({
        type: "UPDATE_POST",
        payload: updatePost,
      });
      window.alert("Post updated successfully");
      window.location.href = "/";
    }
  };
  return (
    <div className="container">
      <h2 className="display-3 text-center mb-4">Update Post</h2>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Enter Post title"
            className="form-control"
            value={updatePost?.title}
            onChange={(e) => {
              setUpdatePost({ ...updatePost, title: e.target.value });
            }}
          />
        </p>
        <p>
          <textarea
            name="description"
            placeholder="Enter Post description"
            className="form-control"
            value={updatePost?.description}
            onChange={(e) => {
              setUpdatePost({
                ...updatePost,
                description: e.target.value,
              });
            }}
          ></textarea>
        </p>
        <p>
          <input
            type="text"
            name="author"
            placeholder="Enter Author name"
            className="form-control"
            value={updatePost?.author}
            onChange={(e) => {
              setUpdatePost({
                ...updatePost,
                author: e.target.value,
              });
            }}
          />
        </p>
        <p>
          <input
            type="text"
            name="tags"
            placeholder="Enter tags (seperated by comma)"
            className="form-control"
            value={updatePost?.tags}
            onChange={(e) => {
              setUpdatePost({
                ...updatePost,
                tags: e.target.value.split(","),
              });
            }}
          />
        </p>
        <p>
          <FileBase64
            type="file"
            name="image"
            value={updatePost?.image}
            className="form-control"
            onDone={({ base64 }) => {
              setUpdatePost({
                ...updatePost,
                image: base64,
              });
            }}
          />
        </p>
        <p>
          <input
            type="number"
            name="likes"
            placeholder="Enter any number"
            className="form-control"
            value={updatePost?.likes}
            onChange={(e) => {
              setUpdatePost({
                ...updatePost,
                likes: +e.target.value,
              });
            }}
          />
        </p>
        <p>
          <input
            type="text"
            name="comments"
            placeholder="Enter Post comment"
            className="form-control"
            value={updatePost?.comments[0]?.text}
            onChange={(e) => {
              setUpdatePost({
                ...updatePost,
                comments: [
                  {
                    text: e.target.value,
                    author: updatePost.author,
                    date: new Date().toISOString(),
                  },
                ],
              });
            }}
          />
        </p>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>{" "}
        <button className="btn btn-danger">Clear</button>
      </form>
    </div>
  );
};

export default UpdatePost;
