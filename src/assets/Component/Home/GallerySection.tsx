import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Home/GallerySection.css';

import galleryImageOne from '../../../../public/img/1/1.4.webp';
import galleryImageTwo from '../../../../public/img/1/1.5.webp';
import galleryImageThree from '../../../../public/img/1/1.6.webp';

import arrowPrev from '../../../../public/img/1/vector 9.png';
import arrowNext from '../../../../public/img/1/vector 10.png';

type GalleryItem = {
  id: number;
  category: string;
  name: string;
  image: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'RETRATO',
    name: 'CAMILA',
    image: galleryImageOne,
    alt: 'Retrato Camila',
  },
  {
    id: 2,
    category: 'FAMILIAS',
    name: 'FAMILIA SUAREZ',
    image: galleryImageTwo,
    alt: 'Familia Suarez',
  },
  {
    id: 3,
    category: 'MATERNIDAD',
    name: 'REGINA',
    image: galleryImageThree,
    alt: 'Maternidad Regina',
  },
];

function getVisibleCards(width: number): number {
  if (width <= 479) return 1;
  if (width <= 1023) return 2;
  return 3;
}

const GallerySection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<number>(() =>
    typeof window !== 'undefined' ? getVisibleCards(window.innerWidth) : 3
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards(window.innerWidth));
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleItems = useMemo(() => {
    const rotated = [
      ...galleryItems.slice(currentIndex),
      ...galleryItems.slice(0, currentIndex),
    ];

    return rotated.slice(0, visibleCards);
  }, [currentIndex, visibleCards]);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="gallery-section">
      <div className="gallery-section__container">
        <span className="gallery-section__eyebrow">GALERÍA</span>

        <div className="gallery-section__top">
          <div className="gallery-section__heading-block">
            <h2 className="gallery-section__title">
              Entre Objetivos y Emociones
            </h2>
          </div>

          <div className="gallery-section__description-block">
            <p className="gallery-section__description">
              Estos son algunos de los proyectos que he podido realizar a lo
              largo del tiempo.
            </p>
          </div>

          <div className="gallery-section__arrows">
            <button
              type="button"
              className="gallery-section__arrow gallery-section__arrow--prev"
              aria-label="Anterior"
              onClick={handlePrevious}
            >
              <img
                src={arrowPrev}
                alt=""
                aria-hidden="true"
                className="gallery-section__arrow-image"
              />
            </button>

            <button
              type="button"
              className="gallery-section__arrow gallery-section__arrow--next"
              aria-label="Siguiente"
              onClick={handleNext}
            >
              <img
                src={arrowNext}
                alt=""
                aria-hidden="true"
                className="gallery-section__arrow-image"
              />
            </button>
          </div>
        </div>

        <div className="gallery-section__grid">
          {visibleItems.map((item) => (
            <Link to="/proyecto" className="gallery-card" key={item.id}>
              <div className="gallery-card__info">
                <span className="gallery-card__category">
                  {item.category}
                </span>

                <h3 className="gallery-card__name">{item.name}</h3>
              </div>

              <div className="gallery-card__image-wrapper">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="gallery-card__image"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;