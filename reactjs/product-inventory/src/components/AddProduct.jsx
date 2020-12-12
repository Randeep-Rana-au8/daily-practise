import React from "react";
import { add_product } from "../actions/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    const name = e.target.product_name.value;
    const price = e.target.product_price.value;
    add_product({ id, name, price });
  };

  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="product_name" />
        <input type="text" placeholder="Price" name="product_price" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { add_product })(AddProduct);
