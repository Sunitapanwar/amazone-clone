import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import "./Order.css";



function Order() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="order">
      <h2 className="order__head">Orders</h2>
      <div className="order__item">
        {basket?.map((item) => (
          <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            hideButton
          />
        ))}
        </div>
        <CurrencyFormat
          renderText={(value) => (
            <h3 className="order__total">Order Total: {value}</h3>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType="text"
          thousandSeperator={true}
          prefix="$"
        />
    
    </div>
  );
}

export default Order;
