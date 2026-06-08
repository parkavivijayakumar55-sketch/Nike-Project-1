import "../styles/styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 9999,
    image: women1,
  },
  {
    id: 2,
    name: "Adidas Runner",
    price: 7999,
    image: women2,
  },
];

function Women() {
  return (
    <div>
      <h1>Women Collection</h1>

      <div className="products">
        {products.map((item) => (
          <div key={item.id} className="card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Women;