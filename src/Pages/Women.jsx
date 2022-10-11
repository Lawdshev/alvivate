import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import ProductCard from '../components/ProductCard';
import { womenCollection } from '../utilities/data';

function Women() {
  const navigate = useNavigate()
  return (<>
      <div className="text-white flex flex-col items-center justify-around py-14" style={{backgroundColor:'#120241',minHeight:'40vh'}}>
        <div className="text-white flex flex-col items-center">
          <h1 className="text-3xl">EVERYTHING WOMEN</h1>
          <h4 className="text-white text-lg italic">Hurry! Shop Now And Get A <span className="text-green-500">DISCOUNT.</span> </h4>
        </div> 
        <div className="btns flex items-center justify-around w-80 px-4">
          <Button onClick={() => {
          navigate("/Women")}}>SHOP MEN WEARS</Button>
        </div>
      </div>
      <div><button onClick={() => navigate(-1)}><i className="fa fa-chevron-left text-3xl ml-3"></i></button></div>
      <div className="flex justify-between items-center px-4 mt-2">
        <h6 style={{color:'#120241'}} className="text-center font-extrabold">WOMEN FASHION</h6>
      </div>
      <div className='px-3'>
      {
          womenCollection.map((item,idx)=>{
            return <ProductCard id={idx} key={item.id} {...item}/>
          })
        }
      </div>  
    </>
  )
}

export default Women;