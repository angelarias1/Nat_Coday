import '../../../Styles/Servicios/Familiar/FAReserva.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


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
                Nuestras fotografías familiares crean recuerdos que perdurarán a lo largo del tifapo. Capturamos momentos que crecen en valor a medida que tu familia evoluciona, creando un tesoro de recuerdos para las generaciones venideras.
                             </p>
            </div>

             <button type="button" className="fa-reserva__button">
  <span className="fa-reserva__button-text">Hagamos tu sesión</span>

  <span className="fa-reserva__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAReserva;