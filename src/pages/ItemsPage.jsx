import { useState } from 'react';
import { allItems, getImagePath, getStats, calcDamage } from '../data/items';
import './ItemsPage.css';

const SUBFILTERS = {
  Weapons:      ['All', 'Melee', 'Ranged'],
  Armor:        [],
  Artifacts:    [],
  Enchantments: [],
  Mobs:         [],
};

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

const ItemsPage = ({ types, title }) => {
  const [search, setSearch] = useState('');
  const [subFilter, setSubFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [powerLevel, setPowerLevel] = useState(1);

  const subFilters = SUBFILTERS[title] || [];

  const filtered = allItems.filter(item => {
    const matchType = types.includes(item.type);
    const matchSub = subFilter === 'All' || !subFilters.length || item.type === subFilter;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSub && matchSearch;
  });

  const showStats = selected && (selected.type === 'Melee' || selected.type === 'Ranged');
  const stats = showStats ? getStats(selected.name, selected.type) : null;
  const damage = showStats ? calcDamage(selected.name, powerLevel) : null;

  return (
    <div className="page">
      <div className="filter-bar">
        <span className="filter-count">{title.toUpperCase()} — {filtered.length} ITEMS</span>
        <input
          type="text"
          placeholder={`Search ${title.toLowerCase()}...`}
          value={search}
          onChange={e => { setSearch(e.target.value); setSelected(null); }}
          className="w-search"
        />
        {subFilters.length > 0 && (
          <div className="filter-group">
            {subFilters.map(f => (
              <button key={f}
                className={`filter-btn${subFilter === f ? ' active' : ''}`}
                onClick={() => setSubFilter(f)}>{f}</button>
            ))}
          </div>
        )}
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
            <span className="type-tag">{selected.type}</span>

            {selected.ability && (
              <div className="detail-ability">
                <span className="ability-icon">⚡</span> {selected.ability}
              </div>
            )}
            {selected.description && (
              <p className="detail-desc">{selected.description}</p>
            )}

            {stats && (
              <div className="detail-stats">
                <div className="power-level-row">
                  <span className="stat-label">LEVEL</span>
                  <input
                    type="range"
                    min={1} max={263}
                    value={powerLevel}
                    onChange={e => setPowerLevel(Number(e.target.value))}
                    className="level-slider"
                  />
                  <span className="level-value">{powerLevel}</span>
                </div>

                <div className="damage-range">
                  ⚔ {damage ? `${damage[0]}–${damage[1]}` : `${stats.dmgMin}–${stats.dmgMax}`}{' '}
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
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsPage;