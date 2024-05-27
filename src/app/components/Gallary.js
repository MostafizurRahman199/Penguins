import Image from "next/image";
import React from "react";
import GallaryImage from "@/app/components/GallaryImage";

export default function Gallary() {
  return (
    <section className="overflow-hidden text-gray-700 bg-gray-100 ">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-gray-800">Projects</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab odio
            labore laboriosam assumenda libero voluptas.
          </p>
        </div>
        <div className='flex flex-wrap w-1/2 object-center container mx-auto '>
              <GallaryImage img={"g1.jpg"}></GallaryImage>
              <GallaryImage img={"g2.jpg"}></GallaryImage>
              <GallaryImage img={"g3.jpg"}></GallaryImage>
              <GallaryImage img={"g5.jpg"}></GallaryImage>
              <GallaryImage img={"g6.jpg"}></GallaryImage>
              <GallaryImage img={"g7.jpg"}></GallaryImage>
        </div>
      </div>
    </section>
  );
}
