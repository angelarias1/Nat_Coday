import '../../Styles/Proyectos/Newborn2.css';
import newbornImage from '../../../../public/img/2/2.2.webp';

function Newborn2() {
  return (
    <section className="newborn-two">
      <div className="newborn-two__container">
        <div className="newborn-two__grid">
          <div className="newborn-two__info">
            <span className="newborn-two__eyebrow">NEWBORN</span>

            <h2 className="newborn-two__subtitle">
              SESIÓN NEWBORN
              <br />
              PARA CAMILA
            </h2>

            <button type="button" className="newborn-two__button">
              Ver proyecto
            </button>
          </div>

          <div className="newborn-two__image-block">
            <img
              src={newbornImage}
              alt="Sesión newborn para Camila"
              className="newborn-two__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newborn2;