import babyImage from '../../../../../public/img/6/6.1.webp';
import '../../../Styles/Servicios/Sitter/SIDulzura.css';

function SIDulzura() {
  return (
    <section className="si-dulzura">
      <div className="si-dulzura__container">
        <div className="si-dulzura__layout">
          <div className="si-dulzura__heading">
            <h2 className="si-dulzura__title">
              CAPTURANDO SONRISAS Y
              <br />
              EXPLORACIONES EN LA 
              <br />
              INFANCIA
            </h2>
          </div>

          <div className="si-dulzura__image-block">
            <img
              src={babyImage}
              alt="Hermana mayor mirando con ternura a un recién nacido"
              className="si-dulzura__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SIDulzura;