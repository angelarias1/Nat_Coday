import '../../../Styles/Servicios/Newborn/NBEsencia.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';

function NBEsencia() {
  return (
    <section className="nb-esencia">
      <div className="nb-esencia__container">
        <div className="nb-esencia__layout">
          <div className="nb-esencia__heading">
            <h2 className="nb-esencia__title">
              CAPTURANDO LA 
              <br />
              ESENCIA PURA
            </h2>
          </div>

          <div className="nb-esencia__bottom">
            <div className="nb-esencia__description">
              <p>
               El momento ideal para realizar esta sesión a tu bebé es entre la primer y segunda semana de nacido (Entre el día 7 al 13 ideal) esto debido a que aún es muy flexible, duerme más y es más sencilla su manipulación sin alterar su sueño.              </p>
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

export default NBEsencia;