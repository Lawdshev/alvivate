import React from 'react';
import {CartItem} from "../components/CartItem";
import Button from "react-bootstrap/esm/Button";
import { useUserAuth } from '../utilities/UserAuthContextProvider';
import { useNavigate } from "react-router-dom";
import Checkout from '../utilities/payment';

const Cart = () => {
  const {cart} = useUserAuth();
  const navigate = useNavigate();
  let checkoutAmount =  cart.reduce((total,item) => item.qty * item.price + total, 0) 
  return (
    <> 
    <div>
      <button onClick={() => navigate(-1)}><i className="fa fa-chevron-left text-3xl ml-3"></i></button>
        <h6 className='text-center font-bold' style={{color:'#120241'}}>SHOPPING CART</h6>
        <hr />
        <div className="flex items-center w-screen mx-auto flex-col">
            {cart.length === 0?
            <div className="flex flex-col items-center justify-center w-screen " style={{minHeight:"60vh"}}>
                <p className='mx-auto text-3xl italic' style={{color:'#120241'}}>You have no item here!</p>
                <button onClick={() => navigate('/Home')}  className="px-3 py-2 bg-[#120241] text-white no-underline">Shop Now</button>
            </div>
            :
            <div className='w-100 flex flex-col items-center md:flex-row justify-around flex-wrap' >
                {
                    cart.map((item)=>{
                      return <CartItem key={item.id} {...item}/>
                         
                    })
                }
            </div>}
            <div className="checkout flex w-4/5 md:w-3/5 justify-between mt-3 border-t-2 border-black border-solid">
              <span className="text-lg font-bold mt-4"> Total:$<span className="border-solid border-2 border-black px-3 py-2 mt-4">
                {cart.length>0? checkoutAmount: 0 }
                </span> </span>
             { checkoutAmount<0.1?
              ''
              :
              <button className="mt-3 bg-[#120241] text-white rounded-md px-2">
                <Checkout amount={checkoutAmount}/>
              </button>}
            </div>
        </div>
        </div>
    </>
  )
}
export default Cart;