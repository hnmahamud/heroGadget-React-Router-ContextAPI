import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BoltIcon } from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { CartContext } from "../layout/Root";

const Header = () => {
  const [cart, setCart] = useContext(CartContext);
  return (
    <nav className=" bg-blue-400 text-gray-700 font-bold">
      <div className="navbar md:w-[80%] md:mx-auto">
        {/* Logo for large device */}
        <div className="navbar-start hidden lg:flex">
          <Link to="/" className="inline-flex items-center">
            <BoltIcon className="h-6 w-6 text-white" />
            <h3 className="text-xl font-bold">HeroGadget</h3>
          </Link>
        </div>
        {/* NavLink for large device */}
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "mr-8 text-white" : "mr-8"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "mr-8 text-white" : "mr-8"
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? "mr-8 text-white" : "mr-8"
              }
            >
              <div className="indicator">
                Cart
                <ShoppingCartIcon className="h-6 w-6 text-black" />
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-white" : "")}
            >
              About
            </NavLink>
          </ul>
        </div>

        {/* NavLink for small device */}
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-4 shadow bg-blue-400 rounded-md space-y-4"
            >
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                Shop
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                <div className="indicator">
                  Cart
                  <ShoppingCartIcon className="h-6 w-6 text-black" />
                  <span className="badge badge-sm indicator-item">
                    {cart.length}
                  </span>
                </div>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-white" : "")}
              >
                About
              </NavLink>
            </ul>
          </div>
        </div>
        {/* Logo for small device */}
        <div className="navbar-end lg:hidden">
          <Link to="/" className="inline-flex items-center">
            <BoltIcon className="h-6 w-6 text-white" />
            <h3 className="text-xl font-bold">HeroGadget</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
