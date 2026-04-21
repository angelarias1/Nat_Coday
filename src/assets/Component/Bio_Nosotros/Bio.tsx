import '../../Styles/Bio_Nosotros/Bio.css';
import bioImage from '../../../../public/img/3/3.1.webp';

function Bio() {
  return (
    <section className="bio-section">
      <div className="bio-section__container">
        <div className="bio-section__grid">
          <div className="bio-section__left">
            <div className="bio-section__copy">
              <span className="bio-section__eyebrow">BIO</span>

              <h1 className="bio-section__title">
                MÁS DE 12 AÑOS
                <br />
                CAPTURANDO MOMENTOS
                <br />
                Y MEMORIAS.
              </h1>

              <p className="bio-section__text">
                Cada clic de mi cámara es un abrazo al pasado, una chispa de amor
                propio que captura tu historia única.
              </p>

              <button type="button" className="bio-section__button">
                Cuéntame de tu proyecto
                <span className="bio-section__button-arrow" aria-hidden="true">
                  →
                </span>
              </button>
            </div>

            <div className="bio-section__brand">NAT CODAY</div>
          </div>

          <div className="bio-section__right">
            <img
              src={bioImage}
              alt="Retrato principal de bio"
              className="bio-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bio;