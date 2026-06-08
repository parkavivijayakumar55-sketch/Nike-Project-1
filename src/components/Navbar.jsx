import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/styles.css";
import { useState } from "react";
function Navbar() {

  const [openMenu, setOpenMenu] = useState("");
  return (
    <nav className="navbar">

      <img src={logo} alt="logo" className="logo" />

      <ul className="menu">

        <li><Link to="/home">Home</Link></li>

        {/* MEN */}
        <li
          onMouseEnter={() => setOpenMenu("men")}
          onMouseLeave={() => setOpenMenu("")}
        >
          <Link to="/men">Men</Link>

          {openMenu === "men" && (
            <div className="dropdown">
              <Link to="/men">All Products</Link>
              <Link to="/men?tab=new">New Arrivals</Link>
              <Link to="/men?tab=best">Best Sellers</Link>
            </div>
          )}
        </li>

        {/* WOMEN */}
        <li
          onMouseEnter={() => setOpenMenu("women")}
          onMouseLeave={() => setOpenMenu("")}
        >
          <Link to="/women">Women</Link>

          {openMenu === "women" && (
            <div className="dropdown">
              <Link to="/women">All Products</Link>
              <Link to="/women?tab=new">New Arrivals</Link>
              <Link to="/women?tab=best">Best Sellers</Link>
            </div>
          )}
        </li>

        {/* KIDS */}
        <li
          onMouseEnter={() => setOpenMenu("kids")}
          onMouseLeave={() => setOpenMenu("")}
        >
          <Link to="/kids">Kids</Link>

          {openMenu === "kids" && (
            <div className="dropdown">
              <Link to="/kids">All Products</Link>
              <Link to="/kids?tab=new">New Arrivals</Link>
              <Link to="/kids?tab=best">Best Sellers</Link>
            </div>
          )}
        </li>

        <li><Link to="/cart">Cart 🛒</Link></li>

      </ul>
    </nav>
  );
}
export default Navbar;