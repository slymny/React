import allProducts from './../fake-data/all-products';

function Navbar({setCategory}) {
  let categoriesOfProducts = allProducts.map(product => product.category);
  const categories = [...new Set(categoriesOfProducts)];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav justify-content-center">
          <li className="nav-item">
            <a className="navbar-brand" href="#">
              OShop
            </a>
          </li>
          <li className="nav-item" onClick={() => setCategory('all')}>
            <a className="nav-link" href="#">
              all categories
            </a>
          </li>
          {categories.map(element => (
            <li
              key={element}
              className='nav-item'
              onClick={() => {
                setCategory(element);
              }}
            >
              <a className="nav-link" href="#">
                {element}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
