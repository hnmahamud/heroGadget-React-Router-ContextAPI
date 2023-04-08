import React from "react";
import Lottie from "lottie-react";
import gadgetAnimation from "../../assets/gadgets.json";

const About = () => {
  return (
    <div className="md:w-[80%] md:mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center pt-12">
      {/* Text Content */}
      <div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Gadgets are not just tools, they are a reflection of our endless.
        </h2>
        <p className="text-base text-gray-700 mt-2">
          A gadget is a term commonly used to refer to a small, portable, and
          often electronic device that is designed to perform a specific task or
          provide a specific function. Gadgets are typically characterized by
          their advanced features, sleek design, and convenience in use. They
          are often powered by batteries, have a user-friendly interface, and
          may connect to other devices or networks for enhanced functionality.
        </p>
      </div>

      {/* Lottie Animation */}
      <div className="md:h-96">
        <Lottie
          className="h-full rounded-md"
          animationData={gadgetAnimation}
          loop
        />
      </div>
    </div>
  );
};

export default About;
