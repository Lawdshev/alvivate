import React from 'react';
import { useProductContext } from '../utilities/ProductsContext';

function Counter() {
  const {count,countminus,countplus} = useProductContext();
    
  return (
    <div className="flex text-2xl font-bold i justify-around w-2/5 "  style={{color:'#120241'}}>
        <button onClick={countminus}>-</button>
        <span className='px-2 border-solid border-2'>{count}</span>
        <button  onClick={countplus}>+</button>
    </div>
  )
}

export default Counter;