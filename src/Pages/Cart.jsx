import CartItem from "../components/CartItem";
import Button from "react-bootstrap/esm/Button";
import { useProductContext } from "../utilities/ProductsContext";

const Cart = () => {
  const {cart} = useProductContext();

  return (
    <>
        
        <h6 className='mt-1 ml-3 font-bold' style={{color:'#120241'}}>SHOPPING CART</h6>
        <div className="flex items-center w-screen mx-auto flex-col">
            {cart.length === 0?
            <div className="flex flex-col items-center justify-center w-screen " style={{minHeight:"70vh"}}>
                <p className='mx-auto text-3xl italic' style={{color:'#120241'}}>You have no item here!</p>
                <a href="/Home" className="px-3 py-2 bg-blue-600 text-white no-underline">Shop Now</a>
            </div>
            :
            <div className='w-100 flex flex-col items-center md:flex-row justify-around flex-wrap' >
                {
                    cart.map((item)=>{
                      return <CartItem {...item}/>
                         
                    })
                }
            </div>}
            <hr />
            <div className="checkout flex w-3/5 justify-between">
              <span className="text-lg font-bold">Total:$<span className="border-solid border-2 px-3 py-2">2,500</span> </span>
              <Button>Checkout</Button>
            </div>
        </div>
    </>
  )
}

export default Cart;