import React from 'react';
import { useState } from 'react';

function Groups() {
  const [availableSlot, setavailableSlot] = useState(1);

  const handleSlot = () => {
    if (availableSlot === 0){
      setavailableSlot(0);
    } 
    {
      setavailableSlot((availableSlot) => availableSlot - 1)
    }
  }
  
  return (
    <div className='groupDiv flex flex-col'style={{minHeight:'80vh'}}>
      <div className='groupNumber flex justify-around'style={{width:'100vw'}}>
          <h1 className='groupFirstHeading text-xl font-bold w-1/6 text-center'>s/n</h1>
          <h1 className='groupSecondHeading text-xl font-bold w-2/6 text-center' >Group ID</h1>
          <h1 className='groupThirdHeading text-xl font-bold w-2/6 text-center'>Available slot</h1>
      </div>
      <div className='groupId flex items-center justify-around'>
          <span className='groupFirstSpan w-1/6 text-center'>1</span> 
          <span className='groupSecondSpan w-2/6 text-center'>123</span>
          <div className='flex w-2/6 items-center justify-center'>
            <span className='groupThirdSpan mr-1'>{availableSlot}</span>
            {availableSlot === 0 ? <button disabled="disabled" className='px-2' style={{backgroundColor:"red", color:'white'}}>closed</button> : <button className='joinButton px-3' style={{backgroundColor:"#120241", color:'white'}} onClick={handleSlot}>Join</button>}
          </div>
      </div>
    </div>
  )
}

export default Groups;