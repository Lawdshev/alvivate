import { Button } from 'react-bootstrap';

function SliderComp() {

  return (<>
    <div className="text-white flex flex-col items-center justify-around py-14" style={{backgroundColor:'#120241',minHeight:'40vh'}}>
      <div className="text-white flex flex-col items-center">
        <h1 >WELCOME TO APPLE</h1>
        <h4 className="text-white text-lg italic">The home of unbeatable Fashion</h4>
      </div> 
      <div className="btns flex items-center justify-around w-80 px-4">
        <Button>SHOP NOW</Button>
      </div>
    </div>
    </>
  );
}
export default SliderComp;