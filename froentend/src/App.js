// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import CreatorDashboard from './pages/Dashboard'; // Updated to CreatorDashboard
import Marketplace from './pages/Marketplace';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <Router>
      <MenuBar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/creator-dashboard" element={<CreatorDashboard />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
