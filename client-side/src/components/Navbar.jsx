import React, { useState } from "react";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";

function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-base-100 fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="max-w-screen-xl w-[225px] flex flex-wrap items-center gap-5 justify-between mx-[125px] sm:mx-[150px] py-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-bold hover:text-[#D1EF7F] hover:font-extrabold whitespace-nowrap text-slate-900">
            <div className="flex flex-row gap-2 items-center transition transform duration-500 animate ease-in-out hover:scale-125">
              <KeyboardAltOutlinedIcon /> Keysoda
            </div>
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-sticky"
            aria-expanded={isDropdownOpen}>
            <span className="sr-only">Open Dropdown Menu</span>
            <svg
              className={`w-5 h-5 ${isDropdownOpen ? "text-[#D1EF7F]" : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="#D1EF7F"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isDropdownOpen ? "flex pb-5" : "hidden"
          }`}
          id="navbar-sticky">
          <ul className="flex flex-col gap-5 items-center p-4 md:p-0 mt-4 font-medium border-[2px] border-[#D1EF7F] rounded-xl md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li className="bg-[#D1EF7F] px-3 py-2 rounded-2xl transition transform duration-500 animate ease-in-out hover:scale-125">
              <a
                href="#"
                className="block font-semibold py-2 px-3 text-slate-900 rounded md:bg-transparent md:text-white md:hover:text-white md:p-0"
                aria-current="page">
                Home
              </a>
            </li>
            <li className="transition transform duration-500 animate ease-in-out hover:scale-125">
              <a
                href="#"
                className="block py-2 px-3 text-slate-900 rounded hover:font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#D1EF7F] md:p-0">
                Browse
              </a>
            </li>
            <li className="transition transform duration-500 animate ease-in-out hover:scale-125">
              <a
                href="#"
                className="block py-2 px-3 text-slate-900 rounded hover:font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#D1EF7F] md:p-0">
                FAQ
              </a>
            </li>
            <li className="transition transform duration-500 animate ease-in-out hover:scale-125">
              <a
                href="#"
                className="block py-2 px-3 text-slate-900 rounded hover:font-semibold hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#D1EF7F] md:p-0">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
