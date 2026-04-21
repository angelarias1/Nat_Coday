import '../../Styles/Bio_Nosotros/Imagenes.css';
import imagenUno from '../../../../public/img/3/3.3.webp';
import imagenDos from '../../../../public/img/3/3.4.webp';

function Imagenes() {
  return (
    <section className="imagenes-section">
      <div className="imagenes-section__container">
        <div className="imagenes-section__grid">
          <div className="imagenes-section__image-block imagenes-section__image-block--narrow">
            <img
              src={imagenUno}
              alt="Sesión de maternidad"
              className="imagenes-section__image"
            />
          </div>

          <div className="imagenes-section__image-block imagenes-section__image-block--wide">
            <img
              src={imagenDos}
              alt="Sesión de pareja"
              className="imagenes-section__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagenes;