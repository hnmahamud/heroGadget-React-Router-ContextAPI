import React from "react";

const Product = ({ product, handleAddToCart }) => {
  const { picture, name, category, price } = product;
  return (
    <div className="card card-compact w-96 bg-base-100 hover:shadow-xl rounded-md border">
      <figure>
        <img src={picture} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Category: {category}</p>
        <p>
          <strong>Price: {price}</strong>
        </p>
        <div className="card-actions">
          <button
            onClick={() => handleAddToCart(product)}
            className="text-white w-full btn btn-xs"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
