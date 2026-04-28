import '../../../Styles/Servicios/Newborn/NBReserva.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


function NBReserva() {
  return (
    <section className="nb-reserva">
      <div className="nb-reserva__container">
        <div className="nb-reserva__layout">
          <div className="nb-reserva__heading">
            <h2 className="nb-reserva__title">
              CAPTURANDO LA 
              <br />
              ESENCIA PURA
            </h2>
          </div>

          <div className="nb-reserva__bottom">
            <div className="nb-reserva__description">
              <p>
               Si estás esperando la llegada de tu bebé o acaba de nacer, es el momento perfecto para reservar tu sesión de fotografía Newborn.               <br />

Captura la dulzura de los primeros días para siempre. Contáctanos para programar tu sesión y crear recuerdos que durarán toda la vida.      </p>
            </div>

               <button type="button" className="nb-reserva__button">
  <span className="nb-reserva__button-text">Hagamos tu sesión</span>

  <span className="nb-reserva__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NBReserva;