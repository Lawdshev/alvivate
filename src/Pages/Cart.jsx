import React,{useState,useEffect} from 'react';
import {CartItem} from "../components/CartItem";
import Button from "react-bootstrap/esm/Button";
import { useUserAuth } from '../utilities/UserAuthContextProvider';

const Cart = () => {
  const {cart} = useUserAuth();
  const [newprice, setNewprice] = useState(0);
  useEffect(() => {
    let ans = 0;
    cart.map((item) => (ans += item.qty * item.price));
    setNewprice(ans);
  }, [])
  
    
  
  return (
    <> 
        <h6 className='mt-1 ml-3 font-bold' style={{color:'#120241'}}>SHOPPING CART</h6>
        <div className="flex items-center w-screen mx-auto flex-col">
            {cart.length === 0?
            <div className="flex flex-col items-center justify-center w-screen " style={{minHeight:"70vh"}}>
                <p className='mx-auto text-3xl italic' style={{color:'#120241'}}>You have no item here!</p>
                <a href="/Home" className="px-3 py-2 bg-blue-600 text-white no-underline">Shop Now</a>
            </div>
            :
            <div className='w-100 flex flex-col items-center md:flex-row justify-around flex-wrap' >
                {
                    cart.map((item)=>{
                      return <CartItem key={item.id} {...item}/>
                         
                    })
                }
            </div>}
            <hr />
            <div className="checkout flex w-4/5 md:w-3/5 justify-between">
              <span className="text-lg font-bold">Total:$<span className="border-solid border-2 px-3 py-2">
                {}
                {cart.length>0? cart.reduce((total) => newprice + total, 0) : 0 }
                </span> </span>
              <Button>Checkout</Button>
            </div>
        </div>
    </>
  )
}

export default Cart;