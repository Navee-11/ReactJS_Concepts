import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};
