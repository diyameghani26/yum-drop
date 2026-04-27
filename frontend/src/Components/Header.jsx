// import React, { useState , useContext} from "react";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
// import UserContext from "../utils/UserContext";


// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
  
// const [btnNameReact, setbtnNameReact] = useState("login")
//   const onlineStatus = useOnlineStatus();
// const {loggedInUser} = useContext(UserContext);
// console.log(loggedInUser)

//   return (
//     <>
//       {/* Navbar */}
//       <div className="w-full   font-serif shadow-sm px-5 md:px-8  py-2 md:py-4 flex items-center justify-between" >
        
//        {/* Logo */}
// <div className="flex items-center gap-2">
//   <img src="/—Pngtree—food logo_8366720.png" alt="" className="w-13 md:w-16" />
//   <h1 className="font-bold text-2xl md:text-4xl text-gray-700" style={{ fontFamily: "cursive" }}>
//     Yum<span className="text-amber-500">Drop</span>
//   </h1>
//   {/* Online Status Dot */}

// </div>

//         {/* Desktop Nav */}
//         <div className="hidden md:flex items-center gap-6 text-lg md:text-xl font-medium text-black">
//         <Link to = "/">  <p className="cursor-pointer hover:text-gray-500">Home</p></Link>
//        <Link to="contact">   <p className="cursor-pointer hover:text-gray-500">Contact us</p></Link>
//          <Link to = "help">  <p className="cursor-pointer hover:text-gray-500">Help</p></Link>
//       <p className="cursor-pointer hover:text-gray-500">Cart</p>
// <button
// onClick={()=>{
//   btnNameReact === "login" ? setbtnNameReact ("logout") : setbtnNameReact ("login")
// }}
// className="px-5 py-2 bg-amber-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
// {btnNameReact}
// </button>
//         </div>

//         {/* Hamburger (RIGHT SIDE) */}
//         <div className="md:hidden text-2xl cursor-pointer">
//           <i
//             className="ri-menu-line"
//             onClick={() => setMenuOpen(true)}
//           ></i>
//         </div>
//       </div>

//       {/* Overlay */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={() => setMenuOpen(false)}
//         ></div>
//       )}

//       {/* RIGHT SIDEBAR */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300
//         ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         {/* Close */}
//         <div className="flex justify-end p-4">
//           <i
//             className="ri-close-line text-2xl cursor-pointer"
//             onClick={() => setMenuOpen(false)}
//           ></i>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col gap-6 px-6 text-lg text-gray-600">
         
//          <Link to="/"  onClick={() => setIsMenuOpen(false)} >    <p className="cursor-pointer hover:text-black">Home</p></Link>
//         <Link to= "/contact"   onClick={() => setIsMenuOpen(false)} >   <p className="cursor-pointer hover:text-black">Contact us</p></Link>
//          <Link to = "help" onClick={() => setIsMenuOpen(false)}>  <p className="cursor-pointer hover:text-gray-500">Help</p></Link>
//      <p className="cursor-pointer hover:text-black">Cart</p>
//           <button 
// onClick={()=>{
//   btnNameReact === "login" ? setbtnNameReact ("logout") : setbtnNameReact ("login")
// }}
//           className="px-5 py-2 bg-amber-500 text-white font-medium rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//  {btnNameReact}
// </button>
// <p className="px-4">{loggedInUser}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;

import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

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

        {/* Cart */}
        <div className="flex items-center text-2xl text-gray-700">
          <Link to="/cart" className="relative hover:text-amber-500 transition">
            <i className="ri-shopping-cart-2-line"></i>

            <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] px-1.5 rounded-full">
              1
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
