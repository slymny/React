import ProductCard from './productCard';
import './productSection.css';

function ProductSection({category, products}) {
  return (
    <section className="section-products">
      <div className="container">
        <h3 className="text-center">
          {category !== 'all' ? category : 'all categories'}
        </h3><br />
      </div>
      <div className="container">
        <div className="row">
          {products.map(product => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
