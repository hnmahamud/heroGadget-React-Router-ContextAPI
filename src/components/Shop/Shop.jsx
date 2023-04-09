import React, { useContext } from "react";
import { CartContext, ProductContext } from "../layout/Root";
import Product from "../Product/Product";
import { addToDb } from "../../utilities/fakedb";
import { toast } from "react-hot-toast";

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useContext(CartContext);

  const handleAddToCart = (product) => {
    const finalCart = [];
    const isFound = cart.find((singleData) => singleData.id === product.id);
    if (isFound) {
      isFound.quantity = isFound.quantity + 1;
      const restCart = cart.filter(
        (singleData) => singleData.id !== isFound.id
      );
      finalCart.push(...restCart, isFound);
    } else {
      product.quantity = 1;
      finalCart.push(...cart, product);
    }
    setCart(finalCart);
    addToDb(product.id);
    toast("Product Added!");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12">
      {products.map((pd) => (
        <Product
          key={pd.id}
          product={pd}
          handleAddToCart={handleAddToCart}
        ></Product>
      ))}
    </div>
  );
};

export default Shop;
