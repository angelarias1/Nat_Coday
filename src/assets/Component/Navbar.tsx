import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Home/Navbar.css';

import logoImage from '../../../public/img/1/logo-navbar.png';
import menuIcon from '../../../public/img/1/menu.png';
import closeIcon from '../../../public/img/1/close.png';
import instagramIcon from '../../../public/img/1/ig.png';
import facebookIcon from '../../../public/img/1/face.png';
import linkedinIcon from '../../../public/img/1/in.png';
import ornamentImage from '../../../public/img/1/1.12.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__brand" onClick={handleCloseMenu}>
            <img
              src={logoImage}
              alt="Nat Coday"
              className="navbar__logo"
            />
          </Link>

          <p className="navbar__tagline">TURN MOMENTS INTO MEMORIES.</p>

          <button
            type="button"
            className="navbar__menu-button"
            onClick={handleToggleMenu}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              alt=""
              aria-hidden="true"
              className="navbar__menu-icon"
            />
          </button>
        </div>
      </header>

      <div className={`navbar-overlay ${isOpen ? 'navbar-overlay--open' : ''}`}>
        <div className="navbar-overlay__container">
          <div className="navbar-overlay__top">
            <div className="navbar-overlay__logo-wrapper">
              <img
                src={logoImage}
                alt="Nat Coday"
                className="navbar-overlay__logo"
              />
            </div>

            <p className="navbar-overlay__tagline">TURN MOMENTS INTO MEMORIES.</p>

            <button
              type="button"
              className="navbar-overlay__close"
              onClick={handleCloseMenu}
              aria-label="Cerrar menú"
            >
              <img
                src={closeIcon}
                alt=""
                aria-hidden="true"
                className="navbar-overlay__close-icon"
              />
            </button>
          </div>

          <div className="navbar-overlay__middle">
            <nav className="navbar-overlay__nav">
              <Link to="/" onClick={handleCloseMenu}>HOME</Link>
              <Link to="/proyectos" onClick={handleCloseMenu}>PROYECTOS</Link>
              <Link to="/bio" onClick={handleCloseMenu}>BIO</Link>
              <Link to="/servicios" onClick={handleCloseMenu}>SERVICIOS</Link>
              <Link to="/contacto" onClick={handleCloseMenu}>CONTACTO</Link>
            </nav>

            <div className="navbar-overlay__info">
              <p>
                Colima 392, 26a. Piso Colonia Roma,
                <br />
                Delegación Cuauhtémoc C.P. 06700,
                <br />
                Ciudad de México.
              </p>

              <p>tel. +52 998 87 7665</p>

              <p>hola@natcoday.com</p>

              <div className="navbar-overlay__socials">
                <a href="/" aria-label="Instagram">
                  <img src={instagramIcon} alt="Instagram" />
                </a>
                <a href="/" aria-label="Facebook">
                  <img src={facebookIcon} alt="Facebook" />
                </a>
                <a href="/" aria-label="LinkedIn">
                  <img src={linkedinIcon} alt="LinkedIn" />
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-overlay__bottom">
            <div className="navbar-overlay__legal">
              <a href="/">AVISO DE PRIVACIDAD</a>
              <a href="/">TÉRMINOS Y CONDICIONES</a>
            </div>

            <img
              src={ornamentImage}
              alt=""
              aria-hidden="true"
              className="navbar-overlay__ornament"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;