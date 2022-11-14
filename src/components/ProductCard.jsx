import React from 'react';
import { useNavigate } from "react-router-dom";
import Star3 from '../utilities/images/3Star.png'


export default function ProductCard({product_name,image_url,description,price,rating,id}) {
  const navigate = useNavigate();

  return (
    <div className='h-[500px] w-80 p-8 mt-4 shadow-2xl mr-4'  onClick={() => {
    navigate("/product/" + id)}}>
       <img src={image_url} className='w-full h-1/2'/>
       <h4 className='text-xl font-bold mb-0'>{product_name}</h4>
       <img src={Star3} className='w-16 h-4'/>
       <h4 className='text-sm mt-2 h-20'>{description}</h4>
       <div className='flex mt-8'>
        <h4 className='text-lg text-[#ccc]'>price:</h4>
        <h4 className='text-lg ml-1'>${price}</h4>
       </div>
    </div>
    
  );
}
