import '../../../Styles/Servicios/Familiar/FAFotografia.css';

function FAFotografia() {
  return (
    <section className="fa-fotografia">
      <div className="fa-fotografia__container">
        <div className="fa-fotografia__layout">
          <div className="fa-fotografia__heading">
            <span className="fa-fotografia__eyebrow">SERVICIOS</span>

            <h1 className="fa-fotografia__title fa-fotografia__title--desktop-tablet">
              FOTOGRAFÍA
              <br />
              FAMILIAR
            </h1>

            <h1 className="fa-fotografia__title fa-fotografia__title--mobile">
              FOTOGRAFÍA
              <br />
              FAMILIAR
            </h1>
          </div>

          <div className="fa-fotografia__description">
            <div className="fa-fotografia__description--desktop-tablet">
              <p>
                Las sesiones de fotografía familiar te permiten conservar la
                conexión, el cariño y la esencia de quienes más amas en imágenes
                naturales y llenas de significado.
              </p>

              <p>
                Con una mirada sensible y auténtica, creamos recuerdos
                atemporales que reflejan la unión, la alegría y la historia de
                tu familia en cada etapa.
              </p>
            </div>

            <div className="fa-fotografia__description--mobile">
              <p>
                Las sesiones de fotografía familiar te permiten conservar la
                conexión y esencia de tu familia con imágenes naturales,
                emotivas y llenas de significado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAFotografia;