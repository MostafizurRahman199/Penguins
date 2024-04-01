"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function ModalPrice(props) {
  const [modalOpen, setModalOpen] = useState(true); // State to manage modal visibility, initially set to true

  // Function to handle cancel button click and hide the modal

  const handleCancel = () => {
    props.handleModal(false);
  };

  return (
    <div
      id="price_modal"
      className={`fixed inset-0 z-50 ${modalOpen ? "" : "hidden"}`}
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-xl p-6 w-80">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/man.jpg"
              width={200}
              height={20}
              className="w-full h-auto-full"
              alt="Person"
            />
          </div>
          <h3 className="text-2xl font-medium text-gray-900 uppercase mb-4">
            {props.type}
          </h3>
          <div className="w-full">
            <ul>
              {props.Features.map((feature, index) => (
                <li className="flex items-center mb-2" key={index}>
                  <Image
                    src="/check-mark.png"
                    width={30}
                    height={30}
                    className="mr-2"
                    alt="check mark"
                  />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="w-full py-2 px-4 bg-red-600 text-white font-medium rounded-md shadow-sm mb-2"
            >
              Checkout
            </button>
            <button
              type="button"
              className="w-full py-2 px-4 bg-white border border-gray-300 text-gray-700 font-medium rounded-md shadow-sm"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
