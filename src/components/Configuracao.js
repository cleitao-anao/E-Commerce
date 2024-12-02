import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './configuracao.css';

const Configuracoes = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated'); // Remove autenticação do localStorage
    onLogout(); // Atualiza o estado de autenticação
    navigate('/'); // Redireciona para a Home
  };

  return (
    <div className="container">
      <h1>
        <i className="bi bi-credit-card"></i>
        <Link to="/MetodosPagamento" className="pagamento-link">Pagamentos</Link>
      </h1>
      <p>Meus saldos e cartões</p>
      <hr />
      
      <section>
        <h2><i className="bi bi-basket"></i><Link to="/favoritos" className="pagamento-link">Pedidos</Link></h2>
        <p>Meus pedidos</p>
        <hr />
      </section>
      
      <section>
        <h2><i className="bi bi-geo-alt"></i>Endereços</h2>
        <p>Meus endereços</p>
        <hr />
      </section>
      
      <section>
        <h2><i className="bi bi-clipboard-data"></i>Meus dados</h2>
        <p>Dados pessoais</p>
        <hr />
      </section>
      
      <section>
        <h2><i className="bi bi-chat-dots"></i>Conversas</h2>
        <p>Minhas conversas</p>
        <hr />
      </section>

      <section>
        <h2><i className=" bi bi-box-arrow-right"></i>Logout</h2>
        <button className="logout-button" onClick={handleLogout}>Sair</button>
      </section>
    </div>
  );
};

export default Configuracoes;