import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';


export default function ProductCard({product_name,image_url,description,price,rating,id}) {
  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem',marginTop:'1%',height:"33rem"}} className="hover:shadow-2xl" onClick={() => {
          navigate("/product/" + id)}}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <h4 className='font-bold text-lg'>{product_name} </h4>
        <p className='font-bold text-lg'>Price: ${price}</p>
        <p className='font-bold text-lg'>Rating:{rating} <i className="fa-regular fa-star"></i></p>
        <Card.Text className='font-medium text-sm'>
         Description: {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}