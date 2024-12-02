import React from 'react'
import './styleDaLocalizacao.css'
import teclados_product from'../../assets/js/teclados_product'
import  Item  from "../Item/Item";

const Teclados = () => {
  return (
    <div className='area'>
      <h1 class='titlearea'>Teclados</h1>

        <div className='center'>
          <div className='popular-item'>
            {teclados_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          
            })}
          
          </div>
        </div>
    </div>
  )
}

export default Teclados;