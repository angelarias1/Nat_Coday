import SIFotografia from './SIFotografia';
import SIDulzura from './SIDulzura';
import SIEsencia from './SIEsencia';
import SIImagenesS from './SIImagenesS';
import SIMiltones from './SIMiltones';
import SITabla from './SITabla';
import SIFotosS from './SIFotosS';
import SIReserva from './SIReserva';
import '../../../Styles/Servicios/Sitter/SIFotografia.css';

function SitterPage() {
  return (
    <section className="si-page">
      <section className="si-page__section">
        <SIFotografia />
      </section>

      <section className="si-page__section">
        <SIDulzura />
      </section>

      <section className="si-page__section">
        <SIEsencia />
      </section>

      <section className="si-page__section">
        <SIImagenesS />
      </section>

      <section className="si-page__section">
        <SIMiltones />
      </section>

      <section className="si-page__section">
        <SITabla />
      </section>

      <section className="si-page__section">
        <SIFotosS />
      </section>

      <section className="si-page__section">
        <SIReserva />
      </section>
    </section>
  );
}

export default SitterPage;