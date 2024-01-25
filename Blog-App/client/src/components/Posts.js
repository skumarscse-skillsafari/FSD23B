import { PostState } from "../context/PostContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Posts = () => {
  //   console.log(PostState());
  const { state, dispatch } = PostState();
  console.log(state);
  return (
    <div className="container">
      <h2 className="display-4 text-center mb-4">Posts Component</h2>
      <div className="row">
        {state.map((post) => (
          <div className="col col-sm-6 col-lg-4" key={post._id}>
            <Card style={{ width: "25rem" }} className="mb-4">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Card.Text>{post.tags.join(", ")}</Card.Text>
                <Card.Text>{post.likes}</Card.Text>
                <Button variant="primary">Know more</Button>{" "}
                <Button variant="warning">Edit</Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => {
                    if (window.confirm("Are you sure to delete the post?")) {
                      dispatch({
                        type: "DELETE_POST",
                        payload: post._id,
                      });
                      //   alert("Post deleted successfully");
                    }
                  }}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
