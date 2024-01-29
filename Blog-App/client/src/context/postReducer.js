import axios from "axios";

const postReducer = (state, action) => {
  // {type:..., payload:...}
  switch (action.type) {
    case "FETCH_INIT":
      //   console.log(action.payload.data);
      return action.payload.data;

    case "CREATE_POST":
      axios
        .post(
          "https://clumsy-kerchief-colt.cyclic.app/api/v1/blog",
          action.payload
        )
        .then((res) => console.log(res.data))
        .catch((error) => console.log(error));

    case "UPDATE_POST":
      axios
        .put(
          `https://clumsy-kerchief-colt.cyclic.app/api/v1/blog/${action.payload._id}`,
          action.payload
        )
        .then((res) => console.log(res.data.message))
        .catch((error) => console.log(error));
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case "DELETE_POST":
      axios
        .delete(
          `https://clumsy-kerchief-colt.cyclic.app/api/v1/blog/${action.payload}`
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      return state.filter((post) => post._id !== action.payload);

    default:
    //   return state;
  }
};

export default postReducer;
