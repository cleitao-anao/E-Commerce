import React from 'react';
import { useStore } from '../../store'; // Certifique-se de ajustar o caminho
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleClick = () => {
    addToCart({
      id: props.id,
      name: props.name,
      price: props.new_price,
      image: props.image,
    });
  };

  return (
    <div className='item'>
      {/* Corrigido o Link com interpolação de string */}
      <Link to={`/produtos/${props.id}`}>
        <img src={props.image} alt={props.name} />
      </Link>    
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
