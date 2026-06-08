import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import men1 from "../assets/men1.jpg";
import men2 from "../assets/men2.jpg";
import men3 from "../assets/men3.jpg";
import men4 from "../assets/men4.jpg";
import men5 from "../assets/men5.jpg";
import men6 from "../assets/men6.jpg";
import men7 from "../assets/men7.avif";
import men9 from "../assets/men9.jpg";

import women1 from "../assets/women1.jpg";
import women2 from "../assets/women2.jpg";
import women3 from "../assets/women3.jpg";
import women4 from "../assets/women4.jpg";
import women5 from "../assets/women5.jpg";
import women6 from "../assets/women6.jpg";
import women7 from "../assets/women7.jpg";
import women8 from "../assets/women8.jpg";

import kids1 from "../assets/kids1.jpg";
import kids2 from "../assets/kids2.jpg";
import kids3 from "../assets/kids3.jpg";
import kids4 from "../assets/kids4.jpg";

import "../styles/styles.css";

function ProductList({ type, cart, setCart }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  const queryParams = new URLSearchParams(location.search);
  const tab = queryParams.get("tab") || "all";

  // 🔥 DATA (UNCHANGED)
  const data = {
    men: {
      all: [
        { id: 1, name: "Men Air Max", price: 9999, image: men1, category: "Shoes", size: "M" },
        { id: 2, name: "Men Revolution", price: 7999, image: men2, category: "Shoes", size: "L" },
        { id: 3, name: "Men Air Force", price: 8999, image: men3, category: "Shoes", size: "M" },
        { id: 4, name: "Men Zoom", price: 10999, image: men4, category: "Shoes", size: "XL" },
        { id: 5, name: "Men Pegasus", price: 11999, image: men5, category: "Shoes", size: "L" },
        { id: 6, name: "Men React", price: 12999, image: men6, category: "Shoes", size: "M" },
        { id: 7, name: "Men Vapormax", price: 13999, image: men7, category: "Shoes", size: "XL" },
        { id: 9, name: "Men Pegasus 2", price: 14999, image: men9, category: "Shoes", size: "L" },
      ],
      new: [
        { id: 9, name: "Men React", price: 12999, image: men6, category: "Shoes", size: "M" },
        { id: 10, name: "Men Vapormax", price: 13999, image: men7, category: "Shoes", size: "XL" },
        { id: 11, name: "Men Pegasus 2", price: 14999, image: men9, category: "Shoes", size: "L" },],
      best: [
        {id: 12, name: "Men Air Force", price: 8999, image: men3, category: "Shoes", size: "M" },
        { id: 13, name: "Men Zoom", price: 10999, image: men4, category: "Shoes", size: "XL" },
        { id: 14, name: "Men Pegasus", price: 11999, image: men5, category: "Shoes", size: "L" },
      ],
    },

    women: {
      all: [
        { id: 1, name: "Women Air Max", price: 8999, image: women1, category: "Shoes", size: "M" },
        { id: 2, name: "Women Runner", price: 7499, image: women2, category: "Shoes", size: "L" },
        { id: 3, name: "Women Nike", price: 8999, image: women3, category: "Shoes", size: "M" },
        { id: 4, name: "Women Zoom", price: 10999, image: women4, category: "Shoes", size: "XL" },
        { id: 5, name: "Women Force", price: 8999, image: women5, category: "Shoes", size: "L" },
        { id: 6, name: "Women Pegasus", price: 7499, image: women6, category: "Shoes", size: "M" },
        { id: 7, name: "Women React", price: 7499, image: women7, category: "Shoes", size: "XL" },
        { id: 8, name: "Women Vapormax", price: 7499, image: women8, category: "Shoes", size: "L" },
      ],
      new: [
         { id: 9, name: "Women Zoom", price: 10999, image: women4, category: "Shoes", size: "XL" },
        { id: 10, name: "Women Force", price: 8999, image: women5, category: "Shoes", size: "L" },
        { id: 11, name: "Women Pegasus", price: 7499, image: women6, category: "Shoes", size: "M" },
      ],
      best: [
                { id: 12, name: "Women Air Max", price: 8999, image: women1, category: "Shoes", size: "M" },
        { id: 13, name: "Women React", price: 7499, image: women7, category: "Shoes", size: "XL" },
        { id: 14, name: "Women Air Max", price: 8999, image: women1, category: "Shoes", size: "M" },

      ],
    },

    kids: {
      all: [
        { id: 1, name: "Kids Shoes", price: 4999, image: kids1, category: "Shoes", size: "S" },
        { id: 2, name: "Kids Runner", price: 7499, image: kids2, category: "Shoes", size: "M" },
        { id: 3, name: "Kids Air Force", price: 5999, image: kids3, category: "Shoes", size: "L" },
        { id: 4, name: "Kids Zoom", price: 6999, image: kids4, category: "Shoes", size: "XL" },
      ],
      new: [
        { id: 5, name: "Kids Runner", price: 7499, image: kids2, category: "Shoes", size: "M" },
        { id: 6, name: "Kids Air Force", price: 5999, image: kids3, category: "Shoes", size: "L" },
      ],
      best: [
                { id: 1, name: "Kids Shoes", price: 4999, image: kids1, category: "Shoes", size: "S" },
        { id: 4, name: "Kids Zoom", price: 6999, image: kids4, category: "Shoes", size: "XL" },

      ],
    },
  };

  // 🔥 PRODUCTS
  const products = data?.[type]?.[tab] ?? data?.[type]?.all ?? [];

  // 🛒 ADD TO CART
  const addToCart = (item) => {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
    setShowCart(true);
  };

  return (
    <div className="category-page">

      <h1>{type.toUpperCase()} COLLECTION</h1>

      {/* PRODUCTS */}
      {products.map((item) => (
        <div className="product-card" key={item.id}>
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}

      {/* VIEW CART */}
      {showCart && (
        <button
          className="view-cart-btn"
          onClick={() => navigate("/cart")}
        >
          View Cart 🛒
        </button>
      )}

    </div>
  );
}

export default ProductList;