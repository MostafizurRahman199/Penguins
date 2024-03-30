import React from 'react'
import Image from "next/image";
export default function Testimonial_person({name, job , img}) {
  return (
    <div className="mb-12">
    <div className="flex justify-center mb-6">
      <Image
         src={`/${img}`}
        className="rounded-full shadow-2xl w-40 h-40"
        width={200}
        height={200}
      />
    </div>
    <h5 className="text-xl font-semibold mb-4">{name}</h5>
    <h6 className="font-semibold text-blue-600 mb-4">{job}</h6>
    <p className="mb-4">
      <Image
        src="/quote.png"
        width={20}
        height={20}
        className="inline-block mr-2"
      />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
      cum impedit a harum eveniet officiis iste nostrum expedita, quae
      mollitia!
      <Image
        src="/double-quotes.png"
        width={20}
        height={20}
        className="inline-block ml-2"
      />
    </p>
    <ul className="flex justify-center gap-2">
      <li><Image src='/star.png' width={20} height={20}></Image></li>
      <li><Image src='/star.png' width={20} height={20}></Image></li>
      <li><Image src='/star.png' width={20} height={20}></Image></li>
      <li><Image src='/star.png' width={20} height={20}></Image></li>
      <li><Image src='/rating.png' width={20} height={20}></Image></li>
    </ul>
  </div>
  )
}
