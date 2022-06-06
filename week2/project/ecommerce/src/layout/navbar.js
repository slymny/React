import {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

function Navbar({allCategories, setAllCategories, category, setCategory}) {
  useEffect(() => {
    (async () => {
      try {
        const categories = await axios(
          'https://fakestoreapi.com/products/categories',
        );
        setAllCategories(categories.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light">
        <ul className="navbar-nav">
          <li className="navbar-brand">OShop</li>
          <li
            className="nav-item"
            onClick={() => {
              setCategory('');
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
                  category === element ? 'nav-link active selected' : 'nav-link'
                }
                to={
                  category === element
                    ? '/'
                    : `/${element.split(' ').join('%20')}`
                }
                onClick={e => {
                  category === element ? setCategory('') : setCategory(element);
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
