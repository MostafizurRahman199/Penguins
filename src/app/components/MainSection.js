import Link from "next/link";
import React from "react";


export default function MainSection() {
  return (
    <main className="bg-[url('https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610046077249-XZ6VZ2POTIDIS6CZ2J5X/12.jpg')] h-screen bg-no-repeat bg-cover">
      <div className="relative px-8">
        <div className="mx-auto max-w-3xl pt-48 pb-32">

        <h1 className="text-4xl font-bold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-t from-cyan-500 to-cyan-300">
          Data to enrich your online business
        </h1>

        <p className="mt-6 text-lgr leading-8 text-cyan-400 text-center ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          cupiditate nulla iste ratione fugit adipisci eius aperiam nobis at aut
          laudantium perferendis ullam, atque vel necessitatibus cumque itaque
          facilis commodi?
        </p>

        <div className="mt-8 flex gap-x-4 justify-center">
          <Link
            href={"/"}
            className="inline-block rounded-lg bg-pink-500 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-2 ring-white"
          >
            Learn more
          </Link>
        </div>

        </div>
      </div>
    </main>
  );
}
