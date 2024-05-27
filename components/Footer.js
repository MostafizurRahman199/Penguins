import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import EmailSubscribe from '@/app/components/EmailSubscribe'

export default function Footer() {
  return (
    <footer className="text-center bg-gray-800 text-white">
      <div className="mx-auto mb-6 w-1/2">
        <div className="px-6 pt-6">
          <div>
            <Link
              type="button"
              href={"/"}
              className="rounded-full border-2 border-white text-white leading-normal focus:ring-0 focus:outline-none w-9 h-9 m-1 uppercase "
            >
              <Image
                src="/instraaa.png"
                href={"/"}
                width={30}
                height={30}
                className="rounded-full w-8 h-8"
              />
            </Link>
            <Link
              type="button"
              href={"https://www.facebook.com/"}
              className="rounded-full border-2 border-white text-white leading-normal focus:ring-0 focus:outline-none w-9 h-9 m-1 uppercase "
            >
              <Image
                src="/fb.webp"
                href={"www.facebook.com/"}
                width={100}
                height={100}
                className=""
              />
            </Link>
            <Link
              type="button"
              href={"/"}
              className="rounded-full border-2 border-white text-white leading-normal focus:ring-0 focus:outline-none w-9 h-9 m-1 uppercase "
            >
              <Image
                src="/Twitter-icon-design-on-transparent-background-PNG.png"
                href={"/"}
                width={30}
                height={30}
                className="rounded-full w-8 h-8"
              />
            </Link>
          </div>
        </div>
        <EmailSubscribe></EmailSubscribe>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ipsam
          quam aspernatur quisquam veritatis? Quis ullam, est odit, esse eaque
          iste, soluta nihil ipsum magnam cum rem iusto sint aut! Asperiores
          omnis optio, ipsa earum debitis voluptas obcaecati voluptatibus
          aperiam!
        </p>
      </div>
      <div className="bg-gray-900 text-white p-4">
        @ 2024 Copyright: <Link href={"/"}>Penguins</Link>
      </div>
    </footer>
  );
}
