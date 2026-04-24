import '../../../Styles/Servicios/Sitter/SITabla.css';

function SITabla() {
  return (
    <section className="si-tabla">
      <div className="si-tabla__container">
        <div className="si-tabla__row">
          <div className="si-tabla__heading">
            <h3 className="si-tabla__title">
              UN ENFOQUE
              <br />
              JUGUETÓN Y
              <br />
              AUTÉNTICO
            </h3>
          </div>

          <div className="si-tabla__content">
            <p>
              Trabajamos con un enfoque relajado y juguetón para asegurarnos de
              que tu bebé esté cómodo y disfrute durante la sesión. Permitimos
              que la espontaneidad brille, capturando momentos auténticos y
              llenos de vida.
            </p>
          </div>
        </div>

        <div className="si-tabla__row">
          <div className="si-tabla__heading">
            <h3 className="si-tabla__title">
              ESTUDIO AMIGABLE
              <br />
              Y FRESCO
            </h3>
          </div>

          <div className="si-tabla__content">
            <p>
              Nuestro estudio está diseñado para ser un ambiente divertido y
              acogedor para los bebés en esta etapa. Utilizamos una variedad de
              accesorios y fondos coloridos para crear imágenes vibrantes y
              llenas de energía.
            </p>
          </div>
        </div>

        <div className="si-tabla__row">
          <div className="si-tabla__heading">
            <h3 className="si-tabla__title">
              CRECIMIENTO Y
              <br />
              CAMBIO
            </h3>

            <button type="button" className="si-tabla__button">
              Portfolio de sitters
            </button>
          </div>

          <div className="si-tabla__content">
            <p>
              La etapa Sitter es una de las más emocionantes en el primer año de
              vida de tu bebé. Capturamos estos momentos llenos de vida para que
              puedas atesorarlos a medida que tu bebé sigue creciendo y
              explorando el mundo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SITabla;