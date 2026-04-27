import '../../Styles/Proyectos/Cliente1.css';
import clienteImage from '../../../../public/img/2/2.5.webp';
import flechaIcon from '../../../../public/img/flecha (2).png';


function Cliente1() {
  return (
    <section className="cliente-one">
      <div className="cliente-one__container">
        <div className="cliente-one__grid">
          <div className="cliente-one__image-block">
            <img
              src={clienteImage}
              alt="Proyecto de cliente"
              className="cliente-one__image"
            />
          </div>

          <div className="cliente-one__info">
            <span className="cliente-one__eyebrow">CLIENTE</span>

            <h2 className="cliente-one__title">
              Nombre o descripción
              <br />
              del proyecto
            </h2>

             <button type="button" className="cliente-one__button">
  <span className="cliente-one__button-text">Ver proyecto</span>

  <span className="cliente-one__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cliente1;