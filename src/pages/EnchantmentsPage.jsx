import { useState } from 'react';
import { enchantments, getEnchantmentImagePath } from '../data/enchantments';
import './EnchantmentsPage.css';

const CATEGORIES = ['All', 'Melee', 'Ranged', 'Armor'];

const EnchantImage = ({ name }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();

  return (
    <div className="item-img-box">
      {!failed ? (
        <img
          src={getEnchantmentImagePath(name)}
          alt={name}
          className="item-img"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="item-initials">{initials}</span>
      )}
    </div>
  );
};

const EnchantmentsPage = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = enchantments.filter(e => {
    const matchCat = category === 'All' || e.category === category;
    const matchSearch = e.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="page">


      <div className="filter-bar">
        <span className="filter-count">ENCHANTMENTS — {filtered.length} ITEMS</span>
        <input
          type="text"
          placeholder="Search enchantments..."
          value={search}
          onChange={e => { setSearch(e.target.value); setSelected(null); }}
          className="w-search"
        />
        <div className="filter-group">
          {CATEGORIES.map(c => (
            <button
              key={c}
              className={`filter-btn${category === c ? ' active' : ''}`}
              onClick={() => setCategory(c)}
            >{c}</button>
          ))}
        </div>
      </div>

      <div className={`items-layout${selected ? ' has-detail' : ''}`}>

        <div className="items-grid">
          {filtered.length === 0 && <p className="no-results">No enchantments found.</p>}
          {filtered.map((e, i) => (
            <div
              key={i}
              className={`item-card${selected?.name === e.name && selected?.category === e.category ? ' selected' : ''}`}
              onClick={() => setSelected(e)}
            >
              <EnchantImage name={e.name} />
              <div className="ic-name">{e.name}</div>
              <div className="ic-type">{e.category}</div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="detail-panel">
            <button className="detail-close" onClick={() => setSelected(null)}>✕</button>
            <EnchantImage name={selected.name} />
            <h2 className="detail-name">{selected.name}</h2>
            <span className="type-tag">{selected.category}</span>
            <p className="detail-desc">{selected.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnchantmentsPage;