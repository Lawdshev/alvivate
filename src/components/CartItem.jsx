import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Counter from './Counter';

function CartItem({product_name,description,image_url}) {
  return (
    <Card style={{ width: '18rem',marginTop:'2%' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{product_name}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
        <Card.Subtitle>
            <Counter/>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export default CartItem;