import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Sitter/SIImagenes.css';

function SIImagenesS() {
  return (
    <section className="si-imagenes-s">
      <div className="si-imagenes-s__container">
        <div className="si-imagenes-s__layout">
          <div className="si-imagenes-s__heading">
            <h2 className="si-imagenes-s__title">
              CAPTURANDO LA
              <br />
              ESENCIA PURA
            </h2>
          </div>

          <div className="si-imagenes-s__top">
            <div className="si-imagenes-s__description">
              <p>
                El momento ideal para realizar esta sesión a tu bebé es entre la
                primer y segunda semana de nacido (entre el día 7 al 13 ideal)
                esto debido a que aún es muy flexible, duerme más y es más
                sencilla su manipulación sin alterar su sueño.
              </p>
            </div>

            <button type="button" className="si-imagenes-s__button">
              Ver Proyecto
            </button>
          </div>

          <div className="si-imagenes-s__gallery">
            <div className="si-imagenes-s__image-block si-imagenes-s__image-block--left">
              <img src={imageLeft} alt="" className="si-imagenes-s__image" />
            </div>

            <div className="si-imagenes-s__image-block si-imagenes-s__image-block--right">
              <img src={imageRight} alt="" className="si-imagenes-s__image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SIImagenesS;