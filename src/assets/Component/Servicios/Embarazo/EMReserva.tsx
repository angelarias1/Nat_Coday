import '../../../Styles/Servicios/Embarazo/EMReserva.css';

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
                Agenda tu sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EMReserva;