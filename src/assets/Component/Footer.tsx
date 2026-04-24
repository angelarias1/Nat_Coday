import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

import footerLogo from '../../../public/img/logotipo.png';
import instagramIcon from '../../../public/img/Ig.png';
import facebookIcon from '../../../public/img/Fc.png';
import linkedinIcon from '../../../public/img/IN.png';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    email: '',
    tipoSesion: '',
    mensaje: '',
  });

  const emailAddress = 'hola@natcoday.com';
  const whatsappNumber = '529988877885';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddress);
    } catch (error) {
      console.error('No se pudo copiar el correo:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

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

              <p>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="footer__plain-link"
                >
                  +52 998 887 7885
                </a>
              </p>

              <p>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="footer__plain-button"
                >
                  hola@natcoday.com
                </button>
              </p>
            </div>
          </div>

          <form className="footer__form" onSubmit={handleSubmit}>
            <div className="footer__field">
              <label htmlFor="nombre" className="footer__label">
                NOMBRE
              </label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                value={formData.nombre}
                onChange={handleChange}
                className="footer__input"
              />
            </div>

            <div className="footer__field">
              <label htmlFor="telefono" className="footer__label">
                TELÉFONO
              </label>
              <input
                id="telefono"
                name="telefono"
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                className="footer__input"
              />
            </div>

            <div className="footer__field">
              <label htmlFor="email" className="footer__label">
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="footer__input"
              />
            </div>

            <div className="footer__field">
              <label htmlFor="tipoSesion" className="footer__label">
                TIPO DE SESIÓN
              </label>
              <input
                id="tipoSesion"
                name="tipoSesion"
                type="text"
                value={formData.tipoSesion}
                onChange={handleChange}
                className="footer__input"
              />
            </div>

            <div className="footer__field footer__field--message">
              <label htmlFor="mensaje" className="footer__label">
                MENSAJE
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="footer__textarea"
              />
            </div>

            <button type="submit" className="footer__submit">
              <span className="footer__submit-text">Enviar</span>
              <span className="footer__submit-circle">→</span>
            </button>
          </form>
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
              <Link to="/proyectos">PROYECTOS</Link>
              <Link to="/bio">NOSOTROS</Link>
              <a href="#servicios">SERVICIOS</a>
              <a href="#contacto">CONTACTO</a>
            </nav>

            <p className="footer__address">
              Colima 382, Col. Pozo Colorado Roma, Delegación Cuauhtémoc C.P.
              06700, Ciudad de México
            </p>

            <div className="footer__socials">
              <a
                href="https://www.instagram.com/natcodayphotography/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="footer__social-link"
              >
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="footer__social-icon"
                />
              </a>

              <a
                href="https://www.facebook.com/natcodayphotography/?ref=NONE_xav_ig_profile_page_web#"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="footer__social-link"
              >
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
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="footer__plain-link"
              >
                +52 998 887 7885
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="footer__plain-button"
              >
                hola@natcoday.com
              </button>
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