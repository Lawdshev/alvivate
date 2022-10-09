import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import productStyle from "../styles/ProductCard.module.css";


export default function ProductCard({product_name,image_url,description,price,rating,id}) {
  const navigate = useNavigate();
    
    return (
        <Card className='cardcomp w-90' style={{marginTop:'5px',marginLeft:'5px'}}>
          <a class={productStyle.single}  onClick={() => {
        navigate("/product/" + id);
      }}>
                        <div className={productStyle.pica}>
                            <img src={image_url} alt="" className={productStyle.img}/>
                        </div>
                        <div className={productStyle.texts}>
                            <h2 className={productStyle.title} >{product_name}</h2>
                            <p >Price: ${ price}</p>
                            <p>Rating: {rating} <i className="fa-regular fa-star"></i></p>
                            <article>
                              <h3 className={productStyle.h3}>description:</h3>
                                {description}
                            </article>
                        </div>
                    </a>
        </Card>
    );
}