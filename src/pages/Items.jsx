import { useState } from 'react';
import { allItems, getImagePath, getStats } from '../data/items';
import './Items.css';

const TYPES = ['All', 'Melee', 'Ranged', 'Armor', 'Artifact'];

const RARITY_COLOR = {
  Common: '#8a8a8a',
  Rare:   '#4a9eff',
  Unique: '#ff9a00',
};

const StatBar = ({ label, value }) => (
  <div className="stat-row">
    <span className="stat-label">{label}</span>
    <div className="stat-track">
      <div className="stat-fill" style={{ width: `${value}%` }} />
    </div>
  </div>
);

const ItemImage = ({ name, type }) => {
  const [failed, setFailed] = useState(false);
  const initials = name.split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase();
  return (
    <div className="item-img-box">
      {!failed ? (
        <img src={getImagePath(name, type)} alt={name} className="item-img"
          onError={() => setFailed(true)} />
      ) : (
        <span className="item-initials">{initials}</span>
      )}
    </div>
  );
};

const Items = () => {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = allItems.filter(item => {
    const matchType = activeType === 'All' || item.type === activeType;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const showStats = selected && (selected.type === 'Melee' || selected.type === 'Ranged');
  const stats = showStats && typeof getStats === 'function'
    ? getStats(selected.name, selected.type)
    : null;

  return (
    <div className="page">
      <div className="filter-bar">
        <span className="filter-count">{filtered.length} ITEMS</span>
        <input type="text" placeholder="Search..." value={search}
          onChange={e => setSearch(e.target.value)} className="w-search" />
        <div className="filter-group">
          {TYPES.map(t => (
            <button key={t}
              className={`filter-btn${activeType === t ? ' active' : ''}`}
              onClick={() => setActiveType(t)}>{t}</button>
          ))}
        </div>
      </div>

      <div className={`items-layout${selected ? ' has-detail' : ''}`}>
        <div className="items-grid">
          {filtered.length === 0 && <p className="no-results">No items found.</p>}
          {filtered.map((item, i) => (
            <div key={i}
              className={`item-card${selected?.name === item.name ? ' selected' : ''}`}
              onClick={() => setSelected(item)}>
              <ItemImage name={item.name} type={item.type} />
              <div className="ic-name">{item.name}</div>
              <div className="ic-type">{item.type}</div>
            </div>
          ))}
        </div>

        {selected && (
          <div className="detail-panel">
            <button className="detail-close" onClick={() => setSelected(null)}>✕</button>

            {stats && (
              <div className="rarity-badge" style={{
                color: RARITY_COLOR[stats.rarity],
                borderColor: RARITY_COLOR[stats.rarity]
              }}>
                {stats.rarity}
              </div>
            )}

            <ItemImage name={selected.name} type={selected.type} />
            <h2 className="detail-name">{selected.name}</h2>
            <span className={`type-tag type-${selected.type.toLowerCase()}`}>{selected.type}</span>

            {stats ? (
              <div className="detail-stats">
                <div className="damage-range">
                  ⚔ {stats.dmgMin}–{stats.dmgMax}{' '}
                  <span className="dmg-label">
                    {selected.type === 'Ranged' ? 'ranged damage' : 'melee damage'}
                  </span>
                </div>
                <div className="stat-bars">
                  <StatBar label="POWER" value={stats.power} />
                  <StatBar label="SPEED" value={stats.speed} />
                  <StatBar label="AREA"  value={stats.area}  />
                </div>
              </div>
            ) : showStats ? (
              <p style={{fontSize:'0.75rem',color:'#999'}}>Stats unavailable — check console</p>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;