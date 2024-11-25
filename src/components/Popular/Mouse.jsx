import React from 'react'
import './styleDaLocalizacao.css'
import mouse_product from '../../assets/js/mouse_product'
import Item from "../Item/Item";
import { useStore } from '../../store';

const Mouse = () => {
  const mouseProducts = useStore((state) => state.mouseProducts);
  return (
    <div className='Mouse'>
      <h1>Mouses</h1>
      <hr />

      <div className='center'>
        <div className='popular-item'>
          {mouse_product.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          })}

          {mouseProducts.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          })}

        </div>
      </div>



    </div>
  )
}

export default Mouse;