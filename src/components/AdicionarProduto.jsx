import React, { useState } from 'react';
import { useStore } from '../store';

const AdicionarProduto = () => {
  const [formData, setFormData] = useState({
    name: '',
    new_price: '',
    type: '',
    image: '',
  });

  const addProduct = useStore((state) => state.addProduct);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      new_price: parseFloat(formData.new_price),
      image: formData.image || 'default_image.png',
    };

    if (!formData.type) {
      alert('Selecione um tipo de produto.');
      return;
    }

    addProduct(formData.type, newProduct);

    alert('Produto adicionado com sucesso!');
    setFormData({ name: '', new_price: '', type: '', image: '' });
  };

  return (
    <div>
      <h2>Adicionar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Preço:</label>
          <input
            type="number"
            name="new_price"
            value={formData.new_price}
            onChange={handleInputChange}
            required
            step="0.01"
          />
        </div>
        <div>
          <label>Tipo de Produto:</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione o tipo</option>
            <option value="teclado">Teclado</option>
            <option value="mouse">Mouse</option>
            <option value="headset">Headset</option>
          </select>
        </div>
        <div>
          <label>URL da Imagem (opcional):</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AdicionarProduto;
