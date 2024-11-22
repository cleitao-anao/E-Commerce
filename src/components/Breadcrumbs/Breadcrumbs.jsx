import React from 'react'

const Breadcrumbs = (props) => {
    const {produtos} = props;
  return (
    <div className='Breadcrumbs'>
        HOME . SHOP . {produtos.category} . {produtos.name}
    </div>
  )
}

export default Breadcrumbs;