import ornament from '../../../../../public/img/image.png';
import '../../../Styles/Servicios/Retrato/REMilestone.css';

function REMiltones() {
  return (
    <section className="re-miltones">
      <div className="re-miltones__container">
        <div className="re-miltones__content">
          <span className="re-miltones__eyebrow">WE LOVE TO CAPTURE</span>

          <h2 className="re-miltones__title">ALL OF THE MILESTONES</h2>

          <span className="re-miltones__subtitle">OF FAMILY LIFE.</span>

          <div className="re-miltones__ornament">
            <img src={ornament} alt="" className="re-miltones__ornament-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default REMiltones;