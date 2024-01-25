import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";
import postReducer from "./postReducer";

const Post = createContext();

const PostContext = ({ children }) => {
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/blog")
      .then((res) => {
        // console.log(res)
        dispatch({
          type: "FETCH_INIT",
          payload: res.data,
        });
      })
      .catch((error) => console.log(error));
  }, []);
  const [state, dispatch] = useReducer(postReducer, []);
  return <Post.Provider value={{ state, dispatch }}>{children}</Post.Provider>;
};

export const PostState = () => {
  return useContext(Post);
};

export default PostContext;
