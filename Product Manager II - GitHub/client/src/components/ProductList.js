import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <Link to={`/${product._id}`}>
            <h3>{product.title}</h3>
          </Link>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;