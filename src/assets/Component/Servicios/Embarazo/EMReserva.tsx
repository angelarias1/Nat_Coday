import '../../../Styles/Servicios/Embarazo/EMReserva.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


function EMReserva() {
  return (
    <section className="em-reserva">
      <div className="em-reserva__container">
        <div className="em-reserva__inner">
          <div className="em-reserva__layout">
            <div className="em-reserva__heading">
              <h2 className="em-reserva__title">
                RESERVA
                <br />
                TU SESIÓN
              </h2>
            </div>

            <div className="em-reserva__bottom">
              <div className="em-reserva__description">
                <p>
                  Si estás esperando la llegada de tu bebé o deseas congelar este momento especial en el tiempo, nuestras sesiones de maternidad son perfectas para ti. Contáctanos para reservar tu sesión y crear recuerdos que durarán toda la vida.
                </p>
              </div>

                <button type="button" className="em-reserva__button">
  <span className="em-reserva__button-text">Hagamos tu sesión</span>

  <span className="em-reserva__button-icon">
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

export default EMReserva;