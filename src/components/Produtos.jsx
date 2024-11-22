import React, { useContext } from 'react';
import { Context } from '../context/Context';
import { useParams } from 'react-router-dom';

const Produtos = () => {
  const { all_product } = useContext(Context);
  const { produtosId } = useParams();

  const produto = all_product.find((e) => e.id === Number(produtosId));

  // Verifique se o produto existe
  if (!produto) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <h1>{produto.name}</h1>
      <img src={produto.image} alt={produto.name} />
      <p>Preço: R${produto.new_price}</p>
    </div>
  );
};

export default Produtos;
