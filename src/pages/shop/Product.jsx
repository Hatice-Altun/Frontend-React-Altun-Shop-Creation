import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <h4>
          <b>{productName}</b>
        </h4>
        <p>€ {price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Bestellen {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
}

export default Product;
