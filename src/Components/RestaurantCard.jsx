import React from 'react'

import resList from '../utils/mockData';





const RestaurantCard = () => {
   return (
    <div className="px-8">
      <div className="grid  md:grid-cols-4 gap-6 mt-6">

{resList.map((item, i) => {
  const info = item?.card?.card?.info;

  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    costForTwoMessage,
    sla,
  } = info || {};

  return (
    <div
      key={i}
      className="bg-white rounded-2xl shadow-sm p-2 border border-transparent hover:border-gray-500 transition-all duration-200"
    >
      {/* IMAGE */}
      <img
        className="w-full h-40 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          cloudinaryImageId
        }
        alt={name}
      />

      {/* NAME */}
      <h4 className="mt-2 font-semibold text-sm">
        {name}
      </h4>

      {/* RATING */}
      <p className="text-gray-600 text-sm">
        ⭐ {avgRating}
      </p>

      {/* DELIVERY TIME */}
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
})}

      </div>
    </div>
  );
};



export default RestaurantCard
