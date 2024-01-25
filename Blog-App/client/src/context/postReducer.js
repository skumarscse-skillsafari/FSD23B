import axios from "axios";

const postReducer = (state, action) => {
  // {type:..., payload:...}
  switch (action.type) {
    case "FETCH_INIT":
      //   console.log(action.payload.data);
      return action.payload.data;

    case "CREATE_POST":
      break;

    case "UPDATE_POST":
      break;

    case "DELETE_POST":
      axios
        .delete(`http://localhost:5000/api/v1/blog/${action.payload}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      return state.filter((post) => post._id !== action.payload);

    default:
    //   return state;
  }
};

export default postReducer;
