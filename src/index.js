import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Calendar from './componentes/routes/calendar';
import Settings from './componentes/routes/settings';
import HomePage from './componentes/routes/home';
import TelaLogin from 'paginas/login';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
