import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Athkar from './components/athkar/Athkar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* مكون الأذكار على مستوى الموقع كله */}
        <Athkar />
        
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;