import { useEffect, useState } from 'react';
import MenuServicios from '../Component/Servicios/MenuServicios';
import '../Styles/Servicios/ServiciosLayout.css';

import EmbarazoPage from '../Component/Servicios/Embarazo/EmbarazoPage';
import FamiliarPage from '../Component/Servicios/Familiar/FamiliaPage';
import NewbornPage from '../Component/Servicios/Newborn/NewbornPage';
import RetratoPage from '../Component/Servicios/Retrato/RetratoPage';
import SitterPage from '../Component/Servicios/Sitter/SitterPage';

type ServiceId =
  | 'embarazo'
  | 'newborn'
  | 'sitter'
  | 'familiar'
  | 'retrato';

function ServiciosLayout() {
  const [activeService, setActiveService] = useState<ServiceId>('newborn');
  const [menuStopped, setMenuStopped] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [activeService]);

  useEffect(() => {
    const handleScroll = () => {
      const page = document.querySelector('.servicios-page') as HTMLElement | null;
      const menu = document.querySelector('.servicios-page__menu-overlay') as HTMLElement | null;

      if (!page || !menu) return;

      const pageRect = page.getBoundingClientRect();
      const menuHeight = menu.offsetHeight;

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
      const limitPoint = topOffset + menuHeight;

      setMenuStopped(pageBottomInViewport <= limitPoint);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const renderActiveView = () => {
    switch (activeService) {
      case 'embarazo':
        return <EmbarazoPage />;
      case 'newborn':
        return <NewbornPage />;
      case 'sitter':
        return <SitterPage />;
      case 'familiar':
        return <FamiliarPage />;
      case 'retrato':
        return <RetratoPage />;
      default:
        return <EmbarazoPage />;
    }
  };

  return (
    <section className="servicios-page">
      <div
        className={`servicios-page__menu-overlay ${
          menuStopped ? 'servicios-page__menu-overlay--stopped' : ''
        }`}
      >
        <MenuServicios
          activeItem={activeService}
          onChange={(id) => setActiveService(id as ServiceId)}
        />
      </div>

      <div className="page-width-shell">
        <div className="page-width-shell__inner">
          <div className="page-width-shell__content">
            <div className="servicios-page__view">{renderActiveView()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiciosLayout;