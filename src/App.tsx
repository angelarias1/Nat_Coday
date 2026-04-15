import { Routes, Route } from 'react-router-dom';
import Navbar from './assets/Component/Navbar';
import Footer from './assets/Component/Footer';
import HomePage from './assets/Pages/HomePage';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;