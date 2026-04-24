import FAFotografia from './FAFotografia';
import FADulzura from './FADulzura';
import FAEsencia from './FAEsencia';
import FAImagenesS from './FAImagenesS';
import FAMiltones from './FAMiltones';
import FATabla from './FATabla';
import FAFotosS from './FAFotosS';
import FAReserva from './FAReserva';
import '../../../Styles/Servicios/Familiar/FAFotografia.css';

function FamiliarPage() {
  return (
    <section className="fa-page">
      <section className="fa-page__section">
        <FAFotografia />
      </section>

      <section className="fa-page__section">
        <FADulzura />
      </section>

      <section className="fa-page__section">
        <FAEsencia />
      </section>

      <section className="fa-page__section">
        <FAImagenesS />
      </section>

      <section className="fa-page__section">
        <FAMiltones />
      </section>

      <section className="fa-page__section">
        <FATabla />
      </section>

      <section className="fa-page__section">
        <FAFotosS />
      </section>

      <section className="fa-page__section">
        <FAReserva />
      </section>
    </section>
  );
}

export default FamiliarPage;