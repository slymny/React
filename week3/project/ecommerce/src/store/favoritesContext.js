import React, {createContext, useState} from 'react';

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: favoriteProduct => {},
  removeFavorite: productId => {},
  itemIsFavorite: productId => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(productId) {
    setUserFavorites(prev => prev.concat(parseInt(productId)));
  }
  function removeFavoriteHandler(productId) {
    setUserFavorites(pre => pre.filter(product => product !== parseInt(productId)));
  }
  function itemIsFavoriteHandler(productId) {
    return userFavorites.some(product => product === parseInt(productId));
  }

  const context = {
    favorites: userFavorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;