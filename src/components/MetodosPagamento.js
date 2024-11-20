import React from 'react';
import { Link } from 'react-router-dom';
import './Configuracao.js';

const MetodosPagamento = () => {
  return (
    <div>
      {/* top bar */}
      <div className="top-bar">
        <Link to="/" className="logo">
          <img src="img/lookpixel.png" alt="Logo" />
        </Link>
      </div>

      {/* container principal */}
      <div className="container">
        <h1>
          <i className="bi bi-credit-card" style={{ fontSize: '1.5em' }}></i> Métodos de Pagamento
        </h1>
        <p>Gerencie seus métodos de pagamento abaixo.</p>
        <hr />

        <section>
          <h2>
            <i className="bi bi-credit-card-2-back"></i> Cartão cadastrado
          </h2>
          <div className="card">
            <p>**** **** **** 1234</p>
            <p>Validade: 12/25</p>
            <button className="remove-card">Remover Cartão</button>
          </div>
          <hr />
        </section>

        <button className="add-card">Adicionar Cartão</button>
      </div>
    </div>
  );
};

export default MetodosPagamento;
