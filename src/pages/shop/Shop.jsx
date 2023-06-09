import React from "react";
import { PRODUCTS } from "../../data/products";
import Product from "./Product";
import "../../styles/Shop.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
