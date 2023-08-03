import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../context/Shop-context";
import { PRODUCTS } from "../../data/products";
import CartItem from "../cart/Cart-item";
import "../../styles/Cart.css";

function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Mijn bestelling: </h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Totaal: € {totalAmount},00</p>
          <button onClick={() => navigate("/shop")}> Verder Shoppen </button>
          <button
            onClick={() => {
              checkout();
              navigate("/afrekenen");
            }}
          >
            {" "}
              Afrekenen{" "}
          </button>
        </div>
      ) : (
        <h2>Uw winkelmand is leeg</h2>
      )}
    </div>
  );
}

export default Cart;
