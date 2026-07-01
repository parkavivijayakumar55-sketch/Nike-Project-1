import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "";
 
  return (
    <>
      <Navbar />
      <Hero />

function Home() {
  return (
    <>
      <Hero />

      {/* Featured Products */}
      <section className="featured-products">

        <h2>Featured Products</h2>
        <p>Explore our best-selling collections designed for performance and style.</p>

        <div className="product-container">

          <div className="product-card">
            <img src="/images/running.jpg" alt="Running Shoes" />
            <h3>Running Shoes</h3>
          </div>

          <div className="product-card">
            <img src="/images/casual.jpg" alt="Casual Shoes" />
            <h3>Casual Shoes</h3>
          </div>

          <div className="product-card">
            <img src="/images/basketball.jpg" alt="Basketball Shoes" />
            <h3>Basketball Shoes</h3>
          </div>

          <div className="product-card">
            <img src="/images/sportswear.jpg" alt="Sports Wear" />
            <h3>Sports Wear</h3>
          </div>

        </div>

        <button className="view-btn">View All Products</button>

      </section>

      <Contact />
    </>
  );
}
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