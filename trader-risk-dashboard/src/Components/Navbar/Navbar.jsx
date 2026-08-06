import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="brand-dot"></span>
        Trader Risk Dashboard
      </div>
      <div className="nav-links">
        <span className="active">Dashboard</span>
        <span>Trades</span>
        <span>Reports</span>
        <span>Profile</span>
        <span className="logout">Logout</span>
      </div>
    </nav>
  );
}