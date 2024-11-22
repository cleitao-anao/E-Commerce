import React from 'react'
import './Popular.css'
import all_product from'../../assets/js/all_product'
import  Item  from "../Item/Item";

const Mulher = () => {
  return (
    <div className='Mulher'>
      <h1>popular para mulheres</h1>
      <hr />

        <div className='center'>
          <div className='popular-item'>
            {all_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          
            })}
          
          </div>
        </div>
    </div>
  )
}

export default Mulher;