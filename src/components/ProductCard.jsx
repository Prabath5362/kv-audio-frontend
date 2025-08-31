import React from 'react'
import "./ProductCard.css"


function ProductCard({name,img,description,addToCart}) {
  return (
    <div className='product-card'>
        <h2>{name}</h2>
        <img src={img} alt="Product Name" />
        <p>{description}</p>
        <button onClick={addToCart}>Add to Cart</button>
     
    </div>
  )
}

export default ProductCard