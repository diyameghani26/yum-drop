

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { AuthContext } from "../utils/AuthContext";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
 const { user, logout } = useContext(AuthContext);

// selector - react hook
// subscribing to the store using a selector
const cartItems = useSelector((store) => store.cart.items)
console.log(appStore);

return (
  <>
    <div className="w-full font-serif shadow-sm px-5 md:px-8 py-3 md:py-4 flex items-center justify-between bg-white sticky top-0 z-40">

      {/* LEFT - LOGO */}
      <div className="flex items-center gap-2">
        <img
          src="/—Pngtree—food logo_8366720.png"
          alt="logo"
          className="w-12 md:w-14"
        />

        <h1 className="font-bold text-xl md:text-3xl text-gray-700" style={{ fontFamily: "cursive" }}>
          Yum<span className="text-amber-500 italic">Drop</span>
        </h1>
      </div>

      {/* RIGHT SIDE (Nav + Cart together) */}
      <div className="flex items-center gap-6 ml-auto">

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-amber-500 transition">Home</Link>
          <Link to="/contact" className="hover:text-amber-500 transition">Contact</Link>
          <Link to="/help" className="hover:text-amber-500 transition">Help</Link>

           
        </div>

       
        <div className="flex items-center text-2xl text-gray-700">
          <Link to="/cart" className="relative hover:text-amber-500 transition">
            <i className="ri-shopping-cart-2-line"></i>

            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] px-1.5 rounded-full">
              {cartItems.length}
            </span>
          </Link>

            <Link to="/profile" className="hover:text-amber-500 transition ml-6 hidden md:block ">
  <div className="w-8 h-8 flex items-center justify-center rounded-full  border-2 hover:bg-amber-100 transition">
    <i className="ri-user-3-line text-xl"></i>   
         
        
  </div>
 
  
</Link>
        </div>

      </div>

    </div>
  </>
);
};

export default Header;
