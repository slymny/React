import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {FavoritesContextProvider} from './store/favoritesContext';
import {CategoryContextProvider} from './store/categoriesContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <FavoritesContextProvider>
    <CategoryContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoryContextProvider>
  </FavoritesContextProvider>,
);
