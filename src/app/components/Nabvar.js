import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from '@/app/components/main.module.css';

export default function () {
  return (
    <nav className={styles.nav_bg}>
     <div className="mx-auto max-w-7xl px-2">
     <div className="flex h-16 items-center justify-between">
        <div className="flex flex-shrink-0 items-center ">
          <Image
            src="/nav_logo4.png"
            width={80}
            height={80}
            className="block "
          ></Image>
          <h1 className="text-white flex items-center px-2 text-2xl font-medium">
            <Link href={"/"}>Penguins</Link>
          </h1>
        </div>
        <div className="flex space-x-4">
          <Link
            href={"/"}
            className=" bg-pink-600 text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href={"/"}
            className=" bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Testimonials
          </Link>
          <Link
            href={"/"}
            className=" bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Price
          </Link>
          <Link
            href={"/"}
            className=" bg-pink-500 text-white px-3 py-2 rounded-md text-sm font-medium"
          >
            Projects
          </Link>
        </div>
      </div>
     </div>
    </nav>
  );
}
