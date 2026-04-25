import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      setError(false);

      const data = await fetch(
        MENU_API + resId 
      );

      const json = await data.json();

      const realData = json?.data?.data || json?.data;

      // ❗ if API gives empty → treat as error
      if (!realData || !realData?.cards) {
        throw new Error("No valid data");
      }

      // shimmer delay
      setTimeout(() => {
        setresInfo(realData);
        setLoading(false);
      }, 800);

    } catch (err) {
      console.error("API ERROR 👉", err);
      setError(true);
      setLoading(false);
    }
  };

  // ✅ LOADING
  if (loading) {
    return <ShimmerUI />;
  }

  // ✅ ERROR (mobile fix)
  if (error) {
    return (
      <div className="text-center mt-10 px-4">
        <h1 className="text-lg font-semibold">
          ⚠️ Menu not loading
        </h1>
        <p className="text-gray-500 mt-2">
          Network ya API issue ho sakta hai
        </p>

        <button
          onClick={fetchMenu}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  const info = resInfo?.cards?.[2]?.card?.card?.info;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    areaName,
    sla,
    aggregatedDiscountInfoV3,
  } = info || {};

  const freeDelivery = aggregatedDiscountInfoV3?.header;

  const itemCards = resInfo?.cards
    ?.find((c) => c?.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = itemCards?.filter(
    (c) =>
      c?.card?.card?.itemCards &&
      !c?.card?.card?.title?.includes("Items at")
  );

  console.log(categories)
  return (
     <div  className="max-w-3xl mx-auto px-4 py-6">

    {/* Restaurant Card */}
    <div className="bg-white rounded-4xl shadow-gray-300 shadow-md border border-gray-300 p-5 md:p-6  ">

      {/* Name */}
 <h1 className="text-xl md:text-2xl font-bold mb-2">
        {name}
      </h1>

      {/* Rating + Cost */}
      <div className="flex flex-wrap items-center gap-2 text-sm lg:text-xl md:text-base text-gray-700">
        <span className="font-semibold text-green-600">⭐ {
avgRating  }</span>
        <span>•</span>
        <span>{costForTwoMessage}</span>
      </div>

      {/* Cuisines */}
      <p className="text-orange-600 mt-2 lg:text-xl text-sm md:text-base font-medium">
        {cuisines?.join(", ")}
      </p>

      {/* Outlet + Time */}
      <div className="mt-3 text-gray-600 text-sm ">
        <p>Outlet: {areaName
}</p>
     <p>{sla?.slaString}</p>
      </div>

      {/* Divider */}
      <div className="mt-4 border-t pt-3 text-sm text-orange-500 font-medium">
       <p className="text-orange-500 text-[13px] mt-2">
  {freeDelivery || "ONE Free delivery on orders above ₹199"}
</p>
      </div>
    </div>


    {/* MENU Heading */}
    <div className="flex items-center justify-center  mt-6 md:mt-10 mb-3">
      <div className="border-t w-10"></div>
      <span className="mx-3 text-gray-500 tracking-widest text-sm">MENU</span>
      <div className="border-t w-10"></div>
     
    </div>
    

    {/* Search Bar */}
    <div className="w-full">
      <input
        type="text"
        placeholder="Search for dishes"
        className="w-full px-4 py-3 rounded-xl shadow-gray-300 shadow-md bg-gray-100  focus:outline-none focus:ring-2 focus:ring-orange-400"
      />
    </div>



<div className="mt-4">

  {categories?.map((category) => {
    const items = category?.card?.card?.itemCards;

    return (
      <div key={category?.card?.card?.title} className="mb-1">

        {/* CATEGORY TITLE */}
        <h2 className="text-lg md:text-xl font-bold mb-1">
          {category?.card?.card?.title}
        </h2>

        {/* ITEMS */}
        {items?.map((item) => {
          const info = item?.card?.info;

          return (
            <div
              key={info?.id}
              className="flex justify-between md:gap-4 py-6 border-b border-gray-300 hover:bg-gray-50 transition"
            >

              {/* LEFT SIDE */}
              <div className="w-3/4">

                {/* Veg Icon */}
                <div className="w-4 h-4 border-2 border-green-600 flex items-center justify-center rounded-sm mb-1">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>

                {/* Name */}
                <h3 className="font-semibold text-base md:text-lg">
                  {info?.name}
                </h3>

                {/* Price */}
                <p className="text-gray-800 font-medium mt-1">
                  ₹{info?.price / 100 || info?.defaultPrice / 100}
                </p>

                {/* Rating */}
                {info?.ratings?.aggregatedRating?.rating && (
                  <p className="text-green-600 text-sm mt-1">
                    ⭐ {info?.ratings?.aggregatedRating?.rating}
                    <span className="text-gray-500">
                      ({info?.ratings?.aggregatedRating?.ratingCount})
                    </span>
                  </p>
                )}

                {/* Description */}
                <p className="text-gray-500 text-[13px] mt-2 leading-tight">
                  {info?.description}
                </p>

              </div>

              {/* RIGHT SIDE */}
              <div className="w-1/4 flex flex-col items-center">

                {/* Image */}
                {info?.imageId && (
                  <img
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/" +
                      info?.imageId
                    }
                    alt={info?.name}
                    className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl"
                  />
                )}

                {/* ADD BUTTON */}
                <button className="bg-white border px-3 md:px-4 md:py-1 rounded-lg shadow-md text-green-600 font-semibold -mt-4">
                  ADD
                </button>

                {/* Customisable */}
                {info?.isCustomisable && (
                  <p className="text-xs text-gray-500 mt-1">
                    Customisable
                  </p>
                )}
              </div>

            </div>
          );
        })}
      </div>
    );
  })}

</div>


  </div> 
  );
};

export default RestaurantMenu;     


