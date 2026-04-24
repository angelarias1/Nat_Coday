import REFotografia from './REFotografia';
import REDulzura from './REDulzura';
import REEsencia from './REEsencia';
import REImagenesS from './REImagenesS';
import REMiltones from './REMiltones';
import RETabla from './RETabla';
import REFotosS from './REFotosS';
import REReserva from './REReserva';
import '../../../Styles/Servicios/Retrato/REFotografia.css';

function RetratoPage() {
  return (
    <section className="re-page">
      <section className="re-page__section">
        <REFotografia />
      </section>

      <section className="re-page__section">
        <REDulzura />
      </section>

      <section className="re-page__section">
        <REEsencia />
      </section>

      <section className="re-page__section">
        <REImagenesS />
      </section>

      <section className="re-page__section">
        <REMiltones />
      </section>

      <section className="re-page__section">
        <RETabla />
      </section>

      <section className="re-page__section">
        <REFotosS />
      </section>

      <section className="re-page__section">
        <REReserva />
      </section>
    </section>
  );
}

export default RetratoPage;