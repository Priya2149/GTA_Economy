// src/components/MenuBar.js
import { Link } from 'react-router-dom';

const MenuBar = () => (
  <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <h1 className="text-xl font-bold">GTA NFT Economy</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/creator-dashboard">Creator Dashboard</Link>
        <Link to="/marketplace">Marketplace</Link>
      </div>
    </div>
  </nav>
);

export default MenuBar;
