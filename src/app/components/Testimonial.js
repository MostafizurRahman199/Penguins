import Image from "next/image";
import React from "react";
import Testimonial_person from '@/app/components/Testimonial_person'

export default function Testimonial() {
  return (
    <section className="p-20 text-gray-700 bg-gray-100">
      <div className="text-center mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-gray-600">Testimonials</h3>
        <p className="mb-6 pb-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste soluta
          impedit voluptatem velit dolores ratione quae quis asperiores, libero
          dignissimos.
        </p>
      </div>

      <div className="grid grid-cols-3 text-center gap-2">
      
       <Testimonial_person name={"Mostafiz"} job={"Web Devloper"} img={'pexels-andrea-piacquadio-846741.jpg'}></Testimonial_person>

       <Testimonial_person name={"Rock"} job={"AI Engineer"} img={'pexels-andrea-piacquadio-3776146.jpg'}></Testimonial_person>

       <Testimonial_person name={"Nobita"} job={"Data Scientist"} img={'man.jpg'}></Testimonial_person>
      </div>
    </section>
  );
}
