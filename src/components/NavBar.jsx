// src/components/NavBar.jsx

import React from "react";
import { Link } from "react-router-dom"; 
import perfilIcon from "../icons/perfil.png"; 
import carrinhoIcon from "../icons/carrinhos-de-compras.png"; 
import image from "./image.png";
import { useStore } from "../store"; 

function NavBar({ isAuthenticated, handleLogout }) {
  const totalItems = useStore((state) => state.totalItems());

  return (
    <header className="top-bar">
      <div className="left">
        <Link to="/" className="logo">
          <h1 className="titulo">LookPixel</h1>
          <img src={image} alt="Descrição da imagem" className="logoDino" style={{ marginLeft: '10px', height: '40px' }} /> {/* Ajuste a altura conforme necessário */}
        </Link>
      </div>

      <div className="center">
        <input type="text" placeholder="Pesquisar produtos..." />
        <div className="filter-dropdown">
          <button className="filter-button">Categorias</button>
          <span className="caret"></span>
          <div className="dropdown-content">
            <a href="#">Headsets</a>
            <a href="#">Mouses</a>
            <a href="#">Teclados</a>
            <a href="#">Peças</a>
          </div>
        </div>
      </div>

      <div className="right">
        {!isAuthenticated ? (
          <Link to="/login" className="login-button">Login</Link>
        ) : (
          <div className="profile-cart">
            <Link to="/configuracao">
              <img src={perfilIcon} alt="Ícone de Perfil" className="icon" />
            </Link>
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
  );
}

export default NavBar;