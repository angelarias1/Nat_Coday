import imageLeft from '../../../../../public/img/4/4.4.webp';
import imageRight from '../../../../../public/img/4/4.5.webp';
import '../../../Styles/Servicios/Newborn/NBFotosS.css';

function NBFotosS() {
  return (
    <section className="nb-fotos-s">
      <div className="nb-fotos-s__container">
        <div className="nb-fotos-s__layout">
          <div className="nb-fotos-s__gallery">
            <div className="nb-fotos-s__image-block nb-fotos-s__image-block--left">
              <img
                src={imageLeft}
                alt="Recién nacido envuelto durante sesión newborn"
                className="nb-fotos-s__image"
              />
            </div>

            <div className="nb-fotos-s__image-block nb-fotos-s__image-block--right">
              <img
                src={imageRight}
                alt="Bebés recién nacidos en sesión newborn"
                className="nb-fotos-s__image"
              />
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}

export default NBFotosS;