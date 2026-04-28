import '../../../Styles/Servicios/Embarazo/EMEsencia.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


function EMEsencia() {
  return (
    <section className="em-esencia">
      <div className="em-esencia__container">
        <div className="em-esencia__inner">
          <div className="em-esencia__layout">
            <div className="em-esencia__heading">
              <h2 className="em-esencia__title">
                CELEBRA TU
                <br />
                TRANSFORMACIÓN
              </h2>
            </div>

            <div className="em-esencia__bottom">
              <div className="em-esencia__description">
                <p>
                  La maternidad es una de las experiencias más hermosas y
                  transformadoras en la vida de una mujer. Nuestras sesiones de
                  maternidad te brindan la oportunidad de celebrar y capturar esta
                  etapa única mientras esperas dar la bienvenida a tu bebé.
                </p>
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
      </div>
    </section>
  );
}

export default EMEsencia;