import React from "react";
import { Link } from "react-router-dom";
import "../../assets/style/global.css";

const Navbar = ({ setIsLogin, title }) => {
  return (
    <>
      <header className="navbar m-[30px]">
        <section className="flex items-center">
          <img
            className="object-center"
            // src={require("../../../assets/img/coffee-icon.png")}
            src={require("../../assets/img/coffee-icon.png")}
          />
          <h1 className="text-center font-bold">Coffee Shop</h1>
        </section>
        <nav>
          <ul className="flex space-x-4">
            <li className="li-navbar hover:font-bold">
              <Link to="/home">
                <a>Home</a>
              </Link>
            </li>
            <li className="li-navbar hover:font-bold">
              <Link to="/products">
                <a>Product</a>
              </Link>
            </li>
            <li className="li-navbar hover:font-bold">
              <a
                className="font16px-reg rubik text-grey eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/Detail%20Product/index.html"
              >
                Your Cart
              </a>
            </li>
            <li className="li-navbar hover:font-bold">
              <a
                className="font16px-reg rubik text-grey eff-nav"
                href="file:///C:/Users/Capt.Rizky%20Aditya/OneDrive/Desktop/history/index.html"
              >
                History
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center">
          <div className="input-group relative flex flex-wrap items-stretch w-full ">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
        <section className="navcta">
          <div className="relative ml-3">
            <div>
              <button
                type="button"
                className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                id="user-menu-button"
                aria-expanded="false"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            <div
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              {/* <!-- Active: "bg-gray-100", Not Active: "" --> */}
              {/* <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-0"
              >
                Your Profile
              </a> */}
              {/* <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-1"
              >
                Settings
              </a> */}
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700"
                role="menuitem"
                tabindex="-1"
                id="user-menu-item-2"
                onClick={() => {
                  localStorage.removeItem("@userLogin");
                  setIsLogin(false);
                }}
              >
                Sign out
              </a>
            </div>
          </div>
        </section>
      </header>
      <hr />
    </>
  );
};

export default Navbar;
