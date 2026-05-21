

import React from "react";
import { Link } from "react-router-dom";

import { useFavourite } from "../context/FavouriteContext";

const Favourites = () => {

  const { favourites, toggleFavourite } = useFavourite();

  return (

    <div className="min-h-screen bg-[#f8f8f8] px-6 md:px-12 py-8">

      {/* HEADING */}

      <div className="max-w-375 ">

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">

          Your Favourites ❤️

        </h1>

        <p className="mt-3 text-gray-500 text-sm md:text-base">

          Restaurants you loved the most.

        </p>

      </div>

      {/* EMPTY STATE */}

      {favourites.length === 0 ? (

        <div className="flex flex-col items-center justify-center mt-28 text-center">

          <div className="w-28 h-28 rounded-full bg-red-100 flex items-center justify-center">

            <i className="ri-heart-3-line text-5xl text-red-500"></i>

          </div>

          <h2 className="mt-6 text-2xl font-bold text-gray-700">

            No favourites yet

          </h2>

          <p className="mt-3 text-gray-500">

            Start adding restaurants you love ❤️

          </p>

        </div>

      ) : (

        /* GRID */

        <div className="max-w-[1500px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">

          {favourites.map((restaurant, index) => {

            const info =
              restaurant?.info ||
              restaurant?.card?.card?.info;

            return (

              <Link
                key={info?.id || index}
                to={`/restaurants/${info?.id}`}
                className="group"
              >

                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                  {/* IMAGE */}

                  <div className="relative overflow-hidden">

                    <img
                      src={
                        info?.cloudinaryImageId
                          ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            info?.cloudinaryImageId
                          : "https://via.placeholder.com/300"
                      }
                      alt={info?.name}
                      className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                    />

                    {/* REMOVE HEART */}

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleFavourite(restaurant);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md"
                    >

                      <i className="ri-heart-fill text-red-500 text-xl"></i>

                    </button>

                    {/* OFFER */}

                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-3">

                      <p className="text-white font-semibold text-sm">

                        ₹150 OFF ABOVE ₹399

                      </p>

                    </div>

                  </div>

                  {/* CONTENT */}

                  <div className="p-4">

                    <h2 className="text-lg font-bold text-gray-800 truncate">

                      {info?.name}

                    </h2>

                    <div className="flex items-center gap-2 mt-2">

                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">

                        ★ {info?.avgRating}

                      </span>

                      <span className="text-sm text-gray-600">

                        {info?.sla?.deliveryTime} mins

                      </span>

                    </div>

                    <p className="mt-3 text-gray-500 text-sm truncate">

                      {info?.cuisines?.join(", ")}

                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-800">

                      {info?.costForTwoMessage}

                    </p>

                  </div>

                </div>

              </Link>

            );
          })}

        </div>

      )}

    </div>

  );
};

export default Favourites;