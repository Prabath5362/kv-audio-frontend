import React from 'react'
import ProductCard from './components/ProductCard'

function addToCart(){
  console.log("Product is added to cart successflully ✅");
  
}

function App() {
  return (
    <div className='product-list'>
      <ProductCard name={"JBL mini"} addToCart={addToCart} description={"jbl mini is good best product"} img={"https://img.drz.lazcdn.com/static/lk/p/69825442fc51c958cc98ae4c9dc15759.jpg_400x400q80.jpg_.webp"} />
      <ProductCard name={"Boat"} addToCart={addToCart} description={"Boat is good best product"} img={"https://img.drz.lazcdn.com/static/lk/p/c21ccd3df93f4213ce81488dea4bc7fe.jpg_200x200q80.jpg_.webp"} />

  )
}

export default App