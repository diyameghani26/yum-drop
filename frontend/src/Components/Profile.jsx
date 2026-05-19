import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";
const Profile = () => {

  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();
const { login } = useContext(AuthContext);

const handleLogin = () => {
  console.log(email, password);

  login(email, password);
  navigate("/profilepage");
};


  return (
    <div className="min-h-screen  flex items-center justify-center bg-gray-100 px-6 sm:px-5 lg:px-8 py-10 pb-40 ">
      
      {/* Card */}
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl shadow-md p-5 sm:p-8 md:p-10 lg:mt-10">

        

        {/* Heading */}
        <div className="text-center mt-3">
          <h2 className="text-3xl sm:text-4xl  md:text:4xl lg:text-4xl  font-medium text-gray-800">
            Welcome Back
          </h2>
          <p className="text-[17px] sm:text-base text-gray-500 mt-5">
            Enter your details to enjoy your next meal.
          </p>
        </div>

        {/* Form */}
        <div className="mt-7 space-y-5">
          
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
             value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
             value={password}
  onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-amber-400 text-sm sm:text-base"
          />

          {/* Forgot */}
          <div className="text-right text-sm text-amber-500 cursor-pointer">
            Forgot Password?
          </div>

          {/* Login Button */}
          <button
         onClick={handleLogin}
          className="w-full py-3 bg-amber-500 text-white rounded-xl font-medium hover:bg-amber-600 transition text-sm sm:text-base">
            Login
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-5 my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <p className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">
            OR CONTINUE WITH
          </p>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <h1 className="mb-3">Social Buttons </h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 py-2 border rounded-xl text-sm sm:text-base hover:bg-gray-50">
            Google
          </button>
          <button className="flex-1 py-2 border rounded-xl text-sm sm:text-base hover:bg-gray-50">
            Apple
          </button>
        </div>

        {/* Signup */}
        <p className="text-center text-sm sm:text-base text-gray-500 mt-6">
          Don’t have an account?{" "}
          <span className="text-amber-500 cursor-pointer">Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;

