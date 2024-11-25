import React from 'react'
import './styleDaLocalizacao.css'
import headset from '../../assets/js/headset_product'
import Item from "../Item/Item";
import { useStore } from '../../store';

const Headset = () => {
  const headsetProducts = useStore((state) => state.headsetProducts);
  return (
    <div className='Headset'>
      <h1>Headsets</h1>
      <hr />

      <div className='center'>
        <div className='popular-item'>
          {headset.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          })}



          {headsetProducts.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}

        </div>
      </div>
    </div>
  )
}

export default Headset;