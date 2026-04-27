import '../../Styles/Bio_Nosotros/Trayectoria.css';
import trayectoriaImage from '../../../../public/img/3/3.2.webp';
import flechaIcon from '../../../../public/img/flecha (2).png';


function Trayectoria() {
  return (
    <section className="trayectoria-section">
      <div className="trayectoria-section__container">
        <div className="trayectoria-section__grid">
          <div className="trayectoria-section__image-block">
            <img
              src={trayectoriaImage}
              alt="Fotografía representativa de trayectoria"
              className="trayectoria-section__image"
            />
          </div>

          <div className="trayectoria-section__content">
            <h2 className="trayectoria-section__title">MI TRAYECTORIA</h2>

            <p className="trayectoria-section__text trayectoria-section__text--desktop-tablet">
              Con una enriquecedora experiencia de más de una década en el mundo
              de la fotografía, mi trayectoria se ha forjado a través de la
              licenciatura en Artes Visuales de la UDG en Guadalajara.
            </p>

            <p className="trayectoria-section__text trayectoria-section__text--mobile">
              Un enfoque analítico y artístico puede capturar momentos que
              resaltan la autenticidad de tu proyecto creando imágenes que
              conectan y cautivan a tu audiencia de manera única.
            </p>

            <p className="trayectoria-section__text trayectoria-section__text--desktop-tablet">
              Mi pasión por la fotografía comenzó abarcando una diversidad de
              campos, desde eventos sociales, bodas y deportes hasta momentos
              políticos y comerciales.
            </p>

            <p className="trayectoria-section__text trayectoria-section__text--desktop-tablet">
              Sin embargo, a medida que mi camino se ha desarrollado, mi enfoque
              se ha consolidado en áreas específicas, culminando en una pasión
              incuestionable por la fotografía de recién nacidos, embarazos,
              familias y retratos personales.
            </p>

               <button type="button" className="trayectoria-section__button">
  <span className="trayectoria-section__button-text">Ver Proyecto</span>

  <span className="trayectoria-section__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Trayectoria;