import React from "react";

const Products = ({ products }) => {
  console.log(products);
  return (
    <div>
      <h1>All Products</h1>
      {products.map((prod) => (
        <div>
          <h1>{prod.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Products;
