import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import SliderComp from '../components/Slider';
import { menCollection } from '../utilities/data';

function Home() {
 
  return (
    <>
    <div>
      <SliderComp/>
      <div className="flex justify-between items-center px-4 mt-2">
        <h6 style={{color:'#120241'}} className="text-center font-extrabold">POPULAR IN STORE</h6>
      </div>
      <div className='px-3'>
      {
          menCollection.map((item,idx)=>{
            return <ProductCard id={idx} key={item.id} {...item}/>
          })
        }
      </div>   
    </div>  
    </>
  );
}

export default Home;