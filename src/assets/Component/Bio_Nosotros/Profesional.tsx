import '../../Styles/Bio_Nosotros/Profecional.css';

function Profesional() {
  const items = [
    'PROFESIONALISMO',
    'SERVICIO',
    'CONFIANZA',
  ];

  const loopItems = [...items, ...items, ...items];

  return (
    <section className="profesionalismo-strip">
      <div className="profesionalismo-strip__container">
        <div className="profesionalismo-strip__viewport">
          <div className="profesionalismo-strip__track">
            {loopItems.map((item, index) => (
              <span key={`${item}-${index}`} className="profesionalismo-strip__item">
                {item}
                <span
                  className="profesionalismo-strip__dot"
                  aria-hidden="true"
                >
                  ·
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profesional;