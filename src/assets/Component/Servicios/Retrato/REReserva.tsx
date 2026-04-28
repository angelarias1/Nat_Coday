import '../../../Styles/Servicios/Retrato/REReserva.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


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

export default REReserva;