import React, { useContext } from 'react'
// import Link 
import { Link } from 'react-router-dom';
// import icons
import { IoMdClose} from "react-icons/io";
import { IoMdAdd} from "react-icons/io";
import { IoMdRemove} from "react-icons/io";
// import cart context
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount,decreaseAmount} = useContext(CartContext)
  // destructure item
  const {id, title, image, price, amount} = item;
  return (
    <div className='flex gap-x-4 w-full py-2 lg:px-6 border-b border-gray-200 font-light text-gray-500'>
      <div className='w-full min-h-[150px] flex items-center gap-x-4'>
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt=''/>
        </Link>
        <div className='w-full flex flex-col'>
          {/* title && remove icon */}
          <div className='flex justify-between mb-2'>
            {/* title */}
            <Link to={`/product/${id}`}
            className='text-base font-medium max-w-[240px] text-primary hover:underline'>
              {title}
            </Link>
            {/* remove icon */}
            <div onClick={() => removeFromCart(id)} className='cursor-pointer text-2xl'>
              <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
            </div>
          </div>
          <div className='text-sm flex gap-x-2 h-[36px]'>
            {/* quantity */}
            <div className='flex flex-1 items-center max-w-[100px]  h-full 
                  border text-primary font-medium'>
              {/* minuse icon */}
              <div 
                onClick={() => decreaseAmount(id)}
                className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className=' h-full flex justify-center items-center px-2'>
                {amount}
              </div>
              <div 
                onClick={() => increaseAmount(id)} 
                className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                {/* plus icon */}
                <IoMdAdd />
              </div>
            </div>
            {/* price */}
            <div className='flex-1 flex justify-around items-center'>
              $ {price}
            </div>
            {/* total price at 2 decimal 0.00*/}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>
              {`$ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItem