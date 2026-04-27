import '../../Styles/Proyectos/Familia.css';
import familiaImage from '../../../../public/img/2/2.4.webp';
import flechaIcon from '../../../../public/img/flecha (2).png';


function Familia() {
  return (
    <section className="familia-one">
      <div className="familia-one__container">
        <div className="familia-one__grid">
          <div className="familia-one__info">
            <span className="familia-one__eyebrow">FAMILIA</span>

            <h2 className="familia-one__title">
              SESIÓN PARA
              <br />
              FAMILIA LÓPEZ
              <br />
              MARTÍNEZ
            </h2>

              <button type="button" className="familia-one__button">
  <span className="familia-one__button-text">Ver proyecto</span>

  <span className="familia-one__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
</button>
          </div>

          <div className="familia-one__image-block">
            <img
              src={familiaImage}
              alt="Sesión para familia López Martínez"
              className="familia-one__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Familia;