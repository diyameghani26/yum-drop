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

      const data = await fetch(
        MENU_API + resId + "&submitAction=ENTER"
      );

      const json = await data.json();

      console.log("FULL JSON 👉", json);

      // delay for shimmer feel
      setTimeout(() => {
        setresInfo(json?.data?.data || json?.data);
        setLoading(false);
      }, 800);

    } catch (err) {
      console.error("API ERROR 👉", err);
      setError(true);
      setLoading(false);
    }
  };

  console.log("URL 👉", MENU_API + resId + "&submitAction=ENTER");

  // ✅ LOADING STATE
  if (loading) {
    return <ShimmerUI />;
  }

  // ✅ ERROR STATE
  if (error) {
    return (
      <h1 className="text-center mt-10 text-red-500">
        Something went wrong 😢
      </h1>
    );
  }

  // ✅ SAFE DATA CHECK
  if (!resInfo?.cards) {
    return <ShimmerUI />;
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

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">

      {/* Restaurant Card */}
      <div className="bg-white rounded-3xl shadow-md border border-gray-300 p-5 md:p-6">

        <h1 className="text-xl md:text-2xl font-bold mb-2">
          {name}
        </h1>

        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-gray-700">
          <span className="font-semibold text-green-600">
            ⭐ {avgRating}
          </span>
          <span>•</span>
          <span>{costForTwoMessage}</span>
        </div>

        <p className="text-orange-600 mt-2 text-sm md:text-base font-medium">
          {cuisines?.join(", ")}
        </p>

        <div className="mt-3 text-gray-600 text-sm">
          <p>Outlet: {areaName}</p>
          <p>{sla?.slaString}</p>
        </div>

        <div className="mt-4 border-t pt-3 text-sm text-orange-500 font-medium">
          <p>
            {freeDelivery || "Free delivery on orders above ₹199"}
          </p>
        </div>
      </div>

      {/* MENU Heading */}
      <div className="flex items-center justify-center mt-8 mb-4">
        <div className="border-t w-10"></div>
        <span className="mx-3 text-gray-500 tracking-widest text-sm">
          MENU
        </span>
        <div className="border-t w-10"></div>
      </div>

      {/* Search */}
      <div className="w-full">
        <input
          type="text"
          placeholder="Search for dishes"
          className="w-full px-4 py-3 rounded-xl shadow-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Categories */}
      <div className="mt-4">
        {categories?.map((category) => {
          const items = category?.card?.card?.itemCards;

          return (
            <div key={category?.card?.card?.title} className="mb-4">

              <h2 className="text-lg md:text-xl font-bold mb-2">
                {category?.card?.card?.title}
              </h2>

              {items?.map((item) => {
                const info = item?.card?.info;

                return (
                  <div
                    key={info?.id}
                    className="flex justify-between py-6 border-b border-gray-200"
                  >

                    {/* LEFT */}
                    <div className="w-3/4">

                      <h3 className="font-semibold text-base md:text-lg">
                        {info?.name}
                      </h3>

                      <p className="text-gray-800 mt-1">
                        ₹{info?.price / 100 || info?.defaultPrice / 100}
                      </p>

                      {info?.ratings?.aggregatedRating?.rating && (
                        <p className="text-green-600 text-sm mt-1">
                          ⭐ {info?.ratings?.aggregatedRating?.rating}
                        </p>
                      )}

                      <p className="text-gray-500 text-sm mt-2">
                        {info?.description}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div className="w-1/4 flex flex-col items-center">

                      {info?.imageId && (
                        <img
                          src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/" +
                            info?.imageId
                          }
                          alt={info?.name}
                          className="w-24 h-24 object-cover rounded-xl"
                        />
                      )}

                      <button className="bg-white border px-3 py-1 rounded-lg shadow-md text-green-600 font-semibold -mt-4">
                        ADD
                      </button>

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

