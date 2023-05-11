import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateProduct from "./components/CreateProduct";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RootComponent />} />
          <Route path="/:id" element={<ProductDetails />} />
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