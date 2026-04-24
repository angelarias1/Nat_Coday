import imageLeft from '../../../../../public/img/8/8.4.webp';
import imageRight from '../../../../../public/img/8/8.5.webp';
import '../../../Styles/Servicios/Sitter/SIFotosS.css';

function SIFotosS() {
  return (
    <section className="si-fotos-s">
      <div className="si-fotos-s__container">
        <div className="si-fotos-s__layout">
          <div className="si-fotos-s__gallery">
            <div className="si-fotos-s__image-block si-fotos-s__image-block--left">
              <img
                src={imageLeft}
                alt="Sesión sitter"
                className="si-fotos-s__image"
              />
            </div>

            <div className="si-fotos-s__image-block si-fotos-s__image-block--right">
              <img
                src={imageRight}
                alt="Fotografía sitter"
                className="si-fotos-s__image"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default SIFotosS;