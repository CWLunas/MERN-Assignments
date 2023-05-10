import React, { useState } from "react";
import axios from "axios";

const CreateProduct = (props) => {

  //To keep things simple, we will create state for all three fields.
  const [title, setTitle] = useState("");
  //Because our schema has price as a number, it will automatically convert "50" to 50 for example
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e)=>{
    //A form whose button is clicked has a default action which will clear state and refresh the page
      //we prevent that default with the following line:
    e.preventDefault();

    axios.post("http://localhost:8000/api/products",{
      title, //shorthand for title:title
      price, //NOTE: this only works if the getter name (price) EXACTLY matches the field in your schema
      description
    })
    .then((res)=>{
      console.log(res);
      console.log(res.data);
      //upon a successful post request, we will setState back to "", which will clear out our form
      setTitle("");
      setPrice("");
      setDescription("");
    })
    .catch((err)=>{
      //For now, we will simply log out the error. In future assignments, this will be part of how we display back-end validations.
      console.log(err);
    })
  }

  return (
      <div>
          
          <header>
            Product Manager
          </header>

          <form onSubmit={submitHandler}>
              <div className="form-fields">
                  <label>Title</label>
                  <input
                      onChange={(e) => setTitle(e.target.value)}
                      //We set our value to title here mainly to help us clear out the inputs on submission
                      value={title}
                      name="title"
                      type="text"
                  />
              </div>

              <br />

              <div className="form-fields">
                  <label>Price</label>
                  <input
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                      name="price"
                      type="number"
                  />
              </div>

              <br />

              <div className="form-fields">
                  <label>Description</label>
                  <input
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      name="description"
                      type="text"
                  />
              </div>

              <br />
              {/* Could also be a button element. Try it! */}
              <input className="submit-input" type="submit" value="Create" />
          </form>
      </div>
  );
};

export default CreateProduct;