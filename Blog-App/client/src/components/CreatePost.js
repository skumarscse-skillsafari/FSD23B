import { useState } from "react";
import FileBase64 from "react-file-base64";
import { PostState } from "../context/PostContext";
const CreatePost = () => {
  const [createPost, setCreatePost] = useState({
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
    // console.log(createPost);
    dispatch({
      type: "CREATE_POST",
      payload: createPost,
    });
  };
  return (
    <div className="container">
      <h2 className="display-3 text-center mb-4">Create Post</h2>
      <form>
        <p>
          <input
            type="text"
            name="title"
            placeholder="Enter Post title"
            className="form-control"
            value={createPost.title}
            onChange={(e) => {
              setCreatePost({ ...createPost, title: e.target.value });
            }}
          />
        </p>
        <p>
          <textarea
            name="description"
            placeholder="Enter Post description"
            className="form-control"
            value={createPost.description}
            onChange={(e) => {
              setCreatePost({
                ...createPost,
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
            value={createPost.author}
            onChange={(e) => {
              setCreatePost({
                ...createPost,
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
            value={createPost.tags}
            onChange={(e) => {
              setCreatePost({
                ...createPost,
                tags: e.target.value.split(","),
              });
            }}
          />
        </p>
        <p>
          <FileBase64
            type="file"
            name="image"
            value={createPost.image}
            className="form-control"
            onDone={({ base64 }) => {
              setCreatePost({
                ...createPost,
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
            value={createPost.likes}
            onChange={(e) => {
              setCreatePost({
                ...createPost,
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
            // value={createPost.comments}
            onChange={(e) => {
              setCreatePost({
                ...createPost,
                comments: [
                  {
                    text: e.target.value,
                    author: createPost.author,
                    date: new Date().toISOString(),
                  },
                ],
              });
            }}
          />
        </p>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Create
        </button>{" "}
        <button className="btn btn-danger">Clear</button>
      </form>
    </div>
  );
};

export default CreatePost;
