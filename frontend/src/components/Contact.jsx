import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";


function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => console.log(data);
  return (
    <div>
         <div className="flex h-screen items-center justify-center">
      <div id="my_modal_2" className="border-[2px] shadow-md p-5 rounded-md">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-lg">Contact Us</h3>
           
           
            <div className="mt-4 space-y-2 p-6">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Message</span>
              <br />
              <input
                type="text"
                placeholder="Enter your message"
                className="w-80 px-3 py-6 border rounded-md outline-none"
                {...register("message", { required: true })}
              />
              <br />
              {errors.message && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Submit
              </button>
             
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </div>
    </div>


    </div>
  )
}

export default Contact