import '../../Styles/Servicios/MenuServicios.css';

type MenuItem = {
  id: string;
  label: string;
};

type MenuServiciosProps = {
  activeItem: string;
  onChange: (id: string) => void;
};

const menuItems: MenuItem[] = [
  { id: 'newborn', label: 'Recién nacidos' },
    { id: 'embarazo', label: 'Sesiones de maternidad' },

  { id: 'sitter', label: 'Sitter / bebés / niñ@s' },
  { id: 'familiar', label: 'Familias' },
  { id: 'retrato', label: 'Retratos' },
];

function MenuServicios({ activeItem, onChange }: MenuServiciosProps) {
  return (
    <aside className="menu-servicios" aria-label="Menú de servicios">
      <div className="menu-servicios__list">
        {menuItems.map((item) => {
          const isActive = activeItem === item.id;

          return (
            <button
              key={item.id}
              type="button"
              className={`menu-servicios__item ${
                isActive ? 'menu-servicios__item--active' : ''
              }`}
              onClick={() => onChange(item.id)}
              aria-pressed={isActive}
            >
              <span className="menu-servicios__dot" aria-hidden="true" />
              <span className="menu-servicios__label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default MenuServicios;