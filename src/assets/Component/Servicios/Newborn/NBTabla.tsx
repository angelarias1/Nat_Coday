import '../../../Styles/Servicios/Newborn/NBTabla.css';
import flechaIcon from '../../../../../public/img/flecha (2).png';


function NBTabla() {
  return (
    <section className="nb-tabla">
      <div className="nb-tabla__container">
        <div className="nb-tabla__row">
          <div className="nb-tabla__heading">
            <h3 className="nb-tabla__title">
              SESIONES
              <br />
              PERSONALIZADAS
            </h3>
          </div>

          <div className="nb-tabla__content">
            <p>
              Entendemos que cada bebé es diferente, por lo que nuestras
              sesiones de fotografía Newborn son completamente personalizadas.
            </p>

            <p>
              Trabajamos con un enfoque suave y respetuoso, asegurándonos de que
              tanto el bebé como los padres se sientan cómodos durante todo el
              proceso.
            </p>
          </div>
        </div>

        <div className="nb-tabla__row">
          <div className="nb-tabla__heading">
            <h3 className="nb-tabla__title">
              ESTUDIO SEGURO Y
              <br />
              CONFORTABLE
            </h3>
          </div>

          <div className="nb-tabla__content">
            <p>
              Nuestro estudio está diseñado para ser un ambiente seguro y cómodo
              para los recién nacidos.
            </p>

            <p>
              Contamos con equipo y accesorios especialmente seleccionados para
              garantizar la seguridad y el bienestar de tu bebé en todo momento.
            </p>
          </div>
        </div>

        <div className="nb-tabla__row">
          <div className="nb-tabla__heading">
            <h3 className="nb-tabla__title">
              RECUERDO PARA
              <br />
              TODA LA VIDA
            </h3>

               <button type="button" className="nb-tabla__button">
  <span className="nb-tabla__button-text">Portfolio de Newborn</span>

  <span className="nb-tabla__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
              </button>
          </div>

          <div className="nb-tabla__content">
            <p>
              Las primeras semanas de vida de tu bebé son irrepetibles. Nuestras
              fotografías Newborn te permiten revivir esos momentos mágicos una
              y otra vez.
            </p>

            <p>
              Ya sea un retrato tierno, una pose creativa o una imagen que
              captura una expresión única, creamos recuerdos que atesorarás
              mientras tu bebé crece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NBTabla;