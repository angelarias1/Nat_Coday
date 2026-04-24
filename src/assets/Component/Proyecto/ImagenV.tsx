import projectImage from '../../../../public/img/9/9.4.webp';
import '../../Styles/Proyecto/ImagenV.css';

function ImagenV() {
  return (
    <section className="imagen-v">
      <div className="imagen-v__container">
        <div className="imagen-v__layout">
          <div className="imagen-v__image-block">
            <img
              src={projectImage}
              alt="Imagen vertical del proyecto"
              className="imagen-v__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImagenV;