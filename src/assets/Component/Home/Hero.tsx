import React from 'react';
import '../../Styles/Home/Hero.css';

import heroImage from '../../../../public/img/1/hero.webp';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__image-wrapper">
        <img
          src={heroImage}
          alt="Hero principal"
          className="hero__image"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      <div className="hero__filter" />

      <div className="hero__content">
        <div className="hero__left">
          <span className="hero__eyebrow">EXPLORADORA DE MOMENTOS</span>

          <h1 className="hero__title">
            GUARDIÁN
            <br />
            DE MEMORIAS
            <br />
            PERDURABLES.
          </h1>

          <p className="hero__description">
            Cada clic de mi cámara es un abrazo al pasado, una chispa de amor
            propio que captura tu historia única.
          </p>

          <button type="button" className="hero__button">
            <span className="hero__button-text">Text btn</span>
            <span className="hero__button-circle">→</span>
          </button>
        </div>

        <div className="hero__right">
          <p className="hero__side-text">
            TURN MOMENTS INTO
            <br />
            MEMORIES.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;