import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
 
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
