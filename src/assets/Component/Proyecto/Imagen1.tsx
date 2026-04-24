import projectImage from '../../../../public/img/9/9.1.webp';
import '../../Styles/Proyecto/Imagen1.css';

function Imagen1() {
  return (
    <section className="imagen1">
      <div className="imagen1__container">
        <div className="imagen1__layout">
          <div className="imagen1__image-block">
            <img
              src={projectImage}
              alt="Imagen del proyecto"
              className="imagen1__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagen1;