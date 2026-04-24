import { Link } from 'react-router-dom';
import imagePrev from '../../../../public/img/9/9.7.webp';
import imageNext from '../../../../public/img/9/9.8.webp';
import '../../Styles/Proyecto/Imagenes2.css';

function Imagenes2() {
  return (
    <section className="imagenes2">
      <div className="imagenes2__container">
        <div className="imagenes2__layout">
          <Link to="/proyecto" className="imagenes2__card">
            <div className="imagenes2__meta">
              <span className="imagenes2__arrow">←</span>
              <span className="imagenes2__label">PROYECTO ANTERIOR</span>
            </div>

            <h3 className="imagenes2__title">
              Entre objetivos y emociones
            </h3>

            <div className="imagenes2__image-block">
              <img
                src={imagePrev}
                alt="Proyecto anterior"
                className="imagenes2__image"
              />
            </div>
          </Link>

          <Link to="/proyecto" className="imagenes2__card">
            <div className="imagenes2__meta">
              <span className="imagenes2__label">SIGUIENTE PROYECTO</span>
              <span className="imagenes2__arrow">→</span>
            </div>

            <h3 className="imagenes2__title">
              Entre objetivos y emociones
            </h3>

            <div className="imagenes2__image-block">
              <img
                src={imageNext}
                alt="Siguiente proyecto"
                className="imagenes2__image"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Imagenes2;