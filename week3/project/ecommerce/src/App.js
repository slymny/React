import './App.css';
import ProductPage from './pages/ProductPage';
import {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import DetailPage from './pages/DetailPage';
import FavoritesPage from './pages/FavoritesPage';
import CategoryContext from './store/categoriesContext';

function App() {
  const {categories} = useContext(CategoryContext);

  return (
    <Layout>
      <Routes>
        <Route path="/*" element={<ProductPage category="" />} />
        {categories.map(category => {
          return (
            <Route
              key={category}
              path={`/${category.split(' ').join('%20')}`}
              element={<ProductPage category={category} />}
            />
          );
        })}
        <Route path={`product/:id`} element={<DetailPage />} />
        <Route path={'/favorites'} element={<FavoritesPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
