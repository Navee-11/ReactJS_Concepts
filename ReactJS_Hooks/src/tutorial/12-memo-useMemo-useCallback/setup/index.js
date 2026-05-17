import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

const calculateMostExpensive = (data) => {
  console.log("hello");
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) total += price;
      return total;
    }, 0) / 100
  );
};
//This function is called when ever there is re-render although there is no change in the data in this function.
//To avoid this we make use of useMemo to memoizing the data-i.e., tell the system to not to re-render the function or call the function but if there is any change in the data it will re-render

// every time props or state changes, component re-renders
//When we click on the click me the Biglist is getting re-rendered without any reason thereby the single list also re-render
//To avoid this we make use of (React.memo) Biglist component
//Whenever we pass a function as prop this also makes the component to re-render,so when the click me button is clicked then also this biglist component is re-rendered so to tackle this we useCallback hook for the function

const Index = () => {
  const [count, setCount] = useState(0);
  const { products } = useFetch(url);

  const [cart, setCart] = useState(0);

  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);

  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products],
  );
  //Invoke this only when there is a change in the products

  return (
    <>
      <h1>Count : {count}</h1>
      <button
        className="btn"
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>cart: {cart}</h1>
      {/* <h1>Most Expensive : ${calculateMostExpensive(products)}</h1> */}
      <h1>Most Expensive : {mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big List is called");
  });
  return (
    <section className="products">
      {products.map((product, index) => {
        return <SingleProduct key={index} {...product} addToCart={addToCart} />;
      })}
    </section>
  );
});
const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("single product called");
  });
  let { name, price } = fields;

  price = price / 100;

  const image = fields.image[0].url;
  return (
    <>
      <article className="product">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>{price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </article>
    </>
  );
};
export default Index;
