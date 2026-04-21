import '../../Styles/Bio_Nosotros/Compromiso.css';

function Compromiso() {
  return (
    <section className="compromiso-section">
      <div className="compromiso-section__container">
        <div className="compromiso-section__heading">
          <h2 className="compromiso-section__title">
            COMPROMISO &amp;
            <br />
            EXCELENCIA
          </h2>
        </div>

        <div className="compromiso-section__content-wrap">
          <div className="compromiso-section__columns">
            <div className="compromiso-section__column">
              <p className="compromiso-section__text">
                A lo largo de los años, mi compromiso con la excelencia me ha
                llevado a participar en talleres de renombre, donde he tenido la
                oportunidad de aprender y crecer bajo la tutela de grandes
                maestros en la industria.
              </p>

              <p className="compromiso-section__text">
                Continuamente busco enriquecer mi perspectiva y técnica,
                trabajando incansablemente para definir y afinar mi estilo
                fotográfico distintivo.
              </p>
            </div>

            <div className="compromiso-section__column">
              <p className="compromiso-section__text">
                Es fundamental comprender que mi trabajo no se limita solo a mí.
                Como directora de un equipo de profesionales apasionados, cuento
                con un grupo colaborativo de decoradores, maquillistas,
                estilistas y asistentes que complementan y enriquecen cada
                proyecto que emprendemos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Compromiso;