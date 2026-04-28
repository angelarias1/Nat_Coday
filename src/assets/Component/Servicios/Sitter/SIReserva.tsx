import '../../../Styles/Servicios/Sitter/SIReserva.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


function SIReserva() {
  return (
    <section className="si-reserva">
      <div className="si-reserva__container">
        <div className="si-reserva__layout">
          <div className="si-reserva__heading">
            <h2 className="si-reserva__title">
              RESERVA
              <br />
              TU SESIÓN
            </h2>
          </div>

          <div className="si-reserva__bottom">
            <div className="si-reserva__description">
              <p>
              Si tu bebé está en la etapa Sitter o está a punto de estarlo, nuestras sesiones son una forma perfecta de documentar esta emocionante fase. Contáctanos para programar tu sesión y crear recuerdos invaluables que durarán toda la vida.      </p>
            </div>

                               <button type="button" className="re-reserva__button">
  <span className="re-reserva__button-text">Hagamos tu sesión</span>

  <span className="re-reserva__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SIReserva;