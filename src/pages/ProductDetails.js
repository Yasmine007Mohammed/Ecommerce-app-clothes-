import React, { useContext } from 'react';
// import useparams
import { useParams } from "react-router-dom";
// import cart context
import { CartContext } from "../contexts/CartContext";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const ProductDetails = () => {
  // get product id from url
  const {id} = useParams();
  const products  = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // get single product based on id
  const product = products.find((item) =>{
    return item.id === parseInt(id)
  });
  
  // if product not found
  if(!product){
    return <section className='h-screen flex justify-center items-center'>
      Loading...</section>
  }
  // destructur single product
  const {title, price, description, image} = product
  return (
    <section className='h-screen pt-32 pb-12 lg:py-32 flex items-center'>
      <div className='container mx-auto'>
        {/* image && text wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* image */}
          <div className='flex justify-center items-center flex-1 mb-6 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={image} alt='' />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='mb-2 mx-auto text-[32px] font-medium max-w-[450px] lg:mx-0'>
              {title}</h1>
            <div className='text-2xl text-red-600 font-medium mb-6 '>
              $ {price}</div>
          
          <p className='mb-8 '>{description}</p>
          <button
          onClick={() => addToCart(product.id,product)}
          className='bg-primary text-white py-4 px-8 '>
            Add To Cart</button>
        </div>
      </div>
      </div>
    </section>
  )
} 
export default ProductDetails
