import ProductCard from '../components/ProductCard';
import './ProductPage.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {SpinnerCircularFixed} from 'spinners-react';
import ErrorHandling from '../components/ErrorHandling';

function ProductPage({category, setCategory}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        if (category) {
          const prod = await axios(
            `https://fakestoreapi.com/products/category/${category}`,
          );
          // setTimeout(() => {
          // }, 1000);
          setIsLoading(false);
          setProducts(prod.data);
        } else {
          const prod = await axios(`https://fakestoreapi.com/products`);
          // setTimeout(() => {
          // }, 1000);
          setIsLoading(false);
          setProducts(prod.data);
        }
      } catch (err) {
        setError('Oops, something went wrong!');
        setIsLoading(false);
      }
    })();
  }, [category]);

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
              {category !== '' ? category : 'all categories'}
            </h3>
            <br />
          </div>
          <div className="container">
            <div className="row">
              {products.map(product => (
                <ProductCard
                  setCategory={setCategory}
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
