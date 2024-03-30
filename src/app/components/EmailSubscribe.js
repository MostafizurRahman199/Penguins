import React from "react";

export default function EmailSubscribe() {
  return (
    <div>
      <form className="">
        <div className="grid grid-cols-3 flex gap-4 justify-center items-center mb-4 mt-2">
          <div className="">
            <p className="font-bold ">Sign up for news letter</p>
          </div>

          <div className="">
            <input
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  bg-clip-padding border border-solid border-gray-300 rounded "
              placeholder="Email address"
            />
          </div>

          <div>
            <button className="inline-block px-6 py-2 border-2 border-white rounded-md text-white font-medium leading-tight uppercase" type="submit" >Subscribe</button>
          </div>
        </div>
      </form>
    </div>
  );
}
