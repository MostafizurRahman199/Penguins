import React from "react";

export default function Form() {
  return (
    <div className="mx-5 my-10">
      <div className="w-full lg:w-1/2 mx-auto border-2 rounded-lg px-4 py-6">
        <section className="bg-white lg:h-screen mt-10">
          <div className="py-8 lg:py-16 px-4 mx-auto">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
              Contact Us
            </h2>

            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              cumque illo maxime modi laudantium, reiciendis perspiciatis
              quidem.
            </p>

            <form id="form" action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />

                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 mt-3"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Write your subject..."
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>

                <textarea
                  name="message"
                  id="message"
                  className="block p-2.5 w-full h-32 lg:h-52 text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>

              <div className="text-center mx-auto">
                <button
                  type="button"
                  className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-blue-700 sm:w-fit text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
