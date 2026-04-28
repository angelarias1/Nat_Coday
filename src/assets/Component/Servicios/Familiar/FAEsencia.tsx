import '../../../Styles/Servicios/Familiar/FAEsencia.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


function FAEsencia() {
  return (
    <section className="fa-esencia">
      <div className="fa-esencia__container">
        <div className="fa-esencia__layout">
          <div className="fa-esencia__heading">
            <h2 className="fa-esencia__title">
              CELEBRA VÍNCULOS
              <br />
              ESPECIALES
            </h2>
          </div>

          <div className="fa-esencia__bottom">
            <div className="fa-esencia__description">
              <p>
                Cada familia tiene una historia única que contar. Nuestras sesiones de fotografía familiar te brindan la oportunidad de celebrar y capturar esos momentos compartidos llenos de risas, abrazos y vínculos especiales.              </p>
            </div>

             <button type="button" className="fa-esencia__button">
  <span className="fa-esencia__button-text">Hagamos tu sesión</span>

  <span className="fa-esencia__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAEsencia;