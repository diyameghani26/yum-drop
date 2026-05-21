import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {

  // LOAD FAVOURITES FROM LOCAL STORAGE

  const [favourites, setFavourites] = useState(() => {

    const savedFavourites =
      localStorage.getItem("favourites");

    return savedFavourites
      ? JSON.parse(savedFavourites)
      : [];

  });

  // SAVE TO LOCAL STORAGE

  useEffect(() => {

    localStorage.setItem(
      "favourites",
      JSON.stringify(favourites)
    );

  }, [favourites]);

  // ADD / REMOVE FAVOURITE

  const toggleFavourite = (restaurant) => {

    const restaurantInfo =
      restaurant?.info ||
      restaurant?.card?.card?.info;

    const exists = favourites.find((item) => {

      const itemInfo =
        item?.info ||
        item?.card?.card?.info;

      return itemInfo?.id === restaurantInfo?.id;

    });

    if (exists) {

      // REMOVE

      const updatedFavourites =
        favourites.filter((item) => {

          const itemInfo =
            item?.info ||
            item?.card?.card?.info;

          return (
            itemInfo?.id !== restaurantInfo?.id
          );
        });

      setFavourites(updatedFavourites);

    } else {

      // ADD

      setFavourites([
        ...favourites,
        restaurant,
      ]);

    }
  };

  return (

    <FavouriteContext.Provider
      value={{
        favourites,
        toggleFavourite,
      }}
    >

      {children}

    </FavouriteContext.Provider>

  );
};

export const useFavourite = () => {

  return useContext(FavouriteContext);

};