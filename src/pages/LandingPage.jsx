import React, { useState } from "react";
import logo from "../assets/logo.png";
import landingpage from "../assets/landingPage.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full">
      <nav className="fixed z-10 w-full bg-indigo-50 md:absolute md:bg-transparent">
        <div className="container m-auto px-2 md:px-12 lg:px-7">
          <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
              <a
                href="/"
                aria-label="logo"
                className="flex space-x-2 items-center"
              >
                <img
                  src={logo}
                  className="w-12"
                  alt="tailus logo"
                  width="144"
                  height="133"
                />
                <span className="text-2xl font-bold text-indigo-400">
                  BD <span className="text-indigo-600">Vaccine</span>
                </span>
              </a>
              <button
                aria-label="hamburger"
                id="hamburger"
                className="relative w-10 h-10 -mr-2 lg:hidden"
                onClick={toggleMenu}
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className={`inset-0 w-6 h-0.5 m-auto rounded ${
                    menuOpen ? "bg-indigo-900" : "bg-indigo-400"
                  } transtion duration-300`}
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className={`inset-0 w-6 h-0.5 mt-2 m-auto rounded ${
                    menuOpen ? "bg-indigo-900" : "bg-indigo-400"
                  } transtion duration-300`}
                ></div>
              </button>
            </div>

            <div
              className={`${
                menuOpen ? "block" : "hidden"
              } w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12`}
            >
              <div className="w-full space-y-2 border-indigo-200 lg:space-y-0 md:w-max">
                <Link to="/signup">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition active:bg-indigo-200 focus:bg-indigo-100 sm:w-max"
                  >
                    <span className="block text-indigo-800 font-semibold text-lg">
                      Sign up
                    </span>
                  </button>
                </Link>
                <Link to="/signin">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition bg-indigo-300 hover:bg-indigo-100 active:bg-indigo-400 focus:bg-indigo-300 sm:w-max"
                  >
                    <span className="block text-indigo-900 font-semibold text-lg">
                      Login
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative bg-white">
        <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[2rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className="font-bold text-4xl text-indigo-900 md:text-5xl lg:w-10/12">
                Stay protected, get vaccinated - Your trusted source for
                COVID-19 vaccines in Bangladesh
              </h1>
              <p className="mt-8 text-gray-700 lg:w-10/12">
                Stay informed and up-to-date with your vaccine status &nbsp;
                <a href="/signin" className="text-indigo-700">
                  here
                </a>
                &nbsp;at your fingertips.
              </p>
            </div>
            <div className="ml-auto -mb-4 lg:-mb-0 lg:w-6/12">
              <img
                src={landingpage}
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
