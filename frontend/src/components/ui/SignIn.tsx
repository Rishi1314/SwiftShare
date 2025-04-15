// import React from 'react'

// const SignIn = () => {
//   return (
//     <div>SignIn</div>
//   )
// }

// export default SignIn
import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import OAuth from "../components/OAuth";
// import axios from "axios";
// import {
//   signInFailure,
//   signInStart,
//   signInSuccess,
// } from "../redux/user/userSlice";
// import { useDispatch } from "react-redux";

export default function Signup({login,setLogin}) {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
//   const dispatch = useDispatch();

//   const navigate = useNavigate();
//   const customConfig = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   setLoading(true);
    //   setError(false);
    //   dispatch(signInStart());
    //   let res = await axios.post(
    //     "/api/auth/signup",
    //     JSON.stringify(formData),
    //     customConfig
    //   );
    //   let res2 = await axios.post(
    //     "/api/auth/signin",
    //     JSON.stringify(formData),
    //     customConfig
    //   );

    //   const data = res.data;
    //   const data2 = res2.data;
    //   setLoading(false);
    //   if (data.success === false) {
    //     dispatch(signInFailure(data2));
    //     setError(true);
    //     return;
    //   }
    //   dispatch(signInSuccess(data2));
    //   navigate("/");
    // } catch (error) {
    //   setLoading(false);
    //   setError(true);
    // }
  };
  return (
    <div
      loading="lazy"
      className="flex justify-center w-[30%] items-center p-3 text-white   rounded-[10px]
         shadow-lg ring-1 ring-black/5 max-[767px]:w-[90%] bg-[#92b7ef]"
    >
      <div
        className=""
      >
        <h1 className="text-3xl text-center font-semibold my-7">
          Sign in to your account.
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col gap-4"
        >
          {/* <div className="w-[70%] max-[767px]:w-[100%] swift relative">
            <input
              type="text"
              placeholder="Enter Username"
              id="username"
              className="w-[100%]
          addProjectCardInput p-3"
              onChange={handleChange}
            />
            <span className="input-border"></span>
          </div> */}
          <div className="w-[70%] max-[767px]:w-[100%] swift relative">
            <input
              type="email"
              placeholder="Enter Email"
              id="email"
              className="w-[100%]
          addProjectCardInput p-3"
              onChange={handleChange}
            />
            <span className="input-border"></span>
          </div>
          <div className="w-[70%] max-[767px]:w-[100%] swift relative">
            <input
              type="password"
              placeholder="Enter Password"
              id="password"
              className="w-[100%]
          addProjectCardInput p-3"
              onChange={handleChange}
            />
            <span className="input-border"></span>
          </div>

          <button
            disabled={loading}
            className="bg-white rounded-[10px] hover:scale-110 duration-100 text-blue-400 py-2 font-bold max-[767px]:w-[100%] text-[100%] w-[50%] font-lexend"
          >
            <span className="">{loading ? "Loading" : "Sign In"}</span>
          </button>
          <div className="bg-[#faf8f8] w-[70%] h-[1px]"></div>
          <div className="flex justify-center w-[100%] max:[767px]:w-[70%]">
            {/* <OAuth /> */}
          </div>
        </form>
        <div className="justify-center max-[767px]:flex-col max-[767px]:items-center flex gap-2 mt-5">
          <p>Want to create an account?</p>
          {/* <Link to="/sign-in" className="hover:scale-105 duration-200"> */}
            <span onClick={()=>{setLogin(false)}} className="  text-blue-400 hover:scale-110 cursor-pointer duration-100 px-2 rounded-lg font-mukta bg-white">
              Sign up
            </span>
          {/* </Link> */}
        </div>
        <div className="flex justify-center">
          <p className="text-red-700 mt-5">{error && "Something went Wrong"}</p>
        </div>
      </div>
    </div>
  );
}