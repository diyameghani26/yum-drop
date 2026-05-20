

import React, { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import{ categories} from "../utils/mockData";

import RestaurantCard, {
  withPromotedLabel,
} from "./RestaurantCard";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantCardPromoted =
  withPromotedLabel(RestaurantCard);

const Body = () => {
  const [ListOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredList, setfilteredList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setListOfRestaurant(resList);
    setfilteredList(resList);
  };

  const handelSearch = (e) => {
    const value = e.target.value;

    setsearchText(value);

    const filtered = ListOfRestaurant.filter((res) => {
      const name = res?.info?.name || "";

      return name
        .toLowerCase()
        .includes(value.toLowerCase());
    });

    setfilteredList(filtered);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1 className="text-gray-600 mt-50 text-center text-sm md:text-2xl font-medium">
        🛜 Oops! You're offline right now.
        <br className="hidden md:block" />
        Please check your internet connection and try again.
      </h1>
    );

  return (
    <div className="min-h-screen w-full bg-[#f8f8f8] pt-6 flex flex-col items-center px-6 md:px-12">

      {/* HERO SECTION */}

      <div className="w-full max-w-[1500px] flex flex-col items-center">

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-semibold md:font-bold text-gray-800 leading-tight text-left md:text-center">

          Order food & groceries.
          <br />

          Discover your flavor you’ll love.

          <span
            className="text-orange-500 italic"
            style={{ fontFamily: "cursive" }}
          >
            {" "}
            YumDrop
          </span>{" "}
          it!

        </h1>

        {/* SEARCH BAR */}

        <div className="w-full max-w-xl mt-5 md:mt-8">

          <div className="flex items-center bg-white rounded-full px-6 md:px-10  py-3 md:py-4 shadow-lg border border-gray-200 focus-within:border-orange-400 transition-all">

            <i className="ri-search-line text-gray-400 text-xl md:text-2xl mr-4"></i>

            <input
              type="text"
              placeholder="Search for restaurants and food"
              className="w-full bg-transparent outline-none text-sm md:text-xl"
              value={searchText}
              onChange={handelSearch}
            />

          </div>

        </div>

      </div>

      {/* WHAT'S ON YOUR MIND */}

      <div className="w-full max-w-375  mt-8 md:mt-16">

        <div className="flex justify-between items-center mb-5 md:mb-8">

          <h2 className="text-2xl md:text-4xl font-semibold md:font-bold text-gray-800">

            What's on your mind?

          </h2>

          <div className="hidden md:flex gap-3">

            <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-orange-300 transition">

              ←

            </button>

            <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-orange-300 transition">

              →

            </button>

          </div>

        </div>

        {/* CATEGORY SLIDER */}

        <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-4">

          {categories.map((item) => (

            <div
              key={item.id}
              className="flex flex-col items-center min-w-fit cursor-pointer group"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full group-hover:scale-105 transition duration-300"
              />

              <p className="mt-4 text-sm md:text-lg font-medium text-gray-700">

                {item.name}

              </p>

            </div>

          ))}

        </div>

      </div>

      {/* DIVIDER */}

      <div className="w-full max-w-[1500px] border-t border-gray-200 my-8  md:my-14 "></div>

      {/* TOP RESTAURANTS */}

      <div className="w-full max-w-375">

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-10">

          <h2 className="text-2xl md:text-4xl font-semibold md:font- 
          text-gray-800">

            Top restaurant chains

          </h2>

          <button
            className="w-fit px-6 py-3 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-all shadow-md"
            onClick={() => {

              const topRated = resList.filter((res) => {
                const info =
                  res?.info || res?.card?.card?.info;

                return (
                  info?.avgRating &&
                  Number(info.avgRating) > 4
                );
              });

              setfilteredList(topRated);

            }}
          >

            Filter Top Rated

          </button>

        </div>

        {/* RESTAURANT GRID */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

          {filteredList.map((restaurant, index) => (

            <Link
              key={restaurant?.info?.id || index}
              to={`/restaurants/${
                restaurant?.info?.id ?? index
              }`}
            >

              {restaurant?.info?.promoted ? (

                <RestaurantCardPromoted
                  resData={restaurant}
                />

              ) : (

                <RestaurantCard
                  resData={restaurant}
                />

              )}

            </Link>

          ))}

        </div>

      </div>
  <footer className="w-full bg-[#ebebeb] md:mt-20 mt-8">

  <div className="max-w-[1500px] mx-auto px-6 md:px-10 py-14">

    {/* TOP SECTION */}

    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 border-b border-gray-200 pb-10">

      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">

        For better experience, <br className="hidden md:block" />
        download the YumDrop app now.

      </h2>

   <div className="flex flex-row gap-3 w-full sm:w-auto">

  {/* GOOGLE PLAY */}

  <button className="flex-1 sm:flex-none bg-black text-white px-5 sm:px-5 md:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300">

    <i className="ri-google-play-fill text-lg sm:text-2xl"></i>

    <div className="text-left leading-tight">

      <p className="text-[9px] sm:text-xs text-gray-300">
        GET IT ON
      </p>

      <h3 className="text-[11px] sm:text-sm md:text-base font-semibold">
        Google Play
      </h3>

    </div>

  </button>

  {/* APP STORE */}

  <button className="flex-1 sm:flex-none bg-black text-white px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-2xl flex items-center justify-center gap-2 sm:gap-3 hover:scale-105 transition-all duration-300">

    <i className="ri-apple-fill text-lg sm:text-2xl"></i>

    <div className="text-left leading-tight">

      <p className="text-[9px] sm:text-xs text-gray-300">
        Download on the
      </p>

      <h3 className="text-[11px] sm:text-sm md:text-base font-semibold">
        App Store
      </h3>

    </div>

  </button>

</div>

    </div>

    {/* FOOTER LINKS */}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:pt-12">

      {/* BRAND */}

      <div>

        <h1 className="text-3xl font-bold text-orange-500">

          YumDrop

        </h1>

        <p className="mt-4 text-gray-500 text-sm leading-6">

          Delivering happiness,
          one bite at a time 🍔

        </p>

        <p className="mt-6 text-gray-400 text-sm">

          © 2026 YumDrop Limited

        </p>

      </div>

      {/* COMPANY */}

      <div>

        <h3 className="text-lg font-semibold text-gray-800 mb-5">

          Company

        </h3>

        <ul className="space-y-3 text-gray-600 text-sm">

          <li className="hover:text-orange-500 cursor-pointer transition">
            About Us
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Careers
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Team
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            YumDrop Blog
          </li>

        </ul>

      </div>

      {/* CONTACT */}

      <div>

        <h3 className="text-lg font-semibold text-gray-800 mb-5">

          Contact

        </h3>

        <ul className="space-y-3 text-gray-600 text-sm">

          <li className="hover:text-orange-500 cursor-pointer transition">
            Help & Support
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Partner with us
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Ride with us
          </li>

          <li className="hover:text-orange-500 cursor-pointer transition">
            Report Fraud
          </li>

        </ul>

      </div>

      {/* AVAILABLE */}

      <div>

        <h3 className="text-lg font-semibold text-gray-800 mb-5">

          Available In

        </h3>

        <ul className="space-y-3 text-gray-600 text-sm">

          <li>Bhopal</li>
          <li>Indore</li>
          <li>Pune</li>
          <li>Delhi</li>
          <li>Mumbai</li>

        </ul>

        {/* SOCIALS */}

        <div className="flex gap-4 mt-6 text-xl text-gray-600">

          <i className="ri-instagram-line hover:text-orange-500 cursor-pointer transition"></i>

          <i className="ri-twitter-x-line hover:text-orange-500 cursor-pointer transition"></i>

          <i className="ri-linkedin-box-line hover:text-orange-500 cursor-pointer transition"></i>

          <i className="ri-youtube-line hover:text-orange-500 cursor-pointer transition"></i>

        </div>

      </div>

    </div>

  </div>

</footer>

    </div>
    
  );
};

export default Body;
  