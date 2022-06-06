import ProductCard from '../components/productCard';
import './productPage.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {SpinnerCircularFixed} from 'spinners-react';
import { Link } from 'react-router-dom';
import DetailPage from './DetailPage';

function ProductSection({category}) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        if (category) {
          const prod = await axios(
            `https://fakestoreapi.com/products/category/${category}`,
          );
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setProducts(prod.data);
        } else {
          const prod = await axios(`https://fakestoreapi.com/products`);
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setProducts(prod.data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [category]);

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
                // <Link to={`/${product.id}`}>
                  <ProductCard product={product} key={product.id} />
                // </Link>
              ))}
            </div>
          </div>
        </>
      )}
    </section>

  );
}

export default ProductSection;
