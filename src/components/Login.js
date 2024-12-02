// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './conta.css'

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
    <div class='bloco'>
      <h2 class='titulado'>Página de Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder='Email...'
            value={email}
            class='email'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Senha:</label>
          <input 
            type="password"
            class='senha'
            value={password}
            placeholder='Senha...'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button class='butao' type="submit" disabled={loading}>
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
      </form>
      <p class='textinho'>Não tem uma conta? <Link to="/register">Registre-se aqui!</Link></p>
    </div>
  );
}

export default Login;
