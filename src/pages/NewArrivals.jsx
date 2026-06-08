import featuredImg from "../assets/Air.jpg";
import womenImg from "../assets/women1.jpg";
import "../styles/styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewArrivals({ cart, setCart }) {

  const [showViewCart, setShowViewCart] = useState(false);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setShowViewCart(true);
  };

  return (
    <div className="category-page">
      <h1>New Arrivals</h1>

      <div className="product-card">
        <img src={featuredImg} alt="Nike Air" />
        <h3>Nike Air Max</h3>
        <p>₹9,999</p>

        <button onClick={() =>
          addToCart({
            name: "Nike Air Max",
            price: 9999,
            image: featuredImg
          })
        }>
          Add to Cart
        </button>
      </div>

      <div className="product-card">
        <img src={womenImg} alt="Nike Women" />
        <h3>Nike Women Shoes</h3>
        <p>₹7,999</p>

        <button onClick={() =>
          addToCart({
            name: "Nike Women Shoes",
            price: 7999,
            image: womenImg
          })
        }>
          Add to Cart
        </button>
      </div>

      {showViewCart && (
        <button
          onClick={() => navigate("/cart")}
          className="view-cart-btn"
        >
          View Cart
        </button>
      )}

    </div>
  );
}
export default NewArrivals;