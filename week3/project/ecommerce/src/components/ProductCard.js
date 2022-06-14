import './ProductCard.css';
import {Link} from 'react-router-dom';
import heartRegular from './../assets/heart-regular.svg';
import heartSolid from './../assets/heart-solid.svg';
import {useContext} from 'react';
import FavoritesContext from '../store/favoritesContext';
import CategoryContext from '../store/categoriesContext';

function ProductCard({product}) {
  const {addFavorite, removeFavorite, itemIsFavorite} =
    useContext(FavoritesContext);
  const {changeCategory} = useContext(CategoryContext);

  const {
    id,
    image,
    title,
    cat,
    rating: {rate, count},
    price,
  } = product;

  const isFavorite = itemIsFavorite(id);
  function toggleFavoriteHandler() {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  }

  return (
    <div className="col-md-6 col-lg-4 col-xl-4 mb-5">
      <div className="card overflow-hidden mb-5 p-3 h-100">
        <div className="heart" onClick={toggleFavoriteHandler}>
          <img src={isFavorite ? heartSolid : heartRegular} alt="heart" />
        </div>

        <div className="product-card">
          <div className="image">
            <img src={image} alt="product" />
          </div>
          <div className="text mt-2">
            <Link to={`/product/${id}`} onClick={() => changeCategory('')}>
              <h5 className="text-dark title-link">{title}</h5>
            </Link>
            <h5>{cat}</h5>
            <div className="rating_reviews mt-3">
              <p>Rating: {rate}</p>
              <p>{count} reviews</p>
            </div>
            <div className="price">
              <h3>${price}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
