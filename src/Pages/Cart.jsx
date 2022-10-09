import CartItem from "../components/CartItem";
import { menCollection } from "../utilities/data";

const Cart = () => {

  return (
    <>
        
        <h3 className='mt-1 ml-3'>SHOPPING CART</h3>
        <div className="flex items-center w-screen mx-auto">
            {menCollection.length === 0?
            <div className="flex flex-col items-center justify-center w-screen min-h-screen">
                <p className='mx-auto'>You have no items here</p>
                <a href="/" className="px-3 py-2 bg-blue-600 text-white">Shop Now</a>
            </div>
            :
            <div className='w-100 flex flex-col items-center md:flex-row justify-around flex-wrap' >
                {
                    menCollection.map((item)=>{
                      return <CartItem {...item}/>
                         
                    })
                }
            </div>}
            
            <div className="checkout"></div>
        </div>
    </>
  )
}

export default Cart;