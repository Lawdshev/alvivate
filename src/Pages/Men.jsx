import React from 'react';
import ProductCard from '../components/ProductCard';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { menCollection } from '../utilities/data';

function Men() {
  const navigate = useNavigate()
  return (<>
      <div className="text-white flex flex-col items-center justify-around py-14 bg-cover w-screen h-full" style={{backgroundColor:'#120241',minHeight:'40vh',backgroundImage:"url('https://i.pinimg.com/originals/bc/ec/46/bcec46649a0f62eaf77aad7681aced97.jpg')"}}>
        <div className="text-purple-900 flex flex-col items-center">
          <h1 className="text-3xl">EVERYTHING MEN</h1>
          <h4 className="text-purple-900 text-lg italic">Hurry! Shop Now And Get A <span className="text-green-500">DISCOUNT.</span> </h4>
        </div> 
        <div className="btns flex items-center justify-around w-80 px-4">
          <Button onClick={() => {
          navigate("/Women")}}>SHOP WOMEN WEARS</Button>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mt-2">
        <h6 style={{color:'#120241'}} className="text-center font-extrabold">MEN FASHION</h6>
      </div>
      <div className='w-100 flex flex-col items-center md:flex-row justify-around flex-wrap'>
      {
          menCollection.map((item,idx)=>{
            return <ProductCard id={idx} key={item.id} {...item}/>
          })
        }
      </div>   
    </>
  )
}

export default Men;