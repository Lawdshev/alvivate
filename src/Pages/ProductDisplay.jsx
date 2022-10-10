import { useParams,useNavigate } from "react-router-dom";
import { menCollection, womenCollection } from "../utilities/data";
import productStyle from '../styles/productDisplay.module.css';
import { useProductContext } from "../utilities/ProductsContext";

function ProductDisplay() {
  const navigate = useNavigate()
  const {cart,setCart} = useProductContext();
  const { id } = useParams();
  const allProducts = menCollection.concat(womenCollection);
  const product = allProducts.find(c => c.id == id)
  
  const addToCart = () => {
    if(cart.includes(product,0)){
      return;
    }
    setCart(prevState=> [...prevState,product])
  }

  return (
  <>
    <div className={productStyle.prodDisplay} >
      <div className={productStyle.imgDiv}>
      <img src={product.image_url} alt={product.product_name} className={productStyle.img}/>
      </div>
      <div className={productStyle.prodDes}>
        <h1 className={productStyle.prodName}>{product.product_name}</h1>
        <hr />
        <h3 className={productStyle.prodPrice}>Price: ${product.price}</h3>
        <hr />
        <article className={productStyle.article}>
          <p>{product.description}</p>
        </article>
      </div>
      <div className={productStyle.prodSelection}>     
         <div className={productStyle.selectDiv}>
          <p className={productStyle.qty}>Color:</p>
          <select className={productStyle.select}>
              <option value="red">red</option>
              <option value="blue">blue</option>
              <option value="white">white</option>
              <option value="black">black</option>
          </select>
         </div>
         <hr/>
         <h3 className={productStyle.prodPrice}>Total: ${product.price}</h3>
         <hr />
         <button className={productStyle.cartBtn} onClick={addToCart}>Add to cart</button>
         <hr />
         <button className={productStyle.discountBtn} onClick={()=> navigate(`/Promo/${id}`)}>Enjoy 70% discount</button>
      </div> 
    </div>
  </>
    
  );
}
export default ProductDisplay;