// import React, { useEffect } from "react";
// import {resList} from "../utils/mockData"
// import { useState } from "react";
// import RestaurantCard , { withPromotedLabel}from "./RestaurantCard";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";

// const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)
// const Body = () => {

//   const [ListOfRestaurant, setListOfRestaurant] = useState([])
//   const [searchText, setsearchText] = useState("")
//   const [filteredList, setfilteredList] = useState([]);



//   useEffect(() => {
//     fetchData();
//   }, [])


//   const fetchData = async () => {

//    setListOfRestaurant(resList);
//   setfilteredList(resList);
//    };

//   const handelSearch = (e) =>{
//     const value = e.target.value 
//     setsearchText(value);
  

//   const filtered = ListOfRestaurant.filter((res) =>{
//      const name = res?.info?.name || "";
//       return name.toLowerCase().includes(value.toLowerCase());
//   })

//    setfilteredList(filtered); 

//    console.log(filteredList)
//   };



//   const onlineStatus = useOnlineStatus();

//   if(onlineStatus === false) 
//     return(

  
//    <h1 className="text-gray-600  mt-50 text-center  text-sm md:text-2xl font-medium">
//     🛜 Oops! You're offline right now.  
//   <br className="hidden md:block" />
//   Please check your internet connection and try again.
// </h1>


//   )
//     return (
//       <div className=" min-w-full pt-4 flex flex-col justify-center px-6 md:px-16 md:items-center">

//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 leading-tight text-left md:text-center">
//           Order food & groceries.
//           <br />
//           Discover your flavor  you’ll love.{" "}
//           <span
//             className="text-amber-500 italic"
//             style={{ fontFamily: "cursive" }}
//           >
//             <span className="text-gray-700"> Yum</span>Drop
//           </span>{" "}
//           it!
//         </h1>

//         {/* Search Bar */}
//         <div className="w-full max-w-md mt-5 md:mx-auto">
//           <div className="flex items-center bg-white rounded-full px-5 py-3 shadow-md border border-gray-200 focus-within:border-amber-400 transition-all">

//             <i className="ri-search-line text-gray-400 text-xl mr-3"></i>

//             <input
//               type="text"
//               placeholder="Search your cravings..."
//               className="w-full bg-transparent outline-none text-[12px] md:text-base"
//               value={searchText}
//               onChange={handelSearch}
//             />
//           </div>
//         </div>

//         <div className="mt-5 w-full justify-center">
//           <button
//             className="w-full   sm:w-auto px-4 py-2 md:px-5 md:py-3 text-sm md:text-base rounded-xl bg-amber-500 font-serif hover:bg-amber-600 transition-all"
//             onClick={() => {
//               const topRated = resList.filter((res) => {
//                 const info = res?.info || res?.card?.card?.info;
//                 return info?.avgRating && Number(info.avgRating) > 4;
//               });

//               setfilteredList(topRated);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//         <div className=" mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 gap-2 md:gap-6">
//           {filteredList.map((restaurant, index) => (
//           <Link 
//            key={restaurant?.info?.id || index}
//         to={`/restaurants/${restaurant?.info?.id ?? index}`}> 


//      {restaurant?.info?.promoted 
//   ? <RestaurantCardPromoted resData={restaurant}/> 
//   : <RestaurantCard resData={restaurant}/>
// }

//           </Link> 

//           ))}

//         </div>


//       </div>
//     );
  
  

// };

// export default Body;

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

        <div className="w-full max-w-2xl mt-5 md:mt-8">

          <div className="flex items-center bg-white rounded-full px-6 py-3 md:py-4 shadow-lg border border-gray-200 focus-within:border-orange-400 transition-all">

            <i className="ri-search-line text-gray-400 text-xl md:text-2xl mr-4"></i>

            <input
              type="text"
              placeholder="Search for restaurants and food"
              className="w-full bg-transparent outline-none text-sm md:text-lg"
              value={searchText}
              onChange={handelSearch}
            />

          </div>

        </div>

      </div>

      {/* WHAT'S ON YOUR MIND */}

      <div className="w-full max-w-[1500px]  mt-8 md:mt-16">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">

            What's on your mind?

          </h2>



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

      <div className="w-full max-w-[1500px] border-t border-gray-200 my-14"></div>

      {/* TOP RESTAURANTS */}

      <div className="w-full max-w-[1500px]">

        <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mb-10">

          <h2 className="text-2xl md:text-4xl font-bold text-gray-800">

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

    </div>
  );
};

export default Body;
  