import React from 'react';
import '../Styles/Footer.css';

import footerLogo from '../../../public/img/logotipo.png';
import instagramIcon from '../../../public/img/Ig.png';
import facebookIcon from '../../../public/img/Fc.png';
import linkedinIcon from '../../../public/img/IN.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__contact">
            <span className="footer__eyebrow">CONTACTO</span>

            <h2 className="footer__title">
              TRABAJEMOS
              <br />
              JUNTOS
            </h2>

            <div className="footer__contact-info">
              <p>
                Colima 382, Col. Pozo Colorado, Roma,
                <br />
                Delegación Cuauhtémoc, C.P. 06700
                <br />
                Ciudad de México.
              </p>

              <p>+52 998 887 7885</p>

              <p>hola@natcoday.com</p>
            </div>
          </div>

          <div className="footer__form">
            <div className="footer__field">
              <span className="footer__label">NOMBRE</span>
            </div>

            <div className="footer__field">
              <span className="footer__label">TELÉFONO</span>
            </div>

            <div className="footer__field">
              <span className="footer__label">EMAIL</span>
            </div>

            <div className="footer__field">
              <span className="footer__label">TIPO DE SESIÓN</span>
            </div>

            <div className="footer__field footer__field--message">
              <span className="footer__label">MENSAJE</span>
            </div>

            <button type="button" className="footer__submit">
              <span className="footer__submit-text">Enviar</span>
              <span className="footer__submit-circle">→</span>
            </button>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__brand-row">
            <div className="footer__brand-image-wrapper">
              <img
                src={footerLogo}
                alt="Nat Coday"
                className="footer__brand-image"
              />
            </div>

            <div className="footer__ornament" aria-hidden="true">
              <span className="footer__ornament-line" />
              <span className="footer__ornament-circle" />
              <span className="footer__ornament-line" />
            </div>

            <p className="footer__tagline">TURN MOMENTS INTO MEMORIES.</p>
          </div>

          <div className="footer__meta-row">
            <nav className="footer__nav">
              <a href="#proyectos">PROYECTOS</a>
              <a href="#nosotros">NOSOTROS</a>
              <a href="#servicios">SERVICIOS</a>
              <a href="#contacto">CONTACTO</a>
            </nav>

            <p className="footer__address">
              Colima 382, Col. Pozo Colorado Roma, Delegación Cuauhtémoc C.P.
              06700, Ciudad de México
            </p>

            <div className="footer__socials">
              <a href="/" aria-label="Instagram" className="footer__social-link">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="footer__social-icon"
                />
              </a>

              <a href="/" aria-label="Facebook" className="footer__social-link">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="footer__social-icon"
                />
              </a>

              <a href="/" aria-label="LinkedIn" className="footer__social-link">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="footer__social-icon"
                />
              </a>
            </div>
          </div>

          <div className="footer__legal-row">
            <a href="/" className="footer__legal-link">
              AVISO DE PRIVACIDAD
            </a>

            <div className="footer__contact-mini">
              <span>+52 998 887 7885</span>
              <span>hola@natcoday.com</span>
            </div>

            <a href="/" className="footer__legal-link footer__legal-link--right">
              TÉRMINOS Y CONDICIONES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;