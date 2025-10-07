import React from "react";

const TodoNavbar = () => {
  return (

    <nav className=" navbar navbar-expand-lg navbar-dark bg-primary" style={{cursor:'pointer'}}>
      <div className="container-fluid">
        {/* Brand / Logo */}
        <a className="navbar-brand fw-bold" >
          📝 Todo App
        </a>

        {/* Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                Tasks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  >
                Add Todo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TodoNavbar;
