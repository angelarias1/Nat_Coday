import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Newborn/NBImagenesS.css';

function NBImagenesS() {
  return (
    <section className="nb-imagenes-s">
      <div className="nb-imagenes-s__container">
        <div className="nb-imagenes-s__layout">
          <div className="nb-imagenes-s__heading">
            <h2 className="nb-imagenes-s__title">
              CAPTURANDO LA
              <br />
              ESENCIA PURA
            </h2>
          </div>

          <div className="nb-imagenes-s__top">
            <div className="nb-imagenes-s__description">
              <p>
                El momento ideal para realizar esta sesión a tu bebé es entre la
                primer y segunda semana de nacido (entre el día 7 al 13 ideal)
                esto debido a que aún es muy flexible, duerme más y es más
                sencilla su manipulación sin alterar su sueño.
              </p>
            </div>

            <button type="button" className="nb-imagenes-s__button">
              Ver Proyecto
            </button>
          </div>

          <div className="nb-imagenes-s__gallery">
            <div className="nb-imagenes-s__image-block nb-imagenes-s__image-block--left">
              <img
                src={imageLeft}
                alt="Recién nacido envuelto descansando junto a un pequeño muñeco"
                className="nb-imagenes-s__image"
              />
            </div>

            <div className="nb-imagenes-s__image-block nb-imagenes-s__image-block--right">
              <img
                src={imageRight}
                alt="Recién nacido descansando de lado sobre fondo claro"
                className="nb-imagenes-s__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NBImagenesS;