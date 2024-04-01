// import React from 'react'
// import styles from '@/app/components/priceCard.module.css'
// import Image from 'next/image'
// import { log } from 'console'

// export default function PriceCard({type, price, Features }) {
//     console.log(Features);
//   return (
//     <div className={`mb-6`} >
//     <div className="block rounded-lg shadow-lg bg-gray-200 h-full">
//       <div className="p-6 border-b border-gray-300 text-center">
//         <p className="mb-6 text-2xl  font-bold ">{type}</p>
//         <h3 className="mb-6 text-2xl">
//             <strong>${price}</strong>
//             <small className="text-gray-500 text-sm"> /year</small>
//         </h3>
//         <button className="inline-block px-6 py-3 bg-transparent text-blue-500 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-6/12 bg-gray-300">BUY</button>
//       </div>

//       <div className="p-6">
//         <ol className="">
//             {
//                     Features.map((feature, index)=>(
//                         <li className="mb-4 items-center" key={index}>
//                         <Image src="/check-mark.png" width={30} height={30} className='inline-block' alt='check mark'></Image>   {feature}
//                       </li>
//                     ))
//             }
           
//         </ol>
//       </div>
//     </div>
//   </div>

//   )
// }
"use client"
import React, { useState } from 'react';
import styles from '@/app/components/priceCard.module.css';
import Image from 'next/image';
import ModalPrice from '@/app/components/ModalPrice'; // Import the modal component

export default function PriceCard({ type, price, Features }) {
  const [modalOpen, setModalOpen] = useState(false); // State to manage modal visibility

  const handleModal = (btn)=>{
    setModalOpen(btn);
  }

  return (
    <div className={`mb-6`} >
      <div className="block rounded-lg shadow-lg bg-gray-200 h-full">
        <div className="p-6 border-b border-gray-300 text-center">
          <p className="mb-6 text-2xl  font-bold ">{type}</p>
          <h3 className="mb-6 text-2xl">
            <strong>${price}</strong>
            <small className="text-gray-500 text-sm"> /year</small>
          </h3>
          <button 
            className="inline-block px-6 py-3 bg-transparent text-blue-500 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-0 active:bg-green-200 transition duration-150 ease-in-out w-6/12 bg-white"
            onClick={() => setModalOpen(true)} // Open the modal when button is clicked
          >
            BUY
          </button>
        </div>

        <div className="p-6">
          <ol className="">
            {Features.map((feature, index)=>(
              <li className="mb-4 items-center" key={index}>
                <Image src="/check-mark.png" width={30} height={30} className='inline-block' alt='check mark'></Image>   {feature}
              </li>
            ))}
          </ol>
        </div>
      </div>
     { modalOpen && <ModalPrice handleModal={handleModal} type={type}  Features ={ Features }/>} {/* Render the modal when modalOpen state is true */}
    </div>
  );
}
