import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Embarazo/EMImagenes.css';

function EMImagenesS() {
  return (
    <section className="em-imagenes-s">
      <div className="em-imagenes-s__container">
        <div className="em-imagenes-s__layout">
          <div className="em-imagenes-s__heading">
            <h2 className="em-imagenes-s__title">
              CAPTURANDO LA
              <br />
              ESENCIA PURA
            </h2>
          </div>

          <div className="em-imagenes-s__top">
            <div className="em-imagenes-s__description">
              <p>
                El momento ideal para realizar esta sesión a tu bebé es entre la
                primer y segunda semana de nacido (entre el día 7 al 13 ideal)
                esto debido a que aún es muy flexible, duerme más y es más
                sencilla su manipulación sin alterar su sueño.
              </p>
            </div>

            <button type="button" className="em-imagenes-s__button">
              Ver Proyecto
            </button>
          </div>

          <div className="em-imagenes-s__gallery">
            <div className="em-imagenes-s__image-block em-imagenes-s__image-block--left">
              <img
                src={imageLeft}
                alt="Recién nacido envuelto descansando junto a un pequeño muñeco"
                className="em-imagenes-s__image"
              />
            </div>

            <div className="em-imagenes-s__image-block em-imagenes-s__image-block--right">
              <img
                src={imageRight}
                alt="Recién nacido descansando de lado sobre fondo claro"
                className="em-imagenes-s__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EMImagenesS;