import '../../../Styles/Servicios/Retrato/REReserva.css';

function REReserva() {
  return (
    <section className="re-reserva">
      <div className="re-reserva__container">
        <div className="re-reserva__layout">
          <div className="re-reserva__heading">
            <h2 className="re-reserva__title">
              RECUERDOS
              <br />
              DURADEROS
            </h2>
          </div>

          <div className="re-reserva__bottom">
            <div className="re-reserva__description">
              <p>
              Nuestras imágenes de retrato no solo son fotografías, sino también ventanas a tus momentos y emociones. Cada imagen captura un instante que perdurará en el tiempo, permitiéndote revivir y compartir tus recuerdos una y otra vez.    </p>
            </div>

            <button type="button" className="re-reserva__button">
              Agenda tu sesión
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default REReserva;