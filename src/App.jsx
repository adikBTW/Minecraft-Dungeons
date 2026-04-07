import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemsPage from './pages/ItemsPage';
import EnchantmentsPage from './pages/EnchantmentsPage';
import './App.css';
import CosmeticsPage from './pages/CosmeticsPage';
import HomePage from './pages/HomePage';

function App() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <Router>
      <Navbar settingsOpen={settingsOpen} setSettingsOpen={setSettingsOpen} />
      <Routes>
        <Route path="/"             element={<HomePage />} />
        <Route path="/weapons"      element={<ItemsPage types={['Melee','Ranged']} title="Weapons" />} />
        <Route path="/armor"        element={<ItemsPage types={['Armor']}          title="Armor" />} />
        <Route path="/artifacts"    element={<ItemsPage types={['Artifact']}       title="Artifacts" />} />
        <Route path="/enchantments" element={<EnchantmentsPage />} />
        <Route path="/cosmetics"    element={<CosmeticsPage />} />
        <Route path="/mobs"         element={<ItemsPage types={['Mob']}            title="Mobs" />} />
      </Routes>
    </Router>
  );
}

export default App;