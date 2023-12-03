// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Certifique-se de importar Routes

import Formulario from './components/Formulario';
import Tabela from './components/Tabela';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Tabela</Link>
            </li>
            <li>
              <Link to="/formulario">Formulário</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          {/* Wrap your routes inside <Routes> */}
          <Route path="/" element={<Tabela />} />
          <Route path="/formulario" element={<Formulario />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
