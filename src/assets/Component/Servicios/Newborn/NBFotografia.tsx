import '../../../Styles/Servicios/Newborn/NBFotografia.css';

function NBFotografia() {
  return (
    <section className="nb-fotografia">
      <div className="nb-fotografia__container">
        <div className="nb-fotografia__layout">
          <div className="nb-fotografia__heading">
            <span className="nb-fotografia__eyebrow">SERVICIOS</span>

            <h1 className="nb-fotografia__title nb-fotografia__title--desktop-tablet">
              FOTOGRAFÍA
              <br />
              NEWBORN
            </h1>

            <h1 className="nb-fotografia__title nb-fotografia__title--mobile">
              FOTOGRAFÍA
              <br />
              NEWBORN
            </h1>
          </div>

          <div className="nb-fotografia__description">
            <div className="nb-fotografia__description--desktop-tablet">
              <p>
                Las sesiones de fotografía Newborn te permiten preservar la
                hermosa fragilidad y la inocencia de los primeros días de vida
                de tu bebé. Cada imagen es un recuerdo de un momento que pasa
                demasiado rápido.
              </p>

              <p>
                Con nuestra experiencia en fotografía y un enfoque amoroso,
                creamos imágenes tiernas y atemporales que atesorarás para
                siempre.
              </p>
            </div>

            <div className="nb-fotografia__description--mobile">
              <p>
                Las sesiones de fotografía Newborn te permiten preservar la
                fragilidad y ternura de los primeros días de vida de tu bebé con
                imágenes suaves, delicadas y llenas de amor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NBFotografia;