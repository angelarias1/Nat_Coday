import '../../../Styles/Servicios/Familiar/FATabla.css';

function FATabla() {
  return (
    <section className="fa-tabla">
      <div className="fa-tabla__container">
        <div className="fa-tabla__row">
          <div className="fa-tabla__heading">
            <h3 className="fa-tabla__title">
              UN AMBIENTE
              <br />
              CÁLIDO Y NATURAL
            </h3>
          </div>

          <div className="fa-tabla__content">
            <p>
              Trabajamos en entornos naturales y cómodos para capturar momentos
              auténticos. Nuestro enfoque es crear un ambiente relajado donde tu
              familia pueda interactuar de manera natural, permitiendo que los
              momentos genuinos se desarrollen sin restricciones.
            </p>
          </div>
        </div>

        <div className="fa-tabla__row">
          <div className="fa-tabla__heading">
            <h3 className="fa-tabla__title">
              RISAS Y AVENTURAS
              <br />
              COMPARTIDAS
            </h3>
          </div>

          <div className="fa-tabla__content">
            <p>
              Desde los momentos más íntimos hasta las risas compartidas,
              capturamos la gama completa de emociones y experiencias que hacen
              que tu familia sea única. Cada imagen es un testimonio visual de
              la vida en su máxima expresión.
            </p>
          </div>
        </div>

        <div className="fa-tabla__row">
          <div className="fa-tabla__heading">
            <h3 className="fa-tabla__title">
              PERSONALIZACIÓN Y
              <br />
              CREATIVIDAD
            </h3>

            <button type="button" className="fa-tabla__button">
              Portfolio de sitters
            </button>
          </div>

          <div className="fa-tabla__content">
            <p>
              Cada familia es diferente, y nuestras sesiones son completamente
              personalizadas para adaptarse a tus deseos y estilo. Si tienes
              ideas creativas o deseas destacar elementos especiales de tu
              familia, estamos aquí para hacerlo realidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FATabla;