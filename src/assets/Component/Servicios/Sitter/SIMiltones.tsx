import ornament from '../../../../../public/img/image.png';
import '../../../Styles/Servicios/Sitter/SIMilestone.css';

function SIMiltones() {
  return (
    <section className="si-miltones">
      <div className="si-miltones__container">
        <div className="si-miltones__content">
          <span className="si-miltones__eyebrow">WE LOVE TO CAPTURE</span>

          <h2 className="si-miltones__title">ALL OF THE MILESTONES</h2>

          <span className="si-miltones__subtitle">OF FAMILY LIFE.</span>

          <div className="si-miltones__ornament">
            <img src={ornament} alt="" className="si-miltones__ornament-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SIMiltones;