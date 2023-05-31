import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary container"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to={`/`}
          style={{ textDecoration: "none", color: "purple" }}
        >
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={`/posts`}
                style={{ textDecoration: "none", color: "purple" }}
              >
                Posts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                to={`/add`}
                style={{ textDecoration: "none", color: "purple" }}
              >
                Add Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
