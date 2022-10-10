import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from './Counter';
import { menCollection,womenCollection } from '../utilities/data';
import { useProductContext } from '../utilities/ProductsContext';

function CartItem({product_name,description,image_url,id}) {
  const {cart,setCart} = useProductContext();
  const allProducts = menCollection.concat(womenCollection);
  
  const removeFromCart = () => {
    const product = allProducts.find(c => c.id === id);
    const index = allProducts.indexOf(product)
    console.log(product)
      setCart(prevState=> prevState.splice(index,1))
  }
  return (
    <Card style={{ width: '18rem',marginTop:'1%'}}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <Card.Subtitle className='flex justify-between'>
            <Counter/>
            <Button onClick={removeFromCart}>remove</Button>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CartItem;