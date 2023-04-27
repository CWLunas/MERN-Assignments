import React, { useState } from "react";
import "./Box.css";

const BoxGen = () => {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [boxes, setBoxes] = useState([]);

  const colorChange = (e) => {
    setColor(e.target.value);
  };

  const sizeChange = (e) => {
    setSize(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (color && size) {
      setBoxes([...boxes, { color, size }]);
      setColor("");
      setSize("");
    }
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="colorInput"> Color: </label>
        <input type="text" id="colorInput" value={color} onChange={colorChange}
        />
        <label htmlFor="sizeInput (input by pixel (px))"> Size in pixels: </label>
        <input type="text" id="sizeInput" value={size} onChange={sizeChange}
        />
        <button type="submit">Generate Box</button>
      </form>
      <div className="boxContainer">
        {boxes.map((box, index) => (
          <div key={index} className="box" style={{ backgroundColor: box.color, width: box.size, height: box.size }}></div>))}
      </div>
    </div>
  );
};

export default BoxGen;