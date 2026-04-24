import babyImage from '../../../../../public/img/7/7.1.webp';
import '../../../Styles/Servicios/Retrato/REDulzura.css';

function REDulzura() {
  return (
    <section className="re-dulzura">
      <div className="re-dulzura__container">
        <div className="re-dulzura__layout">
          <div className="re-dulzura__heading">
            <h2 className="re-dulzura__title">
              CAPTURANDO VÍNCULOS
              <br />
              QUE DURARAN PARA SIEMPRE
              <br />
            </h2>
          </div>

          <div className="re-dulzura__image-block">
            <img
              src={babyImage}
              alt="Hermana mayor mirando con ternura a un recién nacido"
              className="re-dulzura__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default REDulzura;