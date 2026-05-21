import React from "react";
import { useFavourite } from "../context/FavouriteContext";

const RestaurantCard = ({ resData }) => {

  const info = resData?.info || resData?.card?.card?.info;

  const { favourites, toggleFavourite } = useFavourite();

  if (!info) return null;

  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    sla,
  } = info;

  const isFavourite = favourites.find(
    (item) =>
      (item?.info || item?.card?.card?.info)?.id === info?.id
  );

  return (

    <div className="bg-white rounded-2xl shadow-sm p-2 border border-transparent hover:border-gray-300 transition-all hover:-translate-y-1 duration-300">

      {/* IMAGE */}

      <div className="relative overflow-hidden rounded-xl">

        <img
          className="w-full h-40 object-cover rounded-xl hover:scale-105 transition duration-300"
          src={
            cloudinaryImageId
              ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
                cloudinaryImageId
              : "https://via.placeholder.com/300"
          }
          alt={name}
        />

        {/* HEART BUTTON */}

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavourite(resData);
          }}
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-md z-10"
        >

          <i
            className={`${
              isFavourite
                ? "ri-heart-fill text-red-500"
                : "ri-heart-line text-gray-700"
            } text-xl`}
          ></i>

        </button>

        {/* OFFER OVERLAY */}

        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-3 py-2">

          <p className="text-white text-sm font-semibold">

            ₹150 OFF ABOVE ₹399

          </p>

        </div>

      </div>

      {/* CONTENT */}

      <div className="pt-3">

        {/* NAME */}

        <h4 className="font-semibold text-sm md:text-base truncate text-gray-800">

          {name}

        </h4>

        {/* RATING + DELIVERY */}

        <div className="flex items-center gap-2 mt-2">

          <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">

            ★ {avgRating}

          </span>

          <p className="text-gray-600 text-sm">

            {sla?.deliveryTime} mins

          </p>

        </div>

        {/* CUISINES */}

        <p className="text-gray-500 text-xs md:text-sm truncate mt-2">

          {cuisines?.join(", ")}

        </p>

        {/* COST */}

        <p className="text-sm font-medium mt-2 text-gray-800">

          {costForTwoMessage}

        </p>

      </div>

    </div>

  );
};

// HOC

export const withPromotedLabel = (RestaurantCard) => {

  return (props) => {

    return (

      <div className="relative">

        <span className="absolute top-3 left-2 z-20 bg-black text-white text-[10px] md:text-xs px-3 py-1 rounded-full shadow-md pointer-events-none">

          Promoted

        </span>

        <RestaurantCard {...props} />

      </div>
    );
  };
};

export default RestaurantCard;