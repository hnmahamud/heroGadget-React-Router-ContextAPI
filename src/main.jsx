import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/layout/Root";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import productLoader from "./loaders/productLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: productLoader,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
