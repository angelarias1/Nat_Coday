import '../../Styles/Proyectos/Cliente2.css';
import clienteImage from '../../../../public/img/2/2.6.webp';
import flechaIcon from '../../../../public/img/flecha (2).png';


function Cliente2() {
  return (
    <section className="cliente-two">
      <div className="cliente-two__container">
        <div className="cliente-two__grid">
          <div className="cliente-two__info">
            <span className="cliente-two__eyebrow">CLIENTE</span>

            <h2 className="cliente-two__title">
              Nombre o descripción
              <br />
              del proyecto
            </h2>

             <button type="button" className="cliente-two__button">
  <span className="cliente-two__button-text">Ver proyecto</span>

  <span className="cliente-two__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
</button>
          </div>

          <div className="cliente-two__image-block">
            <img
              src={clienteImage}
              alt="Proyecto de cliente"
              className="cliente-two__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cliente2;