import React from 'react';
import { useStore } from '../store'; // Certifique-se de ajustar o caminho
import Headset from './Popular/Headset';
import Mouse from './Popular/Mouse';
import Teclados from './Popular/Teclados';
import AdicionarProduto from './AdicionarProduto';


function Home() {

  const removeProduct = useStore((state) => state.removeProduct); // Função para remover produto do catálogo

  // Função para remover produto
  const handleRemoveProduct = (productId) => {
    removeProduct(productId); // Chama a função da store para remover o produto
  };

  return (
    

    <div>

      <main>
        <h2>Bem-vindo ao nosso E-commerce!</h2>
        <p>Explore nossos produtos e encontre o que você precisa.</p>
      </main>


    


          <Headset/>
          <Mouse/>
          <Teclados/>
         
 
    </div>
  );
}

export default Home;
