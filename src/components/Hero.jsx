import "../styles/styles.css";
import banner from "../assets/banner.webp";
function Hero() {
  return (
    <div className="hero">
      <img src={banner} alt="Hero" />

      <div className="hero-content">
        <h1>JUST DO IT.</h1>
        <p>Own The Game</p>
      </div>
    </div>
  );
}

export default Hero;