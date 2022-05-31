import './App.css';
import ProductSection from './components/productSection';
import Navbar from './components/navbar';
import {useState, useEffect} from 'react';
import allProducts from './fake-data/all-products';

function App() {
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    category === 'all'
      ? setProducts(allProducts)
      : setProducts(
          allProducts.filter(products => products.category === category),
        );
  }, [category]);

  return (
    <>
      <Navbar category={category} setCategory={setCategory} />
      <div className="container">
        <ProductSection products={products} category={category}/>
      </div>
    </>
  );
}

export default App;
