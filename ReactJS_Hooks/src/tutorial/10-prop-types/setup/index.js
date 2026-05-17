import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";
//If you go to this link and check the array you can notice there are some data missing in the object(Ex:url)
//When were are passing that object as a prop it will throw an error saying "url" property is not defined
//Inorder to resolve this we use prop types
const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

export default Index;
