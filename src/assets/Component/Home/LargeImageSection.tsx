import React from 'react';
import '../../Styles/Home/LargeImageSection.css';

import largeImage from '../../../../public/img/1/1.10.webp';

const LargeImageSection: React.FC = () => {
  return (
    <section className="large-image-section">
      <div className="large-image-section__container">
        <img
          src={largeImage}
          alt="Imagen decorativa"
          className="large-image-section__image"
        />
      </div>
    </section>
  );
};

export default LargeImageSection;