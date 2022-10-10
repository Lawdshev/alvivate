import React from 'react';
import ProductCard from '../components/ProductCard';
import { inStore } from '../utilities/data';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useProductContext } from "../utilities/ProductsContext";

function Home() {
  const {cart,setCart} = useProductContext();
  const navigate = useNavigate()
 
  return (
    <>
    <div>
      <div className="text-white flex flex-col items-center justify-around py-14" style={{backgroundColor:'#120241',minHeight:'40vh'}}>
        <div className="text-white flex flex-col items-center">
          <h1 className="text-3xl">WELCOME TO APPLE</h1>
          <h4 className="text-white text-lg italic">The home of unbeatable Fashion</h4>
        </div> 
        <div className="btns flex items-center justify-around w-80 px-4">
          <Button onClick={() => {
          navigate("/Men")}}>SHOP NOW</Button>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mt-2">
        <h6 style={{color:'#120241'}} className="text-center font-extrabold">POPULAR IN STORE</h6>
      </div>
      <div className='px-3'>
      {
          inStore.map((item,idx)=>{
            return <ProductCard id={idx} key={item.id} {...item}/>
          })
        }
      </div>   
    </div>  
    </>
  );
}

export default Home;