import './productCard.css';

function ProductCard({product}) {
  const {
    image,
    title,
    category,
    rating: {rate, count},
    price,
  } = product;
  return (
    <div className="col-md-6 col-lg-4 col-xl-4">
      <div className="card overflow-hidden"  style={{marginBottom: "15px", padding: "10px", height: "30rem"}}>
        <div className="image">
          <img src={image} alt="product"/>
        </div>
        <div className="text mt-2">
          <h5>{title}</h5>
          <h5>{category}</h5>
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
  );
}

export default ProductCard;
