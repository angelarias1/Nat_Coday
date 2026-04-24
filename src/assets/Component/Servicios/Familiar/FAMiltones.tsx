import ornament from '../../../../../public/img/image.png';
import '../../../Styles/Servicios/Familiar/FAMiltones.css';

function FAMiltones() {
  return (
    <section className="fa-miltones">
      <div className="fa-miltones__container">
        <div className="fa-miltones__content">
          <span className="fa-miltones__eyebrow">WE LOVE TO CAPTURE</span>

          <h2 className="fa-miltones__title">ALL OF THE MILESTONES</h2>

          <span className="fa-miltones__subtitle">OF FAMILY LIFE.</span>

          <div className="fa-miltones__ornament">
            <img src={ornament} alt="" className="fa-miltones__ornament-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAMiltones;