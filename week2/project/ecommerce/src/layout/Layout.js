import Navbar from './navbar';

export default function Layout(props) {
  const {allCategories, setAllCategories, category, setCategory} = props;

  
  return (
    <div className='container'>
      <Navbar allCategories={allCategories} category={category} setCategory={setCategory} setAllCategories={setAllCategories}/>
      <main>{props.children}</main>
    </div>
  );
}
