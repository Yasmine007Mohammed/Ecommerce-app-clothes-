import React, { useContext } from 'react';
// import Link 
import { Link } from 'react-router-dom';
// import icons
import { IoMdArrowForward} from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
// import cartItem component
import CartItem from '../components/CartItem';
// import sidebar context
import  { SidebarContext }  from '../contexts/SidebarContext'
// import cart context
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  const {cart, clearCart, itemAmount, total} = useContext(CartContext)

  return (
    <div>
      <div className={` ${isOpen ? 'right-0': '-right-full'} w-full h-full bg-white fixed top-0 shadow-2xl md:w-[35vw] xl:max-w-[30vw] lg:px-[35px] 
        transition-all duration-300 z-20 px-4 ` }>
          <div className='flex justify-between items-center py-6 border-b'>
            <div className='uppercase text-sm font-semibold'>Shopping Bag ({itemAmount}) </div>
            {/* icons */}
            <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
              <IoMdArrowForward className='text-2xl'/>

            </div>
          </div>
          <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px]
                overflow-y-auto overflow-x-hidden border-b'>
            {cart.map((item) => {
              return <CartItem item={item} key={item.id}/>
            })}
          </div>
          <div className='flex flex-col gap-y-3 mt-3 py-2'>
            <div className='flex justify-between px-2 items-center w-full'>
              {/* total */}
              <div className='font-semibold uppercase'>
                <span >Total:</span>$ {parseFloat(total).toFixed(2)}
              </div>
              {/* clear cart icon */}
              <div 
                onClick={clearCart} 
                className='cursor-pointer py-4 flex justify-center items-center bg-orange-500 text-white
                      text-xl h-12 w-12 '>
                <FiTrash2 />
              </div>
            </div>
            <div className='flex flex-col  gap-4'>
            <Link 
              to={'/'} 
              className='flex justify-center items-center text-primary bg-gray-200 p-4 w-full font-medium'>
              View Cart
            </Link>
            <Link 
              to={'/'} 
              className='flex justify-center items-center text-white bg-primary p-4 w-full font-medium'>
              Checkout
            </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Sidebar