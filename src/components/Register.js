// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './conta.css';

function Register({ onRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Salva o novo usuário no local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.email === email);

    if (userExists) {
      alert('Esse e-mail já está registrado.');
      return;
    }

    const newUser = { email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    onRegister(); // Chama a função passada como props
    navigate('/'); // Redireciona para a Home
  };

  return (
    <div class='bloco'>
      <h2 class='titulado'>Página de Registro</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label>Email:</label>
          <input 
            class='email'
            type="email" 
            value={email} 
            placeholder='Email...'
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Senha:</label>
          <input
            class='senha' 
            type="password" 
            value={password} 
            placeholder='Senha...'
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button class='butao' type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
