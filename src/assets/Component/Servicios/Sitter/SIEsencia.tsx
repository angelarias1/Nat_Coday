import '../../../Styles/Servicios/Sitter/SIEsencia.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


function SIEsencia() {
  return (
    <section className="si-esencia">
      <div className="si-esencia__container">
        <div className="si-esencia__layout">
          <div className="si-esencia__heading">
            <h2 className="si-esencia__title">
              EXPLORANDO EL
              <br />
              MUNDO SENTADOS
            </h2>
          </div>

          <div className="si-esencia__bottom">
            <div className="si-esencia__description">
              <p>
               En las sesiones Sitter, capturamos a tu bebé en un momento de crecimiento y exploración. Desde sonrisas radiantes hasta miradas llenas de asombro, cada imagen revela la personalidad y la curiosidad de tu pequeño mientras descubre el mundo a su alrededor.              </p>
            </div>

               <button type="button" className="nb-esencia__button">
  <span className="nb-esencia__button-text">Hagamos tu sesión</span>

  <span className="nb-esencia__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SIEsencia;