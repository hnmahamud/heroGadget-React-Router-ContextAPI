import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";

const ReviewItem = ({ singleCart, handleDeleteItem }) => {
  const { id, picture, name, price, quantity } = singleCart;
  return (
    <div className="border rounded-md p-2 mb-2">
      <div className="flex items-center gap-4">
        <div>
          <img
            className="w-6 h-6 md:w-20 md:h-20 rounded-md"
            src={picture}
            alt=""
          />
        </div>

        <div className="grow">
          <p className="md:text-lg font-semibold">{name}</p>
          <p>
            Price: <span className="text-orange-400">${price}</span>
          </p>
          <p>
            Quantity: <span className="text-orange-400">{quantity}</span>
          </p>
        </div>

        <div>
          <button
            onClick={() => handleDeleteItem(id)}
            className="bg-red-200 hover:bg-red-300 rounded-full p-2"
          >
            <TrashIcon className="h-6 w-6 text-red-500 hover:text-red-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;
