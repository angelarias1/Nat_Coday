import NBIntro from './NBFotografia';
import NBDulzura from '../Newborn/NBDulzura';
import NBEsencia from '../Newborn/NBEsencia';
import NBImagenesS from '../Newborn/NBImagenesS';
import NBMiltones from '../Newborn/NBMiltones';
import NBTabla from '../Newborn/NBTabla';
import NBFotosS from '../Newborn/NBFotosS';
import NBReserva from '../Newborn/NBReserva';
import '../../../Styles/Servicios/Newborn/NBFotografia.css';

function NewbornPage() {
  return (
    <section className="nb-page">
      <section className="nb-page__section">
        <NBIntro />
      </section>

      <section className="nb-page__section">
        <NBDulzura />
      </section>

      <section className="nb-page__section">
        <NBEsencia />
      </section>

      <section className="nb-page__section">
        <NBImagenesS />
      </section>

      <section className="nb-page__section">
        <NBMiltones />
      </section>

      <section className="nb-page__section">
        <NBTabla />
      </section>

      <section className="nb-page__section">
        <NBFotosS />
      </section>

      <section className="nb-page__section">
        <NBReserva />
      </section>
    </section>
  );
}

export default NewbornPage;