import React, { useState } from "react";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full  bg-[#fdefe48f] font-serif shadow-sm px-5 md:px-8 py-4 flex items-center justify-between" style={{ fontFamily: "cursive" }}>
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/—Pngtree—food logo_8366720.png" alt="" className="w-13 md:w-16" />
          <h1 className="font-bold text-2xl md:text-4xl text-gray-700 ">
            Yum<span className="text-amber-500">Drop</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-lg md:text-xl font-medium text-black">
          <p className="cursor-pointer hover:text-gray-500">Home</p>
          <p className="cursor-pointer hover:text-gray-500">About us</p>
          <p className="cursor-pointer hover:text-gray-500">Contact us</p>
          <p className="cursor-pointer hover:text-gray-500">Cart</p>
          <button className="w-18  bg-amber-500 rounded-xl  ">Login</button>
        </div>

        {/* Hamburger (RIGHT SIDE) */}
        <div className="md:hidden text-2xl cursor-pointer">
          <i
            className="ri-menu-line"
            onClick={() => setMenuOpen(true)}
          ></i>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* RIGHT SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end p-4">
          <i
            className="ri-close-line text-2xl cursor-pointer"
            onClick={() => setMenuOpen(false)}
          ></i>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-6 px-6 text-lg text-gray-600">
          <p className="cursor-pointer hover:text-black">Home</p>
          <p className="cursor-pointer hover:text-black">About us</p>
          <p className="cursor-pointer hover:text-black">Contact us</p>
          <p className="cursor-pointer hover:text-black">Cart</p>
        </div>
      </div>
    </>
  );
};

export default Header;
