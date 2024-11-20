// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Verifica se o usuário está registrado
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find(user => user.email === email && user.password === password);

    if (user) {
      setError(null);
      onLogin(); // Chama a função de login
      localStorage.setItem('isAuthenticated', true); // Armazena a sessão no localStorage
      navigate('/'); // Redireciona para a página inicial
    } else {
      setError('Email ou senha incorretos.');
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Página de Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <p>Não tem uma conta? <Link to="/register">Registre-se aqui!</Link></p>
    </div>
  );
}

export default Login;
