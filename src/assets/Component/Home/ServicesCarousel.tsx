import { useState } from 'react';
import '../../Styles/Home/ServicesCarousel.css';

import serviceImage1 from '../../../../public/img/1/1.3.webp';
import serviceImage2 from '../../../../public/img/1/1.13.webp';
import serviceImage3 from '../../../../public/img/1/1.14.webp';
import serviceImage4 from '../../../../public/img/1/1.15.webp';
import serviceImage5 from '../../../../public/img/1/1.15.webp';
import flechaIcon from '../../../../public/img/flecha (2).png';
import arrowPrev from '../../../../public/img/1/Vector 9.png';
import arrowNext from '../../../../public/img/1/vector 10.png';

type ServiceItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    id: 1,
    title: 'SESIONES DE MATERNIDAD',
    description:
      'Un enfoque analítico y artístico puede capturar momentos que resaltan la autenticidad de tu proyecto creando imágenes que conectan y cautivan a tu audiencia de manera única.',
    image: serviceImage1,
  },
  {
    id: 2,
    title: 'RECIÉN NACIDO',
    description:
      'Un enfoque analítico y artístico puede capturar momentos que resaltan la autenticidad de tu proyecto creando imágenes que conectan y cautivan a tu audiencia de manera única.',
    image: serviceImage2,
  },
  {
    id: 3,
    title: 'SITTER / BEBÉS / NIÑOS',
    description:
      'Un enfoque analítico y artístico puede capturar momentos que resaltan la autenticidad de tu proyecto creando imágenes que conectan y cautivan a tu audiencia de manera única.',
    image: serviceImage3,
  },
  {
    id: 4,
    title: 'FAMILIAS',
    description:
      'Sesiones que celebran la espera con elegancia y emoción, capturando la belleza, fortaleza y significado de este momento tan especial.',
    image: serviceImage4,
  },
  {
    id: 5,
    title: 'RETRATOS',
    description:
      'Fotografías delicadas y atemporales para preservar los primeros días de vida con una composición suave, íntima y llena de ternura.',
    image: serviceImage5,
  },
  {
    id: 6,
    title: 'COMERCIAL',
    description:
      'Fotografías delicadas y atemporales para preservar los primeros días de vida con una composición suave, íntima y llena de ternura.',
    image: serviceImage5,
  },
];

function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  const currentService = services[currentIndex];
  const counter = `${currentIndex + 1} / ${services.length}`;

  return (
    <section className="services-carousel">
      <div className="services-carousel__container">
        <div className="services-carousel__layout">
          <div className="services-carousel__media">
            <img
              src={currentService.image}
              alt={currentService.title}
              className="services-carousel__image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="services-carousel__content">
            <div className="services-carousel__topbar">
              <span className="services-carousel__label">SERVICIOS</span>
              <span className="services-carousel__counter">{counter}</span>
            </div>

            <div className="services-carousel__body">
              <h2 className="services-carousel__title">
                {currentService.title}
              </h2>

              <p className="services-carousel__description">
                {currentService.description}
              </p>

              <div className="services-carousel__controls">
                <button
                  type="button"
                  className="services-carousel__arrow services-carousel__arrow--prev"
                  onClick={handlePrevious}
                  aria-label="Servicio anterior"
                >
                  <img
                    src={arrowPrev}
                    alt=""
                    aria-hidden="true"
                    className="services-carousel__arrow-image"
                    loading="lazy"
                    decoding="async"
                  />
                </button>

                <button
                  type="button"
                  className="services-carousel__arrow services-carousel__arrow--next"
                  onClick={handleNext}
                  aria-label="Siguiente servicio"
                >
                  <img
                    src={arrowNext}
                    alt=""
                    aria-hidden="true"
                    className="services-carousel__arrow-image"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </div>

             <button type="button" className="services-carousel__button">
  <span className="services-carousel__button-text">
    Ver proyectos
  </span>

  <span className="services-carousel__button-icon">
    <img src={flechaIcon} alt="" aria-hidden="true" />
  </span>
</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCarousel;