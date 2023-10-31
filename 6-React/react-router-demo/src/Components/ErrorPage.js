import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="error">
      <h2>Page does not exists</h2>
      <Link to="/">Click here to go home page</Link>
    </div>
  );
};

export default ErrorPage;
