import ornament from '../../../../../public/img/image.png';
import '../../../Styles/Servicios/Embarazo/EMMiltones.css';

function EMMiltones() {
  return (
    <section className="em-miltones">
      <div className="em-miltones__container">
        <div className="em-miltones__content">
          <span className="em-miltones__eyebrow">WE LOVE TO CAPTURE</span>

          <h2 className="em-miltones__title">ALL OF THE MILESTONES</h2>

          <span className="em-miltones__subtitle">OF FAMILY LIFE.</span>

          <div className="em-miltones__ornament">
            <img src={ornament} alt="" className="em-miltones__ornament-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EMMiltones;