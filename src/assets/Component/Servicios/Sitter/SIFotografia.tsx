import '../../../Styles/Servicios/Sitter/SIFotografia.css';

function SIFotografia() {
  return (
    <section className="si-fotografia">
      <div className="si-fotografia__container">
        <div className="si-fotografia__layout">
          <div className="si-fotografia__heading">
            <span className="si-fotografia__eyebrow">SERVICIOS</span>

            <h1 className="si-fotografia__title si-fotografia__title--desktop-tablet">
              SESIONES
              <br />
              SITTER
            </h1>

            <h1 className="si-fotografia__title si-fotografia__title--mobile">
              SESIONES
              <br />
              SITTER
            </h1>
          </div>

          <div className="si-fotografia__description">
            <div className="si-fotografia__description--desktop-tablet">
              <p>
               Nuestras sesiones Sitter están diseñadas para celebrar ese dulce y
                emocionante momento en la vida de tu bebé, cuando están descubriendo
                 el mundo desde una posición sentada. 

              </p>

              <p>
                Con años de experiencia en fotografía infantil, capturamos la 
                 y la curiosidad de esta etapa con imágenes que te robarán el corazón.
              </p>
            </div>

            <div className="si-fotografia__description--mobile">
              <p>
                Las sesiones de fotografía sitter celebran la etapa en la que tu
                bebé empieza a sentarse y descubrir el mundo con imágenes
                dulces, naturales y llenas de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SIFotografia;