import { useEffect, useState } from 'react';
import '../../Styles/Home/TestimonialsSection.css';

import imageOne from '../../../../public/img/1/1.7.webp';
import imageTwo from '../../../../public/img/1/1.8.webp';
import imageThree from '../../../../public/img/1/1.9.webp';
import ornamentImage from '../../../../public/img/1/1.12.png';

type TestimonialImage = {
  id: number;
  image: string;
  alt: string;
};

const testimonialImages: TestimonialImage[] = [
  {
    id: 1,
    image: imageOne,
    alt: 'Imagen izquierda',
  },
  {
    id: 2,
    image: imageTwo,
    alt: 'Imagen central',
  },
  {
    id: 3,
    image: imageThree,
    alt: 'Imagen derecha',
  },
];

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonialImages.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  const getWrappedIndex = (index: number) => {
    const total = testimonialImages.length;
    return (index + total) % total;
  };

  const leftIndex = getWrappedIndex(currentIndex - 1);
  const centerIndex = getWrappedIndex(currentIndex);
  const rightIndex = getWrappedIndex(currentIndex + 1);

  return (
    <section className="testimonials-section">
      <div className="testimonials-section__container">
        <div className="testimonials-section__header">
          <span className="testimonials-section__eyebrow">DONDE LA</span>

          <h2 className="testimonials-section__title">
            EXPERIENCIA HABLA
          </h2>

          <img
            src={ornamentImage}
            alt=""
            aria-hidden="true"
            className="testimonials-section__ornament"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="testimonials-section__carousel">
          <div className="testimonials-section__track">
            <div className="testimonials-section__item testimonials-section__item--side">
              <img
                src={testimonialImages[leftIndex].image}
                alt={testimonialImages[leftIndex].alt}
                className="testimonials-section__image testimonials-section__image--side"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="testimonials-section__item testimonials-section__item--center">
              <img
                src={testimonialImages[centerIndex].image}
                alt={testimonialImages[centerIndex].alt}
                className="testimonials-section__image testimonials-section__image--center"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="testimonials-section__item testimonials-section__item--side">
              <img
                src={testimonialImages[rightIndex].image}
                alt={testimonialImages[rightIndex].alt}
                className="testimonials-section__image testimonials-section__image--side"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;