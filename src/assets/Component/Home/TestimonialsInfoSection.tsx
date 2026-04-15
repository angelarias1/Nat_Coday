import React from 'react';
import '../../Styles/Home/TestimonialsInfoSection.css';

type TestimonialItem = {
  id: number;
  text: string;
  author: string;
};

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    text: 'Marty, you interacted with anybody else today, besides me? Really. Wait a minute, what are you doing, Doc? Marty, why are you so nervous? No, Doc.',
    author: 'OLIVIA P.',
  },
  {
    id: 2,
    text: 'Marty, you interacted with anybody else today, besides me? Really. Wait a minute, what are you doing, Doc? Marty, why are you so nervous? No, Doc.',
    author: 'SARAH P.',
  },
  {
    id: 3,
    text: 'Marty, you interacted with anybody else today, besides me? Really. Wait a minute, what are you doing, Doc? Marty, why are you so nervous? No, Doc.',
    author: 'RUTH F.',
  },
];

const TestimonialsInfoSection: React.FC = () => {
  return (
    <section className="testimonials-info">
      <div className="testimonials-info__container">
        <div className="testimonials-info__grid">
          {testimonials.map((item) => (
            <article className="testimonials-info__card" key={item.id}>
              <p className="testimonials-info__text">{item.text}</p>

              <div className="testimonials-info__stars" aria-label="5 estrellas">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

              <h3 className="testimonials-info__author">{item.author}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsInfoSection;