import React from 'react';
import { useStore } from '../../store'; // Certifique-se de ajustar o caminho
import './Item.css';

const Item = (props) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleClick = () => {
    addToCart({
      id: props.id,
      name: props.name,
      price: props.new_price,
      image: props.image,
    });
    alert(`${props.name} foi adicionado ao carrinho!`); // Feedback para o usuário
  };

  return (
    <div className='item' onClick={handleClick}>
      <img src={props.image} alt={props.name} />
      <p>{props.name}</p>
      <div className='item-prices'>
        <div className="item-prices-new">
          R${props.new_price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Item;
