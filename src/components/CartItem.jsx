import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import { useUserAuth } from '../utilities/UserAuthContextProvider';

export const CartItem= ({product_name,description,image_url,id,price,color,qty}) => {
  const {cart,setCart} = useUserAuth();
  var [qtty,setQtty] = useState(qty);
  

  const removeFromCart = () => {
    const items = cart.filter((item)=>{ return item.id !== id})
    setCart(items)
  }
  const countplus = (e) =>{
    e.preventDefault();
      setQtty(()=> qtty++ )
  }
  const countminus = (e) =>{
    e.preventDefault();
   if(qtty === 1){
      setQtty(1)
   }else{
      setQtty(()=> qtty--)
   }
  }

  return (
    <Card style={{ width: '18rem',marginTop:'1%'}}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <h4 className='font-bold text-lg'>{product_name} </h4>
        <div className="flex">
       <div
        style={{color:color,backgroundColor:color,width:'100%'}}>.</div>
        </div>
        <p className='font-bold text-lg'>Price: ${price}</p>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Subtitle className='flex justify-between items-center'>
          <div className="flex font-bold i justify-around w-2/5 "  style={{color:'#120241'}}>
            <button onClick={countminus}>-</button>  Qty: X{qty} <button onClick={countplus}>+</button>
          </div>
            <button onClick={removeFromCart}><i className="fa-solid fa-trash-can"></i></button>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}