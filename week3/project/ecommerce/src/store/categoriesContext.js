import React, {createContext, useState} from 'react';

const CategoryContext = createContext({
  categories: [],
  currentCategory: '',
  changeCategory: category => {},
  changeCategories: categories => {},
});

export function CategoryContextProvider(props) {
  const [currentCategory, setCurrentCategory] = useState('');
  const [categories, setCategories] = useState([]);

  function changeCategoryHandler(category) {
    setCurrentCategory(category);
  }
  function changeCategoriesHandler(categories) {
    setCategories(categories);
  }

  const context = {
    categories,
    currentCategory,
    changeCategory: changeCategoryHandler,
    changeCategories: changeCategoriesHandler,
  };

  return (
    <CategoryContext.Provider value={context}>
      {props.children}
    </CategoryContext.Provider>
  );
}

export default CategoryContext;
