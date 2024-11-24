import React, { useState } from 'react';
import { useStore } from '../store'; // Use a store do Zustand

const AdicionarProduto = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('https://picsum.photos/350/418');
  const addProduct = useStore((state) => state.addProduct); 
  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now(), 
      name: productName,
      new_price: parseFloat(productPrice),
      image: productImage,
    };

    addProduct(newProduct); 

    setProductName('');
    setProductPrice('');
    setProductImage('https://picsum.photos/350/418');
  };

  return (
    <div className="add-product-container">
      <h1>Adicionar Produto</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Nome do Produto</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preço do Produto</label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagem do Produto (URL)</label>
          <input
            type="url"
            value={productImage}
            onChange={(e) => setProductImage(e.target.value)}
            required
          />
        </div>
        <button onClick={handleAddProduct}>Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AdicionarProduto;
