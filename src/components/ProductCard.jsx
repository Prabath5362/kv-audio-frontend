import React from 'react'
import "./ProductCard.css"


function ProductCard({name,img,description,addToCart}) {
  return (
    <div className='product-card bg-white shadow-md rounded p-4 m-4'>
        <h2>{name}</h2>
        <img src={img} alt="Product Name" />
        <p className='h-20 overflow-hidden'>{description}</p>
        <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={addToCart}>Add to Cart</button>

    </div>
  )
}

export default ProductCard