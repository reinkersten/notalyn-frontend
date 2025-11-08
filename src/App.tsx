import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Flows } from './pages/Flows';
import { Onboarding } from './pages/Onboarding';
import { Learner } from './pages/Learner';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/flows' element={<Flows />} />
        <Route path='/onboarding' element={<Onboarding />} />
        <Route path='/learner' element={<Learner />} />
      </Routes>
    </Router>
  );
}
export default App;
