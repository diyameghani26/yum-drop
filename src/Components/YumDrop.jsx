import React from "react";
import 'remixicon/fonts/remixicon.css'

const categories = [
  "Pizza",
  "Burger",
  "Sushi",
  "Dessert",
  "Healthy",
  "Noodles",
  "Drinks",
  "Tacos",
];

const products = [
  { name: "Creamy Pesto Pasta", price: "$14.50", rating: "4.8" , img:"https://tse3.mm.bing.net/th/id/OIP.6iCRt5h2uWV4Q7QZv4Qi_AHaE8?pid=Api&P=0&h=180"},
  { name: "Sakura Sushi Set", price: "$22.00", rating: "4.9", img:"https://tse2.mm.bing.net/th/id/OIP.Z1t5xWlwaUB3426FQBdTBQHaFW?pid=Api&P=0&h=180" },
  { name: "Strawberry Dream", price: "$8.50", rating: "4.7" , img:"https://tse4.mm.bing.net/th/id/OIP.ziNqz0qCfQB4aJKvxOhgsQHaLG?pid=Api&P=0&h=180" },
  { name: "Margherita Slice", price: "$4.00", rating: "4.5",img:"https://tse2.mm.bing.net/th/id/OIP.c3Q6gU6SSF_LHKfFlQ6v8wHaEJ?pid=Api&P=0&h=180" },
  { name: "Avocado Toast", price: "$12.00", rating: "4.6", img:"https://tse1.mm.bing.net/th/id/OIP.S4FdDhPoyM2UWeXaOCq5YwHaHa?pid=Api&P=0&h=180" },
  { name: "Berry Smoothie", price: "$6.50", rating: "4.8" , img:"https://tse2.mm.bing.net/th/id/OIP.SpQ6aK8jPZ7vZk66y7Rf7gHaLH?pid=Api&P=0&h=180"},
  { name: "Tuna Poke Bowl", price: "$16.00", rating: "4.9" , img:"https://tse3.mm.bing.net/th/id/OIP.kspvSVPAve-Rw4O2XQC4kAHaHa?pid=Api&P=0&h=180"},
  { name: "Matcha Latte", price: "$5.50", rating: "4.7", img:"https://tse3.mm.bing.net/th/id/OIP.Zklw_YcbeaCRhKvL_lHlCAHaE8?pid=Api&P=0&h=180" },
];

export default function YumDrop() {
  return (
    <div className="min-h-screen bg-[#F6F3EE]">

      {/* Navbar */}
      <div className=" mb-5  w-full px-8 py-5 flex items-center justify-between">
        {/* Logo */}
          <img src="./donut.png" alt=""  className="w-12"/>  <h1 className="font-bold text-4xl ml-2">
        Yum<span className="text-amber-500">Drop</span>
        </h1>

        {/* Search */}
        <div className="flex-1 mx-10">
          <input
            placeholder="Search for food, groceries, or happiness..."
            className="w-full rounded-full px-3 py-3 text-sm bg-white shadow-sm outline-none"
          />
        </div>

        {/* Nav Links */}
      <div className="flex gap-6 text-xl font-medium text-gray-500">

  <span className="flex items-center gap-2 cursor-pointer">
    <i className="ri-home-2-fill text-amber-500"></i>
    <p className="">Home</p>
  </span>

  <span className="flex items-center gap-2 cursor-pointer hover:text-black">
    <i className="ri-heart-3-fill text-amber-500"></i>

    <p>Likes</p>
  </span>

  <span className="flex items-center gap-2 cursor-pointer hover:text-black">
   <i className="ri-shopping-cart-2-fill text-amber-500"></i>
    <p>Cart</p>
  </span>

</div>

      </div>

      {/* Categories */}
      <div className="px-8 flex gap-3 overflow-x-auto pb-3">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`px-5 py-2 rounded-full text-sm whitespace-nowrap shadow-sm
            ${
              cat === "Burger"
                ? "bg-black text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Hero Banner */}
      <div className="px-8 mt-6">
        <div className="w-full bg-black rounded-[2rem] p-10 flex items-center justify-between shadow-lg">

          {/* Left Text */}
          <div>
            <p className="text-yellow-400 text-sm font-semibold">
              ⭐ 4.9 (2.5k+ Reviews)
            </p>

            <h2 className="text-5xl -tracking-wide font-extrabold leading-tight mt-3 text-amber-50">
              Double Truffle <br /> Smash Burger
            </h2>

            <p className="text-gray-300 mt-4 max-w-md text-sm leading-relaxed">
              Limited time only • Chef’s special blend of brisket and short rib
              with our signature truffle aioli.
            </p>

            {/* Buttons */}
            <div className="flex  flex-row gap-4 mt-6">
              <button className="px-6 py-3 rounded-full bg-orange-200 text-black font-semibold">
                Order Now →
              </button>
              <button className="px-6 py-3 rounded-full border border-white/30 text-white">
                View Details
              </button>
              
            </div>

          </div>

          {/* Right Icon */}
        <div className="hidden md:flex items-center justify-center relative">

  {/* Circle */}
  <div className="w-[180px] h-[180px] rounded-full  flex items-center justify-center relative">

    {/* Top Buttons */}
    <div className="absolute -top-17 mr-40 flex gap-3">

      {/* Button 1 */}
      <button className="px-3 py-4 w-46 rounded-full bg-white text-amber-500 shadow text-xl font-medium">
        Free Delivery
      </button>

      {/* Button 2 */}
      <button className="px-3 py-4 w-46 rounded-full bg-white text-xl  shadow  font-medium">
        ⏱ 23–30 min
      </button>


    </div>
 
    
  </div>
</div>

        </div>
      </div>

      {/* Popular Now */}
      <div className="px-8 mt-10">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Popular Now</h3>
          <p className="text-sm text-orange-500 cursor-pointer">See all</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6  gap-6 mt-6 pb-16 ">
          {products.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm p-3 hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex justify-between items-center">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                  ⭐ {item.rating}
                </span>

                <button className="w-8 h-7 rounded-full bg-amber-500 text-white flex items-center justify-center">
                  +
                </button>
              </div>

              {/* Image Placeholder */}
              <div className="h-[110px] bg-gray-100 rounded-xl mt-4 flex items-center justify-center">
                  <img
    src={item.img}
    alt={item.name}
    className="w-full h-[150px] object-cover rounded-xl mt-8 mb-3"
  />
              </div>

              {/* Name */}
              <h4 className="mt-9 font-semibold text-sm">{item.name}</h4>
              <p className="text-gray-500 text-sm mt-2">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
