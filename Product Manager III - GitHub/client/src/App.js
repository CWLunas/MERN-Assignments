import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateProduct from "./components/CreateProduct";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import UpdateProduct from "./components/UpdateProduct";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RootComponent />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </div>
    </Router>
  );
};

const RootComponent = () => (
  <>
    <CreateProduct />
    <ProductList />
  </>
);

export default App;