import Hero from '../Component/Home/Hero';
import ExpertSection from '../Component/Home/ExpertSection';
import ServicesCarousel from '../Component/Home/ServicesCarousel';
import GallerySection from '../Component/Home/GallerySection';
import TestimonialsSection from '../Component/Home/TestimonialsSection';
import TestimonialsInfoSection from '../Component/Home/TestimonialsInfoSection';
import LargeImageSection from '../Component/Home/LargeImageSection';

function HomePage() {
  return (
    <>
      <Hero />
      <ExpertSection />
      <ServicesCarousel />
      <GallerySection />
      <TestimonialsSection />
      <TestimonialsInfoSection />
      <LargeImageSection />
    </>
  );
}

export default HomePage;