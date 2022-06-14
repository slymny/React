import React, {useContext, useEffect, useState} from 'react';
import {SpinnerCircularFixed} from 'spinners-react';
import ProductCard from '../components/ProductCard';
import FavoritesContext from '../store/favoritesContext';
import axios from 'axios';

function FavoritesPage() {
  const {favorites} = useContext(FavoritesContext);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Promise.all(
      favorites.map(favorite =>
        axios(`https://fakestoreapi.com/products/${favorite}`).then(
          res => res.data,
        ),
      ),
    ).then(res => {
      setIsLoading(false);
      setProducts(res);
    });
  }, [favorites]);

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
            <div className="row">
              {products.map(product => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default FavoritesPage;
