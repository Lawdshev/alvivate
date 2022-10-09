import React,{useState} from 'react'

function Counter() {
    const [count,setCount] = useState(0);
    const countplus = (e) =>{
            setCount((prevState) => prevState + 1)     
    }
    const countminus = (e) =>{
        if(count === 0){
            setCount(0);
            return;
        }
        setCount((prevState) => prevState - 1)     
    }
  return (
    <div className="flex text-lg font-bold i justify-around ">
        <button onClick={countminus}>-</button>
        <span className='px-2 border-solid border-2'>{count}</span>
        <button  onClick={countplus}>+</button>
    </div>
  )
}

export default Counter;