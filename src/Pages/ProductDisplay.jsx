import { useParams } from "react-router-dom";
import { menCollection, womenCollection } from "../utilities/data";
import productStyle from '../styles/productDisplay.module.css';

function ProductDisplay() {
  const { id } = useParams();
  const allProducts = menCollection.concat(womenCollection);
  const product = allProducts.find(c => c.id == id)
  return (
  <>
    <div className={productStyle.prodDisplay}>
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
          <h3 className={productStyle.qty}>Qty:</h3>
          <select className={productStyle.select}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
          </select>
         </div>
         <hr/>
         <h3 className={productStyle.prodPrice}>Total: ${product.price}</h3>
         <hr />
         <button className={productStyle.cartBtn}>Add to cart</button>
         <hr />
         <button className={productStyle.discountBtn}>Enjoy 70% discount</button>
      </div> 

    </div>
  </>
    
  );
}
export default ProductDisplay;