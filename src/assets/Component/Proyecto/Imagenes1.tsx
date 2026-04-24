import imageLeft from '../../../../public/img/9/9.2.webp';
import imageRight from '../../../../public/img/9/9.3.webp';
import '../../Styles/Proyecto/Imagenes1.css';

function Imagenes1() {
  return (
    <section className="imagenes1">
      <div className="imagenes1__container">
        <div className="imagenes1__layout">
          <div className="imagenes1__gallery">
            <div className="imagenes1__image-block imagenes1__image-block--left">
              <img
                src={imageLeft}
                alt="Imagen vertical del proyecto"
                className="imagenes1__image"
              />
            </div>

            <div className="imagenes1__image-block imagenes1__image-block--right">
              <img
                src={imageRight}
                alt="Imagen horizontal del proyecto"
                className="imagenes1__image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagenes1;