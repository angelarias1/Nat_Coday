import imageLeft from '../../../../../public/img/7/7.4.webp';
import imageRight from '../../../../../public/img/7/7.5.webp';
import '../../../Styles/Servicios/Familiar/FAFotosS.css';

function FAFotosS() {
  return (
    <section className="fa-fotos-s">
      <div className="fa-fotos-s__container">
        <div className="fa-fotos-s__layout">
          <div className="fa-fotos-s__gallery">
            <div className="fa-fotos-s__image-block fa-fotos-s__image-block--left">
              <img
                src={imageLeft}
                alt="Sesión familiar"
                className="fa-fotos-s__image"
              />
            </div>

            <div className="fa-fotos-s__image-block fa-fotos-s__image-block--right">
              <img
                src={imageRight}
                alt="Fotografía familiar"
                className="fa-fotos-s__image"
              />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default FAFotosS;