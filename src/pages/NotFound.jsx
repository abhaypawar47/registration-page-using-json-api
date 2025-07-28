import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
    <h2 className="text-danger display-4 mb-4">404 - Page Not Found</h2>
    <p className="lead mb-3">
      Oops! The page you are looking for doesn't exist.
    </p>
    <Link to="/" className="btn btn-primary">
      Go Home
    </Link>
  </div>
);

export default NotFound;
