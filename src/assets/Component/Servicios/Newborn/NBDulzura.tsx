import babyImage from '../../../../../public/img/4/4.1.webp';
import '../../../Styles/Servicios/Newborn/NBDulzura.css';

function NBDulzura() {
  return (
    <section className="nb-dulzura">
      <div className="nb-dulzura__container">
        <div className="nb-dulzura__layout">
          <div className="nb-dulzura__heading">
            <h2 className="nb-dulzura__title">
              CAPTURANDO LA DULZURA
              <br />
              DE LOS PRIMEROS
              <br />
              MOMENTOS
            </h2>
          </div>


          <div className="nb-dulzura__image-block">
            <img
              src={babyImage}
              alt="Hermana mayor mirando con ternura a un recién nacido"
              className="nb-dulzura__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NBDulzura;