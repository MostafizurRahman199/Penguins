// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import styles from '@/app/components/main.module.css';

// export default function () {
//   return (
//     <nav className={styles.nav_bg}>
//      <div className="mx-auto max-w-7xl px-2">
//      <div className="flex h-16 items-center justify-between">
//         <div className="flex flex-shrink-0 items-center ">
//           <Image
//             src="/nav_logo4.png"
//             width={80}
//             height={80}
//             className="block "
//           ></Image>
//           <h1 className="text-white flex items-center px-2 text-2xl font-medium  ">
//             <Link href={"/"}>Penguins</Link>
//           </h1>
//         </div>
//         <div className="flex space-x-4">
//           <Link
//             href={"/"}
//             className=" bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-400"
//           >
//             Home
//           </Link>
//           <Link
//             href={"/"}
//             className=" bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium  hover:bg-cyan-400 transition duration-150 ease-in-out"
//           >
//             Testimonials
//           </Link>
//           <Link
//             href={"/"}
//             className=" bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium  hover:bg-cyan-400  transition duration-150 ease-in-out"
//           >
//             Price
//           </Link>
//           <Link
//             href={"/"}
//             className=" bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium  hover:bg-cyan-400 transition duration-150 ease-in-out"
//           >
//             Projects
//           </Link>
//         </div>
//       </div>
//      </div>
//     </nav>
//   );
// }
"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import styles from '@/app/components/main.module.css';
import DarkMode from "./DarkMode";

export default function Navbar({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav_bg}>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/nav_logo4.png"
              width={80}
              height={80}
              className="block"
            />
            <h1 className="text-white flex items-center px-2 text-2xl font-medium">
              <Link href={"/"}>Penguins</Link>
            </h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              href={"/"}
              className="bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-400"
            >
              Home
            </Link>
            <Link
              href={"/SocialMedia"}
              className="bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-400"
            >
              Profile
            </Link>
            <Link
              href={"/"}
              className="bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-400 transition duration-150 ease-in-out"
            >
              Testimonials
            </Link>
            <Link
              href={"/"}
              className="bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-400 transition duration-150 ease-in-out"
            >
              Price
            </Link>
            <Link
              href={"/"}
              className="bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-400 transition duration-150 ease-in-out"
            >
              Projects
            </Link>

            <button className="bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-cyan-400 transition duration-150 ease-in-out">
            <DarkMode toggleTheme={toggleTheme} />

            </button>
           
         
          </div>
          {/* Responsive Menu */}
          <div className="md:hidden">
            {/* Mobile Menu Button */}
            <button
              className="text-white hover:text-cyan-400 focus:outline-none"
              onClick={toggleMenu}
            >
              {/* Hamburger Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className={`fixed top-16 left-0 right-0 bg-pink-800 p-4 text-white shadow-lg z-10`}>
                <Link href={"/"} className="block py-2 px-4 hover:bg-cyan-400">Home</Link>
                <Link href={"/"} className="block py-2 px-4 hover:bg-cyan-400">Testimonials</Link>
                <Link href={"/"} className="block py-2 px-4 hover:bg-cyan-400">Price</Link>
                <Link href={"/"} className="block py-2 px-4 hover:bg-cyan-400">Projects</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}


