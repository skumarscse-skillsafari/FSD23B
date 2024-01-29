import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Post = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://clumsy-kerchief-colt.cyclic.app/api/v1/blog/${id}`)
      .then((res) => setPost(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  const [post, setPost] = useState();
  console.log(post);
  return (
    <div className="container">
      <h2 className="display-4 text-center my-4">Post</h2>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <img src={post?.image} alt="blog-image" />
            </div>
            <div className="card-body">
              <h5 className="card-text">{post?.title}</h5>
              <p className="card-text">{post?.description}</p>
              <p className="card-text">Tags: {post?.tags.join(", ")}</p>
              <p className="card-text">Author: {post?.author}</p>
              <p className="card-text">
                Date Published:{" "}
                {new Date(post?.datePublished).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2 className="display-5 text-center ">Comments</h2>
          {post?.comments.map((comment) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{comment.text}</h5>
                <p className="card-text">{comment.author}</p>
                <p className="card-text">
                  Commented Date: {new Date(comment.date).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <textarea className="form-control mb-3"></textarea>
              <button className="btn btn-primary">Comment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
