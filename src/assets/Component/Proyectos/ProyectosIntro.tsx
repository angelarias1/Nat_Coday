import '../../Styles/Proyectos/ProyectosIntro.css';

function ProyectosIntro() {
  return (
    <section className="projects-intro">
      <div className="projects-intro__container">
        <div className="projects-intro__grid">
          <div className="projects-intro__heading">
            <span className="projects-intro__eyebrow">PROYECTOS</span>

            <h1 className="projects-intro__title">
              INSTANTES INMORTALIZADOS.
              <br />
              NAVEGA POR NUESTRO
              <br />
              PORTAFOLIO
            </h1>
          </div>

          <div className="projects-intro__description">
            <p>
              Nuestro portafolio es un lugar donde las imágenes hablan con
              elocuencia y las historias cobran vida a través de cada captura.
            </p>

            <p>
              Como un equipo de fotógrafos con años de experiencia, hemos
              inmortalizado momentos únicos de nuestros clientes desde
              emocionantes eventos, cálidas sesiones familiares hasta la
              llegada de ese nuevo integrante de la familia.
            </p>

            <p>
              Nuestra pasión por la fotografía y nuestra dedicación a cada
              proyecto se reflejan en cada imagen que presentamos aquí.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProyectosIntro;