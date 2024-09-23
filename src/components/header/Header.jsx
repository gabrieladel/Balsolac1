import "./Header.css";
import imgLogo from "../../assets/images/Logo.png";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-white bg-dark text-white fixed-top">
        <div className="container">
          <img src={imgLogo} className="header_logo" width="30" height="24" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")`
      }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 bg-dark text-white">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#inicio">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#producto">
                  Producto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#quienes">
                ¿Quienes somos?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contacto">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#emprende">
                  Emprende con Nosotros
                </a>
              </li>
              
            </ul>
          </div>
         {/*  <li className="nav-item">
                <a className="nav-link" href="#emprende">
                  Carrito
                </a>
              </li> */}
        </div>
      </nav>
    
    </>
  );
}

export default Header;
