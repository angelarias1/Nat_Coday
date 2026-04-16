import '../../Styles/Proyectos/Maternidad.css';
import maternidadImage from '../../../../public/img/2/2.3.webp';

function Maternidad() {
  return (
    <section className="maternidad-one">
      <div className="maternidad-one__container">
        <div className="maternidad-one__grid">
          <div className="maternidad-one__image-block">
            <img
              src={maternidadImage}
              alt="Sesión de maternidad Natalia"
              className="maternidad-one__image"
            />
          </div>

          <div className="maternidad-one__info">
            <span className="maternidad-one__eyebrow">MATERNIDAD</span>

            <h2 className="maternidad-one__title">
              SESIÓN DE
              <br />
              MATERNIDAD
              <br />
              NATALIA
            </h2>

            <button type="button" className="maternidad-one__button">
              Ver proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maternidad;