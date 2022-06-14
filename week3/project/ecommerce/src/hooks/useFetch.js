import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      (async () => {
        const response = await axios(url);
        const data = await response.data;
        setProducts(data);
        setIsLoading(false);
      })();
    } catch (err) {
      setIsLoading(false);
      setError('Oops, something went wrong!');
      console.log(err.message);
    }
  }, [url]);

  return {
    isLoading,
    products,
    error,
  };
}

export default useFetch;
