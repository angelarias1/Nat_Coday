import '../../../Styles/Servicios/Familiar/FAReserva.css';

function FAReserva() {
  return (
    <section className="fa-reserva">
      <div className="fa-reserva__container">
        <div className="fa-reserva__layout">
          <div className="fa-reserva__heading">
            <h2 className="fa-reserva__title">
              CREA RECUERDOS
              <br />
              ESPECIALES
            </h2>
          </div>

          <div className="fa-reserva__bottom">
            <div className="fa-reserva__description">
              <p>
                Nuestras fotografías familiares crean recuerdos que perdurarán a lo largo del tiempo. Capturamos momentos que crecen en valor a medida que tu familia evoluciona, creando un tesoro de recuerdos para las generaciones venideras.
                             </p>
            </div>

            <button type="button" className="fa-reserva__button">
              Agenda tu sesión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAReserva;