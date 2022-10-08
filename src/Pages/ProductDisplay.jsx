import { useParams } from "react-router-dom";
import { menCollection } from "../utilities/data";

function ProductDisplay() {
  const { id } = useParams();
  const product = menCollection.find((c)=>c.id === id);

  return (<>
    <div className="proj-desc">
      <div className="product" >
        <h1> {product.product_name}</h1>
        <img src={product.image_url} alt="product"/>
      </div>
      <article >
        <p className="description">{product.description}</p>
      </article>
    </div>
    </>
    
  );
}

export default ProductDisplay;