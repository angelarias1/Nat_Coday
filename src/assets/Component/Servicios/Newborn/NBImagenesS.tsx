import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Newborn/NBImagenesS.css';

function NBImagenesS() {
  return (
    <section className="nb-imagenes-s">
      <div className="nb-imagenes-s__container">
        <div className="nb-imagenes-s__layout">
          <div className="nb-imagenes-s__gallery">
            <div className="nb-imagenes-s__image-block nb-imagenes-s__image-block--left">
              <img
                src={imageLeft}
                alt="Imagen vertical de sesión"
                className="nb-imagenes-s__image"
              />
            </div>

            <div className="nb-imagenes-s__image-block nb-imagenes-s__image-block--right">
              <img
                src={imageRight}
                alt="Imagen horizontal de sesión"
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