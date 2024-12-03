import React from 'react';
import { useStore } from '../store'; // Certifique-se de ajustar o caminho
import Headset from './Popular/Headset';
import Mouse from './Popular/Mouse';
import Teclados from './Popular/Teclados'; 

function Home({  }) {
 
  const catalogProducts = useStore((state) => state.catalogProducts); // Acessa os produtos do catálogo
  const removeProduct = useStore((state) => state.removeProduct); // Função para remover produto do catálogo

  // Função para remover produto
  const handleRemoveProduct = (productId) => {
    removeProduct(productId); // Chama a função da store para remover o produto
  };

  return (
    <div>
      <main>
        <h2 className='titulocomerce'>Bem-vindo ao nosso E-commerce!</h2>
        <p className='descricao'>Explore nossos produtos e encontre o que você precisa.</p>
      </main>

      {/* Produtos do catálogo */}
      <div className="produtos-exibidos">
        <h3 className='titulocomerce'>Produtos do Catálogo</h3>
        <div className="produtos-lista">
          {catalogProducts.map((product) => (
            <div key={product.id} className="produto">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>R${product.new_price}</p>
              <p className="discount">R${product.new_discount}</p>
              <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
            </div>
          ))}
        </div>
      </div>
      <Headset />
      <Mouse />
      <Teclados />
    </div>
  );
}

export default Home;