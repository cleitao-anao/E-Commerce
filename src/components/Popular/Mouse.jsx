import React from 'react'
import './styleDaLocalizacao.css'
import mouse_product from'../../assets/js/mouse_product'
import  Item  from "../Item/Item";

const Mouse = () => {
  return (
    <div className='area'>
      <h1 class='titlearea'>Mouses</h1>

        <div className='center'>
          <div className='popular-item'>
            {mouse_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          
            })}
          
          </div>
        </div>
    </div>
  )
}

export default Mouse;