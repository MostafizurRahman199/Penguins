import Image from "next/image";
import React from "react";

export default function GallaryImage({ img }) {
  return (
    <div className="flex flex-wrap w-1/3 inset-5  opacity-50  transition-opacity duration-300 hover:opacity-100">
    <div className="w-full p-1 relative">
      <Image
        alt="gallery pic"
        className="block object-cover object-center w-full h-auto border rounded-lg mb-1 hover:shadow-lg transform transition-transform  duration-500 hover:scale-150 hover:z-50 hover:relative hover:bg-black"
        src={`/${img}`}
        width={300}
        height={300}
      ></Image>
     
    </div>
  </div>
  
  
  );
}
