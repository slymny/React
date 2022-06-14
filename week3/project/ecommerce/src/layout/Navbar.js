import {NavLink} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {useContext, useEffect} from 'react';
import CategoryContext from '../store/categoriesContext';

function Navbar() {
  const {products: allCategories} = useFetch(
    'https://fakestoreapi.com/products/categories',
  );
  const {currentCategory, changeCategory, changeCategories} =
    useContext(CategoryContext);
  useEffect(() => {
    changeCategories(allCategories);
  }, [allCategories, changeCategories]);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light justify-content-end">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="navbar-brand">OShop</li>
          <li
            className="nav-item"
            onClick={() => {
              changeCategory('');
            }}
          >
            <NavLink className="nav-link" to="/">
              all categories
            </NavLink>
          </li>
          {allCategories.map(element => (
            <li key={element} className="nav-item">
              <NavLink
                className={
                  currentCategory === element
                    ? 'nav-link active selected'
                    : 'nav-link'
                }
                to={
                  currentCategory === element
                    ? '/'
                    : `/${element.split(' ').join('%20')}`
                }
                onClick={() => {
                  currentCategory === element
                    ? changeCategory('')
                    : changeCategory(element);
                }}
              >
                {element}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
