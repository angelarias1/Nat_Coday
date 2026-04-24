import '../../../Styles/Servicios/Retrato/RETabla.css';

function RETabla() {
  return (
    <section className="re-tabla">
      <div className="re-tabla__container">
        <div className="re-tabla__row">
          <div className="re-tabla__heading">
            <h3 className="re-tabla__title">
              SESIONES
              <br />
              PERSONALIZADAS
            </h3>
          </div>

          <div className="re-tabla__content">
            <p>
              Entendemos que cada individuo es único, por lo que nuestras
              sesiones de retrato son completamente personalizadas. Trabajamos
              contigo para comprender tus deseos y estilo, creando imágenes que
              te reflejen de manera genuina y artística.
            </p>
          </div>
        </div>

        <div className="re-tabla__row">
          <div className="re-tabla__heading">
            <h3 className="re-tabla__title">
              EN ESTUDIO O EN
              <br />
              EXTERIORES
            </h3>
          </div>

          <div className="re-tabla__content">
            <p>
              Ya sea en un estudio controlado o en un entorno natural, nuestras
              sesiones de retrato son versátiles y adaptativas. Utilizamos la
              iluminación y la composición para resaltar tus rasgos únicos y tu
              personalidad en cada imagen.
            </p>
          </div>
        </div>

        <div className="re-tabla__row">
          <div className="re-tabla__heading">
            <h3 className="re-tabla__title">
              DIVERSIDAD DE
              <br />
              RETRATOS
            </h3>

            <button type="button" className="re-tabla__button">
              Ve nuestro portfolio
            </button>
          </div>

          <div className="re-tabla__content">
            <p>
              Desde retratos profesionales y corporativos hasta retratos
              artísticos y emocionales, abarcamos una amplia gama de estilos y
              enfoques. Capturamos la multiplicidad de facetas que componen tu
              identidad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RETabla;