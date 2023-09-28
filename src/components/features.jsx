import "../App.css";
import rainDrop from "../assets/raindrop.svg";
import rainDropBottom from "../assets/raindrop-bottom.svg";
import avatarOne from "../img/features/feature-img-1.png";
import avatarTwo from "../img/features/feature-img-2.png";
import avatarThree from "../img/features/feature-img-3.png";
import avatarFour from "../img/features/feature-img-4.png";
import avatarFive from "../img/features/feature-img-5.png";
import profileOne from "../img/features/profile-1.png";
import vectorOne from "../assets/Vector-1.png";
import vectorTwo from "../assets/Vector-2.png";
import vectorThree from "../assets/Vector-3.png";
import vectorFour from "../assets/Vector-4.png";
import vectorFive from "../assets/vector-5.png";
import vectorSix from "../assets/vector-6.png";
import vectorSeven from "../assets/vector-7.png";
import vectorEight from "../assets/vector-8.png";
import vectorNine from "../assets/vector-9.png";

export default function features() {
  return (
    <>
      <div className="features-container sm:px-14 md:px-28 lg:px-36 xl:px-44">
        <h1 className="sm:font-extrabold md:text-2xl lg:text-4xl xl:text-7xl">
          Our features
        </h1>
        <p className="features-p">
          With features like customizable dashboards, real-time alerts, and
          secure data encryption, you can effortlessly manage your transactions
          and take control of your financial life.
        </p>
        <section className="flex flex-col gap-4 sm:flex-row sm:gap-10">
          {/* Aside One */}

          <aside className="flex flex-col gap-4 bg-gradient-to-b from-[#F5EBFA] from-[54.69%] to-[#EBF5FF] to-100% p-4 rounded-lg sm:flex-row sm:items-center">
            <article className="flex flex-col gap-3 font-Manrope text-[#161616]">
              <h2 className="text-2xl font-semibold">Real - time Alerts</h2>
              <p className="text-sm font-light">
                Stay on top of your finances with our real-time alert feature!
                Get instant notifications about account activity, upcoming
                bills, and suspicious transactions so you can take action right
                away.
              </p>
            </article>
            <div className="bg-white w-32 h-32 rounded-full grid place-content-center sm:w-full">
              <div className="border border-dashed border-[#B5B2CE] w-20 h-20 rounded-full grid place-content-center relative">
                <img
                  src={avatarOne}
                  alt="avatar 1"
                  className="absolute -right-4 top-1/2 -translate-y-1/2 w-8"
                />
                <img
                  src={avatarTwo}
                  alt="avatar 2"
                  className="absolute -top-5 left-1/2 -translate-x-1/2 w-8"
                />
                <img
                  src={avatarThree}
                  alt="avatar 3"
                  className="absolute -left-4 top-1/2 -translate-y-1/2 w-8"
                />

                <div className="border-[.7rem] border-[#E8F0FD] w-10 h-10 rounded-full"></div>
              </div>
            </div>
          </aside>

          {/* Aside Two */}

          <aside className="flex flex-col gap-4 bg-gradient-to-b from-[#F5EBFA] from-[54.69%] to-[#EBF5FF] to-100% p-4 rounded-lg sm:flex-row sm:items-center">
            <article className="flex flex-col gap-3 font-Manrope text-[#161616]">
              <h2 className="text-2xl font-semibold">Customizable Dashboard</h2>
              <p className="text-sm font-light">
                asily track spending, monitor balances, and view transaction
                history all in one place. Take control of your finances and see
                the information that matters most to you.
              </p>
            </article>
            <div className="flex flex-col justify-center items-center bg-white gap-4 rounded-lg p-2 w-1/2 sm:w-full">
              <p className="text-[#979797] text-xs">Business account</p>
              <div className="flex justify-center items-center gap-2 font-bold">
                <p>$50,099</p>
                <img src={vectorOne} alt="vector One" />
              </div>
              <img src={vectorTwo} alt="vector two" className="w-40" />
              <img src={vectorThree} alt="vector three" />
            </div>
          </aside>
        </section>

        <section className="grid gap-4 mt-28 sm:grid-cols-2 sm:gap-10">
          <div className="">
            <div className="bg-Primary-Background rounded-md relative h-80">
              <img
                src={avatarFour}
                alt="feature img four"
                className="absolute h-96 w-44 bottom-0 left-7 z-"
              />
            </div>
            <div></div>
          </div>

          <div className="font-Manrope flex flex-col gap-4">
            <h2 className="font-bold text-xl">Instant visa card</h2>
            <p className="text-xs">
              Introducing our new instant Visa card feature! With just a few
              taps in our app, you can instantly create a virtual Visa card and
              start making purchases online or in-store. Say goodbye to waiting
              for your physical card to arrive in the mail and hello to instant
              spending power. Try it today and experience the convenience of our
              fintech app.
            </p>
            <ul>
              <li className="flex gap-4 items-center pb-3">
                <img src={vectorFour} alt="vector four" className=" w-4 h-4" />
                <p className="text-xs">Instant access to funds</p>
              </li>
              <li className="flex gap-4 items-center pb-3">
                <img src={vectorFour} alt="vector four" className=" w-4 h-4" />
                <p className="text-xs">Convenience</p>
              </li>
              <li className="flex gap-4 items-center pb-3">
                <img src={vectorFour} alt="vector four" className=" w-4 h-4" />
                <p className="text-xs">Flexibility</p>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-xl pb-3">Easy tracking</h2>
            <p className="text-xs">
              Easily track your payments with our payment tracking feature.
              Monitor your bills and payments in one place, and get alerts when
              bills are due, so you never miss a payment again. With our app,
              you can simplify your finances and stay organized.
            </p>
          </div>

          <div className="bg-Orange-Accent h-72 w-72 flex justify-center items-center rounded-full relative overflow-x-hidden">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4 bg-white px-4 py-1 rounded-3xl font-Manrope translate-x-10">
                <img src={profileOne} alt="profile one" className="w-6" />
                <div className="">
                  <h3 className="bg-[#EBEBF6] text-[#3734A9] font-semibold rounded-lg w-[4rem] px-2 text-xs mb-">
                    $28,900
                  </h3>
                  <p className="text-[#3734A9] text-[10px]">
                    Received from Michael V
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 py-1 rounded-3xl font-Manrope translate-x-24">
                <img src={profileOne} alt="profile one" className="w-6" />
                <div className="">
                  <h3 className="bg-[#EBEBF6] text-[#3734A9] font-semibold rounded-lg w-[4rem] px-2 text-xs mb-">
                    $28,900
                  </h3>
                  <p className="text-[#3734A9] text-[10px]">
                    Received from Michael V
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 py-1 rounded-3xl font-Manrope translate-x-20">
                <img src={profileOne} alt="profile one" className="w-6" />
                <div className="">
                  <h3 className="bg-[#EBEBF6] text-[#3734A9] font-semibold rounded-lg w-[4rem] px-2 text-xs mb-">
                    $28,900
                  </h3>
                  <p className="text-[#3734A9] text-[10px]">
                    Received from Michael V
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-white px-4 py-1 rounded-3xl font-Manrope translate-x-10">
                <img src={profileOne} alt="profile one" className="w-6" />
                <div className="">
                  <h3 className="bg-[#EBEBF6] text-[#3734A9] font-semibold rounded-lg w-[4rem] px-2 text-xs mb-">
                    $28,900
                  </h3>
                  <p className="text-[#3734A9] text-[10px]">
                    Received from Michael V
                  </p>
                </div>
              </div>

              <img
                src={rainDropBottom}
                alt="rain drop"
                className="w-10 absolute top-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </section>

        <section>
          <div className="text-center font-Manrope py-10">
            <h2 className="font-bold text-xl text-[#131313] pb-4">
              We have more offers for you.
            </h2>
            <p className="text-xs text-[#161616]">
              With features like customizable dashboards, real-time alerts, and
              secure data encryption, you can effortlessly manage your
              transactions and take control of your financial life.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:gap-20">
            <div className="bg-Orange-Accent p-4 rounded-2xl font-Manrope">
              <h3 className="font-bold text-lg py-2 mt-3">
                Send and receive without borders
              </h3>
              <p className="text-[#3734A9]">Explore Payments</p>
              <div className="bg-[#3B3E47] rounded-lg mt-12 text-white px-4 py-8 mx-">
                <h5 className="text-xs font-light">Amount</h5>
                <p className="font-extralight py-3">NGN 1,000,000</p>
                <h6 className="font-extralight text-xs text-[#666972]">
                  Choose Amount
                </h6>
                <div className="flex items-center gap-3 bg-Orange-Accent px-2 py-[6px] my-2 rounded-xl">
                  <div className="p-[2px] bg-gradient-to-b from-[#D6E9FF]  to-[#4098FF] rounded-lg shadow-md shadow-slate-600 w-8 h-7 relative">
                    <img
                      src={vectorFive}
                      alt="vector five"
                      className="absolute top-[9px] right-[3px]"
                    />
                  </div>
                  <div>
                    <p className="text-xs">Card Holder</p>
                    <p className="text-xs">**** **** **** 5432</p>
                  </div>
                  <div className=" p-[2px] bg-gray-100 ml-5 rounded-full shadow-md shadow-slate-900 w-6 h-6 relative">
                    <img
                      src={vectorSix}
                      alt="vector six"
                      className="w-4 h-4 absolute top-[6px]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-transparent px-2 py-[6px] my-2 rounded-xl">
                  <div className="p-[2px] bg-gradient-to-b from-[#D6E9FF]  to-[#4098FF] rounded-lg shadow-md shadow-slate-600 w-8 h-7 grid place-content-center">
                    <div className="grid grid-cols-2 place-content-center">
                      <div className="bg-[#EE0000] h-3 w-3 rounded-full shadow-md shadow-black translate-x-[2px]"></div>
                      <div className="bg-[#FFA051] h-3 w-3 rounded-full shadow-md shadow-black -translate-x-[2px]"></div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs">Card Holder</p>
                    <p className="text-xs">**** **** **** 5432</p>
                  </div>
                  <div className=" p-[2px] bg-[#717479] ml-5 rounded-full shadow-md shadow-slate-900 w-6 h-6"></div>
                </div>
              </div>
              <button className="bg-[#00AA8C] text-white text-sm w-full rounded-b-xl p-4 -mt-10">
                Continue
              </button>
            </div>

            <div className="bg-Primary-Background p-4 rounded-xl font-Manrope">
              <h4 className="text-white">Invoices that work smarter</h4>
              <p className="text-Orange-Accent text-xs">
                Learn more about Invoices
              </p>

              <div className="mt-20 mx-4 mb-6 bg-white rounded-xl p-4 relative">
                <div className="flex items-center absolute -top-9 -right-3 b-[rgba(189, 212, 241, 0.20)] shadow-sm shadow-slate-400 rounded-lg backdrop-blur-sm">
                  <img src={vectorSeven} alt="vector seven" />
                  <div>
                    <p>New iMac</p>
                    <input
                      type="range"
                      name=""
                      id=""
                      className="bg-[#BDD4F1]"
                    />
                  </div>
                  <p className="text-[#BDD4F1]">50%</p>
                </div>
                <p className="bg-[#BDD4F1] font-bold text-white px-3 py-2 inline-block rounded-full">
                  $
                </p>
                <div className="py-10 ">
                  <div className="bg-[#3734A9] opacity-20 h-2 w-20 selection:rounded-lg"></div>
                  <div className="text-[#3734A9] py-2">
                    5995 7474 1103 7513 0014
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex gap-8">
                        <div className="bg-[#3734A9] opacity-20 h-2 w-10 mt-1 rounded-full"></div>
                        <div className="bg-[#3734A9] opacity-20 h-2 w-10 mt-1 rounded-full"></div>
                      </div>
                      <div className="flex gap-5">
                        <div className="bg-[#3734A9] opacity-20 h-3 w-14 mt-2 rounded-full"></div>
                        <div className="bg-[#3734A9] opacity-20 h-3 w-14 mt-2 rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-[#3734A9]">11/12</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="bg-[#00AA8C] p-4 my-4 font-Manrope rounded-md relative ">
            <h3 className="text-white">
              Smart company debit cards help you and your team go further
            </h3>
            <p className="text-Orange-Accent text-xs pb-60">
              Learn more about Cards
            </p>
            <img
              src={avatarFive}
              alt="feature image five"
              className="absolute bottom-0 right-0 sm:w-96 sm:rounded-3xl"
            />
          </div>
        </section>

        <section className="relative sm:px-14 md:px-28 lg:px-36 xl:px-44">
          <div className="font-Manrope text-center bg-Primary-Background rounded-3xl p-8 absolute w-[80vw] left-[25px] sm:-left-[25px] h-44">
            <h2 className="text-white font-md font-semibold">
              We offer personalized savings suggestions
            </h2>
            <button className="text-white text-[10px] bg-Orange-Accent py-2 px-4 rounded-3xl mt-3">
              Create Account
            </button>
          </div>
          <img
            src={rainDrop}
            alt="rain drop"
            className="absolute w-10 top-24 right-3"
          />
          <img
            src={rainDrop}
            alt="rain drop"
            className="absolute w-10 top-24 left-3"
          />
          <img
            src={vectorEight}
            alt="vector eight"
            className="w-6 absolute top-0 left-0"
          />
          <img
            src={vectorNine}
            alt="vector nine"
            className="w-10 absolute top-4 left-8"
          />
        </section>
      </div>
    </>
  );
}
