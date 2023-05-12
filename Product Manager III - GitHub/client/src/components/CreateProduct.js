import React, { useState } from "react";
import axios from "axios";

const CreateProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://127.0.0.1:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        setTitle("");
        setPrice("");
        setDescription("");
        window.location.reload(); // Refresh the main page after successful
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container bg-dark text-light py-5">
      <h1 className="mb-4">Create Product</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
          />
        </div>
  
        <div className="form-group">
          <label>Price</label>
          <input
            className="form-control"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
            type="number"
          />
        </div>
  
        <div className="form-group">
          <label>Description</label>
          <input
            className="form-control"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
          />
        </div>
  
        <button className="btn btn-primary" type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;