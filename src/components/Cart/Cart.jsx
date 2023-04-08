import React, { useContext } from "react";
import { CartContext } from "../layout/Root";
import ReviewItem from "../ReviewItem/ReviewItem";
import { TrashIcon, CreditCardIcon } from "@heroicons/react/24/solid";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handleDeleteItem = (productId) => {
    const restCart = cart.filter((singleItem) => singleItem.id !== productId);
    setCart(restCart);
    removeFromDb(productId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12">
      <div className="md:col-span-2">
        {cart.map((singleItem) => (
          <ReviewItem
            key={singleItem.id}
            singleCart={singleItem}
            handleDeleteItem={handleDeleteItem}
          ></ReviewItem>
        ))}
      </div>
      <div className="md:col-span-1">
        <button
          onClick={handleClearCart}
          className="w-full text-white transition-colors duration-200 bg-red-500 hover:bg-red-600 rounded-md"
        >
          <div className="flex justify-between p-2">
            <span>Clear Cart</span>
            <TrashIcon className="h-6 w-6" />
          </div>
        </button>
        <button
          onClick={handleClearCart}
          className="w-full text-white transition-colors duration-200 bg-orange-500 hover:bg-orange-600 rounded-md mt-2"
        >
          <div className="flex justify-between p-2">
            <span>Proceed Checkout</span>
            <CreditCardIcon className="h-6 w-6" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Cart;
