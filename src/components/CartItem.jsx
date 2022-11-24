import React from 'react';
import Card from 'react-bootstrap/Card';
import { useUserAuth } from '../utilities/UserAuthContextProvider';

export const CartItem= ({product_name,description,image_url,id,price,color,qty}) => {
  const {cart,setCart} = useUserAuth();
  const removeFromCart = () => {
    const items = cart.filter((item)=>{ return item.id !== id})
    setCart(items)
  }

  return (
    <div className='h-[500px] w-80 p-8 mt-4 shadow-2xl mr-4'>
         <img src={image_url} className='w-full h-1/2'/>
         <h4 className='text-xl font-bold mb-0'>{product_name}</h4>
         <h4 className='text-sm mt-2'>{description}</h4>
         <div className='flex mt-4'>
          <h4 className='text-lg text-[#ccc]'>price:</h4>
          <h4 className='text-lg ml-1'>₦{price}</h4>
         </div>
         <div className='flex items-center justify-between mt-4'>
            <h1 className='text-sm'>Qty: x{qty}</h1>
            <button onClick={removeFromCart} ><i className="fa-solid fa-trash-can"></i></button>
         </div>
         <div className="flex font-bold i justify-around w-2/5 "  style={{color:'#120241'}}>
          </div>
      </div>
  );
}
