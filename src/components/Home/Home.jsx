import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero.jpg";

const Home = () => {
  return (
    <section>
      <div className="flex flex-col text-gray-900 text-center space-y-8 pt-12">
        <div className="text-2xl md:text-5xl">
          <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
            Welcome To HeroGadget
          </h1>
        </div>

        <p className="text-xs sm:text-base md:text-lg">
          Best E-commerce platform for buying high quality Smart Home
          <br />
          Appliances at extremely affordable Price.
        </p>

        <div className="flex justify-center items-center gap-4">
          <Link to="/shop">
            <button type="button" className="btn btn-outline btn-info">
              Shop Now
            </button>
          </Link>
          <Link to="/about">
            <button type="button" className="btn btn-outline btn-success">
              Learn more
            </button>
          </Link>
        </div>

        <img className="rounded-md" src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default Home;
