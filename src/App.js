import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import ContextProvider from './context/Context';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Configuracao from './components/Configuracao';
import MetodosPagamento from './components/MetodosPagamento';
import Carrinho from './components/Carrinho';
import Produtos from './components/Produtos';
import AdicionarProduto from './components/AdicionarProduto';
import './assets/css/styles.css';
import NavBar from './components/NavBar';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  return (
    <ContextProvider>
      <div className="App">
      <NavBar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/produtos/:produtosId" element={<Produtos />} />
          <Route path="/register" element={<Register onRegister={handleLogin} />} />
          <Route path="/configuracao" element={<Configuracao onLogout={handleLogout} />} />
          <Route path="/MetodosPagamento" element={<MetodosPagamento />} />
          <Route path="/Carrinho" element={<Carrinho />} />
          <Route path="/AdicionarProduto" element={<AdicionarProduto />} />
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
