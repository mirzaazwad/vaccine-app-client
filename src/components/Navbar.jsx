import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import PdfCertificate from "./PdfCertificate";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    if (localStorage.token) {
      localStorage.removeItem("token");
      localStorage.removeItem("nid");
      window.location.reload();
    }
  };

  const nid=localStorage.getItem("nid");

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/welcome" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            BD Vaccine
          </span>
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
            <li>
              <Link to="/welcome">
                <div className="w-full py-3 px-6 text-center rounded-full transition bg-white focus:bg-indigo-300 sm:w-max">
                  <span className="block text-indigo-900 font-semibold text-lg">
                    Home
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/vaccine-registration">
                <div className="w-full py-3 px-6 text-center rounded-full transition bg-white focus:bg-indigo-300 sm:w-max">
                  <span className="block text-indigo-900 font-bold text-lg">
                    Book A Vaccination
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/vaccines">
                <div className="w-full py-3 px-6 text-center rounded-full transition bg-white focus:bg-indigo-300 sm:w-max">
                  <span className="block text-indigo-900 font-semibold text-lg">
                    Vaccines
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/welcome">
                <PdfCertificate nid={nid}/>
              </Link>
            </li>

            <li>
              <button
                onClick={handleLogout}
                className="w-full py-3 px-6 text-center rounded-full transition bg-white focus:bg-indigo-300 sm:w-max"
              >
                <span className="block text-indigo-900 font-semibold text-lg">
                  Log Out
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
