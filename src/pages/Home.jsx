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