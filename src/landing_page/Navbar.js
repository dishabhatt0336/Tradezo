import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg m-0 p-0 border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-0">
        <a className="navbar-brand" href="/">
          <img
            src="media/images/tradezoLogo.png"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </a>
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
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-5" aria-current="page" href="/signup">
                  Signup
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5" href="/pricing">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active fs-5" href="/support">
                  Support
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
