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
       "https://corsproxy.io/?" +
  encodeURIComponent(MENU_API + resId + "&submitAction=ENTER")
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

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">

      {/* Restaurant Info */}
      <div className="bg-white rounded-3xl shadow-md border p-5">

        <h1 className="text-xl md:text-2xl font-bold mb-2">
          {name}
        </h1>

        <div className="flex gap-2 text-sm text-gray-700">
          <span className="text-green-600 font-semibold">
            ⭐ {avgRating}
          </span>
          <span>•</span>
          <span>{costForTwoMessage}</span>
        </div>

        <p className="text-orange-600 mt-2 text-sm">
          {cuisines?.join(", ")}
        </p>

        <div className="mt-3 text-sm text-gray-600">
          <p>Outlet: {areaName}</p>
          <p>{sla?.slaString}</p>
        </div>

        <div className="mt-3 border-t pt-2 text-orange-500 text-sm">
          {freeDelivery || "Free delivery on orders above ₹199"}
        </div>
      </div>

      {/* MENU */}
      <div className="text-center mt-8 mb-4 text-gray-500">
        ――― MENU ―――
      </div>

      {/* Categories */}
      <div>
        {categories?.map((category) => {
          const items = category?.card?.card?.itemCards;

          return (
            <div key={category?.card?.card?.title} className="mb-6">

              <h2 className="font-bold text-lg mb-2">
                {category?.card?.card?.title}
              </h2>

              {items?.map((item) => {
                const info = item?.card?.info;

                return (
                  <div
                    key={info?.id}
                    className="flex justify-between py-5 border-b"
                  >
                    {/* LEFT */}
                    <div className="w-3/4">
                      <h3 className="font-medium">{info?.name}</h3>

                      <p className="text-sm text-gray-700 mt-1">
                        ₹{info?.price / 100 || info?.defaultPrice / 100}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
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
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                      )}

                      <button className="mt-2 px-3 py-1 border rounded text-green-600">
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

