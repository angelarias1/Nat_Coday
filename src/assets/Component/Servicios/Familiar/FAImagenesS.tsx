import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Familiar/FAImagenes.css';

function FAImagenesS() {
  return (
    <section className="fa-imagenes-s">
      <div className="fa-imagenes-s__container">
        <div className="fa-imagenes-s__layout">
          <div className="fa-imagenes-s__gallery">
            <div className="fa-imagenes-s__image-block fa-imagenes-s__image-block--left">
              <img
                src={imageLeft}
                alt="Imagen vertical de sesión"
                className="fa-imagenes-s__image"
              />
            </div>

            <div className="fa-imagenes-s__image-block fa-imagenes-s__image-block--right">
              <img
                src={imageRight}
                alt="Imagen horizontal de sesión"
                className="fa-imagenes-s__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAImagenesS;