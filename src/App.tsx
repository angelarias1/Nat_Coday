import { Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './assets/Component/Navbar';
import Footer from './assets/Component/Footer';
import ScrollToTop from './assets/Component/ScrollToTop';

import HomePage from './assets/Pages/HomePage';
import ProyectosPage from './assets/Pages/ProyectosPage';
import BioPage from './assets/Pages/BioPage';
import ServiciosPage from './assets/Pages/ServiciosLayout';
import ContactoPage from './assets/Pages/ContactoPage';
import ProyectoPage from './assets/Pages/ProyectoPage';
import ImageReveal from './assets/Component/ImageReveal';


function App() {
  const location = useLocation();

  const hideFooter = location.pathname === '/contacto';

  return (
    <>
      <ScrollToTop />
      <ImageReveal />

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/proyecto" element={<ProyectoPage />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
}

export default App;