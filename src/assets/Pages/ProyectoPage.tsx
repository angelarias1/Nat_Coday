import { useEffect, useRef, useState } from 'react';
import FichaProyecto from '../Component/Proyecto/FichaProyecto';

import IntroProyecto from '../Component/Proyecto/IntroProyecto';
import Imagenes1 from '../Component/Proyecto/Imagenes1';
import Imagen1 from '../Component/Proyecto/Imagen1';
import Imagen2 from '../Component/Proyecto/Imagen2';
import Imagen3 from '../Component/Proyecto/Imagen3';
import Imagenes2 from '../Component/Proyecto/Imagenes2';

import '../Styles/Proyecto/ProyectoPage.css';
import ImagenV from '../Component/Proyecto/ImagenV';

function ProyectoPage() {
  const [fichaStopped, setFichaStopped] = useState(false);

  const pageRef = useRef<HTMLElement | null>(null);
  const fichaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!pageRef.current || !fichaRef.current) return;

      const pageRect = pageRef.current.getBoundingClientRect();
      const fichaHeight = fichaRef.current.offsetHeight;

      const desktopTop = 146;
      const tabletTop = 92;
      const mobileTop = 78;

      let topOffset = desktopTop;

      if (window.innerWidth <= 479) {
        topOffset = mobileTop;
      } else if (window.innerWidth <= 1023) {
        topOffset = tabletTop;
      }

      const pageBottomInViewport = pageRect.bottom;
      const limitPoint = topOffset + fichaHeight;

      setFichaStopped(pageBottomInViewport <= limitPoint);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section ref={pageRef} className="proyecto-page">
      <div
        ref={fichaRef}
        className={`proyecto-page__ficha-overlay ${
          fichaStopped ? 'proyecto-page__ficha-overlay--stopped' : ''
        }`}
      >
        <FichaProyecto />
      </div>

      <div className="page-width-shell">
        <div className="page-width-shell__inner">
          <div className="page-width-shell__content">
            <section className="proyecto-page__section">
              <IntroProyecto />
            </section>
            
            <section className="proyecto-page__section">
              <Imagen1 />
            </section>

            <section className="proyecto-page__section">
              <Imagenes1 />
            </section>
            
            <section className="proyecto-page__section">
              <ImagenV />
            </section>
            

            <section className="proyecto-page__section">
              <Imagen2 />
            </section>

            <section className="proyecto-page__section">
              <Imagen3 />
            </section>

            <section className="proyecto-page__section">
              <Imagenes2 />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProyectoPage;