import projectImage from '../../../../public/img/9/9.5.webp';
import '../../Styles/Proyecto/Imagen2.css';

function Imagen2() {
  return (
    <section className="imagen2">
      <div className="imagen2__container">
        <div className="imagen2__layout">
          <div className="imagen2__image-block">
            <img
              src={projectImage}
              alt="Imagen del proyecto"
              className="imagen2__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagen2;