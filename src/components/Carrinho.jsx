import React from 'react';
import { useStore } from '../store'; // Certifique-se de ajustar o caminho
import './Carrinho.css';

const Carrinho = () => {
  const { products, totalItems, totalPrice, addToCart, removeFromCart, clearCart } = useStore();

  return (
    <div className="cart-container">
      <h1>Carrinho de Compras</h1>
      {products.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
  {products.map((product) => (
    <li key={product.id}>
      <img src={product.image} alt={product.name} style={{ width: '50px' }} />
      <div>
      {product.name} - {product.quantity}x R${(product.new_price || 0).toFixed(2)}
      </div>
      <button onClick={() => addToCart(product)}>Adicionar</button>
      <button onClick={() => removeFromCart(product.id)}>Remover</button>
    </li>
  ))}
</ul>

      )}
      <p>Total de itens: {totalItems()}</p>
      <p>Preço total: R${totalPrice().toFixed(2)}</p>
      <button className="clear-cart" onClick={clearCart}>
        Esvaziar Carrinho
      </button>
    </div>
  );
};

export default Carrinho;
