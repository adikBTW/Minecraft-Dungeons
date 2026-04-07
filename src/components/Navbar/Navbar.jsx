import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/weapons',      label: 'Weapons' },
  { to: '/armor',        label: 'Armor' },
  { to: '/artifacts',    label: 'Artifacts' },
  { to: '/enchantments', label: 'Enchantments' },
  { to: '/cosmetics',    label: 'Cosmetics' },
  { to: '/mobs',         label: 'Mobs' },
  { to: '/maps',         label: 'Maps' },
];

const Navbar = ({ settingsOpen, setSettingsOpen }) => {
  const location = useLocation();
  const settingsRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (settingsRef.current && !settingsRef.current.contains(e.target)) {
        setSettingsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [setSettingsOpen]);

  const isActive = (to) =>
    location.pathname === to || (to === '/weapons' && location.pathname === '/');

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-brand">
          DUNGEONS<br />INDEX
        </Link>

        <div className="navbar-links">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`navbar-link${isActive(to) ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="navbar-right">
          <div className="settings-wrapper" ref={settingsRef}>
            <button
              className={`nav-settings-btn${settingsOpen ? ' active' : ''}`}
              onClick={() => setSettingsOpen(o => !o)}
            >
              ⚙ Settings
            </button>

            {settingsOpen && (
              <div className="settings-dropdown">
                <p style={{fontSize: '0.82rem', color: '#999', margin: 0}}>Coming soon...</p>
              </div>
            )}
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;