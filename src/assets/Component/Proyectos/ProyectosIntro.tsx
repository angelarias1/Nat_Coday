import '../../Styles/Proyectos/ProyectosIntro.css';

function ProyectosIntro() {
  return (
    <section className="projects-intro">
      <div className="projects-intro__container">
        <div className="projects-intro__layout">
          <div className="projects-intro__heading">
            <span className="projects-intro__eyebrow">PROYECTOS</span>

            <h1 className="projects-intro__title projects-intro__title--desktop-tablet">
              INSTANTES INMORTALIZADOS.
              <br />
              NAVEGA POR NUESTRO
              <br />
              PORTAFOLIO
            </h1>

            <h1 className="projects-intro__title projects-intro__title--mobile">
              EXPLORA NUESTROS
              <br />
              PROYECTOS
              <br />
              FOTOGRÁFICOS ÚNICOS
            </h1>
          </div>

          <div className="projects-intro__description">
            <div className="projects-intro__description--desktop-tablet">
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

            <div className="projects-intro__description--mobile">
              <p>
                Explora nuestra colección de proyectos fotográficos únicos.
                Desde retratos corporativos hasta emocionantes eventos y
                conmovedoras sesiones familiares, cada proyecto cuenta una
                historia especial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProyectosIntro;