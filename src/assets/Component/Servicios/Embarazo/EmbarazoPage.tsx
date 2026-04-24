import EMIntro from './EMFotografia';
import EMDulzura from './EMDulzura';
import EMEsencia from './EMEsencia';
import EMImagenesS from './EMImagenesS';
import EMMiltones from './EMMiltones';
import EMTabla from './EMTabla';
import EMFotosS from './EMFotosS';
import EMReserva from './EMReserva';
import '../../../Styles/Servicios/Embarazo/EMFotografia.css';

function EmbarazoPage() {
  return (
    <section className="em-page">
      <section className="em-page__section">
        <EMIntro />
      </section>

      <section className="em-page__section">
        <EMDulzura />
      </section>

      <section className="em-page__section">
        <EMEsencia />
      </section>

      <section className="em-page__section">
        <EMImagenesS />
      </section>

      <section className="em-page__section">
        <EMMiltones />
      </section>

      <section className="em-page__section">
        <EMTabla />
      </section>

      <section className="em-page__section">
        <EMFotosS />
      </section>

      <section className="em-page__section">
        <EMReserva />
      </section>
    </section>
  );
}

export default EmbarazoPage;