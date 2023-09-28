import { useState } from "react";
import "../App.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((open) => !open);
    // alert("working")
  }


  return (
    <>
      <nav
        className="bg-Primary-Background font-Manrope relative sm:px-14 md:px-28 lg:px-36 xl:px-44"
      >
        <div className="bg-Primary-Background flex items-center justify-between p-5 backdrop-blur-md shadow-2xl sticky w-full top-0 sm:hidden">
          <p className="text-white relative before:content-[''] before:w-6 before:h-6 before:bg-Orange-Accent before:absolute before:rounded-full before:-left-2 before:-z-10 z-20">
            Mospending
          </p>

          <i
            onClick={handleClick}
            class={`fa-solid text-xl text-white cursor-pointer ${
              isOpen ? "fa-caret-down" : " fa-bars"
            }`}
          ></i>
        </div>

        <div
          className={`flex flex-col text-center pt-2 pb-14 duration-700 ${
            isOpen ? "" : "-mt-[300px]"
          } sm:mt-0 sm:flex-row sm:justify-between sm:items-center`}
        >
          <div className="text-white opacity-0 sm:opacity-100">
            <p className="text-white relative before:content-[''] before:w-6 before:h-6 before:bg-Orange-Accent before:absolute before:rounded-full before:-left-2 before:-z-10 z-20">
              Mospending
            </p>
          </div>

          <ul className="flex flex-col text-[#F4F4F4] font-light gap-3 p-4 sm:flex-row sm:items-center">
            <li className="px-2 hover:text-Orange-Accent duration-300">Home</li>
            <li className="px-2  hover:text-Orange-Accent duration-300">Product</li>
            <li className="px-2  hover:text-Orange-Accent duration-300">Company</li>
            <li className="px-2  hover:text-Orange-Accent duration-300">Utilitity</li>

            <button className="bg-[#3777F9] self-center py-1 px-8 rounded-xl hover:opacity-40 duration-300">
              Login
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}
