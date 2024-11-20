import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Configuracao from './components/Configuracao';
import MetodosPagamento from './components/MetodosPagamento';
import Carrinho from './components/Carrinho';
import './assets/css/styles.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true);
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/configuracao" element={<Configuracao onLogout={handleLogout} />} />
        <Route path="/MetodosPagamento" element={<MetodosPagamento />} />
        <Route path="/Carrinho" element={<Carrinho />} />
      </Routes>
    </div>
  );
}

export default App;
