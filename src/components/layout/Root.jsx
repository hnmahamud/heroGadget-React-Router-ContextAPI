import React, { createContext, useState } from "react";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

export const ProductContext = createContext([]);
export const CartContext = createContext([]);

const Root = () => {
  const [productsData, cardData] = useLoaderData();
  const [cart, setCart] = useState(cardData);
  return (
    <ProductContext.Provider value={productsData}>
      <CartContext.Provider value={[cart, setCart]}>
        <Header></Header>
        <div className="min-h-[calc(100vh-132px)] w-[98%] md:w-[80%] mx-auto">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Toaster />
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

export default Root;
