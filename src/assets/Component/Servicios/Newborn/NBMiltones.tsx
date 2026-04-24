import ornament from '../../../../../public/img/image.png';
import '../../../Styles/Servicios/Newborn/NBMiltones.css';

function NBMiltones() {
  return (
    <section className="nb-miltones">
      <div className="nb-miltones__container">
        <div className="nb-miltones__content">
          <span className="nb-miltones__eyebrow">WE LOVE TO CAPTURE</span>

          <h2 className="nb-miltones__title">ALL OF THE MILESTONES</h2>

          <span className="nb-miltones__subtitle">OF FAMILY LIFE.</span>

          <div className="nb-miltones__ornament">
            <img src={ornament} alt="" className="nb-miltones__ornament-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NBMiltones;