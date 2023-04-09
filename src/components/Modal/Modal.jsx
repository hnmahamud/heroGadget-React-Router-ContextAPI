import React from "react";
import { Link } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Modal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {/* Modal */}
      <input
        checked={isOpen}
        onChange={() => {}}
        type="checkbox"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Continue From Where You Left Off...
          </h3>
          <p className="py-4">
            You have items in cart. Complete your order before stock out!
          </p>
          <div className="modal-action flex justify-between">
            <Link to="/">
              <XCircleIcon
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-gray-600"
              />
            </Link>

            <Link to="/cart">
              <ArrowRightCircleIcon
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-gray-600"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
