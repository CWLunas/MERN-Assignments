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
    <div>
      <h1>Create Product</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>Title</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
            type="text"
          />
        </div>

        <div>
          <label>Price</label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            name="price"
            type="number"
          />
        </div>

        <div>
          <label>Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            name="description"
            type="text"
          />
        </div>

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;