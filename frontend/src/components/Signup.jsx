import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email:data.email,
      password:data.password,
    }
    await axios.post("http://localhost:4001/user/signup", userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data){
        toast.success("Signup successfull");
        navigate(from, { replace: true });
        
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
    }).catch((err) => {
      if(err.response){
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    });
  };
  return (
    <div className="flex h-screen items-center justify-center">
      <div id="my_modal_2" className="border-[2px] shadow-md p-5 rounded-md">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click outside to close</p>
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
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
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            {/* button */}
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have account?{" "}
                <Link to="/" className="underline text-blue-500 cursor-pointer">
                  Login
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
