import React,{ useState} from 'react';

function Counter() {
  const [count,setCount] = useState(0);
    const countplus = () =>{
            setCount((prevState) => prevState + 1)     
    }
    const countminus = () =>{
        if(count === 0){
            setCount(0);
            return;
        }
        setCount((prevState) => prevState - 1)     
    }
    
  return (
    <div className="flex text-2xl font-bold i justify-around w-2/5 "  style={{color:'#120241'}}>
        <button onClick={countminus}>-</button>
        <span className='px-2 border-solid border-2'>{count}</span>
        <button  onClick={countplus}>+</button>
    </div>
  )
}

export default Counter;