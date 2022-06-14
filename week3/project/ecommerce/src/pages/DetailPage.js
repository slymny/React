import {useParams} from 'react-router-dom';
import {SpinnerCircularFixed} from 'spinners-react';
import ErrorHandling from '../components/ErrorHandling';
import useFetch from '../hooks/useFetch';
import FavoritesContext from '../store/favoritesContext';
import heartRegular from './../assets/heart-regular.svg';
import heartSolid from './../assets/heart-solid.svg';
import {useContext} from 'react';

function DetailPage() {
  const {id} = useParams();
  const {addFavorite, removeFavorite, itemIsFavorite} =
    useContext(FavoritesContext);
  const {
    products: product,
    isLoading,
    error,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  const {image, title, category, rating, price, description} = product;
  
  const isFavorite = itemIsFavorite(id);
  function toggleFavoriteHandler() {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

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
          <div className="card overflow-hidden mb-3 p-3 mh-75">
            <div className="heart" onClick={toggleFavoriteHandler}>
              <img src={isFavorite ? heartSolid : heartRegular} alt="heart" />
            </div>
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
