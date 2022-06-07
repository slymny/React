import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {SpinnerCircularFixed} from 'spinners-react';
import ErrorHandling from '../components/ErrorHandling';

function DetailPage() {
  const {id} = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const prod = await axios(`https://fakestoreapi.com/products/${id}`);
        //   setTimeout(() => {
        //     setIsLoading(false);
        //   }, 1000);
        setProduct(prod.data);
        setIsLoading(false);
      } catch (err) {
        setError('Oops, something went wrong!');
        setIsLoading(false);
      }
    })();
  }, [id]);

  const {image, title, category, rating, price, description} = product;

  if (error) return <ErrorHandling message={error} />;

  return (
    <>
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
          <div
            className="card overflow-hidden"
            style={{marginBottom: '15px', padding: '10px', minHeight: '80vh'}}
          >
            <div className="image">
              <img src={image} alt="product" style={{height: '40vh'}} />
            </div>
            <div className="text mt-2">
              <h5>{title}</h5>
              <h5>{category}</h5>
              <div className="rating_reviews mt-3">
                <p>Rating: {rating.rate}</p>
                <p>{rating.count} reviews</p>
              </div>
              <div className="price">
                <h3>${price}</h3>
              </div>
              <div className="desc">
                <p>{description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DetailPage;
