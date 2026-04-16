import '../../Styles/Proyectos/Newborn1.css';
import newbornImage from '../../../../public/img/2/2.1.webp';

function Newborn1() {
  return (
    <section className="newborn-one">
      <div className="newborn-one__container">
        <div className="newborn-one__grid">
          <div className="newborn-one__heading-block">
            <h2 className="newborn-one__title">
              CAUTIVADORAS
              <br />
              CAPTURAS
            </h2>
          </div>

          <div className="newborn-one__image-block">
            <img
              src={newbornImage}
              alt="Sesión newborn para Regina"
              className="newborn-one__image"
            />
          </div>

          <div className="newborn-one__info">
            <span className="newborn-one__eyebrow">NEWBORN</span>

            <h3 className="newborn-one__subtitle">
              SESIÓN NEWBORN
              <br />
              PARA REGINA
            </h3>

            <button type="button" className="newborn-one__button">
              Ver proyecto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newborn1;