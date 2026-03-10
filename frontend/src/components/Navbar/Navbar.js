import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("");

  const token = localStorage.getItem("token");

  const handleToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = (id) => {
    setActiveNavItem(id);
    setNavOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const navItems = [
    { id: "", label: "Home" },
    { id: "blog", label: "Blog" },
    { id: "services", label: "Services" },
    { id: "about", label: "About Us" },
  ];

  return (
    <nav className="navbar navbar-expand-lg p-3">
      <div className="container">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="https://res.cloudinary.com/dpcfyn3si/image/upload/v1707019334/fadh3gidswa9iapkidkf.png"
            width="120"
            alt="logo"
          />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${
                  activeNavItem === item.id ? "active" : ""
                }`}
              >
                <Link
                  className="nav-link"
                  to={`/${item.id}`}
                  onClick={() => handleNavLinkClick(item.id)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Buttons */}
          <div className="d-flex align-items-center ms-3">

            {!token ? (
              <>
                <Link className="btn btn-outline-primary me-2" to="/login">
                  Login
                </Link>

                <Link className="btn btn-outline-success me-2" to="/register">
                  Register
                </Link>
              </>
            ) : (
              <button className="btn btn-danger me-2" onClick={handleLogout}>
                Logout
              </button>
            )}

            <Link className="btn btn-primary" to="/contactus">
              Contact Us
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;