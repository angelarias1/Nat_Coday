import { useEffect, useMemo, useRef, useState } from 'react';
import ProyectosIntro from '../Component/Proyectos/ProyectosIntro';
import MenuProyectos from '../Component/Proyectos/MenuProyectos';
import Newborn1 from '../Component/Proyectos/Newborn1';
import Newborn2 from '../Component/Proyectos/Newborn2';
import Maternidad from '../Component/Proyectos/Maternidad';
import Familia from '../Component/Proyectos/Familia';
import Cliente1 from '../Component/Proyectos/Cliente1';
import Cliente2 from '../Component/Proyectos/Cliente2';
import '../Styles/Proyectos/ProyectosPage.css';

type SectionId =
  | 'proyectos'
  | 'newborn-1'
  | 'newborn-2'
  | 'maternidad'
  | 'familia'
  | 'cliente-1'
  | 'cliente-2';

function ProyectosPage() {
  const [activeCategory, setActiveCategory] = useState<SectionId>('proyectos');

  const proyectosRef = useRef<HTMLElement | null>(null);
  const newborn1Ref = useRef<HTMLElement | null>(null);
  const newborn2Ref = useRef<HTMLElement | null>(null);
  const maternidadRef = useRef<HTMLElement | null>(null);
  const familiaRef = useRef<HTMLElement | null>(null);
  const cliente1Ref = useRef<HTMLElement | null>(null);
  const cliente2Ref = useRef<HTMLElement | null>(null);

  const sections = useMemo(
    () => [
      { id: 'proyectos' as SectionId, ref: proyectosRef },
      { id: 'newborn-1' as SectionId, ref: newborn1Ref },
      { id: 'newborn-2' as SectionId, ref: newborn2Ref },
      { id: 'maternidad' as SectionId, ref: maternidadRef },
      { id: 'familia' as SectionId, ref: familiaRef },
      { id: 'cliente-1' as SectionId, ref: cliente1Ref },
      { id: 'cliente-2' as SectionId, ref: cliente2Ref },
    ],
    []
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          const sectionId = visibleEntries[0].target.getAttribute(
            'data-section-id'
          ) as SectionId;

          if (sectionId) {
            setActiveCategory(sectionId);
          }
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  const handleMenuChange = (id: string) => {
    const targetSection = sections.find((section) => section.id === id);

    if (targetSection?.ref.current) {
      targetSection.ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="proyectos-page">
      <div className="proyectos-page__menu-overlay">
        <MenuProyectos
          activeItem={activeCategory}
          onChange={handleMenuChange}
        />
      </div>

      <div className="page-width-shell">
        <div className="page-width-shell__inner">
          <div className="page-width-shell__content">
            <section
              ref={proyectosRef}
              data-section-id="proyectos"
              className="proyectos-page__section"
            >
              <ProyectosIntro />
            </section>

            <section
              ref={newborn1Ref}
              data-section-id="newborn-1"
              className="proyectos-page__section"
            >
              <Newborn1 />
            </section>

            <section
              ref={newborn2Ref}
              data-section-id="newborn-2"
              className="proyectos-page__section"
            >
              <Newborn2 />
            </section>

            <section
              ref={maternidadRef}
              data-section-id="maternidad"
              className="proyectos-page__section"
            >
              <Maternidad />
            </section>

            <section
              ref={familiaRef}
              data-section-id="familia"
              className="proyectos-page__section"
            >
              <Familia />
            </section>

            <section
              ref={cliente1Ref}
              data-section-id="cliente-1"
              className="proyectos-page__section"
            >
              <Cliente1 />
            </section>

            <section
              ref={cliente2Ref}
              data-section-id="cliente-2"
              className="proyectos-page__section"
            >
              <Cliente2 />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProyectosPage;