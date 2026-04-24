import projectImage from '../../../../public/img/9/9.6.webp';
import '../../Styles/Proyecto/Imagen3.css';

function Imagen3() {
  return (
    <section className="imagen3">
      <div className="imagen3__container">
        <div className="imagen3__layout">
          <div className="imagen3__image-block">
            <img
              src={projectImage}
              alt="Imagen del proyecto"
              className="imagen3__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Imagen3;