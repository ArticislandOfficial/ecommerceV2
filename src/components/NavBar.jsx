import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            Servicios de Impresion 3D ONE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            {/* Lista del menu */}
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link " aria-current="page">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    CheckOut
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Sign in/Log in
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Mi Perfil
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Lista de productos
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item">Action</a>
                    </li>
                    <li>
                      <a className="dropdown-item">Another action</a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item">Something else here</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
