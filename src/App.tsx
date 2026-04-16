import { Routes, Route } from 'react-router-dom';

import Navbar from './assets/Component/Navbar';
import Footer from './assets/Component/Footer';

import HomePage from './assets/Pages/HomePage';
import ProyectosPage from './assets/Pages/ProyectosPage';
import BioPage from './assets/Pages/BioPage';
import ServiciosPage from './assets/Pages/ServiciosPage';
import ContactoPage from './assets/Pages/ContactoPage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/servicios" element={<ServiciosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;