import React from "react";
import banner from "../../public/banner.jpg"

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 mt-2 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Similique explicabo voluptatem adipisci facere fuga tenetur
              veritatis numquam magni rem ut!
            </p>
          
          <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="daisy@site.com" />
          </label>
          </div>
          <button className="btn btn-secondary mt-6">Get Started</button>
        </div>
        <div className="w-full md:w-1/2 order-1">
            <img src={banner} className="w-92 h-92" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
