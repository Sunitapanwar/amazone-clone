import React from "react";
import "./Product.css";
import {useStateValue} from './StateProvider';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product({ id, title, image, price, rating }) {
  const [{basket}, dispatch] = useStateValue();

  const addToBasket=() =>{
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    toast("Added item to basket!");
  }
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>RS</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button onClick={addToBasket}> Add to basket</button>
    </div>
  );
}

export default Product;
