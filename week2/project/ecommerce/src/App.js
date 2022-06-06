import './App.css';
import ProductSection from './pages/productPage';
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
        <Route path="/*" element={<ProductSection category="" />} />
        {allCategories.map(category => {
          return (
            <Route key={category}
              path={`/${category.split(' ').join('%20')}`}
              element={<ProductSection category={category} />}
            >
              <Route path=":id" element={<DetailPage category={category} />} />
            </Route>
          );
        })}
      </Routes>
    </Layout>
  );
}

export default App;
