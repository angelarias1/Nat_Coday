import '../../Styles/Bio_Nosotros/Objetivo.css';
import objetivoSmall from '../../../../public/img/3/3.5.webp';
import objetivoLarge from '../../../../public/img/3/3.6.webp';

function Objetivo() {
  return (
    <section className="objetivo-section">
      <div className="objetivo-section__container">
        <div className="objetivo-section__grid">
          <div className="objetivo-section__left">
            <div className="objetivo-section__copy">
              <p className="objetivo-section__text">
                Mi objetivo final va más allá de simplemente tomar fotografías.
                Se trata de detener el tiempo y preservar emociones en cada
                imagen.
              </p>

              <p className="objetivo-section__text">
                Cada fotografía que creamos es un reflejo de la vida, una
                narrativa visual que trasciende las palabras y captura la esencia
                misma de la experiencia humana.
              </p>

              <p className="objetivo-section__text">
                Estoy profundamente comprometida a crear recuerdos que
                permanezcan en cada familia, a lo largo de las generaciones.
              </p>

              <button type="button" className="objetivo-section__button">
                Hagamos tu sesión
              </button>
            </div>

            <div className="objetivo-section__small-image-block">
              <img
                src={objetivoSmall}
                alt="Sesión editorial de embarazo"
                className="objetivo-section__small-image"
              />
            </div>
          </div>

          <div className="objetivo-section__large-image-block">
            <img
              src={objetivoLarge}
              alt="Retrato artístico de embarazo"
              className="objetivo-section__large-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objetivo;