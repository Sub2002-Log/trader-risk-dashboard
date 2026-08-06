import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Pages/Dashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Dashboard />
      </main>
    </div>
  );
}