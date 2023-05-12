import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const deleteProduct = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/api/products/` +id)
      .then((res) => {
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4 mb-4">Product List</h1>
      {products.map((product) => (
        <div key={product._id} className="card mb-4">
          <div className="card-body">
            <h3 className="card-title">{product.title}</h3>
            <p className="card-text">Price: {product.price}</p>
            <p className="card-text">Description: {product.description}</p>
            <Link to={`/update/${product._id}`} className="btn btn-primary mr-2">Update</Link>
            <button className="btn btn-danger"onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;