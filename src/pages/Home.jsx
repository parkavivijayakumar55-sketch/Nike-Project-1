import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useLocation, useNavigate } from "react-router-dom";

import "../styles/styles.css";

import men7 from "../assets/men7.avif";
import men9 from "../assets/men9.jpg";
import women7 from "../assets/women7.jpg";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";

  return (
    <>
      <Navbar />
      <Hero />

      <section className="featured-products">
        <h2>Featured Products</h2>
        <p>Explore our best-selling collections designed for performance and style.</p>

        <div className="product-container">

          <div className="product-card">
            <img src={women7} alt="Running Shoes" />
            <h3>Running Shoes</h3>
          </div>

          <div className="product-card">
            <img src={men7} alt="Casual Shoes" />
            <h3>Casual Shoes</h3>
          </div>

          <div className="product-card">
            <img src={men9} alt="Basketball Shoes" />
            <h3>Basketball Shoes</h3>
          </div>

        </div>

        <button
          className="view-btn"
          onClick={() => navigate("/products")}
        >
          View All Products
        </button>
      </section>

      <div className="contact-section">
        <h2>Contact Us</h2>

        <p><strong>Email:</strong> support@nikestore.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>

        <h3>Follow Us</h3>
        <p>Instagram | Facebook | Twitter</p>
      </div>
    </>
  );
}

export default Home;