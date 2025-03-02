import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Strategies from './pages/Strategies';
import Swap from './pages/Swap';
import Bridge from './pages/Bridge';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/strategies" element={<Strategies />} />
            <Route path="/swap" element={<Swap />} />
            <Route path="/bridge" element={<Bridge />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;