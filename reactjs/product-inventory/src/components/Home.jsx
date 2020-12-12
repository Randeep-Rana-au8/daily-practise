import React from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const Home = ({ products }) => {
  return (
    <div>
      <div>
        <Link to="/add-products">Add Product</Link>
      </div>
      <div>
        <h1>Welcome to ProductsInventory.com</h1>
      </div>
      <Products products={products} />
    </div>
  );
};

export default Home;
