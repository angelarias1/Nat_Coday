import imageLeft from '../../../../../public/img/5/5.4.webp';
import imageRight from '../../../../../public/img/5/5.5.webp';
import '../../../Styles/Servicios/Embarazo/EMFotosS.css';

function EMFotosS() {
  return (
    <section className="em-fotos-s">
      <div className="em-fotos-s__container">
        <div className="em-fotos-s__layout">
          <div className="em-fotos-s__gallery">
            <div className="em-fotos-s__image-block em-fotos-s__image-block--left">
              <img
                src={imageLeft}
                alt="Sesión de embarazo"
                className="em-fotos-s__image"
              />
            </div>

            <div className="em-fotos-s__image-block em-fotos-s__image-block--right">
              <img
                src={imageRight}
                alt="Fotografía de embarazo"
                className="em-fotos-s__image"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default EMFotosS;