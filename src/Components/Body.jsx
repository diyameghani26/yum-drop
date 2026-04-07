import React from "react";
import resList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  const [ListOfRestaurant, setListOfRestaurant] = useState(resList)

  return (
    <div className=" w-full pt-4 flex flex-col justify-center px-6 md:px-16 md:items-center">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 leading-tight text-left md:text-center">
        Order food & groceries.
        <br />
        Discover your flavor  you’ll love.{" "}
        <span
          className="text-amber-500 italic"
          style={{ fontFamily: "cursive" }}
        >
          <span className="text-gray-700"> Yum</span>Drop
        </span>{" "}
        it!
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-md mt-5 md:mx-auto">
        <div className="flex items-center bg-white rounded-full px-5 py-3 shadow-md border border-gray-200 focus-within:border-amber-400 transition-all">

          <i className="ri-search-line text-gray-400 text-xl mr-3"></i>

          <input
            type="text"
            placeholder="Search your cravings..."
            className="w-full bg-transparent outline-none text-[12px] md:text-base"
          />
        </div>
      </div>

 <div className="mt-5 w-full  justify-start">
  <button
    className="w-full sm:w-auto px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl bg-amber-500 font-serif hover:bg-amber-600 transition-all"
    onClick={() => {
      const filteredList = resList.filter((res) => {
        const info = res?.info || res?.card?.card?.info;
        return info?.avgRating && Number(info.avgRating) > 4;
      });

      setListOfRestaurant(filteredList);
    }}
  >
    Top Rated Restaurants
  </button>
</div>
      <div  className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
        {ListOfRestaurant.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant?.info?.id || index}
            resData={restaurant}
          />

        ))}

      </div>


    </div>
  );
};

export default Body;

