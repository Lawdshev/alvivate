import { useParams } from "react-router-dom";
import { menCollection, womenCollection } from "../utilities/data";

function ProductDisplay() {
  const { id } = useParams();
  const allProducts = menCollection.concat(womenCollection);
  const product = allProducts.find(c=>c.id == id);
  console.log(product);

  return (<>
    <div className="proj-desc">
        {product.product_name}
    </div>
    </>
    
  );
}
export default ProductDisplay;