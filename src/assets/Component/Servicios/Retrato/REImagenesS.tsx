import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Retrato/REImagenes.css';

function REImagenesS() {
  return (
    <section className="re-imagenes-s">
      <div className="re-imagenes-s__container">
        <div className="re-imagenes-s__layout">
          <div className="re-imagenes-s__gallery">
            <div className="re-imagenes-s__image-block re-imagenes-s__image-block--left">
              <img
                src={imageLeft}
                alt="Imagen vertical de sesión"
                className="re-imagenes-s__image"
              />
            </div>

            <div className="re-imagenes-s__image-block re-imagenes-s__image-block--right">
              <img
                src={imageRight}
                alt="Imagen horizontal de sesión"
                className="re-imagenes-s__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default REImagenesS;