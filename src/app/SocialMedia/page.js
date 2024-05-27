


import Image from 'next/image';
import React from 'react';
import Navbar from '../components/Nabvar';
import Link from 'next/link';

export default function SocialMedia() {
  return (
    <div className="">
      <Navbar />
      <div className="flex w-full flex-row flex-wrap">
        <div className="w-full md:w-1/4 lg:w-1/5 bg-white shadow-lg">
          <div className="sticky top-0 bg-white p-5">
            <Image
              className="rounded-3xl border border-indigo-100 shadow-lg mx-auto"
              width={300}
              height={300}
              src="/man3.jpg"
              alt="man"
            />

            <div className="mt-5 w-full border-t pt-2 text-center text-xl text-gray-600">
              John Smith
            </div>

            <div className="flex h-screen w-full flex-col hover:cursor-pointer rounded-lg">
              <Link
                href="/"
                className="w-full bg-gray-200 p-3 text-left text-xl font-semibold text-gray-600 hover:bg-gray-300"
              >
                Message
                <Image
                  src="/message-2-512.png"
                  width={30}
                  height={30}
                  alt="logout"
                  className="float-right pr-1 pt-1 text-2xl text-pink-600"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/"
                className="w-full bg-gray-200 p-3 text-left text-xl font-semibold text-gray-600 hover:bg-gray-300"
              >
                Setting
                <Image
                  src="/settings-9-512.png"
                  width={30}
                  height={30}
                  alt="logout"
                  className="float-right pr-1 pt-1 text-2xl text-pink-600"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/"
                className="w-full bg-gray-200 p-3 text-left text-xl font-semibold text-gray-600 hover:bg-gray-300"
              >
                Logout
                <Image
                  src="/logout-512.png"
                  width={30}
                  height={30}
                  alt="logout"
                  className="float-right pr-1 pt-1 text-2xl text-pink-600"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:24 h-full w-full overflow-y-scroll mt-10 p-5 md:w-3/4 md:px-12 lg:w-4/5 max-h-screen">
          <div>
            <div className="w-full rounded-lg bg-gray p-5 shadow">
              <textarea
                name="" 
                id=""
                className="w-full rounded-lg border border-pink-500 bg-pink-100 p-2 shadow focus:border-pink-500 focus:ring-pink-600"
                rows={10}
                placeholder="Share your thoughts!!"
              ></textarea>

            <div className='mt-3 w-full grid grid-cols-2'>
                  <div className='col-start-1 col-end-1'>
                    <select className='float-left w-full rounded-lg border bg-gray-200 p-2 shadow'>\
                    <option className=''>Public</option>
                    <option className=''>Private</option>
                    <option className=''>Custom</option>
                    <option className=''>Friend</option>
                    </select>
                  </div>


             </div>


            </div>

            <div className="mt-3 flex flex-col">
              <div className="mt-3 bg-white border rounded-t-lg">
                <Image
                  className="rounded-lg mt-3 mb-3 shadow-lg mx-auto"
                  src="/natural.jpg"
                  width={500}
                  height={300}
                  alt="nature"
                />
              </div>

              <div className="border bg-white p-5 text-xl font-semibold text-gray-700 shadow text-center">
                A Tree is giving the oxygen and we don't see it
              </div>

              <div className="flex justify-center bg-white p-1 shadow">
                <div className="flex w-1/3 justify-around">
                  <div className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:border-b-2 hover:border-pink-500">
                    <Image
                      src="/facebook-like-512 (1).png"
                      width={40}
                      height={40}
                      className="mx-auto"
                      alt="like"
                    />
                  </div>

                  <div className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:border-b-2 hover:border-pink-500">
                    <Image
                      src="/comments-512.png"
                      width={40}
                      height={40}
                      className="mx-auto"
                      alt="comments"
                    />
                  </div>

                  <div className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:border-b-2 hover:border-pink-500">
                    <Image
                      src="/sharethis-512.png"
                      width={40}
                      height={40}
                      className="mx-auto"
                      alt="share"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-3 flex flex-col">
              <div className="mt-3 bg-white border rounded-t-lg">
                <Image
                  className="rounded-lg mt-3 mb-3 shadow-lg mx-auto"
                  src="/antoine.jpg"
                  width={500}
                  height={300}
                  alt="antoine"
                />
              </div>

              <div className="border bg-white p-5 text-xl font-semibold text-gray-700 shadow text-center">
                A Tree is giving the oxygen and we don't see it
              </div>

              <div className="flex justify-center bg-white p-1 shadow">
                <div className="flex w-1/3 justify-around">
                  <div className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:border-b-2 hover:border-pink-500">
                    <Image
                      src="/facebook-like-512 (1).png"
                      width={40}
                      height={40}
                      className="mx-auto"
                      alt="like"
                    />
                  </div>

                  <div className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:border-b-2 hover:border-pink-500">
                    <Image
                      src="/comments-512.png"
                      width={40}
                      height={40}
                      className="mx-auto"
                      alt="comments"
                    />
                  </div>

                  <div className="w-1/3 text-center text-xl font-semibold text-gray-700 hover:border-b-2 hover:border-pink-500">
                    <Image
                      src="/sharethis-512.png"
                      width={40}
                      height={40}
                      className="mx-auto"
                      alt="share"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
