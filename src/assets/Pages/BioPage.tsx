import Bio from '../Component/Bio_Nosotros/Bio';
import Trayectoria from '../Component/Bio_Nosotros/Trayectoria';
import Profesional from '../Component/Bio_Nosotros/Profesional';
import Objetivo from '../Component/Bio_Nosotros/Objetivo';
import Compromiso from '../Component/Bio_Nosotros/Compromiso';
import Imagenes from '../Component/Bio_Nosotros/imagenes';
import '../Styles/Bio_Nosotros/BioPage.css';
function BioPage() {
  return (
    <section className="bio-page">
      <div className="page-width-shell">
        <div className="page-width-shell__inner">
          <div className="page-width-shell__content">
            <section className="bio-page__section">
              <Bio />
            </section>

            <section className="bio-page__section">
              <Trayectoria />
            </section>
            
            <section className="bio-page__section">
              <Compromiso />
            </section>

            <section className="bio-page__section">
              <Imagenes />
            </section> 

          

            <section className="bio-page__section">
              <Objetivo />
            </section>
             
             <section className="bio-page__section">
              <Profesional />
            </section>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default BioPage;