
import React from "react";

const RestaurantCard = ({ resData }) => {
  const info = resData?.info || resData?.card?.card?.info;

  if (!info) return null;

  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    sla,
  } = info;

  return (
    <div className="bg-white  rounded-2xl shadow-sm p-2 border border-transparent hover:border-gray-500 transition-all duration-200">
      
      {/* IMAGE */}
      <img
        className="w-full h-40 object-cover rounded-xl"
        src={
          cloudinaryImageId
            ? "https://media-assets.swiggy.com/swiggy/image/upload/" +
              cloudinaryImageId
            : "https://via.placeholder.com/300"
        }
        alt={name}
      />

      {/* NAME */}
      <h4 className="mt-2 font-semibold text-sm">{name}</h4>

      {/* RATING */}
      <p className="text-gray-600 text-sm">⭐ {avgRating}</p>

      {/* DELIVERY */}
      <p className="text-gray-500 text-xs">
        {sla?.deliveryTime} mins
      </p>

      {/* CUISINES */}
      <p className="text-gray-400 text-xs truncate">
        {cuisines?.join(", ")}
      </p>

      {/* COST */}
      <p className="text-sm font-medium mt-1">
        {costForTwoMessage}
      </p>
    </div>
  );
};

export default RestaurantCard;
