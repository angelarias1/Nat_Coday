import '../../Styles/Proyectos/MenuProyectos.css';

type MenuItem = {
  id: string;
  label: string;
};

type MenuProyectosProps = {
  activeItem: string;
  onChange: (id: string) => void;
};

const menuItems: MenuItem[] = [
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'newborn-1', label: 'Newborn' },
  { id: 'newborn-2', label: 'Newborn' },
  { id: 'maternidad', label: 'Maternidad' },
  { id: 'familia', label: 'Familia' },
  { id: 'cliente-1', label: 'Cliente' },
  { id: 'cliente-2', label: 'Cliente' },
];

function MenuProyectos({ activeItem, onChange }: MenuProyectosProps) {
  return (
    <aside className="menu-proyectos" aria-label="Menú de proyectos">
      <div className="menu-proyectos__list">
        {menuItems.map((item) => {
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`menu-proyectos__item ${
                isActive ? 'menu-proyectos__item--active' : ''
              }`}
              onClick={() => onChange(item.id)}
              aria-pressed={isActive}
            >
              <span className="menu-proyectos__dot" aria-hidden="true" />
              <span className="menu-proyectos__label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default MenuProyectos;