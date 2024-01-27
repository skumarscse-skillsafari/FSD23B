import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Post = () => {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/blog/${id}`)
      .then((res) => setPost(res.data.data))
      .catch((error) => console.log(error));
  }, []);
  const [post, setPost] = useState();
  console.log(post);
  return (
    <div className="container">
      <h2 className="display-4 text-center my-4">Post</h2>
    </div>
  );
};

export default Post;
