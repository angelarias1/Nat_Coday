import { useEffect } from 'react';

function ImageReveal() {
  useEffect(() => {
    const images = document.querySelectorAll<HTMLImageElement>(
      'img:not(.hero__image):not([aria-hidden="true"])'
    );

    images.forEach((img) => {
      img.classList.add('image-reveal');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const image = entry.target as HTMLImageElement;

          if (entry.isIntersecting) {
            image.classList.add('image-reveal--visible');
            observer.unobserve(image);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return null;
}

export default ImageReveal;