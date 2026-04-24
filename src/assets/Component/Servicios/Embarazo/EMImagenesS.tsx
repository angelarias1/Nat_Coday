import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Embarazo/EMImagenes.css';

function EMImagenesS() {
  return (
    <section className="em-imagenes-s">
      <div className="em-imagenes-s__container">
        <div className="em-imagenes-s__layout">
          <div className="em-imagenes-s__gallery">
            <div className="em-imagenes-s__image-block em-imagenes-s__image-block--left">
              <img
                src={imageLeft}
                alt="Imagen vertical de sesión"
                className="em-imagenes-s__image"
              />
            </div>

            <div className="em-imagenes-s__image-block em-imagenes-s__image-block--right">
              <img
                src={imageRight}
                alt="Imagen horizontal de sesión"
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