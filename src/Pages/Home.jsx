import React from 'react';
import { Outlet } from 'react-router-dom';
import SliderComp from '../components/Slider'

function Home() {
 
  return (
    <>
    <div >
      <SliderComp/>
    </div>  
    <Outlet/>
    </>
  );
}

export default Home;