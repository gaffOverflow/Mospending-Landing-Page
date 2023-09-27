import RainDrop from "../assets/raindrop.svg";
import RainDropBottom from "../assets/raindrop-bottom.svg";
import "../App.css";

export default function Hero() {
  return (
    <>
      <section className="hero-section">
        <p className="hero-title">
          Our fintech app makes managing your transactions a breeze.
        </p>
        <p className="title-note">
          Our fintech app simplifies transaction management, making it
          effortless to track your spending, monitor balances, and stay on top
          of your finances.
        </p>
        <div>
          <input type="email" name="" id="" placeholder="Enter your email" />
          <button>Create Account</button>
        </div>

        <img src={RainDrop} alt="Rain Drop icon" />

        <img src={RainDropBottom} alt="Rain Drop icon" />
      </section>
    </>
  );
}
