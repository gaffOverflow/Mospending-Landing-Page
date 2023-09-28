import RainDrop from "../assets/raindrop.svg";
import RainDropBottom from "../assets/raindrop-bottom.svg";
import "../App.css";

export default function Hero() {
  return (
    <>
      <section className="hero-section sm:px-14 md:px-28 lg:px-36 xl:px-44 sm:h-[80dvh]">
        <div className="bg-blue-600 opacity-10 w-44 h-44 rounded-full absolute -top-20 -left-20 grid place-content-center">
          <div className="bg-Primary-Background w-24 h-24 rounded-full"></div>
        </div>
        <p className="hero-title sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Our fintech app makes managing your transactions a breeze.
        </p>
        <p className="title-note">
          Our fintech app simplifies transaction management, making it
          effortless to track your spending, monitor balances, and stay on top
          of your finances.
        </p>
        <div className="relative flex flex-col items-center">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
            className="  rounded-xl bg-[#ffffff29] block py-[.5rem] placeholder:px-4 placeholder:text-xs w-[60vw] lg:w-[40vw]"
          />
          <button className="text-xs bg-Orange-Accent px-5 py-[11px] rounded-2xl absolute right-10 top-[1.4px] lg:right-40:">Create Account</button>
        </div>

        <img src={RainDrop} alt="Rain Drop icon" />

        <img src={RainDropBottom} alt="Rain Drop icon" />
      </section>
    </>
  );
}
