import '../../../Styles/Servicios/Embarazo/EMTabla.css';

function EMTabla() {
  return (
    <section className="em-tabla">
      <div className="em-tabla__container">
        <div className="em-tabla__row">
          <div className="em-tabla__heading">
            <h3 className="em-tabla__title">
              UN ENFOQUE
              <br />
              CÁLIDO Y
              <br />
              RESPETUOSO
            </h3>
          </div>

          <div className="em-tabla__content">
            <p>
              Entendemos la importancia de la comodidad y la confianza durante
              las sesiones de maternidad. Trabajamos con un enfoque cálido y
              respetuoso para crear un ambiente relajado en el que te sientas
              cómoda y radiante mientras capturamos tus momentos más especiales.
            </p>
          </div>
        </div>

        <div className="em-tabla__row">
          <div className="em-tabla__heading">
            <h3 className="em-tabla__title">
              ESTUDIO O
              <br />
              EXTERIORES
            </h3>
          </div>

          <div className="em-tabla__content">
            <p>
              Ya sea en nuestro estudio acogedor o en un entorno natural,
              nuestras sesiones de maternidad están diseñadas para resaltar tu
              belleza y emoción en cada fotografía.
            </p>

            <p>
              Elegimos cuidadosamente la ubicación y el estilo para asegurarnos
              de que tus imágenes sean verdaderamente únicas.
            </p>
          </div>
        </div>

        <div className="em-tabla__row">
          <div className="em-tabla__heading">
            <h3 className="em-tabla__title">
              CONEXIÓN Y
              <br />
              EMOCIÓN
            </h3>

            <button type="button" className="em-tabla__button">
              Portfolio de maternidad
            </button>
          </div>

          <div className="em-tabla__content">
            <p>
              Nuestro objetivo es capturar la conexión profunda y la emoción
              genuina que sientes durante esta etapa. Desde retratos suaves hasta
              poses creativas, cada imagen es un testimonio de la belleza y la
              fortaleza que irradias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EMTabla;