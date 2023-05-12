import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/products/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();

    axios
      .patch(`http://127.0.0.1:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Update Product</h1>
      <form onSubmit={updateProduct}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </p>
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateProduct;
