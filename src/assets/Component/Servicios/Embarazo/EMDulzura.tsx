import babyImage from '../../../../../public/img/5/5.1.webp';
import '../../../Styles/Servicios/Embarazo/EMDulzura.css';

function EMDulzura() {
  return (
    <section className="em-dulzura">
      <div className="em-dulzura__container">
        <div className="em-dulzura__layout">
          <div className="em-dulzura__heading">
            <h2 className="em-dulzura__title">
              CAPTURANDO LA BELLEZA
              <br />
              DE LA VIDA EN ESPERA
              <br />
            </h2>
          </div>

          <div className="em-dulzura__image-block">
            <img
              src={babyImage}
              alt="Hermana mayor mirando con ternura a un recién nacido"
              className="em-dulzura__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EMDulzura;