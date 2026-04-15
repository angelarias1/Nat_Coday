import '../../Styles/Home/ExpertSection.css';

import imageOne from '../../../../public/img/1/1.1.webp';
import imageTwo from '../../../../public/img/1/1.2.webp';
import imageTwoMobile from '../../../../public/img/1/1.22.webp';

function ExpertSection() {
  return (
    <section className="expert-section">
      <div className="expert-section__container">
        <h2 className="expert-section__title">
          DESCUBRE EL PODER DE
          <br />
          UNA MIRADA EXPERTA.
        </h2>

        <div className="expert-section__content">
          <div className="expert-section__info">
            <p className="expert-section__description">
              Un enfoque analítico y artístico puede capturar
              momentos que resaltan la autenticidad de tu
              proyecto creando imágenes que conectan y
              cautivan a tu audiencia de manera única.
            </p>

            <button className="expert-section__button" type="button">
              Cuéntame de tu proyecto
              <span className="expert-section__arrow">→</span>
            </button>
          </div>

          <div className="expert-section__gallery">
            <div className="expert-section__image expert-section__image--first">
              <img src={imageOne} alt="Sesión fotográfica 1" />
            </div>

            <div className="expert-section__image expert-section__image--second">
              <picture>
                <source media="(max-width: 767px)" srcSet={imageTwoMobile} />
                <img src={imageTwo} alt="Sesión fotográfica 2" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExpertSection;