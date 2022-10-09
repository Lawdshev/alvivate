import React from 'react';
import { menCollection, womenCollection } from "../utilities/data";
import { useParams,useNavigate } from "react-router-dom";
import productStyle from '../styles/productDisplay.module.css';

function Promo() {
  const { id } = useParams();
  const allProducts = menCollection.concat(womenCollection);
  const product = allProducts.find(c => c.id == id)
  return (
    <div className={productStyle.prodDisplay}>
        <div className={productStyle.imgDiv}>
          <img src={product.image_url} className={productStyle.img}/>
        </div>
        <div className='discountDiv flex flex-col ml-8 items-center'>
          <div className='rulesDiv flex flex-col'>
             <h3 className='rulesHeading self-center'>Rules:</h3>
             <p className='rules text-center'>Invite 9 of your friends and families to buy this same product and get 70% off or join an existing group of people buying the same product</p>
          </div>
          <div className='referralDiv w-3/4 px-10 flex items-center justify-around'>
            <input value='Your refferal link' className='px-16 py-1 border-solid border-black border-2'readOnly/>
            <button className='bg-blue-700 px-4 py-1'>Copy</button>
          </div>
          <h1 className='or mt-2 text-sm'>OR</h1>
          <div className='mt-2'>
             <button className='bg-orange-500 px-8 py-2'>Click to join existing group</button>
          </div>
        </div>
    </div>
  )
}

export default Promo;