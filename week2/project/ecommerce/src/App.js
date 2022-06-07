import './App.css';
import ProductPage from './pages/ProductPage';
import {useState, useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import Layout from './layout/Layout';
import DetailPage from './pages/DetailPage';

function App() {
  const [category, setCategory] = useState('');
  const [allCategories, setAllCategories] = useState([]);

  return (
    <Layout
      category={category}
      setCategory={setCategory}
      allCategories={allCategories}
      setAllCategories={setAllCategories}
    >
      <Routes>
        <Route path="/*" element={<ProductPage category="" />} />
        {allCategories.map(category => {
          return (
            <Route
              key={category}
              path={`/${category.split(' ').join('%20')}`}
              element={<ProductPage category={category} setCategory={setCategory} />}
            />
          );
        })}
        <Route path={`product/:id`} element={<DetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
