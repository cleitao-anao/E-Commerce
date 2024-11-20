import React from 'react';
import { Link } from 'react-router-dom'; // Importe o Link do React Router
import perfilIcon from '../icons/perfil.png'; // Ajuste o caminho conforme necessário
import carrinhoIcon from '../icons/carrinhos-de-compras.png'; // Ajuste o caminho conforme necessário
import Popular from './Popular/Popular';
import { useStore } from '../store'; // Certifique-se de ajustar o caminho

function Home({ isAuthenticated }) {
  const totalItems = useStore((state) => state.totalItems());

  return (
    <div>
      <header className="top-bar">
        <div className="left">
          <h1>E-commerce</h1>
        </div>

        <div className="center">
          <input type="text" placeholder="Pesquisar produtos..." />
          <div className="filter-dropdown">
            <button className="filter-button">Categorias</button>
            <div className="dropdown-content">
              <a href="#">Shop</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Kids</a>
            </div>
          </div>
        </div>

        <div className="right">
          {!isAuthenticated ? (
            <a href="/login" className="login-button" id="loginButton">Login</a>
          ) : (
            <div className="profile-cart">
              <a href="/configuracao">
                <img src={perfilIcon} alt="Ícone de Perfil" className="icon" />
              </a>
              <Link to="/carrinho">
                <div className="cart-icon-wrapper">
                  <img src={carrinhoIcon} alt="Carrinho" className="icon" />
                  {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </div>
              </Link>
            </div>
          )}
        </div>
      </header>

      <main>
        <h2>Bem-vindo ao nosso E-commerce!</h2>
        <p>Explore nossos produtos e encontre o que você precisa.</p>
      </main>
      <Popular />
    </div>
  );
}

export default Home;
