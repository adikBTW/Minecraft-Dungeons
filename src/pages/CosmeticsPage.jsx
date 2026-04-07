import { useState } from 'react';
import { cosmetics, getCosmeticImagePath } from '../data/cosmetics';
import './CosmeticsPage.css';

const CosmeticImage = ({ name }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();

  return (
    <div className="item-img-box">
      {!failed ? (
        <img
          src={getCosmeticImagePath(name)}
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

const CosmeticsPage = () => {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = cosmetics.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="filter-bar">
        <span className="filter-count">COSMETICS — {filtered.length} ITEMS</span>
        <input
          type="text"
          placeholder="Search cosmetics..."
          value={search}
          onChange={e => { setSearch(e.target.value); setSelected(null); }}
          className="w-search"
        />
      </div>

      <div className={`items-layout${selected ? ' has-detail' : ''}`}>
        <div className="items-grid">
          {filtered.length === 0 && <p className="no-results">No cosmetics found.</p>}
          {filtered.map((c, i) => (
            <div
              key={i}
              className={`item-card${selected?.name === c.name ? ' selected' : ''}`}
              onClick={() => setSelected(c)}
            >
              <CosmeticImage name={c.name} />
              <div className="ic-name">{c.name}</div>
              <div className="ic-type">Pet</div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="detail-panel">
            <button className="detail-close" onClick={() => setSelected(null)}>✕</button>
            <CosmeticImage name={selected.name} />
            <h2 className="detail-name">{selected.name}</h2>
            <span className="type-tag">Pet Cosmetic</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CosmeticsPage;