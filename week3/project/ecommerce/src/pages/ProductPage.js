import ProductCard from '../components/ProductCard';
import './ProductPage.css';
import {useEffect, useState, useContext} from 'react';
import {SpinnerCircularFixed} from 'spinners-react';
import ErrorHandling from '../components/ErrorHandling';
import useFetch from '../hooks/useFetch';
import CategoryContext from '../store/categoriesContext';

function ProductPage() {
  const {currentCategory} = useContext(CategoryContext)
  const [url, setUrl] = useState(`https://fakestoreapi.com/products`);
  const {isLoading, products, error} = useFetch(url);

  useEffect(() => {
    currentCategory
      ? setUrl(`https://fakestoreapi.com/products/category/${currentCategory}`)
      : setUrl(`https://fakestoreapi.com/products`);
  }, [currentCategory]);


  if (error) return <ErrorHandling message={error} />;

  return (
    <section className="section-products">
      {isLoading ? (
        <div className="text-center mt-5">
          <SpinnerCircularFixed
            size="20%"
            color="#5CA4FF"
            secondaryColor="#CDE9FF"
          />
        </div>
      ) : (
        <>
          <div className="container">
            <h3 className="text-center">
              {currentCategory !== '' ? currentCategory : 'all categories'}
            </h3>
            <br />
          </div>
          <div className="container">
            <div className="row">
              {products.map(product => (
                <ProductCard
                  product={product}
                  key={product.id}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default ProductPage;
