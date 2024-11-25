import React from 'react'
import './styleDaLocalizacao.css'
import teclados_product from'../../assets/js/teclados_product'
import  Item  from "../Item/Item";
import { useStore } from '../../store';

const Teclados = () => {
  const tecladoProducts = useStore((state) => state.tecladoProducts);

  return (
    <div className='Teclados'>
      <h1>Teclados</h1>
      <hr />

        <div className='center'>
          <div className='popular-item'>
            {teclados_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          
            })}
            

            {tecladoProducts.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />

          })}
          
          </div>
        </div>

    </div>
  )
}

export default Teclados;