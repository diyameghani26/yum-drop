import { createContext, useContext, useState } from "react";

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {

  const [favourites, setFavourites] = useState([]);

  const toggleFavourite = (restaurant) => {

    const exists = favourites.find(
      (item) =>
        (item?.info || item?.card?.card?.info)?.id ===
        (restaurant?.info || restaurant?.card?.card?.info)?.id
    );

    if (exists) {

      setFavourites(
        favourites.filter(
          (item) =>
            (item?.info || item?.card?.card?.info)?.id !==
            (restaurant?.info || restaurant?.card?.card?.info)?.id
        )
      );

    } else {

      setFavourites([...favourites, restaurant]);

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