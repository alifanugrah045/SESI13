import React from "react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link to="/" className="text-decoration-none">
            <span className="navbar-brand">Alif Anugrah</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <Link to="/" className="nav-item text-decoration-none">
              <span className="nav-link">Home</span>
              </Link>
              <Link to="/CommentPage" className="nav-item text-decoration-none">
              <span className="nav-link">CommentPage</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;
