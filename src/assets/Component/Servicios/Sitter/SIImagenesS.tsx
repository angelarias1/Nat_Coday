import imageLeft from '../../../../../public/img/4/4.2.webp';
import imageRight from '../../../../../public/img/4/4.3.webp';
import '../../../Styles/Servicios/Sitter/SIImagenes.css';

function SIImagenesS() {
  return (
    <section className="si-imagenes-s">
      <div className="si-imagenes-s__container">
        <div className="si-imagenes-s__layout">
          <div className="si-imagenes-s__gallery">
            <div className="si-imagenes-s__image-block si-imagenes-s__image-block--left">
              <img
                src={imageLeft}
                alt="Imagen vertical de sesión"
                className="si-imagenes-s__image"
              />
            </div>

            <div className="si-imagenes-s__image-block si-imagenes-s__image-block--right">
              <img
                src={imageRight}
                alt="Imagen horizontal de sesión"
                className="si-imagenes-s__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SIImagenesS;