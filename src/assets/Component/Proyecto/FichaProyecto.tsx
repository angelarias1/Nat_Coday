import { Link } from 'react-router-dom';
import '../../Styles/Proyecto/FichaProyecto.css';

function FichaProyecto() {
  return (
    <aside className="ficha-proyecto">
      <div className="ficha-proyecto__content">
        <h1 className="ficha-proyecto__title">
          Nombre del proyecto
          <br />
          que se realizó
        </h1>

        <div className="ficha-proyecto__info">
          <p>Tipo de proyecto</p>
          <p>Fecha del proyecto</p>
          <p>Nombre del cliente</p>
        </div>

        <Link to="/proyectos" className="ficha-proyecto__back">
          <span className="ficha-proyecto__arrow">←</span>
          <span>Proyectos</span>
        </Link>
      </div>
    </aside>
  );
}

export default FichaProyecto;