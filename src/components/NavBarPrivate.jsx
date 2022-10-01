import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import "../styles/styles.css";

const NavBarPrivate = () => {
  const { auth,logout } = useContext(AuthContext);

  return (
    <>
      <header>
        <nav className="navbar navbar-dark bg-dark fixed-top ">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand " aria-current="page">
              Servicios de Impresion 3D ONE
            </NavLink>
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
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  {auth.username ? `Bienvenido ${auth.username}` : "Cuenta"}
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
                    <NavLink className="nav-link" to="/checkout">
                      CheckOut
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink className="nav-link" to="/perfil">
                      Mi Perfil
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/productos">
                      Lista de productos
                    </NavLink>
                  </li>
                  <button className="btn btn-danger" onClick={logout} type="submit">
                    Cerrar Sesion
                  </button>
                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/producto">
                      Producto
                    </NavLink>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBarPrivate;
