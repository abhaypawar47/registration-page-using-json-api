import { Link } from "react-router-dom";

const Home = () => (
  <div
    className="container mt-5 text-center"
    style={{
      backgroundImage: "url('/homebg.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100%",
      paddingTop: "100px",
      paddingBottom: "100px",
      borderRadius: "20px",
    }}
  >
    <div className="card p-4 shadow-lg bg-light bg-opacity-75">
      <h1 className="mb-4">Welcome to User App</h1>
      <nav>
        <Link to="/register" className="btn btn-primary mx-2">
          Register
        </Link>
        <Link to="/users" className="btn btn-outline-secondary mx-2">
          Users
        </Link>
      </nav>
    </div>
  </div>
);

export default Home;
