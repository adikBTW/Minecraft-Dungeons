import { Link } from 'react-router-dom';
import './HomePage.css';

const categories = [
  { to: '/weapons',      label: 'Weapons',      img: '/mcd icons/weapons/MCD_Sword.png' },
  { to: '/armor',        label: 'Armor',         img: '/mcd icons/armor/MCD_Battle_Robe.png' },
  { to: '/enchantments', label: 'Enchantments',  img: '/mcd icons/enchantments/MCD_Sharpness.png' },
  { to: '/artifacts',    label: 'Artifacts',     img: '/mcd icons/artifact/MCD_Totem_of_Casting.png' },
  { to: '/cosmetics',    label: 'Cosmetics',     img: '/mcd icons/pet/MCD_Fox_cosmetic_icon.png' },
  { to: '/mobs',         label: 'Mobs',          img: null },
];

const CategoryCard = ({ to, label, img }) => (
  <Link to={to} className="home-card">
    <div className="home-card-img">
      {img ? (
        <img src={img} alt={label} onError={e => e.target.style.display='none'} />
      ) : (
        <span className="home-card-placeholder">?</span>
      )}
    </div>
    <div className="home-card-label">{label}</div>
  </Link>
);

const HomePage = () => (
  <div className="home-page">
    <div className="home-header">
      <h1 className="home-title">DUNGEONS WIKI</h1>
    </div>
    <div className="home-grid">
      {categories.map(c => (
        <CategoryCard key={c.to} {...c} />
      ))}
    </div>
  </div>
);

export default HomePage;